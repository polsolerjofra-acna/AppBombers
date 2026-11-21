import React, { useState, useEffect } from 'react';
import { Menu, Flame, Users, Sun, Moon, LogIn, LogOut, AlertTriangle } from 'lucide-react';
import { TOPICS } from './data';
import { useStudyProgress } from './hooks/useStudyProgress';
import Sidebar from './components/layout/Sidebar';
import HomeView from './components/HomeView';
import TopicView from './components/TopicView';
import DashboardView from './components/dashboard/DashboardView';
import CalculationsView from './components/CalculationsView';
import CalendarView from './components/CalendarView';
import KeyPointsView from './components/KeyPointsView';
import MnemonicsView from './components/MnemonicsView';
import ManualsView from './components/ManualsView';
import PracticeTestView from './components/PracticeTestView';
import QuickStudyView from './components/QuickStudyView';
import GroupStudyView from './components/GroupStudyView';
import AudioSummariesView from './components/AudioSummariesView';
import PomodoroWidget from './components/PomodoroWidget';
import {
  subscribeAuth,
  loginWithGoogle,
  logoutFirebase,
  loadPrivateProgress,
  subscribePrivateProgress,
  saveCloudProgress,
  subscribeGroupProfiles,
  fetchDailyQuestions
} from './services/firebaseSync';

