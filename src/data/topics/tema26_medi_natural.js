export const tema26MediNatural = {
  id: 'tema-31',
  number: 31,
  code: 'MAN.SVMN.000',
  title: 'Intervenció Bàsica en Salvaments i Recerques en el Medi Natural Terrestre',
  category: 'Manual Operatiu SGO — Salvament en Medi Natural i Muntanya',
  estimatedMinutes: 45,
  importance: {
    title: "Radar d'Examen — Tema 31 (MAN.SVMN.000 v.1): GRAE, GRCR i Metodologies de Recerca",
    frequency: 'Molt Alta (3-4 preguntes sobre creació GRAE 1997 i les 4 seus, GRCR 2007/2022 i les 2 seus, tipus de recerca i UPA)',
    summary:
      "Manual de salvaments i recerques al medi natural: història i seus del GRAE (1997: Cerdanyola, Olot, la Seu d'Urgell, Valls) i GRCR (2007/2022: Lleida, Vic), tipologia (Rescat, Evacuació, Guiatge, Acompanyament, Recerca), les 8 maniobres amb cordes, metodologies de recerca (Extensiva, Intensiva, Punts probables, Contenció), Rastreig vs. Venteig i protecció de l'UPA.",
    hotTopics: [
      'Cap. 1: Llei 5/1994, plans NEUCAT i ALLAUCAT. GRAE creat l’any 1997 (fusió GRM Muntanya + GRS Subaquàtic) amb 4 seus de muntanya: Cerdanyola, Olot, la Seu d’Urgell i Valls (+ GEM). GRCR (Grup Caní de Recerca) creat el 2007 i consolidat el 2022 amb 2 seus fixes: Lleida i Vic.',
      'Cap. 2-4: Diferència entre Rescat (ferit o bloquejat), Evacuació (preventiva per risc extern), Guiatge (remot per telèfon a persona il·lesa), Acompanyament (presencial sense maniobra tècnica) i Recerca (sense comunicació). Les 8 maniobres amb cordes (4.2).',
      'Cap. 5: Metodologies de Recerca: 1) Extensiva (pistes/camins; hipòtesi = persona EN MOVIMENT; poc personal, alta velocitat), 2) Intensiva: a) Per línies naturals (vorals/marges, alta efectivitat nocturna) i b) Per sectors (escombrat lent amb molt personal; hipòtesi = persona ESTÀTICA), 3) Punts probables i 4) Per Contenció (tancar perímetre cap al centre; ideal per a NENS).',
      'Cap. 5.6-6: Recerca Canina: Rastreig (olor sobre el terra des de l’UPA amb mostra d’olor) vs. Venteig (olor dispersa a l’aire en grans àrees/allaus). UPA (Últim Punt d’Albirament): abalisar i protegir immediatament (el Centre de Comandament s’ubica a prop però ALLUNYAT de l’UPA!).'
    ],
    traps: [
      'Confondre la hipòtesi de la Recerca EXTENSIVA (pressuposa que la persona està EN MOVIMENT per camins/pistes) amb la Recerca INTENSIVA (pressuposa que la persona està ESTÀTICA o inconscient)!',
      'Confondre Guiatge (es fa de manera REMOTA per telèfon quan tenim contacte amb una persona il·lesa desorientada) amb Acompanyament (és PRESENCIAL sobre el terreny sense maniobres tècniques)!',
      'Instal·lar el Centre de Comandament o aparcar els camions just a sobre de l’UPA (Últim Punt d’Albirament): això contamina i destrueix el rastre olfactiu per als gossos de Rastreig del GRCR!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-3 GRAE, GRCR i Tipus',
      title: '1–3. Marc Legal, El Grup GRAE (1997), el Grup Caní GRCR (2007/2022) i Tipologia',
      subtitle: 'Les 4 seus del GRAE Muntanya, les 2 seus del GRCR i diferència entre rescat, evacuació, guiatge i recerca.',
      blocks: [
        {
          type: 'text',
          heading: '1. Història i Seus Oficials del GRAE (1997) i del GRCR (2007 / 2022)',
          paragraphs: [
            "La Llei 5/1994, de 4 de maig, assigna als Bombers de la Generalitat les funcions de salvament i rescat en el medi natural (integrades en plans com el NEUCAT per nevades o l'ALLAUCAT per allaus).",
            "El GRAE (Grup de Recolzament d'Actuacions Especials) es va crear oficialment l'any 1997 fruit de la unificació de dos grups històrics: el GRM (Grup de Rescat de Muntanya) i el GRS (Grup de Rescat Subaquàtic). Actualment el GRAE Muntanya es distribueix en 4 SEUS operatives a Catalunya: 1) Cerdanyola del Vallès (on també té la base el GRAE Subaquàtic i l'helicòpter de rescat amb grua i metge del GEM), 2) Olot, 3) la Seu d'Urgell i 4) Valls.",
            "El GRCR (Grup Caní de Recerca) es va crear l'any 2007 i es va consolidar professionalment l'any 2022 amb 2 SEUS fixes a Catalunya: 1) Lleida i 2) Vic."
          ]
        },
        {
          type: 'table',
          title: '2–3. Classificació Oficial de les Intervencions en el Medi Natural (MAN.SVMN.000)',
          subtitle: 'Diferència exacta entre Rescat, Evacuació, Guiatge, Acompanyament i Recerca',
          headers: ['Tipus d’Intervenció', 'Definició Oficial al Manual MAN.SVMN.000', 'Exemple / Detall Clau d’Examen'],
          rows: [
            ['1. Rescat', 'Auxili i extracció d’una persona FERIDA, accidentada o físicament BLOQUEJADA (encigallada)', 'Exigeix maniobres tècniques, sanitàries o grua d’helicòpter'],
            ['2. Evacuació', 'Trasllat preventiu de persones il·leses amenaçades per un RISC EXTERN (allau, crescuda, incendi)', 'Les persones no estan ferides però l’entorn és perillós'],
            ['3. Guiatge (Remot!)', 'Orientació a DISTÀNCIA (per telèfon / aplicació) a una persona il·lesa amb qui tenim comunicació', 'Es guia fins a un camí o refugi sense necessitat d’arribar-hi físicament'],
            ['4. Acompanyament (Presencial!)', 'Auxili PRESENCIAL d’una persona il·lesa o esgotada fins a lloc segur SENSE maniobra tècnica complexa', 'Els bombers caminen amb ella donant-li abric, llum o aigua'],
            ['5. Recerca', 'Operatiu per localitzar una persona DESAPAREGUDA de qui es desconeix la ubicació i NO hi ha comunicació', 'S’activa l’UPA i les metodologies extensiva, intensiva i canina']
          ]
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! Guiatge vs. Acompanyament i Rescat vs. Evacuació',
          paragraphs: [
            "• GUIATGE vs. ACOMPANYAMENT: Tots dos són per a persones il·leses. El Guiatge es fa de manera REMOTA (per telèfon/app quan hi ha comunicació); l'Acompanyament és PRESENCIAL sobre el terreny caminant amb ella sense maniobra tècnica.",
            "• RESCAT vs. EVACUACIÓ: El Rescat auxilia una persona ferida o bloquejada físicament; l'Evacuació treu persones il·leses preventivament per un risc extern (allau, riuada, foc)."
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 4 Maniobres i Cordes',
      title: '4. Maniobres Bàsiques de Salvament i Les 8 Maniobres amb Cordes',
      subtitle: 'Progressió segura, estabilització i les 8 tècniques verticals del manual MAN.SVMN.000.',
      blocks: [
        {
          type: 'text',
          heading: '4.1–4.2. Les 8 Maniobres Oficials amb Cordes en Salvament al Medi Natural',
          paragraphs: [
            "Quan els bombers d'un parc convencional (no GRAE) intervenen en un talús, barranc o pista forestal amb desnivell, utilitzen l'equipament de salvament en alçada per garantir la seguretat del binomi i de la víctima.",
            "El Capítol 4.2 enumera les 8 MANIOBRES AMB CORDES: 1) Ancoratges (naturals com arbres/roques i artificials com vehicles), 2) Ràpel (descens controlat amb davallador), 3) Ascens tipus escalada i 4) Ascens per corda fixa (amb bloquejadors).",
            "Les quatre restants són: 5) Tirolina (pas aeri tensat reservat a especialistes GRAE per les altes tensions que genera!), 6) Assegurament de víctima (triangle d'evacuació, arnès o llitera), 7) Polispast (hissat amb avantatge mecànic) i 8) Passamans (corda horitzontal/inclinada en cornises o talussos)."
          ]
        },
        {
          type: 'table',
          title: 'Resum de les 8 Maniobres amb Cordes (MAN.SVMN.000 Cap. 4.2)',
          subtitle: 'Funció operativa de cada tècnica',
          headers: ['Núm. i Maniobra', 'Funció Tècnica', 'Observació de Seguretat'],
          rows: [
            ['1. Ancoratges (Naturals / Artificials)', 'Punt de subjecció primari i reassegurança del sistema', 'Sempre redundants (mínim 2 punts) i amb angle < 60° entre cintes'],
            ['2. Ràpel', 'Descens controlat per corda', 'Amb davallador i nus al final de la corda per no sortir-se’n'],
            ['3. Ascens tipus escalada / 4. Corda fixa', 'Superar ressalts verticals o remuntar la corda amb bloquejadors', 'Assegurança contínua del rescatador'],
            ['5. Tirolina / 6. Assegurament víctima', 'Salvar buits aeris (GRAE) / Protegir la víctima amb triangle o llitera', 'La llitera sempre va lligada a una corda de tracció i una de seguretat'],
            ['7. Polispast / 8. Passamans', 'Multiplicar força d’hissat (AM) / Línia de vida horitzontal en cornises', 'El passamans és la maniobra més ràpida per assegurar un accés per talús']
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 5-6 Recerca i UPA',
      title: '5–6. Metodologies de Recerca (Extensiva, Intensiva, Contenció, Canina) i l’UPA',
      subtitle: 'Hipòtesis de víctima en moviment vs. estàtica, rastreig vs. venteig i protecció de l’Últim Punt d’Albirament.',
      blocks: [
        {
          type: 'text',
          heading: '5.1–5.4. Les 4 Metodologies de Recerca Humana en Medi Natural',
          paragraphs: [
            "1) RECERCA EXTENSIVA (1a fase): Batuda ràpida per pistes, camins principals i carenes. Parteix de la hipòtesi que la víctima està EN MOVIMENT; usa poc personal a alta velocitat.",
            "2) RECERCA INTENSIVA: Parteix de la hipòtesi que la víctima està ESTÀTICA (ferida o inconscient). Modalitat a) Per Línies Naturals (vorals, marges i barrancs fins a 10–20 m de camins; ALTA EFECTIVITAT NOCTURNA). Modalitat b) Per Sectors (escombrat lent en paral·lel amb molt personal).",
            "3) PUNTS PROBABLES: Comprovació directa de refugis, masies, coves, fonts o miradors. 4) CONTENCIÓ: Tancar primer un perímetre exterior i reduir el cèrcol cap al centre; ideal quan hi ha molt personal d'inici (ex. NENS PETITS)."
          ]
        },
        {
          type: 'text',
          heading: '5.6. Recerca Canina (GRCR) i 6.1. Protecció de l’UPA',
          paragraphs: [
            "• Gossos de RASTREIG: Segueixen amb arnès i corretja el rastre d'olor específic sobre el TERRA d'una persona concreta, partint d'una mostra d'olor seva i sortint des de l'UPA.",
            "• Gossos de VENTEIG: Treballen solts escombrant grans sectors o allaus per detectar olor humana genèrica dispersa a l'AIRE (exigeix zona lliure d'altres cercadors).",
            "• UPA (Últim Punt d'Albirament): Últim lloc confirmat on es va veure la víctima (o el seu cotxe). Cal abalisar-lo i protegir-lo de seguida; el Centre de Comandament s'ubica a prop però ALLUNYAT de l'UPA per no contaminar l'olor!"
          ]
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! Extensiva vs. Intensiva i Rastreig vs. Venteig',
          paragraphs: [
            "• EXTENSIVA = persona EN MOVIMENT (pistes, ràpida, poc personal) vs. INTENSIVA = persona ESTÀTICA (Línies naturals = nocturna; Sectors = escombrat lent amb molt personal).",
            "• RASTREIG = olor específica al TERRA des de l'UPA amb peça de roba vs. VENTEIG = olor humana a l'AIRE en sector buit de gent."
          ]
        },
        {
          type: 'diagram',
          title: 'Comparativa Visual de les Metodologies de Recerca en Medi Natural i Canina (MAN.SVMN.000)',
          diagramType: 'mountain_search',
          caption:
            'Síntesi de les 4 metodologies humanes (Extensiva = en moviment; Intensiva = estàtica per línies naturals o per sectors; Punts probables; Contenció = nens) i les 2 canines (Rastreig al terra des de l’UPA vs. Venteig a l’aire).'
        },
        {
          type: 'table',
          title: 'Taula Comparativa de les Metodologies de Recerca (MAN.SVMN.000 Cap. 5)',
          subtitle: 'Hipòtesi sobre la víctima, volum de personal, velocitat i efectivitat',
          headers: ['Metodologia de Recerca', 'Hipòtesi sobre la Víctima', 'Personal i Velocitat', 'Característica Clau d’Examen'],
          rows: [
            ['5.1. Recerca Extensiva', 'Víctima EN MOVIMENT', 'Poc personal · Alta velocitat', '1a resposta ràpida per pistes, camins i punts de pas'],
            ['5.2.a. Intensiva per Línies Naturals', 'Víctima ESTÀTICA prop d’un camí/riu', 'Personal moderat · Velocitat mitja', 'Explora marges i vorals · ALTA EFECTIVITAT NOCTURNA!'],
            ['5.2.b. Intensiva per Sectors', 'Víctima ESTÀTICA o inconscient al bosc', 'MOLT personal · Baixa velocitat', 'Batuda en paral·lel d’escombrat total (màxima minuciositat)'],
            ['5.3. Punts Probables', 'Refugiada o en lloc d’interès', 'Equips ràpids específics', 'Masies, refugis, fonts, barraques o itineraris habituals'],
            ['5.4. Recerca per Contenció', 'En moviment dins d’una àrea acotada', 'Molt personal immediat', 'Es tanca un perímetre exterior cap al centre (ideal per a NENS!)'],
            ['5.6. Canina: Rastreig vs. Venteig', 'Rastreig = olor al terra | Venteig = olor a l’aire', 'Binomi guia + gos GRCR', 'Rastreig surt de l’UPA amb mostra d’olor | Venteig exigeix zona sense gent']
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Mode Nen Petit i Trucs',
      title: 'Síntesi Visual i Trucs Mnemotècnics: Seus del GRAE/GRCR i Recerques',
      subtitle: 'Com memoritzar les 4 seus del GRAE, les 2 del GRCR i les diferències de recerca.',
      blocks: [
        {
          type: 'easy',
          title: 'Mode Nen Petit: Extensiva vs. Intensiva i Rastreig vs. Venteig',
          metaphor:
            'Imagina que se t’ha perdut l’avi boletaire al bosc:',
          explanation:
            "• 1. EXTENSIVA: Envies 2 vehicles per pistes pensant que l'avi encara CAMINA (en moviment).\n• 2. INTENSIVA PER LÍNIES NATURALS: Si es fa fosc i creus que ha caigut (ESTÀTIC), mires vorals i marges amb llanternes (molt efectiva de nit!).\n• 3. INTENSIVA PER SECTORS: De dia amb 50 persones pintes el bosc en paral·lel.\n• 4. GOSSOS: RASTREIG = nas al TERRA des de l'UPA amb roba seva | VENTEIG = nas a l'AIRE en sector buit!",
          takeaway: 'Extensiva = En moviment (pistes) | Intensiva = Estàtica (Línies naturals = nocturna; Sectors = escombrat) | Rastreig = terra (UPA) | Venteig = aire.'
        },
        {
          type: 'mnemonic',
          title: 'Truc Mnemotècnic: Les 4 Seus del GRAE Muntanya ("COS-V") i les 2 del GRCR ("Lle-Vi")',
          trick:
            '• GRAE (creat el 1997 = GRM + GRS) → 4 seus de Muntanya "C – O – S – V":\n  1. C-erdanyola del Vallès (també seu del GRAE Subaquàtic!)\n  2. O-lot\n  3. La S-eu d’Urgell\n  4. V-alls.\n• GRCR (Grup Caní, creat el 2007 i consolidat el 2022) → 2 seus "Lle – Vi":\n  1. LLE-ida\n  2. VI-c.',
          example:
            'Pregunta trampa: Quina diferència hi ha entre Guiatge i Acompanyament? El GUIATGE és a distància (per telèfon amb la persona perduda però il·lesa); l’ACOMPANYAMENT és presencial caminant amb ella sense necessitat de maniobra tècnica de rescat!'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · Resum 1/2',
      title: 'Resum Imprescindible d’Examen (1/2) — GRAE, GRCR, Tipologia i Maniobres amb Cordes',
      subtitle: 'Síntesi d’alta densitat dels Capítols 1 a 4 del manual MAN.SVMN.000.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 1: Organització GRAE/GRCR, Tipologia i Cordes',
          subtitle: 'Dades clau dels Capítols 1, 2, 3 i 4',
          headers: ['Concepte', 'Dada Oficial Exacta', 'Detall d’Examen'],
          rows: [
            ['Creació i Fusió del GRAE', 'Creat l’any 1997 de la fusió del GRM (Muntanya) i GRS (Subaquàtics)', 'Treballa conjuntament amb els metges del GEM'],
            ['Les 4 Seus GRAE Muntanya', '1. Cerdanyola · 2. Olot · 3. La Seu d’Urgell · 4. Valls', 'El GRAE Subaquàtic té la seu a Cerdanyola'],
            ['Grup Caní de Recerca (GRCR)', 'Creat l’any 2007 i consolidat el 2022 · 2 seus: Lleida i Vic', 'Especialitats canines: Rastreig i Venteig'],
            ['Rescat vs. Evacuació', 'Rescat = víctima ferida o bloquejada | Evacuació = preventiva per risc extern', 'Marc legal: Llei 5/1994, NEUCAT i ALLAUCAT'],
            ['Guiatge vs. Acompanyament', 'Guiatge = REMOT per telèfon (il·lès) | Acompanyament = PRESENCIAL sense maniobra tècnica', 'Recerca = persona desapareguda sense comunicació'],
            ['Les 8 Maniobres amb Cordes', '1. Ancoratges · 2. Ràpel · 3. Escalada · 4. Corda fixa · 5. Tirolina · 6. Assegurament · 7. Polispast · 8. Passamans', 'La tirolina és exclusiva del GRAE per les altes tensions']
          ]
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · Resum 2/2',
      title: 'Resum Imprescindible d’Examen (2/2) — Metodologies de Recerca, Canina i UPA',
      subtitle: 'Síntesi d’alta densitat dels Capítols 5 i 6 del manual MAN.SVMN.000.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 2: Totes les Metodologies de Recerca i Operativa UPA',
          subtitle: 'Dades clau dels Capítols 5 i 6',
          headers: ['Metodologia / Concepte', 'Definició i Hipòtesi Oficial', 'Clau Operativa'],
          rows: [
            ['Recerca Extensiva', 'Hipòtesi: víctima EN MOVIMENT · Poc personal, alta velocitat', '1a batuda ràpida per pistes i camins'],
            ['Intensiva Línies Naturals', 'Hipòtesi: víctima ESTÀTICA prop de vorals/marges', 'Té una ALTA EFECTIVITAT NOCTURNA'],
            ['Intensiva per Sectors', 'Hipòtesi: víctima ESTÀTICA al bosc · Molt personal, baixa velocitat', 'Escombrat paral·lel minuciós de tota l’àrea'],
            ['Punts Probables i Contenció', 'Punts probables = refugis/masies · Contenció = tancar perímetre cap al centre', 'La Contenció és ideal quan hi ha molt personal d’immediat (ex. NENS)'],
            ['Canina: Rastreig vs. Venteig', 'Rastreig = olor específica al TERRA (mostra + UPA) | Venteig = olor a l’AIRE', 'En Venteig el sector ha d’estar lliure d’altres cercadors'],
            ['UPA (Últim Punt Albirament)', 'Últim punt confirmat on es va veure la víctima (o el seu cotxe)', 'Abalisar i protegir immediatament! Comandament proper però ALLUNYAT de l’UPA']
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't31-q1',
      difficulty: 'Fàcil',
      question: 'En quin any es va crear el GRAE (de la fusió del GRM i el GRS) i quines són les 4 seus actuals del GRAE Muntanya a Catalunya segons el manual MAN.SVMN.000?',
      options: [
        'Creat el 2005; seus a Barcelona, Tarragona, Lleida i Girona.',
        'Creat l’any 1997; les 4 seus del GRAE Muntanya són: Cerdanyola, Olot, la Seu d’Urgell i Valls (i GRAE Subaquàtic a Cerdanyola).',
        'Creat l’any 1985; seus a Vic, Manresa, Sort i Reus.',
        'Creat l’any 2010; seus a Lleida i Vic.'
      ],
      correctIndex: 1,
      explanation: 'Capítol 1 del manual MAN.SVMN.000: el GRAE neix l’any 1997 unificant GRM i GRS, i té les seves 4 bases de muntanya a Cerdanyola, Olot, la Seu d’Urgell i Valls.'
    },
    {
      id: 't31-q2',
      difficulty: 'Fàcil',
      question: 'En quin any es va crear i consolidar el GRCR (Grup Caní de Recerca) dels Bombers de la Generalitat i quines són les seves 2 seus fixes?',
      options: [
        'Creat l’any 2007 i consolidat l’any 2022; les seves 2 seus són Lleida i Vic.',
        'Creat l’any 1997; les seves seus són Olot i Valls.',
        'Creat l’any 2021; té una única seu a Cerdanyola.',
        'Creat l’any 2015; les seves seus són Girona i Tarragona.'
      ],
      correctIndex: 0,
      explanation: 'Apartat 1.3 del manual: el GRCR es crea el 2007 i es consolida el 2022 amb dues bases operatives fixes als parcs de Lleida i Vic.'
    },
    {
      id: 't31-q3',
      difficulty: 'Mitjà',
      question: 'Segons el Capítol 5 del manual MAN.SVMN.000, de quina hipòtesi sobre l’estat de la víctima parteix la Recerca EXTENSIVA i de quina parteix la Recerca INTENSIVA?',
      options: [
        'Extensiva: víctima estàtica | Intensiva: víctima en moviment.',
        'Extensiva: parteix de la hipòtesi que la persona està EN MOVIMENT (poc personal, alta velocitat per camins) | Intensiva: parteix de la hipòtesi que la persona està ESTÀTICA (per línies naturals o per sectors).',
        'Totes dues pressuposen que la víctima ja ha sortit del bosc.',
        'L’Extensiva només es fa amb helicòpter.'
      ],
      correctIndex: 1,
      explanation: 'Apartats 5.1 i 5.2: la recerca extensiva busca algú en moviment al llarg de vies de comunicació amb poc personal i rapidesa; la intensiva busca algú estàtic.'
    },
    {
      id: 't31-q4',
      difficulty: 'Mitjà',
      question: 'Quina modalitat de recerca intensiva destaca al manual per tenir una ALTA EFECTIVITAT NOCTURNA?',
      options: [
        'La recerca intensiva per sectors amb 200 voluntaris.',
        'La recerca intensiva per LÍNIES NATURALS (explorant els vorals i marges propers als camins i cursos d’aigua amb suport de llum i crida i escolta).',
        'La recerca aèria amb helicòpter sense visió nocturna.',
        'La recerca de punts probables.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 5.2.a del manual: la recerca intensiva per línies naturals (marges i vorals de camins) presenta una alta efectivitat durant la nit.'
    },
    {
      id: 't31-q5',
      difficulty: 'Mitjà',
      question: 'Quina és la diferència exacta entre un GUIATGE i un ACOMPANYAMENT segons el Capítol 2 del manual MAN.SVMN.000?',
      options: [
        'El Guiatge el fa el GRAE i l’Acompanyament els Mossos.',
        'El Guiatge es fa de manera REMOTA (a distància per telèfon quan hi ha comunicació amb una persona il·lesa desorientada), mentre que l’Acompanyament és PRESENCIAL sobre el terreny amb una persona il·lesa sense necessitat de maniobra tècnica.',
        'El Guiatge és per a ferits greus i l’Acompanyament per a morts.',
        'Són sinònims.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 2.3 del manual: Guiatge = orientació remota per comunicació telefònica; Acompanyament = auxili presencial fins a lloc segur sense maniobres tècniques de rescat.'
    },
    {
      id: 't31-q6',
      difficulty: 'Mitjà',
      question: 'Quina diferència hi ha entre la recerca canina per RASTREIG i la recerca canina per VENTEIG (Cap. 5.6)?',
      options: [
        'El Rastreig es fa en allaus i el Venteig per carretera.',
        'El Rastreig segueix el camí exacte d’olor dipositat sobre el TERRA per una persona concreta (a partir d’una mostra d’olor i des de l’UPA), mentre que el Venteig detecta olor humana dispersa a l’AIRE en grans àrees (amb la zona lliure de gent).',
        'El Venteig necessita corretja curta i mostra de roba de la víctima.',
        'Els gossos del GRCR només fan rastreig.'
      ],
      correctIndex: 1,
      explanation: 'Rastreig = olor específica al terra des de l’UPA amb peça de roba/olor; Venteig = con d’olor humana genèrica en l’aire dins d’un sector buit de personal.'
    },
    {
      id: 't31-q7',
      difficulty: 'Fàcil',
      question: 'Què és l’UPA (Últim Punt d’Albirament) i quina és la primera acció obligatòria que han de fer els bombers en arribar-hi?',
      options: [
        'És l’hospital de destí; cal enviar-hi el SEM.',
        'És l’últim lloc confirmat on es va veure la persona desapareguda (o el seu vehicle); cal PROTEGIR-LO i ABALISAR-LO immediatament per no contaminar l’olor, ubicant el Centre de Comandament allunyat de l’UPA.',
        'És el punt on s’aparca tota la flota de camions de bombers.',
        'És el cim més alt de la comarca.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 6.1 del manual: l’UPA s’ha de preservar i abalisar immediatament per no destruir el rastre olfactiu; el Centre de Comandament s’ubica a prop però allunyat de l’UPA.'
    },
    {
      id: 't31-q8',
      difficulty: 'Mitjà',
      question: 'Quina metodologia de recerca consisteix a tancar primer un perímetre exterior i avançar cap al centre, i és especialment indicada quan es disposa de molt personal immediatament (com en la pèrdua de nens petits)?',
      options: [
        'La recerca extensiva.',
        'La recerca per CONTENCIÓ.',
        'El guiatge telefònic.',
        'La recerca de punts probables.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 5.4 del manual: la recerca per contenció estableix un cèrcol perimetral que es va tancant cap a l’interior per impedir que la víctima (ex. un nen petit) surti de la zona.'
    },
    {
      id: 't31-q9',
      difficulty: 'Fàcil',
      question: 'Quina de les següents opcions recull les 8 maniobres amb cordes descrites a l’apartat 4.2 del manual MAN.SVMN.000?',
      options: [
        'Ancoratges, Ràpel, Ascens tipus escalada, Ascens per corda fixa, Tirolina, Assegurament de víctima, Polispast i Passamans.',
        'Només Ràpel i Polispast.',
        'Salt al buit, tirolina i busseig.',
        'Apuntalament, tall amb cisalla i ràpel.'
      ],
      correctIndex: 0,
      explanation: 'Les 8 maniobres del Capítol 4.2 són: 1. Ancoratges, 2. Ràpel, 3. Ascens tipus escalada, 4. Ascens per corda fixa, 5. Tirolina, 6. Assegurament de víctima, 7. Polispast i 8. Passamans.'
    },
    {
      id: 't31-q10',
      difficulty: 'Fàcil',
      question: 'Com s’anomena l’actuació en què els bombers traslladen persones il·leses fora d’una casa rural o càmping únicament per protegir-les d’un risc extern imminent (com una crescuda o una allau)?',
      options: [
        'Rescat tècnic.',
        'Evacuació.',
        'Guiatge.',
        'Recerca intensiva.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 2.2 del manual: quan les persones no estan ferides ni bloquejades però se les treu preventivament davant d’un perill extern, es tracta d’una Evacuació.'
    },
    {
      id: 't31-q11',
      difficulty: 'Mitjà',
      question: 'S’activa un dispositiu ampli de recerca immediatament després de desaparèixer un nen de 5 anys en una zona boscosa propera a un càmping, amb disponibilitat immediata de desenes d’efectius de Bombers i Mossos. Quina metodologia de recerca humana és la més indicada d’entrada?',
      options: [
        'Recerca intensiva per sectors sense cap control perimetral.',
        'Recerca per CONTENCIÓ (tancant primer un perímetre exterior a pistes, cruïlles i carreteres per anar tancant el cercle cap al centre).',
        'Guiatge remot per telèfon mòbil.',
        'Recerca exclusiva amb helicòpter sense suport a terra.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 5.4 del manual: la recerca per contenció tanca un perímetre exterior cap al centre i és la metodologia idònia quan es disposa de molt personal immediat, especialment en desaparicions de nens petits.'
    },
    {
      id: 't31-q12',
      difficulty: 'Mitjà',
      question: 'A les 23:30 h, un boletaire sense mòbil ni llanterna no ha tornat al seu cotxe. Després d’una batuda ràpida per pistes sense èxit, el comandament decideix buscar a peu fins a 10–20 m a banda i banda dels marges dels camins i torrents. Quina metodologia s’aplica i per què?',
      options: [
        'Recerca extensiva, perquè pressuposa que la víctima corre ràpidament pel bosc.',
        'Recerca intensiva per LÍNIES NATURALS, perquè pressuposa víctima estàtica prop d’un camí/rierol i presenta una alta efectivitat nocturna.',
        'Recerca per contenció, perquè només hi ha 4 bombers disponibles.',
        'Recerca canina per venteig dins de l’edifici del Centre de Comandament.'
      ],
      correctIndex: 1,
      explanation: 'La recerca intensiva per línies naturals explora vorals, marges i barrancs propers (10–20 m) sota la hipòtesi de víctima estàtica i destaca per la seva alta efectivitat nocturna amb llanternes i crida i escolta.'
    },
    {
      id: 't31-q13',
      difficulty: 'Difícil',
      question: 'Respecte a les metodologies de recerca humana en el medi natural (MAN.SVMN.000), assenyala quina afirmació és INCORRECTA:',
      options: [
        'La recerca extensiva parteix de la hipòtesi que la víctima està en moviment i utilitza poc personal a alta velocitat per pistes i camins.',
        'La recerca intensiva per sectors realitza un escombrat total en paral·lel, requereix molt personal, té baixa velocitat i màxima minuciositat.',
        'La recerca de punts probables comprova directament refugis, masies abandonades, coves, fonts o miradors freqüentats.',
        'La recerca extensiva parteix de la hipòtesi que la víctima està inconscient i immòbil fora dels camins, per la qual cosa és la metodologia més lenta i minuciosa de totes.'
      ],
      correctIndex: 3,
      explanation: 'És incorrecte: la recerca extensiva pressuposa víctima EN MOVIMENT i és ràpida amb poc personal per camins i pistes; la que pressuposa víctima estàtica/inconscient i és lenta i minuciosa és la recerca intensiva per sectors.'
    },
    {
      id: 't31-q14',
      difficulty: 'Difícil',
      question: 'Sobre l’actuació del Grup Caní de Recerca (GRCR) i la gestió de l’UPA (Últim Punt d’Albirament) al manual MAN.SVMN.000, quina afirmació és INCORRECTA?',
      options: [
        'Els gossos de rastreig segueixen l’olor específica sobre el terra a partir d’una mostra d’olor de la persona desapareguda i sortint des de l’UPA.',
        'Els gossos de venteig treballen solts detectant cons d’olor humana genèrica dispersa a l’aire, i requereixen que la zona estigui lliure d’altres cercadors.',
        'La primera dotació que arriba a l’UPA ha d’abalisar-lo i protegir-lo immediatament perquè ningú no contamini el rastre olfactiu.',
        'Per coordinar millor l’operatiu, el Centre de Comandament i l’estacionament de tots els camions s’han d’ubicar just damunt mateix de l’UPA.'
      ],
      correctIndex: 3,
      explanation: 'És incorrecte: aparcar camions o muntar el Centre de Comandament damunt de l’UPA destrueix i contamina el rastre olfactiu per als gossos de rastreig. El CCA s’ha d’ubicar a prop però ALLUNYAT de l’UPA.'
    },
    {
      id: 't31-q15',
      difficulty: 'Mitjà',
      question: 'Una dotació de bombers localitza un excursionista perdut però COMPLETAMENT IL·LÈS, lleugerament esgotat, sense cap lesió ni bloqueig físic, i l’acompanya caminant pel sender fins al seu vehicle donant-li aigua i llum sense fer cap maniobra tècnica de cordes. Com classifica el Capítol 2 aquesta intervenció?',
      options: [
        'Guiatge.',
        'Acompanyament.',
        'Rescat.',
        'Evacuació.'
      ],
      correctIndex: 1,
      explanation: 'L’Acompanyament és l’auxili PRESENCIAL d’una persona il·lesa o esgotada fins a lloc segur sense maniobres tècniques. (El Guiatge és remot per telèfon; el Rescat és amb persona ferida o bloquejada; l’Evacuació és preventiva per un risc extern).'
    },
    {
      id: 't31-q16',
      difficulty: 'Mitjà',
      question: 'Dins les 8 maniobres amb cordes descrites a l’apartat 4.2 del manual MAN.SVMN.000, quina maniobra queda reservada als especialistes GRAE per les enormes tensions mecàniques que genera sobre els ancoratges, i quin angle màxim s’ha de respectar en la triangulació d’ancoratges?',
      options: [
        'El passamans queda reservat al GRAE | L’angle de triangulació ha de ser sempre de 150°.',
        'La tirolina queda reservada al GRAE | Els ancoratges redundants (mínim 2 punts) han de mantenir un angle < 60° entre cintes.',
        'El ràpel queda reservat al GRAE | Només cal 1 punt d’ancoratge amb angle de 120°.',
        'El polispast 2:1 queda reservat al GRAE | L’angle òptim és de 90°.'
      ],
      correctIndex: 1,
      explanation: 'Segons el manual, la tirolina (pas aeri tensat) es reserva als especialistes GRAE per les elevades tensions que genera. Els ancoratges han de ser redundants (mínim 2 punts) i amb un angle < 60° entre cintes.'
    },
    {
      id: 't31-q17',
      difficulty: 'Fàcil',
      question: 'Quina seu del GRAE a Catalunya concentra també la base del GRAE Subaquàtic i l’helicòpter de rescat amb grua i personal mèdic del GEM, i quins dos plans especials de protecció civil s’integren al Capítol 1 de MAN.SVMN.000?',
      options: [
        'Seu d’Olot | Plans INFOCAT i INUNCAT.',
        'Seu de Cerdanyola del Vallès | Plans NEUCAT (nevades) i ALLAUCAT (allaus), sota el marc de la Llei 5/1994.',
        'Seu de Valls | Plans PLASEQCAT i TRANSCAT.',
        'Seu de la Seu d’Urgell | Plans PENTA i RADCAT.'
      ],
      correctIndex: 1,
      explanation: 'A Cerdanyola del Vallès hi ha una de les 4 seus del GRAE Muntanya (juntament amb Olot, la Seu d’Urgell i Valls), a més del GRAE Subaquàtic i l’helicòpter de rescat amb grua i metge del GEM. Els plans del Capítol 1 són NEUCAT i ALLAUCAT.'
    },
    {
      id: 't31-q18',
      difficulty: 'Fàcil',
      question: 'Quina és la diferència principal entre la Recerca Intensiva per Sectors i la Recerca de Punts Probables segons el Capítol 5 del manual MAN.SVMN.000?',
      options: [
        'La intensiva per sectors fa un escombrat en línia paral·lela cobrint el 100% d’una parcel·la (molt personal, baixa velocitat, màxima minuciositat), mentre que la de punts probables comprova directament llocs d’interès concrets (masies, refugis, coves, fonts).',
        'La intensiva per sectors es fa només en vehicle tot terreny a gran velocitat i la de punts probables tanca un perímetre amb 100 patrulles.',
        'La de punts probables és exclusiva dels gossos de venteig i la intensiva per sectors és exclusiva de l’helicòpter.',
        'Totes dues pressuposen que la víctima camina a gran velocitat per carreteres asfaltades.'
      ],
      correctIndex: 0,
      explanation: 'La recerca intensiva per sectors pentina minuciosament tota una parcel·la en paral·lel (molt personal, baixa velocitat); la de punts probables envia equips ràpids a comprovar refugis, cabanes, masies o zones freqüentades.'
    }
  ]
};
