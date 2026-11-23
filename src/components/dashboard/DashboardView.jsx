import React from 'react';
import {
  Flame,
  BookOpen,
  CheckCircle2,
  Bookmark,
  Trophy,
  TrendingUp,
  RotateCcw,
  ArrowUpRight,
  Brain,
  Clock
} from 'lucide-react';

export default function DashboardView({
  topics,
  progress,
  onSelectTopic,
  onToggleTopicMark,
  onMarkTopicReviewed,
  onResetProgress
}) {
  const dailyActivity = progress.dailyActivity || [];

  // Estadístiques globals
  const totalPagesAvailable = topics.reduce((sum, t) => sum + t.pages.length, 0);
  const totalCompletedPages = topics.reduce((sum, t) => {
    const pagesMap = progress.pageStatus?.[t.id] || {};
    return sum + Object.values(pagesMap).filter((st) => st === 'completed').length;
  }, 0);

  const totalReviewPages = topics.reduce((sum, t) => {
    const pagesMap = progress.pageStatus?.[t.id] || {};
    return sum + Object.values(pagesMap).filter((st) => st === 'review').length;
  }, 0);

  const quizEntries = Object.entries(progress.quizResults || {})
    .filter(([k, v]) => k !== '__mistakes' && v && typeof v.totalQuestions === 'number' && v.totalQuestions > 0)
    .map(([, v]) => v);
  const ans = progress.answerStats || { totalAnswered: 0, totalCorrect: 0 };
  const totalQuizCorrect = quizEntries.reduce((s, q) => s + (q.lastScore ?? q.bestScore ?? 0), 0);
  const totalQuizAsked = quizEntries.reduce((s, q) => s + (q.totalQuestions || 0), 0);
  const averageQuizAccuracy =
    ans.totalAnswered > 0
      ? Math.round((ans.totalCorrect / ans.totalAnswered) * 100)
      : totalQuizAsked > 0
      ? Math.round((totalQuizCorrect / totalQuizAsked) * 100)
      : quizEntries.length > 0
      ? Math.round(quizEntries.reduce((s, q) => s + (q.percentage || 0), 0) / quizEntries.length)
      : 0;
  const averageQuizGrade10 =
    ans.totalAnswered > 0
      ? ((ans.totalCorrect / ans.totalAnswered) * 10).toFixed(1)
      : totalQuizAsked > 0
      ? ((totalQuizCorrect / totalQuizAsked) * 10).toFixed(1)
      : (averageQuizAccuracy / 10).toFixed(1);

  const maxDailyPages = Math.max(5, ...dailyActivity.map((d) => d.pagesStudied || 0));

  const todayISO = new Date().toISOString().split('T')[0];
  const pomodoroStats = progress.pomodoroStats || { totalMinutes: 0, sessionsCompleted: 0, minutesByDay: {} };
  const todayMinutes = (pomodoroStats.minutesByDay && pomodoroStats.minutesByDay[todayISO]) || 0;
  const todaySessions = (progress.studySessions || []).filter((s) => s.date === todayISO);

  const EBBINGHAUS_LABELS = ['1 dia', '3 dies', '7 dies', '14 dies', '30 dies', '60 dies'];
  const spacedMap = progress.spacedRepetition || {};

  const reviewItems = topics
    .map((t) => {
      const sp = spacedMap[t.id];
      const pagesMap = progress.pageStatus?.[t.id] || {};
      const hasAnyProgress =
        !!sp ||
        Object.values(pagesMap).some((s) => s === 'completed' || s === 'review') ||
        !!progress.quizResults?.[t.id];
      if (!hasAnyProgress) return null;

      const lastDate = sp?.lastStudiedAt || progress.quizResults?.[t.id]?.updatedAt || todayISO;
      const nextDate = sp?.nextReviewAt || todayISO;
      const stage = sp?.reviewStage ?? 0;
      const diffDays = Math.round(
        (new Date(nextDate + 'T12:00:00') - new Date(todayISO + 'T12:00:00')) / 86400000
      );

      let urgency = 'consolidated';
      if (diffDays <= 0) urgency = 'urgent';
      else if (diffDays <= 3) urgency = 'soon';

      return { topic: t, lastDate, nextDate, stage, diffDays, urgency };
    })
    .filter(Boolean)
    .sort((a, b) => a.diffDays - b.diffDays);

  const urgentReviews = reviewItems.filter((r) => r.urgency === 'urgent');
  const soonReviews = reviewItems.filter((r) => r.urgency === 'soon');

  const formatShortDay = (isoDate) => {
    try {
      const [, m, d] = isoDate.split('-');
      return `${d}/${m}`;
    } catch {
      return isoDate;
    }
  };

  return (
    <div className="space-y-6">
      {/* Encapçalament del Dashboard */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
            Analítica d'Estudi i Rendiment
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Seguiment i Estadístiques d'Oposició
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Dades sincronitzades automàticament al teu navegador (`localStorage`).
          </p>
        </div>

        <button
          onClick={() => {
            if (window.confirm('Vols reiniciar totes les estadístiques i progrés guardat?')) {
              onResetProgress();
            }
          }}
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reiniciar Dades
        </button>
      </div>

      {/* 4 KPIs principals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Ratxa d'Estudi
            </span>
            <span className="p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <Flame className="w-5 h-5" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {progress.streakDays ?? 0}
            </span>
            <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
              dies seguits
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Constància activa: última sessió avui
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Pàgines Completades
            </span>
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <BookOpen className="w-5 h-5" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {totalCompletedPages} / {totalPagesAvailable}
            </span>
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              ({Math.round((totalCompletedPages / Math.max(1, totalPagesAvailable)) * 100)}%)
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Màxim 10 pàgines per tema
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Nota Global Tests
            </span>
            <span className="p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
              <Trophy className="w-5 h-5" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {averageQuizGrade10} / 10
            </span>
            <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
              ({averageQuizAccuracy}%)
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {totalQuizAsked > 0
              ? `${totalQuizCorrect} encerts de ${totalQuizAsked} preguntes`
              : 'Objectiu recomanat d\'oposició: ≥ 8,0 / 10'}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Pàgines per Repassar
            </span>
            <span className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Bookmark className="w-5 h-5" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {totalReviewPages}
            </span>
            <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
              marcades
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Fórmules o taules pendents de consolidar
          </p>
        </div>
      </div>

      {/* Gràfics Diaris i Percentatge d'Encerts per Tema */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gràfic 1: Pàgines estudiades per dia (últims 7 dies) */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-red-600" />
                Pàgines Estudiades per Dia (Últims 7 dies)
              </h3>
              <span className="text-xs font-semibold text-slate-400">Activitat Diària</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Cada barra mostra el nombre de pàgines completades i tests realitzats per jornada.
            </p>
          </div>

          <div className="h-48 flex items-end justify-between gap-3 pt-6 px-2 border-b border-slate-100 dark:border-slate-800">
            {dailyActivity.slice(-7).map((day, idx) => {
              const heightPct = Math.round(((day.pagesStudied || 0) / maxDailyPages) * 100);
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">
                    {day.pagesStudied}p
                  </span>
                  <div className="w-full max-w-[42px] h-32 bg-slate-100 dark:bg-slate-800/70 rounded-t-xl flex items-end overflow-hidden p-0.5">
                    <div
                      style={{ height: `${Math.max(10, heightPct)}%` }}
                      className="w-full rounded-t-lg bg-gradient-to-t from-red-600 to-orange-500 transition-all duration-300"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 pb-2">
                    {formatShortDay(day.date)}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Marca qualsevol pàgina com a "Completada" per veure pujar la barra d'avui.</span>
            <span className="font-semibold text-red-600 dark:text-red-400">Objectiu: 3 pàg/dia</span>
          </div>
        </div>

        {/* Gràfic 2: Percentatge d'encerts en els tests per tema */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                Percentatge d'Encerts als Tests per Tema
              </h3>
              <span className="text-xs font-semibold text-slate-400">Autoavaluació</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Comparativa de precisió en els qüestionaris de 10 preguntes de cada tema.
            </p>

            <div className="space-y-5">
              {topics.map((t) => {
                const qResult = progress.quizResults?.[t.id];
                const pct = qResult ? qResult.percentage : 0;
                const barColor =
                  pct >= 80
                    ? 'from-emerald-600 to-teal-500'
                    : pct >= 50
                    ? 'from-amber-500 to-orange-500'
                    : 'from-slate-400 to-slate-500';

                return (
                  <div key={t.id} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-slate-800 dark:text-slate-200 truncate pr-2">
                        T{t.number}. {t.title}
                      </span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white shrink-0">
                        {qResult ? `${qResult.bestScore}/${qResult.totalQuestions} (${pct}%)` : 'Sense intents'}
                      </span>
                    </div>
                    <div className="h-3.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        style={{ width: `${Math.max(4, pct)}%` }}
                        className={`h-full rounded-full bg-gradient-to-r ${barColor} transition-all duration-500`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Llindar d'aprovat: 50% | Nivell plaça: &ge; 80%</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Consolidat
            </span>
          </div>
        </div>
      </div>

      {/* Regla de l'Oblit (Corba d'Ebbinghaus) + Estudi d'Avui */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-red-600 dark:text-red-400">
                <Brain className="w-4 h-4" />
                <span>Regla de l&apos;Oblit (Corba d&apos;Ebbinghaus)</span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">
                Què hauries de repassar avui per no oblidar-ho
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Cicle automàtic: 1 dia → 3 dies → 7 dies → 14 dies → 30 dies → 60 dies. Si falles un test (&lt;60%), torna a 1 dia.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900">
              {urgentReviews.length} pendents avui
            </span>
          </div>

          {reviewItems.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-800 p-5 text-center text-xs text-slate-500 dark:text-slate-400">
              Comença a marcar pàgines completades, fer tests o registrar Pomodoros: aquí apareixerà el teu calendari de repassos intel·ligent.
            </div>
          ) : (
            <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
              {reviewItems.map((item) => (
                <div
                  key={item.topic.id}
                  className={`rounded-xl border p-3.5 flex flex-wrap items-center justify-between gap-3 ${
                    item.urgency === 'urgent'
                      ? 'border-red-300 dark:border-red-900/70 bg-red-50/70 dark:bg-red-950/20'
                      : item.urgency === 'soon'
                      ? 'border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20'
                      : 'border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/15'
                  }`}
                >
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded-md text-[11px] font-extrabold ${
                          item.urgency === 'urgent'
                            ? 'bg-red-600 text-white'
                            : item.urgency === 'soon'
                            ? 'bg-amber-500 text-slate-950'
                            : 'bg-emerald-600 text-white'
                        }`}
                      >
                        {item.urgency === 'urgent'
                          ? item.diffDays < 0
                            ? `Endarrerit ${Math.abs(item.diffDays)}d`
                            : 'Toca AVUI'
                          : `En ${item.diffDays}d`}
                      </span>
                      <span className="text-xs font-extrabold text-slate-900 dark:text-white truncate">
                        Tema {item.topic.number} · {item.topic.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">
                      Últim estudi: {formatShortDay(item.lastDate)} · Nivell memòria: {item.stage + 1}/6 ({EBBINGHAUS_LABELS[item.stage]})
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectTopic(item.topic.id)}
                      className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-red-400"
                    >
                      Repassar
                    </button>
                    {onMarkTopicReviewed && (
                      <button
                        onClick={() => onMarkTopicReviewed(item.topic.id)}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700"
                        title="Marca com a repassat i programa el següent interval de la regla de l'oblit"
                      >
                        Marcar repassat ✓
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {soonReviews.length > 0 && (
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Tens {soonReviews.length} tema(es) programats per als propers 3 dies.
            </p>
          )}
        </div>

        {/* Estudi d'avui + Pomodoros */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Clock className="w-4 h-4" />
              <span>Estudi d&apos;Avui (Pomodoro)</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                {todayMinutes} min
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                ({pomodoroStats.sessionsCompleted || 0} sessions totals)
              </span>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Què has estudiat avui
              </div>
              {todaySessions.length === 0 ? (
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Encara no has registrat cap Pomodoro avui. Obre el botó &quot;Pomodoro&quot; a baix a la dreta per començar!
                </p>
              ) : (
                <ul className="space-y-1.5 max-h-44 overflow-y-auto">
                  {todaySessions.map((s) => (
                    <li
                      key={s.id}
                      className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 px-3 py-2 text-xs"
                    >
                      <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                        {s.topicTitle}
                      </span>
                      <span className="font-extrabold text-red-600 dark:text-red-400 shrink-0">
                        {s.minutes}m ({s.time})
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
            Total acumulat: <span className="font-bold text-slate-700 dark:text-slate-300">{pomodoroStats.totalMinutes || 0} minuts</span>
          </div>
        </div>
      </div>

      {/* Gestió d'Estat per Tema i Pàgina (Botons "Completat" o "Per repassar") */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
          Control d'Estat per Tema i Desglossament de Pàgines
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
          Marca qualsevol tema sencer com a "Completat" o "Per repassar", o clica per obrir-lo directament.
        </p>

        <div className="space-y-4">
          {topics.map((t) => {
            const pagesMap = progress.pageStatus?.[t.id] || {};
            const completedCount = Object.values(pagesMap).filter((s) => s === 'completed').length;
            const reviewCount = Object.values(pagesMap).filter((s) => s === 'review').length;
            const topicMark = progress.topicStatus?.[t.id] || 'in_progress';

            return (
              <div
                key={t.id}
                className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 flex flex-wrap items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-red-600/10 text-red-600 dark:text-red-400 font-bold text-xs">
                      Tema {t.number}
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t.title}</h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {completedCount} de {t.pages.length} pàgines completades · {reviewCount} marcades per repassar
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => onToggleTopicMark(t.id, 'completed', t.pages.length)}
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold border transition-all ${
                      topicMark === 'completed'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {topicMark === 'completed' ? 'Tema Completat' : 'Marcar Completat'}
                  </button>

                  <button
                    onClick={() => onToggleTopicMark(t.id, 'review', t.pages.length)}
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold border transition-all ${
                      topicMark === 'review'
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-400'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    {topicMark === 'review' ? 'En Repàs' : 'Per Repassar'}
                  </button>

                  <button
                    onClick={() => onSelectTopic(t.id)}
                    className="inline-flex items-center gap-1 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3.5 py-2 text-xs font-bold hover:opacity-90 transition-opacity"
                  >
                    <span>Obrir Tema</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
