/**
 * Simulacre 128 (Acadèmia Bombers) — 70 preguntes oficials d'estil oposició amb solucions i explicacions.
 */
export const QUESTIONS_SIM_128 = [
  {
    topic: 27,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P1] Un equip d’emergència necessita un vestit que protegeixi tant l’usuari com l’ERA, que queda situat a l’interior del vestit. De quin tipus es tracta?',
    options: ['Tipus 1a', 'Tipus 1b', 'Tipus 1c', 'Tipus 2'],
    correctIndex: 0,
    explanation: 'Tipus 1a = vestit totalment encapsulat amb ERA a dins; 1b = ERA a fora; 1c = subministrament d\'aire extern.'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P2] Treballant en zona calenta, un bomber percep el senyal acústic doble ("bip-bip" + "bip-bip") del seu ERA. Quina pressió indica i quina actuació correspon?',
    options: [
      '170 bars: ha assolit la meitat del temps de treball',
      '60 bars: ha entrat en la reserva d\'aire',
      '110 bars: ha d\'iniciar la sortida de la zona calenta',
      '130 bars: ha d’abandonar la zona de risc'
    ],
    correctIndex: 2,
    explanation: '170 bars = avís simple (meitat de treball); 110 bars = doble avís (iniciar sortida zona calenta); 60 bars = so continu (reserva).'
  },
  {
    topic: 7,
    difficulty: 'Difícil',
    question: '[Sim 128 · P3] D\'acord amb el Decret 12/2023, quina de les següents funcions correspon a la Direcció de Serveis?',
    options: [
      'Coordinar els serveis de recepció i atenció al ciutadà amb seguiment de qualitat',
      'Planificar i impulsar accions adreçades a la integració, la rendibilització i l\'optimització màximes de les actuacions de les diferents unitats del Departament',
      'Mantenir les relacions ordinàries amb recursos humans',
      'Coordinar els serveis de recepció de la seu del Departament'
    ],
    correctIndex: 1,
    explanation: 'Art. 5.1 Decret 12/2023: correspon a la Direcció de Serveis planificar i impulsar accions d\'integració, rendibilització i optimització màximes de les unitats.'
  },
  {
    topic: 31,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P4] Es planifica de nit la revisió minuciosa dels vorals i marges dels camins ja recorreguts, creient que la persona no es mou. Quins recursos i rendiment té?',
    options: [
      'Baixa necessitat de personal, velocitat baixa i efectivitat nocturna alta',
      'Molt personal, baixa velocitat d\'execució i minuciositat molt alta',
      'Molt personal, alta velocitat d\'execució i alta efectivitat nocturna',
      'Baixa necessitat de personal, velocitat alta i efectivitat nocturna alta'
    ],
    correctIndex: 2,
    explanation: 'La recerca intensiva per línies naturals (vorals, marges) requereix molt personal, però manté alta velocitat d\'execució i alta efectivitat nocturna.'
  },
  {
    topic: 6,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P5] Segons la Llei 4/1997, com han de rebre la informació i instruccions els veïns que es poden veure afectats per una situació de risc greu?',
    options: [
      'De manera periòdica, gratuïta i homologada',
      'De manera immediata, proporcionada i coordinada',
      'De manera reservada i limitada als representants',
      'De manera àmplia, precisa i eficaç sobre les mesures de seguretat i la conducta a seguir'
    ],
    correctIndex: 3,
    explanation: 'Art. 4.2 Llei 4/1997: de manera àmplia, precisa i eficaç sobre les mesures de seguretat a prendre i la conducta a seguir.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P6] Durant una explicació amb el símil hidràulic, l\'instructor tanca la vàlvula de la instal·lació. Quina situació elèctrica representa?',
    options: [
      'Un circuit tancat',
      'Una pèrdua de càrrega',
      'Un generador aturat',
      'Un circuit obert'
    ],
    correctIndex: 3,
    explanation: 'Vàlvula tancada (no passa aigua) = interruptor obert = circuit elèctric obert (sense circulació de corrent).'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P7] Per la resistència d\'un assecador de mànegues de 40 Ω hi circulen 5 A. Quina potència hi dissipa?',
    options: ['1.000 W', '200 W', '8.000 W', '25 W'],
    correctIndex: 0,
    explanation: 'P = I² · R = 5² · 40 = 25 · 40 = 1.000 W.'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P8] Quina dotació de personal té una ambulància de suport vital bàsic (tipus B)?',
    options: [
      '1 tècnic/a i 1 metge/ssa',
      '2 tècnics/ques en emergències sanitàries',
      '1 tècnic/a i 1 infermer/a',
      '1 sol tècnic/a'
    ],
    correctIndex: 1,
    explanation: 'L\'ambulància de tipus B (SVB) va dotada de 2 tècnics/ques en emergències sanitàries (TES).'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P9] En un incendi forestal, la vegetació presenta un contingut d\'humitat molt elevat. Quin comportament s\'espera del front de flama?',
    options: [
      'L\'ignició serà més ràpida',
      'L\'ignició es retardarà i la velocitat de combustió disminuirà pel consum de calor latent',
      'La velocitat augmentarà perquè l\'aigua allibera oxigen',
      'El comportament no variarà'
    ],
    correctIndex: 1,
    explanation: 'L\'aigua ha d\'evaporar-se consumint calor latent, fet que retarda la ignició i frena la velocitat de combustió.'
  },
  {
    topic: 16,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P10] En una mateixa finca cal retirar una serp de gran mida i un ocellet ferit. Quins recursos de captura física corresponen?',
    options: [
      'Salabre per a la serp i llaç per a l\'ocellet',
      'Llaç per a tots dos',
      'Tovallola per a la serp i xarxa de niló per a l\'ocellet',
      'Llaç per a la serp i salabre per a l\'ocellet'
    ],
    correctIndex: 3,
    explanation: 'Llaços per a mamífers mitjans o rèptils grans (serp); salabres per a animals petits (ocellet).'
  },
  {
    topic: 26,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P11] En un incendi de turisme es detecta clorur d’hidrogen (HCl) als fums de l\'habitacle. De quin material pot provindre principalment?',
    options: [
      'Dels plàstics del quadre de comandaments',
      'De les escumes dels seients',
      'De la goma dels pneumàtics en combustió',
      'De l\'oli hidràulic dels sistemes auxiliars'
    ],
    correctIndex: 0,
    explanation: 'El clorur d\'hidrogen (HCl) prové principalment dels plàstics (PVC), mentre que el cianur d\'hidrogen (HCN) prové de les escumes de poliuretà dels seients.'
  },
  {
    topic: 8,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P12] Referent al fenomen de les combustions detonants o detonacions podem afirmar el següent:',
    options: [
      'L\'energia es propaga sense augment local de temperatura',
      'Gairebé sempre són processos de naturalesa química',
      'Es generen ones de pressió que es mantenen paral·leles entre si',
      'La velocitat de propagació del foc és superior a la de la llum'
    ],
    correctIndex: 1,
    explanation: 'Les detonacions (>340 m/s, velocitat del so, generant ona de xoc) són gairebé sempre processos de naturalesa química.'
  },
  {
    topic: 34,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P13] Quin és el llindar baix d\'intensitat de pluja segons el Servei Meteorològic de Catalunya?',
    options: [
      'Intensitat inferior a 40 mm en 30 minuts',
      'Intensitat inferior a 30 mm en 1 hora',
      'Intensitat inferior a 20 mm en 30 minuts',
      'Intensitat inferior a 10 mm en 1 hora'
    ],
    correctIndex: 2,
    explanation: 'Llindar baix d\'intensitat de pluja SMC: > 20 mm en 30 minuts (i per sota de 40 mm/30 min; en l\'enunciat es pren 20 mm/30 min com a referència del llindar baix).'
  },
  {
    topic: 5,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P14] D\'acord amb l\'article 6 de la Llei 1/1998, quina és l\'autoritat lingüística?',
    options: [
      'L\'Institut d\'Estudis Catalans',
      'El Consorci per a la Normalització Lingüística',
      'La Generalitat',
      'El professorat dels centres docents'
    ],
    correctIndex: 0,
    explanation: 'Art. 6.2 Llei 1/1998: correspon a l\'Institut d\'Estudis Catalans l\'autoritat lingüística.'
  },
  {
    topic: 23,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P15] En la ventilació forçada dels aparcaments, com es realitza la ventilació i com pot ser l\'admissió d\'aire?',
    options: [
      'Per sobrepressió, i l\'admissió ha de ser sempre mecànica',
      'Per sobrepressió, i l\'admissió pot ser natural o mecànica',
      'Per depressió, i l\'admissió ha de ser sempre mecànica',
      'Per depressió, i l\'admissió d\'aire pot ser natural o mecànica'
    ],
    correctIndex: 3,
    explanation: 'En aparcaments la ventilació forçada treballa per depressió (extracció mecànica) i l\'admissió pot ser natural o mecànica.'
  },
  {
    topic: 30,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P16] Durant l\'exploració d\'una estructura col·lapsada, un equip marca amb sticks lluminosos verds un itinerari entre la runa. Què indica?',
    options: [
      'Que la zona ja ha estat revisada sense víctimes',
      'Que sota aquell punt hi ha una víctima potencial',
      'Que es tracta d\'una ruta transitable per als equips que hi treballen',
      'Que es tracta d\'una zona de perill que cal delimitar'
    ],
    correctIndex: 2,
    explanation: 'En senyalització de seguretat, el verd assenyala rutes transitables (el vermell indica perill).'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P17] En un sanejament s\'ha de reomplir una junta amb una mescla de ciment, aigua i sorra. Quin material s\'està emprant?',
    options: ['Un morter', 'Una pasta', 'Un formigó', 'Un revestiment de guix'],
    correctIndex: 0,
    explanation: 'Morter = conglomerant + aigua + sorra (pasta = conglomerant + aigua; formigó = conglomerant + aigua + àrids).'
  },
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P18] L\'embarrat general d\'una instal·lació elèctrica d’enllaç:',
    options: [
      'Rep l’alimentació procedent de la LGA i la distribueix entre els diferents subministraments',
      'És la part que alimenta cada usuari',
      'És una unitat funcional per deixar fora de servei la centralització',
      'Uneix la caixa general de protecció amb la centralització'
    ],
    correctIndex: 0,
    explanation: 'L\'embarrat general rep l\'alimentació de la Línia General d\'Alimentació (LGA) i la distribueix cap a les derivacions individuals.'
  },
  {
    topic: 3,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P19] Segons l’article 31.4 de la LPRL, de quines circumstàncies depenen els mitjans i recursos tècnics del servei de prevenció?',
    options: [
      'Del nombre de treballadors i distribució de recursos preventius',
      'De l\'antiguitat de l’empresa i nivell de formació',
      'De l\'antiguitat de les instal·lacions i nombre d\'EPIs',
      'De les dimensions de l’empresa, del tipus de risc a què es puguin exposar els treballadors i de la distribució de riscos a l’empresa'
    ],
    correctIndex: 3,
    explanation: 'Art. 31.4 LPRL: dimensions de l\'empresa, tipus de risc i distribució de riscos a l\'empresa.'
  },
  {
    topic: 2,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P20] Segons el Decret 243/1995 (Règim disciplinari de la Generalitat), es considera una falta GREU:',
    options: [
      'L\'abandonament del servei',
      'El fet d\'originar enfrontaments en els centres de treball o prendre-hi part',
      'Les faltes repetides de puntualitat dins un mateix mes sense causa justificada',
      'La realització d\'actes dirigits a limitar la lliure expressió'
    ],
    correctIndex: 1,
    explanation: 'Art. 4 D 243/1995: originar enfrontaments o prendre-hi part és falta greu (abandonament del servei i limitar la lliure expressió són molt greus).'
  },
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P21] Una dotació trosseja un arbre caigut en una zona verda, sense persones atrapades. Quina afirmació és FALSA?',
    options: [
      'Cal començar retallant les branques secundàries no recolzades al terra',
      'Les branques tallades s\'han d\'anar retirant del lloc a mesura que es van tallant',
      'Durant el desbrancament convé treballar amb una sola motoserra en funcionament',
      'En una branca amb dos punts de recolzament, el primer tall es fa a la part superior'
    ],
    correctIndex: 1,
    explanation: 'Mentre es desbranca no s\'han de retirar les branques fins que s\'acabi de tallar (llevat que hi hagi persones atrapades).'
  },
  {
    topic: 26,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P22] En arribar a un turisme incendiat observeu un adhesiu "ECO BI-FUEL" a la part posterior. Quina comprovació addicional es recomana?',
    options: [
      'Utilitzar el detector de gasos per comprovar possibles fuites',
      'Obrir la tapa del dipòsit per llegir l\'etiqueta',
      'Comprovar l\'absència de tub d\'escapament',
      'Consultar la fitxa de seguretat abans d\'aproximar-s\'hi'
    ],
    correctIndex: 0,
    explanation: 'L\'adhesiu indica vehicle bifuel (gas + gasolina); cal utilitzar el detector de gasos per descartar fuites.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P23] Quins patrons sistemàtics es poden seguir per dur a terme la recerca física en una estructura col·lapsada?',
    options: [
      'Rastreig en ziga-zaga, quadrícula numerada o patró en espiral',
      'Avanç en línia, venteig perimetral o patró en espiral',
      'Crida i escolta, cercles concèntrics o sondeig amb geòfons',
      'L\'avanç en línia, els cercles concèntrics o el patró en habitacions múltiples'
    ],
    correctIndex: 3,
    explanation: 'Els tres patrons sistemàtics de recerca física són: avanç en línia, cercles concèntrics i patró en habitacions múltiples.'
  },
  {
    topic: 9,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P24] Remolquem un cotxe amb una eslinga formant 60° amb la direcció d\'avanç i un esforç de tracció de 600 N. Quin treball es fa en desplaçar-lo 20 m?',
    options: ['12 kJ', '10 kJ', '6 kJ', '3 kJ'],
    correctIndex: 2,
    explanation: 'W = F · d · cos(60°) = 600 · 20 · 0,5 = 6.000 J = 6 kJ.'
  },
  {
    topic: 24,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P25] La maniobra d’atac transicional:',
    options: [
      'Consisteix en un atac ofensiu exterior a nivell de terra',
      'Consisteix en un atac defensiu interior en altura',
      'Consisteix en un atac defensiu exterior a nivell de terra',
      'Consisteix en un atac ofensiu exterior en altura'
    ],
    correctIndex: 0,
    explanation: 'L\'atac transicional és un atac ofensiu exterior directe a nivell de terra per reduir la potència del foc abans de l\'atac interior.'
  },
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P26] Quina maniobra de rescat en alçada exigeix estar assegurat per dos punts?',
    options: [
      'Maniobres amb elements de retenció',
      'Maniobra de progressió tipus escalada',
      'Maniobra d’ascens per corda fixa',
      'Maniobra de progressió i assegurament amb sistema MGO'
    ],
    correctIndex: 3,
    explanation: 'La progressió amb sistema MGO exigeix estar assegurat per dos punts (mantenint sempre un mosquetó de gran obertura connectat).'
  },
  {
    topic: 21,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P27] L\'estructura operativa definida en els plans de protecció civil de Catalunya es resumeix en:',
    options: [
      'Direcció del Pla, consell assessor, gabinet d\'informació i voluntariat',
      'Comitè d\'emergències, grups actuants, plans de grup i CECAT',
      'Direcció del Pla, comitè d\'emergències, grups actuants i centres de coordinació',
      'Direcció del Pla, comitè d\'emergències, sales operatives i punts d\'acollida'
    ],
    correctIndex: 2,
    explanation: 'Estructura operativa dels plans catalans: Direcció del Pla, Comitè d\'emergències, Grups actuants i Centres de coordinació.'
  },
  {
    topic: 13,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P28] Un fluid circula per un conducte que s\'estreny. Segons l’efecte Venturi, què succeeix en aquesta zona?',
    options: [
      'La velocitat disminueix i la pressió augmenta',
      'La velocitat es manté constant i la pressió augmenta',
      'La velocitat del fluid augmenta i la seva pressió disminueix',
      'La pressió i la velocitat disminueixen simultàniament'
    ],
    correctIndex: 2,
    explanation: 'Efecte Venturi: en disminuir la secció, la velocitat del fluid augmenta i la pressió estàtica disminueix.'
  },
  {
    topic: 20,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P29] Abans de cada ús de l\'ERA, quins elements cal inspeccionar amb atenció per detectar defectes, desgast o danys?',
    options: [
      'Totes les parts mòbils, les juntes i les connexions',
      'Totes les parts mòbils, la màscara facial i el visor',
      'Totes les parts fixes, l\'ampolla i el manòmetre',
      'Totes les parts fixes, les corretges i el manòmetre'
    ],
    correctIndex: 0,
    explanation: 'Abans de cada ús cal inspeccionar totes les parts mòbils, les juntes i les connexions.'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P30] Què aporta el sistema META (aplicat per l\'equip mèdic a l\'Àrea Sanitària) respecte del triatge START inicial?',
    options: [
      'Incorpora diagnòstics mèdics i necessitats terapèutiques a la valoració',
      'Reclassifica incorporant només l\'estat general',
      'Complementa sense diagnòstics',
      'Estableix priorització només per temps de trasllat'
    ],
    correctIndex: 0,
    explanation: 'El triatge avançat META (mèdic) incorpora diagnòstics mèdics, valoracions detallades i necessitats terapèutiques.'
  },
  {
    topic: 3,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P31] Segons la Llei 31/1995 de PRL, què s\'ha d\'entendre per processos, activitats, operacions, equips o productes "potencialment perillosos"?',
    options: [
      'Qualsevol característica del treball que pugui generar riscos',
      'Aquells que, en absència de mesures preventives específiques, originen riscos per a la seguretat i la salut dels treballadors que els desenvolupen o els utilitzen',
      'Les característiques generals dels locals i equips',
      'Aquells que, tot i l\'aplicació de mesures preventives, comporten riscos'
    ],
    correctIndex: 1,
    explanation: 'Art. 4.5è LPRL: els que, en absència de mesures preventives específiques, originen riscos per a la seguretat i la salut.'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P32] Un home adult respira a 28 rpm i té pols radial present, però no respon a cap ordre verbal. Quina classificació START li correspon?',
    options: [
      'Groc (prioritat 2)',
      'Vermell (prioritat 1)',
      'Verd (prioritat 3)',
      'Negre (prioritat 4)'
    ],
    correctIndex: 1,
    explanation: 'Respira < 30 rpm i té pols radial, però NO respon a ordres simples (estat mental alterat) → Vermell (prioritat 1).'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P33] Un turisme 4×2 convencional, amb diferencial no bloquejable, té una roda motriu sobre una placa de gel. Què passa quan accelera?',
    options: [
      'La força es reparteix a parts iguals entre les dues rodes',
      'El diferencial es bloqueja automàticament',
      'Un sistema pneumàtic fa girar solidàriament les rodes',
      'Tota la força es transmet a la roda sense adherència'
    ],
    correctIndex: 3,
    explanation: 'Un diferencial obert transmet tota la força/gir a la roda que ofereix menys resistència (la que patina sobre el gel) i el vehicle queda immobilitzat.'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P34] Dins del Pla d\'acció de la intervenció (PAI) en accidents viaris, què caracteritza el Pla B?',
    options: [
      'Maniobra d’atenció dins del vehicle quan l’extracció no és possible',
      'Pla que decideix el servei sanitari un cop hi ha agreujament',
      'Maniobra estructurada i progressiva amb gran generació d’espais',
      'És el pla previst en paral·lel al Pla A per si l\'estat de la víctima s\'agreuja'
    ],
    correctIndex: 3,
    explanation: 'El Pla B (extracció ràpida) es preveu en paral·lel al Pla A per si l\'estat de la víctima s\'agreuja sobtadament.'
  },
  {
    topic: 7,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P35] Segons l\'art. 5 del Decret 276/2016, mitjançant quin instrument s\'estableixen els criteris per assegurar la continuïtat de les dotacions de guàrdia?',
    options: [
      'Circular del Conseller d\'Interior',
      'Resolució del director general competent',
      'Mitjançant una instrucció del director general competent en matèria de prevenció, extinció d\'incendis i salvaments',
      'Ordre interna del subdirector general operatiu'
    ],
    correctIndex: 2,
    explanation: 'Art. 5.2 D 276/2016: mitjançant una instrucció del director general competent en matèria de PEIS.'
  },
  {
    topic: 1,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P36] Quins són els valors superiors de l\'ordenament jurídic espanyol (Art. 1 CE)?',
    options: [
      'La seguretat, la prosperitat, la solidaritat i la cultura',
      'L\'ordre, la disciplina, la unitat i la sobirania',
      'L\'economia, la tecnologia, l\'educació i la sanitat',
      'La llibertat, la justícia, la igualtat i el pluralisme polític'
    ],
    correctIndex: 3,
    explanation: 'Art. 1.1 CE: llibertat, justícia, igualtat i pluralisme polític.'
  },
  {
    topic: 14,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P37] En un sistema de coordenades geogràfiques, quin element permet determinar la latitud d\'un punt?',
    options: [
      'Els paral·lels, perquè permeten mesurar la latitud (angle respecte de l’equador)',
      'Els meridians, que mesuren la latitud',
      'Els meridians i l’equador',
      'Els paral·lels, que uneixen el pol Nord amb el pol Sud'
    ],
    correctIndex: 0,
    explanation: 'Els paral·lels (paral·lels a l\'equador) mesuren la latitud; els meridians (de pol a pol) mesuren la longitud.'
  },
  {
    topic: 14,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P38] Quin recorregut aparent fa el sol un 22 de desembre (solstici d\'hivern) a Catalunya?',
    options: [
      'Surt pel Sud-Est i es pon pel Sud-Oest',
      'Surt pel Nord-Oest i es pon pel Nord-Est',
      'Surt pel Sud-Oest i es pon pel Sud-Est',
      'Surt pel Nord-Est i es pon pel Nord-Oest'
    ],
    correctIndex: 0,
    explanation: 'Solstici d\'hivern (22 desembre): surt pel SE i es pon pel SO; solstici d\'estiu (22 juny): surt pel NE i es pon pel NO.'
  },
  {
    topic: 23,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P39] En un incendi urbà s\'omplen dos camions des de dos hidrants de via pública alhora. Quin cabal i durada mínims ha de garantir la xarxa?',
    options: [
      '500 l/min a dos hidrants simultanis durant 2 hores',
      '1000 l/min a dos hidrants simultanis durant 2 hores',
      '1000 l/min a dos hidrants simultanis durant 1 hora',
      '2000 l/min a dos hidrants simultanis durant 2 hores'
    ],
    correctIndex: 1,
    explanation: 'Per a hidrants d\'omplerta de camions en via pública: 1.000 l/min a dos hidrants simultanis durant 2 hores.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P40] Un cap de dotació comprova amb el teorema de Pitàgores l\'aplom d\'un apuntalament. Quina afirmació és FALSA?',
    options: [
      'El teorema s\'aplica a qualsevol triangle, sigui rectangle o no',
      'La hipotenusa és el costat més llarg del triangle rectangle',
      'Un triangle de costats en proporció 6-8-10 té un angle de 90°',
      'El quadrat de la hipotenusa iguala la suma dels quadrats dels catets'
    ],
    correctIndex: 0,
    explanation: 'El teorema de Pitàgores només és vàlid per a triangles rectangles (amb un angle de 90°).'
  },
  {
    topic: 6,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P41] L\'alcalde d\'un municipi sense pla de protecció civil declara l\'emergència i ordena als veïns una prestació de serveis. Com es qualifica?',
    options: [
      'És voluntària i canalitzada pels voluntaris',
      'És obligatòria, proporcionada a les possibilitats de cadascú, i no dóna lloc a indemnització',
      'És obligatòria, però genera dret a indemnització',
      'No la pot ordenar l\'alcalde'
    ],
    correctIndex: 1,
    explanation: 'Art. 10.1 Llei 4/1997: la prestació personal és obligatòria, proporcionada i no dona dret a indemnització (la requisició de béns sí que en dona).'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P42] Quina combinació de xifres sustenta la paradoxa de l\'extinció?',
    options: [
      '50% incendis < 100 ha i grans incendis cremen > 70%',
      '90% incendis < 10 ha i grans incendis cremen > 80%',
      'El 99% dels incendis afecten menys de 10 ha i els grans incendis cremen més del 90% de la superfície',
      '50% incendis < 100 ha i grans incendis cremen > 99%'
    ],
    correctIndex: 2,
    explanation: 'Paradoxa de l\'extinció: el 99% dels incendis queden per sota de 10 ha, però l\'1% restant (GIF) crema més del 90% de la superfície total.'
  },
  {
    topic: 4,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P43] Què és l\'antisemitisme?',
    options: [
      'L’aversió contra les persones d\'origen àrab',
      'L\'hostilitat cap als jueus com a grup religiós o ètnic',
      'L\'aversió contra persones amb diversitat funcional',
      'El rebuig envers persones sense llar'
    ],
    correctIndex: 1,
    explanation: 'Antisemitisme = hostilitat o prejudici cap als jueus com a grup religiós o ètnic.'
  },
  {
    topic: 21,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P44] Com s\'anomena el centre europeu que fa seguiment permanent de les emergències i coordina les peticions d\'ajuda del Mecanisme Europeu?',
    options: [
      'CEMIE (Praga)',
      'ECAPC (Tolosa)',
      'CECPC (Estrasburg)',
      'Centre Europeu de Coordinació de Resposta a Emergències (ERCC), a Brussel·les'
    ],
    correctIndex: 3,
    explanation: 'L\'ERCC (Emergency Response Coordination Centre) té la seu a Brussel·les i opera 24 h.'
  },
  {
    topic: 19,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P45] Quan és opcional situar dispositius lluminosos a la part posterior d\'un vehicle d\'emergència?',
    options: [
      'Quan el vehicle no supera els 7.000 kg',
      'És sempre opcional',
      'Quan la part frontal del vehicle no és visible',
      'Quan no disposa de balises giratòries al sostre'
    ],
    correctIndex: 2,
    explanation: 'Els llums s\'han de situar a la part superior i davantera i, opcionalment, també a la posterior si el frontal no és visible.'
  },
  {
    topic: 34,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P46] Una pluja intensa col·lapsa la xarxa de clavegueram pluvial d\'una ciutat i nega diversos carrers. Quina afirmació descriu aquest tipus d\'inundació?',
    options: [
      'Són les més perilloses per la velocitat i falta d\'avís',
      'L\'augment del cabal és progressiu durant hores o dies',
      'S\'agreugen amb crescudes fluvials al litoral',
      'Són de menor envergadura, però poden afectar greument serveis i mobilitat'
    ],
    correctIndex: 3,
    explanation: 'Les inundacions urbanes per col·lapse de clavegueram són de menor envergadura però afecten greument serveis i mobilitat.'
  },
  {
    topic: 32,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P47] Una porta lateral d\'un turisme accidentat no obre i cal forçar-la amb el separador. Per on s\'actua habitualment?',
    options: [
      'Per la zona de les frontisses, i si cal al pany',
      'Per la zona del pany, i si cal s\'actua sobre la zona de les frontisses',
      'Per la talonera inferior',
      'Pel muntant B'
    ],
    correctIndex: 1,
    explanation: 'L\'obertura forçada de portes laterals se sol fer per la zona del pany i, si cal, també sobre les frontisses.'
  },
  {
    topic: 31,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P48] En l\'organització d\'una recerca al medi natural, a partir de quin element es determina l\'àrea de recerca?',
    options: [
      'A partir del Centre de Comandament',
      'A partir del domicili de la persona',
      'A partir de l\'UPA, considerant les característiques de la persona i les condicions ambientals',
      'A partir dels sectors amb més densitat de camins'
    ],
    correctIndex: 2,
    explanation: 'L\'àrea de recerca es determina sempre a partir de l\'Últim Punt d\'Albirament (UPA).'
  },
  {
    topic: 13,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P49] En una bomba centrífuga, quin disseny de rodet és adequat per impulsar líquids amb sediments?',
    options: [
      'El rodet obert',
      'El rodet tancat',
      'El rodet de més amplada axial',
      'El rodet de segona etapa multicel·lular'
    ],
    correctIndex: 0,
    explanation: 'El rodet obert és més senzill i adequat per a líquids amb sediments o sòlids en suspensió (el tancat té més rendiment amb aigua neta).'
  },
  {
    topic: 18,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P50] Cal sol·licitar un vehicle de la mateixa tipologia que el codificat com 3.41.22, però adscrit a una altra regió. Quin codi hi correspondria?',
    options: ['3.55.22', '3.41.28', '2.41.14', '5.17.22'],
    correctIndex: 3,
    explanation: 'Cal mantenir els 2 darrers dígits (.22 = tipologia) i canviar el primer dígit (3 → 5 = altra regió): 5.17.22.'
  },
  {
    topic: 10,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P51] En un incendi intens, el ferro reacciona segons 4Fe + 3O2 → 2Fe2O3. Què li passa al ferro?',
    options: [
      'Perd electrons i, per tant, s\'oxida',
      'Guanya electrons i s\'oxida',
      'Perd electrons i es redueix',
      'Guanya electrons i es redueix'
    ],
    correctIndex: 0,
    explanation: 'En una reacció redox, oxidar-se és perdre electrons (Fe passa de 0 a +3); l\'oxigen guanya electrons i es redueix.'
  },
  {
    topic: 26,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P52] Un camió amb càrrega especial crema a l\'interior d\'un túnel. Quin zonatge de seguretat correspon establir?',
    options: [
      'Només zona d\'autoprotecció',
      'Dues zones: calenta i freda',
      'Ampliar la zona d\'autoprotecció a 50 m',
      'Desplegar un AGO complet amb les zones calenta, tèbia i freda diferenciades'
    ],
    correctIndex: 3,
    explanation: 'En situacions complexes (túnels, zones densament poblades o camions amb càrregues especials) cal desplegar un AGO complet amb les 3 zones.'
  },
  {
    topic: 22,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P53] Indica l\'afirmació CORRECTA respecte les Funcions i Àrees funcionals del SISCOM:',
    options: [
      'Logística engloba la planificació i el suport',
      'Suport engloba la planificació i la logística',
      'Planificació engloba el suport i la logística',
      'Operacions engloba la planificació, el suport i la logística'
    ],
    correctIndex: 1,
    explanation: 'L\'àrea funcional de Suport engloba Planificació i Logística.'
  },
  {
    topic: 25,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P54] Quina característica operativa sobre els incendis agrícoles és INCORRECTA?',
    options: [
      'Són de baixa i mitja intensitat',
      'Presenten una baixa velocitat de propagació',
      'Són una font freqüent de focs secundaris',
      'Són molt sensibles al vent'
    ],
    correctIndex: 1,
    explanation: 'Els incendis agrícoles (especialment en cereal madur) presenten una ALTA velocitat de propagació, no baixa.'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P55] En un incident amb múltiples afectats cal habilitar una zona de triatge i una àrea de concentració de víctimes. Quina unitat de Bombers en té la capacitat?',
    options: [
      'El GEM',
      'Els primers intervinents',
      'El GROS, especialitzat en suport tàctic, logístic i assistencial',
      'Els equips de suport vital avançat'
    ],
    correctIndex: 2,
    explanation: 'El GROS desplega el suport logístic i assistencial (zones de triatge, ACV, logística); el GEM aporta personal mèdic i d\'infermeria.'
  },
  {
    topic: 16,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P56] A quina tipologia pertany un ascensor inclinat (funicular) situat a l\'exterior?',
    options: [
      'Als electromecànics d\'adherència',
      'Als hidràulics',
      'Als sense cambra de màquines',
      'A una quarta tipologia pròpia sense contrapès'
    ],
    correctIndex: 0,
    explanation: 'Els ascensors inclinats (funiculars) són una variant dels electromecànics d\'adherència on cabina i contrapès es desplacen en pla inclinat.'
  },
  {
    topic: 17,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P57] En una intervenció on cal segmentar l\'escenari per sectors geogràfics, què ha de preveure el pla de comunicacions?',
    options: [
      'Un canal únic per a tots els sectors',
      'Canals diferenciats, respectant l\'estructura jeràrquica del Cos',
      'Un canal propi per a cada dotació',
      'Comunicació directa de cada equip amb el cap d\'intervenció'
    ],
    correctIndex: 1,
    explanation: 'El pla de comunicacions preveu canals diferenciats per sector (no per dotació), respectant la cadena de comandament.'
  },
  {
    topic: 16,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P58] Davant d\'un animal amb un cop de calor, quina és l\'actuació indicada fins al relleu veterinari?',
    options: [
      'Aplicar aigua amb cura i restringir la ingesta d\'aigua',
      'Traslladar-lo a l\'ombra i cobrir-lo amb mantes humides',
      'Ruixar-lo amb aigua fresca, compreses fredes i administrar oxigen',
      'Ruixar-lo amb aigua, posar-lo a l\'ombra i administrar-li hidratació progressiva'
    ],
    correctIndex: 3,
    explanation: 'En cops de calor en animals (correcció 2026): baixar temperatura amb ruixats d\'aigua, ombra i hidratació progressiva fins al relleu veterinari.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P59] Una càmera de visualització mostra una persona immòbil sota la runa i no se\'n pot confirmar l\'estat. Com cal marcar aquest punt?',
    options: [
      'Amb un rombe amb la lletra C',
      'Amb una gran V i "D - 1" a sota',
      'Amb una gran V i "L - 1" a sota',
      'Amb una gran V sense cap inscripció a sota, ja que la víctima potencial no està confirmada'
    ],
    correctIndex: 3,
    explanation: 'La gran V indica víctima potencial sense confirmar; L - n o D - n només s\'anoten sota la V quan l\'estat queda confirmat.'
  },
  {
    topic: 10,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P60] La massa atòmica d\'un element que consta a la taula periòdica correspon a:',
    options: [
      'La multiplicació de les masses de tots els isòtops',
      'La mitjana ponderada de les masses dels seus isòtops',
      'La suma de les masses de tots els isòtops',
      'La massa de l’isòtop més abundant'
    ],
    correctIndex: 1,
    explanation: 'La massa atòmica tabulada és la mitjana ponderada de les masses dels isòtops segons la seva abundància natural.'
  },
  {
    topic: 11,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P61] En una nau industrial amb molts motors s\'hi troba instal·lada una bateria de condensadors. Quina és la seva funció?',
    options: [
      'Reduir la freqüència de la xarxa',
      'Generar potència reactiva coincident a la dels motors',
      'Augmentar la freqüència de la xarxa',
      'Generar potència reactiva oposada a la dels motors i corregir el factor de potència'
    ],
    correctIndex: 3,
    explanation: 'Els condensadors (càrrega capacitiva) aporten potència reactiva de signe contrari a la inductiva dels motors, compensant-la i millorant el cos φ.'
  },
  {
    topic: 17,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P62] Una dotació crida la sala i rep com a resposta "Esperi Papa 10.40". Què ha de fer la dotació?',
    options: [
      'Repetir la crida al cap de 30 segons',
      'Canviar al mode directe',
      'Tancar amb "canvi i tallo"',
      'Mantenir-se a l\'escolta fins rebre l\'"endavant" del receptor'
    ],
    correctIndex: 3,
    explanation: 'Amb «Esperi» el receptor confirma que la petició està atesa però encara no pot rebre; cal restar a l\'escolta fins que digui «Endavant».'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P63] En una operació de recerca en un espai afectat per un incendi, en quin ordre s’han de prioritzar les maniobres de recerca?',
    options: [
      'Baixa, mitjana, alta, mínima probabilitat',
      'Mínima, baixa, mitjana, alta probabilitat',
      'Espais amb baixa probabilitat, espais de mitjana probabilitat, espais amb mínima probabilitat, espais amb alta probabilitat de supervivència',
      'Mitjana, baixa, mitjana, mínima probabilitat'
    ],
    correctIndex: 2,
    explanation: 'En aquest procediment de recerca en incendi: 1r baixa probabilitat, 2n mitjana probabilitat, 3r mínima probabilitat, 4t alta probabilitat de supervivència (si l\'alta ja s\'evacua o es prioritza segons guies).'
  },
  {
    topic: 22,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P64] En un incendi urbà, l’evolució és favorable i una part dels recursos queda alliberada. Què es fa amb l’estructura de comandament?',
    options: [
      'Cal completar totes les posicions abans de reduir recursos',
      'Només pot ampliar-se, no reduir-se',
      'Es manté sense modificacions fins al final',
      'Es contrau de manera flexible en funció de l’evolució de l’incident i de les necessitats operatives'
    ],
    correctIndex: 3,
    explanation: 'L\'estructura del SISCOM és modular i escalable: s\'expandeix i es contrau de manera flexible.'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P65] En un pàrquing amb fum dens, un bomber col·loca una caputxa de rescat a una persona. Quina afirmació és INCORRECTA?',
    options: [
      'L\'aire que respira la persona prové de la connexió a l\'ERA del bomber',
      'El temps disponible per a l\'evacuació es redueix',
      'La caputxa incorpora un filtre propi que depura el fum de l\'atmosfera de l\'entorn',
      'No està pensada per a un ús prolongat'
    ],
    correctIndex: 2,
    explanation: 'La caputxa de rescat connectada a l\'ERA no filtra l\'aire ambient, sinó que subministra aire respirable procedent de l\'ampolla del bomber.'
  },
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P66] Quin dels següents tipus de central de generació elèctrica forma part del grup de les centrals de punta?',
    options: [
      'Les centrals nuclears',
      'Les centrals de cicle combinat',
      'Totes les centrals hidràuliques',
      'Les centrals de motors de combustió interna'
    ],
    correctIndex: 3,
    explanation: 'Centrals de fons = nuclears; regulació = cicle combinat i algunes hidràuliques; punta = motors de combustió interna i algunes hidràuliques.'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P67] Com serà l\'etiqueta de matèria espontàniament inflamable (Classe 4.2)?',
    options: [
      'Meitat inferior vermella meitat superior blanca',
      'Meitat inferior groga meitat superior vermella',
      'Meitat inferior vermella meitat superior groga',
      'Meitat inferior blanca meitat superior vermella'
    ],
    correctIndex: 0,
    explanation: 'Classe 4.2 (matèries espontàniament inflamables): meitat superior blanca i meitat inferior vermella.'
  },
  {
    topic: 15,
    difficulty: 'Mitjà',
    question: '[Sim 128 · P68] Durant un incendi en una coberta lleugera estabilitzada amb tirants d\'acer, quin efecte s\'ha de preveure en aquests tirants?',
    options: [
      'S’escurcen per escalfament i perden capacitat a compressió',
      'S\'allarguen per l\'escalfament i perden tensió i estabilitat',
      'Es retorcen sobre el seu eix',
      'Llisquen respecte del recolzament'
    ],
    correctIndex: 1,
    explanation: 'Els tirants treballen a tracció; amb l\'escalfament es dilaten (s\'allarguen) i perden tensió i estabilitat.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P69] Quin ordre, de menys a més càrrega acumulada, és el correcte en una estructura?',
    options: [
      'Jàsseres, pilars, bigues i fonaments',
      'Bigues, pilars, jàsseres i fonaments',
      'Jàsseres, bigues, pilars i fonaments',
      'Bigues, jàsseres, pilars i fonaments'
    ],
    correctIndex: 3,
    explanation: 'Transmissió de càrregues de dalt a baix: Bigues → Jàsseres → Pilars → Fonaments.'
  },
  {
    topic: 28,
    difficulty: 'Fàcil',
    question: '[Sim 128 · P70] Quina de les següents afirmacions sobre el control d\'hemorràgies és FALSA?',
    options: [
      'El primer pas és aplicar pressió directa amb la mà',
      'El torniquet es col·loca directament sobre l\'articulació més pròxima a la ferida',
      'Un cop el sagnat estigui controlat, es farà un embenat compressiu',
      'L\'element en contacte amb la ferida no es retira'
    ],
    correctIndex: 1,
    explanation: 'El torniquet NO s\'ha de col·locar MAI sobre una articulació (s\'aplica uns 5 cm per sobre de la ferida, o per sobre de l\'articulació si cal).'
  }
];
