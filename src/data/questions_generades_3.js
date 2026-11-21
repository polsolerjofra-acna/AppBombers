/**
 * Banc extra de preguntes generades (Bloc 3) — 50 preguntes originals d'alt nivell (Temes 18 a 34).
 */
export const QUESTIONS_GENERADES_3 = [
  // =========================================================================
  // TEMA 18: Vehicles d'intervenció en emergències (MAN.EQIP.000) — 2 preguntes
  // =========================================================================
  {
    topic: 18,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T18] En una BUP (Bomba Urbana Pesant) dels Bombers de la Generalitat, quina és la capacitat habitual de la cisterna d\'aigua i el cabal nominal aproximat de la bomba centrífuga combinada?',
    options: [
      'Cisterna de 3.000 a 3.500 litres i bomba de 3.000 L/min a 10 bar (baixa pressió)',
      'Cisterna de 1.500 litres i bomba de 1.000 L/min a 40 bar (alta pressió)',
      'Cisterna de 8.000 litres i bomba de 4.500 L/min a 10 bar (baixa pressió)',
      'Cisterna de 500 litres i bomba de 600 L/min a 15 bar'
    ],
    correctIndex: 0,
    explanation: 'Les BUP tenen una cisterna d\'entre 3.000 i 3.500 L i una bomba combinada amb un cabal nominal entorn dels 3.000 L/min a 10 bar en baixa pressió (i ~250-400 L/min a 40 bar en alta).'
  },
  {
    topic: 18,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T18] En estacionar un vehicle autoescala automàtica (AEA) per fer un rescat en façana a una 5a planta, quin criteri d\'emplaçament i estabilització és prioritari respecte al terreny i la distància a la façana?',
    options: [
      'Col·locar els estabilitzadors directament sobre tapes de clavegueram per repartir millor la càrrega puntual',
      'Situar el vehicle a una distància horitzontal òptima de la façana (aprox. 6-9 m) sobre ferm compacte, anivellant el xassís dins la tolerància i comprovant la càrrega admissible dels suports',
      'Apropar el xassís a menys de 2 m de la façana perquè l\'escala treballi completament vertical sense deflexió',
      'Desplegar només els estabilitzadors del costat de treball per guanyar amplada de pas a la calçada'
    ],
    correctIndex: 1,
    explanation: 'Cal evitar tapes de clavegueram o buits subterranis, anivellar el vehicle amb tots els estabilitzadors desplegats segons la càrrega del terreny i mantenir una distància òptima a la façana per obtenir el màxim abast i angle de treball segur.'
  },

  // =========================================================================
  // TEMA 19: Conducció d'Emergència, Tracció 4x4 i Mecànica (MAN.EQIP.002) — 3 preguntes
  // =========================================================================
  {
    topic: 19,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T19] En una BRP (Bomba Rural Pesant) 4×4 que circula per una pista forestal amb fang profund on una roda d\'un eix patina i perd adherència, quin element mecànic permet transmetre parell motor a la roda que sí té tracció?',
    options: [
      'La caixa transferidora en posició de marxes llargues (4H) sense bloqueig',
      'El bloqueig del diferencial transversal (d\'eix)',
      'El retardador hidràulic (intarder) activat al màxim',
      'La desconnexió de l\'ABS per augmentar la pressió de frenada'
    ],
    correctIndex: 1,
    explanation: 'Un diferencial obert envia el parell cap a la roda amb menys resistència (la que patina). El bloqueig del diferencial d\'eix solidaritza ambdós semieixos i força la roda amb adherència a traccionar.'
  },
  {
    topic: 19,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T19] Durant el descens d\'un pendent pronunciat i relliscós amb un camió bomba de 18 tones carregat d\'aigua, quina combinació de conducció és la més segura per evitar el sobreescalfament dels frens de servei i la pèrdua de control?',
    options: [
      'Circular en punt mort i controlar la velocitat exclusivament amb el pedal del fre de servei',
      'Seleccionar una marxa curta, utilitzar el fre motor i el retardador/fre elèctric de manera progressiva, reservant el fre de servei per a correccions puntuals',
      'Connectar el bloqueig del diferencial d\'eix a 70 km/h per estabilitzar el tren posterior',
      'Pujar una marxa llarga per reduir les revolucions del motor i evitar que les rodes motrius rellisquin'
    ],
    correctIndex: 1,
    explanation: 'En descensos llargs amb vehicles pesants, la retenció principal s\'ha de fer amb marxes curtes (fre motor) i els sistemes auxiliars (retardador/fre motor), evitant el "fading" o sobreescalfament dels frens de servei.'
  },
  {
    topic: 19,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T19] En conducció d\'emergència en servei urgent amb senyals acústics i lluminosos activats, què estableix la normativa i el criteri de seguretat viària quan s\'arriba a una intersecció amb el semàfor en vermell?',
    options: [
      'El conductor té prioritat absoluta i pot creuar a la mateixa velocitat sense reduir',
      'Pot sobrepassar la intersecció sota la seva responsabilitat, reduint la velocitat i assegurant-se que la resta d\'usuaris li han cedit el pas i no hi ha risc de col·lisió',
      'Ha d\'aturar-se obligatòriament i esperar sempre que el semàfor canviï a verd',
      'Només pot creuar en vermell si circula darrere d\'un vehicle policial que obri pas'
    ],
    correctIndex: 1,
    explanation: 'Els vehicles prioritaris en servei urgent poden no respectar senyals com semàfors en vermell sempre que extremin la precaució, redueixin la velocitat i comprovin que no posen en perill cap usuari ni es produeix una col·lisió.'
  },

  // =========================================================================
  // TEMA 20: EPI d'intervenció en emergències (MAN.SEGU.000) — 3 preguntes
  // =========================================================================
  {
    topic: 20,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T20] En un Equip de Respiració Autònoma (ERA) de circuit obert amb ampolla de 6,8 litres a 300 bar de pressió nominal, quin és el volum aproximat d\'aire disponible i en quin rang de pressió s\'activa habitualment el xiulet d\'alarma de reserva?',
    options: [
      'Uns 2.040 litres d\'aire (factor de compressibilitat inclòs ~1.850-2.040 L) i alarma entre 50 i 60 bar',
      'Uns 680 litres d\'aire i alarma entre 100 i 110 bar',
      'Uns 3.400 litres d\'aire i alarma entre 20 i 25 bar',
      'Uns 1.200 litres d\'aire i alarma entre 80 i 90 bar'
    ],
    correctIndex: 0,
    explanation: '6,8 L × 300 bar ≈ 2.040 L (amb factor Z a 300 bar ~1.850 L útils). Segons la norma EN 137, l\'alarma acústica de baixa pressió s\'activa a 55 ± 5 bar (rang 50-60 bar).'
  },
  {
    topic: 20,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T20] Durant un atac interior en un incendi d\'habitatge, un bomber nota que el seu manòmetre marca 55 bar i sona el xiulet de reserva mentre encara és a l\'interior. Quin és el procediment operatiu correcte?',
    options: [
      'Continuar extingint fins a arribar a 20 bar i sortir corrents sense avisar',
      'Comunicar immediatament la situació al binomi i al comandament, i iniciar la retirada conjunta de la zona de perill abans d\'esgotar l\'aire',
      'Obrir la vàlvula de by-pass (flux continu) per respirar més fàcilment durant la sortida',
      'Treure\'s la màscara un cop passat el foc principal encara que hi hagi fum lleuger'
    ],
    correctIndex: 1,
    explanation: 'L\'alarma de reserva (55 ± 5 bar) indica que s\'ha d\'iniciar la sortida immediata de l\'ambient irrespirable amb tot el binomi i informant el comandament; la reserva és per a la retirada segura, no per continuar treballant.'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[BANC EXTRA · T20] Quina diferència fonamental existeix entre el vestit d\'intervenció estructural (EN 469) i el vestit d\'intervenció en incendis forestals (EN 15614 / ISO 15384)?',
    options: [
      'El vestit estructural és monocapa per afavorir la transpiració i el forestal porta barrera d\'humitat impermeable',
      'El vestit estructural incorpora capes tèrmica i barrera d\'humitat per protegir contra alta radiació i vapor en espais tancats, mentre que el forestal prioritza la lleugeresa i transpirabilitat per evitar l\'estrès tèrmic en marxes llargues',
      'El vestit forestal ofereix major protecció contra el flashover que l\'estructural',
      'No hi ha diferència normativa; ambdós compleixen exactament la norma EN 469'
    ],
    correctIndex: 1,
    explanation: 'El vestit estructural (EN 469) té diverses capes (exterior, barrera d\'humitat, aïllant tèrmic) per a alta càrrega tèrmica en interiors; el forestal és més lleuger i transpirable per reduir el risc de cop de calor en esforços prolongats a l\'exterior.'
  },

  // =========================================================================
  // TEMA 21: Gestió d'emergències i Protecció Civil (MAN.GRAL.001) — 3 preguntes
  // =========================================================================
  {
    topic: 21,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T21] En l\'activació d\'un pla de protecció civil de Catalunya (com l\'INFOCAT o l\'INUNCAT) en fase d\'Emergència, on s\'integra el cap de la intervenció dels Bombers sobre el terreny per coordinar els grups d\'actuació?',
    options: [
      'Al Centre de Coordinació Operativa de Catalunya (CECAT) a Barcelona exclusivament',
      'Al Centre de Comandament Avançat (CCA), on s\'assumeix la direcció tàctica i coordinació operativa dels grups sobre el terreny',
      'Al Centre de Recepció de Mitjans (CRM) sense comunicació amb altres cossos',
      'A la sala de crisi del Parlament de Catalunya'
    ],
    correctIndex: 1,
    explanation: 'El CCA (Centre de Comandament Avançat) s\'estableix prop de la zona de l\'emergència per dirigir i coordinar tàcticament els grups operatius (Intervenció, Sanitari, Ordre, Logístic) en contacte amb el CECAT.'
  },
  {
    topic: 21,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T21] Dins l\'estructura operativa dels plans de protecció civil a Catalunya, quina funció correspon específicament al Grup d\'Ordre?',
    options: [
      'Realitzar el triatge sanitari avançat i l\'evacuació dels ferits greus',
      'Garantir la seguretat ciutadana, establir els perímetres de seguretat, regular els accessos i controlar el trànsit per facilitar la tasca dels equips d\'intervenció',
      'Subministrar combustible i avituallament als camions de bombers',
      'Avaluar l\'estabilitat estructural dels edificis sinistrats'
    ],
    correctIndex: 1,
    explanation: 'El Grup d\'Ordre (Mossos d\'Esquadra, Policies Locals, etc.) s\'encarrega del control d\'accessos, perímetres, seguretat ciutadana, regulació viària i suport en evacuacions/confinaments.'
  },
  {
    topic: 21,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T21] Quina diferència conceptual hi ha entre la fase de Prealerta, la d\'Alerta i la d\'Emergència en un pla de protecció civil?',
    options: [
      'La Prealerta implica danys greus ja produïts; l\'Alerta només mobilitza voluntaris',
      'La Prealerta respon a una situació de risc potencial o predicció (seguiment preventiu); l\'Alerta s\'activa quan l\'evolució fa preveure un risc imminent o incidències menors i requereix dispositiu preventiu; l\'Emergència implica l\'ocurrència del sinistre amb afectació greu o necessitat de mobilització extraordinària de mitjans',
      'Són termes sinònims que només canvien segons el municipi afectat',
      'L\'Emergència només es pot declarar si hi ha més de deu víctimes mortals'
    ],
    correctIndex: 1,
    explanation: 'Les fases segueixen una escala progressiva: Prealerta (seguiment d\'una possible situació de risc), Alerta (risc imminent o afectació lleu amb preposicionament/avís) i Emergència (sinistre manifest amb activació plena de recursos).'
  },

  // =========================================================================
  // TEMA 22: Sistema de Comandament - SISCOM (MAN.COMD.001) — 3 preguntes
  // =========================================================================
  {
    topic: 22,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T22] Segons els principis del SISCOM dels Bombers de la Generalitat, què significa el principi d\'"abast de control" (span of control)?',
    options: [
      'La distància màxima en quilòmetres que pot cobrir una emissora TETRA',
      'El nombre òptim de subordinats o unitats que un sol comandament pot dirigir eficaçment (habitualment entre 3 i 7, amb un òptim de 5)',
      'El perímetre total de la zona calenta d\'un incendi industrial',
      'El temps màxim que pot durar una guàrdia de 24 hores'
    ],
    correctIndex: 1,
    explanation: 'L\'abast de control estableix quants recursos pot supervisar un comandament amb seguretat i eficàcia: entre 3 i 7 unitats/persones (idealment 5). Si se supera, cal sectoritzar o delegar.'
  },
  {
    topic: 22,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T22] En una intervenció complexa que creix ràpidament, arriba un comandament de rang superior per assumir el comandament del servei. Quina és la seqüència correcta per fer el relleu (transferència de comandament) segons el SISCOM?',
    options: [
      'El nou comandament dona ordres directes per ràdio sense parlar amb l\'anterior per no perdre temps',
      'Reunió presencial o comunicació directa de traspàs (briefing de situació, objectius, recursos assignats, riscos i sectorització), assumpció formal comunicada per ràdio a la sala de control i a tots els recursos intervinents',
      'El comandament sortint abandona el lloc immediatament abans que arribi el relleu',
      'Es mantenen dos caps de intervenció simultanis donant ordres paral·leles als mateixos sectors'
    ],
    correctIndex: 1,
    explanation: 'El traspàs de comandament exigeix un briefing complet de la situació i una comunicació clara i formal a tots els intervinents i a la sala de control perquè es mantingui la unitat de comandament.'
  },
  {
    topic: 22,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T22] En l\'organigrama SISCOM d\'un incendi forestal o estructural de grans dimensions, quina diferència hi ha entre la sectorització geogràfica i la funcional?',
    options: [
      'La sectorització geogràfica divideix l\'escenari per àrees físiques (ex. Sector A/Flanc Dret, Planta 2), mentre que la funcional agrupa tasques especialitzades (ex. Sector d\'Aigua/Proveïment, Sector Sanitari, Sector de Ventilació)',
      'La geogràfica només s\'usa de nit i la funcional de dia',
      'La funcional prohibeix tenir un cap de sector',
      'No existeix la sectorització funcional al SISCOM'
    ],
    correctIndex: 0,
    explanation: 'El SISCOM permet organitzar els sectors per zones físiques (sectors geogràfics: flancs, plantes, façanes) o per funcions específiques transversals (abastament d\'aigua, logística, rehabilitació, etc.).'
  },

  // =========================================================================
  // TEMA 23: Prevenció bàsica d'incendis (MAN.SP.000) — 3 preguntes
  // =========================================================================
  {
    topic: 23,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T23] En protecció passiva contra incendis d\'un edifici, què indica una classificació EI 60 en una porta tallafocs o un element compartimentador?',
    options: [
      'Que resisteix 60 minuts sense perdre la seva estabilitat mecànica (capacitat portant), però pot deixar passar flames',
      'Que manté la seva integritat contra el pas de flames i gasos calents (E) i l\'aïllament tèrmic (I) a la cara no exposada durant almenys 60 minuts',
      'Que s\'obre automàticament als 60 segons de sonar l\'alarma',
      'Que suporta un impacte mecànic de 60 kg'
    ],
    correctIndex: 1,
    explanation: 'En la classificació europea de resistència al foc: R (capacitat portant), E (integritat davant flames i gasos calents) i I (aïllament tèrmic). EI 60 garanteix integritat i aïllament durant 60 minuts.'
  },
  {
    topic: 23,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T23] Pel que fa a les BIE (Boques d\'Incendi Equipades) segons el RIPCI (RD 513/2017), quina afirmació és correcta respecte a les BIE de 25 mm i les de 45 mm?',
    options: [
      'Les BIE de 25 mm porten mànega plana que s\'ha de desplegar completament abans d\'obrir l\'aigua, mentre que les de 45 mm porten mànega semirígida',
      'Les BIE de 25 mm porten mànega semirígida (permet obrir el pas sense desplegar-la del tot) i un rodet amb més longitud màxima (fins a 30 m), mentre que les de 45 mm porten mànega plana (màx. 20 m) i requereixen desplegament complet abans de pressuritzar',
      'Ambdues tenen un cabal idèntic i s\'utilitzen sense diferència per a usuaris no formats',
      'Les BIE de 45 mm no necessiten xarxa d\'abastament d\'aigua a pressió'
    ],
    correctIndex: 1,
    explanation: 'La BIE 25 mm usa mànega semirígida (fins a 30 m), usable per una sola persona sense desplegar-la totalment. La BIE 45 mm usa mànega plana (20 m) de major cabal i s\'ha de desplegar íntegrament abans d\'obrir la vàlvula.'
  },
  {
    topic: 23,
    difficulty: 'Fàcil',
    question: '[BANC EXTRA · T23] Quina diferència hi ha entre la "reacció al foc" i la "resistència al foc" d\'un material o element constructiu?',
    options: [
      'La reacció al foc mesura la contribució d\'un material a l\'inici i propagació de l\'incendi (ex. Euroclasses A1..F), mentre que la resistència al foc mesura la capacitat d\'un element constructiu de mantenir les seves funcions (R, E, I) durant un temps determinat davant d\'un incendi desenvolupat',
      'Són exactament el mateix concepte expressat en unitats diferents',
      'La reacció al foc només s\'aplica a estructures d\'acer i la resistència a cortines',
      'La resistència al foc mesura la toxicitat del fum i la reacció la càrrega de foc del mobiliari'
    ],
    correctIndex: 0,
    explanation: 'La reacció al foc avalua com un material es comporta en contactar amb el foc (combustibilitat, propagació, fum, gotes: A1-F). La resistència al foc avalua el temps (minuts) que un element constructiu manté estabilitat, integritat i aïllament (REI).'
  },

  // =========================================================================
  // TEMA 24: Intervenció bàsica en incendis estructurals (MAN.INES.000) — 3 preguntes
  // =========================================================================
  {
    topic: 24,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T24] En arribar a un incendi en un pis tancat d\'un edifici d\'habitatges, l\'equip observa fum dens i fosc que surt a polsacions per les escletxes de la porta, vidres bruts de sutge sense flames visibles i una temperatura molt elevada a la part alta de la porta. Quin fenomen és imminent i quina mesura preventiva cal aplicar abans d\'obrir?',
    options: [
      'Bleve; aplicar escuma d\'alta expansió des del replà',
      'Backdraft (explosió de fum per aportació sobtada d\'oxigen); preparar línia d\'aigua carregada, controlar l\'obertura de la porta, refredar el coixí de gasos si cal o ventilar des de coberta abans de permetre l\'entrada d\'aire descontrolada',
      'Boilover; ruixar amb aigua a raig ple el sostre del replà',
      'Flashover induït pel vent; obrir totes les finestres del replà de cop'
    ],
    correctIndex: 1,
    explanation: 'Fum dens a polsacions, absència de flames per falta d\'oxigen, vidres ennegrits i alta temperatura són signes clàssics d\'un incendi limitat per ventilació amb risc de backdraft. Cal controlar l\'aportació d\'aire i tenir línia protegida.'
  },
  {
    topic: 24,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T24] En un atac interior en un incendi d\'habitatge amb fum dens i temperatura elevada al sostre, com s\'ha d\'executar el refredament de gasos amb llança de cabal regulable?',
    options: [
      'Aplicar un raig ple continu cap al terra durant 30 segons per inundar l\'estança',
      'Fer polsacions curtes d\'aigua polvoritzada (cono estret/mitjà ~30-45°) dirigides al coixí de gasos calents del sostre per evaporar les gotes abans que caiguin i reduir la temperatura sense desestabilitzar el pla neutre',
      'Obrir el cono màxim de protecció (120°) de manera contínua mentre s\'avança a peu dret',
      'Utilitzar únicament extintor de CO₂ per refredar el sostre'
    ],
    correctIndex: 1,
    explanation: 'Les polsacions curtes (3D gas cooling) cap al coixí de gasos permeten que l\'aigua s\'evapori en l\'aire calent absorbint molta energia (calor latent) sense generar excés de vapor que cremi el binomi ni baixar el pla neutre.'
  },
  {
    topic: 24,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T24] En una ventilació tàctica per pressió positiva (VPP) en un edifici amb escala protegida o convencional, quin requisit és indispensable abans d\'engegar el ventilador a l\'accés?',
    options: [
      'No obrir cap obertura de sortida perquè la pressió apagui el foc per sufocació',
      'Garantir que existeix una obertura de sortida (exutori/finestra) dimensionada i controlada a la zona sinistrada perquè el flux d\'aire expulsi el fum i la calor cap a l\'exterior sense empènyer el foc cap a zones segures',
      'Col·locar el ventilador a l\'interior del pis en flames apuntant cap a l\'escala',
      'Fer-ho sense línia d\'aigua preparada per evitar pèrdues de pressió'
    ],
    correctIndex: 1,
    explanation: 'La VPP exigeix coordinar entrada (ventilador) i sortida (obertura controlada a la zona del focus). Sense sortida, es pressuritza l\'edifici i es pot propagar el foc o el fum cap a vies d\'evacuació.'
  },

  // =========================================================================
  // TEMA 25: Intervenció bàsica en incendis forestals (MAN.INVE.000) — 3 preguntes
  // =========================================================================
  {
    topic: 25,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T25] En un incendi forestal que puja per un pendent pronunciat i amb vent a favor, quina és l\'estratègia d\'ancoratge i atac segur recomanada per evitar quedar atrapat?',
    options: [
      'Atacar directament el cap de l\'incendi des de la part superior del pendent sense línia d\'escapament',
      'Ancorar les línies en un punt segur (cua o zona ja cremada) i avançar progressivament pels flancs cap al cap, mantenint rutes d\'escapament i zones segures identificades (protocol OACEL)',
      'Col·locar els vehicles en línia a la carena d\'un barranc estret per tallar el pas del front',
      'Treballar en atac indirecte sense comunicar la posició als mitjans aeris'
    ],
    correctIndex: 1,
    explanation: 'Mai s\'ataca un cap agressiu de cara en pendent ascendent sense ancoratge ni escapament. S\'ancora a la cua o zona segura i s\'estrangulen els flancs aplicant el protocol OACEL (Observació, Atenció, Comunicació, Escapament, Lloc segur).'
  },
  {
    topic: 25,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T25] Què descriu la "regla del 30-30-30" en el comportament d\'un incendi forestal i quin efecte té sobre la propagació?',
    options: [
      'Temperatura > 30 °C, humitat relativa < 30% i vent > 30 km/h: condicions meteorològiques crítiques que afavoreixen un comportament extrem, ràpida propagació i focs secundaris',
      '30% de pendent, 30 m d\'alçada de flama i 30 minuts d\'autonomia d\'aigua',
      '30 bombers, 30 mànegues de 25 mm i 30 bar de pressió',
      'Temperatura < 30 °C, humitat > 30% i vent < 30 km/h'
    ],
    correctIndex: 0,
    explanation: 'La regla del 30-30-30 (>30 °C, <30% HR, >30 km/h de vent) defineix un llindar d\'alt risc d\'incendi forestal amb combustibles fins molt secs i gran velocitat de propagació.'
  },
  {
    topic: 25,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T25] En una operació amb descàrregues d\'aigua d\'un mitjà aeri (helicòpter bombarder o avió amfibi) en un flanc on treballa personal a terra, quina precaució de seguretat és obligatòria?',
    options: [
      'Romandre sota la vertical de la descàrrega amb el casc posat per aprofitar la humitat',
      'Retirar el personal fora de la zona d\'impacte de la descàrrega, agrupar-se en lloc segur perpendicular a la trajectòria i protegir-se de possibles caigudes de branques o pedres',
      'Deixar les eines manuals dretes clavades a terra i allunyar-se 2 metres',
      'Apagar totes les emissores perquè no interfereixin amb el rotor de l\'helicòpter'
    ],
    correctIndex: 1,
    explanation: 'La massa d\'aigua (1.000-6.000 L) d\'una descàrrega té una gran energia cinètica i pot trencar branques, desplaçar roques o fer caure el personal. Cal retirar-se de la trajectòria abans del llançament i coordinar-se per ràdio.'
  },

  // =========================================================================
  // TEMA 26: Intervenció bàsica en incendis varis (MAN.INXX.000) — 3 preguntes
  // =========================================================================
  {
    topic: 26,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T26] En un incendi d\'un vehicle elèctric (VE) on la bateria de tracció d\'ions de liti ha entrat en embalamen tèrmic (thermal runaway), quina actuació és la més adequada un cop controlada la fase inicial?',
    options: [
      'Extingir amb 10 segons de CO₂ i donar el servei per tancat immediatament',
      'Aplicar aigua abundant i sostinguda directament sobre el paquet de bateries per refredar les cel·les, monitoritzar amb càmera tèrmica durant un temps prolongat davant possibles reignicions i mantenir el vehicle aïllat',
      'Tallar immediatament els cables taronges d\'alta tensió amb cisalla sense EPI aïllant',
      'Cobrir el vehicle amb una manta de llana seca i pujar-lo al camió grua de seguida'
    ],
    correctIndex: 1,
    explanation: 'L\'embalament tèrmic de bateries Li-ion genera oxigen i calor internament; requereix grans quantitats d\'aigua per refredar les cel·les i evitar la propagació cel·la a cel·la, així com control tèrmic pel risc de reignició diferida.'
  },
  {
    topic: 26,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T26] Davant d\'un incendi en un transformador elèctric o subestació amb tensió activa, quin agent extintor i quina distància/precaució són correctes abans de confirmar el tall de subministrament?',
    options: [
      'Aigua a raig ple a 1 metre de distància per apagar l\'oli ràpidament',
      'Confirmar amb la companyia elèctrica el tall i posada a terra; si cal actuar abans en fase inicial, fer-ho sense contacte elèctric (CO₂ o pols seca respectant distàncies de seguretat) i mai amb aigua a raig ple sobre elements en tensió',
      'Escuma de baixa expansió amb llança metàl·lica tocant la carcassa',
      'Aigua polvoritzada a 0,5 metres de les bornes d\'alta tensió'
    ],
    correctIndex: 1,
    explanation: 'Amb instal·lacions en alta tensió el risc d\'arc elèctric i electrocució és mortal. Cal coordinar el tall i descàrrega a terra amb la companyia; abans del tall, mantenir distàncies de seguretat i no usar raig ple d\'aigua ni escuma conductora.'
  },
  {
    topic: 26,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T26] En l\'extinció d\'una fuita de gas inflamada procedent d\'una canonada o d\'una vàlvula d\'un dipòsit de GLP (flama d\'antorxa), quina és la regla operativa fonamental?',
    options: [
      'Apagar la flama immediatament amb pols química ABC encara que no es pugui tancar la fuita',
      'No apagar la flama mentre no es pugui tallar el subministrament de gas; refredar els elements propers i el dipòsit fins a poder tancar la vàlvula de pas de manera segura',
      'Tapar la fuita amb fang humit mentre crema',
      'Utilitzar un ventilador VPP per bufar la flama i apagar-la per velocitat de l\'aire'
    ],
    correctIndex: 1,
    explanation: 'Si s\'apaga la flama d\'una fuita de gas sense tallar el flux, el gas s\'acumularà formant un núvol inflamable amb risc greu d\'explosió (UVCE). Cal refredar l\'entorn i tancar la vàlvula.'
  },

  // =========================================================================
  // TEMA 27: Intervenció bàsica en riscos NRBQ (MAN.RRTT.000) — 3 preguntes
  // =========================================================================
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T27] En un accident de transport de mercaderies perilloses (ADR), s\'observa un panell taronja amb el número d\'identificació de perill "X338" a la part superior i "1203" a la inferior. Què indica específicament la lletra "X" i els dígits "338"?',
    options: [
      'X: producte radioactiu; 338: sòlid comburent',
      'X: reacciona perillosament amb l\'aigua (prohibit usar-la); 338: líquid molt inflamable (33) i corrosiu (8)',
      'X: gas tòxic comprimit; 338: explosiu en massa',
      'X: transport exempt d\'ADR; 338: líquid estable no inflamable'
    ],
    correctIndex: 1,
    explanation: 'En els codis Kemler (ADR), la "X" inicial prohibeix el contacte amb l\'aigua per reacció perillosa; "33" indica líquid molt inflamable (punt d\'inflamació < 23 °C) i "8" corrosiu.'
  },
  {
    topic: 27,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T27] En la zonificació d\'un incident NRBQ amb fuita d\'un gas tòxic més pesant que l\'aire (ex. clor), com s\'han de situar la Zona Calenta, el Corredor de Descontaminació i el CCA?',
    options: [
      'Tots tres a sotavent i a la part més baixa del terreny per tenir millor visibilitat',
      'La Zona Calenta engloba el focus i la ploma; el Corredor de Descontaminació se situa al límit entre Zona Calenta i Zona Tèbia a sobrevent (vent a l\'esquena) i en cota elevada; el CCA s\'ubica en Zona Freda també a sobrevent',
      'El CCA dins la Zona Calenta per dirigir de prop l\'equip NRBQ',
      'La Zona Freda a sotavent per aprofitar la ventilació natural'
    ],
    correctIndex: 1,
    explanation: 'Sempre cal treballar a sobrevent (amb el vent a l\'esquena) i, si el gas és més dens que l\'aire, evitar cotes baixes/soterranis. El passadís de descontaminació (Zona Tèbia) i el CCA (Zona Freda) s\'ubiquen a sobrevent.'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T27] Quin nivell de protecció química correspon a un vestit encapsulat hermètic a gasos (Tipus 1a/1b segons EN 943-1) amb ERA portat a l\'interior?',
    options: [
      'Nivell 1 (o Nivell A en terminologia EPA): màxima protecció respiratòria i cutània contra gasos, vapors i líquids tòxics/corrosius',
      'Nivell 3: vestit d\'esquitxades amb mascareta FFP2',
      'Vestit estructural EN 469 sense cap protecció addicional',
      'Nivell 2: uniforme de parc amb guants de nitril'
    ],
    correctIndex: 0,
    explanation: 'Els vestits Tipus 1a (hermètics a gasos amb l\'ERA a l\'interior) corresponen al màxim nivell de protecció química (Nivell 1 / Nivell A) davant atmosferes tòxiques o corrosives en fase gasosa o vapor.'
  },

  // =========================================================================
  // TEMA 28: Intervenció bàsica en assistència sanitària (MAN.SANI.000) — 3 preguntes
  // =========================================================================
  {
    topic: 28,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T28] En l\'avaluació primària d\'un pacient traumatitzat greu seguint l\'algoritme XABCDE, quina actuació correspon a la lletra "X" i quina a la "A"?',
    options: [
      'X: exploració neurològica; A: auscultació cardíaca',
      'X: control d\'hemorràgies exsanguinants (compressió directa, empaquetament o torniquet); A: permeabilització de la via aèria amb control cervical',
      'X: exposició completa del cos; A: administració d\'analgèsia',
      'X: radiografia portàtil; A: immobilització d\'extremitats'
    ],
    correctIndex: 1,
    explanation: 'En trauma greu, l\'XABCDE prioritza en primer lloc (X) aturar l\'hemorràgia exsanguinant que mata en minuts, i tot seguit (A) assegurar la via aèria amb protecció de la columna cervical.'
  },
  {
    topic: 28,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T28] Un motorista accidentat presenta obertura ocular només a l\'estímul dolorós (2), resposta verbal amb paraules inapropiades (3) i resposta motora de flexió anormal/decorticació al dolor (3). Quina puntuació obté a l\'Escala de Coma de Glasgow (GCS) i què indica?',
    options: [
      'GCS = 8 (2+3+3); indica traumatisme cranioencefàlic greu (≤ 8) amb compromís potencial de la via aèria',
      'GCS = 10 (2+3+5); indica traumatisme cranioencefàlic lleu',
      'GCS = 6 (1+2+3); indica mort encefàlica',
      'GCS = 12 (4+4+4); indica estat de consciència normal'
    ],
    correctIndex: 0,
    explanation: 'Ocular al dolor = 2, Verbal paraules inapropiades = 3, Motora flexió anormal = 3. Total = 8/15. Un GCS ≤ 8 defineix TCE greu i indica risc elevat de pèrdua de protecció de la via aèria.'
  },
  {
    topic: 28,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T28] En una parada cardiorespiratòria (PCR) d\'un adult presenciada, quina és la relació compressions-ventilacions en RCP bàsica amb dos reanimadors i la profunditat/freqüència recomanada de les compressions?',
    options: [
      '15:2, profunditat 2-3 cm i freqüència 60-80 compressions/min',
      '30:2, profunditat de 5 a 6 cm i freqüència de 100 a 120 compressions/min, deixant reexpandir completament el tòrax',
      '5:1, profunditat de 8 cm i freqüència de 140 compressions/min',
      '30:2, però només en nens; en adults és 15:2'
    ],
    correctIndex: 1,
    explanation: 'Segons les guies ERC per a adults, la RCP manté una relació 30:2, amb compressions al centre del tòrax de 5-6 cm de profunditat a un ritme de 100-120/min i permetent la reexpansió toràcica completa.'
  },

  // =========================================================================
  // TEMA 29: Incidents de Múltiples Víctimes (IMV) i Triatge START (MAN.SANI.001) — 3 preguntes
  // =========================================================================
  {
    topic: 29,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T29] Durant un triatge bàsic START en un IMV, trobem una víctima que no pot caminar, respira amb una freqüència de 24 rpm, té pols radial present (o reompliment capil·lar < 2 s), però no respon a ordres senzilles. Quin color de targeta se li assigna?',
    options: [
      'Verd (prioritat 3)',
      'Groc (prioritat 2)',
      'Vermell (prioritat 1 - immediat)',
      'Negre (prioritat 0 - mort)'
    ],
    correctIndex: 2,
    explanation: 'Al triatge START s\'avaluen en ordre: 1) Camina (Verd), 2) Respiració (<30 rpm passa al següent pas; si no respira després d\'obrir via aèria -> Negre; si >30 -> Vermell), 3) Perfusió (pols radial present), 4) Estat mental: si NO obeeix ordres senzilles -> Vermell.'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T29] En un IMV amb desenes de víctimes dins d\'un túnel ferroviari, quina és la primera acció de triatge que permet separar ràpidament els ferits lleus del lloc de l\'impacte?',
    options: [
      'Fer un electrocardiograma a totes les víctimes dins del túnel',
      'Donar l\'ordre verbal en veu alta perquè tothom qui pugui caminar surti cap a una zona segura designada (classificació inicial com a Verds)',
      'Col·locar tauler espinal i collarí cervical a totes les persones que caminen',
      'Esperar que arribin 20 ambulàncies abans de moure cap víctima lleu'
    ],
    correctIndex: 1,
    explanation: 'El primer filtre del mètode START consisteix a cridar que tothom qui pugui caminar es desplaci a una àrea segura (Verd), alliberant l\'escenari per atendre els que no poden moure\'s.'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T29] Dins l\'organització sanitària i operativa d\'un IMV, quina funció té el PMA (Punt Mèdic Avançat) o Niu de Ferits?',
    options: [
      'És l\'àrea d\'estacionament de les bombes forestals',
      'És la zona segura fora de la zona calenta on es concentren, es retriatgen, s\'estabilitzen les víctimes i s\'organitza la seva evacuació ordenada cap als hospitals',
      'És el lloc on es deixa únicament el material trencat dels vehicles',
      'És la sala de premsa per a familiars i mitjans de comunicació'
    ],
    correctIndex: 1,
    explanation: 'El PMA s\'ubica en zona segura (tèbia/freda) per rebre les víctimes evacuades pels equips de rescat, fer el segon triatge/estabilització clínica i gestionar el carregament ordenat a les ambulàncies.'
  },

  // =========================================================================
  // TEMA 30: Estructures Col·lapsades, Apuntalaments i INSARAG (MAN.SVES.000) — 3 preguntes
  // =========================================================================
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T30] Segons la metodologia internacional INSARAG de marcatge d\'estructures col·lapsades, què indica una marca exterior que mostra una fletxa d\'entrada, la identificació de l\'equip, data/hora i un "0" dins un quadrat (o indicació sense víctimes confirmades) un cop completada la recerca?',
    options: [
      'Que l\'edifici està pendent d\'enderroc immediat amb explosius',
      'Que l\'estructura ha estat inspeccionada/cercada per l\'equip indicat, amb el resultat registrat de víctimes vives/mortes o pendents de rescat, evitant duplicitats d\'esforç entre equips',
      'Que hi ha risc radioactiu de nivell 0',
      'Que l\'estructura és segura per reallotjar-hi els veïns'
    ],
    correctIndex: 1,
    explanation: 'El sistema de marcatge INSARAG estandarditza a l\'exterior de l\'edifici la situació estructural, els riscos, l\'equip actuant, l\'estat de la recerca i el recompte de víctimes vives/mortes per coordinar equips relleu.'
  },
  {
    topic: 30,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T30] En un apuntalament d\'emergència d\'un forjat de formigó que amenaça ruïna per evitar-ne l\'enfonsament sobre una víctima atrapada a sota, com s\'ha de transmetre la càrrega cap al terra inferior?',
    options: [
      'Col·locant puntals aïllats directament sobre el paviment sense sabata ni durment',
      'Instal·lant una solera/durment inferior i un capçal superior per repartir la càrrega, alineant els puntals verticalment en plom i arriostrant-los (en creu de Sant Andreu) per evitar el vinclament, i recalçant de manera progressiva sense aixecar bruscament l\'estructura',
      'Empentant el forjat cap amunt amb un gat hidràulic fins a recuperar la cota original de construcció',
      'Clavant els puntals amb un angle de 45° sense cap travesser'
    ],
    correctIndex: 1,
    explanation: 'Un apuntalament segur necessita repartir càrregues (durment i capçal), verticalitat i arriostrament contra el vinclament, i simplement sostenir/estabilitzar la càrrega existent sense forçar elevacions que puguin trencar elements fràgils.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T30] Durant una operació de recerca de víctimes sepultades sota runes en un col·lapse estructural, què s\'entén per "silenci d\'obra" i per a què s\'aplica?',
    options: [
      'És una ordre per aturar tots els motors, generadors, eines i moviments del personal durant uns minuts per permetre l\'escolta directa o amb geòfons/càmeres acústiques de senyals de vida',
      'És la prohibició d\'utilitzar emissores durant tota la intervenció',
      'És el temps de descans nocturn obligatori dels bombers',
      'És un protocol exclusiu per a incendis en biblioteques'
    ],
    correctIndex: 0,
    explanation: 'En la fase de recerca i localització, es decreta el silenci absolut a l\'escenari (aturada de maquinària i pas) perquè els equips d\'escolta acústica o els gossos de recerca puguin detectar colps o veus febles.'
  },

  // =========================================================================
  // TEMA 31: Salvaments i Recerques en el Medi Natural Terrestre (MAN.SVMN.000) — 3 preguntes
  // =========================================================================
  {
    topic: 31,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T31] En rebre l\'avís d\'un excursionista perdut de nit a l\'alta muntanya amb temperatures sota zero, quina informació inicial és crítica obtenir durant l\'entrevista telefònica (si hi ha cobertura) per orientar la recerca i demanar-li autoprotecció?',
    options: [
      'Només el seu número de DNI i la matrícula del vehicle',
      'Últim punt conegut/track o referències visuals, estat físic i equipament (roba, frontal, bateria del mòbil), indicant-li que NO es mogui del lloc si no coneix el camí, s\'aïlli del terra i estalviï bateria',
      'Aconsellar-li que baixi corrents per un torrent sense camí per arribar abans a la carretera',
      'Demanar-li que apagui el telèfon permanentment i tiri la motxilla per pesar menys'
    ],
    correctIndex: 1,
    explanation: 'Fixar l\'últim punt conegut (LKP/PLS), avaluar l\'estat i equipament, i donar instruccions de quedar-se quiet, protegir-se del fred/vent i racionar bateria evita que la víctima s\'allunyi de la zona de recerca o pateixi caigudes.'
  },
  {
    topic: 31,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T31] En un rescat de muntanya on cal immobilitzar i evacuar en llitera per terreny molt inclinat una víctima amb sospita de lesió medul·lar i risc d\'hipotèrmia, quin dispositiu combina millor immobilització completa i aïllament tèrmic?',
    options: [
      'Una cadira d\'evacuació d\'edificis sense subjeccions',
      'El matalàs de buit dins la llitera de rescat (amb manta tèrmica/sac d\'hipotèrmia i protecció cranio-cervical)',
      'Portar la víctima a collibè per guanyar rapidesa',
      'Només un collarí cervical tou caminant amb bastons'
    ],
    correctIndex: 1,
    explanation: 'El matalàs de buit s\'adapta anatòmicament a tot el cos, ofereix una immobilització rígida excel·lent per a la columna i pelvis, i aïlla tèrmicament del fred respecte al tauler espinal rígids.'
  },
  {
    topic: 31,
    difficulty: 'Fàcil',
    question: '[BANC EXTRA · T31] En un rescat amb helicòpter en zona de muntanya, per quin sector està totalment prohibit apropar-se a l\'aeronau quan té el rotor en marxa?',
    options: [
      'Pel sector frontal (dins el camp visual del pilot) en terreny pla',
      'Pel sector posterior (rotor de cua) i des de la part més alta d\'un pendent lateral cap al rotor principal',
      'Pel lateral dret quan el pilot fa el senyal d\'autorització',
      'Per cap sector; tots són igualment segurs si es porta casc'
    ],
    correctIndex: 1,
    explanation: 'El rotor de cua és gairebé invisible en gir i mortal; a més, en pendents, el rotor principal passa molt a prop del terra pel costat de muntanya amunt. L\'aproximació es fa sempre ajupit, pel sector frontal/lateral autoritzat i a la vista de la tripulació.'
  },

  // =========================================================================
  // TEMA 32: Accidents de mobilitat viària (MAN.SVVH.000) — 3 preguntes
  // =========================================================================
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T32] En un accident de trànsit amb un turisme bolcat lateralment (sobre un costat) i una víctima conscient a l\'interior, quina és la seqüència tècnica correcta abans d\'iniciar les maniobres d\'excarceració?',
    options: [
      'Redreçar el vehicle a braç immediatament per treballar més còmodes',
      'Assegurar l\'escenari i senyalitzar el trànsit, estabilitzar el vehicle (puntals d\'estabilització/eslingues i falques) sense modificar-ne la posició, desconnectar la bateria si és accessible, protegir la víctima i obrir un accés segur (ex. abatiment/tall de sostre)',
      'Trencar el parabrisa amb una destral directament sobre la cara de la víctima sense protecció',
      'Retirar la víctima tibant-la pels braços a través de la finestra superior sense collarí'
    ],
    correctIndex: 1,
    explanation: 'Mai es redreça un vehicle amb víctimes a dins. Cal estabilitzar-lo primer amb puntals/falques per evitar moviments bruscos, gestionar riscos (bateria, airbags, combustible), protegir la víctima i fer un accés ampli (ex. sostre) per a l\'extracció alineada.'
  },
  {
    topic: 32,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T32] Durant una excarceració en un vehicle modern, per què s\'ha de pelar o retirar el guarneix interior dels pilars A, B i C abans de tallar-los amb la cisalla hidràulica?',
    options: [
      'Per estalviar bateria a la cisalla perquè el plàstic és molt dur',
      'Per localitzar i evitar tallar els generadors de gas (cartutxos a alta pressió) dels airbags de cortina o reforços d\'acer d\'ultra-alta resistència, prevenint una detonació accidental o el trencament de les fulles',
      'Perquè la normativa de reciclatge obliga a separar els plàstics a la carretera',
      'Per comprovar el color dels cables de la ràdio'
    ],
    correctIndex: 1,
    explanation: 'La tècnica de "pelar" els pilars (peel & peek) permet veure si hi ha cartutxos d\'airbag no detonats (alta pressió/explosió), cablejat d\'alta tensió o zones de reforç que puguin danyar la cisalla o ferir el rescatador i la víctima.'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T32] En un accident amb un vehicle pesant (camió) i un turisme encastat sota el remolc, quin criteri de protecció viària i estabilització cal aplicar en una autopista?',
    options: [
      'Aparcar els vehicles de bombers en paral·lel al carril contrari sense cons',
      'Col·locar el primer vehicle d\'intervenció en posició defensiva (en diagonal/escut uns metres abans de l\'accident, amb les rodes girades cap al voral) per protegir la zona de treball contra possibles encalços, i senyalitzar amb cons des de força distància abans',
      'Treballar sense armilla d\'alta visibilitat per comoditat amb l\'equip d\'excarceració',
      'Desplaçar el remolc amb la BUP abans de valorar l\'estat de l\'atrapat'
    ],
    correctIndex: 1,
    explanation: 'La col·locació defensiva del camió escut (en angle i amb rodes direccionals cap a fora de la zona de treball) protegeix els intervinents i les víctimes d\'un atropellament o segon xoc en vies ràpides.'
  },

  // =========================================================================
  // TEMA 33: Intervenció bàsica en rescat urbà (MAN.SVXX.000) — 3 preguntes
  // =========================================================================
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T33] En un rescat d\'una persona atrapada dins d\'un ascensor aturat entre dues plantes sense risc imminent d\'incendi o emergència mèdica, quina és l\'actuació correcta i segura?',
    options: [
      'Forçar les portes de la cabina amb el separador hidràulic immediatament',
      'Desconnectar l\'interruptor general de força motriu a la sala de màquines/quadre (bloquejant i senyalitzant), comprovar la posició de la cabina, i si cal obrir la porta de pis amb clau triangular, fer-ho només quan la cabina estigui frenada i a nivell segur, protegint el buit del forat',
      'Baixar la víctima fent ràpel pel forat de l\'ascensor sense aturar la corrent elèctrica',
      'Deixar que la víctima surti per un buit inferior de 30 cm sota la cabina amb el motor engegat'
    ],
    correctIndex: 1,
    explanation: 'El risc principal en ascensors és el moviment inesperat de la cabina o la caiguda al buit. Sempre cal tallar la força motriu, comunicar-se amb els atrapats, verificar la posició i mai evacuar amb desnivells perillosos sense protegir la caiguda al buit.'
  },
  {
    topic: 33,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T33] En un rescat vertical urbà (ex. treballador suspès d\'un arnès en una bastida o pati de llums) amb risc de síndrome de l\'arnès (trauma per suspensió), quina mesura és fonamental?',
    options: [
      'Mantenir la víctima completament vertical un cop rescatada i posar-la dreta de seguida',
      'Executar el rescat amb la màxima celeritat possible (animant la víctima a moure les cames si està conscient) i, un cop a terra, evitar estirar-la de cop en decúbit supí total si porta molta estona suspesa; col·locar-la en posició semiasseguda/gatzoneta progressiva abans d\'anar tombant-la segons criteri sanitari',
      'Tallar la corda de vida abans d\'assegurar-la amb una línia secundària',
      'Esperar 45 minuts a fer el rescat perquè s\'acostumi a l\'arnès'
    ],
    correctIndex: 1,
    explanation: 'La síndrome de l\'arnès provoca acumulació de sang a les cames i retorn brusc de toxines/sang freda en tombar-la de cop (mort per rescat). Cal rescatar ràpidament i passar progressivament per posició semiasseguda/ajupida.'
  },
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T33] En una intervenció per un nen que té el braç atrapat entre els barrots metàl·lics d\'una reixa o un banc urbà, quin procediment minimitza el risc de lesió secundària?',
    options: [
      'Estirar el braç amb força fent palanca amb una pota de cabra contra la pell del nen',
      'Protegir l\'extremitat amb una pantalla rígida/tovallola, tranquil·litzar el menor, i aplicar un separador hidràulic petit o serra manual/elèctrica controlada allunyant l\'esforç de la pell per obrir els barrots',
      'Tallar el barrot amb radial d\'espurnes a 2 cm de la mà descoberta',
      'Aplicar oli de motor per relliscar el braç encara que estigui molt inflamat'
    ],
    correctIndex: 1,
    explanation: 'Cal protegir sempre l\'extremitat de possibles cops, espurnes o pessigaments (pantalla rígida), evitar traccions forçades que lesionin articulacions o pell, i obrir l\'element atrapant de forma controlada.'
  },

  // =========================================================================
  // TEMA 34: Inundacions, Hidrologia, Llindars SMC i Rescat Aquàtic (MAN.SVMN.001) — 3 preguntes
  // =========================================================================
  {
    topic: 34,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T34] Segons els llindars d\'avís de situació meteorològica de perill (SMP) del Servei Meteorològic de Catalunya (SMC) per intensitat de pluja, quin registre correspon a un llindar d\'avís (grau alt / perill moderat-alt)?',
    options: [
      'Més de 5 mm en 24 hores',
      'Més de 20 mm en 30 minuts (perill moderat) o més de 40 mm en 30 minuts (perill alt/molt alt)',
      'Més de 100 mm en un mes',
      'Més de 2 mm en 1 hora'
    ],
    correctIndex: 1,
    explanation: 'Els llindars SMC per intensitat de pluja es mesuren en acumulació en 30 minuts: > 20 mm/30 min (avís groc/taronja segons probabilitat) i > 40 mm/30 min (llindar superior d\'intensitat molt forta).'
  },
  {
    topic: 34,
    difficulty: 'Difícil',
    question: '[BANC EXTRA · T34] En un rescat d\'una persona atrapada al sostre d\'un vehicle en una riera amb corrent fort (aigües vives), quin principi tàctic i d\'equipament s\'ha de respectar absolutament?',
    options: [
      'Entrar a l\'aigua amb les botes d\'incendi estructural i el vestit EN 469 lligat a una corda a la cintura sense alliberament ràpid',
      'Utilitzar EPI aquàtic específic (neoprè/vestit sec, armilla de flotació amb alliberament ràpid, casc aquàtic), establir equip de seguretat riu avall (llançador de bossa de rescat) i prioritzar l\'opció de rescat més segura (des de la vora / llançament / tirolina abans que l\'entrada directa a nado)',
      'Creuar el corrent caminant en línia perpendicular sense bastó ni assegurança',
      'Utilitzar l\'escala de ganxos des del pont sense armilla salvavides'
    ],
    correctIndex: 1,
    explanation: 'En aigües en moviment mai s\'ha d\'entrar amb botes o vestit estructural (s\'omplen d\'aigua i enfonsen) ni lligar-se amb nusos fixos al cos (risc d\'ofegament per força del corrent). Cal aplicar l\'escala de risc (parlar -> allargar/llançar -> remar -> entrar com a últim recurs amb EPI aquàtic i seguretat riu avall).'
  },
  {
    topic: 34,
    difficulty: 'Mitjà',
    question: '[BANC EXTRA · T34] En el buidatge d\'un aparcament soterrani completament inundat on hi pot haver vehicles submergits i risc elèctric, quina comprovació prèvia és obligatòria abans d\'introduir equips amb bombes d\'esgotament elèctriques o personal?',
    options: [
      'Entrar directament amb el camió fins a la rampa inundada per aspirar amb la bomba',
      'Verificar i assegurar el tall del subministrament elèctric de l\'aparcament (quadres i punts de càrrega), comprovar si hi ha possibles víctimes o vessaments d\'hidrocarburs/gasos i utilitzar bombes submergibles o turbobombes amb seguretat diferencial adequada',
      'Tirar-hi escuma per neutralitzar l\'electricitat de l\'aigua',
      'Bombejar l\'aigua cap a l\'ascensor de l\'edifici'
    ],
    correctIndex: 1,
    explanation: 'L\'aigua en soterranis presenta risc greu d\'electrocució (quadres, punts de recàrrega VE, il·luminació) i d\'atmosfera tòxica/explosiva si s\'utilitzen motobombes de combustió en espais tancats sense ventilació.'
  }
];
