export const tema3AssistenciesTecniques = {
  id: 'tema-16',
  number: 16,
  code: 'MAN.ATXX.000',
  title: 'Intervenció en assistències tècniques',
  category: 'Manual Operatiu SGO — Assistències Tècniques',
  estimatedMinutes: 45,
  importance: {
    title: "Radar d'Examen — Tema 16 (MAN.ATXX.000 v.1): Assistències Tècniques",
    frequency: 'Alta (3-4 preguntes sobre motoserra, animals i obertura d’habitatges)',
    summary:
      "Manual estructurat en 5 capítols operatius: 1. Introducció, 2. Intervenció amb animals, 3. Intervencions amb motoserra, 4. Accés a habitatges i 5. Altres assistències (alarmes, sanejament de façanes i neteja de calçada). Inclou 4 pàgines de desenvolupament per capítols + 2 pàgines finals de Resum Executiu.",
    hotTopics: [
      'Cap. 2 (Animals): Gats en alçada (esperar mínim 24 h), porcs (lligam al morro), cavalls/vaques (mai pel coll), serps (autòctones sac de roba vs. exòtiques recipient rígid) i himenòpters (de nit).',
      'Cap. 3 (Motoserra): Parts de la cadena (pas en polzades = distància 3 reblons / 2; galga en mm), AGO (Zona A = 2,5 × alçada arbre; Zona B = 2 m), tall vertical a 1 m i EPI amb mascareta FFP3.',
      'Cap. 4 (Accés a habitatges): Inviolabilitat del domicili (Art. 18.2 CE), parts del pany (bombí, lleva, resbaló) i eines destructives vs. no destructives.',
      'Cap. 5 (Altres assistències): Sanejament de façanes amb AEA (cistella sempre per sobre o lateral de l’element inestable, mai a sota) i neteja de calçada (sepiolita, mai aigua a pressió sobre hidrocarburs cap a clavegueram).'
    ],
    traps: [
      'Confondre Zona A (2,5 × alçada de l’arbre, on només hi ha el binomi) amb Zona B (radi de 2 m al voltant del motoserrista, on només hi ha l’operador!).',
      'Passar el pas de cadena a mil·límetres en comptes de polzades (Pas = polzades; Galga = mm).',
      'Activar la intervenció per un gat dalt d’un arbre o teulada abans que hagin passat 24 hores.'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-2 Animals',
      title: '1–2. Introducció i Intervenció amb Animals (Domèstics, Granja, Exòtics i Abelles)',
      subtitle: 'Tècniques de captura física/química, regla de les 24 h en gats i protocols per espècie.',
      blocks: [
        {
          type: 'text',
          heading: '1. Introducció i 2.1–2.3. Principis Generals i Captura d’Animals',
          paragraphs: [
            "Les assistències tècniques agrupen totes aquelles intervencions de salvament i protecció de béns que no tenen com a escenari un incendi ni un accident de trànsit: rescat d'animals, caiguda d'arbres sobre vies, obertura forçada d'habitatges, sanejament d'elements constructius amb risc de caiguda i neteja de calçada.",
            "En les intervencions amb animals (Capítol 2), la prioritat és sempre la seguretat dels bombers i ciutadans, minimitzant l'estrès de l'animal (que pot passar de la fugida a l'agressivitat). Es distingeix entre Captura Física (perxa de llaç, xarxes, gàbies trampa, guants reforçats, mantes) i Captura Química (dards anestèsics amb sarbatana o rifle, que NOMÉS pot preparar i disparar personal veterinari qualificat)."
          ]
        },
        {
          type: 'table',
          title: '2.4. Protocol Operatiu Específic per Espècie Animal (MAN.ATXX.000 Secció 2.4)',
          subtitle: 'Criteris d’activació, immobilització i transport segons el manual oficial',
          headers: ['Espècie (Secció)', 'Protocol d’Immobilització i Manipulació', 'Regla Crítica / Parany d’Examen'],
          rows: [
            ['2.4.1. Gossos', 'Aproximació lateral sense mirar fixament als ulls. Ús de perxa de captura (llaç al coll), morrió de cinta o lectura de microxip.', 'En gossos potencialment perillosos (GPP) o agressius, treballar en binomi amb perxa rígida.'],
            ['2.4.2. Gats', 'Ús de manta gruixuda o tovallola per cobrir-lo (la foscor el calma) i introducció en cistell de transport.', 'REGLA 24 HORES: Si un gat és dalt d’un arbre o teulada sense perill imminent, NO s’activa el servei fins que porti MÍNIM 24 HORES (la majoria baixen sols de nit).'],
            ['2.4.3. Suids (Porcs / Senglars) i Òvids', 'El porc s’immobilitza amb un lligam o llaç al MORRO (maxil·lar superior, darrere els ullals): estira cap enrere i queda clavat.', 'Ovelles i cabres: subjectar pel coll/barbeta i la gropa; MAI estirar-les per la llana ni per les banyes.'],
            ['2.4.4. Èquids (Cavalls) i Bòvids (Vaques)', 'Tapar els ulls amb una roba per calmar-los. En rescat amb grua (pou/piscina), passar cintes amples per sota del tòrax i l’abdomen.', 'PROHIBIT traccionar o hissar cavalls/vaques pel coll, les potes o la cua! Aproximar-se sempre per davant/lateral (mai per darrere: coça).'],
            ['2.4.5. Fauna Salvatge (Cabirols, Senglars)', 'Minimitzar sorolls i llums; cobrir el cap i limitar estímuls per evitar la miopatia de captura (mort per estrès agut).', 'Coordinar sempre amb el cos d’Agents Rurals i centres de recuperació de fauna.'],
            ['2.4.6. Aus', 'Cobrir amb manta o sac lleuger i subjectar les ales plegades contra el cos (i el bec/urpes en rapinyaires).', 'En aus aquàtiques o cigonyes, protegir els ulls dels bombers del bec llarg.'],
            ['2.4.7. Rèptils i Exòtics (Serps)', 'Ús de ganxo herpetològic o pinça llarga, sense estrènyer la columna vertebral.', 'DIFERÈNCIA CLAU: Serp AUTÒCTONA → dins d’un SAC DE ROBA lligat. Serp EXÒTICA/VERINOSA → dins d’un RECIPIENT RÍGID tancat!'],
            ['2.4.8. Himenòpters (Abelles, Vespes, Vespa velutina)', 'EPI complet d’apicultor (granota blanca, careta amb reixeta, guants segellats amb cinta). Actuar preferentment al capvespre o DE NIT.', 'L’abella (Apis mellifera) és espècie protegida: es recull l’eixam en caixa amb la reina (no es mata amb insecticida, a diferència de la vespa asiàtica en risc).']
          ],
          footnote: 'Memoritza: Gat = esperar 24 h | Porc = llaç al morro | Cavall = cintes tòrax/abdomen | Serp autòctona = sac de roba vs. exòtica = recipient rígid.'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 3 Motoserra',
      title: '3. Intervencions amb Motoserra: Mecànica, Zonatge (AGO) i Tècniques de Tall',
      subtitle: 'Pas i galga de cadena, elements de seguretat, Zona A (2,5×h) i Zona B (2 m), tensions i EPI FFP3.',
      blocks: [
        {
          type: 'table',
          title: '3.2. Parts de la Motoserra, Paràmetres de la Cadena i Elements de Seguretat',
          subtitle: 'Definició tècnica exacta del manual MAN.ATXX.000 (Secció 3.2)',
          headers: ['Element / Paràmetre', 'Definició i Unitats Oficials', 'Funció Operativa / Seguretat'],
          rows: [
            ['1. Pas de cadena (Pitch)', 'Distància entre 3 reblons consecutius dividida entre 2. Es mesura en POLZADES (ex: 3/8", 0.325", 0.404").', 'Ha de coincidir exactament amb el pinyó d’arrossegament i l’estrella de la punta de l’espasa.'],
            ['2. Galga (Gruix)', 'Gruix de la baula motriu que entra dins del canal de l’espasa. Es mesura en MIL·LÍMETRES (ex: 1,3 mm, 1,5 mm, 1,6 mm).', 'Si la galga no coincideix amb el rail de l’espasa, la cadena balla o es gripa.'],
            ['3. Baules de la cadena', '3 tipus: 1) Baula motriu (arrossega i lubrica), 2) Baula d’unió, 3) Dent de tall (tallant superior + limitador de profunditat).', 'El limitador de profunditat regula el gruix de l’encenall i evita que la dent es clavi de cop.'],
            ['4. Fre de cadena', 'S’activa manualment amb el dors del canell esquerre o automàticament per INÈRCIA en cas de rebot (kickback).', 'S’ha de posar SEMPRE abans d’engegar la motoserra i cada cop que es camina amb el motor en marxa.'],
            ['5. Captador de cadena i Fiador d’accelerador', 'Pivó metàl·lic/plàstic sota el càrter i gallet doble a l’empunyadura.', 'El captador atrapa la cadena si es trenca; el fiador impedeix que la cadena giri si no s’agafa l’empunyadura amb tota la mà.']
          ],
          footnote: 'El rebot o "kickback" es produeix quan el QUART SUPERIOR de la punta de l’espasa toca fusta o un obstacle: l’espasa surt disparada cap a la cara de l’operador!'
        },
        {
          type: 'text',
          heading: '3.3–3.4. Zonatge (AGO: Zona A vs. Zona B) i Tècniques de Tall',
          paragraphs: [
            "No confondre! Zona A vs. Zona B (Àrea de Gestió Operativa): La ZONA A és el perímetre d'abatiment (radi = 2,5 × alçada de l'arbre), on només pot entrar el binomi de treball. La ZONA B és el radi immediat d'acció de la màquina (2 metres al voltant del motoserrista): mentre la cadena gira, NINGÚ més (ni el company del binomi!) pot entrar dins d'aquests 2 metres.",
            "Tall vertical d'abatiment (a 1 metre del terra en arbres tensats o descalçats): 1r Entall de direcció (falca a 45°, profunditat 1/4 a 1/3 del diàmetre); 2n Tall d'abatiment horitzontal lleugerament per sobre de la base de l'entall deixant sempre la FRONTISSA (10% del diàmetre, que guia la caiguda i MAI s'ha de tallar); 3r Vies d'escapament a 45° cap enrere.",
            "Tall horitzontal de tronc recolzat (en voladís o en pont): SEMPRE s'inicia amb un 1r tall d'alleujament (1/3 del diàmetre) a la ZONA DE COMPRESSIÓ (on la fusta es tanca i pinçaria l'espasa) i s'acaba amb el 2n tall definitiu (2/3) a la ZONA DE TRACCIÓ (on s'obre)."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Regla Mnemotècnica · AGO (2,5×h / 2 m) i Talls de Motoserra',
          acronym: 'ZONA A = 2,5 × h (Binomi)   |   ZONA B = 2 m (NOMÉS Motoserrista)',
          trick:
            "• En tronc en terra (pont o voladís): primer alleuja 1/3 on s'AIXAFA (Compressió) i després talla 2/3 on s'OBRE (Tracció).\n• En abatiment vertical: deixa sempre un 10% de FRONTISSA i fuig per una de les dues vies d'escapament a 45° cap enrere.",
          example: 'Tronc recolzat als dos extrems com un pont: la part de dalt es comprimeix i la de baix es tracciona → 1r tall per DALT (1/3) i 2n tall per BAIX (2/3).'
        },
        {
          type: 'text',
          heading: '3.5. EPI Obligatori de Motoserrista (Inclou FFP3)',
          paragraphs: [
            "L'EPI específic per operar amb motoserra (secció 3.5 de MAN.ATXX.000) inclou casc amb pantalla facial de malla i protectors auditius, ulleres de seguretat i MASCARETA FFP3 (contra pols de serradures, espores fúngiques i fums de motor de 2 temps).",
            "Es completa amb jaqueta, guants anticall, pantalons o zahones anticall (amb fibres llargues que embussen el pinyó a l'instant en cas de contacte) i botes de seguretat amb puntera i protecció anticall."
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 4 Habitatges',
      title: '4. Accés a Habitatges: Marc Legal, Parts del Pany i Tècniques d’Obertura',
      subtitle: 'Inviolabilitat del domicili (Art. 18.2 CE), valoració d’urgència i eines no destructives vs. destructives.',
      blocks: [
        {
          type: 'text',
          heading: '4.1–4.2. Marc Legal d’Entrada en Domicili i Valoració d’Urgència',
          paragraphs: [
            "L'article 18.2 de la Constitució Espanyola garanteix la inviolabilitat del domicili: ningú no hi pot entrar sense el consentiment del titular o resolució judicial, EXCEPTE en cas de flagrant delicte o estat de necessitat / força major per evitar danys imminents i greus a les persones o béns (Llei Orgànica 4/2015 de Seguretat Ciutadana i Llei 5/1994).",
            "Sempre que no sigui una emergència vital immediata (foc/fum a l'interior o persona inconscient visible), cal requerir la presència policial (Mossos d'Esquadra o Policia Local) abans d'obrir i prioritzar la via d'accés que causi el MENOR DANY possible a la propietat."
          ]
        },
        {
          type: 'table',
          title: '4.3–4.4. Elements del Pany i Tècniques d’Obertura d’Habitatges',
          subtitle: 'Classificació d’accessos i eines del manual MAN.ATXX.000',
          headers: ['Element / Tècnica', 'Composició i Funcionament', 'Aplicació Operativa'],
          rows: [
            ['Parts del Cilindre (Bombí Europeu)', 'Cos, rotor, pitons i contrapitons amb molles, embragatge i LLEVA central (la peça que gira i mou el forrellat).', 'Si hi ha una clau posada per dins i el bombí no és de doble embragatge, no es pot girar amb una altra clau des de fora.'],
            ['Parts del Pany', '1) Resbaló o picaporta (bisellat, s’obre sense haver girat la clau amb radiografia/targeta) i 2) Forrellat o paletó (accionat amb voltes de clau).', 'Si la porta només s’ha tancat de cop ("de golpet"), només actua el resbaló!'],
            ['1. Accés per Finestra o Balcó (Prioritari)', 'Accés amb escala extensible o AEA per finestra corredissa, oscil·lobatent o persiana.', 'És l’opció menys destructiva si la porta està tancada amb voltes de clau.'],
            ['2. Obertura No Destructiva (Resbaló)', 'Targeta plàstica / làmina de mica (radiografia), agulla o espàtula per fer lliscar el resbaló bisellat.', 'Ràpida i amb zero danys quan la porta no té la clau girada.'],
            ['3. Obertura Destructiva del Bombí', 'Trencament del bombí amb clau grifa/extractor ("partidor de bombins"), fresat/trepat dels pitons amb broca de cobalt o extracció del rotor amb cargol d’extracció.', 'Un cop extret el bombí, es gira la lleva interior amb una clau d’estrella/tornavís per retirar els forrellats.'],
            ['4. Obertura Forçada Pesada (Emergència Vital)', 'Pota de cabra (Halligan), маll, separador hidràulic o serra de sabre/radial per tallar frontisses o forrellats.', 'Només en emergència vital imminent (incendi interior o aturada cardiorespiratòria).']
          ],
          footnote: 'Prioritat SGO en obertura d’habitatge: 1r Finestra/balcó sense danys → 2n Resbaló amb mica → 3r Extracció/fresat només del bombí → 4t Forçament d’estructura en risc vital.'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 5 Façanes i Calçada',
      title: '5. Altres Assistències: Alarmes, Sanejament de Façanes i Neteja de Calçada',
      subtitle: 'Desconnexió d’alarmes, posicionament d’AEA en sanejament i ús d’absorbents en vessaments.',
      blocks: [
        {
          type: 'table',
          title: '5.1–5.3. Protocols d’Intervenció en Altres Assistències Tècniques',
          subtitle: 'Criteris operatius i de seguretat del Capítol 5 de MAN.ATXX.000',
          headers: ['Tipus d’Assistència', 'Procediment Operatiu SGO', 'Norma de Seguretat Imprescindible'],
          rows: [
            ['5.1. Desconnexió d’Alarmes', 'Verificació prèvia d’absència d’incendi o intrusió (en coordinació amb Policia). Accés a la sirena exterior amb escala o AEA per desconnectar bateria i alimentació.', 'Protecció auditiva obligatòria (taps o orelletes) abans d’aproximar-se a la sirena acústica i tall de tensió.'],
            ['5.2. Sanejament de Façanes i Cobertes', 'Balisament immediat de la vorera/via pública a la vertical de caiguda. Retirada de cornises, teules, vidres o rètols inestables cap a l’interior de la cistella o caiguda controlada.', 'POSICIONAMENT DE L’AEA: La cistella de l’autoescala s’ha de situar sempre PER SOBRE o al LATERAL de l’element a sanejar, MAI a sota ni amb els braços de l’escala sota la vertical de caiguda!'],
            ['5.3. Neteja de Calçada (Vessaments)', 'Senyalització i protecció amb el vehicle autobomba. Absorció d’olis, gasoil o líquids refrigerants amb SEPIOLITA (terra absorbent) i recollida mecànica amb pala i escombra.', 'PROHIBIT projectar aigua a pressió sobre taques d’oli o hidrocarburs per enviar-los al clavegueram (contamina la xarxa i estén la pel·lícula relliscosa!).']
          ],
          footnote: 'En sanejament de façana: abans de fer caure qualsevol fragment a la via pública, un bomber a terra ha de vigilar i confirmar que el perímetre balisat està 100% buit.'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · 📌 Resum 1/2 (Xifres)',
      title: 'Resum Final (1/2): Taula Síntesi de Dades Numèriques i Mesures (MAN.ATXX.000)',
      subtitle: 'Totes les distàncies, temps, unitats i regles numèriques del Tema 16 per memoritzar.',
      blocks: [
        {
          type: 'table',
          title: 'Dades Numèriques i Regles Fixes d’Examen — Tema 16 (Assistències Tècniques)',
          subtitle: 'Síntesi d’alta densitat de totes les xifres del manual',
          headers: ['Concepte / Maniobra', 'Valor Oficial (MAN.ATXX.000)', 'Detall Clau d’Examen'],
          rows: [
            ['1. Temps d’espera per rescatar un gat en alçada', 'Mínim 24 hores', 'Si no hi ha risc imminent, s’esperen 24 h perquè solen baixar sols de nit'],
            ['2. Pas de cadena de motoserra', 'En POLZADES (distància entre 3 reblons / 2)', 'Exemples: 3/8", 0.325", 0.404"'],
            ['3. Galga de cadena de motoserra', 'En MIL·LÍMETRES (mm)', 'Gruix de la baula motriu que entra al canal de l’espasa (1,3 a 1,6 mm)'],
            ['4. Zona A de seguretat en tala (AGO)', 'Radi = 2,5 × Alçada de l’arbre', 'Perímetre d’abatiment on només pot estar el binomi de treball'],
            ['5. Zona B de seguretat en motoserra', 'Radi = 2 metres al voltant de l’operador', 'Dins la Zona B NOMÉS hi pot haver el motoserrista (ni tan sols el binomi!)'],
            ['6. Alçada del tall vertical en arbre tensat', 'A 1 metre del terra', 'Permet treballar en posició ergonòmica i allunyat de pedres/terra'],
            ['7. Entall de direcció i Frontissa d’abatiment', 'Angle ~45° (profunditat 1/4–1/3 Ø) | Frontissa = 10% Ø', 'La frontissa guia la caiguda de l’arbre i MAI s’ha de tallar del tot'],
            ['8. Vies d’escapament en abatiment d’arbre', '2 vies a 45° cap enrere (oposades a la caiguda)', 'Quan l’arbre comença a caure: retirar motoserra, posar fre i sortir a 45°'],
            ['9. Proporció tall horitzontal (Compressió / Tracció)', '1r tall Compressió (1/3 Ø) → 2n tall Tracció (2/3 Ø)', 'Evita que el tronc es tanqui i pinci l’espasa de la motoserra'],
            ['10. Protecció respiratòria en l’EPI de motoserra', 'Mascareta FFP3', 'Obligatòria juntament amb casc, pantalla, protectors auditius, pantalons i botes anticall']
          ],
          footnote: 'Pàgina 1 de 2 del Resum Executiu del Tema 16 (MAN.ATXX.000).'
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · 📌 Resum 2/2 (Punts Clau)',
      title: 'Resum Final (2/2): Maniobres Crítiques i Paranys del Tribunal (MAN.ATXX.000)',
      subtitle: 'Checklist ràpid de seguretat en animals, motoserra, habitatges i sanejaments.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Els 6 Paranys Clàssics del Tribunal al Tema 16',
          acronym: 'SERPS (Sac vs Rígid) | CAVALL (Mai coll) | REBOT (Quart superior) | COMPRESSIÓ (1r) | AEA (A dalt) | SEPIOLITA',
          trick:
            "• SERPS: Autòctona → Sac de roba lligat | Exòtica/verinosa → Recipient rígid tancat.\n• ANIMALS: Porc → llaç al morro | Cavall/vaca → cintes tòrax/abdomen (MAI coll/potes) | Captura química → NOMÉS veterinari.\n• MOTOSERRA: Rebot = quart superior de la punta | Tronc = 1r Compressió (1/3), 2n Tracció (2/3).\n• SANEJAMENT AEA i CALÇADA: Cistella AEA per sobre o lateral | Vessaments d'oli = sepiolita en sec (MAI aigua a pressió).",
          example: 'Si et pregunten qui pot entrar dins dels 2 metres (Zona B) per ajudar el motoserrista mentre talla: NINGÚ (0 persones a menys de 2 m).'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q16-1',
      difficulty: 'Fàcil',
      question: "Segons el manual MAN.ATXX.000, quines són les dimensions de la Zona A i de la Zona B en una intervenció d'abatiment d'arbres amb motoserra?",
      options: [
        'Zona A = 1,5 vegades l’alçada de l’arbre | Zona B = 5 metres',
        'Zona A = 2,5 vegades l’alçada de l’arbre (només el binomi) | Zona B = 2 metres (només el motoserrista)',
        'Zona A = 10 metres fixos | Zona B = 1 metre',
        'Zona A = 2 metres | Zona B = 2,5 vegades l’alçada de l’arbre'
      ],
      correctIndex: 1,
      explanation: "La Zona A té un radi de 2,5 vegades l'alçada de l'arbre (on només pot haver-hi el binomi), i la Zona B té un radi de 2 metres al voltant de l'operador (on només pot estar el motoserrista)."
    },
    {
      id: 'q16-2',
      difficulty: 'Mitjà',
      question: "Com es calcula i en quines unitats s'expressa el 'pas de cadena' d'una motoserra, i en quines unitats es mesura la 'galga'?",
      options: [
        'El pas és la distància entre 2 reblons en mm; la galga és l’amplada de l’espasa en polzades.',
        'El pas és la distància entre 3 reblons consecutius dividida entre 2 (en polzades); la galga és el gruix de la baula motriu (en mil·límetres).',
        'Tant el pas com la galga es mesuren en mil·límetres.',
        'El pas és el nombre total de dents de tall dividit entre la longitud de l’espasa.'
      ],
      correctIndex: 1,
      explanation: 'El pas de cadena és la distància entre 3 reblons dividida per 2 i es mesura en polzades (ex. 3/8"); la galga és el gruix de la baula motriu i es mesura en mm (ex. 1,5 mm).'
    },
    {
      id: 'q16-3',
      difficulty: 'Fàcil',
      question: "En la captura d'una serp durant una assistència tècnica, on s'ha d'introduir segons si és autòctona o exòtica?",
      options: [
        'Sempre en una galleda amb aigua.',
        'Si és autòctona en un sac de roba; si és exòtica en un recipient rígid.',
        'Si és autòctona en un recipient rígid; si és exòtica en un sac de roba.',
        'En una gàbia metàl·lica de malla ampla en tots dos casos.'
      ],
      correctIndex: 1,
      explanation: "El manual MAN.ATXX.000 estableix que les serps autòctones s'introdueixen en un sac de roba lligat, mentre que les exòtiques s'han de confinar en un recipient rígid."
    },
    {
      id: 'q16-4',
      difficulty: 'Mitjà',
      question: "Quan hem de tallar horitzontalment un tronc caigut sotmès a flexió (amb fibres en compressió i fibres en tracció), quin és l'ordre correcte dels talls per evitar que l'espasa quedi pinçada?",
      options: [
        'Un únic tall complet des de la zona de tracció.',
        'Primer un tall d’1/3 del diàmetre a la zona de compressió i després el segon tall de 2/3 a la zona de tracció.',
        'Primer un tall de 2/3 a la zona de tracció i després 1/3 a la zona de compressió.',
        'Tallar la frontissa central primer.'
      ],
      correctIndex: 1,
      explanation: "Sempre es fa el 1r tall d'alleujament (1/3) a la zona de compressió i el 2n tall definitiu (2/3) a la zona de tracció."
    },
    {
      id: 'q16-5',
      difficulty: 'Fàcil',
      question: "Quin tipus de mascareta de protecció respiratòria forma part de l'EPI obligatori per treballar amb motoserra segons el manual MAN.ATXX.000?",
      options: ['Mascareta quirúrgica', 'Mascareta FFP1', 'Mascareta FFP3', 'Cap, n’hi ha prou amb la pantalla de malla'],
      correctIndex: 2,
      explanation: "L'apartat 3.5 del manual inclou explícitament la mascareta FFP3 dins l'equipament de protecció individual del motoserrista."
    },
    {
      id: 'q16-6',
      difficulty: 'Fàcil',
      question: "Si un gat es troba dalt d'un arbre o d'una teulada sense situació de perill imminent, quin criteri d'activació estableix el manual MAN.ATXX.000?",
      options: [
        "No s'activa el servei fins que hagin passat com a mínim 24 hores.",
        "S'ha d'activar una autoescala immediatament en tots els casos.",
        "S'espera un mínim de 72 hores abans de fer cap valoració.",
        'Només s’intervé disparant un dard anestèsic des de terra.'
      ],
      correctIndex: 0,
      explanation: 'Segons la secció 2.4.2, si no hi ha perill imminent, no s’activa el servei fins que el gat porti un mínim de 24 hores dalt de l’arbre o teulada, ja que la majoria baixen sols de nit.'
    },
    {
      id: 'q16-7',
      difficulty: 'Mitjà',
      question: "Com s'ha d'immobilitzar un porc o senglar i com s'ha de fer l'hissat d'un cavall o vaca en un rescat amb grua segons l'apartat 2.4 del manual?",
      options: [
        "El porc s'agafa per les orelles i el cavall s'hissa per les potes i el coll.",
        "El porc s'immobilitza amb un lligam al morro (maxil·lar superior) i el cavall/vaca amb cintes amples per sota del tòrax i l'abdomen (mai pel coll, potes ni cua).",
        'El porc amb cinta pel tòrax i el cavall amb perxa rígida pel coll.',
        'Tots dos s’han de tranquil·litzar amb dards preparats directament pel cap de torn de bombers.'
      ],
      correctIndex: 1,
      explanation: 'Els suids (porcs/senglars) s’immobilitzen amb un llaç al morro (darrere els ullals), mentre que en èquids i bòvids es passen cintes amples per tòrax i abdomen i és prohibit hissar-los pel coll, potes o cua.'
    },
    {
      id: 'q16-8',
      difficulty: 'Difícil',
      question: "Quina part de l'espasa de la motoserra provoca el rebot (kickback) en tocar un obstacle, i quin percentatge aproximat del diàmetre s'ha de deixar a la frontissa durant un abatiment d'arbre?",
      options: [
        "La base de l'espasa | 50% del diàmetre (i s'acaba tallant del tot al final).",
        'El quart inferior de la punta | 25% del diàmetre.',
        "El quart superior de la punta de l'espasa | 10% del diàmetre (que guia la caiguda i mai s'ha de tallar).",
        'La cadena del carter inferior | 5% del diàmetre.'
      ],
      correctIndex: 2,
      explanation: "El rebot (kickback) es produeix quan el quart superior de la punta de l'espasa toca fusta o un obstacle; en l'abatiment, cal deixar sempre una frontissa d'aproximadament el 10% del diàmetre sense tallar."
    },
    {
      id: 'q16-9',
      difficulty: 'Mitjà',
      question: "A quina alçada del terra es recomana fer el tall vertical d'abatiment quan un arbre està tensat o descalçat, i en quin angle s'han de preveure les vies d'escapament?",
      options: [
        'Arran de terra (0 m) | Dues vies a 90° laterals.',
        'A 2 metres del terra | Una única via en la mateixa direcció de la caiguda.',
        'A 0,5 metres del terra | Dues vies a 180° cap endavant.',
        'A 1 metre del terra | Dues vies a 45° cap enrere en sentit oposat a la caiguda.'
      ],
      correctIndex: 3,
      explanation: "El tall vertical d'abatiment (apartat 3.4.1) es realitza a 1 metre del terra i les vies d'escapament s'obren a 45° cap enrere en sentit oposat a la caiguda."
    },
    {
      id: 'q16-10',
      difficulty: 'Mitjà',
      question: "Quin article de la Constitució Espanyola garanteix la inviolabilitat del domicili i quina peça del pany actua quan una porta només s'ha tancat de cop ('de golpet') sense girar la clau?",
      options: [
        'Article 15 CE | El forrellat o paletó',
        'Article 18.2 CE | El resbaló o picaporta bisellat',
        'Article 24.1 CE | La lleva central del bombí',
        'Article 18.2 CE | Els contrapitons del rotor'
      ],
      correctIndex: 1,
      explanation: "L'article 18.2 de la CE protegeix la inviolabilitat del domicili. Quan una porta es tanca només de cop sense passar voltes de clau, només actua el resbaló (picaporta bisellat)."
    },
    {
      id: 'q16-11',
      difficulty: 'Fàcil',
      question: "En un sanejament de façanes o cobertes amb autoescala automàtica (AEA), com s'ha de situar sempre la cistella respecte a l'element inestable?",
      options: [
        "Just a sota de l'element per recollir-lo directament quan caigui.",
        "Amb els braços de l'escala creuant per sota la vertical de caiguda.",
        "Sempre per sobre o al lateral de l'element a sanejar, mai a sota.",
        'A 10 metres de distància frontal sense cap balisament a la vorera.'
      ],
      correctIndex: 2,
      explanation: "La cistella de l'AEA s'ha de posicionar sempre per sobre o al lateral de l'element inestable, mai a sota ni amb els braços sota la vertical de caiguda."
    },
    {
      id: 'q16-12',
      difficulty: 'Difícil',
      question: "Davant d'un vessament d'oli o gasoil a la calçada, quin absorbent s'utilitza en sec i per què està prohibit projectar-hi aigua a pressió cap als embornals?",
      options: [
        "S'utilitza sepiolita i es recull mecànicament; l'aigua a pressió contamina la xarxa de clavegueram i estén la pel·lícula relliscosa.",
        "S'utilitza fosfat monoamònic; l'aigua a pressió només s'evita pel risc d'explosió H₂.",
        "S'utilitza bicarbonat potàssic; l'aigua a pressió fa reaccionar l'oli formant àcid cianhídric.",
        "Només s'utilitza aigua polvoritzada a alta pressió per diluir els hidrocarburs fins al LII."
      ],
      correctIndex: 0,
      explanation: "Segons l'apartat 5.3, els vessaments d'olis o hidrocarburs s'absorbeixen amb sepiolita i es recullen en sec, prohibint projectar aigua a pressió cap al clavegueram perquè el contamina i estén la superfície relliscosa."
    },
    {
      id: 'q16-13',
      difficulty: 'Mitjà',
      question: "En una intervenció d'accés a habitatge on no hi ha emergència vital immediata i la porta està tancada amb voltes de clau (forrellat passat), quin ha de ser l'ordre de prioritat operatiu segons el manual?",
      options: [
        'Trencar directament la porta amb un mall i un separador hidràulic.',
        'Requerir presència policial (si no és emergència vital) i prioritzar l’accés menys destructiu: 1r finestra o balcó accessible, i si no és possible, extracció/fresat únicament del bombí.',
        'Intentar passar una radiografia pel resbaló, ja que sempre obra els forrellats girats.',
        'Entrar sense policia ni ordre judicial en tots els casos per ser servei públic.'
      ],
      correctIndex: 1,
      explanation: "Sense emergència vital immediata cal requerir la policia i triar la via menys destructiva (finestra/balcó); la làmina de mica només obre el resbaló (no el forrellat girat), de manera que si s'ha d'obrir la porta es limita el dany al bombí."
    },
    {
      id: 'q16-14',
      difficulty: 'Mitjà',
      question: "En relació amb les intervencions amb animals (Capítol 2 de MAN.ATXX.000), quina de les afirmacions següents és INCORRECTA?",
      options: [
        'La captura química mitjançant dards anestèsics només la pot preparar i disparar personal veterinari qualificat.',
        'En fauna salvatge (cabirols, senglars), cal minimitzar sorolls i llums i cobrir el cap per prevenir la miopatia de captura.',
        'Les abelles (Apis mellifera) es poden eliminar directament amb insecticida per evitar segones sortides.',
        'Per capturar ovelles o cabres cal subjectar-les pel coll/barbeta i la gropa, sense estirar mai de la llana ni les banyes.'
      ],
      correctIndex: 2,
      explanation: "Afirmació incorrecta: l'abella (Apis mellifera) és una espècie protegida i NO es mata amb insecticida; s'ha de recollir l'eixam en una caixa amb la reina (preferentment al capvespre o de nit)."
    },
    {
      id: 'q16-15',
      difficulty: 'Fàcil',
      question: "Quin element de seguretat de la motoserra s'activa automàticament per inèrcia en cas de rebot (kickback) i s'ha d'accionar sempre manualment abans d'engegar la màquina o caminar amb el motor en marxa?",
      options: [
        'El captador de cadena.',
        'El limitador de profunditat.',
        'El fre de cadena.',
        'El fiador de l’accelerador.'
      ],
      correctIndex: 2,
      explanation: "El fre de cadena bloqueja la cadena a l'instant tant manualment (amb el dors del canell esquerre) com per inèrcia davant d'un rebot."
    },
    {
      id: 'q16-16',
      difficulty: 'Difícil',
      question: "Ens trobem un tronc gruixut caigut que està en voladís (recolzat només per un extrem a un marge i l'altre extrem suspès a l'aire). On es troba la zona de compressió i com l'hem de tallar?",
      options: [
        'La compressió és a la cara superior → 1r tall d’1/3 per dalt i 2n tall de 2/3 per baix.',
        'La compressió és a la cara inferior (s’aixafa pel pes de la punta) → 1r tall d’1/3 per baix i 2n tall de 2/3 per dalt.',
        'Tot el tronc està a tracció pura → es talla d’un sol cop de dalt a baix.',
        'Tot el tronc està a compressió → es talla d’un sol cop de baix a dalt.'
      ],
      correctIndex: 1,
      explanation: "En un voladís (a diferència d'un pont recolzat als dos extrems), la part SUPERIOR s'estira (tracció) i la part INFERIOR s'aixafa (compressió). Per tant, el 1r tall d'alleujament (1/3) es fa per BAIX (compressió) i el 2n tall (2/3) per DALT (tracció)."
    },
    {
      id: 'q16-17',
      difficulty: 'Mitjà',
      question: "Quina peça interna del cilindre (bombí europeu) gira solidàriament amb el rotor un cop alineats els pitons i acciona directament el mecanisme del forrellat del pany?",
      options: [
        'El resbaló bisellat.',
        'La lleva central.',
        'El contrapitó.',
        'El captador.'
      ],
      correctIndex: 1,
      explanation: "La lleva central del bombí és la peça metàl·lica que gira i empeny o retira el forrellat del pany. Quan s'extreu o es trenca el bombí, s'introdueix una eina per girar aquesta lleva."
    },
    {
      id: 'q16-18',
      difficulty: 'Fàcil',
      question: "En una intervenció nocturna amb himenòpters (abelles o vespes), quin detall d'EPI i quin horari d'actuació recomana el manual MAN.ATXX.000?",
      options: [
        'Actuar al migdia amb màxima calor solar i només amb el casc d’incendi forestal.',
        'Actuar preferentment al capvespre o de nit amb EPI complet d’apicultor (granota blanca, careta de reixeta i guants segellats amb cinta).',
        'Actuar amb l’equip d’intervenció estructural sense guants i ruixant aigua freda al rusc.',
        'Actuar de matinada amb mascareta FFP1 i botes d’aigua.'
      ],
      correctIndex: 1,
      explanation: "Cal utilitzar l'EPI complet d'apicultor ben segellat i actuar al capvespre o de nit, quan els insectes són dins del rusc o niu i tenen molta menys activitat."
    }
  ]
};
