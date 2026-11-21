/**
 * Banc de preguntes d'actualitat, notícies, actualitzacions normatives i cultura bombera
 * vinculades al temari SGO 2026 (40 preguntes).
 * S'utilitza com a Pregunta del Dia a la pantalla d'inici i com a fallback si no hi ha pregunta
 * generada per Gemini a Firestore (`dailyQuestions/actualitat/questions/{YYYY-MM-DD}`).
 */
export const DAILY_CURRENT_AFFAIRS_QUESTIONS = [
  {
    id: 'act-01',
    tag: 'Actualització Normativa · DGPEIS 2026',
    topicId: 'tema-7',
    topicLabel: 'Tema 7 · Guàrdia i Organigrama d\'Interior',
    newsTitle: 'El Decret 16/2026 crea la 8a Regió d\'Emergències (Pirineu) i la Divisió d\'Emergències Climàtiques',
    context: 'El Govern ha aprovat el Decret 16/2026 de reestructuració de la DGPEIS dins l\'estratègia Pla Bombers 2030 per adaptar el cos a l\'emergència climàtica i reforçar el territori pirinenc.',
    howItAffectsUs: 'Com a bombers, aproxima el comandament i la resposta a les comarques de muntanya; com a estudiants, el Tema 7 passa a tenir 8 Regions d\'Emergències (Pirineu s\'afegeix a les 7 anteriors) i nova estructura directiva.',
    question: 'Quina nova Regió d\'Emergències i quina nova Subdirecció General incorpora l\'estructura de la DGPEIS segons el Decret 16/2026?',
    options: [
      'La Regió d\'Emergències del Pirineu (8a regió) i la Subdirecció General d\'Assumptes Jurídics.',
      'La Regió d\'Emergències de les Terres de l\'Ebre i la Subdirecció General de Protecció Civil.',
      'La Regió d\'Emergències de la Catalunya Central i la Subdirecció General de Prevenció Forestal.',
      'La Regió d\'Emergències de l\'Alt Empordà i la Subdirecció General de Logística Operativa.'
    ],
    correctIndex: 0,
    explanation: 'El Decret 16/2026 crea la 8a Regió d\'Emergències (Pirineu) —que conviu amb Girona, Centre, M. Nord, M. Sud, Tarragona, Lleida i Terres de l\'Ebre— i la Subdirecció General d\'Assumptes Jurídics.'
  },
  {
    id: 'act-02',
    tag: 'Actualització Normativa · Nou RSCIEI 2025',
    topicId: 'tema-12',
    topicLabel: 'Tema 12 · Instal·lacions i Seguretat contra Incendis',
    newsTitle: 'Entra en vigor el nou RSCIEI (RD 164/2025) substituint el reglament del 2004',
    context: 'El Reial Decret 164/2025 (en vigor des del 10 de maig de 2025) renova després de més de 20 anys el Reglament de Seguretat contra Incendis en Establiments Industrials, unificant inspeccions periòdiques OCA cada 5 anys.',
    howItAffectsUs: 'En intervencions industrials trobarem BIEs i hidrants amb nous criteris hidràulics i millor coordinació amb el CTE DB-SI; a l\'examen, el vell RD 2267/2004 queda derogat i substituït pel RD 164/2025.',
    question: 'Quin canvi pràctic introdueix el nou RSCIEI (RD 164/2025) respecte a les inspeccions periòdiques obligatòries (OCA) dels establiments industrials?',
    options: [
      'Elimina totes les inspeccions periòdiques per als sectors de risc mitjà i alt.',
      'Tendeix a unificar un criteri general d\'inspecció periòdica cada 5 anys.',
      'Traspassa les inspeccions exclusivament als parcs de bombers voluntaris locals.',
      'Obliga a repetir la inspecció inicial cada 6 mesos en qualsevol nau industrial.'
    ],
    correctIndex: 1,
    explanation: 'El RD 164/2025 simplifica els terminis anteriors fragmentats per risc i estableix un criteri general d\'inspecció periòdica per OCA cada 5 anys, a més de modificar puntualment el RIPCI i el CTE DB-SI.'
  },
  {
    id: 'act-03',
    tag: 'Actualització Llei 5/1994 · DL 14/2025',
    topicId: 'tema-6',
    topicLabel: 'Tema 6 · Llei 5/1994 de Bombers i Protecció Civil',
    newsTitle: 'El Decret Llei 14/2025 modifica la Llei 5/1994 i crea l\'Escala de Suport',
    context: 'La modificació de la Llei 5/1994 mitjançant el DL 14/2025 adapta l\'estructura del Cos de Bombers amb una nova escala funcionarial tècnica i de gestió no operativa.',
    howItAffectsUs: 'Permet incorporar perfils especialitzats (tècnics de sala, operacions de vol, preventius forestals i logística) alliberant efectius operatius per al servei al carrer; pregunta molt probable al Bloc de Lleis (Tema 6).',
    question: 'Quina nova escala funcionarial crea el Decret Llei 14/2025 dins del Cos de Bombers de la Generalitat per a perfils com tècnics de sala, operacions de vol i logística?',
    options: [
      'L\'Escala Honorífica de Comandament Territorial.',
      'L\'Escala de Suport, juntament amb el complement de carrera professional horitzontal.',
      'L\'Escala Auxiliar de Protecció Civil Municipal.',
      'L\'Escala Tècnica de Prevenció Privada Externa.'
    ],
    correctIndex: 1,
    explanation: 'El DL 14/2025 modifica la Llei 5/1994 creant l\'Escala de Suport per a funcions tècniques i de gestió especialitzada i introduint la carrera professional horitzontal.'
  },
  {
    id: 'act-04',
    tag: 'Notícia · Transició Ecològica i Agents Extintors',
    topicId: 'tema-8',
    topicLabel: 'Tema 8 · Teoria del foc i agents extintors',
    newsTitle: 'La Unió Europea prohibeix progressivament les escumes fluorades amb PFAS',
    context: 'La transició ecològica en els serveis d\'extinció obliga a retirar les escumes AFFF tradicionals i substituir-les per escumògens F3 lliures de fluor.',
    howItAffectsUs: 'Canvia la manera de dosificar i aplicar escuma en incendis d\'hidrocarburs (els F3 tenen viscositat i drenatge diferents); al Tema 8 cal saber per què es retiren els PFAS i què són les escumes F3.',
    question: 'Per quin motiu principal la normativa europea restringeix progressivament l\'ús d\'escumògens amb compostos perfluoroalquilats (PFAS) en els serveis de bombers?',
    options: [
      'Perquè són contaminants persistents i bioacumulatius amb impacte greu sobre les aigües subterrànies i la salut.',
      'Perquè tenen un punt de congelació massa alt i no es poden utilitzar durant l\'hivern.',
      'Perquè augmenten la conductivitat elèctrica de l\'aigua en incendis de baixa tensió.',
      'Perquè no generen cap pel·lícula aquosa ni cap escuma estable sobre hidrocarburs líquids.'
    ],
    correctIndex: 0,
    explanation: 'Els PFAS («químics eterns») presents a les AFFF tradicionals no es degraden i contaminen aqüífers i l\'organisme humà; per això es substitueixen per escumes F3 (Fluorine-Free Foam).'
  },
  {
    id: 'act-05',
    tag: 'Actualitat · Polítiques d\'Igualtat i Accés',
    topicId: 'tema-4',
    topicLabel: 'Tema 4 · Igualtat i no-discriminació',
    newsTitle: 'Reserva de places per a dones a les convocatòries de Bombers de la Generalitat',
    context: 'Les darreres convocatòries d\'accés a l\'escala bàsica del Cos de Bombers incorporen mesures d\'acció positiva per corregir la infrarepresentació femenina al cos.',
    howItAffectsUs: 'Transforma progressivament la composició dels parcs i equips de treball; a l\'examen, el percentatge legal de reserva i els conceptes d\'acció positiva (Llei 19/2020 i Llei 17/2015) són clàssics.',
    question: 'Quin percentatge mínim i màxim de places pot reservar la Generalitat per a dones en les convocatòries d\'accés a la categoria de bomber/a segons la Llei 5/1994 modificada?',
    options: [
      'Un mínim del 10% i un màxim del 20% de les places convocades.',
      'Exactament el 50% de les places en totes les escales del cos.',
      'Un mínim del 25% i fins a un màxim del 40% de les places convocades.',
      'Un mínim del 15% sense cap límit màxim establert per llei.'
    ],
    correctIndex: 2,
    explanation: 'La Llei 5/1994 modificada estableix una reserva d\'entre el 25% i el 40% de les places per a dones que superin el procés selectiu fins a assolir l\'equilibri representatiu.'
  },
  {
    id: 'act-06',
    tag: 'Esdeveniment · Protecció Civil i Alertes Mòbils',
    topicId: 'tema-6',
    topicLabel: 'Tema 6 · Protecció Civil i 112',
    newsTitle: 'Activacions reals d\'ES-Alert durant episodis de DANA i emergències químiques',
    context: 'En episodis recents de pluges torrencials (INUNCAT) i incidències industrials a Catalunya, el CECAT ha enviat avisos massius directes als telèfons mòbils de la població.',
    howItAffectsUs: 'Millora l\'autoprotecció i el confinament abans o durant l\'arribada de les dotacions, reduint rescats evitables; en el temari de Protecció Civil s\'integra dins els sistemes d\'avís a la població.',
    question: 'Com s\'anomena el sistema d\'enviament massiu d\'alertes d\'emergència a telèfons mòbils mitjançant tecnologia Cell Broadcast operat des del CECAT?',
    options: [
      'RESCAT-SMS (a través de la xarxa TETRA exclusiva dels cossos operatius).',
      'ES-Alert (integrat a la Xarxa d\'Alerta Nacional i basat en Cell Broadcast).',
      'INFOCAT-Push (mitjançant l\'aplicació mòbil de Meteocat).',
      'PLASEQCAT-Radio (emissió per freqüència FM d\'emergència).'
    ],
    correctIndex: 1,
    explanation: 'ES-Alert empra Cell Broadcast per enviar avisos geolocalitzats a tots els mòbils d\'una àrea afectada sense necessitat d\'instal·lar cap app ni registrar-s\'hi.'
  },
  {
    id: 'act-07',
    tag: 'Actualitat Tecnològica · Vehicles Elèctrics',
    topicId: 'tema-24',
    topicLabel: 'Tema 24 · Salvament i accidents de trànsit',
    newsTitle: 'Nous protocols d\'intervenció en incendis i accidents amb bateries d\'ió-liti',
    context: 'L\'expansió dels vehicles elèctrics i sistemes d\'emmagatzematge d\'energia (BESS) planteja incendis amb embalaments tèrmics difícils d\'extingir.',
    howItAffectsUs: 'Exigeix identificar cablejat taronja (HV), usar càmera tèrmica per vigilar reignicions i preveure grans volums d\'aigua o contenció; molt preguntat als Temes 11, 23 i 24.',
    question: 'Quin fenomen crític es produeix quan una cel·la d\'una bateria d\'ió-liti s\'escalfa de manera incontrolada i genera gasos inflamables i calor en cadena?',
    options: [
      'Arc elèctric invers per corrent altern trifàsic d\'alta freqüència.',
      'Efecte Joule reversible per sobrecàrrega del diferencial general.',
      'Embalament tèrmic (thermal runaway), amb risc de reignició hores o dies després.',
      'Sublimació catòdica freda sense cap alliberament de calor ni gasos.'
    ],
    correctIndex: 2,
    explanation: 'El thermal runaway és una reacció exotèrmica autosostinguda que allibera gasos tòxics/inflamables (HF, H2, CO) i pot reactivar el foc molt després d\'aparentment extingit.'
  },
  {
    id: 'act-08',
    tag: 'Notícia · Unitat de Drons dels Bombers',
    topicId: 'tema-17',
    topicLabel: 'Tema 17 · Comunicacions i Tecnologia Operativa',
    newsTitle: 'La Unitat de Drons assoleix més de 25 aeronaus i 3 bases estratègiques a Catalunya',
    context: 'Amb bases a Cerdanyola del Vallès, Mollerussa i La Pera, la Unitat de Drons dels Bombers pot arribar a qualsevol punt de Catalunya en menys d\'una hora.',
    howItAffectsUs: 'Aporta visió tèrmica nocturna en incendis forestals, recerca de persones desaparegudes i reconeixement en estructures col·lapsades sense exposar efectius.',
    question: 'En quines tres bases territorials estratègiques es desplega la Unitat de Drons dels Bombers de la Generalitat per cobrir tot Catalunya en menys d\'una hora?',
    options: [
      'Barcelona, Tarragona i Vielha.',
      'Cerdanyola del Vallès, Mollerussa i La Pera.',
      'Sabadell, Reus i Olot.',
      'Manresa, Tortosa i Girona.'
    ],
    correctIndex: 1,
    explanation: 'Les tres bases estratègiques (Cerdanyola del Vallès, Mollerussa i La Pera) permeten desplegar aeronaus no tripulades amb càmeres tèrmiques i òptiques arreu del país en menys de 60 minuts.'
  },
  {
    id: 'act-09',
    tag: 'Actualitat · Renovació de Flota 2025-2026',
    topicId: 'tema-18',
    topicLabel: 'Tema 18 · Vehicles d\'intervenció en emergències',
    newsTitle: 'Renovació històrica de prop de 290 vehicles lleugers per a parcs i unitats especials',
    context: 'Els Bombers de la Generalitat han incorporat prop de 290 nous vehicles lleugers (4x4, unitats de comandament, furgons GRAE i forestals lleugeres), reforçant especialment els parcs de voluntaris.',
    howItAffectsUs: 'Millora la seguretat passiva, l\'ergonomia i la tracció en pista forestal o neu; al Tema 18 ajuda a situar la tipologia de vehicles lleugers i unitats de comandament/GRAE.',
    question: 'Quin tipus de flota ha experimentat una renovació de prop de 290 unitats entre 2025 i 2026 als Bombers de la Generalitat, reforçant especialment parcs de voluntaris i GRAE?',
    options: [
      'Exclusivament els camions autoescala articulats de 55 metres.',
      'La flota de vehicles lleugers (4x4, comandament, furgons GRAE i forestals lleugeres).',
      'Només les embarcacions d\'altura per a salvament marítim oceànic.',
      'Únicament els helicòpters bombarders pesants de gran capacitat.'
    ],
    correctIndex: 1,
    explanation: 'La renovació s\'ha centrat en prop de 290 vehicles lleugers (tot terrenys 4x4, unitats de comandament, logística i furgons de rescat de muntanya GRAE).'
  },
  {
    id: 'act-10',
    tag: 'Emergència Climàtica · Incendis de 6a Generació',
    topicId: 'tema-25',
    topicLabel: 'Tema 25 · Incendis forestals',
    newsTitle: 'Els incendis de 6a generació obliguen a combinar extinció i gestió del paisatge',
    context: 'Els grans incendis mediterranis dels darrers estius superen la capacitat d\'extinció directa i interactuen amb l\'atmosfera formant pirocumulonimbus.',
    howItAffectsUs: 'Com a bombers, imposa prioritzar la seguretat (OACEL), l\'anàlisi GRAF i les àrees d\'oportunitat; a l\'oposició, el comportament convectiu i la gestió preventiva són clau al Tema 25.',
    question: 'Quina característica defineix principalment els anomenats incendis forestals de 6a generació?',
    options: [
      'Són incendis exclusivament de subsòl que cremen arrels sense cap flama visible.',
      'Es produeixen únicament en alta muntanya per sobre dels 2.500 metres.',
      'Modifiquen la dinàmica atmosfèrica local generant pirocúmuls i tempestes de foc erràtiques.',
      'Tenen una velocitat de propagació sempre inferior als 50 metres per hora.'
    ],
    correctIndex: 2,
    explanation: 'Els incendis de 6a generació alliberen tanta energia que generen pirocumulonimbus, vents propis erràtics i focus secundaris a quilòmetres de distància.'
  },
  {
    id: 'act-11',
    tag: 'Cultura i Salut Laboral · Prevenció del Càncer',
    topicId: 'tema-3',
    topicLabel: 'Tema 3 · Prevenció de riscos laborals i EPI',
    newsTitle: 'L\'OMS/IARC classifica l\'exposició ocupacional dels bombers com a carcinogen grup 1',
    context: 'Els protocols moderns de descontaminació en calent i en fred s\'han convertit en una prioritat absoluta als parcs per reduir l\'absorció d\'hidrocarburs aromàtics policíclics (HAP).',
    howItAffectsUs: 'Canvia hàbits quotidians de guàrdia: no pujar EPIs bruts a cabina, fer descontaminació humida/seca al lloc i dutxar-se dins la primera hora; molt preguntat al Tema 3.',
    question: 'Quina mesura preventiva s\'aplica immediatament després d\'un incendi estructural per reduir l\'absorció dèrmica de substàncies cancerígenes (HAP)?',
    options: [
      'Ventilar l\'EPI dins la cabina del camió durant el trajecte de retorn al parc.',
      'Descontaminació inicial al lloc, retirada controlada de l\'EPI en bosses estances i dutxa ràpida.',
      'Rentar l\'EPI només un cop l\'any per no danyar la membrana impermeable interior.',
      'Retirar l\'ERA dins la zona calenta abans d\'iniciar la ventilació tàctica.'
    ],
    correctIndex: 1,
    explanation: 'La descontaminació al lloc, l\'embolcall estanc de l\'EPI brut fora de la cabina i la dutxa immediata redueixen dràsticament l\'exposició a HAP i partícules tòxiques.'
  },
  {
    id: 'act-12',
    tag: 'Actualitat · Formació a l\'ISPC',
    topicId: 'tema-2',
    topicLabel: 'Tema 2 · Funció Pública i Accés',
    newsTitle: 'Decret Llei perquè els aspirants en formació a l\'ISPC cobrin com a mínim l\'SMI',
    context: 'El Govern ha impulsat un decret llei per garantir que els alumnes dels cursos selectius d\'accés a cossos de seguretat i emergències percebin almenys el Salari Mínim Interprofessional.',
    howItAffectsUs: 'Afecta directament els opositors que superen les proves i fan l\'escola a l\'ISPC (funcionaris en pràctiques), millorant la conciliació i l\'equitat d\'accés.',
    question: 'Quina condició administrativa tenen les persones aspirants a bomber/a mentre realitzen el curs selectiu de formació a l\'ISPC?',
    options: [
      'Personal voluntari sense vinculació retribuïda ni cobertura de Seguretat Social.',
      'Funcionaris en pràctiques, amb dret a percebre les retribucions legalment establertes (mínim SMI).',
      'Personal laboral indefinit amb destinació definitiva ja adjudicada abans d\'aprovar.',
      'Contractats mercantils externs vinculats a cada consell comarcal.'
    ],
    correctIndex: 1,
    explanation: 'Durant la fase de curs selectiu i pràctiques a l\'ISPC, els aspirants són nomenats funcionaris en pràctiques i perceben les retribucions corresponents.'
  },
  {
    id: 'act-13',
    tag: 'Actualitat · Plaques Fotovoltaiques en Cobertes',
    topicId: 'tema-11',
    topicLabel: 'Tema 11 · Electricitat i risc elèctric',
    newsTitle: 'Increment d\'incendis en naus i habitatges amb instal·lacions fotovoltaiques',
    context: 'La proliferació de plaques solars en cobertes obliga els bombers a extremar la precaució amb els circuits de corrent continu (DC) que no s\'aturen en tallar el quadre general.',
    howItAffectsUs: 'En una intervenció, tallar el corrent altern de la companyia NO desactiva els cables que baixen dels panells fins a l\'inversor; pregunta molt freqüent al Tema 11 i 12.',
    question: 'Quin risc elèctric específic presenten les plaques fotovoltaiques durant un incendi en coberta tot i haver tallat el subministrament general de l\'edifici?',
    options: [
      'Els panells acumulen corrent altern de 20 kV fins i tot a les fosques absolutes.',
      'No presenten cap risc si s\'ha desconnectat el magnetotèrmic del quadre general.',
      'Continuen generant corrent continu (DC) fins a l\'inversor mentre reben llum solar o focus intensos.',
      'Generen gas metà a l\'interior dels conductes d\'aire condicionat.'
    ],
    correctIndex: 2,
    explanation: 'Mentre hi hagi llum sobre els mòduls fotovoltaics, els conductors en DC fins a l\'inversor (llevat que hi hagi tall a nivell de mòdul/string) romanen sota tensió.'
  },
  {
    id: 'act-14',
    tag: 'Cultura Europea · Mecanisme rescEU',
    topicId: 'tema-1',
    topicLabel: 'Tema 1 · Constitució, Estatut i Unió Europea',
    newsTitle: 'Mobilitzacions del Mecanisme Europeu de Protecció Civil (rescEU) en grans catàstrofes',
    context: 'Davant d\'incendis forestals extrems i inundacions a Europa, la UE activa la reserva rescEU per enviar avions amfibis, equips USAR i mòduls d\'emergència entre països.',
    howItAffectsUs: 'Explica com arriben reforços internacionals quan un estat se satura i com unitats catalanes/espanyoles també col·laboren fora; cultura general d\'emergències i marc UE.',
    question: 'Com s\'anomena la reserva estratègica europea de mitjans d\'emergència (avions amfibis, hospitals de campanya, equips USAR) finançada per la Unió Europea?',
    options: [
      'Frontex-Fire (dependent de l\'Agència de Fronteres).',
      'rescEU (dins del Mecanisme de Protecció Civil de la Unió).',
      'EUROPOL-Rescue.',
      'Eurocorps Civil.'
    ],
    correctIndex: 1,
    explanation: 'rescEU reforça el Mecanisme de Protecció Civil de la UE amb una flota i reserva de recursos estratègics per assistir estats membres desbordats.'
  },
  {
    id: 'act-15',
    tag: 'Actualitat · Nou Reglament de Bombers Voluntaris',
    topicId: 'tema-6',
    topicLabel: 'Tema 6 · Llei 5/1994 de Bombers',
    newsTitle: 'Actualització del Reglament de Bombers Voluntaris de la Generalitat',
    context: 'El nou reglament agilitza l\'accés als parcs de bombers voluntaris, valorant mèrits i arrelament territorial i estructurant la formació en nivells d\'acreditació graduals.',
    howItAffectsUs: 'A Catalunya el model mixt (funcionaris + voluntaris) és essencial per cobrir el territori rural; cal conèixer el seu règim legal dins la Llei 5/1994.',
    question: 'Segons la Llei 5/1994, quina naturalesa jurídica tenen els bombers voluntaris de la Generalitat de Catalunya?',
    options: [
      'Són funcionaris de carrera del subgrup C1 amb dedicació exclusiva de 24 hores.',
      'Presten serveis de manera altruista i voluntària, sense vinculació funcionarial ni laboral remunerada.',
      'Són personal contractat per empreses privades de seguretat subcontractades.',
      'Només poden actuar en tasques administratives sense sortir mai a emergències.'
    ],
    correctIndex: 1,
    explanation: 'Els bombers voluntaris col·laboren de forma altruista en els parcs de bombers voluntaris, amb dret a compensació de despeses i cobertura d\'assegurances, integrats operativament al cos.'
  },
  {
    id: 'act-16',
    tag: 'Actualitat · Comunicacions Crítiques RESCAT',
    topicId: 'tema-17',
    topicLabel: 'Tema 17 · Comunicacions per ràdio',
    newsTitle: 'Interoperabilitat de tots els cossos d\'emergència catalans a la xarxa RESCAT',
    context: 'Bombers, Mossos d\'Esquadra, SEM i Agents Rurals comparteixen grups de conversa coordinats a la xarxa digital TETRA RESCAT.',
    howItAffectsUs: 'Permet coordinar un accident múltiple o un gran incendi forestal en temps real entre cossos; al Tema 17 és clau dominar TMO vs DMO i els protocols de transmissió.',
    question: 'Quina xarxa de radiocomunicacions utilitzen de forma compartida els Bombers de la Generalitat, Mossos d\'Esquadra, SEM i Agents Rurals a Catalunya?',
    options: [
      'La xarxa XALOC-5G (només d\'ús comercial).',
      'La xarxa SIRDEE exclusiva dels cossos estatals.',
      'La xarxa RESCAT (basada en tecnologia digital TETRA).',
      'La xarxa DMR-Lliure sense xifratge de veu.'
    ],
    correctIndex: 2,
    explanation: 'RESCAT (Xarxa de Radiocomunicacions d\'Emergències i Seguretat de Catalunya) opera sota estàndard TETRA amb xifratge i grups multiagència.'
  },
  {
    id: 'act-17',
    tag: 'Actualitat · Risc Químic a Tarragona i Catalunya',
    topicId: 'tema-27',
    topicLabel: 'Tema 27 · Risc químic i mercaderies perilloses',
    newsTitle: 'Gestió diferenciada del risc químic: PLASEQTA a Tarragona i PLASEQCAT a la resta',
    context: 'La recuperació del PLASEQTA específic per al complex petroquímic de Tarragona va reforçar la direcció de proximitat i els sensors perimetrals d\'alerta química.',
    howItAffectsUs: 'En emergències químiques a Catalunya determina quin pla s\'activa i quins protocols de confinament s\'apliquen; tema recurrent tant a Bàsica com a Promoció Interna.',
    question: 'Quin pla especial de Protecció Civil de Catalunya s\'activa davant accidents greus en establiments amb substàncies perilloses fora del sector químic de Tarragona?',
    options: [
      'El PROCICAT (exclusiu per a risc químic industrial).',
      'El PLASEQCAT (mentre que el PLASEQTA és específic per al sector químic de Tarragona).',
      'El CAMCAT (exclusiu per a contaminació atmosfèrica urbana).',
      'El NEUCAT (per a vessaments de mercaderies perilloses al mar).'
    ],
    correctIndex: 1,
    explanation: 'El PLASEQTA cobreix específicament el sector químic de Tarragona i el PLASEQCAT la resta de Catalunya.'
  },
  {
    id: 'act-18',
    tag: 'Cultura Institucional · Estatut d\'Autonomia',
    topicId: 'tema-1',
    topicLabel: 'Tema 1 · Constitució i Estatut d\'Autonomia',
    newsTitle: 'El marc competencial de la Generalitat en protecció civil i extinció d\'incendis',
    context: 'L\'article 132 de l\'Estatut d\'Autonomia de Catalunya (2006) blinda l\'autogovern en matèria de protecció civil i serveis de prevenció i extinció d\'incendis.',
    howItAffectsUs: 'Fonamenta l\'existència mateixa del Cos de Bombers de la Generalitat i la Llei 5/1994; pregunta clàssica al Tema 1.',
    question: 'Segons l\'article 132 de l\'Estatut d\'Autonomia de Catalunya (2006), quin tipus de competència té la Generalitat en matèria de protecció civil i prevenció i extinció d\'incendis?',
    options: [
      'Competència merament consultiva sense potestat reglamentària.',
      'Competència transferida temporalment per reial decret cada legislatura.',
      'Competència exclusiva (en el marc de la seguretat pública i l\'organització dels serveis propis).',
      'Competència exclusiva de l\'Estat amb execució delegada només als ajuntaments.'
    ],
    correctIndex: 2,
    explanation: 'L\'art. 132 EAC atorga a la Generalitat la competència exclusiva en protecció civil, regulació, planificació, coordinació i execució dels serveis d\'extinció.'
  },
  {
    id: 'act-19',
    tag: 'Cultura Territorial · Agrupacions de Defensa Forestal',
    topicId: 'tema-25',
    topicLabel: 'Tema 25 · Incendis forestals',
    newsTitle: 'Col·laboració entre Bombers, Agents Rurals i ADF en campanya forestal',
    context: 'Més de 300 Agrupacions de Defensa Forestal (ADF) arreu de Catalunya donen suport en vigilància, primers atacs i camins forestals.',
    howItAffectsUs: 'A guàrdia, saber com s\'integren les ADF dins l\'INFOCAT evita conflictes de seguretat i optimitza l\'abastament d\'aigua; a l\'examen surt sovint al bloc de forestals i protecció civil.',
    question: 'Quin paper tenen les Agrupacions de Defensa Forestal (ADF) en la prevenció i l\'extinció d\'incendis forestals a Catalunya?',
    options: [
      'Són unitats militars estatals desplegades permanentment als parcs de bombers voluntaris.',
      'Són associacions de propietaris, municipis i voluntaris que donen suport en prevenció, vigilància i primera intervenció.',
      'Són organismes dependents exclusivament del Ministeri sense vinculació municipal.',
      'Tenen competència exclusiva en la investigació judicial de les causes dels incendis.'
    ],
    correctIndex: 1,
    explanation: 'Les ADF col·laboren en tasques preventives, vigilància i suport logístic o primera intervenció integrades sota la coordinació operativa de Bombers.'
  },
  {
    id: 'act-20',
    tag: 'Cultura Jurídica · Transparència i Dret d\'Accés',
    topicId: 'tema-2',
    topicLabel: 'Tema 2 · Funció Pública i Administració',
    newsTitle: 'Aplicació de la Llei 19/2014 de transparència en les administracions catalanes',
    context: 'Qualsevol ciutadà o opositor pot sol·licitar informació pública (actes, dades de convocatòries, informes) a l\'empara de la Llei 19/2014.',
    howItAffectsUs: 'Com a empleats públics hem de conèixer els terminis de resposta i límits de protecció de dades; pregunta habitual als temes jurídics.',
    question: 'Quin és el termini general perquè l\'Administració resolgui una sol·licitud d\'accés a la informació pública segons la Llei 19/2014 de Catalunya?',
    options: [
      'Deu dies hàbils improrrogables.',
      'Tres mesos amb silenci administratiu sempre desestimatori.',
      'Un mes (ampliable excepcionalment a un mes més per volum o complexitat).',
      'Quaranta-vuit hores en tots els casos.'
    ],
    correctIndex: 2,
    explanation: 'La Llei 19/2014 fixa un termini general d\'1 mes (prorrogable 1 mes més en casos complexos), amb silenci positiu com a regla general.'
  },
  {
    id: 'act-21',
    tag: 'Cultura Històrica · Orígens dels Bombers a Catalunya',
    topicId: 'tema-6',
    topicLabel: 'Tema 6 · Història i Llei 5/1994 de Bombers',
    newsTitle: 'De les antigues companyies de bombers municipals al Cos de Bombers de la Generalitat (1980)',
    context: 'El Cos de Bombers de la Generalitat es va constituir el 1980 integrant els antics cossos provincials i municipals, i es va consolidar legalment amb la Llei 5/1994.',
    howItAffectsUs: 'Ajuda a entendre per què a Catalunya coexisteixen Bombers de la Generalitat i Bombers de Barcelona (municipi > 20.000 hab. amb cos propi històric).',
    question: 'Quin municipi de Catalunya manté un cos de bombers propi i independent del Cos de Bombers de la Generalitat de Catalunya?',
    options: [
      'Girona, per ser capital de vegueria fronterera.',
      'Tarragona, a causa del polígon petroquímic.',
      'Barcelona (Servei de Prevenció, Extinció d\'Incendis i Salvament de Barcelona).',
      'Lleida, per la gestió dels incendis agrícoles de Ponent.'
    ],
    correctIndex: 2,
    explanation: 'Barcelona disposa del seu propi cos municipal (Bombers de Barcelona), mentre que la resta del territori català és cobert pels Bombers de la Generalitat (amb col·laboració de bombers d\'empresa en determinats recintes).'
  },
  {
    id: 'act-22',
    tag: 'Actualitat · Incendis en Façanes Ventilades',
    topicId: 'tema-15',
    topicLabel: 'Tema 15 · Construcció i comportament estructural',
    newsTitle: 'Lliçons apreses d\'incendis recents en façanes amb revestiment combustible',
    context: 'Incendis de gran impacte mediàtic en edificis residencials moderns (com València o Londres) han posat el focus en les cambres ventilades i panells tipus composite (ACM).',
    howItAffectsUs: 'En façanes ventilades el foc puja per efecte xemeneia fora de l\'abast de la sectorització interior; al Tema 15 i 23 cal dominar la propagació vertical per façana.',
    question: 'Per quin mecanisme es propaga amb extrema rapidesa un incendi en una façana ventilada amb revestiment o aïllament combustible?',
    options: [
      'Per conducció lenta a través de les bigues de formigó armat sense circulació d\'aire.',
      'Per efecte xemeneia dins la cambra d\'aire vertical entre l\'aïllament i el revestiment exterior.',
      'Exclusivament per descàrregues electrostàtiques entre les finestres d\'alumini.',
      'Per filtració capil·lar d\'aigua de pluja dins els pilars metàl·lics.'
    ],
    correctIndex: 1,
    explanation: 'La cambra d\'aire contínua de la façana ventilada actua com una xemeneia vertical que accelera les flames cap amunt, saltant la sectorització entre plantes.'
  },
  {
    id: 'act-23',
    tag: 'Actualitat · Telèfon Únic d\'Emergències 112',
    topicId: 'tema-6',
    topicLabel: 'Tema 6 · Protecció Civil i 112',
    newsTitle: 'El CAT112 integra localització avançada AML per situar trucades amb precisió mètrica',
    context: 'La tecnologia Advanced Mobile Location (AML) envia automàticament les coordenades GPS/Wi-Fi del telèfon mòbil al 112 en el moment de fer la trucada d\'emergència.',
    howItAffectsUs: 'Redueix dràsticament el temps de recerca de persones perdudes a la muntanya o en accidents en carreteres secundàries sense referència quilomètrica.',
    question: 'Què permet la tecnologia AML (Advanced Mobile Location) integrada al telèfon d\'emergències 112 a Catalunya?',
    options: [
      'Enviar automàticament la ubicació precisa del telèfon mòbil al centre 112 durant la trucada.',
      'Activar la sirena dels vehicles de bombers des del telèfon de l\'alertant.',
      'Substituir la xarxa TETRA RESCAT per xarxes socials públiques.',
      'Bloquejar totes les trucades comercials durant 24 hores a tota la comarca.'
    ],
    correctIndex: 0,
    explanation: 'L\'AML activa automàticament GPS/Wi-Fi del mòbil quan es marca el 112 i transmet les coordenades exactes al CAT112.'
  },
  {
    id: 'act-24',
    tag: 'Ciència Aplicada · Hidrogen Verd i Mobilitat',
    topicId: 'tema-10',
    topicLabel: 'Tema 10 · Química del foc i gasos',
    newsTitle: 'Autobusos i flotes pesants d\'hidrogen (H2) en circulació urbana',
    context: 'Cada cop més ciutats i rutes de transport incorporen vehicles de pila de combustible d\'hidrogen emmagatzemat a 350 o 700 bar.',
    howItAffectsUs: 'La flama d\'hidrogen és pràcticament invisible a plena llum del dia i el gas és molt lleuger i inflamable en un rang amplíssim (4%–75%); vital per a càmera tèrmica i perímetres.',
    question: 'Quina característica fa especialment perillosa una fuita incendiada d\'hidrogen (H2) a pressió respecte a altres gasos combustibles?',
    options: [
      'Que l\'hidrogen és molt més pesant que l\'aire i s\'acumula sempre als claveguerams.',
      'Que crema amb una flama gairebé invisible a la llum del dia i té un rang d\'inflamabilitat molt ampli (4%–75%).',
      'Que té un punt d\'ebullició superior als 200 °C a pressió atmosfèrica.',
      'Que no pot encendre\'s mai si la humitat ambiental supera el 40%.'
    ],
    correctIndex: 1,
    explanation: 'L\'hidrogen té un rang d\'inflamabilitat amplíssim (4%–75%), una energia d\'ignició mínima molt baixa i una flama pàl·lida gairebé invisible de dia (cal càmera tèrmica).'
  },
  {
    id: 'act-25',
    tag: 'Actualitat · Meteorologia Extrema i DANA',
    topicId: 'tema-21',
    topicLabel: 'Tema 21 · Salvament en inundacions i riuades',
    newsTitle: 'Episodis de pluges torrencials (DANA) i risc en rieres i passos subterranis',
    context: 'Les pluges convectives estacionàries superen sovint els 100–200 mm en poques hores, convertint rieres seques en torrents en qüestió de minuts.',
    howItAffectsUs: 'La majoria de víctimes mortals en inundacions es produeixen dins de vehicles arrossegats; cal recordar que 30–40 cm d\'aigua en moviment ja poden arrossegar un turisme.',
    question: 'A partir de quina alçada aproximada d\'aigua en moviment pot perdre adherència i ser arrossegat un vehicle turisme convencional en una rierada?',
    options: [
      'Únicament a partir de 2,5 metres de profunditat quan cobreix tot el sostre.',
      'Amb només 30 a 40 centímetres d\'aigua en moviment ja pot surar i ser arrossegat.',
      'Només quan l\'aigua supera els 1,8 metres en zones d\'autopista.',
      'Un turisme de més de 1.500 kg no pot ser arrossegat mai per aigua dolça.'
    ],
    correctIndex: 1,
    explanation: 'Per principi d\'Arquimedes i força hidrodinàmica, uns 30 cm d\'aigua corrent fan surar o arrosseguen un turisme convencional.'
  },
  {
    id: 'act-26',
    tag: 'Cultura Jurídica · Drets Lingüístics',
    topicId: 'tema-5',
    topicLabel: 'Tema 5 · Política Lingüística (Llei 1/1998)',
    newsTitle: 'Atenció al ciutadà en català, castellà i aranès dins dels serveis d\'emergència',
    context: 'La Llei 1/1998 de política lingüística garanteix el dret de la ciutadania a ser atesa en la llengua oficial que escolli davant l\'Administració catalana.',
    howItAffectsUs: 'Tant a les sales de control i atenció pública com a les proves d\'accés a Bombers, el coneixement del català (nivell C1/B2 segons convocatòria) i el règim d\'oficialitat és requisit essencial.',
    question: 'Segons la Llei 1/1998 de política lingüística, quina és la llengua pròpia de Catalunya i d\'ús normal i preferent de les administracions públiques catalanes?',
    options: [
      'El castellà com a única llengua de tràmit administratiu.',
      'El català (i l\'aranès a la Val d\'Aran en el seu àmbit territorial).',
      'El francès en tots els municipis fronterers del Pirineu.',
      'L\'anglès com a llengua vehicular de les comunicacions d\'emergència.'
    ],
    correctIndex: 1,
    explanation: 'La Llei 1/1998 estableix el català com a llengua pròpia de Catalunya i d\'ús normal i preferent de les administracions, garantint els drets lingüístics dels ciutadans.'
  },
  {
    id: 'act-27',
    tag: 'Actualitat Operativa · Unitats Especials GRAE',
    topicId: 'tema-19',
    topicLabel: 'Tema 19 · Rescat en muntanya i medi natural',
    newsTitle: 'Rècord d\'actuacions del GRAE en rescats al medi natural durant caps de setmana',
    context: 'L\'auge del senderisme, l\'esquí de muntanya i els esports d\'aventura ha incrementat notablement els serveis del Grup d\'Actuacions Especials (GRAE).',
    howItAffectsUs: 'Les dotacions de parc sovint donen el primer suport terrestre mentre arriba l\'helicòpter del GRAE; cal conèixer les zones d\'aproximació segura a l\'aeronau.',
    question: 'Com s\'anomena el grup especialitzat dels Bombers de la Generalitat encarregat dels rescats en muntanya, coves, barrancs i medi aquàtic complex?',
    options: [
      'GRAF (Grup de Recolzament d\'Actuacions Forestals).',
      'GRAE (Grup d\'Actuacions Especials).',
      'GRIT (Grup d\'Intervenció en Túnels).',
      'GES (Grup d\'Emergències Sanitàries).'
    ],
    correctIndex: 1,
    explanation: 'El GRAE (Grup d\'Actuacions Especials, incloent-hi el GRAE Subaquàtic) executa rescats tècnics en medi natural, muntanya, espeleologia i aigües.'
  },
  {
    id: 'act-28',
    tag: 'Cultura Científica · Monòxid de Carboni (CO)',
    topicId: 'tema-10',
    topicLabel: 'Tema 10 · Química i gasos tòxics',
    newsTitle: 'Campanyes hivernals de prevenció d\'intoxicacions per brasers i calderes en mal estat',
    context: 'Cada tardor-hivern els bombers atenen avisos per intoxicació per monòxid de carboni (CO), anomenat «l\'assassí silenciós» per ser inodor i incolor.',
    howItAffectsUs: 'Cal portar sempre detector multigàs en reconeixements d\'habitatge tancat sense incendi visible; el CO té una afinitat per l\'hemoglobina ~200–250 vegades superior a l\'O2.',
    question: 'Per quin motiu el monòxid de carboni (CO) és especialment perillós per a les víctimes i els intervinents en espais poc ventilats?',
    options: [
      'Perquè té una olor molt picant d\'ous podrits que paralitza el diafragma.',
      'Perquè és incolor i inodor, i s\'uneix a l\'hemoglobina amb una afinitat ~240 vegades superior a l\'oxigen.',
      'Perquè és 5 vegades més pesant que l\'aire i es solidifica a temperatura ambient.',
      'Perquè reacciona explosivament amb el nitrogen atmosfèric a 20 °C.'
    ],
    correctIndex: 1,
    explanation: 'El CO forma carboxihemoglobina impedint el transport d\'oxigen als teixits; a més té una densitat similar a l\'aire (0,97) i és inflamable (12,5%–74%).'
  },
  {
    id: 'act-29',
    tag: 'Actualitat · Ventilació Tàctica i Control de Flux',
    topicId: 'tema-23',
    topicLabel: 'Tema 23 · Incendis d\'interior',
    newsTitle: 'Consolidació de la doctrina de control de flux i ventilació antiventilació en incendis d\'interior',
    context: 'Els estudis experimentals d\'UL FSRI han transformat la tàctica moderna demostrant com el control de portes redueix dràsticament el creixement del foc.',
    howItAffectsUs: 'Tancar portes darrere el binomi i controlar l\'obertura de finestres evita aportar oxigen abans de tenir aigua carregada; fonamental al Tema 23.',
    question: 'Quin efecte té tancar la porta d\'un compartiment incendiat (aïllament / control de flux) abans que arribi l\'aigua en llança?',
    options: [
      'Augmenta immediatament la potència calorífica del foc per compressió.',
      'Limita l\'aportació d\'oxigen al focus i frena la propagació del fum i la calor cap a la resta de l\'edifici.',
      'Provoca la destrucció instantània dels murs mestres de formigó armat.',
      'Impedeix que funcioni la bomba centrífuga del vehicle autobomba.'
    ],
    correctIndex: 1,
    explanation: 'Limitar el flux d\'aire (tancar la porta) fa caure la taxa d\'alliberament de calor en focs limitats per ventilació i protegeix les vies d\'evacuació.'
  },
  {
    id: 'act-30',
    tag: 'Cultura Sanitària · RCP i Desfibril·ladors (DEA)',
    topicId: 'tema-29',
    topicLabel: 'Tema 29 · Assistència sanitària',
    newsTitle: 'Dotació universal de DEA als vehicles de bombers per a primera resposta en aturada cardiorespiratòria',
    context: 'Sovint les dotacions de bombers arriben abans que l\'ambulància en domicilis o via pública, actuant com a primers intervinents en suport vital bàsic.',
    howItAffectsUs: 'Cada minut sense RCP ni desfibril·lació redueix un 7–10% la supervivència; al Tema 29 cal dominar la relació 30:2 i l\'ús segur del DEA.',
    question: 'En un adult en aturada cardiorespiratòria, quina relació de compressions toràciques i ventilacions estableixen les guies vigents de Suport Vital Bàsic?',
    options: [
      '15 compressions i 2 ventilacions a 60 compressions/minut.',
      '30 compressions i 2 ventilacions a un ritme de 100–120 compressions/minut.',
      '5 compressions i 1 ventilació a 80 compressions/minut.',
      '50 compressions i 5 ventilacions sense interrupció per DEA.'
    ],
    correctIndex: 1,
    explanation: 'Les guies ERC de SVB en adults estableixen 30 compressions toràciques (5–6 cm de profunditat, 100–120/min) seguides de 2 ventilacions de rescat.'
  },
  {
    id: 'act-31',
    tag: 'Actualitat · Cremes Prescrites i Pasturatge (GRAF)',
    topicId: 'tema-25',
    topicLabel: 'Tema 25 · Incendis forestals',
    newsTitle: 'Cremes prescrites a l\'hivern i primavera per reduir combustible en zones estratègiques',
    context: 'Fora de l\'època d\'alt risc, el GRAF executa cremes prescrites controlades en punts estratègics de gestió per trencar la continuïtat del sotabosc.',
    howItAffectsUs: 'Permet als equips entrenar el comportament del foc en condicions segures i facilita la defensa de nuclis urbans a l\'estiu.',
    question: 'Quin objectiu principal tenen les cremes prescrites realitzades fora de campanya d\'estiu pels equips forestals?',
    options: [
      'Eliminar tota la fauna salvatge d\'un parc natural abans de la primavera.',
      'Reduir selectivament la càrrega de combustible fi i el sotabosc sota paràmetres meteorològics controlats.',
      'Provar la potència màxima de les bombes forestals en zones asfaltades.',
      'Substituir la reforestació natural per urbanitzacions de baixa densitat.'
    ],
    correctIndex: 1,
    explanation: 'La crema prescrita aplica foc de baixa intensitat dins d\'una finestra meteorològica estricta per reduir combustible i crear discontinuitats estratègiques.'
  },
  {
    id: 'act-32',
    tag: 'Cultura Tècnica · Hidràulica i Pèrdues de Càrrega',
    topicId: 'tema-13',
    topicLabel: 'Tema 13 · Hidràulica i bombes',
    newsTitle: 'Optimització de cabals en mànegues de 25 mm i 45 mm en edificis en alçada',
    context: 'L\'ús de llances automàtiques i regulables de baix pressió (6–7 bar en bomba) permet mantenir cabals efectius reduint la fatiga del binomi.',
    howItAffectsUs: 'Reduir el diàmetre de mànega a la meitat multiplica exponencialment les pèrdues de càrrega; pregunta fixa de càlcul al Tema 13.',
    question: 'Si es duplica el cabal d\'aigua que circula per una mateixa mànega d\'incendis, què passa aproximadament amb la pèrdua de càrrega per fregament?',
    options: [
      'Es redueix a la meitat per efecte de la velocitat.',
      'Es manté exactament igual si la bomba gira a les mateixes revolucions.',
      'Es multiplica per quatre (augmenta amb el quadrat del cabal).',
      'Només augmenta un 10% en mànegues de 25 mm.'
    ],
    correctIndex: 2,
    explanation: 'La pèrdua de càrrega és proporcional al quadrat del cabal (J ∝ Q²): duplicar el cabal multiplica per 4 les pèrdues de càrrega.'
  },
  {
    id: 'act-33',
    tag: 'Actualitat · Normativa de Plans d\'Autoprotecció',
    topicId: 'tema-6',
    topicLabel: 'Tema 6 · Protecció Civil (Decret 30/2015)',
    newsTitle: 'Digitalització dels PAU a la plataforma Hermes de Protecció Civil',
    context: 'Grans esdeveniments, càmpings, hospitals i indústries tramiten els seus Plans d\'Autoprotecció a través del registre telemàtic Hermes.',
    howItAffectsUs: 'Permet als bombers consultar ràpidament accessos, hidrants interns i riscos d\'un establiment abans d\'arribar-hi.',
    question: 'Cada quants anys s\'ha de revisar com a màxim un Pla d\'Autoprotecció (PAU) homologat segons el Decret 30/2015?',
    options: [
      'Cada 10 anys des de la seva inscripció inicial.',
      'Cada 4 anys (o abans si hi ha modificacions substancials).',
      'Cada 6 mesos de manera presencial al parc de bombers.',
      'No caduca mai un cop presentat al registre municipal.'
    ],
    correctIndex: 1,
    explanation: 'L\'art. 11 del Decret 30/2015 estableix una revisió màxima cada 4 anys i l\'obligació de realitzar simulacres periòdics.'
  },
  {
    id: 'act-34',
    tag: 'Cultura General · Cartografia i Sistema UTM',
    topicId: 'tema-14',
    topicLabel: 'Tema 14 · Cartografia i orientació',
    newsTitle: 'Ús universal de coordenades UTM (ED50/ETRS89) per a helicòpters i unitats terrestres',
    context: 'Catalunya es troba gairebé íntegrament al fus UTM 31T (Datum ETRS89), fet que permet coordinar aeronaus del GRAE i dotacions terrestres sense ambigüitats.',
    howItAffectsUs: 'Donar una coordenada UTM errònia pot desviar un helicòpter quilòmetres; al Tema 14 és essencial saber llegir fus, zona i escala.',
    question: 'En quin fus UTM i banda de latitud (MGRS) se situa gairebé tot el territori de Catalunya en la cartografia operativa dels Bombers?',
    options: [
      'Fus 29T.',
      'Fus 30S.',
      'Fus 31T (amb una petita franja occidental al 30T).',
      'Fus 33N.'
    ],
    correctIndex: 2,
    explanation: 'Catalunya correspon principalment al fus UTM 31, banda T (31T), amb datum oficial ETRS89.'
  },
  {
    id: 'act-35',
    tag: 'Actualitat · Risc en Túnels i Mobilitat Sostenible',
    topicId: 'tema-23',
    topicLabel: 'Tema 23 · Incendis en infraestructures i túnels',
    newsTitle: 'Simulacres anuals obligatoris en túnels de la xarxa transeuropea i catalana',
    context: 'Els túnels viaris i ferroviaris realitzen simulacres periòdics amb Bombers, SEM i gestors per provar galeries d\'evacuació, columnes seques i ventilació.',
    howItAffectsUs: 'En un túnel, la visibilitat cau a zero en segons; cal avançar amb càmera tèrmica, ràdio en mode DMO i respectant la ventilació.',
    question: 'En un incendi dins d\'un túnel viari amb persones atrapades, quin és el principal perill mortal immediat per als ocupants dels vehicles?',
    options: [
      'La congelació per ventilació forçada a temperatura ambient.',
      'La inhalació de fum tòxic i la pèrdua total de visibilitat que impedeix trobar les sortides d\'emergència.',
      'L\'augment de la pressió atmosfèrica per sobre de 5 atmosferes.',
      'La caiguda de la catenària de 25 kV en túnels exclusivament de vehicles dièsel.'
    ],
    correctIndex: 1,
    explanation: 'El fum tòxic i l\'opacitat absoluta són la primera causa de mortalitat en túnels; per això és vital l\'autoevacuació ràpida cap a les galeries protegides.'
  },
  {
    id: 'act-36',
    tag: 'Cultura Física · Gasos Liquats del Petroli (GLP)',
    topicId: 'tema-9',
    topicLabel: 'Tema 9 · Física i mecànica dels fluids',
    newsTitle: 'Precaucions en aparcaments subterranis amb vehicles autogàs (GLP)',
    context: 'Els vehicles propulsats per GLP (propà/butà) transporten dipòsits pressuritzats que, en cas de fuita en un soterrani, acumulen gas pesant arran de terra.',
    howItAffectsUs: 'A diferència del metà (GNC, més lleuger que l\'aire), el GLP té densitat > 1,5 respecte l\'aire i s\'embassa en fossats i plantes baixes.',
    question: 'Cap on tendeix a acumular-se una fuita de gas propà o butà (GLP) en un aparcament subterrani sense ventilació forçada?',
    options: [
      'Cap al sostre, perquè té una densitat molt inferior a la de l\'aire.',
      'Arran de terra i a les zones més baixes (fossats, desaigües), perquè és més dens que l\'aire.',
      'Es dissol instantàniament en l\'aire sense formar mai bosses explosives.',
      'Puja verticalment fins a la coberta de l\'edifici sense barrejar-se.'
    ],
    correctIndex: 1,
    explanation: 'El propà (~1,5) i el butà (~2,0) són més pesants que l\'aire i s\'acumulen a nivell de terra, generant risc d\'explosió per punts d\'ignició baixos.'
  },
  {
    id: 'act-37',
    tag: 'Actualitat · Càlcul d\'Autonomia d\'ERA',
    topicId: 'tema-18',
    topicLabel: 'Tema 18 · Equips de respiració autònoma',
    newsTitle: 'Ampolles lleugeres de fibra de carboni a 300 bar en tots els equips ERA moderns',
    context: 'La transició d\'ampolles d\'acer de 200 bar a ampolles compostes de 6,8 L a 300 bar ha reduït el pes a l\'esquena i augmentat l\'aire disponible.',
    howItAffectsUs: 'Una ampolla de 6,8 L a 300 bar conté ~2.040 litres d\'aire teòrics (~1.850–1.900 L reals per compressibilitat); cal calcular sempre el marge de retorn.',
    question: 'Aproximadament quants litres d\'aire comprimit (a pressió atmosfèrica) conté una ampolla estàndard d\'ERA de 6,8 litres carregada a 300 bar?',
    options: [
      'Uns 680 litres.',
      'Uns 1.200 litres.',
      'Uns 2.040 litres teòrics (prop de 1.850–1.900 litres útils reals).',
      'Uns 4.500 litres.'
    ],
    correctIndex: 2,
    explanation: 'Volum = 6,8 L × 300 bar = 2.040 L teòrics (aplicant el factor de compressibilitat Z ≈ 0,91 a 300 bar, uns 1.850–1.900 L reals).'
  },
  {
    id: 'act-38',
    tag: 'Cultura Normativa · Estat d\'Alarma i Protecció Civil',
    topicId: 'tema-1',
    topicLabel: 'Tema 1 · Constitució Espanyola (art. 116)',
    newsTitle: 'Diferència jurídica entre emergència ordinària de protecció civil i Estat d\'Alarma',
    context: 'La Constitució Espanyola (art. 116) regula els estats d\'alarma, excepció i setge per a crisis greus com catàstrofes naturals o sanitàries.',
    howItAffectsUs: 'Clarifica qui declara l\'Estat d\'Alarma (Consell de Ministres) i durant quant temps inicial (15 dies), un clàssic d\'examen al Tema 1.',
    question: 'Qui declara l\'Estat d\'Alarma previst a l\'article 116 de la Constitució Espanyola i quin és el termini màxim inicial sense autorització del Congrés?',
    options: [
      'El President de la Generalitat per un termini màxim de 30 dies.',
      'El Govern de l\'Estat (Consell de Ministres) per un termini màxim de 15 dies.',
      'El Congrés dels Diputats per un termini inicial de 60 dies.',
      'El Tribunal Constitucional per un termini indefinit.'
    ],
    correctIndex: 1,
    explanation: 'Segons l\'art. 116.2 CE, l\'Estat d\'Alarma és declarat pel Govern mitjançant decret acordat en Consell de Ministres per un termini màxim de 15 dies, donant compte al Congrés.'
  },
  {
    id: 'act-39',
    tag: 'Actualitat · Estructures Col·lapsades i Apuntalament',
    topicId: 'tema-20',
    topicLabel: 'Tema 20 · Col·lapses estructurals i rescat urbà',
    newsTitle: 'Unitats USAR i gossos de recerca en esfondraments per explosions de gas o aiguats',
    context: 'Les explosions de gas en edificis antics o el soscavament de fonaments per pluges intenses requereixen estabilització immediata abans de l\'entrada dels equips.',
    howItAffectsUs: 'Treballar sota una estructura danyada sense puntals ni testimonis exposa la dotació a un col·lapse secundari; al Tema 20 cal distingir els esforços de compressió, tracció i cisallament.',
    question: 'En una intervenció per esfondrament parcial d\'un edifici, per a què serveix col·locar un «testimoni» de guix o cinta mil·limetrada sobre una esquerda estructural?',
    options: [
      'Per segellar definitivament la fissura i restaurar la resistència del pilar.',
      'Per detectar visualment si l\'esquerda continua obrint-se o hi ha moviment actiu a l\'estructura.',
      'Per mesurar la temperatura interna del formigó armat sense termòmetre.',
      'Per indicar als veïns que l\'edifici ja és habitable immediatament.'
    ],
    correctIndex: 1,
    explanation: 'Els testimonis permeten controlar si la fissura progressa i alertar d\'un risc de col·lapse secundari imminent.'
  },
  {
    id: 'act-40',
    tag: 'Actualitat · Gestió de Guàrdia i Prevenció de Riscos',
    topicId: 'tema-3',
    topicLabel: 'Tema 3 · LPRL 31/1995 (Risc greu i imminent)',
    newsTitle: 'El dret i deure de retirada davant risc greu i imminent en intervencions complexes',
    context: 'La jurisprudència i la LPRL reforcen la cultura de seguretat: cap objectiu material justifica exposar una dotació a un risc vital inassumible.',
    howItAffectsUs: 'Tant a guàrdia com a l\'examen (va sortir a la 81/25!), saber quan s\'aplica l\'art. 21 de la LPRL és essencial.',
    question: 'Segons la Llei 31/1995 de Prevenció de Riscos Laborals (art. 21), com s\'actua quan els treballadors estan exposats a un risc greu i imminent?',
    options: [
      'Han de continuar la tasca fins a rebre una resolució judicial ferma.',
      'Tenen dret a interrompre la seva activitat i abandonar el lloc de treball si cal, sense poder patir cap perjudici per això.',
      'Només poden aturar-se si ho aprova per unanimitat el Consell de Ministres.',
      'Se\'ls aplica una sanció econòmica automàtica si abandonen la zona abans de 2 hores.'
    ],
    correctIndex: 1,
    explanation: 'L\'art. 21 LPRL protegeix el dret a interrompre l\'activitat i posar-se a resguard davant risc greu i imminent (llevat que hi hagi dol o negligència greu en l\'apreciació).'
  }
];

/**
 * Retorna la pregunta d'actualitat del dia de forma determinista a partir de la data ISO (YYYY-MM-DD).
 * @param {string} isoDate Data en format YYYY-MM-DD
 * @param {number} offset Desplaçament opcional per explorar altres preguntes d'actualitat
 */
export function getTodayCurrentAffairsQuestion(isoDate, offset = 0) {
  const dateStr = isoDate || new Date().toISOString().slice(0, 10);
  // Suma simple de dígits/caràcters per repartir de forma estable dia a dia
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash * 31 + dateStr.charCodeAt(i)) >>> 0;
  }
  const idx = (hash + offset) % DAILY_CURRENT_AFFAIRS_QUESTIONS.length;
  return {
    ...DAILY_CURRENT_AFFAIRS_QUESTIONS[idx],
    date: dateStr
  };
}
