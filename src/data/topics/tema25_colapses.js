export const tema25Colapses = {
  id: 'tema-30',
  number: 30,
  code: 'MAN.SVES.000',
  title: 'Intervenció Bàsica en Estructures Col·lapsades, Apuntalaments i INSARAG',
  category: 'Manual Operatiu SGO — Salvament en Estructures Col·lapsades',
  estimatedMinutes: 45,
  importance: {
    title: "Radar d'Examen — Tema 30 (MAN.SVES.000 V.1): Col·lapses, GREC, Apuntalaments i Senyals",
    frequency: 'Molt Alta (3-4 preguntes fixes sobre GREC 2021, puntals ≤1 m / 1.000 kg, marcatge INSARAG, emplaçament 2×h i senyals acústics)',
    summary:
      "Aquest manual conté algunes de les xifres i codis més preguntats a les oposicions: història d'INSARAG (Mèxic 1985 i Armènia 1988), creació del GREC (2021 i certificació STRAC 2025), les 3 fases de recerca (Física / Crida i escolta, Instrumentalitzada amb geòfons/càmeres, i Canina per venteig), xifres oficials d'apuntalaments (distància entre puntals ≤ 1 m, resistència 1.000 kg/puntal, les 3 parts Sotapont/Puntals/Jaç i tornapuntes a 45°–60°), marcatge INSARAG de víctimes (V de 50 cm, L-n, D-n i rombe C), distància d'emplaçament de vehicles (2 × h) i els 4 senyals acústics d'emergència (3 curts = Evacuar; 1 llarg = Aturar; 1 llarg + 1 curt = Continuar). Inclou 4 pàgines d'estudi i 2 pàgines finals de Resum.",
    hotTopics: [
      'Cap. 1: Terratrèmols de Mèxic (1985) i Armènia (1988) → creació d’INSARAG (ONU, anys 90), OSOCC i equips USAR (lleugers, mitjans, pesats). GREC (Grup de Recolzament en Estructures Col·lapsades) constituït l’any 2021 (certificació europea STRAC iniciada el 2025).',
      'Cap. 2-3: Col·lapse Total, Parcial i Secundari (el més perillós per als bombers durant el rescat) i les 3 fases de recerca: 1) Física (vista/oïda + Crida i escolta), 2) Instrumentalitzada (geòfons sísmics/acústics i càmeres) i 3) Canina (maniobra de Venteig en silenci i sense gent).',
      'Cap. 4 (Apuntalaments): Distància màxima entre puntals ≤ 1 metre · Resistència considerada per puntal = 1.000 kg (1 tona) · Les 3 parts verticals: 1. Sotapont (recull), 2. Puntals (traslladen), 3. Jaç de taulons (reparteix) · Tornapuntes inclinats a 45°–60°.',
      'Cap. 5-6: Marcatge INSARAG de víctimes (V de 50 cm, L-n vives, D-n mortes, C = Clear), emplaçament de vehicles a ≥ 2 × h (dues vegades l’alçada de l’edifici o 2 edificacions no afectades, a la part alta del pendent) i Senyals Acústics (Evacuar = 3 curts d’1 s; Aturar/Silenci = 1 llarg de 3 s; Continuar = 1 llarg + 1 curt).'
    ],
    traps: [
      'Confondre els senyals acústics d’alarma: 3 tocs curts (1 s) = EVACUAR IMMEDIATAMENT! 1 toc llarg (3 s) = ATURAR OPERACIONS / SILENCI! 1 toc llarg + 1 toc curt = REPRENDRE / CONTINUAR OPERACIONS!',
      'Superar 1 metre de separació entre puntals o atribuir més de 1.000 kg de càrrega a un puntal estàndard en càlculs d’apuntalament d’emergència.',
      'Invertir les 3 parts d’un apuntalament vertical: a dalt sota el sostre va el SOTAPONT (recull la càrrega), al mig els PUNTALS (traslladen la càrrega) i a baix a terra el JAÇ DE TAULONS (reparteix la càrrega)!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-3 INSARAG, GREC i Recerca',
      title: '1–3. Història d’INSARAG, el Grup GREC (2021), Tipus de Col·lapses i les 3 Fases de Recerca',
      subtitle: 'Mèxic 85 i Armènia 88, equips USAR, col·lapse secundari i recerca física, instrumental i canina.',
      blocks: [
        {
          type: 'text',
          heading: '1. Origen d’INSARAG (ONU), Equips USAR i Creació del GREC (2021 / STRAC 2025)',
          paragraphs: [
            "Després dels grans terratrèmols de Mèxic (1985) i Armènia (1988), on es va evidenciar la falta d'estandardització internacional dels equips de rescat, les Nacions Unides van crear als anys 1990 el grup INSARAG (International Search and Rescue Advisory Group). INSARAG coordina els centres OSOCC (On-Site Operations Coordination Centre) i classifica els equips internacionals USAR (Urban Search And Rescue) en 3 categories segons la seva capacitat i autonomia: Lleugers, Mitjans i Pesats.",
            "Als Bombers de la Generalitat de Catalunya, l'any 2021 es va constituir oficialment el GREC (Grup de Recolzament en Estructures Col·lapsades), format per especialistes en apuntalaments, patologia estructural i rescat USAR (amb intervencions destacades als esfondraments de Badalona 2020 i 2024, incendi del Pont de Vilomara 2022, missió a Armènia 2024 i inici del procés de certificació europea STRAC l'any 2025)."
          ]
        },
        {
          type: 'table',
          title: '2–3. Tipus de Col·lapses i Les 3 Metodologies de Recerca de Víctimes (MAN.SVES.000)',
          subtitle: 'Classificació d’esfondraments i fases de localització sota runa',
          headers: ['Concepte / Fase de Recerca', 'Definició i Mètode Oficial del Manual', 'Condició Operativa Clau'],
          rows: [
            ['Col·lapse Total vs. Parcial', 'Total: esfondrament complet de l’edifici · Parcial: només una part cedeix', 'Generen buits de supervivència o "triangles de vida" sota elements rígids'],
            ['Col·lapse Secundari', 'Segon esfondrament d’elements inestables mentre els bombers estan treballant', 'És el PRINCIPAL RISc MORTAL per als rescatadors (cal apuntalar i vigilar!)'],
            ['1. Recerca Física', 'Inspecció visual/auditiva superficial + Maniobra de CRIDA I ESCOLTA', 'Es demana silenci absolut, un bomber crida/pica i la resta escolten en cercle'],
            ['2. Recerca Instrumentalitzada', 'Ús de GEÒFONS (sensors sísmics/acústics de vibració) i CÀMERES endoscòpiques/pèrtiga', 'Exigeix aturar generadors i maquinària (silenci absolut amb 1 toc llarg de 3 s!)'],
            ['3. Recerca Canina (GRCR)', 'Gossos d’escombrat que fan la maniobra de VENTEIG (olor dispersa a l’aire)', 'La zona calenta ha d’estar LLIURE de personal i fum per no saturar l’olfacte del gos']
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 4 Apuntalaments',
      title: '4. Apuntalaments d’Emergència: Parts, Distància (≤ 1 m), Càrrega (1.000 kg) i Angles',
      subtitle: 'Sotapont, puntals i jaç de taulons, falques contraposades i apuntalament inclinat (45° a 60°).',
      blocks: [
        {
          type: 'text',
          heading: '4.1–4.3. Principis de l’Apuntalament d’Emergència i les Seves 3 Parts',
          paragraphs: [
            "Un apuntalament d'emergència no pretén reconstruir ni retornar l'estructura deformada a la seva posició original (no s'ha de forçar cap amunt fins a trencar-la!), sinó CONSOLIDAR i sostenir els elements danyats per evitar un col·lapse secundari i obrir un corredor segur per al rescat.",
            "Criteris numèrics oficials del manual MAN.SVES.000 (Cap. 4): 1) La distància màxima entre puntals consecutius NO POT SUPERAR 1 METRE (≤ 1 m); 2) Com a regla de càlcul ràpid de seguretat, es considera que cada puntal metàl·lic o de fusta ben aplomat suporta una càrrega màxima de 1.000 kg (1 TONA per puntal).",
            "Un apuntalament vertical consta sempre de 3 PARTS fonamentals (de dalt a baix): 1) SOTAPONT (tauló superior en contacte amb el sostre o biga danyada: la seva funció és RECOLLIR la càrrega), 2) PUNTALS (elements verticals de fusta o telescòpics metàl·lics amb falques contraposades: la seva funció és TRASLLADAR la càrrega de dalt a baix; han d'estar perfectament aplomats a 90° per evitar el vinclament!) i 3) JAÇ DE TAULONS o Solera (tauló inferior recolzat sobre el terra ferm o distribuïdor de planta: la seva funció és REPARTIR la càrrega sobre una superfície més gran per no punxar el forjat inferior!)."
          ]
        },
        {
          type: 'diagram',
          title: 'Esquema de les 3 Parts de l’Apuntalament (≤ 1 m · 1.000 kg), Marcatge INSARAG i Senyals Acústics',
          diagramType: 'shoring_insarag',
          caption:
            '1) De dalt a baix: Sotapont (recull) → Puntals (traslladen, separats ≤ 1 m, 1.000 kg/puntal) → Jaç de taulons (reparteix). 2) Marcatge INSARAG amb V de 50 cm (L-n vives, D-n mortes, C = Clear). 3) Senyals acústics d’alarma.'
        },
        {
          type: 'table',
          title: 'Tipologia d’Apuntalaments i Paràmetres Tècnics (MAN.SVES.000 Cap. 4)',
          subtitle: 'Verticals, horitzontals i inclinats (tornapuntes)',
          headers: ['Tipus d’Apuntalament', 'Aplicació Principal', 'Xifres i Angles Oficials d’Examen'],
          rows: [
            ['1. Apuntalament Vertical', 'Sostenir forjats, bigues, jàsseres o obertures (portes/finestres)', 'Separació entre puntals ≤ 1 m · Resistència considerada = 1.000 kg (1 t) per puntal'],
            ['2. Apuntalament Horitzontal (Estampidor)', 'Contenir dues parets paral·leles o les parets d’una rasa/excavació', 'Transmet l’empenta horitzontal d’un mur sà a l’altre'],
            ['3. Apuntalament Inclinat o Oblic', 'Estabilitzar façanes o murs de càrrega amb risc de bolcada cap a fora', 'Les TORNAPUNTES han de formar un angle òptim d’entre 45° i 60° amb el terra!']
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 5-6 INSARAG, 2×h i Senyals',
      title: '5–6. Senyalització INSARAG de Víctimes, Emplaçament (2 × h) i Senyals Acústics',
      subtitle: 'Marcatge V (50 cm), L-n, D-n i rombe C, distància de vehicles i codi de botzina/xiulet.',
      blocks: [
        {
          type: 'text',
          heading: '5. Senyalització INSARAG i 6. Seguretat Operativa (2 × h i Senyals Acústics)',
          paragraphs: [
            "En una zona de col·lapse s'utilitza cintes i bastons lluminosos (sticks químics): el color VERMELL indica zona de perill o accés prohibit (i una creu 'X' significa no passar), mentre que el color VERD indica ruta segura o accés habilitat.",
            "Per marcar la presència de VÍCTIMES sota la runa s'utilitza el sistema internacional INSARAG pintat amb esprai d'alta visibilitat (taronja/vermell): 1) Es pinta una gran lletra 'V' (de 50 cm d'alçada!) amb una fletxa que apunta cap al lloc exacte on es detecta una víctima potencial encara sense confirmar; 2) Un cop confirmades, s'escriu a sota de la V: 'L - n' (Live = nombre de víctimes VIVES confirmades, ex. L-2) i 'D - n' (Dead = nombre de víctimes MORTES confirmades, ex. D-1); 3) Quan les víctimes vives han estat rescatades es ratlla amb una línia horitzontal la fila L-n; i quan s'han extret TOTES les víctimes (vives i mortes), s'encercla o es dibuixa un rombe amb una 'C' (Clear = zona neta!). També s'utilitza el quadrat INSARAG d'avaluació d'estructura (dins del quadrat s'indica si és habitable/perillós, a dalt el perill [gas, aigua], a l'esquerra l'equip USAR, a la dreta la data/hora i a baix les víctimes).",
            "A l'arribada (Cap. 6.1), els vehicles d'emergència s'han d'emplaçar sempre a la PART ALTA del pendent i a una distància mínima de seguretat igual a DUES VEGADES L'ALÇADA DE L'EDIFICI (≥ 2 × h) o a una distància mínima de DUES EDIFICACIONS NO AFECTADES!"
          ]
        },
        {
          type: 'table',
          title: '6.5. Taula Oficial de Senyals Acústics d’Emergència en Col·lapses (MAN.SVES.000 pàg. 22)',
          subtitle: 'Codi universal de botzina / sirena / xiulet del Cap de Seguretat — MEMORITZACIÓ OBLIGATÒRIA!',
          headers: ['Ordre Operativa', 'Senyal Acústic Exacte', 'Representació Visual i Actuació Immediata'],
          rows: [
            ['🚨 EVACUAR IMMEDIATAMENT!', '3 tocs curts (d’1 segon cadascun)', '[ ▄  ▄  ▄ ] → Deixar les eines i sortir de la zona calenta pel camí segur cap al punt de reunió!'],
            ['✋ ATURAR OPERACIONS / SILENCI!', '1 toc llarg (de 3 segons)', '[ ▄▄▄▄ ] → Aturar tota maquinària, generadors i conversa (per escolta/geòfons o perill puntual)'],
            ['▶ CONTINUAR / REPRENDRE OPERACIONS', '1 toc llarg (3 s) + 1 toc curt (1 s)', '[ ▄▄▄▄  ▄ ] → Es reprèn l’activitat normal de rescat i desescombre'],
            ['🆘 S.O.S. (Bomber atrapat / Socors)', 'Tocs curts repetitius i continus', '[ ▄ ▄ ▄ ▄ ▄ ▄... ] → Activació immediata d’ajuda cap al punt d’emissió del so']
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Mode Nen Petit i Trucs',
      title: 'Síntesi Visual i Trucs Mnemotècnics: Apuntalaments i Codi de Xiulet',
      subtitle: 'Com no confondre mai els senyals acústics ni les parts d’un apuntalament.',
      blocks: [
        {
          type: 'easy',
          title: 'Mode Nen Petit: L’Entrepà de l’Apuntalament i el Semàfor Sonor de la Botzina!',
          metaphor:
            'Pensa en un apuntalament vertical com un entrepà que aguanta el sostre:',
          explanation:
            "• 1. El pa de DALT que toca el sostre es diu SOTAPONT (perquè va 'sota el pont/biga'): ell RECULL tot el pes.\n• 2. El farcit vertical del mig són els PUNTALS (posats com a molt a 1 metre l'un de l'altre, aguantant 1.000 kg cadascun): ells TRASLLADEN el pes cap a baix.\n• 3. El pa de BAIX que dorm sobre el terra es diu JAÇ DE TAULONS (un 'jaç' en català és un llit a terra!): ell REPARTEIX el pes perquè els puntals no foradin el terra!\n• I amb la botzina: si sents 'PI-PI-PI' (3 curts nerviosos d'1 segon) = CORRE i EVACUA! Si sents un sol 'PIIIIII' llarg (3 segons, com quan algú fa 'Xssssst, silenci!') = ATURA'T i fes SILENCI! Si sents 'PIIIIII - PI' (llarg + curt) = CONTINUA treballant!",
          takeaway: 'Sotapont (dalt, recull) → Puntals (mig, ≤ 1 m, 1.000 kg) → Jaç (baix, reparteix) | 3 curts = Evacuar | 1 llarg = Silenci/Aturar.'
        },
        {
          type: 'mnemonic',
          title: 'Regla Mnemotècnica · Avisos sonors en col·lapses estructurals (ampliable)',
          acronym: '1 i 3 → Tot Mort (parat)  |  1 i 1 → Tothom Torna (a treballar)',
          trick:
            '• "1 i 3" → Tot Mort (parat: aturada total de treballs i silenci).\n• "1 i 1" → Tothom Torna (a treballar: reprendre les tasques).\n• [Espai previst per afegir la resta d’avisos sonors a l’apartat de Regles Mnemotècniques].',
          example:
            'Quan escoltis la seqüència 1 i 3, atura’t en sec ("Tot Mort"). Quan soni 1 i 1, reprens la feina ("Tothom Torna").'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · Resum 1/2',
      title: 'Resum Imprescindible d’Examen (1/2) — INSARAG, GREC, Recerca i Apuntalaments',
      subtitle: 'Síntesi d’alta densitat dels Capítols 1 a 4 del manual MAN.SVES.000.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 1: Història, Recerca i Xifres d’Apuntalament',
          subtitle: 'Dades clau dels Capítols 1, 2, 3 i 4',
          headers: ['Concepte', 'Dada Oficial Exacta', 'Detall d’Examen'],
          rows: [
            ['Origen INSARAG i USAR', 'Terratrèmols Mèxic (1985) i Armènia (1988) → INSARAG (anys 90)', 'Centre OSOCC · Equips USAR: Lleugers, Mitjans i Pesats'],
            ['Grup GREC (Bombers)', 'Constituït oficialment l’any 2021 (certificació STRAC el 2025)', 'Intervencions: Badalona 2020/2024, Pont de Vilomara 2022, Armènia 2024'],
            ['3 Fases de Recerca', '1. Física (Crida i escolta) · 2. Instrumental (Geòfons/Càmeres) · 3. Canina (Venteig)', 'En recerca instrumental i canina cal silenci i zona lliure de personal'],
            ['Xifres de Puntals', 'Distància màxima entre puntals ≤ 1 metre · Resistència = 1.000 kg/puntal', 'No es busca aixecar l’estructura sinó consolidar-la'],
            ['3 Parts Apuntalament Vertical', '1. Sotapont (dalt: recull) → 2. Puntals (mig: traslladen) → 3. Jaç de taulons (baix: reparteix)', 'Falques sempre contraposades i puntals aplomats a 90°'],
            ['Apuntalament Inclinat', 'Tornapuntes amb angle òptim de 45° a 60° amb el terra', 'Per contenir façanes o murs amb risc de bolcada exterior']
          ]
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · Resum 2/2',
      title: 'Resum Imprescindible d’Examen (2/2) — Marcatge INSARAG, Emplaçament 2×h i Senyals Acústics',
      subtitle: 'Síntesi d’alta densitat dels Capítols 5 i 6 del manual MAN.SVES.000.',
      blocks: [
        {
          type: 'table',
          title: 'Quadre Sinòptic 2: Codis Visuals i Acústics de Seguretat en Col·lapses',
          subtitle: 'Dades clau dels Capítols 5 i 6',
          headers: ['Àmbit de Seguretat', 'Codi / Xifra Oficial Exacta', 'Significat Operatiu'],
          rows: [
            ['Cintes i Sticks de Color', 'Vermell = Perill / No passar (X) · Verd = Ruta segura', 'Abalisament dinàmic de corredors d’entrada i sortida'],
            ['Marcatge Víctimes INSARAG', 'Lletra "V" de 50 cm + fletxa · "L - n" (Vives) · "D - n" (Mortes)', 'Es ratlla en rescatar; quan s’evacuen totes es posa rombe "C" (Clear)'],
            ['Emplaçament de Vehicles', 'Distància mínima ≥ 2 × h (2 cops l’alçada) o 2 edificacions no afectades', 'Sempre estacionar a la part ALTA del pendent'],
            ['Senyal d’EVACUACIÓ', '3 tocs curts (d’1 segon cadascun: ▄ ▄ ▄)', 'Abandonar immediatament l’estructura cap al punt de reunió'],
            ['Senyal d’ATURAR / SILENCI', '1 toc llarg (de 3 segons: ▄▄▄▄)', 'Aturar eines i fer silenci absolut'],
            ['Senyal de CONTINUAR i SOS', 'Continuar = 1 llarg (3 s) + 1 curt (1 s) | SOS = tocs curts continus', 'Comunicació acústica universal a tota la zona calenta']
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't30-q1',
      difficulty: 'Fàcil',
      question: 'Segons el Capítol 6.5 del manual MAN.SVES.000, quin és el senyal acústic d’emergència que ordena EVACUAR IMMEDIATAMENT l’estructura col·lapsada i quin ordena ATURAR OPERACIONS / SILENCI?',
      options: [
        'Evacuar: 1 toc llarg de 3 s | Aturar: 3 tocs curts d’1 s.',
        'Evacuar immediatament: 3 tocs curts (d’1 segon cadascun) | Aturar operacions / Silenci: 1 toc llarg (de 3 segons).',
        'Evacuar: 1 toc llarg + 1 toc curt | Aturar: 2 tocs llargs.',
        'Evacuar: sirena contínua de 2 minuts.'
      ],
      correctIndex: 1,
      explanation: 'Taula 6.5 del manual: Evacuar = 3 tocs curts (1 s cadascun); Aturar operacions = 1 toc llarg (3 s); Continuar operacions = 1 toc llarg (3 s) + 1 toc curt; SOS = tocs curts repetitius continus.'
    },
    {
      id: 't30-q2',
      difficulty: 'Fàcil',
      question: 'En un apuntalament d’emergència (Cap. 4 del manual MAN.SVES.000), quina és la distància màxima permesa entre puntals i quina resistència màxima de càrrega es considera per a cada puntal?',
      options: [
        'Distància màxima: 2,5 metres | Resistència: 5.000 kg per puntal.',
        'Distància màxima entre puntals: ≤ 1 metre (no pot superar el metre) | Resistència màxima considerada: 1.000 kg (1 tona) per puntal.',
        'Distància màxima: 50 cm | Resistència: 200 kg per puntal.',
        'Distància màxima: 3 metres | Resistència: 10 tones per puntal.'
      ],
      correctIndex: 1,
      explanation: 'Segons el Capítol 4 del manual MAN.SVES.000, la distància entre puntals no ha de superar 1 metre i es calcula una capacitat portant segura de 1.000 kg (1 tona) per cada puntal.'
    },
    {
      id: 't30-q3',
      difficulty: 'Mitjà',
      question: 'Quines són les 3 parts fonamentals d’un apuntalament vertical ordenades de DALT a BAIX i quina funció compleix cadascuna?',
      options: [
        '1. Jaç de taulons (dalt) → 2. Tornapunta (mig) → 3. Sotapont (baix).',
        '1. Sotapont (a dalt, recull la càrrega) → 2. Puntals (al mig, traslladen la càrrega) → 3. Jaç de taulons (a baix sobre el terra, reparteix la càrrega).',
        '1. Biga → 2. Jàssera → 3. Sabata.',
        '1. Falca → 2. Puntal → 3. Pilastra.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 4.2 del manual: el Sotapont (superior) recull la càrrega de l’element danyat; els Puntals (verticals) la traslladen; i el Jaç de taulons (inferior) la reparteix al terra.'
    },
    {
      id: 't30-q4',
      difficulty: 'Mitjà',
      question: 'En un apuntalament inclinat o oblic per contenir un mur o façana, quin és l’angle òptim que han de formar les tornapuntes amb el terra?',
      options: [
        'Entre 10° i 20°.',
        'Entre 45° i 60°.',
        'Exactament 90°.',
        'Entre 75° i 85°.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 4.3 del manual: en els apuntalaments inclinats les tornapuntes treballen de manera òptima formant un angle d’entre 45° i 60° amb l’horitzontal.'
    },
    {
      id: 't30-q5',
      difficulty: 'Mitjà',
      question: 'A quina distància mínima de seguretat s’han d’emplaçar els vehicles d’emergència en arribar a una estructura amb risc de col·lapse segons l’apartat 6.1?',
      options: [
        'Just davant de la porta principal de l’edifici.',
        'A una distància mínima de 2 vegades l’alçada de l’edifici (2 × h) o a una distància mínima de dues edificacions no afectades (i sempre a la part alta del pendent).',
        'A 5 metres de la façana.',
        'A 500 metres en tots els casos.'
      ],
      correctIndex: 1,
      explanation: 'Els vehicles s’han d’ubicar a la part alta del pendent i a una distància mínima de 2 × h (dues vegades l’alçada de l’edificació) o superant dues edificacions sanes.'
    },
    {
      id: 't30-q6',
      difficulty: 'Fàcil',
      question: 'En quin any es va constituir oficialment el GREC (Grup de Recolzament en Estructures Col·lapsades) als Bombers de la Generalitat i quins dos terratrèmols històrics van motivar la creació d’INSARAG?',
      options: [
        'GREC: 1997 | Terratrèmols de Lisboa i San Francisco.',
        'GREC: 2021 (amb procés de certificació STRAC el 2025) | Terratrèmols de Mèxic (1985) i Armènia (1988).',
        'GREC: 2010 | Terratrèmols d’Haití i Japó.',
        'GREC: 2007 | Terratrèmol de Lorca.'
      ],
      correctIndex: 1,
      explanation: 'Capítol 1 del manual MAN.SVES.000: INSARAG neix arran dels terratrèmols de Mèxic (1985) i Armènia (1988), i el GREC es constitueix oficialment a Bombers de la Generalitat l’any 2021.'
    },
    {
      id: 't30-q7',
      difficulty: 'Mitjà',
      question: 'En el sistema de marcatge INSARAG de víctimes sobre una estructura col·lapsada, què indiquen la lletra "V" (de 50 cm), els codis "L - 2", "D - 1" i un rombe amb una "C" (Clear)?',
      options: [
        'V = Vehicle; L = Lleu; D = Desaparegut; C = Col·lapse.',
        'V = ubicació de víctima potencial; L - 2 = 2 víctimes Vives confirmades (Live); D - 1 = 1 víctima Morta confirmada (Dead); C = Clear (totes les víctimes ja han estat evacuades).',
        'V = Verd; L = Lliure; D = Dins; C = Calent.',
        'Indiquen el nombre de plantes de l’edifici.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 5.2 del manual: V (50 cm) assenyala el punt de víctimes; L-n indica vives (Live); D-n indica mortes (Dead); es ratlla en extreure-les i es tanca amb C (Clear) quan s’ha buidat el punt.'
    },
    {
      id: 't30-q8',
      difficulty: 'Fàcil',
      question: 'Quina maniobra olfactiva utilitzen els gossos de recerca (GRCR) en estructures col·lapsades i quina condició ha de complir la zona calenta?',
      options: [
        'Maniobra de rastreig amb corretja curta i 20 bombers caminant al costat.',
        'Maniobra de VENTEIG (detecció del con d’olor humana dispers a l’aire que surt d’entre la runa), amb la zona en silenci i LLIURE de personal per no contaminar l’olor.',
        'Maniobra aquàtica.',
        'Només s’utilitzen gossos quan ja s’ha retirat tota la runa amb excavadores.'
      ],
      correctIndex: 1,
      explanation: 'En estructures col·lapsades (apartat 3.3), els gossos treballen per VENTEIG (olor en l’aire) i cal retirar el personal de la zona calenta perquè els gossos no marquin els mateixos bombers.'
    },
    {
      id: 't30-q9',
      difficulty: 'Fàcil',
      question: 'Quin senyal acústic indica als equips de rescat que poden CONTINUAR o REPRENDRE les operacions després d’una parada?',
      options: [
        '3 tocs curts.',
        '1 toc llarg (de 3 segons) seguit d’1 toc curt (d’1 segon): [ ▄▄▄▄  ▄ ].',
        '1 sol toc llarg de 3 segons.',
        'Tocs curts repetitius continus.'
      ],
      correctIndex: 1,
      explanation: '1 toc llarg (3 s) + 1 toc curt indica "Continuar / Reprendre operacions".'
    },
    {
      id: 't30-q10',
      difficulty: 'Fàcil',
      question: 'Quins aparells s’utilitzen en la Fase 2 de Recerca Instrumentalitzada per detectar mínimes vibracions o cops de víctimes sepultades sota metres de runa?',
      options: [
        'Els explosímetres i anemòmetres.',
        'Els GEÒFONS (sensors sísmics i acústics d’alta sensibilitat) i les càmeres endoscòpiques o de pèrtiga.',
        'Els dosímetres de radiació.',
        'Els higròmetres.'
      ],
      correctIndex: 1,
      explanation: 'Apartat 3.2 del manual: la recerca instrumentalitzada empra geòfons (detecció acústica/sísmica de vibracions) i càmeres de cerca visual en cavitats.'
    }
  ]
};
