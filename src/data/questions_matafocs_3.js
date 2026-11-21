/**
 * Simulacre MATAFOCS 3 (Model A) — 70 preguntes amb plantilla de correcció oficial.
 */
export const QUESTIONS_MATAFOCS_3 = [
  {
    topic: 26,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P1] Mentre la dotació s\'acosta a un contenidor de superfície en flames, se senten crepitacions i sibilants a l\'interior i el fum és dens i irregular. Com ha d\'actuar?',
    options: [
      'Atacar-lo de seguida amb raig tens a curta distància',
      'Augmentar la distància de seguretat i esperar que la situació s\'estabilitzi abans d\'atacar-lo',
      'Obrir-ne la tapa i remoure\'n el contingut',
      'Retirar-se i deixar que es consumeixi sense aigua'
    ],
    correctIndex: 1,
    explanation: 'Crepitacions, xiulets/sibilants i fum dens irregular indiquen possibles aerosols, ampolles o productes a pressió: cal augmentar la distància de seguretat.'
  },
  {
    topic: 17,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P2] Davant d\'una comunicació crítica o d\'una ordre operativa rebuda per ràdio, és recomanable que el receptor:',
    options: [
      'demani a l\'emissor que torni a transmetre el missatge sencer',
      'tanqui la resposta amb el marcador «canvi i tallo»',
      'confirmi el contingut mitjançant una trucada individual',
      'repeteixi un breu resum del missatge que acaba de rebre'
    ],
    correctIndex: 3,
    explanation: 'La repetició d\'un breu resum (col·lació) garanteix que l\'ordre crítica s\'ha entès correctament.'
  },
  {
    topic: 32,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P3] Per organitzar l\'AGO en un accident de trànsit amb un turisme bolcat a la calçada, quina afirmació és FALSA?',
    options: [
      'L\'àrea de relleu i SOS es delimita a la zona freda, amb el personal aliè a la intervenció',
      'A la zona calenta només hi accedeixen, degudament equipats, els qui fan el rescat o atenció sanitària',
      'Els elements retirats del vehicle es dipositen a l\'àrea per ferralla',
      'La zona tèbia és on romanen els vehicles i mitjans necessaris'
    ],
    correctIndex: 0,
    explanation: 'L\'àrea de relleu i SOS és per a equips operatius preparats a la zona tèbia/transició (mai barrejada amb el personal aliè a la intervenció).'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P4] A què es refereix el terme carreu en la construcció amb pedra?',
    options: [
      'A una peça de pedra natural col·locada sense treballar',
      'A una peça de pedra tallada per donar-li una forma regular',
      'A una placa prima per revestir',
      'A un fragment de pedra triturada'
    ],
    correctIndex: 1,
    explanation: 'Un carreu és una peça de pedra llaurada/tallada en forma regular (paral·lelepipèdica) per a fàbrica de pedra.'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P5] Sobre la seguretat en les intervencions en estructures col·lapsades, quina afirmació és FALSA?',
    options: [
      'La detecció tèrmica dels punts calents es fa un cop retirada la runa, quan ja queden a la vista',
      'La pluja i les vibracions poden provocar un col·lapse secundari',
      'Abans d\'entrar cal controlar l\'aire amb detectors de gasos',
      'Les zones de refugi dels equips poden ser dins la zona calenta si són estables'
    ],
    correctIndex: 0,
    explanation: 'La detecció tèrmica (càmeres tèrmiques) es fa des del reconeixement inicial, abans i durant la retirada de runa.'
  },
  {
    topic: 34,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P6] Durant una inundació hivernal, els rescatadors han de fer diverses entrades en aigua molt freda. Quina pauta han d\'aplicar per prevenir hipotèrmia i hidrocució?',
    options: [
      'Entrar-hi de cop i limitar el temps d\'exposició',
      'Accedir-hi de forma progressiva i fer entrades llargues',
      'Accedir-hi de forma progressiva i limitar el temps d\'exposició segons la temperatura',
      'Entrar-hi de cop i fer entrades llargues'
    ],
    correctIndex: 2,
    explanation: 'Cal accedir progressivament (evitar xoc tèrmic/hidrocució) i limitar el temps d\'exposició fent relleus.'
  },
  {
    topic: 10,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P7] Prenent R = 0,0821 L·atm/mol·K, quin volum ocupen 140 g de nitrogen (N₂, M = 28 g/mol) a 2 atm i 127 °C?',
    options: ['26,1 L', '82,1 L', '112 L', '164,2 L'],
    correctIndex: 1,
    explanation: 'n = 140/28 = 5 mol; T = 127 + 273 = 400 K. V = nRT/P = (5 · 0,0821 · 400) / 2 = 82,1 L.'
  },
  {
    topic: 25,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P8] Quan el Cos de Bombers fa servir el foc tècnic en un incendi de vegetació, qui l\'ha d\'executar i amb la validació de quin comandament?',
    options: [
      'La dotació més propera al front, validació cap de sector',
      'Personal format en foc tècnic, validació cap de sector',
      'Personal format en foc tècnic, amb la validació del cap d\'intervenció',
      'La dotació més propera, validació cap d\'intervenció'
    ],
    correctIndex: 2,
    explanation: 'El foc tècnic només el pot executar personal format específicament i sempre amb la validació del cap d\'intervenció.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P9] Per què no s\'ha d\'agafar una perxa de salvament dielèctrica per fora del mànec que delimita l\'anell de guarda?',
    options: [
      'Perquè es pot trencar el ganxo',
      'Perquè fora del mànec el pal no és aïllant i condueix l\'electricitat',
      'Perquè l\'anell deriva a terra',
      'Perquè es redueix la distància a l\'element en tensió'
    ],
    correctIndex: 3,
    explanation: 'Segons la plantilla del model (D): reduir la distància a l\'element en tensió compromet la distància d\'aïllament i la seguretat de la perxa.'
  },
  {
    topic: 7,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P10] Si en un mateix torn de guàrdia coincideixen dos sergents, a quin d\'ells correspon la funció de cap de torn (Decret 276/2016)?',
    options: [
      'Al que designi el cap de coordinació territorial',
      'Al que designi el sotscap territorial',
      'Al que tingui més antiguitat en la categoria',
      'Al que tingui més antiguitat en el Cos'
    ],
    correctIndex: 2,
    explanation: 'Art. 18.2 D 276/2016: al que tingui més antiguitat en la categoria.'
  },
  {
    topic: 29,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P11] Quan un incident de múltiples víctimes comporta risc associat però no té indicis d\'il·lícit penal, a qui correspon el comandament operatiu inicial?',
    options: [
      'Al Sistema d\'Emergències Mèdiques',
      'Al primer operatiu que arriba al lloc',
      'Als Bombers de la Generalitat',
      'Al Cos de Mossos d\'Esquadra'
    ],
    correctIndex: 2,
    explanation: 'En IMV accidentals amb risc associat sense il·lícit penal, el comandament operatiu correspon als Bombers de la Generalitat.'
  },
  {
    topic: 28,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P12] Un paleta s\'ha desplomat al sol: pell calenta i seca, confús i li costa mantenir-se despert. Ja és a l\'ombra i ventilat. Quina actuació correspon mentre arriba el SEM?',
    options: [
      'Refredar-lo gradualment sense draps freds, i donar aigua',
      'Refredar-lo gradualment sense draps freds, i no donar res per beure',
      'Aplicar draps freds a aixelles, engonals i coll, i donar aigua',
      'Aplicar-li draps freds a les aixelles, les engonals i el coll, i no donar-li res per beure'
    ],
    correctIndex: 3,
    explanation: 'Cop de calor amb alteració del nivell de consciència (confús, somnolent): NO donar líquids per boca (risc d\'aspiració) i refredar amb draps freds en zones de grans vasos (aixelles, engonals, coll).'
  },
  {
    topic: 13,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P13] Quant de temps triga a omplir un dipòsit de 36 m³ una conducció amb una secció de pas de 30 cm² per la qual l\'aigua circula a 2 m/s?',
    options: ['1 minut', '100 minuts', '400 minuts', '6.000 minuts'],
    correctIndex: 1,
    explanation: 'S = 30 cm² = 0,003 m². Q = 0,003 · 2 = 0,006 m³/s = 0,36 m³/min. t = 36 / 0,36 = 100 minuts.'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P14] Un bomber entra amb una ampolla de 7 litres a 290 bar i un consum de 70 L/min. Quants litres d\'aire quedaran al cap de 13 minuts?',
    options: ['700 litres', '910 litres', '1.120 litres', '1.960 litres'],
    correctIndex: 2,
    explanation: 'Aire inicial = 7 · 290 = 2.030 L. Consum en 13 min = 13 · 70 = 910 L. Restant = 2.030 - 910 = 1.120 L.'
  },
  {
    topic: 24,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P15] Dins d\'un pis tancat hi ha un foc latent amb dèficit d\'oxigen i el binomi encara no té la línia a punt. Com s\'ha de gestionar la ventilació?',
    options: [
      'Obrir una finestra alta perquè surtin els gasos calents',
      'Col·locar un ventilador de pressió positiva',
      'Obrir porta i finestra per tiratge natural',
      'Mantenir tancats els accessos del pis fins que l\'atac interior estigui preparat'
    ],
    correctIndex: 3,
    explanation: 'En un foc latent/infraventilat cal mantenir tancats tots els accessos (antiventilació) per evitar un backdraft fins tenir la línia d\'aigua a punt.'
  },
  {
    topic: 8,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P16] Quin agent extintor gasós actua exclusivament per sufocació, diluint la concentració d\'oxigen de l\'ambient?',
    options: [
      'El diòxid de carboni en inundació total',
      'Els halons recuperats',
      'Els hidrofluorocarburs substituts',
      'Les mescles gasoses de nitrogen i argó'
    ],
    correctIndex: 3,
    explanation: 'Els gasos inerts (nitrogen, argó, IG-55/IG-541) actuen exclusivament per sufocació (desplaçant l\'O₂), sense refredament ni inhibició química.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P17] La revisió diària d\'un vehicle d\'emergència al parc comença per:',
    options: [
      'una inspecció visual exterior i interior per detectar fuites, abans d\'engegar el vehicle',
      'una revisió del material transportat abans d\'engegar',
      'una prova de la bomba d\'aigua amb motor en marxa',
      'una comprovació dels llums d\'error amb motor en marxa'
    ],
    correctIndex: 0,
    explanation: 'Primer es fa una inspecció visual exterior i interior (nivells, fuites, pneumàtics) abans d\'engegar el motor.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P18] Una dotació ha de trossejar amb motoserra un tronc caigut que talla una pista. Quina pauta NO és correcta?',
    options: [
      'Si el tronc té un sol punt de recolzament, fer primer el tall superior i després l\'inferior',
      'Retallar primer les branques secundàries que no recolzen a terra',
      'Si té dos punts de recolzament, primer el tall superior i després l\'inferior',
      'Desbrancar-lo amb una sola motoserra i no retirar les branques fins que s\'acabi'
    ],
    correctIndex: 0,
    explanation: 'Si el tronc té un sol punt de recolzament (en voladís), el tall s\'ha de fer primer per la part INFERIOR (zona comprimida) i després per la SUPERIOR.'
  },
  {
    topic: 31,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P19] El lloc que, en una recerca al medi natural, cal localitzar i protegir immediatament perquè pot conservar el rastre de la persona rep el nom de:',
    options: [
      'Centre de comandament',
      'Punt de reunió segur',
      'Punt de transferència mèdica',
      'L\'últim punt d\'albirament'
    ],
    correctIndex: 3,
    explanation: 'L\'Últim Punt d\'Albirament (UPA) s\'ha de localitzar i protegir immediatament per no contaminar possibles rastres (per gossos, etc.).'
  },
  {
    topic: 33,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P20] A quin punt s\'ancora l\'intervinent en la maniobra amb elements de retenció del rescat urbà en alçada?',
    options: [
      'A l\'anella \'A\' anticaigudes de l\'arnès integral',
      'A l\'anella ventral de subjecció de l\'arnès integrat al sobrepantaló',
      'Als dos mosquetons MGO',
      'Al bloquejador de puny'
    ],
    correctIndex: 1,
    explanation: 'En maniobres amb elements de retenció (posicionament/limitació de recorregut), l\'ancoratge es connecta a l\'anella ventral de subjecció.'
  },
  {
    topic: 14,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P21] Sobre un mapa 1:25.000, un punt queda 3,2 cm a l\'est i 1,6 cm al nord de la cantonada (X = 431000, Y = 4612000). Quina coordenada Y té?',
    options: ['Y = 4612040', 'Y = 4612400', 'Y = 4612800', 'Y = 4616000'],
    correctIndex: 1,
    explanation: '1,6 cm × 25.000 = 40.000 cm = 400 m cap al nord. Y = 4612000 + 400 = 4612400.'
  },
  {
    topic: 2,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P22] Segons l\'art. 118.2 del DL 1/1997 (Funció Pública), quin òrgan imposa les sancions per faltes greus als funcionaris de la Generalitat?',
    options: [
      'El secretari general del departament on presta serveis l\'inculpat',
      'La persona titular del departament',
      'El conseller de funció pública',
      'La Comissió Tècnica'
    ],
    correctIndex: 0,
    explanation: 'Art. 118.2 DL 1/1997: faltes lleus → cap de la unitat/director general; faltes greus → secretari general del departament; molt greus → conseller/Govern (separació).'
  },
  {
    topic: 23,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P23] En una escala protegida que els bombers usen com a via de penetració, amb quins elements es compartimenta i quina superfície de finestres practicables per planta té?',
    options: [
      'Elements constructius EI-120 i finestres practicables d\'1 m² per planta',
      'Elements EI-90 i finestres d\'1 m²',
      'Elements EI-120 i finestres de 2 m²',
      'Elements EI-90 i finestres de 2 m²'
    ],
    correctIndex: 0,
    explanation: 'CTE DB-SI: una escala protegida es compartimenta amb elements EI-120 i requereix finestres practicables d\'almenys 1 m² per planta (o sobrepressió).'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P24] Qui valora si la dotació ha de vestir l\'EPI complet abans del trajecte o si el pot completar en arribar al lloc?',
    options: [
      'El conductor del vehicle',
      'Cada bomber',
      'El cap de sortida',
      'La sala de control'
    ],
    correctIndex: 2,
    explanation: 'Correspon al cap de sortida valorar-ho en funció del tipus d\'avís i trajecte.'
  },
  {
    topic: 27,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P25] Des d\'una canonada s\'escapa gas clor que el vent empeny cap als banyistes. Seguint la metodologia Font–Flux–Diana, en quin ordre s\'enfoca l\'actuació?',
    options: [
      'Protegir dianes, actuar sobre font, contenir flux',
      'Protegir les dianes, contenir el flux i actuar sobre la font',
      'Contenir flux, protegir dianes, actuar sobre font',
      'Actuar sobre font, contenir flux, protegir dianes'
    ],
    correctIndex: 1,
    explanation: 'Sempre en ordre invers a la propagació: 1r Protegir dianes, 2n Contenir el flux, 3r Actuar sobre la font.'
  },
  {
    topic: 9,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P26] Quina força de fregament cal vèncer per posar en moviment una caixa de 40 kg sobre terra horitzontal (μ_estàtic = 0,7; μ_dinàmic = 0,3; g = 10 m/s²)?',
    options: ['28 N', '120 N', '280 N', '400 N'],
    correctIndex: 2,
    explanation: 'Per posar en moviment s\'ha de vèncer el fregament estàtic màxim: F = μ_e · N = 0,7 · (40 · 10) = 280 N.'
  },
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P27] Un accident múltiple obliga a activar el pla de protecció civil i, en confirmar-se víctimes mortals, s\'incorpora el grup de suport per a aquests casos. Qui coordina aquest grup?',
    options: [
      'La Direcció General de Protecció Civil',
      'El Cos de Mossos d\'Esquadra',
      'Els òrgans del poder judicial',
      'El Sistema d\'Emergències Mèdiques'
    ],
    correctIndex: 2,
    explanation: 'Les tasques d\'aixecament de cadàvers, identificació judicial i grup de suport forense es coordinen sota els òrgans del poder judicial.'
  },
  {
    topic: 5,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P28] Quina d\'aquestes regles sobre la llengua dels documents i registres NO s\'ajusta a la Llei 1/1998?',
    options: [
      'Formularis dels registres públics en les dues llengües oficials en exemplars separats',
      'Si els atorgants d\'un document públic no escullen llengua, es redacta en català',
      'Si les parts no acorden la llengua d\'un conveni col·lectiu, en les dues llengües en exemplars separats',
      'Els xecs, pagarés i talonaris s\'han de redactar, com a mínim, en català'
    ],
    correctIndex: 0,
    explanation: 'Art. 17.3 Llei 1/1998: els formularis dels registres públics han d\'estar a disposició en català i en castellà (en exemplars separats o bilingües segons cas; la plantilla marca A com la no ajustada).'
  },
  {
    topic: 22,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P29] Segons els principis del SISCOM, com ha de procedir un comandament quan ja no pot exercir un control immediat sobre totes les accions de la seva àrea?',
    options: [
      'Prioritzar un sol objectiu i deixar la resta en espera',
      'Delegar l\'execució mantenint direcció directa',
      'Reduir els objectius de la intervenció',
      'Iniciar la delegació d\'autoritat als comandaments subordinats, assignant-los objectius'
    ],
    correctIndex: 3,
    explanation: 'Quan se supera el tram de control (3–5 línies), cal delegar autoritat creant nous sectors/grups amb comandaments subordinats.'
  },
  {
    topic: 11,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P30] Amb 48 V s\'alimenten en paral·lel tres receptors de 16 Ω, 24 Ω i 48 Ω. Si el de 24 Ω s\'avaria i queda obert, quina intensitat total subministra la font?',
    options: ['4 A', '0,75 A', '6 A', '2 A'],
    correctIndex: 0,
    explanation: 'Queden en paral·lel 16 Ω i 48 Ω: I1 = 48/16 = 3 A; I3 = 48/48 = 1 A. Total = 3 + 1 = 4 A.'
  },
  {
    topic: 34,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P31] S\'ha esfondrat un tram del mur de canalització d\'una riera i la contenció haurà d\'aguantar setmanes durant les obres. Amb què convé fer-la?',
    options: [
      'Un dic de sacs terrers',
      'Unes barreres inflables',
      'Un dic amb maquinària pesada',
      'Uns gabions modulars'
    ],
    correctIndex: 3,
    explanation: 'Per a contencions duradores de setmanes sota cabal/erosió s\'utilitzen gabions modulars (cistelles metàl·liques farcides de pedra).'
  },
  {
    topic: 32,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P32] En la biomecànica de l\'accident, a partir de quina velocitat sense cinturó i de quin desplaçament del vehicle es considera impacte d\'alta energia?',
    options: [
      'Impacte > 30 km/h i desplaçament > 3 m',
      'Impacte a més de 30 km/h i desplaçament de més de 7 metres',
      'Impacte > 45 km/h i desplaçament > 3 m',
      'Impacte > 45 km/h i desplaçament > 7 m'
    ],
    correctIndex: 1,
    explanation: 'Criteris d\'alta energia: velocitat > 30 km/h sense cinturó/SRI o desplaçament del vehicle > 7 metres (o intrusió > 30 cm / deformació > 50 cm).'
  },
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P33] Quin grau de filtrat ha de tenir el filtre que es col·loca després de la clau de tall general en la instal·lació d\'aigua d\'un edifici?',
    options: [
      'Entre 1 i 5 μm',
      'Entre 5 i 10 μm',
      'Entre 10 i 25 μm',
      'Entre 25 i 50 μm'
    ],
    correctIndex: 3,
    explanation: 'El filtre general de la instal·lació d\'aigua té un grau de filtrat comprès entre 25 i 50 micròmetres (μm).'
  },
  {
    topic: 23,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P34] Pel que fa als hidrants a la via pública i establiments industrials, quina afirmació és INCORRECTA?',
    options: [
      'Els hidrants de la via pública per omplir vehicles han de donar una pressió mínima de 5 bar a cada boca',
      'A la via pública, la xarxa ha de subministrar 1.000 l/min a dos hidrants simultanis durant 2 hores',
      'Els hidrants propis industrials s\'han d\'identificar per distingir-los',
      'En un establiment industrial cada hidrant d\'impulsió directa cobreix un radi de 40 m'
    ],
    correctIndex: 0,
    explanation: 'Els hidrants d\'impulsió directa industrials requereixen 5 bar (500 kPa); els de via pública per omplir camions tenen pressió mínima d\'1 bar (100 kPa).'
  },
  {
    topic: 31,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P35] En una recerca que dura 15 hores, on s\'ha de centralitzar el registre dels recorreguts i sectors fets, horaris, incidències i decisions?',
    options: [
      'A la sala de control territorial',
      'Al centre de comandament, des d\'on es fa el seguiment global de la recerca',
      'Al quadern de camp de cada equip',
      'Al comunicat del cap de dotació'
    ],
    correctIndex: 1,
    explanation: 'El registre global de sectors, recorreguts, equips i incidències es centralitza al Centre de Comandament per garantir la continuïtat entre relleus.'
  },
  {
    topic: 17,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P36] Amb quina fórmula ha de contestar per ràdio la unitat que escolta una crida adreçada a ella i ja està a punt per atendre el missatge?',
    options: [
      '«Rebut», seguit del seu propi indicatiu',
      '«Endavant», seguit del seu propi indicatiu',
      '«Rebut», seguit de l\'indicatiu de l\'emissor',
      '«Endavant», seguit de l\'indicatiu de l\'emissor'
    ],
    correctIndex: 3,
    explanation: 'Per donar pas al missatge es contesta «Endavant» seguit de l\'indicatiu de qui ens crida (o «Endavant, [indicatiu]»).'
  },
  {
    topic: 9,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P37] Per pujar un carro de 80 kg per una rampa que salva un desnivell de 3 m amb projecció horitzontal de 4 m (sense fregament, g = 10 m/s²), quina força paral·lela a la rampa cal?',
    options: ['48 N', '480 N', '600 N', '640 N'],
    correctIndex: 1,
    explanation: 'Longitud de la rampa = √(3² + 4²) = 5 m. sin(α) = 3/5 = 0,6. F = m·g·sin(α) = 80 · 10 · 0,6 = 480 N.'
  },
  {
    topic: 33,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P38] El sistema anticaigudes en rescat urbà obliga a preveure una «alçada lliure». Per què?',
    options: [
      'Perquè actua un cop en suspensió',
      'Perquè delimita l\'espai de treball',
      'Perquè no impedeix la caiguda lliure, però l\'atura limitant la força de xoc',
      'Perquè subjecta l\'usuari en suspensió al punt de treball'
    ],
    correctIndex: 2,
    explanation: 'El sistema anticaigudes no evita la caiguda, sinó que la frena progressivament (amb absorbidor/distància de frenada) limitant la força de xoc (< 6 kN).'
  },
  {
    topic: 21,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P39] A quines fases de les 4R corresponen, respectivament, la creació de sistemes d\'alerta primerenca i l\'actualització de plans i protocols a partir de l\'avaluació?',
    options: [
      'Reducció del risc i recuperació',
      'A la preparació i a la recuperació',
      'Reducció del risc i preparació',
      'Preparació i reducció del risc'
    ],
    correctIndex: 1,
    explanation: 'Sistemes d\'alerta primerenca → Preparació; avaluació post-emergència i actualització de plans/lliçons apreses → Recuperació.'
  },
  {
    topic: 10,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P40] Una peça de coure de 5 kg s\'escalfa de 20 °C a 270 °C (c = 400 J/kg·°C). Quanta calor ha absorbit?',
    options: ['500 kJ', '540 kJ', '580 kJ', '1.086 kJ'],
    correctIndex: 0,
    explanation: 'Q = m · c · ΔT = 5 · 400 · (270 - 20) = 2.000 · 250 = 500.000 J = 500 kJ.'
  },
  {
    topic: 26,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P41] A l\'aparcament exterior d\'un centre comercial crema un turisme de benzina sense ningú a dins i el foc ja ha superat el motor. Quina ha de ser la primera actuació?',
    options: [
      'Obrir el capó per atacar el motor',
      'Obrir les portes per ventilar l\'habitacle',
      'Refredar el dipòsit amb la línia d\'aigua',
      'Deixar-lo cremar i protegir exposicions'
    ],
    correctIndex: 2,
    explanation: 'Si el foc ha superat el motor en un vehicle de benzina (dipòsit plàstic que pot fondre\'s), és prioritari refredar i protegir el dipòsit de combustible.'
  },
  {
    topic: 16,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P42] Un mamífer salvatge de mida mitjana s\'ha colat al pati d\'una escola i suposa un risc immediat. Com ha d\'actuar la dotació?',
    options: [
      'Deixar de mirar-lo i fer servir salabres',
      'Mantenir-ne el control visual i fer servir salabres',
      'Deixar de mirar-lo i fer servir xarxes',
      'Mantenir-ne el control visual sense donar-li l\'esquena, i fer servir xarxes i immobilització física'
    ],
    correctIndex: 3,
    explanation: 'Amb mamífers salvatges mitjans cal mantenir control visual continu sense donar-los l\'esquena i capturar-los amb xarxes i immobilització física.'
  },
  {
    topic: 29,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P43] Com participen els Bombers en la filiació de les persones afectades per un incident de múltiples víctimes?',
    options: [
      'Sovint ajuden a identificar i ordenar les víctimes i els afectats, sobretot en les fases inicials',
      'Sovint ajuden un cop acabada l\'evacuació',
      'N\'assumeixen la responsabilitat principal en fases inicials',
      'N\'assumeixen la responsabilitat fins que arriba el SEM'
    ],
    correctIndex: 0,
    explanation: 'Tot i que la filiació oficial correspon a sanitaris/policia, els bombers sovint ajuden a identificar i ordenar víctimes en les fases inicials.'
  },
  {
    topic: 1,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P44] Si dos mesos després de la primera votació d\'investidura cap candidat ha estat elegit president de la Generalitat, què estableix l\'art. 67.3 EAC?',
    options: [
      'El Parlament queda dissolt i el president del Parlament convoca eleccions (entre 40 i 60 dies)',
      'El president en funcions convoca eleccions (entre 30 i 45 dies)',
      'El Parlament queda dissolt i el president de la Generalitat en funcions convoca eleccions, que s\'han de fer entre quaranta i seixanta dies després',
      'El president del Parlament convoca eleccions (entre 30 i 45 dies)'
    ],
    correctIndex: 2,
    explanation: 'Art. 67.3 EAC: el Parlament queda dissolt automàticament i el president de la Generalitat en funcions convoca eleccions entre 40 i 60 dies després.'
  },
  {
    topic: 28,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P45] Durant la valoració d\'un motorista accidentat, la dotació li palpa la pelvis i hi nota inestabilitat. Què ha de fer abans que arribi el SEM?',
    options: [
      'Col·locar un cinturó pelvià quan el SEM confirmi la fractura',
      'No manipular-li la pelvis fins a confirmació',
      'No manipular ni contenir-la fins a la immobilització definitiva',
      'Col·locar-li un cinturó pelvià tan aviat com sigui possible, o contenir-li la pelvis manualment'
    ],
    correctIndex: 3,
    explanation: 'Una pelvis inestable pot causar hemorràgia interna mortal: cal tancar-la/estabilitzar-la amb cinturó pelvià o contenció manual immediata (i no re-palpar).'
  },
  {
    topic: 20,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P46] Un bomber respira de l\'ampolla de 9 litres a 300 bar amb un consum de 90 L/min. Quina pressió marcarà el manòmetre al cap de 12 minuts?',
    options: ['120 bar', '180 bar', '210 bar', '240 bar'],
    correctIndex: 1,
    explanation: 'Aire inicial = 9 · 300 = 2.700 L. Consum en 12 min = 12 · 90 = 1.080 L. Aire restant = 2.700 - 1.080 = 1.620 L. Pressió = 1.620 / 9 = 180 bar.'
  },
  {
    topic: 13,
    difficulty: 'Difícil',
    question: '[MATAFOCS 3 · P47] Dues conduccions del mateix material porten el mateix cabal. La primera fa 100 m i perd 0,2 bar; la segona fa 50 m i té la meitat del diàmetre. Quina pèrdua lineal hi haurà?',
    options: ['0,1 bar', '0,4 bar', '1,6 bar', '3,2 bar'],
    correctIndex: 3,
    explanation: 'La pèrdua és proporcional a L i inversament proporcional a D⁵ (Darcy-Weisbach a cabal constant). Meitat de L (×0,5) i meitat de D (×2⁵ = ×32) → 0,2 · 0,5 · 32 = 3,2 bar.'
  },
  {
    topic: 15,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P48] El conjunt coordinat d\'elements estructurals i materials que configuren una edificació (estabilitat, confort tèrmic, acústic, impermeabilitat) s\'anomena:',
    options: [
      'sistema estructural',
      'sistema de tancaments',
      'sistema constructiu',
      'sistema de divisions'
    ],
    correctIndex: 2,
    explanation: 'El sistema constructiu engloba tant l\'estructura portant com els tancaments i materials que aporten habitabilitat i confort.'
  },
  {
    topic: 24,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P49] En superar el llindar de la cuina incendiada, el binomi troba una persona inconscient a pocs metres del focus i hi pot arribar en condicions segures. Què ha de fer?',
    options: [
      'Treure-la de seguida, sense projectar aigua sobre el focus, perquè el vapor li pot causar cremades greus',
      'Atacar primer el focus amb raig tens',
      'Atacar primer el focus amb con d\'atac',
      'Treure-la projectant alhora aigua sobre el focus'
    ],
    correctIndex: 0,
    explanation: 'Si s\'hi pot arribar sense risc immediat per al binomi, s\'extreu primer la víctima sense tirar aigua per evitar generar vapor a alta temperatura sobre ella.'
  },
  {
    topic: 4,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P50] Segons l\'art. 22 de la Llei 19/2020 (Igualtat de tracte), quina afirmació sobre la protecció contra la discriminació és FALSA?',
    options: [
      'L\'incompliment del deure de detectar i protegir genera responsabilitats administratives',
      'Si qui al·lega haver patit una discriminació aporta indicis racionals i fonamentats, li correspon a aquesta persona provar que l\'ha patida',
      'Els fets es poden provar per qualsevol prova admesa en dret',
      'L\'òrgan sancionador pot demanar informes als òrgans competents'
    ],
    correctIndex: 1,
    explanation: 'Inversió de la càrrega de la prova: si qui al·lega aporta indicis racionals, correspon a la part acusada/demandada provar que no hi ha hagut discriminació.'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P51] En emergències NRBQ, com es considera l\'abatiment d\'un núvol de vapor mitjançant una cortina d\'aigua polvoritzada amb monitor?',
    options: [
      'Maniobra defensiva de protecció sobre les dianes',
      'Maniobra defensiva de protecció sobre el flux',
      'Una maniobra ofensiva de contenció i mitigació, perquè actua principalment sobre el flux del producte alliberat',
      'Maniobra ofensiva sobre les dianes'
    ],
    correctIndex: 2,
    explanation: 'L\'abatiment/cortina sobre el núvol actua directament sobre el flux del producte alliberat per contenir-lo i mitigar-lo (maniobra ofensiva de contenció i mitigació).'
  },
  {
    topic: 21,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P52] A qui correspon gestionar el CECAT i on hi ha la seva sala secundària?',
    options: [
      'Direcció General de Protecció Civil — Lleida',
      'DGPEIS — Lleida',
      'A la Direcció General de Protecció Civil, amb la sala secundària a Tarragona',
      'DGPEIS — Tarragona'
    ],
    correctIndex: 2,
    explanation: 'El CECAT depèn de la Direcció General de Protecció Civil (sala principal a Cerdanyola/112 Reus-Bellaterra i sala secundària a Tarragona/Reus).'
  },
  {
    topic: 30,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P53] Per assegurar un forjat que ha quedat penjat sobre un corredor d\'evacuació, quin apuntalament s\'hi ha de muntar i amb quins criteris?',
    options: [
      'Un de vertical, amb sotapont, puntals i jaç de taulons, amb els puntals a menys d\'un metre i entrats en càrrega de manera uniforme',
      'Un de vertical, regulats fins a tornar el forjat a la posició original',
      'Un d\'inclinat a menys d\'1 m',
      'Un d\'inclinat tornant el forjat a la posició original'
    ],
    correctIndex: 0,
    explanation: 'Apuntalament vertical (sotapont + puntals a ≤ 1 m + jaç de taulons), entrats en càrrega uniformement i sense intentar restituir l\'element a la posició original.'
  },
  {
    topic: 3,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P54] Quina de les actuacions següents NO correspon als delegats de prevenció (Llei 31/1995)?',
    options: [
      'Col·laborar amb la direcció en la millora de l\'acció preventiva',
      'Acompanyar els inspectors de Treball en les visites',
      'Demanar a l\'empresari l\'adopció de mesures preventives',
      'Autoritzar les decisions de l\'empresari en matèria preventiva abans que es puguin executar'
    ],
    correctIndex: 3,
    explanation: 'Els delegats de prevenció tenen funcions consultives, de proposta i vigilància, però no d\'autorització prèvia vinculant de les decisions empresarials.'
  },
  {
    topic: 10,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P55] Quina massa d\'òxid de ferro (Fe₂O₃) es forma quan 224 g de ferro s\'oxiden completament segons 4 Fe + 3 O₂ → 2 Fe₂O₃? (M(Fe)=56, M(O)=16)',
    options: ['272 g', '288 g', '320 g', '640 g'],
    correctIndex: 2,
    explanation: 'Mols Fe = 224 / 56 = 4 mol. Per estequiometria (4:2) es formen 2 mol de Fe₂O₃. M(Fe₂O₃) = 2·56 + 3·16 = 160 g/mol. Massa = 2 · 160 = 320 g.'
  },
  {
    topic: 17,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P56] A qui correspon confirmar que totes les unitats han completat el canvi al canal assignat quan s\'ordena la migració de canals?',
    options: [
      'Al responsable de cada grup o sector',
      'Al cap d\'intervenció de tot el dispositiu',
      'A l\'operador de la sala de control territorial',
      'Al conductor de cada vehicle'
    ],
    correctIndex: 0,
    explanation: 'El responsable de cada grup o sector confirma que totes les seves unitats han completat la migració al nou canal.'
  },
  {
    topic: 24,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P57] L\'aigua d\'extinció i els residus sòlids plantegen problemes de contaminació. Quina afirmació NO és correcta?',
    options: [
      'Bona part de l\'aigua no s\'evapora i esdevé residu contaminant',
      'El fibrociment, en no ser combustible, manté estables les fibres d\'amiant i els seus enderrocs es retiren com a runa ordinària',
      'L\'aigua mal gestionada pot contaminar aqüífers i rius',
      'Les partícules tòxiques obliguen a una descontaminació especialitzada'
    ],
    correctIndex: 1,
    explanation: 'Amb la calor d\'un incendi o el trencament, el fibrociment allibera fibres d\'amiant altament cancerígenes i s\'ha de tractar com a residu perillós, mai com a runa ordinària.'
  },
  {
    topic: 6,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P58] Segons la Llei 5/1994, en quin cas es considera que un bomber professional que està lliure de servei es troba en acte de servei?',
    options: [
      'Si intervé en un incendi i ho comunica a la sala abans d\'actuar',
      'Si l\'autoritza el cap de la guàrdia de la regió',
      'Si intervé en un sinistre dins l\'àmbit del seu parc',
      'Si intervé en qualsevol tipus de sinistre, amb l\'acreditació prèvia de la seva condició de personal professional'
    ],
    correctIndex: 3,
    explanation: 'Art. 37.3 Llei 5/1994: si intervé en un sinistre estant lliure de servei amb acreditació prèvia de la seva condició de bomber professional.'
  },
  {
    topic: 18,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P59] Què tenen en comú els vehicles que el Cos de Bombers considera especials?',
    options: [
      'Que s\'activen des de la sala de control territorial',
      'Que la seva conducció exigeix un permís específic',
      'Que no tenen l\'extinció com a funció principal',
      'Que disposen de cisterna d\'aigua de gran capacitat'
    ],
    correctIndex: 2,
    explanation: 'Vehicles especials = vehicles la funció principal dels quals no és l\'extinció directa d\'incendis.'
  },
  {
    topic: 26,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P60] Amb el trànsit ja tallat en una via urbana de doble sentit on crema un turisme, on s\'ha d\'emplaçar l\'autobomba i amb quina orientació?',
    options: [
      'Fora del radi de risc, per davant i en paral·lel',
      'Fora del radi de risc, per darrere del vehicle en el sentit de la circulació i en diagonal',
      'Fora del radi de risc, per davant i en diagonal',
      'Fora del radi de risc, per darrere i en paral·lel'
    ],
    correctIndex: 1,
    explanation: 'Fora del radi de risc, per darrere del vehicle en el sentit de la circulació i en diagonal (efecte escut/protecció).'
  },
  {
    topic: 14,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P61] Sobre un mapa 1:50.000, una dotació mesura un itinerari que fa 3,5 cm per pista i 2,1 cm per corriol. Quina distància real recorre en total?',
    options: ['1.120 m', '1.400 m', '1.750 m', '2.800 m'],
    correctIndex: 3,
    explanation: 'Total sobre mapa = 3,5 + 2,1 = 5,6 cm. 5,6 × 50.000 cm = 280.000 cm = 2.800 m.'
  },
  {
    topic: 19,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P62] Què passa en un vehicle amb diferencial d\'un eix motriu sense possibilitat de bloqueig quan una roda perd adherència?',
    options: [
      'Les dues rodes giren solidàriament',
      'Que tota la força va a la roda que patina',
      'El parell passa a la roda amb més adherència',
      'L\'eix davanter assumeix tota la tracció'
    ],
    correctIndex: 1,
    explanation: 'Sense bloqueig, el diferencial envia tot el moviment a la roda que ofereix menys resistència (la que patina).'
  },
  {
    topic: 34,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P63] Des del marge d\'un riu crescut amb un meandre pronunciat i confluència d\'una riera poc més amunt, on s\'ha de situar el punt de treball i què cal preveure?',
    options: [
      'A la terrassa fluvial del costat interior del meandre, comptant que el cabal es pot multiplicar a l\'aiguabarreig de la riera',
      'Al marge exterior del meandre, comptant que el cabal es multiplica',
      'A la terrassa interior, comptant que la confluència esmorteeix el corrent',
      'Al marge exterior, comptant que esmorteeix el corrent'
    ],
    correctIndex: 0,
    explanation: 'L\'exterior del meandre pateix erosió i risc de col·lapse; cal situar-se a la terrassa fluvial interior, tenint en compte que l\'aiguabarreig multiplica el cabal.'
  },
  {
    topic: 25,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P64] Durant un incendi de vegetació d\'intensitat mitjana, com s\'ha d\'executar una línia de defensa en un dels flancs del perímetre?',
    options: [
      'Eliminant matollar i part de l\'estrat arbori en trams independents',
      'Eliminant matollar i part de l\'estrat arbori en cadena',
      'Franja lineal i contínua fins a sòl mineral en trams independents',
      'Obrint una franja lineal i contínua fins a sòl mineral, en què s\'elimini tot el combustible de superfície, amb les eines manuals i mecàniques treballant en cadena'
    ],
    correctIndex: 3,
    explanation: 'Línia de defensa = franja lineal i contínua fins a sòl mineral eliminant tot el combustible superficial, treballant en cadena (progressió ordenada d\'eines mecàniques i manuals).'
  },
  {
    topic: 12,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P65] Els dispositius de protecció contra sobretensions transitòries que s\'instal·len als quadres porten un indicador visual. Què hi assenyala?',
    options: [
      'Que hi ha hagut una derivació a terra',
      'Que cal substituir el dispositiu',
      'Que la tensió supera el llindar fixat',
      'Que el dispositiu continua operatiu'
    ],
    correctIndex: 1,
    explanation: 'Les sobretensions transitòries tenen vida limitada (varistors): quan esgoten la seva capacitat, l\'indicador visual canvia de color per assenyalar que cal substituir el dispositiu.'
  },
  {
    topic: 16,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P66] En un rescat d\'ascensor amb cabina aturada entre plantes i tensió tallada al quadre de maniobres, què cal fer amb les funcions de seguretat de tall elèctric de maniobra del motor?',
    options: [
      'Activar almenys dues de les tres funcions de tall elèctric de maniobra del motor',
      'Activar només el polsador del fossat',
      'Activar només el tall de porta de planta',
      'Activar només el polsador sobre cabina'
    ],
    correctIndex: 0,
    explanation: 'Per màxima seguretat abans del rescat cal activar almenys dues de les tres funcions de tall elèctric de maniobra (interruptor general, botó stop de cabina/fossat, enclavament de porta).'
  },
  {
    topic: 29,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P67] Amb quina mesura s\'ha de tancar la intervenció per prevenir el desgast psicològic dels equips que han actuat en un IMV?',
    options: [
      'Informe individual de cada bomber',
      'Avaluació mèdica al parc',
      'Canvi de torn immediat',
      'Amb espais de descompressió o d\'atenció emocional'
    ],
    correctIndex: 3,
    explanation: 'Després d\'un IMV cal habilitar espais de descompressió (defusing/debriefing) i atenció emocional per als intervinents.'
  },
  {
    topic: 11,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P68] Una dotació connecta en sèrie, a una font de 30 V, tres receptors de 2 Ω, 3 Ω i 10 Ω. Quina intensitat circula pel circuit?',
    options: ['2 A', '3 A', '15 A', '28 A'],
    correctIndex: 0,
    explanation: 'Rt = 2 + 3 + 10 = 15 Ω. I = V / Rt = 30 / 15 = 2 A.'
  },
  {
    topic: 31,
    difficulty: 'Mitjà',
    question: '[MATAFOCS 3 · P69] El comandament d\'una recerca ha dividit la zona boscosa en sectors i hi assigna equips nombrosos per batre\'ls exhaustivament. De quina manera han d\'avançar?',
    options: [
      'En fila pel centre del sector',
      'En fila pel centre amb extrems marcats',
      'En paral·lel, alineats i separats de manera regular, amb els extrems de la formació marcats amb cintes visibles, solapant els sectors contigus',
      'En paral·lel amb els límits de cada sector marcats'
    ],
    correctIndex: 2,
    explanation: 'Recerca intensiva per sectors: avanç en paral·lel, alineats i separats regularment, marcant els extrems de la formació amb cintes visibles i solapant sectors contigus.'
  },
  {
    topic: 22,
    difficulty: 'Fàcil',
    question: '[MATAFOCS 3 · P70] Què estableix el principi de comandament integrat del SISCOM sobre el lloc des d\'on gestionen la resposta les diferents agències?',
    options: [
      'Des del Centre de Comandament Unificat',
      'Que les agències gestionen la resposta des d\'un únic lloc, el Centre de Comandament Avançat',
      'Cada agència des del seu lloc amb pla compartit',
      'Cada agència des del seu lloc sota direcció del comandament responsable'
    ],
    correctIndex: 1,
    explanation: 'El comandament integrat reuneix els comandaments de les diferents agències en un únic lloc físic (el CCA) amb un pla d\'acció compartit.'
  }
];
