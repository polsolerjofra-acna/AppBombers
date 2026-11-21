/**
 * Preguntes fallades i punts de millora detectats al Simulacre 81/26 (21/11/2026 - Pol Soler Jofra),
 * integrades per tema dins el banc oficial de l'app per reforçar aquests conceptes clau.
 */
export const QUESTIONS_SIMULACRE_81_26_BY_TOPIC = {
  1: [
    {
      difficulty: 'Difícil',
      question: '[Simulacre 81/26 · P65] Quants cops s’ha reformat la Constitució Espanyola de 1978?',
      options: ['4.', '0.', '3.', '2.'],
      correctIndex: 0,
      explanation:
        'Segons el criteri del simulacre 81/26 la resposta marcada és 4 (oficialment les reformes constitucionals són les de 1992 art. 13.2, 2011 art. 135 i 2024 art. 49; tingues present la dada segons el manual de referència del teu curs).'
    }
  ],
  4: [
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P71] Segons la Llei 17/2015, d\'igualtat efectiva de dones i homes, què és "la situació discriminatòria creada per una disposició, un criteri, una interpretació o una pràctica pretesament neutres que poden causar un perjudici més gran a les persones d’un dels sexes"?',
      options: [
        'Discriminació directa.',
        'Discriminació de segon ordre.',
        'Discriminació indirecta.',
        'Discriminació per error.'
      ],
      correctIndex: 2,
      explanation:
        'Clau d\'examen: quan una norma o pràctica és «pretesament neutra» però perjudica especialment un sexe, és discriminació indirecta (no de segon ordre ni directa).'
    }
  ],
  6: [
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P6] Un/a bomber/a d’escala bàsica del Cos de Bombers de la Generalitat pot exercir la funció de Cap de sortida?',
      options: [
        'Sí, així com de Cap de torn, tot i que en aquest darrer cas només de forma excepcional.',
        'No, en cap cas.',
        'Sí, però de forma excepcional.',
        'Sí, però de Cap de torn mai.'
      ],
      correctIndex: 1,
      explanation:
        'Un/a bomber/a de l\'escala bàsica NO pot exercir la funció de Cap de sortida ni de Cap de torn en cap cas (és funció de comandament).'
    },
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P76] Segons la Llei 4/1997, quins elements integren l’estructura organitzativa de la protecció civil a Catalunya?',
      options: [
        'Exclusivament la Generalitat i els ajuntaments.',
        'Els bombers, els Mossos d’Esquadra i el Sistema d’Emergències Mèdiques.',
        'El CECAT i les comissions municipals de protecció civil.',
        'Les administracions públiques, els serveis d’autoprotecció i el voluntariat de protecció civil.'
      ],
      correctIndex: 3,
      explanation:
        'L\'estructura organitzativa de la protecció civil a Catalunya (Llei 4/1997) s\'integra per tres grans blocs: les administracions públiques, els serveis d\'autoprotecció i el voluntariat de protecció civil.'
    }
  ],
  9: [
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P16] Una caixa de 20 kg baixa des del repòs per una rampa inclinada 30° sense fregament des d’una altura vertical d’1,25 m (g = 10 m/s²). Quina afirmació és correcta?',
      options: [
        'L’acceleració és de 2,5 m/s² i arriba al final amb velocitat de 10 m/s.',
        'L’acceleració de la caixa és 5 m/s² i arriba al final de la rampa amb una velocitat de 5 m/s.',
        'L’acceleració és de 10 m/s² i arriba al final amb velocitat de 5 m/s.',
        'L’acceleració és de 5 m/s² i arriba al final amb velocitat de 10 m/s.'
      ],
      correctIndex: 1,
      explanation:
        'a = g·sin(30°) = 10·0,5 = 5 m/s². Per conservació d\'energia: v = √(2·g·h) = √(2·10·1,25) = √25 = 5 m/s (atenció a no confondre √25 amb 10!).'
    }
  ],
  10: [
    {
      difficulty: 'Difícil',
      question: '[Simulacre 81/26 · P57] El gas natural porta l\'odorant THT. Si tenim una fuita en una sala de 50 m³ (LII CH₄ = 4,5%, barreja homogènia), ens haurem d’adonar de la fuita per l\'olor abans de quants m³ de gas fuitat?',
      options: ['0,90 m³.', '0,1125 m³.', '0,45 m³.', '0,225 m³.'],
      correctIndex: 2,
      explanation:
        'L\'odorant THT es dosifica perquè sigui perceptible al 20% del LII (1/5 del LII). Càlcul: 20% de 4,5% = 0,9% = 0,009. En 50 m³: 0,009 × 50 = 0,45 m³.'
    }
  ],
  11: [
    {
      difficulty: 'Difícil',
      question: '[Simulacre 81/26 · P26] En motors asíncrons trifàsics lineals amb un angle de desfasament φ = 60°, quina afirmació és correcta?',
      options: [
        'La potència activa equival al 50% de la potència aparent; si augmentem el factor de potència millorant les bobines, la intensitat absorbida romandrà constant.',
        'La potència activa equival al 70% de la potència aparent; si corregim el factor de potència amb condensadors, la intensitat absorbida romandrà constant.',
        'La potència útil equival al 50% de la potència aparent; si millorem el factor de potència sense variar P ni V, la intensitat absorbida romandrà constant.',
        'La potència activa equival al 50% de la potència aparent; si millorem el factor de potència sense que la potència activa i la tensió variïn, l’efecte Joule serà menor.'
      ],
      correctIndex: 3,
      explanation:
        'cos(60°) = 0,5 (50% de S). Si pugem cos(φ) mantenint P i V constants, la intensitat I = P / (√3·V·cos φ) disminueix i, per tant, les pèrdues per efecte Joule (I²·R) són menors.'
    }
  ],
  12: [
    {
      difficulty: 'Difícil',
      question: '[Simulacre 81/26 · P35] En un edifici amb instal·lació fotovoltaica d’autoconsum, inversor híbrid i bateries d’acumulació, després de desconnectar l’IGM el detector de tensió sense contacte no emet cap senyal acústic. Quina afirmació és correcta?',
      options: [
        'En l’habitatge amb fotovoltaica no podem assegurar que no hi hagi corrent, ja que és totalment autònoma i sense connexió a xarxa.',
        'L’absència de subministrament de la xarxa pública impedeix que l’inversor alimenti els circuits interiors gràcies a la protecció antiilla.',
        'Tot i que el detector sense contacte compleix la tercera regla d’or, cal extremar precaucions en el tram de corrent continu.',
        'L’inversor híbrid pot continuar alimentant determinades càrregues mitjançant les bateries.'
      ],
      correctIndex: 3,
      explanation:
        'Un inversor híbrid amb bateries pot seguir alimentant càrregues crítiques (mode backup) fins i tot després de tallar l\'IGM de la xarxa pública.'
    }
  ],
  13: [
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P46] Dues bombes iguals impulsen aigua a les mateixes revolucions per mànegues d\'igual longitud i desnivell, una de 70 mm i l\'altra de 45 mm (llança oberta). Quina marcarà més pressió al manòmetre de sortida?',
      options: [
        'La connectada a la mànega de 45 mm.',
        'Depenent de la pressió atmosfèrica d’aquell moment.',
        'La connectada a la mànega de 70 mm.',
        'Totes dues indicaran la mateixa pressió.'
      ],
      correctIndex: 0,
      explanation:
        'La mànega de 45 mm ofereix molta més resistència hidràulica (pèrdua de càrrega) que la de 70 mm; com que la bomba gira a les mateixes revolucions, treballa amb menys cabal i més pressió de descàrrega a la sortida.'
    }
  ],
  15: [
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P18] Les pantalles contínues utilitzades en fonamentació profunda tenen com a funció principal:',
      options: [
        'Contenir el terreny i permetre excavacions profundes amb estabilitat lateral.',
        'Incrementar la capacitat portant superficial del terreny.',
        'Substituir sempre els pilots en terrenys granulars.',
        'Actuar com a element provisional sense funció estructural.'
      ],
      correctIndex: 0,
      explanation:
        'Les pantalles contínues (murs pantalla) són elements de contenció profunda que garanteixen l\'estabilitat lateral del terreny durant l\'excavació (soterranis, túnels, pàrquings).'
    }
  ],
  18: [
    {
      difficulty: 'Fàcil',
      question: '[Simulacre 81/26 · P64] Quin vehicle no disposa habitualment de presa de força?',
      options: [
        'Tots en disposen habitualment.',
        'Autoescala.',
        'BUL.',
        'BRP.'
      ],
      correctIndex: 0,
      explanation:
        'Tant les autobombes (BUL, BRP) per accionar la bomba d\'aigua com les autoescales per accionar la bomba hidràulica de l\'escala i estabilitzadors disposen habitualment de presa de força.'
    }
  ],
  19: [
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P62] La reductora d’un vehicle “tot terreny”, en cas de ser independent d’altres sistemes com els bloquejos de diferencial, és correcta utilitzar-la en situacions de molta adherència com per exemple en conducció per asfalt?',
      options: [
        'Sí, però mai marxa enrere.',
        'Sí, però només per fer marxa enrere.',
        'No, només s\'ha d\'utilitzar en situacions de poca adherència.',
        'Sí, si la velocitat del vehicle haurà de ser lenta.'
      ],
      correctIndex: 3,
      explanation:
        'Trampa clàssica: el que NO es pot usar en asfalt amb molta adherència són els bloquejos de diferencial (per tensions a la transmissió); la reductora independent simplement escurça el desenvolupament i es pot usar si la velocitat ha de ser lenta.'
    }
  ],
  21: [
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P25] Quin és el pla municipal multirisc que permet gestionar riscos que no estan inclosos en els plans especials?',
      options: [
        'El Document Únic de Protecció Civil Municipal (DUPROCIM).',
        'El Pla Bàsic d’Emergència Municipal (PBEM).',
        'El PROCICAT.',
        'El Pla d’Actuació Municipal (PAM).'
      ],
      correctIndex: 1,
      explanation:
        'El PBEM (Pla Bàsic d\'Emergència Municipal) és el pla multirisc per a riscos no inclosos en plans especials. El PAM desenvolupa un risc especial concret al municipi, i el DUPROCIM els agrupa tots.'
    }
  ],
  22: [
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P8] En entorns de grans sinistres, quan organitzem els recursos de la intervenció, quina afirmació és correcta?',
      options: [
        'Un Sector engloba diverses Zones.',
        'Un Sector engloba diversos PEV’s.',
        'El Cap de planificació supervisa al Cap de logística.',
        'Un Cap de maniobra dirigeix diversos Grups.'
      ],
      correctIndex: 1,
      explanation:
        'A l\'estructura SISCOM de grans sinistres, un Sector engloba diversos Punts d\'Estratègia i Vigilància / PEV\'s (no al revés).'
    }
  ],
  25: [
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P32] En un incendi forestal amb flames de menys d’un metre es construeix una línia de defensa amb eines manuals. Quina afirmació descriu correctament aquesta maniobra?',
      options: [
        'Elimina tot el combustible superficial fins al sòl mineral, creant una obertura lineal contínua o discontínua.',
        'És útil en incendis de mitjana intensitat, eliminant tot el combustible superficial i de subsòl.',
        'Elimina el combustible vegetal alt mantenint les restes orgàniques del sòl fins al remat.',
        'Consisteix a crear una obertura lineal i contínua fins al sòl mineral, eliminant tot el combustible superficial.'
      ],
      correctIndex: 3,
      explanation:
        'Una línia de defensa manual ha de ser sempre CONTÍNUA i arribar fins al SÒL MINERAL, eliminant tot el combustible superficial (inclosa la fullaraca/matèria orgànica).'
    }
  ],
  27: [
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P51] En un accident de trànsit amb una cisterna bolcada de grans dimensions, superfície llisa i extrems esfèrics, quin tipus de substància és més probable que transporti?',
      options: [
        'Un líquid inflamable.',
        'Un producte corrosiu.',
        'Un sòlid a granel.',
        'Un gas liquat a pressió.'
      ],
      correctIndex: 3,
      explanation:
        'Les cisternes amb extrems esfèrics/semiesfèrics i superfície llisa (sense anells de reforç externs habituals en atmosfèriques) estan dissenyades per suportar pressió interna: transporten gasos liquats a pressió.'
    },
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P77] En un servei NRBQ d’un producte que fuita, quin ordre de maniobres segueix correctament la nostra tàctica d’intervenció?',
      options: [
        'Col·locar una cubeta de recollida → Confinar la població propera → Tancar la vàlvula.',
        'Fer un dic de contenció → Taponar la fuita → Transvasar el producte.',
        'Taponar l’embornal → Col·locar una cubeta de recollida sota la fuita → Embridar la canonada.',
        'Evacuar la població propera → Taponar la fuita → Acortinar els fums.'
      ],
      correctIndex: 2,
      explanation:
        'Ordre tàctic NRBQ: 1r Protegir dianes/medi (taponar l\'embornal), 2n Controlar el flux (cubeta de recollida), 3r Actuar sobre la font (embridar la canonada).'
    }
  ],
  28: [
    {
      difficulty: 'Difícil',
      question: '[Simulacre 81/26 · P11] En un accident de trànsit, víctima conscient amb dolor abdominal intens, FC 120 bpm, TA 85/55 mmHg, pell pàl·lida i freda, SpO₂ 96%, abdomen distès i dolorós. Quina actuació és la més adequada?',
      options: [
        'Considerar un compromís circulatori per possible hemorràgia interna, mantenir la seqüència XABCDE, completar la valoració C (incloent-hi l’abdomen i la pelvis), administrar oxigen d’alta concentració i preparar una evacuació prioritària.',
        'Col·locar-la en posició antixoc (Trendelenburg), administrar oxigen i completar després la resta d\'apartats.',
        'Com que A i B són adequades, continuar amb D i E i revalorar la circulació posteriorment.',
        'Considerar compromís circulatori, mantenir XABCDE i completar la valoració C (abdomen i pelvis) abans de continuar.'
      ],
      correctIndex: 0,
      explanation:
        'La víctima presenta signes clars de xoc hipovolèmic (taquicàrdia, hipotensió, pell pàl·lida/freda, abdomen distès). Cal completar C (abdomen i pelvis), administrar O₂ d\'alta concentració i preparar evacuació prioritària.'
    }
  ],
  30: [
    {
      difficulty: 'Difícil',
      question: '[Simulacre 81/26 · P40] Acabada la recerca física sense localitzar cap víctima, la policia local sospita que hi ha una persona sota la runa. Quin és el següent pas a fer?',
      options: [
        'Recerca canina per venteig.',
        'Recerca canina per rastreig.',
        'Recerca tècnica per quadrants, començant per façana.',
        'Recerca tècnica per espais segons probabilitat de trobar-hi la persona.'
      ],
      correctIndex: 3,
      explanation:
        'En el protocol d\'estructures col·lapsades, quan la recerca física no dona resultat però hi ha sospita fundada, es passa a la recerca tècnica per espais prioritzant segons la probabilitat de trobar-hi la víctima.'
    },
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P48] En un edifici de 3 plantes s’ha ensorrat un tram d’escala del pis superior sobre l’escala de la planta baixa. Quin patró de recerca seguirem?',
      options: [
        'Patró de recerca en línia.',
        'Patró de recerca concèntric.',
        'El que determini el comandament perquè els 3 mètodes serien vàlids.',
        'Patró de recerca per habitacions.'
      ],
      correctIndex: 1,
      explanation:
        'Quan hi ha un punt focal clar d\'ensorrament/acumulació de runa (com un tram d\'escala col·lapsat), s\'aplica el patró de recerca concèntric.'
    },
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P54] En quin tipus de construcció hi ha major probabilitat d’espais de vida?',
      options: [
        'Sistema de pilars i forjats.',
        'Sistema tradicional.',
        'Qualsevol dels tres sistemes perquè depèn del mecanisme lesional.',
        'Sistema de pòrtics.'
      ],
      correctIndex: 3,
      explanation:
        'El sistema de pòrtics (bigues i pilars rígids) és el que genera amb més probabilitat espais de vida / buits protegits en cas de col·lapse.'
    }
  ],
  32: [
    {
      difficulty: 'Difícil',
      question: '[Simulacre 81/26 · P29] Conductor amb cames atrapades per deformació frontal (inicialment estable), però durant l’abordatge el metge adverteix un deteriorament sobtat que obliga a accelerar l’extracció. Què podem afirmar?',
      options: [
        'És un atrapament físic tipus 2 que requereix excarceració. Inicialment preparem alliberament controlat, però davant l’agreujament reduïm les maniobres al mínim necessari per aconseguir espai suficient.',
        'És un atrapament físic tipus 2 on inicialment fem un pla B més lent i passem a fer el pla A.',
        'Parlem d’un atrapament físic tipus 1 i passem a aplicar el pla B prioritzant el volant.',
        'Inicialment fem desplaçament de davantal com a pla A i finalment un alliberament d’emergència.'
      ],
      correctIndex: 0,
      explanation:
        'Atrapament físic tipus 2 = requereix excarceració (no és un alliberament d\'emergència sense eines). Davant d\'un deteriorament sobtat s\'accelera passant d\'alliberament controlat a reduir les maniobres al mínim necessari.'
    },
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P38] Quina limitació presenta l’assaig de la normativa ECE R66?',
      options: [
        'No considera els passatgers, ni l’equipatge, ni tampoc l’energia cinètica generada a altes velocitats.',
        'Considera els passatgers i l’energia cinètica a altes velocitats, però no l’equipatge.',
        'No considera la deformació amb passatgers, però sí l’energia cinètica a altes velocitats.',
        'No considera els passatgers ni l’equipatge, però sí l’energia cinètica generada a altes velocitats.'
      ],
      correctIndex: 0,
      explanation:
        'L\'assaig ECE R66 (bolcada d\'autocars) és un assaig quasi-estàtic a baixa velocitat que no considera ni el pes/moviment dels passatgers, ni l\'equipatge, ni l\'energia cinètica a altes velocitats.'
    }
  ],
  34: [
    {
      difficulty: 'Mitjà',
      question: '[Simulacre 81/26 · P41] En una intervenció de salvament aquàtic, la maniobra combinada amb línia de rescat:',
      options: [
        'S’utilitza per cobrir rescats de llarga distància i/o escenaris complexos.',
        'a i c són correctes.',
        'El rescatador/a entra en medi aquàtic amb l’extrem de la corda lligat al mosquetó de la cinta elàstica del sistema desembragable de l’armilla.',
        'És una maniobra amb dos bombers/es a l’aigua i un "tender o dinamitzador".'
      ],
      correctIndex: 1,
      explanation:
        'Tant l\'opció (a) com la (c) defineixen correctament la maniobra combinada amb línia de rescat en salvament aquàtic.'
    }
  ]
};
