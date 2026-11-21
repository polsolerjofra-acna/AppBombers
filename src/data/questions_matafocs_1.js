/**
 * Simulacre MATAFOCS 1 (Model A) — 70 preguntes amb plantilla de correcció oficial.
 */
export const QUESTIONS_MATAFOCS_1 = [
  {
    topic: 14,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P1] Per traslladar a un mapa a escala 1:10.000 un tram de pista que en un mapa topogràfic a escala 1:25.000 mesura 2 cm, quina longitud tindrà el tram en el mapa nou?',
    options: ['0,5 cm', '0,8 cm', '2,5 cm', '5 cm'],
    correctIndex: 3,
    explanation: '2 cm a 1:25.000 són 50.000 cm = 500 m reals. A escala 1:10.000: 50.000 / 10.000 = 5 cm.'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P2] Després que un turisme s\'encastés de front contra un arbre, la conductora té les cames atrapades sota el tauler i el seu estat s\'agreuja ràpidament. Quina maniobra amplia de manera ràpida l\'espai per a les cames?',
    options: [
      'Un desplaçament de davantal amb eines d\'expansió',
      'Un desplaçament o tall del seient davanter',
      'Un desplaçament de volant i columna de direcció',
      'Una elevació de sostre amb separador'
    ],
    correctIndex: 1,
    explanation: 'Davant d\'un agreujament ràpid, el desplaçament o tall del seient davanter és la maniobra més ràpida per alliberar espai per a les cames.'
  },
  {
    topic: 2,
    difficulty: 'Difícil',
    question: '[MATAFOCS 1 · P3] Segons l\'art. 119 del DL 1/1997 (Funció Pública), quines d\'aquestes sancions només es poden imposar per faltes molt greus?',
    options: [
      'La suspensió de funcions per més d\'un any i menys de sis, i el trasllat de lloc de treball amb canvi de residència',
      'La suspensió de funcions per més d\'un any i menys de sis, i la pèrdua d\'un a tres graus personals',
      'La destitució del càrrec de comandament, i el trasllat de lloc de treball amb canvi de residència',
      'La destitució del càrrec de comandament, i la pèrdua d\'un a tres graus personals'
    ],
    correctIndex: 0,
    explanation: 'Art. 119 DL 1/1997: la suspensió > 1 any i < 6 anys i el trasllat amb canvi de residència només es poden imposar per faltes molt greus.'
  },
  {
    topic: 21,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P4] Segons l\'estructura operativa dels plans de protecció civil de Catalunya, per a quin tipus d\'emergència és essencial el grup logístic?',
    options: [
      'Per a les emergències amb víctimes múltiples',
      'Per a les emergències de llarga durada',
      'Per a les emergències de caràcter intencionat',
      'Per a les emergències de gran extensió territorial'
    ],
    correctIndex: 1,
    explanation: 'El grup logístic és essencial especialment en emergències de llarga durada (avituallament, relleus, subministraments, alberg).'
  },
  {
    topic: 31,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P5] Localitzada a un centenar de metres d\'una pista forestal per on circulen vehicles 4×4, una boletaire s\'ha trencat un turmell en un bosc planer. Quin plantejament s\'escau?',
    options: [
      'Rescat tècnic a càrrec d\'especialistes, amb evacuació en helicòpter',
      'Rescat tècnic a càrrec d\'especialistes, amb evacuació per terra',
      'Rescat a càrrec d\'unitats bàsiques, amb evacuació en helicòpter',
      'Un rescat a càrrec d\'unitats bàsiques, amb evacuació per terra'
    ],
    correctIndex: 3,
    explanation: 'Terreny planer a 100 m de pista transitable per 4×4: no requereix especialistes GRAE ni helicòpter; el resolen unitats bàsiques amb evacuació per terra.'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P6] Pel que fa al rombe de perill NFPA 704, quina informació ofereix sobre el producte?',
    options: [
      'Permet saber si és incompatible amb l\'aigua i en quin estat d\'agregació es troba',
      'No permet saber cap de les dues coses',
      'Permet saber si el producte és incompatible amb l\'aigua, però no en quin estat d\'agregació es troba',
      'Permet saber l\'estat d\'agregació, però no la incompatibilitat amb l\'aigua'
    ],
    correctIndex: 2,
    explanation: 'Al quadrant blanc d\'NFPA 704 hi figura el símbol W ratllat si és incompatible amb l\'aigua, però el rombe no indica l\'estat d\'agregació.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P7] Quan el control d\'estabilitat (ESP) d\'un vehicle detecta que la trajectòria no coincideix amb la que marca el volant, com hi actua?',
    options: [
      'Frena rodes concretes i, si cal, redueix la potència del motor',
      'Allibera i aplica la pressió dels frens moltes vegades per segon',
      'Avisa el conductor amb un senyal acústic',
      'Augmenta la pressió de frenada de totes les rodes'
    ],
    correctIndex: 0,
    explanation: 'L\'ESP frena selectivament rodes concretes per corregir el subviratge/sobreviratge i, si cal, redueix la potència del motor.'
  },
  {
    topic: 28,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P8] Un motorista inconscient amb sospita de lesió cervical no té la via aèria oberta tot i aplicar tracció mandibular. Què és prioritari?',
    options: [
      'Mantenir el coll immobilitzat encara que la via aèria no quedi oberta',
      'Esperar l\'equip sanitari mantenint control cervical',
      'Posar-lo en posició lateral de seguretat',
      'Aconseguir una via aèria permeable, encara que calgui mobilitzar-li el coll'
    ],
    correctIndex: 3,
    explanation: 'La permeabilitat de la via aèria és prioritària per a la vida per sobre de la immobilització cervical estricta.'
  },
  {
    topic: 30,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P9] Sota el marc de l\'INSARAG, com actuen els equips certificats i a quina escala s\'apliquen els seus principis?',
    options: [
      'Actuen de forma autònoma, sense dependre dels recursos locals, i els principis s\'apliquen també a escala nacional i regional',
      'Actuen amb el suport logístic del país afectat',
      'Els principis es reserven a les operacions internacionals',
      'Actuen amb suport logístic local i només internacional'
    ],
    correctIndex: 0,
    explanation: 'Els equips INSARAG són autosuficients/autònoms i els seus principis s\'apliquen també a escala nacional i regional.'
  },
  {
    topic: 22,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P10] Dins de l\'organització del SISCOM, què és una maniobra?',
    options: [
      'El conjunt d\'accions pràctiques assignades a un equip',
      'El conjunt d\'equips organitzats per dur a terme funcions',
      'El conjunt coordinat d\'accions tàctiques dissenyades per assolir els objectius tàctics',
      'El conjunt d\'objectius tàctics i prioritats del comandament'
    ],
    correctIndex: 2,
    explanation: 'Maniobra = conjunt coordinat d\'accions tàctiques dissenyades per assolir els objectius tàctics establerts.'
  },
  {
    topic: 6,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P11] Quins límits fixa la Llei 5/1994 al nombre de places reservades per a dones en les convocatòries d\'accés a Bombers?',
    options: [
      'Entre el 20 % i el 40 %',
      'Entre el 25 % i el 50 %',
      'Entre el 20 % i el 50 %',
      'No pot ser inferior al 25 % ni superior al 40 % de les places convocades'
    ],
    correctIndex: 3,
    explanation: 'Llei 5/1994 (modificada): reserva d\'entre el 25 % i el 40 % de les places convocades per a dones.'
  },
  {
    topic: 23,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P12] Sobre els sistemes de control de temperatura i evacuació de fums (SCTiEF) i la ventilació d\'aparcaments, quina afirmació és FALSA?',
    options: [
      'Despressuritzen el recinte on es desenvolupa l\'incendi i controlen la temperatura dels fums',
      'En els aparcaments, el sistema de ventilació previst assoleix els mateixos objectius que un SCTiEF',
      'Limiten l\'acció tèrmica dels fums sobre els elements constructius de la coberta',
      'En els aparcaments, la renovació d\'aire també pot servir per extreure els fums si compleix les condicions exigides'
    ],
    correctIndex: 1,
    explanation: 'La ventilació d\'aparcaments no assoleix tots els mateixos objectius de control tèrmic i capa lliure de fums que un SCTiEF específic.'
  },
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P13] Quins elements s\'intercalen en les clavegueres amb pendents massa pronunciats per controlar la velocitat de l\'aigua i evitar erosions?',
    options: ['Els ràpids', 'Les arquetes', 'Els embornals', 'Els baixants'],
    correctIndex: 0,
    explanation: 'Els ràpids (o pous de salt) s\'intercalen en clavegueres amb pendents pronunciats per esmorteir la velocitat de l\'aigua.'
  },
  {
    topic: 9,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P14] Un cabestrant elèctric estira un vehicle a velocitat constant d\'1,8 km/h amb una força de 300 kgf. Quina potència desenvolupa? (1 kgf = 9,8 N)',
    options: ['1.470 W', '5.292 W', '5.880 W', '19.051 W'],
    correctIndex: 0,
    explanation: 'v = 1,8 / 3,6 = 0,5 m/s; F = 300 · 9,8 = 2.940 N; P = F · v = 2.940 · 0,5 = 1.470 W.'
  },
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P15] Des del capdamunt d\'un talús de formigó sense arbres ni elements d\'edificació, l\'autobomba aparca a tocar de la vora. Quin paper pot tenir en l\'ancoratge?',
    options: [
      'Fer d\'ancoratge només si hi ha risc vital imminent',
      'Fer d\'ancoratge de fortuna, un cop inspeccionada i verificada',
      'No en pot tenir en entorn urbà',
      'Un vehicle no pot fer d\'ancoratge'
    ],
    correctIndex: 1,
    explanation: 'Un vehicle pot actuar com a ancoratge de fortuna un cop inspeccionat i verificat (motor aturat, fre posat, rodes falcades, punts estructurals sòlids).'
  },
  {
    topic: 17,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P16] Quan en una gran emergència es desplega una estructura de canals de ràdio diferenciats per funció, quan convé fer la migració?',
    options: [
      'Tan aviat com sigui possible, abans que el nombre d\'unitats faci més difícil comprovar que tothom ha canviat',
      'Quan ja hi hagi arribat el conjunt de les unitats',
      'Quan el canal de treball comenci a saturar-se',
      'Un cop nomenats els responsables de sector'
    ],
    correctIndex: 0,
    explanation: 'La migració als canals assignats convé fer-la tan aviat com sigui possible per evitar confusions i dificultats de control quan s\'hi afegeixin més unitats.'
  },
  {
    topic: 34,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P17] Després d\'una riuada, el corrent ha erosionat la base encara submergida d\'un pilar de pont amb marques d\'impacte. Cal decidir si és transitable:',
    options: [
      'Demanar-ne la valoració a la unitat subaquàtica en fase de recuperació',
      'Demanar-ne la valoració al personal especialitzat en estructures en fase de recuperació',
      'Demanar-ne de seguida la valoració a la unitat subaquàtica',
      'Demanar-ne de seguida la valoració al personal especialitzat en estructures del Cos de Bombers'
    ],
    correctIndex: 3,
    explanation: 'La decisió sobre estabilitat i transitabilitat d\'una estructura danyada requereix de seguida la valoració del personal especialitzat en estructures.'
  },
  {
    topic: 20,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P18] Un bomber ha de treballar 45 minuts a 60 L/min amb ampolla a 300 bar reservant el 25 % per a la sortida. Quina capacitat volumètrica mínima ha de tenir l\'ampolla?',
    options: ['9 L', '12 L', '16 L', '36 L'],
    correctIndex: 1,
    explanation: 'Aire útil necessari = 45 · 60 = 2.700 L (75 % del total). Total = 2.700 / 0,75 = 3.600 L. A 300 bar: V = 3.600 / 300 = 12 L.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P19] Com s\'anomena la situació en què les deformacions d\'un element estructural superen els límits de seguretat i hi apareixen lesions sense arribar al límit de resistència?',
    options: [
      'Un vinclament de l\'element',
      'Un assentament diferencial',
      'Una patologia estructural',
      'Un col·lapse de l\'estructura'
    ],
    correctIndex: 2,
    explanation: 'Les deformacions i lesions que superen els límits de seguretat sense col·lapse constitueixen una patologia estructural.'
  },
  {
    topic: 18,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P20] Què permet fer, en una gran emergència, la unitat de comandament lleugera (UCL)?',
    options: [
      'Dirigir i supervisar un àmbit geogràfic assignat',
      'Desplegar un centre de comandament avançat complet',
      'Fer l\'evacuació preventiva de la població',
      'Fer de centre d\'informació per a les autoritats locals'
    ],
    correctIndex: 0,
    explanation: 'La UCL permet dirigir i supervisar un àmbit geogràfic assignat (sector/zona), mentre que el CCA complet correspon a unitats mitjanes/pesants (UCM/UCP).'
  },
  {
    topic: 11,
    difficulty: 'Difícil',
    question: '[MATAFOCS 1 · P21] Tres resistències calefactores iguals es connecten cadascuna entre una fase i el neutre d\'una xarxa trifàsica de 400 V entre fases, i per cadascuna hi circulen 20 A. Quina potència total consumeix?',
    options: ['4.600 W', '8.000 W', '13.800 W', '24.000 W'],
    correctIndex: 2,
    explanation: 'Tensió fase-neutre = 400 / √3 ≈ 230 V. Per resistència: P1 = 230 · 20 = 4.600 W. Total (3 resistències) = 3 · 4.600 = 13.800 W.'
  },
  {
    topic: 15,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P22] Respecte dels efectes de la calor sobre els materials estructurals en un incendi, quina afirmació NO és certa?',
    options: [
      'L\'acer de les bigues pot esquerdar murs i trencar unions per dilatació',
      'Una estructura ja refredada pot quedar deformada i inestable',
      'La fusta estructural sense protecció es dimensiona amb la secció estricta, ja que la capa carbonitzada n\'augmenta la resistència',
      'El formigó pot perdre la capa superficial (spalling) per evaporació d\'aigua interna'
    ],
    correctIndex: 2,
    explanation: 'La fusta estructural es sobredimensiona (secció de sacrifici) perquè la capa carbonitzada perd capacitat portant, tot i que aïlla tèrmicament el nucli.'
  },
  {
    topic: 26,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P23] Davant d\'un gran apilament de pneumàtics que crema amb el foc penetrat en profunditat, quina és la maniobra més segura?',
    options: [
      'Atacar-lo amb raig tens a curta distància',
      'Controlar la propagació amb tallafocs i, si cal, deixar que la pila es consumeixi de manera controlada',
      'Remoure la pila amb maquinària mentre s\'aplica aigua polvoritzada',
      'Controlar la propagació amb una cortina d\'aigua i remullar fins que deixi de fumejar'
    ],
    correctIndex: 1,
    explanation: 'En grans apilaments de pneumàtics, la maniobra més segura sol ser controlar la propagació amb tallafocs i deixar consumir de forma controlada (evitant risc d\'esfondrament i contaminació massiva d\'aigua).'
  },
  {
    topic: 10,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P24] Fins a quina temperatura cal escalfar un dipòsit tancat i de volum invariable a 65 bar i 7 °C perquè la pressió arribi a 130 bar? (0 °C = 273 K)',
    options: ['14 °C', '140 °C', '287 °C', '560 °C'],
    correctIndex: 2,
    explanation: 'Llei de Gay-Lussac: P1/T1 = P2/T2. T1 = 7 + 273 = 280 K. Com P2 = 2·P1, T2 = 2·280 = 560 K → 560 - 273 = 287 °C.'
  },
  {
    topic: 24,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P25] Abans d\'entrar a la zona calenta d\'un incendi estructural, com es revisen l\'EPI i l\'ERA dels binomis, i quines dades es registren al control d\'accés?',
    options: [
      'El responsable revisa l\'EPI/ERA i anota hora, binomi i qui autoritza',
      'Cada binomi fa revisió mútua i anota hora, binomi i qui autoritza',
      'El responsable revisa l\'EPI/ERA i anota hora, binomi, zona i tasca',
      'Cada binomi fa una revisió pròpia i mútua de l\'EPI i l\'ERA, sobretot del nivell d\'aire, i s\'hi anota l\'hora d\'entrada, el binomi, la zona assignada i la tasca'
    ],
    correctIndex: 3,
    explanation: 'Cada binomi fa la revisió pròpia i mútua (control d\'aire), i al punt de control d\'accés s\'anota hora d\'entrada, binomi, zona assignada i tasca.'
  },
  {
    topic: 16,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P26] Quina actitud reflecteix el lladruc agut i repetitiu d\'un gos en una intervenció amb animals?',
    options: [
      'Incertesa o actitud indefinida',
      'Inseguretat i nerviosisme',
      'Seguretat i voluntat de defensa',
      'Dominància territorial'
    ],
    correctIndex: 1,
    explanation: 'Un lladruc agut i repetitiu indica inseguretat i nerviosisme (un lladruc greu i pausat indica seguretat/defensa).'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P27] Entre les característiques de l\'extinció amb mitjans aeris en un incendi forestal, quina NO s\'hi correspon?',
    options: [
      'Els helicòpters permeten descàrregues amb gran precisió',
      'Serveixen per protegir zones sensibles (infraestructures, nuclis)',
      'Els avions permeten abocar grans volums d\'aigua o retardant',
      'En zones inaccessibles, les descàrregues poden substituir les maniobres terrestres'
    ],
    correctIndex: 3,
    explanation: 'Els mitjans aeris són un suport/complement per abaixar intensitat o protegir zones, mai substitueixen les maniobres terrestres per liquidar/rematar un incendi.'
  },
  {
    topic: 13,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P28] Prenent g = 10 m/s², quina força cal aplicar a l\'èmbol petit (400 mm²) d\'un gat hidràulic per aixecar 1.400 kg sobre l\'èmbol gran (80 cm²)?',
    options: ['35 N', '70 N', '175 N', '700 N'],
    correctIndex: 3,
    explanation: 'A1 = 4 cm², A2 = 80 cm² (relació 20:1). F2 = 1.400 · 10 = 14.000 N → F1 = 14.000 / 20 = 700 N.'
  },
  {
    topic: 29,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P29] De quina manera s\'han de destinar els recursos en un incident de múltiples víctimes?',
    options: [
      'Atenent primer les víctimes més properes a l\'accés',
      'Reservant-los per als casos en què se\'n pugui obtenir un benefici real',
      'Concentrant-los en les víctimes més greus, al marge del pronòstic',
      'Repartint-los a parts iguals entre les víctimes'
    ],
    correctIndex: 1,
    explanation: 'En un IMV (recursos limitats), el triatge prioritza fer el màxim bé al màxim nombre de persones, reservant recursos per a qui en pugui obtenir un benefici real.'
  },
  {
    topic: 5,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P30] Segons la Llei 1/1998, com es publiquen al DOGC les lleis del Parlament i qui n\'elabora la versió oficial castellana?',
    options: [
      'Edicions simultànies i la fa el Govern',
      'Primer català i després castellà, i la fa el Parlament',
      'En edicions simultànies en català i en castellà, i la versió oficial castellana la fa el Parlament',
      'Primer català i després castellà, i la fa el Govern'
    ],
    correctIndex: 2,
    explanation: 'Es publiquen en edicions simultànies al DOGC i correspon al Parlament de Catalunya elaborar-ne la versió oficial castellana.'
  },
  {
    topic: 14,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P31] Un punt de Catalunya té la coordenada UTM X = 412300. A quina distància del meridià central del seu fus es troba?',
    options: ['8,77 km', '87,7 km', '412,3 km', '912,3 km'],
    correctIndex: 1,
    explanation: 'Al sistema UTM, el meridià central té falsa coordenada X = 500.000 m. |500.000 - 412.300| = 87.700 m = 87,7 km.'
  },
  {
    topic: 23,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P32] Referent als sistemes fixos d\'extinció automàtica per agents gasosos, totes són certes EXCEPTE:',
    options: [
      'Solen descarregar amb un retard per evacuar el recinte',
      'Poden inundar tot el recinte o actuar localment sobre un equip',
      'Són apropiats quan els equips no toleren l\'aigua',
      'A la central de detecció n\'hi ha prou amb el senyal d\'una de les dues zones per disparar el gas'
    ],
    correctIndex: 3,
    explanation: 'Per seguretat (evitar falses descàrregues), la central requereix la confirmació simultània de dues zones/detectors (doble detecció) abans de disparar el gas.'
  },
  {
    topic: 1,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P33] Un cop el Senat ha vetat un projecte de llei, en quin supòsit permet l\'art. 90 CE que el Congrés en ratifiqui el text inicial per majoria simple?',
    options: [
      'Si el Govern o el Congrés han declarat urgent el projecte',
      'Un cop transcorreguts dos mesos des de la interposició del veto',
      'Si el veto no s\'ha aprovat en un missatge motivat',
      'Un cop passats vint dies'
    ],
    correctIndex: 1,
    explanation: 'Art. 90.2 CE: si no obté majoria absoluta immediata, el Congrés pot ratificar-lo per majoria simple un cop transcorreguts 2 mesos des de la interposició del veto.'
  },
  {
    topic: 26,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P34] Amb el trànsit ja protegit, una dotació ataca l\'incendi d\'una furgoneta petita aturada al voral. Des de quina posició treballa el bomber de la llança?',
    options: [
      'En diagonal i des de sobrevent, per evitar l\'impacte directe de fums, calor i peces projectades',
      'De front i des de sobrevent, a màxima distància',
      'Arran d\'una roda i des de sobrevent',
      'Des de darrere i a l\'altura dels eixos'
    ],
    correctIndex: 0,
    explanation: 'L\'aproximació i atac en incendis de vehicles es fa sempre en diagonal (evitant els punts febles/projectables frontals i posteriors) i des de sobrevent.'
  },
  {
    topic: 13,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P35] A 1.400 m d\'altitud, quina alçada màxima teòrica d\'aspiració té una autobomba? (1 atm = 1,033 kg/cm² = 10,33 m.c.a.)',
    options: ['8,19 m', '8,52 m', '9,04 m', '10,15 m'],
    correctIndex: 1,
    explanation: 'A nivell del mar: 10,33 m. Pèrdua ≈ 0,129 m per cada 100 m → 14 × 0,129 = 1,806 m. 10,33 - 1,81 ≈ 8,52 m.'
  },
  {
    topic: 18,
    difficulty: 'Difícil',
    question: '[MATAFOCS 1 · P36] Dins de la flota d\'autobombes de Bombers de la Generalitat, quina quantitat d\'escumogen multiexpansió i resistent als alcohols transporta la BNP?',
    options: [
      'Entre 200 i 600 litres',
      'Entre 1.000 i 2.000 litres',
      'Entre 100 i 500 litres',
      'Entre 500 i 1.000 litres'
    ],
    correctIndex: 3,
    explanation: 'La Bomba Nodrissa Pesada (BNP) transporta entre 500 i 1.000 litres d\'escumogen multiexpansió i resistent als alcohols.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P37] En estructures col·lapsades en un carrer amb pendent, on se situen els vehicles i com treballa el guaita?',
    options: [
      'Per sobre de l\'edificació afectada, i el guaita disposa de senyals acústics de seguretat i es comunica directament amb el comandament',
      'Per sota de l\'edificació afectada, comunicat amb el comandament',
      'Per sobre, transmetent avisos a través del cap de l\'equip de recerca',
      'Per sota, transmetent avisos a través del cap de l\'equip de recerca'
    ],
    correctIndex: 0,
    explanation: 'Vehicles a la part alta del carrer (per sobre l\'edifici afectat); guaita amb senyals acústics en comunicació directa amb el comandament.'
  },
  {
    topic: 10,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P38] Una barra de ferro de 11 kg se submergeix en 23 kg d\'aigua a 20 °C i s\'equilibren a 50 °C (c_Fe = 460, c_aigua = 4.180 J/kg·°C). Quina temperatura tenia la barra?',
    options: ['57 °C', '113 °C', '620 °C', '1.000 °C'],
    correctIndex: 2,
    explanation: 'Q_aigua = 23·4180·(50-20) = 2.884.200 J = 11·460·(T - 50) → T - 50 = 2.884.200 / 5.060 = 570 → T = 620 °C.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P39] D\'on obtenen l\'estabilitat global els murs de càrrega del sistema constructiu tradicional?',
    options: [
      'De les unions rígides amb els forjats',
      'De les creus de Sant Andreu',
      'De la sabata aïllada',
      'De la seva massa i de la trava amb els altres murs'
    ],
    correctIndex: 3,
    explanation: 'Els murs de càrrega tradicionals obtenen l\'estabilitat global gràcies a la seva massa (pes propi) i a la trava amb els murs perpendiculars.'
  },
  {
    topic: 7,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P40] En absència del subdirector general operatiu, qui el supleix en les seves funcions de guàrdia operativa segons el Decret 276/2016?',
    options: [
      'L\'inspector habilitat com a cap operatiu que ell mateix determini',
      'El cap de coordinació de la Sala Central de Bombers de guàrdia',
      'El cap operatiu de guàrdia a l\'àmbit on es produeix l\'emergència',
      'L\'inspector habilitat amb més antiguitat'
    ],
    correctIndex: 0,
    explanation: 'D 276/2016: en absència del subdirector general operatiu, el supleix l\'inspector habilitat com a cap operatiu que ell mateix determini.'
  },
  {
    topic: 20,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P41] Segons la instrucció «Seguretat en les intervencions», a qui correspon adequar el nivell d\'autoprotecció dels bombers en exercicis, pràctiques i maniobres?',
    options: [
      'Al cap d\'intervenció',
      'Al cap de sector',
      'Al cap de maniobra',
      'Al cap de torn'
    ],
    correctIndex: 3,
    explanation: 'Correspon al cap de torn adequar el nivell d\'autoprotecció dels bombers durant pràctiques i maniobres.'
  },
  {
    topic: 16,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P42] Com se subjecta una au de mida mitjana quan cal manipular-la en una intervenció amb animals?',
    options: [
      'Dins la mà, amb suavitat',
      'Amb les ales plegades i les potes cap enrere',
      'Contra el cos amb un braç i controlant-ne el coll',
      'Per la base de les ales, amb les potes lliures'
    ],
    correctIndex: 1,
    explanation: 'Les aus de mida mitjana se subjecten amb les ales plegades contra el cos i les potes cap enrere.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P43] Un ventilador elèctric monofàsic funciona a 230 V, 15 A i factor de potència 0,8. Quina potència activa consumeix?',
    options: ['690 W', '2.208 W', '2.760 W', '3.450 W'],
    correctIndex: 2,
    explanation: 'P = V · I · cos(φ) = 230 · 15 · 0,8 = 2.760 W.'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P44] Sobre les característiques dels autobusos i autocars que condicionen el rescat, quina afirmació és FALSA?',
    options: [
      'Alguns autocars duen lavabo o cabina de descans (punts cecs)',
      'En alguns models hi ha polsador d\'aturada del motor al tauler o darrere',
      'Els seients dels passatgers solen anar soldats directament a l\'estructura del bastidor del vehicle',
      'Els accessos habituals són a la banda dreta amb dues portes'
    ],
    correctIndex: 2,
    explanation: 'Els seients dels passatgers acostumen a anar fixats amb cargols (no soldats) als laterals i al terra/guies.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P45] Pel que fa a les sirenes i llums prioritaris dels vehicles de bombers, en quines circumstàncies se\'n recomana reduir l\'ús?',
    options: [
      'En autopistes i vies ràpides',
      'En aproximacions a interseccions',
      'En entorns urbans molt densos',
      'En zones escolars o de nit'
    ],
    correctIndex: 3,
    explanation: 'Es recomana reduir l\'ús de senyals acústics/sirenes en zones escolars o de nit (sempre mantenint la seguretat).'
  },
  {
    topic: 17,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P46] Quan una unitat rep per ràdio una crida però en aquell moment no pot atendre la comunicació, què estableixen les pautes?',
    options: [
      'Indicar a l\'emissor que esperi i, quan el pugui atendre, donar-li pas perquè transmeti el missatge',
      'No contestar fins que el pugui atendre',
      'Contestar «Rebut» i atendre\'l després',
      'Demanar a la SCT que reculli el missatge'
    ],
    correctIndex: 0,
    explanation: 'Cal contestar indicant «Esperi» i, quan estigui disponible, donar pas amb «Endavant».'
  },
  {
    topic: 31,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P47] Després d\'una rierada, es busca pels marges un home gran que podria haver quedat mig ocult entre els canyars. Quin rastreig a peu s\'hi aplica?',
    options: [
      'Rastreig extensiu per camins',
      'Rastreig extensiu en grup reduït',
      'Un rastreig intensiu, lent i detallat, en grup reduït i amb pals o sondes',
      'Rastreig intensiu en grups nombrosos'
    ],
    correctIndex: 2,
    explanation: 'Per revisar canyars i marges amb sospita d\'ocultació es fa un rastreig intensiu, lent i detallat, en grup reduït i amb pals o sondes.'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P48] Dins de quin tipus de risc NRBQ s\'inclouen els salvaments de persones amb obesitat mòrbida i d\'animals no domèstics, i quina n\'és la principal dificultat?',
    options: [
      'Risc químic — detecció',
      'Risc biològic — descontaminació',
      'En el risc biològic, i la principal dificultat n\'és la detecció, perquè no és habitual disposar d\'aparells de mesura',
      'Risc químic — descontaminació'
    ],
    correctIndex: 2,
    explanation: 'Aquests entorns/intervencions s\'enquadren en el risc biològic, i la seva principal dificultat és la detecció (no hi ha aparells de lectura directa immediata com en químic).'
  },
  {
    topic: 9,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P49] Circulant a 54 km/h, una autobomba accelera uniformement a 0,4 m/s² durant 25 s. Quina distància recorre?',
    options: ['500 m', '625 m', '1.000 m', '1.475 m'],
    correctIndex: 0,
    explanation: 'vi = 54 / 3,6 = 15 m/s. d = vi·t + ½·a·t² = 15·25 + 0,5·0,4·625 = 375 + 125 = 500 m.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P50] Un veí il·lès que es mou sense dificultat espera al balcó d\'un 2n pis d\'un pati interior massa estret per a l\'autoescala. Quina és la manera més ràpida i segura de rescatar-lo?',
    options: [
      'Penjar l\'escala colissa de la barana del balcó',
      'Recolzar l\'escala colissa a la façana, sota el balcó, i fer-lo baixar per la mateixa escala',
      'Recolzar l\'escala colissa i baixar-lo en llitera',
      'Penjar l\'escala i baixar-lo en llitera'
    ],
    correctIndex: 1,
    explanation: 'Si la persona està il·lesa i pot transitar-hi, recolzar l\'escala colissa a la façana i fer-la baixar (degudament assegurada) és la via més ràpida i segura.'
  },
  {
    topic: 23,
    difficulty: 'Difícil',
    question: '[MATAFOCS 1 · P51] Un edifici té una escala protegida que desemboca a la planta de sortida. Quina longitud màxima pot tenir el recorregut fins a la sortida de l\'edifici si no és per un sector de risc mínim?',
    options: ['25 metres', '10 metres', '30 metres', '15 metres'],
    correctIndex: 3,
    explanation: 'CTE DB-SI: el recorregut des de la porta de sortida d\'una escala protegida fins a una sortida d\'edifici no pot superar els 15 metres (llevat que sigui per sector de risc mínim).'
  },
  {
    topic: 29,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P52] De què depèn, en la coordinació entre cossos d\'un IMV, que s\'apliqui la zonificació de Bombers o la de Mossos d\'Esquadra?',
    options: [
      'Del cos que hi ha arribat primer',
      'Del tipus d\'incident i de qui ostenta el comandament operatiu',
      'Del nombre de víctimes greus o mortals',
      'De la decisió del SEM'
    ],
    correctIndex: 1,
    explanation: 'Depèn del tipus d\'incident (accidental vs penal/intencionat) i de qui ostenta el comandament operatiu (tot i ser funcionalment equivalents).'
  },
  {
    topic: 4,
    difficulty: 'Difícil',
    question: '[MATAFOCS 1 · P53] L\'article 21 de la Llei 19/2020 obliga a respectar el dret a la igualtat de tracte i evitar abusos. A quins subjectes s\'adreça aquesta obligació?',
    options: [
      'Mossos, policia local i Bombers de la Generalitat',
      'Mossos, policia local i personal dels centres penitenciaris',
      'Al Cos de Mossos d\'Esquadra, a la policia local i als treballadors de les empreses de seguretat privada',
      'Mossos, policia local i personal dels centres d\'internament de menors'
    ],
    correctIndex: 2,
    explanation: 'Art. 21 Llei 19/2020 (Àmbit de la seguretat pública): Mossos d\'Esquadra, policies locals i personal de les empreses de seguretat privada.'
  },
  {
    topic: 22,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P54] Sense una terminologia comuna establerta en una intervenció conjunta amb altres agències, què és important fer segons el SISCOM?',
    options: [
      'Fer servir les sigles de Bombers',
      'Fer servir les sigles de cada agència',
      'Evitar les sigles i adoptar el vocabulari de l\'agència líder',
      'Evitar les sigles i fer servir un vocabulari senzill que defineixi els conceptes'
    ],
    correctIndex: 3,
    explanation: 'El SISCOM recomana evitar sigles internes i utilitzar llenguatge clar i vocabulari senzill per evitar malentesos entre agències.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P55] El far portàtil d\'una dotació consumeix 24 W i s\'alimenta amb una bateria de 12 V i 6 Ah. Quant de temps pot funcionar?',
    options: ['0,25 h', '0,5 h', '2 h', '3 h'],
    correctIndex: 3,
    explanation: 'Energia bateria = 12 V · 6 Ah = 72 Wh (o I = 24/12 = 2 A). Temps = 72 Wh / 24 W = 3 hores.'
  },
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P56] Quina clau de tall de gas sovint no es col·loca en les instal·lacions domèstiques?',
    options: [
      'La clau d\'usuari',
      'La clau d\'edifici',
      'La clau de comptador',
      'La clau del regulador'
    ],
    correctIndex: 1,
    explanation: 'En moltes instal·lacions domèstiques antigues o individuals sovint no hi ha clau d\'edifici (sí clau de connexió/escomesa, comptador i usuari).'
  },
  {
    topic: 24,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P57] En aplicar la tècnica d\'entrada segura, el binomi fa una polvorització curta cap al sostre i observa que la temperatura baixa i el fum és estable. Com continua?',
    options: [
      'Entrar i tancar la porta immediatament al darrere del binomi, per evitar que l\'aire exterior reactivi el foc',
      'Entrar i deixar la porta oberta fins a localitzar el focus',
      'Deixar la porta oberta perquè surti el fum',
      'Tancar la porta un cop localitzat el focus'
    ],
    correctIndex: 0,
    explanation: 'Control de ventilació en entrada segura: entrar i tancar la porta immediatament al darrere per limitar l\'aportació d\'oxigen.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P58] En una sitja de gra, la pols de cereal dispersada a l\'aire pot provocar una explosió violenta, mentre que el gra amuntegat crema lentament. Quin condicionant ho explica?',
    options: [
      'Disminució del punt d\'autoignició',
      'Augment del poder calorífic',
      'L\'augment exponencial de la superfície de contacte entre el combustible i el comburent',
      'Reducció de la humitat'
    ],
    correctIndex: 2,
    explanation: 'En polvoritzar-se el combustible augmenta exponencialment la seva superfície específica de contacte amb l\'oxigen de l\'aire.'
  },
  {
    topic: 14,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P59] Per calcular la posició d\'un receptor GNSS en tres dimensions, quin mètode s\'aplica i amb quants satèl·lits com a mínim?',
    options: [
      'Triangulació d\'angles, mínim 3 satèl·lits',
      'Triangulació d\'angles, mínim 4 satèl·lits',
      'La trilateració de distàncies, amb un mínim de quatre satèl·lits',
      'Trilateració de distàncies, mínim 3 satèl·lits'
    ],
    correctIndex: 2,
    explanation: 'El GNSS utilitza trilateració de distàncies i requereix com a mínim 4 satèl·lits per determinar latitud, longitud, altitud (3D) i corregir el rellotge.'
  },
  {
    topic: 13,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P60] Dues mànegues surten d\'una bifurcació que rep 900 l/min. Per la primera, de 16 cm² de secció, l\'aigua circula a 2,5 m/s. Quin cabal porta la segona?',
    options: ['240 l/min', '660 l/min', '896 l/min', '450 l/min'],
    correctIndex: 1,
    explanation: 'S = 16 cm² = 0,0016 m². Q1 = 0,0016 · 2,5 = 0,004 m³/s = 4 L/s = 240 L/min. Q2 = 900 - 240 = 660 L/min.'
  },
  {
    topic: 3,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P61] La Llei 31/1995 de PRL determina els casos en què cal la presència de recursos preventius. Quin d\'aquests supòsits hi figura?',
    options: [
      'Que la Inspecció de Treball i Seguretat Social la requereixi per les condicions de treball detectades',
      'Que els riscos s\'agreugin per personal en formació',
      'Que el comitè consideri perilloses les activitats',
      'Que el servei de prevenció aliè ho proposi'
    ],
    correctIndex: 0,
    explanation: 'Art. 32 bis LPRL: quan els riscos es puguin agreujar per concurrència d\'operacions, activitats reglamentàriament perilloses o quan ho requereixi la Inspecció de Treball.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P62] Als camins forestals estrets, quin risc comporten sobretot els talussos amb terra sobreposada?',
    options: [
      'Que el talús es desprengui sobre el camí i atrapi el vehicle',
      'Que el terreny falli sota el vehicle i el faci bolcar',
      'Que la terra solta faci patinar les rodes',
      'Que el marge cedeixi i deixi el vehicle encallat'
    ],
    correctIndex: 1,
    explanation: 'Els marges o talussos amb terra sobreposada (no consolidada) poden cedir sota el pes del camió i provocar la bolcada.'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P63] Quina d\'aquestes afirmacions sobre l\'atac directe amb línia d\'aigua en un incendi forestal NO és certa?',
    options: [
      'L\'alta pressió en millora la penetració i redueix el consum d\'aigua',
      'Permet rebaixar la intensitat abans d\'actuar-hi amb eines manuals',
      'Té una efectivitat ràpida sobre flames baixes i focs de superfície',
      'És la maniobra amb què es construeixen les línies de contenció o de defensa'
    ],
    correctIndex: 3,
    explanation: 'Les línies de defensa es construeixen amb eines manuals/maquinària (atac indirecte/paral·lel) eliminant combustible fins a sòl mineral, no amb línia d\'aigua directa.'
  },
  {
    topic: 17,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P64] Durant una intervenció amb mitjans aeris, de quina manera es comunica el personal desplegat al terreny amb l\'aeronau?',
    options: [
      'Per ràdio, amb canals específics de freqüència de vol i missatges breus i codificats',
      'Pel canal de treball de la dotació',
      'Mitjançant el centre de coordinació',
      'Mitjançant el telèfon del coordinador aeri'
    ],
    correctIndex: 0,
    explanation: 'La comunicació terra-aire es fa per ràdio en canals específics de freqüència aeronàutica/vol, amb missatges breus i precisos.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P65] El motor tèrmic d\'un vehicle aprofita el 40 % de l\'energia del combustible i la transmissió en lliura a les rodes el 90 %. Quin rendiment global té el conjunt?',
    options: ['El 40 %', 'El 44 %', 'El 36 %', 'El 30 %'],
    correctIndex: 2,
    explanation: 'η_total = 0,40 × 0,90 = 0,36 = 36 %.'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 1 · P66] Les etiquetes dels vestits de protecció química informen de la permeabilitat. De quins dos factors depèn aquesta permeabilitat?',
    options: [
      'De la toxicitat del producte i la forma d\'aplicació',
      'De l\'estat d\'agregació del producte i de la forma en què s\'aplica sobre l\'equip',
      'De l\'estat d\'agregació i de la via d\'entrada',
      'De la toxicitat i de la via d\'entrada'
    ],
    correctIndex: 1,
    explanation: 'La permeabilitat d\'un vestit químic depèn de l\'estat d\'agregació del producte (gas, líquid, sòlid) i de la forma en què s\'aplica (pressió, esprai, esquitxada).'
  },
  {
    topic: 31,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P67] Mentre un equip despenja una víctima per una cinglera, comencen a caure pedres i el sector deixa de ser practicable. Quina previsió prèvia permet resoldre la situació?',
    options: [
      'La ruta alternativa d\'accés i d\'evacuació, amb punts de comunicació i zones segures',
      'L\'ordre de completar la maniobra fins al final',
      'El relleu programat d\'un segon equip',
      'La instal·lació d\'una segona corda de treball'
    ],
    correctIndex: 0,
    explanation: 'L\'avaluació de riscos prèvia preveu rutes alternatives d\'accés i evacuació amb punts de comunicació i zones segures.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P68] Com s\'anomenen els elements horitzontals principals que formen els sostres i els paviments d\'un edifici?',
    options: ['Les jàsseres', 'Les biguetes', 'Els forjats', 'Els revoltons'],
    correctIndex: 2,
    explanation: 'Els forjats són els elements horitzontals principals que formen sostres i paviments.'
  },
  {
    topic: 30,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P69] Els mòduls d\'intervenció i l\'ERCC són dos elements del Mecanisme Europeu de Protecció Civil. Quina afirmació és FALSA?',
    options: [
      'El procés de certificació dels mòduls consisteix en dos passos: una visita consultiva i un exercici de taula',
      'Els països els han de registrar a l\'ECPP',
      'L\'ERCC fa seguiment permanent des de Brussel·les',
      'L\'ERCC rep la petició d\'ajuda i demana ajuda als altres països'
    ],
    correctIndex: 0,
    explanation: 'La certificació dels mòduls consta de 3 passos (no 2): visita consultiva, exercici de taula/despatx i exercici real de camp.'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 1 · P70] Mentre espera el recurs sanitari, la dotació ha tret la roba humida a un excursionista en hipotèrmia. Com l\'ha d\'escalfar i on li ha de valorar el pols?',
    options: [
      'Font de calor directa i pols perifèric',
      'Font de calor directa i pols central',
      'Mantes seques i pols perifèric',
      'Amb mantes seques o manta tèrmica, escalfant-lo de manera progressiva, i valorant-li el pols central'
    ],
    correctIndex: 3,
    explanation: 'Reescalfament progressiu passiu (mantes seques / manta tèrmica) i valoració del pols central (carotidi) durant 60 segons.'
  }
];