const APP_CLIENT_VERSION = '2026.11.20.2';
const SEEN_RELEASE_KEY = 'bombers_seen_release_v1';
const LAST_ACTIVE_AT_KEY = 'bombers_last_active_at_v1';
const INACTIVITY_RESET_MS = 10 * 60 * 1000; // 10 minuts sense entrar a l'app

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: '' };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMsg: error?.message || 'Error inesperat' };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-3xl border border-red-200 dark:border-red-900 bg-white dark:bg-slate-900 p-6 sm:p-8 text-center space-y-4 shadow-sm">
          <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
            S&apos;ha produït un error puntual en aquesta vista
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {this.state.errorMsg}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, errorMsg: '' });
              this.props.onResetHome && this.props.onResetHome();
            }}
            className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 text-xs font-extrabold"
          >
            Tornar a la Pàgina Principal
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const {
    progress,
    setPageMark,
    setTopicMark,
    saveQuizScore,
    markTopicReviewed,
    logPomodoroSession,
    recordActiveMinute,
    completeTopicRound,
    completeFirstRoundAll,
    scheduleTopicForDate,
    unscheduleTopicForDate,
    saveFridayCalcSession,
    setDailyEmailEnabled,
    toggleDifficultPage,
    trainReadingPace,
    setManualAnnotation,
    recordQuestionOutcome,
    clearUserMistake,
    replaceProgressFromCloud,
    resetAllProgress
  } = useStudyProgress();

  const [activeView, setActiveView] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('bombers_last_nav_v1') || '{}');
      const allowed = ['home', 'topic', 'dashboard', 'calendar', 'quickstudy', 'audio', 'practice', 'calculations', 'keypoints', 'mnemonics', 'manuals', 'group'];
      return allowed.includes(saved.activeView) ? saved.activeView : 'home';
    } catch {
      return 'home';
    }
  });
  const [selectedTopicId, setSelectedTopicId] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('bombers_last_nav_v1') || '{}');
      if (saved.selectedTopicId && TOPICS.some((t) => t.id === saved.selectedTopicId)) {
        return saved.selectedTopicId;
      }
    } catch {
      // ignore
    }
    return TOPICS[0].id;
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        'bombers_last_nav_v1',
        JSON.stringify({ activeView, selectedTopicId })
      );
    } catch {
      // ignore
    }
  }, [activeView, selectedTopicId]);
  const [topicTarget, setTopicTarget] = useState(null); // null | 'manual' | 'summary' | 'quiz'
  const [manualTopicTarget, setManualTopicTarget] = useState(null);
  const [calcInitialMode, setCalcInitialMode] = useState('all'); // 'all' | 'friday'
  const [dailyQuestionsByTopic, setDailyQuestionsByTopic] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cloudUser, setCloudUser] = useState(null);
  const cloudLoadedUidRef = React.useRef(null);
  const [groupProfiles, setGroupProfiles] = useState([]);
  const [syncStatus, setSyncStatus] = useState('idle');
  const [authError, setAuthError] = useState('');
  const [authChecked, setAuthChecked] = useState(false);
  const [showAuthReminder, setShowAuthReminder] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [importantRelease, setImportantRelease] = useState(null);
  const [resumePrompt, setResumePrompt] = useState(null); // { view, topicId?, label }
  const [authReminderDismissed, setAuthReminderDismissed] = useState(() => {
    try {
      return sessionStorage.getItem('bombers_auth_reminder_dismissed') === '1';
    } catch {
      return false;
    }
  });

  const dismissAuthReminder = () => {
    setAuthReminderDismissed(true);
    setShowAuthReminder(false);
    try {
      sessionStorage.setItem('bombers_auth_reminder_dismissed', '1');
    } catch {
      // ignore
    }
  };

  // Si fa > 10 minuts sense entrar a l'app, torna a l'inici i pregunta si vol reprendre l'apartat inacabat
  useEffect(() => {
    const buildResumeIfUnfinished = (view, topicId) => {
      if (view === 'topic') {
        if (progress.topicStatus?.[topicId] === 'completed') return null;
        const found = TOPICS.find((t) => t.id === topicId);
        return found
          ? { view: 'topic', topicId, label: `Tema ${found.number} · ${found.title}` }
          : null;
      }
      if (view === 'practice') {
        try {
          if (localStorage.getItem('bombers_active_test_pending') !== '1') return null;
        } catch {
          return null;
        }
        return { view: 'practice', label: 'Tests i Simulacres (test en curs)' };
      }
      if (view === 'calculations') return { view: 'calculations', label: 'Càlculs, Fórmules i Problemes' };
      if (view === 'quickstudy') return { view: 'quickstudy', label: 'Sessió Ràpida' };
      if (view === 'manuals') return { view: 'manuals', label: 'Manuals Oficials (PDF)' };
      return null;
    };

    const checkAwayTimeout = () => {
      try {
        const raw = localStorage.getItem(LAST_ACTIVE_AT_KEY);
        const lastAt = raw ? Number(raw) : 0;
        const now = Date.now();
        if (lastAt > 0 && now - lastAt > INACTIVITY_RESET_MS && activeView !== 'home') {
          const pending = buildResumeIfUnfinished(activeView, selectedTopicId);
          setActiveView('home');
          if (pending) setResumePrompt(pending);
        }
        localStorage.setItem(LAST_ACTIVE_AT_KEY, String(now));
      } catch {
        // ignore
      }
    };

    checkAwayTimeout();

    let lastPing = Date.now();
    const touchActivity = () => {
      const now = Date.now();
      if (now - lastPing < 15000) return;
      lastPing = now;
      try {
        localStorage.setItem(LAST_ACTIVE_AT_KEY, String(now));
      } catch {}
    };

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        try {
          localStorage.setItem(LAST_ACTIVE_AT_KEY, String(Date.now()));
        } catch {}
      } else if (document.visibilityState === 'visible') {
        checkAwayTimeout();
      }
    };

    window.addEventListener('pointerdown', touchActivity, { passive: true });
    window.addEventListener('keydown', touchActivity, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      window.removeEventListener('pointerdown', touchActivity);
      window.removeEventListener('keydown', touchActivity);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [activeView, selectedTopicId, progress.topicStatus]);

  // Comprovació d'actualitzacions de l'app (version.json + Service Worker del navegador)
  useEffect(() => {
    let active = true;
    const checkVersion = async () => {
      try {
        const res = await fetch(`./version.json?t=${Date.now()}`, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (!active || !data || !data.version) return;

        setUpdateAvailable(data.version !== APP_CLIENT_VERSION);

        if (data.isImportant && Array.isArray(data.cards) && data.cards.length > 0) {
          let seenVersion = '';
          try {
            seenVersion = localStorage.getItem(SEEN_RELEASE_KEY) || '';
          } catch {
            // ignore
          }
          if (seenVersion !== data.version) {
            setImportantRelease(data);
          }
        }
      } catch {
        // ignore offline errors
      }
    };

    checkVersion();
    const timer = setInterval(checkVersion, 5 * 60 * 1000);
    const onVis = () => {
      if (document.visibilityState === 'visible') checkVersion();
    };
    document.addEventListener('visibilitychange', onVis);

    // Detecció nativa del navegador si hi ha un Service Worker en espera d'actualitzar
    let swReg = null;
    const onUpdateFound = () => {
      if (!swReg?.installing) return;
      const newWorker = swReg.installing;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller && active) {
          setUpdateAvailable(true);
        }
      });
    };
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (!active || !reg) return;
        swReg = reg;
        if (reg.waiting && navigator.serviceWorker.controller) {
          setUpdateAvailable(true);
        }
        reg.addEventListener('updatefound', onUpdateFound);
      }).catch(() => {});
    }

    return () => {
      active = false;
      clearInterval(timer);
      document.removeEventListener('visibilitychange', onVis);
      if (swReg) {
        swReg.removeEventListener('updatefound', onUpdateFound);
      }
    };
  }, []);

  const handleApplyUpdate = async () => {
    try {
      if ('serviceWorker' in navigator) {
        const reg = await navigator.serviceWorker.getRegistration();
        if (reg?.waiting) {
          reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
      }
      if ('caches' in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      }
    } catch {
      // ignore
    }
    window.location.reload();
  };

  const dismissImportantRelease = () => {
    if (importantRelease?.version) {
      try {
        localStorage.setItem(SEEN_RELEASE_KEY, importantRelease.version);
      } catch {
        // ignore
      }
    }
    setImportantRelease(null);
  };

  // Recordatori emergent després d'una estona navegant sense iniciar sessió
  useEffect(() => {
    if (!authChecked || cloudUser || authReminderDismissed) {
      setShowAuthReminder(false);
      return;
    }
    const timer = setTimeout(() => {
      setShowAuthReminder(true);
    }, 90000); // 90 segons navegant sense sessió iniciada
    return () => clearTimeout(timer);
  }, [authChecked, cloudUser, authReminderDismissed]);

  const handleQuickGoogleLogin = async () => {
    try {
      setAuthError('');
      await loginWithGoogle();
      setShowAuthReminder(false);
    } catch (err) {
      setAuthError(err?.message || 'Error iniciant sessió amb Google');
      setActiveView('group');
    }
  };

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

  // Comptador real de temps actiu fent servir l'app (1 minut per minut visible)
  useEffect(() => {
    const id = setInterval(() => {
      if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
        recordActiveMinute();
      }
    }, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  // Subscripció d'autenticació Firebase i càrrega del progrés al núvol
  useEffect(() => {
    const unsubAuth = subscribeAuth(async (user) => {
      setCloudUser(user || null);
      setAuthChecked(true);
      if (!user) {
        cloudLoadedUidRef.current = null;
        return;
      }
      if (user.email) {
        try {
          localStorage.setItem('bombers_last_google_email', user.email);
        } catch {}
      }
      try {
        const cloudState = await loadPrivateProgress(user.uid);
        if (cloudState) {
          replaceProgressFromCloud(cloudState);
        }
      } catch (err) {
        setAuthError('No s\'ha pogut carregar el progrés del núvol: ' + (err?.message || ''));
      } finally {
        cloudLoadedUidRef.current = user.uid;
      }
    });
    return () => unsubAuth && unsubAuth();
  }, []);

  // Sincronització en temps real entre mòbil, tauleta i ordinador
  useEffect(() => {
    if (!cloudUser?.uid) return () => {};
    const unsubPrivate = subscribePrivateProgress(cloudUser.uid, (remoteState) => {
      replaceProgressFromCloud(remoteState);
    });
    return () => unsubPrivate && unsubPrivate();
  }, [cloudUser?.uid]);

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
    if (!cloudUser || cloudLoadedUidRef.current !== cloudUser.uid) return;
    const todayISO = new Date().toISOString().split('T')[0];
    const completedTopics = TOPICS.filter(
      (t) => progress.topicStatus?.[t.id] === 'completed'
    ).length;
    const completedPages = TOPICS.reduce((sum, t) => {
      const pMap = progress.pageStatus?.[t.id] || {};
      return sum + Object.values(pMap).filter((s) => s === 'completed').length;
    }, 0);
    const quizEntries = Object.entries(progress.quizResults || {})
      .filter(([k, v]) => k !== '__mistakes' && v && typeof v.totalQuestions === 'number' && v.totalQuestions > 0)
      .map(([, v]) => v);
    const ans = progress.answerStats || { totalAnswered: 0, totalCorrect: 0 };
    const totalCorrect = quizEntries.reduce((s, q) => s + (q.lastScore ?? q.bestScore ?? 0), 0);
    const totalAsked = quizEntries.reduce((s, q) => s + (q.totalQuestions || 0), 0);
    const averageQuiz =
      ans.totalAnswered > 0
        ? Math.round((ans.totalCorrect / ans.totalAnswered) * 100)
        : totalAsked > 0
        ? Math.round((totalCorrect / totalAsked) * 100)
        : quizEntries.length > 0
        ? Math.round(quizEntries.reduce((s, q) => s + (q.percentage || 0), 0) / quizEntries.length)
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
          streakDays: progress.streakDays ?? 0,
          pomodoroTodayMinutes: Math.min(1440, todayMinutes),
          pomodoroTotalMinutes: Math.min(1000000, pom.totalMinutes || 0),
          pomodoroTodayDate: todayISO,
          lastActiveDate: progress.lastActiveDate || todayISO,
          roundsCompleted: Object.values(progress.topicRounds || {}).filter((r) => r >= 1).length,
          firstRoundCompleted: TOPICS.every(
            (t) => (progress.topicRounds?.[t.id] || 0) >= 1 || progress.topicStatus?.[t.id] === 'completed'
          ),
          fullRoundsCompleted: TOPICS.reduce(
            (minR, t) =>
              Math.min(
                minR,
                progress.topicRounds?.[t.id] || (progress.topicStatus?.[t.id] === 'completed' ? 1 : 0)
              ),
            999
          ),
          totalCorrectAnswers: ans.totalCorrect || 0,
          totalAnswered: ans.totalAnswered || 0,
          statsResetEpoch: progress.statsResetEpoch || '',
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
        onSelectHome={() => {
          setActiveView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectDashboard={() => setActiveView('dashboard')}
        onSelectCalendar={() => {
          setActiveView('calendar');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectQuickStudy={() => {
          setActiveView('quickstudy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectAudio={() => {
          setActiveView('audio');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectPractice={() => {
          setActiveView('practice');
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
        onSelectManuals={() => {
          setManualTopicTarget(null);
          setActiveView('manuals');
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
        {/* Barra Superior (Menú 3 línies + accessos ràpids) */}
        <header className="print:hidden sticky top-0 z-20 flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Menu className="w-4 h-4" />
            <span>Menú</span>
          </button>

          <div className="flex items-center gap-2 font-extrabold text-sm">
            <Flame className="w-4 h-4 text-red-600" />
            <span>Oposicions Bombers</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() =>
                setActiveView(activeView === 'group' ? 'home' : 'group')
              }
              className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Parc de Bombers · Perfil i Grup"
            >
              <Users className="w-4 h-4 text-red-600" />
              <span className="hidden sm:inline">Parc de Bombers</span>
            </button>
            <button
              onClick={() => (cloudUser ? logoutFirebase() : handleQuickGoogleLogin())}
              className={`inline-flex items-center gap-1.5 px-2.5 py-2 rounded-xl border text-xs font-bold transition ${
                cloudUser
                  ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100'
                  : 'border-red-200 dark:border-red-800 bg-red-50/70 dark:bg-red-950/40 text-red-700 dark:text-red-300 hover:bg-red-100'
              }`}
              title={cloudUser ? 'Sortir de la sessió' : 'Iniciar sessió'}
            >
              {cloudUser ? <LogOut className="w-4 h-4" /> : <LogIn className="w-4 h-4" />}
              <span className="hidden sm:inline">{cloudUser ? 'Sortir' : 'Iniciar sessió'}</span>
            </button>
            <button
              onClick={() => setDarkMode((d) => !d)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Canviar tema clar/fosc"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Àrea de Lectura i Estudi (amplada màxima òptima per evitar fatiga visual) */}
        <main className={`flex-1 px-4 sm:px-6 lg:px-10 py-6 md:py-8 w-full mx-auto print:p-0 print:max-w-none ${activeView === 'manuals' ? 'max-w-7xl' : 'max-w-5xl'}`}>
          <AppErrorBoundary
            key={`${activeView}-${selectedTopicId}`}
            onResetHome={() => setActiveView('home')}
          >
          {activeView === 'home' ? (
            <HomeView
              topicsCount={TOPICS.length}
              dueReviewsCount={dueReviewsCount}
              cloudUser={cloudUser}
              onSignIn={handleQuickGoogleLogin}
              onOpenTopic={(id) => handleSelectTopic(id)}
              onRecordQuestionOutcome={recordQuestionOutcome}
              calendarElement={
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
                  homeOnlyGrid={true}
                  onOpenFullCalendar={() => {
                    setActiveView('calendar');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              }
              onNavigate={(view) => {
                setActiveView(view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          ) : activeView === 'dashboard' ? (
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
              onCompleteFirstRoundAll={() => completeFirstRoundAll(TOPICS.map((t) => t.id))}
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
          ) : activeView === 'practice' ? (
            <PracticeTestView
              topics={TOPICS}
              userMistakes={progress.quizResults?.__mistakes || {}}
              onClearMistake={clearUserMistake}
              onRecordQuestionOutcome={recordQuestionOutcome}
              onSaveQuizScore={saveQuizScore}
              onOpenTopicSummary={(id) => handleSelectTopic(id, null)}
              onOpenOfficialManual={(topicNum) => {
                setManualTopicTarget(topicNum);
                setActiveView('manuals');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          ) : activeView === 'calculations' ? (
            <CalculationsView
              initialMode={calcInitialMode}
              fridayHistory={progress.fridayCalcHistory || []}
              onSaveFridaySession={saveFridayCalcSession}
            />
          ) : activeView === 'keypoints' ? (
            <KeyPointsView
              onSelectTopic={(id) => handleSelectTopic(id, null)}
              userMistakes={progress.quizResults?.__mistakes || {}}
              onClearMistake={clearUserMistake}
            />
          ) : activeView === 'mnemonics' ? (
            <MnemonicsView
              topics={TOPICS}
              onSelectTopic={(id, target = null) => handleSelectTopic(id, target)}
            />
          ) : activeView === 'manuals' ? (
            <ManualsView
              initialManualTopicNumber={manualTopicTarget}
              cloudAnnotations={progress.manualAnnotations || {}}
              onUpdateCloudAnnotation={setManualAnnotation}
              onOpenTopicSummary={(topicNum) => {
                const found = TOPICS.find((t) => t.number === topicNum);
                if (found) handleSelectTopic(found.id, null);
              }}
            />
          ) : activeView === 'audio' ? (
            <AudioSummariesView
              topics={TOPICS}
              onOpenTopic={(id, target) => handleSelectTopic(id, target)}
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
              onRecordQuestionOutcome={recordQuestionOutcome}
              onOpenOfficialManual={(topicNum) => {
                setManualTopicTarget(topicNum);
                setActiveView('manuals');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}
          </AppErrorBoundary>
        </main>
      </div>

      {/* Missatge emergent per reprendre un tema o test inacabat després de > 10 min sense entrar */}
      {resumePrompt && (
        <div
          onClick={() => setResumePrompt(null)}
          className="print:hidden fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full rounded-3xl border border-indigo-200 dark:border-indigo-900 bg-white dark:bg-slate-900 p-6 shadow-2xl space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Benvingut de nou
                </span>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  Vols continuar on ho havies deixat?
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Tens pendent d&apos;acabar: <strong>{resumePrompt.label}</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                onClick={() => {
                  const target = resumePrompt;
                  setResumePrompt(null);
                  if (target.view === 'topic' && target.topicId) {
                    handleSelectTopic(target.topicId, null);
                  } else {
                    setActiveView(target.view);
                  }
                }}
                className="flex-1 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 text-xs font-extrabold shadow-sm"
              >
                Continuar on estava →
              </button>
              <button
                type="button"
                onClick={() => setResumePrompt(null)}
                className="rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Quedar-me a l&apos;inici
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Missatge emergent si porta una estona navegant sense haver iniciat sessió */}
      {showAuthReminder && !cloudUser && (
        <div
          onClick={dismissAuthReminder}
          className="print:hidden fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                No has iniciat sessió
              </h3>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Ara mateix <strong>no s&apos;està guardant el teu avanç al núvol</strong> i <strong>no rebràs les notificacions de la regla de l&apos;oblit</strong> sobre què et toca estudiar cada dia.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                onClick={handleQuickGoogleLogin}
                className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 text-xs font-extrabold shadow-sm"
              >
                Iniciar Sessió amb Google
              </button>
              <button
                type="button"
                onClick={dismissAuthReminder}
                className="rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Continuar sense sessió
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Botó flotant de recàrrega quan hi ha una nova versió de l'app */}
      {updateAvailable && (
        <div className="print:hidden fixed bottom-5 left-5 z-50 flex items-center gap-3 rounded-2xl border border-red-300 dark:border-red-800 bg-white dark:bg-slate-900 px-4 py-3 shadow-2xl">
          <span className="text-xs font-extrabold text-slate-900 dark:text-white">
            Nova actualització disponible
          </span>
          <button
            onClick={handleApplyUpdate}
            className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 text-xs font-extrabold shadow-sm"
          >
            Recarregar
          </button>
        </div>
      )}

      {/* Targetes informatives quan hi ha canvis importants d'estructura o contingut */}
      {importantRelease && (
        <div
          onClick={dismissImportantRelease}
          className="print:hidden fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 backdrop-blur-xs p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-xl w-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl space-y-4 max-h-[88vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 dark:text-red-400">
                  Versió {importantRelease.version}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  {importantRelease.title || 'Novetats importants a l’aplicació'}
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {importantRelease.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-4 space-y-1"
                >
                  {card.tag && (
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300">
                      {card.tag}
                    </span>
                  )}
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-end gap-2 pt-1">
              {updateAvailable && (
                <button
                  onClick={() => {
                    dismissImportantRelease();
                    handleApplyUpdate();
                  }}
                  className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 text-xs font-extrabold shadow-sm"
                >
                  Recarregar i actualitzar ara
                </button>
              )}
              <button
                onClick={dismissImportantRelease}
                className="rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2.5 text-xs font-extrabold"
              >
                Entès, continuar
              </button>
            </div>
          </div>
        </div>
      )}

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
