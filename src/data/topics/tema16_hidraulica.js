export const tema16Hidraulica = {
  id: 'tema-13',
  number: 13,
  code: 'MAN.GRAL.009',
  title: 'Hidràulica, Bombes i Instal·lacions d’Extinció',
  category: 'Manual Operatiu SGO — Càlcul, Bombes i Hidràulica Operativa',
  estimatedMinutes: 60,
  importance: {
    title: "Radar d'Examen — Tema 13 (MAN.GRAL.009 V.2): Hidràulica, Bombes i Instal·lacions",
    frequency: 'Molt Alta (4-6 preguntes per convocatòria entre problemes i teoria de bombes/mànegues)',
    summary:
      "Aquest manual és la bíblia del bomber conductor i de punta de llança. Inclou 5 pàgines de càlcul (1 pàgina per teorema: Pressió i Stevin, Pascal, Aspiració màxima i Cavitació, Continuïtat i Bernoulli/Venturi, i Pèrdues de càrrega Darcy-Weisbach + Pressió en Bomba), 2 pàgines d'operativa (Bombes centrífugues vs. volumètriques + Mànegues Ø25/45/70 i Llances) i la Pàgina 8 amb el Formulari Resum Final.",
    hotTopics: [
      'Cap. 2-3 (Càlcul): Pressió de vapor aigua a 25 °C (0,0316 bar), viscositat (Pa·s), Teorema de Stevin (P = ρ·g·h → +1 bar cada 10 m) i Premsa de Pascal (F₁/S₁ = F₂/S₂).',
      'Cap. 3.4 (Càlcul): Aspiració màxima teòrica (10,328 m.c.a. a 1 atm) vs. pràctica (7 a 8 m) i pèrdua per altitud (-0,129 m.c.a. per cada +100 m).',
      'Cap. 4 (Càlcul): Equació de Continuïtat (Q = S·v), Teorema de Bernoulli i Efecte Venturi (proporcionador d’escuma i hidroerenjador), Darcy-Weisbach (J ∝ L·v²/D) i Mànegues en Sèrie vs. Paral·lel.',
      'Cap. 5 (Bombes): Bombes centrífugues (rodet obert/tancat + voluta, turbobomba) vs. volumètriques (engranatges, lòbuls, paletes, peristàltica, membrana, pistó i pistons axials del BRP Scania) i Punt de funcionament.',
      'Cap. 6 (Instal·lacions): Mànegues de 4 capes (Ø25 = 40 bar i 0,5 L/m [10 L/20m]; Ø45 = 20 bar i 1,5 L/m [30 L/20m]; Ø70 = 18 bar i 4 L/m [77 L/20m]), manegots Storz Ø110/Ø80, llances a 6 bar i monitors a 30°–35°.'
    ],
    traps: [
      'Recordar que la bomba NO "xucla" l’aigua: fa el buit i és la pressió atmosfèrica exterior (1 atm = 10,33 m.c.a.) qui empeny l’aigua cap amunt!',
      'Duplicar el cabal (Q × 2) en una mateixa mànega multiplica la pèrdua de càrrega per QUATRE (ΔPf × 4)!',
      'En mànegues en SÈRIE s’iguala el cabal i se sumen les pèrdues de càrrega; en PARAL·LEL s’iguala la pèrdua de càrrega i es reparteix el cabal (reduint la pèrdua per 4!).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 2-3.2 Stevin',
      title: '1–3.2. Propietats dels Líquids i Teorema Fundamental de la Hidrostàtica (Stevin)',
      subtitle: 'Pressió de vapor (0,0316 bar), viscositat (Pa·s), pressió absoluta vs. manomètrica i paradoxa de Stevin.',
      blocks: [
        {
          type: 'text',
          heading: '2. Propietats dels Líquids i 3.1–3.2. Pressió Hidrostàtica',
          paragraphs: [
            "Els líquids són fluids pràcticament incompressibles amb volum propi però forma variable. Les seves propietats crítiques al manual MAN.GRAL.009 són: 1) Densitat (ρ = m/V; aigua dolça = 1.000 kg/m³ = 1 kg/L; aigua de mar ≈ 1.025–1.030 kg/m³), 2) Pressió de vapor (Pv: pressió a la qual el líquid bull a una Tª donada; per a l'aigua a 25 °C és de 0,0316 bar i a 100 °C és d'1,013 bar = 1 atm), 3) Viscositat dinàmica (resistència interna al flux per fregament entre capes; unitat SI: Pa·s; en els líquids la viscositat DISMINUEIX quan augmenta la temperatura!) i 4) Tensió superficial (força de cohesió per ponts d'hidrogen; es redueix amb tensioactius/escumògens per crear aigua humectant).",
            "El Teorema Fundamental de la Hidrostàtica (Stevin) demostra que la pressió en qualsevol punt d'un líquid en repòs depèn EXCLUSIVAMENT de la profunditat vertical (h), la densitat (ρ) i la gravetat (g), i NO depèn mai de la forma del recipient ni del volum total d'aigua (Paradoxa Hidrostàtica de Stevin i Vasos Comunicants)."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 1: Teorema de Stevin i Pressió Absoluta vs. Relativa (Manomètrica)',
          formula: 'P_hidr = ρ · g · h   |   P_abs = P_atm + P_rel (manomètrica)',
          variables: [
            { symbol: 'P_hidr', meaning: 'Pressió hidrostàtica en Pascals (Pa = N/m²). 1 bar = 100.000 Pa = 100 kPa ≈ 10,2 m.c.a.' },
            { symbol: 'ρ', meaning: 'Densitat del fluid en kg/m³ (aigua dolça = 1.000 kg/m³)' },
            { symbol: 'g', meaning: 'Acceleració de la gravetat (9,81 m/s²; per a càlcul mental ràpid a examen: ≈ 10 m/s²)' },
            { symbol: 'h', meaning: 'Profunditat o alçada vertical de la columna de líquid en metres (m)' }
          ],
          trick:
            "Regla d'or de Bombers: Cada 10 metres d'alçada vertical d'aigua equivalen a 1 bar de pressió manomètrica (+1 bar cada 10 m!). Els manòmetres dels camions de bombers mesuren sempre Pressió Relativa (P_rel = 0 bar quan el circuit està obert a l'atmosfera).",
          example:
            'Problema resolt: Quina pressió manomètrica i absoluta hi ha al fons d’un dipòsit obert de 15 m d’alçada ple d’aigua?\n• P_rel (manomètrica) = 1.000 · 9,81 · 15 = 147.150 Pa ≈ 1,47 bar (en càlcul ràpid: 15 / 10 = 1,5 bar).\n• P_abs = P_atm (1,013 bar) + 1,47 bar = 2,48 bar.'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit: Per què una piscina gegant i un tub prim de 10 m tenen la mateixa pressió al fons?',
          metaphor:
            'Imagina que tens una pila de llibres a sobre del cap: només et pesa la columna vertical de llibres que tens just a sobre teu, no pas els llibres que hi ha a les prestatgeries del costat!',
          explanation:
            "Això és la Paradoxa de Stevin: la pressió al fons només depèn de l'ALÇADA vertical (h). Un tub finíssim de 10 metres d'alt ple d'aigua fa exactament 1 bar de pressió al fons, igual que un pantà de 10 metres de profunditat i 5 quilòmetres d'amplada.",
          takeaway: 'En hidrostàtica només mana l’alçada vertical (h): mateixa alçada = mateixa pressió (Vasos Comunicants).'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 3.3 Pascal',
      title: '3.3. Principi de Pascal i Multiplicació de Forces (Premsa Hidràulica)',
      subtitle: 'Transmissió íntegra de pressions en fluids confinats i càlcul d’eines d’excarceració (cisalla, separador i cilindres RAM).',
      blocks: [
        {
          type: 'text',
          heading: '3.3. Principi de Pascal en Eines Hidràuliques de Rescat',
          paragraphs: [
            "Blaise Pascal va formular que qualsevol increment de pressió aplicat sobre la superfície d'un líquid incompressible tancat dins d'un recipient indeformable es transmet amb la mateixa intensitat en totes les direccions i a tots els punts del fluid.",
            "Aquesta propietat és la base de totes les eines hidràuliques d'excarceració de Bombers (grup hidràulic, cisalles, separadors, cilindres telescòpics RAM i gats hidràulics), que treballen a pressions d'entre 630 i 720 bar."
          ]
        },
        {
          type: 'diagram',
          title: 'Premsa Hidràulica de Pascal (Multiplicador de Força per Superfície)',
          diagramType: 'pascal',
          caption:
            'La pressió és idèntica a tots dos pistons (P₁ = P₂). Si la superfície de sortida S₂ és 20 vegades més gran que S₁, la força es multiplica per 20 (a canvi de recórrer 20 vegades menys distància: F₁·d₁ = F₂·d₂).'
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 2: Equació de la Premsa Hidràulica (Força, Superfície i Radi)',
          formula: 'P₁ = P₂   ⇒   F₁ / S₁ = F₂ / S₂   ⇒   F₂ = F₁ · (S₂ / S₁) = F₁ · (R₂ / R₁)²',
          variables: [
            { symbol: 'F₁, F₂', meaning: 'Força aplicada a l’èmbol petit (F₁) i força multiplicada obtinguda a l’èmbol gran (F₂), en N o kgf' },
            { symbol: 'S₁, S₂', meaning: 'Superfícies dels èmbols (m² o cm²). Es poden usar cm² a banda i banda sense convertir!' },
            { symbol: '(R₂ / R₁)²', meaning: 'Com que S = π·R², si et donen radis o diàmetres, la força es multiplica pel QUADRAT de la relació de radis!' }
          ],
          trick:
            'Atenció a la trampa del radi vs. superfície! Si l’èmbol gran té el TRIPLE de superfície (S₂ = 3·S₁), la força es multiplica per 3. Però si té el TRIPLE de radi o diàmetre (R₂ = 3·R₁), la superfície és 3² = 9 vegades més gran i la força es multiplica per 9!',
          example:
            'Problema resolt: En un gat hidràulic, l’èmbol petit té superfície S₁ = 5 cm² i el gran S₂ = 100 cm². Quina força F₁ hem d’aplicar per aixecar una llosa de formigó de 3.000 kgf?\n• Factor multiplicador = S₂ / S₁ = 100 / 5 = 20.\n• F₁ = F₂ / 20 = 3.000 / 20 = 150 kgf (≈ 1.471,5 N).'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 3.4 Aspiració',
      title: '3.4. Pressió Atmosfèrica, Aspiració Màxima (10,33 m vs. 7–8 m) i Cavitació',
      subtitle: 'Experiment de Torricelli, pèrdua d’aspiració amb l’altitud (-0,129 m/100m), cop d’ariet i cavitació.',
      blocks: [
        {
          type: 'text',
          heading: '3.4. Per què una bomba mai no pot aspirar a més de 10,33 metres?',
          paragraphs: [
            "Una bomba d'incendis NO 'xucla' l'aigua per si mateixa: el seu sistema d'encebament extreu l'aire del manegot d'aspiració per crear una depressió (buit), i és la PRESSIÓ ATMOSFÈRICA exterior que actua sobre la superfície de la bassa o piscina qui empeny l'aigua cap amunt per dins del manegot.",
            "A nivell del mar (1 atm = 101.325 Pa = 1,013 bar = 760 mmHg), la columna màxima d'aigua que l'atmosfera pot sostenir en un buit perfecte és de 10,328 metres (10,33 m.c.a.). A la pràctica operativa, a causa de la pressió de vapor de l'aigua, les pèrdues de càrrega al manegot i que el buit mai és del 100%, l'alçada màxima d'aspiració real d'una autobomba és de 7 a 8 metres.",
            "Quan pugem en altitud (muntanya), la pressió atmosfèrica disminueix a raó d'aproximadament -0,129 m.c.a. per cada 100 metres de desnivell positiu. Així, a un llac del Pirineu a 2.000 m d'altitud, la columna teòrica baixa de 10,33 m a 7,75 m!"
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 3: Alçada Màxima d’Aspiració, Efecte de l’Altitud i Cavitació',
          formula: 'H_teòrica = P_atm / (ρ · g) = 10,328 m   |   ΔH_altitud ≈ -0,129 m.c.a. per cada +100 m',
          variables: [
            { symbol: '10,328 m', meaning: 'Alçada teòrica màxima d’aspiració d’aigua a nivell del mar (0 m, 1 atm)' },
            { symbol: '7 a 8 m', meaning: 'Alçada màxima d’aspiració PRÀCTICA / REAL en operativa de Bombers' },
            { symbol: 'Cavitació', meaning: 'Formació i implosió violenta de bombolles de vapor al rodet quan P_absoluta ≤ P_vapor (0,0316 bar a 25 °C)' },
            { symbol: 'Cop d’ariet', meaning: 'Sobrepressió brusca destructiva per tancament sobtat d’una llança o vàlvula (energia cinètica → pressió)' }
          ],
          trick:
            "Com evitar els 2 grans enemics de la bomba:\n• Contra la CAVITACIÓ: reduir l'alçada geomètrica d'aspiració (apropar camió a l'aigua), usar manegots curts i amples (Ø110 mm), netejar el filtre de la carxofa, evitar aigua calenta i no demanar més cabal del que entra.\n• Contra el COP D'ARIET: obrir i tancar SEMPRE les llances i vàlvules de manera LENTA i PROGRESSIVA!",
          example:
            'Problema resolt del manual: Quina és l’alçada teòrica màxima d’aspiració en un estany situat a 1.500 m d’altitud?\n• Pèrdua per altitud = 15 × 0,129 m = 1,935 m.c.a.\n• H_teòrica (1.500 m) = 10,328 - 1,935 = 8,39 m (aspiració pràctica real ≈ 5,5 a 6 m).'
        },
        {
          type: 'table',
          title: 'Variació de la Pressió Atmosfèrica i l’Alçada Teòrica d’Aspiració amb l’Altitud',
          subtitle: 'Valors de referència del manual MAN.GRAL.009 (Capítol 3.4)',
          headers: ['Altitud sobre el nivell del mar', 'Pressió Atmosfèrica (mbar / hPa)', 'Alçada Teòrica Màxima (m.c.a.)', 'Alçada Pràctica Operativa (m)'],
          rows: [
            ['0 m (Nivell del mar)', '1.013 mbar (1 atm)', '10,33 m', '7,0 – 8,0 m'],
            ['500 m', '950 mbar', '9,68 m', '6,5 – 7,3 m'],
            ['1.000 m', '891 mbar', '9,04 m', '6,0 – 6,7 m'],
            ['1.500 m', '835 mbar', '8,39 m', '5,5 – 6,0 m'],
            ['2.000 m (Alta muntanya)', '782 mbar', '7,75 m', '5,0 – 5,5 m'],
            ['3.000 m', '684 mbar', '6,46 m', '4,0 – 4,5 m']
          ],
          footnote: 'Pèrdua mitjana aproximada: -0,129 m.c.a. per cada 100 m d’ascens (-1,29 m per cada 1.000 m).'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 4.1-4.3 Bernoulli',
      title: '4.1–4.3. Hidrodinàmica: Equació de Continuïtat, Bernoulli i Efecte Venturi',
      subtitle: 'Cabal (Q = S·v), règim laminar vs. turbulent (Reynolds), principi de Bernoulli i dosificació d’escumogen.',
      blocks: [
        {
          type: 'text',
          heading: '4.1–4.3. Règim Laminar vs. Turbulent, Continuïtat i Bernoulli',
          paragraphs: [
            "En hidrodinàmica, el règim d'un fluid depèn del Nombre de Reynolds (Re): si és baix el flux és LAMINAR (capes ordenades sense barrejar-se, velocitat màxima al centre de la canonada); si és alt és TURBULENT (remolins caòtics amb major fregament; és el règim habitual dins les mànegues de bombers). El cabal volumètric (Q = V/t = S·v) es mesura en m³/s o L/min (1 m³/s = 1.000 L/s = 60.000 L/min).",
            "El Teorema de Bernoulli estableix que en un fluid ideal la suma de la pressió estàtica (P), la pressió dinàmica o cinètica (½·ρ·v²) i la pressió potencial o geomètrica (ρ·g·h) es manté constant. Quan una canonada s'estreny (Efecte Venturi), la velocitat augmenta bruscament i la pressió estàtica cau en picat creant una depressió capaç d'aspirar escumogen (proporcionador Z2/Z4) o aigua (hidroerenjador)."
          ]
        },
        {
          type: 'diagram',
          title: 'Efecte Venturi i Equació de Continuïtat (Q = S₁·v₁ = S₂·v₂)',
          diagramType: 'venturi',
          caption:
            'A l’estrenyiment A₂ la secció disminueix → la velocitat v₂ es dispara (Continuïtat) → la pressió estàtica P₂ cau per sota de l’atmosfèrica (Bernoulli), succionant l’escumogen o buidant soterranis amb l’hidroerenjador.'
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 4: Equació de Continuïtat, Teorema de Bernoulli i Velocitat de Torricelli',
          formula: 'Q = S₁ · v₁ = S₂ · v₂   |   P + ½·ρ·v² + ρ·g·h = constant   |   v = √(2 · g · h)',
          variables: [
            { symbol: 'Q', meaning: 'Cabal en m³/s (o L/s). Superfície circular: S = π · R² = (π · D²) / 4' },
            { symbol: 'v₂ / v₁', meaning: 'v₂ = v₁ · (S₁ / S₂) = v₁ · (D₁ / D₂)². Si el diàmetre es redueix a la meitat, la velocitat es multiplica per 4!' },
            { symbol: 'v = √(2·g·h)', meaning: 'Teorema de Torricelli: velocitat de sortida per un orifici a profunditat h (o per una llança a pressió P: v = √(2·P/ρ))' }
          ],
          trick:
            'Truc ràpid per a la velocitat d’hidratació en llança: a la pressió nominal de treball d’una llança (P = 6 bar = 600.000 Pa ≈ 60 m.c.a.), la velocitat teòrica de sortida del doll és v = √(2 · 600.000 / 1.000) = √1.200 ≈ 34,6 m/s (≈ 125 km/h!).',
          example:
            'Problema resolt: L’aigua circula per una mànega de Ø70 mm a v₁ = 2 m/s i passa a una reducció de Ø35 mm (la meitat de diàmetre). Quina serà la velocitat v₂?\n• Relació de diàmetres: D₁ / D₂ = 70 / 35 = 2.\n• Com que la superfície va amb el quadrat del diàmetre: v₂ = v₁ · 2² = 2 · 4 = 8 m/s.'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Cap. 4.4-4.5 Pèrdues',
      title: '4.4–4.5. Pèrdues de Càrrega (Darcy-Weisbach), Sèrie/Paral·lel i Pressió en Bomba',
      subtitle: 'Fórmula de Darcy-Weisbach, instal·lacions de mànegues en sèrie vs. paral·lel i equació de la bomba (PB).',
      blocks: [
        {
          type: 'text',
          heading: '4.4–4.5. Pèrdues de Càrrega Lineals i Singulars i Mànegues en Sèrie vs. Paral·lel',
          paragraphs: [
            "En un fluid real amb viscositat, el fregament contra les parets de la mànega (pèrdues lineals o contínues) i els canvis de direcció o secció en bifurcacions, colzes, reduccions i vàlvules (pèrdues singulars o locals) provoquen una caiguda irreversible de pressió anomenada Pèrdua de Càrrega (ΔPf o J).",
            "Segons l'equació de Darcy-Weisbach, la pèrdua de càrrega és directament proporcional a la rugositat (f), a la longitud de la mànega (L) i al QUADRAT de la velocitat o del cabal (v² o Q²), i inversament proporcional al diàmetre (D, o D⁵ en funció del cabal Q)."
          ]
        },
        {
          type: 'diagram',
          title: 'Balanç d’Energia en Instal·lació d’Extinció en Alçada',
          diagramType: 'fire_elevation',
          caption:
            'La bomba (PB) ha de vèncer 3 sumands: la pressió requerida a la punta de llança (PL = 6 bar), les pèrdues per fregament a les mànegues (ΔPf) i el desnivell geomètric (+1 bar per cada 10 m de pujada).'
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 5: Equació de Darcy-Weisbach i Equació General de la Pressió en Bomba (PB)',
          formula: 'J = f · (L / D) · (v² / 2g)   |   P_B = P_L + ΔP_f ± ΔP_g',
          variables: [
            { symbol: 'P_B', meaning: 'Pressió necessària a la sortida del cos de bomba del camió (bar)' },
            { symbol: 'P_L', meaning: 'Pressió de treball a la punta de llança (estàndard = 6 bar en llances combinades)' },
            { symbol: 'ΔP_f', meaning: 'Pèrdua de càrrega total per fregament: ΔP_f = (L / 100) · J_100m + pèrdues singulars' },
            { symbol: '± ΔP_g', meaning: 'Pressió geomètrica per desnivell: + (h / 10) bar si la llança és més ALTA que la bomba; - (h / 10) bar si és més BAIXA' }
          ],
          trick:
            "Mànegues en SÈRIE vs. en PARAL·LEL (Pregunta clàssica d'examen!):\n• En SÈRIE (una darrere l'altra per arribar més lluny): passa el MATEIX cabal per totes (Q_tot = Q₁ = Q₂) i les pèrdues de càrrega se SUMEN (ΔP_tot = ΔP₁ + ΔP₂).\n• En PARAL·LEL (dues línies bessones entre bomba i col·lector): tenen la MATEIXA pèrdua de càrrega (ΔP_tot = ΔP₁ = ΔP₂) i el cabal es REPARTEIX a la meitat per cada línia (Q/2), fent que la pèrdua de càrrega es redueixi a la QUARTA PART (ΔPf / 4)!",
          example:
            'Problema resolt: Volem alimentar una llança a PL = 6 bar situada a un 4t pis (h = +20 m) amb 120 m de mànega Ø45 (pèrdua J = 1,5 bar cada 100 m per al cabal escollit). Quina pressió PB hem de posar a la bomba?\n• ΔP_f = (120 / 100) × 1,5 = 1,2 × 1,5 = 1,8 bar.\n• ΔP_g = +20 m / 10 = +2,0 bar.\n• P_B = 6 + 1,8 + 2,0 = 9,8 bar.'
        }
      ]
    },
    {
      pageNumber: 6,
      shortLabel: 'Pàg. 6 · Cap. 5 Bombes',
      title: '5. Bombes Hidràuliques (Centrífugues vs. Volumètriques) i Corbes Característiques',
      subtitle: 'Rodet i voluta, sistemes d’encebament, bomba de pistons axials del BRP Scania i punt de funcionament.',
      blocks: [
        {
          type: 'text',
          heading: '5.1–5.3. Bombes Centrífugues vs. Volumètriques i Encebament',
          paragraphs: [
            "Les bombes es divideixen en dos grans grups: 1) TURBOBOMBES o BOMBES CENTRÍFUGUES (les principals d'impulsió d'aigua dels camions de bombers i la turbobomba d'achique accionada per aigua): l'aigua entra axialment pel centre del RODET (impulsor d'àleps que pot ser obert per a aigües brutes o tancat per a màxim rendiment en aigua neta), és accelerada per força centrífuga cap a la perifèria i entra al DIFUSOR o VOLUTA (carcassa en espiral de secció creixent que frena la velocitat i la transforma en pressió estàtica segons Bernoulli). Si cal molta pressió (alta pressió de 40 bar), s'acoblen diversos rodets en sèrie (bomba multicel·lular o multietapa).",
            "2) BOMBES VOLUMÈTRIQUES o de Desplaçament Positiu (desplacen un volum fix de fluid en cada cicle; s'utilitzen com a bombes d'ENCEBAMENT per fer el buit a l'aspiració, per dosificar escumogen o en grups hidràulics d'oli): es divideixen en ROTATIVES (d'engranatges, de lòbuls, de paletes lliscants i peristàltica) i ALTERNATIVES o Recíproques (de membrana/diafragma, d'èmbol o pistó, i la bomba d'encebament de PISTONS AXIALS dels nous BRP Scania)."
          ]
        },
        {
          type: 'diagram',
          title: 'Bomba Centrífuga (Rodet + Voluta), Aspiració i Punt de Funcionament',
          diagramType: 'pumps_curves',
          caption:
            '1) A la bomba centrífuga el rodet dóna energia cinètica i la voluta la converteix en pressió. 2) L’encebament fa el buit i l’atmosfera empeny fins a 7–8 m reals. 3) El Punt de Funcionament és la intersecció exacta entre la corba descendent de la bomba i la corba parabòlica ascendent de la instal·lació.'
        },
        {
          type: 'table',
          title: 'Classificació Completa de Bombes del Manual MAN.GRAL.009 (Capítol 5)',
          subtitle: 'Mecanisme, aplicació a Bombers i comportament operatiu',
          headers: ['Tipus de Bomba', 'Subtipus / Mecanisme', 'Aplicació Principal a Bombers', 'Característica Clau d’Examen'],
          rows: [
            ['Centrífuga (Turbomàquina)', 'Rodet (obert o tancat) + Voluta / Multicel·lular (BP + AP)', 'Bomba principal d’autobombes (BUP, BRP, BUL), motobombes, electrobombes i turbobomba', 'No és autoencebant (necessita bomba d’encebament si aspira); permet tancar llances breument sense rebentar'],
            ['Volumètrica Rotativa', 'D’engranatges, de lòbuls, de paletes (excèntrica) o peristàltica', 'Dosificadors electrònics d’escumogen, bombes d’oli i encebament d’anell líquid/paletes', 'Autoencebants; cabal proporcional a les rpm i gairebé independent de la pressió'],
            ['Volumètrica Alternativa', 'De membrana/diafragma, de pistó/èmbol i de Pistons Axials', 'Bomba d’encebament per buit dels BRP Scania (pistons axials) i bombes d’alta pressió', 'Autoencebants; no s’ha d’obstruir totalment la sortida sense vàlvula de descàrrega/seguretat']
          ],
          footnote: 'En les corbes característiques d’una bomba centrífuga (Pressió P vs. Cabal Q a rpm constants): quan el cabal Q augmenta, la pressió P disminueix i la potència absorbida (N) augmenta.'
        }
      ]
    },
    {
      pageNumber: 7,
      shortLabel: 'Pàg. 7 · Cap. 6 Instal·lacions',
      title: '6. Instal·lacions d’Aigua: Mànegues (Ø25, Ø45, Ø70), Accessoris i Llances',
      subtitle: 'Les 4 capes de les mànegues, pressions i volums d’aigua per metre, manegots Storz i monitors.',
      blocks: [
        {
          type: 'text',
          heading: '6.1–6.5. Estructura de les Mànegues, Peces d’Acció i Llances (6 bar)',
          paragraphs: [
            "Les mànegues d'impulsió modernes de Bombers de la Generalitat tenen una estructura de 4 CAPES (de dins cap a fora): 1) Recobriment intern llis (caucho/EPDM que minimitza la pèrdua de càrrega), 2) Capa intermèdia d'adherència, 3) Teixit tèxtil trenat d'alta tenacitat (polièster/poliamida que suporta la pressió) i 4) Recobriment extern protector (resistent a l'abrasió, calor i productes químics). Les mànegues flexibles d'impulsió (Ø25, Ø45 i Ø70) porten raccords BARCELONA (3 patilles simètriques), mentre que els manegots rígids d'aspiració (Ø110 mm i Ø80 mm en motobombes) porten raccords STORZ (2 ganxos amb més estanquitat al buit).",
            "Les llances combinades treballen a una pressió nominal òptima de 6 bar (amb selecció de cabal i con d'obertura: efecte ple d'abast, con d'atac de 30°–45° per refredar gasos i pantalla de protecció de 120°). Quan el cabal supera els 500 L/min (llança de Ø70), la força de reacció supera l'esforç segur de 2 bombers i és obligatori utilitzar MONITORS (portàtils o de sostre, de fins a 2.000–4.000 L/min). L'abast horitzontal màxim d'un monitor en aire amb resistència aerodinàmica s'aconsegueix amb un angle d'inclinació de 30° a 35° (en el buit teòric seria 45°)."
          ]
        },
        {
          type: 'table',
          title: 'Taula Oficial de Mànegues d’Impulsió i Aspiració (MAN.GRAL.009 Cap. 6.1)',
          subtitle: 'Diàmetres, longituds, pressions de treball, capacitat per metre i per tram de 20 m',
          headers: ['Tipus i Diàmetre', 'Longitud del Tram', 'Pressió de Treball', 'Volum per Metre (L/m)', 'Volum Total per Tram (20 m) i Raccord'],
          rows: [
            ['Semirígida Ø 25 mm (Pronto Socors)', '20 m (o 40 m en devanadora)', '40 bar (Alta Pressió)', '≈ 0,5 L/m (0,49 L/m)', '≈ 10 L per tram de 20 m · Raccord Barcelona'],
            ['Flexible Ø 45 mm (Atac interior)', '20 m', '20 bar (Baixa Pressió)', '≈ 1,5 L/m (1,59 L/m)', '≈ 30 L (31,8 L) per tram de 20 m · Barcelona'],
            ['Flexible Ø 70 mm (Alimentació / Monitor)', '20 m', '18 bar (Baixa Pressió)', '≈ 4,0 L/m (3,85 L/m)', '≈ 77 L (80 L) per tram de 20 m · Barcelona'],
            ['Manegot rígid Ø 110 mm (Aspiració camió)', '2 m (o 1,6 / 2,5 m)', 'Depressió (Buit) / 15 bar', '≈ 9,5 L/m', '≈ 19 L per manegot de 2 m · Raccord STORZ'],
            ['Manegot rígid Ø 80 mm (Motobomba)', '2 m (o 2,5 m)', 'Depressió (Buit)', '≈ 5,0 L/m', '≈ 10 L per manegot de 2 m · Raccord STORZ']
          ],
          footnote: 'Memoritza la regla 10 – 30 – 77 L (o 0,5 – 1,5 – 4 L/m) i les pressions 40 – 20 – 18 bar per a Ø25, Ø45 i Ø70!'
        },
        {
          type: 'mnemonic',
          title: 'Truc Mnemotècnic: Càlcul Mental Ràpid del Volum d’Aigua dins d’una Mànega i Peces d’Aigua',
          trick:
            "• Regla del '0,5 – 1,5 – 4 L/m': Cada metre de Ø25 té 0,5 L (×20m = 10 L); cada metre de Ø45 té 1,5 L (×20m = 30 L); cada metre de Ø70 té 4 L (×20m ≈ 77–80 L).\n• Peces de la instal·lació: Carxofa (filtre + vàlvula de peu antiretorn a l'aspiració) · Col·lector (2×Ø70 → 1 entrada bomba) · Bifurcació (1×Ø70 → 2×Ø45 o 1×Ø45 → 2×Ø25) · Reducció (70→45 o 45→25) · Tallacircuits (tanca el pas en línia sense anar al camió).",
          example:
            'Pregunta d’examen: Quants litres d’aigua es necessiten només per omplir una línia d’atac de 100 m (5 trams) de Ø45? 5 trams × 30 L/tram = 150 litres!'
        }
      ]
    },
    {
      pageNumber: 8,
      isFormulaSheet: true,
      shortLabel: 'Pàg. 8 · Formulari Final',
      title: 'Formulari Resum Final — Totes les Fórmules i Constants d’Hidràulica (Tema 13)',
      subtitle: 'Full de repàs immediat amb les equacions, lleis i xifres oficials del manual MAN.GRAL.009.',
      blocks: [
        {
          type: 'table',
          title: '1. Resum General de Fórmules d’Hidrostàtica, Hidrodinàmica i Càlcul de Bombes',
          subtitle: 'Totes les equacions d’examen agrupades i explicades',
          headers: ['Teorema / Àmbit', 'Fórmula Matemàtica', 'Significat i Unitats SI', 'Regla Ràpida de Bombers'],
          rows: [
            ['Pressió i Conversió', 'P = F / S', 'P en Pa (N/m²) · 1 bar = 100.000 Pa = 100 kPa', '1 bar ≈ 1 kgf/cm² ≈ 10,2 m.c.a. (càlcul: 10 m.c.a.)'],
            ['Pressió Absoluta', 'P_abs = P_atm + P_rel', 'P_atm = 1,013 bar (101.325 Pa = 10,33 m.c.a.)', 'Els manòmetres de bomba marquen sempre P_rel'],
            ['Teorema de Stevin', 'P_hidr = ρ · g · h', 'ρ_aigua = 1.000 kg/m³ · g = 9,81 m/s² · h (m)', '+1 bar per cada 10 m de columna vertical'],
            ['Principi de Pascal', 'F₁ / S₁ = F₂ / S₂', 'Premsa hidràulica (excarceració 630–720 bar)', 'F₂ = F₁ · (S₂/S₁) = F₁ · (R₂/R₁)²'],
            ['Aspiració Màxima', 'H_màx = P_atm / (ρ · g)', 'Teòrica a 0 m = 10,328 m · Pràctica = 7 a 8 m', 'Perd -0,129 m.c.a. per cada +100 m d’altitud'],
            ['Equació de Continuïtat', 'Q = V / t = S₁·v₁ = S₂·v₂', 'Q en m³/s (×60.000 = L/min) · S = π·D²/4', 'v₂ = v₁ · (D₁ / D₂)²'],
            ['Teorema de Bernoulli', 'P + ½·ρ·v² + ρ·g·h = ct.', 'Estàtica + Dinàmica (cinètica) + Geomètrica', 'Efecte Venturi: ↓ Secció ⇒ ↑↑ Velocitat ⇒ ↓↓ Pressió'],
            ['Velocitat de Torricelli', 'v = √(2·g·h) = √(2·P / ρ)', 'Velocitat de sortida per orifici o llança (m/s)', 'A PL = 6 bar (60 m.c.a.) ⇒ v ≈ 34,6 m/s'],
            ['Darcy-Weisbach', 'J = f · (L / D) · (v² / 2g)', 'Pèrdua de càrrega per fregament (J ∝ L · Q² / D⁵)', 'Si dupliques el cabal (2·Q) ⇒ la pèrdua fa ×4!'],
            ['Pressió en Bomba (PB)', 'P_B = P_L + ΔP_f ± ΔP_g', 'P_L = 6 bar · ΔP_f = fregament · ΔP_g = ± h/10', 'En Sèrie: ΔP se sumen | En Paral·lel: ΔP es divideix per 4']
          ],
          footnote: 'Recorda: La cavitació apareix quan la pressió absoluta dins del rodet baixa fins a la pressió de vapor de l’aigua (0,0316 bar a 25 °C).'
        },
        {
          type: 'table',
          title: '2. Quadre de Constants i Xifres Imprescindibles de Mànegues i Instal·lacions',
          subtitle: 'Valors numèrics exactes del manual MAN.GRAL.009',
          headers: ['Element / Concepte', 'Valor Oficial Exacte', 'Detall Tècnic Operatiu'],
          rows: [
            ['Mànega Ø 25 mm (20 m)', '40 bar | 0,5 L/m (10 L / tram)', 'Semirígida d’alta pressió (devanadora Pronto Socors)'],
            ['Mànega Ø 45 mm (20 m)', '20 bar | 1,5 L/m (30 L / tram)', 'Flexible de 4 capes per a atac interior (raccord Barcelona)'],
            ['Mànega Ø 70 mm (20 m)', '18 bar | 4,0 L/m (77 L / tram)', 'Flexible de 4 capes per a alimentació i monitors (Barcelona)'],
            ['Manegots d’aspiració', 'Ø 110 mm (camió) i Ø 80 mm (motobomba)', 'Rígids amb espiral i raccords STORZ (2 ganxos)'],
            ['Llances i Monitors', 'Llança = 6 bar | Monitor si Q > 500 L/min', 'Angle d’abast màxim real del monitor = 30° a 35°']
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't13-q1',
      difficulty: 'Fàcil',
      question: 'Segons el manual MAN.GRAL.009, quina és l’alçada màxima d’aspiració teòrica a nivell del mar (1 atm) i quina és l’alçada màxima d’aspiració pràctica o real en operativa?',
      options: [
        'Teòrica: 15,0 m | Pràctica: 10,33 m.',
        'Teòrica: 10,328 m (10,33 m) | Pràctica: entre 7 i 8 m.',
        'Teòrica: 8,0 m | Pràctica: entre 4 i 5 m.',
        'Teòrica: 20,0 m | Pràctica: 12 m.'
      ],
      correctIndex: 1,
      explanation: 'A 1 atm (101.325 Pa), l’atmosfera sosté una columna teòrica de 10,328 m d’aigua. Per pèrdues de càrrega, estanquitat i pressió de vapor, el límit pràctic real és de 7 a 8 m.'
    },
    {
      id: 't13-q2',
      difficulty: 'Mitjà',
      question: 'Quant disminueix aproximadament l’alçada màxima teòrica d’aspiració d’una bomba per cada 100 metres que pugem en altitud?',
      options: [
        'Disminueix 1,0 m.c.a. per cada 100 m.',
        'Disminueix 0,129 m.c.a. per cada 100 m (≈ 1,29 m per cada 1.000 m).',
        'Augmenta 0,129 m.c.a. per cada 100 m perquè l’aire és més fred.',
        'No varia amb l’altitud, només depèn de la potència del motor.'
      ],
      correctIndex: 1,
      explanation: 'Segons la taula del Capítol 3.4 del manual MAN.GRAL.009, la pressió atmosfèrica cau amb l’altitud a raó d’uns -0,129 m.c.a. per cada 100 m d’ascens.'
    },
    {
      id: 't13-q3',
      difficulty: 'Mitjà',
      question: 'Quina és la pressió nominal de treball i quants litres d’aigua caben aproximadament en un tram de 20 metres de mànega flexible de Ø 45 mm i de Ø 70 mm?',
      options: [
        'Ø45: 40 bar i 10 L | Ø70: 20 bar i 30 L.',
        'Ø45: 20 bar i ≈ 30 L (1,5 L/m) | Ø70: 18 bar i ≈ 77–80 L (4 L/m).',
        'Ø45: 18 bar i 45 L | Ø70: 12 bar i 70 L.',
        'Totes dues treballen a 40 bar i contenen 50 L.'
      ],
      correctIndex: 1,
      explanation: 'Taula 6.1 del manual: Ø25 = 40 bar i 0,5 L/m (10 L/20m); Ø45 = 20 bar i 1,5 L/m (≈30 L/20m); Ø70 = 18 bar i 4 L/m (≈77 L/20m).'
    },
    {
      id: 't13-q4',
      difficulty: 'Difícil',
      question: 'Segons l’equació de Darcy-Weisbach, què passa amb la pèrdua de càrrega (J) d’una instal·lació de mànegues si dupliquem el cabal d’aigua (Q × 2) mantenint el mateix diàmetre?',
      options: [
        'La pèrdua de càrrega es redueix a la meitat.',
        'La pèrdua de càrrega es duplica (× 2).',
        'La pèrdua de càrrega es multiplica per QUATRE (× 4), perquè creix amb el quadrat de la velocitat/cabal.',
        'La pèrdua de càrrega no depèn del cabal.'
      ],
      correctIndex: 2,
      explanation: 'Com que J ∝ v² (i v ∝ Q), en duplicar el cabal la velocitat es duplica i la pèrdua de càrrega es multiplica per 2² = 4.'
    },
    {
      id: 't13-q5',
      difficulty: 'Mitjà',
      question: 'Quin tipus de bomba d’encebament incorporen els nous vehicles BRP Scania segons el Capítol 5 del manual MAN.GRAL.009?',
      options: [
        'Una bomba centrífuga multicel·lular.',
        'Una bomba volumètrica alternativa de pistons axials.',
        'Una bomba peristàltica de tub.',
        'Un hidroerenjador d’efecte Venturi.'
      ],
      correctIndex: 1,
      explanation: 'El manual especifica a l’apartat 5.2.2 que el sistema d’encebament dels BRP Scania utilitza una bomba volumètrica alternativa de pistons axials per fer el buit.'
    },
    {
      id: 't13-q6',
      difficulty: 'Fàcil',
      question: 'Quina és la pressió de vapor de l’aigua a 25 °C i quin fenomen destructiu es produeix al rodet de la bomba quan la pressió absoluta cau fins a aquest valor?',
      options: [
        '0,0316 bar; es produeix la cavitació.',
        '1,013 bar; es produeix el cop d’ariet.',
        '6,0 bar; es produeix l’efecte Venturi.',
        '0,5 bar; es produeix el règim laminar.'
      ],
      correctIndex: 0,
      explanation: 'A 25 °C la pressió de vapor de l’aigua és de 0,0316 bar. Si la pressió absoluta dins la bomba baixa fins a aquest llindar, l’aigua bull en fred creant bombolles de vapor que implosionen contra el rodet (cavitació).'
    },
    {
      id: 't13-q7',
      difficulty: 'Mitjà',
      question: 'En una premsa hidràulica (Principi de Pascal), si l’èmbol de sortida té un RADI 3 vegades més gran que l’èmbol d’entrada (R₂ = 3·R₁), per quant es multiplica la força?',
      options: [
        'Per 3.',
        'Per 6.',
        'Per 9 (perquè la superfície depèn del quadrat del radi: 3² = 9).',
        'Per 27.'
      ],
      correctIndex: 2,
      explanation: 'Com que S = π·R², si R₂ = 3·R₁ aleshores S₂ = 9·S₁, i per tant F₂ = 9·F₁.'
    },
    {
      id: 't13-q8',
      difficulty: 'Mitjà',
      question: 'A partir de quin cabal i amb quin angle d’inclinació s’utilitzen els monitors per obtenir el màxim abast horitzontal real en l’aire?',
      options: [
        'A partir de 150 L/min i amb un angle de 45°.',
        'A partir de > 500 L/min i amb un angle d’entre 30° i 35°.',
        'A partir de 2.500 L/min i amb un angle de 60°.',
        'A partir de 250 L/min i amb un angle de 15°.'
      ],
      correctIndex: 1,
      explanation: 'Quan se superen els 500 L/min la força de reacció fa necessari un monitor, i a causa del fregament de l’aire l’abast màxim real s’obté entre 30° i 35° (no a 45°).'
    },
    {
      id: 't13-q9',
      difficulty: 'Difícil',
      question: 'Hem d’alimentar una llança a PL = 6 bar situada en una coberta a 30 m d’alçada amb 200 m de mànega (pèrdua J = 1,2 bar per cada 100 m). Quina pressió PB hem de donar a la bomba?',
      options: [
        '9,0 bar.',
        '10,2 bar.',
        '11,4 bar.',
        '7,2 bar.'
      ],
      correctIndex: 2,
      explanation: 'PB = PL (6 bar) + ΔPf (2 × 1,2 = 2,4 bar) + ΔPg (+30 m / 10 = +3,0 bar) = 6 + 2,4 + 3,0 = 11,4 bar.'
    },
    {
      id: 't13-q10',
      difficulty: 'Fàcil',
      question: 'Què és el Punt de Funcionament d’una instal·lació de bombament?',
      options: [
        'La pressió màxima que pot donar la bomba amb la vàlvula de sortida tancada (Q = 0).',
        'El punt d’intersecció entre la corba característica de la bomba i la corba característica de la instal·lació.',
        'El moment en què s’activa la bomba d’encebament.',
        'El cabal mínim abans que comenci la cavitació.'
      ],
      correctIndex: 1,
      explanation: 'El punt de funcionament (Q, P) és el punt d’equilibri on es tallen la corba descendent de la bomba i la corba parabòlica ascendent de pèrdues de la instal·lació.'
    }
  ]
};
