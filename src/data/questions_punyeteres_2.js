/**
 * Banc de 30 preguntes "punyeteres" d'alt nivell — Temes 18 a 34.
 * Cada pregunta inclou com a mínim dues opcions pràcticament idèntiques
 * diferenciades per un petit detall decisiu.
 */
export const QUESTIONS_PUNYETERES_2 = [
  {
    topic: 18,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T18] Respecte al sistema d\'autoprotecció de la Bomba Rural Pesant (BRP) en intervencions forestals, quina afirmació és exacta?',
    options: [
      'Disposa de ruixadors d\'autoprotecció alimentats per un dipòsit propi independent d\'uns 300 a 500 litres',
      'Disposa de ruixadors d\'autoprotecció alimentats directament per la cisterna principal de 3.000 a 3.500 litres',
      'Disposa de ruixadors d\'autoprotecció alimentats per un dipòsit propi independent de 1.000 a 1.500 litres',
      'No disposa de ruixadors d\'autoprotecció propis, ja que aquesta funció queda reservada exclusivament a la BNP'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és que els ruixadors d\'autoprotecció de la BRP s\'alimenten d\'un dipòsit propi independent (~300–500 L), i no pas de la cisterna principal d\'extinció (3.000–3.500 L) ni d\'un dipòsit de 1.000–1.500 L.'
  },
  {
    topic: 18,
    difficulty: 'Mitjà',
    question: '[PUNYETERA · T18] Segons el RD 836/2012 i la classificació de vehicles sanitaris, quina diferència funcional defineix el VIR (Vehicle d\'Intervenció Ràpida) respecte d\'una ambulància de Classe C?',
    options: [
      'El VIR porta equip mèdic i equipament de SVA, però pot traslladar un únic pacient crític en llitera en cas d\'urgència',
      'El VIR porta equip mèdic i equipament de SVA, però NO pot traslladar pacients en llitera',
      'El VIR porta equipament exclusiu de SVB (Classe B) i només actua com a unitat de transport col·lectiu',
      'El VIR porta equipament de SVA i només pot traslladar pacients en llitera sense assistència tècnica en ruta'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és que el VIR és un vehicle lleuger amb equip mèdic i equipament de SVA, però a diferència de l\'ambulància Classe C, NO pot traslladar pacients en llitera.'
  },
  {
    topic: 19,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T19] Segons el manual de conducció d\'emergència (MAN.EQIP.002 Cap. 3.2), quina és l\'excepció específica aplicable en una aproximació per temptativa d\'autòlisi?',
    options: [
      'Mantenir activats únicament els senyals lluminosos blaus (V-1) sense sirena durant tot el tram final fins a aturar el vehicle',
      'Desactivar tant la sirena com els senyals lluminosos en el tram final d\'aproximació per no incrementar l\'estrès de la víctima',
      'Mantenir activats simultàniament els senyals lluminosos (V-1) i acústics fins a 50 metres abans del punt per garantir la prioritat',
      'Desactivar només els senyals lluminosos (V-1) i mantenir tocs intermitents de sirena per alertar els vianants en el tram final'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és que en temptatives d\'autòlisi cal desactivar TANT la sirena com els senyals lluminosos en el tram final d\'aproximació (no només la sirena) per no incrementar l\'estrès de la víctima.'
  },
  {
    topic: 19,
    difficulty: 'Mitjà',
    question: '[PUNYETERA · T19] En circulació per pistes forestals complicades amb un vehicle tot terreny de Bombers, quan s\'han d\'activar la tracció 4×4, la reductora i els bloquejos de diferencial?',
    options: [
      'Un cop s\'ha entrat al tram complicat i es detecta la primera pèrdua de tracció per no forçar la transmissió abans d\'hora',
      'ABANS d\'entrar al tram complicat',
      'Únicament la tracció 4×4 abans del tram complicat, i la reductora només quan el vehicle ja hagi quedat immobilitzat',
      'Només els bloquejos de diferencial abans del tram complicat, mantenint la caixa transfer en marxes llargues (H)'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és el moment d\'activació: el 4×4, la reductora i els bloquejos s\'han d\'activar ABANS d\'entrar al tram complicat, mai quan el vehicle ja patina o ha quedat encallat.'
  },
  {
    topic: 20,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T20] Dins dels vestits de protecció química hermètics a gasos de Tipus 1 (UNE-EN 943), quina diferència exacta hi ha entre el Tipus 1a i el Tipus 1b?',
    options: [
      'El Tipus 1a porta l\'ERA a l\'interior del vestit encapsulat i el Tipus 1b porta l\'ERA a l\'exterior del vestit',
      'El Tipus 1a porta l\'ERA a l\'exterior del vestit encapsulat i el Tipus 1b porta l\'ERA a l\'interior del vestit',
      'El Tipus 1a s\'alimenta mitjançant línia d\'aire exterior i el Tipus 1b porta l\'ERA a l\'interior del vestit',
      'El Tipus 1a és hermètic a gasos amb pressió positiva i el Tipus 1b no és hermètic a gasos, sinó a raigs de líquid'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és la ubicació de l\'ERA: en el Tipus 1a l\'ERA queda protegit DINS del vestit encapsulat, mentre que en el Tipus 1b l\'ERA es porta FORA del vestit (el Tipus 1c és per línia d\'aire).'
  },
  {
    topic: 20,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T20] En un Equip Respiratori Autònom (ERA) de circuit obert conforme a la norma EN 137, a quina pressió s\'activa el xiulet acústic de reserva i quin llindar marca la balisa electrònica amb llum vermella i alarma de retirada?',
    options: [
      'El xiulet acústic s\'activa a 60 bar i la balisa electrònica entra en vermell a 55 ± 5 bar',
      'El xiulet acústic s\'activa a 55 ± 5 bar i la balisa electrònica entra en vermell a 60 bar',
      'Tant el xiulet acústic com l\'alarma vermella de la balisa electrònica s\'activen simultàniament a 75 bar (25% de reserva)',
      'El xiulet acústic s\'activa a 55 ± 5 bar i la balisa electrònica entra en vermell a 110 bar'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és no invertir els dos llindars: la balisa electrònica marca vermell + alarma de retirada als 60 bar (170 bar groc 1, 110 bar groc 2 intermitent), mentre que el xiulet acústic pneumàtic EN 137 s\'activa als 55 ± 5 bar (≥ 90 dB).'
  },
  {
    topic: 21,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T21] En el desplegament sobre el terreny d\'un pla de protecció civil a Catalunya, a qui correspon la direcció del Centre de Comandament Avançat (CCA)?',
    options: [
      'Sempre al Cap de Bombers, fins i tot quan l\'emergència deriva d\'un acte intencionat o criminal',
      'Al Cap de Bombers, excepte en actes intencionats o criminals, en què assumeix la direcció Mossos d\'Esquadra',
      'Sempre a l\'Alcalde del municipi afectat en plans locals i al Conseller d\'Interior en plans especials',
      'Al Cap del Grup Sanitari (SEM) quan hi hagi víctimes múltiples, i al Cap de Bombers en la resta de casos'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és l\'excepció operativa al CCA: el CCA el dirigeix el Cap de Bombers, EXCEPTE quan l\'incident respon a un acte intencionat o criminal, cas en què la direcció recau en Mossos d\'Esquadra.'
  },
  {
    topic: 21,
    difficulty: 'Mitjà',
    question: '[PUNYETERA · T21] Segons el Decret 30/2015 sobre els Plans d\'Autoprotecció (PAU), qui els homologa i quin és el termini màxim per a la seva revisió periòdica?',
    options: [
      'Els homologa la Comissió de Protecció Civil i tenen una revisió màxima cada 4 anys',
      'Els homologa la Comissió de Protecció Civil i tenen una revisió màxima cada 5 anys',
      'Els homologa l\'Ajuntament del municipi i tenen una revisió màxima cada 4 anys',
      'Els homologa el CECAT i tenen una revisió màxima cada 3 anys'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és la combinació exacta: el PAU (registre Hermes) és homologat per la Comissió de Protecció Civil i s\'ha de revisar com a màxim cada 4 anys (no cada 3 ni cada 5).'
  },
  {
    topic: 22,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T22] Dins la doctrina SISCOM (Cap. 4), quina diferència precisa hi ha entre Comandament Integrat i Comandament Unificat?',
    options: [
      'En el Comandament Integrat diversos cossos es coordinen al CCA sota la direcció de l\'agència principal responsable; en el Comandament Unificat, diferents cossos amb competència pròpia en territoris o jurisdiccions limítrofs comparteixen autoritat i un PAI comú',
      'En el Comandament Unificat diversos cossos es coordinen al CCA sota la direcció de l\'agència principal responsable; en el Comandament Integrat, diferents cossos en territoris limítrofs comparteixen autoritat i un PAI comú',
      'En el Comandament Integrat cada cos redacta el seu propi PAI independent al CCA; en el Comandament Unificat un sol Cap d\'Intervenció dirigeix sense consultar altres agències',
      'El Comandament Integrat s\'aplica exclusivament a emergències transfrontereres i el Comandament Unificat només a l\'interior d\'un mateix parc'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és no confondre Integrat amb Unificat: Integrat = diversos cossos coordinats al CCA sota una agència principal responsable; Unificat = cossos amb competència pròpia en jurisdiccions o territoris limítrofs que comparteixen autoritat i PAI comú.'
  },
  {
    topic: 22,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T22] Comparant l\'arquitectura funcional del SISCOM català amb l\'ICS americà original, quina afirmació és correcta?',
    options: [
      'Tant l\'ICS americà original com el SISCOM català despleguen en operatiu de camp les 5 àrees: Comandament, Operacions, Planificació, Logística i Administració/Finances',
      'L\'ICS americà original té 5 àrees (inclosa Administració/Finances), mentre que el SISCOM català NO desplega Finances en operatiu de camp',
      'El SISCOM català desplega Administració/Finances en operatiu de camp, però elimina la Secció de Planificació',
      'El SISCOM català només desplega Operacions i Logística, ja que Comandament i Planificació queden fora de l\'estructura'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és que l\'ICS americà original compta amb 5 àrees (Comandament, Operacions, Planificació, Logística i Administració/Finances), mentre que el SISCOM català NO desplega l\'àrea de Finances en l\'operatiu de camp.'
  },
  {
    topic: 23,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T23] Segons la norma UNE 23500 sobre grups de bombament de protecció contra incendis, quin és el règim d\'arrencada i aturada de la bomba principal (elèctrica o dièsel)?',
    options: [
      'Arrencada automàtica i aturada automàtica un cop recuperada la pressió de la xarxa',
      'Arrencada automàtica i aturada EXCLUSIVAMENT MANUAL',
      'Arrencada manual des del quadre i aturada automàtica per temporitzador',
      'Arrencada i aturada exclusivament manuals, a diferència de la bomba Jockey que és automàtica'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu (clàssic parany de la UNE 23500) és que la bomba Jockey té arrencada i aturada automàtiques, però la Bomba Principal té arrencada automàtica i aturada EXCLUSIVAMENT MANUAL per evitar que s\'aturi en plena intervenció.'
  },
  {
    topic: 23,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T23] En una instal·lació de columna seca reglamentària (DN 80 mm), com es distribueixen les sortides dobles de Ø45 mm i les claus de seccionament?',
    options: [
      'Sortides dobles Ø45 mm a les plantes PARELLS fins a la 8a i a TOTES a partir de la 8a, amb clau de seccionament cada 4 plantes',
      'Sortides dobles Ø45 mm a les plantes IMPARELLS fins a la 8a i a TOTES a partir de la 8a, amb clau de seccionament cada 4 plantes',
      'Sortides dobles Ø45 mm a les plantes PARELLS fins a la 8a i a TOTES a partir de la 8a, amb clau de seccionament cada 2 plantes',
      'Sortides dobles Ø45 mm a totes les plantes des de la planta baixa, amb clau de seccionament a cada planta'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu són les plantes PARELLS (no imparells) fins a la 8a planta i TOTES a partir de la 8a, amb clau de seccionament cada 4 plantes (no cada 2).'
  },
  {
    topic: 24,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T24] Segons la priorització de recerca de víctimes per visibilitat en incendis estructurals (Cap. 4.3.1), quin és l\'ordre correcte de prioritat?',
    options: [
      '1r Visibilitat mínima (< 6 m) → 2n Visibilitat baixa (6–10 m) → 3r Visibilitat mitja (> 10 m) → 4t Visibilitat alta (sense fum)',
      '1r Visibilitat baixa (6–10 m) → 2n Visibilitat mitja (> 10 m) → 3r Visibilitat mínima (< 6 m) → 4t Visibilitat alta (sense fum)',
      '1r Visibilitat alta (sense fum) → 2n Visibilitat mitja (> 10 m) → 3r Visibilitat baixa (6–10 m) → 4t Visibilitat mínima (< 6 m)',
      '1r Visibilitat mitja (> 10 m) → 2n Visibilitat baixa (6–10 m) → 3r Visibilitat alta (sense fum) → 4t Visibilitat mínima (< 6 m)'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és que NO es comença per visibilitat mínima (< 6 m): es prioritza 1r Visibilitat BAIXA (6–10 m) i 2n MITJA (> 10 m) abans que la MÍNIMA (< 6 m), perquè en aquestes zones les víctimes encara són salvables ràpidament abans de morir intoxicades.'
  },
  {
    topic: 24,
    difficulty: 'Mitjà',
    question: '[PUNYETERA · T24] En una intervenció d\'incendi d\'habitatge en altura, on s\'ha d\'emplaçar la bifurcació de la línia d\'aigua?',
    options: [
      'Sempre en Ruta Freda, a la mateixa planta de l\'incendi just davant la porta de l\'habitatge afectat',
      'Sempre en Ruta Freda, una planta per sota de la planta de l\'incendi (amb bucle de reserva a l\'escala)',
      'A l\'interior de la Ruta Calenta, dins el rebedor de l\'habitatge incendiat per reduir pèrdues de càrrega',
      'Sempre a la planta baixa (portal), pujant dues línies independents de Ø25 mm per la caixa d\'escala'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és la ubicació exacta de la bifurcació: sempre en Ruta Freda, 1 planta per sota del foc (no a la mateixa planta), deixant el bucle de reserva a l\'escala.'
  },
  {
    topic: 25,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T25] Segons la definició oficial de les fases d\'un incendi forestal (Cap. 4.5), què caracteritza exactament un incendi CONTROLAT?',
    options: [
      'Tot el perímetre està envoltat per una línia de control contínua fins al sòl mineral o humit i ja no pot créixer, tot i que hi poden quedar punts calents interns',
      'Tot el perímetre està envoltat per una línia de control discontínua i no queden punts calents interns amb possibilitat de revifar',
      'El front ja no avança lliurement i evoluciona dins les línies previstes, però el perímetre encara no està tancat del tot',
      'Tot el perímetre està tancat i ja no existeix cap calor ni brasa amb possibilitat de revifar en tot l\'interior'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és doble: en incendi CONTROLAT la línia de control és CONTÍNUA (fins al sòl mineral/humit) però encara hi poden quedar punts calents interns. Si el perímetre encara no està tancat del tot és ESTABILITZAT, i si no queda cap brasa ni calor és EXTINGIT.'
  },
  {
    topic: 25,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T25] Segons la sectorització estàndard d\'un incendi forestal (Cap. 2.2), mirant des de la cua cap al cap, com es numeren els sectors?',
    options: [
      'Sector 0 = Cap; sectors imparells (1, 3, 5...) = Flanc Dret; sectors parells (2, 4, 6...) = Flanc Esquerre',
      'Sector 0 = Cua; sectors imparells (1, 3, 5...) = Flanc Esquerre; sectors parells (2, 4, 6...) = Flanc Dret',
      'Sector 0 = Cua; sectors parells (2, 4, 6...) = Flanc Esquerre; sectors imparells (1, 3, 5...) = Flanc Dret',
      'Sector 1 = Cua; sectors parells = Flanc Esquerre; sectors imparells = Flanc Dret'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és la correspondència exacta mirant de la cua cap al cap: Sector 0 = Cua (punt d\'ancoratge), Sectors IMPARELLS = Flanc Esquerre, i Sectors PARELLS = Flanc Dret.'
  },
  {
    topic: 26,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T26] En un incendi de vehicle propulsat per Gas Natural Comprimit (GNC), per què està prohibit projectar aigua directament sobre els cilindres d\'emmagatzematge?',
    options: [
      'Perquè el GNC és més pesant que l\'aire i l\'aigua provoca un efecte BLEVE instantani a 8–10 bar',
      'Perquè refreda el fusible tèrmic TPRD, impedeix que fongui als ~110 °C per alliberar el gas i el cilindre (a 200 bar) pot rebentar',
      'Perquè el GNC es troba emmagatzemat en estat criogènic a -162 °C i l\'aigua provoca una transició ràpida de fase (RPT)',
      'Perquè l\'aigua reacciona químicament amb el metà comprimit generant fluorur d\'hidrogen (HF) tòxic'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu diferencia el GNC del GLP i del GNL: el GNC va a 200 bar amb fusible tèrmic TPRD (~110 °C), i tirar aigua al cilindre refreda el TPRD i impedeix que fongui i alleugereixi la pressió, causant el rebentament del dipòsit. (El -162 °C/RPT correspon al GNL, i el GLP a 8–10 bar sí que s\'ha de refrigerar).'
  },
  {
    topic: 26,
    difficulty: 'Mitjà',
    question: '[PUNYETERA · T26] Un cop extingit un incendi en un vehicle elèctric (bateries d\'ió liti de 400–800 V CC), durant quant de temps mínim s\'ha de monitoritzar el paquet de bateries amb càmera tèrmica?',
    options: [
      'Durant un mínim de 30 minuts post-extinció',
      'Durant un mínim d\'1 hora post-extinció',
      'Durant un mínim de 15 minuts post-extinció un cop desconnectat el Service Plug',
      'Només fins que desaparegui la flama visible, si ja s\'ha tallat el bucle de 12 V'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és el temps de vigilància per risc de reembalaçament tèrmic (Thermal Runaway): cal monitoritzar amb càmera tèrmica durant un MÍNIM D\'1 HORA post-extinció.'
  },
  {
    topic: 27,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T27] En una intervenció amb risc químic (NRBQ), quan i on s\'ha d\'ubicar l\'Àrea Bàsica de Descontaminació (ABD)?',
    options: [
      'Muntada i amb línia d\'aigua ABANS que entri el primer binomi, ubicada al límit exterior però DINS de la Zona Calenta',
      'Muntada i amb línia d\'aigua ABANS que entri el primer binomi, ubicada a l\'interior de la Zona Temperada',
      'Muntada i amb línia d\'aigua quan el primer binomi iniciï la sortida, ubicada al límit exterior però DINS de la Zona Calenta',
      'Muntada quan surti el primer binomi, ubicada a la Zona Freda al costat del Centre de Comandament Avançat'
    ],
    correctIndex: 0,
    explanation: 'El doble detall decisiu (parany 5.4) és el QUAN i l\'ON: l\'ABD ha d\'estar completament muntada i amb línia d\'aigua ABANS que entri el primer binomi, i s\'ubica al límit exterior però DINS DE LA ZONA CALENTA (per sortir-ne net abans de trepitjar la Zona Temperada).'
  },
  {
    topic: 27,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T27] En la metodologia d\'actuació davant un incident NRBQ, quin és l\'ordre d\'ANÀLISI i quin és l\'ordre d\'INTERVENCIÓ operativa?',
    options: [
      'Ordre d\'anàlisi: Diana → Flux → Font; ordre d\'intervenció: 1r Font → 2n Flux → 3r Diana',
      'Ordre d\'anàlisi: Font → Flux → Diana; ordre d\'intervenció: 1r Diana → 2n Flux → 3r Font',
      'Tant l\'ordre d\'anàlisi com l\'ordre d\'intervenció segueixen sempre la seqüència Font → Flux → Diana',
      'Ordre d\'anàlisi: Flux → Font → Diana; ordre d\'intervenció: 1r Flux → 2n Diana → 3r Font'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és que l\'ordre d\'ANÀLISI (estudi físic) i el d\'INTERVENCIÓ (acció operativa) són inversos: s\'analitza Font → Flux → Diana, però s\'intervé primer sobre la DIANA (salvar/confinar), després el FLUX (abatre/contenir) i finalment la FONT (taponar).'
  },
  {
    topic: 28,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T28] Davant d\'un lactant (< 1 any) conscient amb obstrucció greu de la via aèria per cos estrany (OVACE) i tos ineficaç, quina seqüència s\'ha d\'aplicar?',
    options: [
      '5 cops interescapulars seguits de 5 compressions abdominals (maniobra de Heimlich)',
      '5 cops interescapulars seguits de 5 compressions toràciques al terç inferior de l\'estèrnum',
      '5 compressions toràciques seguides de 5 ventilacions de rescat sense cops interescapulars',
      'Únicament 5 cops interescapulars alternats amb escombrat digital a cegues de la cavitat oral'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu en lactants (< 1 any) és que les compressions abdominals (Heimlich) estan PROHIBIDES pel risc de lesió visceral: s\'alternen 5 cops interescapulars amb 5 compressions TORÀCIQUES.'
  },
  {
    topic: 28,
    difficulty: 'Mitjà',
    question: '[PUNYETERA · T28] En la maniobra de recollida mitjançant Pont Millorat (o Holandès), quants socorristes intervenen i qui dóna l\'ordre d\'aixecament?',
    options: [
      'Intervenen 4 socorristes (3 aixequen + 1 llisca el tauler) i l\'ordre la dóna sempre el socorrista que llisca el tauler',
      'Intervenen 5 socorristes (4 aixequen —amb 1 exclusiu per al control cervical— + 1 llisca el tauler) i l\'ordre la dóna sempre el socorrista situat al cap',
      'Intervenen 5 socorristes (4 aixequen + 1 llisca el tauler) i l\'ordre la dóna sempre el socorrista situat a la pelvis',
      'Intervenen 4 socorristes (3 aixequen + 1 llisca el tauler) i l\'ordre la dóna sempre el socorrista situat al cap'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu separa el Pont Simple (3+1 = 4 socorristes) del Pont Millorat / Holandès (4+1 = 5 socorristes, amb un dedicat en exclusiva al control cervical). En tots dos casos, qui dirigeix i dóna l\'ordre és SEMPRE el socorrista situat al CAP.'
  },
  {
    topic: 29,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T29] Durant el 1r triatge START en un Incident de Múltiples Víctimes (IMV), trobem una víctima que no camina i no respira. Quina és l\'actuació exacta?',
    options: [
      'Assignar directament etiqueta NEGRA (Prioritat 4) sense tocar la víctima per no perdre temps',
      'Obrir la via aèria: si arrenca a respirar s\'assigna VERMELL (Prioritat 1); si segueix sense respirar s\'assigna NEGRE (Prioritat 4)',
      'Obrir la via aèria i administrar 5 ventilacions de rescat; si segueix sense respirar s\'inicia RCP 30:2',
      'Obrir la via aèria: si arrenca a respirar s\'assigna GROC (Prioritat 2); si segueix sense respirar s\'assigna NEGRE (Prioritat 4)'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu en el triatge START és que abans de declarar NEGRE cal obrir la via aèria (una de les dues úniques maniobres salvadores permeses, juntament amb el control d\'hemorràgia greu): si arrenca a respirar passa a VERMELL (no GROC), i està prohibit fer RCP durant el triatge bàsic.'
  },
  {
    topic: 30,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T30] En un apuntalament vertical d\'estructura col·lapsada, quina és la funció exacta del sotapont i quina és la distància màxima entre puntals consecutius?',
    options: [
      'El sotapont (a dalt) reparteix la càrrega sobre el forjat, els puntals la traslladen, i la distància màxima entre puntals consecutius és de ≤ 1,5 metres',
      'El sotapont (a dalt) recull la càrrega contra el sostre o biga, els puntals la traslladen, i la distància màxima entre puntals consecutius és de ≤ 1 metre',
      'El sotapont (a baix) reparteix la càrrega sobre el terra ferm, els puntals la recullen, i la distància màxima entre puntals consecutius és de ≤ 1 metre',
      'El sotapont (a dalt) recull la càrrega contra el sostre o biga, els puntals la traslladen, i la distància màxima entre puntals consecutius és de ≤ 2 metres'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és no confondre les funcions ni la distància: a dalt el SOTAPONT RECULL la càrrega, al mig els PUNTALS la TRASLLADEN (separats ≤ 1 metre, 1.000 kg de resistència segura per puntal), i a baix el JAÇ DE TAULONS la REPARTEIX.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[PUNYETERA · T30] Segons el codi universal acústic (botzina/xiulet) emprat en recerca i rescat en estructures col·lapsades (INSARAG), quin senyal indica «EVACUAR IMMEDIATAMENT»?',
    options: [
      '1 toc llarg de 3 segons',
      '3 tocs curts d\'1 segon',
      '1 toc llarg de 3 segons seguit d\'1 toc curt d\'1 segon',
      'Tocs curts repetitius i continus sense interrupció'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és distingir els 4 senyals del codi universal: 3 tocs curts d\'1 s = EVACUAR IMMEDIATAMENT; 1 toc llarg (3 s) = aturar operacions / silenci; 1 toc llarg + 1 curt = continuar; tocs curts continus = S.O.S. (bomber atrapat).'
  },
  {
    topic: 31,
    difficulty: 'Mitjà',
    question: '[PUNYETERA · T31] En les actuacions en medi natural terrestre (GRAE), quina diferència precisa hi ha entre un «guiatge» i un «acompanyament»?',
    options: [
      'El guiatge és un auxili presencial caminant amb una persona il·lesa fins a un lloc segur, mentre que l\'acompanyament és una orientació a distància per telèfon o app',
      'El guiatge és una orientació a distància (per telèfon/app) a una persona il·lesa amb qui hi ha contacte, mentre que l\'acompanyament és un auxili presencial caminant amb una persona il·lesa o esgotada fins a un lloc segur',
      'El guiatge implica l\'extracció mitjançant grua d\'helicòpter de persones ferides, mentre que l\'acompanyament és el trasllat preventiu davant un risc d\'allau',
      'El guiatge es realitza quan la persona ha perdut tota comunicació i ubicació, mentre que l\'acompanyament s\'aplica quan hi ha ferides greus'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és no invertir els termes: GUIATGE = orientació a DISTÀNCIA (telèfon/app) a una persona il·lesa amb contacte; ACOMPANYAMENT = auxili PRESENCIAL caminant amb persona il·lesa o esgotada (sense maniobra tècnica de rescat).'
  },
  {
    topic: 32,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T32] En un accident de trànsit, quina diferència exacta defineix un atrapament físic Tipus I respecte d\'un atrapament físic Tipus II?',
    options: [
      'En el Tipus I la víctima té una part del cos físicament presonera de l\'estructura deformada; en el Tipus II l\'habitacle està íntegre i la víctima surt pel seu propi peu en obrir la porta',
      'En el Tipus I la víctima està lliure de ferralla però no pot sortir per les seves lesions mèdiques (cal crear espai per treure-la a 0°); en el Tipus II una part del cos està físicament presonera de l\'estructura deformada',
      'En el Tipus I les portes estan bloquejades però la víctima està il·lesa; en el Tipus II la víctima està inconscient però sense cap part atrapada',
      'En el Tipus I cal fer un alliberament d\'emergència amb maniobra Rautek; en el Tipus II sempre s\'aplica un alliberament controlat'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu separa els tres tipus d\'atrapament: Mecànic (portes bloquejades, persona il·lesa); Físic Tipus I (lliure de ferralla, però no pot sortir per les seves LESIONS MÈDIQUES); Físic Tipus II (part del cos FÍSICAMENT PRESONERA de l\'estructura).'
  },
  {
    topic: 32,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T32] En la seqüència d\'estabilització d\'un accident on un vehicle (Vehicle B) es troba recolzat sobre o contra un altre vehicle que conté les víctimes (Vehicle A), quin s\'ha d\'estabilitzar primer, i en quin ordre s\'apliquen els tipus d\'alliberament si el pacient entra en descompensació crítica (XABCDE)?',
    options: [
      'Estabilitzar sempre primer el Vehicle A (on són les víctimes) i executar un alliberament controlat (Pla A, ~20 min) per mantenir l\'alineació a 0°',
      'Estabilitzar sempre primer el Vehicle B (el que està sobre o contra A) i passar a un alliberament immediat (Pla B ràpid, ~5–10 min)',
      'Estabilitzar sempre primer el Vehicle B i executar un alliberament d\'emergència amb maniobra Rautek en tots els casos de pacient crític',
      'Estabilitzar simultàniament A i B només amb 4 bombers a les cantonades i executar un alliberament controlat de 20 minuts'
    ],
    correctIndex: 1,
    explanation: 'El doble detall decisiu: 1) S\'estabilitza SEMPRE PRIMER el Vehicle B (el que està a sobre o contra A); 2) Davant d\'un pacient crític per XABCDE s\'aplica el Pla B d\'alliberament IMMEDIAT (~5–10 min), reservant l\'alliberament d\'EMERGÈNCIA (Rautek en segons) per a risc vital extern imminent com foc, explosió o ACR.'
  },
  {
    topic: 33,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T33] Abans d\'accedir al forat, fossat o sostre de cabina en un rescat d\'ascensor, quantes sèries elèctriques de seguretat s\'han d\'activar com a mínim?',
    options: [
      'N\'hi ha prou d\'activar 1 de les 3 sèries elèctriques de seguretat (l\'obertura de la porta exterior de planta)',
      'Cal activar un mínim de 2 de les 3 sèries elèctriques de seguretat (porta exterior, STOP del fossat, STOP del sostre de cabina)',
      'És obligatori tallar exclusivament el quadre general de l\'edifici sense accionar cap STOP de cabina o fossat',
      'Cal activar un mínim de 2 de les 3 sèries, sempre que la corda utilitzada sigui exclusivament dinàmica (EN 892) i sense nusos'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu de seguretat en ascensors és la regla de redundància: abans d\'entrar al forat, fossat o sostre cal activar MÍNIM 2 DE LES 3 SÈRIES elèctriques de seguretat (porta exterior amb clau triangular, STOP del fossat, STOP del sostre de cabina).'
  },
  {
    topic: 34,
    difficulty: 'Difícil',
    question: '[PUNYETERA · T34] En una maniobra combinada de rescat aquàtic on el rescatador entra a l\'aigua assegurat amb una corda des de riba, com s\'ha de connectar la corda al rescatador?',
    options: [
      'Nuada directament a l\'arnès o al cos mitjançant un nus de vuit per evitar qualsevol desconnexió accidental en el corrent',
      'Connectada obligatòriament a l\'anella del sistema desembragable (zafada ràpida) de l\'armilla d\'aigües braves (o a un cap flotant)',
      'Nuada a la cintura amb un nus ballestrinca sobre l\'EPI estructural de foc per guanyar flotabilitat',
      'Connectada mitjançant un nus Prusik fix a l\'espatllera de l\'ERA en tots els rescats en riu de grau ≤ 3'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu en aigües braves és que està PROHIBIT nuar la corda fixa al cos (la força del corrent submergeix el bomber sense possibilitat d\'alliberar-se): s\'ha de connectar OBLIGATÒRIAMENT a l\'anella del sistema desembragable (zafada ràpida) de l\'armilla d\'aigües braves.'
  }
];
