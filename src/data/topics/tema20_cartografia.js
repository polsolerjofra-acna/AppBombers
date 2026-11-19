export const tema20Cartografia = {
  id: 'tema-14',
  number: 14,
  code: 'MAN.GRAL.002',
  title: 'Cartografia, Coordenades UTM, Orientació i Cartografia Operativa (COE)',
  category: 'Manual Operatiu SGO — Cartografia i Navegació',
  estimatedMinutes: 50,
  importance: {
    title: "Radar d'Examen — Tema 14 (MAN.GRAL.002 v.1): Cartografia, UTM i Codi SOC",
    frequency: 'Molt Alta (3-4 preguntes fixes sobre zona 31T, ETRS89, camins COE, PAIF i Codi SOC)',
    summary:
      "Aquest manual cobreix les coordenades UTM (Catalunya = zona 31T, X de 6 xifres i Y de 7 xifres, Datum ETRS89), l'orientació diürna i nocturna (hora solar -2h estiu / -1h hivern, rellotge, Estrella Polar i Lluna), els sistemes GNSS (mínim 4 satèl·lits) i la Cartografia Operativa d'Emergències (COE 1:25.000, equidistància 10 m, camins Primari/Secundari/Terciari, PAIF > 200 m³ i Codi SOC). Inclou 4 pàgines d'estudi i 2 pàgines finals de Resum.",
    hotTopics: [
      'Cap. 2: UTM (60 fusos de 6° i 20 bandes C a X sense I ni O; des de la N = hemisferi Nord). Catalunya = 31T. Coordenada X = 6 xifres (Est-Oest, meridià central 500.000 m); Y = 7 xifres (Nord-Sud). Datum oficial = ETRS89 (antic ED50 desfasat ~200 m).',
      'Cap. 2.3: Escales (1:25.000 ⇒ 1 cm = 250 m), corbes de nivell (corba mestra cada 5 corbes) i ombrejat (llum simulada des del Nord-Oest).',
      'Cap. 3: Hora solar (estiu -2 h, hivern -1 h), mètode del rellotge (agulla petita al Sol → bisectriu amb les 12 = Sud), Estrella Polar (4× Ossa Major / bisectriu Cassiopea) i Lluna (Creixent = panxa a l’Oest; Minvant = panxa a l’Est).',
      'Cap. 4: GNSS (3 segments: Espacial, Control, Usuari; trilateració amb mínim 4 satèl·lits per a 3D; GPS, Galileo, GLONASS, BeiDou) i drons (RTH/RTL i Geofence).',
      'Cap. 5: COE (Escala 1:25.000, equidistància 10 m, ETRS89), Camins (Primari ≥6 m groc continu; Secundari 3–5 m amb sobreamples cada 100–150 m; Terciari ≥3 m 1 sentit), PAIF (>200 m³, lletra "T" helicòpter) i Codi SOC (quadrant 5×5 km + 25 seccions 1×1 km del 01 al 25).'
    ],
    traps: [
      'Confondre el nombre de xifres a Catalunya: la coordenada X (Est-Oest) té sempre 6 xifres en metres (ex. 425.000 m), mentre que la Y (Nord-Sud, distància a l’Equador) té sempre 7 xifres (ex. 4.615.000 m)!',
      'En el mètode del rellotge analògic per trobar el Sud, abans cal passar l’hora oficial a HORA SOLAR (restant 2 hores a l’estiu i 1 hora a l’hivern)!',
      'Al Codi SOC (ex. 22AP06), el quadrant vermell fa 5×5 km (2 números O→E + 2 lletres N→S) i es divideix en 25 quadrats petits d’1×1 km numerats del 01 al 25!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 2 UTM 31T i ETRS89',
      title: '1–2. Projeccions, Coordenades UTM (Zona 31T), Datum ETRS89 i El Mapa',
      subtitle: 'Coordenades geogràfiques vs. UTM (X de 6 xifres, Y de 7 xifres), càlcul d’escales i corbes de nivell.',
      blocks: [
        {
          type: 'text',
          heading: '2.1–2.3. Projecció UTM, Zona 31T i Datum ETRS89',
          paragraphs: [
            "La projecció oficial a Bombers és la UTM (Universal Transversa de Mercator), una projecció cilíndrica conforme que divideix la Terra en 60 FUSOS verticals de 6° de longitud (numerats de l'1 al 60 des de l'antimeridià 180° cap a l'Est) i 20 BANDES horitzontals de 8° de latitud (lletres de la C a la X, sense I ni O).",
            "De la banda C a la M correspon a l'Hemisferi Sud, i de la N a la X a l'Hemisferi Nord. Catalunya es troba ÍNTEGRAMENT dins de la zona 31T (Fus 31, Banda T).",
            "En coordenades UTM (en metres): la coordenada X (Easting, Est-Oest) pren el meridià central del fus com a 500.000 m per evitar negatius i a Catalunya té sempre 6 XIFRES. La coordenada Y (Northing, Nord-Sud) mesura la distància a l'Equador i a Catalunya té sempre 7 XIFRES (≈ 4.500.000–4.750.000 m). La distància recta entre dos punts UTM es calcula per Pitàgores: d = √(ΔX² + ΔY²).",
            "El DATUM oficial vigent a la UE i a Bombers és l'ETRS89 (equivalent al WGS84 del GPS). L'antic datum ED50 presentava un desfasament d'uns 200 metres respecte a l'ETRS89."
          ]
        },
        {
          type: 'table',
          title: 'Paràmetres Cartogràfics, Escales i Corbes de Nivell (MAN.GRAL.002 Cap. 2)',
          subtitle: 'Conceptes essencials de lectura de mapes topogràfics',
          headers: ['Concepte Cartogràfic', 'Definició i Regla Oficial del Manual', 'Exemple / Detall d’Examen'],
          rows: [
            ['Zona UTM de Catalunya', 'Fus 31 · Banda T (31T) · Datum ETRS89', 'X = 6 xifres (meridià central 500.000 m) | Y = 7 xifres (distància Equador)'],
            ['Mapa Ràster vs. Vectorial', 'Ràster = matriu de píxels (ortofoto) | Vectorial = punts, línies i polígons', 'El vectorial no es pixela en fer zoom i permet càlculs en SIG'],
            ['Escala Numèrica (1 : E)', '1 : 25.000 ⇒ 1 cm al mapa = 25.000 cm = 250 m a la realitat', 'Com més GRAN és el denominador E, més PETITA és l’escala!'],
            ['Corbes de Nivell (Isohipses)', 'Equidistància = desnivell constant entre corbes (10 m a la COE)', 'Corba Mestra: cada 5 corbes (més gruixuda i amb la cota escrita)'],
            ['Carena vs. Vall (Tàlveg) i Ombrejat', 'Carena (divisòria): la V apunta cap a cotes BAIXES | Vall: la V apunta cap a cotes ALTES', 'L’ombrejat del mapa simula sempre un focus de llum des del NORD-OEST (NO)']
          ]
        },
        {
          type: 'mnemonic',
          title: 'Truc per a Càlcul Mental d’Escales i per Distingir Carena de Vall (Tàlveg)',
          trick:
            '• Càlcul d’escala en 2 segons: Treu els dos últims zeros del denominador i tindràs els metres que equivalen a 1 cm! (A 1:25.000 → treus dos zeros = 250 m per cada cm; a 1:50.000 → 1 cm = 500 m; a 1:10.000 → 1 cm = 100 m).\n• Carena vs. Fondalada (Vall): En un torrent o vall, el "bec" de la V de les corbes de nivell apunta sempre AIGÜES AMUNT (cap al cim, cotes més altes).',
          example:
            'Problema resolt: En un mapa COE a escala 1:25.000, la distància entre el parc de bombers i l’incendi és de 6 cm. Quina distància real hi ha?\n• 6 cm × 250 m/cm = 1.500 metres (1,5 km).'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 3-4 Orientació i GNSS',
      title: '3–4. Orientació (Brúixola, Sol, Rellotge, Polar i Lluna) i Sistemes GNSS / Drons',
      subtitle: 'Hora solar (-2h estiu / -1h hivern), mètodes naturals d’orientació i trilateració amb mínim 4 satèl·lits.',
      blocks: [
        {
          type: 'text',
          heading: '3. Orientació Instrumental, Rumb vs. Azimut i Mitjans Naturals',
          paragraphs: [
            "Per orientar-nos amb precisió sobre el mapa i el terreny cal distingir els tres Nords: Nord Geogràfic o vertader (eix de rotació terrestre), Nord Magnètic (on apunta la brúixola) i Nord de Quadrícula o UTM (línies verticals del mapa).",
            "No confondre! Declinació Magnètica vs. Convergència de Meridians: La Declinació Magnètica és l'angle entre el Nord Geogràfic i el Nord Magnètic (a Catalunya és molt petita, < 2°). La Convergència de Meridians és l'angle entre el Nord Geogràfic i el Nord de la Quadrícula UTM (causada per projectar una esfera sobre un pla).",
            "No confondre! Azimut vs. Rumb: L'AZIMUT és l'angle mesurat en sentit horari de 0° a 360° des del Nord fins a l'objectiu (ex. 225°). El RUMB per quadrants es mesura de 0° a 90° partint del Nord o Sud cap a l'Est o Oest (ex. S 45° O = azimut 225°). Per triangular una columna de fum calen com a mínim 2 observadors.",
            "Orientació amb el Sol i rellotge analògic: A Catalunya, per passar de l'hora oficial a l'HORA SOLAR cal restar -2 HORES a l'estiu i -1 HORA a l'hivern. A les 12:00 h solars el Sol és al Sud. Amb rellotge d'agulles en hora solar, apuntem l'agulla petita (hores) al Sol i la BISECTRIU entre aquesta agulla i les 12 assenyala el SUD.",
            "Orientació nocturna: 1) L'Estrella Polar (Nord) es troba prolongant 4 vegades la distància entre les dues últimes estrelles del carro de l'Ossa Major (Merak i Dubhe) o amb la bisectriu de la 'W' de Cassiopea. 2) La Lluna en Quart Creixent ('D') té la panxa il·luminada cap a l'OEST; en Quart Minvant ('C') té la panxa cap a l'EST.",
            "Indicis naturals: la molsa i els anells d'arbre més junts indiquen el NORD; l'absis de les esglésies romàniques mira cap a l'EST; les plaques solars miren cap al SUD."
          ]
        },
        {
          type: 'table',
          title: '4. Sistemes Globals de Navegació per Satèl·lit (GNSS) i Drons (MAN.GRAL.002)',
          subtitle: 'Segments, constel·lacions mundials i funcions de seguretat RPAS',
          headers: ['Concepte GNSS / Dron', 'Especificació Tècnica Oficial', 'Detall d’Examen'],
          rows: [
            ['Els 3 Segments GNSS', '1. Segment Espacial (satèl·lits) · 2. Segment de Control (estacions) · 3. Segment d’Usuari (receptors)', 'El receptor d’usuari només REP senyal (no emet res cap als satèl·lits!)'],
            ['Mínim de Satèl·lits (Trilateració)', 'Mínim 4 satèl·lits visibles per obtenir posició 3D (Latitud, Longitud, Altitud + correcció rellotge)', 'Amb 3 satèl·lits només s’obté posició 2D sense altitud precisa'],
            ['Constel·lacions Mundials', 'GPS (EUA) · Galileo (Unió Europea) · GLONASS (Rússia) · BeiDou (Xina)', 'Sistemes regionals: QZSS (Japó) i NavIC / IRNSS (Índia)'],
            ['Funcions de Seguretat en Drons', 'RTH / RTL (Return To Home/Launch) i Geofence (tanca virtual)', 'RTH fa tornar el dron automàticament al punt d’enlairament si perd senyal o bateria']
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 5-6 Cartografia COE i SOC',
      title: '5–6. Cartografia Operativa d’Emergències (COE), Camins, PAIF i Codi SOC',
      subtitle: 'Classificació de camins per a BRP, Punts d’Aigua (> 200 m³), codificació MTN i quadrícula SOC.',
      blocks: [
        {
          type: 'text',
          heading: '5.1–5.3. La Cartografia Operativa d’Emergències (COE) i el Codi SOC',
          paragraphs: [
            "La COE és la cartografia oficial dissenyada pel GRAF i la Sala Central amb base de l'ICGC. Té 5 característiques clau: cobertura de tot Catalunya, escala 1:25.000 (1 cm = 250 m), equidistància de 10 metres (corbes mestres cada 50 m), coordenades UTM/geogràfiques en Datum ETRS89 i quadrícula del Codi SOC amb xarxa de camins BRP i PAIF.",
            "Codificació MTN: cada full del Mapa Topogràfic Nacional 1:50.000 (identificat per un número de 3 xifres, ex. 522) es divideix en 4 quarts a escala 1:25.000 numerats de l'1 al 4 (1 i 2 a dalt; 3 i 4 a baix → ex. 522-1).",
            "El CODI SOC (Sistema d'Orientació Cartogràfica) permet donar una posició per emissora en segons: divideix el mapa en QUADRANTS vermells de 5 × 5 km (2 números d'Oest a Est + 2 lletres de Nord a Sud, ex. '22AP').",
            "Cada quadrant de 5 × 5 km se subdivideix internament en 25 SECCIONS grises d'1 × 1 km numerades del '01' al '25' d'esquerra a dreta i de dalt a baix (ex. '22AP06')."
          ]
        },
        {
          type: 'diagram',
          title: 'Estructura Visual del Codi SOC (5×5 km → 25 seccions d’1×1 km) i Camins de la COE',
          diagramType: 'cartography_soc',
          caption:
            'Esquerra: cada quadrant vermell de 5×5 km (ex. 22AP) conté 25 cel·les d’1×1 km numerades del 01 al 25 per files (01 a 05 a la fila superior, 06 a l’inici de la 2a fila...). Dreta: simbologia i amplades dels camins Primari, Secundari, Terciari i No accessible a BRP.'
        },
        {
          type: 'table',
          title: '5.2. Classificació Oficial de Camins i Punts d’Aigua (PAIF) a la Cartografia COE',
          subtitle: 'Amplades, simbologia de colors i capacitats (MAN.GRAL.002 Cap. 5.2)',
          headers: ['Categoria de Camí / Punt d’Aigua', 'Amplada i Capacitat Operativa per a BRP', 'Simbologia Exacta al Mapa COE'],
          rows: [
            ['Camí Primari', 'Amplada ≥ 6 m · Es poden CREUAR 2 camions BRP en qualsevol punt', 'Traç GROC continu (o marró si és pavimentat)'],
            ['Camí Secundari', 'Amplada 3 a 5 m · Amb sobreamples (> 5 m) cada 100–150 m per creuar-se (marxa enrere màx. 150 m)', 'Traç groc amb puntejat verd al damunt'],
            ['Camí Terciari', 'Amplada ≥ 3 m SENSE sobreamples · Circulació d’1 sol sentit per a BRP (no es poden creuar)', 'Alternança de trams grocs i verds foscos'],
            ['Camí NO accessible a BRP', 'No apte per a autobomba BRP (només vehicles lleugers UPC o a peu)', 'Traç discontinu VERMELL sobre fons blanc amb vores vermelles'],
            ['Vores del camí (Asfaltat vs. Terra)', 'Indica el ferm del vial', 'Vores NEGRES = pavimentat/asfaltat | Vores VERDES = terra/no asfaltat'],
            ['Punts d’Aigua i PAIF', 'PAIF = Capacitat > 200 m³ (200.000 L; inclou antics > 120 m³), apte per a camions i helicòpters', 'Quadrat = bassa/piscina | Triangle = natural | Quadrat ple = dipòsit cobert | Lletra "T" a sobre = càrrega d’helicòpter | Fons groc = públic']
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 6 SIG i Aplicacions',
      title: '6. Sistemes d’Informació Geogràfica (SIG / GIS) i Eines Digitals a Bombers',
      subtitle: 'Capes vectorials i ràster, ortofotos, models digitals del terreny (MDT) i navegació tàctica.',
      blocks: [
        {
          type: 'text',
          heading: '6.1–6.2. Funcionament d’un SIG i Aplicació Operativa en Emergències',
          paragraphs: [
            "Un Sistema d'Informació Geogràfica (SIG o GIS, com QGIS o ArcGIS utilitzats a les sales de control i a la Unitat de Comandament) és una eina informàtica que integra dades espacials georeferenciades amb bases de dades alfanumèriques (atributs com la capacitat d'un hidrant, titularitat d'un camí o perímetre d'un incendi).",
            "Un SIG superposa múltiples CAPES temàtiques: capes vectorials (punts com hidrants o PAIF, línies com camins COE o línies elèctriques, i polígons com perímetres cremats o zones inundables) i capes ràster (ortofotomapes aeris i Models Digitals d'Elevacions MDE/MDT que permeten calcular pendents, conques visuals i simulacions de propagació del foc)."
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit: Com recordar cap a on mira la Lluna i com funciona el Codi SOC',
          metaphor:
            'Dues regles infal·libles per no dubtar mai a l’examen:',
          explanation:
            "• 1. 'La Lluna és una MENTIDERA': Quan té forma de lletra C (sembla Creixent), en realitat és MINVANT i la panxa mira a l'EST (matinada). Quan té forma de D, és CREIXENT i la panxa mira a l'OEST.\n• 2. El Codi SOC és com llegir una pàgina: primer dius el quadrant gran de 5×5 km ('22AP') i després la cel·la d'1×1 km comptant d'esquerra a dreta i de dalt a baix (01–05 a dalt, 06–10 a la segona fila... fins al 25).",
          takeaway: 'Lluna amb panxa a l’Oest = Creixent (D) | Panxa a l’Est = Minvant (C) | Codi SOC = 5×5 km (22AP) + 1×1 km (01 a 25).'
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · Orientació amb la Lluna (Maresme ↔ Pallars)',
          acronym: 'Petit al Maresme (Est) = Decreix  |  Gran al Pallars (Oest) = Creix',
          trick:
            '• De petit vivia al Maresme (que és a l’EST) i era petit (Lluna minvant / decreixent, forma de C) → la panxa apunta cap a l’EST.\n• Ara que em faig gran (Lluna creixent, forma de D) visc al Pallars (que és a l’OEST) i creixo → la panxa apunta cap a l’OEST.',
          example:
            'Recorda el viatge vital: Maresme (Est, petit/decreix) → Pallars (Oest, gran/creix)!'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · Resum 1/2',
      title: 'Resum Imprescindible d’Examen (1/2) — Cartografia, UTM i Orientació',
      subtitle: 'Síntesi d’alta densitat dels Capítols 2, 3 i 4 del manual MAN.GRAL.002.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 1: Coordenades UTM, Orientació i GNSS',
          subtitle: 'Totes les xifres dels primers 4 capítols',
          headers: ['Concepte', 'Dada Oficial Exacta', 'Recordatori Ràpid'],
          rows: [
            ['Divisió UTM Mundial', '60 fusos de 6° (1 a 60) · 20 bandes de 8° (C a X, sense I ni O)', 'Banda N a X = Hemisferi Nord | C a M = Hemisferi Sud'],
            ['Catalunya en UTM', 'Zona 31T íntegra · Datum oficial ETRS89 (antic ED50 desfasat ~200 m)', 'X (Est-Oest) = 6 xifres (centre 500.000 m) | Y (Nord-Sud) = 7 xifres'],
            ['Corbes i Ombrejat', 'Corba mestra cada 5 corbes · Ombrejat des del Nord-Oest (NO)', 'Distància UTM: d = √(ΔX² + ΔY²)'],
            ['Hora Solar i Rellotge', 'Estiu: Hora oficial - 2 h | Hivern: Hora oficial - 1 h', 'Agulla d’hores al Sol → bisectriu amb les 12 = SUD'],
            ['Orientació Nocturna', 'Estrella Polar = NORD (4× Ossa Major / bisectriu Cassiopea)', 'Lluna Creixent (D) = panxa OEST | Minvant (C) = panxa EST'],
            ['Indicis Naturals', 'Molsa i anells d’arbre més junts = NORD | Absis romànic = EST', 'Plaques solars = SUD | Declinació magnètica a Catalunya < 2°'],
            ['GNSS i Drons', '3 segments (Espacial, Control, Usuari) · Mínim 4 satèl·lits per a 3D', 'GPS (EUA), Galileo (UE), GLONASS (Rússia), BeiDou (Xina) · Dron RTH/Geofence']
          ]
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · Resum 2/2',
      title: 'Resum Imprescindible d’Examen (2/2) — Cartografia Operativa COE, Camins, PAIF i SOC',
      subtitle: 'Síntesi d’alta densitat dels Capítols 5 i 6 del manual MAN.GRAL.002.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 2: Paràmetres Oficials de la Cartografia COE de Bombers',
          subtitle: 'Valors que cauen a totes les convocatòries',
          headers: ['Element de la COE', 'Valors i Característiques Oficials', 'Simbologia / Detall Clau'],
          rows: [
            ['Paràmetres Mapa COE', 'Escala 1:25.000 (1 cm = 250 m) · Equidistància 10 m · Datum ETRS89', 'Divisió MTN: 1 full 1:50.000 (3 xifres) = 4 fulls 1:25.000 (1, 2, 3, 4)'],
            ['Camí Primari COE', 'Amplada ≥ 6 metres (es creuen 2 camions BRP en qualsevol punt)', 'Línia GROGA contínua (marró si és pavimentat)'],
            ['Camí Secundari COE', 'Amplada 3 a 5 m amb sobreamples (> 5 m) cada 100–150 m', 'Marxa enrere màxima 150 m · Groc amb puntejat verd'],
            ['Camí Terciari COE', 'Amplada ≥ 3 m SENSE sobreamples (1 sol sentit per a BRP)', 'Alternança de trams grocs i verds foscos'],
            ['No accessible a BRP', 'Vial no apte per a BRP', 'Traç discontinu vermell sobre blanc amb vores vermelles'],
            ['Punts d’Aigua i PAIF', 'PAIF: Capacitat > 200 m³ (200.000 L; inclou antics > 120 m³)', 'Lletra "T" = Helicòpter | Fons groc = públic | Quadrat/Triangle'],
            ['Codi SOC (ex. 22AP06)', 'Quadrant vermell de 5 × 5 km (2 núm. O→E + 2 lletres N→S)', 'Dividit en 25 seccions grises d’1 × 1 km numerades del 01 al 25']
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't14-q1',
      difficulty: 'Fàcil',
      question: 'En quina zona UTM (fus i banda), amb quin Datum oficial i amb quantes xifres en metres s’expressen les coordenades X i Y a Catalunya?',
      options: [
        'Zona 30S · Datum ED50 · X de 7 xifres i Y de 6 xifres.',
        'Zona 31T · Datum ETRS89 · Coordenada X (Est-Oest) de 6 xifres i Coordenada Y (Nord-Sud) de 7 xifres.',
        'Zona 31N · Datum WGS72 · X i Y de 5 xifres.',
        'Zona 29T · Datum ETRS89 · X de 8 xifres i Y de 8 xifres.'
      ],
      correctIndex: 1,
      explanation: 'Catalunya es troba íntegrament al fus 31 banda T (31T), amb Datum oficial ETRS89. La coordenada X té sempre 6 xifres en metres i la Y (distància a l’Equador) en té 7.'
    },
    {
      id: 't14-q2',
      difficulty: 'Mitjà',
      question: 'Segons la classificació de la Cartografia Operativa d’Emergències (COE), quines característiques defineixen un Camí Primari i un Camí Secundari?',
      options: [
        'Primari: ≥ 10 m asfaltat | Secundari: < 2 m de terra.',
        'Primari: amplada ≥ 6 m (es poden creuar 2 BRP en qualsevol punt, traç groc continu) | Secundari: amplada de 3 a 5 m amb sobreamples (> 5 m) cada 100–150 m.',
        'Primari: 3 m sense sobreamples | Secundari: vermell discontinu no accessible a BRP.',
        'Tots dos tenen 4 m d’amplada i són d’un sol sentit.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 5.2.1 del manual MAN.GRAL.002: Camí Primari ≥ 6 m (es creuen 2 BRP); Camí Secundari de 3 a 5 m amb sobreamples cada 100–150 m; Camí Terciari ≥ 3 m sense sobreamples (1 sol sentit).'
    },
    {
      id: 't14-q3',
      difficulty: 'Mitjà',
      question: 'Quines dimensions tenen el quadrant principal (en vermell) i les 25 seccions internes (en gris, del 01 al 25) del Codi SOC (Sistema d’Orientació Cartogràfica) a la COE?',
      options: [
        'Quadrant de 10 × 10 km i 100 seccions d’1 × 1 km.',
        'Quadrant de 5 × 5 km (2 números + 2 lletres) dividit en 25 seccions d’1 × 1 km (numerades del 01 al 25).',
        'Quadrant d’1 × 1 km dividit en 25 seccions de 100 × 100 m.',
        'Quadrant de 25 × 25 km dividit en 5 seccions.'
      ],
      correctIndex: 1,
      explanation: 'El Codi SOC (ex. 22AP06) consta d’un quadrant de 5 × 5 km (2 números que creixen O→E i 2 lletres que creixen N→S) subdividit en 25 quadrats d’1 × 1 km numerats del 01 al 25.'
    },
    {
      id: 't14-q4',
      difficulty: 'Fàcil',
      question: 'Quina és la capacitat mínima d’aigua d’un PAIF (Punt d’Aigua per a Incendis Forestals) i què indica la lletra "T" situada sobre el símbol d’un punt d’aigua a la COE?',
      options: [
        'Capacitat > 50 m³; la "T" indica que l’aigua és tèrbola.',
        'Capacitat > 200 m³ (200.000 litres, incloent antics de > 120 m³); la lletra "T" indica que és apte per a la càrrega d’helicòpters.',
        'Capacitat > 1.000 m³; la "T" indica titularitat privada.',
        'Capacitat > 10 m³; la "T" indica que té boca Storz.'
      ],
      correctIndex: 1,
      explanation: 'Segons l’apartat 5.2.2 del manual MAN.GRAL.002, els PAIF tenen una capacitat superior a 200 m³ (incloent antics > 120 m³) i la lletra "T" sobre el símbol indica que és accessible per a helicòpters.'
    },
    {
      id: 't14-q5',
      difficulty: 'Mitjà',
      question: 'Si volem orientar-nos amb el Sol i un rellotge d’agulles a Catalunya durant l’horari oficial d’ESTIU, quantes hores hem de restar per obtenir l’hora solar i quin punt cardinal ens marca la bisectriu entre l’agulla de les hores i les 12?',
      options: [
        'Restar 1 hora; la bisectriu marca el Nord.',
        'Restar 2 hores a l’estiu (-1 hora a l’hivern); s’apunta l’agulla de les hores al Sol i la bisectriu amb les 12 marca el SUD.',
        'Sumar 2 hores; la bisectriu marca l’Est.',
        'No cal restar cap hora; l’agulla dels minuts marca el Nord.'
      ],
      correctIndex: 1,
      explanation: 'A Catalunya l’hora solar és -2 h a l’estiu i -1 h a l’hivern respecte a l’hora oficial. Apuntant l’agulla petita (hores) al Sol, la bisectriu amb les 12 assenyala el Sud.'
    },
    {
      id: 't14-q6',
      difficulty: 'Mitjà',
      question: 'Durant una recerca nocturna, observem la Lluna en fase de Quart Creixent (forma de "D"). Cap a quin punt cardinal apunta la seva panxa o part corba il·luminada?',
      options: [
        'Cap al Nord.',
        'Cap a l’Est.',
        'Cap a l’OEST (i si és Quart Minvant, amb forma de "C", la panxa apunta cap a l’EST).',
        'Cap al Sud.'
      ],
      correctIndex: 2,
      explanation: 'Apartat 3.3 del manual: en Quart Creixent les banyes apunten a l’Est i la panxa il·luminada apunta a l’Oest; en Quart Minvant la panxa il·luminada apunta a l’Est.'
    },
    {
      id: 't14-q7',
      difficulty: 'Fàcil',
      question: 'Quina és l’escala i l’equidistància entre corbes de nivell normals de la Cartografia Operativa d’Emergències (COE) i quants metres reals equivalen a 4 cm mesurats sobre aquest mapa?',
      options: [
        'Escala 1:50.000, equidistància 20 m; 4 cm = 2.000 m.',
        'Escala 1:25.000, equidistància 10 m; 4 cm = 1.000 metres (1 km).',
        'Escala 1:10.000, equidistància 5 m; 4 cm = 400 m.',
        'Escala 1:100.000, equidistància 50 m; 4 cm = 4.000 m.'
      ],
      correctIndex: 1,
      explanation: 'La COE té escala 1:25.000 (1 cm = 250 m) i equidistància de 10 m. Per tant, 4 cm × 250 m/cm = 1.000 m (1 km).'
    },
    {
      id: 't14-q8',
      difficulty: 'Fàcil',
      question: 'Quants satèl·lits com a mínim necessita veure simultàniament un receptor GNSS (GPS / Galileo) per calcular una posició tridimensional (3D: latitud, longitud i altitud) per trilateració?',
      options: [
        '1 satèl·lit.',
        '2 satèl·lits.',
        '4 satèl·lits com a mínim.',
        '12 satèl·lits com a mínim.'
      ],
      correctIndex: 2,
      explanation: 'Segons el Capítol 4 del manual MAN.GRAL.002, es necessiten com a mínim 4 satèl·lits per determinar la posició 3D i sincronitzar l’error de rellotge del receptor.'
    },
    {
      id: 't14-q9',
      difficulty: 'Mitjà',
      question: 'Des de quina direcció se simula el focus de llum en l’ombrejat dels mapes topogràfics per generar la sensació visual de relleu 3D?',
      options: [
        'Des del Sud-Est.',
        'Des del Nord-Oest (NO).',
        'Verticalment des del zenit.',
        'Des del Sud.'
      ],
      correctIndex: 1,
      explanation: 'Per convenció cartogràfica (apartat 2.3.5 del manual), l’ombrejat del relleu simula una font de llum situada al Nord-Oest.'
    },
    {
      id: 't14-q10',
      difficulty: 'Mitjà',
      question: 'En les bandes de latitud de la quadrícula UTM (lletres de la C a la X sense I ni O), a partir de quina lletra comença l’Hemisferi Nord?',
      options: [
        'A partir de la lletra A.',
        'A partir de la lletra N (de la N a la X és Hemisferi Nord; de la C a la M és Hemisferi Sud).',
        'A partir de la lletra T.',
        'A partir de la lletra G.'
      ],
      correctIndex: 1,
      explanation: 'Les bandes C a M corresponen a l’Hemisferi Sud i les bandes N a X corresponen a l’Hemisferi Nord (fàcil de recordar: N de Nord!).'
    },
    {
      id: 't14-q11',
      difficulty: 'Mitjà',
      question: 'Quina diferència hi ha entre la declinació magnètica i la convergència de meridians en un mapa topogràfic UTM?',
      options: [
        'La declinació magnètica és l’angle entre el Nord Geogràfic i el Nord Magnètic; la convergència de meridians és l’angle entre el Nord Geogràfic i el Nord de la Quadrícula UTM.',
        'Són dos termes sinònims per referir-se a la inclinació de les corbes de nivell.',
        'La declinació magnètica només afecta els mapes ràster i la convergència de meridians només es dona a l’hemisferi Sud.',
        'La convergència de meridians és l’error d’altitud del receptor GNSS quan només capta 3 satèl·lits.'
      ],
      correctIndex: 0,
      explanation: 'La declinació magnètica separa el Nord Geogràfic del Nord Magnètic (a Catalunya < 2°), mentre que la convergència de meridians és l’angle entre els meridians geogràfics i les línies verticals de la quadrícula UTM.'
    },
    {
      id: 't14-q12',
      difficulty: 'Mitjà',
      question: 'Quina afirmació és correcta respecte a la distinció clàssica entre azimut i rumb?',
      options: [
        'L’azimut es mesura sempre de 0° a 90° des del Nord o del Sud cap a l’Est o l’Oest.',
        'L’azimut es mesura en sentit horari de 0° a 360° des del Nord, mentre que el rumb topogràfic per quadrants es mesura de 0° a 90° partint del Nord o del Sud cap a l’Est o l’Oest.',
        'El rumb sempre s’expressa en coordenades UTM de 7 xifres i l’azimut en metres sobre el nivell del mar.',
        'L’azimut només es pot calcular de nit amb l’Estrella Polar.'
      ],
      correctIndex: 1,
      explanation: 'En topografia i orientació, l’azimut va de 0° a 360° en sentit horari des del Nord (ex. 225°), mentre que el rumb clàssic per quadrants s’expressa de 0° a 90° des de N o S cap a E o O (ex. S 45° O).'
    },
    {
      id: 't14-q13',
      difficulty: 'Mitjà',
      question: 'En un mapa topogràfic, observem unes corbes de nivell que formen una "V" amb el vèrtex apuntant cap a les cotes més ALTES. Quina forma del relleu indiquen?',
      options: [
        'Una carena o divisòria d’aigües.',
        'Un esperó o cim aïllat.',
        'Una vall, torrent o tàlveg (fondalada).',
        'Un penya-segat vertical.'
      ],
      correctIndex: 2,
      explanation: 'En una vall o tàlveg, el vèrtex de la "V" apunta aigües amunt (cap a cotes altes). En canvi, en una carena o divisòria, la "V" apunta cap a les cotes baixes.'
    },
    {
      id: 't14-q14',
      difficulty: 'Difícil',
      question: 'En relació amb la Cartografia Operativa d’Emergències (COE), quina de les afirmacions següents és INCORRECTA?',
      options: [
        'Un Camí Secundari té una amplada de 3 a 5 m i disposa de sobreamples (> 5 m) cada 100–150 m per facilitar el creuament de vehicles.',
        'Un Camí Terciari té una amplada ≥ 3 m sense sobreamples i és de circulació d’un sol sentit per a BRP.',
        'Les vores de color negre en un camí indiquen que el vial és de terra sense pavimentar, mentre que les vores verdes indiquen que és asfaltat.',
        'Un traç discontinu vermell sobre fons blanc amb vores vermelles indica un camí NO accessible per a camions BRP.'
      ],
      correctIndex: 2,
      explanation: 'Afirmació incorrecta: a la llegenda COE és just al revés! Les vores NEGRES indiquen vial pavimentat/asfaltat, i les vores VERDES indiquen camí de terra / no asfaltat.'
    },
    {
      id: 't14-q15',
      difficulty: 'Mitjà',
      question: 'Dos equips forestals comuniquen les seves coordenades UTM (31T, ETRS89): l’equip A és a X = 420.300 m, Y = 4.610.400 m, i l’equip B és a X = 420.600 m, Y = 4.610.800 m. Quina distància recta els separa?',
      options: [
        '300 metres.',
        '400 metres.',
        '500 metres.',
        '700 metres.'
      ],
      correctIndex: 2,
      explanation: 'ΔX = 420.600 - 420.300 = 300 m; ΔY = 4.610.800 - 4.610.400 = 400 m. Aplicant Pitàgores: d = √(300² + 400²) = √(90.000 + 160.000) = √250.000 = 500 m.'
    },
    {
      id: 't14-q16',
      difficulty: 'Fàcil',
      question: 'Quina diferència operativa hi ha entre el datum oficial actual ETRS89 i l’antic datum ED50 si introduïm per error coordenades ED50 en un GPS configurat en ETRS89?',
      options: [
        'No hi ha cap diferència apreciable (menys d’1 metre).',
        'Hi ha un desfasament d’aproximadament 200 metres sobre el terreny.',
        'La coordenada apareix situada a l’hemisferi Sud.',
        'El desfasament és exactament de 500 quilòmetres cap a l’Est.'
      ],
      correctIndex: 1,
      explanation: 'L’antic datum ED50 té un desfasament d’uns 200 metres respecte a l’actual datum oficial ETRS89 (pràcticament coincident amb WGS84).'
    },
    {
      id: 't14-q17',
      difficulty: 'Mitjà',
      question: 'Quants fulls a escala 1:25.000 conté un sol full del Mapa Topogràfic Nacional (MTN) a escala 1:50.000, i com es codifica el quadrant superior dret del full 522?',
      options: [
        'Conté 2 fulls; el superior dret seria 522-2.',
        'Conté 4 fulls numerats de l’1 al 4; el superior dret és 522-2.',
        'Conté 4 fulls numerats de l’1 al 4; el superior dret és 522-3.',
        'Conté 25 fulls numerats del 01 al 25; el superior dret és 522-05.'
      ],
      correctIndex: 1,
      explanation: 'Cada full MTN 1:50.000 es divideix en 4 quarts 1:25.000: 1 (superior esquerre), 2 (superior dret), 3 (inferior esquerre) i 4 (inferior dret). Per tant, és el 522-2.'
    },
    {
      id: 't14-q18',
      difficulty: 'Fàcil',
      question: 'En un mapa topogràfic amb equidistància de 10 metres entre corbes de nivell, cada quants metres de desnivell apareix dibuixada una corba mestra (més gruixuda i amb la cota numèrica)?',
      options: [
        'Cada 20 metres (cada 2 corbes).',
        'Cada 50 metres (cada 5 corbes).',
        'Cada 100 metres (cada 10 corbes).',
        'Cada 250 metres (cada 25 corbes).'
      ],
      correctIndex: 1,
      explanation: 'Les corbes mestres es dibuixen cada 5 corbes de nivell normals. Amb una equidistància de 10 m, això correspon a cada 50 m de desnivell.'
    }
  ]
};
