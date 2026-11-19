export const tema23Siscom = {
  id: 'tema-22',
  number: 22,
  code: 'MAN.COMD.001',
  title: 'Principis i Característiques del Sistema de Comandament (SISCOM)',
  category: 'Manual Operatiu SGO — Comandament i Organització',
  estimatedMinutes: 40,
  importance: {
    title: "Radar d'Examen — Tema 22 (MAN.COMD.001 V.2): Sistema de Comandament SISCOM",
    frequency: 'Molt Alta (2-3 preguntes sobre l’any d’implantació 2010/2015, Decret 276/2016, tram de control 3–5 i els 7 nivells de recursos)',
    summary:
      "Aquest manual de 12 pàgines és curt però molt preguntat: origen de l'ICS a Califòrnia (anys 1970), implantació del SISCOM a Bombers de la Generalitat (2010) i a Bombers de Barcelona (2015), Comandament Únic (Decret 276/2016), Comandament Integrat vs. Unificat, regla +1/-1, Tram de Control (3 a 5 línies), les Àrees Funcionals (CI → Operacions i Suport [Planificació + Logística]) i la jerarquia exacta dels 7 nivells de recursos (Equip → Maniobra → Grup → Sector → Zona → Àrea Funcional → CI). Inclou 4 pàgines d'estudi i 2 pàgines finals de Resum.",
    hotTopics: [
      'Cap. 1-2: Origen ICS (Califòrnia, EUA, anys 1970). SISCOM instaurat a Bombers de la Generalitat l’any 2010 (i a Bombers de Barcelona l’any 2015).',
      'Cap. 3-4: Comandament Únic (Decret 276/2016, de 19 de juliol; relleu segons INT.COMD.000 i GUI.ORGO.001), Comandament Integrat (diferents cossos al CCA sota l’agència responsable) vs. Comandament Unificat (territoris limítrofs que comparteixen autoritat).',
      'Cap. 4.3-4.6: Cadena i línia de comandament (regla +1/-1), Pla d’Acció de l’Incident (PAI, MAN.COMD.003) i Tram de Control òptim: entre 3 i 5 línies directes de supervisió.',
      'Cap. 5-6: Àrees Funcionals (a l’ICS americà són 5; al SISCOM català no s’aplica Finances i s’agrupa en CI → OPERACIONS + SUPORT [Planificació i Logística]; en SISCOM 1 el CI ho assumeix tot) i els 7 nivells de recursos (1. Equip → 2. Maniobra → 3. Grup → 4. Sector → 5. Zona → 6. Àrea Funcional → 7. CI).'
    ],
    traps: [
      'Confondre l’any d’implantació del SISCOM a Bombers de la Generalitat (2010) amb el de Bombers de Barcelona (2015) o amb l’origen de l’ICS americà (anys 1970 a Califòrnia)!',
      'Confondre Comandament INTEGRAT (coordinació de Bombers, SEM i Mossos al CCA sota un sol director operatiu) amb Comandament UNIFICAT (quan l’emergència afecta dos territoris/cossos limítrofs amb competències compartides)!',
      'Invertir l’ordre entre Grup i Sector a l’escalafó de recursos: un GRUP agrupa diversos equips entorn d’una maniobra, i un SECTOR és superior al grup (Equip → Maniobra → Grup → Sector → Zona)!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-3 Origen i Principis',
      title: '1–3. Origen de l’ICS (Anys 70) i del SISCOM (2010 / 2015) i Principis de Comandament',
      subtitle: 'Història a Califòrnia, implantació a Catalunya i els principis de flexibilitat, modularitat i estandardització.',
      blocks: [
        {
          type: 'text',
          heading: '1–2. De l’ICS de Califòrnia (1970) al SISCOM de Bombers (2010 i 2015)',
          paragraphs: [
            "Als anys 1970, arran d'una sèrie d'incendis forestals devastadors a Califòrnia (EUA) on van fallar la coordinació i les comunicacions entre agències, es va crear el programa FIRESCOPE i va néixer l'ICS (Incident Command System), un sistema estandarditzat de gestió d'emergències que avui és referència mundial.",
            "A Catalunya, els Bombers de la Generalitat van instaurar oficialment el seu propi sistema basat en l'ICS —anomenat SISCOM (Sistema de Comandament)— l'any 2010. Posteriorment, l'any 2015, el cos de Bombers de Barcelona també va adoptar el sistema SISCOM, facilitant una doctrina comuna de comandament a tot el territori."
          ]
        },
        {
          type: 'table',
          title: 'Dates Històriques i Principis Fonamentals del SISCOM (MAN.COMD.001 Cap. 1–3)',
          subtitle: 'Cronologia oficial i característiques d’arquitectura del sistema',
          headers: ['Fita / Principi del SISCOM', 'Any / Definició Oficial del Manual', 'Implicació Operativa'],
          rows: [
            ['Origen de l’ICS', 'Anys 1970 a Califòrnia (Estats Units)', 'Neix per resoldre problemes de terminologia, tram de control i coordinació'],
            ['Implantació a Bombers Generalitat', 'Any 2010', 'Adaptació del model ICS a l’estructura operativa de la DGPEIS'],
            ['Implantació a Bombers Barcelona', 'Any 2015', 'Unificació metodològica entre tots dos cossos de bombers a Catalunya'],
            ['Modularitat i Escalabilitat', 'Creix de baix a dalt (bottom-up) i es contrau segons la complexitat', 'Només s’activen les funcions, sectors o àrees realment necessàries'],
            ['Terminologia Comuna', 'Noms estàndard per a càrrecs, recursos, instal·lacions i comunicacions', 'Evita malentesos entre parcs, regions i grups especials']
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 4 Comandament i Tram',
      title: '4. Comandament Únic (Decret 276/2016), Integrat vs. Unificat i Tram de Control (3–5)',
      subtitle: 'Regla +1/-1 de la cadena de comandament, Pla d’Acció de l’Incident (PAI) i supervisió directa.',
      blocks: [
        {
          type: 'text',
          heading: '4.1–4.6. Comandament Únic, Integrat, Unificat, Cadena (+1/-1) i Tram de Control (3 a 5)',
          paragraphs: [
            "1) COMANDAMENT ÚNIC (Unitat de Comandament): En tota intervenció de Bombers hi ha sempre UN SOL Cap d'Intervenció (CI) identificat, regulat pel Decret 276/2016, de 19 de juliol (i pels documents operatius de relleu INT.COMD.000 i GUI.ORGO.001). Tota persona que intervé sap exactament qui és el seu únic superior directe.",
            "2) COMANDAMENT INTEGRAT vs. COMANDAMENT UNIFICAT: El Comandament INTEGRAT es produeix quan en una emergència intervenen diferents cossos o agències (Bombers, SEM, Mossos d'Esquadra, Policia Local, ADF) que es coordinen al Centre de Comandament Avançat (CCA) sota la direcció operativa de l'agència responsable segons la naturalesa del sinistre. En canvi, el Comandament UNIFICAT s'aplica en grans emergències que afecten simultàniament territoris o jurisdiccions limítrofes (ex. un incendi forestal a la frontera entre Catalunya i Aragó o França, o entre Generalitat i Ajuntament de Barcelona), on els comandaments de cada cos comparteixen autoritat i consensuen un únic PAI al Centre de Comandament Unificat.",
            "3) CADENA DE COMANDAMENT (Regla +1 / -1) i TRAM DE CONTROL (3 a 5): Les ordres i la informació segueixen la línia jeràrquica immediata superior (+1) i inferior (-1), evitant saltar-se esglaons ('micromanagement'). El TRAM DE CONTROL (Span of Control) és el nombre de subordinats o línies directes que un sol comandament pot supervisar amb eficàcia i seguretat: al SISCOM s'estableix entre 3 i 5 línies directes! Si un comandament supera les 5 línies, s'ha de subdividir l'estructura creant grups, sectors o zones."
          ]
        },
        {
          type: 'table',
          title: 'Comparativa dels Conceptes de Direcció del Capítol 4 (MAN.COMD.001)',
          subtitle: 'Definició exacta i normativa associada',
          headers: ['Concepte de Comandament', 'Normativa / Regla Oficial', 'Definició Clau d’Examen'],
          rows: [
            ['Comandament Únic', 'Decret 276/2016, de 19 de juliol (Relleu: INT.COMD.000 / GUI.ORGO.001)', 'Sempre hi ha 1 sol Cap d’Intervenció (CI) al capdavant de l’operatiu de Bombers'],
            ['Comandament Integrat', 'Coordinació multiagència al CCA', 'Diferents cossos (Bombers, SEM, Policia) treballen integrats sota la direcció de l’agència principal'],
            ['Comandament Unificat', 'Jurisdiccions o territoris limítrofs', 'Diversos cossos amb competència territorial pròpia prenen decisions conjuntes amb un PAI comú'],
            ['Cadena i Línia (+1 / -1)', 'Principi jeràrquic de comunicació', 'Cada membre rep ordres i reporta únicament al seu superior immediat (+1) i dirigeix el seu nivell (-1)'],
            ['PAI (Pla d’Acció Incident)', 'MAN.COMD.003', 'Defineix els objectius estratègics, la tàctica i les maniobres per a un període operatiu'],
            ['Tram de Control', 'Entre 3 i 5 línies directes (òptim: 3 a 5)', 'Nombre màxim de subordinats o unitats que un comandament pot controlar directament']
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 5-6 Àrees i 7 Nivells',
      title: '5–6. Àrees Funcionals (Operacions i Suport) i els 7 Nivells Jeràrquics de Recursos',
      subtitle: 'Diferència entre les 5 àrees de l’ICS i l’esquema del SISCOM català, i l’escalafó des d’Equip fins a CI.',
      blocks: [
        {
          type: 'text',
          heading: '5. Àrees Funcionals del SISCOM i 6. Jerarquia de Recursos (De Menor a Major)',
          paragraphs: [
            "En l'ICS nord-americà original existeixen 5 grans àrees funcionals: Comandament, Operacions, Planificació, Logística i Administració/Finances. En el SISCOM dels Bombers de la Generalitat, l'àrea d'Administració/Finances no es desplega a l'operatiu de camp, i sota la direcció del CAP D'INTERVENCIÓ (CI) l'estructura es divideix en dues grans branques: 1) ÀREA D'OPERACIONS (executa directament la tàctica i les maniobres del PAI sobre l'incident) i 2) ÀREA DE SUPORT, que engloba tant la funció de PLANIFICACIÓ (recull informació, analitza l'evolució, fa cartografia i redacta el PAI) com la funció de LOGÍSTICA (proporciona comunicacions, avituallament, aigua, relleus, manteniment i instal·lacions com el CRM). En emergències petites o inicials (nivell SISCOM 1), el mateix Cap d'Intervenció (CI) assumeix personalment totes les funcions sense delegar àrees.",
            "El Capítol 6 estableix l'escalafó jeràrquic exacte de 7 NIVELLS d'agrupació de recursos (de menor a major complexitat): 1) EQUIP (la unitat bàsica indivisible: un binomi de bombers o un sol vehicle amb la seva dotació; executa TASQUES concretes) → 2) MANIOBRA (conjunt coordinat de tasques amb un objectiu tàctic concret, ex. maniobra d'extinció o d'excarceració) → 3) GRUP (agrupació funcional de diversos equips que executen una mateixa maniobra sota un Cap de Grup) → 4) SECTOR (divisió geogràfica [Sector Nord, Sector Planta 3] o funcional de l'incident que agrupa diversos grups/equips sota un Cap de Sector) → 5) ZONA (agrupació de diversos sectors quan l'incident és molt extens i se supera el tram de control de 5 sectors) → 6) ÀREES FUNCIONALS (Operacions i Suport: Planificació/Logística) → 7) COMANDAMENT DE LA INTERVENCIÓ (CI)."
          ]
        },
        {
          type: 'diagram',
          title: 'Organigrama Funcional del SISCOM i Escalafó dels 7 Nivells de Recursos',
          diagramType: 'siscom_tree',
          caption:
            'A dalt: el Cap d’Intervenció (CI) dirigeix l’Àrea d’Operacions i l’Àrea de Suport (Planificació + Logística) mantenint un tram de control de 3 a 5 línies. A baix: els 7 esglaons jeràrquics des d’Equip fins a CI.'
        },
        {
          type: 'mnemonic',
          title: 'Truc Mnemotècnic per als 7 Nivells del SISCOM: "El Meu Gos Salta Zones Amb Comandament"',
          trick:
            'Memoritza la frase "El Meu Gos Salta Zones Amb Comandament" per recordar l’ordre exacte de menor (1) a major (7):\n1. E-quip (1 binomi o 1 dotació → fa Tasques)\n2. M-aniobra (conjunt d’accions tàctiques)\n3. G-rup (diversos equips fent una maniobra)\n4. S-ector (divisió geogràfica o funcional)\n5. Z-ona (agrupa diversos sectors quan n’hi ha > 5)\n6. À-rea Funcional (Operacions / Suport)\n7. C-omandament de la Intervenció (CI).',
          example:
            'Pregunta clàssica d’examen: Què és més gran al SISCOM, un Grup, un Sector o una Zona? Una ZONA agrupa diversos SECTORS, i un SECTOR agrupa diversos GRUPS (Equip < Maniobra < Grup < Sector < Zona)!'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Síntesi Visual SISCOM',
      title: 'Síntesi Visual i Casos Pràctics: Quan crear un Grup, un Sector o una Zona?',
      subtitle: 'Com s’aplica el tram de control (3 a 5) quan un incident creix des de SISCOM 1.',
      blocks: [
        {
          type: 'easy',
          title: 'Mode Nen Petit: Com creix l’arbre del SISCOM amb la regla dels 5 dits d’una mà!',
          metaphor:
            'Imagina que cada cap només té UNA MÀ amb 5 dits (Tram de control màxim = 3 a 5 línies):',
          explanation:
            "• Al principi arriba 1 sol camió (SISCOM 1): el caporal és el Cap d'Intervenció (CI) i amb els dits de la seva mà controla directament els seus equips.\n• Si arriben 4 camions més, ja té els 5 dits ocupats. Si n'arriben més, ja no pot parlar amb tots alhora! Aleshores crea 3 SECTORS (Sector Flanc Dret, Sector Flanc Esquerre, Sector Cap) i posa un Cap de Sector a cadascun: ara el CI només parla amb 3 Caps de Sector (3 dits ocupats!).\n• Si el foc es fa gegant i ja hi ha 8 Sectors, el Cap d'Operacions tornaria a tenir més de 5 dits ocupats: aleshores agrupa els 8 Sectors en 2 ZONES (Zona Nord i Zona Sud)!",
          takeaway: 'Sempre que superis les 5 línies directes (tram de control 3–5), agrupa en el nivell superior (Equips → Grups → Sectors → Zones).'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · Resum 1/2',
      title: 'Resum Imprescindible d’Examen (1/2) — Història, Normativa i Principis del SISCOM',
      subtitle: 'Síntesi d’alta densitat dels Capítols 1 a 4 del manual MAN.COMD.001.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 1: Dates, Decrets i Principis de Direcció',
          subtitle: 'Dades clau dels Capítols 1, 2, 3 i 4',
          headers: ['Concepte', 'Dada Oficial Exacta', 'Detall d’Examen'],
          rows: [
            ['Origen de l’ICS', 'Anys 1970 a Califòrnia (EUA)', 'Sistema modular estandarditzat per a grans emergències'],
            ['SISCOM a Catalunya', 'Bombers Generalitat = 2010 · Bombers Barcelona = 2015', 'Doctrina comuna de comandament basada en l’ICS'],
            ['Comandament Únic', 'Decret 276/2016, de 19 de juliol', 'Relleu regulat per INT.COMD.000 i GUI.ORGO.001'],
            ['Comandament Integrat vs. Unificat', 'Integrat = multiagència al CCA | Unificat = territoris limítrofs', 'Al Comandament Unificat es comparteix l’autoritat en un PAI comú'],
            ['Cadena (+1/-1) i PAI', 'Regla +1 / -1 · PAI regulat a MAN.COMD.003', 'Cada recurs informa únicament al seu comandament immediat (+1)'],
            ['Tram de Control', 'Entre 3 i 5 línies directes de supervisió', 'Garanteix la seguretat i evita la saturació de comunicacions']
          ]
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · Resum 2/2',
      title: 'Resum Imprescindible d’Examen (2/2) — Àrees Funcionals i Els 7 Nivells de Recursos',
      subtitle: 'Síntesi d’alta densitat dels Capítols 5 i 6 del manual MAN.COMD.001.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 2: Arquitectura Funcional i Escalafó de Recursos SISCOM',
          subtitle: 'Ordre jeràrquic exacte de l’1 al 7',
          headers: ['Nivell / Àrea', 'Definició Oficial al Manual MAN.COMD.001', 'Observació Clau'],
          rows: [
            ['Àrees Funcionals ICS vs. SISCOM', 'ICS (5): Comandament, Operacions, Planificació, Logística, Finances', 'Al SISCOM no s’aplica Finances: CI → Operacions + Suport (Planificació i Logística)'],
            ['1. Equip → 2. Maniobra', 'Equip = 1 binomi o 1 vehicle (fa Tasques) · Maniobra = acció tàctica', 'Unitat mínima d’intervenció (mai treballar sol)'],
            ['3. Grup → 4. Sector', 'Grup = diversos equips en una maniobra · Sector = divisió geogràfica/funcional', 'El Sector és jeràrquicament superior al Grup'],
            ['5. Zona → 6. Àrea → 7. CI', 'Zona = agrupa diversos sectors · Àrea = Operacions/Suport · CI = Comandament', 'En incidents simples (SISCOM 1) el CI assumeix totes les àrees']
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't22-q1',
      difficulty: 'Fàcil',
      question: 'En quin any es va instaurar el Sistema de Comandament (SISCOM) als Bombers de la Generalitat i en quin any als Bombers de Barcelona, i on té el seu origen el sistema ICS?',
      options: [
        'Bombers Generalitat: 1994 | Bombers Barcelona: 2000 | Origen: França anys 1980.',
        'Bombers Generalitat: 2010 | Bombers Barcelona: 2015 | Origen de l’ICS: Califòrnia (EUA) als anys 1970.',
        'Bombers Generalitat: 2016 | Bombers Barcelona: 2020 | Origen: Nacions Unides 1990.',
        'Tots dos cossos el van implantar l’any 2005.'
      ],
      correctIndex: 1,
      explanation: 'Capítol 2 del manual MAN.COMD.001: l’ICS neix als anys 70 a Califòrnia; el SISCOM s’implanta a Bombers de la Generalitat l’any 2010 i a Bombers de Barcelona l’any 2015.'
    },
    {
      id: 't22-q2',
      difficulty: 'Fàcil',
      question: 'Quin és el Tram de Control (nombre de línies directes de supervisió per a cada comandament) establert pel sistema SISCOM?',
      options: [
        'D’1 a 2 línies.',
        'Entre 3 i 5 línies directes.',
        'Entre 8 i 12 línies directes.',
        'Fins a 20 vehicles per comandament.'
      ],
      correctIndex: 1,
      explanation: 'Segons l’apartat 4.6 del manual MAN.COMD.001, el tram de control efectiu se situa entre 3 i 5 línies directes de supervisió.'
    },
    {
      id: 't22-q3',
      difficulty: 'Mitjà',
      question: 'Quin és l’ordre jeràrquic exacte de MENOR a MAJOR nivell d’agrupació dels recursos segons el Capítol 6 del manual MAN.COMD.001?',
      options: [
        '1. Sector → 2. Grup → 3. Zona → 4. Equip → 5. Maniobra → 6. Àrea Funcional → 7. CI.',
        '1. Equip → 2. Maniobra → 3. Grup → 4. Sector → 5. Zona → 6. Àrees Funcionals → 7. Comandament de la Intervenció (CI).',
        '1. Binomi → 2. Zona → 3. Sector → 4. Grup → 5. Maniobra → 6. CI.',
        '1. Equip → 2. Sector → 3. Grup → 4. Maniobra → 5. Zona → 6. CI.'
      ],
      correctIndex: 1,
      explanation: 'L’escalafó oficial de 7 nivells de menor a major és: 1. Equip, 2. Maniobra, 3. Grup, 4. Sector, 5. Zona, 6. Àrees Funcionals i 7. Comandament de la Intervenció (CI).'
    },
    {
      id: 't22-q4',
      difficulty: 'Mitjà',
      question: 'Quin Decret regula el Comandament Únic d’operacions als Bombers de la Generalitat i quins documents operatius regulen el relleu de comandament?',
      options: [
        'Decret 276/2016, de 19 de juliol (i per al relleu: INT.COMD.000 i GUI.ORGO.001).',
        'Llei 31/1995 de PRL.',
        'Decret 100/2000.',
        'Codi Tècnic de l’Edificació.'
      ],
      correctIndex: 0,
      explanation: 'Apartat 4.1 del manual: el Comandament Únic es regeix pel Decret 276/2016, de 19 de juliol, i el relleu per la instrucció INT.COMD.000 i la guia GUI.ORGO.001.'
    },
    {
      id: 't22-q5',
      difficulty: 'Mitjà',
      question: 'Com s’estructuren les Àrees Funcionals al SISCOM de Bombers de la Generalitat sota el Cap d’Intervenció (CI), a diferència de les 5 àrees de l’ICS nord-americà?',
      options: [
        'Només existeix l’Àrea d’Administració i Finances.',
        'Al SISCOM no s’aplica l’àrea de Finances i s’organitza sota el CI en: Àrea d’OPERACIONS i Àrea de SUPORT (que engloba PLANIFICACIÓ i LOGÍSTICA).',
        'Hi ha 10 àrees funcionals obligatòries en tots els serveis.',
        'El CI només dirigeix Logística i el SEM dirigeix Operacions.'
      ],
      correctIndex: 1,
      explanation: 'Capítol 5 del manual: al SISCOM català s’exclou Finances i sota el CI es despleguen Operacions i Suport (que integra Planificació i Logística).'
    },
    {
      id: 't22-q6',
      difficulty: 'Mitjà',
      question: 'Quina és la diferència entre Comandament Integrat i Comandament Unificat segons l’apartat 4.2 del manual MAN.COMD.001?',
      options: [
        'Són exactament el mateix concepte.',
        'El Comandament Integrat és la coordinació de diferents agències (Bombers, SEM, Policia) al CCA sota l’agència responsable; el Comandament Unificat s’aplica quan l’emergència afecta territoris o jurisdiccions limítrofes que comparteixen autoritat.',
        'L’Integrat és només per a incendis forestals i l’Unificat per a rescat urbà.',
        'L’Unificat vol dir que mana un sol bomber sense cap altre cos.'
      ],
      correctIndex: 1,
      explanation: 'Comandament Integrat = coordinació multiagència al CCA sota el cos director; Comandament Unificat = direcció compartida entre cossos/territoris limítrofs amb competències homòlogues.'
    },
    {
      id: 't22-q7',
      difficulty: 'Fàcil',
      question: 'Què indica la regla "+1 / -1" dins la cadena i línia de comandament del SISCOM?',
      options: [
        'Que sempre cal demanar un camió més dels necessaris.',
        'Que cada membre o unitat rep ordres i reporta únicament al seu esglaó jeràrquic immediatament superior (+1) i dirigeix únicament el seu esglaó immediatament inferior (-1).',
        'Que el tram de control és d’1 bomber.',
        'Que a l’estiu es resta 1 hora.'
      ],
      correctIndex: 1,
      explanation: 'La regla +1/-1 garanteix l’ordre jeràrquic evitant que els comandaments superiors donin ordres saltant-se els comandaments intermedis.'
    },
    {
      id: 't22-q8',
      difficulty: 'Fàcil',
      question: 'Quina àrea o funció dins de Suport és l’encarregada de recopilar i analitzar la informació sobre l’evolució del sinistre, elaborar la cartografia i preparar el Pla d’Acció de l’Incident (PAI)?',
      options: [
        'La funció de Planificació.',
        'La funció de Logística.',
        'Un binomi d’atac.',
        'L’àrea de Finances.'
      ],
      correctIndex: 0,
      explanation: 'Planificació analitza la situació i prepara el PAI, mentre que Logística proveeix els recursos materials, avituallament, comunicacions i instal·lacions.'
    },
    {
      id: 't22-q9',
      difficulty: 'Fàcil',
      question: 'En un servei senzill d’estructura mínima (SISCOM 1), qui assumeix les funcions d’Operacions, Planificació i Logística?',
      options: [
        'Es convoquen sempre 3 oficials diferents.',
        'El mateix Cap d’Intervenció (CI) assumeix totes les funcions sense necessitat de delegar àrees.',
        'Les assumeix la Sala Central.',
        'No es fa cap maniobra.'
      ],
      correctIndex: 1,
      explanation: 'Pel principi d’escalabilitat i modularitat, en SISCOM 1 el Cap d’Intervenció (ex. el caporal de la primera sortida) assumeix totes les funcions.'
    },
    {
      id: 't22-q10',
      difficulty: 'Mitjà',
      question: 'Quan es crea una ZONA dins de l’estructura operativa d’una gran emergència?',
      options: [
        'Sempre que hi ha més de 2 bombers.',
        'Quan el nombre de SECTORS desplegats supera el tram de control (més de 5 sectors) i cal agrupar diversos sectors sota un Cap de Zona.',
        'Abans de crear cap Equip.',
        'Quan s’acaba l’emergència.'
      ],
      correctIndex: 1,
      explanation: 'La Zona (nivell 5) és l’agrupació superior que reuneix diversos Sectors (nivell 4) quan la dimensió de l’incident supera el tram de control de 3–5 sectors.'
    }
  ]
};
