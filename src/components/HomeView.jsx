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
  CheckCircle2
} from 'lucide-react';

export default function HomeView({
  topicsCount = 34,
  dueReviewsCount = 0,
  cloudUser = null,
  onSignIn,
  onNavigate
}) {
  const sections = [
    {
      id: 'topic',
      title: 'Temari Oficial (34 Temes)',
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
      title: 'Manuals Oficials (PDF) i Subratllat',
      badge: '35 PDFs',
      description:
        'Visualitza online o descarrega els 34 manuals oficials i el Codi Fonètic. Subratlla en línia recta, afegeix notes per pàgina, gira documents i exporta el PDF anotat.',
      cta: 'Obrir Manuals PDF',
      icon: FolderOpen,
      accent: 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/50 text-rose-700 dark:text-rose-300',
      btn: 'bg-rose-600 hover:bg-rose-700 text-white'
    },
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
    }
  ];

  return (
    <div className="space-y-6">
      {/* Capçalera principal */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white via-red-50/40 to-amber-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-red-950/20 p-6 sm:p-8 shadow-sm">
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
      </section>

      {/* Bloc d'Iniciar Sessió per guardar avanç i rebre notificacions */}
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
            Gestionar compte i grup
          </button>
        </div>
      ) : (
        <div className="rounded-2xl border-2 border-red-200 dark:border-red-900/60 bg-white dark:bg-slate-900 p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <LogIn className="w-4 h-4 text-red-600" />
              <span>Inicia sessió per desar el teu avanç</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Si inicies sessió amb Google, tot el teu progrés, voltes, tests i subratllats es guardaran al núvol entre dispositius i podràs rebre les notificacions diàries de què et toca estudiar segons la corba de l&apos;oblit.
            </p>
          </div>
          <button
            onClick={onSignIn}
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-5 py-3 text-xs sm:text-sm font-extrabold shadow-sm transition"
          >
            <LogIn className="w-4 h-4" />
            <span>Iniciar Sessió amb Google</span>
          </button>
        </div>
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
