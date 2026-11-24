import React, { useState } from 'react';
import { Zap, Filter, CheckCircle2, XCircle, Calculator, ArrowRight } from 'lucide-react';

const BLOCK_TRICKS = [
  {
    id: 't11',
    badge: 'T11 · Electricitat',
    color: 'amber',
    rows: [
      {
        problem: 'Resistències en paral·lel (R₁ || R₂)',
        fastTrick: 'La R_eq és SEMPRE més petita que la resistència més petita. Si són iguals: R ÷ 2. Si una és el doble (R i 2R): ⅔·R.',
        discardRule: 'Si tens 12 Ω i 24 Ω en paral·lel, descarta qualsevol opció ≥ 12 Ω al moment! (12 × ⅔ = 8 Ω).',
        example: '12 Ω || 24 Ω → més petita que 12 → 8 Ω (en 2 segons).'
      },
      {
        problem: 'Resistències en sèrie (R₁ + R₂)',
        fastTrick: 'La R_total és la suma directa (més gran que la més gran). La resistència més gran s’emporta més volts.',
        discardRule: 'Descarta qualsevol opció més petita que la resistència major o on la R petita tingui més caiguda de tensió.',
        example: '4 Ω + 8 Ω a 24 V → R_tot = 12 Ω → I = 2 A → V₁ = 8 V, V₂ = 16 V.'
      },
      {
        problem: 'Efecte Joule i Potència (Q = I²·R·t)',
        fastTrick: 'La intensitat va al QUADRAT: si dobles I (×2), la calor i la potència es multipliquen per 4.',
        discardRule: 'Descarta opcions que només multipliquin I·R·t sense elevar I al quadrat.',
        example: 'I = 5 A, R = 2 Ω, t = 100 s → 25 × 2 × 100 = 5.000 J (5 kJ).'
      },
      {
        problem: 'CA Monofàsica (P = V·I·cos φ)',
        fastTrick: 'Memoritza 2 parelles d’or: 230 × 0,8 = 184 i 230 × 0,9 = 207!',
        discardRule: 'Descarta el resultat de dividir P ÷ 230 sense el cos(φ): amb cos φ < 1, la intensitat sempre és MÉS GRAN que P ÷ 230.',
        example: '1.840 W a 230 V (cos φ = 0,8) → 1.840 ÷ 184 = 10 A.'
      },
      {
        problem: 'Transformadors (V₁/V₂ = N₁/N₂)',
        fastTrick: 'Mira el factor de reducció de voltatge: les espires baixen igual, però la intensitat puja en la mateixa proporció.',
        discardRule: 'Si el voltatge baixa de 20.000 V a 400 V (÷50), el secundari té 50× menys espires (no 50× més!).',
        example: '20.000 V → 400 V (÷50): si N₂ = 40 espires → N₁ = 40 × 50 = 2.000 espires.'
      }
    ]
  },
  {
    id: 't9',
    badge: 'T9 · Física i Mecànica',
    color: 'blue',
    rows: [
      {
        problem: 'Conversió km/h ↔ m/s',
        fastTrick: 'Taula fixa: 10 m/s = 36 km/h | 15 m/s = 54 km/h | 20 m/s = 72 km/h | 25 m/s = 90 km/h | 30 m/s = 108 km/h.',
        discardRule: 'En m/s el número sempre és 3,6 vegades MÉS PETIT que en km/h.',
        example: '72 km/h durant 15 s → 20 m/s × 15 s = 300 m.'
      },
      {
        problem: 'Frenada en dos trams (de v₀ a v₁ en d₁)',
        fastTrick: 'Si frena fins a la MEITAT de la velocitat (ex. 20 → 10 m/s), per aturar-se del tot li falta exactament 1/3 de la distància feta!',
        discardRule: 'Descarta la meitat o la mateixa distància: com que v² baixa de 4 a 1 (ha perdut 3 parts), només li queda 1 part de 3!',
        example: 'De 20 a 10 m/s en 30 m → li falten 30 ÷ 3 = 10 m.'
      },
      {
        problem: 'Energia cinètica (Ec = ½·m·v²)',
        fastTrick: 'Si dobles la velocitat (×2), l’energia es multiplica per 4. Si la triples (×3), es multiplica per 9.',
        discardRule: 'Descarta opcions on en doblar velocitat l’energia només es dobli.',
        example: '1.000 kg a 10 m/s = 50 kJ; a 20 m/s = 200 kJ (×4).'
      },
      {
        problem: 'Polispasts ideals (n:1) i Palanques',
        fastTrick: 'Força = Càrrega ÷ n. En palanca, el braç més llarg fa menys força en la mateixa proporció.',
        discardRule: 'Descarta qualsevol força aplicada més gran que la càrrega quan tens avantatge mecànic.',
        example: '1.200 N amb polispast 4:1 → 300 N (però reculls 4 m de corda per pujar 1 m).'
      },
      {
        problem: 'Autoescala i trigonometria',
        fastTrick: 'sin 30° = 0,5 (la meitat!) | sin 45° ≈ 0,7 | sin 60° ≈ 0,87. Suma SEMPRE l’alçada de la torreta (~2 m)!',
        discardRule: 'Descarta el resultat pur de L·sin(α) si l’enunciat indica l’alçada de la base giratòria.',
        example: '20 m a 30° + 2 m torreta → (20 × 0,5) + 2 = 12 m.'
      }
    ]
  },
  {
    id: 't10',
    badge: 'T10 · Química, Gasos i ERA',
    color: 'emerald',
    rows: [
      {
        problem: 'Autonomia útil d’ampolla ERA',
        fastTrick: 'Aire útil = Volum × (Pressió - Reserva). Truc: 6 L × 250 bar útils = 1.500 L (a 50 L/min = 30 min).',
        discardRule: 'Si demanen temps fins a reserva, descarta el càlcul que multiplica pels 300 bar complets!',
        example: '6,8 L a 300 bar (reserva 50 bar) a 50 L/min → 6,8 × 250 ÷ 50 = 34 min.'
      },
      {
        problem: 'Lleis dels gasos amb °C (Charles / Gay-Lussac)',
        fastTrick: 'Passa a Kelvin (+273): 0 °C = 273 K | 27 °C = 300 K | 127 °C = 400 K | 327 °C = 600 K!',
        discardRule: 'De 27 °C a 327 °C la pressió NO es multiplica per 12: en Kelvin passa de 300 a 600 K → només es DOBLA (×2)!',
        example: '2,0 bar a 27 °C (300 K) → a 327 °C (600 K) = 4,0 bar.'
      },
      {
        problem: 'Cilindre amb tram fix + mòbil (Boyle)',
        fastTrick: 'Suma el tram fix als dos volums abans de fer P₁·V₁ = P₂·V₂.',
        discardRule: 'Descarta la proporció directa només del tram mòbil (si passa de 100 a 40 mL amb 20 fixos: 120 → 60, es DOBLA, no ×2,5!).',
        example: '20 fix + 100 mòbil (120) → 20 + 40 (60): 1,20 bar → 2,40 bar.'
      },
      {
        problem: 'Volum de gasos en CN (0 °C, 1 atm)',
        fastTrick: '1 mol = 22,4 L. Masses molars típiques: CH₄ = 16 | N₂ = 28 | O₂ = 32 | CO₂ = 44.',
        discardRule: 'Si tens 2 mols = 44,8 L; 4 mols = 89,6 L. Descarta valors múltiples de 24 si és CN.',
        example: '64 g de metà (64 ÷ 16 = 4 mols) → 4 × 22,4 = 89,6 L.'
      },
      {
        problem: 'Estequiometria i reactiu limitant',
        fastTrick: 'Mira quina proporció demana la fórmula (ex. X₂Y = 2 de X per 1 de Y). El que s’acaba primer mana!',
        discardRule: 'En combustió completa sense sobrants, massa productes = massa combustible + massa O₂ consumit (Lavoisier).',
        example: '0,70 mol X + 0,45 mol Y → X₂Y gasta 0,35 Y → sobren 0,10 mol Y.'
      }
    ]
  },
  {
    id: 't13',
    badge: 'T13 · Hidràulica i Bombes',
    color: 'cyan',
    rows: [
      {
        problem: 'Pressió necessària en bomba',
        fastTrick: 'Regla d’or: 10 m d’alçada = 1 bar (1 m = 0,1 bar). Suma: P_llança + P_alçada + P_pèrdues.',
        discardRule: 'En pujada, la pressió en bomba ha de ser SEMPRE més gran que P_llança. Descarta opcions ≤ P_llança!',
        example: '6 bar en punta + 15 m alçada (1,5 bar) + 1,2 bar pèrdues = 8,7 bar.'
      },
      {
        problem: 'Doble línia en paral·lel (mateix cabal Q)',
        fastTrick: '2 línies iguals divideixen la pèrdua de càrrega per 4 (÷4), NO per 2! (perquè J ∝ Q²).',
        discardRule: 'Descarta la meitat (÷2) de la pèrdua original: és la trampa clàssica!',
        example: '2,4 bar en una línia → amb 2 línies en paral·lel = 2,4 ÷ 4 = 0,6 bar.'
      },
      {
        problem: 'Pressió dinàmica → Velocitat (Pd = ½·ρ·v²)',
        fastTrick: 'Amb aigua (ρ = 1.000): v² = Pd (en bar) × 200! Només has de fer l’arrel quadrada!',
        discardRule: 'No oblidis passar bar a Pa (×100.000) abans de dividir per 500.',
        example: '0,125 bar × 200 = 25 → √25 = 5 m/s!'
      },
      {
        problem: 'Continuïtat i canvi de diàmetre (Q = S·v)',
        fastTrick: 'Si la secció baixa a la meitat, velocitat ×2. Si el DIÀMETRE baixa a la meitat (ex. Ø70 → Ø35), velocitat ×4!',
        discardRule: 'Vigila si l’enunciat diu "meitat de secció" (×2) o "meitat de diàmetre" (×4)!',
        example: 'Secció 4 cm² a 5 m/s → secció 2 cm² → 10 m/s.'
      },
      {
        problem: 'Escumogen i expansió d’escuma',
        fastTrick: 'Concentrat = % × Cabal total. Escuma = Cabal total × Índex d’expansió.',
        discardRule: 'Si et donen litres de garrafa (ex. 6 L al 3%), divideix 6 ÷ 0,03 = 200 L de mescla abans de multiplicar per l’expansió.',
        example: '400 L/min al 3% i exp. 1:10 → 12 L/min escumogen i 4.000 L/min escuma.'
      }
    ]
  },
  {
    id: 't14_t19',
    badge: 'T14 i T19 · Cartografia, Pendents i Conducció',
    color: 'rose',
    rows: [
      {
        problem: 'Escales de mapa (cm → metres reals)',
        fastTrick: 'Treu 2 zeros a l’escala i ja tens quants metres val 1 cm! 1:10.000 → 100 m | 1:25.000 → 250 m | 1:50.000 → 500 m.',
        discardRule: 'En 1:25.000 cada 4 cm és exactament 1 km! Descarta opcions que multipliquin malament els zeros.',
        example: '8 cm en 1:25.000 → 8 × 250 m = 2.000 m (2 km).'
      },
      {
        problem: 'Pendents en %',
        fastTrick: 'Pendent (%) = (Desnivell ÷ Distància horitzontal) × 100. Un 10% vol dir 10 m de desnivell cada 100 m.',
        discardRule: 'Si puges 150 m en 2.000 m → 150 ÷ 20 = 7,5%.',
        example: '500 m al 12% → 5 × 12 = 60 m de desnivell.'
      },
      {
        problem: 'Distància total de detenció',
        fastTrick: 'Detenció = Reacció (v·t_r) + Frenada (v² ÷ 2a). Calcula primer v en m/s!',
        discardRule: 'Descarta qualsevol opció que només inclogui la distància de frenada sense sumar el temps de reacció.',
        example: '72 km/h (20 m/s), t_r = 1 s, a = 5 m/s² → 20 + (400÷10) = 60 m.'
      },
      {
        problem: 'Força centrífuga en corbes (Fc = m·v²/R)',
        fastTrick: 'Si dobles la velocitat al revolt (30 → 60 km/h), la força centrífuga es multiplica per 4. Si la triples (30 → 90), per 9!',
        discardRule: 'Descarta el factor lineal (×2 o ×3): sempre va al quadrat!',
        example: 'De 40 a 80 km/h → factor 2 → 2² = 4 vegades més força.'
      }
    ]
  }
];

