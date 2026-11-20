import React, { useState, useMemo, useEffect } from 'react';
import {
  AlertTriangle,
  ArrowUpRight,
  Filter,
  FileText,
  Download,
  ExternalLink
} from 'lucide-react';
import { KEY_POINT_GROUPS } from '../data/keyPointsData';
import { TOPICS } from '../data/index';
import { TOPIC_OUTLINES } from '../data/topicOutlines';
import {
  buildTopicKeyPointsDoc,
  downloadKeyPointsPdf,
  downloadAllKeyPointsPdf,
  splitBoldPrefix
} from '../utils/keyPointsPdf';
import {
  generatePostersPdfBlobUrl,
  downloadAllPostersPdf
} from '../utils/postersPdf';

export default function KeyPointsView({
  onSelectTopic,
  userMistakes = {},
  onClearMistake = null
}) {
  const [viewMode, setViewMode] = useState('pdf-sheets'); // 'pdf-sheets' | 'posters-pdf' | 'confusions' | 'my-errors'
  const mistakesList = useMemo(
    () =>
      Object.values(userMistakes || {}).sort(
        (a, b) => (b.count || 1) - (a.count || 1)
      ),
    [userMistakes]
  );
  const [selectedTopicId, setSelectedTopicId] = useState(TOPICS[0]?.id || 'tema-1');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [posterProgress, setPosterProgress] = useState('');
  const [postersPdfUrl, setPostersPdfUrl] = useState('');
  const [postersCount, setPostersCount] = useState(0);

  useEffect(() => {
    return () => {
      if (postersPdfUrl) URL.revokeObjectURL(postersPdfUrl);
    };
  }, [postersPdfUrl]);

  const handleOpenPostersOnline = async () => {
    setViewMode('posters-pdf');
    if (postersPdfUrl) return;
    const { blobUrl, count } = await generatePostersPdfBlobUrl(TOPICS, setPosterProgress);
    if (blobUrl) {
      setPostersPdfUrl(blobUrl);
      setPostersCount(count);
    }
  };

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
    <div className="space-y-6 print:space-y-0">
      <div className="print:hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-4">
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

          <div className="flex flex-wrap items-center gap-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 p-1">
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
              onClick={handleOpenPostersOnline}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                viewMode === 'posters-pdf'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Làmines Suro (PDF Online)</span>
            </button>
            <button
              onClick={() => setViewMode('confusions')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                viewMode === 'confusions'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Detector de Confusions</span>
            </button>
            <button
              onClick={() => setViewMode('my-errors')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                viewMode === 'my-errors'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Els meus errors ({mistakesList.length})</span>
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

            <button
              onClick={() => {
                const orderedTopics = [...TOPICS].sort((a, b) => a.number - b.number);
                const allDocs = orderedTopics.map((t) => {
                  const raw = TOPIC_OUTLINES[t.id];
                  const schemas = !raw ? [] : Array.isArray(raw) ? raw : raw.schemas ? raw.schemas : [raw];
                  const confusions = [];
                  KEY_POINT_GROUPS.forEach((g) => {
                    g.items.forEach((it) => {
                      if (it.topicNumber === t.number) confusions.push(it);
                    });
                  });
                  return {
                    topic: t,
                    docData: buildTopicKeyPointsDoc(t, schemas, confusions)
                  };
                });
                downloadAllKeyPointsPdf(allDocs);
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-4 py-2.5 text-xs sm:text-sm font-extrabold shadow-sm transition-colors"
              title="Genera un únic PDF amb tots els temes ordenats, començant cada tema en una pàgina nova"
            >
              <Download className="w-4 h-4" />
              <span>Tots els Temes (PDF)</span>
            </button>

            <button
              onClick={handleOpenPostersOnline}
              disabled={Boolean(posterProgress)}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-slate-950 px-4 py-2.5 text-xs sm:text-sm font-extrabold shadow-sm transition-colors"
              title="Obre el PDF amb tots els dibuixos esquemàtics en gran per veure'l online o descarregar-lo"
            >
              <FileText className="w-4 h-4" />
              <span>{posterProgress || 'Veure Làmines Suro (PDF)'}</span>
            </button>

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
        ) : viewMode === 'posters-pdf' ? (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
              {posterProgress
                ? posterProgress
                : postersCount > 0
                ? `${postersCount} làmines visuals llestes en PDF (cada dibuix en una pàgina gran A4).`
                : 'Generant PDF de làmines visuals...'}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {postersPdfUrl && (
                <>
                  <a
                    href={postersPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-amber-500"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Pestanya nova</span>
                  </a>
                  <a
                    href={postersPdfUrl}
                    download="Lamines_Visuals_Suro_Bombers_SGO_2026.pdf"
                    className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-xs sm:text-sm font-extrabold shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descarregar PDF</span>
                  </a>
                </>
              )}
            </div>
          </div>
        ) : viewMode === 'my-errors' ? (
          <div className="pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Aquí queden desades automàticament les preguntes de test que falles amb el teu usuari (desades al teu compte privat al núvol).
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

      {viewMode === 'posters-pdf' ? (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-sm">
          {postersPdfUrl ? (
            <iframe
              src={postersPdfUrl}
              title="Làmines Visuals per al Suro (PDF)"
              className="w-full h-[78vh] rounded-xl border border-slate-200 dark:border-slate-700 bg-white"
            />
          ) : (
            <div className="p-12 text-center text-sm font-bold text-slate-600 dark:text-slate-300">
              {posterProgress || 'Generant vista prèvia del PDF de làmines visuals...'}
            </div>
          )}
        </div>
      ) : viewMode === 'pdf-sheets' && docData ? (
        /* Previsualització estil document A4 oficial (idèntic als 3 PDFs de referència) */
        <article
          style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          className="max-w-4xl mx-auto border border-black bg-white text-black p-8 sm:p-14 shadow-md space-y-6 print:border-0 print:shadow-none print:p-0 print:max-w-none print:m-0"
        >
          {/* Caixa de títol superior */}
          <div className="border border-black px-4 py-3">
            <h2 className="text-[15px] sm:text-[17px] font-bold text-black leading-snug">
              {docData.headerBox}
            </h2>
          </div>

          {/* Seccions numerades */}
          <div className="space-y-5">
            {docData.sections.map((sec) => (
              <section key={sec.number} className="space-y-2">
                <h3 className="text-[13.5px] sm:text-[14.5px] font-bold text-black">
                  {sec.number}. {sec.title}
                </h3>

                <ul className="space-y-2 pl-5">
                  {sec.subblocks.map((sub, sIdx) => {
                    const { bold, rest } = splitBoldPrefix(sub.label);
                    const hasChildren = sub.bullets && sub.bullets.length > 0;
                    const effBold = bold || (hasChildren ? sub.label : '');
                    const effRest = bold ? rest : hasChildren ? '' : sub.label;
                    return (
                      <li key={sIdx} className="space-y-1">
                        <div className="text-[12.5px] sm:text-[13px] text-black leading-relaxed flex items-start gap-2.5">
                          <span className="mt-0.5 text-[10px] text-black">●</span>
                          <span>
                            {effBold && <strong className="font-bold">{effBold} </strong>}
                            {effRest}
                          </span>
                        </div>
                        {hasChildren && (
                          <ul className="pl-6 space-y-1">
                            {sub.bullets.map((b, bIdx) => {
                              const childParts = splitBoldPrefix(b);
                              return (
                                <li
                                  key={bIdx}
                                  className="text-[12px] sm:text-[12.5px] text-black leading-relaxed flex items-start gap-2.5"
                                >
                                  <span className="text-[10px] text-black mt-0.5">○</span>
                                  <span>
                                    {childParts.bold && (
                                      <strong className="font-bold">{childParts.bold} </strong>
                                    )}
                                    {childParts.rest}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>

          {/* Taules comparatives */}
          {docData.tables.map((tbl, tIdx) => (
            <div key={tIdx} className="space-y-2 pt-2">
              <h4 className="text-[13px] font-bold text-black">{tbl.title}</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-black text-[12px]">
                  <thead>
                    <tr className="bg-white">
                      {tbl.headers.map((h, hIdx) => (
                        <th
                          key={hIdx}
                          className="border border-black px-3 py-2 text-left font-bold text-black"
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
                            className={`border border-black px-3 py-2 text-black align-top ${
                              cIdx === 0 ? 'font-bold' : ''
                            }`}
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
            <div key={cIdx} className="border border-black px-5 py-4 space-y-2 bg-white">
              <h4 className="text-[13.5px] font-bold text-black">{box.title}</h4>
              <ul className="space-y-1.5 pl-4">
                {box.lines.map((ln, lIdx) => {
                  const parts = splitBoldPrefix(ln);
                  return (
                    <li
                      key={lIdx}
                      className="text-[12.5px] text-black leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-[10px] mt-0.5">●</span>
                      <span>
                        {parts.bold && <strong className="font-bold">{parts.bold} </strong>}
                        {parts.rest}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </article>
      ) : viewMode === 'my-errors' ? (
        <div className="space-y-4">
          {mistakesList.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center space-y-2">
              <p className="text-base font-extrabold text-slate-900 dark:text-white">
                Encara no tens cap error registrat al teu usuari!
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Quan fallis una pregunta en qualsevol test dels temes, apareixerà aquí amb la resposta correcta i l&apos;explicació perquè la puguis repassar.
              </p>
            </div>
          ) : (
            mistakesList.map((err) => (
              <div
                key={err.id}
                className="rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">
                      Tema {err.topicNumber}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      Fallada {err.count || 1} {err.count === 1 ? 'vegada' : 'vegades'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {err.topicId && onSelectTopic && (
                      <button
                        onClick={() => onSelectTopic(err.topicId)}
                        className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-1 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-red-400"
                      >
                        Anar al Tema {err.topicNumber}
                      </button>
                    )}
                    {onClearMistake && (
                      <button
                        onClick={() => onClearMistake(err.id)}
                        className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-xs font-bold"
                      >
                        Ja ho domino
                      </button>
                    )}
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                  {err.question}
                </h3>
                {err.correctAnswer && (
                  <p className="text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-300">
                    Resposta correcta: {err.correctAnswer}
                  </p>
                )}
                {err.explanation && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {err.explanation}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
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
