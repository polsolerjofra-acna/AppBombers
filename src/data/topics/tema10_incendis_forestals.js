export const tema10IncendisForestals = {
  id: 'tema-25',
  number: 25,
  code: 'MAN.INVE.000',
  title: 'Intervenció bàsica en incendis forestals',
  category: 'Manual Operatiu SGO — Incendis Forestals (Vegetació)',
  estimatedMinutes: 55,
  importance: {
    title: "Radar d'Examen — Tema 25 (MAN.INVE.000 v.1): Incendis Forestals",
    frequency: 'Molt Alta (5-7 preguntes fixes sobre 6 Generacions, CPS Campbell, Eines, 3 Etapes vs 4 Fases i LACES)',
    summary:
      "Manual de 5 capítols amb la doctrina forestal de Bombers i GRAF: fites històriques (1982–2006) i 6 Generacions, parts i sectors (0/imparells/parells), patrons i CPS de Campbell (0/3 a 3/3), cadena d'eines manuals (Motxilla→Batefocs→Pulaski→Pala), 3 Etapes d'extinció vs. 4 Fases INFOCAT, i seguretat RAF/LACES (R ≥ 4×Lf) i atrapament en autobomba.",
    hotTopics: [
      'Cap. 1: Fites històriques (1982 FOC VERD, 1986, 1994, 1999 creació GRAF 1/03/1999, 2006), Paradoxa de l’extinció (99% conats = <10% superfície; <1% GIF = 90% superfície!) i les 6 Generacions d’incendis forestals.',
      'Cap. 2: Parts del foc, Sectorització (Sector 0 = cua; imparells 1, 3 = flanc esquerre; parells 2, 4 = flanc dret), Gran Triad (Topografia, Meteorologia [Regla del 30-30-30], Combustible [1h, 10h, 100h, 1.000h]), llargada de flama (<1 m, 1-3 m, >5 m) i Conat (<1 ha), IF (1-500 ha), GIF (>500 ha).',
      'Cap. 3: Els 4 patrons de propagació (topogràfic, vent, convectiu [indraft/downdraft] i tempesta de foc/pirocúmul) i el sistema CPS de Doug Campbell (alineació de Pendents, Vent i Orientació solar de 0/3 a 3/3 i lògica en 5 passos).',
      'Cap. 4: Ordre exacte de la cadena d’eines manuals en atac directe (1r Motxilla → 2n Batefocs → 3r Pulaski → 4t Pala, per a Lf < 1 m i v < 1 km/h), 3 Etapes de l’extinció (Atac, Remat, Rereguarda) vs. 4 Fases del foc INFOCAT (Actiu, Estabilitzat, Controlat, Extingit).',
      'Cap. 5: Protocol RAF (Reagrupament, Autoprotecció, Fugida), LACES (Zona segura amb Radi ≥ 4 × Llargada de flama!) i les 3 Situacions d’atrapament en autobomba (Situació 2 amb mànegues a 45-60°).'
    ],
    traps: [
      'Confondre la numeració de sectors forestals amb les façanes urbanes: en forestal el Sector 0 és la CUA, els sectors IMPARELLS (1, 3...) van al Flanc ESQUERRE i els sectors PARELLS (2, 4...) van al Flanc DRET!',
      'Confondre l’ordre de la cadena d’eines manuals: 1r Motxilla d’aigua → 2n Batefocs → 3r Pulaski → 4t Pala (no comença pel Pulaski!).',
      'Confondre les 3 Etapes de les tasques d’extinció (Atac, Remat, Rereguarda) amb les 4 Fases d’evolució de l’incendi INFOCAT (Actiu, Estabilitzat, Controlat, Extingit).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1 Història i 6 Gen.',
      title: '1. Fites Històriques (1982–2006), Paradoxa de l’Extinció (99%/90%) i les 6 Generacions',
      subtitle: 'Evolució dels incendis a Catalunya, creació dels GRAF (1/03/1999) i classificació de Castellnou.',
      blocks: [
        {
          type: 'text',
          heading: '1.1–1.4. La Paradoxa de l’Extinció i l’Evolució en 6 Generacions',
          paragraphs: [
            "La Paradoxa de l'Extinció explica per què la gestió forestal és clau: el 99% dels incendis s'apaguen com a conats i cremen menys del 10% de la superfície, mentre que menys de l'1% (els Grans Incendis Forestals, GIF) són responsables del 90% de les hectàrees cremades.",
            "L'abandonament rural i el canvi climàtic han fet evolucionar els incendis des de focs de pastures (1a generació) fins a focs de capçades (3a), Interfície Urbà-Forestal IUF (4a), simultaneïtat de GIF (5a) i megaincendis amb pirocumulonimbus (6a)."
          ]
        },
        {
          type: 'table',
          title: '1.1 i 1.5. Cronologia Oficial dels Incendis Forestals a Catalunya (MAN.INVE.000 Cap. 1)',
          subtitle: 'Dates històriques que apareixen literalment al primer capítol del manual',
          headers: ['Any / Data', 'Esdeveniment Històric i Operatiu', 'Impacte en el Cos de Bombers'],
          rows: [
            ['1982', 'Pla FOC VERD', 'Primer gran pla estructurat de prevenció i extinció forestal de la Generalitat restaurada.'],
            ['1986', 'Grans incendis de Montserrat i l’Empordà', 'Impuls de la professionalització, xarxa de guaites i coordinació de mitjans aeris.'],
            ['1994', 'Onada de GIF de la Catalunya Central (Bages/Berguedà, >70.000 ha)', 'Evidencia els incendis d’alta intensitat que superen la capacitat de l’aigua (3a/4a generació).'],
            ['1998 i 01/03/1999', 'Incendi del Solsonès (1998) → Creació del GRAF (1 de març de 1999)', 'Naixement del Grup d’Actuacions Forestals (GRAF), pioner a Europa en anàlisi del comportament del foc i ús del foc tècnic.'],
            ['2006 / 2009', 'Atrapaments mortals (Guadalajara 2005 / Horta de Sant Joan 2009)', 'Sistematització dels protocols LACES, RAF, CPS de Campbell i autoprotecció d’autobombes.']
          ],
          footnote: 'Data exacta d’examen: El GRAF es crea oficialment l’1 de març de 1999 (01/03/1999). A més, recorda la Paradoxa de l’Extinció (1.3): el 99% dels incendis s’apaguen com a petits conats i cremen <10% de superfície, mentre que menys de l’1% d’incendis (els GIF) cremen el 90% del total d’hectàrees!'
        },
        {
          type: 'table',
          title: '1.4. Les 6 Generacions d’Incendis Forestals (Evolució del Paisatge i del Foc)',
          subtitle: 'Què canvia al territori a cada generació i per què es supera la capacitat d’extinció',
          headers: ['Generació', 'Factor Determinant del Paisatge', 'Comportament del Foc i Límit Operatiu'],
          rows: [
            ['1a Generació', 'Abandonament de conreus agrícoles → continuïtat horitzontal fina.', 'Focs ràpids de pastura i matoll continu que superen els tallafocs agrícoles antics.'],
            ['2a Generació', 'Abandonament de la gestió del bosc → més velocitat i acumulació de biomassa.', 'Aparició de focus secundaris per paveses que salten carreteres i tallafocs lineals.'],
            ['3a Generació', 'Continuïtat tant horitzontal com VERTICAL (escala de combustible del sotabosc a les capçades).', 'Focs de capçades actius d’alta intensitat (Anys 1994/1998) que superen la capacitat d’extinció amb aigua.'],
            ['4a Generació', 'Interfície Urbà-Forestal (IUF): urbanitzacions i cases dins del bosc continu.', 'Simultaneïtat d’incendi forestal + protecció civil de centenars d’habitatges (col·lapse de recursos perquè les autobombes han de defensar cases i no poden atacar el bosc!).'],
            ['5a Generació', 'Simultaneïtat de diversos GIF + Interfície Urbà-Forestal sota onades de calor.', 'Col·lapse simultani a escala regional (Xile 2017, Portugal 2017, Grècia).'],
            ['6a Generació', 'Crisi climàtica extrema + Megaincendis convectius amb Pirocúmuls / Pirocumulonimbus (PyroCb).', 'L’incendi allibera tanta energia que modifica la meteorologia local, crea tempestes de foc amb desploms convectius (downdrafts) erràtics i velocitats impossibles de predir.']
          ],
          footnote: 'Truc mnemotècnic de les 6 Generacions: 1a Continuïtat (camps) → 2a Velocitat/Paveses → 3a Vertical/Capçades → 4a Interfície (IUF) → 5a Simultaneïtat GIF+IUF → 6a Pirocumulonimbus (clima).'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 2 Parts i Sectors',
      title: '2. Parts de l’Incendi, Sectorització (0 / Imparells / Parells), Gran Triad i Llargada de Flama',
      subtitle: 'Geometria del foc, regla del 30-30-30, combustibles (1h-1000h), Lf (<1 m / 1-3 m / >5 m) i GIF (>500 ha).',
      blocks: [
        {
          type: 'text',
          heading: '⚠️ No confondre! Numeració de Sectors Forestals vs. Façanes Urbanes',
          paragraphs: [
            "En incendis forestals, la referència es pren mirant SEMPRE des de la CUA cap al CAP de l'incendi: la Cua és el Sector 0 (punt d'ancoratge), el Flanc Esquerre rep els sectors IMPARELLS (1, 3, 5...) i el Flanc Dret rep els sectors PARELLS (2, 4, 6...).",
            "No ho confonguis amb les façanes A-B-C-D d'edificis (on B és esquerra i D és dreta en sentit horari mirant A)."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: '2.1–2.2. Parts de l’Incendi i Numeració Oficial de Sectors Forestals',
          acronym: 'SECTOR 0 = CUA  |  IMPARELLS (1, 3, 5) = FLANC ESQUERRE  |  PARELLS (2, 4, 6) = FLANC DRET',
          trick:
            "• Parts del foc: Cap (front més ràpid), Cua (origen), Flanc Esquerre i Dret (mirant de cua a cap), Dits, Bosses, Illes (zones verdes internes) i Focus secundaris (per paveses).\n• Sectors: 0 = Cua | Imparells (1, 3...) = Flanc Esquerre | Parells (2, 4...) = Flanc Dret.",
          example: 'Si el Cap d’Intervenció t’assigna el "Sector 3", saps immediatament que vas a la part mitjana-alta del Flanc Esquerre!'
        },
        {
          type: 'diagram',
          title: 'Parts d’un Incendi Forestal i Direcció d’Atac',
          diagramType: 'forest_fire_parts',
          caption:
            'Geometria completa d’un incendi forestal (Cap, Flanc Esquerre, Flanc Dret, Cua/Ancoratge, Zona Negra i Focus Secundaris per paveses) amb referència des de la cua cap al cap.'
        },
        {
          type: 'table',
          title: '2.3–2.5. La Gran Triad (Regla 30-30-30), Tipus de Foc, Llargada de Flama (Lf) i Mida (GIF)',
          subtitle: 'Totes les escales numèriques del Capítol 2 de MAN.INVE.000',
          headers: ['Paràmetre Forestal', 'Classificació i Valors Oficials del Manual', 'Interpretació Operativa'],
          rows: [
            ['2.3. La Gran Triad i Regla del 30-30-30', '1) Topografia (pendent, orientació, relleu)\n2) Meteorologia: Regla 30-30-30 → Tª > 30 °C, Humitat Relativa < 30% i Vent > 30 km/h!\n3) Combustible: classificat pel temps de retard d’humitat en 1 h (<6 mm, herba/acícules: el que propaga el front!), 10 h (6-25 mm), 100 h (25-75 mm) i 1.000 h (>75 mm, troncs).', 'La topografia és el factor més constant; el vent és el més variable; el combustible fi mort d’1 hora (<6 mm) determina la velocitat d’ignició i propagació!'],
            ['2.4. Estrats on crema l’incendi', '1) Subsòl (torba, arrels i humus sec: sense flama, molt lent i difícil d’extingir)\n2) Superfície (fullaraca, herba i matoll)\n3) Capçades (Passiu/Torching si necessita el foc de superfície sota seu; Actiu si corre de capçada en capçada; Independent en condicions extremes).', 'El pas de superfície a capçades es produeix a través del "combustible d’escala" (matoll alt i branques baixes).'],
            ['2.4.2. Llargada de Flama (Lf) i Capacitat d’Extinció', '• Lf < 1 metre: Atac directe possible amb eines manuals i motxilles.\n• Lf d’1 a 3 metres: Atac directe amb línies d’aigua d’autobomba i suport d’helicòpters.\n• Lf de 3 a 5 metres: Al límit de la capacitat d’atac directe (cal maquinària pesant/avions).\n• Lf > 5 metres: FORA DE CAPACITAT D’EXTINCIÓ en atac directe (només maniobres indirectes o foc tècnic als flancs!).', 'A més, s’avalua la inclinació (flama tombada cap al combustible sa preescalfa per radiació/convecció) i la profunditat del front.'],
            ['2.5. Classificació per Superfície Cremada', '• Conat: < 1 hectàrea (< 1 ha).\n• Incendi Forestal (IF): entre 1 ha i 500 ha.\n• Gran Incendi Forestal (GIF): > 500 hectàrees (> 500 ha).', 'Un GIF és qualsevol incendi forestal que supera les 500 ha de superfície forestal afectada.']
          ],
          footnote: 'Memoritza els llindars: Conat < 1 ha | GIF > 500 ha | Eines manuals Lf < 1 m | Autobomba Lf 1-3 m | Fora de capacitat Lf > 5 m.'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 3 Patrons i CPS',
      title: '3. Valoració Tàctica: Els 4 Patrons de Propagació, Columna de Fum i CPS de Campbell',
      subtitle: 'Topogràfic, vent, convectiu (indraft/downdraft), tempesta i el Sistema de Predicció de Campbell (0/3 a 3/3).',
      blocks: [
        {
          type: 'table',
          title: '3.1. Els 4 Patrons Oficials de Propagació d’un Incendi Forestal (MAN.INVE.000 Cap. 3)',
          subtitle: 'Quina força domina l’incendi i on es troben les oportunitats d’extinció',
          headers: ['Patró d’Incendi', 'Força Motriu Dominant', 'Comportament, Riscos i Finestra d’Oportunitat'],
          rows: [
            ['1. Incendi Topogràfic', 'El pendent i les brises de vall/vessant (sense vent sinòptic fort).', 'Puja ràpid pels vessants i barrancs durant el dia, però es frena dràsticament en arribar a la CARENA (canvi de pendent) o de nit. Molt previsible.'],
            ['2. Incendi Conduït per Vent', 'Vent general o sinòptic fort (>30 km/h: Mestral, Tramuntana, Ponent).', 'El foc ignora la topografia (baixa pendents a gran velocitat), flama molt inclinada, columna de fum tombada i llançament de paveses a llarga distància. Els flancs són molt rectes i estrets.'],
            ['3. Incendi Convectiu (Dominat pel Plomall)', 'La pròpia columna de convecció vertical d’alta potència tèrmica.', 'Genera vents propis d’aspiració cap a la base (INDRAFT) i desploms violents de la columna (DOWNDRAFT) amb vents erràtics en 360° i pluja de paveses massiva.'],
            ['4. Incendi de Tempesta (Pirocumulonimbus)', 'Acoblament de la columna convectiva amb les capes altes de la troposfera.', 'Forma un núvol de tempesta propi (PyroCb) que en col·lapsar provoca esclafits (downbursts) amb vents huracanats en totes direccions. Màxim perill d’atrapament!']
          ],
          footnote: 'Diferència clau: INDRAFT = vent d’aspiració cap a dins de l’incendi | DOWNDRAFT = desplom descendent de la columna que escampa el foc en 360°.'
        },
        {
          type: 'text',
          heading: '3.3. Sistema de Predicció de Campbell (CPS): Alineació (0/3 a 3/3) i 5 Passos',
          paragraphs: [
            "El sistema CPS de Doug Campbell avalua l'ALINEACIÓ DE 3 FACTORS (de 0/3 a 3/3): 1) Pendent (+1 si puja costa amunt), 2) Vent (+1 si bufa a favor) i 3) Orientació Solar (+1 si el vessant està assolellat i preescalfat: Est al matí, Sud al migdia, Oest a la tarda).",
            "Quan hi ha plena alineació (3/3), l'atac directe fracassa. Els punts d'inflexió (trigger points) com carenes, colls o girs de barranc indiquen on el foc passarà de 3/3 a 1/3 (finestra d'oportunitat) o d'1/3 a 3/3 (perill imminent).",
            "Els 5 passos de la lògica CPS són: 1) Observar alineació actual, 2) Preveure canvis, 3) Identificar oportunitats (0/3 o 1/3), 4) Definir maniobra segura i 5) Establir llindars LACES."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Regla Ràpida · CPS de Campbell (Alineació de Forces)',
          acronym: '3 FORCES D’ALINEACIÓ:  1. Pendent (A favor)  +  2. Vent (A favor)  +  3. Orientació Solar (Preescalfat)',
          trick:
            "• 3/3 (Puja pendent + Vent a favor + Vessant al sol) → Intensitat màxima, prohibit atac frontal.\n• Oportunitat d'atac → Quan el foc perd alineació (0/3 o 1/3) en passar una carena o a l'obaga.",
          example: 'Un foc que a les 16:00 h de la tarda puja per un vessant Oest (assolellat) amb vent d’Oest a favor té una alineació 3/3: prohibida qualsevol maniobra frontal!'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 4 Eines i Fases',
      title: '4. Maniobres Forestals: Cadena d’Eines Manuals, Foc Tècnic, 3 Etapes vs. 4 Fases INFOCAT',
      subtitle: 'Ordre d’eines (Motxilla → Batefocs → Pulaski → Pala), estesa de mànegues i estats oficials del foc.',
      blocks: [
        {
          type: 'text',
          heading: '4.1.2. Atac Directe Manual vs. Atac Indirecte (Foc Tècnic)',
          paragraphs: [
            "L'atac directe amb eines manuals només és viable quan la llargada de flama és inferior a 1 metre (Lf < 1 m) i la velocitat d'avanç és inferior a 1 km/h, treballant en fila amb separació mínima de 3 m entre operadors.",
            "Quan Lf > 5 m o l'atac directe no és segur, s'aplica atac indirecte a distància del front (línies de defensa o foc tècnic amb cremes d'eixamplament i contrafocs)."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: '4.1.2. Ordre Exacte de la Cadena d’Eines Manuals en Atac Directe (Lf < 1 m i v < 1 km/h)',
          acronym: '1r MOTXILLA D’AIGUA  →  2n BATEFOCS  →  3r PULASKI  →  4t PALA   (Separació ≥ 3 m)',
          trick:
            "• 1r MOTXILLA D'AIGUA (~18–20 L): Refreda i abaixa la flama inicial.\n• 2n BATEFOCS: Sufoca la flama restant colpejant cap a dins del cremat.\n• 3r PULASKI (Destral-aixada): Talla arrels i obre el solc fins a terra mineral.\n• 4t PALA (o McLeod): Raspa fins a sòl mineral i llança terra sobre les brases.",
          example: 'Recorda l’acció de cada un: 1r Refreda (Motxilla) → 2n Sufoca (Batefocs) → 3r Talla i cava (Pulaski) → 4t Raspa i enterra (Pala).'
        },
        {
          type: 'table',
          title: '4.4. Les 3 Etapes de les Tasques d’Extinció vs. 4.5. Les 4 Fases Oficials de l’Incendi (INFOCAT)',
          subtitle: 'Distinció obligatòria del Capítol 4 de MAN.INVE.000 — Pregunta clàssica d’examen!',
          headers: ['Classificació', 'Noms Oficials per Ordre Cronològic', 'Definició Exacta del Manual MAN.INVE.000'],
          rows: [
            ['4.4. Les 3 ETAPES de les Tasques d’Extinció (Què fan els bombers)', '1) Etapa d’ATAC\n2) Etapa de REMAT\n3) Etapa de REREGUARDA (Vigilància)', '• 1. Atac: Maniobres directes o indirectes per aturar l’avanç de la flama en el perímetre.\n• 2. Remat: Consolidació i liquidació de punts calents, fumaroles i brases a la vora del perímetre ja sense flama.\n• 3. Rereguarda: Vigilància activa, repàs de punts fumants i prevenció de revifalles amb dotacions de retén.'],
            ['4.5. Les 4 FASES d’Evolució de l’Incendi (Estat global INFOCAT)', '1) Incendi ACTIU\n2) Incendi ESTABILITZAT\n3) Incendi CONTROLAT\n4) Incendi EXTINGIT', '• 1. Actiu: Les flames es propaguen lliurement i existeixen fronts que creixen fora de la capacitat immediata de contenció.\n• 2. Estabilitzat: L’incendi encara no està envoltat per una línia completa, però ja NO avança lliurement i evoluciona dins de les línies i previsions d’extinció.\n• 3. Controlat: Tot el perímetre està envoltat per una línia de control contínua fins a sòl mineral (o humida) i ja no pot créixer, tot i que a l’interior poden quedar punts calents o fumaroles.\n• 4. Extingit: Ja no queda calor ni cap brasa amb possibilitat de revifar l’incendi.']
          ],
          footnote: 'No les barregis mai! 3 ETAPES de treball = Atac → Remat → Rereguarda | 4 FASES de l’incendi = Actiu → Estabilitzat → Controlat → Extingit.'
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! Fases del Foc (INFOCAT) vs. Etapes d’Extinció (Equips)',
          paragraphs: [
            "• 4 FASES DE L'INCENDI (INFOCAT): Indiquen l'estat global del foc → 1) Actiu (avança lliurement), 2) Estabilitzat (ja no avança lliurement però falta tancar perímetre), 3) Controlat (tot el perímetre envoltat per línia de control contínua), 4) Extingit (sense calor ni brases).",
            "• 3 ETAPES DE LES TASQUES D'EXTINCIÓ: Indiquen què fan els equips → 1) Atac (aturar la flama), 2) Remat (liquidar punts calents al perímetre) i 3) Rereguarda (vigilància per evitar revifalles)."
          ]
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · Fases del Foc vs. Etapes dels Equips d’Extinció',
          acronym: 'Fases → Foc (F)  |  Etapes → Equips d’extinció (E)',
          trick:
            '• FASES (comença per F, com FOC): Actiu, Estabilitzat, Controlat i Extingit.\n• ETAPES (comença per E, com EQUIPS d’extinció): Actiu (Atac), Remat i Rereguarda.',
          example:
            'Si dubtes a l’examen quina llista és "Fases" i quina és "Etapes": F amb F (Fases = Foc: Actiu, Estabilitzat, Controlat, Extingit) i E amb E (Etapes = Equips: Actiu/Atac, Remat, Rereguarda).'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Cap. 5 RAF, LACES i Atrapament',
      title: '5. Seguretat en Incendis Forestals: Protocol RAF, LACES (R ≥ 4×Lf) i Atrapament en Autobomba',
      subtitle: 'Reagrupament-Autoprotecció-Fugida, càlcul del radi de Zona Segura i les 3 Situacions d’Atrapament.',
      blocks: [
        {
          type: 'text',
          heading: '5.3–5.4. Protocols RAF i LACES en Incendis Forestals',
          paragraphs: [
            "El protocol RAF marca els passos davant un canvi brusc de comportament del foc: Reagrupament de tota la dotació, Autoprotecció i Fugida cap a la Zona Segura per una ruta coneguda.",
            "El protocol LACES (Lookouts, Anchor/Awareness, Communications, Escape routes, Safety zones) exigeix que la Zona Segura tingui un radi mínim R ≥ 4 × Lf on sobreviure sense cabina ni manta."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: '5.3. Protocol RAF i 5.4. Protocol LACES (OCEL) i Fórmula del Radi de Zona Segura',
          formula: 'Radi Zona Segura (R) ≥ 4 × Llargada de Flama (Lf)   (Diàmetre ≥ 8 × Lf)',
          variables: [
            { symbol: 'RAF', meaning: '1. Reagrupament de tota la dotació → 2. Autoprotecció → 3. Fugida cap a Zona Segura per ruta coneguda' },
            { symbol: 'L (Lookouts)', meaning: 'Guaites / Vigilants amb visió del foc i dels companys' },
            { symbol: 'A (Anchor / Awareness)', meaning: 'Punt d’Ancoratge segur (començar sempre des de la cua/carretera/cremat perquè el foc no et flanquegi!) i Consciència situacional' },
            { symbol: 'C (Communications)', meaning: 'Comunicacions garantides amb la dotació, guaita i comandament' },
            { symbol: 'E (Escape routes)', meaning: 'Rutes d’Escapament (mínim 2, transitables i senyalitzades cap a la zona segura)' },
            { symbol: 'S (Safety zones)', meaning: 'Zones Segures (sense combustible o ja cremades "zona negra", on es pot sobreviure SENSE necessitat d’utilitzar cap mitjà d’autoprotecció ni cabina!)' }
          ],
          trick:
            'Càlcul mental de Zona Segura (LACES): El RADI de separació respecte de les flames ha de ser com a mínim 4 VEGADES la llargada de flama (R ≥ 4 × Lf) per evitar cremades per radiació! Si les flames fan 10 metres d’alçada, el radi fins a la vegetació ha de ser de ≥ 40 metres (diàmetre total de la clariana ≥ 80 m) més l’espai pels vehicles.',
          example: 'La millor Zona Segura en un incendi forestal que avança és sovint la ZONA NEGRA (la superfície que ja ha cremat completament i s’ha refredat).'
        },
        {
          type: 'table',
          title: '5.5. Protocol Oficial d’Autoprotecció per Atrapament en Autobomba (Situacions 1, 2 i 3)',
          subtitle: 'Actuació pas a pas quan el front de foc atrapa una dotació amb BRP (MAN.INVE.000 Secció 5.5)',
          headers: ['Situació d’Atrapament', 'Condicions de l’Escenari', 'Maniobra Exacta d’Autoprotecció (MAN.INVE.000)'],
          rows: [
            ['Situació 1 (Evacuació / Zona Segura)', 'Encara hi ha temps per moure el vehicle fins a una zona segura o zona negra àmplia.', 'Reagrupar immediatament el personal (RAF), recollir o tallar/abandonar l’estesa de mànegues i desplaçar l’autobomba a la Zona Segura o Zona Negra.'],
            ['Situació 2 (Defensa Exterior Activa del Vehicle)', 'El front arriba però la dotació disposa d’una clariana/camí i aigua suficient per defensar la posició.', '1) Estacionar el camió sobre zona sense vegetació sota el xassís, de cara o d’esquena al front i amb el motor en marxa.\n2) Desplegar 2 línies curtes de Ø25 amb llances en con de protecció.\n3) Els bombers es col·loquen al costat oposat al foc protegits per la carrosseria del camió, projectant cortines d’aigua amb un angle de 45° a 60° per abatre la radiació abans que el front toqui el vehicle, passant a dins la cabina en el moment de màxim impacte si cal.'],
            ['Situació 3 (Confinament Extrem Dins la Cabina)', 'Impacte directe imminent del front de flames sense espai ni possibilitat de defensa exterior.', '1) Tota la dotació entra DINS la cabina amb l’EPI complet cordat, casc, guants, sotacasc i ERA posat (el fum i el CO entren a la cabina!).\n2) Tancar finestres i entrades d’aire exterior, encendre llums, activar els ruixadors d’autoprotecció del camió (cortina d’aigua sobre vidres i rodes) en el moment just de pas del front (dura 1-2 minuts) i mantenir la calma ajupits sota el nivell dels vidres.']
          ],
          footnote: 'Dada clau de la Situació 2 d’atrapament: l’angle de projecció de les llances de protecció és de 45° a 60°!'
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · 📌 Resum 1/2 (Xifres)',
      title: 'Resum Final (1/2): Taula Mestra de Xifres, Dates i Llindars (MAN.INVE.000)',
      subtitle: 'Totes les xifres numèriques d’Incendis Forestals per memoritzar abans de l’examen.',
      blocks: [
        {
          type: 'text',
          heading: '1.1–1.4. La Paradoxa de l’Extinció i l’Evolució en 6 Generacions',
          paragraphs: [
            "La Paradoxa de l'Extinció explica per què la gestió forestal és clau: el 99% dels incendis s'apaguen com a conats i cremen menys del 10% de la superfície, mentre que menys de l'1% (els Grans Incendis Forestals, GIF) són responsables del 90% de les hectàrees cremades.",
            "L'abandonament rural i el canvi climàtic han fet evolucionar els incendis des de focs de pastures (1a generació) fins a focs de capçades (3a), Interfície Urbà-Forestal IUF (4a), simultaneïtat de GIF (5a) i megaincendis amb pirocumulonimbus (6a)."
          ]
        },
        {
          type: 'table',
          title: 'Síntesi Numèrica Imprescindible d’Examen — Tema 25 (Incendis Forestals)',
          subtitle: 'Els 15 valors oficials del manual MAN.INVE.000 que més es pregunten a l’oposició',
          headers: ['Concepte Forestal', 'Valor Oficial Exacte (MAN.INVE.000)', 'Clau Operativa'],
          rows: [
            ['1. Data de creació dels GRAF', '1 de març de 1999 (01/03/1999)', 'Fites prèvies: 1982 FOC VERD, 1986, 1994, 1998'],
            ['2. Paradoxa de l’Extinció', '99% dels focs = < 10% superfície | < 1% dels focs (GIF) = 90% superfície', 'L’extinció total de petits focs acumula biomassa per als GIF'],
            ['3. Nombre de Generacions d’Incendis', '6 Generacions (1a a 6a)', '3a=Vertical/Capçades | 4a=Interfície IUF | 5a=Simultaneïtat | 6a=Pirocúmuls'],
            ['4. Numeració de Sectors Forestals', 'Sector 0 = Cua | Imparells (1, 3) = Flanc Esquerre | Parells (2, 4) = Flanc Dret', 'Mirant sempre des de la cua cap al cap de l’incendi'],
            ['5. Regla Meteorològica 30-30-30', 'Temperatura > 30 °C | Humitat Relativa < 30% | Vent > 30 km/h', 'Condicions crítiques de propagació forestal'],
            ['6. Combustibles per Temps de Retard', '1 h (< 6 mm) | 10 h (6-25 mm) | 100 h (25-75 mm) | 1.000 h (> 75 mm)', 'El combustible fi mort d’1 h (< 6 mm) governa la velocitat del front'],
            ['7. Classificació per Superfície', 'Conat < 1 ha | Incendi Forestal (IF) 1–500 ha | GIF > 500 ha', 'Gran Incendi Forestal (GIF) a partir de 500 hectàrees'],
            ['8. Escala de Llargada de Flama (Lf)', '< 1 m (Manuals) | 1–3 m (Autobomba) | 3–5 m (Límit) | > 5 m (Fora capacitat)', 'Amb Lf < 1 m i velocitat < 1 km/h es pot atacar amb eines manuals'],
            ['9. Els 4 Patrons de Propagació', '1. Topogràfic | 2. Vent | 3. Convectiu | 4. Tempesta (Pirocumulonimbus)', 'Indraft = aspiració cap al foc | Downdraft = desplom convectiu'],
            ['10. Alineació CPS de Doug Campbell', '3 factors (0/3 a 3/3): Pendent + Vent + Orientació Solar (Insolació)', 'Metodologia d’anàlisi en 5 passos lògics'],
            ['11. Ordre de la Cadena d’Eines Manuals', '1r Motxilla → 2n Batefocs → 3r Pulaski → 4t Pala', '1r Refreda → 2n Sufoca → 3r Talla/Cava → 4t Raspa/Enterra'],
            ['12. Les 3 Etapes de les Tasques d’Extinció', '1. Atac → 2. Remat → 3. Rereguarda', 'Fases del treball operatiu de les dotacions al perímetre'],
            ['13. Les 4 Fases Oficials del Foc (INFOCAT)', '1. Actiu → 2. Estabilitzat → 3. Controlat → 4. Extingit', 'Estats oficials d’evolució global del sinistre'],
            ['14. Radi Mínim de Zona Segura (LACES)', 'Radi ≥ 4 × Llargada de Flama (Lf)', 'Espai on es pot sobreviure sense mitjans d’autoprotecció ni cabina'],
            ['15. Angle de Llances en Atrapament (Sit. 2)', '45° a 60° d’inclinació', 'Situacions d’atrapament en autobomba: Situació 1, Situació 2 i Situació 3']
          ],
          footnote: 'Pàgina 1 de 2 del Resum Executiu del Tema 25 (MAN.INVE.000).'
        }
      ]
    },
    {
      pageNumber: 7,
      isSummary: true,
      shortLabel: 'Pàg. 7 · 📌 Resum 2/2 (Punts Clau)',
      title: 'Resum Final (2/2): Maniobres, Seguretat LACES/RAF i Paranys del Tribunal',
      subtitle: 'Les distincions clau d’Incendis Forestals per no caure en cap parany de l’examen.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Els 5 Paranys del Tribunal al Tema 25 (Incendis Forestals)',
          acronym: 'SECTORS (Imparell=Esq) | EINES (M-B-Pu-Pa) | 3 ETAPES vs 4 FASES | ESTABILITZAT vs CONTROLAT | R ≥ 4×Lf',
          trick:
            "1) SECTORS FORESTALS: Sector 0 = Cua; mirant de cua a cap, ESQUERRA = Imparells (1, 3, 5) i DRETA = Parells (2, 4, 6).\n2) EINES MANUALS (Lf < 1 m, v < 1 km/h): 1r Motxilla → 2n Batefocs → 3r Pulaski → 4t Pala.\n3) 3 ETAPES vs. 4 FASES: Etapes (equips) = Atac, Remat, Rereguarda; Fases (INFOCAT) = Actiu, Estabilitzat, Controlat, Extingit.\n4) ESTABILITZAT vs. CONTROLAT: Estabilitzat = no avança lliurement però perímetre incomplet; Controlat = perímetre 100% tancat.\n5) LACES: Radi de Zona Segura R ≥ 4 × Lf (sobreviure sense cabina ni autoprotecció).",
          example: 'Si una flama de capçades fa 15 metres de llargada (Lf = 15 m), el radi mínim de la Zona Segura fins al combustible és 4 × 15 = 60 metres.'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q25-1',
      difficulty: 'Mitjà',
      question: "En la sectorització operativa d'un incendi forestal segons el manual MAN.INVE.000, quin número s'assigna a la cua de l'incendi i com es numeren els sectors del flanc esquerre i del flanc dret?",
      options: [
        'Sector 1 a la cua, lletres A-B al flanc esquerre i lletres C-D al flanc dret (segons ordre d’arribada).',
        'Sector 0 a la cua, números imparells (1, 3...) al flanc esquerre i números parells (2, 4...) al flanc dret.',
        'Sector 0 al cap de l’incendi, números parells (2, 4...) al flanc esquerre i números imparells (1, 3...) al dret.',
        'Sector 1 al cap de l’incendi, numerant la resta de sectors en sentit horari de l’1 al 4 com en edificis.'
      ],
      correctIndex: 1,
      explanation: "Mirant des de la cua cap al cap, la cua és el Sector 0, el flanc esquerre rep els sectors imparells (1, 3, 5...) i el flanc dret rep els sectors parells (2, 4, 6...)."
    },
    {
      id: 'q25-2',
      difficulty: 'Mitjà',
      question: "Quin és l'ordre exacte de treball de la cadena d'eines manuals en atac directe forestal i fins a quina llargada de flama (Lf) i velocitat de propagació és efectiva?",
      options: [
        '1r Pulaski → 2n Pala → 3r Batefocs → 4t Motxilla (per a Lf < 3 m)',
        '1r Motxilla d’aigua → 2n Batefocs → 3r Pulaski → 4t Pala (per a Lf < 1 m i velocitat < 1 km/h)',
        '1r Batefocs → 2n Motxilla → 3r Pala → 4t Pulaski (per a Lf < 5 m)',
        '1r Pala → 2n Pulaski → 3r Motxilla → 4t Batefocs (per a qualsevol flama)'
      ],
      correctIndex: 1,
      explanation: "L'apartat 4.1.2 estableix que la seqüència és 1r Motxilla → 2n Batefocs → 3r Pulaski → 4t Pala, aplicable quan la flama és < 1 m i la velocitat d'avanç < 1 km/h."
    },
    {
      id: 'q25-3',
      difficulty: 'Mitjà',
      question: "Segons el manual MAN.INVE.000, quines són les 3 Etapes de les tasques d'extinció i quines són les 4 Fases d'evolució de l'incendi segons l'INFOCAT?",
      options: [
        '3 Etapes: Inici, Desenvolupament i Final | 4 Fases: G0, G1, G2 i G3.',
        '3 Etapes: Atac, Remat i Rereguarda | 4 Fases: Actiu, Estabilitzat, Controlat i Extingit.',
        '3 Etapes: Actiu, Controlat i Extingit | 4 Fases: Atac, Defensa, Remat i Vigilància.',
        '3 Etapes: Detecció, Confinament i Liquidació | 4 Fases: Sector 0, Flancs i Cap.'
      ],
      correctIndex: 1,
      explanation: 'Les 3 etapes operatives del treball d’extinció són Atac, Remat i Rereguarda; les 4 fases d’estat de l’incendi són Actiu, Estabilitzat, Controlat i Extingit.'
    },
    {
      id: 'q25-4',
      difficulty: 'Fàcil',
      question: "Segons el protocol de seguretat LACES del manual d'incendis forestals, quin ha de ser com a mínim el radi d'una Zona Segura respecte de les flames per garantir la supervivència sense cap mitjà d'autoprotecció?",
      options: [
        'Igual a la llargada de flama (1 × Lf)',
        'Com a mínim 2 vegades la llargada de flama (2 × Lf)',
        'Com a mínim 4 vegades la llargada de flama (R ≥ 4 × Lf)',
        'Sempre 15 metres fixos'
      ],
      correctIndex: 2,
      explanation: 'El radi de separació fins al combustible en flama dins d’una Zona Segura ha de ser com a mínim 4 vegades la llargada de flamaprevista (R ≥ 4 × Lf).'
    },
    {
      id: 'q25-5',
      difficulty: 'Difícil',
      question: "En quina data es va crear oficialment el Grup d'Actuacions Forestals (GRAF) i quins són els 3 factors d'alineació del sistema de predicció CPS de Doug Campbell?",
      options: [
        '1 de març de 1999 | Pendent, Vent i Orientació solar (Insolació)',
        '15 de juliol de 1994 | Temperatura, Humitat i Pressió atmosfèrica',
        '1 de gener de 2006 | Alçada d’arbre, Humitat i Cabal d’aigua',
        '20 de maig de 1982 | Combustible, Oxigen i Calor'
      ],
      correctIndex: 0,
      explanation: 'Els GRAF es van crear l’1 de març de 1999, i el sistema CPS de Campbell es basa en l’alineació (0/3 a 3/3) de Pendent, Vent i Orientació solar (preescalfament del combustible).'
    },
    {
      id: 'q25-6',
      difficulty: 'Mitjà',
      question: "Com es classifiquen els incendis forestals segons la superfície afectada al capítol 2 de MAN.INVE.000 i què descriu la 'Paradoxa de l'Extinció'?",
      options: [
        "Conat (< 1 ha), IF (1–500 ha) i GIF (> 500 ha); la paradoxa indica que el 99% dels focs cremen < 10% de superfície, mentre < 1% (els GIF) cremen el 90% de les hectàrees.",
        "Conat (< 10 ha), IF (10–100 ha) i GIF (> 1.000 ha); la paradoxa indica que tots els incendis forestals tenen la mateixa intensitat lineal i velocitat de propagació.",
        "Conat (< 5 ha), IF (5–50 ha) i GIF (> 100 ha); la paradoxa indica que el 90% dels incendis superen les 500 ha quan l'atac inicial es fa exclusivament amb mitjans aeris.",
        "Conat (< 0,1 ha), IF (0,1–250 ha) i GIF (> 250 ha); la paradoxa indica que l'ús d'aigua en atac directe augmenta sempre la intensitat de les flames en matollar mediterrani."
      ],
      correctIndex: 0,
      explanation: "Un conat afecta < 1 ha, un IF entre 1 i 500 ha i un GIF > 500 ha. La Paradoxa de l'Extinció reflecteix que l'èxit en el 99% dels focs petits (<10% de superfície) acumula biomassa que alimenta el <1% de GIF responsables del 90% de la superfície cremada."
    },
    {
      id: 'q25-7',
      difficulty: 'Fàcil',
      question: "Quins són els tres llindars de la regla meteorològica del 30-30-30 i quin grup de combustible per temps de retard governa la velocitat d'ignició i propagació del front?",
      options: [
        "Tª > 30 °C, Vent > 30 m/s i Pendent > 30°; el combustible de 1.000 hores (> 75 mm).",
        "Tª < 30 °C, Humitat > 30% i Vent < 30 km/h; el combustible de 100 hores (25–75 mm).",
        "Tª > 30 °C, Pluja < 30 mm i Altitud > 30 m; el combustible de 10 hores (6–25 mm).",
        "Tª > 30 °C, Humitat Relativa < 30% i Vent > 30 km/h; el combustible fi mort d'1 hora (< 6 mm)."
      ],
      correctIndex: 3,
      explanation: "La regla del 30-30-30 assenyala condicions crítiques amb Tª > 30 °C, Humitat Relativa < 30% i Vent > 30 km/h. El combustible fi mort d'1 hora (< 6 mm, herba/acícules) és el que determina la velocitat d'ignició i propagació."
    },
    {
      id: 'q25-8',
      difficulty: 'Mitjà',
      question: "Dins de la classificació de les 6 Generacions d'incendis forestals del manual MAN.INVE.000, quina diferència caracteritza la 3a, la 4a i la 6a generació?",
      options: [
        "3a: abandonament agrícola i continuïtat horitzontal; 4a: focus secundaris per paveses a llarga distància; 6a: incendis de subsòl de torba amb propagació lenta.",
        "3a: focs de capçades per continuïtat vertical; 4a: Interfície Urbà-Forestal (IUF) amb col·lapse de recursos; 6a: megaincendis convectius extrems amb Pirocumulonimbus.",
        "3a: simultaneïtat regional de múltiples GIF; 4a: crema exclusiva de pastures en altitud; 6a: focs topogràfics nocturns lents controlats per marinades suaus.",
        "3a: incendis de baixa intensitat amb flama < 1 m; 4a: incendis sense propagació per paveses; 6a: tots els incendis dominats pel vent sinòptic sense columna convectiva."
      ],
      correctIndex: 1,
      explanation: "Les 6 generacions evolucionen així: 1a continuïtat horitzontal, 2a velocitat/paveses, 3a continuïtat vertical/capçades, 4a Interfície Urbà-Forestal (IUF), 5a simultaneïtat de GIF + IUF i 6a crisi climàtica amb PyroCb."
    },
    {
      id: 'q25-9',
      difficulty: 'Mitjà',
      question: "Segons l'escala de Llargada de Flama (Lf) de l'apartat 2.4.2, quin mitjà correspon a cada interval i a partir de quina Lf un incendi es troba fora de capacitat d'extinció en atac directe?",
      options: [
        "Lf < 1 m: eines manuals i motxilles | 1–3 m: línies d'aigua d'autobomba i helicòpters | 3–5 m: límit amb maquinària/avions | Lf > 5 m: fora de capacitat d'extinció en atac directe.",
        "Lf < 3 m: eines manuals i batefocs | 3–5 m: únicament línies d'aigua d'autobomba sense mitjans aeris | 5–10 m: maquinària pesant | Lf > 10 m: fora de capacitat d'extinció.",
        "Lf < 0,5 m: autobomba amb mànega de Ø25 | 0,5–2 m: només avions amfibis amb retardant | > 2 m: fora de capacitat d'extinció en atac directe ni tan sols amb maquinària.",
        "Lf < 5 m: eines manuals i motxilles sense límit de velocitat de propagació | 5–8 m: helicòpters bombarders | > 8 m: exclusivament contrafoc frontal des del cap."
      ],
      correctIndex: 0,
      explanation: "El manual fixa: Lf < 1 m (atac directe manual), 1–3 m (autobomba i helicòpters), 3–5 m (límit d'atac directe) i > 5 m (fora de capacitat d'extinció en atac directe; només maniobres indirectes o foc tècnic als flancs)."
    },
    {
      id: 'q25-10',
      difficulty: 'Mitjà',
      question: "En la valoració dels 4 patrons de propagació (apartat 3.1), què són els fenòmens 'indraft' i 'downdraft' propis d'un incendi convectiu (dominat pel plomall)?",
      options: [
        "'Indraft' és el pas del foc per una carena amb inversió tèrmica nocturna i 'downdraft' és la crema lenta de sotabosc a l'obaga sense columna de convecció.",
        "'Indraft' és un vent sinòptic sostingut de mestral o tramuntana i 'downdraft' és una línia humida d'aigua aplicada amb autobomba des d'una pista forestal.",
        "'Indraft' és el vent d'aspiració cap a la base de la columna de convecció i 'downdraft' és el desplom violent de la columna que genera vents erràtics en 360° i pluja de paveses.",
        "'Indraft' és la brisa suau de marinada que puja per la vall durant el dia i 'downdraft' és la brisa descendent de muntanya que bufa de forma regular a la nit."
      ],
      correctIndex: 2,
      explanation: "En un incendi convectiu, la forta columna tèrmica genera vents d'aspiració cap endins (indraft) i, si es desploma o col·lapsa, provoca corrents descendents violents (downdraft) amb vents erràtics en 360° i llançament massiu de paveses."
    },
    {
      id: 'q25-11',
      difficulty: 'Difícil',
      question: "Què signifiquen les sigles RAF i LACES en seguretat forestal, i quina condició defineix una Zona Segura (S) segons el capítol 5 de MAN.INVE.000?",
      options: [
        "RAF = Ràdio, Aigua, Foc; LACES = Línies d'Atac, Aigua, Comunicació, Eines, Sector; la Zona Segura requereix confinar-se dins la cabina amb mantes ignífugues.",
        "RAF = Retirada, Aïllament, Flanc; LACES = Localització, Ancoratge, Control, Extinció, Seguiment; la Zona Segura és qualsevol pista forestal de 2 metres d'ample.",
        "RAF = Reagrupament, Autoprotecció, Fugida; LACES = Lookouts, Anchor, Communications, Escape routes, Safety zones; la Zona Segura permet sobreviure SENSE autoprotecció.",
        "RAF = Rescat en Altura Forestal; LACES = Llista d'Eines de Seguretat; la Zona Segura s'estableix sempre a favor de vent al cap de l'incendi sobre matollar baix."
      ],
      correctIndex: 2,
      explanation: "RAF correspon a Reagrupament, Autoprotecció i Fugida. LACES (Lookouts, Anchor/Awareness, Communications, Escape routes, Safety zones) defineix la Zona Segura (amb radi R ≥ 4 × Lf) com un espai on es pot sobreviure sense mitjans d'autoprotecció ni cabina."
    },
    {
      id: 'q25-12',
      difficulty: 'Difícil',
      question: "Dins les tres situacions d'atrapament en autobomba (apartat 5.5), com s'executa la Situació 2 (defensa exterior activa) i quin angle han de mantenir les llances de protecció?",
      options: [
        "S'abandona el camió a peu sense desplegar línies d'aigua i la dotació puja ràpidament pel vessant a favor de vent buscant la carena més propera.",
        "Tota la dotació es tanca dins la cabina des del primer moment amb els ruixadors en marxa sense desplegar cap mànega exterior ni baixar del vehicle.",
        "Es col·loca el camió sobre matoll alt amb el motor parat i es desplega una única línia de Ø70 projectant aigua verticalment cap al cel a un angle de 90°.",
        "S'estaciona sense vegetació amb el motor en marxa, es despleguen 2 línies curtes de Ø25 des del costat protegit i es projecten cortines d'aigua a 45°–60°."
      ],
      correctIndex: 3,
      explanation: "En la Situació 2 d'atrapament, amb clariana i aigua suficient, s'estaciona sense vegetació sota el xassís amb el motor en marxa i es projecten cortines d'aigua amb 2 línies de Ø25 des del costat protegit de la carrosseria amb un angle de 45° a 60°."
    },
    {
      id: 'q25-13',
      difficulty: 'Mitjà',
      question: "En relació amb la distinció entre maniobres d'atac directe i maniobres d'atac indirecte en incendis forestals (MAN.INVE.000), quina afirmació és INCORRECTA?",
      options: [
        "En l'atac directe s'actua directament sobre les flames o la vora del combustible en ignició (amb aigua, retardant, eines manuals o terra mineral).",
        "L'atac indirecte treballa a certa distància del front de flames aprofitant o creant una línia de control per eliminar la continuïtat del combustible abans que hi arribi l'incendi.",
        "L'ús del foc tècnic (cremes d'eixamplament o contrafocs) es classifica dins les maniobres d'atac directe perquè aplica foc sobre el front principal.",
        "Quan la llargada de flama supera els 5 metres (Lf > 5 m), el front queda fora de capacitat d'extinció en atac directe i requereix maniobres indirectes o d'oportunitat."
      ],
      correctIndex: 2,
      explanation: "És incorrecte: el foc tècnic (crema d'eixamplament des de línia d'ancoratge o contrafoc) és una maniobra d'ATAC INDIRECTE, ja que treballa per davant o a distància del front eliminant el combustible disponible abans de l'arribada de les flames."
    },
    {
      id: 'q25-14',
      difficulty: 'Difícil',
      question: "En un incendi forestal de 12 km de perímetre, el comandament comunica al CECAT que l'incendi ja no avança lliurement i evoluciona dins les línies previstes, tot i que encara falta tancar un tram de perímetre al flanc dret on treballen dotacions en atac i remat. En quina Fase INFOCAT es troba l'incendi i quines són les 3 Etapes operatives dels equips?",
      options: [
        "Fase d'Incendi Estabilitzat (de les 4 fases del foc: Actiu, Estabilitzat, Controlat, Extingit) | Les 3 Etapes dels equips d'extinció són Atac, Remat i Rereguarda.",
        "Fase d'Incendi Controlat (perquè ja no avança lliurement) | Les 3 Etapes dels equips són Actiu, Estabilitzat i Controlat.",
        "Fase d'Incendi Actiu | Les 3 Etapes dels equips són Flanc esquerre, Flanc dret i Cua.",
        "Fase d'Incendi Extingit | Les 3 Etapes dels equips són Atac directe, Atac indirecte i Foc tècnic."
      ],
      correctIndex: 0,
      explanation: "Quan el foc ja no avança lliurement però el perímetre encara no està envoltat del tot per una línia de control contínua, es troba en Fase d'Incendi Estabilitzat (INFOCAT). Les 3 Etapes que executen els equips d'extinció són Atac (Actiu), Remat i Rereguarda."
    },
    {
      id: 'q25-15',
      difficulty: 'Mitjà',
      question: "Una dotació forestal treballa en un flanc on la llargada de flama prevista davant un canvi de vent és Lf = 3,5 metres. Segons el protocol LACES, quin radi mínim (R) ha de tenir la Zona Segura fins al combustible sense cremar més proper per poder-hi sobreviure sense mitjans d'autoprotecció ni cabina?",
      options: [
        "R ≥ 7 metres (2 × Lf), sempre que les línies d'aigua estiguin pressuritzades.",
        "R ≥ 14 metres (4 × Lf, equivalent a un espai lliure de combustible d'almenys 28 metres de diàmetre).",
        "R ≥ 3,5 metres (1 × Lf), situant-se preferentment costa amunt del front.",
        "R ≥ 10 metres fixos, independentment de l'alçada de la vegetació i la flama."
      ],
      correctIndex: 1,
      explanation: "El protocol LACES estableix que el radi d'una Zona Segura (S) ha de ser com a mínim 4 vegades la llargada de flama prevista (R ≥ 4 × Lf). Amb Lf = 3,5 m, R ≥ 4 × 3,5 = 14 m."
    },
    {
      id: 'q25-16',
      difficulty: 'Mitjà',
      question: "Respecte als principis del protocol de seguretat LACES en incendis forestals (MAN.INVE.000), assenyala quina afirmació és INCORRECTA:",
      options: [
        "La lletra A (Anchor / Punt d'ancoratge) exigeix començar l'atac des d'una zona segura (cua, carretera o cremat) per evitar que el foc ens envolti per darrere.",
        "La lletra L (Lookouts / Guaites) implica disposar d'observadors amb visió directa del comportament del foc i del personal a la línia.",
        "Una Zona Segura (Safety zone, S) vàlida es defineix com un espai on és obligatori confinar tota la dotació dins la cabina del camió amb els ruixadors en marxa.",
        "Les rutes d'escapament (Escape routes, E) han d'estar clarament definides, netes i comunicades a tota la dotació abans d'iniciar el treball."
      ],
      correctIndex: 2,
      explanation: "És incorrecte: per definició, una Zona Segura (S, amb R ≥ 4 × Lf) permet la supervivència del personal SENSE haver d'utilitzar cap mitjà d'autoprotecció ni refugiar-se dins la cabina d'un vehicle."
    },
    {
      id: 'q25-17',
      difficulty: 'Mitjà',
      question: "En un sector de cua amb matollar baix (Lf = 0,7 m i velocitat d'avanç < 1 km/h), s'ordena fer atac directe amb eines manuals per consolidar la línia fins a terra mineral. Quina és la seqüència correcta d'operadors i quina etapa segueix un cop apagada la flama viva?",
      options: [
        "1r Pala → 2n Pulaski → 3r Batefocs → 4t Motxilla d'aigua (sense separació entre operadors), passant tot seguit a la fase d'Incendi Extingit.",
        "1r Motxilla d'aigua → 2n Batefocs → 3r Pulaski → 4t Pala (amb separació de seguretat), passant posteriorment a l'etapa de Remat i finalment a Rereguarda.",
        "1r Motoserra → 2n Foc tècnic → 3r Batefocs → 4t Motxilla d'aigua, passant directament de l'etapa d'Atac a la fase d'Incendi Estabilitzat.",
        "1r Batefocs → 2n Motxilla d'aigua → 3r Pala → 4t Pulaski (treballant en paral·lel), sense necessitat de punt d'ancoratge ni guaites a la línia."
      ],
      correctIndex: 1,
      explanation: "La cadena d'eines manuals segueix l'ordre inalterable Motxilla (refreda) → Batefocs (sufoca) → Pulaski (talla/cava) → Pala (raspa i enterra), donant pas després a les etapes de Remat (liquidació) i Rereguarda (vigilància)."
    },
    {
      id: 'q25-18',
      difficulty: 'Mitjà',
      question: "Quina diferència exacta existeix entre un incendi en fase 'Estabilitzat' i un incendi en fase 'Controlat' segons la classificació INFOCAT del manual MAN.INVE.000?",
      options: [
        "En fase Controlat encara hi ha fronts de flama avançant lliurement fora de les línies previstes, mentre que en Estabilitzat ja no queda cap brasa calenta ni fum dins del perímetre.",
        "En Estabilitzat el foc no avança lliurement però el perímetre NO està del tot envoltat; en Controlat tot el perímetre està tancat per una línia contínua (tot i haver-hi punts calents).",
        "Tots dos termes corresponen a les Etapes operatives dels equips d'extinció (Atac, Remat i Rereguarda) i s'utilitzen indistintament com a sinònims operatius al CECAT.",
        "Un incendi forestal passa directament de la fase Actiu a la fase Extingit quan desapareixen les flames vives, sense que existeixin fases intermèdies de seguiment."
      ],
      correctIndex: 1,
      explanation: "Estabilitzat significa evolució dins les línies previstes però sense perímetre tancat al 100%; Controlat significa tot el perímetre envoltat per línia de control contínua (fins a sòl mineral o humida) sense possibilitat de creixement."
    },
    {
      id: 'q25-19',
      difficulty: 'Difícil',
      question: "En un incendi forestal, el comandament assigna un vehicle al Sector 4 mentre un segon vehicle rep l'ordre d'iniciar una crema d'eixamplament des d'una pista segura. On treballa el primer vehicle i com es classifica la maniobra del segon?",
      options: [
        "Sector 4 = Flanc esquerre (mirant de cua a cap) | Crema d'eixamplament = Atac directe.",
        "Sector 4 = Flanc dret (sectors parells mirant de la cua cap al cap) | Crema d'eixamplament (foc tècnic) = Maniobra d'atac indirecte.",
        "Sector 4 = Cua de l'incendi | Crema d'eixamplament = Etapa de rereguarda.",
        "Sector 4 = Façana posterior (sentit horari urbà) | Crema d'eixamplament = Situació 3 d'atrapament."
      ],
      correctIndex: 1,
      explanation: "Mirant de la cua (Sector 0) cap al cap, els sectors parells (2, 4, 6...) corresponen al flanc dret. Les maniobres amb foc tècnic (cremes d'eixamplament i contrafocs) formen part de l'atac indirecte."
    }
  ]
};
