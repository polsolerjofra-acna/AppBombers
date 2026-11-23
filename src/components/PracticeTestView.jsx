import React, { useState, useEffect, useMemo } from 'react';
import {
  ClipboardCheck,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  BarChart3,
  Sparkles,
  Filter,
  AlertTriangle,
  BookOpen,
  ExternalLink,
  Mail,
  Check,
  ArrowLeft
} from 'lucide-react';
import { OFFICIAL_EXAM_STATS_BY_TOPIC } from '../data/officialExamStats';
import { OFFICIAL_MANUALS } from '../data/manualsData';

const BANK_ANSWERED_KEY = 'bombers_answered_bank_ids_v1';
const BANK_CORRECT_KEY = 'bombers_correct_bank_ids_v1';
const REPORTS_KEY = 'bombers_question_reports_v1';
const LAST_ASKED_KEY = 'bombers_question_last_asked_v1';

function loadJsonSet(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

// Pesos estadístics estimats per a un Simulacre Oficial SGO 2026 (sobre 100 preguntes)
// Combina la freqüència històrica real (81/16–81/25: ~10% Lleis, ~38% Ciències/Tècnica, ~52% Operativa SGO)
// ajustada pels nous manuals operatius del temari SGO 2026.
const TOPIC_EXAM_WEIGHTS = {
  // Bloc General / Lleis (històricament menys preguntat: ~11% del total)
  1: 1.5, 2: 1.5, 3: 2.0, 4: 1.5, 5: 1.0, 6: 1.5, 7: 2.0,
  // Bloc Ciències i Tècnica (~32% del total)
  8: 6.0, 9: 4.5, 10: 5.0, 11: 3.5, 12: 4.0, 13: 4.0, 14: 2.0, 15: 3.5,
  // Bloc Intervenció i Operativa SGO (~57% del total)
  16: 2.5, 17: 2.5, 18: 2.5, 19: 4.0, 20: 3.0, 21: 2.0, 22: 2.5,
  23: 4.0, 24: 4.5, 25: 5.0, 26: 3.0, 27: 4.0, 28: 4.0, 29: 2.5,
  30: 2.5, 31: 2.5, 32: 3.5, 33: 2.0, 34: 2.5
};

// Pesos addicionals procedents d'exàmens de Promoció Interna (Caporal, Sergent, Oficial, Sotsinspector, Inspector)
// on tenen més pes la legislació operativa (T2, T6, T7), normativa PCI/edificació (T12, T15) i tàctica avançada (T23, T25, T27).
const PROMOTION_WEIGHT_BOOST = {
  1: 0.7, 2: 1.2, 3: 0.8, 6: 2.5, 7: 2.5,
  8: 0.5, 12: 1.5, 13: 0.6, 14: 0.4, 15: 0.8,
  17: 0.5, 19: 0.6, 20: 0.7, 21: 0.6, 23: 2.0,
  24: 0.7, 25: 1.8, 27: 1.6, 28: 0.5
};

function getTopicWeight(topicNumber, includePromotionStats = false) {
  let base;
  if (TOPIC_EXAM_WEIGHTS[topicNumber] !== undefined) {
    base = TOPIC_EXAM_WEIGHTS[topicNumber];
  } else {
    const hist = OFFICIAL_EXAM_STATS_BY_TOPIC[topicNumber];
    base = hist ? Math.max(1.5, hist.totalQuestions / 8) : 2.0;
  }
  if (!includePromotionStats) return base;
  return base + (PROMOTION_WEIGHT_BOOST[topicNumber] || 0);
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shufflePracticeQuestionOptions(q) {
  if (!Array.isArray(q?.options) || q.options.length < 2) return q;
  // No barregem si alguna opció fa referència posicional explícita ("a i c", "totes les anteriors", etc.)
  const hasPositionalRef = q.options.some((opt) =>
    /\b(a\s+i\s+[bcd]|b\s+i\s+[cd]|c\s+i\s+d|totes\s+les\s+anteriors|cap\s+de\s+les\s+anteriors|totes\s+són\s+correctes|cap\s+és\s+correcta)\b/i.test(
      String(opt || '')
    )
  );
  if (hasPositionalRef) return q;

  const indices = shuffleArray(q.options.map((_, i) => i));
  const newOptions = indices.map((i) => q.options[i]);
  const newCorrectIndex = indices.indexOf(q.correctIndex);
  return {
    ...q,
    options: newOptions,
    correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : q.correctIndex
  };
}

function sortWithCooldown(arr, lastAskedMap = {}) {
  // Prioritza preguntes mai vistes (0) i després les que fa més temps que van sortir
  const shuffled = shuffleArray(arr);
  return shuffled.sort((a, b) => (lastAskedMap[a.id] || 0) - (lastAskedMap[b.id] || 0));
}

function isCalculationQuestion(q) {
  if (!q) return false;
  if (q.isCalculation) return true;
  const txt = String(q.question || '');
  return /\d+[\s,.]*\d*\s*(m\/s|km\/h|bar|mca|kPa|Pa|kg|L\/min|litres|kcal|Ω|V|W|A|kW|N|J|K|°C|%|cm|metres|minuts|segons|escala\s*1:|1:\d+)/i.test(
    txt
  ) || /\b(calcula|quin volum|quina pressió|quina força|quina velocitat|quina intensitat|quina resistència|quant temps|quants litres|quants metres|quin pendent)\b/i.test(
    txt
  );
}

function ensureMinCalculationsPerTen(picked, poolTopics, getTopicPool) {
  if (!Array.isArray(picked) || picked.length === 0) return picked;
  const calcPool = [];
  const pickedIds = new Set(picked.map((q) => q.id));
  poolTopics.forEach((t) => {
    getTopicPool(t).forEach((q) => {
      if (!pickedIds.has(q.id) && isCalculationQuestion(q)) {
        calcPool.push({ ...q, _topicId: t.id, _topicNumber: t.number, _topicTitle: t.title });
      }
    });
  });
  if (calcPool.length === 0) return picked;

  const targetMinCalc =
    picked.length >= 10
      ? Math.floor(picked.length / 10)
      : picked.length >= 5
      ? 1
      : 0;
  if (targetMinCalc <= 0) return picked;

  const currentCalcCount = picked.filter(isCalculationQuestion).length;
  let needed = targetMinCalc - currentCalcCount;
  if (needed <= 0) return picked;

  const shuffledCalc = shuffleArray(calcPool);
  const result = [...picked];
  for (let i = 0; i < result.length && needed > 0 && shuffledCalc.length > 0; i++) {
    if (!isCalculationQuestion(result[i])) {
      result[i] = shuffledCalc.shift();
      needed--;
    }
  }
  return result;
}

function buildWeightedExamQuestions(
  topics,
  selectedIds,
  count,
  useOfficialWeights,
  lastAskedMap = {},
  includeExtension = true,
  correctBankMap = null
) {
  const getTopicPool = (t) => {
    const base = (t.quiz || []).filter((q) => includeExtension || !q.isExtension);
    if (!correctBankMap) return base;
    const unmastered = base.filter((q) => !correctBankMap[q.id]);
    // Només repetim preguntes ja encertades quan s'ha esgotat el banc d'aquell tema
    if (unmastered.length === 0) return base;
    if (unmastered.length >= count) return unmastered;
    const mastered = shuffleArray(base.filter((q) => Boolean(correctBankMap[q.id])));
    return [...unmastered, ...mastered];
  };
  const poolTopics = topics.filter((t) => selectedIds.includes(t.id) && getTopicPool(t).length > 0);
  if (poolTopics.length === 0) return [];

  if (!useOfficialWeights) {
    const all = [];
    poolTopics.forEach((t) => {
      getTopicPool(t).forEach((q) => {
        all.push({ ...q, _topicId: t.id, _topicNumber: t.number, _topicTitle: t.title });
      });
    });
    return shuffleArray(
      ensureMinCalculationsPerTen(shuffleArray(all).slice(0, count), poolTopics, getTopicPool)
    );
  }

  // Distribució proporcional segons probabilitat estadística d'examen
  const totalW = poolTopics.reduce((acc, t) => acc + getTopicWeight(t.number, includeExtension), 0);
  const byTopicShuffled = {};
  poolTopics.forEach((t) => {
    byTopicShuffled[t.id] = shuffleArray(
      getTopicPool(t).map((q) => ({ ...q, _topicId: t.id, _topicNumber: t.number, _topicTitle: t.title }))
    );
  });

  const picked = [];
  const usedIds = new Set();

  // Primera passada: assignació proporcional
  poolTopics.forEach((t) => {
    const share = Math.round((getTopicWeight(t.number, includeExtension) / totalW) * count);
    const list = byTopicShuffled[t.id] || [];
    for (let i = 0; i < share && i < list.length && picked.length < count; i++) {
      picked.push(list[i]);
      usedIds.add(list[i].id);
    }
  });

  // Segona passada: completar fins a `count` prioritzant temes amb més pes
  if (picked.length < count) {
    const remaining = [];
    const sortedTopics = [...poolTopics].sort(
      (a, b) => getTopicWeight(b.number, includeExtension) - getTopicWeight(a.number, includeExtension)
    );
    sortedTopics.forEach((t) => {
      (byTopicShuffled[t.id] || []).forEach((q) => {
        if (!usedIds.has(q.id)) remaining.push(q);
      });
    });
    for (const q of remaining) {
      if (picked.length >= count) break;
      picked.push(q);
      usedIds.add(q.id);
    }
  }

  return shuffleArray(ensureMinCalculationsPerTen(picked, poolTopics, getTopicPool));
}

export default function PracticeTestView({
  topics,
  initialTopicId = null,
  onGoBack = null,
  backLabel = '',
  userMistakes = {},
  onClearMistake = null,
  onRecordQuestionOutcome = null,
  onSaveQuizScore = null,
  onOpenTopicSummary = null,
  onOpenOfficialManual = null
}) {
  const [mode, setMode] = useState('practice'); // 'practice' | 'simulacre'
  const [selectedTopicIds, setSelectedTopicIds] = useState(() =>
    initialTopicId ? [initialTopicId] : topics.map((t) => t.id)
  );
  const [questionCount, setQuestionCount] = useState(25);
  const [useWeightedPractice, setUseWeightedPractice] = useState(true);
  const [practiceWithTimer, setPracticeWithTimer] = useState(false);
  const [practiceElapsedSec, setPracticeElapsedSec] = useState(0);
  const [includeExtension, setIncludeExtension] = useState(true);
  const [showStatsTable, setShowStatsTable] = useState(false);

  // Estat global del banc respost + encertat + informes/impugnacions
  const [answeredBankMap, setAnsweredBankMap] = useState(() => loadJsonSet(BANK_ANSWERED_KEY));
  const [correctBankMap, setCorrectBankMap] = useState(() => loadJsonSet(BANK_CORRECT_KEY));
  const [reportsMap, setReportsMap] = useState(() => loadJsonSet(REPORTS_KEY));
  const [openReportId, setOpenReportId] = useState(null);
  const [reportDraft, setReportDraft] = useState('');

  // Estat de sessió activa
  const [activeQuestions, setActiveQuestions] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [draftSelections, setDraftSelections] = useState({});
  const [simulacreImpugnations, setSimulacreImpugnations] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [showFinishConfirm, setShowFinishConfirm] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(85 * 60); // 85 minuts oficials (70 + 7 reserva)
  const [emailCopiedNotice, setEmailCopiedNotice] = useState(false);

  useEffect(() => {
    try {
      if (activeQuestions && !isFinished) {
        localStorage.setItem('bombers_active_test_pending', '1');
      } else {
        localStorage.removeItem('bombers_active_test_pending');
      }
    } catch {}
  }, [activeQuestions, isFinished]);

  // Pre-selecciona un tema concret si venim des de "Fer test d'aquest tema"
  useEffect(() => {
    if (initialTopicId) {
      setMode('practice');
      setSelectedTopicIds([initialTopicId]);
      setActiveQuestions(null);
    }
  }, [initialTopicId]);

  // Cronòmetre opcional en Mode Pràctica (s'atura en finalitzar)
  useEffect(() => {
    if (!activeQuestions || mode !== 'practice' || !practiceWithTimer || isFinished) return;
    const interval = setInterval(() => {
      setPracticeElapsedSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [activeQuestions, mode, practiceWithTimer, isFinished]);

  // Temporitzador en Mode Simulacre
  useEffect(() => {
    if (!activeQuestions || mode !== 'simulacre' || isFinished) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [activeQuestions, mode, isFinished]);

  const usePromotionStats = mode === 'practice' && includeExtension;

  const blockStats = useMemo(() => {
    const groups = [
      { id: 'lleis', label: 'Bloc General / Lleis (T1–T7)', range: [1, 7], color: 'bg-slate-500' },
      { id: 'ciencies', label: 'Ciències i Tècnica (T8–T15)', range: [8, 15], color: 'bg-blue-600' },
      { id: 'operativa', label: 'Intervenció i Operativa SGO (T16–T34)', range: [16, 34], color: 'bg-red-600' }
    ];
    const totalW = topics.reduce((acc, t) => acc + getTopicWeight(t.number, usePromotionStats), 0);
    return groups.map((g) => {
      const gTopics = topics.filter((t) => t.number >= g.range[0] && t.number <= g.range[1]);
      const w = gTopics.reduce((acc, t) => acc + getTopicWeight(t.number, usePromotionStats), 0);
      const pct = totalW > 0 ? Math.round((w / totalW) * 100) : 0;
      const totalAvail = gTopics.reduce(
        (acc, t) => acc + (t.quiz || []).filter((q) => usePromotionStats || !q.isExtension).length,
        0
      );
      return { ...g, pct, topicsCount: gTopics.length, totalAvail };
    });
  }, [topics, usePromotionStats]);

  const toggleTopic = (id) => {
    setSelectedTopicIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const selectByRange = (min, max) => {
    setSelectedTopicIds(topics.filter((t) => t.number >= min && t.number <= max).map((t) => t.id));
  };

  const startTest = (chosenMode) => {
    const targetMode = chosenMode || mode;
    setMode(targetMode);
    const targetIds = targetMode === 'simulacre' ? topics.map((t) => t.id) : selectedTopicIds;
    const count = targetMode === 'simulacre' ? 77 : Math.max(1, Number(questionCount) || 20); // 70 + 7 de reserva
    const weighted = targetMode === 'simulacre' ? true : useWeightedPractice;
    const allowExtension = targetMode === 'simulacre' ? false : includeExtension;
    const lastAskedMap = loadJsonSet(LAST_ASKED_KEY);

    const qs = buildWeightedExamQuestions(
      topics,
      targetIds,
      count,
      weighted,
      lastAskedMap,
      allowExtension,
      targetMode === 'practice' ? correctBankMap : null
    ).map(shufflePracticeQuestionOptions);
    const now = Date.now();
    const updatedAsked = { ...lastAskedMap };
    qs.forEach((q, idx) => {
      updatedAsked[q.id] = now + idx;
    });
    try {
      localStorage.setItem(LAST_ASKED_KEY, JSON.stringify(updatedAsked));
    } catch {}

    setActiveQuestions(qs);
    setCurrentQuestionIdx(0);
    setAnswers({});
    setDraftSelections({});
    setSimulacreImpugnations({});
    setIsFinished(false);
    setShowFinishConfirm(false);
    setEmailCopiedNotice(false);
    setPracticeElapsedSec(0);
    setSecondsLeft(85 * 60);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const todayISO = new Date().toISOString().split('T')[0];

  const mistakesSummary = useMemo(() => {
    const entries = Object.values(userMistakes || {}).filter((m) => m && m.id);
    const sorted = [...entries].sort((a, b) => {
      const da = a.nextReviewAt || '0000-00-00';
      const db = b.nextReviewAt || '0000-00-00';
      if (da !== db) return da.localeCompare(db);
      return (b.count || 1) - (a.count || 1);
    });
    const due = sorted.filter((m) => !m.nextReviewAt || m.nextReviewAt <= todayISO);
    const upcoming = sorted.filter((m) => m.nextReviewAt && m.nextReviewAt > todayISO);
    return { all: sorted, due, upcoming };
  }, [userMistakes, todayISO]);

  const startMistakeReview = (onlyDue = true) => {
    const targetList = onlyDue && mistakesSummary.due.length > 0 ? mistakesSummary.due : mistakesSummary.all;
    if (targetList.length === 0) return;

    const lookup = new Map();
    topics.forEach((t) => {
      (t.quiz || []).forEach((q) => {
        lookup.set(q.id, { ...q, _topicId: t.id, _topicNumber: t.number, _topicTitle: t.title });
      });
    });

    const qs = targetList
      .map((m) => lookup.get(m.id))
      .filter(Boolean)
      .map(shufflePracticeQuestionOptions);

    if (qs.length === 0) return;

    setMode('practice');
    setActiveQuestions(qs);
    setCurrentQuestionIdx(0);
    setAnswers({});
    setDraftSelections({});
    setSimulacreImpugnations({});
    setIsFinished(false);
    setShowFinishConfirm(false);
    setEmailCopiedNotice(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalBankQuestions = useMemo(
    () => topics.reduce((acc, t) => acc + (t.quiz?.length || 0), 0),
    [topics]
  );
  const answeredBankCount = Object.keys(answeredBankMap).length;
  const bankCoveragePct =
    totalBankQuestions > 0 ? Math.min(100, Math.round((answeredBankCount / totalBankQuestions) * 100)) : 0;

  const markQuestionAnsweredInBank = (questionId) => {
    if (!questionId) return;
    setAnsweredBankMap((prev) => {
      if (prev[questionId]) return prev;
      const next = { ...prev, [questionId]: true };
      try {
        localStorage.setItem(BANK_ANSWERED_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleSubmitReport = (q) => {
    if (!reportDraft.trim()) return;
    const entry = {
      questionId: q.id,
      topicNumber: q._topicNumber,
      mode,
      type: mode === 'simulacre' ? 'impugnacio' : 'error',
      reason: reportDraft.trim(),
      validated: mode === 'simulacre',
      createdAt: new Date().toISOString()
    };
    if (mode === 'simulacre') {
      setSimulacreImpugnations((prev) => ({ ...prev, [q.id]: entry }));
    }
    setReportsMap((prev) => {
      const next = { ...prev, [q.id]: entry };
      try {
        localStorage.setItem(REPORTS_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
    setOpenReportId(null);
    setReportDraft('');
  };

  const handleRemoveSimulacreImpugnation = (questionId) => {
    setSimulacreImpugnations((prev) => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
  };

  const handleSelectOption = (q, optIdx) => {
    if (isFinished) return;
    if (mode === 'practice') {
      // En mode pràctica, primer es deixa seleccionada com a provisional fins que l'usuari cliqui "Validar resposta"
      if (answers[q.id] !== undefined) return;
      setDraftSelections((prev) => {
        if (prev[q.id] === optIdx) {
          const copy = { ...prev };
          delete copy[q.id];
          return copy;
        }
        return { ...prev, [q.id]: optIdx };
      });
      return;
    }

    setAnswers((prev) => {
      // En simulacre, clicar la mateixa opció la deixa en blanc (sense penalització!)
      if (prev[q.id] === optIdx) {
        const copy = { ...prev };
        delete copy[q.id];
        return copy;
      }
      return { ...prev, [q.id]: optIdx };
    });

    markQuestionAnsweredInBank(q.id);
  };

  const handleValidatePracticeOption = (q) => {
    if (isFinished || mode !== 'practice') return;
    if (answers[q.id] !== undefined) return;
    const chosen = draftSelections[q.id];
    if (chosen === undefined) return;

    setAnswers((prev) => ({ ...prev, [q.id]: chosen }));
    markQuestionAnsweredInBank(q.id);
    if (chosen === q.correctIndex) {
      setCorrectBankMap((prev) => {
        if (prev[q.id]) return prev;
        const next = { ...prev, [q.id]: true };
        try {
          localStorage.setItem(BANK_CORRECT_KEY, JSON.stringify(next));
        } catch {}
        return next;
      });
    }

    if (onRecordQuestionOutcome) {
      onRecordQuestionOutcome(q._topicId, q._topicNumber, q, chosen === q.correctIndex);
    }
  };

  const finishExam = () => {
    setShowFinishConfirm(false);
    setIsFinished(true);
    if (mode === 'simulacre' && onRecordQuestionOutcome && activeQuestions) {
      activeQuestions.forEach((q) => {
        if (answers[q.id] !== undefined) {
          const isOk = answers[q.id] === q.correctIndex;
          onRecordQuestionOutcome(q._topicId, q._topicNumber, q, isOk);
          if (isOk) {
            setCorrectBankMap((prev) => {
              if (prev[q.id]) return prev;
              const next = { ...prev, [q.id]: true };
              try {
                localStorage.setItem(BANK_CORRECT_KEY, JSON.stringify(next));
              } catch {}
              return next;
            });
          }
        }
      });
    }
    if (onSaveQuizScore && activeQuestions && activeQuestions.length > 0) {
      const correct = activeQuestions.filter((q) => answers[q.id] === q.correctIndex).length;
      onSaveQuizScore(
        mode === 'simulacre' ? 'simulacre-oficial' : 'practica-lliure',
        correct,
        activeQuestions.length
      );
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // Vista de test actiu / resultats
  if (activeQuestions) {
    const totalQ = activeQuestions.length;
    const answeredCount = Object.keys(answers).length;
    const rawMainQuestions = mode === 'simulacre' ? activeQuestions.slice(0, 70) : activeQuestions;
    const reserveQuestions = mode === 'simulacre' ? activeQuestions.slice(70, 77) : [];
    const impugnedMainCount =
      mode === 'simulacre' && isFinished
        ? Math.min(7, rawMainQuestions.filter((q) => Boolean(simulacreImpugnations[q.id])).length)
        : 0;
    const mainQuestions =
      mode === 'simulacre' && isFinished
        ? [
            ...rawMainQuestions.filter((q) => !simulacreImpugnations[q.id]),
            ...reserveQuestions.slice(0, impugnedMainCount)
          ]
        : rawMainQuestions;
    const mainTotal = mainQuestions.length;
    const mainAnswered = mainQuestions.filter((q) => answers[q.id] !== undefined).length;
    const correctCount = mainQuestions.filter((q) => answers[q.id] === q.correctIndex).length;
    const wrongCount = mainAnswered - correctCount;
    const blankCount = mainTotal - mainAnswered;
    // Penalització oficial 4 opcions: 3 errades resten 1 encert (-1/3)
    const netPoints = Math.max(0, correctCount - wrongCount / 3);
    const score10 = mainTotal > 0 ? ((netPoints / mainTotal) * 10).toFixed(2) : '0.00';

    return (
      <div className="space-y-5">
        {/* Barra superior de control */}
        <div className="sticky top-2 z-20 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 shadow-md flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className={`text-xs font-extrabold uppercase px-3 py-1 rounded-full ${
                mode === 'simulacre'
                  ? 'bg-red-600 text-white'
                  : 'bg-blue-600 text-white'
              }`}
            >
              {mode === 'simulacre' ? 'Simulacre Oficial (70 + 7 reserva)' : 'Pràctica Lliure'}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
              Respostes: {answeredCount}/{totalQ} ({Math.round((answeredCount / Math.max(1, totalQ)) * 100)}%)
            </span>
            {mode === 'practice' && (
              <span className="text-xs font-extrabold text-slate-700 dark:text-slate-200">
                · Nota: <strong className="text-blue-600 dark:text-blue-400">{score10}/10</strong> (
                <span className="text-emerald-600">{correctCount}✓</span> /{' '}
                <span className="text-red-600">{wrongCount}✗</span>)
              </span>
            )}
            <span className="hidden md:inline text-xs font-semibold text-slate-500 dark:text-slate-400">
              · Banc global: {answeredBankCount}/{totalBankQuestions} ({bankCoveragePct}%)
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {mode === 'practice' && practiceWithTimer && (
              <div className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-extrabold border bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{formatTime(practiceElapsedSec)}</span>
              </div>
            )}
            {mode === 'simulacre' && !isFinished && (
              <div
                className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-extrabold border ${
                  secondsLeft <= 600
                    ? 'bg-red-50 dark:bg-red-950/60 border-red-400 text-red-700 dark:text-red-300 animate-pulse'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>{formatTime(secondsLeft)}</span>
              </div>
            )}

            {!isFinished ? (
              <button
                onClick={() => (mode === 'simulacre' ? setShowFinishConfirm(true) : finishExam())}
                className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-xs font-extrabold shadow-sm"
              >
                Corregir i Finalitzar
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-2">
                {onGoBack && (
                  <button
                    type="button"
                    onClick={onGoBack}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-xs font-extrabold shadow-xs"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Continuar on estava{backLabel ? ` (${backLabel})` : ''}</span>
                  </button>
                )}
                <button
                  onClick={() => setActiveQuestions(null)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 text-xs font-extrabold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Configurar nou test</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Resultat final */}
        {isFinished && (
          <div className="rounded-3xl border-2 border-emerald-500/40 bg-emerald-50/70 dark:bg-emerald-950/30 p-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Nota Neta: {score10} / 10
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-0.5">
                  Encerts: <strong className="text-emerald-700 dark:text-emerald-400">{correctCount}</strong> ·{' '}
                  Fallades: <strong className="text-red-600 dark:text-red-400">{wrongCount}</strong> (-0,33/errada) ·{' '}
                  En blanc: <strong>{blankCount}</strong>
                  {mode === 'practice' && practiceWithTimer && (
                    <>
                      {' · '}Temps: <strong>{formatTime(practiceElapsedSec)}</strong> (
                      <strong>{(practiceElapsedSec / Math.max(1, mainAnswered || 1)).toFixed(1)} s/preg</strong>)
                    </>
                  )}
                  {mode === 'simulacre' && impugnedMainCount > 0 && (
                    <>
                      {' · '}Impugnacions validades:{' '}
                      <strong className="text-amber-700 dark:text-amber-400">
                        {impugnedMainCount}/7
                      </strong>{' '}
                      (Reserva activada: {impugnedMainCount}/7)
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  const letters = ['A', 'B', 'C', 'D'];
                  const today = new Date().toISOString().slice(0, 10);
                  const header = [
                    `APPBOMBERS · CORRECCIÓ ${mode === 'simulacre' ? 'SIMULACRE OFICIAL' : 'PRÀCTICA'} (${today})`,
                    `Nota neta: ${score10} / 10 | Encerts: ${correctCount} | Errades: ${wrongCount} | En blanc: ${blankCount}`,
                    '='.repeat(60),
                    ''
                  ].join('\n');

                  const details = activeQuestions
                    .map((q, i) => {
                      const userIdx = answers[q.id];
                      const status =
                        userIdx === undefined
                          ? 'EN BLANC'
                          : userIdx === q.correctIndex
                          ? 'CORRECTA'
                          : 'ERRADA';
                      const userTxt = userIdx !== undefined ? `${letters[userIdx]}) ${q.options[userIdx]}` : 'Cap (en blanc)';
                      const rightTxt = `${letters[q.correctIndex]}) ${q.options[q.correctIndex]}`;
                      const imp = reportsMap[q.id] ? `\nImpugnació: ${reportsMap[q.id].reason}` : '';
                      return [
                        `P${i + 1} [Tema ${q._topicNumber} · ${status}] ${q.question}`,
                        `La teva resposta: ${userTxt}`,
                        `Resposta correcta: ${rightTxt}`,
                        `Explicació: ${q.explanation || '-'}${imp}`,
                        ''
                      ].join('\n');
                    })
                    .join('\n');

                  const fullReport = header + details;
                  try {
                    navigator.clipboard?.writeText(fullReport);
                    setEmailCopiedNotice(true);
                    setTimeout(() => setEmailCopiedNotice(false), 5000);
                  } catch {}

                  // També obrim el client de correu amb un resum i les errades/en blanc (dins el límit segur d'URL)
                  const failedOnly = activeQuestions
                    .map((q, i) => ({ q, i, userIdx: answers[q.id] }))
                    .filter((x) => x.userIdx !== x.q.correctIndex)
                    .map(({ q, i, userIdx }) => {
                      const userTxt = userIdx !== undefined ? `${letters[userIdx]}) ${q.options[userIdx]}` : 'En blanc';
                      const rightTxt = `${letters[q.correctIndex]}) ${q.options[q.correctIndex]}`;
                      return `P${i + 1} (T${q._topicNumber}): ${q.question}\nLa teva: ${userTxt}\nCorrecta: ${rightTxt}\nExplicació: ${q.explanation || '-'}\n`;
                    })
                    .join('\n');

                  const mailBodyRaw = `${header}${failedOnly || 'Cap errada! Tot perfecte.'}\n\n[Nota: s'ha copiat la correcció completa de les ${activeQuestions.length} preguntes al porta-retalls per si la vols enganxar.]`;
                  const mailBody = mailBodyRaw.slice(0, 1750);
                  const subject = encodeURIComponent(`AppBombers · Correcció ${mode === 'simulacre' ? 'Simulacre Oficial' : 'Test'} (${today}) · Nota ${score10}/10`);
                  window.location.href = `mailto:?subject=${subject}&body=${encodeURIComponent(mailBody)}`;
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 text-xs font-extrabold shadow-sm transition"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar còpia corregida al correu</span>
              </button>
              {emailCopiedNotice && (
                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                  ✓ Informe complet copiat al porta-retalls
                </span>
              )}
            </div>
          </div>
        )}

        {/* Modal de confirmació abans de finalitzar el Simulacre */}
        {showFinishConfirm && !isFinished && mode === 'simulacre' && (() => {
          const unanswered = activeQuestions
            .map((q, idx) => ({ q, idx }))
            .filter(({ q }) => answers[q.id] === undefined);

          return (
            <div className="rounded-2xl border-2 border-amber-400 bg-amber-50 dark:bg-amber-950/50 p-5 shadow-md space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                    Estàs segur que vols finalitzar i corregir el simulacre?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1">
                    {unanswered.length === 0
                      ? 'Has respost totes les 77 preguntes!'
                      : `Tens ${unanswered.length} pregunta${unanswered.length === 1 ? '' : 'es'} en blanc. Clica qualsevol casella per anar-hi directament abans d'acabar:`}
                  </p>
                </div>
              </div>

              {unanswered.length > 0 && (
                <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto p-2 rounded-xl bg-white/80 dark:bg-slate-900/70 border border-amber-200 dark:border-amber-900/60">
                  {unanswered.map(({ idx }) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setCurrentQuestionIdx(idx);
                        setShowFinishConfirm(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/40 px-2.5 py-1 text-xs font-extrabold text-slate-800 dark:text-slate-100 transition"
                    >
                      {idx >= 70 ? `R${idx - 69} (#${idx + 1})` : `#${idx + 1}`}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowFinishConfirm(false)}
                  className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-xs font-extrabold text-slate-700 dark:text-slate-200 hover:bg-slate-100"
                >
                  Tornar a revisar
                </button>
                <button
                  type="button"
                  onClick={finishExam}
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-xs font-extrabold shadow-sm"
                >
                  Sí, finalitzar i corregir ✓
                </button>
              </div>
            </div>
          );
        })()}

        {/* Llista de preguntes + graella lateral 1..77 en mode simulacre */}
        <div className={!isFinished && mode === 'simulacre' ? 'grid grid-cols-1 lg:grid-cols-[1fr_270px] gap-5 items-start' : ''}>
        <div className="space-y-4 min-w-0">
        <div className="space-y-4">
          {(isFinished
            ? activeQuestions.map((q, idx) => ({ q, idx }))
            : activeQuestions[currentQuestionIdx]
            ? [{ q: activeQuestions[currentQuestionIdx], idx: currentQuestionIdx }]
            : []
          ).map(({ q, idx }) => {
            const choice = answers[q.id];
            const showFeedback = isFinished || (mode === 'practice' && choice !== undefined);
            const isCorrect = choice === q.correctIndex;

            return (
              <div
                key={`${q.id}-${idx}`}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-slate-500 dark:text-slate-400">
                      Pregunta #{idx + 1} · Tema {q._topicNumber}
                    </span>
                    {mode === 'simulacre' && idx >= 70 && (() => {
                      const reserveIdx = idx - 70;
                      const isActivated = isFinished && reserveIdx < impugnedMainCount;
                      return (
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                            isActivated
                              ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {isFinished
                            ? isActivated
                              ? `RESERVA ${reserveIdx + 1}/7 · ACTIVADA PER IMPUGNACIÓ ✓`
                              : `RESERVA ${reserveIdx + 1}/7 · NO ACTIVADA`
                            : `RESERVA ${reserveIdx + 1}/7 · (només s'activa si s'impugna)`}
                        </span>
                      );
                    })()}
                    {mode === 'simulacre' && isFinished && idx < 70 && simulacreImpugnations[q.id] && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                        ANUL·LADA PER IMPUGNACIÓ
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {userMistakes[q.id] && (
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
                        Corba Oblit · Etapa {(userMistakes[q.id].reviewStage || 0)}/4 · Fallada {userMistakes[q.id].count || 1}x
                      </span>
                    )}
                    {q.isOfficialExam && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800">
                        Oficial
                      </span>
                    )}
                    {q.isExtension && (
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                        {q.extensionLabel || "Material d'ampliació"}
                      </span>
                    )}
                    {q.difficulty && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {q.difficulty}
                      </span>
                    )}
                    {((mode === 'simulacre' && isFinished && idx < 70) || (mode === 'practice' && showFeedback)) && (
                      simulacreImpugnations[q.id] && mode === 'simulacre' ? (
                        <button
                          onClick={() => handleRemoveSimulacreImpugnation(q.id)}
                          className="inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-[10px] font-bold border bg-amber-100 dark:bg-amber-950/60 border-amber-300 text-amber-800 dark:text-amber-300 hover:bg-amber-200 transition"
                        >
                          <AlertTriangle className="w-3 h-3" />
                          <span>Impugnada · Anul·lar</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setOpenReportId(openReportId === q.id ? null : q.id);
                            setReportDraft(reportsMap[q.id]?.reason || '');
                          }}
                          className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-[10px] font-bold border transition ${
                            reportsMap[q.id] && mode !== 'simulacre'
                              ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 text-amber-800 dark:text-amber-300'
                              : 'border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-amber-400 hover:text-amber-700'
                          }`}
                        >
                          <AlertTriangle className="w-3 h-3" />
                          <span>
                            {mode === 'simulacre'
                              ? 'Impugnar pregunta'
                              : reportsMap[q.id]
                              ? 'Reportat'
                              : 'Reportar error'}
                          </span>
                        </button>
                      )
                    )}
                  </div>
                </div>

                {openReportId === q.id && (
                  <div className="rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/30 p-3 space-y-2">
                    <label className="block text-[11px] font-extrabold text-amber-900 dark:text-amber-200">
                      {mode === 'simulacre'
                        ? 'Descripció del motiu d’impugnació:'
                        : 'Descripció de l’error detectat a la pregunta:'}
                    </label>
                    <textarea
                      rows={2}
                      value={reportDraft}
                      onChange={(e) => setReportDraft(e.target.value)}
                      placeholder="Ex: la resposta correcta no coincideix amb el manual oficial / enunciat ambigu / dada desactualitzada..."
                      className="w-full rounded-lg border border-amber-200 dark:border-amber-800 bg-white dark:bg-slate-900 px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-100"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setOpenReportId(null)}
                        className="rounded-lg px-2.5 py-1 text-[11px] font-bold text-slate-600 dark:text-slate-300"
                      >
                        Cancel·lar
                      </button>
                      <button
                        onClick={() => handleSubmitReport(q)}
                        className="rounded-lg bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 text-[11px] font-extrabold"
                      >
                        {mode === 'simulacre' ? 'Registrar impugnació' : 'Enviar avís'}
                      </button>
                    </div>
                  </div>
                )}

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {q.question}
                </h3>

                <div className="space-y-2">
                  {(q.options || []).map((opt, optIdx) => {
                    const draftChoice = draftSelections[q.id];
                    const isSelected = showFeedback
                      ? choice === optIdx
                      : mode === 'simulacre'
                      ? choice === optIdx
                      : draftChoice === optIdx;
                    const isRightOpt = optIdx === q.correctIndex;
                    let cls =
                      'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 text-slate-800 dark:text-slate-200 hover:border-red-300';

                    if (showFeedback) {
                      if (isRightOpt) {
                        cls = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 font-bold';
                      } else if (isSelected && !isRightOpt) {
                        cls = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
                      }
                    } else if (isSelected) {
                      cls = 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200 font-bold';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(q, optIdx)}
                        className={`w-full text-left rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm flex items-center justify-between gap-3 transition ${cls}`}
                      >
                        <span>
                          <strong className="mr-2">{String.fromCharCode(65 + optIdx)})</strong>
                          {opt}
                        </span>
                        {showFeedback && isRightOpt && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {showFeedback && isSelected && !isRightOpt && <XCircle className="w-4 h-4 text-red-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {!isFinished && mode === 'practice' && choice === undefined && (
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {draftSelections[q.id] !== undefined
                        ? `Opció ${String.fromCharCode(65 + draftSelections[q.id])} preseleccionada. Pots canviar-la o validar-la per veure la correcció.`
                        : 'Selecciona una opció per poder validar-la.'}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleValidatePracticeOption(q)}
                      disabled={draftSelections[q.id] === undefined}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:pointer-events-none text-white px-4 py-2 text-xs font-extrabold shadow-sm transition"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Validar resposta</span>
                    </button>
                  </div>
                )}

                {showFeedback && (() => {
                  const manualRef = OFFICIAL_MANUALS.find((m) => m.topicNumber === q._topicNumber);
                  return (
                    <div
                      className={`rounded-xl p-3.5 text-xs leading-relaxed space-y-2 ${
                        isCorrect
                          ? 'bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 border border-emerald-200/70 dark:border-emerald-900/50'
                          : 'bg-amber-50/80 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 border border-amber-200/70 dark:border-amber-900/50'
                      }`}
                    >
                      <div>
                        <strong>Justificació i explicació:</strong>{' '}
                        {q.explanation || 'Consulta el resum del tema i el manual oficial per revisar aquest apartat.'}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="font-bold opacity-80">Més info:</span>
                        {onOpenTopicSummary && (
                          <button
                            onClick={() => onOpenTopicSummary(q._topicId)}
                            className="inline-flex items-center gap-1 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-300/70 dark:border-slate-700 px-2.5 py-1 text-[11px] font-bold text-slate-800 dark:text-slate-200 hover:border-red-400"
                          >
                            <BookOpen className="w-3 h-3" />
                            <span>Resum Tema {q._topicNumber}</span>
                          </button>
                        )}
                        {manualRef && (
                          onOpenOfficialManual ? (
                            <button
                              onClick={() => onOpenOfficialManual(q._topicNumber)}
                              className="inline-flex items-center gap-1 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-300/70 dark:border-slate-700 px-2.5 py-1 text-[11px] font-bold text-indigo-700 dark:text-indigo-300 hover:border-indigo-400"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>Manual Oficial ({manualRef.code})</span>
                            </button>
                          ) : (
                            <a
                              href={manualRef.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-300/70 dark:border-slate-700 px-2.5 py-1 text-[11px] font-bold text-indigo-700 dark:text-indigo-300"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>Manual Oficial ({manualRef.code})</span>
                            </a>
                          )
                        )}
                        {manualRef?.boeLinks &&
                          manualRef.boeLinks.slice(0, 1).map((lnk) => (
                            <a
                              key={lnk.url}
                              href={lnk.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-300/70 dark:border-slate-700 px-2.5 py-1 text-[11px] font-bold text-blue-700 dark:text-blue-300"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>{lnk.label}</span>
                            </a>
                          ))}
                      </div>
                    </div>
                  );
                })()}
              </div>
            );
          })}
        </div>

        {/* Navegació una pregunta darrere l'altra amb opció de tornar enrere */}
        {!isFinished && activeQuestions.length > 0 && (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
            <button
              type="button"
              onClick={() => {
                setCurrentQuestionIdx((i) => Math.max(0, i - 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentQuestionIdx === 0}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-xs font-extrabold text-slate-700 dark:text-slate-200 disabled:opacity-40 disabled:pointer-events-none hover:bg-slate-100"
            >
              <span>← Anterior</span>
            </button>

            <span className="text-xs font-extrabold text-slate-600 dark:text-slate-300">
              Pregunta {currentQuestionIdx + 1} de {activeQuestions.length}
            </span>

            {currentQuestionIdx < activeQuestions.length - 1 ? (
              <button
                type="button"
                disabled={
                  mode === 'practice' &&
                  activeQuestions[currentQuestionIdx] &&
                  answers[activeQuestions[currentQuestionIdx].id] === undefined
                }
                onClick={() => {
                  setCurrentQuestionIdx((i) => Math.min(activeQuestions.length - 1, i + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:pointer-events-none text-white px-4 py-2 text-xs font-extrabold shadow-sm"
                title={
                  mode === 'practice' &&
                  activeQuestions[currentQuestionIdx] &&
                  answers[activeQuestions[currentQuestionIdx].id] === undefined
                    ? 'Valida la resposta per passar a la següent diapositiva'
                    : 'Següent pregunta'
                }
              >
                <span>Següent →</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => (mode === 'simulacre' ? setShowFinishConfirm(true) : finishExam())}
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-xs font-extrabold shadow-sm"
              >
                <span>Corregir i Finalitzar ✓</span>
              </button>
            )}
          </div>
        )}
        </div>

        {/* Panell lateral d'estat de les 77 preguntes en mode Simulacre */}
        {!isFinished && mode === 'simulacre' && (
          <aside className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm lg:sticky lg:top-24 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                Full de Respostes (1–77)
              </h3>
              <span className="text-[11px] font-bold text-orange-600 dark:text-orange-400">
                {answeredCount}/{totalQ}
              </span>
            </div>

            <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-orange-500 inline-block" /> Resposta
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 inline-block" /> En blanc
              </span>
            </div>

            <div className="grid grid-cols-7 gap-1.5">
              {activeQuestions.slice(0, 70).map((q, idx) => {
                const isAnswered = answers[q.id] !== undefined;
                const isCurrent = currentQuestionIdx === idx;
                return (
                  <button
                    key={q.id || idx}
                    type="button"
                    onClick={() => {
                      setCurrentQuestionIdx(idx);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`h-8 rounded-lg text-[11px] font-extrabold border transition ${
                      isAnswered
                        ? 'bg-orange-500 border-orange-600 text-white hover:bg-orange-600'
                        : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-orange-400'
                    } ${isCurrent ? 'ring-2 ring-slate-900 dark:ring-white ring-offset-1' : ''}`}
                    title={`Pregunta ${idx + 1}${isAnswered ? ' (resposta)' : ' (en blanc)'}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {activeQuestions.length > 70 && (
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Reserva (71–77)
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {activeQuestions.slice(70, 77).map((q, rIdx) => {
                    const idx = 70 + rIdx;
                    const isAnswered = answers[q.id] !== undefined;
                    const isCurrent = currentQuestionIdx === idx;
                    return (
                      <button
                        key={q.id || idx}
                        type="button"
                        onClick={() => {
                          setCurrentQuestionIdx(idx);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`h-8 rounded-lg text-[11px] font-extrabold border transition ${
                          isAnswered
                            ? 'bg-orange-500 border-orange-600 text-white hover:bg-orange-600'
                            : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-orange-400'
                        } ${isCurrent ? 'ring-2 ring-slate-900 dark:ring-white ring-offset-1' : ''}`}
                        title={`Reserva ${rIdx + 1} (#${idx + 1})${isAnswered ? ' (resposta)' : ' (en blanc)'}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>
        )}
        </div>
      </div>
    );
  }

  // Vista de configuració (Pràctica vs Simulacre)
  const totalSelectedAvail = topics
    .filter((t) => selectedTopicIds.includes(t.id))
    .reduce(
      (acc, t) => acc + (t.quiz || []).filter((q) => includeExtension || !q.isExtension).length,
      0
    );

  return (
    <div className="space-y-6">
      {/* Capçalera */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white via-red-50/30 to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-red-950/20 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 dark:bg-red-950/60 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-red-700 dark:text-red-300">
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>Entrenador d&apos;Examen · SGO 2026</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 text-xs font-extrabold text-emerald-800 dark:text-emerald-300">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{totalBankQuestions} preguntes generades al banc</span>
            {answeredBankCount > 0 && (
              <span className="opacity-80 font-bold">
                · {answeredBankCount} fetes ({bankCoveragePct}%)
              </span>
            )}
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Pràctica de Tests i Simulacre Oficial
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Escull entre <strong>Mode Pràctica</strong> (sense límit de temps, triant els temes i el nombre de preguntes) o <strong>Simulacre Oficial</strong> (70 preguntes + 7 de reserva en 85 minuts amb penalització -0,33 i distribució estadística IA + històric 81/16–81/25).
        </p>

        {/* Targetes de Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div
            onClick={() => setMode('practice')}
            className={`cursor-pointer rounded-2xl border-2 p-5 transition ${
              mode === 'practice'
                ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/30 shadow-sm'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-extrabold text-blue-700 dark:text-blue-300">
                1. MODE PRÀCTICA LLIURE
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200">
                Sense temps
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Tria exactament quins temes vols repassar, el número de preguntes (10 a 100) i si vols ponderació estadística. Correcció immediata pregunta a pregunta.
            </p>
          </div>

          <div
            onClick={() => setMode('simulacre')}
            className={`cursor-pointer rounded-2xl border-2 p-5 transition ${
              mode === 'simulacre'
                ? 'border-red-600 bg-red-50/60 dark:bg-red-950/30 shadow-sm'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-extrabold text-red-700 dark:text-red-300">
                2. SIMULACRE OFICIAL GENERALITAT
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/60 text-red-800 dark:text-red-200">
                85 min · 70 + 7 reserva
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Temps oficial de 85 minuts, 70 preguntes puntuables + 7 de reserva, possibilitat de deixar en blanc, penalització -0,33 per error i proporció ponderada.
            </p>
          </div>
        </div>
      </div>

      {/* Banc de Preguntes Fallades · Regla de l'Oblit */}
      <div className="rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/40 dark:from-rose-950/30 dark:via-slate-900 dark:to-amber-950/10 p-5 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-300 flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Banc de Preguntes Fallades · Regla de l&apos;Oblit</span>
              </span>
              {mistakesSummary.due.length > 0 && (
                <span className="rounded-full bg-rose-600 text-white px-2.5 py-0.5 text-[11px] font-extrabold">
                  {mistakesSummary.due.length} per repassar avui
                </span>
              )}
              {mistakesSummary.all.length > 0 && (
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-0.5 text-[11px] font-bold">
                  {mistakesSummary.all.length} totals al banc
                </span>
              )}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {mistakesSummary.all.length === 0
                ? "Encara no tens cap pregunta fallada pendent. Quan fallis una pregunta en qualsevol test o simulacre, s'afegirà aquí i l'app te la programarà segons la corba de l'oblit (+1d → +3d → +7d → +14d) fins assimilar-la."
                : mistakesSummary.due.length > 0
                ? `Tens ${mistakesSummary.due.length} preguntes que toca repassar avui per consolidar-les. Cada encert puja d'etapa (+1d → +3d → +7d → +14d → Assimilada); si la falles, torna a l'etapa 0.`
                : `Avui no tens repassos vençuts (${mistakesSummary.upcoming.length} programades per als pròxims dies: pròxim repàs ${mistakesSummary.upcoming[0]?.nextReviewAt}).`}
            </p>
          </div>

          {mistakesSummary.all.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {mistakesSummary.due.length > 0 && (
                <button
                  type="button"
                  onClick={() => startMistakeReview(true)}
                  className="rounded-xl bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 text-xs font-extrabold shadow-sm"
                >
                  Repassar Fallades d&apos;Avui ({mistakesSummary.due.length})
                </button>
              )}
              <button
                type="button"
                onClick={() => startMistakeReview(false)}
                className="rounded-xl border border-rose-300 dark:border-rose-800 bg-white dark:bg-slate-900 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-rose-700 dark:text-rose-300 px-4 py-2 text-xs font-extrabold"
              >
                Repassar Tot el Banc ({mistakesSummary.all.length})
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Distribució Estadística IA + Històric */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Model Estadístic de Probabilitat d&apos;Examen (SGO 2026)</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {usePromotionStats
                ? 'Ponderació adaptada amb exàmens 81/16–81/25 + Promoció Interna (Caporal, Sergent, Oficial, Sotsinspector i Inspector): puja el pes de legislació operativa (T2, T6, T7), PCI (T12) i tàctica avançada (T23, T25, T27).'
                : 'Basat en la tònica 81/16–81/25 (el bloc de Lleis té menor pes ~11%) i ponderat pels nous temes operatius SGO 2026.'}
            </p>
          </div>
          <button
            onClick={() => setShowStatsTable((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{showStatsTable ? 'Amagar detall per tema' : 'Veure % per cada tema'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {blockStats.map((b) => (
            <div key={b.id} className="rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 p-3.5 space-y-2">
              <div className="flex items-center justify-between text-xs font-extrabold text-slate-900 dark:text-white">
                <span>{b.label}</span>
                <span>~{b.pct}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className={`h-full rounded-full ${b.color}`} style={{ width: `${b.pct}%` }} />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {b.topicsCount} temes · {b.totalAvail} preguntes al banc
              </p>
            </div>
          ))}
        </div>

        {showStatsTable && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pt-2">
            {topics.map((t) => {
              const totalW = topics.reduce((acc, x) => acc + getTopicWeight(x.number, usePromotionStats), 0);
              const prob = ((getTopicWeight(t.number, usePromotionStats) / totalW) * 100).toFixed(1);
              return (
                <div key={t.id} className="rounded-lg border border-slate-200 dark:border-slate-800 px-2.5 py-1.5 text-[11px] flex items-center justify-between gap-2">
                  <span className="font-bold text-slate-700 dark:text-slate-200 truncate">
                    T{t.number}. {t.title}
                  </span>
                  <span className="font-extrabold text-red-600 dark:text-red-400 shrink-0">{prob}%</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Configuració específica segons Mode */}
      {mode === 'practice' ? (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Filter className="w-4 h-4 text-blue-600" />
                <span>Selecció de Temes i Número de Preguntes</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {selectedTopicIds.length} temes seleccionats ({totalSelectedAvail} preguntes disponibles)
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => selectByRange(1, 34)} className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-bold">Tots</button>
              <button onClick={() => selectByRange(1, 7)} className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-bold">Lleis (T1–T7)</button>
              <button onClick={() => selectByRange(8, 15)} className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-bold">Ciències (T8–T15)</button>
              <button onClick={() => selectByRange(16, 34)} className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-bold">Operativa (T16–T34)</button>
              <button onClick={() => setSelectedTopicIds([])} className="rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 px-2.5 py-1 text-xs font-bold">Cap</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-1">
            {topics.map((t) => {
              const checked = selectedTopicIds.includes(t.id);
              return (
                <label
                  key={t.id}
                  className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs cursor-pointer transition ${
                    checked
                      ? 'border-blue-400 bg-blue-50/70 dark:bg-blue-950/30 text-slate-900 dark:text-white font-bold'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleTopic(t.id)}
                    className="rounded text-blue-600"
                  />
                  <span className="truncate">
                    T{t.number}. {t.title} ({t.quiz?.length || 0})
                  </span>
                </label>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-3">
              <label
                htmlFor="practice-question-count"
                className="text-xs font-extrabold text-slate-700 dark:text-slate-200"
              >
                Nombre de preguntes:
              </label>
              <input
                id="practice-question-count"
                type="number"
                min={1}
                max={Math.max(1, totalSelectedAvail)}
                value={questionCount || ''}
                onChange={(e) => {
                  const raw = e.target.value;
                  if (raw === '') {
                    setQuestionCount('');
                    return;
                  }
                  const n = parseInt(raw, 10);
                  if (!Number.isNaN(n)) {
                    setQuestionCount(Math.max(1, Math.min(Math.max(1, totalSelectedAvail), n)));
                  }
                }}
                onBlur={() => {
                  if (!questionCount || Number(questionCount) < 1) {
                    setQuestionCount(Math.min(20, Math.max(1, totalSelectedAvail)));
                  }
                }}
                className="w-24 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-sm font-extrabold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                (màx. {totalSelectedAvail})
              </span>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 ml-2">
                <input
                  type="checkbox"
                  checked={useWeightedPractice}
                  onChange={(e) => setUseWeightedPractice(e.target.checked)}
                />
                <span>Prioritzar temes més preguntats</span>
              </label>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 ml-2 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/70 rounded-lg px-2.5 py-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={practiceWithTimer}
                  onChange={(e) => setPracticeWithTimer(e.target.checked)}
                />
                <span>Amb cronòmetre (temps per pregunta)</span>
              </label>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 dark:text-amber-300 ml-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/70 rounded-lg px-2.5 py-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeExtension}
                  onChange={(e) => setIncludeExtension(e.target.checked)}
                />
                <span>Incloure material d&apos;ampliació (Caporal, Sergent, Oficial, Sotsinspector, Inspector)</span>
              </label>
            </div>

            <button
              onClick={() => startTest('practice')}
              disabled={totalSelectedAvail === 0}
              className="rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white px-6 py-3 text-sm font-extrabold shadow-sm"
            >
              Començar Pràctica ({Math.min(questionCount, totalSelectedAvail)} preg.)
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-red-200 dark:border-red-900/60 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
              Simulacre Oficial · 70 Preguntes + 7 de Reserva · 85 Minuts
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Inclou tots els 34 temes ponderats estadísticament (~11% Lleis, ~32% Ciències/Tècnica, ~57% Operativa SGO). Pots deixar preguntes en blanc i corregir al final.
            </p>
          </div>
          <button
            onClick={() => startTest('simulacre')}
            className="shrink-0 rounded-xl bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm font-extrabold shadow-sm"
          >
            Iniciar Simulacre Oficial
          </button>
        </div>
      )}
    </div>
  );
}
