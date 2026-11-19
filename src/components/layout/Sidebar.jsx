import React, { useState } from 'react';
import {
  Flame,
  BarChart3,
  Calculator,
  BookOpen,
  CheckCircle2,
  Bookmark,
  Sun,
  Moon,
  X
} from 'lucide-react';

export default function Sidebar({
  topics,
  activeView,
  selectedTopicId,
  onSelectTopic,
  onSelectDashboard,
  onSelectCalculations,
  progress,
  darkMode,
  onToggleDarkMode,
  isOpenMobile,
  onCloseMobile
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = topics.filter((t) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      t.title.toLowerCase().includes(q) ||
      (t.code && t.code.toLowerCase().includes(q)) ||
      (t.category && t.category.toLowerCase().includes(q)) ||
      `tema ${t.number}`.includes(q) ||
      `t${t.number}`.includes(q)
    );
  });

  return (
    <>
      {/* Fons fosc en mòbil */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-30 bg-slate-950/60 backdrop-blur-xs lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:sticky lg:top-0 inset-y-0 left-0 z-40 w-80 h-screen shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between transition-transform duration-200 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Capçalera amb Logotip i Tancament Mòbil */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-orange-600 text-white shadow-md shadow-red-600/25">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-600 dark:text-red-400">
                Bombers Generalitat
              </span>
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                Temari Oficial SGO 2026
              </h2>
            </div>
          </div>

          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Accés directe a "Seguiment i Estadístiques" + Cercador ràpid */}
        <div className="p-3.5 border-b border-slate-100 dark:border-slate-800 space-y-2.5 shrink-0">
          <button
            onClick={() => {
              onSelectDashboard();
              onCloseMobile();
            }}
            className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all ${
              activeView === 'dashboard'
                ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                : 'bg-slate-100/80 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>Seguiment i Estadístiques</span>
            </div>
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${
                activeView === 'dashboard'
                  ? 'bg-white/20 text-white'
                  : 'bg-orange-500/15 text-orange-600 dark:text-orange-400'
              }`}
            >
              {progress.streakDays || 1}d 🔥
            </span>
          </button>

          <button
            onClick={() => {
              onSelectCalculations();
              onCloseMobile();
            }}
            className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all ${
              activeView === 'calculations'
                ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                : 'bg-blue-50/90 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200 border border-blue-200/70 dark:border-blue-900/50 hover:bg-blue-100/80 dark:hover:bg-blue-950/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              <span>Càlculs, Fórmules i Problemes</span>
            </div>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                activeView === 'calculations'
                  ? 'bg-white/20 text-white'
                  : 'bg-blue-600/15 text-blue-700 dark:text-blue-300'
              }`}
            >
              5 temes
            </span>
          </button>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cerca Tema (ex: Tema 24) o MAN..."
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 px-3 py-2 text-xs text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Llista de Temes Navegables amb Scroll Independent */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-2">
          <div className="flex items-center justify-between px-1 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Temari Oficial ({filteredTopics.length}/{topics.length} temes)
            </span>
            <span className="text-[11px] font-semibold text-slate-400">≤10 pàg. + Resum</span>
          </div>

          <nav className="space-y-2">
            {filteredTopics.map((topic) => {
              const isSelected = activeView === 'topic' && selectedTopicId === topic.id;
              const pagesMap = progress.pageStatus?.[topic.id] || {};
              const totalPages = topic.pages.length;
              const completedPages = Object.values(pagesMap).filter(
                (st) => st === 'completed'
              ).length;
              const pct = Math.round((completedPages / Math.max(1, totalPages)) * 100);
              const topicMark = progress.topicStatus?.[topic.id];
              const quizRes = progress.quizResults?.[topic.id];
              const hasFormula = topic.pages.some((p) => p.isFormulaSheet);
              const summaryCount = topic.pages.filter((p) => p.isSummary).length;

              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    onSelectTopic(topic.id);
                    onCloseMobile();
                  }}
                  className={`w-full text-left rounded-xl p-3 border transition-all ${
                    isSelected
                      ? 'border-red-500/80 bg-red-50/70 dark:bg-red-950/35 dark:border-red-800 shadow-xs'
                      : 'border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1.5 mb-1">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          isSelected
                            ? 'bg-red-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        Tema {topic.number}
                      </span>
                      {topic.code && (
                        <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400">
                          {topic.code}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      {topicMark === 'completed' && (
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-emerald-500"
                          title="Tema Completat"
                        />
                      )}
                      {topicMark === 'review' && (
                        <Bookmark
                          className="w-3.5 h-3.5 text-amber-500"
                          title="Marcat per Repassar"
                        />
                      )}
                      <span className="text-[11px] font-mono font-bold text-slate-600 dark:text-slate-300">
                        {pct}%
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                    {topic.title}
                  </h3>

                  {/* Barra de progrés individual del tema */}
                  <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      style={{ width: `${pct}%` }}
                      className={`h-full rounded-full transition-all duration-300 ${
                        pct === 100 ? 'bg-emerald-500' : 'bg-red-600'
                      }`}
                    />
                  </div>

                  <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {completedPages}/{totalPages} pàg.
                      {hasFormula
                        ? ' (🧮 Form.)'
                        : summaryCount > 0
                        ? ` (${summaryCount} Resum)`
                        : ''}
                    </span>
                    <span>
                      {quizRes
                        ? `Test: ${quizRes.bestScore}/${quizRes.totalQuestions}`
                        : `Test (${topic.quiz?.length || 5}p)`}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Peu del Sidebar: Commutador Mode Clar / Mode Fosc */}
        <div className="p-3.5 border-t border-slate-100 dark:border-slate-800 shrink-0">
          <button
            onClick={onToggleDarkMode}
            className="w-full flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="flex items-center gap-2">
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
              <span>{darkMode ? 'Mode Fosc Actiu' : 'Mode Clar Actiu'}</span>
            </span>
            <span className="text-[11px] text-slate-400">Canviar</span>
          </button>
        </div>
      </aside>
    </>
  );
}
