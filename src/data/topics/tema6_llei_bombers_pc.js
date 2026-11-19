export const tema6LleiBombersPc = {
  id: 'tema-6',
  number: 6,
  code: 'Llei 5/1994 · Llei 4/1997 · DL 14/2025',
  title: 'Llei de Bombers (5/1994) i Llei de Protecció Civil (4/1997)',
  category: 'Legislació i Normativa — Bloc General',
  estimatedMinutes: 70,
  importance: {
    title: 'Anàlisi d\'Importància · Tema 6',
    frequency: 'Molt Alta (El cor legal del Cos de Bombers)',
    summary:
      'Tema troncal de l\'oposició. Contrasta dues lleis bessones: Llei 5/1994 (estructura del Cos de Bombers, amb la novetat del DL 14/2025 que crea l\'Escala de Suport amb EPAF al C2, i règim de FALTES) vs Llei 4/1997 (Protecció Civil, plans, evacuació/confinament, autoritats i règim d\'INFRACCIONS).',
    hotTopics: [
      'Novetat DL 14/2025: 4 escales a l\'art. 15 (Superior, Executiva, Tècnica, De suport: TECOR, TEOV, EPAF C2, TELOG)',
      'Agent de l\'autoritat (Cos i entitats locals; NO voluntaris ni bombers d\'empresa) i 2a activitat (3 metges)',
      'Llei 5/1994 FALTES (alcohol = Greu; embriaguesa/drogues = Molt greu) vs Llei 4/1997 INFRACCIONS',
      'Llei 4/1997: Evacuació s\'ORDENA / Confinament es RECOMANA; 2 autoritats (Alcalde i Conseller); plans i homologació'
    ],
    traps: [
      'L\'Escala de suport (art. 15 DL 14/2025) s\'accedeix per concurs oposició lliure i NO pot promocionar a les altres escales!',
      'El Govern NO és autoritat de Protecció Civil (només Alcalde i Conseller)!',
      'Impedir requisa = Molt greu / Obstaculitzar requisa = Greu; però en INSPECCIÓ, tant impedir com obstaculitzar = Molt greu!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Llei 5/1994: Cos i Escales',
      title: '1. Llei 5/1994 de Bombers: Serveis, Autoritat i Noves Escales (DL 14/2025)',
      subtitle: 'Organització del Cos, antiguitats de promoció i segona activitat',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '1.1 Naturalesa, agents de l\'autoritat i escales (art. 15)',
          paragraphs: [
            'La Llei 5/1994 té 70 articles vius (79 + 3 bis - 12 derogats). L\'article 3 distingeix entre prestació personal obligatòria (NO s\'indemnitza) i requisa de béns (SÍ s\'indemnitza). Tenen condició d\'agent de l\'autoritat els membres del Cos de Bombers de la Generalitat i dels serveis locals en acte de servei — i fora de servei si s\'acrediten prèviament en situació d\'urgència. Els bombers voluntaris (vinculats per nomenament, ni funcionaris ni laborals) i els bombers d\'empresa (habilitats per l\'ISPC) NO són agents de l\'autoritat.',
            'L\'art. 13 enumera 10 funcions (salvament marítim a requeriment). El comandament superior correspon al titular del Departament; en el sinistre mana el Cos llevat que s\'activi un pla de protecció civil. L\'organització territorial bàsica és Parc → Zona (comarcal) → Brigada. Municipis > 20.000 hab.: servei mínim obligatori (o dispensa / actuació subsidiària de la Generalitat). Jubilació forçosa: 65 anys (DA 7a); escala bàsica en extinció des de l\'1-1-2024 (DT 12a).'
          ]
        },
        {
          type: 'table',
          title: 'Les 4 Escales de Bombers (art. 15, actualitzat DL 14/2025)',
          subtitle: 'Categories, grups i antiguitat per promocionar',
          headers: ['Escala', 'Categories i Grup', 'Antiguitat / Regla promoció'],
          rows: [
            ['Superior', 'Inspector (Grup A)', '3 anys com a sotsinspector (fins al 65% places promoció)'],
            ['Executiva', 'Sotsinspector (Grup B)', '3 anys com a oficial'],
            ['Tècnica', 'Oficial, Sergent, Caporal, Bomber de 1a (Grup C1)', 'Bomber 1a: 2a/10a/5a · Caporal: 4a (o 2a bàsica) · Sergent/Oficial: 2a'],
            ['De suport (DL 14/2025)', 'TECOR, TEOV, EPAF (grup C2!), TELOG (C1/C2)', 'Concurs oposició lliure · NO pot promocionar a les altres escales!']
          ],
          footnote: 'Art. 39–40 Segona activitat: tribunal de 3 metges (1 Departament, 1 interessat, 1 per sorteig CatSalut).'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Llei 5/1994: Deures i Faltes',
      title: '2. Llei 5/1994: Deures i Règim Disciplinari (Faltes)',
      subtitle: 'Faltes molt greus (7), greus (7) i lleus (3) del Cos de Bombers',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '2.1 Deures (arts. 36–38) i Faltes (arts. 41–45)',
          paragraphs: [
            'L\'article 36.f obliga a romandre al lloc de treball fins a l\'arribada del relleu O si la gravetat del sinistre ho exigeix. La lletra h (modificada pel DL 14/2025) regula les incompatibilitats. La instrucció d\'expedients disciplinaris l\'incoa sempre la Direcció General.',
            'El quadre de faltes de la Llei 5/1994 (7 molt greus, 7 greus, 3 lleus) té matisos molt fins que cauen contínuament a examen: consumir alcohol en servei és falta GREU, però embriagar-se o consumir drogues és falta MOLT GREU; no acudir a les crides estant en servei és MOLT GREU, mentre que no comparèixer estant lliure de servei amb ordre expressa és GREU; portar malament l\'uniforme o no fer el relleu adequadament sense gravetat és LLEU.'
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Faltes de Llei 5/1994 vs Infraccions de Llei 4/1997',
          metaphor: 'La Llei 5/1994 és el "codi intern del vestidor dels bombers"; la Llei 4/1997 és la "llei de trànsit per a tota la població durant una emergència".',
          explanation:
            'Quan un bomber fa alguna cosa malament dins la feina, comet una FALTA (Llei 5/1994) i el sanciona la Direcció General o el Conseller. Quan un ciutadà o una empresa incompleix un pla d\'emergència o impedeix una requisa, comet una INFRACCIÓ (Llei 4/1997) i el multa l\'Alcalde, el Conseller o el Govern.',
          takeaway: 'Bomber = FALTES (Llei 5/1994). Ciutadà / Empresa = INFRACCIONS (Llei 4/1997).'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Llei 4/1997: Plans i Òrgans',
      title: '3. Llei 4/1997 de Protecció Civil: Plans, Autoritats i Infraestructures',
      subtitle: 'Qui mana, com s\'aproven els plans i diferència entre Previsió i Prevenció',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '3.1 Conceptes clau, plans (art. 15) i autoritats',
          paragraphs: [
            'L\'art. 2 enumera 4 principis d\'inspiració i 8 principis d\'organització. Cal distingir Previsió (saber ON és el risc → Mapa de Protecció Civil, art. 12) de Prevenció (evitar que PASSI → inspecció i vigilància). Durant una emergència, l\'evacuació s\'ORDENA i el confinament es RECOMANA (si no hi ha pla, l\'alcalde pot declarar l\'emergència).',
            'Només hi ha 2 autoritats de Protecció Civil: l\'Alcalde i el Conseller d\'Interior (el Govern NO és autoritat de Protecció Civil!). El CECAT no té personalitat jurídica pròpia. Comissions: de Catalunya (homologa plans), Municipal (obligatòria en municipis > 50.000 hab., NO homologa) i Comarcal (facultativa).',
            'L\'estructura d\'un pla consta de: Comitè d\'Emergència (Director + Consell Assessor + Gabinet d\'Informació), 4 Grups d\'actuació (Intervenció, Ordre, Sanitari, Logístic) i 3 infraestructures (CRA, CCO, CCA). Revisió cada 4 anys. Simulacres escolars ≥ 1 cop/any.'
          ]
        },
        {
          type: 'table',
          title: 'Les 3 Classes de Plans (art. 15 Llei 4/1997): Aprovar vs Homologar',
          subtitle: 'Els 6 plans especials són declarats d\'interès de Catalunya per llei',
          headers: ['Classe de Pla', 'Qui aprova', 'Qui homologa'],
          rows: [
            ['Territorial de Catalunya (PROCICAT) i Especials (6)', 'Govern (amb informe previ Comissió PC Catalunya)', 'No cal homologació posterior'],
            ['Territorial Bàsic Municipal', 'Ple de l\'Ajuntament', 'Comissió de Protecció Civil de Catalunya'],
            ['Autoprotecció (PAU)', 'Òrgan competent', 'Comissió PC Catalunya (amb informe favorable Ajuntament)']
          ],
          footnote: '6 Plans Especials: inundacions, sísmics, químics, mercaderies perilloses, incendis forestals i volcànics. DA 2a: centrals nuclears excloses de l\'emergència, però subjectes al gravamen.'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Llei 4/1997: Infraccions',
      title: '4. Llei 4/1997: Infraccions i Sancions (i Resum de Xifres)',
      subtitle: 'Requises, inspeccions i quanties en pessetes',
      isSummary: false,
      blocks: [
        {
          type: 'table',
          title: 'Infraccions Llei 4/1997 (7 molt greus, 12 greus, 5 lleus)',
          subtitle: 'Matisos de gravetat i multes màximes (en pessetes a la llei original)',
          headers: ['Supòsit', 'Qualificació', 'Autoritat sancionadora i límit molt greu'],
          rows: [
            ['Impedir requisa de béns', 'Molt greu', 'Alcalde (< 20.000 hab.): fins a 2M pta'],
            ['Obstaculitzar requisa de béns', 'Greu', 'Alcalde (20.000–50.000 / >50.000): 10M / 25M pta'],
            ['Impedir O obstaculitzar inspecció', 'Molt greu (tots dos!)', 'Conseller: fins a 25M pta'],
            ['No acudir a mobilització real', 'Greu', 'Govern: fins a 100M pta'],
            ['No acudir a simulacre', 'Lleu', 'Greus: fins al 50% màxim · Lleus: fins al 10% màxim']
          ],
          footnote: 'Fixa\'t en la diferència: obstaculitzar una requisa és Greu, però obstaculitzar una inspecció és Molt greu!'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Resum I (Llei 5/1994)',
      title: '5. Resum Imprescindible (I): Llei 5/1994 de Bombers',
      subtitle: 'Novetats DL 14/2025, escales, autoritat i faltes',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · Llei 5/1994',
          subtitle: 'Punts clau d\'examen',
          headers: ['Ítem', 'Dada exacta'],
          rows: [
            ['70 articles vius', 'Prestació personal NO s\'indemnitza · Requisa SÍ s\'indemnitza'],
            ['Agent de l\'autoritat', 'Cos + entitats locals (NO voluntaris ni bombers d\'empresa)'],
            ['4 Escales (DL 14/2025)', 'Superior (A), Executiva (B), Tècnica (C1), De suport (TECOR, TEOV, EPAF C2, TELOG — sense promoció)'],
            ['Segona activitat', 'Tribunal 3 metges (Departament, interessat, sorteig CatSalut)'],
            ['Municipis > 20.000 hab.', 'Servei mínim obligatori · Jubilació forçosa: 65 anys (DA 7a)'],
            ['Faltes (7 MG / 7 G / 3 L)', 'Alcohol en servei = Greu · Embriaguesa/drogues = Molt greu · No acudir en servei = Molt greu']
          ],
          footnote: 'DT 12a: escala bàsica declarada en extinció des de l\'1-1-2024.'
        }
      ]
    },
    {
      pageNumber: 6,
      shortLabel: 'Pàg. 6 · Resum II (Llei 4/1997)',
      title: '6. Resum Imprescindible (II): Llei 4/1997 de Protecció Civil',
      subtitle: 'Autoritats, plans, òrgans i infraccions',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · Llei 4/1997',
          subtitle: 'Punts clau d\'examen',
          headers: ['Ítem', 'Dada exacta'],
          rows: [
            ['Autoritats PC (només 2)', 'Alcalde i Conseller (el Govern NO és autoritat PC)'],
            ['Previsió vs Prevenció', 'Previsió = saber ON és (Mapa PC) · Prevenció = evitar que passi'],
            ['Evacuació vs Confinament', 'Evacuació s\'ORDENA · Confinament es RECOMANA'],
            ['3 Plans i revisió', 'Territorials, 6 Especials, Autoprotecció · Revisió cada 4 anys · Simulacres escolars ≥ 1/any'],
            ['Comissions', 'Catalunya (homologa), Municipal (> 50.000 hab. obligatòria), Comarcal (facultativa)'],
            ['Infraccions', 'Obstaculitzar requisa = Greu · Obstaculitzar inspecció = Molt greu · Simulacre = Lleu']
          ],
          footnote: '4 grups d\'actuació: Intervenció, Ordre, Sanitari i Logístic. 3 infraestructures: CRA, CCO, CCA.'
        },
        {
          type: 'mnemonic',
          title: 'Truc dels 6 Plans Especials i les 2 Autoritats',
          trick: 'I-S-Q-M-F-V: Inundacions, Sísmics, Químics, Mercaderies perilloses, Forestals, Volcànics. Autoritats PC: només Alcalde i Conseller (no Govern!).',
          example: 'Si et pregunten pel pla especial de neu o allaus, NO és un dels 6 plans especials llistats a la llei!'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't6-q1',
      difficulty: 'Fàcil',
      question: 'Quines categories formen la nova Escala de suport creada pel DL 14/2025 a l\'article 15 de la Llei 5/1994?',
      options: [
        'TECOR, TEOV, EPAF (grup C2) i TELOG, sense possibilitat de promocionar a les altres escales',
        'Caporal, sergent i oficial, amb promoció directa a sotsinspector',
        'Bombers voluntaris i bombers d\'empresa únicament',
        'Inspector i sotsinspector en segona activitat'
      ],
      correctIndex: 0,
      explanation: 'L\'Escala de suport (TECOR, TEOV, EPAF [C2], TELOG) accedeix per concurs oposició lliure i no pot promocionar a les altres escales.'
    },
    {
      id: 't6-q2',
      difficulty: 'Mitjà',
      question: 'Qui té la condició d\'agent de l\'autoritat segons la Llei 5/1994?',
      options: [
        'Els membres del Cos de Bombers de la Generalitat i dels serveis locals en acte de servei (i fora de servei acreditant-se en urgència)',
        'També els bombers voluntaris i els bombers d\'empresa en tot moment',
        'Únicament els inspectors i sotsinspectors',
        'Només quan s\'ha activat un pla territorial'
      ],
      correctIndex: 0,
      explanation: 'Els bombers voluntaris i els bombers d\'empresa NO tenen la condició d\'agent de l\'autoritat.'
    },
    {
      id: 't6-q3',
      difficulty: 'Mitjà',
      question: 'Com es qualifica a la Llei 5/1994 consumir begudes alcohòliques durant el servei respecte d\'embriagar-se o consumir drogues?',
      options: [
        'Consumir alcohol en servei = falta greu; embriagar-se o consumir drogues = falta molt greu',
        'Totes dues són faltes molt greus',
        'Consumir alcohol = falta lleu; embriagar-se = falta greu',
        'No estan tipificades a la Llei 5/1994'
      ],
      correctIndex: 0,
      explanation: 'La Llei 5/1994 distingeix consumir alcohol en servei (Greu) d\'embriagar-se o consumir drogues (Molt greu).'
    },
    {
      id: 't6-q4',
      difficulty: 'Fàcil',
      question: 'Quines són les dues úniques autoritats de Protecció Civil segons la Llei 4/1997?',
      options: [
        'L\'Alcalde i el Conseller competent en protecció civil',
        'El President de la Generalitat i el Govern',
        'El Director General i el Cap de Bombers',
        'L\'Alcalde i el Delegat del Govern de l\'Estat'
      ],
      correctIndex: 0,
      explanation: 'El Govern té competències sancionadores i d\'aprovació de plans, però no és autoritat de Protecció Civil.'
    },
    {
      id: 't6-q5',
      difficulty: 'Mitjà',
      question: 'Quina és la diferència jurídica entre l\'evacuació i el confinament a la Llei 4/1997?',
      options: [
        'L\'evacuació s\'ordena; el confinament es recomana',
        'El confinament s\'ordena i l\'evacuació es recomana',
        'Tots dos s\'ordenen obligatòriament',
        'Tots dos són simples consells no obligatoris'
      ],
      correctIndex: 0,
      explanation: 'A la Llei 4/1997, l\'evacuació s\'ordena i el confinament es recomana.'
    },
    {
      id: 't6-q6',
      difficulty: 'Difícil',
      question: 'Com es qualifiquen segons la Llei 4/1997 les conductes d\'obstaculitzar una requisa de béns vs obstaculitzar una inspecció?',
      options: [
        'Obstaculitzar una requisa = greu; obstaculitzar una inspecció = molt greu',
        'Totes dues són infraccions greus',
        'Obstaculitzar una requisa = molt greu; obstaculitzar una inspecció = greu',
        'Totes dues són infraccions lleus'
      ],
      correctIndex: 0,
      explanation: 'Impedir una requisa és molt greu i obstaculitzar-la és greu; en canvi, en inspecció tant impedir com obstaculitzar són molt greus.'
    },
    {
      id: 't6-q7',
      difficulty: 'Mitjà',
      question: 'A partir de quants habitants és obligatòria la Comissió Municipal de Protecció Civil (Llei 4/1997) i a partir de quants és obligatori el servei mínim de bombers (Llei 5/1994)?',
      options: [
        'Comissió Municipal PC: > 50.000 hab. · Servei de bombers: > 20.000 hab.',
        'Comissió Municipal PC: > 20.000 hab. · Servei de bombers: > 50.000 hab.',
        'Totes dues a partir de 20.000 habitants',
        'Totes dues a partir de 50.000 habitants'
      ],
      correctIndex: 0,
      explanation: 'Servei de bombers municipal > 20.000 hab. (Llei 5/1994); Comissió Municipal de Protecció Civil > 50.000 hab. (Llei 4/1997).'
    },
    {
      id: 't6-q8',
      difficulty: 'Fàcil',
      question: 'Cada quants anys s\'han de revisar els plans de protecció civil i quants metges formen el tribunal de segona activitat?',
      options: [
        'Revisió cada 4 anys; tribunal de 3 metges (Departament, interessat i sorteig CatSalut)',
        'Revisió cada 2 anys; tribunal de 5 metges',
        'Revisió cada 5 anys; tribunal de 3 metges tots designats pel Departament',
        'Revisió cada 4 anys; tribunal d\'1 metge de funció pública'
      ],
      correctIndex: 0,
      explanation: 'Plans revisats cada 4 anys (Llei 4/1997); tribunal de segona activitat de 3 metges (art. 40 Llei 5/1994).'
    },
    {
      id: 't6-q9',
      difficulty: 'Difícil',
      question: 'Quin règim s\'aplica a les centrals nuclears segons la Disposició Addicional 2a de la Llei 4/1997?',
      options: [
        'Queden excloses del règim d\'emergència de la llei, però sí que estan subjectes al gravamen',
        'Queden totalment excloses tant de l\'emergència com del gravamen',
        'Estan incloses dins els 6 plans especials de Catalunya',
        'Depenen exclusivament de l\'alcalde del municipi'
      ],
      correctIndex: 0,
      explanation: 'DA 2a Llei 4/1997: les centrals nuclears estan excloses de l\'emergència (competència estatal) però sí subjectes al gravamen.'
    },
    {
      id: 't6-q10',
      difficulty: 'Mitjà',
      question: 'Qui homologa els plans territorials bàsics municipals i els plans d\'autoprotecció?',
      options: [
        'La Comissió de Protecció Civil de Catalunya (en els PAU, amb informe favorable de l\'Ajuntament)',
        'El Ple de l\'Ajuntament directament',
        'El CECAT mitjançant resolució',
        'La Comissió Comarcal de Protecció Civil'
      ],
      correctIndex: 0,
      explanation: 'La Comissió de Protecció Civil de Catalunya és l\'òrgan encarregat d\'homologar els plans municipals i d\'autoprotecció.'
    }
  ]
};
