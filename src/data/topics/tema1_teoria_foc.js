export const tema1TeoriaFoc = {
  id: 'tema-8',
  number: 8,
  code: 'MAN.GRAL.008',
  title: 'Teoria del foc i agents extintors',
  category: 'Manual Operatiu SGO — Fonaments del Foc',
  estimatedMinutes: 50,
  importance: {
    title: "Radar d'Examen — Tema 8 (MAN.GRAL.008 V.1): Teoria del Foc i Extinció",
    frequency: 'Molt Alta (5-7 preguntes fixes a cada convocatòria)',
    summary:
      "Manual de 13 capítols que defineix tota la fisicoquímica de l'incendi. Estudia els 6 blocs teòrics seguint l'índex oficial del PDF i repassa les 2 últimes pàgines (Pàg. 7 i 8) amb el Resum Executiu de totes les xifres i paranys d'examen.",
    hotTopics: [
      'Cap. 2-4: Velocitat d’oxidació (lenta, simple, deflagració subsònica cm/s-m/s, detonació supersònica km/s) i Triangle vs. Tetraedre.',
      'Cap. 5-8: Classes UNE-EN 2 (A, B, C, D, F), punts d’inflamació/combustió/autoignició, LII-LSI, % d’O₂ (21%, >21%, 16%, <15%, <5%) i ILC vs. ILV.',
      'Cap. 9-10: Transmissió (Conducció, Convecció, Radiació T⁴) i efectes en Acer (300 °C inici pèrdua / 550 °C crítica), Formigó (Spalling) i Fusta.',
      'Cap. 11-12: Flashover (combustió generalitzada sobtada, 500-600 °C i 20 kW/m²) vs. Backdraft (explosió de fums per entrada d’O₂), Boil-over, BLEVE i gasos (CO, HCN, CO₂).',
      'Cap. 13: Mecanismes d’extinció, Aigua (1 L → 1.700 L vapor a 100 °C), Escuma (baixa <20, mitjana 20-200, alta >200 i prohibició PFAS 4/07/2025), Pols (10-20 µm) i CO₂.'
    ],
    traps: [
      'Confondre Deflagració (subsònica, ona de pressió 1-10 vegades P inicial) amb Detonació (supersònica >340 m/s, fins a 100 vegades P inicial).',
      'Confondre Punt d’Inflamació o Flash Point (no manté flama si es retira la font) amb Punt de Combustió o Fire Point (manté flama ≥ 5 s) i Autoignició (sense font externa).',
      'Data normativa del manual: prohibició d’escumes amb PFAS a partir del 4 de juliol de 2025.'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-4 Combustió',
      title: '1–4. Reaccions d’Oxidació, Velocitat de Combustió, Triangle i Tetraedre',
      subtitle: 'Naturalesa REDOX del foc, classificació per velocitat i comburent, i els 4 factors del foc.',
      blocks: [
        {
          type: 'text',
          heading: '1–3. Reaccions d’Oxidació-Reducció i Tipus de Combustió',
          paragraphs: [
            "El foc és la manifestació visual i tèrmica d'una reacció química d'oxidació-reducció (REDOX) fortament exotèrmica entre una substància reductora (el combustible, que s'oxida perdent electrons) i una substància oxidant (el comburent, generalment l'O₂, que es redueix guanyant electrons). L'incendi és un foc no controlat en l'espai ni en el temps.",
            "Segons la quantitat de comburent disponible (secció 3.1.2), la combustió és COMPLETA quan hi ha suficient O₂ i els productes s'oxiden al seu grau màxim (CO₂, H₂O, SO₂; flama blavosa i poc fum), o INCOMPLETA quan hi ha dèficit d'O₂, generant productes parcialment oxidats, tòxics i inflamables (monòxid de carboni CO, sutge C, cianur d'hidrogen HCN; flama groga/ataronjada)."
          ]
        },
        {
          type: 'table',
          title: '3.1.1. Classificació de les Reaccions d’Oxidació segons la Velocitat',
          subtitle: 'Valors literals del manual MAN.GRAL.008',
          headers: ['Tipus de Reacció', 'Velocitat del Front', 'Ona de Pressió Associada', 'Característiques i Exemples'],
          rows: [
            ['1. Oxidació lenta', ' Sense flama (hores/anys)', 'Nul·la', 'La calor es dissipa a l’ambient sense emissió de llum (rovell del ferro, respiració cel·lular, fermentació).'],
            ['2. Combustió simple (normal)', 'mm/s a pocs cm/s', 'Nul·la (P = constant)', 'Foc habitual de fusta, paper o bassal de líquid obert a l’atmosfera.'],
            ['3. Deflagració', 'Subsònica (< 340 m/s: cm/s a m/s)', '1 a 10 vegades la pressió inicial', 'Propagació per conductivitat tèrmica i difusió (explosió de núvol de gas propà o pols de farina).'],
            ['4. Detonació', 'Supersònica (> 340 m/s: km/s)', 'Fins a 100 vegades la pressió inicial', 'Ona de xoc supersònica que comprimeix i inflama el material instantàniament (dinamita, TNT, hidrogen confinat).']
          ],
          footnote: 'Diferència clau d’examen: Deflagració = SUBSÒNICA (1-10×P) | Detonació = SUPERSÒNICA (fins a 100×P).'
        },
        {
          type: 'easy',
          title: '4. Triangle del Foc (3 costats) vs. Tetraedre del Foc (4 cares)',
          metaphor:
            'El Triangle del Foc és un tamboret de 3 potes que explica com comença una brasa; el Tetraedre és una piràmide de 4 cares que explica com es manté viva una flama.',
          explanation:
            "• TRIANGLE DEL FOC (Combustió sense flama / incandescència o brasa): 1) Combustible + 2) Comburent + 3) Energia d'activació (Calor).\n• TETRAEDRE DEL FOC (Combustió amb flama, que sempre es produeix en fase gasosa): afegeix el 4t element: la REACCIÓ EN CADENA (transmissió de radicals lliures OH*, H*, O* entre molècules que autoalimenta la flama).",
          takeaway: 'Sense Reacció en Cadena no hi ha flama (només brasa). La pols química ABC i els gasos halogenats ataquen directament aquesta 4a cara!'
        },
        {
          type: 'mnemonic',
          title: 'Regles Mnemotècniques · Redox (PORC/GROC) i Fases vs. Etapes',
          acronym: 'PORC (Combustible) · GROC (Comburent) | Fases → Foc · Etapes → Equips',
          trick:
            '• REDOX: PORC = el combustible Perd electrons, s’Oxida i actua com a agent Reductor. GROC = el comburent Guanya electrons, es Redueix i actua com a agent Oxidant.\n• FASES vs. ETAPES: Fases → Foc (F: Actiu, Estabilitzat, Controlat i Extingit) | Etapes → Equips d’extinció (E: Actiu/Atac, Remat i Rereguarda).',
          example:
            'Si a l’examen pregunten per l’evolució del foc parlen de FASES (F: Actiu, Estabilitzat, Controlat, Extingit); si pregunten per la feina dels bombers parlen d’ETAPES (E: Actiu/Atac, Remat, Rereguarda).'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 5-7 Combustibles',
      title: '5–7. Combustibles, Classes de Foc UNE-EN 2, Punts Crítics i LII/LSI',
      subtitle: 'Paràmetres tèrmics (Flash Point, Fire Point, Autoignició), rang d’inflamabilitat, comburents i fonts d’ignició.',
      blocks: [
        {
          type: 'table',
          title: '5.1. Classificació Europea de Focs segons Norma UNE-EN 2 (i Classe L del Glossari)',
          subtitle: 'Tipus de combustible i comportament davant dels agents extintors',
          headers: ['Classe de Foc', 'Naturalesa del Combustible', 'Exemples Típics', 'Agent Extintor més Adeqüat'],
          rows: [
            ['Classe A', 'Sòlids (generalment orgànics) que formen brases', 'Fusta, paper, cartró, carbó, teixits, plàstics termoestables', 'Aigua (raig/polvoritzada amb humectant), escuma, pols ABC'],
            ['Classe B', 'Líquids inflamables o sòlids que es fonen (sense brasa)', 'Gasolina, gasoil, alcohol, pintura, cera, parafina, asfalt', 'Escuma física, pols ABC/BC, CO₂ (MAI aigua a raig!)'],
            ['Classe C', 'Gasos inflamables', 'Metà (gas natural), propà, butà, hidrogen, acetilè', 'Tallar subministrament (tancar vàlvula) / pols ABC o BC'],
            ['Classe D', 'Metalls combustibles i reactius', 'Magnesi, sodi, potassi, alumini en pols, titani, liti metàl·lic', 'Pols específica Classe D (clorur sòdic, grafit, coure). MAI aigua ni CO₂!'],
            ['Classe F', 'Olis i greixos de cocció en aparells de cuina', 'Fregidores industrials i olis vegetals/animals a >300 °C', 'Agents químics humits Classe F (acetat de potassi per saponificació)'],
            ['Classe L (Nou SGO)', 'Bateries d’ió liti (Li-ion) en embalatge tèrmic', 'Patinet elèctric, vehicle EV, sistemes d’emmagatzematge', 'Refrigeració massiva prolongada amb aigua / manta ignífuga']
          ],
          footnote: 'Nota: L’antiga "Classe E" (foc elèctric) NO existeix a la UNE-EN 2; és qualsevol foc (A o B) amb presència de tensió elèctrica.'
        },
        {
          type: 'table',
          title: '5.3. Paràmetres Fisicoquímics dels Combustibles (Definició Literal d’Examen)',
          subtitle: 'Els 6 indicadors que determinen la perillositat d’un líquid o gas inflamable',
          headers: ['Paràmetre', 'Definició Exacta (MAN.GRAL.008)', 'Detall / Exemple Operatiu'],
          rows: [
            ['1. Punt d’Inflamació (Flash Point)', 'Tª mínima a la qual un combustible emet prou vapors per inflamar-se en presència d’una font d’ignició externa, però s’apaga si es retira la font.', 'Gasolina ≈ -40 °C (ja emet vapors inflamables sota zero!) | Gasoil > 60 °C.'],
            ['2. Punt de Combustió (Fire Point)', 'Tª mínima (uns graus superior al Flash Point) a la qual els vapors continuen cremant de forma sostinguda (mínim 5 segons) un cop retirada la font d’ignició.', 'Sol estar entre 5 °C i 20 °C per sobre del punt d’inflamació.'],
            ['3. Punt d’Autoignició', 'Tª mínima a la qual una substància s’inflama espontàniament per si sola SENSE necessitat de cap flama o espurna externa.', 'Paradoxalment, la gasolina té autoignició (~280 °C) superior al gasoil (~220 °C).'],
            ['4. LII i LSI (Rang d’Inflamabilitat)', 'LII (Límit Inferior) = % mínim de vapor en aire (sota el LII la mescla és massa pobra). LSI (Límit Superior) = % màxim (sobre el LSI és massa rica i falta O₂).', 'Propà: 2,1%–9,5% | Metà: 5%–15% | CO: 12,5%–74% | Hidrogen: 4%–75% | Acetilè: 2,5%–82%.'],
            ['5. Densitat Relativa de Vapor (d)', 'Relació entre el pes molecular del gas/vapor i l’aire (Aire = 1).', 'd < 1 puja al sostre (H₂, CH₄, NH₃, CO lleugerament) | d > 1 baixa a terra (Propà 1,5, Butà 2,0, vapors de gasolina 3-4).'],
            ['6. Poder Calorífic (PCS vs. PCI)', 'Quantitat de calor alliberada per unitat de massa (kcal/kg o MJ/kg).', 'El PCS inclou la calor latent de condensació del vapor d’aigua format; el PCI no la inclou (fusta ≈ 4.000 kcal/kg; hidrocarburs ≈ 10.000-11.000 kcal/kg).']
          ],
          footnote: 'Efecte de la Temperatura sobre el rang LII-LSI: Si augmenta la temperatura, el rang s’EIXAMPLA (baixa el LII i puja el LSI)!'
        },
        {
          type: 'text',
          heading: '6. Comburents i 7. Fonts d’Ignició (4 orígenes)',
          paragraphs: [
            "6. Comburents: L'aire sec conté un 21% d'O₂, un 78% de N₂ i un 1% d'altres gasos (argó, CO₂). Existeixen substàncies que porten oxigen a la seva estructura molecular (peròxids orgànics, nitrats, clorats, hipoclorits) i poden cremar sense aire exterior.",
            "7. Fonts d'ignició: Es classifiquen en 4 orígens: 1) Tèrmiques (flama oberta, superfícies calentes, radiació solar), 2) Elèctriques (efecte Joule I²·R·t, curtcircuit, arc voltaic, electricitat estàtica i llamps), 3) Mecàniques (fricció, impacte/espurnes mecàniques i compressió adiabàtica d'un gas) i 4) Químiques (reaccions exotèrmiques espontànies, autohumectació de fenc/carbó)."
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 8-9 Calor i O₂',
      title: '8–9. Condicionants de la Combustió (O₂, ILC/ILV) i Transmissió de Calor',
      subtitle: 'Efectes del % d’oxigen, incendis limitats pel combustible vs. ventilació i llei de Stefan-Boltzmann (T⁴).',
      blocks: [
        {
          type: 'table',
          title: '8.1. Efectes de la Concentració d’Oxigen (O₂) sobre el Foc i el Bomber',
          subtitle: 'Escala crítica de percentatges d’oxigen en aire (MAN.GRAL.008 Secció 8.1)',
          headers: ['% d’Oxigen (O₂) en Aire', 'Comportament de la Combustió', 'Efecte Fisiològic / Operatiu'],
          rows: [
            ['> 21% (> 23% Atm. sobreoxigenada)', 'Augmenta dràsticament la velocitat de combustió, la Tª de flama i s’eixampla el rang LII-LSI (el LSI puja moltíssim).', 'Materials ignífugs a 21% cremen amb violència; greixos i olis s’autoinflamen en contacte amb O₂ pur!'],
            ['21% (Atmosfera normal)', 'Combustió ordinària amb flama i brasa.', 'Respiració normal.'],
            ['16% – 17%', 'Disminueix la lluminositat i velocitat de les flames.', 'Inici d’hipòxia en humans (augment de FR i FC, pèrdua de coordinació).'],
            ['< 15% (14% – 15%)', 'Cessa la combustió amb FLAMA de la majoria de líquids i sòlids (sufocació de flama).', 'Mareig greu, confusió i pèrdua de consciència ràpida sense ERA.'],
            ['< 5% (0% – 5%)', 'S’extingeix fins i tot la combustió incandescent (BRASA) en focs profunds.', 'Mort per asfíxia en pocs minuts. (Excepció: alguns metalls Classe D i peròxids cremen a 0% d’O₂!).']
          ],
          footnote: 'Memoritza: < 15% O₂ s’apaga la FLAMA | < 5% O₂ s’apaga la BRASA.'
        },
        {
          type: 'text',
          heading: '8.2–8.5. Superfície/Massa, Humitat, Temperatura i Ventilació (ILC vs. ILV)',
          paragraphs: [
            "• Relació Superfície/Massa (8.2): Com més dividit està un sòlid (encenalls o pols en suspensió vs. tronc massís), més superfície està en contacte amb l'O₂ i més ràpid crema (la pols en suspensió arriba a deflagrar).\n• Humitat (8.3): L'aigua continguda al combustible (especialment en forestal) absorbeix calor per evaporar-se (539 cal/g), retardant la ignició.",
            "• Ventilació (8.4): Un incendi en les seves fases inicials o a l'aire lliure és un ILC (Incendi Limitat pel Combustible: té O₂ de sobres i creix segons el combustible disponible). Quan l'incendi es desenvolupa dins d'un recinte tancat i consumeix l'oxigen, passa a ser un ILV (Incendi Limitat per la Ventilació: queden molts gasos de piròlisi calents per sobre del LSI esperant que algú obri una porta o finestra per inflamar-se!)."
          ]
        },
        {
          type: 'table',
          title: '9. Els 3 Mecanismes de Transmissió de la Calor i la Propagació',
          subtitle: 'Conducció, Convecció i Radiació (Secció 9.1 de MAN.GRAL.008)',
          headers: ['Mecanisme', 'Física del Transport', 'Llei i Impacte en l’Incendi'],
          rows: [
            ['9.1.1. Conducció', 'Contacte directe molècula a molècula sense desplaçament de matèria (propi dels sòlids).', 'Bigues metàl·liques o canonades que travessen un mur tallafoc i encenen l’habitació contigua. L’aigua condueix 20 vegades més que l’aire.'],
            ['9.1.2. Convecció', 'Moviment real de massa d’un fluid calent (gasos o líquids) per diferència de densitat.', 'Principal mecanisme de propagació VERTICAL i interior (efecte xemeneia per buits d’escala i patis de llums; mou el 70-80% de la calor del plomall).'],
            ['9.1.3. Radiació', 'Ones electromagnètiques (infraroges) a la velocitat de la llum; NO necessita medi material (viatja pel buit).', 'Llei de Stefan-Boltzmann: l’energia radiada creix amb la QUARTA POTÈNCIA de la Tª absoluta (E ∝ T⁴). Si T(K) es duplica, la radiació es multiplica per 16 (2⁴)! ÉS la causa del Flashover i la propagació entre façanes.']
          ],
          footnote: 'A més de l’atenuació amb el quadrat de la distància (1/d²), la radiació viatja en línia recta en totes direccions (360°).'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 10 Materials',
      title: '10. Efectes de la Temperatura en els Materials Constructius',
      subtitle: 'Comportament estructural de l’acer (300 °C / 550 °C), el formigó (Spalling) i la fusta davant del foc.',
      blocks: [
        {
          type: 'text',
          heading: '10.1. Dilatació Tèrmica i Pèrdua de Capacitat Portant',
          paragraphs: [
            "Tots els materials experimenten dilatació tèrmica en escalfar-se. Si un element estructural (com una biga d'acer) té els extrems encastats i no es pot dilatar lliurement, exerceix empentes horitzontals enormes que poden tombar pilars o murs de càrrega, o bé es vincla (pandeig) i col·lapsa."
          ]
        },
        {
          type: 'table',
          title: '10.2. Comparativa Oficial de Comportament al Foc: Acer vs. Formigó vs. Fusta',
          subtitle: 'Temperatures crítiques i fenòmens de col·lapse (Capítol 10 de MAN.GRAL.008)',
          headers: ['Material Constructiu', 'Temperatures Crítiques', 'Comportament i Fenomen Característic', 'Risc per al Bomber'],
          rows: [
            ['Acer estructural', '300 °C (inici pèrdua) | 550 °C (Tª crítica: perd el 50% de resistència)', 'Alta conductivitat tèrmica i gran dilatació (~1,2 cm per cada metre a 1.000 °C). Es deforma plàsticament i perd rigidesa.', 'Col·lapse sobtat per pandeig o empenta lateral sobre murs. Si es refreda bruscament amb raig d’aigua es contrau de cop!'],
            ['Formigó armat', '> 300 °C (microfissures) | > 500 °C (descomposició hidròxid càlcic)', 'Baixa conductivitat tèrmica (protegeix l’armadura), però pateix SPALLING (esclats o desconxats explosius de la capa superficial pel vapor d’aigua atrapat als porus).', 'Quan salta el recobriment per Spalling, les barres d’acer interiors queden nues al foc i l’estructura cau ràpidament.'],
            ['Fusta (Massissa)', '~200-280 °C (piròlisi) | ~300 °C (carbonització)', 'És combustible (Classe A), però la capa exterior de carbó vegetal formada (~0,6-0,8 mm/min) actua com a excel·lent AÏLLANT tèrmic que protegeix el nucli sa interior.', 'Comportament molt previsible en bigues gruixudes, però les unions metàl·liques fallen abans que la fusta.']
          ],
          footnote: 'Pregunta clàssica d’examen: A quina temperatura crítica l’acer estructural perd prop del 50% de la seva capacitat portant? A ~550 °C (iniciant la caiguda a partir dels 300 °C).'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Cap. 11-12 Fenòmens',
      title: '11–12. Fenòmens Extrems (Flashover, Backdraft, BLEVE, Boil-over) i Gasos',
      subtitle: 'Desenvolupament d’incendis en interiors, explosions físiques/químiques i toxicitat de productes.',
      blocks: [
        {
          type: 'table',
          title: '11. Comparativa Crítica: Flashover vs. Backdraft (i altres fenòmens extrems)',
          subtitle: 'Diferències físiques, indicadors previs i règim de ventilació (Capítol 11 MAN.GRAL.008)',
          headers: ['Fenomen Extrem', 'Definició i Règim (ILC / ILV)', 'Indicadors i Valors Crítics', 'Actuació Operativa'],
          rows: [
            ['Flashover (Combustió Generalitzada Sobtada)', 'Transició ràpida on TOTS els combustibles d’un recinte ventilat s’inflamen gairebé alhora per RADIACIÓ tèrmica des del coixí de fums del sostre. (Passa d’ILC a incendi totalment desenvolupat).', 'Tª al sostre ≈ 500–600 °C i flux radiant al terra ≈ 20 kW/m².aparició de llengües de foc al sostre (Rollover / Ángeles bailando).', 'Refredament dels gasos del sostre amb polsacions curtes d’aigua polvoritzada i mantenir-se ajupit sota el pla neutre.'],
            ['Backdraft (Explosió de Fums)', 'Deflagració violenta en un recinte TANCat en règim ILV (O₂ < 15%, gasos calents per sobre del LSI) quan s’obre una porta/finestra i entra aire fresc que porta la mescla dins del rang LII-LSI.', 'Fum groguenc/marró dens que surt a polsacions ("l’incendi respira"), vidres negres de sutge i molt calents, absència de flames visibles, silenci o xiulets d’aspiració.', 'NO obrir la porta! Ventilar per la part més alta (coberta) o refredar des de l’exterior abans de qualsevol aportació d’aire.'],
            ['Boil-over (Rebrollada)', 'Projecció violenta d’un tanc obert de petroli cru o hidrocarbur pesant amb un fons d’aigua quan l’ona de calor (150-300 °C) arriba al fons i vaporitza l’aigua de cop (×1.700 volum).', 'Només passa en hidrocarburs de destil·lació àmplia (cru, fueloil) amb coixí d’aigua al fons del tanc.', 'Controlar l’ona de calor amb càmera tèrmica o pintura termosensible i evacuar si l’ona toca l’aigua del fons.'],
            ['Slop-over i Froth-over', 'Vessament menys violent d’oli/asfalt calent pel contacte superficial amb aigua.', 'Slop-over: quan tirem aigua/escuma sobre la superfície d’un tanc en flames. Froth-over: espumeig sense incendi quan entra aigua a asfalt calent.', 'Aplicar escuma suaument per les parets del tanc.'],
            ['BLEVE', 'Boiling Liquid Expanding Vapor Explosion: explosió física (i bola de foc si és inflamable) per ruptura catastròfica d’un recipient tancat que conté un líquid sobreescalfat molt per sobre del seu punt d’ebullició a 1 atm.', 'Flama dardo incidint sobre la FASE GAS de la cisterna (on l’acer no està refrigerat pel líquid interior), xiulets de la vàlvula d’alleujament.', 'Refrigerar intensivament la FASE GAS de la cisterna des de lluny amb monitors (>100-500 m).']
          ],
          footnote: 'Regla mnemotècnica: FLASHOVER = Calor/Radiació (500-600°C, 20 kW/m², recinte ventilat) | BACKDRAFT = Oxigen (recinte tancat ILV que s’obre).'
        },
        {
          type: 'table',
          title: '12. Productes de la Combustió: Els 3 Gasos Tòxics Principals i el Fum',
          subtitle: 'Mecanisme toxicològic i origen de cada gas (Capítol 12 MAN.GRAL.008)',
          headers: ['Producte', 'Propietats Físiques', 'Mecanisme de Toxicitat i Origen'],
          rows: [
            ['Monòxid de Carboni (CO)', 'Incolor, inodor, insípid, inflamable (LII 12,5% - LSI 74%), d ≈ 0,97.', 'Asfixiant químic: s’uneix a l’hemoglobina formant Carboxihemoglobina (COHb) amb una afinitat 200-250 VEGADES superior a l’O₂! Es forma en tota combustió incompleta.'],
            ['Àcid Cianhídric (HCN)', 'Incolor, olor d’ametlles amargues, molt volàtil i inflamable.', 'Asfixiant cel·lular fulminant (inhibeix el citocrom oxidasa; 20-30 vegades més tòxic que el CO). Prové de cremar plàstics amb nitrogen: poliuretà (escuma de sofàs/matalassos), niló, llana, acrílics.'],
            ['Diòxid de Carboni (CO₂)', 'Incolor, inodor, no inflamable, més pesant que l’aire (d ≈ 1,52).', 'Asfixiant simple (desplaça l’O₂) i estimulant del centre respiratori (provoca hiperventilació que fa inhalar més CO i HCN!).'],
            ['Fum i Fibrociment', 'Suspensió de partícules sòlides (sutge C) i gotes líquides en gasos.', 'Redueix visibilitat i irrita vies. En cobertes de fibrociment (uralita), el foc fa esclatar el ciment i allibera fibres d’AMIANT (risc d’asbestosi i càncer de pleura → obligatori ERA i descontaminació).']
          ],
          footnote: 'El binomi letal dels incendis d’habitatge moderns ("Bessons Tòxics") és la combinació sinèrgica de CO + HCN.'
        }
      ]
    },
    {
      pageNumber: 6,
      shortLabel: 'Pàg. 6 · Cap. 13 Extintors',
      title: '13. Teoria de l’Extinció i Agents Extintors (Aigua, Escuma, Pols i Gasos)',
      subtitle: 'Els 4 mecanismes d’extinció, expansió de l’escuma, prohibició PFAS (4/07/2025) i pols química.',
      blocks: [
        {
          type: 'table',
          title: '13.1. Els 4 Mecanismes d’Extinció (sobre quin element del Tetraedre actuen)',
          subtitle: 'Relació directa entre cara del Tetraedre, mecanisme i agent extintor principal',
          headers: ['Mecanisme d’Extinció', 'Cara del Tetraedre Eliminada', 'Acció Física / Química', 'Agent Extintor Estrella'],
          rows: [
            ['1. Refredament (Refrigeració)', 'Calor (Energia d’activació)', 'Roba calor fins a baixar la Tª sota el punt d’inflamació/piròlisi.', 'AIGUA polvoritzada (absorbeix 619 kcal/L evaporat).'],
            ['2. Sufocació', 'Comburent (Oxigen O₂)', 'Aïlla el combustible de l’aire o dilueix l’O₂ per sota del 15%.', 'ESCUMA física (manta), CO₂ i vapor d’aigua en espai tancat (1 L → 1.700 L).'],
            ['3. Eliminació / Dilució (Desalimentació)', 'Combustible', 'Retira el combustible, tanca la vàlvula de gas o dilueix líquids polars.', 'Tancament de clau de pas, tallafocs forestal, dilució d’alcohol en aigua.'],
            ['4. Inhibició (Catalítica negativa)', 'Reacció en Cadena (Radicals lliures)', 'Captura químicament els radicals lliures (OH*, H*) de la flama.', 'POLS QUÍMICA SECA (BC/ABC) i agents gasosos halogenats.']
          ],
          footnote: 'Cada agent combina diversos mecanismes, però sempre en té un de PRINCIPAL i un de SECUNDARI.'
        },
        {
          type: 'table',
          title: '13.2. Dades Tècniques Oficials dels Agents Extintors (MAN.GRAL.008 Secció 13.2)',
          subtitle: 'Valors numèrics exactes que exigeix el tribunal',
          headers: ['Agent Extintor', 'Dades Numèriques i Classificació del Manual', 'Incompatibilitats i Normativa 2025'],
          rows: [
            ['13.2.1. Aigua', '• Expansió líquid → vapor a 100 °C: 1 L = 1.700 L de vapor (a 650 °C s’expandeix > 4.000 vegades!).\n• Calor latent de vaporització = 540 kcal/kg (539 cal/g).\n• Additius: Humectants (baixen tensió superficial), Espessidors/Retardants (polifosfats d’amoni).', 'PROHIBIDA a raig en tensió elèctrica, en líquids Classe B no miscibles (escampa el foc) i prohibida del tot en metalls Classe D (allibera H₂ explosiu!).'],
            ['13.2.2. Escuma Física (Aigua + Escumogen + Aire)', '• Coeficient d’expansió (Volum escuma / Volum escumant):\n  - Baixa expansió: < 20 (abast llarg, focs Classe B exteriors).\n  - Mitjana expansió: 20 a 200.\n  - Alta expansió: > 200 (inundació total de soterranis/naus).\n• Tipus: Proteínica (P), Fluoroproteínica (FP), Sintètica (S), AFFF (film aquós) i AR (Antialcohol per a líquids polars com alcohol o acetona).', 'NORMATIVA CLAU DEL MANUAL: A partir del 4 de juliol de 2025 queda PROHIBIT l’ús d’escumes que continguin compostos fluorats PFAS (substituïdes per escumes F3 lliures de fluor!). Incompatible amb pols química normal si no porta estearats.'],
            ['13.2.3. Pols Química Seca', '• Mida de partícula òptima: entre 10 i 20 micròmetres (µm).\n• Pols BC (Convencional): Bicarbonat sòdic o potàssic (la de potassi és més eficaç que la de sodi).\n• Pols ABC (Polivalent / Antibrasa): Fosfat monoamònic (es fon i crea una crosta vítria d’àcid metafosfòric sobre les brases Classe A).\n• Pols Especial Classe D: Clorur sòdic, grafit o pols de coure.', 'Bruta i corrosiva per a quadres electrònics; nul poder de refredament (risc de reignició si s’escampa el núvol).'],
            ['13.2.4. Agents Gasosos (CO₂ i Gasos Nets)', '• CO₂: S’emmagatzema liquat a alta pressió (~60 bar a 20 °C). En sortir pel difusor pateix expansió adiabàtica i es refreda a -78,5 °C formant "neu carbònica" (gel sec que sublima). Actua per SUFOCACIÓ (i lleu refredament).\n• Gasos Nets (Inergen, Argonite, FM-200, Novec 1230): No deixen residu i són dielèctrics (Sales CPD i museus).', 'El CO₂ és ineficaç a l’exterior (el vent se l’emporta) i perillós en locals ocupats perquè desplaça l’O₂ (asfíxia). El difusor de CO₂ pot produir cremades per fred i descàrregues d’electricitat estàtica.']
          ],
          footnote: 'Memoritza: 4 de juliol de 2025 = Prohibició europea d’escumes amb PFAS | Pols química = 10-20 µm | Expansió escuma: <20 / 20-200 / >200.'
        }
      ]
    },
    {
      pageNumber: 7,
      isSummary: true,
      shortLabel: 'Pàg. 7 · 📌 Resum 1/2 (Xifres)',
      title: 'Resum Final (1/2): Taula Mestra de Totes les Xifres i Dades de MAN.GRAL.008',
      subtitle: 'Tots els números, temperatures, percentatges i llindars imprescindibles del Tema 8 en una sola pàgina.',
      blocks: [
        {
          type: 'table',
          title: 'Síntesi Numèrica Imprescindible d’Examen — Tema 8 (Teoria del Foc)',
          subtitle: 'Repàs ultra-ràpid de les 18 xifres que cauen als qüestionaris oficials',
          headers: ['Concepte / Fenomen', 'Xifra Exacta del Manual MAN.GRAL.008', 'Observació / Parany del Tribunal'],
          rows: [
            ['1. Velocitat Deflagració vs. Detonació', 'Deflagració < 340 m/s (1-10×P) | Detonació > 340 m/s (fins a 100×P)', 'Deflagració = subsònica (cm/s-m/s) | Detonació = supersònica (km/s)'],
            ['2. Composició de l’Aire Normal', '21% O₂ + 78% N₂ + 1% altres gasos (Argó, CO₂)', 'Referència de densitat de gasos: Aire = 1'],
            ['3. Atm. Sobreoxigenada', '> 21% O₂ (crític > 23% O₂)', 'Olis i greixos s’autoinflamen espontàniament amb O₂ pur'],
            ['4. Sufocació de la Flama', '< 15% O₂ (14% – 15%)', 'A 16% O₂ s’inicia la hipòxia humana i es redueix la flama'],
            ['5. Sufocació de la Brasa', '< 5% O₂', 'Per apagar brases profundes per sufocació cal baixar del 5% d’O₂'],
            ['6. Llei de Radiació (Stefan-Boltzmann)', 'E ∝ T⁴ (Quarta potència de la Tª en Kelvin)', 'Si es duplica T (K), l’energia radiada es multiplica per 16 (2⁴)'],
            ['7. Temperatura Crítica de l’Acer', '300 °C (inici pèrdua) | 550 °C (perd el 50% de resistència)', 'Es dilata ~1,2 cm per metre a 1.000 °C i col·lapsa per pandeig'],
            ['8. Formigó i Fusta al Foc', 'Formigó: Spalling (>300-500 °C) | Fusta: carbonitza ~0,7 mm/min', 'La capa carbonitzada de la fusta aïlla el nucli interior'],
            ['9. Condicions del Flashover', '500 – 600 °C al sostre i 20 kW/m² de radiació al terra', 'Passa en recinte ventilat per radiació del coixí de gasos'],
            ['10. Afinitat del CO per l’Hemoglobina', '200 a 250 vegades superior a l’O₂ (forma Carboxihemoglobina)', 'LII-LSI del CO: 12,5% a 74% (és tòxic I inflamable!)'],
            ['11. Toxicitat de l’HCN (Cianhídric)', '20 a 30 vegades més tòxic que el CO (asfixiant cel·lular)', 'Prové de cremar poliuretà, llana, niló i plàstics nitrogenats'],
            ['12. Expansió de l’Aigua a Vapor', '1 L d’aigua líquida → 1.700 L de vapor a 100 °C', 'A 650 °C supera els 4.000 litres de vapor per cada litre d’aigua'],
            ['13. Calor Latent Vaporització Aigua', '540 kcal/kg (539 cal/g ≈ 2.260 kJ/kg)', 'Escalfar 1 L de 20 °C a 100 °C + evaporar = 619 kcal'],
            ['14. Coeficients d’Expansió d’Escuma', 'Baixa < 20 | Mitjana 20 a 200 | Alta > 200', 'En líquids polars (alcohols) és obligatori escumogen AR (Antialcohol)'],
            ['15. Prohibició Europea de PFAS', '4 de juliol de 2025', 'Prohibides les escumes fluorades amb PFAS a partir del 04/07/2025'],
            ['16. Mida Partícula Pols Química', '10 a 20 micròmetres (µm)', 'Pols BC = Bicarbonat (sòdic/potàssic) | Pols ABC = Fosfat monoamònic'],
            ['17. Temperatura Neu Carbònica (CO₂)', '-78,5 °C a la sortida del difusor (~60 bar a l’ampolla a 20 °C)', 'El CO₂ és dielèctric (no condueix l’electricitat) i sublima sense residu'],
            ['18. Rang LII-LSI dels Gasos Clau', 'Propà 2,1-9,5% | Metà 5-15% | H₂ 4-75% | Acetilè 2,5-82%', 'Si puja la temperatura, baixa el LII i puja el LSI (el rang s’amplia)']
          ],
          footnote: 'Pàgina 1 de 2 del Resum Executiu del Tema 8. Activa el "Mode Memorització" per posar-te a prova amb les 18 xifres!'
        }
      ]
    },
    {
      pageNumber: 8,
      isSummary: true,
      shortLabel: 'Pàg. 8 · 📌 Resum 2/2 (Punts Clau)',
      title: 'Resum Final (2/2): Conceptes Imprescindibles, Comparatives i Paranys d’Examen',
      subtitle: 'Les distincions conceptuals que decideixen l’examen oficial en Teoria del Foc.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Les 5 Parelles de Conceptes que Mai Has de Confondre a l’Examen',
          acronym: 'FLASH vs FIRE | ILC vs ILV | FLASHOVER vs BACKDRAFT | BOIL-OVER vs BLEVE | BC vs ABC',
          trick:
            "1) PUNT D'INFLAMACIÓ vs. COMBUSTIÓ vs. AUTOIGNICIÓ:\n• Inflamació (Flash Point): s'encén amb flama externa però S'APAGA si retires la flama.\n• Combustió (Fire Point): es manté encès (≥5 s) quan retires la flama.\n• Autoignició: s'encén sol sense cap espurna externa.\n\n2) ILC vs. ILV:\n• ILC (Limitat pel Combustible): sobra O₂, el foc creix si hi ha més material.\n• ILV (Limitat per la Ventilació): falta O₂ (<15%), el recinte està ple de gasos per sobre del LSI; obrir una porta provoca un Backdraft!\n\n3) FLASHOVER vs. BACKDRAFT:\n• Flashover = induït per la CALOR (radiació 20 kW/m², 500-600 °C) en un recinte que JA té ventilació.\n• Backdraft = induït per l'entrada d'OXIGEN en un recinte tancat i ofegat (ILV).\n\n4) BOIL-OVER vs. BLEVE:\n• Boil-over = tanc OBERT de petroli/cru amb un coixí d'aigua al fons que bull de cop quan hi arriba l'ona de calor.\n• BLEVE = tanc TANCAT a pressió amb líquid sobreescalfat que rebenta mecànicament (típicament perquè una flama escalfa l'acer de la FASE GAS).\n\n5) POLS BC vs. POLS ABC:\n• Pols BC (bicarbonat sòdic/potàssic): només apaga flames (inhibició), NO apaga brases Classe A.\n• Pols ABC (fosfat monoamònic): apaga flames per inhibició I forma una crosta fosa d'àcid metafosfòric que sufoca les brases Classe A.",
          example: 'Si en un enunciat llegeixes "tanc obert de cru + aigua al fons + ona de calor" → marca sempre BOIL-OVER.'
        },
        {
          type: 'table',
          title: 'Matriu Ràpida d’Idoneïtat d’Agents Extintors per Classe de Foc',
          subtitle: 'Síntesi operativa del Capítol 13 de MAN.GRAL.008',
          headers: ['Agent Extintor', 'Classe A (Sòlids)', 'Classe B (Líquids)', 'Classe C (Gasos)', 'Classe D (Metalls)', 'Presència Elèctrica'],
          rows: [
            ['Aigua a Raig', 'Excel·lent (focs profunds)', 'PROHIBIT (escampa)', 'No (només refrigerar envàs)', 'PROHIBIT (explosió H₂)', 'PROHIBIT (conductora)'],
            ['Aigua Polvoritzada', 'Excel·lent (superficials)', 'Acceptable (olis pesants)', 'Refrigeració i abatiment', 'PROHIBIT', 'Amb prudència / distància en BT'],
            ['Escuma Física', 'Bona (humecta i cobreix)', 'EXCEL·LENT (AR en polars)', 'No (excepte GNL amb alta exp.)', 'PROHIBIT (porta aigua)', 'PROHIBIT (conductora)'],
            ['Pols ABC (Polivalent)', 'Molt bona (fa crosta)', 'Molt bona', 'Bona (tallar gas primer)', 'NO (cal Pols Especial D)', 'Apta fins a 1.000 V (1 kV)'],
            ['Pols BC (Convencional)', 'Inadequada (no apaga brasa)', 'Excel·lent', 'Bona', 'NO', 'Apta fins a 1.000 V'],
            ['CO₂ (Anhídrid carbònic)', 'Focs petits superficials', 'Bona en interiors', 'Poca eficàcia', 'PROHIBIT (reacciona amb Mg)', 'EXCEL·LENT (dielèctric i net)']
          ],
          footnote: 'Pàgina 2 de 2 del Resum Executiu del Tema 8. Passa ara a la pestanya "Test d’Autoavaluació" per comprovar el teu domini!'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q8-1',
      difficulty: 'Fàcil',
      question: "Segons el manual MAN.GRAL.008, quina és la diferència fonamental entre una deflagració i una detonació?",
      options: [
        'La deflagració sempre es produeix en líquids i la detonació en gasos.',
        'La deflagració té una velocitat de propagació subsònica (ona de pressió d’1 a 10 vegades la P inicial) i la detonació és supersònica (fins a 100 vegades la P inicial).',
        'La deflagració no genera ona de pressió i la detonació sí.',
        'La detonació és una reacció endotèrmica i la deflagració és exotèrmica.'
      ],
      correctIndex: 1,
      explanation: 'La deflagració viatja a velocitat subsònica (<340 m/s, generant 1-10 vegades la pressió inicial), mentre que la detonació viatja a velocitat supersònica (km/s, fins a 100 vegades la pressió inicial).'
    },
    {
      id: 'q8-2',
      difficulty: 'Mitjà',
      question: "A partir de quina temperatura comença l'acer estructural a perdre les seves propietats mecàniques i quina es considera la seva temperatura crítica on ja ha perdut prop del 50% de resistència?",
      options: [
        'Inici a 100 °C i crítica a 250 °C',
        'Inici a 300 °C i crítica al voltant dels 550 °C',
        'Inici a 600 °C i crítica a 1.000 °C',
        'Inici a 550 °C i crítica a 1.500 °C'
      ],
      correctIndex: 1,
      explanation: "Segons el capítol 10 de MAN.GRAL.008, l'acer comença a perdre resistència als 300 °C i assoleix la seva temperatura crítica als ~550 °C."
    },
    {
      id: 'q8-3',
      difficulty: 'Mitjà',
      question: "Quin fenomen es produeix en un dipòsit obert d'hidrocarbur pesant (com petroli cru) quan l'ona de calor descendent arriba al coixí d'aigua acumulat al fons del tanc i el vaporitza bruscament?",
      options: ['BLEVE', 'Backdraft', 'Boil-over', 'Froth-over'],
      correctIndex: 2,
      explanation: "El Boil-over (rebrollada) es produeix en tancs oberts de cru o fueloil quan l'ona de calor arriba a l'aigua decantada al fons i aquesta es transforma en vapor multiplicant el seu volum per 1.700."
    },
    {
      id: 'q8-4',
      difficulty: 'Difícil',
      question: "Segons l'apartat 13.2.2 del manual MAN.GRAL.008, a partir de quina data queda prohibit l'ús d'escumes extintores que continguin compostos fluorats PFAS i quina és la mida òptima de partícula de la pols química seca?",
      options: [
        '1 de gener de 2024 | 100-200 µm',
        '4 de juliol de 2025 | 10-20 µm',
        '31 de desembre de 2026 | 1-5 mm',
        '4 de juliol de 2025 | 200-500 µm'
      ],
      correctIndex: 1,
      explanation: "El manual especifica que l'ús d'escumes amb PFAS queda prohibit a partir del 4 de juliol de 2025, i que la granulometria de la pols química seca se situa entre 10 i 20 micròmetres (µm)."
    },
    {
      id: 'q8-5',
      difficulty: 'Fàcil',
      question: "Per sota de quin percentatge d'oxigen (O₂) en aire s'extingeix habitualment la combustió amb flama, i per sota de quin valor s'apaguen fins i tot les brases?",
      options: [
        '< 19% flama i < 12% brasa',
        '< 15% flama i < 5% brasa',
        '< 10% flama i < 1% brasa',
        '< 17% flama i < 10% brasa'
      ],
      correctIndex: 1,
      explanation: "Per sota del 14-15% d'O₂ cessa la combustió amb flama, i per sufocar la combustió incandescent (brases) cal baixar per sota del 5% d'O₂."
    },
    {
      id: 'q8-6',
      difficulty: 'Fàcil',
      question: "Quin és el quart element que afegeix el Tetraedre del foc respecte al Triangle del foc i què explica la seva presència?",
      options: [
        'La pressió atmosfèrica, que explica la velocitat de detonació en espais oberts.',
        'La reacció en cadena (transmissió de radicals lliures), que explica el manteniment de la combustió amb flama.',
        'El comburent secundari, que explica la combustió incandescent sense flama.',
        'La humitat relativa del combustible, que determina la temperatura de piròlisi.'
      ],
      correctIndex: 1,
      explanation: 'El Triangle del foc explica la combustió sense flama (brasa), mentre que el Tetraedre afegeix la reacció en cadena (radicals lliures OH*, H*, O*) que manté viva la flama.'
    },
    {
      id: 'q8-7',
      difficulty: 'Mitjà',
      question: "Com es defineix el Punt de Combustió (Fire Point) d'un combustible segons l'apartat 5.3 del manual MAN.GRAL.008?",
      options: [
        "Temperatura mínima a la qual la substància s'inflama espontàniament sense cap font d'ignició externa.",
        'Temperatura mínima a la qual emet vapors que s’inflamen amb font externa però s’apaguen en retirar-la.',
        "Temperatura mínima a la qual els vapors continuen cremant de forma sostinguda (mínim 5 segons) un cop retirada la font d'ignició.",
        'Temperatura fixa de 550 °C a la qual tots els sòlids inicien la seva piròlisi.'
      ],
      correctIndex: 2,
      explanation: "El Punt de Combustió (Fire Point), situat uns graus per sobre del Punt d'Inflamació (Flash Point), és la temperatura a la qual els vapors continuen cremant ≥ 5 segons en retirar la font d'ignició."
    },
    {
      id: 'q8-8',
      difficulty: 'Difícil',
      question: "Segons la llei de Stefan-Boltzmann recollida al capítol 9 del manual, si es duplica la temperatura absoluta T (en Kelvin) d'una font radiant, com varia l'energia transmesa per radiació?",
      options: [
        'Es duplica (×2), ja que és proporcional a T.',
        'Es quadruplica (×4), ja que és proporcional a T².',
        'Es multiplica per 8 (×8), ja que és proporcional a T³.',
        "Es multiplica per 16 (×16), ja que l'energia radiada creix amb la quarta potència de la temperatura absoluta (T⁴)."
      ],
      correctIndex: 3,
      explanation: 'La llei de Stefan-Boltzmann estableix que E ∝ T⁴. Si la temperatura absoluta en Kelvin es duplica, l’energia radiada augmenta en 2⁴ = 16 vegades.'
    },
    {
      id: 'q8-9',
      difficulty: 'Mitjà',
      question: 'Quines condicions crítiques i quin mecanisme caracteritzen el fenomen del Flashover (combustió generalitzada sobtada)?',
      options: [
        "Temperatura al sostre d'uns 500–600 °C i flux radiant al terra d'uns 20 kW/m², produït per radiació en un recinte ventilat.",
        "Concentració d'oxigen inferior al 5% i absència total de radiació tèrmica en un recinte hermètic.",
        "Entrada sobtada d'oxigen en un recinte ofegat (ILV) que provoca una deflagració de fums.",
        "Ruptura catastròfica d'un recipient tancat a pressió amb líquid sobreescalfat per sobre del seu punt d'ebullició."
      ],
      correctIndex: 0,
      explanation: 'El Flashover passa en un recinte ventilat per radiació tèrmica des del coixí de fums del sostre en assolir 500–600 °C al sostre i ~20 kW/m² al terra.'
    },
    {
      id: 'q8-10',
      difficulty: 'Mitjà',
      question: "Quin gas tòxic té una afinitat per l'hemoglobina 200 a 250 vegades superior a l'oxigen (formant carboxihemoglobina) i quin actua com a asfixiant cel·lular fulminant inhibint el citocrom oxidasa?",
      options: [
        'El diòxid de carboni (CO₂) forma carboxihemoglobina i el monòxid de carboni (CO) inhibeix el citocrom oxidasa.',
        "El monòxid de carboni (CO) forma carboxihemoglobina i l'àcid cianhídric (HCN) inhibeix el citocrom oxidasa.",
        "L'àcid cianhídric (HCN) forma carboxihemoglobina i el metà (CH₄) inhibeix el citocrom oxidasa.",
        'El monòxid de carboni (CO) i el diòxid de carboni (CO₂) actuen tots dos exclusivament com a asfixiants simples.'
      ],
      correctIndex: 1,
      explanation: 'El CO forma carboxihemoglobina (afinitat 200-250× superior a l’O₂), mentre que l’HCN (provinent de poliuretà, niló o llana) inhibeix el citocrom oxidasa i és 20-30 vegades més tòxic.'
    },
    {
      id: 'q8-11',
      difficulty: 'Fàcil',
      question: "Segons la norma UNE-EN 2 recollida al manual, a quina classe corresponen els focs d'olis i greixos de cocció en aparells de cuina, i quin agent extintor NO s'ha d'utilitzar mai en focs de Classe D (metalls combustibles)?",
      options: [
        'Classe B | Pols química especial de grafit',
        'Classe C | Escumogen antialcohol AR',
        'Classe F | Aigua ni CO₂',
        'Classe L | Clorur sòdic'
      ],
      correctIndex: 2,
      explanation: 'Els olis i greixos de cuina són focs Classe F (agents químics humits per saponificació), i en metalls Classe D és prohibit utilitzar aigua o CO₂.'
    },
    {
      id: 'q8-12',
      difficulty: 'Difícil',
      question: "Quins són els rangs del coeficient d'expansió de l'escuma física (baixa, mitjana i alta) i quin compost fonent crea la crosta vítria sobre les brases Classe A en la pols química ABC?",
      options: [
        'Baixa < 10, Mitjana 10–100, Alta > 100 | Bicarbonat sòdic',
        'Baixa < 50, Mitjana 50–500, Alta > 500 | Clorur sòdic',
        'Baixa < 20, Mitjana 20–200, Alta > 200 | Bicarbonat potàssic',
        'Baixa < 20, Mitjana 20–200, Alta > 200 | Fosfat monoamònic'
      ],
      correctIndex: 3,
      explanation: "L'escuma física es classifica en baixa (<20), mitjana (20-200) i alta (>200) expansió; la pols ABC es basa en fosfat monoamònic, que crea una crosta vítria d'àcid metafosfòric sobre les brases."
    }
  ]
};
