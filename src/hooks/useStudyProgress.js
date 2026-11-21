import { useState, useEffect } from 'react';

const STORAGE_KEY = 'bombers_edtech_progress_v2';
export const STATS_RESET_EPOCH = '2026-11-21-v1';

// Intervals de la Corba de l'Oblit (Ebbinghaus) en dies
export const EBBINGHAUS_INTERVALS = [1, 3, 7, 14, 30, 60];

const getTodayISO = () => new Date().toISOString().split('T')[0];

const addDaysISO = (isoDate, days) => {
  const d = new Date(isoDate + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
};

const computeNextStreak = (prevStreak, prevLastActiveDate, today) => {
  if (!prevLastActiveDate || !(prevStreak > 0)) return 1;
  if (prevLastActiveDate === today) return prevStreak;
  const yesterday = addDaysISO(today, -1);
  if (prevLastActiveDate === yesterday) return prevStreak + 1;
  return 1;
};

const defaultState = {
  pageStatus: {},
  difficultPages: {},
  readingSpeedFactor: 1.0,
  topicStatus: {},
  quizResults: {},
  answerStats: { totalAnswered: 0, totalCorrect: 0 },
  spacedRepetition: {},
  topicRounds: {},
  studyPlan: {},
  fridayCalcHistory: [],
  dailyEmailEnabled: true,
  manualAnnotations: {},
  studySessions: [],
  pomodoroStats: {
    totalMinutes: 0,
    sessionsCompleted: 0,
    minutesByDay: {}
  },
  dailyActivity: [],
  streakDays: 0,
  lastActiveDate: '',
  statsResetEpoch: STATS_RESET_EPOCH
};

function applyStatsResetIfNeeded(state) {
  if (!state || typeof state !== 'object') return defaultState;
  if (state.statsResetEpoch === STATS_RESET_EPOCH) {
    return {
      ...defaultState,
      ...state,
      answerStats: state.answerStats || { totalAnswered: 0, totalCorrect: 0 },
      pomodoroStats: state.pomodoroStats || { totalMinutes: 0, sessionsCompleted: 0, minutesByDay: {} }
    };
  }
  // Reseteja ratxes, temps, activitat diària i percentatge d'encerts a 0 a partir d'avui (2026-11-21)
  // per eliminar les dades falses anteriors de tothom en tots els dispositius.
  return {
    ...defaultState,
    ...state,
    quizResults: {},
    answerStats: { totalAnswered: 0, totalCorrect: 0 },
    studySessions: [],
    pomodoroStats: { totalMinutes: 0, sessionsCompleted: 0, minutesByDay: {} },
    dailyActivity: [],
    streakDays: 0,
    lastActiveDate: '',
    statsResetEpoch: STATS_RESET_EPOCH
  };
}

export function useStudyProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return applyStatsResetIfNeeded(JSON.parse(saved));
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
        streakDays: computeNextStreak(prev.streakDays, prev.lastActiveDate, today),
        lastActiveDate: today
      };
    });
  };

  // Marca el tema sencer com a 'completed' o 'review'
  const setTopicMark = (topicId, status, totalPages = 3) => {
    const today = getTodayISO();
    setProgress((prev) => {
      const current = prev.topicStatus[topicId];
      const nextStatus = current === status ? 'in_progress' : status;

      const updatedTopicPages = { ...(prev.pageStatus[topicId] || {}) };
      if (nextStatus === 'completed') {
        for (let i = 1; i <= totalPages; i++) {
          updatedTopicPages[i] = 'completed';
        }
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
        topicStatus: {
          ...prev.topicStatus,
          [topicId]: nextStatus
        },
        pageStatus: {
          ...prev.pageStatus,
          [topicId]: updatedTopicPages
        },
        spacedRepetition: nextSpaced
          ? { ...(prev.spacedRepetition || {}), [topicId]: nextSpaced }
          : prev.spacedRepetition || {},
        streakDays: computeNextStreak(prev.streakDays, prev.lastActiveDate, today),
        lastActiveDate: today
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
        streakDays: computeNextStreak(prev.streakDays, prev.lastActiveDate, today),
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
        streakDays: computeNextStreak(prev.streakDays, prev.lastActiveDate, today),
        lastActiveDate: today
      };
    });
  };

  // Registra 1 minut real d'ús actiu de l'app (estudiant, fent tests, llegint manuals...)
  const recordActiveMinute = () => {
    const today = getTodayISO();
    setProgress((prev) => {
      const prevPom = prev.pomodoroStats || {
        totalMinutes: 0,
        sessionsCompleted: 0,
        minutesByDay: {}
      };
      const prevMinutesToday = (prevPom.minutesByDay && prevPom.minutesByDay[today]) || 0;
      return {
        ...prev,
        pomodoroStats: {
          ...prevPom,
          totalMinutes: (prevPom.totalMinutes || 0) + 1,
          minutesByDay: {
            ...(prevPom.minutesByDay || {}),
            [today]: prevMinutesToday + 1
          }
        },
        streakDays: computeNextStreak(prev.streakDays, prev.lastActiveDate, today),
        lastActiveDate: today
      };
    });
  };

  const resetAllProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress({
      ...defaultState,
      statsResetEpoch: STATS_RESET_EPOCH
    });
  };

  const replaceProgressFromCloud = (cloudState) => {
    if (!cloudState || typeof cloudState !== 'object') return;
    setProgress(applyStatsResetIfNeeded(cloudState));
  };

  // Completa una volta d'estudi d'un tema (1a volta -> 2a volta -> 3a...)
  const completeTopicRound = (topicId) => {
    const today = getTodayISO();
    setProgress((prev) => {
      const currentRounds = (prev.topicRounds && prev.topicRounds[topicId]) || 0;
      const nextRounds = currentRounds + 1;
      const prevSpaced = (prev.spacedRepetition || {})[topicId];
      const nextStage = prevSpaced
        ? Math.min(EBBINGHAUS_INTERVALS.length - 1, (prevSpaced.reviewStage || 0) + 1)
        : 0;
      return {
        ...prev,
        topicRounds: {
          ...(prev.topicRounds || {}),
          [topicId]: nextRounds
        },
        topicStatus: {
          ...(prev.topicStatus || {}),
          [topicId]: 'completed'
        },
        spacedRepetition: {
          ...(prev.spacedRepetition || {}),
          [topicId]: {
            lastStudiedAt: today,
            reviewStage: nextStage,
            nextReviewAt: addDaysISO(today, EBBINGHAUS_INTERVALS[nextStage]),
            reviewsCount: ((prevSpaced && prevSpaced.reviewsCount) || 0) + 1
          }
        },
        lastActiveDate: today
      };
    });
  };

  // Marca tots els temes com a 1a volta completada de cop (per a qui ja l'ha feta prèviament)
  const completeFirstRoundAll = (topicIds = []) => {
    const today = getTodayISO();
    setProgress((prev) => {
      const nextRounds = { ...(prev.topicRounds || {}) };
      const nextStatus = { ...(prev.topicStatus || {}) };
      topicIds.forEach((id) => {
        if ((nextRounds[id] || 0) < 1) {
          nextRounds[id] = 1;
        }
        if (!nextStatus[id]) {
          nextStatus[id] = 'completed';
        }
      });
      return {
        ...prev,
        topicRounds: nextRounds,
        topicStatus: nextStatus,
        lastActiveDate: today
      };
    });
  };

  const scheduleTopicForDate = (isoDate, topicId) => {
    if (!isoDate || !topicId) return;
    setProgress((prev) => {
      const plan = { ...(prev.studyPlan || {}) };
      const existing = plan[isoDate] || [];
      if (existing.includes(topicId)) return prev;
      plan[isoDate] = [...existing, topicId];
      return { ...prev, studyPlan: plan };
    });
  };

  const unscheduleTopicForDate = (isoDate, topicId) => {
    setProgress((prev) => {
      const plan = { ...(prev.studyPlan || {}) };
      const existing = (plan[isoDate] || []).filter((id) => id !== topicId);
      if (existing.length === 0) delete plan[isoDate];
      else plan[isoDate] = existing;
      return { ...prev, studyPlan: plan };
    });
  };

  const saveFridayCalcSession = (score, total) => {
    const today = getTodayISO();
    setProgress((prev) => ({
      ...prev,
      fridayCalcHistory: [
        { date: today, score, total, percentage: Math.round((score / Math.max(1, total)) * 100) },
        ...(prev.fridayCalcHistory || [])
      ].slice(0, 50),
      lastActiveDate: today
    }));
  };

  const setDailyEmailEnabled = (enabled) => {
    setProgress((prev) => ({ ...prev, dailyEmailEnabled: Boolean(enabled) }));
  };

  // Marca o desmarca un apartat/pàgina com a "Complicat" per prioritzar-lo en repassos i tests
  const toggleDifficultPage = (topicId, pageNumber) => {
    setProgress((prev) => {
      const currentTopicDiff = (prev.difficultPages && prev.difficultPages[topicId]) || {};
      const nextVal = !currentTopicDiff[pageNumber];
      const updatedTopicDiff = { ...currentTopicDiff };
      if (nextVal) updatedTopicDiff[pageNumber] = true;
      else delete updatedTopicDiff[pageNumber];

      return {
        ...prev,
        difficultPages: {
          ...(prev.difficultPages || {}),
          [topicId]: updatedTopicDiff
        }
      };
    });
  };

  // Entrena el factor de velocitat de lectura per a les sessions de 5-45 min
  const trainReadingPace = (feedback) => {
    setProgress((prev) => {
      const current = prev.readingSpeedFactor || 1.0;
      let next = current;
      if (feedback === 'too_much') next = Math.max(0.45, Number((current * 0.85).toFixed(2)));
      else if (feedback === 'too_little') next = Math.min(2.2, Number((current * 1.15).toFixed(2)));
      return {
        ...prev,
        readingSpeedFactor: next
      };
    });
  };

  // Registra si l'usuari falla o encerta una pregunta concreta (desat al seu compte privat)
  // i connecta els errors amb la corba de l'oblit perquè el tema torni a repàs aviat.
  const recordQuestionOutcome = (topicId, topicNumber, questionObj, isCorrect) => {
    if (!questionObj || !questionObj.id) return;
    setProgress((prev) => {
      const prevQuiz = prev.quizResults || {};
      const prevMistakes = prevQuiz.__mistakes || {};
      const nextMistakes = { ...prevMistakes };
      let nextSpaced = prev.spacedRepetition || {};

      if (!isCorrect) {
        const existing = nextMistakes[questionObj.id];
        const newCount = (existing?.count || 0) + 1;
        const today = getTodayISO();
        nextMistakes[questionObj.id] = {
          id: questionObj.id,
          topicId,
          topicNumber,
          pageNumber: questionObj.pageNumber || existing?.pageNumber || null,
          sectionTitle: questionObj.sectionTitle || existing?.sectionTitle || '',
          question: questionObj.question,
          correctAnswer:
            (questionObj.options && questionObj.options[questionObj.correctIndex]) || '',
          explanation: questionObj.explanation || '',
          count: newCount,
          reviewStage: 0,
          streak: 0,
          lastFailedAt: today,
          lastReviewedAt: today,
          nextReviewAt: addDaysISO(today, EBBINGHAUS_INTERVALS[0])
        };

        // Entrelliga l'error amb la regla de l'oblit: si el tema no té repàs imminent, el programa per avui/demà
        if (topicId) {
          const targetDate = newCount >= 2 ? today : addDaysISO(today, 1);
          const prevSp = nextSpaced[topicId];
          if (!prevSp?.nextReviewAt || prevSp.nextReviewAt > targetDate) {
            nextSpaced = {
              ...nextSpaced,
              [topicId]: {
                ...(prevSp || { reviewStage: 0 }),
                lastReviewedAt: prevSp?.lastReviewedAt || today,
                nextReviewAt: targetDate
              }
            };
          }
        }
      } else if (nextMistakes[questionObj.id]) {
        // Regla de l'oblit aplicada a preguntes fallades:
        // Cada encert puja una etapa (1d -> 3d -> 7d -> 14d). A la 4a consolidació es considera assimilada!
        const existing = nextMistakes[questionObj.id];
        const nextStage = (existing.reviewStage ?? 0) + 1;
        if (nextStage >= 4) {
          delete nextMistakes[questionObj.id];
        } else {
          const today = getTodayISO();
          const intervalDays =
            EBBINGHAUS_INTERVALS[Math.min(nextStage, EBBINGHAUS_INTERVALS.length - 1)];
          nextMistakes[questionObj.id] = {
            ...existing,
            reviewStage: nextStage,
            streak: (existing.streak || 0) + 1,
            lastReviewedAt: today,
            nextReviewAt: addDaysISO(today, intervalDays)
          };
        }
      }

      const prevAns = prev.answerStats || { totalAnswered: 0, totalCorrect: 0 };
      const today = getTodayISO();

      return {
        ...prev,
        spacedRepetition: nextSpaced,
        answerStats: {
          totalAnswered: (prevAns.totalAnswered || 0) + 1,
          totalCorrect: (prevAns.totalCorrect || 0) + (isCorrect ? 1 : 0)
        },
        streakDays: computeNextStreak(prev.streakDays, prev.lastActiveDate, today),
        lastActiveDate: today,
        quizResults: {
          ...prevQuiz,
          __mistakes: nextMistakes
        }
      };
    });
  };

  const clearUserMistake = (questionId) => {
    setProgress((prev) => {
      const prevQuiz = prev.quizResults || {};
      const nextMistakes = { ...(prevQuiz.__mistakes || {}) };
      delete nextMistakes[questionId];
      return {
        ...prev,
        quizResults: {
          ...prevQuiz,
          __mistakes: nextMistakes
        }
      };
    });
  };

  // Desa anotacions i subratllats dels Manuals PDF (sincronitzat amb Firebase)
  const setManualAnnotation = (manualId, nextData) => {
    setProgress((prev) => ({
      ...prev,
      manualAnnotations: {
        ...(prev.manualAnnotations || {}),
        [manualId]: nextData
      }
    }));
  };

  return {
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
  };
}
