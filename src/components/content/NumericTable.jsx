import React, { useState } from 'react';
import { Table, Eye, EyeOff } from 'lucide-react';

/**
 * Taula de Dades Numèriques amb mode "Ocultar valors per memoritzar" (Active Recall).
 */
export default function NumericTable({ title, subtitle, headers = [], rows = [], footnote }) {
  const [studyMode, setStudyMode] = useState(false);
  const [revealedCells, setRevealedCells] = useState({});

  const toggleCell = (rIdx, cIdx) => {
    const key = `${rIdx}-${cIdx}`;
    setRevealedCells((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Table className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">{title}</h4>
            {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>}
          </div>
        </div>

        <button
          onClick={() => {
            setStudyMode(!studyMode);
            setRevealedCells({});
          }}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
            studyMode
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300/70'
          }`}
          title="Oculta les xifres per posar a prova la teva memòria"
        >
          {studyMode ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          {studyMode ? 'Mostrar totes les xifres' : 'Mode Memorització (Tapar xifres)'}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse font-sans">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-slate-50/40 dark:bg-slate-900/40 font-sans">
              {headers.map((h, i) => (
                <th key={i} className="py-3.5 px-4 font-sans">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/70 text-base leading-relaxed font-sans">
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
              >
                {row.map((cell, cIdx) => {
                  const isNumericCol = cIdx > 0;
                  const isHidden = studyMode && isNumericCol && !revealedCells[`${rIdx}-${cIdx}`];
                  return (
                    <td
                      key={cIdx}
                      onClick={() => studyMode && isNumericCol && toggleCell(rIdx, cIdx)}
                      className={`py-3.5 px-4 font-sans text-base leading-relaxed ${
                        cIdx === 0
                          ? 'font-semibold text-slate-900 dark:text-slate-100'
                          : 'text-slate-700 dark:text-slate-300'
                      } ${studyMode && isNumericCol ? 'cursor-pointer select-none' : ''}`}
                    >
                      {isHidden ? (
                        <span className="inline-block rounded bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-300 px-2.5 py-0.5 text-xs font-sans font-semibold border border-indigo-300/60 dark:border-indigo-800">
                          Clica per revelar
                        </span>
                      ) : (
                        cell
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {footnote && (
        <div className="px-5 py-2.5 bg-slate-50/60 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          {footnote}
        </div>
      )}
    </div>
  );
}
