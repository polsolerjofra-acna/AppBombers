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
    topicNumber: 8,
    topicId: 'tema-8',
    relatedTopics: [8, 24],
    category: 'Foc i Incendis Estructurals',
    title: 'Fases vs. Etapes d\'un incendi',
    acronym: 'Fases → Foc (F)  |  Etapes → Equips d\'extinció (E)',
    rules: [
      { code: 'Fases (F)', meaning: 'Fan referència a l\'evolució del FOC (ambdues comencen per F)' },
      { code: 'Etapes (E)', meaning: 'Fan referència a l\'actuació dels EQUIPS d\'extinció (ambdues comencen per E)' }
    ],
    explanation:
      'Truc infal·lible per inicials: Fases = Foc (ignició, creixement, ple desenvolupament, decaïment). Etapes = Equips d\'extinció (aproximació, valoració, atac, ventilació, liquidació).'
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
  }
];
