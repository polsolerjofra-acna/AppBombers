/**
 * Simulacre Òptim Acadèmia MODEL PP2'26 — 77 preguntes (70 + 7 reserva).
 */
export const QUESTIONS_OPTIM_PP2 = [
  {
    topic: 2,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P1] D\'acord amb l\'article 63 del Reial decret legislatiu 5/2015, de 30 d\'octubre (TREBEP), quina de les següents no és una causa de pèrdua de la condició de funcionari o funcionària de carrera?',
    options: [
      'La pèrdua de la nacionalitat, quan sigui requisit per a l\'accés.',
      'La incapacitat permanent parcial.',
      'La renúncia a la condició de funcionari o funcionària.',
      'La sanció disciplinària de separació del servei ferma.'
    ],
    correctIndex: 1,
    explanation: 'Segons l\'art. 63 del TREBEP, és causa de pèrdua la jubilació total o la incapacitat permanent total, absoluta o gran invalidesa, no la incapacitat permanent parcial.'
  },
  {
    topic: 14,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P2] Quina de les opcions següents recull correctament les principals fonts d\'error que poden afectar la precisió d\'un sistema GNSS?',
    options: [
      'Errors de propagació atmosfèrica, geometria dels satèl·lits, ocultació del senyal, rebots o efecte multicamí, errors del receptor i error intencionat.',
      'Geometria dels satèl·lits, ocultació del senyal, rebots o efecte multicamí, errors del receptor, variacions de la gravetat terrestre i error intencionat.',
      'Errors de propagació atmosfèrica, geometria dels satèl·lits, errors de cartografia, rebots o efecte multicamí, errors del receptor i error intencionat.',
      'Errors de propagació atmosfèrica, geometria dels satèl·lits, ocultació del senyal, interferències del camp magnètic terrestre, errors del receptor i error intencionat.'
    ],
    correctIndex: 0,
    explanation: 'Les principals fonts d\'error en GNSS (GPS/Galileo) són la propagació atmosfèrica (ionosfera/troposfera), la geometria (DOP), l\'ocultació, l\'efecte multicamí, els errors del receptor i la degradació intencionada.'
  },
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P3] En relació amb les característiques tècniques que han de complir els hidrants destinats a l\'omplerta dels camions de bombers, quina de les afirmacions següents és correcta?',
    options: [
      'Els hidrants han de ser necessàriament de columna, amb dues boques de 70 mm i una de 100 mm, i situar-se a menys de 50 m de qualsevol façana accessible.',
      'La xarxa ha de poder subministrar un cabal mínim de 1.000 l/min a un únic hidrant durant 1 hora, amb una pressió mínima d\'1 bar.',
      'Qualsevol punt d\'una façana accessible a nivell de rasant s\'ha de trobar a menys de 150 m d\'un hidrant, i la pressió mínima de sortida ha de ser de 100 kPa.',
      'La xarxa ha de poder subministrar un cabal mínim de 1.000 l/min a dos hidrants funcionant simultàniament durant 2 hores, i la pressió de sortida per cada boca ha de ser superior a 100 kPa.'
    ],
    correctIndex: 3,
    explanation: 'El RIPCI i el CTE DB-SI estableixen un cabal mínim de 1.000 L/min per hidrant en dos hidrants simultanis durant 2 hores amb pressió mínima de 100 kPa (1 bar).'
  },
  {
    topic: 7,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P4] D\'acord amb el Decret 276/2016, de 19 de juliol, quina afirmació estableix correctament la correspondència entre nivells de comandament del SISCOM i càrrecs?',
    options: [
      'El nivell 2 correspon al sotscap territorial, el nivell 3 al cap territorial, el nivell 4 al cap operatiu i el nivell 5 al subdirector general competent en l\'àmbit operatiu.',
      'El nivell 2 correspon al cap territorial, el nivell 3 al sotscap territorial, el nivell 4 al cap operatiu i el nivell 5 al subdirector general competent en l\'àmbit operatiu.',
      'El nivell 2 correspon al sotscap territorial, el nivell 3 al cap operatiu, el nivell 4 al cap territorial i el nivell 5 al subdirector general competent en l\'àmbit operatiu.',
      'El nivell 2 correspon al sotscap territorial, el nivell 3 al cap territorial, el nivell 4 al subdirector general competent en l\'àmbit operatiu i el nivell 5 al cap operatiu.'
    ],
    correctIndex: 0,
    explanation: 'Nivell 1: comandament operatiu bàsic; Nivell 2: sotscap territorial; Nivell 3: cap territorial; Nivell 4: cap operatiu; Nivell 5: subdirector general operatiu.'
  },
  {
    topic: 15,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P5] Tenint en compte la relació entre els diferents tipus d\'esforç estructural i els materials que presenten un comportament adequat davant de cadascun d\'ells, quina associació és correcta?',
    options: [
      'Torsió → acer i fusta, independentment de la secció de l\'element.',
      'Tallant → acer i fusta.',
      'Tracció → acer i formigó.',
      'Flexió → acer, fusta i ceràmica.'
    ],
    correctIndex: 1,
    explanation: 'Tant l\'acer com la fusta (en sentit transversal/estructural adequat) presenten un bon comportament davant del tallant, mentre que el formigó i la ceràmica no treballen bé a tracció ni a flexió sense armar.'
  },
  {
    topic: 13,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P6] En una operació d\'aspiració amb una bomba centrífuga, quina situació descriu correctament el procés de cavitació?',
    options: [
      'Quan s\'assoleixen pressions molt baixes a l\'entrada axial de la bomba i al dors dels àleps del rodet, es formen bombolles de vapor que després implosionen en zones de pressió més alta i poden danyar el rodet.',
      'Quan s\'assoleixen pressions molt baixes a l\'entrada axial de la bomba i al dors dels àleps del rodet, es formen bombolles de vapor que després s\'expandeixen en zones de pressió més alta i erosionen el rodet.',
      'Quan s\'assoleixen pressions molt baixes a l\'entrada axial de la bomba i al dors dels àleps del rodet, es formen bombolles de vapor que després implosionen en zones on la pressió continua disminuint i poden danyar el rodet.',
      'Quan s\'assoleixen pressions molt baixes a la sortida de la bomba i al dors dels àleps del rodet, es formen bombolles de vapor que després implosionen en zones de pressió més alta i poden danyar el rodet.'
    ],
    correctIndex: 0,
    explanation: 'La cavitació es produeix quan la pressió cau per sota de la pressió de vapor del líquid a l\'aspiració: es formen bombolles que implosionen violentament en arribar a zones de més pressió del rodet.'
  },
  {
    topic: 27,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P7] Davant d\'una emergència NRBQ en què es considera necessari reduir l\'exposició de la població sense efectuar-ne el desplaçament, quina actuació correspon a una mesura de confinament?',
    options: [
      'Mantenir les persones a l\'interior dels edificis, amb portes i finestres tancades, per reduir-ne l\'exposició.',
      'Traslladar de manera ordenada la població potencialment exposada cap a una zona exterior considerada segura.',
      'Interrompre, sempre que sigui possible, la font d\'emissió mitjançant el tancament de vàlvules o claus de pas.',
      'Afavorir la dispersió del contaminant mitjançant ventilació forçada orientada en sentit contrari a la seva propagació.'
    ],
    correctIndex: 0,
    explanation: 'El confinament consisteix a resguardar la població dins dels edificis tancant portes, finestres i sistemes de climatització.'
  },
  {
    topic: 20,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P8] Com es disposa el subministrament d\'aire respirable en un vestit de protecció química de tipus 1c?',
    options: [
      'L\'equip d\'aire respirable es troba dins del vestit i queda completament encapsulat.',
      'Les ampolles d\'aire es troben dins del vestit, però queden fora de la zona encapsulada.',
      'L\'aire respirable se subministra des de l\'exterior del vestit mitjançant una línia d\'aire.',
      'Les ampolles d\'aire es porten sobre el vestit i, per tant, queden sense encapsular.'
    ],
    correctIndex: 2,
    explanation: 'Tipus 1a: ERA dins del vestit; Tipus 1b: ERA fora del vestit; Tipus 1c: subministrament des de l\'exterior mitjançant línia d\'aire respirable.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P9] Per sota de quin valor aproximat de concentració d\'oxigen a l\'atmosfera la majoria dels focs deixen de poder mantenir-se?',
    options: [
      'Per sota d\'un 25% d\'oxigen.',
      'Per sota d\'un 16% d\'oxigen.',
      'Per sota d\'un 21% d\'oxigen.',
      'Per sota d\'un 10% d\'oxigen.'
    ],
    correctIndex: 1,
    explanation: 'La majoria dels combustibles comuns necessiten una concentració mínima d\'oxigen d\'entre el 15% i el 16% per mantenir la combustió amb flama.'
  },
  {
    topic: 14,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P10] En un mapa topogràfic a escala 1:25.000, la separació entre dos punts és de 4 cm. Quina distància real separa els dos punts?',
    options: ['2,5 km.', '1 km.', '10 km.', '100 m.'],
    correctIndex: 1,
    explanation: '4 cm × 25.000 = 100.000 cm = 1.000 m = 1 km.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P11] En un circuit de corrent altern, quina definició correspon específicament a la potència reactiva (Q)?',
    options: [
      'És la potència associada exclusivament al canvi periòdic de sentit del corrent, independentment de l\'existència de càrregues inductives o capacitives.',
      'És la potència que es transforma efectivament en moviment, calor o llum i que, per tant, produeix treball útil.',
      'És l\'energia que s\'intercanvia cíclicament entre la font i una càrrega inductiva o capacitiva per generar camps magnètics o elèctrics, sense produir treball útil directe.',
      'És la potència que resulta de la combinació de la potència activa i la reactiva i representa tota la potència que la xarxa ha de subministrar.'
    ],
    correctIndex: 2,
    explanation: 'La potència reactiva (Q, en var) és l\'energia intercanviada entre generador i càrregues reactives per crear camps magnètics o elèctrics, sense generar treball útil.'
  },
  {
    topic: 3,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P12] D\'acord amb la Llei 31/1995 (LPRL), davant la detecció d\'una situació que pugui comportar un risc greu i imminent, a qui l\'ha de comunicar preferentment el treballador?',
    options: [
      'Als delegats de prevenció, perquè traslladin la situació als responsables operatius corresponents.',
      'Als responsables de seguretat de l\'actuació, que posteriorment ho han de comunicar als responsables preventius.',
      'A la seva línia de comandament i/o als responsables designats en matèria preventiva.',
      'Al servei de prevenció, perquè valori directament el risc abans de comunicar-lo a la línia de comandament.'
    ],
    correctIndex: 2,
    explanation: 'Segons l\'art. 29.2.4 de la LPRL, el treballador ha d\'informar immediatament el seu superior jeràrquic directe i els treballadors designats per a activitats preventives.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P13] En la representació gràfica d\'una magnitud vectorial mitjançant una fletxa, què expressa específicament el mòdul del vector?',
    options: [
      'La localització concreta on s\'aplica la magnitud vectorial i el sentit cap al qual queda orientada la fletxa.',
      'El valor numèric de la magnitud representada, determinat per la longitud de la fletxa, juntament amb el possible gir sobre el seu propi eix o torsió del vector.',
      'La línia d\'acció sobre la qual es disposa el vector i l\'orientació que aquesta línia adopta en l\'espai.',
      'El valor numèric de la magnitud representada, que gràficament queda determinat per la longitud de la fletxa.'
    ],
    correctIndex: 3,
    explanation: 'El mòdul d\'un vector representa el seu valor numèric o intensitat i es correspon amb la longitud de la fletxa.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P14] En relació amb l\'equilibri entre la pressió de vapor d\'un líquid i la pressió que exerceix el medi exterior, quina condició determina l\'inici de l\'ebullició?',
    options: [
      'Quan la pressió de vapor del líquid és superior a la pressió externa.',
      'La pressió de vapor del líquid no manté cap relació amb la pressió externa.',
      'Quan la pressió de vapor del líquid és igual a la pressió externa.',
      'Quan la pressió de vapor del líquid és inferior a la pressió externa.'
    ],
    correctIndex: 2,
    explanation: 'Un líquid entra en ebullició quan la seva pressió de vapor iguala la pressió atmosfèrica o externa.'
  },
  {
    topic: 13,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P15] Si un edifici d\'uns 400 m d\'alçada s\'alimentés d\'aigua mitjançant una única columna vertical plena, quina diferència de pressió (aprox.) hi hauria entre la planta baixa i la part superior?',
    options: [
      'Uns 40.000 Pa (aprox. 0,4 atm).',
      'Uns 400.000 Pa (aprox. 4 atm).',
      'Uns 40.000.000 Pa (aprox. 400 atm).',
      'Uns 4.000.000 Pa (aprox. 40 atm).'
    ],
    correctIndex: 3,
    explanation: 'P = ρ · g · h = 1.000 · 10 · 400 = 4.000.000 Pa = 40 bar ≈ 40 atm.'
  },
  {
    topic: 2,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P16] D\'acord amb la classificació del parentiu per graus en línia col·lateral, en quin grau es troben els fills dels germans dels teus pares (cosins germans)?',
    options: ['Segon grau.', 'Tercer grau.', 'Cinquè grau.', 'Quart grau.'],
    correctIndex: 3,
    explanation: 'Pujant al pare (1), avis (2), baixant a l\'oncle/tia (3) i als seus fills/cosins germans (4): quart grau de consanguinitat.'
  },
  {
    topic: 4,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P17] Segons la Llei 19/2020, d\'igualtat de tracte i no-discriminació, com s\'anomena quan una disposició aparentment neutra pot causar un perjudici major a determinades persones per un motiu protegit?',
    options: [
      'Discriminació directa.',
      'Discriminació múltiple.',
      'Discriminació indirecta.',
      'Discriminació per error.'
    ],
    correctIndex: 2,
    explanation: 'És la definició legal de discriminació indirecta (art. 2 de la Llei 19/2020).'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P18] A partir de la fórmula de l\'efecte Joule Q = I² · R · t, quina afirmació interpreta correctament com varia la calor generada?',
    options: [
      'Si la intensitat es duplica, la calor es quadruplica; si augmenta la resistència, disminueix proporcionalment la calor; i el temps de circulació no modifica la calor generada.',
      'Si la intensitat es duplica, la calor es duplica; si la resistència es duplica, la calor es quadruplica; i si augmenta el temps, la calor es manté constant.',
      'Si la intensitat es duplica, la calor augmenta proporcionalment; si augmenta la resistència, la calor es manté constant; i si es duplica el temps, la calor es quadruplica.',
      'Si la intensitat es duplica, la calor es quadruplica; si augmenta la resistència, augmenta proporcionalment la calor; i com més temps circula el corrent, més calor s\'acumula.'
    ],
    correctIndex: 3,
    explanation: 'Q és proporcional a I² (si es duplica I, Q × 4), a R i al temps t.'
  },
  {
    topic: 27,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P19] En el transport de mercaderies perilloses, què indica concretament el número d\'identificació de perill X423?',
    options: [
      'Sòlid inflamable que reacciona violentament amb l\'aigua i desprèn gasos tòxics.',
      'Sòlid inflamable que, a temperatura elevada, es troba en estat fos.',
      'Sòlid inflamable que reacciona violentament amb l\'aigua i desprèn gasos inflamables.',
      'Matèria líquida pirofòrica que pot inflamar-se espontàniament en contacte amb l\'aire.'
    ],
    correctIndex: 2,
    explanation: 'X = reacciona perillosament amb l\'aigua; 4 = sòlid inflamable; 2 = despreniment de gas; 3 = inflamable. Sòlid inflamable que reacciona amb l\'aigua desprenent gasos inflamables.'
  },
  {
    topic: 27,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P20] En una emergència NRBQ, quin és el mètode de descontaminació que s\'utilitza de manera més habitual per retirar, arrossegar o diluir contaminants?',
    options: [
      'La descontaminació amb aigua, mitjançant procediments de baix o alt cabal.',
      'La descontaminació mitjançant venteig o exposició controlada a l\'aire.',
      'La descontaminació mitjançant l\'encapsulament de l\'element contaminat per evitar-ne la dispersió.',
      'La descontaminació mitjançant l\'aplicació de productes químics o biològics específics.'
    ],
    correctIndex: 0,
    explanation: 'L\'aigua (amb sabó o sense, a baix o alt cabal) és el mètode més versàtil i habitual per retirar i diluir contaminants.'
  },
  {
    topic: 27,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P21] En el reconeixement inicial d\'una emergència NRBQ, quin és l\'ordre correcte d\'anàlisi per valorar l\'origen de l\'amenaça, la propagació i els elements afectats?',
    options: [
      'Font → Diana → Flux.',
      'Diana → Flux → Font.',
      'Font → Flux → Diana.',
      'Flux → Font → Diana.'
    ],
    correctIndex: 2,
    explanation: 'L\'anàlisi NRBQ segueix el model Font (origen) → Flux (via de propagació/exposició) → Diana (persones/béns vulnerables).'
  },
  {
    topic: 11,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P22] En l\'equilibri entre la generació i la demanda del sistema elèctric, quina afirmació descriu correctament la funció de les centrals de regulació?',
    options: [
      'Les centrals de regulació mantenen una producció estable i poc flexible, independentment de les variacions de la demanda.',
      'Les centrals de regulació ajusten la seva potència segons les variacions previstes de la demanda.',
      'Les centrals de regulació funcionen de manera contínua per cobrir la demanda mínima del sistema.',
      'Les centrals de regulació s\'activen i s\'aturen ràpidament per respondre principalment a pics sobtats de consum.'
    ],
    correctIndex: 1,
    explanation: 'Les centrals de base cobreixen la demanda mínima contínua, les de punta responen a pics sobtats i les de regulació modulen la potència segons les variacions previstes.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P23] En l\'anàlisi del comportament estructural d\'una edificació, quina definició correspon al concepte de reaccions?',
    options: [
      'Són les forces de redistribució que apareixen exclusivament quan un element estructural supera la seva capacitat resistent i que permeten transferir temporalment l\'excés de càrrega cap als elements adjacents.',
      'Són les forces de resposta que apareixen als punts de recolzament o d\'unió dels elements estructurals quan aquests reben accions o càrregues, i que contribueixen a mantenir l\'equilibri del sistema.',
      'Són les forces o influències externes que actuen sobre una edificació al llarg del temps i que poden afectar-ne l\'estabilitat, com ara el pes propi, l\'ocupació, el vent, la neu, els impactes o els sismes.',
      'Són les reaccions internes que apareixen dins dels materials i elements estructurals com a resposta directa a les accions aplicades, com ara tracció, compressió, flexió, torsió, tallant o vinclament.'
    ],
    correctIndex: 1,
    explanation: 'Les reaccions són les forces externes de resposta als suports o unions que equilibren les accions aplicades.'
  },
  {
    topic: 12,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P24] Quina de les afirmacions següents descriu correctament la funció i les condicions d\'instal·lació de la clau de tall general d\'aigua d\'un edifici?',
    options: [
      'Permet interrompre el subministrament d\'aigua abans de cada aparell receptor i s\'ha de situar sempre immediatament després del comptador individual.',
      'Permet interrompre el subministrament principal de l\'edifici, però s\'ha d\'instal·lar obligatòriament a l\'exterior i separada de qualsevol armari de comptadors.',
      'Permet interrompre el subministrament d\'aigua a tot l\'edifici, ha d\'estar situada en una zona d\'ús comú i ben identificada i, si disposa d\'armari amb comptador, s\'hi col·loca a dins.',
      'Permet interrompre únicament el subministrament d\'aigua d\'un sector de l\'edifici i s\'ha de situar necessàriament a l\'interior del local afectat.'
    ],
    correctIndex: 2,
    explanation: 'Segons el CTE DB-HS 4, la clau de tall general talla el subministrament de tot l\'edifici i s\'ubica en zona d\'ús comú (o dins l\'armari del comptador general).'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P25] En relació amb la resistència al foc d\'un element constructiu (R, E, I), quina de les afirmacions següents és INCORRECTA?',
    options: [
      'La resistència al foc pot incloure el manteniment de l\'aïllament tèrmic, identificat amb la lletra I.',
      'La resistència al foc pot considerar també el manteniment de la integritat, identificada amb la lletra E.',
      'La resistència al foc pot incloure el manteniment de l\'aïllament tèrmic, identificat amb la lletra E.',
      'La resistència al foc pot exigir el manteniment de la funció portant, identificada amb la lletra R.'
    ],
    correctIndex: 2,
    explanation: 'Incorrecta: la lletra E indica integritat (estanqueïtat al pas de flames i gasos calents), mentre que l\'aïllament tèrmic s\'identifica amb la lletra I.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P26] En la classificació de la reacció al foc dels productes de construcció, quina opció correspon específicament a la caiguda de gotes o partícules inflamades?',
    options: ['d1, d2 i d3.', 'd0, d1 i d2.', 's1, s2 i s3.', 's0, s1 i s2.'],
    correctIndex: 1,
    explanation: 'L\'Euroclasse per a caiguda de gotes/partícules inflamades (droplets) es classifica en d0, d1 i d2 (mentre que s1, s2, s3 correspon a l\'opacitat del fum).'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P27] Quina classificació diferencia correctament els sistemes estructurals habituals dels sistemes de grans llums (> 8 m)?',
    options: [
      'Els sistemes tradicionals de murs de càrrega i els sistemes de pilars i forjats no es consideren sistemes de grans llums; en canvi, els pòrtics metàl·lics, de fusta o d\'elements prefabricats de formigó sí que poden constituir sistemes de grans llums.',
      'Els pòrtics metàl·lics i de fusta no es consideren sistemes de grans llums, mentre que els murs de càrrega i els forjats de formigó són els sistemes habituals per cobrir espais superiors als 8 m sense pilars intermedis.',
      'Els sistemes tradicionals de murs de càrrega es consideren sistemes de grans llums, mentre que els sistemes de pilars i forjats i els pòrtics metàl·lics corresponen a sistemes estructurals convencionals.',
      'Els sistemes de pilars i forjats es consideren sistemes de grans llums quan els pilars són de formigó armat, mentre que els pòrtics de fusta o metàl·lics no s\'hi inclouen.'
    ],
    correctIndex: 0,
    explanation: 'Els pòrtics de grans llums (metàl·lics, fusta laminada o prefabricats de formigó) permeten cobrir espais diàfans > 8 m (naus, pavellons) sense pilars intermedis.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P28] En la configuració del sistema de tracció d\'un vehicle, què indica específicament la denominació 4x4?',
    options: [
      'Que el vehicle disposa de quatre rodes i pot seleccionar quin dels dos eixos rep el moviment, però sense transmetre\'l simultàniament a tots dos.',
      'Que el vehicle disposa de quatre rodes i el moviment procedent del sistema de transmissió es reparteix a totes quatre.',
      'Que el vehicle disposa de quatre rodes i està especialment concebut per circular per terrenys irregulars, encara que la força motriu no s\'hagi de transmetre necessàriament a totes quatre.',
      'Que el vehicle disposa de quatre rodes i la força motriu es transmet habitualment a un únic eix, mentre que l\'altre queda destinat principalment a funcions de direcció i estabilització.'
    ],
    correctIndex: 1,
    explanation: 'En la nomenclatura A×B, A indica el nombre total de punts de suport (rodes) i B el nombre de rodes motrius que reben tracció.'
  },
  {
    topic: 13,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P29] En un sistema hidràulic amb dos pistons units per un fluid, si el pistó petit té una superfície molt menor que el pistó gran, quin efecte s\'obté en aplicar una força sobre el pistó petit?',
    options: [
      'La força es conserva igual als dos pistons, però el pistó gran es mou més de pressa perquè té més superfície.',
      'La pressió transmesa és la mateixa al fluid, i el pistó gran pot exercir una força més gran perquè la força és proporcional a la superfície.',
      'La pressió transmesa és la mateixa al fluid, i el pistó gran pot exercir una força més petita perquè la força és inversament proporcional a la superfície.',
      'El pistó gran rep una pressió menor perquè el fluid "absorbeix" part de la força aplicada al pistó petit.'
    ],
    correctIndex: 1,
    explanation: 'Pel principi de Pascal, P = F₁/S₁ = F₂/S₂: la pressió es transmet íntegrament i la força es multiplica proporcionalment a la superfície.'
  },
  {
    topic: 1,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P30] Quina és la tipologia competencial que estableix l\'Estatut d\'Autonomia de Catalunya?',
    options: [
      'Competències exclusives de l\'estat, competències compartides entre l\'estat i la generalitat i competències executives.',
      'Competències exclusives de la generalitat, competències cedides per l\'estat i competències de desenvolupament.',
      'Competències exclusives de la generalitat, competències concurrents i competències executives de l\'estat.',
      'Competències exclusives de la generalitat, competències compartides entre l\'estat i la generalitat i competències executives.'
    ],
    correctIndex: 3,
    explanation: 'L\'Estatut (arts. 110-112) classifica les competències de la Generalitat en exclusives, compartides i executives.'
  },
  {
    topic: 4,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P31] D\'acord amb l\'article 10 de la Llei 17/2015, d\'igualtat efectiva de dones i homes, en matèria de contractació del sector públic, quina mesura s\'ha d\'incloure en les bases de la contractació?',
    options: [
      'Incorporar la perspectiva de gènere únicament en les condicions d\'execució del contracte, sense que aquesta perspectiva hagi de formar part de les ofertes presentades en la contractació pública.',
      'La inclusió de clàusules socials que incorporin la perspectiva de gènere en les ofertes de contractació pública.',
      'Atorgar puntuació addicional exclusivament a les empreses que estiguin legalment obligades a disposar d\'un pla d\'igualtat i acreditin que aquest pla està vigent en el moment de presentar l\'oferta.',
      'Exigir a totes les empreses licitadores que disposin d\'un pla d\'igualtat, encara que legalment no hi estiguin obligades, com a requisit necessari per poder participar en el procediment de contractació.'
    ],
    correctIndex: 1,
    explanation: 'L\'art. 10 de la Llei 17/2015 preveu la inclusió de clàusules socials amb perspectiva de gènere en la contractació pública.'
  },
  {
    topic: 10,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P32] Quina afirmació defineix correctament la massa atòmica d\'un element a la taula periòdica?',
    options: [
      'La suma del nombre de protons i neutrons de l\'isòtop més abundant de l\'element.',
      'La mitjana ponderada del nombre de protons i neutrons dels seus isòtops, considerant només els isòtops estables.',
      'La mitjana ponderada de les masses dels seus isòtops segons l\'abundància relativa de cadascun.',
      'La mitjana aritmètica de les masses de tots els isòtops de l\'element, independentment de la seva abundància.'
    ],
    correctIndex: 2,
    explanation: 'La massa atòmica relativa d\'un element és la mitjana ponderada de les masses dels seus isòtops naturals segons la seva abundància.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P33] En el símil hidràulic d\'un circuit elèctric, quina correspondència és correcta?',
    options: [
      'Potència → volum total d\'aigua circulat; energia → pressió × cabal; generador → vàlvula.',
      'Càrrega elèctrica → pressió de l\'aigua; caiguda de tensió → cabal d\'aigua; interruptor → turbina.',
      'Tensió → cabal d\'aigua; intensitat → pressió de l\'aigua; resistència → pèrdua de càrrega.',
      'Tensió → pressió de l\'aigua; intensitat → cabal d\'aigua; resistència → estrenyiment o rugositat de la canonada.'
    ],
    correctIndex: 3,
    explanation: 'Tensió (V) ↔ pressió; Intensitat (I) ↔ cabal; Resistència (R) ↔ estrenyiment/rugositat o pèrdua de càrrega.'
  },
  {
    topic: 6,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P34] D\'acord amb la Llei 5/1994, quina afirmació estableix correctament la correspondència entre categories i escales del Cos de Bombers?',
    options: [
      'Les categories de sergent i de caporal pertanyen a l\'escala tècnica, la categoria de sotsinspector correspon a l\'escala executiva i la categoria d\'inspector a l\'escala superior.',
      'La categoria de sergent pertany a l\'escala executiva i la de caporal a l\'escala tècnica, mentre que la de sotsinspector correspon a l\'escala executiva i la d\'inspector a l\'escala superior.',
      'Les categories de sergent i de caporal pertanyen a l\'escala tècnica, mentre que la de sotsinspector correspon a l\'escala superior i la d\'inspector a l\'escala executiva.',
      'La categoria de sergent pertany a l\'escala tècnica i la de caporal a l\'escala executiva, mentre que la de sotsinspector correspon a l\'escala executiva i la d\'inspector a l\'escala superior.'
    ],
    correctIndex: 0,
    explanation: 'Escala bàsica/tècnica: bomber, bomber 1a, caporal, sergent; Escala executiva: sotsinspector; Escala superior: inspector.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P35] En una instal·lació elèctrica situada en un ambient especialment humit o de risc elevat per a les persones, quina sensibilitat del dispositiu diferencial proporciona protecció reforçada?',
    options: ['100 mA.', '300 mA.', '30 mA.', '10 mA.'],
    correctIndex: 3,
    explanation: 'Per a protecció general en habitatges és 30 mA, però en locals molt humits o de risc elevat s\'utilitzen diferencials d\'alta sensibilitat de 10 mA.'
  },
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P36] Quina afirmació descriu correctament la diferència entre un sistema de bombeig únic i un sistema doble contra incendis?',
    options: [
      'En el sistema únic hi ha una bomba principal accionada exclusivament per motor dièsel, mentre que en el sistema doble les dues bombes principals poden ser elèctriques sense cap condició addicional.',
      'En el sistema únic hi ha una sola bomba principal, necessàriament amb motor elèctric, mentre que en el sistema doble les dues bombes principals han de disposar de motors dièsel.',
      'En el sistema únic hi ha una bomba principal i una bomba jockey que actua com a segona bomba principal, mentre que en el sistema doble la bomba jockey substitueix una de les dues bombes principals.',
      'En el sistema únic hi ha una bomba principal, amb motor elèctric o dièsel, i una bomba jockey auxiliar; en el sistema doble hi ha dues bombes principals i, en general, només un dels motors d\'accionament pot ser elèctric, disposant també de bomba jockey.'
    ],
    correctIndex: 3,
    explanation: 'En grups dobles de bombeig, per seguretat davant talls elèctrics, com a màxim una bomba principal pot ser elèctrica (l\'altra ha de ser dièsel), amb bomba jockey de manteniment de pressió.'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P37] Quin és l\'objectiu principal de les actuacions d\'assistència sanitària inicial en el lloc de l\'incident i durant el trasllat?',
    options: [
      'Preservar la vida, estabilitzar les funcions vitals i facilitar una transferència segura fins a l\'atenció definitiva.',
      'Assumir íntegrament les funcions dels serveis sanitaris quan Bombers és el primer servei que arriba al lloc.',
      'Efectuar el trasllat tan aviat com sigui possible, encara que les funcions vitals no estiguin estabilitzades.',
      'Completar el diagnòstic de la víctima abans d\'iniciar qualsevol trasllat sanitari.'
    ],
    correctIndex: 0,
    explanation: 'L\'assistència sanitària prehospitalària té per objectiu preservar la vida, estabilitzar funcions vitals i transferir la víctima amb seguretat al centre sanitari.'
  },
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P38] En la classificació de les claus d\'una instal·lació segons el grau d\'accessibilitat, quina correspondència és correcta?',
    options: [
      'El grau 1 correspon a claus d\'accés directe; el grau 2, a claus que requereixen escales convencionals per ser manipulades; i el grau 3, a claus protegides per un armari o una porta amb pany de clau normalitzada.',
      'El grau 1 correspon a claus d\'accés directe; el grau 2, a claus situades en armaris o registres practicables que poden manipular-se sense mitjans especials; i el grau 3, a claus que requereixen escales, mitjans mecànics especials o l\'accés a una zona privada o d\'ús privat.',
      'El grau 1 correspon a claus d\'accés directe; el grau 2, a claus protegides per un armari o registre que requereixen mitjans mecànics especials; i el grau 3, a claus situades en zones comunes encara que la seva manipulació sigui directa.',
      'El grau 1 correspon a claus situades en zones comunes sense pany; el grau 2, a claus que requereixen qualsevol tipus d\'escala o mitjà mecànic; i el grau 3, exclusivament a claus situades dins de zones de propietat privada.'
    ],
    correctIndex: 1,
    explanation: 'Grau 1: accés directe sense obstacles; Grau 2: en armaris o registres practicables sense mitjans especials; Grau 3: requereix escales, eines especials o accés a zona privada.'
  },
  {
    topic: 14,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P39] En un mapa topogràfic, entre dues corbes mestres consecutives hi ha una diferència d\'altitud de 100 m repartida uniformement entre les 4 corbes intermèdies. Quina és l\'equidistància vertical?',
    options: ['50 m.', '10 m.', '20 m.', '25 m.'],
    correctIndex: 2,
    explanation: 'Habitualment cada 5 intervals hi ha una corba mestra (4 corbes intermèdies = 5 intervals). 100 m / 5 = 20 m d\'equidistància.'
  },
  {
    topic: 27,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P40] En el desplegament d\'una Àrea Base de Descontaminació (ABD) NRBQ, en quina zona s\'ubica la lona de color verd?',
    options: [
      'A la zona calenta.',
      'A la zona freda.',
      'A la zona de transició entre la zona tèbia i la zona freda.',
      'A la zona tèbia.'
    ],
    correctIndex: 1,
    explanation: 'A l\'ABD, la lona vermella correspon a l\'entrada (zona calenta/bruta), la groga a la zona de descontaminació (tèbia) i la verda a la zona neta o freda.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P41] D\'acord amb la llei d\'Ohm (I = V / R), quina afirmació expressa correctament la relació entre tensió (V), intensitat (I) i resistència (R)?',
    options: [
      'La tensió varia de forma directament proporcional tant amb la intensitat com amb la resistència.',
      'La resistència varia inversament amb la intensitat i directament amb la tensió.',
      'La intensitat varia directament amb la tensió i inversament amb la resistència.',
      'En un circuit lineal, l\'augment de la intensitat comporta un augment de la resistència.'
    ],
    correctIndex: 2,
    explanation: 'En un circuit lineal amb R constant, la intensitat és directament proporcional a la tensió aplicada i inversament proporcional a la resistència (I = V / R).'
  },
  {
    topic: 1,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P42] L\'Estatut d\'Autonomia de Catalunya (2006) s\'estructura en:',
    options: [
      'Un preàmbul, un títol preliminar, set títols més, quinze disposicions addicionals, dues disposicions transitòries, una disposició derogatòria i quatre disposicions finals.',
      'Un títol preliminar, set títols més, quatre disposicions addicionals, dues disposicions transitòries, una disposició derogatòria i quatre disposicions finals.',
      'Un preàmbul, un títol preliminar, set títols més, quinze disposicions addicionals, nou disposicions transitòries, una disposició derogatòria i una disposició final.',
      'Un preàmbul, set títols, dues disposicions transitòries, una disposició derogatòria i quatre disposicions finals.'
    ],
    correctIndex: 0,
    explanation: 'L\'EAC 2006 consta de preàmbul, títol preliminar + 7 títols (I-VII), 15 disposicions addicionals, 2 transitòries, 1 derogatòria i 4 finals.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P43] Quin dels elements següents NO correspon a una mesura de protecció passiva contra incendis en un edifici?',
    options: [
      'Compartimentació.',
      'Extintors.',
      'Protecció estructural.',
      'Segellat.'
    ],
    correctIndex: 1,
    explanation: 'Els extintors són mesures de protecció activa (requereixen acció humana o detecció/extinció per actuar), a diferència de la compartimentació, segellat i protecció estructural.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P44] En una combustió completa, quina combinació correspon principalment als productes resultants?',
    options: [
      'Diòxid de carboni (CO₂) i carboni pur (sutge).',
      'Monòxid de carboni (CO) i aigua (H₂O).',
      'Monòxid de carboni (CO) i carboni pur (sutge).',
      'Diòxid de carboni (CO₂) i aigua (H₂O).'
    ],
    correctIndex: 3,
    explanation: 'En una combustió completa d\'un hidrocarbur o material orgànic amb oxigen suficient, els productes principals són CO₂ i vapor d\'aigua (H₂O).'
  },
  {
    topic: 6,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P45] D\'acord amb la Llei 4/1997, de protecció civil de Catalunya, quina opció descriu correctament la composició institucional de la Comissió de Protecció Civil de Catalunya?',
    options: [
      'Representants de l\'Administració de la Generalitat, de l\'Administració de l\'Estat a Catalunya i de l\'Administració local de Catalunya.',
      'Representants de l\'Administració de l\'Estat a Catalunya i de l\'Administració local de Catalunya.',
      'Representants de l\'Administració Europea a Catalunya, de l\'Administració de la Generalitat i de l\'Administració local de Catalunya.',
      'Representants de l\'Administració de la Generalitat, dels consells comarcals i dels municipis de Catalunya.'
    ],
    correctIndex: 0,
    explanation: 'La Comissió de Protecció Civil de Catalunya integra representants de la Generalitat, de l\'Estat a Catalunya i de l\'Administració local.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P46] En relació amb les propietats i limitacions dels agents extintors gasosos, quina afirmació NO és correcta?',
    options: [
      'Presenten una bona eficàcia en focs de líquids inflamables i de gasos, corresponents a les classes B i C.',
      'No són conductors de l\'electricitat, característica que en permet l\'ús en presència d\'equips o instal·lacions elèctriques.',
      'No deixen residus després de la descàrrega, fet que els fa adequats per a la protecció d\'equips o instal·lacions sensibles.',
      'Presenten una elevada eficàcia en focs profunds de classe A, ja que penetren fàcilment a l\'interior del material combustible i n\'eviten la reignició.'
    ],
    correctIndex: 3,
    explanation: 'Incorrecta: els gasos extintors (com el CO₂) no tenen capacitat de penetració ni refredament sostingut en brases profundes de classe A, amb alt risc de reignició.'
  },
  {
    topic: 10,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P47] En la classificació dels hidrocarburs, quin grup correspon als hidrocarburs saturats que presenten únicament enllaços senzills C–C?',
    options: ['Als alcans.', 'Als alquens.', 'Als alquins.', 'Als alcons.'],
    correctIndex: 0,
    explanation: 'Els alcans (parafines) són hidrocarburs saturats amb enllaços simples C–C (fórmula CₙH₂ₙ₊₂).'
  },
  {
    topic: 10,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P48] Quina opció ordena correctament aquestes substàncies de major a menor temperatura crítica?',
    options: [
      'Aigua > Acetilè > Butà > Metà > Diòxid de carboni.',
      'Butà > Diòxid de carboni > Acetilè > Aigua > Metà.',
      'Butà > Aigua > Diòxid de carboni > Acetilè > Metà.',
      'Aigua > Butà > Acetilè > Diòxid de carboni > Metà.'
    ],
    correctIndex: 3,
    explanation: 'Temperatures crítiques: Aigua (374 °C) > Butà (152 °C) > Acetilè (35,2 °C) > Diòxid de carboni (31,1 °C) > Metà (-82,6 °C).'
  },
  {
    topic: 14,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P49] En un mapa topogràfic, com es pot deduir el sentit ascendent o descendent del relleu a través dels cursos d\'aigua naturals?',
    options: [
      'Els cursos d\'aigua naturals creuen les corbes de nivell aproximadament de manera perpendicular, neixen a les zones més altes i els afluents s\'uneixen al curs principal en el sentit de descens.',
      'Els cursos d\'aigua naturals tendeixen a seguir les corbes de nivell i els afluents se separen progressivament del curs principal a mesura que disminueix l\'altitud.',
      'Els cursos d\'aigua naturals creuen les corbes de nivell aproximadament de manera perpendicular, neixen a les zones més altes i els afluents s\'uneixen al curs principal en el sentit d\'ascens.',
      'Els cursos d\'aigua naturals discorren paral·lels a les corbes de nivell, mentre que la direcció de descens només es pot establir observant la separació entre corbes.'
    ],
    correctIndex: 0,
    explanation: 'Els rius creuen perpendicularment les corbes de nivell (les V apunten aigües amunt) i els afluents conflueixen formant un angle agut en el sentit del descens.'
  },
  {
    topic: 6,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P50] D\'acord amb la Llei 5/1994, com s\'ha de classificar disciplinàriament la negativa injustificada d\'una persona membre del Cos de Bombers a sotmetre\'s a les revisions físiques i de medicina preventiva establertes?',
    options: [
      'Infracció administrativa sense caràcter disciplinari.',
      'Falta lleu.',
      'Falta molt greu.',
      'Falta greu.'
    ],
    correctIndex: 3,
    explanation: 'La Llei 5/1994 tipifica com a falta greu la negativa injustificada a sotmetre\'s a les revisions físiques i mèdiques preventives.'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P51] Davant d\'un lactant conscient amb una obstrucció greu de la via aèria per cos estrany (OVACE), quina seqüència s\'ha d\'aplicar?',
    options: [
      '5 cops interescapulars i 5 compressions toràciques.',
      '10 compressions abdominals consecutives.',
      '30 compressions toràciques i 2 ventilacions des de l\'inici.',
      '5 cops interescapulars i 5 compressions abdominals.'
    ],
    correctIndex: 0,
    explanation: 'En lactants (< 1 any) mai no es fan compressions abdominals (Heimlich); s\'alternen 5 cops interescapulars i 5 compressions toràciques.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P52] En el Sistema Internacional, quina correspondència identifica correctament la magnitud angular plana, els seus símbols i la seva unitat?',
    options: [
      'Angle, representat habitualment per α o β, mesurat en graus sexagesimals i amb símbol d\'unitat °.',
      'Angle, representat habitualment per θ o ω, mesurat en radians per segon i amb símbol d\'unitat rad/s.',
      'Angle, representat habitualment per α o β, mesurat en radians i amb símbol d\'unitat rad.',
      'Angle, representat habitualment per α o β, mesurat en estereoradians i amb símbol d\'unitat sr.'
    ],
    correctIndex: 2,
    explanation: 'L\'angle pla al SI es mesura en radians (símbol rad); l\'estereoradian (sr) és per a l\'angle sòlid.'
  },
  {
    topic: 8,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P53] Quin és el límit inferior d\'inflamabilitat (LII) de l\'hidrogen (H₂) a l\'aire?',
    options: ['4%.', '3%.', '5%.', '4,3%.'],
    correctIndex: 0,
    explanation: 'L\'hidrogen té un rang d\'inflamabilitat molt ampli: del 4% (LII) al 75% (LSI) en volum a l\'aire.'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P54] En l\'escala AVDN, què indica específicament la lletra V?',
    options: [
      'Que el pacient està completament alerta i orientat.',
      'Que el pacient respon únicament davant d\'un estímul dolorós.',
      'Que el pacient respon davant d\'estímuls verbals.',
      'Que el pacient no presenta resposta a cap estímul.'
    ],
    correctIndex: 2,
    explanation: 'AVDN: A (Alerta), V (resposta a estímuls Verbals), D (resposta al Dolor), N (No respon).'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P55] En un rellotge analògic, entre les 3:00 h i les 4:15 h, quin és l\'angle total recorregut per l\'agulla minutera?',
    options: ['180°', '90°.', '450°.', '45°.'],
    correctIndex: 2,
    explanation: 'D\'1h 15min: 1 volta completa (360°) + 1/4 de volta (90°) = 450°.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P56] En utilitzar un tornavís buscapols, quin element incorporat permet que el corrent que travessa el cos es mantingui en valors molt baixos?',
    options: [
      'Un condensador de baixa capacitat connectat al mànec, que absorbeix el corrent abans que pugui circular pel cos.',
      'Una resistència de valor molt elevat connectada en sèrie, que limita la intensitat del corrent a dècimes de mA.',
      'Un fusible de baixa intensitat connectat en paral·lel, que deriva cap a terra la major part del corrent.',
      'Un díode connectat en sèrie, que impedeix completament el pas de corrent a través del cos durant la comprovació.'
    ],
    correctIndex: 1,
    explanation: 'El buscapols incorpora una resistència en sèrie de l\'ordre de megaohms (MΩ) que limita la intensitat a fraccions de mA, suficient per encendre el neó sense risc.'
  },
  {
    topic: 12,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P57] Quin és l\'ordre correcte dels elements dins l\'armari del comptador general d\'aigua des de l\'entrada fins a la sortida?',
    options: [
      'Clau de tall general → Filtre → Comptador → Aixeta o racord de prova → Vàlvula de retenció → Clau de sortida.',
      'Filtre → Clau de tall general → Comptador → Vàlvula de retenció → Aixeta o racord de prova → Clau de sortida.',
      'Clau de tall general → Comptador → Filtre → Aixeta o racord de prova → Vàlvula de retenció → Clau de sortida.',
      'Clau de tall general → Filtre → Aixeta o racord de prova → Comptador → Clau de sortida → Vàlvula de retenció.'
    ],
    correctIndex: 0,
    explanation: 'Seqüència normativa CTE: Clau de tall general → Filtre → Comptador → Aixeta/racord de prova → Vàlvula de retenció → Clau de sortida.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P58] Quin ordre representa correctament la transmissió del moviment al llarg de la cadena cinemàtica d\'un vehicle?',
    options: [
      'Motor → embragatge → caixa de canvis → palier → arbre de transmissió → pont diferencial → rodes.',
      'Motor → embragatge → caixa de canvis → arbre de transmissió → pont diferencial → palier → rodes.',
      'Motor → caixa de canvis → embragatge → arbre de transmissió → pont diferencial → palier → rodes.',
      'Motor → embragatge → arbre de transmissió → caixa de canvis → palier → pont diferencial → rodes.'
    ],
    correctIndex: 1,
    explanation: 'Motor → embragatge → caixa de canvis → arbre de transmissió → pont diferencial → paliers → rodes.'
  },
  {
    topic: 28,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P59] Quin dels signes següents és compatible amb una fase inicial (compensada) del xoc?',
    options: [
      'Pols lent i dèbil.',
      'Pell suada.',
      'Tensió arterial sistòlica de 120 mmHg.',
      'Bradipnea.'
    ],
    correctIndex: 1,
    explanation: 'En la fase inicial del xoc (resposta simpàtica compensadora), apareix taquicàrdia, taquipnea, vasoconstricció perifèrica i pell freda, pàl·lida i suada (diaforesi), sovint abans que caigui la TA.'
  },
  {
    topic: 7,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P60] Segons el Decret 12/2023, quina opció identifica correctament les divisions i estructures territorials de la Subdirecció General Operativa (SGO)?',
    options: [
      'La Divisió de Planificació i Gestió, la Divisió d\'Emergències Climàtiques i Grups Operatius Especials, la Divisió d\'Operacions, la Divisió de Coordinació d\'Emergències i les regions d\'emergències.',
      'La Divisió de Planificació i Gestió, la Divisió d\'Emergències Climàtiques i Grups Operatius Especials, la Divisió de Coordinació Operativa, la Divisió de Coordinació d\'Emergències i les regions d\'emergències.',
      'La Divisió de Planificació i Gestió, la Divisió de Grups Operatius Especials, la Divisió d\'Operacions, la Divisió de Coordinació d\'Emergències i les regions d\'emergències.',
      'La Divisió de Planificació i Gestió, la Divisió d\'Emergències Climàtiques i Grups Operatius Especials, la Divisió d\'Operacions, la Divisió de Sala Central de Bombers i les regions d\'emergències.'
    ],
    correctIndex: 0,
    explanation: 'La SGO s\'estructura en 4 divisions (Planificació i Gestió; Emergències Climàtiques i Grups Operatius Especials; Operacions; Coordinació d\'Emergències) i les regions d\'emergències.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P61] Què caracteritza una deflagració?',
    options: [
      'És un tipus d\'explosió en què la combustió es propaga a una velocitat inferior a 1 m/s i inferior a la velocitat del so en el medi, generant una pressió notable sense produir una ona de xoc d\'alta energia.',
      'És un tipus d\'explosió en què la combustió es propaga a una velocitat superior a la del so en el medi, generant una ona de xoc potent i fent entrar gairebé instantàniament tota la massa de combustible en combustió.',
      'És un tipus de combustió ràpida en què la combustió es propaga a una velocitat superior a 1 m/s però inferior a la velocitat del so en el medi, generant una pressió notable sense produir una ona de xoc d\'alta energia.',
      'És un tipus d\'explosió en què la combustió es propaga a una velocitat superior a 1 m/s però inferior a la velocitat del so en el medi, generant una pressió notable sense produir una ona de xoc d\'alta energia.'
    ],
    correctIndex: 3,
    explanation: 'La deflagració és una explosió/combustió subsònica (> 1 m/s i < velocitat del so en el medi) que genera ona de pressió sense ona de xoc supersònica.'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P62] A partir de quina temperatura corporal central per sota es considera que una persona pateix hipotèrmia?',
    options: ['34,6 °C.', '35 °C.', '34 °C.', '33 °C.'],
    correctIndex: 1,
    explanation: 'Es defineix hipotèrmia quan la temperatura corporal central disminueix per sota dels 35 °C.'
  },
  {
    topic: 7,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P63] D\'acord amb el Decret 276/2016, qui pot instar la variació del nivell de comandament establert durant una intervenció?',
    options: [
      'Pot variar-se a petició conjunta del cap de torn i del cap de coordinació territorial, sense que el cap d\'intervenció pugui instar-la individualment.',
      'Pot variar-se a petició del cap de parc o del cap de torn, sempre que la modificació sigui comunicada posteriorment al comandament territorial.',
      'Pot variar-se a petició del cap de coordinació de la Sala Central de Bombers o del cap de parc responsable de l\'àmbit territorial afectat.',
      'Pot variar-se a petició del cap d\'intervenció o del cap de coordinació territorial.'
    ],
    correctIndex: 3,
    explanation: 'Segons el Decret 276/2016, el nivell de comandament es pot modificar a petició del cap d\'intervenció o del cap de coordinació territorial.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P64] Quina de les definicions següents correspon específicament a un esforç de torsió?',
    options: [
      'És l\'esforç produït per un gir que tendeix a deformar l\'element, però que es caracteritza principalment perquè una part de la peça treballa a tracció i l\'altra a compressió mentre aquesta es corba.',
      'És l\'esforç produït per un gir que tendeix a retorçar l\'element sobre si mateix, i que pot aparèixer especialment en pals o màstils, banderes, cercles perimetrals i elements asimètrics.',
      'És l\'esforç produït quan dues forces actuen en sentits oposats al llarg de l\'eix de l\'element, provocant que aquest tendeixi a allargar-se i augmentar la seva longitud inicial.',
      'És l\'esforç produït quan una part de l\'element tendeix a lliscar respecte de l\'altra per l\'acció de forces transversals, especialment en unions, mènsules o zones properes als recolzaments.'
    ],
    correctIndex: 1,
    explanation: 'La torsió tendeix a retorçar l\'element al voltant del seu eix longitudinal.'
  },
  {
    topic: 14,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P65] Un vehicle es desplaça exactament cap al sud i rep un vent lateral perpendicular sobre el seu costat esquerre. De quin vent es tracta?',
    options: [
      'Vent de ponent.',
      'Vent de garbí.',
      'Vent de gregal.',
      'Vent de llevant.'
    ],
    correctIndex: 3,
    explanation: 'Mirant cap al sud, l\'esquerra correspon a l\'est. Un vent que bufa des de l\'est s\'anomena vent de llevant.'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P66] A quina categoria pertanyen els EPI destinats a protegir davant d\'agressions mecàniques superficials, com ara guants de jardineria o calçat lleuger?',
    options: ['Categoria IV.', 'Categoria III.', 'Categoria I.', 'Categoria II.'],
    correctIndex: 2,
    explanation: 'Els EPI contra riscos mínims (agressions mecàniques superficials, productes de neteja poc nocius) pertanyen a la Categoria I.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P67] Davant una situació de conducció amb vent lateral fort en un vehicle de grans dimensions, quina actuació és la més adequada?',
    options: [
      'Reduir la velocitat, anticipar els possibles cops de vent segons la morfologia del terreny i mantenir una presa ferma del volant.',
      'Reduir la velocitat i corregir amb rapidesa la trajectòria amb el volant cada vegada que es percebi l\'impacte d\'un cop de vent lateral.',
      'Augmentar la velocitat en les zones més exposades per disminuir el temps durant el qual el vehicle queda sotmès a l\'acció del vent.',
      'Circular a velocitat reduïda i reaccionar immediatament amb correccions de direcció quan el vent provoqui una desviació lateral del vehicle.'
    ],
    correctIndex: 0,
    explanation: 'Cal reduir la velocitat, anticipar les sortides de túnels, viaductes o passos descoberts i subjectar fermament el volant sense cops bruscos.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P68] En l\'experiment de Torricelli, quin valor en mil·límetres de mercuri correspon a la pressió que exerceix l\'atmosfera a nivell del mar?',
    options: [
      '10,33 mm de mercuri.',
      '76 mm de mercuri.',
      '7.600 mm de mercuri.',
      '760 mm de mercuri.'
    ],
    correctIndex: 3,
    explanation: '1 atmosfera equival a una columna de 760 mm de mercuri (Hg) o 10,33 m d\'aigua.'
  },
  {
    topic: 3,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P69] D\'acord amb la Llei 31/1995 (LPRL), quina afirmació sobre la protecció col·lectiva i la protecció individual és correcta?',
    options: [
      'La protecció col·lectiva actua sobre el risc o protegeix el conjunt de persones exposades, mentre que els EPI protegeixen individualment i depenen del seu ús correcte.',
      'La protecció col·lectiva i els EPI tenen la mateixa funció preventiva, i es diferencien principalment pel nombre de treballadors als quals protegeixen.',
      'La protecció col·lectiva actua sobre el conjunt de persones exposades, mentre que els EPI eliminen el risc abans que aquest arribi al treballador.',
      'La protecció col·lectiva protegeix diverses persones, però, igual que els EPI, la seva eficàcia depèn principalment de l\'ús correcte que en faci cada treballador.'
    ],
    correctIndex: 0,
    explanation: 'La protecció col·lectiva protegeix simultàniament múltiples persones actuant sobre el risc sense dependre de la conducta individual; els EPI protegeixen un sol treballador i depenen del seu ús correcte.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P70] Un vehicle cobreix una distància total de 3 km en un temps de 5 minuts a velocitat constant. Quina és la seva velocitat mitjana en m/s?',
    options: ['12 m/s.', '10 m/s.', '6 m/s.', '8 m/s.'],
    correctIndex: 1,
    explanation: '3 km = 3.000 m; 5 min = 300 s. v = 3.000 / 300 = 10 m/s.'
  },
  {
    topic: 13,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P71] Tenim una línia d\'aigua amb un cabal estabilitzat de 240 l/min durant 7 min i 30 s. Quin és el consum total d\'aigua?',
    options: ['18.000 l.', '1.740 l.', '1.800 l.', '1.560 l.'],
    correctIndex: 2,
    explanation: '7 min 30 s = 7,5 min. Volum = 240 L/min × 7,5 min = 1.800 litres.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P72] D\'acord amb el principi de jerarquia d\'una estructura, quina seqüència representa correctament l\'ordre habitual de transmissió de les càrregues?',
    options: [
      'Bigues → Jàsseres → Pilars o murs → Fonaments.',
      'Bigues → Pilars o murs → Jàsseres → Fonaments.',
      'Bigues → Jàsseres → Fonaments → Pilars o murs.',
      'Jàsseres → Bigues → Pilars o murs → Fonaments.'
    ],
    correctIndex: 0,
    explanation: 'Les càrregues passen dels forjats a les bigues secundàries, d\'aquestes a les jàsseres, després als pilars o murs i finalment als fonaments.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P73] Una ampolla de 8 litres conté aire a 250 bar. Si s\'allibera a temperatura constant fins a 1 bar, quin volum ocuparà finalment?',
    options: ['4.000 litres.', '2.500 litres.', '2.000 litres.', '1.000 litres.'],
    correctIndex: 2,
    explanation: 'P₁ · V₁ = P₂ · V₂ → 250 · 8 = 1 · V₂ → V₂ = 2.000 litres.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P74] Quina és la funció principal dels bloquejadors de diferencial en la conducció fora d\'asfalt?',
    options: [
      'Augmentar la velocitat de gir de les rodes amb menys adherència perquè recuperin tracció abans que la resta.',
      'Desconnectar temporalment les rodes que perden adherència perquè tota la força del motor es transmeti únicament a les que mantenen contacte amb el terreny.',
      'Reduir automàticament la potència del motor quan una roda patina, impedint que el vehicle continuï avançant fins que recuperi adherència.',
      'Repartir de manera equilibrada la força del motor entre les rodes, evitant que aquesta es concentri en les que tenen menys adherència.'
    ],
    correctIndex: 3,
    explanation: 'Un diferencial obert envia tot el parell a la roda que patina; el bloqueig força que ambdues rodes (o eixos) girin solidàriament repartint la tracció.'
  },
  {
    topic: 9,
    difficulty: 'Mitjà',
    question: '[ÒPTIM PP2 · P75] Arrosseguem un ferit amb un trineu mitjançant una corda que forma un angle de 60° amb el terra, amb una tensió constant de 200 N durant 10 m horitzontals. Quin treball realitza la força de tracció?',
    options: ['2.000 J.', '500 J.', '1.732 J.', '1.000 J.'],
    correctIndex: 3,
    explanation: 'W = F · d · cos(60°) = 200 · 10 · 0,5 = 1.000 J.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P76] Quina funció té la reacció en cadena en el manteniment del foc?',
    options: [
      'És un procés químic en què els productes d\'una reacció anterior, especialment els radicals lliures, fan la funció de comburent i combustible alhora.',
      'És el procés físic mitjançant el qual la calor es transmet a través d\'un material sòlid des de les zones més calentes cap a les més fredes.',
      'És un procés químic autosostingut en què els productes d\'una reacció anterior, especialment els radicals lliures, actuen com a reactius en reaccions posteriors i mantenen la flama activa.',
      'És el procés pel qual el combustible absorbeix calor fins a transformar-se en gasos combustibles que posteriorment poden reaccionar amb el comburent.'
    ],
    correctIndex: 2,
    explanation: 'La reacció en cadena propaga la combustió amb flama mitjançant radicals lliures intermedis molt reactius que desencadenen noves reaccions.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[ÒPTIM PP2 · P77] En relació amb les diferents formes en què el cos humà pot interactuar amb un circuit elèctric, quina afirmació és INCORRECTA?',
    options: [
      'Quan som part del circuit, en paral·lel, el nostre cos proporciona un camí addicional al corrent juntament amb altres camins ja existents, i la intensitat que ens travessa depèn de la nostra resistència en comparació amb la dels altres camins.',
      'Quan som part del circuit, en paral·lel, la intensitat que travessa el nostre cos depèn exclusivament de la nostra resistència, sense que hi influeixi la resistència dels altres camins connectats.',
      'Quan som el circuit, en sèrie, el nostre cos tanca el circuit i es converteix en l\'únic camí disponible perquè hi circuli el corrent, que queda limitat principalment per la nostra resistència.',
      'Quan no formem part del circuit, si toquem només un element energitzat però no proporcionem cap camí que permeti tancar el circuit, el corrent no circula a través del nostre cos.'
    ],
    correctIndex: 1,
    explanation: 'Incorrecta: quan estem en paral·lel (o en un divisor de corrent amb altres camins), la intensitat que passa pel cos depèn de la relació entre la nostra resistència i la dels altres camins.'
  }
];
