import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Bookmark,
  BookOpen,
  ClipboardCheck,
  Clock,
  Sparkles,
  Calculator,
  AlertTriangle,
  Download
} from 'lucide-react';
import ImportanceCard from './content/ImportanceCard';
import EasyExplanationCard from './content/EasyExplanationCard';
import NumericTable from './content/NumericTable';
import MnemonicCard from './content/MnemonicCard';
import DiagramContainer from './content/DiagramContainer';
import TopicOutlineCard from './content/TopicOutlineCard';
import QuizView from './quiz/QuizView';
import PageMnemonicsBox from './PageMnemonicsBox';
import { TOPIC_OUTLINES } from '../data/topicOutlines';
import { KEY_POINT_GROUPS } from '../data/keyPointsData';
import {
  buildTopicKeyPointsDoc,
  downloadKeyPointsPdf
} from '../utils/keyPointsPdf';

const MAX_PAGES_PER_TOPIC = 10;

export default function TopicView({
  topic,
  progress,
  initialTarget = null,
  extraQuestions = [],
  onSetPageMark,
  onSetTopicMark,
  onToggleDifficultPage,
  onCompleteTopicRound,
  onSaveQuizScore,
  onRecordQuestionOutcome,
  onOpenOfficialManual
}) {
  // Màxim estricte de 10 pàgines per tema
  const pages = (topic.pages || []).slice(0, MAX_PAGES_PER_TOPIC);
  const totalPages = pages.length;

  const rawOutline = TOPIC_OUTLINES[topic.id] || null;
  const schemas = Array.isArray(rawOutline)
    ? rawOutline
    : rawOutline?.schemas
    ? rawOutline.schemas
    : rawOutline
    ? [rawOutline]
    : [];
  const hasSchemas = schemas.length > 0;
  const [activeTab, setActiveTab] = useState('study'); // 'study' | 'quiz'
  const [focusedQuestionId, setFocusedQuestionId] = useState(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(hasSchemas ? -1 : 0);
  const [roundJustCompleted, setRoundJustCompleted] = useState(null);

  const roundsCompleted = (progress.topicRounds && progress.topicRounds[topic.id]) || 0;

  // Salt directe quan s'obre des del calendari o des d'un enllaç de correu
  useEffect(() => {
    setRoundJustCompleted(null);
    if (initialTarget === 'quiz') {
      setActiveTab('quiz');
      setCurrentPageIndex(0);
    } else if (initialTarget === 'summary') {
      setActiveTab('study');
      const sumIdx = pages.findIndex((p) => Boolean(p.isSummary) || Boolean(p.isFormulaSheet));
      setCurrentPageIndex(sumIdx >= 0 ? sumIdx : Math.max(0, totalPages - 2));
    } else if (typeof initialTarget === 'string' && initialTarget.startsWith('page:')) {
      const targetPageNum = Number(initialTarget.split(':')[1]);
      const pIdx = pages.findIndex((p) => (p.pageNumber || 0) === targetPageNum);
      setActiveTab('study');
      setCurrentPageIndex(pIdx >= 0 ? pIdx : Math.max(0, Math.min(totalPages - 1, targetPageNum - 1)));
    } else {
      setActiveTab('study');
      setCurrentPageIndex(hasSchemas ? -1 : 0);
    }
  }, [topic.id, initialTarget]);

  const currentPage = pages[currentPageIndex] || pages[0];
  const currentPageNumber = currentPage?.pageNumber || currentPageIndex + 1;

  const topicPagesStatus = progress.pageStatus?.[topic.id] || {};
  const currentPageStatus = topicPagesStatus[currentPageNumber] || 'pending';
  const topicGlobalStatus = progress.topicStatus?.[topic.id] || 'in_progress';

  const completedPagesCount = Object.values(topicPagesStatus).filter(
    (s) => s === 'completed'
  ).length;
  const readingProgressPercentage =
    currentPageIndex < 0 ? 0 : Math.round(((currentPageIndex + 1) / totalPages) * 100);

  const summaryPagesCount = pages.filter((p) => p.isSummary).length;
  const hasFormulaSheet = pages.some((p) => p.isFormulaSheet);

  const goPrev = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((i) => i - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentPageIndex === 0 && hasSchemas) {
      setCurrentPageIndex(-schemas.length);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goNext = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex((i) => i + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveTab('quiz');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const normalizeImportance = (imp) => {
    if (!imp) return null;
    return {
      title: imp.title || `Radar d'Examen (Tema ${topic.number} — ${topic.code || 'SGO 2026'})`,
      frequency: imp.frequency || 'Molt Alta',
      summary: imp.summary || imp.examWeight || '',
      hotTopics: imp.hotTopics || imp.focusPoints || [],
      traps: imp.traps || imp.commonTraps || []
    };
  };

  return (
    <div className="space-y-6">
      {/* Capçalera del Tema + Selector Pestanya */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 md:p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-lg bg-red-600 px-2.5 py-0.5 text-xs font-extrabold text-white">
                Tema {topic.number}
              </span>
              {topic.code && (
                <span className="inline-flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  {topic.code}
                </span>
              )}
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {topic.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5" />~{topic.estimatedMinutes} min
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
              Tema {topic.number}. {topic.title}
            </h1>
          </div>

          {/* Botons d'estat global del Tema */}
          <div className="flex flex-wrap items-center gap-2">
            {onOpenOfficialManual && (
              <button
                onClick={() => onOpenOfficialManual(topic.number)}
                className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all"
                title="Obre el manual oficial en PDF d'aquest tema per llegir o subratllar online"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Manual Oficial (PDF)</span>
              </button>
            )}
            <button
              onClick={() => {
                const confusions = [];
                KEY_POINT_GROUPS.forEach((g) =>
                  g.items.forEach((it) => {
                    if (it.topicNumber === topic.number) confusions.push(it);
                  })
                );
                const docData = buildTopicKeyPointsDoc(topic, schemas, confusions);
                downloadKeyPointsPdf(docData, topic);
              }}
              className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/50 transition-all"
              title="Descarrega la fitxa de Punts Clau d'aquest tema en PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Punts Clau PDF</span>
            </button>
            <button
              onClick={() => onSetTopicMark(topic.id, 'completed', totalPages)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold border transition-all ${
                topicGlobalStatus === 'completed'
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-500'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              {topicGlobalStatus === 'completed' ? 'Tema Completat' : 'Completar Tema'}
            </button>

            <button
              onClick={() => onSetTopicMark(topic.id, 'review', totalPages)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold border transition-all ${
                topicGlobalStatus === 'review'
                  ? 'bg-amber-500 text-slate-950 border-amber-500'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-500'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              {topicGlobalStatus === 'review' ? 'Tema per Repassar' : 'Marcar per Repassar'}
            </button>

            {onCompleteTopicRound && (
              <button
                onClick={() => {
                  onCompleteTopicRound(topic.id);
                  setRoundJustCompleted(roundsCompleted + 1);
                }}
                className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-extrabold border border-blue-300 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 transition-all"
                title="Registra una volta completa d'aquest tema"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {roundsCompleted > 0
                    ? `Volta ${roundsCompleted} ✓ · +1 Volta`
                    : 'Completar 1a Volta'}
                </span>
              </button>
            )}
          </div>
        </div>

        {roundJustCompleted && (
          <div className="mt-4 rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 px-4 py-3 text-xs font-bold text-emerald-800 dark:text-emerald-200">
            Enhorabona! Has completat la Volta {roundJustCompleted} d&apos;aquest tema.
            {roundJustCompleted === 1
              ? ' A partir d\'ara el calendari et recomanarà prioritàriament els resums i les preguntes noves!'
              : ''}
          </div>
        )}

        {/* Pestanyes Temari vs Test + Barra de Progrés de Lectura */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
            <button
              onClick={() => setActiveTab('study')}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                activeTab === 'study'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4 text-red-600" />
              <span>
                Temari ({totalPages} pàg.
                {hasFormulaSheet
                  ? ' + Formulari Final'
                  : summaryPagesCount > 0
                  ? ` incl. ${summaryPagesCount} de Resum`
                  : ''}
                )
              </span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                activeTab === 'quiz'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <ClipboardCheck className="w-4 h-4 text-emerald-600" />
              <span>Test d'Autoavaluació ({topic.quiz?.length || 10} preg.)</span>
            </button>
          </div>

          {activeTab === 'study' && (
            <div className="flex-1 min-w-[220px] max-w-md ml-auto">
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-600 dark:text-slate-300">
                  {currentPageIndex === -1
                    ? `Índex Esquema · ${totalPages} pàgines de temari`
                    : `Pàgina ${currentPageIndex + 1} de ${totalPages} (màx. 10 pàg.)`}
                </span>
                <span className="text-red-600 dark:text-red-400">
                  {completedPagesCount}/{totalPages} estudiades ({readingProgressPercentage}% lectura)
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  style={{ width: `${readingProgressPercentage}%` }}
                  className="h-full rounded-full bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-300"
                />
              </div>
            </div>
          )}
        </div>

        {/* Selector ràpid de pàgines (destacant Índex, Resum i Formulari Final) */}
        {activeTab === 'study' && (
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            {schemas.map((sch, sIdx) => {
              const targetIdx = -(sIdx + 1);
              const isCurrent = currentPageIndex === targetIdx;
              return (
                <button
                  key={`schema-${sIdx}`}
                  onClick={() => setCurrentPageIndex(targetIdx)}
                  className={`h-8 px-3 rounded-lg text-xs font-bold border transition-all flex items-center gap-1.5 ${
                    isCurrent
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400'
                  }`}
                >
                  <span>
                    🗂️{' '}
                    {sch.shortLabel
                      ? sch.shortLabel
                      : schemas.length > 1
                      ? `Esquema ${sIdx + 1}`
                      : 'Índex Esquema'}
                  </span>
                </button>
              );
            })}
            {pages.map((p, idx) => {
              const pNum = p.pageNumber || idx + 1;
              const pStatus = topicPagesStatus[pNum];
              const isCurrent = idx === currentPageIndex;
              const isSummary = Boolean(p.isSummary);
              const isFormula = Boolean(p.isFormulaSheet);

              return (
                <button
                  key={pNum}
                  onClick={() => setCurrentPageIndex(idx)}
                  className={`h-8 px-3 rounded-lg text-xs font-bold border transition-all flex items-center gap-1.5 ${
                    isCurrent
                      ? isFormula
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                        : isSummary
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                        : 'bg-red-600 text-white border-red-600 shadow-sm'
                      : pStatus === 'completed'
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                      : pStatus === 'review'
                      ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800'
                      : isFormula
                      ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-800 hover:bg-purple-100'
                      : isSummary
                      ? 'bg-amber-50/80 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800 hover:bg-amber-100/70'
                      : 'bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {isFormula && <Calculator className="w-3.5 h-3.5" />}
                  {isSummary && !isFormula && <Sparkles className="w-3.5 h-3.5" />}
                  <span>
                    {p.shortLabel
                      ? p.shortLabel
                      : isFormula
                      ? `Pàg. ${pNum} · Formulari`
                      : isSummary
                      ? `Pàg. ${pNum} · Resum`
                      : `Pàg. ${pNum}`}
                  </span>
                  {pStatus === 'completed' && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
                  {pStatus === 'review' && <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* CONTINGUT PRINCIPAL: VISTA ESTUDI vs VISTA TEST */}
      {activeTab === 'quiz' ? (
        <QuizView
          topic={topic}
          extraQuestions={extraQuestions}
          difficultCount={Object.keys(progress.difficultPages?.[topic.id] || {}).length}
          onSaveScore={onSaveQuizScore}
          onRecordOutcome={onRecordQuestionOutcome}
          focusedQuestionId={focusedQuestionId}
          savedQuizResult={progress.quizResults?.[topic.id]}
        />
      ) : (
        <>
          {/* Targeta Destacada "Anàlisi d'Importància" a l'inici del tema */}
          {currentPageIndex <= 0 && topic.importance && (
            <ImportanceCard
              data={normalizeImportance(topic.importance)}
              topicNumber={topic.number}
              quizQuestions={topic.quiz || []}
              onJumpToQuestion={(qId) => {
                setFocusedQuestionId(qId);
                setActiveTab('quiz');
              }}
            />
          )}

          {currentPageIndex < 0 && schemas[Math.abs(currentPageIndex) - 1] ? (
            (() => {
              const sIdx = Math.abs(currentPageIndex) - 1;
              const activeSchema = schemas[sIdx];
              const hasNextSchema = sIdx < schemas.length - 1;
              return (
                <TopicOutlineCard
                  topic={topic}
                  outline={activeSchema}
                  schemaIndex={sIdx}
                  totalSchemas={schemas.length}
                  onPrevSchema={
                    sIdx > 0
                      ? () => {
                          setCurrentPageIndex(-sIdx);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      : null
                  }
                  nextLabel={
                    hasNextSchema
                      ? `Següent Esquema (${schemas[sIdx + 1].shortLabel || sIdx + 2})`
                      : 'Començar Pàgina 1'
                  }
                  onStartReading={() => {
                    setCurrentPageIndex(hasNextSchema ? -(sIdx + 2) : 0);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              );
            })()
          ) : (
          /* Capçalera de la Pàgina Actual + Botons per marcar la pàgina */
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                      currentPage?.isFormulaSheet
                        ? 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300'
                        : currentPage?.isSummary
                        ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                        : 'bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400'
                    }`}
                  >
                    {currentPage?.isFormulaSheet
                      ? `Formulari Resum Final — Pàgina ${currentPageNumber} de ${totalPages}`
                      : currentPage?.isSummary
                      ? `Resum Punts Imprescindibles — Pàgina ${currentPageNumber} de ${totalPages}`
                      : `Tema ${topic.number} (${topic.code || 'SGO'}) — Pàgina ${currentPageNumber} de ${totalPages}`}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1.5">
                  {currentPage?.title}
                </h2>
                {(currentPage?.subtitle || currentPage?.summary) && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {currentPage.subtitle || currentPage.summary}
                  </p>
                )}
              </div>

              {/* Controls d'estat de la pàgina individual */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => onSetPageMark(topic.id, currentPageNumber, 'completed')}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold border transition-all ${
                    currentPageStatus === 'completed'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {currentPageStatus === 'completed' ? 'Pàgina Completada' : 'Completar Pàgina'}
                </button>

                <button
                  onClick={() => onSetPageMark(topic.id, currentPageNumber, 'review')}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold border transition-all ${
                    currentPageStatus === 'review'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-400'
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                  {currentPageStatus === 'review' ? 'Per Repassar' : 'Repassar'}
                </button>

                {onToggleDifficultPage && (
                  <button
                    onClick={() => onToggleDifficultPage(topic.id, currentPageNumber)}
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold border transition-all ${
                      (progress.difficultPages?.[topic.id] || {})[currentPageNumber]
                        ? 'bg-red-600 text-white border-red-600 shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-red-400'
                    }`}
                    title="Marca aquest apartat com a contingut complicat per estudiar-lo i preguntar-lo més"
                  >
                    <AlertTriangle className="w-4 h-4" />
                    {(progress.difficultPages?.[topic.id] || {})[currentPageNumber]
                      ? 'Contingut Complicat ✓'
                      : 'Complicat'}
                  </button>
                )}
              </div>
            </div>

            {/* Renderitzador modular de blocs del temari */}
            <div className="space-y-6">
              {(currentPage?.blocks || []).map((block, bIdx) => {
                switch (block.type) {
                  case 'importance':
                    return (
                      <ImportanceCard
                        key={bIdx}
                        data={normalizeImportance(block)}
                      />
                    );

                  case 'text':
                    return (
                      <section key={bIdx} className="space-y-3">
                        {block.heading && (
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-red-600 pl-3">
                            {block.heading}
                          </h3>
                        )}
                        {(block.paragraphs || []).map((p, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-base leading-relaxed text-slate-700 dark:text-slate-300"
                          >
                            {p}
                          </p>
                        ))}
                      </section>
                    );

                  case 'easy':
                    return (
                      <EasyExplanationCard
                        key={bIdx}
                        title={block.title}
                        metaphor={block.metaphor}
                        explanation={block.explanation}
                        takeaway={block.takeaway}
                      />
                    );

                  case 'table':
                    return (
                      <NumericTable
                        key={bIdx}
                        title={block.title}
                        subtitle={block.subtitle}
                        headers={block.headers || block.columns || []}
                        rows={block.rows || []}
                        footnote={block.footnote || block.note}
                      />
                    );

                  case 'mnemonic':
                    return (
                      <MnemonicCard
                        key={bIdx}
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

                  case 'diagram':
                    return (
                      <DiagramContainer
                        key={bIdx}
                        title={block.title}
                        caption={block.caption}
                        diagramType={block.diagramType}
                        customSvg={block.customSvg}
                      />
                    );

                  default:
                    return null;
                }
              })}
              <PageMnemonicsBox
                topicId={topic.id}
                pageNumber={currentPageNumber}
              />
            </div>

            {/* Peu de Paginació ("Anterior" / "Següent") */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
              <button
                onClick={goPrev}
                disabled={currentPageIndex === 0 && !hasSchemas}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-200 disabled:opacity-40 disabled:pointer-events-none hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Pàgina Anterior</span>
              </button>

              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                Pàgina {currentPageIndex + 1} / {totalPages}
              </span>

              <button
                onClick={goNext}
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 text-sm font-bold shadow-sm transition-colors"
              >
                <span>
                  {currentPageIndex < totalPages - 1
                    ? 'Pàgina Següent'
                    : "Anar al Test d'Autoavaluació"}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          )}
        </>
      )}
    </div>
  );
}
