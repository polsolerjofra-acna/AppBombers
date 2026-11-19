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
  },
  {
    id: 'mnem-major-ce-169',
    topicNumber: 1,
    topicId: 'tema-1',
    category: 'Codi Fonètic · Dret Constitucional',
    title: 'Constitució Espanyola: 169 articles i Estats Excepcionals (Art. 116)',
    acronym: '16 TASSA + 9 PA (169 arts.)  |  15 TELE (Alarma) · 30 MAR (Excepció)',
    rules: [
      {
        code: '169 articles → 16 TASSA + 9 PA',
        meaning: 'Imagina una TASSA gegant plena de PA damunt la Constitució (1-6-9 = T-S-P)'
      },
      {
        code: 'Art. 116 → 11 DADO + 6 ÓS',
        meaning: 'Un DADO i un ÓS decideixen els 3 estats: Alarma (15 TELE dies, NO suspèn drets), Excepció (30 MAR dies) i Setge'
      },
      {
        code: '3 Reformes (92 · 11 · 24)',
        meaning: '92 BANYA (1992 art. 13.2) · 11 DADO (2011 art. 135) · 24 NUCA (2024 art. 49 discapacitat)'
      }
    ],
    explanation:
      'Aplicació directa del Sistema Mnemotècnic Major i Fitxer Mental: 16 (Tassa) + 9 (Pa) fixa els 169 articles; 15 (Tele) i 30 (Mar) fixen els terminis màxims inicials d\'Alarma (15d) i Excepció (30d).'
  },
  {
    id: 'mnem-major-acer-foc',
    topicNumber: 24,
    topicId: 'tema-24',
    relatedTopics: [8, 15, 24],
    category: 'Codi Fonètic · Incendis Estructurals',
    title: 'Temperatures crítiques de l\'Acer al Foc: 300 °C i 550 °C',
    acronym: '30 MAR + 0 RA (300 °C inici pèrdua)  |  55 LALA + 0 RA (550 °C col·lapse)',
    rules: [
      {
        code: '300 °C → 30 MAR + 0 RA',
        meaning: 'Al MAR sota el déu RA l\'acer comença a perdre resistència (250–300 °C)'
      },
      {
        code: '550 °C → 55 LALA + 0 RA',
        meaning: 'La LALA amb el déu RA doblega la biga d\'acer: a 550 °C perd ~50% de resistència i col·lapsa'
      }
    ],
    explanation:
      'Regla fonètica per no confondre mai els dos llindars d\'examen de l\'acer: 300 °C (MAR-RA) inicia el debilitament i 550 °C (LALA-RA) marca la temperatura crítica de col·lapse.'
  },
  {
    id: 'mnem-major-airbags-30-60-90',
    topicNumber: 32,
    topicId: 'tema-32',
    category: 'Codi Fonètic · Excarceració',
    title: 'Regla 30-60-90 d\'Airbags i Distàncies de Seguretat',
    acronym: '30 MAR (Volant) · 60 ZORRO (Passatger) · 90 BARRA (Cortina/Laterals)',
    rules: [
      {
        code: '30 cm → 30 MAR',
        meaning: 'Airbag del volant (conductor): mantenir-se almenys a 30 cm (un MAR entre el pit i el volant)'
      },
      {
        code: '60 cm → 60 ZORRO',
        meaning: 'Airbag frontal de passatger (copilot): 60 cm de desplegament (un ZORRO assegut al tauler)'
      },
      {
        code: '90 cm → 90 BARRA',
        meaning: 'Airbags laterals / de cortina: zona de seguretat ampla (90 BARRA) o temps d\'espera post-desconnexió segons manual'
      }
    ],
    explanation:
      'Amb el Fitxer Mental: 30 (MAR), 60 (ZORRO) i 90 (BARRA) ordenen de menor a major la regla 30-60-90 de seguretat passiva en vehicles.'
  },
  {
    id: 'mnem-major-prl-rebt',
    topicNumber: 3,
    topicId: 'tema-3',
    relatedTopics: [3, 11, 12],
    category: 'Codi Fonètic · PRL i Electricitat',
    title: 'Terminis i llindars crítics: 24 h (PRL), 30 mA (REBT) i 50 treballadors',
    acronym: '24 NUCA (24 h Inspecció) · 30 MAR (30 mA) · 50 LLORO (Comitè ≥ 50)',
    rules: [
      {
        code: '24 hores → 24 NUCA',
        meaning: 'L\'Inspector de Treball ha de confirmar o aixecar la paralització en 24 h (Art. 21 LPRL) — li pica la NUCA!'
      },
      {
        code: '30 mA → 30 MAR',
        meaning: 'Diferencial d\'alta sensibilitat (≤ 30 mA): protecció complementària contra contactes directes al REBT'
      },
      {
        code: '50 treballadors → 50 LLORO',
        meaning: 'A partir de 50 treballadors (un LLORO a l\'empresa) és obligatori constituir Comitè de Seguretat i Salut (reunió trimestral)'
      }
    ],
    explanation:
      'Tres xifres d\'examen molt preguntades fixades amb imatges del Fitxer Mental: 24 (NUCA), 30 (MAR) i 50 (LLORO).'
  },
  {
    id: 'mnem-major-inuncat-smc',
    topicNumber: 34,
    topicId: 'tema-34',
    category: 'Codi Fonètic · Inundacions i SMC',
    title: 'Llindars de Pluja del SMC / INUNCAT: 20/40 en 30 min · 100/200 en 24 h',
    acronym: '20 NORIA / 40 CARA en 30 MAR  |  100 TORERO / 200 NÒRIA-RA en 24 NUCA',
    rules: [
      {
        code: 'Intensitat (30 min → 30 MAR)',
        meaning: '20 mm/30 min (NORIA = Perill moderat 1–2) · 40 mm/30 min (CARA = Perill alt/molt alt ≥ 3)'
      },
      {
        code: 'Acumulació (24 h → 24 NUCA)',
        meaning: '100 mm/24 h (TORERO = avís groc/taronja) · 200 mm/24 h (avís màxim/roig)'
      }
    ],
    explanation:
      'Relació immediata entre els dos tipus d\'avís del SMC: temps curt (30 MAR = 30 min → 20/40 mm) i temps llarg (24 NUCA = 24 h → 100/200 mm).'
  },
  {
    id: 'mnem-major-gasos-vehicles',
    topicNumber: 26,
    topicId: 'tema-26',
    relatedTopics: [11, 26, 32],
    category: 'Codi Fonètic · Vehicles Alternatius',
    title: 'Pressions i Temperatures: GNC (200 bar), GNL (-162 °C) i Hidrogen (350/700 bar)',
    acronym: 'GNC: 20 NORIA+0 · GNL: 16 TASSA+2 NOÉ · H₂: 35 MAL / 70 FARO',
    rules: [
      {
        code: 'GNC (~200 bar)',
        meaning: 'Gas Natural Comprimit (metà, puja): 200 bar i TPRD fona a ~110 °C (MAI refredar la TPRD!)'
      },
      {
        code: 'GNL (-162 °C)',
        meaning: '16 TASSA + 2 NOÉ sota zero: líquid criogènic, risc de congelació i RPT (transició de fase ràpida) amb aigua'
      },
      {
        code: 'H₂ (350 / 700 bar)',
        meaning: '35 MAL (busos 350 bar) i 70 FARO (turismes 700 bar): flama gairebé invisible, comprovar amb càmera tèrmica'
      }
    ],
    explanation:
      'Diferencia d\'un cop d\'ull els 3 gasos en vehicles d\'energies alternatives que es confonen sovint al test.'
  }
];

