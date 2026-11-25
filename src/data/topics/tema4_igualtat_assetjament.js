export const tema4IgualtatAssetjament = {
  id: 'tema-4',
  number: 4,
  code: 'Llei 19/2020 · Llei 17/2015 · Protocol Assetjament 2023',
  title: 'Igualtat de Tracte, No-discriminació i Protocol d\'Assetjament',
  category: 'Legislació i Normativa — Bloc General',
  estimatedMinutes: 55,
  importance: {
    title: 'Anàlisi d\'Importància · Tema 4',
    frequency: 'Alta (Preguntes de precisió terminològica)',
    summary:
      'Aquest tema barreja 3 textos molt semblants (Llei 19/2020 d\'igualtat de tracte, Llei 17/2015 d\'igualtat dones-homes i el Protocol d\'assetjament 2023). Les preguntes clàssiques busquen saber en quina llei surt cada paraula exacta ("vexatori" vs "molest", "una dona" vs "una persona", "indicis racionals i fonamentats" vs "indicis fonamentats") i els terminis 5-15-10 del Protocol.',
    hotTopics: [
      'Llei 19/2020: llista oberta 12 motius (a–l), 10 fòbies, art. 21.4 perfils racials, art. 26 acció popular',
      'Llei 17/2015: paritat 60-40, plans sector públic cada 2 anys (Bombers a l\'art. 15.4.c!), STC 159/2016',
      'Protocol 2023: ratificat 28.03.2023, terminis 5 + 15 + 10 dies hàbils, OPPI avalua cada 3 anys',
      'Creuament exacte: "vexatori" (19/2020) vs "molest" (17/2015 i Protocol)'
    ],
    traps: [
      'La discriminació MÚLTIPLE parla de "una DONA" només a la Llei 17/2015; a la 19/2020 i al Protocol parla de "una PERSONA".',
      'La paraula "interpretació" en discriminació INDIRECTA és a la 17/2015 i al Protocol, NO a la 19/2020.',
      'Inversió de la càrrega de la prova: "indicis RACIONALS i fonamentats" (19/2020) vs "indicis fonamentats" sense "racionals" (17/2015).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Sentit, Reserva i Òrgans',
      title: '1. Què Regulen les 3 Normes, Reserva de Places (25%–40%) i Òrgans Responsables',
      subtitle: 'Significat de cada llei, percentatges mínim/màxim de reserva per a dones i qui promou les polítiques d’igualtat',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '1.1. Què vol dir i per a què serveix cada norma? (Visió clara)',
          paragraphs: [
            '• Llei 19/2020, d’igualtat de tracte i no-discriminació (52 arts., Títols I–III): és l’escut GENERAL contra qualsevol discriminació. Protegeix totes les persones davant tractes injustos per una llista oberta de 12 motius (lletres a–l: sexe, edat, origen, religió, llengua, orientació sexual, discapacitat...) i defineix 10 fòbies específiques. Prohibeix els perfils racials policials (art. 21.4), garanteix la lectura fàcil (art. 15) i preveu un Pla de país cada 4 anys (art. 28).',
            '• Llei 17/2015, d’igualtat efectiva de dones i homes (64 arts., Cap. I, III, IV): és l’escut ESPECÍFIC DE GÈNERE (11 finalitats i 8 principis). Busca la igualtat real entre dones i homes: obliga els tribunals de selecció a ser paritaris (art. 16), exigeix auditories de gènere (art. 17.2) i obliga el sector públic —esmentant expressament el Cos de Bombers a l’art. 15.4.c!— a aprovar plans d’igualtat cada 2 anys (amb avaluació cada 4). La STC 159/2016 en va anul·lar els arts. 33, 40, 44 i parts dels 36, 39 i 41.',
            '• Protocol d’Assetjament de la Generalitat (2023): aprovat a la Mesa el 09/03/2023 i ratificat per Acord de Govern el 28/03/2023. Té 9 apartats (no articles!) i fixa com s’ha d’actuar dins l’Administració quan hi ha assetjament sexual o per raó de sexe, orientació sexual, identitat o expressió de gènere.'
          ]
        },
        {
          type: 'table',
          title: '1.2. Paritat i Reserva de Places per a Dones a Bombers (Mínim i Màxim)',
          subtitle: 'Percentatges clau que pregunten als exàmens',
          headers: ['Concepte', 'Percentatge exacte', 'Com s’aplica'],
          rows: [
            ['Representació paritària (Llei 17/2015)', 'Mínim 40% – Màxim 60% (tendint al 50%)', 'Cap dels dos sexes pot superar el 60% ni quedar per sota del 40% en òrgans, llistes i tribunals de selecció (art. 16).'],
            ['Reserva de places per a dones en cossos operatius (Bombers)', 'Mínim 25% – Màxim 40% de les places convocades', 'Mesura d’acció positiva temporal (habilitada per lleis d’acompanyament pressupostari) per corregir la subrepresentació històrica; a les convocatòries recents de Bombers s’aplica el màxim del 40%.']
          ],
          footnote: 'No confonguis la paritat general (forquilla 40%–60%) amb la reserva de places a Bombers (entre el 25% mínim i el 40% màxim).'
        },
        {
          type: 'table',
          title: '1.3. Òrgans i Entitats Responsables de Promoure i Gestionar les Polítiques',
          subtitle: 'Qui impulsa, gestiona, assessora i avalua',
          headers: ['Òrgan / Entitat', 'Funció principal'],
          rows: [
            ['Oficina d’Igualtat de Tracte i No-discriminació (Llei 19/2020)', 'Òrgan de la Generalitat encarregat de promoure la igualtat de tracte, rebre denúncies de discriminació, oferir atenció/mediació i impulsar procediments sancionadors.'],
            ['Institut Català de les Dones (ICD) i Unitats d’Igualtat departamentals', 'Impulsen, coordinen i avaluen les polítiques d’igualtat efectiva de dones i homes (Llei 17/2015) i l’elaboració dels plans d’igualtat (com el de Bombers).'],
            ['OPPI (Oficina de Polítiques de Promoció de la Igualtat / òrgan paritari)', 'Fa el seguiment estadístic i avalua el funcionament del Protocol d’Assetjament 2023 cada 3 anys.'],
            ['Servei de Prevenció de Riscos Laborals (SPRL) i Comissió d’Investigació', 'Gestionen les comunicacions internes d’assetjament a la feina, donen suport a la víctima, proposen mesures cautelars i instrueixen l’expedient d’investigació.']
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Camí de Denúncia i Contrast',
      title: '2. A Qui Es Comunica i Quin Camí Segueix una Discriminació o Assetjament',
      subtitle: 'Circuit complet pas a pas (5–15–10 dies hàbils), vies externes i Taula de Contrastos Creuats',
      isSummary: false,
      blocks: [
        {
          type: 'table',
          title: '2.1. Camí del Procediment dins el Protocol d’Assetjament (2023)',
          subtitle: 'A qui es comunica i fases pas a pas des de l’avís fins a la resolució',
          headers: ['Fase / Pas', 'A qui es dirigeix / Qui actua', 'Què passa i termini (dies hàbils)'],
          rows: [
            ['1. Comunicació inicial', 'Servei de Prevenció (SPRL), Bústia ètica, Unitat d’Igualtat o comandament/RRHH', 'Ho pot comunicar la víctima, un testimoni o representant sindical. S’activa sempre que la VÍCTIMA estigui dins l’àmbit subjectiu del Protocol.'],
            ['2. Primer contacte i mesures cautelars', 'Persona referent / Servei de Prevenció (SPRL)', 'Màxim 5 dies hàbils per contactar amb la víctima, informar-la, oferir suport psicològic/mèdic i valorar mesures cautelars de separació o protecció.'],
            ['3. Investigació i informe', 'Comissió d’Investigació / persona instructora', 'Màxim 15 dies hàbils per fer entrevistes confidencials, recollir proves i emetre l’Informe de conclusions.'],
            ['4. Resolució', 'Òrgan competent (Secretaria General / Direcció de Serveis)', 'Màxim 10 dies hàbils per dictar resolució motivada (arxivament, mesures organitzatives o obertura d’expedient disciplinari).'],
            ['5. Vies externes (Llei 19/2020, art. 26)', 'Oficina d’Igualtat de Tracte · Síndic · Inspecció de Treball · Jutjats', 'Acció popular administrativa (art. 26.2): SENSE partits polítics. Acció judicial (art. 26.3): AMB partits polítics i autorització expressa de la víctima.']
          ],
          footnote: 'Recorda: tots els terminis del Protocol (5 – 15 – 10) són en dies HÀBILS.'
        },
        {
          type: 'table',
          title: '2.2. Taula de Contrastos Creuats (Pregunta directa d\'examen)',
          subtitle: 'On apareix cada paraula o requisit exacte entre les 3 normes',
          headers: ['Concepte', 'Llei 19/2020', 'Llei 17/2015', 'Protocol 2023'],
          rows: [
            ['Adjectiu "vexatori"', 'SÍ (art. 4.e)', 'No als mateixos termes', '0 cops al Protocol'],
            ['Adjectiu "molest"', 'No', 'SÍ (2.o, assetjament per raó de sexe, 6 adjectius)', 'SÍ (ap. 4, assetjament sexual, 6 adj., "d\'índole sexual")'],
            ['Discriminació múltiple', '"una PERSONA"', '"una DONA"', '"una PERSONA"'],
            ['Indirecta: "interpretació"', 'NO hi surt', 'SÍ hi surt', 'SÍ hi surt'],
            ['Inversió càrrega prova', 'Art. 22.4: "indicis RACIONALS i fonamentats" (tot)', 'Art. 32.2.e: "indicis fonamentats" (només sexual/sexe)', 'Remissió legal']
          ],
          footnote: 'Memoritza: "Vexatori = 19/2020" · "Molest = 17/2015 (sexe) i Protocol (sexual)" · "Una dona = només 17/2015".'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Conceptes i Discriminació',
      title: '3. Glossari de Conceptes Clau: Igualtat, Paritat i Tipus de Discriminació',
      subtitle: 'Definicions oficials per no confondre termes semblants a l\'examen (Llei 19/2020 i Llei 17/2015)',
      isSummary: false,
      blocks: [
        {
          type: 'table',
          title: '3.1. Igualtat, Equitat, Paritat i Acció Positiva (No confondre!)',
          subtitle: 'Conceptes bàsics de la Llei 19/2020 i la Llei 17/2015',
          headers: ['Concepte', 'Definició oficial i matís clau'],
          rows: [
            ['Igualtat de tracte i no-discriminació (Llei 19/2020)', 'Absència de tota discriminació, directa o indirecta, per qualsevol motiu (llista oberta a–l: sexe, origen, edat, religió, orientació sexual, discapacitat, etc.).'],
            ['Igualtat efectiva / d’oportunitats (Llei 17/2015)', 'Igualtat real i efectiva de dones i homes en tots els àmbits, eliminant obstacles perquè tinguin les mateixes condicions de partida i resultats.'],
            ['Equitat de gènere', 'Tractar dones i homes segons les seves necessitats específiques (tracte diferenciat quan cal per compensar desigualtats històriques i arribar a la igualtat real).'],
            ['Representació paritària / Paritat (Llei 17/2015, art. 2)', 'Presència equilibrada de dones i homes en òrgans, llistes i tribunals: cap dels dos sexes no supera el 60% ni queda per sota del 40%, tendint al 50%.'],
            ['Accions positives (Llei 17/2015)', 'Mesures específiques i temporals a favor d’un sexe per corregir situacions patents de desigualtat de fet (p. ex. reserva de places). No són discriminatòries mentre duri la desigualtat.'],
            ['Transversalitat (Mainstreaming de gènere)', 'Integrar la perspectiva de gènere en totes les polítiques, normes, pressupostos i actuacions públiques des del seu disseny.']
          ],
          footnote: 'Trampa clàssica: Paritat NO és sempre 50%-50% exacte, sinó la forquilla 60%–40% tendint al 50%.'
        },
        {
          type: 'table',
          title: '3.2. Tots els Tipus de Discriminació (Directa, Indirecta, Múltiple, Segon Ordre...)',
          subtitle: 'Definicions exactes de la Llei 19/2020 (art. 4) i la Llei 17/2015 (art. 2)',
          headers: ['Tipus de discriminació', 'Definició i exemple pràctic'],
          rows: [
            ['Discriminació directa', 'Tractar una persona de manera menys favorable que una altra en situació anàloga o comparable per raó d’un motiu prohibit (sexe, edat, origen...). A la 17/2015 inclou expressament tot tracte desfavorable per embaràs o maternitat.'],
            ['Discriminació indirecta', 'Una disposició, criteri o pràctica aparentment neutres (i "interpretació" a la 17/2015 i Protocol!) posen persones d’un col·lectiu en desavantatge particular, llevat que hi hagi justificació objectiva legítima i mitjans proporcionats.'],
            ['Discriminació per associació', 'Discriminar una persona per la seva relació o vinculació amb una altra persona o grup que té una característica protegida (p. ex. perjudicar un bomber per tenir un familiar amb discapacitat).'],
            ['Discriminació per error', 'Discriminar algú per una apreciació errònia sobre les seves característiques (atribuir-li un motiu protegit que en realitat no té).'],
            ['Discriminació múltiple (i interseccional)', 'Concorren o interactuen dos o més motius de discriminació sobre la mateixa persona alhora (p. ex. dona + edat + origen). Recorda: "una DONA" només a la 17/2015; "una PERSONA" a la 19/2020 i al Protocol!'],
            ['Discriminació de segon ordre (i represàlia)', 'Patir un tracte advers o conseqüències negatives per haver donat suport a una víctima de discriminació o assetjament, o per haver presentat una queixa, denúncia o testimoni en defensa seva.'],
            ['Ordre / Inducció a discriminar', 'Donar instruccions o induir altres persones a cometre una discriminació. Es considera discriminació en si mateixa encara que qui dóna l’ordre no l’executi directament.']
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Tipus d\'Assetjament i Jerarquia',
      title: '4. Assetjament: Sexual, per Raó de Sexe, per Gènere i Jeràrquic',
      subtitle: 'Diferències clau entre els tipus d’assetjament i la posició jeràrquica al Protocol 2023',
      isSummary: false,
      blocks: [
        {
          type: 'table',
          title: '4.1. Tipus d’Assetjament Segons el Motiu (Protocol 2023, Llei 17/2015 i 19/2020)',
          subtitle: 'Distingeix el contingut sexual, el sexe, el gènere i la discriminació general',
          headers: ['Tipus d’assetjament', 'Nucli definitori i diferència d’examen'],
          rows: [
            ['Assetjament sexual (Protocol ap. 4)', 'Comportament verbal, no verbal o físic D’ÍNDOLE SEXUAL no desitjat que atempta contra la dignitat i crea un entorn intimidatori, hostil, degradant, humiliant, ofensiu o MOLEST.'],
            ['Assetjament per raó de sexe (Llei 17/2015 art. 2.o)', 'Comportament no desitjat relacionat amb el SEXE d’una persona (embaràs, maternitat, paternitat, rols), SENSE contingut sexual, que crea un entorn intimidatori, hostil, degradant, humiliant, ofensiu o MOLEST.'],
            ['Assetjament per orientació sexual, identitat o expressió de gènere (Protocol 2023)', 'Comportament no desitjat basat en l’orientació sexual, la identitat sentida o l’expressió de gènere (LGTBI-fòbia) que atempta contra la dignitat i crea un entorn intimidatori, hostil, degradant, humiliant, ofensiu o molest.'],
            ['Assetjament discriminatori (Llei 19/2020 art. 4.e)', 'Conducta no desitjada per qualsevol motiu de discriminació (edat, raça, religió, llengua...) que atempta contra la dignitat i crea un entorn intimidatori, hostil, degradant, humiliant, ofensiu o VEXATORI.']
          ]
        },
        {
          type: 'table',
          title: '4.2. Assetjament Segons la Posició Jeràrquica (Protocol 2023)',
          subtitle: 'Classificació operativa segons qui exerceix la conducta',
          headers: ['Modalitat jeràrquica', 'Descripció'],
          rows: [
            ['Descendent / Jeràrquic (i Xantatge o Quid pro quo)', 'D’un superior jeràrquic cap a una persona subordinada. En xantatge sexual ("quid pro quo"), es condiciona un dret, ascens, torn o condició laboral a l’acceptació d’un favor sexual.'],
            ['Horitzontal (o Ambiental)', 'Entre companys/es del mateix rang jeràrquic (sense relació de superioritat), creant un ambient de treball hostil, ofensiu, humiliant o intimidatori.'],
            ['Ascendent', 'D’una o més persones subordinades cap a una persona amb càrrec o comandament superior.']
          ]
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Resum I (Lleis i Glossari)',
      title: '5. Resum Imprescindible (I): Lleis 19/2020, 17/2015 i Glossari Clau',
      subtitle: 'Xifres, articles, definicions i límits constitucionals',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · Llei 19/2020 i Llei 17/2015',
          subtitle: 'Tot el que entra a l\'oposició',
          headers: ['Norma', 'Punts clau imprescindibles'],
          rows: [
            ['Llei 19/2020 (Tít. I–III)', '52 arts. · 12 motius (a–l) oberta · 10 fòbies · Art. 15 lectura fàcil · Art. 21.4 perfils racials'],
            ['Acció popular (19/2020)', '26.2 administrativa (sense partits) vs 26.3 judicial (amb partits + autorització expressa)'],
            ['Pla de país (19/2020)', 'Art. 28: vigència quadriennal (4 anys)'],
            ['Llei 17/2015 (Cap. I, III, IV)', '64 arts. · 11 finalitats · 8 principis · Paritat 60–40 (tendint al 50%)'],
            ['Art. 15 / 15.4.c (17/2015)', 'Plans sector públic cada 2 anys (avaluació quadriennal) · Cita BOMBERS expressament'],
            ['STC 159/2016', 'Anul·la arts. 33, 40, 44 i parts dels 36, 39 i 41 de la Llei 17/2015']
          ],
          footnote: 'Llei 17/2015 art. 16: paritat obligatòria als tribunals de selecció; art. 17.2: auditories de gènere.'
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · Discriminacions que es confonen',
          trick: '• DIRECTA = tracte pitjor directe · INDIRECTA = norma neutra que perjudica ("interpretació" a la 17/2015 i Protocol).\n• ASSOCIACIÓ = per relació amb algú protegit · PER ERROR = per creure erròniament que ho és.\n• MÚLTIPLE = 2+ motius ("dona" a la 17/2015; "persona" a la 19/2020 i Protocol).\n• SEGON ORDRE = represàlia contra qui ajuda o denuncia a favor d’una víctima.',
          example: 'Si un comandament aparta un bomber perquè va declarar com a testimoni a favor d’una companya assetjada, és discriminació de SEGON ORDRE.'
        }
      ]
    },
    {
      pageNumber: 6,
      shortLabel: 'Pàg. 6 · Resum II (Protocol i Trampes)',
      title: '6. Resum Imprescindible (II): Protocol 2023, Assetjaments i Regles Mnemotècniques',
      subtitle: 'Terminis 5-15-10, jerarquia i diferències verbals',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · Protocol 2023',
          subtitle: 'Dates, estructura i terminis en dies hàbils',
          headers: ['Concepte', 'Dada exacta'],
          rows: [
            ['Aprovació i ratificació', 'Mesa 09/03/2023 · Ratificat Govern 28/03/2023 · 9 apartats (sense articles)'],
            ['Àmbit subjectiu', 'S\'aplica si la VÍCTIMA està inclosa dins l\'àmbit del Protocol'],
            ['Terminis investigació', '5 dies hàbils (contactar) → 15 dies hàbils (informe) → 10 dies hàbils (resolució)'],
            ['Avaluació OPPI', 'Cada 3 anys']
          ],
          footnote: 'Inversió càrrega prova: "indicis racionals i fonamentats" (19/2020) vs "indicis fonamentats" (17/2015).'
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · 5 – 15 – 10 i Vexatori/Molest',
          trick: 'Protocol = 5 dies per trucar (contactar), 15 dies per escriure (informe), 10 dies per tancar (resolució). Tots dies HÀBILS! "Vexatori" només a la 19/2020; "Molest" a la 17/2015 i al Protocol.',
          example: 'Si l\'examen diu "5 dies naturals per contactar amb la víctima", és FALS: són dies hàbils!'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't4-q1',
      difficulty: 'Fàcil',
      question: 'Cada quants anys s\'han d\'elaborar els plans d\'igualtat al sector públic (on s\'esmenta expressament el Cos de Bombers a l\'art. 15.4.c) segons la Llei 17/2015?',
      options: [
        'Cada 2 anys (amb avaluació quadriennal)',
        'Cada 4 anys (amb avaluació anual)',
        'Cada 3 anys',
        'Cada 5 anys'
      ],
      correctIndex: 0,
      explanation: 'Art. 15 Llei 17/2015: plans cada 2 anys i avaluació quadriennal.'
    },
    {
      id: 't4-q2',
      difficulty: 'Mitjà',
      question: 'Quins són els 3 terminis del procediment d\'investigació del Protocol d\'assetjament de 2023?',
      options: [
        '5 dies hàbils (contactar), 15 dies hàbils (informe) i 10 dies hàbils (resolució)',
        '5 dies naturals (contactar), 10 dies naturals (informe) i 15 dies naturals (resolució)',
        '3 dies hàbils (contactar), 15 dies hàbils (informe) i 5 dies hàbils (resolució)',
        '10 dies hàbils (contactar), 20 dies hàbils (informe) i 10 dies hàbils (resolució)'
      ],
      correctIndex: 0,
      explanation: '5 dies hàbils per contactar, 15 dies hàbils per a l\'informe i 10 dies hàbils per a la resolució.'
    },
    {
      id: 't4-q3',
      difficulty: 'Difícil',
      question: 'En quina norma apareix el terme "vexatori" en la definició d\'assetjament, i en quines apareix "molest"?',
      options: [
        '"Vexatori" és a la Llei 19/2020 (art. 4.e); "molest" és a la Llei 17/2015 (per raó de sexe) i al Protocol 2023 (assetjament sexual)',
        '"Vexatori" és exclusiu del Protocol 2023 (assetjament psicològic); "molest" apareix únicament a la Llei 19/2020 (art. 4.e)',
        'Tots dos termes ("vexatori" i "molest") apareixen per igual tant al Protocol de 2023 com a l\'article 4.e de la Llei 19/2020',
        '"Vexatori" és a la Llei 17/2015 (assetjament sexual); "molest" no figura en cap de les tres normes del temari d\'igualtat'
      ],
      correctIndex: 0,
      explanation: '"Vexatori" és exclusiu de l\'art. 4.e de la Llei 19/2020 (0 cops al Protocol). "Molest" surt a la 17/2015 i al Protocol 2023.'
    },
    {
      id: 't4-q4',
      difficulty: 'Difícil',
      question: 'Com formula la Llei 19/2020 (art. 22.4) la inversió de la càrrega de la prova respecte de la Llei 17/2015 (art. 32.2.e)?',
      options: [
        '19/2020 exigeix "indicis racionals i fonamentats" (per a qualsevol discriminació); 17/2015 parla d\'"indicis fonamentats" (només assetjament sexual o per raó de sexe)',
        '17/2015 exigeix "indicis racionals i fonamentats" (per a tota discriminació); 19/2020 només requereix "sospites versemblants" (només en via penal)',
        'Cap de les dues lleis preveu la inversió de la càrrega de la prova en via administrativa, sinó que la remet exclusivament a la jurisdicció social',
        'Totes dues normes utilitzen exactament la fórmula d\'"indicis racionals i suficients" aplicada de manera idèntica a qualsevol procediment sancionador'
      ],
      correctIndex: 0,
      explanation: 'La diferència literal és la paraula "racionals" present a la 19/2020 i absent a la 17/2015.'
    },
    {
      id: 't4-q5',
      difficulty: 'Mitjà',
      question: 'Quina diferència hi ha a l\'art. 26 de la Llei 19/2020 entre l\'acció en via administrativa (26.2) i l\'acció judicial (26.3)?',
      options: [
        'En via administrativa no s\'hi inclouen els partits polítics; en via judicial sí, i cal autorització expressa de la persona afectada',
        'En via administrativa cal autorització expressa del Síndic de Greuges; en via judicial les entitats actuen sense autorització de l\'afectat',
        'Els partits polítics només poden personar-se en via administrativa prèvia; en via judicial la legitimació es limita als sindicats majoritaris',
        'En via judicial no hi poden intervenir associacions ni fundacions; la legitimació col·lectiva es restringeix a la via administrativa ordinària'
      ],
      correctIndex: 0,
      explanation: 'Art. 26.2 exclou partits polítics en via administrativa; art. 26.3 permet l\'acció judicial (amb partits) si hi ha autorització expressa.'
    },
    {
      id: 't4-q6',
      difficulty: 'Fàcil',
      question: 'Quina és la proporció mínima de representació paritària que estableix la Llei 17/2015?',
      options: [
        'Màxim 60% i mínim 40% de cada sexe (tendint al 50%)',
        'Exactament 50% i 50% en tots els casos',
        'Màxim 70% i mínim 30%',
        'Mínim 25% de dones en cossos operatius'
      ],
      correctIndex: 0,
      explanation: 'La regla de paritat de la Llei 17/2015 és la forquilla 60%–40%, tendint al 50%.'
    },
    {
      id: 't4-q7',
      difficulty: 'Mitjà',
      question: 'Quin òrgan avalua el Protocol d\'assetjament de 2023 i amb quina periodicitat?',
      options: [
        'L\'OPPI, cada 3 anys',
        'El Parlament de Catalunya, cada 4 anys',
        'El Síndic de Greuges, anualment',
        'La Inspecció de Treball, cada 2 anys'
      ],
      correctIndex: 0,
      explanation: 'L\'Oficina de Polítiques de Promoció de la Igualtat (OPPI) avalua el Protocol cada 3 anys.'
    },
    {
      id: 't4-q8',
      difficulty: 'Difícil',
      question: 'En quina de les tres normes la definició de "discriminació múltiple" es refereix específicament a "una dona"?',
      options: [
        'Només a la Llei 17/2015 (a la 19/2020 i al Protocol es refereix a "una persona")',
        'Només a la Llei 19/2020 (a la 17/2015 i al Protocol es refereix a "una persona")',
        'Només al Protocol 2023 (a les lleis 17/2015 i 19/2020 es refereix a "una persona")',
        'A totes tres normes per igual, emprant sempre la referència expressa a "una dona"'
      ],
      correctIndex: 0,
      explanation: 'La Llei 17/2015 parla d\'"una dona", mentre que la 19/2020 i el Protocol 2023 utilitzen "una persona".'
    },
    {
      id: 't4-q9',
      difficulty: 'Fàcil',
      question: 'Quants articles té el Protocol d\'assetjament ratificat pel Govern el 28 de març de 2023?',
      options: [
        'No té articles; s\'estructura en 9 apartats',
        '52 articles',
        '64 articles',
        '15 articles'
      ],
      correctIndex: 0,
      explanation: 'És un acord de Govern estructurat en 9 apartats, sense articles.'
    },
    {
      id: 't4-q10',
      difficulty: 'Mitjà',
      question: 'Quins articles de la Llei 17/2015 va anul·lar la STC 159/2016?',
      options: [
        'Els articles 33, 40, 44 i parts dels articles 36, 39 i 41',
        'L\'article 15.4.c sobre plans d\'igualtat dels Bombers',
        'Tots els articles relatius a paritat als tribunals',
        'Només la disposició derogatòria'
      ],
      correctIndex: 0,
      explanation: 'La STC 159/2016 va anul·lar els arts. 33, 40, 44 i fragments dels arts. 36, 39 i 41.'
    },
    {
      id: 't4-q11',
      difficulty: 'Mitjà',
      question: 'Quina afirmació és INCORRECTA respecte a la Llei 19/2020 d\'igualtat de tracte i no-discriminació?',
      options: [
        'Recull una llista tancada de 10 motius de discriminació sense possibilitat d\'ampliació',
        'Prohibeix l\'ús de perfils racials per part dels cossos policials (art. 21.4)',
        'Garanteix l\'accessibilitat i la lectura fàcil (art. 15)',
        'El Pla de país en matèria d\'igualtat de tracte té vigència quadriennal (art. 28)'
      ],
      correctIndex: 0,
      explanation: 'La Llei 19/2020 conté una llista OBERTA de 12 motius (lletres a–l) que acaba amb "qualsevol altra circumstància", i defineix 10 fòbies específiques.'
    },
    {
      id: 't4-q12',
      difficulty: 'Difícil',
      question: 'En quines dues normes apareix el mot "interpretació" dins de la definició de discriminació indirecta?',
      options: [
        'A la Llei 17/2015 i al Protocol d\'assetjament 2023 (NO apareix a la Llei 19/2020)',
        'Només a la Llei 19/2020 (NO apareix ni a la Llei 17/2015 ni al Protocol 2023)',
        'A totes tres normes per igual (Llei 19/2020, Llei 17/2015 i Protocol 2023)',
        'Només al Protocol d\'assetjament 2023 (NO apareix a cap de les dues lleis)'
      ],
      correctIndex: 0,
      explanation: 'La definició de discriminació indirecta inclou el terme "interpretació" a la Llei 17/2015 i al Protocol 2023, però NO a la Llei 19/2020.'
    },
    {
      id: 't4-q13',
      difficulty: 'Mitjà',
      question: 'Quants principis i quantes finalitats estableix la Llei 17/2015 d\'igualtat efectiva de dones i homes?',
      options: [
        '11 finalitats i 8 principis',
        '12 finalitats i 10 principis',
        '8 finalitats i 11 principis',
        '9 apartats sense principis'
      ],
      correctIndex: 0,
      explanation: 'La Llei 17/2015 (64 articles; entren Cap. I, III i IV) estableix 11 finalitats i 8 principis.'
    },
    {
      id: 't4-q14',
      difficulty: 'Mitjà',
      question: 'Quina diferència hi ha entre l\'assetjament sexual i l\'assetjament per raó de sexe?',
      options: [
        'L\'assetjament sexual és un comportament d\'índole sexual; l\'assetjament per raó de sexe es produeix en funció del sexe d\'una persona amb el propòsit o efecte d\'atemptar contra la seva dignitat',
        'L\'assetjament per raó de sexe només pot consistir en agressions físiques reiterades i l\'assetjament sexual es limita exclusivament a expressions verbals dins l\'entorn laboral',
        'No hi ha cap diferència jurídica ni conceptual entre ambdós supòsits, ja que la Llei 17/2015 i el Protocol 2023 els defineixen com una única conducta sancionable',
        'L\'assetjament per raó de sexe només s\'aplica fora de l\'àmbit laboral o administratiu, mentre que l\'assetjament sexual únicament es persegueix dins dels centres de treball'
      ],
      correctIndex: 0,
      explanation: 'Assetjament sexual = comportament verbal, no verbal o físic d\'índole sexual. Assetjament per raó de sexe = en funció del sexe d\'una persona (sense contingut sexual).'
    },
    {
      id: 't4-q15',
      difficulty: 'Difícil',
      question: 'Segons el Protocol d\'assetjament de 2023, quin requisit determina que el Protocol sigui aplicable en un cas concret?',
      options: [
        'Que la víctima formi part de l\'àmbit subjectiu inclòs dins del Protocol (encara que la persona presumptament assetjadora sigui externa)',
        'Només s\'aplica si tant la víctima com la persona presumptament assetjadora són funcionaris de carrera o personal laboral de la Generalitat',
        'Només s\'aplica si la denúncia s\'ha formalitzat prèviament davant d\'un jutjat penal o de la Inspecció de Treball i Seguretat Social',
        'S\'aplica únicament quan els fets hagin tingut lloc dins les dependències d\'un centre de treball i durant l\'horari de jornada ordinària'
      ],
      correctIndex: 0,
      explanation: 'El Protocol 2023 s\'aplica sempre que la VÍCTIMA estigui inclosa en l\'àmbit subjectiu del Protocol.'
    },
    {
      id: 't4-q16',
      difficulty: 'Mitjà',
      question: 'Quines mesures preveuen els articles 16 i 17.2 de la Llei 17/2015 per a les administracions públiques catalanes?',
      options: [
        'La composició paritària als tribunals i comissions de selecció (art. 16) i la realització d\'auditories de gènere (art. 17.2)',
        'La prohibició d\'utilitzar perfils racials policials (art. 16) i l\'obligació de lectura fàcil als documents públics (art. 17.2)',
        'L\'avaluació triennal del Protocol d\'assetjament per l\'OPPI (art. 16) i la creació d\'unitats d\'igualtat locals (art. 17.2)',
        'L\'exercici de l\'acció popular judicial amb partits polítics (art. 16) i la inversió de la càrrega de la prova (art. 17.2)'
      ],
      correctIndex: 0,
      explanation: 'Art. 16 Llei 17/2015 = paritat als tribunals de selecció; art. 17.2 = auditories de gènere. (Perfils racials 21.4, lectura fàcil 15 i acció popular 26 són de la Llei 19/2020).'
    },
    {
      id: 't4-q17',
      difficulty: 'Mitjà',
      question: 'Quin dia va ser ratificat per Acord de Govern el Protocol per a la prevenció, la detecció, l\'actuació i la resolució de situacions d\'assetjament de 2023?',
      options: [
        'El 28 de març de 2023 (aprovat a la Mesa el 9 de març de 2023)',
        'El 30 de desembre de 2020 (aprovat a la Mesa el 15 de desembre de 2020)',
        'El 21 de juliol de 2015 (aprovat a la Mesa el 7 de juliol de 2015)',
        'El 9 de març de 2024 (aprovat a la Mesa el 28 de febrer de 2024)'
      ],
      correctIndex: 0,
      explanation: 'Aprovat a la Mesa el 9 de març de 2023 i ratificat per Acord de Govern el 28 de març de 2023.'
    },
    {
      id: 't4-q18',
      difficulty: 'Difícil',
      question: 'Quina afirmació és INCORRECTA sobre els terminis i l\'estructura comparada del Tema 4?',
      options: [
        'Els terminis 5, 15 i 10 del Protocol d\'assetjament 2023 es computen en dies naturals',
        'L\'article 15.4.c de la Llei 17/2015 esmenta expressament el Cos de Bombers en relació amb els plans d\'igualtat cada 2 anys',
        'La Llei 19/2020 té 52 articles (n\'entren els Títols I–III) i la Llei 17/2015 en té 64 (n\'entren els Capítols I, III i IV)',
        'L\'avaluació triennal del Protocol 2023 correspon a l\'OPPI'
      ],
      correctIndex: 0,
      explanation: 'Els terminis del Protocol 2023 (5 dies per contactar, 15 dies per a l\'informe, 10 dies per a la resolució) són sempre DIES HÀBILS, mai naturals.'
    }
  ]
};
