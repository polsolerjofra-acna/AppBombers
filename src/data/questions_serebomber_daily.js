// Preguntes noves estil Serebomber (formulació precisa amb referència exacta al manual/llei)
// 1 pregunta per cada tema del 1 al 34 per enriquir el Repàs del Dia i el banc global.

export const QUESTIONS_SEREBOMBER_DAILY = [
  {
    id: 'sb-t1',
    topic: 1,
    difficulty: 'Difícil',
    question: "Segons l'article 9.3 de la Constitució Espanyola, quin dels principis següents garanteix expressament la Constitució?",
    options: [
      'La retroactivitat de les disposicions sancionadores no favorables.',
      'La irretroactivitat de les disposicions sancionadores no favorables o restrictives de drets individuals.',
      'La derogació automàtica dels reglaments autonòmics cada quatre anys.',
      'La confidencialitat absoluta de totes les normes amb rang de llei orgànica.'
    ],
    correctIndex: 1,
    explanation: 'Referència: Constitució Espanyola (art. 9.3). Garanteix la legalitat, jerarquia normativa, publicitat de les normes i la irretroactivitat de les disposicions sancionadores no favorables.'
  },
  {
    id: 'sb-t2',
    topic: 2,
    difficulty: 'Difícil',
    question: "D'acord amb el TREBEP (RDL 5/2015), en quina situació administrativa es troba un funcionari de carrera quan és nomenat per ocupar un lloc de caràcter polític o d'alt càrrec?",
    options: [
      'Excedència voluntària per interès particular.',
      'Serveis especials.',
      'Suspensió provisional de funcions.',
      'Servei en altres administracions públiques.'
    ],
    correctIndex: 1,
    explanation: 'Referència: TREBEP art. 87. Els funcionaris de carrera declarats en serveis especials reben la retribució del càrrec i se\'ls computa el temps a efectes d\'antiguitat i triennis.'
  },
  {
    id: 'sb-t3',
    topic: 3,
    difficulty: 'Difícil',
    question: "Segons el Reial Decret 773/1997 sobre utilització d'Equips de Protecció Individual (EPI), quina característica ha de complir l'ús d'un EPI?",
    options: [
      'Substitueix sempre les mesures de protecció col·lectiva per reduir costos.',
      'És d\'ús personal, tot i que excepcionalment pot utilitzar-lo més d\'una persona si s\'adopta higiene i manteniment adequats.',
      'Només és obligatori quan ho sol·liciti expressament el delegat de prevenció per escrit.',
      'No requereix marcatge CE si es fabrica dins l\'Estat espanyol.'
    ],
    correctIndex: 1,
    explanation: 'Referència: RD 773/1997 art. 7. L\'EPI és en principi d\'ús personal; si les circumstàncies exigeixen ús compartit, cal garantir que no ocasioni cap problema de salut o higiene.'
  },
  {
    id: 'sb-t4',
    topic: 4,
    difficulty: 'Difícil',
    question: "Segons la Llei 17/2015 d'igualtat efectiva de dones i homes, què s'entén per 'transversalitat' de la perspectiva de gènere?",
    options: [
      'Limitar les polítiques d\'igualtat exclusivament al Departament d\'Igualtat i Feminismes.',
      'Integrar el principi d\'igualtat en totes les polítiques públiques, normes i actuacions dels poders públics.',
      'Aplicar quotes únicament en els càrrecs electes municipals de més de 50.000 habitants.',
      'Substituir tots els processos selectius per sortejos paritaris.'
    ],
    correctIndex: 1,
    explanation: 'Referència: Llei 17/2015 art. 4. La transversalitat implica incorporar l\'enfocament de gènere en el disseny, execució i avaluació de totes les polítiques públiques.'
  },
  {
    id: 'sb-t5',
    topic: 5,
    difficulty: 'Mitjà',
    question: "Segons l'article 11 de la Llei 1/1998 de política lingüística, quin dret té el personal al servei de les administracions públiques de Catalunya respecte a la capacitació lingüística?",
    options: [
      'Acreditar un nivell adequat i suficient de les dues llengües oficials en els processos de selecció.',
      'Quedar exempt de conèixer el català en l\'atenció directa al públic.',
      'Utilitzar exclusivament el castellà en les comunicacions internes escrites.',
      'Triar si vol fer el curs selectiu en francès o anglès.'
    ],
    correctIndex: 0,
    explanation: 'Referència: Llei 1/1998 art. 11. El personal al servei de les administracions de Catalunya ha de tenir un nivell de coneixement adequat i suficient d\'ambdues llengües oficials.'
  },
  {
    id: 'sb-t6',
    topic: 6,
    difficulty: 'Difícil',
    question: "Segons la Llei 5/1994, quin organisme té la competència de planificar, coordinar i dirigir els serveis de prevenció i extinció d'incendis i salvaments de la Generalitat?",
    options: [
      'Els consells comarcals de cada vegueria de forma autònoma.',
      'El Departament competent en matèria de seguretat pública / interior a través de la DGPEIS.',
      'La Direcció General de Protecció Civil de l\'Estat.',
      'Els ajuntaments de menys de 20.000 habitants.'
    ],
    correctIndex: 1,
    explanation: 'Referència: Llei 5/1994. Correspon al Departament d\'Interior (mitjançant la DGPEIS) la direcció, coordinació i gestió del Cos de Bombers de la Generalitat.'
  },
  {
    id: 'sb-t7',
    topic: 7,
    difficulty: 'Difícil',
    question: "Segons el Decret 276/2016 dels serveis de guàrdia, quin principi s'aplica quan una dotació supera l'hora prevista de relleu per trobar-se en una intervenció activa?",
    options: [
      'Abandona el servei immediatament a l\'hora exacta del canvi de torn encara que no hi hagi relleu.',
      'Manté la continuïtat del servei fins que arribi el relleu o finalitzi la intervenció.',
      'Traspassa automàticament la responsabilitat a la policia local present al lloc.',
      'Suspèn l\'extinció durant 30 minuts per signar l\'acta de guàrdia al parc.'
    ],
    correctIndex: 1,
    explanation: 'Referència: Decret 276/2016. El servei operatiu es regeix pel principi de continuïtat fins que es produeix el relleu efectiu o s\'autoritza la retirada.'
  },
  {
    id: 'sb-t8',
    topic: 8,
    difficulty: 'Difícil',
    question: "Segons el manual MAN.GRAL.008 (Teoria del foc), quin tipus de transmissió de la calor és el principal responsable de la propagació d'un incendi a través d'un mur o biga metàl·lica sense obertures?",
    options: [
      'Convecció.',
      'Conducció.',
      'Radiació.',
      'Advecció.'
    ],
    correctIndex: 1,
    explanation: 'Referència: MAN.GRAL.008. La conducció transmet la calor per contacte directe entre molècules dins dels sòlids (especialment metalls com bigues d\'acer).'
  },
  {
    id: 'sb-t9',
    topic: 9,
    difficulty: 'Difícil',
    question: "Segons el manual MAN.GRAL.003 (Física), en un polispast simple on el moviment de la càrrega es reparteix entre 3 trams de corda que sostenen la politja mòbil, quin avantatge mecànic teòric té?",
    options: [
      '2:1.',
      '3:1.',
      '4:1.',
      '6:1.'
    ],
    correctIndex: 1,
    explanation: 'Referència: MAN.GRAL.003. L\'avantatge mecànic teòric d\'un polispast simple és igual al nombre de trams de corda que suporten directament la politja mòbil (3 trams = 3:1).'
  },
  {
    id: 'sb-t10',
    topic: 10,
    difficulty: 'Difícil',
    question: "Segons el manual MAN.GRAL.004 (Química), quina temperatura en graus Celsius equival exactament a 500 K?",
    options: [
      '200 °C.',
      '227 °C.',
      '273 °C.',
      '773 °C.'
    ],
    correctIndex: 1,
    explanation: 'Referència: MAN.GRAL.004. T(°C) = T(K) - 273 = 500 - 273 = 227 °C.'
  },
  {
    id: 'sb-t11',
    topic: 11,
    difficulty: 'Difícil',
    question: "Segons el manual MAN.GRAL.005 (Electricitat), quina és la missió principal d'un interruptor diferencial en una instal·lació elèctrica de baixa tensió?",
    options: [
      'Protegir exclusivament els cables contra sobreintensitats i curtcircuits.',
      'Protegir les persones contra contactes indirectes i directes detectant fuites de corrent a terra.',
      'Augmentar la tensió de 230 V a 400 V en circuits trifàsics.',
      'Substituir la presa de terra física de l\'edifici.'
    ],
    correctIndex: 1,
    explanation: 'Referència: MAN.GRAL.005. El diferencial compara el corrent d\'entrada i sortida; si detecta una fuita a terra (ex. ≥ 30 mA en habitatges), talla el circuit.'
  },
  {
    id: 'sb-t12',
    topic: 12,
    difficulty: 'Difícil',
    question: "Segons el manual MAN.GRAL.007 (Instal·lacions), de quin color està normalitzada la canonada de subministrament de gas natural en edificis quan s'identifica per codi de colors?",
    options: [
      'Blau fosc.',
      'Groc.',
      'Vermell.',
      'Verd.'
    ],
    correctIndex: 1,
    explanation: 'Referència: MAN.GRAL.007. El color normalitzat per a canonades de gas combustible és el groc (vermell per a extinció d\'incendis, blau/verd per a aigua).'
  },
  {
    id: 'sb-t13',
    topic: 13,
    difficulty: 'Difícil',
    question: "Segons el manual MAN.GRAL.009 (Hidràulica), què és el cop d'ariet en una instal·lació d'impulsió amb mànegues o canonades?",
    options: [
      'La formació de bombolles de vapor a l\'entrada de la bomba per buit excessiu.',
      'Una sobrepressió brusca generada en tancar o obrir sobtadament una vàlvula o llança.',
      'La pèrdua de càrrega causada pel fregament amb les parets de la mànega.',
      'La caiguda de pressió estàtica en baixar per un pendent.'
    ],
    correctIndex: 1,
    explanation: 'Referència: MAN.GRAL.009. El cop d\'ariet és l\'ona de sobrepressió causada per l\'aturada sobtada de la massa d\'aigua en moviment en tancar de cop una llança o vàlvula.'
  },
  {
    id: 'sb-t14',
    topic: 14,
    difficulty: 'Mitjà',
    question: "Segons el manual MAN.GRAL.002 (Cartografia), en un mapa topogràfic, què indica el fet que les corbes de nivell estiguin molt juntes entre si?",
    options: [
      'Una plana horitzontal sense desnivell apreciable.',
      'Un pendent molt pronunciat o fort desnivell del terreny.',
      'Una zona inundable amb presència d\'aqüífers subterranis.',
      'Un error d\'impressió de l\'equidistància cartogràfica.'
    ],
    correctIndex: 1,
    explanation: 'Referència: MAN.GRAL.002. Com més juntes estan les corbes de nivell, més ràpid canvia la cota en poca distància horitzontal, indicant un pendent molt fort.'
  },
  {
    id: 'sb-t15',
    topic: 15,
    difficulty: 'Difícil',
    question: "Segons el manual MAN.GRAL.006 (Construcció), a quin esforç mecànic principal treballa una biga horitzontal simplement recolzada als extrems quan suporta una càrrega al centre?",
    options: [
      'Compressió pura uniforme en tota la secció.',
      'Flexió (compressió a la fibra superior i tracció a la fibra inferior).',
      'Torsió pura sense deformació vertical.',
      'Tracció pura uniforme en tota la longitud.'
    ],
    correctIndex: 1,
    explanation: 'Referència: MAN.GRAL.006. Una biga bi-recolzada sota càrrega vertical treballa a flexió: es comprimeix per dalt i s\'estira (tracció) per baix.'
  },
  {
    id: 'sb-t16',
    topic: 16,
    difficulty: 'Mitjà',
    question: "Segons el manual MAN.ATXX.000 (Assistències tècniques), en una obertura de porta d'habitatge sense incendi ni risc vital immediat, quin criteri s'ha de prioritzar?",
    options: [
      'Enderrocar sempre el marc amb la massa de ferro des del primer segon.',
      'Utilitzar la tècnica menys destructiva possible (radiografia/lliscament o extracció de bombí) si la porta no és blindada.',
      'Trencar el vidre del balcó del veí superior abans de comprovar el pany.',
      'No intervenir mai si la porta és de fusta massissa.'
    ],
    correctIndex: 1,
    explanation: 'Referència: MAN.ATXX.000. En assistències tècniques d\'obertura d\'accessos sense urgència vital extrema, es prioritzen tècniques netes i de menor dany possible.'
  },
  {
    id: 'sb-t17',
    topic: 17,
    difficulty: 'Mitjà',
    question: "Segons el manual MAN.COMU.000 (Comunicacions), en l'alfabet fonètic internacional utilitzat per lletrejar matrícules o codis per ràdio, a quines lletres corresponen 'Kilo' i 'X-Ray'?",
    options: [
      'K i X.',
      'C i Z.',
      'Q i S.',
      'K i Y.'
    ],
    correctIndex: 0,
    explanation: 'Referència: MAN.COMU.000. En l\'alfabet fonètic OACI/OTAN: K = Kilo, X = X-Ray.'
  },
  {
    id: 'sb-t18',
    topic: 18,
    difficulty: 'Difícil',
    question: "Segons el manual MAN.EQIP.000 (Vehicles), quina nomenclatura correspon a una Bomba Rural Pesant dins de la flota dels Bombers de la Generalitat?",
    options: [
      'BUP.',
      'BRP.',
      'BUL.',
      'BFP.'
    ],
    correctIndex: 1,
    explanation: 'Referència: MAN.EQIP.000. BRP = Bomba Rural Pesant (vehícle tot terreny polivalent per a àmbit rural i urbà); BUP = Bomba Urbana Pesant; BUL = Bomba Urbana Lleugera; BFP = Bomba Forestal Pesant.'
  },
  {
    id: 'sb-t19',
    topic: 19,
    difficulty: 'Difícil',
    question: "Segons el manual de Conducció i Rescat en Alçada / Medi Natural (T19), quin nus s'utilitza principalment per unir dues cordes del mateix diàmetre amb seguretat?",
    options: [
      'Nus de ballestrinque.',
      'Nus de pescador doble (o vuit per xicot si és encordament).',
      'Nus corredís simple sense seguretat.',
      'Nus de mig punt sense bloqueig.'
    ],
    correctIndex: 1,
    explanation: 'Referència: T19. El pescador doble és el nus de referència per unir dues cordes d\'igual diàmetre en maniobres de rescat.'
  },
  {
    id: 'sb-t20',
    topic: 20,
    difficulty: 'Difícil',
    question: "Davant d'un col·lapse estructural en edificació antiga amb parets de càrrega, quin tipus d'esfondrament forma un espai triangular segur al costat d'un mur que ha quedat dret?",
    options: [
      'Col·lapse en sandvitx (pancake).',
      'Col·lapse en cobert / inclinació lateral (lean-to).',
      'Col·lapse per punxonament invers sense buits.',
      'Col·lapse en V invertida sense parets.'
    ],
    correctIndex: 1,
    explanation: 'Referència: T20 (Col·lapses). El col·lapse en cobert (lean-to) es produeix quan un extrem del forjat cedeix i l\'altre queda recolzat al mur, creant un buit triangular d\'alta probabilitat de supervivència.'
  },
  {
    id: 'sb-t21',
    topic: 21,
    difficulty: 'Difícil',
    question: "En un rescat en aigües vives, quin fenomen hidràulic es forma al peu d'una presa o salt d'aigua i pot atrapar una persona fent-la girar en cercle?",
    options: [
      'Flux laminar lineal.',
      'Rebuf o retorn hidràulic (drossa / rulo).',
      'Efecte Venturi atmosfèric.',
      'Cavitació superficial estàtica.'
    ],
    correctIndex: 1,
    explanation: 'Referència: T21. Al peu de rescloses i salts es forma un retorn d\'aigua (rebuf o rulo) que arrossega cap al fons i retorna cap al salt, essent un perill mortal.'
  },
  {
    id: 'sb-t22',
    topic: 22,
    difficulty: 'Mitjà',
    question: "En mecànica de vehicles pesants (T22), per a què serveix el bloqueig del diferencial en un camió tot terreny quan una roda patina sobre fang o neu?",
    options: [
      'Per desconnectar el motor de la caixa de canvis en baixades.',
      'Per fer girar solidàriament les dues rodes del mateix eix (o eixos) i recuperar tracció.',
      'Per augmentar la pressió del circuit pneumàtic dels frens de tambor.',
      'Per invertir el sentit de gir de la presa de força de la bomba.'
    ],
    correctIndex: 1,
    explanation: 'Referència: T22. El bloqueig del diferencial anul·la l\'efecte diferencial i envia parell a la roda que sí que té adherència.'
  },
  {
    id: 'sb-t23',
    topic: 23,
    difficulty: 'Difícil',
    question: "En un incendi d'interior, què és el 'pla neutre' (o línia neutra) dins d'un recinte amb fum calent?",
    options: [
      'La paret exterior que no ha estat afectada per les flames.',
      'El nivell d\'alçada on la pressió interior dels gasos s\'iguala amb la pressió atmosfèrica exterior.',
      'La distància mínima de seguretat entre el camió i la façana.',
      'El punt d\'ebullició de l\'aigua dins la llança.'
    ],
    correctIndex: 1,
    explanation: 'Referència: T23 (Incendis d\'interior). Per sobre del pla neutre hi ha sobrepressió i surten gasos/fum; per sota hi ha depressió i entra aire fresc.'
  },
  {
    id: 'sb-t24',
    topic: 24,
    difficulty: 'Difícil',
    question: "Segons el manual MAN.SVVH.000 (Accidents de mobilitat viària), en quina ordre s'ha d'estabilitzar quan un Vehicle B ha quedat muntat a sobre d'un Vehicle A (que conté les víctimes)?",
    options: [
      'Primer el Vehicle A perquè conté les víctimes, i després el Vehicle B.',
      'Sempre primer el Vehicle B (el de sobre) i després el Vehicle A (el de sota).',
      'Només el Vehicle A si el Vehicle B té el fre de mà posat.',
      'No s\'estabilitza cap dels dos fins a retirar les portes.'
    ],
    correctIndex: 1,
    explanation: 'Referència: MAN.SVVH.000. Sempre s\'estabilitza primer el Vehicle B (superior) per evitar que llisqui o caigui sobre el Vehicle A i els equips.'
  },
  {
    id: 'sb-t25',
    topic: 25,
    difficulty: 'Difícil',
    question: "En incendis forestals (T25), com s'anomena la part del perímetre de l'incendi oposada al cap, on l'avanç és més lent i la longitud de flama és menor?",
    options: [
      'Flanc dret.',
      'Cua.',
      'Llengua.',
      'Focus secundari.'
    ],
    correctIndex: 1,
    explanation: 'Referència: T25. La cua és la part posterior de l\'incendi (origen o zona oposada al cap), amb menor intensitat i velocitat de propagació, ideal com a punt d\'ancoratge.'
  },
  {
    id: 'sb-t26',
    topic: 26,
    difficulty: 'Mitjà',
    question: "En el maneig d'agents extintors (T26), quin tipus de bromera/escuma té un coeficient d'expansió comprès entre 20 i 200?",
    options: [
      'Escuma de baixa expansió.',
      'Escuma de mitjana expansió.',
      'Escuma d\'alta expansió.',
      'Aigua additivada sense expansió.'
    ],
    correctIndex: 1,
    explanation: 'Referència: T26. Baixa expansió: < 20; Mitjana expansió: 20 a 200; Alta expansió: > 200.'
  },
  {
    id: 'sb-t27',
    topic: 27,
    difficulty: 'Difícil',
    question: "En el transport de mercaderies perilloses (ADR, T27), a quina classe pertanyen els 'Gasos' (comprimits, liquats o dissolts a pressió)?",
    options: [
      'Classe 1.',
      'Classe 2.',
      'Classe 3.',
      'Classe 4.1.'
    ],
    correctIndex: 1,
    explanation: 'Referència: T27 (ADR). Classe 1: Explosius; Classe 2: Gasos; Classe 3: Líquids inflamables; Classe 4: Sòlids inflamables.'
  },
  {
    id: 'sb-t28',
    topic: 28,
    difficulty: 'Difícil',
    question: "Davant d'una intervenció en un centre de transformació elèctrica d'alta tensió (T28), quin agent extintor NO s'ha d'utilitzar mai si la instal·lació continua en tensió?",
    options: [
      'Diòxid de carboni (CO₂).',
      'Raig ple d\'aigua o escuma aquosa.',
      'Pols química seca BC/ABC.',
      'Gas inert homologat.'
    ],
    correctIndex: 1,
    explanation: 'Referència: T28. L\'aigua a raig ple i l\'escuma són conductores de l\'electricitat i comporten risc mortal d\'electrocució per arc elèctric.'
  },
  {
    id: 'sb-t29',
    topic: 29,
    difficulty: 'Difícil',
    question: "En assistència sanitària inicial a un politraumatitzat (protocol XABCDE, T29), què representa la lletra 'X' al principi de la seqüència?",
    options: [
      'Control immediat d\'hemorràgies exsanguinants (massives) externes.',
      'Exploració neurològica completa amb escala de Glasgow.',
      'Radiografia portàtil al lloc de l\'accident.',
      'Descompressió gàstrica immediata.'
    ],
    correctIndex: 0,
    explanation: 'Referència: T29 (XABCDE). La X inicial prioritza aturar qualsevol hemorràgia massiva exsanguinant (pressió directa, torniquet) abans fins i tot de la via aèria A.'
  },
  {
    id: 'sb-t30',
    topic: 30,
    difficulty: 'Mitjà',
    question: "En intervencions en edificis amb ascensors (T30), quin és el procediment segur per rescatar persones atrapades dins d'una cabina aturada entre plantes?",
    options: [
      'Obrir directament la porta exterior sense tallar el corrent i fer saltar les persones pel forat.',
      'Tallar el subministrament elèctric a la sala de màquines, comprovar l\'estat i accionar el fre/volant per anivellar a planta.',
      'Tallar els cables de tracció principals amb cisalla hidràulica.',
      'Inundar el fossat per amortir la baixada.'
    ],
    correctIndex: 1,
    explanation: 'Referència: T30. Primer es talla la força a la sala de màquines (deixant llum de cabina), es comunica amb les víctimes i s\'anivella la cabina a planta amb el fre/volant d\'inèrcia.'
  },
  {
    id: 'sb-t31',
    topic: 31,
    difficulty: 'Mitjà',
    question: "En meteorologia aplicada als incendis (T31), què indica una situació d'inversió tèrmica nocturna en una vall?",
    options: [
      'Que l\'aire més fred i dens queda atrapat al fons de la vall sota una capa d\'aire més càlid, dificultant la dispersió del fum.',
      'Que la temperatura augmenta 10 °C cada 100 metres de baixada.',
      'Que el vent bufa sempre en vertical ascendent a més de 80 km/h.',
      'Que la humitat relativa baixa automàticament al 5%.'
    ],
    correctIndex: 0,
    explanation: 'Referència: T31. En una inversió tèrmica, l\'aire fred s\'estanca al fons de la vall i el fum queda atrapat a baixa alçada sense ascendir.'
  },
  {
    id: 'sb-t32',
    topic: 32,
    difficulty: 'Difícil',
    question: "En la protecció contra incendis en edificis (T32), quina funció té una columna seca en un edifici de gran alçada?",
    options: [
      'És una canonada buida d\'ús exclusiu per als bombers amb presa a façana per impulsar aigua cap a les plantes superiors.',
      'És una canonada sempre plena d\'aigua a pressió connectada a les BIEs dels veïns.',
      'És un conducte de ventilació natural de la caixa d\'escala.',
      'És el baixant de pluvials de la coberta.'
    ],
    correctIndex: 0,
    explanation: 'Referència: T32 (PCI). La columna seca està normalment buida i permet als bombers connectar l\'autobomba a la presa de façana i disposar de sortides en plantes.'
  },
  {
    id: 'sb-t33',
    topic: 33,
    difficulty: 'Mitjà',
    question: "En l'organització dels salvaments en medi rural o agrícola (T33), quin risc específic presenten els sitges (silos) de gra o farratge?",
    options: [
      'Atmosferes deficients en oxigen, fermentació amb CO₂/metà, pols combustible (ATEX) i atrapament per enfonsament.',
      'Radiació ionitzant directa superior a 50 mSv/h.',
      'Corrent altern de 25.000 V a la base metàl·lica.',
      'Congelació instantània per nitrogen líquid.'
    ],
    correctIndex: 0,
    explanation: 'Referència: T33. Els sitges combinen risc d\'espai confinat (CO₂/NO₂), enfonsament/engoliment en el gra i risc d\'explosió de pols orgànica.'
  },
  {
    id: 'sb-t34',
    topic: 34,
    difficulty: 'Difícil',
    question: "En la geografia i relleu de Catalunya aplicada a les emergències (T34), quin riu travessa successivament les comarques de la Cerdanya, l'Alt Urgell, la Noguera i el Segrià?",
    options: [
      'El Ter.',
      'El Segre.',
      'El Llobregat.',
      'La Muga.'
    ],
    correctIndex: 1,
    explanation: 'Referència: T34 (Geografia de Catalunya). El riu Segre neix a l\'Alta Cerdanya i recorre la Cerdanya, l\'Alt Urgell, la Noguera i el Segrià abans de confluir amb l\'Ebre.'
  },
  {
    id: 'sb-train-1',
    topic: 9,
    difficulty: 'Difícil',
    question: "Un vehicle frena uniformement de 20 m/s a 10 m/s en 30 m. Quant espai més necessita per aturar-se si manté la mateixa desacceleració?",
    options: [
      '10 m.',
      '15 m.',
      '20 m.',
      '30 m.'
    ],
    correctIndex: 0,
    explanation: 'De v₁² - v₀² = 2·a·Δx₁: 10² - 20² = 2·a·30 → -300 = 60·a → a = -5 m/s². Per aturar-se des de 10 m/s: 0 - 10² = 2·(-5)·Δx₂ → Δx₂ = 100 / 10 = 10 m.'
  },
  {
    id: 'sb-train-2',
    topic: 10,
    difficulty: 'Difícil',
    question: "En un model de reacció es combinen àtoms X i Y per formar X₂Y. Hi ha 0,70 mol d'àtoms X i 0,45 mol d'àtoms Y. Quants mols de Y queden quan s'ha format tot el producte possible?",
    options: [
      '0,05 mol.',
      '0,10 mol.',
      '0,25 mol.',
      '0,35 mol.'
    ],
    correctIndex: 1,
    explanation: 'Per formar X₂Y calen 2 mols de X per cada 1 mol de Y. Amb 0,70 mol de X es consumeixen 0,70 / 2 = 0,35 mol de Y (X és el reactiu limitant). Sobren 0,45 - 0,35 = 0,10 mol de Y.'
  },
  {
    id: 'sb-train-3',
    topic: 10,
    difficulty: 'Difícil',
    question: "Quin tipus d'interacció fa que moltes substàncies iòniques siguin sòlides a temperatura ambient i tinguin punts de fusió alts?",
    options: [
      'Forces de dispersió de London molt febles entre molècules apolars.',
      'Atraccions electrostàtiques intenses entre ions de càrrega oposada en xarxa cristal·lina (enllaç iònic).',
      'Ponts d\'hidrogen exclusius entre àtoms metàl·lics.',
      'Interaccions dipol induït - dipol instantani.'
    ],
    correctIndex: 1,
    explanation: 'Els compostos iònics no formen molècules individuals unides per forces intermoleculars febles, sinó xarxes cristal·lines mantingudes per fortes atraccions electrostàtiques entre cations i anions.'
  },
  {
    id: 'sb-train-4',
    topic: 10,
    difficulty: 'Difícil',
    question: "En un cilindre tancat, la cambra d'un gas ideal comprèn un tram fix de 20 mL i un tram graduat mòbil. El tram mòbil passa de 100 a 40 mL a temperatura constant. Si la pressió absoluta inicial és 1,20 bar, quina serà la final?",
    options: [
      '1,80 bar.',
      '2,40 bar.',
      '3,00 bar.',
      '0,60 bar.'
    ],
    correctIndex: 1,
    explanation: 'Cal sumar sempre el tram fix: V₁ = 20 + 100 = 120 mL i V₂ = 20 + 40 = 60 mL. A T constant (Boyle-Mariotte): P₁·V₁ = P₂·V₂ → 1,20 · 120 = P₂ · 60 → P₂ = 2,40 bar.'
  },
  {
    id: 'sb-train-5',
    topic: 10,
    difficulty: 'Difícil',
    question: "Un recipient d'oxigen és a -102 °C i un de nitrogen a -119 °C. Per arribar cadascun a la seva temperatura crítica, quin dels dos gasos s'ha de refredar més i quants graus més que l'altre?",
    options: [
      'El nitrogen, uns 11 °C més que l\'oxigen.',
      'L\'oxigen, uns 11 °C més que el nitrogen.',
      'El nitrogen, uns 28 °C més que l\'oxigen.',
      'Tots dos s\'han de refredar exactament els mateixos graus.'
    ],
    correctIndex: 0,
    explanation: 'Temperatures crítiques: O₂ ≈ -118,6 °C (cal baixar ~16,6 °C des de -102 °C) i N₂ ≈ -147 °C (cal baixar ~28 °C des de -119 °C). El nitrogen s\'ha de refredar uns 11 °C més que l\'oxigen.'
  },
  {
    id: 'sb-train-6',
    topic: 10,
    difficulty: 'Difícil',
    question: "Un recipient buit pesa 320 g i la bàscula admet 1,70 kg com a màxim. Quin volum màxim de l'oli de referència (densitat 0,92 g/mL) s'hi pot pesar si hi ha prou capacitat?",
    options: [
      '1,38 L.',
      '1,50 L.',
      '1,70 L.',
      '1,85 L.'
    ],
    correctIndex: 1,
    explanation: 'Massa màxima d\'oli = 1.700 g - 320 g = 1.380 g. Volum màxim = m / d = 1.380 g / 0,92 g/mL = 1.500 mL = 1,50 L.'
  },
  {
    id: 'sb-train-7',
    topic: 10,
    difficulty: 'Difícil',
    question: "Una mostra tancada de gas ideal ocupa 12 L a 300 K. Primer es refreda a pressió constant fins a 225 K. Tot seguit, sense variar més la temperatura, es redueix la pressió absoluta a tres quartes parts de la inicial. Quin és el volum final?",
    options: [
      '6,75 L.',
      '9,00 L.',
      '12,0 L.',
      '16,0 L.'
    ],
    correctIndex: 2,
    explanation: '1r pas (P constant): V\' = 12 · (225 / 300) = 9 L. 2n pas (T constant, P₂ = ¾·P₁): V₂ = V\' · (4/3) = 9 · (4/3) = 12 L.'
  },
  {
    id: 'sb-train-8',
    topic: 10,
    difficulty: 'Difícil',
    question: "En la combustió completa del metà (CH₄) es consumeixen 64 g d'oxigen, sense reactius sobrants. Quina massa total de productes s'obté?",
    options: [
      '64 g.',
      '72 g.',
      '80 g.',
      '96 g.'
    ],
    correctIndex: 2,
    explanation: 'CH₄ + 2 O₂ → CO₂ + 2 H₂O. 64 g d\'O₂ són 2 mols, que reaccionen exactament amb 1 mol de CH₄ (16 g). Per conservació de la massa: massa productes = 16 g + 64 g = 80 g (44 g de CO₂ + 36 g d\'H₂O).'
  },
  {
    id: 'sb-train-9',
    topic: 13,
    difficulty: 'Difícil',
    question: "Un dipòsit d'aigua de 20 m³ de capacitat màxima descansa sobre una llosa de formigó plana. El dipòsit té una superfície de 10 m², i està a la meitat de capacitat, assolint una alçada d'1 m. Quina és la força que exerceix la llosa de formigó en cada metre quadrat?",
    options: [
      '4,91 kN/m².',
      '9,81 kN/m² (≈ 10 kN/m²).',
      '19,62 kN/m².',
      '98,1 kN/m².'
    ],
    correctIndex: 1,
    explanation: 'A la meitat de capacitat hi ha 10 m³ (10.000 kg) sobre 10 m², és a dir, 1.000 kg/m² (h = 1 m). Per acció-reacció, la força per m² és P = ρ·g·h = 1.000 · 9,81 · 1 = 9.810 N/m² = 9,81 kN/m² (≈ 10 kN/m²).'
  },
  {
    id: 'sb-train-10',
    topic: 13,
    difficulty: 'Difícil',
    question: "La pressió dinàmica (ρ = 1.000 kg/m³) de l'aigua que circula per una mànega és de 0,125 bar. A quina velocitat circula?",
    options: [
      '2,5 m/s.',
      '5,0 m/s.',
      '10,0 m/s.',
      '25,0 m/s.'
    ],
    correctIndex: 1,
    explanation: '0,125 bar = 12.500 Pa. Aplicant Pd = ½·ρ·v²: 12.500 = 500 · v² → v² = 25 → v = 5,0 m/s.'
  },
  {
    id: 'sb-train-11',
    topic: 15,
    difficulty: 'Mitjana',
    question: "Segons la classificació que presenta el manual de construcció de Bombers, quants tipus d'esforç o fenòmens estructurals principals s'hi descriuen?",
    options: [
      '4 (tracció, compressió, flexió i torsió).',
      '5 (tracció, compressió, flexió, tallant i torsió).',
      '6 (tracció, compressió, flexió, tallant, torsió i vinclament).',
      '8.'
    ],
    correctIndex: 2,
    explanation: 'El manual de construcció (MAN.GRAL.006) descriu 6 esforços o fenòmens estructurals principals: tracció, compressió, flexió, cisallament (tallant), torsió i vinclament (pandeig).'
  },
  {
    id: 'sb-train-12',
    topic: 18,
    difficulty: 'Difícil',
    question: "A la taula resum de vehicles terrestres del manual, quins dos vehicles comparteixen exactament la mateixa descripció de funció?",
    options: [
      'La BUL i la BNP.',
      'L\'AEA (Autoescala Automàtica) i l\'ABA (Autobraç Articulat).',
      'El FSV i el FRQ.',
      'La BUP i la UCP.'
    ],
    correctIndex: 1,
    explanation: 'A la taula resum de vehicles terrestres (MAN.EQIP.000), l\'AEA i l\'ABA comparteixen la mateixa funció operativa: rescat de persones en façana, atac exterior amb monitor des de cistella i sanejament en alçada.'
  },
  {
    id: 'sb-train-13',
    topic: 20,
    difficulty: 'Difícil',
    question: "Un equip protegeix d'un risc que provoca danys lleus, però que es manifesten de sobte, sense que qui porta l'equip se n'adoni fins que ja s'han produït. Encaixa en la definició de la categoria I?",
    options: [
      'Sí, perquè qualsevol dany lleu és automàticament de categoria I.',
      'No, perquè la categoria I exigeix que els efectes siguin graduals i puguin ser percebuts a temps i sense perill per l\'usuari.',
      'Sí, sempre que porti marcatge CE sense organisme notificat.',
      'Només si s\'utilitza en assistències tècniques.'
    ],
    correctIndex: 1,
    explanation: 'Segons el Reglament (UE) 2016/425 (Annex I), la categoria I inclou únicament riscos mínims els efectes dels quals siguin graduals i puguin ser percebuts a temps i sense perill per l\'usuari.'
  },
  {
    id: 'sb-train-14',
    topic: 23,
    difficulty: 'Difícil',
    question: "El GIS assigna el número d'element 27 a un establiment d'ús hospitalari de l'àmbit d'actuació del parc de Badalona. Quin codi de fitxa li correspon, seguint la nomenclatura de les FOER?",
    options: [
      'BAD-HOS-27',
      'BAD-HOS-00027',
      'BDN-SAN-00027',
      'HOS-BAD-0027'
    ],
    correctIndex: 1,
    explanation: 'La nomenclatura oficial de les fitxes FOER segueix el format [MUNICIPI 3 lletres]-[TIPUS 3 lletres]-[5 DÍGITS], per exemple BAD-HOS-00001; amb el número 27 correspon BAD-HOS-00027.'
  },
  {
    id: 'sb-train-15',
    topic: 28,
    difficulty: 'Difícil',
    question: "Quin requisit de recursos comporta una emergència, a diferència d'una urgència?",
    options: [
      'No requereix cap recurs sanitari presencial.',
      'Exigeix l\'activació i intervenció immediata de recursos especialitzats (p. ex. SVA) en pocs minuts per risc vital imminent.',
      'Només requereix transport sanitari programat no assistencial.',
      'Es pot demorar més de 24 hores amb recursos ordinaris d\'atenció primària.'
    ],
    correctIndex: 1,
    explanation: 'L\'emergència implica un risc vital imminent o pèrdua de funció d\'un òrgan en minuts i exigeix mobilització immediata de recursos avançats/especialitzats; la urgència requereix atenció a curt termini sense perill vital immediat.'
  },
  {
    id: 'sb-train-16',
    topic: 31,
    difficulty: 'Mitjana',
    question: "En rebre un avís al medi natural, quina d'aquestes dades aportades per l'alertant correspon a l'element clau «mecanisme de l'accident»?",
    options: [
      'Les coordenades UTM del coll on es troben.',
      'Que la víctima ha patit una caiguda d\'uns 5 metres per una canal amb gel.',
      'El nombre de telèfon i la bateria restant de l\'alertant.',
      'La previsió de boira i vent fort a la carena.'
    ],
    correctIndex: 1,
    explanation: 'El mecanisme de l\'accident indica com s\'ha produït l\'incident o la lesió (caiguda, allau, relliscada, cop de roca), essencial per preveure lesions potencials i preparar el material sanitari i tècnic.'
  },
  {
    id: 'sb-hyb-1',
    topic: 1,
    difficulty: 'Difícil',
    question: "Si es volgués reformar l'article 28.2 de la Constitució Espanyola (dret a la vaga, ubicat a la Secció 1a del Capítol II del Títol I), quin procediment seria obligatori seguir?",
    options: [
      'Aprovació per majoria absoluta del Congrés i referèndum potestatiu si el demana 1/10 dels diputats.',
      'Aprovació per majoria de 2/3 de cada cambra, dissolució immediata de les Corts, ratificació per 2/3 de les noves cambres i referèndum obligatori.',
      'Aprovació per majoria de 3/5 de cada cambra sense necessitat de dissoldre les Corts ni convocar referèndum.',
      'Aprovació per Llei Orgànica del Parlament de Catalunya i ratificació al Senat.'
    ],
    correctIndex: 1,
    explanation: 'L\'art. 28.2 CE pertany a la Secció 1a del Capítol II del Títol I (drets fonamentals). Segons l\'art. 168 CE, exigeix el procediment agreujat: 2/3 de cada cambra, dissolució de les Corts, ratificació per 2/3 de les noves Corts i referèndum obligatori.'
  },
  {
    id: 'sb-hyb-2',
    topic: 2,
    difficulty: 'Difícil',
    question: "Un bomber funcionari de carrera acumula 8 anys i 11 mesos de serveis efectius reconeguts. Quants triennis té consolidats avui i en quina data exacta meritarà el següent?",
    options: [
      '3 triennis consolidats; el següent als 12 anys.',
      '2 triennis consolidats; meritarà el 3r trienni quan compleixi els 9 anys complets (el mes vinent).',
      '2 triennis consolidats; el 3r no es consolida fins a l\'1 de gener de l\'any següent.',
      '3 triennis consolidats per arrodoniment administratiu superior a 8 anys i 6 mesos.'
    ],
    correctIndex: 1,
    explanation: 'Els triennis es meriten per cada 3 anys complets de servei efectiu (3, 6, 9, 12...). Amb 8 anys i 11 mesos només té 2 triennis consolidats i meritarà el 3r en complir els 9 anys.'
  },
  {
    id: 'sb-hyb-3',
    topic: 3,
    difficulty: 'Difícil',
    question: "En un centre de treball o parc amb 42 treballadors, quants delegats de prevenció corresponen d'acord amb l'escala de l'article 35 de la Llei 31/1995 de Prevenció de Riscos Laborals?",
    options: [
      '1 delegat de prevenció, escollit per i entre els representants del personal.',
      '2 delegats de prevenció.',
      '3 delegats de prevenció.',
      'Cap, perquè només són obligatoris a partir de 50 treballadors.'
    ],
    correctIndex: 0,
    explanation: 'Segons l\'art. 35.2 de la Llei 31/1995: fins a 30 treballadors (el delegat de personal), de 31 a 49 treballadors correspon 1 delegat de prevenció (escollit entre els delegats de personal), i de 50 a 100 treballadors en corresponen 2.'
  },
  {
    id: 'sb-hyb-4',
    topic: 4,
    difficulty: 'Difícil',
    question: "En un procés selectiu d'accés al cos de bombers es produeix un empat final en la puntuació entre una candidata i un candidat igualment capacitats. D'acord amb la Llei 17/2015 d'igualtat efectiva, quin criteri de desempat s'aplica si les dones representen el 5% de la plantilla del cos?",
    options: [
      'Es resol automàticament per ordre alfabètic del primer cognom.',
      'Té preferència la persona del sexe menys representat (la candidata), en ser la seva presència inferior al 40%.',
      'Es repeteix obligatòriament la prova física de resistència.',
      'Té preferència la persona de major edat sense excepció.'
    ],
    correctIndex: 1,
    explanation: 'La Llei 17/2015 (i el TREBEP / legislació d\'igualtat) preveu l\'acció positiva en cas d\'empat entre igualment capacitats a favor del sexe menys representat quan la seva presència al cos o escala sigui inferior al 40%.'
  },
  {
    id: 'sb-hyb-5',
    topic: 5,
    difficulty: 'Mitjana',
    question: "Una persona ciutadana presenta una instància redactada en castellà en un registre de la Generalitat i sol·licita expressament que la notificació de la resolució se li faci en català. Com ha d'actuar l'Administració segons la Llei 1/1998 de Política Lingüística?",
    options: [
      'L\'ha de notificar en castellà obligatòriament perquè és la llengua de la sol·licitud inicial.',
      'Ha de notificar-la en català, d\'acord amb l\'elecció expressa de la persona interessada.',
      'Només pot notificar-la en català si l\'expedient s\'inicia d\'ofici.',
      'Ha d\'exigir que presenti una nova instància en català prèviament.'
    ],
    correctIndex: 1,
    explanation: 'Segons la Llei 1/1998 (art. 10), en els procediments administratius els ciutadans tenen dret a rebre la resposta/notificació en la llengua oficial que elegeixin.'
  },
  {
    id: 'sb-hyb-6',
    topic: 6,
    difficulty: 'Difícil',
    question: "Durant una intervenció conjunta en un incendi forestal on coincideixen bombers funcionaris de la Generalitat i bombers voluntaris, qui assumeix la direcció operativa i quina consideració jurídica tenen els bombers voluntaris mentre estan en acte de servei?",
    options: [
      'Dirigeix sempre l\'alcalde del municipi; els voluntaris no tenen consideració d\'agents de l\'autoritat.',
      'Els bombers funcionaris de la Generalitat assumeixen la direcció; durant el servei, els bombers tenen la consideració d\'agents de l\'autoritat.',
      'Dirigeix el cap de guàrdia voluntari si ha arribat primer durant tota l\'emergència.',
      'Només tenen consideració d\'agents de l\'autoritat els bombers de l\'escala superior.'
    ],
    correctIndex: 1,
    explanation: 'Segons la Llei 5/1994, en l\'exercici de les seves funcions els bombers tenen la consideració d\'agents de l\'autoritat, i en actuacions conjuntes la direcció correspon al comandament professional dels Bombers de la Generalitat.'
  },
  {
    id: 'sb-hyb-7',
    topic: 7,
    difficulty: 'Mitjana',
    question: "Dins l'organigrama actual del Departament d'Interior i Seguretat Pública, de qui depèn orgànicament la Direcció General de Prevenció, Extinció d'Incendis i Salvaments (DGPEIS)?",
    options: [
      'Directament del Parlament de Catalunya.',
      'Del Departament d\'Interior i Seguretat Pública (a través de la Secretaria General / estructura del Departament).',
      'De la Direcció General de la Policia (Mossos d\'Esquadra).',
      'Del Ministeri de l\'Interior estatal.'
    ],
    correctIndex: 1,
    explanation: 'La DGPEIS (de la qual depèn operativament el Cos de Bombers de la Generalitat) forma part de l\'estructura orgànica del Departament d\'Interior i Seguretat Pública de la Generalitat de Catalunya.'
  },
  {
    id: 'sb-hyb-8',
    topic: 8,
    difficulty: 'Difícil',
    question: "Un proporcionador d'escuma al 3% treballa amb un cabal total de mescla escumant de 400 L/min alimentant una llança de baixa expansió amb coeficient 1:10. Quants litres d'escumogen per minut consumeix i quin cabal d'escuma acabada genera?",
    options: [
      '12 L/min d\'escumogen i 4.000 L/min d\'escuma.',
      '120 L/min d\'escumogen i 4.000 L/min d\'escuma.',
      '12 L/min d\'escumogen i 400 L/min d\'escuma.',
      '3 L/min d\'escumogen i 1.200 L/min d\'escuma.'
    ],
    correctIndex: 0,
    explanation: 'Consum d\'escumogen = 3% de 400 L/min = 0,03 × 400 = 12 L/min. Cabal d\'escuma = cabal mescla × índex d\'expansió = 400 × 10 = 4.000 L/min.'
  },
  {
    id: 'sb-hyb-9',
    topic: 11,
    difficulty: 'Difícil',
    question: "Dues resistències de 12 Ω i 24 Ω es connecten en paral·lel a una bateria de 24 V en corrent continu. Quina intensitat total subministra la bateria i quina potència total dissipa el circuit?",
    options: [
      '0,67 A i 16 W.',
      '3,0 A i 72 W.',
      '2,0 A i 48 W.',
      '3,0 A i 24 W.'
    ],
    correctIndex: 1,
    explanation: 'Resistència equivalent en paral·lel: R_eq = (12·24)/(12+24) = 288/36 = 8 Ω. Intensitat total: I = V / R_eq = 24 / 8 = 3 A. Potència: P = V · I = 24 · 3 = 72 W.'
  },
  {
    id: 'sb-hyb-10',
    topic: 12,
    difficulty: 'Mitjana',
    question: "En una instal·lació interior de subministrament d'aigua d'un edifici, quin element evita el retorn d'aigua des de la xarxa privada cap a la xarxa pública de distribució?",
    options: [
      'La vàlvula reductora de pressió.',
      'La vàlvula de retenció (antiretorn).',
      'El vas d\'expansió tancat.',
      'El purgador automàtic.'
    ],
    correctIndex: 1,
    explanation: 'La vàlvula de retenció (o antiretorn) permet el pas del fluid en un únic sentit i impedeix la contaminació o retorn d\'aigua cap a la xarxa pública.'
  },
  {
    id: 'sb-hyb-11',
    topic: 14,
    difficulty: 'Difícil',
    question: "En un mapa topogràfic a escala 1:25.000, la distància en línia recta mesurada sobre el plànol entre dues torres de guaita és de 8 cm, i la diferència de cota entre ambdues és de 150 m. Quin és el pendent mitjà del terreny?",
    options: [
      '3,75 %.',
      '7,5 %.',
      '15,0 %.',
      '18,75 %.'
    ],
    correctIndex: 1,
    explanation: 'Distància horitzontal real = 8 cm × 25.000 = 200.000 cm = 2.000 m. Pendent (%) = (desnivell / distància horitzontal) × 100 = (150 / 2.000) × 100 = 7,5%.'
  },
  {
    id: 'sb-hyb-12',
    topic: 16,
    difficulty: 'Difícil',
    question: "En un rescat de persones atrapades dins la cabina d'un ascensor elèctric convencional aturat entre dues plantes, quina és la primera maniobra de seguretat obligatòria a la sala de màquines?",
    options: [
      'Obrir directament el fre electromecànic sense tocar el quadre elèctric.',
      'Desconnectar l\'interruptor general de força motriu (mantenint l\'enllumenat si és independent) per evitar l\'arrencada sobtada.',
      'Tallar els cables de tracció amb cisalla hidràulica.',
      'Polsar l\'ordre de baixada ràpida des del quadre de maniobra.'
    ],
    correctIndex: 1,
    explanation: 'Abans de moure la cabina manualment (alliberant fre i accionant el volant), cal tallar l\'alimentació de força motriu per impedir un moviment intempestiu que pugui atrapar els rescatadors o els ocupants.'
  },
  {
    id: 'sb-hyb-13',
    topic: 17,
    difficulty: 'Mitjana',
    question: "En un barranc profund o un aparcament subterrani sense cobertura de repetidors de la xarxa RESCAT (TETRA), quin mode de funcionament permet comunicar els terminals portàtils directament entre si?",
    options: [
      'Mode TMO (Trunked Mode Operation).',
      'Mode DMO (Direct Mode Operation).',
      'Mode Roaming automàtic.',
      'Mode DMR encriptat de repetidor.'
    ],
    correctIndex: 1,
    explanation: 'El mode DMO (Direct Mode Operation) permet la comunicació directa punt a punt entre terminals TETRA sense passar per la infraestructura de repetidors (TMO).'
  },
  {
    id: 'sb-hyb-14',
    topic: 19,
    difficulty: 'Difícil',
    question: "Un camió autobomba circula en emergència per un tram recte amb el mateix coeficient d'adherència. Si duplica la seva velocitat de 36 km/h a 72 km/h, com varia la distància de frenada pura (sense comptar el temps de reacció)?",
    options: [
      'Es duplica (× 2).',
      'Es triplica (× 3).',
      'Es quadruplica (× 4).',
      'Es multiplica per 1,41 (√2).'
    ],
    correctIndex: 2,
    explanation: 'La distància de frenada és proporcional al quadrat de la velocitat: d = v² / (2·μ·g). En duplicar la velocitat (×2), la distància de frenada es multiplica per 2² = 4.'
  },
  {
    id: 'sb-hyb-15',
    topic: 21,
    difficulty: 'Difícil',
    question: "Davant d'una fuita greu en una indústria química inclosa dins la directiva Seveso fora del camp de Tarragona, quin pla especial de Protecció Civil de Catalunya s'activa?",
    options: [
      'PROCICAT.',
      'PLASEQCAT (i al camp de Tarragona, el PLASEQTA).',
      'TRANSCAT.',
      'CAMCAT.'
    ],
    correctIndex: 1,
    explanation: 'El PLASEQCAT és el Pla d\'emergència exterior del sector químic de Catalunya (establiments Seveso), mentre que al Camp de Tarragona s\'aplica el PLASEQTA; el TRANSCAT és per a transport de mercaderies perilloses.'
  },
  {
    id: 'sb-hyb-16',
    topic: 22,
    difficulty: 'Mitjana',
    question: "En un incendi industrial amb el SISCOM desplegat en dos sectors d'intervenció, arriba una dotació de reforç procedent d'un altre parc sense instrucció específica de sector. On s'ha de dirigir inicialment?",
    options: [
      'Directament a la primera línia de foc del Sector 1 per iniciativa pròpia.',
      'Al Centre de Recepció de Mitjans (CRM) per registrar-se i esperar assignació del Comandament.',
      'A la Zona Calenta a muntar una instal·lació d\'escuma.',
      'Al Puesto de Mando Avançat a parlar directament amb el màxim càrrec polític.'
    ],
    correctIndex: 1,
    explanation: 'Segons la doctrina SISCOM, les dotacions de reforç sense assignació directa s\'incorporen al CRM (Centre de Recepció de Mitjans) per garantir el control, la seguretat i la unitat de comandament.'
  },
  {
    id: 'sb-hyb-17',
    topic: 24,
    difficulty: 'Difícil',
    question: "En arribar a un incendi confinat dins un local sense finestres, observes fum dens fosc/groguenc que entra i surt a polsacions per sota de la porta, vidres bruts de sutge i cap flama visible. Quin fenomen és imminent i quina actuació inicial és prioritària?",
    options: [
      'Rollover; obrir la porta de bat a bat per ventilar ràpidament.',
      'Backdraft (explosió de fum); evitar l\'entrada sobtada d\'aire, refredar gasos i preparar ventilació controlada i línia en polvorització.',
      'Flashover per excés d\'oxigen; entrar sense línia d\'aigua a cercar el focus.',
      'BLEVE; aplicar CO₂ sobre la porta.'
    ],
    correctIndex: 1,
    explanation: 'Les polsacions de fum, absència de flama per manca d\'O₂ i alta temperatura són senyals clàssics de risc imminent de Backdraft. Una entrada sobtada d\'aire provocaria la deflagració instantània.'
  },
  {
    id: 'sb-hyb-18',
    topic: 25,
    difficulty: 'Difícil',
    question: "Un incendi forestal puja per un pendent del 30% empès pel vent a favor, fent inviable i insegur l'atac directe al cap del foc. Des d'on s'ha d'ancorar l'atac segons la tàctica bàsica d'extinció?",
    options: [
      'Des del cap en descens sense ancoratge.',
      'Ancorant a la cua o zona ja cremada i progressant pels flancs cap al cap.',
      'Únicament al focus secundari més allunyat sense assegurar la cua.',
      'Esperant que el foc arribi a la carena abans de desplegar cap línia.'
    ],
    correctIndex: 1,
    explanation: 'Quan el cap té massa intensitat, la regla bàsica de seguretat i eficàcia és ancorar la maniobra en zona segura (cua / cremat) i tancar progressivament els flancs cap al cap.'
  },
  {
    id: 'sb-hyb-19',
    topic: 26,
    difficulty: 'Mitjana',
    question: "En l'extinció d'un vehicle elèctric amb la bateria de tracció d'ió-liti (Classe L) en embalaments tèrmics (thermal runaway), quina estratègia d'extinció és correcta?",
    options: [
      'Una descàrrega curta de CO₂ i donar el servei per extingit en 2 minuts.',
      'Refrigeració sostinguda amb abundant aigua sobre el paquet de bateries i vigilància posterior per risc de reignició.',
      'Aplicar pols ABC a pressió i marxar immediatament.',
      'Cobrir el vehicle amb una manta de cotó sec sense aplicar aigua.'
    ],
    correctIndex: 1,
    explanation: 'Les bateries Li-ion en embalament tèrmic generen oxigen internament i alliberen molta calor; requereixen refrigeració prolongada amb gran cabal d\'aigua i seguiment per possible reignició diferida.'
  },
  {
    id: 'sb-hyb-20',
    topic: 27,
    difficulty: 'Difícil',
    question: "En un accident d'un camió cisterna bolcat amb fuita de líquid, el panell taronja mostra «33» a la part superior i «1203» a la inferior. Què significa exactament el codi?",
    options: [
      'Gas tòxic inflamable (propà, ONU 1203).',
      'Líquid molt inflamable (33) corresponent a benzina / gasolina (ONU 1203).',
      'Matèria sòlida corrosiva que reacciona violentament amb l\'aigua.',
      'Líquid comburent a alta temperatura (1203 °C).'
    ],
    correctIndex: 1,
    explanation: 'Al panell taronja ADR: el 33 indica líquid molt inflamable (punt d\'inflamació < 23 °C) i el número ONU 1203 correspon a la benzina.'
  },
  {
    id: 'sb-hyb-21',
    topic: 29,
    difficulty: 'Difícil',
    question: "En un Incident amb Múltiples Víctimes (IMV), apliques el triatge START a un ferit que NO pot caminar per una fractura tancada de fèmur, però respira a 22 rpm, té un emplenament capil·lar d'1,5 segons i obeeix ordres senzilles. Quina targeta li assignes?",
    options: [
      'Verda (Prioritat 3).',
      'Groga (Prioritat 2).',
      'Vermella (Prioritat 1).',
      'Negra / Blava (Prioritat 0).'
    ],
    correctIndex: 1,
    explanation: 'Segons el mètode START: no camina (descarta Verda), respira < 30 rpm, perfusió < 2 s i estat mental normal (obeeix ordres) → Targeta Groga (prioritat 2, urgència demorable).'
  },
  {
    id: 'sb-hyb-22',
    topic: 30,
    difficulty: 'Mitjana',
    question: "Després del col·lapse d'un edifici, un forjat queda inclinat formant un angle agut en recolzar-se un extrem sobre el terra i l'altre sobre un mur mestre que ha resistit. Com s'anomena aquest tipus de col·lapse on sovint es formen espais vitals?",
    options: [
      'Col·lapse en «V» invertida sense buits.',
      'Col·lapse inclinat o en falca (lean-to collapse).',
      'Col·lapse en sandvitx (pancake) totalment compacte.',
      'Col·lapse per torsió helicoïdal.'
    ],
    correctIndex: 1,
    explanation: 'El col·lapse inclinat (lean-to) es produeix quan un extrem del forjat falla mentre l\'altre resta suportat per un mur o pilar, generant un espai triangular segur sota la llosa inclinada.'
  },
  {
    id: 'sb-hyb-23',
    topic: 32,
    difficulty: 'Difícil',
    question: "Abans de tallar un pilar B o C amb la cisalla hidràulica en un turisme modern amb airbags de cortina no desplegats, quina actuació prèvia és obligatòria?",
    options: [
      'Tallar directament per la part més alta del pilar sense retirar res.',
      'Retirar els guarneixements interiors («pelar» els pilars) per localitzar els cartutxos generadors de gas i evitar tallar-los.',
      'Punxar el cartutx amb un tornavís per despressuritzar-lo.',
      'Desconnectar només el pol positiu de la bateria i tallar immediatament.'
    ],
    correctIndex: 1,
    explanation: 'Els guarneixements amaguen cartutxos d\'alta pressió (pirotècnics/gas) i reforços d\'acer d\'alta resistència. Cal «pelar» sempre la zona abans de tallar per evitar projeccions o trencament de fulles.'
  },
  {
    id: 'sb-hyb-24',
    topic: 33,
    difficulty: 'Difícil',
    question: "Abans d'accedir a un pou o arqueta de clavegueram de 5 m per rescatar una persona inconscient, com s'ha de fer la lectura amb el detector multigas?",
    options: [
      'Mesurar només a la boca superior durant 3 segons.',
      'Mesurar des de l\'exterior amb sonda a diferents altures (superior, mitjana i inferior) per detectar gasos tant més lleugers com més densos que l\'aire.',
      'Baixar primer sense detector i mesurar un cop al fons.',
      'Mesurar únicament el nivell de CO₂.'
    ],
    correctIndex: 1,
    explanation: 'Els gasos tenen densitats diferents (el metà puja, l\'H₂S i el CO₂ s\'acumulen al fons). Cal mostrejar des de l\'exterior a tot el perfil vertical (O₂, LEL i tòxics).'
  },
  {
    id: 'sb-hyb-25',
    topic: 34,
    difficulty: 'Mitjana',
    question: "En un episodi d'inundacions, a partir de quina alçada aproximada d'aigua en moviment (riuada o gual inundat) un turisme convencional perd adherència per flotació i pot ser arrossegat pel corrent?",
    options: [
      'Només a partir d\'1,5 metres (quan cobreix el sostre).',
      'Entre 30 i 50 cm d\'aigua corrent.',
      'Només si supera els 2 metres de profunditat.',
      'Un turisme no pot ser arrossegat mai si té el fre de mà posat.'
    ],
    correctIndex: 1,
    explanation: 'Amb només 15 cm d\'aigua corrent es pot perdre el control de la direcció, i entre 30 i 50 cm la força d\'empenyiment i flotació ja pot arrossegar la majoria de turismes.'
  },
  {
    id: 'sb-puny-1',
    topic: 28,
    difficulty: 'Difícil',
    question: "En quins casos NO són fiables les lectures amb el pulsioxímetre convencional?",
    options: [
      'Víctimes per inhalació de diòxid de carboni (CO₂).',
      'Pacients amb hipertèrmia.',
      'Les dues opcions anteriors (A i B) són correctes.',
      'Pacients amb hipotèrmia.'
    ],
    correctIndex: 3,
    explanation: 'TRAMPA CLÀSSICA: El pulsioxímetre falla amb el MONÒXID de carboni (CO, que forma carboxihemoglobina), NO pas amb el diòxid de carboni (CO₂)! En canvi, en pacients amb HIPOTÈRMIA (vasoconstricció perifèrica) la lectura NO és fiable.'
  },
  {
    id: 'sb-puny-2',
    topic: 28,
    difficulty: 'Difícil',
    question: "On s'ha de col·locar un torniquet homologat en una hemorràgia arterial exsanguinant d'extremitat, segons les correccions actualitzades de MAN.SANI.000?",
    options: [
      'Exactament a 2 cm per sobre de la ferida, o directament sobre l\'articulació si cal.',
      'De 5 a 7 cm per sota de la ferida (en sentit distal) per no danyar el retorn venós.',
      'De 5 a 7 cm per sobre de la ferida, mai sobre una articulació (si cal, per sobre de l\'articulació).',
      'De 5 a 7 cm per sobre de la ferida, afluixant-lo 30 segons cada 15 minuts.'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu: 5–7 cm per SOBRE (proximal) de la ferida, MAI sobre una articulació (si cau sobre articulació, s\'aplica per sobre d\'aquesta), registrant l\'hora i sense afluixar-lo mai.'
  },
  {
    id: 'sb-puny-3',
    topic: 28,
    difficulty: 'Difícil',
    question: "Segons la classificació oficial d'edat actualitzada de MAN.SANI.000 (Punt 2.1 d), quina franja correspon exactament a 'Nen/a' i quina a 'Lactant'?",
    options: [
      'Lactant: d\'1 mes a 1 any | Nen/a: d\'1 any fins a la pubertat.',
      'Lactant: fins a 1 any | Nen/a: d\'1 a 12 anys (i Adolescent: de 13 a 18 anys).',
      'Lactant: de 0 a 28 dies | Nen/a: d\'1 mes a 14 anys.',
      'Lactant: fins a 2 anys | Nen/a: de 2 a 12 anys.'
    ],
    correctIndex: 1,
    explanation: 'Correcció oficial 2026: Nadó/nounat (immediatament després del part), Lactant (fins a 1 any), Nen/a (d\'1 a 12 anys), Adolescent (de 13 a 18 anys), Adult/a (≥ 18 anys o considerat adult pel reanimador).'
  },
  {
    id: 'sb-puny-4',
    topic: 28,
    difficulty: 'Difícil',
    question: "En RCP pediàtrica en un lactant (< 1 any), quina tècnica de compressions toràciques és la preferent segons el Punt 4.5 actualitzat?",
    options: [
      'Compressions al terç superior de l\'estèrnum amb el taló d\'una mà.',
      'Compressions sobre la meitat inferior de l\'estèrnum utilitzant preferentment l\'encerclament del tòrax amb dos polzes.',
      'Compressions abdominals subdiafragmàtiques (Heimlich) alternades amb 2 ventilacions.',
      'Compressions amb dues mans entrellaçades al centre de l\'abdomen.'
    ],
    correctIndex: 1,
    explanation: 'Correcció 2026: les compressions toràciques es fan sobre la meitat inferior de l\'estèrnum; en lactants s\'utilitza preferentment la tècnica d\'encerclament del tòrax amb dos polzes.'
  },
  {
    id: 'sb-puny-5',
    topic: 20,
    difficulty: 'Difícil',
    question: "Quina norma europea/internacional regula específicament el vestuari de protecció per a incendis forestals (EPI lleuger) segons la correcció oficial del Punt 2.2.2?",
    options: [
      'EN 469 (Nivell 2).',
      'EN 15614.',
      'EN ISO 15384.',
      'EN 16471.'
    ],
    correctIndex: 2,
    explanation: 'Correcció oficial 2026: la norma del vestuari de protecció per a incendis forestals és EN ISO 15384 (substitueix l\'antiga referència EN 15614). EN 16471 és el casc forestal.'
  },
  {
    id: 'sb-puny-6',
    topic: 21,
    difficulty: 'Difícil',
    question: "Quina afirmació és CORRECTA sobre els plans especials de Protecció Civil a Catalunya segons la correcció oficial del Punt 4.1.1?",
    options: [
      'FERROCAT regula els accidents ferroviaris i AEROCAT els accidents aeris.',
      'AEROCAT regula les emergències aeronàutiques (i FERROCAT no és un pla especial autònom: s\'integra dins PROCICAT).',
      'El PBEM és un pla especial exclusiu per a riscos químics municipals.',
      'AEROCAT i FERROCAT són els dos únics plans territorials de Catalunya.'
    ],
    correctIndex: 1,
    explanation: 'Correcció oficial 2026: se suprimeix FERROCAT de la llista de plans especials i AEROCAT passa a denominar-se "emergències aeronàutiques". El PBEM és pla municipal multirisc per a riscos no especials.'
  },
  {
    id: 'sb-puny-7',
    topic: 24,
    difficulty: 'Difícil',
    question: "En un incendi d'habitatge confinat, una víctima es troba en una habitació propera separada per UNA sola porta tancada (Categoria de supervivència Mitja). Quina és la supervivència estimada segons la taula corregida del manual?",
    options: [
      '6 – 10 minuts.',
      '< 6 minuts.',
      '> 10 minuts.',
      'Quasi il·limitada.'
    ],
    correctIndex: 2,
    explanation: 'TRAMPA DE TAULA CORREGIDA (Punt 4.3.1): Alta (2 portes o EI) = Quasi il·limitada; Mitja (1 porta tancada) = > 10 min; Baixa (porta oberta) = 6–10 min; Mínima (dins recinte del foc) = < 6 min.'
  },
  {
    id: 'sb-puny-8',
    topic: 26,
    difficulty: 'Difícil',
    question: "Segons la correcció oficial del Punt 2.2.2 del manual d'incendis varis (MAN.INXX.000), quin d'aquests gasos en vehicles presenta risc d'explosió tipus BLEVE?",
    options: [
      'Només el GNC (Gas Natural Comprimit), per estar a 200 bar.',
      'Tant el GLP com el GNC presenten risc de BLEVE idèntic.',
      'El GLP (Gas Liquat del Petroli), ja que s\'emmagatzema liquat a pressió.',
      'Cap gas liquat pot patir BLEVE, només el dièsel.'
    ],
    correctIndex: 2,
    explanation: 'Correcció oficial 2026: la BLEVE (Boiling Liquid Expanding Vapor Explosion) es produeix en gasos LIQUATS a pressió (GLP), NO en gasos comprimits no liquats com el GNC.'
  },
  {
    id: 'sb-puny-9',
    topic: 25,
    difficulty: 'Difícil',
    question: "En un incendi forestal amb dotacions atrapades en fase crítica (Situació 3 del Punt 5.5), quin missatge exacte ha de transmetre el cap de la UBI fent servir la marcació d'alarma del terminal?",
    options: [
      '«SOS INDIVIDUAL, bomber ferit».',
      '«ATRAPAMENT EN ZONA BLAVA, sol·licitem evacuació».',
      '«CODI VERMELL, dotacions atrapades en fase crítica».',
      '«CODI NEGRE, retirada immediata del flanc».'
    ],
    correctIndex: 2,
    explanation: 'Correcció oficial Punt 5.5: en Situació 2 transmet "CODI VERMELL", i en Situació 3 transmet exactament "CODI VERMELL, dotacions atrapades en fase crítica".'
  },
  {
    id: 'sb-puny-10',
    topic: 18,
    difficulty: 'Difícil',
    question: "Segons les correccions oficials de MAN.EQIP.000, quin és l'angle d'atac d'una BUP (Punt 3.3) i quina és la sigla correcta dels vehicles de transport de personal i càrrega (Punt 5.3.1)?",
    options: [
      'Angle d\'atac 4° | Sigla UCP.',
      'Angle d\'atac 13° | Sigla UPC.',
      'Angle d\'atac 13° | Sigla UCP.',
      'Angle d\'atac 4° | Sigla UPC.'
    ],
    correctIndex: 1,
    explanation: 'Correcció oficial 2026: l\'angle d\'atac de la BUP és 13° (no 4°) i la sigla del vehicle de transport de personal i càrrega és UPC (UCP és la Unitat de Comandament Pesant!).'
  },
  {
    id: 'sb-puny-11',
    topic: 17,
    difficulty: 'Difícil',
    question: "En la correcció oficial del Punt 5.3.6 de comunicacions per ràdio, entre un cap de parc i quina sala s'envia el missatge de suport logístic?",
    options: [
      'Sala CCB.',
      'Sala SCB.',
      'Sala CECAT.',
      'Sala 112.'
    ],
    correctIndex: 1,
    explanation: 'Correcció oficial Punt 5.3.6: l\'exemple oficial indica l\'enviament d\'un missatge de suport logístic entre un cap de parc i la Sala SCB (no pas Sala CCB).'
  },
  {
    id: 'sb-puny-12',
    topic: 32,
    difficulty: 'Difícil',
    question: "En excarceració (MAN.SVVH.000), a quina maniobra correspon exactament la denominació col·loquial 'catalana' segons la correcció del Punt 4.4?",
    options: [
      'Desplaçament o tall del seient (catalana).',
      'Abatiment de seient (catalana).',
      'Elevació de sostre amb separador (catalana).',
      'Desmunt de pedals (catalana).'
    ],
    correctIndex: 1,
    explanation: 'Correcció oficial Punt 4.4: "(catalana)" correspon a l\'Abatiment de seient (no al desplaçament o tall del seient); la "tenda" correspon a l\'elevació de sostre amb separador.'
  },
  {
    id: 'sb-puny-13',
    topic: 32,
    difficulty: 'Difícil',
    question: "Segons el Punt 4.2.3 corregit de MAN.SVVH.000, en quins turismes es pot aplicar aquella tècnica d'obertura i quants tipus de maniobres hi ha al Punt 4?",
    options: [
      'Turismes de dues o quatre portes | Tres tipus de maniobres.',
      'Turismes de cinc o tres portes | Quatre tipus de maniobres.',
      'Turismes de dues o quatre portes | Quatre tipus de maniobres.',
      'Només furgonetes | Tres tipus de maniobres.'
    ],
    correctIndex: 1,
    explanation: 'Correccions Punt 4 i Punt 4.2.3: parlem de QUATRE tipus de maniobres, i s\'aplica en turismes de CINC o TRES portes (no dues o quatre).'
  },
  {
    id: 'sb-puny-14',
    topic: 33,
    difficulty: 'Difícil',
    question: "Respecte al contrapès en un ascensor hidràulic (Punt 3.1.2 corregit), quina afirmació és EXACTA?",
    options: [
      'Un ascensor hidràulic no incorpora mai cap contrapès ni cables en cap configuració.',
      'Un ascensor hidràulic sempre porta un contrapès equivalent al 50% de la càrrega nominal.',
      'Generalment no necessita contrapès, tot i que algunes configuracions d\'accionament indirecte poden incorporar-ne (amb cables/politges).',
      'Només porta contrapès quan funciona sense oli.'
    ],
    correctIndex: 2,
    explanation: 'Correcció oficial Punt 3.1.2: els ascensors hidràulics generalment no necessiten contrapès, però algunes configuracions d\'accionament indirecte poden incorporar-ne juntament amb cables d\'acer i politges.'
  },
  {
    id: 'sb-puny-15',
    topic: 23,
    difficulty: 'Difícil',
    question: "Segons el Punt 5.2.2 a) corregit de prevenció bàsica d'incendis (MAN.SP.000), quants caràcters té el CODI PARC en la nomenclatura?",
    options: [
      'Sempre 4 lletres exactes.',
      '3 o 4 lletres.',
      '2 dígits numèrics.',
      '5 dígits.'
    ],
    correctIndex: 1,
    explanation: 'Correcció oficial Punt 5.2.2 a): on deia "CODI PARC (4 lletres)" ara ha de dir "CODI PARC (3 o 4 lletres)".'
  },
  {
    id: 'sb-puny-16',
    topic: 10,
    difficulty: 'Difícil',
    question: "Quin és el nom correcte de l'isòtop H-3 de l'hidrogen (símbol T) i quina és la fórmula general dels alquens?",
    options: [
      'Trici | CₙH₂.',
      'Triti | CₙH₂ₙ.',
      'Deuteri | CₙH₂ₙ₊₂.',
      'Triti | CₙH₂ₙ₋₂.'
    ],
    correctIndex: 1,
    explanation: 'Correccions Punt 2.4 i 8.2: l\'isòtop H-3 s\'anomena TRITI (no trici) i la fórmula general dels alquens és CₙH₂ₙ (no CₙH₂).'
  },
  {
    id: 'sb-puny-17',
    topic: 8,
    difficulty: 'Difícil',
    question: "En la propietat física de l'aigua com a agent extintor (Punt 13.2.1 corregit), quin terme tècnic s'ha substituït a 'Elevada capacitat calorífica'?",
    options: [
      'Elevada conductivitat tèrmica.',
      'Elevada calor específica.',
      'Elevada entalpia de sublimació.',
      'Baixa calor latent.'
    ],
    correctIndex: 1,
    explanation: 'Correcció oficial Punt 13.2.1 (MAN.GRAL.008): on deia "Elevada capacitat calorífica" ara ha de dir "Elevada calor específica".'
  },
  {
    id: 'sb-puny-18',
    topic: 15,
    difficulty: 'Mitjana',
    question: "Segons el Punt 5.4.1 b) corregit de construcció (MAN.GRAL.006), quin nom rep el sistema constructiu porticat?",
    options: [
      'Sistema de pilars i formats (porticat).',
      'Sistema de pilars i forjats (porticat).',
      'Sistema de murs de càrrega i arcs.',
      'Sistema d\'encavallades triangulades.'
    ],
    correctIndex: 1,
    explanation: 'Correcció oficial Punt 5.4.1 b): "Sistema de pilars i forjats (porticat)" (corregeix l\'errata "formats").'
  },
  {
    id: 'sb-puny-19',
    topic: 27,
    difficulty: 'Difícil',
    question: "Dins quina zona d'intervenció NRBQ (Punts 5.1.1 i 5.1.2 substituïts) s'ubiquen els punts de descontaminació de persones i equips (ABD) i dins quina s'ubiquen les àrees de preparació logística?",
    options: [
      'ABD a la Zona Tèbia | Preparació logística a la Zona Calenta.',
      'ABD a la Zona Calenta | Preparació logística a la Zona Tèbia.',
      'Tots dos a la Zona Freda.',
      'ABD a la Zona Freda | Preparació logística a la Zona Calenta.'
    ],
    correctIndex: 1,
    explanation: 'Correcció oficial Punts 5.1.1 i 5.1.2: els punts de descontaminació de persones i equips (ABD) són dins la Zona Calenta, mentre que a la Zona Tèbia s\'estableixen les àrees de preparació logística.'
  },
  {
    id: 'sb-puny-20',
    topic: 16,
    difficulty: 'Difícil',
    question: "En un cop de calor en un animal (Punt 2.5 corregit de MAN.ATXX.000), quina mesura s'ha ELIMINAT del protocol?",
    options: [
      'Ruixats d\'aigua per baixar la temperatura corporal.',
      'Posar l\'animal a l\'ombra.',
      'Aplicar alcohol en zones irrigades.',
      'Hidratació progressiva fins al relleu veterinari.'
    ],
    correctIndex: 2,
    explanation: 'Correcció oficial Punt 2.5: s\'ha suprimit "alcohol en zones irrigades", mantenint ruixats d\'aigua, ombra i hidratació progressiva fins al relleu veterinari.'
  }
];