export const MAJOR_SYSTEM_DIGITS = [
  { digit: '0', consonants: 'R, RR', peg: 'RA / Aro, riu, rei' },
  { digit: '1', consonants: 'T, D', peg: 'TE / Tè, ETA' },
  { digit: '2', consonants: 'N, NY', peg: 'NOÉ / Noé, ñu' },
  { digit: '3', consonants: 'M, W', peg: 'MÀ / Mà, Moe' },
  { digit: '4', consonants: 'C*/K, Q', peg: 'OCA / Oca, cua' },
  { digit: '5', consonants: 'L, LL', peg: 'ALL / Lleó, all' },
  { digit: '6', consonants: 'S, Z, Ç/C', peg: 'ÓS / As, ós' },
  { digit: '7', consonants: 'F, J', peg: 'UFO / Feo, ufo' },
  { digit: '8', consonants: 'G, CH, X', peg: 'AIGUA / Aigua, axe' },
  { digit: '9', consonants: 'P, B, V*', peg: 'PA / Boa, Apu, búho' }
];

export const FITXER_MENTAL = [
  { n: '0', words: 'Ra · Aro, riu, rei' },
  { n: '1', words: 'Te · ETA' },
  { n: '2', words: 'Noé · ñu' },
  { n: '3', words: 'Mà · Moe' },
  { n: '4', words: 'Oca · Cua' },
  { n: '5', words: 'All · Lleó' },
  { n: '6', words: 'Ós · As' },
  { n: '7', words: 'Ufo · Feo' },
  { n: '8', words: 'Aigua · Axe' },
  { n: '9', words: 'Pa · Boa, Apu, búho' },
  { n: '10', words: 'Toro · Torre' },
  { n: '11', words: 'Dado · Dit' },
  { n: '12', words: 'Tuna · Atún, Tina, Duna' },
  { n: '13', words: 'Dama · Àtom' },
  { n: '14', words: 'Taco · Tic' },
  { n: '15', words: 'Tele · Dalí' },
  { n: '16', words: 'Tassa · Tos' },
  { n: '17', words: 'Tofu · Tufo' },
  { n: '18', words: 'Tocho · Ducha, Taxi' },
  { n: '19', words: 'Tapa · Tub, tabú' },
  { n: '20', words: 'Nòria · Núria, honor' },
  { n: '21', words: 'Nata · Honda, Índia' },
  { n: '22', words: 'Nena · Nen' },
  { n: '23', words: 'Nemo' },
  { n: '24', words: 'Nuca' },
  { n: '25', words: 'Nala · Anell, Noelia, Nil' },
  { n: '26', words: 'NASA · Anís, Inés' },
  { n: '27', words: 'NIF · On Off' },
  { n: '28', words: 'Nacho · Anchoa' },
  { n: '29', words: 'Nave · Nabo, nube' },
  { n: '30', words: 'Mar · Amor, María, Homer' },
  { n: '31', words: 'Moto · Mateu' },
  { n: '32', words: 'Mono · Imán' },
  { n: '33', words: 'M&M · Mòmia, mama' },
  { n: '34', words: 'Moc · Hamaca' },
  { n: '35', words: 'Mal · Emilio, mel' },
  { n: '36', words: 'Masa · Hummus, museu, mesa' },
  { n: '37', words: 'Mafa · Mafia, mojo' },
  { n: '38', words: 'Màgia · Mocho, mecha' },
  { n: '39', words: 'Mapa' },
  { n: '40', words: 'Cara · Carro, curry' },
  { n: '41', words: 'Codo · Cohet' },
  { n: '42', words: 'Canya · Canoa, cono, cuna' },
  { n: '43', words: 'Cama · Cima' },
  { n: '44', words: 'Caca · Coco, cacao' },
  { n: '45', words: 'Culo · Cala, koala' },
  { n: '46', words: 'Casa · Caza, queso, Casio, Kas' },
  { n: '47', words: 'Cafè · Ceja, cojo, caja' },
  { n: '48', words: 'Coche · Quechua' },
  { n: '49', words: 'Copa · Cabo, cubo' },
  { n: '50', words: 'Lloro · Laura, olor' },
  { n: '51', words: 'Lata · Lidia' },
  { n: '52', words: 'Lana · Lona, Lluna' },
  { n: '53', words: 'Llama · Lima, Alma' },
  { n: '54', words: 'Laca · Loco' },
  { n: '55', words: 'Lala · Lola, Lila' },
  { n: '56', words: 'Lisa · Luis' },
  { n: '57', words: 'Elfo · Alfa, lejía' },
  { n: '58', words: 'Llaga · Leche, Lego, Olga' },
  { n: '59', words: 'Llop · Labio, lupa, Alba' },
  { n: '60', words: 'Zorro · Sara' },
  { n: '61', words: 'Seta' },
  { n: '62', words: 'Sauna · Ozuna, sueño, asno' },
  { n: '63', words: 'Sam · Zumo' },
  { n: '64', words: 'Sac · Isaac' },
  { n: '65', words: 'Sal · Silla, sol, suelo, isla, azul' },
  { n: '66', words: 'Salsa · Seso, Suiza' },
  { n: '67', words: 'Soja · Sofà, Sofía' },
  { n: '68', words: 'Sega · Sexe, saxo' },
  { n: '69', words: 'Sapo · Sopa, sèpia' },
  { n: '70', words: 'Faro · Fira' },
  { n: '71', words: 'Foto · Fiat, fuet' },
  { n: '72', words: 'Fan' },
  { n: '73', words: 'Fama · Jaime, fuma' },
  { n: '74', words: 'Foca' },
  { n: '75', words: 'Fulla · Foli' },
  { n: '76', words: 'Fisio · Foso' },
  { n: '77', words: 'FIFA · Jefe' },
  { n: '78', words: 'Figa · Ficha, fuego' },
  { n: '79', words: 'Faba · Jeep' },
  { n: '80', words: 'Churro · Ogro, gorra' },
  { n: '81', words: 'Gata · Gota, gato' },
  { n: '82', words: 'Gana · Genio, chino' },
  { n: '83', words: 'Goma · Gemma' },
  { n: '84', words: 'Cheque' },
  { n: '85', words: 'Gallo · Àguila, chili, axila' },
  { n: '86', words: 'Gassa · Gas, chuza' },
  { n: '87', words: 'Chef' },
  { n: '88', words: 'Chacha · Chocho' },
  { n: '89', words: 'Xapa · Chupa chup' },
  { n: '90', words: 'Barra · Bar, burro, obra, perro, puro' },
  { n: '91', words: 'Bata · Pedo, bota, pito, poeta, boda, bate' },
  { n: '92', words: 'Banya · Pan, peine, peón, pino' },
  { n: '93', words: 'Poma · Puma' },
  { n: '94', words: 'Vaca · Piqué, pica, Paco, buceo, bici' },
  { n: '95', words: 'Pala · Baile, Apolo, paella' },
  { n: '96', words: 'Pesa · Beso, payaso, pez, piso' },
  { n: '97', words: 'Bajo · Buff, Abeja, pijo, paja' },
  { n: '98', words: 'Panxa · Bicho, boxeo, pecho' },
  { n: '99', words: 'Bebè · Hippie, papá, hobby, Pepe' },
  { n: '100', words: 'Torero · Terror, tararí' }
];
