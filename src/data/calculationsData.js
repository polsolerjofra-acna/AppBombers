export const CALCULATION_SECTIONS = [
  {
    id: 'calc-tema-9',
    topicNumber: 9,
    shortTitle: 'T9 · Física i Mecànica',
    title: 'Tema 9 · Física, Cinemàtica, Dinàmica i Màquines Simples',
    subtitle: 'Fórmules d\'examen, trucs de càlcul mental i problemes resolts pas a pas',
    color: 'blue',
    formulas: [
      {
        name: 'Conversió km/h ↔ m/s',
        formula: 'v (m/s) = v (km/h) ÷ 3,6  |  v (km/h) = v (m/s) × 3,6',
        units: '1 m/s = 3,6 km/h',
        when: 'Sempre que mesclis velocitats en km/h amb distàncies en metres o temps en segons.'
      },
      {
        name: 'MRUA (Acceleració i Frenada)',
        formula: 'v = v₀ + a·t  |  Δx = v₀·t + ½·a·t²  |  v² = v₀² + 2·a·Δx',
        units: 'a (m/s²), t (s), Δx (m)',
        when: 'Per calcular distància de frenada, caiguda lliure (a = g ≈ 9,81 o 10 m/s²) o temps d\'aturada.'
      },
      {
        name: 'Pitàgores i Trigonometria (Autoescala)',
        formula: 'h² = a² + b²  |  sin(α) = oposat / hipotenusa  |  cos(α) = adjacent / hipotenusa',
        units: 'Angles típics: 30°, 45°, 60°',
        when: 'Per saber fins a quina finestra arriba l\'autoescala o la tensió en tirolines/polispasts.'
      },
      {
        name: 'Força, Pes i Moment (Palanca)',
        formula: 'F = m·a  |  P = m·g  |  M = F · d  |  F₁ · d₁ = F₂ · d₂',
        units: '1 daN ≈ 1 kgf ≈ 10 N · Moment en N·m',
        when: 'Palanques de rescat, estabilització d\'autoescales i càlcul de càrregues.'
      },
      {
        name: 'Energia, Treball i Potència',
        formula: 'Ec = ½·m·v²  |  Ep = m·g·h  |  W = F·d·cos(α)  |  P = W / t = F·v',
        units: 'Energia/Treball en J (Joules) · Potència en W (Watts)',
        when: 'Impactes de vehicles, energia potencial d\'aigua en altura o potència de bombes/cabrestants.'
      },
      {
        name: 'Polispasts i Avantatge Mecànic',
        formula: 'F_aplicada = Càrrega / n (polispast ideal)',
        units: 'n = nombre de trams de corda que aguanten la càrrega mòbil',
        when: 'Rescat vertical i tracció de càrregues pesants.'
      }
    ],
    mentalTips: [
      {
        title: 'Truc del ÷ 3,6 i × 3,6 sense calculadora',
        tip: 'Per multiplicar per 3,6: multiplica per 3 i suma la cinquena part del resultat (o divideix per 10 i multiplica per 36). Per passar de km/h a m/s ràpidament: 36→10, 54→15, 72→20, 90→25, 108→30, 126→35!',
        example: '108 km/h: 108 = 3 × 36 → com que 36 km/h = 10 m/s, 108 km/h = 30 m/s exactes.'
      },
      {
        title: 'Triangles màgics 3-4-5 i 5-12-13',
        tip: 'Els examinadors gairebé sempre posen múltiples de 3-4-5 (6-8-10, 9-12-15, 12-16-20, 15-20-25) per no haver de fer arrels quadrades lletges.',
        example: 'Autoescala de 25 m recolzada a 15 m de la façana: 25 = 5×5 i 15 = 3×5 → l\'alçada és 4×5 = 20 m al cap!'
      },
      {
        title: 'Velocitat mitjana per calcular frenades en 5 segons',
        tip: 'Si un camió frena fins a aturar-se (v_final = 0) en un temps t, no facis ½·a·t²! Fes Δx = (v_inicial / 2) × t.',
        example: 'Frenar des de 20 m/s fins a 0 en 4 s → velocitat mitjana = 10 m/s → 10 × 4 = 40 metres.'
      },
      {
        title: 'Regla del quadrat (v²) en corbes i frenades',
        tip: 'Com que tant Ec = ½mv² com Fc = mv²/R i Δx = v₀²/(2a) porten v², si DOBLES la velocitat, la distància de frenada i la força centrífuga es MULTIPLIQUEN PER 4 (no per 2!).',
        example: 'Passar de 50 a 100 km/h multiplica per 4 la distància de frenada.'
      }
    ],
    problems: [
      {
        id: 'p-t9-1',
        title: 'Autoescala en façana (Pitàgores ràpid)',
        statement: 'Un vehicle autoescala té una escala desplegada de 25 m i s\'estaciona de manera que la base de l\'escala queda a 7 m de la façana (en pla). Si la base gira a 2 m del terra, a quina alçada total arriba la punta?',
        hint: 'Busca la terna pitagòrica 7 - 24 - 25 i recorda sumar l\'alçada de la torreta!',
        options: ['26 m', '24 m', '22 m', '27 m'],
        correctIndex: 0,
        solutionSteps: [
          '1. Triangle rectangle: hipotenusa = 25 m, catet horitzontal = 7 m.',
          '2. Per Pitàgores: alçada = √(25² - 7²) = √(625 - 49) = √576 = 24 m (terna clàssica 7-24-25).',
          '3. Sumem els 2 m d\'alçada de la base del camió: 24 + 2 = 26 m.'
        ]
      },
      {
        id: 'p-t9-2',
        title: 'Distància de frenada d\'una autobomba',
        statement: 'Una BUP circula a 72 km/h i frena uniformement fins a aturar-se completament en 5 segons. Quina distància ha recorregut durant la frenada?',
        hint: 'Passa 72 km/h a m/s i multiplica per la velocitat mitjana (v₀/2).',
        options: ['50 m', '100 m', '72 m', '36 m'],
        correctIndex: 0,
        solutionSteps: [
          '1. 72 km/h ÷ 3,6 = 20 m/s.',
          '2. Com que frena uniformement de 20 m/s a 0 m/s, la velocitat mitjana és (20 + 0) / 2 = 10 m/s.',
          '3. Distància = 10 m/s × 5 s = 50 metres.'
        ]
      },
      {
        id: 'p-t9-3',
        title: 'Palanca de 1r gènere per aixecar una llosa',
        statement: 'Volem aixecar una llosa de 600 kg amb una barra rígida de 3 m. Col·loquem el punt de suport (fulcre) a 0,5 m de la llosa. Quina força mínima (en kgf / daN) hem de fer a l\'altre extrem?',
        hint: 'Llei de la palanca: F₁ · d₁ = F₂ · d₂. Compte: d₂ = 3 - 0,5 = 2,5 m!',
        options: ['120 kgf (120 daN)', '100 kgf (100 daN)', '150 kgf (150 daN)', '200 kgf (200 daN)'],
        correctIndex: 0,
        solutionSteps: [
          '1. Braç de la càrrega (d₁) = 0,5 m. Braç de potència (d₂) = 3 - 0,5 = 2,5 m.',
          '2. Relació de braços: 2,5 / 0,5 = 5 (multipliquem la força × 5).',
          '3. Força necessària = 600 kgf ÷ 5 = 120 kgf (≈ 120 daN ≈ 1.200 N).'
        ]
      },
      {
        id: 'p-t9-4',
        title: 'Polispast en rescat vertical',
        statement: 'Hem d\'hissar una llitera amb ferit (massa total 120 kg) amb un polispast 4:1 ideal (4 trams de corda suporten la càrrega mòbil). Si menyspreem el fregament (g = 10 m/s²), quina força ha de fer el bomber?',
        hint: 'Divideix el pes (en N o daN) pel factor del polispast.',
        options: ['300 N (30 daN)', '480 N (48 daN)', '240 N (24 daN)', '600 N (60 daN)'],
        correctIndex: 0,
        solutionSteps: [
          '1. Pes total = 120 kg × 10 m/s² = 1.200 N (o 120 daN).',
          '2. Polispast 4:1 divideix la força per 4: 1.200 N ÷ 4 = 300 N (30 daN).'
        ]
      },
      {
        id: 'p-t9-5',
        title: 'Energia cinètica i impacte',
        statement: 'Quina energia cinètica té un vehicle de 1.000 kg que circula a 36 km/h, i en quant es multiplica si passa a 72 km/h?',
        hint: '36 km/h = 10 m/s. Calcula ½·m·v² i recorda l\'efecte del quadrat.',
        options: [
          '50.000 J (50 kJ); a 72 km/h es multiplica per 4 (200 kJ)',
          '100.000 J (100 kJ); a 72 km/h es multiplica per 2 (200 kJ)',
          '5.000 J (5 kJ); a 72 km/h es multiplica per 4 (20 kJ)',
          '50.000 J (50 kJ); a 72 km/h es multiplica per 2 (100 kJ)'
        ],
        correctIndex: 0,
        solutionSteps: [
          '1. 36 km/h = 10 m/s.',
          '2. Ec = ½ × 1.000 × 10² = 500 × 100 = 50.000 J (50 kJ).',
          '3. Com que 72 km/h és el doble (20 m/s), l\'energia va amb v²: 2² = 4 vegades més (200 kJ).'
        ]
      }
    ]
  },
  {
    id: 'calc-tema-10',
    topicNumber: 10,
    shortTitle: 'T10 · Química i Gasos',
    title: 'Tema 10 · Química, Lleis dels Gasos, ERA i Termoquímica',
    subtitle: 'Conversions a Kelvin, densitat relativa respecte a l\'aire i càlculs de calor',
    color: 'emerald',
    formulas: [
      {
        name: 'Escala Absoluta (Kelvin)',
        formula: 'T (K) = T (°C) + 273,15  (en càlcul mental: + 273)',
        units: 'Sempre en Kelvin (K) a les lleis dels gasos!',
        when: 'OBLIGATORI abans d\'aplicar Charles, Gay-Lussac o PV = nRT.'
      },
      {
        name: 'Llei General dels Gasos (Boyle, Charles, Gay-Lussac)',
        formula: '(P₁ · V₁) / T₁ = (P₂ · V₂) / T₂',
        units: 'P en bar o atm (absolutes!), V en litres, T en K',
        when: 'Canvis de pressió/volum/temperatura en ampolles ERA o cisternes.'
      },
      {
        name: 'Autonomia i Aire Lliure d\'Ampolla ERA',
        formula: 'V_aire = P_manomètrica (bar) × V_ampolla (L)  |  t (min) = V_aire ÷ Consum (L/min)',
        units: 'Ampolla estàndard: 6 L a 300 bar = 1.800 L · Consum mitjà: 40–50 L/min',
        when: 'Calcular minuts d\'aire disponibles en intervenció.'
      },
      {
        name: 'Densitat Relativa d\'un Gas respecte a l\'Aire',
        formula: 'd_rel = Massa Molar gas (M) ÷ 29',
        units: 'M_aire ≈ 29 g/mol · d < 1 (puja) · d > 1 (s\'acumula a terra)',
        when: 'Preveure si una fuita de gas puja al sostre o s\'escampa per clavegueres/soterranis.'
      },
      {
        name: 'Calor Sensible vs Calor Latent',
        formula: 'Q_sensible = m · c · ΔT  |  Q_latent = m · L',
        units: 'Aigua: c = 1 kcal/(kg·°C) = 4,18 kJ/(kg·°C) · L_fusió = 80 kcal/kg · L_vap = 539 kcal/kg',
        when: 'Calcular quanta energia absorbeix l\'aigua en un incendi fins a evaporar-se.'
      }
    ],
    mentalTips: [
      {
        title: 'Regla del 29 per saber si un gas puja o baixa',
        tip: 'L\'aire pesa ~29 g/mol. Només suma els pesos atòmics (H=1, C=12, N=14, O=16, S=32, Cl=35,5): si < 29 puja (CH₄=16, NH₃=17, CO=28); si > 29 baixa a terra (O₂=32, CO₂=44, Propà C₃H₈=44, Butà=58, Cl₂=71).',
        example: 'CO (12+16 = 28) és gairebé igual que l\'aire (0,96), es barreja per tot arreu. El Propà (44) sempre cau a soterranis!'
      },
      {
        title: 'Boyle en ampolles: no barregis "bar manomètrics" si demanen física pura',
        tip: 'Per al càlcul pràctic d\'aire respirable d\'ERA s\'usa P_man × V (ex: 200 bar × 6 L = 1.200 L). Però en problemes teòrics de Boyle (P₁V₁ = P₂V₂) amb compressió/expansió des d\'1 atm, suma +1 atm per tenir pressió absoluta!',
        example: 'Comprimir un gas d\'1 atm a 4 atm redueix el volum a ¼ (no a 1/3).'
      },
      {
        title: 'Xifra màgica de l\'aigua: 100 kcal per escalfar + 539 kcal per evaporar',
        tip: '1 kg d\'aigua a 0 °C necessita 100 kcal per arribar a 100 °C, però en necessita 539 kcal (més de 5 vegades més!) només per canviar de líquid a vapor a 100 °C.',
        example: 'De 20 °C a vapor a 100 °C: (100 - 20) + 539 = 80 + 539 = 619 kcal per cada litre/kg d\'aigua!'
      }
    ],
    problems: [
      {
        id: 'p-t10-1',
        title: 'Autonomia d\'ampolla ERA en esforç intens',
        statement: 'Un bomber entra amb una ampolla de 6 litres carregada a 250 bar. Si el seu consum respiratori és de 50 litres/minut i volem deixar 50 bar de reserva de seguretat (xiulet), quants minuts de treball efectiu té abans d\'entrar en reserva?',
        hint: 'Resta els 50 bar de reserva als 250 bar inicials abans de multiplicar pels 6 litres!',
        options: ['24 minuts', '30 minuts', '20 minuts', '18 minuts'],
        correctIndex: 0,
        solutionSteps: [
          '1. Pressió útil fins a la reserva = 250 bar - 50 bar = 200 bar.',
          '2. Litres d\'aire útils = 200 bar × 6 L = 1.200 litres.',
          '3. Temps = 1.200 L ÷ 50 L/min = 24 minuts.'
        ]
      },
      {
        id: 'p-t10-2',
        title: 'Variació de pressió d\'una ampolla per calor (Gay-Lussac)',
        statement: 'Una ampolla d\'acer rígida (volum constant) està a 200 bar absoluts a 27 °C. Si en un incendi s\'escalfa fins a 327 °C, quina pressió absoluta tindrà a l\'interior?',
        hint: 'Passa primer 27 °C i 327 °C a Kelvin (+273)!',
        options: ['400 bar', '2.422 bar', '300 bar', '600 bar'],
        correctIndex: 0,
        solutionSteps: [
          '1. T₁ = 27 + 273 = 300 K.',
          '2. T₂ = 327 + 273 = 600 K (la temperatura absoluta s\'ha DOBLAT!).',
          '3. Per Gay-Lussac (P₁/T₁ = P₂/T₂): P₂ = 200 × (600 / 300) = 400 bar.'
        ]
      },
      {
        id: 'p-t10-3',
        title: 'Densitat relativa de l\'amoníac (NH₃) i el propà (C₃H₈)',
        statement: 'Tenint en compte els pesos atòmics (H=1, C=12, N=14) i aire=29, on s\'acumularà una fuita d\'amoníac (NH₃) i on una de propà (C₃H₈)?',
        hint: 'Calcula la massa molar de cada gas i compara-la amb 29.',
        options: [
          'Amoníac (M=17 < 29) pujarà; Propà (M=44 > 29) baixarà a terra',
          'Tots dos pujaran cap al sostre',
          'Amoníac baixarà a terra i Propà pujarà',
          'Tots dos s\'acumularan a les parts baixes'
        ],
        correctIndex: 0,
        solutionSteps: [
          '1. NH₃ = 14 + 3×1 = 17 g/mol → d_rel = 17/29 ≈ 0,59 (< 1 → puja!).',
          '2. C₃H₈ = 3×12 + 8×1 = 44 g/mol → d_rel = 44/29 ≈ 1,52 (> 1 → cau a terra!).'
        ]
      },
      {
        id: 'p-t10-4',
        title: 'Calor total absorbida per l\'aigua en extinció',
        statement: 'Quanta calor (en kcal) absorbeixen 10 litres (10 kg) d\'aigua que entren a 20 °C i s\'evaporen completament a 100 °C? (L_vap = 539 kcal/kg)',
        hint: 'Suma la calor sensible per pujar 80 °C i la calor latent d\'evaporació, i multiplica per 10.',
        options: ['6.190 kcal', '5.390 kcal', '800 kcal', '6.390 kcal'],
        correctIndex: 0,
        solutionSteps: [
          '1. Per cada kg: Q_sensible = 1 × (100 - 20) = 80 kcal.',
          '2. Q_latent = 539 kcal.',
          '3. Total per kg = 80 + 539 = 619 kcal/kg.',
          '4. Per 10 kg: 619 × 10 = 6.190 kcal.'
        ]
      },
      {
        id: 'p-t10-5',
        title: 'Volum d\'un mol de gas en Condicions Normals (CN)',
        statement: 'Quants litres ocupen 64 grams de metà (CH₄, M = 16 g/mol) en condicions normals (0 °C i 1 atm)?',
        hint: 'Calcula quants mols són 64 g i multiplica per 22,4 L/mol.',
        options: ['89,6 litres', '22,4 litres', '44,8 litres', '67,2 litres'],
        correctIndex: 0,
        solutionSteps: [
          '1. Nombre de mols n = 64 g ÷ 16 g/mol = 4 mols.',
          '2. En CN, 1 mol ocupa 22,4 L → 4 × 22,4 = 89,6 litres.'
        ]
      }
    ]
  },
  {
    id: 'calc-tema-11',
    topicNumber: 11,
    shortTitle: 'T11 · Electricitat',
    title: 'Tema 11 · Electricitat, Circuits AC/DC i Potència',
    subtitle: 'Llei d\'Ohm, Joule, circuits sèrie/paral·lel i càlculs en monofàsica/trifàsica',
    color: 'amber',
    formulas: [
      {
        name: 'Llei d\'Ohm i Efecte Joule',
        formula: 'V = I · R  |  P = V · I = I² · R = V² / R  |  Q = I² · R · t',
        units: 'V (Volts), I (Ampers), R (Ohms Ω), P (Watts W)',
        when: 'Qualsevol circuit en corrent continu o càrrega resistiva.'
      },
      {
        name: 'Potència en Corrent Altern (Monofàsic vs Trifàsic)',
        formula: 'Mono: P = V · I · cos(φ)  |  Trifàsic: P = √3 · V_L · I_L · cos(φ)',
        units: 'Monofàsic = 230 V · Trifàsic = 400 V · √3 ≈ 1,732',
        when: 'Saber quants Ampers consumeix un motor, un grup electrogen o una bomba elèctrica.'
      },
      {
        name: 'Associació de Resistències',
        formula: 'Sèrie: R_eq = R₁ + R₂  |  Paral·lel: 1/R_eq = 1/R₁ + 1/R₂ (2 iguals: R/2)',
        units: 'En paral·lel, R_eq SEMPRE és més petita que la més petita!',
        when: 'Endollar diverses eines en una regleta (paral·lel) o resistències en cadena (sèrie).'
      },
      {
        name: 'Bateries (Ah vs Wh) i Transformador',
        formula: 'Energia (Wh) = Capacitat (Ah) × Voltatge (V)  |  V₁ / V₂ = N₁ / N₂',
        units: '1 kWh = 1.000 Wh = 3,6 MJ',
        when: 'Autonomia de focus/bateries o relació de transformació en alta/baixa tensió.'
      }
    ],
    mentalTips: [
      {
        title: 'El triangle V / (I · R) i P / (V · I)',
        tip: 'Tapa amb el dit la lletra que busques: si tapes I, queda V/R o P/V. A casa (230 V), divideix els Watts per 230 (per anar ràpid mentalment, 2.300 W són exactament 10 A!).',
        example: 'Un calefactor de 2.300 W a 230 V consumeix 2.300 ÷ 230 = 10 A. Un de 4.600 W = 20 A.'
      },
      {
        title: 'Paral·lel de dues resistències diferents: Producte ÷ Suma',
        tip: 'No facis fraccions lentes 1/R₁ + 1/R₂! Si només n\'hi ha dues, fes (R₁ × R₂) ÷ (R₁ + R₂). Si són iguals, divideix per quantes n\'hi ha!',
        example: '6 Ω i 3 Ω en paral·lel: (6 × 3) ÷ (6 + 3) = 18 ÷ 9 = 2 Ω.'
      },
      {
        title: 'Efecte Joule (I²): el perill d\'un mal contacte o sobrecàrrega',
        tip: 'La calor als cables puja amb el QUADRAT de la intensitat (I²). Si dobles els aparells endollats (2×I), el cable s\'escalfa 4 vegades més!',
        example: 'Passar de 5 A a 15 A (×3) multiplica la calor per 3² = 9 vegades!'
      }
    ],
    problems: [
      {
        id: 'p-t11-1',
        title: 'Llei d\'Ohm i magnetotèrmic en un lladre',
        statement: 'En un endoll domèstic de 230 V protegit per un PIA (magnetotèrmic) de 16 A, hi endollem dos radiadors en paral·lel de 2.300 W cadascun. Què passarà?',
        hint: 'Calcula els ampers de cada radiador (P / V) i suma\'ls (en paral·lel les intensitats se sumen).',
        options: [
          'Consumiran 20 A en total i saltarà el magnetotèrmic de 16 A',
          'Consumiran 10 A en total i funcionaran sense problema',
          'Consumiran 16 A exactes',
          'Saltarà el diferencial de 30 mA per sobrecàrrega'
        ],
        correctIndex: 0,
        solutionSteps: [
          '1. Cada radiador: I = 2.300 W ÷ 230 V = 10 A.',
          '2. En paral·lel se sumen les intensitats: 10 A + 10 A = 20 A.',
          '3. Com que 20 A > 16 A, salta el magnetotèrmic (el diferencial només protegeix derivacions a terra, no sobrecàrregues!).'
        ]
      },
      {
        id: 'p-t11-2',
        title: 'Resistència equivalent en paral·lel',
        statement: 'Calculeu la resistència equivalent de dues resistències de 12 Ω i 4 Ω connectades en paral·lel.',
        hint: 'Fes (Producte) ÷ (Suma).',
        options: ['3 Ω', '16 Ω', '8 Ω', '48 Ω'],
        correctIndex: 0,
        solutionSteps: [
          '1. R_eq = (12 × 4) ÷ (12 + 4) = 48 ÷ 16 = 3 Ω (sempre menor que la més petita, 4 Ω).'
        ]
      },
      {
        id: 'p-t11-3',
        title: 'Energia d\'una bateria d\'eina d\'excarceració',
        statement: 'Una bateria d\'una tisora hidràulica té 36 V i una capacitat de 5 Ah. Quanta energia emmagatzema en Wh?',
        hint: 'Multiplica Voltatge × Capacitat (Ah).',
        options: ['180 Wh', '7,2 Wh', '41 Wh', '360 Wh'],
        correctIndex: 0,
        solutionSteps: [
          '1. E = V × Ah = 36 V × 5 Ah = 180 Wh.'
        ]
      },
      {
        id: 'p-t11-4',
        title: 'Transformador de reducció MT/BT',
        statement: 'Un transformador té 2.000 espires al primari (conectat a 20.000 V) i 40 espires al secundari. Quina tensió surt pel secundari?',
        hint: 'Regla de tres directa: V₁/N₁ = V₂/N₂.',
        options: ['400 V', '230 V', '1.000 V', '200 V'],
        correctIndex: 0,
        solutionSteps: [
          '1. Relació de reducció: 2.000 ÷ 40 = 50 vegades menys.',
          '2. V₂ = 20.000 V ÷ 50 = 400 V (tensió trifàsica de baixa tensió!).'
        ]
      },
      {
        id: 'p-t11-5',
        title: 'Intensitat amb cos(φ) en corrent altern',
        statement: 'Un motor monofàsic de 230 V té una potència útil absorbida de 1.840 W amb un factor de potència cos(φ) = 0,8. Quina intensitat consumeix?',
        hint: 'I = P ÷ (V × cos φ). Fixa\'t que 230 × 0,8 = 184!',
        options: ['10 A', '8 A', '12,5 A', '16 A'],
        correctIndex: 0,
        solutionSteps: [
          '1. V × cos(φ) = 230 × 0,8 = 184.',
          '2. I = 1.840 ÷ 184 = 10 A.'
        ]
      }
    ]
  },
  {
    id: 'calc-tema-13',
    topicNumber: 13,
    shortTitle: 'T13 · Hidràulica i Bombes',
    title: 'Tema 13 · Hidràulica, Pèrdues de Càrrega i Bombes',
    subtitle: 'Pressió hidrostàtica, continuïtat, càlcul de pressió en bomba i aspiració',
    color: 'cyan',
    formulas: [
      {
        name: 'Pressió Hidrostàtica (Columna d\'Aigua)',
        formula: 'P = ρ · g · h  →  10 mca = 1 bar ≈ 1 atm ≈ 1 kgf/cm² ≈ 100 kPa',
        units: '1 metre d\'alçada = 0,1 bar (cada planta d\'edifici ~3 m ≈ 0,3 bar)',
        when: 'Calcular quanta pressió es perd en pujar aigua a pisos alts o quanta pressió hi ha al fons d\'un dipòsit.'
      },
      {
        name: 'Equació de Continuïtat (Cabal i Secció)',
        formula: 'Q = S · v = (π · D² / 4) · v',
        units: '1 m³/s = 1.000 L/s = 60.000 L/min',
        when: 'Si estrenys el diàmetre a la meitat (D/2), la secció es fa 4 cops més petita i la velocitat ×4.'
      },
      {
        name: 'Pressió Necessària en Bomba (Pb)',
        formula: 'P_bomba = P_punta + ΔP_mànegues ± 0,1 · h (desnivell)',
        units: 'Totes les pressions en bar · h en metres (+ si puges, - si baixes)',
        when: 'EL càlcul estrella de bombers: a quina pressió posar la bomba del camió.'
      },
      {
        name: 'Cabal en Llança i Reacció',
        formula: 'Q_1 / Q_2 = √(P_1 / P_2)  |  R ≈ 1,5 · P(bar) · d²(cm) (aprox. en N o kgf)',
        units: 'Doblar el cabal exigeix MULTIPLICAR PER 4 la pressió en punta!',
        when: 'Preveure el retrocés d\'una llança o ajustar el cabal.'
      },
      {
        name: 'Aspiració Màxima d\'una Bomba',
        formula: 'H_teòrica = 10,33 mca  |  H_pràctica ≤ 7,5 m (cavitació)',
        units: 'A més altitud (muntanya) o aigua més calenta, aspira menys metres!',
        when: 'Bombejar d\'un riu, bassa o pou.'
      }
    ],
    mentalTips: [
      {
        title: 'Regla del 0,1 bar per metre (o 0,3 bar per planta)',
        tip: 'No multipliquis mai per 9.810 Pa si l\'enunciat va en bars! Simplement mou la coma un lloc a l\'esquerra: 35 metres de desnivell = 3,5 bar. Si et diuen "8a planta" (8 × 3 m = 24 m), són ~2,4 bar.',
        example: 'Pujada de 40 m → +4 bar a la bomba. Baixada per un barranc de 20 m → -2 bar (la gravetat t\'ajuda!).'
      },
      {
        title: 'Mànegues en paral·lel = pèrdua de càrrega dividida per 4!',
        tip: 'Si portes el mateix cabal total repartit en 2 mànegues iguals en paral·lel, per cada mànega passa la meitat del cabal (Q/2). Com que ΔP va amb Q², la pèrdua de càrrega baixa a (½)² = ¼ (4 vegades menys)!',
        example: 'Una línia perd 4 bar; si tires dues línies iguals en paral·lel amb un bifurcador al principi, només perden 1 bar!'
      },
      {
        title: '1 bar = 10 mca = 100.000 Pa = 100 kPa',
        tip: 'Recorda els zeros: 1 bar = 10⁵ Pa. Si un exercici dóna 450 kPa, divideix per 100 → 4,5 bar.',
        example: '750 kPa = 7,5 bar = 75 mca.'
      }
    ],
    problems: [
      {
        id: 'p-t13-1',
        title: 'Pressió de bomba en un incendi en alçada',
        statement: 'Ataquem un incendi a 30 metres d\'alçada amb una llança que necessita 5 bar en punta. La instal·lació de mànegues té una pèrdua de càrrega total de 2,5 bar. A quina pressió hem de regular la bomba del camió?',
        hint: 'Suma: Pressió en punta + Pèrdues de càrrega + Desnivell (0,1 bar × metres).',
        options: ['10,5 bar', '7,5 bar', '8,0 bar', '12,5 bar'],
        correctIndex: 0,
        solutionSteps: [
          '1. Pressió en punta = 5 bar.',
          '2. Pèrdues de càrrega = 2,5 bar.',
          '3. Alçada = 30 m × 0,1 bar/m = 3,0 bar.',
          '4. P_bomba = 5 + 2,5 + 3,0 = 10,5 bar.'
        ]
      },
      {
        id: 'p-t13-2',
        title: 'Continuïtat en canvi de diàmetre',
        statement: 'L\'aigua circula per una mànega de 70 mm a 2 m/s i passa a un tram de 35 mm (la meitat de diàmetre). Quina serà la nova velocitat?',
        hint: 'La secció va amb D². Si el diàmetre es divideix per 2, la secció es divideix per 4!',
        options: ['8 m/s', '4 m/s', '1 m/s', '16 m/s'],
        correctIndex: 0,
        solutionSteps: [
          '1. Nou diàmetre = D / 2 → Nova secció = S / 4.',
          '2. Com que Q = S·v és constant, la velocitat es multiplica per 4: 2 m/s × 4 = 8 m/s.'
        ]
      },
      {
        id: 'p-t13-3',
        title: 'Pressió al fons d\'un dipòsit',
        statement: 'Un dipòsit obert està ple d\'aigua fins a 15 metres de profunditat. Quina pressió manomètrica (en kPa i en bar) hi ha al fons?',
        hint: '10 m = 1 bar = 100 kPa.',
        options: ['1,5 bar (150 kPa)', '15 bar (1.500 kPa)', '0,15 bar (15 kPa)', '2,5 bar (250 kPa)'],
        correctIndex: 0,
        solutionSteps: [
          '1. P = 15 m × 0,1 bar/m = 1,5 bar.',
          '2. En kPa: 1,5 × 100 = 150 kPa.'
        ]
      },
      {
        id: 'p-t13-4',
        title: 'Treball en pendent descendent (barranc)',
        statement: 'Bombejem aigua des d\'una carretera cap a un barranc situat 40 metres per sota de la bomba. Volem 4 bar en punta i les mànegues perden 2 bar. A quina pressió posem la bomba?',
        hint: 'Com que baixes 40 m, la gravetat SUMA 4 bar! Per tant, la bomba n\'ha de fer 4 menys.',
        options: ['2 bar', '10 bar', '6 bar', '4 bar'],
        correctIndex: 0,
        solutionSteps: [
          '1. P_bomba = P_punta (4) + ΔP (2) - Desnivell (40 × 0,1 = 4).',
          '2. P_bomba = 4 + 2 - 4 = 2 bar.'
        ]
      },
      {
        id: 'p-t13-5',
        title: 'Temps per buidar una cisterna de BUP',
        statement: 'Una cisterna de 3.000 litres alimenta dues llances de 250 L/min cadascuna (sense hidrant). Quant temps trigarà a buidar-se?',
        hint: 'Suma el cabal de les dues llances i divideix els 3.000 L.',
        options: ['6 minuts', '12 minuts', '5 minuts', '8 minuts'],
        correctIndex: 0,
        solutionSteps: [
          '1. Cabal total = 250 + 250 = 500 L/min.',
          '2. Temps = 3.000 L ÷ 500 L/min = 6 minuts.'
        ]
      }
    ]
  },
  {
    id: 'calc-tema-19',
    topicNumber: 19,
    shortTitle: 'T19 · Conducció i Pendents',
    title: 'Tema 19 · Conducció d\'Emergència, Pendents i Distàncies',
    subtitle: 'Distància de reacció i detenció, pendents en % i força en corbes',
    color: 'rose',
    formulas: [
      {
        name: 'Distància de Reacció (Regla Pràctica)',
        formula: 'd_reacció (m) ≈ (v_km/h ÷ 10) × 3  (per t_reacció ≈ 1,08 s ≈ 1 s)',
        units: 'A 100 km/h recorres ~28–30 metres abans fins i tot de tocar el fre!',
        when: 'Estimar distàncies de seguretat en carretera i codis de circulació.'
      },
      {
        name: 'Pendent en Percentatge (%)',
        formula: 'Pendent (%) = (Desnivell vertical ÷ Distància horitzontal) × 100',
        units: 'Un pendent del 100% equival a 45° (NO a 90°!)',
        when: 'Pistes forestals, rampes d\'accés a garatges i estabilitat de camions.'
      },
      {
        name: 'Força Centrífuga en Corba',
        formula: 'Fc = (m · v²) / R',
        units: 'Augmenta amb el quadrat de la velocitat i inversament amb el radi R',
        when: 'Risc de bolcada d\'autobombes amb cisterna parcialment plena (efecte onada).'
      }
    ],
    mentalTips: [
      {
        title: 'Regla dels 3 dits per a Distància de Reacció i Frenada',
        tip: 'Agafa els km/h i treu el zero: a 80 km/h és "8". Multiplica per 3 → 24 m de reacció (temps ≈ 1 s). Si vols la distància d\'aturada total en asfalt sec aproximada: multiplica el número per si mateix (8 × 8 = 64 m aproximats)!',
        example: 'A 90 km/h: reacció = 9 × 3 = 27 m (exacte: 25 m/s × 1 s = 25 m). Aturada ≈ 9 × 9 = 81 m.'
      },
      {
        title: 'Pendent del 12%: 12 metres per cada 100 metres',
        tip: 'No confonguis % amb graus! 100% són 45°. En un pendent del 15%, si avances 200 m en horitzontal, puges 15 × 2 = 30 m en vertical.',
        example: 'Rampa de 50 m amb pendent del 10%: puja 5 metres.'
      }
    ],
    problems: [
      {
        id: 'p-t19-1',
        title: 'Distància recorreguda durant la reacció',
        statement: 'Un camió de bombers circula a 90 km/h i el conductor té un temps de reacció d\'1 segon davant d\'un obstacle. Quants metres recorre abans de començar a frenar?',
        hint: '90 km/h ÷ 3,6 = m/s.',
        options: ['25 metres', '9 metres', '90 metres', '15 metres'],
        correctIndex: 0,
        solutionSteps: [
          '1. 90 km/h ÷ 3,6 = 25 m/s.',
          '2. En 1 segon de reacció: 25 m/s × 1 s = 25 metres.'
        ]
      },
      {
        id: 'p-t19-2',
        title: 'Pendent d\'una pista forestal',
        statement: 'Un camí forestal puja 36 metres de desnivell vertical al llarg d\'una distància horitzontal de 300 metres. Quin és el pendent en percentatge?',
        hint: '(36 ÷ 300) × 100 = 36 ÷ 3.',
        options: ['12 %', '8,3 %', '18 %', '36 %'],
        correctIndex: 0,
        solutionSteps: [
          '1. Pendent = (36 ÷ 300) × 100 = 36 ÷ 3 = 12 %.'
        ]
      },
      {
        id: 'p-t19-3',
        title: 'Efecte de la velocitat en una rotonda/corba',
        statement: 'Si un vehicle cisterna agafa una corba de radi R a 60 km/h en lloc de 30 km/h, com canvia la força centrífuga que l\'empeny cap enfora?',
        hint: 'Fc = m·v² / R. La velocitat s\'ha doblat!',
        options: [
          'Es multiplica per 4',
          'Es multiplica per 2',
          'Es multiplica per 3',
          'Es manté igual perquè la massa no canvia'
        ],
        correctIndex: 0,
        solutionSteps: [
          '1. 60 km/h és el doble de 30 km/h (×2).',
          '2. Com que Fc depèn de v², 2² = 4 vegades més força centrífuga.'
        ]
      }
    ]
  }
];
