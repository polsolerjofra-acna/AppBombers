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
          heading: '1.1 Àmbit (art. 3.2), definicions (art. 4) i principis (art. 15)',
          paragraphs: [
            'L\'article 3.2 NO exclou el cos de bombers com a col·lectiu, sinó que exclou les activitats de protecció civil i peritatge forense en situacions de greu risc, catàstrofe i calamitat pública (on la Llei "inspirarà" la normativa específica). En la resta del dia a dia al parc, la LPRL s\'aplica plenament.',
            'L\'article 4 recull 8 definicions clau: risc laboral (probabilitat + severitat), risc greu i imminent (exposició probable en un futur immediat que pugui causar dany greu), equip de treball (qualsevol màquina/aparell/eina) i EPI (equip portat o subjectat pel treballador per protegir-se).',
            'L\'article 15 fixa 9 principis d\'acció preventiva, encapçalats per: a) Evitar els riscos; b) Avaluar els que no es puguin evitar; c) Combatre\'ls a l\'origen; ... i h) Anteposar la protecció col·lectiva a la individual. L\'art. 15.4 obliga a preveure les distraccions o imprudències NO temeràries. L\'art. 16 exigeix Pla de prevenció, Avaluació de riscos i Planificació preventiva. L\'art. 17.2 consagra l\'EPI com l\'última barrera.'
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
          heading: '2.1 Risc greu i imminent (art. 21 vs 44), salut i organització',
          paragraphs: [
            'Davant un risc greu i imminent (art. 21), el treballador té dret a interrompre l\'activitat i abandonar el lloc. Si l\'empresari no adopta mesures, els representants legals poden acordar la paralització per majoria i comunicar-ho a l\'empresa i a l\'autoritat laboral, que la ratifica o anul·la en 24 hores. En canvi, si la paralització l\'ordena un Inspector de Treball (art. 44), l\'empresa la pot impugnar en 3 dies hàbils i l\'autoritat resol en 24 hores.',
            'La vigilància de la salut (art. 22) és voluntària amb 3 excepcions (imprescindible per avaluar efectes, risc per a tercers/propi treballador o disposició legal); a l\'empresa només arriben les conclusions sobre aptitud. L\'art. 23 exigeix 5 documents (inclosa notificació d\'accidents amb incapacitat > 1 dia). L\'art. 26 protegeix la maternitat en 4 esglaons (adaptació → canvi de lloc → suspensió amb prestació → extensió a lactància < 9 mesos).',
            'Organització preventiva (art. 30): fins a 10 treballadors (o 25 en 1 sol centre) ho pot assumir l\'empresari; > 500 treballadors (o 250–500 en activitats Annex I) exigeix Servei de Prevenció Propi. Els recursos preventius (art. 32 bis) requereixen formació mínima de nivell bàsic.'
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
          heading: '3.1 RD 773/1997 i Reglament (UE) 2016/425',
          paragraphs: [
            'L\'article 2.2 del RD 773/1997 llista 7 exclusions del concepte d\'EPI — la lletra b) són els "equips dels serveis de socors i salvament" —, però l\'art. 17.2 LPRL continua obligant igualment a donar protecció adequada. L\'elecció (art. 6) segueix 3 passos estrictes: 1) Analitzar i avaluar riscos; 2) Definir característiques de l\'EPI; 3) Comparar amb els equips disponibles. L\'art. 7 estableix l\'ús personal en principi i seguir les instruccions del fabricant. L\'art. 8 obliga a informar prèviament, preferentment per escrit. L\'Annex IV està suprimit (queden I cos, II equip, III activitat).',
            'El Reglament (UE) 2016/425 classifica el RISC, no l\'equip: Categoria I (5 riscos mínims, inclou T ≤ 50 °C); Categoria II (tots els no inclosos a I ni III); Categoria III (13 supòsits de mort o danys irreversibles: manca d\'oxigen, altes T ≈ 100 °C, baixes T -50 °C, caigudes d\'altura, tensió elèctrica, ofegament, serres de cadena, alta pressió, bala/arma blanca, soroll nociu...) i exigeix marcatge CE seguit de 4 xifres de l\'organisme notificat.'
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
      difficulty: 'Fàcil',
      question: 'Com s\'aplica l\'article 3.2 de la Llei 31/1995 (LPRL) als serveis de bombers i protecció civil?',
      options: [
        'Exclou per raó de la situació les activitats operatives en casos de greu risc, catàstrofe i calamitat pública, tot i que la llei ha d\'inspirar la normativa',
        'Exclou de manera absoluta i permanent tot el cos de bombers de qualsevol prevenció',
        'Només s\'aplica als bombers voluntaris i no als funcionaris',
        'Obliga a imposar multes econòmiques directes al parc de bombers en cas d\'accident'
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
        'Els ancoratges fixos de tipus A, C i D; força de xoc limitada a 12 kN',
        'Tots els ancoratges de la classe A a la E indistintament',
        'La Guia Tècnica de l\'INSST té rang de Llei Orgànica vinculant'
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
        'Forma triangular, pictograma negre sobre fons groc',
        'Forma quadrada verda amb text "usar només en cas d\'emergència"',
        'Forma rodona vermella amb franja diagonal'
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
        'Quan tinguin resistència a la perforació d\'agulles hipodèrmiques',
        'Quan protegeixin fins a temperatures de -50 °C',
        'Sempre que portin marcatge CE de Categoria II'
      ],
      correctIndex: 0,
      explanation: 'Amb parts mòbils, un guant massa resistent a l\'esquinçament (≥ 1) no es trenca si s\'enganxa i pot arrossegar la mà cap a la màquina.'
    }
  ]
};
