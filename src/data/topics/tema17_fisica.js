export const tema17Fisica = {
  id: 'tema-9',
  number: 9,
  code: 'MAN.GRAL.003',
  title: 'Física, Geometria, Mecànica Clàssica i Màquines Simples',
  category: 'Manual Operatiu SGO — Càlcul i Ciències Bàsiques',
  estimatedMinutes: 60,
  importance: {
    title: "Radar d'Examen — Tema 9 (MAN.GRAL.003 V.1): Física i Màquines Simples",
    frequency: 'Molt Alta (4-5 preguntes fixes de càlcul mecànic, trigonometria i polispasts/palanques)',
    summary:
      "Aquest manual estructura tota la física operativa de Bombers. Hem dissenyat 1 pàgina per cada bloc de teorema/càlcul (Moment i Unitats, Pitàgores i Autoescala, Cinemàtica MRU/MUA/Circular, Dinàmica/Xocs i Estàtica AEA, Treball/Energia/Fregament/Potència, Palanques i Pla Inclinat, i Cabrestant/Polispasts) i la Pàgina 8 amb el Formulari Resum Final de totes les equacions.",
    hotTopics: [
      'Cap. 2 (Càlcul): 7 unitats fonamentals SI, equivalències (1 m/s = 3,6 km/h; 1 CV = 735,5 W; 1 kgf = 9,8 N ≈ 1 daN; 1 rad/s = 9,55 rpm) i Moment o Parell de forces (M = F · d).',
      'Cap. 3 (Càlcul): Teorema de Pitàgores (a² + b² = c², regla 3-4-5) i Trigonometria d’emplaçament d’Autoescala (L = 30 m a 60° → alçada = 26 m, distància = 15 m).',
      'Cap. 4.1-4.3 (Càlcul): Frenada MUA (v_f² - v_i² = 2·a·d), Caiguda lliure (v = √(2·g·h)), Acceleració centrípeta (a_c = ω²·r = v²/r), Conservació de quantitat de moviment en xocs (p = m·v) i Estabilitat de l’AEA (CdM dins estabilitzadors).',
      'Cap. 4.4 (Càlcul): Treball (W = F·d·cos α), Energia cinètica (½mv²) i potencial (mgh), Fregament (F_f = μ·N), Potència (P = W/t = F·v) i Rendiment (η).',
      'Cap. 5 (Càlcul): Avantatge Mecànic (AM = F_out / F_in), Palanques de 1r, 2n (AM > 1) i 3r gènere (AM < 1, autoescala!), Pla inclinat (F = P·h/L), Cabrestant (força màxima a la 1a capa!) i Polispasts (fixa AM=1, mòbil AM=2 o 0,5).'
    ],
    traps: [
      'Confondre palanca de 2n gènere (carretó, perpalina: AM > 1 sempre) amb 3r gènere (autoescala, braç excavadora: AM < 1 sempre!).',
      'Al cabrestant (torn), la força de tracció màxima s’obté a la PRIMERA capa de cable (radi r mínim); a mesura que s’acumulen capes de cable al tambor, el radi r creix i el cabrestant perd força!',
      'En una politja mòbil invertida (com el pistó d’un ascensor hidràulic o trams d’autoescala), s’aplica el doble de força (AM = 0,5) per guanyar el DOBLE de recorregut i velocitat!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 2 Unitats i Moment',
      title: '1–2. Magnituds del SI, Conversions Operatives i Parell de Forces (Moment)',
      subtitle: 'Les 7 unitats fonamentals del Sistema Internacional, vectors i càlcul del moment de gir (M = F · d).',
      blocks: [
        {
          type: 'text',
          heading: '2.1–2.5. Les 7 Magnituds Fonamentals del SI, Escalars vs. Vectors i Parell de Forces',
          paragraphs: [
            "El Sistema Internacional d'Unitats (SI) es basa en 7 magnituds fonamentals: Longitud (metre, m), Massa (quilogram, kg), Temps (segon, s), Temperatura termodinàmica (kelvin, K), Intensitat de corrent elèctric (ampere, A), Quantitat de substància (mol, mol) i Intensitat lluminosa (candela, cd).",
            "Les magnituds ESCALARS queden definides només amb un número i la seva unitat (massa, temperatura, temps, energia, pressió), mentre que les magnituds VECTORIALS necessiten 4 elements: mòdul (intensitat), direcció (recta d'acció), sentit (punta de la fletxa) i punt d'aplicació (força, velocitat, acceleració)."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 1: Moment d’una Força o Parell de Forces (M = F · d) i Conversions Clau',
          formula: 'M = F · d · sin(α)   (Si F ⊥ d  ⇒  M = F · d  [N·m])',
          variables: [
            { symbol: 'M', meaning: 'Moment de força o parell de gir en Newton-metre (N·m). No confondre amb Joule de treball!' },
            { symbol: 'F', meaning: 'Força aplicada en Newtons (N). Equivalència: 1 kgf (kilopond) = 9,8 N ≈ 1 daN (decanewton)' },
            { symbol: 'd', meaning: 'Braç de palanca: distància perpendicular des de l’eix de gir fins a la línia d’acció de la força (m)' }
          ],
          trick:
            'Equivalències d’examen que cal saber al segon:\n• Velocitat: de m/s a km/h → multiplicar per 3,6 (20 m/s = 72 km/h; 10 m/s = 36 km/h; 25 m/s = 90 km/h).\n• Potència: 1 CV (cavall de vapor) = 735,5 W | 1 HP = 745,7 W.\n• Angles i girs: 1 rad = 57,3° (2π rad = 360°) | 1 rad/s = 9,55 rpm | 1 Ha (hectàrea) = 10.000 m².',
          example:
            'Problema resolt del manual (Clau anglesa): Apliquem una força perpendicular de F = 200 N a l’extrem d’una clau anglesa de longitud d = 20 cm (0,2 m). Quin moment de gir exercim sobre el cargol?\n• M = F · d = 200 N × 0,2 m = 40 N·m.'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Escalars vs. Vectors i el Moment d’una Força (M = F · d)',
          metaphor:
            'Imagina que algú et diu "camina 5 passos" (incomplet!) i després intenta obrir la porta pesada del parc empenyent pel pany vs. per les frontisses.',
          explanation:
            "1) ESCALAR vs. VECTOR: Una magnitud ESCALAR només necessita un número i la unitat (dir 'peso 75 kg' o 'fa 25 °C' ja ho explica tot). Un VECTOR és una fletxa amb 4 dades obligatòries: força (mòdul), camí (direcció), cap a quin costat va (sentit) i on toques (punt d'aplicació). Empènyer un cotxe cap endavant no té res a veure amb empènyer-lo cap enrere! 2) MOMENT DE FORÇA (M = F · d): El Moment és la força que fa GIRAR coses. Si empenys una porta just al costat de les frontisses (braç d molt curt), et deixes l'esquena; si empenys pel mànec de fora (braç d llarg), l'obres amb un dit! Per això una clau anglesa llarga afluixa cargols rovellats sense esforç.",
          takeaway:
            'Escalar = només un número (massa, Tª, energia). Vector = fletxa (força, velocitat). Moment = Força × distància al punt de gir (com més llarg el mànec, menys força fas!).'
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · Conversions Ràpides d’Examen (3,6 i Prefixos)',
          acronym: 'm/s  × 3,6  ⇒  km/h   |   km/h  ÷ 3,6  ⇒  m/s   |   1 daN ≈ 1 kgf',
          trick:
            "1) Per passar de m/s a km/h pensa que 1 hora té 3.600 s i 1 km té 1.000 m (3.600 ÷ 1.000 = 3,6). Com que en una hora recorres molt més camí que en un segon, el número en km/h SEMPRE és més gran (multiplica per 3,6: 10 m/s = 36 km/h, 20 m/s = 72 km/h). 2) 1 Newton (N) és el pes d'una poma petita (100 g), i 1 decanewton (1 daN = 10 N) és pràcticament 1 quilo de força (1 kgf = 9,8 N): treu un zero als Newtons i ja tens els quilos!",
          example:
            'Un mosquetó de rescat de 25 kN = 25.000 N → treus un zero ⇒ aguanta uns 2.500 kg!'
        },
        {
          type: 'table',
          title: 'Prefixos del Sistema Internacional (Múltiples i Submúltiples)',
          subtitle: 'Taula de potències de 10 del manual MAN.GRAL.003 (Capítol 2.3)',
          headers: ['Múltiple', 'Símbol i Factor', 'Submúltiple', 'Símbol i Factor', 'Exemple Operatiu a Bombers'],
          rows: [
            ['Giga', 'G = 10⁹ (1.000.000.000)', 'Nano', 'n = 10⁻⁹ (0,000000001)', 'Freqüències ràdio UHF/TETRA (MHz / GHz)'],
            ['Mega', 'M = 10⁶ (1.000.000)', 'Micro', 'μ = 10⁻⁶ (0,000001)', 'Filtre d’aigua malla 25–50 μm (micròmetres)'],
            ['Quilo', 'k = 10³ (1.000)', 'Mil·li', 'm = 10⁻³ (0,001)', '1 bar = 100 kPa · Diferencial = 30 mA'],
            ['Hecto / Deca', 'h = 10² (100) / da = 10¹ (10)', 'Centi / Deci', 'c = 10⁻² (0,01) / d = 10⁻¹ (0,1)', '1 daN = 10 N ≈ 1 kgf (mosquetó 25 kN ≈ 2.500 kgf)']
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 3 Pitàgores i AEA',
      title: '3. Geometria, Teorema de Pitàgores (3-4-5) i Trigonometria de l’Autoescala',
      subtitle: 'Càlcul d’àrees i volums, comprovació d’angles rectes en apuntalaments i emplaçament d’AEA a 60°.',
      blocks: [
        {
          type: 'text',
          heading: '3.1–3.2. Teorema de Pitàgores, Regla 3-4-5 i Trigonometria Operativa',
          paragraphs: [
            "En qualsevol triangle rectangle, el quadrat de la hipotenusa (c, el costat més llarg com l'escala o una tornapunta) és igual a la suma dels quadrats dels dos catets (a² + b² = c²).",
            "A l'operativa d'apuntalaments i rescat (GREC), els bombers utilitzen la REGLA DEL 3-4-5 per comprovar si un puntal i el terra o un mur formen exactament 90°: es mesuren 3 unitats (ex. 60 cm) en un costat i 4 unitats (80 cm) en l'altre; si la diagonal entre tots dos punts mesura exactament 5 unitats (100 cm = 1 m), l'angle és perfecte de 90° (perquè 3² + 4² = 9 + 16 = 25 = 5²)."
          ]
        },
        {
          type: 'diagram',
          title: 'Trigonometria d’Emplaçament de l’Autoescala (AEA L = 30 m a α = 60°)',
          diagramType: 'pythagoras_aea',
          caption:
            'Amb l’escala desplegada L = 30 m a un angle de 60°: la distància horitzontal a la façana és L·cos(60°) = 30 × 0,5 = 15 m, i l’alçada assolida és L·sin(60°) = 30 × 0,866 ≈ 26 m.'
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 2: Pitàgores, Trigonometria (sin, cos, tan) i Àrees/Volums',
          formula: 'c = √(a² + b²)   |   h = L · sin(α)   |   d = L · cos(α)   |   tan(α) = h / d',
          variables: [
            { symbol: 'sin(α)', meaning: 'Catet oposat (alçada h) / Hipotenusa (L). Valors: sin 30° = 0,5 | sin 45° = 0,707 | sin 60° = 0,866' },
            { symbol: 'cos(α)', meaning: 'Catet contigu (distància d) / Hipotenusa (L). Valors: cos 30° = 0,866 | cos 45° = 0,707 | cos 60° = 0,5' },
            { symbol: 'tan(α)', meaning: 'Catet oposat / Catet contigu. Valors: tan 30° = 0,577 | tan 45° = 1 | tan 60° = 1,732' }
          ],
          trick:
            'Truc per no confondre mai sin(60°) i cos(60°) amb l’Autoescala: a 60° l’escala està bastant dreta (més alta que lluny). Per tant, el número gran (0,866) va amb l’ALÇADA (sin 60° = 0,866) i la meitat exacta (0,5) va amb la DISTÀNCIA a la façana (cos 60° = 0,5)!',
          example:
            'Problema resolt del manual (Escala corredissa): Volem accedir a una finestra a h = 6 m d’alçada salvant una vorera de d = 3 m d’amplada. Quina longitud mínima d’escala (c) necessitem?\n• c = √(6² + 3²) = √(36 + 9) = √45 ≈ 6,7 metres.'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Pitàgores (3-4-5) i com NO barrejar mai Sinus i Cosinus',
          metaphor:
            'Pensa en l’Autoescala recolzada a una façana com si fos una escala de mà gegant dibuixant un triangle a la paret.',
          explanation:
            "1) Regla 3-4-5 sense calculadora: si muntes un apuntalament i vols saber si fa 90° exactes sense escaire, marca 3 pams (60 cm) a terra, 4 pams (80 cm) a la paret i la diagonal ha de mesurar exactament 5 pams (100 cm). 2) El truc de 'CO-sinus = CO-stat': en el triangle de l'Autoescala, el COSINUS va sempre amb el costat que està a-CO-stat o CO-ntigu al terra (distància horitzontal d = L · cos α). El SINUS és el que puja cap al cel (Sostre / alçada h = L · sin α). 3) Càlcul mental a 60°: 30 m × 0,5 = 15 m a terra, i 30 m × 0,866 ≈ 26 m amunt!",
          takeaway:
            'COS = al COstat per terra (distància a la façana). SIN = puja al Sostre (alçada). Regla 3-4-5 = angle recte perfecte de 90°.'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 4.1 Cinemàtica',
      title: '4.1. Cinemàtica: MRU, MUA (Frenada i Caiguda Lliure) i Moviment Circular',
      subtitle: 'Càlcul de distàncies de frenada d’un camió, velocitat d’impacte d’eines i acceleració centrípeta en corbes.',
      blocks: [
        {
          type: 'text',
          heading: '4.1. Moviment Rectilini Uniforme (MRU), Uniformement Accelerat (MUA) i Circular',
          paragraphs: [
            "En el Moviment Rectilini Uniforme (MRU) la velocitat és constant i l'acceleració és zero (d = v · t). En el Moviment Uniformement Accelerat (MUA) hi ha una acceleració constant (positiva si accelera o en caiguda lliure g = 9,8 m/s²; negativa si frena).",
            "En el Moviment Circular (com el rodet d'una bomba centrífuga o un camió prenent una corba de radi r), encara que la rapidesa sigui constant, el vector velocitat canvia contínuament de direcció gràcies a l'ACCELERACIÓ CENTRÍPETA (a_c), dirigida sempre cap al centre de la corba."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 3: Equacions de Frenada (MUA), Caiguda Lliure i Acceleració Centrípeta',
          formula: 'v_f = v_i + a·t  |  d = v_i·t + ½·a·t²  |  v_f² - v_i² = 2·a·d  |  a_c = v² / r = ω² · r',
          variables: [
            { symbol: 'v_i, v_f', meaning: 'Velocitat inicial i final en m/s (recorda dividir els km/h entre 3,6 abans de calcular!)' },
            { symbol: 'v = √(2·g·h)', meaning: 'Velocitat d’impacte en caiguda lliure des d’una alçada h (sense velocitat inicial)' },
            { symbol: 'a_c = v² / r', meaning: 'Acceleració centrípeta (m/s²). Creix amb el QUADRAT de la velocitat!' }
          ],
          trick:
            "Per què bolquen els camions en una corba? Perquè l'acceleració i la força centrífuga depenen de v² / r: si entres en una corba al DOBLE de velocitat (2·v), la força lateral que t'empeny a bolcar o derrapar es multiplica per QUATRE (4×)!",
          example:
            '2 Problemes resolts del manual MAN.GRAL.003:\n1) Frenada d’autobomba: Un camió circula a 72 km/h (v_i = 20 m/s) i frena a fons amb desacceleració a = -5 m/s² fins a aturar-se (v_f = 0). Quant triga i quants metres recorre?\n• Temps: t = (0 - 20) / (-5) = 4 segons.\n• Distància: d = (0² - 20²) / (2 × -5) = -400 / -10 = 40 metres (o amb v_mitjana = 10 m/s × 4 s = 40 m!).\n2) Caiguda d’un martell: Cau una eina des de h = 20 m d’alçada (g = 9,8 m/s²). Amb quina velocitat impacta a terra?\n• v = √(2 · 9,8 · 20) = √392 ≈ 19,8 m/s (× 3,6 ≈ 71,3 km/h!).'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Frenar el Camió sense Fórmules i el Perill del Quadrat (v²) en Corbes',
          metaphor:
            'Imagina frenar una bicicleta costa avall o entrar massa ràpid en una rotonda mullada:',
          explanation:
            "1) Truc de la Frenada (sense memoritzar fórmules llargues): si el camió va a 20 m/s (72 km/h) i perd 5 m/s cada segon fins a parar-se (0 m/s), triga 20 ÷ 5 = 4 segons. Quina ha estat la seva velocitat mitjana mentre frenava? La meitat de 20, és a dir 10 m/s! Doncs 10 m/s × 4 s = 40 metres recorreguts! 2) Caiguda lliure: la gravetat et fa guanyar uns 10 m/s (9,8 m/s²) cada segon que caus. 3) El parany del QUADRAT (v²): tant la distància de frenada com la força centrífuga que et fa bolcar en una corba (a_c = v²/r) porten v al quadrat. Si entres a una corba al DOBLE de velocitat, necessites 4 VEGADES més adherència (2² = 4) i 4 VEGADES més metres per frenar!",
          takeaway:
            'Velocitat × 2 ⇒ Distància de frenada × 4 i Força de bolcada × 4. Per calcular una frenada ràpida: (v_inicial ÷ 2) × temps.'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 4.2-4.3 Dinàmica i Estàtica',
      title: '4.2–4.3. Dinàmica (Lleis de Newton), Quantitat de Moviment en Xocs i Estàtica AEA',
      subtitle: 'Segona llei de Newton (F = m·a), conservació del moment lineal (p = m·v) en col·lisions i equilibri d’autoescala.',
      blocks: [
        {
          type: 'text',
          heading: '4.2–4.3. Les 3 Lleis de Newton, Xocs Viàris i Estabilitat de l’Autoescala',
          paragraphs: [
            "Les 3 Lleis de Newton regeixen tota la dinàmica: 1a) Llei de la Inèrcia (si ∑F = 0, el cos segueix en repòs o MRU; per això en una frenada els objectes no lligats dins la cabina surten disparats endavant), 2a) Llei Fonamental de la Dinàmica (F = m · a; el Pes és P = m · g) i 3a) Principi d'Acció i Reacció (tota força genera una reacció igual i de sentit oposat, com la reacció cap enrere d'una llança d'aigua en obrir-la).",
            "Perquè una estructura o una Autoescala (AEA) estigui en EQUILIBRI ESTÀTIC complet, s'han de complir simultàniament dues condicions: 1) Equilibri de translació (∑F = 0, no llisca) i 2) Equilibri de rotació (∑M = 0, no bolca). Un vehicle no bolca mentre la línia vertical que baixa des del seu Centre de Masses (CdM) caigui DINS del polígon de sustentació format pels estabilitzadors (potes)."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 4: Conservació de la Quantitat de Moviment en Col·lisions i Estàtica AEA',
          formula: 'p = m · v  [kg·m/s]   |   m₁·v₁ + m₂·v₂ = (m₁ + m₂) · v_final   |   M_bolcada ≤ M_estabilitzador',
          variables: [
            { symbol: 'p = m · v', meaning: 'Quantitat de moviment o moment lineal (vectorial: atenció als signes + i - en xocs frontals!)' },
            { symbol: '∑ F = 0 i ∑ M = 0', meaning: 'Condicions d’equilibri estàtic. En l’AEA, la reacció a la pota del costat oposat a la cistella ha de ser R₁ > 0' }
          ],
          trick:
            'En un xoc frontal entre dos vehicles que van en sentits contraris, posa signe POSITIU (+) a la velocitat del camió i signe NEGATIU (-) a la velocitat del turisme que ve de cara!',
          example:
            'Problema resolt del manual (Xoc frontal camió vs. cotxe):\nUn camió de m₁ = 10.000 kg que circula cap a la dreta a v₁ = +10 m/s (36 km/h) xoca frontalment contra un cotxe de m₂ = 2.000 kg que circula cap a l’esquerra a v₂ = -20 m/s (72 km/h) i queden encastats. A quina velocitat i en quin sentit es mouen després de l’impacte?\n• p_inicial = (10.000 × 10) + (2.000 × -20) = 100.000 - 40.000 = +60.000 kg·m/s.\n• Massa total encastada = 10.000 + 2.000 = 12.000 kg.\n• v_final = +60.000 / 12.000 = +5 m/s (18 km/h en el sentit que portava el camió!).'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Les 3 Lleis de Newton, Xocs i per què NO Bolca l’Autoescala',
          metaphor:
            'Pensa en anar dret al metro sense agafar-te, en obrir una mànega a pressió i en aguantar l’equilibri obrint les cames:',
          explanation:
            "1a Llei (INÈRCIA = mandra física): els objectes volen seguir fent el que feien. Si el camió frena de cop, una motxilla solta a la cabina 'no s'entera' que has frenat i surt disparada endavant! 2a Llei (F = m · a): com més pesa un camió (m), molta més força (F) cal per accelerar-lo o aturar-lo. 3a Llei (ACCIÓ-REACCIÓ): quan l'aigua surt disparada cap endavant pel broquet de la llança, l'aigua et dona una empenta exactament igual cap enrere! En XOCS (p = m · v): és un estira-i-arronsa entre masses amb signe (+ dreta, - esquerra); sempre arrossega el que porta més moment net (+60.000 guanya i s'emporta tots dos junts). ESTABILITAT AEA: l'Autoescala és com una persona de peu amb les cames obertes (les potes estabilitzadores). Mentre el teu melic (Centre de Masses) caigui DINS de les sabates, no bolques; si surt fora de la base, caus!",
          takeaway:
            '1a = Mandra (lliga el material!). 2a = F = m·a. 3a = Retrocés de la llança. Estabilitat AEA = el Centre de Masses ha de caure sempre DINS el polígon de les potes.'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Cap. 4.4 Energia i Fregament',
      title: '4.4. Treball, Energia Cinètica i Potencial, Fregament, Potència i Rendiment',
      subtitle: 'Conservació de l’energia mecànica, força de fregament estàtica vs. dinàmica i càlcul de potència en bombes i grues.',
      blocks: [
        {
          type: 'text',
          heading: '4.4. Treball (W), Energies (Ec, Ep), Fregament (μ) i Potència (P)',
          paragraphs: [
            "En física, només es realitza TREBALL mecànic (W = F · d · cos α, en Joules) quan hi ha desplaçament en la direcció de la força. Si sostens una llitera quieta sense caminar (d = 0) o camines en horitzontal mentre el pes és vertical (α = 90° ⇒ cos 90° = 0), el treball físic sobre el pes és ZERO!",
            "La Força de Fregament (F_f = μ · F_N) s'oposa sempre al lliscament i depèn del coeficient de fregament (μ) i de la força Normal perpendicular al pla (F_N), però NO depèn de l'àrea aparent de contacte. El coeficient de fregament ESTÀTIC (μ_e, per començar a moure un cos) és sempre més gran que el DINÀMIC (μ_d, un cop ja llisca). La resistència aerodinàmica de l'aire creix amb el quadrat de la velocitat (v²)."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 5: Treball, Energies, Fregament, Potència i Rendiment (η)',
          formula: 'W = F·d·cos(α)  |  E_c = ½·m·v²  |  E_p = m·g·h  |  F_f = μ·F_N  |  P = W/t = F·v  |  η = (P_útil / P_abs)·100',
          variables: [
            { symbol: 'E_c = ½·m·v²', meaning: 'Energia cinètica (J). Si la velocitat es duplica (×2), l’energia cinètica i la distància de frenada es multipliquen per 4!' },
            { symbol: 'E_p = m·g·h', meaning: 'Energia potencial gravitatòria (J). Es transforma en E_c en caure (E_total = E_c + E_p)' },
            { symbol: 'P = W / t = F · v', meaning: 'Potència en Watts (W = J/s). 1 kW = 1.000 W | 1 CV = 735,5 W' }
          ],
          trick:
            'Per calcular la potència que necessita una grua o un cabrestant per pujar una càrrega a velocitat constant v, no facis dos passos: aplica directament P = F · v (Pes en Newtons × velocitat en m/s = Watts)!',
          example:
            'Problema resolt: Una grua aixeca un bloc de 500 kg (Pes ≈ 5.000 N) fins a 12 m d’alçada en 10 segons. Quina potència útil desenvolupa i quina potència absorbeix si el seu rendiment és del 80%?\n• Treball útil W = m·g·h = 5.000 N × 12 m = 60.000 J.\n• Potència útil P_útil = 60.000 J / 10 s = 6.000 W (6 kW).\n• Potència absorbida P_abs = 6.000 / 0,80 = 7.500 W (7,5 kW ≈ 10,2 CV).'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Per què aguantar un sac quiet és "Treball Zero" i el Secret del Fregament',
          metaphor:
            'Imagina la diferència entre fer feina útil pujant maons a la bastida i quedar-te quiet aguantant una motxilla esperant l’autobús:',
          explanation:
            "1) TREBALL (W): en física no cobres per cansar-te, cobres només per MOURE coses en la direcció que fas força! Si aguantes una llitera quieta sense moure-la (d = 0) o la portes caminant en horitzontal sense pujar-la (90° respecte al pes vertical), el treball físic contra el pes és ZERO Joules. 2) ENERGIA (E_p i E_c): l'Energia Potencial (m·g·h) és com tenir diners estalviats a dalt d'un tobogan; quan caus, aquells estalvis es transformen en velocitat (Energia Cinètica ½·m·v²). 3) FREGAMENT (μ): costa molt més començar a empènyer un moble aturat (fregament ESTÀTIC, μ_e alt) que mantenir-lo lliscant un cop ja es mou (fregament DINÀMIC, μ_d més baix)! I no depèn de si té molta o poca superfície de contacte, només del pes i del tipus de terra. 4) RENDIMENT (η = 80%): de cada 100 W que gasta el motor, 20 W es perden en calor i 80 W aixequen la càrrega!",
          takeaway:
            'Sense desplaçament en la direcció de la força ⇒ W = 0. Costa més arrencar (μ estàtic) que seguir lliscant (μ dinàmic). Potència = rapidesa en fer el treball.'
        }
      ]
    },
    {
      pageNumber: 6,
      shortLabel: 'Pàg. 6 · Cap. 5.1-5.2 Palanques i Pla',
      title: '5.1–5.2. Màquines Simples I: Avantatge Mecànic, Palanques (1r, 2n, 3r) i Pla Inclinat',
      subtitle: 'Llei de la palanca, per què l’autoescala és de 3r gènere i problema del cotxe de 2.000 kg al talús amb tràctel.',
      blocks: [
        {
          type: 'text',
          heading: '5.1–5.2. Avantatge Mecànic (AM), Els 3 Gèneres de Palanca i Pla Inclinat',
          paragraphs: [
            "Una màquina simple no crea energia ni redueix el treball total (W_entrada = W_sortida), sinó que permet multiplicar la força a canvi d'augmentar la distància recorreguda. L'Avantatge Mecànic és AM = F_sortida / F_entrada = d_entrada / d_sortida.",
            "Les PALANQUES es classifiquen segons quin element queda AL MIG: 1r Gènere (FULCRE al mig: alicates, tisores, pota de cabra, balancí; pot tenir AM > 1, = 1 o < 1), 2n Gènere (RESISTÈNCIA/càrrega al mig: carretó d'obra, trencanous, perpalina recolzada a la punta; SEMPRE té AM > 1 perquè el braç de força és més llarg que el de resistència!) i 3r Gènere (FORÇA aplicada al mig: autoescala AEA on el pistó hidràulic empeny a prop de la base, braç d'excavadora, pinces, canya de pescar; SEMPRE té AM < 1: es perd força però es guanya gran abast i velocitat a la punta!)."
          ]
        },
        {
          type: 'diagram',
          title: 'Esquema Visual de Màquines Simples: Palanques (1r, 2n, 3r), Pla Inclinat i Polispasts',
          diagramType: 'simple_machines',
          caption:
            '1) Memoritza qui va al mig: 1r = Fulcre, 2n = Resistència (AM > 1), 3r = Força (AM < 1, Autoescala). 2) Al pla inclinat F = P·(h/L). 3) Als polispasts simples AM = nombre de cordes que sostenen la politja mòbil.'
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 6: Llei de la Palanca i Equació del Pla Inclinat (amb i sense fregament)',
          formula: 'F_in · d_in = F_out · d_out   |   AM = d_in / d_out   |   F_pla = P · sin(α) + μ · P · cos(α)',
          variables: [
            { symbol: 'P · sin(α)', meaning: 'Component del pes que vol fer caure el vehicle pel pendent: P · (h / L)' },
            { symbol: 'μ · P · cos(α)', meaning: 'Força de fregament si el vehicle té les rodes bloquejades i s’arrossega' }
          ],
          trick:
            'Regla mnemotècnica "F – R – P" (o "F – R – F") per saber qui va AL MIG a cada gènere de palanca:\n• 1r gènere = Fulcre al mig.\n• 2n gènere = Resistència al mig (sempre guanyes força: AM > 1).\n• 3r gènere = Potència/Força al mig (sempre perds força però guanyes distància: AM < 1, com l’Autoescala!).',
          example:
            'Problema complet del manual MAN.GRAL.003 (Cotxe al talús amb tràctel):\nUn vehicle de 2.000 kg (Pes ≈ 20.000 N) ha caigut per un talús de 45° (sin 45° = cos 45° = 0,7). Disposem d’un tràctel de força màxima 15.000 N. El podrem pujar?\n• Cas A (Rodes lliures, sense fregament): F = P · sin 45° = 20.000 × 0,7 = 14.000 N. Com que 14.000 N < 15.000 N, SÍ que el podem pujar!\n• Cas B (Rodes bloquejades arrossegant, μ = 0,8): F_freg = 0,8 × 20.000 × 0,7 = 11.200 N ⇒ F_total = 14.000 + 11.200 = 25.200 N > 15.000 N ⇒ NO puja (cal muntar un polispast 2:1!).'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · El Pacte Secret de les Màquines Simples i les 3 Palanques',
          metaphor:
            'En física ningú et regala energia gratis: el que t’estalvies en FORÇA ho pagues sempre recorrent més METRES!',
          explanation:
            "1) AVANTATGE MECÀNIC (AM): si una palanca o rampa té AM = 4, fas 4 cops menys força, però hauràs d'empènyer 4 vegades més distància! 2) 1r GÈNERE (Fulcre al mig — balancí / pota de cabra): el suport és al centre; segons on el posis guanyes força o distància. 3) 2n GÈNERE (Resistència al mig — carretó d'obra): la càrrega pesada va entre la roda i les teves mans; com que tu agafes els mànecs més llargs, SEMPRE guanyes força (AM > 1)! 4) 3r GÈNERE (Força al mig — Autoescala AEA / braç humà): el pistó hidràulic empeny prop de la base (molt curt) i la cistella és lluny a la punta! Per això el pistó ha de fer una força brutal (SEMPRE perds força: AM < 1!), però amb un petit moviment del pistó la cistella arriba molt alt i molt ràpid! 5) PLA INCLINAT: pujar una moto per una rampa llarga costa poca força perquè reparteixes la pujada en molts metres.",
          takeaway:
            '1r = Fulcre al mig. 2n = Càrrega al mig (carretó: SEMPRE AM > 1). 3r = Força al mig (Autoescala: SEMPRE AM < 1 per guanyar abast i velocitat!).'
        }
      ]
    },
    {
      pageNumber: 7,
      shortLabel: 'Pàg. 7 · Cap. 5.3-5.4 Polispasts',
      title: '5.3–5.4. Màquines Simples II: Torn, Cabrestant (1a Capa) i Polispasts',
      subtitle: 'Per què el cabrestant perd força amb les capes de cable i càlcul d’avantatge mecànic en politges.',
      blocks: [
        {
          type: 'text',
          heading: '5.3–5.4. El Torn / Cabrestant i les Politges Fixes, Mòbils i Polispasts',
          paragraphs: [
            "El TORN o CABRESTANT funciona com una palanca contínua de 360° on la força del motor actua amb un braç gran (R) i el cable estira des del radi del tambor d'enrotllament (r): F_in · R = F_out · r ⇒ F_out = M_motor / r.",
            "Conseqüència operativa crítica en els cabrestants dels camions de bombers (BUP/BRP): com que el moment del motor (M) és constant, la força de tracció del cable (F_out = M / r) és INVERSAMENT proporcional al radi d'enrotllament (r). Per tant, la FORÇA MÀXIMA nominal del cabrestant s'obté només a la PRIMERA CAPA de cable (quan el tambor està gairebé buit i r és mínim). A l'última capa (tambor ple de cable), el radi r és més gran i el cabrestant pot perdre fins a un 30–40% de força de tracció!",
            "En les POLITGES: 1) Politja FIXA: només canvia la direcció de la força per treballar més còmodes (AM = 1; F = P). 2) Politja MÒBIL (s'enduu la càrrega): com que el pes es reparteix entre 2 ramals de corda, redueix l'esforç a la meitat (AM = 2; F = P/2) a canvi d'estirar el doble de corda. 3) Politja mòbil INVERTIDA (utilitzada en cilindres d'ascensors hidràulics i trams d'autoescales): el pistó empeny l'eix de la politja mòbil amb el doble de força (AM = 0,5) per aconseguir que la cabina o l'escala pugi el DOBLE de distància i al doble de velocitat!"
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 7: Torn / Cabrestant i Polispasts Simples (Factorials) vs. Exponencials',
          formula: 'F_cabrestant = M_motor / r_capa   |   AM_polispast_simple = n (ramals)   |   AM_potencial = 2ⁿ',
          variables: [
            { symbol: 'r_capa', meaning: 'Radi del tambor + capes de cable. Mínim radi (1a capa) = MÀXIMA força de tracció!' },
            { symbol: 'AM = n', meaning: 'Polispast simple o aparell factorial: AM = nombre total de trams de corda que surten de la càrrega / politges mòbils' },
            { symbol: 'AM = 2ⁿ', meaning: 'Aparell potencial (cada politja mòbil estira una altra politja mòbil): amb n politges mòbils, AM = 2ⁿ (2, 4, 8...)' }
          ],
          trick:
            'En qualsevol polispast de rescat (3:1 en Z, 4:1 amb dues politges dobles, etc.): si l’Avantatge Mecànic és AM = 4, la força que has de fer és P / 4, però per pujar la llitera 1 metre hauràs de recollir 4 metres de corda!',
          example:
            'Problema resolt: Muntem un polispast 4:1 (AM = 4) per hissar una llitera amb víctima i rescatador de 160 kg (Pes ≈ 1.600 N) al llarg d’un pou de 15 m de profunditat.\n• Força teòrica necessària a la corda de tracció: F = 1.600 N / 4 = 400 N (≈ 40 kgf).\n• Longitud de corda que cal cobrar: L = 15 m × 4 = 60 metres de corda.'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Per què el Cabrestant perd força amb les capes i com comptar Polispasts',
          metaphor:
            'Imagina enrotllar un fil al voltant d’un llapis prim vs. una ampolla ampla fent girar el canell amb la mateixa força:',
          explanation:
            "1) EL CABRESTANT (1a capa = màxima força!): el motor del cabrestant sempre gira amb la mateixa potència (M). A la 1a capa, el cable s'enrotlla arran del ferro del tambor (radi r molt petit, com el llapis): el motor fa molta força sobre un radi curt! Però quan s'acumulen capes de cable i el tambor s'engrosseix (radi r gran, com l'ampolla), el cable estira des de molt més lluny del centre i perd un 30–40% de força! (Per això, si vols màxima tracció, desenrotlla gairebé tot el cable!). 2) POLITGES i POLISPASTS: una politja FIXA al sostre no redueix el pes (AM = 1), només et deixa estirar cap avall. Una politja MÒBIL lligada a la llitera reparteix el pes entre 2 cordes (AM = 2, fas la meitat de força però reculls el doble de corda!). I si l'inverteixes amb un pistó hidràulic (AM = 0,5), el pistó fa el doble de força perquè l'escala o ascensor pugi el DOBLE de ràpid!",
          takeaway:
            'Cabrestant: màxima força a la 1a CAPA (radi r mínim). Polispast simple: l’Avantatge Mecànic és el nombre de cordes paral·leles que aguanten la càrrega.'
        }
      ]
    },
    {
      pageNumber: 8,
      isFormulaSheet: true,
      shortLabel: 'Pàg. 8 · Formulari Final',
      title: 'Formulari Resum Final — Totes les Fórmules i Equivalències de Física (Tema 9)',
      subtitle: 'Recull complet d’equacions de mecànica, trigonometria i màquines simples del manual MAN.GRAL.003.',
      blocks: [
        {
          type: 'table',
          title: '1. Formulari Mestre de Física, Cinemàtica, Dinàmica i Energia (MAN.GRAL.003)',
          subtitle: 'Totes les fórmules d’examen en una sola taula',
          headers: ['Bloc / Teorema', 'Equació Matemàtica', 'Variables i Unitats SI', 'Clau Ràpida d’Examen'],
          rows: [
            ['Moment / Parell de gir', 'M = F · d · sin(α)', 'M en N·m · F en N · d en m', 'Si F és perpendicular al braç ⇒ M = F · d'],
            ['Pitàgores i Regla 3-4-5', 'a² + b² = c²', 'c = hipotenusa (escala / tornapunta)', 'Triangle 3 m – 4 m – 5 m garanteix angle de 90°'],
            ['Trigonometria Autoescala', 'h = L·sin(α) | d = L·cos(α)', 'A 60°: sin 60° = 0,866 | cos 60° = 0,5', 'AEA 30 m a 60° ⇒ h ≈ 26 m i d = 15 m'],
            ['MUA i Frenada', 'v_f = v_i + a·t | v_f² - v_i² = 2·a·d', 'v en m/s (km/h ÷ 3,6) · a en m/s²', 'Distància frenada: d = v_i² / (2 · |a|)'],
            ['Caiguda Lliure', 'v = √(2 · g · h) | h = ½ · g · t²', 'g = 9,8 m/s² (càlcul ràpid ≈ 10 m/s²)', 'Des de h = 20 m ⇒ v ≈ 19,8 m/s (71 km/h)'],
            ['Acceleració Centrípeta', 'a_c = v² / r = ω² · r', 'v = velocitat lineal · ω en rad/s · r = radi', 'Duplicar velocitat en corba multiplica a_c per 4'],
            ['2a Llei Newton i Xocs', 'F = m · a | p = m · v = ct.', 'p en kg·m/s (atenció signes + i -)', 'v_final = (m₁·v₁ + m₂·v₂) / (m₁ + m₂)'],
            ['Treball i Potència', 'W = F·d·cos(α) | P = W/t = F·v', 'W en Joules (J) · P en Watts (W)', 'Si d = 0 o α = 90° ⇒ el treball físic és W = 0'],
            ['Energia Mecànica', 'E_c = ½·m·v² | E_p = m·g·h', 'E_total = E_c + E_p = constant', 'En rotació: E_r = ½ · I · ω²'],
            ['Força de Fregament', 'F_f = μ · F_N', 'μ = coeficient (μ_estàtic > μ_dinàmic)', 'No depèn de l’àrea de contacte'],
            ['Palanca i Pla Inclinat', 'F_in·d_in = F_out·d_out | F = P·(h/L)', 'AM = F_out / F_in = d_in / d_out', '1r: Fulcre mig | 2n: AM > 1 | 3r: AM < 1 (AEA)'],
            ['Cabrestant i Polispasts', 'F_out = M / r | AM_polispast = n', 'r = radi tambor · n = cordes que sostenen', 'Cabrestant: força màxima a la 1a CAPA de cable!']
          ]
        },
        {
          type: 'table',
          title: '2. Taula de Conversions i Valors Trigonomètrics Imprescindibles',
          subtitle: 'Per resoldre qualsevol problema sense calculadora',
          headers: ['Concepte', 'Equivalència Exacta', 'Valors Trigonomètrics (0°, 30°, 45°, 60°, 90°)'],
          rows: [
            ['Velocitat i Temps', '1 m/s = 3,6 km/h | 10 m/s = 36 km/h | 20 m/s = 72 km/h', 'sin: 0°=0 | 30°=0,5 | 45°=0,707 | 60°=0,866 | 90°=1'],
            ['Força i Pressió', '1 kgf = 9,8 N ≈ 1 daN | 1 bar = 100.000 Pa ≈ 10,2 m.c.a.', 'cos: 0°=1 | 30°=0,866 | 45°=0,707 | 60°=0,5 | 90°=0'],
            ['Potència i Gir', '1 CV = 735,5 W | 1 rad = 57,3° | 1 rad/s = 9,55 rpm', 'tan: 0°=0 | 30°=0,577 | 45°=1,0 | 60°=1,732 | 90°=∞']
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't9-q1',
      difficulty: 'Fàcil',
      question: 'De quin gènere és una palanca quan la força aplicada (potència) es troba entre el fulcre i la resistència (com és el cas del braç d’una autoescala AEA), i quin és el seu avantatge mecànic (AM)?',
      options: [
        'De 1r gènere; AM sempre és igual a 1.',
        'De 2n gènere; AM sempre és més gran que 1 (AM > 1).',
        'De 3r gènere; AM sempre és més petit que 1 (AM < 1), perdent força però guanyant abast i velocitat.',
        'De 2n gènere; AM sempre és més petit que 1.'
      ],
      correctIndex: 2,
      explanation: 'A les palanques de 3r gènere la força s’aplica entre el fulcre i la càrrega (d_in < d_out), de manera que l’avantatge mecànic és sempre AM < 1 (com l’autoescala o una canya de pescar).'
    },
    {
      id: 't9-q2',
      difficulty: 'Mitjà',
      question: 'Si emplacem una autoescala (AEA) desplegada a L = 30 metres formant un angle de 60° amb l’horitzontal (sin 60° = 0,866; cos 60° = 0,5), a quina distància horitzontal de la façana i a quina alçada arriba?',
      options: [
        'Distància = 26 m | Alçada = 15 m.',
        'Distància = 15 m | Alçada ≈ 26 m (25,98 m).',
        'Distància = 21,2 m | Alçada = 21,2 m.',
        'Distància = 10 m | Alçada = 20 m.'
      ],
      correctIndex: 1,
      explanation: 'Distància d = L · cos 60° = 30 × 0,5 = 15 m. Alçada h = L · sin 60° = 30 × 0,866 = 25,98 m ≈ 26 m.'
    },
    {
      id: 't9-q3',
      difficulty: 'Mitjà',
      question: 'En el cabrestant d’una autobomba (torn), en quin moment desenvolupa la seva FORÇA MÀXIMA de tracció sobre el cable?',
      options: [
        'Quan el tambor està completament ple de cable (última capa).',
        'Quan treballa a la PRIMERA capa de cable (tambor gairebé desenrotllat, amb el radi r mínim).',
        'La força és exactament la mateixa a totes les capes del tambor.',
        'Quan el cable forma un angle de 45° lateral amb el para-xocs.'
      ],
      correctIndex: 1,
      explanation: 'Com que F_out = M_motor / r, com més petit és el radi d’enrotllament r (primera capa sobre el tambor), més gran és la força de tracció del cabrestant.'
    },
    {
      id: 't9-q4',
      difficulty: 'Mitjà',
      question: 'Un camió de bombers circula a 72 km/h i frena amb una desacceleració constant de -5 m/s² fins a aturar-se. Quant temps triga a aturar-se i quina distància recorre?',
      options: [
        'Triga 2 segons i recorre 20 metres.',
        'Triga 4 segons i recorre 40 metres.',
        'Triga 5 segons i recorre 50 metres.',
        'Triga 4 segons i recorre 80 metres.'
      ],
      correctIndex: 1,
      explanation: '72 km/h = 20 m/s. Temps t = 20 / 5 = 4 s. Distància d = v_mitjana · t = (20 / 2) × 4 = 40 metres.'
    },
    {
      id: 't9-q5',
      difficulty: 'Difícil',
      question: 'Un camió de 10.000 kg que circula a +10 m/s xoca frontalment contra un turisme de 2.000 kg que ve en sentit contrari a -20 m/s i queden encastats. Quina és la seva velocitat just després de l’impacte?',
      options: [
        'Queden totalment aturats (0 m/s).',
        '+5 m/s en el sentit que portava el camió.',
        '-5 m/s en el sentit que portava el turisme.',
        '+10 m/s.'
      ],
      correctIndex: 1,
      explanation: 'Per conservació de la quantitat de moviment: p_i = (10.000 × 10) + (2.000 × -20) = 60.000 kg·m/s. v_f = 60.000 / (10.000 + 2.000) = +5 m/s.'
    },
    {
      id: 't9-q6',
      difficulty: 'Fàcil',
      question: 'Quantes de les següents magnituds formen part de les 7 unitats fonamentals del Sistema Internacional (SI)?',
      options: [
        'Metre, Quilogram, Segon, Newton, Pascal, Joule i Watt.',
        'Metre (m), Quilogram (kg), Segon (s), Kelvin (K), Ampere (A), Mol (mol) i Candela (cd).',
        'Metre, Litro, Gram, Hora, Grau Celsius, Volt i Ohm.',
        'Metre, Newton, Segon, Grau Celsius, Ampere, Mol i Lumen.'
      ],
      correctIndex: 1,
      explanation: 'Les 7 unitats bàsiques del SI són m (longitud), kg (massa), s (temps), K (temperatura), A (intensitat elèctrica), mol (quantitat de substància) i cd (intensitat lluminosa).'
    },
    {
      id: 't9-q7',
      difficulty: 'Mitjà',
      question: 'Amb quina velocitat aproximada impacta a terra un martell que cau accidentalment des d’una coberta a 20 metres d’alçada (g = 9,8 m/s²)?',
      options: [
        '9,8 m/s (35 km/h).',
        '14,0 m/s (50 km/h).',
        '19,8 m/s (≈ 71 km/h).',
        '39,2 m/s (141 km/h).'
      ],
      correctIndex: 2,
      explanation: 'v = √(2 · g · h) = √(2 × 9,8 × 20) = √392 ≈ 19,8 m/s (que multiplicat per 3,6 equival a 71,3 km/h).'
    },
    {
      id: 't9-q8',
      difficulty: 'Mitjà',
      question: 'Per a què s’utilitza una politja mòbil invertida amb Avantatge Mecànic AM = 0,5 en cilindres d’ascensors hidràulics o trams d’autoescala?',
      options: [
        'Per fer la meitat de força amb el pistó.',
        'Per aplicar el doble de força amb el pistó hidràulic i aconseguir que la càrrega recorri el DOBLE de distància i al doble de velocitat.',
        'Només per canviar el sentit de la corda.',
        'Per evitar el fregament del cable.'
      ],
      correctIndex: 1,
      explanation: 'Segons l’apartat 5.4 del manual MAN.GRAL.003, en empènyer la politja mòbil des del cilindre (AM = 0,5), es duplica el recorregut i la velocitat d’elevació de la cabina o escala.'
    },
    {
      id: 't9-q9',
      difficulty: 'Fàcil',
      question: 'A quants Watts equival 1 Cavall de Vapor (1 CV) i a quants rad/s equivalen 9,55 rpm?',
      options: [
        '1 CV = 1.000 W | 9,55 rpm = 10 rad/s.',
        '1 CV = 735,5 W | 1 rad/s = 9,55 rpm.',
        '1 CV = 500 W | 1 rad/s = 57,3 rpm.',
        '1 CV = 981 W | 1 rad/s = 3,6 rpm.'
      ],
      correctIndex: 1,
      explanation: 'Taula d’equivalències del Capítol 2.2: 1 CV = 735,5 W i 1 rad/s = 9,55 rpm.'
    },
    {
      id: 't9-q10',
      difficulty: 'Difícil',
      question: 'Volem pujar un vehicle de 2.000 kg (Pes ≈ 20.000 N) amb les rodes bloquejades (μ = 0,8) per un talús de 45° (sin 45° = cos 45° = 0,7). Quina força total de tracció cal vèncer?',
      options: [
        '14.000 N.',
        '11.200 N.',
        '25.200 N (14.000 N del pendent + 11.200 N del fregament).',
        '20.000 N.'
      ],
      correctIndex: 2,
      explanation: 'F_pendent = P · sin 45° = 20.000 × 0,7 = 14.000 N. F_fregament = μ · P · cos 45° = 0,8 × 14.000 = 11.200 N. Suma total = 25.200 N.'
    },
    {
      id: 't9-q11',
      difficulty: 'Fàcil',
      question: 'En mecànica, com es classifiquen els vectors polars segons el seu grau de llibertat respecte al punt d’aplicació i la recta d’acció?',
      options: [
        'Vectors escalars, vectors mòduls i vectors unitaris.',
        'Vectors lliures, vectors lliscants i vectors fixos (o lligats).',
        'Vectors axials, vectors perpendiculars i vectors nuls.',
        'Vectors tangencials, vectors centrífugs i vectors potencials.'
      ],
      correctIndex: 1,
      explanation: 'Els vectors polars es divideixen en lliures (mateix mòdul, direcció i sentit independentment del punt), lliscants (actuen al llarg d’una recta d’acció, com les forces en un sòlid rígid) i fixos (lligats a un punt d’aplicació concret).'
    },
    {
      id: 't9-q12',
      difficulty: 'Mitjà',
      question: 'Quina afirmació és INCORRECTA sobre els principis de l’estàtica i les lleis de Newton aplicades a l’equilibri d’un cos?',
      options: [
        'Un cos rígid es troba en equilibri estàtic quan la resultant de totes les forces externes i la suma de tots els moments de força són nul·les (ΣF = 0 i ΣM = 0).',
        'Segons el principi d’acció i reacció (3a llei de Newton), les forces d’acció i reacció tenen el mateix mòdul, la mateixa direcció i el mateix sentit.',
        'Les forces d’acció i reacció actuen sobre cossos diferents i per això no s’anul·len entre elles sobre un únic cos.',
        'El moment d’una força respecte a un punt depèn del producte vectorial entre el vector posició i la força (M = F · d_perpendicular).'
      ],
      correctIndex: 1,
      explanation: 'És incorrecte afirmar que tenen el mateix sentit: pel principi d’acció i reacció, ambdues forces tenen igual mòdul i igual direcció (mateixa recta d’acció), però SENTIT OPOSTAT (F₁₂ = -F₂₁).'
    },
    {
      id: 't9-q13',
      difficulty: 'Difícil',
      question: 'Un bomber arrossega una mànega carregada una distància de 10 metres sobre un terra horitzontal aplicant una força constant de 200 N mitjançant una corda que forma un angle de 30° RESPECTE A LA VERTICAL. Quin treball mecànic fa aquesta força (cos 60° = 0,5; cos 30° ≈ 0,866)?',
      options: [
        '2.000 J.',
        '1.732 J.',
        '1.000 J.',
        '500 J.'
      ],
      correctIndex: 2,
      explanation: 'El treball és W = F · d · cos(α), on α és l’angle entre la força i el desplaçament (horitzontal). Si la força forma 30° amb la vertical, forma α = 90° - 30° = 60° amb el desplaçament horitzontal. Així, W = 200 × 10 × cos 60° = 2.000 × 0,5 = 1.000 J.'
    },
    {
      id: 't9-q14',
      difficulty: 'Mitjà',
      question: 'En un apuntalament d’urgència utilitzem un parell de falques de fusta idèntiques de 30 cm de longitud i 10 cm d’alçada màxima (30 × 10 cm) col·locades de manera oposada per cobrir una separació de 5 cm. Quin solapament longitudinal hi haurà entre les dues falques?',
      options: [
        '5 cm.',
        '10 cm.',
        '15 cm.',
        '25 cm.'
      ],
      correctIndex: 2,
      explanation: 'En dues falques idèntiques oposades, l’alçada total obtinguda en la zona de solapament és proporcional al solapament: h = H · (solapament / longitud). Per cobrir h = 5 cm amb falques de H = 10 cm i L = 30 cm: 5 = 10 · (S / 30) → S = 15 cm.'
    },
    {
      id: 't9-q15',
      difficulty: 'Fàcil',
      question: 'Quin valor té l’Avantatge Mecànic (AM) d’una palanca de 3r gènere (on la potència s’aplica entre el punt de suport i la resistència)?',
      options: [
        'Sempre superior a 1 (AM > 1), ja que multiplica la força aplicada.',
        'Sempre menor o igual que 1 (AM ≤ 1), ja que el braç de potència és inferior al braç de resistència.',
        'Exactament igual a 2 en tots els casos.',
        'Infinit quan la càrrega es troba a l’extrem.'
      ],
      correctIndex: 1,
      explanation: 'En una palanca de 3r gènere (com unes pinces o l’avantbraç humà), la potència queda entre el fulcre i la resistència (bp ≤ br), de manera que AM = bp / br ≤ 1. No multiplica la força, sinó que permet guanyar velocitat i recorregut.'
    }
  ]
};
