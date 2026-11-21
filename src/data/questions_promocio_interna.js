// Banc de preguntes d'ampliació procedent d'exàmens i temaris de promoció interna
// del Cos de Bombers de la Generalitat de Catalunya:
// Caporal, Sergent, Oficial, Sotsinspector i Inspector.
// Nota: Aquestes preguntes inclouen contingut fora del temari estrictament bàsic (81/26)
// i s'etiqueten explícitament com a "Material d'ampliació" en el mode Pràctica de Tests.

export const QUESTIONS_PROMOCIO_INTERNA = [
  // =========================================================================
  // CAPORAL (15 preguntes)
  // =========================================================================
  {
    id: 'pi-1',
    topic: 6,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "Segons l'article 15 de la Llei 5/1994 de prevenció i extinció d'incendis i salvaments, a quina escala pertany la categoria de caporal del Cos de Bombers de la Generalitat?",
    options: [
      "A l'escala bàsica, juntament amb la categoria de bomber i bomber de primera.",
      "A l'escala tècnica, juntament amb les categories d'oficial, sergent i bomber de primera.",
      "A l'escala executiva, juntament amb les categories de sergent i sotsinspector.",
      "A l'escala de comandament operatiu, situada entre l'escala bàsica i l'executiva."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): Segons l'art. 15 de la Llei 5/1994 (modificada per la Llei 5/1999), l'escala tècnica comprèn oficial, sergent, caporal i bomber de primera; l'escala bàsica comprèn només la categoria de bomber."
  },
  {
    id: 'pi-2',
    topic: 7,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "En una intervenció on arriba la primera dotació (una BRP amb caporal al comandament), quina és la primera acció prioritària del caporal en arribar al sinistre abans d'ordenar el desplegament?",
    options: [
      "Connectar immediatament la bomba a pressió nominal i estendre una línia de 45 mm.",
      "Realitzar la valoració inicial (360° si és possible), avaluar riscos i establir el primer comandament.",
      "Assignar els torns de descans del personal i sol·licitar el relleu preventiu al parc.",
      "Iniciar l'entrada forçada per l'accés principal amb equip complet sense esperar reconeixement."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): El primer comandament al lloc ha de fer la valoració inicial de l'escenari (reconeixement, identificació de riscos i víctimes), assumir i comunicar el comandament inicial i demanar reforços si cal."
  },
  {
    id: 'pi-3',
    topic: 23,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "En un incendi d'interior amb fum dens i calent sota pressió en una planta superior, quin indicador visual directe alerta el caporal d'un risc imminent de backdraft en obrir un accés?",
    options: [
      "Flames blaves netes a nivell de terra amb corrent d'aire fred continu cap a l'exterior.",
      "Pulsacions de fum espès groguenc-grisenc que surten i entren per les escletxes amb vidres ennegrits.",
      "Fum blanc lleuger ascendent sense pressió i absència total de temperatura als marcs de la porta.",
      "So constant de tiratge lliure per la façana i caiguda brusca de la temperatura al sostre."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): Les pulsacions de fum dens (efecte respiració), el fum groguenc-grisenc a pressió per escletxes i els vidres ennegrits pel sutge i la calor són senyals clàssics de risc imminent de backdraft."
  },
  {
    id: 'pi-4',
    topic: 23,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "Durant la direcció d'un binomi d'atac en un incendi d'habitatge, quina és la funció de seguretat crítica de l'equip SOS (o equip de seguretat ràpida) que ha de preveure el comandament?",
    options: [
      "Substituir el binomi d'atac cada 5 minuts per reduir el consum d'aire de les ampolles.",
      "Mantenir-se equipat i preparat a l'exterior del recinte per rescatar el binomi en cas d'emergència.",
      "Controlar exclusivament la pressió del manòmetre de la bomba del vehicle autobomba.",
      "Realitzar la ventilació mecànica de la caixa d'escala abans que s'hagi localitzat el focus."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): L'equip de seguretat (SOS/RIT) roman completament equipat amb ERA a la zona segura preparada per intervenir de forma immediata si un binomi queda atrapat, perdut o sense aire."
  },
  {
    id: 'pi-5',
    topic: 13,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "Si un caporal ordena muntar una instal·lació d'atac amb mànega de 25 mm a 100 metres de distància i un desnivell positiu de 20 metres (cabal 150 L/min, pèrdua de càrrega 2 bar/100 m, pressió en llança 5 bar), quina pressió ha de donar a la bomba?",
    options: [
      "7 bar, ja que la pèrdua de càrrega en 25 mm compensa la pressió estàtica del desnivell.",
      "9 bar, sumant els 5 bar en llança, els 2 bar de desnivell i els 2 bar de pèrdua.",
      "11 bar, aplicant el doble de pèrdua de càrrega per tractar-se d'una línia en alçada.",
      "6 bar, perquè el desnivell positiu només resta pressió quan s'utilitzen mànegues de 70 mm."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): P_bomba = P_llança (5 bar) + H_desnivell (20 m = 2 bar) + J_pèrdues (2 bar) = 9 bar."
  },
  {
    id: 'pi-6',
    topic: 24,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "En un accident de trànsit amb múltiples vehicles implicats i dues víctimes atrapades, quina zonificació bàsica ha d'establir el caporal per ordenar la intervenció?",
    options: [
      "Zona de comandament, zona de premsa i zona d'estacionament de grues municipals.",
      "Zona calenta (treball i rescat), zona tèbia (suport i material) i zona freda (seguretat i espera).",
      "Zona d'extinció, zona d'aïllament químic i zona de triatge hospitalari avançat.",
      "Zona perimetral interior, zona d'exclusió aèria i zona de descontaminació NBQ."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): La zonificació operativa estàndard divideix l'escenari en zona calenta (àrea de treball directe amb EPI complet), zona tèbia (eines, suport i comandament avançat) i zona freda (vehicles de suport i seguretat)."
  },
  {
    id: 'pi-7',
    topic: 25,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "En la direcció tàctica d'un incendi forestal en fase inicial, en quina part del perímetre es prioritza l'atac directe quan la velocitat de propagació i la longitud de flama ho permeten?",
    options: [
      "Sempre per la cua, avançant exclusivament amb eines manuals sense suport d'aigua.",
      "Pel cap o pels flancs propers al cap per frenar l'avanç principal del front de flama.",
      "Només pel focus secundari més allunyat, deixant que el front principal arribi a pista.",
      "Exclusivament des de l'interior de la zona cremada sense establir rutes d'escapament."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): En atac directe amb flama assumible, s'ataca el cap o els flancs en direcció al cap per aturar el sector de màxima propagació, sempre garantint el protocol OACEL (Observació, Alerta, Comunicació, Escapament, Lloc segur)."
  },
  {
    id: 'pi-8',
    topic: 2,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "Segons el règim disciplinari dels empleats públics (article 97 del TREBEP), quin és el termini de prescripció de les faltes greus i de les faltes lleus, respectivament?",
    options: [
      "Les faltes greus prescriuen als 3 anys i les faltes lleus prescriuen al cap d'1 any.",
      "Les faltes greus prescriuen als 2 anys i les faltes lleus prescriuen als 6 mesos.",
      "Les faltes greus prescriuen als 4 anys i les faltes lleus prescriuen als 3 mesos.",
      "Les faltes greus prescriuen al cap d'1 any i les faltes lleus prescriuen als 2 mesos."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): L'art. 97 del TREBEP estableix que les faltes molt greus prescriuen als 3 anys, les greus als 2 anys i les lleus als 6 mesos (des de la comissió o cessament de la falta continuada)."
  },
  {
    id: 'pi-9',
    topic: 17,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "En la gestió de comunicacions d'un sinistre, quan el caporal assumeix el comandament inicial i necessita comunicar un canvi crític d'escenari a la sala de control, quin principi de transmissió RESCAT s'ha de prioritzar?",
    options: [
      "Utilitzar codis numèrics interns no homologats per abreujar la durada del missatge.",
      "Brevetat, claredat, identificació de l'emissor i confirmació de recepció (col·lació).",
      "Mantenir el canal ocupat de manera contínua fins que arribi el cap de guàrdia al lloc.",
      "Transmetre tota la informació personal de les víctimes en obert pel canal tàctic local."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): Les comunicacions operatives exigeixen missatges breus, clars, en llenguatge planer, identificant emissor/receptor i confirmant la recepció correcta de les ordres crítiques."
  },
  {
    id: 'pi-10',
    topic: 3,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "En la revisió de guàrdia d'un parc, quina responsabilitat directa té el caporal respecte a la prevenció de riscos laborals de la seva dotació durant una intervenció?",
    options: [
      "Eximir la dotació de l'ús d'ERA si l'incendi es declara en un espai exterior ventilat.",
      "Vetllar pel compliment dels protocols de seguretat, l'ús correcte dels EPI i el control de temps d'exposició.",
      "Elaborar i aprovar anualment l'avaluació general de riscos de tota la Regió d'Emergències.",
      "Substituir les revisions mèdiques periòdiques del servei de prevenció per tests d'esforç al parc."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): Com a comandament directe de la dotació, el caporal ha de garantir l'ús adequat dels EPI, el compliment de procediments segurs, el control d'aire/exposició i la comunicació de riscos detectats."
  },
  {
    id: 'pi-11',
    topic: 27,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "Davant d'una fuita en un vehicle cisterna amb placa taronja 268 / 1005 (amoníac anhidre), quina decisió tàctica inicial ha de prendre el caporal?",
    options: [
      "Aproximar-se a favor del vent fins a 5 metres per segellar la vàlvula sense protecció química.",
      "Situar la dotació a barlovent i en cota elevada, establir perímetre ampli i no aplicar aigua directa al líquid.",
      "Aplicar immediatament un raig ple d'aigua dins la cisterna per diluir el gas liquat comprimit.",
      "Obrir la boca d'home superior per reduir la pressió interna abans de confinar la població."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): El 1005 és amoníac anhidre (268 = gas tòxic i corrosiu). Cal aproximació a barlovent, perímetre ampli, protecció respiratòria i química adequada, i evitar abocar aigua sobre el vessament líquid."
  },
  {
    id: 'pi-12',
    topic: 19,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "En un rescat en alçada on s'instal·la un sistema de politges polispast 3:1 amb corda semiestàtica, quina càrrega aproximada suporta el punt d'ancoratge de capçalera si la massa suspesa és de 120 kg (sense comptar fregaments)?",
    options: [
      "40 kgf, perquè el sistema divideix la tensió total sobre l'ancoratge en tres parts iguals.",
      "120 kgf més la força aplicada en l'estirada (160 kgf en total si la politja de reenviament hi és fixada).",
      "360 kgf, ja que el factor de multiplicació s'aplica directament sobre el mosquetó d'ancoratge.",
      "60 kgf, perquè la corda reparteix la meitat del pes cap al descensor de seguretat."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): En un polispast 3:1 simple on el rescatador estira en direcció oposada a la càrrega mitjançant una politja de reenviament a l'ancoratge, l'ancoratge suporta la càrrega (120 kgf) + la força d'estirada (40 kgf) = 160 kgf."
  },
  {
    id: 'pi-13',
    topic: 7,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "Segons el Decret 276/2016 que regula el servei de guàrdia dels Bombers de la Generalitat, quin principi regeix la substitució o relleu del comandament d'una dotació durant una intervenció en curs?",
    options: [
      "El comandament entrant s'incorpora directament a l'extinció sense cap traspàs d'informació.",
      "S'ha de fer un traspàs formal de comandament amb informació de situació, riscos, recursos i pla d'acció.",
      "El comandament sortint abandona el sinistre abans que arribi el relleu per complir l'horari.",
      "El relleu només es pot produir quan l'incendi ha estat declarat totalment extingit."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): El traspàs de comandament exigeix una transferència ordenada i explícita (briefing de situació, objectius, recursos desplegats, riscos i comunicacions) abans que el comandament sortint cedeixi la responsabilitat."
  },
  {
    id: 'pi-14',
    topic: 23,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "Quan s'aplica ventilació per pressió positiva (VPP) en un edifici d'habitatges, quin requisit és imprescindible abans d'engegar el ventilador a l'accés?",
    options: [
      "Mantenir totes les finestres i portes del recinte hermèticament tancades per comprimir el fum.",
      "Tenir garantida una obertura de sortida controlada al compartiment afectat i el binomi preparat.",
      "Col·locar el ventilador a menys de 20 cm de la porta d'entrada per segellar tot el marc.",
      "Dirigir el flux d'aire des de la sortida del foc cap a la caixa d'escala d'evacuació."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): La VPP exigeix crear un recorregut d'aire net des d'una entrada segura fins a una sortida de dimensions adequades al focus/recinte incendiat, amb línia d'aigua carregada i coordinació amb l'equip d'atac."
  },
  {
    id: 'pi-15',
    topic: 15,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Caporal',
    extensionLabel: "Material d'ampliació · Promoció Interna (Caporal)",
    question: "En un incendi en una nau industrial amb estructura metàl·lica vista sense protecció passiva, a partir de quina temperatura crítica aproximada comença a perdre de forma significativa la seva resistència mecànica l'acer estructural?",
    options: [
      "Al voltant dels 180 °C – 220 °C, moment en què es produeix la fusió superficial.",
      "Cap als 500 °C – 550 °C, quan l'acer perd aproximadament el 50 % de la seva capacitat portant.",
      "Únicament a partir dels 1.150 °C, quan l'acer arriba al seu punt d'ebullició tèrmica.",
      "A partir dels 95 °C, a causa de l'evaporació de l'aigua de cristal·lització interna."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Caporal): L'acer estructural pateix dilatacions importants a partir dels 300 °C i perd prop del 50 % de la seva resistència cap als 500–550 °C, fet crític per a la seguretat dels equips interiors."
  },

  // =========================================================================
  // SERGENT (15 preguntes)
  // =========================================================================
  {
    id: 'pi-16',
    topic: 7,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "En l'estructura operativa dels Bombers de la Generalitat, quina és la funció principal d'un sergent com a comandament intermedi en un parc o sector?",
    options: [
      "Aprovar els decrets d'organització del Departament d'Interior al Diari Oficial.",
      "Coordinar les dotacions del parc o sector operatiu i assumir el comandament d'emergències de nivell mitjà.",
      "Substituir exclusivament el personal administratiu en la tramitació de contractes menors.",
      "Signar les autoritzacions de plans d'emergència exterior de risc químic Seveso."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): El sergent (escala tècnica) dirigeix i coordina operativament guàrdies/parcs i assumeix el comandament en intervencions amb diverses dotacions fins a l'arribada de comandaments superiors si l'emergència escala."
  },
  {
    id: 'pi-17',
    topic: 6,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "D'acord amb el Sistema de Comandament d'Incidents (SCI / ICS), quin és l'abast de control (span of control) recomanat per garantir una supervisió eficaç per cada comandament?",
    options: [
      "Entre 12 i 18 unitats operatives subordinades per maximitzar l'autonomia al camp.",
      "Entre 3 i 7 recursos o unitats subordinades, essent 5 el valor òptim de referència.",
      "Un màxim fix de 2 unitats per comandament, independentment de la complexitat del servei.",
      "Sense límit numèric mentre totes les unitats operin en un mateix canal de ràdio."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): En el SCI, l'abast de control òptim és de 3 a 7 subordinats/recursos per supervisor (idealment 5); quan se supera, cal sectoritzar o crear subnivells."
  },
  {
    id: 'pi-18',
    topic: 25,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "En un incendi forestal amb comportament convectiu i emissió de focus secundaris a llarga distància, quina estratègia d'extinció ha de prioritzar el comandament de sector respecte a les línies de control?",
    options: [
      "Mantenir tot el personal en atac directe sobre el cap sense establir zones segures.",
      "Passar a atac indirecte o paral·lel ancorat en llocs segurs, prioritzant la seguretat i l'àrea d'oportunitat.",
      "Retirar tots els mitjans aeris per evitar turbulències i deixar cremar lliurement el perímetre.",
      "Concentrar les autobombes al fons dels barrancs amb pendent pronunciat i combustible dens."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): Quan la intensitat del foc supera la capacitat d'atac directe (>2,5–3 m de flama o comportament convectiu), cal canviar a estratègia d'atac indirecte/paral·lel des de zones segures i ancorades."
  },
  {
    id: 'pi-19',
    topic: 23,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "En un incendi d'habitatge en planta 5a amb afectació de la caixa d'escala per fum, quina maniobra tàctica permet garantir la seguretat dels evacuats que baixen per l'escala?",
    options: [
      "Obrir la porta del pis incendiat abans d'instal·lar el ventilador perquè el fum es dispersi pel replà.",
      "Pressuritzar la caixa d'escala des de la planta baixa (VPP defensiva) amb obertura superior controlada.",
      "Tancar completament la claraboia superior de l'escala per evitar el tiratge tèrmic ascendent.",
      "Aplicar escuma d'alta expansió al vestíbul d'entrada mentre baixen els veïns."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): La pressurització de la caixa d'escala amb VPP des de la base (i exutori o obertura superior) manté la via d'evacuació neta de fum i facilita l'accés segur dels equips d'atac."
  },
  {
    id: 'pi-20',
    topic: 27,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "Quin fenomen físic defineix una BLEVE (Boiling Liquid Expanding Vapor Explosion) en un dipòsit de GLP sotmès a l'acció directa de la flama?",
    options: [
      "Una combustió lenta de vapors pesants a pressió atmosfèrica sense ruptura del recipient.",
      "El trencament catastròfic del recipient per debilitament de la fase vapor i vaporització sobtada del líquid sobreescalfat.",
      "Una reacció exotèrmica exclusiva de líquids criogènics quan entren en contacte amb escuma sintètica.",
      "La deflagració interna dins la fase líquida causada per l'entrada d'aire a través de la vàlvula de seguretat."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): La BLEVE es produeix quan la paret metàl·lica en contacte amb la fase vapor s'escalfa i cedeix per la pressió interna, provocant la despressurització instantània i ebullició explosiva del líquid sobreescalfat."
  },
  {
    id: 'pi-21',
    topic: 12,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "Segons la Llei 3/2010 de prevenció i seguretat en matèria d'incendis a Catalunya, a qui correspon exercir la potestat d'inspecció i control tècnic dels establiments i activitats inclosos en els annexos?",
    options: [
      "Exclusivament a les empreses privades d'assegurances contractades pel titular de l'activitat.",
      "A l'Administració de la Generalitat (DGPEIS / Bombers) i als ajuntaments en l'àmbit de les seves competències.",
      "Únicament al Cos de Mossos d'Esquadra en col·laboració amb la Inspecció de Treball.",
      "Als col·legis professionals d'arquitectes sense intervenció de cap ens públic."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): La Llei 3/2010 atribueix les competències de control preventiu i inspecció en matèria d'incendis a la Generalitat (DGPEIS) i als ens locals/ajuntaments, amb el suport d'entitats col·laboradores (ECA) quan s'escaigui."
  },
  {
    id: 'pi-22',
    topic: 6,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "Segons el Decret 30/2015 sobre Plans d'Autoprotecció (PAU) a Catalunya, quin nivell d'interès per a la protecció civil correspon a les activitats de l'Annex I.A?",
    options: [
      "Activitats d'interès local exclusiu, sense obligació de registre a la plataforma Hermes.",
      "Activitats i centres d'interès per a la protecció civil de Catalunya, homologats per la Generalitat.",
      "Activitats d'interès sectorial privat, exemptes de realitzar simulacres anuals.",
      "Instal·lacions provisionals de durada inferior a 24 hores sense afectació exterior."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): El Decret 30/2015 classifica les activitats en Annex I.A (interès per a la protecció civil de Catalunya), Annex I.B (interès per a la protecció civil local) i Annex I.C (específiques d'interès per a l'àmbit de protecció civil)."
  },
  {
    id: 'pi-23',
    topic: 24,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "En un accident de trànsit greu amb múltiples víctimes (IMV), quin criteri de coordinació entre Bombers i SEM ha de prioritzar el sergent cap de la intervenció?",
    options: [
      "Extreure totes les víctimes immediatament sense esperar el triatge ni l'estabilització mèdica.",
      "Garantir la seguretat de l'escenari, fer el triatge bàsic inicial si arriba abans i coordinar l'ordre d'extracció amb el SEM.",
      "Delegar tota l'estabilització dels vehicles bolcats al personal sanitari del SEM.",
      "Tallar la carretera només en un sentit per facilitar la circulació dels vehicles privats."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): En un IMV, el comandament de Bombers assegura la zona, estabilitza els vehicles, realitza el primer triatge si el SEM encara no hi és i acorda amb el comandament sanitari la prioritat i tècnica d'extracció."
  },
  {
    id: 'pi-24',
    topic: 20,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "Davant d'un col·lapse estructural parcial d'un edifici de formigó armat amb persones atrapades sota runes, quina és la seqüència operativa correcta en les fases d'intervenció (INSARAG / rescat urbà)?",
    options: [
      "Demolició ràpida amb maquinària pesant abans de fer cap recerca acústica o canina.",
      "Avaluació i assegurament d'escenari, recerca superficial/tècnica, accés segur amb apuntalament i extracció.",
      "Inundació dels buits interiors amb aigua per refredar la pols en suspensió abans d'entrar.",
      "Retirada lliure de tots els pilars danyats sense instal·lar testimonis ni puntals de seguretat."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): La metodologia USAR segueix les fases: 1) Avaluació i seguretat/assegurament, 2) Recerca i localització, 3) Accés i apuntalament progressiu, 4) Estabilització sanitària i extracció."
  },
  {
    id: 'pi-25',
    topic: 13,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "En un abastament d'aigua a llarga distància mitjançant dues autobombes connectades en sèrie (relleu), quin paràmetre hidràulic s'incrementa per vèncer les pèrdues de càrrega?",
    options: [
      "Es duplica el cabal màxim disponible a la sortida de la segona bomba mantenint la pressió constant.",
      "Se sumen les altures manomètriques (pressions) mentre el cabal es manté igual al d'una sola bomba.",
      "Es redueix a la meitat el diàmetre necessari de les mànegues de succió entre els dos vehicles.",
      "S'anul·la l'efecte de la cota geodèsica negativa al llarg de tota la línia d'impulsió."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): En bombament en sèrie (relleu), el cabal que circula és el mateix, però les pressions (altures manomètriques) se sumen, permetent superar grans distàncies o desnivells."
  },
  {
    id: 'pi-26',
    topic: 2,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "En la gestió de conflictes dins d'una guàrdia de parc, quin estil de lideratge situacional resulta més adequat davant d'una dotació altament competent però temporalment desmotivada?",
    options: [
      "Lideratge directiu rígid, donant instruccions detallades pas a pas i sense escoltar opinions.",
      "Lideratge participatiu o de suport, fomentant la implicació, l'escolta activa i la presa de decisions compartida.",
      "Lideratge passiu (laissez-faire), evitant qualsevol reunió o seguiment del servei diari.",
      "Aplicació immediata d'un expedient disciplinari col·lectiu com a primera mesura preventiva."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): Segons el model de lideratge situacional (Hersey i Blanchard), quan els membres tenen alta competència tècnica però baixa motivació/compromís, l'estil òptim és el participatiu/de suport."
  },
  {
    id: 'pi-27',
    topic: 23,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "En un incendi en un túnel carreter bidireccional amb trànsit atrapat, quina decisió tàctica és prioritària respecte al sistema de ventilació mecànica del túnel en la fase d'evacuació?",
    options: [
      "Incrementar al màxim la velocitat longitudinal per arrossegar tot el fum cap als vehicles aturats.",
      "Mantenir el control del flux d'aire (estratificació o extracció localitzada) per preservar rutes d'evacuació netes.",
      "Invertir contínuament el sentit dels ventiladors cada 30 segons per barrejar el fum tèrmic.",
      "Aturar tots els sistemes d'il·luminació d'emergència per evitar l'enlluernament dels conductors."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): Durant la fase d'autoevacuació en túnels, s'eviten velocitats d'aire excessives que trenquin l'estratificació del fum sobre les persones; un cop evacuat, es pot aplicar ventilació longitudinal cap al sector sense trànsit."
  },
  {
    id: 'pi-28',
    topic: 8,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "Quan s'ataca un incendi de combustible líquid polar (com acetona o alcohol etílic) amb escuma, per què falla una escuma AFFF convencional no antialcohol?",
    options: [
      "Perquè l'alcohol solidifica instantàniament els tensioactius fluorats abans de sortir per la llança.",
      "Perquè els solvents polars són miscibles en aigua i destrueixen la pel·lícula d'escuma en absorbir-ne l'aigua.",
      "Perquè el punt d'inflamació de l'alcohol és superior als 350 °C i bull el concentrador.",
      "Perquè l'escuma AFFF convencional només funciona amb aigua de mar i mai amb aigua dolça."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): Els líquids polars (miscibles amb l'aigua) trenquen la manta d'escuma convencional en dissoldre-hi l'aigua; cal emprar escumes antialcohol (AR-AFFF o F3-AR) que formen una membrana polimèrica protectora."
  },
  {
    id: 'pi-29',
    topic: 14,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "En la cartografia operativa dels Bombers de la Generalitat (quadrícula UTM 31T), què indica una referència completa de 10 dígits (5 X + 5 Y)?",
    options: [
      "Una precisió de localització d'un quadrat de 10 quilòmetres de costat sobre el territori.",
      "Una precisió de localització d'1 metre quadrat dins del fus UTM corresponent.",
      "La cota altimètrica exacta sobre el nivell mitjà del mar expressada en decímetres.",
      "El rumb magnètic corregit per declinació entre dos parcs de bombers comarcals."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): En coordenades UTM, 2+2 dígits donen precisió de 10 km, 3+3 d'1 km, 4+4 de 100 m, i 5+5 dígits (10 dígits en total) indiquen una precisió d'1 metre."
  },
  {
    id: 'pi-30',
    topic: 28,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sergent',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sergent)",
    question: "En un incident ferroviari amb catenària electrificada de 25.000 V en corrent altern (alta velocitat), quina garantia és indispensable abans que les dotacions operin a menys de la distància de seguretat?",
    options: [
      "Comprovar visualment que no hi ha espurnes visibles i tocar els cables amb un perxa de fusta seca.",
      "Confirmar el tall de tensió, la verificació d'absència de tensió i la posada a terra per part d'ADIF/operador.",
      "Aplicar aigua polvoritzada a baixa pressió sobre la catenària per descarregar l'electricitat estàtica.",
      "Connectar una presa de terra improvisada des del vehicle autobomba fins a les vies fèrries."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sergent): En catenària ferroviària (3.000 V CC o 25.000 V CA) cal seguir les 5 regles d'or: tall efectiu, bloqueig, verificació d'absència de tensió, posada a terra i en curtcircuit pel tècnic ferroviari abans d'entrar a zona de risc."
  },

  // =========================================================================
  // OFICIAL (15 preguntes)
  // =========================================================================
  {
    id: 'pi-31',
    topic: 7,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "Dins de l'estructura operativa dels Bombers de la Generalitat, quin rol assumeix habitualment l'oficial de guàrdia en una Regió d'Emergències davant d'un sinistre rellevant?",
    options: [
      "La conducció del vehicle lleuger de logística i el repartiment de ràdios portàtils.",
      "La direcció del Lloc de Comandament Avançat (CCA/PMA) i la coordinació estratègica dels sectors.",
      "La redacció exclusiva de les actes d'infracció urbanística per als ajuntaments.",
      "El relleu directe dels conductors de les autoescales en totes les guàrdies nocturnes."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): L'oficial (escala tècnica superior) actua com a cap de guàrdia regional o director d'operacions al PMA/CCA en emergències complexes amb múltiples parcs i agències."
  },
  {
    id: 'pi-32',
    topic: 6,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "Segons la Llei 4/1997 de protecció civil de Catalunya, quin òrgan integra i coordina sobre el terreny tots els grups d'acció (Bombers, Mossos, SEM, etc.) sota una direcció única?",
    options: [
      "El Comitè Tècnic d'Avaluació Pressupostària del Departament d'Economia.",
      "El Centre de Comandament Avançat (CCA), dependent del director del pla de protecció civil.",
      "La Comissió de Règim Disciplinari de l'Institut de Seguretat Pública de Catalunya.",
      "La Junta Local d'Inspecció Industrial de cada comarca afectada."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): El CCA (Centre de Comandament Avançat) és l'òrgan operatiu sobre el terreny on es coordinen els comandaments dels diferents grups d'acció (intervenció, seguretat, sanitari, logístic)."
  },
  {
    id: 'pi-33',
    topic: 15,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "Segons el Codi Tècnic de l'Edificació (CTE DB-SI), què indica la classificació EI-120 d'un element constructiu sectoritzador?",
    options: [
      "Capacitat portant (R) durant 120 minuts encara que traspassin flames per les juntes.",
      "Integritat al pas de flames i gasos calents (E) i aïllament tèrmic (I) durant 120 minuts.",
      "Estanquitat exclusivament al fum fred (S) durant 120 segons en assaig de laboratori.",
      "Reacció al foc del material de revestiment sense contribució al desenvolupament durant 120 hores."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): En resistència al foc (UNE-EN 13501-2), R = capacitat portant, E = integritat (pas de flames/gasos), I = aïllament tèrmic; EI-120 garanteix integritat i aïllament durant 120 minuts."
  },
  {
    id: 'pi-34',
    topic: 25,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "En la planificació estratègica d'un Gran Incendi Forestal (GIF) amb múltiples sectors, quina és la funció principal de la Unitat Tècnica de Suport (GRAF) dins de l'estructura de comandament?",
    options: [
      "Substituir la Sala Central en l'atenció de totes les trucades telefòniques del 112.",
      "Analitzar el comportament del foc, definir àrees d'oportunitat i executar maniobres amb foc tècnic.",
      "Gestionar exclusivament l'avituallament alimentari dels voluntaris d'ADF fora del perímetre.",
      "Realitzar el manteniment mecànic de primer esglaó dels helicòpters bombarders a la base."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): El GRAF (Grup de Recolzament d'Actuacions Forestals) aporta anàlisi predictiva del comportament del foc, planificació tàctica d'oportunitats i execució de cremes d'eixamplament o contrafocs."
  },
  {
    id: 'pi-35',
    topic: 27,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "En una emergència en una indústria química afectada pel Reial Decret 840/2015 (normativa Seveso III), quin pla extern s'activa quan l'accident pot tenir repercussions fora dels límits de l'establiment?",
    options: [
      "El Pla d'Emergència Interior (PEI) redactat exclusivament per la brigada privada de la planta.",
      "El Pla d'Emergència Exterior del sector químic (PLASEQCAT / PEE) sota direcció de Protecció Civil.",
      "El Pla Especial d'Inundacions de Catalunya (INUNCAT) en fase de prealerta.",
      "El Reglament de Seguretat contra Incendis en Establiments Industrials (RSCIEI) sense intervenció pública."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): Els establiments Seveso de nivell superior disposen de PEI (intern) i PEE (Pla d'Emergència Exterior, com el PLASEQCAT/PLASEQTA a Catalunya), que coordina la resposta pública exterior."
  },
  {
    id: 'pi-36',
    topic: 23,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "En un incendi en un edifici de gran alçada (EGA, alçada d'evacuació > 28 m), quin principi de sectorització i atac interior ha d'establir l'oficial per organitzar el desplegament?",
    options: [
      "Pujar sempre amb l'ascensor convencional directament fins a la planta incendiada per estalviar temps.",
      "Establir la base d'operacions dues plantes per sota de la planta incendiada i utilitzar la columna seca o BIE.",
      "Ventilar totes les plantes inferiors obrint simultàniament les portes dels vestíbuls d'independència.",
      "Atacar el foc únicament des de l'exterior amb autoescala encara que la planta superi els 45 metres."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): En EGA es fixa una base d'operacions (staging) 2 plantes per sota del foc, s'empra l'ascensor d'emergència (si n'hi ha i és segur) o escala protegida, i s'alimenta la columna seca."
  },
  {
    id: 'pi-37',
    topic: 3,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "Segons la Llei 31/1995 de Prevenció de Riscos Laborals, en quina situació un comandament té l'obligació legal d'ordenar la paralització immediata d'una tasca o retirada del personal?",
    options: [
      "Només quan ho sol·liciti per escrit un sindicat amb representació a la mesa sectorial.",
      "Quan existeixi un risc greu i imminent per a la seguretat i la salut dels efectius.",
      "Únicament si la temperatura ambiental exterior supera els 35 °C en serveis programats.",
      "Quan la intervenció s'allargui més de 4 hores sense que hagi arribat el relleu logístic."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): L'art. 21 de la Llei 31/1995 obliga a informar i adoptar les mesures perquè els treballadors puguin interrompre l'activitat i abandonar el lloc de treball en cas de risc greu i imminent."
  },
  {
    id: 'pi-38',
    topic: 12,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "Segons el Reglament de Seguretat contra Incendis en Establiments Industrials (RSCIEI), quins paràmetres determinen el nivell de risc intrínsec (baix, mitjà o alt) d'un sector industrial?",
    options: [
      "El nombre de treballadors en torn de nit i la distància fins a la carretera nacional més propera.",
      "La càrrega de foc ponderada i corregida (Qs) en MJ/m² o Mcal/m² i el tipus d'edifici (A, B, C, D, E).",
      "L'antiguitat de la llicència municipal d'obertura i la potència contractada en baixa tensió.",
      "El volum total d'aigua emmagatzemada als dipòsits municipals del polígon industrial."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): El nivell de risc intrínsec del RSCIEI es calcula a partir de la densitat de càrrega de foc ponderada i corregida (Qs), classificant els sectors en risc baix (1, 2), mitjà (3, 4, 5) o alt (6, 7, 8)."
  },
  {
    id: 'pi-39',
    topic: 21,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "En una gran inundació urbana amb múltiples avisos simultanis a una comarca, quin criteri de gestió de recursos ha d'aplicar l'oficial des de la sala o el CCA?",
    options: [
      "Enviar totes les dotacions disponibles al primer avís rebut per ordre cronològic estricte.",
      "Prioritzar el salvament de persones en risc vital, agrupar avisos per zones i protegir infraestructures crítiques.",
      "Esperar que baixi completament el nivell de l'aigua abans de mobilitzar cap unitat de rescat aquàtic.",
      "Destinar les autobombes rurals pesants a esgotar garatges particulars abans d'atendre vehicles atrapats."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): En episodis de simultaneïtat d'avisos (ventades, aiguats), cal triatge d'avisos: 1) risc vital immediat, 2) infraestructures crítiques/risc col·lectiu, 3) danys materials menors."
  },
  {
    id: 'pi-40',
    topic: 1,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "D'acord amb la Llei 26/2010 de règim jurídic i de procediment de les administracions públiques de Catalunya, quin principi regeix la delegació de competències entre òrgans administratius?",
    options: [
      "Es pot delegar lliurement la potestat reglamentària i la resolució de recursos contra actes propis.",
      "La delegació s'ha de publicar al DOGC i les resolucions dictades es consideren dictades per l'òrgan delegant.",
      "Un cop delegada una competència, l'òrgan delegant perd definitivament la facultat d'avocació.",
      "La delegació només té validesa verbal i no requereix cap constància en l'acte administratiu."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): Les delegacions de competències s'han de publicar oficialment, s'han d'indicar en les resolucions (que s'entenen dictades per l'òrgan delegant) i són revocables en qualsevol moment."
  },
  {
    id: 'pi-41',
    topic: 23,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "En un incendi d'una nau industrial amb coberta tipus sandvitx de poliuretà i encavallades metàl·liques, quan s'ha de passar d'una tàctica ofensiva interior a una tàctica defensiva exterior?",
    options: [
      "Només quan s'hagi esgotat totalment el combustible sòlid de l'interior de la nau.",
      "Quan hi ha risc imminent de col·lapse estructural, propagació sense control o absència de vides a salvar.",
      "Abans de realitzar qualsevol valoració de riscos sempre que la nau superi els 500 m².",
      "Únicament si el propietari de la nau autoritza per escrit el canvi d'estratègia ofensiva."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): La regla de decisió operativa imposa passar a tàctica defensiva (protegir propagació a naus veïnes i atacar des de fora) quan el risc estructural supera el benefici possible (sense vides salvables a l'interior)."
  },
  {
    id: 'pi-42',
    topic: 19,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "En una operació conjunta de rescat de muntanya amb helicòpter del GRAE i unitats terrestres, quin protocol de seguretat regeix l'aproximació de personal a l'aeronau?",
    options: [
      "Aproximar-se sempre per la cua aprofitant l'ombra del rotor principal fins rebre senyal acústic.",
      "Aproximar-se pel sector frontal dins del camp visual del pilot, en terreny pla o costa avall i amb autorització.",
      "Mantenir les eines llargues aixecades verticalment per millorar la visibilitat del grup des de l'aire.",
      "Entrar a la zona d'aterratge abans que el rotor de cua hagi estabilitzat el règim de gir."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): L'aproximació a un helicòpter es fa sempre pel sector frontal (dins el camp visual del pilot), en cota igual o inferior (mai des de dalt del pendent), amb objectes subjectats i sota senyal del tripulant/pilot."
  },
  {
    id: 'pi-43',
    topic: 6,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "Segons el Pla especial d'emergències per incendis forestals de Catalunya (INFOCAT), quin nivell de situació s'activa quan l'incendi requereix recursos extraordinaris o afecta greument la població i infraestructures?",
    options: [
      "Fase de Prealerta del Pla territorial PROCICAT de caràcter estrictament preventiu.",
      "Fase d'Emergència (nivells 1 o 2), amb constitució del CECOPI o direcció superior segons gravetat.",
      "Fase de Normalitat operativa amb gestió exclusiva dels ajuntaments sense suport de la Generalitat.",
      "Fase de Desescalada tècnica un cop finalitzada la campanya forestal d'estiu."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): El pla INFOCAT preveu fases de Prealerta, Alerta i Emergència (nivells 1 i 2 en funció de la gravetat, simultaneïtat, afectació a població/béns i necessitat de mitjans extraordinaris)."
  },
  {
    id: 'pi-44',
    topic: 27,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "En una intervenció amb risc radiològic (font càpsula tipus Ir-192 extraviada en obra), quina tríada bàsica de protecció radiològica aplica el comandament per als equips d'intervenció?",
    options: [
      "Pressió, temperatura i humitat relativa dins del vestit d'intervenció estructural.",
      "Temps (minimitzar exposició), Distància (maximitzar-la) i Blindatge (interposar materials densos).",
      "Ventilació forçada, dilució amb aigua polvoritzada i neutralització química amb bicarbonat.",
      "Confinament hermètic sense dosímetres i entrada simultània de tots els efectius disponibles."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): Els tres principis fonamentals de protecció radiològica externa són Temps (reduir durada), Distància (llei de l'invers del quadrat) i Blindatge (plom, formigó, aigua segons tipus de radiació), juntament amb dosimetria."
  },
  {
    id: 'pi-45',
    topic: 7,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Oficial',
    extensionLabel: "Material d'ampliació · Promoció Interna (Oficial)",
    question: "Quin document operatiu elabora el comandament en una emergència de llarga durada per al relleu de torns dins el Sistema de Comandament d'Incidents (SCI)?",
    options: [
      "El butlletí meteorològic setmanal del Servei Meteorològic de Catalunya sense objectius tàctics.",
      "El Pla d'Acció de l'Incident (PAI / IAP) per al període operatiu següent.",
      "L'inventari comptable anual d'amortització dels vehicles de la Regió d'Emergències.",
      "El certificat final d'habitabilitat dels edificis situats fora del perímetre de seguretat."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Oficial): El Pla d'Acció de l'Incident (PAI) recull els objectius estratègics i tàctics, l'organització, les assignacions de recursos, el pla de comunicacions i el pla de seguretat per a cada període operatiu."
  },

  // =========================================================================
  // SOTSINSPECTOR (10 preguntes)
  // =========================================================================
  {
    id: 'pi-46',
    topic: 6,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sotsinspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sotsinspector)",
    question: "Segons la Llei 5/1994, a quina escala pertany la categoria de sotsinspector del Cos de Bombers de la Generalitat i quin grup de classificació funcionarial li correspon habitualment?",
    options: [
      "Escala tècnica, subgrup C1, amb funcions exclusives de conducció de vehicles pesants.",
      "Escala executiva, subgrup A2, amb funcions de coordinació i comandament operatiu i tècnic superior.",
      "Escala bàsica, subgrup C2, amb dependència orgànica directa de cada caporal de parc.",
      "Escala de suport logístic, personal laboral temporal sense condició d'agent de l'autoritat."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sotsinspector): La categoria de sotsinspector integra l'escala executiva (grup A2), amb responsabilitats de cap de guàrdia, direcció regional o unitats especialitzades."
  },
  {
    id: 'pi-47',
    topic: 7,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Sotsinspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sotsinspector)",
    question: "Dins de l'estructura de la Direcció General de Prevenció, Extinció d'Incendis i Salvaments (DGPEIS), com s'articula territorialment el Cos de Bombers de la Generalitat?",
    options: [
      "En 4 províncies autònomes sense coordinació central ni sala conjunta de control.",
      "En Regions d'Emergències (RE), cadascuna amb les seves Àrees Regionals d'Operacions i parcs.",
      "En 42 consells comarcals independents que gestionen cadascun la seva pròpia escala jeràrquica.",
      "En una única regió centralitzada sense unitats operatives permanents fora de l'àrea metropolitana."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sotsinspector): La DGPEIS s'organitza territorialment en Regions d'Emergències (Metropolitana Nord, Sud, Centre, Girona, Tarragona, Terres de l'Ebre, Lleida), sota la coordinació de la Subdirecció General Operativa."
  },
  {
    id: 'pi-48',
    topic: 6,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Sotsinspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sotsinspector)",
    question: "En l'activació d'un pla especial de protecció civil de Catalunya (com PLASEQCAT, INFOCAT o NEUCAT), quina diferència existeix entre el CECAT i el CCA?",
    options: [
      "El CECAT és l'equip mèdic avançat sobre el terreny i el CCA és el gabinet de premsa del Govern.",
      "El CECAT és el Centre de Coordinació Operativa de Catalunya (nivell estratègic/direcció del pla) i el CCA és sobre el terreny.",
      "El CECAT actua només en incendis urbans menors i el CCA gestiona exclusivament les trucades del 061.",
      "Tots dos termes designen exactament el mateix vehicle de comandament mòbil estacionat al parc central."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sotsinspector): El CECAT (Centre de Coordinació Operativa de Catalunya) és la sala de coordinació superior de Protecció Civil (on es constitueix el Consell Assessor/Comitè de Direcció); el CCA coordina les operacions in situ."
  },
  {
    id: 'pi-49',
    topic: 2,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sotsinspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sotsinspector)",
    question: "D'acord amb el Decret Legislatiu 1/1997 de Funció Pública de Catalunya i l'EBEP, quina garantia processal és imprescindible abans d'imposar una sanció per falta greu o molt greu a un membre del cos?",
    options: [
      "L'aprovació prèvia per unanimitat de tots els bombers de la mateixa guàrdia en assemblea.",
      "La incoació i instrucció d'un expedient disciplinari contradictori amb audiència a la persona interessada.",
      "La publicació immediata de la proposta de sanció al tauler públic del parc abans d'escoltar l'afectat.",
      "La ratificació judicial prèvia del jutjat contenciós administratiu abans d'iniciar l'expedient."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sotsinspector): L'art. 98 del TREBEP i la normativa de funció pública exigeixen expedient disciplinari prèviament instruït amb separació d'instructor i òrgan sancionador, plec de càrrecs i tràmit d'audiència."
  },
  {
    id: 'pi-50',
    topic: 25,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Sotsinspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sotsinspector)",
    question: "En la gestió d'una campanya forestal amb simultaneïtat extrema de grans incendis (escenari d'esgotament de recursos), quin criteri estratègic aplica el cap de guàrdia regional o sotsinspector?",
    options: [
      "Mantenir totes les dotacions en incendis agrícoles menors fins a rematar cada tronc cremat.",
      "Prioritzar el triatge estratègic d'incendis segons potencial de creixement, risc sobre població i oportunitat d'extinció.",
      "Desactivar les sales de control regionals per concentrar tots els vehicles als parcs d'origen.",
      "Prohibir l'ús de mitjans aeris en incendis de interfície urbana-forestal per prioritzar zones deshabitades."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sotsinspector): En escenaris de simultaneïtat crítica, la direcció operativa aplica triatge d'incendis (anàlisi del potencial, vulnerabilitat de nuclis poblats/infraestructures i finestra d'oportunitat) per assignar els recursos escassos."
  },
  {
    id: 'pi-51',
    topic: 1,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sotsinspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sotsinspector)",
    question: "Segons la Llei 9/2017 de Contractes del Sector Públic, quin principi fonamental ha de garantir un comandament tècnic quan redacta plecs de prescripcions tècniques per adquirir equipament d'extinció?",
    options: [
      "Designar una marca comercial concreta sense admetre equivalents per agilitzar el lliurament.",
      "Definir requisits funcionals o normatius objectius garantint la igualtat, transparència i lliure concurrència.",
      "Fraccionar l'import total d'una flota de vehicles en múltiples contractes menors per evitar publicitat.",
      "Excloure les empreses europees que no tinguin fàbrica física dins la mateixa regió d'emergències."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sotsinspector): La LCSP prohibeix referències a marques/patents concretes (llevat d'excepcions justificades amb 'o equivalent') i prohíbeix el fraccionament fraudulós, garantint concurrència i objectivitat."
  },
  {
    id: 'pi-52',
    topic: 27,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Sotsinspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sotsinspector)",
    question: "En un accident greu en un túnel ferroviari transfronterer o de gran longitud amb víctimes i incendi, quina estructura de coordinació interinstitucional s'activa al CCA?",
    options: [
      "Comandament únic exclusiu del gestor ferroviari sense presència de cossos operatius d'emergència.",
      "Comandament integrat amb direcció operativa de l'emergència, tècnics del gestor d'infraestructura, SEM i cossos policials.",
      "Separació física total entre Bombers i SEM en municipis diferents per evitar interferències radiofòniques.",
      "Suspensió del pla d'emergència del túnel fins a la constitució d'una comissió parlamentària."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sotsinspector): Les grans infraestructures soterrades requereixen integració al CCA dels comandaments de Bombers, SEM, policia i tècnics de l'operador/gestor (ventilació, tall de tensió, combois de rescat)."
  },
  {
    id: 'pi-53',
    topic: 3,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Sotsinspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sotsinspector)",
    question: "En la investigació interna d'un accident laboral greu sofert per un bomber durant una intervenció, quin és l'objectiu principal de l'informe tècnic de prevenció de riscos?",
    options: [
      "Determinar automàticament una sanció econòmica per al bomber accidentat sense analitzar l'entorn.",
      "Identificar les causes immediates i bàsiques (organitzatives, tècniques i humanes) per evitar-ne la repetició.",
      "Arxivar l'incident sense comunicar-lo al Comitè de Seguretat i Salut si no hi ha danys materials.",
      "Substituir l'avaluació mèdica de la mútua d'accidents per una declaració verbal del cap de parc."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sotsinspector): La investigació d'accidents laborals (art. 16.3 LPRL) busca determinar les causes arrel i corregir fallades de procediment, equipament o formació per prevenir futurs sinistres."
  },
  {
    id: 'pi-54',
    topic: 12,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Sotsinspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sotsinspector)",
    question: "D'acord amb la Llei 3/2010, en un procediment d'intervenció administrativa preventiva d'un establiment d'alt risc (Annex I), quin efecte té l'informe desfavorable dels Bombers de la Generalitat?",
    options: [
      "És merament orientatiu i l'ajuntament pot atorgar la llicència d'obertura sense esmenar les deficiències.",
      "És preceptiu i vinculant pel que fa a les condicions de seguretat contra incendis per a l'atorgament del permís.",
      "Només afecta l'assegurança privada de responsabilitat civil però no impedeix l'inici de l'activitat.",
      "Caduca automàticament als 15 dies si no es repeteix una segona inspecció presencial."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sotsinspector): Segons la Llei 3/2010, els informes de control preventiu en matèria d'incendis emesos per l'òrgan competent són preceptius i vinculants per a l'administració atorgant de la llicència."
  },
  {
    id: 'pi-55',
    topic: 23,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Sotsinspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Sotsinspector)",
    question: "En la gestió logística d'un gran incendi industrial de més de 24 hores de durada, quins quatre àmbits principals integren les Seccions del Sistema de Comandament d'Incidents (SCI) sota el Comandant de l'Incident?",
    options: [
      "Prevenció municipal, premsa digital, manteniment informàtic i contractació pública.",
      "Operacions, Planificació, Logística i Administració/Finances.",
      "Extinció urbana, rescat aquàtic, formació bàsica i inspecció sanitària.",
      "Guàrdia presencial, bombers voluntaris, protecció civil local i forces armades."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Sotsinspector): L'estructura modular del SCI s'organitza al voltant del Comandant de l'Incident (i el seu Staff de Comandament: Seguretat, Informació i Enllaç) i quatre Seccions d'Staff General: Operacions, Planificació, Logística i Administració/Finances."
  },

  // =========================================================================
  // INSPECTOR (10 preguntes)
  // =========================================================================
  {
    id: 'pi-56',
    topic: 6,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Inspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Inspector)",
    question: "Segons la Llei 5/1994, a quina escala i grup pertany la categoria d'inspector del Cos de Bombers de la Generalitat de Catalunya?",
    options: [
      "Escala executiva, grup B, dedicada exclusivament a tasques d'inspecció d'extintors portàtils.",
      "Escala superior, grup A1, corresponent al màxim nivell de direcció i comandament dins la carrera del cos.",
      "Escala tècnica superior, grup C1, subordinada directament als sotsinspectors de cada parc.",
      "Escala honorífica sense atribucions operatives ni capacitat de direcció de serveis."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Inspector): L'art. 15 de la Llei 5/1994 situa la categoria d'inspector a l'Escala Superior (grup A1), exercint càrrecs de màxima responsabilitat operativa, directiva i territorial."
  },
  {
    id: 'pi-57',
    topic: 6,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Inspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Inspector)",
    question: "En una catàstrofe o gran emergència que activa el Pla PROCICAT amb abast supraregional i sol·licitud de mitjans estatals (UME o mitjans aeris del MITECO), qui assumeix la direcció del Pla a Catalunya?",
    options: [
      "El cap del parc de bombers voluntaris més proper a l'epicentre de l'emergència.",
      "La persona titular del Departament d'Interior (o autoritat delegada prevista al pla) des del CECAT.",
      "El cap de la Unitat Militar d'Emergències, assumint automàticament el comandament civil de Catalunya.",
      "L'alcalde del municipi amb menys població afectat per la catàstrofe."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Inspector): En plans territorials i especials de Catalunya (Llei 4/1997), la direcció correspon a la persona titular del Departament competent en protecció civil (Interior), que pot integrar mitjans de suport estatals sota el marc del pla."
  },
  {
    id: 'pi-58',
    topic: 1,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Inspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Inspector)",
    question: "D'acord amb l'Estatut d'Autonomia de Catalunya (art. 132) i la distribució competencial constitucional, quina naturalesa té la competència de la Generalitat en matèria de protecció civil i prevenció i extinció d'incendis?",
    options: [
      "Competència merament executiva delegada sense potestat reglamentària ni d'organització.",
      "Competència exclusiva, sens perjudici de les competències estatals en seguretat pública i emergències d'interès nacional.",
      "Competència compartida amb els consells provincials que aproven les lleis del cos de bombers.",
      "Competència residual condicionada a l'autorització prèvia de la Unió Europea en cada sinistre."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Inspector): L'art. 132 de l'EAC atribueix a la Generalitat la competència exclusiva en matèria de protecció civil (inclosa la regulació, planificació, prevenció i extinció d'incendis), coordinada amb les competències de l'Estat en interès nacional."
  },
  {
    id: 'pi-59',
    topic: 7,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Inspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Inspector)",
    question: "En la direcció estratègica d'una crisi prolongada amb alta pressió mediàtica i afectació social, quina és la funció clau del Gabinet d'Informació / Comunicació Pública integrat al Comandament?",
    options: [
      "Ocultar qualsevol dada d'evacuació fins a 48 hores després de la resolució total de l'incident.",
      "Garantir missatges únics, contrastats, ràpids i comprensibles d'autoprotecció per a la població.",
      "Delegar les rodes de premsa oficials als operadors del 112 en temps real sense validació.",
      "Facilitar les dades mèdiques nominals de totes les víctimes ingressades als mitjans de comunicació."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Inspector): La comunicació de crisi eficaç exigeix portaveus coordinats, informació veraç i verificada pel CCA/CECAT, consells clars d'autoprotecció i respecte estricte a la privacitat de les víctimes."
  },
  {
    id: 'pi-60',
    topic: 6,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Inspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Inspector)",
    question: "Quan una emergència a Catalunya pot afectar un territori limítrof (Aragó, Comunitat Valenciana, Andorra o França), quin principi de coordinació internacional/interterritorial s'aplica?",
    options: [
      "Prohibició absoluta que qualsevol vehicle d'emergència creui la frontera administrativa en cap cas.",
      "Activació dels convenis de col·laboració transfronterera o interautonòmica i Comandament Unificat de coordinació.",
      "Suspensió de les operacions d'extinció al límit geogràfic fins a una resolució diplomàtica del Ministeri.",
      "Substitució immediata de tots els protocols tècnics catalans pels reglaments locals del municipi veí."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Inspector): En emergències transfrontereres o interautonòmiques s'apliquen els convenis bilaterals d'ajuda mútua i s'estableix coordinació mitjançant Comandament Unificat entre cossos homòlegs."
  },
  {
    id: 'pi-61',
    topic: 2,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Inspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Inspector)",
    question: "En la planificació directiva dels recursos humans del Cos de Bombers, què garanteix l'elaboració d'una Relació de Llocs de Treball (RLT) actualitzada?",
    options: [
      "La possibilitat d'assignar retribucions arbitràries sense previsió pressupostària anual.",
      "L'ordenació objectiva de llocs, requisits d'accés, nivells de complement de destinació i específic.",
      "L'eliminació automàtica de les proves físiques i mèdiques en totes les convocatòries futures.",
      "La conversió de tots els llocs directius en contractes mercantils de durada mensual."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Inspector): La RLT (art. 74 TREBEP i DL 1/1997) és l'instrument tècnic d'ordenació del personal que fixa denominació, grup, forma de provisió, requisits i complements de cada lloc."
  },
  {
    id: 'pi-62',
    topic: 12,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Inspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Inspector)",
    question: "Dins de les polítiques de prevenció estratègica de la DGPEIS, quin objectiu persegueixen les actuacions basades en l'enginyeria de seguretat contra incendis (prestacions) respecte als mètodes prescriptius tradicionals?",
    options: [
      "Eliminar la necessitat de sortides d'evacuació i sistemes de detecció en edificis singulars.",
      "Justificar mitjançant modelatge (CFD, evacuació) un nivell de seguretat equivalent o superior en edificis singulars.",
      "Reduir a zero el gruix de tot l'aïllament estructural sense cap càlcul de càrrega tèrmica.",
      "Substituir les inspeccions periòdiques dels serveis de bombers per autoavaluacions telefòniques."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Inspector): El disseny basat en prestacions (Performance-Based Design) utilitza simulacions CFD de fums/incendi i d'evacuació per demostrar que edificis singulars (grans túnels, centres comercials, EGA) assoleixen els objectius de seguretat del CTE/Llei 3/2010."
  },
  {
    id: 'pi-63',
    topic: 25,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Inspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Inspector)",
    question: "En la planificació estratègica a llarg termini contra els grans incendis forestals (GIF de 6a generació), quina mesura estructural sobre el paisatge complementa la capacitat operativa d'extinció?",
    options: [
      "Incrementar exclusivament la potència de les bombes centrífugues sense gestionar la massa forestal.",
      "La gestió forestal preventiva (àrees de baixa càrrega, pastures, mosaics agroforestals i cremes prescrites).",
      "La prohibició total de qualsevol aprofitament silvícola o neteja de sotabosc a tot el país.",
      "L'eliminació de tots els punts d'aigua forestals per evitar l'evaporació durant l'estiu."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Inspector): Els incendis de 6a generació superen qualsevol capacitat d'extinció directa; per això la direcció estratègica combina la capacitat operativa amb la gestió del paisatge (Zones d'Actuació Prioritària, mosaics i cremes prescrites)."
  },
  {
    id: 'pi-64',
    topic: 1,
    difficulty: 'Difícil',
    isExtension: true,
    extensionRank: 'Inspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Inspector)",
    question: "En l'execució del pressupost públic de la Generalitat per part d'un centre directiu, quina seqüència comptable és obligatòria abans del pagament efectiu d'una despesa d'inversió?",
    options: [
      "Pagament directe per caixa fixa, justificació posterior anual i aprovació final per l'interventor.",
      "Autorització de la despesa (A), Disposició o compromís (D), Reconeixement de l'obligació (O) i Ordenació del pagament (P).",
      "Reconeixement del deute abans de l'existència de crèdit pressupostari i licitació ulterior.",
      "Transferència directa al proveïdor en el moment de publicar l'anunci de licitació al perfil del contractant."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Inspector): El procediment d'execució de la despesa pública segueix les fases ADOP: Autorització (A), Disposició/Compromís (D), Reconeixement de l'obligació (O) i Proposta/Ordenació de pagament (P)."
  },
  {
    id: 'pi-65',
    topic: 7,
    difficulty: 'Molt Difícil',
    isExtension: true,
    extensionRank: 'Inspector',
    extensionLabel: "Material d'ampliació · Promoció Interna (Inspector)",
    question: "En l'avaluació postincident (debriefing / lliçons apreses) d'una gran emergència dirigida per un inspector, quin enfocament metodològic maximitza la millora organitzativa del cos?",
    options: [
      "Cercar exclusivament culpables individuals entre el personal operatiu per tancar l'informe ràpidament.",
      "Analitzar de manera constructiva comunicacions, presa de decisions, procediments i coordinació per actualitzar protocols.",
      "Limitar la revisió únicament al consum de combustible dels vehicles lleugers sense revisar la tàctica.",
      "Impedir la participació dels comandaments intermedis que van dirigir els sectors sobre el terreny."
    ],
    correctIndex: 1,
    explanation: "Material d'ampliació (Inspector): La cultura de seguretat i millora contínua (After-Action Review / debriefing tècnic) reuneix els comandaments implicats per avaluar objectivament encerts, colls d'ampolla i actualitzar els procediments operatius."
  },

  // =========================================================================
  // PREGUNTES OFICIALS DE CONVOCATÒRIES (PROMOCIÓ INTERNA I BÀSICA) (25 preguntes)
  // =========================================================================
  {
    id: 'pi-66',
    topic: 7,
    difficulty: 'Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Caporal',
    officialSource: 'Examen Oficial Promoció Interna · Caporal',
    extensionLabel: "Material d'ampliació · Oficial Caporal (SISCOM)",
    question: "Dins del Sistema de Comandament (SISCOM) dels Bombers de la Generalitat, quina és la regla bàsica sobre l'assumpció del comandament d'un servei quan s'hi incorporen unitats de diferents categories?",
    options: [
      "El comandament recau sempre en el conductor del vehicle autobomba més antic del parc.",
      "El primer comandament en arribar assumeix el comandament inicial fins que el traspassa formalment a un superior.",
      "El comandament s'alterna cada 30 minuts entre tots els bombers de primera presents al sinistre.",
      "No existeix comandament formal fins que arriba al lloc un membre de l'escala executiva."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Caporal · SISCOM): El primer comandament (o bomber més antic/responsable de la primera dotació) assumeix el comandament inicial i només se cedeix mitjançant traspàs formal de comandament a un comandament superior."
  },
  {
    id: 'pi-67',
    topic: 6,
    difficulty: 'Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Caporal',
    officialSource: 'Examen Oficial Promoció Interna · Caporal',
    extensionLabel: "Material d'ampliació · Oficial Caporal (Llei 5/1994)",
    question: "Segons la Llei 5/1994, quina condició legal tenen els membres del Cos de Bombers de la Generalitat quan es troben en l'exercici de llurs funcions operatives?",
    options: [
      "Tenent la consideració de personal laboral eventual sense potestat d'autoritat pública.",
      "Tenen la consideració d'agents de l'autoritat pública en l'exercici de les seves funcions.",
      "Exerceixen únicament funcions consultives privades sense capacitat de restricció d'accessos.",
      "Només adquireixen la condició d'agent de l'autoritat a partir de la categoria d'inspector."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Llei 5/1994, art. 14): Els membres del Cos de Bombers de la Generalitat, en l'exercici de les seves funcions, tenen la consideració d'agents de l'autoritat."
  },
  {
    id: 'pi-68',
    topic: 6,
    difficulty: 'Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Sergent',
    officialSource: 'Examen Oficial Promoció Interna · Sergent',
    extensionLabel: "Material d'ampliació · Oficial Sergent (Decret 30/2015)",
    question: "Segons el Decret 30/2015, cada quants anys s'ha de revisar obligatòriament un Pla d'Autoprotecció (PAU) homologat per mantenir-ne la vigència, llevat de modificacions substancials prèvies?",
    options: [
      "Cada 2 anys des de la data de la seva inscripció inicial al registre municipal.",
      "Cada 4 anys com a màxim, o abans si es produeixen canvis substancials en l'activitat o l'entorn.",
      "Cada 10 anys coincidint amb la renovació de la llicència ambiental de l'establiment.",
      "Anualment mitjançant una declaració responsable sense necessitat d'actualització documental."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Sergent · Decret 30/2015, art. 11): El PAU s'ha de revisar com a màxim cada 4 anys i sempre que hi hagi modificacions substancials en les instal·lacions, activitat o riscos."
  },
  {
    id: 'pi-69',
    topic: 3,
    difficulty: 'Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Caporal',
    officialSource: 'Examen Oficial · LPRL 31/1995',
    extensionLabel: "Material d'ampliació · Oficial Caporal (LPRL)",
    question: "D'acord amb l'article 35 de la Llei 31/1995 de Prevenció de Riscos Laborals, quants delegats de prevenció corresponen a una empresa o centre amb una plantilla compresa entre 101 i 500 treballadors?",
    options: [
      "2 delegats de prevenció escollits entre la representació del personal.",
      "3 delegats de prevenció designats pels representants del personal.",
      "4 delegats de prevenció nomenats directament per la direcció tècnica.",
      "5 delegats de prevenció amb dedicació exclusiva a temps complet."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (LPRL art. 35.2): De 50 a 100 treballadors -> 2 delegats; de 101 a 500 -> 3 delegats; de 501 a 1.000 -> 4 delegats; de 1.001 a 2.000 -> 5 delegats."
  },
  {
    id: 'pi-70',
    topic: 2,
    difficulty: 'Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Sergent',
    officialSource: 'Examen Oficial · Funció Pública',
    extensionLabel: "Material d'ampliació · Oficial Sergent (Funció Pública)",
    question: "Segons el règim disciplinari dels empleats públics (TREBEP art. 97), quin és el termini de prescripció de les sancions imposades per faltes molt greus, greus i lleus, respectivament?",
    options: [
      "5 anys per a molt greus, 3 anys per a greus i 1 any per a lleus.",
      "3 anys per a molt greus, 2 anys per a greus i 1 any per a lleus.",
      "3 anys per a molt greus, 2 anys per a greus i 6 mesos per a lleus.",
      "4 anys per a molt greus, 2 anys per a greus i 6 mesos per a lleus."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (TREBEP art. 97): Les faltes prescriuen als 3 anys / 2 anys / 6 mesos, mentre que les SANCIONS imposades prescriuen als 3 anys (molt greus), 2 anys (greus) i 1 any (lleus)."
  },
  {
    id: 'pi-71',
    topic: 12,
    difficulty: 'Molt Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Oficial',
    officialSource: 'Examen Oficial Promoció Interna · Oficial (CTE DB-SI)',
    extensionLabel: "Material d'ampliació · Oficial (CTE DB-SI)",
    question: "Segons el CTE DB-SI (Secció SI-3 Evacuació d'ocupants), quina és l'amplada mínima lliure d'una porta prevista per a l'evacuació d'ocupants en edificis d'ús general?",
    options: [
      "0,70 metres mesurats entre els fulls oberts a 90 graus.",
      "0,80 metres, garantint el pas lliure sense obstacles en el recorregut d'evacuació.",
      "1,20 metres en tots els casos independentment de l'ocupació del recinte.",
      "0,60 metres quan es tracta de locals comercials de superfície inferior a 100 m²."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Oficial · CTE DB-SI 3): L'amplada mínima d'una porta d'evacuació és de 0,80 m (i la dels passadissos i escales protegides d'ús general és d'1,00 m)."
  },
  {
    id: 'pi-72',
    topic: 15,
    difficulty: 'Molt Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Oficial',
    officialSource: 'Examen Oficial Promoció Interna · Oficial (CTE DB-SI)',
    extensionLabel: "Material d'ampliació · Oficial (Reacció al Foc)",
    question: "En la classificació europea de reacció al foc dels materials de construcció (Euroclasses, EN 13501-1), què indica el paràmetre addicional 'd0' en una classificació com B-s1,d0?",
    options: [
      "Producció molt elevada de fum fosc i tòxic durant els primers 10 minuts d'assaig.",
      "Absència total de caiguda de gotes o partícules inflamades durant l'assaig.",
      "Durada de la resistència estructural del pilar durant 60 minuts sense deformació.",
      "Densitat del material aïllant superior als 100 kg/m³ en façanes ventilades."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Oficial · Euroclasses): s1/s2/s3 mesura l'opacitat del fum (s1 = baixa); d0/d1/d2 mesura les gotes/partícules inflamades (d0 = cap gota ni partícula inflamada)."
  },
  {
    id: 'pi-73',
    topic: 23,
    difficulty: 'Molt Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Sergent',
    officialSource: 'Examen Oficial Promoció Interna · Sergent',
    extensionLabel: "Material d'ampliació · Oficial Sergent (Incendis Estructurals)",
    question: "En un incendi d'interior confinat en fase de creixement per ventilació limitada, quin fenomen es caracteritza per la ignició sobtada i simultània de totes les superfícies combustibles del recinte per radiació tèrmica?",
    options: [
      "Backdraft o explosió de fums per aportació sobtada d'oxigen en un recinte hermètic.",
      "Flashover o inflamació generalitzada súbita en assolir uns 500–600 °C al sostre.",
      "Boilover per ebullició violenta de l'aigua acumulada al fons d'un tanc de petroli.",
      "Slopover per projecció superficial d'escuma sobre un hidrocarbur lleuger."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Sergent): El flashover és la transició ràpida d'un incendi localitzat a un incendi totalment desenvolupat (totes les superfícies combustibles s'inflamen quasi alhora per radiació tèrmica del matalàs de gasos)."
  },
  {
    id: 'pi-74',
    topic: 25,
    difficulty: 'Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Caporal',
    officialSource: 'Examen Oficial Promoció Interna · Caporal (Forestals)',
    extensionLabel: "Material d'ampliació · Oficial Caporal (Regla del 30)",
    question: "En l'anàlisi del comportament dels incendis forestals, quines tres condicions meteorològiques defineixen la 'regla del 30' d'alt risc de propagació extrema?",
    options: [
      "Temperatura > 30 °C, humitat relativa < 30 % i velocitat del vent > 30 km/h.",
      "Temperatura > 30 °C, humitat relativa > 30 % i pendent del terreny > 30 graus.",
      "Pressió atmosfèrica < 30 hPa, altitud > 300 m i cabal hidràulic > 30 L/min.",
      "Velocitat del vent < 30 km/h, humitat del combustible fi > 30 % i radiació solar > 30 %."
    ],
    correctIndex: 0,
    explanation: "Examen Oficial (Caporal · Forestals): La regla del 30-30-30 indica condicions crítiques de gran incendi quan T > 30 °C, HR < 30 % i Vent > 30 km/h."
  },
  {
    id: 'pi-75',
    topic: 25,
    difficulty: 'Molt Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Sergent',
    officialSource: 'Examen Oficial Promoció Interna · Sergent (Forestals)',
    extensionLabel: "Material d'ampliació · Oficial Sergent (Protocol OACEL)",
    question: "Quin significat té cadascuna de les lletres de l'acrònim de seguretat forestal OACEL utilitzat pels comandaments dels Bombers de la Generalitat?",
    options: [
      "Ordre, Atac, Control, Extinció i Liquidació del perímetre.",
      "Observació, Alerta, Comunicació, Escapament i Lloc segur.",
      "Orientació, Aproximació, Contenció, Enfriament i Logística.",
      "Operació, Ancoratge, Coordinació, Evacuació i Limitació."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Sergent · Forestals): OACEL (versió catalana de LACES) = Observació (vigilant), Alerta, Comunicació, rutes d'Escapament i Lloc segur (zona segura)."
  },
  {
    id: 'pi-76',
    topic: 27,
    difficulty: 'Molt Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Oficial',
    officialSource: 'Examen Oficial Promoció Interna · Oficial (ADR)',
    extensionLabel: "Material d'ampliació · Oficial (ADR / Risc Químic)",
    question: "En el transport de mercaderies perilloses (ADR), què indica el prefix 'X' davant el número d'identificació de perill (per exemple, X423) a la meitat superior del panell taronja?",
    options: [
      "Que la matèria només es pot transportar en cisternes criogèniques d'acer inoxidable.",
      "Que la matèria reacciona perillosament amb l'aigua i no s'hi ha d'aplicar aigua en cap cas.",
      "Que la càrrega conté material radioactiu fissible de categoria III-groga.",
      "Que el vehicle transporta residus sanitaris infecciosos de classe 6.2 en règim d'exempció."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Oficial · ADR): La lletra X precedint el codi Kemler indica reacció perillosa amb l'aigua (p. ex. X423: sòlid inflamable que desprèn gasos inflamables en contacte amb l'aigua)."
  },
  {
    id: 'pi-77',
    topic: 13,
    difficulty: 'Molt Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Caporal',
    officialSource: 'Examen Oficial · Hidràulica',
    extensionLabel: "Material d'ampliació · Oficial Caporal (Hidràulica)",
    question: "En una aspiració amb bomba centrífuga a nivell del mar (pressió atmosfèrica = 10,33 m.c.a.), per què l'alçada màxima pràctica d'aspiració d'un vehicle autobomba se situa al voltant dels 7 a 7,5 metres?",
    options: [
      "Per la força gravitatòria inversa generada pels àleps del rodet en girar a 3.000 rpm.",
      "Per les pèrdues de càrrega en el mangot, la pressió de vapor de l'aigua i el risc de cavitació.",
      "Perquè la vàlvula de peu restringeix el pas d'aigua a partir dels 500 L/min de cabal.",
      "Perquè el buit parcial del cebador només actua durant els primers 5 metres verticals."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Hidràulica): Tot i que l'alçada teòrica és 10,33 m, en restar pèrdues de càrrega del mangot/filtre, tensió de vapor i NPSH requerit per evitar cavitació, l'aspiració pràctica màxima és ~7–7,5 m."
  },
  {
    id: 'pi-78',
    topic: 8,
    difficulty: 'Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Caporal',
    officialSource: 'Examen Oficial · Teoria del Foc',
    extensionLabel: "Material d'ampliació · Oficial Caporal (Agents Extintors)",
    question: "Segons la norma UNE-EN 2, a quina classe de foc corresponen els incendis provocats per olis i greixos vegetals o animals en aparells de cuina (fregidores industrials)?",
    options: [
      "Classe B (líquids inflamables i sòlids liquables).",
      "Classe F (olis i greixos de cuina).",
      "Classe D (metalls combustibles alcalins).",
      "Classe C (gasos inflamables a pressió)."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Teoria del Foc · UNE-EN 2): La classe F correspon específicament a olis i greixos de cuina (on l'aigua provoca projecció violenta i calen agents per saponificació)."
  },
  {
    id: 'pi-79',
    topic: 24,
    difficulty: 'Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Caporal',
    officialSource: 'Examen Oficial · Rescat en Vehicles',
    extensionLabel: "Material d'ampliació · Oficial Caporal (Vehicles Elèctrics)",
    question: "En un accident de trànsit amb un vehicle elèctric o híbrid d'alta tensió, de quin color està estandarditzat el cablejat d'alta tensió (HV) per identificar-lo i evitar tallar-lo?",
    options: [
      "Blau elèctric amb bandes reflectants blanques.",
      "Taronja intens en tot el seu recorregut i connectors.",
      "Groc fluorescent exclusivament dins del maleter posterior.",
      "Verd llampant amb doble aïllament transparent."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Rescat en Vehicles): Els cables d'alta tensió (>60 V CC / >30 V CA) dels vehicles elèctrics i híbrids estan codificats universalment en color taronja."
  },
  {
    id: 'pi-80',
    topic: 19,
    difficulty: 'Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Sergent',
    officialSource: 'Examen Oficial · Rescat en Alçada',
    extensionLabel: "Material d'ampliació · Oficial Sergent (Rescat Tècnic)",
    question: "En una instal·lació de rescat en alçada amb dos ancoratges independents units mitjançant una cinta o corda en 'Y' (repartidor de càrregues), quin angle màxim entre les dues branques es recomana no superar per evitar sobrecarregar els ancoratges?",
    options: [
      "150 graus, ja que per sota d'aquest valor la càrrega es redueix a la meitat.",
      "60 graus (i mai superar els 90–120 graus, on cada ancoratge suporta ja el 100 % del pes).",
      "180 graus exactes per equilibrar horitzontalment les forces de cisallament.",
      "15 graus com a límit absolut, fins i tot en ancoratges químics sobre formigó."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Rescat): En un triangle de forces (Y), a 60° cada ancoratge suporta ~58 % de la càrrega; a 120° cada ancoratge suporta el 100 % de la càrrega; per sobre de 120° la força sobre cada punt supera el pes total."
  },
  {
    id: 'pi-81',
    topic: 7,
    difficulty: 'Molt Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Sotsinspector',
    officialSource: 'Examen Oficial Promoció Interna · Sotsinspector (D 276/2016)',
    extensionLabel: "Material d'ampliació · Oficial Sotsinspector (Guàrdies)",
    question: "Segons el Decret 276/2016 dels serveis de guàrdia dels Bombers de la Generalitat, quina és la durada ordinària d'una guàrdia operativa presencial completa de 24 hores en un parc de bombers?",
    options: [
      "De les 00.00 h a les 24.00 h amb dues hores de disponibilitat passiva sense relleu.",
      "24 hores continuades amb relleu presencial a primera hora del matí al parc assignat.",
      "12 hores diürnes presencials i 12 hores nocturnes en règim de localització domiciliària.",
      "36 hores seguides amb descans compensatori obligatori de 72 hores."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Decret 276/2016): La guàrdia ordinària del personal operatiu té una durada de 24 hores presencials continuades (de 07:00/08:00 a l'endemà segons quadrant vigent) amb relleu al lloc."
  },
  {
    id: 'pi-82',
    topic: 6,
    difficulty: 'Molt Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Sotsinspector',
    officialSource: 'Examen Oficial Promoció Interna · Sotsinspector (Llei 4/1997)',
    extensionLabel: "Material d'ampliació · Oficial Sotsinspector (Protecció Civil)",
    question: "Segons la Llei 4/1997 de Protecció Civil de Catalunya, quin organisme és l'òrgan col·legiat de coordinació, participació i consulta de les administracions públiques en matèria de protecció civil a Catalunya?",
    options: [
      "El Consell Assessor del Cos de Bombers Voluntaris de la Generalitat.",
      "La Comissió de Protecció Civil de Catalunya.",
      "La Junta de Seguretat Local dels municipis de més de 20.000 habitants.",
      "El Centre d'Atenció i Gestió de Trucades d'Urgència 112."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Llei 4/1997): La Comissió de Protecció Civil de Catalunya és l'òrgan col·legiat superior de coordinació, participació i homologació dels plans de protecció civil a Catalunya."
  },
  {
    id: 'pi-83',
    topic: 27,
    difficulty: 'Molt Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Oficial',
    officialSource: 'Examen Oficial Promoció Interna · Oficial (PLASEQCAT)',
    extensionLabel: "Material d'ampliació · Oficial (Risc Químic PLASEQCAT)",
    question: "En l'activació del pla PLASEQCAT per un núvol tòxic procedent d'una indústria química, quina és la mesura de protecció poblacional inicial més eficaç i recomanada per a la població dins la zona d'intervenció?",
    options: [
      "Evacuació massiva immediata a peu per les carreteres principals en direcció al vent.",
      "Confinament a l'interior dels edificis, tancant portes, finestres i sistemes de ventilació.",
      "Obertura de totes les finestres de les plantes altes per dispersar els gasos pesants.",
      "Desplaçament en vehicle particular cap als polígons industrials limítrofs."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (PLASEQCAT): Davant d'una fuita tòxica amb núvol químic, la mesura prioritària és el confinament immediat en edificis (tancant portes, finestres i climatització) i escoltar les indicacions de Protecció Civil."
  },
  {
    id: 'pi-84',
    topic: 20,
    difficulty: 'Molt Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Sergent',
    officialSource: 'Examen Oficial Promoció Interna · Sergent (Apuntalaments)',
    extensionLabel: "Material d'ampliació · Oficial Sergent (Estructures)",
    question: "Quan s'executa un apuntalament d'emergència en un forjat de formigó afectat per un incendi o sobrepès, on s'han de recolzar sempre els puntals de la planta afectada?",
    options: [
      "Directament sobre els envans de maó buit de la planta inferior sense repartidor de càrrega.",
      "Sobre durments de repartició i transmetent la càrrega verticalment fins a solera o plantes inferiors apuntalades.",
      "Exclusivament al centre geomètric de la bigueta més fissurada sense falques d'ajust.",
      "Recolzats en diagonal contra els marcs metàl·lics de les finestres de la façana."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Sergent · Estructures): Els puntals han de treballar amb durments (repartiment de càrrega) i transmetre els esforços de forma contínua cap avall (reapuntalant plantes inferiors si el forjat inferior no suporta la càrrega)."
  },
  {
    id: 'pi-85',
    topic: 1,
    difficulty: 'Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Inspector',
    officialSource: 'Examen Oficial Promoció Interna · Inspector (EAC / CE)',
    extensionLabel: "Material d'ampliació · Oficial Inspector (Marc Constitucional)",
    question: "Segons l'article 149.1.29 de la Constitució Espanyola i la doctrina del Tribunal Constitucional, a qui correspon la competència exclusiva sobre seguretat pública sense perjudici de la creació de policies autonòmiques?",
    options: [
      "A les diputacions provincials en coordinació amb els consells comarcals.",
      "A l'Estat, sens perjudici de les competències exclusives de la Generalitat en protecció civil i prevenció d'incendis.",
      "Exclusivament als ajuntaments de més de 50.000 habitants mitjançant ordenances municipals.",
      "Al Parlament Europeu mitjançant reglaments d'aplicació directa en emergències locals."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Inspector · CE/EAC): L'art. 149.1.29 CE atribueix la seguretat pública a l'Estat, mentre que el TC ha delimitat que la protecció civil i els serveis d'extinció d'incendis són competència exclusiva autonòmica (art. 132 EAC) llevat d'emergències d'interès nacional."
  },
  {
    id: 'pi-86',
    topic: 17,
    difficulty: 'Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Caporal',
    officialSource: 'Examen Oficial · Comunicacions RESCAT',
    extensionLabel: "Material d'ampliació · Oficial Caporal (RESCAT)",
    question: "A la xarxa de radiocomunicacions d'emergències de Catalunya (xarxa RESCAT basada en estàndard TETRA), què permet el mode DMO (Direct Mode Operation)?",
    options: [
      "Transmetre dades biomèdiques encriptades per satèl·lit directament als hospitals.",
      "Comunicar terminals portàtils directament entre si quan no hi ha cobertura de repetidor (TMO), com en túnels o soterranis.",
      "Duplicar automàticament la potència d'emissió fins a 100 W en tots els walkies portàtils.",
      "Interconnectar les trucades telefòniques comercials amb el canal de comandament del CCA."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (RESCAT / TETRA): El mode DMO (Mode Directe) permet la comunicació terminal-a-terminal sense passar per la infraestructura de xarxa (TMO), essencial en soterranis, túnels o zones d'ombra."
  },
  {
    id: 'pi-87',
    topic: 21,
    difficulty: 'Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Oficial',
    officialSource: 'Examen Oficial Promoció Interna · Oficial (INUNCAT)',
    extensionLabel: "Material d'ampliació · Oficial (INUNCAT / Rescat Aquàtic)",
    question: "En una operació de rescat en aigües vives o riera desbordada (pla INUNCAT), quin principi de seguretat regeix la intervenció dels equips a prop del corrent?",
    options: [
      "Lligar una corda fixa al rescatador en perpendicular al corrent sense sistema de desbloqueig ràpid.",
      "Aplicar l'escala de risc progressiva (parlar, assolir, llançar, remar, nedar) i no ancorar mai rescatadors sense alliberament ràpid.",
      "Entrar al llit del riu amb botes d'intervenció estructural pesades i sense armilla salvavides.",
      "Creuar el corrent aigües amunt d'un obstacle submergit sense observadors aigües avall."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Oficial · Rescat Aquàtic): La regla 'Talk-Reach-Throw-Row-Go' prioritza rescatar sense entrar a l'aigua; si cal entrar, equipament específic, armilla amb alliberament ràpid (quick-release) i seguretat aigües avall."
  },
  {
    id: 'pi-88',
    topic: 14,
    difficulty: 'Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Caporal',
    officialSource: 'Examen Oficial · Cartografia',
    extensionLabel: "Material d'ampliació · Oficial Caporal (Cartografia)",
    question: "En un mapa topogràfic a escala 1:25.000 utilitzat en intervencions forestals, a quina distància real sobre el terreny equival un segment de 4 centímetres mesurat sobre el mapa?",
    options: [
      "250 metres en línia recta.",
      "1.000 metres (1 quilòmetre).",
      "2.500 metres (2,5 quilòmetres).",
      "100 metres exactes."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Cartografia): A escala 1:25.000, 1 cm = 25.000 cm = 250 m. Per tant, 4 cm × 250 m/cm = 1.000 m = 1 km."
  },
  {
    id: 'pi-89',
    topic: 28,
    difficulty: 'Molt Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Oficial',
    officialSource: 'Examen Oficial Promoció Interna · Oficial (Electricitat)',
    extensionLabel: "Material d'ampliació · Oficial (Risc Elèctric AT)",
    question: "Davant d'una línia elèctrica d'alta tensió caiguda a terra amb risc de tensió de pas, com ha de sortir de la zona de perill una persona que es trobi prop del punt de contacte?",
    options: [
      "Fent passes molt llargues i ràpides cap a l'exterior per reduir el temps d'exposició.",
      "Allunyant-se a peu junts (saltets curts o arrossegant els peus sense separar-los) fins a superar almenys 10–20 m.",
      "Estirant-se completament a terra amb els braços i les cames oberts en creu.",
      "Corrent en ziga-zaga tocant els pals metàl·lics de la tanca per descarregar el potencial."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Oficial · Risc Elèctric): Per evitar la diferència de potencial entre els dos peus (tensió de pas), cal allunyar-se amb els peus sempre junts (saltets curts o passes minúscules sense separar talons)."
  },
  {
    id: 'pi-90',
    topic: 12,
    difficulty: 'Molt Difícil',
    isExtension: true,
    isOfficialExam: true,
    extensionRank: 'Inspector',
    officialSource: 'Examen Oficial Promoció Interna · Inspector (Llei 3/2010)',
    extensionLabel: "Material d'ampliació · Oficial Inspector (Llei 3/2010)",
    question: "Segons la Llei 3/2010 de prevenció i seguretat en matèria d'incendis a Catalunya, què són les ECA (Entitats Col·laboradores de l'Administració) en matèria de prevenció d'incendis?",
    options: [
      "Agrupacions de bombers voluntaris que fan guàrdies remunerades en festes majors.",
      "Entitats tècniques acreditades que realitzen funcions de comprovació, inspecció i certificació en seguretat contra incendis.",
      "Empreses constructores encarregades de redactar els plans d'emergència exterior Seveso.",
      "Comissions municipals de festes responsables dels espectacles pirotècnics."
    ],
    correctIndex: 1,
    explanation: "Examen Oficial (Inspector · Llei 3/2010): Les ECA acreditades realitzen els controls de posada en funcionament i revisions periòdiques de les condicions de seguretat contra incendis en els supòsits previstos per la Llei 3/2010."
  }
];
