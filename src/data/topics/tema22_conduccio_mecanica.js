export const tema22ConduccioMecanica = {
  id: 'tema-19',
  number: 19,
  code: 'MAN.EQIP.002',
  title: 'Conducció d’Emergència, Tracció 4×4, Diferencials i Mecànica Bàsica',
  category: 'Manual Operatiu SGO — Vehicles, Conducció i Mecànica',
  estimatedMinutes: 50,
  importance: {
    title: "Radar d'Examen — Tema 19 (MAN.EQIP.002 V.1): Conducció i Mecànica 4×4",
    frequency: 'Molt Alta (3-4 preguntes fixes sobre ordre de bloqueig de diferencials, reductora, cadenes i dates UE)',
    summary:
      "Aquest manual és essencial per a la conducció d'autobombes: prioritat de pas i l'excepció en temptatives de suïcidi (autòlisi), conducció amb boira, neu (< 7 °C) i cadenes (40–50 km/h), la cadena cinemàtica, suspensió (ballestes vs. helicoïdals vs. pneumàtica), connexió de la reductora (4H ↔ 4L sempre ATURAT!), la seqüència obligatòria de bloqueig dels 3 diferencials (1r Central ≤40 km/h → 2n Posterior ≤5 km/h → 3r Anterior ≤5 km/h), angles tot terreny (13°/12°), presa de força (PTO) i els anys d'obligatorietat a la UE (ABS 2004, Airbag 2006, ESP 2014, eCall 2018). Inclou 4 pàgines d'estudi i 2 pàgines finals de Resum.",
    hotTopics: [
      'Cap. 1-3: Prioritat de pas (llums blaus + sirena simultanis) i Excepció d’autòlisi (apagar sirena i llums en el tram final d’aproximació).',
      'Cap. 4: Situacions adverses: boira/pluja intensa (evitar llums llargs), neu/gel (pèrdua d’adherència a < 7 °C; cadenes a l’eix motriu i velocitat màxima 40 a 50 km/h).',
      'Cap. 5.1-5.4: Cadena cinemàtica, suspensió (molls de fulla/ballestes per a camions pesants) i Caixa de transferència: passar de 2H → 4H en marxa a < 40 km/h en línia recta; passar a Reductora (4H ↔ 4L) SEMPRE amb el vehicle totalment ATURAT i en punt mort!',
      'Cap. 5.5-5.8: Ordre obligatori de bloqueig de diferencials: 1r Central/longitudinal (≤ 40 km/h) → 2n Posterior (≤ 5 km/h) → 3r Anterior (≤ 5 km/h, impedeix girar!). Angles TT d’un BUP (atac ≈ 13°, sortida ≈ 12°, ventral).',
      'Cap. 6: Anys d’obligatorietat a la UE: ABS (2004), Airbags (2006), ESP (2014) i eCall 112 (2018). Mans al volant a "les 9 i les 3" i prohibit portar taps auditius conduint.'
    ],
    traps: [
      'Intentar connectar la reductora (4L) en marxa o bloquejar diferencials sobre asfalt/terreny adherent (trenca la transmissió i els paliers!).',
      'Invertir l’ordre de bloqueig dels diferencials: SEMPRE és 1r Central → 2n Posterior → 3r Anterior (i per desbloquejar, l’ordre invers: 1r Anterior → 2n Posterior → 3r Central)!',
      'Confondre les dates d’obligatorietat a la UE: 2004 = ABS | 2006 = Airbags | 2014 = ESP | 2018 = eCall.'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-4 Conducció i Clima',
      title: '1–4. Conducció d’Emergència, Excepció d’Autòlisi i Situacions Adverses',
      subtitle: 'Prioritat de pas, aproximació silenciosa en autòlisi, pistes forestals, boira i cadenes de neu (40–50 km/h).',
      blocks: [
        {
          type: 'text',
          heading: '1–3. Conducció d’Emergència i Senyalització (Excepció en Temptatives d’Autòlisi)',
          paragraphs: [
            "Un vehicle de bombers només gaudeix de prioritat de pas sobre la resta d'usuaris quan circula en servei urgent i activa SIMULTÀNIAMENT els senyals lluminosos (rotatius blaus V-1) i els senyals acústics especials (sirena), podent excepcionalment deixar només els lluminosos quan no hi hagi cap perill per als altres usuaris (per exemple, de nit en vies buides).",
            "Regla operativa destacada al Capítol 3.2 del manual MAN.EQIP.002: En serveis per temptativa de suïcidi (AUTÒLISI), s'ha de desactivar l'ús de sirenes i senyals lluminosos en el tram final d'aproximació al lloc de l'incident per no incrementar l'estrès ni precipitar una reacció fatal de la víctima!"
          ]
        },
        {
          type: 'table',
          title: '4. Pautes Oficials de Conducció en Situacions Adverses (MAN.EQIP.002 Cap. 4)',
          subtitle: 'Camins forestals, pluja, boira, neu/gel i vent fort',
          headers: ['Situació Adversa', 'Actuació Tècnica i Normativa del Conductor', 'Xifres i Prohibicions d’Examen'],
          rows: [
            ['4.1. Camins Forestals (4×4)', 'Connectar la tracció total, reductora (4L) i bloqueig de diferencials ABANS d’entrar al tram complicat', 'Reductora 4L sempre amb el camió ATURAT · Prohibit bloquejar diferencials sobre asfalt!'],
            ['4.2. Pluja Intensa', 'Augmentar distància de seguretat i evitar frenades brusques (risc d’aquaplaning)', 'En travessar bassals profunds, provar els frens suament en sortir per assecar els discos/tambors'],
            ['4.3. Boira Densa (Art. 106)', 'Encendre llums d’encreuament (curts) i antiboira davanters i posteriors', 'EVITAR els llums de carretera (llargs) perquè les gotes en suspensió reflecteixen la llum i enlluernen!'],
            ['4.4. Neu i Gel (< 7 °C)', 'Marxes llargues (2a o 3a) per reduir parell a roda i evitar que patinin · Muntar cadenes a l’eix motriu', 'A < 7 °C el pneumàtic convencional perd adherència · Velocitat màxima amb cadenes = 40 a 50 km/h!'],
            ['4.5. Vent Lateral Fort', 'Subjectar fermament el volant i corregir l’efecte pantalla en avançar camions o sortir de túnels', 'Especial atenció a l’altura i centre de gravetat elevat de les autobombes i AEA']
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 5.1-5.4 Transmissió i 4L',
      title: '5.1–5.4. Mecànica Bàsica: Cadena Cinemàtica, Suspensió, Frens i Reductora (4H/4L)',
      subtitle: 'Ordre d’elements des del motor fins a les rodes, tipus de molls i velocitats de connexió de la caixa de transferència.',
      blocks: [
        {
          type: 'text',
          heading: '5.1–5.3. La Cadena Cinemàtica, Suspensió i Sistemes de Frenada',
          paragraphs: [
            "La CADENA CINEMÀTICA transmet la força des del motor fins a les rodes en aquest ordre exacte: 1) Motor → 2) Embragatge → 3) Caixa de canvis → 4) Caixa de transferència (reparteix el parell entre eixos i allotja la reductora 4×4) → 5) Arbres de transmissió (cardans) → 6) Pont diferencial (corona, pinyó d'atac, satèl·lits i planetaris) → 7) Paliers → 8) Rodes.",
            "El sistema de SUSPENSIÓ manté la roda enganxada al ferm amb 3 components: 1) Molls (de fulla o BALLESTES en camions pesants; HELICOÏDALS en vehicles lleugers; PNEUMÀTICS per regular alçada/duresa), 2) Amortidors (esmorteixen el rebot del moll) i 3) Barres estabilitzadores (redueixen el balanceig lateral en corbes).",
            "El sistema de FRENADA dels camions combina el fre de servei (disc/tambor amb ABS), el fre d'estacionament i els frens auxiliars d'enduriment (fre motor a l'escapament i retardador hidràulic o elèctric 'intarder' a la transmissió), indispensables per baixar ports de muntanya sense sobreescalfar ni perdre els frens de roda (efecte fading)."
          ]
        },
        {
          type: 'table',
          title: '5.4. Maniobra Oficial de la Caixa de Transferència i Reductora (MAN.EQIP.002)',
          subtitle: 'Velocitats màximes i condicions per canviar entre 2H, 4H i 4L',
          headers: ['Canvi de Mode de Tracció', 'Condició Obligatòria de Maniobra', 'Efecte Mecànic sobre el Camió'],
          rows: [
            ['De 2H a 4H (4×2 → 4×4 llargues)', 'Es pot fer EN MARXA a velocitat < 40 km/h, en línia recta i sense accelerar bruscament', 'Connecta la tracció a l’eix davanter mantenint la relació de marxes normal'],
            ['De 4H a 2H (4×4 → 4×2)', 'Es pot desconnectar en marxa a qualsevol velocitat moderada en línia recta', 'Torna a tracció només a l’eix posterior per circular per carretera asfaltada'],
            ['De 4H a 4L (Connexió REDUCTORA)', 'OBLIGATORI amb el vehicle TOTALMENT ATURAT (0 km/h), trepitjant embragatge o en PUNT MORT (N)!', 'Desmultiplica el gir: redueix la velocitat a la meitat i MULTIPLICA la força (parell) a les rodes i la retenció del fre motor!'],
            ['De 4L a 4H (Treure REDUCTORA)', 'OBLIGATORI amb el vehicle TOTALMENT ATURAT (0 km/h) i en punt mort (N)', 'Desacobla l’engranatge reductor per tornar a marxes llargues']
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 5.5-6 Diferencials i UE',
      title: '5.5–6. Bloqueig dels 3 Diferencials (Ordre i Velocitats), Angles TT, PTO i Seguretat',
      subtitle: 'Seqüència 1r Central → 2n Posterior → 3r Anterior, angles d’atac (13°/12°) i anys d’obligatorietat UE.',
      blocks: [
        {
          type: 'text',
          heading: '5.5–5.8. Funcionament del Diferencial i Ordre de Bloqueig 4×4',
          paragraphs: [
            "Un diferencial obert permet que les dues rodes d'un mateix eix girin a velocitat diferent quan el camió fa una corba (la roda exterior recorre més distància). El seu inconvenient en terreny relliscós és que sempre envia la força cap a la roda amb MENYS adherència: si una roda patina sobre fang o gel, s'emporta tot el gir i el camió no avança.",
            "El BLOQUEIG DE DIFERENCIALS solidaritza els eixos obligant-los a girar a les mateixes revolucions. En un camió 4×4 amb 3 diferencials s'ha d'activar en aquest ordre estricte: 1r) CENTRAL o longitudinal (≤ 40 km/h en línia recta) → 2n) POSTERIOR (≤ 5 km/h o aturat) → 3r) ANTERIOR (≤ 5 km/h o aturat; recorda que impedeix girar la direcció!). Per desbloquejar, es segueix l'ordre INVERS: 1r Anterior → 2n Posterior → 3r Central.",
            "No confondre! Reductora (4L) vs. Bloqueig de Diferencials: La reductora desmultiplica les marxes per multiplicar el parell de força i la retenció (s'ha de posar SEMPRE amb el camió ATURAT a 0 km/h). El bloqueig de diferencials iguala el gir entre eixos/rodes quan patinen, i MAI s'ha de deixar posat sobre asfalt sec perquè trenca paliers i transmissió!"
          ]
        },
        {
          type: 'diagram',
          title: 'Ordre de Bloqueig dels 3 Diferencials (Central → Posterior → Anterior) i Angles Tot Terreny',
          diagramType: 'drivetrain_4x4',
          caption:
            'Esquerra: 1r Central (≤ 40 km/h), 2n Posterior (≤ 5 km/h) i 3r Anterior (≤ 5 km/h, impedeix girar). Dreta: angles d’atac (≈ 13°), de sortida (≈ 12°) i ventral en un BUP.'
        },
        {
          type: 'diagram',
          title: 'Motor de 4 Temps (Admissió, Compressió, Explosió, Expulsió) i Ordre 1-3-4-2',
          diagramType: 'four_stroke_engine',
          caption:
            'Cicle complet de 4 temps (720° de cigonyal) i taula sincronitzada del que fa cada cilindre en cada fase amb ordre d’encesa 1-3-4-2.'
        },
        {
          type: 'table',
          title: 'Angles Tot Terreny, PTO i Dates d’Obligatorietat de Seguretat a la UE (MAN.EQIP.002 Cap. 5.6–6)',
          subtitle: 'Valors exactes del manual per a BUP i cronologia europea de seguretat activa/passiva',
          headers: ['Concepte / Sistema de Seguretat', 'Valor Oficial / Any d’Obligatorietat UE', 'Funció i Normes per al Conductor'],
          rows: [
            ['Angle d’Atac i de Sortida (BUP)', 'Angle d’Atac (frontal) ≈ 13° | Angle de Sortida (posterior) ≈ 12°', 'L’Angle Ventral és l’angle format sota la panxa entre els dos eixos per superar crestes'],
            ['Presa de Força (PTO) i Quadre', 'Connectar trepitjant embragatge | Llum Taronja = avís; Vermella = aturar ja!', 'La PTO acobla el motor del camió a la bomba centrífuga d’aigua o a la bomba hidràulica de l’AEA'],
            ['ABS (Antilock Braking System)', 'Obligatori a la UE des de l’any 2004 (Seguretat Activa)', 'Evita el bloqueig de les rodes en frenar a fons per poder mantenir el control de la direcció'],
            ['Airbags (Coixins de seguretat)', 'Obligatoris a la UE des de l’any 2006 (Seguretat Passiva)', 'Actuen conjuntament amb el cinturó i els pretensors pirotècnics'],
            ['ESP (Control d’Estabilitat)', 'Obligatori a la UE des de l’any 2014 (Seguretat Activa)', 'Frena selectivament cada roda per corregir el subviratge (marxa de morro) o sobreviratge (culada)'],
            ['Sistema eCall (Trucada 112)', 'Obligatori a la UE des de l’any 2018 (Seguretat Terciària)', 'Truca automàticament al 112 i envia coordenades GPS en cas d’accident greu'],
            ['Mans al volant i Oïda', 'Posició de mans a "les 9 i les 3" · Prohibit portar taps auditius!', 'Cinturó cordat sempre (prohibit descordar-se’l en marxa per vestir-se la jaqueta o l’ERA!)']
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Mode Nen Petit i Trucs',
      title: ' Síntesi Pràctica: Com Entendre els Diferencials i Memoritzar les Dates UE',
      subtitle: 'Metàfores visuals i regles mnemotècniques per no fallar cap pregunta del manual MAN.EQIP.002.',
      blocks: [
        {
          type: 'easy',
          title: 'Mode Nen Petit: Per què un camió 4×4 es queda clavat si una sola roda trepitja fang i com ho arregla el bloqueig?',
          metaphor:
            'Pensa en l’energia del motor com si fos aigua que busca sempre el camí més fàcil (el forat més fluix):',
          explanation:
            "• Amb diferencials oberts (normals per a carretera), si una sola roda queda sobre gel o en l'aire sense resistència, tota la força del motor se n'hi va i les altres rodes no es mouen.\n• Amb el bloqueig lliguem mecànicament els eixos: 1r CENTRAL (≤ 40 km/h) → 2n POSTERIOR (≤ 5 km/h) → 3r ANTERIOR (≤ 5 km/h, sabent que el camió anirà recte i no girarà).",
          takeaway: 'Ordre sagrat de bloqueig: 1r Central (≤ 40 km/h) → 2n Posterior (≤ 5 km/h) → 3r Anterior (≤ 5 km/h, no gira).'
        },
        {
          type: 'mnemonic',
          title: 'Truc Mnemotècnic: "C – P – A (40 – 5 – 5)" i Cronologia UE "2004 – 2006 – 2014 – 2018"',
          trick:
            '• Diferencials "C – P – A": 1r Central (≤ 40 km/h) → 2n Posterior (≤ 5 km/h) → 3r Anterior (≤ 5 km/h).\n• Cronologia dels 4 sistemes obligatoris a la UE (dos als anys 2000 i dos als anys 2010):\n  - 2004: ABS (Frens)\n  - 2006: Airbags (+2 anys)\n  - 2014: ESP (+10 anys des de l’ABS)\n  - 2018: eCall 112.',
          example:
            'Pregunta trampa: Quin sistema pertany a la Seguretat ACTIVA (evita l’accident) i quin a la PASSIVA (redueix lesions un cop ja has xocat)? Activa = Frens, ABS (2004), ESP (2014), direcció, pneumàtics, llums. Passiva = Cinturó, Airbags (2006), reposacaps, xassís deformable.'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · Resum 1/2',
      title: 'Resum Imprescindible d’Examen (1/2) — Conducció d’Emergència i Situacions Adverses',
      subtitle: 'Síntesi d’alta densitat dels Capítols 1 a 4 del manual MAN.EQIP.002.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 1: Normativa de Conducció d’Emergència i Clima Advers',
          subtitle: 'Punts clau dels Capítols 1, 2, 3 i 4',
          headers: ['Concepte / Escenari', 'Regla Oficial del Manual MAN.EQIP.002', 'Detall Crític d’Examen'],
          rows: [
            ['Prioritat de Pas', 'Ús SIMULTANI de senyals lluminosos (blaus) i acústics (sirena)', 'Responsabilitat sempre del conductor; no eximeix de respectar la seguretat'],
            ['Excepció en Autòlisi (3.2)', 'Desactivar sirena i llums en el tram final d’aproximació', 'Evita alterar emocionalment la persona en temptativa de suïcidi'],
            ['Boira i Pluja Intensa', 'Usar llums curts (encreuament) i antiboira · EVITAR llums llargs!', 'Els llums llargs es reflecteixen a les gotes d’aigua i creen una paret blanca'],
            ['Neu i Gel (< 7 °C)', 'Pèrdua d’adherència a < 7 °C · Marxes llargues · Cadenes a l’eix motriu', 'Velocitat màxima amb cadenes de neu = 40 a 50 km/h'],
            ['Pistes Forestals', 'Connectar 4×4, reductora i bloquejos ABANS d’entrar al fang/pendent', 'Prohibit circular amb diferencials bloquejats sobre asfalt o ferm adherent']
          ]
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · Resum 2/2',
      title: 'Resum Imprescindible d’Examen (2/2) — Mecànica 4×4, Diferencials i Seguretat UE',
      subtitle: 'Síntesi d’alta densitat dels Capítols 5 i 6 del manual MAN.EQIP.002.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 2: Transmissió 4×4, Diferencials, Angles i Dates UE',
          subtitle: 'Totes les xifres mecàniques dels Capítols 5 i 6',
          headers: ['Sistema Mecànic', 'Xifres i Ordre Oficial Exacte', 'Condició Operativa'],
          rows: [
            ['Cadena Cinemàtica', 'Motor → Embragatge → Caixa canvis → Transfer → Arbre → Diferencial → Paliers → Rodes', 'Suspensió camions: molls de fulla (ballestes) + amortidors + estabilitzadora'],
            ['Caixa Transfer i Reductora', '2H → 4H en marxa a < 40 km/h | Reductora (4H ↔ 4L) SEMPRE ATURAT i punt mort!', 'La reductora multiplica el parell de força i la retenció del fre motor'],
            ['Ordre Bloqueig Diferencials', '1r Central (≤ 40 km/h) → 2n Posterior (≤ 5 km/h) → 3r Anterior (≤ 5 km/h)', 'El bloqueig anterior impedeix girar la direcció! Desbloqueig en ordre invers'],
            ['Angles Tot Terreny (BUP)', 'Angle d’Atac (frontal) ≈ 13° · Angle de Sortida (posterior) ≈ 12° · Angle Ventral', 'Testigos quadre: Taronja = precaució/revisió; Vermell = aturar immediatament'],
            ['Obligatorietat UE Seguretat', 'ABS = 2004 · Airbags = 2006 · ESP = 2014 · eCall (112) = 2018', 'Mans a "les 9 i les 3" · Prohibit portar taps auditius o descordar cinturó en marxa']
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't19-q1',
      difficulty: 'Fàcil',
      question: 'Segons el Capítol 5.5 del manual MAN.EQIP.002, quin és l’ordre obligatori d’activació del bloqueig dels diferencials en un camió de bombers 4×4 i a quina velocitat màxima es pot connectar cadascun?',
      options: [
        '1r Anterior (≤ 50 km/h) → 2n Posterior (≤ 20 km/h) → 3r Central (aturat).',
        '1r Diferencial CENTRAL o longitudinal (≤ 40 km/h) → 2n Diferencial POSTERIOR (≤ 5 km/h) → 3r Diferencial ANTERIOR (≤ 5 km/h, impedint girar la direcció).',
        '1r Posterior → 2n Anterior → 3r Central, tots a qualsevol velocitat.',
        'S’activen tots tres alhora prement el pedal de fre a 80 km/h.'
      ],
      correctIndex: 1,
      explanation: 'La seqüència és sempre: 1r Central/longitudinal (fins a ≤ 40 km/h en línia recta), 2n Posterior (≤ 5 km/h) i 3r Anterior (≤ 5 km/h, tenint en compte que impedeix girar).'
    },
    {
      id: 't19-q2',
      difficulty: 'Fàcil',
      question: 'Quina condició és indispensable per connectar o desconnectar la marxa REDUCTORA (passar de 4H a 4L o de 4L a 4H) en la caixa de transferència?',
      options: [
        'Circular a menys de 40 km/h en tercera marxa.',
        'Tenir el vehicle TOTALMENT ATURAT (0 km/h) i passar per punt mort (o trepitjar l’embragatge).',
        'Fer-ho mentre les rodes estan patinant dins del fang.',
        'Circular marxa enrere a 10 km/h.'
      ],
      correctIndex: 1,
      explanation: 'A diferència del pas de 2H a 4H (que es pot fer en marxa a < 40 km/h), la connexió de la reductora (4H ↔ 4L) exigeix sempre aturar completament el vehicle i posar punt mort.'
    },
    {
      id: 't19-q3',
      difficulty: 'Mitjà',
      question: 'A partir de quina temperatura ambient perden adherència els pneumàtics convencionals i quina és la velocitat màxima permesa quan es circula amb cadenes de neu?',
      options: [
        'A partir de 0 °C; velocitat màxima amb cadenes = 80 km/h.',
        'A partir de < 7 °C; velocitat màxima amb cadenes = entre 40 i 50 km/h (muntades sempre a l’eix motriu).',
        'A partir de -10 °C; velocitat màxima = 20 km/h.',
        'A partir de 15 °C; velocitat màxima = 90 km/h.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 4.4 del manual: per sota de 7 °C el cautxú convencional s’endureix i perd adherència; les cadenes es munten a l’eix motriu i limiten la velocitat màxima a 40–50 km/h.'
    },
    {
      id: 't19-q4',
      difficulty: 'Mitjà',
      question: 'En quin any van passar a ser obligatoris a la Unió Europea els sistemes ABS, Airbags, ESP (control d’estabilitat) i eCall (trucada automàtica al 112)?',
      options: [
        'ABS: 1995 | Airbags: 2000 | ESP: 2010 | eCall: 2020.',
        'ABS: 2004 | Airbags: 2006 | ESP: 2014 | eCall: 2018.',
        'ABS: 2006 | Airbags: 2004 | ESP: 2018 | eCall: 2014.',
        'Tots quatre van ser obligatoris l’any 2012.'
      ],
      correctIndex: 1,
      explanation: 'Cronologia oficial del Capítol 6 del manual MAN.EQIP.002: ABS = 2004, Airbags = 2006, ESP = 2014 i eCall = 2018.'
    },
    {
      id: 't19-q5',
      difficulty: 'Fàcil',
      question: 'Segons l’apartat 3.2 del manual MAN.EQIP.002, en quin tipus de servei d’emergència s’han de desactivar les sirenes i els senyals lluminosos en el tram final d’aproximació?',
      options: [
        'En tots els incendis industrials nocturns.',
        'En els serveis per temptativa de suïcidi (autòlisi), per reduir l’impacte emocional sobre la víctima.',
        'Quan es circula per autopista.',
        'En accidents de trànsit amb múltiples vehicles.'
      ],
      correctIndex: 1,
      explanation: 'En intervencions per temptativa d’autòlisi cal apagar sirenes i llums abans d’arribar a la vista o oïda de la víctima per no precipitar una acció fatal.'
    },
    {
      id: 't19-q6',
      difficulty: 'Mitjà',
      question: 'Quins valors aproximats tenen l’Angle d’Atac (frontal) i l’Angle de Sortida (posterior) en una Bomba Urbana Pesant (BUP) segons l’apartat 5.6 del manual?',
      options: [
        'Angle d’atac ≈ 45° | Angle de sortida ≈ 45°.',
        'Angle d’atac ≈ 13° | Angle de sortida ≈ 12°.',
        'Angle d’atac ≈ 35° | Angle de sortida ≈ 30°.',
        'Angle d’atac ≈ 5° | Angle de sortida ≈ 5°.'
      ],
      correctIndex: 1,
      explanation: 'El manual indica com a referència per a un BUP un angle d’atac frontal d’uns 13° i un angle de sortida posterior d’uns 12° (molt inferiors als d’un BRP forestal).'
    },
    {
      id: 't19-q7',
      difficulty: 'Fàcil',
      question: 'Per què s’ha d’evitar l’ús dels llums de carretera (llums llargs) quan es condueix amb boira densa o pluja molt intensa?',
      options: [
        'Perquè consumeixen massa bateria.',
        'Perquè la llum alta incideix sobre les gotes d’aigua en suspensió, es reflecteix cap al conductor i provoca autoenlluernament (efecte paret blanca).',
        'Perquè escalfen el para-xocs.',
        'Els llums llargs són obligatoris amb boira densa.'
      ],
      correctIndex: 1,
      explanation: 'Amb boira o pluja intensa cal usar llums d’encreuament (curts) i antiboira, ja que els llums llargs reboten a les microgotes i redueixen la visibilitat.'
    },
    {
      id: 't19-q8',
      difficulty: 'Mitjà',
      question: 'Quin tipus de moll de suspensió és el més utilitzat en els eixos de camions pesants de bombers per la seva gran resistència i capacitat de càrrega?',
      options: [
        'Els molls de fulla (ballestes).',
        'Els molls helicoïdals de plàstic.',
        'La suspensió magnètica.',
        'Els camions de bombers no porten suspensió per no bolcar.'
      ],
      correctIndex: 0,
      explanation: 'Apartat 5.3 del manual: els molls de fulla (ballestes), formats per làmines d’acer superposades, són els més resistents per suportar les grans tones d’aigua dels camions pesants.'
    },
    {
      id: 't19-q9',
      difficulty: 'Fàcil',
      question: 'Quina és la posició correcta de les mans al volant segons el manual i quina norma regeix sobre l’ús de taps auditius i cinturó de seguretat durant el trajecte?',
      options: [
        'Les mans a "les 10 i les 10"; el conductor ha de portar taps auditius pel soroll de la sirena.',
        'Les mans a "les 9 i les 3"; està prohibit que el conductor porti taps o protectors auditius i tots els ocupants han de portar el cinturó cordat durant tot el trajecte.',
        'Una mà al volant i l’altra a la ràdio; els bombers del darrere poden anar drets vestint-se l’ERA.',
        'Les mans a "les 12 i les 6".'
      ],
      correctIndex: 1,
      explanation: 'Capítol 6: posició de mans al volant a "les 9 i les 3" (evita lesions amb l’airbag), prohibit portar taps auditius al conductor i prohibit descordar-se el cinturó en marxa.'
    },
    {
      id: 't19-q10',
      difficulty: 'Mitjà',
      question: 'Quin element mecànic de la transmissió permet acoblar el motor del camió de bombers per accionar la bomba centrífuga d’aigua o la bomba hidràulica de l’autoescala?',
      options: [
        'El diferencial anterior.',
        'La Presa de Força (PTO - Power Take-Off).',
        'La barra estabilitzadora.',
        'L’alternador.'
      ],
      correctIndex: 1,
      explanation: 'La Presa de Força (PTO, apartat 5.7) deriva la potència mecànica de la caixa de canvis o del motor cap a la bomba d’incendis o el grup hidràulic.'
    },
    {
      id: 't19-q11',
      difficulty: 'Mitjà',
      question: 'Un camió BRP ha superat un tram de fang amb els tres diferencials bloquejats i torna a una pista forestal seca i adherent. Quin és l’ordre correcte per desbloquejar els diferencials?',
      options: [
        '1r Central → 2n Posterior → 3r Anterior.',
        '1r Anterior → 2n Posterior → 3r Central (ordre exactament invers al de connexió).',
        '1r Posterior → 2n Central → 3r Anterior.',
        'Només es desbloqueja el Central i els altres dos salten sols a 80 km/h.'
      ],
      correctIndex: 1,
      explanation: 'El bloqueig s’activa en ordre Central → Posterior → Anterior, i per desbloquejar-los cal seguir l’ordre invers: 1r Anterior (per recuperar direcció) → 2n Posterior → 3r Central.'
    },
    {
      id: 't19-q12',
      difficulty: 'Fàcil',
      question: 'Quin element de la cadena cinemàtica es troba just després de la caixa de canvis i s’encarrega de repartir el parell entre l’eix davanter i el posterior, allotjant a més la reductora en un camió 4×4?',
      options: [
        'El palier.',
        'La caixa de transferència.',
        'La barra estabilitzadora.',
        'El retardador hidràulic.'
      ],
      correctIndex: 1,
      explanation: 'L’ordre de la cadena cinemàtica és: Motor → Embragatge → Caixa de canvis → Caixa de transferència → Arbres de transmissió → Pont diferencial → Paliers → Rodes.'
    },
    {
      id: 't19-q13',
      difficulty: 'Mitjà',
      question: 'Durant el descens d’un port de muntanya llarg amb una BUP carregada amb 3.500 L d’aigua, quin sistema auxiliar convé utilitzar prioritàriament per retenir el vehicle sense sobreescalfar els frens de roda?',
      options: [
        'El fre d’estacionament aplicat intermitentment.',
        'El fre motor a l’escapament i el retardador (intarder) a la transmissió, combinats amb una marxa curta.',
        'Posar punt mort per aprofitar la inèrcia i trepitjar contínuament el fre de servei.',
        'Connectar el bloqueig del diferencial anterior en baixada sobre asfalt.'
      ],
      correctIndex: 1,
      explanation: 'Els frens auxiliars d’enduriment (fre motor i retardador/intarder) retenen la transmissió sense desgastar ni sobreescalfar els discos/tambors de roda (evitant l’efecte fading).'
    },
    {
      id: 't19-q14',
      difficulty: 'Mitjà',
      question: 'En relació amb els sistemes de seguretat obligatoria a la UE (Capítol 6 de MAN.EQIP.002), quina parella sistema–categoria de seguretat és INCORRECTA?',
      options: [
        'ABS (2004): Seguretat activa.',
        'Airbags (2006): Seguretat passiva.',
        'ESP (2014): Seguretat passiva.',
        'eCall 112 (2018): Seguretat terciària.'
      ],
      correctIndex: 2,
      explanation: 'Afirmació incorrecta: l’ESP (Control d’Estabilitat, obligatori des del 2014) pertany a la Seguretat ACTIVA perquè actua abans que es produeixi l’accident frenant selectivament les rodes per corregir subviratge o sobreviratge.'
    },
    {
      id: 't19-q15',
      difficulty: 'Difícil',
      question: 'En conducció d’urgència i situacions adverses (Capítols 1 a 4 de MAN.EQIP.002), quina de les afirmacions següents és INCORRECTA?',
      options: [
        'La prioritat de pas exigeix l’ús simultani de senyals lluminosos (blaus V-1) i acústics especials (sirena), llevat dels casos excepcionals previstos.',
        'En travessar un bassal profund amb pluja intensa, convé provar suament els frens en sortir per assecar els discos o tambors.',
        'En passar de tracció 2H a 4H (marxes llargues) cal aturar totalment el camió a 0 km/h, mentre que la reductora 4L es pot connectar en marxa fins a 40 km/h.',
        'El bloqueig del diferencial anterior només es connecta a ≤ 5 km/h o aturat i impedeix girar la direcció.'
      ],
      correctIndex: 2,
      explanation: 'Afirmació incorrecta: és justament al revés! El pas de 2H a 4H es pot fer en marxa (< 40 km/h en línia recta), mentre que la reductora (4H ↔ 4L) s’ha de connectar SEMPRE amb el vehicle totalment ATURAT (0 km/h) i en punt mort.'
    },
    {
      id: 't19-q16',
      difficulty: 'Fàcil',
      question: 'Com s’ha d’actuar si s’encén un testimoni lluminós de color TARONJA o de color VERMELL al quadre d’instruments d’un camió de bombers?',
      options: [
        'Taronja = aturar el motor immediatament | Vermell = seguir fins al final de guàrdia.',
        'Taronja = avís/precaució (revisar aviat, es pot acabar la maniobra amb cautela) | Vermell = avaria greu (aturar el camió immediatament).',
        'Tots dos indiquen únicament que la presa de força (PTO) està connectada.',
        'Taronja indica falta de combustible d’escumogen i vermell indica porta d’armari oberta.'
      ],
      correctIndex: 1,
      explanation: 'Al quadre d’instruments, el testimoni taronja/àmbar indica precaució o revisió, mentre que el testimoni vermell indica perill o avaria greu que obliga a aturar immediatament el vehicle o la bomba.'
    },
    {
      id: 't19-q17',
      difficulty: 'Mitjà',
      question: 'Quin element del sistema de suspensió té com a funció principal reduir la inclinació lateral (balanceig) de la carrosseria d’una autobomba quan traça una corba?',
      options: [
        'El moll de fulla (ballesta).',
        'La barra estabilitzadora.',
        'El pont diferencial posterior.',
        'L’arbre de transmissió cardan.'
      ],
      correctIndex: 1,
      explanation: 'Dels tres elements de la suspensió, els molls absorbeixen irregularitats, els amortidors frenen les oscil·lacions i les barres estabilitzadores limiten el balanceig lateral en corbes.'
    },
    {
      id: 't19-q18',
      difficulty: 'Fàcil',
      question: 'En conducció amb neu o gel per sota de 7 °C, en quin eix s’han de muntar les cadenes de neu i quines marxes convé utilitzar per evitar que les rodes patinin?',
      options: [
        'Sempre a l’eix davanter encara que la tracció sigui posterior, i amb 1a marxa curta a altes revolucions.',
        'A l’eix motriu (i si és 4×4 on indiqui el fabricant/manual), utilitzant marxes llargues (2a o 3a) per reduir el parell a roda i circulació màxima a 40–50 km/h.',
        'A les quatre rodes per poder circular a 90 km/h amb seguretat.',
        'Només a la roda de recanvi.'
      ],
      correctIndex: 1,
      explanation: 'Les cadenes es munten a l’eix motriu (velocitat màxima 40–50 km/h) i s’utilitzen marxes llargues (2a o 3a) per dosificar el parell motor i evitar pèrdues d’adherència.'
    }
  ]
};
