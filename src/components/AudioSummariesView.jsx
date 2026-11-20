import React, { useState, useMemo } from 'react';
import { Headphones, Play, Search, BookOpen } from 'lucide-react';
import AudioSummaryPlayer from './AudioSummaryPlayer';
import { buildAudioTracksForTopic } from '../utils/audioNarration';

export default function AudioSummariesView({ topics = [], onOpenTopic }) {
  const [search, setSearch] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState(topics[0]?.id || 'tema-1');
  const [autoPlayRequested, setAutoPlayRequested] = useState(false);

  const selectedTopic = topics.find((t) => t.id === selectedTopicId) || topics[0];

  const topicTracksInfo = useMemo(() => {
    const map = {};
    topics.forEach((t) => {
      const tracks = buildAudioTracksForTopic(t);
      const totalMin = tracks.reduce((s, tr) => s + tr.estMinutes, 0);
      map[t.id] = {
        tracksCount: tracks.length,
        totalMinutes: totalMin
      };
    });
    return map;
  }, [topics]);

  const filteredTopics = topics.filter((t) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      t.title.toLowerCase().includes(q) ||
      `tema ${t.number}`.includes(q) ||
      (t.code && t.code.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-indigo-200 dark:border-indigo-900/60 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-950/60 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
          <Headphones className="w-3.5 h-3.5" />
          <span>Àudio-Resums · Màx. 10 minuts per pista</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Escolta els Resums mentre Entrenes o Treballes
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          Narració en català dels punts clau i resums finals de cada tema, dividida automàticament en pistes de màxim 10 minuts. Pots ajustar la velocitat (fins a 1,5×) i saltar entre fragments.
        </p>

        {selectedTopic && (
          <AudioSummaryPlayer
            topic={selectedTopic}
            autoPlay={autoPlayRequested}
          />
        )}
      </div>

      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cerca tema per número o títol (ex: Tema 8, Foc, Hidràulica)..."
            className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredTopics.map((t) => {
            const info = topicTracksInfo[t.id] || { tracksCount: 1, totalMinutes: 5 };
            const isSelected = selectedTopic?.id === t.id;
            return (
              <div
                key={t.id}
                className={`rounded-2xl border p-4 flex items-center justify-between gap-3 transition ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/30'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 hover:border-indigo-300'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-red-600/10 text-red-700 dark:text-red-300">
                      Tema {t.number}
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                      {info.tracksCount > 1
                        ? `${info.tracksCount} pistes · ~${info.totalMinutes} min`
                        : `1 pista · ~${info.totalMinutes} min`}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white mt-1 line-clamp-1">
                    {t.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {onOpenTopic && (
                    <button
                      type="button"
                      onClick={() => onOpenTopic(t.id, 'summary')}
                      className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                      title="Veure resum escrit"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTopicId(t.id);
                      setAutoPlayRequested(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-xs font-extrabold"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Escoltar</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
