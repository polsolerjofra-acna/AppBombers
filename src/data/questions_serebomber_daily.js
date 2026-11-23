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
  }
];
