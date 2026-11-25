import { useState, useEffect } from 'react';

const STORAGE_KEY = 'bombers_edtech_progress_v2';
export const STATS_RESET_EPOCH = '2026-11-21-v1';

// Intervals de la Corba de l'Oblit (Ebbinghaus) en dies
export const EBBINGHAUS_INTERVALS = [1, 3, 7, 14, 30, 60];
export const MAX_REVIEWS_PER_DAY = 4;

const getTodayISO = () => new Date().toISOString().split('T')[0];

const addDaysISO = (isoDate, days) => {
  const d = new Date(isoDate + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
};

// Troba el primer dia >= targetDateISO que tingui menys de MAX_REVIEWS_PER_DAY temes programats
function findNextAvailableReviewDate(spacedMap, targetDateISO, excludeTopicId = null) {
  let candidate = targetDateISO;
  for (let guard = 0; guard < 365; guard++) {
    let count = 0;
    Object.entries(spacedMap || {}).forEach(([tid, entry]) => {
      if (tid !== excludeTopicId && entry?.nextReviewAt === candidate) {
        count += 1;
      }
    });
    if (count < MAX_REVIEWS_PER_DAY) return candidate;
    candidate = addDaysISO(candidate, 1);
  }
  return candidate;
}

// Garanteix que cap dia superi MAX_REVIEWS_PER_DAY temes (desplaça l'excés als dies següents)
function rebalanceSpacedMap(spacedMap, todayISO) {
  if (!spacedMap || typeof spacedMap !== 'object') return {};
  const entries = Object.entries(spacedMap).filter(([, v]) => v && v.nextReviewAt);
  entries.sort((a, b) => {
    const da = a[1].nextReviewAt || '';
    const db = b[1].nextReviewAt || '';
    if (da !== db) return da.localeCompare(db);
    return (a[1].reviewStage || 0) - (b[1].reviewStage || 0);
  });
  const countsByDate = {};
  const result = {};
  entries.forEach(([tid, entry]) => {
    let target = entry.nextReviewAt;
    while ((countsByDate[target] || 0) >= MAX_REVIEWS_PER_DAY) {
      const base = target < todayISO ? todayISO : target;
      target = addDaysISO(base, 1);
    }
    countsByDate[target] = (countsByDate[target] || 0) + 1;
    result[tid] = target === entry.nextReviewAt ? entry : { ...entry, nextReviewAt: target };
  });
  return result;
}

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
  reviewHistory: {},
  topicRounds: {},
  studyPlan: {},
  fridayCalcHistory: [],
  dailyReviewHistory: {},
  dailyNewsHistory: {},
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
  dailyReadResetDate: '',
  resumeState: null,
  statsResetEpoch: STATS_RESET_EPOCH
};

function applyDailyReadResetIfNeeded(state) {
  if (!state || typeof state !== 'object') return state;
  const today = getTodayISO();
  const rebalancedSpaced = rebalanceSpacedMap(state.spacedRepetition || {}, today);
  if (state.dailyReadResetDate === today) {
    return {
      ...state,
      spacedRepetition: rebalancedSpaced
    };
  }
  // Cada nou dia es reinicia el color verd dels temes i pàgines llegides (implica que avui encara no s'han llegit)
  const nextTopicStatus = {};
  Object.entries(state.topicStatus || {}).forEach(([tid, st]) => {
    if (st && st !== 'completed') {
      nextTopicStatus[tid] = st;
    }
  });
  const nextPageStatus = {};
  Object.entries(state.pageStatus || {}).forEach(([tid, pMap]) => {
    const cleaned = {};
    Object.entries(pMap || {}).forEach(([pNum, pSt]) => {
      if (pSt && pSt !== 'completed') {
        cleaned[pNum] = pSt;
      }
    });
    if (Object.keys(cleaned).length > 0) {
      nextPageStatus[tid] = cleaned;
    }
  });
  return {
    ...state,
    topicStatus: nextTopicStatus,
    pageStatus: nextPageStatus,
    spacedRepetition: rebalancedSpaced,
    dailyReadResetDate: today
  };
}

