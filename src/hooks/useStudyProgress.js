import { useState, useEffect } from 'react';

const STORAGE_KEY = 'bombers_edtech_progress_v2';

// Intervals de la Corba de l'Oblit (Ebbinghaus) en dies
export const EBBINGHAUS_INTERVALS = [1, 3, 7, 14, 30, 60];

const getTodayISO = () => new Date().toISOString().split('T')[0];

const addDaysISO = (isoDate, days) => {
  const d = new Date(isoDate + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
};

const getInitialHistorySeed = () => {
  const days = [];
  const samplePages = [2, 3, 2, 3, 2, 3, 1];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const iso = d.toISOString().split('T')[0];
    days.push({
      date: iso,
      pagesStudied: samplePages[6 - i],
      quizzesCompleted: i % 2 === 0 ? 1 : 0
    });
  }
  return days;
};

const defaultState = {
  pageStatus: {
    'tema-1-foc': { 1: 'completed' }
  },
  topicStatus: {
    'tema-1-foc': 'in_progress'
  },
  quizResults: {},
  spacedRepetition: {},
  studySessions: [],
  pomodoroStats: {
    totalMinutes: 0,
    sessionsCompleted: 0,
    minutesByDay: {}
  },
  dailyActivity: getInitialHistorySeed(),
  streakDays: 5,
  lastActiveDate: getTodayISO()
};

