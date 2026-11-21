export const tema19Instalacions = {
  id: 'tema-12',
  number: 12,
  code: 'MAN.GRAL.007',
  title: 'Instal·lacions Elèctriques, d’Aigua, Sanejament i Gas',
  category: 'Manual Operatiu SGO — Instal·lacions i Edificació',
  estimatedMinutes: 55,
  importance: {
    title: "Radar d'Examen — Tema 12 (MAN.GRAL.007 v.2): Instal·lacions d’Edificis i Xarxes",
    frequency: 'Molt Alta (4-5 preguntes fixes sobre tensions ferroviàries, 5 Regles d’Or, pressions de gas i sanejament)',
    summary:
      "Aquest manual de 47 pàgines és un dels més densos en xifres d'examen: tensions ferroviàries (750 / 1.500 / 3.000 V DC i 25.000 V AC), regla dels aïlladors (11 kV/disc), instal·lació d'enllaç elèctrica, 5 Regles d'Or, casc aïllant fins a 440 V, ordre de l'armari del comptador d'aigua (filtre Y 25–50 μm), clavegueres (ventilació cada 250 m a 9 m d'alçada, pendent ≥ 2% i registres cada 15 m) i pressions de gas (APB → APA → MPB → MPA → BP 20 mbar i graus d'accessibilitat 1, 2 i 3). Inclou 5 pàgines d'estudi i 2 pàgines finals de Resum.",
    hotTopics: [
      'Cap. 2.1-2.2: Ferrocarrils (TRAM 750 V DC, Metro/FGC 1.500 V DC, ADIF 3.000 V DC, AVE 25.000 V AC), Transport REE (220/400 kV; ≈11 kV per disc d’aïllador) vs. Distribució (MT 1–36 kV 3 cables nus; BT ≤1.000 V AC / 1.500 V DC 4 cables).',
      'Cap. 2.2.6-2.3: Instal·lació d’enllaç (Escomesa → CGP → LGA → IGM [>2 usuaris] → Comptadors → DI → Quadre) i Proteccions (Magnetotèrmic = bimetàl·lic + electroimant; Diferencial ID = 30 mA habitatge / 10 mA humit / 100–300 mA indústria).',
      'Cap. 2.4-2.6: Les 5 Regles d’Or en ordre estricte i EPI dielèctric (casc d’intervenció pesant certificat fins a 440 V; eines 1.000 V; guants de cuir NO són aïllants!).',
      'Cap. 3: Armari d’aigua potable (1. Clau tall → 2. Filtre Y 25–50 μm → 3. Comptador → 4. Aixeta prova → 5. Retenció → 6. Sortida) i Sanejament (ventilació cada 250 m a ≥9 m d’alt i Ø<20 cm; pendent col·lectors ≥2% i registres cada 15 m).',
      'Cap. 4: Xarxa de Gas (APB >16–45 bar → APA >4–16 bar → MPB >0,4–4 bar → MPA >0,05–0,4 bar → BP ≤0,05 bar / 20 mbar ús), graus d’accessibilitat (Grau 1, 2 i 3), tub flexible ≤1,5 m i evacuació de fums si ≥4,7 kW.'
    ],
    traps: [
      'Confondre la tensió de Metro/FGC (1.500 V DC) amb Tramvia (750 V DC) o ADIF convencional (3.000 V DC). L’únic en Corrent Altern és l’AVE (25.000 V AC)!',
      'En plaques solars fotovoltaiques (on-grid), encara que l’inversor s’aturi per protecció anti-illa en tallar la xarxa, el tram de cables en Corrent Continu (DC) des de les plaques fins a l’inversor SEGUEIX AMB TENSIÓ mentre hi hagi llum!',
      'El detector de tensió sense contacte: si pita hi ha tensió segur, però si NO pita NO garanteix al 100% l’absència de tensió (els cables apantallats o soterrats poden no ser detectats)!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 2.1-2.2 Xarxa i Trens',
      title: '1–2.2. Xarxa Elèctrica (Transport vs. Distribució), Autoconsum i Ferrocarrils',
      subtitle: 'Tensions ferroviàries exactes, plaques fotovoltaiques (on-grid vs. híbrid) i la regla dels 11 kV per aïllador.',
      blocks: [
        {
          type: 'text',
          heading: '2.1. Autoconsum solar (On-grid vs. Híbrid) i Grups Electrògens',
          paragraphs: [
            "Instal·lacions fotovoltaiques d'autoconsum:",
            "• Sense excedents o connectades a xarxa (ON-GRID): l'inversor té protecció 'anti-illa' i deixa d'injectar AC si es talla el subministrament del carrer. ATENCIÓ: els panells solars i el cablejat DC fins a l'inversor continuen en tensió mentre rebin llum (fins a 1.000–1.500 V DC)!",
            "• Instal·lacions HÍBRIDES amb bateries: les bateries domèstiques treballen habitualment a 48 V DC, però les industrials o d'alt voltatge arriben fins a 800 V DC.",
            "Grups electrògens: els portàtils de Bombers no tenen connexió a terra de neutre (esquema IT) i per això no porten diferencial convencional. En canvi, els grups fixos d'edificis i hospitals tenen ARRENCADA AUTOMÀTICA quan detecten un tall de xarxa (risc de realimentació sobtada si no es desconnecten!)."
          ]
        },
        {
          type: 'text',
          heading: '2.2. Xarxa Pública: Generació, Transport (REE) i Distribució (MT vs. BT)',
          paragraphs: [
            "• 1) GENERACIÓ: Centrals de fons (nuclears, funcionen contínuament), de regulació (hidràuliques i cicle combinat) i de punta.\n• 2) TRANSPORT (Alta Tensió de 220 kV i 400 kV): operat en exclusiva per Red Eléctrica de España (REE). Les torres porten a la punta superior el CABLE DE GUARDA (parallamps connectat a terra, sense tensió funcional).",
            "• 3) DISTRIBUCIÓ (operada per e-distribución/Endesa, Peusa, Bassols, etc.): Mitja Tensió (MT: d'1 kV a 36 kV; línies aèries de 3 cables nus sense neutre!) i Baixa Tensió (BT: ≤ 1.000 V en AC [230/400 V] i ≤ 1.500 V en DC; línies de 4 cables trenats o nus: 3 fases + 1 neutre connectat a terra al Centre de Transformació)."
          ]
        },
        {
          type: 'table',
          title: '2.1.4.1. Taula Oficial de Tensions Ferroviàries a Catalunya (MAN.GRAL.007)',
          subtitle: 'Valors exactes i tipus de corrent (DC vs. AC) — Pregunta segura d’examen',
          headers: ['Sistema Ferroviari', 'Tensió Nominal Exacta', 'Tipus de Corrent', 'Element de Captació / Detall'],
          rows: [
            ['Tramvia (TRAM Barcelona)', '750 V', 'Corrent Continu (DC)', 'Catenària urbana lleugera'],
            ['Metro de Barcelona i FGC', '1.500 V', 'Corrent Continu (DC)', 'Catenària rígida (túnels) o flexible (i 3r carril al Tren Groc)'],
            ['ADIF Xarxa Convencional (Rodalies)', '3.000 V', 'Corrent Continu (DC)', 'Catenària + Cable Feeder d’alimentació amb aïlladors'],
            ['ADIF Alta Velocitat (AVE / TGV)', '25.000 V (25 kV)', 'Corrent Altern (AC, 50 Hz)', 'Molt alta tensió! Arc elèctric a distància sense tocar el fil']
          ],
          footnote: 'Truc: Les tensions en DC es van duplicant exactament: 750 V (TRAM) → ×2 = 1.500 V (Metro/FGC) → ×2 = 3.000 V (Rodalies ADIF). L’AVE salta a 25.000 V en AC!'
        },
        {
          type: 'mnemonic',
          title: 'Truc Visual de Bombers: La Regla dels 11 kV per Disc d’Aïllador a les Torres d’Alta Tensió',
          trick:
            'Com saber el voltatge aproximat d’una línia aèria des de sota la torre? Compta els discos de vidre o porcellana d’una cadena d’aïlladors i multiplica per 11 kV per cada disc!\n• 20 discos × 11 kV ≈ 220 kV (Transport REE).\n• 36 discos × 11 kV ≈ 400 kV (Transport REE).\n• 2 o 3 discos × 11 kV ≈ 25 kV (Mitja Tensió de distribució).',
          example:
            'Si veus una línia aèria amb només 3 cables nus i cadenes de 2–3 aïlladors de vidre, és una línia de Mitja Tensió (20–25 kV). Recorda: en AT/MT els Bombers NO tallen mai pel seu compte; cal presència i tall confirmat per la companyia elèctrica!'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 2.2.6-2.3 Enllaç i Quadre',
      title: '2.2.6–2.3. Instal·lació d’Enllaç d’un Edifici i Proteccions del Quadre Interior',
      subtitle: 'Ordre exacte des de l’escomesa fins als PIAs, magnetotèrmic (tèrmic + magnètic) i sensibilitats del diferencial.',
      blocks: [
        {
          type: 'text',
          heading: '2.2.6. Els 7 Elements de la Instal·lació d’Enllaç (en Ordre des del Carrer fins al Pis)',
          paragraphs: [
            "La instal·lació d'enllaç uneix la xarxa de distribució pública amb la instal·lació interior dels usuaris seguint aquest ordre estricte:\n• 1) ESCOMESA: tram de la companyia des de la xarxa fins a la façana.\n• 2) CGP (Caixa General de Protecció): conté els FUSIBLES generals de l'edifici i marca la frontera entre companyia i propietat.\n• 3) LGA (Línia General d'Alimentació): uneix la CGP amb la cambra de comptadors.",
            "• 4) IGM (Interruptor General de Maniobra): obligatori abans dels comptadors sempre que hi hagi MÉS DE 2 USUARIS (> 2), permet tallar tot l'edifici d'un sol cop de palanca!\n• 5) Centralització de Comptadors: embarrat general i fusibles de seguretat individuals.\n• 6) DI (Derivació Individual): puja des del comptador de cada veí fins al seu pis.\n• 7) Quadre General de Comandament i Protecció (interior de l'habitatge)."
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · No confondre CGP vs. CPM vs. IGM!',
          metaphor: 'Imagina la porta d’entrada de l’electricitat a casa teva: en una casa unifamiliar tot cap en una capseta, però en un bloc de pisos cal un interruptor mestre per a tots els veïns.',
          explanation:
            "• CGP (Caixa General de Protecció): és la caixa exterior amb els FUSIBLES generals (frontera companyia–propietat). S'usa en edificis amb 3 o més usuaris.\n\n• CPM (Caixa de Protecció i Mesura): quan només hi ha 1 o 2 usuaris (casa unifamiliar o adossada), la CGP i el comptador van fusionats en UNA sola caixa al mur exterior (en aquest cas NO hi ha LGA ni IGM!).\n\n• IGM (Interruptor General de Maniobra): és la palanca de tall general que trobem ABANS dels comptadors quan hi ha MÉS DE 2 USUARIS (> 2). Permet deixar tot el bloc sense llum d'un sol cop sense haver d'extreure fusibles de la CGP!",
          takeaway: '1 o 2 usuaris = CPM (CGP + comptador junts, sense IGM). Més de 2 usuaris = CGP + LGA + IGM + Centralització de comptadors.'
        },
        {
          type: 'diagram',
          title: 'Escomesa i Instal·lació d’Enllaç Elèctrica (1 usuari, 2 usuaris, 1 CC i més d’1 CC)',
          diagramType: 'electrical_enllac',
          caption:
            'Esquema visual amb codi de colors dels 12 elements de la instal·lació d’enllaç des de la xarxa de distribució fins a la instal·lació interior (CGP, LGA, CD, IGM, CC, CPM, DI, ICP i DGCP).'
        },
        {
          type: 'diagram',
          title: 'Les 5 Regles d’Or per Treballar Sense Tensió',
          diagramType: 'installations_gas_elec',
          caption:
            'Ordre estricte de les 5 Regles d’Or abans d’intervenir en una instal·lació elèctrica sense tensió.'
        },
        {
          type: 'table',
          title: 'Escala de Pressions de Distribució de Gas Natural (MAN.GRAL.007) i Claus de Pas',
          subtitle: 'Classificació reglamentària de pressions i accessibilitat de les vàlvules de tall',
          headers: ['Escaló / Grau', 'Rang de Pressió / Accessibilitat', 'Funció i Observacions'],
          rows: [
            ['APB (Alta Pressió B)', '> 16 bar fins a 45 bar', 'Xarxa primària de transport i grans gasoductes'],
            ['APA (Alta Pressió A)', '> 4 bar fins a 16 bar', 'Xarxa de distribució d’alta pressió fins a estacions reguladores'],
            ['MPB (Mitjana Pressió B)', '> 0,4 bar fins a 4 bar', 'Xarxa de distribució urbana cap a armaris reguladors'],
            ['MPA (Mitjana Pressió A)', '> 0,05 bar fins a 0,4 bar', 'Distribució cap a edificis abans del regulador de finca'],
            ['BP (Baixa Pressió)', '≤ 0,05 bar (20 mbar en ús domèstic)', 'Xarxa interior d’habitatges i aparells de consum'],
            ['Claus de Pas: Grau 1 · 2 · 3', 'Grau 1: directa sense clau · Grau 2: amb clau normalitzada · Grau 3: cal escala o accés a zona privada', 'Determina el temps i els mitjans necessaris per tallar el subministrament']
          ]
        },
        {
          type: 'table',
          title: '2.2.7–2.3. Dispositius del Quadre Interior i Proteccions (MAN.GRAL.007)',
          subtitle: 'Funció tècnica i valors reglamentaris',
          headers: ['Dispositiu (en ordre al quadre)', 'Funció Principal', 'Mecanisme Intern / Valors d’Examen'],
          rows: [
            ['1. ICP (Control de Potència)', 'Salta si es supera la potència contractada', 'Avui dia integrat dins del comptador digital telegestionat'],
            ['2. IGA (Interruptor General Automàtic)', 'Tall general manual i protecció global del pis', 'Protegeix contra sobrecàrregues i curtcircuits globals'],
            ['3. Protector contra Sobretensions', 'Protegeix de pics de voltatge', 'Transitòries (llamps/maniobres → a terra) vs. Permanents (tall de neutre)'],
            ['4. ID (Interruptor Diferencial)', 'Protegeix les PERSONES contra fuites a terra (contactes indirectes)', 'Sensibilitat: 30 mA (habitatges), 10 mA (zones humites/jacuzzi), 100 o 300 mA (indústria/enllumenat públic)'],
            ['5. PIAs (Petits Interruptors Automàtics)', 'Magnetotèrmics de cada circuit (llum, forn, endolls)', 'Bimetàl·lic (tèrmic = sobrecàrregues lentes) + Electroimant (magnètic = curtcircuits instantanis!)'],
            ['6. Presa de Terra (PE)', 'Desvia fuites a terra perquè salti el Diferencial', 'Cable aïllat de color GROC-VERD connectat a la pica/anell de fonaments']
          ],
          footnote: 'Pregunta clàssica: Quina part del magnetotèrmic salta en una sobrecàrrega i quina en un curtcircuit? Sobrecàrrega = làmina BIMETÀL·LICA (tèrmica, per dilatació lenta); Curtcircuit = ELECTROIMANT (magnètica, instantània)!'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 2.4-2.6 5 Regles d’Or',
      title: '2.4–2.6. Aparells de Mesura, Les 5 Regles d’Or i EPI Dielèctric (440 V)',
      subtitle: 'Limitacions del detector sense contacte, ordre estricte de les 5 Regles d’Or i certificació del casc i eines.',
      blocks: [
        {
          type: 'text',
          heading: '2.4–2.6. Detecció de Tensió, 5 Regles d’Or i Equipament Dielèctric de Bombers',
          paragraphs: [
            "Els Bombers disposen de 5 aparells de verificació elèctrica:",
            "• 1) Detector de tensió sense contacte (tipus llapis): si pita hi ha tensió segur, però si NO pita NO garanteix l'absència de tensió (no detecta DC ni cables apantallats o molt humits!).",
            "• 2) Tornavís buscapols (només BT 230 V), 3) Discriminador de tensió, 4) Voltímetre / Multímetre (mesura V en paral·lel i R) i 5) Pinça amperimètrica (mesura I abraçant UN sol conductor sense tallar-lo).",
            "EPIs i eines davant risc elèctric (Cap. 2.6):",
            "• 1) Eines manuals dielèctriques (taronges/vermelles) fins a 1.000 V, 2) Perxa de salvament (mai ultrapassar l'anell de guarda!) i 3) Guants dielèctrics de làtex (els de cuir o tèxtils NO són aïllants!).",
            "• 4) Botes i Banqueta / Estora aïllant, 5) Escales de fibra de vidre (mai d'alumini prop de cables!) i 6) Casc d'intervenció pesant certificat com a aïllant elèctric fins a 440 V."
          ]
        },
        {
          type: 'mnemonic',
          title: 'Les 5 Regles d’Or per Treballar Sense Tensió (En Ordre Estricte de l’1 al 5!)',
          trick:
            'Memoritza la sigla "D – P – V – P – P" (Desconnectar → Prevenir → Verificar → Posar a terra → Protegir):\n1a) DESCONNECTAR totes les fonts d’alimentació (tall visible o efectiu).\n2a) PREVENIR qualsevol possible realimentació (enclavar, bloquejar amb cadenat o treure fusibles i guardar-los a la butxaca!).\n3a) VERIFICAR l’absència de tensió (comprovar el detector abans i després).\n4a) POSAR A TERRA i en curtcircuit totes les fases.\n5a) PROTEGIR enfront d’elements pròxims en tensió i SENYALITZAR/abalisar la zona de treball.',
          example:
            'Pregunta trampa d’examen: Quina és la 3a Regla d’Or i quina és la 4a? La 3a és VERIFICAR l’absència de tensió (mai posis a terra un cable sense haver comprovat abans a la regla 3 que ja no té tensió!), i la 4a és POSAR A TERRA i en curtcircuit.'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 3 Aigua i Clavegueres',
      title: '3. Instal·lacions d’Aigua Potable i Xarxes de Sanejament (Clavegueram)',
      subtitle: 'Els 6 elements de l’armari del comptador (filtre Y 25–50 μm), ventilació cada 250 m (9 m d’alt) i col·lectors (≥ 2%).',
      blocks: [
        {
          type: 'text',
          heading: '3.1. Aigua Potable (Ordre del Comptador General i Muntants) i 3.2. Sanejament',
          paragraphs: [
            "Aigua potable — Armari del comptador general (6 elements en ordre de pas de l'aigua):\n1) Clau de tall general → 2) Filtre tipus Y (malla d'acer inoxidable de 25 a 50 μm per retenir sorres) → 3) Comptador general → 4) Aixeta de prova → 5) Vàlvula de retenció (antiretorn perquè l'aigua no torni a la xarxa pública) → 6) Clau de sortida.",
            "A la base de cada muntant ascendent hi ha: 1) Vàlvula de retenció, 2) Clau de tall i 3) Aixeta de buidatge (i dalt de tot de l'edifici una vàlvula purgadora d'aire).",
            "Sanejament i evacuació:\n• Tipus d'aigües: negres o fecals (vàters), grises (piques, dutxes, rentadores) i pluvials (pluja).\n• Xarxes: unitàries (tot al mateix col·lector) o separatives (residuals i pluvials separades).\n• Sifó hidràulic: reté un tap d'aigua permanent de 5 cm que impedeix l'entrada de gasos tòxics i olors de la claveguera al pis."
          ]
        },
        {
          type: 'table',
          title: 'Xifres Reglamentàries de la Xarxa de Clavegueram i Sanejament (MAN.GRAL.007 Cap. 3.2)',
          subtitle: 'Paràmetres de disseny i seguretat que cauen literalment a examen',
          headers: ['Element de Sanejament', 'Requisit i Xifres Oficials del Manual', 'Motiu Tècnic / Operatiu'],
          rows: [
            ['Ventilació de Clavegueres', 'Sortides de ventilació cada 250 m · Alçada mínima ≥ 9 m · Diàmetre < 20 cm', 'Evita l’acumulació de gasos explosius/tòxics (CH₄, H₂S) i el desifonament'],
            ['Col·lectors Soterrats', 'Sempre per SOTA de l’aigua potable · Pendent mínim ≥ 2% · Registres cada 15 m', 'Evita contaminar l’aigua potable en cas de fuita i garanteix l’autoneteja per gravetat'],
            ['Arquetes de pas i sifòniques', 'Màxim 1 col·lector d’entrada per cara · Angle entre entrada i sortida > 90°', 'Evita embussos i retencions de sòlids en els canvis de direcció'],
            ['Pous de registre i Càmeres de neteja', 'Pous visitables en canvis de traçat · Càmera de descàrrega a la capçalera', 'Accés per a manteniment i descàrrega periòdica d’aigua per arrossegar sediments']
          ]
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Cap. 4 Gas Natural i GLP',
      title: '4. Instal·lacions de Gas (GLP i Gas Natural): Pressions, Materials i Claus de Pas',
      subtitle: 'Escala de pressions (APB → APA → MPB → MPA → BP 20 mbar), graus d’accessibilitat 1-2-3 i evacuació (≥ 4,7 kW).',
      blocks: [
        {
          type: 'text',
          heading: '4.1–4.2. GLP vs. Gas Natural, Canonades i Graus d’Accessibilitat (1, 2 i 3)',
          paragraphs: [
            "Els Gasos Liquats del Petroli (GLP: Butà i Propà) són MÉS PESANTS que l'aire (s'acumulen a soterranis i parts baixes; bombona domèstica UD-125 = 12,5 kg de butà). El Gas Natural (90–95% metà CH₄) és MÉS LLEUGER que l'aire (puja cap al sostre) i s'odoritza amb mercaptans (THT).",
            "Materials de les canonades de gas:\n• 1) Acer: xarxes d'alta i mitja pressió.\n• 2) Polietilè (PE, color groc/taronja): EXCLUSIVAMENT per a xarxes ENTERRADES exteriors (totalment PROHIBIT a l'interior d'edificis perquè es fon amb el foc!).\n• 3) Coure o acer inoxidable: instal·lacions vistes interiors (si travessen falsos sostres, cambres o murs han d'anar embeinades en acer ventilat; tub flexible ≤ 1,5 m).",
            "Evacuació de fums i tipus d'aparells:\n• Tots els aparells a gas de potència ≥ 4,7 kW (escalfadors i calderes) estan obligats a tenir conducte d'evacuació de fums a l'exterior.\n• Circuit OBERT (agafen l'O₂ del local: cuines, estufes catalítiques → risc de CO sense ventilació) vs. Circuit ESTANC (cambra hermètica amb tub concèntric que agafa l'aire de fora i treu els fums fora: calderes modernes)."
          ]
        },
        {
          type: 'table',
          title: 'Escala Oficial de Pressions de Gas i Ordre de les Claus de Tall (MAN.GRAL.007 Cap. 4.2)',
          subtitle: 'Rangs exactes en bar/mbar i Grau d’Accessibilitat (Grau 1, Grau 2 i Grau 3)',
          headers: ['Nivell de Pressió / Clau de Pas', 'Rang Exacte de Pressió / Grau d’Accés', 'Ubicació i Detall Operatiu per a Bombers'],
          rows: [
            ['Transport (Bàsica / Secundari)', 'Bàsica: > 60 bar | Secundari: 16 a 60 bar', 'Gasoductes d’acer d’alta capacitat'],
            ['APB (Alta Pressió B)', '> 16 bar fins a 45 bar', 'Xarxa de distribució primària'],
            ['APA (Alta Pressió A)', '> 4 bar fins a 16 bar', 'Subministrament a grans indústries i estacions de regulació'],
            ['MPB (Mitja Pressió B)', '> 0,4 bar fins a 4 bar', 'Xarxa urbana principal als carrers'],
            ['MPA (Mitja Pressió A)', '> 0,05 bar fins a 0,4 bar (50 a 400 mbar)', 'Escomeses i muntants amb regulador abans del comptador'],
            ['BP (Baixa Pressió)', '≤ 0,05 bar (≤ 50 mbar) · Ús aparells ≈ 20 mbar!', 'Pressió final de treball als cremadors domèstics (0,020 bar = 20 mbar)'],
            ['1. Clau d’Escomesa (Carrer)', 'Grau 1 o Grau 2', 'A la vorera/façana exterior. Grau 1 = accés directe sense clau ni escala'],
            ['2. Clau d’Edifici i 3. Clau de Muntant', 'Grau 2 o Grau 3', 'Grau 2 = amb clau normalitzada de companyia, sense escala. Grau 3 = cal escala o zona privada'],
            ['4. Clau d’Usuari i 6. Clau d’Aparell', 'Usuari = Grau 2 | Aparell = Grau 1 per a l’usuari', 'Abans del comptador (Usuari) i just abans de cada caldera o fogó (Aparell)']
          ],
          footnote: 'Ordre de les 6 claus des del carrer fins al fogó: 1. Escomesa → 2. Edifici → 3. Muntant col·lectiu → 4. Usuari → 5. Comptador → 6. Connexió d’aparell.'
        },
        {
          type: 'mnemonic',
          title: 'Truc Mnemotècnic per a les Pressions de Distribució de Gas: "L’Escala del 4 (16 – 4 – 0,4 – 0,05)"',
          trick:
            'Fixa’t com baixa el límit entre trams dividint per 4 i per 10:\n• APB: > 16 bar (4²)\n• APA: > 4 bar\n• MPB: > 0,4 bar (4 ÷ 10)\n• MPA: > 0,05 bar (50 mbar)\n• BP: ≤ 0,05 bar (i a la cuina de casa arriba a 20 mbar = 0,020 bar!).',
          example:
            'Diferència entre Grau 1, Grau 2 i Grau 3 d’accessibilitat d’una clau de gas:\n• Grau 1: Accés immediat a mà, SENSE armari amb pany i SENSE escala.\n• Grau 2: Dins d’armari o arqueta que s’obre amb clau normalitzada (quadradet de bombers), però SENSE necessitat d’escala.\n• Grau 3: Cal utilitzar una ESCALA o entrar en propietat privada.'
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · Resum 1/2',
      title: 'Resum Imprescindible d’Examen (1/2) — Instal·lacions Elèctriques i Ferrocarrils',
      subtitle: 'Síntesi d’alta densitat del Capítol 2 del manual MAN.GRAL.007.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 1: Totes les Xifres d’Instal·lacions Elèctriques (Cap. 2)',
          subtitle: 'Repàs ràpid abans d’entrar a examen',
          headers: ['Àmbit / Concepte', 'Xifra o Seqüència Oficial Exacta', 'Clau Operativa'],
          rows: [
            ['Tensions Ferroviàries', 'TRAM: 750 V DC · Metro/FGC: 1.500 V DC · ADIF: 3.000 V DC · AVE: 25.000 V AC', 'Les 3 primeres són DC (es dupliquen); només l’AVE és AC!'],
            ['Xarxa de Transport (REE)', '220 kV i 400 kV (Alta Tensió)', 'Cable de guarda a dalt · Regla aïlladors: ≈ 11 kV per disc'],
            ['Xarxa de Distribució', 'MT: 1 a 36 kV (3 cables nus) | BT: ≤ 1.000V AC / 1.500V DC (4 cables)', 'En BT hi ha 3 fases (400 V) + 1 neutre (230 V fase-neutre)'],
            ['Autoconsum i Bateries', 'Domèstiques: 48 V DC | Industrials: fins a 800 V DC', 'El tram DC de les plaques solars SEMPRE té tensió amb llum!'],
            ['Instal·lació d’Enllaç', 'Escomesa → CGP → LGA → IGM (>2 usuaris) → Comptadors → DI → Quadre', 'CGP té els fusibles generals; IGM talla tot l’edifici si >2 usuaris'],
            ['Quadre Interior i ID', 'ICP → IGA → Sobretensions → ID (30 mA / 10 mA / 300 mA) → PIAs + PE', 'PIA: Bimetàl·lic (sobrecàrrega) + Electroimant (curtcircuit)'],
            ['Les 5 Regles d’Or', '1. Desconnectar → 2. Bloquejar → 3. Verificar → 4. Posar a terra → 5. Protegir', 'El detector sense contacte si NO pita no garanteix 100% absència'],
            ['EPI Dielèctric Bombers', 'Casc pesant aïllant fins a 440 V · Eines 1.000 V', 'Els guants d’intervenció de cuir NO són aïllants elèctrics!']
          ]
        }
      ]
    },
    {
      pageNumber: 7,
      isSummary: true,
      shortLabel: 'Pàg. 7 · Resum 2/2',
      title: 'Resum Imprescindible d’Examen (2/2) — Instal·lacions d’Aigua, Clavegueres i Gas',
      subtitle: 'Síntesi d’alta densitat dels Capítols 3 i 4 del manual MAN.GRAL.007.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 2: Totes les Xifres d’Aigua, Sanejament i Gas (Cap. 3 i 4)',
          subtitle: 'Dades numèriques i ordres d’elements que has de dominar al 100%',
          headers: ['Instal·lació', 'Xifres i Seqüència Oficial Exacta', 'Punt Crític d’Examen'],
          rows: [
            ['Armari Comptador Aigua', '1. Clau tall → 2. Filtre Y (25–50 μm) → 3. Comptador → 4. Aixeta prova → 5. Retenció → 6. Sortida', 'Base muntants: 1. Retenció, 2. Clau tall, 3. Aixeta buidatge'],
            ['Ventilació Clavegueres', 'Sortides cada 250 m · Alçada mínima ≥ 9 m · Diàmetre < 20 cm', 'Sifó dels aparells evita l’entrada de gasos de claveguera'],
            ['Col·lectors i Arquetes', 'Per sota de l’aigua potable · Pendent ≥ 2% · Registres cada 15 m', 'Arquetes: 1 col·lector d’entrada per cara i angle > 90°'],
            ['GLP vs. Gas Natural', 'GLP (Butà/Propà): més pesant que l’aire (UD-125 = 12,5 kg) | GN (CH₄): més lleuger', 'Polietilè (PE) prohibit dins d’edificis! Tub flexible ≤ 1,5 m'],
            ['Pressions Xarxa de Gas', 'APB (>16–45) → APA (>4–16) → MPB (>0,4–4) → MPA (>0,05–0,4) → BP (≤0,05 bar)', 'Pressió d’ús als aparells domèstics en BP ≈ 20 mbar (0,020 bar)'],
            ['Ordre de Claus de Gas', '1. Escomesa (G1/2) → 2. Edifici (G2/3) → 3. Muntant (G2/3) → 4. Usuari (G2) → 5. Comptador → 6. Aparell (G1)', 'Evacuació de fums obligatòria en aparells de potència ≥ 4,7 kW']
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't12-q1',
      difficulty: 'Fàcil',
      question: 'Quines són les tensions nominals i el tipus de corrent (DC o AC) del Tramvia (TRAM), del Metro/FGC, de la xarxa convencional d’ADIF (Rodalies) i de l’Alta Velocitat (AVE)?',
      options: [
        'TRAM: 1.500 V AC | Metro/FGC: 3.000 V DC | ADIF: 15.000 V DC | AVE: 25.000 V DC.',
        'TRAM: 750 V DC | Metro i FGC: 1.500 V DC | ADIF convencional: 3.000 V DC | AVE: 25.000 V AC.',
        'Tots quatre funcionen a 3.000 V en Corrent Altern (AC).',
        'TRAM: 400 V AC | Metro: 750 V DC | ADIF: 1.500 V DC | AVE: 400.000 V AC.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 2.1.4.1 del manual MAN.GRAL.007: TRAM = 750 V DC; Metro i FGC = 1.500 V DC; ADIF convencional = 3.000 V DC; Alta Velocitat (AVE) = 25.000 V AC.'
    },
    {
      id: 't12-q2',
      difficulty: 'Mitjà',
      question: 'A partir de quants usuaris és obligatori instal·lar l’IGM (Interruptor General de Maniobra) en la instal·lació d’enllaç elèctrica d’un edifici i on s’ubica?',
      options: [
        'A partir de més de 2 usuaris (> 2 usuaris), ubicat entre la LGA (Línia General d’Alimentació) i la centralització de comptadors.',
        'A partir de 16 usuaris (> 16 usuaris), ubicat a l’interior del quadre general de comandament i protecció de cada habitatge.',
        'És obligatori en qualsevol edifici, inclosos els unifamiliars d’1 o 2 usuaris amb CPM, ubicat entre l’escomesa i la CGP.',
        'A partir de més de 2 usuaris (> 2 usuaris), ubicat a la façana exterior abans de la CGP per facilitar el tall des del carrer.'
      ],
      correctIndex: 0,
      explanation: 'L’IGM és obligatori quan hi ha més de 2 usuaris i se situa just abans de la centralització de comptadors per poder deixar sense tensió tot l’edifici d’una sola maniobra.'
    },
    {
      id: 't12-q3',
      difficulty: 'Mitjà',
      question: 'Quin és l’ordre exacte de les 5 Regles d’Or per treballar sense tensió en una instal·lació elèctrica?',
      options: [
        '1. Posar a terra i en curtcircuit → 2. Desconnectar totes les fonts → 3. Verificar l’absència de tensió → 4. Bloquejar els aparells → 5. Senyalitzar la zona de treball.',
        '1. Desconnectar → 2. Prevenir qualsevol possible realimentació (bloquejar) → 3. Verificar l’absència de tensió → 4. Posar a terra i en curtcircuit → 5. Protegir i senyalitzar.',
        '1. Verificar l’absència de tensió → 2. Desconnectar l’interruptor general → 3. Protegir i senyalitzar → 4. Bloquejar la realimentació → 5. Posar a terra i en curtcircuit.',
        '1. Prevenir qualsevol possible realimentació → 2. Posar a terra i en curtcircuit → 3. Desconnectar el circuit → 4. Verificar l’absència de tensió → 5. Protegir i senyalitzar.'
      ],
      correctIndex: 1,
      explanation: 'Les 5 Regles d’Or (Cap. 2.5) s’han d’aplicar sempre en aquest ordre estricte: 1. Desconnectar, 2. Prevenir realimentació, 3. Verificar absència de tensió, 4. Posar a terra i en curtcircuit, 5. Protegir i senyalitzar.'
    },
    {
      id: 't12-q4',
      difficulty: 'Mitjà',
      question: 'Fins a quina tensió està certificat com a aïllant elèctric el casc d’intervenció pesant dels Bombers de la Generalitat segons el manual MAN.GRAL.007?',
      options: [
        'Fins a 25.000 V.',
        'Fins a 440 V.',
        'Fins a 1.500 V.',
        'El casc no té cap certificació d’aïllament elèctric.'
      ],
      correctIndex: 1,
      explanation: 'Segons l’apartat 2.6 del manual MAN.GRAL.007, el casc d’intervenció pesant està certificat com a aïllant elèctric fins a 440 V (cobrint baixa tensió trifàsica de 400 V).'
    },
    {
      id: 't12-q5',
      difficulty: 'Mitjà',
      question: 'Quin és l’ordre exacte dels 6 elements dins l’armari del comptador general d’aigua potable i quina mida de malla té el filtre tipus Y?',
      options: [
        '1. Comptador → 2. Clau de tall general → 3. Filtre tipus Y (malla de 5 mm) → 4. Vàlvula de retenció → 5. Aixeta de prova → 6. Clau de sortida.',
        '1. Clau de tall general → 2. Filtre tipus Y (malla inoxidable de 25 a 50 μm) → 3. Comptador → 4. Aixeta de prova → 5. Vàlvula de retenció → 6. Clau de sortida.',
        '1. Vàlvula de retenció → 2. Comptador → 3. Clau de tall general → 4. Filtre tipus Y (malla de 250 μm) → 5. Aixeta de prova → 6. Clau de sortida.',
        '1. Clau de tall general → 2. Comptador → 3. Vàlvula de retenció → 4. Filtre tipus Y (malla de 100 a 150 μm) → 5. Aixeta de prova → 6. Clau de sortida.'
      ],
      correctIndex: 1,
      explanation: 'Capítol 3.1 del manual: 1. Clau de tall, 2. Filtre Y (malla 25–50 μm), 3. Comptador, 4. Aixeta de prova, 5. Vàlvula de retenció i 6. Clau de sortida.'
    },
    {
      id: 't12-q6',
      difficulty: 'Difícil',
      question: 'Segons l’apartat 3.2 de sanejament i clavegueram del manual MAN.GRAL.007, quines són les distàncies i mides reglamentàries de les sortides de ventilació de clavegueres i dels col·lectors soterrats?',
      options: [
        'Ventilació cada 500 m, alçada mínima 3 m i diàmetre ≥ 30 cm | Col·lectors per sobre de l’aigua potable, pendent ≥ 0,5% i registres cada 50 m.',
        'Ventilació cada 250 m, alçada mínima 9 m i diàmetre < 20 cm | Col·lectors per sota de l’aigua potable, pendent ≥ 2% i registres cada 15 m.',
        'Ventilació cada 100 m a ras de vorera i diàmetre ≥ 25 cm | Col·lectors al mateix nivell que l’aigua potable, pendent ≥ 1% i registres cada 30 m.',
        'Ventilació cada 150 m, alçada mínima 6 m i diàmetre < 10 cm | Col·lectors per sota de l’aigua potable, pendent ≥ 5% i registres cada 25 m.'
      ],
      correctIndex: 1,
      explanation: 'Dades exactes del Capítol 3.2: sortides de ventilació cada 250 m amb alçada ≥ 9 m i Ø < 20 cm; col·lectors sempre per sota de l’aigua potable, amb pendent ≥ 2% i registres cada 15 m.'
    },
    {
      id: 't12-q7',
      difficulty: 'Mitjà',
      question: 'Quin és el rang de pressió de la xarxa de gas en Mitja Pressió B (MPB), Mitja Pressió A (MPA) i Baixa Pressió (BP), i a quina pressió aproximada treballen els aparells domèstics?',
      options: [
        'MPB: > 4 a 16 bar | MPA: > 0,4 a 4 bar | BP: ≤ 0,4 bar (400 mbar), amb pressió d’ús als aparells ≈ 100 mbar (0,10 bar).',
        'MPB: > 0,4 a 4 bar | MPA: > 0,05 a 0,4 bar | BP: ≤ 0,05 bar (50 mbar), amb pressió d’ús als aparells ≈ 20 mbar (0,020 bar).',
        'MPB: > 16 a 45 bar | MPA: > 4 a 16 bar | BP: ≤ 0,4 bar (400 mbar), amb pressió d’ús als aparells ≈ 50 mbar (0,050 bar).',
        'MPB: > 0,05 a 0,4 bar | MPA: > 0,4 a 4 bar | BP: ≤ 0,02 bar (20 mbar), amb pressió d’ús als aparells ≈ 10 mbar (0,010 bar).'
      ],
      correctIndex: 1,
      explanation: 'Escala de gas (Cap. 4.2): APB (>16–45 bar), APA (>4–16 bar), MPB (>0,4–4 bar), MPA (>0,05–0,4 bar) i BP (≤0,05 bar = 50 mbar, amb pressió d’ús als aparells de 20 mbar).'
    },
    {
      id: 't12-q8',
      difficulty: 'Fàcil',
      question: 'A partir de quina potència nominal és obligatori que un aparell a gas disposi d’un conducte d’evacuació de fums a l’exterior i quina és la longitud màxima d’un tub flexible per a aparells mòbils?',
      options: [
        'A partir de ≥ 4,7 kW; longitud màxima del tub flexible = 1,5 metres.',
        'A partir de ≥ 24 kW; longitud màxima del tub flexible = 5 metres.',
        'A partir de ≥ 1,0 kW; longitud màxima = 3 metres.',
        'Només és obligatori en calderes industrials de > 70 kW.'
      ],
      correctIndex: 0,
      explanation: 'Qualsevol aparell de gas de potència ≥ 4,7 kW ha de tenir conducte d’evacuació de productes de la combustió, i els tubs flexibles d’aparells mòbils no poden superar 1,5 m.'
    },
    {
      id: 't12-q9',
      difficulty: 'Mitjà',
      question: 'Què significa que una clau de tall de gas tingui Accessibilitat de Grau 2 segons el manual MAN.GRAL.007?',
      options: [
        'Que s’hi pot accedir directament amb la mà des de la via pública sense necessitat de cap clau d’armari, eina auxiliar ni escala portàtil.',
        'Que és accessible des de zona comuna mitjançant l’obertura d’un armari o registre amb clau normalitzada de companyia, SENSE necessitat d’escala.',
        'Que per accedir-hi cal utilitzar obligatòriament una escala portàtil de més de 2 metres o travessar una propietat privada o local tancat.',
        'Que es troba allotjada en una arqueta soterrada a la calçada i només la pot accionar personal autoritzat amb clau de quadrat especial de xarxa.'
      ],
      correctIndex: 1,
      explanation: 'Grau 1 = accés directe sense clau ni escala; Grau 2 = accés amb clau normalitzada sense escala; Grau 3 = cal escala o passar per zona privada.'
    },
    {
      id: 't12-q10',
      difficulty: 'Fàcil',
      question: 'Quina és la regla mnemotècnica oficial del manual per estimar la tensió d’una línia elèctrica aèria comptant els discos de les cadenes d’aïlladors?',
      options: [
        '1 kV per cada disc d’aïllador.',
        'Aproximadament 11 kV per cada disc o peça d’aïllador (ex: 20 discos ≈ 220 kV).',
        '100 kV per cada disc d’aïllador.',
        'Els aïlladors només depenen del pes del cable, no de la tensió.'
      ],
      correctIndex: 1,
      explanation: 'Segons el Capítol 2.2 del manual MAN.GRAL.007, cada disc d’una cadena d’aïlladors aïlla aproximadament 11 kV (20 discos ≈ 220 kV; 36 discos ≈ 400 kV).'
    },
    {
      id: 't12-q11',
      difficulty: 'Mitjà',
      question: 'En una intervenció d’incendi en un edifici d’habitatges on cal tallar el subministrament elèctric des de la Caixa General de Protecció (CGP), quina és la maniobra correcta?',
      options: [
        'Tallar directament els conductors d’entrada de la LGA amb una cisalla manual aïllada començant sempre pel conductor neutre abans que les fases.',
        'Extreure únicament els fusibles (amb maneta aïllant i EPI dielèctrics i de protecció contra arc elèctric), sense tallar conductors ni manipular borns nus.',
        'Desconnectar primer el conductor neutre amb una clau fixa aïllada i deixar les tres fases connectades per descarregar el circuit de forma progressiva.',
        'Polvoritzar aigua nebulitzada a baixa pressió cap a l’interior de la CGP des d’una distància de seguretat per fer disparar els fusibles per curtcircuit.'
      ],
      correctIndex: 1,
      explanation: 'A la CGP, l’actuació correcta és obrir-la amb les degudes mesures de protecció (guants dielèctrics, pantalla facial) i extreure només els fusibles amb la maneta aïllada, sense tallar cables ni deixar el neutre obert abans que les fases.'
    },
    {
      id: 't12-q12',
      difficulty: 'Fàcil',
      question: 'Segons la instrucció ITC-BT-25 del REBT per a instal·lacions interiors d’habitatges, quin calibre de PIA (Petit Interruptor Automàtic) i quina secció mínima de cable corresponen respectivament al circuit de cuina/forn (vitroceràmica) i al d’il·luminació?',
      options: [
        'Vitroceràmica: 16 A (2,5 mm²) | Il·luminació: 10 A (1,5 mm²).',
        'Vitroceràmica: 25 A (6 mm²) | Il·luminació: 10 A (1,5 mm²).',
        'Vitroceràmica: 20 A (4 mm²) | Il·luminació: 16 A (2,5 mm²).',
        'Vitroceràmica: 40 A (10 mm²) | Il·luminació: 6 A (1 mm²).'
      ],
      correctIndex: 1,
      explanation: 'Al quadre general de comandament i protecció (CGMP), el circuit C3 (cuina i forn / vitroceràmica) porta un PIA de 25 A amb cable de 6 mm², mentre que el circuit C1 (il·luminació) porta un PIA de 10 A amb cable d’1,5 mm².'
    },
    {
      id: 't12-q13',
      difficulty: 'Fàcil',
      question: 'Segons el codi de colors normalitzat pel REBT per identificar els conductors en una instal·lació de baixa tensió, quina afirmació és INCORRECTA?',
      options: [
        'El conductor de protecció (presa de terra) s’identifica amb el color verd-groc.',
        'El conductor neutre s’identifica amb el color blau clar.',
        'Els conductors de fase s’identifiquen amb els colors marró, negre o gris.',
        'El conductor de protecció (terra) s’ha d’identificar obligatòriament amb el color vermell.'
      ],
      correctIndex: 3,
      explanation: 'El conductor de protecció (PE) s’identifica exclusivament amb el bicolor verd-groc, mai amb el color vermell. El blau clar és per al neutre i el marró, negre i gris per a les fases.'
    },
    {
      id: 't12-q14',
      difficulty: 'Mitjà',
      question: 'Com s’evacua la descàrrega atmosfèrica captada per un parallamps instal·lat al terrat d’un edifici?',
      options: [
        'Es connecta directament al conductor neutre de la xarxa elèctrica de l’edifici a través de la caixa general de protecció.',
        'Es deriva directament a terra mitjançant un conductor baixant dedicat i una presa de terra pròpia (mai al neutre).',
        'S’acumula temporalment en una bateria de condensadors d’alta tensió situada dins la sala de comptadors centralitzats.',
        'Es deriva a les canonades metàl·liques de la instal·lació de gas natural o d’aigua calenta de la façana de l’edifici.'
      ],
      correctIndex: 1,
      explanation: 'El parallamps deriva el corrent del llamp directament a terra a través d’un cable baixant amb el recorregut més recte possible fins a la seva presa de terra, mai al conductor neutre ni a canonades de gas.'
    },
    {
      id: 't12-q15',
      difficulty: 'Mitjà',
      question: 'Quina afirmació és INCORRECTA sobre els elements d’una instal·lació receptora de gas natural i els requisits del local de comptadors centralitzats?',
      options: [
        'L’ordre habitual des de la xarxa exterior cap a l’habitatge és: clau d’escomesa → clau d’edifici → regulador (si escau) → muntant → comptador → clau d’abonat/aparell.',
        'El local o recinte de comptadors centralitzats pot ubicar-se en un segon soterrani (-2) sempre que tingui un extractor mecànic i la porta obri cap endins.',
        'La porta del recinte de comptadors centralitzats ha d’obrir cap enfora (cap a l’exterior) i disposar de ventilació adequada.',
        'Està prohibit ubicar un recinte de comptadors centralitzats de gas natural per sota del primer soterrani (i els de GLP estan prohibits en qualsevol soterrani).'
      ],
      correctIndex: 1,
      explanation: 'És totalment incorrecte: està prohibit situar comptadors centralitzats de gas natural per sota del 1r soterrani (no es permet al 2n soterrani o inferiors), i la porta del recinte ha d’obrir sempre cap enfora (cap a l’exterior), mai cap endins.'
    },
    {
      id: 't12-q16',
      difficulty: 'Mitjà',
      question: 'En una instal·lació elèctrica d’enllaç, quina diferència hi ha entre la CGP, la CPM i l’IGM?',
      options: [
        'La CGP conté els fusibles generals de l’edifici; la CPM fusiona CGP i comptador en edificis d’1 o 2 usuaris (sense LGA ni IGM); i l’IGM és l’interruptor obligatori abans dels comptadors quan hi ha més de 2 usuaris',
        'La CPM és obligatòria en edificis plurifamiliars de més de 16 habitatges per centralitzar les derivacions individuals, mentre que l’IGM només s’instal·la en cases unifamiliars d’1 o 2 usuaris sense LGA',
        'La CGP es troba sempre dins de cada habitatge al costat dels PIAs i del diferencial, la CPM és la caixa de pas de planta de la LGA, i l’IGM és l’element de protecció contra sobretensions de la companyia',
        'L’IGM substitueix l’Interruptor Diferencial de 30 mA i l’IGA de cada habitatge en edificis de nova construcció, mentre que la CGP i la CPM compleixen exactament la mateixa funció de mesura sense fusibles'
      ],
      correctIndex: 0,
      explanation: 'CGP = Caixa General de Protecció (fusibles generals). CPM = Caixa de Protecció i Mesura (integra CGP + comptador per a 1 o 2 usuaris). IGM = Interruptor General de Maniobra (obligatori abans de la centralització de comptadors si > 2 usuaris).'
    },
    {
      id: 't12-q17',
      difficulty: 'Difícil',
      question: 'En un incendi d’una nau amb plaques fotovoltaiques connectades a xarxa (on-grid), tallem el subministrament elèctric general del carrer i l’inversor s’atura per protecció anti-illa. Quina afirmació és correcta sobre el risc elèctric residual?',
      options: [
        'Mentre hi hagi llum solar (o focus potents), els panells i el tram de cablejat en Corrent Continu (DC) fins a l’inversor continuen amb tensió perillosa (fins a 1.000–1.500 V DC), i un detector sense contacte AC pot no detectar-ho',
        'En saltar la protecció anti-illa de l’inversor després de tallar la xarxa del carrer, tota la instal·lació fotovoltaica (tant en AC com en DC fins a les plaques) queda automàticament a 0 V i sense risc d’arc elèctric',
        'Els cables que baixen des dels mòduls fotovoltaics fins a l’inversor transporten corrent altern trifàsic a 400 V AC i queden completament desenergitzats en baixar l’Interruptor General Automàtic (IGA) del quadre',
        'Si el detector de tensió sense contacte convencional no emet cap senyal acústic al costat d’un cable fotovoltaic en DC o d’una conducció apantallada, garanteix al 100% l’absència absoluta de tensió al conductor'
      ],
      correctIndex: 0,
      explanation: 'L’anti-illa només desconnecta la sortida AC cap a la xarxa; els panells generen DC mentre rebin llum fins a l’inversor (1.000–1.500 V DC). A més, el detector sense contacte només detecta camps AC i pot fallar amb cables apantallats o en DC.'
    }
  ]
};
