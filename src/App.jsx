import React, { useState, useEffect } from 'react';
import { Menu, Flame, BarChart3, Calculator, Sun, Moon } from 'lucide-react';
import { TOPICS } from './data';
import { useStudyProgress } from './hooks/useStudyProgress';
import Sidebar from './components/layout/Sidebar';
import TopicView from './components/TopicView';
import DashboardView from './components/dashboard/DashboardView';
import CalculationsView from './components/CalculationsView';
import PomodoroWidget from './components/PomodoroWidget';

export default function App() {
  const {
    progress,
    setPageMark,
    setTopicMark,
    saveQuizScore,
    markTopicReviewed,
    logPomodoroSession,
    resetAllProgress
  } = useStudyProgress();

  const [activeView, setActiveView] = useState('topic'); // 'topic' | 'dashboard'
  const [selectedTopicId, setSelectedTopicId] = useState(TOPICS[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('bombers_theme_dark') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('bombers_theme_dark', String(darkMode));
    } catch {
      // ignore
    }
  }, [darkMode]);

  const currentTopic = TOPICS.find((t) => t.id === selectedTopicId) || TOPICS[0];

  const handleSelectTopic = (topicId) => {
    setSelectedTopicId(topicId);
    setActiveView('topic');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Menú Lateral (Sidebar) */}
      <Sidebar
        topics={TOPICS}
        activeView={activeView}
        selectedTopicId={selectedTopicId}
        onSelectTopic={handleSelectTopic}
        onSelectDashboard={() => setActiveView('dashboard')}
        onSelectCalculations={() => {
          setActiveView('calculations');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        progress={progress}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((d) => !d)}
        isOpenMobile={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Contenidor Principal */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Barra Superior Mòbil / Tauleta */}
        <header className="sticky top-0 z-20 lg:hidden flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200"
          >
            <Menu className="w-4 h-4" />
            <span>Temari</span>
          </button>

          <div className="flex items-center gap-2 font-extrabold text-sm">
            <Flame className="w-4 h-4 text-red-600" />
            <span>Oposicions Bombers</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() =>
                setActiveView(activeView === 'calculations' ? 'topic' : 'calculations')
              }
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
              title="Càlculs, Fórmules i Problemes"
            >
              <Calculator className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                setActiveView(activeView === 'dashboard' ? 'topic' : 'dashboard')
              }
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
              title="Seguiment i Estadístiques"
            >
              <BarChart3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDarkMode((d) => !d)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
              title="Canviar tema clar/fosc"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Àrea de Lectura i Estudi (amplada màxima òptima per evitar fatiga visual) */}
        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 md:py-8 max-w-5xl w-full mx-auto">
          {activeView === 'dashboard' ? (
            <DashboardView
              topics={TOPICS}
              progress={progress}
              onSelectTopic={handleSelectTopic}
              onToggleTopicMark={setTopicMark}
              onMarkTopicReviewed={markTopicReviewed}
              onResetProgress={resetAllProgress}
            />
          ) : activeView === 'calculations' ? (
            <CalculationsView />
          ) : (
            <TopicView
              topic={currentTopic}
              progress={progress}
              onSetPageMark={setPageMark}
              onSetTopicMark={setTopicMark}
              onSaveQuizScore={saveQuizScore}
            />
          )}
        </main>
      </div>

      {/* Temporitzador Pomodoro persistent */}
      <PomodoroWidget
        activeTopic={currentTopic}
        activeView={activeView}
        onLogSession={logPomodoroSession}
        todayMinutes={
          (progress.pomodoroStats &&
            progress.pomodoroStats.minutesByDay &&
            progress.pomodoroStats.minutesByDay[new Date().toISOString().split('T')[0]]) ||
          0
        }
      />
    </div>
  );
}
