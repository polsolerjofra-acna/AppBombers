export const tema21Construccio = {
  id: 'tema-15',
  number: 15,
  code: 'MAN.GRAL.006',
  title: 'Construcció, Esforços Mecànics, Materials i Sistemes Estructurals',
  category: 'Manual Operatiu SGO — Construcció i Edificació',
  estimatedMinutes: 50,
  importance: {
    title: "Radar d'Examen — Tema 15 (MAN.GRAL.006 V.1): Construcció i Estructures",
    frequency: 'Molt Alta (3-4 preguntes sobre els 6 esforços, tensions de ruptura, maó català vs. castellà i jerarquia estructural)',
    summary:
      "Aquest manual ensenya a 'llegir' un edifici abans d'entrar-hi o d'apuntalar-lo: accions (permanents, variables, accidentals), els 6 esforços mecànics (tracció, compressió, flexió, torsió, tallant i vinclament), la taula de tensions de ruptura (formigó, acer, fusta i maó), conglomerants (guix, calç, ciment), mesures del maó català (30×15 cm) vs. castellà (25×12,5 cm), fonaments (superficials ≤3 m vs. profunds >3 m), el principi de jerarquia estructural (Biguetes → Bigues → Jàsseres → Pilars/Murs → Fonaments) i l'evolució dels sistemes constructius. Inclou 4 pàgines d'estudi i 2 pàgines finals de Resum.",
    hotTopics: [
      'Cap. 2: Accions (Permanents, Variables, Accidentals), els 6 Esforços (Tracció, Compressió, Flexió, Torsió, Tallant i Vinclament/pandeig) i Taula de tensions de ruptura en kg/cm².',
      'Cap. 3: Conglomerants (Pasta = +aigua; Morter = +sorra; Formigó = +grava; Guix expansiu vs. Calç neutra/flexible vs. Ciment retracció/alta resistència) i Maons (Format Català = 30 × 15 cm vs. Castellà = 25 × 12,5 cm).',
      'Cap. 4: Fonaments superficials (≤ 3 m: sabates aïllades, corregudes, llosa, encepats) vs. profunds (> 3 m: pilots, micropilots, murs pantalla) i diferència entre Biga i Jàssera (biga mestra principal).',
      'Cap. 5: Principi de Jerarquia Estructural (Biguetes → Bigues → Jàsseres → Pilars/Murs → Fonaments → Terreny) i Sistemes constructius (Murs de càrrega = sistema UNITARI fins anys 1960–70; Casa de cos 3,5–4,5 m entre mitgeres; Pilars i forjats = sistema SEPARAT des d’anys 1970; Pòrtics de gran llum > 8 m).'
    ],
    traps: [
      'Confondre les mides del Maó Català (30 × 15 cm, nominal 29×14×6 cm) amb el Maó Castellà (25 × 12,5 cm)!',
      'Oblidar per què el formigó necessita barres d’acer (formigó armat): perquè el formigó en massa aguanta fins a 1.000 kg/cm² a COMPRESSIÓ però es trenca amb menys de < 25 kg/cm² a TRACCIÓ!',
      'Confondre la Flexió (combinació de compressió a la cara superior i tracció a la inferior en una biga horitzontal) amb el Vinclament o pandeig (doblegament lateral sobtat d’un pilar vertical esvelt sotmès a compressió!).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 2 Esforços i Ruptura',
      title: '1–2. Accions sobre l’Edifici, Els 6 Esforços Estructurals i Tensions de Ruptura',
      subtitle: 'Tracció, compressió, flexió, torsió, tallant i vinclament, i taula comparativa de resistència en kg/cm².',
      blocks: [
        {
          type: 'text',
          heading: '2.1. Accions (Càrregues) sobre l’Edifici',
          paragraphs: [
            "Les càrregues que suporta una edificació es classifiquen en tres grups: 1) Permanents (actuen sempre amb el mateix valor: pes propi de l'estructura, forjats, murs i paviments), 2) Variables (oscil·len amb el temps: sobrecàrrega d'ús, vent, neu i variacions tèrmiques) i 3) Accidentals (curta durada però gran intensitat: incendi, explosió, impacte o sisme).",
            "Perquè l'edifici es mantingui estable en equilibri estàtic, els suports i el terreny han de generar reaccions iguals i de sentit contrari (∑F = 0 i ∑M = 0)."
          ]
        },
        {
          type: 'text',
          heading: '2.2. Els 6 Esforços Mecànics Estructurals',
          paragraphs: [
            "Les càrregues externes generen sis tipus d'esforços interns dins dels elements constructius:",
            "• Tracció: forces que estiren i allarguen la peça (cables, tirants, tensor d'encavallada). L'acer i la fusta hi treballen molt bé.",
            "• Compressió: forces que aixafen i escurcen la peça (pilars, murs de càrrega, arcs i fonaments). Pedra, maó i formigó hi són excel·lents.",
            "• Flexió: càrrega perpendicular a l'eix que corba una peça horitzontal (biga, jàssera o balcó). Combina compressió en una cara i tracció a l'altra.",
            "• Torsió: forces que retorcen la peça al voltant del seu eix longitudinal (bigues perimetrals o de vora).",
            "• Tallant (o cisallament): forces paral·leles de sentit contrari que tendeixen a guillotinar la peça, màximes prop dels suports de les bigues.",
            "• Vinclament (o pandeig): inestabilitat i doblegament lateral sobtat d'una peça vertical o esvelta sotmesa a compressió (pilars metàl·lics o murs alts). La calor d'un incendi l'accelera dràsticament."
          ]
        },
        {
          type: 'text',
          heading: 'No confondre! Vinclament vs. Flexió (i on va l’acer en Formigó Armat)',
          paragraphs: [
            "• Flexió vs. Vinclament: La flexió apareix en peces horitzontals (bigues) per una càrrega transversal que fa panxa. El vinclament apareix en peces verticals esveltes (pilars) comprimides axialment quan perden rigidesa lateral (en pilars d'acer a > 500 °C és crític).",
            "• On va l'acer del formigó armat? Sempre a la zona sotmesa a TRACCIÓ: en una biga recolzada als dos extrems, la cara inferior s'estira (acer a BAIX); en un balcó o mènsula en voladís, és la cara superior qui s'estira (acer a DALT)."
          ]
        },
        {
          type: 'diagram',
          title: 'Esquema Visual dels 6 Esforços Mecànics, Jerarquia Estructural i Maó Català vs. Castellà',
          diagramType: 'structural_forces',
          caption:
            'Esquerra: els 6 esforços que actuen sobre les peces. Dreta: cadena de transmissió de càrregues per Jerarquia Estructural (de Biguetes a Fonaments) i comparativa de mides del maó català (30×15 cm) i castellà (25×12,5 cm).'
        },
        {
          type: 'table',
          title: 'Taula Oficial de Tensions de Ruptura dels Materials Estructurals (MAN.GRAL.006 Cap. 2.3)',
          subtitle: 'Resistència a Tracció vs. Compressió en kg/cm² — Clau per entendre el Formigó Armat',
          headers: ['Material Estructural', 'Resistència a TRACCIÓ (kg/cm²)', 'Resistència a COMPRESSIÓ (kg/cm²)', 'Comportament en Incendi i Conclusió'],
          rows: [
            ['Formigó en massa', '< 25 kg/cm² (Molt baixa!)', 'Fins a 1.000 kg/cm² (Molt alta)', 'Aguanta molt bé ser aixafat, però es trenca de seguida si s’estira (cal armar-lo amb acer!)'],
            ['Acer estructural', '3.000 a 7.500 kg/cm² (Altíssima)', '2.800 a > 7.000 kg/cm² (Altíssima)', 'Resisteix tracció i compressió per igual, però a > 500 °C perd rigidesa i pateix vinclament'],
            ['Fusta estructural', '700 a 900 kg/cm² (en sentit fibres)', '400 a 700 kg/cm²', 'Molt bona a flexió; crema lentament creant una capa de carbó protectora'],
            ['Fàbrica de maó (Ceràmica)', '< 10 kg/cm² (Pràcticament nul·la!)', 'Fins a 300 kg/cm²', 'Només pot treballar a compressió (murs de càrrega, arcs i voltes de maó de pla)']
          ],
          footnote: 'En una biga de Formigó Armat simplement recolzada, les barres d’acer corrugat es col·loquen a la part INFERIOR per absorbir la tracció (i en un balcó o mènsula en voladís, les barres d’acer van a la part SUPERIOR!).'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Càrregues, els 6 Esforços (amb un Espagueti), Formigó Armat i Comportament al Foc',
          metaphor:
            'Agafa una regla de plàstic, una goma elàstica i un espagueti cru per entendre tots els esforços d’un edifici en 30 segons:',
          explanation:
            "• Càrregues: Permanents = pes de l'edifici; Variables = gent, vent, neu; Accidentals = foc, explosió, sisme.\n• Els 6 esforços: Tracció (estirar goma) · Compressió (aixafar llauna) · Flexió (doblegar regla horitzontal) · Tallant (tisores al suport de la biga) · Torsió (escórrer un drap) · Vinclament (prémer un espagueti en vertical fins que s'arqueja de cop!).\n• Foc: l'acer a > 500 °C perd rigidesa (vinclament ràpid); la fusta gruixuda crea una crosta de carbó que retarda la pèrdua de resistència.",
          takeaway:
            'Bigues = Flexió al mig (compressió dalt, tracció baix → acer a baix; balcons → acer a dalt) i Tallant als extrems. Pilars al foc = risc de Vinclament (> 500 °C en acer).'
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · On va l’Acer del Formigó Armat i Tensions de Ruptura',
          acronym: 'Formigó: 1.000 aixafat / < 25 estirat  |  Maó: 300 / < 10  |  Acer: 3.000–7.500',
          trick:
            "1) On col·locar l'acer? Imagina la biga feta de plastilina: allà on s'obriria l'esquerda en doblegar-se és on s'estira (tracció) i on posem l'acer! En una biga normal l'esquerda s'obre per SOTA (acer a baix); en un balcó que penja a l'aire s'obre per SOBRE arran de paret (acer a dalt!). 2) Flexió vs. Vinclament: Flexió = peça HORITZONTAL que fa panxa; Vinclament = peça VERTICAL esvelta que s'arqueja cap a un costat en aixafar-la!",
          example:
            'Si un maó aguanta < 10 kg/cm² a tracció (pràcticament zero), un mur de càrrega de maó MAI pot treballar estirat, només a compressió!'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 3 Materials i Maons',
      title: '3. Materials de Construcció: Conglomerants (Guix, Calç, Ciment), Maons, Fusta i Acer',
      subtitle: 'Diferència entre pasta, morter i formigó, mesures del maó català (30×15 cm) i com llegir una paret.',
      blocks: [
        {
          type: 'text',
          heading: '3.1–3.2. Conglomerants (Pasta, Morter i Formigó) i Mesures dels Maons',
          paragraphs: [
            "Els conglomerants són materials en pols que s'endureixen en barrejar-los amb aigua: 1) PASTA = Conglomerant + Aigua; 2) MORTER = Conglomerant + Aigua + Sorra (àrid fi, per unir maons o arrebossar); 3) FORMIGÓ = Ciment + Aigua + Sorra + Grava (àrid gros; amb barres d'acer és formigó armat, i amb cables tesats prèviament és pretensat).",
            "Les 3 dimensions del maó ceràmic són: LLARG (soga), TRAVÉS (tizón, la meitat del llarg menys 1 cm de junta) i GRUIX (canto). Les 3 cares són: PLA (tabla, cara gran), CANTELL (canto, llarga i estreta) i CAP o TESTA (cara curta).",
            "Observant des de fora quina cara queda a la vista, un bomber dedueix a l'instant el gruix del mur i si es tracta d'un envà no estructural (4–10 cm) o d'un mur de càrrega (15 o 30 cm)."
          ]
        },
        {
          type: 'table',
          title: 'Comparativa Oficial de Conglomerants i Formats de Maó (MAN.GRAL.006 Cap. 3.1 i 3.2)',
          subtitle: 'Guix vs. Calç vs. Ciment i Format Català vs. Format Castellà',
          headers: ['Material / Format', 'Propietats i Dimensions Exactes', 'Aplicació Constructiva i Lectura de Parets'],
          rows: [
            ['Guix (Conglomerant aeri)', 'EXPANSIU en endurir-se · Resistència baixa · Flexibilitat baixa', 'Es dissol amb l’aigua i oxida el ferro! Només per a revestiments i envans INTERIORS'],
            ['Calç (Conglomerant)', 'NEUTRA (sense variació volum) · Resistència mitja · Flexibilitat ALTA', 'Morters tradicionals i arrebossats EXTERIORS transpirables que no s’esquerdaran'],
            ['Ciment (Conglomerant hidràulic)', 'RETRACCIÓ (s’encongeix en assecar) · Resistència ALTA · Flexibilitat baixa', 'Endureix fins i tot sota l’aigua · Estructures de formigó i morters d’alta resistència'],
            ['Maó Format CATALÀ', '30 × 15 cm (mida real ≈ 29 × 14 × 6 o 5 cm)', 'Paret de 15 cm (mig peu, veiem cantells de 30 cm) · Mur de càrrega de 30 cm (1 peu, veiem caps de 15 cm)'],
            ['Maó Format CASTELLÀ', '25 × 12,5 cm (mida real ≈ 24 × 11,5 × 5 cm)', 'Paret de 12,5 cm (mig peu) · Mur de càrrega de 25 cm (1 peu)'],
            ['Envà de maó de pla (Paret plana)', 'Gruix de 4 a 10 cm (maó col·locat de cantell/pla)', 'Divisió interior NO estructural (no suporta cap càrrega del sostre, excepte si l’edifici ha cedit!)']
          ],
          footnote: 'Altres materials del Cap. 3: Perfils d’acer laminat (IPN, IPE, HEB de secció en H per a pilars, UPN, L angular, T i xapa col·laborant), Fusta (massissa serrada, laminada encolada per a grans naus, i taulers aglomerat/DM/contraxapat/tricapa) i Aïllants (llana de roca/vidre incombustibles, perlita/vermiculita ignífugs, i escumes PU/XPS/EPS molt combustibles!).'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit: Com saber el gruix d’una paret de maons només mirant-la des de fora!',
          metaphor:
            'Un maó català fa 30 cm de llarg per 15 cm d’ample (exactament la meitat: 15 + 15 = 30):',
          explanation:
            "• Si mires la paret i només veus rectangles llargs de 30 cm (els cantells o 'llargs'), vol dir que el maó està posat de llarg i la paret només té 15 cm de gruix (paret de mig peu).\n• Si mires la paret i veus quadradets curts de 15 cm (els 'caps' o 'travessos'), vol dir que el maó entra cap a dins de la paret amb tota la seva llargada i el mur té 30 cm de gruix (mur de càrrega d'1 peu!).",
          takeaway: 'Maó Català = 30 × 15 cm | Maó Castellà = 25 × 12,5 cm | Veure els "caps" curts = Mur de càrrega gruixut (30 cm).'
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · Guix-Calç-Ciment (EX-NE-RE), Pasta-Morter-Formigó i Aïllants al Foc',
          acronym: 'Guix = EXpandeix  |  Calç = NEutra  |  Ciment = REtrau   |   P → M → F',
          trick:
            "• Barreja creixent (P-M-F): Pasta (+aigua) → Morter (+sorra) → Formigó (+grava).\n• Volum en endurir-se (EX-NE-RE): Guix s'EXpandeix (es desfà amb aigua i oxida el ferro → interiors); Calç és NEutra i flexible (exteriors); Ciment té REtracció (endureix sota aigua i màxima resistència).\n• Aïllants al foc: minerals (llana de roca/vidre, perlita, vermiculita) = incombustibles; escumes (PU, XPS, EPS) = molt combustibles.",
          example:
            'Recorda les mides de referència: Maó Català = regla escolar de 30 × 15 cm | Maó Castellà = 25 × 12,5 cm.'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 4 Elements Estructurals',
      title: '4. Elements Estructurals: Fonaments (≤ 3 m vs. > 3 m), Pilars, Forjats i Jàsseres',
      subtitle: 'Sabates i pilots, murs de càrrega vs. pantalles, tipus de forjats i diferència entre biga i jàssera.',
      blocks: [
        {
          type: 'text',
          heading: '4.1–4.2. Fonaments (≤ 3 m vs. > 3 m) i Elements Verticals',
          paragraphs: [
            "1) FONAMENTS (transmeten les càrregues al terreny ferm): Es divideixen segons la profunditat en SUPERFICIALS o directes (profunditat ≤ 3 metres: sabates aïllades, sabates combinades/corregudes, lloses de fonamentació, encepats i bigues de lligam o centradores) i PROFUNDS (profunditat > 3 metres quan la roca ferma és avall: pilots i micropilots per punta o fregament, murs pantalla per a soterranis i murs de contenció).",
            "2) ELEMENTS VERTICALS (treballen a compressió i risc de vinclament): Murs de càrrega (gruix 20–60 cm de pedra, tàpia, maó massís o bloc), Pilars (elements lineals de formigó armat, acer HEB o fusta), Pantalles estructurals (murs de formigó armat contra vent i sisme al nucli d'escales/ascensors) i Pilastres (pilars adossats a un mur)."
          ]
        },
        {
          type: 'text',
          heading: '4.3–4.4. Elements Horitzontals (Biga vs. Jàssera) i Elements No Estructurals',
          paragraphs: [
            "3) ELEMENTS HORITZONTALS (treballen a flexió i tallant): Forjats (biguetes de fusta/metall/formigó amb revoltó ceràmic o volta catalana, forjats reticulars amb casetons i lloses massisses), Bigues (recullen les biguetes) i JÀSSERES (bigues mestres principals de gran cantell que recullen altres bigues per salvar grans obertures i portar el pes als pilars).",
            "4) ELEMENTS NO ESTRUCTURALS: Tancaments exteriors (façanes lleugeres o murs cortina, cobertes) i Divisions interiors (envans i falsos sostres). Alerta operativa: en edificis antics que han cedit, un envà pot haver entrat en càrrega accidentalment i si s'enderroca de cop el forjat superior pot baixar!"
          ]
        },
        {
          type: 'table',
          title: 'Resum dels Elements Estructurals d’un Edifici (MAN.GRAL.006 Cap. 4)',
          subtitle: 'Criteri de classificació, esforç principal i exemples',
          headers: ['Família d’Elements', 'Criteri / Subtipus Oficial', 'Esforç Principal i Funció'],
          rows: [
            ['Fonaments Superficials', 'Profunditat ≤ 3 metres: Sabates (aïllades/corregudes), Llosa, Encepats i Bigues de lligam', 'Compressió (i flexió a la llosa) · Reparteixen la càrrega a poca profunditat'],
            ['Fonaments Profunds', 'Profunditat > 3 metres: Pilots, Micropilots, Murs pantalla i Murs de contenció', 'Compressió per punta i fregament lateral (i empenta de terres al mur pantalla)'],
            ['Verticals Portants', 'Murs de càrrega (20–60 cm), Pilars, Pantalles (vent/sisme) i Pilastres', 'Compressió i risc de VINCLAMENT (pandeig lateral en incendi)'],
            ['Horitzontals Portants', 'Forjats (biguetes + revoltons), Lloses, Bigues i JÀSSERES (bigues mestres)', 'FLEXIÓ al centre del tram i TALLANT (cisallament) als extrems/recolzaments']
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Sabates (≤ 3 m) vs. Pilots (> 3 m), Biga vs. Jàssera i el Parany dels Envans',
          metaphor:
            'Imagina caminar sobre neu tova amb raquetes amples (Sabates) vs. clavar bastons llargs fins a tocar la roca de sota (Pilots):',
          explanation:
            "• Fonaments (≤ 3 m vs. > 3 m): amb roca a prop (≤ 3 m) posem sabates o llosa; amb fang tou (> 3 m) baixem pilots fins a la roca.\n• Bigueta → Biga → Jàssera: les biguetes aboquen el pes a les bigues, i aquestes a la Jàssera (biga mestra).\n• Alerta envans: un envà (4–10 cm) no és portant, però en edificis vells on el sostre ha cedit hi pot recolzar i si s'enderroca pot provocar un esfondrament.",
          takeaway:
            '≤ 3 m = Superficials (sabates, llosa). > 3 m = Profunds (pilots, mur pantalla). Jàssera = biga mestra que recull altres bigues. Vigila els envans antics que hagin entrat en càrrega!'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 5 Jerarquia i Sistemes',
      title: '5. Principi de Jerarquia Estructural i Sistemes Constructius Històrics i Moderns',
      subtitle: 'Cadena de transmissió de càrregues, casa de cos (3,5–4,5 m), sistema unitari vs. separat i naus de pòrtics.',
      blocks: [
        {
          type: 'text',
          heading: '5.3. El Principi de Jerarquia Estructural',
          paragraphs: [
            "Les càrregues es transmeten de dalt cap avall en un ordre estricte: 1r) Biguetes i revoltons del forjat → 2n) Bigues → 3r) Jàsseres (bigues mestres) → 4t) Pilars o Murs de càrrega → 5è) Fonaments → 6è) Terreny.",
            "Regla vital per a Bombers: com més avall a la cadena es troba un element, més pisos depenen d'ell i més global és el col·lapse si falla. Si falla una bigueta cau un pany de sostre; si falla una jàssera o un pilar de planta baixa pot col·lapsar tot l'edifici en cadena."
          ]
        },
        {
          type: 'text',
          heading: '5.4–5.5. Sistemes Constructius: Unitari vs. Separat vs. Pòrtics',
          paragraphs: [
            "• Llums petites (4 a 8 m) — Sistema UNITARI (Murs de càrrega, fins anys 1960–70): les parets fan de tancament i d'estructura alhora; l'estabilitat depèn de la trava a les cantonades i dels forjats. Inclou la casa medieval, la 'casa de cos' catalana (amplada típica entre mitgeres de 3,5 a 4,5 m) i els edificis d'eixample.",
            "• Llums petites (4 a 8 m) — Sistema SEPARAT (Pilars i forjats, des dels anys 1970): l'esquelet de pilars i bigues (formigó armat o acer) suporta tot l'edifici amb independència de la façana. El punt crític és el nus rígid pilar-forjat.",
            "• Grans llums (> 8 m) — Sistema de PÒRTICS o encavallades: habitual en naus industrials i pavellons (acer laminat, fusta laminada o formigó prefabricat amb bigues 'delta' a dues aigües des dels anys 1990)."
          ]
        },
        {
          type: 'mnemonic',
          title: 'Truc Mnemotècnic per a la Jerarquia Estructural: "Bi – Bi – Jà – Pi – Fo"',
          trick:
            'Memoritza la cascada de dalt a baix amb 5 síl·labes ("Bi - Bi - Jà - Pi - Fo"):\n1. BI-guetes (forjat)\n2. BI-gues\n3. JÀ-sseres (bigues mestres que aguanten altres bigues!)\n4. PI-lars (o Murs de càrrega)\n5. FO-naments (cap al terreny).',
          example:
            'Pregunta d’examen: Quina diferència hi ha entre el sistema de murs de càrrega (fins anys 60–70) i el sistema de pilars i forjats (des dels anys 70)? El de murs de càrrega és un sistema UNITARI (la paret fa de tancament i d’estructura alhora; la casa de cos fa 3,5 a 4,5 m d’amplada entre mitgeres), mentre que el de pilars i forjats és un sistema SEPARAT (la façana ja no aguanta l’edifici).'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · El Joc del Jenga (Jerarquia) i Edificis Antics (Unitari) vs. Moderns (Separat)',
          metaphor:
            'La jerarquia estructural és com un arbre (fulles → branques → tronc → arrels) o la torre del joc Jenga:',
          explanation:
            "• Regla Jenga: com més avall falli la cadena Bi-Bi-Jà-Pi-Fo (jàssera o pilar de planta baixa), més pisos arrossega.\n• Sistema Unitari (fins anys 60–70): el mur tanca i aguanta l'edifici alhora (casa de cos catalana = 3,5–4,5 m d'ample).\n• Sistema Separat (des dels 70): esquelet independent de la façana; en naus (> 8 m) s'usen pòrtics.",
          takeaway:
            'Com més avall a Bi-Bi-Jà-Pi-Fo, més global és el col·lapse. Fins anys 70 = Unitari (murs = estructura + tancament; casa de cos 3,5–4,5 m). Des dels 70 = Separat (esquelet independent). > 8 m = Pòrtics.'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · Resum 1/2',
      title: 'Resum Imprescindible d’Examen (1/2) — Esforços, Tensions de Ruptura i Materials',
      subtitle: 'Síntesi d’alta densitat dels Capítols 2 i 3 del manual MAN.GRAL.006.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 1: Esforços, Resistències (kg/cm²), Conglomerants i Maons',
          subtitle: 'Totes les dades tècniques dels Capítols 2 i 3',
          headers: ['Concepte', 'Dada Oficial Exacta', 'Detall Clau d’Examen'],
          rows: [
            ['Accions sobre l’Edifici', 'Permanents (pes propi) · Variables (ús, vent, neu) · Accidentals (foc, sisme)', 'Equilibri estàtic: ∑F = 0 i ∑M = 0'],
            ['Els 6 Esforços', 'Tracció · Compressió · Flexió · Torsió · Tallant · Vinclament (pandeig)', 'Flexió = compressió + tracció | Vinclament = pandeig lateral de pilars'],
            ['Ruptura Formigó vs. Acer', 'Formigó: Tracció < 25 | Compr. 1.000 kg/cm² · Acer: 3.000–7.500 kg/cm²', 'L’acer del formigó armat es posa on hi ha la TRACCIÓ (a baix en bigues, a dalt en balcons)'],
            ['Ruptura Fusta vs. Maó', 'Fusta: Tracció 700–900 | Compr. 400–700 · Maó: Tracció < 10 | Compr. 300 kg/cm²', 'La fàbrica de maó només pot treballar a compressió'],
            ['Conglomerants', 'Guix (expansiu, interior) · Calç (neutra, molt flexible, exterior) · Ciment (retracció, alta resistència)', 'Pasta (+aigua) · Morter (+sorra) · Formigó (+grava)'],
            ['Maó Català vs. Castellà', 'Català = 30 × 15 cm (29×14×6) | Castellà = 25 × 12,5 cm (24×11,5×5)', 'Paret plana/envà = 4–10 cm | Mig peu = 15 cm | Mur càrrega 1 peu = 30 cm']
          ]
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · Resum 2/2',
      title: 'Resum Imprescindible d’Examen (2/2) — Fonaments, Jerarquia i Sistemes Constructius',
      subtitle: 'Síntesi d’alta densitat dels Capítols 4 i 5 del manual MAN.GRAL.006.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 2: Elements Estructurals, Jerarquia i Tipologies d’Edificis',
          subtitle: 'Totes les dades tècniques dels Capítols 4 i 5',
          headers: ['Àmbit Estructural', 'Xifres i Classificació Oficial', 'Regla Operativa per a Bombers'],
          rows: [
            ['Fonaments Superficials vs. Profunds', 'Superficials: ≤ 3 m (sabates, llosa, encepats) | Profunds: > 3 m (pilots, micropilots, mur pantalla)', 'Les bigues de lligam uneixen sabates o encepats'],
            ['Elements Verticals i Horitzontals', 'Verticals: Murs càrrega (20–60 cm), Pilars, Pantalles | Horitzontals: Forjats, Bigues, Jàsseres', 'La Jàssera és la biga mestra principal que recull altres bigues'],
            ['Jerarquia Estructural', '1. Biguetes → 2. Bigues → 3. Jàsseres → 4. Pilars/Murs → 5. Fonaments → Terreny', 'Com més avall en la jerarquia, més greu i global és el col·lapse'],
            ['Murs de Càrrega (Unitari)', 'Llums petites (4–8 m) · Fins anys 1960–70 · Casa de cos = 3,5 a 4,5 m entre mitgeres', 'Estructura i tancament són el mateix; estabilitat per trava i cantonades'],
            ['Pilars i Forjats (Separat)', 'Llums petites (4–8 m) · Generalitzat des dels anys 1970', 'L’estructura és independent de la façana; punt clau = unió rígida pilar-forjat'],
            ['Sistema de Pòrtics', 'Grans llums (> 8 m: naus industrials)', 'Pòrtics metàl·lics, fusta laminada o formigó prefabricat (biga delta anys 90)']
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't15-q1',
      difficulty: 'Mitjà',
      question: 'Segons el manual MAN.GRAL.006, quines són les dimensions nominals de referència d’un maó de Format Català i d’un maó de Format Castellà?',
      options: [
        'Català: 20 × 10 cm (19 × 9 cm reals) | Castellà: 30 × 15 cm (29 × 14 cm reals).',
        'Català: 30 × 15 cm (29 × 14 cm reals) | Castellà: 25 × 12,5 cm (24 × 11,5 cm reals).',
        'Català: 40 × 20 cm (39 × 19 cm reals) | Castellà: 30 × 15 cm (29 × 14 cm reals).',
        'Català: 25 × 12,5 cm (24 × 11,5 cm reals) | Castellà: 20 × 10 cm (19 × 9 cm reals).'
      ],
      correctIndex: 1,
      explanation: 'Apartat 3.2 del manual MAN.GRAL.006: el maó de format català té unes mides modulades de 30 × 15 cm i el de format castellà de 25 × 12,5 cm (el través sempre és la meitat del llarg).'
    },
    {
      id: 't15-q2',
      difficulty: 'Mitjà',
      question: 'Quin és l’ordre correcte de transmissió de càrregues de dalt a baix segons el Principi de Jerarquia Estructural (Cap. 5.3)?',
      options: [
        'Jàsseres (bigues mestres) → Bigues → Biguetes (forjat) → Fonaments → Pilars o Murs → Terreny.',
        'Biguetes (forjat) → Bigues → Jàsseres (bigues mestres) → Pilars o Murs de càrrega → Fonaments → Terreny.',
        'Envans de distribució → Bigues → Pilars → Biguetes (forjat) → Jàsseres → Fonaments → Terreny.',
        'Pilars o Murs de càrrega → Jàsseres (bigues mestres) → Bigues → Biguetes (forjat) → Fonaments → Terreny.'
      ],
      correctIndex: 1,
      explanation: 'Les biguetes del forjat descarreguen sobre les bigues; les bigues sobre les jàsseres (bigues mestres); les jàsseres sobre els pilars o murs; i aquests sobre els fonaments i el terreny.'
    },
    {
      id: 't15-q3',
      difficulty: 'Mitjà',
      question: 'Com es comporta volumètricament el Guix, la Calç i el Ciment durant el seu enduriment segons la taula comparativa del Capítol 3.1?',
      options: [
        'El Guix pateix RETRACCIÓ (s’encongeix en forjar), la Calç és EXPANSIVA (augmenta de volum) i el Ciment és NEUTRE (sense canvi dimensional i d’alta flexibilitat).',
        'El Guix és EXPANSIU (augmenta lleugerament de volum), la Calç és NEUTRA (i d’alta flexibilitat) i el Ciment té RETRACCIÓ (s’encongeix i té alta resistència).',
        'Tots tres conglomerants són EXPANSIUS durant el procés de forjat i només es diferencien en la resistència mecànica a compressió i la impermeabilitat.',
        'El Guix és el més resistent a l’aigua i a la compressió (sense retracció), mentre que la Calç pateix retracció severa i el Ciment és completament neutre.'
      ],
      correctIndex: 1,
      explanation: 'Taula 3.1 del manual: el guix és expansiu (baixa resistència i baixa flexibilitat); la calç és neutra (resistència mitja i alta flexibilitat); el ciment pateix retracció (alta resistència i baixa flexibilitat).'
    },
    {
      id: 't15-q4',
      difficulty: 'Fàcil',
      question: 'Quin esforç mecànic provoca la inestabilitat i el doblegament lateral sobtat d’un element esvelt sotmès a compressió axial, com un pilar metàl·lic o una paret alta durant un incendi?',
      options: [
        'L’esforç tallant o cisallament.',
        'La torsió.',
        'El vinclament (o pandeig).',
        'La tracció pura.'
      ],
      correctIndex: 2,
      explanation: 'El vinclament (pandeig) apareix en peces esveltes comprimides (pilars, puntals o murs alts) que es corben lateralment de manera sobtada.'
    },
    {
      id: 't15-q5',
      difficulty: 'Mitjà',
      question: 'Segons la taula de tensions de ruptura del Capítol 2.3, quina és la resistència aproximada del Formigó en massa a Tracció i a Compressió?',
      options: [
        'Tracció: fins a 1.000 kg/cm² (molt alta) | Compressió: < 25 kg/cm² (molt baixa).',
        'Tracció: < 25 kg/cm² (molt baixa) | Compressió: fins a 1.000 kg/cm² (molt alta).',
        'Tracció: fins a 3.000 kg/cm² (igual que l’acer) | Compressió: fins a 3.000 kg/cm².',
        'Tracció: entre 300 i 500 kg/cm² (mitjana) | Compressió: entre 300 i 500 kg/cm².'
      ],
      correctIndex: 1,
      explanation: 'El formigó resisteix fins a 1.000 kg/cm² a compressió però menys de 25 kg/cm² a tracció (per això es col·loquen barres d’acer, que aguanten de 3.000 a 7.500 kg/cm² a tracció).'
    },
    {
      id: 't15-q6',
      difficulty: 'Fàcil',
      question: 'A partir de quina profunditat es considera que una fonamentació és Profunda (pilots, micropilots, murs pantalla) en lloc de Superficial (sabates, lloses)?',
      options: [
        'Superficial: ≤ 10 m | Profunda: > 10 m.',
        'Superficial: ≤ 3 metres | Profunda: > 3 metres.',
        'Superficial: ≤ 0,5 m | Profunda: > 0,5 m.',
        'Superficial: ≤ 20 m | Profunda: > 20 m.'
      ],
      correctIndex: 1,
      explanation: 'Segons l’apartat 4.1 del manual MAN.GRAL.006, els fonaments superficials se situen fins a ≤ 3 m de profunditat i els profunds a > 3 m.'
    },
    {
      id: 't15-q7',
      difficulty: 'Mitjà',
      question: 'Quina és la distància característica entre parets mitgeres de la tradicional "casa de cos" catalana construïda amb el sistema unitari de murs de càrrega?',
      options: [
        'D’1,5 a 2,5 metres (marcada per l’amplada mínima de les voltes de maó de pla).',
        'De 3,5 a 4,5 metres (marcada per la longitud de les bigues de fusta tradicionals).',
        'De 8,0 a 12,0 metres (marcada per la resistència a compressió dels murs de pedra).',
        'De 15,0 a 20,0 metres (amb bigues mestres de fusta recolzades directament als extrems).'
      ],
      correctIndex: 1,
      explanation: 'Apartat 5.4.1 del manual: la casa de cos té una amplada típica entre mitgeres de 3,5 a 4,5 m, que era la llum òptima per als cabirons i bigues de fusta.'
    },
    {
      id: 't15-q8',
      difficulty: 'Mitjà',
      question: 'En una biga horitzontal recolzada als dos extrems, quin esforç predomina al centre de la biga i quin esforç predomina just als extrems prop dels punts de recolzament?',
      options: [
        'Al centre: Torsió axial | Als extrems de recolzament: Vinclament lateral per esveltesa.',
        'Al centre: Flexió (compressió a dalt i tracció a baix) | Als extrems de recolzament: Esforç Tallant (cisallament).',
        'Al centre: Compressió pura uniforme | Als extrems de recolzament: Tracció pura per estirament.',
        'Al centre: Esforç Tallant (cisallament) | Als extrems de recolzament: Flexió màxima amb tracció superior.'
      ],
      correctIndex: 1,
      explanation: 'Les bigues treballen a flexió al centre del seu tram, mentre que a la vora dels suports (pilars o murs) és on l’esforç tallant o de cisallament és màxim.'
    },
    {
      id: 't15-q9',
      difficulty: 'Mitjà',
      question: 'Què s’obté quan barregem Ciment + Aigua + Sorra, i què s’obté quan hi afegim a més Grava (àrids grossos)?',
      options: [
        'Amb sorra s’obté PASTA, i en afegir-hi grava s’obté MORTER (si només és ciment + aigua s’anomena Lletada).',
        'Amb sorra s’obté MORTER, i en afegir-hi grava s’obté FORMIGÓ (si només és conglomerant + aigua s’anomena Pasta).',
        'Amb sorra s’obté FORMIGÓ, i en afegir-hi grava s’obté AGLOMERAT (si només és ciment + aigua s’anomena Morter).',
        'Tots dos compostos s’anomenen morter hidràulic i només varien en la dosificació d’aigua de pastat.'
      ],
      correctIndex: 1,
      explanation: 'Pasta = conglomerant + aigua; Morter = conglomerant + aigua + sorra; Formigó = ciment + aigua + sorra + grava.'
    },
    {
      id: 't15-q10',
      difficulty: 'Mitjà',
      question: 'Quina diferència hi ha entre el sistema constructiu de murs de càrrega (fins als anys 1960–70) i el sistema de pilars i forjats (a partir dels anys 1970)?',
      options: [
        'El de murs de càrrega és un sistema UNITARI (les parets fan de tancament i d’estructura portant alhora), mentre que el de pilars i forjats és un sistema SEPARAT (l’esquelet portant és independent de la façana).',
        'El de murs de càrrega és un sistema SEPARAT (la façana només té funció de tancament lleuger), mentre que el de pilars i forjats és un sistema UNITARI on tots els tancaments són portants.',
        'El de murs de càrrega s’utilitza preferentment per a grans llums diàfanes de més de 25 metres en naus industrials, mentre que el de pilars es limita a habitatges unifamiliars.',
        'No hi ha cap diferència estructural en la transmissió de càrregues verticals: tots dos sistemes permeten enderrocar qualsevol paret interior o de façana sense afectació portant.'
      ],
      correctIndex: 0,
      explanation: 'Apartat 5.4 del manual: el sistema de murs de càrrega és unitari (paret portant = tancament), mentre que el de pilars i forjats és separat.'
    },
    {
      id: 't15-q11',
      difficulty: 'Mitjà',
      question: 'Com treballen estructuralment els murs de contenció o parets per gravetat (de pedra, maó o formigó en massa sense armar)?',
      options: [
        'Resisteixen les empentes laterals del terreny gràcies a la seva gran capacitat d’absorbir esforços de flexió composta i tracció pura a la cara exterior.',
        'Contraresten les empentes mitjançant el seu propi pes i treballen bàsicament a compressió, ja que no resisteixen bé les traccions ni la flexió.',
        'Transmeten tota la càrrega horitzontal per esforç tallant cap a la coberta i els forjats superiors sense necessitat de fonamentació pròpia.',
        'Funcionen exclusivament mitjançant cables d’acer posttesats a tracció ancorats al rerefons del terreny sense aprofitar el pes propi del mur.'
      ],
      correctIndex: 1,
      explanation: 'Les estructures per gravetat s’estabilitzen pel seu pes propi i treballen a compressió; com que els materials petris o el formigó en massa no resisteixen traccions ni flexió rellevants, la resultant de forces ha de caure dins el nucli central de la base.'
    },
    {
      id: 't15-q12',
      difficulty: 'Mitjà',
      question: 'En una encavallada triangular clàssica de fusta per a cobertes inclinades, a quin esforç treballen els pendelons (elements verticals que enllacen els parells amb el tirant)?',
      options: [
        'A compressió pura.',
        'A flexió composta.',
        'A tracció.',
        'A torsió.'
      ],
      correctIndex: 2,
      explanation: 'En una encavallada, els parells (inclinats) treballen a compressió, el tirant (horitzontal inferior) treballa a tracció, i tant el monjo central com els pendelons verticals treballen a tracció sostenint el tirant per evitar que s’enfonsi.'
    },
    {
      id: 't15-q13',
      difficulty: 'Mitjà',
      question: 'En el càlcul d’estructures, quin principi físic fonamental permet resoldre directament les estructures isostàtiques?',
      options: [
        'La primera llei de Newton (equilibri estàtic: sumatori de forces i moments igual a zero).',
        'La llei de Hooke de deformació elàstica i plàstica aplicada al mòdul de Young del material.',
        'El principi de conservació de l’energia potencial elàstica en sistemes hiperestàtics.',
        'La tercera llei de la dinàmica (principi d’acció i reacció sense equacions de moments).'
      ],
      correctIndex: 0,
      explanation: 'Una estructura isostàtica té el nombre just d’enllaços i incògnites perquè es pugui calcular únicament aplicant les equacions d’equilibri estàtic derivades de la primera llei de Newton (ΣF = 0 i ΣM = 0).'
    },
    {
      id: 't15-q14',
      difficulty: 'Fàcil',
      question: 'Com s’anomena la peça vertical central d’una encavallada de coberta que penja del vèrtex superior (cimal) i sosté el centre del tirant?',
      options: [
        'Jàssera.',
        'Monjo.',
        'Llinda.',
        'Cartela.'
      ],
      correctIndex: 1,
      explanation: 'El monjo (o pendeló principal) és la peça vertical central de l’encavallada que treballa a tracció per subjectar el tirant al seu punt mitjà i rebre les tornapuntes.'
    },
    {
      id: 't15-q15',
      difficulty: 'Difícil',
      question: 'Respecte a les parets de càrrega i als sistemes constructius tradicionals, quina de les afirmacions següents és INCORRECTA?',
      options: [
        'Les fàbriques de maó o pedra tenen poca cohesió i molt baixa resistència a tracció davant d’empentes horitzontals fora del seu pla.',
        'Els àbacs són elements de reforç característics dels murs de càrrega per repartir les càrregues dels sostres de biguetes de fusta.',
        'L’obertura de grans buits en una paret de càrrega sense apunterament previ compromet l’estabilitat del mur i dels forjats que hi recolzen.',
        'La substitució o enderroc d’un envà de distribució no afecta l’estructura portant, a diferència d’una paret de càrrega.'
      ],
      correctIndex: 1,
      explanation: 'Afirmació incorrecta: els àbacs NO pertanyen a les parets de càrrega, sinó als forjats reticulars de formigó armat (són les zones massissades al voltant dels pilars per absorbir el punxonament i els moments negatius).'
    }
  ]
};
