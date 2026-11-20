import React, { useState, useEffect } from 'react';
import { Menu, Flame, BarChart3, Calculator, Calendar, AlertTriangle, Users, Sun, Moon } from 'lucide-react';
import { TOPICS } from './data';
import { useStudyProgress } from './hooks/useStudyProgress';
import Sidebar from './components/layout/Sidebar';
import TopicView from './components/TopicView';
import DashboardView from './components/dashboard/DashboardView';
import CalculationsView from './components/CalculationsView';
import CalendarView from './components/CalendarView';
import KeyPointsView from './components/KeyPointsView';
import MnemonicsView from './components/MnemonicsView';
import QuickStudyView from './components/QuickStudyView';
import GroupStudyView from './components/GroupStudyView';
import PomodoroWidget from './components/PomodoroWidget';
import {
  subscribeAuth,
  loadPrivateProgress,
  saveCloudProgress,
  subscribeGroupProfiles,
  fetchDailyQuestions
} from './services/firebaseSync';

export default function App() {
  const {
    progress,
    setPageMark,
    setTopicMark,
    saveQuizScore,
    markTopicReviewed,
    logPomodoroSession,
    completeTopicRound,
    scheduleTopicForDate,
    unscheduleTopicForDate,
    saveFridayCalcSession,
    setDailyEmailEnabled,
    toggleDifficultPage,
    trainReadingPace,
    replaceProgressFromCloud,
    resetAllProgress
  } = useStudyProgress();

  const [activeView, setActiveView] = useState('topic'); // 'topic' | 'dashboard' | 'calendar' | 'calculations' | 'keypoints' | 'group'
  const [selectedTopicId, setSelectedTopicId] = useState(TOPICS[0].id);
  const [topicTarget, setTopicTarget] = useState(null); // null | 'manual' | 'summary' | 'quiz'
  const [calcInitialMode, setCalcInitialMode] = useState('all'); // 'all' | 'friday'
  const [dailyQuestionsByTopic, setDailyQuestionsByTopic] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cloudUser, setCloudUser] = useState(null);
  const [groupProfiles, setGroupProfiles] = useState([]);
  const [syncStatus, setSyncStatus] = useState('idle');
  const [authError, setAuthError] = useState('');

  // Suport per a enllaços directes (ex. ?tema=tema-6&vista=summary des del correu diari)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const tParam = params.get('tema');
      const vParam = params.get('vista');
      if (tParam && TOPICS.some((t) => t.id === tParam)) {
        setSelectedTopicId(tParam);
        setActiveView('topic');
        if (vParam === 'summary' || vParam === 'quiz' || vParam === 'manual') {
          setTopicTarget(vParam);
        }
      } else if (vParam === 'calendari') {
        setActiveView('calendar');
      } else if (vParam === 'calculs') {
        setActiveView('calculations');
      } else if (vParam === 'punts-clau') {
        setActiveView('keypoints');
      } else if (vParam === 'mnemotecnica') {
        setActiveView('mnemonics');
      }
    } catch {
      // ignore
    }
  }, []);

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

  // Carrega preguntes generades diàriament per al tema actual si l'usuari està autenticat
  useEffect(() => {
    if (!cloudUser || !currentTopic?.id) return;
    let cancelled = false;
    fetchDailyQuestions(currentTopic.id).then((list) => {
      if (!cancelled && list.length > 0) {
        setDailyQuestionsByTopic((prev) => ({ ...prev, [currentTopic.id]: list }));
      }
    });
    return () => {
      cancelled = true;
    };
  }, [cloudUser, currentTopic?.id]);

  const todayISO = new Date().toISOString().split('T')[0];
  const dueReviewsCount = TOPICS.filter((t) => {
    const sp = (progress.spacedRepetition || {})[t.id];
    return sp?.nextReviewAt && sp.nextReviewAt <= todayISO;
  }).length;

  // Subscripció d'autenticació Firebase i càrrega del progrés al núvol
  useEffect(() => {
    const unsubAuth = subscribeAuth(async (user) => {
      setCloudUser(user || null);
      if (user) {
        try {
          const cloudState = await loadPrivateProgress(user.uid);
          if (cloudState) {
            replaceProgressFromCloud(cloudState);
          }
        } catch (err) {
          setAuthError('No s\'ha pogut carregar el progrés del núvol: ' + (err?.message || ''));
        }
      }
    });
    return () => unsubAuth && unsubAuth();
  }, []);

  // Subscripció en temps real al rànquing del grup quan hi ha sessió iniciada
  useEffect(() => {
    if (!cloudUser) {
      setGroupProfiles([]);
      return () => {};
    }
    const unsubGroup = subscribeGroupProfiles((list) => setGroupProfiles(list));
    return () => unsubGroup && unsubGroup();
  }, [cloudUser]);

  // Desa automàticament els avenços al núvol quan l'usuari està autenticat
  useEffect(() => {
    if (!cloudUser) return;
    const todayISO = new Date().toISOString().split('T')[0];
    const completedTopics = TOPICS.filter(
      (t) => progress.topicStatus?.[t.id] === 'completed'
    ).length;
    const completedPages = TOPICS.reduce((sum, t) => {
      const pMap = progress.pageStatus?.[t.id] || {};
      return sum + Object.values(pMap).filter((s) => s === 'completed').length;
    }, 0);
    const quizEntries = Object.values(progress.quizResults || {});
    const averageQuiz =
      quizEntries.length > 0
        ? Math.round(
            quizEntries.reduce((s, q) => s + (q.percentage || 0), 0) / quizEntries.length
          )
        : 0;
    const pom = progress.pomodoroStats || {};
    const todayMinutes = (pom.minutesByDay && pom.minutesByDay[todayISO]) || 0;
    const lastSession = (progress.studySessions || [])[0];

    setSyncStatus('syncing');
    const timer = setTimeout(() => {
      const totalPages = TOPICS.reduce((sum, t) => sum + t.pages.length, 0);
      saveCloudProgress(
        cloudUser,
        {
          completedTopics,
          totalTopics: TOPICS.length,
          completedPages,
          totalPages,
          quizAverage: averageQuiz,
          quizzesCompleted: quizEntries.length,
          streakDays: progress.streakDays || 1,
          pomodoroTodayMinutes: Math.min(1440, todayMinutes),
          pomodoroTotalMinutes: Math.min(1000000, pom.totalMinutes || 0),
          pomodoroTodayDate: todayISO,
          lastActiveDate: todayISO,
          roundsCompleted: Object.values(progress.topicRounds || {}).filter((r) => r >= 1).length,
          dailyEmailEnabled: progress.dailyEmailEnabled !== false
        },
        progress
      )
        .then(() => setSyncStatus('synced'))
        .catch(() => setSyncStatus('idle'));
    }, 900);
    return () => clearTimeout(timer);
  }, [cloudUser, progress, currentTopic]);

  const handleSelectTopic = (topicId, target = null) => {
    setSelectedTopicId(topicId);
    setTopicTarget(target);
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
        onSelectTopic={(id) => handleSelectTopic(id, null)}
        onSelectDashboard={() => setActiveView('dashboard')}
        onSelectCalendar={() => {
          setActiveView('calendar');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectQuickStudy={() => {
          setActiveView('quickstudy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectCalculations={() => {
          setCalcInitialMode('all');
          setActiveView('calculations');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectKeyPoints={() => {
          setActiveView('keypoints');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectMnemonics={() => {
          setActiveView('mnemonics');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectGroup={() => {
          setActiveView('group');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        groupCount={groupProfiles.length}
        dueReviewsCount={dueReviewsCount}
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
                setActiveView(activeView === 'calendar' ? 'topic' : 'calendar')
              }
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
              title="Calendari i Voltes"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                setActiveView(activeView === 'keypoints' ? 'topic' : 'keypoints')
              }
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
              title="Punts Clau i Confusions"
            >
              <AlertTriangle className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                setActiveView(activeView === 'group' ? 'topic' : 'group')
              }
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
              title="Grup d'Estudi i Rànquing"
            >
              <Users className="w-4 h-4" />
            </button>
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
              onSelectTopic={(id) => handleSelectTopic(id, null)}
              onToggleTopicMark={setTopicMark}
              onMarkTopicReviewed={markTopicReviewed}
              onResetProgress={resetAllProgress}
            />
          ) : activeView === 'calendar' ? (
            <CalendarView
              topics={TOPICS}
              progress={progress}
              onOpenTopic={(id, target) => handleSelectTopic(id, target)}
              onOpenCalculations={(mode) => {
                setCalcInitialMode(mode || 'all');
                setActiveView('calculations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMarkTopicReviewed={markTopicReviewed}
              onCompleteTopicRound={completeTopicRound}
              onScheduleTopic={scheduleTopicForDate}
              onUnscheduleTopic={unscheduleTopicForDate}
              onToggleDailyEmail={setDailyEmailEnabled}
              cloudUser={cloudUser}
            />
          ) : activeView === 'quickstudy' ? (
            <QuickStudyView
              topics={TOPICS}
              progress={progress}
              onToggleDifficultPage={toggleDifficultPage}
              onTrainReadingPace={trainReadingPace}
              onOpenTopic={(id) => handleSelectTopic(id, null)}
            />
          ) : activeView === 'calculations' ? (
            <CalculationsView
              initialMode={calcInitialMode}
              fridayHistory={progress.fridayCalcHistory || []}
              onSaveFridaySession={saveFridayCalcSession}
            />
          ) : activeView === 'keypoints' ? (
            <KeyPointsView onSelectTopic={(id) => handleSelectTopic(id, null)} />
          ) : activeView === 'mnemonics' ? (
            <MnemonicsView
              topics={TOPICS}
              onSelectTopic={(id, target = null) => handleSelectTopic(id, target)}
            />
          ) : activeView === 'group' ? (
            <GroupStudyView
              user={cloudUser}
              groupProfiles={groupProfiles}
              topicsCount={TOPICS.length}
              syncStatus={syncStatus}
              authError={authError}
              onClearError={() => setAuthError('')}
            />
          ) : (
            <TopicView
              topic={currentTopic}
              progress={progress}
              initialTarget={topicTarget}
              extraQuestions={dailyQuestionsByTopic[currentTopic.id] || []}
              onSetPageMark={setPageMark}
              onSetTopicMark={setTopicMark}
              onToggleDifficultPage={toggleDifficultPage}
              onCompleteTopicRound={completeTopicRound}
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
