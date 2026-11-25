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
          heading: '1.1 Centre vs Posició de guàrdia, modalitats i Cap de Bombers',
          paragraphs: [
            'El Decret 276/2016 (en vigor des de l\'1 d\'octubre de 2016, 23 articles) distingeix entre Centre de guàrdia (espai físic) i Posició de guàrdia (exercici de funcions), en 2 modalitats: disponibilitat immediata i localització.',
            'El relleu es regula per Instrucció del Director General (mentre que els 5 nivells de comandament de l\'art. 21 es desenvolupen per Circular del DG, art. 23).',
            'El Subdirector General Operatiu (Cap de Bombers) és un inspector en modalitat de localització; el seu suplent obligatori ha de ser inspector habilitat com a cap operatiu (preferentment amb nivell de Subdirecció General).'
          ]
        },
        {
          type: 'text',
          heading: '1.2 Les 4 posicions operatives (art. 7): habilitació, PAGI i escala de dades',
          paragraphs: [
            '• Cap operatiu (nivell màxim): inspector, habilitació SÍ, 9 funcions. Té PAGI i brífings.\n• Cap territorial (alt): inspector o sotsinspector, habilitació SÍ, 11 funcions. Té PAGI i brífings (només aquests dos primers tenen PAGI i brífings!).',
            '• Sotscap territorial (intermedi): sotsinspector, oficial o sergent, habilitació SÍ, 9 funcions. ATENCIÓ: només treballa en disponibilitat immediata!\n• Cap de sortida (bàsic): sergent, caporal o bomber de 1a al mateix nivell, NO requereix habilitació, 7 funcions.',
            'Escala de dades: Cap de sortida les recull → Sotscap territorial en garanteix la recollida → Cap territorial les supervisa.'
          ]
        },
        {
          type: 'text',
          heading: '1.3 Els 3 centres de coordinació (art. 12) i els 5 nivells de comandament',
          paragraphs: [
            '• SCB (Sala Central de Bombers): Cap coord. SCB = inspector habilitat, 17 funcions, activa el CCB i supervisa la TRI.\n• SCT (Sala de Control Territorial): depèn operativament de la Sala i funcionalment de la Divisió; Cap coord. SCT = inspector o sotsinspector habilitat, i determina el nivell de comandament segons l\'art. 22.',
            '• Parcs de Bombers (SÍ són centres de coordinació de guàrdia!): Cap de torn = sergent > caporal > bomber de 1a per prelació/antiguitat de categoria, 8 funcions. Els 5 nivells de comandament (art. 21) van del Nivell 1 (Cap de sortida) al Nivell 5 (Subdirector General Operatiu).'
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · No confondre el Cap de Sortida amb el Cap de Torn!',
          metaphor: 'Un és qui mana dins del camió quan surts al foc; l\'altre és qui organitza tot el parc aquell dia.',
          explanation:
            'El CAP DE SORTIDA (art. 7) és una posició operativa al carrer (Nivell 1): pot ser sergent, caporal o bomber de 1a al mateix nivell i NO necessita habilitació.\nEl CAP DE TORN (art. 12) dirigeix un centre de coordinació (el Parc de Bombers): segueix prelació estricta (sergent > caporal > bomber 1a) i té 8 funcions al parc.',
          takeaway: 'Cap de sortida = posició operativa sense habilitació (7 funcions). Cap de torn = cap del centre "Parc" (8 funcions).'
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
          heading: '2.1 Departament d\'Interior (7+3) i DGPEIS (5 SG + 1 Àrea)',
          paragraphs: [
            'El Departament té 7 òrgans (Secretaria General + 6 Direccions Generals, inclosa la DGPEIS) i 3 organismes adscrits (SCT Trànsit, ISPC i CAT112).',
            'La DGPEIS s\'estructura en 6 òrgans directes: 5 Subdireccions Generals (SG Operativa [inspector/a en cap], SG Tècnica, SG Contractació i Pressupost, SG Persones i Organització, i la nova SG Assumptes Jurídics i Institucionals) més 1 Àrea de Comunicació i Premsa (única àrea que penja directe del DG, vinculació laboral).',
            'Els 4 nivells estructurals del Cos són: 1) Divisió / Regió (estratègica); 2) Àrea central / regional (tàctica); 3) Unitat central / regional (operativa); 4) Grup / Parc (execució).'
          ]
        },
        {
          type: 'text',
          heading: '2.2 Les 4 Divisions centrals de la SG Operativa (16 funcions al consolidat)',
          paragraphs: [
            '1) Divisió de Planificació i Gestió (3 àrees): Àrea de Planificació de Recursos, Àrea de Bombers Voluntaris i Àrea de Logística (nova 2026!).\n2) Divisió d\'Emergències Climàtiques i GOE (5 òrgans): Gestió GOE, Emergències Meteorològiques, Àrea GRAF, Àrea GEA [Unitat Muntanya (GRAE Muntanya + GRAE Caní) i Unitat Aquàtica (GRAE Subaquàtic)] i Unitat GEM [personal laboral].',
            '3) Divisió d\'Operacions: Àrea d\'Innovació i Desenvolupament [2 unitats], Àrea Tècnica d\'Emergències [3 unitats: Riscos Tecnològics, Col·lapses, Incendis Estructurals — NO hi ha Unitat d\'Accidents de Mobilitat!] i Unitat de Prevenció Operativa.\n4) Divisió de Coordinació d\'Emergències (abans Sala Central): Àrea de Mitjans Aeris, Àrea de Sala Central i Unitat de Suport Operatiu.'
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Les 8 Regions i per què algunes comparteixen Sala',
          metaphor: 'Imagina 8 comissaries regionals de bombers, però només 6 centrals telefòniques i 7 oficines de prevenció.',
          explanation:
            'El Decret 16/2026 crea la 8a Regió d\'Emergències (Pirineus). Cada una de les 8 Regions té la seva Àrea d\'Operacions, Àrea de Gestió i Servei d\'Administració. Però només hi ha 6 Sales Territorials (Terres de l\'Ebre es connecta a Tarragona, i Pirineus es connecta a Lleida) i 7 Unitats de Prevenció (Terres de l\'Ebre SÍ en té, però Pirineus també depèn de Lleida).',
          takeaway: '8 Regions · 19 Unitats Territorials · 6 Sales Territorials · 7 Unitats de Prevenció.'
        },
        {
          type: 'diagram',
          title: 'Organigrama Visual Complet DGPEIS 2026 (per Subdireccions, Divisions, Àrees i Unitats)',
          diagramType: 'dgpeis_2026_table',
          caption: 'Quadre visual complet amb codi de colors: 5 Subdireccions Generals + Àrea de Comunicació i Premsa.'
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
      shortLabel: 'Pàg. 4 · 5 Subdireccions i Nivells',
      title: '4. Detall de les 5 Subdireccions DGPEIS i Escala dels 5 Nivells de Comandament',
      subtitle: 'Funcions de cada Subdirecció General (Decret 16/2026) i activació per nivells (Decret 276/2016)',
      isSummary: false,
      blocks: [
        {
          type: 'table',
          title: '4.1. Les 5 Subdireccions Generals de la DGPEIS + Àrea de Comunicació',
          subtitle: 'Estructura directiva consolidada (Decret 12/2023 + Decret 16/2026)',
          headers: ['Òrgan directe del DG', 'Funcions i unitats que agrupa'],
          rows: [
            ['1. SG Operativa (Cap de Bombers)', 'Dirigida per un/a inspector/a en cap. Agrupa les 4 Divisions centrals (Planificació i Gestió, Emergències Climàtiques i GOE, Operacions, Coordinació d’Emergències) i les 8 Regions d’Emergències.'],
            ['2. SG Tècnica', 'Agrupa 5 Àrees: Equipaments Operatius, Tecnologia, Mobilitat Operativa, Infraestructures i Sostenibilitat, i Prevenció i Inspecció d’Incendis (d’on pengen orgànicament les 7 Unitats de Prevenció).'],
            ['3. SG Contractació i Pressupost', 'Gestió econòmica, pressupostària, contractació pública, patrimoni i subministraments de la DGPEIS.'],
            ['4. SG Persones i Organització', 'Gestió de recursos humans, selecció, provisió, jornada, guàrdies, prevenció de riscos laborals i organització interna.'],
            ['5. SG Assumptes Jurídics i Institucionals (nova 2026)', 'Assessorament jurídic, elaboració normativa, recursos, responsabilitat patrimonial i relacions institucionals.'],
            ['Àrea de Comunicació i Premsa', 'Única àrea que depèn directament del Director General (personal amb vinculació laboral).']
          ]
        },
        {
          type: 'table',
          title: '4.2. Criteris d’Activació, Modalitats i Suplències (Decret 276/2016)',
          subtitle: 'Diferències clau entre posicions i centres de guàrdia',
          headers: ['Concepte', 'Regla exacta del Decret 276/2016'],
          rows: [
            ['Determinació del nivell (art. 22)', 'La Sala de Control Territorial (SCT) determina el nivell de comandament inicial de l’emergència (Nivells 1 a 5 de l’art. 21).'],
            ['Modalitats de guàrdia', 'Disponibilitat immediata (presencial al parc o centre) vs Localització (localitzable per activar-se). El Sotscap territorial NOMÉS treballa en disponibilitat immediata.'],
            ['PAGI i Brífings', 'Només tenen assignat PAGI i realitzen brífings les dues posicions superiors: Cap operatiu (9 funcions) i Cap territorial (11 funcions).'],
            ['Suplència del Cap de Bombers', 'El Subdirector General Operatiu fa guàrdia en modalitat de localització; el seu suplent obligatori ha de ser inspector habilitat com a cap operatiu.']
          ]
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Resum I (D. 276/2016)',
      title: '5. Resum Imprescindible (I): Guàrdies i Comandament (D. 276/2016)',
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
      pageNumber: 6,
      shortLabel: 'Pàg. 6 · Resum II (Organigrama 2026)',
      title: '6. Resum Imprescindible (II): Organigrama DGPEIS (2026)',
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
          type: 'diagram',
          title: 'Organigrama Visual Complet DGPEIS 2026 (per Subdireccions, Divisions, Àrees i Unitats)',
          diagramType: 'dgpeis_2026_table',
          caption: 'Quadre visual complet per estudiar d\'un sol cop d\'ull totes les divisions, àrees, unitats i serveis.'
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
        'El Cap territorial les recull directament, el Sotscap territorial les valida i el Cap de sortida les arxiva',
        'El Cap de coordinació de l\'SCB les recull directament des del sistema i les remet al Cap territorial per a supervisió',
        'El Sotscap territorial les recull al sinistre, el Cap de torn les garanteix i el Cap de sortida les aprova'
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
      difficulty: 'Mitjà',
      question: 'Quantes Subdireccions Generals té la DGPEIS en el text consolidat vigent (Decret 12/2023 + Decret 16/2026)?',
      options: [
        '5 Subdireccions Generals (inclosa la nova SG Assumptes Jurídics i Institucionals) més 1 Àrea de Comunicació i Premsa',
        '4 Subdireccions Generals (Operativa, Tècnica, Planificació i Gestió, i Recursos Humans) sense cap Àrea adscrita al DG',
        '3 Subdireccions Generals (Operativa, Tècnica i Coordinació) més 2 Àrees directes del Director General',
        '6 Subdireccions Generals (inclosa la SG de Mitjans Aeris i Logística) sense cap Àrea de Comunicació directa'
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
        'Unitat de Riscos Tecnològics, Unitat d\'Accidents de Mobilitat i Unitat GRAF (Grup de Recolzament d\'Actuacions Forestals)',
        'Unitat de Muntanya (GRAE), Unitat Aquàtica i Unitat GEM (Grup d\'Emergències Mèdiques) en suport operatiu directe',
        'Unitat de Col·lapses Estructurals, Unitat d\'Incendis Forestals i Unitat de Mitjans Aeris adscrites a Operacions'
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
        'Pengen directament de la Subdirecció General Tècnica; les 7 Unitats de Prevenció els inspeccionen',
        'Pengen de les 6 Sales Territorials (SCT); el Cap de coordinació de l\'SCB els inspecciona',
        'Pengen de les 7 Unitats de Prevenció; l\'Àrea d\'Operacions de cada Regió els inspecciona'
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
        'Cap de torn: sempre un inspector o sotsinspector assignat al parc; Sotscap territorial: sempre en modalitat de localització',
        'Cap de torn: per designació rotativa mensual del cap de regió; Sotscap territorial: en localització o disponibilitat immediata',
        'Cap de torn: bomber de 1a amb més antiguitat al parc sempre; Sotscap territorial: no necessita habilitació prèvia específica'
      ],
      correctIndex: 0,
      explanation: 'El Cap de torn segueix la prelació sergent > caporal > bomber 1a, i el Sotscap territorial només actua en disponibilitat immediata.'
    },
    {
      id: 't7-q11',
      difficulty: 'Mitjà',
      question: 'Quina afirmació és INCORRECTA respecte al Decret 276/2016 de guàrdies del Cos de Bombers?',
      options: [
        'Els Parcs de Bombers no tenen la consideració de centres de coordinació de guàrdia segons l\'article 12',
        'El Decret distingeix entre Centre de guàrdia (espai físic) i Posició de guàrdia (exercici de funcions)',
        'Les dues modalitats de guàrdia són disponibilitat immediata i localització',
        'El relleu de guàrdia es regula per Instrucció del Director General'
      ],
      correctIndex: 0,
      explanation: 'Segons l\'art. 12 del Decret 276/2016, els 3 centres de coordinació de guàrdia són: SCB, SCT i els Parcs de Bombers.'
    },
    {
      id: 't7-q12',
      difficulty: 'Difícil',
      question: 'Quins requisits ha de complir el suplent obligatori del Subdirector General Operatiu (Cap de Bombers) segons el Decret 276/2016?',
      options: [
        'Ha de ser un inspector habilitat com a cap operatiu, preferentment amb nivell orgànic de Subdirecció General',
        'Pot ser qualsevol sotsinspector habilitat com a cap territorial que estigui en situació de disponibilitat immediata',
        'Ha de ser un oficial o sotsinspector habilitat que presti servei en modalitat de disponibilitat immediata a l\'SCB',
        'El designa cada regió d\'emergències per torns rotatius semestrals entre els caps d\'unitat territorial habilitats'
      ],
      correctIndex: 0,
      explanation: 'El Subdirector General Operatiu (Nivell 5, inspector en localització) té un suplent obligatori que ha de ser inspector habilitat com a cap operatiu (preferentment amb nivell de Subdirecció General).'
    },
    {
      id: 't7-q13',
      difficulty: 'Mitjà',
      question: 'Quantes funcions té atribuïdes el Cap de coordinació de l\'SCB (art. 12) i quines tasques clau desenvolupa?',
      options: [
        '17 funcions; activa el CCB i supervisa la TRI',
        '11 funcions; elabora el PAGI i els brífings territorials',
        '8 funcions; recull les dades dels caps de sortida',
        '9 funcions; només determina el nivell de comandament de l\'art. 22'
      ],
      correctIndex: 0,
      explanation: 'El Cap de coordinació de l\'SCB (inspector habilitat) té 17 funcions, activa el CCB i supervisa la TRI. Determinar el nivell de comandament (art. 22) correspon al Cap de coordinació de l\'SCT.'
    },
    {
      id: 't7-q14',
      difficulty: 'Mitjà',
      question: 'Quins són els 3 organismes autònoms o entitats adscrits al Departament d\'Interior i quina àrea penja directament del Director General de la DGPEIS?',
      options: [
        'Organismes adscrits: SCT (Trànsit), ISPC i CAT112 · Àrea directa del DG: Àrea de Comunicació i Premsa (vinculació laboral)',
        'Organismes adscrits: SEM, Agents Rurals i ADF · Àrea directa del DG: Àrea de Logística i Infraestructures (vinculació funcionarial)',
        'Organismes adscrits: SCT (Trànsit), ISPC i Protecció Civil · Àrea directa del DG: Àrea GRAF (Grup d\'Actuacions Forestals)',
        'El Departament d\'Interior no té organismes autònoms adscrits ni cap àrea que pengi directament del Director General de la DGPEIS'
      ],
      correctIndex: 0,
      explanation: 'Els 3 organismes adscrits al Departament d\'Interior són SCT (Trànsit), ISPC i CAT112; l\'Àrea de Comunicació i Premsa (laboral) és l\'única àrea que penja directe del DGPEIS.'
    },
    {
      id: 't7-q15',
      difficulty: 'Difícil',
      question: 'Quines dues Regions d\'Emergències no disposen de Sala Territorial pròpia (6 Sales per a 8 Regions) i de quina Sala depenen?',
      options: [
        'Terres de l\'Ebre es connecta a Tarragona i Pirineus es connecta a Lleida',
        'Catalunya Central es connecta a Metro Nord i Girona a Metro Sud',
        'Pirineus es connecta a Girona i Terres de l\'Ebre a Lleida',
        'Totes 8 Regions tenen Sala Territorial pròpia des del Decret 16/2026'
      ],
      correctIndex: 0,
      explanation: 'Hi ha 8 Regions però 6 Sales Territorials: Terres de l\'Ebre → Tarragona, i Pirineus → Lleida. En canvi, de les 7 Unitats de Prevenció, Terres de l\'Ebre SÍ en té i només Pirineus depèn de Lleida.'
    },
    {
      id: 't7-q16',
      difficulty: 'Mitjà',
      question: 'Quina afirmació és INCORRECTA sobre les Unitats de Prevenció i les Unitats Territorials de la DGPEIS?',
      options: [
        'Les 7 Unitats de Prevenció depenen orgànicament de la Regió d\'Emergències i funcionalment de la Subdirecció General Tècnica',
        'Les 19 Unitats Territorials es distribueixen en 3 a Metro Nord, 3 a Metro Sud, 3 a Girona i 2 a cadascuna de les 5 Regions restants',
        'Les Unitats Territorials inspeccionen els parcs, però els parcs depenen de l\'Àrea d\'Operacions de la Regió',
        'La Subdirecció General Tècnica compta amb 5 àrees tècniques al text consolidat vigent'
      ],
      correctIndex: 0,
      explanation: 'És a l\'inrevés: les 7 Unitats de Prevenció depenen ORGÀNICAMENT de la Subdirecció General Tècnica i FUNCIONALMENT de la Regió d\'Emergències.'
    },
    {
      id: 't7-q17',
      difficulty: 'Difícil',
      question: 'Dins de quina Divisió s\'integra la nova Àrea de Logística (2026) i de quina Àrea formen part els grups GRAE Muntanya, GRAE Caní i GRAE Subaquàtic?',
      options: [
        'L\'Àrea de Logística s\'integra a la Divisió de Planificació i Gestió; els GRAE s\'integren a l\'Àrea GEA (Unitat Muntanya i Unitat Aquàtica) dins d\'Emergències Climàtiques i GOE',
        'L\'Àrea de Logística s\'integra a la Subdirecció General Tècnica; els grups GRAE pengen directament de la Divisió d\'Operacions a través de l\'Àrea Tècnica d\'Emergències',
        'L\'Àrea de Logística s\'integra a la Divisió de Coordinació d\'Emergències; la Unitat GEM (Grup d\'Emergències Mèdiques) és l\'encarregada d\'enquadrar tots els grups GRAE',
        'L\'Àrea de Logística depèn directament del Director General de la DGPEIS juntament amb l\'Àrea de Comunicació i Premsa; els GRAE formen una divisió autònoma pròpia'
      ],
      correctIndex: 0,
      explanation: 'Àrea de Logística (nova 2026) → Divisió de Planificació i Gestió. Àrea GEA (Unitat Muntanya [GRAE Muntanya + Caní] i Unitat Aquàtica [GRAE Subaquàtic]) → Divisió d\'Emergències Climàtiques i GOE.'
    },
    {
      id: 't7-q18',
      difficulty: 'Mitjà',
      question: 'Quina és la nova Subdirecció General creada pel Decret 16/2026 dins de la DGPEIS i quantes funcions té la SG Operativa al text consolidat?',
      options: [
        'SG d\'Assumptes Jurídics i Institucionals (fa un total de 5 SG); la SG Operativa té 16 funcions al consolidat',
        'SG de Mitjans Aeris i Logística (fa un total de 5 SG); la SG Operativa manté les 13 funcions originàries',
        'SG de Voluntaris i Infraestructures (fa un total de 4 SG); la SG Operativa passa a tenir 12 funcions',
        'SG de Coordinació d\'Emergències (fa un total de 6 SG); la SG Operativa exerceix 10 funcions bàsiques'
      ],
      correctIndex: 0,
      explanation: 'El Decret 16/2026 crea la 5a Subdirecció General (SG d\'Assumptes Jurídics i Institucionals), amplia les funcions de la SG Operativa de 13 a 16 i crea la 8a Regió (Pirineus).'
    },
    {
      id: 't7-q19',
      difficulty: 'Mitjà',
      question: 'De quina divisió depèn la Unitat de Suport Operatiu (USO) dins l’estructura de la DGPEIS?',
      options: [
        'De la Divisió d’Operacions',
        'De la Divisió de Planificació i Gestió',
        'De la Divisió d’Emergències Climàtiques i Grups Operatius Especials',
        'De la Divisió de Coordinació d’Emergències'
      ],
      correctIndex: 3,
      explanation: 'La Unitat de Suport Operatiu (USO) forma part de la Divisió de Coordinació d’Emergències (no de la Divisió d’Operacions ni de la de Planificació).'
    }
  ]
};
