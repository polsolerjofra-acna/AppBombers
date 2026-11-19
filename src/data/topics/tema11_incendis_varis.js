export const tema11IncendisVaris = {
  id: 'tema-26',
  number: 26,
  code: 'MAN.INXX.000',
  title: 'Intervenció bàsica en incendis varis',
  category: 'Manual Operatiu SGO — Vehicles (GLP/GNC/GNL/EV), Contenidors i Abocadors',
  estimatedMinutes: 45,
  importance: {
    title: "Radar d'Examen — Tema 26 (MAN.INXX.000 V.2): Incendis Varis",
    frequency: 'Molt Alta (4-5 preguntes fixes sobre etiquetes E/B/XTL, GLP vs GNC vs GNL, EV ≥1h i contenidors)',
    summary:
      "Versió 2 actualitzada del manual MAN.INXX.000: regula l'extinció d'incendis en vehicles de totes les propulsions (gasolina E5/E10/E85, dièsel B7/B10/XTL, GLP, GNC, GNL, elèctrics EV i hidrogen H₂), contenidors urbans (superfície i soterrats) i altres incendis urbans (pneumàtics i abocadors amb novetats de risc biològic i enfonsament). Inclou 4 pàgines de desenvolupament + 2 pàgines finals de Resum Executiu.",
    hotTopics: [
      'Cap. 1-2.5: Estadística 2023 (contenidors i vehicles lideren els incendis no estructurals), riscos de vehicles (CO, HCN, HCl, HF en bateries, amortidors i airbags) i zonatge d’exclusió de 25 metres.',
      'Cap. 2.6: Etiquetes europees UNE-EN 16942 (Cercle = Gasolina E5/E10/E85; Quadrat = Gasoil B7/B10/XTL [punt d’inflamació >62 °C]; Rombe = Gasos LPG, CNG, LNG, H2), camió SEMPRE a la part alta del pendent i aproximació a 45° amb Ø25.',
      'Cap. 2.7.2 (PARANY ESTRELLA): GLP (refredar dipòsit sense apagar la flama de la vàlvula), GNC (PROHIBIT tirar aigua sobre els cilindres de 200 bar!), GNL (desaconsellat tirar aigua al dipòsit criogènic ni a la bassa!) i Vehicle Elèctric EV (aigua en abundància i monitoritzar amb càmera tèrmica mínim 1 HORA després!).',
      'Cap. 3-4: Contenidors (colors, vidre verd amb xoc tèrmic, soterrats per inundació o escuma, foc en somort i risc biològic V.2), Pneumàtics (gran fum negre i piròlisi d’olis) i Abocadors (risc d’enfonsament de maquinària/bombers en cavitats cremades i risc biològic V.2).'
    ],
    traps: [
      'Parany mortal d’examen: En un vehicle de GNC (Gas Natural Comprimit a 200 bar) està PROHIBIT tirar aigua als cilindres perquè el xoc tèrmic fred bloqueja o cristal·litza el fusible tèrmic (TPRD a ~110 °C) i el dipòsit rebenta mecànicament!',
      'En un vehicle de GNL (Gas Natural Liquat criogènic a -162 °C), tirar aigua al dipòsit o al toll aporta calor, accelera l’ebullició i pot provocar un RPT (Rapid Phase Transition)!',
      'Confondre la forma geomètrica de les etiquetes europees de combustible: Cercle = Gasolina (E) | Quadrat = Dièsel (B / XTL) | Rombe = Gasos (LPG / CNG / LNG / H2).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-2.6 Vehicles i Etiquetes',
      title: '1–2.6. Incendis de Vehicles: Riscos, Zonatge (25 m), Etiquetes Europees i Emplaçament',
      subtitle: 'Gasos tòxics (CO, HCN, HCl, HF), etiquetes cercle/quadrat/rombe, pendent i aproximació a 45°.',
      blocks: [
        {
          type: 'text',
          heading: '1–2.5. Estadística, Riscos d’un Vehicle en Flames i Zonatge de 25 Metres',
          paragraphs: [
            "Segons les dades estadístiques del manual MAN.INXX.000 (any 2023), els incendis de contenidors i els incendis de vehicles constitueixen el gruix principal de les sortides per incendis no estructurals ni forestals a Catalunya. Un vehicle modern conté més de 150-200 kg de plàstics, escumes de poliuretà, cautxú i fluids que en cremar alliberen un còctel altament tòxic: CO, HCN (cianur d'hidrogen), HCl (clorur d'hidrogen) i, en bateries d'ió liti, fluorur d'hidrogen (HF). Per això l'ús de l'EPI pesant complet i l'ERA és OBLIGATORI des del primer instant.",
            "ZONATGE OFICIAL (Secció 2.5): Es fixa un perímetre de seguretat (Zona Calenta) de MÍNIM 25 METRES al voltant del vehicle incendiat."
          ]
        },
        {
          type: 'table',
          title: '2.6. Etiquetatge Europeu de Combustibles (UNE-EN 16942) i Propulsions del Manual',
          subtitle: 'Formes geomètriques, sigles i propietats fisicoquímiques del Capítol 2 de MAN.INXX.000 V.2',
          headers: ['Forma Geomètrica', 'Codis de l’Etiqueta', 'Combustible i Dades Tècniques Oficials del Manual'],
          rows: [
            ['CERCLE (E = Etanol)', 'E5, E10, E85', 'Gasolina amb 5%, 10% o 85% d’etanol. Líquid molt volàtil amb punt d’inflamació ≈ -40 °C i vapors més pesants que l’aire (d = 3 a 4).'],
            ['QUADRAT (B = Biodièsel / XTL)', 'B7, B10, B20, B30, B100 i XTL', 'Gasoil / Dièsel amb % de biodièsel (FAME) o XTL (dièsel parafínic sintètic). DADA DEL MANUAL: Punt d’inflamació > 62 °C (entre 62 °C i 100 °C).'],
            ['ROMBE (Gasos)', 'LPG (GLP)', 'Gas Liquat del Petroli (propà + butà) emmagatzemat liquat a baixa pressió (~8 a 10 bar; vàlvula de seguretat tarada a ~27 bar). Més pesant que l’aire (d = 1,5–2,0).'],
            ['ROMBE (Gasos)', 'CNG (GNC)', 'Gas Natural Comprimit (metà CH₄) emmagatzemat en fase gasosa a ALTA PRESSIÓ (~200 bar)! Més lleuger que l’aire (d ≈ 0,55). Porta fusible tèrmic TPRD (~110 °C).'],
            ['ROMBE (Gasos)', 'LNG (GNL)', 'Gas Natural Liquat (metà CH₄) emmagatzemat criogènicament a -162 °C en tancs termo-aïllats (~8-16 bar) de camions pesants.'],
            ['ROMBE (Gasos) / EV', 'H2 (Hidrogen) | EV / HEV / PHEV', 'Hidrogen comprimit a 350 bar o 700 bar (flama gairebé invisible de dia, d = 0,07) | Vehicles elèctrics i híbrids amb bateria d’alta tensió (400-800 V) d’ió liti.']
          ],
          footnote: 'Memoritza: Cercle = Gasolina (E5/E10/E85) | Quadrat = Gasoil (B7/B10/XTL, punt inflamació >62 °C) | Rombe = Gasos (LPG 8-10 bar, CNG 200 bar, LNG -162 °C, H2 350/700 bar).'
        },
        {
          type: 'text',
          heading: '2.6.1 i 2.7.1. Ubicació de l’Autobomba en Pendent i Aproximació a 45° amb Ø25',
          paragraphs: [
            "• EMPLAÇAMENT DE L'AUTOBOMBA (2.6.1): L'autobomba s'estaciona sempre a sobrevent i, si la via té pendent, SEMPRE A LA PART ALTA DEL PENDENT (costa amunt respecte del vehicle incendiat) per evitar que un vessament de gasolina o gasoil en flames corri costa avall per sota del camió!",
            "• APROXIMACIÓ DEL BINOMI (2.7.1): S'utilitza línia d'atac de Ø 25 mm aproximant-se sempre en DIAGONAL A 45° (pels angles davanters o posteriors del vehicle), MAI de front ni per darrere."
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 2.7.2 GLP, GNC, GNL i EV',
      title: '2.7.2. Maniobres Específiques per Propulsió: GLP vs. GNC vs. GNL vs. Elèctric (EV) i H₂',
      subtitle: 'La taula més preguntada del Tema 26: on tirar aigua, on està PROHIBIT i vigilància d’1 hora en EV.',
      blocks: [
        {
          type: 'table',
          title: '2.7.2. Protocol Oficial d’Extinció segons el Sistema de Propulsió del Vehicle (MAN.INXX.000 V.2)',
          subtitle: 'Memorització crítica: l’actuació amb l’aigua canvia radicalment entre GLP, GNC, GNL i EV!',
          headers: ['Propulsió del Vehicle', 'Pressió / Tª del Dipòsit', 'Dispositiu d’Alleujament', 'Maniobra Exacta amb l’Aigua (MAN.INXX.000 Secció 2.7.2)'],
          rows: [
            ['1. GLP (LPG - Autogàs: Propà/Butà)', 'Liquat a 8 – 10 bar', 'Vàlvula de sobrepressió per molla (~27 bar) que obre i tanca a polsacions.', '• SÍ REFRIGERAR EL DIPÒSIT amb abundant aigua per baixar la pressió interna i evitar la BLEVE.\n• NO APAGAR LA FLAMA del dardo que surt per la vàlvula mentre surti gas.'],
            ['2. GNC (CNG - Gas Natural Comprimit)', 'Gas a 200 bar (cilindres d’acer o composite)', 'Fusible tèrmic TPRD (s’obre de forma irreversible quan s’escalfa a ~110 °C).', '• PROHIBIT TIRAR AIGUA SOBRE ELS CILINDRES DE GNC!\n• Si tires aigua i refredes la vàlvula TPRD mentre el cilindre es crema, impedeixes que el fusible s’obri als 110 °C i el cilindre de 200 bar REBENTA mecànicament!'],
            ['3. GNL (LNG - Gas Natural Liquat en camions)', 'Criogènic a -162 °C (8 – 16 bar)', 'Vàlvules d’alleujament per evaporació (boil-off).', '• DESACONSELLAT TIRAR AIGUA sobre el dipòsit criogènic ni sobre un toll de GNL líquid a terra! L’aigua aporta calor al líquid a -162 °C i multiplica la vaporització.'],
            ['4. Vehicle Elèctric / Híbrid (EV / HEV / PHEV - Bateria Li-ion)', 'Alta Tensió (400 – 800 V CC, cables TARONJA)', 'Desconnexió del Service Plug / llaç de tall de 12V.', '• Projectar GRAN QUANTITAT D’AIGUA directament cap a la bateria per aturar l’embalaçament tèrmic (Thermal Runaway).\n• REGLA D’1 HORA: Un cop extingit, MONITORITZAR la bateria amb càmera tèrmica durant MÍNIM 1 HORA.'],
            ['5. Hidrogen (H₂ - Pila de combustible FCEV)', 'Gas comprimit a 350 bar o 700 bar', 'Fusible tèrmic TPRD.', '• Flama gairebé INVISIBLE de dia → usar sempre CÀMERA TÈRMICA per detectar el dardo abans d’acostar-s’hi. No refredar el TPRD ni apagar el dardo.']
          ],
          footnote: 'Resum d’or: GLP = SÍ aigua al dipòsit | GNC = PROHIBIT aigua als cilindres! | GNL = DESACONSELLAT aigua al tanc criogènic! | EV = Molta aigua + monitoritzar ≥ 1 HORA!'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 3-4 Contenidors i Abocadors',
      title: '3–4. Incendis de Contenidors, Pneumàtics i Abocadors (Risc d’Enfonsament i Biològic V.2)',
      subtitle: 'Tàctiques per fracció selectiva, xoc tèrmic del vidre verd, contenidors soterrats i novetats V.2.',
      blocks: [
        {
          type: 'table',
          title: '3.2–3.6 i 4.2–4.4. Operativa en Contenidors, Pneumàtics i Abocadors (MAN.INXX.000 V.2)',
          subtitle: 'Comportament del foc i mesures de seguretat específiques de la Versió 2',
          headers: ['Escenari', 'Comportament i Risc Específic al Manual', 'Maniobra Operativa d’Extinció'],
          rows: [
            ['Contenidor Groc (Plàstics) i Blau (Paper)', 'Groc: flama ràpida, fum tòxic (CO, HCN, HCl) i plàstic fos. Blau: combustió profunda en SOMORT (sense flama, incandescència interna).', '1a prioritat en superfície: protegir vehicles aparcats i façana. En paper/cartró: aigua amb humectant i remogut mecànic amb bichero.'],
            ['Contenidor Verd (Vidre)', 'DADA CLAU DEL MANUAL: El vidre calent pateix XOC TÈRMIC quan li projectem aigua freda i esclata projectant esquirles tallants!', 'Mantenir distància i pantalla facial del casc EN 443 abaixada en aplicar aigua.'],
            ['Contenidor Marró / Gris (Resta)', 'NOVETAT V.2 (3.4): RISC BIOLÒGIC per presència de residus sanitaris domèstics, xeringues i patògens.', 'Evitar esquitxades amb raig a curta distància i usar guants resistents a la punció.'],
            ['Contenidors Soterrats', 'Foc confinat en un fossat de formigó sota terra.', 'NO baixar mai dins del fossat! Extingir des de fora per inundació amb aigua o omplint el fossat amb ESCUMA de mitjana/alta expansió.'],
            ['4.2. Pneumàtics', 'Alt poder calorífic, fum negre densíssim i destil·lació pirolítica d’olis inflamables.', 'Separar amb maquinària pesant i sufocar amb ESCUMA física o sepultar amb terra/sorra.'],
            ['4.4. Abocadors de Residus', 'Combustió subterrània profunda en somort + metà.\n• RISC 1 (V.2): RISC D’ENFONSAMENT en cavitats cremades sota la superfície!\n• RISC 2 (V.2): RISC BIOLÒGIC i lixiviats.', 'Prohibir el pas per sobre de la massa calenta sense assegurar-la; usar maquinària pesant per excavar, refredar i segellar amb capes de TERRA inert; descontaminació final.']
          ],
          footnote: 'Memoritza les novetats V.2: Contenidor verd = Xoc tèrmic (esquirles) | Contenidors i abocadors = Risc biològic + Foc en somort | Abocadors = Risc d’enfonsament!'
        }
      ]
    },
    {
      pageNumber: 4,
      isSummary: true,
      shortLabel: 'Pàg. 4 · 📌 Resum 1/2 (Xifres)',
      title: 'Resum Final (1/2): Taula Mestra de Xifres, Etiquetes i Propulsions (MAN.INXX.000 V.2)',
      subtitle: 'Totes les distàncies, temperatures, pressions i temps del Tema 26 per al repàs ràpid.',
      blocks: [
        {
          type: 'table',
          title: 'Síntesi Numèrica i Normativa Imprescindible — Tema 26 (Incendis Varis V.2)',
          subtitle: 'Les 14 dades exactes del manual MAN.INXX.000 que cauen als qüestionaris',
          headers: ['Concepte / Propulsió', 'Valor Oficial Exacte (MAN.INXX.000 V.2)', 'Detall Operatiu d’Examen'],
          rows: [
            ['1. Zonatge de seguretat en incendi de vehicle', 'Mínim 25 metres de radi', 'EPI estructural complet + ERA obligatori des de l’inici'],
            ['2. Angle d’aproximació i mànega d’atac', 'Aproximació a 45° amb línia de Ø 25 mm', 'Mai aproximar-se pel davant ni pel darrere'],
            ['3. Posició de l’autobomba en pendent', 'Sempre a la PART ALTA del pendent (i a sobrevent)', 'Evita que el combustible ardent vessat corri cap al camió'],
            ['4. Etiqueta CERCLE (Gasolina)', 'E5, E10, E85 (% màxim d’etanol)', 'Punt d’inflamació ≈ -40 °C; vapors més pesants que l’aire'],
            ['5. Etiqueta QUADRAT (Dièsel / Gasoil)', 'B7, B10, B20, B30, B100 i XTL (sintètic)', 'Punt d’inflamació > 62 °C (entre 62 °C i 100 °C)'],
            ['6. Etiqueta ROMBE (Combustibles Gasosos)', 'LPG (GLP), CNG (GNC), LNG (GNL), H2 (Hidrogen)', 'Forma romboïdal per a qualsevol gas d’automoció'],
            ['7. Pressió del GLP (Autogàs)', '8 a 10 bar (liquat) | Vàlvula de molla a ~27 bar', 'SÍ refrigerar el dipòsit amb aigua; NO apagar el dardo de la vàlvula'],
            ['8. Pressió del GNC (Gas Natural Comprimit)', '200 bar (fase gas) | Fusible tèrmic TPRD (~110 °C)', 'PROHIBIT tirar aigua als cilindres de GNC (impedeix l’obertura del TPRD!)'],
            ['9. Temperatura del GNL (Gas Natural Liquat)', '-162 °C (criogènic a 8–16 bar)', 'DESACONSELLAT tirar aigua al tanc o toll de GNL (aporta calor!)'],
            ['10. Pressió de l’Hidrogen (H₂)', '350 bar o 700 bar | Flama invisible de dia', 'Detectar flama amb càmera tèrmica; fusible TPRD'],
            ['11. Temps de vigilància post-extinció en EV', 'Mínim 1 HORA amb càmera tèrmica', 'Bateria Li-ion (400-800 V, cables taronja): refrigerar amb molta aigua'],
            ['12. Contenidor Verd (Vidre)', 'Risc d’esclat d’esquirles per XOC TÈRMIC', 'Quan l’aigua freda toca el vidre roent del contenidor'],
            ['13. Novetat V.2 en Contenidors i Abocadors', 'Inclusió explícita del RISC BIOLÒGIC', 'Presència de residus patògens/punxants i lixiviats'],
            ['14. Risc físic crític en Abocadors (4.4)', 'Risc d’ENFONSAMENT en cavitats cremades sota la superfície', 'El foc en somort buida el subsòl i pot engolir bombers o vehicles']
          ],
          footnote: 'Pàgina 1 de 2 del Resum Executiu del Tema 26 (MAN.INXX.000 V.2).'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · 📌 Resum 2/2 (Paranys)',
      title: 'Resum Final (2/2): Regles d’Or en GLP/GNC/GNL/EV i Paranys d’Examen',
      subtitle: 'La guia definitiva per no dubtar mai en la pregunta dels combustibles alternatius.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'El Semàfor de l’Aigua en Vehicles de Gas i Elèctrics (Pregunta Segura d’Examen!)',
          acronym: 'GLP = SÍ AIGUA  |  GNC = PROHIBIT AIGUA!  |  GNL = NO AIGUA!  |  EV = MOLTA AIGUA + 1 HORA',
          trick:
            "Aquesta és la pregunta més discriminatòria de tot el manual MAN.INXX.000:\n• GLP (8-10 bar, vàlvula de molla): SÍ que es tira aigua al dipòsit per refredar-lo i abaixar la pressió (sense apagar la flama de la vàlvula).\n• GNC (200 bar, vàlvula per fusible tèrmic TPRD): PROHIBIT tirar aigua als cilindres! L'aigua refreda el fusible TPRD, impedeix que es fongui als ~110 °C per despressuritzar el tanc i provoca l'explosió mecànica del cilindre a 200 bar.\n• GNL (-162 °C criogènic): DESACONSELLAT tirar aigua al dipòsit o sobre el líquid vessat! L'aigua està 175 °C més calenta que el GNL i accelera brutalment la seva vaporització.\n• ELÈCTRIC (EV - Bateria Li-ion): SÍ, projectar gran quantitat d'aigua a la bateria per aturar el Thermal Runaway i monitoritzar amb càmera tèrmica durant MÍNIM 1 HORA després de l'extinció.",
          example: 'Si en un examen llegeixes "cilindres a 200 bar amb vàlvula fusible tèrmic (GNC)", marca sempre: PROHIBIT aplicar aigua sobre els cilindres!'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q26-1',
      difficulty: 'Difícil',
      question: "Segons l'apartat 2.7.2 del manual MAN.INXX.000, quina és la maniobra correcta respecte a l'aplicació d'aigua sobre els dipòsits d'un vehicle de GLP, un de GNC i un de GNL en cas d'incendi?",
      options: [
        'S’ha de projectar aigua a raig sobre els dipòsits de tots tres sistemes per igual.',
        'En GLP es refrigera el dipòsit amb aigua (sense apagar la flama); en GNC està PROHIBIT tirar aigua sobre els cilindres (per no bloquejar el fusible tèrmic); i en GNL es desaconsella tirar aigua sobre el dipòsit criogènic o la bassa.',
        'En GNC s’ha de tirar molta aigua als cilindres i en GLP està prohibit.',
        'En cap vehicle de gas o elèctric es pot utilitzar aigua.'
      ],
      correctIndex: 1,
      explanation: "El manual diferencia clarament: GLP = refrigerar el dipòsit sense apagar el dardo; GNC = prohibit tirar aigua als cilindres perquè refreda el fusible tèrmic i impedeix la despressurització; GNL = desaconsellat tirar aigua perquè aporta calor al líquid criogènic (-162 °C)."
    },
    {
      id: 'q26-2',
      difficulty: 'Mitjà',
      question: "Un cop extingit l'incendi de la bateria d'ió liti d'un vehicle elèctric (EV), durant quant de temps mínim estableix el manual MAN.INXX.000 que cal monitoritzar la temperatura de la bateria amb càmera tèrmica?",
      options: ['10 minuts', '30 minuts', 'Mínim 1 hora', 'No cal monitoritzar un cop apagada la flama'],
      correctIndex: 2,
      explanation: "A causa del risc de reignició per embalaçament tèrmic (Thermal Runaway), cal monitoritzar la bateria amb càmera tèrmica durant un mínim d'1 hora."
    },
    {
      id: 'q26-3',
      difficulty: 'Fàcil',
      question: "En l'etiquetatge europeu de combustibles en vehicles (UNE-EN 16942), quina forma geomètrica correspon a la gasolina (E5/E10/E85), quina al gasoil (B7/B10/XTL) i quina als combustibles gasosos (LPG/CNG/LNG/H2)?",
      options: [
        'Quadrat = Gasolina | Cercle = Gasoil | Triangle = Gasos',
        'Cercle = Gasolina | Quadrat = Gasoil | Rombe = Gasos',
        'Rombe = Gasolina | Cercle = Gasoil | Quadrat = Gasos',
        'Totes les etiquetes són circulars'
      ],
      correctIndex: 1,
      explanation: 'Cercle = Gasolina (E); Quadrat = Gasoil/Dièsel (B i XTL); Rombe = Combustibles gasosos (LPG, CNG, LNG, H2).'
    },
    {
      id: 'q26-4',
      difficulty: 'Fàcil',
      question: "Quin és el radi mínim de la zona d'exclusió (zonatge de seguretat) en un incendi de vehicle, amb quin angle s'ha d'aproximar el binomi i on s'ha d'ubicar el camió si el carrer té pendent?",
      options: [
        '10 metres | Aproximació frontal a 0° | Camió a la part baixa del pendent',
        '25 metres | Aproximació a 45° amb Ø25 | Camió sempre a la part alta del pendent (i a sobrevent)',
        '50 metres | Aproximació lateral a 90° | Camió al costat del vehicle',
        '15 metres | Aproximació per darrere | Camió a sotavent'
      ],
      correctIndex: 1,
      explanation: "El zonatge és de 25 m, l'aproximació es fa a 45° amb mànega de Ø25 i l'autobomba es col·loca sempre a la part alta del pendent."
    },
    {
      id: 'q26-5',
      difficulty: 'Mitjà',
      question: "Quins dos riscos específics destaca la Versió 2 del manual MAN.INXX.000 en els incendis d'abocadors i quin fenomen passa en aplicar aigua freda a un contenidor verd de vidre?",
      options: [
        'Risc d’allau de neu i risc elèctric | El vidre es fon.',
        'Risc d’enfonsament (per cavitats subterrànies cremades) i risc biològic | El vidre calent esclata i projecta esquirles per xoc tèrmic.',
        'Risc nuclear i risc d’inundació | El contenidor verd és ignífug.',
        'Només risc de relliscada.'
      ],
      correctIndex: 1,
      explanation: "En abocadors el manual destaca el risc d'enfonsament del terreny i el risc biològic; en contenidors de vidre destaca l'esclat d'esquirles per xoc tèrmic."
    },
    {
      id: 'q26-6',
      difficulty: 'Fàcil',
      question: "Quins gasos tòxics principals allibera un vehicle modern en flames (especialment amb bateries d'ió liti) i quin equipament de protecció és obligatori des de l'inici de la intervenció segons MAN.INXX.000?",
      options: [
        "CO, HCN, HCl i fluorur d'hidrogen (HF) | Ús obligatori de l'EPI pesant complet i l'ERA des del primer instant.",
        "Només vapor d'aigua i diòxid de carboni | N'hi ha prou amb mascareta FFP2.",
        'Només metà i nitrogen | EPI forestal sense ERA a l’exterior.',
        'Heli i argó | No cal protecció respiratòria a l’aire lliure.'
      ],
      correctIndex: 0,
      explanation: "Els plàstics, escumes, cautxú i bateries d'ió liti alliberen CO, HCN, HCl i HF; per això el manual estableix l'obligatorietat de l'EPI pesant complet i l'ERA des del primer instant."
    },
    {
      id: 'q26-7',
      difficulty: 'Mitjà',
      question: "D'acord amb la taula de propietats fisicoquímiques del capítol 2 de MAN.INXX.000, quin és el punt d'inflamació del gasoil/dièsel (B7/B10/XTL) en comparació amb el de la gasolina (E5/E10/E85)?",
      options: [
        'Gasoil ≈ -40 °C | Gasolina > 150 °C',
        'Tots dos tenen un punt d’inflamació idèntic de 20 °C.',
        'Gasoil > 62 °C (entre 62 °C i 100 °C) | Gasolina ≈ -40 °C (molt volàtil i vapors més pesants que l’aire, d = 3 a 4).',
        'El gasoil no té punt d’inflamació i la gasolina s’inflama a partir de 200 °C.'
      ],
      correctIndex: 2,
      explanation: "Segons el manual, la gasolina té un punt d'inflamació d'uns -40 °C amb vapors molt més pesants que l'aire (d = 3 a 4), mentre que el gasoil/dièsel (B/XTL) té un punt d'inflamació > 62 °C (entre 62 °C i 100 °C)."
    },
    {
      id: 'q26-8',
      difficulty: 'Difícil',
      question: "Per quina raó tècnica exacta PROHIBEIX el manual MAN.INXX.000 tirar aigua sobre els cilindres d'un vehicle de Gas Natural Comprimit (GNC) a 200 bar?",
      options: [
        "Perquè el metà reacciona químicament amb l'aigua formant àcid sulfúric.",
        "Perquè l'aigua fa surar el vehicle i en dificulta l'estabilització.",
        "Perquè el GNC és criogènic a -162 °C i l'aigua el congela.",
        "Perquè el xoc tèrmic fred de l'aigua bloqueja o impedeix que el fusible tèrmic (TPRD, ~110 °C) s'obri per despressuritzar, fent que el cilindre de 200 bar rebenti mecànicament."
      ],
      correctIndex: 3,
      explanation: "Els cilindres de GNC treballen a 200 bar i porten un fusible tèrmic TPRD (~110 °C). Si es refreda el fusible amb aigua mentre el dipòsit segueix escalfant-se, s'impedeix la despressurització i el cilindre pot rebentar."
    },
    {
      id: 'q26-9',
      difficulty: 'Mitjà',
      question: "En un incendi d'un vehicle propulsat per hidrogen (H₂, pila de combustible FCEV), a quina pressió s'emmagatzema el gas i quina particularitat crítica té la seva flama durant el dia?",
      options: [
        'A 8-10 bar | Flama molt fumosa i de color verd intens.',
        'A 350 bar o 700 bar | Flama gairebé invisible de dia, per la qual cosa cal usar sempre càmera tèrmica abans d’acostar-s’hi.',
        'A 2 bar | No pot generar dardo de foc en cap cas.',
        'En estat líquid a -20 °C | Flama molt lenta i més pesant que l’aire.'
      ],
      correctIndex: 1,
      explanation: "L'hidrogen s'emmagatzema comprimit a 350 o 700 bar, té una densitat molt baixa (d = 0,07) i la seva flama és gairebé invisible de dia; cal detectar el dardo amb càmera tèrmica i no refredar el TPRD ni apagar la flama."
    },
    {
      id: 'q26-10',
      difficulty: 'Fàcil',
      question: "Quina és la maniobra correcta per extingir un incendi en un contenidor soterrat segons l'apartat 3 del manual MAN.INXX.000?",
      options: [
        'Baixar un binomi amb escala dins del fossat de formigó per remoure la brossa.',
        'Buidar el contenidor amb una grua mentre crema.',
        'No baixar mai dins del fossat i extingir des de fora per inundació amb aigua o omplint el fossat amb escuma de mitjana o alta expansió.',
        'Aplicar exclusivament extintors de CO₂ des de 25 metres.'
      ],
      correctIndex: 2,
      explanation: "En contenidors soterrats (foc confinat en un fossat sota terra) està prohibit baixar al fossat; s'extingeix des de l'exterior per inundació amb aigua o omplint-lo d'escuma de mitjana/alta expansió."
    },
    {
      id: 'q26-11',
      difficulty: 'Mitjà',
      question: "Quina diferència operativa destaca el manual MAN.INXX.000 V.2 entre l'incendi d'un contenidor blau (paper/cartró) i el d'un contenidor marró/gris (resta)?",
      options: [
        'El blau fa una combustió profunda en somort (aigua amb humectant i remogut amb bichero); el marró/gris comporta risc biològic per residus sanitaris i punxants (evitar esquitxades i usar guants antipunció).',
        'El blau genera xoc tèrmic d’esquirles i el marró només crema amb flama groga neta.',
        'Tots dos s’extingeixen sense aigua tapant la boca amb una lona.',
        'El marró/gris només requereix guants de pell fina i el blau escuma d’alta expansió.'
      ],
      correctIndex: 0,
      explanation: "El paper/cartró (blau) presenta combustió en somort que exigeix aigua amb humectant i remogut amb bichero; la fracció resta/orgànica (marró/gris) introdueix a la V.2 el risc biològic (xeringues/patògens)."
    },
    {
      id: 'q26-12',
      difficulty: 'Difícil',
      question: "En un camió de Gas Natural Liquat (GNL) a -162 °C, per què es desaconsella projectar aigua sobre el dipòsit criogènic o sobre una bassa de GNL vessat a terra?",
      options: [
        'Perquè el GNL apaga la bomba del camió de bombers.',
        'Perquè l’aigua té una densitat inferior al metà líquid i el fa flotar.',
        'Perquè el GNL porta un fusible TPRD que es bloqueja a 0 °C.',
        'Perquè l’aigua està molt més calenta que el GNL (-162 °C), li aporta calor, multiplica l’ebullició i vaporització i pot provocar una transició ràpida de fase (RPT).'
      ],
      correctIndex: 3,
      explanation: "El GNL es troba a -162 °C (8-16 bar); l'aigua està uns 175 °C més calenta, de manera que aplicar-n'hi aporta calor, accelera brutalment la vaporització i pot desencadenar un RPT (Rapid Phase Transition)."
    }
  ]
};
