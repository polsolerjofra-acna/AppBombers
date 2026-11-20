import React, { useState } from 'react';
import {
  Flame,
  Home,
  BarChart3,
  Calculator,
  Calendar,
  AlertTriangle,
  Lightbulb,
  Clock,
  Users,
  BookOpen,
  FolderOpen,
  ClipboardCheck,
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
  onSelectHome,
  onSelectDashboard,
  onSelectCalendar,
  onSelectQuickStudy,
  onSelectPractice,
  onSelectCalculations,
  onSelectKeyPoints,
  onSelectMnemonics,
  onSelectManuals,
  onSelectGroup,
  groupCount = 0,
  dueReviewsCount = 0,
  progress,
  darkMode,
  onToggleDarkMode,
  isOpenMobile,
  onCloseMobile
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [parcDropdownOpen, setParcDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [topicsDropdownOpen, setTopicsDropdownOpen] = useState(false);

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
      {/* Fons fosc quan el menú és obert */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-30 bg-slate-950/60 backdrop-blur-xs"
        />
      )}

      <aside
        className={`print:hidden fixed inset-y-0 left-0 z-40 w-80 h-screen shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between transition-transform duration-200 ${
          isOpenMobile ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Capçalera amb Logotip i Tancament Mòbil */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="./icons/icon-192.png"
              alt="Logo Estudi Bombers"
              className="h-10 w-10 rounded-xl shadow-md shadow-red-600/25 object-cover shrink-0"
            />
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-600 dark:text-red-400">
                Bombers Generalitat
              </span>
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                Temari resumit · SGO 2026
              </h2>
            </div>
          </div>

          <button
            onClick={onCloseMobile}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-2.5 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            title="Amagar menú"
          >
            <span>Amagar</span>
            <span>▲</span>
          </button>
        </div>

        {/* Cos principal amb scroll: Accessos principals + Desplegables + Cercador + Temari */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-2.5">
          <button
            onClick={() => {
              onSelectHome();
              onCloseMobile();
            }}
            className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all ${
              activeView === 'home'
                ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>Pàgina Principal</span>
            </div>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                activeView === 'home'
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              Inici
            </span>
          </button>

          <button
            onClick={() => {
              onSelectCalendar();
              onCloseMobile();
            }}
            className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all ${
              activeView === 'calendar'
                ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                : 'bg-slate-100/80 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Calendari i Voltes</span>
            </div>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                activeView === 'calendar'
                  ? 'bg-white/20 text-white'
                  : dueReviewsCount > 0
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              {dueReviewsCount > 0 ? `${dueReviewsCount} avui` : 'Al dia'}
            </span>
          </button>

          <button
            onClick={() => {
              onSelectPractice();
              onCloseMobile();
            }}
            className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all ${
              activeView === 'practice'
                ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                : 'bg-sky-50/90 dark:bg-sky-950/30 text-sky-900 dark:text-sky-200 border border-sky-200/70 dark:border-sky-900/50 hover:bg-sky-100/80 dark:hover:bg-sky-950/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4" />
              <span>Tests i Simulacres</span>
            </div>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                activeView === 'practice'
                  ? 'bg-white/20 text-white'
                  : 'bg-sky-600/15 text-sky-700 dark:text-sky-300'
              }`}
            >
              70+7
            </span>
          </button>

          {/* Desplegable: Parc de Bombers · Equip */}
          <button
            type="button"
            onClick={() => setParcDropdownOpen((v) => !v)}
            className="w-full flex items-center justify-between rounded-xl border border-emerald-200/80 dark:border-emerald-900/50 bg-emerald-50/70 dark:bg-emerald-950/25 px-3.5 py-2.5 text-xs font-extrabold text-emerald-950 dark:text-emerald-200 hover:bg-emerald-100/80 dark:hover:bg-emerald-950/40 transition"
          >
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-600" />
              <span>Parc de Bombers · Equip (2)</span>
            </div>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
              {parcDropdownOpen ? '▲' : '▼'}
            </span>
          </button>

          {parcDropdownOpen && (
            <div className="space-y-2 pl-2 border-l-2 border-emerald-200 dark:border-emerald-900/60">
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
                  onSelectGroup();
                  onCloseMobile();
                }}
                className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all ${
                  activeView === 'group'
                    ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                    : 'bg-emerald-50/90 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 border border-emerald-200/70 dark:border-emerald-900/50 hover:bg-emerald-100/80 dark:hover:bg-emerald-950/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Grup d&apos;Estudi i Rànquing</span>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    activeView === 'group'
                      ? 'bg-white/20 text-white'
                      : 'bg-emerald-600/15 text-emerald-700 dark:text-emerald-300'
                  }`}
                >
                  {groupCount > 0 ? `${groupCount} en línia` : 'Núvol'}
                </span>
              </button>
            </div>
          )}

          {/* Desplegable: Recursos */}
          <button
            type="button"
            onClick={() => setResourcesDropdownOpen((v) => !v)}
            className="w-full flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/70 px-3.5 py-2.5 text-xs font-extrabold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <div className="flex items-center gap-2">
              <FolderOpen className="w-4 h-4 text-red-600" />
              <span>Recursos (5)</span>
            </div>
            <span className="text-xs font-bold text-slate-500">
              {resourcesDropdownOpen ? '▲' : '▼'}
            </span>
          </button>

          {resourcesDropdownOpen && (
            <div className="space-y-2 pl-2 border-l-2 border-slate-200 dark:border-slate-800">
              <button
                onClick={() => {
                  onSelectQuickStudy();
                  onCloseMobile();
                }}
                className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all ${
                  activeView === 'quickstudy'
                    ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                    : 'bg-rose-50/90 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 border border-rose-200/70 dark:border-rose-900/50 hover:bg-rose-100/80 dark:hover:bg-rose-950/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Sessió Ràpida (5–45 min)</span>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    activeView === 'quickstudy'
                      ? 'bg-white/20 text-white'
                      : 'bg-rose-600/15 text-rose-700 dark:text-rose-300'
                  }`}
                >
                  Adaptatiu
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

              <button
                onClick={() => {
                  onSelectKeyPoints();
                  onCloseMobile();
                }}
                className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all ${
                  activeView === 'keypoints'
                    ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                    : 'bg-amber-50/90 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 border border-amber-200/70 dark:border-amber-900/50 hover:bg-amber-100/80 dark:hover:bg-amber-950/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Punts Clau i Confusions</span>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    activeView === 'keypoints'
                      ? 'bg-white/20 text-white'
                      : 'bg-amber-500/20 text-amber-800 dark:text-amber-300'
                  }`}
                >
                  Trampes
                </span>
              </button>

              <button
                onClick={() => {
                  onSelectMnemonics();
                  onCloseMobile();
                }}
                className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all ${
                  activeView === 'mnemonics'
                    ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                    : 'bg-purple-50/90 dark:bg-purple-950/30 text-purple-900 dark:text-purple-200 border border-purple-200/70 dark:border-purple-900/50 hover:bg-purple-100/80 dark:hover:bg-purple-950/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>Regles Mnemotècniques</span>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    activeView === 'mnemonics'
                      ? 'bg-white/20 text-white'
                      : 'bg-purple-600/15 text-purple-700 dark:text-purple-300'
                  }`}
                >
                  Trucs
                </span>
              </button>

              <button
                onClick={() => {
                  onSelectManuals();
                  onCloseMobile();
                }}
                className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all ${
                  activeView === 'manuals'
                    ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                    : 'bg-rose-50/90 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 border border-rose-200/70 dark:border-rose-900/50 hover:bg-rose-100/80 dark:hover:bg-rose-950/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4" />
                  <span>Manuals Oficials (PDF)</span>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    activeView === 'manuals'
                      ? 'bg-white/20 text-white'
                      : 'bg-rose-600/15 text-rose-700 dark:text-rose-300'
                  }`}
                >
                  34 PDF
                </span>
              </button>
            </div>
          )}

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cerca Tema (ex: Tema 24) o MAN..."
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 px-3 py-2 text-xs text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-red-500"
          />

          <button
            type="button"
            onClick={() => setTopicsDropdownOpen((v) => !v)}
            className="w-full flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/70 px-3.5 py-2.5 text-xs font-extrabold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-red-600" />
              <span>Temari resumit per estudiar ({filteredTopics.length}/{topics.length})</span>
            </div>
            <span className="text-xs font-bold text-slate-500">
              {topicsDropdownOpen || searchQuery.trim() ? '▲' : '▼'}
            </span>
          </button>

          {(topicsDropdownOpen || searchQuery.trim()) && (
          <nav className="space-y-2 pt-1">
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
          )}
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
