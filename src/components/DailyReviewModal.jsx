import React, { useState, useEffect, useMemo } from 'react';
import {
  Flame,
  CheckCircle2,
  XCircle,
  X,
  Sparkles,
  Calculator,
  BookOpen,
  Trophy
} from 'lucide-react';
import { CALCULATION_SECTIONS } from '../data/calculationsData';

const DAILY_REVIEW_SEEN_KEY = 'bombers_daily_review_seen_v1';

function getMadridTodayInfo() {
  const now = new Date();
  try {
    const iso = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Madrid',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(now);
    const weekday = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Madrid',
      weekday: 'short'
    }).format(now);
    return { iso, isFriday: weekday === 'Fri' };
  } catch {
    return {
      iso: now.toISOString().split('T')[0],
      isFriday: now.getDay() === 5
    };
  }
}

function shuffleDailyArr(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleDailyOptions(q) {
  if (!Array.isArray(q?.options) || q.options.length < 2) return q;
  const hasPositionalRef = q.options.some((opt) =>
    /\b(a\s+i\s+[bcd]|b\s+i\s+[cd]|c\s+i\s+d|totes\s+les\s+anteriors|cap\s+de\s+les\s+anteriors|totes\s+són\s+correctes|cap\s+és\s+correcta)\b/i.test(
      String(opt || '')
    )
  );
  if (hasPositionalRef) return q;
  const indices = shuffleDailyArr(q.options.map((_, i) => i));
  return {
    ...q,
    options: indices.map((i) => q.options[i]),
    correctIndex: indices.indexOf(q.correctIndex)
  };
}

function buildDailyReviewSet(topics, todayISO, isFriday) {
  let seenMap = {};
  try {
    seenMap = JSON.parse(localStorage.getItem(DAILY_REVIEW_SEEN_KEY) || '{}');
  } catch {
    seenMap = {};
  }

  const pickedTopics = [];
  const nextSeen = { ...seenMap };
  const nowTs = Date.now();

  // 1 pregunta de CADA un dels 34 temes
  const sortedTopics = [...topics].sort((a, b) => a.number - b.number);
  sortedTopics.forEach((t) => {
    const pool = (t.quiz || []).filter((q) => !q.isExtension);
    const fallbackPool = pool.length > 0 ? pool : t.quiz || [];
    if (fallbackPool.length === 0) return;

    const unseen = fallbackPool.filter((q) => !seenMap[q.id]);
    const candidates = unseen.length > 0 ? unseen : fallbackPool;
    const chosen = candidates[Math.floor(Math.random() * candidates.length)];
    nextSeen[chosen.id] = nowTs;

    pickedTopics.push(
      shuffleDailyOptions({
        ...chosen,
        _kind: 'topic',
        _topicId: t.id,
        _topicNumber: t.number,
        _topicTitle: t.title
      })
    );
  });

  // 2 preguntes de càlcul cada dia, i 10 els divendres
  const calcTarget = isFriday ? 10 : 2;
  const allCalc = CALCULATION_SECTIONS.flatMap((sec) =>
    sec.problems.map((p) => ({
      id: `daily-calc-${p.id}`,
      rawId: p.id,
      _kind: 'calc',
      _topicNumber: sec.topicNumber,
      _topicTitle: sec.shortTitle,
      question: p.statement,
      options: p.options,
      correctIndex: p.correctIndex,
      explanation: (p.solutionSteps || []).join(' '),
      hint: p.hint || ''
    }))
  );

  const unseenCalc = allCalc.filter((c) => !seenMap[c.id]);
  const calcPool = shuffleDailyArr(unseenCalc.length >= calcTarget ? unseenCalc : allCalc);
  const pickedCalc = calcPool.slice(0, calcTarget).map((c) => {
    nextSeen[c.id] = nowTs;
    return shuffleDailyOptions(c);
  });

  try {
    localStorage.setItem(DAILY_REVIEW_SEEN_KEY, JSON.stringify(nextSeen));
  } catch {}

  return [...pickedTopics, ...pickedCalc];
}

export function getDailyReviewStatus(topicsCount = 34) {
  const { iso, isFriday } = getMadridTodayInfo();
  const calcCount = isFriday ? 10 : 2;
  const expectedTotal = topicsCount + calcCount;
  try {
    const raw = localStorage.getItem(`bombers_daily_review_v1_${iso}`);
    if (!raw) return { iso, isFriday, answered: 0, total: expectedTotal, completed: false };
    const parsed = JSON.parse(raw);
    const total = parsed.questions?.length || expectedTotal;
    const answered = Object.keys(parsed.answers || {}).length;
    return {
      iso,
      isFriday,
      answered,
      total,
      completed: Boolean(parsed.finished) || answered >= total
    };
  } catch {
    return { iso, isFriday, answered: 0, total: expectedTotal, completed: false };
  }
}

export default function DailyReviewModal({
  topics,
  isOpen,
  onClose,
  onRecordQuestionOutcome = null
}) {
  const { iso: todayISO, isFriday } = useMemo(() => getMadridTodayInfo(), []);
  const storageKey = `bombers_daily_review_v1_${todayISO}`;

  const [sessionState, setSessionState] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.questions) && parsed.questions.length > 0) {
          return parsed;
        }
      }
    } catch {}
    return {
      date: todayISO,
      isFriday,
      questions: buildDailyReviewSet(topics, todayISO, isFriday),
      currentIdx: 0,
      answers: {},
      finished: false
    };
  });

  const [draftOpt, setDraftOpt] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(sessionState));
    } catch {}
  }, [storageKey, sessionState]);

  useEffect(() => {
    setDraftOpt(null);
  }, [sessionState.currentIdx]);

  if (!isOpen) return null;

  const { questions, currentIdx, answers, finished } = sessionState;
  const totalQ = questions.length;
  const currentQ = questions[currentIdx];
  const answeredCount = Object.keys(answers).length;
  const correctCount = questions.filter((q) => answers[q.id] === q.correctIndex).length;
  const wrongCount = answeredCount - correctCount;

  const handleValidate = () => {
    if (!currentQ || draftOpt === null || answers[currentQ.id] !== undefined) return;
    const isOk = draftOpt === currentQ.correctIndex;
    setSessionState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [currentQ.id]: draftOpt }
    }));
    if (currentQ._kind === 'topic' && onRecordQuestionOutcome) {
      onRecordQuestionOutcome(currentQ._topicId, currentQ._topicNumber, currentQ, isOk);
    }
  };

  const handleNext = () => {
    if (currentIdx < totalQ - 1) {
      setSessionState((prev) => ({ ...prev, currentIdx: prev.currentIdx + 1 }));
    } else {
      setSessionState((prev) => ({ ...prev, finished: true }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-3 sm:p-5 overflow-y-auto">
      <div className="max-w-2xl w-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden my-auto">
        {/* Capçalera */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 px-5 py-4 text-white flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Flame className="w-5 h-5 shrink-0" />
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider opacity-90">
                Repàs del Dia · {todayISO} {isFriday ? '· DIVENDRES (10 CÀLCULS!)' : ''}
              </div>
              <h2 className="text-sm sm:text-base font-extrabold">
                1 pregunta de cada tema (34) + {isFriday ? '10' : '2'} de càlcul
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/15 hover:bg-white/25 transition"
            title="Continuar més tard"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Barra de progrés */}
        <div className="px-5 pt-4 space-y-1.5">
          <div className="flex justify-between text-xs font-extrabold text-slate-600 dark:text-slate-300">
            <span>
              Progrés d&apos;avui: {answeredCount}/{totalQ} ({correctCount}✓ / {wrongCount}✗)
            </span>
            <span>Es reinicia a les 00:00</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-600 to-emerald-500 transition-all"
              style={{ width: `${Math.round((answeredCount / Math.max(1, totalQ)) * 100)}%` }}
            />
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          {finished ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <Trophy className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Repàs del Dia Completat!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Has encertat <strong className="text-emerald-600">{correctCount}</strong> de{' '}
                  <strong>{totalQ}</strong> ({Math.round((correctCount / Math.max(1, totalQ)) * 100)}%).
                  Les preguntes fallades s&apos;han guardat a la regla de l&apos;oblit.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 text-sm font-extrabold"
              >
                Tornar a l&apos;app
              </button>
            </div>
          ) : currentQ ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold ${
                    currentQ._kind === 'calc'
                      ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300'
                      : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                  }`}
                >
                  {currentQ._kind === 'calc' ? (
                    <Calculator className="w-3.5 h-3.5" />
                  ) : (
                    <BookOpen className="w-3.5 h-3.5" />
                  )}
                  <span>
                    {currentQ._kind === 'calc'
                      ? `Càlcul · ${currentQ._topicTitle}`
                      : `Tema ${currentQ._topicNumber} · ${currentQ._topicTitle}`}
                  </span>
                </span>
                <span className="text-xs font-extrabold text-slate-500">
                  Pregunta {currentIdx + 1} / {totalQ}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                {currentQ.question}
              </h3>

              <div className="space-y-2">
                {currentQ.options.map((opt, oIdx) => {
                  const validatedOpt = answers[currentQ.id];
                  const isValidated = validatedOpt !== undefined;
                  const isSelected = isValidated ? validatedOpt === oIdx : draftOpt === oIdx;
                  const isCorrect = oIdx === currentQ.correctIndex;

                  let cls =
                    'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-red-300 text-slate-800 dark:text-slate-200';
                  if (!isValidated && isSelected) {
                    cls =
                      'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200';
                  } else if (isValidated) {
                    if (isCorrect) {
                      cls =
                        'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200';
                    } else if (isSelected) {
                      cls =
                        'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
                    } else {
                      cls =
                        'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      type="button"
                      disabled={isValidated}
                      onClick={() => setDraftOpt(oIdx)}
                      className={`w-full text-left rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm font-medium transition flex items-start gap-2.5 ${cls}`}
                    >
                      <span className="font-extrabold shrink-0">
                        {String.fromCharCode(65 + oIdx)}.
                      </span>
                      <span className="flex-1">{opt}</span>
                      {isValidated && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {isValidated && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {answers[currentQ.id] !== undefined && (
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong
                    className={
                      answers[currentQ.id] === currentQ.correctIndex
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-red-600 dark:text-red-400'
                    }
                  >
                    {answers[currentQ.id] === currentQ.correctIndex ? 'Correcte! ' : 'Incorrecte. '}
                  </strong>
                  {currentQ.explanation}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                >
                  Fer-ho més tard
                </button>

                {answers[currentQ.id] === undefined ? (
                  <button
                    type="button"
                    disabled={draftOpt === null}
                    onClick={handleValidate}
                    className="rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white px-5 py-2.5 text-xs font-extrabold shadow-sm"
                  >
                    Validar resposta
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 text-xs font-extrabold shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{currentIdx < totalQ - 1 ? 'Següent pregunta →' : 'Finalitzar Repàs ✓'}</span>
                  </button>
                )}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
