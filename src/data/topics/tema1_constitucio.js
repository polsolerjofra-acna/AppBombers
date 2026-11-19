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
          heading: '1.1 Fitxa tècnica i les 3 reformes de la CE',
          paragraphs: [
            'La Constitució Espanyola va ser aprovada per les Corts Generals, ratificada pel poble en referèndum i publicada al BOE el 29 de desembre de 1978, entrant en vigor el mateix dia (Disposició Final).',
            'Consta de Preàmbul (sense força normativa), 169 articles distribuïts en un Títol Preliminar (arts. 1–9) i 10 Títols numerats, més 4 disposicions addicionals, 9 transitòries, 1 derogatòria i 1 final.',
            'Només ha tingut 3 reformes: 1992 (art. 13.2 sufragi passiu estrangers), 2011 (art. 135 estabilitat pressupostària) i 2024 (art. 49, vigent des del 15/02/2024, substituint "disminuïts" per "persones amb discapacitat").'
          ]
        },
        {
          type: 'text',
          heading: '1.2 Títol Preliminar: definició d\'Estat (art. 1) i 7 principis (art. 9.3)',
          paragraphs: [
            'L\'article 1 defineix Espanya com un Estat social i democràtic de Dret, amb sobirania nacional al poble espanyol i forma política de Monarquia parlamentària. Els 4 valors superiors de l\'ordenament són: llibertat, justícia, igualtat i pluralisme polític.',
            'L\'article 9.3 garanteix 7 principis constitucionals: legalitat, jerarquia normativa, publicitat de les normes, irretroactivitat de les disposicions sancionadores no favorables o restrictives de drets individuals, seguretat jurídica, responsabilitat i interdicció de l\'arbitrarietat dels poders públics.'
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
            'L\'article 10 (fora de capítols) consagra la dignitat de la persona. El Capítol II es divideix en Secció 1a (arts. 15–29, drets fonamentals i llibertats públiques: ex. art. 17.2 detenció preventiva màxim 72 hores; art. 27 educació) i Secció 2a (arts. 30–38, drets i deures dels ciutadans).',
            'Dins la Secció 2a hi ha l\'article 30.4, base constitucional de la Protecció Civil: per llei es poden establir deures als ciutadans en casos de greu risc, catàstrofe o calamitat pública.',
            'El Capítol III (arts. 39–52) recull els principis rectors de la política social i econòmica (art. 40.2 seguretat i higiene en el treball, art. 45 medi ambient, art. 49 persones amb discapacitat).'
          ]
        },
        {
          type: 'text',
          heading: '2.2 Garanties dels drets (art. 53 CE) — No confondre els 3 nivells!',
          paragraphs: [
            'Nivell màxim (art. 53.2): recurs preferent i sumari davant els tribunals ordinaris + recurs d\'empara davant el TC. NOMÉS protegeix l\'art. 14 (igualtat), la Secció 1a (arts. 15–29) i l\'objecció de consciència (art. 30.2).',
            'Nivell ordinari (art. 53.1): vincula tots els poders públics, exigeix regulació per llei que respecti el contingut essencial. Protegeix tot el Capítol II (arts. 14–38), però només els arts. 15–29 exigeixen Llei Orgànica (art. 81).',
            'Nivell informador (art. 53.3): els principis rectors (arts. 39–52) informen la legislació i la pràctica judicial, però només es poden al·legar davant la jurisdicció d\'acord amb les lleis que els desenvolupin.'
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
          heading: '3.1 La Corona (Títol II) i les Corts Generals (Títol III)',
          paragraphs: [
            'La Corona (Títol II): la Regència pot ser d\'1, 3 o 5 persones. Els actes del Rei requereixen sempre ratificació (refrendament), excepte en els supòsits del seu àmbit privat/casa reial.',
            'Les Corts Generals (Títol III): Congrés (300–400 diputats, actualment 350) i Senat (4 per província peninsular). La Diputació Permanent té un mínim de 21 membres. La iniciativa legislativa popular requereix un mínim de 500.000 signatures (no procedeix en matèries de Llei Orgànica, tributàries, internacionals ni prerrogativa de gràcia).',
            'Tràmit legislatiu: el Senat té 2 mesos (20 dies naturals si és urgent) per vetar per majoria absoluta o esmenar; el Congrés aixeca el veto immediatament per majoria absoluta o per majoria simple passats 2 mesos.'
          ]
        },
        {
          type: 'text',
          heading: '3.2 Govern, Administració (art. 103 CE) i normes amb rang de llei',
          paragraphs: [
            'Govern (Títol IV): si passen 2 mesos des de la primera votació d\'investidura sense candidat elegit, es dissolen les Corts (art. 99). L\'article 103 fixa els 5 principis d\'actuació de l\'Administració: eficàcia, jerarquia, descentralització, desconcentració i coordinació. El Consell d\'Estat (art. 107) és l\'òrgan consultiu suprem del Govern.',
            'No confondre! Llei Orgànica (art. 81, majoria absoluta del Congrés en votació final sobre el conjunt; regula drets fonamentals 15–29, Estatuts i règim electoral) vs Llei Ordinària (majoria simple).',
            'No confondre! Decret Llei (art. 86, el dicta el Govern en casos d\'extraordinària i urgent necessitat; l\'ha de convalidar o derogar el Congrés en 30 dies; mai pot afectar institucions bàsiques, Títol I, règim CCAA ni dret electoral) vs Decret Legislatiu (arts. 82–85, delegació prèvia de les Corts mitjançant llei de bases o llei ordinària per refondre textos).'
          ]
        },
        {
          type: 'text',
          heading: '3.3 CGPJ (art. 122.3) i Tribunal Constitucional (arts. 159–162)',
          paragraphs: [
            'CGPJ (art. 122.3): President del Tribunal Suprem + 20 vocals (12 jutges/magistrats + 4 a proposta del Congrés + 4 a proposta del Senat, aquests per majoria de 3/5), amb mandat de 5 anys.',
            'Tribunal Constitucional (arts. 159–162): 12 membres (4 Congrés i 4 Senat per majoria de 3/5, 2 Govern i 2 CGPJ) amb mandat de 9 anys, renovats per terços cada 3 anys (President per 3 anys).',
            'Legitimats per al recurs d\'inconstitucionalitat (art. 162.1.a): President del Govern, Defensor del Poble, 50 diputats, 50 senadors, governs i assemblees de les CCAA (el recurs d\'empara el pot posar qualsevol persona amb interès legítim, el Defensor del Poble i el Ministeri Fiscal).'
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
          heading: '4.1 Estructura, llengua, símbols i Aran (STC 31/2010)',
          paragraphs: [
            'L\'EAC (LO 6/2006) té 223 articles en 7 Títols més Preliminar, 15 disposicions addicionals, 2 transitòries, 1 derogatòria i 4 finals. El Preàmbul esmenta "nació" (sense eficàcia jurídica interpretativa segons la STC 31/2010), mentre l\'art. 1 defineix Catalunya com a "nacionalitat" i norma institucional bàsica.',
            'L\'art. 6.1 declara el català llengua pròpia (l\'incís "i preferent" va ser ANUL·LAT per la STC 31/2010) i l\'aranès oficial a tot Catalunya.',
            'Els 3 símbols nacionals de l\'art. 8 són: la Bandera, la Diada (11 de setembre) i l\'himne (Els Segadors). L\'escut NO hi figura! L\'Aran (art. 11) té entitat territorial singular i règim jurídic especial amb el Conselh Generau d\'Aran.'
          ]
        },
        {
          type: 'text',
          heading: '4.2 Institucions de la Generalitat (Parlament, President i Òrgans estatutaris)',
          paragraphs: [
            'Parlament: format per entre 100 i 150 diputats per un mandat de 4 anys; la llei electoral catalana exigeix majoria de 2/3. El Decret llei (art. 64 EAC) requereix validació del Parlament en 30 dies improrrogables.',
            'President de la Generalitat: si passen 2 mesos des de la primera votació d\'investidura sense elecció, es dissol automàticament el Parlament. En cas de suplència, el suplent NO pot plantejar qüestió de confiança, nomenar/cessar consellers ni dissoldre el Parlament.',
            'Òrgans de garantia i control: Consell de Garanties Estatutàries (arts. 76–77: 2/3 elegits pel Parlament per 3/5 i 1/3 pel Govern; dictàmens NO vinculants perquè l\'art. 76.4 va ser anul·lat). Síndic de Greuges i Sindicatura de Comptes: elegits per 3/5 del Parlament. El Títol III Cap. II (Consell de Justícia, arts. 97–100) NO és vigent (anul·lat per la STC 31/2010).'
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
        },
        {
          type: 'text',
          heading: '5.2 No confondre! Delegació vs Avocació vs Suplència i Acte Nul vs Anul·lable',
          paragraphs: [
            'Delegació de competències: es cedeix l\'EXERCICI (mai la titularitat) a un altre òrgan, s\'ha de publicar (DOGC/BOE), és revocable i els actes s\'imputen a l\'òrgan delegant. En canvi, l\'Avocació és el moviment invers: l\'òrgan superior atrau per a si un assumpte concret d\'un òrgan dependent per acord motivat (sense recurs autònom).',
            'Suplència: substitució temporal del titular de l\'òrgan per vacant, absència o malaltia, sense alterar la competència de l\'òrgan (art. 9 Llei 13/1989 / art. 13 LRJSP). No s\'ha de confondre amb la delegació de signatura (només signar resolucions ja adoptades sense publicació) ni amb l\'encomana de gestió (activitats materials o tècniques).',
            'Acte nul de ple dret (art. 47 Llei 39/2015): es produeix per vicis greus taxats (lesió drets d\'empara, incompetència manifesta per matèria/territori, contingut impossible, delicte o absència total de procediment). Té efectes des de l\'origen (ex tunc), no prescriu i no es pot convalidar.',
            'Acte anul·lable (art. 48 Llei 39/2015): és la regla general per qualsevol altra infracció de l\'ordenament (inclosa la desviació de poder). Té efectes cap al futur, es pot convalidar i el defecte de forma només anul·la si genera indefensió o manca de requisits indispensables.'
          ]
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
    },
    {
      id: 't1-q11',
      difficulty: 'Mitjà',
      question: 'Quina afirmació és INCORRECTA respecte a la reforma constitucional pel procediment agreujat (art. 168 CE)?',
      options: [
        'Un cop aprovada per 2/3 de les Corts, el referèndum és potestatiu i només es fa si el demana una desena part d\'una Cambra en 15 dies',
        'S\'aplica a la revisió total de la CE, al Títol Preliminar, a la Secció 1a del Capítol II del Títol I i al Títol II',
        'Exigeix la dissolució immediata de les Corts després de l\'aprovació inicial per majoria de 2/3 de cada Cambra',
        'Les noves Cambres elegides han de ratificar la decisió i aprovar el nou text per majoria de 2/3 abans del referèndum obligatori'
      ],
      correctIndex: 0,
      explanation: 'El referèndum potestatiu (si el demana 1/10 d\'una Cambra en 15 dies) correspon al procediment ordinari (art. 167 CE). A l\'art. 168 CE el referèndum és SEMPRE obligatori.'
    },
    {
      id: 't1-q12',
      difficulty: 'Difícil',
      question: 'Quins drets queden protegits pel recurs d\'empara davant el Tribunal Constitucional segons l\'article 53.2 de la CE?',
      options: [
        'L\'article 14 (igualtat), la Secció 1a del Capítol II (arts. 15–29) i l\'objecció de consciència (art. 30.2)',
        'Tot el Títol I sencer, incloent els principis rectors del Capítol III',
        'Només els articles 15 al 29, excloent l\'article 14 i l\'article 30.2',
        'Els articles 14 al 38 (tot el Capítol II) i l\'article 45 sobre medi ambient'
      ],
      correctIndex: 0,
      explanation: 'L\'art. 53.2 CE limita el recurs d\'empara davant el TC a l\'art. 14, la Secció 1a (arts. 15–29) i l\'objecció de consciència (art. 30.2).'
    },
    {
      id: 't1-q13',
      difficulty: 'Mitjà',
      question: 'En relació amb els estats excepcionals de l\'article 116 CE, quina afirmació és INCORRECTA?',
      options: [
        'L\'estat d\'excepció el declara el Govern sense autorització prèvia del Congrés per un màxim de 15 dies',
        'L\'estat d\'alarma el declara el Govern donant compte al Congrés per un màxim de 15 dies, prorrogables pel Congrés',
        'L\'estat de setge el declara la majoria absoluta del Congrés a proposta exclusiva del Govern',
        'Mentre estigui declarat qualsevol dels tres estats, no es pot dissoldre el Congrés ni iniciar una reforma constitucional (art. 169)'
      ],
      correctIndex: 0,
      explanation: 'L\'estat d\'excepció el declara el Govern AMB autorització prèvia del Congrés i per un màxim de 30 dies (prorrogables pel mateix termini). 15 dies i sense autorització prèvia és l\'estat d\'alarma.'
    },
    {
      id: 't1-q14',
      difficulty: 'Difícil',
      question: 'En l\'Administració pública, què distingeix la delegació de competències de l\'avocació i de la suplència?',
      options: [
        'En la delegació es cedeix l\'exercici (no la titularitat) i els actes s\'imputen al delegant; en l\'avocació el superior atrau un assumpte concret; en la suplència es substitueix temporalment el titular sense alterar la competència',
        'En la delegació es transfereix la titularitat definitiva de la competència i els actes s\'imputen al delegat',
        'L\'avocació requereix publicació obligatòria al DOGC i contra el seu acord hi cap recurs d\'alçada autònom',
        'La suplència només es pot acordar per raons tècniques o econòmiques i canvia la titularitat de l\'òrgan'
      ],
      correctIndex: 0,
      explanation: 'Delegació = cessió d\'exercici (no titularitat), publicació i imputació al delegant. Avocació = atracció d\'un assumpte per l\'òrgan superior motivadament (sense recurs autònom). Suplència = substitució temporal del titular per vacant/absència/malaltia.'
    },
    {
      id: 't1-q15',
      difficulty: 'Difícil',
      question: 'Quin dels vicis següents determina que un acte administratiu sigui NUL DE PLE DRET (i no merament anul·lable)?',
      options: [
        'Que l\'acte hagi estat dictat per un òrgan manifestament incompetent per raó de la matèria o del territori',
        'Que l\'acte presenti un defecte de forma sense generar indefensió ni mancar de requisits indispensables',
        'Que l\'acte incorri en desviació de poder',
        'Que l\'acte es dicti fora del termini establert quan no hi hagi termini essencial'
      ],
      correctIndex: 0,
      explanation: 'La incompetència manifesta per raó de la matèria o del territori és causa de nul·litat de ple dret (art. 47.1.b LPACAP). La desviació de poder és causa d\'anul·labilitat (art. 48), i la incompetència jeràrquica es pot convalidar.'
    },
    {
      id: 't1-q16',
      difficulty: 'Mitjà',
      question: 'Quin precepte constitucional és la base de la Protecció Civil en preveure l\'establiment de deures ciutadans en casos de greu risc, catàstrofe o calamitat pública?',
      options: [
        'Article 30.4 CE (Secció 2a del Capítol II del Títol I)',
        'Article 40.2 CE (Capítol III, principis rectors)',
        'Article 104.1 CE (Forces i Cossos de Seguretat)',
        'Article 15.1 CE (Dret a la vida i integritat física)'
      ],
      correctIndex: 0,
      explanation: 'L\'article 30.4 CE estableix textualment: "Mitjançant llei podran regular-se els deures dels ciutadans en els casos de greu risc, catàstrofe o calamitat pública".'
    },
    {
      id: 't1-q17',
      difficulty: 'Fàcil',
      question: 'Segons la Llei 13/1989, qui resol els conflictes d\'atribucions dins d\'un mateix Departament i qui té la condició de 2a autoritat del departament i cap superior de tot el personal?',
      options: [
        'El Conseller resol els conflictes interns (i suscita els interdepartamentals); el Secretari General és la 2a autoritat i cap superior del personal',
        'El Secretari General resol tots els conflictes; el Director General és cap superior del personal',
        'El President de la Generalitat resol els conflictes interns; el Conseller és cap de personal',
        'El Director General resol els conflictes interns; el Subdirector General és la 2a autoritat'
      ],
      correctIndex: 0,
      explanation: 'Art. 12 Llei 13/1989: el Conseller resol conflictes dins del seu departament i els suscita amb altres. Art. 13: el Secretari General és la 2a autoritat i cap superior de tot el personal.'
    },
    {
      id: 't1-q18',
      difficulty: 'Mitjà',
      question: 'Respecte a la reforma de l\'Estatut d\'Autonomia (LO 6/2006) i les competències de Bombers a l\'EAC, quina afirmació és INCORRECTA?',
      options: [
        'El salvament marítim (art. 132.3 EAC) és competència exclusiva de la Generalitat, igual que la protecció civil',
        'La protecció civil i la prevenció i extinció d\'incendis (art. 132.1 EAC) són competència exclusiva de la Generalitat, respectant les competències locals i la seguretat pública estatal',
        'En matèria de seguretat nuclear (art. 132.4 EAC), la Generalitat només té participació en l\'execució',
        'L\'article 84.2.f EAC reconeix als governs locals competència pròpia en protecció civil i prevenció d\'incendis'
      ],
      correctIndex: 0,
      explanation: 'Segons l\'art. 132.3 EAC, el salvament marítim és competència EXECUTIVA (no exclusiva), i la seguretat nuclear (132.4) només participació en l\'execució.'
    }
  ]
};
