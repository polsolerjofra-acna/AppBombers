export const tema27Inundacions = {
  id: 'tema-34',
  number: 34,
  code: 'MAN.SVMN.001',
  title: 'Intervenció Bàsica en Inundacions, Hidrologia, Llindars SMC i Rescat Aquàtic',
  category: 'Manual Operatiu SGO — Salvament Aquàtic i Inundacions',
  estimatedMinutes: 50,
  importance: {
    title: "Radar d'Examen — Tema 34 (MAN.SVMN.001 v.1): Inundacions, Període de Retorn i SMC",
    frequency: 'Molt Alta (3-4 preguntes fixes sobre T10/T50/T100/T500, llindars SMC 20/40 mm i 100/200 mm, maniobres i límits Douglas)',
    summary:
      "Manual d'inundacions i rescat aquàtic: impacte (> 40%) i riuades històriques (Vallès 1962 ~1.000 morts, Francolí 2019), dinàmica fluvial (meandre exterior i aiguabarreig), Període de Retorn (T10=10%, T50=2%, T100=1%, T500=0,2%), llindars SMC (30 min >20/>40 mm; 24 h >100/>200 mm, escala 0–6), maniobres (Indirectes prioritàries, Combinades desembragables), límits Douglas (≤2,5 m / Grau 4) i zonatge aquàtic.",
    hotTopics: [
      'Cap. 1: Les inundacions representen > 40% dels desastres naturals mundials. Episodis a Catalunya: Vallès Occidental 1962 (≈ 1.000 morts), Bages/Baix Llobregat 1971 (21 morts), Francolí 2019 (amb GREC). Mesures estructurals (dics, basses laminació) vs. no estructurals (INUNCAT).',
      'Cap. 2: Meandre (erosió i risc d’esfondrament del marge a la PART EXTERIOR de la corba!), Aiguabarreig (confluència) i Període de Retorn (P = 1/T: T10 = 10% [freqüent T10/T25]; T50 = 2% [ocasional T50/T100]; T100 = 1% [urbanisme]; T500 = 0,2% [excepcional]).',
      'Cap. 3: Llindars SMP del SMC: Intensitat en 30 min (Baix > 20 mm / Alt > 40 mm) i Acumulació en 24 h (Baix > 100 mm / Alt > 200 mm). Matriu de perill de 0 a 6 (1-3 baix; 4-6 alt). Visors: Aforadors ACA (conques internes) i SAIH Ebro.',
      'Cap. 4-5: Buidatge, contenció i Potabilització (1. Clarificació + 2. Desinfecció). Les 3 maniobres de rescat: 1) Indirectes (sense entrar a l’aigua: PRIORITÀRIES!), 2) Directes i 3) Combinades (assegurat amb corda al sistema DESEMBRAGABLE de l’armilla!). Límits NO especialistes: evitar mar > 2,5 m (Grau 5 Maregassa), rius Grau > 3 o maniobres de desembossament. Zonatge: Zona Calenta = Zona d’Aigua + Zona Humida; guaita aigües amunt i seguretat aigües avall.'
    ],
    traps: [
      'Confondre la probabilitat anual d’un Període de Retorn T50 (P = 1/50 = 0,02 = 2% anual, NO pas 50%!) o T500 (P = 1/500 = 0,2% anual, NO pas 5%)!',
      'Lligar un bomber amb un nus fix a una corda dins d’un riu amb corrent fort: és MORTAL perquè la pressió de l’aigua el submergeix! En maniobres combinades la corda ha d’anar SEMPRE a la zafada ràpida (sistema DESEMBRAGABLE) de l’armilla o a un cap flotant!',
      'Confondre on s’erosiona un meandre: el corrent colpeja i excava la PART EXTERIOR de la corba (on el marge pot col·lapsar sota els peus o el camió!), mentre que a la part interior sedimenta.'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-2 Història i Retorn (T)',
      title: '1–2. Impacte Històric a Catalunya, Dinàmica Fluvial i Període de Retorn (T10 a T500)',
      subtitle: 'Vallès 1962 (~1.000 morts), meandre exterior, aiguabarreig i càlcul de la probabilitat anual (P = 1/T).',
      blocks: [
        {
          type: 'text',
          heading: '1. Impacte de les Inundacions (> 40%) i Episodis Històrics a Catalunya',
          paragraphs: [
            "Les inundacions representen MÉS DEL 40% (> 40%) de tots els desastres naturals mundials. A Catalunya destaquen les riuades del Vallès Occidental de 1962 (≈ 1.000 morts), les de 1971 al Bages i Baix Llobregat (21 morts), Tarragona 1994, el riu Francolí el 2019 (amb actuació del GREC) i les Terres de l'Ebre (Alcanar 2018, 2021, 2023).",
            "La protecció combina MESURES ESTRUCTURALS (dics, canalitzacions, basses de laminació, clavegueram) i MESURES NO ESTRUCTURALS (urbanisme, mapes de risc, alertes SMC i el pla INUNCAT).",
            "El GRAE Subaquàtic (amb seu a Cerdanyola) disposa d'embarcacions pneumàtiques tipus RAFT, propulsors aquàtics, robots submarins ROV i equips de busseig."
          ]
        },
        {
          type: 'text',
          heading: '2.1–2.4. Dinàmica Fluvial (Meandres i Aiguabarreig) i Període de Retorn (T)',
          paragraphs: [
            "Un riu es divideix en curs Alt (erosió), Mitjà (transport i meandres) i Baix (sedimentació i delta). A Catalunya, les rieres i rambles de règim efímer generen crescudes sobtades molt perilloses (flash floods).",
            "• MEANDRE: A la PART EXTERIOR de la corba la velocitat i l'erosió són màximes i el talús es pot esfondrar sota un camió o bomber (a l'interior hi ha sedimentació). • AIGUABARREIG: Confluència de dos rius on es multiplica el cabal i la turbulència."
          ]
        },
        {
          type: 'table',
          title: '2.4. Taula Oficial del Període de Retorn (T) i Probabilitat Anual (MAN.SVMN.001)',
          subtitle: 'Fórmula P (%) = (1 / T) × 100 — Pregunta segura d’examen!',
          headers: ['Període de Retorn (T)', 'Probabilitat que passi en 1 Any', 'Classificació Oficial de la Zona Inundable'],
          rows: [
            ['T = 10 anys (T10)', '10% anual (1 / 10)', 'Zona d’inundació FREQÜENT (cobreix T10 i T25 = 4% anual)'],
            ['T = 50 anys (T50)', '2% anual (1 / 50)', 'Zona d’inundació OCASIONAL (T50 a T100)'],
            ['T = 100 anys (T100)', '1% anual (1 / 100)', 'Inundació GREU · Referència principal de limitació en planificació urbanística'],
            ['T = 500 anys (T500)', '0,2% anual (1 / 500)', 'Zona d’inundació EXCEPCIONAL (màxima extensió cartografiada a l’INUNCAT)']
          ],
          footnote: 'Truc matemàtic: Divideix sempre 100 entre els anys T! T10 → 100/10 = 10%; T50 → 100/50 = 2%; T100 → 100/100 = 1%; T500 → 100/500 = 0,2%.'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 3 Llindars SMC i Visors',
      title: '3. Meteorologia Operativa: Llindars SMP del SMC (30 min i 24 h), Escala 0–6 i Visors',
      subtitle: 'Intensitat (> 20 / > 40 mm en 30 min) vs. Acumulació (> 100 / > 200 mm en 24 h), ACA i SAIH Ebro.',
      blocks: [
        {
          type: 'text',
          heading: '3.1–3.3. Avisos SMP del Servei Meteorològic de Catalunya (SMC) i Visors',
          paragraphs: [
            "L'SMC emet avisos de Situació Meteorològica de Perill (SMP) per pluja amb dos paràmetres (1 mm = 1 L/m²): 1) INTENSITAT EN 30 MINUTS (xàfecs torrencials: Baix > 20 mm / Alt > 40 mm) i 2) ACUMULACIÓ EN 24 HORES (temporals persistents: Baix > 100 mm / Alt > 200 mm).",
            "La Matriu de Perill de l'SMC assigna un nivell de 0 a 6: Nivell 0 = Verd (sense perill); Nivells 1–3 = llindar baix superat (Groc/Taronja); Nivells 4–6 = llindar alt superat (Taronja/Vermell).",
            "Per seguir el cabal dels rius en m³/s en temps real consultem els Aforadors de l'ACA (conques internes de Catalunya) i el visor SAIH Ebro (conca de l'Ebre)."
          ]
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! Període de Retorn (T10/T100/T500) i Llindars SMC (30 min vs. 24 h)',
          paragraphs: [
            "• PERÍODE DE RETORN (P = 1/T): T50 NO vol dir 50% anual, sinó 1/50 = 2% anual! T10 = 10% (freqüent); T100 = 1% (referència urbanística); T500 = 0,2% (excepcional).",
            "• LLINDARS SMC: En 30 minuts = 20 mm (baix) i 40 mm (alt); en 24 hores = 100 mm (baix) i 200 mm (alt). El llindar alt és sempre el DOBLE del baix."
          ]
        },
        {
          type: 'table',
          title: 'Llindars Oficials d’Avís SMP per Pluja del SMC i Escala 0–6 (MAN.SVMN.001 Cap. 3)',
          subtitle: 'Xifres exactes en mm (L/m²) per a 30 minuts i 24 hores',
          headers: ['Paràmetre Meteorològic SMC', 'Llindar Superat BAIX (Graus 1–3)', 'Llindar Superat ALT (Graus 4–6)', 'Risc Operatiu Associat'],
          rows: [
            ['Intensitat de Pluja (en 30 minuts)', '> 20 mm en 30 min (20 L/m²)', '> 40 mm en 30 min (40 L/m²)', 'Crescudes sobtades (flash floods) en rieres, torrents i passos soterrats'],
            ['Acumulació de Pluja (en 24 hores)', '> 100 mm en 24 h (100 L/m²)', '> 200 mm en 24 h (200 L/m²)', 'Desbordament de grans rius, saturació del terreny i esllavissades'],
            ['Matriu de Perill SMC (Escala 0 a 6)', '0 = Verd | 1–2 = Groc | 3 = Taronja', '4 = Taronja | 5–6 = Vermell (Màxim)', 'Combina el llindar físic amb la probabilitat d’ocurrència'],
            ['Visors Hidrològics en Temps Real', 'ACA (Conques Internes)', 'SAIH Ebro (Conca de l’Ebre)', 'Mostren l’hidrograma de cabal (m³/s) i l’alçada de làmina d’aigua']
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 4-5 Maniobres i Seguretat',
      title: '4–5. Maniobres (Indirectes, Directes, Combinades), Límits Douglas i Zonatge Aquàtic',
      subtitle: 'Prioritat de maniobres indirectes, sistema desembragable, límit mar 2,5 m / riu Grau 3 i Zona d’Aigua + Humida.',
      blocks: [
        {
          type: 'text',
          heading: '4.1–4.4. Buidatge, Potabilització i Les 3 Categories de Rescat Aquàtic',
          paragraphs: [
            "Les tasques de suport inclouen buidatge (autobombes, motobombes, electrobombes submergibles, turbobombes, hidroerenjadors i bombes de llots per a fang), contenció (sacs terrers, gabions) i potabilització en 2 fases: 1a Clarificació + 2a Desinfecció.",
            "Les maniobres de rescat aquàtic es divideixen en 3 categories: 1) INDIRECTES (des de fora amb bossa de rescat, perxa, mànega inflada o AEA: són SEMPRE PRIORITÀRIES!), 2) DIRECTES (nedant fins a la víctima, risc molt alt) i 3) COMBINADES (entrar assegurat amb corda).",
            "⚠️ En maniobres COMBINADES la corda MAI es lliga fixa al cos: va al sistema DESEMBRAGABLE (zafada ràpida) de l'armilla o a un cap flotant per evitar morir ofegat per la força del corrent!"
          ]
        },
        {
          type: 'diagram',
          title: 'Zonatge Aquàtic (Zona d’Aigua + Zona Humida), Meandre Exterior i Períodes de Retorn / SMC',
          diagramType: 'flood_zones',
          caption:
            'Esquerra: la Zona Calenta integra la Zona d’Aigua i la Zona Humida (marges); sempre amb Guaita AIGÜES AMUNT, equip de seguretat AIGÜES AVALL i vigilant l’erosió a la corba exterior del meandre. Dreta: resum de T10–T500, llindars SMC i límits Douglas.'
        },
        {
          type: 'table',
          title: '5.1–5.5. Límits Operatius per a NO Especialistes, Escala Douglas i Zonatge (MAN.SVMN.001)',
          subtitle: 'Frontera d’actuació entre dotacions de parc i especialistes GRAE',
          headers: ['Àmbit de Seguretat Aquàtica', 'Límit Oficial / Estructura del Manual', 'Regla d’Autoprotecció Obligatòria'],
          rows: [
            ['Límit al Mar (Escala Douglas)', 'Evitar entrar amb onatge > 2,5 m (Maregassa = Grau 5 Douglas: 2,5 a 4 m)', 'Fins a Forta Maror (Grau 4 Douglas: 1,25 a 2,5 m) és el límit màxim per a no especialistes'],
            ['Límit en Rius i Desembossament', 'Evitar entrar en rius d’aigües braves de Grau > 3 (Escala I–VI)', 'PROHIBIT a no especialistes entrar a l’aigua per a maniobres de DESEMBOSSAMENT (efecte sifó mortal!)'],
            ['Zonatge en Rescat Aquàtic (5.4)', 'ZONA CALENTA = Zona d’Aigua (crítica) + Zona Humida (marges amb risc de caiguda)', 'A la Zona Humida és obligatori portar armilla de flotació i casc (i MAI l’EPI de foc pesant que s’enfonsa!)'],
            ['Dispositiu de Seguretat al Riu', 'Regla "Un dins / un fora" · Guaita AIGÜES AMUNT · Seguretat AIGÜES AVALL', 'El guaita aigües amunt avisa amb xiulet si baixa un tronc o onada; l’equip aigües avall té bosses de corda a punt']
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Mode Nen Petit i Trucs',
      title: 'Síntesi Visual i Trucs Mnemotècnics: Períodes de Retorn, SMC i Seguretat al Riu',
      subtitle: 'Com memoritzar totes les xifres del manual MAN.SVMN.001 en 1 minut.',
      blocks: [
        {
          type: 'easy',
          title: 'Mode Nen Petit: Per què l’EPI de foc és una àncora mortal a l’aigua i el truc del "20/40 i 100/200"',
          metaphor:
            'Tres regles vitals que salven vides i punts a l’examen:',
          explanation:
            "• 1. ZONA HUMIDA = ARMILLA I CASC (mai jaquetó ni botes de foc!): si caus a l'aigua, el vestit de foc pesa desenes de quilos i t'enfonsa.\n• 2. AL RIU: Guaita AIGÜES AMUNT (avisa de troncs i crescudes) | Equip de Seguretat AIGÜES AVALL (pesca amb bosses de rescat).\n• 3. LLINDARS SMC: 30 min = >20 i el doble (>40 mm) | 24 h = >100 i el doble (>200 mm)!",
          takeaway: 'SMC 30 min = >20 / >40 mm | SMC 24 h = >100 / >200 mm | Mar màx. = 2,5 m (Grau 4) | Riu màx. = Grau 3.'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · Resum 1/2',
      title: 'Resum Imprescindible d’Examen (1/2) — Història, Hidrologia, Període de Retorn i SMC',
      subtitle: 'Síntesi d’alta densitat dels Capítols 1, 2 i 3 del manual MAN.SVMN.001.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 1: Dades Històriques, Períodes de Retorn i Llindars SMC',
          subtitle: 'Totes les xifres dels Capítols 1, 2 i 3',
          headers: ['Concepte', 'Dada Oficial Exacta', 'Detall d’Examen'],
          rows: [
            ['Impacte Mundial i Història', '> 40% dels desastres mundials · Vallès 1962 (≈ 1.000 morts) · 1971 (21 morts)', 'Francolí 2019 (amb GREC) · Terres de l’Ebre 2018/2021/2023'],
            ['Meandre i Aiguabarreig', 'Meandre: erosió i col·lapse del marge a la PART EXTERIOR de la corba', 'Aiguabarreig = confluència de dos rius on es multiplica el cabal'],
            ['Període de Retorn (P = 1/T)', 'T10 = 10% · T50 = 2% · T100 = 1% · T500 = 0,2% de probabilitat anual', 'Freqüent (T10/T25), Ocasional (T50/T100), Excepcional (T500)'],
            ['Intensitat Pluja SMC (30 min)', 'Llindar Baix: > 20 mm / 30 min · Llindar Alt: > 40 mm / 30 min', '1 mm = 1 L/m² (xàfecs torrencials sobtats)'],
            ['Acumulació Pluja SMC (24 h)', 'Llindar Baix: > 100 mm / 24 h · Llindar Alt: > 200 mm / 24 h', 'Matriu SMC escala 0 a 6 (1–3 llindar baix; 4–6 llindar alt)'],
            ['Visors Hidrològics Oficials', 'ACA (conques internes de Catalunya) i SAIH Ebro (conca de l’Ebre)', 'Mesuren cabal en m³/s i nivell dels rius en temps real']
          ]
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · Resum 2/2',
      title: 'Resum Imprescindible d’Examen (2/2) — Maniobres Aquàtiques, Límits Douglas i Zonatge',
      subtitle: 'Síntesi d’alta densitat dels Capítols 4 i 5 del manual MAN.SVMN.001.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 2: Operativa i Seguretat en Rescat Aquàtic',
          subtitle: 'Totes les regles dels Capítols 4 i 5',
          headers: ['Àmbit Operatiu', 'Regla i Límits Oficials del Manual MAN.SVMN.001', 'Punt Crític de Seguretat'],
          rows: [
            ['Potabilització d’Aigua', '2 fases: 1. Clarificació (filtració/decantació) + 2. Desinfecció', 'Buidatge de fang i sòlids amb bombes de llots'],
            ['3 Categories de Maniobres', '1. Indirectes (sense entrar a l’aigua: PRIORITÀRIES!) · 2. Directes · 3. Combinades', 'En les Combinades la corda va al sistema DESEMBRAGABLE de l’armilla!'],
            ['Límits NO Especialistes', 'Evitar Mar > 2,5 m (Grau 5 Maregassa) · Riu Grau > 3 · Desembossament', 'Forta Maror (Grau 4 Douglas = 1,25 a 2,5 m) és el topall màxim'],
            ['Zonatge Aquàtic (5.4)', 'Zona Calenta = Zona d’Aigua (crítica) + Zona Humida (marges/riberes)', 'A la Zona Humida és obligatori armilla i casc (mai EPI de foc!)'],
            ['Seguretat al Riu (LACES)', 'Regla "Un dins / un fora" · Guaita AIGÜES AMUNT · Seguretat AIGÜES AVALL', 'Evitar l’efecte sifó en reixes, embornals i arbres atravessats']
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't34-q1',
      difficulty: 'Fàcil',
      question: 'Segons la taula de l’apartat 2.4 del manual MAN.SVMN.001, quina és la probabilitat anual que es produeixi una inundació de Període de Retorn T = 10 anys, T = 50 anys, T = 100 anys i T = 500 anys?',
      options: [
        'T10: 90% | T50: 50% | T100: 10% | T500: 5%.',
        'T10: 10% anual | T50: 2% anual | T100: 1% anual | T500: 0,2% anual.',
        'T10: 1% | T50: 5% | T100: 10% | T500: 50%.',
        'Totes tenen una probabilitat del 50% cada any.'
      ],
      correctIndex: 1,
      explanation: 'La probabilitat anual és P = (1 / T) × 100: T10 = 10%, T50 = 2%, T100 = 1% i T500 = 0,2%.'
    },
    {
      id: 't34-q2',
      difficulty: 'Mitjà',
      question: 'Quins són els llindars baix i alt del Servei Meteorològic de Catalunya (SMC) per emetre avís SMP per INTENSITAT de pluja (en 30 minuts) i per ACUMULACIÓ de pluja (en 24 hores)?',
      options: [
        'Intensitat 30 min: > 5 mm / > 10 mm | Acumulació 24 h: > 20 mm / > 40 mm.',
        'Intensitat en 30 min: Llindar baix > 20 mm i Llindar alt > 40 mm | Acumulació en 24 h: Llindar baix > 100 mm i Llindar alt > 200 mm.',
        'Intensitat 30 min: > 100 mm | Acumulació 24 h: > 500 mm.',
        'Intensitat 30 min: > 50 mm / > 100 mm | Acumulació 24 h: > 300 mm / > 600 mm.'
      ],
      correctIndex: 1,
      explanation: 'Capítol 3 del manual MAN.SVMN.001: Intensitat en 30 minuts = baix > 20 mm i alt > 40 mm; Acumulació en 24 hores = baix > 100 mm i alt > 200 mm.'
    },
    {
      id: 't34-q3',
      difficulty: 'Mitjà',
      question: 'Segons el Capítol 5.1 del manual MAN.SVMN.001, quins són els 3 límits de seguretat que NO han d’ultrapassar mai els rescatadors NO especialitzats (dotacions de parc no GRAE) en medi aquàtic?',
      options: [
        'No entrar si l’aigua fa més de 50 cm de fondària.',
        'Evitar entrar al mar amb onatge > 2,5 m (a partir de Maregassa, Grau 5 Douglas), evitar entrar en rius d’aigües braves de Grau > 3 i no entrar a l’aigua per fer maniobres de desembossament.',
        'Evitar entrar al mar amb onatge > 6 m i en rius de Grau > 6.',
        'Poden entrar en qualsevol estat de la mar si porten corda.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 5.1 del manual: els rescatadors no especialitzats han d’evitar entrar a l’aigua amb onatge al mar > 2,5 m (Grau 4 Forta Maror és el límit: 1,25–2,5 m), en rius de grau > 3 o en maniobres de desembossament.'
    },
    {
      id: 't34-q4',
      difficulty: 'Fàcil',
      question: 'De les 3 categories de maniobres de rescat aquàtic (Indirectes, Directes i Combinades), quines són sempre les PRIORITÀRIES i com s’ha de subjectar la corda en una maniobra combinada?',
      options: [
        'Les Directes són prioritàries; en les combinades es lliga la corda amb un nus de vuit fix a la cintura del bomber.',
        'Les INDIRECTES (des de fora de l’aigua: bossa de corda, perxa, AEA) són sempre les prioritàries; en les Combinades la corda ha d’anar connectada al sistema DESEMBRAGABLE (zafada ràpida) de l’armilla o a un cap flotant.',
        'Les Combinades amb EPI de foc complet.',
        'Les Directes sense armilla per nedar més ràpid.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 4.4 del manual: les maniobres indirectes són prioritàries perquè no exposen cap bomber dins del corrent; en les combinades la subjecció ha de ser sempre desembragable.'
    },
    {
      id: 't34-q5',
      difficulty: 'Mitjà',
      question: 'Com es subdivideix la Zona Calenta en una intervenció de rescat aquàtic segons l’apartat 5.4 del manual MAN.SVMN.001?',
      options: [
        'En Zona de Foc i Zona de Fum.',
        'En Zona d’Aigua (o crítica, la llera inundada) i Zona Humida (els marges i riberes amb risc de caiguda a l’aigua, on ja és obligatori l’EPI aquàtic i prohibit l’EPI de foc).',
        'En Primer Cercle i Segon Cercle.',
        'En Zona Nord i Zona Sud.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 5.4: la Zona Calenta aquàtica comprèn tant la Zona d’Aigua (crítica) com la Zona Humida (franja de ribera propera amb risc de relliscada o esfondrament).'
    },
    {
      id: 't34-q6',
      difficulty: 'Fàcil',
      question: 'En un meandre (corba) d’un riu crescut, quina part de la corba pateix la màxima velocitat, erosió i risc de col·lapse del marge sota els peus dels bombers o dels vehicles?',
      options: [
        'La part interior de la corba.',
        'La part EXTERIOR de la corba del meandre.',
        'El centre exacte del riu.',
        'En un meandre no hi ha erosió.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 2.3 del manual: per força centrífuga el corrent colpeja i soscava la part exterior de la corba del meandre, podent fer cedir el talús.'
    },
    {
      id: 't34-q7',
      difficulty: 'Fàcil',
      question: 'En el dispositiu de seguretat d’un rescat en riu, on s’ubica el bomber GUAITA i on s’ubica l’equip de SEGURETAT amb bosses de rescat?',
      options: [
        'Tots dos s’ubiquen aigües avall.',
        'El Guaita s’ubica AIGÜES AMUNT (per alertar d’objectes flotants o crescudes) i l’equip de Seguretat s’ubica AIGÜES AVALL (per recuperar qualsevol rescatador o víctima arrossegada).',
        'El Guaita s’ubica aigües avall i la seguretat aigües amunt.',
        'Tots dos dins de l’aigua.'
      ],
      correctIndex: 1,
      explanation: 'Capítol 5 del manual: Guaita sempre aigües amunt i línia de seguretat/recuperació sempre aigües avall del punt de treball.'
    },
    {
      id: 't34-q8',
      difficulty: 'Mitjà',
      question: 'Quin percentatge dels desastres naturals mundials representen les inundacions i quin va ser l’episodi més mortífer de la història contemporània a Catalunya citat al Capítol 1?',
      options: [
        'El 10%; els aiguats de 2019.',
        'Més del 40% (> 40%) dels desastres naturals mundials; les riuades del Vallès Occidental del setembre de 1962 (amb prop de 1.000 morts).',
        'El 80%; les inundacions de 1994.',
        'El 5%; la riuada de 1971.'
      ],
      correctIndex: 1,
      explanation: 'Capítol 1 del manual MAN.SVMN.001: les inundacions suposen > 40% dels desastres naturals mundials, i la catàstrofe del Vallès de 1962 va causar prop d’un miler de víctimes mortals.'
    },
    {
      id: 't34-q9',
      difficulty: 'Fàcil',
      question: 'Quines són les 2 fases del procés de potabilització d’aigua en emergències descrites a l’apartat 4.3 del manual?',
      options: [
        '1. Ebullició i 2. Congelació.',
        '1. Clarificació (eliminació de matèria en suspensió i terbolesa) i 2. Desinfecció (eliminació de microorganismes patògens).',
        '1. Salinització i 2. Bombament.',
        'Només s’hi tira escumogen.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 4.3: la potabilització consta de dues etapes consecutives: 1) Clarificació i 2) Desinfecció.'
    },
    {
      id: 't34-q10',
      difficulty: 'Fàcil',
      question: 'Quins dos visors hidrològics oficials s’utilitzen a Catalunya per consultar en temps real el cabal dels rius de les conques internes i de la conca de l’Ebre?',
      options: [
        'Google Maps i Waze.',
        'El visor d’aforadors de l’ACA (Agència Catalana de l’Aigua, conques internes) i el visor SAIH Ebro (conca hidrogràfica de l’Ebre).',
        'El visor d’ADIF i el d’AENA.',
        'Només el baròmetre del parc.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 3.3 del manual: l’ACA gestiona els aforadors de les conques internes i la CHE gestiona el sistema SAIH Ebro.'
    },
    {
      id: 't34-q11',
      difficulty: 'Mitjà',
      question: 'Durant una riuada en un meandre pronunciat amb una persona dalt d’un vehicle atrapat al marge exterior, un bomber pretén acostar-se a la vora de la riba exterior amb el jaquetó i les botes d’incendi estructural per llançar una corda. Quins dos riscos greus incompleix segons MAN.SVMN.001?',
      options: [
        'Cap risc, perquè a la part exterior del meandre l’aigua va més lenta i el jaquetó de foc sura com una armilla.',
        'Incompleix que a la part exterior del meandre hi ha màxima erosió i risc de col·lapse del marge sota el pes, i que a la Zona Humida està prohibit l’EPI de foc (s’amara i enfonsa) sent obligatòria l’armilla de flotació i casc.',
        'Només incompleix l’ordre de potabilització de l’aigua.',
        'El risc afecta únicament a la corba interior del meandre on hi ha sedimentació.'
      ],
      correctIndex: 1,
      explanation: 'Doble risc clàssic: 1) la corba exterior del meandre pateix màxima velocitat, soscavació i risc d’esfondrament; 2) a la Zona Humida és obligatori portar armilla de flotació i casc, i mai EPI estructural de foc.'
    },
    {
      id: 't34-q12',
      difficulty: 'Mitjà',
      question: 'En un episodi meteorològic a Catalunya s’han registrat 45 mm de pluja en 30 minuts en una comarca del litoral, i 130 mm acumulats en 24 hores en una comarca del Pirineu. Quins llindars SMP del Servei Meteorològic de Catalunya s’han superat en cada cas?',
      options: [
        '45 mm/30 min = Llindar baix d’intensitat | 130 mm/24 h = Llindar alt d’acumulació.',
        '45 mm/30 min = Llindar ALT d’intensitat (> 40 mm/30 min) | 130 mm/24 h = Llindar BAIX d’acumulació (> 100 mm/24 h, sense arribar a > 200 mm).',
        'Cap dels dos supera el llindar baix de l’SMC.',
        'Tots dos superen el llindar alt (Nivell 6).'
      ],
      correctIndex: 1,
      explanation: 'Intensitat en 30 min: Baix > 20 mm / Alt > 40 mm (45 mm supera el llindar alt). Acumulació en 24 h: Baix > 100 mm / Alt > 200 mm (130 mm supera el llindar baix, però no l’alt).'
    },
    {
      id: 't34-q13',
      difficulty: 'Fàcil',
      question: 'A l’escala de la Matriu de Perill de l’SMC (de 0 a 6), a quins graus correspon la superació del llindar baix i a quins la del llindar alt, i a quants litres per metre quadrat equival 1 mm de precipitació?',
      options: [
        'Llindar baix: graus 1–3 | Llindar alt: graus 4–6 | 1 mm = 1 L/m².',
        'Llindar baix: graus 0–2 | Llindar alt: graus 3–5 | 1 mm = 10 L/m².',
        'Llindar baix: graus 4–6 | Llindar alt: graus 1–3 | 1 mm = 0,1 L/m².',
        'Només existeix escala d’1 a 3 i 1 mm = 100 L/m².'
      ],
      correctIndex: 0,
      explanation: 'La Matriu de Perill SMC va de 0 (Verd, sense perill) a 6: els nivells 1–3 corresponen a la superació del llindar baix i els nivells 4–6 a la superació del llindar alt. 1 mm de pluja equival exactament a 1 L/m².'
    },
    {
      id: 't34-q14',
      difficulty: 'Difícil',
      question: 'Respecte a la classificació oficial dels Períodes de Retorn (T) i zones inundables del Capítol 2.4 de MAN.SVMN.001, assenyala quina afirmació és INCORRECTA:',
      options: [
        'Un període de retorn T = 10 anys correspon a una probabilitat anual del 10% (zona d’inundació freqüent).',
        'Un període de retorn T = 100 anys correspon a una probabilitat anual de l’1% i és la referència principal en planificació urbanística.',
        'Un període de retorn T = 500 anys correspon a una probabilitat anual del 0,2% (zona d’inundació excepcional).',
        'Un període de retorn T = 50 anys significa que cada any hi ha exactament un 50% de probabilitat que es produeixi la riuada.'
      ],
      correctIndex: 3,
      explanation: 'És incorrecte: la probabilitat anual és P = (1 / T) × 100. Per a T = 50 anys, P = 1/50 = 0,02 = 2% anual (mai el 50%!).'
    },
    {
      id: 't34-q15',
      difficulty: 'Difícil',
      question: 'Sobre les categories de rescat aquàtic i les normes de seguretat al riu (MAN.SVMN.001 Cap. 4–5), assenyala quina afirmació és INCORRECTA:',
      options: [
        'Les maniobres indirectes (bossa de rescat, perxa, AEA) sense que el bomber entri dins l’aigua són sempre les prioritàries.',
        'En les maniobres combinades, la corda que assegura el rescatador des de la riba ha d’anar connectada al sistema desembragable (zafada ràpida) de l’armilla o a un cap flotant.',
        'En un rescat amb corda en corrent fort, el procediment més segur és lligar la corda directament al cos del rescatador amb un nus de vuit fix perquè el corrent no el separi de la línia.',
        'La regla de seguretat al riu estableix "Un dins / un fora", amb un guaita situat aigües amunt i un equip de seguretat situat aigües avall.'
      ],
      correctIndex: 2,
      explanation: 'És incorrecte (i mortal!): lligar un bomber amb un nus fix al cos dins d’un corrent fort provoca que la pressió hidrodinàmica l’enfonsi sota l’aigua sense poder alliberar-se; ha d’anar sempre a un sistema desembragable.'
    },
    {
      id: 't34-q16',
      difficulty: 'Mitjà',
      question: 'D’acord amb l’escala de l’estat de la mar de Douglas i la graduació d’aigües braves (Cap. 5.1 de MAN.SVMN.001), quin és el límit màxim d’onatge i de grau de riu per a dotacions no especialistes (no GRAE)?',
      options: [
        'Al mar fins a Grau 4 Douglas (Forta Maror: 1,25 a 2,5 m; evitar entrar amb > 2,5 m = Grau 5 Maregassa) i en rius fins a Grau 3 (evitar Grau > 3 i maniobres de desembossament).',
        'Al mar fins a Grau 6 Douglas (4 a 6 m) i en rius fins a Grau 5.',
        'Al mar màxim 0,5 m (Grau 2) i en rius Grau 1 exclusivament.',
        'No hi ha cap límit d’onatge si el bomber porta botes d’intervenció urbana.'
      ],
      correctIndex: 0,
      explanation: 'El manual fixa com a límits per a no especialistes: al mar evitar onatge > 2,5 m (Maregassa Grau 5; topall Grau 4 Forta Maror 1,25–2,5 m), en rius evitar Grau > 3 i no entrar per desembossar (efecte sifó).'
    },
    {
      id: 't34-q17',
      difficulty: 'Fàcil',
      question: 'Dins la gestió del risc d’inundacions (Cap. 1 de MAN.SVMN.001), quin exemple correspon a una mesura NO estructural i quina és la seu del GRAE Subaquàtic?',
      options: [
        'Mesura no estructural = construcció d’un dic de contenció | Seu GRAE Subaquàtic = Lleida.',
        'Mesura no estructural = pla especial INUNCAT, cartografia de zones inundables i sistemes d’alerta meteorològica | Seu GRAE Subaquàtic = Cerdanyola del Vallès.',
        'Mesura no estructural = bassa de laminació i canalització | Seu GRAE Subaquàtic = Valls.',
        'Mesura no estructural = xarxa de clavegueram | Seu GRAE Subaquàtic = Olot.'
      ],
      correctIndex: 1,
      explanation: 'Les mesures estructurals són obres d’enginyeria física (dics, basses, canalitzacions); les no estructurals inclouen planificació urbanística, cartografia, alertes i el pla INUNCAT. El GRAE Subaquàtic té la base a Cerdanyola.'
    },
    {
      id: 't34-q18',
      difficulty: 'Fàcil',
      question: 'En una intervenció d’esgotament d’un soterrani negat d’aigua amb abundant fang i sòlids en suspensió (apartat 4.1), quin equip de bombament específic és el més indicat i com s’anomena la confluència de dos rius on es multiplica sobtadament el cabal?',
      options: [
        'Bomba de llots | Aiguabarreig.',
        'Turbobomba d’aigua neta | Meandre interior.',
        'Motobomba d’alta pressió d’incendis | Delta.',
        'Llança de Ø25 en con obert | Curs alt.'
      ],
      correctIndex: 0,
      explanation: 'Per bombejar aigua carregada de fang i sòlids en suspensió s’utilitzen bombes de llots. La confluència de dos rius s’anomena aiguabarreig.'
    }
  ]
};
