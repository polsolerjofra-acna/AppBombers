export const tema12RiscosNrbq = {
  id: 'tema-27',
  number: 27,
  code: 'MAN.RRTT.000',
  title: 'Intervenció bàsica en riscos NRBQ',
  category: 'Manual Operatiu SGO — Risc Nuclear, Radiològic, Biològic i Químic',
  estimatedMinutes: 55,
  importance: {
    title: "Radar d'Examen — Tema 27 (MAN.RRTT.000 v.1): Riscos Tecnològics i NRBQ",
    frequency: 'Molt Alta (5-7 preguntes fixes sobre GRIT, Kemler ADR, Font-Flux-Diana, 12 Maniobres i ABD)',
    summary:
      "Manual de 5 capítols que defineix l'operativa davant d'incidents Nuclears, Radiològics, Biològics i Químics: 1. Introducció (GRIT 2020/2021, 3 reactors, 234 instal·lacions RADCAT, 9M tones i 164 establiments Seveso), 2. Coneixements bàsics (SGA/CLP, panell taronja ADR i codis Kemler, cisternes, NFPA 704, detectors Raman/FTIR), 3. Valoració (Anàlisi Font→Flux→Diana vs. Intervenció Diana→Flux→Font), 4. Maniobres (les 12 maniobres ofensives, taponament <1,5 bar, lona, ATEX i despressurització fase gas) i 5. Seguretat (Zonificació, ABD dins Zona Calenta abans d'entrar, hipoclorit 0,5% i vestits EN 943). Inclou 5 pàgines de desenvolupament + 2 pàgines finals de Resum Executiu.",
    hotTopics: [
      'Cap. 1: Creació del GRIT (2020 i operatiu l’1 de maig de 2021), dades de Catalunya (3 reactors nuclears [Ascó I, Ascó II, Vandellòs II], 234 instal·lacions radioactives [RADCAT], 9 milions de tones MMPP/any i 164 establiments Seveso [PLASEQCAT/TRANSCAT]).',
      'Cap. 2: Panell taronja ADR (40×30 cm: dalt Codi Kemler, baix Codi ONU de 4 xifres), codis Kemler especials (X, 22, 323, 333, X423, 44, 539, 606, 90, 99), secció de cisternes (el·líptica = líquids sense pressió vs. circular = gasos/líquids a pressió), diamant NFPA 704 (Blau-Vermell-Groc-Blanc) i detectors (explosímetre %LII, PID, Raman i FTIR).',
      'Cap. 3 (PARANY ESTRELLA): L’ordre d’ANÀLISI del sinistre és Font → Flux → Diana, però l’ordre de PRIORITAT D’ACCIÓ / INTERVENCIÓ és l’invers: 1r DIANA (salvar/protegir persones) → 2n FLUX (abatre/contenir núvol o vessament) → 3r FONT (taponar/tallar fuita)!',
      'Cap. 4: Les 12 maniobres ofensives de contenció i mitigació (taponament amb falques/coixins si P < 1,5 bar, reducció de fuita amb lona, despressurització sempre en FASE GAS, etc.).',
      'Cap. 5: Zonificació (Calenta/Vermella, Temperada/Groga, Freda/Verda), ubicació de l’ABD (Àrea Bàsica de Descontaminació: muntada DINS la Zona Calenta i operativa ABANS que entri el primer binomi!), lleixiu (hipoclorit sòdic al 0,5%) i normes EN 465 vs. EN 943-1/2.'
    ],
    traps: [
      'Confondre l’ordre d’Anàlisi (Font → Flux → Diana) amb l’ordre d’Actuació operativa (1r Diana → 2n Flux → 3r Font)!',
      'Pregunta trampa de l’ABD: On s’ubica i quan es munta l’Àrea Bàsica de Descontaminació (ABD)? S’ubica a la frontera però DINS de la Zona Calenta (abans de passar a la Zona Temperada) i ha d’estar muntada ABANS que el primer binomi entri a intervenir!',
      'Confondre la secció transversal de les cisternes ADR: El·líptica / Caixa de maleta = hidrocarburs líquids a pressió atmosfèrica (baixa el centre de gravetat) | Circular perfecta = gasos o líquids a pressió!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1 Context NRBQ i GRIT',
      title: '1. Context NRBQ a Catalunya, Grup GRIT (2020/2021) i les 4 Amenaces (N-R-B-Q)',
      subtitle: '3 reactors nuclears, 234 instal·lacions radioactives, 9M tones MMPP, 164 Seveso i efecte dòmino.',
      blocks: [
        {
          type: 'table',
          title: '1.3–1.8. Radiografia Oficial del Risc NRBQ a Catalunya i el Grup GRIT (MAN.RRTT.000 Cap. 1)',
          subtitle: 'Xifres literals del primer capítol del manual que cauen als exàmens',
          headers: ['Àmbit / Grup Especial', 'Xifres Oficials de Catalunya al Manual', 'Plans Associats i Característiques'],
          rows: [
            ['1.3. GRIT (Grup de Riscos Tecnològics)', 'Creat l’any 2020 i operatiu l’1 de maig de 2021', 'Unitat especialitzada de Bombers de la Generalitat en intervenció avançada NRBQ, assessorament químic, detecció Raman/FTIR, taponaments complexos i descontaminació.'],
            ['1.4.1. Risc Nuclear (N)', '3 reactors nuclears actius a Catalunya (Ascó I, Ascó II i Vandellòs II)', 'Reaccions de fissió nuclear. Pla estatal PENTA (Pla d’Emergència Nuclear de Tarragona). Radiacions ionitzants d’alta energia.'],
            ['1.4.2. Risc Radiològic (R)', '234 instal·lacions radioactives autoritzades a Catalunya', 'Hospitals (radioteràpia/medicina nuclear), indústries (gammagrafia), centres de recerca i transport d’isòtops. Pla Especial RADCAT.Tipus de radiació: Alfa (α, s’atura amb un full de paper/pell però molt perillosa si s’inhalen/ingereixen partícules), Beta (β, s’atura amb làmina d’alumini/metacrilat) i Gamma / Raigs X (γ, electromagnètica molt penetrant, exigeix blindatge de plom/formigó).'],
            ['1.4.3. Risc Biològic (B)', '4 Grups de Risc (Grup 1 lleu a Grup 4 letal sense vacuna)', 'Bacteris (carbunc/àntrax), virus (Ebola), fongs, paràsits o toxines (ricina, botulisme). Caracteritzat pel període d’incubació i contagi.'],
            ['1.4.4. Risc Químic (Q)', '• 9 milions de tones de MMPP transportades a l’any per Catalunya.\n• 164 establiments industrials afectats per la Directiva Seveso.', 'És el risc tecnològic més freqüent per als bombers. Plans Especials: PLASEQCAT / PLASEQTA (indústria fixa) i TRANSCAT (transport per carretera i ferrocarril).'],
            ['1.8. Efecte Dòmino', 'Concatenació d’accidents on un primer sinistre (incendi/explosió) n’activa un segon en un dipòsit o planta veïna.', 'Multiplica la gravetat de l’emergència (ex: una BLEVE o dardo de foc que impacta sobre una cisterna contigua).']
          ],
          footnote: 'Memoritza les 5 xifres del Capítol 1: GRIT = creat 2020 / operatiu 01/05/2021 | 3 reactors nuclears | 234 instal·lacions radioactives | 9 milions de tones MMPP/any | 164 indústries Seveso.'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 2 ADR, Kemler i Cisternes',
      title: '2. Identificació de Matèries Perilloses: SGA/CLP, Panell ADR (Kemler/ONU), Cisternes i Detectors',
      subtitle: 'Les 9 classes ADR, codis Kemler especials (X, 22, 333, 539, 606), diamant NFPA 704 i Raman/FTIR.',
      blocks: [
        {
          type: 'table',
          title: '2.2.2. Les 9 Classes ADR i lectura del Panell Taronja (40 × 30 cm: Codi Kemler / Codi ONU)',
          subtitle: 'Significat del primer i segon dígit del número d’identificació de perill (Codi Kemler)',
          headers: ['Dígit / Classe ADR', 'Matèria o Perill que Identifica', 'Exemples de Codis Kemler Especials del Manual'],
          rows: [
            ['Classe 1 | Classe 2', '1 = Explosius | 2 = Gasos (comprimits, liquats o refrigerats)', '• 20 = Gas asfixiant (N₂) | 22 = Gas liquat refrigerat criogènic (-162 °C GNL) | 23 = Gas inflamable (butà/propà) | 268 = Gas tòxic i corrosiu (amoníac/clor).'],
            ['Classe 3 | Classe 4', '3 = Líquids inflamables | 4.1 Sòlids inflamables, 4.2 Inflamació espontània, 4.3 Que desprenen gas inflamable amb l’aigua', '• 33 = Líquid molt inflamable (gasolina, ONU 1203) | 323 = Líquid inflamable que reacciona amb aigua emetent gasos inflamables | 333 = Líquid pirofòric (s’inflama espontàniament amb l’aire!) | X423 = Sòlid que reacciona perillosament amb l’aigua desprenent gasos inflamables (sodi, potassi) | 44 = Sòlid inflamable fos a alta Tª.'],
            ['Classe 5 | Classe 6', '5.1 Comburents, 5.2 Peròxids orgànics | 6.1 Tòxics, 6.2 Infecciosos', '• 50 = Comburent | 539 = Peròxid orgànic inflamable | 60 = Tòxic | 606 = Matèria infecciosa (biològica)!'],
            ['Classe 7 | Classe 8 | Classe 9', '7 = Radioactius | 8 = Corrosius | 9 = Perills diversos / Medi ambient', '• 70 = Radioactiu | 80 = Corrosiu (X80 = àcid sulfúric, reacciona violentament amb aigua) | 90 = Perillós per al medi ambient | 99 = Matèria perillosa diversa transportada en calent.'],
            ['Prefix "X" i Dígits Dobles/Triples', '• Prefix "X" davant del Kemler = PROHIBICIÓ ABSOLUTA de tirar AIGUA (reacciona perillosament amb l’aigua!).\n• Doblar o triplicar xifra (33, 333, 88) = Intensificació del perill.', 'Nota: El número inferior del panell taronja (4 xifres) és el Codi ONU que identifica la substància concreta (ex: 1202 = Gasoil, 1203 = Gasolina, 1075 = GLP, 1005 = Amoníac, 1017 = Clor).']
          ],
          footnote: 'Memoritza els Kemler especials del manual: 22 (gas refrigerat), 333 (líquid pirofòric), X423 (sòlid + aigua = gas inflamable), 539 (peròxid orgànic inflamable), 606 (infecciós), 99 (transportat en calent).'
        },
        {
          type: 'table',
          title: '2.2.3–2.4. Tipologia de Cisternes, Diamant NFPA 704, Detectors (Raman/FTIR) i Fitxes FDS',
          subtitle: 'Eines de reconeixement visual i instrumental del Capítol 2 de MAN.RRTT.000',
          headers: ['Element / Equip', 'Característica Tècnica Oficial', 'Clau d’Examen'],
          rows: [
            ['2.2.3. Cisterna de Secció El·líptica (o "Caixa de maleta") vs. Circular', '• Secció EL·LÍPTICA / Policèntrica: Líquids a pressió atmosfèrica (hidrocarburs: gasolina, gasoil). Té taps de càrrega superiors (hombreres/domos) i vàlvula de fons.\n• Secció CIRCULAR perfecta: Gasos liquats a pressió (GLP, amoníac), criogènics o químics corrosius a pressió.', 'Si veus una cisterna rodona perfecta sense taps superiors i amb parasol o fons bombats → és a PRESSIÓ (Classe 2 o 8)! Si és ovalada/aplanada → hidrocarbur líquid a 1 atm.'],
            ['2.2.4. Diamant NFPA 704 (Norma Americana)', 'Rombe dividit en 4 colors amb escala de 0 (mínim) a 4 (màxim):\n• BLAU (Esquerra) = Salut (Toxicitat).\n• VERMELL (Dalt) = Inflamabilitat.\n• GROC (Dreta) = Reactivitat / Inestabilitat.\n• BLANC (Baix) = Risc Específic (W ratllada = No usar aigua; OX = Oxidant; COR = Corrosiu; BIO; RAD).', 'Truc: Blau = Salut | Vermell = Foc (a dalt) | Groc = Reactivitat | Blanc = Especial (W ratllada = equivalent a la X del Kemler!).'],
            ['2.3. Detectors de Bombers i del GRIT', '• Explosímetre: mesura en % del LII (alarma al 10%–20% del LII!).\n• Detector multigas electroquímic: O₂, CO, H₂S, NH₃, Cl₂.\n• PID (Fotoionització): Compostos Orgànics Volàtils (COV) en ppm.\n• Espectrometria RAMAN i FTIR (Infraroig): Identificació química exacta de sòlids, líquids i gasos desconeguts (equipament avançat del GRIT).', 'En radiologia s’usen: Dosímetre personal (mesura dosi acumulada en mSv) i Radiàmetre / Intensímetre (mesura taxa de dosi instantània en µSv/h o mSv/h i contaminació superficial).']
          ],
          footnote: 'Les Fitxes de Dades de Seguretat (FDS / MSDS, secció 2.4) consten de 16 seccions estandarditzades segons el reglament REACH/CLP.'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 3-4 Font-Flux-Diana i 12 Man.',
      title: '3–4. Metodologia Font-Flux-Diana i les 12 Maniobres Ofensives de Contenció i Mitigació',
      subtitle: 'Inversió d’ordre entre Anàlisi i Intervenció, taponament (<1,5 bar), lona i despressurització en fase gas.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: '3.2. Esquema Conceptual Font-Flux-Diana: Ordre d’Anàlisi vs. Ordre d’Intervenció (PARANY!)',
          acronym: 'ANÀLISI: 1r Font → 2n Flux → 3r Diana   |   INTERVENCIÓ (ACCIÓ): 1r DIANA → 2n FLUX → 3r FONT!',
          trick:
            "Aquesta és una de les preguntes preferides del tribunal sobre MAN.RRTT.000:\n• DEFINICIONS:\n  - FONT = El continent o recipient que pateix l'accident (la cisterna, el bidó o la canonada trencada).\n  - FLUX = L'agent perillós que s'escapa i es propaga pel medi (el núvol tòxic a l'aire o el toll líquid que corre cap al riu).\n  - DIANA = Els receptors vulnerables exposats al flux (les persones, la població, els bombers o el medi ambient).\n\n• ORDRE D'ANÀLISI (Com entenem què està passant): Seguim el camí físic del tòxic: 1r FONT → 2n FLUX → 3r DIANA.\n• ORDRE D'INTERVENCIÓ / PRIORITAT D'ACCIÓ (Què fem primer quan arribem): Exactament A L'INVERS!\n  1r) Actuem sobre la DIANA (rescatar víctimes, confinar o evacuar la població, protegir els bombers).\n  2n) Actuem sobre el FLUX (abatre el núvol de gas amb cortina d'aigua, fer dics de terra per aturar el líquid, tapar embornals).\n  3r) Actuem sobre la FONT (taponar l'esquerda de la cisterna, tancar la vàlvula o transvasar el dipòsit).",
          example: 'Si hi ha una fuita de clor: 1r Salvem/confinem les persones (DIANA) → 2n Abatem el núvol de clor amb cortina d’aigua (FLUX) → 3r Taponem la vàlvula de la bombona (FONT).'
        },
        {
          type: 'table',
          title: '4.2. Les 12 Maniobres Ofensives de Contenció i Mitigació en Incidents Químics (MAN.RRTT.000 Cap. 4)',
          subtitle: 'Tècniques sobre el Flux i sobre la Font amb els seus límits operatius exactes',
          headers: ['Maniobra Ofensiva', 'Actua sobre (Flux / Font)', 'Límits Tècnics i Regles Crítiques del Manual'],
          rows: [
            ['1. Absorció i 2. Adsorció', 'Sobre el FLUX (líquid en terra)', 'Absorció: el líquid penetra dins del porus del sòlid (sepiolita, vermiculita, coixins absorbents; augmenta el volum). Adsorció: el tòxic s’adhereix químicament a la superfície (carbó actiu).'],
            ['3. Contenció (Dics / Barreres) i 4. Retenció / Obturació d’embornals', 'Sobre el FLUX', 'Construcció de caballons de terra/sorra i col·locació d’obturadors pneumàtics o catifes de neoprè sobre les reixes del clavegueram.'],
            ['5. Cobriment amb Escuma (Blanketing)', 'Sobre el FLUX (bassa líquida)', 'Aplicar un mantell d’escuma (AR en polars) sobre un toll de líquid inflamable o tòxic volàtil per frenar la seva taxa d’evaporació.'],
            ['6. Abatiment i Dilució de Vapors amb Cortina d’Aigua', 'Sobre el FLUX (núvol gasós)', 'Llança en pantalla/con ample per dissoldre i fer caure a terra gasos solubles en aigua (amoníac NH₃, HCl). Atenció: recollir l’aigua contaminada resultant!'],
            ['7. Neutralització i 8. Dilució líquida', 'Sobre el FLUX', 'Neutralització àcid-base controlada (només sota direcció tècnica/GRIT perquè és fortament exotèrmica i pot esquitxar!).'],
            ['9. Taponament i Obturació de Fuites (Falques, Coixins, Brides)', 'Sobre la FONT', 'LÍMIT DE PRESSIÓ DEL MANUAL: El taponament directe amb falques de fusta/tefló, pegats o coixins pneumàtics de cinturó NOMÉS és segur en fuites a baixa pressió (< 1,5 bar)!'],
            ['10. Reducció de Fuita amb Lona i 11. Ventilació forçada ATEX', 'Sobre la FONT / FLUX', 'Cobrir una fuita projectada amb una lona resistent perquè el líquid perdi energia cinètica i caigui verticalment a un recipient col·lector. En interiors amb gas inflamable, usar ventiladors amb certificació antideflagrant ATEX.'],
            ['12. Transvasament, Cremat Controlat (Flaring) i Despressurització', 'Sobre la FONT', 'REGLA D’OR DE DESPRESSURITZACIÓ: Per baixar la pressió d’una cisterna o recipient, s’ha de purgar/despressuritzar SEMPRE EN FASE GAS (mai en fase líquida, excepte si es fa un transvasament líquid a una altra cisterna buida!).']
          ],
          footnote: 'Memoritza les dues regles d’or sobre la FONT: 1) Taponament directe = pressió < 1,5 bar | 2) Despressurització = SEMPRE en FASE GAS!'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 5 Zonatge, ABD i Vestits',
      title: '5. Seguretat NRBQ: Zonificació, Àrea Bàsica de Descontaminació (ABD), Hipoclorit 0,5% i Vestits',
      subtitle: 'Ubicació exacta de l’ABD (dins Zona Calenta abans d’entrar), regla Distancia-Temps-Blindatge i EN 943.',
      blocks: [
        {
          type: 'table',
          title: '5.1–5.5. Zonificació NRBQ, Ubicació de l’ABD, Descontaminació i Vestits (MAN.RRTT.000 Cap. 5)',
          subtitle: 'Protocols estrictes de control de la contaminació i protecció individual',
          headers: ['Element de Seguretat', 'Criteri Oficial del Manual MAN.RRTT.000', 'Detall i Parany d’Examen'],
          rows: [
            ['5.1. Les 3 Zones Operatives', '• Zona Calenta (Vermella / Exclusió): On hi ha el contaminant. Accés restringit amb EPI específic i CACE per un ÚNIC corredor d’entrada/sortida a sobrevent.\n• Zona Temperada (Groga / Reducció): Franja de transició on hi ha la línia de descontaminació i el binomi SOS.\n• Zona Freda (Verda / Suport): Lliure de contaminació (CCA, SEM, logística).', 'Els vehicles i el CCA s’emplacen sempre en Zona Freda, a SOBREVENT (vent a l’esquena) i a la PART ALTA del pendent!'],
            ['5.4. ABD (Àrea Bàsica de Descontaminació)', '• QUAN ES MUNTA? Ha d’estar completament muntada i amb línia d’aigua operativa ABANS que el primer binomi entri a la Zona Calenta!\n• ON S’UBICA? Es munta al límit exterior però DINS DE LA ZONA CALENTA (just abans de trepitjar la Zona Temperada)!', 'PARANY D’EXAMEN: L’ABD de primera urgència dels bombers es col·loca a la vora interior de la Zona Calenta perquè el bomber ja surti descontaminat abans de posar un peu a la Zona Temperada!'],
            ['5.3. Dissolució Descontaminant (Hipoclorit Sòdic)', 'Dissolució aquosa d’hipoclorit sòdic (lleixiu) al 0,5% (o aigua + sabó neutre).', 'El lleixiu comercial (~40-50 g/L ≈ 4-5%) es dilueix aproximadament 1:10 en aigua per obtenir una concentració del 0,5% efectiva contra agents biològics i químics.'],
            ['5.2. Regla de Protecció Radiològica (3 Pilars)', '1) DISTÀNCIA (la intensitat cau amb el quadrat de la distància: I ∝ 1/d²)\n2) TEMPS (minimitzar el temps d’exposició amb relleus ràpids)\n3) BLINDATGE (interposar pantalles de plom/formigó).', 'Contra la IRRADIACIÓ externa el vestit químic no frena els raigs Gamma (cal Distància + Temps + Blindatge); el vestit hermètic i l’ERA serveixen per evitar la CONTAMINACIÓ (que la pols radioactiva toqui la pell o s’inhali!).'],
            ['5.5. Normativa de Vestits Químics', '• UNE-EN 465 / EN 14605: Tipus 3 (raig líquid) i Tipus 4 (esprai líquid).\n• UNE-EN 943-1 i EN 943-2 (ET): Vestits Tipus 1 hermètics a gasos (1a = ERA dins del vestit; 1b = ERA fora del vestit; 1c = línia d’aire; ET = Equips d’Emergència).', 'Amb un vestit encapsulat Tipus 1a (EN 943-2 ET), el temps real de treball efectiu és de només ~15-20 minuts perquè cal reservar aire de l’ERA per passar pel passadís de descontaminació abans de treure’s el vestit!']
          ],
          footnote: 'Memoritza: ABD = muntada ABANS d’entrar i situada DINS de la Zona Calenta (al límit amb la Temperada) | Hipoclorit sòdic = 0,5%.'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · 📌 Resum 1/2 (Xifres i Codis)',
      title: 'Resum Final (1/2): Taula Mestra de Xifres, Codis Kemler i Dades NRBQ (MAN.RRTT.000)',
      subtitle: 'Totes les xifres de Catalunya, codis Kemler especials, pressions i normes del Tema 27.',
      blocks: [
        {
          type: 'table',
          title: 'Síntesi Numèrica i de Codis Imprescindible — Tema 27 (Riscos NRBQ)',
          subtitle: 'Les 15 dades exactes del manual MAN.RRTT.000 que has de portar memoritzades a l’examen',
          headers: ['Concepte / Codi', 'Valor Oficial Exacte (MAN.RRTT.000)', 'Significat / Aplicació Operativa'],
          rows: [
            ['1. Creació i entrada en servei del GRIT', 'Creat el 2020 | Operatiu l’1 de maig de 2021', 'Grup de Riscos Tecnològics de Bombers de la Generalitat'],
            ['2. Reactors nuclears i instal·lacions RADCAT', '3 reactors nuclears | 234 instal·lacions radioactives', 'Ascó I, Ascó II i Vandellòs II (PENTA) i 234 instal·lacions (RADCAT)'],
            ['3. Volum MMPP i Indústries Seveso a Catalunya', '9 milions de tones MMPP/any | 164 establiments Seveso', 'Coberts pels plans TRANSCAT (transport) i PLASEQCAT (fix)'],
            ['4. Panell Taronja ADR', '40 × 30 cm | Dalt: Codi Kemler (perill) | Baix: Codi ONU (4 xifres)', 'Prefix "X" davant del Kemler = Prohibició absoluta d’usar aigua!'],
            ['5. Codis Kemler Especials (Gas i Líquids)', '22 = Gas liquat refrigerat | 323 = Líquid inflam. + aigua | 333 = Líquid pirofòric', 'El 333 s’inflama espontàniament en contacte amb l’aire'],
            ['6. Codis Kemler Especials (Sòlids i Altres)', 'X423 = Sòlid + aigua → gas inflam. | 44 = Sòlid fos calent | 539 = Peròxid org. inflam.', '606 = Matèria infecciosa | 90 = Medi ambient | 99 = Matèria calenta'],
            ['7. Secció Transversal de Cisternes ADR', 'El·líptica (maleta) = Líquids a 1 atm | Circular = Gasos o líquids a pressió', 'La forma el·líptica abaixa el centre de gravetat en hidrocarburs'],
            ['8. Diamant NFPA 704 (4 Colors, escala 0 a 4)', 'Blau (Esq) = Salut | Vermell (Dalt) = Foc | Groc (Dreta) = Reactivitat | Blanc (Baix) = Especial', 'Al quadrant blanc: W ratllada = No usar aigua; OX = Oxidant'],
            ['9. Detectors Avançats d’Identificació Química', 'Espectrometria RAMAN i FTIR (Infraroig per transformada de Fourier)', 'Explosímetre mesura % del LII; PID mesura COV en ppm'],
            ['10. Ordre d’Anàlisi vs. Ordre d’Intervenció', 'Anàlisi: Font → Flux → Diana | Intervenció: 1r Diana → 2n Flux → 3r Font', 'Primer es protegeixen les persones (Diana), l’últim és taponar la Font'],
            ['11. Límit de pressió per a Taponament directe', 'Pressió < 1,5 bar', 'Amb falques, pegats o coixins d’obturació sobre la Font'],
            ['12. Regla de Despressurització d’un Recipient', 'Sempre en FASE GAS (mai en fase líquida)', 'Evita l’expansió líquid-vapor massiva a l’exterior'],
            ['13. Ubicació i Moment de Muntatge de l’ABD', 'Muntada ABANS d’entrar | Situada DINS de la Zona Calenta (al límit)', 'Àrea Bàsica de Descontaminació obligatòria per al primer binomi'],
            ['14. Concentració d’Hipoclorit Sòdic en Descont.', '0,5% d’hipoclorit sòdic en aigua', 'Solució desinfectant estàndard per a descontaminació NRBQ'],
            ['15. Normes de Vestits Químics', 'EN 465 (Tipus 3/4 líquids) | EN 943-1 i EN 943-2 ET (Tipus 1 hermètic a gasos)', 'Tipus 1a = ERA dins del vestit | Tipus 1b = ERA fora del vestit']
          ],
          footnote: 'Pàgina 1 de 2 del Resum Executiu del Tema 27 (MAN.RRTT.000).'
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · 📌 Resum 2/2 (Paranys)',
      title: 'Resum Final (2/2): Regles d’Or NRBQ i Paranys del Tribunal (MAN.RRTT.000)',
      subtitle: 'Les 4 distincions conceptuals que resolen les preguntes més difícils de Riscos Tecnològics.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Els 4 Paranys Clàssics del Tribunal al Tema 27 (NRBQ)',
          acronym: 'DIANA-FLUX-FONT | ABD DINS ZONA CALENTA | IRRADIACIÓ vs CONTAMINACIÓ | ABSORCIÓ vs ADSORCIÓ',
          trick:
            "1) FONT-FLUX-DIANA vs. DIANA-FLUX-FONT:\n• Quan el tribunal pregunta per la seqüència d'estudi o ANÀLISI del sinistre: Font → Flux → Diana.\n• Quan pregunta per la prioritat operativa d'INTERVENCIÓ o acció dels bombers: 1r DIANA (persones) → 2n FLUX (núvol/vessament) → 3r FONT (recipient).\n\n2) ON ES COL·LOCA L'ABD (Àrea Bàsica de Descontaminació)?\n• Molts opositors fallen marcant 'Zona Temperada'. El manual MAN.RRTT.000 (secció 5.4) diu explícitament que l'ABD d'urgència dels bombers s'instal·la DINS DE LA ZONA CALENTA (a la frontera de sortida) i ha d'estar muntada ABANS que entri el primer binomi!\n\n3) IRRADIACIÓ vs. CONTAMINACIÓ RADIOLÒGICA:\n• Irradiació = rebre radiació (com la llum d'una bombeta) sense tocar la font; si t'allunyes, cessa a l'instant (es combat amb Distància, Temps i Blindatge).\n• Contaminació = tenir pols o líquid radioactiu enganxat a la pell, a l'EPI o als pulmons (continues rebent dosi encara que t'allunyis → es prevé amb vestit estanc + ERA i s'elimina rentant a la descontaminació!).\n\n4) ABSORCIÓ vs. ADSORCIÓ:\n• Absorció (amb B d'Esponga): el líquid entra dins la massa de l'absorbent (sepiolita, terra) i n'augmenta el volum.\n• Adsorció (amb D d'Adhesió): les molècules queden retingudes a la superfície dels microporus (carbó actiu).",
          example: 'Si un pacient ha estat només IRRADIAT per una font Gamma segellada (sense pols ni contacte físic), NO emet radiació ni contamina els bombers o l’ambulància!'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q27-1',
      difficulty: 'Mitjà',
      question: "Segons la metodologia de valoració del capítol 3 del manual MAN.RRTT.000, quin és l'ordre de l'esquema d'anàlisi del sinistre i quin és l'ordre de prioritat en les accions d'intervenció?",
      options: [
        'Tant l’anàlisi com la intervenció segueixen l’ordre Font → Flux → Diana.',
        'L’anàlisi segueix l’ordre Font → Flux → Diana, però les accions d’intervenció segueixen l’ordre invers: 1r Diana → 2n Flux → 3r Font.',
        'L’anàlisi és Diana → Flux → Font i la intervenció és Font → Flux → Diana.',
        'Primer s’actua sempre sobre la Font i l’últim sobre la Diana.'
      ],
      correctIndex: 1,
      explanation: "El manual estableix que l'incident s'analitza de la Font cap al Flux i la Diana, però s'hi intervé en ordre invers: 1r protegir la Diana (persones), 2n controlar el Flux i 3r contenir la Font."
    },
    {
      id: 'q27-2',
      difficulty: 'Difícil',
      question: "Segons l'apartat 5.4 del manual MAN.RRTT.000, en quin moment i en quina zona s'ha d'instal·lar l'Àrea Bàsica de Descontaminació (ABD) dels bombers?",
      options: [
        'En finalitzar la intervenció, dins de la Zona Freda.',
        'Abans que el primer binomi entri a intervenir, ubicada dins de la Zona Calenta (al límit amb la Zona Temperada).',
        'Durant el retorn al parc de bombers.',
        'Dins del Centre de Comandament Avançat (CCA).'
      ],
      correctIndex: 1,
      explanation: "L'ABD ha d'estar operativa abans d'entrar a la Zona Calenta i es munta a la vora interior de la pròpia Zona Calenta per evitar exportar contaminació."
    },
    {
      id: 'q27-3',
      difficulty: 'Mitjà',
      question: "En un panell taronja ADR, què indiquen els codis de perill (Kemler) '333', 'X423' i '606'?",
      options: [
        '333 = Gas criogènic | X423 = Explosiu | 606 = Radioactiu',
        '333 = Líquid pirofòric (s’inflama espontàniament) | X423 = Sòlid que reacciona perillosament amb l’aigua emetent gasos inflamables | 606 = Matèria infecciosa',
        '333 = Gasolina | X423 = Gasoil | 606 = Corrosiu',
        'Tots tres indiquen matèries perilloses per al medi ambient.'
      ],
      correctIndex: 1,
      explanation: '333 = líquid pirofòric; X423 = sòlid inflamable que reacciona perillosament amb l’aigua desprenent gas inflamable; 606 = matèria infecciosa (Classe 6.2).'
    },
    {
      id: 'q27-4',
      difficulty: 'Fàcil',
      question: "Fins a quina pressió màxima interior es recomana realitzar maniobres de taponament directe d'una fuita i en quina fase s'ha de realitzar sempre la despressurització d'un recipient segons el capítol 4 de MAN.RRTT.000?",
      options: [
        'Fins a 10 bar | Despressuritzar sempre en fase líquida',
        'Per sota d’1,5 bar (< 1,5 bar) | Despressuritzar sempre en fase gas',
        'Fins a 50 bar | Tant és la fase',
        'Fins a 200 bar | Despressuritzar per sota de la cisterna'
      ],
      correctIndex: 1,
      explanation: 'El taponament directe amb falques o coixins es limita a pressions inferiors a 1,5 bar, i la despressurització d’un tanc es fa sempre des de la fase gas.'
    },
    {
      id: 'q27-5',
      difficulty: 'Fàcil',
      question: "En quin any es va crear el Grup de Riscos Tecnològics (GRIT) de Bombers de la Generalitat i en quina data va entrar en servei operatiu?",
      options: [
        'Creat el 1999 i operatiu l’1 de març de 1999',
        'Creat el 2020 i operatiu l’1 de maig de 2021',
        'Creat el 2010 i operatiu el 2012',
        'Creat el 2025'
      ],
      correctIndex: 1,
      explanation: 'Segons la secció 1.3 del manual, el GRIT es va crear el 2020 i va entrar en servei operatiu l’1 de maig de 2021.'
    },
    {
      id: 'q27-6',
      difficulty: 'Fàcil',
      question: "Segons les dades oficials del capítol 1 del manual MAN.RRTT.000 sobre el risc NRBQ a Catalunya, quants reactors nuclears actius, quantes instal·lacions radioactives (RADCAT) i quants establiments Seveso hi consten?",
      options: [
        '3 reactors nuclears (Ascó I, Ascó II i Vandellòs II), 234 instal·lacions radioactives i 164 establiments Seveso (amb 9 milions de tones de MMPP/any).',
        '5 reactors nuclears, 50 instal·lacions radioactives i 40 establiments Seveso.',
        '2 reactors nuclears, 164 instal·lacions radioactives i 234 establiments Seveso.',
        '1 reactor nuclear, 9 instal·lacions radioactives i 500 establiments Seveso.'
      ],
      correctIndex: 0,
      explanation: 'El capítol 1 recull literalment: 3 reactors nuclears actius (Ascó I, Ascó II, Vandellòs II), 234 instal·lacions radioactives autoritzades (RADCAT), 9 milions de tones de MMPP/any i 164 establiments Seveso.'
    },
    {
      id: 'q27-7',
      difficulty: 'Mitjà',
      question: "Quin tipus de blindatge atura cada radiació ionitzant i quina diferència hi ha entre irradiació externa i contaminació radiològica?",
      options: [
        'La radiació Alfa requereix plom gruixut; la Gamma s’atura amb paper; la irradiació continua encara que t’allunyis de la font.',
        'Totes tres radiacions s’aturen amb un vestit químic tipus 1a.',
        'Alfa s’atura amb paper/pell (molt perillosa si s’inhala/ingereix), Beta amb alumini/metacrilat i Gamma/Raigs X amb plom/formigó; la irradiació cessa en allunyar-se mentre que la contaminació persisteix fins a descontaminar.',
        'Un pacient només irradiat emet radiació Gamma i contamina l’ambulància.'
      ],
      correctIndex: 2,
      explanation: 'Alfa = paper/pell; Beta = alumini/metacrilat; Gamma = plom/formigó. La irradiació externa cessa en allunyar-se o interposar blindatge (sense transferir partícules), mentre que la contaminació implica pols/líquid radioactiu adherit o inhalat.'
    },
    {
      id: 'q27-8',
      difficulty: 'Difícil',
      question: "Com distingim visualment per la seva secció transversal una cisterna ADR que transporta hidrocarburs líquids a pressió atmosfèrica d'una que transporta gasos liquats o químics a pressió (secció 2.2.3)?",
      options: [
        'Les cisternes de gasos a pressió són sempre quadrades i amb taps superiors.',
        'Totes les cisternes ADR tenen secció el·líptica sense excepció.',
        'Les cisternes d’hidrocarburs són circulars perfectes amb parasol superior.',
        'La secció el·líptica (o caixa de maleta, amb taps/domos superiors) correspon a líquids a pressió atmosfèrica; la secció circular perfecta (sense taps superiors i amb fons bombats) correspon a gasos o líquids a pressió.'
      ],
      correctIndex: 3,
      explanation: 'La secció el·líptica/policèntrica abaixa el centre de gravetat i s’empra en líquids a 1 atm (gasolina, gasoil), mentre que la secció circular perfecta suporta la pressió interna de gasos liquats o productes químics a pressió.'
    },
    {
      id: 'q27-9',
      difficulty: 'Mitjà',
      question: "Al diamant de perill americà NFPA 704 (escala 0 a 4), què representa cadascun dels quatre colors i què significa una 'W' ratllada al quadrant blanc?",
      options: [
        'Blau (esq.) = Salut | Vermell (dalt) = Inflamabilitat | Groc (dreta) = Reactivitat | Blanc (baix) = Risc específic (W ratllada = prohibit usar aigua).',
        'Blau = Aigua | Vermell = Corrosiu | Groc = Radioactiu | Blanc = Explosiu.',
        'Blau = Inflamabilitat | Vermell = Salut | Groc = Risc específic | Blanc = Reactivitat.',
        'Verd = Salut | Taronja = Foc | Negre = Reactivitat | W ratllada = usar molta aigua.'
      ],
      correctIndex: 0,
      explanation: 'En el diamant NFPA 704: Blau = Salut, Vermell = Inflamabilitat, Groc = Reactivitat/Inestabilitat i Blanc = Risc específic (W ratllada = no usar aigua, equivalent al prefix X del codi Kemler).'
    },
    {
      id: 'q27-10',
      difficulty: 'Fàcil',
      question: "A quina concentració s'utilitza la dissolució aquosa d'hipoclorit sòdic (lleixiu) per a la descontaminació NRBQ (apartat 5.3) i on s'han d'ubicar els vehicles i el CCA?",
      options: [
        'Hipoclorit al 10% | Vehicles i CCA dins la Zona Calenta.',
        'Hipoclorit pur al 100% | Vehicles a sotavent i part baixa del pendent.',
        'Hipoclorit sòdic al 0,5% | Vehicles i CCA sempre en Zona Freda (Verda), a sobrevent i a la part alta del pendent.',
        'Només alcohol de 96° | Vehicles en Zona Temperada.'
      ],
      correctIndex: 2,
      explanation: "El manual fixa la dissolució d'hipoclorit sòdic al 0,5% (dilució ~1:10 del lleixiu comercial) i situa el CCA i els vehicles en Zona Freda, a sobrevent i a la part alta del pendent."
    },
    {
      id: 'q27-11',
      difficulty: 'Mitjà',
      question: "Quina diferència tècnica existeix entre absorció i adsorció en les maniobres sobre el flux (capítol 4) i quins equips avançats del GRIT permeten identificar químicament substàncies desconegudes?",
      options: [
        'Absorció només serveix per a gasos i Adsorció per a incendis forestals | Termòmetre i baròmetre.',
        'Són sinònims exactes | Només paper indicador de pH.',
        'Absorció es fa amb carbó actiu i Adsorció amb escuma | Explosímetre de %LII exclusivament.',
        'En l’absorció el líquid penetra dins els porus del sòlid (sepiolita/vermiculita, augmentant el volum) i en l’adsorció s’adhereix a la superfície (carbó actiu) | Espectrometria Raman i FTIR.'
      ],
      correctIndex: 3,
      explanation: "L'absorbent (sepiolita, vermiculita) incorpora el líquid dins la seva massa; l'adsorbent (carbó actiu) reté molècules a la superfície. El GRIT disposa d'espectròmetres Raman i FTIR per identificar sòlids, líquids i gasos desconeguts."
    },
    {
      id: 'q27-12',
      difficulty: 'Difícil',
      question: "Segons l'apartat 5.5 de MAN.RRTT.000, quina norma regula els vestits hermètics a gasos (Tipus 1) i quin temps real aproximat de treball efectiu permet un vestit encapsulat Tipus 1a amb ERA interior?",
      options: [
        'UNE-EN 465 | Permet treballar 90 minuts seguits sense reserva d’aire.',
        'UNE-EN 943-1 i EN 943-2 (ET) | Temps real efectiu d’uns 15-20 minuts, ja que cal reservar aire per passar pel passadís de descontaminació abans de treure’s el vestit.',
        'UNE-EN 1891 | Permet treballar 45 minuts sense passar per l’ABD.',
        'UNE-EN 16942 | L’ERA va sempre per fora del vestit en el Tipus 1a.'
      ],
      correctIndex: 1,
      explanation: "Els vestits Tipus 1 hermètics a gasos es regeixen per EN 943-1 / EN 943-2 ET (1a = ERA dins del vestit). Tot i l'autonomia nominal de l'ampolla, el treball efectiu és d'uns 15-20 minuts perquè cal aire suficient per completar la descontaminació."
    }
  ]
};
