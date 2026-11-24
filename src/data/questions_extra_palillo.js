export const QUESTIONS_EXTRA_PALILLO = [
  {
    "id": "ex-pal-1",
    "topic": 9,
    "difficulty": "Fàcil",
    "question": "Un catió de càrrega +1 té 18 electrons i 20 neutrons al nucli. Quin és el seu nombre màssic (A)?",
    "options": [
      "A = 38",
      "A = 39",
      "A = 37",
      "A = 19"
    ],
    "correctIndex": 1,
    "explanation": "Si té càrrega +1 i 18 electrons, té 19 protons. El nombre màssic és A = Z + N = 19 + 20 = 39."
  },
  {
    "id": "ex-pal-2",
    "topic": 24,
    "difficulty": "Mitjà",
    "question": "Un bomber vol aixecar amb una barra rígida de 2,5 m una llosa que ofereix 2.400 N de resistència, aplicant la força en un extrem i recolzant la llosa a l'altre. Si com a màxim pot prémer amb 600 N, a quina distància del seu extrem ha de situar el fulcre?",
    "options": [
      "1,25 m, perquè el fulcre s'ha de situar al centre de la barra per repartir el moment a parts iguals entre els dos braços",
      "0,5 m, perquè el braç de la força aplicada ha de ser la cinquena part de la longitud de la barra",
      "2 m, de manera que li quedin 0,5 m fins a la llosa i el seu braç sigui quatre vegades el de la resistència",
      "1,67 m, perquè els dos braços s'han de repartir en la mateixa proporció que la resistència i la força disponible"
    ],
    "correctIndex": 2,
    "explanation": "Llei de la palanca: F·d = R·(2,5 - d) → 600·d = 2400·(2,5 - d) → d = 4·(2,5 - d) → 5d = 10 → d = 2 m."
  },
  {
    "id": "ex-pal-3",
    "topic": 27,
    "difficulty": "Mitjà",
    "question": "A la resta de la Península Ibèrica, fora de Catalunya, una posició UTM pot caure en diversos fusos. Quants graus de longitud separen el meridià central del fus més occidental del meridià central del més oriental d'aquests fusos?",
    "options": [
      "18º",
      "6º",
      "16º",
      "12º"
    ],
    "correctIndex": 3,
    "explanation": "A la Península Ibèrica hi ha els fusos 29, 30 i 31 (cada fus fa 6º). Entre el meridià central del fus 29 i el del fus 31 hi ha 2 × 6º = 12º."
  },
  {
    "id": "ex-pal-4",
    "topic": 27,
    "difficulty": "Mitjà",
    "question": "Un focus de la zona 31T és a (424000, 4603000). La dotació A és a (416000, 4588000) i la dotació B, a (442000, 4603000). Quina de les dues és més a prop del focus en línia recta, i a quina distància?",
    "options": [
      "La dotació B, a 9 km, mentre que la dotació A en queda a 11,5 km",
      "La dotació B, a 18 km, mentre que la dotació A en queda a 23 km",
      "La dotació A, a 15 km, mentre que la dotació B en queda a 18 km",
      "La dotació A, a 17 km, mentre que la dotació B en queda a 18 km"
    ],
    "correctIndex": 3,
    "explanation": "Per a A: ΔX = 8 km, ΔY = 15 km → d = √(8² + 15²) = √289 = 17 km. Per a B: ΔX = 18 km, ΔY = 0 → d = 18 km."
  },
  {
    "id": "ex-pal-5",
    "topic": 23,
    "difficulty": "Mitjà",
    "question": "Es compara la viscositat dinàmica d'una mel de 5 Pa·s, la d'un oli vegetal situat al límit superior de l'interval en què pot estar i la de l'aigua. Quantes vegades és més viscosa la mel que l'oli, i l'oli que l'aigua?",
    "options": [
      "Unes 5.000 vegades i unes 10 vegades",
      "Unes 50 vegades i unes 100 vegades",
      "Unes 5.000 vegades i unes 100 vegades",
      "Unes 50 vegades i unes 10 vegades"
    ],
    "correctIndex": 1,
    "explanation": "L'aigua té ~0,001 Pa·s (1 mPa·s) i l'oli vegetal al límit superior ~0,1 Pa·s: 5 / 0,1 = 50 vegades; 0,1 / 0,001 = 100 vegades."
  },
  {
    "id": "ex-pal-6",
    "topic": 23,
    "difficulty": "Mitjà",
    "question": "En una bomba centrífuga de dues etapes, per on entra al segon rodet l'aigua que surt del primer, i quin efecte té aquest pas?",
    "options": [
      "Per l'entrada axial del segon rodet, que n'augmenta el cabal mantenint la pressió de la primera etapa",
      "Per la perifèria del segon rodet, que la frena i converteix la velocitat en pressió, de la mateixa manera que ho fa la voluta",
      "Per l'entrada axial del segon rodet, que la torna a impulsar i augmenta la pressió respecte de la primera etapa",
      "Directament per la voluta del segon rodet, sense passar-hi, per no perdre la velocitat que ja ha adquirit"
    ],
    "correctIndex": 2,
    "explanation": "En una bomba multietapa en sèrie, l'aigua entra axialment al segon rodet i torna a ser impulsada, sumant pressió."
  },
  {
    "id": "ex-pal-7",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "Es comparen dos grups motobomba. El grup A té un motor amb un rendiment del 50 % i una bomba del 80 %; el grup B, un motor del 70 % i una bomba del 60 %. Quin té més rendiment global i quant val?",
    "options": [
      "Tots dos tenen el mateix, un 65 %, perquè el rendiment global és la mitjana dels rendiments parcials",
      "El grup B, amb un 42 % enfront del 40 % d'A, perquè el rendiment global és el producte dels rendiments parcials",
      "El grup B, amb un 60 % enfront del 50 % d'A, perquè el rendiment global el fixa l'element de menys rendiment",
      "El grup A, amb un 80 % enfront del 70 % de B, perquè el rendiment global el fixa l'element de més rendiment"
    ],
    "correctIndex": 1,
    "explanation": "El rendiment global és el producte dels rendiments parcials: η_A = 0,5·0,8 = 40 %; η_B = 0,7·0,6 = 42 %."
  },
  {
    "id": "ex-pal-8",
    "topic": 8,
    "difficulty": "Mitjà",
    "question": "Dues fitxes de seguretat donen les temperatures crítiques de dos gasos industrials: -12 °C i 68 °C. Aplicant el criteri de classificació física dels gasos pel punt crític, com queda classificat cadascun?",
    "options": [
      "El primer és un gas comprimit i el segon un gas liquat, perquè -12 °C és inferior a -10 °C",
      "El primer és un gas liquat i el segon queda fora dels intervals, perquè 68 °C en supera el sostre",
      "Tots dos són gasos liquats, perquè -12 °C i 68 °C queden dins de l'interval de -10 a 70 °C",
      "Tots dos són gasos comprimits, perquè -12 °C i 68 °C queden per sota dels 70 °C"
    ],
    "correctIndex": 0,
    "explanation": "Segons el criteri de classificació per Tc: Tc < -10 °C correspon a gas comprimit; entre -10 °C i 70 °C a gas liquat (alta pressió)."
  },
  {
    "id": "ex-pal-9",
    "topic": 7,
    "difficulty": "Difícil",
    "question": "El Servei d'Administració d'una regió d'emergències controla els consums de recursos materials de la regió. En aquesta funció, de quina subdirecció general depèn funcionalment?",
    "options": [
      "De la Subdirecció General Tècnica",
      "De la Subdirecció General de Persones i Organització",
      "De la Subdirecció General de Contractació i Pressupost",
      "De la Subdirecció General Operativa"
    ],
    "correctIndex": 1,
    "explanation": "En aquesta funció depèn funcionalment de la Subdirecció General de Persones i Organització."
  },
  {
    "id": "ex-pal-10",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "Un pla de prevenció d'incendis delimita una zona d'actuació prioritària de 450 Ha. Expressada en quilòmetres quadrats, quina superfície és?",
    "options": [
      "45 km², perquè 450 Ha són 4.500.000 m² i 1 km² són 100.000 m²",
      "4,5 km², perquè 450 Ha són 4.500.000 m² i 1 km² són 1.000.000 m²",
      "0,45 km², perquè 450 Ha són 450.000 m² i 1 km² són 1.000.000 m²",
      "4.500 km², perquè 450 Ha són 4.500.000 m² i el prefix kilo divideix per 1.000"
    ],
    "correctIndex": 1,
    "explanation": "1 ha = 10.000 m²; 450 ha = 4.500.000 m² = 4,5 km²."
  },
  {
    "id": "ex-pal-11",
    "topic": 24,
    "difficulty": "Mitjà",
    "question": "Una peça d'1 kg de coure es refreda 50 °C i tota la calor que cedeix escalfa 0,5 kg d'aigua sense pèrdues. Quant augmenta la temperatura de l'aigua?",
    "options": [
      "4,78 °C",
      "19,14 °C",
      "9,57 °C",
      "50,00 °C"
    ],
    "correctIndex": 2,
    "explanation": "c_Cu ≈ 400 J/(kg·°C) (385-400) i c_aigua = 4.180 J/(kg·°C): Q = 1·400·50 = 20.000 J → ΔT = 20.000 / (0,5·4.180) ≈ 9,57 °C."
  },
  {
    "id": "ex-pal-12",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "Un vehicle passa pel punt quilomètric 12 d'una carretera i, 20 minuts més tard, a velocitat constant, passa pel punt quilomètric 40. A quina velocitat circula?",
    "options": [
      "120 km/h, perquè v = d/t amb els 40 km del punt final i un terç d'hora",
      "84 km/h, perquè v = d/t amb els 28 km recorreguts i un terç d'hora",
      "1,4 km/h, perquè v = d/t amb els 28 km recorreguts i els 20 minuts",
      "168 km/h, perquè v = d/t amb els 28 km recorreguts i una sisena part d'hora"
    ],
    "correctIndex": 1,
    "explanation": "Distància = 40 - 12 = 28 km. Temps = 20 min = 1/3 h. v = 28 / (1/3) = 84 km/h."
  },
  {
    "id": "ex-pal-13",
    "topic": 9,
    "difficulty": "Mitjà",
    "question": "Una combustió completa parteix de 88 g de propà i 320 g d'oxigen. Amb una massa atòmica del carboni de 12 u, arrodonint les masses molars a grams per mol enters, quin resultat s'obté en buscar el reactiu limitant?",
    "options": [
      "El propà, perquè els seus 88 g són menys que els 320 g d'oxigen, en comparar masses absolutes",
      "El propà, perquè els seus 2 mol són menys que els 10 mol d'oxigen, en comparar mols absoluts",
      "L'oxigen, perquè 320/5 = 64 és menor que 88/1 = 88, en dividir les masses pels coeficients",
      "Cap dels dos: 2/1 = 2 per al propà i 10/5 = 2 per a l'oxigen, de manera que s'esgoten alhora"
    ],
    "correctIndex": 3,
    "explanation": "C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. M(C₃H₈) = 44 g/mol → 88/44 = 2 mol; M(O₂) = 32 g/mol → 320/32 = 10 mol. Relació 2:10 = 1:5 exacta; s'esgoten alhora."
  },
  {
    "id": "ex-pal-14",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "Un bomber equipat té una massa de 80 kg i està dret i quiet sobre el paviment. Quina força exerceix el paviment sobre ell? Arrodoneix l'acceleració de la gravetat a l'enter més proper en m/s².",
    "options": [
      "800 N cap amunt, perquè la força normal equilibra el pes del bomber",
      "800 N cap avall, en el mateix sentit que el pes, perquè el paviment el sosté",
      "Cap força, perquè està en repòs i la força resultant sobre ell és nul·la",
      "80 N cap amunt, perquè la reacció es mesura en quilograms i no s'hi aplica la gravetat"
    ],
    "correctIndex": 0,
    "explanation": "El pes és P = 80·10 = 800 N cap avall, i la força normal del paviment l'equilibra amb 800 N cap amunt."
  },
  {
    "id": "ex-pal-15",
    "topic": 24,
    "difficulty": "Mitjà",
    "question": "Una eslinga porta marcada una càrrega màxima d'utilització de 1.500 daN i s'hi ha de penjar una peça de 1.520 kg de massa. Si es fa servir el valor de la gravetat terrestre amb un decimal, quina valoració és correcta?",
    "options": [
      "No n'hi ha prou: la peça pesa 14.896 N i l'eslinga n'admet 14.700",
      "N'hi ha prou: la peça pesa 14.896 N i l'eslinga n'admet 15.000",
      "No n'hi ha prou: la peça pesa 152.000 N i l'eslinga n'admet 15.000",
      "No n'hi ha prou: la peça pesa 152.000 N i l'eslinga n'admet 14.700"
    ],
    "correctIndex": 1,
    "explanation": "1.500 daN = 15.000 N. El pes de la peça és 1.520 kg × 9,8 m/s² = 14.896 N < 15.000 N."
  },
  {
    "id": "ex-pal-16",
    "topic": 24,
    "difficulty": "Mitjà",
    "question": "Dues rampes ideals salven la mateixa altura. La segona és el doble de llarga. Amb la mateixa potència útil i la mateixa càrrega, com es comparen els temps totals de pujada?",
    "options": [
      "El segon és quatre vegades el primer.",
      "Són iguals.",
      "El segon és el doble.",
      "El segon és la meitat."
    ],
    "correctIndex": 1,
    "explanation": "En rampes ideals (sense fregament), el treball útil per pujar la mateixa altura h és m·g·h en totes dues; amb la mateixa potència útil P, t = W/P és igual."
  },
  {
    "id": "ex-pal-17",
    "topic": 23,
    "difficulty": "Difícil",
    "question": "Una línia de mànegues de 25 mm té, amb un cert cabal, 8 bar de pèrdua de càrrega lineal en total. Es torna a muntar amb mànegues de 28 mm, amb la mateixa longitud, el mateix cabal i el mateix coeficient de fricció, prenent el diàmetre nominal com a interior. Quina pèrdua lineal aproximada tindrà?",
    "options": [
      "Uns 6,4 bar",
      "Uns 5,1 bar",
      "Uns 4,5 bar",
      "Uns 7,1 bar"
    ],
    "correctIndex": 2,
    "explanation": "Per Darcy-Weisbach a cabal constant, la pèrdua és inversament proporcional a D⁵: 8 × (25/28)⁵ ≈ 8 × 0,567 ≈ 4,5 bar."
  },
  {
    "id": "ex-pal-19",
    "topic": 23,
    "difficulty": "Mitjà",
    "question": "Una bomba d'importació, amb el manòmetre d'impulsió graduat en psi, alimenta una línia horitzontal de mànegues de 70 mm. Quina és la lectura màxima del manòmetre que no supera la pressió de prova d'aquestes mànegues? (1 psi = 6.895 Pa; 1 bar = 100.000 Pa)",
    "options": [
      "Uns 290 psi",
      "Uns 261 psi",
      "Uns 580 psi",
      "Uns 124 psi"
    ],
    "correctIndex": 1,
    "explanation": "La pressió de prova d'una mànega de 70 mm és de 18 bar (1.800.000 Pa). 1.800.000 / 6.895 ≈ 261 psi."
  },
  {
    "id": "ex-pal-20",
    "topic": 24,
    "difficulty": "Mitjà",
    "question": "Un recipient rígid de 2 L conté 8 g d'oxigen a 127 °C. Si el gas es comporta idealment, quina pressió absoluta exerceix, arrodonida a una xifra decimal?",
    "options": [
      "4,1 atm",
      "8,2 atm",
      "1,3 atm",
      "65,7 atm"
    ],
    "correctIndex": 0,
    "explanation": "n = 8 / 32 = 0,25 mol; T = 127 + 273 = 400 K. P = nRT/V = (0,25 × 0,0821 × 400) / 2 ≈ 4,1 atm."
  },
  {
    "id": "ex-pal-21",
    "topic": 23,
    "difficulty": "Fàcil",
    "question": "Un manòmetre d'un equip italià marca 2,04 kg/cm² i la fitxa tècnica que cal omplir demana la pressió en quilopascals (kPa). Amb les equivalències exactes entre kg/cm², bar i pascal, quin valor s'hi anota?",
    "options": [
      "204 kPa",
      "20 kPa",
      "2.000 kPa",
      "200 kPa"
    ],
    "correctIndex": 3,
    "explanation": "1 kg/cm² = 0,980665 bar = 98,0665 kPa. 2,04 × 98,0665 ≈ 200 kPa."
  },
  {
    "id": "ex-pal-22",
    "topic": 24,
    "difficulty": "Mitjà",
    "question": "Un vehicle de bombers no pot superar una acceleració centrípeta de 5 m/s² sense perdre adherència. Si ha de prendre una corba a 90 km/h, quin radi mínim ha de tenir la corba?",
    "options": [
      "62,5 m, dividint el quadrat de la velocitat en m/s pel doble de l'acceleració admissible",
      "5 m, dividint la velocitat en m/s per l'acceleració admissible, sense elevar-la al quadrat",
      "1.620 m, dividint el quadrat de la velocitat en km/h per l'acceleració admissible",
      "125 m, dividint el quadrat de la velocitat en m/s per l'acceleració admissible"
    ],
    "correctIndex": 3,
    "explanation": "v = 90 km/h = 25 m/s. a_c = v² / R → R = v² / a_c = 25² / 5 = 625 / 5 = 125 m."
  },
  {
    "id": "ex-pal-23",
    "topic": 9,
    "difficulty": "Fàcil",
    "question": "Cal ajustar l'oxidació del ferro, Fe + O₂ → Fe₂O₃, perquè a cada banda hi hagi els mateixos àtoms de cada element. Quins coeficients, en l'ordre Fe, O₂ i Fe₂O₃, ho aconsegueixen?",
    "options": [
      "2, 3 i 2",
      "2, 3 i 1",
      "4, 3 i 2",
      "4, 6 i 2"
    ],
    "correctIndex": 2,
    "explanation": "4 Fe + 3 O₂ → 2 Fe₂O₃ (4 àtoms de Fe i 6 àtoms d'O a cada banda)."
  },
  {
    "id": "ex-pal-24",
    "topic": 23,
    "difficulty": "Difícil",
    "question": "Una línia horitzontal de 70 mm, amb l'aigua a 2,5 m/s, passa mitjançant una reducció a una mànega de 45 mm, sense derivacions i suposant que no hi ha pèrdues. Quant baixa la pressió estàtica en passar a la de 45 mm? (ρ = 1.000 kg/m³; 1 bar = 100.000 Pa)",
    "options": [
      "Uns 0,183 bar",
      "Uns 0,044 bar",
      "Uns 0,152 bar",
      "Uns 0,063 bar"
    ],
    "correctIndex": 2,
    "explanation": "Per continuïtat, v₂ = 2,5 × (70/45)² ≈ 6,05 m/s. Per Bernoulli, ΔP = ½·1.000·(6,05² - 2,5²) ≈ 15.170 Pa ≈ 0,152 bar."
  },
  {
    "id": "ex-pal-25",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "Un tràctel estira un cotxe embarrancat de 1.600 kg a velocitat constant, fent una força igual a la resistència de 4.000 N que s'oposa al moviment. De sobte el cable es desenganxa i la resistència es manté. Què li passa al cotxe?",
    "options": [
      "Es frena a 2,5 m/s², perquè la força neta passa a ser la resistència de 4.000 N en sentit contrari al moviment",
      "S'atura a l'instant, perquè desapareix l'única força que el feia avançar i la resistència el reté immediatament",
      "Manté la velocitat constant, perquè sense el tràctel ja no hi ha cap força que pugui modificar el seu estat de moviment",
      "Es frena a 5 m/s², perquè la resistència de 4.000 N i la força perduda del tràctel se sumen com a força neta de frenada"
    ],
    "correctIndex": 0,
    "explanation": "Sense tracció del cable, la força neta és -4.000 N → a = F / m = -4.000 / 1.600 = -2,5 m/s²."
  },
  {
    "id": "ex-pal-26",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "El cilindre hidràulic d'una autoescala pot fer com a màxim 60.000 N i empeny el braç a 2,5 m del punt de gir. Si la cistella queda a 20 m d'aquest punt, quina càrrega màxima hi pot haver, considerant només aquesta càrrega i forces perpendiculars al braç?",
    "options": [
      "7.500 N, perquè l'avantatge mecànic del braç és de 0,125",
      "480.000 N, perquè l'avantatge mecànic del braç és de 8",
      "3.000 N, perquè la força del cilindre es divideix pels 20 m del braç",
      "60.000 N, perquè el braç només canvia la direcció de la força"
    ],
    "correctIndex": 0,
    "explanation": "Equilibri de moments: 60.000 × 2,5 = F_cistella × 20 → F_cistella = 150.000 / 20 = 7.500 N."
  },
  {
    "id": "ex-pal-27",
    "topic": 6,
    "difficulty": "Mitjà",
    "question": "Una tempesta deixa un municipi sense subministrament elèctric ni aigua en plena emergència. A qui correspon disposar les mesures per al restabliment immediat d'aquests serveis essencials?",
    "options": [
      "Al ple de l'ajuntament, un cop aprovat el pla de recuperació",
      "A la Comissió de Recuperació creada per a aquella emergència",
      "A la Comissió de Protecció Civil de Catalunya, com a òrgan superior",
      "Al director o directora del pla de protecció civil activat"
    ],
    "correctIndex": 3,
    "explanation": "Correspon al director o directora del pla de protecció civil activat disposar les mesures urgents per al restabliment immediat dels serveis essencials."
  },
  {
    "id": "ex-pal-28",
    "topic": 8,
    "difficulty": "Mitjà",
    "question": "Expressada en kelvins, quina és aproximadament la temperatura crítica del nitrogen?",
    "options": [
      "419,8 K",
      "126,2 K",
      "154,6 K",
      "190,9 K"
    ],
    "correctIndex": 1,
    "explanation": "La temperatura crítica del nitrogen és -146,8 °C → -146,8 + 273 = 126,2 K."
  },
  {
    "id": "ex-pal-29",
    "topic": 23,
    "difficulty": "Fàcil",
    "question": "Una bomba dona 6 bar a la sortida i a la llança hi han d'arribar almenys 2 bar. Si s'utilitza la conversió d'1 bar ≈ 10,2 m de columna d'aigua i es negligeixen les pèrdues de càrrega per fregament, quin desnivell màxim hi pot haver entre la bomba i la llança situada més amunt?",
    "options": [
      "A 61,2 m",
      "A 40,0 m",
      "A 40,8 m",
      "A 81,6 m"
    ],
    "correctIndex": 2,
    "explanation": "Diferència de pressió disponible = 6 - 2 = 4 bar. 4 × 10,2 m = 40,8 m."
  },
  {
    "id": "ex-pal-30",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "Una escala s'ha de recolzar amb la base a 6 m de la façana formant 30° amb el terra. Sense saber-ne la longitud, quina alçada assolirà l'extrem?",
    "options": [
      "Uns 3 m, multiplicant els 6 m pel sinus de 30°",
      "Uns 5,2 m, multiplicant els 6 m pel cosinus de 30°",
      "Uns 10,5 m, dividint els 6 m per la tangent de 30°",
      "Uns 3,4 m, multiplicant els 6 m per la tangent de 30°"
    ],
    "correctIndex": 3,
    "explanation": "tan(30°) = alçada / base → alçada = 6 × tan(30°) ≈ 6 × 0,577 ≈ 3,46 m."
  },
  {
    "id": "ex-pal-31",
    "topic": 23,
    "difficulty": "Fàcil",
    "question": "Una línia d'atac puja per l'escala d'un edifici fins a una llança situada 25 m per sobre de la bomba. Amb la llança tancada i l'aigua en repòs, el manòmetre de la bomba marca 7 bar. Quina pressió marcarà un manòmetre a l'entrada de la llança? (1 bar ≈ 10 m.c.a.)",
    "options": [
      "6,75 bar",
      "7 bar",
      "9,5 bar",
      "4,5 bar"
    ],
    "correctIndex": 3,
    "explanation": "25 m d'alçada corresponen a 2,5 bar de pressió hidrostàtica: 7 - 2,5 = 4,5 bar."
  },
  {
    "id": "ex-pal-32",
    "topic": 3,
    "difficulty": "Mitjà",
    "question": "Quina d'aquestes persones només pot participar a les reunions del comitè de seguretat i salut si ho sol·licita alguna de les representacions?",
    "options": [
      "Un delegat sindical que no forma part de la composició del comitè",
      "El responsable tècnic de prevenció de l'empresa no inclòs en la composició",
      "Un representant de l'empresari integrat en la composició paritària",
      "Un treballador de l'empresa amb especial qualificació en la qüestió que es debat"
    ],
    "correctIndex": 3,
    "explanation": "Segons l'art. 38.2 de la LPRL, els delegats sindicals i tècnics de prevenció participen amb veu i sense vot; els treballadors amb especial qualificació hi poden participar si ho sol·licita alguna de les representacions."
  },
  {
    "id": "ex-pal-33",
    "topic": 9,
    "difficulty": "Fàcil",
    "question": "En un incendi es descriuen dos processos: (1) la cel·lulosa es degrada per l'acció de la calor en CxHy, CO i CO₂; (2) un hidrocarbur reacciona amb l'oxigen i dona CO₂ i H₂O. De quin tipus de reacció es tracta en cada cas?",
    "options": [
      "(1) És una descomposició i (2) una combustió.",
      "(1) És una combustió i (2) una combustió.",
      "(1) És una combustió i (2) una síntesi.",
      "(1) És una descomposició i (2) una síntesi."
    ],
    "correctIndex": 0,
    "explanation": "La degradació tèrmica d'una molècula en altres de més simples sense oxidant (piròlisi) és una descomposició; la reacció amb oxigen alliberant CO₂ i H₂O és una combustió."
  },
  {
    "id": "ex-pal-34",
    "topic": 13,
    "difficulty": "Fàcil",
    "question": "Dues ampolles d'aire són a la mateixa temperatura: l'A, de 6 L a 300 bar, i la B, de 9 L a 180 bar. Si cadascuna es buida fins a 1 bar sense que variï la temperatura, quina proporciona més volum d'aire i quant?",
    "options": [
      "La B, amb 2.700 L davant dels 1.080 L de l'A",
      "La B, amb 0,05 L davant dels 0,02 L de l'A",
      "L'A, amb 50 L davant dels 20 L de la B",
      "L'A, amb 1.800 L davant dels 1.620 L de la B"
    ],
    "correctIndex": 3,
    "explanation": "Llei de Boyle: V_A = 6 × 300 = 1.800 L; V_B = 9 × 180 = 1.620 L."
  },
  {
    "id": "ex-pal-35",
    "topic": 23,
    "difficulty": "Fàcil",
    "question": "Entre l'hidrant i la bomba hi ha una mànega de 70 mm que, amb 600 l/min, té 0,16 bar de pèrdua de càrrega. S'hi connecten dues mànegues iguals més, una darrere l'altra, i es mantenen els 600 l/min. Quina pèrdua de càrrega té ara la línia?",
    "options": [
      "Uns 0,16 bar, perquè amb el mateix cabal la pèrdua no varia amb les mànegues",
      "Uns 0,05 bar, perquè la mateixa pèrdua es reparteix entre les tres mànegues",
      "Uns 0,48 bar, perquè en sèrie se sumen les pèrdues de cada mànega",
      "Uns 1,44 bar, perquè la pèrdua creix amb el quadrat del nombre de mànegues"
    ],
    "correctIndex": 2,
    "explanation": "En connexió en sèrie, les pèrdues de càrrega de cada tram se sumen: 3 × 0,16 = 0,48 bar."
  },
  {
    "id": "ex-pal-36",
    "topic": 23,
    "difficulty": "Mitjà",
    "question": "El manòmetre antic d'una instal·lació fixa està graduat en kg/cm² i marca 10 kg/cm². Amb les equivalències en bar de la taula d'unitats (no la simplificació operativa ni la columna en pascals), a quantes atmosferes correspon aproximadament?",
    "options": [
      "Unes 9,7 atm",
      "Unes 9,8 atm",
      "Unes 10,0 atm",
      "Unes 10,3 atm"
    ],
    "correctIndex": 0,
    "explanation": "1 kg/cm² = 0,98 bar i 1 atm = 1,013 bar. 10 kg/cm² = 9,8 bar → 9,8 / 1,013 ≈ 9,67 ≈ 9,7 atm."
  },
  {
    "id": "ex-pal-37",
    "topic": 8,
    "difficulty": "Mitjà",
    "question": "En una nau sense climatitzar, a l'estiu la temperatura passa dels 22 °C de primera hora als 41 °C de la tarda. Hi ha un bidó obert d'un líquid de la taula de risc d'incendi que només emet prou vapors per formar una barreja inflamable amb l'aire durant les hores de més calor. Quin líquid és?",
    "options": [
      "L'alcohol etílic",
      "L'aiguarràs",
      "El gasoil",
      "L'acetona"
    ],
    "correctIndex": 1,
    "explanation": "L'aiguarràs té el punt d'inflamació cap als 35 °C (entre 22 °C i 41 °C), mentre que l'alcohol etílic (~12 °C) i l'acetona (~-19 °C) ja s'inflamen a 22 °C, i el gasoil (~60 °C) no arriba al punt d'inflamació a 41 °C."
  },
  {
    "id": "ex-pal-38",
    "topic": 18,
    "difficulty": "Fàcil",
    "question": "Un generador produeix 18.000 L d'escuma a partir de 90 L de barreja d'aigua i escumogen. Quin coeficient d'expansió té aquesta escuma i en quina categoria se situa?",
    "options": [
      "200:1, que correspon a una escuma de mitjana expansió",
      "2.000:1, que correspon a una escuma d'alta expansió",
      "2.000:1, que correspon a una escuma de mitjana expansió",
      "200:1, que correspon a una escuma d'alta expansió"
    ],
    "correctIndex": 0,
    "explanation": "Coeficient d'expansió = 18.000 / 90 = 200:1, que correspon al límit superior de l'escuma de mitjana expansió (20:1 a 200:1)."
  },
  {
    "id": "ex-pal-39",
    "topic": 9,
    "difficulty": "Fàcil",
    "question": "Dos líquids es troben a la mateixa temperatura: en el líquid A les molècules s'atreuen per ponts d'hidrogen i en el B només per forces de Van der Waals. Quin dels dos s'evaporarà més de pressa i per què?",
    "options": [
      "L'A, perquè els ponts d'hidrogen són més febles que les forces de Van der Waals i les seves molècules se separen amb menys energia",
      "L'A, perquè els ponts d'hidrogen, en ser més intensos, transmeten més energia d'una molècula a la veïna i les fan escapar abans",
      "Tots dos igual, perquè la velocitat d'evaporació depèn només de la temperatura i no del tipus de força que hi ha entre les molècules",
      "El B, perquè les forces de Van der Waals són més febles que els ponts d'hidrogen i les seves molècules se separen amb menys energia"
    ],
    "correctIndex": 3,
    "explanation": "Les forces de Van der Waals són molt més febles que els ponts d'hidrogen, per la qual cosa les molècules de B necessiten menys energia per escapar a la fase gasosa."
  },
  {
    "id": "ex-pal-40",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "En un vessament, un líquid desconegut té una densitat de 920 kg/m³. Quina densitat relativa té i què farà en arribar a una bassa d'aigua dolça?",
    "options": [
      "0,92 i sura",
      "0,92 i s'enfonsa",
      "1,09 i s'enfonsa",
      "0,90 i sura"
    ],
    "correctIndex": 0,
    "explanation": "Densitat relativa = 920 / 1.000 = 0,92 (< 1, per tant sura sobre l'aigua dolça)."
  },
  {
    "id": "ex-pal-41",
    "topic": 9,
    "difficulty": "Mitjà",
    "question": "En la combustió completa d'una mostra de metà s'han format 56 L de CO₂ mesurats en condicions normals. Amb una massa atòmica del carboni de 12 u, quina massa de metà s'ha cremat?",
    "options": [
      "80 g",
      "40 g",
      "110 g",
      "20 g"
    ],
    "correctIndex": 1,
    "explanation": "n(CO₂) = 56 / 22,4 = 2,5 mol. Relació CH₄:CO₂ = 1:1 → n(CH₄) = 2,5 mol. m = 2,5 × 16 g/mol = 40 g."
  },
  {
    "id": "ex-pal-42",
    "topic": 15,
    "difficulty": "Mitjà",
    "question": "En la recepció d'un hidrant per a l'omplerta de camions de bombers es mesura, a cadascuna de les boques, una pressió de sortida de 100 kPa exactes. S'ajusta a l'exigència per a aquests hidrants?",
    "options": [
      "Sí, perquè el mínim de cada boca és de 100 kPa (1 bar) i aquí s'assoleix",
      "No, perquè la pressió de cada boca ha de ser superior a 100 kPa (1 bar)",
      "No, perquè la pressió de cada boca ha de ser com a mínim de 500 kPa (5 bar)",
      "Sí, perquè els 100 kPa (1 bar) s'exigeixen a la xarxa i no a cada boca"
    ],
    "correctIndex": 1,
    "explanation": "La normativa exigeix que la pressió en cada boca d'un hidrant per a omplerta de camions sigui superior a 100 kPa (1 bar), no igual."
  },
  {
    "id": "ex-pal-43",
    "topic": 23,
    "difficulty": "Mitjà",
    "question": "Per una mànega de 25 mm es vol fer passar el màxim cabal sense que l'aigua superi la velocitat per sota de la qual circula habitualment a les instal·lacions de bombers. Fins a quin cabal aproximat es pot arribar? (Q = S · v)",
    "options": [
      "294,5 l/min",
      "176,7 l/min",
      "441,8 l/min",
      "1.178,1 l/min"
    ],
    "correctIndex": 0,
    "explanation": "Habitualment v < 10 m/s. S = π·(0,0125)² ≈ 4,909·10⁻⁴ m². Q = 4,909·10⁻⁴ × 10 = 4,909·10⁻³ m³/s = 4,909 L/s × 60 ≈ 294,5 l/min."
  },
  {
    "id": "ex-pal-44",
    "topic": 18,
    "difficulty": "Mitjà",
    "question": "Cal omplir completament un magatzem tancat de 900 m³ amb escuma d'alta expansió generada a 450:1. Si l'escumogen representa el 3% del volum de la barreja d'aigua i escumogen, quants litres d'escumogen calen?",
    "options": [
      "2.000 L",
      "60 L",
      "600 L",
      "27.000 L"
    ],
    "correctIndex": 1,
    "explanation": "Volum de barreja (espumant) = 900.000 L / 450 = 2.000 L. Escumogen (3%) = 2.000 × 0,03 = 60 L."
  },
  {
    "id": "ex-pal-45",
    "topic": 24,
    "difficulty": "Difícil",
    "question": "En una autoescala, el pes propi P = 160 kN actua a 1,2 m del punt 0 (l'estabilitzador del costat de treball), la càrrega de la cistella Q = 3 kN queda a 14 m del punt 0 i els estabilitzadors dels dos costats estan separats 4 m. En equilibri, quina reacció R1 fa l'estabilitzador del costat contrari?",
    "options": [
      "58,5 kN, perquè R1 s'oposa a la bolcada i el seu moment ha d'igualar la suma dels moments de P i de Q",
      "48 kN, perquè el moment de R1 ha d'igualar el moment de P i la càrrega Q només intervé a l'equilibri de forces",
      "37,5 kN, perquè R1 bolca juntament amb Q i el moment de totes dues ha d'igualar el moment antibolcada de P",
      "10,5 kN, perquè el moment de R1 ha d'igualar el de la càrrega Q i el pes propi P passa pel punt 0"
    ],
    "correctIndex": 2,
    "explanation": "Respecte del punt 0: moment estabilitzador de P = 160·1,2 = 192 kN·m. Moments en contra (Q i R1): 3·14 + R1·4 = 192 → 42 + 4·R1 = 192 → 4·R1 = 150 → R1 = 37,5 kN."
  },
  {
    "id": "ex-pal-46",
    "topic": 24,
    "difficulty": "Mitjà",
    "question": "Un conjunt de 50 kg es desplaça a 6 m/s arrossegat pel cable d'un tambor que gira a 10 rad/s. L'energia cinètica total del sistema és de 1.500 J. Quin moment d'inèrcia té el tambor?",
    "options": [
      "30 kg·m², perquè tota l'energia cinètica del sistema és la de rotació del tambor",
      "12 kg·m², perquè la translació val 900 J i els 600 J restants són de rotació",
      "6 kg·m², perquè la rotació val 600 J i es divideix pel quadrat de la velocitat angular",
      "24 kg·m², perquè la translació val 300 J i els 1.200 J restants són de rotació"
    ],
    "correctIndex": 1,
    "explanation": "Ec_translació = ½·50·6² = 900 J. Ec_rotació = 1.500 - 900 = 600 J = ½·I·10² → 600 = 50·I → I = 12 kg·m²."
  },
  {
    "id": "ex-pal-47",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "Un grup motobomba consumeix 6 kW i té un rendiment del 60 %. Quant triga a elevar 3.000 kg d'aigua fins a un dipòsit situat 10 m més amunt? Arrodoneix l'acceleració de la gravetat a l'enter més proper en m/s².",
    "options": [
      "Uns 83 s, perquè el treball útil és m·g·h = 300.000 J i la potència útil és 6.000 · 0,6 = 3.600 W",
      "50 s, perquè el treball útil és m·g·h = 300.000 J i es divideix pels 6.000 W que consumeix el grup",
      "30 s, perquè el treball útil és m·g·h = 300.000 J i la potència útil és 6.000/0,6 = 10.000 W",
      "Uns 8,3 s, perquè el treball útil és m·h = 30.000 J i la potència útil és 6.000 · 0,6 = 3.600 W"
    ],
    "correctIndex": 0,
    "explanation": "W = 3.000·10·10 = 300.000 J. P_útil = 6.000·0,6 = 3.600 W. t = 300.000 / 3.600 ≈ 83,3 s."
  },
  {
    "id": "ex-pal-48",
    "topic": 9,
    "difficulty": "Fàcil",
    "question": "En un vessament, un líquid desconegut menys dens que l'aigua cau en un bassal i, al cap d'una estona, no en queda cap capa a la superfície perquè s'hi ha dissolt del tot. Què se'n pot deduir sobre la seva polaritat?",
    "options": [
      "Que no se'n pot deduir res, perquè la solubilitat en aigua només depèn de la densitat relativa del líquid",
      "Que és no polar, com els hidrocarburs, perquè els líquids menys densos que l'aigua són sempre no polars",
      "Que és polar, perquè les substàncies no polars només es dissolen en dissolvents no polars i l'aigua és polar",
      "Que és no polar, perquè l'aigua deixa espai entre les seves molècules per acollir les que no són polars"
    ],
    "correctIndex": 2,
    "explanation": "L'aigua és un dissolvent polar; com que el líquid s'hi ha dissolt completament, té caràcter polar."
  },
  {
    "id": "ex-pal-49",
    "topic": 23,
    "difficulty": "Mitjà",
    "question": "Una bomba dona 14 bar i la llança, al final d'una línia horitzontal de mànegues de 45 mm de 20 m, ha de rebre 6 bar amb 700 l/min (corba de 8 bar). Quantes mànegues es poden muntar, com a màxim?",
    "options": [
      "5 mànegues (100 m)",
      "7 mànegues (140 m)",
      "4 mànegues (80 m)",
      "8 mànegues (160 m)"
    ],
    "correctIndex": 2,
    "explanation": "Marge de pèrdua disponible = 14 - 6 = 8 bar. Amb 700 l/min en Ø45 mm (corba 8 bar), la pèrdua per mànega de 20 m és ~1,6-2 bar → màxim 4 mànegues (80 m)."
  },
  {
    "id": "ex-pal-50",
    "topic": 23,
    "difficulty": "Mitjà",
    "question": "Entre un hidrant i l'aspiració de la bomba hi ha quatre trams de 20 m de mànega de 70 mm i calen 1.200 l/min. A la corba de 8 bar, una mànega de 70 mm té 0,16 bar de pèrdua amb 600 l/min i 0,56 bar amb 1.200 l/min. Quina pèrdua total hi ha amb una sola línia i amb una línia doble, amb dues mànegues en paral·lel a cada tram?",
    "options": [
      "2,24 bar amb la línia sola i 0,32 bar amb la doble",
      "0,56 bar amb la línia sola i 0,16 bar amb la doble",
      "2,24 bar amb la línia sola i 1,12 bar amb la doble",
      "2,24 bar amb la línia sola i 0,64 bar amb la doble"
    ],
    "correctIndex": 3,
    "explanation": "Línia sola: 4 × 0,56 = 2,24 bar. Línia doble (600 l/min per branca): 4 × 0,16 = 0,64 bar."
  },
  {
    "id": "ex-pal-51",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "Una força neta de 900 N imprimeix una acceleració de 3 m/s² a un carro d'eines. S'hi carreguen 150 kg més i s'hi torna a aplicar la mateixa força neta. Quina acceleració adquireix ara?",
    "options": [
      "3 m/s², perquè la força neta no ha canviat i l'acceleració només depèn de la força",
      "2 m/s², perquè el carro passa de 300 kg a 450 kg i la força de 900 N es divideix per aquesta massa",
      "4,5 m/s², perquè l'acceleració es multiplica per la relació entre la massa nova i l'antiga",
      "6 m/s², perquè la força de 900 N es divideix pels 150 kg que s'han afegit al carro"
    ],
    "correctIndex": 1,
    "explanation": "Massa inicial = 900 / 3 = 300 kg. Nova massa = 300 + 150 = 450 kg. Nova acceleració = 900 / 450 = 2 m/s²."
  },
  {
    "id": "ex-pal-52",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "Per verificar que la cantonada d'un forjat forma un angle recte, es marquen 90 cm sobre una vora i 120 cm sobre l'altra, a partir del vèrtex. Quina distància ha de donar la cinta mètrica entre les dues marques perquè l'angle sigui de 90°?",
    "options": [
      "210 cm",
      "150 cm",
      "200 cm",
      "112,5 cm"
    ],
    "correctIndex": 1,
    "explanation": "Per Pitàgores (triangle 3-4-5): √(90² + 120²) = √(8.100 + 14.400) = √22.500 = 150 cm."
  },
  {
    "id": "ex-pal-53",
    "topic": 8,
    "difficulty": "Mitjà",
    "question": "Una canonada de vapor a 480 °C travessa una sala on hi pot haver fuites de metà, propà, butà, hidrogen, acetilè o etilè. Sense cap flama ni guspira a prop, quins d'aquests gasos es poden encendre sols en contacte amb la canonada?",
    "options": [
      "Butà, acetilè i etilè",
      "Metà, butà, acetilè i etilè",
      "Propà, butà, acetilè i etilè",
      "Qualsevol dels sis gasos"
    ],
    "correctIndex": 2,
    "explanation": "Tenint en compte les temperatures d'autoignició: acetilè (350 °C), butà (360 °C), etilè (425 °C) i propà (~470 °C) queden per sota de 480 °C; en canvi metà (~540-560 °C) i hidrogen (~560 °C) no."
  },
  {
    "id": "ex-pal-54",
    "topic": 9,
    "difficulty": "Mitjà",
    "question": "Una mostra de CH₄ pesa inicialment 16 g. Se'n retira una quarta part de les molècules i, d'una mostra de CO₂, la meitat de les molècules. Després de les dues retirades, les mostres tenen el mateix nombre de molècules. Amb una massa atòmica del carboni de 12 u, quina massa inicial tenia la mostra de CO₂?",
    "options": [
      "66 g",
      "88 g",
      "33 g",
      "44 g"
    ],
    "correctIndex": 0,
    "explanation": "16 g de CH₄ = 1 mol; en treure 1/4 queden 0,75 mol. La meitat de la mostra de CO₂ són 0,75 mol → inicialment eren 1,5 mol de CO₂ = 1,5 × 44 = 66 g."
  },
  {
    "id": "ex-pal-55",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "Una bola passa pel punt més alt d'una rampa a 6 m/s i baixa fins al punt més baix, 3,2 m per sota, sense fregament. A quina velocitat passa pel punt més baix? Arrodoneix l'acceleració de la gravetat a l'enter més proper en m/s².",
    "options": [
      "A 8 m/s",
      "A 14 m/s",
      "A 10 m/s",
      "A 5,3 m/s"
    ],
    "correctIndex": 2,
    "explanation": "Conservació de l'energia: ½·v₂² = ½·v₁² + g·h → v₂² = 6² + 2·10·3,2 = 36 + 64 = 100 → v₂ = 10 m/s."
  },
  {
    "id": "ex-pal-56",
    "topic": 9,
    "difficulty": "Mitjà",
    "question": "En una combustió completa es disposa de 132 g de propà i 640 g d'oxigen. Amb una massa atòmica del carboni de 12 u, quin és el reactiu limitant i quina quantitat de l'altre sobra?",
    "options": [
      "L'oxigen, perquè 20/5 = 4 supera 3/1 = 3; sobra 1 mol de propà, és a dir 44 g",
      "El propà, perquè 132 g és menys massa que 640 g; sobren 508 g d'oxigen, és a dir 15,9 mol",
      "El propà, perquè 3/1 = 3 és menor que 20/5 = 4; sobren 5 mol d'oxigen, és a dir 160 g",
      "El propà, perquè 3/5 = 0,6 és menor que 20/1 = 20; sobren 17 mol d'oxigen, és a dir 544 g"
    ],
    "correctIndex": 2,
    "explanation": "132 g C₃H₈ = 3 mol; 640 g O₂ = 20 mol. Per cremar 3 mol de propà calen 3×5 = 15 mol d'O₂. El propà és limitant i sobren 5 mol d'O₂ (160 g)."
  },
  {
    "id": "ex-pal-57",
    "topic": 9,
    "difficulty": "Mitjà",
    "question": "La combustió completa de metà en un sistema tancat genera 110 g de productes entre CO₂ i aigua. Quina massa de metà s'ha cremat?",
    "options": [
      "27,5 g",
      "40,0 g",
      "22,0 g",
      "88,0 g"
    ],
    "correctIndex": 2,
    "explanation": "CH₄ + 2 O₂ → CO₂ + 2 H₂O. Per 1 mol de CH₄ (16 g) es formen 44 + 36 = 80 g de productes. 110 / 80 = 1,375 mol de CH₄ → 1,375 × 16 = 22,0 g."
  },
  {
    "id": "ex-pal-58",
    "topic": 4,
    "difficulty": "Mitjà",
    "question": "En una convocatòria d'ajuts a la recerca de caràcter col·lectiu, en un àmbit en què les dones són poc presents, es presenten quatre grups de deu membres. Quin compleix el tret de composició i direcció que l'article 28.3.e de la Llei 17/2015 obliga a valorar positivament?",
    "options": [
      "Un grup amb quatre dones, dirigit per una investigadora",
      "Un grup amb tres dones, dirigit per una investigadora",
      "Un grup amb sis dones, dirigit per un investigador",
      "Un grup amb cinc dones, dirigit per un investigador"
    ],
    "correctIndex": 0,
    "explanation": "L'art. 28.3.e de la Llei 17/2015 valora positivament els grups amb almenys un 40 % de dones (4 de 10) i que estiguin dirigits per una investigadora."
  },
  {
    "id": "ex-pal-59",
    "topic": 24,
    "difficulty": "Mitjà",
    "question": "Un gas absorbeix 500 cal mentre s'expandeix de 0,010 a 0,030 m³ contra una pressió exterior constant de 100.000 Pa. Quina variació d'energia interna experimenta?",
    "options": [
      "ΔU = -1.500 J",
      "ΔU = +4.090 J",
      "ΔU = +90 J",
      "ΔU = +2.500 J"
    ],
    "correctIndex": 2,
    "explanation": "Q = 500 cal × 4,18 J/cal = +2.090 J. Treball d'expansió W = P·ΔV = 100.000 × 0,020 = 2.000 J. ΔU = Q - W = 2.090 - 2.000 = +90 J."
  },
  {
    "id": "ex-pal-60",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "Una peça d'1 kg de coure a 100 °C i 1 kg d'aigua a 40 °C es refreden fins als 20 °C de l'ambient, sense cap canvi d'estat. Quin dels dos cossos cedeix més calor?",
    "options": [
      "L'aigua: cedeix 83.600 J davant dels 32.000 J del coure, tot i partir d'una temperatura més baixa",
      "El coure: cedeix 334.400 J davant dels 8.000 J de l'aigua, perquè és el cos que parteix de més temperatura",
      "L'aigua: cedeix 167.200 J davant dels 40.000 J del coure, en proporció a la temperatura inicial de cadascun",
      "El coure: cedeix 32.000 J davant dels 20.000 J de l'aigua, perquè el seu salt de temperatura és quatre vegades més gran"
    ],
    "correctIndex": 0,
    "explanation": "Aigua: Q = 1·4.180·(40-20) = 83.600 J. Coure: Q = 1·400·(100-20) = 32.000 J."
  },
  {
    "id": "ex-pal-61",
    "topic": 3,
    "difficulty": "Fàcil",
    "question": "L'avaluació de riscos d'un parc posa de manifest diverses situacions de risc. Què ha de fer a continuació l'empresari?",
    "options": [
      "Dotar els treballadors exposats d'equips de protecció individual com a primera mesura de control",
      "Comunicar les situacions detectades a l'autoritat laboral i esperar-ne les instruccions corresponents",
      "Repetir l'avaluació amb un servei de prevenció aliè abans d'adoptar cap mesura sobre aquests riscos",
      "Portar a terme les activitats preventives necessàries per eliminar o reduir i controlar aquests riscos"
    ],
    "correctIndex": 3,
    "explanation": "Segons la Llei 31/1995, si l'avaluació posa de manifest situacions de risc, l'empresari ha de dur a terme les activitats preventives necessàries per eliminar-les o reduir-les i controlar-les."
  },
  {
    "id": "ex-pal-62",
    "topic": 27,
    "difficulty": "Fàcil",
    "question": "Un focus de la zona 31T és a 37 km a l'oest del meridià central del fus i a 4.612 km al nord de l'equador. Quina coordenada UTM (X, Y), en metres, li correspon?",
    "options": [
      "(537000, 4612000)",
      "(463000, 4612000)",
      "(537000, 5388000)",
      "(463000, 5388000)"
    ],
    "correctIndex": 1,
    "explanation": "El meridià central té fals est X = 500.000 m. 37 km a l'oest = 500.000 - 37.000 = 463.000 m. Y = 4.612.000 m."
  },
  {
    "id": "ex-pal-63",
    "topic": 8,
    "difficulty": "Fàcil",
    "question": "En una subestació s'incendia un transformador sota tensió refrigerat amb oli mineral aïllant, i el que crema és l'oli. Com s'ha de classificar aquest foc segons la norma EN 2?",
    "options": [
      "Com un foc de classe E, la classe que la norma reserva als focs d'equips i instal·lacions elèctriques sota tensió",
      "Com un foc de classe F, perquè el combustible que crema és un oli i la classe F agrupa els focs d'olis i greixos",
      "Com un foc de classe B amb presència d'electricitat, perquè l'electricitat no crema i no existeix cap classe E",
      "Com un foc de classe C, perquè l'arc elèctric gasifica l'oli i el que crema realment són els seus vapors inflamables"
    ],
    "correctIndex": 2,
    "explanation": "La norma EN 2 no contempla la classe E; un foc d'oli mineral (líquid inflamable) en presència d'electricitat es classifica com a classe B amb presència d'electricitat."
  },
  {
    "id": "ex-pal-64",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "En una cambra frigorífica avariada, el vapor d'aigua de l'ambient es condensa sobre les parets fredes i, alhora, el gel acumulat als evaporadors es fon. Quin dels dos processos cedeix calor al seu entorn?",
    "options": [
      "La fusió del gel, perquè el pas de sòlid a líquid allibera la calor latent de fusió",
      "La condensació del vapor, perquè el pas de gas a líquid és un procés exotèrmic",
      "Tots dos, perquè en qualsevol canvi d'estat la substància cedeix la seva calor latent",
      "Cap dels dos, perquè mentre dura un canvi d'estat no hi ha intercanvi de calor"
    ],
    "correctIndex": 1,
    "explanation": "La condensació (gas → líquid) és exotèrmica i cedeix calor a l'entorn; la fusió (sòlid → líquid) és endotèrmica i n'absorbeix."
  },
  {
    "id": "ex-pal-65",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "Un vehicle manté 7,5 m/s constants durant 20 minuts per una pista forestal. Quina distància recorre, expressada en quilòmetres?",
    "options": [
      "0,15 km, multiplicant els 7,5 m/s pels 20 minuts",
      "27 km, passant els 7,5 m/s a km/h i prenent aquest valor",
      "0,9 km, multiplicant els 7,5 m/s pels 1.200 segons",
      "9 km, multiplicant els 7,5 m/s pels 1.200 segons"
    ],
    "correctIndex": 3,
    "explanation": "20 min = 1.200 s. d = 7,5 m/s × 1.200 s = 9.000 m = 9 km."
  },
  {
    "id": "ex-pal-66",
    "topic": 23,
    "difficulty": "Mitjà",
    "question": "Una autobomba i una motobomba aspiren cadascuna pel manegot que li correspon, amb l'aigua circulant a la mateixa velocitat en tots dos. Quina és, aproximadament, la relació entre el cabal del manegot de l'autobomba i el del de la motobomba (Q autobomba / Q motobomba)?",
    "options": [
      "Unes 0,53",
      "Unes 4,91",
      "Unes 1,38",
      "Unes 1,89"
    ],
    "correctIndex": 3,
    "explanation": "Manegot autobomba = 110 mm; manegot motobomba = 80 mm. A igual velocitat, Q₁/Q₂ = (110/80)² = 1,375² ≈ 1,89."
  },
  {
    "id": "ex-pal-67",
    "topic": 9,
    "difficulty": "Fàcil",
    "question": "Un aspirant revisa l'equació C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O i afirma que està mal ajustada perquè a l'esquerra hi ha 6 molècules i a la dreta n'hi ha 7. Té raó?",
    "options": [
      "Sí: la conservació de la massa exigeix el mateix nombre de molècules a cada banda, i cal retocar els coeficients",
      "No: el que s'ha de conservar és el nombre d'enllaços trencats i formats, i en aquesta equació coincideixen",
      "Sí: amb una molècula més a la dreta que a l'esquerra, la massa dels productes supera la dels reactius",
      "No: l'ajustament exigeix els mateixos àtoms de cada element a cada banda, i aquí 3 C, 8 H i 10 O hi quadren"
    ],
    "correctIndex": 3,
    "explanation": "En una reacció química es conserva el nombre d'àtoms de cada element (3 C, 8 H i 10 O a cada banda), no pas el nombre de molècules."
  },
  {
    "id": "ex-pal-68",
    "topic": 23,
    "difficulty": "Mitjà",
    "question": "El manovacuòmetre d'aspiració d'una motobomba antiga està graduat en mmHg i, durant l'encebament, marca -450 mmHg. Prenent la pressió atmosfèrica del lloc com 1 bar, quina pressió absoluta hi ha en aquell punt? (1 mmHg = 133,3 Pa; 1 bar = 100.000 Pa)",
    "options": [
      "Uns 0,60 bar",
      "Uns 1,60 bar",
      "Uns 0,40 bar",
      "Uns 0,96 bar"
    ],
    "correctIndex": 2,
    "explanation": "-450 mmHg × 133,3 Pa/mmHg ≈ -60.000 Pa = -0,60 bar. P_abs = 1,00 - 0,60 = 0,40 bar."
  },
  {
    "id": "ex-pal-69",
    "topic": 2,
    "difficulty": "Mitjà",
    "question": "Un funcionari de la Generalitat ha cessat en el seu lloc de treball com a conseqüència d'un expedient disciplinari. Li és aplicable la garantia d'atribució provisional d'un lloc en el mateix departament i localitat de l'article 76 del Decret legislatiu 1/1997?",
    "options": [
      "Sí, en les mateixes condicions que a la resta de funcionaris remoguts o cessats",
      "Sí, però l'adscripció pot ser a qualsevol localitat de la mateixa comarca",
      "No, perquè el mateix article exclou expressament aquest supòsit de cessament",
      "Només si l'expedient ha conclòs amb una sanció per falta lleu o greu"
    ],
    "correctIndex": 2,
    "explanation": "L'article 76 del DL 1/1997 exclou expressament de la garantia d'atribució provisional els funcionaris cessats com a conseqüència d'un expedient disciplinari."
  },
  {
    "id": "ex-pal-70",
    "topic": 1,
    "difficulty": "Mitjà",
    "question": "Un funcionari no judicial al servei de l'Administració de justícia a Catalunya comet una falta molt greu. A qui correspon exercir-hi la potestat disciplinària, fins i tot amb la separació del servei?",
    "options": [
      "A la Generalitat, dins la competència executiva i de gestió sobre aquest personal",
      "Al Ministeri de Justícia, a proposta del Consell de Justícia de Catalunya",
      "Al Consell General del Poder Judicial, de manera exclusiva i sense intervenció autonòmica",
      "Al president del Tribunal Superior de Justícia de Catalunya"
    ],
    "correctIndex": 0,
    "explanation": "Segons l'EAC, correspon a la Generalitat la competència executiva i de gestió sobre el personal no judicial al servei de l'Administració de justícia, inclosa la potestat disciplinària."
  },
  {
    "id": "ex-pal-71",
    "topic": 24,
    "difficulty": "Difícil",
    "question": "Un bloc d'1 kg de gel a -20 °C s'escalfa a 1 atm fins a convertir-se completament en vapor d'aigua a 100 °C. Quina calor total cal aportar?",
    "options": [
      "738,7 kcal",
      "728,7 kcal",
      "649,0 kcal",
      "189,7 kcal"
    ],
    "correctIndex": 1,
    "explanation": "Q = (1·0,5·20) + (1·79,7) + (1·1·100) + (1·539) = 10 + 79,7 + 100 + 539 = 728,7 kcal."
  },
  {
    "id": "ex-pal-72",
    "topic": 24,
    "difficulty": "Mitjà",
    "question": "Dos vehicles circulen en el mateix sentit, a 90 km/h i a 72 km/h, i el més lent porta 100 m d'avantatge i manté la seva velocitat. El més ràpid fa una sola aturada durant la persecució, circula a 90 km/h la resta del temps i l'atrapa 50 s després de l'instant inicial. Quant ha durat l'aturada?",
    "options": [
      "7,5 s",
      "30 s",
      "10 s",
      "6 s"
    ],
    "correctIndex": 3,
    "explanation": "v_lent = 20 m/s; en 50 s recorre 1.000 m, per tant el punt de trobada és a 1.100 m. v_ràpid = 25 m/s → necessita 1.100/25 = 44 s en moviment → aturada = 50 - 44 = 6 s."
  },
  {
    "id": "ex-pal-73",
    "topic": 24,
    "difficulty": "Mitjà",
    "question": "Un vehicle ha de completar 12 km en 12 min. Fa els primers 6 km a 40 km/h. Quina velocitat constant necessitaria a la segona meitat per complir el temps total?",
    "options": [
      "100 km/h",
      "120 km/h",
      "80 km/h",
      "60 km/h"
    ],
    "correctIndex": 1,
    "explanation": "Temps primers 6 km = 6 / 40 = 0,15 h = 9 min. Queden 12 - 9 = 3 min (0,05 h) per fer els 6 km restants → v = 6 / 0,05 = 120 km/h."
  },
  {
    "id": "ex-pal-74",
    "topic": 7,
    "difficulty": "Mitjà",
    "question": "Quina unitat del Cos d'Agents Rurals porta a terme la interlocució i la coordinació amb el Centre d'Atenció i Gestió de Trucades d'Emergència 112?",
    "options": [
      "La Unitat de Comunicacions, de l'Àrea Tècnica i de Comunicacions",
      "La Unitat de Planificació i Coordinació Operativa, de la Divisió Operativa",
      "La Unitat de Suport Tecnològic, de l'Àrea Tècnica i de Comunicacions",
      "La Unitat d'Anàlisi i Planificació, de l'Àrea d'Anàlisi i Organització"
    ],
    "correctIndex": 0,
    "explanation": "La Unitat de Comunicacions, adscrita a l'Àrea Tècnica i de Comunicacions del Cos d'Agents Rurals, porta a terme la interlocució amb el 112."
  },
  {
    "id": "ex-pal-75",
    "topic": 24,
    "difficulty": "Fàcil",
    "question": "Una caixa es trasllada 8 m horitzontalment i després s'eleva 2 m. Durant el primer tram la mà hi aplica 300 N verticals cap amunt; durant el segon aplica 450 N verticals cap amunt. Quin treball total fa la mà sobre la caixa?",
    "options": [
      "3.300 J",
      "900 J",
      "4.500 J",
      "600 J"
    ],
    "correctIndex": 1,
    "explanation": "En el tram horitzontal, la força vertical és perpendicular al desplaçament (cos 90° = 0 → W₁ = 0 J). En el tram vertical, W₂ = 450 × 2 = 900 J."
  },
  {
    "id": "ex-pal-76",
    "topic": 9,
    "difficulty": "Fàcil",
    "question": "Es comparen parells d'àtoms neutres a partir del nombre atòmic (Z) i del nombre màssic (A) de cadascun. Quin parell té el mateix nombre de neutrons als dos nuclis?",
    "options": [
      "Un de Z = 6 i A = 14, i un altre de Z = 7 i A = 15",
      "Un de Z = 6 i A = 12, i un altre de Z = 6 i A = 14",
      "Un de Z = 6 i A = 14, i un altre de Z = 7 i A = 14",
      "Un de Z = 5 i A = 11, i un altre de Z = 6 i A = 10"
    ],
    "correctIndex": 0,
    "explanation": "N = A - Z. En el primer parell: 14 - 6 = 8 neutrons i 15 - 7 = 8 neutrons (isòtons)."
  },
  {
    "id": "ex-pal-77",
    "topic": 8,
    "difficulty": "Fàcil",
    "question": "Dues fitxes de seguretat donen la temperatura crítica de dos gasos: 250 K el primer i 320 K el segon. Com queda classificat cadascun segons el criteri físic de temperatura crítica?",
    "options": [
      "El primer, liquat (23 °C), i el segon, comprimit (-47 °C)",
      "Tots dos, gasos comprimits (Tc de -23 °C i de 47 °C)",
      "El primer, comprimit (-23 °C), i el segon, liquat (47 °C)",
      "Tots dos, gasos liquats (Tc de -23 °C i de 47 °C)"
    ],
    "correctIndex": 2,
    "explanation": "250 K = -23 °C (< -10 °C → gas comprimit). 320 K = 47 °C (entre -10 i 70 °C → gas liquat)."
  }
];
