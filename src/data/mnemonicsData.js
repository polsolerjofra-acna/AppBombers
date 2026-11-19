export const INITIAL_MNEMONICS = [
  {
    id: 'mnem-avisos-sonors-colapses',
    topicNumber: 30,
    topicId: 'tema-30',
    category: 'Col·lapses i Rescat',
    title: 'Avisos sonors en col·lapses estructurals (INSARAG)',
    acronym: '1 i 3 → Tot Mort · 1 i 1 → Tothom Torna',
    rules: [
      { code: '1 i 3', meaning: 'Tot Mort (parat — aturada i silenci absolut)' },
      { code: '1 i 1', meaning: 'Tothom Torna (a treballar — reprendre tasques)' },
      { code: 'Altres senyals', meaning: 'Espai previst per ampliar amb la resta d\'avisos sonors (ex. evacuació urgent / 3 curts)' }
    ],
    explanation:
      'Relació ràpida per no dubtar mai quan soni la botzina en una estructura col·lapsada: "1 i 3 → Tot Mort (parat)" i "1 i 1 → Tothom Torna (a treballar)".'
  },
  {
    id: 'mnem-fases-vs-etapes',
    topicNumber: 25,
    topicId: 'tema-25',
    relatedTopics: [8, 24, 25],
    category: 'Incendis Forestals i Foc',
    title: 'Fases del Foc vs. Etapes dels Equips d\'Extinció',
    acronym: 'Fases → Foc (F)  |  Etapes → Equips d\'extinció (E)',
    rules: [
      {
        code: 'Fases → Foc (ambdues per F)',
        meaning: 'Actiu, Estabilitzat, Controlat i Extingit (evolució de l\'incendi)'
      },
      {
        code: 'Etapes → Equips d\'extinció (ambdues per E)',
        meaning: 'Actiu (Atac), Remat i Rereguarda (tasques dels equips)'
      }
    ],
    explanation:
      'Truc infal·lible per inicials: Fases = Foc (Actiu, Estabilitzat, Controlat i Extingit). Etapes = Equips d\'extinció (Actiu/Atac, Remat i Rereguarda).'
  },
  {
    id: 'mnem-redox-porc-groc',
    topicNumber: 10,
    topicId: 'tema-10',
    relatedTopics: [8, 10],
    category: 'Química i Teoria del Foc',
    title: 'Reaccions Redox: Combustible vs. Comburent',
    acronym: 'PORC (Combustible)  |  GROC (Comburent)',
    rules: [
      {
        code: 'PORC',
        meaning: 'El combustible s\'Oxida, actua com a agent Reductor i Perd electrons (Perd · Oxida · Reductor · Combustible)'
      },
      {
        code: 'GROC',
        meaning: 'El comburent es Redueix, actua com a agent Oxidant i Guanya electrons (Guanya · Redueix · Oxidant · Comburent)'
      }
    ],
    explanation:
      'PORC = el combustible Perd electrons, s\'Oxida i és agent Reductor. GROC = el comburent Guanya electrons, es Redueix i és agent Oxidant.'
  },
  {
    id: 'mnem-gasos-pavo-te',
    topicNumber: 10,
    topicId: 'tema-10',
    category: 'Química i Gasos',
    title: 'Llei dels gasos ideals i lleis dels gasos',
    acronym: '"PaVo" beuen "Te" · Gran Via · BTT · CP',
    rules: [
      {
        code: '"PaVo" beuen "Te"',
        meaning: 'Llei dels gasos ideals: Pressió × Volum (PaVo) multiplicats, i la Temperatura (Te) divideix: (P·V)/T = constant (o PV = nRT)'
      },
      {
        code: 'Gay-Lussac → Volum → Gran Via',
        meaning: 'G + V (Gran Via): a Volum constant, P₁/T₁ = P₂/T₂'
      },
      {
        code: 'Boyle → Temperatura → BTT',
        meaning: 'B + T (BTT): a Temperatura constant, P₁·V₁ = P₂·V₂'
      },
      {
        code: 'Charles → Pressió → CP',
        meaning: 'C + P (Cicle Professional): a Pressió constant, V₁/T₁ = V₂/T₂'
      }
    ],
    explanation:
      'Combina la regla visual "PaVo / Te" per recordar què multiplica i què divideix, amb Gran Via (Gay-Lussac = Volum), BTT (Boyle = Temperatura) i CP (Charles = Pressió).'
  },
  {
    id: 'mnem-pressions-arterials',
    topicNumber: 28,
    topicId: 'tema-28',
    category: 'Assistència Sanitària',
    title: 'Pressions arterials: Normal (120/80), Hipertensió i Hipotensió',
    acronym: 'Des de 120/80 → ↑ +2 / +1 = 140/90  |  ↓ -3 / -2 = 90/60',
    rules: [
      {
        code: 'Base Normal',
        meaning: '120 / 80 mmHg (sistòlica / diastòlica)'
      },
      {
        code: '↑ Hipertensió (+2 / +1)',
        meaning: 'Suma +20 a la màxima i +10 a la mínima des de 120/80 → 140 / 90 mmHg'
      },
      {
        code: '↓ Hipotensió (-3 / -2)',
        meaning: 'Resta -30 a la màxima i -20 a la mínima des de 120/80 → 90 / 60 mmHg'
      }
    ],
    explanation:
      'A partir de la pressió normal 120/80: si puges (↑), sumes +2 desenes a la sistòlica i +1 desena a la diastòlica (140/90). Si baixes (↓), restes -3 desenes a la sistòlica i -2 desenes a la diastòlica (90/60).'
  },
  {
    id: 'mnem-lluna-maresme-pallars',
    topicNumber: 14,
    topicId: 'tema-14',
    category: 'Cartografia i Orientació',
    title: 'Orientació amb la Lluna: Del Maresme al Pallars',
    acronym: 'Petit al Maresme (Est) = Decreix (C)  |  Gran al Pallars (Oest) = Creix (D)',
    rules: [
      {
        code: 'Maresme (EST) · Decreix (Minvant)',
        meaning: 'De petit vivia al Maresme (a l\'EST) i era petit (decreix / minvant, forma de C) → la panxa apunta a l\'EST'
      },
      {
        code: 'Pallars (OEST) · Creix (Creixent)',
        meaning: 'Ara que em faig gran (creixo, forma de D) visc al Pallars (a l\'OEST) → la panxa apunta a l\'OEST'
      }
    ],
    explanation:
      'Una història per no fallar-la mai: de petit vivia al Maresme (costa Est de Catalunya) i decreixia perquè era petit (Lluna minvant/decreixent = mira a l\'Est). Ara em faig gran i visc al Pallars (ponent/Oest) i creixo (Lluna creixent = mira a l\'Oest)!'
  },
  {
    id: 'mnem-electrons-bateria',
    topicNumber: 11,
    topicId: 'tema-11',
    category: 'Electricitat',
    title: 'Sentit dels electrons a la bateria: Teoria vs. Realitat',
    acronym: 'Teoria = molt guai (surt del +)  |  Realitat = no tot és tan bo (surt del -)',
    rules: [
      {
        code: 'Sentit Convencional (Teoria)',
        meaning: 'En teoria la vida és molt guai → surt del pol POSITIU (+)'
      },
      {
        code: 'Sentit Real (Electrons)',
        meaning: 'A la realitat no tot és tan bo → surt del pol NEGATIU (-)'
      }
    ],
    explanation:
      'Per no confondre mai el sentit convencional dels esquemes amb el moviment real dels electrons en una bateria: en teoria la vida és molt guai (surt del +), però a la realitat no tot és tan bo (els electrons surten del -).'
  }
];