export function useStudyProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error llegint localStorage:', e);
    }
    return defaultState;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Error desant a localStorage:', e);
    }
  }, [progress]);

  // Marca una pàgina com a 'completed', 'review' o 'pending'
  const setPageMark = (topicId, pageNumber, status) => {
    const today = getTodayISO();

    setProgress((prev) => {
      const currentTopicPages = prev.pageStatus[topicId] || {};
      const previousStatus = currentTopicPages[pageNumber];
      const nextStatus = previousStatus === status ? 'pending' : status;

      const existingHistory = [...(prev.dailyActivity || [])];
      const todayIndex = existingHistory.findIndex((d) => d.date === today);
      const delta = nextStatus === 'completed' ? 1 : previousStatus === 'completed' ? -1 : 0;

      if (todayIndex >= 0) {
        existingHistory[todayIndex] = {
          ...existingHistory[todayIndex],
          pagesStudied: Math.max(0, existingHistory[todayIndex].pagesStudied + delta)
        };
      } else if (delta > 0) {
        existingHistory.push({ date: today, pagesStudied: 1, quizzesCompleted: 0 });
      }

      const prevSpaced = (prev.spacedRepetition || {})[topicId];
      const nextSpaced =
        nextStatus === 'completed'
          ? prevSpaced || {
              lastStudiedAt: today,
              reviewStage: 0,
              nextReviewAt: addDaysISO(today, EBBINGHAUS_INTERVALS[0]),
              reviewsCount: 1
            }
          : prevSpaced;

      return {
        ...prev,
        pageStatus: {
          ...prev.pageStatus,
          [topicId]: {
            ...currentTopicPages,
            [pageNumber]: nextStatus
          }
        },
        spacedRepetition: nextSpaced
          ? { ...(prev.spacedRepetition || {}), [topicId]: nextSpaced }
          : prev.spacedRepetition || {},
        dailyActivity: existingHistory.slice(-14),
        lastActiveDate: today
      };
    });
  };

  // Marca el tema sencer com a 'completed' o 'review'
  const setTopicMark = (topicId, status, totalPages = 3) => {
    setProgress((prev) => {
      const current = prev.topicStatus[topicId];
      const nextStatus = current === status ? 'in_progress' : status;

      const updatedTopicPages = { ...(prev.pageStatus[topicId] || {}) };
      if (nextStatus === 'completed') {
        for (let i = 1; i <= totalPages; i++) {
          updatedTopicPages[i] = 'completed';
        }
      }

      return {
        ...prev,
        topicStatus: {
          ...prev.topicStatus,
          [topicId]: nextStatus
        },
        pageStatus: {
          ...prev.pageStatus,
          [topicId]: updatedTopicPages
        }
      };
    });
  };

  // Desa el resultat d'un test d'autoavaluació
  const saveQuizScore = (topicId, score, totalQuestions) => {
    const today = getTodayISO();
    const percentage = Math.round((score / totalQuestions) * 100);

    setProgress((prev) => {
      const prevQuiz = prev.quizResults[topicId] || { attempts: 0, bestScore: 0 };
      const existingHistory = [...(prev.dailyActivity || [])];
      const todayIndex = existingHistory.findIndex((d) => d.date === today);

      if (todayIndex >= 0) {
        existingHistory[todayIndex] = {
          ...existingHistory[todayIndex],
          quizzesCompleted: (existingHistory[todayIndex].quizzesCompleted || 0) + 1
        };
      } else {
        existingHistory.push({ date: today, pagesStudied: 1, quizzesCompleted: 1 });
      }

      const prevSpaced = (prev.spacedRepetition || {})[topicId];
      const currentStage = prevSpaced ? prevSpaced.reviewStage || 0 : 0;
      const nextStage =
        percentage >= 60 ? Math.min(EBBINGHAUS_INTERVALS.length - 1, currentStage + 1) : 0;
      const intervalDays = EBBINGHAUS_INTERVALS[nextStage];

      return {
        ...prev,
        quizResults: {
          ...prev.quizResults,
          [topicId]: {
            attempts: prevQuiz.attempts + 1,
            lastScore: score,
            bestScore: Math.max(prevQuiz.bestScore || 0, score),
            totalQuestions,
            percentage,
            updatedAt: today
          }
        },
        spacedRepetition: {
          ...(prev.spacedRepetition || {}),
          [topicId]: {
            lastStudiedAt: today,
            reviewStage: nextStage,
            nextReviewAt: addDaysISO(today, intervalDays),
            reviewsCount: ((prevSpaced && prevSpaced.reviewsCount) || 0) + 1
          }
        },
        dailyActivity: existingHistory.slice(-14),
        lastActiveDate: today
      };
    });
  };

  // Registra un repàs fet avui segons la Corba de l'Oblit d'Ebbinghaus
  const markTopicReviewed = (topicId) => {
    const today = getTodayISO();
    setProgress((prev) => {
      const prevSpaced = (prev.spacedRepetition || {})[topicId];
      const nextStage = prevSpaced
        ? Math.min(EBBINGHAUS_INTERVALS.length - 1, (prevSpaced.reviewStage || 0) + 1)
        : 0;
      const intervalDays = EBBINGHAUS_INTERVALS[nextStage];

      return {
        ...prev,
        spacedRepetition: {
          ...(prev.spacedRepetition || {}),
          [topicId]: {
            lastStudiedAt: today,
            reviewStage: nextStage,
            nextReviewAt: addDaysISO(today, intervalDays),
            reviewsCount: ((prevSpaced && prevSpaced.reviewsCount) || 0) + 1
          }
        },
        lastActiveDate: today
      };
    });
  };

  // Registra una sessió de Pomodoro (minuts d'estudi diari + tema)
  const logPomodoroSession = (topicId, topicTitle, minutes) => {
    const today = getTodayISO();
    const safeMinutes = Math.max(1, Math.round(minutes));

    setProgress((prev) => {
      const prevPom = prev.pomodoroStats || {
        totalMinutes: 0,
        sessionsCompleted: 0,
        minutesByDay: {}
      };
      const prevMinutesToday = (prevPom.minutesByDay && prevPom.minutesByDay[today]) || 0;
      const newSession = {
        id: `${Date.now()}`,
        date: today,
        time: new Date().toLocaleTimeString('ca-ES', { hour: '2-digit', minute: '2-digit' }),
        topicId: topicId || 'general',
        topicTitle: topicTitle || 'Estudi general / Càlculs',
        minutes: safeMinutes
      };

      const prevSpaced = topicId ? (prev.spacedRepetition || {})[topicId] : null;
      const updatedSpaced = topicId
        ? {
            ...(prev.spacedRepetition || {}),
            [topicId]: prevSpaced || {
              lastStudiedAt: today,
              reviewStage: 0,
              nextReviewAt: addDaysISO(today, EBBINGHAUS_INTERVALS[0]),
              reviewsCount: 1
            }
          }
        : prev.spacedRepetition || {};

      return {
        ...prev,
        pomodoroStats: {
          totalMinutes: (prevPom.totalMinutes || 0) + safeMinutes,
          sessionsCompleted: (prevPom.sessionsCompleted || 0) + 1,
          minutesByDay: {
            ...(prevPom.minutesByDay || {}),
            [today]: prevMinutesToday + safeMinutes
          }
        },
        studySessions: [newSession, ...(prev.studySessions || [])].slice(0, 40),
        spacedRepetition: updatedSpaced,
        lastActiveDate: today
      };
    });
  };

  const resetAllProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress({
      pageStatus: {},
      topicStatus: {},
      quizResults: {},
      spacedRepetition: {},
      studySessions: [],
      pomodoroStats: { totalMinutes: 0, sessionsCompleted: 0, minutesByDay: {} },
      dailyActivity: getInitialHistorySeed().map((d) => ({ ...d, pagesStudied: 0, quizzesCompleted: 0 })),
      streakDays: 1,
      lastActiveDate: getTodayISO()
    });
  };

  const replaceProgressFromCloud = (cloudState) => {
    if (!cloudState || typeof cloudState !== 'object') return;
    setProgress((prev) => ({
      ...prev,
      ...cloudState
    }));
  };

  return {
    progress,
    setPageMark,
    setTopicMark,
    saveQuizScore,
    markTopicReviewed,
    logPomodoroSession,
    replaceProgressFromCloud,
    resetAllProgress
  };
}
