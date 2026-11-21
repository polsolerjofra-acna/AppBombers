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
      "Manual de 5 capítols sobre incidents NRBQ: grup GRIT (2020/2021) i riscos a Catalunya (3 reactors, 234 instal·lacions RADCAT, 164 Seveso), identificació ADR/Kemler/NFPA/Raman-FTIR, ordre d'anàlisi (Font→Flux→Diana) vs. intervenció (Diana→Flux→Font), les 12 maniobres ofensives (<1,5 bar, fase gas) i seguretat (ABD dins Zona Calenta, hipoclorit 0,5%, EN 943).",
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
          type: 'text',
          heading: '1.3–1.4. El Grup GRIT i les 4 Amenaces NRBQ a Catalunya',
          paragraphs: [
            "El Grup de Riscos Tecnològics (GRIT) es va crear el 2020 i va entrar en servei l'1 de maig de 2021 per donar resposta avançada en detecció química (Raman/FTIR), taponaments i descontaminació.",
            "A Catalunya, el risc químic (9 M tones MMPP/any i 164 establiments Seveso) és el més freqüent, seguit del radiològic (234 instal·lacions RADCAT) i el nuclear (3 reactors actius: Ascó I, Ascó II i Vandellòs II)."
          ]
        },
        {
          type: 'table',
          title: '1.3–1.8. Radiografia Oficial del Risc NRBQ a Catalunya i el Grup GRIT (MAN.RRTT.000 Cap. 1)',
          subtitle: 'Xifres literals del primer capítol del manual que cauen als exàmens',
          headers: ['Àmbit / Grup Especial', 'Xifres Oficials de Catalunya al Manual', 'Plans Associats i Característiques'],
          rows: [
            ['1.3. GRIT (Grup de Riscos Tecnològics)', 'Creat l’any 2020 i operatiu l’1 de maig de 2021', 'Unitat especialitzada de Bombers de la Generalitat en intervenció avançada NRBQ, assessorament químic, detecció Raman/FTIR, taponaments complexos i descontaminació.'],
            ['1.4.1. Risc Nuclear (N)', '3 reactors nuclears actius a Catalunya (Ascó I, Ascó II i Vandellòs II)', 'Reaccions de fissió nuclear. Pla estatal PENTA (Pla d’Emergència Nuclear de Tarragona). Radiacions ionitzants d’alta energia.'],
            ['1.4.2. Risc Radiològic (R)', '234 instal·lacions radioactives autoritzades a Catalunya', 'Hospitals (radioteràpia), indústria (gammagrafia) i recerca (Pla RADCAT). Radiació Alfa (α: paper/pell, molt perillosa inhalada), Beta (β: alumini/metacrilat) i Gamma (γ: blindatge plom/formigó).'],
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
          type: 'text',
          heading: '2.2. Identificació Visual: Panell Taronja ADR i Secció de Cisternes',
          paragraphs: [
            "El panell taronja ADR (40 × 30 cm) mostra a dalt el Codi Kemler (perill; una 'X' davant prohibeix tirar aigua) i a baix el Codi ONU de 4 xifres que identifica la substància.",
            "Per la secció transversal distingim ràpidament la càrrega: el·líptica o 'caixa de maleta' = líquids a pressió atmosfèrica (hidrocarburs); circular perfecta = gasos o líquids a pressió."
          ]
        },
        {
          type: 'diagram',
          title: 'Zonatge Operatiu NRBQ (Zona Calenta, Tèbia i Freda) i Direcció del Vent',
          diagramType: 'nrbq_zoning',
          caption:
            'Organització del sinistre NRBQ amb el PMA i la Zona Freda a sobrevent, el corredor de descontaminació obligatori a la Zona Tèbia i la intervenció amb Nivell III/II a la Zona Calenta.'
        },
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
          type: 'text',
          heading: '⚠️ No confondre! Ordre d’Anàlisi (Font → Flux → Diana) vs. Ordre d’Intervenció (Diana → Flux → Font)',
          paragraphs: [
            "• ELEMENTS: FONT = el recipient o canonada amb fuita; FLUX = l'agent perillós que s'escapa (núvol o vessament); DIANA = els receptors vulnerables (persones, bombers, medi ambient).",
            "• ORDRE D'ANÀLISI (entendre què passa): S'estudia de l'origen al receptor → 1r FONT → 2n FLUX → 3r DIANA.",
            "• ORDRE D'INTERVENCIÓ (què fem primer): És exactament A L'INVERS → 1r DIANA (salvar/confinar persones) → 2n FLUX (abatre núvol / fer dics) → 3r FONT (taponar o tancar vàlvula)."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: '3.2. Regla Mnemotècnica Font-Flux-Diana (Anàlisi vs. Intervenció)',
          acronym: 'ANÀLISI: 1r Font → 2n Flux → 3r Diana   |   INTERVENCIÓ (ACCIÓ): 1r DIANA → 2n FLUX → 3r FONT!',
          trick:
            "• Anàlisi = segueix el camí físic del tòxic (Font → Flux → Diana).\n• Acció operativa = comença sempre per les persones (1r Diana → 2n Flux → 3r Font).",
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
        },
        {
          type: 'text',
          heading: '⚠️ No confondre! Ubicació de l’ABD i Irradiació vs. Contaminació',
          paragraphs: [
            "• ABD (Àrea Bàsica de Descontaminació): No es munta a la Zona Temperada ni al final, sinó DINS la Zona Calenta (al límit amb la Temperada) i ha d'estar operativa ABANS que entri el primer binomi.",
            "• IRRADIACIÓ vs. CONTAMINACIÓ: La irradiació és rebre radiació externa (cessa en allunyar-se; es combat amb Distància, Temps i Blindatge). La contaminació implica pols o líquid radioactiu adherit o inhalat (persisteix fins a descontaminar; es prevé amb vestit estanc + ERA)."
          ]
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
            "1) FONT-FLUX-DIANA vs. DIANA-FLUX-FONT: Anàlisi = Font → Flux → Diana; Intervenció operativa = 1r Diana → 2n Flux → 3r Font.\n2) UBICACIÓ DE L'ABD: Muntada ABANS d'entrar i situada DINS la Zona Calenta (al límit amb la Temperada).\n3) IRRADIACIÓ vs. CONTAMINACIÓ: Irradiació cessa en allunyar-se (Distància, Temps, Blindatge); Contaminació requereix vestit + ERA + descontaminació.\n4) ABSORCIÓ vs. ADSORCIÓ: Absorció = entra dins la massa (sepiolita); Adsorció = s'adhereix a la superfície (carbó actiu).",
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
        'Tant l’anàlisi com la intervenció segueixen estrictament el mateix ordre seqüencial de la cadena de risc: 1r Font → 2n Flux → 3r Diana.',
        'L’anàlisi segueix l’ordre Font → Flux → Diana, però les accions d’intervenció segueixen l’ordre invers: 1r Diana → 2n Flux → 3r Font.',
        'L’anàlisi s’inicia sempre per la Diana → Flux → Font, mentre que la intervenció prioritza actuar primer sobre la Font i després el Flux.',
        'La valoració operativa comença pel Flux → Font → Diana, i la intervenció s’executa en paral·lel prioritzant primer la contenció de la Font.'
      ],
      correctIndex: 1,
      explanation: "El manual estableix que l'incident s'analitza de la Font cap al Flux i la Diana, però s'hi intervé en ordre invers: 1r protegir la Diana (persones), 2n controlar el Flux i 3r contenir la Font."
    },
    {
      id: 'q27-2',
      difficulty: 'Difícil',
      question: "Segons l'apartat 5.4 del manual MAN.RRTT.000, en quin moment i en quina zona s'ha d'instal·lar l'Àrea Bàsica de Descontaminació (ABD) dels bombers?",
      options: [
        'Un cop finalitzada la fase de contenció de la fuita, ubicada dins de la Zona Freda per evitar el contacte amb vapors tòxics.',
        'Abans que el primer binomi entri a intervenir, ubicada dins de la Zona Calenta (al límit amb la Zona Temperada).',
        'Simultàniament a la sortida del primer binomi d’intervenció, muntada al perímetre exterior de la Zona Temperada.',
        'Només quan es confirmi contaminació real d’intervinents, ubicada al costat del Centre de Comandament Avançat (CCA).'
      ],
      correctIndex: 1,
      explanation: "L'ABD ha d'estar operativa abans d'entrar a la Zona Calenta i es munta a la vora interior de la pròpia Zona Calenta per evitar exportar contaminació."
    },
    {
      id: 'q27-3',
      difficulty: 'Mitjà',
      question: "En un panell taronja ADR, què indiquen els codis de perill (Kemler) '333', 'X423' i '606'?",
      options: [
        '333 = Gas liquat refrigerat inflamable | X423 = Matèria explosiva que detona amb l’aigua | 606 = Matèria radioactiva de baixa activitat',
        '333 = Líquid pirofòric (s’inflama espontàniament) | X423 = Sòlid que reacciona perillosament amb l’aigua emetent gasos inflamables | 606 = Matèria infecciosa',
        '333 = Líquid molt inflamable amb risc corrosiu | X423 = Gas tòxic que reacciona amb l’aire | 606 = Matèria comburent molt tòxica',
        '333 = Líquid inflamable a temperatura elevada | X423 = Sòlid corrosiu incompatible amb àcids | 606 = Substància perillosa per al medi ambient'
      ],
      correctIndex: 1,
      explanation: '333 = líquid pirofòric; X423 = sòlid inflamable que reacciona perillosament amb l’aigua desprenent gas inflamable; 606 = matèria infecciosa (Classe 6.2).'
    },
    {
      id: 'q27-4',
      difficulty: 'Fàcil',
      question: "Fins a quina pressió màxima interior es recomana realitzar maniobres de taponament directe d'una fuita i en quina fase s'ha de realitzar sempre la despressurització d'un recipient segons el capítol 4 de MAN.RRTT.000?",
      options: [
        'Fins a 10 bar de pressió interior | Despressuritzar sempre en fase líquida',
        'Per sota d’1,5 bar (< 1,5 bar) | Despressuritzar sempre en fase gas',
        'Fins a 5 bar de pressió interior | Indiferentment en fase gas o líquida',
        'Fins a 3,5 bar de pressió interior | Despressuritzar per la vàlvula de fons'
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
        'Creat el 2015 i operatiu l’1 de juny de 2016',
        'Creat el 2022 i operatiu l’1 de gener de 2023'
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
        '4 reactors nuclears (incloent-hi Vandellòs I en actiu), 185 instal·lacions radioactives i 120 establiments Seveso (amb 6 milions de tones de MMPP/any).',
        '2 reactors nuclears actius (Ascó I i Vandellòs II), 164 instal·lacions radioactives i 234 establiments Seveso (amb 12 milions de tones de MMPP/any).',
        '3 reactors nuclears actius, 310 instal·lacions radioactives autoritzades i 98 establiments Seveso (amb 4,5 milions de tones de MMPP/any).'
      ],
      correctIndex: 0,
      explanation: 'El capítol 1 recull literalment: 3 reactors nuclears actius (Ascó I, Ascó II, Vandellòs II), 234 instal·lacions radioactives autoritzades (RADCAT), 9 milions de tones de MMPP/any i 164 establiments Seveso.'
    },
    {
      id: 'q27-7',
      difficulty: 'Difícil',
      question: "Quin tipus de blindatge atura cada radiació ionitzant i quina diferència hi ha entre irradiació externa i contaminació radiològica?",
      options: [
        'Alfa requereix plom gruixut, Beta s’atura amb paper i Gamma amb alumini prim; tant la irradiació com la contaminació cessen immediatament en allunyar-se de la font sense necessitat de descontaminar.',
        'Alfa, Beta i Gamma s’aturen completament amb un vestit químic hermètic tipus 1a; la irradiació externa converteix el pacient en radioactiu mentre que la contaminació només provoca cremades tèrmiques.',
        'Alfa s’atura amb paper/pell (molt perillosa si s’inhala/ingereix), Beta amb alumini/metacrilat i Gamma/Raigs X amb plom/formigó; la irradiació cessa en allunyar-se mentre que la contaminació persisteix fins a descontaminar.',
        'Alfa s’atura amb alumini, Beta amb formigó i Gamma amb paper/roba gruixuda; un pacient només irradiat externament per una font segellada emet radiació Gamma contínua i contamina l’ambulància durant el trasllat.'
      ],
      correctIndex: 2,
      explanation: 'Alfa = paper/pell; Beta = alumini/metacrilat; Gamma = plom/formigó. La irradiació externa cessa en allunyar-se o interposar blindatge (sense transferir partícules), mentre que la contaminació implica pols/líquid radioactiu adherit o inhalat.'
    },
    {
      id: 'q27-8',
      difficulty: 'Difícil',
      question: "Com distingim visualment per la seva secció transversal una cisterna ADR que transporta hidrocarburs líquids a pressió atmosfèrica d'una que transporta gasos liquats o químics a pressió (secció 2.2.3)?",
      options: [
        'La secció circular perfecta amb taps superiors correspon a hidrocarburs a pressió atmosfèrica; la secció quadrada amb parets planes reforçades correspon exclusivament a gasos liquats criogènics o tòxics a alta pressió.',
        'Totes les cisternes ADR de líquids i gasos presenten secció el·líptica estandarditzada per normativa europea, diferenciant-se únicament pel gruix de la xapa d’acer i pel color de les plaques de perill.',
        'Les cisternes d’hidrocarburs tenen secció circular perfecta amb parasol superior i fons plans, mentre que les cisternes de gasos liquats a pressió presenten secció el·líptica o de caixa de maleta amb múltiples domos.',
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
        'Blau (esq.) = Risc amb aigua | Vermell (dalt) = Corrosivitat | Groc (dreta) = Radioactivitat | Blanc (baix) = Toxicitat (W ratllada = aplicar boira d’aigua).',
        'Blau (esq.) = Inflamabilitat | Vermell (dalt) = Salut | Groc (dreta) = Risc específic | Blanc (baix) = Reactivitat (W ratllada = producte soluble en aigua).',
        'Blau (esq.) = Reactivitat | Vermell (dalt) = Salut | Groc (dreta) = Inflamabilitat | Blanc (baix) = Risc ambiental (W ratllada = contenir amb aigua).'
      ],
      correctIndex: 0,
      explanation: 'En el diamant NFPA 704: Blau = Salut, Vermell = Inflamabilitat, Groc = Reactivitat/Inestabilitat i Blanc = Risc específic (W ratllada = no usar aigua, equivalent al prefix X del codi Kemler).'
    },
    {
      id: 'q27-10',
      difficulty: 'Mitjà',
      question: "A quina concentració s'utilitza la dissolució aquosa d'hipoclorit sòdic (lleixiu) per a la descontaminació NRBQ (apartat 5.3) i on s'han d'ubicar els vehicles i el CCA?",
      options: [
        'Hipoclorit sòdic al 5% | Vehicles i CCA dins la Zona Temperada, a sobrevent però a la cota més baixa del terreny.',
        'Hipoclorit sòdic al 10% | Vehicles i CCA a sotavent i a la part baixa del pendent per facilitar el drenatge d’aigües.',
        'Hipoclorit sòdic al 0,5% | Vehicles i CCA sempre en Zona Freda (Verda), a sobrevent i a la part alta del pendent.',
        'Hipoclorit sòdic al 0,05% | Vehicles en Zona Temperada i el CCA dins la Zona Freda, perpendiculars a la direcció del vent.'
      ],
      correctIndex: 2,
      explanation: "El manual fixa la dissolució d'hipoclorit sòdic al 0,5% (dilució ~1:10 del lleixiu comercial) i situa el CCA i els vehicles en Zona Freda, a sobrevent i a la part alta del pendent."
    },
    {
      id: 'q27-11',
      difficulty: 'Difícil',
      question: "Quina diferència tècnica existeix entre absorció i adsorció en les maniobres sobre el flux (capítol 4) i quins equips avançats del GRIT permeten identificar químicament substàncies desconegudes?",
      options: [
        'En l’absorció el líquid queda retingut a la superfície sense penetrar (carbó actiu) i en l’adsorció entra als porus interns del sòlid (sepiolita) | Termòmetre infraroig i detector multigas PID.',
        'Tots dos termes són sinònims tècnics referits a la neutralització àcid-base amb bicarbonat sòdic i escumògens fluorats de baixa expansió | Tires reactives de pH i tub colorimètric.',
        'L’absorció s’aplica únicament a gasos tòxics solubles en aigua i l’adsorció a vessaments d’hidrocarburs amb escuma física | Explosímetre catalític de %LII i càmera tèrmica.',
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
        'UNE-EN 465 | Temps real efectiu d’uns 45-50 minuts, ja que l’ERA es porta per fora del vestit i es pot canviar l’ampolla dins la Zona Temperada.',
        'UNE-EN 943-1 i EN 943-2 (ET) | Temps real efectiu d’uns 15-20 minuts, ja que cal reservar aire per passar pel passadís de descontaminació abans de treure’s el vestit.',
        'UNE-EN 14605 (Tipus 3) | Temps real efectiu de 35-40 minuts, perquè el vestit disposa d’una vàlvula externa que permet connectar aire fresc a la sortida.',
        'UNE-EN 13034 | Temps real efectiu d’uns 60 minuts, atès que el Tipus 1a funciona amb filtre combinat ABEK2P3 i no consumeix aire comprimit de l’ampolla.'
      ],
      correctIndex: 1,
      explanation: "Els vestits Tipus 1 hermètics a gasos es regeixen per EN 943-1 / EN 943-2 ET (1a = ERA dins del vestit). Tot i l'autonomia nominal de l'ampolla, el treball efectiu és d'uns 15-20 minuts perquè cal aire suficient per completar la descontaminació."
    },
    {
      id: 'q27-13',
      difficulty: 'Fàcil',
      question: "A l'ADR, com s'identifica visualment l'etiqueta de perill de la Classe 9 (matèries i objectes perillosos diversos)?",
      options: [
        "Fons taronja amb una bomba explotant a la meitat superior i el número 9.",
        "Fons blanc amb 7 franges verticals negres a la meitat superior i el número 9 subratllat a l'angle inferior.",
        "Meitat superior blanca amb una calavera i meitat inferior negra amb el número 9.",
        "Fons blau amb una flama blanca a la meitat superior i el número 9 subratllat."
      ],
      correctIndex: 1,
      explanation: "L'etiqueta de la Classe 9 (matèries i objectes perillosos diversos) presenta fons blanc amb 7 barres verticals negres a la meitat superior i el número 9 subratllat a la part inferior."
    },
    {
      id: 'q27-14',
      difficulty: 'Difícil',
      question: "En una intervenció amb mercaderies perilloses on el panell del Regne Unit (codi Hazchem / EAC) indica '2XE', quines actuacions principals prescriu als bombers?",
      options: [
        "Aplicar aigua a broll ple, diluir el vessament al clavegueram amb abundant cabal, protecció estructural bàsica amb ERA i sense necessitat de valorar l'evacuació.",
        "Utilitzar aigua polvoritzada/boira (prohibit aigua a broll), contenir el vessament (no diluir), protecció completa per a líquids amb ERA i valorar l'evacuació (E).",
        "Emprar exclusivament escuma química, permetre l'abocament controlat al medi, utilitzar només guants de protecció tèrmica i evacuar obligatòriament a 1 km.",
        "Utilitzar pols química seca o CO₂ (prohibit aplicar aigua en cap format), contenir el vessament i protecció hermètica a gasos Tipus 1a amb evacuació immediata."
      ],
      correctIndex: 1,
      explanation: "En el codi Hazchem 2XE: '2' = aigua en boira/polvoritzada (mai a broll); 'X' = protecció química completa per a líquids + ERA, sense reacció violenta però amb obligació de CONTENIR el vessament; 'E' = considerar l'evacuació."
    },
    {
      id: 'q27-15',
      difficulty: 'Fàcil',
      question: "Quin reglament internacional regula específicament el transport de mercaderies perilloses per ferrocarril?",
      options: [
        "ADR.",
        "IMDG.",
        "RID.",
        "ADN."
      ],
      correctIndex: 2,
      explanation: "El RID regula el transport internacional de mercaderies perilloses per ferrocarril (ADR = carretera; ADN = vies navegables interiors; IMDG = marítim; OACI/IATA = aeri)."
    },
    {
      id: 'q27-16',
      difficulty: 'Fàcil',
      question: "A quina classe de perill de l'ADR corresponen els peròxids orgànics?",
      options: [
        "Classe 4.2.",
        "Classe 5.1.",
        "Classe 5.2.",
        "Classe 6.2."
      ],
      correctIndex: 2,
      explanation: "Dins la Classe 5, la 5.1 correspon a les matèries comburents i la Classe 5.2 correspon als peròxids orgànics (molt sensibles a la calor, la fricció o les impureses, amb risc de descomposició exotèrmica accelerada)."
    },
    {
      id: 'q27-17',
      difficulty: 'Mitjà',
      question: "Segons el Reglament CLP (CE núm. 1272/2008) sobre classificació, etiquetatge i envasament de substàncies i mescles, quina de les dades següents NO és obligatòria a l'etiqueta del producte?",
      options: [
        "La data de fabricació del producte.",
        "Els pictogrames de perill i la paraula d'advertència ('Perill' o 'Atenció').",
        "Les indicacions de perill (frases H) i els consells de prudència (frases P).",
        "La identificació del producte i les dades de contacte del proveïdor."
      ],
      correctIndex: 0,
      explanation: "El Reglament CLP exigeix nom i dades del proveïdor, quantitat nominal (en públic general), identificadors del producte, pictogrames, paraula d'advertència, frases H i frases P; la data de fabricació NO és un element obligatori de l'etiqueta de perill CLP."
    },
    {
      id: 'q27-18',
      difficulty: 'Difícil',
      question: "En una fuita d'amoníac (NH₃) d'una cisterna industrial, un bomber afirma que l'ordre d'anàlisi del sinistre és Diana → Flux → Font i que l'ABD s'instal·la un cop surt el primer binomi dins la Zona Freda. Què és correcte segons MAN.RRTT.000?",
      options: [
        "L'afirmació del bomber és correcta pel que fa a l'anàlisi (Diana → Flux → Font), però l'ABD s'ha de muntar dins la Zona Temperada un cop es confirmi que el binomi ha quedat contaminat.",
        "És doble error: l'ordre d'anàlisi és Font → Flux → Diana (mentre que l'ordre d'intervenció és 1r Diana → 2n Flux → 3r Font), i l'ABD s'ha de muntar dins la Zona Calenta (al límit amb la Temperada) ABANS que entri el primer binomi.",
        "L'ordre d'anàlisi és efectivament Font → Flux → Diana, però la intervenció segueix exactament el mateix ordre i l'ABD es munta al final dins la Zona Freda al costat del CCA.",
        "L'ordre d'intervenció comença sempre taponant la Font per eliminar el risc en origen, i l'ABD s'instal·la dins la Zona Freda un cop s'ha estabilitzat la fuita de la cisterna."
      ],
      correctIndex: 1,
      explanation: "Doble trampa clàssica: Anàlisi = Font → Flux → Diana; Intervenció = 1r Diana → 2n Flux → 3r Font; i l'ABD es munta DINS la Zona Calenta (a la frontera) abans d'entrar el primer binomi."
    },
    {
      id: 'q27-19',
      difficulty: 'Mitjà',
      question: "Davant d'una font encapsulada de radiació Gamma que no s'ha trencat ni ha alliberat pols radioactiva, un treballador ha rebut irradiació externa. Quina afirmació és INCORRECTA?",
      options: [
        "Un vestit químic hermètic Tipus 1a per si sol no atura la radiació Gamma penetrant, que requereix blindatge de plom o formigó i aplicar Distància, Temps i Blindatge.",
        "La irradiació externa cessa en el moment en què la persona s'allunya de la font o s'interposa un blindatge adequat.",
        "Com que només ha estat irradiat externament sense contaminació superficial ni interna, el pacient no emet radiació ni contamina l'ambulància.",
        "Tot pacient irradiat externament per una font segellada emet radiació Gamma contínua i contamina qualsevol superfície que toqui encara que no hi hagi partícules adherides."
      ],
      correctIndex: 3,
      explanation: "És incorrecte: la irradiació externa sense transferència de material radioactiu no converteix el pacient en radioactiu ni en font de contaminació per als equips d'emergència."
    }
  ]
};
