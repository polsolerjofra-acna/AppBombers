export const tema5Vehicles = {
  id: 'tema-18',
  number: 18,
  code: 'MAN.EQIP.000',
  title: "Vehicles d'intervenció en emergències",
  category: 'Manual Operatiu SGO — Flota i Mitjans Aeris',
  estimatedMinutes: 45,
  importance: {
    title: "Radar d'Examen — Tema 18 (MAN.EQIP.000 V.1): Vehicles i Mitjans Aeris",
    frequency: 'Molt Alta (3-5 preguntes per examen sobre codis X.YY.ZZ, litres de cisterna i RD 836/2012)',
    summary:
      "Manual de 7 capítols que regula tota la flota terrestre, aèria i aquàtica de Bombers de la Generalitat. Inclou 4 pàgines de desenvolupament seguint l'índex oficial del PDF + 2 pàgines finals de Resum Executiu amb totes les taules de litres, codis i pesos.",
    hotTopics: [
      'Cap. 1-2: Codificació numèrica de 5 xifres X.YY.ZZ (X=Regió, YY=Parc, ZZ=Tipus de vehicle).',
      'Cap. 3: Autobombes BUL (1.000–2.000 L), BUP (>3.000 L), BRP (~3.000–3.500 L 4×4) i BNP (≥8.000 L).',
      'Cap. 4: Vehicles d’alçada AEA (20 a 42 m, habitual 30 m) i Grua de rescat (Pesada vs. Lleugera), FSV i FRQ.',
      'Cap. 5: Vehicles sanitaris segons RD 836/2012 (A1, A2, B=SVB, C=SVA i VIR), Comandament (UCL, UCM, UCP) i Logístics (UPC).',
      'Cap. 6-7: Mitjans aeris (Helicòpters 500–1.500 L amb helibalde/dipòsit ventral vs. Avions 3.000–6.000 L) i Revisió diària al canvi de torn.'
    ],
    traps: [
      'Confondre l’ordre dels dígits X.YY.ZZ: el primer dígit (X) és sempre la Regió d’Emergències, els dos centrals (YY) el Parc i els dos últims (ZZ) el Tipus de vehicle.',
      'Confondre ambulància Classe B (Suport Vital Bàsic - SVB) amb Classe C (Suport Vital Avançat - SVA / UVI mòbil) del RD 836/2012.',
      'Confondre la capacitat d’aigua d’un helicòpter bombarder (500 a 1.500 L) amb la d’un avió amfibi/AVA (3.000 a 6.000 L).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-3 Autobombes',
      title: '1–3. Codificació X.YY.ZZ, Tipologia General i Vehicles Autobomba (BUL, BUP, BRP, BNP)',
      subtitle: 'Sistema d’identificació operativa de 5 xifres i característiques tècniques de les 4 autobombes.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'formula',
          title: '1. Codificació Oficial dels Vehicles de Bombers (X . YY . ZZ)',
          formula: 'X (1 dígit: Regió d’Emergències)  .  YY (2 dígits: Parc)  .  ZZ (2 dígits: Tipus de Vehicle)',
          variables: [
            { symbol: 'X', meaning: 'Regió d’Emergències a la qual pertany el vehicle (1 dígit)' },
            { symbol: 'YY', meaning: 'Codi del Parc de Bombers dins de la Regió (2 dígits)' },
            { symbol: 'ZZ', meaning: 'Tipus funcional i número d’ordre del vehicle (2 dígits: autobomba, autoescala, furgó...)' }
          ],
          trick:
            'Memoritza de gran a petit: REGIÓ (X) → PARC (YY) → VEHICLE (ZZ). Exemple del manual: el vehicle 3.20.11 pertany a la Regió 3, Parc 20, Tipus de vehicle 11.',
          example: 'Si el tribunal pregunta què indiquen les dues xifres centrals (YY) del codi 4.15.30: indiquen el PARC de bombers (Parc 15 de la Regió 4).'
        },
        {
          type: 'table',
          title: '3. Classificació Oficial dels Vehicles Autobomba (MAN.EQIP.000 Capítol 3)',
          subtitle: 'Capacitats de cisterna d’aigua, xassís, bomba combinada i ús operatiu principal',
          headers: ['Sigla i Nom Oficial', 'Capacitat Cisterna d’Aigua', 'Xassís i Tracció', 'Dotació i Funció Principal'],
          rows: [
            ['3.2. BUL (Bomba Urbana Lleugera)', '1.000 a 2.000 litres', 'Urbà compacte i estreta (4×2)', 'Carrers estrets, nuclis històrics i primera sortida urbana ràpida (cabina doble per a 5-6 bombers).'],
            ['3.3. BUP (Bomba Urbana Pesant)', '> 3.000 litres (3.000–4.000 L + escumogen)', 'Urbà / Carretera (4×2)', 'Incendis estructurals, industrials i accidents de trànsit (porta equip complet d’excarceració, ERA i bomba combinada baixa/alta pressió).'],
            ['3.4. BRP (Bomba Rural Pesant)', '~3.000 a 3.500 litres (amb autoprotecció)', 'Tot terreny (4×4) amb reductora i bloqueig de diferencials', 'Polivalent: incendis forestals i rurals + serveis urbans. Incorpora ruixadors d’autoprotecció de cabina i rodes amb dipòsit de reserva propi (~300-500 L).'],
            ['3.5. BNP (Bomba Nodrissa Pesant)', '≥ 8.000 litres (8.000 a 12.000 L)', 'Pesant 2 o 3 eixos', 'Abastament massiu d’aigua a altres autobombes (alimentació en incendi industrial o forestal sense hidrants). Cabina simple (2-3 places).']
          ],
          footnote: 'Les autobombes d’extinció (BUL, BUP, BRP) munten bomba centrífuga combinada: Baixa Pressió (10-15 bar, gran cabal 2.000-3.000 L/min) i Alta Pressió (35-40 bar, 250-400 L/min).'
        },
        {
          type: 'text',
          heading: 'No confondre! BUP vs. BRP i BUL vs. BNP',
          paragraphs: [
            "• BUP vs. BRP: Totes dues porten al voltant de 3.000–3.500 L d'aigua, però la BUP és 4×2 urbana/carretera (amb equip d'excarceració i escumogen), mentre que la BRP és 4×4 tot terreny amb reductora, bloqueig de diferencials i ruixadors d'autoprotecció (amb reserva pròpia de ~300–500 L).",
            "• BUL vs. BNP: La BUL és compacta (1.000–2.000 L, cabina doble per a 5–6 bombers) per a nuclis antics estrets; la BNP és pesant (≥ 8.000 L, cabina simple de 2–3 places) pensada únicament per abastir d'aigua altres autobombes."
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 4 Especials',
      title: '4. Vehicles Especials: Alçada (AEA / ABA), Grues i Furgons (FSV / FRQ)',
      subtitle: 'Autoescales de 20 a 42 m, diferència entre Grua Pesada i Lleugera, salvaments i risc químic.',
      blocks: [
        {
          type: 'table',
          title: '4.1–4.4. Catàleg de Vehicles Especials d’Intervenció (MAN.EQIP.000 Capítol 4)',
          subtitle: 'Prestacions tècniques i diferències operatives exigides a l’examen',
          headers: ['Vehicle Especial', 'Abast / Característiques Tècniques', 'Equipament i Funció Operativa'],
          rows: [
            ['4.2. AEA (Autoescala Automàtica) / ABA (Autobraç Articulat)', 'Abast de 20 a 42 metres d’alçada (l’estàndard habitual als parcs és de 30 metres ≈ Planta 8).', 'Rescat de persones en façana, atac exterior amb monitor des de cistella i sanejament en alçada. Incorpora 4 estabilitzadors hidràulics i comandament a torreta i cistella.'],
            ['4.2. Grua de Rescat PESADA', 'Ploma telescòpica de gran tonatge, cabrestants d’arrossegament pesant i potes estabilitzadores.', 'Aixecament i remolc de camions, autobusos o vagons bolcats i desbloqueig de grans càrregues en accidents greus.'],
            ['4.2. Grua de Rescat LLEUGERA', 'Capacitat d’elevació moderada i dimensions més contingudes.', 'Suport en rescat d’animals de gran pes (cavalls/vaques en pous), mobilització de vehicles lleugers i càrregues mitjanes.'],
            ['4.3. FSV (Furgó de Salvaments Varis)', 'Sense cisterna d’aigua; carrossat amb armaris perimetrals per a eines.', 'Transport d’equipament específic d’assistències tècniques: apuntalaments (fusta/puntals), esgotament d’aigua (bombes submergibles), generadors, il·luminació i rescat urbà.'],
            ['4.4. FRQ (Furgó de Risc Químic / NRBQ)', 'Unitat especialitzada en mercaderies perilloses i incidents tecnològics.', 'Porta vestits hermètics Tipus 1 (EN 943), detectors multigas, coixins i falques de taponament de fuites, bombes de transvasament ATEX i línia de descontaminació NRBQ.'],
            ['Altres Furgons Especials', 'Furgó de Rescat Aquàtic (FRA) / Muntanya (GRAE) / Contenidors.', 'Transport de material dels grups operatius de suport (GRAE Subaquàtic, GRAE Muntanya, GRIT).']
          ],
          footnote: 'Recorda la relació amb MAN.INES.000: una AEA estàndard de 30 metres arriba com a màxim fins a una Planta 8 (PL+8).'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 5 Sanitaris i Comand.',
      title: '5. Vehicles Sanitaris (RD 836/2012), de Comandament (UCL/UCM/UCP) i Logístics',
      subtitle: 'Classificació estatal d’ambulàncies (A1, A2, B, C, VIR), unitats de comandament i UPC.',
      blocks: [
        {
          type: 'table',
          title: '5.1. Classificació Oficial dels Vehicles Sanitaris segons el RD 836/2012',
          subtitle: 'Taula literal del manual MAN.EQIP.000 (Secció 5.1) + dotació mínima de personal (art. 4 RD 836/2012)',
          headers: ['Classe / Tipus (RD 836/2012)', 'Denominació Oficial', 'Capacitat i Funció Sanitària', 'Personal Sanitari (TES / Infermer / Metge)'],
          rows: [
            ['Classe A1 (No assistencial)', 'Ambulància de transport individual', 'Transport de pacients en llitera que NO requereixen assistència tècnica sanitària en ruta (1 sol pacient).', 'Conductor (certificat transport sanitari / TES) + ajudant (mateixa qualificació) si cal. Sense metge ni infermer.'],
            ['Classe A2 (No assistencial)', 'Ambulància de transport col·lectiu', 'Transport conjunt de diversos pacients (asseguts o en cadira) sense malaltia infectocontagiosa ni urgència vital.', 'Conductor (certificat transport sanitari / TES) + ajudant (mateixa qualificació) si cal. Sense metge ni infermer.'],
            ['Classe B (Assistencial)', 'Ambulància de Suport Vital Bàsic (SVB)', 'Destinada a proporcionar Suport Vital Bàsic i atenció sanitària inicial a urgències i emergències.', 'Mínim 2 TES: 1 conductor TES + 1 TES amb funcions d’ajudant. Sense metge ni infermer.'],
            ['Classe C (Assistencial)', 'Ambulància de Suport Vital Avançat (SVA)', 'Equipada com a UVI mòbil per proporcionar Suport Vital Avançat (monitor desfibril·lador, respirador).', 'Mínim 1 conductor TES + 1 infermer/a (DUE/Grau) + 1 metge/essa (si fa assistència mèdica avançada; en SVA-I SEM: TES + infermer/a).'],
            ['VIR', 'Vehicle d’Intervenció Ràpida', 'Vehicle lleuger (4×4 o turisme) que desplaça ràpidament l’equip sanitari (ex: GEM/GROS) i l’equipament SVA al lloc, però NO pot traslladar pacients en llitera.', 'Conductor TES + metge/essa i/o infermer/a (equip SVA / GEM / GROS).']
          ],
          footnote: 'Truc per no fallar mai el RD 836/2012: A1 = Individual no assistencial | A2 = Col·lectiva no assistencial | B = SVB (Bàsic) | C = SVA (Avançat / Crítics).'
        },
        {
          type: 'table',
          title: '5.2. Vehicles de Comandament i 5.3. Vehicles Logístics i de Personal',
          subtitle: 'Unitats de coordinació operativa i transport (Seccions 5.2 i 5.3 de MAN.EQIP.000)',
          headers: ['Sigla', 'Nom Oficial al Manual', 'Funció dins del Dispositiu d’Emergència'],
          rows: [
            ['UCL', 'Unitat de Comandament Lleugera', 'Vehicle lleuger (SUV / 4×4) del cap de guàrdia o comandament per a desplaçament ràpid, valoració inicial i constitució d’un CCA bàsic.'],
            ['UCM', 'Unitat de Comandament Mitjana', 'Furgó adaptat amb taula de treball, comunicacions RESCAT múltiples, pantalles SIG i espai per reunir els comandaments del CCA en emergències mitjanes.'],
            ['UCP', 'Unitat de Comandament Pesant', 'Camió o mòdul desplegable de gran superfície amb sala de crisi, estació meteorològica, servidors GIS i comunicacions satèl·lit per a Grans Emergències (GIF, PLASEQCAT).'],
            ['UPC', 'Unitat de Personal i Càrrega', 'Pick-up 4×4 o furgó mixt per al transport de personal (relleus, GRAF, EPAF) i material lleuger o avituallament.']
          ],
          footnote: 'Gradació dels vehicles de comandament segons la magnitud del sinistre: UCL (Lleugera) → UCM (Mitjana) → UCP (Pesant).'
        },
        {
          type: 'text',
          heading: 'No confondre! Classe B (SVB) vs. Classe C (SVA) vs. VIR (RD 836/2012)',
          paragraphs: [
            "• Classe A1 / A2: NO assistencials (A1 = llitera individual sense assistència en ruta; A2 = transport col·lectiu).",
            "• Classe B (SVB) vs. Classe C (SVA): La Classe B dona Suport Vital Bàsic; la Classe C és una UVI mòbil de Suport Vital Avançat (metge/infermer, respirador, desfibril·lador).",
            "• VIR (Vehicle d'Intervenció Ràpida): Porta l'equip sanitari i material SVA fins a l'emergència molt ràpidament, però NO pot traslladar pacients en llitera."
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 6-7 Aeris i Revisió',
      title: '6–7. Mitjans Aeris (MAER: Helicòpters i Avions) i Revisió Diària Operativa',
      subtitle: 'Capacitats de descàrrega d’aigua (500-1.500 L vs. 3.000-6.000 L) i protocol de canvi de torn.',
      blocks: [
        {
          type: 'table',
          title: '6. Classificació i Capacitats dels Mitjans Aeris (MAER) de Bombers',
          subtitle: 'Comparativa entre ala rotatòria (helicòpters) i ala fixa (avions) segons Capítol 6 de MAN.EQIP.000',
          headers: ['Mitjà Aeri', 'Capacitat d’Aigua / Escumant', 'Sistema de Càrrega i Descàrrega', 'Funcions Principals'],
          rows: [
            ['6.1. Helicòpters (Comandament, Rescat i Bombarders)', '500 a 1.500 litres', '1) Helibalde (Bambi Bucket) suspès amb ganxo de càrrega o 2) Dipòsit ventral rígid amb trompa d’aspiració (snorkel).', 'Transport d’heliportats (GRAF / GRAE), rescat amb grua d’hissat, coordinació aèria (imatges tèrmiques) i descàrregues quirúrgiques d’extinció.'],
            ['6.2. Avions d’Extinció (AVA / Amfibis)', '3.000 a 6.000 litres', '1) Avions de càrrega en terra (AVA, ~3.100 L amb retardant) o 2) Avions amfibis (Foca / Canadair, ~5.500-6.000 L que carreguen lliscant sobre mar o pantà).', 'Atac amb gran volum d’aigua o retardant químic als flancs i cap de grans incendis forestals (GIF).']
          ],
          footnote: 'Xifres clau d’examen: Helicòpter = 500 a 1.500 L | Avió = 3.000 a 6.000 L.'
        },
        {
          type: 'text',
          heading: '7. Consideracions Operatives, Conducció d’Urgència i Revisió Diària',
          paragraphs: [
            "Al començament de cada guàrdia (canvi de torn), la dotació entrant realitza la REVISIÓ DIÀRIA del vehicle assignat: comprovació de nivells (combustible, oli, refrigerant, AdBlue i cisterna d'aigua/escumogen plena), pressió de pneumàtics i circuit de frens pneumàtics.",
            "També s'engega el motor per verificar la presa de força (PTO) de la bomba, els senyals prioritaris (V-1 blaus i acústics), l'emissora RESCAT i l'inventari complet d'armaris (ampolles d'ERA a 300 bar, llanternes i eines).",
            "En conducció d'urgència, els vehicles prioritaris tenen preferència quan circulen amb els senyals lluminosos i acústics activats, sota responsabilitat del conductor de garantir la seguretat i estacionar protegint l'escena amb una via de sortida lliure."
          ]
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · 📌 Resum 1/2 (Xifres)',
      title: 'Resum Final (1/2): Taula Mestra de Capacitats, Codis i Dimensions (MAN.EQIP.000)',
      subtitle: 'Totes les xifres de litres, metres i codis del Tema 18 concentrades per al repàs final.',
      blocks: [
        {
          type: 'table',
          title: 'Síntesi Numèrica Imprescindible d’Examen — Tema 18 (Vehicles d’Intervenció)',
          subtitle: 'Els 12 valors oficials del manual MAN.EQIP.000 que has de saber de memòria',
          headers: ['Vehicle / Sistema', 'Valor Oficial Exacte (MAN.EQIP.000)', 'Clau Operativa'],
          rows: [
            ['1. Codi Numèric X.YY.ZZ', '5 dígits: X (Regió) . YY (Parc) . ZZ (Vehicle)', 'Exemple: 3.20.11 → Regió 3, Parc 20, Vehicle 11'],
            ['2. Cisterna BUL (Bomba Urbana Lleugera)', '1.000 a 2.000 litres', 'Dimensions compactes per a nuclis urbans estrets'],
            ['3. Cisterna BUP (Bomba Urbana Pesant)', '> 3.000 litres (3.000 – 4.000 L)', 'Vehicle estàndard per a incendi estructural i rescat viari'],
            ['4. Cisterna BRP (Bomba Rural Pesant)', '~3.000 a 3.500 litres (xassís 4×4)', 'Polivalent forestal/urbà amb ruixadors d’autoprotecció'],
            ['5. Cisterna BNP (Bomba Nodrissa Pesant)', '≥ 8.000 litres (8.000 – 12.000 L)', 'Abastament d’aigua a altres autobombes'],
            ['6. Abast d’Alçada AEA (Autoescala)', '20 a 42 metres (habitual = 30 metres)', '30 m equivalen aproximadament a una Planta 8 (PL+8)'],
            ['7. Capacitat d’Aigua dels Helicòpters', '500 a 1.500 litres', 'Amb helibalde suspès (Bambi) o dipòsit ventral'],
            ['8. Capacitat d’Aigua dels Avions', '3.000 a 6.000 litres', 'AVA de càrrega a terra (~3.100 L) o amfibis (~6.000 L)'],
            ['9. Ambulàncies No Assistencials (RD 836/2012)', 'Classe A1 (Individual) i Classe A2 (Col·lectiva)', 'Transport sanitari sense assistència tècnica en ruta'],
            ['10. Ambulàncies Assistencials (RD 836/2012)', 'Classe B (SVB - Bàsic) i Classe C (SVA - Avançat)', 'VIR = Vehicle d’Intervenció Ràpida (no trasllada en llitera)'],
            ['11. Vehicles de Comandament', 'UCL (Lleugera) | UCM (Mitjana) | UCP (Pesant)', 'Constitució i suport logístic del Centre de Comandament Avançat (CCA)'],
            ['12. Vehicle de Personal i Càrrega', 'UPC (Unitat de Personal i Càrrega)', 'Transport d’efectius, relleus i logística lleugera']
          ],
          footnote: 'Pàgina 1 de 2 del Resum Executiu del Tema 18 (MAN.EQIP.000).'
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · 📌 Resum 2/2 (Punts Clau)',
      title: 'Resum Final (2/2): Sigles Oficials, Diferències Clau i Paranys del Tribunal',
      subtitle: 'Guia ràpida per no confondre cap sigla ni tipologia de vehicle al test.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Regles Mnemotècniques per Clavar les Preguntes del Tema 18',
          acronym: 'X.YY.ZZ = Regió.Parc.Vehicle | BUL-BUP-BRP-BNP (1k-3k-3k5-8k) | A1-A2-B-C (RD 836/2012)',
          trick:
            "• LITRES D'AUTOBOMBA: BUL (1.000–2.000 L, estreta) | BUP (>3.000 L, 4×2) | BRP (~3.000–3.500 L, 4×4 autoprotecció) | BNP (≥8.000 L, nodrissa).\n• GRUA PESADA vs. LLEUGERA: Pesada = camions/autobusos bolcats | Lleugera = animals grans (cavalls/vaques) i càrregues mitjanes.\n• FSV vs. FRQ: FSV = Salvaments Varis (apuntalaments, esgotament) | FRQ = Risc Químic (vestits Tipus 1, ATEX, descontaminació).\n• RD 836/2012: A1 (individual) / A2 (col·lectiva) no assistencials | B (SVB) | C (SVA) | VIR (sense llitera).",
          example: 'Si et pregunten quin vehicle 4×4 té aproximadament 3.000-3.500 L i sistema d’autoprotecció per a foc forestal: BRP (Bomba Rural Pesant).'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q18-1',
      difficulty: 'Fàcil',
      question: "En el sistema de codificació numèrica de 5 dígits (X.YY.ZZ) dels vehicles de Bombers de la Generalitat, què identifica cadascun dels tres blocs?",
      options: [
        'X = Tipus de vehicle | YY = Parc | ZZ = Regió d’Emergències',
        'X = Regió d’Emergències | YY = Parc de bombers | ZZ = Tipus de vehicle',
        'X = Província | YY = Any de matriculació | ZZ = Número de xassís',
        'X = Parc | YY = Regió | ZZ = Tonatge en tones'
      ],
      correctIndex: 1,
      explanation: "El primer dígit (X) correspon a la Regió d'Emergències, els dos dígits centrals (YY) al Parc de bombers i els dos últims (ZZ) al tipus i número de vehicle."
    },
    {
      id: 'q18-2',
      difficulty: 'Mitjà',
      question: "Quina és la capacitat aproximada de la cisterna d'aigua d'una Bomba Urbana Lleugera (BUL) i d'una Bomba Nodrissa Pesant (BNP) segons el manual MAN.EQIP.000?",
      options: [
        'BUL: 500 L | BNP: 3.000 L',
        'BUL: 1.000 a 2.000 L | BNP: 8.000 L o més',
        'BUL: 3.500 L | BNP: 5.000 L',
        'BUL: 2.500 a 3.500 L | BNP: 15.000 L'
      ],
      correctIndex: 1,
      explanation: 'La BUL porta entre 1.000 i 2.000 litres per mantenir dimensions compactes, mentre que la BNP supera els 8.000 litres per a abastament.'
    },
    {
      id: 'q18-3',
      difficulty: 'Mitjà',
      question: "Segons el Reial Decret 836/2012 recollit al manual MAN.EQIP.000, com es classifiquen les ambulàncies assistencials de Suport Vital Bàsic (SVB) i de Suport Vital Avançat (SVA)?",
      options: [
        'Classe A1 per a SVB i Classe A2 per a SVA',
        'Classe B per a SVB i Classe C per a SVA',
        'Classe C per a SVB i Classe D per a SVA',
        'VIR per a SVB i Classe B per a SVA'
      ],
      correctIndex: 1,
      explanation: 'Les ambulàncies assistencials són Classe B (Suport Vital Bàsic - SVB) i Classe C (Suport Vital Avançat - SVA). Les A1 i A2 són no assistencials.'
    },
    {
      id: 'q18-4',
      difficulty: 'Fàcil',
      question: "Quin és el rang habitual d'alçada de treball de les Autoescales Automàtiques (AEA) i quina és la mesura més estesa als parcs de Bombers de la Generalitat?",
      options: [
        'De 10 a 20 m (habitual 15 m)',
        'De 20 a 42 m (habitual 30 m)',
        'De 40 a 70 m (habitual 55 m)',
        'Totes són exactament de 25 m'
      ],
      correctIndex: 1,
      explanation: "L'apartat 4.2 del manual estableix que les AEA abasten entre 20 i 42 metres, sent la de 30 metres la més habitual als parcs."
    },
    {
      id: 'q18-5',
      difficulty: 'Fàcil',
      question: "Quina és la capacitat de càrrega d'aigua dels helicòpters bombarders en comparació amb la dels avions d'extinció segons el capítol 6 del manual?",
      options: [
        'Helicòpters: 100-300 L | Avions: 1.000-2.000 L',
        'Helicòpters: 500-1.500 L | Avions: 3.000-6.000 L',
        'Helicòpters: 3.000-4.000 L | Avions: 10.000-15.000 L',
        'Tots dos carreguen exactament 2.500 L'
      ],
      correctIndex: 1,
      explanation: 'Els helicòpters carreguen entre 500 i 1.500 litres, mentre que els avions carreguen entre 3.000 i 6.000 litres.'
    },
    {
      id: 'q18-6',
      difficulty: 'Mitjà',
      question: 'Quines diferències tècniques principals hi ha entre una BUP (Bomba Urbana Pesant) i una BRP (Bomba Rural Pesant) segons el capítol 3 de MAN.EQIP.000?',
      options: [
        "La BUP és 4×4 amb ruixadors d'autoprotecció i la BRP té una cisterna inferior a 2.000 L.",
        "La BUP té xassís 4×2 (>3.000 L) orientada a urbà/trànsit i la BRP té xassís tot terreny 4×4 (~3.000–3.500 L) amb ruixadors d'autoprotecció de cabina i rodes.",
        "Totes dues tenen xassís 4×4 i porten ≥8.000 L d'aigua.",
        "La BRP només porta bomba d'alta pressió i no té cisterna pròpia."
      ],
      correctIndex: 1,
      explanation: "La BUP munta xassís urbà/carretera 4×2 (>3.000 L), mentre que la BRP és tot terreny 4×4 (~3.000–3.500 L) amb reductora, bloqueig de diferencials i ruixadors d'autoprotecció."
    },
    {
      id: 'q18-7',
      difficulty: 'Difícil',
      question: "Quins són els rangs de pressió i cabal de la bomba centrífuga combinada que munten les autobombes d'extinció (BUL, BUP, BRP)?",
      options: [
        'Baixa Pressió: 2–4 bar (500 L/min) | Alta Pressió: 80–100 bar (1.500 L/min)',
        'Baixa Pressió: 35–40 bar (250–400 L/min) | Alta Pressió: 10–15 bar (2.000–3.000 L/min)',
        'Baixa Pressió: 10–15 bar (2.000–3.000 L/min) | Alta Pressió: 35–40 bar (250–400 L/min)',
        'Baixa Pressió: 1 bar (5.000 L/min) | Alta Pressió: 150 bar (50 L/min)'
      ],
      correctIndex: 2,
      explanation: 'Les autobombes combinen Baixa Pressió (10–15 bar, gran cabal de 2.000–3.000 L/min) i Alta Pressió (35–40 bar, cabal de 250–400 L/min).'
    },
    {
      id: 'q18-8',
      difficulty: 'Fàcil',
      question: 'Quin furgó especialitzat transporta vestits hermètics Tipus 1 (EN 943), detectors multigas, bombes de transvasament ATEX i línia de descontaminació NRBQ?',
      options: [
        'FRQ (Furgó de Risc Químic)',
        'FSV (Furgó de Salvaments Varis)',
        'UPC (Unitat de Personal i Càrrega)',
        'UCM (Unitat de Comandament Mitjana)'
      ],
      correctIndex: 0,
      explanation: "Segons l'apartat 4.4 del manual, el FRQ (Furgó de Risc Químic) porta vestits hermètics Tipus 1 (EN 943), detectors multigas, bombes ATEX i línia de descontaminació NRBQ."
    },
    {
      id: 'q18-9',
      difficulty: 'Mitjà',
      question: "Quina diferència d'ús operatiu estableix el manual MAN.EQIP.000 entre la Grua de Rescat Pesada i la Grua de Rescat Lleugera?",
      options: [
        'La Grua Pesada s’usa només per a incendis forestals i la Lleugera per a sanejament de façanes.',
        "La Grua Pesada es destina a aixecar i remolcar camions, autobusos o vagons bolcats, mentre que la Grua Lleugera dona suport en rescat d'animals grans (cavalls/vaques) i càrregues mitjanes.",
        'La Grua Lleugera només actua dins de túnels ferroviaris i la Pesada en parcs urbans.',
        'No hi ha diferència funcional, només varia el nombre de places de cabina.'
      ],
      correctIndex: 1,
      explanation: "La Grua Pesada s'utilitza per a grans tonatges (camions, autobusos, vagons), mentre que la Grua Lleugera s'empra per a càrregues mitjanes i rescat d'animals de gran pes."
    },
    {
      id: 'q18-10',
      difficulty: 'Mitjà',
      question: "Quina característica defineix el Vehicle d'Intervenció Ràpida (VIR) i quina unitat de comandament disposa de sala de crisi, estació meteorològica i comunicacions satèl·lit per a Grans Emergències?",
      options: [
        'El VIR pot traslladar fins a 2 pacients en llitera | UCM (Unitat de Comandament Mitjana)',
        'El VIR és una ambulància Classe A2 | UCL (Unitat de Comandament Lleugera)',
        'El VIR porta una cisterna de 1.000 L | UPC (Unitat de Personal i Càrrega)',
        "El VIR desplaça l'equip i material SVA però NO pot traslladar pacients en llitera | UCP (Unitat de Comandament Pesant)"
      ],
      correctIndex: 3,
      explanation: 'El VIR porta equip mèdic i material SVA però no pot traslladar pacients en llitera; la UCP (Unitat de Comandament Pesant) compta amb sala de crisi, estació meteorològica i comunicacions satèl·lit.'
    },
    {
      id: 'q18-11',
      difficulty: 'Fàcil',
      question: 'Segons el RD 836/2012, quina diferència hi ha entre una ambulància Classe A1 i una Classe A2, i fins a quina planta aproximada arriba una AEA estàndard de 30 metres?',
      options: [
        'A1 és de Suport Vital Bàsic i A2 de Suport Vital Avançat | Planta 12 (PL+12)',
        'A1 és col·lectiva i A2 és individual | Planta 5 (PL+5)',
        'A1 és de transport individual i A2 de transport col·lectiu (ambdues no assistencials) | Planta 8 (PL+8)',
        'Totes dues són assistencials però sense conductor | Planta 10 (PL+10)'
      ],
      correctIndex: 2,
      explanation: 'Les ambulàncies A1 (individual) i A2 (col·lectiva) són no assistencials, i una AEA estàndard de 30 metres arriba aproximadament fins a una Planta 8 (PL+8).'
    },
    {
      id: 'q18-12',
      difficulty: 'Difícil',
      question: "En els mitjans aeris (Cap. 6) i la revisió diària (Cap. 7) del manual, quins sistemes de càrrega d'aigua fan servir els helicòpters i quina pressió han de tenir les ampolles d'ERA comprovades al canvi de torn?",
      options: [
        "Només dipòsit ventral rígid amb trompa d'aspiració | 200 bar",
        'Càrrega exclusiva lliscant sobre pantà o mar | 150 bar',
        'Únicament càrrega en terra amb bomba de baixa pressió | 350 bar',
        "Helibalde suspès (Bambi Bucket) o dipòsit ventral rígid amb trompa d'aspiració (snorkel) | 300 bar"
      ],
      correctIndex: 3,
      explanation: "Els helicòpters utilitzen helibalde (Bambi Bucket) o dipòsit ventral amb snorkel; a la revisió diària del canvi de torn es comprova, entre d'altres, que les ampolles d'ERA estiguin a 300 bar."
    },
    {
      id: 'q18-13',
      difficulty: 'Mitjà',
      question: "En la codificació operativa X.YY.ZZ dels vehicles de Bombers de la Generalitat, si ens assignen el vehicle 5.12.40, què indica el nombre '12'?",
      options: [
        'Que pertany a la Regió d’Emergències 12.',
        'Que és el Parc de Bombers número 12 dins de la Regió d’Emergències 5.',
        'Que la seva cisterna té 12.000 litres de capacitat.',
        'Que és una autoescala de 12 metres d’alçada.'
      ],
      correctIndex: 1,
      explanation: 'En el format X.YY.ZZ, X (5) és la Regió d’Emergències, YY (12) és el codi del Parc dins la Regió, i ZZ (40) és el tipus funcional i ordre de vehicle.'
    },
    {
      id: 'q18-14',
      difficulty: 'Difícil',
      question: "En relació amb les autobombes de Bombers de la Generalitat (Capítol 3 de MAN.EQIP.000), quina de les afirmacions següents és INCORRECTA?",
      options: [
        'La BUL disposa de cabina doble per a 5–6 bombers i una cisterna d’entre 1.000 i 2.000 litres per accedir a carrers estrets.',
        'La BNP compta amb una cisterna de ≥ 8.000 litres i una cabina doble de 6 places per fer atacs interiors amb mànegues de Ø45.',
        'La BRP té tracció 4×4 amb reductora i bloqueig de diferencials, i incorpora un dipòsit de reserva per als ruixadors d’autoprotecció de cabina i rodes.',
        'La BUP supera els 3.000 litres d’aigua i transporta equip complet d’excarceració, ERA i bomba combinada de baixa/alta pressió.'
      ],
      correctIndex: 1,
      explanation: 'Afirmació incorrecta: la BNP (Bomba Nodrissa Pesant, ≥ 8.000 L) té cabina SIMPLE de 2–3 places, perquè la seva funció és l’abastament massiu d’aigua a altres autobombes, no el transport d’una dotació completa d’atac.'
    },
    {
      id: 'q18-15',
      difficulty: 'Mitjà',
      question: "Quin vehicle especialitzat NO té cisterna d'aigua pròpia i transporta apuntalaments, bombes d'esgotament d'aigua, generadors elèctrics i il·luminació per a assistències tècniques i rescat urbà?",
      options: [
        'FSV (Furgó de Salvaments Varis).',
        'FRQ (Furgó de Risc Químic).',
        'BUL (Bomba Urbana Lleugera).',
        'BNP (Bomba Nodrissa Pesant).'
      ],
      correctIndex: 0,
      explanation: 'Segons l’apartat 4.3 del manual, l’FSV (Furgó de Salvaments Varis) no té cisterna i carrega equipament d’apuntalaments, esgotaments, generadors, il·luminació i rescat urbà.'
    },
    {
      id: 'q18-16',
      difficulty: 'Mitjà',
      question: "Quina diferència operativa hi ha entre un avió AVA (càrrega en terra) i un avió amfibi (tipus Foca / Canadair) dins dels Mitjans Aeris (Capítol 6)?",
      options: [
        'L’AVA càrrega a terra (~3.100 L, sovint amb retardant químic), mentre que l’amfibi (~5.500–6.000 L) pot carregar aigua lliscant directament sobre el mar o un pantà.',
        'L’amfibi només pot carregar 500 litres amb helibalde i l’AVA és un helicòpter pesant.',
        'L’AVA només actua en incendis urbans i l’amfibi en riscos químics.',
        'Cap diferència: tots dos carreguen exclusivament en pistes d’aeroport.'
      ],
      correctIndex: 0,
      explanation: 'Dins dels avions d’extinció (3.000 a 6.000 L), els AVA carreguen en bases terrestres (~3.100 L amb aigua o retardant), mentre que els amfibis (Foca/Canadair, ~5.500–6.000 L) carreguen directament lliscant sobre superfícies d’aigua.'
    },
    {
      id: 'q18-17',
      difficulty: 'Fàcil',
      question: "En una gran emergència que requereix desplegar un furgó adaptat amb taula de treball, comunicacions RESCAT múltiples i pantalles SIG per reunir els comandaments del CCA (emergència de tipus mitjà), quin vehicle s'activa?",
      options: [
        'UPC (Unitat de Personal i Càrrega).',
        'UCL (Unitat de Comandament Lleugera).',
        'UCM (Unitat de Comandament Mitjana).',
        'VIR (Vehicle d’Intervenció Ràpida).'
      ],
      correctIndex: 2,
      explanation: 'Segons la secció 5.2, la UCM (Unitat de Comandament Mitjana) és el furgó adaptat amb taula, comunicacions RESCAT i pantalles SIG per a emergències mitjanes (UCL és el 4×4 inicial i UCP el camió/mòdul de grans emergències).'
    },
    {
      id: 'q18-18',
      difficulty: 'Fàcil',
      question: "Quin vehicle s'utilitza principalment per al transport de personal (relleus, GRAF, EPAF) i material lleuger o avituallament dins de l'estructura logística (apartat 5.3)?",
      options: [
        'UPC (Unitat de Personal i Càrrega).',
        'AEA (Autoescala Automàtica).',
        'FSV (Furgó de Salvaments Varis).',
        'Clase A1.'
      ],
      correctIndex: 0,
      explanation: 'La UPC (Unitat de Personal i Càrrega, habitualment pick-up 4×4 o furgó mixt) es destina al transport de personal i material lleuger/avituallament.'
    }
  ]
};
