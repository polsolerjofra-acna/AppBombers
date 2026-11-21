export const tema25Colapses = {
  id: 'tema-30',
  number: 30,
  code: 'MAN.SVES.000',
  title: 'Intervenció Bàsica en Estructures Col·lapsades, Apuntalaments i INSARAG',
  category: 'Manual Operatiu SGO — Salvament en Estructures Col·lapsades',
  estimatedMinutes: 45,
  importance: {
    title: "Radar d'Examen — Tema 30 (MAN.SVES.000 V.1): Col·lapses, GREC, Apuntalaments i Senyals",
    frequency: 'Molt Alta (3-4 preguntes fixes sobre GREC 2021, puntals ≤1 m / 1.000 kg, marcatge INSARAG, emplaçament 2×h i senyals acústics)',
    summary:
      "Manual de rescat en col·lapses: història d'INSARAG (Mèxic 1985, Armènia 1988) i creació del GREC (2021 / STRAC 2025), 3 fases de recerca (Física, Instrumentalitzada amb geòfons, Canina per venteig), apuntalaments (≤ 1 m, 1.000 kg/puntal, Sotapont-Puntals-Jaç, tornapuntes 45°–60°), marcatge INSARAG (V 50 cm, L-n, D-n, C), vehicles a ≥ 2 × h i senyals acústics.",
    hotTopics: [
      'Cap. 1: Terratrèmols de Mèxic (1985) i Armènia (1988) → creació d’INSARAG (ONU, anys 90), OSOCC i equips USAR (lleugers, mitjans, pesats). GREC (Grup de Recolzament en Estructures Col·lapsades) constituït l’any 2021 (certificació europea STRAC iniciada el 2025).',
      'Cap. 2-3: Col·lapse Total, Parcial i Secundari (el més perillós per als bombers durant el rescat) i les 3 fases de recerca: 1) Física (vista/oïda + Crida i escolta), 2) Instrumentalitzada (geòfons sísmics/acústics i càmeres) i 3) Canina (maniobra de Venteig en silenci i sense gent).',
      'Cap. 4 (Apuntalaments): Distància màxima entre puntals ≤ 1 metre · Resistència considerada per puntal = 1.000 kg (1 tona) · Les 3 parts verticals: 1. Sotapont (recull), 2. Puntals (traslladen), 3. Jaç de taulons (reparteix) · Tornapuntes inclinats a 45°–60°.',
      'Cap. 5-6: Marcatge INSARAG de víctimes (V de 50 cm, L-n vives, D-n mortes, C = Clear), emplaçament de vehicles a ≥ 2 × h (dues vegades l’alçada de l’edifici o 2 edificacions no afectades, a la part alta del pendent) i Senyals Acústics (Evacuar = 3 curts d’1 s; Aturar/Silenci = 1 llarg de 3 s; Continuar = 1 llarg + 1 curt).'
    ],
    traps: [
      'Confondre els senyals acústics d’alarma: 3 tocs curts (1 s) = EVACUAR IMMEDIATAMENT! 1 toc llarg (3 s) = ATURAR OPERACIONS / SILENCI! 1 toc llarg + 1 toc curt = REPRENDRE / CONTINUAR OPERACIONS!',
      'Superar 1 metre de separació entre puntals o atribuir més de 1.000 kg de càrrega a un puntal estàndard en càlculs d’apuntalament d’emergència.',
      'Invertir les 3 parts d’un apuntalament vertical: a dalt sota el sostre va el SOTAPONT (recull la càrrega), al mig els PUNTALS (traslladen la càrrega) i a baix a terra el JAÇ DE TAULONS (reparteix la càrrega)!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-3 INSARAG, GREC i Recerca',
      title: '1–3. Història d’INSARAG, el Grup GREC (2021), Tipus de Col·lapses i les 3 Fases de Recerca',
      subtitle: 'Mèxic 85 i Armènia 88, equips USAR, col·lapse secundari i recerca física, instrumental i canina.',
      blocks: [
        {
          type: 'text',
          heading: '1. Origen d’INSARAG (ONU), Equips USAR i Creació del GREC (2021 / STRAC 2025)',
          paragraphs: [
            "Arran dels terratrèmols de Mèxic (1985) i Armènia (1988), les Nacions Unides van crear als anys 1990 el grup INSARAG (International Search and Rescue Advisory Group) per estandarditzar el rescat urbà.",
            "INSARAG coordina els centres OSOCC (On-Site Operations Coordination Centre) i classifica els equips internacionals USAR (Urban Search And Rescue) en 3 categories: Lleugers, Mitjans i Pesats.",
            "Als Bombers de la Generalitat, l'any 2021 es va constituir oficialment el GREC (Grup de Recolzament en Estructures Col·lapsades), especialista en apuntalaments i rescat USAR (Badalona 2020 i 2024, Pont de Vilomara 2022, Armènia 2024 i certificació europea STRAC el 2025)."
          ]
        },
        {
          type: 'table',
          title: '2–3. Tipus de Col·lapses i Les 3 Metodologies de Recerca de Víctimes (MAN.SVES.000)',
          subtitle: 'Classificació d’esfondraments i fases de localització sota runa',
          headers: ['Concepte / Fase de Recerca', 'Definició i Mètode Oficial del Manual', 'Condició Operativa Clau'],
          rows: [
            ['Col·lapse Total vs. Parcial', 'Total: esfondrament complet de l’edifici · Parcial: només una part cedeix', 'Generen buits de supervivència o "triangles de vida" sota elements rígids'],
            ['Col·lapse Secundari', 'Segon esfondrament d’elements inestables mentre els bombers estan treballant', 'És el PRINCIPAL RISc MORTAL per als rescatadors (cal apuntalar i vigilar!)'],
            ['1. Recerca Física', 'Inspecció visual/auditiva superficial + Maniobra de CRIDA I ESCOLTA', 'Es demana silenci absolut, un bomber crida/pica i la resta escolten en cercle'],
            ['2. Recerca Instrumentalitzada', 'Ús de GEÒFONS (sensors sísmics/acústics de vibració) i CÀMERES endoscòpiques/pèrtiga', 'Exigeix aturar generadors i maquinària (silenci absolut amb 1 toc llarg de 3 s!)'],
            ['3. Recerca Canina (GRCR)', 'Gossos d’escombrat que fan la maniobra de VENTEIG (olor dispersa a l’aire)', 'La zona calenta ha d’estar LLIURE de personal i fum per no saturar l’olfacte del gos']
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 4 Apuntalaments',
      title: '4. Apuntalaments d’Emergència: Parts, Distància (≤ 1 m), Càrrega (1.000 kg) i Angles',
      subtitle: 'Sotapont, puntals i jaç de taulons, falques contraposades i apuntalament inclinat (45° a 60°).',
      blocks: [
        {
          type: 'text',
          heading: '4.1–4.3. Principis de l’Apuntalament d’Emergència i les Seves 3 Parts',
          paragraphs: [
            "Un apuntalament d'emergència no pretén aixecar ni retornar l'estructura deformada a la seva posició original (forçar-la podria trencar-la!), sinó CONSOLIDAR i sostenir els elements danyats per evitar un col·lapse secundari i obrir un corredor segur.",
            "Criteris numèrics oficials (Cap. 4): separació màxima entre puntals consecutius ≤ 1 METRE, i càrrega màxima segura considerada de 1.000 kg (1 tona) per puntal ben aplomat a 90°.",
            "Un apuntalament vertical consta de 3 PARTS (de dalt a baix):",
            "• 1) SOTAPONT (a dalt, contra el sostre o biga): La seva funció és RECOLLIR la càrrega de l'element danyat.",
            "• 2) PUNTALS (al mig, verticals a 90° amb falques contraposades): La seva funció és TRASLLADAR la càrrega sense vinclar.",
            "• 3) JAÇ DE TAULONS o Solera (a baix, sobre el terra): La seva funció és REPARTIR la càrrega en més superfície per no punxar el forjat inferior."
          ]
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! Sotapont vs. Puntal vs. Jaç i Estampidor vs. Tornapunta',
          paragraphs: [
            "• VERTICAL (Sotapont → Puntals → Jaç): El sotapont va a DALT (recull), els puntals al MIG (traslladen, ≤ 1 m) i el jaç de taulons a BAIX (reparteix).",
            "• HORITZONTAL (Estampidor): Apuntala dues parets paral·leles o les parets d'una rasa. • INCLINAT (Tornapuntes): Conté façanes o murs amb risc de bolcada formant un angle òptim de 45° a 60° amb el terra."
          ]
        },
        {
          type: 'diagram',
          title: 'Esquema de les 3 Parts de l’Apuntalament (≤ 1 m · 1.000 kg), Marcatge INSARAG i Senyals Acústics',
          diagramType: 'shoring_insarag',
          caption:
            '1) De dalt a baix: Sotapont (recull) → Puntals (traslladen, separats ≤ 1 m, 1.000 kg/puntal) → Jaç de taulons (reparteix). 2) Marcatge INSARAG amb V de 50 cm (L-n vives, D-n mortes, C = Clear). 3) Senyals acústics d’alarma.'
        },
        {
          type: 'table',
          title: 'Tipologia d’Apuntalaments i Paràmetres Tècnics (MAN.SVES.000 Cap. 4)',
          subtitle: 'Verticals, horitzontals i inclinats (tornapuntes)',
          headers: ['Tipus d’Apuntalament', 'Aplicació Principal', 'Xifres i Angles Oficials d’Examen'],
          rows: [
            ['1. Apuntalament Vertical', 'Sostenir forjats, bigues, jàsseres o obertures (portes/finestres)', 'Separació entre puntals ≤ 1 m · Resistència considerada = 1.000 kg (1 t) per puntal'],
            ['2. Apuntalament Horitzontal (Estampidor)', 'Contenir dues parets paral·leles o les parets d’una rasa/excavació', 'Transmet l’empenta horitzontal d’un mur sà a l’altre'],
            ['3. Apuntalament Inclinat o Oblic', 'Estabilitzar façanes o murs de càrrega amb risc de bolcada cap a fora', 'Les TORNAPUNTES han de formar un angle òptim d’entre 45° i 60° amb el terra!']
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 5-6 INSARAG, 2×h i Senyals',
      title: '5–6. Senyalització INSARAG de Víctimes, Emplaçament (2 × h) i Senyals Acústics',
      subtitle: 'Marcatge V (50 cm), L-n, D-n i rombe C, distància de vehicles i codi de botzina/xiulet.',
      blocks: [
        {
          type: 'text',
          heading: '5. Senyalització INSARAG i 6. Seguretat Operativa (2 × h i Senyals Acústics)',
          paragraphs: [
            "En una zona de col·lapse s'utilitzen cintes i bastons lluminosos: VERMELL indica zona de perill o accés prohibit (i una creu 'X' significa no passar), mentre que VERD indica ruta segura.",
            "Per marcar VÍCTIMES amb esprai s'utilitza el sistema INSARAG: es pinta una 'V' de 50 cm amb fletxa cap al punt potencial; un cop confirmades s'anota 'L - n' (vives) i 'D - n' (mortes). En rescatar les vives es ratlla la fila L-n, i quan totes les víctimes s'han extret es dibuixa un rombe amb 'C' (Clear).",
            "També s'usa el quadrat INSARAG d'avaluació estructural (dins: estat habitable/perillós; dalt: riscos gas/aigua; esquerra: equip USAR; dreta: data/hora; baix: víctimes).",
            "A l'arribada (Cap. 6.1), els vehicles s'emplacen sempre a la PART ALTA del pendent i a una distància mínima ≥ 2 × h (dues vegades l'alçada de l'edifici) o dues edificacions no afectades."
          ]
        },
        {
          type: 'table',
          title: '6.5. Taula Oficial de Senyals Acústics d’Emergència en Col·lapses (MAN.SVES.000 pàg. 22)',
          subtitle: 'Codi universal de botzina / sirena / xiulet del Cap de Seguretat — MEMORITZACIÓ OBLIGATÒRIA!',
          headers: ['Ordre Operativa', 'Senyal Acústic Exacte', 'Representació Visual i Actuació Immediata'],
          rows: [
            ['🚨 EVACUAR IMMEDIATAMENT!', '3 tocs curts (d’1 segon cadascun)', '[ ▄  ▄  ▄ ] → Deixar les eines i sortir de la zona calenta pel camí segur cap al punt de reunió!'],
            ['✋ ATURAR OPERACIONS / SILENCI!', '1 toc llarg (de 3 segons)', '[ ▄▄▄▄ ] → Aturar tota maquinària, generadors i conversa (per escolta/geòfons o perill puntual)'],
            ['▶ CONTINUAR / REPRENDRE OPERACIONS', '1 toc llarg (3 s) + 1 toc curt (1 s)', '[ ▄▄▄▄  ▄ ] → Es reprèn l’activitat normal de rescat i desescombre'],
            ['🆘 S.O.S. (Bomber atrapat / Socors)', 'Tocs curts repetitius i continus', '[ ▄ ▄ ▄ ▄ ▄ ▄... ] → Activació immediata d’ajuda cap al punt d’emissió del so']
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Mode Nen Petit i Trucs',
      title: 'Síntesi Visual i Trucs Mnemotècnics: Apuntalaments i Codi de Xiulet',
      subtitle: 'Com no confondre mai els senyals acústics ni les parts d’un apuntalament.',
      blocks: [
        {
          type: 'easy',
          title: 'Mode Nen Petit: L’Entrepà de l’Apuntalament i el Semàfor Sonor de la Botzina!',
          metaphor:
            'Pensa en un apuntalament vertical com un entrepà que aguanta el sostre:',
          explanation:
            "• DALT (Sotapont): Toca el sostre i RECULL tot el pes.\n• MIG (Puntals): Aplomats a 90°, separats ≤ 1 m (1.000 kg/u), TRASLLADEN el pes cap avall.\n• BAIX (Jaç de taulons): Fa de llit a terra i REPARTEIX el pes.\n• Botzina: 3 curts (1 s) = EVACUAR! | 1 llarg (3 s) = SILENCI / ATURAR | 1 llarg + 1 curt = CONTINUAR | Curts continus = SOS!",
          takeaway: 'Sotapont (dalt, recull) → Puntals (mig, ≤ 1 m, 1.000 kg) → Jaç (baix, reparteix) | 3 curts = Evacuar | 1 llarg = Silenci/Aturar.'
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · Codi Complet d’Avisos Sonors en Col·lapses (INSARAG)',
          acronym: '3 CURTS (1s) = EVACUAR  |  1 LLARG (3s) = ATURAR  |  1 LLARG + 1 CURT = CONTINUAR  |  CONTINUS = SOS',
          trick:
            '• 3 tocs curts (1 s) → EVACUAR immediatament cap al punt de reunió.\n• 1 toc llarg (3 s) → ATURAR operacions i silenci absolut (codi "1 i 3": Tot Mort/parat).\n• 1 toc llarg + 1 toc curt → REPRENDRE / continuar treballs (codi "1 i 1": Tothom Torna).\n• Tocs curts repetitius continus → SOS (bomber atrapat / socors).',
          example:
            'Si sents 3 tocs curts seguits, deixa les eines i evacua al moment. Si sents 1 toc llarg de 3 s, atura generadors i fes silenci.'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · Resum 1/2',
      title: 'Resum Imprescindible d’Examen (1/2) — INSARAG, GREC, Recerca i Apuntalaments',
      subtitle: 'Síntesi d’alta densitat dels Capítols 1 a 4 del manual MAN.SVES.000.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 1: Història, Recerca i Xifres d’Apuntalament',
          subtitle: 'Dades clau dels Capítols 1, 2, 3 i 4',
          headers: ['Concepte', 'Dada Oficial Exacta', 'Detall d’Examen'],
          rows: [
            ['Origen INSARAG i USAR', 'Terratrèmols Mèxic (1985) i Armènia (1988) → INSARAG (anys 90)', 'Centre OSOCC · Equips USAR: Lleugers, Mitjans i Pesats'],
            ['Grup GREC (Bombers)', 'Constituït oficialment l’any 2021 (certificació STRAC el 2025)', 'Intervencions: Badalona 2020/2024, Pont de Vilomara 2022, Armènia 2024'],
            ['3 Fases de Recerca', '1. Física (Crida i escolta) · 2. Instrumental (Geòfons/Càmeres) · 3. Canina (Venteig)', 'En recerca instrumental i canina cal silenci i zona lliure de personal'],
            ['Xifres de Puntals', 'Distància màxima entre puntals ≤ 1 metre · Resistència = 1.000 kg/puntal', 'No es busca aixecar l’estructura sinó consolidar-la'],
            ['3 Parts Apuntalament Vertical', '1. Sotapont (dalt: recull) → 2. Puntals (mig: traslladen) → 3. Jaç de taulons (baix: reparteix)', 'Falques sempre contraposades i puntals aplomats a 90°'],
            ['Apuntalament Inclinat', 'Tornapuntes amb angle òptim de 45° a 60° amb el terra', 'Per contenir façanes o murs amb risc de bolcada exterior']
          ]
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · Resum 2/2',
      title: 'Resum Imprescindible d’Examen (2/2) — Marcatge INSARAG, Emplaçament 2×h i Senyals Acústics',
      subtitle: 'Síntesi d’alta densitat dels Capítols 5 i 6 del manual MAN.SVES.000.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 2: Codis Visuals i Acústics de Seguretat en Col·lapses',
          subtitle: 'Dades clau dels Capítols 5 i 6',
          headers: ['Àmbit de Seguretat', 'Codi / Xifra Oficial Exacta', 'Significat Operatiu'],
          rows: [
            ['Cintes i Sticks de Color', 'Vermell = Perill / No passar (X) · Verd = Ruta segura', 'Abalisament dinàmic de corredors d’entrada i sortida'],
            ['Marcatge Víctimes INSARAG', 'Lletra "V" de 50 cm + fletxa · "L - n" (Vives) · "D - n" (Mortes)', 'Es ratlla en rescatar; quan s’evacuen totes es posa rombe "C" (Clear)'],
            ['Emplaçament de Vehicles', 'Distància mínima ≥ 2 × h (2 cops l’alçada) o 2 edificacions no afectades', 'Sempre estacionar a la part ALTA del pendent'],
            ['Senyal d’EVACUACIÓ', '3 tocs curts (d’1 segon cadascun: ▄ ▄ ▄)', 'Abandonar immediatament l’estructura cap al punt de reunió'],
            ['Senyal d’ATURAR / SILENCI', '1 toc llarg (de 3 segons: ▄▄▄▄)', 'Aturar eines i fer silenci absolut'],
            ['Senyal de CONTINUAR i SOS', 'Continuar = 1 llarg (3 s) + 1 curt (1 s) | SOS = tocs curts continus', 'Comunicació acústica universal a tota la zona calenta']
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't30-q1',
      difficulty: 'Mitjà',
      question: 'Segons el Capítol 6.5 del manual MAN.SVES.000, quin és el senyal acústic d’emergència que ordena EVACUAR IMMEDIATAMENT l’estructura col·lapsada i quin ordena ATURAR OPERACIONS / SILENCI?',
      options: [
        'Evacuar immediatament: 1 toc llarg (de 3 segons) | Aturar operacions / Silenci: 3 tocs curts (d’1 segon cadascun).',
        'Evacuar immediatament: 3 tocs curts (d’1 segon cadascun) | Aturar operacions / Silenci: 1 toc llarg (de 3 segons).',
        'Evacuar immediatament: 1 toc llarg (de 3 segons) + 1 toc curt | Aturar operacions / Silenci: 2 tocs llargs (de 3 segons).',
        'Evacuar immediatament: tocs curts repetitius continus sense pausa | Aturar operacions / Silenci: 2 tocs curts (d’1 segon).'
      ],
      correctIndex: 1,
      explanation: 'Taula 6.5 del manual: Evacuar = 3 tocs curts (1 s cadascun); Aturar operacions = 1 toc llarg (3 s); Continuar operacions = 1 toc llarg (3 s) + 1 toc curt; SOS = tocs curts repetitius continus.'
    },
    {
      id: 't30-q2',
      difficulty: 'Mitjà',
      question: 'En un apuntalament d’emergència (Cap. 4 del manual MAN.SVES.000), quina és la distància màxima permesa entre puntals i quina resistència màxima de càrrega es considera per a cada puntal?',
      options: [
        'Distància màxima entre puntals: ≤ 2 metres (no pot superar els 2 metres) | Resistència màxima considerada: 2.500 kg (2,5 tones) per puntal.',
        'Distància màxima entre puntals: ≤ 1 metre (no pot superar el metre) | Resistència màxima considerada: 1.000 kg (1 tona) per puntal.',
        'Distància màxima entre puntals: ≤ 0,5 metres (no pot superar els 50 cm) | Resistència màxima considerada: 500 kg (0,5 tones) per puntal.',
        'Distància màxima entre puntals: ≤ 1,5 metres (no pot superar el metre i mig) | Resistència màxima considerada: 3.000 kg (3 tones) per puntal.'
      ],
      correctIndex: 1,
      explanation: 'Segons el Capítol 4 del manual MAN.SVES.000, la distància entre puntals no ha de superar 1 metre i es calcula una capacitat portant segura de 1.000 kg (1 tona) per cada puntal.'
    },
    {
      id: 't30-q3',
      difficulty: 'Mitjà',
      question: 'Quines són les 3 parts fonamentals d’un apuntalament vertical ordenades de DALT a BAIX i quina funció compleix cadascuna?',
      options: [
        '1. Jaç de taulons (a dalt, recull la càrrega del sostre) → 2. Tornapuntes (al mig, transmeten l’empenta) → 3. Sotapont (a baix, reparteix la càrrega al terra).',
        '1. Sotapont (a dalt, recull la càrrega) → 2. Puntals (al mig, traslladen la càrrega) → 3. Jaç de taulons (a baix sobre el terra, reparteix la càrrega).',
        '1. Solera (a dalt, fixa els puntals al forjat) → 2. Estampidors (al mig, suporten la compressió) → 3. Sotapont (a baix, evita el punxonament del terra).',
        '1. Falques contraposades (a dalt, ajusten l’alçada) → 2. Jàssera (al mig, rebrà l’esforç) → 3. Sabata metàl·lica (a baix, absorbeix l’empenta lateral).'
      ],
      correctIndex: 1,
      explanation: 'Apartat 4.2 del manual: el Sotapont (superior) recull la càrrega de l’element danyat; els Puntals (verticals) la traslladen; i el Jaç de taulons (inferior) la reparteix al terra.'
    },
    {
      id: 't30-q4',
      difficulty: 'Mitjà',
      question: 'En un apuntalament inclinat o oblic per contenir un mur o façana, quin és l’angle òptim que han de formar les tornapuntes amb el terra?',
      options: [
        'Entre 10° i 20°.',
        'Entre 45° i 60°.',
        'Exactament 90°.',
        'Entre 75° i 85°.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 4.3 del manual: en els apuntalaments inclinats les tornapuntes treballen de manera òptima formant un angle d’entre 45° i 60° amb l’horitzontal.'
    },
    {
      id: 't30-q5',
      difficulty: 'Mitjà',
      question: 'A quina distància mínima de seguretat s’han d’emplaçar els vehicles d’emergència en arribar a una estructura amb risc de col·lapse segons l’apartat 6.1?',
      options: [
        'A una distància mínima d’1 vegada l’alçada de l’edifici (1 × h) o a la façana contigua, situant-los preferentment a la part baixa del pendent per facilitar l’accés.',
        'A una distància mínima de 2 vegades l’alçada de l’edifici (2 × h) o a una distància mínima de dues edificacions no afectades (i sempre a la part alta del pendent).',
        'A una distància fixa mínima de 15 metres de la façana principal, sempre en línia perpendicular al carrer encara que hi hagi risc de projecció de runa.',
        'A una distància mínima d’1,5 vegades l’alçada de l’edifici (1,5 × h) o d’una edificació no afectada, mantenint els motors engegats a sotavent de l’estructura.'
      ],
      correctIndex: 1,
      explanation: 'Els vehicles s’han d’ubicar a la part alta del pendent i a una distància mínima de 2 × h (dues vegades l’alçada de l’edificació) o superant dues edificacions sanes.'
    },
    {
      id: 't30-q6',
      difficulty: 'Fàcil',
      question: 'En quin any es va constituir oficialment el GREC (Grup de Recolzament en Estructures Col·lapsades) als Bombers de la Generalitat i quins dos terratrèmols històrics van motivar la creació d’INSARAG?',
      options: [
        'GREC: 1997 (amb certificació INSARAG el 2010) | Terratrèmols de Lisboa (1969) i San Francisco (1989).',
        'GREC: 2021 (amb procés de certificació STRAC el 2025) | Terratrèmols de Mèxic (1985) i Armènia (1988).',
        'GREC: 2011 (arran de la creació del GRAE urbà) | Terratrèmols d’Haití (2010) i Fukushima (2011).',
        'GREC: 2007 (integrat al Grup de Riscos Tecnològics) | Terratrèmols d’Itàlia (2009) i Lorca (2011).'
      ],
      correctIndex: 1,
      explanation: 'Capítol 1 del manual MAN.SVES.000: INSARAG neix arran dels terratrèmols de Mèxic (1985) i Armènia (1988), i el GREC es constitueix oficialment a Bombers de la Generalitat l’any 2021.'
    },
    {
      id: 't30-q7',
      difficulty: 'Mitjà',
      question: 'En el sistema de marcatge INSARAG de víctimes sobre una estructura col·lapsada, què indiquen la lletra "V" (de 50 cm), els codis "L - 2", "D - 1" i un rombe amb una "C" (Clear)?',
      options: [
        'V = Vehicle sepultat; L - 2 = 2 víctimes Lleus (Low); D - 1 = 1 víctima Desapareguda (Disappeared); C = Col·lapse estructural imminent (Collapse).',
        'V = ubicació de víctima potencial; L - 2 = 2 víctimes Vives confirmades (Live); D - 1 = 1 víctima Morta confirmada (Dead); C = Clear (totes les víctimes ja han estat evacuades).',
        'V = Zona Verda segura; L - 2 = 2 nivells de runa Lliures; D - 1 = 1 cavitat Dins l’estructura; C = Zona Calenta sense accés per als equips de rescat.',
        'V = Via d’accés apuntalada; L - 2 = 2 línies de vida actives; D - 1 = 1 detector sísmic col·locat; C = Edifici Controlat per a desenrunament mecànic.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 5.2 del manual: V (50 cm) assenyala el punt de víctimes; L-n indica vives (Live); D-n indica mortes (Dead); es ratlla en extreure-les i es tanca amb C (Clear) quan s’ha buidat el punt.'
    },
    {
      id: 't30-q8',
      difficulty: 'Mitjà',
      question: 'Quina maniobra olfactiva utilitzen els gossos de recerca (GRCR) en estructures col·lapsades i quina condició ha de complir la zona calenta?',
      options: [
        'Maniobra de RASTREIG amb corretja curta seguint la petjada directa sobre la runa, amb un binomi de bombers avançant al costat per assegurar el guia caní.',
        'Maniobra de VENTEIG (detecció del con d’olor humana dispers a l’aire que surt d’entre la runa), amb la zona en silenci i LLIURE de personal per no contaminar l’olor.',
        'Maniobra de MARCATGE PASSIU amb manteniment dels equips de generació elèctrica engegat perquè el flux d’aire dels ventiladors orienti l’olor cap al gos.',
        'Maniobra de SONDEIG PROHIBIDA en estructures col·lapsades: els gossos del GRCR només s’utilitzen un cop les retroexcavadores han retirat els forjats superiors.'
      ],
      correctIndex: 1,
      explanation: 'En estructures col·lapsades (apartat 3.3), els gossos treballen per VENTEIG (olor en l’aire) i cal retirar el personal de la zona calenta perquè els gossos no marquin els mateixos bombers.'
    },
    {
      id: 't30-q9',
      difficulty: 'Fàcil',
      question: 'Quin senyal acústic indica als equips de rescat que poden CONTINUAR o REPRENDRE les operacions després d’una parada?',
      options: [
        '3 tocs curts (d’1 segon cadascun) repetits en sèries de dos: [ ▄  ▄  ▄ ].',
        '1 toc llarg (de 3 segons) seguit d’1 toc curt (d’1 segon): [ ▄▄▄▄  ▄ ].',
        '1 sol toc llarg (de 3 segons) sense tocs curts posteriors: [ ▄▄▄▄ ].',
        'Tocs curts repetitius continus durant 10 segons: [ ▄  ▄  ▄  ▄ ... ].'
      ],
      correctIndex: 1,
      explanation: '1 toc llarg (3 s) + 1 toc curt indica "Continuar / Reprendre operacions".'
    },
    {
      id: 't30-q10',
      difficulty: 'Fàcil',
      question: 'Quins aparells s’utilitzen en la Fase 2 de Recerca Instrumentalitzada per detectar mínimes vibracions o cops de víctimes sepultades sota metres de runa?',
      options: [
        'Els explosímetres catalítics de %LII, els anemòmetres de paleta i els detectors multigas PID.',
        'Els GEÒFONS (sensors sísmics i acústics d’alta sensibilitat) i les càmeres endoscòpiques o de pèrtiga.',
        'Els dosímetres personals de radiació ionitzant i els espectròmetres portàtils de masses (FTIR).',
        'Els higròmetres ambientals, les brúixoles digitals de precisió i els inclinòmetres làser manuals.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 3.2 del manual: la recerca instrumentalitzada empra geòfons (detecció acústica/sísmica de vibracions) i càmeres de cerca visual en cavitats.'
    },
    {
      id: 't30-q11',
      difficulty: 'Difícil',
      question: 'En una intervenció en un edifici d’habitatges de 4 plantes (PB + 3), la jàssera principal de la planta 2 presenta una fissura greu amb fletxa evident i risc de col·lapse secundari. Quina actuació operativa és IMPRESCINDIBLE en muntar l’apuntalament vertical?',
      options: [
        'Apuntalar únicament la planta 2 recolzant els puntals directament sobre el forjat d’aquesta planta sense element repartidor, ja que el formigó armat absorbeix la càrrega puntual.',
        'Apuntalar la jàssera afectada a la planta 2 i replicar l’apuntalament a totes les plantes inferiors (planta 1 i planta baixa) fins a transmetre la càrrega als fonaments o terreny ferm.',
        'Col·locar puntals només a la planta 3 (per sobre de la jàssera danyada) per suspendre-la mitjançant eslingues des del forjat de coberta i evitar sobrecarregar la planta 1.',
        'Aplicar força hidràulica amb els puntals telescòpics fins a retornar la jàssera a la seva cota horitzontal original abans que arribin els tècnics municipals a inspeccionar-la.'
      ],
      correctIndex: 1,
      explanation: 'Quan s’apuntala una jàssera o forjat en una planta elevada, el forjat inferior no sol estar dimensionat per suportar una càrrega puntual transmesa des de dalt; per això cal continuar apuntalant totes les plantes inferiors fins arribar a planta baixa / fonaments.'
    },
    {
      id: 't30-q12',
      difficulty: 'Mitjà',
      question: 'Respecte als elements i principis d’un apuntalament vertical d’emergència (MAN.SVES.000), assenyala quina afirmació és INCORRECTA:',
      options: [
        'La peça horitzontal superior en contacte directe amb el sostre o la jàssera danyada s’anomena sotapont i té la funció de recollir la càrrega.',
        'El jaç de taulons o solera es col·loca a la base inferior sobre el terra per repartir la càrrega i evitar el punxonament del forjat.',
        'Els puntals han de quedar aplomats verticalment (90°) mitjançant falques contraposades i amb una separació màxima entre puntals d’1 metre.',
        'La peça sotapont es col·loca sota les falques del terra per facilitar el desplaçament lateral del puntal quan augmenta la càrrega.'
      ],
      correctIndex: 3,
      explanation: 'És incorrecte: el sotapont sempre va a la part SUPERIOR (al sostre o jàssera danyada) per recollir la càrrega i repartir-la cap als puntals; a la base inferior hi va el jaç de taulons (solera).'
    },
    {
      id: 't30-q13',
      difficulty: 'Mitjà',
      question: 'Com afecta l’increment d’alçada d’un puntal vertical a la seva capacitat de càrrega admissible i quin fenomen mecànic en limita la resistència?',
      options: [
        'Augmenta la seva resistència proporcionalment a l’alçada perquè treballa millor a tracció que a compressió.',
        'No varia amb l’alçada: un puntal telescòpic de 4,5 metres suporta exactament la mateixa càrrega que un d’1,8 metres.',
        'Disminueix progressivament en augmentar l’alçada a causa del risc de vinclament (pandeig lateral per compressió), fent necessari l’arriostrament en grans alçades.',
        'Només disminueix en puntals de fusta, mentre que en els metàl·lics la resistència es duplica a partir dels 3 metres.'
      ],
      correctIndex: 2,
      explanation: 'A mesura que augmenta l’alçada (esveltesa) d’un puntal sotmès a compressió, la seva càrrega crítica disminueix dràsticament per vinclament; per això cal aplomar-los a 90° i arriostrar-los quan superen certes alçades.'
    },
    {
      id: 't30-q14',
      difficulty: 'Mitjà',
      question: 'Durant una fase de recerca instrumentalitzada amb geòfons en una estructura col·lapsada, el comandament ordena aturada total i silenci absolut, i al cap de 4 minuts autoritza reprendre els treballs. Quins avisos sonors (codi INSARAG) corresponen a cadascuna de les dues ordres?',
      options: [
        'Aturada total / silenci: seqüència "1 i 3" (1 toc llarg de 3 segons) | Reprendre treballs: seqüència "1 i 1" (1 toc llarg de 3 segons + 1 toc curt d’1 segon).',
        'Aturada total / silenci: seqüència "3 i 1" (3 tocs curts d’1 segon) | Reprendre treballs: seqüència "2 i 3" (2 tocs llargs de 3 segons cadascun).',
        'Aturada total / silenci: seqüència "1 i 1" (1 toc llarg de 3 segons + 1 toc curt d’1 segon) | Reprendre treballs: seqüència "1 i 3" (1 toc llarg de 3 segons).',
        'Aturada total / silenci: tocs curts repetitius continus sense pausa | Reprendre treballs: 3 tocs curts d’1 segon separats per una pausa breu.'
      ],
      correctIndex: 0,
      explanation: 'Al codi acústic INSARAG: "1 i 3" (1 toc llarg de 3 s) ordena aturada total de treballs i silenci; "1 i 1" (1 toc llarg de 3 s + 1 toc curt d’1 s) ordena reprendre les operacions; 3 tocs curts d’1 s ordenen evacuació immediata.'
    },
    {
      id: 't30-q15',
      difficulty: 'Difícil',
      question: 'En una intervenció per esfondrament parcial d’un edifici amb possibles víctimes atrapades sota runa, quin és l’ordre seqüencial d’actuació operativa correcte abans d’iniciar el desenrunament pesat?',
      options: [
        'Entrar directament amb retroexcavadores pesants per retirar la runa superficial, emplaçar els camions a la façana per facilitar el desenrunament, fer sondeig caní al final i marcar amb una "C" totes les parets exteriors.',
        'Emplaçar vehicles fora de la zona de risc (≥ 2 × h), assegurar subministraments i estabilitzar riscos imminents, fer la recerca en silenci (crida i escolta / geòfons / gossos per venteig), marcar segons INSARAG i obrir corredors apuntalats fins a les víctimes.',
        'Pintar immediatament "L-1" i "C" a la façana principal abans de confirmar víctimes, mantenir els grups electrògens engegats per il·luminar el perímetre i situar els vehicles lleugers dins l’edificació contigua.',
        'Apuntalar primer els murs sans exteriors amb tornapuntes a 15°, fer la recerca canina per rastreig amb tot el personal dins la zona calenta i esperar els tècnics municipals abans de tallar el gas i l’electricitat.'
      ],
      correctIndex: 1,
      explanation: 'La seqüència operativa estableix: zonatge i emplaçament segur (≥ 2 × h), tall de subministraments i estabilització inicial, recerca en silenci (física, instrumentalitzada i canina per venteig), senyalització INSARAG i accés segur mitjançant apuntalaments consolidats.'
    },
    {
      id: 't30-q16',
      difficulty: 'Mitjà',
      question: 'Quin tipus d’apuntalament s’utilitza per contenir les dues parets paral·leles d’una rasa o excavació, i quin per estabilitzar una façana exterior amb risc de bolcada cap al carrer?',
      options: [
        'Rasa = Apuntalament inclinat amb tornapuntes a 15° sobre el fons | Façana = Jaç de taulons horitzontal sense puntals verticals ni inclinats.',
        'Rasa = Apuntalament horitzontal (estampidor) que transmet l’empenta d’un mur a l’altre | Façana = Apuntalament inclinat o oblic amb tornapuntes formant un angle òptim de 45° a 60° amb el terra.',
        'Rasa = Apuntalament vertical amb sotaponts i puntals separats 3 metres | Façana = Apuntalament vertical aplomat a 90° arran de vorera.',
        'Rasa = Sotapont vertical amb falques contraposades a la base | Façana = Apuntalament horitzontal (estampidor) ancorat a 90° contra la calçada.'
      ],
      correctIndex: 1,
      explanation: 'L’apuntalament horitzontal (estampidor) conté dues parets paral·leles o d’una rasa; l’apuntalament inclinat/oblic amb tornapuntes a 45°–60° estabilitza façanes o murs amb risc de bolcada.'
    },
    {
      id: 't30-q17',
      difficulty: 'Fàcil',
      question: 'En una operació de rescat en edifici col·lapsat, quina afirmació sobre la senyalització INSARAG i els senyals acústics d’emergència és INCORRECTA?',
      options: [
        'Un senyal acústic de 3 tocs curts d’1 segon ordena l’evacuació immediata de la zona calenta.',
        'Quan s’han extret totes les víctimes (vives i mortes) d’un punt marcat, es tanca la senyalització INSARAG amb un rombe i la lletra "C" (Clear).',
        'La lletra "V" del marcatge INSARAG de víctimes fa 50 cm d’alçada amb una fletxa que assenyala la possible ubicació.',
        'Un senyal acústic d’1 toc llarg de 3 segons ordena l’evacuació immediata de tots els bombers, mentre que 3 tocs curts ordenen silenci absolut per escoltar amb geòfons.'
      ],
      correctIndex: 3,
      explanation: 'És incorrecte (estan invertits!): 3 tocs curts (1 s) = EVACUAR immediatament; 1 toc llarg (3 s) = ATURAR operacions i SILENCI absolut (per escolta/geòfons).'
    }
  ]
};
