import React, { useState, useMemo } from 'react';
import {
  AlertTriangle,
  ArrowUpRight,
  Filter,
  FileText,
  Download
} from 'lucide-react';
import { KEY_POINT_GROUPS } from '../data/keyPointsData';
import { TOPICS } from '../data/index';
import { TOPIC_OUTLINES } from '../data/topicOutlines';
import {
  buildTopicKeyPointsDoc,
  downloadKeyPointsPdf
} from '../utils/keyPointsPdf';

export default function KeyPointsView({ onSelectTopic }) {
  const [viewMode, setViewMode] = useState('pdf-sheets'); // 'pdf-sheets' | 'confusions'
  const [selectedTopicId, setSelectedTopicId] = useState(TOPICS[0]?.id || 'tema-1');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  const selectedTopic = useMemo(
    () => TOPICS.find((t) => t.id === selectedTopicId) || TOPICS[0],
    [selectedTopicId]
  );

  const selectedSchemas = useMemo(() => {
    if (!selectedTopic) return [];
    const raw = TOPIC_OUTLINES[selectedTopic.id];
    if (!raw) return [];
    return Array.isArray(raw) ? raw : raw.schemas ? raw.schemas : [raw];
  }, [selectedTopic]);

  const topicConfusions = useMemo(() => {
    if (!selectedTopic) return [];
    const out = [];
    KEY_POINT_GROUPS.forEach((g) => {
      g.items.forEach((it) => {
        if (it.topicNumber === selectedTopic.number) out.push(it);
      });
    });
    return out;
  }, [selectedTopic]);

  const docData = useMemo(
    () =>
      selectedTopic
        ? buildTopicKeyPointsDoc(selectedTopic, selectedSchemas, topicConfusions)
        : null,
    [selectedTopic, selectedSchemas, topicConfusions]
  );

  const filteredGroups = KEY_POINT_GROUPS.filter(
    (g) => selectedCategory === 'all' || g.id === selectedCategory
  )
    .map((g) => ({
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
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-300">
              <FileText className="w-3.5 h-3.5" />
              <span>Punts Clau i Fitxes PDF</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Fitxes de Punts Clau (PDF) i Detector de Confusions
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Consulta cada tema estructurat en format document oficial (apartats numerats,
              subpunts, taules i quadres destacats) i descarrega&apos;l en PDF llest per imprimir o
              estudiar fora de línia.
            </p>
          </div>

          <div className="flex items-center gap-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 p-1">
            <button
              onClick={() => setViewMode('pdf-sheets')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                viewMode === 'pdf-sheets'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Fitxes Punts Clau (PDF)</span>
            </button>
            <button
              onClick={() => setViewMode('confusions')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                viewMode === 'confusions'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Detector de Confusions</span>
            </button>
          </div>
        </div>

        {viewMode === 'pdf-sheets' ? (
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <select
              value={selectedTopicId}
              onChange={(e) => setSelectedTopicId(e.target.value)}
              className="flex-1 min-w-[240px] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200"
            >
              {TOPICS.map((t) => (
                <option key={t.id} value={t.id}>
                  Tema {t.number} {t.code ? `(${t.code})` : ''} · {t.title}
                </option>
              ))}
            </select>

            {docData && selectedTopic && (
              <button
                onClick={() => downloadKeyPointsPdf(docData, selectedTopic)}
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 text-xs sm:text-sm font-extrabold shadow-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Descarregar PDF (Tema {selectedTopic.number})</span>
              </button>
            )}

            {selectedTopic && onSelectTopic && (
              <button
                onClick={() => onSelectTopic(selectedTopic.id)}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-red-400"
              >
                <span>Obrir Tema</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ) : (
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
        )}
      </div>

      {viewMode === 'pdf-sheets' && docData ? (
        /* Previsualització estil document A4 oficial (com els PDF adjuntats) */
        <article className="max-w-4xl mx-auto rounded-2xl border border-slate-300 bg-white text-slate-900 p-6 sm:p-10 shadow-md space-y-6">
          {/* Caixa de títol superior */}
          <div className="border-2 border-slate-900 px-4 py-3">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
              {docData.headerBox}
            </h2>
          </div>

          <p className="text-xs font-semibold text-slate-500 -mt-3">
            {docData.subtitle}
          </p>

          {/* Seccions numerades */}
          <div className="space-y-5">
            {docData.sections.map((sec) => (
              <section key={sec.number} className="space-y-2">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                  {sec.number}. {sec.title}
                </h3>

                <ul className="space-y-2 pl-4">
                  {sec.subblocks.map((sub, sIdx) => (
                    <li key={sIdx} className="space-y-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-start gap-2">
                        <span className="mt-0.5 text-slate-700">●</span>
                        <span>{sub.label}</span>
                      </div>
                      {sub.bullets.length > 0 && (
                        <ul className="pl-6 space-y-1">
                          {sub.bullets.map((b, bIdx) => (
                            <li
                              key={bIdx}
                              className="text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-2"
                            >
                              <span className="text-slate-500 mt-0.5">○</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* Taules comparatives */}
          {docData.tables.map((tbl, tIdx) => (
            <div key={tIdx} className="space-y-2 pt-2">
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                {tbl.title}
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-700 text-xs">
                  <thead>
                    <tr className="bg-slate-100">
                      {tbl.headers.map((h, hIdx) => (
                        <th
                          key={hIdx}
                          className="border border-slate-700 px-3 py-2 text-left font-extrabold text-slate-900"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tbl.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className="border border-slate-400 px-3 py-1.5 text-slate-800 align-top"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Quadres destacats */}
          {docData.callouts.map((box, cIdx) => (
            <div
              key={cIdx}
              className="border border-slate-800 px-4 py-3 space-y-1.5 bg-slate-50/50"
            >
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                {box.title}
              </h4>
              <ul className="space-y-1 pl-3">
                {box.lines.map((ln, lIdx) => (
                  <li
                    key={lIdx}
                    className="text-xs text-slate-800 leading-relaxed flex items-start gap-2"
                  >
                    <span>•</span>
                    <span>{ln}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      ) : (
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
      )}
    </div>
  );
}