const COLOR_STYLES = {
  amber: 'border-amber-200 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200',
  blue: 'border-blue-200 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/20 text-blue-900 dark:text-blue-200',
  emerald: 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/70 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200',
  cyan: 'border-cyan-200 dark:border-cyan-900/60 bg-cyan-50/70 dark:bg-cyan-950/20 text-cyan-900 dark:text-cyan-200',
  rose: 'border-rose-200 dark:border-rose-900/60 bg-rose-50/70 dark:bg-rose-950/20 text-rose-900 dark:text-rose-200'
};

export default function CalcTricksView({ onOpenCalculations = null }) {
  const [filterId, setFilterId] = useState('all');

  const visibleBlocks =
    filterId === 'all' ? BLOCK_TRICKS : BLOCK_TRICKS.filter((b) => b.id === filterId);

  return (
    <div className="space-y-6">
      {/* Capçalera */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Recursos · Càlcul Mental d&apos;Examen</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Trucs per Calcular Ràpid i Descartar Opcions
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Taula visual amb les dreceres de tots els problemes matemàtics de l&apos;examen: què mirar primer per resoldre en segons sense calculadora i quines opcions pots eliminar a l&apos;instant.
            </p>
          </div>
          {onOpenCalculations && (
            <button
              type="button"
              onClick={onOpenCalculations}
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 text-xs font-extrabold shadow-sm transition"
            >
              <Calculator className="w-4 h-4" />
              <span>Practicar 240 problemes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filtres per bloc */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 mr-1">
            <Filter className="w-3.5 h-3.5" />
            Bloc:
          </span>
          <button
            type="button"
            onClick={() => setFilterId('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${
              filterId === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            Tots els blocs
          </button>
          {BLOCK_TRICKS.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setFilterId(b.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${
                filterId === b.id
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {b.badge}
            </button>
          ))}
        </div>
      </div>

      {/* Taules visuals per bloc */}
      {visibleBlocks.map((block) => (
        <div
          key={block.id}
          className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden"
        >
          <div className={`px-5 py-3.5 border-b font-extrabold text-sm flex items-center gap-2 ${COLOR_STYLES[block.color]}`}>
            <Zap className="w-4 h-4 shrink-0" />
            <span>{block.badge}</span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {block.rows.map((r, idx) => (
              <div key={idx} className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
                <div className="lg:col-span-3">
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    {r.problem}
                  </div>
                  <div className="mt-1.5 inline-block rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-[11px] font-bold text-slate-700 dark:text-slate-300">
                    Ex: {r.example}
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-2xl border border-emerald-200/80 dark:border-emerald-900/50 bg-emerald-50/60 dark:bg-emerald-950/20 p-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Truc ràpid</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-snug font-medium">
                    {r.fastTrick}
                  </p>
                </div>

                <div className="lg:col-span-4 rounded-2xl border border-rose-200/80 dark:border-rose-900/50 bg-rose-50/60 dark:bg-rose-950/20 p-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-1">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Com descartar opcions</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-snug font-medium">
                    {r.discardRule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
