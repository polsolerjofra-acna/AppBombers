/**
 * Simulacre Òptim Acadèmia MODEL A'26 (18/09/26) — 77 preguntes (70 + 7 reserva).
 */
export const QUESTIONS_OPTIM_A26 = [
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P1] Respecte al funcionament d\'un sistema anticaigudes, quina de les afirmacions següents és CORRECTA?',
    options: [
      'S\'utilitza connectat exclusivament a l\'anella ventral de retenció.',
      'No impedeix la caiguda lliure, sinó que la para limitant la força de xoc.',
      'Substitueix el sistema de suspensió durant qualsevol progressió vertical.',
      'Impedeix que s\'iniciï qualsevol caiguda lliure de l\'usuari.'
    ],
    correctIndex: 1,
    explanation: 'Un sistema anticaigudes (connectat a l\'anella esternal o dorsal) no evita que s\'iniciï la caiguda, sinó que l\'atura de forma segura limitant la força de xoc (< 6 kN).'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P2] En l\'anàlisi del comportament i de l\'evolució d\'un incendi forestal, què s\'entén per eix de propagació de l\'incendi?',
    options: [
      'El perímetre exterior que delimita tota la superfície afectada pel foc.',
      'La direcció en què bufa el vent i on es poden generar focus secundaris pel llançament de materials incandescents.',
      'La línia imaginària que uneix el punt d\'inici amb el cap de l\'incendi i indica la direcció principal de propagació.',
      'La franja de terreny situada entre el cap i la cua de l\'incendi.'
    ],
    correctIndex: 2,
    explanation: 'L\'eix de propagació és la línia imaginària que va des del punt d\'origen fins al cap de l\'incendi, marcant-ne la direcció d\'avanç principal.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P3] En les maniobres de treball i rescat en alçada, per a què s\'utilitzen principalment els nusos Prusik i Machar?',
    options: [
      'Per unir dos ancoratges rígids.',
      'Per fixar permanentment una politja.',
      'Com a nusos de topall.',
      'Com a sistemes autoblocants de seguretat.'
    ],
    correctIndex: 3,
    explanation: 'Tant el nus Prusik com el Machard són nusos autoblocants que llisquen quan no tenen càrrega i es bloquegen sobre la corda en rebre tensió.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P4] Respecte a les comprovacions prèvies d\'una motoserra abans de començar a treballar, quina afirmació és INCORRECTA?',
    options: [
      'Les motoserres de bateria no necessiten oli per a la cadena.',
      'En qualsevol motoserra cal revisar la tensió i l\'esmolat de la cadena.',
      'En una motoserra de bateria també cal verificar el subministrament d\'oli de cadena.',
      'En una motoserra de bateria cal comprovar la càrrega disponible.'
    ],
    correctIndex: 0,
    explanation: 'Incorrecta: totes les motoserres (incloent-hi les de bateria) necessiten oli de greixatge per a la cadena i l\'espasa.'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P5] D\'acord amb el Pla especial d\'emergències per incendis forestals de Catalunya (INFOCAT), quines són les quatre fases en què es pot trobar un incendi forestal?',
    options: [
      'Actiu, estabilitzat, controlat i extingit.',
      'Actiu, estabilitzat, confinat i extingit.',
      'Actiu, contingut, controlat i extingit.',
      'Inicial, actiu, estabilitzat i extingit.'
    ],
    correctIndex: 0,
    explanation: 'Les quatre situacions/fases operatives d\'un incendi forestal segons l\'INFOCAT són: actiu, estabilitzat, controlat i extingit.'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P6] Una bombera inicia una prova amb l\'ampolla d\'aire a 300 bar i, després de 5 minuts d\'esforç moderat, la pressió és de 250 bar. Quin és el seu consum personal d\'aire?',
    options: ['5 bar/minut.', '15 bar/minut.', '25 bar/minut.', '10 bar/minut.'],
    correctIndex: 3,
    explanation: 'Consum = (300 bar - 250 bar) / 5 min = 50 bar / 5 min = 10 bar/minut.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P7] Un vehicle de bombers circula inicialment a 4 m/s i accelera de manera constant a 2 m/s² durant 5 segons. Quina distància recorre durant aquest interval?',
    options: ['45 m.', '25 m.', '70 m.', '50 m.'],
    correctIndex: 0,
    explanation: 'd = v₀·t + ½·a·t² = 4·5 + 0,5·2·5² = 20 + 25 = 45 m.'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P8] Quina és la quantitat d\'energia elèctrica que pot emmagatzemar habitualment la bateria d\'un cotxe 100% elèctric o BEV?',
    options: [
      'Entre 10 i 20 kWh.',
      'Entre 90 i 140 kWh.',
      'Entre 20 i 40 kWh.',
      'Entre 40 i 90 kWh.'
    ],
    correctIndex: 3,
    explanation: 'Actualment la majoria de turismes 100% elèctrics (BEV) incorporen bateries d\'alta tensió d\'entre 40 i 90 kWh.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P9] Durant la captura i manipulació d\'un gat en una actuació de rescat animal, quin element indica el manual que no s\'ha d\'utilitzar pel risc d\'asfíxia?',
    options: [
      'Un llaç de captura.',
      'Uns guants resistents.',
      'Una caixa de transport.',
      'Una tovallola.'
    ],
    correctIndex: 0,
    explanation: 'No s\'ha d\'utilitzar el llaç de captura (pèrtiga amb llaç) amb gats perquè s\'estressen molt i poden asfixiar-se o lesionar-se greument el coll.'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P10] Quan en una intervenció amb risc químic es detecta una fuita en una canonada, mànega o conducció, quina maniobra de contenció consisteix a aplicar mordasses o collars directament sobre el punt de fuita?',
    options: [
      'Embridament.',
      'Tancament/aïllament.',
      'Pressurització.',
      'Taponament.'
    ],
    correctIndex: 0,
    explanation: 'L\'embridament consisteix a col·locar brides, mordasses o collars hermètics al voltant de la canonada per segellar la fuita.'
  },
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P11] Durant una actuació de rescat o captura de fauna salvatge a Catalunya, quines espècies d\'escurçó verinós es poden trobar al territori català?',
    options: [
      'Pirinenc i comú.',
      'Comú i europeu.',
      'Alpí i mediterrani.',
      'Pirinenc i ibèric.'
    ],
    correctIndex: 3,
    explanation: 'A Catalunya habiten dues espècies d\'escurçó: l\'escurçó pirinenc (Vipera aspis) i l\'escurçó ibèric o del nord/ibèric (Vipera latastei).'
  },
  {
    topic: 16,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P12] En els ascensors moderns que no disposen d\'una cambra de màquines independent, quin tipus de motor s\'utilitza normalment dins del mateix buit?',
    options: [
      'Un motor síncron amb pistó.',
      'Un motor d\'adherència tipus gearless.',
      'Un motor hidràulic amb reductor.',
      'Un motor mecànic amb palanques.'
    ],
    correctIndex: 1,
    explanation: 'Els ascensors sense sala de màquines (MRL) acostumen a muntar motors elèctrics d\'imants permanents sense reductor (gearless) integrats al buit.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P13] Quin és el valor aproximat que pren el cosinus quan l\'angle considerat és de 45°?',
    options: ['0,5.', '0,86.', '0,57.', '0,7.'],
    correctIndex: 3,
    explanation: 'cos(45°) = √2 / 2 ≈ 0,707 ≈ 0,7.'
  },
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P14] En les tasques de tall amb motoserra, quin radi mínim delimita la zona de risc B al voltant de l\'operador?',
    options: [
      'Un metre.',
      'Un metre i mig.',
      'Dos metres i mig.',
      'Dos metres.'
    ],
    correctIndex: 3,
    explanation: 'Al voltant de l\'operador de motoserra s\'estableix un radi de seguretat mínim de 2 metres (zona d\'exclusió immediata).'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P15] Quan un incendi de vegetació es desenvolupa com a foc topogràfic, quins són els principals factors que condicionen el seu comportament?',
    options: [
      'El combustible, el fum i la radiació.',
      'La pressió, la humitat i la temperatura.',
      'La temperatura, la humitat i la pluja.',
      'El pendent, l\'orientació i els vents.'
    ],
    correctIndex: 3,
    explanation: 'Els focs topogràfics estan governats pel pendent del terreny, l\'orientació (insolació) i els vents locals o topogràfics (marinades, brises de vall/muntanya).'
  },
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P16] Quines modalitats de gruatge lleuger amb autoescala automàtica (AEA) es descriuen per al rescat de persones?',
    options: [
      'Gruatge simple, dinàmic, triangulat i compensat.',
      'Gruatge directe, indirecte, doble i suspès.',
      'Gruatge simple, complex, punt fix i salvament urgent amb triangle.',
      'Gruatge vertical, horitzontal, mixt i assistit.'
    ],
    correctIndex: 2,
    explanation: 'El manual de rescat amb AEA descriu les quatre modalitats de gruatge lleuger: simple, complex, punt fix i salvament urgent amb triangle d\'evacuació.'
  },
  {
    topic: 20,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P17] Tenint en compte la funció del manòmetre i indicador de pressió de l\'ERA, quina de les següents afirmacions és INCORRECTA?',
    options: [
      'L\'alarma de baixa pressió (reserva) s\'activa quan la pressió de l\'ampolla arriba aprox. al 25% de la seva capacitat.',
      'L\'avís de reserva d\'aire s\'activa a partir de 60 bar (segons model d\'ERA) i emet un so continu fins al 0 bar.',
      'Un dels avisos de pressió és als 110 bar.',
      'Un dels avisos de pressió és als 170.'
    ],
    correctIndex: 0,
    explanation: 'Incorrecta: la reserva (55-60 bar en una ampolla de 300 bar) representa aproximadament el 18-20% de la capacitat, no el 25%.'
  },
  {
    topic: 26,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P18] En un incendi que afecta un contenidor, quina configuració d\'atac s\'ha d\'emprar segons la metodologia bàsica d\'extinció?',
    options: [
      'Una línia de Ø25 mm en alta pressió, treballant a distància prudent amb raig difós.',
      'Una línia de Ø25 mm en baixa pressió, aproximant-se al màxim amb raig compacte.',
      'Una línia de Ø35 mm en alta pressió, treballant a curta distància amb raig difós.',
      'Una línia de Ø45 mm en baixa pressió, treballant amb raig compacte.'
    ],
    correctIndex: 0,
    explanation: 'L\'atac estàndard a contenidors es fa amb línia de Ø25 mm en alta pressió, mantenint una distància de seguretat i utilitzant raig difós/polvoritzat.'
  },
  {
    topic: 10,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P19] Quins són els àtoms molt electronegatius que, units a l\'hidrogen, poden donar lloc a ponts d\'hidrogen?',
    options: [
      'Carboni, sofre o fòsfor.',
      'Sodi, potassi o liti.',
      'Ferro, coure o alumini.',
      'Oxigen, nitrogen o fluor.'
    ],
    correctIndex: 3,
    explanation: 'Només l\'oxigen (O), el nitrogen (N) i el fluor (F) tenen prou electronegativitat i mida petita per formar ponts d\'hidrogen intensos.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P20] Segons els criteris bàsics dels Bombers de la Generalitat per a un apuntalament estructural, quina distància màxima hi pot haver entre puntals?',
    options: ['1 metre.', '0,75 metres.', '1,50 metres.', '0,50 metres.'],
    correctIndex: 0,
    explanation: 'La separació màxima recomanada entre puntals en un apuntalament lineal de Bombers de la Generalitat és d\'1 metre.'
  },
  {
    topic: 14,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P21] Dos vehicles pesants coincideixen en un camí terciari on l\'amplada de la via no permet efectuar el creuament amb seguretat. Quina mesura operativa s\'ha d\'adoptar?',
    options: [
      'Limitar l\'accés als vehicles amb una amplada inferior a 3 m.',
      'Circular únicament pels sobreamples habilitats cada 100-150 m.',
      'Permetre el creuament sempre que un dels vehicles faci marxa enrere.',
      'Considerar-lo d\'un sol sentit o establir un control de circulació.'
    ],
    correctIndex: 3,
    explanation: 'En un camí terciari sense possibilitat de creuament segur, cal considerar-lo de sentit únic o regular-ne el trànsit mitjançant control de circulació.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P22] En una operació de recerca dins d\'una estructura col·lapsada, quin és el marcatge inicial que estableix el manual quan els equips detecten indicis d\'una possible víctima?',
    options: [
      'Una gran lletra X d\'uns 50 cm.',
      'Un cercle vermell amb el nombre de bombers.',
      'Una gran lletra V d\'uns 50 cm.',
      'Una fletxa verda orientada cap a l\'exterior.'
    ],
    correctIndex: 2,
    explanation: 'Segons la simbologia INSARAG/Bombers de marcatge de víctimes, quan hi ha indicis d\'una possible víctima es marca una gran lletra V (~50 cm) al punt localitzat.'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P23] En les instal·lacions ferroviàries electrificades, quina és la funció principal de la línia d\'alimentació o feeder?',
    options: [
      'Alimentar exclusivament els sistemes de comunicacions i senyalització ferroviària.',
      'Alimentar la catenària a intervals regulars per reforçar el subministrament elèctric.',
      'Connectar directament la catenària amb els rails per tancar el circuit de tracció.',
      'Substituir la catenària en els trams on no hi ha subestacions elèctriques.'
    ],
    correctIndex: 1,
    explanation: 'El feeder és el cable d\'alimentació paral·lel a la via que injecta corrent a la catenària a intervals regulars per evitar caigudes de tensió.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P24] En actuacions de recerca i rescat en estructures col·lapsades, què indica un toc llarg seguit d\'un toc curt en el sistema de senyals acústics?',
    options: [
      'Evacuació immediata per perill imminent.',
      'Petició de socors dins la zona calenta.',
      'Aturada de les operacions mantenint posicions.',
      'Represa de les operacions amb la situació estabilitzada.'
    ],
    correctIndex: 3,
    explanation: 'Als senyals acústics USAR/INSARAG: 1 toc llarg = aturada/silenci; 3 tocs curts = evacuació immediata; 1 toc llarg + 1 toc curt = represa de les operacions.'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P25] Quins són els tres factors que es tenen en compte per determinar l\'alineació del foc (sistema CPS)?',
    options: [
      'Vent, humitat i pendent.',
      'Orientació, pendent i vent.',
      'Combustible, pendent i temperatura.',
      'Orientació, radiació i humitat.'
    ],
    correctIndex: 1,
    explanation: 'El sistema CPS (Campbell Prediction System) avalua l\'alineació de tres factors: orientació (insolació), pendent i vent.'
  },
  {
    topic: 3,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P26] Segons l\'article 15 de la Llei 31/1995, de 8 de novembre, de Prevenció de Riscos Laborals, quin dels següents és un principi de l\'acció preventiva?',
    options: [
      'La formació dels treballadors en matèria preventiva.',
      'La consulta.',
      'Adoptar mesures que donin prioritat a la protecció col·lectiva respecte de la individual.',
      'La participació equilibrada.'
    ],
    correctIndex: 2,
    explanation: 'L\'art. 15.1.h estableix expressament com a principi de l\'acció preventiva anteposar la protecció col·lectiva a la individual.'
  },
  {
    topic: 13,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P27] Quina de les condicions següents és necessària per al funcionament correcte d\'un sifó?',
    options: [
      'El nivell de sortida ha d\'estar situat per sota de la superfície lliure del líquid del dipòsit.',
      'Ha d\'estar fabricat obligatòriament amb polietilè.',
      'La sortida ha d\'estar situada per sobre del nivell del líquid del dipòsit.',
      'El tub ha d\'estar mig ple perquè la columna de líquid d\'una branca arrossegui la de l\'altra.'
    ],
    correctIndex: 0,
    explanation: 'Perquè el sifó mantingui el flux per gravetat un cop encebat, l\'extrem de sortida ha d\'estar per sota del nivell de la superfície lliure del dipòsit d\'origen.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P28] Quina és la funció principal d\'un sistema de retenció en una intervenció en alçada?',
    options: [
      'Absorbir l\'energia d\'una caiguda lliure.',
      'Parar una caiguda ja iniciada.',
      'Impedir l\'accés a una zona de caiguda.',
      'Mantenir l\'usuari en suspensió vertical.'
    ],
    correctIndex: 2,
    explanation: 'El sistema de retenció limita el desplaçament del bomber per impedir que pugui arribar físicament a la vora o zona de caiguda.'
  },
  {
    topic: 7,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P29] L\'any 2025, el GREC va iniciar un procés de certificació per poder formar part dels recursos activables pel Mecanisme Europeu de Protecció Civil. De quina certificació es tracta?',
    options: [
      'Certificació USAR.',
      'Certificació INSARAG.',
      'Certificació STRAC.',
      'Certificació OSOCC.'
    ],
    correctIndex: 0,
    explanation: 'El GREC dels Bombers de la Generalitat va iniciar el procés de certificació com a mòdul USAR (Urban Search and Rescue) dins el Mecanisme Europeu de Protecció Civil.'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P30] Al cos de Bombers de la Generalitat distingim 3 tipus principals d\'Equips de Protecció Individual (EPI). Quina de les següents afirmacions és INCORRECTA?',
    options: [
      'Els EPI no són equips tancats, a partir dels components propis de cada modalitat, es poden afegir complements específics que reforcin la protecció davant riscos.',
      'L\'EPI pesant s\'utilitza en situacions de baix risc tèrmic, especialment en incendis estructurals. Ofereix un alt nivell de protecció contra flames i radiació.',
      'L\'EPI lleuger està dissenyat per a intervencions en les quals predomina la mobilitat i la rapidesa d\'acció, com ara incendis forestals, assistències tècniques i rescat en entorns urbans.',
      'L\'EPI aquàtic és específic per a actuacions en el medi aquàtic, tant en rius, llacs, embassaments com en zones marítimes.'
    ],
    correctIndex: 1,
    explanation: 'Incorrecta: l\'EPI pesant s\'utilitza en situacions d\'ALT risc tèrmic (no de baix risc tèrmic).'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P31] Una víctima adulta presenta una freqüència respiratòria de 32 respiracions per minut, juntament amb signes de dificultat respiratòria. Quina interpretació és la més adequada?',
    options: [
      'Correspon a una bradipnea i indica una disminució de la respiració.',
      'És una freqüència respiratòria dins dels valors normals.',
      'És una freqüència respiratòria superior al llindar d\'alerta i requereix una actuació immediata.',
      'No és rellevant mentre la víctima mantingui una saturació d\'oxigen superior al 90%.'
    ],
    correctIndex: 2,
    explanation: 'En adults el rang normal és 12-20 rpm; > 29-30 rpm és taquipnea severa (llindar d\'alerta vermella en el triatge) i requereix actuació immediata.'
  },
  {
    topic: 30,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P32] Quin dels següents conjunts recull exclusivament signes premonitoris que el manual associa a un possible col·lapse secundari?',
    options: [
      'Fum, augment de temperatura, vibracions i entrada d\'aire.',
      'Caiguda de runa, fum, augment de pressió i esquerdes estables.',
      'Caiguda de pols, sorolls secs, moviments de runa i canvis en esquerdes.',
      'Humitats, sorolls continus, deformacions i pèrdua de visibilitat.'
    ],
    correctIndex: 2,
    explanation: 'Els signes premonitoris d\'un col·lapse estructural inclouen caiguda de pols, sorolls secs (cruixits), moviment de runa i aparició o eixamplament d\'esquerdes.'
  },
  {
    topic: 16,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P33] S\'activa una alarma d\'incendi d\'un edifici, però no es detecta cap risc. El responsable de l\'edifici demana als bombers que la desconnectin. Quina actuació és més coherent?',
    options: [
      'Desconnectar-ne la bateria perquè ja s\'ha descartat l\'existència d\'un incendi.',
      'No manipular el sistema i contactar amb la central d\'alarmes o la propietat perquè ho resolguin.',
      'Tallar el cable de la sirena per evitar que continuï generant alarma social.',
      'Anul·lar el fusible principal i restablir posteriorment el sistema manualment.'
    ],
    correctIndex: 1,
    explanation: 'Els bombers no han de desconnectar ni manipular instal·lacions privades de protecció contra incendis; la responsabilitat recau en la propietat o l\'empresa mantenidora.'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P34] Quin és l\'ús previst del casc d\'intervenció pesant EN 443 i quines són les seves característiques principals?',
    options: [
      'Serveix per a intervencions en incendis estructurals i entorns amb altes temperatures. Incorpora pantalla facial i clatellera ignífuga.',
      'Serveix per a intervencions en incendis estructurals però té certes limitacions, com per exemple que no és compatible amb l\'ERA.',
      'Serveix per a intervencions en incendis forestals.',
      'Serveix per rescats tècnics i és més lleuger que el casc forestal.'
    ],
    correctIndex: 0,
    explanation: 'El casc EN 443 és per a incendis estructurals i d\'interior, és compatible amb la màscara de l\'ERA i incorpora pantalla facial/ocular i clatellera ignífuga.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P35] En un vehicle equipat amb tracció 4×4 connectable, en quines condicions es pot efectuar el pas de 2H a 4H sense aturar completament el vehicle?',
    options: [
      'No es pot realitzar amb el vehicle en moviment.',
      'A menys de 40 km/h i circulant en línia recta.',
      'A menys de 20 km/h i amb les rodes girades.',
      'A menys de 50 km/h independentment de la trajectòria.'
    ],
    correctIndex: 1,
    explanation: 'El pas de 2H a 4H (marxes llargues) es pot fer en marxa per sota de 40 km/h i amb les rodes rectes; per passar a 4L (reductora) cal aturar el vehicle.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P36] En una intervenció amb un col·lapse estructural, quina distància mínima respecte del lloc del col·lapse estableix el manual per situar els vehicles?',
    options: [
      'Quatre edificacions no afectades.',
      'Tres edificacions no afectades.',
      'Dues edificacions no afectades.',
      'Una edificació no afectada.'
    ],
    correctIndex: 2,
    explanation: 'Com a norma general de seguretat davant possibles col·lapses secundaris o ones expansives, els vehicles s\'estacionen a una distància mínima de dues edificacions no afectades.'
  },
  {
    topic: 7,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P37] Segons el Decret 276/2016, de 19 de juliol, a quin comandament correspon garantir la recollida de les dades de les actuacions operatives realitzades?',
    options: [
      'Al sotscap territorial.',
      'Al cap territorial.',
      'Al cap operatiu.',
      'Al cap de sortida.'
    ],
    correctIndex: 3,
    explanation: 'Correspon al cap de sortida garantir la recollida i registre de les dades de l\'actuació operativa.'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P38] En la valoració primària XABCDE, una víctima presenta una hemorràgia externa molt abundant i activa. Quina actuació correspon prioritzar?',
    options: [
      'Col·locar la víctima en posició lateral de seguretat abans d\'avaluar l\'hemorràgia.',
      'Fer primer una valoració secundària completa per determinar totes les lesions presents.',
      'Comprovar primer la resposta neurològica mitjançant l\'escala AVDN i, posteriorment, controlar l\'hemorràgia.',
      'Controlar immediatament l\'hemorràgia massiva abans de continuar amb la resta de la seqüència.'
    ],
    correctIndex: 3,
    explanation: 'La lletra X (exsanguinating hemorrhage) precedeix la A (via aèria): les hemorràgies massives que amenacen la vida s\'han de controlar immediatament.'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P39] Un incendi forestal en una massa boscosa amb alta càrrega de combustible desenvolupa una columna de fum molt vertical i potent, corrents d\'aire propis i focus secundaris simultanis per davant del front. Quin patró descriu?',
    options: [
      'Un foc de vent.',
      'Un foc convectiu.',
      'Un foc topogràfic.',
      'Un incendi agrícola.'
    ],
    correctIndex: 1,
    explanation: 'Quan la gran càrrega de combustible genera una columna convectiva vertical molt potent que domina la dinàmica del foc i crea corrents propis, és un foc convectiu.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P40] En una recerca física de víctimes dins d\'una estructura col·lapsada, quins patrons de progressió es poden utilitzar per efectuar aquesta recerca?',
    options: [
      'Crida i escolta, venteig i cercles concèntrics.',
      'Avanç en línia, cercles concèntrics i habitacions múltiples.',
      'Cercles concèntrics, càmeres i crida dirigida.',
      'Avanç en línia, geòfons i habitacions múltiples.'
    ],
    correctIndex: 1,
    explanation: 'Els tres patrons sistemàtics de progressió en recerca física d\'estructures col·lapsades són: avanç en línia, cercles concèntrics i habitacions múltiples.'
  },
  {
    topic: 4,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P41] Als efectes de la Llei 19/2020, del 30 de desembre, d\'igualtat de tracte i no-discriminació, s\'entén per discriminació:',
    options: [
      'Diferències de tracte orientades a prevenir, eliminar i, si escau, compensar qualsevol forma de discriminació, que s\'han d\'aplicar mentre subsisteixin les situacions de discriminació que les justifiquen.',
      'L\'acció educativa que potencia la igualtat real d\'oportunitats i l\'eliminació de qualsevol mena de discriminació.',
      'Modificacions i adaptacions necessàries i adequades que, sense imposar cap càrrega desproporcionada o indeguda, s\'apliquen, quan es requereixen en un cas particular, per a garantir a les persones amb discapacitat el gaudi o l\'exercici, en igualtat de condicions, de tots els drets humans i llibertats fonamentals.',
      'Qualsevol distinció, exclusió, restricció o preferència que tingui per objecte o per resultat anul·lar o menyscabar el reconeixement, el gaudi o l\'exercici, en condicions d\'igualtat, dels drets humans i les llibertats fonamentals.'
    ],
    correctIndex: 3,
    explanation: 'La definició correspon a qualsevol distinció, exclusió, restricció o preferència que anul·li o menyscabi el reconeixement o exercici en igualtat dels drets humans.'
  },
  {
    topic: 27,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P42] Quan una intervenció requereix descontaminar superfícies, eines o equips exposats a agents biològics, quina solució s\'utilitza habitualment?',
    options: [
      'Aigua a alta pressió.',
      'Hipoclorit sòdic diluït al 0,5%.',
      'Solució sabonosa concentrada.',
      'Agent amfòter al 5%.'
    ],
    correctIndex: 1,
    explanation: 'La descontaminació biològica habitual de superfícies i materials es fa amb lleixiu (hipoclorit sòdic) diluït al 0,5%.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P43] En relació amb l\'ús de la pols química seca com a agent extintor, quina opció descriu correctament una de les seves principals limitacions?',
    options: [
      'Facilitat de neteja.',
      'La majoria d\'extintors amb pols ABC són conductors de l\'electricitat.',
      'Risc molt baix de reignició. Crea una atmosfera inerta duradora.',
      'No és adequada per a entorns amb equips electrònics delicats, ja que el residu de la pols pot comprometre la seva funcionalitat.'
    ],
    correctIndex: 3,
    explanation: 'La pols química seca deixa un residu molt abrasiu i corrosiu que fa malbé equips electrònics, motors i instal·lacions delicades.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P44] Durant la tala d\'un arbre, abans d\'efectuar el tall final d\'abatiment es practica un primer tall en forma de falca al tronc. Quina funció compleix aquest tall?',
    options: [
      'Marcar la direcció prevista de caiguda.',
      'Evitar que la cadena quedi atrapada.',
      'Facilitar l\'extracció posterior de la soca.',
      'Separar completament el tronc de l\'arrel.'
    ],
    correctIndex: 0,
    explanation: 'La falca (osca direccional) determina la direcció cap a la qual caurà l\'arbre quan es faci el tall d\'abatiment.'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P45] Durant un incendi forestal, una columna convectiva intensa pot afavorir el desenvolupament d\'un pirocúmul. Quins efectes pot provocar la seva formació?',
    options: [
      'Vents d\'aspiració cap al pirocúmul que acceleren el front de l\'incendi.',
      'Vents descendents que frenen el front de l\'incendi.',
      'Una reducció de la velocitat de propagació per refredament de la columna.',
      'Una estabilització del perímetre per disminució del moviment de l\'aire.'
    ],
    correctIndex: 0,
    explanation: 'Un pirocúmul actua com una gran xemeneia que genera forts vents d\'aspiració cap a la base i corrents erràtics que acceleren i desestabilitzen l\'incendi.'
  },
  {
    topic: 26,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P46] Quina característica presenten els contenidors metàl·lics quan estan exposats a un incendi?',
    options: [
      'Resisteixen millor les flames, però transmeten calor a l\'exterior.',
      'Produeixen fums especialment densos i tòxics.',
      'Estan fabricats habitualment amb acer inoxidable.',
      'Generen degoteig incandescent en cremar.'
    ],
    correctIndex: 0,
    explanation: 'Els contenidors metàl·lics no cremen ni generen degoteig plàstic, però condueixen molta calor cap a les parets exteriors i elements propers.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P47] Tenint en compte l\'efecte Joule (Q = I² · R · t), quina de les afirmacions següents descriu CORRECTAMENT aquest efecte?',
    options: [
      'Com més resistència presenta el conductor, menys calor es genera.',
      'Com més temps circula el corrent, menor és la calor acumulada.',
      'La calor generada augmenta proporcionalment al quadrat de la intensitat del corrent.',
      'La calor generada augmenta proporcionalment al cub de la intensitat del corrent.'
    ],
    correctIndex: 2,
    explanation: 'Segons la llei de Joule (Q = I² · R · t), la calor és proporcional al quadrat de la intensitat del corrent.'
  },
  {
    topic: 32,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P48] A l\'etiqueta situada a la tapa del dipòsit d\'un vehicle apareix la indicació B10. Quin tipus de carburant utilitza?',
    options: ['Dièsel.', 'Benzina.', 'GLP.', 'Gasolina.'],
    correctIndex: 0,
    explanation: 'Les etiquetes europees amb quadrat i «B» (B7, B10, XTL) identifiquen combustible dièsel (fins a un 10% de biodièsel); la gasolina porta cercle i «E» (E5, E10).'
  },
  {
    topic: 16,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P49] Un ascensor hidràulic queda aturat per un tall elèctric amb la cabina lleugerament per sobre de la planta inferior. Quina actuació és la més coherent per portar-la fins al nivell de planta?',
    options: [
      'Tallar la tensió i accionar la vàlvula de descàrrega manual perquè la cabina descendeixi lentament fins a la planta inferior.',
      'Fer pujar primer la cabina manualment i després deixar-la baixar per gravetat fins que quedi exactament alineada amb la planta.',
      'Desconnectar el pistó de la cabina perquè aquesta pugui moure\'s lliurement per les guies fins arribar al nivell inferior.',
      'Alliberar el fre de la politja d\'adherència i deixar que el contrapès desplaci progressivament la cabina cap avall.'
    ],
    correctIndex: 0,
    explanation: 'En un ascensor hidràulic, un cop tallat el corrent, es prem la vàlvula de descàrrega manual (baixada d\'emergència) perquè l\'oli retorni lentament al dipòsit.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P50] Al camió portem 200 litres d\'escumogen i volem llançar escuma al 3% amb un cabal d\'aigua de 1.000 litres/minut. Quant de temps trigarem a esgotar tot l\'escumogen?',
    options: [
      'Aproximadament 10 segons.',
      'Aproximadament 2 hores.',
      'Aproximadament 20 minuts.',
      'Aproximadament 7 minuts.'
    ],
    correctIndex: 3,
    explanation: 'El 3% de 1.000 L/min són 30 L/min d\'escumogen. Temps = 200 L / 30 L/min = 6,67 minuts ≈ 7 minuts.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P51] Quina funció específica correspon al nus de vuit simple dins d\'un sistema de treball amb cordes?',
    options: [
      'Controlar la velocitat durant un descens.',
      'Evitar que la corda s\'escapi d\'un dispositiu.',
      'Multiplicar la força aplicada sobre una càrrega.',
      'Assegurar directament la corda a un punt fix.'
    ],
    correctIndex: 1,
    explanation: 'El nus de vuit simple s\'utilitza com a nus de topall a l\'extrem de la corda per evitar que surti d\'un descensor o politja.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P52] Quina de les següents respostes és CORRECTA en relació als límits d\'inflamabilitat?',
    options: [
      'El límit inferior d\'inflamabilitat (LII) és la concentració mínima d\'aire (expressada en % de volum) per sota de la qual la barreja és massa "pobra" o diluïda (no hi ha prou aire) per encendre\'s.',
      'El límit inferior d\'inflamabilitat (LII) és la concentració mínima de vapor o gas combustible a l\'aire (expressada en % de volum) per sota de la qual la barreja és massa "pobra" o diluïda (no hi ha prou combustible) per encendre\'s.',
      'Si la mescla de vapor o gas combustible es troba just per sota del límit superior d\'inflamabilitat (LSI), la barreja combustible i aire no pot encendre\'s.',
      'El rang d\'inflamabilitat és l\'interval de concentracions entre el límit inferior d\'inflamabilitat (LII) i la mescla estequiomètrica (ME).'
    ],
    correctIndex: 1,
    explanation: 'El LII és la concentració mínima de combustible en aire (% vol) necessària per a la propagació de la flama; per sota no hi ha prou combustible.'
  },
  {
    topic: 6,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P53] Segons la Llei 5/1994, quina és la titulació mínima necessària per accedir al Cos de Bombers de la Generalitat de Catalunya (escala bàsica/tècnica)?',
    options: [
      'Títol de tècnic superior de formació professional.',
      'Títol de batxillerat o de tècnic.',
      'Títol de graduat en educació secundària obligatòria.',
      'Títol universitari de grau o equivalent.'
    ],
    correctIndex: 1,
    explanation: 'Des de la modificació per accedir a l\'escala bàsica (grup C1), la titulació mínima requerida és el títol de batxillerat, tècnic o equivalent.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P54] Quina de les afirmacions següents sobre el vinclament en un element estructural sotmès a compressió és INCORRECTA?',
    options: [
      'La reducció de secció augmenta el risc de vinclament.',
      'La reducció de secció disminueix el risc de vinclament.',
      'Pot afectar barres de jàssera i elements en gelosia.',
      'Afecta especialment elements llargs sotmesos a compressió.'
    ],
    correctIndex: 1,
    explanation: 'Incorrecta: reduir la secció augmenta l\'esveltesa de l\'element, i per tant augmenta (no disminueix) el risc de vinclament.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P55] Quan un vehicle pesant ha de circular per neu o gel i necessita instal·lar cadenes, en quin eix s\'han de col·locar?',
    options: [
      'A l\'eix davanter.',
      'Exclusivament a l\'eix direccional.',
      'Sempre als dos eixos simultàniament.',
      'A l\'eix posterior.'
    ],
    correctIndex: 3,
    explanation: 'En vehicles pesants de propulsió posterior (4x2) o amb tracció principal al darrere, les cadenes es munten a les rodes motrius de l\'eix posterior.'
  },
  {
    topic: 15,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P56] En una obra s\'han utilitzat diferents sistemes d\'aïllament tèrmic. Quins materials es classifiquen específicament com a aïllaments projectats?',
    options: [
      'Poliestirè expandit i extrudit.',
      'Llana de roca i vidre.',
      'Cel·lulosa i arlita.',
      'Perlita i vermiculita.'
    ],
    correctIndex: 2,
    explanation: 'La cel·lulosa i l\'arlita (o poliuretà) es poden aplicar mitjançant insuflat o projecció directa en obra.'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P57] Què descriu el concepte conegut com a paradoxa de l\'extinció en els incendis forestals?',
    options: [
      'Que una extinció molt eficaç redueix l\'acumulació de combustible i limita la intensitat dels incendis futurs.',
      'Que una extinció molt eficaç afavoreix l\'acumulació de combustible i fa més intensos els incendis que escapen al control.',
      'Que una extinció poc eficaç redueix progressivament el combustible disponible i limita la severitat dels incendis futurs.',
      'Que una extinció poc eficaç afavoreix els grans incendis perquè augmenta la superfície cremada en cada episodi.'
    ],
    correctIndex: 1,
    explanation: 'Apagar tots els focs petits impedeix el consum periòdic de biomassa, acumulant combustible continu i afavorint grans incendis fora de capacitat d\'extinció.'
  },
  {
    topic: 32,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P58] Si en un incendi de vehicle hi ha combustible vessat i en combustió sobre la calçada, quina mesura s\'ha de prioritzar per controlar-ne la propagació?',
    options: [
      'Aplicar aigua a raig compacte sobre el combustible vessat.',
      'Cobrir el vessament amb terra i deixar que el combustible es consumeixi.',
      'Utilitzar escuma de baixa expansió i, en menor mesura, materials absorbents.',
      'Refrigerar únicament els vehicles propers sense actuar sobre el vessament.'
    ],
    correctIndex: 2,
    explanation: 'L\'escuma de baixa expansió forma un mantell resistent sobre el líquid vessat, tallant l\'aportació d\'oxigen i suprimint els vapors inflamables.'
  },
  {
    topic: 13,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P59] Quin ràcord s\'utilitza amb els manegots quan es treballa en aspiració amb pressió relativa negativa?',
    options: [
      'Ràcord Barcelona.',
      'Ràcord Storz.',
      'Ràcord Guillemin.',
      'Ràcord buit.'
    ],
    correctIndex: 1,
    explanation: 'El ràcord Storz (simètric i amb juntes hermètiques per a buit i pressió) és l\'utilitzat als manegots d\'aspiració.'
  },
  {
    topic: 13,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P60] En el funcionament d\'una bomba centrífuga, quina és la funció principal que exerceix la voluta sobre el fluid abans que abandoni la bomba?',
    options: [
      'Transformar l\'energia cinètica del fluid en pressió.',
      'Augmentar la velocitat de rotació del rodet.',
      'Crear el buit necessari per encebar la bomba.',
      'Evitar el retorn de l\'aigua cap a l\'aspiració.'
    ],
    correctIndex: 0,
    explanation: 'La voluta té una secció creixent en espiral que redueix la velocitat de l\'aigua en sortir del rodet i transforma l\'energia cinètica en pressió estàtica.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P61] Una ampolla de gas comprimida i tancada es troba inicialment a 27 °C i 180 bar. La temperatura augmenta fins als 177 °C a volum constant. Quina pressió assolirà aproximadament?',
    options: ['1.180 bar.', '270 bar.', '360 bar.', '450 bar.'],
    correctIndex: 1,
    explanation: 'T₁ = 27 + 273 = 300 K; T₂ = 177 + 273 = 450 K. P₂ = P₁ · (T₂ / T₁) = 180 · (450 / 300) = 270 bar.'
  },
  {
    topic: 34,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P62] En una operació de recerca de persones amb equips canins (rastreig o venteig), quina de les afirmacions següents és INCORRECTA?',
    options: [
      'En el venteig, el gos detecta l\'olor humana dispersa a l\'aire.',
      'En el rastreig, poden ser útils els elements amb què la persona ha estat en contacte.',
      'En el venteig, el gos segueix el recorregut de la persona a partir de les partícules d\'olor deixades al terra.',
      'En el rastreig, el gos segueix el recorregut efectuat per la persona.'
    ],
    correctIndex: 2,
    explanation: 'Incorrecta: seguir partícules d\'olor deixades a terra correspon al rastreig (mantrailing), no al venteig (olor dispersa a l\'aire).'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P63] Un equip treballa en un incendi forestal i comprova que la seva ruta d\'escapament prevista ha quedat compromesa. Segons el protocol LACES, què seria més coherent fer?',
    options: [
      'Mantenir-se al mateix lloc fins que el comandament ordeni el replegament.',
      'Restablir una ruta d\'escapament segura abans de continuar l\'actuació.',
      'Continuar la maniobra mentre encara es mantingui contacte visual amb el foc.',
      'Augmentar el ritme de treball per acabar la maniobra abans que arribi el front.'
    ],
    correctIndex: 1,
    explanation: 'Segons el LACES (Lookouts, Anchor points, Communications, Escape routes, Safety zones), no es pot continuar treballant sense una ruta d\'escapament segura.'
  },
  {
    topic: 5,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P64] Segons l\'article 3 de la Llei 1/1998, de 7 de gener, de política lingüística, quina afirmació sobre les llengües oficials a Catalunya és correcta?',
    options: [
      'El català, el castellà i l\'aranès són llengües oficials a Catalunya.',
      'El català i el castellà són llengües oficials a Catalunya.',
      'El català és l\'única llengua oficial a Catalunya, mentre que el castellà té la consideració de llengua cooficial.',
      'El català és l\'única llengua oficial a Catalunya.'
    ],
    correctIndex: 1,
    explanation: 'L\'art. 3.1 de la Llei 1/1998 estableix que el català i el castellà són llengües oficials a Catalunya (posteriorment l\'EAC 2006 va declarar l\'aranès oficial a tot Catalunya).'
  },
  {
    topic: 30,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P65] En un apuntalament lineal de 4 m s\'han col·locat cinc puntals equidistants que sostenen un pes total de 4.500 kg. Si cada puntal suporta un màxim de 1.000 kg, seran capaços de suportar la càrrega?',
    options: [
      'Sí, perquè cada puntal pot suportar individualment els 4.500 kg de la càrrega total.',
      'No, perquè cada puntal suportaria 1.125 kg, superant la càrrega màxima prevista.',
      'Sí, perquè cada puntal suportaria 900 kg, per sota dels 1.000 kg previstos com a màxim.',
      'No, perquè els 1.000 kg corresponen a la capacitat màxima del conjunt dels cinc puntals.'
    ],
    correctIndex: 2,
    explanation: '4.500 kg repartits uniformement entre 5 puntals = 900 kg per puntal, per sota del límit de 1.000 kg.'
  },
  {
    topic: 14,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P66] En el sistema de coordenades UTM, quin valor s\'assigna a la coordenada X del meridià central de cada fus?',
    options: ['1.000.000 m.', '0 m.', '500.000 m.', '100.000 m.'],
    correctIndex: 2,
    explanation: 'Per evitar coordenades negatives a l\'oest del meridià central de cada fus UTM, s\'assigna a aquest meridià el valor fals d\'est de 500.000 m.'
  },
  {
    topic: 32,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P67] Si un vehicle s\'incendia en una via amb un pendent pronunciat, quin risc específic pot generar aquesta situació?',
    options: [
      'La pèrdua de tensió de la bateria del vehicle.',
      'L\'augment automàtic de la pressió dels pneumàtics.',
      'L\'acumulació de gasos de combustió sota el vehicle.',
      'El vessament de combustible o líquids inflamables pendent avall.'
    ],
    correctIndex: 3,
    explanation: 'En un pendent, el combustible en flames o els líquids inflamables es desplacen ràpidament pendent avall, podent estendre l\'incendi cap a altres vehicles o personal.'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P68] En la classificació dels EPI per categories segons el nivell de risc, quina afirmació és CORRECTA?',
    options: [
      'La categoria III protegeix davant riscos greus per la salut o mortals, susceptibles de provocar danys irreversibles pel treballador/a.',
      'Els EPI no es classifiquen per categories, sempre es classifiquen exclusivament segons tipus de vestuari.',
      'La categoria I protegeix davant de riscos que no poden qualificar-se com a mínims ni com a mortals, és a dir, que no pertanyen a la categoria II o categoria III.',
      'La categoria III protegeixen davant de riscos mínims que poden provocar danys lleus o fàcilment reparables.'
    ],
    correctIndex: 0,
    explanation: 'Categoria I: riscos mínims; Categoria II: riscos intermedis (ni I ni III); Categoria III: riscos molt greus o mortals amb danys irreversibles.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P69] Quin nus és especialment útil per fer connexions ràpides i ajustables a punts d\'ancoratge provisionals?',
    options: [
      'El nus de vuit simple, utilitzat com a topall.',
      'El nus Prusik, utilitzat com a sistema autoblocant.',
      'El ballestrinca o pardal, per la seva regulació ràpida.',
      'El nus pla, destinat principalment a immobilitzar lliteres.'
    ],
    correctIndex: 2,
    explanation: 'El nus ballestrinca (o de pardal) permet ancorar i ajustar ràpidament la longitud de la corda sobre un mosquetó o punt fix.'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P70] Durant un incendi forestal, a partir de quina alçada de flama es considera que un foc de superfície és d\'alta intensitat?',
    options: [
      'Més de 3 metres.',
      'Més de 10 metres.',
      'Més de 5 metres.',
      'Més de 7 metres.'
    ],
    correctIndex: 0,
    explanation: 'A partir de 3 metres d\'alçada de flama (aprox. > 3-3,5 m) s\'excedeix la capacitat d\'atac directe amb eines manuals/mànegues i es considera foc d\'alta intensitat.'
  },
  {
    topic: 1,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P71] Segons la Constitució espanyola de 1978, quina de les opcions següents recull correctament les característiques pròpies de la Corona?',
    options: [
      'Responsable, electiva, vitalícia i inviolable.',
      'Inviolable, responsable, hereditària i temporal.',
      'Hereditària, temporal, responsable i revocable.',
      'Inviolable, irresponsable, hereditària i vitalícia.'
    ],
    correctIndex: 3,
    explanation: 'Segons el Títol II de la CE (arts. 56-57), la Corona és hereditària i vitalícia, i la persona del Rei és inviolable i no està subjecta a responsabilitat.'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[ÒPTIM A\'26 · P72] En una intervenció amb risc químic, en què es basa principalment la permeabilitat d\'un vestit de protecció química?',
    options: [
      'En l\'estat d\'agregació del producte i en la forma en què s\'aplica.',
      'En la temperatura ambient i en la durada prevista de la intervenció.',
      'En el pes de l\'equip i en la mobilitat necessària del bomber.',
      'En el color del vestit i en el nivell de visibilitat requerit.'
    ],
    correctIndex: 0,
    explanation: 'La permeació/permeabilitat depèn de la naturalesa química i estat d\'agregació del producte (gas, vapor, líquid) i de la manera com entra en contacte amb el material del vestit.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P73] Durant la inspecció d\'una estructura de formigó armat, s\'observen esquerdes en una de les pantalles estructurals. Què poden indicar aquestes esquerdes?',
    options: [
      'Problemes de tracció o flexió.',
      'Problemes de vinclament o tallant.',
      'Problemes de compressió o tallant.',
      'Problemes de torsió o compressió.'
    ],
    correctIndex: 0,
    explanation: 'El formigó resisteix molt bé la compressió però malament la tracció i la flexió, per això les esquerdes en pantalles o bigues solen indicar esforços de tracció o flexió excessius.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P74] S\'aplica perpendicularment una força de 500 N sobre una àrea de 0,01 m². Quina pressió s\'exerceix sobre aquesta superfície?',
    options: ['500 Pa.', '500.000 Pa.', '50.000 Pa.', '5.000 Pa.'],
    correctIndex: 2,
    explanation: 'P = F / S = 500 N / 0,01 m² = 50.000 Pa.'
  },
  {
    topic: 32,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P75] Com s\'ha de realitzar l\'aproximació segura a un vehicle incendiat?',
    options: [
      'Perpendicularment al lateral del vehicle.',
      'Frontalment i des de sotavent.',
      'En diagonal i des de sobrevent.',
      'Per la part posterior i en la direcció del fum.'
    ],
    correctIndex: 2,
    explanation: 'Cal aproximar-se sempre des de sobrevent (amb el vent a l\'esquena) i en diagonal (a uns 45°), evitant els extrems frontal i posterior pel risc d\'amortidors o explosions.'
  },
  {
    topic: 16,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P76] En els ascensors hidràulics, de quines dues maneres pot actuar el pistó sobre la cabina?',
    options: [
      'Per adherència directa o per contrapès.',
      'Per tubs rígids o flexibles.',
      'Per compressió superior o inferior.',
      'Directament o mitjançant politges o palanques.'
    ],
    correctIndex: 3,
    explanation: 'El pistó hidràulic pot empènyer directament la cabina (acció directa) o fer-ho mitjançant cables/cadenes i politges (acció diferencial/indirecta 2:1).'
  },
  {
    topic: 2,
    difficulty: 'Fàcil',
    question: '[ÒPTIM A\'26 · P77] Segons el Reial decret legislatiu 5/2015, de 30 d\'octubre (TREBEP), quin dels drets reconeguts al personal funcionari té la consideració de dret individual exercit col·lectivament?',
    options: [
      'La llibertat sindical.',
      'La progressió en la carrera professional.',
      'La formació contínua.',
      'La defensa jurídica.'
    ],
    correctIndex: 0,
    explanation: 'L\'article 15 del TREBEP enumera els drets individuals exercits col·lectivament, entre els quals hi ha la llibertat sindical, la negociació col·lectiva i el dret de vaga.'
  }
];
