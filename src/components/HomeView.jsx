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
  Flame
} from 'lucide-react';

export default function HomeView({
  topicsCount = 34,
  dueReviewsCount = 0,
  onNavigate
}) {
  const sections = [
    {
      id: 'topic',
      title: 'Temari Oficial (34 Temes)',
      badge: `${topicsCount} temes`,
      description:
        'Cada tema inclou esquema complet en primera pàgina, resum estil OPOCast, explicacions senzilles, diagrames visuals, mnemotècnies i qüestionaris tipus Generalitat.',
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
