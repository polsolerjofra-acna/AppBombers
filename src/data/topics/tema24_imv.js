export const tema24Imv = {
  id: 'tema-29',
  number: 29,
  code: 'MAN.SANI.001',
  title: 'Intervenció Bàsica en Incidents de Múltiples Víctimes (IMV) i Triatge START',
  category: 'Manual Operatiu SGO — Assistència Sanitària i IMV',
  estimatedMinutes: 45,
  importance: {
    title: "Radar d'Examen — Tema 29 (MAN.SANI.001 V.1): IMV, Protocol APCAT i Triatge START",
    frequency: 'Molt Alta (3-4 preguntes fixes sobre llindars APCAT ≥6 / ≥10, algorisme START ≤1 min, 2 maniobres salvadores i filiació)',
    summary:
      "Manual del Protocol APCAT a Catalunya: definició d'IMV i llindars oficials (≥ 6 greus/mortals o ≥ 10 trasllats), triatge bàsic START (≤ 1 min, 2 maniobres salvadores, pols radial i 4 passos), triatge avançat META vs. SALT, Cèl·lula d'Avaluació (Bombers + SEM + Mossos), equivalència de cercles i zonatge, i responsabilitat en la filiació.",
    hotTopics: [
      'Cap. 1: Definició d’IMV (desproporció entre necessitats i recursos) i Llindars oficials del Protocol APCAT: ≥ 6 víctimes greus o mortals, O BÉ ≥ 10 víctimes que requereixen trasllat hospitalari.',
      'Cap. 2: Triatge Bàsic START (Simple Triage And Rapid Treatment): temps màxim ≤ 1 minut per víctima. Les 2 ÚNIQUES maniobres salvadores permeses durant el triatge: 1) Obrir la via aèria (i posar cànula de Guedel o PLS) i 2) Controlar una hemorràgia externa greu (compressió / torniquet).',
      'Cap. 2.4: Algorisme START en 4 passos: 1. Camina? (SÍ = VERD) → 2. Respira? (NO fins i tot obrint via = NEGRE; si arrenca a respirar o FR > 30 rpm = VERMELL) → 3. Perfusió / Pols radial? (NO té pols radial = VERMELL; actualment es prioritza pols radial sobre reompliment capil·lar!) → 4. Estat mental / Ordres simples? (NO obeeix = VERMELL; SÍ obeeix = GROC).',
      'Cap. 3-4: Cèl·lula d’Avaluació inicial (3 representants: 1 Bombers + 1 SEM + 1 Mossos/Policia), Comandament operatiu (Mossos si hi ha il·lícit penal/atemptat; Bombers en la resta), Equivalència de Zonatge (1r Cercle Mossos = Zona Calenta + Tèbia; 2n Cercle Mossos = Zona Freda) i Filiació de víctimes (Il·lesos = Grup d’Ordre/Policia; Ferits Verds/Grocs/Vermells = SEM; Morts/Negres = Grup d’Ordre/Mossos).'
    ],
    traps: [
      'Fer RCP (compressions toràciques) durant el triatge START: en un IMV NO s’inicia RCP durant el triatge bàsic! Si després d’obrir la via aèria la víctima segueix sense respirar, es classifica com a NEGRE (Prioritat 4) i es passa a la següent víctima!',
      'Si una víctima NO respira espontàniament però en obrir-li la via aèria (front-mentó / Guedel) COMENÇA A RESPIRAR, quin color se li assigna? VERMELL (Prioritat 1 immediata), sense mirar cap altre pas!',
      'En cas de dubte entre dues categories de color durant el triatge, la regla oficial del manual és assignar sempre el color de PRIORITAT SUPERIOR (el més greu)!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1 IMV i Llindars APCAT',
      title: '1. Definició d’Incident de Múltiples Víctimes (IMV) i Llindars Oficials APCAT',
      subtitle: 'Desproporció de recursos, criteris numèrics a Catalunya (≥ 6 greus/mortals o ≥ 10 trasllats) i exemples històrics.',
      blocks: [
        {
          type: 'text',
          heading: '1.1–1.2. Què és un IMV i Quins són els Llindars Oficials del Protocol APCAT?',
          paragraphs: [
            "Un Incident de Múltiples Víctimes (IMV) és qualsevol emergència sanitària col·lectiva produïda en un entorn geogràfic limitat on hi ha una DESPROPORCIÓ inicial entre el volum i la gravetat de les víctimes i els recursos assistencials immediatament disponibles, obligant a passar d'una medicina individual a una medicina de catàstrofes basada en el triatge (salvar el màxim nombre de vides possible).",
            "A Catalunya, el Protocol d'Actuació en Emergències amb Múltiples Víctimes (APCAT) estableix dos llindars objectius: es considera IMV qualsevol incident on es prevegi l'existència de: 1) 6 O MÉS VÍCTIMES GREUS O MORTALS (≥ 6 greus/mortals), O BÉ 2) 10 O MÉS VÍCTIMES QUE REQUEREIXIN TRASLLAT HOSPITALARI (≥ 10 trasllats).",
            "El manual MAN.SANI.001 cita exemples reals rellevants: l'accident d'autocar amb 55 ocupants a la C-32 a Pineda de Mar (juliol de 2024), l'atemptat de la Rambla de Barcelona (2017), les riuades del riu Francolí (2019), l'incendi de la nau ocupada de Badalona (2020) o el cas del Madrid Arena (2012)."
          ]
        },
        {
          type: 'diagram',
          title: 'Algoritme de Triatge START (RPM: Respiració, Perfusió, Mental)',
          diagramType: 'start_triage_algorithm',
          caption:
            'Flux de decisió ràpida (< 60 segons per víctima) per assignar targeta Verda, Negra, Vermella o Groga en un IMV.'
        },
        {
          type: 'table',
          title: 'Criteris Oficials d’Activació del Protocol APCAT per a IMV (MAN.SANI.001 Cap. 1)',
          subtitle: 'Els dos llindars numèrics que has de memoritzar',
          headers: ['Criteri APCAT', 'Llindar Numèric Exacte', 'Condició d’Activació'],
          rows: [
            ['Criteri A (Gravetat / Mortalitat)', '≥ 6 víctimes greus o mortals', 'N’hi ha prou que es compleixi UN dels dos criteris (A o B)'],
            ['Criteri B (Volum d’evacuació)', '≥ 10 víctimes que requereixen trasllat hospitalari', 'Encara que siguin menys greus, si ≥ 10 necessiten hospital és IMV']
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 2 Triatge START',
      title: '2. El Triatge Bàsic START (≤ 1 min): Maniobres Salvadores i Algorisme en 4 Passos',
      subtitle: 'Les 2 úniques maniobres permeses, codi de 4 colors i priorització del pols radial.',
      blocks: [
        {
          type: 'text',
          heading: '2.1–2.4. Principis del Triatge Bàsic START (≤ 1 min) i les 2 Maniobres Salvadores',
          paragraphs: [
            "El triatge és un procés dinàmic, continu i ràpid de classificació segons gravetat i probabilitat de supervivència. A Catalunya, el 1r triatge a la zona d'impacte (fet per Bombers o primers intervinents) usa el mètode funcional START (Simple Triage And Rapid Treatment).",
            "El temps màxim per triar cada víctima amb START és d'1 MINUT (≤ 60 s, idealment 30 s). En cas de dubte entre dos colors, s'assigna sempre el de PRIORITAT SUPERIOR (el més greu)!",
            "Només estan permeses 2 ÚNIQUES MANIOBRES SALVADORES abans de passar a la víctima següent: 1) Obrir la via aèria (front-mentó o tracció mandibular, amb cànula de Guedel o PLS) i 2) Controlar una hemorràgia externa exsanguinant (compressió o torniquet). No es fa RCP!"
          ]
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! START vs. META vs. SALT (i CareFlight / TSI-RTS)',
          paragraphs: [
            "• START (1r Triatge Bàsic): Realitzat a la zona d'impacte per primers intervinents (≤ 1 min) basat en paràmetres funcionals (caminar, respiració, pols radial, ordres).",
            "• META (Model Extrahospitalari de Triatge Avançat): 2n triatge mèdic avançat realitzat pel SEM a l'Àrea Sanitària (Zona Freda) per prioritzar estabilització i evacuació hospitalària.",
            "• SALT (Sort, Assess, Lifesaving Interventions, Treatment/Transport): Mètode mixt nord-americà que ordena primer per moviments globals abans de valorar individualment. CareFlight és ultraràpid (15 s, sense comptar rpm) i TSI/RTS són índexs hospitalaris anatòmics/fisiològics."
          ]
        },
        {
          type: 'diagram',
          title: 'Algorisme Visual Complet del Mètode de Triatge Bàsic START (≤ 1 minut)',
          diagramType: 'triage_start',
          caption:
            'Segueix els 4 passos en ordre: 1. Camina? (SÍ → VERD) · 2. Respira? (NO després d’obrir via → NEGRE; SÍ arran d’obrir via o FR > 30 rpm → VERMELL) · 3. Pols radial? (NO → VERMELL) · 4. Obeeix ordres simples? (NO → VERMELL; SÍ → GROC).'
        },
        {
          type: 'table',
          title: 'Les 4 Categories de Prioritat i Color del Triatge START (MAN.SANI.001 Cap. 2)',
          subtitle: 'Color, prioritat, criteri fisiològic i destí',
          headers: ['Color i Prioritat', 'Categoria Clínica', 'Criteris START que donen aquest Color', 'Actuació Operativa'],
          rows: [
            ['VERMELL (Prioritat 1)', 'Urgència Immediata / Crítica', '• Comença a respirar en obrir via aèria\n• Freqüència Respiratòria (FR) > 30 rpm\n• Absència de POLS RADIAL (o reompliment > 2 s)\n• NO obeeix ordres simples (estat mental alterat)', 'Evacuació i estabilització prioritària número 1 al Punt mèdic avançat'],
            ['GROC (Prioritat 2)', 'Urgència Grave / Demorable', '• NO pot caminar per si sola, PERÒ:\n• Respira a ≤ 30 rpm + TÉ pols radial + SÍ obeeix ordres simples', 'Pot esperar assistència i evacuació un cop atesos els Vermells'],
            ['VERD (Prioritat 3)', 'Lleu / Deambulant', '• VÍCTIMA QUE POT CAMINAR per si mateixa al pas 1 de l’algorisme', 'S’agrupen fora de la zona calenta per a reavaluació i filiació'],
            ['NEGRE (Prioritat 4)', 'Exitus (Mort) o Expectant sense possibilitat', '• NO RESPIRA fins i tot després d’haver-li obert manualment la via aèria', 'No es mou ni es fa RCP en IMV; custòdia per a Policia Judicial']
          ],
          footnote: 'Nota clau del manual MAN.SANI.001 (pàg. 9): Tot i que el mètode START clàssic valorava el reompliment capil·lar (> 2 s), actualment a Bombers es prioritza la palpació del POLS RADIAL perquè en ambients freds, foscos o amb fum el reompliment capil·lar a les ungles és poc fiable!'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 3-4 APCAT, Zonatge i Filiació',
      title: '3–4. Organització Operativa APCAT: Cèl·lula d’Avaluació, Zonatge i Filiació',
      subtitle: 'Els 3 membres de la Cèl·lula d’Avaluació, equivalència entre Cercles de Mossos i Zones de Bombers, i qui filia.',
      blocks: [
        {
          type: 'text',
          heading: '3.2–3.3. Cèl·lula d’Avaluació (3 Membres) i Comandament Operatiu',
          paragraphs: [
            "En activar-se un IMV sota el Protocol APCAT, el primer pas in situ és constituir la CÈL·LULA D'AVALUACIÓ inicial, formada per 3 representants: 1 comandament de Bombers + 1 comandament del SEM + 1 comandament dels Mossos d'Esquadra (o Policia).",
            "El Comandament Operatiu global correspon als Mossos d'Esquadra sempre que hi hagi sospita d'il·lícit penal, atemptat o ordre públic, i als Bombers en tota la resta d'escenaris (accidents de trànsit, ferroviaris, incendis, col·lapses o riscos naturals)."
          ]
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! Equivalència de Zonatge (Cercles de Mossos vs. Zones de Bombers)',
          paragraphs: [
            "• 1r CERCLE DE SEGURETAT (Mossos) = ZONA CALENTA + ZONA TÈBIA (Bombers): Àrea d'intervenció directa on es fa el rescat, el triatge bàsic START i la 1a noria de rescat.",
            "• 2n CERCLE DE SEGURETAT (Mossos) = ZONA FREDA (Bombers): Àrea segura on s'instal·len l'Àrea Sanitària / CMA del SEM (triatge avançat META), el CCA i les nories d'ambulàncies."
          ]
        },
        {
          type: 'table',
          title: '3.8. Taula Oficial de Responsabilitat en la Filiació de Víctimes (MAN.SANI.001 pàg. 20)',
          subtitle: 'Qui registra i identifica cada grup d’afectats en un IMV? (Pregunta segura d’examen!)',
          headers: ['Grup de Víctimes / Afectats', 'Cos Responsable de la Filiació', 'Ubicació i Detall Operatiu'],
          rows: [
            ['1. Persones IL·LESES (no ateses pel SEM)', 'Grup d’Ordre (Mossos d’Esquadra / Policia)', 'Es reuneixen en un espai segur fora de la zona d’intervenció i la Policia en pren les dades'],
            ['2. Ferits VERDS, GROCS i VERMELLS', 'Grup Sanitari (SEM)', 'El SEM realitza l’assistència, el registre sanitari i l’assignació d’hospital de destí'],
            ['3. Víctimes MORTALS (NEGRES)', 'Grup d’Ordre (Mossos d’Esquadra / Policia Judicial i Forenses)', 'Recompta, custodia i identifica els cossos sense moure’ls tret que hi hagi perill imminent']
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Mode Nen Petit i Trucs',
      title: 'Síntesi Visual i Trucs Mnemotècnics: El Mètode START i les Nories d’Evacuació',
      subtitle: 'Com resoldre qualsevol cas clínic de triatge START a l’examen en 5 segons.',
      blocks: [
        {
          type: 'easy',
          title: 'Mode Nen Petit: La Regla del "30 – Pols – Ordres" per no fallar cap cas clínic START!',
          metaphor:
            'Pensa en el triatge START com un filtre de 4 portes on tothom que falla una prova rep targeta VERMELLA:',
          explanation:
            "• Porta 1 (Cames): Camina? → SÍ = VERD. Si no camina, passa a la Porta 2.\n• Porta 2 (Pulmons): Respira? Si NO, obres via aèria: segueix sense respirar = NEGRE; arrenca = VERMELL! Si respira > 30 rpm = VERMELL; ≤ 30 rpm passa a la Porta 3.\n• Porta 3 (Canell): Té pols radial? → NO = VERMELL. Si en té, passa a la Porta 4.\n• Porta 4 (Cervell): Obeeix ordres simples? → NO = VERMELL; SÍ = GROC!",
          takeaway: 'Per ser GROC no pot caminar però ha d’aprovar les 3 proves: Respira ≤ 30 rpm + TÉ pols radial + OBEEIX ordres simples!'
        },
        {
          type: 'mnemonic',
          title: 'Truc Mnemotècnic: "6 Greus o 10 Trasllats (APCAT)" i "Il·lesos i Morts = Policia / Ferits = SEM"',
          trick:
            '• Llindars APCAT: "6 Greus/Morts o 10 a l’Hospital".\n• Filiació (Taula pàg. 20): Pensa qui passa per mans dels metges del SEM: només els FERITS amb targeta de color viu (Verds, Grocs i Vermells) són filiats pel SEM! Tant els extrems que no reben tractament mèdic d’urgència —els IL·LESOS i els MORTS (Negres)— els filia el Grup d’Ordre (Mossos/Policia)!',
          example:
            'Cas clínic d’examen: En un accident d’autocar trobes un passatger amb fractura oberta de fèmur que no pot caminar, respira a 24 rpm, té pols radial fort i et respon correctament com es diu i què ha passat. Quin color START li poses? GROC (Prioritat 2), perquè tot i la fractura aparatosa compleix FR ≤ 30 rpm, té pols radial i obeeix ordres simples!'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · Resum 1/2',
      title: 'Resum Imprescindible d’Examen (1/2) — Definició d’IMV, Llindars APCAT i Triatge START',
      subtitle: 'Síntesi d’alta densitat dels Capítols 1 i 2 del manual MAN.SANI.001.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 1: Llindars APCAT i Algorisme START',
          subtitle: 'Totes les xifres i passos dels Capítols 1 i 2',
          headers: ['Concepte', 'Dada Oficial Exacta', 'Detall Crític d’Examen'],
          rows: [
            ['Llindars IMV (Protocol APCAT)', '≥ 6 víctimes greus o mortals, O BÉ ≥ 10 amb trasllat hospitalari', 'Desproporció inicial entre necessitats sanitàries i recursos disponibles'],
            ['Temps Màxim Triatge START', '≤ 1 minut per víctima (30 a 60 segons)', 'En cas de dubte entre dos colors, s’assigna sempre el de PRIORITAT SUPERIOR'],
            ['2 Maniobres Salvadores START', '1. Obrir via aèria (Guedel / PLS) · 2. Controlar hemorràgia greu (torniquet)', 'NO es fa RCP durant el triatge bàsic START en un IMV!'],
            ['Pas 1 i Pas 2 START', '1. Camina? SÍ = VERD · 2. Respira? NO (obrint via) = NEGRE | > 30 rpm = VERMELL', 'Si NO respirava però en obrir-li la via aèria arrenca a respirar = VERMELL!'],
            ['Pas 3 i Pas 4 START', '3. Pols radial? NO = VERMELL · 4. Ordres simples? NO = VERMELL | SÍ = GROC', 'Actualment es prioritza el POLS RADIAL per sobre del reompliment capil·lar (> 2 s)'],
            ['Altres Mètodes de Triatge', 'META (avançat SEM) · CareFlight (funcional ràpid) · TSI/RTS (lesions) · SALT (mixt)', 'El 1r triatge és a la zona d’impacte i el 2n triatge (META) a l’Àrea Sanitària']
          ]
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · Resum 2/2',
      title: 'Resum Imprescindible d’Examen (2/2) — Cèl·lula d’Avaluació, Zonatge i Filiació',
      subtitle: 'Síntesi d’alta densitat dels Capítols 3 i 4 del manual MAN.SANI.001.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 2: Organització Operativa, Cercles de Seguretat i Filiació',
          subtitle: 'Coordinació intercosos en un IMV a Catalunya',
          headers: ['Àmbit Operatiu', 'Regla Oficial del Manual MAN.SANI.001', 'Observació Clau'],
          rows: [
            ['Cèl·lula d’Avaluació Inicial', '3 representants: 1 Bombers + 1 SEM + 1 Mossos d’Esquadra / Policia', 'Realitza la primera valoració conjunta i ubica les àrees i corredors'],
            ['Comandament de l’Incident', 'Mossos d’Esquadra si hi ha il·lícit penal / atemptat · Bombers en la resta', 'Tots els cossos s’integren al Centre de Comandament Avançat (CCA)'],
            ['1r Cercle de Seguretat (Mossos)', 'Equival a Zona Calenta + Zona Tèbia de Bombers', 'Accés exclusiu per als equips d’intervenció, rescat i 1a noria'],
            ['2n Cercle de Seguretat (Mossos)', 'Equival a la Zona Freda de Bombers', 'S’hi ubiquen l’Àrea Sanitària (CMA del SEM), el CCA i les ambulàncies'],
            ['Filiació d’Il·lesos i Morts', 'Grup d’Ordre (Mossos d’Esquadra / Policia Judicial)', 'Els cossos negres no es mouen tret de perill imminent'],
            ['Filiació de Ferits (Verds/Grocs/Vermells)', 'Grup Sanitari (SEM)', 'Control d’assistència i noria d’evacuació cap als hospitals']
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't29-q1',
      difficulty: 'Fàcil',
      question: 'Segons el Protocol APCAT recollit al Capítol 1 del manual MAN.SANI.001, a partir de quins llindars numèrics de víctimes es considera oficialment un Incident de Múltiples Víctimes (IMV) a Catalunya?',
      options: [
        'A partir de ≥ 3 víctimes greus o ≥ 5 lleus.',
        'A partir de ≥ 6 víctimes greus o mortals, O BÉ ≥ 10 víctimes que requereixen trasllat hospitalari.',
        'Només a partir de ≥ 25 víctimes mortals.',
        'A partir de ≥ 15 víctimes greus i ≥ 50 lleus.'
      ],
      correctIndex: 1,
      explanation: 'Els dos llindars oficials del Protocol APCAT són: 6 o més víctimes greus o mortals, o bé 10 o més víctimes que requereixin trasllat a un centre hospitalari.'
    },
    {
      id: 't29-q2',
      difficulty: 'Fàcil',
      question: 'Quin és el temps màxim per classificar una víctima amb el mètode de triatge bàsic START i quines són les 2 ÚNIQUES maniobres salvadores permeses durant aquest triatge?',
      options: [
        'Màxim 5 minuts; permet fer RCP completa i intubació.',
        'Màxim ≤ 1 minut per víctima; les 2 úniques maniobres permeses són: 1) Obrir la via aèria (i posar cànula de Guedel o PLS) i 2) Controlar una hemorràgia externa greu (compressió / torniquet).',
        'Màxim 10 segons; no es pot tocar la víctima en cap cas.',
        'Màxim 3 minuts; permet immobilitzar fractures amb fèrules.'
      ],
      correctIndex: 1,
      explanation: 'El triatge START ha de durar com a màxim 1 minut per víctima i només admet dues maniobres salvadores immediates: obertura de via aèria (Guedel/PLS) i control d’hemorràgies exsanguinants (torniquet/compressió).'
    },
    {
      id: 't29-q3',
      difficulty: 'Mitjà',
      question: 'Durant el triatge START trobem una víctima inconscient que NO camina i NO respira. Li obrim manualment la via aèria (maniobra front-mentó) i comença a respirar a 18 rpm. Quin color se li ha d’assignar?',
      options: [
        'Color NEGRE, perquè inicialment no respirava.',
        'Color GROC, perquè ara respira a menys de 30 rpm.',
        'Color VERMELL (Prioritat 1 immediata), perquè ha necessitat maniobra d’obertura de via aèria per respirar.',
        'Color VERD.'
      ],
      correctIndex: 2,
      explanation: 'A l’algorisme START, si una víctima no respirava i arrenca a respirar després d’obrir-li la via aèria, es classifica directament com a VERMELL (Prioritat 1), deixant-la amb cànula de Guedel o en PLS.'
    },
    {
      id: 't29-q4',
      difficulty: 'Mitjà',
      question: 'En el pas 3 del mètode START (valoració de la perfusió / circulació), quin paràmetre prioritza actualment el manual MAN.SANI.001 de Bombers per sobre del reompliment capil·lar?',
      options: [
        'La presa de tensió arterial amb esfigmomanòmetre.',
        'La presència o absència de POLS RADIAL (ja que el reompliment capil·lar és poc fiable amb fred o poca llum; si NO té pols radial → VERMELL).',
        'La temperatura del front.',
        'El color de les pupil·les.'
      ],
      correctIndex: 1,
      explanation: 'El manual destaca que actualment es prioritza palpar el pols radial al canell: si no hi ha pols radial (hipotensió greu), la víctima és VERMELLA.'
    },
    {
      id: 't29-q5',
      difficulty: 'Mitjà',
      question: 'Segons la taula de la pàgina 20 del manual MAN.SANI.001, qui és el responsable de realitzar la FILIACIÓ de les persones IL·LESES, dels FERITS (Verds, Grocs i Vermells) i de les víctimes MORTALS (Negres)?',
      options: [
        'El SEM filia totes les persones, inclosos els il·lesos i els morts.',
        'Els Bombers filien els il·lesos i el SEM els ferits i morts.',
        'Il·lesos: Grup d’Ordre (Policia/Mossos) | Ferits (Verds, Grocs i Vermells): SEM | Morts (Negres): Grup d’Ordre (Mossos / Policia Judicial).',
        'Protecció Civil filia els ferits vermells i la Policia Local els verds.'
      ],
      correctIndex: 2,
      explanation: 'Taula 3.8 (pàg. 20): el Grup d’Ordre (Mossos/Policia) filia tant els il·lesos no atesos pel SEM com els morts (Negres), mentre que el SEM filia tots els ferits (Verds, Grocs i Vermells).'
    },
    {
      id: 't29-q6',
      difficulty: 'Mitjà',
      question: 'Quina és l’equivalència exacta entre el Primer i Segon Cercle de Seguretat dels Mossos d’Esquadra i la zonificació operativa dels Bombers en un IMV (Cap. 3.4)?',
      options: [
        '1r Cercle Mossos = només Zona Calenta | 2n Cercle Mossos = Zona Tèbia.',
        '1r Cercle de Seguretat (Mossos) = Zona Calenta + Zona Tèbia (Bombers) | 2n Cercle de Seguretat (Mossos) = Zona Freda (Bombers).',
        '1r Cercle Mossos = Zona Freda | 2n Cercle Mossos = Zona Calenta.',
        'No hi ha cap equivalència entre tots dos cossos.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 3.4 del manual: el Primer Cercle de Seguretat policial abraça la Zona Calenta i la Zona Tèbia de Bombers, i el Segon Cercle correspon a la Zona Freda.'
    },
    {
      id: 't29-q7',
      difficulty: 'Fàcil',
      question: 'Per quants representants i de quins cossos està formada la Cèl·lula d’Avaluació inicial en un IMV?',
      options: [
        'Per 2 representants: l’alcalde i el cap de Bombers.',
        'Per 3 representants: 1 comandament de Bombers + 1 comandament del SEM + 1 comandament dels Mossos d’Esquadra (o Policia).',
        'Per 5 metges del SEM.',
        'Per 4 bombers del GRAE.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 3.2 del manual: la Cèl·lula d’Avaluació inicial la formen 3 membres (1 Bombers, 1 SEM i 1 Mossos/Policia).'
    },
    {
      id: 't29-q8',
      difficulty: 'Mitjà',
      question: 'Una víctima d’una explosió no pot caminar per una fractura al turmell, respira a 22 rpm, té pols radial present i obeeix ordres simples amb claredat. Quina targeta START li correspon?',
      options: [
        'VERDA.',
        'GROGA (Prioritat 2, urgència demorable).',
        'VERMELLA (Prioritat 1).',
        'NEGRA.'
      ],
      correctIndex: 1,
      explanation: 'Com que no pot caminar però supera els passos de respiració (≤ 30 rpm), perfusió (té pols radial) i estat mental (obeeix ordres simples), es classifica com a GROC.'
    },
    {
      id: 't29-q9',
      difficulty: 'Fàcil',
      question: 'En un IMV, en quin cas el Comandament Operatiu global de l’incident recau en els Mossos d’Esquadra en lloc dels Bombers?',
      options: [
        'En tots els accidents de trànsit a les autopistes.',
        'Sempre que hi hagi sospita d’il·lícit penal, atemptat terrorista o alteració greu de l’ordre públic (en la resta d’escenaris el comandament operatiu és de Bombers).',
        'Quan hi ha més de 10 ferits lleus.',
        'Mai, sempre manen els Bombers.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 3.3 del manual: Mossos d’Esquadra assumeix el comandament operatiu quan hi ha indicis d’il·lícit penal o atemptat; Bombers l’assumeix en tota la resta de sinistres.'
    },
    {
      id: 't29-q10',
      difficulty: 'Fàcil',
      question: 'Durant el triatge START d’un IMV, quin color s’ha d’assignar a una víctima si el rescatador té dubtes raonables entre dues categories de color (per exemple, entre Groc i Vermell)?',
      options: [
        'Sempre el color de menys gravetat per no saturar les ambulàncies.',
        'Sempre el color de PRIORITAT SUPERIOR (el més greu, en aquest cas Vermell).',
        'Es deixa sense targeta fins que arribi un helicòpter.',
        'Se li posen totes dues targetes alhora.'
      ],
      correctIndex: 1,
      explanation: 'Regla general del Capítol 2 del manual MAN.SANI.001: davant del dubte entre dues categories de triatge, s’assigna sempre la de prioritat superior (més greu).'
    },
    {
      id: 't29-q11',
      difficulty: 'Mitjà',
      question: 'Quina diferència operativa distingeix el mètode START, el mètode META i el mètode SALT descrits al manual MAN.SANI.001?',
      options: [
        'START és el triatge mèdic hospitalari; META és el 1r triatge que fan els bombers a la zona calenta; SALT és un índex de lesions anatòmiques exclusiu d’UCI.',
        'START és el 1r triatge bàsic funcional a la zona d’impacte (≤ 1 min); META és el 2n triatge mèdic avançat realitzat pel SEM a l’Àrea Sanitària; SALT és un mètode mixt nord-americà (Sort, Assess, Lifesaving Interventions, Treatment/Transport).',
        'Tots tres mètodes són idèntics i només canvien d’idioma segons la comarca.',
        'META i SALT prohibeixen el control d’hemorràgies i obliguen a fer RCP a totes les víctimes negres.'
      ],
      correctIndex: 1,
      explanation: 'START s’aplica en el 1r triatge bàsic (≤ 1 min); META (Model Extrahospitalari de Triatge Avançat) és el 2n triatge sanitari del SEM a l’Àrea Sanitària; i SALT és un mètode mixt nord-americà citat al manual juntament amb CareFlight i TSI/RTS.'
    },
    {
      id: 't29-q12',
      difficulty: 'Mitjà',
      question: 'En un sinistre ferroviari amb múltiples víctimes, trobes un passatger que no pot caminar per dolor lumbar, respira espontàniament a 34 rpm, té pols radial fort i respon coherentment al seu nom. Quin color START li correspon?',
      options: [
        'VERD, perquè parla amb coherència.',
        'GROC, perquè té pols radial i obeeix ordres simples.',
        'VERMELL (Prioritat 1), perquè presenta una freqüència respiratòria superior a 30 rpm (> 30 rpm) al pas 2 de l’algorisme.',
        'NEGRE, perquè supera les 30 respiracions per minut.'
      ],
      correctIndex: 2,
      explanation: 'En l’algorisme START, una freqüència respiratòria > 30 rpm classifica la víctima immediatament com a VERMELLA (Prioritat 1), sense esperar a comprovar el pols ni l’estat mental.'
    },
    {
      id: 't29-q13',
      difficulty: 'Mitjà',
      question: 'Durant el triatge START d’un accident d’autocar, una víctima que no pot caminar respira a 22 rpm, però en palpar-li el canell NO detectes pols radial. Quin color se li ha d’assignar?',
      options: [
        'GROC, perquè respira a menys de 30 rpm.',
        'VERMELL (Prioritat 1), perquè l’absència de pols radial indica hipoperfusió / xoc greu al pas 3.',
        'NEGRE, perquè sense pols radial es considera morta.',
        'VERD, si encara mou les mans.'
      ],
      correctIndex: 1,
      explanation: 'Al pas 3 del mètode START (prioritzant el pols radial sobre el reompliment capil·lar), l’absència de pols radial classifica la víctima directament com a VERMELLA.'
    },
    {
      id: 't29-q14',
      difficulty: 'Mitjà',
      question: 'Una víctima d’una explosió industrial no camina, respira a 20 rpm i té pols radial palpable, però NO obeeix ordres simples quan li demanes que t’estrengui la mà. Quina targeta START li correspon?',
      options: [
        'GROGA, perquè totes les constants cardiorespiratòries són normals.',
        'VERDA, perquè està respirant per si sola.',
        'VERMELLA (Prioritat 1), perquè presenta alteració neurològica en no obeir ordres simples al pas 4.',
        'NEGRA, perquè té alteració del nivell de consciència.'
      ],
      correctIndex: 2,
      explanation: 'Al pas 4 del mètode START (estat mental), si la víctima no obeeix ordres simples tot i respirar a ≤ 30 rpm i tenir pols radial, es classifica com a VERMELLA (Prioritat 1).'
    },
    {
      id: 't29-q15',
      difficulty: 'Difícil',
      question: 'Respecte a les regles operatives del triatge bàsic START en un IMV (MAN.SANI.001), assenyala quina afirmació és INCORRECTA:',
      options: [
        'Les dues úniques maniobres salvadores permeses durant el triatge START són obrir la via aèria (amb Guedel o PLS) i controlar hemorràgies externes greus (compressió / torniquet).',
        'El temps màxim per classificar cada víctima no ha de superar 1 minut.',
        'Si una víctima no respira ni tan sols després d’obrir-li manualment la via aèria, cal iniciar compressions toràciques de RCP durant 5 cicles abans de passar a la següent.',
        'En cas de dubte entre dues categories de color, cal assignar sempre la de prioritat superior (més greu).'
      ],
      correctIndex: 2,
      explanation: 'És incorrecte: en un IMV NO s’inicia RCP durant el triatge bàsic START. Si després d’obrir la via aèria la víctima segueix sense respirar, se li assigna targeta NEGRA i es passa immediatament a la víctima següent.'
    },
    {
      id: 't29-q16',
      difficulty: 'Difícil',
      question: 'Sobre l’organització intercosos i la filiació de víctimes segons el Protocol APCAT (MAN.SANI.001), assenyala quina afirmació és INCORRECTA:',
      options: [
        'La Cèl·lula d’Avaluació inicial està integrada per 3 representants: 1 de Bombers, 1 del SEM i 1 dels Mossos d’Esquadra (o Policia).',
        'El Grup Sanitari (SEM) s’encarrega de la filiació de tots els ferits classificats com a Verds, Grocs i Vermells.',
        'El Grup d’Ordre (Mossos/Policia) és responsable de la filiació tant de les persones il·leses no ateses pel SEM com de les víctimes mortals (Negres).',
        'En un accident ferroviari accidental sense indicis d’il·lícit penal, el Comandament Operatiu global de l’incident correspon als Mossos d’Esquadra i els Bombers filien les víctimes mortals.'
      ],
      correctIndex: 3,
      explanation: 'És incorrecte: sense sospita d’il·lícit penal, atemptat o ordre públic, el Comandament Operatiu correspon als BOMBERS (no a Mossos), i la filiació dels morts (Negres) correspon al Grup d’Ordre (Mossos / Policia Judicial), mai a Bombers.'
    },
    {
      id: 't29-q17',
      difficulty: 'Mitjà',
      question: 'En un xoc múltiple a l’autopista es comptabilitzen 2 ferits greus, cap víctima mortal i 8 ferits lleus/moderats que també requereixen trasllat hospitalari (10 trasllats en total). S’ha de declarar oficialment un IMV segons el Protocol APCAT?',
      options: [
        'No, perquè no arriba al llindar de 6 víctimes greus o mortals.',
        'Sí, perquè encara que no hi hagi 6 víctimes greus o mortals, es compleix el segon criteri APCAT (≥ 10 víctimes que requereixen trasllat hospitalari).',
        'No, perquè el Protocol APCAT exigeix complir simultàniament els dos llindars (≥ 6 greus I ≥ 10 trasllats).',
        'Només si hi ha com a mínim 1 víctima classificada de color negre.'
      ],
      correctIndex: 1,
      explanation: 'N’hi ha prou que es compleixi UN dels dos llindars del Protocol APCAT: ≥ 6 víctimes greus o mortals, O BÉ ≥ 10 víctimes que requereixin trasllat hospitalari.'
    },
    {
      id: 't29-q18',
      difficulty: 'Fàcil',
      question: 'Dins l’organització espacial d’un IMV (MAN.SANI.001), on s’executa la 1a noria de rescat i on s’ubiquen el Centre de Comandament Avançat (CCA) i l’Àrea Sanitària (CMA) del SEM?',
      options: [
        'La 1a noria de rescat treballa entre la Zona Calenta i Tèbia (1r Cercle de Mossos), mentre que el CCA i l’Àrea Sanitària / CMA s’ubiquen en Zona Freda (2n Cercle de Mossos).',
        'El CCA i l’Àrea Sanitària s’instal·len sempre dins la Zona Calenta per estar al costat de l’impacte.',
        'La 1a noria de rescat la fan exclusivament les ambulàncies convencionals dins la Zona Calenta.',
        'El 1r Cercle de Mossos equival únicament a la Zona Freda de Bombers.'
      ],
      correctIndex: 0,
      explanation: 'El 1r Cercle de Seguretat de Mossos engloba la Zona Calenta + Zona Tèbia (rescat, triatge START i 1a noria de rescat), mentre que el 2n Cercle equival a la Zona Freda (CMA del SEM, triatge META, CCA i nories d’ambulàncies).'
    }
  ]
};
