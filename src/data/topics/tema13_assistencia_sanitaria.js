export const tema13AssistenciaSanitaria = {
  id: 'tema-28',
  number: 28,
  code: 'MAN.SANI.000',
  title: 'Intervenció bàsica en assistència sanitària',
  category: 'Manual Operatiu SGO — Assistència Sanitària, XABCDE i SVB (V.3)',
  estimatedMinutes: 55,
  importance: {
    title: "Radar d'Examen — Tema 28 (MAN.SANI.000 V.3): Assistència Sanitària",
    frequency: 'Molt Alta (5-7 preguntes fixes sobre XABCDE, Constants Vitals, Glasgow, RCP 30:2 i novetats V.3)',
    summary:
      "Versió 3 actualitzada del manual MAN.SANI.000: incorpora la Cadena de Supervivència ERC de 4 baules, l'actualització en el control d'hemorràgies (l'elevació de l'extremitat i la compressió arterial indirecta ja NO són prioritàries!), el Pulsicooxímetre per a intoxicació per CO i totes les taules de constants vitals per edat. Inclou 5 pàgines de desenvolupament + 2 pàgines finals de Resum Executiu.",
    hotTopics: [
      "Cap. 1-2: Llei 5/1994, creació del GROS (arran del terratrèmol de l'Índia) i GEM, Cadena de Supervivència ERC (4 baules V.3), diferència Urgència vs. Emergència, Signe vs. Símptoma, classificació d'edat actualitzada (Nadó/nounat, Lactant fins a 1 any, Nen/a d'1 a 12 anys, Adolescent de 13 a 18 anys, Adult/a ≥18 anys) i postures (Trendelemburg, Antitrendelemburg, Fowler 30-90°, PLS esquerra en embarassades).",
      'Cap. 3: Valoració Primària XABCDE i Taules de Constants Vitals (FR 12-20 [alerta >30], SpO₂ 95-100% [<90% greu], FC 60-100, PA 120/80 [pols radial ≥80-90 mmHg; carotidi ≥60 mmHg], Ompliment capil·lar <2 s, AVDN, Pupil·les, Tª 36-37,5 °C [≤35 °C hipotèrmia]), Valoració Secundària SPUMA, Glasgow (3 a 15: TCE lleu ≥13, moderat 9-12, greu ≤8) i signes de fractura de base de crani.',
      'Cap. 4.1-4.8: Hemorràgies V.3 (1r Compressió directa sense retirar mai la 1a gasa → 2n Torniquet 5-7 cm per sobre de la ferida anotant l’hora T; elevació i compressió arterial ja NO són prioritàries!), RCP Adult (30:2 a 100-120/min i 5-6 cm) vs. Pediàtrica/Ofegats/Allaus (5 ventilacions de rescat inicials!), DEA i Pulsicooxímetre per a CO.',
      'Cap. 4.9-5: Cremades (1r, 2n, 3r grau i Regla dels 9 de Wallace), extracció de paparra (pinces arran de pell sense oli/alcohol), Hipotèrmia (≤35 °C) vs. Cop de calor (>40 °C) i Mobilització (Pont simple 3+1 vs. Pont millorat 4+1).'
    ],
    traps: [
      'ACTUALITZACIÓ V.3 (Control d’hemorràgies 4.1): Si una gasa s’amara de sang, MAI es retira la primera gasa (s’hi posen més gases a sobre). A més, l’elevació del membre i la compressió arterial indirecta s’han eliminat com a mesures prioritàries (es passa de compressió directa a empaquetament/torniquet a 5-7 cm!).',
      'Parany del Pulsioxímetre en incendi (4.8): Un pulsioxímetre convencional NO distingeix l’Oxihemoglobina de la Carboxihemoglobina (COHb) i dóna un fals 99-100% en intoxicats per CO! Cal un PULSICOOXÍMETRE.',
      'Confondre la pressió arterial sistòlica mínima que indica la presència de pols RADIAL (≥ 80-90 mmHg) amb la del pols CAROTIDI (≥ 60 mmHg).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-2 GEM/GROS i Conceptes',
      title: '1–2. Introducció (GEM i GROS), Cadena de Supervivència ERC (4 Baules) i Conceptes Generals',
      subtitle: 'Origen del GROS (Índia), Urgència vs. Emergència, Signe vs. Símptoma, edats ERC i postures.',
      blocks: [
        {
          type: 'text',
          heading: '1.1–1.4. Competència Sanitària, GEM, GROS i Cadena de Supervivència ERC (4 Baules)',
          paragraphs: [
            "D'acord amb la Llei 5/1994, el salvament i l'assistència sanitària inicial de socors a les víctimes és una funció pròpia dels bombers fins a la transferència al SEM.",
            "El Cos disposa del GEM (Grup d'Emergències Mèdiques) i del GROS (Grup Operatiu de Suport sanitari, nascut arran del terratrèmol de l'Índia), que donen suport mèdic al GRAE/GRIT i a grans intervencions.",
            "A la Versió 3 del manual MAN.SANI.000 (secció 1.3), la Cadena de Supervivència de l'European Resuscitation Council (ERC) s'estructura en 4 BAULES: 1) Reconeixement precoç i alerta al 112, 2) RCP precoç per testimonis, 3) Desfibril·lació precoç (DEA) i 4) Suport Vital Avançat (SVA) i cures post-ressuscitació."
          ]
        },
        {
          type: 'diagram',
          title: 'Escala de Coma de Glasgow (GCS: Ocular 4 · Verbal 5 · Motora 6)',
          diagramType: 'glasgow_scale',
          caption:
            'Puntuació completa de l’Escala de Coma de Glasgow (3 a 15 punts) i classificació del TCE (Lleu, Moderat i Greu ≤ 8).'
        },
        {
          type: 'table',
          title: '2.1–2.5. Conceptes Clínics, Franges d’Edat ERC, Anatomia Topogràfica i Postures d’Espera',
          subtitle: 'Definicions literals del Capítol 2 de MAN.SANI.000 V.3',
          headers: ['Concepte / Categoria', 'Definició Oficial al Manual MAN.SANI.000', 'Detall i Parany d’Examen'],
          rows: [
            ['Emergència vs. Urgència', '• EMERGÈNCIA: Risc vital imminent (real o potencial) on la vida o la funció d’un òrgan depèn d’una actuació immediata en pocs minuts (ex: ACR, hemorràgia exsanguinant).\n• URGÈNCIA: Situació que requereix atenció sanitària a curt termini però sense perill vital immediat.', 'Tota emergència és una urgència, però no tota urgència és una emergència vital.'],
            ['Signe vs. Símptoma vs. Síndrome', '• SIGNE: Dada OBJECTIVA i mesurable que observa el socorrista (ex: fractures, cianosi, FC 120 bpm, Tª 39 °C, pupil·les dilatades).\n• SÍMPTOMA: Sensació SUBJECTIVA que només pot explicar el pacient (ex: mal de cap, mareig, nàusees, dolor).\n• SÍNDROME: Conjunt de signes i símptomes que concorren.', 'Si ho pots mesurar o veure tu mateix → SIGNE. Si t’ho ha de dir la víctima → SÍMPTOMA.'],
            ['Classificació d’Edat de la Víctima (Punt 2.1 d · Correcció 2026)', '• Nadó o nounat: Immediatament després del part.\n• Lactant: Fins a 1 any.\n• Nen/a: D’1 a 12 anys.\n• Adolescent: De 13 a 18 anys.\n• Adult/a: A partir dels 18 anys o persona considerada adulta pel reanimador.', 'En lactants (<1 any) el pols es busca a l’artèria BRAQUIAL (cara interna del braç) i les compressions en RCP es fan preferentment amb encerclament del tòrax amb DOS POLZES sobre la meitat inferior de l’estèrnum.'],
            ['Termes Topogràfics (Posició Anatòmica)', '• Cranial (superior) vs. Caudal (inferior).\n• Ventral (anterior) vs. Dorsal (posterior).\n• Medial (intern, cap a l’eix) vs. Lateral (extern).\n• Proximal (a prop del tronc) vs. Distal (lluny del tronc: mà/peu).', 'El canell és DISTAL respecte del colze, però PROXIMAL respecte dels dits de la mà.'],
            ['Postures d’Espera i Transport (2.5)', '• Decúbit Supí: Estirat panxa enlaire (postura de RCP i d’immobilització traumàtica en tauler).\n• PLS (Posició Lateral de Seguretat): Inconscient que respira amb normalitat (sense trauma). En EMBARASSADES (>20 setmanes): sempre sobre el COSTAT ESQUERRE (evita comprimir la vena cava inferior!).\n• Fowler / Semifowler: Incorporat amb l’esquena a 30°–90° (45° semifowler) → per a dispnea/dificultat respiratòria o dolor toràcic.\n• Trendelemburg (potes aixecades) i Antitrendelemburg (cap més alt que els peus, en TCE).', 'En ferides penetrants a l’abdomen: decúbit supí amb les CAMES FLEXIONADES (relaxa la musculatura abdominal). En ferida al tòrax: semiassegut inclinat sobre el costat lesionat.']
          ],
          footnote: 'Memoritza: Embarassada en PLS = sempre sobre el costat ESQUERRE | Dificultat respiratòria conscient = Fowler (30°-90°) | Abdomen agut = Supí amb cames flexionades.'
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! Emergència vs. Urgència i Signe vs. Símptoma',
          paragraphs: [
            "• EMERGÈNCIA vs. URGÈNCIA: L'emergència comporta risc vital imminent en minuts (ACR, hemorràgia massiva); la urgència requereix atenció a curt termini sense perill vital immediat.",
            "• SIGNE vs. SÍMPTOMA: El signe és objectiu i mesurable pel bomber (FC, cianosi, Tª 39 °C, fractura); el símptoma és subjectiu i només l'explica el pacient (mareig, dolor, nàusees)."
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 3.1 XABCDE i Constants',
      title: '3.1. Valoració Primària (XABCDE) i Taules Oficials de Constants Vitals',
      subtitle: 'Seqüència X-A-B-C-D-E i tots els rangs numèrics de FR, SpO₂, FC, PA, Capil·lar, AVDN, Pupil·les i Tª.',
      blocks: [
        {
          type: 'text',
          heading: '3.1. Seqüència de Valoració Primària XABCDE',
          paragraphs: [
            "La valoració primària segueix un ordre estricte de letalitat: qualsevol problema detectat en una lletra s'ha de resoldre abans de passar a la següent.",
            "• X (Exsanguinant): Control immediat d'hemorràgies massives (maten en < 3 min). • A (Airway): Via aèria (front-mentó sense trauma; tracció mandibular amb trauma) + control cervical.",
            "• B (Breathing): VOS màx. 10 s, FR i SpO₂. • C (Circulation): Pols, PA, ompliment capil·lar (< 2 s). • D (Disability): AVDN, Glasgow i pupil·les. • E (Exposure): Exposar lesions evitant la hipotèrmia."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Regla Mnemotècnica · Protocol XABCDE (Prioritat Vital)',
          acronym: 'X (Exsanguinant) → A (Airway + Cervical) → B (Breathing) → C (Circulation) → D (Disability) → E (Exposure)',
          trick:
            "• X va ABANS de l'A perquè una hemorràgia arterial massiva mata abans que una obstrucció de via aèria.\n• A = front-mentó (no trauma) o tracció mandibular (trauma) | B = VOS ≤ 10 s | D = AVDN + Glasgow + pupil·les.",
          example: 'Un problema detectat al pas X o A s’ha de resoldre a l’instant abans de passar a la lletra següent!'
        },
        {
          type: 'table',
          title: '3.1. Taula Mestra de Constants Vitals i Llindars d’Alerta (MAN.SANI.000 V.3 Secció 3.1)',
          subtitle: 'Totes les xifres de les taules de valoració primària del manual — Memorització 100% obligatòria!',
          headers: ['Constant Vital (Lletra)', 'Valors Normals en Adult (i Pediatria)', 'Llindars Crítics i Equivalències del Manual'],
          rows: [
            ['B — Freqüència Respiratòria (FR)', '• Adult: 12 a 20 rpm (respiracions/min).\n• Nen: 20 a 30 rpm.\n• Lactant (<1 any): 30 a 40 (fins a 60 en nounat) rpm.', '• Taquipnea: > 20 rpm en adult (ALERTA CRÍTICA: > 30 rpm!).\n• Bradipnea: < 12 rpm en adult (< 10 rpm crítica).\n• Apnea: Absència de respiració.'],
            ['B — Saturació d’Oxigen (SpO₂)', '• Normal: 95% a 100%.', '• Hipòxia lleu: 91% – 94%.\n• Hipòxia moderada/GREU: < 90% (emergència hipòxica!).'],
            ['C — Freqüència Cardíaca (FC)', '• Adult: 60 a 100 bpm (batecs/min).\n• Nen: 80 a 120 bpm.\n• Lactant: 100 a 160 bpm.', '• Taquicàrdia (adult): > 100 bpm.\n• Bradicàrdia (adult): < 60 bpm.'],
            ['C — Pressió Arterial (PA) i Estimació pel Pols', '• Normal adult: Sistòlica 120 mmHg (<140) / Diastòlica 80 mmHg (<90).', 'REGLA D’ESTIMACIÓ SENSE TENSIÒMETRE:\n• Si hi ha pols RADIAL (canell) → PA Sistòlica ≥ 80 – 90 mmHg.\n• Si hi ha pols FEMORAL (engonal) → PA Sistòlica ≥ 70 mmHg.\n• Si NOMÉS hi ha pols CAROTIDI (coll) → PA Sistòlica ≥ 60 mmHg!'],
            ['C — Temps d’Ompliment Capil·lar', '• Normal: < 2 segons (prement el llit unguial de l’ungla).', 'Si triga > 2 segons a recuperar el color rosat → indica hipoperfusió o XOC (o fred ambiental).'],
            ['D — Pupil·les (Mida i Simetria)', '• Normals: Isocòriques (iguals) i Normoreactives a la llum.', '• MIOSI: Pupil·les puntiformes/contretes (intoxicació per opiacis/heroïna o organofosforats).\n• MIDRIASI: Pupil·les dilatades (hipòxia cerebral greu, ACR, cocaïna/adrenalina).\n• ANISOCÒRIA: Una pupil·la més gran que l’altra → signe d’alerta de TCE greu / compressió cerebral!'],
            ['E — Temperatura Corporal (Tª)', '• Normal: 36,0 °C a 37,5 °C.', '• HIPOTÈRMIA: ≤ 35,0 °C (Lleu 35-32 °C | Moderada 32-28 °C | Greu < 28 °C).\n• Febrícula: 37,5-38 °C | Febre: > 38 °C | Hiperpirèxia / Cop de calor: > 40 °C.']
          ],
          footnote: 'Memoritza l’estimació de PA pel pols: Radial ≥ 80-90 mmHg | Carotidi ≥ 60 mmHg. I les 3 pupil·les: Isocòriques (iguals), Miosi (petites), Midriasi (grans), Anisocòria (desiguals = TCE!).'
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! Estimació de PA pel Pols i Alteracions Pupil·lars',
          paragraphs: [
            "• POLS I PRESSIÓ SISTÒLICA: Pols radial palpable = PA ≥ 80–90 mmHg; pols femoral = PA ≥ 70 mmHg; si només hi ha pols carotidi = PA ≥ 60 mmHg.",
            "• PUPIL·LES: Miosi = contretes (opiacis/organofosforats); Midriasi = dilatades (hipòxia greu/ACR); Anisocòria = asimètriques (signe d'alarma de TCE greu / compressió cerebral)."
          ]
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · Pressions Arterials (140/90 · 120/80 · 90/60)',
          acronym: 'Base 120/80  |  ↑ +2 / +1 → 140/90  |  ↓ -3 / -2 → 90/60',
          trick:
            'Parteix sempre de la pressió arterial normal (120/80):\n• Cap amunt (↑ Hipertensió): suma +2 desenes a la sistòlica (+20) i +1 desena a la diastòlica (+10) → 140 / 90 mmHg.\n• Cap avall (↓ Hipotensió): resta -3 desenes a la sistòlica (-30) i -2 desenes a la diastòlica (-20) → 90 / 60 mmHg.',
          example: '120/80 (+2/+1) = 140/90 | 120/80 (-3/-2) = 90/60.'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 3.2-3.3 Glasgow i SPUMA',
      title: '3.2–3.3. Valoració Secundària (SPUMA), Escala de Coma de Glasgow (3–15) i TCE',
      subtitle: 'Puntuació detallada de Glasgow (Ocular 4 + Verbal 5 + Motora 6) i signes de fractura de base de crani.',
      blocks: [
        {
          type: 'table',
          title: '3.2. Escala de Coma de Glasgow (GCS: Mínim 3 punts — Màxim 15 punts)',
          subtitle: 'Taula completa de puntuació (Ocular 4 + Verbal 5 + Motora 6) i gravetat del TCE (MAN.SANI.000 V.3)',
          headers: ['Paràmetre Avaluat', 'Puntuació Punkt a Punt (De més a menys)', 'Classificació de Gravetat del TCE'],
          rows: [
            ['1. Obertura OCULAR (Màxim 4 punts)', '• 4 punts = Espontània (té els ulls oberts).\n• 3 punts = A l’ordre verbal (els obre quan li parles).\n• 2 punts = A l’estímul dolorós.\n• 1 punt = Cap resposta (no obre els ulls).', '• TCE LLEU: Glasgow de 13 a 15 punts (≥ 13).\n• TCE MODERAT: Glasgow de 9 a 12 punts.\n• TCE GREU / COMA: Glasgow ≤ 8 punts (de 3 a 8 punts → indica pèrdua de reflexos protectors de via aèria i intubació SVA!).'],
            ['2. Resposta VERBAL (Màxim 5 punts)', '• 5 punts = Orientada (sap qui és, on és i quin dia és).\n• 4 punts = Confusa / Desorientada (però parla amb frases).\n• 3 punts = Paraules inapropiades / soltes incoherents.\n• 2 punts = Sons incomprensibles (gemecs, grunyits).\n• 1 punt = Cap resposta verbal.', 'Truc de memòria dels màxims: O-V-M = 4 - 5 - 6 (suma 15). La puntuació MÍNIMA d’un cos (fins i tot en mort) és sempre 3 punts (1+1+1), MAI 0!'],
            ['3. Resposta MOTORA (Màxim 6 punts)', '• 6 punts = Obeeix ordres (mou la mà quan li ho demanes).\n• 5 punts = Localitza el dolor (porta la mà cap al punt on li fas mal).\n• 4 punts = Retirada al dolor (flexió normal d’evitació).\n• 3 punts = Flexió anormal al dolor (rigidesa de DECORTICACIÓ).\n• 2 punts = Extensió anormal al dolor (rigidesa de DESCEREBRACIÓ).\n• 1 punt = Cap resposta motora.', 'En motora: 3 punts = Flexió anormal (Decorticació) | 2 punts = Extensió anormal (Descerebració).']
          ],
          footnote: 'Memoritza: Glasgow va de 3 a 15 (Ocular 4 + Verbal 5 + Motora 6). TCE Lleu = 13-15 | Moderat = 9-12 | Greu ≤ 8.'
        },
        {
          type: 'text',
          heading: '3.2–3.3. Anamnesi SPUMA i Signes de Fractura de Base de Crani',
          paragraphs: [
            "L'interrogatori SPUMA recull: Símptomes, Patologies prèvies, Última ingesta (hora d'aliments/líquids per a possible anestèsia), Medicació habitual (especialment anticoagulants) i Al·lèrgies.",
            "Sospita fractura de base de crani davant: 1) Ulls d'ós rentador (hematoma periorbitari bilateral), 2) Signe de Battle (hematoma retroauricular sobre la mastoide), 3) Otorràgia/otorrea de LCR i 4) Epistaxi/rinorrea de LCR.",
            "⚠️ PROHIBIT taponar l'oïda o el nas si hi ha otorràgia o rinorrea post-TCE: augmentaria la pressió intracranial (PIC). Només es cobreix suaument amb gasa estèril sense pressionar!"
          ]
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: '3.2. Regla Mnemotècnica SPUMA i Fractura de Base de Crani',
          acronym: 'SPUMA: Símptomes · Patologies · Última ingesta · Medicació · Al·lèrgies',
          trick:
            "• Base de crani = Ulls d'ós rentador + Signe de Battle + Otorràgia/Rinorrea de LCR.\n• Regla d'or: MAI taponar el conducte auditiu ni el nas en sospita de TCE.",
          example: 'Si una víctima d’accident presenta "ulls d’ós rentador", hematoma darrere l’orella (Battle) i li surt sang aigualida per l’oïda: sospita fractura de base de crani i NO taponis el conducte auditiu!'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 4.1-4.8 Hemorràgies i RCP',
      title: '4.1–4.8. Control d’Hemorràgies (V.3), OVACE, RCP (30:2 i 5 Vent.), DEA i Pulsicooxímetre',
      subtitle: 'Torniquet a 5-7 cm, no retirar la 1a gasa, algorisme SVB adult vs. pediàtric/ofegats i CO.',
      blocks: [
        {
          type: 'table',
          title: '4.1–4.8. Protocols de Suport Vital Bàsic, Hemorràgies V.3 i Intoxicació per CO',
          subtitle: 'Procediments actualitzats a la Versió 3 del manual MAN.SANI.000',
          headers: ['Maniobra Sanitària', 'Protocol Oficial Exacte (MAN.SANI.000 V.3)', 'Novetat V.3 / Parany del Tribunal'],
          rows: [
            ['4.1. Control d’Hemorràgies Externes (X)', '1r) COMPRESSIÓ DIRECTA forta amb apòsits o gases estèrils sobre el punt sagnant. Si la 1a gasa s’amara de sang, MAI ES RETIRA (per no arrencar el coàgul que s’està formant: s’hi posen més gases a sobre!).\n2n) Empaquetament de ferida (Wound Packing) amb venda hemostàtica o benatge compressiu.\n3r) TORNIQUET homologat en extremitats (si la compressió directa falla o és una amputació/múltiples víctimes): col·locat de 5 a 7 cm per sobre de la ferida (mai sobre una articulació!), apretat fins que cessi el sagnat i el pols distal, i ANOTAR L’HORA exacta ("T + hora") de col·locació! Un cop posat, un bomber NO afluixa mai un torniquet.', 'NOVETAT CLAU V.3: L’elevació de l’extremitat i la compressió arterial indirecta a distància JA NO ES CONSIDEREN MESURES PRIORITÀRIES a les guies actuals per falta d’evidència!'],
            ['4.3. OVACE (Ennuegament per Cos Estrany)', '• Obstrucció LLEu / INCOMPLETA (la víctima pot tossir, parlar o respirar): Animar-la a TOSSIR i vigilar (NO donar cops a l’esquena!).\n• Obstrucció GREU / COMPLETA (no pot parlar ni tossir, signe universal al coll):\n  - Conscient (>1 any): Alternar 5 COPS INTERESCAPULARS a l’esquena + 5 COMPRESSIONS ABDOMINALS (Maniobra de Heimlich). En embarassades o obesos: compressions TORÀCIQUES. En lactants (<1 any): 5 cops a l’esquena (cap avall) + 5 compressions TORÀCIQUES amb 2 dits (MAI Heimlich abdominal en lactants!).\n  - Si queda INCONSCIENT: Iniciar immediatament RCP (30:2)!', 'En lactants (<1 any) està prohibit fer compressions abdominals (Heimlich) pel risc de trencar el fetge: es fan 5 cops interescapulars + 5 compressions toràciques!'],
            ['4.5. RCP en Adult (Origen Cardíac)', 'Relació 30 COMPRESSIONS : 2 VENTILACIONS.\n• Compressions al centre del pit (meitat inferior de l’estern).\n• Profunditat: 5 a 6 cm (sense superar els 6 cm).\n• Ritme: 100 a 120 compressions/minut.\n• Relleu del reanimador cada 2 minuts (5 cicles de 30:2).', 'En adult s’inicia directament amb les 30 compressions toràciques tan bon punt es confirma que no respon i no respira normalment (la respiració agònica o "gasping" es considera NO respirar!).'],
            ['4.5. RCP Pediàtrica, Ofegats, Allaus i Intoxicats per Fum (Origen Asfíctic)', '1r) Fer 5 VENTILACIONS DE RESCAT INICIALS abans de començar les compressions!\n2n) Compressions toràciques sobre la meitat inferior de l’estèrnum (15:2 en equips entrenats o 30:2 protocol general SVB, deprimint 1/3 del tòrax: ~4 cm lactant / ~5 cm infant):\n  - Lactants: utilitzar preferentment la tècnica d’encerclament del tòrax amb dos polzes.\n  - Infants majors d’1 any: tècnica d’una mà o de dues mans, segons la mida de l’infant i la qualitat de les compressions (també si no es poden fer compressions de qualitat amb dos polzes).\n3r) Si el rescatador està sol, inicia la RCP durant 1 MINUT abans d’anar a demanar ajuda.', 'Diferència vital d’examen: En infants i lactants, ofegats en aigua, sepultats per allau o intoxicats per fum, l’aturada sovint té origen respiratori → per això es comença sempre amb 5 VENTILACIONS DE RESCAT!'],
            ['4.6. DEA (Desfibril·lador Extern Automatitzat)', 'Col·locar pegats sobre tòrax nu i sec (1 sota clavícula dreta, 1 a l’aixella/costat esquerre; en nens <8 anys o <25 kg usar pegats pediàtrics o posició anteroposterior).', 'Només desfibril·la 2 ritmes: Fibril·lació Ventricular (FV) i Taquicàrdia Ventricular sense pols (TVsp). En Asistòlia NO dóna descàrrega (cal continuar RCP 30:2).'],
            ['4.8. Intoxicació per Fum (CO + HCN) i Pulsicooxímetre', 'Retirar de l’ambient, administrar Oxigen al 100% d’alt flux (màscara amb reservori 15 L/min) i valoració pel SEM (antídot de l’HCN = Hidroxocobalamina / Cyanokit).', 'DADA CLAU DEL MANUAL (4.8): Per mesurar la carboxihemoglobina (COHb) cal un PULSICOOXÍMETRE (CO-oxímetre), perquè el pulsioxímetre normal confon el CO amb l’O₂ i marca falsament 100%!']
          ],
          footnote: 'Memoritza: Torniquet = 5 a 7 cm sobre la ferida | RCP Adult = 30:2 (100-120/min, 5-6 cm) | Pediatria/Ofegats/Allaus = 5 ventilacions de rescat inicials!'
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! Hemorràgies V.3, Pulsicooxímetre i RCP Adult vs. Asfíctica',
          paragraphs: [
            "• HEMORRÀGIES V.3: Mai retirar la 1a gasa amarada (se n'hi posen a sobre). L'elevació del membre i la compressió arterial indirecta ja NO són prioritàries: es passa de compressió directa/empaquetament a torniquet (5–7 cm sobre la ferida).",
            "• PULSIOXÍMETRE vs. PULSICOOXÍMETRE: El pulsioxímetre normal confon la carboxihemoglobina (COHb) amb oxigen i marca 99–100% en intoxicats per fum; cal un pulsicooxímetre.",
            "• RCP ADULT vs. PED./OFEGATS/ALLAUS: En adult d'origen cardíac es comença amb 30 compressions (30:2); en pediatria, ofegats i allaus (origen asfíctic) s'inicia amb 5 ventilacions de rescat."
          ]
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Cap. 4.9-5 Cremades i Pont',
      title: '4.9–5. Cremades (Regla dels 9), Paparra, Hipotèrmia/Cop de Calor i Mobilització (Pont 3+1 i 4+1)',
      subtitle: 'Classificació de cremades, extracció de paparra, emergències tèrmiques i tècniques de pont.',
      blocks: [
        {
          type: 'table',
          title: '4.9–4.13. Cremades, Picades (Paparra), Patologies Tèrmiques i Mobilització de Traumatitzats',
          subtitle: 'Tots els detalls pràctics de la segona meitat del Capítol 4 de MAN.SANI.000 V.3',
          headers: ['Situació / Maniobra', 'Classificació i Procediment Oficial (MAN.SANI.000 V.3)', 'Prohibicions i Detalls d’Examen'],
          rows: [
            ['4.9. Cremades per Profunditat (1r, 2n i 3r Grau)', '• 1r Grau (Epidermis): Eritema (pell vermella), dolorosa, SENSE butllofes.\n• 2n Grau (Dermis): Aparició de FLICTENES (butllofes plenes de líquid) i dolor intens.\n• 3r Grau (Subcutània/Total): Escara seca nacrada, marró o carbonitzada i INDOLORA (per destrucció de les terminacions nervioses!).', 'Tractament: Refredar amb aigua tèbia/fresca corrent (15-20 min, sense gel directe per no causar hipotèrmia), retirar anells/rellotges, NO rebentar mai les butllofes (flictenes) i NO arrencar la roba adherida a la pell!'],
            ['4.9. Regla dels 9 de Wallace (Superfície Corporal Cremada %SCQ en Adult)', '• Cap i coll = 9%\n• Cada extremitat superior (braç) = 9% (×2 = 18%)\n• Tronc anterior (pit + abdomen) = 18%\n• Tronc posterior (esquena) = 18%\n• Cada extremitat inferior (cama) = 18% (×2 = 36%)\n• Perineu / Genitals = 1%  (Total = 100%).', 'El palmell de la mà de la pròpia víctima (incloent els dits) equival sempre a l’1% de la seva superfície corporal!'],
            ['4.10. Extracció d’una Paparra (Picades)', 'S’extreu amb PINCES DE PUNTA FINA agafant-la tan a prop de la pell com sigui possible (pel cap/aparell bucal) i estirant cap amunt amb tracció contínua, suau i perpendicular, i després es desinfecta.', 'PARANY D’EXAMEN: Està PROHIBIT aplicar alcohol, oli, vaselina, benzina o calor sobre la paparra abans de treure-la (això l’estressa i fa que regurgiti els bacteris infecciosos dins la sang de la víctima!).'],
            ['4.11–4.12. Hipotèrmia (≤ 35 °C) vs. Cop de Calor (> 40 °C)', '• Hipotèrmia (Tª ≤ 35 °C): En hipotèrmia moderada/greu (<32-28 °C), moure la víctima amb EXTREMA SUAVITAT en horitzontal (un moviment brusc envia sang freda perifèrica al cor i provoca Fibril·lació Ventricular mortal!).\n• Cop de Calor (Tª > 40 °C): Pell molt calenta, vermella i SECA (fracàs de la sudoració) + alteració neurològica → refredament físic immediat a l’ombra.', 'Compara: En Esgotament per calor la pell està pàl·lida, freda i MOLT SUADA (Tª < 40 °C); en el COP DE CALOR (>40 °C) el termòstat hipotalàmic falla, sovint cessa la suor i és una emergència mortal.'],
            ['4.13. Mobilització: Pont Simple (3+1) vs. Pont Millorat / Holandès (4+1)', 'Per passar una víctima amb sospita de lesió medul·lar a la llitera de cullereta o tauler espinal mantenint l’eix Cap-Coll-Tronc:\n• PONT SIMPLE = 4 socorristes (3 aixequen a cavall de la víctima: 1 al cap/coll que dirigeix + 1 a espatlles/pelvis + 1 a cames, i el 4t introdueix la llitera per sota).\n• PONT MILLORAT = 5 socorristes (4 aixequen: 1 exclusivament al control cervical del cap + 3 al cos, i el 5è llisca el tauler).', 'Qui dóna l’ordre de "Preparats per aixecar... Amunt!"? SEMPRE el socorrista que subjecta el CAP i el control cervical!']
          ],
          footnote: 'Memoritza: Pont Simple = 4 bombers (3 aixequen + 1 llitera) | Pont Millorat = 5 bombers (4 aixequen + 1 llitera) | L’ordre la dóna sempre qui està al CAP.'
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · 📌 Resum 1/2 (Xifres Vitals)',
      title: 'Resum Final (1/2): Taula Mestra de Constants Vitals, Escales i Xifres (MAN.SANI.000 V.3)',
      subtitle: 'Totes les xifres clíniques del Tema 28 en una sola pàgina per memoritzar-les sense dubtes.',
      blocks: [
        {
          type: 'table',
          title: 'Síntesi Numèrica Imprescindible d’Examen — Tema 28 (Assistència Sanitària V.3)',
          subtitle: 'Els 16 valors oficials que has de clavar al test de MAN.SANI.000',
          headers: ['Paràmetre / Protocol', 'Valor Oficial Exacte (MAN.SANI.000 V.3)', 'Detall Crític d’Examen'],
          rows: [
            ['1. Cadena de Supervivència ERC (V.3)', '4 baules (1. Reconeixement/112 → 2. RCP → 3. DEA → 4. SVA)', 'Actualitzada a 4 anelles al manual V.3'],
            ['2. Temps màxim per comprovar respiració (VOS)', 'Màxim 10 segons', 'Si no respira o té "gasping" (agònica) → iniciar RCP immediatament'],
            ['3. Freqüència Respiratòria (FR) Adult', 'Normal: 12 a 20 rpm | Alerta crítica: > 30 rpm (o < 10 rpm)', 'Nen: 20-30 rpm | Lactant (<1 any): 30-40 rpm'],
            ['4. Saturació d’Oxigen (SpO₂)', 'Normal: 95% – 100% | Hipòxia greu: < 90%', 'En incendi (CO) usar sempre PULSICOOXÍMETRE (CO-oxímetre)'],
            ['5. Freqüència Cardíaca (FC) Adult', 'Normal: 60 a 100 bpm (<60 bradicàrdia; >100 taquicàrdia)', 'Nen: 80-120 bpm | Lactant: 100-160 bpm (pols braquial)'],
            ['6. Pressió Arterial (PA) i Polsos', 'Normal: 120/80 mmHg | Pols Radial ≥ 80-90 mmHg | Carotidi ≥ 60 mmHg', 'Pols femoral indica PA sistòlica ≥ 70 mmHg'],
            ['7. Temps d’Ompliment Capil·lar', 'Normal: < 2 segons', '> 2 segons indica hipoperfusió perifèrica / xoc'],
            ['8. Temperatura Corporal i Hipotèrmia', 'Normal: 36 – 37,5 °C | Hipotèrmia: ≤ 35 °C | Cop calor: > 40 °C', 'Hipotèrmia lleu 35-32 °C | moderada 32-28 °C | greu < 28 °C'],
            ['9. Escala de Coma de Glasgow (GCS)', 'Mínim 3 punts — Màxim 15 punts (Ocular 4 + Verbal 5 + Motora 6)', 'TCE lleu: 13-15 | TCE moderat: 9-12 | TCE greu (coma): ≤ 8'],
            ['10. Distància de col·locació del Torniquet', '5 a 7 cm per sobre de la ferida (mai sobre articulació)', 'Anotar sempre l’hora ("T") i no afluixar-lo mai en prehospitalària'],
            ['11. RCP Adult (Compressions : Ventilacions)', '30 : 2 | Ritme: 100–120/min | Profunditat: 5–6 cm', 'Relleu del reanimador que comprimeix cada 2 minuts'],
            ['12. Inici de RCP en Pediatria, Ofegats i Allaus', '5 ventilacions de rescat inicials abans de les compressions', 'Si estàs sol sense telèfon: fer 1 minut de RCP abans d’anar a avisar'],
            ['13. OVACE (Ennuegament greu conscient)', '5 cops interescapulars + 5 compressions abdominals (Heimlich)', 'En lactants (<1 any) i embarassades: 5 cops + 5 compressions TORÀCIQUES'],
            ['14. Postura Fowler / Semifowler', 'Inclinació del respatller de 30° a 90° (45° semifowler)', 'Per a pacients conscients amb dispnea (dificultat respiratòria)'],
            ['15. Regla dels 9 de Wallace (Adult %SCQ)', 'Cap 9% | Cada braç 9% | Pit/Abd 18% | Esquena 18% | Cada cama 18% | Genitals 1%', 'El palmell de la mà del pacient equival a l’1% de la seva superfície'],
            ['16. Tècnica del Pont Simple vs. Pont Millorat', 'Pont Simple = 4 socorristes (3+1) | Pont Millorat = 5 socorristes (4+1)', 'Les ordres de moviment les dóna sempre qui subjecta el CAP']
          ],
          footnote: 'Pàgina 1 de 2 del Resum Executiu del Tema 28 (MAN.SANI.000 V.3).'
        }
      ]
    },
    {
      pageNumber: 7,
      isSummary: true,
      shortLabel: 'Pàg. 7 · 📌 Resum 2/2 (Paranys V.3)',
      title: 'Resum Final (2/2): Actualitzacions de la Versió 3 i Paranys del Tribunal (MAN.SANI.000)',
      subtitle: 'Les 6 regles clíniques on cauen la majoria d’opositors als exàmens de Bombers.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Els 6 Paranys Clínics del Manual MAN.SANI.000 V.3',
          acronym: '1a GASA ES QUEDA | ELEVACIÓ NO PRIORITÀRIA | PULSICOOXÍMETRE | NO TAPONAR OTORRÀGIA | PAPARRA EN SEC | PLS ESQUERRA',
          trick:
            "1) HEMORRÀGIES V.3: Mai retirar la 1a gasa xopa; elevació i compressió arterial ja no són prioritàries (torniquet a 5–7 cm).\n2) CO: El pulsioxímetre normal marca un fals 100%; cal un PULSICOOXÍMETRE.\n3) BASE DE CRANI: Prohibida la pressió o taponament en otorràgia/rinorrea post-TCE.\n4) PAPARRA: Extracció en sec amb pinces fines arran de pell (mai oli, alcohol ni calor).\n5) CREMADES 3r GRAU: Indolores per destrucció nerviosa (2n grau tenen flictenes).\n6) EMBARASSADA EN PLS: Sempre sobre el costat ESQUERRE.",
          example: 'Si el tribunal pregunta: "Què fem quan la primera gasa sobre una hemorràgia queda totalment amarada de sang?", la resposta és sempre: Col·locar una segona gasa a sobre sense retirar mai la primera.'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q28-1',
      difficulty: 'Difícil',
      question: "Segons l'actualització de la Versió 3 del manual MAN.SANI.000 sobre el control d'hemorràgies externes (apartat 4.1), què s'ha de fer si la primera gasa queda amarada de sang i a quina distància es col·loca un torniquet?",
      options: [
        'Retirar la primera gasa per netejar el coàgul i aplicar-ne una d’estèril; el torniquet es col·loca directament sobre la ferida o a 1-2 cm per sota, i s’ha de prioritzar sempre l’elevació de l’extremitat abans de comprimir.',
        'NO retirar mai la primera gasa (aplicar noves gases a sobre); si cal torniquet, es col·loca entre 5 i 7 cm per sobre de la ferida (mai sobre una articulació), anotant l’hora. L’elevació i la compressió arterial indirecta ja no són mesures prioritàries.',
        'Substituir la primera gasa cada 3 minuts per evitar infeccions; el torniquet s’aplica sobre l’articulació proximal per bloquejar el flux arterial, i la compressió arterial indirecta continua sent la primera mesura abans que el torniquet.',
        'Mantenir la primera gasa però afluixar la pressió manual cada 5 minuts; si cal torniquet, es col·loca entre 10 i 15 cm per sota de la ferida i s’afluixa cada 15 minuts per evitar la isquèmia irreversible del membre.'
      ],
      correctIndex: 1,
      explanation: "La V.3 del manual especifica que no s'ha de retirar mai el primer apòsit per no trencar el coàgul, que l'elevació i compressió arterial ja no són prioritàries i que el torniquet es posa 5-7 cm per sobre de la ferida anotant l'hora."
    },
    {
      id: 'q28-2',
      difficulty: 'Fàcil',
      question: "En la valoració primària (C - Circulació), si un pacient traumatitzat té pols radial palpable al canell, quina pressió arterial sistòlica mínima podem estimar que té? I si només té pols carotidi?",
      options: [
        'Radial ≥ 120 mmHg | Carotidi ≥ 90 mmHg',
        'Radial ≥ 80-90 mmHg | Carotidi ≥ 60 mmHg',
        'Radial ≥ 50 mmHg | Carotidi ≥ 30 mmHg',
        'El pols no té cap relació amb la pressió arterial.'
      ],
      correctIndex: 1,
      explanation: 'Segons la taula de constants vitals de MAN.SANI.000, la presència de pols radial indica una PA sistòlica ≥ 80-90 mmHg, i el pols carotidi ≥ 60 mmHg.'
    },
    {
      id: 'q28-3',
      difficulty: 'Mitjà',
      question: "En l'Escala de Coma de Glasgow (GCS), quina és la puntuació màxima de cada resposta (Ocular, Verbal, Motora), quina és la puntuació mínima total possible i a partir de quin valor es considera un TCE greu?",
      options: [
        'Ocular 5, Verbal 5, Motora 5 | Mínim 0 | TCE greu ≤ 5',
        'Ocular 4, Verbal 5, Motora 6 (Total 15) | Mínim 3 punts | TCE greu ≤ 8 punts',
        'Ocular 6, Verbal 4, Motora 5 (Total 15) | Mínim 1 punt | TCE greu ≤ 10 punts',
        'Ocular 3, Verbal 3, Motora 3 (Total 9) | Mínim 3 punts | TCE greu ≤ 4 punts'
      ],
      correctIndex: 1,
      explanation: 'Glasgow suma Ocular (4) + Verbal (5) + Motora (6) = 15 punts màxim i 3 punts mínim. TCE lleu = 13-15; moderat = 9-12; greu = ≤ 8.'
    },
    {
      id: 'q28-4',
      difficulty: 'Mitjà',
      question: "Quina modificació crucial s'aplica a l'inici de la RCP en víctimes pediàtriques (nens i lactants), ofegats en aigua o sepultats per allaus en comparació amb l'aturada cardíaca d'un adult?",
      options: [
        'S’inicien directament 30 compressions toràciques sense ventilacions durant els primers 2 minuts per afavorir la perfusió cerebral i coronària immediata.',
        'S’administren 5 ventilacions de rescat inicials abans de començar les compressions toràciques (i si el socorrista està sol, fa 1 minut de RCP abans d’anar a alertar).',
        'S’aplica immediatament el DEA amb descàrrega d’alta energia sense fer compressions prèvies i, si el socorrista està sol, alerta el 112 abans d’iniciar la RCP.',
        'S’administren 2 ventilacions de rescat inicials seguides d’una seqüència fixa de 60 compressions i 5 ventilacions, alertant el 112 abans de tocar la víctima.'
      ],
      correctIndex: 1,
      explanation: "Com que en nens, ofegats i allaus l'origen de l'aturada és asfíctic (hipòxic), el protocol ERC del manual indica començar amb 5 ventilacions de rescat inicials."
    },
    {
      id: 'q28-5',
      difficulty: 'Mitjà',
      question: "Per què no ens podem fiar d'un pulsioxímetre convencional per valorar la saturació d'oxigen d'una víctima rescatada d'un incendi amb inhalació de fum (monòxid de carboni - CO)?",
      options: [
        'Perquè el sutge i la humitat del fum obstrueixen el sensor infraroig de la pinça digital i fan que l’aparell s’apagui automàticament en menys de deu segons.',
        'Perquè el pulsioxímetre convencional no distingeix la carboxihemoglobina (COHb) de l’oxihemoglobina i marca un fals 99-100%; cal utilitzar un pulsicooxímetre.',
        'Perquè en presència de monòxid de carboni el pulsioxímetre convencional marca sempre un valor erroni del 0% o inferior al 50% encara que el pacient estigui estable.',
        'Perquè la lectura del pulsioxímetre convencional només és fiable a temperatures ambient inferiors a 25 °C i la calor de l’incendi altera la freqüència cardíaca.'
      ],
      correctIndex: 1,
      explanation: "L'apartat 4.8 adverteix que el pulsioxímetre estàndard llegeix la carboxihemoglobina com si fos oxigen, donant valors falsament normals; per detectar COHb cal un pulsicooxímetre."
    },
    {
      id: 'q28-6',
      difficulty: 'Mitjà',
      question: "En la seqüència de valoració primària XABCDE (apartat 3.1 de MAN.SANI.000 V.3), què significa la 'X' inicial i quant de temps màxim s'ha de dedicar a comprovar la respiració (VOS) al pas B?",
      options: [
        "X = Control immediat d'hemorràgies externes exsanguinants (abans fins i tot d'obrir la via aèria) | Pas B (VOS): màxim 10 segons.",
        "X = Estabilització cervical bimanual immediata (abans d'avaluar la consciència del ferit) | Pas B (VOS): mínim 30 segons.",
        "X = Exploració secundària ràpida de lesions ocultes mitjançant l'esquema SPUMA | Pas B (VOS): entre 20 i 30 segons.",
        "X = Extricació urgent d'un vehicle sinistrat en risc d'incendi o explosió imminent | Pas B (VOS): màxim 5 segons."
      ],
      correctIndex: 0,
      explanation: "La 'X' prioritza el control d'hemorràgies massives exsanguinants que maten en menys de 3 minuts; al pas B, la maniobra VOS (Veure, Oir, Sentir) dura com a màxim 10 segons."
    },
    {
      id: 'q28-7',
      difficulty: 'Mitjà',
      question: "Quina postura d'espera o trasllat és correcta per a una dona embarassada (>20 setmanes) inconscient que respira normalment sense trauma, i quina per a un pacient conscient amb dificultat respiratòria (dispnea)?",
      options: [
        'Embarassada: decúbit supí estricte amb coixí sota les espatlles | Dispnea: posició de Trendelemburg amb les cames elevades a 30°.',
        'Embarassada: Posició Lateral de Seguretat (PLS) sobre el costat DRET per protegir el cor fetal | Dispnea: decúbit pron amb el cap lateralitzat.',
        'Embarassada: Posició Lateral de Seguretat (PLS) sempre sobre el costat ESQUERRE (per no comprimir la vena cava inferior) | Dispnea: Fowler / Semifowler (30°–90°).',
        'Embarassada: posició d’Antitrendelemburg a 45° en decúbit supí | Dispnea: Posició Lateral de Seguretat sobre el costat esquerre amb cames flexionades.'
      ],
      correctIndex: 2,
      explanation: "L'embarassada (>20 setmanes) en PLS es col·loca sempre sobre el costat esquerre per evitar la compressió de la vena cava inferior; per a dispnea en pacient conscient s'usa Fowler/Semifowler (30°–90°)."
    },
    {
      id: 'q28-8',
      difficulty: 'Difícil',
      question: "Davant d'un traumatisme cranioencefàlic (TCE) que presenta 'ulls d'ós rentador', signe de Battle i sortida de sang o líquid cefaloraquidi per l'oïda (otorràgia/otorrea), què hem de sospitar i com hem d'actuar?",
      options: [
        'Fractura dels ossos propis del nas; s’ha de taponar fortament l’oïda i les fosses nasals amb bena hemostàtica a pressió per aturar la sortida de sang.',
        'Contusió facial lleu amb afectació del timpà; cal rentar el conducte auditiu amb sèrum fisiològic fred i col·locar un tap oclusiu per evitar infeccions.',
        'Lesió cervical alta amb compressió arterial; s’ha de mantenir el cap en hiperextensió forçada i aplicar un embenat compressiu circular sobre el conducte auditiu.',
        'Fractura de base de crani; està PROHIBIT taponar l’oïda o el nas (augmentaria la pressió intracranial) i només s’hi posa una gasa estèril suaument sense fer pressió.'
      ],
      correctIndex: 3,
      explanation: "Els ulls d'ós rentador, el signe de Battle (hematoma retroauricular) i l'otorràgia/rinorrea de LCR són signes de fractura de base de crani. Està prohibit taponar-ho per no elevar la pressió intracranial (PIC)."
    },
    {
      id: 'q28-9',
      difficulty: 'Mitjà',
      question: "En la RCP bàsica d'un adult i l'ús del DEA (apartats 4.5 i 4.6), quins són els paràmetres exactes de compressió i quins dos ritmes són desfibril·lables?",
      options: [
        'Relació 30:2, ritme 100–120/min, profunditat 5–6 cm (relleu cada 2 min) | Només desfibril·la Fibril·lació Ventricular (FV) i Taquicàrdia Ventricular sense pols (TVsp).',
        'Relació 15:2, ritme 80–100/min, profunditat 3–4 cm (relleu cada 4 min) | Només desfibril·la l’Asistòlia i l’Activitat Elèctrica sense Pols (AESP).',
        'Relació 30:2, ritme 120–140/min, profunditat 7–8 cm (relleu cada 5 min) | Desfibril·la tots els ritmes d’aturada cardíaca, inclosa l’asistòlia sostinguda.',
        'Relació 15:1, ritme 100–110/min, profunditat 4–5 cm (relleu cada 3 min) | Només desfibril·la la Bradicàrdia extrema i la Fibril·lació Auricular ràpida.'
      ],
      correctIndex: 0,
      explanation: "La RCP en adult és 30:2 a 100–120 compressions/min i 5–6 cm de profunditat, amb relleu cada 2 minuts. El DEA només dóna descàrrega en FV i TVsp (mai en asistòlia)."
    },
    {
      id: 'q28-10',
      difficulty: 'Mitjà',
      question: "Com s'ha d'actuar davant d'una obstrucció greu (completa) de la via aèria per cos estrany (OVACE) en un lactant (<1 any) que està conscient?",
      options: [
        'Mantenir el lactant incorporat i animar-lo a tossir sense tocar-lo ni fer cap escombrada, esperant que expulsi el cos estrany de manera espontània.',
        'Aplicar directament sèries de 5 compressions abdominals (maniobra de Heimlich) amb els dos punys per sobre del melic fins a desobstruir la via aèria.',
        'Alternar 5 cops interescapulars a l’esquena (cap avall) amb 5 compressions toràciques amb 2 dits (prohibit fer Heimlich abdominal pel risc de trencar el fetge).',
        'Iniciar immediatament cicles de 30 compressions toràciques i 2 ventilacions de rescat encara que el lactant mantingui la consciència i la respiració agònica.'
      ],
      correctIndex: 2,
      explanation: "En lactants (<1 any) amb OVACE greu conscient està prohibida la maniobra abdominal de Heimlich pel risc de lesió hepàtica; s'alternen 5 cops interescapulars amb 5 compressions toràciques."
    },
    {
      id: 'q28-11',
      difficulty: 'Mitjà',
      question: "Segons la Regla dels 9 de Wallace en un adult (apartat 4.9), quin percentatge de superfície corporal cremada representen les dues cames completes més el tronc anterior, i com s'ha d'extreure correctament una paparra (apartat 4.10)?",
      options: [
        '27% (9% cada cama + 9% pit) | Aplicant oli mineral o vaselina estèril sobre la paparra abans d’estirar-la per asfixiar-la i evitar que es trenqui el cap.',
        '36% (9% cada cama + 18% tronc anterior) | Aproximant una font de calor controlada o alcohol de 96° perquè la paparra deixi anar la pell espontàniament.',
        '45% (18% cada cama + 9% abdomen) | Retorçant-la en sentit horari amb els dits enguantats després d’impregnar-la amb pomada antibiòtica i antisèptic iodat.',
        '54% (18% cada cama + 18% pit/abdomen) | En sec, amb pinces de punta fina arran de pell i tracció perpendicular contínua (prohibit aplicar oli, alcohol o calor).'
      ],
      correctIndex: 3,
      explanation: "Cada extremitat inferior equival al 18% (36% les dues) i el tronc anterior al 18% (total 54%). La paparra s'extreu sempre en sec amb pinces fines arran de pell; oli/alcohol/calor la fan regurgitar bacteris."
    },
    {
      id: 'q28-12',
      difficulty: 'Difícil',
      question: "Quin és el llindar tèrmic d'hipotèrmia i per què s'ha de mobilitzar en horitzontal amb extrema suavitat un hipotèrmic moderat/greu, i quants socorristes participen en el Pont Simple vs. Pont Millorat?",
      options: [
        'Hipotèrmia ≤ 36 °C; es mou incorporat en sedestació per activar el retorn venós cap al cor | Pont Simple = 3 socorristes (2+1); Pont Millorat = 4 socorristes (3+1), donant l’ordre sempre qui subjecta la pelvis.',
        'Hipotèrmia ≤ 35 °C; un moviment brusc envia sang freda perifèrica al cor i pot causar Fibril·lació Ventricular mortal | Pont Simple = 4 socorristes (3+1); Pont Millorat = 5 socorristes (4+1), donant l’ordre sempre qui subjecta el cap.',
        'Hipotèrmia ≤ 32 °C; el risc principal és la fractura òssia per rigidesa muscular i cal fregament vigorós de les extremitats | Pont Simple = 5 socorristes (4+1); Pont Millorat = 6 socorristes (5+1), manant qui porta la llitera.',
        'Hipotèrmia ≤ 35 °C; el moviment brusc només provoca hipertensió transitòria sense risc d’arítmies letals | Pont Simple = 4 socorristes (3+1); Pont Millorat = 5 socorristes (4+1), donant l’ordre sempre qui subjecta les cames.'
      ],
      correctIndex: 1,
      explanation: "La hipotèrmia s'inicia a ≤ 35 °C (<32-28 °C moderada/greu) i els moviments bruscos precipiten fibril·lació ventricular per retorn de sang freda perifèrica. Pont Simple = 3+1 (4); Pont Millorat = 4+1 (5), manant sempre qui controla el cap."
    },
    {
      id: 'q28-13',
      difficulty: 'Mitjà',
      question: "Segons la classificació del xoc hipovolèmic per hemorràgia (Classes I–IV de l'ATLS), quin volum aproximat de pèrdua sanguínia en un adult de 70 kg correspon al Grau III (on apareix clarament hipotensió arterial)?",
      options: [
        "Fins a 750 ml (< 15% de la volèmia).",
        "Entre 750 i 1.500 ml (15–30% de la volèmia).",
        "Entre 1.500 i 2.000 ml (30–40% de la volèmia).",
        "Superior a 2.500 ml (> 50% de la volèmia)."
      ],
      correctIndex: 2,
      explanation: "El xoc hipovolèmic Grau III implica una pèrdua del 30–40% de la volèmia (1.500–2.000 ml en un adult de 70 kg), moment en què fallen els mecanismes compensatoris i cau la pressió arterial sistòlica, amb FC > 120 bpm, FR 30–40 rpm i ansietat/confusió."
    },
    {
      id: 'q28-14',
      difficulty: 'Fàcil',
      question: "Davant d'una obstrucció completa (greu) de la via aèria per cos estrany (OVACE) en un adult conscient que no pot tossir ni parlar, quina és la pauta correcta d'actuació?",
      options: [
        "Animar-lo únicament a tossir amb força mentre se li administren petits glops d'aigua, sense aplicar cops a l'esquena per evitar que el cos estrany baixi més.",
        "Alternar sèries de 5 cops interescapulars a l'esquena amb 5 compressions abdominals (maniobra de Heimlich) fins a resoldre l'obstrucció o que perdi la consciència.",
        "Realitzar directament sèries de 30 compressions toràciques dret contra una paret sense alternar-les amb cops interescapulars ni compressions abdominals.",
        "Fer una escombrada digital a cegues dins la cavitat bucal abans de realitzar cap maniobra de desobstrucció i tot seguit col·locar la víctima en decúbit supí."
      ],
      correctIndex: 1,
      explanation: "En l'OVACE greu en adult conscient (tos ineficaç), el protocol ERC indica alternar 5 cops secs interescapulars a l'esquena amb 5 compressions abdominals (Heimlich). Si queda inconscient, s'inicia RCP immediatament."
    },
    {
      id: 'q28-15',
      difficulty: 'Mitjà',
      question: "Durant una aturada cardiorespiratòria amb dos reanimadors, què ha de fer el primer reanimador mentre el segon arriba amb el DEA i n'enganxa els elèctrodes al tòrax del pacient?",
      options: [
        "Aturar les compressions toràciques des que s'obre el maletí del DEA fins després de la descàrrega per evitar interferències electromagnètiques en la lectura inicial.",
        "Continuar realitzant les compressions toràciques (RCP) sense interrupció mentre l'altre company col·loca els pegats, aturant-se només quan el DEA indiqui que està analitzant el ritme.",
        "Realitzar únicament ventilacions de rescat amb bossa-màscara mentre es col·loquen els pegats al tòrax, suspenent les compressions fins que l'aparell completi la càrrega.",
        "Comprovar el pols carotidi bilateral i la respiració (VOS) durant 30 segons abans d'encendre el DEA i enganxar els elèctrodes sobre la pell seca del pacient."
      ],
      correctIndex: 1,
      explanation: "Per minimitzar les pauses sense flux sanguini, un reanimador manté les compressions toràciques mentre l'altre encén el DEA i col·loca els elèctrodes; només s'atura el massatge quan el DEA ordena no tocar el pacient per analitzar o descarregar."
    },
    {
      id: 'q28-16',
      difficulty: 'Fàcil',
      question: "En un lactant (< 1 any), quina és la localització anatòmica recomanada per comprovar el pols arterial central?",
      options: [
        "A l'artèria radial, a la cara anterior i lateral del canell, just per sota del polze.",
        "A l'artèria braquial (humeral), a la cara interna del braç entre el colze i l'aixella.",
        "A l'artèria pèdia dorsal, a la cara superior de l'empenya del peu, prop dels dits.",
        "A l'artèria caròtide primitiva, a la cara anterolateral del coll, al costat de la tràquea."
      ],
      correctIndex: 1,
      explanation: "En lactants, el coll curt i adipós dificulta palpar el pols carotidi, per la qual cosa es recomana palpar el pols braquial a la cara interna del braç (o alternativament el femoral)."
    },
    {
      id: 'q28-17',
      difficulty: 'Fàcil',
      question: "En terminologia anatòmica i d'assistència sanitària, què indica el moviment o posició de supinació de l'avantbraç i la mà?",
      options: [
        "Girar l'avantbraç de manera que el palmell de la mà quedi orientat cap avall o cap enrere.",
        "Girar l'avantbraç de manera que el palmell de la mà quedi orientat cap amunt o cap endavant.",
        "Doblegar el canell lateralment cap al dit petit.",
        "Estirar completament el membre inferior cap enrere."
      ],
      correctIndex: 1,
      explanation: "La supinació orienta el palmell de la mà cap amunt (o cap endavant en posició anatòmica), en contraposició a la pronació, que l'orienta cap avall o cap enrere."
    },
    {
      id: 'q28-18',
      difficulty: 'Mitjà',
      question: "En la terminologia clínica del capítol 2 de MAN.SANI.000, quina diferència hi ha entre un SIGNE i un SÍMPTOMA, i quin dels següents exemples és un signe?",
      options: [
        "El signe és una sensació subjectiva que relata la víctima i el símptoma és una dada objectiva mesurable; per exemple, el mareig o les nàusees són signes clínics directes.",
        "El signe és una dada objectiva i mesurable pel socorrista (p. ex., cianosi, FC de 125 bpm o anisocòria), mentre que el símptoma és una sensació subjectiva que només pot explicar el pacient (p. ex., dolor, mareig o nàusees).",
        "Tots dos termes són sinònims clínics equivalents en la valoració XABCDE i s'utilitzen indistintament tant per a les constants vitals com per a la intensitat del dolor referida.",
        "El dolor toràcic opressiu i les nàusees són signes objectius perquè es poden interrogar amb l'esquema SPUMA, mentre que la temperatura de 39 °C i la cianosi són símptomes."
      ],
      correctIndex: 1,
      explanation: "Els signes són dades objectives observables o mesurables (pols, Tª, cianosi, pupil·les), mentre que els símptomes són percepcions subjectives descrites pel pacient (dolor, mareig, nàusees)."
    },
    {
      id: 'q28-19',
      difficulty: 'Mitjà',
      question: "En valorar les pupil·les d'un traumatitzat cranioencefàlic (pas D del XABCDE) i calcular l'Escala de Glasgow, quina afirmació és INCORRECTA?",
      options: [
        "L'anisocòria (una pupil·la més dilatada que l'altra) és un signe d'alerta de TCE greu o compressió cerebral.",
        "La miosi (pupil·les puntuals contretes) es pot observar en intoxicacions per opiacis o organofosforats.",
        "En l'Escala de Glasgow, la puntuació mínima possible d'una víctima és 0 punts (0+0+0) i la rigidesa de decorticació val 2 punts.",
        "Una puntuació de Glasgow ≤ 8 punts defineix un TCE greu amb pèrdua de reflexos protectors de la via aèria."
      ],
      correctIndex: 2,
      explanation: "És incorrecte: la puntuació mínima de Glasgow és sempre 3 punts (1 ocular + 1 verbal + 1 motora, mai 0), i la flexió anormal (decorticació) puntua 3 a la resposta motora (la descerebració/extensió anormal puntua 2)."
    }
  ]
};
