/**
 * Simulacre MATAFOCS 4 (Model A) — 70 preguntes amb plantilla de correcció oficial.
 */
export const QUESTIONS_MATAFOCS_4 = [
  {
    topic: 16,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P1] Com a autobomba, quina limitació presenta la bomba urbana lleugera (BUL)?',
    options: [
      'Menys maniobrabilitat en entorns molt estrets',
      'Una capacitat d\'extinció limitada',
      'Una bomba que no treballa a alta pressió',
      'Menys dotació que la resta d\'autobombes'
    ],
    correctIndex: 1,
    explanation: 'La BUL té una gran maniobrabilitat en entorns estrets, però la seva capacitat d\'aigua (i, per tant, d\'extinció) és més limitada que la d\'una BUP o BRP.'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P2] Com s\'anomenen les forces que apareixen als punts de recolzament o d\'unió dels elements estructurals quan aquests reben càrregues?',
    options: [
      'Les accions',
      'Els esforços',
      'Les deformacions',
      'Les reaccions'
    ],
    correctIndex: 3,
    explanation: 'Les reaccions són les forces que apareixen als suports o unions per equilibrar les càrregues aplicades sobre l\'estructura.'
  },
  {
    topic: 21,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P3] Mentre crema la tercera planta d\'un bloc de pisos, un binomi que treballa a l\'interior deixa de respondre per ràdio i s\'activa el codi vermell. Què comporta aquesta activació?',
    options: [
      'Comunicar-ho al cap d\'intervenció i a tot el dispositiu perquè s\'aturin les maniobres que posin en risc el rescat, i activar un equip de rescat específic que el busqui i l\'extregui',
      'Comunicar-ho al cap d\'intervenció i a tot el dispositiu perquè s\'aturin les maniobres que posin en risc el rescat, i enviar-hi el binomi de relleu del control d\'accés',
      'Comunicar-ho al cap d\'intervenció perquè ell ho traslladi als sectors afectats, i activar un equip de rescat específic que el busqui i l\'extregui',
      'Comunicar-ho al cap d\'intervenció perquè ell ho traslladi als sectors afectats, i enviar-hi el binomi de relleu del control d\'accés'
    ],
    correctIndex: 0,
    explanation: 'L\'activació del codi vermell s\'ha de comunicar a tot el dispositiu per aturar maniobres de risc (com ventilació o atac per altre costat) i activar l\'equip de rescat específic (RIT).'
  },
  {
    topic: 1,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P4] Quins requisits fixa l\'article 113 de la Constitució espanyola de 1978 per a la proposta d\'una moció de censura i per al moment en què el Congrés dels Diputats la pot votar?',
    options: [
      'Proposta per la majoria absoluta dels membres del Congrés, i no es pot votar fins que hagin passat dos dies des de la presentació',
      'Proposta per almenys una desena part dels diputats, i no es pot votar fins que hagin passat dos dies des de la presentació',
      'Proposta per la majoria absoluta dels membres del Congrés, i no es pot votar fins que hagin passat cinc dies des de la presentació',
      'Proposta per almenys una desena part dels diputats, i no es pot votar fins que hagin passat cinc dies des de la presentació'
    ],
    correctIndex: 3,
    explanation: 'Segons l\'art. 113 CE, la moció de censura l\'han de proposar almenys una desena part dels diputats, ha d\'incloure un candidat alternatiu i no es pot votar fins passats cinc dies.'
  },
  {
    topic: 21,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P5] Pel que fa als incendis urbans de materials sòlids acumulats i de plàstics, quina d\'aquestes afirmacions és FALSA?',
    options: [
      'En piles de fusta, mobles o runa amb residus, el risc principal és la propagació ràpida per radiació i convecció',
      'En piles de fusta o de mobles acumulats, la maniobra recomanada és atacar amb raig tens des de la màxima distància',
      'El plàstic fos pot gotejar en flames i encendre nous focus secundaris a les zones del voltant',
      'En els incendis de plàstics i gomes, cal fer servir escumògens o humectants que ajudin a evitar que es tornin a encendre'
    ],
    correctIndex: 1,
    explanation: 'No es recomana atacar exclusivament amb raig tens des de la màxima distància; cal remoure, refredar en profunditat i utilitzar aigua polvoritzada o humectants.'
  },
  {
    topic: 5,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P6] Quin efecte té, segons l\'article 25 de la Llei 19/2020, del 30 de desembre, d\'igualtat de tracte i no-discriminació, contravenir aquesta llei o les normes que la despleguen sobre les disposicions, els actes o les clàusules dels negocis jurídics?',
    options: [
      'La seva anul·labilitat',
      'La seva prescripció',
      'La seva inaplicació',
      'La seva nul·litat'
    ],
    correctIndex: 3,
    explanation: 'L\'article 25 de la Llei 19/2020 estableix la nul·litat de ple dret de les disposicions, actes o clàusules dels negocis jurídics que contravinguin la llei.'
  },
  {
    topic: 9,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P7] Si una massa de gas que ocupa 40 L a 150 bar s\'expandeix, sense que en variï la temperatura, fins a ocupar un volum de 0,2 m³, quina pressió tindrà?',
    options: ['0,03 bar', '3 bar', '30 bar', '750 bar'],
    correctIndex: 2,
    explanation: 'Llei de Boyle-Mariotte (P₁·V₁ = P₂·V₂): 0,2 m³ = 200 L. P₂ = (150 bar · 40 L) / 200 L = 30 bar.'
  },
  {
    topic: 6,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P8] Davant d\'un risc greu i imminent, l\'empresari no adopta les mesures necessàries i els representants legals dels treballadors acorden per majoria paralitzar l\'activitat dels treballadors afectats. Què s\'ha de fer amb aquest acord, segons l\'article 21 de la Llei 31/1995, de 8 de novembre, de prevenció de riscos laborals?',
    options: [
      'Comunicar-lo de manera immediata a l\'empresa i a l\'autoritat laboral, que en el termini de vint-i-quatre hores l\'ha d\'anul·lar o ratificar',
      'Comunicar-lo de manera immediata a l\'empresa i al servei de prevenció, que en el termini de vint-i-quatre hores l\'ha d\'anul·lar o ratificar',
      'Comunicar-lo de manera immediata a l\'empresa i a l\'autoritat laboral, que en el termini de tres dies hàbils l\'ha d\'anul·lar o ratificar',
      'Comunicar-lo de manera immediata a l\'empresa i al servei de prevenció, que en el termini de tres dies hàbils l\'ha d\'anul·lar o ratificar'
    ],
    correctIndex: 0,
    explanation: 'Segons l\'art. 21.3 de la LPRL, l\'acord s\'ha de comunicar immediatament a l\'empresa i a l\'autoritat laboral, la qual disposa de 24 hores per anul·lar-lo o ratificar-lo.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P9] Contra la reixa d\'un canal inundat hi ha atrapada una persona que no pot col·laborar, i les maniobres des del marge han fallat. A més de l\'equip de protecció adequat, què cal perquè un bomber entri a l\'aigua a fer-ne el contacte i el remolc?',
    options: [
      'Que porti un flotador de rescat per al remolc i que un segon bomber l\'acompanyi dins l\'aigua per ajudar-lo',
      'Que porti un flotador de rescat per al remolc i que hi hagi suport a la vora capaç de recuperar-lo',
      'Que tingui formació específica i que hi hagi suport a la vora capaç de recuperar-lo',
      'Que tingui formació específica i que un segon bomber l\'acompanyi dins l\'aigua per ajudar-lo'
    ],
    correctIndex: 2,
    explanation: 'L\'entrada a l\'aigua per contacte i remolc exigeix formació específica i equip de suport segur a la vora capaç de recuperar el rescatador i la víctima.'
  },
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P10] Quanta calor es genera en 5 minuts al cable d\'alimentació d\'un escalfador elèctric de 1.840 W que funciona a 230 V, si el cable té una resistència de 0,5 Ω?',
    options: ['160 J', '1.200 J', '9.600 J', '552.000 J'],
    correctIndex: 2,
    explanation: 'I = P / V = 1.840 / 230 = 8 A. Temps t = 5 · 60 = 300 s. Llei de Joule: Q = I² · R · t = 8² · 0,5 · 300 = 64 · 0,5 · 300 = 9.600 J.'
  },
  {
    topic: 10,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P11] Què és, en la teoria del foc, el punt de combustió d\'un combustible?',
    options: [
      'La temperatura mínima a la qual emet prou vapors per encendre\'s un moment quan s\'hi acosta una font d\'ignició externa',
      'La temperatura mínima a la qual emet prou vapors per mantenir la flama de forma continuada quan s\'hi acosta una font d\'ignició externa',
      'La temperatura mínima a la qual emet prou vapors per mantenir la flama de forma continuada sense una font d\'ignició externa',
      'La temperatura mínima a la qual emet prou vapors per encendre\'s un moment sense una font d\'ignició externa'
    ],
    correctIndex: 1,
    explanation: 'El punt d\'inflamació encén un moment; el punt de combustió manté la flama continuada amb font d\'ignició externa; l\'autoignició no requereix font externa.'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P12] Quan hi ha risc nuclear, radiològic, biològic o químic, on es fa el control d\'accessos i d\'equips de respiració autònoma, i en quin moment es munta l\'àrea bàsica de descontaminació (ABD)?',
    options: [
      'A la zona freda, al costat del comandament avançat, i l\'ABD es munta un cop el primer equip surt de la zona calenta',
      'Just davant de l\'ABD, i l\'ABD es munta un cop el primer equip surt de la zona calenta',
      'A la zona freda, al costat del comandament avançat, i l\'ABD es munta abans que el primer equip entri a la zona calenta',
      'Just davant de l\'ABD, i l\'ABD es munta abans que el primer equip entri a la zona calenta'
    ],
    correctIndex: 3,
    explanation: 'En intervencions NRBQ, l\'ABD s\'ha de muntar abans que el primer equip entri a la zona calenta, i el control d\'accessos i d\'ERA se situa just davant de l\'ABD.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P13] Dins el sistema de suspensió d\'un vehicle de bombers, quina funció fan els amortidors?',
    options: [
      'Suportar tot el pes del vehicle i de la càrrega',
      'Controlar el moviment dels molls',
      'Repartir el balanceig entre les rodes de l\'eix',
      'Ajustar l\'altura i la duresa de la suspensió'
    ],
    correctIndex: 1,
    explanation: 'Els molls o ballestes suporten la càrrega, mentre que els amortidors esmorteeixen i controlen les oscil·lacions dels molls.'
  },
  {
    topic: 15,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P14] Quant als moviments simples que pot fer un vehicle en ordre de marxa, quina d\'aquestes descripcions és FALSA?',
    options: [
      'El balanceig és un moviment pivotant del vehicle cap a la dreta i cap a l\'esquerra',
      'El desplaçament longitudinal és el moviment horitzontal del vehicle endavant o enrere, en el sentit de la marxa',
      'El capcineig és un moviment pivotant endavant i endarrere amb desplaçament longitudinal',
      'La guinyada és un gir a dreta o esquerra sobre un eix vertical imaginari que passa pel centre del vehicle'
    ],
    correctIndex: 2,
    explanation: 'El capcineig és el moviment pivotant al voltant de l\'eix transversal (endavant i endarrere, p. ex. en frenar o accelerar), però no és un desplaçament longitudinal.'
  },
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P15] Un camió que transporta porcs adults bolca en una carretera comarcal i una vintena d\'animals queden solts a la calçada. La dotació els ha de retirar de la via. Com ho ha de fer?',
    options: [
      'Subjectar-los directament d\'un en un, perquè el perill principal són les mossegades dels porcs',
      'Guiar-los amb tanques, passadissos o elements dissuasius, perquè el perill principal són les mossegades dels porcs',
      'Guiar-los amb tanques, passadissos o elements dissuasius, perquè el perill principal és l\'estampida per pànic col·lectiu',
      'Subjectar-los directament d\'un en un, perquè el perill principal és l\'estampida per pànic col·lectiu'
    ],
    correctIndex: 2,
    explanation: 'En accidents amb bestiar gros o porcs, cal guiar-los amb tanques o passadissos sense espantar-los, ja que el risc principal és l\'estampida per pànic col·lectiu.'
  },
  {
    topic: 18,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P16] La cistella de l\'autoescala ja és a l\'altura d\'un cinquè pis i un bomber hi ha de pujar pels trams amb una eina de forçament. En quines condicions hi ha de pujar?',
    options: [
      'Amb el motor al ralentí i els comandaments bloquejats, i l\'eina lligada al canell amb una baga',
      'Amb el motor al ralentí i els comandaments bloquejats, i l\'eina portada en una bossa penjada',
      'Amb el motor de l\'autoescala aturat, i l\'eina lligada al canell amb una baga',
      'Amb el motor de l\'autoescala aturat, i l\'eina portada en una bossa penjada'
    ],
    correctIndex: 3,
    explanation: 'Per pujar pels trams d\'una autoescala desplegada cal aturar el motor (evitant moviments accidentals) i portar les eines dins una bossa penjada per tenir les mans lliures.'
  },
  {
    topic: 19,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P17] Quins transceptors portàtils de la xarxa Rescat poden iniciar una trucada individual en mode xarxa i quins la poden rebre?',
    options: [
      'Tots els transceptors les poden iniciar, però només alguns d\'autoritzats les poden rebre',
      'Només alguns terminals autoritzats les poden iniciar i només aquests les poden rebre',
      'Només alguns terminals autoritzats les poden iniciar, però tots els transceptors les poden rebre',
      'Tots els transceptors les poden iniciar i rebre, si són al mateix canal'
    ],
    correctIndex: 2,
    explanation: 'A la xarxa Rescat en mode TMO (xarxa), només els terminals autoritzats poden iniciar trucades individuals, però qualsevol terminal les pot rebre.'
  },
  {
    topic: 24,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P18] Dins l\'armari o arqueta del comptador general de la instal·lació d\'aigua d\'un edifici, quin element s\'instal·la just abans de la clau de sortida?',
    options: [
      'L\'aixeta o ràcord de prova',
      'La vàlvula de retenció',
      'El comptador general',
      'La clau de tall general'
    ],
    correctIndex: 1,
    explanation: 'L\'ordre habitual a l\'armari del comptador general és: clau de tall general, filtre, comptador, aixeta de prova, vàlvula de retenció i clau de sortida.'
  },
  {
    topic: 25,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P19] En la limitació de la propagació interior d\'un incendi mitjançant sectors d\'incendi, on ha de tenir continuïtat la compartimentació?',
    options: [
      'Als espais ocults, excepte els patinets i els falsos sostres, i als passos d\'instal·lacions, excepte els de cables',
      'Als espais ocults, inclosos els patinets i els falsos sostres, i als passos d\'instal·lacions, excepte els de cables',
      'Als espais ocults, excepte els patinets i els falsos sostres, i als passos d\'instal·lacions, excepte els de petita secció',
      'Als espais ocults, inclosos els patinets i els falsos sostres, i als passos d\'instal·lacions, excepte els de petita secció'
    ],
    correctIndex: 3,
    explanation: 'Segons el CTE DB-SI 1, la compartimentació ha de tenir continuïtat als espais ocults (patinets, falsos sostres, cambres) i s\'han de segellar els passos d\'instal·lacions excepte els de petita secció (≤ 50 cm²).'
  },
  {
    topic: 11,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P20] Al fons pla d\'un dipòsit obert hi ha una trapa horitzontal de 500 cm², sota una columna d\'aigua de 1,6 m. Prenent una densitat de 1.000 kg/m³ i g = 10 m/s², quina força exerceix la pressió hidrostàtica sobre la trapa?',
    options: ['800 N', '5.800 N', '16.000 N', '80.000 N'],
    correctIndex: 0,
    explanation: 'P = ρ · g · h = 1.000 · 10 · 1,6 = 16.000 Pa. Àrea A = 500 cm² = 0,05 m². Força F = P · A = 16.000 · 0,05 = 800 N.'
  },
  {
    topic: 22,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P21] Durant l\'extinció d\'un incendi forestal, unes patrulles es mouen pel perímetre preparades per intervenir de seguida si el foc revifa, i el comandament les fa passar sobretot per on més toquen el vent i el sol. En quina etapa es fa aquesta intervenció i quan acaba aquesta etapa?',
    options: [
      'En l\'etapa de remat, que finalitza quan l\'incendi es dona per controlat',
      'En l\'etapa de rereguarda, que finalitza quan l\'incendi es dona per extingit',
      'En l\'etapa de remat, que finalitza quan l\'incendi es dona per extingit',
      'En l\'etapa de rereguarda, que finalitza quan l\'incendi es dona per controlat'
    ],
    correctIndex: 1,
    explanation: 'La vigilància del perímetre per evitar revifalles un cop controlat correspon a l\'etapa de rereguarda, que s\'acaba quan l\'incendi es dona per extingit.'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P22] Cal despenjar una víctima en llitera per una cinglera amb una corda de treball i una de seguretat. Quines pautes s\'apliquen als ancoratges i a les cordes?',
    options: [
      'Ancoratges sòlids i redundants, testejats un cop entren en càrrega, i les dues cordes unides amb un nus per reforçar-les',
      'Ancoratges sòlids i redundants, testejats un cop entren en càrrega, i les dues cordes separades',
      'Ancoratges sòlids i redundants, testejats abans d\'usar-los, i les dues cordes unides amb un nus per reforçar-les',
      'Ancoratges sòlids i redundants, testejats abans d\'usar-los, i les dues cordes separades'
    ],
    correctIndex: 3,
    explanation: 'Els ancoratges s\'han de testejar sempre abans de posar-hi la càrrega, i la corda de treball i la de seguretat han de treballar de forma independent i separada.'
  },
  {
    topic: 18,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P23] Segons la classificació dels equips de protecció individual (EPI) per nivell de risc, a quina categoria pertanyen uns guants de protecció criogènica i per sota de quina temperatura es considera extrem el fred en aquesta classificació?',
    options: [
      'A la categoria III, i el fred és extrem per sota de –50 °C',
      'A la categoria II, i el fred és extrem per sota de –50 °C',
      'A la categoria III, i el fred és extrem per sota de –20 °C',
      'A la categoria II, i el fred és extrem per sota de –20 °C'
    ],
    correctIndex: 0,
    explanation: 'Segons el Reglament (UE) 2016/425, els EPI contra ambients freds amb efectes comparables a una temperatura de l\'aire igual o inferior a –50 °C són de categoria III.'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P24] Un equip arriba a una casa que s\'acaba d\'ensorrar i aplica la crida i escolta per detectar possibles víctimes sota la runa. De quina manera l\'ha d\'executar?',
    options: [
      'Aturant l\'activitat però mantenint les ràdios en marxa, fent una crida breu i clara i esperant uns segons en silenci, i repetint el cicle un màxim de tres vegades',
      'Aturant l\'activitat i qualsevol soroll, ràdios incloses, fent una crida breu i clara i esperant uns segons en silenci, i repetint el cicle tantes vegades com calgui',
      'Aturant l\'activitat i qualsevol soroll, ràdios incloses, fent una crida breu i clara i esperant uns segons en silenci, i repetint el cicle un màxim de tres vegades',
      'Aturant l\'activitat però mantenint les ràdios en marxa, fent una crida breu i clara i esperant uns segons en silenci, i repetint el cicle tantes vegades com calgui'
    ],
    correctIndex: 1,
    explanation: 'La tècnica de crida i escolta exigeix silenci absolut (incloent-hi ràdios i motors) per poder sentir respostes dèbils i repetir el cicle en diferents punts tantes vegades com calgui.'
  },
  {
    topic: 7,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P25] En els plans de protecció civil de la Generalitat de Catalunya, quina d\'aquestes funcions NO correspon a la direcció del pla?',
    options: [
      'Presidir les comissions municipals de protecció civil dels municipis afectats',
      'Decidir quan s\'activa i quan es desactiva el pla, segons com evolucioni el risc',
      'Coordinar l\'actuació dels alcaldes afectats i donar directrius generals als grups actuants',
      'Establir i supervisar la informació oficial que es dona a la població'
    ],
    correctIndex: 0,
    explanation: 'La direcció d\'un pla de la Generalitat no presideix les comissions municipals de protecció civil (que presideix cada alcalde), tot i que coordina els alcaldes afectats.'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P26] Quan en un incident de múltiples víctimes hi ha sospita d\'una explosió intencionada, els efectius del Cos de Bombers poden accedir al primer cercle de seguretat:',
    options: [
      'quan el seu propi comandament valora que l\'escenari és estable',
      'un cop hi han arribat les unitats especialitzades en desactivació',
      'quan el cos policial competent ho autoritza expressament',
      'quan el Sistema d\'Emergències Mèdiques els requereix per treure ferits'
    ],
    correctIndex: 2,
    explanation: 'En incidents amb sospita d\'explosió intencionada o artefactes, l\'accés al primer cercle només es fa quan el cos policial competent garanteix la seguretat i ho autoritza expressament.'
  },
  {
    topic: 14,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P27] Sobre un mapa topogràfic sense l\'escala a la vista, el costat de cada quadrat de la quadrícula UTM (Universal Transverse Mercator) quilomètrica fa 4 cm. Quina distància real separa dos punts que en aquest mapa són a 6,5 cm l\'un de l\'altre?',
    options: ['650 m', '1.625 m', '3.250 m', '6.500 m'],
    correctIndex: 1,
    explanation: 'Una quadrícula UTM quilomètrica representa 1 km (1.000 m) per quadrat. Si 4 cm = 1.000 m (escala 1:25.000), 6,5 cm = (6,5 / 4) · 1.000 m = 1.625 m.'
  },
  {
    topic: 20,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P28] A través de quins elements es garanteixen les comunicacions integrades d\'una intervenció, en el Sistema de Comandament de Bombers (SISCOM)?',
    options: [
      'Un sistema de telecomunicacions, un pla de comunicacions i uns criteris d\'ús unificats i compartits',
      'Un sistema de telecomunicacions, un pla de comunicacions i uns indicatius propis de cada agència',
      'Un sistema de telecomunicacions, un canal de ràdio comú i uns criteris d\'ús unificats i compartits',
      'Un sistema de telecomunicacions, un canal de ràdio comú i uns indicatius propis de cada agència'
    ],
    correctIndex: 0,
    explanation: 'El SISCOM garanteix les comunicacions integrades mitjançant un sistema comú de telecomunicacions, un pla de comunicacions i uns criteris d\'ús unificats i compartits.'
  },
  {
    topic: 31,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P29] Com que no hi ha espai per fer un pont, la dotació ha de girar en bloc una víctima traumàtica amb sospita de lesió vertebral per col·locar-li la fusta espinal a l\'esquena. Qui dirigeix la maniobra?',
    options: [
      'L\'intervinent que subjecta el cap de la víctima',
      'L\'intervinent que subjecta les cames de la víctima',
      'L\'intervinent que subjecta la pelvis de la víctima',
      'L\'intervinent que col·loca la fusta espinal'
    ],
    correctIndex: 0,
    explanation: 'En el gir en bloc d\'un pacient traumàtic, l\'intervinent que controla i immobilitza el cap i les cervicals dirigeix i marca el ritme de tota la maniobra.'
  },
  {
    topic: 8,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P30] A 5 m/s, un vehicle suporta una resistència aerodinàmica de 52 N. Quina resistència aerodinàmica suportarà a 63 km/h, si no varia cap altre factor?',
    options: ['97,3 N', '182 N', '364 N', '637 N'],
    correctIndex: 3,
    explanation: '63 km/h = 17,5 m/s (és 3,5 vegades 5 m/s). Com que la força aerodinàmica és proporcional a v², F = 52 · 3,5² = 52 · 12,25 = 637 N.'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P31] Penjada de l\'ampit d\'una finestra d\'un quart pis, una persona està a punt de caure, i la primera dotació que hi arriba encara no pot muntar tots els sistemes de seguretat previstos per al treball en alçada. De quina manera s\'aplica aleshores el procediment de treball en alçada del Cos de Bombers?',
    options: [
      'Íntegrament, perquè el risc no justifica excepcions',
      'Amb flexibilitat, prioritzant el salvament',
      'Íntegrament, perquè no hi ha cap catàstrofe declarada',
      'Amb flexibilitat, si ho autoritza el centre de coordinació'
    ],
    correctIndex: 1,
    explanation: 'Davant d\'una situació de risc vital imminent, el procediment preveu aplicar-se amb flexibilitat per prioritzar el salvament de la vida.'
  },
  {
    topic: 18,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P32] Respecte de l\'ampolla i de la màscara facial de l\'equip de respiració autònoma (ERA) que fan servir els bombers, quina afirmació és FALSA?',
    options: [
      'La màscara facial fa un segellament complet al voltant de la cara, i pot incloure un sistema de comunicacions',
      'L\'ampolla conté aire respirable a alta pressió, i incorpora una vàlvula de sortida i un manòmetre',
      'La màscara facial porta un visor panoràmic resistent als impactes, amb tractament antientelament',
      'L\'ampolla que es fa servir amb l\'ERA és metàl·lica, i les de material compost queden per a altres usos'
    ],
    correctIndex: 3,
    explanation: 'Actualment les ampolles dels ERA dels bombers són principalment de material compost (fibra de carboni/vidre), molt més lleugeres que les metàl·liques.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P33] Per a quines intervencions són útils les embarcacions sense motor en la recerca i el rescat en zones inundades, i per què?',
    options: [
      'Per a rescats de curta distància, perquè són més lentes i exigents físicament',
      'Per a zones obertes i canals, perquè hi són les més eficients',
      'Per a rieres amb corrent moderat, perquè són més maniobrables',
      'Per a recorreguts llargs, perquè no gasten combustible'
    ],
    correctIndex: 0,
    explanation: 'Les embarcacions sense motor (a rem o pala) són útils per a rescats de curta distància o aigües tranquil·les, ja que són més lentes i exigeixen més esforç físic.'
  },
  {
    topic: 9,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P34] Prenent M(C₃H₈) = 44 g/mol, quin volum de diòxid de carboni, mesurat en condicions normals (0 °C i 1 atm), s\'obté en la combustió completa de 66 g de propà segons l\'equació ajustada C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O?',
    options: ['33,6 L', '100,8 L', '134,4 L', '168 L'],
    correctIndex: 1,
    explanation: '66 g / 44 g/mol = 1,5 mol de propà. Cada mol de propà produeix 3 mols de CO₂: 1,5 · 3 = 4,5 mol CO₂. En condicions normals (22,4 L/mol): 4,5 · 22,4 = 100,8 L.'
  },
  {
    topic: 20,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P35] Si diverses agències operen conjuntament en un mateix incident sota un comandament integrat del Sistema de Comandament de Bombers (SISCOM), què passa amb l\'autoritat de cadascuna d\'aquestes agències?',
    options: [
      'Queda subordinada a la de l\'agència responsable',
      'Passa a ser compartida per les agències actuants',
      'Queda delegada al Centre de Comandament Avançat',
      'Es manté intacta en cadascuna de les agències'
    ],
    correctIndex: 3,
    explanation: 'En un comandament integrat (unificat), les agències coordinen objectius i estratègia, però cada agència manté intacta la seva pròpia autoritat i responsabilitat.'
  },
  {
    topic: 4,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P36] D\'acord amb l\'article 89.5 del Decret legislatiu 1/1997, de 31 d\'octubre, pel qual s\'aprova la refosa en un text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, per quant de temps es pot acordar excepcionalment, com a mesura cautelar, la suspensió provisional d\'un funcionari en la incoació i la tramitació d\'un expedient disciplinari per falta greu o molt greu?',
    options: [
      'Per tres mesos, prorrogables dos mesos més en el cas de faltes greus',
      'Per tres mesos, prorrogables tres mesos més en el cas de faltes greus',
      'Per tres mesos, prorrogables dos mesos més en el cas de faltes molt greus',
      'Per tres mesos, prorrogables tres mesos més en el cas de faltes molt greus'
    ],
    correctIndex: 3,
    explanation: 'L\'article 89.5 del Decret legislatiu 1/1997 estableix una suspensió provisional de 3 mesos, prorrogable 3 mesos més en el cas de faltes molt greus.'
  },
  {
    topic: 10,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P37] Respecte de l\'aire normal, quina velocitat de combustió s\'assoleix en una atmosfera amb un 24 % d\'oxigen?',
    options: [
      'La mateixa velocitat',
      'Un 14 % més de velocitat',
      'El doble de velocitat',
      'El quàdruple de velocitat'
    ],
    correctIndex: 2,
    explanation: 'En atmosferes enriquides amb oxigen, un augment del 21 % al 24 % d\'O₂ duplica aproximadament la velocitat de combustió.'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P38] Pocs minuts després de l\'ensorrament d\'un bloc de pisos, el comandament ordena començar la localització de víctimes amb una recerca física. Quines condicions ha d\'imposar perquè sigui eficaç?',
    options: [
      'Fer-la amb la dotació sencera per acabar abans, i retirar a mà la runa superficial per no fer vibracions',
      'Reduir el nombre d\'intervinents a la zona calenta, i evitar moure la runa innecessàriament per no provocar col·lapses',
      'Fer-la amb la dotació sencera per acabar abans, i evitar moure la runa innecessàriament per no provocar col·lapses',
      'Reduir el nombre d\'intervinents a la zona calenta, i retirar a mà la runa superficial per no fer vibracions'
    ],
    correctIndex: 1,
    explanation: 'En recerca física sobre runa inestable cal minimitzar el nombre d\'intervinents a la zona calenta i evitar moure runa innecessàriament per prevenir col·lapses secundaris.'
  },
  {
    topic: 14,
    difficulty: 'Difícil',
    question: '[MATAFOCS 4 · P39] Els límits d\'un quadrant del codi SOC (Sistema d\'Orientació Cartogràfica) són X = 395000 i X = 400000, i Y = 4585000 i Y = 4590000, en coordenades UTM (Universal Transverse Mercator). Quina secció d\'aquest quadrant conté el punt X = 398200, Y = 4588700?',
    options: ['La secció 7', 'La secció 8', 'La secció 9', 'La secció 19'],
    correctIndex: 2,
    explanation: 'Un quadrant SOC de 5x5 km es divideix en 25 seccions d\'1x1 km numerades d\'1 a 25 de dalt a baix i d\'esquerra a dreta. X=398200 és a la 4a columna (398-399) i Y=4588700 és a la 2a fila des de dalt (4588-4589): 5 + 4 = secció 9.'
  },
  {
    topic: 27,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P40] Arran d\'un temporal de vent, un rètol publicitari ha quedat mig despenjat a la façana d\'un edifici, damunt la vorera d\'un carrer transitat. Quin abast té la intervenció de la dotació sobre el rètol?',
    options: [
      'Retirar-lo o fixar-lo de manera provisional',
      'Retirar-lo o fixar-lo, i reparar la façana definitivament',
      'Tallar el pas i deixar-ne la retirada a la propietat',
      'Tallar el pas i deixar-ne la retirada a la policia local'
    ],
    correctIndex: 0,
    explanation: 'En sanejament d\'elements constructius o rètols amb risc de caiguda a la via pública, els bombers retiren o fixen provisionalment l\'element per eliminar el perill immediat.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P41] Entre les modalitats de recerca de persones desaparegudes al medi natural terrestre, quina velocitat d\'execució i quina efectivitat en la recerca nocturna té la recerca intensiva per línies naturals?',
    options: [
      'Una velocitat d\'execució baixa i una efectivitat nocturna baixa',
      'Una velocitat d\'execució elevada i una efectivitat nocturna baixa',
      'Una velocitat d\'execució elevada i una efectivitat nocturna elevada',
      'Una velocitat d\'execució baixa i una efectivitat nocturna elevada'
    ],
    correctIndex: 2,
    explanation: 'La recerca intensiva per línies naturals (camins, senders, pistes) té una velocitat d\'execució elevada i una efectivitat nocturna elevada.'
  },
  {
    topic: 32,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P42] Els riscos específics d\'un incendi de vehicle varien segons el combustible que el propulsa. Quina afirmació sobre aquests riscos és FALSA?',
    options: [
      'En els vehicles de benzina o dièsel, l\'incendi sol ser ràpid i intens i desprèn fums tòxics',
      'En els vehicles de gas liquat del petroli, les flames poden ser invisibles a simple vista',
      'En els vehicles de benzina o dièsel, cal preveure possibles vessaments de combustible',
      'En els vehicles de gas natural liquat, hi ha risc de fred criogènic i d\'evaporació sobtada'
    ],
    correctIndex: 1,
    explanation: 'Les flames invisibles a simple vista són característiques de l\'hidrogen (o alcohol/metanol), no del GLP (que fa flama visible).'
  },
  {
    topic: 17,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P43] Amb una autoescala automàtica (AEA) que treballa a prop de cables sota tensió, quina d\'aquestes mesures correspon a la prevenció del risc elèctric?',
    options: [
      'Aïllar els estabilitzadors del terreny amb falques',
      'Desconnectar la bateria del vehicle abans de desplegar l\'escala',
      'Fer servir tensors en lloc dels estabilitzadors',
      'Assegurar-la amb una connexió correcta a terra'
    ],
    correctIndex: 3,
    explanation: 'Quan es treballa amb una AEA prop de línies elèctriques, a més de mantenir les distàncies de seguretat, s\'ha d\'assegurar la presa de terra del vehicle.'
  },
  {
    topic: 22,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P44] Un llamp ha encès un incendi forestal en una zona boscosa. Quina és l\'actuació d\'ús preferent en aquest escenari?',
    options: [
      'Maquinària pesada, per obrir-hi línies de defensa àmplies i contínues a distància del front',
      'Unitats helitransportades, per obrir-hi línies de defensa àmplies i contínues a distància del front',
      'Unitats helitransportades, per atacar-lo directament en coordinació amb les descàrregues aèries',
      'Maquinària pesada, per atacar-lo directament en coordinació amb les descàrregues aèries'
    ],
    correctIndex: 2,
    explanation: 'Els focs de llamp en zones forestals de difícil accés tenen com a actuació preferent el desplaçament ràpid d\'unitats helitransportades per a atac directe amb suport aeri.'
  },
  {
    topic: 11,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P45] Aigua de densitat 1.000 kg/m³ circula a 4 m/s per un tram horitzontal de canonada de 75 cm² de secció, que s\'estreny fins a 25 cm². Sense pèrdues de càrrega, quant baixa la pressió estàtica a l\'estretament respecte del tram ample?',
    options: ['0,64 bar', '0,72 bar', '0,80 bar', '1,44 bar'],
    correctIndex: 0,
    explanation: 'Continuïtat: v₂ = v₁ · (A₁/A₂) = 4 · (75/25) = 12 m/s. Bernoulli: ΔP = ½ · ρ · (v₂² - v₁²) = 500 · (144 - 16) = 64.000 Pa = 0,64 bar.'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P46] Entre els tipus de descontaminació que s\'apliquen en una emergència NRBQ (nuclear, radiològica, biològica i química), quina associació entre el tipus i la seva característica és correcta?',
    options: [
      'A l\'aire: es considera passiva, però és la més habitual i versàtil',
      'Per encapsulament: evita la dispersió i elimina el contaminant',
      'Química: neutralitza àcids i bases amb hipoclorit sòdic diluït al 0,5 %',
      'Amb aigua a alt cabal: es fa sense recollir l\'aigua contaminada'
    ],
    correctIndex: 3,
    explanation: 'La descontaminació d\'emergència amb aigua a alt cabal (p. ex. amb mànegues en incidents massius) es fa prioritzant la rapidesa i diluint sense recollir l\'aigua contaminada.'
  },
  {
    topic: 3,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P47] Amb quin règim d\'indemnització regula l\'article 3 de la Llei 5/1994, de 4 de maig, de regulació dels serveis de prevenció i extinció d\'incendis i de salvaments de Catalunya, les prestacions personals que la ciutadania ha de complir en supòsits de risc greu, de catàstrofe o de calamitat pública i la requisa de béns que exigeixin les característiques d\'una emergència?',
    options: [
      'Les prestacions personals donen dret a indemnització, i la requisa de béns també',
      'Les prestacions personals no donen dret a indemnització, i la requisa de béns sí',
      'Les prestacions personals no donen dret a indemnització, i la requisa de béns tampoc',
      'Les prestacions personals donen dret a indemnització, i la requisa de béns no'
    ],
    correctIndex: 1,
    explanation: 'L\'article 3 de la Llei 5/1994 estableix que les prestacions personals no donen dret a indemnització, mentre que la requisa de béns sí que comporta el dret a ser indemnitzat.'
  },
  {
    topic: 31,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P48] En un incident de múltiples víctimes, qui s\'encarrega del triatge avançat i en quin moment es fa?',
    options: [
      'El personal mèdic, quan les víctimes arriben a l\'Àrea sanitària',
      'El personal mèdic, abans de moure les víctimes del lloc on es troben',
      'Els bombers de la primera dotació, quan les víctimes arriben a l\'Àrea sanitària',
      'Els bombers de la primera dotació, abans de moure les víctimes del lloc on es troben'
    ],
    correctIndex: 0,
    explanation: 'El triatge bàsic (START) es fa a la zona calenta/evacuació abans de moure les víctimes, mentre que el triatge avançat el fa el personal sanitari un cop arriben a l\'Àrea sanitària (PMA).'
  },
  {
    topic: 20,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P49] El Catàleg d\'elements de risc (CER) recull les infraestructures, els edificis i els establiments amb condicions d\'intervenció complexes que es considera necessari que els bombers coneguin. Quins túnels hi són inclosos?',
    options: [
      'Els túnels de carretera i els de serveis, a partir de 400 metres de longitud',
      'Els túnels de carretera i els ferroviaris que presentin dificultats d\'intervenció',
      'Els túnels de carretera i els ferroviaris, a partir de 400 metres de longitud',
      'Els túnels de carretera i els de serveis que presentin dificultats d\'intervenció'
    ],
    correctIndex: 2,
    explanation: 'Al CER s\'hi inclouen els túnels de carretera i els ferroviaris a partir de 400 metres de longitud.'
  },
  {
    topic: 31,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P50] El gos d\'un habitatge on intervé la dotació mossega un veí a l\'avantbraç i li fa una ferida que sagna poc. Quina és l\'actuació indicada?',
    options: [
      'Netejar-la abundantment amb aigua i sabó, i consultar amb urgència per valorar la profilaxi antiràbica i antibiòtica',
      'Netejar-la abundantment amb aigua i sabó, i fer un seguiment de la ferida per si hi apareix eritema',
      'Aplicar-li un torniquet per sobre de la mossegada, i consultar amb urgència per valorar la profilaxi antiràbica i antibiòtica',
      'Aplicar-li un torniquet per sobre de la mossegada, i fer un seguiment de la ferida per si hi apareix eritema'
    ],
    correctIndex: 0,
    explanation: 'Davant d\'una mossegada d\'animal, cal rentar la ferida abundantment amb aigua i sabó i derivar amb urgència per valorar profilaxi antiràbica, antitetànica i antibiòtica.'
  },
  {
    topic: 18,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P51] Sovint, l\'única protecció que porten els grups electrògens portàtils és contra quin tipus de defecte elèctric?',
    options: [
      'Les fuites cap a terra',
      'Les sobrecàrregues',
      'Els pics de sobretensió',
      'Les caigudes de tensió'
    ],
    correctIndex: 1,
    explanation: 'Els grups electrògens portàtils sovint només disposen de protecció magnetotèrmica/disjuntor contra sobrecàrregues (i curtcircuits), però no diferencial contra fuites a terra.'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P52] Segons els principis del Sistema de Comandament de Bombers (SISCOM), què queda concentrat en una sola persona pel principi de comandament únic?',
    options: [
      'L\'execució directa de les maniobres i la supervisió personal de cada unitat',
      'La informació de la intervenció i la comunicació amb les altres agències',
      'La responsabilitat i l\'autoritat per planificar, dirigir i coordinar la intervenció',
      'La planificació de la intervenció, mentre la direcció i la coordinació passen als sectors'
    ],
    correctIndex: 2,
    explanation: 'El principi de comandament únic concentra en una sola persona (el Cap d\'Intervenció) la responsabilitat i l\'autoritat per planificar, dirigir i coordinar la intervenció.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P53] Durant la recerca d\'una excursionista desapareguda en una gran àrea boscosa, el Grup caní de recerca hi fa treballar un gos per venteig. Què és imprescindible garantir mentre el gos fa la batuda?',
    options: [
      'Que la zona quedi tan lliure de persones com es pugui, perquè l\'olor humana dispersa a l\'aire no tingui interferències',
      'Que la zona quedi tan lliure de persones com es pugui, perquè no s\'esborri el rastre que ha deixat a terra',
      'Que es disposi d\'una mostra d\'olor de la persona, perquè el gos en pugui seguir el rastre deixat a terra',
      'Que es disposi d\'una mostra d\'olor de la persona, perquè el gos la distingeixi dins l\'olor dispersa a l\'aire'
    ],
    correctIndex: 0,
    explanation: 'Els gossos de venteig busquen qualsevol olor humana en suspensió a l\'aire (no necessiten mostra d\'olor ni segueixen rastre a terra), per això cal que no hi hagi altres persones a la zona.'
  },
  {
    topic: 2,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P54] D\'acord amb l\'article 11 de la Llei 1/1998, de 7 de gener, de política lingüística, quina afirmació descriu correctament les exigències de coneixement lingüístic del personal al servei de les administracions de Catalunya?',
    options: [
      'Ha de tenir un coneixement adequat i suficient del català, i en la selecció ha d\'acreditar el de les dues llengües oficials',
      'Ha de tenir un coneixement adequat i suficient del català, i en la selecció ha d\'acreditar el del català',
      'Ha de tenir un coneixement adequat i suficient de les dues llengües oficials, i en la selecció ha d\'acreditar el del català',
      'Ha de tenir un coneixement adequat i suficient de les dues llengües oficials, i en la selecció ha d\'acreditar el de totes dues'
    ],
    correctIndex: 2,
    explanation: 'L\'art. 11 de la Llei 1/1998 exigeix tenir un coneixement adequat i suficient de les dues llengües oficials, i en el procés de selecció s\'ha d\'acreditar el coneixement del català.'
  },
  {
    topic: 7,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P55] Després de patir tres inundacions en deu anys, un municipi travessat per una riera revisa la seva estratègia de gestió del risc per als pròxims anys. Quina mesura es considera l\'acció més important per reduir el risc d\'inundació?',
    options: [
      'La construcció de dics i basses de laminació, perquè frenen o emmagatzemen l\'aigua de manera temporal',
      'La construcció de dics i basses de laminació, perquè tenen un cost baix i gairebé no requereixen manteniment',
      'La cartografia de zones inundables i la regulació urbanística, perquè permeten avisar la població abans de cada episodi',
      'La cartografia de zones inundables i la regulació urbanística, perquè impedeixen construir en zones de risc'
    ],
    correctIndex: 3,
    explanation: 'La mesura preventiva més important per reduir el risc d\'inundació és la cartografia de zones inundables i la regulació urbanística que impedeix construir en zones inundables.'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P56] Davant d\'un bidó sense etiqueta que perd un líquid desconegut dins d\'un magatzem tancat, la dotació vol comprovar primer si l\'atmosfera conté gasos inflamables o li manca oxigen i, després, identificar el compost químic concret del producte. Quins detectors corresponen, per aquest ordre?',
    options: [
      'Uns tubs colorimètrics, i després unes tires reactives de pH',
      'Un detector de sensors catalítics i electroquímics, i després unes tires reactives de pH',
      'Un detector de sensors catalítics i electroquímics, i després un espectròmetre portàtil',
      'Uns tubs colorimètrics, i després un espectròmetre portàtil'
    ],
    correctIndex: 2,
    explanation: 'Els explosímetres/multigas fan servir sensors catalítics (LEL) i electroquímics (O₂, tòxics); per identificar el compost concret s\'utilitza un espectròmetre portàtil (FTIR/Raman).'
  },
  {
    topic: 7,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P57] Sobre el voluntariat de protecció civil a Catalunya, quina afirmació és FALSA?',
    options: [
      'Les associacions de voluntaris han de complir uns requisits per formar part del registre oficial de voluntariat',
      'El voluntariat depèn funcionalment de la Direcció General de Protecció Civil, i actua habitualment fora del seu municipi',
      'El voluntariat complementa els serveis d\'intervenció, sense substituir-los, amb una funció social i comunitària',
      'Entre les seves funcions hi ha el suport al control del risc en esdeveniments amb gran afluència de persones'
    ],
    correctIndex: 1,
    explanation: 'Les AVPC tenen àmbit municipal (actuen habitualment dins del seu propi municipi i depenen de l\'ajuntament), no actuen habitualment fora del seu municipi.'
  },
  {
    topic: 21,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P58] Apagant el foc d\'un contenidor de superfície, la dotació sospita que el contingut inclou olis i dissolvents. Quin agent és preferible aplicar-hi?',
    options: [
      'Aigua polvoritzada amb la línia de 25 mm, per refredar el contingut i controlar la flama',
      'Escuma d\'alta expansió, per omplir el contenidor i sufocar-ne el contingut',
      'Aigua a raig tens a curta distància, per arribar al fons del contingut',
      'Escuma de baixa o mitjana expansió, per una extinció més segura i estable'
    ],
    correctIndex: 3,
    explanation: 'Davant de líquids inflamables com olis o dissolvents, s\'ha d\'aplicar escuma de baixa o mitjana expansió per formar un mantell estable i segur.'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P59] Davant d\'un accident d\'autobús amb múltiples víctimes i una fuita massiva de gas, quan poden els bombers deixar passar els equips sanitaris cap a la zona afectada?',
    options: [
      'Després de comprovar la concentració del gas amb detectors portàtils',
      'Després d\'haver aturat la fuita amb les unitats de tancament de vàlvules',
      'Un cop delimitat el perímetre d\'exclusió al voltant de l\'autobús',
      'Un cop constituït el Centre de Comandament Avançat de l\'incident'
    ],
    correctIndex: 0,
    explanation: 'Els equips sanitaris no poden accedir a la zona mentre hi hagi atmosfera perillosa; cal comprovar prèviament amb detectors que la concentració de gas és segura.'
  },
  {
    topic: 19,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P60] Què determina quin terminal té prioritat per transmetre en una trucada de canal en mode xarxa, en les comunicacions per ràdio del Cos de Bombers?',
    options: [
      'La proximitat de cada terminal a l\'antena repetidora',
      'L\'ordre de pulsació o els permisos del terminal',
      'L\'ordre en què els terminals s\'han connectat al canal',
      'La potència d\'emissió de cada transceptor portàtil'
    ],
    correctIndex: 1,
    explanation: 'En mode xarxa (TETRA), la prioritat de transmissió (PTT) es gestiona per l\'ordre de pulsació i pels permisos/nivell de prioritat assignats al terminal.'
  },
  {
    topic: 20,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P61] D\'acord amb el Decret 276/2016, de 19 de juliol, de les funcions de guàrdia i del sistema de comandament dels serveis de prevenció, extinció d\'incendis i salvaments de la Generalitat de Catalunya, què és la Taula de recursos d\'intervenció (TRI)?',
    options: [
      'El document que recull la distribució inicial dels recursos operatius de la guàrdia de Catalunya',
      'El document que recull els recursos aliens sol·licitats per completar la resposta',
      'El document que recull l\'ajuda entre Sales de Control Territorial per completar la resposta',
      'El document que recull la distribució final dels recursos operatius de la guàrdia de Catalunya'
    ],
    correctIndex: 3,
    explanation: 'La TRI recull la distribució final i efectiva dels recursos operatius de la guàrdia de Catalunya un cop fetes les modificacions i reubicacions pertinents.'
  },
  {
    topic: 15,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P62] Amb el vehicle en marxa i en línia recta, quin diferencial d\'un vehicle pesant del Cos de Bombers es pot bloquejar fins a 40 km/h?',
    options: [
      'El diferencial anterior',
      'El diferencial posterior',
      'El diferencial central',
      'Qualsevol dels tres diferencials'
    ],
    correctIndex: 2,
    explanation: 'El bloqueig del diferencial central (longitudinals entre eixos) es pot connectar en marxa i en línia recta fins a uns 40 km/h, mentre que els transversals requereixen velocitats molt baixes o aturada.'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P63] Pel que fa a les característiques dels trens que condicionen la intervenció en un accident ferroviari, quina d\'aquestes afirmacions NO és certa?',
    options: [
      'El sistema de frenada actua sobre la locomotora, i és la seva retenció la que atura els vagons del comboi',
      'Si es trenca una connexió o hi ha una emergència, els frens solen activar-se sols i poden deixar la via bloquejada hores',
      'Molts marcs de portes, bastidors, sostres i terres són reforçats i costen de tallar amb cisalles',
      'Les portes governades des de la cabina poden quedar inutilitzades per deformacions, fallades elèctriques o bloquejos'
    ],
    correctIndex: 0,
    explanation: 'Fals: el sistema de frenada pneumàtic del tren actua sobre tots els vagons/cotxes del comboi simultàniament (no només sobre la locomotora).'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P64] Per passar en línia recta de 9 km/h a 81 km/h en 50 s, amb acceleració constant, quina força neta necessita un vehicle de 16.000 kg?',
    options: ['128 N', '384 N', '4.000 N', '6.400 N'],
    correctIndex: 3,
    explanation: 'v₀ = 9 / 3,6 = 2,5 m/s; v = 81 / 3,6 = 22,5 m/s. a = (22,5 - 2,5) / 50 = 0,4 m/s². F = m · a = 16.000 · 0,4 = 6.400 N.'
  },
  {
    topic: 10,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P65] Sota una atmosfera de nitrogen, sense oxigen, un foc de magnesi pot continuar cremant. Com s\'explica?',
    options: [
      'Que el nitrogen hi actua de comburent, i el magnesi reacciona directament amb aquest gas en lloc de l\'oxigen',
      'Que el nitrogen hi actua de diluent, i el magnesi crema amb l\'oxigen de la seva pròpia estructura',
      'Que el nitrogen hi és inert, i el magnesi crema amb l\'oxigen de la capa d\'òxid superficial',
      'Que el nitrogen hi és inert, i el magnesi crema amb l\'oxigen que reté adsorbit a la superfície'
    ],
    correctIndex: 0,
    explanation: 'A altes temperatures, el magnesi és tan reactiu que pot utilitzar el nitrogen (formant nitrur de magnesi, Mg₃N₂) o fins i tot el CO₂ i l\'aigua com a comburents.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P66] Mentre prepara l\'abatiment amb motoserra d\'un pi inestable que amenaça un camí veïnal, en quin ordre ha de fer els talls la dotació?',
    options: [
      'Primer el tall de la part oposada i després la falca, fins a separar-lo de la soca perquè no quedi penjat',
      'Primer la falca i després el tall oposat, deixant uns centímetres sense tallar com a frontissa',
      'Primer el tall de la part oposada i després la falca, deixant uns centímetres sense tallar com a frontissa',
      'Primer la falca i després el tall oposat, fins a separar-lo de la soca perquè no quedi penjat'
    ],
    correctIndex: 1,
    explanation: 'En l\'abatiment direccional amb motoserra es fa primer la falca de direcció (osca) i després el tall de caiguda pel costat oposat, deixant una frontissa de seguretat.'
  },
  {
    topic: 21,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 4 · P67] Dins la caixa d\'escala d\'un bloc de pisos on crema un habitatge del segon pis, el binomi que puja amb la línia veu que el fum s\'acumula a les plantes superiors. Com es gestiona la inspecció d\'aquestes plantes?',
    options: [
      'Fer-la abans d\'atacar el foc, perquè l\'escala fa de xemeneia i hi pot haver persones atrapades',
      'Deixar-la per al final de la ventilació, perquè el fum de l\'escala no indica que hi hagi persones',
      'Deixar-la per al final de la ventilació, perquè el fum impedeix fer-hi una recerca eficaç',
      'Fer-la un cop controlat l\'incendi de sota, perquè l\'escala fa de xemeneia i hi pot haver persones atrapades'
    ],
    correctIndex: 3,
    explanation: 'Primer cal controlar el focus d\'incendi per tallar la producció de fum i calor, i un cop controlat, inspeccionar les plantes superiors perquè l\'escala fa efecte xemeneia.'
  },
  {
    topic: 12,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P68] Durant 6 hores, un radiador elèctric amb una resistència de 46 Ω funciona connectat a 230 V. Quina energia consumeix?',
    options: ['1,15 kWh', '1,38 kWh', '6,9 kWh', '63,48 kWh'],
    correctIndex: 2,
    explanation: 'P = V² / R = 230² / 46 = 52.900 / 46 = 1.150 W = 1,15 kW. E = P · t = 1,15 kW · 6 h = 6,9 kWh.'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P69] Quan una càrrega fa girar un element al voltant del seu eix longitudinal, quin esforç hi apareix?',
    options: ['La torsió', 'El tallant', 'El vinclament', 'La compressió'],
    correctIndex: 0,
    explanation: 'La torsió és l\'esforç que tendeix a fer girar o retorçar les seccions d\'un element al voltant del seu eix longitudinal.'
  },
  {
    topic: 27,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 4 · P70] Després d\'extreure dues persones d\'un ascensor avariat en un edifici d\'oficines, la dotació en comprova l\'estat i veu que l\'aparell torna a funcionar amb normalitat. Quina decisió correspon sobre l\'ascensor?',
    options: [
      'Tornar-lo a posar en servei i avisar l\'empresa de manteniment',
      'Deixar-lo fora de servei fins que el revisi l\'empresa de manteniment',
      'Deixar-lo fora de servei fins que ho decideixin els responsables de l\'edifici',
      'Tornar-lo a posar en servei i avisar els responsables de l\'edifici'
    ],
    correctIndex: 1,
    explanation: 'Després d\'un rescat en ascensor avariat, encara que sembli funcionar, s\'ha de deixar sempre fora de servei i senyalitzat fins que el revisi l\'empresa de manteniment.'
  }
];
