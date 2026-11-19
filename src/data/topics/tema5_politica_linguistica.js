export const tema5PoliticaLinguistica = {
  id: 'tema-5',
  number: 5,
  code: 'Llei 1/1998 (arts. 1–17)',
  title: 'Política Lingüística (Llei 1/1998)',
  category: 'Legislació i Normativa — Bloc General',
  estimatedMinutes: 40,
  importance: {
    title: 'Anàlisi d\'Importància · Tema 5',
    frequency: 'Alta (Tema curt i molt rendible)',
    summary:
      'Només entren els articles 1 a 17 (Capítol Preliminar 1–7 amb l\'art. 7 derogat, i Capítol I 8–17). És un tema curtíssim on cada paraula importa: "llengua pròpia" vs "llengua oficial", "han d\'emprar" vs "normalment", i la regla d\'acord/tria en documents notarials.',
    hotTopics: [
      'Llengua pròpia (art. 2, obliga institucions) vs Llengua oficial (art. 3, dóna drets al ciutadà)',
      'Art. 4.1 (5 drets): el dret a ésser atès és l\'únic limitat per llei · Art. 6: IEC',
      'Art. 9.1 (cap endins obligatori / cap enfora "normalment") i art. 10 (testimoniança traduïda)',
      'Art. 11 (2 llengües en general vs només català en selecció) i art. 14 (documents públics)'
    ],
    traps: [
      'L\'article 7 (sobre l\'aranès) està DEROGAT per la Llei 35/2010!',
      'En processos de selecció (inclòs personal laboral, art. 11.2) s\'acredita el coneixement del CATALÀ (no de les dues llengües).',
      'Art. 14 documents públics: sense ACORD entre atorgants → en totes dues; sense TRIA expressa → en català!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. Preliminar (1–7)',
      title: '1. Capítol Preliminar (arts. 1–7): Llengua Pròpia vs Oficial',
      subtitle: 'La clau per entendre què obliga l\'Administració i què protegeix el ciutadà',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '1.1 Objecte, llengua pròpia (art. 2) i oficial (art. 3)',
          paragraphs: [
            'La Llei 1/1998 (de 7 de gener) substitueix la Llei 7/1983 i desplega l\'article 3 de l\'Estatut. L\'article 7 sobre l\'aranès està derogat per la Llei 35/2010.',
            'La distinció fonamental és entre llengua pròpia (art. 2) i llengua oficial (art. 3): el català com a llengua pròpia OBLIGA les institucions de Catalunya (és la llengua DE les institucions i la llengua PREFERENTMENT EMPRADA per l\'Administració de l\'Estat a Catalunya, art. 2.2). Com a llengua oficial (art. 3, juntament amb el castellà), DÓNA DRETS als ciutadans i plena validesa i eficàcia jurídica als actes.',
            'L\'article 4.1 reconeix 5 drets lingüístics, però el dret a ésser atès en la llengua oficial escollida és l\'únic condicionat ("en els termes que la llei estableix"). L\'article 6 designa l\'Institut d\'Estudis Catalans (IEC) com a autoritat lingüística.'
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Llengua Pròpia vs Llengua Oficial',
          metaphor: 'Imagina una casa on es parla català de porta endins, però la porta està oberta a tothom.',
          explanation:
            'LLENGUA PRÒPIA (art. 2) = regla per als treballadors de la casa (les institucions catalanes l\'han d\'usar per defecte). LLENGUA OFICIAL (art. 3) = dret del convidat (el ciutadà pot triar català o castellà i tot el que signi val exactament igual).',
          takeaway: 'Pròpia = obliga la institució. Oficial = dóna drets i validesa jurídica al ciutadà.'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. I (arts. 8–17)',
      title: '2. Capítol I (arts. 8–17): Administració, Justícia i Documents',
      subtitle: 'DOGC, selecció de personal, processos judicials i documents públics',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '2.1 Normes, actuacions administratives i selecció',
          paragraphs: [
            'Publicació de normes (art. 8): les lleis del Parlament es publiquen al DOGC en edicions simultànies en català i castellà (la versió castellana la fa el Parlament). Les disposicions generals i resolucions es publiquen en català i, si escau, en castellà.',
            'Actuacions administratives (art. 9.1): cap endins i entre administracions catalanes HAN d\'emprar el català; en canvi, en la relació amb els ciutadans l\'empren NORMALMENT (i en castellà si la persona interessada ho demana). Dins els procediments (art. 10), qualsevol ciutadà pot presentar escrits o manifestar-se en castellà SENSE necessitat de sol·licitar-ho prèviament; ara bé, per rebre les notificacions en castellà SÍ que ho ha de demanar. Els testimonis tenen dret a expressar-se en la seva llengua i la traducció es fa sense perjudici, despesa, retard ni suspensió.',
            'Capacitació del personal (art. 11): l\'Administració ha de garantir que el personal conegui les 2 llengües oficials, però en els processos de selecció (inclòs el personal laboral, art. 11.2) s\'ha d\'acreditar el coneixement del català.'
          ]
        },
        {
          type: 'table',
          title: 'Justícia (art. 13), Documents Públics (art. 14), Privats (15) i Registres (17)',
          subtitle: 'Les regles d\'or del tram final (arts. 13–17)',
          headers: ['Article', 'Regla exacta'],
          rows: [
            ['Art. 13 (Justícia)', 'Inclou tribunals eclesiàstics i arbitrals (13.1–13.3); actes plenament vàlids sense traducció prèvia'],
            ['Art. 14 (Docs públics)', 'Sense ACORD entre atorgants → en totes dues llengües · Sense TRIA expressa → en català'],
            ['Art. 14 (Fedataris)', 'Notaris/fedataris tradueixen sota la seva responsabilitat SENSE necessitat de protocol·litzar la traducció'],
            ['Art. 15 (Docs privats)', 'Vàlids en qualsevol idioma; xecs, pagarés i efectes de comerç redactats almenys en català'],
            ['Art. 17 (Registres)', 'L\'assentament segueix la llengua del document (llevat registres de caràcter només administratiu)']
          ],
          footnote: 'No confonguis "sense acord" (totes dues) amb "sense tria expressa" (català) a l\'article 14!'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Resum I (Arts. 1–11)',
      title: '3. Resum Imprescindible (I): Principis i Administració',
      subtitle: 'Arts. 1–11 en format taula ràpida',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · Llei 1/1998 (arts. 1–11)',
          subtitle: 'Els detalls que decideixen la pregunta',
          headers: ['Article', 'Idea clau d\'examen'],
          rows: [
            ['Art. 2 i 3', 'Pròpia (art. 2) = obliga institucions · Oficial (art. 3) = dóna drets al ciutadà'],
            ['Art. 2.2', 'Llengua DE les institucions catalanes / PREFERENTMENT EMPRADA per l\'Estat a Catalunya'],
            ['Art. 4.1 i 6', 'Dret a ésser atès = únic limitat per llei · Autoritat lingüística = IEC'],
            ['Art. 7', 'DEROGAT per la Llei 35/2010'],
            ['Art. 8', 'Lleis DOGC edicions simultànies (versió castellana = Parlament)'],
            ['Art. 9.1 i 10', 'Cap endins: HAN d\'emprar | Ciutadà: NORMALMENT · Notificació en castellà cal demanar-ho'],
            ['Art. 11', 'Exigència general = 2 llengües | Procés selecció (inclòs laboral) = acreditar només català']
          ],
          footnote: '9 disposicions addicionals (la 9a afegida el 2017).'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Resum II (Arts. 13–17)',
      title: '4. Resum Imprescindible (II): Justícia, Notaris i Regles Mnemotècniques',
      subtitle: 'Tancament del Tema 5',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · Arts. 13–17',
          subtitle: 'Justícia, documents i registres',
          headers: ['Article', 'Clau ràpida'],
          rows: [
            ['Art. 13', 'Justícia inclou tribunals eclesiàstics i arbitrals (13.1–3)'],
            ['Art. 14', 'Sense acord → totes dues llengües · Sense tria → en català · Tradueix fedatari sense protocol·litzar'],
            ['Art. 15', 'Documents privats: vàlids en qualsevol idioma · Xecs/pagarés: almenys en català'],
            ['Art. 17', 'Assentaments registrals en la llengua del document (llevat registres només administratius)']
          ],
          footnote: 'Substitueix la Llei 7/1983 i desplega l\'article 3 EAC.'
        },
        {
          type: 'mnemonic',
          title: 'Truc Art. 14: Acord = 2 / Tria = Català',
          trick: 'Si dues persones es barallen i no hi ha ACORD → reben còpia en les 2 llengües. Si ningú diu res (sense TRIA expressa) → surt en CATALÀ.',
          example: 'Un notari pot lliurar traducció sota la seva responsabilitat sense haver-la de protocol·litzar.'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't5-q1',
      difficulty: 'Fàcil',
      question: 'Quina és la diferència funcional entre els articles 2 (llengua pròpia) i 3 (llengua oficial) de la Llei 1/1998?',
      options: [
        'La llengua pròpia obliga les institucions de Catalunya; la llengua oficial atorga drets als ciutadans i plena validesa als actes',
        'La llengua oficial obliga només les institucions i la llengua pròpia només s\'aplica a l\'ensenyament',
        'Totes dues signifiquen exactament el mateix i no tenen efectes jurídics diferenciats',
        'La llengua pròpia exclou la validesa jurídica dels actes en castellà'
      ],
      correctIndex: 0,
      explanation: 'Art. 2 = llengua pròpia (obliga institucions). Art. 3 = llengües oficials (drets i validesa jurídica).'
    },
    {
      id: 't5-q2',
      difficulty: 'Mitjà',
      question: 'Quin dels 5 drets lingüístics de l\'article 4.1 de la Llei 1/1998 està condicionat "en els termes que la llei estableix"?',
      options: [
        'El dret a ésser atès en la llengua oficial que s\'esculli',
        'El dret a conèixer les dues llengües oficials',
        'El dret a no ésser discriminat per raó de llengua',
        'El dret a rebre l\'ensenyament en català'
      ],
      correctIndex: 0,
      explanation: 'L\'art. 4.1 limita només el dret a ésser atès "en els termes que la llei estableix".'
    },
    {
      id: 't5-q3',
      difficulty: 'Fàcil',
      question: 'Quin estat té actualment l\'article 7 de la Llei 1/1998?',
      options: [
        'Està derogat (per la Llei 35/2010)',
        'Regula l\'ús del català a la Justícia',
        'Designa l\'IEC com a autoritat lingüística',
        'Estableix els xecs i pagarés en català'
      ],
      correctIndex: 0,
      explanation: 'L\'article 7 (sobre l\'aranès) va ser derogat per la Llei 35/2010.'
    },
    {
      id: 't5-q4',
      difficulty: 'Mitjà',
      question: 'Quina és l\'autoritat lingüística reconeguda per l\'article 6 de la Llei 1/1998?',
      options: [
        'L\'Institut d\'Estudis Catalans (IEC)',
        'La Real Academia Española',
        'El Consell de Garanties Estatutàries',
        'El Parlament de Catalunya'
      ],
      correctIndex: 0,
      explanation: 'Art. 6: l\'IEC és la institució consultiva oficial per a la llengua catalana.'
    },
    {
      id: 't5-q5',
      difficulty: 'Difícil',
      question: 'Segons l\'article 14 de la Llei 1/1998 sobre documents públics, què passa si no hi ha acord entre els atorgants, i què passa si no hi ha tria expressa?',
      options: [
        'Sense acord → en totes dues llengües; sense tria expressa → en català',
        'Sense acord → en català; sense tria expressa → en castellà',
        'Sense acord → el document és nul; sense tria → en totes dues',
        'En tots dos casos es redacta exclusivament en castellà'
      ],
      correctIndex: 0,
      explanation: 'Art. 14: sense acord → totes dues; sense tria expressa → en català.'
    },
    {
      id: 't5-q6',
      difficulty: 'Mitjà',
      question: 'En un procediment administratiu (art. 10), quan cal sol·licitar expressament l\'ús del castellà?',
      options: [
        'Per rebre les notificacions en castellà (no cal demanar-ho per presentar escrits ni manifestar-se)',
        'Per presentar qualsevol escrit al registre',
        'Tant per presentar escrits com per parlar a les compareixences',
        'No es pot rebre cap notificació en castellà en cap cas'
      ],
      correctIndex: 0,
      explanation: 'Presentar escrits o manifestar-se en castellà no requereix sol·licitud prèvia; rebre-hi les notificacions sí.'
    },
    {
      id: 't5-q7',
      difficulty: 'Fàcil',
      question: 'Què s\'exigeix acreditar en els processos de selecció de personal (inclòs personal laboral) segons l\'art. 11.2 de la Llei 1/1998?',
      options: [
        'El coneixement del català',
        'El coneixement de les dues llengües oficials i de l\'aranès',
        'Només el coneixement del castellà',
        'Cap requisit lingüístic previ'
      ],
      correctIndex: 0,
      explanation: 'En general s\'han de conèixer totes dues llengües, però en el procés de selecció s\'acredita el català.'
    },
    {
      id: 't5-q8',
      difficulty: 'Difícil',
      question: 'Quins òrgans queden inclosos dins de l\'àmbit de l\'article 13 (13.1–13.3) sobre l\'Administració de justícia?',
      options: [
        'També els tribunals eclesiàstics i els tribunals arbitrals',
        'Només els jutjats de primera instància i el TSJC',
        'Únicament la jurisdicció penal i contenciosa',
        'Només els registres mercantils'
      ],
      correctIndex: 0,
      explanation: 'L\'art. 13.3 hi inclou expressament els tribunals eclesiàstics i els arbitrals.'
    },
    {
      id: 't5-q9',
      difficulty: 'Mitjà',
      question: 'Qui fa la versió castellana de les lleis que es publiquen en edicions simultànies al DOGC (art. 8)?',
      options: [
        'El Parlament de Catalunya',
        'El Govern de l\'Estat',
        'L\'Institut d\'Estudis Catalans',
        'El Consell Executiu'
      ],
      correctIndex: 0,
      explanation: 'Art. 8.1: les lleis del Parlament es publiquen en edicions simultànies i la versió castellana la fa el mateix Parlament.'
    },
    {
      id: 't5-q10',
      difficulty: 'Difícil',
      question: 'Com s\'aplica la Llei 1/1998 als documents privats (art. 15) i als assentaments registrals (art. 17)?',
      options: [
        'Els privats són vàlids en qualsevol idioma (xecs/pagarés almenys català); l\'assentament segueix la llengua del document (llevat registres només administratius)',
        'Els privats només són vàlids en català o castellà; els registres són sempre en castellà',
        'Els xecs només poden anar en castellà',
        'Els assentaments registrals es tradueixen obligatòriament a totes dues llengües'
      ],
      correctIndex: 0,
      explanation: 'Art. 15: privats en qualsevol idioma, però xecs/pagarés almenys català. Art. 17: assentament en la llengua del document.'
    }
  ]
};
