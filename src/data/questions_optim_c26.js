/**
 * Simulacre Òptim Acadèmia MODEL C'26 (19/10/26) — 77 preguntes (70 + 7 reserva).
 */
export const QUESTIONS_OPTIM_C26 = [
  {
    topic: 24,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P1] En què consisteix la ventilació per pressió negativa (VPN) en un incendi estructural?',
    options: [
      'A introduir aire exterior al recinte per augmentar-ne la pressió i desplaçar els fums cap a una sortida.',
      'A refredar els gasos de l\'incendi mitjançant aigua polvoritzada abans d\'obrir una via de sortida.',
      'A impedir l\'entrada d\'aire al recinte per reduir l\'aportació d\'oxigen i limitar la propagació del foc.',
      'A extreure els fums de l\'interior del recinte per crear un diferencial de pressions que n\'afavoreixi l\'evacuació.'
    ],
    correctIndex: 3,
    explanation: 'La VPN extreu el fum des de l\'obertura de sortida creant una depressió interior que arrossega els gasos cap a l\'exterior.'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P2] En la valoració de la biomecànica d\'un accident de trànsit, el desplaçament del vehicle des del punt on s\'ha produït l\'impacte pot ser un indicador d\'impacte d\'alta energia. A partir de quina distància es considera aquest criteri?',
    options: [
      'Més de 10 metres.',
      'Més de 7 metres.',
      'Més de 5 metres.',
      'Més de 6 metres.'
    ],
    correctIndex: 3,
    explanation: 'Segons els criteris de biomecànica en accidents de trànsit, un desplaçament del vehicle superior a 6 metres des del punt d\'impacte indica alta energia.'
  },
  {
    topic: 8,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P3] Quina diferència hi ha entre el mecanisme d\'extinció del CO₂ i el dels gasos inerts com el nitrogen o l\'argó?',
    options: [
      'El CO₂ actua exclusivament per sufocació, mentre que els gasos inerts també actuen per refredament.',
      'El CO₂ actua principalment per inhibició química, mentre que els gasos inerts actuen per sufocació i refredament.',
      'El CO₂ i els gasos inerts actuen principalment per inhibició química de la reacció en cadena.',
      'El CO₂ actua principalment per sufocació i secundàriament per refredament, mentre que els gasos inerts actuen exclusivament per sufocació.'
    ],
    correctIndex: 3,
    explanation: 'El CO₂ s\'expandeix molt fred (efecte secundari de refredament) a més de desplaçar l\'O₂, mentre que el nitrogen o l\'argó actuen únicament per sufocació.'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P4] En relació amb el funcionament de l\'equip de respiració autònoma (ERA), quina afirmació és correcta?',
    options: [
      'El manoreductor indica directament al bomber la pressió restant de l\'ampolla.',
      'El regulador de pressió subministra aire de manera contínua, independentment de si el bomber inspira o no.',
      'El manòmetre redueix la pressió de l\'aire de l\'ampolla fins a una pressió segura de treball.',
      'El regulador de pressió subministra aire a demanda quan el bomber inspira.'
    ],
    correctIndex: 3,
    explanation: 'El pulmoautomàtic o regulador de pressió positiva subministra aire a demanda només quan el bomber inspira.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P5] En un circuit elèctric, quan el corrent travessa un receptor o una càrrega, es produeix una variació del potencial elèctric entre l\'entrada i la sortida del component. Què succeeix amb la tensió després de travessar-lo?',
    options: [
      'Es manté constant, independentment del tipus de receptor.',
      'Augmenta, ja que es produeix una pujada de tensió a través del component.',
      'Disminueix, ja que es produeix una caiguda de tensió a través del component.',
      'S\'anul·la completament en sortir del receptor.'
    ],
    correctIndex: 2,
    explanation: 'En travessar un receptor amb resistència, es produeix una caiguda de tensió (V = I · R) i el potencial disminueix.'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P6] En un incident amb múltiples víctimes (IMV), quin criteri determina l\'activació del protocol APCAT en la valoració inicial de l\'escenari?',
    options: [
      'S\'activa quan es percep una desproporció clara entre les víctimes i els mitjans disponibles, ja que el criteri d\'activació és operatiu i no estrictament matemàtic.',
      'S\'activa quan coincideixen simultàniament 6 o més víctimes greus o mortals i 10 o més víctimes que requereixen trasllat hospitalari.',
      'S\'activa exclusivament quan hi ha 6 o més víctimes greus o mortals, independentment dels mitjans disponibles.',
      'S\'activa exclusivament quan hi ha 10 o més víctimes que requereixen trasllat hospitalari, encara que els recursos presents siguin suficients.'
    ],
    correctIndex: 0,
    explanation: 'L\'activació del protocol d\'IMV/APCAT es basa en un criteri operatiu: la desproporció entre les necessitats de les víctimes i els mitjans disponibles.'
  },
  {
    topic: 13,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P7] En l\'estudi de les propietats dels fluids, la densitat relativa permet comparar la densitat d\'una substància amb la de l\'aigua i determinar, entre altres aspectes, si tendirà a surar o a enfonsar-se. Si una substància presenta una densitat de 800 kg/m³, quina seria la seva densitat relativa?',
    options: ['1,25.', '0,8.', '8.', '0,08.'],
    correctIndex: 1,
    explanation: 'Densitat relativa = 800 kg/m³ / 1.000 kg/m³ = 0,8.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P8] Un vehicle vist des de dalt que efectua un moviment de rotació cap a dreta o esquerra al voltant d\'un eix vertical imaginari que passa pel centre del vehicle, sense que aquest moviment correspongui a un simple desplaçament longitudinal. Quin nom rep aquest moviment?',
    options: ['Capcineig.', 'Guinyada.', 'Giravolt.', 'Balanceig.'],
    correctIndex: 1,
    explanation: 'La guinyada és la rotació del vehicle al voltant del seu eix vertical.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P9] En un edifici construït amb sistema tradicional, les càrregues principals es transmeten al terreny de manera contínua al llarg dels murs de càrrega. Tenint en compte aquesta distribució lineal dels esforços, quin tipus de fonamentació resulta més coherent per donar suport a aquests elements?',
    options: [
      'Sabates aïllades, situades únicament sota punts concrets de l\'estructura.',
      'Engraellat, disposat de manera que les façanes recolzin íntegrament sobre el perímetre del mateix.',
      'Sabates corregudes, disposades de manera contínua sota els murs de càrrega.',
      'Fonaments puntuals independents, separats entre si i sense continuïtat sota el mur.'
    ],
    correctIndex: 2,
    explanation: 'Les sabates corregudes (o contínues) recullen les càrregues lineals dels murs de càrrega al llarg de tota la seva longitud.'
  },
  {
    topic: 24,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P10] En què consisteix la tècnica d\'avanç i seguretat interior en una intervenció en un incendi estructural?',
    options: [
      'A avançar cap a la zona crítica amb moviments separats entre els membres del binomi, ampliant la zona explorada i mantenint obertes diverses vies de retirada.',
      'A avançar cap a la zona crítica amb moviments curts i alterns, controlant principalment el focus de l\'incendi i reduint al mínim les aturades.',
      'A avançar cap a la zona crítica amb moviments curts i sincronitzats, controlant la temperatura i la visibilitat i mantenint una línia de retirada clara.',
      'A avançar cap a la zona crítica amb moviments ràpids i continus, prioritzant la velocitat de progressió i mantenint l\'aplicació constant d\'aigua.'
    ],
    correctIndex: 2,
    explanation: 'El binomi avança amb moviments curts i sincronitzats, controlant la temperatura (polsacions/comprovació), la visibilitat i mantenint la línia de retirada.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P11] A quin grup d\'animals fa referència el terme «súids»?',
    options: ['Als llangardaixos.', 'A les serps.', 'Als porcs.', 'A les tortugues.'],
    correctIndex: 2,
    explanation: 'Els súids (Suidae) són la família de mamífers a la qual pertanyen els porcs i senglars.'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P12] En la composició d\'un tren, els bogis formen part del sistema de rodament i se situen sota els cotxes o vagons. Què és concretament un bogi?',
    options: [
      'Una estructura metàl·lica que uneix dos vagons i permet transmetre esforços entre ells.',
      'Un conjunt mecànic que integra els sistemes de frenada i suspensió del vehicle ferroviari.',
      'Un bastidor longitudinal situat sota el vagó que suporta el pes de tota la composició.',
      'Una estructura metàl·lica situada sota el vehicle que el suporta i li permet girar.'
    ],
    correctIndex: 3,
    explanation: 'El bogi és l\'estructura giratòria amb dos o més eixos situada sota el vagó que suporta el vehicle i li permet inscriure\'s als revolts de la via.'
  },
  {
    topic: 24,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P13] En un incendi estructural, la recerca i el salvament de víctimes són actuacions prioritàries. Quin és l\'ordre de prioritat establert per efectuar les maniobres de recerca segons la probabilitat de supervivència?',
    options: [
      'Alta probabilitat, mitjana probabilitat, baixa probabilitat i mínima probabilitat.',
      'Baixa probabilitat, mitjana probabilitat, mínima probabilitat i alta probabilitat.',
      'Mínima probabilitat, baixa probabilitat, mitjana probabilitat i alta probabilitat.',
      'Baixa probabilitat, mitjana probabilitat, alta probabilitat i mínima probabilitat.'
    ],
    correctIndex: 0,
    explanation: 'Es prioritzen primer les zones amb alta probabilitat de supervivència, seguides de mitjana, baixa i mínima probabilitat.'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P14] En un rescat en accident de trànsit en què es tallen els muntants posteriors i centrals i es plega el sostre cap endavant sobre el parabrisa, quina maniobra s\'hi representa?',
    options: [
      'Desmunt parcial anterior de sostre.',
      'Desmunt total de sostre.',
      'Desmunt parcial posterior de sostre.',
      'Desmunt lateral de sostre.'
    ],
    correctIndex: 2,
    explanation: 'En tallar els pilars C i B i abatre el sostre cap endavant (fent frontissa als pilars A), s\'obre la part del darrere: és un desmunt parcial posterior de sostre.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P15] En una maniobra es forma un triangle amb tres costats de 84 m, 112 m i 140 m. Quin valor té l\'angle oposat al costat de 140 m?',
    options: ['90°.', '60°.', '0°.', '180°.'],
    correctIndex: 0,
    explanation: 'És un triangle rectangle (triple 3-4-5 multiplicat per 28): 84² + 112² = 7.056 + 12.544 = 19.600 = 140². L\'angle oposat a la hipotenusa és 90°.'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P16] En relació amb les bones pràctiques de zonatge en una intervenció amb risc contaminant, quina de les afirmacions següents és INCORRECTA?',
    options: [
      'Les persones, els equips i els objectes no poden passar directament de la zona calenta a la freda sense descontaminació.',
      'El zonatge s\'ha de revisar i adaptar si varien les condicions ambientals, apareixen nous focus o canvia la dispersió.',
      'Tot intervinent ha de tenir clar el mapa de zonatge abans d\'iniciar maniobres.',
      'El punt de descontaminació (ABD) s\'ha de situar fora de la zona calenta, evitant que formi part del pas de sortida cap a la zona tèbia.'
    ],
    correctIndex: 3,
    explanation: 'Incorrecta: l\'ABD ha de formar part obligatòriament del pas de sortida entre la zona calenta i la zona tèbia per garantir que ningú surti sense descontaminar.'
  },
  {
    topic: 16,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P17] En una intervenció amb risc elèctric, la perxa de salvament dielèctrica permet actuar a distància. Quina és la seva funció principal?',
    options: [
      'Tallar directament el conductor per interrompre el pas del corrent elèctric.',
      'Mesurar la tensió del conductor abans d\'iniciar qualsevol actuació de rescat.',
      'Enretirar una persona de la zona de risc o apartar-ne un cable en tensió.',
      'Apartar cables en tensió, sense poder actuar directament sobre la víctima'
    ],
    correctIndex: 2,
    explanation: 'La perxa dielèctrica de salvament serveix tant per separar un cable en tensió com per estirar i enretirar una víctima electrocutada de manera segura.'
  },
  {
    topic: 16,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P18] En un ascensor hidràulic, el desplaçament de la cabina es produeix mitjançant la pressió exercida sobre un pistó, amb diversos elements hidràulics associats al sistema. Quin dels elements següents NO forma part necessàriament d\'aquest sistema?',
    options: [
      'El contrapès.',
      'El bloc d\'electrovàlvules.',
      'El dipòsit d\'oli.',
      'El pistó.'
    ],
    correctIndex: 0,
    explanation: 'Els ascensors hidràulics convencionals no necessiten contrapès (a diferència dels elèctrics d\'adherència).'
  },
  {
    topic: 29,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P19] En un incident amb múltiples víctimes, un equip aplica el mètode START a una víctima que no camina i inicialment no respira. Després d\'obrir-li la via aèria, comença a respirar espontàniament. Quina classificació li correspon?',
    options: [
      'Groga, prioritat 2.',
      'Negra, prioritat 4.',
      'Verda, prioritat 3.',
      'Vermella, prioritat 1.'
    ],
    correctIndex: 3,
    explanation: 'Al triatge START, si una víctima no respira inicialment però recupera la respiració en obrir la via aèria, es classifica com a Vermella (prioritat 1).'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P20] En un recipient rígid i tancat que conté una determinada massa de gas, es modifica la temperatura sense que canviï el volum ocupat pel gas. D\'acord amb la llei de Gay-Lussac, quina relació s\'estableix entre les magnituds implicades?',
    options: [
      'La pressió és inversament proporcional a la temperatura absoluta.',
      'La pressió és directament proporcional a la temperatura absoluta.',
      'El volum és directament proporcional a la temperatura absoluta.',
      'La pressió és inversament proporcional al volum del gas.'
    ],
    correctIndex: 1,
    explanation: 'A volum constant (llei de Gay-Lussac), P₁/T₁ = P₂/T₂: la pressió és directament proporcional a la temperatura absoluta (en kelvins).'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P21] En un incident amb múltiples víctimes, el primer cercle de seguretat engloba la zona de risc immediat i mitjà (zona calenta i tèbia). Quin cos controla l\'accés al primer cercle de seguretat?',
    options: [
      'El SEM, com a responsable de determinar quins efectius poden accedir a les zones de risc.',
      'Els Mossos d\'Esquadra, que controlen i restringeixen l\'accés a aquest perímetre.',
      'Els Bombers, que assumeixen el control de l\'accés perquè són els responsables de definir la zona calenta i la zona tèbia.',
      'El Centre de Comandament Avançat, que autoritza directament cada entrada al perímetre.'
    ],
    correctIndex: 1,
    explanation: 'Els cossos policials (Mossos d\'Esquadra) són els encarregats de controlar i restringir l\'accés als perímetres i cercles de seguretat.'
  },
  {
    topic: 26,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P22] En un incendi de contenidor, el tipus de residu condiciona la intensitat de la combustió i els riscos. Quina de les afirmacions següents és INCORRECTA?',
    options: [
      'Els residus orgànics solen cremar amb menys intensitat, però poden generar una gran quantitat de fum.',
      'Els residus de rebuig poden originar una combustió irregular i imprevisible, amb fum dens.',
      'El vidre no és combustible, però pot trencar-se per xoc tèrmic i projectar fragments tallants.',
      'Els envasos presenten una inflamabilitat reduïda i acostumen a generar una càrrega tèrmica baixa.'
    ],
    correctIndex: 3,
    explanation: 'Incorrecta: els contenidors d\'envasos (plàstics, tetrabriks) tenen una inflamabilitat molt elevada i una alta càrrega tèrmica.'
  },
  {
    topic: 6,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P23] Segons la Llei 5/1994, de 4 de maig, de regulació dels serveis de prevenció i extinció d\'incendis i de salvaments de Catalunya, quin tipus de falta constitueix l\'incompliment de l\'obligació de donar compte a la superioritat?',
    options: [
      'No constitueix cap falta disciplinària.',
      'Una falta greu.',
      'Una falta molt greu.',
      'Una falta lleu.'
    ],
    correctIndex: 3,
    explanation: 'L\'incompliment de l\'obligació de donar compte a la superioritat està tipificat com a falta lleu a la Llei 5/1994.'
  },
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P24] En una motoserra, quin element de seguretat es troba a la part superior de l\'empunyadura posterior per evitar acceleracions accidentals?',
    options: [
      'El protector de la mà dreta.',
      'El bloqueig de l\'accelerador.',
      'El fre de cadena.',
      'L\'interruptor de parada On/Off.'
    ],
    correctIndex: 1,
    explanation: 'A la part superior de l\'empunyadura posterior se situa el bloqueig (gallet de seguretat) de l\'accelerador.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P25] En un incendi d\'habitatge, una biga metàl·lica en contacte amb la zona afectada transmet calor cap a altres parts de l\'estructura. Quin mecanisme de transmissió de la calor es produeix?',
    options: ['Convecció.', 'Evaporació.', 'Conducció.', 'Ventilació.'],
    correctIndex: 2,
    explanation: 'La transmissió de calor a través d\'un sòlid (com una biga metàl·lica) sense moviment de matèria és la conducció.'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P26] Quina de les següents és una de les funcions de la posició de Fowler en l\'assistència sanitària?',
    options: [
      'Facilitar la immobilització completa de la columna vertebral.',
      'Evitar qualsevol moviment de la víctima.',
      'Afavorir la circulació cap als òrgans principals situant el cap més avall que els peus.',
      'Afavorir la respiració.'
    ],
    correctIndex: 3,
    explanation: 'La posició de Fowler (semiassegut a 45°) facilita l\'expansió toràcica i afavoreix la respiració.'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P27] Quina de les afirmacions següents descriu correctament l\'EPI lleuger del cos de Bombers:',
    options: [
      'Prioritza la mobilitat i la rapidesa d\'acció, amb protecció davant riscos mecànics moderats i exposicions tèrmiques puntuals.',
      'Està destinat a intervencions amb risc químic, biològic o atmosfèric que exigeixen aïllament complet del bomber.',
      'Prioritza la màxima protecció tèrmica, encara que això redueixi la mobilitat i augmenti l\'estrès tèrmic.',
      'Està dissenyat principalment per a intervencions amb exposició continuada a flames i temperatures elevades.'
    ],
    correctIndex: 0,
    explanation: 'L\'EPI lleuger (forestal/rescat tècnic) prioritza la mobilitat i transpirabilitat, protegint davant riscos mecànics moderats i calor radiant/flama breu.'
  },
  {
    topic: 29,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P28] En relació amb les característiques principals del triatge bàsic START, quina de les afirmacions següents és INCORRECTA?',
    options: [
      'En cas de dubte, la víctima es classifica amb el color de prioritat superior per evitar infravaloracions.',
      'Ha de ser ràpid i funcional, amb un temps màxim recomanat d\'1 minut per víctima.',
      'Durant el triatge només es permet obrir la via aèria i controlar una hemorràgia externa greu com a maniobres salvadores.',
      'En cas de dubte, la víctima es classifica amb el color de prioritat inferior per evitar sobrevalorar-ne la gravetat.'
    ],
    correctIndex: 3,
    explanation: 'Incorrecta: en cas de dubte en el triatge, sempre s\'assigna la categoria de prioritat superior (més greu) per seguretat.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P29] En els sistemes d\'electrònica digital, com ara circuits integrats, microprocessadors i components electrònics d\'ordinadors o televisors, quin tipus de corrent s\'utilitza habitualment per al seu funcionament?',
    options: [
      'Corrent altern d\'alta tensió.',
      'Corrent continu d\'alta tensió.',
      'Corrent altern de baixa tensió.',
      'Corrent continu de baixa tensió.'
    ],
    correctIndex: 3,
    explanation: 'Els circuits electrònics digitals funcionen amb corrent continu (DC) de baixa tensió (habitualment entre 3,3 V i 12 V).'
  },
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P30] En un pati interior, un bomber progressa físicament per l\'estructura utilitzant mans i peus mentre és assegurat amb corda des d\'una planta inferior per accedir a una víctima conscient. A quina maniobra correspon?',
    options: [
      'Maniobra de ràpel del bomber.',
      'Maniobra de progressió tipus escalada.',
      'Maniobra d\'ascens per corda fixa.',
      'Maniobra de progressió amb sistema MGO.'
    ],
    correctIndex: 1,
    explanation: 'Progressar per l\'estructura amb mans i peus mentre s\'és assegurat des de sota és una maniobra de progressió tipus escalada.'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P31] En un incendi de vehicle, la combustió dels materials de l\'habitacle pot generar fums densos amb compostos tòxics. Quina associació entre contaminant i material d\'origen és CORRECTA?',
    options: [
      'El cianur d\'hidrogen procedeix principalment dels plàstics i el clorur d\'hidrogen de les escumes dels seients.',
      'El cianur d\'hidrogen pot procedir de les escumes dels seients i el clorur d\'hidrogen dels plàstics.',
      'El clorur d\'hidrogen procedeix de les escumes dels seients i el monòxid de carboni dels plàstics.',
      'El monòxid de carboni procedeix de les escumes dels seients i el cianur d\'hidrogen dels plàstics.'
    ],
    correctIndex: 1,
    explanation: 'El poliuretà de les escumes dels seients genera cianur d\'hidrogen (HCN) i els plàstics clorats (com el PVC) generen clorur d\'hidrogen (HCl).'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P32] Un sistema de politges per elevar una càrrega consta d\'una politja fixa i una politja mòbil vinculada a la càrrega. Sense fregament, quin avantatge mecànic teòric proporciona?',
    options: ['1:1.', '4:1.', '2:1.', '3:1.'],
    correctIndex: 2,
    explanation: 'Amb una politja mòbil la càrrega queda suspesa de 2 trams de corda, de manera que l\'avantatge mecànic teòric és 2:1.'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P33] En un rombe NFPA 704, el sector blau (risc per a la salut) mostra el número 2. Què indica concretament aquest valor?',
    options: [
      'Que el producte és perillós per a la salut.',
      'Que el producte presenta poc perill per a la salut.',
      'Que el producte és molt perillós per a la salut.',
      'Que el producte pot resultar mortal per a la salut.'
    ],
    correctIndex: 0,
    explanation: 'A l\'escala NFPA 704: 0 = sense perill, 1 = poc perillós, 2 = perillós, 3 = molt perillós, 4 = mortal.'
  },
  {
    topic: 10,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P34] En l\'àmbit de la normativa europea sobre substàncies i mescles químiques, què signifiquen les sigles CLP?',
    options: [
      'Control, limitació i prevenció.',
      'Classificació, legislació i protecció.',
      'Classificació, etiquetatge i envasament.',
      'Classificació, logística i perillositat.'
    ],
    correctIndex: 2,
    explanation: 'CLP correspon a Classification, Labelling and Packaging (Classificació, etiquetatge i envasament).'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P35] Quina característica defineix principalment la conductivitat elèctrica dels semiconductors?',
    options: [
      'És intermèdia i es pot controlar.',
      'És equivalent a la dels conductors metàl·lics.',
      'És molt elevada i pràcticament constant.',
      'És molt baixa i no es pot modificar.'
    ],
    correctIndex: 0,
    explanation: 'Els semiconductors tenen una conductivitat intermèdia entre conductors i aïllants que es pot controlar (per temperatura, dopatge o camp elèctric).'
  },
  {
    topic: 32,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P36] Els vidres de policarbonat s\'utilitzen cada vegada més en alguns vehicles per la seva elevada resistència als impactes. Quina és la principal contrapartida d\'aquest material en una intervenció de rescat?',
    options: [
      'Es fragmenten fàcilment en múltiples trossos petits.',
      'Són difícils de trencar per accedir a l\'habitacle.',
      'Perden ràpidament transparència quan reben un impacte.',
      'Desprenen gasos molt tòxics.'
    ],
    correctIndex: 1,
    explanation: 'El policarbonat és altament resistent als impactes, fet que el fa molt difícil de trencar amb punxons trencavidres convencionals.'
  },
  {
    topic: 1,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P37] Quin dels següents drets NO forma part dels drets fonamentals de la Constitució espanyola?',
    options: [
      'Dret a l\'herència.',
      'Dret d\'associació.',
      'Dret a la vida.',
      'Llibertat ideològica.'
    ],
    correctIndex: 0,
    explanation: 'El dret a la propietat privada i a l\'herència (art. 33 CE) es troba a la Secció 2a del Capítol II, fora dels drets fonamentals i llibertats públiques (Secció 1a, arts. 15-29).'
  },
  {
    topic: 34,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P38] Les maniobres directes de rescat en inundacions, amb contacte directe amb l\'aigua, només s\'han de realitzar si es compleixen determinades condicions de seguretat. Quina de les següents NO és una d\'aquestes condicions?',
    options: [
      'Que el rescatador utilitzi un EPI aquàtic adequat.',
      'Que hi hagi personal de suport a la vora amb capacitat de recuperar el rescatador.',
      'Que el rescatador disposi de formació i entrenament específics.',
      'Que hi hagi dos rescatadors dins l\'aigua actuant de manera simultània.'
    ],
    correctIndex: 3,
    explanation: 'No s\'exigeix que entrin dos rescatadors simultàniament a l\'aigua; el que és obligatori és el suport a la vora amb capacitat de recuperació, EPI aquàtic i formació específica.'
  },
  {
    topic: 14,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P39] En quants fusos es divideix la superfície terrestre en el sistema de coordenades UTM?',
    options: ['20 fusos.', '40 fusos.', '120 fusos.', '60 fusos.'],
    correctIndex: 3,
    explanation: 'El sistema UTM divideix la Terra en 60 fusos horitzontals de 6° de longitud cadascun (60 × 6° = 360°).'
  },
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P40] En una xarxa de clavegueram ventilada, la temperatura de l\'interior del col·lector es manté més estable que la de l\'exterior. Quin efecte té aquesta diferència en el funcionament dels conductes de ventilació?',
    options: [
      'Genera corrents d\'aire que afavoreixen una ventilació contínua del col·lector.',
      'Impedeix que l\'aire es mogui i obliga a renovar-lo amb ventiladors mecànics.',
      'Fa que els gasos es condensin dins del conducte i deixin d\'acumular-se al col·lector.',
      'Redueix la pressió exterior i provoca l\'entrada d\'aigua residual als conductes.'
    ],
    correctIndex: 0,
    explanation: 'El gradient tèrmic entre l\'interior del col·lector i l\'exterior genera tiratge natural i corrents d\'aire que mantenen ventilada la xarxa.'
  },
  {
    topic: 2,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P41] Segons el TREBEP, com han de complir les seves tasques els empleats públics?',
    options: [
      'Seguint models externs.',
      'Amb diligència.',
      'Amb supervisió directa.',
      'Amb flexibilitat i espontaneïtat.'
    ],
    correctIndex: 1,
    explanation: 'L\'article 52 del TREBEP estableix que els empleats públics han d\'acomplir amb diligència les tasques que tinguin assignades.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P42] En relació amb la classificació de la seguretat dels vehicles segons el moment en què actuen els diferents sistemes de protecció, quina de les afirmacions següents és CORRECTA?',
    options: [
      'Els cinturons de seguretat formen part de la seguretat activa.',
      'L\'ABS forma part de la seguretat passiva.',
      'Els sensors de fatiga formen part de la seguretat activa.',
      'Els sensors de fatiga formen part de la seguretat passiva'
    ],
    correctIndex: 2,
    explanation: 'Els sensors de fatiga prevenen l\'accident abans que es produeixi (seguretat activa), mentre que els cinturons són seguretat passiva.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P43] En quines unitats bàsiques del Sistema Internacional s\'expressa la quantitat de moviment?',
    options: ['kg·m²·s⁻¹.', 'kg·m·s⁻².', 'kg·m²·s⁻².', 'kg·m·s⁻¹.'],
    correctIndex: 3,
    explanation: 'Quantitat de moviment p = m · v, per tant les seves unitats al SI són kg·m·s⁻¹.'
  },
  {
    topic: 5,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P44] D\'acord amb l\'article 6.2 de la Llei 1/1998, de 7 de gener, de política lingüística, a quin organisme correspon l\'autoritat lingüística del català?',
    options: [
      'A l\'Institut d\'Estudis Catalans (IEC).',
      'Al Departament competent en matèria de política lingüística.',
      'A la Secretaria de Política Lingüística.',
      'Al Consell Social de la Llengua Catalana.'
    ],
    correctIndex: 0,
    explanation: 'Segons l\'art. 6.2 de la Llei 1/1998, l\'Institut d\'Estudis Catalans és la institució acadèmica que ostenta l\'autoritat lingüística del català.'
  },
  {
    topic: 32,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P45] La majoria de turismes disposen dels muntants A, B i C, però alguns models incorporen un muntant addicional a la part posterior. En quin tipus de vehicles és especialment habitual trobar també el muntant D?',
    options: [
      'Els vehicles 4x4.',
      'Els quads.',
      'Els vehicles familiars.',
      'Els vehicles descapotables.'
    ],
    correctIndex: 2,
    explanation: 'Els vehicles familiars (ranchera/station wagon), monovolums i SUV llargs solen incorporar el muntant D al final de la carrosseria.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P46] Per sota de quina temperatura els pneumàtics convencionals perden gran part de la seva capacitat d\'adherència?',
    options: ['3 °C.', '5 °C.', '0 °C.', '7 °C.'],
    correctIndex: 3,
    explanation: 'Per sota de 7 °C el compost de cautxú dels pneumàtics convencionals (d\'estiu) s\'endureix i perd adherència.'
  },
  {
    topic: 34,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P47] Segons l\'escala Douglas de l\'estat de la mar, quin interval d\'altura de les onades correspon a una situació de mar desfeta?',
    options: [
      'Entre 0 i 10 cm.',
      'Entre 4 i 6 m.',
      'Entre 6 i 9 m.',
      'Entre 1,25 i 2,5 m.'
    ],
    correctIndex: 1,
    explanation: 'A l\'escala Douglas, el grau 6 (mar brava / mar desfeta) correspon a una altura d\'onades significativa d\'entre 4 i 6 metres.'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P48] En l\'observació del comportament d\'una columna de fum, si aquesta apareix partida o dividida en diferents direccions, quina situació pot indicar aquest comportament?',
    options: [
      'Una atmosfera estable amb vent constant en una única direcció.',
      'Absència de vent i predomini de condicions atmosfèriques completament estables.',
      'Vents canviants o presència d\'inestabilitat atmosfèrica, com una possible tempesta propera.',
      'Una disminució progressiva del vent i una estabilització de l\'atmosfera.'
    ],
    correctIndex: 2,
    explanation: 'Una columna de fum trencada o dividida en direccions diferents indica cisalla de vent, vents canviants o inestabilitat atmosfèrica.'
  },
  {
    topic: 24,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P49] En un incendi en un habitatge han cremat un sofà de poliuretà i altres materials sintètics. Un cop extingides les flames, quin risc associat als productes de la combustió s\'ha de considerar especialment?',
    options: [
      'Poden persistir gasos tòxics com el CO, i la combustió del poliuretà pot haver generat HCN, de manera que cal controlar l\'atmosfera abans de permetre l\'accés.',
      'L\'absència de flama elimina el risc dels gasos tòxics, però es manté el risc tèrmic associat al fum residual.',
      'El CO₂ pot mantenir-se durant hores, perquè s\'uneix a l\'hemoglobina amb més afinitat que l\'oxigen.',
      'El HCN pot continuar generant-se perquè el fum calent transforma el CO₂ acumulat en compostos cianurats.'
    ],
    correctIndex: 0,
    explanation: 'Després d\'extingir les flames persisteixen gasos letals com el CO i el cianur d\'hidrogen (HCN) generat pel poliuretà, per la qual cosa cal mesurar l\'atmosfera.'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P50] En el marc dels mètodes mixtos de triatge, què signifiquen les sigles SALT?',
    options: [
      'Sort, Assist, Lifesaving Interventions, Transfer.',
      'Sort, Assess, Life Support, Treatment/Transport.',
      'Search, Assess, Lifesaving Interventions, Treatment.',
      'Sort, Assess, Lifesaving Interventions, Treatment/Transport.'
    ],
    correctIndex: 3,
    explanation: 'SALT correspon a Sort (ordenar), Assess (valorar), Lifesaving Interventions (intervencions salvadores) i Treatment/Transport.'
  },
  {
    topic: 29,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P51] Quin ordre correspon correctament a les categories del triatge segons el nivell de prioritat assistencial, de més urgent a menys prioritària?',
    options: [
      'Groc – Vermell – Verd – Negre.',
      'Vermell – Groc – Verd – Negre.',
      'Vermell – Verd – Groc – Negre.',
      'Negre – Vermell – Groc – Verd.'
    ],
    correctIndex: 1,
    explanation: 'Prioritat 1: Vermell (immediat); Prioritat 2: Groc (demorable); Prioritat 3: Verd (lleu); Prioritat 4: Negre (mort o irrecuperable).'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P52] Un servei té una durada de 2 hores i 30 minuts. Quants segons representa aquest interval de temps?',
    options: ['9.000 s.', '15.000 s.', '7.200 s.', '9.300 s.'],
    correctIndex: 0,
    explanation: '2,5 hores × 3.600 s/hora = 9.000 segons.'
  },
  {
    topic: 11,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P53] En un encreuament entre una línia elèctrica aèria de transport i una línia elèctrica aèria de distribució, quina disposició correspon habitualment a aquestes dues línies?',
    options: [
      'La línia de distribució passa per sobre de la línia de transport.',
      'La línia de transport passa per sobre de la línia de distribució.',
      'Ambdues línies han de situar-se obligatòriament a la mateixa alçada.',
      'L\'ordre vertical depèn únicament de la tensió nominal de la línia de distribució.'
    ],
    correctIndex: 1,
    explanation: 'En els encreuaments de línies aèries, la línia de major tensió (transport) passa per sobre de la de menor tensió (distribució).'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P54] En la classificació dels tipus d\'atrapament en accidents de mobilitat viària, què diferencia un atrapament físic tipus 1 d\'un atrapament físic tipus 2?',
    options: [
      'En el tipus 1 hi ha atrapament estructural lleu, mentre que en el tipus 2 la víctima pot sortir sense modificar el vehicle.',
      'En el tipus 1 no hi ha atrapament estructural, però les lesions obliguen a crear més espai; en el tipus 2 la víctima està atrapada per l\'estructura del vehicle.',
      'En el tipus 1 cal desplaçar sempre elements del vehicle, mentre que en el tipus 2 només cal evitar mobilitzacions innecessàries.',
      'En el tipus 1 la víctima està atrapada entre la ferralla, mentre que en el tipus 2 les lesions només dificulten la seva mobilització.'
    ],
    correctIndex: 1,
    explanation: 'Tipus 1: atrapament físic/clínic sense deformació que retingui el cos (cal espai per les lesions). Tipus 2: atrapament mecànic per deformació estructural del vehicle.'
  },
  {
    topic: 32,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P55] En la identificació del tipus de combustible d\'un vehicle, com és habitualment la boca de càrrega d\'un vehicle de gasolina en comparació amb la d\'un vehicle dièsel?',
    options: [
      'Més profunda que la d\'un vehicle dièsel.',
      'De la mateixa amplada en tots dos combustibles.',
      'Més estreta que la d\'un vehicle dièsel.',
      'Més ampla que la d\'un vehicle dièsel.'
    ],
    correctIndex: 2,
    explanation: 'La boca de càrrega dels vehicles de gasolina sense plom és més estreta que la dels vehicles dièsel per evitar confusions de sortidor.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P56] Segons el manual d\'intervenció bàsica en estructures col·lapsades (MAN.SVES.000), en el muntatge d\'un sistema d\'apuntalament inclinat, què s\'entén per tornapuntes?',
    options: [
      'És un element horitzontal que uneix diversos puntals i reparteix les càrregues entre els diferents punts de suport.',
      'És un element oblic que fa la funció de puntal inclinat i transmet les càrregues de l\'element afectat cap a un punt de suport resistent.',
      'És un reforç vertical que s\'instal·la paral·lelament al mur per absorbir directament les càrregues de compressió.',
      'És una peça situada exclusivament a la base de l\'apuntalament que evita el lliscament dels puntals sobre el terreny.'
    ],
    correctIndex: 1,
    explanation: 'El tornapuntes és la peça o puntal oblic que transmet l\'empenta o càrrega d\'un mur o element cap a un punt de suport estable a terra.'
  },
  {
    topic: 8,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P57] Disposem de 400 g d\'aigua en estat líquid a 100 °C i volem vaporitzar-la completament mantenint la temperatura constant. Quina quantitat de calor cal aportar?',
    options: ['53,9 kcal.', '539 kcal.', '215,6 kcal.', '21,56 kcal.'],
    correctIndex: 2,
    explanation: 'La calor latent de vaporització de l\'aigua és ~539 cal/g. Q = 400 g × 539 cal/g = 215.600 cal = 215,6 kcal.'
  },
  {
    topic: 3,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P58] D\'acord amb la Llei 31/1995, de 8 de novembre, de prevenció de riscos laborals, s\'entén per equip de protecció individual (EPI):',
    options: [
      'Qualsevol equip destinat a ser portat pel treballador perquè el protegeixi d\'un o diversos riscos que puguin amenaçar la seguretat o la salut en qualsevol àmbit, com també qualsevol complement o accessori destinat a aquesta finalitat.',
      'Qualsevol equip destinat a ser portat o subjectat pel treballador perquè el protegeixi d\'un o de diversos riscos que en puguin amenaçar la seguretat o la salut en el treball, com també qualsevol complement o accessori destinat a aquesta finalitat.',
      'Les característiques especials que ha de tenir el vestuari professional per protegir els treballadors davant de qualsevol risc que pugui amenaçar la seguretat i salut, així com qualsevol accessori destinat a aquesta finalitat.',
      'Qualsevol equip destinat a ser portat o subjectat pel treballador perquè el protegeixi exclusivament d\'un únic risc que en pugui amenaçar la seguretat o la salut en el treball, incloent-hi també els complements o accessoris destinats a aquesta finalitat.'
    ],
    correctIndex: 1,
    explanation: 'L\'art. 4.8 de la LPRL defineix l\'EPI com qualsevol equip destinat a ser portat o subjectat pel treballador per protegir-lo d\'un o diversos riscos en el treball.'
  },
  {
    topic: 11,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P59] En una xarxa de baixa tensió, quan la instal·lació és aèria, quina característica ha de complir generalment el cablejat utilitzat?',
    options: [
      'Ha d\'emprar conductors nus en instal·lacions trifàsiques i cables aïllats únicament en línies monofàsiques.',
      'Ha d\'utilitzar cables aïllats, tot i que es poden admetre cables nus en aplicacions especials degudament justificades.',
      'Ha d\'estar format per conductors nus sempre que la línia disposi de tres fases i neutre.',
      'Ha d\'utilitzar cables aïllats només quan els conductors estiguin ancorats a façanes d\'edificis.'
    ],
    correctIndex: 1,
    explanation: 'Les línies aèries de baixa tensió han d\'utilitzar cables aïllats (trenzats), admetent-se conductors nus només en casos especials justificats.'
  },
  {
    topic: 4,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P60] Segons l\'article 1 de la Llei 17/2015, d\'igualtat efectiva de dones i homes, quina de les següents opcions NO és una finalitat de la llei?',
    options: [
      'Garantir una representació paritària, del 50 % de dones i del 50 % d\'homes, en tots els òrgans públics i privats.',
      'Eliminar les discriminacions, les desigualtats i la invisibilitat.',
      'Propiciar un marc favorable perquè el paper de les dones aporti tot el seu potencial al progrés i a la transformació social i econòmica.',
      'Afavorir una distribució corresponsable entre dones i homes del treball de mercat, domèstic i de cura de persones.'
    ],
    correctIndex: 0,
    explanation: 'L\'art. 1 de la Llei 17/2015 no imposa una paritat estricta del 50%/50% en tots els òrgans privats (la paritat equilibrada és ≥40% i s\'aplica als àmbits públics/específics).'
  },
  {
    topic: 14,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P61] Un equip de bombers rep per ràdio que una columna de fum es localitza a un azimut de 120°. Quin procediment han de seguir amb la brúixola per determinar sobre el terreny la direcció de la columna de fum?',
    options: [
      'Girar el limbe fins a 120°, girar la brúixola fins que l\'agulla magnètica s\'alineï amb el nord del limbe i seguir la direcció indicada per la fletxa.',
      'Orientar primer la brúixola cap al nord, mantenir fixa l\'agulla magnètica i girar després el limbe fins que la fletxa de direcció assenyali 120°.',
      'Girar la brúixola fins que l\'agulla magnètica coincideixi directament amb els 120° del limbe i prendre com a rumb la direcció contrària a la fletxa.',
      'Apuntar la fletxa de direcció cap a un punt visible del terreny, girar el limbe fins que marqui 120° i seguir la direcció oposada a l\'agulla magnètica.'
    ],
    correctIndex: 0,
    explanation: 'Per seguir un rumb: 1) marcar 120° al limbe, 2) girar tot el cos amb la brúixola fins fer coincidir el nord de l\'agulla amb el nord del limbe, 3) seguir la fletxa de direcció.'
  },
  {
    topic: 7,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P62] D\'acord amb l\'article 21.2 del Decret 276/2016, de 19 de juliol, a quin nivell de comandament correspon la posició de cap territorial?',
    options: [
      'Nivell de comandament 4.',
      'Nivell de comandament 2.',
      'Nivell de comandament 3.',
      'Nivell de comandament 5.'
    ],
    correctIndex: 2,
    explanation: 'Al Decret 276/2016: nivell 1 (bàsic), nivell 2 (sotscap territorial), nivell 3 (cap territorial), nivell 4 (cap operatiu), nivell 5 (subdirector general operatiu).'
  },
  {
    topic: 13,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P63] Quin dels següents NO és un dels motius que limiten l\'alçada real d\'aspiració d\'una bomba?',
    options: [
      'L\'augment de la pressió d\'impulsió de la bomba.',
      'La impossibilitat d\'aconseguir un buit absolut.',
      'Les pèrdues de càrrega de la instal·lació.',
      'La variació de la pressió atmosfèrica.'
    ],
    correctIndex: 0,
    explanation: 'L\'alçada d\'aspiració depèn de la pressió atmosfèrica, el grau de buit, les pèrdues de càrrega en aspiració i la pressió de vapor; no de la pressió d\'impulsió.'
  },
  {
    topic: 34,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P64] En l\'aplicació del protocol LACES adaptat al medi aquàtic, què s\'especifica en relació amb els punts d\'ancoratge?',
    options: [
      'Que tota persona exposada a l\'aigua ha d\'estar subjecta amb una línia desembragable o assegurada.',
      'Que tota persona exposada a l\'aigua ha d\'estar connectada a un punt fix situat sempre a la vora.',
      'Que tota persona exposada a l\'aigua ha d\'estar vinculada permanentment a una línia fixa no desembragable.',
      'Que tota persona exposada a l\'aigua ha d\'estar situada dins del camp visual directe de l\'observador.'
    ],
    correctIndex: 0,
    explanation: 'En el medi aquàtic, les línies han de ser desembragables (mai nusos fixos que puguin ofegar el rescatador si queda atrapat al corrent).'
  },
  {
    topic: 28,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P65] En efectuar la valoració neurològica amb l\'escala de coma de Glasgow, la víctima obre els ulls quan se li parla, respon verbalment però confusa i desorientada, i en aplicar un estímul dolorós retira l\'extremitat sense localitzar-lo. Quina puntuació obté i com es classifica el TCE?',
    options: [
      '10 punts, corresponents a un TCE moderat.',
      '11 punts, corresponents a un TCE moderat.',
      '8 punts, corresponents a un TCE greu.',
      '13 punts, corresponents a un TCE lleu.'
    ],
    correctIndex: 1,
    explanation: 'Ocular (a l\'ordre verbal) = 3; Verbal (confusa) = 4; Motora (retira al dolor) = 4. Total = 3 + 4 + 4 = 11 punts, que correspon a un TCE moderat (9-12).'
  },
  {
    topic: 30,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P66] En un apuntalament d\'una façana, quina força ha d\'exercir el puntal que actua com a tornapuntes?',
    options: [
      'S\'ha d\'ajustar amb la força suficient per mantenir la façana en la posició en què es troba.',
      'S\'ha d\'ajustar amb força per retornar la façana afectada a la seva posició original.',
      'S\'ha de comprimir fortament per evitar que les vibracions puguin desplaçar l\'element apuntalat.',
      'S\'ha de deixar una separació de 2 a 4 cm perquè l\'element acabi recolzant sobre el puntal.'
    ],
    correctIndex: 0,
    explanation: 'Un apuntalament ha d\'estabilitzar l\'element mantenint-lo en la posició en què es troba, mai intentar retornar-lo a la posició original ni forçar-lo en excés.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P67] Quin fenomen estructural descriu el vinclament?',
    options: [
      'La deformació lateral sobtada que pateix un element llarg sotmès a compressió.',
      'La deformació longitudinal d\'un element esvelt sotmès principalment a flexió.',
      'La deformació permanent per tracció que pateix un element curt sotmès a una càrrega axial.',
      'La fissuració progressiva d\'un element sotmès principalment a esforços de tall.'
    ],
    correctIndex: 0,
    explanation: 'El vinclament (pandeig) és la inestabilitat o deformació lateral sobtada d\'un element esvelt sotmès a compressió axial.'
  },
  {
    topic: 32,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P68] En relació amb els sistemes de propulsió menys comuns, experimentals o específics, quin dels vehicles següents NO entraria dins la categoria de propulsions alternatives descrita?',
    options: [
      'Un vehicle equipat amb un motor alimentat amb biodièsel.',
      'Un vehicle que utilitza aire comprimit.',
      'Un vehicle propulsat mitjançant energia solar.',
      'Un vehicle de pila de combustible d\'hidrogen.'
    ],
    correctIndex: 0,
    explanation: 'El biodièsel s\'utilitza en motors tèrmics dièsel convencionals; l\'aire comprimit, l\'energia solar o la pila d\'hidrogen són sistemes de propulsió alternatius/específics.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P69] En treballs amb motoserra, l\'exposició continuada al soroll fa necessari utilitzar una protecció auditiva adequada. Com es pot disposar aquesta protecció?',
    options: [
      'Només cal utilitzar-la quan es treballi en espais tancats.',
      'Ha d\'estar sempre integrada al casc de protecció.',
      'Es pot substituir per una pantalla facial amb protecció ocular.',
      'Pot estar integrada al casc o bé es poden utilitzar taps auditius.'
    ],
    correctIndex: 3,
    explanation: 'La protecció auditiva pot anar integrada al casc (orelleres) o bé fer-se mitjançant taps auditius homologats.'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P70] En relació amb les normes principals de vestuari de protecció per a bombers, quina combinació és CORRECTA?',
    options: [
      'L\'EN 469 prioritza la lleugeresa i la transpirabilitat per a exposicions tèrmiques moderades, mentre que l\'EN 15614 / EN ISO 15384 està destinada a entorns amb foc intens.',
      'Ambdues normes estableixen el mateix nivell de protecció tèrmica i es diferencien principalment pel tipus de bandes reflectants exigides.',
      'L\'EN 469 està orientada a incendis urbans i industrials amb risc tèrmic molt alt i vestuari multicapa, mentre que l\'EN 15614 / EN ISO 15384 està orientada a incendis forestals, amb protecció tèrmica moderada i major lleugeresa i transpirabilitat.',
      'L\'EN 469 correspon al vestit forestal d\'una sola capa, mentre que l\'EN 15614 / EN ISO 15384 regula el vestit estructural multicapa.'
    ],
    correctIndex: 2,
    explanation: 'EN 469 regula el vestuari estructural multicapa (incendis urbans/industrials); EN 15614 / EN ISO 15384 regula el vestuari lleuger per a incendis forestals.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P71] Quin risc poden comportar els talussos amb poca consistència en camins estrets, especialment quan estan formats per terra sobreposada?',
    options: [
      'L\'enfonsament sobtat de la calçada per manca de drenatge.',
      'La bolcada del vehicle en cas de fallada del terreny.',
      'El despreniment de càrrega del vehicle per excés de pendent.',
      'La pèrdua de tracció del vehicle per excés d\'humitat del ferm.'
    ],
    correctIndex: 1,
    explanation: 'En camins estrets amb talussos de terra poc consistent, el pes del vehicle pot fer cedir la vora i provocar la bolcada del camió.'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P72] Un cop l\'incendi forestal ja està controlat, s\'inicia l\'etapa de remat. En què consisteix principalment aquesta etapa?',
    options: [
      'En retirar progressivament els mitjans d\'extinció quan ja no hi ha propagació activa del foc.',
      'En ampliar el perímetre de l\'incendi per crear una zona de seguretat al voltant del front.',
      'En eliminar els focus calents i les restes actives dins del perímetre per evitar la reactivació de l\'incendi.',
      'En concentrar els recursos disponibles als sectors amb més velocitat de propagació del front.'
    ],
    correctIndex: 2,
    explanation: 'L\'etapa de remat consisteix a extingir tots els punts calents, brases i restes fumejants dins el perímetre per impedir revifalles.'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P73] En la valoració d\'una víctima, la presència d\'un hematoma periorbitari característic, conegut com a «ull de mapatxe», pot ser un indicador de:',
    options: [
      'Una intoxicació per monòxid de carboni.',
      'Una crisi hipertensiva amb afectació neurològica.',
      'Un traumatisme cranioencefàlic.',
      'El consum de drogues o substàncies psicoactives.'
    ],
    correctIndex: 2,
    explanation: 'L\'hematoma periorbitari bilateral («ulls de mapatxe») és un signe clàssic de fractura de la base del crani / traumatisme cranioencefàlic.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P74] Com s\'anomena l\'element horitzontal executat directament sobre el terreny que constitueix la base inferior del paviment d\'un edifici?',
    options: [
      'Sabata correguda.',
      'Llosa de fonamentació.',
      'Forjat sanitari.',
      'Solera.'
    ],
    correctIndex: 3,
    explanation: 'La solera és la capa o llosa de formigó recolzada directament sobre el terreny que serveix de base per al paviment.'
  },
  {
    topic: 25,
    difficulty: 'Mitjà',
    question: '[ÒPTIM C\'26 · P75] Un incendi forestal supera la carena i passa al vessant sud avançant en sentit descendent pel pendent. Són les 12 del migdia però el cel està completament ennuvolat, i el vent continua bufant a favor del front. Quina alineació CPS correspon a aquesta nova situació?',
    options: [
      'Alineació 1/3.',
      'Alineació 3/3.',
      'Alineació 2/3.',
      'Alineació 0/3.'
    ],
    correctIndex: 0,
    explanation: 'Pendent descendent (no alineat), orientació sud a les 12h però cel completament ennuvolat (no alineat), vent a favor (alineat): només 1 de 3 factors (1/3).'
  },
  {
    topic: 10,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P76] En relació amb les partícules subatòmiques, quina de les afirmacions següents és CORRECTA?',
    options: [
      'Els electrons es troben dins del nucli i tenen càrrega elèctrica positiva.',
      'Els protons es troben dins del nucli, tenen càrrega negativa i el seu nombre determina l\'element químic.',
      'Els protons es troben dins del nucli, tenen càrrega positiva i el seu nombre determina l\'element químic.',
      'Els neutrons tenen càrrega negativa i el seu nombre determina l\'element químic.'
    ],
    correctIndex: 2,
    explanation: 'Els protons són al nucli, tenen càrrega positiva (+1) i el seu nombre (nombre atòmic Z) identifica l\'element químic.'
  },
  {
    topic: 30,
    difficulty: 'Fàcil',
    question: '[ÒPTIM C\'26 · P77] Per quin motiu un col·lapse parcial pot resultar especialment perillós per als equips intervinents?',
    options: [
      'Perquè la resta de l\'edificació pot aparentar estabilitat, tot i existir elements inestables o deformats amb risc de col·lapse secundari.',
      'Perquè, si la resta de l\'edificació es manté aparentment estable, el risc que es produeixi un col·lapse secundari és baix.',
      'Perquè els col·lapses parcials es produeixen exclusivament per incendis o per fallades puntuals dels materials estructurals.',
      'Perquè en aquest tipus de col·lapse tota l\'estructura ha cedit, encara que exteriorment només se\'n percebi una part.'
    ],
    correctIndex: 0,
    explanation: 'El col·lapse parcial genera falsa sensació de seguretat perquè la resta de l\'edifici sembla estable, però pot patir col·lapses secundaris sobtats.'
  }
];
