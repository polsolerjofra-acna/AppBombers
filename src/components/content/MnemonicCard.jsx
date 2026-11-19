import React, { useState } from 'react';
import { Brain, Calculator, Zap } from 'lucide-react';

/**
 * Targeta de Regles Mnemotècniques, Fórmules i Trucs desplegable en fer clic.
 */
export default function MnemonicCard({
  type = 'mnemonic',
  title,
  acronym,
  formula,
  variables = [],
  trick,
  example
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isFormula = type === 'formula';

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 shadow-sm transition-all ${
        isFormula
          ? 'border-sky-200 dark:border-sky-900/60 bg-gradient-to-br from-sky-50/80 to-indigo-50/40 dark:from-sky-950/30 dark:to-slate-900'
          : 'border-purple-200 dark:border-purple-900/60 bg-gradient-to-br from-purple-50/80 to-fuchsia-50/40 dark:from-purple-950/30 dark:to-slate-900'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 text-left"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white ${
              isFormula ? 'bg-sky-600' : 'bg-purple-600'
            }`}
          >
            {isFormula ? <Calculator className="w-5 h-5" /> : <Brain className="w-5 h-5" />}
          </div>
          <div className="min-w-0">
            <span
              className={`text-[11px] font-bold uppercase tracking-wider block ${
                isFormula
                  ? 'text-sky-700 dark:text-sky-400'
                  : 'text-purple-700 dark:text-purple-400'
              }`}
            >
              {isFormula
                ? 'Esquema de Fórmula i Càlcul Ràpid'
                : "Regla Mnemotècnica i Truc d'Examen"}
            </span>
            {title && (
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                {title}
              </h4>
            )}
          </div>
        </div>

        <span
          className={`shrink-0 rounded-xl px-3 py-1 text-xs font-extrabold ${
            isFormula
              ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-200'
              : 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200'
          }`}
        >
          {isOpen ? 'Amagar ▲' : 'Mostrar ▼'}
        </span>
      </button>

      {isOpen && (
        <div className="mt-3 pt-3 border-t border-slate-200/70 dark:border-slate-800">
          {acronym && (
            <div className="my-2.5 rounded-xl bg-white/90 dark:bg-slate-950/80 px-4 py-3 border border-purple-200/80 dark:border-purple-800/50 text-center">
              <span className="text-base md:text-lg font-extrabold tracking-wide text-purple-700 dark:text-purple-300 font-sans">
                {acronym}
              </span>
            </div>
          )}

          {formula && (
            <div className="my-2.5 rounded-xl bg-slate-900 dark:bg-slate-950 text-sky-300 px-5 py-4 font-sans text-base md:text-lg font-bold text-center tracking-wide shadow-inner border border-slate-800">
              {formula}
            </div>
          )}

          {variables.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2.5 text-xs">
              {variables.map((v, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg bg-white/70 dark:bg-slate-900/70 px-3 py-2 border border-slate-200/60 dark:border-slate-800"
                >
                  <span className="font-bold text-sky-700 dark:text-sky-400">{v.symbol}:</span>
                  <span className="text-slate-700 dark:text-slate-300">{v.meaning}</span>
                </div>
              ))}
            </div>
          )}

          {trick && (
            <div className="flex items-start gap-2.5 mt-2.5 text-sm text-slate-700 dark:text-slate-300">
              <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed whitespace-pre-line">
                <strong className="text-slate-900 dark:text-white">Truc mental: </strong>
                {trick}
              </p>
            </div>
          )}

          {example && (
            <div className="mt-2.5 rounded-xl bg-white/60 dark:bg-slate-900/60 px-3.5 py-2.5 text-xs text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800">
              Exemple ràpid: {example}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
