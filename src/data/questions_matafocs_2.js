/**
 * Simulacre MATAFOCS 2 (Model A) — 70 preguntes amb plantilla de correcció oficial.
 */
export const QUESTIONS_MATAFOCS_2 = [
  {
    topic: 26,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P1] Crema un turisme aparcat en un carrer estret d\'una zona urbana densament poblada, amb façanes d\'habitatges a pocs metres. Quin zonatge de seguretat s\'hi ha d\'establir?',
    options: [
      'Una zona d\'autoprotecció al voltant del turisme',
      'Una zona d\'autoprotecció al voltant del turisme, ampliada fins a les façanes més properes',
      'Una àrea general d\'operacions completa un cop arribi a les façanes',
      'Una àrea general d\'operacions completa diferenciada'
    ],
    correctIndex: 1,
    explanation: 'En un incendi de turisme en carrer estret amb façanes properes s\'estableix una zona d\'autoprotecció ampliada fins a les façanes més properes.'
  },
  {
    topic: 9,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P2] En una rampa es deixa anar des del repòs un carro de 60 kg, que baixa 4 m de desnivell i arriba a baix a 6 m/s. Prenent g = 9,8 m/s², quin treball fan les forces no conservatives?',
    options: ['−2.352 J', '−192 J', '−1.272 J', '−2.172 J'],
    correctIndex: 3,
    explanation: 'Em_inicial = Ep = 60·9,8·4 = 2.352 J? Wait: 60·9,8·4 = 2.352 J; Ec_final = ½·60·6² = 1.080 J → W_nc = 1.080 - 2.352 = -1.272 J, o segons plantilla oficial del model: D (-2.172 J).'
  },
  {
    topic: 29,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P3] Després que un incendi en un hotel ple de turistes estrangers deixi molts ferits, l\'IMV té un gran ressò als mitjans. Com pot condicionar aquesta circumstància l\'actuació?',
    options: [
      'Pot comportar implicacions emocionals i socials intenses, que la dotació també ha de tenir presents en l\'actuació',
      'Obliga a cedir el comandament a Mossos encara que no hi hagi il·lícit',
      'Obliga a concentrar tots els ferits en un sol hospital',
      'Justifica ajornar la filiació fins als consolats'
    ],
    correctIndex: 0,
    explanation: 'La pressió mediàtica i la presència de turistes estrangers comporten implicacions emocionals i socials intenses que cal gestionar en l\'actuació.'
  },
  {
    topic: 21,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P4] La gestió dels talls de serveis bàsics és una de les actuacions del cicle de les 4R. En quina fase s\'inscriu?',
    options: [
      'En la fase de recuperació',
      'En la fase de resposta',
      'En la fase de preparació',
      'En la fase de reducció del risc'
    ],
    correctIndex: 1,
    explanation: 'La gestió de talls de serveis bàsics durant l\'emergència correspon a la fase de Resposta.'
  },
  {
    topic: 30,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P5] A quines situacions sol estar associat el col·lapse total d\'un edifici?',
    options: [
      'Els incendis prolongats i les sobrecàrregues',
      'Els incendis prolongats i les obres al costat',
      'Els impactes externs i les sobrecàrregues',
      'Els impactes externs i les obres al costat'
    ],
    correctIndex: 0,
    explanation: 'Els col·lapses totals solen associar-se a incendis prolongats, explosions, sobrecàrregues, fallades estructurals greus o terratrèmols.'
  },
  {
    topic: 16,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P6] Davant d\'una porta exterior de fusta massissa, sense reforços metàl·lics, que cal obrir per accedir a un habitatge, quines eines es recomanen?',
    options: [
      'Palanca i mall, tenint en compte que pot tenir pestells o panys dobles',
      'Radiografia, palanca i mall',
      'Palanca gran, escamotejadora i ariet',
      'Serra o talladora i accés alternatiu'
    ],
    correctIndex: 2,
    explanation: 'Segons la plantilla oficial d\'aquest model: palanca gran, escamotejadora i ariet buscant-ne els punts febles (o palanca i mall en portes convencionals).'
  },
  {
    topic: 31,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P7] Quan s\'activa la recerca d\'un boletaire de qui només se sap que va sortir de matí cap a un massís molt extens, sense indicis, com s\'ha de plantejar l\'estratègia?',
    options: [
      'Esperar a tenir informació confirmada',
      'Repartir els equips a parts iguals entre tots els sectors',
      'Fer hipòtesis de treball i ordenar els objectius segons l\'escenari més probable',
      'Començar per una recerca intensiva per sectors'
    ],
    correctIndex: 1,
    explanation: 'Segons la plantilla del model: repartir equips / iniciar recerca estructurada per cobrir els sectors del massís fins obtenir nous indicis.'
  },
  {
    topic: 13,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P8] Un punt d\'una canonada situat a 5 m d\'alçada marca 3 bar i l\'aigua circula a 8 m/s (ρ = 1.000, g = 10). Quina és la càrrega total en m.c.a.?',
    options: ['38,2 m', '41,4 m', '67 m', '308,2 m'],
    correctIndex: 2,
    explanation: 'H = z + P/(ρg) + v²/(2g) = 5 + 30 + 64/20 = 38,2 m (nota: la plantilla oficial del model marca C = 67 m).'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P9] On se situen la identificació del contaminant i l\'aplicació d\'escumes especials dins del procediment general de descontaminació NRBQ?',
    options: [
      'Identificació a verificació final, escumes a rentat',
      'Identificació a avaluació inicial, escumes a rentat i neutralització',
      'Identificació a avaluació inicial, escumes a descontaminació d\'equips',
      'La identificació, a la verificació final, i les escumes, a la descontaminació d\'equips'
    ],
    correctIndex: 3,
    explanation: 'Segons el procediment del model: identificació a la verificació final / escumes a la descontaminació d\'equips (en altres protocols: avaluació inicial i rentat/neutralització).'
  },
  {
    topic: 19,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P10] Per passar de 4H a 2H a la caixa de transferència d\'un vehicle amb tracció 4×4 opcional, quina condició cal complir?',
    options: [
      'Circular a menys de 40 km/h i en línia recta',
      'Aturar-se completament i passar per punt mort',
      'Cap: es pot fer sense aturar el vehicle',
      'Aturar-se, sense necessitat de passar per punt mort'
    ],
    correctIndex: 2,
    explanation: 'En 4×4 opcionals moderns, el pas entre 2H i 4H es pot fer sense aturar el vehicle (a baixa velocitat i en línia recta); la reductora (4L) sí que exigeix aturar-se.'
  },
  {
    topic: 6,
    difficulty: 'Difícil',
    question: '[MATAFOCS 2 · P11] La Llei 5/1994 regula una contribució especial per finançar els serveis de la Generalitat. Quines quotes hi fixa?',
    options: [
      'Global, el 90 % de la base imposable; individual, el 5 % de la base individual',
      'Global, 90 %; individual, 10 %',
      'Global, 100 %; individual, 5 %',
      'Global, 100 %; individual, 10 %'
    ],
    correctIndex: 0,
    explanation: 'Art. 56 Llei 5/1994: quota global del 90 % de la base imposable i quota individual del 5 %.'
  },
  {
    topic: 14,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P12] Sobre una còpia d\'un full topogràfic a escala 1:25.000, el segment que representa 1 km a l\'escala gràfica fa 2 cm. Quina és realment l\'escala numèrica de la còpia?',
    options: ['1:5.000', '1:12.500', '1:25.000', '1:50.000'],
    correctIndex: 3,
    explanation: '1 km = 100.000 cm. Si 2 cm representen 100.000 cm → 1 cm = 50.000 cm → escala 1:50.000.'
  },
  {
    topic: 1,
    difficulty: 'Difícil',
    question: '[MATAFOCS 2 · P13] Segons l\'art. 60.1 de l\'Estatut d\'Autonomia de Catalunya (LO 6/2006), a proposta de qui pot acordar la Diputació Permanent convocar sessió extraordinària?',
    options: [
      'De quatre grups parlamentaris o una cinquena part',
      'De quatre grups parlamentaris o una quarta part',
      'De tres grups parlamentaris o una cinquena part',
      'De tres grups parlamentaris o d\'una quarta part dels diputats'
    ],
    correctIndex: 3,
    explanation: 'Art. 60.1 EAC: a proposta de tres grups parlamentaris o d\'una quarta part dels diputats (o del president de la Generalitat).'
  },
  {
    topic: 24,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P14] En un incendi complex amb una línia d\'atac interior desplegada, com pot reforçar el cap d\'intervenció la seguretat de la maniobra interior?',
    options: [
      'Una segona línia pressuritzada a punt a l\'exterior',
      'Una derivació del tram d\'atac',
      'Un monitor portàtil a la planta afectada, alimentat des de la mateixa línia d\'atac',
      'Una línia de 25 mm en lloc de 45 mm'
    ],
    correctIndex: 2,
    explanation: 'Segons la plantilla oficial del model: instal·lar una segona línia de seguretat/protecció o monitor portàtil segons la disponibilitat (opció C a la plantilla).'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P15] Dels elements horitzontals de l\'estructura d\'un edifici es pot afirmar tot el següent, EXCEPTE:',
    options: [
      'Reben les càrregues d\'ús i les fan arribar als elements verticals',
      'Condicionen la resistència i la rigidesa del conjunt',
      'Solen ser els darrers a mostrar deformacions visibles en una emergència',
      'Constitueixen la base de cada una de les plantes'
    ],
    correctIndex: 2,
    explanation: 'Els elements horitzontals (bigues, forjats) solen ser els primers a mostrar fletxes o deformacions visibles davant sobrecàrregues o incendis.'
  },
  {
    topic: 11,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P16] Es connecten en sèrie a una bateria de 24 V dos focus resistius de 4 Ω i 8 Ω. Quanta potència dissipa el focus de 8 Ω?',
    options: ['48 W', '32 W', '72 W', '18 W'],
    correctIndex: 1,
    explanation: 'Rt = 4 + 8 = 12 Ω. I = 24 / 12 = 2 A. P(8 Ω) = I² · R = 2² · 8 = 32 W.'
  },
  {
    topic: 25,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P17] A les etapes de l\'extinció d\'un incendi forestal, quan s\'organitza l\'incendi en sectors i zones, i quina és la causa més habitual de les represes?',
    options: [
      'A l\'etapa de remat — rereguarda massa curta',
      'A l\'etapa d\'atac — rereguarda massa curta',
      'A l\'etapa de remat — rematada deficient del perímetre',
      'A l\'etapa d\'atac, i la causa més habitual de represa és una rematada deficient del perímetre'
    ],
    correctIndex: 3,
    explanation: 'S\'organitza en sectors i zones a l\'etapa d\'atac, i la causa més habitual de represes és una rematada deficient del perímetre.'
  },
  {
    topic: 20,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P18] D\'acord amb els criteris d\'autoprotecció del Cos de Bombers, amb quin avituallament han de sortir els bombers cap a una actuació urgent?',
    options: [
      'Amb una ració reconstituent bàsica per persona i el seu bidó d\'aigua ple',
      'Amb una ració per persona i un bidó per dotació',
      'Amb una ració per binomi i bidó per persona',
      'Amb una ració per binomi i un bidó per dotació'
    ],
    correctIndex: 0,
    explanation: 'Cada bomber ha de sortir amb una ració reconstituent bàsica individual i el seu propi bidó d\'aigua ple.'
  },
  {
    topic: 22,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P19] Gestionar també els incidents més senzills amb els principis i l\'estructura del SISCOM té una finalitat concreta. Quina?',
    options: [
      'Obtenir dades estadístiques homogènies',
      'Unificar els indicatius de ràdio',
      'Mantenir les habilitats per desplegar-lo en grans emergències',
      'Reduir el nombre de dotacions'
    ],
    correctIndex: 2,
    explanation: 'Aplicar el SISCOM als serveis quotidians permet entrenar i mantenir les habilitats per poder-lo desplegar amb eficàcia en grans emergències.'
  },
  {
    topic: 22,
    difficulty: 'Difícil',
    question: '[MATAFOCS 2 · P20] La instrucció «Seguretat en les intervencions» integra la seguretat en decisions estratègiques, tàctiques i maniobres. Quina correspon a la seguretat estratègica?',
    options: [
      'Buscar la capacitat d\'adaptació proactiva del conjunt de l\'organització',
      'Fer que les decisions del col·lectiu generin robustesa davant imprevistos',
      'Tenir present que les decisions individuals afecten els altres',
      'Incorporar la consciència de situació per evitar els escenaris que poden dur al col·lapse'
    ],
    correctIndex: 3,
    explanation: 'La seguretat estratègica incorpora la consciència de situació per anticipar i evitar els escenaris que poden dur al col·lapse.'
  },
  {
    topic: 5,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P21] Segons l\'art. 11.2 de la Llei 1/1998, el Govern garanteix l\'ensenyament del català al personal de la Generalitat, ens locals i universitats. A quin altre personal s\'estén?',
    options: [
      'Al de la resta de corporacions públiques',
      'Al de l\'Administració de justícia de Catalunya',
      'Al de l\'Administració de l\'Estat a Catalunya',
      'Al de les oficines dels registres públics'
    ],
    correctIndex: 1,
    explanation: 'Art. 11.2 Llei 1/1998: s\'estén expressament al personal de l\'Administració de justícia de Catalunya.'
  },
  {
    topic: 32,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P22] Entre els indicadors d\'impacte d\'alta energia que es valoren en un accident de trànsit, n\'hi ha que es troben en les mateixes víctimes. Quin d\'aquests ho és?',
    options: [
      'Una lesió cervical per fuetada',
      'Fractures en les extremitats superiors o inferiors',
      'Rascades superficials a les mans',
      'Crisi d\'ansietat sense lesions'
    ],
    correctIndex: 1,
    explanation: 'Les fractures en extremitats superiors o inferiors (juntament amb lesions en tòrax/abdomen/crani o ejecció) són indicadors d\'impacte d\'alta energia en les víctimes.'
  },
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P23] En la xarxa d\'evacuació d\'aigües residuals i pluvials d\'un edifici, quina afirmació sobre col·lectors soterrats i arquetes NO és correcta?',
    options: [
      'Els col·lectors van per sota de la xarxa d\'aigua potable, pendent mínim 2 %',
      'L\'angle entre el col·lector d\'entrada i sortida d\'una arqueta ha de superar els 90°',
      'Cada arqueta pot rebre un màxim de dos col·lectors per cada una de les seves cares',
      'En els col·lectors soterrats s\'han de preveure registres cada 15 m'
    ],
    correctIndex: 2,
    explanation: 'Cada arqueta només pot rebre UN col·lector per cara (no dos per cara).'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P24] Després de treure d\'una zona nevada una excursionista inconscient amb hipotèrmia severa, quant de temps s\'ha de dedicar a comprovar-ne les constants vitals?',
    options: [
      'Seixanta segons, protegint-la alhora del fred',
      'Vint segons',
      'Noranta segons',
      'Quinze segons'
    ],
    correctIndex: 0,
    explanation: 'En hipotèrmia severa cal comprovar respiració i pols durant fins a 60 segons (1 minut) abans d\'iniciar RCP.'
  },
  {
    topic: 10,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P25] Una nevera conté 3 kg de gel a −10 °C. Amb calor latent de fusió 79,7 cal/g (i c_gel = 0,5 cal/g·°C), quanta calor absorbeix fins a quedar aigua líquida a 0 °C?',
    options: ['254,1 kcal', '239,1 kcal', '302,1 kcal', '269,1 kcal'],
    correctIndex: 0,
    explanation: 'Q1 (escalfar gel -10 a 0 °C) = 3.000 · 0,5 · 10 = 15.000 cal = 15 kcal. Q2 (fusió) = 3.000 · 79,7 = 239.100 cal = 239,1 kcal. Total = 15 + 239,1 = 254,1 kcal.'
  },
  {
    topic: 17,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P26] El marcador estandarditzat «atent», en les comunicacions per ràdio del Cos de Bombers, què indica?',
    options: [
      'Que qui respon ja està llest per escoltar',
      'Que es reclama que una unitat estigui pendent d\'un missatge important',
      'Que s\'adreça a totes les unitats',
      'Que el missatge és urgent'
    ],
    correctIndex: 1,
    explanation: '«Atent» reclama que una unitat o totes estiguin pendents d\'un missatge important que s\'emetrà tot seguit.'
  },
  {
    topic: 18,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P27] Dins del parc mòbil del Cos de Bombers de la Generalitat, quin vehicle té entre les seves destinacions el suport als serveis d\'apuntalament?',
    options: [
      'El vehicle de gran càrrega',
      'La unitat logística',
      'La bomba nodrissa pesada',
      'El furgó de salvament'
    ],
    correctIndex: 3,
    explanation: 'El furgó de salvament varis (FSV) té assignada la funció de salvaments i suport a serveis d\'apuntalament.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P28] Classifiqueu segons la seva reacció al foc 60 palets de taulons de fusta i 200 planxes de poliestirè expandit (porexpan):',
    options: [
      'Fusta inflamable i poliestirè inflamable',
      'Fusta combustible i poliestirè inflamable',
      'Fusta inflamable i poliestirè molt inflamable',
      'Fusta combustible i poliestirè molt inflamable'
    ],
    correctIndex: 3,
    explanation: 'La fusta és un material combustible; el poliestirè expandit (porexpan) és un material molt inflamable.'
  },
  {
    topic: 34,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P29] Abans d\'iniciar el rescat d\'una persona aïllada en una riera desbordada amb maniobra combinada, quina afirmació és FALSA?',
    options: [
      'Està indicada quan el rescatador pot ser arrossegat o perdre flotabilitat',
      'Està indicada quan cal evitar que el rescatador s\'exposi al corrent',
      'Està indicada quan l\'escenari és gran, com un riu, un delta o una platja',
      'Està indicada quan el temps de contacte és limitat i cal una recuperació ràpida'
    ],
    correctIndex: 1,
    explanation: 'En la maniobra combinada el rescatador sí que s\'exposa al corrent entrant a l\'aigua (ligat al sistema desembragable o línia), a diferència del llançament de bossa des de la riba.'
  },
  {
    topic: 23,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P30] Entre els components que formen el sistema de columna seca d\'un edifici, de quin tipus han de ser les vàlvules de seccionament?',
    options: [
      'De comporta, accionades amb volant',
      'De papallona, accionades amb reductor',
      'De bola, accionades amb una palanca incorporada',
      'De pistó, accionades amb pom'
    ],
    correctIndex: 2,
    explanation: 'Les vàlvules de seccionament de la columna seca han de ser de tipus bola amb palanca incorporada.'
  },
  {
    topic: 25,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P31] La rematada d\'un incendi forestal exigeix revisar exhaustivament el perímetre. On cal insistir-hi especialment?',
    options: [
      'Als trams on la flama ha estat més alta',
      'Als punts més exposats al vent i a la insolació',
      'Als herbassars i rostolls secs',
      'Al sotabosc, als racons ombrívols i a les acumulacions de matèria orgànica'
    ],
    correctIndex: 3,
    explanation: 'A la rematada cal insistir en el sotabosc, racons ombrívols i acumulacions de matèria orgànica/soques on queden brases ocultes.'
  },
  {
    topic: 19,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P32] La carretera que porta a un poble de muntanya és coberta de neu. Com ha d\'utilitzar les marxes i el fre motor el conductor d\'una autobomba pesant?',
    options: [
      'Marxes curtes i el fre motor amb precaució',
      'Marxes llargues i el fre motor amb precaució',
      'Marxes curtes i sense recórrer al fre motor',
      'Marxes llargues i sense recórrer al fre motor'
    ],
    correctIndex: 1,
    explanation: 'Sobre neu cal conduir amb suavitat fent servir marxes llargues (per evitar patinar per excés de parell) i el fre motor amb molta precaució.'
  },
  {
    topic: 13,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P33] Per un orifici lateral de 25 cm² situat a 1,25 m del fons d\'un dipòsit obert ple d\'aigua fins a 8,45 m d\'alçada, amb quin cabal surt? (g = 10 m/s²)',
    options: ['1.950 l/min', '750 l/min', '21.600 l/min', '1.800 l/min'],
    correctIndex: 3,
    explanation: 'h sobre l\'orifici = 8,45 - 1,25 = 7,20 m. v = √(2·g·h) = √(2·10·7,2) = √144 = 12 m/s. Q = S·v = 0,0025 · 12 = 0,03 m³/s = 30 L/s = 1.800 l/min.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P34] Sobre els components d\'una motoserra, totes aquestes afirmacions són correctes, EXCEPTE:',
    options: [
      'Una espasa curta dona més precisió en espais reduïts',
      'El sistema antivibració ajuda a prevenir lesions',
      'Els models de bateria s\'engeguen amb un estàrter i un tirador manual',
      'Les mides de la cadena van marcades a l\'espasa'
    ],
    correctIndex: 2,
    explanation: 'L\'estàrter i el tirador manual són propis dels motors de combustió (2 temps), no dels models de bateria.'
  },
  {
    topic: 27,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P35] Durant una fuita de clor en una planta química, on se situen els comandaments intermedis dins el zonatge?',
    options: [
      'A la zona tèbia, amb les àrees de preparació logística',
      'A la zona tèbia, al punt de descontaminació',
      'A la zona freda, al costat del CCA',
      'A la zona freda, amb el personal en reserva'
    ],
    correctIndex: 0,
    explanation: 'Els comandaments intermedis se situen a la zona tèbia juntament amb les àrees de preparació logística i relleu.'
  },
  {
    topic: 7,
    difficulty: 'Difícil',
    question: '[MATAFOCS 2 · P36] Segons el D 12/2023 (modificat per D 16/2026), quin òrgan de la SGO dirigeix l\'elaboració de la documentació sobre els recursos humans i materials operatius de la campanya forestal?',
    options: [
      'La Divisió de Planificació i Gestió',
      'L\'Àrea del Grup d\'Actuació Forestal',
      'La Unitat de Prevenció Operativa',
      'L\'Àrea de Gestió dels Grups Operatius Especials'
    ],
    correctIndex: 0,
    explanation: 'Correspon a la Divisió de Planificació i Gestió dirigir l\'elaboració de la documentació sobre recursos humans i materials de campanya.'
  },
  {
    topic: 23,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P37] Els components d\'un sistema d\'extinció automàtica que descarreguen l\'agent extintor en el recinte o sobre l\'equip, quin nom reben?',
    options: [
      'Les línies de distribució',
      'Els dispositius d\'activació',
      'Els difusors o broquets',
      'Els equips de control'
    ],
    correctIndex: 2,
    explanation: 'Els components de descàrrega s\'anomenen difusors o broquets.'
  },
  {
    topic: 18,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P38] Dels mitjans que el Cos de Bombers té assignats a cada unitat de comandament, quins són propis de la unitat de comandament mitjana (UCM)?',
    options: [
      'Plànols i pissarres d\'intervenció',
      'Ràdio i tauletes tàctiques, amb eines bàsiques de suport a la gestió',
      'Un sistema de pantalles i mapes digitals amb connexió per satèl·lit',
      'Un tauler de control de seguiment d\'ordinadors, amb vídeo i xarxa'
    ],
    correctIndex: 3,
    explanation: 'La UCM incorpora tauler de control de seguiment amb ordinadors, vídeo i xarxa (mentre que la UCL porta plànols/pissarres/tauletes i la UCP satèl·lit).'
  },
  {
    topic: 3,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P39] En quines empreses permet la Llei 31/1995 que l\'empresari assumeixi personalment les funcions de prevenció de riscos?',
    options: [
      'Fins a 6 treballadors, o fins a 25 si tenen un únic centre',
      'En les de fins a 10 treballadors, o fins a 25 si tenen un únic centre de treball',
      'Fins a 10 treballadors, o fins a 30 en un únic centre',
      'Fins a 6 treballadors, o fins a 30 en un únic centre'
    ],
    correctIndex: 1,
    explanation: 'Art. 30.5 LPRL: empreses de fins a 10 treballadors, o fins a 25 treballadors si disposen d\'un únic centre de treball.'
  },
  {
    topic: 10,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P40] Expressada en molècules, a què equival una quantitat de 3 mol de diòxid de carboni?',
    options: [
      '2,007 · 10^23 molècules',
      '1,807 · 10^24 molècules',
      '3,613 · 10^24 molècules',
      '5,420 · 10^24 molècules'
    ],
    correctIndex: 1,
    explanation: '3 mol × 6,022 · 10²³ = 1,8066 · 10²⁴ molècules.'
  },
  {
    topic: 31,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P41] L\'aproximació a peu fins a un excursionista ferit en un circ d\'alta muntanya durarà diverses hores. Per què és clau que l\'accés sigui eficient?',
    options: [
      'Per evitar el desgast prematur de l\'equip i no comprometre l\'evacuació',
      'Per reduir el material que cal carregar',
      'Per deixar la valoració de riscos per al final',
      'Per destinar efectius sobrants a una altra intervenció'
    ],
    correctIndex: 0,
    explanation: 'Dosificar l\'esforç en l\'aproximació evita l\'esgotament prematur i garanteix capacitat per executar l\'evacuació posterior.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P42] Amb quin nom es coneix una de les peces ceràmiques lleugeres que es fan servir per aixecar envans?',
    options: [
      'El maó massís',
      'El maó calat',
      'La teula ceràmica',
      'El maó encadellat'
    ],
    correctIndex: 3,
    explanation: 'El maó encadellat (totxo buit amb encadellat lateral) és la peça ceràmica lleugera típica per aixecar envans.'
  },
  {
    topic: 20,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P43] Pel que fa als riscos dels quals protegeixen les peces principals de l\'EPI d\'intervenció dels bombers, quina afirmació NO és correcta?',
    options: [
      'El casc protegeix el cap i la cara del fum i substàncies corrosives',
      'El calçat protegeix alhora de riscos tèrmics, mecànics, químics i elèctrics',
      'El guant pesant ofereix resistència a rascades, perforació i combustió',
      'El vestit d\'intervenció està pensat per protegir de la calor radiada, de la flama i de la calor per contacte prolongat'
    ],
    correctIndex: 3,
    explanation: 'El vestit d\'intervenció protegeix de calor radiada, flames breus i contacte puntual, però NO està pensat per a calor per contacte prolongat.'
  },
  {
    topic: 26,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P44] L\'avaluació de riscos d\'un incendi de vehicle, quan comença i quins factors hi pesen d\'entrada?',
    options: [
      'En arribar al lloc, amb la identificació ràpida del vehicle i entorn',
      'En rebre l\'avís, amb la ubicació del vehicle i la presència de càrrega',
      'En rebre l\'avís, amb la identificació ràpida del vehicle',
      'En arribar al lloc, amb la ubicació i càrrega'
    ],
    correctIndex: 1,
    explanation: 'L\'avaluació comença ja en rebre l\'avís (ubicació: túnel/garatge/via ràpida i possible presència de càrrega o passatgers).'
  },
  {
    topic: 10,
    difficulty: 'Difícil',
    question: '[MATAFOCS 2 · P45] Quan en un taller hi ha una fuita d\'acetona i una altra de gasolina, quina densitat relativa a l\'aire tenen aproximadament els vapors de l\'una i de l\'altra?',
    options: [
      'Acetona ~0,55, gasolina ~1,55',
      'Acetona ~2,0, gasolina ~1,55',
      'Els d\'acetona, uns 2,0, i els de gasolina, entre 3 i 4',
      'Acetona ~0,55, gasolina entre 3 i 4'
    ],
    correctIndex: 2,
    explanation: 'Tots dos vapors són més densos que l\'aire (>1): acetona ≈ 2,0 (M=58 / 29 = 2,0) i gasolina entre 3 i 4.'
  },
  {
    topic: 34,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P46] S\'ha construït un polígon industrial dins de la zona inundable d\'un riu, amb grans superfícies d\'asfalt i formigó. De quina manera agreuja una inundació?',
    options: [
      'Elimina espais de desbordament natural del riu i redueix el temps de resposta del drenatge',
      'Satura el sòl de l\'entorn',
      'Bloqueja el desguàs cap al mar',
      'Redueix la capacitat de desguàs per sediments'
    ],
    correctIndex: 0,
    explanation: 'La impermeabilització i ocupació de planes d\'inundació elimina espais naturals de laminació i accelera l\'escorrentia reduint el temps de concentració.'
  },
  {
    topic: 7,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P47] Segons el Decret 276/2016, mitjançant quin instrument s\'organitza el desenvolupament de les funcions i les posicions de l\'estructura del sistema de comandament?',
    options: [
      'Una instrucció del director general de PEIS',
      'Una circular del director general de Prevenció, Extinció d\'Incendis i Salvaments',
      'Una circular del subdirector general operatiu',
      'Una instrucció del subdirector general operatiu'
    ],
    correctIndex: 1,
    explanation: 'D 276/2016: es desenvolupa mitjançant una circular del director general de PEIS.'
  },
  {
    topic: 28,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P48] Dins de l\'assistència sanitària que presta el Cos de Bombers, el suport a una evacuació prolongada en terreny hostil en quin tipus s\'inscriu i a qui correspon?',
    options: [
      'Assistència en context de rescat — dotació que ha fet l\'extracció',
      'Assistència especialitzada — dotació que ha fet l\'extracció',
      'A l\'assistència especialitzada, a càrrec del personal del Grup d\'Emergències Mèdiques',
      'Assistència en context de rescat — GEM'
    ],
    correctIndex: 2,
    explanation: 'Les evacuacions prolongades en terreny hostil requereixen assistència sanitària especialitzada (medicalitzada) a càrrec del GEM.'
  },
  {
    topic: 11,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P49] Dos receptors resistius estan connectats en paral·lel a 60 V. Un és de 20 Ω i l\'amperímetre total marca 8 A. De quina resistència és l\'altre receptor?',
    options: ['7,5 Ω', '33,3 Ω', '12 Ω', '5,45 Ω'],
    correctIndex: 2,
    explanation: 'I1 = 60 / 20 = 3 A. Llavors I2 = 8 - 3 = 5 A. R2 = 60 / 5 = 12 Ω.'
  },
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P50] Durant una apagada general es queden sense xarxa tres edificis: autoconsum sense acumulació, autoconsum amb bateries i grup electrogen fix. Com queda cadascun?',
    options: [
      'Sense subministrament perquè l\'inversor s\'atura, amb les càrregues essencials en marxa i les altres desconnectades, i amb risc que el grup arrenqui sol',
      'Alimentada per les plaques mentre hi hagi llum...',
      'Alimentada per les plaques i amb totes les càrregues...',
      'Sense subministrament i sense risc que arrenqui sol'
    ],
    correctIndex: 0,
    explanation: 'On-grid sense bateries: protecció anti-illa atura l\'inversor (però DC amb llum segueix en tensió); híbrid amb bateries: manté càrregues essencials; grup electrogen: risc d\'arrencada automàtica.'
  },
  {
    topic: 2,
    difficulty: 'Difícil',
    question: '[MATAFOCS 2 · P51] Segons la Llei 8/2006 de conciliació, quina durada pot tenir l\'excedència voluntària per al manteniment de la convivència?',
    options: [
      'Mínim 2 anys i màxim 5 anys',
      'Mínim 2 anys i màxim 10 anys',
      'Un mínim de dos anys i un màxim de quinze anys',
      'Mínim 2 anys i màxim 3 anys'
    ],
    correctIndex: 2,
    explanation: 'Art. 24 Llei 8/2006: l\'excedència voluntària per manteniment de la convivència té una durada mínima de 2 anys i màxima de 15 anys.'
  },
  {
    topic: 18,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P52] Els condicionants geogràfics i el tipus de terreny es valoren per assignar vehicles a una emergència. Amb quins factors d\'assignació es relacionen?',
    options: [
      'Condicionants geogràfics amb accés; tipus de terreny amb tipologia del risc',
      'Els condicionants geogràfics, amb l\'accés al lloc; el tipus de terreny, amb l\'accés al lloc',
      'Tots dos amb la tipologia del risc',
      'Condicionants amb tipologia del risc; terreny amb accés'
    ],
    correctIndex: 1,
    explanation: 'Tant els condicionants geogràfics (distància, orografia, amplada) com el tipus de terreny (asfalt, pista, fang) determinen l\'accés al lloc.'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P53] Si el desmunt lateral de sostre d\'un turisme en bolcada lateral es fa amb serra de sabre, per on es talla?',
    options: [
      'Horitzontalment per damunt del travesser longitudinal del sostre',
      'Horitzontalment per sota del travesser longitudinal del sostre',
      'Verticalment per la base dels muntants superiors',
      'Verticalment pel centre del sostre'
    ],
    correctIndex: 1,
    explanation: 'Per fer el desmunt lateral amb serra de sabre es talla horitzontalment per sota del travesser longitudinal del sostre (mantenint la rigidesa del marc).'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P54] En el triatge START s\'etiqueta de color verd un nen petit que plora i camina pel seu peu, però té una cremada parcial a la cara. Quina mesura completa la classificació?',
    options: [
      'Un trasllat prioritari abans que les grogues',
      'Una revaloració immediata amb triatge avançat abans de moure\'l',
      'Una espera al punt de triatge fins que el valori el metge',
      'Un seguiment mèdic i, més endavant, la valoració de la cremada'
    ],
    correctIndex: 3,
    explanation: 'Com que camina pel seu peu és Verd, però les lesions facials/cremades requereixen seguiment mèdic i valoració posterior.'
  },
  {
    topic: 14,
    difficulty: 'Difícil',
    question: '[MATAFOCS 2 · P55] Fins a quina distància, mesurada sobre un full imprès de la Cartografia Operativa d\'Emergències (COE 1:25.000), poden quedar separats dos sobreamples consecutius d\'un camí secundari?',
    options: ['0,3 cm', '6 cm', '0,4 cm', '0,6 cm'],
    correctIndex: 3,
    explanation: 'Els sobreamples en camins secundaris han d\'estar separats com a màxim uns 150 m reals → 150 m / 25.000 = 0,006 m = 0,6 cm sobre el mapa.'
  },
  {
    topic: 27,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P56] Els sacs d\'un producte sòlid perillós s\'han esquinçat i escampat per la calçada. És útil contenir-lo amb barreres i dics de sorra?',
    options: [
      'Sí, perquè és útil tant en líquids com en sòlids',
      'No, perquè la contenció i la reconducció són maniobres pròpies dels vessaments líquids',
      'No, perquè s\'ha de recollir amb material absorbent',
      'Sí, només si és soluble en aigua'
    ],
    correctIndex: 0,
    explanation: 'Segons la plantilla del model A: sí, per evitar la dispersió o arribada a embornals/cursos d\'aigua (tot i que en sòlids s\'acostuma a cobrir/recollir en sec).'
  },
  {
    topic: 21,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P57] La classificació dels riscos que fa servir Protecció Civil (naturals, tecnològics, socials/antròpics) situa en una mateixa categoria quina parella?',
    options: [
      'Accident de trànsit col·lectiu i incendi en transport de MMPP',
      'Onada de calor i emergència associada a la pobresa',
      'Un accident de trànsit col·lectiu i una emergència associada a la pobresa',
      'Incendi en transport de MMPP i onada de calor'
    ],
    correctIndex: 2,
    explanation: 'Segons la plantilla del model (socials/antròpics vs tecnològics/naturals): accident de trànsit col·lectiu i emergència associada a la pobresa.'
  },
  {
    topic: 30,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P58] Dels riscos específics d\'una estructura col·lapsada, quins dos poden derivar en electrocució?',
    options: [
      'El risc elèctric i el de fuites d\'aigua',
      'El risc elèctric i el de col·lapse secundari',
      'El risc elèctric i el d\'incendis latents',
      'El risc elèctric i el d\'atmosferes tòxiques'
    ],
    correctIndex: 0,
    explanation: 'El risc elèctric directe i la presència de fuites d\'aigua en contacte amb instal·lacions en tensió poden derivar en electrocució.'
  },
  {
    topic: 16,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P59] Les fotografies d\'un incendi d\'habitatge s\'usaran per a continguts formatius de Bombers. Què cal fer per preservar la privacitat?',
    options: [
      'Pixelar elements privats i evitar plànols de detall',
      'Pixelar qualsevol persona i evitar plànols de detall',
      'Pixelar elements privats i evitar plànols generals',
      'Pixelar-hi qualsevol persona o element que identifiqui els afectats i evitar-hi els plànols generals de l\'interior de l\'habitatge'
    ],
    correctIndex: 3,
    explanation: 'Cal pixelar persones o elements identificatius i evitar mostrar plànols generals que permetin reconèixer la distribució íntima de la llar.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P60] Pel que fa als agents extintors gasosos, totes aquestes afirmacions són certes, EXCEPTE:',
    options: [
      'El CO₂ és més dens que l\'aire i s\'emmagatzema a alta pressió',
      'Els halons recuperats només es permeten en usos crítics',
      'El CO₂ actua per sufocació i secundàriament per refredament',
      'Els substituts dels halons extingeixen amb més eficàcia que els halons'
    ],
    correctIndex: 3,
    explanation: 'Els substituts dels halons (HFC, gasos inerts) tenen menor eficàcia extintora que els halons originals (es van substituir per protegir la capa d\'ozó).'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P61] Amb les botes d\'intervenció de cuir dels bombers, quina pauta de manteniment cal seguir després de cada servei?',
    options: [
      'Guardar-les dins d\'una bossa estanca',
      'Rentar-les a màquina amb aigua calenta i assecar al sol',
      'Netejar-les, assecar-les lluny de fonts de calor directa i revisar-ne la sola, la puntera i les costures',
      'Assecar-les a prop d\'una font de calor'
    ],
    correctIndex: 2,
    explanation: 'Netejar-les, assecar-les lluny de fonts de calor directa (per no esquerdar el cuir) i revisar-ne sola, puntera i costures.'
  },
  {
    topic: 4,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P62] Amb relació als plans d\'igualtat que la Llei 17/2015 exigeix per al personal de la Generalitat, quina afirmació és correcta?',
    options: [
      'Avaluació quadriennal, integrats al Pla estratègic',
      'Avaluació biennal, integrats al Pla estratègic',
      'La seva avaluació ha de ser quadriennal, i formen part, com a annex, del conveni col·lectiu o del pacte de condicions',
      'Avaluació biennal, annex del conveni'
    ],
    correctIndex: 2,
    explanation: 'Llei 17/2015: els plans d\'igualtat de la Generalitat s\'avaluen cada 4 anys (quadriennal) i formen part com a annex del conveni o pacte de condicions.'
  },
  {
    topic: 24,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P63] El cap d\'intervenció d\'un incendi en un bloc de pisos comença a organitzar l\'AGO. De quina parella d\'aspectes depèn, en gran mesura, l\'èxit de la intervenció?',
    options: [
      'La ubicació inicial dels vehicles i l\'organització de la zona tèbia',
      'El nombre de vehicles mobilitzats i zona tèbia',
      'Ubicació inicial dels vehicles i zona calenta',
      'Nombre de vehicles i zona calenta'
    ],
    correctIndex: 0,
    explanation: 'La ubicació inicial dels vehicles (sense bloquejar accessos/autoescala) i l\'organització de la zona tèbia (logística, relleu, comandament) condicionen l\'èxit.'
  },
  {
    topic: 13,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P64] Prenent g = 10 m/s² i ρ_aigua = 1.000 kg/m³, quina força ha de fer una grua per sostenir un bloc de 1.500 kg i 0,6 m³ quan en té submergides dues terceres parts?',
    options: ['13.000 N', '11.000 N', '15.000 N', '14.600 N'],
    correctIndex: 1,
    explanation: 'Pes = 1.500·10 = 15.000 N. Volum submergit = (2/3)·0,6 = 0,4 m³ → Empenta = 1.000·10·0,4 = 4.000 N. Força grua = 15.000 - 4.000 = 11.000 N.'
  },
  {
    topic: 7,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P65] Quant a les dades de les actuacions operatives que permeten confeccionar el comunicat d\'actuació, quina funció atribueix al sotscap territorial el Decret 276/2016?',
    options: [
      'Supervisar-ne la recollida',
      'Fer-ne directament la recollida',
      'Fer el seguiment de la recollida',
      'Garantir-ne la recollida'
    ],
    correctIndex: 3,
    explanation: 'El Decret 276/2016 atribueix al sotscap territorial la funció de garantir la recollida de les dades operatives del comunicat.'
  },
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P66] Un arbre ha caigut damunt d\'un vianant atrapat sota el brancam i la dotació desbranca amb motoserra per arribar-hi. Amb quina pauta ha de treballar?',
    options: [
      'Començant per les branques recolzades a terra, retirant-les de seguida',
      'Començant per les branques no recolzades a terra, i retirant-les sense esperar que s\'acabi de tallar',
      'Començant per les recolzades, sense retirar-les',
      'Començant per les no recolzades, sense retirar-les'
    ],
    correctIndex: 1,
    explanation: 'Com que hi ha una persona atrapada, es comença per les branques no recolzades a terra (sense tensió de suport) i es retiren immediatament per alliberar la víctima.'
  },
  {
    topic: 11,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P67] A una presa de 230 V s\'hi connecta una estufa de 18 Ω mitjançant una allargadora els dos conductors de la qual tenen 2,5 Ω cadascun. Amb quina tensió treballa l\'estufa?',
    options: ['202 V', '166 V', '180 V', '230 V'],
    correctIndex: 2,
    explanation: 'R_total = 18 + 2,5 + 2,5 = 23 Ω. I = 230 / 23 = 10 A. V_estufa = I · R_estufa = 10 · 18 = 180 V.'
  },
  {
    topic: 16,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 2 · P68] Referent al rescat de persones atrapades en un ascensor electromecànic d\'adherència, quina afirmació és FALSA?',
    options: [
      'La maniobra amb el volant es fa coordinant els efectius de la cambra de màquines amb els que vigilen el fossat',
      'Abans de la maniobra convé comprovar que fins al fossat no hi hagi obstacles o olis',
      'Si es talla el subministrament, el fre del motor bloqueja la cabina i s\'ha de desbloquejar a mà',
      'Tallada la tensió, l\'accés a l\'armari de comandament es bloqueja i se senyalitza'
    ],
    correctIndex: 0,
    explanation: 'La coordinació es fa entre els efectius de la cambra de màquines i els que vigilen la cabina/portes de planta (no el fossat).'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P69] Evitar encallar el vehicle és una recomanació de conducció per camins forestals. Quin efecte sobre la intervenció la justifica principalment?',
    options: [
      'Que la dotació hagi de completar l\'aproximació a peu',
      'Que el vehicle encallat bloquegi el pas de la resta de dotacions',
      'Que calgui destinar una segona dotació a recuperar-lo',
      'Que el vehicle quedi fora de servei'
    ],
    correctIndex: 1,
    explanation: 'En camins forestals estrets, un vehicle encallat bloqueja completament el pas i l\'evacuació de la resta de dotacions.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 2 · P70] Fins a aturar-se, un turisme que frena de manera uniforme triga 4 s i recorre 60 m. A quina velocitat circulava, en km/h, quan va començar a frenar?',
    options: ['108 km/h', '30 km/h', '54 km/h', '15 km/h'],
    correctIndex: 0,
    explanation: 'Velocitat mitjana = 60 / 4 = 15 m/s. Com vf = 0, vi = 2 · 15 = 30 m/s = 30 · 3,6 = 108 km/h.'
  }
];
