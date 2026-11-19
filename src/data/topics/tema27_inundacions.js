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
      "Aquest manual és ple de taules numèriques i conceptes d'examen: impacte mundial (> 40% dels desastres) i riuades històriques a Catalunya (Vallès 1962 ~1.000 morts, 1971 21 morts, Francolí 2019), erosió a la part exterior del meandre, la taula del Període de Retorn (T10 = 10%, T50 = 2%, T100 = 1%, T500 = 0,2%), els llindars SMP del Servei Meteorològic de Catalunya (Intensitat 30 min: Baix > 20 mm / Alt > 40 mm; Acumulació 24 h: Baix > 100 mm / Alt > 200 mm; escala 0 a 6), les 3 categories de maniobres aquàtiques (Indirectes [prioritàries!], Directes i Combinades amb sistema desembragable), els límits per a no especialistes (Mar ≤ 2,5 m Grau 4 Douglas; Riu ≤ Grau 3; no desembossar) i el zonatge (Zona Calenta = Zona d'Aigua + Zona Humida). Inclou 4 pàgines d'estudi i 2 pàgines finals de Resum.",
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
            "Les inundacions constitueixen el risc natural més freqüent i destructiu del planeta, representant MÉS DEL 40% (> 40%) de tots els desastres naturals a escala mundial. A Catalunya destaquen episodis tràgics citats al manual MAN.SVMN.001: les riuades del Vallès Occidental del setembre de 1962 (amb prop de ≈ 1.000 morts, la major catàstrofe hidrològica contemporània), les inundacions del Bages i Baix Llobregat de 1971 (21 morts), els aiguats de Tarragona de 1994, la riuada del riu Francolí i l'Espluga de Francolí d'octubre de 2019 (on va intervenir el GREC per valorar edificis col·lapsats pels torrents) i els episodis recurrents a les Terres de l'Ebre (Alcanar 2018, 2021 i 2023).",
            "La protecció davant d'inundacions combina MESURES ESTRUCTURALS (obres d'enginyeria física: dics, canalitzacions, basses de laminació i xarxes de clavegueram) i MESURES NO ESTRUCTURALS (planificació urbanística, cartografia de zones inundables, sistemes d'alerta meteorològica i el pla especial INUNCAT). El GRAE Subaquàtic (amb seu a Cerdanyola) disposa d'embarcacions pneumàtiques tipus RAFT, propulsors aquàtics, robots submarins ROV i equips de busseig."
          ]
        },
        {
          type: 'text',
          heading: '2.1–2.4. Dinàmica Fluvial (Meandres i Aiguabarreig) i Període de Retorn (T)',
          paragraphs: [
            "Un curs fluvial es divideix en curs Alt (capçalera de forta pendent i erosió), curs Mitjà (transport i formació de corbes o meandres) i curs Baix (plana al·luvial i delta de sedimentació). A Catalunya són molt perillosos els torrents, rieres i rambles de règim efímer o intermitent que generen crescudes sobtades (*flash floods*). Punts crítics d'un riu: 1) MEANDRE (corba del riu): a la PART EXTERIOR de la corba la velocitat de l'aigua és màxima, erosiona i soscava la base del talús i pot fer esfondrar el marge sota el pes d'un vehicle o dels bombers! (a la part interior de la corba l'aigua va lenta i diposita sediments); 2) AIGUABARREIG: punt de confluència on s'ajunten dos rius i es multiplica sobtadament el cabal i la turbulència."
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
          heading: '3.1–3.3. Avisos SMP del Servei Meteorològic de Catalunya (SMC) i Visors Hidrològics',
          paragraphs: [
            "El Servei Meteorològic de Catalunya (SMC) emet avisos de Situació Meteorològica de Perill (SMP) per pluja basats en dos paràmetres diferents amb un llindar baix i un llindar alt (que és exactament el DOBLE del baix!): 1) INTENSITAT DE PLUJA (quantitat caiguda en només 30 MINUTS: xàfecs torrencials): Llindar Baix > 20 mm / 30 min | Llindar Alt > 40 mm / 30 min. 2) ACUMULACIÓ DE PLUJA (quantitat acumulada en 24 HORES: temporals persistents): Llindar Baix > 100 mm / 24 h | Llindar Alt > 200 mm / 24 h (recorda que 1 mm de pluja equival exactament a 1 litre per metre quadrat: 1 mm = 1 L/m²).",
            "La Matriu de Perill de l'SMC creua la probabilitat amb la superació del llindar i assigna un nivell numèric en una escala de 0 a 6: Nivell 0 (Verd = sense perill); Nivells 1, 2 i 3 (Grocs i Taronja = superació del llindar baix); Nivells 4, 5 i 6 (Taronja i Vermell = superació del llindar alt, perill molt alt o extrem). Per seguir en temps real el cabal dels rius en m³/s, els Bombers consulten el visor d'Aforadors de l'ACA (Agència Catalana de l'Aigua, per a les conques internes de Catalunya) i el visor SAIH Ebro (per a la conca de l'Ebre, com el Segre o la Noguera Pallaresa)."
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
          heading: '4.1–4.4. Buidatge, Contenció, Potabilització i Les 3 Categories de Rescat Aquàtic',
          paragraphs: [
            "En inundacions, les tasques de suport inclouen: 1) Buidatge o esgotament (amb autobombes, motobombes, electrobombes submergibles, turbobombes, hidroerenjadors i bombes de llots per a aigua amb fang/sòlids), 2) Contenció i desviament (amb sacs terrers, gabions o barreres mòbils) i 3) Potabilització d'emergència (consta de 2 fases: 1a Clarificació [decantació/filtració de terbolesa] i 2a Desinfecció [cloració per eliminar patògens]).",
            "El Capítol 4.4 classifica les maniobres de RESCAT AQUÀTIC en 3 categories segons el nivell d'exposició dels bombers: 1) MANIOBRES INDIRECTES (es realitzen des de fora de l'aigua SENSE que cap bomber entri al corrent: llançar una bossa de rescat amb corda flotant, allargar una perxa o mànega inflada d'aire, o accedir des de dalt amb l'Autoescala AEA o un pont; són SEMPRE LES PRIORITÀRIES per seguretat!), 2) MANIOBRES DIRECTES (el rescatador entra nedant a l'aigua per agafar una víctima inconscient o esgotada; comporten un risc molt alt!) i 3) MANIOBRES COMBINADES (el rescatador entra a l'aigua però va assegurat amb una corda des de la riba: ATENCIÓ, la corda mai no es pot nuar fixa al cos, sinó que ha d'anar connectada obligatòriament a l'anella del SISTEMA DESEMBRAGABLE [zafada ràpida] de l'armilla d'aigües braves o subjectar un cap flotant, perquè si el corrent l'enfonsa es pugui alliberar a l'instant!)."
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
            "• 1. Mai t'apropis a la vora d'una riera (Zona Humida) amb el jaquetó i les botes d'incendi estructural: si rellisques i caus a l'aigua, el vestit de foc absorbeix desenes de quilos d'aigua i t'enfonsa com una pedra! A la Zona Humida es va amb armilla d'aigües braves.\n• 2. Al riu, on poses el vigia i on poses el salvavides? El GUAITA va AIGÜES AMUNT (per veure venir els troncs i cotxes arrossegats abans que t'atropellin!), i el company amb la corda de salvament va AIGÜES AVALL (per poder-te pescar si el corrent se t'emporta!).\n• 3. Llindars de pluja del SMC: en 30 minuts és '20 i el doble (40 mm)'; en 24 hores afegeix zeros: '100 i el doble (200 mm)'!",
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
    }
  ]
};
