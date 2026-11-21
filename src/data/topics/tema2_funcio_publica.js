export const tema2FuncioPublica = {
  id: 'tema-2',
  number: 2,
  code: 'DL 1/1997 (TU) · RDL 5/2015 (EBEP) · Llei 21/1987 · D 243/1995',
  title: 'La Funció Pública, Incompatibilitats i Règim Disciplinari',
  category: 'Legislació i Normativa — Bloc General',
  estimatedMinutes: 65,
  importance: {
    title: 'Anàlisi d\'Importància · Tema 2',
    frequency: 'Molt Alta (Màxima densitat de trampes)',
    summary:
      'El secret d\'aquest tema és no barrejar mai el Text Únic català (DL 1/1997) amb l\'EBEP estatal (RDL 5/2015). Els examinadors creuen contínuament les xifres entre ambdues normes: edat d\'accés, reserva per discapacitat, retribucions bàsiques, vacances, situacions administratives i prescripció de faltes.',
    hotTopics: [
      'Taula comparativa Text Únic vs EBEP (18/16 anys, 5%/7%, 3/2 retribucions, 1 mes/22 dies, 8/5 situacions)',
      'Permisos per defunció/malaltia (art. 48.a EBEP), naixement (19 setmanes / 32 monoparental) i assumptes propis',
      'Incompatibilitats (Llei 21/1987): percentatges 30%–50%, silenci negatiu i 75 h/any cursos',
      'Règim disciplinari (Decret 243/1995): prescripció 6a-2a-2m (TU) vs 3a-2a-6m (EBEP)'
    ],
    traps: [
      'Reserva discapacitat: FINS AL 5% al TU (màxim) vs NO INFERIOR AL 7% a l\'EBEP (mínim)!',
      'Llicència assumptes propis TU (6 mesos cada 2 anys sense sou) ≠ Dies assumptes particulars EBEP (6 dies).',
      'Prescripció faltes lleus: 2 MESOS al TU/Decret vs 6 MESOS a l\'EBEP!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · TU vs EBEP i Accés',
      title: '1. Text Únic (DL 1/1997) vs EBEP (RDL 5/2015): Personal i Accés',
      subtitle: 'Les grans diferències entre la llei catalana i la llei bàsica estatal',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '1.1 Classes de personal i límits del personal interí',
          paragraphs: [
            'A l\'àmbit d\'aplicació, l\'art. 3 del Text Únic (TU) cita 7 col·lectius i hi inclou expressament els BOMBERS; l\'art. 4 de l\'EBEP cita 8 col·lectius amb legislació específica pròpia i els bombers NO hi són. L\'art. 9.2 EBEP reserva l\'exercici de potestats públiques exclusivament a funcionaris (per això un bomber no pot ser laboral).',
            'Pel que fa al personal interí, l\'art. 10 EBEP fixa límits temporals: places vacants màxim 3 anys; substitució el temps estrictament necessari; programes temporals màxim 3 anys ampliables 12 mesos; excés o acumulació de tasques màxim 9 mesos dins d\'un període de 18 mesos. El TU (art. 124) té 3 supòsits sense aquests terminis.'
          ]
        },
        {
          type: 'text',
          heading: '1.2 Selecció, pèrdua de condició, jubilació i segona activitat',
          paragraphs: [
            'En selecció, el concurs de mèrits pot suposar màxim un 40% de la puntuació (art. 49 TU). Als tribunals del TU no hi pot participar qui hagi preparat aspirants els 2 anys anteriors (hi ha assessor lingüístic amb veu però sense vot); l\'art. 60 EBEP exclou càrrecs polítics, interins i eventuals.',
            'La pèrdua de la condició de funcionari té 6 causes al TU (inclou la defunció) i 5 a l\'EBEP (sense defunció). La jubilació forçosa és als 65 anys (prolongable fins als 70).',
            'L\'art. 41 TU regula la segona activitat: adscripció a altres llocs dins el mateix cos, localitat i grup de titulació quan es perden les condicions físiques o psíquiques per al servei actiu.'
          ]
        },
        {
          type: 'diagram',
          title: 'Radar de Divergències: Text Únic 1/1997 vs EBEP 5/2015',
          diagramType: 'public_service_map',
          caption: 'Aquesta taula visual concentra el 70% de les preguntes trampa del Tema 2.'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Per què el Bomber NO pot ser laboral i què fa l\'EBEP?',
          metaphor: 'L\'EBEP és el "llibre de mínims" de tot Espanya, i el Text Únic és el reglament detallat de casa nostra (Catalunya).',
          explanation:
            'Un bomber té condició d\'agent de l\'autoritat quan actua: pot tallar un carrer, entrar en una casa en flames o requisar un camió si cal. Com que això és "manar en nom de l\'Estat" (potestat pública), l\'EBEP obliga que sigui funcionari i prohibeix que sigui personal laboral.',
          takeaway: 'Si et pregunten per què un bomber és funcionari: art. 9.2 EBEP (exercici de potestats públiques).'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Retribucions i Permisos',
      title: '2. Retribucions, Carrera, Vacances i Permisos',
      subtitle: 'Com es cobra, com es promociona i quants dies pertoquen',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '2.1 Retribucions bàsiques i complements (TU vs EBEP)',
          paragraphs: [
            'No confondre les retribucions bàsiques! El TU (art. 102) en llista 3: sou, triennis i pagues extraordinàries (juny i desembre). En canvi, l\'EBEP (art. 23) només en llista 2: sou i triennis (situa les pagues extraordinàries en un apartat propi diferenciat).',
            'El TU (art. 103) preveu 6 retribucions complementàries: destinació, específic (només 1 per lloc de treball), productivitat (públic), gratificacions per serveis extraordinaris, complement variable (nocturnitat, festivitat i guàrdies de torn!) i carrera.'
          ]
        },
        {
          type: 'text',
          heading: '2.2 Carrera professional, medicina preventiva i ordre il·legal',
          paragraphs: [
            'Carrera professional: horitzontal (pujar de grau sense canviar de lloc), vertical (canviar de lloc) i promoció interna (requereix 2 anys d\'antiguitat; al TU màx. 65% de places per a funcionaris, mín. 20%). L\'art. 99 TU garanteix medicina preventiva gratuïta com a mínim cada 2 anys, i l\'art. 14.j bis EBEP reconeix la desconnexió digital.',
            'No confondre la resposta davant una ordre il·legal! Al TU (art. 108.b) es demana confirmació per escrit i, si persisteix la discrepància, s\'eleva al cap superior immediat (mai es compleix si és delicte); l\'EBEP (art. 54) parla d\'"infracció manifesta" i preveu posar-ho en coneixement dels òrgans d\'inspecció.'
          ]
        },
        {
          type: 'table',
          title: 'Vacances, Llicències i Permisos (EBEP 48–50 i TU 94–96)',
          subtitle: 'Xifres exactes per a examen',
          headers: ['Permís / Dret', 'Durada i Regla clau'],
          rows: [
            ['Vacances', 'TU: 1 mes | EBEP: 22 dies hàbils (dissabtes no hàbils; fins a 18 mesos fora de l\'any per baixa/maternitat)'],
            ['Malaltia greu / hospitalització (48.a)', '5 dies hàbils (1r grau) / 4 dies hàbils (2n grau)'],
            ['Defunció mateixa localitat (48.a)', '3 dies hàbils (1r grau) / 2 dies hàbils (2n grau)'],
            ['Defunció diferent localitat (48.a)', '5 dies hàbils (1r grau) / 4 dies hàbils (2n grau)'],
            ['Naixement / Adopció (art. 49 EBEP)', '19 setmanes (6 obligatòries + 11 fins 12 mesos + 2 fins 8 anys). Monoparental: 32 setmanes'],
            ['Matrimoni / Trasllat domicili', '15 dies matrimoni | 1 dia trasllat EBEP (TU: fins a 4 dies si canvies de localitat)'],
            ['Llicència assumptes propis (art. 95 TU)', 'Màxim 6 mesos cada 2 anys sense cobrar (≠ 6 dies assumptes particulars EBEP 48.k)']
          ],
          footnote: 'Lactància (<12 mesos): 1 hora diària individual no transferible. Lliure disposició TU (96.2): +2 dies al 6è trienni (arriba a 8) i +1 per cada trienni des del 8è.'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Situacions i Incompatib.',
      title: '3. Situacions Administratives i Incompatibilitats (Llei 21/1987)',
      subtitle: 'De l\'excedència per cura al càlcul del segon sou públic',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '3.1 Situacions administratives: 8 al TU vs 5 a l\'EBEP',
          paragraphs: [
            'L\'EBEP preveu 5 situacions bàsiques: servei actiu, serveis especials, servei en altres AAPP, excedència i suspensió de funcions.',
            'El Text Únic català n\'afegeix 3 més fins a 8: excedència forçosa, excedència voluntària incentivada (dura 5 anys) i expectativa de destinació (a més, el TU anomena la suspensió "suspensió d\'ocupació").'
          ]
        },
        {
          type: 'text',
          heading: '3.2 Excedències, suspensió de funcions i grau personal',
          paragraphs: [
            'No confondre els tipus d\'excedència! L\'excedència per interès particular (TU) exigeix 5 anys de serveis previs i un mínim de 2 anys de permanència; no té sou, no computa ni reserva lloc.',
            'En canvi, l\'excedència per cura de familiars dura màxim 3 anys, NO exigeix temps previ, computa a tots els efectes (triennis, carrera) i reserva el lloc de treball durant 2 anys (el 3r any reserva un lloc de mateix nivell i localitat).',
            'Suspensió: si supera 6 mesos fa perdre el lloc; la suspensió ferma dura màxim 6 anys; la provisional dura 3 mesos prorrogables 3 mesos més (només per faltes greus o molt greus). El grau personal es consolida amb 2 anys consecutius o 3 amb interrupció, i puja de 2 en 2 nivells cada 2 anys.'
          ]
        },
        {
          type: 'table',
          title: 'Llei 21/1987 d\'Incompatibilitats: Segon Lloc Públic i Activitat Privada',
          subtitle: 'Percentatges inversos al grup de classificació',
          headers: ['Grup', 'Límit màxim 2n lloc públic', 'Regles d\'Activitat Privada'],
          rows: [
            ['Grup A', '30 % de la retribució', 'Prohibit: 2 anys en assumptes on s\'hagi intervingut'],
            ['Grup B', '35 % de la retribució', 'Prohibit: participació > 10% en capital d\'empresa relacionada'],
            ['Grup C (Bombers)', '40 % de la retribució', 'Jornada privada ≤ 50% de la jornada ordinària'],
            ['Grup D', '45 % de la retribució', 'Silenci administratiu = NEGATIU (desestimat)'],
            ['Grup E', '50 % de la retribució', '8 activitats exemptes (ex. cursos ≤ 75 hores/any)']
          ],
          footnote: 'Per a bombers i personal de l\'Administració de la Generalitat, l\'autorització de compatibilitat correspon a Funció Pública.'
        },
        {
          type: 'mnemonic',
          title: 'Truc Incompatibilitats: 30 – 35 – 40 – 45 – 50',
          trick: 'Com menys sou base té el grup (A → E), més percentatge pot sumar del segon lloc públic (puja de 5 en 5!).',
          example: 'Un bomber (Grup C1) té un límit del 40% si demana un segon lloc públic compatible (ex. docència universitària associada).'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Règim Disciplinari',
      title: '4. Règim Disciplinari (Decret 243/1995, TU i EBEP)',
      subtitle: 'Faltes, sancions, procediment i la trampa de les prescripcions',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '4.1 Tipificació de faltes, sancions i procediment',
          paragraphs: [
            'El nombre de faltes molt greus canvia segons la norma: 16 al Text Únic, 15 al Decret 243/1995 i 17 a l\'EBEP. Tres faltes greus comeses en un any es converteixen en molt greu. Faltar 10 hores al mes o acumular una 3a absència injustificada en 3 mesos és falta greu; faltar 1 sol dia injustificadament és falta lleu.',
            'Sancions de suspensió de funcions: Lleu = fins a 15 dies; Greu = de més de 15 dies fins a 1 any; Molt greu = de més d\'1 any fins a menys de 6 anys, o separació del servei (definitiva).',
            'Procediment: per a faltes lleus s\'aplica el procediment sumari (terminis 5 + 5 + 3 dies). L\'ordinari té una durada màxima de 6 mesos: l\'incoa el Secretari General i les sancions per faltes molt greus les imposa el Conseller (titular del departament).'
          ]
        },
        {
          type: 'table',
          title: 'Prescripció de Faltes i Sancions: LA GRAN TRAMPA',
          subtitle: 'Text Únic / Decret 243/1995 vs EBEP',
          headers: ['Gravetat de la falta / sanció', 'Text Únic i Decret 243/1995', 'EBEP (art. 97)'],
          rows: [
            ['Molt greu', '6 anys', '3 anys'],
            ['Greu', '2 anys', '2 anys (coincideixen!)'],
            ['Lleu', '2 mesos', '6 mesos']
          ],
          footnote: 'Fixa\'t que s\'inverteixen els extrems! A més, a l\'EBEP (art. 97.1), les FALTES lleus prescriuen als 6 mesos, mentre que les SANCIONS per faltes lleus prescriuen a l\'1 any! Al TU/Decret 243/1995 tant faltes com sancions lleus prescriuen als 2 mesos.'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Resum I (Dades Clau)',
      title: '5. Resum Imprescindible (I): Divergències TU vs EBEP',
      subtitle: 'Les xifres exactes per no caure en cap trampa creuada',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · Text Únic (1/1997) vs EBEP (5/2015)',
          subtitle: 'Memoritza totes dues columnes',
          headers: ['Concepte', 'Text Únic (Catalunya)', 'EBEP (Estatal)'],
          rows: [
            ['Edat mínima accés', '18 anys (art. 45)', '16 anys (art. 56)'],
            ['Reserva discapacitat', 'Fins al 5% (màxim)', 'No inferior al 7% (mínim)'],
            ['Retribucions bàsiques', '3 (sou, triennis, pagues extres)', '2 (només sou i triennis)'],
            ['Vacances', '1 mes (art. 94)', '22 dies hàbils (art. 50)'],
            ['Pèrdua condició', '6 causes (inclou defunció)', '5 causes (sense defunció)'],
            ['Situacions admin.', '8 situacions', '5 situacions'],
            ['Prescripció faltes', '6 anys / 2 anys / 2 mesos', '3 anys / 2 anys / 6 mesos']
          ],
          footnote: 'Objectiu plantilla discapacitat: 2% en ambdues normes. Concurs oposició: concurs màxim 40%.'
        },
        {
          type: 'mnemonic',
          title: 'Regla 6-2-2 vs 3-2-6',
          trick: 'Catalunya (Text Únic): 6 anys, 2 anys, 2 mesos (comença per 6 i acaba en 2). EBEP: 3 anys, 2 anys, 6 mesos (comença per 3 i acaba en 6).',
          example: 'Les faltes greus prescriuen sempre als 2 anys tant al TU com a l\'EBEP!'
        }
      ]
    },
    {
      pageNumber: 6,
      shortLabel: 'Pàg. 6 · Resum II (Permisos i Sancions)',
      title: '6. Resum Imprescindible (II): Permisos, Incompatibilitats i Disciplina',
      subtitle: 'Totes les xifres finals del Tema 2',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · Permisos, Llei 21/1987 i Decret 243/1995',
          subtitle: 'Repàs ràpid pre-examen',
          headers: ['Bloc', 'Dades imprescindibles'],
          rows: [
            ['Interins EBEP 10', 'Vacant màx 3a | Programa 3a + 12m | Excés tasques 9m en 18m'],
            ['Defunció 48.a EBEP', 'Mateixa localitat: 3d (1r) / 2d (2n) · Diferent: 5d / 4d'],
            ['Malaltia greu 48.a', '5d (1r grau) / 4d (2n grau) · Naixement: 19 setm. (32 monoparental)'],
            ['Assumptes propis', 'TU 95: llicència fins 6m cada 2a sense sou | EBEP 48.k: 6 dies'],
            ['Incompatibilitats', 'Límit 2n lloc: A 30%, B 35%, C 40%, D 45%, E 50% | Cursos ≤ 75h/any | Silenci negatiu'],
            ['Disciplinari', 'Suspensió: Lleu ≤15d · Greu >15d–1a · Molt greu >1a–<6a · Ordinari màx 6m']
          ],
          footnote: 'Excedència cura familiars: 3 anys, computa tot, reserva lloc 2 anys. Interès particular TU: 5 anys previs + 2 permanència.'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Assumptes propis vs Assumptes particulars',
          metaphor: 'No confonguis agafar-te una "llarga excedència sense cobrar" amb agafar-te "dies solts de permís".',
          explanation:
            'Si et diuen "llicència per assumptes propis" del Text Únic (art. 95), és com demanar un permís llarg sense sou: màxim 6 MESOS cada 2 anys. Si et diuen "assumptes particulars" de l\'EBEP (art. 48.k), són els famosos 6 DIES lliures retribuïts a l\'any (més els addicionals per triennis).',
          takeaway: '6 MESOS sense cobrar (TU 95) ≠ 6 DIES cobrant (EBEP 48.k).'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't2-q1',
      difficulty: 'Fàcil',
      question: 'Quina és la reserva de places per a persones amb discapacitat segons l\'EBEP (art. 59) en comparació amb el Text Únic català?',
      options: [
        'No inferior al 7% a l\'EBEP; fins al 5% al Text Únic',
        'Fins al 7% a l\'EBEP; no inferior al 5% al Text Únic',
        'Exactament el 2% en ambdues normes',
        'No inferior al 10% a l\'EBEP; fins al 7% al Text Únic'
      ],
      correctIndex: 0,
      explanation: 'L\'EBEP fixa un mínim no inferior al 7%, mentre que el Text Únic català fixa un màxim de fins al 5%. El 2% és l\'objectiu global de plantilla.'
    },
    {
      id: 't2-q2',
      difficulty: 'Mitjà',
      question: 'Quin és el termini màxim de nomenament d\'un funcionari interí per excés o acumulació de tasques segons l\'art. 10 de l\'EBEP?',
      options: [
        '9 mesos dins d\'un període de 18 mesos',
        '6 mesos dins d\'un període de 12 mesos',
        '3 anys prorrogables per 12 mesos',
        '12 mesos dins d\'un període de 24 mesos'
      ],
      correctIndex: 0,
      explanation: 'Excés o acumulació de tasques: màxim 9 mesos dins de 18 mesos. (3 anys és per vacants, i 3 anys + 12 mesos per programes temporals).'
    },
    {
      id: 't2-q3',
      difficulty: 'Mitjà',
      question: 'Quines són les retribucions bàsiques segons l\'article 23 de l\'EBEP?',
      options: [
        'Només el sou i els triennis',
        'El sou, els triennis i les pagues extraordinàries',
        'El sou, el complement de destinació i l\'específic',
        'El sou, els triennis i el complement variable'
      ],
      correctIndex: 0,
      explanation: 'A l\'EBEP (art. 23) només són retribucions bàsiques el sou i els triennis; en canvi, el Text Únic (art. 102) hi inclou les 3: sou, triennis i pagues extraordinàries.'
    },
    {
      id: 't2-q4',
      difficulty: 'Fàcil',
      question: 'Quants dies hàbils de permís pertoquen per defunció d\'un familiar de 1r grau en la mateixa localitat segons l\'art. 48.a de l\'EBEP?',
      options: [
        '3 dies hàbils',
        '5 dies hàbils',
        '2 dies hàbils',
        '4 dies hàbils'
      ],
      correctIndex: 0,
      explanation: 'Defunció mateixa localitat: 3 dies hàbils (1r grau) i 2 dies hàbils (2n grau). En diferent localitat: 5 dies (1r) i 4 dies (2n).'
    },
    {
      id: 't2-q5',
      difficulty: 'Difícil',
      question: 'Quina és la prescripció de les faltes molt greus, greus i lleus segons el Text Únic (DL 1/1997) i el Decret 243/1995?',
      options: [
        'Molt greus: 6 anys · Greus: 2 anys · Lleus: 2 mesos',
        'Molt greus: 3 anys · Greus: 2 anys · Lleus: 6 mesos',
        'Molt greus: 6 anys · Greus: 3 anys · Lleus: 6 mesos',
        'Molt greus: 4 anys · Greus: 2 anys · Lleus: 1 mes'
      ],
      correctIndex: 0,
      explanation: 'Al Text Únic i Decret 243/1995 són 6 anys / 2 anys / 2 mesos. La combinació 3 anys / 2 anys / 6 mesos correspon a l\'EBEP.'
    },
    {
      id: 't2-q6',
      difficulty: 'Mitjà',
      question: 'Dins de quina Llei i amb quin límit màxim de retribució pot un funcionari del Grup C exercir un segon lloc públic compatible?',
      options: [
        'Llei 21/1987, fins al 40% de la retribució',
        'Llei 21/1987, fins al 30% de la retribució',
        'Decret 243/1995, fins al 45% de la retribució',
        'Llei 21/1987, fins al 50% de la retribució'
      ],
      correctIndex: 0,
      explanation: 'La Llei 21/1987 fixa: A 30%, B 35%, C 40%, D 45%, E 50%.'
    },
    {
      id: 't2-q7',
      difficulty: 'Mitjà',
      question: 'Quin efecte té el silenci administratiu en una sol·licitud de compatibilitat per a una activitat privada segons la Llei 21/1987?',
      options: [
        'Silenci negatiu (desestimatori)',
        'Silenci positiu passat 1 mes',
        'Silenci positiu passats 3 mesos',
        'Caducitat automàtica sense efecte'
      ],
      correctIndex: 0,
      explanation: 'En matèria d\'incompatibilitats, el silenci administratiu és sempre negatiu.'
    },
    {
      id: 't2-q8',
      difficulty: 'Difícil',
      question: 'Quantes situacions administratives preveu el Text Únic (DL 1/1997) que no apareixen llistades com a bàsiques a l\'EBEP?',
      options: [
        '8 en total al TU (afegeix excedència forçosa, voluntària incentivada i expectativa de destinació)',
        '6 en total al TU (afegeix únicament la situació d\'expectativa de destinació per reestructuració)',
        '5 en total al TU (coincideix exactament amb les cinc situacions administratives bàsiques de l\'EBEP)',
        '7 en total al TU (afegeix la situació de segona activitat operativa i la d\'excedència forçosa)'
      ],
      correctIndex: 0,
      explanation: 'L\'EBEP en té 5 i el TU 8 (afegeix excedència forçosa, voluntària incentivada [5 anys] i expectativa de destinació).'
    },
    {
      id: 't2-q9',
      difficulty: 'Fàcil',
      question: 'Quina és la durada màxima del permís per naixement o adopció a l\'article 49 de l\'EBEP (i en cas de família monoparental)?',
      options: [
        '19 setmanes (32 setmanes en família monoparental)',
        '16 setmanes (24 setmanes en família monoparental)',
        '20 setmanes (30 setmanes en família monoparental)',
        '18 setmanes (28 setmanes en família monoparental)'
      ],
      correctIndex: 0,
      explanation: 'Art. 49 EBEP vigent: 19 setmanes (6 obligatòries + 11 fins 12 mesos + 2 fins 8 anys), i 32 setmanes en el cas monoparental.'
    },
    {
      id: 't2-q10',
      difficulty: 'Difícil',
      question: 'Quina sanció correspon a una falta greu i a una falta molt greu de suspensió de funcions segons el règim disciplinari?',
      options: [
        'Greu: >15 dies fins a 1 any · Molt greu: >1 any fins a <6 anys (o separació del servei)',
        'Greu: 1 mes fins a 2 anys · Molt greu: 2 anys fins a 6 anys',
        'Greu: fins a 15 dies · Molt greu: fins a 3 anys',
        'Greu: >15 dies fins a 6 mesos · Molt greu: >6 mesos fins a 4 anys'
      ],
      correctIndex: 0,
      explanation: 'Lleu ≤ 15 dies; Greu > 15 dies fins a 1 any; Molt greu > 1 any fins a < 6 anys (o separació definitiva).'
    },
    {
      id: 't2-q11',
      difficulty: 'Mitjà',
      question: 'Quina afirmació és INCORRECTA respecte a les diferències entre el Text Únic (DL 1/1997) i l\'EBEP (RDL 5/2015)?',
      options: [
        'L\'edat mínima d\'accés a la funció pública és de 16 anys al Text Únic català i de 18 anys a l\'EBEP',
        'El Text Únic inclou expressament els bombers al seu article 3, mentre que l\'EBEP no els inclou a l\'article 4 de legislació específica pròpia',
        'Les vacances ordinàries són d\'1 mes al Text Únic i de 22 dies hàbils a l\'EBEP',
        'La pèrdua de la condició de funcionari té 6 causes al Text Únic (inclou defunció) i 5 a l\'EBEP'
      ],
      correctIndex: 0,
      explanation: 'És a l\'inrevés: l\'edat mínima d\'accés és de 18 anys al Text Únic (art. 45) i de 16 anys a l\'EBEP (art. 56).'
    },
    {
      id: 't2-q12',
      difficulty: 'Difícil',
      question: 'Segons l\'article 97.1 de l\'EBEP, quin és el termini de prescripció de les FALTES lleus i de les SANCIONS imposades per faltes lleus?',
      options: [
        'Les faltes lleus prescriuen als 6 mesos i les sancions per faltes lleus a l\'1 any',
        'Tant les faltes com les sancions lleus prescriuen als 2 mesos',
        'Tant les faltes com les sancions lleus prescriuen als 6 mesos',
        'Les faltes lleus prescriuen als 2 mesos i les sancions per faltes lleus als 6 mesos'
      ],
      correctIndex: 0,
      explanation: 'Trampa clàssica de l\'art. 97.1 EBEP: faltes lleus = 6 mesos; sancions lleus = 1 any (mentre que al TU/Decret 243/1995 són 2 mesos per a totes dues).'
    },
    {
      id: 't2-q13',
      difficulty: 'Difícil',
      question: 'Quina diferència hi ha entre l\'excedència voluntària per interès particular (TU) i l\'excedència per cura de familiars?',
      options: [
        'La d\'interès particular exigeix 5 anys de serveis previs i no reserva lloc; la de cura de familiars no exigeix temps previ, computa a tots els efectes i reserva el lloc 2 anys (màxim 3 anys)',
        'La d\'interès particular exigeix 2 anys de serveis previs, dura com a màxim 3 anys i reserva el mateix lloc de treball durant els primers 2 anys',
        'La de cura de familiars exigeix 2 anys de serveis efectius previs, té una durada màxima de 5 anys i no computa a efectes de triennis ni carrera',
        'Cap de les dues excedències computa a efectes de triennis, grau personal o drets passius ni comporta reserva del lloc de treball en cap període'
      ],
      correctIndex: 0,
      explanation: 'Interès particular (TU): 5 anys previs, mínim 2 de permanència, sense sou, còmput ni reserva. Cura de familiars: màx. 3 anys, sense temps previ, computa tot i reserva el lloc durant 2 anys.'
    },
    {
      id: 't2-q14',
      difficulty: 'Mitjà',
      question: 'Quants anys de serveis en un mateix nivell calen per consolidar el grau personal i quina és la regla d\'ascens de nivells?',
      options: [
        '2 anys consecutius o 3 amb interrupció; puja de 2 en 2 nivells cada 2 anys (amb límit de l\'interval del cos)',
        '1 any consecutiu o 2 amb interrupció; puja d\'1 en 1 nivell cada any de servei efectiu fins al màxim del grup',
        '3 anys consecutius o 5 amb interrupció; puja de 2 en 2 nivells cada 3 anys sense superar el límit de l\'interval',
        '2 anys consecutius en el mateix lloc sense interrupció; puja de 2 en 2 nivells cada 4 anys de serveis prestats'
      ],
      correctIndex: 0,
      explanation: 'El grau personal es consolida amb 2 anys consecutius o 3 amb interrupció en un lloc d\'aquell nivell o superior, i avança de 2 en 2 nivells cada 2 anys.'
    },
    {
      id: 't2-q15',
      difficulty: 'Difícil',
      question: 'Quina afirmació és INCORRECTA sobre el règim d\'incompatibilitats (Llei 21/1987)?',
      options: [
        'Les activitats privades compatibles poden ocupar fins al 60% de la jornada ordinària i permeten participar fins al 25% en el capital de l\'empresa relacionada',
        'Es prohibeix intervenir en assumptes privats relacionats amb el lloc públic durant els 2 anys posteriors al cessament',
        'Estan exempts d\'autorització els cursos o conferències fins a un màxim de 75 hores l\'any',
        'Per al personal de la Generalitat i bombers, l\'òrgan competent per autoritzar la compatibilitat és Funció Pública'
      ],
      correctIndex: 0,
      explanation: 'La jornada privada ha de ser ≤ 50% de l\'ordinària (no 60%) i la participació en el capital d\'una empresa relacionada no pot superar el 10% (no 25%).'
    },
    {
      id: 't2-q16',
      difficulty: 'Mitjà',
      question: 'Quina és la diferència entre la "llicència per assumptes propis" de l\'art. 95 del Text Únic i els "dies per assumptes particulars" de l\'art. 48.k de l\'EBEP?',
      options: [
        'La llicència del TU dura fins a 6 mesos cada 2 anys sense retribució; els assumptes particulars de l\'EBEP són 6 dies retribuïts a l\'any',
        'Totes dues figures reconeixen 6 dies retribuïts a l\'any natural i s\'utilitzen com a denominacions equivalents en ambdues normes',
        'La llicència del TU té una durada màxima de 6 dies sense retribució i l\'article 48.k de l\'EBEP atorga fins a 6 mesos amb sou íntegre',
        'La llicència del TU només s\'aplica als funcionaris interins per motius formatius i l\'EBEP la reserva exclusivament als de carrera'
      ],
      correctIndex: 0,
      explanation: 'No confondre: Llicència per assumptes propis (art. 95 TU) = màxim 6 mesos cada 2 anys sense cobrar; Assumptes particulars (art. 48.k EBEP) = 6 dies lliures retribuïts.'
    },
    {
      id: 't2-q17',
      difficulty: 'Difícil',
      question: 'Què passa amb el lloc de treball d\'un funcionari quan pateix una suspensió de funcions, i quina és la durada màxima de la suspensió provisional i de la suspensió ferma?',
      options: [
        'Si la suspensió supera els 6 mesos fa perdre el lloc; la provisional dura màxim 3 mesos (prorrogable 3 mesos més) i la ferma màxim 6 anys',
        'Només fa perdre el lloc si supera els 2 anys; la provisional dura fins a 1 any i la ferma fins a 10 anys',
        'La suspensió provisional es pot acordar fins i tot per faltes lleus i dura 6 mesos sense pròrroga',
        'Cap suspensió fa perdre la destinació ni l\'antiguitat'
      ],
      correctIndex: 0,
      explanation: 'Suspensió > 6 mesos = pèrdua del lloc de treball. Suspensió provisional (només faltes greus/molt greus) = 3 mesos prorrogables 3 mesos més. Suspensió ferma = màxim 6 anys.'
    },
    {
      id: 't2-q18',
      difficulty: 'Fàcil',
      question: 'Segons el procediment disciplinari del Decret 243/1995, quin termini màxim té el procediment ordinari i qui imposa les sancions per faltes molt greus?',
      options: [
        'Durada màxima de 6 mesos; les sancions per faltes molt greus les imposa el Conseller (titular del departament)',
        'Durada màxima de 3 mesos; les sancions per faltes molt greus les imposa el Director General de Bombers',
        'Durada màxima de 12 mesos; les imposa sempre el President de la Generalitat',
        'S\'aplica el procediment sumari (5+5+3 dies) també per a les faltes molt greus'
      ],
      correctIndex: 0,
      explanation: 'El procediment ordinari dura com a màxim 6 mesos (l\'incoa el Secretari General i les sancions per faltes molt greus les imposa el Conseller). El procediment sumari (5+5+3 dies) és per a faltes lleus.'
    },
    {
      id: 't2-q19',
      difficulty: 'Mitjà',
      question: 'A quin personal s’aplica el Reglament disciplinari aprovat pel Decret 243/1995?',
      options: [
        'Al personal funcionari, aspirant, interí, eventual i amb contracte administratiu dels departaments de la Generalitat',
        'Als alts càrrecs electes, als membres del Govern de la Generalitat i als diputats del Parlament de Catalunya',
        'Al personal laboral fix i temporal de totes les empreses privades contractistes de serveis amb la Generalitat',
        'Exclusivament als funcionaris de carrera amb nomenament definitiu i als alts càrrecs nomenats per Decret del Govern'
      ],
      correctIndex: 0,
      explanation: 'L’àmbit del Decret 243/1995 s’aplica al personal vinculat als departaments de l’Administració de la Generalitat (funcionari, aspirant, interí, eventual i contracte administratiu). Els càrrecs electes i el personal d’empreses privades en queden fora.'
    }
  ]
};
