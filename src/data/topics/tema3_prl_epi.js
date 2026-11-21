export const tema3PrlEpi = {
  id: 'tema-3',
  number: 3,
  code: 'Llei 31/1995 · RD 773/1997 · Reglament (UE) 2016/425 · Guia INSST',
  title: 'Prevenció de Riscos Laborals (PRL) i Equips de Protecció Individual (EPI)',
  category: 'Legislació i Normativa — Bloc General',
  estimatedMinutes: 60,
  importance: {
    title: 'Anàlisi d\'Importància · Tema 3',
    frequency: 'Molt Alta (Fix a examen)',
    summary:
      'Cal dominar l\'abast de les exclusions als serveis d\'emergències (art. 3.2 LPRL i art. 2.2.b RD 773/1997), l\'ordre estricte dels principis de l\'acció preventiva (art. 15), la regla de l\'EPI com a última barrera (art. 17.2), les categories I-II-III del Reglament (UE) 2016/425 i les xifres dels delegats de prevenció.',
    hotTopics: [
      'Exclusió per SITUACIÓ (greu risc/catàstrofe, art. 3.2 LPRL), no exclusió del cos de bombers',
      'Art. 15 LPRL (9 principis: evitar → avaluar → origen → col·lectiva) i art. 17.2 EPI',
      'Paralització per risc greu i imminent (art. 21: 24 h) vs Inspecció (art. 44: 3d hàbils / 24 h)',
      'Reglament (UE) 2016/425: Cat. I (≤ 50 °C), Cat. II, Cat. III (13 riscos mortals, CE + 4 xifres)'
    ],
    traps: [
      'La Llei 31/1995 té els arts. 46–52 DEROGATS (van passar a la LISOS); a l\'Administració s\'imposen mesures correctores, NO multes (art. 45).',
      'Art. 8 RD 773/1997: informar al treballador PREFERENTMENT per escrit (no "obligatòriament").',
      'La Guia Tècnica de l\'INSST NO és vinculant jurídicament!'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Llei 31/1995 Base',
      title: '1. Llei 31/1995 de Prevenció de Riscos Laborals: Àmbit i Principis',
      subtitle: 'Quan s\'aplica als bombers i quina és l\'escala obligatòria de protecció',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '1.1 Àmbit (art. 3.2) i definicions clau (art. 4)',
          paragraphs: [
            'L\'article 3.2 NO exclou el cos de bombers com a col·lectiu, sinó que exclou les activitats de protecció civil i peritatge forense en situacions de greu risc, catàstrofe i calamitat pública (on la Llei "inspirarà" la normativa específica). En la resta del dia a dia al parc, la LPRL s\'aplica plenament.',
            'L\'article 4 recull 8 definicions clau: risc laboral (probabilitat + severitat), risc greu i imminent (exposició probable en un futur immediat que pugui causar dany greu), equip de treball (qualsevol màquina/aparell/eina) i EPI (equip portat o subjectat pel treballador per protegir-se).'
          ]
        },
        {
          type: 'text',
          heading: '1.2 Els 9 principis d\'acció preventiva (art. 15) i l\'EPI (art. 17.2)',
          paragraphs: [
            'L\'article 15 fixa 9 principis en ordre jeràrquic estricte: a) Evitar els riscos; b) Avaluar els que no es puguin evitar; c) Combatre\'ls a l\'origen; ... fins a h) Anteposar la protecció col·lectiva a la individual.',
            'L\'art. 15.4 obliga l\'empresari a preveure les distraccions o imprudències NO temeràries que pogués cometre el treballador. L\'art. 16 exigeix Pla de prevenció, Avaluació de riscos i Planificació preventiva, i l\'art. 17.2 consagra l\'EPI com l\'última barrera.'
          ]
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Per què els bombers tenen una "excepció" a l\'art. 3.2?',
          metaphor: 'Un fuster pot parar la serra si plou, però un bomber no pot dir "no apago aquest foc perquè hi ha fum".',
          explanation:
            'La llei diu: quan esteu fent manteniment al parc o formació, sou treballadors normals amb tota la Llei 31/1995. Però quan sona la sirena i entreu en una catàstrofe real (art. 3.2), les regles normals queden en suspens per la situació límit, tot i que la llei segueix inspirant els vostres protocols i els vostres EPI.',
          takeaway: 'Art. 3.2 exclou per SITUACIÓ (catàstrofe), mai exclou el bomber del tot.'
        },
        {
          type: 'diagram',
          title: 'Escala Preventiva (art. 15 LPRL) i Categories EPI (UE 2016/425)',
          diagramType: 'prl_hierarchy',
          caption: 'Mai pots passar a l\'EPI sense haver intentat abans evitar, avaluar, combatre a l\'origen i posar protecció col·lectiva.'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Drets, Paralització i Òrgans',
      title: '2. Paralització, Vigilància de la Salut, Maternitat i Representació',
      subtitle: 'Terminis d\'actuació, recursos preventius i delegats de prevenció',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '2.1 Paralització per risc greu i imminent: art. 21 vs art. 44 (No confondre!)',
          paragraphs: [
            'Via interna (art. 21 LPRL): davant un risc greu i imminent, el treballador té dret a interrompre l\'activitat i abandonar el lloc. Si l\'empresari no adopta mesures, els representants legals dels treballadors poden acordar per majoria la paralització de l\'activitat i comunicar-ho immediatament a l\'empresa i a l\'autoritat laboral, la qual ratifica o anul·la la paralització en 24 hores.',
            'Via d\'Inspecció de Treball (art. 44 LPRL): quan qui ordena la paralització immediata és l\'Inspector de Treball i Seguretat Social, l\'empresa la pot impugnar davant l\'autoritat laboral en el termini de 3 dies hàbils, i l\'autoritat laboral resol també en 24 hores.'
          ]
        },
        {
          type: 'text',
          heading: '2.2 Vigilància de la salut (art. 22), documentació (23) i maternitat (26)',
          paragraphs: [
            'La vigilància de la salut (art. 22) és voluntària amb 3 excepcions (imprescindible per avaluar efectes sobre la salut, risc per a tercers o el propi treballador, o disposició legal); a l\'empresa només arriben les conclusions sobre l\'aptitud.',
            'L\'art. 23 exigeix 5 documents (inclosa la notificació d\'accidents amb incapacitat > 1 dia). L\'art. 26 protegeix la maternitat en 4 esglaons: adaptació del lloc → canvi de lloc → suspensió amb prestació → extensió a la lactància natural (< 9 mesos).'
          ]
        },
        {
          type: 'text',
          heading: '2.3 Organització preventiva (art. 30) i recursos preventius (art. 32 bis)',
          paragraphs: [
            'Modalitats organitzatives (art. 30): fins a 10 treballadors (o fins a 25 en un únic centre) ho pot assumir personalment l\'empresari; més de 500 treballadors (o 250–500 en activitats perilloses de l\'Annex I) exigeix Servei de Prevenció Propi.',
            'Els recursos preventius (art. 32 bis) vigilen el compliment de les activitats preventives en riscos especials o activitats simultànies i requereixen formació mínima de nivell bàsic.'
          ]
        },
        {
          type: 'table',
          title: 'Delegats de Prevenció (art. 35) i Comitè de Seguretat i Salut (art. 38)',
          subtitle: 'Escala oficial de representació (participació des de ≥ 6 treballadors)',
          headers: ['Plantilla (treballadors)', 'Delegats de Prevenció', 'Regles d\'òrgans i terminis'],
          rows: [
            ['31 a 49', '1 Delegat (de 6 a 30: el delegat de personal)', 'Informes dels delegats: termini de 15 dies'],
            ['50 a 100', '2 Delegats', 'Comitè Seguretat i Salut: obligatori a partir de 50 treballadors'],
            ['101 a 500', '3 Delegats', 'Comitè paritari (Delegats + igual núm. representants empresa)'],
            ['501 a 1.000', '4 Delegats', 'Reunions del Comitè: com a mínim TRIMESTRALS'],
            ['1.001 a 2.000', '5 Delegats', 'Arts. 46–52 LPRL: DEROGATS (passats a la LISOS)'],
            ['2.001 a 3.000 / 3.001–4.000 / >4.000', '6 / 7 / 8 Delegats', 'Art. 45: a l\'Administració mesures correctores, NO multa']
          ],
          footnote: 'Art. 20 mesures d\'emergència: 3 mesures internes (primers auxilis, lluita contra incendis, evacuació) + 4 serveis externs.'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · RD 773/97 i Regl. UE 2016/425',
      title: '3. RD 773/1997, Reglament (UE) 2016/425 i Guia INSST',
      subtitle: 'Elecció de l\'EPI, categories de risc i límits tècnics',
      isSummary: false,
      blocks: [
        {
          type: 'text',
          heading: '3.1 RD 773/1997: exclusions (art. 2.2), elecció (art. 6) i informació (art. 8)',
          paragraphs: [
            'L\'article 2.2 del RD 773/1997 llista 7 exclusions del concepte d\'EPI — la lletra b) són els "equips dels serveis de socors i salvament" —, però l\'art. 17.2 LPRL continua obligant igualment a donar protecció adequada.',
            'L\'elecció de l\'EPI (art. 6) segueix 3 passos estrictes: 1) Analitzar i avaluar els riscos; 2) Definir les característiques necessàries de l\'EPI; 3) Comparar-les amb els equips disponibles.',
            'L\'art. 7 estableix l\'ús personal en principi i seguir les instruccions del fabricant. L\'art. 8 obliga a informar prèviament el treballador, PREFERENTMENT per escrit (no obligatòriament!). L\'Annex IV està suprimit (queden Annex I parts del cos, II llista orientativa d\'equips i III activitats).'
          ]
        },
        {
          type: 'text',
          heading: '3.2 Reglament (UE) 2016/425: classificació del RISC (Categories I, II i III)',
          paragraphs: [
            'El Reglament (UE) 2016/425 classifica el RISC del qual protegeix l\'equip, NO l\'equip en si mateix:',
            '• Categoria I: 5 riscos mínims (inclou manipulació de peces calentes amb T ≤ 50 °C).',
            '• Categoria II: riscos intermedis (tots els no inclosos ni a la I ni a la III).',
            '• Categoria III: 13 supòsits de risc mortal o danys irreversibles (manca d\'oxigen, altes T ≥ 100 °C, baixes T ≤ -50 °C, caigudes d\'altura, tensió elèctrica, ofegament, serres de cadena, alta pressió, bala/arma blanca, soroll nociu...); exigeix marcatge CE seguit de 4 xifres de l\'organisme notificat.'
          ]
        },
        {
          type: 'table',
          title: 'Guia Tècnica INSST (NO vinculant): Caigudes, Guants i Roba de Fred',
          subtitle: 'Dades tècniques molt preguntades en oposicions de bombers',
          headers: ['Àmbit Guia INSST', 'Xifres i normes de seguretat clau'],
          rows: [
            ['Sistemes anticaigudes', '4 tipus: Retenció, Subjecció, Accés per corda, Anticaigudes · Límit força de xoc: 6 kN'],
            ['Ancoratges EPI', 'Només són EPI els ancoratges mòbils/provisionals tipus B i E (els fixos A, C, D NO són EPI)'],
            ['Factor de caiguda', 'Ideal treballar en Factor 0 (ancoratge per sobre del cap)'],
            ['Guants amb parts mòbils', 'NO usar guants amb resistència a l\'esquinçament ≥ 1 (risc d\'atrapament!)'],
            ['Perforació i fred', 'La resistència a la perforació NO inclou agulles hipodèrmiques · Roba de fred: -5 °C a -50 °C']
          ],
          footnote: 'Senyals d\'obligació (EPI): forma rodona, pictograma blanc sobre fons blau (≥ 50% de la superfície). Senyals d\'emergència: verds ("usar només en cas d\'emergència").'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Resum I (LPRL)',
      title: '4. Resum Imprescindible (I): Llei 31/1995 de Prevenció',
      subtitle: 'Articles, terminis i escala de delegats',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · Llei 31/1995 (LPRL)',
          subtitle: 'Els punts més preguntats del bloc PRL',
          headers: ['Article', 'Contingut essencial'],
          rows: [
            ['Art. 3.2', 'Exclou per SITUACIÓ (greu risc, catàstrofe, calamitat), no el cos; la llei inspira la normativa'],
            ['Art. 15', '9 principis: 1r Evitar, 2n Avaluar, 3r Combatre a l\'origen ... 8è Col·lectiva abans que individual'],
            ['Art. 15.4', 'Preveure distraccions i imprudències NO temeràries'],
            ['Art. 17.2', 'EPI = última barrera quan el risc no es pot evitar o limitar prou'],
            ['Art. 21 vs 44', '21 (representants): autoritat resol 24h | 44 (inspector): impugnació 3d hàbils, resol 24h'],
            ['Art. 35 / 38', 'Delegats: 31-49 (1), 50-100 (2)... >4000 (8) · Comitè: ≥ 50 treballadors, paritari, trimestral']
          ],
          footnote: 'Art. 45: a l\'Administració Pública s\'imposen mesures correctores, mai sancions econòmiques.'
        },
        {
          type: 'mnemonic',
          title: 'Regla 24 h / 3 dies / 15 dies',
          trick: 'Autoritat laboral en paralització = 24 h. Impugnar inspector (art. 44) = 3 dies hàbils. Informes delegats = 15 dies.',
          example: 'Si el Comitè de Seguretat i Salut es reuneix 1 cop cada 3 mesos (trimestral), calen mínim 50 treballadors per constituir-lo.'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Resum II (EPI i UE)',
      title: '5. Resum Imprescindible (II): EPI, UE 2016/425 i Guia INSST',
      subtitle: 'Classificació per risc, RD 773/1997 i límits tècnics',
      isSummary: true,
      blocks: [
        {
          type: 'table',
          title: 'Taula llampec · EPI i Normativa Europea',
          subtitle: 'Tot el bloc d\'equips de protecció',
          headers: ['Norma', 'Dades clau d\'examen'],
          rows: [
            ['RD 773/97 Art. 2.2.b', 'Exclou equips de socors i salvament (però art. 17.2 LPRL obliga igualment)'],
            ['RD 773/97 Art. 6', 'Ordre elecció: 1. Analitzar/avaluar → 2. Definir característiques → 3. Comparar'],
            ['RD 773/97 Art. 8', 'Informar prèviament al treballador PREFERENTMENT per escrit'],
            ['Regl. UE 2016/425', 'Classifica el RISC: Cat I (≤ 50 °C), Cat II, Cat III (13 riscos mortals, CE + 4 xifres)'],
            ['Guia INSST (NO vinc.)', 'Anticaigudes màx 6 kN · Ancoratges EPI només B i E · No guant esquinçament ≥ 1 amb parts mòbils']
          ],
          footnote: 'Annexos RD 773/97: I (parts del cos), II (llista no exhaustiva equips), III (activitats), IV (suprimit).'
        },
        {
          type: 'easy',
          title: 'Mode Nen Petit · Les 4 xifres del marcatge CE en EPI Cat. III',
          metaphor: 'Un casc d\'obra (Cat. II) protegeix d\'un cop; un ERA o un arnès (Cat. III) et salva de morir en segons.',
          explanation:
            'Per això la Unió Europea exigeix que als EPI de Categoria III no n\'hi hagi prou amb el segell "CE" del fabricant: un laboratori independent (organisme notificat) els vigila cada any i hi estampa el seu número de 4 xifres al costat del CE.',
          takeaway: 'Cat. I: risc mínim (≤ 50 °C). Cat. III: risc mortal (13 supòsits) → CE + 4 xifres.'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 't3-q1',
      difficulty: 'Mitjà',
      question: 'Com s\'aplica l\'article 3.2 de la Llei 31/1995 (LPRL) als serveis de bombers i protecció civil?',
      options: [
        'Exclou per raó de la situació les activitats operatives en casos de greu risc, catàstrofe i calamitat pública, tot i que la llei ha d\'inspirar la normativa',
        'Exclou de manera absoluta i permanent tot el col·lectiu de bombers i protecció civil de qualsevol obligació preventiva regulada a la llei',
        'Només s\'aplica als bombers voluntaris i col·laboradors ocasionals en activitats formatives, però mai als funcionaris de carrera en guàrdia ordinària',
        'Obliga a imposar sancions econòmiques directes al cap de parc i a l\'entitat pública quan es produeixi un accident en acte de servei operatiu'
      ],
      correctIndex: 0,
      explanation: 'L\'art. 3.2 exclou la situació concreta de greu risc, catàstrofe i calamitat pública, no el col·lectiu de manera absoluta.'
    },
    {
      id: 't3-q2',
      difficulty: 'Fàcil',
      question: 'Quin és el primer principi de l\'acció preventiva segons l\'article 15 de la LPRL?',
      options: [
        'Evitar els riscos',
        'Avaluar els riscos',
        'Lliurar equips de protecció individual',
        'Combatre els riscos en el seu origen'
      ],
      correctIndex: 0,
      explanation: 'L\'ordre de l\'art. 15 comença sempre per: a) Evitar els riscos; b) Avaluar els inevitables; c) Combatre\'ls a l\'origen.'
    },
    {
      id: 't3-q3',
      difficulty: 'Mitjà',
      question: 'Si els representants dels treballadors acorden la paralització d\'una activitat per risc greu i imminent (art. 21.3 LPRL), en quin termini l\'ha de ratificar o anul·lar l\'autoritat laboral?',
      options: [
        '24 hores',
        '3 dies hàbils',
        '15 dies',
        '48 hores'
      ],
      correctIndex: 0,
      explanation: 'Tant en l\'art. 21.3 com en l\'art. 44, l\'autoritat laboral resol en 24 hores (3 dies hàbils és el termini de l\'empresa per impugnar la decisió de l\'inspector a l\'art. 44).'
    },
    {
      id: 't3-q4',
      difficulty: 'Mitjà',
      question: 'A partir de quants treballadors és obligatori constituir un Comitè de Seguretat i Salut i cada quant s\'ha de reunir com a mínim?',
      options: [
        '50 o més treballadors; reunió trimestral',
        '30 o més treballadors; reunió mensual',
        '50 o més treballadors; reunió semestral',
        '100 o més treballadors; reunió trimestral'
      ],
      correctIndex: 0,
      explanation: 'Art. 38 LPRL: a partir de 50 treballadors, composició paritària i reunió com a mínim trimestral.'
    },
    {
      id: 't3-q5',
      difficulty: 'Difícil',
      question: 'Quants Delegats de Prevenció corresponen a un centre de treball o empresa amb 650 treballadors?',
      options: [
        '4 delegats',
        '3 delegats',
        '5 delegats',
        '6 delegats'
      ],
      correctIndex: 0,
      explanation: 'Escala art. 35: 31–49 (1), 50–100 (2), 101–500 (3), 501–1000 (4), 1001–2000 (5).'
    },
    {
      id: 't3-q6',
      difficulty: 'Mitjà',
      question: 'Com s\'ha d\'informar el treballador sobre els riscos dels quals el protegeix l\'EPI segons l\'article 8 del RD 773/1997?',
      options: [
        'Prèviament i preferentment per escrit',
        'Obligatòriament per escrit davant notari',
        'Únicament de manera verbal al parc',
        'Només després que es produeixi un incident'
      ],
      correctIndex: 0,
      explanation: 'Trampa freqüent: l\'art. 8 RD 773/1997 diu "preferentment per escrit", no obligatòriament.'
    },
    {
      id: 't3-q7',
      difficulty: 'Fàcil',
      question: 'Què classifica el Reglament (UE) 2016/425 en Categories I, II i III, i quin marcatge porta la Categoria III?',
      options: [
        'Classifica el risc; la Categoria III porta marcatge CE seguit de 4 xifres de l\'organisme notificat',
        'Classifica el material de fabricació; la Categoria I porta CE + 4 xifres',
        'Classifica el preu de l\'equip; la Categoria II porta CE + 4 xifres',
        'Classifica els fabricants; la Categoria III no necessita marcatge CE'
      ],
      correctIndex: 0,
      explanation: 'El Reglament classifica el RISC (no l\'equip) en I, II i III (13 supòsits de mort o danys irreversibles, amb CE + 4 xifres).'
    },
    {
      id: 't3-q8',
      difficulty: 'Difícil',
      question: 'Segons la Guia Tècnica de l\'INSST, quina característica tenen els ancoratges per a treballs en alçada que SÍ es consideren EPI?',
      options: [
        'Només els ancoratges provisionals/mòbils de tipus B i tipus E; força de xoc limitada a 6 kN',
        'Els ancoratges estructurals fixos de tipus A, C i D; força de xoc limitada a 12 kN màxims',
        'Tots els dispositius d\'ancoratge de les classes A a la E indistintament si porten marcatge CE',
        'Els ancoratges de tipus A i B únicament, regulats per la Guia INSST amb rang de Llei Orgànica'
      ],
      correctIndex: 0,
      explanation: 'Només els tipus B i E són EPI (A, C, D són dispositius fixos estructurals), el límit de força de xoc anticaigudes és 6 kN i la Guia INSST no és vinculant.'
    },
    {
      id: 't3-q9',
      difficulty: 'Mitjà',
      question: 'Quin senyal de seguretat indica l\'ús obligatori d\'un EPI i quina condició cromàtica ha de complir?',
      options: [
        'Forma rodona, pictograma blanc sobre fons blau (que ocupi com a mínim el 50% del senyal)',
        'Forma triangular, pictograma negre sobre fons groc (que ocupi com a mínim el 50% del senyal)',
        'Forma quadrada o rectangular, pictograma blanc sobre fons verd (d\'ús obligatori en emergències)',
        'Forma rodona, pictograma negre sobre fons blanc amb vora i franja diagonal de color vermell'
      ],
      correctIndex: 0,
      explanation: 'Obligació = rodona blanca sobre blau (≥ 50% blau). El color verd correspon als senyals d\'emergència/salvament.'
    },
    {
      id: 't3-q10',
      difficulty: 'Difícil',
      question: 'Quan NO s\'han d\'utilitzar guants de protecció mecànica prop de màquines amb parts mòbils segons la Guia Tècnica INSST?',
      options: [
        'Quan tinguin una resistència a l\'esquinçament igual o superior a 1, pel risc d\'atrapament',
        'Quan tinguin resistència certificada a la perforació per punxada d\'agulles hipodèrmiques',
        'Quan estiguin certificats per protegir contra baixes temperatures inferiors a -50 °C',
        'Sempre que disposin de marcatge CE de Categoria II per a riscos mecànics intermedis'
      ],
      correctIndex: 0,
      explanation: 'Amb parts mòbils, un guant massa resistent a l\'esquinçament (≥ 1) no es trenca si s\'enganxa i pot arrossegar la mà cap a la màquina.'
    },
    {
      id: 't3-q11',
      difficulty: 'Mitjà',
      question: 'Quina afirmació és INCORRECTA respecte a la paralització d\'activitats per risc greu i imminent a la LPRL?',
      options: [
        'Quan la paralització l\'ordenen els representants dels treballadors (art. 21.3), l\'empresa disposa de 3 dies hàbils per impugnar-la davant l\'Inspector de Treball',
        'A l\'art. 21.3, l\'autoritat laboral ha de ratificar o anul·lar la paralització en un termini de 24 hores',
        'Quan la paralització l\'ordena l\'Inspector de Treball (art. 44), l\'empresa la pot impugnar en 3 dies hàbils davant l\'autoritat laboral',
        'Tant a l\'art. 21.3 com a l\'art. 44, l\'autoritat laboral resol en un termini de 24 hores'
      ],
      correctIndex: 0,
      explanation: 'El termini de 3 dies hàbils per impugnar correspon únicament a la paralització ordenada per l\'Inspector de Treball (art. 44 LPRL), no a la dels representants de l\'art. 21.3.'
    },
    {
      id: 't3-q12',
      difficulty: 'Mitjà',
      question: 'Segons l\'article 15.4 de la Llei 31/1995, quines actuacions del treballador ha de preveure l\'efectivitat de les mesures preventives?',
      options: [
        'Les distraccions o imprudències no temeràries que pogués cometre el treballador',
        'Només les imprudències temeràries i els actes dolosos',
        'Únicament les errades tècniques de les màquines, mai el factor humà',
        'Exclusivament les distraccions fora de l\'horari laboral'
      ],
      correctIndex: 0,
      explanation: 'L\'art. 15.4 LPRL exigeix que les mesures preventives prevegin les distraccions o imprudències NO temeràries del treballador.'
    },
    {
      id: 't3-q13',
      difficulty: 'Difícil',
      question: 'Quin règim sancionador s\'aplica a les Administracions Públiques quan incompleixen la normativa de PRL segons l\'article 45 de la LPRL?',
      options: [
        'S\'imposen mesures correctores (requeriments), però NO multes o sancions econòmiques; a més, els arts. 46–52 de la LPRL estan derogats',
        'S\'imposen les mateixes multes econòmiques que a les empreses privades d\'acord amb l\'escala dels arts. 46–52 vigents de la LPRL',
        'S\'ordena el tancament definitiu del centre de treball públic fins a l\'execució total de les mesures correctores per l\'òrgan gestor',
        'Només s\'apliquen sancions econòmiques directes si el centre públic té constituït un Comitè de Seguretat i Salut paritari'
      ],
      correctIndex: 0,
      explanation: 'Art. 45 LPRL: a les AAPP no se\'ls imposen multes econòmiques sinó mesures correctores. Els arts. 46–52 van quedar derogats en passar a la LISOS.'
    },
    {
      id: 't3-q14',
      difficulty: 'Mitjà',
      question: 'Quines són les 3 excepcions en què la vigilància de la salut (art. 22 LPRL) deixa de ser voluntària per al treballador?',
      options: [
        'Quan sigui imprescindible per avaluar efectes sobre la salut, per verificar si l\'estat del treballador pot ser un perill per a ell o tercers, o quan ho estableixi una disposició legal',
        'Sempre que ho sol·liciti el delegat de prevenció, el cap de servei per sospita d\'aptitud o bé amb caràcter general cada 6 mesos per defecte',
        'Únicament en centres de treball de més de 500 treballadors, en activitats administratives de risc baix o per acord unilateral de la direcció',
        'La vigilància de la salut és sempre estrictament voluntària per al treballador i no admet cap excepció legal ni reglamentària en cap sector'
      ],
      correctIndex: 0,
      explanation: 'L\'art. 22.1 LPRL fixa aquestes 3 excepcions taxades (sempre amb informe previ dels representants dels treballadors), i l\'empresa només rep conclusions d\'aptitud.'
    },
    {
      id: 't3-q15',
      difficulty: 'Difícil',
      question: 'A partir de quina plantilla mínima és obligatori constituir un Servei de Prevenció Propi segons l\'art. 30 LPRL i el Reglament dels Serveis de Prevenció?',
      options: [
        'Més de 500 treballadors (o entre 250 i 500 en activitats de l\'Annex I)',
        'Més de 50 treballadors en qualsevol sector',
        'Més de 250 treballadors en activitats d\'oficina i més de 100 en indústria',
        'Més de 1.000 treballadors sempre'
      ],
      correctIndex: 0,
      explanation: 'Servei de Prevenció Propi: > 500 treballadors en general, o entre 250 i 500 si realitza activitats perilloses de l\'Annex I. (L\'empresari pot assumir-ho fins a 10 treballadors, o 25 en un sol centre).'
    },
    {
      id: 't3-q16',
      difficulty: 'Mitjà',
      question: 'Quin és l\'ordre estricte dels 3 passos per escollir un EPI segons l\'article 6 del RD 773/1997?',
      options: [
        '1) Analitzar i avaluar riscos → 2) Definir característiques de l\'EPI → 3) Comparar amb els equips disponibles',
        '1) Comparar preus al mercat → 2) Provar l\'EPI → 3) Avaluar els riscos',
        '1) Lliurar l\'EPI al treballador → 2) Redactar instruccions → 3) Avaluar el risc residual',
        '1) Definir característiques → 2) Comprar Categoria III → 3) Analitzar riscos'
      ],
      correctIndex: 0,
      explanation: 'Art. 6 RD 773/1997: 1r Analitzar/avaluar riscos; 2n Definir característiques necessàries; 3r Comparar amb els equips existents. (I l\'Annex IV està suprimit).'
    },
    {
      id: 't3-q17',
      difficulty: 'Difícil',
      question: 'Quina afirmació és INCORRECTA respecte a la Guia Tècnica de l\'INSST i els EPI?',
      options: [
        'La resistència a la perforació dels guants protegeix també contra punxades d\'agulles hipodèrmiques',
        'El factor de caiguda ideal de treball en sistemes anticaigudes és el Factor 0 (ancoratge per sobre del cap)',
        'La Guia Tècnica de l\'INSST no és jurídicament vinculant',
        'La roba de protecció contra el fred cobreix temperatures d\'entre -5 °C i -50 °C'
      ],
      correctIndex: 0,
      explanation: 'La Guia Tècnica de l\'INSST adverteix expressament que la resistència a la perforació mecànica dels guants NO inclou les agulles hipodèrmiques.'
    },
    {
      id: 't3-q18',
      difficulty: 'Fàcil',
      question: 'Quin nivell de protecció tèrmica correspon a un EPI de Categoria I segons el Reglament (UE) 2016/425?',
      options: [
        'Riscos mínims, com la manipulació de peces calentes a temperatures no superiors a 50 °C',
        'Altes temperatures equivalents a 100 °C o més, amb flama o radiació',
        'Baixes temperatures iguals o inferiors a -50 °C',
        'Tots els equips destinats a protegir contra caigudes d\'altura'
      ],
      correctIndex: 0,
      explanation: 'T ≤ 50 °C és Categoria I (5 riscos mínims). Altes T (≥ 100 °C), baixes T (≤ -50 °C) i caigudes d\'altura són Categoria III (13 riscos mortals/irreversibles).'
    },
    {
      id: 't3-q19',
      difficulty: 'Mitjà',
      question: 'A partir de quants treballadors es canalitza la participació preventiva mitjançant representants (Delegats de Prevenció) segons la LPRL?',
      options: [
        'A partir de deu treballadors',
        'A partir de sis treballadors',
        'A partir de trenta treballadors',
        'A partir de cinquanta treballadors'
      ],
      correctIndex: 1,
      explanation: 'En empreses o centres de treball amb 6 o més treballadors, la participació es canalitza a través dels representants (Delegats de Prevenció). No ho confonguis amb el llindar de 50 treballadors (obligatori Comitè de Seguretat i Salut) ni amb 30!'
    }
  ]
};
