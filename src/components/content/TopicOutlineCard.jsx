import React from 'react';
import { BookOpen, ArrowRight, ChevronLeft } from 'lucide-react';

/**
 * Pàgina sencera d'esquema jeràrquic del tema (o d'un dels seus subtemes ben diferenciats).
 * Permet veure d'un cop d'ull tota l'estructura, branques, subcategories i dades imprescindibles.
 */
export default function TopicOutlineCard({
  topic,
  outline,
  schemaIndex = 0,
  totalSchemas = 1,
  onPrevSchema,
  onStartReading,
  nextLabel = 'Començar Pàgina 1'
}) {
  if (!outline) return null;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300">
            <BookOpen className="w-3.5 h-3.5" />
            <span>
              {totalSchemas > 1
                ? `Esquema ${schemaIndex + 1} de ${totalSchemas} · Tema ${topic.number}`
                : `Esquema Complet · Mapa del Tema ${topic.number}`}
            </span>
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mt-2">
            {outline.title || `Estructura Clau: ${topic.title}`}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {outline.overview}
          </p>
        </div>

        {onStartReading && (
          <button
            onClick={onStartReading}
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 text-xs font-extrabold shadow-sm transition-colors shrink-0"
          >
            <span>{nextLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Arbre jeràrquic de branques i subcategories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {(outline.branches || []).map((branch, bIdx) => (
          <div
            key={bIdx}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 p-4 sm:p-5 space-y-3"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white text-xs font-extrabold">
                {bIdx + 1}
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                {branch.title}
              </h3>
            </div>

            <div className="pl-3 border-l-2 border-red-200 dark:border-red-900/60 space-y-2.5">
              {(branch.items || []).map((item, iIdx) => (
                <div key={iIdx} className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    • {item.label}
                  </div>
                  {item.children && item.children.length > 0 && (
                    <ul className="pl-4 space-y-1 border-l border-slate-200 dark:border-slate-800">
                      {item.children.map((sub, sIdx) => (
                        <li
                          key={sIdx}
                          className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"
                        >
                          ↳ {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Peu de navegació entre esquemes / inici de lectura */}
      <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
        <button
          onClick={onPrevSchema}
          disabled={!onPrevSchema}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 disabled:opacity-40 disabled:pointer-events-none hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Esquema Anterior</span>
        </button>

        {totalSchemas > 1 && (
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
            Esquema {schemaIndex + 1} / {totalSchemas}
          </span>
        )}

        {onStartReading && (
          <button
            onClick={onStartReading}
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-xs sm:text-sm font-bold shadow-sm transition-colors"
          >
            <span>{nextLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
