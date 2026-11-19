import React from 'react';
import { Flame, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

/**
 * Targeta "Anàlisi d'Importància" (Destacat inicial)
 * Mostra el pes del tema a l'examen oficial, punts calents i conceptes clau.
 */
export default function ImportanceCard({ data }) {
  if (!data) return null;

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
              Anàlisi d'Importància a Examen
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {data.title || 'Radar d\'Oposició: Què surt sempre?'}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.hotTopics && data.hotTopics.length > 0 && (
          <div className="rounded-xl bg-white/80 dark:bg-slate-900/70 p-4 border border-red-100 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 mb-2.5">
              <CheckCircle2 className="w-4 h-4" />
              Punts Clau (Focus 80/20)
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {data.hotTopics.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
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
              {data.traps.map((trap, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span>{trap}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
