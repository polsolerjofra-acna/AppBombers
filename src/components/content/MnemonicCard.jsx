import React from 'react';
import { Brain, Calculator, Zap } from 'lucide-react';

/**
 * Targeta de Regles Mnemotècniques, Fórmules i Trucs de Càlcul Mental.
 */
export default function MnemonicCard({ type = 'mnemonic', title, acronym, formula, variables = [], trick, example }) {
  const isFormula = type === 'formula';

  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm ${
        isFormula
          ? 'border-sky-200 dark:border-sky-900/60 bg-gradient-to-br from-sky-50/80 to-indigo-50/40 dark:from-sky-950/30 dark:to-slate-900'
          : 'border-purple-200 dark:border-purple-900/60 bg-gradient-to-br from-purple-50/80 to-fuchsia-50/40 dark:from-purple-950/30 dark:to-slate-900'
      }`}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-xl text-white ${
            isFormula ? 'bg-sky-600' : 'bg-purple-600'
          }`}
        >
          {isFormula ? <Calculator className="w-5 h-5" /> : <Brain className="w-5 h-5" />}
        </div>
        <div>
          <span
            className={`text-[11px] font-bold uppercase tracking-wider ${
              isFormula ? 'text-sky-700 dark:text-sky-400' : 'text-purple-700 dark:text-purple-400'
            }`}
          >
            {isFormula ? 'Esquema de Fórmula i Càlcul Ràpid' : 'Regla Mnemotècnica i Truc d\'Examen'}
          </span>
          <h4 className="text-base font-bold text-slate-900 dark:text-white">{title}</h4>
        </div>
      </div>

      {acronym && (
        <div className="my-3 rounded-xl bg-white/90 dark:bg-slate-950/80 px-4 py-3 border border-purple-200/80 dark:border-purple-800/50 text-center">
          <span className="text-lg md:text-xl font-extrabold tracking-wide text-purple-700 dark:text-purple-300 font-mono">
            {acronym}
          </span>
        </div>
      )}

      {formula && (
        <div className="my-3 rounded-xl bg-slate-900 dark:bg-slate-950 text-sky-300 px-5 py-4 font-mono text-base md:text-lg font-bold text-center tracking-wide shadow-inner border border-slate-800">
          {formula}
        </div>
      )}

      {variables.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3 text-xs">
          {variables.map((v, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg bg-white/70 dark:bg-slate-900/70 px-3 py-2 border border-slate-200/60 dark:border-slate-800"
            >
              <span className="font-mono font-bold text-sky-700 dark:text-sky-400">{v.symbol}:</span>
              <span className="text-slate-700 dark:text-slate-300">{v.meaning}</span>
            </div>
          ))}
        </div>
      )}

      {trick && (
        <div className="flex items-start gap-2.5 mt-3 text-sm text-slate-700 dark:text-slate-300">
          <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-900 dark:text-white">Truc mental: </strong>
            {trick}
          </p>
        </div>
      )}

      {example && (
        <div className="mt-3 rounded-xl bg-white/60 dark:bg-slate-900/60 px-3.5 py-2.5 text-xs font-mono text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800">
          Exemple ràpid: {example}
        </div>
      )}
    </div>
  );
}
