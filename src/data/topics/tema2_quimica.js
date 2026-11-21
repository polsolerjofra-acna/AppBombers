export const tema2Quimica = {
  id: 'tema-10',
  number: 10,
  code: 'MAN.GRAL.004',
  title: 'Química, Lleis dels Gasos, Estequiometria i Termoquímica',
  category: 'Manual Operatiu SGO — Càlcul i Ciències Bàsiques',
  estimatedMinutes: 50,
  importance: {
    title: "Radar d'Examen — Tema 10 (MAN.GRAL.004 V.1): Teoria i Càlcul Químic",
    frequency: 'Molt Alta (4-5 preguntes per examen entre teoria i problemes numèrics)',
    summary:
      "Aquest manual combina l'estructura atòmica, enllaços, hidrocarburs i propietats físiques amb 5 grans apartats de càlcul (Llei de Lavoisier, Estequiometria i Reactiu Limitant, Llei de Boyle-Mariotte, Lleis de Gay-Lussac/Charles/Gasos Ideals i Càlcul Termoquímic de Calor Específica i Calor Latent). Cada càlcul té la seva pàgina pròpia i a la Pàgina 8 tens el Formulari Resum Final amb totes les fórmules.",
    hotTopics: [
      'Cap. 2-3: Nombre atòmic (Z), màssic (A = Z + N), isòtops (Proti, Deuteri, Triti) i enllaços intra/intermoleculars.',
      'Cap. 4-5 (Càlcul): Llei de Lavoisier, mols (n = m/M), Volum Molar (22,4 L a 0 °C i 1 atm) i Reactiu Limitant (C₃H₈ + 5O₂ → 3CO₂ + 4H₂O).',
      'Cap. 6 (Càlcul): Punt crític (Tc, Pc), Boyle-Mariotte (P₁V₁ = P₂V₂), Gay-Lussac (P₁/T₁ = P₂/T₂), Charles (V₁/T₁ = V₂/T₂) i PV = nRT amb Kelvin (K = °C + 273).',
      'Cap. 7 (Càlcul): Calor específica (q = m·Ce·ΔT) i Calor latent de l’aigua (Cf = 79,7 cal/g i Cv = 539 cal/g → 619 kcal per evaporar 1 L d’aigua des de 20 °C).',
      'Cap. 8-9: Hidrocarburs (Alcans CnH2n+2, Alquens CnH2n) i Propietats (conductivitat tèrmica aigua = 20 × aire).'
    ],
    traps: [
      'Oblidar passar els graus Celsius (°C) a Kelvin (K = °C + 273) a Gay-Lussac, Charles i PV = nRT.',
      'Confondre el Volum Molar en Condicions Normals (0 °C = 273 K i 1 atm → 22,4 L/mol) amb Condicions Estàndard (25 °C).',
      'Confondre endotèrmic (ΔH > 0, absorbeix calor com la piròlisi o evaporació) amb exotèrmic (ΔH < 0, allibera calor com la combustió).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-3 Matèria',
      title: '1–3. Estructura de la Matèria (Z, N, A, Isòtops) i Enllaços Químics',
      subtitle: 'Partícules subatòmiques, polaritat de l’aigua (104,5°), enllaços intramoleculars i forces intermoleculars.',
      blocks: [
        {
          type: 'text',
          heading: '2. Estructura de la matèria, Àtoms, Ions i Isòtops',
          paragraphs: [
            "La matèria es classifica en substàncies pures (elements i compostos) i mescles (homogènies o dissolucions d'una sola fase, i heterogènies de diverses fases). L'àtom consta d'un nucli (protons p⁺ amb càrrega positiva i neutrons n⁰ neutres, tots dos de massa ≈ 1 u / 1,67·10⁻²⁷ kg) i una escorça d'electrons (e⁻ amb càrrega negativa i massa 1.836 vegades menor: 9,11·10⁻³¹ kg).",
            "Un àtom neutre té el mateix nombre de protons que d'electrons (Z = p⁺ = e⁻). Si perd electrons esdevé un Catió (+) i si en guanya esdevé un Anió (-). La molècula d'aigua (H₂O) és altament polar perquè l'oxigen és molt electronegatiu i forma un angle de 104,5° entre els dos enllaços O-H."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Identitat Atòmica (Z, N, A) i Isòtops de l’Hidrogen',
          formula: 'A = Z + N   ⇒   N = A - Z',
          variables: [
            { symbol: 'Z', meaning: 'Nombre atòmic = nombre de protons (p⁺). Defineix l’element químic' },
            { symbol: 'N', meaning: 'Nombre de neutrons (n⁰) al nucli' },
            { symbol: 'A', meaning: 'Nombre màssic = protons + neutrons (nucleons totals)' },
            { symbol: 'Isòtops', meaning: 'Mateix Z (mateix element) però diferent N i A: Proti (¹H: 0 n⁰), Deuteri (²H: 1 n⁰), Triti (³H: 2 n⁰, radioactiu)' }
          ],
          trick:
            'ISÒTOPS = Igual Z (protons), diferent N (neutrons). ISÒBARS = Igual A (massa), diferent Z.',
          example: 'Carboni-14 (¹⁴₆C): Z = 6 protons, A = 14 ⇒ N = 14 - 6 = 8 neutrons.'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · El DNI de l’Àtom (Z, A), Cations (+) vs. Anions (-) i Isòtops',
          metaphor:
            'Imagina un estadi de futbol: al punt de penal (nucli) hi ha boles pesades (protons + i neutrons neutres), i per les graderies corren mosques minúscules negatives (electrons -):',
          explanation:
            "1) El nombre de protons (Z) és el DNI immutable de l'àtom (6 protons sempre és Carboni). 2) Si un àtom perd mosques negatives (e⁻), queda amb càrrega positiva (Catió +); si n'atrapa de més, queda negatiu (Anió -). 3) Els Isòtops són germans bessons del mateix element (mateix Z = mateixos protons), però un s'ha engreixat amb més neutrons neutres al nucli (mateix Z, diferent massa A = Z + N!).",
          takeaway:
            'Truc visual: Ca+ió porta una creu (+) a la "t" = positiu (perd e⁻). Anió comença per N = Negatiu (guanya e⁻). Isòtops = mateix Z, diferent N.'
        },
        {
          type: 'table',
          title: '3. Classificació d’Enllaços Químics: Intramoleculars vs. Intermoleculars',
          subtitle: 'Taula comparativa del manual MAN.GRAL.004 (Capítol 3)',
          headers: ['Tipus d’Enllaç', 'Naturalesa i Àtoms Implicats', 'Propietats Físiques Resultants', 'Exemples Clau'],
          rows: [
            ['3.1.1. Enllaç Iònic (Intra)', 'Transferència d’electrons entre Metall (catió) + No-metall (anió)', 'Sòlids cristal·lins d’alt punt de fusió; condueixen electricitat només fosos o dissolts en aigua', 'NaCl (sal comuna), CaCl₂, MgO'],
            ['3.1.2. Enllaç Covalent (Intra)', 'Compartició de parells d’electrons entre No-metalls (simple, doble, triple)', 'Poden ser gasos, líquids o sòlids; polars (si ΔElectronegativitat ≠ 0) o apolars', 'H₂O (polar), CO₂, CH₄, O₂, N₂ (triple)'],
            ['3.1.3. Enllaç Metàl·lic (Intra)', 'Núvol d’electrons deslocalitzats ("mar d’electrons") entre àtoms metàl·lics', 'Excel·lents conductors tèrmics i elèctrics, dúctils i mal·leables', 'Fe (ferro), Cu (coure), Al (alumini)'],
            ['3.2.1. Interacció Iònica / Ió-Dipol (Inter)', 'Atracció electrostàtica entre ions o entre un ió i una molècula polar', 'Permet la solvatació i dissolució de sals en aigua (augmenta la conductivitat elèctrica)', 'Na⁺ i Cl⁻ envoltats per H₂O'],
            ['3.2.2. Pont d’Hidrogen (Inter)', 'Atracció dipol-dipol molt forta quan H s’uneix a F, O o N', 'Responsable de l’alt punt d’ebullició (100 °C), alta tensió superficial i calor latent de l’aigua', 'Aigua (H₂O), amoníac (NH₃), HF'],
            ['3.2.3. Forces de Van der Waals (Inter)', 'Forces febles entre dipols permanents o instantanis (dispersió de London)', 'Augmenten amb la massa molecular (per això metà CH₄ és gas i octà C₈H₁₈ és líquid)', 'Hidrocarburs apolars (CH₄, C₃H₈)']
          ],
          footnote: 'Ordre de força: Intramoleculars (Covalent/Iònic/Metàl·lic) >> Intermoleculars (Iònica > Pont d’Hidrogen > Van der Waals).'
        },
        {
          type: 'diagram',
          title: 'Comparativa Visual: Enllaç Iònic vs. Covalent Polar vs. Covalent Apolar vs. Metàl·lic',
          diagramType: 'chemical_bonds',
          caption:
            '1) Iònic (Metall + No-Metall: robatori d’electrons, xarxa salina). 2) Covalent Polar (No-Metalls amb diferent força: aigua H₂O i alcohols → cal escuma antialcohol). 3) Covalent Apolar (simètric sense pols: benzina, gasoil, metà CH₄ → no es barregen amb l’aigua). 4) Metàl·lic ("mar d’electrons lliures" sempre conductors).'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit: Com entendre Iònic, Covalent (Polar vs. Apolar) i Metàl·lic amb joguines!',
          metaphor:
            'Imagina que els electrons (e⁻) són joguines i els àtoms són nens al pati de l’escola:',
          explanation:
            "• 1. ENLLAÇ IÒNIC (El robatori): Un nen molt fort (No-Metall com el Clor) li ROBA la joguina a un nen que no la vol (Metall com el Sodi). El qui roba queda negatiu (Anió Cl⁻) i l'altre positiu (Catió Na⁺), i com que els pols oposats s'atreuen, queden enganxats formant un cristall dur (sal). Si és sòlid els ions estan engabiats i NO condueix el corrent; però si el fons o el poses en aigua, queden lliures i SÍ condueix!\n\n• 2. ENLLAÇ COVALENT APOLAR (Compartir com bessons): Dos nens amb la mateixa força (No-Metall + No-Metall iguals o simètrics, com O₂, N₂, metà CH₄, benzina o gasoil) COMPARTEIXEN la joguina exactament al mig. Cap banda té càrrega (no té pols). Per això la benzina i l'oli són APOLARS i fugen de l'aigua!\n\n• 3. ENLLAÇ COVALENT POLAR (Compartir amb un acaparador): Dos nens comparteixen la joguina, però un és molt més avariciós (l'Oxigen de l'aigua H₂O estira molt més fort que l'Hidrogen). La joguina passa més estona al costat de l'Oxigen (pol negatiu δ⁻) que de l'Hidrogen (pol positiu δ⁺). La molècula es converteix en un petit IMANT (dipol)! L'aigua, l'alcohol i l'acetona són POLARS (per això l'alcohol es beu l'aigua de l'escuma normal i cal escuma ANTIALCOHOL!).\n\n• 4. ENLLAÇ METÀL·LIC (La piscina comunitària): Tots els nens (Metalls: ferro, coure, alumini) deixen les seves joguines lliures en una gran piscina comuna ('mar d'electrons'). Com que els electrons corren lliures per tot arreu, els metalls condueixen l'electricitat i la calor SEMPRE i es poden doblegar sense trencar-se.",
          takeaway:
            'Regla d’or per a incendis de líquids ("El semblant dissol el semblant"): Aigua = POLAR (s’ajunta amb alcohols polars → cal escuma AR antialcohol) | Hidrocarburs (benzina/gasoil) = APOLARS (suren sobre l’aigua sense barrejar-s’hi → escuma convencional).'
        },
        {
          type: 'mnemonic',
          title: 'Truc Mnemotècnic per Memoritzar la Taula d’Enllaços i el "FON" dels Ponts d’Hidrogen',
          trick:
            '• Regla "I-Co-Me" (Intramoleculars): Iònic = Metall + No-Metall (ROBA) | Covalent = No-Metall + No-Metall (COMPARTEIX) | Metàl·lic = Metall + Metall (MAR D’ELECTRONS).\n• Regla del "Telèfon FON" per als Ponts d’Hidrogen: Només hi ha Pont d’Hidrogen quan la H truca per telè-FON als 3 àtoms més electronegatius: Fluor (HF), Oxigen (H₂O) o Nitrogen (NH₃)!',
          example:
            'Pregunta trampa típica: Per què l’aigua (H₂O, M=18 g/mol) bull a 100 °C mentre que el metà (CH₄, M=16 g/mol, gairebé el mateix pes!) bull a -161 °C? Perquè l’aigua és POLAR i té PONTS D’HIDROGEN (H unit a O del grup FON), mentre que el metà és APOLAR i només té forces febles de Van der Waals!'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 4 Lavoisier',
      title: '4. Reaccions Químiques i Teorema de Conservació de la Massa (Lavoisier)',
      subtitle: 'Els 7 tipus de reaccions del manual i càlcul ponderal amb les lleis de Lavoisier (1789) i Proust.',
      blocks: [
        {
          type: 'text',
          heading: '4.1. Els 7 Tipus de Reaccions Químiques i 4.2. Lleis Ponderals',
          paragraphs: [
            "En una reacció química, els reactius trenquen els seus enllaços i es reorganitzen per formar productes amb propietats diferents, però els àtoms ni es creen ni es destrueixen.",
            "El manual MAN.GRAL.004 classifica les reaccions en 7 tipus:",
            "• 1) Síntesi (A + B → AB) i 2) Descomposició (AB → A + B, com la piròlisi per calor o l'electròlisi).",
            "• 3) Desplaçament simple (A + BC → AC + B) i 4) Doble substitució (AB + CD → AD + CB).",
            "• 5) Àcid-base o neutralització (Àcid + Base → Sal + Aigua), 6) REDOX (tota combustió) i 7) Precipitació (formació de sòlid insoluble)."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 1: Llei de Lavoisier (1789) i Llei de Proust (Proporcions Definides)',
          formula: '∑ m_reactius = ∑ m_productes   |   (m_element A / m_element B) = constant',
          variables: [
            { symbol: '∑ m_reactius', meaning: 'Suma de les masses de tots els reactius que reaccionen efectivament (g o kg)' },
            { symbol: '∑ m_productes', meaning: 'Suma de les masses de tots els productes formats (g o kg)' },
            { symbol: 'Llei de Proust', meaning: 'Dos elements es combinen sempre en una relació de masses fixa i invariant per formar un compost' }
          ],
          trick:
            "A l'aigua (H₂O, M = 18 g/mol), 2 g d'H es combinen sempre amb 16 g d'O (proporció de Proust 1 : 8). Si poses 2 g d'H i 20 g d'O, es formen 18 g d'aigua i sobren 4 g d'oxigen sense reaccionar!",
          example:
            'Problema resolt (Llei de Lavoisier): En la combustió completa de 16 g de metà (CH₄) es consumeixen exactament 64 g d’oxigen (O₂) i es produeixen 36 g de vapor d’aigua (H₂O). Quina massa de CO₂ s’ha generat?\n• m_reactius = 16 g (CH₄) + 64 g (O₂) = 80 g.\n• m_CO₂ = 80 g - 36 g (H₂O) = 44 g de CO₂.'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Lavoisier (Peces de Lego) i Neutralització Àcid-Base (Escala pH)',
          metaphor:
            'Una reacció química no crea màgia: simplement desmunta una construcció de Lego per muntar-ne una altra amb exactament les mateixes peces!',
          explanation:
            "1) LAVOISIER (Conservació de massa): si entren 80 grams de peces Lego (16 g metà + 64 g oxigen), a l'altre costat de la fletxa n'han de sortir exactament 80 grams en total (36 g aigua + 44 g CO₂). Ni un gram es perd!\n\n2) PROUST (Proporcions): per fer aigua (H₂O), sempre fan falta 1 g d'hidrogen per cada 8 g d'oxigen; si poses oxigen de més, sobra sense reaccionar.\n\n3) ÀCID-BASE i pH (0–7–14): l'escala de pH mesura com d'agressiu és un líquid. El 7 és NEUTRE (aigua pura). De 0 a <7 són ÀCIDS (salfumant, vinagre, suc gàstric) i de >7 a 14 són BASES o alcalins (lleixiu, sosa càustica, amoníac). Quan barreges un àcid fort amb una base forta (neutralització: Àcid + Base → Sal + Aigua), es compensen mútuament i tornen cap a pH 7!",
          takeaway:
            'Lavoisier = mateixos grams abans i després. pH < 7 = Àcid | pH = 7 = Neutre | pH > 7 = Base (Àcid + Base → Sal + Aigua).'
        },
        {
          type: 'easy',
          title: 'REDOX en 5 segons: Qui s’oxida i qui es redueix en un incendi?',
          metaphor:
            "Pensa en els electrons com si fossin 'quilos de pes': qui es RE-dueix s'aprima d'estat d'oxidació perquè es menja electrons negatives.",
          explanation:
            "• OXIDACIÓ = Pèrdua d'electrons (augmenta el nombre d'oxidació). El COMBUSTIBLE s'oxida i actua com a Agent Reductor.\n• REDUCCIÓ = Guany d'electrons (disminueix el nombre d'oxidació). El COMBURENT (O₂) es redueix i actua com a Agent Oxidant.",
          takeaway: 'Combustible = s’oxida (perd e⁻, agent reductor) | Comburent (O₂) = es redueix (guanya e⁻, agent oxidant).'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 5 Estequiometria',
      title: '5. Càlcul Estequiomètric: Mols, Volum Molar (22,4 L) i Reactiu Limitant',
      subtitle: 'Nombre d’Avogadro, masses atòmiques oficials (H=1, C=12, N=14, O=16) i combustió del propà.',
      blocks: [
        {
          type: 'text',
          heading: '5.1–5.4. El Mol, Volum Molar en C.N. i Reactiu Limitant',
          paragraphs: [
            "Un mol és la quantitat de substància que conté exactament 6,022·10²³ entitats elementals (Nombre d'Avogadro, N_A). La Massa Molar (M, en g/mol) coincideix numèricament amb la massa atòmica o molecular en unitats de massa atòmica (u).",
            "En Condicions Normals (C.N.: Temperatura = 0 °C = 273 K i Pressió = 1 atm), 1 mol de QUALSEVOL gas ideal ocupa sempre un volum exacte de 22,4 litres (Volum Molar)."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 2: Fórmules de Mols, Volum Molar i Combustió d’Alcans',
          formula: 'n = m / M = N / N_A   |   V_CN (L) = n · 22,4 L/mol',
          variables: [
            { symbol: 'n', meaning: 'Nombre de mols (mol)' },
            { symbol: 'm', meaning: 'Massa de la mostra en grams (g)' },
            { symbol: 'M', meaning: 'Massa molar (g/mol). Memoritza: H=1, C=12, N=14, O=16, S=32, Cl=35,5' },
            { symbol: '22,4 L', meaning: 'Volum d’1 mol de qualsevol gas a 0 °C (273 K) i 1 atm' }
          ],
          trick:
            'Masses molars que cauen sempre i val la pena saber de memòria:\n• H₂O = 18 g/mol | CH₄ (metà) = 16 g/mol | O₂ = 32 g/mol | CO = 28 g/mol | CO₂ = 44 g/mol | C₃H₈ (propà) = 44 g/mol | C₄H₁₀ (butà) = 58 g/mol.',
          example:
            'Problema resolt del manual (Combustió del Propà i Reactiu Limitant):\nEquació ajustada: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O\n• 1 mol de propà (44 g) necessita 5 mols d’O₂ (5 × 32 = 160 g) i produeix 3 mols de CO₂ (3 × 44 = 132 g, que a C.N. ocupen 3 × 22,4 = 67,2 L) i 4 mols d’H₂O (4 × 18 = 72 g).\n• Si tenim 2 mols de C₃H₈ i 8 mols d’O₂: com que 2 mols de C₃H₈ necessitarien 10 mols d’O₂ (i només en tenim 8), l’O₂ és el REACTIU LIMITANT i el propà és el reactiu en excés!'
        },
        {
          type: 'table',
          title: 'Taula Estequiomètrica de Combustió Completa dels Hidrocarburs més Preguntats',
          subtitle: 'Relació de mols, masses i volums de gasos per a 1 mol de combustible',
          headers: ['Combustible (1 mol)', 'Massa Molar (M)', 'Equació Estequiomètrica Ajustada', 'Mols i Massa d’O₂ Necessaris', 'CO₂ Produït (Massa i Volum C.N.)'],
          rows: [
            ['Metà (CH₄)', '16 g/mol', 'CH₄ + 2 O₂ → CO₂ + 2 H₂O', '2 mols O₂ (64 g / 44,8 L)', '1 mol CO₂ (44 g / 22,4 L)'],
            ['Etilè (C₂H₄)', '28 g/mol', 'C₂H₄ + 3 O₂ → 2 CO₂ + 2 H₂O', '3 mols O₂ (96 g / 67,2 L)', '2 mols CO₂ (88 g / 44,8 L)'],
            ['Propà (C₃H₈)', '44 g/mol', 'C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O', '5 mols O₂ (160 g / 112 L)', '3 mols CO₂ (132 g / 67,2 L)'],
            ['Butà (C₄H₁₀)', '58 g/mol', 'C₄H₁₀ + 6,5 O₂ → 4 CO₂ + 5 H₂O', '6,5 mols O₂ (208 g / 145,6 L)', '4 mols CO₂ (176 g / 89,6 L)']
          ],
          footnote: 'Comprovació de Lavoisier al propà: Reactius = 44 g + 160 g = 204 g | Productes = 132 g (CO₂) + 72 g (H₂O) = 204 g.'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Què és un Mol, els 22,4 Litres i el Reactiu Limitant fent entrepans!',
          metaphor:
            'Pensa que un MOL és simplement "una dotzena de químic", i una equació química és la recepta per fer entrepans de pernil:',
          explanation:
            "1) EL MOL (n = m / M): al supermercat no compres ous d'un en un, compres dotzenes (12 ous). Com que els àtoms són minúsculs, els químics els compten en paquets gegants anomenats MOLS (6,022·10²³ unitats). Una dotzena de melons pesa molt més que una dotzena de maduixes; igualment, 1 mol d'O₂ pesa 32 g i 1 mol d'H₂O només pesa 18 g!\n\n2) VOLUM MOLAR (22,4 L): si poses 1 mol de QUALSEVOL gas (sigui metà lleuger o CO₂ pesant) a 0 °C i 1 atm, sempre infla un globus de 22,4 litres exactes!\n\n3) REACTIU LIMITANT: si la recepta d'un entrepà és '2 llesques de pa + 1 tall de pernil', i a la cuina tens 10 llesques de pa (5 entrepans) però només 3 talls de pernil, quants entrepans faràs? Només 3! El pernil s'acaba primer i atura la cuina: el pernil és el REACTIU LIMITANT i el pa que sobra és el reactiu en excés!",
          takeaway:
            'Recepta d’estequiometria en 3 passos: 1) Passa els grams a mols (÷ M) → 2) Compara mols amb la recepta per trobar el Reactiu Limitant → 3) Passa el resultat a grams (× M) o a litres de gas C.N. (× 22,4 L).'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 6.1-6.3 Boyle',
      title: '6. Canvis d’Estat, Punt Crític i Llei de Boyle-Mariotte (Procés Isotèrmic)',
      subtitle: 'Diferència entre gas i vapor (Tc, Pc) i càlcul de compressió/expansió a temperatura constant.',
      blocks: [
        {
          type: 'text',
          heading: '6.1–6.2. Canvis d’Estat, Evaporació vs. Ebullició i Punt Crític (Tc, Pc)',
          paragraphs: [
            "Els canvis d'estat endotèrmics (absorbeixen calor) són: Fusió (sòlid → líquid), Vaporització (líquid → gas) i Sublimació (sòlid → gas). Els exotèrmics (alliberen calor) són: Solidificació, Condensació/Liquació i Sublimació inversa o regressiva.",
            "No confondre Evaporació vs. Ebullició! L'EVAPORACIÓ és un fenomen lent i exclusivament superficial que es produeix a qualsevol temperatura. L'EBULLICIÓ és un fenomen tumultuós en tota la massa del líquid que es produeix a la Temperatura d'Ebullició (Te), quan la Pressió de Vapor del líquid iguala la pressió exterior (per això Te puja si augmenta la pressió!).",
            "No confondre Temperatura d'Ebullició (Te) vs. Temperatura Crítica (Tc)! La Te depèn de la pressió exterior; en canvi, la Temperatura Crítica (Tc) és un límit absolut de la substància: per sobre de Tc (GAS permanent, com l'aire o el metà a 20 °C) el gas NO es pot liquar mai per molta pressió que s'apliqui!",
            "Per sota de Tc parlem de VAPOR (sí que es liqua comprimint-lo, com el propà o el butà; la Pressió Crítica Pc és la pressió mínima necessària per liquar el gas just a la seva Tc)."
          ]
        },
        {
          type: 'diagram',
          title: 'Llei de Boyle-Mariotte (T = constant) vs. Gay-Lussac (V = constant)',
          diagramType: 'gas_laws',
          caption:
            'A temperatura constant (Boyle-Mariotte), la pressió i el volum són inversament proporcionals (P₁ · V₁ = P₂ · V₂).'
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 3: Llei de Boyle-Mariotte (Transformació Isotèrmica, T = cte)',
          formula: 'P₁ · V₁ = P₂ · V₂   ⇒   V₂ = (P₁ · V₁) / P₂',
          variables: [
            { symbol: 'P₁, P₂', meaning: 'Pressió absoluta inicial i final (en bar o atm)' },
            { symbol: 'V₁, V₂', meaning: 'Volum inicial i final (en litres o m³)' },
            { symbol: 'T = cte', meaning: 'Temperatura absoluta constant durant tot el procés' }
          ],
          trick:
            "És la fórmula amb què calculem quant d'aire cap en una ampolla d'ERA! Si comprimir l'aire a 300 vegades la pressió atmosfèrica (300 bar) dins d'una ampolla de 6,8 L, a fora a 1 bar ocuparia 300 × 6,8 = 2.040 litres!",
          example:
            'Problema resolt: Una ampolla d’ERA de V₁ = 6 litres està carregada a P₁ = 300 bar a temperatura constant. Quin volum (V₂) ocuparà aquest aire quan es descarregui a la pressió atmosfèrica exterior (P₂ = 1 bar)?\n• V₂ = (300 bar · 6 L) / 1 bar = 1.800 litres d’aire.'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Evaporació vs. Ebullició, Gas vs. Vapor (Tc) i la Xeringa de Boyle',
          metaphor:
            'Pensa en un bassal al sol, una olla bullint als fogons i una xeringa de plàstic tapada amb el dit:',
          explanation:
            "1) EVAPORACIÓ vs. EBULLICIÓ: l'evaporació és quan s'eixuga un bassal a 20 °C a poc a poc, només per la superfície. L'ebullició és l'olla a 100 °C fent bombolles violentes des de dins de tot el líquid alhora!\n\n2) GAS vs. VAPOR (Temperatura Crítica Tc): un VAPOR (com el butà o el propà) està per sota de la seva Tc: si el comprimeixes fort dins d'un encenedor o bombona, el pots tornar líquid! Un GAS permanent (com l'aire de l'ERA a temperatura ambient) està per sobre de la seva Tc: per molt que el xafis amb una premsa gegant, les molècules tenen massa energia i MAI es tornen líquides només comprimint!\n\n3) BOYLE-MARIOTTE (T = constant): tapa una xeringa plena d'aire amb el dit i prem l'èmbol fins a la meitat d'espai (de 10 mL a 5 mL). Com que hi ha els mateixos xocs en la meitat d'espai, la pressió a dins es multiplica per 2!",
          takeaway:
            'Sota de Tc = Vapor (liquable per pressió). Sobre de Tc = Gas (no liquable per molta pressió que facis). Boyle: meitat de volum = doble de pressió.'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Cap. 6.3 Gasos Ideals',
      title: '6.3. Lleis de Gay-Lussac, Charles i Equació General dels Gasos Ideals',
      subtitle: 'Càlcul d’augment de pressió d’ampolles en incendi (isòcor) i dilatació de gasos (isobàric).',
      blocks: [
        {
          type: 'text',
          heading: '6.3. Transformació Isòcora (Gay-Lussac), Isobàrica (Charles) i Gasos Ideals',
          paragraphs: [
            "En totes les lleis dels gasos on intervé la temperatura és OBLIGATORI treballar en l'escala absoluta Kelvin: T (K) = T (°C) + 273.",
            "• Llei de Gay-Lussac (procés ISÒCOR, a volum constant V = cte): En un recipient rígid com un cilindre metàl·lic d'ERA o de GLP, la pressió absoluta és directament proporcional a la temperatura en Kelvin (P₁/T₁ = P₂/T₂).",
            "• Llei de Charles (procés ISOBÀRIC, a pressió constant P = cte): El volum d'un gas és directament proporcional a la seva temperatura absoluta (V₁/T₁ = V₂/T₂): per això els fums calents es dilaten, perden densitat i pugen al sostre."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 4: Gay-Lussac, Charles, Llei Combinada i Equació PV = nRT',
          formula: 'P₁/T₁ = P₂/T₂ (V=cte)  |  V₁/T₁ = V₂/T₂ (P=cte)  |  (P₁·V₁)/T₁ = (P₂·V₂)/T₂  |  P·V = n·R·T',
          variables: [
            { symbol: 'T (K)', meaning: 'Temperatura absoluta en Kelvin: K = °C + 273 (0 °C = 273 K | 27 °C = 300 K)' },
            { symbol: 'R', meaning: 'Constant universal dels gasos ideals: R = 0,082 atm·L/(mol·K) = 8,314 J/(mol·K)' },
            { symbol: 'n', meaning: 'Nombre de mols de gas (n = m / M)' }
          ],
          trick:
            'Memoritza les temperatures Kelvin que sempre posa el tribunal perquè surtin números rodons:\n• 0 °C = 273 K | 27 °C = 300 K | 127 °C = 400 K | 227 °C = 500 K | 327 °C = 600 K | 627 °C = 900 K!',
          example:
            'Problema resolt d’examen (Gay-Lussac): Una ampolla metàl·lica rígida (V = cte) es troba a 27 °C (T₁ = 300 K) amb una pressió absoluta P₁ = 200 bar. Si queda atrapada en un incendi i s’escalfa fins a 327 °C (T₂ = 600 K), quina pressió assolirà?\n• P₂ = P₁ · (T₂ / T₁) = 200 bar · (600 K / 300 K) = 200 · 2 = 400 bar!'
        },
        {
          type: 'easy',
          title: 'El Parany Mortal dels Graus Celsius (°C)',
          metaphor:
            'Si un gas passa de 20 °C a 40 °C, NO duplica la seva temperatura ni la seva pressió!',
          explanation:
            'En escala absoluta Kelvin, passar de 20 °C (293 K) a 40 °C (313 K) és només un augment del 6,8% (313 / 293 = 1,068). Per duplicar la pressió d’una ampolla que està a 27 °C (300 K), ha d’arribar a 600 K (327 °C)!',
          takeaway: 'Primer pas automàtic en qualsevol problema de gasos: sumar +273 a totes les temperatures en °C.'
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · Com no confondre mai Boyle, Charles i Gay-Lussac',
          acronym: '"PaVo" beuen "Te" · Gran Via (Gay-Lussac) · BTT (Boyle) · CP (Charles) · PORC/GROC',
          trick:
            "1) Gasos ideals: \"PaVo\" (Pressió × Volum) beuen \"Te\" (Temperatura divideix) → (P·V)/T = cte.\n2) Gay-Lussac → Volum → Gran Via (V constant: P₁/T₁ = P₂/T₂).\n3) Boyle → Temperatura → BTT (T constant: P₁·V₁ = P₂·V₂).\n4) Charles → Pressió → CP (Cicle Professional, P constant: V₁/T₁ = V₂/T₂).\n5) Redox: PORC (combustible: Perd e⁻, s'Oxida, Reductor) | GROC (comburent: Guanya e⁻, es Redueix, Oxidant).",
          example:
            'Equació P·V = n·R·T ("PaVo / Te"). Recorda: 27 °C = 300 K i 327 °C = 600 K (el doble de T absoluta!).'
        }
      ]
    },
    {
      pageNumber: 6,
      shortLabel: 'Pàg. 6 · Cap. 7 Termoquímica',
      title: '7. Càlcul Termoquímic: Entalpia (ΔH), Calor Específica i Calor Latent (619 kcal)',
      subtitle: 'Primer Principi de la Termodinàmica i càlcul del poder refrigerant de l’aigua en l’extinció.',
      blocks: [
        {
          type: 'text',
          heading: '7.1–7.3. Termoquímica, Entalpia (ΔH), Calor Específica (Ce) i Calor Latent (L)',
          paragraphs: [
            "El Primer Principi de la Termodinàmica estableix que la variació d'energia interna d'un sistema és ΔU = q + w (on q és la calor i w el treball). La calor bescanviada a pressió constant s'anomena Variació d'Entalpia (ΔH = q_p): si ΔH < 0 la reacció és EXOTÈRMICA (allibera calor a l'entorn, com la combustió); si ΔH > 0 és ENDOTÈRMICA (absorbeix calor, com la piròlisi o la vaporització de l'aigua).",
            "Quan projectem aigua a un incendi, aquesta roba calor del foc en dues etapes: 1) Calor Sensible (s'escalfa fins a 100 °C amb la seva Calor Específica Ce = 1 cal/(g·°C) = 4,184 J/(g·°C)) i 2) Calor Latent de Vaporització (passa de líquid a 100 °C a vapor a 100 °C sense canviar de temperatura, absorbint Cv = 539 cal/g = 540 kcal/kg!)."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 5: Calor Sensible (Ce) + Calor Latent (Cf / Cv) de l’Aigua',
          formula: 'q_sensible = m · Ce · ΔT   |   q_latent = m · C_v   |   q_total = m · (Ce · ΔT + C_v)',
          variables: [
            { symbol: 'Ce (aigua)', meaning: 'Calor específica de l’aigua líquida = 1 cal/(g·°C) = 1 kcal/(kg·°C) = 4.184 J/(kg·K)' },
            { symbol: 'Cf (fusió gel)', meaning: 'Calor latent de fusió del gel a 0 °C = 79,7 cal/g (≈ 80 kcal/kg = 334 kJ/kg)' },
            { symbol: 'Cv (vaporització)', meaning: 'Calor latent de vaporització a 100 °C = 539 cal/g (≈ 540 kcal/kg = 2.260 kJ/kg)' },
            { symbol: '1 caloria', meaning: 'Equivalència mecànica de la calor: 1 cal = 4,184 J | 1 kcal = 4,184 kJ' }
          ],
          trick:
            "Fixa't en la proporció brutal: Vaporitzar 1 gram d'aigua a 100 °C absorbeix 539 calories, que és gairebé 7 VEGADES més calor que escalfar-la des de 20 °C fins a 100 °C (80 calories)! Per això en atac a gasos polvoritzem l'aigua: si l'aigua cau a terra en toll sense evaporar-se, desaprofitem el 87% del seu poder d'extinció!",
          example:
            'Problema resolt del manual (pàg. 20 de MAN.GRAL.004): Quanta calor absorbeix 1 litre d’aigua (m = 1.000 g) que surt de la llança a 20 °C i s’evapora completament a 100 °C dins de l’incendi?\n1) Escalfar de 20 °C a 100 °C (ΔT = 80 °C): q₁ = 1.000 g · 1 cal/(g·°C) · 80 °C = 80.000 cal (80 kcal).\n2) Vaporitzar a 100 °C: q₂ = 1.000 g · 539 cal/g = 539.000 cal (539 kcal).\n3) TOTAL: q_total = 80 + 539 = 619.000 cal = 619 kcal (≈ 2,59 MJ per cada litre d’aigua evaporat!).'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Exotèrmic vs. Endotèrmic i per què l’Aigua Apaga Robant Calor en 2 Fases',
          metaphor:
            'Imagina pujar una escala fins a un trampolí (Calor Sensible) i després fer un salt gegant a l’aigua (Calor Latent):',
          explanation:
            "1) EXO vs. ENDO: EXOtèrmica = treu calor cap a l'EXterior (com un foc que escalfa l'habitació: ΔH < 0). ENDOtèrmica = s'empassa calor cap a DINS (com el gel desfent-se o l'aigua evaporant-se: ΔH > 0).\n\n2) CALOR SENSIBLE (puja el termòmetre): quan tires 1 L d'aigua a 20 °C al foc, cada grau que s'escalfa fins a 100 °C només roba 1 kcal (total = 80 kcal).\n\n3) CALOR LATENT (el termòmetre es clava a 100 °C!): un cop a 100 °C, per trencar els forts ponts d'hidrogen i convertir aquell litre d'aigua en vapor a 100 °C, l'aigua xucla de l'incendi 539 kcal de cop — gairebé 7 VEGADES més calor sense pujar ni un grau el termòmetre!",
          takeaway:
            'Escalfar de 20 a 100 °C = 80 kcal/L. Vaporitzar a 100 °C = 539 kcal/L (Total = 619 kcal/L). Si l’aigua cau a terra sense evaporar-se, perds el 87% del seu poder d’extinció!'
        }
      ]
    },
    {
      pageNumber: 7,
      shortLabel: 'Pàg. 7 · Cap. 8-9 Hidrocarburs',
      title: '8–9. Hidrocarburs (Alcans i Alquens) i Propietats Físiques de la Matèria',
      subtitle: 'Sèries homòlogues (Met-, Et-, Prop-, But-) i les 5 propietats físiques del Capítol 9.',
      blocks: [
        {
          type: 'table',
          title: '8. Formulació i Estat Físic dels Hidrocarburs Alifàtics (Alcans i Alquens)',
          subtitle: 'Alcans saturats (enllaç simple C-C, fórmula CnH2n+2) i Alquens insaturats (doble enllaç C=C, fórmula CnH2n)',
          headers: ['Prefix (Nº Carbonis)', 'Alcà (CnH2n+2)', 'Alquè (CnH2n)', 'Estat Físic a 20 °C i 1 atm', 'Característica Operativa SGO'],
          rows: [
            ['Met- (C₁)', 'Metà (CH₄)', '— (no existeix)', 'Gas (C₁ a C₄ són gasos)', 'Principal component del Gas Natural (GNC/GNL); més lleuger que l’aire (d ≈ 0,55)'],
            ['Et- (C₂)', 'Età (C₂H₆)', 'Etè o Etilè (C₂H₄)', 'Gas', 'Gas inflamable usat en síntesi de polietilè i maduració'],
            ['Prop- (C₃)', 'Propà (C₃H₈)', 'Propè o Propilè (C₃H₆)', 'Gas (GLP liquat a pressió)', 'Més pesant que l’aire (d ≈ 1,5); s’acumula a soterranis'],
            ['But- (C₄)', 'Butà (C₄H₁₀)', 'Butè o Butilè (C₄H₈)', 'Gas (GLP liquat a pressió)', 'Més pesant que l’aire (d ≈ 2,0); bombones domèstiques'],
            ['Pent- a Hexadec- (C₅–C₁₆)', 'Pentà (C₅H₁₂), Octà (C₈H₁₈)...', 'Pentè (C₅H₁₀), Octè...', 'Líquids (C₅ a C₁₆)', 'Gasolines, querosè i gasoils d’automoció'],
            ['≥ C₁₇', 'Heptadecà (C₁₇H₃₆)...', '—', 'Sòlids / Ceres (≥ C₁₇)', 'Parafines, ceres i betums asfàltics']
          ],
          footnote: 'Memoritza el tall d’estats físics dels alcans: C₁ a C₄ = GASOS | C₅ a C₁₆ = LÍQUIDS | ≥ C₁₇ = SÒLIDS (parafines).'
        },
        {
          type: 'table',
          title: '9. Les 5 Propietats Físiques i Químiques del Manual (MAN.GRAL.004 Cap. 9)',
          subtitle: 'Dades literals d’examen sobre densitat, conductivitat, viscositat i tensió superficial',
          headers: ['Propietat (Secció)', 'Definició i Unitats', 'Dades Numèriques Imprescindibles del Manual'],
          rows: [
            ['9.1. Densitat (ρ) i Densitat Relativa', 'ρ = m / V (kg/m³ o g/cm³)', 'Referència per a líquids/sòlids: Aigua = 1 g/cm³ (1.000 kg/m³). Referència per a gasos: Aire = 1 (gas amb d < 1 puja; d > 1 baixa a terra).'],
            ['9.2. Conductivitat Tèrmica (λ)', 'Capacitat de conduir calor (W/(m·K))', 'Metalls = alta | Aire = molt baixa (aïllant). DADA CLAU: L’aigua condueix la calor 20 VEGADES MÉS que l’aire (per això un EPI mullat crema el bomber per conducció!).'],
            ['9.3. Conductivitat Elèctrica', 'Moviment de càrregues (S/m)', 'L’aigua pura destil·lada és aïllant, però l’aigua d’extinció porta sals dissoltes (ions) i és CONDUCTORA (perill d’electrocució).'],
            ['9.4. Viscositat (μ)', 'Resistència d’un fluid a fluir', 'Unitat habitual: centipoise (cp; aigua a 20 °C = 1 cp) o graus SAE en olis. En LÍQUIDS la viscositat DISMINUEIX si puja la Tª; en GASOS AUGMENTA amb la Tª.'],
            ['9.5. Tensió Superficial (γ)', 'Força de cohesió superficial (N/m)', 'L’aigua té una tensió superficial molt alta (0,073 N/m a 20 °C) pels ponts d’hidrogen i forma gotes. Els humectants/tensioactius (0,1-1%) la redueixen perquè penetri en focs profunds Classe A.']
          ],
          footnote: 'Parany clau: Si augmenta la temperatura, els líquids es tornen menys viscosos (més fluids), però els gasos es tornen MÉS viscosos!'
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · Els 4 Primers Hidrocarburs i el Tall Gas / Líquid / Sòlid',
          acronym: 'ME · E · PRO · BU   (1 · 2 · 3 · 4 carbonis)',
          trick:
            "Per recordar l'ordre dels 4 primers prefixos sense dubtar: 'MErcè Està PROu BUena' → 1 = Met- (CH₄), 2 = Et- (C₂H₆), 3 = Prop- (C₃H₈), 4 = But- (C₄H₁₀). Del 5 en endavant són prefixos grecs normals (Pent-, Hex-, Hept-, Oct-...). Tall d'estats a 20 °C: C₁–C₄ = GASOS | C₅–C₁₆ = LÍQUIDS | ≥ C₁₇ = SÒLIDS (ceres).",
          example:
            'Alcà (-à, enllaç simple) = C_n H_{2n+2} (Propà = C₃H₈) | Alquè (-è, doble enllaç) = C_n H_{2n} (Propè = C₃H₆).'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Les 5 Propietats Físiques aplicades al Parc de Bombers',
          metaphor:
            'Com es tradueixen la densitat, conductivitat, viscositat i tensió superficial en una intervenció real:',
          explanation:
            "1) DENSITAT DE GASOS (Aire = 1): si pesa menys d'1 (Metà 0,55), s'escapa cap al sostre com un globus d'heli; si pesa més d'1 (Propà 1,5 o Butà 2,0), cau com aigua invisible i s'embassa als soterranis!\n\n2) CONDUCTIVITAT TÈRMICA (20×): l'aire sec dins del teu EPI t'aïlla com un abric de plomes; però l'aigua condueix la calor 20 VEGADES més ràpid que l'aire! Si mulles l'EPI, la calor travessa el vestit directe cap a la pell.\n\n3) VISCOSITAT (Mel vs. Fum): si escalfes un líquid (oli/mel), es fa més fluid (baixa la viscositat). Si escalfes un gas, les molècules xoquen com boges i li costa més fluir (puja la viscositat!).\n\n4) TENSIÓ SUPERFICIAL: les gotes d'aigua fan boletes per culpa dels ponts d'hidrogen i reboten sobre un matalàs; els humectants trenquen aquesta pell perquè l'aigua penetri fins al fons de la brasa.",
          takeaway:
            'Gas d < 1 puja | d > 1 baixa al soterrani. Aigua = 20× més conductora que l’aire. Amb calor: líquids MENYS viscosos, gasos MÉS viscosos.'
        }
      ]
    },
    {
      pageNumber: 8,
      isFormulaSheet: true,
      shortLabel: 'Pàg. 8 · 🧮 Formulari Final',
      title: 'Pàgina Final: Formulari Resum de Totes les Fórmules i Constants de Química',
      subtitle: 'Totes les equacions, constants i equivalències del manual MAN.GRAL.004 en una sola pàgina.',
      blocks: [
        {
          type: 'table',
          title: 'Formulari Oficial Complet — Tema 10 (Química MAN.GRAL.004)',
          subtitle: 'Resum definitiu de fórmules i constants per resoldre qualsevol problema de química a l’examen',
          headers: ['Apartat / Llei', 'Fórmula Matemàtica', 'Constants i Valors Oficials', 'Exemple / Regla Operativa'],
          rows: [
            ['1. Estructura Atòmica', 'A = Z + N   |   N = A - Z', 'Z = protons | N = neutrons | A = nucleons', 'Àtom neutre: e⁻ = Z | Catió (+) perd e⁻ | Anió (-) guanya e⁻'],
            ['2. Llei de Lavoisier (1789)', '∑ m_reactius = ∑ m_productes', 'La massa total es conserva sempre', 'En C₃H₈ + 5O₂ → 3CO₂ + 4H₂O: 44g + 160g = 132g + 72g (204g)'],
            ['3. Càlcul de Mols', 'n = m / M = N / N_A', 'N_A = 6,022·10²³ mol⁻¹ | H=1, C=12, N=14, O=16', 'M(H₂O)=18 | M(CO)=28 | M(O₂)=32 | M(CO₂)=44 | M(C₃H₈)=44'],
            ['4. Volum Molar (C.N.)', 'V = n · 22,4 L', 'Condicions Normals: 0 °C (273 K) i 1 atm', '1 mol de qualsevol gas ideal a 0 °C i 1 atm ocupa 22,4 L'],
            ['5. Conversió a Kelvin', 'T (K) = T (°C) + 273', '0 °C = 273 K | 27 °C = 300 K | 100 °C = 373 K', '327 °C = 600 K (duplica la T absoluta respecte a 27 °C!)'],
            ['6. Llei de Boyle-Mariotte', 'P₁ · V₁ = P₂ · V₂', 'Procés Isotèrmic (T = constant)', 'Ampolla 6 L a 300 bar ⇒ 1.800 L d’aire a 1 bar'],
            ['7. Llei de Gay-Lussac', 'P₁ / T₁ = P₂ / T₂', 'Procés Isòcor (V = constant, ampolla rígida)', 'Ampolla a 200 bar i 27 °C (300 K) passa a 400 bar a 327 °C (600 K)'],
            ['8. Llei de Charles', 'V₁ / T₁ = V₂ / T₂', 'Procés Isobàric (P = constant)', 'Els gasos d’incendi a 600 K tripliquen volum o redueixen ρ'],
            ['9. Equació Gasos Ideals', 'P · V = n · R · T', 'R = 0,082 atm·L/(mol·K) = 8,314 J/(mol·K)', 'Llei combinada: (P₁ · V₁) / T₁ = (P₂ · V₂) / T₂'],
            ['10. 1r Principi i Entalpia', 'ΔU = q + w   |   ΔH = q_p', 'ΔH < 0 Exotèrmica | ΔH > 0 Endotèrmica', '1 cal = 4,184 J | 1 kcal = 4.184 J'],
            ['11. Calor Sensible (Ce)', 'q₁ = m · Ce · (T_f - T_i)', 'Ce(aigua) = 1 cal/(g·°C) = 1 kcal/(kg·°C)', 'Escalfar 1 L d’aigua de 20 °C a 100 °C absorbeix 80 kcal'],
            ['12. Calor Latent (Cf / Cv)', 'q₂ = m · L', 'Cf(gel) = 79,7 cal/g | Cv(vapor) = 539 cal/g', 'Vaporitzar 1 L d’aigua a 100 °C absorbeix 539 kcal (Total des de 20°C = 619 kcal)'],
            ['13. Fórmula Alcans / Alquens', 'Alcans: C_n H_{2n+2} | Alquens: C_n H_{2n}', 'C₁-C₄ gasos | C₅-C₁₆ líquids | ≥C₁₇ sòlids', 'Propà (n=3): C₃H₈ | Propè (n=3): C₃H₆'],
            ['14. Densitat i Viscositat', 'ρ = m / V', 'ρ_aigua = 1.000 kg/m³ | μ_aigua(20°C) = 1 cp', 'Conductivitat tèrmica aigua = 20 × conductivitat aire']
          ],
          footnote: 'Domina aquestes 14 files del Formulari de Química i tindràs el 100% dels problemes del Tema 10 assegurats.'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q10-1',
      difficulty: 'Fàcil',
      question: "Quants neutrons té un isòtop de Carboni-14 (¹⁴₆C) amb nombre atòmic Z = 6 i nombre màssic A = 14?",
      options: ['6 neutrons', '8 neutrons', '14 neutrons', '20 neutrons'],
      correctIndex: 1,
      explanation: 'N = A - Z = 14 - 6 = 8 neutrons.'
    },
    {
      id: 'q10-2',
      difficulty: 'Mitjà',
      question: "En la combustió completa d'1 mol de propà (C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O), quin volum de CO₂ es genera si es mesura en Condicions Normals (0 °C i 1 atm)?",
      options: ['22,4 L', '44,8 L', '67,2 L', '112,0 L'],
      correctIndex: 2,
      explanation: "Es generen 3 mols de CO₂ per cada mol de propà. En C.N. (0 °C i 1 atm), 1 mol ocupa 22,4 L ⇒ 3 × 22,4 L = 67,2 litres."
    },
    {
      id: 'q10-3',
      difficulty: 'Mitjà',
      question: "Una ampolla metàl·lica rígida (V = constant) conté aire a 200 bar de pressió absoluta a 27 °C. Si en un incendi s'escalfa fins a 327 °C, quina pressió assolirà segons la Llei de Gay-Lussac?",
      options: ['242 bar', '300 bar', '400 bar', '2.420 bar'],
      correctIndex: 2,
      explanation: 'T₁ = 27 + 273 = 300 K; T₂ = 327 + 273 = 600 K. Com que T₂ és el doble de T₁, la pressió es duplica: P₂ = 200 · (600/300) = 400 bar.'
    },
    {
      id: 'q10-4',
      difficulty: 'Difícil',
      question: "Segons el manual MAN.GRAL.004, quanta calor total absorbeix 1 litre (1.000 g) d'aigua que entra a l'incendi a 20 °C i s'evapora completament a 100 °C (Ce = 1 cal/g·°C; Cv = 539 cal/g)?",
      options: ['80 kcal', '539 kcal', '619 kcal', '718,7 kcal'],
      correctIndex: 2,
      explanation: 'q_total = q_sensible (1.000 · 1 · 80 = 80 kcal) + q_latent (1.000 · 539 = 539 kcal) = 619 kcal (619.000 cal).'
    },
    {
      id: 'q10-5',
      difficulty: 'Fàcil',
      question: "Quantes vegades més gran és la conductivitat tèrmica de l'aigua en comparació amb la de l'aire segons el capítol 9 del manual de Química?",
      options: ['2 vegades més gran', '5 vegades més gran', '20 vegades més gran', '100 vegades més gran'],
      correctIndex: 2,
      explanation: "L'aigua condueix la calor 20 vegades més que l'aire; per això un EPI humit o mullat transmet la calor de l'incendi cap a la pell del bomber molt ràpidament."
    },
    {
      id: 'q10-6',
      difficulty: 'Fàcil',
      question: "Quan un àtom neutre guanya electrons es transforma en un..., i quins són els tres isòtops de l'hidrogen descrits al manual?",
      options: [
        'Catió (càrrega positiva) | Proti, Deuteri i Triti',
        'Anió (càrrega negativa) | Proti, Deuteri i Triti',
        'Isòbar (càrrega neutra) | Carboni-12, Carboni-13 i Carboni-14',
        'Anió (càrrega positiva) | Metà, Età i Propà'
      ],
      correctIndex: 1,
      explanation: "Un àtom que guanya electrons queda carregat negativament i s'anomena anió. Els tres isòtops de l'hidrogen (mateix Z = 1) són Proti (¹H), Deuteri (²H) i Triti (³H)."
    },
    {
      id: 'q10-7',
      difficulty: 'Mitjà',
      question: "Per què l'aigua (H₂O, M = 18 g/mol) bull a 100 °C mentre que el metà (CH₄, M = 16 g/mol) bull a -161 °C tot i tenir una massa molar molt similar?",
      options: [
        "Perquè l'aigua és una molècula polar que forma ponts d'hidrogen entre molècules, mentre que el metà és apolar i només presenta forces febles de Van der Waals.",
        "Perquè l'aigua presenta un enllaç iònic intramolecular amb forta atracció electrostàtica, mentre que el metà forma xarxes covalents febles de baixa cohesió.",
        "Perquè la geometria lineal de l'aigua (angle d'enllaç de 180°) maximitza la superfície de contacte molecular, mentre que el metà tetraèdric es repel·leix.",
        "Perquè el metà només estableix ponts d'hidrogen intermoleculars a pressions superiors a la crítica, mentre que l'aigua ho fa per atracció dipol-dipol induït."
      ],
      correctIndex: 0,
      explanation: "L'aigua (angle 104,5°) és molt polar i forma ponts d'hidrogen forts (H unit a O), mentre que el metà és apolar i només té forces febles de Van der Waals."
    },
    {
      id: 'q10-8',
      difficulty: 'Mitjà',
      question: "Aplicant la Llei de Boyle-Mariotte (procés isotèrmic a temperatura constant), quin volum d'aire a pressió atmosfèrica (P₂ = 1 bar) ocuparà l'aire contingut en una ampolla d'ERA de V₁ = 6,8 litres carregada a P₁ = 300 bar?",
      options: ['44,1 litres', '1.800 litres', '2.040 litres', '3.000 litres'],
      correctIndex: 2,
      explanation: 'Per la Llei de Boyle-Mariotte (P₁ · V₁ = P₂ · V₂): V₂ = (300 bar · 6,8 L) / 1 bar = 2.040 litres d’aire.'
    },
    {
      id: 'q10-9',
      difficulty: 'Difícil',
      question: "Segons l'equació ajustada de combustió completa del propà (C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O), si barregem 2 mols de propà (C₃H₈) amb 8 mols d'oxigen (O₂), quin és el reactiu limitant i quants mols de propà queden en excés sense reaccionar?",
      options: [
        "El reactiu limitant és el propà i sobren 3 mols d'O₂.",
        'Reaccionen tots dos completament sense que en sobri cap.',
        "El reactiu limitant és l'O₂ i queden 0,4 mols de propà en excés.",
        "El reactiu limitant és el CO₂ i queden 2 mols d'O₂ en excés."
      ],
      correctIndex: 2,
      explanation: "2 mols de C₃H₈ necessitarien 10 mols d'O₂, però només n'hi ha 8; per tant, l'O₂ és el reactiu limitant. Aquests 8 mols d'O₂ consumeixen 8/5 = 1,6 mols de propà i en sobren 2 - 1,6 = 0,4 mols."
    },
    {
      id: 'q10-10',
      difficulty: 'Mitjà',
      question: "Segons la definició del Punt Crític del capítol 6 del manual, quina és la diferència física entre un 'vapor' i un 'gas'?",
      options: [
        'Un vapor es troba per sobre de la seva Temperatura Crítica (Tc) sense poder-se condensar, mentre que un gas es troba per sota de Tc i liqua en escalfar-se.',
        'Un gas es troba per sota de la seva Temperatura Crítica (Tc) i es pot liquar per compressió; un vapor es troba per sobre de Tc i requereix refredament previ.',
        "Un vapor sempre presenta una densitat relativa superior a la de l'aire en condicions normals, mentre que un gas permanent sempre és més lleuger que l'aire.",
        'Un vapor es troba per sota de la seva Temperatura Crítica (Tc) i es pot liquar per compressió; un gas es troba per sobre de Tc i no es pot liquar només comprimint-lo.'
      ],
      correctIndex: 3,
      explanation: 'Per sota de la Temperatura Crítica (Tc) parlem de vapor (es pot liquar per compressió, com propà o butà); per sobre de Tc parlem de gas permanent.'
    },
    {
      id: 'q10-11',
      difficulty: 'Mitjà',
      question: 'Quina és la fórmula general dels alcans i a partir de quants àtoms de carboni els hidrocarburs alifàtics passen a ser líquids o sòlids a 20 °C i 1 atm?',
      options: [
        'CₙH₂ₙ | C₁–C₂ són gasos, C₃–C₁₀ líquids i ≥ C₁₁ sòlids.',
        'CₙH₂ₙ₊₂ | C₁–C₄ són gasos, C₅–C₁₆ són líquids i ≥ C₁₇ són sòlids.',
        'CₙH₂ₙ₊₂ | C₁–C₈ són gasos i ≥ C₉ són sòlids.',
        'CₙH₂ₙ₋₂ | C₁–C₄ són líquids i ≥ C₅ són gasos.'
      ],
      correctIndex: 1,
      explanation: 'Els alcans responen a la fórmula CₙH₂ₙ₊₂. A 20 °C i 1 atm, de C₁ a C₄ són gasos, de C₅ a C₁₆ són líquids i a partir de C₁₇ són sòlids (parafines i ceres).'
    },
    {
      id: 'q10-12',
      difficulty: 'Difícil',
      question: 'Com varia la viscositat (μ) quan augmenta la temperatura en els líquids i en els gasos segons el capítol 9 del manual MAN.GRAL.004?',
      options: [
        'Augmenta tant en líquids com en gasos perquè creix l’energia cinètica i el fregament intern.',
        'Disminueix tant en líquids com en gasos en debilitar-se les forces de cohesió intermoleculars.',
        'En líquids augmenta amb la temperatura per dilatació, mentre que en gasos disminueix en reduir-se la densitat.',
        'En líquids disminueix si puja la temperatura, mentre que en gasos augmenta amb la temperatura.'
      ],
      correctIndex: 3,
      explanation: 'Tal com recull la secció 9.4 del manual, en augmentar la temperatura la viscositat dels líquids disminueix (es tornen més fluids), mentre que en els gasos augmenta.'
    },
    {
      id: 'q10-13',
      difficulty: 'Mitjà',
      question: "Segons la convenció vigent de la IUPAC (des de 1982), quins són els valors de temperatura i pressió de les condicions estàndard (STP)?",
      options: [
        '298,15 K (25 °C) i 101.325 Pa (1 atm).',
        '273,15 K (0 °C) i 10⁵ Pa (100 kPa = 1 bar).',
        '273,15 K (0 °C) i 101.325 Pa (1 atm).',
        '293,15 K (20 °C) i 10⁵ Pa (1 bar).'
      ],
      correctIndex: 1,
      explanation: "Les condicions estàndard STP definides per la IUPAC són 273,15 K (0 °C) de temperatura i 10⁵ Pa (100 kPa o 1 bar) de pressió, on 1 mol de gas ideal ocupa 22,71 litres."
    },
    {
      id: 'q10-14',
      difficulty: 'Difícil',
      question: "Quina afirmació és INCORRECTA respecte a com varia la viscositat dels fluids (líquids i gasos) amb la temperatura (T) i la pressió (P)?",
      options: [
        "En els líquids, un augment de temperatura disminueix la viscositat perquè es vencen les forces de cohesió intermoleculars.",
        "En els gasos, un augment de temperatura incrementa la viscositat a causa del major intercanvi de quantitat de moviment entre molècules.",
        "En els gasos a pressions moderades, la viscositat augmenta molt ràpidament de forma proporcional a la pressió i disminueix en pujar la temperatura.",
        "En els líquids, la viscositat és poc sensible a variacions moderades de pressió, però augmenta a pressions molt elevades."
      ],
      correctIndex: 2,
      explanation: "És incorrecte: en els gasos la viscositat AUGMENTA amb la temperatura i és pràcticament independent de la pressió a pressions moderades."
    },
    {
      id: 'q10-15',
      difficulty: 'Mitjà',
      question: "En una emergència amb dipòsits de gasos a pressió, quina afirmació és INCORRECTA respecte a la Temperatura Crítica (Tc) i la diferència entre gas i vapor?",
      options: [
        "Un vapor és una substància en fase gasosa que es troba a una temperatura inferior a la seva Temperatura Crítica (T < Tc).",
        "Qualsevol vapor (T < Tc) pot ser liquat únicament augmentant la pressió a temperatura constant.",
        "Un gas per sobre de la seva Temperatura Crítica (T > Tc) es pot liquar fàcilment si només s'augmenta prou la pressió sense refredar-lo.",
        "El metà (Tc = -82,6 °C) a temperatura ambient és un gas permanent, mentre que el propà (Tc = 96,7 °C) es comporta com un vapor i s'emmagatzema liquat."
      ],
      correctIndex: 2,
      explanation: "Per sobre de la Temperatura Crítica (T > Tc) és físicament impossible liquar un gas per simple compressió isotèrmica, per elevada que sigui la pressió; cal refredar-lo per sota de Tc."
    },
    {
      id: 'q10-16',
      difficulty: 'Mitjà',
      question: "Quina és l'equació química estequiomètricament ajustada amb coeficients enters mínims per a la combustió completa del butà (C₄H₁₀)?",
      options: [
        'C₄H₁₀ + 6 O₂ → 4 CO₂ + 5 H₂O',
        '2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O',
        '2 C₄H₁₀ + 10 O₂ → 8 CO₂ + 10 H₂O',
        'C₄H₁₀ + 13 O₂ → 4 CO₂ + 5 H₂O'
      ],
      correctIndex: 1,
      explanation: "Comptant àtoms a banda i banda: 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O dona 8 àtoms de C, 20 d'H i 26 d'O (8×2 + 10×1 = 26)."
    },
    {
      id: 'q10-17',
      difficulty: 'Fàcil',
      question: "Quina de les següents afirmacions sobre el mol, el nombre d'Avogadro i les masses molars (H = 1 g/mol; C = 12 g/mol; O = 16 g/mol) és INCORRECTA?",
      options: [
        "Un mol de qualsevol substància conté aproximadament 6,022 × 10²³ entitats elementals.",
        "La massa d'1 mol de carboni-12 és exactament 12 grams.",
        "La massa d'1 mol d'aigua (H₂O) és de 12 grams.",
        "En 1 mol de molècules d'oxigen (O₂) hi ha 32 grams de massa."
      ],
      correctIndex: 2,
      explanation: "La massa molar de l'aigua (H₂O) és 2 × 1 + 16 = 18 g/mol; per tant, 1 mol d'aigua té una massa de 18 grams, no de 12 grams."
    },
    {
      id: 'q10-18',
      difficulty: 'Mitjà',
      question: "Quina diferència fonamental hi ha entre la Temperatura d'Ebullició (Te) i la Temperatura Crítica (Tc) d'una substància?",
      options: [
        "La Te depèn de la pressió exterior (és la Tª a la qual la pressió de vapor iguala la pressió externa), mentre que la Tc és un valor fix intrínsec per sobre del qual el gas no es pot liquar per cap pressió.",
        "La Te és un valor fix intrínsec de cada substància independent de l'entorn, mentre que la Tc varia directament amb la pressió atmosfèrica exterior i sempre és inferior a la Te en qualsevol líquid.",
        "La Tc indica el punt exacte en què la pressió de vapor iguala la pressió atmosfèrica estàndard (1 atm), mentre que la Te marca el límit absolut per sobre del qual no pot existir fase líquida a cap pressió.",
        "Per sobre de la Te una substància mai pot passar a estat líquid encara que s'augmenti la pressió del recipient, mentre que per sobre de la Tc només es pot liquar aplicant una compressió isotèrmica ràpida."
      ],
      correctIndex: 0,
      explanation: "La Temperatura d'Ebullició (Te) augmenta si puja la pressió (ex. olla a pressió o BLEVE). La Temperatura Crítica (Tc), en canvi, és el límit absolut per sobre del qual cap pressió pot liquar el gas."
    },
    {
      id: 'q10-19',
      difficulty: 'Fàcil',
      question: 'Com es comporten habitualment les substàncies polars respecte als dissolvents?',
      options: [
        'Es dissolen millor en dissolvents no polars que en aigua.',
        'No poden dissoldre’s en altres substàncies polars.',
        'Es dissolen igual en dissolvents polars i no polars.',
        'Es dissolen en aigua i en altres dissolvents polars.'
      ],
      correctIndex: 3,
      explanation: 'Regla química "el semblant dissol el semblant": l’aigua (H₂O) és un dissolvent polar, de manera que les substàncies polars s’hi dissolen bé (ex. alcohols, sals, amoníac), mentre que les apolars (hidrocarburs, olis) no s’hi dissolen.'
    }
  ]
};
