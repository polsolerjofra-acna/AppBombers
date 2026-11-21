export const tema18Electricitat = {
  id: 'tema-11',
  number: 11,
  code: 'MAN.GRAL.005',
  title: 'Electricitat, Lleis de Càlcul, Circuits AC/DC i Riscos Elèctrics',
  category: 'Manual Operatiu SGO — Càlcul i Ciències Bàsiques',
  estimatedMinutes: 55,
  importance: {
    title: "Radar d'Examen — Tema 11 (MAN.GRAL.005 v.1): Electricitat i Riscos",
    frequency: 'Molt Alta (3-4 preguntes per examen entre problemes d’Ohm/Joule/Sèrie-Paral·lel i llindars de risc humà)',
    summary:
      "Aquest manual cobreix tots els càlculs elèctrics i la seguretat operativa davant del corrent. S'estructura amb 1 pàgina per teorema/càlcul (Magnituds i Energia Wh vs. Ah, Llei d'Ohm, Efecte Joule i Potència, Circuits en Sèrie vs. Paral·lel i Símil Hidràulic, Corrent Altern Trifàsic i Potències P/Q/S, i Electromagnetisme i Riscos Elèctrics 30 mA / Tensió de Pas) i la Pàgina 7 amb el Formulari Resum Final.",
    hotTopics: [
      'Cap. 2-3 (Càlcul): Sentit convencional (+ → -) vs. real dels electrons (- → +), 1 Coulomb = 6,242·10¹⁸ e⁻, i Energia (E = P·t en Wh o kWh) vs. Capacitat de bateria (Ah; ex. Hilti 22 V × 5,2 Ah ≈ 115 Wh).',
      'Cap. 4 (Càlcul): Llei d’Ohm (I = V/R), Efecte Joule (Q = I²·R·t → creix amb el quadrat d’I!) i Potència Elèctrica (P = V·I = I²·R = V²/R).',
      'Cap. 5-6 (Càlcul): Connexió en Sèrie (R_tot = R₁ + R₂; els EPI dielèctrics es posen en SÈRIE amb el bomber!) vs. Paral·lel (1/R_tot = 1/R₁ + 1/R₂) i Símil Hidràulic (Vàlvula oberta = Circuit tancat!).',
      'Cap. 7-8 (Càlcul): AC a 50 Hz (cicle 20 ms, canvia de sentit 100 cops/s), Monofàsic (230 V RMS / 325 V pic) vs. Trifàsic (400 V RMS / 566 V pic), Càrregues R-L-C i Símil del Got de Cervesa (Activa P [kW], Reactiva Q [kvar], Aparent S [kVA], FP = cos φ = P/S).',
      'Cap. 9 (Risc humà): Fibril·lació ventricular a 30 mA en AC, tensions segures (50 V AC / 120 V DC en sec; 25 V AC / 60 V DC en humit), Tensió de pas (passos petits amb peus junts) i perill de subtensió en motors.'
    ],
    traps: [
      'Parany del Símil Hidràulic: una vàlvula d’aigua OBERTA equival a un interruptor elèctric TANCAT (passa corrent), i una vàlvula TANCADA equival a un circuit OBERT (no passa corrent)!',
      'Confondre Ah (Amperes-hora = capacitat de càrrega Q) amb Wh (Watts-hora = energia E = V × Ah)!',
      'Pensar que una subtensió (caiguda de voltatge) és innòcua: en motors elèctrics, si baixa V, el motor augmenta la intensitat I per mantenir la potència (P = V·I) i es crema per efecte Joule (I²·R)!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 2-3 Magnituds i Wh',
      title: '1–3. Fonaments, Sentit del Corrent, Magnituds i Càlcul d’Energia (Wh vs. Ah)',
      subtitle: 'Sentit convencional vs. real, conductors i semiconductors, i càlcul de bateries d’eines i vehicles elèctrics.',
      blocks: [
        {
          type: 'text',
          heading: '2–3. Naturalesa de l’Electricitat i les 6 Magnituds Fonamentals',
          paragraphs: [
            "El corrent elèctric és el moviment ordenat d'electrons lliures a través d'un conductor.",
            "No confondre Sentit REAL vs. Sentit CONVENCIONAL! El SENTIT REAL dels electrons (càrregues negatives) va sempre del pol NEGATIU (-) cap al POSITIU (+). En canvi, per convenció històrica anterior al descobriment de l'electró, el SENTIT CONVENCIONAL del corrent als esquemes es dibuixa del pol POSITIU (+) cap al NEGATIU (-).",
            "Segons la seva estructura atòmica, els materials es divideixen en 3 grups:",
            "• Conductors: metalls amb 1–3 electrons de valència lliures (coure, plata, alumini, aigua amb sals). En els metalls, la resistència elèctrica AUGMENTA quan puja la temperatura.",
            "• Aïllants o Dielèctrics: electrons fortament lligats (vidre, porcellana, cautxú, aire sec, aigua pura destil·lada). • Semiconductors: 4 electrons de valència (Silici i Germani, base de l'electrònica i les plaques solars)."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 1: Càrrega (Q), Intensitat (I) i Energia Elèctrica (Wh/kWh) vs. Capacitat (Ah)',
          formula: 'I = Q / t  [A = C/s]   |   E = P · t = V · I · t  [Wh o kWh]   |   E (Wh) = V (V) × Capacitat (Ah)',
          variables: [
            { symbol: 'Q (Coulomb)', meaning: 'Càrrega elèctrica en Coulombs (C). 1 C = 6,242 · 10¹⁸ electrons. També es mesura en Ah (1 Ah = 3.600 C)' },
            { symbol: 'I (Ampere)', meaning: 'Intensitat de corrent: quantitat de càrrega que travessa la secció per segon (A = C/s)' },
            { symbol: 'V (Volt) i R (Ohm)', meaning: 'V = Tensió o diferència de potencial (V) · R = Resistència al pas del corrent (Ω)' },
            { symbol: 'E (Wh / kWh)', meaning: 'Energia consumida o emmagatzemada (1 Wh = 3.600 J; 1 kWh = 3,6·10⁶ J)' }
          ],
          trick:
            'Com convertir els Ah (Amperes-hora) d’una bateria d’eina en Wh (Watts-hora d’energia): multiplica simplement els Volts (V) pels Amperes-hora (Ah)!',
          example:
            'Problema resolt del manual (Bateria d’eina Hilti i Vehicles Elèctrics):\nUna bateria d’eina de rescat Hilti indica a la carcassa 22 V i 5,2 Ah. Quina energia total emmagatzema en Wh?\n• E = V × Capacitat = 22 V × 5,2 Ah = 114,4 Wh (≈ 115 Wh).\n• Referències del manual: Bateria d’un Híbrid Endollable (PHEV) = 10 a 20 kWh | Bateria d’un Elèctric Pur (BEV) = 40 a 90 kWh.'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Voltatge (V) vs. Intensitat (I) vs. Resistència (R) i Ah vs. Wh',
          metaphor:
            'Imagina una mànega de bombers o una canonada d’aigua per on circulen electrons com si fossin gotes:',
          explanation:
            "1) VOLTATGE (V, en Volts): és la PRESSIÓ de la bomba que empeny els electrons perquè surtin a córrer. Sense pressió (0 V), els electrons no es mouen!\n\n2) INTENSITAT (I, en Amperes): és el CABAL, quants electrons passen per un punt cada segon (l'amplada del riu elèctric: és la intensitat la que mata en una electrocució!).\n\n3) RESISTÈNCIA (R, en Ohms Ω): són les pedres o un estrenyiment dins la mànega que frenen el pas dels electrons i transformen el frec en calor.\n\n4) Ah vs. Wh en bateries: els Ah (capacitat) són només la mida del dipòsit sense saber a quina pressió surt; els Wh (energia real) són els litres multiplicats per la pressió (E = V × Ah)!\n\n5) SENTIT REAL vs. CONVENCIONAL: en realitat els electrons negatius corren del pol - al +, però històricament els esquemes es dibuixen al revés (del + al -).",
          takeaway:
            'V = pressió que empeny. I = cabal que passa (perill mortal). R = fre al pas del corrent. Energia (Wh) = Voltatge (V) × Capacitat (Ah).'
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · Sentit dels electrons a la bateria',
          acronym: 'Teoria = molt guai (surt del +)  |  Realitat = no tot és tan bo (surt del -)',
          trick:
            '• En TEORIA (sentit convencional dels esquemes) la vida és molt guai → el corrent surt del pol POSITIU (+).\n• A la REALITAT (sentit real dels electrons) no tot és tan bo → els electrons surten del pol NEGATIU (-).',
          example:
            'Si pregunten pel sentit REAL dels electrons en una bateria: sempre del NEGATIU (-) al POSITIU (+).'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 4 Ohm i Joule',
      title: '4. Lleis de Càlcul Elèctric: Llei d’Ohm, Efecte Joule i Potència Elèctrica',
      subtitle: 'Relació V-I-R, escalfament de cables amb el quadrat de la intensitat (I²·R·t) i transport en alta tensió.',
      blocks: [
        {
          type: 'text',
          heading: '4.1–4.3. Llei d’Ohm, Efecte Joule i per què es transporta l’energia a 400 kV',
          paragraphs: [
            "La Llei d'Ohm (Georg Simon Ohm) estableix que la intensitat de corrent (I) que circula per un circuit és directament proporcional a la tensió aplicada (V) i inversament proporcional a la resistència del conductor (R).",
            "L'Efecte Joule (Q = I² · R · t) explica per què s'escalfen els cables i es produeixen incendis elèctrics per sobrecàrrega: el pas dels electrons xocant contra els àtoms del conductor dissipa calor proporcionalment a la resistència (R), al temps (t) i al QUADRAT de la intensitat (I²).",
            "Per això les línies d'alta tensió transporten l'electricitat a 220 kV o 400 kV: en elevar moltíssim el voltatge V (per a una mateixa potència P = V · I), es redueix dràsticament la intensitat I i es minimitzen les pèrdues de calor per efecte Joule (P_perduda = I² · R)!"
          ]
        },
        {
          type: 'diagram',
          title: 'Triangle de la Llei d’Ohm, Símil del Got de Cervesa (AC) i Tensió de Pas',
          diagramType: 'electricity_ohm_ac',
          caption:
            '1) Tapa la lletra que busques al triangle: V = I·R | I = V/R | R = V/I. 2) En corrent altern: P = cervesa útil (kW), Q = escuma reactiva (kvar) i S = tot el got (kVA). 3) Davant d’un cable caigut a terra, allunya’t amb passos petits i els peus junts.'
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 2: Llei d’Ohm, Llei de Joule i les 3 Fórmules de la Potència Elèctrica',
          formula: 'V = I · R   |   Q_Joule = I² · R · t  [J]   |   P = V · I = I² · R = V² / R  [W]',
          variables: [
            { symbol: 'I = V / R', meaning: 'Si la resistència baixa a gairebé zero (curtcircuit: R → 0), la intensitat I tendeix a infinit i crema la instal·lació!' },
            { symbol: 'Q = I² · R · t', meaning: 'Calor dissipada en Joules (J). Per passar a calories: multiplicar per 0,24 (1 J = 0,24 cal)' },
            { symbol: 'P = I² · R', meaning: 'Si la intensitat I es triplica (×3), la potència calorífica dissipada al cable es multiplica per 3² = 9!' }
          ],
          trick:
            'Regla mnemotècnica del Triangle d’Ohm ("Victoria, Reina d’Inglaterra"): V a dalt de la piràmide, i a sota R × I!',
          example:
            'Problema resolt: Un radiador elèctric té una resistència interna R = 23 Ω i es connecta a un endoll domèstic de V = 230 V durant 2 hores.\n• Intensitat: I = V / R = 230 V / 23 Ω = 10 A.\n• Potència: P = V · I = 230 V × 10 A = 2.300 W (2,3 kW).\n• Energia / Calor generada en 2 h: E = 2,3 kW × 2 h = 4,6 kWh (en Joules: Q = 10² × 23 × 7.200 s = 16.560.000 J).'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Llei d’Ohm, Curtcircuits i per què les Torres van a 400.000 Volts',
          metaphor:
            'Pensa en un passadís estret on una multitud empeny una porta quan algú treu de cop totes les barreres:',
          explanation:
            "1) CURTCIRCUIT (R → 0): si dos cables pelats es toquen sense passar per cap estufa o bombeta, desapareix el fre (R baixa gairebé a zero). A la Llei d'Ohm (I = V / R), si divideixes 230 V entre gairebé zero, la intensitat I es dispara a milers d'Amperes en un segon!\n\n2) EFECTE JOULE (Q = I² · R · t): els electrons xoquen i escalfen el coure, però amb el QUADRAT de la intensitat! Si passa el triple de corrent (×3), la calor al cable no es triplica, es multiplica per 9 (3² = 9) i fon el plàstic fins a fer foc!\n\n3) ALTA TENSIÓ (400 kV): per portar energia lluny sense malgastar-la escalfant cables, les línies pugen molt la pressió (400.000 V); com que P = V · I, pujant molt V pots baixar moltíssim I i reduir gairebé a zero les pèrdues de calor I² · R!",
          takeaway:
            'Curtcircuit = R cau a 0 ⇒ I es dispara ⇒ calor I²·R crema la instal·lació. Alta tensió (400 kV) = pujar V per baixar I i no perdre calor.'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 5-6 Sèrie/Paral·lel',
      title: '5–6. Càlcul de Circuits en Sèrie vs. Paral·lel i Símil Hidràulic',
      subtitle: 'Per què els EPI dielèctrics actuen en sèrie amb el bomber i la trampa de la vàlvula al símil hidràulic.',
      blocks: [
        {
          type: 'text',
          heading: '5.2. Connexió en Sèrie vs. en Paral·lel i Aplicació als EPI Dielèctrics',
          paragraphs: [
            "En un circuit en SÈRIE els receptors es connecten un darrere l'altre formant un únic camí: per tots hi passa exactament la MATEIXA intensitat (I), la tensió total es reparteix (V_tot = V₁ + V₂) i les resistències se SUMEN (R_total = R₁ + R₂ + R₃). Si un element s'obre o es fon, s'interromp tot el circuit.",
            "Aplicació vital per al bomber (Cap. 5.2): quan un bomber utilitza EPIs i eines dielèctriques (guants aïllants + botes dielèctriques + banqueta o estora aïllant + perxa), col·loca totes aquestes enormes resistències en SÈRIE amb la resistència del seu propi cos!",
            "Com que en sèrie les resistències se sumen (R_total = R_guants + R_cos + R_botes + R_banqueta), la resistència total es dispara a milions d'Ohms i, per la Llei d'Ohm (I = V / R_total), la intensitat que travessaria el cos cau a gairebé zero.",
            "En un circuit en PARAL·LEL tots els receptors es connecten als mateixos dos conductors (com tots els endolls i llums d'un habitatge a 230 V): tots reben la MATEIXA tensió (V), la intensitat es divideix per cada branca (I_tot = I₁ + I₂) i la resistència total equivalent és MÉS PETITA que la menor de les resistències!"
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 3: Resistència Equivalent en Sèrie i en Paral·lel',
          formula: 'SÈRIE: R_tot = R₁ + R₂ + R₃   |   PARAL·LEL: 1 / R_tot = (1/R₁) + (1/R₂)   ⇒   R_tot = (R₁·R₂) / (R₁+R₂)',
          variables: [
            { symbol: 'Sèrie', meaning: 'I_tot = I₁ = I₂ | V_tot = V₁ + V₂ | R_tot augmenta (suma directa)' },
            { symbol: 'Paral·lel', meaning: 'V_tot = V₁ = V₂ | I_tot = I₁ + I₂ | R_tot disminueix (quantes més coses endolles en paral·lel a un lladre, més baixa R_tot i més puja I_tot fins a cremar el cable!)' }
          ],
          trick:
            'Truc ultraràpid per a N resistències IGUALS en paral·lel: Si tens dues resistències iguals de 10 Ω en paral·lel, la resistència total és la meitat (10 / 2 = 5 Ω). Si en tens tres de 30 Ω en paral·lel, és la tercera part (30 / 3 = 10 Ω)!',
          example:
            'Problema resolt: Connectem dues resistències de R₁ = 6 Ω i R₂ = 3 Ω a una bateria de 18 V. Calcula R_tot i I_tot en Sèrie i en Paral·lel:\n• En SÈRIE: R_tot = 6 + 3 = 9 Ω ⇒ I_tot = 18 V / 9 Ω = 2 A.\n• En PARAL·LEL: R_tot = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω ⇒ I_tot = 18 V / 2 Ω = 9 A.'
        },
        {
          type: 'table',
          title: '6. Taula Oficial d’Equivalències del Símil Hidràulic vs. Circuit Elèctric',
          subtitle: 'Comparativa del Capítol 6 del manual MAN.GRAL.005 (Atenció a la fila de la vàlvula!)',
          headers: ['Circuit Hidràulic (Aigua)', 'Circuit Elèctric (Electrons)', 'Explicació Física i Parany d’Examen'],
          rows: [
            ['Bomba d’aigua / Diferència d’alçada', 'Generador / Pila / Diferència de potencial', 'Impulsa el moviment gràcies a la diferència d’energia'],
            ['Pressió (bar / Pa)', 'Tensió o Voltatge (V)', 'Força que empeny el fluid o els electrons'],
            ['Cabal volumètric (Q en L/s)', 'Intensitat de corrent (I en Amperes)', 'Quantitat d’aigua o d’electrons que passen per segon'],
            ['Estrenyiment / Rugositat mànega', 'Resistència elèctrica (R en Ohms Ω)', 'Oposició al pas del flux'],
            ['Pèrdua de càrrega (ΔPf)', 'Caiguda de tensió (ΔV = I · R)', 'Pèrdua d’energia al llarg de la línia per fregament / Joule'],
            ['Vàlvula OBERTA / TANCADA', 'Interruptor TANCAT / OBERT', 'PARANY: Vàlvula OBERTA = Circuit TANCAT (passa corrent)!']
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Sèrie vs. Paral·lel, el Lladre Crema-Cables i la Trampa de la Vàlvula',
          metaphor:
            'Imagina una carretera d’un sol carril amb 3 peatges seguits (Sèrie) vs. una autopista amb 3 carrils paral·lels oberts alhora (Paral·lel):',
          explanation:
            "1) SÈRIE (peatges un darrere l'altre): tots els electrons passen obligatòriament per totes les barreres (mateixa I), i les resistències se SUMEN (R_tot = R₁ + R₂). Quan et poses guants + botes + banqueta dielèctrics, els poses en SÈRIE amb el teu cos: sumes milions d'Ohms al camí i el corrent no pot travessar-te!\n\n2) PARAL·LEL (endollar coses a un lladre): cada aparell que endolles a 230 V obre un carril nou en paral·lel. Com que hi ha més camins per passar, la resistència total BAIXA i el cabal total (I_tot = I₁ + I₂ + I₃) PUJA per l'únic cable de la paret... fins que el cable es sobreescalfa i crema!\n\n3) TRAMPA HIDRÀULICA: perquè passi l'aigua has d'OBRIR la vàlvula; però perquè passin els electrons has de TANCAR el pont llevadís (circuit TANCAT = passa corrent; circuit OBERT = no passa!).",
          takeaway:
            'Sèrie = 1 sol camí, R se suma (EPIs dielèctrics). Paral·lel = múltiples camins, R baixa i puja I_tot (endolls). Vàlvula OBERTA = Circuit TANCAT!'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 7 AC/DC i Potències',
      title: '7.1–7.4. Corrent Continu vs. Altern (50 Hz), Trifàsica i Càlcul de les 3 Potències',
      subtitle: 'Valors eficaços RMS (230 V / 400 V) vs. de pic (325 V / 566 V), càrregues R-L-C i el símil del got de cervesa.',
      blocks: [
        {
          type: 'text',
          heading: '7.1–7.4. DC vs. AC (50 Hz), Monofàsic (230 V) vs. Trifàsic (400 V) i Càrregues R-L-C',
          paragraphs: [
            "• Corrent Continu (DC): els electrons circulen sempre en el mateix sentit i amb tensió constant (bateries, plaques solars, TRAM/Metro/FGC/ADIF convencional).\n• Corrent Altern (AC): la tensió oscil·la seguint una ona sinusoïdal (xarxa elèctrica i AVE 25 kV). A Europa la freqüència és de 50 Hz: fa 50 cicles complets cada segon (cada cicle dura 1/50 = 20 ms) i el corrent canvia de sentit 100 vegades per segon (2 cops per cicle)!",
            "La xarxa de Baixa Tensió porta 4 conductors (3 Fases L₁, L₂, L₃ o R, S, T desfasades 120° + 1 Neutre N):\n• Subministrament MONOFÀSIC (1 Fase + Neutre): 230 V eficaços RMS (valor de pic = 230 × √2 ≈ 325 V).\n• Subministrament TRIFÀSIC (3 Fases + Neutre): tensió de línia entre dues fases = 400 V eficaços (230 × √3 ≈ 400 V; valor de pic ≈ 566 V).",
            "En AC existeixen 3 tipus de receptors:\n• Càrregues RESISTIVES pures (estufes, incandescents): V i I van en fase (sense desfasament; símil = barra rígida).\n• Càrregues INDUCTIVES (motors, bobines, transformadors): creen camps magnètics i la intensitat I va ENDARRERIDA respecte a V (símil = molla).\n• Càrregues CAPACITIVES (condensadors): la intensitat I va AVANÇADA respecte a V (s'usen per compensar l'efecte dels motors)."
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Corrent Continu (DC) vs. Altern (AC 50 Hz) i Monofàsic vs. Trifàsic',
          metaphor:
            'El Corrent Continu (DC) és un riu que baixa sempre recte en un sol sentit; el Corrent Altern (AC) és una serra manual que va endavant i enrere 50 cops cada segon!',
          explanation:
            "1) DC vs. AC (50 Hz): en DC (piles, bateries de cotxes elèctrics, plaques solars) els electrons van sempre en línia recta del - al +. En AC (els endolls de casa a 50 Hz), els electrons vibren amunt i avall 50 vegades cada segon (cada cicle va i torna, de manera que canvia de sentit 100 cops per segon!). Tot i anar endavant i enrere, igual que una serra talla la fusta anant i tornant, el corrent altern entrega energia constantment!\n\n2) MONOFÀSIC (230 V) vs. TRIFÀSIC (400 V): el monofàsic és pedalar amb 1 sola cama (1 cable de Fase amb força + 1 Neutre de tornada a 230 V). El trifàsic és un motor amb 3 pistons sincronitzats a 120° que empenyen sense parar (3 Fases L₁, L₂, L₃ + 1 Neutre). Entre qualsevol Fase i el Neutre tens 230 V; però si toques dues Fases diferents alhora (que estan desfasades!), la diferència de pressió entre elles puja a 400 V (230 × √3)!",
          takeaway:
            'DC = sempre un sentit (bateries, plaques). AC 50 Hz = canvia de sentit 100 cops/s. Fase + Neutre = 230 V | Fase + Fase = 400 V (valor pic = RMS × √2 ≈ 325 V i 566 V).'
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul 4: Les 3 Potències en AC (Activa P, Reactiva Q, Aparent S) i Factor de Potència',
          formula: 'S² = P² + Q²   |   FP = cos(φ) = P / S   |   P = S · cos(φ)  [kW]',
          variables: [
            { symbol: 'P (Activa)', meaning: 'Potència útil que es transforma en treball mecànic o calor. Es mesura en Watts (W o kW)' },
            { symbol: 'Q (Reactiva)', meaning: 'Potència consumida per crear camps magnètics en motors/bobines (no fa treball útil). Unitat: var o kvar' },
            { symbol: 'S (Aparent)', meaning: 'Potència total que ha de transportar el cable i donar el grup electrogen (S = V·I). Unitat: VA o kVA' },
            { symbol: 'FP = cos(φ)', meaning: 'Factor de potència (entre 0 i 1). Ideal = 1 (tot és potència activa P, Q = 0)' }
          ],
          trick:
            'Recorda sempre les unitats perquè les pregunten als tests:\n• Activa (P, la cervesa líquida) = W o kW.\n• Reactiva (Q, l’escuma) = var o kvar (volt-ampere reactiu).\n• Aparent (S, tot el got; és la que marca la placa dels grups electrògens de Bombers!) = VA o kVA.',
          example:
            'Problema resolt: Un grup electrogen portàtil d’un camió de bombers té una potència aparent nominal de S = 5 kVA (5.000 VA) i alimenta una bomba elèctrica amb factor de potència cos(φ) = 0,8. Quina potència activa útil màxima (P) en kW pot subministrar?\n• P = S · cos(φ) = 5 kVA × 0,8 = 4 kW (4.000 W).'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit: El Símil del Got de Cervesa per no oblidar mai P (kW), Q (kvar) i S (kVA)',
          metaphor:
            'Demanar electricitat per a un motor en corrent altern és com demanar una gerra de cervesa al bar:',
          explanation:
            "• LÍQUID DE LA CERVESA = Potència ACTIVA (P, en kW): és la que realment et treu la set i fa treball útil (moure la bomba, fer llum o calor).\n• ESCUMA = Potència REACTIVA (Q, en kvar): no et treu la set (no fa treball mecànic), però és necessària perquè els motors i transformadors creïn el seu camp magnètic.\n• TOT EL GOT SENCER (Líquid + Escuma) = Potència APARENT (S, en kVA): és la mida total del got que el cambrer (els cables i el transformador) ha de carregar. Si hi ha massa escuma (molts motors inductius), les fàbriques posen BATERIES DE CONDENSADORS per baixar l'escuma i aprofitar tot el got (acostar el Factor de Potència cos φ a 1)!",
          takeaway: 'Cervesa útil = Activa (kW) | Escuma magnètica = Reactiva (kvar) | Got sencer = Aparent (kVA).'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Cap. 7.5-8 Electromagnetisme',
      title: '7.5–8. Conversions Elèctriques i Electromagnetisme (Motors i Transformadors)',
      subtitle: 'Rectificadors, inversors, inducció electromagnètica de Faraday i per què un transformador només funciona en AC.',
      blocks: [
        {
          type: 'text',
          heading: '7.5. Els 4 Convertidors d’Energia i 8. Principis d’Electromagnetisme',
          paragraphs: [
            "Per adaptar el corrent entre xarxa, bateries i motors s'utilitzen 4 convertidors:",
            "• 1) RECTIFICADOR (AC → DC): mitjançant díodes (carregador de mòbil o portàtils d'emissora). • 2) INVERSOR o ONDULADOR (DC → AC): plaques solars fotovoltaiques o vehicle elèctric.",
            "• 3) Convertidor DC/DC: eleva (step-up) o redueix (step-down) la tensió en corrent continu. • 4) Convertidor AC/AC: variadors de freqüència per regular les rpm dels motors.",
            "L'Electromagnetisme es fonamenta en dues lleis simètriques:\n• 1) Llei d'Oersted: tot corrent elèctric que circula per un conductor crea un CAMP MAGNÈTIC al seu voltant (principi de les pinces amperimètriques i dels electroimants dels magnetotèrmics).\n• 2) Llei de Faraday: tot camp magnètic VARIABLE que travessa una bobina indueix en ella tensió i corrent elèctric (principi dels generadors/alternadors i transformadors).",
            "Pregunta clau sobre TRANSFORMADORS: un transformador consta de dues bobines (primari i secundari) sobre un nucli de ferro sense contacte elèctric directe. Només funciona en CORRENT ALTERN (AC) perquè necessita un camp magnètic variable; en DC constant no indueix res i crema la bobina!"
          ]
        },
        {
          type: 'table',
          title: 'Resum de Màquines i Convertidors Electromagnètics (MAN.GRAL.005 Cap. 7.5 i 8)',
          subtitle: 'Transformació d’energia i principi físic',
          headers: ['Dispositiu', 'Transformació que Realitza', 'Principi / Component Clau'],
          rows: [
            ['Rectificador', 'Corrent Altern (AC) → Corrent Continu (DC)', 'Díodes (deixen passar el corrent en 1 sol sentit)'],
            ['Inversor (Ondulador)', 'Corrent Continu (DC) → Corrent Altern (AC)', 'Plaques fotovoltaiques (DC) cap a l’habitatge (230 V AC)'],
            ['Motor Elèctric', 'Energia Elèctrica → Energia Mecànica (gir)', 'Força magnètica sobre bobines (Estator fix + Rotor mòbil)'],
            ['Generador / Alternador', 'Energia Mecànica → Energia Elèctrica', 'Inducció magnètica (grup electrogen i alternador del camió)'],
            ['Transformador', 'Modifica el Voltatge (AT ↔ MT ↔ BT) mantenint la freqüència', 'Inducció mútua entre bobines: NOMÉS funciona en AC!']
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Per què un Transformador NOMÉS funciona en Altern (i Rectificador vs. Inversor)',
          metaphor:
            'Pensa en dos imants un al costat de l’altre sense tocar-se: si deixes un imant quiet, l’altre no es mou; només si el mous sense parar, l’altre balla!',
          explanation:
            "1) EL SECRET DEL TRANSFORMADOR: dins d'un transformador les dues bobines de coure NO es toquen mai! L'energia salta de l'una a l'altra a través d'un camp magnètic que ha de CANVIAR sense parar (inducció de Faraday). Com que el Corrent Altern (AC) puja i baixa 100 cops cada segon, fa ballar el camp magnètic i indueix electricitat a l'altra bobina. Si hi connectessis Corrent Continu (DC), el camp magnètic quedaria congelat i quiet: no passaria res al secundari i la bobina es cremaria!\n\n2) RECTIFICADOR vs. INVERSOR: un RECTIFICADOR (AC → DC) 'rectifica' una ona sinusoïdal corbada per deixar-la recta i plana (carregador de mòbil/portàtils); un INVERSOR (DC → AC) fa l'inrevés, agafa energia plana de bateries o plaques solars i la converteix en ona alterna de 230 V!",
          takeaway:
            'Transformador = NOMÉS AC (necessita camp magnètic variable). Rectificador = posa recte l’altern (AC → DC). Inversor = fa l’inrevés (DC → AC).'
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · Càrregues R-L-C i Convertidors AC/DC',
          acronym: 'CIVIL (en C, I va davant de V; en L, V va davant de I)  |  REctificador → DC',
          trick:
            "Per recordar els desfasaments en AC sense embolicar-te: la paraula 'CIVIL' t'ho diu tot! A la primera part (C-I-V), en un Condensador (C), la Intensitat (I) va AVANÇADA respecte a V. A la segona part (V-I-L), en una bobina Inductiva (L, motors), V va davant i la Intensitat (I) va ENDARRERIDA! I pels convertidors: RE-ctificador = deixa el corrent RE-cte (AC → DC); IN-versor = ho fa a la IN-versa (DC → AC).",
          example:
            'Les plaques solars produeixen DC → passen per un INVERSOR per alimentar els endolls de casa en AC (230 V, 50 Hz).'
        }
      ]
    },
    {
      pageNumber: 6,
      shortLabel: 'Pàg. 6 · Cap. 9 Riscos Elèctrics',
      title: '9. Riscos Elèctrics sobre el Cos Humà: Fibril·lació (30 mA) i Tensió de Pas',
      subtitle: 'Llindars de corrent, tensions de seguretat (50/25 V AC i 120/60 V DC), tensió de contacte/pas i subtensió.',
      blocks: [
        {
          type: 'text',
          heading: '9.1–9.2. Efectes Fisiològics del Corrent, Tensions Segures i Tensió de Pas',
          paragraphs: [
            "La gravetat d'una electrocució depèn principalment de la INTENSITAT (I, en mA) que travessa el cos i del temps d'exposició. En Corrent Altern (AC a 50 Hz): a ~0,5 mA percepció, a ~10 mA tetanització muscular (la mà queda enganxada) i a 30 mA (0,03 A) el llindar mortal de FIBRIL·LACIÓ VENTRICULAR (valor dels diferencials domèstics!).",
            "En Corrent Continu (DC) és més fàcil deixar anar el conductor i no es produeix fibril·lació ventricular a baixos mA, però sí electròlisi de la sang i cremades internes profundes.",
            "La resistència del cos humà baixa dràsticament si la pell està mullada o suada. Per això el Reglament Electrotècnic estableix les TENSIONS DE SEGURETAT màximes: en ambient SEC són de 50 V en AC i 120 V en DC; en ambient HUMIT o mullat es redueixen a la meitat exacta: 25 V en AC i 60 V en DC.",
            "Tensió de Pas (cable a terra): quan un cable d'alta o mitja tensió cau a terra, es crea un embut de potencials concèntrics al voltant del punt de contacte. Si camines amb gambades normals, la diferència de voltatge entre tots dos peus fa circular corrent per les cames.",
            "Maniobra obligatòria d'autoprotecció: allunyar-se fent PASSOS MOLT PETITS arrossegant els peus ben junts i tocant-se entre si (o saltant amb tots dos peus junts sense caure mai a terra!)."
          ]
        },
        {
          type: 'table',
          title: 'Llindars Oficials de Risc Elèctric i Tensions de Seguretat (MAN.GRAL.005 Cap. 9)',
          subtitle: 'Xifres d’examen sobre fibril·lació, tensions límit i riscos d’incendi',
          headers: ['Paràmetre / Fenomen', 'Valor Oficial en AC (50 Hz)', 'Valor Oficial en DC', 'Mesura Operativa / Conseqüència'],
          rows: [
            ['Llindar de Fibril·lació Ventricular', '30 mA (0,03 A)', 'Molt superior (predomina cremada i electròlisi)', 'Protecció amb Diferencial (ID) de 30 mA (10 mA en zones humites)'],
            ['Tensió de Seguretat en Ambient SEC', '50 V AC', '120 V DC', 'Per sota d’aquesta tensió el risc d’electrocució és mínim'],
            ['Tensió de Seguretat en Ambient HUMIT', '25 V AC (la meitat)', '60 V DC (la meitat)', 'Importantíssim en intervencions de bombers amb aigua!'],
            ['Tensió de Pas (Cable a terra)', 'Gradient de tensió al terreny entre els 2 peus', 'Gradient al terreny', 'Allunyar-se amb passos molt petits i els peus junts tocant-se'],
            ['Subtensió (Caiguda de voltatge)', 'Baixada de V en motors AC', 'Baixada de V', 'El motor demana més intensitat I (P=V·I) i es crema per efecte Joule!']
          ]
        },
        {
          type: 'mnemonic',
          title: 'Truc Mnemotècnic per a les Tensions Segures: "50 / 120 en Sec, i la Meitat (25 / 60) en Mullat"',
          trick:
            'Pensa que el Corrent Altern (AC) és més traïdor per al cor (fibril·lació a 30 mA) que el Continu (DC). Per això la tensió segura en AC és més baixa:\n• En SEC: 50 V (AC) i 120 V (DC).\n• En MULLAT (divideix per 2!): 25 V (AC) i 60 V (DC).',
          example:
            'Per què una SUBTENSIÓ pot provocar un incendi? Perquè un motor que necessita donar una potència fixa P = V · I, si veu que la tensió V de la xarxa baixa, compensa demanant molta més intensitat I. Com que la calor de Joule va amb I² · R, el bobinat del motor es sobreescalfa i crema!'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Diferencial (30 mA) vs. Magnetotèrmic, Tensió de Pas i Subtensió',
          metaphor:
            'Al quadre elèctric de casa tens dos vigilants amb feines totalment diferents: un salva PERSONES (Diferencial) i l’altre salva CABLES (Magnetotèrmic):',
          explanation:
            "1) INTERRUPTOR DIFERENCIAL (ID de 30 mA — Salva PERSONES): és un comptador que vigila que tots els electrons que entren per la Fase tornin pel Neutre. Si entren 10,00 A i només en tornen 9,97 A (falten 30 mA = 0,03 A, just el llindar de fibril·lació mortal del cor humà!), vol dir que s'escapen cap a terra electrocutant algú i talla la llum a l'instant!\n\n2) INTERRUPTOR MAGNETOTÈRMIC (Salva CABLES): té dues alarmes internes: la TÈRMICA (una làmina bimetàl·lica que s'escalfa i es doblega a poc a poc si endolles massa aparells = sobrecàrrega) i la MAGNÈTICA (un electroimant que dispara en mil·lisegons si passa un pic brutal de cop = curtcircuit).\n\n3) TENSIÓ DE PAS (peus junts!): un cable d'alta tensió a terra crea anells de voltatge al sòl com les onades d'una pedra en un llac. Si fas una passa llarga, un peu trepitja 5.000 V i l'altre 1.000 V i el corrent et puja per una cama i baixa per l'altra! Si avances arrossegant els PEUS BEN JUNTS amb passets minúsculs, tots dos peus trepitgen el mateix voltatge i el corrent no té motiu per pujar!",
          takeaway:
            'Diferencial (30 mA) = fuita a terra (protegeix vides contra fibril·lació). Magnetotèrmic = sobrecàrrega (tèrmic) i curtcircuit (magnètic, protegeix cables). Cable a terra = passos minúsculs amb peus junts!'
        }
      ]
    },
    {
      pageNumber: 7,
      isFormulaSheet: true,
      shortLabel: 'Pàg. 7 · Formulari Final',
      title: 'Formulari Resum Final — Totes les Fórmules i Llindars d’Electricitat (Tema 11)',
      subtitle: 'Taula mestra d’equacions elèctriques i valors de seguretat del manual MAN.GRAL.005.',
      blocks: [
        {
          type: 'table',
          title: '1. Formulari Complet de Càlcul Elèctric (MAN.GRAL.005)',
          subtitle: 'Equacions fonamentals, unitats SI i regles ràpides',
          headers: ['Llei / Concepte', 'Fórmula Matemàtica', 'Unitats SI', 'Regla Ràpida d’Examen'],
          rows: [
            ['Intensitat i Càrrega', 'I = Q / t   ⇒   Q = I · t', 'I en A · Q en C (o Ah) · t en s (o h)', '1 C = 6,242·10¹⁸ e⁻ | 1 Ah = 3.600 C'],
            ['Llei d’Ohm', 'V = I · R  |  I = V / R  |  R = V / I', 'V en Volts (V) · I en Amperes (A) · R en Ohms (Ω)', 'Curtcircuit: R → 0 ⇒ I es dispara al màxim!'],
            ['Efecte Joule (Calor)', 'Q = I² · R · t', 'Q en Joules (J) (×0,24 = calories)', 'Creix amb el QUADRAT de la intensitat (I²)'],
            ['Potència Elèctrica', 'P = V · I = I² · R = V² / R', 'P en Watts (W) · 1 kW = 1.000 W', 'Transport AT (400 kV): ↑↑ V per ↓↓ I i reduir I²R'],
            ['Energia i Bateries', 'E = P · t = V · I · t', 'E en Wh o kWh (1 Wh = 3.600 J)', 'E (Wh) = Voltatge (V) × Capacitat (Ah)'],
            ['Circuit en SÈRIE', 'R_tot = R₁ + R₂ + R₃', 'Mateixa I · V_tot = V₁ + V₂ + V₃', 'Els EPI dielèctrics es posen en SÈRIE amb el cos!'],
            ['Circuit en PARAL·LEL', '1/R_tot = 1/R₁ + 1/R₂', 'Mateixa V · I_tot = I₁ + I₂', 'R_tot = (R₁·R₂)/(R₁+R₂) (sempre menor que la més petita)'],
            ['Potències en AC (Got)', 'S² = P² + Q²  |  FP = cos(φ) = P / S', 'P en kW · Q en kvar · S en kVA', 'P = S · cos(φ) | Trifàsica: P_tot = 3 · P_fase']
          ]
        },
        {
          type: 'table',
          title: '2. Quadre de Xifres Oficials i Llindars de Seguretat Elèctrica',
          subtitle: 'Valors que cal saber de memòria',
          headers: ['Concepte', 'Xifra Oficial Exacta', 'Detall Clau'],
          rows: [
            ['Freqüència AC Europa', '50 Hz (cicle de 20 ms)', 'El corrent canvia de sentit 100 vegades per segon'],
            ['Monofàsic vs. Trifàsic BT', '230 V RMS (325 V pic) | 400 V RMS (566 V pic)', 'Monofàsic: Fase + Neutre | Trifàsic: 3 Fases (120°) + Neutre'],
            ['Bateries (Hilti / PHEV / BEV)', 'Hilti 22V×5,2Ah ≈ 115 Wh | PHEV 10–20 kWh | BEV 40–90 kWh', 'Els vehicles elèctrics treballen amb bateries DC d’alta tensió'],
            ['Fibril·lació i Tensions Segures', '30 mA (AC) | Sec: 50V AC / 120V DC | Humit: 25V AC / 60V DC', 'En ambient humit o amb aigua les tensions segures cauen a la meitat']
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't11-q1',
      difficulty: 'Fàcil',
      question: 'Segons el manual MAN.GRAL.005, quina energia aproximada en Watts-hora (Wh) emmagatzema una bateria d’eina de rescat Hilti de 22 V i 5,2 Ah?',
      options: [
        '27,2 Wh.',
        '114,4 Wh (≈ 115 Wh).',
        '4,23 Wh.',
        '1.144 Wh.'
      ],
      correctIndex: 1,
      explanation: 'L’energia en Wh s’obté multiplicant la tensió (V) per la capacitat en Amperes-hora (Ah): E = 22 V × 5,2 Ah = 114,4 Wh ≈ 115 Wh.'
    },
    {
      id: 't11-q2',
      difficulty: 'Mitjà',
      question: 'Quines són les tensions màximes de seguretat per al cos humà en Corrent Altern (AC) i en Corrent Continu (DC) en ambient SEC i en ambient HUMIT?',
      options: [
        'Sec: 230 V AC i 400 V DC | Humit: 115 V AC i 200 V DC.',
        'Sec: 50 V AC i 120 V DC | Humit: 25 V AC i 60 V DC.',
        'Sec: 120 V AC i 50 V DC | Humit: 60 V AC i 25 V DC.',
        'Sec: 24 V AC i 24 V DC | Humit: 12 V AC i 12 V DC.'
      ],
      correctIndex: 1,
      explanation: 'Capítol 9 del manual: en ambient sec són 50 V AC i 120 V DC; en ambient humit o mullat es redueixen a la meitat (25 V AC i 60 V DC).'
    },
    {
      id: 't11-q3',
      difficulty: 'Mitjà',
      question: 'Com es col·loquen elèctricament els EPIs dielèctrics (guants, botes, banqueta aïllant) respecte al cos del bomber i quin efecte tenen sobre la resistència total?',
      options: [
        'Es col·loquen en PARAL·LEL amb el cos del bomber perquè les seves resistències es divideixin i el corrent es derivi directament cap a terra.',
        'Es col·loquen en SÈRIE amb el cos del bomber perquè les seves resistències se sumin (R_total = R₁ + R₂ + R₃) i la intensitat caigui a gairebé zero.',
        'Actuen com un condensador capacitiu en derivació que emmagatzema la càrrega electrostàtica fins que s’obre el circuit de protecció diferencial.',
        'Redueixen la tensió nominal de la xarxa a una tensió de seguretat de 12 V mitjançant una caiguda inductiva proporcional a la freqüència de 50 Hz.'
      ],
      correctIndex: 1,
      explanation: 'En posar guants, botes i banqueta en SÈRIE amb el cos, totes les resistències se sumen, disparant R_total i impedint el pas d’intensitat (I = V / R_total).'
    },
    {
      id: 't11-q4',
      difficulty: 'Mitjà',
      question: 'En el símil hidràulic del Capítol 6 del manual MAN.GRAL.005, a què equival una vàlvula d’aigua OBERTA i una vàlvula TANCADA?',
      options: [
        'Vàlvula oberta = circuit elèctric obert (sense circulació) | Vàlvula tancada = circuit elèctric tancat (amb pas de corrent).',
        'Vàlvula oberta = circuit elèctric TANCAT (passa corrent) | Vàlvula tancada = circuit elèctric OBERT (no passa corrent).',
        'Vàlvula oberta = curtcircuit directe entre fases | Vàlvula tancada = sobretensió transitòria per acumulació de càrrega.',
        'Vàlvula oberta = factor de potència unitari (cos φ = 1) | Vàlvula tancada = circuit purament reactiu sense potència activa.'
      ],
      correctIndex: 1,
      explanation: 'És la trampa clàssica del símil hidràulic: perquè passi l’aigua la vàlvula ha d’estar OBERTA, però perquè passin els electrons l’interruptor del circuit ha d’estar TANCAT.'
    },
    {
      id: 't11-q5',
      difficulty: 'Mitjà',
      question: 'En el corrent altern (AC) europeu de 50 Hz, quant dura cada cicle complet i quantes vegades per segon canvia de sentit el corrent?',
      options: [
        'Cada cicle dura 50 ms i canvia de sentit 50 vegades per segon.',
        'Cada cicle dura 20 ms (0,02 s) i canvia de sentit 100 vegades per segon.',
        'Cada cicle dura 10 ms i canvia de sentit 230 vegades per segon.',
        'No canvia mai de sentit.'
      ],
      correctIndex: 1,
      explanation: 'A 50 Hz hi ha 50 cicles cada segon (T = 1/50 = 0,02 s = 20 ms). Com que cada ona sinusoïdal té un semicile positiu i un de negatiu, el corrent canvia de sentit 100 cops per segon.'
    },
    {
      id: 't11-q6',
      difficulty: 'Mitjà',
      question: 'En el símil del got de cervesa per a les 3 potències en corrent altern (AC), quines són les unitats de la Potència Activa (P), la Potència Reactiva (Q) i la Potència Aparent (S)?',
      options: [
        'Activa (P): VA o kVA | Reactiva (Q): W o kW | Aparent (S): var o kvar.',
        'Activa (P): W o kW | Reactiva (Q): var o kvar | Aparent (S): VA o kVA.',
        'Activa (P): kWh | Reactiva (Q): kvarh | Aparent (S): kVAh en tots els casos.',
        'Activa (P): W o kW | Reactiva (Q): VA o kVA | Aparent (S): var o kvar.'
      ],
      correctIndex: 1,
      explanation: 'La potència activa útil (P, el líquid) es mesura en W o kW; la reactiva (Q, l’escuma dels camps magnètics) en var o kvar; i l’aparent total (S, tot el got) en VA o kVA.'
    },
    {
      id: 't11-q7',
      difficulty: 'Difícil',
      question: 'Per què una SUBTENSIÓ (baixada anormal del voltatge de la xarxa) pot provocar l’incendi d’un motor elèctric segons l’apartat 9.3 del manual?',
      options: [
        'Perquè en baixar la tensió la freqüència de la xarxa puja automàticament a 100 Hz i duplica les pèrdues magnètiques per histèresi al nucli del rotor.',
        'Perquè per mantenir la mateixa potència mecànica (P = V · I), si baixa la tensió V el motor absorbeix molta més intensitat I, sobreescalfant els bobinats per efecte Joule (I² · R).',
        'Perquè s’inverteix el desfasament entre dues fases consecutives i el motor intenta girar en sentit contrari mentre continua arrossegant la càrrega.',
        'Perquè una subtensió provoca la perforació dielèctrica immediata dels aïllaments del bobinat per formació d’arcs voltaics interns d’alta tensió.'
      ],
      correctIndex: 1,
      explanation: 'En motors que treballen amb càrrega mecànica, una caiguda de tensió V fa que el motor incrementi la intensitat I per mantenir la potència, disparant la calor dissipada per efecte Joule (Q = I²·R·t).'
    },
    {
      id: 't11-q8',
      difficulty: 'Mitjà',
      question: 'Quin és el llindar d’intensitat a partir del qual es pot produir la fibril·lació ventricular del cor en corrent altern (AC a 50 Hz) i com hem d’allunyar-nos d’un cable d’alta tensió caigut a terra per evitar la tensió de pas?',
      options: [
        '300 mA; corrent ràpidament amb gambades llargues per sortir com abans millor del radi d’acció.',
        '30 mA; allunyant-nos amb passos molt petits i els peus ben junts i tocant-se.',
        '10 mA; caminant de quatre grapes per repartir el corrent de derivació entre mans i genolls.',
        '500 mA; caminant cap enrere amb passos normals mantenint la vista fixa sobre el conductor.'
      ],
      correctIndex: 1,
      explanation: 'El llindar de fibril·lació ventricular és de 30 mA. Davant la tensió de pas, cal mantenir tots dos peus al mateix potencial avançant amb passos minúsculs i els peus junts.'
    },
    {
      id: 't11-q9',
      difficulty: 'Mitjà',
      question: 'Quina és la resistència total equivalent de dues resistències de R₁ = 6 Ω i R₂ = 3 Ω connectades en PARAL·LEL?',
      options: [
        '9 Ω.',
        '4,5 Ω.',
        '2 Ω.',
        '18 Ω.'
      ],
      correctIndex: 2,
      explanation: 'En paral·lel: R_tot = (R₁ · R₂) / (R₁ + R₂) = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω.'
    },
    {
      id: 't11-q10',
      difficulty: 'Fàcil',
      question: 'Quines són les tensions eficaços (RMS) i de pic aproximades en un subministrament domèstic monofàsic i en un de trifàsic de baixa tensió?',
      options: [
        'Monofàsic: 125 V RMS (200 V pic) | Trifàsic: 230 V RMS (325 V pic).',
        'Monofàsic: 230 V RMS (≈ 325 V pic) | Trifàsic: 400 V RMS entre fases (≈ 566 V pic).',
        'Monofàsic: 230 V RMS (230 V pic) | Trifàsic: 690 V RMS.',
        'Monofàsic: 400 V RMS | Trifàsic: 1.000 V RMS.'
      ],
      correctIndex: 1,
      explanation: 'En monofàsic (Fase + Neutre) la tensió eficaç és de 230 V (pic = 230·√2 ≈ 325 V). En trifàsic (entre dues fases) és de 400 V eficaços (pic = 400·√2 ≈ 566 V).'
    },
    {
      id: 't11-q11',
      difficulty: 'Mitjà',
      question: 'Segons la instrucció tècnica ITC-BT-24 del REBT, quin paper té l’interruptor diferencial d’alta sensibilitat (IΔn ≤ 30 mA) davant els contactes elèctrics DIRECTES?',
      options: [
        'Substitueix completament l’aïllament dels conductors i les envolupants protectores com a protecció principal.',
        'És una mesura de protecció complementària contra els contactes directes (no eximeix de la protecció principal per aïllament o barreres).',
        'Només protegeix contra curtcircuits entre fases actives i sobreintensitats tèrmiques, mai contra derivacions a terra.',
        'Està prohibit en circuits terminals d’habitatges perquè dispara de manera intempestiva amb càrregues capacitives.'
      ],
      correctIndex: 1,
      explanation: 'La ITC-BT-24 estableix que l’ús de dispositius de corrent diferencial residual amb IΔn ≤ 30 mA es reconeix com a protecció complementària contra contactes directes en cas de fallada de les mesures principals o per imprudència.'
    },
    {
      id: 't11-q12',
      difficulty: 'Fàcil',
      question: 'Quina afirmació és INCORRECTA respecte a les 5 regles d’or per treballar sense tensió segons el Reial decret 614/2001?',
      options: [
        'Per deixar la instal·lació sense tensió cal seguir estrictament l’ordre: 1. Desconnectar, 2. Prevenir realimentació, 3. Verificar absència de tensió, 4. Posar a terra i en curtcircuit, 5. Protegir i senyalitzar.',
        'Abans de col·locar la posada a terra i en curtcircuit és obligatori verificar l’absència de tensió.',
        'Un cop finalitzat el treball, per reposar la tensió s’han de desfer les 5 regles en el MATEIX ordre (de la 1 a la 5).',
        'Per reposar la tensió amb seguretat, les 5 regles s’han de desfer en ordre INVERS (de la 5 a la 1).'
      ],
      correctIndex: 2,
      explanation: 'És incorrecte desfer-les en el mateix ordre: per reposar el servei s’han de revertir en ordre INVERS (5 → 4 → 3 → 2 → 1), retirant primer proteccions/senyalització i la posada a terra abans de treure els bloquejos i reconnectar.'
    },
    {
      id: 't11-q13',
      difficulty: 'Fàcil',
      question: 'Quin és el llindar aproximat de percepció del corrent elèctric altern (50 Hz) en una persona sana?',
      options: [
        '0,5 mA.',
        '10 mA.',
        '30 mA.',
        '500 mA.'
      ],
      correctIndex: 0,
      explanation: 'En corrent altern a 50 Hz, el llindar de percepció (quan es comença a notar un lleuger formigueig) se situa entorn de 0,5 mA. El llindar de no-deixar-anar (tetanització) és d’uns 10 mA i la fibril·lació ventricular a partir de ~30 mA.'
    },
    {
      id: 't11-q14',
      difficulty: 'Difícil',
      question: 'Arribem a una instal·lació industrial i necessitem connectar un focus de 230 V, però només trobem una base d’endoll trifàsica CETAC vermella de 400 V amb 4 pols (3F + T). Podem treure 230 V d’aquest endoll amb un adaptador reglamentari?',
      options: [
        'Sí, connectant una fase qualsevol (L1) i el conductor de protecció a terra (PE) com a retorn del neutre de 230 V.',
        'No, perquè un endoll CETAC de 4 pols (3F + T) NO disposa de conductor neutre (N), indispensable per obtenir 230 V respecte a fase.',
        'Sí, perquè en un sistema trifàsic de 400 V entre dues fases qualssevol de l’endoll de 4 pols hi ha exactament 230 V eficaços.',
        'Sí, utilitzant un adaptador CETAC de 4 a 3 pols amb pont intern entre dues fases per reduir la tensió composta a 230 V.'
      ],
      correctIndex: 1,
      explanation: 'Un endoll trifàsic CETAC 400 V de 4 pols només porta les 3 fases (L1, L2, L3) i la terra (PE); NO té neutre (N), a diferència del de 5 pols (3F + N + T). Entre fases hi ha 400 V, i utilitzar la terra com a neutre és perillós i fa disparar el diferencial.'
    },
    {
      id: 't11-q15',
      difficulty: 'Mitjà',
      question: 'Què passa si connectem el debanat primari d’un transformador elèctric convencional directament a una bateria de corrent continu (DC) de 12 V?',
      options: [
        'Funciona normalment i eleva o redueix la tensió contínua al secundari de forma proporcional a la relació d’espires entre tots dos debanats.',
        'No funciona (no indueix tensió sostinguda al secundari), ja que un transformador requereix corrent altern (flux magnètic variable) i la baixa resistència òhmica del primari pot sobreescalfar la bobina.',
        'Converteix automàticament els 12 V DC d’entrada en una ona sinusoïdal de 230 V AC a 50 Hz gràcies a l’autoinducció del nucli ferromagnètic.',
        'Genera una força contra-electromotriu constant que redueix la intensitat del primari a zero i protegeix el debanat de qualsevol sobreescalfament.'
      ],
      correctIndex: 1,
      explanation: 'Per la llei de Faraday-Lenz, un transformador necessita un flux magnètic variable (AC) per induir força electromotriu al secundari. En DC constant (dΦ/dt = 0) no transfereix energia al secundari i el corrent elevat per la baixa resistència del coure pot cremar el bobinat.'
    },
    {
      id: 't11-q16',
      difficulty: 'Mitjà',
      question: 'Quina diferència hi ha entre el sentit REAL dels electrons i el sentit CONVENCIONAL del corrent elèctric en un circuit?',
      options: [
        'En el sentit real, els electrons circulen del pol negatiu (-) al pol positiu (+); en el sentit convencional dels esquemes, es dibuixa del pol positiu (+) al pol negatiu (-)',
        'En el sentit real, els electrons circulen del pol positiu (+) al pol negatiu (-), mentre que en el sentit convencional dels esquemes es dibuixa en sentit invers',
        'El sentit convencional només s’aplica en càlculs de corrent altern (AC) trifàsic, mentre que el sentit real només s’utilitza en circuits de corrent continu (DC)',
        'Tots dos sentits coincideixen sempre del pol negatiu (-) al pol positiu (+) en conductors metàl·lics i només s’inverteixen en solucions electrolítiques o gasos'
      ],
      correctIndex: 0,
      explanation: 'Històricament es va convenir que el corrent anava de (+) a (-). Quan es va descobrir l’electró (càrrega negativa), es va veure que el moviment físic real dels electrons va del pol negatiu (-) al positiu (+).'
    },
    {
      id: 't11-q17',
      difficulty: 'Mitjà',
      question: 'Segons la regla mnemotècnica "CIVIL" per a càrregues en corrent altern (AC), com es comporta la intensitat (I) respecte a la tensió (V) en una càrrega inductiva (bobina/motor) i en una capacitiva (condensador)?',
      options: [
        'En una càrrega capacitiva (C), la intensitat I va AVANÇADA respecte a V; en una càrrega inductiva (L), la intensitat I va ENDARRERIDA respecte a V',
        'En una càrrega inductiva (L), la intensitat I va AVANÇADA respecte a V; en una càrrega capacitiva (C), la intensitat I va ENDARRERIDA respecte a V',
        'En una càrrega resistiva pura (R), la intensitat I va endarrerida 90° respecte a V, mentre que en les inductives (L) van completament en fase',
        'En càrregues capacitives (C) no hi ha cap desfasament angular entre V i I, i només apareix en circuits inductius amb factor de potència unitari'
      ],
      correctIndex: 0,
      explanation: 'CIVIL: en un Condensador (C), I va davant de V (avançada); en una bobina inductiva (L), V va davant i I va endarrerida. En càrregues resistives pures (R), V i I van en fase.'
    }
  ]
};
