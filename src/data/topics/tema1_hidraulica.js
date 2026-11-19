export const tema1Hidraulica = {
  id: 'tema-1',
  number: 1,
  title: 'Hidrostàtica, Hidrodinàmica i Lleis dels Fluids',
  category: 'Física Aplicada i Hidràulica',
  estimatedMinutes: 45,
  importance: {
    title: 'Radar d\'Oposició: Hidràulica per a Bombers',
    frequency: 'Molt Alta (4-6 preguntes fixes a cada convocatòria)',
    summary:
      'Aquest tema és la columna vertebral dels problemes de càlcul a l\'examen oficial (Generalitat i Ajuntament de Barcelona). El tribunal combina preguntes teòriques sobre Venturi i Bernoulli amb problemes ràpids de pèrdues de càrrega, premsa de Pascal i pressió en bomba.',
    hotTopics: [
      'Càlcul mental de Pressió Hidrostàtica (P = ρ · g · h) i conversió directa metres columna d\'aigua (m.c.a.) ↔ bar ↔ kPa.',
      'Principi de Pascal aplicat a eines d\'excarceració (multiplicació de força F₁/S₁ = F₂/S₂).',
      'Equació de Continuïtat (Q = S · v) quan canvia el diàmetre de mànega (Ø25, Ø45, Ø70).',
      'Teorema de Bernoulli, Efecte Venturi en dosificadors d\'escumogen i Cop d\'Ariete.'
    ],
    traps: [
      'Confondre Pressió Absoluta amb Pressió Manomètrica (recorda: P_abs = P_man + P_atm).',
      'Oblidar que si el diàmetre es redueix a la meitat (r₂ = r₁/2), la secció es redueix a la QUARTA part i la velocitat es multiplica per 4 (relació quadràtica!).',
      'Sumar o restar malament la cota geomètrica quan la llança està per sota del camió bomba.'
    ]
  },
  // Paginació estricta (màxim 10 pàgines per tema; aquí 5 pàgines completes i riques per validar tots els components)
  pages: [
    {
      pageNumber: 1,
      title: 'Fonaments d\'Hidrostàtica i Unitats de Pressió',
      subtitle: 'Densitat, pes específic, pressió hidrostàtica i conversions clau d\'examen.',
      blocks: [
        {
          type: 'text',
          heading: '1.1. Pressió Hidrostàtica i Teorema Fundamental',
          paragraphs: [
            'La hidrostàtica estudia els fluids en equilibri (en repòs). En qualsevol punt a l\'interior d\'un líquid en repòs, el pes de la columna de líquid que té a sobre exerceix una pressió que s\'anomena Pressió Hidrostàtica.',
            'El Teorema Fundamental de la Hidrostàtica estableix que la diferència de pressió entre dos punts d\'un mateix fluid homogeni depèn exclusivament de la seva densitat (ρ), de la gravetat (g) i de la diferència de profunditat o alçada (Δh), independentment de la forma del recipient (Paradoxa Hidrostàtica de Stevin).'
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Fórmula de la Pressió Hidrostàtica',
          formula: 'P = ρ · g · h   |   P_abs = P_atm + (ρ · g · h)',
          variables: [
            { symbol: 'P', meaning: 'Pressió hidrostàtica en Pascals (Pa = N/m²)' },
            { symbol: 'ρ', meaning: 'Densitat del fluid (Aigua dolça = 1.000 kg/m³)' },
            { symbol: 'g', meaning: 'Acceleració de la gravetat (≈ 9,81 m/s²; en càlcul ràpid = 10 m/s²)' },
            { symbol: 'h', meaning: 'Profunditat o alçada de la columna de líquid en metres (m)' }
          ],
          trick:
            'Per a exàmens sense calculadora: Cada 10 metres de columna d\'aigua (10 m.c.a.) equivalen exactament a 1 bar (o 100.000 Pa = 100 kPa). Si puges 30 metres d\'edifici, perds 3 bars només per gravetat!',
          example: 'A 25 m de profunditat en un pantà: P_man ≈ 2,5 bar | P_abs = 2,5 + 1 = 3,5 bar.'
        },
        {
          type: 'easy',
          title: 'La Paradoxa Hidrostàtica (Per què no importa l\'amplada del dipòsit?)',
          metaphor:
            'Imagina que estàs al fons d\'una piscina olímpica a 3 metres de profunditat, o dins d\'un tub vertical estret també a 3 metres sota l\'aigua. On et taparan més les orelles?',
          explanation:
            'Exactament igual als dos llocs! Les teves orelles només suporten la "torre vertical" d\'aigua que tenen just a sobre. Els milions de litres dels costats de la piscina olímpica s\'aguanten contra el terra i les parets, no sobre el teu cap.',
          takeaway: 'La pressió al fons depèn NOMÉS de l\'alçada vertical (h), mai del volum total d\'aigua.'
        },
        {
          type: 'table',
          title: 'Taula Oficial d\'Equivalències de Pressió (Memorització Obligatòria)',
          subtitle: 'Valors que cauen literalment als tests de Bombers de la Generalitat i BCN',
          headers: ['Unitat de Pressió', 'Equivalència en Pascals (SI)', 'Equivalència en Bar', 'Columna de Fluid Equivalent'],
          rows: [
            ['1 Bar', '100.000 Pa (10⁵ Pa / 100 kPa)', '1 bar', '≈ 10,2 m.c.a. (càlcul ràpid: 10 m.c.a.)'],
            ['1 Atmosfera (atm)', '101.325 Pa (101,325 kPa)', '1,01325 bar', '760 mmHg (Torricelli) / 10,33 m.c.a.'],
            ['1 kgf/cm² (Atm. tècnica)', '98.066,5 Pa (≈ 98,1 kPa)', '0,981 bar (≈ 1 bar)', '10,00 m.c.a. exactes'],
            ['1 m.c.a. (metre col. aigua)', '9.806,65 Pa (≈ 10 kPa)', '0,0981 bar (≈ 0,1 bar)', '1 m d\'aigua a 4 °C'],
            ['1 PSI (lliura/polzada²)', '6.894,76 Pa (≈ 6,89 kPa)', '0,0689 bar (1 bar ≈ 14,5 PSI)', '≈ 0,70 m.c.a.']
          ],
          footnote: 'Truc: Activa el botó "Mode Memorització" de dalt a la dreta per tapar les xifres i repassar!'
        }
      ]
    },
    {
      pageNumber: 2,
      title: 'Principi de Pascal i Principi d\'Arquimedes',
      subtitle: 'Multiplicació de forces en eines hidràuliques de rescat i flotabilitat.',
      blocks: [
        {
          type: 'text',
          heading: '2.1. Principi de Pascal i la Premsa Hidràulica',
          paragraphs: [
            'Enunciat de Blaise Pascal: "Tota pressió exercida sobre un fluid incompressible tancat dins d\'un recipient de parets indeformables es transmet amb la mateixa intensitat en totes les direccions i a tots els punts del fluid."',
            'Aquesta és la base física de les eines hidràuliques d\'excarceració (cisalles, separadors i cilindres RAM que treballen fins a 700 bar): aplicant una força petita en un èmbol de secció petita, obtenim una força descomunal en un èmbol de secció gran.'
          ]
        },
        {
          type: 'diagram',
          title: 'Multiplicador Hidràulic de Pascal',
          diagramType: 'pascal',
          caption: 'Com que la pressió es manté constant (P₁ = P₂), si la superfície S₂ és 10 vegades més gran que S₁, la força F₂ es multiplica per 10 (a canvi de recórrer 10 vegades menys distància: F₁·d₁ = F₂·d₂).'
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Truc del Ràdio al Quadrat en Premses Hidràuliques',
          acronym: 'Relació de Forces = ( S₂ / S₁ ) = ( R₂ / R₁ )² = ( D₂ / D₁ )²',
          trick:
            'Si a l\'examen et donen el RÀDIO o el DIÀMETRE dels pistons en comptes de la superfície (S), recorda elevar al quadrat la proporció! Si el pistó gran té el TRIPLE de radi que el petit, la força es multiplica per 9 (3² = 9), no pas per 3.',
          example: 'Pistó 1 (r₁ = 2 cm, F₁ = 50 N) i Pistó 2 (r₂ = 10 cm). Proporció r₂/r₁ = 5 ⇒ Força F₂ = 50 · 5² = 1.250 N.'
        },
        {
          type: 'easy',
          title: 'Principi d\'Arquimedes sense embolics',
          metaphor:
            'Un cos submergit rep una empenta cap amunt (E) exactament igual al PES del líquid que ha fet fora del seu lloc.',
          explanation:
            'Fórmula d\'Empenta: E = ρ_líquid · V_submergit · g. Fixa\'t que l\'empenta depèn de la densitat del LÍQUID i del volum submergit del cos, MAI de la massa o densitat del cos (si submergeixes del tot 1 litre de plom i 1 litre d\'alumini dins d\'aigua, tots dos reben exactament la mateixa empenta E!).',
          takeaway: 'Un cos flota si ρ_cos < ρ_líquid. El percentatge de volum submergit quan flota és (ρ_cos / ρ_líquid) · 100.'
        }
      ]
    },
    {
      pageNumber: 3,
      title: 'Hidrodinàmica: Cabal i Equació de Continuïtat',
      subtitle: 'Moviment dels fluids en conduccions, règim laminar vs turbulent i diàmetres de mànega.',
      blocks: [
        {
          type: 'text',
          heading: '3.1. Cabal Volumètric (Q) i Conservació de la Massa',
          paragraphs: [
            'El cabal volumètric (Q) és el volum de fluid que travessa una secció transversal de canonada o mànega per unitat de temps. En el Sistema Internacional es mesura en m³/s, però en operativa de bombers treballem sempre en litres/minut (L/min) o m³/h.',
            'Per a un fluid incompressible (com l\'aigua) que circula per una conducció sense fuites, el cabal que entra per una secció 1 ha de ser idèntic al que surt per la secció 2: això és l\'Equació de Continuïtat.'
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Equació de Continuïtat i Velocitat del Fluid',
          formula: 'Q = V / t = S₁ · v₁ = S₂ · v₂   ⇒   v₂ = v₁ · (D₁ / D₂)²',
          variables: [
            { symbol: 'Q', meaning: 'Cabal (m³/s). Conversió clau: 1 m³/s = 1.000 L/s = 60.000 L/min' },
            { symbol: 'S', meaning: 'Secció transversal circular: S = π · r² = (π · D²) / 4' },
            { symbol: 'v', meaning: 'Velocitat mitjana del fluid (m/s)' },
            { symbol: 'Re', meaning: 'Nombre de Reynolds: Re < 2.000 (Laminar) | Re > 4.000 (Turbulent)' }
          ],
          trick:
            'Quan estrenys la sortida a la llança per reduir el diàmetre a la meitat (D₂ = D₁ / 2), l\'aigua ha de sortir 4 VEGADES més ràpida (2² = 4) perquè pugui passar el mateix cabal.',
          example: 'Si per una mànega passa a 2 m/s i la redueixes a un broquet amb 1/3 del diàmetre: v₂ = 2 · 3² = 18 m/s.'
        },
        {
          type: 'table',
          title: 'Mànegues Reglamentàries de Bombers i Cabals Operatius Típics',
          subtitle: 'Dades tècniques habituals d\'operativa d\'extinció i pèrdues de càrrega orientatives',
          headers: ['Diàmetre Mànega', 'Ús Operatiu Principal', 'Cabal Habitual (L/min)', 'Pèrdua de Càrrega (per 20m)'],
          rows: [
            ['Ø 25 mm (Semirígida / Forestal)', 'Atac ràpid forestal i BIE 25', '100 - 150 L/min', '≈ 1,5 - 2,5 bar / 20m'],
            ['Ø 45 mm (Flexible Urbana)', 'Línia d\'atac interior en edificis i indústries', '250 - 400 L/min', '≈ 0,8 - 1,5 bar / 20m'],
            ['Ø 70 mm (Flexible Alimentació)', 'Línia nodrissa (hidrant → camió o bomba → bifurcació)', '800 - 1.200 L/min', '≈ 0,3 - 0,6 bar / 20m'],
            ['Ø 100 / 110 mm (Mànega / Mangot)', 'Aspiració i grans cabals d\'alimentació industrial', '1.500 - 3.000 L/min', '< 0,2 bar / 20m']
          ],
          footnote: 'Recorda: A igual cabal, la pèrdua de càrrega és inversament proporcional a la 5a potència del diàmetre (ΔP ∝ 1/D⁵)!'
        }
      ]
    },
    {
      pageNumber: 4,
      title: 'Teorema de Bernoulli, Efecte Venturi i Dosificadors',
      subtitle: 'Conservació de l\'energia mecànica en fluids ideals i aplicació en escumògens.',
      blocks: [
        {
          type: 'text',
          heading: '4.1. El Trinomini de Bernoulli',
          paragraphs: [
            'Daniel Bernoulli va demostrar que en un fluid ideal (sense viscositat ni fregament) que circula en règim estacionari, la suma de tres formes d\'energia per unitat de volum es manté constant al llarg de qualsevol línia de corrent: Energia de Pressió Estàtica (P) + Energia Cinètica (½·ρ·v²) + Energia Potencial Gravitatòria (ρ·g·z) = Constant.',
            'Quan el conducte és horitzontal (z₁ = z₂), qualsevol augment de la velocitat del fluid provoca necessàriament una disminució de la pressió estàtica. Aquest fenomen s\'anomena Efecte Venturi.'
          ]
        },
        {
          type: 'diagram',
          title: 'Efecte Venturi i Succió al Proporcionador d\'Escuma',
          diagramType: 'venturi',
          caption: 'En passar per la gola d\'estrenyiment (A₂), l\'aigua s\'accelera bruscament (↑↑ v₂) i la seva pressió estàtica cau per sota de la pressió atmosfèrica (↓↓ P₂), creant un buit que aspira l\'escumogen del bidó.'
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Equació de Bernoulli i Teorema de Torricelli',
          formula: 'P + ½·ρ·v² + ρ·g·z = cte   |   v_sortida = √(2 · g · h)',
          variables: [
            { symbol: 'P', meaning: 'Pressió estàtica (Pa)' },
            { symbol: '½·ρ·v²', meaning: 'Pressió dinàmica deguda a la velocitat (Pa)' },
            { symbol: 'ρ·g·z', meaning: 'Pressió geomètrica o potencial segons cota z (Pa)' },
            { symbol: '√(2·g·h)', meaning: 'Velocitat de sortida per un orifici a profunditat h (Torricelli)' }
          ],
          trick:
            'Per calcular la velocitat de Torricelli de memòria amb g ≈ 10 m/s²: multiplica l\'alçada h per 20 i fes l\'arrel quadrada! Exemple: forat a h = 5 m sota el nivell de la cisterna ⇒ v = √(20 · 5) = √100 = 10 m/s!',
          example: 'Si el nivell d\'aigua és a h = 20 m sobre l\'orifici: v = √(2 · 10 · 20) = √400 = 20 m/s.'
        }
      ]
    },
    {
      pageNumber: 5,
      title: 'Fluids Reals: Pèrdues de Càrrega, Pressió en Bomba i Cop d\'Ariete',
      subtitle: 'Fórmula de Darcy-Weisbach, cavitació, NPSH i càlcul operatiu d\'instal·lacions.',
      blocks: [
        {
          type: 'text',
          heading: '5.1. Equació Operativa del Bombero Motorista',
          paragraphs: [
            'En la realitat, l\'aigua té viscositat i frega contra les parets interiors de la mànega i els raccords Barcelona. Aquesta energia perduda en forma de calor s\'anomena Pèrdua de Càrrega (ΔP_r o J).',
            'Segons l\'equació de Darcy-Weisbach, la pèrdua de càrrega és directament proporcional a la longitud de la mànega (L) i al QUADRAT del cabal (Q²) o velocitat (v²), i inversament proporcional al diàmetre (D).'
          ]
        },
        {
          type: 'diagram',
          title: 'Balanç de Pressió de la Bomba a la Llança en Alçada',
          diagramType: 'fire_elevation',
          caption: 'El motorista del camió ha de tarar la Pressió en Bomba (PB) sumant la pressió requerida a la punta de llança (PL), les pèrdues per fregament a les mànegues (ΔP_freg) i el desnivell geomètric (+1 bar per cada 10 m de pujada).'
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Fórmula de Pressió en Bomba (PB) i Llei Quadràtica del Cabal',
          formula: 'PB = PL + ΔP_fregament ± ΔP_geomètrica   |   ΔP₂ = ΔP₁ · (Q₂ / Q₁)²',
          variables: [
            { symbol: 'PB', meaning: 'Pressió de sortida al col·lector de la bomba del camió (bar)' },
            { symbol: 'PL', meaning: 'Pressió de treball a la llança (típicament 6-7 bar en baixa pressió)' },
            { symbol: 'ΔP_freg', meaning: 'Pèrdua de càrrega total de la línia de mànegues i bifurcacions (bar)' },
            { symbol: 'ΔP_geom', meaning: '+0,1 bar per cada metre que puja (-0,1 bar/m si la llança baixa)' }
          ],
          trick:
            'Pregunta estrella d\'examen: "Si dupliquem el cabal (Q₂ = 2·Q₁) per la mateixa mànega, què passa amb la pèrdua de càrrega?" Es multiplica per QUATRE (2² = 4)! Si tripliquem el cabal, es multiplica per NOU (3² = 9).',
          example: 'Llança a 7 bar, a 20 m d\'alçada (+2 bar) i 4 trams de mànega que perden 0,75 bar cadascun (+3 bar) ⇒ PB = 7 + 2 + 3 = 12 bar.'
        },
        {
          type: 'easy',
          title: 'Diferència entre Cop d\'Ariete i Cavitació (No els confonguis mai!)',
          metaphor:
            'El Cop d\'Ariete és una "frenada en sec d\'un tren d\'aigua", mentre que la Cavitació és "aigua que bull en fred per falta de pressió i rosega les pales de la bomba".',
          explanation:
            '1) COP D\'ARIETE: Sobrepressió violenta (ona de xoc) quan tanques una llança o vàlvula de cop. Es prevé tancant les llances i hidrants LENTAMENT.\n2) CAVITACIÓ: Quan la pressió a l\'aspiració de la bomba cau per sota de la Pressió de Vapor del líquid, es formen bombolles de vapor que implosionen contra el rodet metàl·lic i el destrossen. Per això l\'alçada teòrica màxima d\'aspiració és 10,33 m (i a la pràctica 7-8 m).',
          takeaway: 'Tancar ràpid = Cop d\'Ariete (rebenta mànega). Aspirar des de massa avall o amb aigua calenta = Cavitació (trenca rodet de bomba).'
        }
      ]
    }
  ],
  // Mòdul d'Autoavaluació: 10 preguntes completes amb etiquetes de dificultat (Fàcil, Mitjà, Difícil)
  quiz: [
    {
      id: 'q1-1',
      difficulty: 'Fàcil',
      question: 'Quina pressió manomètrica aproximada suporta un bussejador de rescat submergit a 30 metres de profunditat en un embassament d\'aigua dolça (prenent g ≈ 10 m/s²)?',
      options: [
        '1,5 bar (150 kPa)',
        '3 bar (300 kPa)',
        '4 bar (400 kPa)',
        '30 bar (3.000 kPa)'
      ],
      correctIndex: 1,
      explanation: 'La pressió manomètrica (o hidrostàtica relativa) és P = ρ·g·h = 1.000 · 10 · 30 = 300.000 Pa = 300 kPa = 3 bar (1 bar per cada 10 m.c.a.). Atenció: 4 bar seria la pressió ABSOLUTA (sumant 1 bar atmosfèric).'
    },
    {
      id: 'q1-2',
      difficulty: 'Fàcil',
      question: 'Segons el Principi de Pascal, en un sistema hidràulic d\'excarceració tancat i en equilibri, què es transmet amb la mateixa intensitat en totes les direccions?',
      options: [
        'La força mecànica aplicada (F)',
        'La velocitat del fluid (v)',
        'La pressió exercida sobre el fluid (P)',
        'El cabal volumètric (Q)'
      ],
      correctIndex: 2,
      explanation: 'El Principi de Pascal estableix que la PRESSIÓ (P = F/S) aplicada en un punt d\'un fluid incompressible confinat es transmet íntegrament a tots els punts del fluid i a les parets del recipient.'
    },
    {
      id: 'q1-3',
      difficulty: 'Mitjà',
      question: 'Una premsa hidràulica té dos pistons circulars. El pistó petit té un radi de 3 cm i el pistó gran té un radi de 12 cm. Si apliquem una força de 100 N al pistó petit, quina força obtenim al pistó gran?',
      options: [
        '400 N',
        '800 N',
        '1.200 N',
        '1.600 N'
      ],
      correctIndex: 3,
      explanation: 'La proporció de radis és R₂ / R₁ = 12 / 3 = 4. Com que l\'àrea del cercle depèn del radi al quadrat (S = π·r²), la superfície S₂ és 4² = 16 vegades més gran. Per tant: F₂ = 100 N · 16 = 1.600 N.'
    },
    {
      id: 'q1-4',
      difficulty: 'Mitjà',
      question: 'Per una mànega horitzontal circula aigua a una velocitat de 3 m/s. Si connectem una reducció que disminueix el diàmetre interior del conducte a la meitat (D₂ = D₁ / 2) mantenint el mateix cabal, quina serà la nova velocitat de l\'aigua?',
      options: [
        '6 m/s',
        '9 m/s',
        '12 m/s',
        '1,5 m/s'
      ],
      correctIndex: 2,
      explanation: 'Segons l\'Equació de Continuïtat (S₁·v₁ = S₂·v₂), si el diàmetre es redueix a la meitat, l\'àrea de la secció es redueix a la quarta part (S₂ = S₁ / 4). Per conservar el cabal, la velocitat es multiplica per 4: v₂ = 3 m/s · 4 = 12 m/s.'
    },
    {
      id: 'q1-5',
      difficulty: 'Fàcil',
      question: 'En el proporcionador (dosificador) d\'escuma per Efecte Venturi que fem servir als parcs de bombers, què passa a l\'estrenyiment interior del tub?',
      options: [
        'La velocitat disminueix i la pressió estàtica augmenta per empènyer l\'escumogen.',
        'La velocitat augmenta i la pressió estàtica disminueix, creant una depressió que aspira l\'escumogen.',
        'Tant la velocitat com la pressió estàtica augmenten simultàniament.',
        'La pressió dinàmica s\'anul·la completament per evitar la cavitació.'
      ],
      correctIndex: 1,
      explanation: 'Pel Teorema de Bernoulli (P + ½·ρ·v² = cte en tub horitzontal), a la gola d\'estrenyiment la velocitat creix (per continuïtat) i la pressió estàtica cau, generant l\'efecte de succió.'
    },
    {
      id: 'q1-6',
      difficulty: 'Mitjà',
      question: 'Hem d\'atacar un incendi en un pis situat a 40 metres d\'alçada respecte a l\'autobomba. Volem 7 bar de pressió a la punta de llança i sabem que la instal·lació de mànegues té unes pèrdues de càrrega totals per fregament de 2,5 bar. A quina pressió (PB) ha de treballar la bomba?',
      options: [
        '9,5 bar',
        '11,5 bar',
        '13,5 bar',
        '15,5 bar'
      ],
      correctIndex: 2,
      explanation: 'Apliquem la fórmula: PB = PL + ΔP_fregament + ΔP_geomètrica. La pèrdua geomètrica per pujar 40 m és 40 / 10 = 4 bar. Per tant: PB = 7 + 2,5 + 4 = 13,5 bar.'
    },
    {
      id: 'q1-7',
      difficulty: 'Difícil',
      question: 'En una línia de mànega de Ø 45 mm amb un cabal de 200 L/min es produeix una pèrdua de càrrega per fregament de 1,2 bar. Si el punta de llança obre el selector de cabal a 400 L/min per la mateixa línia, quina serà la nova pèrdua de càrrega?',
      options: [
        '2,4 bar',
        '3,6 bar',
        '4,8 bar',
        '1,2 bar (només depèn de la longitud)'
      ],
      correctIndex: 2,
      explanation: 'La pèrdua de càrrega és proporcional al QUADRAT del cabal (ΔP ∝ Q²). En duplicar el cabal de 200 a 400 L/min (factor 2), la pèrdua de càrrega es multiplica per 2² = 4: 1,2 bar · 4 = 4,8 bar.'
    },
    {
      id: 'q1-8',
      difficulty: 'Difícil',
      question: 'Un dipòsit obert a l\'atmosfera té un petit orifici de fuita situat a 5 metres per sota del nivell lliure de l\'aigua. Aplicant el Teorema de Torricelli i prenent g = 10 m/s², amb quina velocitat surt el raig d\'aigua?',
      options: [
        '5 m/s',
        '10 m/s',
        '14,14 m/s',
        '20 m/s'
      ],
      correctIndex: 1,
      explanation: 'Segons el Teorema de Torricelli: v = √(2 · g · h) = √(2 · 10 · 5) = √100 = 10 m/s.'
    },
    {
      id: 'q1-9',
      difficulty: 'Mitjà',
      question: 'Quin fenomen destructiu es produeix a l\'interior del rodet d\'una bomba centrífuga quan la pressió absoluta en l\'aspiració baixa per sota de la pressió de vapor de l\'aigua?',
      options: [
        'Cop d\'Ariete',
        'Cavitació',
        'Règim laminar de Poiseuille',
        'Paradoxa Hidrostàtica de Stevin'
      ],
      correctIndex: 1,
      explanation: 'La cavitació passa quan la pressió del líquid cau per sota de la seva pressió de vapor, formant microbombolles de vapor que implosionen violentament quan arriben a la zona d\'alta pressió del rodet.'
    },
    {
      id: 'q1-10',
      difficulty: 'Difícil',
      question: 'Submergim completament dins d\'aigua (ρ = 1.000 kg/m³) un bloc metàl·lic massís de volum 0,02 m³ i massa 50 kg. Prenent g = 10 m/s², quin serà el seu Pes Aparent dins de l\'aigua?',
      options: [
        '200 N',
        '300 N',
        '500 N',
        '700 N'
      ],
      correctIndex: 1,
      explanation: '1) Pes real (P) = m · g = 50 kg · 10 m/s² = 500 N.\n2) Empenta d\'Arquimedes (E) = ρ_aigua · V_submergit · g = 1.000 · 0,02 · 10 = 200 N.\n3) Pes Aparent = P - E = 500 N - 200 N = 300 N.'
    }
  ]
};
