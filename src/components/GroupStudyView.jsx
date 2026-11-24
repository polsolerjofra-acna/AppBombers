import React from 'react';
import { Users, Trophy, Flame, Clock, Award, Sparkles } from 'lucide-react';
import { isFirebaseConfigured } from '../config/firebaseConfig';
import { loginWithGoogle, logoutFirebase } from '../services/firebaseSync';
import { STATS_RESET_EPOCH } from '../hooks/useStudyProgress';

const ACCURACY_MILESTONES = [
  { target: 500, label: '500 encerts', icon: '🥉', cls: 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800' },
  { target: 1000, label: '1.000 encerts', icon: '🥈', cls: 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700' },
  { target: 2000, label: '2.000 encerts', icon: '🥇', cls: 'bg-yellow-100 dark:bg-yellow-950/60 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-800' },
  { target: 5000, label: '5.000 encerts', icon: '💎', cls: 'bg-cyan-100 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800' }
];

export default function GroupStudyView({
  user,
  groupProfiles,
  topicsCount,
  syncStatus,
  authError,
  onClearError,
  dailyReviewHistory = {}
}) {
  const configured = isFirebaseConfigured();
  const dailyEntries = Object.values(dailyReviewHistory || {})
    .filter((d) => d && d.dateISO && (d.answered > 0 || d.completed))
    .sort((a, b) => String(b.dateISO).localeCompare(String(a.dateISO)));

  return (
    <div className="space-y-6">
      {/* Capçalera */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              <Users className="w-3.5 h-3.5" />
              <span>Grup d&apos;Estudi Sincronitzat</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Avenços del Grup d&apos;Opositors
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Inicia sessió amb Google per sincronitzar el teu progrés entre ordinador i mòbil, i
              veure en temps real quants temes, tests i minuts porta cadascú del grup.
            </p>
          </div>

          {configured && (
            <div className="flex flex-col items-end gap-2">
              {user ? (
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/70 dark:bg-emerald-950/30 px-4 py-2.5">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'Opositor'}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-xs">
                      {(user.displayName || user.email || 'O')[0].toUpperCase()}
                    </div>
                  )}
                  <div className="text-left">
                    <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                      {user.displayName || user.email}
                    </div>
                    <div className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                      {syncStatus === 'syncing' ? 'Sincronitzant...' : 'Sincronitzat al núvol ✓'}
                    </div>
                  </div>
                  <button
                    onClick={logoutFirebase}
                    className="ml-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-red-50 hover:text-red-600"
                  >
                    Sortir
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    onClearError && onClearError();
                    loginWithGoogle().catch(() => {});
                  }}
                  className="inline-flex items-center gap-2 rounded-2xl bg-red-600 hover:bg-red-700 text-white px-5 py-3 text-sm font-extrabold shadow-md shadow-red-600/20 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Entrar amb Google</span>
                </button>
              )}
            </div>
          )}
        </div>

        {authError && (
          <div className="mt-4 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 px-4 py-2.5 text-xs font-semibold text-red-700 dark:text-red-300">
            {authError}
          </div>
        )}
      </div>

      {/* Si Firebase encara no està configurat */}
      {!configured ? (
        <div className="rounded-3xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/20 p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-extrabold text-amber-950 dark:text-amber-200">
            Falta connectar les claus del teu projecte Firebase (2 minuts)
          </h2>
          <p className="text-sm text-amber-900/90 dark:text-amber-300 leading-relaxed">
            Tota la lògica d&apos;autenticació, regles de seguretat (`firestore.rules`) i tauler de
            grup ja estan preparats. Només cal que creïs un projecte gratuït a Firebase i enganxis
            la configuració:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-slate-800 dark:text-slate-200">
            <li>
              Entra a <span className="font-bold">console.firebase.google.com</span> → Crea un
              projecte (ex. <code className="font-bold">app-bombers</code>).
            </li>
            <li>
              Activa <span className="font-bold">Authentication → Sign-in method → Google</span> i
              afegeix <code className="font-bold">polsolerjofra-acna.github.io</code> a{' '}
              <em>Authorized domains</em>.
            </li>
            <li>
              Activa <span className="font-bold">Firestore Database</span> (en producció) i enganxa
              les regles del fitxer <code className="font-bold">firestore.rules</code>.
            </li>
            <li>
              A <span className="font-bold">Project Settings → Your apps → Web (&lt;/&gt;)</span>,
              copia les 6 claus a{' '}
              <code className="font-bold">src/config/firebaseConfig.js</code> i fes{' '}
              <code className="font-bold">git push</code>!
            </li>
          </ol>
        </div>
      ) : !user ? (
        <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 text-center space-y-3">
          <Users className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
            Inicia sessió per veure el rànquing del grup
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Per privacitat, les dades del grup d&apos;opositors només són visibles per als membres
            autenticats. Fes clic a &quot;Entrar amb Google&quot; a dalt.
          </p>
        </div>
      ) : (
        /* Rànquing del Grup */
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Classificació i Avenços en Temps Real ({groupProfiles.length} opositors)</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {groupProfiles.map((member, index) => {
              const isMe = member.uid === user.uid;
              const isResetSynced = member.statsResetEpoch === STATS_RESET_EPOCH;
              const streakDays = isResetSynced ? member.streakDays || 0 : 0;
              const todayMin = isResetSynced ? member.pomodoroTodayMinutes ?? member.todayMinutes ?? 0 : 0;
              const totalMin = isResetSynced ? member.pomodoroTotalMinutes ?? member.totalMinutes ?? 0 : 0;
              const quizAvg = isResetSynced ? member.quizAverage ?? member.averageQuiz ?? 0 : 0;
              const correctCount = isResetSynced ? member.totalCorrectAnswers || 0 : 0;
              const firstRoundDone = Boolean(
                member.firstRoundCompleted || (member.completedTopics || 0) >= (member.totalTopics || topicsCount)
              );
              const fullRounds = member.fullRoundsCompleted || (firstRoundDone ? 1 : 0);
              const earnedMilestones = ACCURACY_MILESTONES.filter((m) => correctCount >= m.target);
              const nextMilestone = ACCURACY_MILESTONES.find((m) => correctCount < m.target);

              return (
                <div
                  key={member.uid || member.id}
                  className={`rounded-2xl border p-5 transition-all ${
                    isMe
                      ? 'border-red-300 dark:border-red-800 bg-white dark:bg-slate-900 shadow-sm ring-1 ring-red-500/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-sm ${
                          index === 0
                            ? 'bg-amber-400 text-slate-950'
                            : index === 1
                            ? 'bg-slate-300 text-slate-900'
                            : index === 2
                            ? 'bg-amber-700 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        #{index + 1}
                      </div>

                      {member.photoURL ? (
                        <img
                          src={member.photoURL}
                          alt={member.displayName}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-extrabold text-slate-700 dark:text-slate-200">
                          {(member.displayName || 'O')[0].toUpperCase()}
                        </div>
                      )}

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-extrabold text-slate-900 dark:text-white">
                            {member.displayName}
                          </h3>
                          {isMe && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-red-600 text-white">
                              TU
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Última activitat: {member.lastActiveDate || 'Recent'}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs">
                      <div className="text-center px-2">
                        <div className="font-extrabold text-base text-slate-900 dark:text-white">
                          {(quizAvg / 10).toFixed(1)}/10
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Nota ({quizAvg}%)
                        </div>
                      </div>

                      <div className="text-center px-2">
                        <div className="font-extrabold text-base text-orange-600 dark:text-orange-400 flex items-center justify-center gap-1">
                          <Flame className="w-4 h-4" />
                          <span>{streakDays}d</span>
                        </div>
                        <div className="text-[11px] text-slate-500">Ratxa</div>
                      </div>

                      <div className="text-center px-2">
                        <div className="font-extrabold text-base text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{todayMin}m</span>
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Avui ({totalMin}m tot)
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Distintius de volta completada i fites d'encerts (sense exposar % del temari) */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                    {firstRoundDone ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 px-3 py-1 text-[11px] font-extrabold text-emerald-800 dark:text-emerald-300">
                        <Award className="w-3.5 h-3.5" />
                        <span>
                          {fullRounds >= 2 ? `${fullRounds}a Volta Finalitzada` : '1a Volta Finalitzada'}
                        </span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                        <Award className="w-3.5 h-3.5 text-slate-400" />
                        <span>En preparació (1a volta)</span>
                      </span>
                    )}

                    {earnedMilestones.map((m) => (
                      <span
                        key={m.target}
                        className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-extrabold ${m.cls}`}
                      >
                        <span>{m.icon}</span>
                        <span>{m.label}</span>
                      </span>
                    ))}

                    {nextMilestone && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 px-2.5 py-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        <span>🎯 {correctCount} / {nextMilestone.target} encerts</span>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Historial Personal del Repàs del Dia */}
      {user && (
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-500" />
                <span>El teu Historial del Repàs del Dia</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Evolució diària d&apos;encerts i errors a les 36 preguntes compartides (44 els divendres).
              </p>
            </div>
            <span className="text-xs font-extrabold text-slate-500 dark:text-slate-400">
              {dailyEntries.length} dies registrats
            </span>
          </div>

          {dailyEntries.length === 0 ? (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Encara no has respost cap Repàs del Dia amb aquest compte. Quan en comencis un, veuràs aquí els teus encerts i errors de cada dia.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {dailyEntries.map((entry) => {
                const total = entry.total || entry.answered || 36;
                const correct = entry.correct || 0;
                const wrong = entry.wrong ?? Math.max(0, (entry.answered || 0) - correct);
                const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
                return (
                  <div
                    key={entry.dateISO}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-3.5 space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span className="text-slate-800 dark:text-slate-200">{entry.dateISO}</span>
                      <span className={pct >= 70 ? 'text-emerald-600' : pct >= 50 ? 'text-amber-600' : 'text-red-600'}>
                        {pct}% ({correct}/{total})
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-emerald-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="text-emerald-600 dark:text-emerald-400">✓ {correct} encertades</span>
                      <span className="text-red-600 dark:text-red-400">✗ {wrong} fallades</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
