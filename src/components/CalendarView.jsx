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

export default function CalendarView({
  topics,
  progress,
  onOpenTopic,
  onOpenCalculations,
  onMarkTopicReviewed,
  onCompleteTopicRound,
  onScheduleTopic,
  onUnscheduleTopic,
  onToggleDailyEmail,
  cloudUser
}) {
  const todayISO = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayISO);
  const [viewMonth, setViewMonth] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });
  const [topicToPlan, setTopicToPlan] = useState(topics[0]?.id || 'tema-1');
  const [congratsBanner, setCongratsBanner] = useState(null);

  const spacedMap = progress.spacedRepetition || {};
  const studyPlan = progress.studyPlan || {};
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

  const getReviewsForDate = (isoDate) => {
    return topics.filter((t) => {
      const sp = spacedMap[t.id];
      if (!sp?.nextReviewAt) return false;
      if (isoDate === todayISO) {
        return sp.nextReviewAt <= todayISO;
      }
      return sp.nextReviewAt === isoDate;
    });
  };

  const getPlannedForDate = (isoDate) => {
    const ids = studyPlan[isoDate] || [];
    return ids.map((id) => topics.find((t) => t.id === id)).filter(Boolean);
  };

  const isFriday = (isoDate) => {
    return new Date(isoDate + 'T12:00:00').getDay() === 5;
  };

  const selectedReviews = getReviewsForDate(selectedDate);
  const selectedPlanned = getPlannedForDate(selectedDate);
  const selectedIsFriday = isFriday(selectedDate);

  const topicsWithRound1 = topics.filter((t) => (topicRounds[t.id] || 0) >= 1).length;
  const topicsWithRound2 = topics.filter((t) => (topicRounds[t.id] || 0) >= 2).length;

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

      {/* Capçalera + Resum de Voltes + Avisos 01:00 AM */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-600/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-red-700 dark:text-red-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>Calendari Intel·ligent i Voltes</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Planificació d&apos;Estudi i Corba de l&apos;Oblit
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              1a volta: lectura del manual complet. A partir de la 2a volta: prioritat en resums i
              preguntes noves. Cada divendres: sessió setmanal de 10 problemes de càlcul.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-center">
              <div className="text-[11px] font-bold uppercase text-slate-500">1a Volta</div>
              <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
                {topicsWithRound1}/{topics.length}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-center">
              <div className="text-[11px] font-bold uppercase text-slate-500">2a+ Volta</div>
              <div className="text-lg font-extrabold text-blue-600 dark:text-blue-400">
                {topicsWithRound2}/{topics.length}
              </div>
            </div>
          </div>
        </div>

        {/* Toggle avís diari per correu a les 01:00 AM */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-blue-600 shrink-0" />
            <div className="text-xs">
              <span className="font-extrabold text-slate-900 dark:text-white">
                Avisos diaris per correu a les 01:00 AM (Europe/Madrid):
              </span>{' '}
              <span className="text-slate-600 dark:text-slate-400">
                {cloudUser?.email
                  ? `Actiu per a ${cloudUser.email}`
                  : 'Inicia sessió amb Google a Grup d\'Estudi per rebre els avisos al teu correu.'}
              </span>
            </div>
          </div>
          <button
            onClick={() => onToggleDailyEmail(!dailyEmailEnabled)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold border transition-all ${
              dailyEmailEnabled
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700'
            }`}
          >
            {dailyEmailEnabled ? 'Avisos 01:00 AM: Activats ✓' : 'Avisos 01:00 AM: Desactivats'}
          </button>
        </div>
      </div>

      {/* Graella mensual + Agenda del dia seleccionat */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendari mensual */}
        <div className="lg:col-span-2 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              {MONTHS_CA[viewMonth.month]} {viewMonth.year}
            </h2>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => changeMonth(-1)}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const now = new Date();
                  setViewMonth({ year: now.getFullYear(), month: now.getMonth() });
                  setSelectedDate(todayISO);
                }}
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Avui
              </button>
              <button
                onClick={() => changeMonth(1)}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1.5 text-center text-[11px] font-extrabold text-slate-400 uppercase">
            {WEEKDAYS.map((w) => (
              <div key={w} className="py-1">
                {w}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1.5">
            {calendarCells.map((iso, idx) => {
              if (!iso) return <div key={`empty-${idx}`} className="h-16 sm:h-20" />;
              const dayNum = Number(iso.split('-')[2]);
              const isToday = iso === todayISO;
              const isSelected = iso === selectedDate;
              const revCount = getReviewsForDate(iso).length;
              const planCount = getPlannedForDate(iso).length;
              const friday = isFriday(iso);

              return (
                <button
                  key={iso}
                  onClick={() => setSelectedDate(iso)}
                  className={`h-16 sm:h-20 rounded-2xl border p-1.5 flex flex-col justify-between text-left transition-all ${
                    isSelected
                      ? 'border-red-600 bg-red-50/70 dark:bg-red-950/30 ring-2 ring-red-500/20'
                      : isToday
                      ? 'border-blue-400 bg-blue-50/50 dark:bg-blue-950/20'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`text-xs font-extrabold ${
                        isToday
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {dayNum}
                    </span>
                    {friday && (
                      <span
                        className="text-[9px] font-extrabold px-1 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300"
                        title="Divendres: Repàs setmanal de càlculs"
                      >
                        10C
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {revCount > 0 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-extrabold bg-red-600 text-white">
                        R:{revCount}
                      </span>
                    )}
                    {planCount > 0 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-extrabold bg-blue-600 text-white">
                        E:{planCount}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

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
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {rounds === 0 ? '1a Volta' : `Volta ${rounds + 1} (${rounds} ✓)`}
                        </span>
                      </div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
                        Tema {topic.number} · {topic.title}
                      </h4>
                      <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                        {isSecondOrMore
                          ? 'Recomanat (2a+ volta): Resums + Preguntes noves'
                          : 'Recomanat (1a volta): Llegir manual complet'}
                      </p>
                    </div>

                    {kind === 'plan' && (
                      <button
                        onClick={() => onUnscheduleTopic(selectedDate, topic.id)}
                        className="p-1 text-slate-400 hover:text-red-600"
                        title="Treure del dia"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {isSecondOrMore ? (
                      <>
                        <button
                          onClick={() => onOpenTopic(topic.id, 'summary')}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-[11px] font-extrabold hover:bg-amber-600"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>Resums</span>
                        </button>
                        <button
                          onClick={() => onOpenTopic(topic.id, 'quiz')}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-600 text-white text-[11px] font-extrabold hover:bg-red-700"
                        >
                          <span>Preguntes noves</span>
                        </button>
                        <button
                          onClick={() => onOpenTopic(topic.id, 'manual')}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[11px] font-bold text-slate-700 dark:text-slate-200"
                        >
                          <BookOpen className="w-3 h-3" />
                          <span>Manual</span>
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => onOpenTopic(topic.id, 'manual')}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-extrabold"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>Obrir Manual Complet</span>
                      </button>
                    )}

                    {kind === 'review' && (
                      <button
                        onClick={() => onMarkTopicReviewed(topic.id)}
                        className="px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white text-[11px] font-bold hover:bg-emerald-700"
                      >
                        Repassat ✓
                      </button>
                    )}

                    <button
                      onClick={() => handleCompleteRoundClick(topic)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-[11px] font-extrabold hover:bg-emerald-100"
                      title="Marca aquesta volta com a completada"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Completar Volta</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
