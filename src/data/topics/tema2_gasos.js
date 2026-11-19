export const tema2Gasos = {
  id: 'tema-2',
  number: 2,
  title: 'Lleis dels Gasos Ideals, Termodinàmica i Equips ERA',
  category: 'Física dels Gasos i Protecció Respiratòria',
  estimatedMinutes: 35,
  importance: {
    title: 'Radar d\'Oposició: Lleis dels Gasos i Càlcul d\'Autonomia ERA',
    frequency: 'Alta (3-4 preguntes a cada examen)',
    summary:
      'El tribunal pregunta sempre la relació Pressió-Volum-Temperatura (Boyle-Mariotte, Charles i Gay-Lussac) tant a nivell teòric com aplicada a les ampolles d\'aire comprimit dels Equips de Respiració Autònoma (ERA) i l\'expansió dels gasos d\'incendi.',
    hotTopics: [
      'Identificar quina magnitud és constant a cada llei (Isoterma = Boyle, Isòbara = Charles, Isòcora = Gay-Lussac).',
      'Càlcul d\'autonomia real i teòrica d\'una ampolla ERA ( ex. 6 L / 300 bar o 6,8 L / 300 bar).',
      'Conversió obligatòria a graus Kelvin (K = °C + 273) abans d\'aplicar qualsevol fórmula de gasos!'
    ],
    traps: [
      'Fer servir graus Celsius (°C) en comptes de Kelvin (K) a les fórmules de Charles o Gay-Lussac (parany clàssic!).',
      'No descomptar la pressió de reserva d\'alarma del xiulet (50-55 bar) quan l\'enunciat demana "autonomia de treball segura".'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      title: 'Les Tres Lleis Clàssiques dels Gasos (Boyle, Charles i Gay-Lussac)',
      subtitle: 'Transformacions isotermes, isòbares i isòcores explicades per no confondre-les mai més.',
      blocks: [
        {
          type: 'text',
          heading: '1.1. Equació General dels Gasos Perfectes',
          paragraphs: [
            'A diferència dels líquids, els gasos són fluids altament compressibles el volum dels quals depèn directament de la pressió i de la temperatura absoluta (mesurada sempre en Kelvin: T(K) = T(°C) + 273,15).',
            'L\'equació combinada dels gasos ideals relaciona dos estats d\'una mateixa massa de gas tancat: (P₁ · V₁) / T₁ = (P₂ · V₂) / T₂ = constant.'
          ]
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Regla Mnemotècnica Infal·lible: "Bo-Te, Cha-Pre, Gay-Vo"',
          acronym: 'BOyle = TEmperatura cte (Isoterma)  |  CHArles = PREssió cte (Isòbara)  |  GAY-Lussac = VOlum cte (Isòcora)',
          trick:
            'Recorda la frase: "En BOyle pren TE, en CHArles és PREsident i en GAY-Lussac VOla". La primera síl·laba et diu l\'autor i la segona et diu quina variable es manté CONSTANT!',
          example: 'Ampolla d\'ERA metàl·lica rígida exposada a la calor del foc ⇒ Volum constant (Isòcora = Gay-Lussac): P₁/T₁ = P₂/T₂.'
        },
        {
          type: 'table',
          title: 'Resum Comparatiu de les Lleis dels Gasos Ideals',
          subtitle: 'Taula síntesi per respondre preguntes teòriques en menys de 10 segons',
          headers: ['Llei Física', 'Transformació', 'Magnitud Constant', 'Equació Matemàtica'],
          rows: [
            ['Llei de Boyle-Mariotte', 'Isotèrmica (Isoterma)', 'Temperatura (T = cte)', 'P₁ · V₁ = P₂ · V₂ (Inversament prop.)'],
            ['Llei de Charles', 'Isobàrica (Isòbara)', 'Pressió (P = cte)', 'V₁ / T₁ = V₂ / T₂ (Directament prop.)'],
            ['Llei de Gay-Lussac', 'Isocòrica / Isomètrica', 'Volum (V = cte)', 'P₁ / T₁ = P₂ / T₂ (Directament prop.)'],
            ['Equació de Clapeyron', 'Estat general del gas ideal', 'R = 0,082 atm·L/(mol·K)', 'P · V = n · R · T']
          ],
          footnote: 'En totes les equacions on apareix T, és OBLIGATORI passar els °C a Kelvin sumant 273!'
        }
      ]
    },
    {
      pageNumber: 2,
      title: 'Aplicació Operativa: Càlcul d\'Autonomia d\'Ampolles ERA',
      subtitle: 'Aplicació de Boyle-Mariotte a la protecció respiratòria i factor de compressibilitat Z.',
      blocks: [
        {
          type: 'text',
          heading: '2.1. Càlcul de Volum d\'Aire Disponible i Temps d\'Autonomia',
          paragraphs: [
            'Els bombers utilitzem Equips de Respiració Autònoma (ERA) de circuit obert amb ampolles de fibra de carboni o acer carregades habitualment a 300 bar de pressió.',
            'Aplicant la Llei de Boyle-Mariotte (P₁ · V₁ = P₂ · V₂), podem saber quants litres d\'aire a pressió atmosfèrica (1 bar) tenim emmagatzemats dins de l\'ampolla i dividir-ho pel consum mitjà d\'un bomber en intervenció (40 - 50 L/min en esforç mitjà).'
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Fórmules d\'Autonomia Total i Autonomia de Treball Segura (ERA)',
          formula: 't_total = (V_amp · P_man) / Q_consum   |   t_segur = [V_amp · (P_man - 50)] / Q_consum',
          variables: [
            { symbol: 'V_amp', meaning: 'Volum hidràulic de l\'ampolla (habitualment 6 L o 6,8 L)' },
            { symbol: 'P_man', meaning: 'Pressió llegida al manòmetre (ex. 300 bar)' },
            { symbol: '50 bar', meaning: 'Marge de seguretat on sona l\'alarma acústica (xiulet a 55 ± 5 bar)' },
            { symbol: 'Q_consum', meaning: 'Consum d\'aire del bomber (L/min). Esforç intens ≈ 50 L/min' }
          ],
          trick:
            'Amb una ampolla de 6 L a 300 bar tens 6 · 300 = 1.800 litres teòrics (amb factor de compressibilitat real Z≈1,1 a 300 bar són ≈ 1.636 L). Si et demanen càlcul ideal sense Z i consum de 40 L/min: 1.800 / 40 = 45 minuts totals.',
          example: 'Ampolla 6 L a 300 bar, reserva 50 bar, consum 50 L/min ⇒ Aire útil = 6 · (300 - 50) = 1.500 L ⇒ t_segur = 1.500 / 50 = 30 minuts.'
        },
        {
          type: 'easy',
          title: 'Per què a 300 bar l\'aire ja no es comporta com un gas 100% ideal?',
          metaphor:
            'Ficar 1.800 litres d\'aire dins d\'una ampolla de 6 litres és com intentar tancar 300 persones en un ascensor: arriba un punt on els propis cossos ocupen tot l\'espai i xoquen entre ells.',
          explanation:
            'A pressions molt altes (300 bar), les molècules estan tan juntes que apareixen forces de repulsió. Per això s\'aplica el Factor de Compressibilitat (Z ≈ 1,1 per a aire a 300 bar): Volum real = (P · V) / Z = (300 · 6) / 1,1 ≈ 1.636 litres reals en comptes de 1.800 L.',
          takeaway: 'Si l\'examen no et dóna el factor Z, fes P · V directe. Si et dóna Z = 1,1, divideix per 1,1!'
        }
      ]
    },
    {
      pageNumber: 3,
      title: 'Pressions Parcials (Dalton), Difusió (Graham) i Gasos d\'Incendi',
      subtitle: 'Comportament de mescles de gasos, monòxid de carboni (CO) i estratificació tèrmica.',
      blocks: [
        {
          type: 'text',
          heading: '3.1. Llei de Dalton i Llei de Difusió de Graham',
          paragraphs: [
            'La Llei de Dalton de les Pressions Parcials estableix que la pressió total d\'una mescla de gasos que no reaccionen entre si és igual a la suma de les pressions parcials que exerciria cada gas si ocupés tot sol el volum total del recipient (P_total = P₁ + P₂ + P₃...).',
            'La Llei de Graham indica que la velocitat de difusió d\'un gas és inversament proporcional a l\'arrel quadrada de la seva massa molar (els gasos més lleugers com l\'hidrogen H₂ o el metà CH₄ es difonen i s\'escapen molt més ràpid que el butà o el propà).'
          ]
        },
        {
          type: 'table',
          title: 'Densitat Relativa respecte a l\'Aire de Gasos Crítics en Intervenció',
          subtitle: 'Aire sec = 1,00 (Massa molar mitjana de l\'aire ≈ 28,96 g/mol). Si d < 1 puja al sostre; si d > 1 s\'acumula a terra!',
          headers: ['Gas / Fórmula', 'Massa Molar (g/mol)', 'Densitat Relativa (Aire = 1)', 'Comportament en Fuites / Incendi'],
          rows: [
            ['Hidrogen (H₂)', '2 g/mol', '0,07 (Molt lleuger)', 'Puja rapidíssimament al sostre; rang explosiu 4% - 75%'],
            ['Metà / Gas Natural (CH₄)', '16 g/mol', '0,55 (Lleuger)', 'Ascendeix i es dissipa per parts altes (ventilació superior)'],
            ['Monòxid de Carboni (CO)', '28 g/mol', '0,97 (Quasi igual que l\'aire)', 'Es barreja homogèniament (puja amb els fums calents)'],
            ['Propà (C₃H₈)', '44 g/mol', '1,52 (Pesant)', 'S\'acumula a ras de terra, soterranis i clavegueram'],
            ['Butà (C₄H₁₀)', '58 g/mol', '2,01 (Molt pesant)', 'Cau al punt més baix; gran perill d\'explosió en soterranis']
          ],
          footnote: 'Truc de càlcul ràpid: Divideix la massa molar del gas entre 29 (massa molar de l\'aire). Si dóna < 1 flota; si dóna > 1 s\'enfonsa!'
        }
      ]
    }
  ],
  // Mòdul d'Autoavaluació: 10 preguntes completes per al Tema 2
  quiz: [
    {
      id: 'q2-1',
      difficulty: 'Fàcil',
      question: 'Quina llei dels gasos ideals estableix que, a temperatura constant (procés isotèrmic), la pressió d\'una massa de gas és inversament proporcional al volum que ocupa (P₁ · V₁ = P₂ · V₂)?',
      options: [
        'Llei de Charles',
        'Llei de Gay-Lussac',
        'Llei de Boyle-Mariotte',
        'Llei de Dalton'
      ],
      correctIndex: 2,
      explanation: 'Recorda la regla mnemotècnica "BO-TE": Boyle-Mariotte estudia les transformacions a TEmperatura constant (isotermes), on P · V = constant.'
    },
    {
      id: 'q2-2',
      difficulty: 'Mitjà',
      question: 'Una ampolla d\'acer rígida d\'aire comprimit es troba a un magatzem a 27 °C amb una pressió absoluta de 200 bar. Si a causa d\'un incendi proper la seva temperatura puja fins a 327 °C (sense que s\'obri la vàlvula), quina pressió assolirà l\'interior?',
      options: [
        '2.422 bar',
        '400 bar',
        '300 bar',
        '100 bar'
      ],
      correctIndex: 1,
      explanation: 'Procés a volum constant (Gay-Lussac: P₁/T₁ = P₂/T₂). Passem SEMPRE a Kelvin: T₁ = 27 + 273 = 300 K; T₂ = 327 + 273 = 600 K. Com que la temperatura absoluta en Kelvin es duplica (de 300 K a 600 K), la pressió es duplica: P₂ = 200 · 2 = 400 bar.'
    },
    {
      id: 'q2-3',
      difficulty: 'Fàcil',
      question: 'Disposem d\'una ampolla d\'ERA de 6 litres carregada a 300 bar. Sense tenir en compte el factor de compressibilitat, quin temps d\'autonomia de treball segura tindrà un bomber que consumeix 50 L/min si descomptem 50 bar de marge de reserva d\'alarma?',
      options: [
        '36 minuts',
        '30 minuts',
        '25 minuts',
        '45 minuts'
      ],
      correctIndex: 1,
      explanation: 'Pressió útil abans que soni l\'alarma = 300 - 50 = 250 bar. Volum d\'aire útil = 6 L · 250 bar = 1.500 L. Temps = 1.500 L / 50 L/min = 30 minuts.'
    },
    {
      id: 'q2-4',
      difficulty: 'Mitjà',
      question: 'Quin dels següents gasos combustibles és MÉS PESANT que l\'aire (densitat relativa > 1) i, per tant, tendeix a acumular-se a les parts baixes i soterranis en cas de fuita a temperatura ambient?',
      options: [
        'Gas natural (Metà, CH₄)',
        'Hidrogen (H₂)',
        'Amoníac (NH₃)',
        'Propà (C₃H₈)'
      ],
      correctIndex: 3,
      explanation: 'El propà (C₃H₈) té una massa molar de 44 g/mol (densitat relativa ≈ 1,52 respecte als 29 g/mol de l\'aire), mentre que el metà (16 g/mol), l\'hidrogen (2 g/mol) i l\'amoníac (17 g/mol) són més lleugers que l\'aire.'
    },
    {
      id: 'q2-5',
      difficulty: 'Fàcil',
      question: 'En l\'Equació General dels Gasos Ideals, a quina temperatura en l\'escala Celsius equival el Zero Absolut (0 K)?',
      options: [
        '0 °C',
        '-100 °C',
        '-273,15 °C',
        '+273,15 °C'
      ],
      correctIndex: 2,
      explanation: 'El zero absolut (0 Kelvin), on teòricament cessa l\'agitació tèrmica molecular, equival a -273,15 °C.'
    },
    {
      id: 'q2-6',
      difficulty: 'Mitjà',
      question: 'Segons la Llei de Charles (transformació isobàrica a pressió constant), si escalfem un gas ideal des de 27 °C fins a 127 °C en un cilindre amb pistó mòbil lliure, quin serà el nou volum V₂ respecte al volum inicial V₁?',
      options: [
        'V₂ = (4 / 3) · V₁ (augmenta un 33,3%)',
        'V₂ = (127 / 27) · V₁',
        'V₂ = 2 · V₁',
        'Es manté constant perquè és isòbara'
      ],
      correctIndex: 0,
      explanation: 'Passem a Kelvin: T₁ = 27 + 273 = 300 K; T₂ = 127 + 273 = 400 K. Per la Llei de Charles (V₁/T₁ = V₂/T₂): V₂ = V₁ · (400 / 300) = (4/3) · V₁.'
    },
    {
      id: 'q2-7',
      difficulty: 'Difícil',
      question: 'Tenim una ampolla d\'ERA de 6,8 litres carregada a 300 bar. Si apliquem un factor de compressibilitat real de l\'aire Z = 1,10, quin és el volum real aproximat d\'aire disponible a pressió atmosfèrica (1 bar)?',
      options: [
        '2.040 litres',
        '1.854,5 litres',
        '2.244 litres',
        '1.500 litres'
      ],
      correctIndex: 1,
      explanation: 'Volum teòric ideal = 6,8 L · 300 bar = 2.040 L. En dividir pel factor de compressibilitat Z = 1,10: V_real = 2.040 / 1,10 = 1.854,54 litres.'
    },
    {
      id: 'q2-8',
      difficulty: 'Difícil',
      question: 'Segons la Llei de Difusió de Graham, quantes vegades més ràpid es difon el gas Hidrogen (H₂, M = 2 g/mol) en comparació amb l\'Oxigen (O₂, M = 32 g/mol) a la mateixa pressió i temperatura?',
      options: [
        '2 vegades més ràpid',
        '4 vegades més ràpid',
        '8 vegades més ràpid',
        '16 vegades més ràpid'
      ],
      correctIndex: 1,
      explanation: 'Per la Llei de Graham: v₁ / v₂ = √(M₂ / M₁) = √(32 / 2) = √16 = 4 vegades més ràpid.'
    },
    {
      id: 'q2-9',
      difficulty: 'Mitjà',
      question: 'A quina pressió aproximada està tarat el dispositiu d\'alarma acústica (xiulet) dels Equips de Respiració Autònoma segons la normativa europea EN 137?',
      options: [
        '100 ± 5 bar',
        '55 ± 5 bar',
        '25 ± 5 bar',
        '150 ± 10 bar'
      ],
      correctIndex: 1,
      explanation: 'Segons la norma UNE-EN 137, el dispositiu d\'avís acústic dels ERA ha d\'activar-se quan la pressió residual de l\'ampolla baixa a 55 ± 5 bar.'
    },
    {
      id: 'q2-10',
      difficulty: 'Fàcil',
      question: 'Quina és la pressió parcial aproximada de l\'Oxigen (O₂, que representa el 21% del volum de l\'aire) a nivell del mar (on la pressió atmosfèrica total és d\'1 atm)?',
      options: [
        '0,78 atm',
        '0,21 atm',
        '0,04 atm',
        '2,10 atm'
      ],
      correctIndex: 1,
      explanation: 'Segons la Llei de Dalton (P_i = X_i · P_total), si l\'oxigen és el 21% de l\'aire (fracció molar 0,21), a 1 atm la seva pressió parcial és 0,21 · 1 atm = 0,21 atm.'
    }
  ]
};
