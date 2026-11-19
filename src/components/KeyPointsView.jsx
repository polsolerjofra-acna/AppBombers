import React, { useState } from 'react';
import { AlertTriangle, ArrowUpRight, Filter } from 'lucide-react';
import { KEY_POINT_GROUPS } from '../data/keyPointsData';

export default function KeyPointsView({ onSelectTopic }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filteredGroups = KEY_POINT_GROUPS.filter(
    (g) => selectedCategory === 'all' || g.id === selectedCategory
  ).map((g) => ({
    ...g,
    items: g.items.filter((it) => {
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        it.concept.toLowerCase().includes(q) ||
        it.value.toLowerCase().includes(q) ||
        it.confusionWarning.toLowerCase().includes(q)
      );
    })
  })).filter((g) => g.items.length > 0);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-300">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Detector de Confusions i Punts Clau</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Punts Clau i Conceptes Fàcils de Confondre
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          Comparativa transversal entre tots els temes: distàncies de seguretat, pressions,
          temperatures, terminis legals i procediments que s&apos;assemblen però tenen xifres o
          regles diferents a l&apos;examen.
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filtra per paraula clau (ex: 5 bar, EBEP, 45°, 300 °C)..."
            className="flex-1 min-w-[220px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3.5 py-2 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-amber-500"
          />

          <div className="flex flex-wrap items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400 mr-1" />
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              Tots
            </button>
            {KEY_POINT_GROUPS.map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedCategory(g.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === g.id
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {g.category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {filteredGroups.map((group) => (
          <section
            key={group.id}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-4"
          >
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                {group.category}
              </span>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                {group.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {group.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {group.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1.5">
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {item.concept}
                    </div>
                    <div className="text-sm font-bold text-blue-700 dark:text-blue-400">
                      {item.value}
                    </div>
                    <div className="text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/50 rounded-lg px-3 py-1.5 inline-block">
                      <span className="font-extrabold">Alerta confusió:</span>{' '}
                      {item.confusionWarning}
                    </div>
                  </div>

                  {item.topicNumber && onSelectTopic && (
                    <button
                      onClick={() => onSelectTopic(`tema-${item.topicNumber}`)}
                      className="self-start sm:self-center shrink-0 inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-red-400"
                    >
                      <span>Tema {item.topicNumber}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