function applyStatsResetIfNeeded(state) {
  if (!state || typeof state !== 'object') return applyDailyReadResetIfNeeded(defaultState);
  if (state.statsResetEpoch === STATS_RESET_EPOCH) {
    return applyDailyReadResetIfNeeded({
      ...defaultState,
      ...state,
      answerStats: state.answerStats || { totalAnswered: 0, totalCorrect: 0 },
      pomodoroStats: state.pomodoroStats || { totalMinutes: 0, sessionsCompleted: 0, minutesByDay: {} }
    });
  }
  // Reseteja ratxes, temps, activitat diària i percentatge d'encerts a 0 a partir d'avui (2026-11-21)
  // per eliminar les dades falses anteriors de tothom en tots els dispositius.
  return applyDailyReadResetIfNeeded({
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
  });
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

  useEffect(() => {
    const id = setInterval(() => {
      const today = getTodayISO();
      setProgress((prev) =>
        prev.dailyReadResetDate && prev.dailyReadResetDate !== today
          ? applyDailyReadResetIfNeeded(prev)
          : prev
      );
    }, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  // Marca una pàgina com a 'completed', 'review' o 'pending'
  // (només marca el progrés de lectura d'avui; NO entra a la Corba de l'Oblit fins que l'usuari ho validi explícitament)
  const setPageMark = (topicId, pageNumber, status, totalPages = 0) => {
    const today = getTodayISO();

    setProgress((prev) => {
      const currentTopicPages = prev.pageStatus[topicId] || {};
      const previousStatus = currentTopicPages[pageNumber];
      const nextStatus = previousStatus === status ? 'pending' : status;

      const nextTopicPages = {
        ...currentTopicPages,
        [pageNumber]: nextStatus
      };

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

      let nextTopicStatus = prev.topicStatus || {};
      if (totalPages > 0) {
        let allRead = true;
        for (let i = 1; i <= totalPages; i++) {
          if (nextTopicPages[i] !== 'completed') {
            allRead = false;
            break;
          }
        }
        if (allRead) {
          nextTopicStatus = { ...nextTopicStatus, [topicId]: 'completed' };
        } else if (nextTopicStatus[topicId] === 'completed') {
          nextTopicStatus = { ...nextTopicStatus, [topicId]: 'in_progress' };
        }
      }

      return {
        ...prev,
        topicStatus: nextTopicStatus,
        pageStatus: {
          ...prev.pageStatus,
          [topicId]: nextTopicPages
        },
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
        dailyActivity: existingHistory.slice(-14),
        streakDays: computeNextStreak(prev.streakDays, prev.lastActiveDate, today),
        lastActiveDate: today
      };
    });
  };

  // ÚNICA entrada a la Corba de l'Oblit d'Ebbinghaus: validació explícita de l'usuari.
  // Limita a MAX_REVIEWS_PER_DAY (4) temes per dia i desplaça l'excés al dia següent disponible.
  const markTopicReviewed = (topicId) => {
    const today = getTodayISO();
    const prevSpaced = (progress.spacedRepetition || {})[topicId];
    const nextStage = prevSpaced
      ? Math.min(EBBINGHAUS_INTERVALS.length - 1, (prevSpaced.reviewStage || 0) + 1)
      : 0;
    const intervalDays = EBBINGHAUS_INTERVALS[nextStage];
    const rawNextDate = addDaysISO(today, intervalDays);
    const nextDate = findNextAvailableReviewDate(progress.spacedRepetition || {}, rawNextDate, topicId);

    setProgress((prev) => {
      const curSpaced = (prev.spacedRepetition || {})[topicId];
      const curNextStage = curSpaced
        ? Math.min(EBBINGHAUS_INTERVALS.length - 1, (curSpaced.reviewStage || 0) + 1)
        : 0;
      const curInterval = EBBINGHAUS_INTERVALS[curNextStage];
      const curRawNextDate = addDaysISO(today, curInterval);
      const curNextDate = findNextAvailableReviewDate(prev.spacedRepetition || {}, curRawNextDate, topicId);

      // Neteja planificacions manuals d'avui o endarrerides per aquest tema
      const nextPlan = { ...(prev.studyPlan || {}) };
      Object.keys(nextPlan).forEach((d) => {
        if (d <= today && Array.isArray(nextPlan[d])) {
          const filtered = nextPlan[d].filter((id) => id !== topicId);
          if (filtered.length === 0) delete nextPlan[d];
          else nextPlan[d] = filtered;
        }
      });

      // Registra al calendari (en verd amb tic) que aquest tema s'ha repassat/validat avui
      const prevHist = prev.reviewHistory || {};
      const todayHist = (prevHist[today] || []).filter((item) => item.topicId !== topicId);
      const nextHist = {
        ...prevHist,
        [today]: [
          ...todayHist,
          { topicId, stage: curNextStage, nextReviewAt: curNextDate }
        ]
      };

      return {
        ...prev,
        topicStatus: {
          ...(prev.topicStatus || {}),
          [topicId]: 'completed'
        },
        studyPlan: nextPlan,
        reviewHistory: nextHist,
        spacedRepetition: {
          ...(prev.spacedRepetition || {}),
          [topicId]: {
            lastStudiedAt: today,
            reviewStage: curNextStage,
            nextReviewAt: curNextDate,
            reviewsCount: ((curSpaced && curSpaced.reviewsCount) || 0) + 1
          }
        },
        streakDays: computeNextStreak(prev.streakDays, prev.lastActiveDate, today),
        lastActiveDate: today
      };
    });

    return { topicId, nextReviewAt: nextDate, intervalDays, nextStage };
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
    const normalizedCloud = applyStatsResetIfNeeded(cloudState);
    setProgress((localPrev) => {
      // Si el núvol és d'una època anterior al reset, respecta el reset
      if (localPrev.statsResetEpoch !== normalizedCloud.statsResetEpoch) {
        return normalizedCloud;
      }

      // Fusiona spacedRepetition conservant qualsevol repàs local més recent que el del núvol
      const mergedSpaced = { ...(normalizedCloud.spacedRepetition || {}) };
      Object.entries(localPrev.spacedRepetition || {}).forEach(([tid, localSp]) => {
        const cloudSp = mergedSpaced[tid];
        if (!cloudSp) {
          mergedSpaced[tid] = localSp;
          return;
        }
        const localDate = localSp?.lastStudiedAt || '';
        const cloudDate = cloudSp?.lastStudiedAt || '';
        const localCount = localSp?.reviewsCount || 0;
        const cloudCount = cloudSp?.reviewsCount || 0;
        if (localDate > cloudDate || (localDate === cloudDate && localCount > cloudCount)) {
          mergedSpaced[tid] = localSp;
        }
      });

      // Fusiona reviewHistory conservant entrades locals del mateix dia que encara no hagin pujat
      const mergedHist = { ...(normalizedCloud.reviewHistory || {}) };
      Object.entries(localPrev.reviewHistory || {}).forEach(([dateKey, localList]) => {
        if (!Array.isArray(localList)) return;
        const cloudList = Array.isArray(mergedHist[dateKey]) ? mergedHist[dateKey] : [];
        const byTopic = new Map(cloudList.map((item) => [item.topicId, item]));
        localList.forEach((item) => {
          const existing = byTopic.get(item.topicId);
          if (!existing || (item.stage ?? 0) > (existing.stage ?? 0)) {
            byTopic.set(item.topicId, item);
          }
        });
        mergedHist[dateKey] = Array.from(byTopic.values());
      });

      return {
        ...normalizedCloud,
        spacedRepetition: mergedSpaced,
        reviewHistory: mergedHist
      };
    });
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
      const nextDate = findNextAvailableReviewDate(
        prev.spacedRepetition || {},
        addDaysISO(today, EBBINGHAUS_INTERVALS[nextStage]),
        topicId
      );
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
            nextReviewAt: nextDate,
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

  const setResumeState = (nextResumeState) => {
    setProgress((prev) => ({
      ...prev,
      resumeState: nextResumeState || null
    }));
  };

  const saveDailyReviewHistory = (dateISO, entry) => {
    if (!dateISO || !entry) return;
    setProgress((prev) => {
      const prevEntry = prev.dailyReviewHistory?.[dateISO] || {};
      const mergedAnswers = {
        ...(prevEntry.answers || {}),
        ...(entry.answers || {})
      };
      const answeredCount = Math.max(
        entry.answered || 0,
        prevEntry.answered || 0,
        Object.keys(mergedAnswers).length
      );
      return {
        ...prev,
        dailyReviewHistory: {
          ...(prev.dailyReviewHistory || {}),
          [dateISO]: {
            ...prevEntry,
            ...entry,
            answered: answeredCount,
            completed: Boolean(entry.completed || prevEntry.completed),
            answers: mergedAnswers
          }
        }
      };
    });
  };

  const saveDailyNewsState = (dateISO, patch) => {
    if (!dateISO || !patch) return;
    setProgress((prev) => {
      const prevDay = prev.dailyNewsHistory?.[dateISO] || {};
      return {
        ...prev,
        dailyNewsHistory: {
          ...(prev.dailyNewsHistory || {}),
          [dateISO]: {
            ...prevDay,
            ...patch,
            answers: {
              ...(prevDay.answers || {}),
              ...(patch.answers || {})
            }
          }
        }
      };
    });
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
    setResumeState,
    saveDailyReviewHistory,
    saveDailyNewsState,
    replaceProgressFromCloud,
    resetAllProgress
  };
}
