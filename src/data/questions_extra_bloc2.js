/**
 * Banc extra de 200 preguntes noves d'alt nivell — Bloc 2 (Temes 12, 15, 16, 17, 18, 20, 21 i 22).
 * 25 preguntes per tema, fidels als manuals SGO corresponents.
 */
export const QUESTIONS_EXTRA_BLOC2 = [
  {
    "id": "ex-b2-t12-1",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Durant un incendi en una nau industrial amb plaques solars fotovoltaiques connectades a xarxa (on-grid), es talla el subministrament elèctric general del carrer i l'inversor s'atura per protecció anti-illa. Quin risc elèctric persisteix a la coberta en ple dia?",
    "options": [
      "El tram de cablejat en Corrent Continu (DC) des dels panells fins a l'inversor continua en tensió (fins a 1.000–1.500 V DC) mentre hi hagi llum.",
      "Cap risc, perquè la protecció anti-illa desconnecta automàticament les plaques i anul·la tota tensió a la coberta.",
      "Només queda una tensió residual de 48 V DC a l'inversor que es descarrega en menys de 10 segons.",
      "El cablejat en Corrent Altern (AC) cap al quadre general manté 400 V AC fins que s'extreu el fusible de la CGP."
    ],
    "correctIndex": 0,
    "explanation": "Segons el manual MAN.GRAL.007 (Cap. 2.1), en instal·lacions on-grid la protecció anti-illa evita injectar AC a la xarxa, però els panells i els cables DC fins a l'inversor continuen amb tensió (1.000–1.500 V DC) mentre rebin llum."
  },
  {
    "id": "ex-b2-t12-2",
    "topic": 12,
    "difficulty": "Difícil",
    "question": "En una intervenció nocturna amb grup electrògen portàtil de Bombers, per què aquest equip no incorpora un interruptor diferencial convencional com els d'un habitatge?",
    "options": [
      "Perquè genera exclusivament corrent continu a 48 V DC per sota del llindar de seguretat.",
      "Perquè treballa en esquema IT (sense connexió a terra del neutre) i no es tanca el circuit de fuga cap a terra en un primer contacte.",
      "Perquè incorpora un transformador d'alta tensió amb protecció per bimetàl·lic de 300 mA integrada a l'alternador.",
      "Perquè els grups electrògens portàtils només alimenten circuits d'il·luminació exempts de protecció contra contactes indirectes."
    ],
    "correctIndex": 1,
    "explanation": "Els grups electrògens portàtils de Bombers treballen sense connexió a terra del neutre (esquema IT) i per això no porten diferencial convencional (Cap. 2.1)."
  },
  {
    "id": "ex-b2-t12-3",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Observant des de terra una torre elèctrica d'una línia aèria amb 3 cables conductors nus i cadenes d'aïlladors formades per 20 discos de vidre, de quina xarxa i tensió aproximada es tracta?",
    "options": [
      "Xarxa de Distribució en Mitja Tensió (25 kV), operada per e-distribución.",
      "Xarxa de Transport en Alta Tensió (≈ 400 kV), operada per Red Eléctrica de España (REE).",
      "Xarxa de Transport en Alta Tensió (≈ 220 kV), operada per Red Eléctrica de España (REE).",
      "Xarxa de Distribució en Baixa Tensió (400 V), perquè té menys de 25 discos."
    ],
    "correctIndex": 2,
    "explanation": "Aplicant la regla dels 11 kV per disc d'aïllador (Cap. 2.2): 20 discos × 11 kV ≈ 220 kV, que correspon a la xarxa de Transport operada en exclusiva per REE (400 kV serien ≈ 36 discos)."
  },
  {
    "id": "ex-b2-t12-4",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Quin és el paper del cable situat al vèrtex més alt d'una torre d'Alta Tensió de 400 kV de REE?",
    "options": [
      "És el conductor neutre de retorn trifàsic per equilibrar les fases entre subestacions.",
      "És el cable de maniobra per obrir a distància els seccionadors de la torre.",
      "És la línia auxiliar de Mitja Tensió (25 kV) per alimentar els repetidors de telecomunicacions.",
      "És el cable de guarda, que actua com a parallamps connectat a terra sense tensió funcional."
    ],
    "correctIndex": 3,
    "explanation": "A la punta superior de les torres de Transport (220/400 kV) hi ha el cable de guarda, un parallamps connectat a terra sense tensió funcional."
  },
  {
    "id": "ex-b2-t12-5",
    "topic": 12,
    "difficulty": "Difícil",
    "question": "En una línia aèria de distribució urbana amb 4 cables (tres fases i un neutre connectat a terra al Centre de Transformació), quins límits de tensió defineixen la Baixa Tensió (BT) segons el manual?",
    "options": [
      "Fins a 1.000 V en Corrent Altern (AC) i fins a 1.500 V en Corrent Continu (DC).",
      "Fins a 400 V en Corrent Altern (AC) i fins a 750 V en Corrent Continu (DC).",
      "Fins a 36 kV en Corrent Altern (AC) i fins a 3.000 V en Corrent Continu (DC).",
      "Fins a 1.500 V en Corrent Altern (AC) i fins a 1.000 V en Corrent Continu (DC)."
    ],
    "correctIndex": 0,
    "explanation": "Segons el Cap. 2.2 de MAN.GRAL.007, la Baixa Tensió (BT) arriba fins a ≤ 1.000 V en AC (habitual 230/400 V) i ≤ 1.500 V en DC; la Mitja Tensió (MT) va d'1 kV a 36 kV amb 3 cables nus sense neutre."
  },
  {
    "id": "ex-b2-t12-6",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "En un accident ferroviari a la xarxa de FGC o del Metro de Barcelona, quina tensió nominal i quin tipus de corrent trobem a la catenària (o 3r carril al Tren Groc)?",
    "options": [
      "750 V en Corrent Continu (DC).",
      "1.500 V en Corrent Continu (DC).",
      "3.000 V en Corrent Continu (DC).",
      "25.000 V en Corrent Altern (AC)."
    ],
    "correctIndex": 1,
    "explanation": "Taula 2.1.4.1: TRAM = 750 V DC; Metro i FGC = 1.500 V DC; ADIF convencional = 3.000 V DC; AVE/TGV = 25.000 V AC (50 Hz)."
  },
  {
    "id": "ex-b2-t12-7",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Quin sistema ferroviari a Catalunya és l'únic que utilitza Corrent Altern (AC, 50 Hz) i presenta un risc elevat d'arc elèctric a distància sense tocar el fil?",
    "options": [
      "La xarxa convencional de Rodalies d'ADIF (3.000 V).",
      "El Tramvia de Barcelona (TRAM).",
      "L'Alta Velocitat (AVE / TGV) a 25.000 V (25 kV).",
      "Les línies subterrànies de FGC amb catenària rígida."
    ],
    "correctIndex": 2,
    "explanation": "L'AVE/TGV opera a 25.000 V (25 kV) en Corrent Altern (AC, 50 Hz), l'únic en AC de la taula ferroviària, amb risc d'arc elèctric a distància."
  },
  {
    "id": "ex-b2-t12-8",
    "topic": 12,
    "difficulty": "Difícil",
    "question": "En una casa unifamiliar adossada amb un sol usuari, quins elements de la instal·lació d'enllaç desapareixen en utilitzar una CPM (Caixa de Protecció i Mesura)?",
    "options": [
      "Desapareixen la Derivació Individual (DI) i l'Interruptor General Automàtic (IGA).",
      "Desapareix únicament la presa de terra (PE) perquè s'integra dins el comptador.",
      "Desapareixen l'escomesa de la companyia i el quadre general interior del domicili.",
      "Desapareixen la Línia General d'Alimentació (LGA) i l'Interruptor General de Maniobra (IGM)."
    ],
    "correctIndex": 3,
    "explanation": "Amb 1 o 2 usuaris s'instal·la una CPM al mur exterior que fusiona CGP i comptador, de manera que no hi ha LGA ni IGM (l'IGM només és obligatori quan hi ha > 2 usuaris)."
  },
  {
    "id": "ex-b2-t12-9",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Dins d'un Petit Interruptor Automàtic (PIA / magnetotèrmic) del quadre interior d'un habitatge, quin mecanisme intern dispara davant d'una sobrecàrrega lenta i quin davant d'un curtcircuit?",
    "options": [
      "Sobrecàrrega = làmina bimetàl·lica (tèrmica, per dilatació) | Curtcircuit = electroimant (magnètic, instantani).",
      "Sobrecàrrega = electroimant (magnètic) | Curtcircuit = làmina bimetàl·lica (tèrmica).",
      "Tots dos defectes els detecta exclusivament una bobina diferencial toroïdal.",
      "Sobrecàrrega = fusible calibrat d'un sol ús | Curtcircuit = varistor de sobretensions."
    ],
    "correctIndex": 0,
    "explanation": "Al magnetotèrmic (PIA), la làmina bimetàl·lica actua per efecte tèrmic en sobrecàrregues lentes i l'electroimant actua instantàniament davant d'un curtcircuit."
  },
  {
    "id": "ex-b2-t12-10",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Quines són les sensibilitats reglamentàries de l'Interruptor Diferencial (ID) segons l'ús de la instal·lació (habitatge estàndard, zones humides/jacuzzi i indústria/enllumenat públic)?",
    "options": [
      "Habitatge: 10 mA | Zones humides: 30 mA | Indústria: 1.000 mA.",
      "Habitatge: 30 mA | Zones humides/jacuzzi: 10 mA | Indústria/enllumenat públic: 100 o 300 mA.",
      "Habitatge: 300 mA | Zones humides: 30 mA | Indústria: 10 mA.",
      "Tots els diferencials d'edificis i indústries estan tarats a 30 mA sense excepció."
    ],
    "correctIndex": 1,
    "explanation": "Taula 2.2.7–2.3: ID de 30 mA en habitatges, 10 mA en zones humides/jacuzzis i 100 o 300 mA en indústria i enllumenat públic."
  },
  {
    "id": "ex-b2-t12-11",
    "topic": 12,
    "difficulty": "Difícil",
    "question": "Al quadre interior d'un habitatge, quina anomalia específica provoca el tret del protector contra sobretensions permanents?",
    "options": [
      "Un llamp caigut a la xarxa de distribució exterior (pic instantani).",
      "Una fuga de corrent a terra superior a 30 mA a la rentadora.",
      "Un tall del conductor neutre a la xarxa o instal·lació d'enllaç.",
      "La connexió simultània del forn i l'assecadora superant la potència de l'ICP."
    ],
    "correctIndex": 2,
    "explanation": "Taula 2.2.7–2.3: les sobretensions transitòries provenen de llamps o maniobres (derivades a terra), mentre que les sobretensions permanents es produeixen per un tall de neutre."
  },
  {
    "id": "ex-b2-t12-12",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Un bomber comprova un cable sospitós amb un detector de tensió sense contacte (tipus llapis) i l'aparell NO pita. Quina conclusió operativa és correcta?",
    "options": [
      "Pot manipular el cable sense guants dielèctrics perquè s'ha verificat l'absència total de tensió.",
      "Significa que la presa de terra funciona correctament i el diferencial ha bloquejat el circuit.",
      "Només garanteix que no hi ha Baixa Tensió, però pot haver-hi Alta Tensió de 220 kV.",
      "No garanteix al 100% l'absència de tensió, ja que no detecta Corrent Continu (DC) ni cables apantallats o molt humits."
    ],
    "correctIndex": 3,
    "explanation": "Segons el Cap. 2.4, el detector sense contacte si pita confirma tensió, però si NO pita NO garanteix al 100% l'absència de tensió (no detecta DC ni cables apantallats o molt humits)."
  },
  {
    "id": "ex-b2-t12-13",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Com s'ha d'utilitzar correctament una pinça amperimètrica per mesurar la intensitat de corrent (I) que circula per un circuit trifàsic o monofàsic?",
    "options": [
      "Abraçant amb la pinça UN sol conductor sense tallar-lo ni pelar-lo.",
      "Connectant les dues puntes de prova en paral·lel entre la fase i el neutre.",
      "Abraçant amb la pinça tota la mànega completa (fases i neutre junts).",
      "Desconnectant primer la presa de terra i mesurant en sèrie amb el PIA."
    ],
    "correctIndex": 0,
    "explanation": "La pinça amperimètrica mesura la intensitat (I) abraçant UN sol conductor sense tallar-lo (si abraça fase i neutre alhora els camps magnètics s'anul·len)."
  },
  {
    "id": "ex-b2-t12-14",
    "topic": 12,
    "difficulty": "Difícil",
    "question": "Dins l'aplicació estricta de les 5 Regles d'Or per treballar sense tensió, quina acció correspon exactament a la 2a Regla i quina a la 4a Regla?",
    "options": [
      "2a: Verificar l'absència de tensió | 4a: Protegir i senyalitzar la zona.",
      "2a: Prevenir qualsevol realimentació (bloquejar/enclavar) | 4a: Posar a terra i en curtcircuit totes les fases.",
      "2a: Posar a terra i en curtcircuit | 4a: Desconnectar les fonts d'alimentació.",
      "2a: Desconnectar les fonts | 4a: Verificar l'absència de tensió amb detector."
    ],
    "correctIndex": 1,
    "explanation": "Ordre estricte (D-P-V-P-P): 1a Desconnectar → 2a Prevenir realimentació (enclavar/bloquejar/guardar fusibles) → 3a Verificar absència de tensió → 4a Posar a terra i en curtcircuit → 5a Protegir i senyalitzar."
  },
  {
    "id": "ex-b2-t12-15",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Respecte a l'equipament dielèctric de Bombers (Cap. 2.6), quina afirmació sobre les eines, guants i escales és correcta?",
    "options": [
      "Els guants d'intervenció de cuir habituals ofereixen aïllament fins a 440 V igual que el casc.",
      "La perxa de salvament es pot agafar per davant de l'anell de guarda si es porten botes de goma.",
      "Les eines manuals dielèctriques (taronges/vermelles) estan aïllades fins a 1.000 V i prop de cables cal usar escales de fibra de vidre (mai d'alumini).",
      "El casc d'intervenció pesant està certificat com a aïllant fins a 25.000 V per treballar sota catenària AVE."
    ],
    "correctIndex": 2,
    "explanation": "Eines manuals dielèctriques fins a 1.000 V; escales de fibra de vidre prop de cables (mai alumini); casc certificat fins a 440 V; guants de cuir o tèxtils NO són aïllants (calen guants dielèctrics de làtex)."
  },
  {
    "id": "ex-b2-t12-16",
    "topic": 12,
    "difficulty": "Difícil",
    "question": "A la base de cada muntant ascendent d'aigua potable d'un edifici, quins tres elements hi trobem i quin element hi ha a la part superior de tot de l'edifici?",
    "options": [
      "A la base: filtre Y, comptador i aixeta de prova | A dalt: clau de pas general.",
      "A la base: manòmetre i vàlvula de seguretat a 10 bar | A dalt: filtre de malla de 50 μm.",
      "A la base: regulador de pressió a 20 mbar i sifó | A dalt: cambra de descàrrega.",
      "A la base: 1) vàlvula de retenció, 2) clau de tall i 3) aixeta de buidatge | A dalt: vàlvula purgadora d'aire."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 3.1: a la base de cada muntant hi ha vàlvula de retenció, clau de tall i aixeta de buidatge, i dalt de tot de l'edifici una vàlvula purgadora d'aire."
  },
  {
    "id": "ex-b2-t12-17",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Dins l'armari del comptador general d'aigua potable, quina funció té el filtre tipus Y i quina és la seva ubicació en el sentit de pas de l'aigua?",
    "options": [
      "Reté sorres amb una malla d'acer inoxidable de 25 a 50 μm i va just després de la clau de tall general (abans del comptador).",
      "Impedeix el retorn d'aigua cap a la xarxa pública i va just després de l'aixeta de prova.",
      "Regula la pressió d'entrada a 2 bar i va situat a la sortida final després de la vàlvula de retenció.",
      "Reté partícules de més de 5 mm i va instal·lat a la coberta al costat del purgador d'aire."
    ],
    "correctIndex": 0,
    "explanation": "Ordre a l'armari (Cap. 3.1): 1. Clau tall → 2. Filtre Y (malla inoxidable 25–50 μm) → 3. Comptador → 4. Aixeta prova → 5. Vàlvula retenció → 6. Clau sortida."
  },
  {
    "id": "ex-b2-t12-18",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "En una xarxa de sanejament, quina alçada mínima de tap d'aigua manté un sifó hidràulic i quin requisit de connexió han de complir les arquetes de pas i sifòniques?",
    "options": [
      "Tap d'aigua de 15 cm | Arquetes amb fins a 3 col·lectors per cara en angle agut de 45°.",
      "Tap d'aigua de 5 cm | Arquetes amb màxim 1 col·lector d'entrada per cara i angle entre entrada i sortida > 90°.",
      "Tap d'aigua d'1 cm | Arquetes amb angle exacte de 90° per frenar el cabal.",
      "Tap d'aigua de 25 cm | Arquetes situades sempre per sobre de les canonades d'aigua potable."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 3.2: el sifó hidràulic reté un tap permanent de 5 cm; les arquetes admeten màxim 1 col·lector d'entrada per cara i l'angle entre entrada i sortida ha de ser > 90°."
  },
  {
    "id": "ex-b2-t12-19",
    "topic": 12,
    "difficulty": "Difícil",
    "question": "En una intervenció en clavegueram urbà, quines són les especificacions reglamentàries de les sortides de ventilació i dels col·lectors soterrats?",
    "options": [
      "Ventilació cada 250 m, alçada ≥ 6 m i diàmetre < 10 cm | Col·lectors al mateix nivell que l'aigua potable, pendent ≥ 1% i registres cada 50 m.",
      "Ventilació cada 100 m, alçada ≥ 3 m i diàmetre ≥ 30 cm | Col·lectors per sobre de l'aigua potable, pendent ≥ 5% i registres cada 25 m.",
      "Ventilació cada 250 m, alçada ≥ 9 m i diàmetre < 20 cm | Col·lectors per sota de l'aigua potable, pendent ≥ 2% i registres cada 15 m.",
      "Ventilació cada 500 m, alçada ≥ 9 m i diàmetre > 20 cm | Col·lectors per sota de l'aigua potable, pendent ≥ 0,5% i registres cada 15 m."
    ],
    "correctIndex": 2,
    "explanation": "Dades literals del Cap. 3.2: ventilació cada 250 m a ≥ 9 m d'alçada i Ø < 20 cm; col·lectors sempre per sota de l'aigua potable, pendent ≥ 2% i registres cada 15 m."
  },
  {
    "id": "ex-b2-t12-20",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Davant d'una fuita de gas en un local tancat, quina diferència de comportament i composició existeix entre el Gas Natural (GN) i els GLP (Butà/Propà)?",
    "options": [
      "El GN (90–95% metà CH₄) és més pesant que l'aire i s'acumula a terra; el GLP és més lleuger i puja al sostre.",
      "El GN s'emmagatzema en bombones UD-125 de 12,5 kg i el GLP es distribueix en xarxa urbana a 20 mbar sense odorització.",
      "Tots dos gasos són inodors per llei i més pesants que l'aire, acumulant-se sempre als embornals.",
      "El GLP (Butà/Propà, bombona UD-125 = 12,5 kg) és més pesant que l'aire i s'acumula a soterranis/parts baixes; el GN (90–95% CH₄) és més lleuger que l'aire i puja."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 4.1: els GLP (butà/propà; UD-125 = 12,5 kg) són més pesants que l'aire; el Gas Natural (90–95% CH₄, odoritzat amb mercaptans THT) és més lleuger que l'aire."
  },
  {
    "id": "ex-b2-t12-21",
    "topic": 12,
    "difficulty": "Difícil",
    "question": "En una inspecció d'un incendi d'habitatge, detectem una canonada de polietilè (PE) de color groc passant vista per l'interior d'un fals sostre. Per què és irregular i quin material s'exigeix a l'interior?",
    "options": [
      "El polietilè (PE) només està autoritzat per a xarxes ENTERRADES exteriors i és prohibit a l'interior d'edificis perquè es fon amb el foc; a l'interior s'usa coure o acer inoxidable.",
      "El polietilè (PE) només és vàlid a l'interior si va sense beina; el coure està prohibit en instal·lacions vistes interiors.",
      "El polietilè (PE) groc només es pot usar en Alta Pressió B (> 16 bar) dins de sales de calderes.",
      "No és irregular sempre que el tram vist dins el fals sostre no superi 1,5 metres de longitud."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 4.1–4.2: el polietilè (PE) groc/taronja és EXCLUSIU per a xarxes enterrades exteriors (prohibit dins d'edificis); a l'interior s'empra coure o acer inoxidable (embeinats en acer ventilat si travessen falsos sostres/cambres/murs)."
  },
  {
    "id": "ex-b2-t12-22",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Quin rang de pressió correspon a la xarxa de transport secundari de gas, a l'Alta Pressió B (APB) i a l'Alta Pressió A (APA)?",
    "options": [
      "Transport secundari: > 60 bar | APB: > 16–45 bar | APA: > 4–16 bar.",
      "Transport secundari: 16 a 60 bar | APB: > 16 a 45 bar | APA: > 4 a 16 bar.",
      "Transport secundari: 4 a 16 bar | APB: > 0,4 a 4 bar | APA: > 0,05 a 0,4 bar.",
      "Transport secundari: > 60 bar | APB: > 45 a 60 bar | APA: > 16 a 45 bar."
    ],
    "correctIndex": 1,
    "explanation": "Taula 4.2: Transport Bàsica > 60 bar; Transport Secundari 16 a 60 bar; APB > 16 fins a 45 bar; APA > 4 fins a 16 bar; MPB > 0,4 a 4 bar; MPA > 0,05 a 0,4 bar; BP ≤ 0,05 bar."
  },
  {
    "id": "ex-b2-t12-23",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Quin és l'ordre exacte de les 6 claus de tall d'una instal·lació de gas natural des del carrer fins al fogó de la cuina?",
    "options": [
      "1. Edifici → 2. Escomesa → 3. Usuari → 4. Muntant → 5. Comptador → 6. Aparell.",
      "1. Escomesa → 2. Muntant col·lectiu → 3. Edifici → 4. Comptador → 5. Usuari → 6. Aparell.",
      "1. Escomesa → 2. Edifici → 3. Muntant col·lectiu → 4. Usuari → 5. Comptador → 6. Connexió d'aparell.",
      "1. Comptador → 2. Escomesa → 3. Edifici → 4. Usuari → 5. Muntant → 6. Aparell."
    ],
    "correctIndex": 2,
    "explanation": "Seqüència oficial del Cap. 4.2: 1. Escomesa (G1/2) → 2. Edifici (G2/3) → 3. Muntant col·lectiu (G2/3) → 4. Usuari (G2) → 5. Comptador → 6. Connexió d'aparell (G1)."
  },
  {
    "id": "ex-b2-t12-24",
    "topic": 12,
    "difficulty": "Difícil",
    "question": "En arribar a un edifici per tallar la clau d'edifici de gas, ens informen que té Accessibilitat de Grau 3. Què implica operacionalment això per a la dotació?",
    "options": [
      "Que la clau és a la vorera a l'abast de la mà sense armari ni pany (accés immediat).",
      "Que cal obrir un armari amb clau normalitzada de companyia des de la zona comuna, sense necessitat d'escala.",
      "Que només es pot tallar mitjançant vàlvula soterrada a la calçada amb equips de perforació pneumàtica.",
      "Que per accedir-hi cal utilitzar una escala portàtil o entrar en una propietat o zona privada."
    ],
    "correctIndex": 3,
    "explanation": "Grau 1 = accés directe sense clau ni escala; Grau 2 = dins armari/arqueta amb clau normalitzada sense escala; Grau 3 = cal utilitzar escala o entrar en zona privada."
  },
  {
    "id": "ex-b2-t12-25",
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "Quina diferència fonamental de seguretat hi ha entre un aparell a gas de circuit obert (com una estufa catalítica o cuina antiga) i un de circuit estanc (caldera moderna)?",
    "options": [
      "El de circuit obert agafa l'O₂ del propi local (risc d'intoxicació per CO sense ventilació), mentre que el de circuit estanc té cambra hermètica amb tub concèntric que agafa l'aire de fora i treu els fums fora.",
      "El de circuit obert funciona sempre a Mitja Pressió B (4 bar) i el de circuit estanc a 20 mbar.",
      "El de circuit estanc no necessita evacuació de fums encara que superi els 4,7 kW de potència.",
      "El de circuit obert utilitza exclusivament gas natural i el de circuit estanc només pot cremar GLP."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 4.1–4.2: els aparells de circuit obert consumeixen l'O₂ de l'estança (risc de CO), mentre que els de circuit estanc tenen cambra hermètica amb tub concèntric cap a l'exterior."
  },
  {
    "id": "ex-b2-t15-1",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Dins la classificació de les accions sobre un edifici (Cap. 2.1 de MAN.GRAL.006), a quin grup pertanyen respectivament el pes dels paviments, la sobrecàrrega de neu i l'ona expansiva d'una explosió?",
    "options": [
      "Paviments: Permanent | Neu: Variable | Explosió: Accidental.",
      "Paviments: Variable | Neu: Permanent | Explosió: Accidental.",
      "Paviments: Permanent | Neu: Accidental | Explosió: Variable.",
      "Totes tres són accions variables perquè poden modificar-se al llarg de la vida útil de l'immoble."
    ],
    "correctIndex": 0,
    "explanation": "Accions Permanents = pes propi d'estructura, forjats, murs i paviments; Variables = sobrecàrrega d'ús, vent, neu i variacions tèrmiques; Accidentals = incendi, explosió, impacte o sisme."
  },
  {
    "id": "ex-b2-t15-2",
    "topic": 15,
    "difficulty": "Difícil",
    "question": "En una biga en voladís (mènsula o balcó encastat a la façana), on apareix l'esforç de tracció i on s'han de col·locar les barres principals d'acer del formigó armat?",
    "options": [
      "La tracció apareix a la cara INFERIOR i l'acer es col·loca a BAIX, igual que en una biga recolzada als dos extrems.",
      "La tracció apareix a la cara SUPERIOR arran del mur i les barres d'acer s'han de col·locar a DALT.",
      "Un balcó en voladís només treballa a compressió pura i no requereix armadura d'acer.",
      "La tracció apareix exclusivament a la punta lliure exterior i l'acer es col·loca en vertical."
    ],
    "correctIndex": 1,
    "explanation": "En una biga recolzada als dos extrems la tracció és a baix (acer a baix), però en un balcó o mènsula en voladís s'estira la cara superior (l'esquerda s'obriria per dalt), per tant l'acer va a DALT."
  },
  {
    "id": "ex-b2-t15-3",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Quin esforç mecànic actua sobre una biga perimetral o de vora quan la càrrega d'un forjat lateral tendeix a fer-la girar sobre el seu propi eix longitudinal?",
    "options": [
      "Vinclament (o pandeig).",
      "Compressió axial pura.",
      "Torsió.",
      "Tracció pura."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 2.2: la torsió són forces que retorcen la peça al voltant del seu eix longitudinal, típica de bigues perimetrals o de vora."
  },
  {
    "id": "ex-b2-t15-4",
    "topic": 15,
    "difficulty": "Difícil",
    "question": "Durant un incendi en una nau industrial amb pilars metàl·lics esvelts d'acer estructural, a partir de quina temperatura aproximada perd rigidesa l'acer i s'accelera dràsticament el risc de vinclament?",
    "options": [
      "A partir de > 200 °C.",
      "L'acer no perd rigidesa amb la temperatura fins al punt de fusió (1.500 °C).",
      "Només a partir de > 1.200 °C.",
      "A partir de > 500 °C."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 2.2 i Taula 2.3: l'acer estructural resisteix 3.000–7.500 kg/cm² a tracció i 2.800–>7.000 kg/cm² a compressió, però a > 500 °C perd rigidesa i pateix vinclament ràpid."
  },
  {
    "id": "ex-b2-t15-5",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Segons la Taula de tensions de ruptura del Cap. 2.3 de MAN.GRAL.006, quina és la resistència aproximada de la fusta estructural (en el sentit de les fibres) i de la fàbrica de maó?",
    "options": [
      "Fusta: Tracció 700–900 kg/cm², Compr. 400–700 kg/cm² | Maó: Tracció < 10 kg/cm², Compr. fins a 300 kg/cm².",
      "Fusta: Tracció < 25 kg/cm², Compr. 1.000 kg/cm² | Maó: Tracció 3.000 kg/cm², Compr. 3.000 kg/cm².",
      "Fusta: Tracció 3.000–7.500 kg/cm², Compr. 2.800 kg/cm² | Maó: Tracció 700 kg/cm², Compr. 400 kg/cm².",
      "Fusta: Tracció < 10 kg/cm², Compr. 300 kg/cm² | Maó: Tracció 700–900 kg/cm², Compr. 1.000 kg/cm²."
    ],
    "correctIndex": 0,
    "explanation": "Taula 2.3: Fusta = 700–900 kg/cm² tracció i 400–700 kg/cm² compressió; Maó = < 10 kg/cm² tracció (pràcticament nul·la) i fins a 300 kg/cm² compressió."
  },
  {
    "id": "ex-b2-t15-6",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Per què en un incendi estructural una biga gruixuda de fusta massissa conserva la seva capacitat portant durant més temps del que suggereix la seva combustibilitat?",
    "options": [
      "Perquè la fusta és un material incombustible segons l'escala de tensions de ruptura.",
      "Perquè crema lentament creant una capa exterior de carbó que protegeix i aïlla tèrmicament el nucli intern.",
      "Perquè amb la calor la fusta s'expandeix i augmenta la seva resistència a compressió fins a 3.000 kg/cm².",
      "Perquè les bigues de fusta només treballen a compressió i mai pateixen flexió."
    ],
    "correctIndex": 1,
    "explanation": "Taula 2.3 i Bloc Easy: la fusta estructural crema lentament formant una crosta/capa de carbó protectora que retarda la pèrdua de resistència del nucli."
  },
  {
    "id": "ex-b2-t15-7",
    "topic": 15,
    "difficulty": "Difícil",
    "question": "En una edificació antiga observem revestiments interiors que han entrat en contacte amb aigua i presenten corrosió severa en elements metàl·lics propers. Quin conglomerant provoca aquest efecte i quina és la seva variació volumètrica en endurir-se?",
    "options": [
      "La calç, que té retracció i oxida el ferro.",
      "El ciment hidràulic, que és expansiu i només serveix per a interiors secs.",
      "El guix (conglomerant aeri), que és expansiu, es dissol amb l'aigua i oxida el ferro.",
      "El morter de calç i sorra, que té baixa flexibilitat i es dissol amb la humitat."
    ],
    "correctIndex": 2,
    "explanation": "Taula 3.1: el guix és un conglomerant aeri expansiu, de baixa resistència i baixa flexibilitat, que es dissol amb l'aigua i oxida el ferro (només per a revestiments i envans interiors)."
  },
  {
    "id": "ex-b2-t15-8",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Quin conglomerant és neutre en volum (sense retracció ni expansió), té alta flexibilitat i s'utilitza en arrebossats exteriors transpirables perquè no s'esquerdin?",
    "options": [
      "El guix.",
      "La pasta de formigó.",
      "El ciment Portland.",
      "La calç."
    ],
    "correctIndex": 3,
    "explanation": "Taula 3.1: la calç és neutra (sense variació de volum), de resistència mitja i flexibilitat alta, ideal per a morters tradicionals i arrebossats exteriors transpirables."
  },
  {
    "id": "ex-b2-t15-9",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "En la terminologia de les peces ceràmiques (maons), com s'anomenen les 3 dimensions i les 3 cares d'un maó?",
    "options": [
      "Dimensions: Llarg (soga), Través (tizón) i Gruix (canto) | Cares: Pla (tabla), Cantell (canto) i Cap o Testa.",
      "Dimensions: Pla, Soga i Testa | Cares: Llarg, Través i Jàssera.",
      "Dimensions: Àbac, Revoltó i Bigueta | Cares: Llarg, Mig peu i Un peu.",
      "Dimensions: Soga, Cap i Cantell | Cares: Pasta, Morter i Formigó."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 3.2: les 3 dimensions són Llarg (soga), Través (tizón, la meitat del llarg menys 1 cm de junta) i Gruix (canto); les 3 cares són Pla (tabla), Cantell (canto) i Cap o Testa."
  },
  {
    "id": "ex-b2-t15-10",
    "topic": 15,
    "difficulty": "Difícil",
    "question": "Des de l'exterior d'un edifici construït amb maó de Format Català (30 × 15 cm), veiem una paret on només apareixen a la vista les cares curtes (caps) de 15 cm. Quin tipus i gruix de paret estem observant?",
    "options": [
      "Un envà no estructural de maó de pla de 4 a 10 cm de gruix.",
      "Un mur de càrrega d'1 peu de 30 cm de gruix.",
      "Una paret de mig peu de 15 cm de gruix.",
      "Un mur cortina de xapa col·laborant de 60 cm."
    ],
    "correctIndex": 1,
    "explanation": "Si es veuen els caps (15 cm) a la vista, el maó entra cap a dins de la paret amb tota la seva llargada (30 cm), formant un mur de càrrega d'1 peu (30 cm). Si es veuen els cantells de 30 cm, és paret de mig peu (15 cm)."
  },
  {
    "id": "ex-b2-t15-11",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Quin és el gruix real aproximat d'un maó de Format Català i d'un maó de Format Castellà, tenint en compte la junta d'1 cm respecte de la mida modulada?",
    "options": [
      "Català: ~24 × 11,5 × 5 cm | Castellà: ~29 × 14 × 6 cm.",
      "Català: ~30 × 15 × 10 cm | Castellà: ~25 × 12,5 × 8 cm.",
      "Català: ~29 × 14 × 6 (o 5) cm | Castellà: ~24 × 11,5 × 5 cm.",
      "Català: ~35 × 17,5 × 7 cm | Castellà: ~20 × 10 × 4 cm."
    ],
    "correctIndex": 2,
    "explanation": "Taula 3.2: Format Català modulat 30 × 15 cm (mida real ≈ 29 × 14 × 6 o 5 cm); Format Castellà modulat 25 × 12,5 cm (mida real ≈ 24 × 11,5 × 5 cm)."
  },
  {
    "id": "ex-b2-t15-12",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Dins dels materials aïllants emprats en edificació (Cap. 3), quina diferència crítica de comportament al foc hi ha entre la perlita/llana de roca i el poliuretà (PU) / poliestirè (XPS/EPS)?",
    "options": [
      "Només la vermiculita és combustible si s'aplica sobre perfils d'acer laminat HEB.",
      "El PU i l'EPS són incombustibles i la llana de roca crema ràpidament propagant flames per la façana.",
      "Tots els aïllants tèrmics actuals tenen la mateixa classificació d'incombustibilitat davant d'un incendi.",
      "La llana de roca, llana de vidre, perlita i vermiculita són incombustibles o ignífugs, mentre que les escumes PU, XPS i EPS són molt combustibles."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 3 (nota Taula i Bloc mnemotècnic): els aïllants minerals (llana de roca/vidre, perlita, vermiculita) són incombustibles/ignífugs, mentre que les escumes sintètiques (PU, XPS, EPS) són molt combustibles."
  },
  {
    "id": "ex-b2-t15-13",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Quina diferència hi ha entre els perfils metàl·lics IPE/IPN i el perfil HEB, segons el seu ús estructural habitual?",
    "options": [
      "Els perfils HEB tenen secció ampla en forma de H (típics per a pilars), mentre que IPN/IPE són més esbelts per a bigues.",
      "Els perfils HEB són angulars en forma de L exclusius per a encavallades de fusta.",
      "Els perfils UPN s'usen només per a fonaments profunds a més de 3 metres.",
      "No hi ha cap diferència de secció; HEB és simplement el nom antic dels perfils UPN."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 3: els perfils d'acer laminat inclouen IPN, IPE, HEB (de secció en H per a pilars), UPN, L angular, T i xapa col·laborant."
  },
  {
    "id": "ex-b2-t15-14",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Quin tipus de fonamentació utilitzem quan el terreny ferm es troba a > 3 metres de profunditat i quins elements en formen part?",
    "options": [
      "Fonaments superficials: sabates aïllades, sabates corregudes, lloses de fonamentació i bigues de lligam.",
      "Fonaments profunds: pilots i micropilots (per punta o fregament), murs pantalla i murs de contenció.",
      "Fonaments mixtos: encepats superficials a 1 metre amb revoltons ceràmics.",
      "Fonaments unitaris: murs de càrrega de 20 cm recolzats directament sobre grava."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 4.1: Superficials (≤ 3 m: sabates, lloses, encepats, bigues de lligam/centradores) vs. Profunds (> 3 m: pilots, micropilots, murs pantalla i murs de contenció)."
  },
  {
    "id": "ex-b2-t15-15",
    "topic": 15,
    "difficulty": "Difícil",
    "question": "Quina funció tenen les bigues de lligam (o centradores) i els encepats dins d'una fonamentació?",
    "options": [
      "Són elements horitzontals de coberta que sostenen les encavallades de fusta laminada.",
      "Els encepats són pantalles verticals al nucli d'ascensors per resistir el vent i el sisme.",
      "Les bigues de lligam uneixen sabates o encepats entre si a nivell de fonamentació per evitar desplaçaments diferencials.",
      "Són les bigues mestres de planta baixa que recullen directament les biguetes del forjat superior."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 4.1 i Taula 4: les sabates i encepats s'uneixen mitjançant bigues de lligam (o centradores) a nivell de fonamentació."
  },
  {
    "id": "ex-b2-t15-16",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Dins dels elements verticals portants d'un edifici modern (Cap. 4.2), què són les pantalles estructurals i les pilastres?",
    "options": [
      "Pantalles = tancaments lleugers de vidre (mur cortina) | Pilastres = cables tensors d'encavallada.",
      "Pantalles = envans no portants de 4 cm | Pilastres = sabates aïllades a menys de 3 metres.",
      "Pantalles = bigues mestres de formigó pretensat | Pilastres = biguetes amb revoltó ceràmic.",
      "Pantalles = murs de formigó armat contra vent i sisme (nucli d'escales/ascensors) | Pilastres = pilars adossats a un mur."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 4.2: les pantalles estructurals són murs de formigó armat al nucli d'escales/ascensors contra vent i sisme, i les pilastres són pilars adossats a un mur."
  },
  {
    "id": "ex-b2-t15-17",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Quin gruix habitual presenten els murs de càrrega tradicionals (de pedra, tàpia, maó massís o bloc) enfront d'un envà interior de maó de pla?",
    "options": [
      "Murs de càrrega: 20 a 60 cm | Envans de maó de pla: 4 a 10 cm.",
      "Murs de càrrega: 4 a 10 cm | Envans: 20 a 60 cm.",
      "Murs de càrrega: 100 a 150 cm | Envans: 15 a 30 cm.",
      "Tots dos tenen el mateix gruix de 15 cm però varia el tipus de morter."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 3.2 i 4.2: els murs de càrrega tenen gruixos de 20 a 60 cm, mentre que un envà de maó de pla té de 4 a 10 cm."
  },
  {
    "id": "ex-b2-t15-18",
    "topic": 15,
    "difficulty": "Difícil",
    "question": "En una intervenció dins d'un edifici antic amb deformacions visibles al sostre, per què és perillós enderrocar sense comprovació prèvia un envà interior de 6 cm que teòricament no és estructural?",
    "options": [
      "Perquè tots els envans antics de 6 cm formen part del nucli de pantalles sísmiques.",
      "Perquè si l'edifici ha cedit o fletxat, el forjat superior pot estar recolzant accidentalment sobre l'envà (haver entrat en càrrega) i baixar de cop en enderrocar-lo.",
      "Perquè els envans de maó de pla treballen a tracció pura i aguanten la façana cap a fora.",
      "Perquè contenen sempre armadures de formigó pretensat sota tensió."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 4.4: en edificis antics que han cedit, un envà no estructural pot haver entrat en càrrega accidentalment i el seu enderroc brusc pot fer baixar el forjat superior."
  },
  {
    "id": "ex-b2-t15-19",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Què diferencia una Jàssera d'una Biga convencional dins dels elements horitzontals portants d'un edifici?",
    "options": [
      "La jàssera és una bigueta secundària de fusta i la biga és un element vertical de fonamentació.",
      "La jàssera només existeix en fonaments profunds a > 3 metres i la biga només en cobertes.",
      "La jàssera és la biga mestra principal de gran cantell que recull altres bigues per salvar grans obertures i portar el pes als pilars.",
      "La biga treballa a torsió i la jàssera exclusivament a compressió pura."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 4.3: les bigues recullen les biguetes del forjat, i les jàsseres són les bigues mestres principals de gran cantell que recullen altres bigues per transmetre el pes als pilars."
  },
  {
    "id": "ex-b2-t15-20",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Segons el Principi de Jerarquia Estructural (Cap. 5.3), quina d'aquestes fallades provoca un col·lapse més global i greu de l'edifici?",
    "options": [
      "La fallada d'una bigueta d'un forjat a la tercera planta.",
      "La fallada d'un revoltó ceràmic entre dues biguetes.",
      "La fallada d'un envà de maó de pla en un edifici modern de sistema separat.",
      "La fallada d'una jàssera o d'un pilar de planta baixa, perquè es troben més avall en la cadena de transmissió de càrregues."
    ],
    "correctIndex": 3,
    "explanation": "Cadena: Biguetes → Bigues → Jàsseres → Pilars/Murs → Fonaments → Terreny. Com més avall a la cadena es troba l'element, més pisos en depenen i més global és el col·lapse."
  },
  {
    "id": "ex-b2-t15-21",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Quin rang de llums caracteritza els sistemes constructius Unitari (murs de càrrega) i Separat (pilars i forjats), i a partir de quina llum s'utilitzen pòrtics o encavallades?",
    "options": [
      "Unitari i Separat: llums petites de 4 a 8 m | Pòrtics/encavallades: grans llums > 8 m.",
      "Unitari i Separat: llums de 15 a 25 m | Pòrtics: llums < 3 m.",
      "Unitari: < 2 m | Separat: 10 a 20 m | Pòrtics: > 50 m.",
      "Unitari: 3,5 a 4,5 m | Separat: > 8 m | Pòrtics: 4 a 8 m."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 5.4–5.5: tant el sistema Unitari com el Separat cobreixen llums petites de 4 a 8 m (tot i que la casa de cos concreta fa 3,5–4,5 m entre mitgeres), i per a grans llums (> 8 m) s'empren pòrtics o encavallades."
  },
  {
    "id": "ex-b2-t15-22",
    "topic": 15,
    "difficulty": "Difícil",
    "question": "En un edifici construït a partir dels anys 1970 amb el sistema SEPARAT de pilars i forjats, quin és el punt estructural més crític i de què depenia en canvi l'estabilitat del sistema UNITARI anterior als anys 1960–70?",
    "options": [
      "Sistema Separat: els envans interiors de 6 cm | Sistema Unitari: els pilots a > 3 metres.",
      "Sistema Separat: el nus rígid d'unió pilar-forjat | Sistema Unitari: la trava a les cantonades i els forjats.",
      "Sistema Separat: la façana de tancament exterior | Sistema Unitari: les bigues delta de formigó prefabricat.",
      "Sistema Separat: les sabates aïllades | Sistema Unitari: els tirants d'acer de les encavallades."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 5.4: al sistema unitari l'estabilitat depèn de la trava a les cantonades i dels forjats; al sistema separat (des dels anys 70) l'esquelet és independent de la façana i el punt crític és el nus rígid pilar-forjat."
  },
  {
    "id": "ex-b2-t15-23",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "En naus industrials de grans llums (> 8 m) construïdes a partir dels anys 1990 amb formigó prefabricat, quina peça de coberta a dues aigües hi és característica?",
    "options": [
      "La volta catalana de maó de pla.",
      "El forjat reticular amb casetons perduts.",
      "La biga 'delta' a dues aigües.",
      "La sabata correguda de maó castellà."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 5.5: en pòrtics de gran llum (> 8 m) de formigó prefabricat des dels anys 1990 són habituals les bigues 'delta' a dues aigües."
  },
  {
    "id": "ex-b2-t15-24",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "Com es comporta un forjat o biga de formigó pretensat respecte a un de formigó armat convencional?",
    "options": [
      "El formigó pretensat substitueix el guix expansiu en envans de 4 cm.",
      "El formigó pretensat no conté ciment, només calç hidràulica i grava.",
      "El formigó pretensat només es pot col·locar en fonaments profunds per sota del nivell freàtic.",
      "El formigó pretensat utilitza cables tesats prèviament en lloc de només barres passives d'acer."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 3.1: Formigó = ciment + aigua + sorra + grava; amb barres d'acer és formigó armat, i amb cables tesats prèviament és formigó pretensat."
  },
  {
    "id": "ex-b2-t15-25",
    "topic": 15,
    "difficulty": "Difícil",
    "question": "Si comparem la resistència a tracció del formigó en massa (< 25 kg/cm²) amb la de l'acer estructural (3.000–7.500 kg/cm²), quin és l'ordre de magnitud aproximat de superioritat de l'acer a tracció?",
    "options": [
      "L'acer resisteix entre 120 i 300 vegades més a tracció que el formigó en massa (per això cal armar el formigó a la zona traccionada).",
      "L'acer resisteix aproximadament entre 2 i 3 vegades més a tracció que el formigó en massa.",
      "El formigó en massa resisteix el doble a tracció que l'acer, però l'acer es posa per resistir el foc.",
      "Tots dos tenen la mateixa resistència a tracció (1.000 kg/cm²) però l'acer és més lleuger."
    ],
    "correctIndex": 0,
    "explanation": "Formigó en massa: < 25 kg/cm² a tracció (però fins a 1.000 kg/cm² a compressió). Acer: 3.000–7.500 kg/cm² a tracció, és a dir, més de 120 a 300 vegades superior."
  },
  {
    "id": "ex-b2-t16-1",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "En una intervenció amb un animal salvatge perillós que requereix captura química mitjançant dards anestèsics (sarbatana o rifle), qui està autoritzat per preparar i disparar aquests dards segons el manual MAN.ATXX.000?",
    "options": [
      "El cap de torn o comandament de Bombers prèvia autorització de la Sala de Control.",
      "Qualsevol bomber del grup de rescat que disposi del curs bàsic de fauna.",
      "Exclusivament personal veterinari qualificat.",
      "Els agents de la Policia Local un cop balisat el perímetre de seguretat."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 2.1–2.3 de MAN.ATXX.000: la captura química mitjançant dards anestèsics amb sarbatana o rifle NOMÉS pot ser preparada i disparada per personal veterinari qualificat."
  },
  {
    "id": "ex-b2-t16-2",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "Davant d'un gos potencialment perillós (GPP) o agressiu en una assistència tècnica, quina és la tècnica d'aproximació i captura recomanada pel manual?",
    "options": [
      "Aproximació frontal ràpida mirant fixament als ulls per imposar autoritat i col·locar el morrió a mà.",
      "Subjectar-lo directament per les orelles i la cua sense utilitzar perxa ni morrió.",
      "Llançar aigua a pressió amb la llança de 25 mm per immobilitzar-lo contra una paret abans d'agafar-lo pel coll.",
      "Aproximació lateral sense mirar fixament als ulls i treball en binomi utilitzant una perxa rígida de captura (llaç al coll)."
    ],
    "correctIndex": 3,
    "explanation": "Secció 2.4.1: aproximació lateral sense mirar fixament als ulls; en GPP o gossos agressius cal treballar en binomi amb perxa rígida de captura."
  },
  {
    "id": "ex-b2-t16-3",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "Un ciutadà truca al 112 perquè el seu gat ha pujat a la copa d'un pi fa 4 hores i no baixa, sense que hi hagi cap perill imminent per a l'animal ni per a tercers. Quina ha de ser la resposta operativa?",
    "options": [
      "No activar el servei fins que porti un mínim de 24 hores a dalt, ja que la majoria baixen sols de nit.",
      "Despatxar immediatament una AEA per rescatar el gat abans que es faci fosc.",
      "Disparar un dard anestèsic des de terra per fer-lo caure sobre una lona de salvament.",
      "Esperar un mínim de 72 hores i, si no baixa, tallar l'arbre amb motoserra."
    ],
    "correctIndex": 0,
    "explanation": "Regla de les 24 hores (Secció 2.4.2): si un gat és dalt d'un arbre o teulada sense perill imminent, NO s'activa el servei fins que porti mínim 24 hores."
  },
  {
    "id": "ex-b2-t16-4",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "Quan ja som a tocar d'un gat espantat per capturar-lo i introduir-lo al cistell de transport, quin recurs bàsic el calma i facilita la maniobra?",
    "options": [
      "Il·luminar-lo directament als ulls amb un focus LED potent per desorientar-lo.",
      "Cobrir-lo amb una manta gruixuda o tovallola, ja que la foscor el calma.",
      "Subjectar-lo exclusivament per la pell del clatell amb guants metàl·lics.",
      "Banyar-lo prèviament amb aigua tèbia per reduir-ne l'agilitat."
    ],
    "correctIndex": 1,
    "explanation": "Secció 2.4.2: ús de manta gruixuda o tovallola per cobrir-lo (la foscor el calma) i introducció en cistell de transport."
  },
  {
    "id": "ex-b2-t16-5",
    "topic": 16,
    "difficulty": "Difícil",
    "question": "Com s'immobilitza correctament un porc o senglar (suid) i com s'han de subjectar les ovelles o cabres (òvids) en un rescat animal?",
    "options": [
      "Porc: cintes amples sota l'abdomen i hissat amb grua pel coll | Ovella/cabra: llaç al morro.",
      "Porc: subjectat per les orelles i la cua | Ovella/cabra: estirar fortament per les banyes o la llana del llom.",
      "Porc: lligam al morro (maxil·lar superior, darrere els ullals) | Ovella/cabra: subjectar pel coll/barbeta i la gropa (mai per la llana ni les banyes).",
      "Tots dos s'immobilitzen sempre dins d'un sac de roba lligat per la boca."
    ],
    "correctIndex": 2,
    "explanation": "Secció 2.4.3: el porc s'immobilitza amb un lligam/llaç al morro (estira cap enrere i queda clavat); ovelles i cabres se subjecten pel coll/barbeta i la gropa, MAI per la llana ni les banyes."
  },
  {
    "id": "ex-b2-t16-6",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "En el rescat d'un cavall caigut dins d'una piscina buida amb ajuda d'una grua, quines mesures de maneig i hissat són obligatòries?",
    "options": [
      "Aproximar-se per darrere, passar cintes pel coll i hissar-lo ràpidament per les potes.",
      "Utilitzar una perxa rígida metàl·lica al coll mentre un bomber l'empeny des de la gropa.",
      "Deixar-li els ulls descoberts perquè vegi la grua i lligar l'eslinga a la base de la cua.",
      "Aproximar-se per davant/lateral (mai per darrere), tapar-li els ulls amb una roba i passar cintes amples per sota del tòrax i l'abdomen."
    ],
    "correctIndex": 3,
    "explanation": "Secció 2.4.4: tapar els ulls per calmar-lo, aproximar-se per davant/lateral (mai per darrere pel risc de coça) i passar cintes amples sota tòrax i abdomen (prohibit traccionar pel coll, potes o cua)."
  },
  {
    "id": "ex-b2-t16-7",
    "topic": 16,
    "difficulty": "Difícil",
    "question": "Durant la captura d'un cabirol ferit en una zona periurbana, per què cal minimitzar sorolls i llums, cobrir-li el cap i limitar al màxim els estímuls?",
    "options": [
      "Per evitar la miopatia de captura (mort de l'animal per estrès agut).",
      "Perquè els cabirols són animals nocturns que perden l'equilibri amb la llum blanca.",
      "Per evitar que l'animal emeti sons que atreguin altres senglars a la zona calenta.",
      "Perquè la normativa només permet capturar fauna salvatge en silenci absolut."
    ],
    "correctIndex": 0,
    "explanation": "Secció 2.4.5: en fauna salvatge cal minimitzar sorolls i llums, cobrir el cap i limitar estímuls per evitar la miopatia de captura (mort per estrès agut), coordinant-se amb Agents Rurals."
  },
  {
    "id": "ex-b2-t16-8",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "En la manipulació d'una au aquàtica o cigonya ferida, quina precaució específica ha de prendre el bomber a banda de subjectar-li les ales plegades contra el cos?",
    "options": [
      "Submergir-li les potes en aigua freda abans d'entrar al vehicle.",
      "Protegir-se els ulls del bec llarg (i en rapinyaires subjectar també bec i urpes).",
      "Transportar-la sempre dins d'un recipient rígid hermètic sense ventilació.",
      "Estirar-li les ales cap enrere per immobilitzar-la completament."
    ],
    "correctIndex": 1,
    "explanation": "Secció 2.4.6: cobrir amb manta o sac lleuger, subjectar les ales plegades contra el cos (i bec/urpes en rapinyaires) i en aus aquàtiques/cigonyes protegir els ulls dels bombers del bec llarg."
  },
  {
    "id": "ex-b2-t16-9",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "En el maneig d'una serp amb ganxo herpetològic o pinça llarga, quina precaució anatòmica cal respectar i quin contenidor correspon a una serp exòtica o verinosa?",
    "options": [
      "Agafar-la sempre per la punta de la cua amb la mà nua | Caixa de cartró perforada.",
      "Subjectar-la fortament pel centre de la columna | Sac de roba lligat.",
      "No estrènyer la columna vertebral | Recipient rígid tancat (el sac de roba és per a autòctones).",
      "Immobilitzar-la amb un lligam al morro | Gàbia de malla ampla."
    ],
    "correctIndex": 2,
    "explanation": "Secció 2.4.7: usar ganxo o pinça sense estrènyer la columna vertebral; serp autòctona → sac de roba lligat; serp exòtica/verinosa → recipient rígid tancat."
  },
  {
    "id": "ex-b2-t16-10",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "Dins de la cadena d'una motoserra, quins són els 3 tipus de baules existents i quina funció té el limitador de profunditat de la dent de tall?",
    "options": [
      "Baula de tracció, baula de compressió i baula de frontissa | El limitador lubrica el canal de l'espasa.",
      "Baula de pas, baula de galga i baula de fre | El limitador frena la cadena per inèrcia en cas de rebot.",
      "Baula mestra, baula auxiliar i pinyó | El limitador mesura les polzades de l'espasa.",
      "Baula motriu, baula d'unió i dent de tall | El limitador de profunditat regula el gruix de l'encenall i evita que la dent es clavi de cop."
    ],
    "correctIndex": 3,
    "explanation": "Taula 3.2: 3 tipus de baules (1. Baula motriu que arrossega i lubrica, 2. Baula d'unió, 3. Dent de tall amb tallant superior + limitador de profunditat que regula l'encenall)."
  },
  {
    "id": "ex-b2-t16-11",
    "topic": 16,
    "difficulty": "Difícil",
    "question": "Si la cadena d'una motoserra té un pas (pitch) de 3/8\" i una galga d'1,5 mm, què passa si la muntem en una espasa amb canal d'1,3 mm o amb un pinyó d'un altre pas?",
    "options": [
      "Si la galga no coincideix amb el rail de l'espasa la cadena balla o es gripa, i el pas ha de coincidir exactament amb el pinyó d'arrossegament i l'estrella de la punta de l'espasa.",
      "No passa res perquè la galga només afecta el consum de combustible.",
      "Només cal tensar una mica més el captador de cadena per compensar la diferència.",
      "La motoserra tallarà més ràpid però sense activar el fre de cadena."
    ],
    "correctIndex": 0,
    "explanation": "Taula 3.2: el pas (en polzades) ha de coincidir exactament amb el pinyó i l'estrella de l'espasa; la galga (en mm) és el gruix de la baula motriu i ha de coincidir amb el canal de l'espasa perquè no balli ni es gripi."
  },
  {
    "id": "ex-b2-t16-12",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "Quina funció té el captador de cadena i quina el fiador d'accelerador en una motoserra?",
    "options": [
      "Captador: regula el gruix de l'encenall | Fiador: activa el fre de cadena per inèrcia en cas de rebot.",
      "Captador: atrapa la cadena si es trenca (pivó sota el càrter) | Fiador: impedeix que la cadena giri si no s'agafa l'empunyadura amb tota la mà.",
      "Captador: lubrica la baula motriu | Fiador: bloqueja el motor quan s'acaba la mescla de 2 temps.",
      "Captador: mesura el pas de cadena | Fiador: protegeix els ulls de l'operador de les serradures."
    ],
    "correctIndex": 1,
    "explanation": "Taula 3.2: el captador de cadena (pivó sota el càrter) atrapa la cadena si es trenca; el fiador d'accelerador (gallet doble) impedeix que la cadena giri si no s'agafa l'empunyadura amb tota la mà."
  },
  {
    "id": "ex-b2-t16-13",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "Durant una tala d'arbre amb motoserra, quina persona pot romandre dins la Zona A (radi 2,5 × alçada de l'arbre) i qui pot romandre dins la Zona B (radi 2 m) mentre la cadena gira?",
    "options": [
      "Zona A: tot el torn complet de bombers | Zona B: el binomi de treball (2 bombers).",
      "Zona A: únicament el motoserrista | Zona B: el binomi i el cap de dotació.",
      "Zona A: només el binomi de treball | Zona B: únicament el motoserrista (ni tan sols el company del binomi!).",
      "Zona A: qualsevol vehicle autobomba | Zona B: fins a 3 operadors amb casc."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 3.3 (AGO): Zona A (2,5 × h) = només el binomi de treball; Zona B (2 m al voltant de l'operador) = NINGÚ més que el motoserrista mentre la cadena gira."
  },
  {
    "id": "ex-b2-t16-14",
    "topic": 16,
    "difficulty": "Difícil",
    "question": "En un abatiment vertical d'arbre, quines dimensions ha de tenir l'entall de direcció i a quina alçada respecte a la base de l'entall es fa el tall d'abatiment horitzontal?",
    "options": [
      "No es fa entall de direcció si el tall vertical es realitza a 1 metre del terra.",
      "Entall: falca a 90° amb profunditat de 2/3 del diàmetre | Tall d'abatiment: per sota de l'entall tallant la frontissa del tot.",
      "Entall: falca a 15° amb profunditat del 10% | Tall d'abatiment: al mateix pla que la part superior de l'entall.",
      "Entall: falca a 45° amb profunditat d'1/4 a 1/3 del diàmetre | Tall d'abatiment: horitzontal lleugerament per sobre de la base de l'entall, deixant una frontissa del 10% del diàmetre."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 3.4: 1r Entall de direcció (falca a 45°, profunditat 1/4 a 1/3 Ø); 2n Tall d'abatiment horitzontal lleugerament per sobre de la base de l'entall deixant sempre la frontissa (10% Ø); 3r Vies d'escapament a 45° cap enrere."
  },
  {
    "id": "ex-b2-t16-15",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "Quan l'arbre comença a caure durant un abatiment, quina seqüència d'accions immediates ha d'executar el motoserrista?",
    "options": [
      "Retirar la motoserra, activar el fre de cadena i sortir per una de les dues vies d'escapament a 45° cap enrere.",
      "Acabar de tallar la frontissa del 10%, deixar el motor accelerat a terra i córrer en la mateixa direcció de la caiguda.",
      "Mantenir l'espasa dins del tall fins que l'arbre toqui a terra i retrocedir en línia recta a 180°.",
      "Saltar lateralment a 90° sense posar el fre de cadena."
    ],
    "correctIndex": 0,
    "explanation": "Taula Resum Cap. 3: quan l'arbre comença a caure cal retirar la motoserra, posar el fre de cadena i sortir per una de les vies d'escapament a 45° cap enrere."
  },
  {
    "id": "ex-b2-t16-16",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "En un tronc caigut que forma un pont (recolzat als dos extrems i suspès al centre), on es troba la zona de compressió i en quin ordre i proporció s'ha de tallar?",
    "options": [
      "Compressió a baix → 1r tall d'1/3 per baix i 2n tall de 2/3 per dalt.",
      "Compressió a dalt → 1r tall d'alleujament (1/3 del diàmetre) per DALT i 2n tall definitiu (2/3) per BAIX (zona de tracció).",
      "Compressió als dos extrems → es talla directament al mig de baix a dalt en un sol moviment.",
      "Tot el tronc està en tracció → 1r tall de 2/3 per dalt i 2n tall d'1/3 per baix."
    ],
    "correctIndex": 1,
    "explanation": "En un tronc recolzat als dos extrems com un pont, la part de dalt s'aixafa (compressió) i la de baix s'estira (tracció): 1r tall d'1/3 per DALT (compressió) i 2n tall de 2/3 per BAIX (tracció)."
  },
  {
    "id": "ex-b2-t16-17",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "Com actuen els pantalons o zahones anticall dins l'EPI obligatori de motoserrista en cas de contacte accidental de la cadena en moviment?",
    "options": [
      "Incorporen plaques rígides d'acer que desvien l'espasa cap a fora.",
      "Només protegeixen contra l'escalfor del tub d'escapament i les esquitxades d'oli.",
      "Contenen fibres llargues que s'enreden i embussen el pinyó a l'instant aturant la cadena.",
      "Substitueixen la necessitat de portar botes amb puntera de seguretat i mascareta FFP3."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 3.5: els pantalons o zahones anticall porten fibres llargues que embussen el pinyó a l'instant en cas de contacte amb la cadena."
  },
  {
    "id": "ex-b2-t16-18",
    "topic": 16,
    "difficulty": "Difícil",
    "question": "A banda de l'article 18.2 de la Constitució Espanyola, quines dues lleis esmentades al Capítol 4 del manual MAN.ATXX.000 emmarquen l'entrada en domicili per estat de necessitat o força major per evitar danys imminents i greus?",
    "options": [
      "El Decret 30/2015 i la Llei 4/1997.",
      "La Llei 31/1995 de Prevenció i el Reial Decret 836/2012.",
      "La Llei 17/2015 i el Decret 276/2016.",
      "La Llei Orgànica 4/2015 de Seguretat Ciutadana i la Llei 5/1994."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 4.1–4.2: Art. 18.2 CE garanteix la inviolabilitat del domicili excepte consentiment, resolució judicial, flagrant delicte o estat de necessitat / força major (Llei Orgànica 4/2015 de Seguretat Ciutadana i Llei 5/1994)."
  },
  {
    "id": "ex-b2-t16-19",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "En un pany amb bombí europeu estàndard (no de doble embragatge), què passa si la persona de l'interior s'ha deixat la clau posada per dins?",
    "options": [
      "No es pot girar amb una altra clau des de fora perquè la clau interior bloqueja l'embragatge.",
      "Es pot girar igualment des de fora amb una còpia de la clau del veí.",
      "El resbaló bisellat queda automàticament bloquejat i no funciona ni la targeta de mica.",
      "La lleva central surt disparada cap a l'exterior en introduir la clau."
    ],
    "correctIndex": 0,
    "explanation": "Taula 4.3–4.4: si hi ha una clau posada per dins i el bombí no és de doble embragatge, no es pot girar amb una altra clau des de fora."
  },
  {
    "id": "ex-b2-t16-20",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "Davant d'una porta blindada tancada amb dues voltes de clau en un servei d'accés a habitatge sense risc vital immediat (no podem entrar per finestra), quina és la tècnica d'obertura destructiva selectiva prevista al manual?",
    "options": [
      "Trencar les frontisses amb radial i esfondrar el marc amb el mall.",
      "Trencar el bombí amb clau grifa/partidor, fresar/trepar els pitons amb broca de cobalt o extreure el rotor amb cargol d'extracció, i després girar la lleva interior.",
      "Utilitzar una làmina de radiografia per fer retrocedir els forrellats girats.",
      "Aplicar el separador hidràulic directament sobre la fulla de la porta."
    ],
    "correctIndex": 1,
    "explanation": "Taula 4.3–4.4: obertura destructiva del bombí (partidor de bombins/clau grifa, fresat/trepat amb broca de cobalt o extracció del rotor) i gir de la lleva interior per retirar els forrellats; el forçament pesat (Halligan, mall, separador, radial) és només per a emergència vital."
  },
  {
    "id": "ex-b2-t16-21",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "En una assistència tècnica per desconnectar una alarma acústica exterior d'un local comercial, quines dues comprovacions o mesures prèvies són obligatòries segons el Capítol 5?",
    "options": [
      "Trencar la sirena a cops de mall des de la cistella de l'AEA sense avisar la Policia.",
      "Tallar primer el cable de la CGP del bloc sencer i usar màscara FFP3.",
      "Verificació prèvia d'absència d'incendi o intrusió (en coordinació amb Policia) i protecció auditiva obligatòria (taps o orelletes) abans d'aproximar-se a la sirena.",
      "Ruixar la caixa exterior amb escuma d'alta expansió per esmorteir el so."
    ],
    "correctIndex": 2,
    "explanation": "Secció 5.1: verificar absència d'incendi/intrusió amb Policia, accedir a la sirena per desconnectar bateria i alimentació, i portar protecció auditiva obligatòria."
  },
  {
    "id": "ex-b2-t16-22",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "Durant un sanejament de façana amb AEA on cal fer caure fragments controlats de cornisa a la via pública, quina precaució a nivell de carrer és imprescindible abans de deixar caure cada fragment?",
    "options": [
      "Cap si ja s'ha col·locat una cinta de balisament a la vorera.",
      "Tocar la botzina del camió tres vegades i llançar els fragments immediatament.",
      "Situar la cistella just a sota de la cornisa per frenar la caiguda amb la barana.",
      "Un bomber a terra ha de vigilar i confirmar que el perímetre balisat està 100% buit abans de fer caure qualsevol fragment."
    ],
    "correctIndex": 3,
    "explanation": "Nota Taula Cap. 5: en sanejament de façana, abans de fer caure qualsevol fragment a la via pública, un bomber a terra ha de vigilar i confirmar que el perímetre balisat està 100% buit."
  },
  {
    "id": "ex-b2-t16-23",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "En un accident de trànsit amb vessament d'oli de motor i refrigerant sobre l'asfalt, quin procediment complet de neteja de calçada estableix la secció 5.3 del manual?",
    "options": [
      "Senyalitzar i protegir amb l'autobomba, absorbir amb sepiolita i recollir mecànicament amb pala i escombra (prohibit projectar aigua a pressió cap al clavegueram).",
      "Projectar aigua a alta pressió des de la BUP per arrossegar ràpidament l'oli cap als embornals.",
      "Espargir sorra de platja mullada i deixar-la sobre la calçada fins que s'evapori el gasoil.",
      "Aplicar aigua amb detergent domèstic i fregar amb raspall metàl·lic sense senyalització."
    ],
    "correctIndex": 0,
    "explanation": "Secció 5.3: senyalització i protecció amb autobomba, absorció amb sepiolita i recollida mecànica en sec (pala i escombra), prohibint aigua a pressió cap al clavegueram."
  },
  {
    "id": "ex-b2-t16-24",
    "topic": 16,
    "difficulty": "Difícil",
    "question": "Si hem de retirar un rusc d'abelles (Apis mellifera) situat en un pati escolar i un niu de vespa asiàtica (Vespa velutina) en risc en una altra intervenció, quina diferència de criteri operatiu estableix el manual?",
    "options": [
      "Totes dues espècies s'han d'eliminar sempre amb insecticida a ple migdia.",
      "L'abella és espècie protegida i es recull l'eixam en caixa amb la reina (no es mata amb insecticida, a diferència de la vespa asiàtica en situació de risc).",
      "L'abella s'elimina amb aigua a pressió i la vespa asiàtica es recull en un sac de roba.",
      "Només es necessita careta d'apicultor per a la vespa asiàtica; per a les abelles n'hi ha prou amb el casc estructural."
    ],
    "correctIndex": 1,
    "explanation": "Secció 2.4.8: l'abella (Apis mellifera) és espècie protegida (es recull l'eixam en caixa amb la reina, no es mata amb insecticida, a diferència de la vespa asiàtica en risc); en tots dos casos EPI complet d'apicultor i actuació al capvespre o de nit."
  },
  {
    "id": "ex-b2-t16-25",
    "topic": 16,
    "difficulty": "Mitjà",
    "question": "Quin és l'ordre de prioritat operatiu SGO per accedir a un habitatge tancat de menys a més destrucció segons el manual MAN.ATXX.000?",
    "options": [
      "1r Resbaló amb mica → 2n Finestra/balcó → 3r Halligan/separador → 4t Extracció de bombí.",
      "1r Extracció del bombí → 2n Finestra/balcó → 3r Resbaló amb mica → 4t Serra radial.",
      "1r Finestra/balcó sense danys → 2n Obertura no destructiva (resbaló amb mica) → 3r Extracció/fresat només del bombí → 4t Forçament pesat d'estructura (només risc vital).",
      "1r Forçament pesat amb mall → 2n Extracció de bombí → 3r Finestra/balcó → 4t Resbaló."
    ],
    "correctIndex": 2,
    "explanation": "Prioritat SGO (nota Taula 4.3–4.4): 1r Finestra/balcó sense danys → 2n Resbaló amb mica → 3r Extracció/fresat només del bombí → 4t Forçament d'estructura en risc vital."
  },
  {
    "id": "ex-b2-t17-1",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Amb quina plataforma tecnològica corporativa s'integren en temps real les comunicacions operatives i el posicionament GPS dels vehicles de la xarxa RESCAT segons el Capítol 1 de MAN.COMU.000?",
    "options": [
      "Amb el Sistema d'Informació Geogràfica corporatiu (SIG), basat en tecnologia ArcGIS.",
      "Amb la xarxa analògica VHF semidúplex de banda marina.",
      "Amb la plataforma europea ECPP de Brussel·les.",
      "Amb el sistema d'alerta ciutadana ES-Alert."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 1 de MAN.COMU.000: totes les comunicacions operatives i el posicionament GPS dels vehicles a la xarxa RESCAT (TETRA) s'integren en temps real amb el SIG corporatiu basat en tecnologia ArcGIS."
  },
  {
    "id": "ex-b2-t17-2",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "En quin mode de transmissió opera el trànsit de veu en grup directe DMO i en quin mode opera la comunicació ordinària TMO a través de les estacions base de la xarxa RESCAT?",
    "options": [
      "DMO = Dúplex | TMO = Simplex.",
      "DMO = Simplex (una sola freqüència alternativa amb PTT) | TMO = Semidúplex (dues freqüències via estació base, per torns amb PTT).",
      "DMO = Semidúplex | TMO = Dúplex complet sense PTT.",
      "Tant DMO com TMO operen en Dúplex simultani igual que una trucada telefònica."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 2.1: Simplex (1 freqüència directa per torns amb PTT, ex. DMO); Semidúplex (2 freqüències via estació base/repetidor per torns amb PTT, ex. TMO); Dúplex (simultani sense PTT)."
  },
  {
    "id": "ex-b2-t17-3",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Per què en prémer el PTT d'un terminal digital TETRA de la xarxa RESCAT és imprescindible esperar entre 1 i 2 segons abans de començar a parlar?",
    "options": [
      "Perquè la Sala de Control ha de confirmar manualment cada premsa de PTT abans de donar pas.",
      "Perquè el micròfon necessita 2 segons per escalfar la càpsula i reduir el soroll de vent.",
      "Perquè la xarxa digital triga 1–2 segons a assignar el canal i establir l'enllaç; si es parla a l'instant, es talla la primera paraula.",
      "Perquè el terminal envia primer les coordenades GPS completes abans d'obrir l'àudio."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 2.5: el micròfon es col·loca a 2–3 cm de la boca i cal esperar 1–2 segons després de prémer el PTT perquè TETRA assigni el canal i no es talli la primera paraula."
  },
  {
    "id": "ex-b2-t17-4",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Segons l'apartat 2.6.2 de MAN.COMU.000, quin és l'ordre de prioritat dels missatges per ràdio en una intervenció?",
    "options": [
      "1r Rutinaris → 2n Operatius urgents → 3r Emergència / Seguretat vital.",
      "Tots els missatges tenen exactament la mateixa prioritat i s'espera el torn estricte d'arribada.",
      "1r Operatius de desplaçament (Z-2/Z-4) → 2n Emergència vital → 3r Consultes de cartografia.",
      "1r Emergència / Seguretat vital (SOS / Codi Vermell) → 2n Operatius urgents → 3r Rutinaris."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 2.6.2: 1r Emergència / Seguretat vital (SOS / Codi Vermell, interromp qualsevol trànsit) → 2n Operatius urgents → 3r Rutinaris."
  },
  {
    "id": "ex-b2-t17-5",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Quin és l'ordre correcte per iniciar una trucada de ràdio quan el Cap del Sector Nord vol comunicar-se amb el Cap d'Intervenció?",
    "options": [
      "«Cap d'Intervenció de Sector Nord» (1r Receptor + 'de' + 2n Emissor).",
      "«Sector Nord per a Cap d'Intervenció».",
      "«Aquí Sector Nord cridant a Cap d'Intervenció».",
      "«Z-3 Sector Nord a Cap d'Intervenció»."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 3.2: sempre es nomena primer el destinatari (Receptor) i després qui truca (Emissor): «Cap d'Intervenció de Sector Nord»."
  },
  {
    "id": "ex-b2-t17-6",
    "topic": 17,
    "difficulty": "Difícil",
    "question": "Com es lletreja correctament la matrícula o codi «H-J-U-Y» segons l'alfabet fonètic internacional ICAO del manual MAN.COMU.000?",
    "options": [
      "Hotel - Juliet - Union - Yellow.",
      "Hotel - Juliett - Uniform - Yankee.",
      "Henry - Jaguar - Uniform - Yankee.",
      "Hotel - Juliett - Umbrella - York."
    ],
    "correctIndex": 1,
    "explanation": "Taula 3.5.2 (Alfabet ICAO): H = Hotel, J = Juliett, U = Uniform, Y = Yankee."
  },
  {
    "id": "ex-b2-t17-7",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "En una prova de ràdio, el company ens respon «Et rebo 3 de 5». Què significa el valor 3 en l'escala oficial de qualitat del senyal (apartat 3.5.5)?",
    "options": [
      "Il·legible (no s'entén res).",
      "Llegible amb molta dificultat (entretallat).",
      "Llegible amb certa dificultat.",
      "Perfectament llegible (alt i clar)."
    ],
    "correctIndex": 2,
    "explanation": "Escala 1–5 (Cap. 3.5.5): 1 = Il·legible; 2 = Llegible amb molta dificultat (entretallat); 3 = Llegible amb certa dificultat; 4 = Llegible (bon senyal); 5 = Perfectament llegible (alt i clar)."
  },
  {
    "id": "ex-b2-t17-8",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Com s'han de transmetre les xifres crítiques (com ara el codi d'un vehicle 3.20.11 o una adreça numèrica) per ràdio segons la secció 3.5?",
    "options": [
      "Agrupades en desenes i centenes per escurçar la durada de la transmissió.",
      "Repetides tres vegades seguides amb l'alfabet fonètic ICAO.",
      "Exclusivament mitjançant missatge SDS escrit i mai per veu.",
      "Llegides dígit a dígit (ex: 3-2-0-1-1)."
    ],
    "correctIndex": 3,
    "explanation": "Taula 3.5: les xifres crítiques es llegeixen dígit a dígit (0 Zero, 1 Un, 2 Dos, 3 Tres, 4 Quatre, 5 Cinc, 6 Sis, 7 Set, 8 Vuit, 9 Nou)."
  },
  {
    "id": "ex-b2-t17-9",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "En un servei urbà petit o habitual (no és una gran emergència), quins canals utilitzen normalment les dotacions segons l'apartat 4.2 del manual?",
    "options": [
      "El Canal de Trànsit (despatx amb SCT) i un Canal Directe (DMO) al lloc del servei.",
      "Només el Canal de Servei i el Canal de Sector.",
      "Els 4 canals simultanis (Trànsit, Servei, Sector i Directe) des de la sortida del parc.",
      "Exclusivament el Mode Repetidor VHF analògic."
    ],
    "correctIndex": 0,
    "explanation": "Nota Taula 4.3 (Cap. 4.2): en serveis petits o habituals, les dotacions treballen amb el Canal de Trànsit i un Canal Directe (DMO) al lloc."
  },
  {
    "id": "ex-b2-t17-10",
    "topic": 17,
    "difficulty": "Difícil",
    "question": "En una gran emergència amb els 4 tipus de canals desplegats, quina diferència hi ha entre el Canal de Trànsit, el Canal de Servei i el Canal de Sector?",
    "options": [
      "Trànsit (DMO): binomis d'interior | Servei (TMO): SCT ↔ vehicles | Sector (TMO): només mitjans aeris.",
      "Trànsit (TMO): SCT ↔ vehicles durant el desplaçament | Servei (TMO): CI/CCA ↔ Caps de Sector i SCT | Sector (DMO o TMO dedicat): Cap de Sector ↔ dotacions del seu sector.",
      "Trànsit i Servei funcionen sempre en DMO, mentre que el Canal de Sector funciona exclusivament en TMO.",
      "El Canal de Servei és només per als vehicles sanitaris del SEM i el de Trànsit per a Mossos d'Esquadra."
    ],
    "correctIndex": 1,
    "explanation": "Taula 4.3: 1. Trànsit (TMO, SCT ↔ vehicles en desplaçament); 2. Servei (TMO, CI/CCA ↔ Caps de Sector i SCT); 3. Sector (DMO o TMO dedicat, Cap de Sector ↔ dotacions del sector); 4. Directe (DMO, binomis d'interior)."
  },
  {
    "id": "ex-b2-t17-11",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Quants usuaris i quants terminals operatius integren la xarxa RESCAT segons l'apartat 5.1 del manual MAN.COMU.000?",
    "options": [
      "15.000 usuaris i 10.000 terminals operatius.",
      "37.000 usuaris i 57.000 terminals operatius.",
      "57.000 usuaris i 37.000 terminals operatius.",
      "120.000 usuaris i 85.000 terminals operatius."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 5.1: 57.000 usuaris i 37.000 terminals operatius (amb 317 TBS + 27 extensions i un 98,5% de cobertura territorial)."
  },
  {
    "id": "ex-b2-t17-12",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Com cobreix la xarxa RESCAT les zones d'ombra puntuals o escenaris de catàstrofe fora del 98,5% de cobertura fixa de les 317 TBS?",
    "options": [
      "Només pot comunicar-se mitjançant missatges escrits SDS de 250 caràcters.",
      "Torna automàticament a la banda analògica VHF que es manté activa indefinidament.",
      "Utilitza exclusivament la xarxa comercial de telefonia 5G sense estacions pròpies.",
      "Disposa d'estacions base mòbils transportables (a banda de les 27 extensions i els modes DMO/Gateway)."
    ],
    "correctIndex": 3,
    "explanation": "Taula 5.1–5.3: 317 TBS + 27 extensions i inclou estacions base mòbils transportables per a zones d'ombra o catàstrofes."
  },
  {
    "id": "ex-b2-t17-13",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Quina funció té el servei SDS (Short Data Service) en els terminals TETRA de la xarxa RESCAT?",
    "options": [
      "Enviar missatges escrits i estats codificats (ZULU) fins a 120 caràcters consumint un ample de banda mínim.",
      "Activar el micròfon ambiental d'escolta en calent sense prémer el botó taronja.",
      "Convertir el terminal portàtil en una estació base troncal TMO de 40 W.",
      "Transmetre vídeo en directe des de l'interior d'un túnel ferroviari."
    ],
    "correctIndex": 0,
    "explanation": "Taula 5.1–5.3: SDS (Short Data Service) permet enviar missatges escrits i estats codificats (ZULU) de màxim 120 caràcters alfanumèrics consumint un ample de banda mínim."
  },
  {
    "id": "ex-b2-t17-14",
    "topic": 17,
    "difficulty": "Difícil",
    "question": "Dos binomis estan fent una cerca en un barranc muntanyós en mode DMO, però un turó intermedi els impedeix escoltar-se directament. No necessiten parlar amb la Sala de Control (TMO), només ampliar l'abast entre ells. Quin mode cal activar en un terminal intermedi?",
    "options": [
      "El Pont de Ràdio (Gateway), per connectar el grup DMO a la xarxa TMO.",
      "El Mode Repetidor (DMO Repeater), que reemet el senyal DMO → DMO per superar l'obstacle local sense connectar amb TMO.",
      "La tecla '0' durant 5 segons per forçar l'enllaç via satèl·lit.",
      "El codi Z-3 de petició d'urgència ràdio."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 5.2 i 5.4: el Mode Repetidor (DMO Repeater) amplia el radi d'abast DMO → DMO per superar un turó o obstacle entre portàtils sense connectar amb TMO (el Gateway connecta DMO ↔ TMO)."
  },
  {
    "id": "ex-b2-t17-15",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Quin codi ZULU envia una dotació just quan rep l'avís de sortida per confirmar que se n'ha assabentat, i quin envia quan ja es troba operativa i disponible dins del parc?",
    "options": [
      "Z-1 (Rebut del servei) i Z-0 (Disponible al parc).",
      "Z-2 (Rebut del servei) i Z-7 (Disponible al parc).",
      "Z-0 (Rebut / Assabentat del servei) i Z-1 (Disponible al parc).",
      "Z-4 (Rebut del servei) i Z-5 (Disponible al parc)."
    ],
    "correctIndex": 2,
    "explanation": "Annex 2: Z-0 = Rebut / Assabentat del servei; Z-1 = Disponible al parc."
  },
  {
    "id": "ex-b2-t17-16",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Una autobomba acaba un servei d'incendi però torna cap al parc amb els dipòsits d'ERA buits i la cisterna a mitges, de manera que NO pot ser desviada a cap altre incident pel camí. Quin codi ZULU ha de marcar?",
    "options": [
      "Z-5 (Retorn al parc disponible).",
      "Z-9 (Sortida en comissió de servei).",
      "Z-7 (Arribada al parc).",
      "Z-6 (Retorn al parc NO disponible)."
    ],
    "correctIndex": 3,
    "explanation": "Annex 2: Z-5 = Retorn al parc DISPONIBLE; Z-6 = Retorn al parc NO DISPONIBLE (falta d'aigua/ERA buits, avaria o contaminació)."
  },
  {
    "id": "ex-b2-t17-17",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Un vehicle surt del parc per portar material a un altre parc i revisar uns hidrants municipals (desplaçament no operatiu i no urgent). Quin codi ZULU li correspon?",
    "options": [
      "Z-9 (Sortida en comissió de servei - No urgent).",
      "Z-8 (Fora de servei).",
      "Z-2 (Sortida cap al servei).",
      "Z-5 (Retorn disponible)."
    ],
    "correctIndex": 0,
    "explanation": "Annex 2: Z-9 = Sortida en comissió de servei (No urgent), com ara portar material, revisió d'hidrants o taller."
  },
  {
    "id": "ex-b2-t17-18",
    "topic": 17,
    "difficulty": "Difícil",
    "question": "Quin codi ZULU indica que un vehicle està temporalment inoperatiu (manteniment, repostar o pràctiques) i quins codis corresponen als estats auxiliars de localització o finalització al SIG?",
    "options": [
      "Z-6 (Fora de servei) i Z-0 / Z-1 (Estats auxiliars).",
      "Z-8 (Fora de servei / Inoperatiu) i Z-10 / Z-11 (Estats auxiliars de localització / finalització).",
      "Z-9 (Fora de servei) i Z-3 / Z-4 (Estats auxiliars).",
      "Z-7 (Fora de servei) i Z-8 / Z-9 (Estats auxiliars)."
    ],
    "correctIndex": 1,
    "explanation": "Annex 2: Z-8 = Fora de servei (Inoperatiu); Z-10 / Z-11 = Estats auxiliars de localització / finalització per a la gestió interna de flota al SIG."
  },
  {
    "id": "ex-b2-t17-19",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Si un bomber que parla per un terminal TETRA crida molt fort amb el micròfon enganxat als llavis, quin efecte produeix sobre la comunicació digital?",
    "options": [
      "Millora l'abast del senyal en mode DMO fins a duplicar la distància.",
      "Activa automàticament la funció de Pont de ràdio (Gateway) a l'emissora del camió.",
      "Produeix saturació digital i distorsiona l'àudio; cal col·locar el micròfon a 2–3 cm de la boca i parlar amb volum normal.",
      "Redueix el temps d'espera del PTT de 2 segons a 0 segons."
    ],
    "correctIndex": 2,
    "explanation": "Taula Resum Cap. 2: el micròfon s'ha de col·locar a 2–3 cm de la boca i parlar amb volum normal sense cridar per evitar la saturació digital."
  },
  {
    "id": "ex-b2-t17-20",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "On es troba situat el botó taronja d'emergència en els equips TETRA de Bombers i què fa exactament l'«escolta en calent» que activa?",
    "options": [
      "A la part inferior de la bateria; envia només un missatge SDS amb el codi Z-3.",
      "Només existeix als vehicles UCM i UCP, mai als terminals portàtils individuals.",
      "Al lateral esquerre sota el PTT; canvia el canal de Trànsit a VHF analògic.",
      "A la part superior del terminal portàtil i de l'emissora mòbil; obre el micròfon ambiental automàticament perquè la Sala de Control escolti què passa al voltant del bomber sense que premi el PTT."
    ],
    "correctIndex": 3,
    "explanation": "Taula 5.1–5.3: el botó taronja d'emergència (a la part superior del portàtil i emissora mòbil) activa la trucada prioritària SOS, obre el micròfon ambiental (escolta en calent) i envia el GPS a la Sala."
  },
  {
    "id": "ex-b2-t17-21",
    "topic": 17,
    "difficulty": "Difícil",
    "question": "Un bomber necessita saber les seves coordenades GPS exactes al terminal portàtil RESCAT per passar-les a un helicòpter de rescat. Quina tecla i durant quants segons l'ha de mantenir premuda?",
    "options": [
      "La tecla «0» durant 5 segons.",
      "La tecla «*» durant 2 segons.",
      "El botó taronja SOS durant 10 segons.",
      "La tecla «#» durant 3 segons."
    ],
    "correctIndex": 0,
    "explanation": "Taula 5.1–5.3: mantenint premuda la tecla «0» durant 5 segons es mostren a la pantalla del terminal les coordenades GPS exactes."
  },
  {
    "id": "ex-b2-t17-22",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Quin avantatge principal aporta la xarxa digital TETRA RESCAT respecte de l'antiga xarxa analògica VHF apagada a l'abril de 2025?",
    "options": [
      "Permet parlar en dúplex sense prémer el PTT en qualsevol canal de sector.",
      "Evita interferències i aporta privacitat/xifratge, integrant-se a més amb el posicionament GPS al SIG (ArcGIS).",
      "Elimina la necessitat de tenir estacions base fixes (TBS) al territori.",
      "Funciona exclusivament en una única freqüència simplex per a tot Catalunya."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 1: l'antiga xarxa analògica VHF patia interferències i manca de privacitat; la xarxa digital TETRA RESCAT resol aquestes mancances i s'integra amb el GPS al SIG (ArcGIS)."
  },
  {
    "id": "ex-b2-t17-23",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "Si un bomber d'un equip d'atac interior salta per sobre del seu Cap de Sector per comunicar-se directament amb la Sala de Control Central sobre una maniobra rutinària, quina norma del Capítol 2 està incomplint?",
    "options": [
      "La regla dels 30 segons de recepció.",
      "L'ordre «RECEPTOR de EMISSOR».",
      "La regla de jerarquia (+1 / -1 nivell) en les comunicacions operatives.",
      "L'escala de qualitat del senyal 1 a 5."
    ],
    "correctIndex": 2,
    "explanation": "Secció 2.6.1: cada efectiu es comunica únicament amb el seu comandament directe (+1) o subordinats directes (-1) per no saturar el canal ni trencar la cadena de comandament."
  },
  {
    "id": "ex-b2-t17-24",
    "topic": 17,
    "difficulty": "Mitjà",
    "question": "En una prova de ràdio, si una transmissió arriba «Llegible amb molta dificultat (entretallada)» i una altra arriba «Llegible (bon senyal)», quins números de l'escala 1–5 corresponen a cadascuna?",
    "options": [
      "Entretallada = 2 | Bon senyal = 3.",
      "Entretallada = 1 | Bon senyal = 5.",
      "Entretallada = 3 | Bon senyal = 4.",
      "Entretallada = 2 | Bon senyal = 4."
    ],
    "correctIndex": 3,
    "explanation": "Escala 3.5.5: 1 = Il·legible; 2 = Llegible amb molta dificultat (entretallat); 3 = Llegible amb certa dificultat; 4 = Llegible (bon senyal); 5 = Perfectament llegible (alt i clar)."
  },
  {
    "id": "ex-b2-t17-25",
    "topic": 17,
    "difficulty": "Difícil",
    "question": "Quin és l'ordre cronològic complet dels codis ZULU d'un servei d'emergència ordinari en què el vehicle torna operatiu al parc?",
    "options": [
      "Z-0 (Rebut) → Z-2 (Sortida) → Z-4 (Arribada al lloc) → Z-5 (Retorn disponible) → Z-7 (Arribada al parc).",
      "Z-1 → Z-2 → Z-3 → Z-6 → Z-7.",
      "Z-0 (Rebut) → Z-4 (Sortida) → Z-2 (Arribada al lloc) → Z-5 (Retorn disponible) → Z-1 (Arribada al parc).",
      "Z-2 (Rebut) → Z-0 (Sortida) → Z-4 (Arribada al lloc) → Z-8 (Retorn disponible) → Z-7 (Arribada al parc)."
    ],
    "correctIndex": 0,
    "explanation": "Taula Resum 5: Z-0 (Rebut) → Z-2 (Sortida) → Z-4 (En lloc) → Z-5 (Retorn disponible) → Z-7 (Arribada al parc)."
  },
  {
    "id": "ex-b2-t18-1",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "En la codificació operativa X.YY.ZZ dels vehicles de Bombers de la Generalitat, què indiquen el primer dígit (X) i els dos últims dígits (ZZ) en el codi 3.20.11?",
    "options": [
      "3 = Tipus d'autobomba | 11 = Regió d'Emergències.",
      "3 = Torn de guàrdia | 11 = Capacitat en metres cúbics de la cisterna.",
      "3 = Regió d'Emergències | 11 = Tipus funcional i número d'ordre del vehicle (dins del Parc 20).",
      "3 = Any de posada en servei | 11 = Codi del parc comarcal."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 1 de MAN.EQIP.000: X (1 dígit) = Regió d'Emergències; YY (2 dígits) = Parc de Bombers; ZZ (2 dígits) = Tipus funcional i número d'ordre del vehicle."
  },
  {
    "id": "ex-b2-t18-2",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Quin vehicle autobomba té cabina doble per a 5–6 bombers, dimensions compactes (4×2) i una cisterna d'entre 1.000 i 2.000 litres per a nuclis històrics i carrers estrets?",
    "options": [
      "BUP (Bomba Urbana Pesant).",
      "BNP (Bomba Nodrissa Pesant).",
      "BRP (Bomba Rural Pesant).",
      "BUL (Bomba Urbana Lleugera)."
    ],
    "correctIndex": 3,
    "explanation": "Taula Cap. 3 (3.2): la BUL té cisterna de 1.000 a 2.000 L, xassís urbà compacte i estret (4×2) i cabina doble per a 5–6 bombers."
  },
  {
    "id": "ex-b2-t18-3",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "A més de la cisterna d'aigua (> 3.000 L, habitualment 3.000–4.000 L) i escumogen, quin equipament específic transporta una Bomba Urbana Pesant (BUP) que la fa idònia per a primera sortida en incendis estructurals i accidents de trànsit?",
    "options": [
      "Equip complet d'excarceració, equips de respiració autònoma (ERA) i bomba combinada de baixa/alta pressió.",
      "Vestits hermètics Tipus 1 (EN 943) i bombes de transvasament ATEX.",
      "Ruixadors d'autoprotecció de cabina i rodes amb dipòsit de reserva de 500 L.",
      "Ploma telescòpica de gran tonatge per remolcar autobusos bolcats."
    ],
    "correctIndex": 0,
    "explanation": "Taula Cap. 3 (3.3): la BUP (4×2, > 3.000 L + escumogen) porta equip complet d'excarceració, ERA i bomba combinada de baixa/alta pressió."
  },
  {
    "id": "ex-b2-t18-4",
    "topic": 18,
    "difficulty": "Difícil",
    "question": "Quina capacitat aproximada té el dipòsit de reserva propi que alimenta els ruixadors d'autoprotecció de cabina i rodes d'una Bomba Rural Pesant (BRP)?",
    "options": [
      "Entre 50 i 100 litres.",
      "Entre 300 i 500 litres.",
      "Exactament 2.000 litres independents de la cisterna.",
      "La BRP no disposa de dipòsit propi per als ruixadors."
    ],
    "correctIndex": 1,
    "explanation": "Taula Cap. 3 (3.4) i text comparatiu: la BRP (4×4 amb reductora i bloqueig de diferencials, ~3.000–3.500 L) incorpora ruixadors d'autoprotecció de cabina i rodes amb un dipòsit de reserva propi de ~300–500 L."
  },
  {
    "id": "ex-b2-t18-5",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Quina configuració de cabina i d'eixos presenta habitualment una Bomba Nodrissa Pesant (BNP) destinada a l'abastament massiu d'aigua (≥ 8.000 litres)?",
    "options": [
      "Cabina doble (6 places) i xassís compacte 4×2.",
      "Cabina triple (9 places) i xassís 4×4 amb reductora.",
      "Cabina simple (2–3 places) i xassís pesant de 2 o 3 eixos.",
      "No té cabina tancada, sinó plataforma descoberta tipus pick-up."
    ],
    "correctIndex": 2,
    "explanation": "Taula Cap. 3 (3.5): la BNP (8.000 a 12.000 L) té xassís pesant de 2 o 3 eixos i cabina simple (2–3 places), ja que la seva funció és l'abastament d'aigua."
  },
  {
    "id": "ex-b2-t18-6",
    "topic": 18,
    "difficulty": "Difícil",
    "question": "Si en un incendi industrial necessitem treballar amb la bomba centrífuga combinada d'una BUP en mode d'Alta Pressió per a una llança de primer socors, quin rang de pressió i cabal ens ofereix aquest esglaó?",
    "options": [
      "10–15 bar i 2.000–3.000 L/min.",
      "5–8 bar i 4.500 L/min.",
      "60–80 bar i 50–100 L/min.",
      "35–40 bar i 250–400 L/min."
    ],
    "correctIndex": 3,
    "explanation": "Nota Taula Cap. 3: Baixa Pressió = 10–15 bar (gran cabal, 2.000–3.000 L/min); Alta Pressió = 35–40 bar (250–400 L/min)."
  },
  {
    "id": "ex-b2-t18-7",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Quins elements d'estabilització i de comandament incorpora una Autoescala Automàtica (AEA) o Autobraç Articulat (ABA) segons l'apartat 4.2 del manual?",
    "options": [
      "4 estabilitzadors hidràulics i doble comandament a la torreta i a la cistella.",
      "2 estabilitzadors posteriors i comandament únic dins la cabina del conductor.",
      "6 estabilitzadors mecànics i control exclusiu per ràdio DMO des del terra.",
      "No necessita estabilitzadors si treballa per sota dels 30 metres d'alçada."
    ],
    "correctIndex": 0,
    "explanation": "Taula 4.1–4.4: l'AEA/ABA (20 a 42 m, habitual 30 m ≈ PL+8) incorpora 4 estabilitzadors hidràulics i comandament a torreta i cistella."
  },
  {
    "id": "ex-b2-t18-8",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Ens activen per a un accident greu amb un camió tràiler bolcat que atrapa un turisme a sota, i simultàniament en un altre sector cal hissar una vaca caiguda en un pou. Quin tipus de grua s'assigna a cada servei?",
    "options": [
      "Grua Lleugera per al camió tràiler | Grua Pesada per a la vaca al pou.",
      "Grua Pesada per al camió tràiler | Grua Lleugera per a la vaca al pou.",
      "FSV (Furgó de Salvaments Varis) per al camió tràiler | BNP per a la vaca.",
      "Tots dos serveis requereixen exclusivament un helicòpter bombarder."
    ],
    "correctIndex": 1,
    "explanation": "Taula 4.2: Grua Pesada = aixecament i remolc de camions, autobusos o vagons bolcats; Grua Lleugera = suport en rescat d'animals de gran pes (cavalls/vaques), vehicles lleugers i càrregues mitjanes."
  },
  {
    "id": "ex-b2-t18-9",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Per a quines intervencions està dissenyat el Furgó de Salvaments Varis (FSV) i de quin element característic de les autobombes manca?",
    "options": [
      "No té armaris perimetrals; transporta vestits hermètics Tipus 1 (EN 943) i línia NRBQ.",
      "No té rodes motrius posteriors; transporta 8.000 L d'aigua i escumogen.",
      "No té cisterna d'aigua; transporta apuntalaments, bombes d'esgotament, generadors, il·luminació i material de rescat urbà.",
      "No té equip d'il·luminació; transporta únicament personal de relleu GRAF."
    ],
    "correctIndex": 2,
    "explanation": "Taula 4.3: l'FSV no té cisterna d'aigua, va carrossat amb armaris perimetrals per a eines d'assistències tècniques (apuntalaments, esgotament d'aigua, generadors, il·luminació i rescat urbà)."
  },
  {
    "id": "ex-b2-t18-10",
    "topic": 18,
    "difficulty": "Difícil",
    "question": "Quins elements específics d'equipament conté un Furgó de Risc Químic (FRQ) segons l'apartat 4.4 de MAN.EQIP.000?",
    "options": [
      "Monitor desfibril·lador, respirador SVA i llitera d'evacuació medicalitzada.",
      "Exclusivament sepiolita, pales, escombres i botes forestals F1.",
      "Equip complet d'apicultor, perxes de captura animal i motoserres de 3/8\".",
      "Vestits hermètics Tipus 1 (EN 943), detectors multigas, coixins i falques de taponament de fuites, bombes de transvasament ATEX i línia de descontaminació NRBQ."
    ],
    "correctIndex": 3,
    "explanation": "Taula 4.4: el FRQ porta vestits hermètics Tipus 1 (EN 943), detectors multigas, coixins i falques de taponament, bombes de transvasament ATEX i línia de descontaminació NRBQ."
  },
  {
    "id": "ex-b2-t18-11",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Segons l'article 4 del RD 836/2012 recollit al manual, quina és la dotació mínima de personal sanitari d'una ambulància assistencial de Classe B (SVB)?",
    "options": [
      "Mínim 2 TES: 1 conductor TES + 1 TES amb funcions d'ajudant (sense metge ni infermer).",
      "1 conductor TES + 1 infermer/a (DUE/Grau) + 1 metge/essa.",
      "Únicament 1 conductor amb certificat bàsic de transport sense ajudant.",
      "1 conductor + 1 metge especialista en emergències sense TES."
    ],
    "correctIndex": 0,
    "explanation": "Taula 5.1 (RD 836/2012): Classe B (SVB) = mínim 2 TES (conductor TES + TES ajudant), sense metge ni infermer. La Classe C (SVA) porta conductor TES + infermer/a + metge/essa (o TES + infermer/a en SVA-I SEM)."
  },
  {
    "id": "ex-b2-t18-12",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Quin tipus de vehicle sanitari segons el RD 836/2012 es destina al transport conjunt de diversos pacients (asseguts o en cadira) sense malaltia infectocontagiosa ni urgència vital?",
    "options": [
      "Ambulància Classe A1 (No assistencial individual).",
      "Ambulància Classe A2 (No assistencial col·lectiva).",
      "Ambulància Classe B (SVB).",
      "VIR (Vehicle d'Intervenció Ràpida)."
    ],
    "correctIndex": 1,
    "explanation": "Taula 5.1: Classe A1 = transport individual en llitera sense assistència en ruta; Classe A2 = transport col·lectiu de diversos pacients sense malaltia infectocontagiosa ni urgència vital."
  },
  {
    "id": "ex-b2-t18-13",
    "topic": 18,
    "difficulty": "Difícil",
    "question": "Quina diferència fonamental existeix entre una ambulància Classe C (SVA) i un Vehicle d'Intervenció Ràpida (VIR) pel que fa al trasllat de pacients?",
    "options": [
      "El VIR pot traslladar fins a 2 pacients crítics en llitera, mentre que la Classe C només n'hi cap 1.",
      "El VIR només porta 2 TES sense material SVA, mentre que la Classe C porta metge i infermer.",
      "Tant la Classe C com el VIR porten equipament SVA i equip sanitari, però el VIR NO pot traslladar pacients en llitera.",
      "La Classe C és no assistencial i el VIR és una ambulància col·lectiva."
    ],
    "correctIndex": 2,
    "explanation": "Taula 5.1: el VIR és un vehicle lleuger (4×4 o turisme) que desplaça ràpidament l'equip sanitari (GEM/GROS) i material SVA al lloc, però NO pot traslladar pacients en llitera."
  },
  {
    "id": "ex-b2-t18-14",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Quina gradació de vehicles de comandament utilitza Bombers de la Generalitat segons la magnitud de l'emergència (de menor a major capacitat)?",
    "options": [
      "UCP (Lleugera) → UCM (Mitjana) → UCL (Pesant).",
      "UCL (Mitjana) → UCM (Pesant) → UCP (Lleugera).",
      "UPC (Lleugera) → FSV (Mitjana) → FRQ (Pesant).",
      "UCL (Unitat de Comandament Lleugera) → UCM (Mitjana) → UCP (Unitat de Comandament Pesant)."
    ],
    "correctIndex": 3,
    "explanation": "Taula 5.2: UCL (SUV/4×4 per a valoració inicial i CCA bàsic) → UCM (furgó amb taula, RESCAT i pantalles SIG) → UCP (camió/mòdul amb sala de crisi, estació meteo, servidors GIS i satèl·lit per a Grans Emergències)."
  },
  {
    "id": "ex-b2-t18-15",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "En un Gran Incendi Forestal (GIF) o en una emergència química PLASEQCAT, quina unitat de comandament aporta sala de crisi, estació meteorològica, servidors GIS i comunicacions per satèl·lit?",
    "options": [
      "UCP (Unitat de Comandament Pesant).",
      "UCM (Unitat de Comandament Mitjana).",
      "UCL (Unitat de Comandament Lleugera).",
      "UPC (Unitat de Personal i Càrrega)."
    ],
    "correctIndex": 0,
    "explanation": "Taula 5.2: la UCP (Unitat de Comandament Pesant) és un camió o mòdul desplegable de gran superfície amb sala de crisi, estació meteorològica, servidors GIS i comunicacions satèl·lit."
  },
  {
    "id": "ex-b2-t18-16",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Quines dues modalitats principals de càrrega d'aigua empren els helicòpters bombarders de Bombers (capacitat de 500 a 1.500 litres)?",
    "options": [
      "1) Càrrega en pista d'aeroport amb motobomba i 2) Lliscament sobre el mar a 120 km/h.",
      "1) Helibalde (Bambi Bucket) suspès amb ganxo de càrrega o 2) Dipòsit ventral rígid amb trompa d'aspiració (snorkel).",
      "1) Bomba d'alta pressió de 40 bar i 2) Cisterna nodrissa aèria.",
      "Exclusivament dipòsits desmuntables carregats manualment amb mànegues de Ø70."
    ],
    "correctIndex": 1,
    "explanation": "Taula 6: els helicòpters (500–1.500 L) carreguen mitjançant helibalde suspès (Bambi Bucket) o dipòsit ventral rígid amb trompa d'aspiració (snorkel)."
  },
  {
    "id": "ex-b2-t18-17",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Quina capacitat aproximada d'aigua o retardant tenen respectivament els avions AVA de càrrega en terra i els avions amfibis (tipus Foca / Canadair)?",
    "options": [
      "AVA: ~500 L | Amfibi: ~1.500 L.",
      "AVA: ~8.000 L | Amfibi: ~12.000 L.",
      "AVA: ~3.100 L (sovint amb retardant químic) | Amfibi: ~5.500–6.000 L (carregant en mar o pantà).",
      "Tots dos tenen una capacitat fixa de 2.000 litres."
    ],
    "correctIndex": 2,
    "explanation": "Taula 6 (6.2): els avions d'extinció carreguen entre 3.000 i 6.000 L; en concret, els AVA de càrrega en terra ~3.100 L (amb retardant) i els amfibis (Foca/Canadair) ~5.500–6.000 L."
  },
  {
    "id": "ex-b2-t18-18",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Quines funcions operatives desenvolupen els helicòpters dins dels Mitjans Aeris (MAER) a banda de les descàrregues quirúrgiques d'extinció?",
    "options": [
      "Únicament funcions de vigilància policial sense capacitat de descàrrega.",
      "Només descàrregues d'aigua, ja que tenen prohibit transportar personal o fer rescats.",
      "Remolc de camions pesants i neteja de calçades amb sepiolita.",
      "Transport d'heliportats (GRAF / GRAE), rescat amb grua d'hissat i coordinació aèria (imatges tèrmiques)."
    ],
    "correctIndex": 3,
    "explanation": "Taula 6 (6.1): els helicòpters realitzen transport d'heliportats (GRAF/GRAE), rescat amb grua d'hissat, coordinació aèria (imatges tèrmiques) i descàrregues quirúrgiques d'extinció."
  },
  {
    "id": "ex-b2-t18-19",
    "topic": 18,
    "difficulty": "Difícil",
    "question": "Durant la revisió diària del vehicle al començament de la guàrdia (Cap. 7 de MAN.EQIP.000), per què s'engega el motor abans de donar-lo per operatiu?",
    "options": [
      "Per verificar la presa de força (PTO) de la bomba, els senyals prioritaris (V-1 blaus i acústics), l'emissora RESCAT i el circuit de frens pneumàtics.",
      "Només per comprovar la càrrega de la bateria i escalfar la cabina.",
      "Per buidar completament la cisterna d'aigua i tornar-la a omplir cada matí.",
      "Per comprovar que els ruixadors d'autoprotecció funcionin dins la cotxera."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 7: al canvi de torn es revisen nivells (combustible, oli, refrigerant, AdBlue, cisterna aigua/escumogen plena), pneumàtics, frens pneumàtics, i s'engega el motor per verificar la PTO de la bomba, senyals V-1/acústics, emissora RESCAT i inventari (ERA a 300 bar)."
  },
  {
    "id": "ex-b2-t18-20",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "En conducció d'urgència i estacionament a l'escena (Cap. 7), quina doble responsabilitat té el conductor del vehicle prioritari?",
    "options": [
      "Circular sense senyals acústics de nit i aparcar el més a prop possible de la façana en flames.",
      "Garantir la seguretat durant la conducció amb els senyals lluminosos i acústics activats, i estacionar protegint l'escena deixant una via de sortida lliure.",
      "Cedir sempre el pas a tots els vehicles privats encara que porti els senyals V-1 activats.",
      "Estacionar bloquejant tots els carrils perquè cap altra autobomba pugui avançar."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 7: els vehicles prioritaris tenen preferència amb senyals lluminosos i acústics activats, sota responsabilitat del conductor de garantir la seguretat i estacionar protegint l'escena amb una via de sortida lliure."
  },
  {
    "id": "ex-b2-t18-21",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Quin altre grup de furgons especials esmenta l'apartat 4 del manual per al transport de material dels grups operatius de suport?",
    "options": [
      "Només avions amfibis i helicòpters de càrrega.",
      "Exclusivament ambulàncies A1 i A2 adaptades.",
      "FRA (Furgó de Rescat Aquàtic), vehicles per a GRAE Muntanya/Subaquàtic, GRIT i transport de contenidors.",
      "Camions formigoners i grues torre d'edificació."
    ],
    "correctIndex": 2,
    "explanation": "Taula 4.1–4.4: Altres furgons especials inclouen FRA (Rescat Aquàtic), Muntanya (GRAE), Contenidors i suport als grups operatius (GRAE Subaquàtic, GRAE Muntanya, GRIT)."
  },
  {
    "id": "ex-b2-t18-22",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Fins a quina planta aproximada d'un edifici d'habitatges arriba una Autoescala Automàtica (AEA) estàndard de 30 metres d'alçada?",
    "options": [
      "Fins a una Planta 4 (PL+4).",
      "Fins a una Planta 20 (PL+20).",
      "Fins a una Planta 14 (PL+14).",
      "Fins a una Planta 8 (PL+8)."
    ],
    "correctIndex": 3,
    "explanation": "Nota Taula 4.1–4.4 i Resum: l'AEA estàndard de 30 metres (dins del rang de 20 a 42 m) arriba aproximadament fins a una Planta 8 (PL+8)."
  },
  {
    "id": "ex-b2-t18-23",
    "topic": 18,
    "difficulty": "Difícil",
    "question": "En una ambulància assistencial de Classe C (SVA), quina composició de personal sanitari hi pot anar en la modalitat SVA-I del SEM segons la taula del RD 836/2012 al manual?",
    "options": [
      "TES + infermer/a (DUE/Grau), mentre que la SVA mèdica completa porta mínim 1 conductor TES + 1 infermer/a + 1 metge/essa.",
      "Només 1 conductor TES sense infermer ni metge.",
      "2 metges sense conductor TES.",
      "1 ajudant no qualificat + 1 bomber de primera sortida."
    ],
    "correctIndex": 0,
    "explanation": "Taula 5.1 (RD 836/2012): Classe C (SVA) = mínim 1 conductor TES + 1 infermer/a + 1 metge/essa (en SVA-I SEM: TES + infermer/a)."
  },
  {
    "id": "ex-b2-t18-24",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Si una dotació d'un parc rural surt a un incendi de vegetació per una pista forestal amb fort pendent i risc de quedar envoltada pel foc, quina autobomba té la tracció i protecció adequades?",
    "options": [
      "La BUL (4×2 compacta).",
      "La BRP (4×4 tot terreny amb reductora, bloqueig de diferencials i ruixadors d'autoprotecció).",
      "La BUP (4×2 urbana/carretera).",
      "La BNP (3 eixos de 12.000 L i cabina simple)."
    ],
    "correctIndex": 1,
    "explanation": "La BRP (Bomba Rural Pesant) té xassís 4×4 amb reductora, bloqueig de diferencials i ruixadors d'autoprotecció de cabina i rodes amb dipòsit de reserva propi."
  },
  {
    "id": "ex-b2-t18-25",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Quin vehicle de Bombers s'identifica amb les sigles V-1 als senyals lluminosos blaus comprovats a la revisió diària del canvi de torn?",
    "options": [
      "El connector de càrrega ràpida de les ampolles d'ERA a 300 bar.",
      "La vàlvula de purga d'aire del dipòsit de combustible AdBlue.",
      "El senyal lluminós prioritari blau dels vehicles d'emergència.",
      "L'interruptor de la presa de força (PTO) de la bomba d'alta pressió."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 7: a la revisió diària es verifiquen els senyals prioritaris (V-1 blaus i acústics)."
  },
  {
    "id": "ex-b2-t20-1",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Segons la Llei 31/1995 (LPRL) i el RD 773/1997, en quin ordre preventiu se situa la utilització d'un Equip de Protecció Individual (EPI)?",
    "options": [
      "És la primera mesura prioritària abans d'eliminar el risc o posar proteccions col·lectives.",
      "És sempre l'última barrera de protecció, quan els riscos no s'han pogut eliminar en l'origen ni controlar amb protecció col·lectiva.",
      "Substitueix completament les mesures de protecció col·lectiva en intervencions urgents.",
      "Només és obligatori per a treballs en altura, no per a incendis."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 1 de MAN.SEGU.000: la Llei 31/1995 i el RD 773/1997 estableixen que l'EPI és sempre l'ÚLTIMA BARRERA de protecció."
  },
  {
    "id": "ex-b2-t20-2",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Quin tipus de marcatge CE i certificació correspon a uns guants de treball mecànic estàndard o roba d'alta visibilitat classificats com a Categoria II segons el Reglament (UE) 2016/425?",
    "options": [
      "Autocertificació del fabricant sense intervenció d'organisme notificat.",
      "Marcatge CE + 4 dígits amb control anual obligatori de producció.",
      "Marcatge CE simple amb examen UE de tipus per un organisme notificat (riscos intermedis, no mortals ni irreversibles).",
      "No requereixen marcatge CE a la Unió Europea."
    ],
    "correctIndex": 2,
    "explanation": "Taula 2.1: Cat I = risc mínim, CE simple autocertificat; Cat II = risc intermedi, CE amb examen UE de tipus per organisme notificat (sense els 4 dígits); Cat III = risc mortal/irreversible, CE + 4 dígits."
  },
  {
    "id": "ex-b2-t20-3",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Quines són les 4 capes que componen el vestit d'incendi estructural (jaqueta i cubrepantaló UNE-EN 469) i quin nivell d'aquesta norma utilitzen els Bombers de la Generalitat?",
    "options": [
      "Monocapa ignífuga transpirable de Nivell 1.",
      "3 capes hermètiques a gasos amb pressió positiva interior.",
      "2 capes (només teixit exterior i folre ignífug) en Nivell 3.",
      "4 capes (teixit exterior + membrana impermeable/transpirable + barrera tèrmica + folre) en Nivell 2."
    ],
    "correctIndex": 3,
    "explanation": "Taula 2.2–2.3: UNE-EN 469 té 4 capes (teixit exterior + membrana impermeable/transpirable + barrera tèrmica + folre) i Bombers utilitza el Nivell 2."
  },
  {
    "id": "ex-b2-t20-4",
    "topic": 20,
    "difficulty": "Difícil",
    "question": "Dins dels 4 índexs d'assaig de la norma UNE-EN 469 (Xf, Xr, Y, Z), què avaluen respectivament els índexs Y i Z?",
    "options": [
      "Y = impermeabilitat (penetració) a l'aigua | Z = resistència al vapor d'aigua (transpirabilitat).",
      "Y = transferència de calor per flama | Z = calor radiant.",
      "Y = resistència a l'abrasió mecànica | Z = aïllament elèctric fins a 440 V.",
      "Y = visibilitat nocturna | Z = estanquitat a gasos tòxics."
    ],
    "correctIndex": 0,
    "explanation": "Taula 2.2–2.3: Xf = transferència calor flama; Xr = calor radiant; Y = impermeabilitat a l'aigua; Z = resistència al vapor d'aigua (transpirabilitat)."
  },
  {
    "id": "ex-b2-t20-5",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Per què la roba d'incendi forestal (UNE-EN 15614 / ISO 15384) és monocapa i molt transpirable en lloc de portar les 4 capes de la roba estructural?",
    "options": [
      "Perquè en incendis forestals no hi ha calor radiant ni risc de cremades.",
      "Per evitar el cop de calor (estrès tèrmic) durant l'esforç físic prolongat en entorns forestals.",
      "Per poder-la utilitzar com a vestit hermètic contra gasos Tipus 1b.",
      "Perquè la normativa europea prohibeix portar folres tèrmics a l'aire lliure."
    ],
    "correctIndex": 1,
    "explanation": "Taula 2.2–2.3: l'EPI lleuger forestal (UNE-EN 15614 / ISO 15384) és monocapa ignífuga lleugera i molt transpirable per evitar el cop de calor en esforç prolongat."
  },
  {
    "id": "ex-b2-t20-6",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Quin tipus de casc correspon a la norma UNE-EN 443 i quines parts del cap protegeix?",
    "options": [
      "Casc lleuger ventilat tipus A només per a rescat en muntanya.",
      "Casc exclusiu per a incendis forestals sense pantalla facial.",
      "Casc d'incendi estructural integral (Tipus B, cobreix orelles i clatell) amb pantalla facial i ocular, resistent a flama directa, impacte, perforació i aïllament elèctric.",
      "Casc de Categoria I autocertificat només contra cops lleus."
    ],
    "correctIndex": 2,
    "explanation": "Taula 2.2–2.3: UNE-EN 443 és el casc d'incendi estructural integral (Tipus B, cobreix orelles i clatell) amb pantalla facial i ocular."
  },
  {
    "id": "ex-b2-t20-7",
    "topic": 20,
    "difficulty": "Difícil",
    "question": "Dins de la norma UNE-EN 15090 per a botes de bomber, quina propietat addicional indiquen les variants F2A i F2I respecte de la categoria F2?",
    "options": [
      "F2A = apta per a alta muntanya | F2I = impermeable a hidrocarburs.",
      "F2A = ús en aigua dolça | F2I = ús en aigua salada.",
      "F2A = puntera d'alumini | F2I = sola ignífuga fins a 1.000 °C.",
      "F2A = propietats antiestàtiques | F2I = aïllament elèctric."
    ],
    "correctIndex": 3,
    "explanation": "Taula 2.2–2.3: UNE-EN 15090 classifica en F1 (forestal), F2 (estructural/rescat, amb F2A = antiestàtica i F2I = aïllament elèctric) i F3 (risc químic/NRBQ)."
  },
  {
    "id": "ex-b2-t20-8",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Quina norma correspon als guants de rescat mecànic enfront dels guants d'incendi estructural, i quina norma correspon a la roba d'alta visibilitat?",
    "options": [
      "Guants mecànics/rescat: EN 388 (foc: EN 659) | Alta visibilitat: UNE-EN ISO 20471.",
      "Guants mecànics/rescat: EN 659 (foc: EN 388) | Alta visibilitat: UNE-EN 13911.",
      "Guants mecànics/rescat: EN 136 | Alta visibilitat: UNE-EN 14605.",
      "Guants mecànics/rescat: EN 16473 | Alta visibilitat: UNE-EN 15090."
    ],
    "correctIndex": 0,
    "explanation": "Taula 2.2–2.3: guants foc estructural = UNE-EN 659; guants mecànics/rescat = EN 388; alta visibilitat = UNE-EN ISO 20471."
  },
  {
    "id": "ex-b2-t20-9",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Dins dels vestits de protecció química (Cap. 2.4), quina diferència hi ha entre un vestit Tipus 1c, un Tipus 3 i un Tipus 4?",
    "options": [
      "Tipus 1c: partícules sòlides | Tipus 3: gasos no hermètics | Tipus 4: esquitxades lleugeres.",
      "Tipus 1c: alimentat per línia d'aire exterior (hermètic a gasos, EN 943) | Tipus 3: raigs de líquid a pressió (EN 14605) | Tipus 4: líquids polvoritzats / esprai (EN 14605).",
      "Tipus 1c: ERA a dins sense línia d'aire | Tipus 3: esprai líquid | Tipus 4: raig líquid a pressió.",
      "Tots tres protegeixen únicament contra pols d'amiant segons la norma ISO 13982-1."
    ],
    "correctIndex": 1,
    "explanation": "Taula 2.4: Tipus 1 (EN 943): 1a ERA dins, 1b ERA fora, 1c línia d'aire exterior, 1-ET emergències; Tipus 3 (EN 14605): raigs de líquid a pressió; Tipus 4 (EN 14605): líquids polvoritzats/esprai."
  },
  {
    "id": "ex-b2-t20-10",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Quin vestit químic de protecció contra gasos NO és hermètic a gasos, sinó que protegeix mitjançant sobrepressió interna contínua subministrada per línia d'aire (EN 943-1)?",
    "options": [
      "Tipus 1a.",
      "Tipus 3.",
      "Tipus 2.",
      "Tipus 5."
    ],
    "correctIndex": 2,
    "explanation": "Taula 2.4: el Tipus 2 (EN 943-1, ús industrial, rar en emergències) és no hermètic a gasos i protegeix per sobrepressió interna contínua via línia d'aire."
  },
  {
    "id": "ex-b2-t20-11",
    "topic": 20,
    "difficulty": "Difícil",
    "question": "En un ERA de circuit obert a 300 bar, a quina pressió aproximada està tarada la vàlvula de seguretat del manoreductor (1a etapa) per protegir el circuit si aquest falla?",
    "options": [
      "A +3,9 mbar.",
      "A ~55 ± 5 bar.",
      "A ~170 bar.",
      "A ~11–12 bar (per sobre dels 6–8 bar de mitjana pressió)."
    ],
    "correctIndex": 3,
    "explanation": "Taula 3.2–3.3: el manoreductor (1a etapa) redueix de 300 bar a 6–8 bar constants i incorpora una vàlvula de seguretat tarada a ~11–12 bar per si falla."
  },
  {
    "id": "ex-b2-t20-12",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Quin consum d'aire aproximat té el xiulet acústic pneumàtic de reserva d'un ERA quan s'activa a 55 ± 5 bar?",
    "options": [
      "Uns 5 L/min.",
      "Uns 50 L/min.",
      "Uns 100 L/min.",
      "No consumeix aire de l'ampolla perquè és sempre elèctric."
    ],
    "correctIndex": 0,
    "explanation": "Taula 3.2–3.3: el xiulet acústic de reserva (EN 137) s'activa a 55 ± 5 bar (≈ 60 bar) amb potència ≥ 90 dB i consumeix ~5 L/min (si és pneumàtic) sonant contínuament fins a esgotar l'aire."
  },
  {
    "id": "ex-b2-t20-13",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Com funciona el dispositiu d'Home Mort (PASS) d'un ERA quan un bomber queda immòbil a l'interior d'un edifici?",
    "options": [
      "Sona immediatament l'alarma màxima als 10 segons sense prealarma prèvia.",
      "Als 30 segons d'immobilitat sona una prealarma (cancel·lable movent-se); si passen 10 segons més sense moviment (40 s totals), es dispara l'alarma màxima d'emergència (> 95 dB).",
      "Als 60 segons envia un missatge SDS sense emetre cap so acústic.",
      "Només s'activa quan la pressió de l'ampolla baixa dels 60 bar."
    ],
    "correctIndex": 1,
    "explanation": "Taula 3.2–3.3: Home Mort (PASS) = 30 s d'immobilitat (prealarma) + 10 s més (40 s totals) → alarma màxima > 95 dB."
  },
  {
    "id": "ex-b2-t20-14",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Quin codi de colors mostra la balisa electrònica de l'ERA a mesura que baixa la pressió de l'ampolla (300 → 170 → 110 → 60 bar)?",
    "options": [
      ">170 bar: Groc | 110 bar: Vermell | 60 bar: Intermitent verd.",
      ">200 bar: Blau | 170 bar: Verd | 110 bar: Vermell | 60 bar: S'apaga la balisa.",
      ">170 bar: Verd | 170 bar: Groc | 110 bar: Segon avís groc / intermitent | 60 bar: Vermell + alarma acústica.",
      "Només té llum vermella quan s'arriba a 0 bar."
    ],
    "correctIndex": 2,
    "explanation": "Taula 3.2–3.3: >170 bar Verd; 170 bar passa a Groc; 110 bar segon avís groc/intermitent; 60 bar Vermell + alarma acústica de retirada."
  },
  {
    "id": "ex-b2-t20-15",
    "topic": 20,
    "difficulty": "Difícil",
    "question": "Un bomber porta una ampolla de composite de 6,8 L carregada només a 200 bar (parcialment usada) i entra amb un consum estàndard d'intervenció de 50 L/min. Quina autonomia operativa de treball li queda respectant el 25% de reserva sobre aquest aire disponible?",
    "options": [
      "27,2 minuts.",
      "13,6 minuts.",
      "30,6 minuts.",
      "20,4 minuts."
    ],
    "correctIndex": 3,
    "explanation": "V_total = 6,8 L × 200 bar = 1.360 L. Aire útil (75%) = 0,75 × 1.360 = 1.020 L. A 50 L/min: 1.020 / 50 = 20,4 minuts."
  },
  {
    "id": "ex-b2-t20-16",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Quants litres d'aire total (a 1 bar), quants litres de reserva (25%) i quants litres útils (75%) conté una ampolla estàndard de 6,8 L carregada a 300 bar?",
    "options": [
      "Total: 2.040 L | Reserva: 510 L | Útil: 1.530 L.",
      "Total: 1.800 L | Reserva: 450 L | Útil: 1.350 L.",
      "Total: 2.400 L | Reserva: 600 L | Útil: 1.800 L.",
      "Total: 2.040 L | Reserva: 300 L | Útil: 1.740 L."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 3.4: 6,8 L × 300 bar = 2.040 L totals; Reserva 25% = 510 L (75 bar); Aire útil 75% = 1.530 L."
  },
  {
    "id": "ex-b2-t20-17",
    "topic": 20,
    "difficulty": "Difícil",
    "question": "Segons la taula de consum respiratori del Cap. 3.4, quin és el consum en L/min i l'autonomia operativa (75%) en una ampolla de 6,8 L a 300 bar per a una marxa suau / esforç lleuger?",
    "options": [
      "10 L/min i 153 minuts.",
      "20 L/min i 76,5 minuts.",
      "40 L/min i 38,2 minuts.",
      "50 L/min i 30,6 minuts."
    ],
    "correctIndex": 1,
    "explanation": "Taula 3.4: 1. Repòs = 10 L/min (153 min útils); 2. Marxa suau/lleuger = 20 L/min (102 min total / 76,5 min útils); 3. Moderat = 30–40 L/min; 4. Estàndard SGO = 50 L/min (30,6 min); 5. Extrem = 80–100 L/min."
  },
  {
    "id": "ex-b2-t20-18",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Quin factor físic real de l'aire a alta pressió (300 bar) esmenta el manual a la taula 3.2–3.3, tot i que en els càlculs teòrics d'examen s'aplica directament V × P?",
    "options": [
      "La condensació del vapor d'aigua al manòmetre a 170 bar.",
      "Un factor d'expansió tèrmica de 2,5 a 300 bar.",
      "Un factor de compressibilitat real de l'aire de ~0,9 a 300 bar.",
      "La reducció de la massa molecular de l'oxigen al 15%."
    ],
    "correctIndex": 2,
    "explanation": "Taula 3.2–3.3: a 300 bar l'ampolla té un factor de compressibilitat real de ~0,9, però en càlcul teòric d'examen s'aplica V × P."
  },
  {
    "id": "ex-b2-t20-19",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Quines dues zones anatòmiques del cos absorbeixen els contaminants tòxics i cancerígens (HAP, benzè, dioxines) molt més ràpidament per via dèrmica quan la temperatura corporal és alta?",
    "options": [
      "Els palmells de les mans i les plantes dels peus.",
      "Els colzes i els genolls.",
      "Les ungles i el cuir cabellut.",
      "La pell del coll i les engonals."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 4.1: els compostos cancerígens penetren per via inhalatòria i per absorció dèrmica; la pell del coll i les engonals absorbeix tòxics molt més ràpid quan la temperatura corporal és alta."
  },
  {
    "id": "ex-b2-t20-20",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Durant la neteja IN SITU d'un EPI estructural ple de sutge abans de pujar al camió (secció 4.2.2), quina protecció respiratòria cal mantenir mentre es raspalla en sec o es renta a baixa pressió?",
    "options": [
      "Mantenir l'ERA o posar-se una mascareta FFP3 per evitar inhalar les partícules en suspensió.",
      "Cap, perquè ja som a l'aire lliure fora de la zona calenta.",
      "Només una mascareta quirúrgica de paper.",
      "Tapar-se la boca amb el sotacasc mullat."
    ],
    "correctIndex": 0,
    "explanation": "Taula 4.2 (4.2.2 Neteja IN SITU): 1) Mantenir ERA o FFP3 posada en raspallar el sutge en sec o rentar a baixa pressió; 2) Retirar EPI sense tocar l'exterior; 3) Embossar en bosses estanques al cofre exterior; 4) Neteja de mans, cara i coll."
  },
  {
    "id": "ex-b2-t20-21",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Dins del nivell de Neteja Avançada (secció 4.2.4), quines operacions es realitzen sobre l'EPI enviat en bossa tancada al centre de bugaderia industrial especialitzada?",
    "options": [
      "Només esbandit amb aigua freda i assecatge al sol.",
      "Desinfecció tèrmica/química controlada, re-impregnació hidròfuga i revisió de costures i bandes reflectants.",
      "Planxat a vapor a 250 °C per fondre els hidrocarburs.",
      "Substitució automàtica de les 4 capes tèrmiques després de cada servei."
    ],
    "correctIndex": 1,
    "explanation": "Taula 4.2 (4.2.4 Neteja AVANÇADA): desinfecció tèrmica/química controlada, re-impregnació hidròfuga i revisió de costures i bandes reflectants."
  },
  {
    "id": "ex-b2-t20-22",
    "topic": 20,
    "difficulty": "Difícil",
    "question": "Si un bomber connecta una caputxa de rescat per evacuar una víctima a través del fum quan li queden 18 minuts d'autonomia operativa individual, a quin punt del circuit d'ERA es connecta i quina autonomia aproximada passa a tenir?",
    "options": [
      "Es connecta a la presa d'alta pressió (300 bar) i manté 18 minuts.",
      "Es connecta directament a la vàlvula d'exhalació de la màscara i triplica l'autonomia.",
      "Es connecta a la presa auxiliar de mitjana pressió (6–8 bar) i redueix l'autonomia a la meitat (≈ 9 minuts).",
      "Es connecta a la balisa electrònica i no consumeix aire de l'ampolla."
    ],
    "correctIndex": 2,
    "explanation": "Taula 3.2–3.3 (3.5 Caputxa de rescat): connectada a la presa auxiliar de mitjana pressió (6–8 bar), permet evacuar una víctima compartint aire i redueix l'autonomia a la meitat."
  },
  {
    "id": "ex-b2-t20-23",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Quin avantatge i quin inconvenient tècnic presenta un ERA de circuit tancat (de regeneració) enfront d'un ERA de circuit obert en túnels llargs o mines?",
    "options": [
      "No té cap inconvenient respecte del circuit obert.",
      "Avantatge: aire més fred | Inconvenient: només dura 15 minuts.",
      "Avantatge: pesa 1 kg | Inconvenient: no es pot fer servir sense oxigen ambient > 21%.",
      "Avantatge: 2–4 hores d'autonomia | Inconvenient: aporta aire més calent i té més resistència respiratòria."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 3.1–3.2: l'ERA de circuit tancat recicla l'aire exhalat amb un cartutx absorbent de CO₂ i aporta O₂, donant 2–4 hores d'autonomia però amb aire més calent i més resistència."
  },
  {
    "id": "ex-b2-t20-24",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "Quina és la seqüència correcta de les 5 parts principals d'un ERA de circuit obert segons el Capítol 3 de MAN.SEGU.000?",
    "options": [
      "1) Ampolla d'aire (6 L o 6,8 L a 300 bar), 2) Espatllera amb arnés, 3) Manoreductor (1a etapa), 4) Pulmobanda + Màscara (2a etapa), 5) Unitat de control / Manòmetre + Xiulet + Home Mort (PASS).",
      "1) Filtre ABEK, 2) Mascareta FFP3, 3) Bomba centrífuga, 4) Caputxa, 5) Balisa.",
      "1) Cartutx de CO₂, 2) Bossa respiratòria, 3) Ampolla d'O₂ pur, 4) Arnés, 5) V-1.",
      "1) Manòmetre, 2) Sotacasc EN 13911, 3) Casc EN 443, 4) Vestit Tipus 1a, 5) Botes F3."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 3.1–3.2: les 5 parts de l'ERA de circuit obert són ampolla (6 L acer / 6,8 L composite a 300 bar), espatllera amb arnés, manoreductor (1a etapa), pulmobanda + màscara (2a etapa) i unitat de control/manòmetre + xiulet + Home Mort (PASS)."
  },
  {
    "id": "ex-b2-t20-25",
    "topic": 20,
    "difficulty": "Mitjà",
    "question": "En un incident amb risc de projecció de líquids polvoritzats (esprai/aerosol líquid) enfront d'un incident amb projecció de raigs de líquid a pressió (jet), quins tipus de vestits químics corresponen respectivament?",
    "options": [
      "Esprai/polvoritzat: Tipus 6 | Raig a pressió: Tipus 5.",
      "Esprai/polvoritzat: Tipus 4 | Raig a pressió: Tipus 3 (tots dos UNE-EN 14605).",
      "Esprai/polvoritzat: Tipus 3 | Raig a pressió: Tipus 4.",
      "Esprai/polvoritzat: Tipus 1b | Raig a pressió: Tipus 2."
    ],
    "correctIndex": 1,
    "explanation": "Taula 2.4: Tipus 3 (UNE-EN 14605) = raigs de líquid a pressió; Tipus 4 (UNE-EN 14605) = líquids polvoritzats (esprai / aerosol)."
  },
  {
    "id": "ex-b2-t21-1",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Dins del cicle de gestió de les emergències (Cap. 1 de MAN.GRAL.001), a quina fase corresponen l'elaboració de plans d'emergència, la formació, els simulacres i els sistemes d'alerta primerenca?",
    "options": [
      "Reducció (Prevenció i Mitigació).",
      "Recuperació.",
      "Resposta.",
      "Preparació."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 1.1: 1. Reducció (mesures prèvies per evitar o disminuir gravetat); 2. Preparació (plans d'emergència, formació, simulacres i alerta primerenca); 3. Resposta (intervenció immediata); 4. Recuperació (rehabilitació i reconstrucció)."
  },
  {
    "id": "ex-b2-t21-2",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "En l'equació fonamental del risc (Risc = Perill × Vulnerabilitat × Exposició), què defineix exactament el factor 'Vulnerabilitat'?",
    "options": [
      "El grau de fragilitat o susceptibilitat dels elements exposats a patir danys (per exemple, la qualitat constructiva d'un edifici).",
      "La probabilitat que es produeixi un fenomen destructiu d'una intensitat concreta en un lloc i temps.",
      "La quantitat de persones, béns econòmics i infraestructures presents a la zona afectada.",
      "La capacitat dels bombers per accedir a la zona afectada en menys de 10 minuts."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 2.1: Perill = probabilitat del fenomen; Vulnerabilitat = fragilitat/susceptibilitat a patir danys; Exposició = quantitat de persones, béns o patrimoni a la zona."
  },
  {
    "id": "ex-b2-t21-3",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Dins la classificació de tipologies de riscos del manual (Cap. 2.2), a quin bloc pertanyen respectivament els riscos d'incendis forestals (INFOCAT) i els d'accidents químics Seveso (PLASEQCAT)?",
    "options": [
      "INFOCAT = Risc natural | PLASEQCAT = Risc antròpic.",
      "INFOCAT = Risc antròpic | PLASEQCAT = Risc tecnològic.",
      "Tots dos pertanyen al bloc de riscos naturals geofísics.",
      "INFOCAT = Risc tecnològic | PLASEQCAT = Risc natural meteorològic."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 2.2: Naturals (meteo [INUNCAT, NEUCAT, VENCAT], geofísics [SISMICAT, VOLCAT], biològics); Tecnològics (químic Seveso [PLASEQCAT], MMPP [TRANSCAT], radiològic [RADCAT], aeronàutic [AEROCAT]); Antròpics (incendis forestals [INFOCAT], concentracions humanes, atemptats)."
  },
  {
    "id": "ex-b2-t21-4",
    "topic": 21,
    "difficulty": "Difícil",
    "question": "Quines dues fites històriques del sistema català d'emergències van tenir lloc els anys 1986 i 1995 segons la taula cronològica del Capítol 3 de MAN.GRAL.001?",
    "options": [
      "1986: Llei de Protecció Civil | 1995: Llei de Bombers.",
      "1986: Implantació del telèfon 112 | 1995: Aprovació del Decret 30/2015 de PAU.",
      "1986: Impuls dels primers plans arran de desastres com l'incendi del Càmping Els Alfacs / anys 80 | 1995: Creació de la DGEiSC (Direcció General d'Emergències i Seguretat Civil).",
      "1986: Creació del CECAT | 1995: Implantació del sistema SISCOM."
    ],
    "correctIndex": 2,
    "explanation": "Taula 3.2–3.4: 1986 (impuls primers plans), 1994 (Llei 5/1994 de Bombers), 1995 (Creació DGEiSC, actualment DGPEIS i DGPC), 1997 (Llei 4/1997 de Protecció Civil de Catalunya)."
  },
  {
    "id": "ex-b2-t21-5",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Qui ostenta la màxima autoritat local de Protecció Civil en un municipi i qui dirigeix els plans territorials i especials de Catalunya a nivell autonòmic?",
    "options": [
      "Local: El cap de la Policia Local | Autonòmic: El director del telèfon 112.",
      "Local: El secretari municipal | Autonòmic: El cap de la Sala Central de Bombers.",
      "Local: El cap del parc de bombers | Autonòmic: El Ministre de l'Interior.",
      "Local: L'Alcalde/essa | Autonòmic: El Conseller/a d'Interior (i el President/a si s'esdevé)."
    ],
    "correctIndex": 3,
    "explanation": "Taula 3.3.1–3.3.2: a nivell local l'Alcalde/essa és la màxima autoritat de PC; a nivell autonòmic dirigeix el Conseller/a d'Interior (i el President/a si s'esdevé)."
  },
  {
    "id": "ex-b2-t21-6",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "En una emergència declarada d'Interès Nacional (Nivell 3 estatal segons la Llei 17/2015), qui en té la direcció i quins organismes estatals hi donen suport?",
    "options": [
      "La dirigeix el Ministre de l'Interior amb suport de la UME (Unitat Militar d'Emergències) i el CENEM.",
      "La dirigeix el Conseller d'Interior amb suport del CECAT i el SEM.",
      "La dirigeix l'Alcalde de la capital de província amb suport de l'ERCC europeu.",
      "La dirigeix el Cap d'Intervenció de Bombers de la Generalitat des de l'UCP."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 3.3.3: la Llei 17/2015 regula les emergències d'Interès Nacional (Nivell 3 estatal), declarades i dirigides pel Ministre de l'Interior amb suport de la UME i el CENEM."
  },
  {
    "id": "ex-b2-t21-7",
    "topic": 21,
    "difficulty": "Difícil",
    "question": "Dins del Mecanisme Europeu de Protecció Civil (UCPM), què significa l'acrònim ERCC i què és l'ECPP?",
    "options": [
      "ERCC = Equip de Rescat Químic Comarcal | ECPP = Pla d'Emergència Comarcal de Catalunya.",
      "ERCC = Centre de Coordinació de Resposta a Emergències (a Brussel·les) | ECPP = Pool Europeu de Protecció Civil (recursos oferts pels estats).",
      "ERCC = Estació de Ràdio de Control Central | ECPP = Centre Europeu de Previsió Pluviomètrica.",
      "ERCC = Servei de Protecció Civil de Barcelona | ECPP = Protocol d'evacuació en túnels."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 3.5 i Resum: ERCC (Emergency Response Coordination Centre, Brussel·les) i ECPP (Pool Europeu de Protecció Civil)."
  },
  {
    "id": "ex-b2-t21-8",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Quin pla té com a finalitat afrontar qualsevol emergència general en l'àmbit de Catalunya que no disposi d'un pla especial propi?",
    "options": [
      "El PLEGEM.",
      "El PLASEQCAT.",
      "El PROCICAT (Pla Territorial de Protecció Civil de Catalunya).",
      "El DUPROCIM."
    ],
    "correctIndex": 2,
    "explanation": "Taula 4.1: els Plans Territorials (PROCICAT a nivell de Catalunya i PBEM/PAM a nivell municipal) afronten emergències generals que no tenen un pla especial propi."
  },
  {
    "id": "ex-b2-t21-9",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Quins són els 4 blocs en què s'estructura formalment qualsevol pla de protecció civil segons l'apartat 4.2 del manual?",
    "options": [
      "1. Prealerta, 2. Alerta, 3. Emergència 1, 4. Emergència 2.",
      "1. Elaboració, 2. Aprovació, 3. Homologació, 4. Implantació.",
      "1. Reducció, 2. Preparació, 3. Resposta, 4. Recuperació.",
      "1. Objecte i marc, 2. Anàlisi de risc, 3. Organització operativa, 4. Operativitat + cartografia."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 4.2: tot pla s'estructura en 4 blocs: 1. Objecte i marc, 2. Anàlisi de risc, 3. Organització operativa, 4. Operativitat + cartografia."
  },
  {
    "id": "ex-b2-t21-10",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Quina diferència hi ha entre la Situació 1 i la Situació 2 dins de la fase d'Emergència d'un pla de protecció civil a Catalunya?",
    "options": [
      "Situació 1 = danys importants assumibles amb els mitjans ordinaris del pla | Situació 2 = catàstrofe greu que exigeix mitjans extraordinaris o estatals.",
      "Situació 1 = només seguiment preventiu sense danys | Situació 2 = risc imminent localitzat.",
      "Situació 1 = nivell estatal dirigit pel Ministre | Situació 2 = nivell municipal dirigit per l'Alcalde.",
      "No hi ha diferència operativa; totes dues corresponen al nivell G0 del PLEGEM."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 4.2–4.4: Prealerta (seguiment preventiu), Alerta (risc imminent/emergència localitzada), Emergència Situació 1 (danys importants assumibles amb mitjans ordinaris del pla) i Emergència Situació 2 (exigeix mitjans extraordinaris o estatals)."
  },
  {
    "id": "ex-b2-t21-11",
    "topic": 21,
    "difficulty": "Difícil",
    "question": "Quins nivells d'activació comprèn el PLEGEM (Pla intern del Cos de Bombers de la Generalitat per a Grans Emergències) i què implica el nivell màxim?",
    "options": [
      "Nivells N1, N2 i N3 (equivalents als nivells estatal, autonòmic i local).",
      "Nivells G0 (ordinari) fins a G4 (amb mobilització forçosa del personal).",
      "Nivells P1 a P5 segons el nombre d'autoescales activades.",
      "Nivells de Prealerta, Alerta i Situació 1 i 2 del PROCICAT."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 4.2–4.4: el PLEGEM és el pla intern del Cos de Bombers per a Grans Emergències i va del nivell G0 (ordinari) fins al G4 (amb mobilització forçosa)."
  },
  {
    "id": "ex-b2-t21-12",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Qui integra i quina funció té el Comitè Assessor i el Gabinet d'Informació dins l'estructura operativa d'un pla de protecció civil (seccions 5.2–5.3)?",
    "options": [
      "Els caps dels 5 Grups d'Actuació al CCA sobre el terreny per apagar l'incendi.",
      "Exclusivament els operadors del telèfon 112 a Reus i Zona Franca.",
      "Tècnics experts que assessoren la Direcció del Pla al CECAT/CECOPAL i portaveus oficials encarregats de la comunicació única i veraç a la població i mitjans.",
      "Les companyies de subministrament d'aigua, llum i gas sobre el terreny."
    ],
    "correctIndex": 2,
    "explanation": "Taula 5.1–5.6: Direcció del Pla (Conseller d'Interior o Alcalde en PAM) + Comitè Assessor (tècnics experts) + Gabinet d'Informació (portaveus oficials per a comunicació única i veraç al CECAT/CECOPAL)."
  },
  {
    "id": "ex-b2-t21-13",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "En un atemptat terrorista o incendi clarament intencionat amb múltiple afectació, qui dirigeix el Centre de Comandament Avançat (CCA) sobre el terreny?",
    "options": [
      "El Cap del Grup d'Intervenció (Bombers), igual que en qualsevol altra emergència.",
      "El coordinador del Grup Logístic de l'Ajuntament.",
      "El cap del Grup Sanitari (SEM).",
      "Mossos d'Esquadra, per tractar-se d'un sinistre d'origen intencionat o criminal."
    ],
    "correctIndex": 3,
    "explanation": "Taula 5.4: el CCA el dirigeix el Cap del Grup d'Intervenció (Bombers), EXCEPTE si el sinistre és d'origen intencionat o criminal, cas en què el dirigeix Mossos d'Esquadra."
  },
  {
    "id": "ex-b2-t21-14",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Quins cossos o entitats poden formar part del Grup d'Intervenció (Grup 1) i quins del Grup d'Ordre (Grup 2) al CCA?",
    "options": [
      "Grup 1: Bombers Generalitat, Bombers BCN, ADF i Salvament | Grup 2: Mossos d'Esquadra, Policies Locals, Guàrdia Urbana (i CNP/GC).",
      "Grup 1: SEM i Creu Roja | Grup 2: Bombers i ADF.",
      "Grup 1: Tècnics de Protecció Civil | Grup 2: Treballadors socials i psicòlegs.",
      "Grup 1: Només Bombers Generalitat | Grup 2: Només Guàrdia Urbana."
    ],
    "correctIndex": 0,
    "explanation": "Taula 5.5: Grup 1 Intervenció (Bombers Generalitat, Bombers BCN, ADF, Salvament); Grup 2 Ordre (Mossos, Policies Locals, Guàrdia Urbana, CNP/GC)."
  },
  {
    "id": "ex-b2-t21-15",
    "topic": 21,
    "difficulty": "Difícil",
    "question": "Quin dels 5 Grups d'Actuació s'encarrega de l'atenció psicosocial a víctimes i familiars, la filiació d'afectats i el restabliment dels serveis essencials (aigua, llum, gas)?",
    "options": [
      "Grup 3: Grup Sanitari.",
      "Grup 5: Grup d'Assistència Social / Psicològica (o Rehabilitació).",
      "Grup 4: Grup Logístic.",
      "Grup 2: Grup d'Ordre."
    ],
    "correctIndex": 1,
    "explanation": "Taula 5.5: Grup 5 (Assistència Social / Psicològica o Rehabilitació) inclou treballadors socials, psicòlegs d'emergències (SEM/Col·legi) i companyies de subministraments per a atenció psicosocial, filiació i restabliment de serveis."
  },
  {
    "id": "ex-b2-t21-16",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Quina funció té el PAG (Punt d'Acollida General) o Punt de Trànsit en una gran emergència (secció 5.6)?",
    "options": [
      "És el centre permanent de la Generalitat situat a Barcelona per homologar plans.",
      "És el vehicle UCP on es reuneixen els caps dels 5 Grups dins la zona calenta.",
      "És una zona segura fora del radi d'afectació on es concentren i organitzen els recursos pesants abans d'assignar-los sector, o on es reagrupa la població evacuada.",
      "És el lloc on es realitza el triatge sanitari immediat dins la zona calenta."
    ],
    "correctIndex": 2,
    "explanation": "Taula 5.6: el PAG / Punt de Trànsit és una zona segura fora del radi d'afectació per concentrar i organitzar recursos pesants abans d'assignar-los sector, o per reagrupar població evacuada."
  },
  {
    "id": "ex-b2-t21-17",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Davant d'un incendi forestal que obliga a tancar els veïns d'una urbanització dins de casa amb portes, finestres i climatització tancades, quina mesura de protecció a la població s'està aplicant?",
    "options": [
      "Evacuació al PAG.",
      "Triatge al PMA.",
      "Restabliment de serveis essencials.",
      "Confinament."
    ],
    "correctIndex": 3,
    "explanation": "Taula 5.8: Confinament = tancar-se dins un edifici segur (portes, finestres, clima), prioritari en núvols tòxics químics o fum dens breu."
  },
  {
    "id": "ex-b2-t21-18",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Quina decisió europea va crear el telèfon únic d'emergències 112 (CAT112, gratuït 24/7) i on es troben les seves dues seus operatives redundants a Catalunya?",
    "options": [
      "Decisió 91/396/CEE | Seus a Reus i a la Zona Franca (Barcelona).",
      "Directiva 2016/425 | Seus a Cerdanyola (Bellaterra) i Girona.",
      "Decisió 2015/17 | Seus a Tarragona i Lleida.",
      "Reglament 836/2012 | Seu única a Cerdanyola del Vallès."
    ],
    "correctIndex": 0,
    "explanation": "Taula 5.9: Telèfon Únic 112 creat per la Decisió europea 91/396/CEE (gratuït 24/7), amb dues seus operatives redundants a Catalunya: Reus i Zona Franca (Barcelona)."
  },
  {
    "id": "ex-b2-t21-19",
    "topic": 21,
    "difficulty": "Difícil",
    "question": "On s'ubica la Sala Central de Bombers (SCB) que integra la Regió Metropolitana i quantes Sales de Control Territorial (SCT) completen la xarxa de despatx de Bombers?",
    "options": [
      "SCB a Reus + 4 SCT.",
      "SCB a Cerdanyola/Bellaterra + 6 SCT (gestionant 7 Regions d'Emergències).",
      "SCB a la Zona Franca (BCN) + 7 SCT.",
      "SCB a Tarragona + 5 SCT."
    ],
    "correctIndex": 1,
    "explanation": "Taula 5.9: 1 SCB (Sala Central de Bombers, a Cerdanyola/Bellaterra, que integra la Regió Metropolitana) + 6 SCT (Sales de Control Territorial) per gestionar les 7 Regions d'Emergències."
  },
  {
    "id": "ex-b2-t21-20",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Quin pla especial de protecció civil de Catalunya s'activa davant d'una ventada extrema i quin davant d'un despreniment de neu en zona de muntanya?",
    "options": [
      "INUNCAT (ventades) i SISMICAT (allaus).",
      "NEUCAT (ventades) i VOLCAT (allaus).",
      "VENCAT (ventades) i ALLAUCAT (allaus).",
      "AEROCAT (ventades) i RADCAT (allaus)."
    ],
    "correctIndex": 2,
    "explanation": "Taula 4.1: VENCAT (ventades), ALLAUCAT (allaus), NEUCAT (nevades), INUNCAT (inundacions), SISMICAT (sismes), VOLCAT (volcànic)."
  },
  {
    "id": "ex-b2-t21-21",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Quin organisme és l'encarregat de dur a terme l'homologació dels plans de protecció civil a Catalunya dins del seu cicle de vida (Elaboració → Aprovació → Homologació → Implantació → Manteniment)?",
    "options": [
      "El Centre de Comandament Avançat (CCA).",
      "El Pool Europeu de Protecció Civil (ECPP).",
      "La Sala Central de Bombers (SCB).",
      "La Comissió de Protecció Civil de Catalunya."
    ],
    "correctIndex": 3,
    "explanation": "Taula 4.1 i Cap. 4.3: l'homologació dels plans correspon a la Comissió de Protecció Civil de Catalunya."
  },
  {
    "id": "ex-b2-t21-22",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "A diferència del CECAT (Centre de Coordinació Operativa de Catalunya), què és el CECOPAL i en quin nivell d'emergència s'activa?",
    "options": [
      "És el Centre de Coordinació Operativa Local (Municipal), activat en emergències de Nivell 1 sota direcció de l'Alcalde/essa.",
      "És el centre estatal situat a Madrid per dirigir el Nivell 3.",
      "És el centre europeu de Brussel·les per coordinar els mòduls ECPP.",
      "És el camió UCP desplegat a peu de pista en incendis forestals."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 3.3.1 i Taula 5.9: CECOPAL = Centre de Coordinació Operativa Local (Municipal), activat juntament amb el PAM/PBEM en emergències de Nivell 1 sota direcció de l'Alcalde/essa."
  },
  {
    "id": "ex-b2-t21-23",
    "topic": 21,
    "difficulty": "Difícil",
    "question": "Si una indústria química fixa afectada per la normativa Seveso pateix una fuita tòxica a les seves instal·lacions (sense implicar transport per carretera), quin pla especial s'activa?",
    "options": [
      "TRANSCAT.",
      "PLASEQCAT / PLASEQTA.",
      "CAMCAT.",
      "RADCAT."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 2.2 i Taula 4.1: risc químic Seveso en establiments fixos = PLASEQCAT / PLASEQTA; el TRANSCAT és per a transport de mercaderies perilloses."
  },
  {
    "id": "ex-b2-t21-24",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "Quin sistema d'avís a la població utilitza la tecnologia Cell Broadcast per enviar una alerta sonora i visual immediata als telèfons mòbils connectats a les antenes d'una zona d'emergència?",
    "options": [
      "La plataforma de registre Hermes.",
      "La xarxa de missatges SDS de RESCAT.",
      "El sistema ES-Alert.",
      "El botó taronja del terminal TETRA."
    ],
    "correctIndex": 2,
    "explanation": "Taula 5.8: el sistema ES-Alert (Cell Broadcast) permet enviar una alerta sonora i visual immediata als mòbils connectats a les antenes de la zona d'emergència (complementant la xarxa de sirenes químiques)."
  },
  {
    "id": "ex-b2-t21-25",
    "topic": 21,
    "difficulty": "Mitjà",
    "question": "De qui és responsabilitat elaborar i implantar un Pla d'Autoprotecció (PAU) segons el Decret 30/2015, i com s'integra aquest pla dins el sistema públic de protecció civil?",
    "options": [
      "És responsabilitat del Cos de Bombers de la Generalitat i substitueix el PROCICAT.",
      "Només s'elabora un cop s'ha produït un accident greu en fase de recuperació.",
      "És responsabilitat exclusiva del SEM i es revisa cada 10 anys.",
      "És responsabilitat del titular de l'activitat generadora de risc, i s'integra dins dels plans municipals o especials (revisió màxima cada 4 anys)."
    ],
    "correctIndex": 3,
    "explanation": "Taula 4.1: el PAU (Decret 30/2015, registre Hermes) és responsabilitat del titular de l'activitat, s'integra dins els plans municipals/especials i es revisa com a màxim cada 4 anys."
  },
  {
    "id": "ex-b2-t22-1",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Quin programa nord-americà va donar origen a l'ICS (Incident Command System) als anys 1970 a Califòrnia i quin tipus de sinistres el van motivar?",
    "options": [
      "El programa FEMA-911, arran d'un terratrèmol urbà a San Francisco l'any 1989.",
      "El programa FIRESCOPE, arran d'una sèrie d'incendis forestals devastadors on van fallar la coordinació i les comunicacions entre agències.",
      "El programa UCPM, arran d'accidents químics industrials a Europa.",
      "El programa RESCAT, arran de l'apagada de les xarxes analògiques VHF."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 1–2 de MAN.COMD.001: als anys 1970 a Califòrnia (EUA), arran d'incendis forestals devastadors amb fallades de coordinació i comunicacions entre agències, es va crear el programa FIRESCOPE i va néixer l'ICS."
  },
  {
    "id": "ex-b2-t22-2",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Quin benefici directe va aportar l'adopció del sistema SISCOM per part de Bombers de Barcelona l'any 2015, cinc anys després de la implantació a Bombers de la Generalitat (2010)?",
    "options": [
      "Va eliminar la necessitat d'elaborar Plans d'Acció de l'Incident (PAI) en incendis urbans.",
      "Va fusionar orgànicament tots dos cossos en una única estructura administrativa sota l'Estat.",
      "Va facilitar una doctrina comuna de comandament i terminologia entre tots dos cossos de bombers a Catalunya.",
      "Va substituir la xarxa RESCAT per comunicacions exclusives en VHF analògic."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 1–2 i Taula 1–3: Bombers Generalitat (2010) i Bombers de Barcelona (2015) van adoptar el SISCOM, facilitant una doctrina comuna i unificació metodològica a tot el territori."
  },
  {
    "id": "ex-b2-t22-3",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Quin principi del SISCOM garanteix que tots els parcs, regions i grups especials s'entenguin sense malentesos en anomenar càrrecs, recursos, instal·lacions i comunicacions?",
    "options": [
      "La descentralització de finances.",
      "El comandament unificat.",
      "La regla del tram de control màxim.",
      "La terminologia comuna (estandardització)."
    ],
    "correctIndex": 3,
    "explanation": "Taula Cap. 1–3: la Terminologia Comuna estableix noms estàndard per a càrrecs, recursos, instal·lacions i comunicacions, evitant malentesos entre parcs, regions i grups especials."
  },
  {
    "id": "ex-b2-t22-4",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "En quin sentit creix l'estructura del SISCOM quan una emergència es complica des de la primera sortida (SISCOM 1) fins a una gran emergència?",
    "options": [
      "De baix a dalt (bottom-up), creixent i contraient-se modularment segons la complexitat real del sinistre.",
      "De dalt a baix (top-down), activant primer les Zones i Àrees Funcionals abans que els Equips.",
      "Sempre amb les dues Àrees Funcionals completes activades des del primer minut encara que només hi hagi un vehicle.",
      "De manera rígida i fixa sense poder reduir l'estructura un cop activada."
    ],
    "correctIndex": 0,
    "explanation": "Taula Cap. 1–3: Modularitat i Escalabilitat — creix de baix a dalt (bottom-up) i es contrau segons la complexitat; només s'activen les funcions, sectors o àrees realment necessàries."
  },
  {
    "id": "ex-b2-t22-5",
    "topic": 22,
    "difficulty": "Difícil",
    "question": "Quins dos documents operatius interns de Bombers de la Generalitat regulen específicament el relleu del Comandament Únic (establert pel Decret 276/2016, de 19 de juliol)?",
    "options": [
      "MAN.COMD.003 i MAN.GRAL.001.",
      "INT.COMD.000 i GUI.ORGO.001.",
      "MAN.SEGU.000 i MAN.EQIP.000.",
      "DECRET 30/2015 i LLEI 5/1994."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 4.1: Comandament Únic regulat pel Decret 276/2016, de 19 de juliol, i el relleu per INT.COMD.000 i GUI.ORGO.001."
  },
  {
    "id": "ex-b2-t22-6",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "En un incendi d'habitatge on treballen Bombers de la Generalitat, SEM i Policia Local coordinats al CCA sota la direcció operativa de Bombers, quin model de comandament s'aplica?",
    "options": [
      "Comandament Unificat.",
      "Comandament d'Àrea de Finances.",
      "Comandament Integrat.",
      "Comandament per Zones independents sense CCA."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 4.2: Comandament Integrat = diferents agències (Bombers, SEM, Policia) es coordinen al CCA sota la direcció operativa de l'agència responsable del sinistre."
  },
  {
    "id": "ex-b2-t22-7",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "En un gran incendi a la frontera entre el municipi de Barcelona i l'Àrea Metropolitana on actuen conjuntament Bombers de Barcelona i Bombers de la Generalitat compartint autoritat i consensuant un únic PAI, quin model s'estableix?",
    "options": [
      "Comandament jeràrquic exclusiu del CECOPAL.",
      "Comandament Integrat.",
      "SISCOM 1 simplificat.",
      "Comandament Unificat."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 4.2: Comandament Unificat = quan l'emergència afecta dos territoris o jurisdiccions limítrofes (ex. Catalunya–Aragó o Generalitat–BCN), els cossos homòlegs comparteixen l'autoritat i consensuen un únic PAI."
  },
  {
    "id": "ex-b2-t22-8",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Quin efecte negatiu evita l'aplicació estricta de la cadena i línia de comandament (+1 / -1) dins del SISCOM?",
    "options": [
      "Evita que els comandaments superiors donin ordres saltant-se esglaons intermedis i manté l'ordre jeràrquic i de comunicacions.",
      "Evita que el Cap d'Intervenció hagi de redactar un PAI en períodes operatius llargs.",
      "Permet que cada bomber informi directament al Cap d'Intervenció sense passar pel Cap de Sector.",
      "Limita el nombre de vehicles que poden arribar al Centre de Recepció de Mitjans (CRM)."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 4.3: la cadena de comandament (+1 / -1) fa que les ordres i informes segueixin estrictament el nivell immediat superior (+1) i inferior (-1), evitant saltar-se esglaons intermedis."
  },
  {
    "id": "ex-b2-t22-9",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Quina conseqüència directa té superar el Tram de Control òptim (de 3 a 5 línies directes de supervisió) sense crear un esglaó intermedi?",
    "options": [
      "Es millora la velocitat d'extinció perquè hi ha menys comandaments.",
      "Es compromet la seguretat operativa i se saturen les comunicacions i la capacitat de control del comandament.",
      "S'activa automàticament l'àrea d'Administració i Finances.",
      "El sistema passa automàticament a Comandament Unificat."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 4.6 i Resum: el tram de control (3 a 5 línies) garanteix la seguretat i evita la saturació de comunicacions; si se superen les 5 línies, cal crear un esglaó intermedi."
  },
  {
    "id": "ex-b2-t22-10",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Quines són les 5 àrees funcionals de l'ICS nord-americà original, i quina d'elles queda exclosa del desplegament de camp al SISCOM català?",
    "options": [
      "ICS: Comandament, Sectors, Zones, Grups i Equips | Al SISCOM no s'aplica Zones.",
      "ICS: Operacions, Extinció, Rescat, Sanitari i Premsa | Al SISCOM no s'aplica Premsa.",
      "ICS: Comandament, Operacions, Planificació, Logística i Administració/Finances | Al SISCOM no s'aplica Administració/Finances sobre el terreny.",
      "ICS: Planificació, Logística, Seguretat, Ràdio i Finances | Al SISCOM no s'aplica Logística."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 5: l'ICS americà té 5 àrees (Comandament, Operacions, Planificació, Logística i Administració/Finances); al SISCOM català no es desplega Administració/Finances i sota el CI s'organitza en Operacions + Suport (Planificació + Logística)."
  },
  {
    "id": "ex-b2-t22-11",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Quina àrea funcional del SISCOM s'encarrega d'executar sobre el terreny les maniobres tàctiques definides al Pla d'Acció de l'Incident (PAI)?",
    "options": [
      "L'Àrea d'Administració i Finances.",
      "La funció de Planificació dins l'Àrea de Suport.",
      "La funció de Logística dins l'Àrea de Suport.",
      "L'Àrea d'Operacions."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 5: sota el CI, l'Àrea d'Operacions executa les maniobres tàctiques del PAI, mentre que l'Àrea de Suport integra Planificació i Logística."
  },
  {
    "id": "ex-b2-t22-12",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Dins l'escalafó dels 7 nivells jeràrquics del SISCOM (Cap. 6), què és exactament un EQUIP (nivell 1) i què executa?",
    "options": [
      "És la unitat bàsica indivisible (un binomi o un vehicle amb la seva dotació) que executa tasques concretes.",
      "És una divisió geogràfica d'un edifici o bosc (ex. Sector Nord).",
      "És el conjunt de diversos sectors quan se supera el tram de control.",
      "És l'agrupació de diverses maniobres sota un Cap d'Operacions."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 6: 1. Equip = unitat bàsica indivisible (un binomi o un vehicle amb la seva dotació) que executa tasques concretes (mai treballar sol)."
  },
  {
    "id": "ex-b2-t22-13",
    "topic": 22,
    "difficulty": "Difícil",
    "question": "Quin nivell de l'escalafó SISCOM se situa immediatament per sobre de l'Equip (nivell 1) i immediatament per sota del Grup (nivell 3), i què representa?",
    "options": [
      "El Sector (nivell 2), que divideix geogràficament l'escenari.",
      "La Maniobra (nivell 2), que és el conjunt coordinat de tasques amb un objectiu tàctic definit (ex. extinció o excarceració).",
      "La Zona (nivell 2), que agrupa vehicles de reserva al CRM.",
      "L'Àrea Funcional de Suport (nivell 2)."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 6: 1. Equip → 2. Maniobra (conjunt coordinat de tasques amb un objectiu tàctic definit) → 3. Grup → 4. Sector → 5. Zona → 6. Àrees Funcionals → 7. CI."
  },
  {
    "id": "ex-b2-t22-14",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Quina diferència conceptual hi ha entre un GRUP (nivell 3) i un SECTOR (nivell 4) dins del SISCOM?",
    "options": [
      "Un Grup és sempre geogràfic i jeràrquicament superior al Sector.",
      "Un Sector només pot estar format per un sol binomi, mentre que un Grup agrupa tota la Regió d'Emergències.",
      "Un Grup és una agrupació funcional de diversos equips que executen una mateixa maniobra, mentre que un Sector és una divisió geogràfica (ex. Sector Nord, Planta 3) o funcional superior al Grup.",
      "No hi ha cap diferència; tots dos ocupen el nivell 3 de l'escalafó."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 6: 3. Grup = agrupació funcional de diversos equips fent una mateixa maniobra sota un Cap de Grup; 4. Sector = divisió geogràfica o funcional superior al Grup sota un Cap de Sector."
  },
  {
    "id": "ex-b2-t22-15",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Si en un incendi forestal molt extens el Cap d'Operacions arriba a tenir 8 Sectors desplegats simultàniament (Nord, Sud, Est, Oest, Flanc Dret, Flanc Esquerre, Cap i Cua), quina decisió organitzativa exigeix el SISCOM?",
    "options": [
      "Mantenir els 8 Sectors reportant directament al Cap d'Operacions sense canvis.",
      "Transferir 4 Sectors a l'Àrea d'Administració i Finances.",
      "Suprimir tots els Sectors i convertir-los en Equips individuals.",
      "Agrupar els Sectors en ZONES (per exemple, Zona Nord i Zona Sud) amb un Cap de Zona cadascuna per respectar el tram de control de 3 a 5 línies."
    ],
    "correctIndex": 3,
    "explanation": "Pàg. 3–4 (Cap. 6): quan el nombre de Sectors supera el tram de control de 3–5 línies (ex. 8 Sectors), es creen ZONES (nivell 5) que agrupen diversos sectors."
  },
  {
    "id": "ex-b2-t22-16",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Quina persona assumeix habitualment el rol de Cap d'Intervenció (CI) en un servei senzill d'estructura mínima (SISCOM 1) amb una sola dotació?",
    "options": [
      "El caporal (o comandament) de la primera sortida, que assumeix totes les funcions sense delegar àrees.",
      "El conductor de l'autobomba mentre espera l'arribada del Cap de Guàrdia.",
      "L'operador de la Sala de Control Territorial des de la SCT.",
      "El cap de la Policia Local si arriba abans al lloc."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 5 i Exemple Pàg. 3–4: en un servei senzill (SISCOM 1) amb un camió, el caporal de la primera sortida és el CI i assumeix totes les funcions (Operacions, Planificació i Logística)."
  },
  {
    "id": "ex-b2-t22-17",
    "topic": 22,
    "difficulty": "Difícil",
    "question": "Quin manual específic regula el Pla d'Acció de l'Incident (PAI) esmentat al Capítol 4 de MAN.COMD.001 i què hi queda definit?",
    "options": [
      "MAN.ATXX.000: defineix les zones de seguretat A i B en tala d'arbres.",
      "MAN.COMD.003: defineix els objectius estratègics, la tàctica i les maniobres per a un període operatiu.",
      "MAN.GRAL.007: defineix les 5 Regles d'Or elèctriques.",
      "GUI.ORGO.001: defineix exclusivament els codis ZULU de ràdio."
    ],
    "correctIndex": 1,
    "explanation": "Taula Cap. 4: el PAI (Pla d'Acció de l'Incident) està regulat a MAN.COMD.003 i defineix els objectius estratègics, la tàctica i les maniobres per a un període operatiu."
  },
  {
    "id": "ex-b2-t22-18",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Dins l'Àrea de Suport del SISCOM, quina de les dues funcions elabora la cartografia del sinistre i quina gestiona el Centre de Recepció de Mitjans (CRM)?",
    "options": [
      "Totes dues tasques les executa exclusivament l'Àrea d'Operacions.",
      "Cartografia = Logística | Gestió del CRM = Planificació.",
      "Cartografia = Planificació | Gestió del CRM = Logística.",
      "Cartografia = Grup d'Ordre | Gestió del CRM = Àrea de Finances."
    ],
    "correctIndex": 2,
    "explanation": "Cap. 5: Planificació (dins Suport) s'encarrega d'anàlisi, cartografia i redacció del PAI; Logística (dins Suport) s'encarrega de comunicacions, aigua, avituallament, relleus i CRM."
  },
  {
    "id": "ex-b2-t22-19",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "En quins anys respectius es van produir aquestes tres fites: origen de l'ICS a Califòrnia, implantació del SISCOM a Bombers de la Generalitat i Decret del Comandament Únic?",
    "options": [
      "ICS: anys 1980 | SISCOM Generalitat: 2016 | Decret Comandament Únic: 2010.",
      "ICS: anys 1990 | SISCOM Generalitat: 2015 | Decret Comandament Únic: 2010.",
      "ICS: anys 1970 | SISCOM Generalitat: 2005 | Decret Comandament Únic: 2015.",
      "ICS: anys 1970 | SISCOM Generalitat: 2010 | Decret Comandament Únic: 2016 (Decret 276/2016)."
    ],
    "correctIndex": 3,
    "explanation": "Taula Resum 1/2: ICS (anys 1970 Califòrnia), SISCOM Bombers Generalitat (2010), Bombers Barcelona (2015), Comandament Únic (Decret 276/2016, de 19 de juliol)."
  },
  {
    "id": "ex-b2-t22-20",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Quin és l'ordre jeràrquic correcte dels 4 nivells superiors de l'escalafó SISCOM (de menor a major, del nivell 4 al nivell 7)?",
    "options": [
      "4. Sector → 5. Zona → 6. Àrees Funcionals (Operacions i Suport) → 7. Comandament de la Intervenció (CI).",
      "4. Grup → 5. Sector → 6. Zona → 7. CI.",
      "4. Zona → 5. Sector → 6. CI → 7. Àrees Funcionals.",
      "4. Maniobra → 5. Grup → 6. Sector → 7. Zona."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 6: 1. Equip → 2. Maniobra → 3. Grup → 4. Sector → 5. Zona → 6. Àrees Funcionals (Operacions i Suport) → 7. Comandament de la Intervenció (CI)."
  },
  {
    "id": "ex-b2-t22-21",
    "topic": 22,
    "difficulty": "Difícil",
    "question": "Si un Cap d'Intervenció (CI) en una emergència mitjana activa l'Àrea d'Operacions i l'Àrea de Suport, quantes línies directes de supervisió està controlant i com es relaciona això amb el tram de control?",
    "options": [
      "Està incomplint el tram de control perquè el mínim obligatori per al CI són 6 línies directes.",
      "Controla directament aquestes 2 grans branques (o fins a 3–5 si hi afegeix funcions/adjunts directes), mantenint-se per sota del màxim de 5 línies directes.",
      "Hauria de suprimir l'Àrea de Suport perquè només pot existir una àrea sota el CI.",
      "Hauria de dirigir directament tots els binomis individuals sense Caps de Sector."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 4.6 i Cap. 5: sota el CI hi ha Operacions i Suport (Planificació + Logística), mantenint el tram de control òptim (entre 3 i 5 línies directes sense superar les 5)."
  },
  {
    "id": "ex-b2-t22-22",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Quin és el principi bàsic de seguretat associat al nivell 1 (Equip) de l'escalafó SISCOM segons el quadre sinòptic final del tema?",
    "options": [
      "Sempre està format per un mínim de 5 vehicles autobomba.",
      "Pot dividir-se lliurement en bombers individuals sense comunicació de ràdio.",
      "És la unitat mínima d'intervenció (1 binomi o 1 vehicle) i mai s'ha de treballar sol.",
      "Només actua dins l'Àrea de Suport fent cartografia."
    ],
    "correctIndex": 2,
    "explanation": "Quadre Sinòptic 2: 1. Equip (1 binomi o 1 vehicle, fa Tasques) és la unitat mínima d'intervenció (mai treballar sol)."
  },
  {
    "id": "ex-b2-t22-23",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "En un incident d'incendi estructural en un edifici de 10 plantes, el Cap d'Intervenció assigna «Sector Planta 3» i «Sector Façana Posterior» a dos comandaments diferents. Quin criteri de divisió de Sectors s'està aplicant?",
    "options": [
      "Delegació de l'Àrea de Finances.",
      "Divisió en Zones (nivell 5) per superar els 10 equips.",
      "Creació d'un Comandament Unificat entre dues regions.",
      "Divisió geogràfica dins del nivell 4 (Sector) de l'escalafó SISCOM."
    ],
    "correctIndex": 3,
    "explanation": "Cap. 6: el Sector (nivell 4) és una divisió geogràfica (ex. Sector Nord, Planta 3) o funcional superior al Grup, amb un Cap de Sector."
  },
  {
    "id": "ex-b2-t22-24",
    "topic": 22,
    "difficulty": "Mitjà",
    "question": "Quina diferència hi ha entre la funció de Planificació i l'Àrea d'Operacions respecte del Pla d'Acció de l'Incident (PAI)?",
    "options": [
      "Planificació analitza la situació i prepara/redacta el PAI, mentre que Operacions executa les maniobres tàctiques definides al PAI.",
      "Operacions redacta el PAI i Planificació l'executa amb les llances d'aigua.",
      "Totes dues funcions pertanyen a l'Àrea de Logística i no intervenen al PAI.",
      "El PAI només el redacta el Cos de Mossos d'Esquadra fora del SISCOM."
    ],
    "correctIndex": 0,
    "explanation": "Cap. 5: Planificació (dins Suport) recopila informació, fa cartografia i prepara el PAI; Operacions executa les maniobres tàctiques del PAI."
  },
  {
    "id": "ex-b2-t22-25",
    "topic": 22,
    "difficulty": "Difícil",
    "question": "Per què el SISCOM estableix la regla de crear un nou nivell jeràrquic intermedi (com agrupar Equips en Grups o Sectors en Zones) quan s'arriba a més de 5 unitats subordinades?",
    "options": [
      "Perquè els terminals RESCAT només admeten un màxim de 5 usuaris per grup de conversa DMO.",
      "Per complir el principi del Tram de Control (3 a 5 línies directes de supervisió) i evitar que el comandament perdi la capacitat de control i seguretat.",
      "Perquè la Llei 5/1994 prohibeix que un caporal dirigeixi més de 5 vehicles alhora en carretera.",
      "Per reduir el nombre de comandaments necessaris al Centre de Comandament Avançat."
    ],
    "correctIndex": 1,
    "explanation": "Cap. 4.6 i Pàg. 4: el Tram de Control òptim és de 3 a 5 línies directes; sempre que se superen les 5 línies, s'agrupa en el nivell superior (Equips → Grups → Sectors → Zones) per garantir la seguretat i no saturar les comunicacions."
  }
];
