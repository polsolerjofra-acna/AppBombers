export const tema8PrevencioIncendis = {
  id: 'tema-23',
  number: 23,
  code: 'MAN.SP.000',
  title: "Prevenció bàsica d'incendis",
  category: 'Manual Operatiu SGO — Prevenció, CTE, RSCIEI 2025 i Hidrants',
  estimatedMinutes: 55,
  importance: {
    title: "Radar d'Examen — Tema 23 (MAN.SP.000 V.2): Prevenció Bàsica d'Incendis",
    frequency: 'Molt Alta (5-7 preguntes fixes sobre CTE, Nou RSCIEI RD 164/2025, Euroclasses, Hidrants i FOER)',
    summary:
      "Aquesta és la Versió 2 actualitzada del manual MAN.SP.000: incorpora el NOU RSCIEI (RD 164/2025), el nou Reglament Europeu de Productes de Construcció (UE 2024/3110) i la Classe L (bateries d'ió liti). Inclou 5 pàgines de desenvolupament per capítols + 2 pàgines finals de Resum Executiu amb totes les taules numèriques.",
    hotTopics: [
      'Cap. 1: Les 6 exigències bàsiques (SI 1 a SI 6), protecció passiva vs. activa i marc normatiu: Llei 3/2010, CTE DB-SI, Nou RSCIEI (RD 164/2025), RIPCI (RD 513/2017) i ITCs (SP-109, SP-112, SP-120, SP-133, SP-136, SP-146).',
      'Cap. 2: Espai de maniobra (>9 m d’alçada en CTE o >1.000 m² en RSCIEI: amplada ≥5 m, alçada lliure ≥4,5 m, separació màx. 30 m/23 m/18 m, pendent ≤10%, resistència 20 kN/m² i punts de 125 kN), façana accessible (15%, buits 0,80×1,20 m cada ≤25 m) i escala protegida (≤15 m a porta, EI-120, 1 m² per planta i SP-133).',
      'Cap. 3: Euroclasses de Reacció al foc (A1, A2, B, C, D, E, F + fum s1-s3 + gotes d0-d2; C-s2,d0 equival a M1) i Resistència al foc (R-E-I, Reglament UE 2024/3110, mitgera EI 120, franges 1 m EI t/2).',
      'Cap. 4: Hidrants SP-120 (1.000 L/min durant 2 h a 1 bar = 240 m³), Hidrants industrials (a ≤40 m, entre 5 i 15 m de façana, 1.500–3.000 L/min a 5 bar), Columna seca (DN 80 mm, prova a 1.470 kPa / 2.450 kPa), Grup de bombament UNE 23500 (aturada manual!) i SCTiEF (UNE 23585).',
      'Cap. 5-7: Prevenció operativa CER (llindars EGA ≥50 m, túnels ≥400 m, P1 ≥3.000 m², aparcaments ≥2.500 m²), FOER (6 fases i codi BAD-HOS-00001) i Classe L (bateries Li-ion).'
    ],
    traps: [
      'Normativa actualitzada a la V.2: el RSCIEI és el NOU Reial Decret 164/2025 (que substitueix el RD 2267/2004) i el Reglament UE de productes de construcció és el (UE) 2024/3110!',
      'Confondre Reacció al foc (Euroclasses A1-F + s + d: com s’encén i alimenta el foc un revestiment) amb Resistència al foc (R, E, I en minuts: quant de temps aguanta un element constructiu/sectoritzador).',
      'Parany d’examen UNE 23500: Les bombes principals d’abastament contra incendis (elèctriques o dièsel) tenen arrencada automàtica però ATURADA EXCLUSIVAMENT MANUAL!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1 Normativa i ITCs',
      title: '1. Les 6 Exigències Bàsiques (SI 1–SI 6), Marc Normatiu (RD 164/2025) i ITCs',
      subtitle: 'Llei 3/2010, CTE DB-SI, Nou RSCIEI RD 164/2025, RIPCI RD 513/2017 i Instruccions Tècniques Complementàries.',
      blocks: [
        {
          type: 'text',
          heading: '1.1–1.2. Les 6 Exigències Bàsiques (SI 1–SI 6) i Protecció Passiva vs. Activa',
          paragraphs: [
            "El Codi Tècnic de l'Edificació (CTE DB-SI) i el Nou Reglament de Seguretat Contra Incendis en Establiments Industrials (RSCIEI, RD 164/2025) articulen la prevenció entorn de 6 exigències bàsiques: SI 1 (Propagació interior), SI 2 (Propagació exterior), SI 3 (Evacuació d'ocupants), SI 4 (Instal·lacions PCI), SI 5 (Intervenció dels bombers) i SI 6 (Resistència al foc de l'estructura).",
            "No confondre! Protecció Passiva vs. Protecció Activa: La Protecció Passiva agrupa els elements constructius que contenen el foc sense necessitar activació (sectorització EI, portes tallafoc, ignifugació estructural, escales protegides). La Protecció Activa inclou les instal·lacions que detecten, alerten o extingeixen l'incendi (detectors, extintors, BIE, hidrants, columna seca, ruixadors i SCTiEF)."
          ]
        },
        {
          type: 'table',
          title: '1.4. Marc Normatiu Vigent i les 6 ITCs de Prevenció de Catalunya (MAN.SP.000 V.2)',
          subtitle: 'Lleis, Reials Decrets i Instruccions Tècniques Complementàries (SP) que cauen a l’examen',
          headers: ['Norma / ITC', 'Títol i Àmbit d’Aplicació', 'Detall Clau de la Versió 2 del Manual'],
          rows: [
            ['Llei 3/2010, del 18 de febrer', 'Llei de prevenció i seguretat en matèria d’incendis en establiments, activitats, infraestructures i edificis a Catalunya', 'Regula el control preventiu de la Generalitat (Annex 1 i 2) i habilita la publicació de les ITC (SP).'],
            ['CTE DB-SI (RD 314/2006)', 'Codi Tècnic de l’Edificació — Document Bàsic Seguretat en cas d’Incendi', 'S’aplica a edificis d’ús residencial, administratiu, docent, hospitalari, comercial, pública concurrència i aparcament.'],
            ['NOU RSCIEI (RD 164/2025)', 'Nou Reglament de Seguretat Contra Incendis en els Establiments Industrials', 'NOVETAT V.2: Substitueix l’antic RD 2267/2004 per a fàbriques, magatzems i tallers industrials.'],
            ['RIPCI (RD 513/2017)', 'Reglament d’Instal·lacions de Protecció Contra Incendis', 'Regula el disseny, instal·lació i manteniment (trimestral, anual, quinquennal) dels equips de protecció activa.'],
            ['ITC SP-109 i SP-112', 'SP-109: Aparcaments robotitzats | SP-112: Hidrants i columnes seques en edificis', 'Criteris tècnics específics a Catalunya per a sistemes d’intervenció de bombers.'],
            ['ITC SP-120', 'Dotació d’hidrants d’incendi a la xarxa pública municipal', 'Exigeix 1.000 L/min durant 2 hores a una pressió mínima d’1 bar (reserva total = 240 m³).'],
            ['ITC SP-133', 'Condicions de seguretat i ventilació d’escales protegides per a la intervenció', 'Regula la ventilació d’escales (1 m² per planta o sistema de sobrepressió diferencial).'],
            ['ITC SP-136 i SP-146', 'SP-136: Focs d’olis en cuines | SP-146: Instal·lacions fotovoltaiques en cobertes', 'Exigències d’extinció automàtica en cuines industrials i seccionament/passadissos en plaques solars.']
          ],
          footnote: 'Memoritza especialment: Llei 3/2010, Nou RSCIEI RD 164/2025, RIPCI RD 513/2017, SP-120 (hidrants 1.000 L/min × 2h a 1 bar) i SP-133 (escales).'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 2 Accessibilitat',
      title: '2. Accessibilitat per a Bombers (SI 5): Vial d’Aproximació, Espai de Maniobra i Escales',
      subtitle: 'Dimensions exactes de vials i espais de maniobra (>9 m / >1.000 m²), façana accessible (15%) i SP-133.',
      blocks: [
        {
          type: 'text',
          heading: 'No confondre! Vial d’Aproximació (≥ 3,5 m) vs. Espai de Maniobra (≥ 5 m)',
          paragraphs: [
            "• Vial d'Aproximació: camí o carrer d'accés fins a l'edifici (amplada ≥ 3,5 m, gàlib ≥ 4,5 m, 20 kN/m²).",
            "• Espai de Maniobra: plataforma adjacent a la façana per estacionar i estabilitzar l'autoescala AEA (obligatori si alçada d'evacuació > 9 m en CTE o > 1.000 m² en RSCIEI): amplada ≥ 5 m, gàlib ≥ 4,5 m, pendent ≤ 10% i punxonament 125 kN en Ø 20 cm."
          ]
        },
        {
          type: 'table',
          title: '2.1. Condicions d’Aproximació, Espai de Maniobra i Façana Accessible (CTE SI 5 / RSCIEI)',
          subtitle: 'Totes les cotes en metres, kN i percentatges de la Secció 2.1 de MAN.SP.000 V.2',
          headers: ['Paràmetre (Secció)', 'Vial d’Aproximació als Edificis', 'Espai de Maniobra (Edificis >9 m d’alçada d’evacuació en CTE o >1.000 m² en RSCIEI)'],
          rows: [
            ['Amplada mínima lliure', '≥ 3,5 metres', '≥ 5,0 metres'],
            ['Alçada lliure (gàlib)', '≥ 4,5 metres', '≥ 4,5 metres'],
            ['Capacitat portant del paviment', '20 kN/m² (≈ 2.000 kg/m²)', '20 kN/m² + resistència al punxonament de 125 kN sobre cercles de Ø 20 cm (potes d’autoescala AEA!)'],
            ['Pendent màxim', '— (segons traçat viari)', '≤ 10% (màxim 10% perquè l’autoescala AEA es pugui anivellar!)'],
            ['Separació màxima a la façana', 'Fins a l’espai de maniobra (en cul-de-sac >30 m cal espai de gir)', '• Edifici fins a 15 m d’alçada: màxim 30 m de separació.\n• Edifici de 15 m a 20 m d’alçada: màxim 23 m.\n• Edifici de > 20 m d’alçada: màxim 18 m.\n(Distància mínima del bordó a la façana: ≥ 3 m si el vial és estret).'],
            ['2.1.3. Façana Accessible (15%)', 'Mínim el 15% del perímetre de l’edifici ha de ser façana accessible als bombers.', 'Buits d’accés en façana: mínim 0,80 m (amplada) × 1,20 m (alçada), amb ampit interior ≤ 1,20 m i separats entre si com a màxim 25 m en horitzontal!']
          ],
          footnote: 'Memoritza la trilogia de distàncies màximes de l’espai de maniobra a la façana segons l’alçada de l’edifici: ≤15 m → 30 m | 15-20 m → 23 m | >20 m → 18 m!'
        },
        {
          type: 'table',
          title: '2.2. Escales d’Evacuació i d’Intervenció Interior (Escala Protegida i Especialment Protegida)',
          subtitle: 'Paràmetres de compartimentació, distàncies i ventilació (CTE + ITC SP-133)',
          headers: ['Paràmetre d’Escala Protegida', 'Valor Reglamentari (MAN.SP.000 Secció 2.2)', 'Funció Operativa per a Bombers'],
          rows: [
            ['Distància màxima des de l’escala fins a l’accés a qualsevol planta/habitatge', '≤ 15 metres des de la porta de l’escala protegida', 'Garanteix que un binomi amb una sola mànega pugui assolir l’entrada del sector incendiat des de la zona segura de l’escala.'],
            ['Resistència al foc del recinte de l’escala', 'Paret EI-120 i Portes EI₂ 60-C5 (amb molla de tancament automàtic)', 'En escala Especialment Protegida s’afegeix un vestíbul d’independència previ amb doble porta EI₂ 30-C5 (obligatori en soterranis/aparcaments i EGA > 28 m).'],
            ['Ventilació de fums de l’escala (SP-133)', 'Finestres practicables de ≥ 1 m² a cada planta (o conductes / sistema de pressió diferencial EN 12101-6 de ~50 Pa)', 'Permet evacuar el fum que entri a la caixa d’escala i mantenir la Ruta Freda lliure de gasos calents.']
          ],
          footnote: 'Les portes d’una escala protegida han d’obrir en el sentit de l’evacuació quan donen servei a més de 50 persones (o >100 en general).'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 3 Euroclasses i REI',
      title: '3. Límits a l’Extensió: Reacció al Foc (Euroclasses), Resistència (R-E-I) i Sectorització',
      subtitle: 'Euroclasses A1-F (s1-s3, d0-d2), Reglament (UE) 2024/3110, mitgera EI 120 i franges d’1 m (EI t/2).',
      blocks: [
        {
          type: 'text',
          heading: 'No confondre! Reacció al Foc (Euroclasses) vs. Resistència al Foc (R-E-I)',
          paragraphs: [
            "• Reacció al Foc (Euroclasses A1–F + fum s1–s3 + gotes d0–d2): mesura com un material de revestiment (terra, paret, sostre, cable) s'encén i contribueix a propagar l'incendi. NO s'expressa en minuts! (Equivalència clau: C-s2,d0 = antiga classe M1).",
            "• Resistència al Foc (R-E-I + minuts: 30, 60, 90, 120...): mesura quants MINUTS aguanta un element constructiu o sectoritzador sense col·lapsar (R), sense deixar passar flames/gasos (E) ni deixar passar calor excessiva (I: ≤ 140 °C mitjana / 180 °C màx.)."
          ]
        },
        {
          type: 'table',
          title: '3.1.1. Euroclasses de Reacció al Foc vs. 3.1.2. Resistència al Foc (R-E-I)',
          subtitle: 'Reglament Europeu de Productes de Construcció (UE) 2024/3110 i RD 842/2013',
          headers: ['Concepte', 'Classificació i Simbologia Oficial', 'Significat Exacte d’Examen'],
          rows: [
            ['Reacció al Foc (Contribució del material com a combustible)', '7 Classes principals: A1, A2, B, C, D, E, F\n(Subíndexs: sostres/parets, FL per a terres, L per a canonades, ca per a cables).', '• A1 = Incombustible del tot (pedra, formigó, acer).\n• A2 = Pràcticament incombustible.\n• B = Combustible amb contribució molt limitada.\n• C = Contribució limitada | D = Mitjana | E = Alta | F = Sense classificar / no supera E.'],
            ['Opacitat i producció de Fum (s)', 's1 (baixa), s2 (mitjana), s3 (alta / sense límit)', 'Indica la velocitat i quantitat d’emissió de fums del material en cremar.'],
            ['Caiguda de Gotes o partícules inflamades (d)', 'd0 (nul·la: 0 gotes), d1 (caiguda < 10 s), d2 (alta / sense límit)', 'EQUIVALÈNCIA CLAU DEL MANUAL: L’euroclasse C-s2,d0 equival a l’antiga classe M1 (combustible però no inflamable)!'],
            ['Resistència al Foc: R (Capacitat portant)', 'R + temps en minuts (R 30, R 60, R 90, R 120, R 180, R 240)', 'Temps durant el qual un pilar, biga o forjat manté la seva estabilitat mecànica sense col·lapsar.'],
            ['Resistència al Foc: E (Integritat)', 'E + temps en minuts (ex: E 60)', 'Temps durant el qual un element separador impedeix el pas de flames o gasos calents per esquerdes.'],
            ['Resistència al Foc: I (Aïllament tèrmic)', 'I + temps en minuts (combinat com EI 60, EI 120 o REI 120)', 'Temps durant el qual la cara NO exposada al foc no supera un increment mitjà de 140 °C (ni 180 °C en cap punt)! (Altres lletres: W=radiació, M=acció mecànica, C=tancament automàtic, S=estanquitat al fum).']
          ],
          footnote: 'Un pilar demana R (ex: R 90); un envà tallafoc no portant demana EI (ex: EI 120); un mur de càrrega o forjat que separa dos sectors demana REI (ex: REI 120).'
        },
        {
          type: 'table',
          title: '3.2–3.3. Propagació Interior i Propagació Exterior (Mitgera EI 120 i Franja d’1 m)',
          subtitle: 'Valors normatius per evitar el salt del foc entre edificis o sectors',
          headers: ['Element Sectoritzador', 'Exigència Oficial (CTE / RSCIEI)', 'Detall Tècnic del Manual MAN.SP.000'],
          rows: [
            ['Paret Mitgera entre dos edificis o establiments', 'Mínim EI 120 (en indústries Risc Alt pot arribar a EI 180 / EI 240)', 'Impedeix que un incendi passi a l’edifici veí durant un mínim de 2 hores.'],
            ['Trobada de Mitgera amb Façana o Coberta', 'Franja de ≥ 1 metre d’amplada amb resistència EI t/2 (mínim EI 60)', 'O bé que la paret mitgera sobresurti 0,60 m per sobre de la coberta per evitar que les flames saltin d’una nau a la contigua.'],
            ['Distància entre buits (finestres) de sectors diferents en façana o coberta', 'Depèn de l’angle entre façanes (0° a 180°): des de 0,50 m fins a 3,00 m (horitzontal) i ≥ 1,00 m en vertical', 'En lluernaris de coberta respecte d’edificis veïns a alçada h i distància d: franges resistents segons la taula d/h del DB-SI 2.']
          ],
          footnote: 'Memoritza: Paret mitgera entre edificis = EI 120 | Franja de coberta/façana a la trobada amb un sector = 1 metre d’amplada amb EI igual a la meitat del sector (EI t/2, mínim EI 60).'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 4 Hidrants i Col. Seca',
      title: '4. Recursos PCI: SCTiEF, Hidrants (SP-120 i Industrials), Columna Seca i Abastament',
      subtitle: 'Cabal i pressió d’hidrants públics (1.000 L/min a 1 bar) vs. industrials (5 bar), DN 80 i UNE 23500.',
      blocks: [
        {
          type: 'text',
          heading: 'No confondre! BIE vs. Hidrant vs. Columna Seca',
          paragraphs: [
            "• BIE (Boca d'Incendi Equipada, UNE-EN 671): instal·lació interior permanentment plena d'aigua a pressió (mànega semirígida Ø25 mm o plana Ø45 mm) per a primera intervenció d'ocupants i bombers.",
            "• Hidrant (SP-120 públic / RSCIEI industrial): presa exterior d'abastament d'aigua per alimentar autobombes (o atacar directament en industrial a 5 bar). Públic SP-120: 1.000 L/min × 2 h a ≥ 1 bar (240 m³); Industrial: 1.500–3.000 L/min a ≥ 5 bar, a ≤ 40 m de l'accés i 5–15 m de façana.",
            "• Columna Seca (SP-112 / RIPCI): canonada vertical DN 80 mm normalment BUIDA d'aigua (sense pressió) d'ús exclusiu per a Bombers. S'alimenta des de la façana (2×Ø70 a 0,90 m) i té sortides dobles Ø45 a les plantes parells fins a la 8a i a totes a partir de la 8a."
          ]
        },
        {
          type: 'table',
          title: '4.1–4.2. Especificacions Tècniques Oficials de les Instal·lacions PCI per a Bombers',
          subtitle: 'Totes les xifres del Capítol 4 de MAN.SP.000 V.2 — El bloc més preguntat de tot el tema!',
          headers: ['Instal·lació PCI (Secció)', 'Valors Numèrics Oficials (Cabal, Pressió, Mides)', 'Norma i Operativa de Bombers'],
          rows: [
            ['4.1. SCTiEF (Control de Temperatura i Evacuació de Fums)', 'Norma UNE 23585. Exutoris aerodinàmics de coberta + cortines de fum + entrades d’aire inferior.', 'Manté una capa lliure de fum sobre el terra, redueix la Tª dels gasos sota el sostre (evita el col·lapse de l’acer i el Flashover) i facilita la visibilitat.'],
            ['4.2.2. Hidrant Públic Municipal (ITC SP-120)', '• Cabal mínim: 1.000 L/min (16,6 L/s).\n• Autonomia mínima: 2 hores.\n• Pressió dinàmica mínima: 1 bar (100 kPa).\n• Reserva total d’aigua: 240 m³ (240.000 L).', 'Hidrants de columna (DN 80 o DN 100 mm amb sortides racor Barcelona Ø70/Ø45 o presa de 100 mm) o hidrants d’arqueta soterrats (UNE-EN 14384 / 14339).'],
            ['4.2.3. Hidrant d’Establiment Industrial (RSCIEI)', '• Distància a accés: ≤ 40 m | Separació a façana: 5 a 15 m.\n• Cabal: 1.500–3.000 L/min a pressió mínima de 5 bar (60–90 min).', 'Els 5 bar permeten connectar mànegues directament a l’hidrant sense bomba si cal.'],
            ['4.2.4. Columna Seca (SP-112 / RIPCI)', '• DN 80 mm (buida) · Presa façana a 0,90 m (2×Ø70).\n• Sortides 2×Ø45: parells fins a 8a i totes des de la 8a (clau cada 4).\n• Prova: 1.470 kPa (15 bar) i 2.450 kPa (25 bar) amb vàlvules.', 'Obligatòria si h > 24 m (> 15 m en hospitals) o aparcaments > 3 plantes sota rasant.'],
            ['4.2.5. Grup d’Abastament d’Aigua PCI (UNE 23500)', 'Bomba Jockey (manté pressió de xarxa) + Bomba Principal (elèctrica o dièsel) + Dipòsit de reserva.', 'DADA CRÍTICA UNE 23500: La bomba Jockey té arrencada i aturada automàtiques, però la BOMBA PRINCIPAL té arrencada automàtica per caiguda de pressió i ATURADA EXCLUSIVAMENT MANUAL al quadre de la sala de bombes!'],
            ['4.2.6. Ruixadors (Sprinklers) i Cuines (SP-136)', 'Ampolla termosensible (68 °C vermella en ús ordinari; 57 °C taronja; 79 °C groga; 93 °C verda).', 'Només s’obre el ruixador que arriba a la temperatura de trencament del bulb (no tots alhora, excepte en sistemes de diluvi!).']
          ],
          footnote: 'Compara els dos hidrants: Públic SP-120 = 1.000 L/min × 2h a 1 bar (240 m³) | Industrial RSCIEI = 1.500-3.000 L/min a 5 bar, situat a ≤40 m de l’accés i a 5-15 m de la façana!'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Cap. 5-7 CER i FOER',
      title: '5–7. Prevenció Operativa: Llindars CER, Fitxes FOER (6 Fases) i Glossari (Classe L)',
      subtitle: 'Construccions d’Especial Risc (EGA ≥50 m, túnels ≥400 m), estructura BAD-HOS-00001 i bateries Li-ion.',
      blocks: [
        {
          type: 'table',
          title: '5.1. Llindars Oficials de les Construccions d’Especial Risc (CER) (MAN.SP.000 Secció 5.1)',
          subtitle: 'Edificis i infraestructures que requereixen fitxa operativa específica per a la intervenció de Bombers',
          headers: ['Tipologia de Construcció (CER)', 'Llindar Mínim Oficial al Manual', 'Risc Específic per a la Intervenció'],
          rows: [
            ['1. EGA (Edificis de Gran Alçada)', 'Alçada d’evacuació ≥ 50 metres', 'Supera l’abast de qualsevol AEA (>30-42 m); l’atac i evacuació depenen al 100% d’escales especialment protegides, ascensor d’emergència i columna seca/BIE.'],
            ['2. Túnels Viaris o Ferroviaris', 'Longitud ≥ 400 metres', 'Confinament extrem de fums, altes temperatures (>1.000 °C) i dificultat d’accés/evacuació per galeries.'],
            ['3. Soterranis de Gran Profunditat', 'Profunditat P1 ≥ 3.000 m² o múltiples plantes sota rasant', 'Evacuació ascendent contra el fum calent i pèrdua de cobertura ràdio TMO.'],
            ['4. Aparcaments Soterrats', 'Superfície construïda ≥ 2.500 m² (o aparcaments robotitzats SP-109)', 'Alta càrrega de foc de vehicles (plàstics, combustibles i bateries Li-ion Classe L).'],
            ['5. Hospitals / Residències / Indústries Seveso', 'Ocupants no autònoms o substàncies perilloses', 'Evacuació horitzontal per sectors EI-120 en hospitals i coordinació amb el PAU.']
          ],
          footnote: 'Memoritza els 4 llindars CER: EGA ≥ 50 m | Túnels ≥ 400 m | Soterranis P1 ≥ 3.000 m² | Aparcaments ≥ 2.500 m².'
        },
        {
          type: 'text',
          heading: '5.2–7. Fitxes FOER (6 Fases) i Glossari V.2 (Classe L: Bateries Li-ion)',
          paragraphs: [
            "Les Fitxes Operatives d'Elements de Risc (FOER) s'identifiquen amb el codi [MUNICIPI 3 lletres]-[TIPUS 3 lletres]-[5 DÍGITS] (ex. BAD-HOS-00001 = Badalona, Hospital, fitxa 00001).",
            "El seu cicle d'elaboració té 6 fases: 1) Detecció i selecció del CER → 2) Recopilació documental (PAU, plànols PCI) → 3) Visita d'inspecció in situ → 4) Redacció i disseny gràfic → 5) Validació tècnica i publicació al SIG/tauletes → 6) Pràctica/simulacre i actualització.",
            "Novetat Glossari V.2 (Cap. 7): Incorpora la CLASSE L per designar els focs en bateries d'ió liti (Li-ion) amb risc d'embalaçament tèrmic (Thermal Runaway)."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Regla Mnemotècnica · Codi FOER i Les 6 Fases d’Elaboració',
          acronym: 'CODI FOER: [MUNICIPI 3 lletres] - [TIPUS 3 lletres] - [5 DÍGITS]   (Ex: BAD-HOS-00001)',
          trick:
            "• 6 Fases FOER: 1) Selecció → 2) Documentació → 3) Visita in situ → 4) Redacció/Plànol → 5) Validació/SIG → 6) Simulacre/Actualització.\n• Classe L (V.2): Focs en bateries d'ió liti (Li-ion).",
          example: 'El codi del manual BAD-HOS-00001 identifica la primera fitxa FOER (00001) d’un Hospital (HOS) al municipi de Badalona (BAD).'
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · 📌 Resum 1/2 (Xifres)',
      title: 'Resum Final (1/2): Taula Mestra de Xifres, Cotes i Pressions (MAN.SP.000 V.2)',
      subtitle: 'Totes les mesures del CTE, RSCIEI 2025, Hidrants, Columna Seca i CER per memoritzar.',
      blocks: [
        {
          type: 'table',
          title: 'Síntesi Numèrica Imprescindible d’Examen — Tema 23 (Prevenció d’Incendis V.2)',
          subtitle: 'Les 18 xifres oficials del manual MAN.SP.000 que més es pregunten a l’oposició',
          headers: ['Concepte / Instal·lació', 'Valor Exacte (MAN.SP.000 V.2)', 'Detall Normatiu Clau'],
          rows: [
            ['1. Nou RSCIEI i Nou Reglament UE Productes', 'RD 164/2025 (RSCIEI) | Reglament (UE) 2024/3110', 'Llei catalana: Llei 3/2010 | RIPCI: RD 513/2017'],
            ['2. Quan s’exigeix Espai de Maniobra', 'Alçada evacuació > 9 m (CTE) o > 1.000 m² (RSCIEI)', 'Vial d’aproximació: amplada ≥ 3,5 m i gàlib ≥ 4,5 m'],
            ['3. Dimensions de l’Espai de Maniobra', 'Amplada ≥ 5 m | Alçada ≥ 4,5 m | Pendent ≤ 10%', 'Resistència: 20 kN/m² i punxonament de 125 kN en Ø 20 cm'],
            ['4. Distància màx. Espai Maniobra a Façana', '≤15 m alçada → 30 m | 15-20 m → 23 m | >20 m → 18 m', 'Com més alt és l’edifici, més a prop s’ha de situar l’AEA'],
            ['5. Façana Accessible i Buits d’Accés', '≥ 15% del perímetre | Buits ≥ 0,80 × 1,20 m cada ≤ 25 m', 'Ampit interior de la finestra ≤ 1,20 m'],
            ['6. Escala Protegida (CTE + SP-133)', 'Distància a porta ≤ 15 m | Paret EI-120 | Finestra ≥ 1 m²/planta', 'Porta EI₂ 60-C5 (o vestíbul amb doble EI₂ 30-C5 en esp. protegida)'],
            ['7. Euroclasses de Reacció al Foc', 'A1, A2, B, C, D, E, F + fum (s1-s3) + gotes (d0-d2)', 'Equivalència del manual: C-s2,d0 = antiga classe M1'],
            ['8. Resistència al Foc (R-E-I)', 'R (Portant), E (Integritat), I (Aïllament ≤140°C mitjana / 180°C màx.)', 'Escala de minuts: 15, 20, 30, 45, 60, 90, 120, 180, 240'],
            ['9. Paret Mitgera i Franja de Trobada', 'Mitgera = EI 120 | Franja d’1 m d’amplada = EI t/2 (mín. EI 60)', 'O bé que la mitgera sobresurti 0,60 m sobre la coberta'],
            ['10. Hidrant Públic Municipal (ITC SP-120)', '1.000 L/min durant 2 hores a ≥ 1 bar (Reserva = 240 m³)', 'Connexió per a línia nodrissa cap a l’autobomba'],
            ['11. Hidrant Industrial (RSCIEI)', '1.500 a 3.000 L/min a ≥ 5 bar (60–90 min)', 'Situat a ≤ 40 m de l’accés i separat entre 5 m i 15 m de la façana'],
            ['12. Columna Seca (DN i Preses)', 'DN 80 mm | Entrada façana 2×Ø70 (a 0,90 m) | Sortides 2×Ø45', 'Sortides a plantes parells fins a la 8a i a totes a partir de la 8a (clau cada 4)'],
            ['13. Prova de Pressió de Columna Seca', '1.470 kPa (15 bar) canonada | 2.450 kPa (25 bar) amb vàlvules', 'Obligatòria si h > 24 m (>15 m en hospitals) o pàrquings > 3 soterranis'],
            ['14. Grup de Bombament PCI (UNE 23500)', 'Arrencada automàtica i ATURADA EXCLUSIVAMENT MANUAL', 'La bomba Jockey és l’única que s’atura sola; la principal és manual!'],
            ['15. Llindars CER (Especial Risc)', 'EGA ≥ 50 m | Túnels ≥ 400 m | P1 ≥ 3.000 m² | Pàrquing ≥ 2.500 m²', 'Objecte d’elaboració de fitxes FOER (ex: BAD-HOS-00001 en 6 fases)']
          ],
          footnote: 'Pàgina 1 de 2 del Resum Executiu del Tema 23 (MAN.SP.000 V.2).'
        }
      ]
    },
    {
      pageNumber: 7,
      isSummary: true,
      shortLabel: 'Pàg. 7 · 📌 Resum 2/2 (Punts Clau)',
      title: 'Resum Final (2/2): Claus Conceptuals i Paranys del Tribunal (MAN.SP.000 V.2)',
      subtitle: 'Les 5 comparatives essencials per resoldre qualsevol pregunta trampa de Prevenció.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Els 5 Paranys del Tribunal al Tema 23 (Prevenció d’Incendis)',
          acronym: 'REACCIÓ vs RESISTÈNCIA | SP-120 vs INDUSTRIAL | COLUMNA SECA (8a) | UNE 23500 (Manual) | CLASSE L',
          trick:
            "• REACCIÓ vs. RESISTÈNCIA: Reacció (A1–F, s, d) = com crema un revestiment (sense minuts) | Resistència (R-E-I + minuts) = temps que aguanta una estructura o sectorització.\n• HIDRANT PÚBLIC vs. INDUSTRIAL: Públic SP-120 (1.000 L/min × 2h a 1 bar = 240 m³) | Industrial RSCIEI (1.500–3.000 L/min a 5 bar, ≤ 40 m de porta, 5–15 m de façana).\n• COLUMNA SECA (DN 80): Ø45 parells fins 8a planta i totes des de la 8a; clau seccionament cada 4 plantes.\n• UNE 23500: Bomba principal té arrencada automàtica i ATURADA EXCLUSIVAMENT MANUAL.\n• NOVETATS V.2: RSCIEI = RD 164/2025 | Reglament UE 2024/3110 | Classe L = bateries ió liti.",
          example: 'Si et pregunten a quines plantes té sortida una columna seca en un edifici de 12 plantes: 2a, 4a, 6a, 8a, 9a, 10a, 11a i 12a (amb vàlvula de seccionament a la 4a i 8a).'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q23-1',
      difficulty: 'Fàcil',
      question: "Segons la Instrucció Tècnica Complementària SP-120 recollida al manual MAN.SP.000, quin cabal, autonomia, pressió mínima i reserva total d'aigua ha de garantir un hidrant d'incendi a la xarxa pública?",
      options: [
        '500 L/min durant 1 hora a 5 bar (30 m³)',
        '1.000 L/min durant 2 hores a una pressió mínima d’1 bar (reserva de 240 m³)',
        '2.000 L/min durant 3 hores a 3 bar (360 m³)',
        '1.500 L/min durant 1 hora a 5 bar (90 m³)'
      ],
      correctIndex: 1,
      explanation: 'La ITC SP-120 exigeix un cabal mínim de 1.000 L/min durant 2 hores (120 min × 1.000 L = 120.000 L per hidrant; per a 2 hidrants simultanis o reserva de xarxa = 240 m³) a una pressió dinàmica mínima d’1 bar.'
    },
    {
      id: 'q23-2',
      difficulty: 'Mitjà',
      question: "Quin Reial Decret aprova el nou Reglament de Seguretat Contra Incendis en els Establiments Industrials (RSCIEI) citat a la Versió 2 del manual MAN.SP.000?",
      options: [
        'RD 1942/1993',
        'RD 164/2025',
        'RD 314/2006',
        'RD 836/2012'
      ],
      correctIndex: 1,
      explanation: "La Versió 2 del manual MAN.SP.000 actualitza el marc normatiu amb el nou RSCIEI aprovat pel Reial Decret 164/2025."
    },
    {
      id: 'q23-3',
      difficulty: 'Mitjà',
      question: "En una instal·lació de Columna Seca (DN 80 mm), com es distribueixen les bocas de sortida per plantes i cada quantes plantes s'instal·la una vàlvula de seccionament?",
      options: [
        'Sortides a totes les plantes des de la 1a i vàlvula a cada planta.',
        'Sortides a les plantes parells fins a la 8a i a totes a partir de la 8a, amb vàlvula de seccionament cada 4 plantes.',
        'Sortides només a les plantes senars i vàlvula cada 2 plantes.',
        'Sortides cada 3 plantes fins a la 12a.'
      ],
      correctIndex: 1,
      explanation: 'La columna seca disposa de sortides dobles de Ø45 a les plantes parells fins a la 8a planta i en totes les plantes a partir de la 8a, amb clau de seccionament cada 4 plantes.'
    },
    {
      id: 'q23-4',
      difficulty: 'Difícil',
      question: "Quines són les exigències d'amplada, alçada lliure, pendent màxim i resistència al punxonament de les potes d'autoescala en un Espai de Maniobra per a bombers (per a edificis >9 m d'alçada d'evacuació)?",
      options: [
        'Amplada ≥ 3,5 m | Alçada ≥ 3,5 m | Pendent ≤ 15% | Punxonament 50 kN',
        'Amplada ≥ 5 m | Alçada ≥ 4,5 m | Pendent ≤ 10% | Capacitat 20 kN/m² i punxonament de 125 kN en Ø 20 cm',
        'Amplada ≥ 6 m | Alçada ≥ 5 m | Pendent ≤ 5% | Punxonament 200 kN',
        'Amplada ≥ 4 m | Alçada ≥ 4 m | Pendent ≤ 12% | Punxonament 80 kN'
      ],
      correctIndex: 1,
      explanation: "L'espai de maniobra requereix amplada mínima de 5 m, alçada lliure de 4,5 m, pendent màxim del 10%, sobrecàrrega de 20 kN/m² i resistència al punxonament de 125 kN sobre un cercle de 20 cm de diàmetre."
    },
    {
      id: 'q23-5',
      difficulty: 'Fàcil',
      question: "Segons l'apartat 5.1 del manual MAN.SP.000, a partir de quina alçada d'evacuació es considera un edifici com a EGA (Edifici de Gran Alçada) i a partir de quina longitud un túnel es considera CER (Construcció d'Especial Risc)?",
      options: [
        'EGA ≥ 28 m | Túnel ≥ 200 m',
        'EGA ≥ 50 m | Túnel ≥ 400 m',
        'EGA ≥ 30 m | Túnel ≥ 1.000 m',
        'EGA ≥ 100 m | Túnel ≥ 500 m'
      ],
      correctIndex: 1,
      explanation: "A efectes de prevenció operativa (CER/FOER) del manual MAN.SP.000, els llindars són EGA ≥ 50 metres d'alçada i túnels ≥ 400 metres de longitud."
    },
    {
      id: 'q23-6',
      difficulty: 'Fàcil',
      question: "Quines són les 6 exigències bàsiques de seguretat en cas d'incendi (SI 1 a SI 6) en què s'articula el CTE DB-SI segons el capítol 1 de MAN.SP.000?",
      options: [
        "SI 1 Propagació interior, SI 2 Propagació exterior, SI 3 Evacuació d'ocupants, SI 4 Instal·lacions PCI, SI 5 Intervenció dels bombers i SI 6 Resistència al foc de l'estructura.",
        "SI 1 Detecció, SI 2 Alarma, SI 3 Extintors, SI 4 Hidrants, SI 5 Ruixadors i SI 6 Columna seca.",
        "SI 1 Risc baix, SI 2 Risc mitjà, SI 3 Risc alt, SI 4 Industrial, SI 5 Hospitalari i SI 6 Aparcaments.",
        "SI 1 Accessos, SI 2 Façana, SI 3 Escales, SI 4 Mitgeres, SI 5 Fums i SI 6 Simulacres."
      ],
      correctIndex: 0,
      explanation: "Les 6 exigències bàsiques són: SI 1 (Propagació interior), SI 2 (Propagació exterior), SI 3 (Evacuació d'ocupants), SI 4 (Instal·lacions de protecció contra incendis), SI 5 (Intervenció dels bombers) i SI 6 (Resistència al foc de l'estructura)."
    },
    {
      id: 'q23-7',
      difficulty: 'Fàcil',
      question: "En la Versió 2 del manual MAN.SP.000, què designa la nova Classe L del glossari i què indica el codi FOER 'BAD-HOS-00001'?",
      options: [
        "Focs en líquids inflamables; BAD-HOS-00001 indica un edifici comercial de Barcelona.",
        "Focs d'olis en cuines; BAD-HOS-00001 indica la revisió quinquennal d'una columna seca.",
        "Focs en bateries d'ió liti (Li-ion) amb risc d'embalaçament tèrmic; BAD-HOS-00001 identifica la fitxa número 00001 d'un Hospital (HOS) al municipi de Badalona (BAD).",
        "Focs en gasos a pressió; BAD-HOS-00001 identifica una nau industrial sense hidrants."
      ],
      correctIndex: 2,
      explanation: "La Versió 2 incorpora la Classe L per als focs en bateries d'ió liti (amb risc de Thermal Runaway). El codi FOER segueix l'estructura [MUNICIPI 3 lletres]-[TIPUS 3 lletres]-[5 DÍGITS]."
    },
    {
      id: 'q23-8',
      difficulty: 'Mitjà',
      question: "Quina separació màxima pot haver-hi entre l'espai de maniobra per a bombers i la façana accessible en funció de l'alçada de l'edifici, i quines dimensions mínimes han de tenir els buits d'accés en façana?",
      options: [
        "Sempre 30 m independentment de l'alçada; buits de 0,50 × 0,80 m cada 50 m.",
        "≤ 15 m d'alçada → 40 m | 15–20 m → 30 m | > 20 m → 25 m; buits de 1,00 × 1,50 m cada 15 m.",
        "≤ 15 m d'alçada → 18 m | 15–20 m → 23 m | > 20 m → 30 m; buits de 0,60 × 1,00 m cada 30 m.",
        "≤ 15 m d'alçada → màx. 30 m | 15–20 m → màx. 23 m | > 20 m → màx. 18 m; buits mínims de 0,80 × 1,20 m separats ≤ 25 m."
      ],
      correctIndex: 3,
      explanation: "Com més alt és l'edifici, més a prop s'ha de situar l'espai de maniobra: ≤15 m → 30 m, 15-20 m → 23 m, >20 m → 18 m. La façana accessible (≥15% del perímetre) exigeix buits mínims de 0,80 × 1,20 m (ampit ≤1,20 m) cada ≤25 m."
    },
    {
      id: 'q23-9',
      difficulty: 'Mitjà',
      question: "En la classificació de productes de construcció (Reglament UE 2024/3110), a quina antiga classe equival l'euroclasse de reacció al foc C-s2,d0 i quin criteri tèrmic defineix la lletra 'I' de resistència al foc?",
      options: [
        "Equival a M4; 'I' és integritat mecànica contra impactes.",
        "Equival a l'antiga classe M1; 'I' és aïllament tèrmic (la cara no exposada no supera un increment mitjà de 140 °C ni 180 °C en cap punt).",
        "Equival a A1 (incombustible total); 'I' és impermeabilitat al fum fred.",
        "Equival a M2; 'I' és capacitat portant d'un pilar sense col·lapsar."
      ],
      correctIndex: 1,
      explanation: "El manual estableix l'equivalència clau C-s2,d0 = antiga classe M1. En resistència al foc (R-E-I), la 'I' indica aïllament tèrmic: increment màxim mitjà de 140 °C i puntual de 180 °C a la cara no exposada."
    },
    {
      id: 'q23-10',
      difficulty: 'Mitjà',
      question: "Quins requisits d'ubicació, cabal i pressió ha de complir un hidrant d'establiment industrial segons el nou RSCIEI recollit a l'apartat 4.2.3 del manual?",
      options: [
        "Situat a ≤ 40 m de qualsevol accés i separat entre 5 m i 15 m de la façana, amb cabal de 1.500 a 3.000 L/min i pressió mínima de 5 bar durant 60–90 min.",
        "Situat a ≤ 100 m de l'accés i enganxat a la façana (0–2 m), amb cabal de 500 L/min a 1 bar.",
        "Situat a > 50 m de l'edifici, amb cabal de 1.000 L/min i pressió d'1 bar durant 2 hores.",
        "No necessita pressió mínima perquè sempre s'hi connecta una bomba aspirant."
      ],
      correctIndex: 0,
      explanation: "A diferència de l'hidrant públic SP-120 (1.000 L/min a 1 bar), l'hidrant industrial ha d'estar a ≤ 40 m de l'accés, separat 5–15 m de la façana, i garantir 1.500–3.000 L/min a 5 bar durant 60-90 minuts."
    },
    {
      id: 'q23-11',
      difficulty: 'Difícil',
      question: "En un grup d'abastament d'aigua PCI dissenyat segons la norma UNE 23500 (apartat 4.2.5), com funcionen l'arrencada i l'aturada de la bomba principal (elèctrica o dièsel) en comparació amb la bomba Jockey?",
      options: [
        "Tant la bomba Jockey com la bomba principal arrenquen i s'aturen automàticament quan es recupera la pressió.",
        "La bomba principal només arrenca manualment i s'atura sola quan s'esgota el dipòsit.",
        "La bomba Jockey té arrencada i aturada automàtiques, mentre que la bomba principal té arrencada automàtica per caiguda de pressió i aturada EXCLUSIVAMENT manual al quadre de la sala de bombes.",
        "Cap de les dues bombes té arrencada automàtica."
      ],
      correctIndex: 2,
      explanation: "Dada crítica UNE 23500: la bomba Jockey manté la pressió de repòs amb arrencada i aturada automàtiques, però la bomba principal arrenca automàticament en caure la pressió i només es pot aturar de manera manual a la sala de bombes."
    },
    {
      id: 'q23-12',
      difficulty: 'Difícil',
      question: "Quina resistència al foc mínima s'exigeix a una paret mitgera entre dos edificis o establiments i quines dimensions ha de tenir la franja resistent a la trobada amb la coberta o façana?",
      options: [
        "Mitgera EI 30 i franja de 0,30 m d'amplada EI 15.",
        "Mitgera EI 60 i franja de 0,50 m d'amplada EI 30 sense cap alternativa.",
        "Mitgera R 90 i franja de 2 metres de grava sense resistència al foc.",
        "Mitgera mínim EI 120 i franja d'amplada ≥ 1 metre amb resistència EI t/2 (mínim EI 60), o bé que la mitgera sobresurti 0,60 m sobre la coberta."
      ],
      correctIndex: 3,
      explanation: "La paret mitgera requereix un mínim d'EI 120 (fins a EI 180/240 en risc alt industrial) i a la seva trobada amb coberta o façana cal una franja ≥ 1 m d'amplada de resistència EI t/2 (mínim EI 60), o sobresortir 0,60 m per sobre de la coberta."
    },
    {
      id: 'q23-13',
      difficulty: 'Mitjà',
      question: "En les Boques d'Incendi Equipades (BIE) regulades per la norma UNE-EN 671, què expressa el factor K (o coeficient de descàrrega) del broquet?",
      options: [
        "La relació entre el cabal subministrat i l'arrel quadrada de la pressió dinàmica disponible (Q = K · √P).",
        "La longitud màxima de la mànega en metres segons el tipus semirígid o pla.",
        "La pressió màxima de trencament del manòmetre abans de la prova hidrostàtica.",
        "El temps mínim d'autonomia del dipòsit de reserva d'aigua PCI."
      ],
      correctIndex: 0,
      explanation: "El factor K caracteritza la geometria de sortida de la llança/broquet de la BIE i relaciona cabal i pressió mitjançant la fórmula Q = K · √P (per exemple, K ≥ 42 en BIE de 25 mm)."
    },
    {
      id: 'q23-14',
      difficulty: 'Fàcil',
      question: "Segons el CTE DB-SI i el RIPCI, quina és l'eficàcia mínima exigida per a un extintor portàtil estàndard de 6 kg de pols ABC en edificis d'ús general?",
      options: [
        "13A - 55B.",
        "21A - 113B - C.",
        "34A - 233B - F.",
        "8A - 34B."
      ],
      correctIndex: 1,
      explanation: "El CTE DB-SI fixa com a estàndard general en edificació extintors portàtils d'eficàcia mínima 21A - 113B (i classe C si és pols polivalent ABC), corresponents habitualment als de 6 kg."
    },
    {
      id: 'q23-15',
      difficulty: 'Difícil',
      question: "En una instal·lació de columna seca amb tram descendent (per exemple, cap a plantes sota rasant), com es disposen les vàlvules i les claus de seccionament segons el RIPCI?",
      options: [
        "Només té presa d'alimentació a l'interior del soterrani i cap sortida a les plantes.",
        "Disposa de boca de sortida amb vàlvula a cada planta i una clau de seccionament situada a la part inferior (a peu de baixant / connexió de façana).",
        "No admet claus de seccionament perquè funciona sempre amb pressió permanent d'aigua.",
        "Les boques de sortida són exclusivament de 70 mm amb acoblament Storz."
      ],
      correctIndex: 1,
      explanation: "En una columna seca descendent (a diferència de l'ascendent estàndard amb preses a plantes parells fins a la 8a), es disposa de vàlvula de sortida siamesa a cada planta i clau de seccionament a baix per aïllar i purgar el tram."
    },
    {
      id: 'q23-16',
      difficulty: 'Mitjà',
      question: "Quina és la funció i el règim de funcionament de la bomba auxiliar o bomba Jockey en un grup de pressió contra incendis?",
      options: [
        "Subministrar tot el cabal nominal als ruixadors durant un incendi real; té arrencada manual i aturada automàtica.",
        "Mantenir la pressió de repòs de la xarxa compensant petites pèrdues o fuites, amb arrencada i aturada automàtiques per pressòstat.",
        "Buidar el dipòsit d'aigua després d'un servei d'extinció; només funciona amb motor dièsel.",
        "Substituir la bomba principal quan falla el subministrament elèctric durant 60 minuts."
      ],
      correctIndex: 1,
      explanation: "La bomba Jockey és una bomba auxiliar de petit cabal que evita arrencades innecessàries de la bomba principal davant microfuites; arrenca i s'atura de forma totalment automàtica."
    },
    {
      id: 'q23-17',
      difficulty: 'Difícil',
      question: "Respecte a la classificació europea de reacció al foc dels materials de construcció (Euroclasses, EN 13501-1 i EN 13501-5), quina afirmació és INCORRECTA?",
      options: [
        "La classificació principal (A1, A2, B, C, D, E, F) avalua la contribució del material al desenvolupament del foc.",
        "Els subíndexs addicionals avaluen l'opacitat/producció de fums (s1, s2, s3) i la caiguda de gotes o partícules inflamades (d0, d1, d2).",
        "Les Euroclasses inclouen un paràmetre obligatori específic per quantificar la toxicitat química dels fums emesos (t1, t2, t3).",
        "La classificació Broof(t1) s'utilitza per avaluar el comportament de les cobertes davant d'un foc exterior."
      ],
      correctIndex: 2,
      explanation: "Afirmació incorrecta: les Euroclasses de reacció al foc NO avaluen ni classifiquen la toxicitat dels fums (el subíndex 't1' de Broof(t1) fa referència al mètode d'assaig per a cobertes davant foc exterior, no pas a la toxicitat)."
    },
    {
      id: 'q23-18',
      difficulty: 'Difícil',
      question: "Quina funció compleix la ventilació d'un aparcament durant un incendi segons el CTE DB-SI 3?",
      options: [
        "Crear una capa lliure de fums amb totes les prestacions exigides a un SCTIEF.",
        "Confinar els fums dins la planta incendiada mitjançant barreres resistents al foc.",
        "Garantir una pressurització permanent de totes les vies d'evacuació de l'aparcament.",
        "Fer un escombrat dels fums sense assolir necessàriament tots els objectius d'un SCTIEF."
      ],
      correctIndex: 3,
      explanation: "La ventilació d'extracció d'un aparcament convencional (6 renovacions/hora per ventilació mecànica o obertures) fa un escombrat de fums per facilitar l'evacuació i intervenció, però NO garanteix totes les prestacions ni capa lliure de fums d'un SCTIEF complet."
    }
  ]
};
