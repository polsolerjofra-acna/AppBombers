import React, { useState } from 'react';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  Trophy,
  Sparkles,
  Calculator,
  X,
  Clock
} from 'lucide-react';

const WEEKDAYS = ['Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds', 'Dg'];
const EBBINGHAUS_STAGES = [1, 3, 7, 14, 30, 60];
const MONTHS_CA = [
  'Gener',
  'Febrer',
  'Març',
  'Abril',
  'Maig',
  'Juny',
  'Juliol',
  'Agost',
  'Setembre',
  'Octubre',
  'Novembre',
  'Desembre'
];

function findBestPageForMistake(topic, mistake) {
  const pages = topic?.pages || [];
  if (pages.length === 0) return null;
  if (mistake?.pageNumber) {
    const exact = pages.find((p) => p.pageNumber === mistake.pageNumber);
    if (exact) return exact;
  }
  const text = `${mistake?.question || ''} ${mistake?.explanation || ''}`.toLowerCase();
  const words = text
    .replace(/[^a-zà-ü0-9\s]/gi, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 4);
  if (words.length === 0) {
    return pages.find((p) => p.isSummary || p.isFormulaSheet) || pages[0];
  }
  let best = null;
  let bestScore = -1;
  pages.forEach((p) => {
    const hay = `${p.title || ''} ${p.subtitle || ''} ${(p.keyPoints || []).join(' ')}`.toLowerCase();
    let score = 0;
    words.forEach((w) => {
      if (hay.includes(w)) score += 1;
    });
    if (score > bestScore) {
      bestScore = score;
      best = p;
    }
  });
  return bestScore > 0 ? best : pages.find((p) => p.isSummary || p.isFormulaSheet) || pages[0];
}

