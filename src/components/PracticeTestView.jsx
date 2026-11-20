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
  ExternalLink
} from 'lucide-react';
import { OFFICIAL_EXAM_STATS_BY_TOPIC } from '../data/officialExamStats';
import { OFFICIAL_MANUALS } from '../data/manualsData';

const BANK_ANSWERED_KEY = 'bombers_answered_bank_ids_v1';
const REPORTS_KEY = 'bombers_question_reports_v1';

function loadJsonSet(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

// Pesos estadístics estimats per a un Simulacre Oficial SGO 2026 (sobre 100 preguntes)
// Combina la freqüència històrica real (81/16–81/24: ~10-12% Lleis, ~32% Ciències/Tècnica, ~56% Operativa SGO)
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

function getTopicWeight(topicNumber) {
  if (TOPIC_EXAM_WEIGHTS[topicNumber] !== undefined) {
    return TOPIC_EXAM_WEIGHTS[topicNumber];
  }
  const hist = OFFICIAL_EXAM_STATS_BY_TOPIC[topicNumber];
  return hist ? Math.max(1.5, hist.totalQuestions / 8) : 2.0;
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildWeightedExamQuestions(topics, selectedIds, count, useOfficialWeights) {
  const poolTopics = topics.filter((t) => selectedIds.includes(t.id) && (t.quiz || []).length > 0);
  if (poolTopics.length === 0) return [];

  if (!useOfficialWeights) {
    const all = [];
    poolTopics.forEach((t) => {
      (t.quiz || []).forEach((q) => {
        all.push({ ...q, _topicId: t.id, _topicNumber: t.number, _topicTitle: t.title });
      });
    });
    return shuffleArray(all).slice(0, count);
  }

  // Distribució proporcional segons probabilitat estadística d'examen
  const totalW = poolTopics.reduce((acc, t) => acc + getTopicWeight(t.number), 0);
  const byTopicShuffled = {};
  poolTopics.forEach((t) => {
    byTopicShuffled[t.id] = shuffleArray(
      (t.quiz || []).map((q) => ({ ...q, _topicId: t.id, _topicNumber: t.number, _topicTitle: t.title }))
    );
  });

  const picked = [];
  const usedIds = new Set();

  // Primera passada: assignació proporcional
  poolTopics.forEach((t) => {
    const share = Math.round((getTopicWeight(t.number) / totalW) * count);
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
      (a, b) => getTopicWeight(b.number) - getTopicWeight(a.number)
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

  return shuffleArray(picked);
}

export default function PracticeTestView({
  topics,
  onRecordQuestionOutcome = null,
  onSaveQuizScore = null,
  onOpenTopicSummary = null,
  onOpenOfficialManual = null
}) {
  const [mode, setMode] = useState('practice'); // 'practice' | 'simulacre'
  const [selectedTopicIds, setSelectedTopicIds] = useState(() => topics.map((t) => t.id));
  const [questionCount, setQuestionCount] = useState(25);
  const [useWeightedPractice, setUseWeightedPractice] = useState(true);
  const [showStatsTable, setShowStatsTable] = useState(false);

  // Estat global del banc respost + informes/impugnacions
  const [answeredBankMap, setAnsweredBankMap] = useState(() => loadJsonSet(BANK_ANSWERED_KEY));
  const [reportsMap, setReportsMap] = useState(() => loadJsonSet(REPORTS_KEY));
  const [openReportId, setOpenReportId] = useState(null);
  const [reportDraft, setReportDraft] = useState('');

  // Estat de sessió activa
  const [activeQuestions, setActiveQuestions] = useState(null);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(85 * 60); // 85 minuts oficials (70 + 7 reserva)

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

  const blockStats = useMemo(() => {
    const groups = [
      { id: 'lleis', label: 'Bloc General / Lleis (T1–T7)', range: [1, 7], color: 'bg-slate-500' },
      { id: 'ciencies', label: 'Ciències i Tècnica (T8–T15)', range: [8, 15], color: 'bg-blue-600' },
      { id: 'operativa', label: 'Intervenció i Operativa SGO (T16–T34)', range: [16, 34], color: 'bg-red-600' }
    ];
    const totalW = topics.reduce((acc, t) => acc + getTopicWeight(t.number), 0);
    return groups.map((g) => {
      const gTopics = topics.filter((t) => t.number >= g.range[0] && t.number <= g.range[1]);
      const w = gTopics.reduce((acc, t) => acc + getTopicWeight(t.number), 0);
      const pct = totalW > 0 ? Math.round((w / totalW) * 100) : 0;
      const totalAvail = gTopics.reduce((acc, t) => acc + (t.quiz?.length || 0), 0);
      return { ...g, pct, topicsCount: gTopics.length, totalAvail };
    });
  }, [topics]);

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
    const count = targetMode === 'simulacre' ? 77 : questionCount; // 70 + 7 de reserva
    const weighted = targetMode === 'simulacre' ? true : useWeightedPractice;

    const qs = buildWeightedExamQuestions(topics, targetIds, count, weighted);
    setActiveQuestions(qs);
    setAnswers({});
    setIsFinished(false);
    setSecondsLeft(85 * 60);
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
      createdAt: new Date().toISOString()
    };
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

  const handleSelectOption = (q, optIdx) => {
    if (isFinished) return;
    if (mode === 'practice' && answers[q.id] !== undefined) return;
    setAnswers((prev) => {
      // En simulacre, clicar la mateixa opció la deixa en blanc (sense penalització!)
      if (mode === 'simulacre' && prev[q.id] === optIdx) {
        const copy = { ...prev };
        delete copy[q.id];
        return copy;
      }
      return { ...prev, [q.id]: optIdx };
    });

    markQuestionAnsweredInBank(q.id);

    if (mode === 'practice' && onRecordQuestionOutcome) {
      onRecordQuestionOutcome(q._topicId, q._topicNumber, q, optIdx === q.correctIndex);
    }
  };

  const finishExam = () => {
    setIsFinished(true);
    if (mode === 'simulacre' && onRecordQuestionOutcome && activeQuestions) {
      activeQuestions.forEach((q) => {
        if (answers[q.id] !== undefined) {
          onRecordQuestionOutcome(q._topicId, q._topicNumber, q, answers[q.id] === q.correctIndex);
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
    const mainQuestions = mode === 'simulacre' ? activeQuestions.slice(0, 70) : activeQuestions;
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
                onClick={finishExam}
                className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-xs font-extrabold shadow-sm"
              >
                Corregir i Finalitzar
              </button>
            ) : (
              <button
                onClick={() => setActiveQuestions(null)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 text-xs font-extrabold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Configurar nou test</span>
              </button>
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
                  Errades: <strong className="text-red-600 dark:text-red-400">{wrongCount}</strong> (-0,33/errada) ·{' '}
                  En blanc: <strong>{blankCount}</strong>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Llista de preguntes */}
        <div className="space-y-4">
          {activeQuestions.map((q, idx) => {
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
                    {mode === 'simulacre' && idx >= 70 && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                        RESERVA {idx - 69}/7
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {q.difficulty && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {q.difficulty}
                      </span>
                    )}
                    <button
                      onClick={() => {
                        setOpenReportId(openReportId === q.id ? null : q.id);
                        setReportDraft(reportsMap[q.id]?.reason || '');
                      }}
                      className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-[10px] font-bold border transition ${
                        reportsMap[q.id]
                          ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 text-amber-800 dark:text-amber-300'
                          : 'border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-amber-400 hover:text-amber-700'
                      }`}
                    >
                      <AlertTriangle className="w-3 h-3" />
                      <span>
                        {reportsMap[q.id]
                          ? mode === 'simulacre'
                            ? 'Impugnada'
                            : 'Reportat'
                          : mode === 'simulacre'
                          ? 'Impugnar pregunta'
                          : 'Reportar error'}
                      </span>
                    </button>
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
                    const isSelected = choice === optIdx;
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
      </div>
    );
  }

  // Vista de configuració (Pràctica vs Simulacre)
  const totalSelectedAvail = topics
    .filter((t) => selectedTopicIds.includes(t.id))
    .reduce((acc, t) => acc + (t.quiz?.length || 0), 0);

  return (
    <div className="space-y-6">
      {/* Capçalera */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white via-red-50/30 to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-red-950/20 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-100 dark:bg-red-950/60 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-red-700 dark:text-red-300">
          <ClipboardCheck className="w-3.5 h-3.5" />
          <span>Entrenador d&apos;Examen · SGO 2026</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Pràctica de Tests i Simulacre Oficial
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Escull entre <strong>Mode Pràctica</strong> (sense límit de temps, triant els temes i el nombre de preguntes) o <strong>Simulacre Oficial</strong> (70 preguntes + 7 de reserva en 85 minuts amb penalització -0,33 i distribució estadística IA + històric 81/16–81/24).
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

      {/* Distribució Estadística IA + Històric */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Model Estadístic de Probabilitat d&apos;Examen (SGO 2026)</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Basat en la tònica 81/16–81/24 (el bloc de Lleis té menor pes ~11%) i ponderat pels nous temes operatius SGO.
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
              const totalW = topics.reduce((acc, x) => acc + getTopicWeight(x.number), 0);
              const prob = ((getTopicWeight(t.number) / totalW) * 100).toFixed(1);
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
              <span className="text-xs font-extrabold text-slate-700 dark:text-slate-200">
                Nombre de preguntes:
              </span>
              {[10, 25, 40, 60, 100].map((n) => (
                <button
                  key={n}
                  onClick={() => setQuestionCount(n)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-extrabold ${
                    questionCount === n
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {n}
                </button>
              ))}
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 ml-2">
                <input
                  type="checkbox"
                  checked={useWeightedPractice}
                  onChange={(e) => setUseWeightedPractice(e.target.checked)}
                />
                <span>Prioritzar temes més preguntats</span>
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
