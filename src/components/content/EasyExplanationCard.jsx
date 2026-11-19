import React from 'react';
import { Lightbulb, Smile } from 'lucide-react';

/**
 * Targeta "Explicació fàcil (Mode nen petit)"
 * Estil còmic/suau amb metàfora quotidiana per entendre conceptes físics o normatius.
 */
export default function EasyExplanationCard({ title, metaphor, explanation, takeaway }) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-amber-300 dark:border-amber-700/70 bg-amber-50/70 dark:bg-amber-950/20 p-5 transition-all">
      <div className="flex items-start gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 shadow-sm">
          <Lightbulb className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-200/80 dark:bg-amber-900/60 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-amber-900 dark:text-amber-200">
              <Smile className="w-3.5 h-3.5" />
              Explicació Fàcil (Mode Nen Petit)
            </span>
          </div>
          <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            {title}
          </h4>
          {metaphor && (
            <p className="text-sm italic text-amber-950/90 dark:text-amber-200/90 bg-white/70 dark:bg-slate-900/60 rounded-xl p-3 border border-amber-200/80 dark:border-amber-800/40 mb-2.5">
              "{metaphor}"
            </p>
          )}
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {explanation}
          </p>
          {takeaway && (
            <div className="mt-3 pt-2.5 border-t border-amber-200/70 dark:border-amber-800/40 text-xs font-semibold text-amber-900 dark:text-amber-300">
              En resum: {takeaway}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
