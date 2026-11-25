import React from 'react';
import {
  BookOpen,
  FolderOpen,
  Calendar,
  Clock,
  AlertTriangle,
  Calculator,
  Lightbulb,
  BarChart3,
  Users,
  ArrowRight,
  Flame,
  LogIn,
  CheckCircle2,
  ClipboardCheck,
  Newspaper,
  XCircle,
  GraduationCap
} from 'lucide-react';
import { getTodayCurrentAffairsQuestion } from '../data/dailyCurrentAffairsQuestions';

export default function HomeView({
  topicsCount = 34,
  dueReviewsCount = 0,
  dueMistakesCount = 0,
  dailyReviewStatus = null,
  onOpenDailyReview = null,
  dailyNewsHistory = {},
  onSaveDailyNewsState = null,
  cloudUser = null,
  onSignIn,
  onNavigate,
  onOpenTopic,
  onRecordQuestionOutcome,
  calendarElement = null
}) {
  const todayISO = React.useMemo(() => {
    try {
      return new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Europe/Madrid',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(new Date());
    } catch {
      return new Date().toISOString().slice(0, 10);
    }
  }, []);

  const [dailyOffset, setDailyOffset] = React.useState(0);
  const dailyQuestion = React.useMemo(
    () => getTodayCurrentAffairsQuestion(todayISO, dailyOffset),
    [todayISO, dailyOffset]
  );
  const storageKey = `bombers_daily_q_${todayISO}_${dailyQuestion.id}`;
  const cloudDailyEntry = dailyNewsHistory?.[todayISO] || null;
  const cloudSelectedOpt = cloudDailyEntry?.answers?.[dailyQuestion.id];

  const [selectedDailyOpt, setSelectedDailyOpt] = React.useState(() => {
    if (typeof cloudSelectedOpt === 'number') return cloudSelectedOpt;
    try {
      const saved = localStorage.getItem(storageKey);
      return saved !== null ? Number(saved) : null;
    } catch {
      return null;
    }
  });

  React.useEffect(() => {
    if (typeof cloudSelectedOpt === 'number') {
      setSelectedDailyOpt(cloudSelectedOpt);
      try {
        localStorage.setItem(storageKey, String(cloudSelectedOpt));
      } catch {}
      return;
    }
    try {
      const saved = localStorage.getItem(storageKey);
      setSelectedDailyOpt(saved !== null ? Number(saved) : null);
    } catch {
      setSelectedDailyOpt(null);
    }
  }, [storageKey, cloudSelectedOpt]);

  const hiddenKey = `bombers_daily_q_hidden_${todayISO}`;
  const [isDailyHidden, setIsDailyHidden] = React.useState(() => {
    if (cloudDailyEntry?.hidden || typeof cloudSelectedOpt === 'number') return true;
    try {
      return localStorage.getItem(hiddenKey) === '1' || localStorage.getItem(storageKey) !== null;
    } catch {
      return false;
    }
  });

  const justAnsweredRef = React.useRef(false);

  React.useEffect(() => {
    if (cloudDailyEntry?.hidden || (typeof cloudSelectedOpt === 'number' && !justAnsweredRef.current)) {
      setIsDailyHidden(true);
    }
  }, [cloudDailyEntry?.hidden, cloudSelectedOpt]);

  const handleAnswerDaily = (optIdx) => {
    if (selectedDailyOpt !== null) return;
    justAnsweredRef.current = true;
    setSelectedDailyOpt(optIdx);
    try {
      localStorage.setItem(storageKey, String(optIdx));
    } catch {}
    if (typeof onSaveDailyNewsState === 'function') {
      onSaveDailyNewsState(todayISO, {
        answers: { [dailyQuestion.id]: optIdx }
      });
    }
    if (typeof onRecordQuestionOutcome === 'function') {
      const isCorrect = optIdx === dailyQuestion.correctIndex;
      const tNum = Number(String(dailyQuestion.topicId || '').replace('tema-', '')) || null;
      onRecordQuestionOutcome(dailyQuestion.topicId, tNum, dailyQuestion, isCorrect);
    }
  };

  const handleDismissDaily = () => {
    setIsDailyHidden(true);
    try {
      localStorage.setItem(hiddenKey, '1');
    } catch {}
    if (typeof onSaveDailyNewsState === 'function') {
      onSaveDailyNewsState(todayISO, { hidden: true });
    }
  };
  const sections = [
    {
      id: 'calendar',
      title: 'Calendari i Corba de l’Oblit',
      badge: dueReviewsCount > 0 ? `${dueReviewsCount} pendents` : 'Al dia',
      description:
        'Planificació espaiada basada en la corba d’Ebbinghaus (1, 3, 7, 15 i 30 dies) i bloc de càlculs els divendres per consolidar la memòria a llarg termini.',
      cta: 'Veure Calendari',
      icon: Calendar,
      accent: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300',
      btn: 'bg-indigo-600 hover:bg-indigo-700 text-white'
    },
    {
      id: 'topic',
      title: 'Temari resumit per estudiar (34 Temes)',
      badge: `${topicsCount} temes`,
      description:
        'Cada tema inclou esquema complet en primera pàgina, resums d’estudi estructurats, explicacions senzilles, diagrames visuals, mnemotècnies i qüestionaris tipus Generalitat.',
      cta: 'Anar al Temari',
      icon: BookOpen,
      accent: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300',
      btn: 'bg-red-600 hover:bg-red-700 text-white'
    },
    {
      id: 'manuals',
      title: 'Manuals Oficials (PDF)',
      badge: '34 PDFs',
      description:
        'Visualitza online o descarrega els 34 manuals oficials. Afegeix notes per pàgina, gira documents i exporta el PDF anotat.',
      cta: 'Obrir Manuals PDF',
      icon: FolderOpen,
      accent: 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/50 text-rose-700 dark:text-rose-300',
      btn: 'bg-rose-600 hover:bg-rose-700 text-white'
    },
    {
      id: 'quickstudy',
      title: 'Sessió Ràpida (5–45 min)',
      badge: 'Adaptatiu',
      description:
        'Mode de repàs cronometrat que selecciona pàgines pendents sense repetir les ja vistes recentment, prioritzant les que hagis marcat com a complicades.',
      cta: 'Iniciar Sessió Ràpida',
      icon: Clock,
      accent: 'bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900/50 text-orange-700 dark:text-orange-300',
      btn: 'bg-orange-600 hover:bg-orange-700 text-white'
    },
    {
      id: 'keypoints',
      title: 'Punts Clau, Làmines Suro i Confusions',
      badge: 'PDF + Suro',
      description:
        'Fitxes de punts clau en format oficial (individual o tots els temes en un sol PDF), làmines visuals grans per imprimir i detector de conceptes trampa.',
      cta: 'Obrir Punts Clau',
      icon: AlertTriangle,
      accent: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50 text-amber-800 dark:text-amber-300',
      btn: 'bg-amber-500 hover:bg-amber-600 text-slate-950'
    },
    {
      id: 'practice',
      title: 'Tests Lliures i Simulacre Oficial',
      badge: '70+7 · 85 min',
      description:
        'Mode Pràctica (sense temps, escollint temes i preguntes) o Simulacre Oficial de 70 preguntes + 7 de reserva en 85 minuts ponderat estadísticament per importància de tema.',
      cta: 'Fer Test o Simulacre',
      icon: ClipboardCheck,
      accent: 'bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-900/50 text-sky-700 dark:text-sky-300',
      btn: 'bg-sky-600 hover:bg-sky-700 text-white'
    },
    {
      id: 'calculations',
      title: 'Càlculs, Fórmules i Problemes',
      badge: '5 blocs',
      description:
        'Entrenament guiat de problemes d’examen: hidràulica (Venturi, pèrdues de càrrega), física, electricitat, cartografia i càlculs operatius.',
      cta: 'Practicar Càlculs',
      icon: Calculator,
      accent: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50 text-blue-700 dark:text-blue-300',
      btn: 'bg-blue-600 hover:bg-blue-700 text-white'
    },
    {
      id: 'mnemonics',
      title: 'Regles Mnemotècniques i Codi Fonètic',
      badge: 'Memòria',
      description:
        'Recull de totes les regles mnemotècniques, acrònims i el Codi Fonètic Major (0–100) enllaçats directament amb la pàgina de cada tema.',
      cta: 'Explorar Trucs',
      icon: Lightbulb,
      accent: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-900/50 text-purple-700 dark:text-purple-300',
      btn: 'bg-purple-600 hover:bg-purple-700 text-white'
    },
    {
      id: 'dashboard',
      title: 'Seguiment i Estadístiques',
      badge: 'Progrés',
      description:
        'Controla el percentatge de temari dominat, les rondes completades, el temps total d’estudi amb Pomodoro i l’evolució dels tests.',
      cta: 'Veure Estadístiques',
      icon: BarChart3,
      accent: 'bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200',
      btn: 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
    },
    {
      id: 'group',
      title: 'Grup d’Estudi i Rànquing',
      badge: 'Núvol',
      description:
        'Desa el teu progrés al núvol amb el teu compte i compara voltes, hores d’estudi i puntuacions amb els companys del grup.',
      cta: 'Obrir Grup',
      icon: Users,
      accent: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-300',
      btn: 'bg-emerald-600 hover:bg-emerald-700 text-white'
    },
    {
      id: 'classes',
      title: 'Classes Particulars i Conjuntes',
      badge: '10€–40€ · 25€ grup',
      description:
        'Reserva classes particulars (15 min 10 €, 30 min 20 €, 1 h 40 €) escollint tema, subapartat i comentari, o uneix-te a classes conjuntes (mínim 4 persones · 2 h · 25 €).',
      cta: 'Veure Classes',
      icon: GraduationCap,
      accent: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300',
      btn: 'bg-indigo-600 hover:bg-indigo-700 text-white'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Capçalera principal amb l'inici de sessió integrat */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white via-red-50/40 to-amber-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-red-950/20 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <img
            src="./icons/icon-192.png"
            alt="Logo Estudi Bombers"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-lg shadow-red-600/20 object-cover shrink-0"
          />
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-red-100 dark:bg-red-950/60 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-red-700 dark:text-red-300">
              <Flame className="w-3.5 h-3.5" />
              <span>Bombers Generalitat · Temari Oficial SGO 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Benvingut a la Plataforma d&apos;Estudi
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Tria l&apos;apartat on vols treballar avui. Quan actualitzis la pàgina, tornaràs automàticament al mateix lloc on estaves.
            </p>
          </div>
        </div>

        {/* Bloc d'Iniciar Sessió integrat dins la benvinguda */}
        {cloudUser ? (
          <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/80 dark:bg-emerald-950/30 p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <p className="text-sm font-extrabold text-emerald-950 dark:text-emerald-200">
                  Sessió iniciada com a {cloudUser.displayName || cloudUser.email}
                </p>
                <p className="text-xs text-emerald-800 dark:text-emerald-300">
                  El teu avanç es guarda automàticament al núvol i tens actives les notificacions de la corba de l&apos;oblit.
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('group')}
              className="rounded-xl border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-slate-900 px-3.5 py-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100/60"
            >
              Parc de Bombers (Perfil)
            </button>
          </div>
        ) : (
          <div className="rounded-2xl border border-red-200 dark:border-red-900/60 bg-white/90 dark:bg-slate-900/90 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <LogIn className="w-4 h-4 text-red-600" />
                <span>Inicia sessió per desar el teu avanç</span>
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Si inicies sessió amb Google, tot el teu progrés, voltes, tests i anotacions es guardaran al núvol entre dispositius.
              </p>
            </div>
            <button
              onClick={onSignIn}
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 text-xs sm:text-sm font-extrabold shadow-sm transition"
            >
              <LogIn className="w-4 h-4" />
              <span>Iniciar Sessió amb Google</span>
            </button>
          </div>
        )}
      </section>

      {/* Repàs del Dia (1 pregunta de cada tema + 2 càlculs / 10 divendres) */}
      {dailyReviewStatus && onOpenDailyReview && (
        <section className="rounded-2xl border-2 border-red-300 dark:border-red-900/70 bg-gradient-to-r from-red-50 via-white to-orange-50/60 dark:from-red-950/40 dark:via-slate-900 dark:to-orange-950/20 p-4 sm:p-5 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-700 dark:text-red-300">
                  Repàs del Dia · {dailyReviewStatus.isFriday ? 'Divendres (34 + 10 càlculs)' : '34 temes + 2 càlculs'}
                </span>
                <span className="rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-2 py-0.5 text-[10px] font-extrabold">
                  {dailyReviewStatus.answered}/{dailyReviewStatus.total}
                </span>
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                {dailyReviewStatus.completed
                  ? 'Repàs d’avui completat ✓ (es reinicia a les 00:00)'
                  : '1 pregunta nova de cada tema + càlculs diaris per no oblidar res del temari.'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenDailyReview}
            className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 text-xs font-extrabold shadow-sm"
          >
            <span>
              {dailyReviewStatus.completed
                ? 'Veure resum d’avui'
                : dailyReviewStatus.answered > 0
                ? 'Continuar Repàs del Dia →'
                : 'Començar Repàs del Dia →'}
            </span>
          </button>
        </section>
      )}

      {/* Avís diari de preguntes fallades pendents de repassar (Regla de l'Oblit) */}
      {dueMistakesCount > 0 && (
        <section className="rounded-2xl border border-rose-300 dark:border-rose-900/70 bg-gradient-to-r from-rose-50 via-white to-amber-50/50 dark:from-rose-950/40 dark:via-slate-900 dark:to-amber-950/20 p-4 sm:p-5 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-300">
                Avís diari · Regla de l&apos;Oblit
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Avui tens {dueMistakesCount} {dueMistakesCount === 1 ? 'pregunta fallada pendent' : 'preguntes fallades pendents'} de repassar!
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('practice')}
            className="inline-flex items-center gap-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 text-xs font-extrabold shadow-xs"
          >
            <span>Repassar preguntes pendents</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>
      )}

      {/* Calendari complet integrat directament sota el títol */}
      {calendarElement}

      {/* Pregunta del Dia (Actualitat, Serveis i Temari) - desapareix un cop completada avui */}
      {!isDailyHidden && (
      <section className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-amber-950/20 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-950/70 px-3 py-1 text-xs font-extrabold text-amber-800 dark:text-amber-300">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Pregunta del Dia · {dailyQuestion.tag}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
              {todayISO}
            </span>
            <button
              type="button"
              onClick={() => setDailyOffset((d) => d + 1)}
              className="rounded-lg border border-amber-300 dark:border-amber-800 bg-white/80 dark:bg-slate-900 px-2.5 py-1 text-[11px] font-extrabold text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-950/50 transition"
            >
              Següent notícia →
            </button>
          </div>
        </div>

        {(dailyQuestion.newsTitle || dailyQuestion.context) && (
          <div className="bg-white/85 dark:bg-slate-800/70 border border-amber-200/80 dark:border-slate-700 rounded-xl px-4 py-3 space-y-1">
            {dailyQuestion.newsTitle && (
              <div className="text-xs sm:text-sm font-extrabold text-amber-900 dark:text-amber-300">
                📰 Notícia / Actualització: {dailyQuestion.newsTitle}
              </div>
            )}
            {dailyQuestion.context && (
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {dailyQuestion.context}
              </p>
            )}
          </div>
        )}

        <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
          {dailyQuestion.question}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {dailyQuestion.options.map((opt, idx) => {
            const answered = selectedDailyOpt !== null;
            const isSelected = selectedDailyOpt === idx;
            const isCorrect = idx === dailyQuestion.correctIndex;
            let btnClass =
              'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/70 hover:border-amber-400 dark:hover:border-amber-600 text-slate-800 dark:text-slate-200';
            if (answered) {
              if (isCorrect) {
                btnClass =
                  'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200';
              } else if (isSelected) {
                btnClass =
                  'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
              } else {
                btnClass =
                  'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 text-slate-400 dark:text-slate-500';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={answered}
                onClick={() => handleAnswerDaily(idx)}
                className={`text-left rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm font-medium transition flex items-start gap-2.5 ${btnClass}`}
              >
                <span className="font-extrabold shrink-0">
                  {String.fromCharCode(65 + idx)}.
                </span>
                <span className="flex-1">{opt}</span>
                {answered && isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                )}
                {answered && isSelected && !isCorrect && (
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {selectedDailyOpt !== null && (
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 space-y-2">
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong className={selectedDailyOpt === dailyQuestion.correctIndex ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}>
                {selectedDailyOpt === dailyQuestion.correctIndex ? 'Correcte! ' : 'Incorrecte. '}
              </strong>
              {dailyQuestion.explanation}
            </p>
            {dailyQuestion.howItAffectsUs && (
              <div className="rounded-lg bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 px-3 py-2 text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong className="text-amber-900 dark:text-amber-300">🚒 Com ens afecta com a bombers i estudiants: </strong>
                {dailyQuestion.howItAffectsUs}
              </div>
            )}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              {typeof onOpenTopic === 'function' && dailyQuestion.topicId ? (
                <button
                  type="button"
                  onClick={() => onOpenTopic(dailyQuestion.topicId)}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-red-600 dark:text-red-400 hover:underline"
                >
                  <span>Repassar {dailyQuestion.topicLabel || dailyQuestion.topicId}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : <span />}
              <button
                type="button"
                onClick={handleDismissDaily}
                className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 text-xs font-extrabold shadow-xs"
              >
                Completada · Amagar fins demà ✓
              </button>
            </div>
          </div>
        )}
      </section>
      )}

      {/* Repàs del Dia (1 pregunta de cada tema + 2 càlculs / 10 divendres) */}
      {dailyReviewStatus && onOpenDailyReview && (
        <section className="rounded-2xl border-2 border-red-300 dark:border-red-900/70 bg-gradient-to-r from-red-50 via-white to-orange-50/60 dark:from-red-950/40 dark:via-slate-900 dark:to-orange-950/20 p-4 sm:p-5 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-700 dark:text-red-300">
                  Repàs del Dia · {dailyReviewStatus.isFriday ? 'Divendres (34 + 10 càlculs)' : '34 temes + 2 càlculs'}
                </span>
                <span className="rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-2 py-0.5 text-[10px] font-extrabold">
                  {dailyReviewStatus.answered}/{dailyReviewStatus.total}
                </span>
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                {dailyReviewStatus.completed
                  ? 'Repàs d’avui completat ✓ (es reinicia a les 00:00)'
                  : '1 pregunta nova de cada tema + càlculs diaris per no oblidar res del temari.'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenDailyReview}
            className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 text-xs font-extrabold shadow-sm"
          >
            <span>
              {dailyReviewStatus.completed
                ? 'Veure resum d’avui'
                : dailyReviewStatus.answered > 0
                ? 'Continuar Repàs del Dia →'
                : 'Començar Repàs del Dia →'}
            </span>
          </button>
        </section>
      )}

      {/* Avís diari de preguntes fallades pendents de repassar (Regla de l'Oblit) */}
      {dueMistakesCount > 0 && (
        <section className="rounded-2xl border border-rose-300 dark:border-rose-900/70 bg-gradient-to-r from-rose-50 via-white to-amber-50/50 dark:from-rose-950/40 dark:via-slate-900 dark:to-amber-950/20 p-4 sm:p-5 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-300">
                Avís diari · Regla de l&apos;Oblit
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Avui tens {dueMistakesCount} {dueMistakesCount === 1 ? 'pregunta fallada pendent' : 'preguntes fallades pendents'} de repassar!
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('practice')}
            className="inline-flex items-center gap-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 text-xs font-extrabold shadow-xs"
          >
            <span>Repassar preguntes pendents</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>
      )}

      {/* Resum de funcions principals de l'app */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-3">
        <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
          Què pots fer amb aquesta aplicació?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-300">
          <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-100 dark:border-slate-800">
            <strong className="text-slate-900 dark:text-white block mb-1">1. Estudi guiat per la Corba de l&apos;Oblit</strong>
            Planifica voltes automàtiques (1, 3, 7, 15 i 30 dies) i rep recordatoris diaris per correu amb els temes que et toquen avui.
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-100 dark:border-slate-800">
            <strong className="text-slate-900 dark:text-white block mb-1">2. Manuals PDF amb subratllat online</strong>
            Llegeix els 34 manuals oficials, subratlla en línia recta, afegeix notes per pàgina i descarrega el PDF anotat.
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-100 dark:border-slate-800">
            <strong className="text-slate-900 dark:text-white block mb-1">3. Punts Clau i Làmines per al suro</strong>
            Descarrega tots els punts clau en format oficial per imprimir o visualitza les làmines grans (motors, electricitat, Glasgow, Douglas, ICAO...).
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-100 dark:border-slate-800">
            <strong className="text-slate-900 dark:text-white block mb-1">4. Tests tipus Generalitat i Càlculs</strong>
            Entrena amb preguntes d&apos;estil examen oficial i resol problemes d&apos;hidràulica, física i electricitat pas a pas.
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-100 dark:border-slate-800">
            <strong className="text-slate-900 dark:text-white block mb-1">5. Sessió Ràpida (5–45 min)</strong>
            Repassa pàgines sense repetir les recents, prioritzant automàticament les que hagis marcat com a complicades.
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-100 dark:border-slate-800">
            <strong className="text-slate-900 dark:text-white block mb-1">6. Pomodoro, Mnemotècnies i Grup</strong>
            Registra les teves hores reals d&apos;estudi, domina el Codi Fonètic Major i compara el progrés amb els companys.
          </div>
        </div>
      </section>

      {/* Graella d'apartats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <div
              key={sec.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-red-300 dark:hover:border-red-800 transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border ${sec.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {sec.badge}
                  </span>
                </div>

                <h2 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                  {sec.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {sec.description}
                </p>
              </div>

              <button
                onClick={() => onNavigate(sec.id)}
                className={`mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-extrabold shadow-sm transition ${sec.btn}`}
              >
                <span>{sec.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
