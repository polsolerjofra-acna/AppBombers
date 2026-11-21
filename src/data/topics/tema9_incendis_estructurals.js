export const tema9IncendisEstructurals = {
  id: 'tema-24',
  number: 24,
  code: 'MAN.INES.000',
  title: 'Intervenció bàsica en incendis estructurals',
  category: 'Manual Operatiu SGO — Incendis Estructurals i Urbans',
  estimatedMinutes: 55,
  importance: {
    title: "Radar d'Examen — Tema 24 (MAN.INES.000 v.1): Incendis Estructurals",
    frequency: 'Molt Alta (5-7 preguntes fixes sobre façanes A-B-C-D, cabals Ø25/Ø45, recerca i CACE)',
    summary:
      "Manual de 5 capítols operatius: Introducció (Flying 1990, Windsor 2005, Badalona 2020), Coneixements bàsics i Façanes A-B-C-D, Valoració (6 cares, Planta 8 AEA, Ruta freda i lectura del fum), Maniobres (cabals 250/400 L/min, 5 parts de línia, atac a gasos O/Z/8, recerca i ventilació) i Seguretat (zonatge 15 m vs 2×Alçada, CACE, Codi Vermell/SOS i entrada en 4 fases).",
    hotTopics: [
      'Cap. 1-2: Incendis històrics (Flying 1990, Windsor 2005, Badalona 2020), tipologies constructives i nomenclatura de façanes A, B, C, D en sentit HORARI.',
      'Cap. 3: Valoració de les 6 cares del sinistre, límit d’abast de l’AEA (Planta 8 / 30 m), Ruta Freda vs. Ruta Calenta i els 4 atributs de lectura del fum (Volum, Velocitat, Densitat, Color).',
      'Cap. 4.1: Cabal operatiu mínim (Ø25 = 250 L/min [150 kg]; Ø45 = 400 L/min [250 kg]), les 5 parts de la línia d’aigua, atac a gasos (O, Z, 8; <1 s vs. 1-5 s) i atac transicional.',
      'Cap. 4.3-4.4: Ordre de prioritat de recerca segons visibilitat (1r Baixa [6-10 m] → 2n Mitja [>10 m] → 3r Mínima [<6 m] → 4t Alta) i Ventilació (Natural, Antiventilació, VPP i VPN).',
      'Cap. 5: Zonatge de seguretat (15 m mínim o 2 × Alçada si hi ha risc de col·lapse), Taula CACE, Codi Vermell vs. SOS i les 4 fases del Procediment d’Entrada Segura.'
    ],
    traps: [
      'Parany estrella del tribunal: L’ordre de prioritat de recerca per visibilitat NO comença per visibilitat mínima (<6 m), sinó per 1r Visibilitat BAIXA (6-10 m) → 2n MITJA (>10 m) → 3r MÍNIMA (<6 m) → 4t ALTA!',
      'Confondre el sentit de numeració de façanes A-B-C-D (sempre sentit HORARI mirant la façana principal A) amb el d’incendis forestals.',
      'Confondre Codi Vermell (emergència general per a tot el sector/intervenció: col·lapse, retirada immediata) amb SOS (emergència individual d’un bomber o binomi atrapat/perdut).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-2 Tipologies i A-B-C-D',
      title: '1–2. Incendis Històrics, Tipologies Constructives i Nomenclatura de Façanes (A-B-C-D)',
      subtitle: 'Flying (1990), Windsor (2005), Badalona (2020), comportament estructural i sentit horari.',
      blocks: [
        {
          type: 'text',
          heading: '1. Introducció: Els 3 Grans Incendis Històrics de Referència',
          paragraphs: [
            "El manual MAN.INES.000 inicia l'estudi recordant tres incendis estructurals que van marcar un abans i un després en l'operativa i la normativa.",
            "1) Discoteca Flying (Saragossa, 1990): 43 morts per inhalació de fums i gasos tòxics (CO i HCN) en un local subterrani amb evacuació bloquejada.",
            "2) Torre Windsor (Madrid, 2005): gratacel de 106 m on el foc es va propagar verticalment pels buits de façana i patis sense sectorització horitzontal, fent col·lapsar l'estructura metàl·lica superior.",
            "3) Nau ocupada de Badalona (2020): gran incendi estructural amb víctimes mortals i col·lapse parcial que va evidenciar la importància del control d'accessos, l'estabilitat estructural i el zonatge exterior."
          ]
        },
        {
          type: 'table',
          title: '2.2. Tipologies Constructives i Nomenclatura Espacial de l’Edifici (MAN.INES.000 Cap. 2)',
          subtitle: 'Comportament al foc segons l’estructura i sistema internacional de façanes A-B-C-D',
          headers: ['Tipologia / Concepte', 'Característiques i Comportament en Incendi', 'Regla Operativa SGO'],
          rows: [
            ['2.2.1. Estructura Tradicional (Murs de càrrega + bigues de fusta)', 'Murs gruixuts de maó/pedra amb forjats de bigues de fusta i revoltons ceràmics (volta catalana).', 'Si cremen els caps de les bigues de fusta encastats al mur, el forjat pot caure de cop arrossegant la paret. Vigilar sobrecàrrega pel pes de l’aigua d’extinció!'],
            ['2.2.2. Estructura de Formigó Armat', 'Pilars, jàsseres i forjats unidireccionals o reticulars de formigó i acer.', 'Bona resistència inicial, però atenció a l’SPALLING (esclats del recobriment que deixen l’armadura vista) i a les bovedilles de porexpan (poliestirè expandit, que fon i goteja inflamant-se!).'],
            ['2.2.3. Estructura Metàl·lica (Acer)', 'Naus industrials amb pilars i encavallades d’acer sense protecció o amb projecció.', 'A 300 °C comença a perdre resistència i a 550 °C perd el 50%. La dilatació empeny els murs perimetrals cap a fora i provoca col·lapses sobtats.'],
            ['2.2.8. Nomenclatura de Façanes (A, B, C, D)', '• Façana A = Façana principal d’accés o on s’ubica el primer vehicle de comandament.\n• Façana B = Costat ESQUERRE (mirant A des de fora).\n• Façana C = Façana POSTERIOR.\n• Façana D = Costat DRET.', 'Les façanes A → B → C → D es numeren sempre seguint el SENTIT DE LES BUSQUES DEL RELLOTGE (Sentit Horari) en planta!'],
            ['Plantes i Interiors', 'PB (Planta Baixa), PL+1, PL+2... i Soterranis S-1, S-2... Quadrants interiors A, B, C, D.', 'Permet ubicar qualsevol binomi per ràdio amb precisió quirúrgica (ex: "Binomi 1 a PL+3, façana B").']
          ],
          footnote: 'Memoritza: Mirant l’edifici des del carrer principal (Façana A), a la teva esquerra tens la Façana B, al darrere la C i a la teva dreta la D (sentit horari en planta).'
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! Façanes A-B-C-D (Urbà) vs. Sectors (Forestal)',
          paragraphs: [
            "En incendis estructurals, mirant l'edifici des de la façana principal (A), les façanes B (esquerra), C (posterior) i D (dreta) es numeren sempre en SENTIT HORARI en planta.",
            "No ho confonguis amb incendis forestals: allà el Sector 0 és la cua i, mirant cap al cap, els sectors imparells (1, 3...) van a l'esquerra i els parells (2, 4...) a la dreta."
          ]
        },
        {
          type: 'mnemonic',
          title: 'Regla de Relació · Fases vs. Etapes d’un incendi',
          acronym: 'Fases → Foc (F)  |  Etapes → Equips d’extinció (E)',
          trick:
            'Fases comença per F com Foc (Actiu, Estabilitzat, Controlat i Extingit). Etapes comença per E com Equips d’extinció (Actiu/Atac, Remat i Rereguarda).',
          example:
            'No les barregis mai: les Fases les marca el Foc (4); les Etapes les marquen els Equips d’extinció (3).'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 3 Valoració i Fum',
      title: '3. Valoració de l’Incendi: Les 6 Cares, Límit AEA (Planta 8), Ruta Freda i Lectura del Fum',
      subtitle: 'Avaluació 360°, compartimentació Ruta Freda vs. Ruta Calenta i els 4 paràmetres del fum.',
      blocks: [
        {
          type: 'text',
          heading: '3.1–3.2. Valoració de les 6 Cares, Abast de l’Autoescala (Planta 8) i Ruta Freda',
          paragraphs: [
            "En arribar al sinistre, el comandament ha de fer una valoració tridimensional de les 6 CARES del recinte o edifici: les 4 façanes laterals (A, B, C, D) + la cara inferior (planta inferior o soterrani sota el foc) + la cara superior (planta immediatament superior o coberta, on es propaga la calor per convecció).",
            "DADA CLAU DEL MANUAL (3.2): Una Autoescala Automàtica (AEA) estàndard de 30 metres té el seu límit operatiu de rescat a la PLANTA 8 (PL+8). A partir de la planta 9 (i sempre que el vial no permeti emplaçar l'AEA), tota l'accessibilitat depèn de l'escala interior de l'edifici.",
            "Per això és vital preservar la RUTA FREDA (la caixa d'escala i vies d'evacuació lliures de fum on els ocupants poden fugir i els bombers pujar sense exposició tèrmica), separada de la RUTA CALENTA (l'interior de l'habitatge o sector incendiat, a partir de la porta d'accés al pis)."
          ]
        },
        {
          type: 'table',
          title: '3.3–3.4. Lectura del Fum (4 Atributs) i les 3 Formes de Propagació Exterior/Interior',
          subtitle: 'Interpretació del comportament dels gasos d’incendi abans d’obrir la porta (MAN.INES.000 Cap. 3)',
          headers: ['Paràmetre / Propagació', 'Què Observa el Bomber?', 'Significat Tàctic i Risc Associat'],
          rows: [
            ['1. Volum de fum', 'Quantitat total de fum que surt o omple el recinte.', 'Indica la mida i extensió del combustible que està pirolitzant (poc volum en gran recinte vs. recinte saturat).'],
            ['2. Velocitat (i Règim)', 'Laminar (lent i suau) vs. Turbulent (ràpid, agitat, a polsacions).', 'El fum turbulent i ràpid indica alta pressió i ALTA TEMPERATURA a prop del focus. Si "respira" a polsacions → alerta de BACKDRAFT!'],
            ['3. Densitat (Opacitat)', 'Clar/translúcid vs. Espès i opac (com un mur).', 'La densitat indica la concentració de combustible gasós i sutge sense cremar (el fum dens és COMBUSTIBLE pur a punt d’inflamar-se!).'],
            ['4. Color del fum', 'Blanc (vapor/inici) → Gris → Negre (hidrocarburs/plàstics amb molt carboni) → Groguenc/Marró.', 'ATENCIÓ: El fum groguenc-marronós dens és el signe clàssic d’acumulació de gasos de piròlisi rics en quitrans en un incendi ofegat (ILV) amb risc extrem de Backdraft!'],
            ['3.4. Les 3 Vies de Propagació', '1) Per Flames (contacte/autoexposició exterior per finestres)\n2) Per Fums i Gasos calents (convecció per escales, patis i falsos sostres)\n3) Per Partícules inflamades o Degoteig (paveses o plàstics fosos que cauen).', 'El tancament de la porta del pis incendiat (Confinament / Antiventilació) talla de cop la propagació per fums cap a l’escala!']
          ],
          footnote: 'Els 4 atributs de la lectura del fum: VOLUM + VELOCITAT + DENSITAT + COLOR (VVDC).'
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! Flashover vs. Backdraft (Explosió de Fum)',
          paragraphs: [
            "• FLASHOVER (Inflamació Generalitzada): Es produeix en un incendi ventilat (controlat pel combustible) quan la radiació tèrmica del coixí de gasos calents (~500-600 °C) fa entrar en ignició simultània totes les superfícies combustibles del recinte. Signes: llengües de foc al sostre (rollover), radiació extrema i baixada ràpida del pla neutre.",
            "• BACKDRAFT (Explosió de Fum): Es produeix en un incendi ofegat / limitat per ventilació (ILV) amb molt gas de piròlisi sense cremar per falta d'oxigen. Si s'obre de cop una porta o finestra, entra aire fresc i es produeix una deflagració violenta cap a l'exterior. Signes: fum dens groguenc-marronós que 'respira' a polsacions, vidres ennegrits per sutge i absència de flama visible."
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 4.1 Extinció i Línies',
      title: '4.1. Maniobres d’Extinció: Cabals (250 / 400 L/min), 5 Parts de la Línia i Atac a Gasos',
      subtitle: 'Mànegues Ø25 vs. Ø45, reserva d’atac, tècnica 3D de polsacions (O, Z, 8) i atac transicional.',
      blocks: [
        {
          type: 'table',
          title: '4.1.3–4.1.4. Elecció de Mànega (Ø25 vs. Ø45) i les 5 Parts de la Instal·lació Hidràulica',
          subtitle: 'Dades numèriques literals del Capítol 4 de MAN.INES.000',
          headers: ['Element / Mànega', 'Valors Oficials del Manual MAN.INES.000', 'Funció i Criteri Operatiu'],
          rows: [
            ['Mànega Ø 25 mm (Atac interior habitatge)', 'Cabal mínim operatiu: 250 L/min | Pes de la línia plena (40 m): ~150 kg', 'Més lleugera i manejable per avançar per passadissos i girs d’habitatges amb càrrega de foc moderada.'],
            ['Mànega Ø 45 mm (Gran càrrega tèrmica)', 'Cabal mínim operatiu: 400 L/min | Pes de la línia plena (40 m): ~250 kg', 'Obligatòria en locals comercials, magatzems, indústries, pàrquings o incendis estructurals totalment desenvolupats.'],
            ['Part 1: Alimentació', 'Hidrant públic → Autobomba (mànega Ø70 mm)', 'Garanteix el subministrament continu d’aigua a la cisterna del camió.'],
            ['Part 2: Estesa (Línia Mare)', 'Autobomba → Bifurcació (mànega Ø70 mm o Columna Seca DN 80)', 'Transporta el cabal amb mínima pèrdua de càrrega fins a prop de la planta afectada.'],
            ['Part 3: Bifurcació (Punt d’Atac)', 'Situada SEMPRE en Ruta Freda (1 planta per sota de la planta incendiada!)', 'Divideix l’estesa en Línia d’Atac i Línia de Seguretat. Mai es col·loca davant mateix de la porta en flames!'],
            ['Part 4: Línia d’Atac (amb Reserva)', 'Bifurcació → Llança d’atac (amb bucle de reserva a l’escala abans d’entrar)', 'La reserva de mànega desplegada a la Ruta Freda permet avançar dins del pis sense estirar tota la instal·lació.'],
            ['Part 5: Línia de Seguretat (SOS)', ' Segona línia connectada a la bifurcació i pressuritzada', 'Protegeix la retirada del binomi d’atac i l’actuació de l’equip SOS.']
          ],
          footnote: 'Memoritza: Ø25 = 250 L/min (150 kg) | Ø45 = 400 L/min (250 kg) | Bifurcació = 1 planta per sota del foc (en Ruta Freda) | 5 parts de la línia.'
        },
        {
          type: 'table',
          title: '4.1.5–4.1.6. Tècniques d’Aplicació d’Aigua: Refredament de Gasos (O, Z, 8), Directe i Transicional',
          subtitle: 'Durada de les polsacions (<1 s vs. 1-5 s), patró de moviment i control del vapor',
          headers: ['Tècnica d’Extinció', 'Obertura de Llança i Durada', 'Execució i Objectiu Físic'],
          rows: [
            ['1. Polsació Curta a Gasos (Test de Sostre / 3D)', 'Con obert (~30°-60°) durant MENYS D’1 SEGON (< 1 s)', 'S’aplica cap al coixí de gasos del sostre a l’entrar per avaluar la temperatura i inertitzar sense trencar l’estratificació tèrmica.'],
            ['2. Polsació Llarga / Escombrat de Gasos (O, Z, 8)', 'Durada d’1 a 5 SEGONS dibuixant una "O", una "Z" o un "8" al sostre', 'Reparteix microgotes per tot el volum de gasos sobreescalfats perquè s’evaporin al núvol de fum (sense mullar les parets, que generaria vapor escaldant sobre el binomi!).'],
            ['3. Atac Directe (al Combustible)', 'Raig ple o con estret dirigit a la base de les flames i superfícies', 'Refreda directament el material sòlid en combustió quan ja es té visió del focus.'],
            ['4. Atac Indirecte (des de fora)', 'Projectar aigua al sostre i parets d’un recinte tancat sense ocupants', 'Genera una gran massa de vapor (1 L → 1.700 L) que sufoca tot el compartiment (NO usar si hi ha víctimes vives a dins!).'],
            ['5. Atac Transicional (Ofensiu des de l’exterior)', 'Raig sòlid dirigit amb angle fix al SOSTRE de l’habitació per una finestra exterior (10-20 s)', 'Redueix dràsticament la temperatura interior i evita el Flashover MENTRE el binomi interior puja per l’escala per entrar per la porta (no empeny el foc cap a dins si es tira amb raig compacte al sostre sense moure la llança en cercle!).']
          ],
          footnote: 'Pregunta molt típica: Quins tres traços es dibuixen amb la llança en el refredament de gasos? La "O", la "Z" i el "8" (polsacions curtes < 1 s o llargues d’1 a 5 s).'
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! Atac Transicional vs. Refredament de Gasos (3D) vs. Atac Indirecte',
          paragraphs: [
            "• ATAC TRANSICIONAL: Es fa des de l'EXTERIOR per una finestra dirigint un raig sòlid amb angle fix contra el SOSTRE (10–20 s), sense moure'l en cercles. L'objectiu és abatre ràpidament la potència del foc abans que entri el binomi interior, sense empènyer vapor cap a l'escala.",
            "• REFREDAMENT DE GASOS (Atac 3D): Es fa des de l'INTERIOR sobre el coixí de fums amb con obert (30°–60°) i polsacions curtes (< 1 s) o llargues (1–5 s) dibuixant 'O', 'Z' o '8'. Busca inertitzar els gasos sense mullar parets per no generar vapor escaldant.",
            "• ATAC INDIRECTE: Es projecta aigua a sostre i parets d'un recinte tancat SENSE víctimes per generar una gran massa de vapor (1 L → 1.700 L) que sufoqui el foc. Prohibit si hi pot haver ocupants vius a dins!"
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 4.3-4.5 Recerca i Vent.',
      title: '4.3–4.5. Recerca i Rescat (Ordre per Visibilitat), Ventilació Operativa i Serveis',
      subtitle: 'Prioritat de recerca (Baixa → Mitja → Mínima → Alta), tècniques de rastreig i VPP vs. VPN.',
      blocks: [
        {
          type: 'text',
          heading: '⚠️ No confondre! VPP (Pressió Positiva) vs. VPN (Pressió Negativa)',
          paragraphs: [
            "• VPP (Pressió Positiva): El ventilador s'ubica a l'EXTERIOR (a 1,5–2,5 m de la porta d'entrada) bufant aire net cap endins. Regla d'or: obrir SEMPRE la sortida de fums (1–2× l'entrada) ABANS d'engegar el ventilador i tenir el focus localitzat amb línia d'aigua a punt.",
            "• VPN (Pressió Negativa): L'extractor es col·loca a la finestra o conducte ASPIRANT el fum cap a fora (depressió). S'empra en atmosferes inflamables/explosives (equips ATEX) o per desenfumar locals petits post-incendi."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: '4.3.1. Ordre Oficial de Prioritat de Recerca segons la Visibilitat (PARANY D’EXAMEN!)',
          acronym: '1r BAIXA (6–10 m)  →  2n MITJA (> 10 m)  →  3r MÍNIMA (< 6 m)  →  4t ALTA (Sense fum)',
          trick:
            "• Per què 1r Visibilitat BAIXA (6–10 m) i 2n MITJA (> 10 m)? Les víctimes tenen alta probabilitat de sobreviure però s'intoxiquen ràpid, i el binomi pot rastrejar molt de pressa.\n• Per què 3r MÍNIMA (< 6 m)? A tocar del focus la visibilitat és nul·la, l'avanç és molt lent i sovint cal abatre primer les flames.\n• 4t ALTA: Zona lliure de fum (sense risc immediat).",
          example: 'Si el test pregunta: "Quina zona es prioritza en 1r lloc en una recerca de víctimes segons la visibilitat?", la resposta correcta és SEMPRE: 1r Visibilitat Baixa (6–10 m)!'
        },
        {
          type: 'table',
          title: '4.4. Tàctiques de Ventilació Operativa en Incendis Estructurals',
          subtitle: 'Natural, Antiventilació, Ventilació per Pressió Positiva (VPP) i Negativa (VPN)',
          headers: ['Tàctica de Ventilació', 'Mecanisme Físic', 'Condicions d’Aplicació Segura'],
          rows: [
            ['1. Antiventilació (Confinament)', 'Tancar portes i finestres (o col·locar cortina bloquejadora de fum a la porta).', 'Aïlla l’incendi en fase ILV per privar-lo d’O₂ i evita que el fum envaeixi la Ruta Freda (caixa d’escala).'],
            ['2. Ventilació Natural', 'Obertura coordinada de buits (entrada inferior i sortida superior/exutori) aprofitant la flotabilitat tèrmica i el vent.', 'Simple però depèn del vent exterior (mai obrir una finestra a sobrevent si empeny el foc cap a l’escala!).'],
            ['3. VPP (Ventilació per Pressió Positiva)', 'Un motoventilador situat a l’EXTERIOR (a 1,5-2,5 m de la porta d’entrada) injecta un con d’aire que segella el marc, pressuritza el recinte i expulsa el fum per una obertura de sortida.', 'REGLA D’OR VPP: L’obertura de SORTIDA de fums (d’àrea 1 a 2 vegades la d’entrada) s’ha d’obrir SEMPRE ABANS d’engegar el ventilador, i el focus ha d’estar localitzat amb línia d’aigua a punt!'],
            ['4. VPN (Ventilació per Pressió Negativa)', 'Un extractor situat a la finestra o conducte ASPIRA el fum de dins cap a fora (creant depressió interior).', 'S’utilitza en atmosferes explosibles/inflamables (amb extractor ATEX i mànegues aspirants) o per desenfumar locals petits post-incendi.']
          ],
          footnote: '4.5. Gestió de serveis: Tallar el subministrament de gas i electricitat de la zona afectada, però NO tallar l’alimentació elèctrica dels grups de pressió PCI, ascensors d’emergència o sistemes de ventilació de l’escala!'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Cap. 5 Seguretat i CACE',
      title: '5. Seguretat Operativa: Zonatge (15 m / 2×Alçada), CACE, Codi Vermell/SOS i 4 Fases d’Entrada',
      subtitle: 'Distàncies d’abalisament, control d’accessos CACE, emergències i el Procediment d’Entrada Segura.',
      blocks: [
        {
          type: 'table',
          title: '5.2–5.5. Zonatge Exterior, Taula CACE, Codi Vermell vs. SOS i Treball en Binomi',
          subtitle: 'Protocols de seguretat d’obligat compliment del Capítol 5 de MAN.INES.000',
          headers: ['Protocol de Seguretat', 'Valor o Definició Oficial (MAN.INES.000)', 'Aplicació Pràctica'],
          rows: [
            ['5.2. Zonatge de Seguretat en Façana', '• Distància mínima general: 15 metres de la façana.\n• Amb risc de col·lapse estructural: 2 × Alçada de l’edifici!', 'Protegeix de la caiguda de vidres, aparells d’aire condicionat, cornises o esfondrament del mur de façana.'],
            ['5.3. CACE (Control d’Accés i Control d’ERA)', 'Taula de registre a l’accés de la Zona Calenta controlada per un responsable.', 'Registra de cada binomi que entra: nom/codi dels bombers, pressió inicial de les ampolles (300 bar), hora d’entrada, ubicació assignada i hora límit prevista de sortida.'],
            ['5.4. Codi Vermell vs. SOS', '• CODI VERMELL = Emergència col·lectiva per a TOT el sector/intervenció (ex: risc imminent de col·lapse o Flashover → evacuació immediata de tothom).\n• SOS = Emergència individual d’un bomber o binomi (atrapat, perdut, ferit o sense aire).', 'En activar-se un SOS, es desplega immediatament el Binomi de Seguretat (Equip SOS) exclusivament dedicat a rescatar els companys.'],
            ['5.5. Regla Indissoluble del Binomi', 'Mínim 2 bombers que entren junts, treballen junts i surten junts.', 'Mantenir contacte visual, físic o per la mateixa mànega en tot moment. Si un membre arriba a l’alarma d’aire (o té un problema), SURT TOT EL BINOMI!']
          ],
          footnote: 'Memoritza les dues distàncies de zonatge en façana: 15 metres (ordinària per caiguda d’objectes) vs. 2 × Alçada de l’edifici (si hi ha risc de col·lapse estructural).'
        },
        {
          type: 'text',
          heading: '5.7. Procediment d’Entrada Segura en 4 Fases (Obertura de Porta)',
          paragraphs: [
            "Abans d'obrir la porta d'un recinte incendiat, el binomi (EPI complet, sotacasc, ERA connectat i línia purgada a 6–7 bar) executa 4 fases seqüencials:",
            "• FASE 1 (Valoració prèvia): Observar sortida de fum, comprovar frontisses, tocar la porta de baix a dalt amb el dors de la mà (o càmera tèrmica) i revisar el pom.",
            "• FASE 2 (Posicionament i obertura de control): Un bomber es protegeix al costat del pany i el punta de llança a punt; s'obre la porta uns centímetres (2–3 s) per llegir el pla neutre i si el fum surt o aspira aire.",
            "• FASE 3 (Refredament de gasos): Si hi ha gasos calents, polsació curta polvoritzada al coixí superior i tancament parcial per deixar actuar el vapor.",
            "• FASE 4 (Progressió interior): Entrada ajupits sota el pla neutre, posant sempre una falca a la porta perquè no es tanqui darrere el binomi, i avançant amb O/Z/8."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Regla Ràpida · Les 4 Fases d’Entrada Segura i Codi Vermell vs. SOS',
          acronym: 'FASE 1: Valorar porta → FASE 2: Test 2–3 s → FASE 3: Refredar gasos → FASE 4: Entrar amb falca',
          trick:
            "• Codi Vermell = Emergència col·lectiva per a TOT el sector (retirada immediata per col·lapse o fenomen extrem).\n• SOS = Emergència individual d'un bomber o binomi atrapat/sense aire (s'activa l'equip SOS).",
          example: 'Mai posar-se de peu davant del marc de la porta mentre s’obre: els gasos a 600 °C surten per la meitat superior del marc!'
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · 📌 Resum 1/2 (Xifres)',
      title: 'Resum Final (1/2): Taula Mestra de Xifres, Cabals i Metres (MAN.INES.000)',
      subtitle: 'Totes les dades numèriques d’Incendis Estructurals reunides en una sola taula de memorització.',
      blocks: [
        {
          type: 'table',
          title: 'Síntesi Numèrica Imprescindible d’Examen — Tema 24 (Incendis Estructurals)',
          subtitle: 'Les 14 xifres oficials del manual MAN.INES.000 que has de dominar al 100%',
          headers: ['Concepte Operatiu', 'Valor Exacte (MAN.INES.000)', 'Recordatori Tàctic'],
          rows: [
            ['1. Els 3 Incendis Històrics del Manual', 'Flying (1990) | Torre Windsor (2005) | Badalona (2020)', 'Flying = fums subterranis | Windsor = façana/acer | Badalona = col·lapse nau'],
            ['2. Nomenclatura de Façanes (A, B, C, D)', 'A = Principal | B = Esquerra | C = Posterior | D = Dreta', 'Numerades sempre en SENTIT HORARI mirant la façana A'],
            ['3. Valoració Tridimensional', 'Les 6 cares del sinistre', '4 façanes (A, B, C, D) + planta inferior + planta superior'],
            ['4. Límit Operatiu d’una AEA Estàndard (30 m)', 'Fins a la Planta 8 (PL+8)', 'A partir de PL+9 l’accés i rescat és exclusivament per escala interior'],
            ['5. Cabal i Pes de Línia d’Atac Ø 25 mm', 'Cabal mínim = 250 L/min | Pes plena (40 m) ≈ 150 kg', 'Habitatges i focs compartimentats de càrrega moderada'],
            ['6. Cabal i Pes de Línia d’Atac Ø 45 mm', 'Cabal mínim = 400 L/min | Pes plena (40 m) ≈ 250 kg', 'Indústries, comerços, aparcaments o foc generalitzat'],
            ['7. Les 5 Parts de la Instal·lació Hidràulica', '1. Alimentació | 2. Estesa | 3. Bifurcació | 4. Línia d’atac | 5. Línia de seguretat', 'La bifurcació es munta sempre 1 planta per sota del foc (Ruta Freda)'],
            ['8. Durada Polsacions d’Atac a Gasos (3D)', 'Polsació curta < 1 segon | Polsació llarga d’1 a 5 segons', 'Traços al sostre en forma de "O", "Z" o "8"'],
            ['9. Ordre de Prioritat de Recerca per Visibilitat', '1r Baixa (6-10 m) → 2n Mitja (>10 m) → 3r Mínima (<6 m) → 4t Alta', 'Es prioritza on hi ha víctimes salvables en risc imminent (6-10 m)'],
            ['10. Zonatge Exterior Ordinari en Façana', 'Mínim 15 metres de separació de la façana', 'Protecció contra caiguda de vidres i elements no estructurals'],
            ['11. Zonatge Exterior amb Risc de Col·lapse', '2 × Alçada de l’edifici', 'Perímetre d’exclusió davant possible esfondrament de façana'],
            ['12. Les 4 Fases d’Entrada Segura', '1. Valorar porta → 2. Obrir control/test → 3. Refredar gasos → 4. Progressió sota pla neutre', 'Deixar sempre una falca perquè la porta no es tanqui de cop darrere el binomi']
          ],
          footnote: 'Pàgina 1 de 2 del Resum Executiu del Tema 24 (MAN.INES.000).'
        }
      ]
    },
    {
      pageNumber: 7,
      isSummary: true,
      shortLabel: 'Pàg. 7 · 📌 Resum 2/2 (Punts Clau)',
      title: 'Resum Final (2/2): Maniobres Clau, Decàleg i Paranys d’Examen (MAN.INES.000)',
      subtitle: 'Les regles tàctiques i distincions operatives que garanteixen l’encert al test.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Els 5 Punts Crítics del Tema 24 que Sempre Pregunta el Tribunal',
          acronym: 'FAÇANES HORÀRIES | BIFURCACIÓ (Planta -1) | RECERCA (Baixa 6-10m) | VPP (Sortida abans) | CODI VERMELL vs SOS',
          trick:
            "1) FAÇANES A-B-C-D: Sentit horari mirant la façana principal A (B = esquerra, C = posterior, D = dreta).\n2) RUTA FREDA: Bifurcació i reserva de mànega sempre 1 planta per sota del foc.\n3) RECERCA: 1r Baixa (6–10 m) → 2n Mitja (>10 m) → 3r Mínima (<6 m) → 4t Alta.\n4) VPP vs TRANSICIONAL: En VPP obrir sortida ABANS d'engegar; en transicional raig sòlid fix al sostre des de fora.\n5) CODI VERMELL vs SOS: Codi Vermell = retirada col·lectiva; SOS = rescat individual de binomi.",
          example: 'Si l’incendi és a la Planta 4 (PL+4), la bifurcació es col·loca al replà de la Planta 3 (PL+3, Ruta Freda).'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q24-1',
      difficulty: 'Difícil',
      question: "Segons l'apartat 4.3.1 del manual MAN.INES.000, quin és l'ordre de prioritat de recerca de víctimes en un incendi estructural en funció del nivell de visibilitat?",
      options: [
        '1r Visibilitat Mínima (< 6 m) → 2n Baixa (6-10 m) → 3r Mitja (> 10 m) → 4t Alta',
        '1r Visibilitat Baixa (6-10 m) → 2n Mitja (> 10 m) → 3r Mínima (< 6 m) → 4t Alta',
        '1r Visibilitat Alta → 2n Mitja (> 10 m) → 3r Baixa (6-10 m) → 4t Mínima (< 6 m)',
        'Es fa sempre a l’atzar sense tenir en compte la visibilitat'
      ],
      correctIndex: 1,
      explanation: "El manual estableix com a prioritat: 1r Visibilitat Baixa (6-10 m), 2n Visibilitat Mitja (>10 m), 3r Visibilitat Mínima (<6 m) i 4t Visibilitat Alta."
    },
    {
      id: 'q24-2',
      difficulty: 'Fàcil',
      question: "En la nomenclatura estandarditzada d'edificis (A, B, C, D) del manual MAN.INES.000, si la Façana A és la façana principal d'accés, quina és la Façana B i quina la Façana D mirant l'edifici des del carrer?",
      options: [
        'Façana B = Posterior | Façana D = Esquerra',
        'Façana B = Lateral esquerre | Façana D = Lateral dret (numeració en sentit horari)',
        'Façana B = Lateral dret | Façana D = Lateral esquerre (sentit antihorari)',
        'Façana B = Coberta | Façana D = Soterrani'
      ],
      correctIndex: 1,
      explanation: 'Numerant en sentit horari sobre el plànol des de la façana principal A (a baix), la façana B correspon al costat esquerre, la C a la part posterior i la D al costat dret.'
    },
    {
      id: 'q24-3',
      difficulty: 'Mitjà',
      question: "Quin és el cabal mínim operatiu i el pes aproximat d'una línia d'atac plena (40 m) de mànega de Ø 25 mm i de Ø 45 mm segons el manual d'incendis estructurals?",
      options: [
        'Ø25: 100 L/min (50 kg) | Ø45: 200 L/min (100 kg)',
        'Ø25: 250 L/min (150 kg) | Ø45: 400 L/min (250 kg)',
        'Ø25: 400 L/min (250 kg) | Ø45: 800 L/min (500 kg)',
        'Totes dues treballen a 150 L/min i pesen 80 kg'
      ],
      correctIndex: 1,
      explanation: 'L’apartat 4.1.3 estableix per a Ø25 un cabal de 250 L/min (~150 kg de pes) i per a Ø45 un cabal de 400 L/min (~250 kg de pes).'
    },
    {
      id: 'q24-4',
      difficulty: 'Mitjà',
      question: "Quina és la distància mínima d'abalisament (zonatge de seguretat) respecte de la façana d'un edifici incendiat en condicions normals, i quina quan hi ha risc de col·lapse estructural?",
      options: [
        '5 metres en condicions normals i 15 metres quan existeix risc de col·lapse estructural',
        '15 metres en condicions normals i 2 vegades l’alçada de l’edifici amb risc de col·lapse estructural',
        '25 metres en condicions normals i 50 metres fixos amb independència de l’alçada de l’edifici',
        '10 metres en condicions normals i 1 vegada l’alçada de l’edifici amb risc de col·lapse estructural'
      ],
      correctIndex: 1,
      explanation: "L'apartat 5.2 fixa una distància mínima de 15 m davant de façana per caiguda d'elements, que s'amplia a 2 vegades l'alçada de l'edifici si s'aprecia risc d'esfondrament."
    },
    {
      id: 'q24-5',
      difficulty: 'Mitjà',
      question: "Quina diferència hi ha entre declarar un 'Codi Vermell' i declarar un 'SOS' en una intervenció estructural?",
      options: [
        'Codi Vermell s’activa exclusivament per a incendis forestals amb risc d’atrapament i SOS per a incendis urbans en edificis de gran alçada.',
        'Codi Vermell és una alerta general d’evacuació immediata per a tot el sector/intervenció, mentre que SOS és l’alerta d’un bomber o binomi atrapat.',
        'SOS s’utilitza per demanar un reforç immediat de cabal d’aigua al camió bomba i Codi Vermell per sol·licitar l’arribada urgent d’una ambulància SVA.',
        'No hi ha cap diferència operativa entre tots dos codis: tots dos impliquen aturar l’extinció i activar automàticament el relleu de tot el personal.'
      ],
      correctIndex: 1,
      explanation: 'El Codi Vermell afecta a tot el personal de la intervenció/sector davant un risc imminent (col·lapse, Flashover), mentre que el SOS l’activa un bomber o binomi que necessita rescat.'
    },
    {
      id: 'q24-6',
      difficulty: 'Mitjà',
      question: "Quines són les 6 cares que s'han d'avaluar en la valoració tridimensional d'un incendi estructural i fins a quina planta arriba el límit operatiu d'una autoescala (AEA) estàndard de 30 metres?",
      options: [
        "Només la façana principal, la façana posterior, la coberta i tres plantes interiors; l'AEA de 30 m arriba fins a la Planta 12 (PL+12).",
        "Les 4 façanes (A, B, C, D), la coberta i el nucli d'escala comunitària; l'AEA de 30 m arriba com a màxim fins a la Planta 5 (PL+5).",
        "Les 4 façanes (A, B, C, D), la cara inferior (planta inferior/soterrani) i la superior (planta superior/coberta); l'AEA de 30 m arriba fins a PL+8.",
        "Les 6 plantes immediatament superiors al focus de l'incendi sense valorar el soterrani; l'AEA de 30 m arriba fins a la Planta 10 (PL+10)."
      ],
      correctIndex: 2,
      explanation: "La valoració de les 6 cares inclou les 4 façanes (A, B, C, D) més la planta inferior i la planta superior/coberta. L'abast operatiu d'una AEA estàndard de 30 m arriba fins a la Planta 8 (PL+8)."
    },
    {
      id: 'q24-7',
      difficulty: 'Mitjà',
      question: "Quins són els 4 atributs de la lectura del fum en un incendi estructural i què anuncia un fum dens de color groguenc-marronós que surt a polsacions ('respira')?",
      options: [
        "Volum, Velocitat, Densitat i Color; el fum groguenc-marronós dens a polsacions indica acumulació de gasos de piròlisi en un incendi ofegat (ILV) amb risc extrem de Backdraft.",
        "Temperatura, Pressió, Humitat i Olor; el fum groguenc-marronós a polsacions indica un incendi en fase de decaïment ja extingit i sense risc d'inflamació.",
        "Alçada, Amplada, Pes i Flama; el fum groguenc-marronós a polsacions indica que l'incendi és ric en oxigen (ventilat) i sense risc d'explosió de gasos.",
        "Direcció, Durada, Luminositat i So; el fum groguenc-marronós a polsacions indica únicament vapor d'aigua net procedent del refredament de les parets."
      ],
      correctIndex: 0,
      explanation: "Els 4 atributs de la lectura del fum són Volum, Velocitat, Densitat i Color. El fum groguenc-marronós dens i turbulent o a polsacions és el signe clàssic d'acumulació de quitrans i gasos en un incendi limitat per ventilació (ILV) amb perill de Backdraft."
    },
    {
      id: 'q24-8',
      difficulty: 'Mitjà',
      question: "Quines són les 5 parts de la instal·lació hidràulica d'extinció segons l'apartat 4.1.4 de MAN.INES.000 i on s'ha de muntar sempre la bifurcació?",
      options: [
        "1) Hidrant, 2) Bomba, 3) Mànega de Ø70, 4) Ràcord Barcelona i 5) Llança; la bifurcació es munta al replà de la mateixa planta incendiada.",
        "1) Pressió, 2) Cabal, 3) Reserva, 4) Refredament i 5) Extinció; la bifurcació es munta dins del rebedor del pis incendiat abans d'avançar.",
        "1) Bomba, 2) Columna seca, 3) Reducció, 4) Bucle i 5) Escuma; la bifurcació es munta directament a la sortida d'impulsió del camió bomba.",
        "1) Alimentació, 2) Estesa (línia mare), 3) Bifurcació, 4) Línia d'atac (amb reserva) i 5) Línia SOS; la bifurcació es munta en Ruta Freda (1 planta per sota)."
      ],
      correctIndex: 3,
      explanation: "Les 5 parts són Alimentació, Estesa, Bifurcació, Línia d'atac i Línia de seguretat. La bifurcació s'ubica sempre a la Ruta Freda (una planta per sota de la planta afectada), mai davant mateix de la porta del foc."
    },
    {
      id: 'q24-9',
      difficulty: 'Mitjà',
      question: "En les tècniques d'aplicació d'aigua (apartats 4.1.5–4.1.6), quina durada tenen les polsacions de refredament de gasos, quins traços dibuixen i com s'executa l'atac transicional?",
      options: [
        "Polsació curta de 5 a 10 s i llarga de 30 s en línia recta sobre el terra; l'atac transicional ruixa en cercles des de l'escala interior.",
        "Polsació curta < 1 s (test) i llarga d'1–5 s dibuixant 'O', 'Z' o '8' al sostre; l'atac transicional aplica raig sòlid fix al sostre des de fora (10–20 s).",
        "Polsacions exclusivament de 5 a 10 s contra les parets laterals; l'atac transicional es fa obrint el con de polvorització a 60° des del replà.",
        "No es fan polsacions en atac 3D, sinó un raig continu sobre el mobiliari; l'atac transicional s'aplica només després de completar la ventilació."
      ],
      correctIndex: 1,
      explanation: "El refredament de gasos (3D) utilitza polsacions curtes (< 1 s) de test i polsacions llargues (1–5 s) en forma de 'O', 'Z' o '8'. L'atac transicional projecta un raig sòlid fix al sostre des de l'exterior per abatre temperatura sense empènyer gasos cap a l'escala."
    },
    {
      id: 'q24-10',
      difficulty: 'Mitjà',
      question: "Quina és la regla d'or obligatòria abans d'engegar el motoventilador en una Ventilació per Pressió Positiva (VPP) i en què es diferencia de la Ventilació per Pressió Negativa (VPN)?",
      options: [
        "En VPP cal obrir SEMPRE la sortida de fums (1–2 vegades l'entrada) ABANS d'engegar el ventilador exterior (1,5–2,5 m) amb línia a punt; la VPN aspira fum creant depressió.",
        "En VPP s'engega el ventilador amb totes les finestres tancades per comprimir el coixí de fums; la VPN bufa aire net cap a l'interior des de la coberta de l'edifici.",
        "En VPP el motoventilador es col·loca dins l'habitació incendiada apuntant cap al passadís; la VPN no utilitza cap extractor mecànic i depèn només del tiratge tèrmic.",
        "Tant la VPP com la VPN s'apliquen obligatòriament abans de localitzar el focus de l'incendi i sense necessitat de tenir cap línia d'aigua pressuritzada a punt."
      ],
      correctIndex: 0,
      explanation: "En VPP el ventilador exterior injecta aire per pressuritzar el recinte, però és imprescindible obrir prèviament la sortida de fums i tenir línia d'aigua a punt. En VPN un extractor situat a la finestra o conducte aspira el fum creant depressió interior."
    },
    {
      id: 'q24-11',
      difficulty: 'Difícil',
      question: "Com responen al foc les estructures metàl·liques (acer) i les estructures de formigó armat segons el capítol 2 de MAN.INES.000?",
      options: [
        "L'acer estructural sense protecció no perd resistència fins als 1.200 °C i el formigó armat mai pateix esclats ni pèrdua de recobriment durant un incendi interior.",
        "L'acer es contrau amb l'augment de temperatura i el formigó armat col·lapsa sempre per torsió abans que les bigues de fusta massissa d'un edifici antic.",
        "L'acer perd resistència des dels 300 °C (50% a 550 °C) i la seva dilatació empeny els murs; el formigó pot patir 'spalling' i les bovedilles de porexpan fonen i degoten en flames.",
        "Només les estructures de pedra natural i fàbrica de maó pateixen dilatacions tèrmiques i 'spalling', mentre que el formigó i l'acer mantenen intacta la seva capacitat portant."
      ],
      correctIndex: 2,
      explanation: "L'acer sense protecció comença a perdre resistència als 300 °C i perd el 50% als 550 °C (provocant empentes per dilatació). En formigó armat cal vigilar l'esclat del recobriment (spalling) i el degoteig en flames de bovedilles de porexpan."
    },
    {
      id: 'q24-12',
      difficulty: 'Difícil',
      question: "Quin és l'ordre de les 4 fases del Procediment d'Entrada Segura (apartat 5.7) i quines dades registra el responsable de la taula CACE (apartat 5.3)?",
      options: [
        "1. Projectar aigua per sota la porta → 2. Forçar el pany → 3. Entrar ràpidament de peu → 4. Ventilar la sala; el CACE només apunta la matrícula del camió i el codi del parc d'origen.",
        "1. Obrir del tot la porta → 2. Apagar el focus directe → 3. Tocar la porta → 4. Sortir del pis; el CACE registra només l'hora de sortida i el nombre total de mànegues desplegades.",
        "1. Connectar l'ERA dins el pis → 2. Obrir les finestres → 3. Col·locar la falca → 4. Tocar les frontisses; el CACE controla exclusivament el repartiment d'eines manuals i càmeres tèrmiques.",
        "1. Valorar la porta (fum, Tª) → 2. Obrir uns cm protegit (2–3 s) → 3. Refredar gasos → 4. Progressar ajupit amb falca; el CACE registra nom/codi, pressió inicial, hora entrada, ubicació i hora límit."
      ],
      correctIndex: 3,
      explanation: "Les 4 fases d'entrada segura són: valorar porta/Tª, posicionament protegit i obertura de control, refredament de gasos i progressió sota el pla neutre deixant falca. La taula CACE registra identitat del binomi, pressió inicial, hora d'entrada, ubicació i hora límit."
    },
    {
      id: 'q24-13',
      difficulty: 'Mitjà',
      question: "En arribar a un incendi en un edifici entre mitgeres, el comandament observa des del carrer (mirant la façana principal d'accés) que per la façana posterior surt fum groguenc-marronós molt dens a polsacions ('respira'), i ordena emplaçar l'autoescala a la façana lateral dreta. Com s'identifiquen aquestes façanes segons la senyalització horària A-B-C-D i quin risc anuncia el fum?",
      options: [
        "Façana principal = A; lateral dreta = B; posterior = C | El fum groguenc-marronós a polsacions indica un incendi totalment ventilat i sense risc imminent de Backdraft.",
        "Façana principal = A; posterior = C; lateral dreta = D (sentit horari, B a l'esquerra) | El fum dens groguenc-marronós a polsacions anuncia un ILV amb risc extrem de Backdraft.",
        "Façana principal = A; posterior = B; lateral dreta = C (sentit antihorari, D a l'esquerra) | El fum indica únicament vapor d'aigua net procedent d'una avaria de calefacció.",
        "Façana principal = 0; posterior = 2; lateral dreta = 1 (nomenclatura forestal per sectors) | El fum dens a polsacions indica un incendi ja en fase de decaïment controlat."
      ],
      correctIndex: 1,
      explanation: "La senyalització de façanes A-B-C-D es fa en sentit horari mirant la façana principal A (B = esquerra, C = posterior, D = dreta). Un fum dens groguenc-marronós a polsacions indica acumulació de gasos de piròlisi en un ILV amb risc imminent de Backdraft."
    },
    {
      id: 'q24-14',
      difficulty: 'Mitjà',
      question: "Respecte a la diferència operativa entre l'atac transicional i el refredament de gasos (atac 3D) al manual MAN.INES.000, assenyala quina afirmació és INCORRECTA:",
      options: [
        "L'atac transicional s'aplica des de l'exterior (habitualment per una finestra) projectant un raig sòlid amb angle fix contra el sostre (10–20 s) per abatre la temperatura abans o durant la progressió interior.",
        "En l'atac transicional s'ha d'evitar remoure el raig en cercles o ruixar directament el pla de la finestra per no empènyer gasos calents i vapor cap a l'escala ni cap als equips interiors.",
        "El refredament de gasos (atac 3D) s'executa a l'interior sobre el coixí de fums mitjançant polsacions curtes (< 1 s) i llargues (1–5 s) dibuixant 'O', 'Z' o '8' amb aigua polvoritzada.",
        "L'atac transicional consisteix a entrar dins del recinte i aplicar un raig sòlid continu sobre el mobiliari per generar el màxim volum de vapor encara que hi hagi víctimes."
      ],
      correctIndex: 3,
      explanation: "És incorrecte: aquesta descripció barreja atac interior directe/indirecte. L'atac transicional es fa des de l'EXTERIOR amb raig sòlid fix al sostre per reduir la potència del foc abans de l'atac interior, mentre que el refredament de gasos es fa a l'interior amb polsacions polvoritzades (O/Z/8)."
    },
    {
      id: 'q24-15',
      difficulty: 'Difícil',
      question: "Sobre el comportament al foc de les estructures d'acer i dels forjats de formigó armat amb bovedilles de porexpan (poliestirè expandit), quina afirmació és INCORRECTA?",
      options: [
        "L'acer estructural sense protecció comença a perdre resistència mecànica al voltant dels 300 °C.",
        "Cap als 550 °C, l'acer ha perdut aproximadament el 50% de la seva resistència i la seva dilatació tèrmica pot empènyer i fer col·lapsar els murs de càrrega.",
        "En forjats amb bovedilles de porexpan, la calor les fon i genera degoteig en flames i fums densos, deixant exposades les biguetes de formigó a l'esclat del recobriment (spalling).",
        "Les bovedilles de porexpan són incombustibles i actuen com a escut tèrmic que protegeix indefinidament les biguetes i l'armadura del forjat."
      ],
      correctIndex: 3,
      explanation: "És incorrecte: el porexpan (poliestirè expandit) és combustible, fon a baixa temperatura i goteja en flames desprenent fum negre tòxic, deixant les biguetes i armadures desprotegides davant la calor directa."
    },
    {
      id: 'q24-16',
      difficulty: 'Difícil',
      question: "En un incendi desenvolupat a la planta 3 amb flames sortint per una finestra de la façana A mentre un binomi puja per l'escala interior per accedir-hi, quina seqüència operativa és la correcta?",
      options: [
        "Muntar la bifurcació a la planta 3 davant la porta del pis afectat, engegar VPP sense obrir sortida de fums i aplicar aigua en cercles des del carrer cap a la finestra.",
        "Muntar bifurcació i reserva a la Ruta Freda (planta 2), fer atac transicional exterior amb raig sòlid fix al sostre i executar les 4 fases d'entrada segura.",
        "Obrir la porta interior de bat a bat sense falca i realitzar un atac indirecte massiu amb raig polvoritzat encara que hi pugui haver ocupants inconscients a l'interior.",
        "Refredar únicament les façanes laterals B i D amb línia de Ø25 a 100 L/min i esperar que l'estructura arribi als 550 °C abans d'autoritzar l'entrada del binomi."
      ],
      correctIndex: 1,
      explanation: "La bifurcació i la reserva es munten sempre a la Ruta Freda (1 planta per sota); l'atac transicional des de fora amb angle fix al sostre redueix ràpidament la càrrega tèrmica sense desplaçar gasos cap a l'escala, i el binomi interior aplica les 4 fases d'entrada segura."
    },
    {
      id: 'q24-17',
      difficulty: 'Mitjà',
      question: "En la valoració exterior d'un incendi en una nau industrial tancada, s'observa un volum moderat de fum gris-negre molt dens sortint a gran velocitat i pressió per les escletxes superiors d'una persiana metàl·lica, sense flama visible. Quina interpretació operativa correspon a aquesta lectura del fum?",
      options: [
        "Indica que l'incendi ja es troba en fase de decaïment avançat i sense energia tèrmica significativa per falta de combustible sòlid a l'interior.",
        "L'alta velocitat i pressió d'un fum dens i fosc per la part alta indica elevada acumulació d'energia i gasos sense cremar en un ILV amb risc d'inflamació sobtada.",
        "La sortida ràpida de fum significa que totes les portes interiors estan obertes i l'incendi és ric en oxigen sense cap perill d'explosió tipus Backdraft.",
        "La lectura del fum només té en compte el color i l'olor del residu, ja que la velocitat i la densitat depenen únicament del vent exterior sobre la persiana."
      ],
      correctIndex: 1,
      explanation: "Els 4 atributs de lectura del fum són Volum, Velocitat, Densitat i Color. Un fum fosc/dens que surt a alta pressió i velocitat per escletxes altes sense flama visible delata una forta pressió interior i gasos combustibles calents en un ILV."
    },
    {
      id: 'q24-18',
      difficulty: 'Mitjà',
      question: "Quina diferència fonamental distingeix un 'Flashover' d'un 'Backdraft' en la dinàmica d'un incendi estructural?",
      options: [
        "El Flashover es produeix en un incendi limitat per ventilació (ILV) en obrir una porta, mentre que el Backdraft es produeix per radiació tèrmica en un incendi ventilat.",
        "El Flashover és la inflamació generalitzada per radiació en un incendi ventilat (controlat pel combustible); el Backdraft és l'explosió de gasos en un ILV en entrar oxigen.",
        "Tots dos termes són sinònims exactes en la dinàmica d'incendis i presenten sempre flames visibles intenses i contínues a l'exterior abans de produir-se.",
        "El Backdraft només es produeix a l'exterior d'edificis amb façana ventilada, mentre que el Flashover es limita exclusivament a compartiments sense cap obertura."
      ],
      correctIndex: 1,
      explanation: "El Flashover és una transició tèrmica per radiació en un incendi ventilat (~500–600 °C), mentre que el Backdraft és una explosió provocada per l'aportació sobtada d'aire en un incendi ofegat (ILV) carregat de gasos de piròlisi sense cremar."
    },
    {
      id: 'q24-19',
      difficulty: 'Mitjà',
      question: "Respecte a les tècniques d'aplicació d'aigua al manual MAN.INES.000, quina afirmació sobre l'atac indirecte és INCORRECTA?",
      options: [
        "L'atac indirecte consisteix a projectar aigua cap al sostre i les parets d'un recinte tancat des de l'exterior per generar una gran massa de vapor d'aigua (expansió 1 L → 1.700 L).",
        "L'atac indirecte NO s'ha d'utilitzar si hi pot haver víctimes vives dins del compartiment, ja que el vapor escaldant i el desplaçament d'aire són letals.",
        "L'atac indirecte és sinònim exacte del refredament de gasos (atac 3D), i consisteix a fer polsacions curtes < 1 s en forma de 'O', 'Z' o '8' mentre avancem dins d'un pis amb víctimes.",
        "A diferència de l'atac indirecte, en el refredament de gasos es busca evaporar microgotes al coixí de fums sense mullar les parets calentes."
      ],
      correctIndex: 2,
      explanation: "És incorrecte: l'atac indirecte (massiu per generar vapor i sufocar un recinte tancat sense víctimes) és diferent del refredament de gasos 3D (polsacions O/Z/8 al núvol de fum sense mullar parets)."
    }
  ]
};
