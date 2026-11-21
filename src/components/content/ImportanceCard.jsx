import React from 'react';
import { Flame, CheckCircle2, AlertTriangle, Sparkles, ArrowRight, BarChart3 } from 'lucide-react';
import { OFFICIAL_EXAM_STATS_BY_TOPIC } from '../../data/officialExamStats';

function findBestMatchingQuestion(text, quizQuestions = []) {
  if (!quizQuestions || quizQuestions.length === 0) return null;
  const words = String(text || '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 4);

  let best = quizQuestions[0];
  let bestScore = -1;
  for (const q of quizQuestions) {
    const hay = `${q.question} ${(q.options || []).join(' ')} ${q.explanation || ''}`.toLowerCase();
    let score = 0;
    for (const w of words) {
      if (hay.includes(w)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      best = q;
    }
  }
  return best;
}

/**
 * Targeta "Anàlisi d'Importància" (Destacat inicial)
 * Mostra el pes del tema a l'examen oficial, preguntes reals per apartat i enllaç directe a les preguntes.
 */
export default function ImportanceCard({
  data,
  topicNumber = null,
  quizQuestions = [],
  onJumpToQuestion = null
}) {
  if (!data) return null;

  const examStats = topicNumber ? OFFICIAL_EXAM_STATS_BY_TOPIC[topicNumber] : null;
  const maxSubTotal = examStats
    ? Math.max(...examStats.subtopics.map((s) => s.total || 0), 1)
    : 1;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-red-200 dark:border-red-900/60 bg-gradient-to-br from-red-50 via-orange-50/60 to-amber-50/40 dark:from-red-950/40 dark:via-slate-900 dark:to-amber-950/20 p-6 shadow-sm">
      <div className="absolute -right-8 -top-8 opacity-10 dark:opacity-5 pointer-events-none">
        <Flame className="w-40 h-40 text-red-600" />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white shadow-sm shadow-red-600/30">
            <Flame className="w-5 h-5" />
          </span>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              Anàlisi d&apos;Importància a Examen
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {data.title || "Radar d'Oposició: Què surt sempre?"}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {examStats && examStats.totalQuestions > 0 && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3 py-1 text-xs font-extrabold shadow-xs">
              <BarChart3 className="w-3.5 h-3.5" />
              {examStats.totalQuestions} preguntes oficials (
              {examStats.promotionQuestions > 0 ? '81/16–81/25 + Promoció Interna' : '81/16–81/25'})
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600/10 dark:bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-700 dark:text-red-300 border border-red-300/60 dark:border-red-700/50">
            <Sparkles className="w-3.5 h-3.5" />
            Freqüència: {data.frequency || 'Molt Alta (3-5 preguntes/any)'}
          </span>
        </div>
      </div>

      {data.summary && (
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-5">
          {data.summary}
        </p>
      )}

      {/* Desglossament per apartats en exàmens oficials amb enllaç directe a la pregunta */}
      {examStats && examStats.subtopics && examStats.subtopics.length > 0 && (
        <div className="mb-5 rounded-xl bg-white/90 dark:bg-slate-900/80 p-4 border border-red-200/80 dark:border-slate-800 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-red-700 dark:text-red-400 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4" />
              <span>Preguntes per Apartat en Exàmens Oficials (Generalitat)</span>
            </h4>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              Clica a qualsevol apartat per anar directe a la pregunta
            </span>
          </div>

          <div className="space-y-2.5">
            {examStats.subtopics.map((sub, idx) => {
              const pct = Math.max(8, Math.round((sub.total / maxSubTotal) * 100));
              const matchedQ = findBestMatchingQuestion(
                `${sub.label} ${(sub.concepts || []).join(' ')}`,
                quizQuestions
              );
              const examChips = Object.entries(sub.byExam || {});

              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 p-3 space-y-1.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {sub.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/70 text-red-700 dark:text-red-300">
                        {sub.total} {sub.total === 1 ? 'pregunta' : 'preguntes'}
                      </span>
                      {matchedQ && onJumpToQuestion && (
                        <button
                          onClick={() => onJumpToQuestion(matchedQ.id)}
                          className="inline-flex items-center gap-1 rounded-lg bg-red-600 hover:bg-red-700 text-white px-2.5 py-1 text-[11px] font-bold shadow-xs transition"
                        >
                          <span>Anar a pregunta</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-red-600 to-amber-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-600 dark:text-slate-400">
                    {examChips.length > 0 && (
                      <span className="font-semibold">
                        Convocatòries: {examChips.map(([k, v]) => `${k} (${v})`).join(' · ')}
                      </span>
                    )}
                    {sub.concepts && sub.concepts.length > 0 && (
                      <span className="truncate max-w-full">
                        · Conceptes preguntats: {sub.concepts.join(' | ')}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.hotTopics && data.hotTopics.length > 0 && (
          <div className="rounded-xl bg-white/80 dark:bg-slate-900/70 p-4 border border-red-100 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 mb-2.5">
              <CheckCircle2 className="w-4 h-4" />
              Punts Clau (Focus 80/20)
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {data.hotTopics.map((point, idx) => {
                const matchedQ = onJumpToQuestion
                  ? findBestMatchingQuestion(point, quizQuestions)
                  : null;
                return (
                  <li key={idx} className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{point}</span>
                    </div>
                    {matchedQ && (
                      <button
                        onClick={() => onJumpToQuestion(matchedQ.id)}
                        className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100"
                        title="Anar a la pregunta relacionada al Test"
                      >
                        Test →
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {data.traps && data.traps.length > 0 && (
          <div className="rounded-xl bg-white/80 dark:bg-slate-900/70 p-4 border border-amber-200/70 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-2.5">
              <AlertTriangle className="w-4 h-4" />
              Paranys Típics del Tribunal
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {data.traps.map((trap, idx) => {
                const matchedQ = onJumpToQuestion
                  ? findBestMatchingQuestion(trap, quizQuestions)
                  : null;
                return (
                  <li key={idx} className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{trap}</span>
                    </div>
                    {matchedQ && (
                      <button
                        onClick={() => onJumpToQuestion(matchedQ.id)}
                        className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100"
                        title="Anar a la pregunta relacionada al Test"
                      >
                        Test →
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
