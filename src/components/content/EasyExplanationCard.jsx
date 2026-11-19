import React, { useState } from 'react';
import { Lightbulb, Smile } from 'lucide-react';

/**
 * Targeta "Explicació fàcil (Mode nen petit)" desplegable en fer clic.
 */
export default function EasyExplanationCard({ title, metaphor, explanation, takeaway }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border-2 border-dashed border-amber-300 dark:border-amber-700/70 bg-amber-50/70 dark:bg-amber-950/20 p-4 sm:p-5 transition-all">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 text-left"
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 shadow-sm">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-200/80 dark:bg-amber-900/60 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-amber-900 dark:text-amber-200">
              <Smile className="w-3.5 h-3.5" />
              Explicació Fàcil (Mode Nen Petit)
            </span>
            {title && (
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 truncate">
                {title}
              </h4>
            )}
          </div>
        </div>

        <span className="shrink-0 rounded-xl bg-amber-200/70 dark:bg-amber-900/60 px-3 py-1 text-xs font-extrabold text-amber-900 dark:text-amber-200">
          {isOpen ? 'Amagar ▲' : 'Mostrar ▼'}
        </span>
      </button>

      {isOpen && (
        <div className="mt-4 pt-3 border-t border-amber-200/70 dark:border-amber-800/40">
          {metaphor && (
            <p className="text-sm italic text-amber-950/90 dark:text-amber-200/90 bg-white/70 dark:bg-slate-900/60 rounded-xl p-3 border border-amber-200/80 dark:border-amber-800/40 mb-2.5">
              &quot;{metaphor}&quot;
            </p>
          )}
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
            {explanation}
          </p>
          {takeaway && (
            <div className="mt-3 pt-2.5 border-t border-amber-200/70 dark:border-amber-800/40 text-xs font-semibold text-amber-900 dark:text-amber-300">
              En resum: {takeaway}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
