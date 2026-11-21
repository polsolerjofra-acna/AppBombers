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
          heading: '4.1–4.6. Comandament Únic, Integrat vs. Unificat, Cadena (+1/-1) i Tram de Control',
          paragraphs: [
            "1) Comandament Únic (Unitat de Comandament): En tota intervenció de Bombers hi ha un únic Cap d'Intervenció (CI) identificat, regulat pel Decret 276/2016, de 19 de juliol (i el relleu per INT.COMD.000 i GUI.ORGO.001).",
            "2) No confondre! Comandament Integrat vs. Comandament Unificat: En el Comandament INTEGRAT, diferents agències (Bombers, SEM, Mossos, ADF) es coordinen al CCA sota la direcció operativa de l'agència responsable del sinistre. En el Comandament UNIFICAT (emergències entre territoris o jurisdiccions limítrofes, ex. Catalunya–Aragó o Generalitat–BCN), els cossos homòlegs comparteixen l'autoritat i consensuen un únic PAI.",
            "3) Cadena de Comandament (+1 / -1): Les ordres i informes segueixen estrictament el nivell immediat superior (+1) i inferior (-1), evitant saltar-se esglaons intermedis.",
            "4) Tram de Control (Span of Control): Nombre de subordinats o línies directes que un comandament pot supervisar amb seguretat. Al SISCOM és d'entre 3 i 5 línies directes; si se superen les 5, cal crear un esglaó intermedi."
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
          heading: '5. Àrees Funcionals: SISCOM Català vs. ICS Americà',
          paragraphs: [
            "No confondre! ICS Americà (5 àrees) vs. SISCOM Català: L'ICS nord-americà té 5 àrees funcionals (Comandament, Operacions, Planificació, Logística i Administració/Finances). Al SISCOM de Bombers de la Generalitat NO es desplega Administració/Finances sobre el terreny.",
            "Sota el Cap d'Intervenció (CI), el SISCOM s'estructura en dues grans branques: 1) Àrea d'OPERACIONS (executa les maniobres tàctiques del PAI) i 2) Àrea de SUPORT, que integra PLANIFICACIÓ (anàlisi, cartografia i redacció del PAI) i LOGÍSTICA (comunicacions, aigua, avituallament, relleus i CRM). En serveis simples (SISCOM 1), el CI assumeix totes les funcions."
          ]
        },
        {
          type: 'text',
          heading: '6. Escalafó dels 7 Nivells Jeràrquics de Recursos (De Menor a Major)',
          paragraphs: [
            "• 1. EQUIP: unitat bàsica indivisible (un binomi o un vehicle amb la seva dotació); executa tasques concretes.",
            "• 2. MANIOBRA: conjunt coordinat de tasques amb un objectiu tàctic definit (ex. extinció o excarceració).",
            "• 3. GRUP: agrupació funcional de diversos equips que executen una mateixa maniobra sota un Cap de Grup.",
            "• 4. SECTOR: divisió geogràfica (ex. Sector Nord, Planta 3) o funcional superior al Grup, amb un Cap de Sector.",
            "• 5. ZONA: agrupació de diversos sectors quan se supera el tram de control de 5 sectors.",
            "• 6. ÀREES FUNCIONALS (Operacions i Suport) → 7. COMANDAMENT DE LA INTERVENCIÓ (CI)."
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
            "• SISCOM 1 (1 camió): el caporal és el CI i controla directament els seus equips (menys de 5 dits ocupats).\n• Si arriben més camions i superen les 5 línies, es creen SECTORS (Nord, Sud, Flanc) amb un Cap de Sector cadascun.\n• Si el sinistre creix fins a superar 5 Sectors (ex. 8 Sectors), el Cap d'Operacions els agrupa en ZONES (Zona Nord i Zona Sud).",
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
        '1. Sector → 2. Grup → 3. Zona → 4. Equip → 5. Maniobra → 6. Àrees Funcionals → 7. Comandament de la Intervenció (CI).',
        '1. Equip → 2. Maniobra → 3. Grup → 4. Sector → 5. Zona → 6. Àrees Funcionals → 7. Comandament de la Intervenció (CI).',
        '1. Equip → 2. Zona → 3. Sector → 4. Grup → 5. Maniobra → 6. Àrees Funcionals → 7. Comandament de la Intervenció (CI).',
        '1. Equip → 2. Sector → 3. Grup → 4. Maniobra → 5. Zona → 6. Àrees Funcionals → 7. Comandament de la Intervenció (CI).'
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
        'Decret 30/2015, de 3 de març (i per al relleu: MAN.COMD.003 i INT.ORGO.002).',
        'Llei 5/1994, de 4 de maig, de prevenció (i per al relleu: GUI.COMD.002 i MAN.SEGU.000).',
        'Decret 168/2010, de 16 de novembre (i per al relleu: INT.GRAL.001 i MAN.EQIP.000).'
      ],
      correctIndex: 0,
      explanation: 'Apartat 4.1 del manual: el Comandament Únic es regeix pel Decret 276/2016, de 19 de juliol, i el relleu per la instrucció INT.COMD.000 i la guia GUI.ORGO.001.'
    },
    {
      id: 't22-q5',
      difficulty: 'Mitjà',
      question: 'Com s’estructuren les Àrees Funcionals al SISCOM de Bombers de la Generalitat sota el Cap d’Intervenció (CI), a diferència de les 5 àrees de l’ICS nord-americà?',
      options: [
        'Al SISCOM s’apliquen exactament les 5 àrees de l’ICS nord-americà separades sota el CI: Operacions, Planificació, Logística, Finances i Seguretat.',
        'Al SISCOM no s’aplica l’àrea de Finances i s’organitza sota el CI en: Àrea d’OPERACIONS i Àrea de SUPORT (que engloba PLANIFICACIÓ i LOGÍSTICA).',
        'Al SISCOM existeixen 4 àrees funcionals obligatòries en tot servei: Atac Directe, Abastament Hídric, Comunicacions RESCAT i Administració/Finances.',
        'El CI només dirigeix l’Àrea de Planificació i Finances, mentre que l’Àrea d’Operacions i Logística queda delegada directament al Centre de Control (CEC).'
      ],
      correctIndex: 1,
      explanation: 'Capítol 5 del manual: al SISCOM català s’exclou Finances i sota el CI es despleguen Operacions i Suport (que integra Planificació i Logística).'
    },
    {
      id: 't22-q6',
      difficulty: 'Difícil',
      question: 'Quina és la diferència entre Comandament Integrat i Comandament Unificat segons l’apartat 4.2 del manual MAN.COMD.001?',
      options: [
        'Són termes equivalents al SISCOM que designen la integració d’un sol comandament únic quan intervenen més de tres parcs de bombers dins d’una mateixa Regió d’Emergències.',
        'El Comandament Integrat coordina agències diferents (Bombers, SEM, Policia) al CCA sota l’agència directora; el Comandament Unificat comparteix direcció entre jurisdiccions limítrofes.',
        'El Comandament Integrat s’aplica quan comparteixen autoritat cossos limítrofs amb competències homòlogues, i el Comandament Unificat coordina diferents agències al CCA sota un sol cos.',
        'El Comandament Integrat s’utilitza exclusivament en incendis forestals amb mitjans aeris, mentre que el Comandament Unificat s’aplica únicament en emergències químiques amb risc NRBQ.'
      ],
      correctIndex: 1,
      explanation: 'Comandament Integrat = coordinació multiagència al CCA sota el cos director; Comandament Unificat = direcció compartida entre cossos/territoris limítrofs amb competències homòlogues.'
    },
    {
      id: 't22-q7',
      difficulty: 'Mitjà',
      question: 'Què indica la regla "+1 / -1" dins la cadena i línia de comandament del SISCOM?',
      options: [
        'Que cada sector ha de demanar sempre un vehicle de reserva addicional (+1) i mantenir un equip descansant en zona segura (-1).',
        'Que cada unitat rep ordres i reporta només al seu esglaó immediat superior (+1) i dirigeix només el seu esglaó immediat inferior (-1).',
        'Que el tram de control màxim és d’un sol comandament superior (+1) per a cada vehicle d’intervenció desplegat a la zona calenta (-1).',
        'Que en produir-se un relleu de comandament cal sumar un període operatiu (+1) abans de reduir el nivell d’activació SISCOM (-1).'
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
        'Es convoquen sempre tres comandaments territorials diferents per dirigir cada àrea per separat.',
        'El mateix Cap d’Intervenció (CI) assumeix totes les funcions sense necessitat de delegar àrees.',
        'Les assumeix directament la Sala Central de Coordinació mentre la dotació executa la maniobra.',
        'Es deleguen automàticament al cap de la segona sortida de reforç abans d’iniciar l’extinció.'
      ],
      correctIndex: 1,
      explanation: 'Pel principi d’escalabilitat i modularitat, en SISCOM 1 el Cap d’Intervenció (ex. el caporal de la primera sortida) assumeix totes les funcions.'
    },
    {
      id: 't22-q10',
      difficulty: 'Mitjà',
      question: 'Quan es crea una ZONA dins de l’estructura operativa d’una gran emergència?',
      options: [
        'Sempre que intervenen més de dos equips d’un mateix parc en un servei urbà o industrial de durada superior a una hora.',
        'Quan el nombre de SECTORS desplegats supera el tram de control (més de 5 sectors) i cal agrupar diversos sectors sota un Cap de Zona.',
        'Immediatament a l’arribada de la primera sortida al sinistre, abans de definir els Grups i els Equips d’intervenció inicials.',
        'Únicament en la fase de desmobilització final quan ja s’han tancat les àrees de Planificació i Logística al Centre de Comandament.'
      ],
      correctIndex: 1,
      explanation: 'La Zona (nivell 5) és l’agrupació superior que reuneix diversos Sectors (nivell 4) quan la dimensió de l’incident supera el tram de control de 3–5 sectors.'
    },
    {
      id: 't22-q11',
      difficulty: 'Mitjà',
      question: 'Quina àrea funcional de l’ICS nord-americà original NO s’aplica a l’operatiu de camp del SISCOM de Bombers de la Generalitat, i com s’integren Planificació i Logística?',
      options: [
        'No s’aplica l’àrea d’Operacions; Planificació i Logística depenen de Finances.',
        'No s’aplica l’àrea d’Administració/Finances; Planificació i Logística s’integren dins de l’Àrea de Suport.',
        'No s’aplica Logística; Finances s’integra dins d’Operacions.',
        'S’apliquen exactament les 5 àrees de l’ICS amb els mateixos noms separats en tot servei.'
      ],
      correctIndex: 1,
      explanation: 'A diferència de les 5 àrees de l’ICS americà, el SISCOM català exclou Administració/Finances i s’estructura sota el CI en Àrea d’Operacions i Àrea de Suport (que engloba Planificació i Logística).'
    },
    {
      id: 't22-q12',
      difficulty: 'Mitjà',
      question: 'Es produeix un incendi forestal a la franja limítrofa entre Catalunya i Aragó en què actuen conjuntament Bombers de la Generalitat i mitjans d’Aragó amb competències territorials compartides i un PAI consensuat. Quin model de comandament s’estableix?',
      options: [
        'Comandament Unificat.',
        'Comandament Integrat.',
        'SISCOM 1.',
        'Comandament delegat exclusivament al SEM.'
      ],
      correctIndex: 0,
      explanation: 'El Comandament Unificat s’aplica quan l’emergència afecta territoris o jurisdiccions limítrofes (ex. Catalunya–Aragó o Generalitat–Barcelona), compartint autoritat i redactant un PAI comú.'
    },
    {
      id: 't22-q13',
      difficulty: 'Fàcil',
      question: 'Dins de l’Àrea de Suport del SISCOM, quina funció s’encarrega de proporcionar comunicacions, aigua, avituallament, manteniment, relleus i instal·lacions com el Centre de Recepció de Mitjans (CRM)?',
      options: [
        'La funció de Planificació.',
        'La funció de Logística.',
        'L’Àrea d’Operacions.',
        'El Grup d’Ordre.'
      ],
      correctIndex: 1,
      explanation: 'Logística subministra els mitjans materials, aigua, avituallament, comunicacions, relleus i instal·lacions de suport (CRM), mentre que Planificació recull informació, fa cartografia i elabora el PAI.'
    },
    {
      id: 't22-q14',
      difficulty: 'Difícil',
      question: 'En relació amb l’escalafó de recursos i el principi de modularitat del SISCOM (MAN.COMD.001), quina de les afirmacions següents és INCORRECTA?',
      options: [
        'Un Equip és la unitat bàsica indivisible (un binomi o un vehicle amb la seva dotació) i executa tasques concretes.',
        'Un Grup té un rang jeràrquic superior al Sector, ja que un Grup agrupa diversos Sectors geogràfics.',
        'El sistema creix de baix a dalt (bottom-up) i es contrau modularment segons l’evolució de l’emergència.',
        'L’ús de terminologia comuna evita malentesos entre parcs, regions i grups especials.'
      ],
      correctIndex: 1,
      explanation: 'Afirmació incorrecta: és al revés! El Sector (nivell 4) és superior al Grup (nivell 3). Un Grup reuneix diversos equips en una maniobra, mentre que un Sector divideix geogràficament o funcionalment l’incident i agrupa diversos grups o equips.'
    },
    {
      id: 't22-q15',
      difficulty: 'Mitjà',
      question: 'Durant un incendi industrial, un Cap de Sector rep l’assignació de 7 equips diferents simultàniament sota la seva supervisió directa. Per què aquesta situació vulnera els principis del SISCOM i com s’ha de resoldre?',
      options: [
        'Vulnera el tram de control òptim (3 a 5 línies directes); s’ha de resoldre subdividint i creant Grups o un nou Sector per mantenir entre 3 i 5 línies.',
        'Vulnera la regla "+1 / -1" de comunicació; s’ha de resoldre retornant 2 equips al Centre de Recepció de Mitjans (CRM) en espera.',
        'Vulnera el principi de comandament únic del Decret 276/2016; s’ha de resoldre suprimint el PAI i transferint el comandament a la Sala.',
        'No vulnera cap principi operatiu del SISCOM, ja que el tram de control màxim establert per a un Cap de Sector és de 10 a 12 línies directes.'
      ],
      correctIndex: 0,
      explanation: 'Amb 7 línies directes se supera el tram de control màxim recomanat al SISCOM (3 a 5 línies). Cal reorganitzar els equips en Grups (amb Caps de Grup) o dividir el Sector.'
    },
    {
      id: 't22-q16',
      difficulty: 'Fàcil',
      question: 'Quin document operatiu defineix els objectius estratègics, la tàctica i les maniobres per a un període operatiu dins del SISCOM i quin codi de document el regula?',
      options: [
        'El Pla d’Acció de l’Incident (PAI), regulat per MAN.COMD.003.',
        'El DUPROCIM operatiu, regulat pel Decret 276/2016.',
        'El PLEGEM de campanya, regulat per MAN.ATXX.000.',
        'El Codi SOC d’operacions, regulat per MAN.GRAL.002.'
      ],
      correctIndex: 0,
      explanation: 'El Pla d’Acció de l’Incident (PAI) —regulat pel manual MAN.COMD.003— fixa els objectius, l’estratègia i les maniobres per a cada període operatiu.'
    },
    {
      id: 't22-q17',
      difficulty: 'Mitjà',
      question: 'En una emergència urbana complexa on intervenen conjuntament Bombers, SEM i Mossos d’Esquadra coordinats al Centre de Comandament Avançat (CCA) sota la direcció operativa de l’agència competent, quin tipus de comandament s’aplica?',
      options: [
        'Comandament Unificat.',
        'Comandament Integrat.',
        'Comandament Paral·lel sense CCA.',
        'Comandament Aïllat.'
      ],
      correctIndex: 1,
      explanation: 'Quan diferents agències o cossos (Bombers, SEM, Mossos, etc.) treballen coordinats al CCA sota la direcció operativa de l’agència responsable segons la naturalesa del sinistre, parlem de Comandament Integrat.'
    },
    {
      id: 't22-q18',
      difficulty: 'Fàcil',
      question: 'Quin principi del SISCOM explica que només s’activin els càrrecs, sectors o àrees funcionals estrictament necessàries en cada moment de l’emergència (des d’un sol camió fins a una gran catàstrofe)?',
      options: [
        'El principi de modularitat i escalabilitat.',
        'El principi de rigidesa absoluta.',
        'El principi de duplicitat funcional.',
        'El principi d’autoprotecció passiva.'
      ],
      correctIndex: 0,
      explanation: 'La modularitat i escalabilitat permet que l’organització creixi de baix a dalt (bottom-up) i es redueixi quan disminueix la complexitat, activant només els nivells necessaris.'
    }
  ]
};