export default function CalendarView({
  topics,
  progress,
  onOpenTopic,
  onOpenCalculations,
  onMarkTopicReviewed,
  onCompleteTopicRound,
  onCompleteFirstRoundAll,
  onScheduleTopic,
  onUnscheduleTopic,
  onToggleDailyEmail,
  cloudUser,
  homeOnlyGrid = false,
  onOpenFullCalendar = null
}) {
  const todayISO = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayISO);
  const [viewMonth, setViewMonth] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });
  const [topicToPlan, setTopicToPlan] = useState(topics[0]?.id || 'tema-1');
  const [congratsBanner, setCongratsBanner] = useState(null);
  const [reviewConfirmModal, setReviewConfirmModal] = useState(null);
  const [showCurveInfo, setShowCurveInfo] = useState(true);

  const spacedMap = progress.spacedRepetition || {};
  const studyPlan = progress.studyPlan || {};
  const reviewHistory = progress.reviewHistory || {};
  const topicRounds = progress.topicRounds || {};
  const dailyEmailEnabled = progress.dailyEmailEnabled !== false;

  // Construeix els dies del mes
  const firstDayOfMonth = new Date(viewMonth.year, viewMonth.month, 1);
  const daysInMonth = new Date(viewMonth.year, viewMonth.month + 1, 0).getDate();
  const startOffset = (firstDayOfMonth.getDay() + 6) % 7; // Dilluns = 0

  const calendarCells = [];
  for (let i = 0; i < startOffset; i++) calendarCells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    const mStr = String(viewMonth.month + 1).padStart(2, '0');
    const dStr = String(d).padStart(2, '0');
    calendarCells.push(`${viewMonth.year}-${mStr}-${dStr}`);
  }

  const isDoneOnDate = (topicId, isoDate) => {
    const hist = reviewHistory[isoDate] || [];
    if (hist.some((item) => item.topicId === topicId)) return true;
    const sp = spacedMap[topicId];
    return Boolean(sp?.lastStudiedAt && sp.lastStudiedAt === isoDate);
  };

  const getReviewsForDate = (isoDate) => {
    return topics.filter((t) => {
      const sp = spacedMap[t.id];
      if (!sp?.nextReviewAt) return false;
      if (isDoneOnDate(t.id, isoDate)) return false;
      if (isoDate === todayISO) {
        return sp.nextReviewAt <= todayISO;
      }
      return sp.nextReviewAt === isoDate;
    });
  };

  const getPlannedForDate = (isoDate) => {
    const directIds = studyPlan[isoDate] || [];
    if (isoDate !== todayISO) {
      return directIds
        .map((id) => topics.find((t) => t.id === id))
        .filter((t) => t && !isDoneOnDate(t.id, isoDate));
    }
    // Si és avui, arrosseguem també els temes manuals de dies anteriors que no s'han repassat,
    // però excloem qualsevol tema que ja s'hagi marcat com a repassat avui o que ja sigui a repassos d'avui.
    const reviewIdsToday = new Set(getReviewsForDate(todayISO).map((t) => t.id));
    const merged = new Set(directIds);
    Object.keys(studyPlan).forEach((d) => {
      if (d < todayISO && Array.isArray(studyPlan[d])) {
        studyPlan[d].forEach((id) => merged.add(id));
      }
    });
    return Array.from(merged)
      .filter((id) => !isDoneOnDate(id, todayISO) && !reviewIdsToday.has(id))
      .map((id) => topics.find((t) => t.id === id))
      .filter(Boolean);
  };

  const getDoneForDate = (isoDate) => {
    const items = reviewHistory[isoDate] || [];
    const seen = new Set();
    const list = [];
    items.forEach((entry) => {
      const t = topics.find((x) => x.id === entry.topicId);
      if (t && !seen.has(t.id)) {
        seen.add(t.id);
        list.push({ ...entry, topic: t });
      }
    });
    // També incloem temes estudiats/repassats aquella data abans d'existir reviewHistory
    topics.forEach((t) => {
      const sp = spacedMap[t.id];
      if (sp?.lastStudiedAt === isoDate && !seen.has(t.id)) {
        seen.add(t.id);
        list.push({
          topicId: t.id,
          stage: sp.reviewStage || 0,
          nextReviewAt: sp.nextReviewAt || '',
          topic: t
        });
      }
    });
    return list;
  };

  const handleMarkReviewedWithConfirm = (topic) => {
    const res = onMarkTopicReviewed(topic.id);
    if (res && res.nextReviewAt) {
      setReviewConfirmModal({
        topicTitle: `Tema ${topic.number} · ${topic.title}`,
        nextReviewAt: res.nextReviewAt,
        intervalDays: res.intervalDays
      });
    }
  };

  const isFriday = (isoDate) => {
    return new Date(isoDate + 'T12:00:00').getDay() === 5;
  };

  const selectedReviews = getReviewsForDate(selectedDate);
  const selectedPlanned = getPlannedForDate(selectedDate);
  const selectedDone = getDoneForDate(selectedDate);
  const selectedIsFriday = isFriday(selectedDate);

  const topicsWithRound1 = topics.filter((t) => (topicRounds[t.id] || 0) >= 1).length;
  const topicsWithRound2 = topics.filter((t) => (topicRounds[t.id] || 0) >= 2).length;

  const plus7Date = new Date(todayISO + 'T12:00:00');
  plus7Date.setDate(plus7Date.getDate() + 7);
  const plus7ISO = plus7Date.toISOString().split('T')[0];

  const dueNowTopics = topics.filter((t) => {
    const sp = spacedMap[t.id];
    return sp?.nextReviewAt && sp.nextReviewAt <= todayISO;
  });
  const upcoming7Topics = topics.filter((t) => {
    const sp = spacedMap[t.id];
    return sp?.nextReviewAt && sp.nextReviewAt > todayISO && sp.nextReviewAt <= plus7ISO;
  });
  const consolidatedTopics = topics.filter((t) => {
    const sp = spacedMap[t.id];
    return sp && (sp.reviewStage || 0) >= 3;
  });
  const activeSpacedTopics = topics
    .filter((t) => Boolean(spacedMap[t.id]?.nextReviewAt))
    .sort((a, b) =>
      (spacedMap[a.id]?.nextReviewAt || '').localeCompare(spacedMap[b.id]?.nextReviewAt || '')
    );

  const handleCompleteRoundClick = (topic) => {
    const prevRounds = topicRounds[topic.id] || 0;
    const nextRounds = prevRounds + 1;
    onCompleteTopicRound(topic.id);
    setCongratsBanner({
      topicTitle: `Tema ${topic.number} · ${topic.title}`,
      roundNumber: nextRounds
    });
  };

  const changeMonth = (delta) => {
    setViewMonth((prev) => {
      const d = new Date(prev.year, prev.month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  };

  const renderMonthlyCalendarGrid = (isHome = false) => (
    <div className="w-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <Calendar className="w-5 h-5 text-red-600" />
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
            {MONTHS_CA[viewMonth.month]} {viewMonth.year}
          </h2>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => changeMonth(-1)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              const now = new Date();
              setViewMonth({ year: now.getFullYear(), month: now.getMonth() });
              setSelectedDate(todayISO);
            }}
            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Avui
          </button>
          <button
            onClick={() => changeMonth(1)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          {isHome && onOpenFullCalendar && (
            <button
              onClick={() => onOpenFullCalendar(selectedDate)}
              className="ml-1 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold transition"
            >
              Obrir Agenda →
            </button>
          )}
        </div>
      </div>

      {/* Capçalera dies de la setmana */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {WEEKDAYS.map((wd) => (
          <div
            key={wd}
            className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 py-1"
          >
            {wd}
          </div>
        ))}
      </div>

      {/* Graella de dies */}
      <div className="grid grid-cols-7 gap-2">
        {calendarCells.map((iso, idx) => {
          if (!iso) {
            return <div key={`empty-${idx}`} className="h-20 sm:h-24 rounded-2xl" />;
          }
          const dayNum = Number(iso.split('-')[2]);
          const revCount = getReviewsForDate(iso).length;
          const planCount = getPlannedForDate(iso).length;
          const doneCount = getDoneForDate(iso).length;
          const isPast = iso < todayISO;
          const hasMissedPast = isPast && (revCount > 0 || planCount > 0);
          const friday = isFriday(iso);
          const isSelected = selectedDate === iso;
          const isToday = iso === todayISO;

          return (
            <button
              key={iso}
              onClick={() => {
                setSelectedDate(iso);
                if (isHome && onOpenFullCalendar) {
                  onOpenFullCalendar(iso);
                }
              }}
              className={`h-20 sm:h-24 rounded-2xl border p-2 flex flex-col justify-between text-left transition-all ${
                isSelected
                  ? 'border-red-600 bg-red-50/70 dark:bg-red-950/30 ring-2 ring-red-500/20'
                  : hasMissedPast
                  ? 'border-red-400 bg-red-50/80 dark:bg-red-950/30'
                  : doneCount > 0 && revCount === 0 && planCount === 0
                  ? 'border-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/20'
                  : isToday
                  ? 'border-blue-400 bg-blue-50/50 dark:bg-blue-950/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={`text-xs sm:text-sm font-extrabold ${
                    isToday
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {dayNum}
                </span>
                {friday && (
                  <span
                    className="text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300"
                    title="Divendres: Repàs setmanal de càlculs"
                  >
                    10C
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-1">
                {doneCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] font-extrabold bg-emerald-600 text-white">
                    ✓ {doneCount}
                  </span>
                )}
                {revCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] font-extrabold bg-red-600 text-white">
                    R:{revCount}
                  </span>
                )}
                {planCount > 0 && (
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-extrabold text-white ${
                      isPast ? 'bg-red-600' : 'bg-blue-600'
                    }`}
                  >
                    E:{planCount}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  if (homeOnlyGrid) {
    return renderMonthlyCalendarGrid(true);
  }

  return (
    <div className="space-y-6">
      {/* Banner d'enhorabona en completar una volta */}
      {congratsBanner && (
        <div className="rounded-3xl border border-emerald-300 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/40 p-5 flex items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                Enhorabona! Volta {congratsBanner.roundNumber} completada
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Has completat la Volta {congratsBanner.roundNumber} de {congratsBanner.topicTitle}.
                {congratsBanner.roundNumber === 1
                  ? ' A partir de la 2a volta, el calendari et prioritzarà resums i preguntes noves!'
                  : ' Segueix consolidant amb els resums i els tests diaris!'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setCongratsBanner(null)}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-white/60"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* A dalt: només "Com funciona la Corba de l'Oblit" */}
      <div className="rounded-3xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/70 dark:bg-indigo-950/25 p-5 sm:p-6 shadow-sm space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-indigo-800 dark:text-indigo-300">
            Com funciona la Corba de l&apos;Oblit (Repàs Espaiat d&apos;Ebbinghaus)?
          </span>
          <button
            onClick={() => setShowCurveInfo((v) => !v)}
            className="text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:underline"
          >
            {showCurveInfo ? 'Amagar explicació' : 'Mostrar explicació'}
          </button>
        </div>
        {showCurveInfo && (
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
            <p>
              Sense repàs, el cervell oblida fins al ~70% d&apos;un tema en les primeres 24–48 hores. Cada repàs fet just abans d&apos;oblidar-lo aplana la corba i consolida el record a llarg termini.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="rounded-xl bg-white/85 dark:bg-slate-900/75 border border-indigo-100 dark:border-indigo-900/40 px-3.5 py-2.5">
                <span className="font-extrabold text-indigo-700 dark:text-indigo-300">1. Quan s&apos;activa?</span>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  En completar una pàgina, un tema o fer un Pomodoro, entra a l&apos;<strong>Etapa 1 (+1 dia)</strong>.
                </p>
              </div>
              <div className="rounded-xl bg-white/85 dark:bg-slate-900/75 border border-indigo-100 dark:border-indigo-900/40 px-3.5 py-2.5">
                <span className="font-extrabold text-emerald-700 dark:text-emerald-300">2. Com avança?</span>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  En clicar <strong>Repassat ✓ / Fet ✓</strong> o aprovar el test (≥ 60%), salta al següent interval: <strong>1d → 3d → 7d → 14d → 30d → 60d</strong>.
                </p>
              </div>
              <div className="rounded-xl bg-white/85 dark:bg-slate-900/75 border border-indigo-100 dark:border-indigo-900/40 px-3.5 py-2.5">
                <span className="font-extrabold text-red-700 dark:text-red-300">3. Si falles o tens errors</span>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  El tema torna automàticament a <strong>+1 dia</strong> (o avui) i els errors es prioritzen quan fas tests personalitzats.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Calendari mensual en gran (ample complet) */}
      {renderMonthlyCalendarGrid(false)}

      {/* Agenda del dia seleccionat per sota del calendari */}
      <div className="w-full space-y-6">

        {/* Agenda del dia seleccionat */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm space-y-5">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 dark:text-red-400">
              Agenda del dia
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              {selectedDate === todayISO ? `Avui (${selectedDate})` : selectedDate}
            </h3>
          </div>

          {/* Repàs setmanal dels divendres */}
          {selectedIsFriday && (
            <div className="rounded-2xl border border-amber-300 dark:border-amber-800 bg-amber-50/80 dark:bg-amber-950/30 p-4 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-extrabold text-amber-900 dark:text-amber-200">
                <Calculator className="w-4 h-4 text-amber-600" />
                <span>Divendres · Repàs Setmanal de Càlculs</span>
              </div>
              <p className="text-xs text-amber-800 dark:text-amber-300">
                Sessió setmanal amb 10 problemes aleatoris de Física, Química, Electricitat i Hidràulica amb pissarra integrada.
              </p>
              <button
                onClick={() => onOpenCalculations('friday')}
                className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold transition-colors"
              >
                Iniciar Repàs dels 10 Problemes →
              </button>
            </div>
          )}

          {/* Planificar tema per aquest dia */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 dark:text-slate-400 block">
              Planificar un tema per estudiar aquest dia:
            </label>
            <div className="flex gap-2">
              <select
                value={topicToPlan}
                onChange={(e) => setTopicToPlan(e.target.value)}
                className="flex-1 min-w-0 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                {topics.map((t) => (
                  <option key={t.id} value={t.id}>
                    Tema {t.number} · {t.title}
                  </option>
                ))}
              </select>
              <button
                onClick={() => onScheduleTopic(selectedDate, topicToPlan)}
                className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold shrink-0"
              >
                Afegir
              </button>
            </div>
          </div>

          {/* Llista de Repassos (Corba de l'Oblit) + Estudis planificats */}
          <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
            {selectedReviews.length === 0 && selectedPlanned.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-4 text-center text-xs text-slate-500">
                Cap repàs ni estudi planificat per aquest dia. Afegeix un tema a dalt!
              </div>
            )}

            {[
              ...selectedReviews.map((t) => ({ topic: t, kind: 'review' })),
              ...selectedPlanned.map((t) => ({ topic: t, kind: 'plan' }))
            ].map(({ topic, kind }, idx) => {
              const rounds = topicRounds[topic.id] || 0;
              const isSecondOrMore = rounds >= 1;
              const sp = spacedMap[topic.id];
              const stageIdx = sp ? sp.reviewStage || 0 : 0;
              const stageDays = EBBINGHAUS_STAGES[stageIdx] || 1;
              const isOverdue = kind === 'review' && sp?.nextReviewAt && sp.nextReviewAt < todayISO;

              return (
                <div
                  key={`${kind}-${topic.id}-${idx}`}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 p-3.5 space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold ${
                            kind === 'review'
                              ? 'bg-red-600 text-white'
                              : 'bg-blue-600 text-white'
                          }`}
                        >
                          {kind === 'review' ? 'Repàs Oblit' : 'Estudi'}
                        </span>
                        {kind === 'review' && sp && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                            Etapa {stageIdx + 1}/{EBBINGHAUS_STAGES.length} · +{stageDays}d
                          </span>
                        )}
                        {isOverdue && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-500 text-slate-950">
                            Endarrerit ({sp.nextReviewAt})
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenTopic(topic.id, 'summary')}
                        className="text-left text-xs sm:text-sm font-extrabold text-red-700 dark:text-red-400 hover:underline flex items-center gap-1"
                        title="Obrir el resum d'aquest tema"
                      >
                        <span>Tema {topic.number} · {topic.title} →</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleMarkReviewedWithConfirm(topic)}
                        className="px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white text-[11px] font-extrabold hover:bg-emerald-700"
                      >
                        Repassat ✓
                      </button>
                      {kind === 'plan' && (
                        <button
                          type="button"
                          onClick={() => onUnscheduleTopic(selectedDate, topic.id)}
                          className="p-1 text-slate-400 hover:text-red-600"
                          title="Treure del dia"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            {selectedDone.length > 0 && (
              <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/70 dark:bg-emerald-950/25 p-3.5 space-y-2">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Repassats aquest dia ✓ ({selectedDone.length})</span>
                </div>
                <div className="space-y-1.5">
                  {selectedDone.map((item, i) => (
                    <div
                      key={`${item.topicId}-${i}`}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-900/40 px-3 py-2 text-xs"
                    >
                      <span className="font-bold text-slate-900 dark:text-white">
                        ✓ Tema {item.topic.number} · {item.topic.title}
                      </span>
                      <span className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-300">
                        Pròxim repàs: {item.nextReviewAt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal confirmació següent repàs (Regla de l'Oblit) */}
      {reviewConfirmModal && (
        <div
          onClick={() => setReviewConfirmModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-sm w-full rounded-3xl border border-emerald-200 dark:border-emerald-900 bg-white dark:bg-slate-900 p-6 shadow-2xl space-y-4 text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Repàs registrat ✓
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {reviewConfirmModal.topicTitle}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 pt-1">
                Aquest tema et toca repassar-lo el dia{' '}
                <strong className="text-emerald-700 dark:text-emerald-300">
                  {reviewConfirmModal.nextReviewAt.split('-').reverse().join('/')}
                </strong>{' '}
                (+{reviewConfirmModal.intervalDays} {reviewConfirmModal.intervalDays === 1 ? 'dia' : 'dies'}).
              </p>
            </div>
            <button
              type="button"
              onClick={() => setReviewConfirmModal(null)}
              className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 text-sm font-extrabold shadow-sm"
            >
              Okei
            </button>
          </div>
        </div>
      )}

      {/* Estadístiques de repassos i avisos 01:00 AM (sota l'agenda) */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
            Control de Repassos Espaiats (Regla de l&apos;Oblit)
          </div>

          <button
            onClick={() => onToggleDailyEmail(!dailyEmailEnabled)}
            className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all ${
              dailyEmailEnabled
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700'
            }`}
          >
            {dailyEmailEnabled ? 'Avisos correu 01:00 AM: Activats ✓' : 'Avisos correu 01:00 AM: Desactivats'}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-2xl border border-red-200 dark:border-red-900/50 bg-red-50/70 dark:bg-red-950/30 p-3.5">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 dark:text-red-300">
              Pendents Avui / Endarrerits
            </div>
            <div className="text-2xl font-extrabold text-red-600 dark:text-red-400 mt-1">
              {dueNowTopics.length}
            </div>
          </div>
          <div className="rounded-2xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/70 dark:bg-blue-950/30 p-3.5">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              Pròxims 7 Dies
            </div>
            <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 mt-1">
              {upcoming7Topics.length}
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/70 dark:bg-emerald-950/30 p-3.5">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              Consolidats (≥ 14d)
            </div>
            <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
              {consolidatedTopics.length}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 p-3.5">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Cicle Ebbinghaus
            </div>
            <div className="text-xs font-extrabold text-slate-800 dark:text-slate-200 mt-1.5">
              1d → 3d → 7d → 14d → 30d → 60d
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {activeSpacedTopics.length}/{topics.length} temes en seguiment
            </div>
            {selectedDone.length > 0 && (
              <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/70 dark:bg-emerald-950/25 p-3.5 space-y-2">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Repassats aquest dia ✓ ({selectedDone.length})</span>
                </div>
                <div className="space-y-1.5">
                  {selectedDone.map((item, i) => (
                    <div
                      key={`${item.topicId}-${i}`}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-900/40 px-3 py-2 text-xs"
                    >
                      <span className="font-bold text-slate-900 dark:text-white">
                        ✓ Tema {item.topic.number} · {item.topic.title}
                      </span>
                      <span className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-300">
                        Pròxim repàs: {item.nextReviewAt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal confirmació següent repàs (Regla de l'Oblit) */}
      {reviewConfirmModal && (
        <div
          onClick={() => setReviewConfirmModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-sm w-full rounded-3xl border border-emerald-200 dark:border-emerald-900 bg-white dark:bg-slate-900 p-6 shadow-2xl space-y-4 text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Repàs registrat ✓
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {reviewConfirmModal.topicTitle}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 pt-1">
                Aquest tema et toca repassar-lo el dia{' '}
                <strong className="text-emerald-700 dark:text-emerald-300">
                  {reviewConfirmModal.nextReviewAt.split('-').reverse().join('/')}
                </strong>{' '}
                (+{reviewConfirmModal.intervalDays} {reviewConfirmModal.intervalDays === 1 ? 'dia' : 'dies'}).
              </p>
            </div>
            <button
              type="button"
              onClick={() => setReviewConfirmModal(null)}
              className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 text-sm font-extrabold shadow-sm"
            >
              Okei
            </button>
          </div>
        </div>
      )}

      {/* Cua completa de la Corba de l'Oblit */}
      {activeSpacedTopics.length > 0 && (
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                Seguiment de la Corba de l&apos;Oblit ({activeSpacedTopics.length} temes actius)
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ordenats per urgència de repàs. Cada repàs o test aprovat (≥ 60%) avança al següent interval: 1d → 3d → 7d → 14d → 30d → 60d.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeSpacedTopics.map((t) => {
              const sp = spacedMap[t.id];
              const stageIdx = sp.reviewStage || 0;
              const interval = EBBINGHAUS_STAGES[stageIdx] || 1;
              const isDue = sp.nextReviewAt <= todayISO;

              return (
                <div
                  key={`ebbinghaus-${t.id}`}
                  className={`rounded-2xl border p-3.5 flex flex-col justify-between gap-2.5 ${
                    isDue
                      ? 'border-red-300 dark:border-red-900 bg-red-50/60 dark:bg-red-950/20'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                        Etapa {stageIdx + 1}/6 (+{interval}d)
                      </span>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                          isDue
                            ? 'bg-red-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {sp.nextReviewAt <= todayISO ? 'Toca Avui!' : sp.nextReviewAt}
                      </span>
                    </div>
                    <h4 className="text-xs font-extrabold text-slate-900 dark:text-white line-clamp-1">
                      Tema {t.number} · {t.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onOpenTopic(t.id, 'summary')}
                      className="flex-1 py-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-bold"
                    >
                      Repassar
                    </button>
                    <button
                      onClick={() => onMarkTopicReviewed(t.id)}
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold"
                    >
                      Fet ✓
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
