import React, { useState } from 'react';
import {
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import EasyExplanationCard from './content/EasyExplanationCard';
import NumericTable from './content/NumericTable';
import MnemonicCard from './content/MnemonicCard';
import DiagramContainer from './content/DiagramContainer';
import PageMnemonicsBox from './PageMnemonicsBox';

// Calcula quants minuts aproximats porta llegir una pàgina de teoria segons paraules i blocs
function estimatePageMinutes(page, speedFactor = 1.0) {
  let words = 0;
  for (const b of page.blocks || []) {
    if (b.type === 'text') {
      words += (b.paragraphs || []).join(' ').split(/\s+/).length;
    } else if (b.type === 'easy') {
      words += `${b.metaphor || ''} ${b.explanation || ''} ${b.takeaway || ''}`.split(/\s+/).length;
    } else if (b.type === 'table') {
      const rowsText = (b.rows || []).flat().join(' ');
      words += rowsText.split(/\s+/).length * 0.7;
    } else if (b.type === 'mnemonic') {
      words += `${b.trick || ''} ${b.example || ''}`.split(/\s+/).length;
    } else if (b.type === 'diagram') {
      words += 45;
    }
  }
  const baseMinutes = Math.max(1.8, words / 145);
  return baseMinutes / Math.max(0.4, speedFactor);
}

export default function QuickStudyView({
  topics,
  progress,
  onToggleDifficultPage,
  onTrainReadingPace,
  onOpenTopic
}) {
  const [minutes, setMinutes] = useState(15);
  const [selectionMode, setSelectionMode] = useState('difficult'); // 'difficult' | 'topics'
  const [selectedTopicIds, setSelectedTopicIds] = useState([]);
  const [sessionSlides, setSessionSlides] = useState(null); // null | array of { topic, page, estMin, isDifficult }
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [slideIndex, setSlideIndex] = useState(0);
  const [feedbackGiven, setFeedbackGiven] = useState(null);

  const speedFactor = progress.readingSpeedFactor || 1.0;
  const difficultPages = progress.difficultPages || {};
  const pageStatus = progress.pageStatus || {};
  const quizResults = progress.quizResults || {};

  const totalDifficultCount = Object.values(difficultPages).reduce(
    (sum, map) => sum + Object.keys(map || {}).length,
    0
  );

  const toggleTopicChoice = (id) => {
    setSelectedTopicIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const buildSession = () => {
    let pool = [];

    for (const t of topics) {
      if (selectionMode === 'topics' && selectedTopicIds.length > 0) {
        if (!selectedTopicIds.includes(t.id)) continue;
      }

      const tDiff = difficultPages[t.id] || {};
      const tStatus = pageStatus[t.id] || {};
      const qRes = quizResults[t.id];
      const lowQuiz = qRes && qRes.percentage < 70;

      for (const p of t.pages || []) {
        const pNum = p.pageNumber || 1;
        const isDiff = Boolean(tDiff[pNum]);
        const isReview = tStatus[pNum] === 'review';
        const weight = isDiff ? 5 : isReview ? 3 : lowQuiz ? 2 : 1;

        pool.push({
          topic: t,
          page: p,
          pageNumber: pNum,
          estMin: estimatePageMinutes(p, speedFactor),
          isDifficult: isDiff,
          weight
        });
      }
    }

    if (selectionMode === 'difficult') {
      const hardOnly = pool.filter((item) => item.weight >= 2);
      if (hardOnly.length > 0) {
        pool = hardOnly;
      }
    }

    // Barreja aleatòria ponderada (prioritzant el que costa més, però sempre aleatori)
    const shuffled = [...pool].sort((a, b) => {
      const scoreA = Math.random() * a.weight;
      const scoreB = Math.random() * b.weight;
      return scoreB - scoreA;
    });

    const chosen = [];
    let accumulated = 0;
    for (const item of shuffled) {
      if (chosen.length === 0 || accumulated + item.estMin * 0.75 <= minutes) {
        chosen.push(item);
        accumulated += item.estMin;
      }
      if (accumulated >= minutes) break;
    }

    // Seleccionem 1 pregunta relacionada per cada pàgina/diapositiva llegida (evitant duplicats)
    const usedIds = new Set();
    const pickedQuestions = [];
    for (const slide of chosen) {
      const poolQ = [...(slide.topic.quiz || [])];
      if (slide.isDifficult) {
        const rank = { 'Difícil': 0, 'Mitjà': 1, 'Fàcil': 2 };
        poolQ.sort((a, b) => (rank[a.difficulty] ?? 1) - (rank[b.difficulty] ?? 1));
      } else {
        poolQ.sort(() => Math.random() - 0.5);
      }
      const match = poolQ.find((q) => !usedIds.has(`${slide.topic.id}:${q.id}`)) || poolQ[0];
      if (match) {
        usedIds.add(`${slide.topic.id}:${match.id}`);
        pickedQuestions.push({
          ...match,
          uid: `${slide.topic.id}-p${slide.pageNumber}-${match.id}-${pickedQuestions.length}`,
          topicNumber: slide.topic.number,
          topicTitle: slide.topic.title,
          pageNumber: slide.pageNumber
        });
      }
    }

    setSessionSlides(chosen);
    setSessionQuestions(pickedQuestions);
    setQuizAnswers({});
    setSlideIndex(0);
    setFeedbackGiven(null);
  };

  const handleFeedback = (type) => {
    onTrainReadingPace(type);
    setFeedbackGiven(type);
  };

  if (sessionSlides) {
    const isFinished = slideIndex >= sessionSlides.length;
    const current = sessionSlides[slideIndex];
    const totalEst = Math.round(sessionSlides.reduce((s, x) => s + x.estMin, 0));

    return (
      <div className="space-y-6">
        {/* Capçalera de sessió activa */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 dark:text-red-400">
              Sessió Ràpida ({minutes} min · ~{totalEst} min estimats · Ritme ×{speedFactor})
            </span>
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              {isFinished
                ? 'Sessió completada! Entrena el sistema'
                : `Diapositiva ${slideIndex + 1} de ${sessionSlides.length} · Tema ${current.topic.number}`}
            </h2>
          </div>

          <button
            onClick={() => setSessionSlides(null)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Nova sessió</span>
          </button>
        </div>

        {isFinished ? (
          <div className="space-y-6">
          <div className="rounded-3xl border border-emerald-200 dark:border-emerald-900/60 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm text-center space-y-5">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <div className="space-y-1.5 max-w-lg mx-auto">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Com t&apos;ha anat de temps per a {minutes} minuts?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                La teva resposta entrena el càlcul automàtic de quantes diapositives posar la
                propera vegada perquè no sigui ni massa ni massa poc.
              </p>
            </div>

            {feedbackGiven ? (
              <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 p-4 text-sm font-bold text-emerald-800 dark:text-emerald-200 max-w-md mx-auto">
                Entrenament desat! Nou factor de ritme de lectura: ×{progress.readingSpeedFactor || 1.0}
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => handleFeedback('too_much')}
                  className="px-4 py-3 rounded-2xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-200 text-xs font-extrabold hover:bg-red-100"
                >
                  M&apos;he passat de temps (massa contingut)
                </button>
                <button
                  onClick={() => handleFeedback('just_right')}
                  className="px-4 py-3 rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200 text-xs font-extrabold hover:bg-emerald-100"
                >
                  Temps perfecte! (ni massa ni poc)
                </button>
                <button
                  onClick={() => handleFeedback('too_little')}
                  className="px-4 py-3 rounded-2xl border border-blue-300 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200 text-xs font-extrabold hover:bg-blue-100"
                >
                  M&apos;ha sobrat temps (massa curt)
                </button>
              </div>
            )}
          </div>

          {sessionQuestions.length > 0 && (
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 dark:text-red-400">
                    Comprovació Final (1 pregunta per pàgina llegida)
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    Mini-Test de Repàs ({sessionQuestions.length} preguntes)
                  </h3>
                </div>
                <div className="rounded-xl bg-slate-100 dark:bg-slate-800 px-3.5 py-2 text-xs font-extrabold text-slate-800 dark:text-slate-200">
                  Encerts:{' '}
                  {sessionQuestions.filter((q) => quizAnswers[q.uid] === q.correctIndex).length} /{' '}
                  {Object.keys(quizAnswers).length}
                </div>
              </div>

              <div className="space-y-4">
                {sessionQuestions.map((q, qIdx) => {
                  const chosen = quizAnswers[q.uid];
                  const answered = chosen !== undefined;
                  return (
                    <div
                      key={q.uid}
                      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 p-4 sm:p-5 space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-extrabold text-blue-700 dark:text-blue-400">
                          Pregunta {qIdx + 1} · Tema {q.topicNumber} (Pàg. {q.pageNumber})
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {q.difficulty}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {q.question}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt, oIdx) => {
                          let cls =
                            'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-red-400';
                          if (answered) {
                            if (oIdx === q.correctIndex) {
                              cls =
                                'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold';
                            } else if (oIdx === chosen) {
                              cls =
                                'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
                            } else {
                              cls =
                                'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-400';
                            }
                          }
                          return (
                            <button
                              key={oIdx}
                              disabled={answered}
                              onClick={() =>
                                setQuizAnswers((prev) => ({ ...prev, [q.uid]: oIdx }))
                              }
                              className={`flex items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-left text-xs sm:text-sm transition-all ${cls}`}
                            >
                              <span>{opt}</span>
                              {answered && oIdx === q.correctIndex && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                              {answered && oIdx === chosen && oIdx !== q.correctIndex && (
                                <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                      {answered && q.explanation && (
                        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <span className="font-extrabold">Explicació:</span> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Tema {current.topic.number} · {current.topic.title} (Pàg. {current.pageNumber})
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                  {current.page.title}
                </h3>
                {current.page.subtitle && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {current.page.subtitle}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() =>
                    onToggleDifficultPage(current.topic.id, current.pageNumber)
                  }
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold border transition-all ${
                    (difficultPages[current.topic.id] || {})[current.pageNumber]
                      ? 'bg-red-600 text-white border-red-600'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>
                    {(difficultPages[current.topic.id] || {})[current.pageNumber]
                      ? 'Marcat Complicat ✓'
                      : 'Marcar Complicat'}
                  </span>
                </button>

                <button
                  onClick={() => onOpenTopic(current.topic.id)}
                  className="inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Obrir Tema</span>
                </button>
              </div>
            </div>

            {/* Blocs de teoria pura (zero problemes) */}
            <div className="space-y-5">
              {(current.page.blocks || []).map((block, idx) => {
                if (block.type === 'text') {
                  return (
                    <div key={idx} className="space-y-2.5">
                      {block.heading && (
                        <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                          {block.heading}
                        </h4>
                      )}
                      {(block.paragraphs || []).map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  );
                }
                if (block.type === 'easy') {
                  return (
                    <EasyExplanationCard
                      key={idx}
                      title={block.title}
                      metaphor={block.metaphor}
                      explanation={block.explanation}
                      takeaway={block.takeaway}
                    />
                  );
                }
                if (block.type === 'table') {
                  return (
                    <NumericTable
                      key={idx}
                      title={block.title}
                      subtitle={block.subtitle}
                      headers={block.headers || block.columns || []}
                      rows={block.rows || []}
                      footnote={block.footnote || block.note}
                    />
                  );
                }
                if (block.type === 'mnemonic') {
                  return (
                    <MnemonicCard
                      key={idx}
                      type={block.variant || (block.formula ? 'formula' : 'mnemonic')}
                      title={block.title}
                      acronym={block.acronym}
                      formula={block.formula || block.rule}
                      variables={
                        block.variables ||
                        (block.items || []).map((it) => ({
                          symbol: it.key,
                          meaning: it.value
                        }))
                      }
                      trick={block.trick || block.explanation}
                      example={block.example}
                    />
                  );
                }
                if (block.type === 'diagram') {
                  return (
                    <DiagramContainer
                      key={idx}
                      title={block.title}
                      caption={block.caption}
                      diagramType={block.diagramType}
                      customSvg={block.customSvg}
                    />
                  );
                }
                return null;
              })}
              <PageMnemonicsBox
                topicId={current.topic.id}
                pageNumber={current.pageNumber}
              />
            </div>

            <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setSlideIndex((i) => Math.max(0, i - 1))}
                disabled={slideIndex === 0}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs font-bold disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <button
                onClick={() => setSlideIndex((i) => i + 1)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 text-xs font-extrabold"
              >
                <span>
                  {slideIndex === sessionSlides.length - 1 ? 'Acabar i Valorar Temps' : 'Següent Diapositiva'}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-600/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-red-700 dark:text-red-400">
          <Clock className="w-3.5 h-3.5" />
          <span>Sessió Ràpida Adaptativa (5–45 min)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Tinc {minutes} minuts: Repàs de Teoria a Mida
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          Tria quant temps tens (de 5 a 45 minuts). El sistema selecciona aleatòriament
          diapositives de teoria pura (sense problemes) ajustades al teu ritme real de lectura (×
          {speedFactor}).
        </p>

        {/* Selector de minuts (5 a 45) */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              Temps disponible
            </span>
            <span className="text-xl font-extrabold text-red-600 dark:text-red-400">
              {minutes} minuts
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={45}
            step={5}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="w-full accent-red-600 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] font-bold text-slate-400">
            {[5, 10, 15, 20, 25, 30, 35, 40, 45].map((m) => (
              <button
                key={m}
                onClick={() => setMinutes(m)}
                className={minutes === m ? 'text-red-600 dark:text-red-400 font-extrabold' : ''}
              >
                {m}m
              </button>
            ))}
          </div>
        </div>

        {/* Mode de selecció: Coses que costen vs Per temes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => setSelectionMode('difficult')}
            className={`rounded-2xl border p-4 text-left transition-all ${
              selectionMode === 'difficult'
                ? 'border-red-600 bg-red-50/70 dark:bg-red-950/30 ring-2 ring-red-500/20'
                : 'border-slate-200 dark:border-slate-800'
            }`}
          >
            <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900 dark:text-white">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Prioritzar el que em costa</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Barreja apartats marcats com a Complicats ({totalDifficultCount}), Per Repassar i
              temes amb nota millorable.
            </p>
          </button>

          <button
            onClick={() => setSelectionMode('topics')}
            className={`rounded-2xl border p-4 text-left transition-all ${
              selectionMode === 'topics'
                ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/30 ring-2 ring-blue-500/20'
                : 'border-slate-200 dark:border-slate-800'
            }`}
          >
            <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900 dark:text-white">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Escollir per temes</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Selecciona temes concrets (o deixa-ho buit per barrejar tot el temari).
            </p>
          </button>
        </div>

        {selectionMode === 'topics' && (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
              <span>Temes seleccionats ({selectedTopicIds.length || 'Tots'}):</span>
              {selectedTopicIds.length > 0 && (
                <button
                  onClick={() => setSelectedTopicIds([])}
                  className="text-red-600 hover:underline"
                >
                  Netejar selecció
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto">
              {topics.map((t) => {
                const active = selectedTopicIds.includes(t.id);
                return (
                  <button
                    key={t.id}
                    onClick={() => toggleTopicChoice(t.id)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all ${
                      active
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    T{t.number} · {t.title.slice(0, 26)}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <button
          onClick={buildSession}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 text-sm font-extrabold shadow-md shadow-red-600/20 transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>Generar Sessió de {minutes} Minuts</span>
        </button>
      </div>
    </div>
  );
}
