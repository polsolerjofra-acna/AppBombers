export const tema1Constitucio = {
  id: 'tema-1',
  number: 1,
  code: 'CE 1978 · EAC 2006 · Llei 13/1989',
  title: 'Constitució Espanyola, Estatut d\'Autonomia i Administració de la Generalitat',
  category: 'Legislació i Normativa — Bloc General',
  estimatedMinutes: 60,
  importance: {
    title: 'Anàlisi d\'Importància · Tema 1',
    frequency: 'Molt Alta (Fix a examen)',
    summary:
      'Tema fonamental de bloc general. Les preguntes es concentren en les diferències exactes entre procediments de reforma (167 vs 168 CE i 222 vs 223 EAC), els terminis dels estats d\'alarma/excepció/setge, les competències exclusives de Bombers (art. 132 EAC) i l\'estructura d\'òrgans superiors vs alts càrrecs de la Llei 13/1989.',
    hotTopics: [
      'Les 3 reformes CE (1992, 2011, 2024 art. 49) i els 7 principis de l\'art. 9.3 CE',
      'Garanties (empara art. 53.2) i suspensió de drets (art. 55.1 i 55.2)',
      'Competència exclusiva de protecció civil i bombers (art. 132 EAC) vs governs locals (84.2.f)',
      'Òrgans superiors (5) vs Alts càrrecs (2) i escala activa de la Generalitat (Llei 13/1989)'
    ],
    traps: [
      'Derogat (legislador, cap al futur) NO és el mateix que Anul·lat (TC, efectes retroactius).',
      'Art. 9.3 CE protegeix la irretroactivitat de normes restrictives de drets INDIVIDUALS (mai "col·lectius").',
      'El Conseller és òrgan superior, NO és "alt càrrec" (alts càrrecs = Secretaris Generals i Directors Generals).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · CE: Base i Drets',
      title: '1. Constitució Espanyola (1978): Estructura i Títol I',
      subtitle: 'De la norma suprema als drets fonamentals i els seus límits',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '1.1 Fitxa tècnica, reformes i Títol Preliminar',
          paragraphs: [
            'La Constitució Espanyola va ser aprovada per les Corts Generals, ratificada pel poble en referèndum i publicada al BOE el 29 de desembre de 1978, entrant en vigor el mateix dia (Disposició Final). Consta de Preàmbul (sense força normativa), 169 articles distribuïts en un Títol Preliminar (arts. 1–9) i 10 Títols numerats, més 4 disposicions addicionals, 9 transitòries, 1 derogatòria i 1 final.',
            'Només ha tingut 3 reformes: 1992 (art. 13.2 sufragi passiu estrangers), 2011 (art. 135 estabilitat pressupostària) i 2024 (art. 49, vigent des del 15/02/2024, substituint "disminuïts" per "persones amb discapacitat").',
            'L\'article 1 defineix Espanya com un Estat social i democràtic de Dret, amb sobirania nacional al poble i Monarquia parlamentària. Els 4 valors superiors són: llibertat, justícia, igualtat i pluralisme polític. L\'article 9.3 garanteix 7 principis: legalitat, jerarquia normativa, publicitat de les normes, irretroactivitat de les disposicions sancionadores no favorables o restrictives de drets individuals, seguretat jurídica, responsabilitat i interdicció de l\'arbitrarietat.'
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Derogat vs Anul·lat i la Piràmide',
          metaphor: 'Imagina les normes com un edifici de pisos on el sostre és la Constitució: ningú pot construir una paret que xocarà amb el sostre.',
          explanation:
            'Quan una llei ja no val perquè els polítics n\'han fet una de nova, diem que està DEROGADA (com canviar les regles d\'un joc a partir d\'avui). Quan un jutge (el Tribunal Constitucional) descobreix que una llei anava contra la Constitució, la declara ANUL·LADA: és com dir que aquella regla estava mal feta des del primer dia i no hauria d\'haver existit mai.',
          takeaway: 'Derogar = el legislador canvia d\'idea (cap al futur). Anul·lar = un tribunal la tomba (des de l\'origen).'
        },
        {
          type: 'diagram',
          title: 'Piràmide normativa, Reforma CE i Derogat vs Anul·lat',
          diagramType: 'legal_pyramid',
          caption: 'Fixa\'t que Llei Orgànica, Llei Ordinària, Decret Legislatiu i Decret Llei comparteixen rang de llei, per sota de la CE i per sobre del Reglament.'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Garanties i Estats',
      title: '2. Drets Fonamentals, Garanties i Estats d\'Alarma, Excepció i Setge',
      subtitle: 'Quan es poden protegir amb empara i quan es poden suspendre',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '2.1 Classificació del Títol I (arts. 10–55) i Protecció Civil',
          paragraphs: [
            'L\'article 10 (fora de capítols) consagra la dignitat de la persona. El Capítol II es divideix en Secció 1a (arts. 15–29, drets fonamentals i llibertats públiques: ex. art. 17.2 detenció preventiva màxim 72 hores; art. 27 educació) i Secció 2a (arts. 30–38). Dins la Secció 2a hi ha l\'article 30.4, base constitucional de la Protecció Civil: es poden establir deures als ciutadans en casos de greu risc, catàstrofe o calamitat pública.',
            'El Capítol III (arts. 39–52) recull els principis rectors (art. 40.2 seguretat i higiene en el treball, art. 45 medi ambient, art. 49 persones amb discapacitat). El Capítol IV fixa les garanties: el recurs d\'empara davant el TC (art. 53.2) NOMÉS protegeix l\'article 14 (igualtat), la Secció 1a (arts. 15–29) i l\'objecció de consciència (art. 30.2).'
          ]
        },
        {
          type: 'table',
          title: 'Estats excepcionals (art. 116 CE) i Suspensió de drets (art. 55 CE)',
          subtitle: 'Comparativa directa de qui declara, durada i si suspenen drets',
          headers: ['Estat', 'Qui declara / autoritza', 'Durada inicial i pròrroga', 'Suspenen drets (art. 55.1)?'],
          rows: [
            ['Alarma', 'Govern (dóna compte al Congrés)', 'Màx. 15 dies · Pròrroga: Congrés', 'NO suspèn drets fonamentals'],
            ['Excepció', 'Govern amb autorització prèvia Congrés', 'Màx. 30 dies · Pròrroga: mateix termini (30d)', 'SÍ (llevat art. 17.3 assistència lletrada/drets detingut)'],
            ['Setge', 'Majoria absoluta Congrés (a proposta exclusiva Govern)', 'La que determini el Congrés', 'SÍ (tots els llistats a l\'art. 55.1, inclòs 17.3)']
          ],
          footnote: 'Suspensió individual (art. 55.2): només arts. 17.2, 18.2 i 18.3 per bandes armades o terrorisme. Durant qualsevol dels 3 estats NO es pot dissoldre el Congrés.'
        },
        {
          type: 'mnemonic',
          title: 'Regla 15 – 30 – Congrés',
          trick: 'Alarma = Govern sol, 15 dies. Excepció = Govern + permís Congrés, 30 dies. Setge = Congrés per majoria absoluta.',
          example: 'Si et pregunten quin dret NO se suspèn en estat d\'excepció: l\'art. 17.3 (ser informat dels drets i assistència d\'advocat).'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Òrgans Estat i Reforma',
      title: '3. Corona, Corts, Govern, TC i Reforma Constitucional',
      subtitle: 'Xifres clau dels òrgans constitucionals i les dues vies de reforma',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '3.1 Òrgans constitucionals i Administració Pública',
          paragraphs: [
            'La Corona (Títol II): Regència d\'1, 3 o 5 persones. Les Corts Generals (Títol III): Congrés (300–400 diputats, actualment 350) i Senat (4 per província peninsular). La Diputació Permanent té un mínim de 21 membres. La iniciativa legislativa popular requereix un mínim de 500.000 signatures. El Senat té 2 mesos (20 dies naturals si és urgent) per vetar (majoria absoluta) o esmenar; el Congrés aixeca el veto per majoria absoluta o per simple passats 2 mesos.',
            'Govern i Administració (Títol IV): Si passen 2 mesos des de la primera votació d\'investidura sense candidat elegit, es dissolen les Corts (art. 99). L\'article 103 fixa els 5 principis d\'actuació de l\'Administració: eficàcia, jerarquia, descentralització, desconcentració i coordinació. El Consell d\'Estat (art. 107) és l\'òrgan consultiu suprem del Govern.',
            'CGPJ (art. 122.3): President del TS + 20 membres (12 jutges/magistrats + 4 Congrés + 4 Senat per majoria 3/5) amb mandat de 5 anys. Tribunal Constitucional (arts. 159–162): 12 membres (4 Congrés, 4 Senat per 3/5, 2 Govern, 2 CGPJ) per 9 anys (renovats per terços cada 3 anys; president 3 anys). Poden interposar recurs d\'inconstitucionalitat: President del Govern, Defensor del Poble, 50 diputats, 50 senadors, governs i assemblees de CCAA.'
          ]
        },
        {
          type: 'table',
          title: 'Reforma Constitucional: Ordinària (167) vs Agreujada (168)',
          subtitle: 'Pregunta clàssica de diferenciació procedimental',
          headers: ['Concepte', 'Procediment Ordinari (art. 167)', 'Procediment Agreujat (art. 168)'],
          rows: [
            ['Matèries protegides', 'La resta de la Constitució', 'Revisió total, Títol Preliminar, Cap. II Sec. 1a (15-29) o Títol II (Corona)'],
            ['Majoria inicial', '3/5 de cada Cambra (si no, Comissió paritària; o 2/3 Congrés + absoluta Senat)', '2/3 de cada Cambra'],
            ['Dissolució Corts', 'NO', 'SÍ, immediata + noves eleccions'],
            ['Segona votació', 'No n\'hi ha (ja aprovada)', '2/3 de les noves Cambres'],
            ['Referèndum', 'Potestatiu (si ho demana 1/10 part d\'una Cambra en 15 dies)', 'OBLIGATORI sempre']
          ],
          footnote: 'No es pot iniciar una reforma constitucional en temps de guerra ni vigents els estats d\'alarma, excepció o setge (art. 169).'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Estatut d\'Autonomia',
      title: '4. Estatut d\'Autonomia de Catalunya (LO 6/2006) i STC 31/2010',
      subtitle: 'Símbols, institucions, competències de Bombers i reforma estatutària',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '4.1 Estructura, símbols, drets i institucions',
          paragraphs: [
            'L\'EAC (LO 6/2006) té 223 articles en 7 Títols més Preliminar, 15 addicionals, 2 transitòries, 1 derogatòria i 4 finals. El Preàmbul esmenta "nació" (sense eficàcia jurídica interpretativa segons la STC 31/2010), mentre l\'art. 1 defineix Catalunya com a "nacionalitat" i norma institucional bàsica. L\'art. 6.1 declara el català llengua pròpia (l\'incís "i preferent" va ser ANUL·LAT per la STC 31/2010) i l\'aranès oficial a tot Catalunya.',
            'Els 3 símbols nacionals de l\'art. 8 són: la Bandera, la Diada (11 de setembre) i l\'himne (Els Segadors). L\'escut NO hi figura! L\'Aran (art. 11) té entitat territorial singular i règim jurídic especial amb el Conselh Generau d\'Aran.',
            'Parlament (100–150 diputats, mandat 4 anys; llei electoral 2/3; Decret llei art. 64 requereix validació en 30 dies improrrogables). President de la Generalitat (2 mesos sense investidura = dissolució; el suplent no pot plantejar qüestió de confiança, nomenar/cessar consellers ni dissoldre el Parlament). Consell de Garanties Estatutàries (arts. 76–77): 2/3 elegits pel Parlament (3/5) i 1/3 pel Govern; dictàmens NO vinculants (art. 76.4 anul·lat). Síndic de Greuges i Sindicatura de Comptes: elegits per 3/5 del Parlament. El Títol III Cap. II (Consell de Justícia, arts. 97–100) NO és vigent (anul·lat STC 31/2010).'
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Tipus de Competències (Exclusiva, Compartida, Executiva)',
          metaphor: 'Pensa en una recepta de cuina entre l\'Estat i la Generalitat.',
          explanation:
            'EXCLUSIVA (art. 110): La Generalitat inventa la recepta, la cuina i la serveix tota sola (però vigila els límits de la Constitució!). COMPARTIDA (art. 111): L\'Estat posa els ingredients bàsics i la Generalitat fa el sofregit i els detalls. EXECUTIVA (art. 112): L\'Estat escriu tota la recepta i la Generalitat només encén els fogons i la cuina tal com diu la llei estatal.',
          takeaway: 'Art. 132.1 EAC: Protecció civil i serveis de prevenció i extinció d\'incendis són competència EXCLUSIVA de la Generalitat (amb els límits dels governs locals i la seguretat pública estatal).'
        },
        {
          type: 'table',
          title: 'Competències de Bombers (art. 132) i Reforma de l\'Estatut (222 vs 223)',
          subtitle: 'Dades essencials de l\'EAC',
          headers: ['Matèria / Procediment', 'Règim jurídic a l\'EAC'],
          rows: [
            ['Art. 132.1 Protecció civil i incendis', 'Competència EXCLUSIVA (respectant art. 84.2.f governs locals i seguretat pública Estat)'],
            ['Art. 132.3 Salvament marítim', 'Competència EXECUTIVA'],
            ['Art. 132.4 Seguretat nuclear', 'Només PARTICIPACIÓ en l\'execució'],
            ['Art. 84.2.f Governs locals', 'Competència PRÒPIA municipal: protecció civil i prevenció d\'incendis'],
            ['Reforma art. 222 (Títols I i II)', '4 passes: Parlament (2/3) → Consulta Corts → Ratificació LO → Referèndum'],
            ['Reforma art. 223 (Resta títols)', '3 passes: Parlament (2/3) → Aprovació Corts per LO → Referèndum']
          ],
          footnote: 'En l\'art. 222, ajuntaments (20% plens / 20% població) o 300.000 signatures només poden demanar la reforma, no tenen iniciativa directa.'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Llei 13/1989',
      title: '5. Administració de la Generalitat (Llei 13/1989)',
      subtitle: 'Òrgans superiors, alts càrrecs i jerarquia administrativa',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '5.1 Què segueix vigent i com s\'estructura un Departament',
          paragraphs: [
            'De la Llei 13/1989 només resta vigent la part d\'organització (el procediment administratiu va passar a la Llei 26/2010; l\'art. 54.2 està derogat, però l\'art. 54.1 segueix vigent amb els principis de descentralització, desconcentració i coordinació).',
            'L\'article 5 distingeix taxativament entre 5 Òrgans Superiors (President, Govern com a òrgan col·legiat, Conseller primer, Vicepresident i Consellers) i 2 Alts Càrrecs (Secretaris Generals i Directors Generals). Alerta: el Conseller NO és alt càrrec, és òrgan superior.',
            'Cada Departament està dirigit per un Conseller i ha de tenir obligatòriament 1 Secretaria General i Direccions Generals (la Secretaria General Adjunta només pot existir al Departament de Presidència). La creació o supressió de secretaries generals i direccions generals es fa per Decret del Govern. Les circulars i instruccions (art. 16) en cap cas tenen caràcter de potestat reglamentària.'
          ]
        },
        {
          type: 'table',
          title: 'Òrgans Actius vs Consultius i Atribucions Clau',
          subtitle: 'Estructura jeràrquica sota el Director General (art. 24)',
          headers: ['Eix / Òrgan', 'Composició o Funció clau'],
          rows: [
            ['Òrgans Actius (art. 24)', 'Subdireccions Generals → Serveis → Seccions → Negociats (dirigits per funcionaris de carrera)'],
            ['Òrgans Consultius (art. 21)', 'Informe, consulta, assessorament i proposta (Consells assessors: informes no vinculants per defecte)'],
            ['Conseller (art. 12)', '12 atribucions: RESOL conflictes dins del seu departament; SUSCITA conflictes amb altres departaments'],
            ['Secretari General (art. 13)', '12 facultats: 2a autoritat del departament i cap superior de tot el personal'],
            ['Director General (art. 14)', '5 facultats: gestió àmbit assignat i informe anual al Conseller sobre funcionament del servei']
          ],
          footnote: 'Les comissions interdepartamentals (art. 49) les crea el Govern i tenen 5 continguts tancats. L\'art. 50 preveu òrgans temporals a termini fix.'
        }
      ]
    },
    {
      pageNumber: 6,
      shortLabel: 'Pàg. 6 · Resum I (CE)',
      title: '6. Resum Imprescindible (I): Constitució Espanyola',
      subtitle: 'Xifres, terminis i regles d\'or per memoritzar',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · Constitució Espanyola (1978)',
          subtitle: 'Els números que pregunten sempre a examen',
          headers: ['Ítem', 'Dada exacta CE'],
          rows: [
            ['Publicació i vigor', '29 desembre 1978 (mateix dia, Disp. Final)'],
            ['Estructura', '169 articles (Preliminar + 10 Títols), 4 add., 9 trans., 1 der., 1 final'],
            ['Les 3 reformes', '1992 (art. 13.2), 2011 (art. 135), 2024 (art. 49 "persones amb discapacitat")'],
            ['Valors superiors (art. 1.1)', 'Llibertat, justícia, igualtat i pluralisme polític'],
            ['Irretroactivitat (art. 9.3)', 'Sancionadores no favorables o restrictives de drets INDIVIDUALS'],
            ['Detenció preventiva (17.2)', 'Màxim 72 hores'],
            ['Recurs d\'empara (53.2)', 'Art. 14 + Secció 1a (15–29) + Objecció de consciència (30.2)'],
            ['CGPJ / TC', 'CGPJ: Pres. TS + 20 (5 anys) | TC: 12 membres (9 anys, renova 1/3 cada 3)']
          ],
          footnote: 'Art. 30.4 CE: deures ciutadans en greu risc, catàstrofe o calamitat pública (base Protecció Civil).'
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · Veto Senat i Investidura',
          trick: 'Veto Senat = 2 mesos (20 dies naturals urgent) per majoria absoluta. Investidura = 2 mesos des de la 1a votació → dissolució.',
          example: 'Recurs inconstitucionalitat: 50 diputats o 50 senadors (mai 1/10, que és per demanar referèndum de l\'art. 167!).'
        }
      ]
    },
    {
      pageNumber: 7,
      shortLabel: 'Pàg. 7 · Resum II (EAC i L.13/89)',
      title: '7. Resum Imprescindible (II): Estatut i Llei 13/1989',
      subtitle: 'Comparativa final i trampes d\'examen',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · EAC (LO 6/2006) i Llei 13/1989',
          subtitle: 'Tot el bloc autonòmic en una sola pantalla',
          headers: ['Norma / Article', 'Clau d\'examen'],
          rows: [
            ['EAC Art. 6.1 i 8', '"i preferent" ANUL·LAT; 3 símbols (Bandera, Diada, Segadors — NO escut)'],
            ['EAC Art. 64 Decret llei', 'Validació Parlament en 30 dies improrrogables'],
            ['EAC Art. 132.1', 'Protecció civil i incendis = COMPETÈNCIA EXCLUSIVA (llevat límits locals/Estat)'],
            ['EAC Art. 84.2.f', 'Governs locals: protecció civil i prevenció d\'incendis (competència pròpia)'],
            ['EAC Art. 222 vs 223', '222 (Tít. I-II): 4 passes amb consulta Corts; 223 (Resta): 3 passes sense consulta'],
            ['Llei 13/1989 Art. 5', '5 Òrgans superiors (inclou Conseller i Govern) vs 2 Alts càrrecs (SG i DG)'],
            ['Llei 13/1989 Art. 24', 'Escala activa: Subdirecció General → Servei → Secció → Negociat']
          ],
          footnote: 'Circulars (art. 16 Llei 13/1989): mai són potestat reglamentària.'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Conseller vs Secretari General vs Director General',
          metaphor: 'Imagina un parc de bombers gegant que és tota la Conselleria.',
          explanation:
            'El CONSELLER és el cap polític que decideix les regles i resol baralles dins casa (i en discuteix amb altres Consellers). El SECRETARI GENERAL és el "cap de personal" i segona autoritat que fa que tot rutlli per dins. El DIRECTOR GENERAL dirigeix un àmbit concret (com Bombers/DGPEIS) i cada any passa informe al Conseller.',
          takeaway: 'Només SG i DG són Alts Càrrecs. El Conseller és Òrgan Superior.'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't1-q1',
      difficulty: 'Fàcil',
      question: 'Quines són les tres úniques reformes que ha tingut la Constitució Espanyola de 1978?',
      options: [
        '1992 (art. 13.2), 2011 (art. 135) i 2024 (art. 49)',
        '1986 (art. 93), 2011 (art. 135) i 2024 (art. 49)',
        '1992 (art. 13.2), 2006 (art. 148) i 2024 (art. 49)',
        '1992 (art. 13.2), 2011 (art. 135) i 2020 (art. 116)'
      ],
      correctIndex: 0,
      explanation: 'Les 3 reformes de la CE són: 1992 (sufragi estrangers art. 13.2), 2011 (estabilitat pressupostària art. 135) i 2024 (art. 49, persones amb discapacitat).'
    },
    {
      id: 't1-q2',
      difficulty: 'Mitjà',
      question: 'Segons l\'article 9.3 de la Constitució, la irretroactivitat s\'aplica a les disposicions sancionadores no favorables o restrictives de drets:',
      options: [
        'Individuals',
        'Col·lectius i socials',
        'Patrimonials i econòmics',
        'Fonamentals únicament'
      ],
      correctIndex: 0,
      explanation: 'Trampa clàssica: l\'art. 9.3 CE parla textualment de drets "individuals", mai col·lectius.'
    },
    {
      id: 't1-q3',
      difficulty: 'Mitjà',
      question: 'Quin dret NO es pot suspendre durant l\'estat d\'excepció segons l\'article 55.1 CE?',
      options: [
        'Art. 17.3 (informació dels drets del detingut i assistència d\'advocat)',
        'Art. 17.2 (termini màxim de detenció preventiva de 72 hores)',
        'Art. 18.2 (inviolabilitat del domicili)',
        'Art. 21 (dret de reunió i manifestació)'
      ],
      correctIndex: 0,
      explanation: 'L\'art. 17.3 no pot ser suspès en l\'estat d\'excepció (només en l\'estat de setge).'
    },
    {
      id: 't1-q4',
      difficulty: 'Fàcil',
      question: 'Quants membres integren el Tribunal Constitucional i quina és la durada del seu mandat?',
      options: [
        '12 membres per un període de 9 anys',
        '20 membres per un període de 5 anys',
        '12 membres per un període de 5 anys',
        '15 membres per un període de 9 anys'
      ],
      correctIndex: 0,
      explanation: 'El TC té 12 membres (4 Congrés, 4 Senat, 2 Govern, 2 CGPJ) amb mandat de 9 anys (renovats per terços cada 3). 20 membres i 5 anys corresponen al CGPJ.'
    },
    {
      id: 't1-q5',
      difficulty: 'Difícil',
      question: 'Quina afirmació és correcta respecte a l\'Estatut d\'Autonomia de Catalunya (LO 6/2006) després de la STC 31/2010?',
      options: [
        'L\'incís "i preferent" del català a l\'art. 6.1 i el caràcter vinculant dels dictàmens del Consell de Garanties (art. 76.4) van ser anul·lats',
        'Els 4 símbols nacionals de l\'art. 8 són la bandera, l\'escut, la diada i l\'himne',
        'El Consell de Justícia de Catalunya (arts. 97–100) és plenament vigent i operatiu',
        'El Preàmbul té plena eficàcia jurídica interpretativa sobre el terme nació'
      ],
      correctIndex: 0,
      explanation: 'La STC 31/2010 va anul·lar el caràcter preferent del català (6.1) i els efectes vinculants del Consell de Garanties (76.4). A més, l\'escut no és a l\'art. 8 i el Consell de Justícia no és vigent.'
    },
    {
      id: 't1-q6',
      difficulty: 'Mitjà',
      question: 'Quin tipus de competència atribueix l\'article 132.1 de l\'EAC a la Generalitat en matèria de protecció civil i prevenció i extinció d\'incendis?',
      options: [
        'Competència exclusiva (respectant les competències dels governs locals i la seguretat pública estatal)',
        'Competència compartida amb l\'Estat',
        'Competència executiva únicament',
        'Participació en l\'execució'
      ],
      correctIndex: 0,
      explanation: 'L\'art. 132.1 EAC assigna competència exclusiva en protecció civil i prevenció/extinció d\'incendis (mentre salvament marítim és executiva 132.3 i nuclear participació 132.4).'
    },
    {
      id: 't1-q7',
      difficulty: 'Difícil',
      question: 'En la reforma de l\'Estatut pels Títols I i II (art. 222 EAC), quina majoria cal al Parlament i quants passos segueix?',
      options: [
        '2/3 del Parlament i 4 passes (inclou consulta prèvia a les Corts abans de la ratificació per Llei Orgànica i referèndum)',
        '3/5 del Parlament i 3 passes sense consulta a les Corts',
        'Majoria absoluta del Parlament i referèndum potestatiu',
        '2/3 del Parlament sense referèndum si l\'aproven les Corts'
      ],
      correctIndex: 0,
      explanation: 'Tant l\'art. 222 com el 223 exigeixen 2/3 del Parlament i referèndum, però el 222 té 4 passes perquè inclou la consulta a les Corts.'
    },
    {
      id: 't1-q8',
      difficulty: 'Fàcil',
      question: 'Segons la Llei 13/1989 (art. 5), quins són els "Alts Càrrecs" de l\'Administració de la Generalitat?',
      options: [
        'Els Secretaris Generals i els Directors Generals',
        'El President, els Consellers i els Secretaris Generals',
        'Els Subdirectors Generals i els Caps de Servei',
        'Només els Consellers i el Vicepresident'
      ],
      correctIndex: 0,
      explanation: 'Els Consellers formen part dels 5 Òrgans Superiors; els Alts Càrrecs són exclusivament els Secretaris Generals i els Directors Generals.'
    },
    {
      id: 't1-q9',
      difficulty: 'Mitjà',
      question: 'Quina és l\'ordenació jeràrquica correcta dels òrgans actius d\'un Departament segons l\'article 24 de la Llei 13/1989?',
      options: [
        'Subdireccions generals, Serveis, Seccions i Negociats',
        'Direccions generals, Serveis, Negociats i Seccions',
        'Subdireccions generals, Seccions, Serveis i Negociats',
        'Àrees, Unitats, Serveis i Seccions'
      ],
      correctIndex: 0,
      explanation: 'L\'art. 24 estableix: Subdireccions generals → Serveis → Seccions → Negociats (dirigits per funcionaris de carrera).'
    },
    {
      id: 't1-q10',
      difficulty: 'Difícil',
      question: 'Quin termini té el Parlament de Catalunya per validar un Decret llei del Govern (art. 64 EAC) i què es pot fer amb les circulars de l\'art. 16 de la Llei 13/1989?',
      options: [
        '30 dies improrrogables; les circulars en cap cas tenen potestat reglamentària',
        '15 dies prorrogables; les circulars tenen rang de reglament intern',
        '20 dies naturals; les circulars obliguen tots els ciutadans',
        '30 dies prorrogables; les circulars deroguen ordres de conselleria'
      ],
      correctIndex: 0,
      explanation: 'L\'art. 64 EAC fixa 30 dies improrrogables per convalidar un Decret llei, i l\'art. 16 de la Llei 13/1989 prohibeix que les circulars tinguin potestat reglamentària.'
    }
  ]
};
