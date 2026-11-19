export const tema7GuardiaOrganigrama = {
  id: 'tema-7',
  number: 7,
  code: 'Decret 276/2016 · Decret 12/2023 + 16/2026',
  title: 'La Guàrdia (Decret 276/2016) i l\'Organigrama d\'Interior (Decret 12/2023 + 16/2026)',
  category: 'Legislació i Normativa — Bloc General',
  estimatedMinutes: 65,
  importance: {
    title: 'Anàlisi d\'Importància · Tema 7',
    frequency: 'Molt Alta (Actualitzat a febrer 2026)',
    summary:
      'Dues parts molt concretes: 1) El Decret 276/2016 de guàrdies i els 5 nivells de comandament (qui necessita habilitació, qui té PAGI, qui fa brífings i com pugen les dades); 2) L\'organigrama vigent del Departament d\'Interior i la DGPEIS consolidat amb el Decret 16/2026 (06.02.2026), amb 8 Regions (incloent Pirineus!), 5 Subdireccions i 19 Unitats Territorials.',
    hotTopics: [
      '4 posicions operatives (Cap operatiu, Cap territorial, Sotscap territorial, Cap de sortida — sense habilitació)',
      '3 centres de coordinació: SCB, SCT (determina nivell art. 22) i Parcs de Bombers (Cap de torn)',
      'Novetats Decret 16/2026: 5 Subdireccions (nova SG Assumptes Jurídics), Àrea Logística, 8 Regions (Pirineus)',
      'Xifres territorials: 8 Regions · 19 Unitats Territorials · 6 Sales Territorials · 7 Unitats de Prevenció'
    ],
    traps: [
      'El Cap de sortida NO necessita habilitació; el Sotscap territorial només treballa en disponibilitat immediata!',
      'Els Parcs de Bombers SÓN centres de coordinació de guàrdia (art. 12)!',
      'L\'Àrea Tècnica d\'Emergències té 3 unitats (Riscos Tecnològics, Col·lapses, Incendis Estructurals): NO hi ha Unitat d\'Accidents de Mobilitat!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Decret 276/2016 Guàrdies',
      title: '1. Decret 276/2016: Posicions, Centres de Coordinació i Nivells',
      subtitle: 'Qui mana al sinistre i com s\'organitzen les guàrdies del Cos',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '1.1 Posicions operatives (art. 7), centres (art. 12) i 5 nivells (art. 21)',
          paragraphs: [
            'El Decret 276/2016 (en vigor des de l\'1 d\'octubre de 2016, 23 articles) distingeix entre Centre de guàrdia (espai físic) i Posició de guàrdia (exercici de funcions), en 2 modalitats: disponibilitat immediata i localització. El relleu es regula per Instrucció del Director General. El Subdirector General Operatiu (Cap de Bombers) és un inspector en localització; el seu suplent obligatori ha de ser inspector habilitat com a cap operatiu (preferentment amb nivell de Subdirecció General).',
            'Les 4 posicions operatives (art. 7) són: Cap operatiu (màxim, inspector, habilitació SÍ, 9 funcions), Cap territorial (alt, inspector/sotsinspector, habilitació SÍ, 11 funcions — només aquests dos primers tenen PAGI i brífings!), Sotscap territorial (intermedi, sotsinspector/oficial/sergent, habilitació SÍ, només disponibilitat immediata, 9 funcions) i Cap de sortida (bàsic, sergent/caporal/bomber 1a al mateix nivell, NO requereix habilitació, 7 funcions). Escala de dades: Cap de sortida recull → Sotscap garanteix → Cap territorial supervisa.',
            'Els 3 centres de coordinació (art. 12) són: SCB (Cap coord. SCB = inspector habilitat, 17 funcions, activa CCB, supervisa TRI), SCT (operativament de la Sala, funcionalment de la Divisió; Cap coord. SCT = inspector o sotsinspector habilitat, determina el nivell de comandament segons art. 22) i els Parcs de Bombers (Cap de torn = sergent > caporal > bomber 1a per prelació/antiguitat categoria, 8 funcions). Els 5 nivells de comandament (art. 21, desenvolupats per Circular del DG) van del Nivell 1 (Cap de sortida) al Nivell 5 (Subdirector General Operatiu).'
          ]
        },
        {
          type: 'diagram',
          title: 'Organigrama DGPEIS (2026) i 5 Nivells de Comandament (276/2016)',
          diagramType: 'interior_organigram',
          caption: 'Vista global de les 5 Subdireccions, les xifres territorials (8-19-6-7) i l\'escala dels 5 nivells.'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Organigrama DGPEIS 2026',
      title: '2. Organigrama d\'Interior i DGPEIS (Decret 12/2023 + 16/2026)',
      subtitle: 'Les 5 Subdireccions, les 4 Divisions i la nova estructura territorial',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '2.1 Departament, DGPEIS i els 4 nivells estructurals',
          paragraphs: [
            'El Departament té 7 òrgans (Secretaria General + 6 Direccions Generals, inclosa la DGPEIS) i 3 organismes adscrits (SCT Trànsit, ISPC i CAT112). La DGPEIS s\'estructura en 6 òrgans directes: 5 Subdireccions Generals (SG Operativa [inspector/a en cap], SG Tècnica, SG Contractació i Pressupost, SG Persones i Organització, i la nova SG Assumptes Jurídics i Institucionals) més 1 Àrea de Comunicació i Premsa (única àrea que penja directe del DG, vinculació laboral).',
            'Els 4 nivells estructurals del Cos són: 1) Divisió / Regió (estratègica); 2) Àrea central / regional (tàctica); 3) Unitat central / regional (operativa); 4) Grup / Parc (execució).',
            'La SG Operativa (16 funcions al consolidat) compta amb 4 Divisions centrals: 1) Planificació i Gestió (3 àrees: Planif. Recursos, Bombers Voluntaris, Logística [nova 2026]); 2) Emergències Climàtiques i GOE (5 òrgans: Gestió GOE, Emerg. Meteorològiques, Àrea GRAF, Àrea GEA [Unitat Muntanya (GRAE Muntanya + GRAE Caní) i Unitat Aquàtica (GRAE Subaquàtic)] i Unitat GEM [laboral]); 3) Operacions (Àrea Innovació i Desenv. [2 unitats], Àrea Tècnica d\'Emergències [3 unitats: Riscos Tecnològics, Col·lapses, Incendis Estructurals — NO hi ha Unitat d\'Accidents de Mobilitat!] i Unitat Prevenció Operativa); 4) Divisió de Coordinació d\'Emergències (abans Sala Central; Àrea Mitjans Aeris, Àrea Sala Central i Unitat Suport Operatiu).'
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Les 8 Regions i per què algunes comparteixen Sala',
          metaphor: 'Imagina 8 comissaries regionals de bombers, però només 6 centrals telefòniques i 7 oficines de prevenció.',
          explanation:
            'El Decret 16/2026 crea la 8a Regió d\'Emergències (Pirineus). Cada una de les 8 Regions té la seva Àrea d\'Operacions, Àrea de Gestió i Servei d\'Administració. Però només hi ha 6 Sales Territorials (Terres de l\'Ebre es connecta a Tarragona, i Pirineus es connecta a Lleida) i 7 Unitats de Prevenció (Terres de l\'Ebre SÍ en té, però Pirineus també depèn de Lleida).',
          takeaway: '8 Regions · 19 Unitats Territorials · 6 Sales Territorials · 7 Unitats de Prevenció.'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Territori i SG Tècnica',
      title: '3. Desplegament Territorial i SG Tècnica (Decret 12/2023 + 16/2026)',
      subtitle: 'Unitats territorials, parcs i les 5 àrees tècniques',
      isSummary: false,
      blocks: [
        {
          type: 'table',
          title: 'Xifres del Territori i Subdirecció General Tècnica',
          subtitle: 'Consolidat vigent amb Decret 16/2026 (06.02.2026)',
          headers: ['Àmbit', 'Estructura exacta'],
          rows: [
            ['8 Regions d\'Emergències', 'Inclou Pirineus (cadascuna amb Àrea Operacions, Àrea Gestió i Servei Administració)'],
            ['19 Unitats Territorials', '3 a Metro Nord, Metro Sud i Girona · 2 a la resta (inspeccionen parcs, però els parcs pengen de l\'Àrea d\'Operacions!)'],
            ['6 Sales Territorials', 'Terres de l\'Ebre → Tarragona · Pirineus → Lleida'],
            ['7 Unitats de Prevenció', 'Orgànicament de la SG Tècnica, funcionalment de la Regió (Ebre SÍ en té; Pirineus → Lleida)'],
            ['SG Tècnica (5 Àrees)', 'Equipaments Operatius, Tecnologia, Mobilitat Operativa, Infraestructures i Sostenibilitat, Prevenció i Inspecció d\'Incendis']
          ],
          footnote: 'Al text consolidat: 8 Regions (no 7), 16 funcions SG Operativa (no 13) i 5 àrees SG Tècnica (no 4).'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Resum I (D. 276/2016)',
      title: '4. Resum Imprescindible (I): Guàrdies i Comandament (D. 276/2016)',
      subtitle: 'Posicions, habilitacions, centres i 5 nivells',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · Decret 276/2016',
          subtitle: 'Tot sobre la guàrdia i el comandament',
          headers: ['Posició / Centre / Nivell', 'Categoria, Habilitació i Funció clau'],
          rows: [
            ['Nivell 1 · Cap de sortida', 'Sergent, caporal o bomber 1a · NO cal habilitació · 7 funcions · Recull dades'],
            ['Nivell 2 · Sotscap territorial', 'Sotsinspector, oficial o sergent · SÍ habilitació · Només immediata · 9 funcions · Garanteix dades'],
            ['Nivell 3 · Cap territorial', 'Inspector o sotsinspector · SÍ habilitació · 11 funcions · PAGI + brífings · Supervisa dades'],
            ['Nivell 4 · Cap operatiu', 'Inspector · SÍ habilitació · 9 funcions · PAGI + brífings'],
            ['Nivell 5 · SG Operatiu', 'Inspector (Cap de Bombers) · Localització · Suplent inspector habilitat cap operatiu'],
            ['3 Centres (art. 12)', 'SCB (17 funcions), SCT (determina nivell art. 22), Parcs (Cap torn = sergent>caporal>b1a)']
          ],
          footnote: 'Desenvolupat per Circular del DG (art. 23). La guàrdia computa dins jornada anual i complement específic (DA 2a).'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Resum II (Organigrama 2026)',
      title: '5. Resum Imprescindible (II): Organigrama DGPEIS (2026)',
      subtitle: 'Números màgics: 7-3 / 5-1 / 4-8-19-6-7',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · Decret 12/2023 + 16/2026',
          subtitle: 'Estructura completa de memòria',
          headers: ['Nivell', 'Xifres i noms exactes'],
          rows: [
            ['Departament Interior', '7 òrgans (SG + 6 DG) + 3 adscrits (SCT Trànsit, ISPC, 112)'],
            ['DGPEIS', '5 Subdireccions (inclou nova SG Assumptes Jurídics) + 1 Àrea Comunicació i Premsa'],
            ['SG Operativa (4 Divisions)', '1. Planificació i Gestió (Logística nova) · 2. Emerg. Climàtiques i GOE · 3. Operacions · 4. Coordinació Emergències'],
            ['Àrea GEA i Unitat GEM', 'GEA: Unitat Muntanya (GRAE Muntanya + Caní) i Aquàtica (GRAE Subaquàtic) · GEM: laboral'],
            ['Àrea Tècnica Emergències', '3 Unitats: Riscos Tecnològics, Col·lapses, Incendis Estructurals (NO Accidents de Mobilitat!)'],
            ['Territori i SG Tècnica', '8 Regions · 19 Unitats Territorials · 6 Sales · 7 Unitats Prevenció · 5 Àrees SG Tècnica']
          ],
          footnote: '4 nivells estructurals: 1. Divisió/Regió (estratègica) → 2. Àrea (tàctica) → 3. Unitat (operativa) → 4. Grup/Parc (execució).'
        },
        {
          type: 'mnemonic',
          title: 'Regla 8 – 19 – 6 – 7',
          trick: '8 Regions (incl. Pirineus) · 19 Unitats Territorials (3+3+3 + 2+2+2+2+2) · 6 Sales (Ebre→Tgn, Pirineus→Lleida) · 7 Prevenció (només Pirineus→Lleida).',
          example: 'Si l\'examen diu "7 Regions" o "4 Àrees a la SG Tècnica", recorda que el text consolidat vigent (Decret 16/2026) fixa 8 Regions i 5 Àrees!'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't7-q1',
      difficulty: 'Fàcil',
      question: 'Quina posició operativa de guàrdia del Decret 276/2016 NO necessita habilitació prèvia?',
      options: [
        'Cap de sortida',
        'Sotscap territorial',
        'Cap territorial',
        'Cap operatiu'
      ],
      correctIndex: 0,
      explanation: 'El Cap de sortida (sergent, caporal o bomber de 1a al mateix nivell) no necessita habilitació; les altres tres posicions sí.'
    },
    {
      id: 't7-q2',
      difficulty: 'Mitjà',
      question: 'Quins dos centres o posicions tenen atribuït el PAGI i dirigeixen o participen en brífings segons el Decret 276/2016?',
      options: [
        'Només el Cap operatiu i el Cap territorial',
        'Totes les posicions operatives inclòs el Cap de sortida',
        'El Sotscap territorial i el Cap de torn',
        'Només el Subdirector General Operatiu'
      ],
      correctIndex: 0,
      explanation: 'Només les dues posicions superiors operatives (Cap operatiu i Cap territorial) tenen PAGI i brífings.'
    },
    {
      id: 't7-q3',
      difficulty: 'Mitjà',
      question: 'Com s\'estructura la cadena de dades entre les posicions operatives al Decret 276/2016?',
      options: [
        'El Cap de sortida les recull, el Sotscap territorial en garanteix la recollida i el Cap territorial les supervisa',
        'El Cap territorial les recull i el Cap de sortida les supervisa',
        'Només les recull l\'SCB directament',
        'El Sotscap territorial les recull i les aprova el Cap de sortida'
      ],
      correctIndex: 0,
      explanation: 'Recollida (Cap de sortida) → Garantia (Sotscap territorial) → Supervisió (Cap territorial).'
    },
    {
      id: 't7-q4',
      difficulty: 'Difícil',
      question: 'Qui determina el nivell de comandament segons l\'article 22 del Decret 276/2016 i quin instrument desenvolupa els 5 nivells (art. 23)?',
      options: [
        'El Cap de coordinació de l\'SCT; desenvolupat per Circular del Director General',
        'El Cap de torn del parc; desenvolupat per Ordre del Conseller',
        'El Cap de sortida; desenvolupat per Decret del Govern',
        'El CECAT; desenvolupat per Llei del Parlament'
      ],
      correctIndex: 0,
      explanation: 'El Cap de coordinació de l\'SCT determina el nivell de comandament (art. 22) i una Circular del DG desenvolupa els nivells (art. 23).'
    },
    {
      id: 't7-q5',
      difficulty: 'Fàcil',
      question: 'Quantes Subdireccions Generals té la DGPEIS en el text consolidat vigent (Decret 12/2023 + Decret 16/2026)?',
      options: [
        '5 Subdireccions Generals (inclosa la nova SG Assumptes Jurídics i Institucionals) més 1 Àrea de Comunicació i Premsa',
        '4 Subdireccions Generals únicament',
        '3 Subdireccions Generals i 2 Àrees directes',
        '6 Subdireccions Generals sense cap Àrea directa'
      ],
      correctIndex: 0,
      explanation: 'La DGPEIS té 5 Subdireccions Generals i 1 Àrea de Comunicació i Premsa (única àrea directa del DG).'
    },
    {
      id: 't7-q6',
      difficulty: 'Mitjà',
      question: 'Quantes Regions d\'Emergències, Unitats Territorials, Sales Territorials i Unitats de Prevenció hi ha al text consolidat vigent?',
      options: [
        '8 Regions, 19 Unitats Territorials, 6 Sales Territorials i 7 Unitats de Prevenció',
        '7 Regions, 16 Unitats Territorials, 7 Sales Territorials i 6 Unitats de Prevenció',
        '8 Regions, 14 Unitats Territorials, 8 Sales Territorials i 8 Unitats de Prevenció',
        '7 Regions, 19 Unitats Territorials, 6 Sales Territorials i 6 Unitats de Prevenció'
      ],
      correctIndex: 0,
      explanation: '8 Regions (incl. Pirineus), 19 Unitats Territorials (3 a Metro Nord/Sud/Gi i 2 a la resta), 6 Sales (Ebre→Tgn, Pirineus→Lleida) i 7 Unitats de Prevenció.'
    },
    {
      id: 't7-q7',
      difficulty: 'Difícil',
      question: 'Quines 3 unitats integren l\'Àrea Tècnica d\'Emergències dins la Divisió d\'Operacions?',
      options: [
        'Unitat de Riscos Tecnològics, Unitat de Col·lapses i Unitat d\'Incendis Estructurals (NO hi ha Unitat d\'Accidents de Mobilitat)',
        'Unitat de Riscos Tecnològics, Unitat d\'Accidents de Mobilitat i Unitat GRAF',
        'Unitat de Muntanya, Unitat Aquàtica i Unitat GEM',
        'Unitat de Col·lapses, Unitat d\'Incendis Forestals i Unitat de Mitjans Aeris'
      ],
      correctIndex: 0,
      explanation: 'L\'Àrea Tècnica d\'Emergències té Riscos Tecnològics, Col·lapses i Incendis Estructurals; no hi existeix cap Unitat d\'Accidents de Mobilitat.'
    },
    {
      id: 't7-q8',
      difficulty: 'Mitjà',
      question: 'De quin òrgan depenen funcionalment els Parcs de Bombers i qui els inspecciona?',
      options: [
        'Pengen de l\'Àrea d\'Operacions de la Regió; les 19 Unitats Territorials els inspeccionen',
        'Pengen directament de la Subdirecció General Tècnica',
        'Pengen de les Sales Territorials (SCT)',
        'Pengen de les 7 Unitats de Prevenció'
      ],
      correctIndex: 0,
      explanation: 'Les 19 Unitats Territorials inspeccionen els parcs, però els parcs depenen de l\'Àrea d\'Operacions de cada Regió.'
    },
    {
      id: 't7-q9',
      difficulty: 'Fàcil',
      question: 'Com s\'ordenen els 4 nivells estructurals del Cos de Bombers i quina funció té cadascun?',
      options: [
        '1. Divisió/Regió (estratègica) → 2. Àrea (tàctica) → 3. Unitat (operativa) → 4. Grup/Parc (execució)',
        '1. Àrea (estratègica) → 2. Divisió (tàctica) → 3. Parc (operativa) → 4. Unitat (execució)',
        '1. Regió (execució) → 2. Unitat (tàctica) → 3. Àrea (operativa) → 4. Divisió (estratègica)',
        '1. Subdirecció (operativa) → 2. Divisió (execució) → 3. Àrea (estratègica)'
      ],
      correctIndex: 0,
      explanation: 'Divisió/Regió (estratègica) → Àrea (tàctica) → Unitat (operativa) → Grup/Parc (execució).'
    },
    {
      id: 't7-q10',
      difficulty: 'Difícil',
      question: 'Com es determina el Cap de torn d\'un Parc de Bombers (art. 12 Decret 276/2016) i en quina modalitat treballa el Sotscap territorial?',
      options: [
        'Cap de torn: sergent > caporal > bomber 1a per prelació/antiguitat; Sotscap territorial: només en disponibilitat immediata',
        'Cap de torn: sempre un inspector; Sotscap territorial: sempre en localització',
        'Cap de torn: per sorteig mensual; Sotscap territorial: localització o immediata',
        'Cap de torn: bomber 1a sempre; Sotscap territorial: no necessita habilitació'
      ],
      correctIndex: 0,
      explanation: 'El Cap de torn segueix la prelació sergent > caporal > bomber 1a, i el Sotscap territorial només actua en disponibilitat immediata.'
    }
  ]
};
