export const tema15RescatUrba = {
  id: 'tema-33',
  number: 33,
  code: 'MAN.SVXX.000',
  title: 'Intervenció bàsica en rescat urbà',
  category: 'Manual Operatiu SGO — Treballs en Alçada, Cordes, Polispasts i Ascensors',
  estimatedMinutes: 50,
  importance: {
    title: "Radar d'Examen — Tema 33 (MAN.SVXX.000 V.1): Rescat Urbà (Alçada i Ascensors)",
    frequency: 'Molt Alta (4-6 preguntes fixes sobre RD 2177/2004 >2 m, cordes, polispasts, AEA i 3 sèries d’ascensors)',
    summary:
      "Manual estructurat en 3 grans capítols: 1. Introducció (les 3 tipologies de rescat urbà), 2. Intervencions en alçada (marc normatiu >2 m, cordes de doble homologació, nusos, polispasts 2:1 / 3:1 / 6:1, SAS ≥2 punts, les 10 maniobres, sistemes contra caigudes i seguretat en AEA amb torreta + motor aturat + MGO) i 3. Intervencions en ascensors (electromecànics vs. hidràulics vs. gearless i la regla d'or d'activar mínim 2 de les 3 sèries elèctriques de seguretat). Inclou 4 pàgines de desenvolupament + 2 pàgines finals de Resum Executiu.",
    hotTopics: [
      'Cap. 1-2.1: Les 3 tipologies de rescat urbà i marc legal (Llei 31/1995, RD 486/1997, RD 1215/1997 i RD 2177/2004 → es considera treball en alçada a partir de > 2 METRES!).',
      'Cap. 2.2: Cordes de Bombers amb DOBLE HOMOLOGACIÓ (semiestàtica EN 1891 Tipus A + dinàmica simple EN 892), nusos (vuit, ballestrinca, dinàmic UIAA, Prusik i Machard), politges i polispasts (2:1, 3:1 i 6:1) i SAS (Sistema d’Ancoratge de Seguretat amb mínim 2 punts i angle < 60° / màx 120°).',
      'Cap. 2.3-2.4: Les 10 maniobres en alçada, els 3 sistemes de protecció contra caigudes (1. Retenció, 2. Posicionament/Suspensió i 3. Anticaigudes [anella "A", factor de caiguda i espai lliure]) i seguretat de cordes en AEA (operador a la torreta, motor aturat quan està ancorada i mode MGO).',
      'Cap. 3: Tipus d’ascensors (1. Electromecànic d’adherència amb contrapès, 2. Hidràulic amb pistó [amb la vàlvula manual d’emergència NOMÉS pot baixar!], 3. Sense cambra de màquines MRL Gearless) i la REGLA D’OR DE SEGURETAT EN ASCENSORS: activar com a mínim 2 de les 3 sèries elèctriques de seguretat (1. Clau triangular de porta de planta, 2. Botó STOP del fossat, 3. Botó STOP del sostre de cabina)!'
    ],
    traps: [
      'Parany de les cordes (2.2.1): La corda reglamentària de rescat de Bombers de la Generalitat té DOBLE HOMOLOGACIÓ (està certificada alhora com a corda semiestàtica Tipus A EN 1891 i com a corda dinàmica en simple EN 892)!',
      'Parany de l’ascensor hidràulic (3.1.2): Amb la maniobra manual de socors (botó o palanca vermella de la central hidràulica), un ascensor hidràulic NOMÉS es pot fer BAIXAR per gravetat (mai pujar manualment sense corrent)!',
      'Parany de les sèries d’ascensor (3.3): Abans d’entrar al forat, fossat o sostre d’un ascensor, és obligatori obrir/activar com a mínim 2 DE LES 3 SÈRIES ELÈCTRIQUES (porta de planta + STOP de fossat o STOP de sostre de cabina).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-2.2 Alçada i Cordes',
      title: '1–2.2. Marc Normatiu (> 2 m), Cordes (Doble Homologació), Nusos, Polispasts i SAS',
      subtitle: 'RD 2177/2004, corda semiestàtica + dinàmica, nusos autoblocants, polispasts (2:1, 3:1, 6:1) i ancoratges.',
      blocks: [
        {
          type: 'text',
          heading: '1–2.1. Les 3 Tipologies de Rescat Urbà i el Llindar Legal dels 2 Metres (RD 2177/2004)',
          paragraphs: [
            "El manual MAN.SVXX.000 estructura el rescat urbà en 3 escenaris principals: 1) Intervencions en alçada (façanes, cobertes, bastides, grues), 2) Intervencions sota rasant o en espais confinats verticals (pous, fossats, patis) i 3) Intervencions de rescat en aparells elevadors (ascensors).",
            "El marc normatiu de seguretat es fonamenta en la Llei 31/1995 (LPRL), el RD 486/1997 (llocs de treball), el RD 1215/1997 (equips de treball) i el RD 2177/2004 (treballs temporals en alçada). DADA CLAU D'EXAMEN: S'entén legalment i operativament per treball en alçada qualsevol operació amb risc de caiguda a diferent nivell superior a 2 METRES (> 2 m)!"
          ]
        },
        {
          type: 'table',
          title: '2.2. Equipament Tècnic de Rescat en Alçada: Cordes, Nusos, Polispasts i SAS',
          subtitle: 'Especificacions tècniques oficials del Capítol 2 de MAN.SVXX.000',
          headers: ['Element Tècnic (Secció)', 'Característica Oficial al Manual MAN.SVXX.000', 'Detall i Càlcul d’Examen'],
          rows: [
            ['2.2.1. Cordes (Ànima + Camisa)', 'DADA CRÍTICA: La corda de rescat de Bombers té DOBLE HOMOLOGACIÓ: està certificada simultàniament com a corda SEMIESTÀTICA (UNE-EN 1891 Tipus A, baix allargament <5% per a ràpel, treball i hissat) i com a corda DINÀMICA EN SIMPLE (UNE-EN 892, capaç d’absorbir l’impacte d’una caiguda de factor alt!).', 'Parts: l’Ànima (nucli trenat interior que suporta el 80% de la resistència mecànica) i la Camisa o funda exterior (protegeix l’ànima del fregament i els raigs UV).'],
            ['2.2.2. Nusos Reglamentaris', '• Nus d’ancoratge / encordament: Nus del VUIT (doble al si, resseguit o de doble orella).\n• Nus d’amarratge / bloqueig a estructura: BALLESTRINCA.\n• Nus de fre / assegurament: DINÀMIC (UIAA).\n• Nusos AUTOBLOCANTS (amb cordino sobre corda): PRUSIK (bidireccional) i MACHARD (unidireccional/bidireccional segons muntatge).', 'Tot nus redueix la resistència nominal de la corda entre un 20% i un 50% (el nus del vuit és dels que menys resistència resta, conservant ~75-80%).'],
            ['2.2.3. Politges i Polispasts (Desmultiplicació)', '• Politja simple fixa (1:1): Només canvia la direcció de la corda; NO multiplica la força (per aixecar 100 kg cal estirar amb 100 kg).\n• Polispast 2:1 (1 politja mòbil a la càrrega): Divideix la força per 2 (per 100 kg estires 50 kg, cobrant 2 m de corda per pujar 1 m).\n• Polispast 3:1 (En "Z"): Divideix la força per 3 (per 120 kg estires 40 kg).\n• Polispast 6:1 (3:1 + 2:1 compost): Divideix la força per 6 (per 120 kg estires només 20 kg!).', 'Regla física: Si la politja es mou juntament amb la càrrega (politja mòbil), hi ha avantatge mecànic!'],
            ['2.2.4–2.2.5. Connectors i SAS (Sistema d’Ancoratge de Seguretat)', 'El SAS ha de tenir SEMPRE com a mínim 2 PUNTS D’ANCORATGE independents i solits (redundància), units mitjançant una triangulació repartidora de càrregues.', 'Angle de la triangulació del SAS: òptim ≤ 60° (i MAI superar els 90°–120°, perquè a 120° cada punt suporta el 100% de la càrrega total!). Els mosquetons treballen sempre pel seu eix longitudinal amb la virolla tancada.']
          ],
          footnote: 'Memoritza: Treball en alçada > 2 metres | Corda de bombers = Doble homologació (Semiestàtica + Dinàmica simple) | SAS = mínim 2 punts d’ancoratge.'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 2.3-2.4 Maniobres i AEA',
      title: '2.3–2.4. Les 10 Maniobres en Alçada, Sistemes Contra Caigudes i Seguretat en AEA',
      subtitle: 'Retenció vs. Suspensió vs. Anticaigudes (anella A), factor de caiguda i ús de cordes en autoescala.',
      blocks: [
        {
          type: 'table',
          title: '2.4.1. Els 3 Sistemes de Protecció Contra Caigudes en Alçada (MAN.SVXX.000 Secció 2.4.1)',
          subtitle: 'Diferència essencial d’examen entre Retenció, Posicionament/Suspensió i Anticaigudes',
          headers: ['Sistema de Protecció', 'Objectiu i Funcionament Físic', 'Anella de l’Arnés i Redundància'],
          rows: [
            ['1. Sistema de RETENCIÓ (Limitació)', 'Impedeix físicament que el bomber arribi a la vora o zona on existeix el risc de caiguda (corda tensa més curta que la distància al precipici).', 'És el sistema més segur i prioritari perquè la caiguda és impossible (Factor de caiguda = 0).'],
            ['2. Sistema de POSICIONAMENT o SUSPENSIÓ', 'Manté el bomber subjectat en tensió de treball (amb les mans lliures) o penjat d’una corda de treball en un pla vertical.', 'Es connecta a l’anella ventral/esternal (EN 813/EN 358) i ÉS OBLIGATORI combinar-lo sempre amb una 2a corda independent de seguretat (sistema ANTICAIGUDES)!'],
            ['3. Sistema ANTICAIGUDES', 'No impedeix la caiguda, però L’ATURA de manera segura quan es produeix, limitant la força de xoc sobre el cos del bomber a < 6 kN (gràcies a l’absorbidor d’energia o corda dinàmica).', 'Es connecta EXCLUSIVAMENT a les anelles marcades amb la lletra "A" de l’arnés (anella esternal "A" o dorsal "A" segons UNE-EN 361). Exigeix calcular sempre l’ALÇADA LLIURE (tirant d’aire) sota els peus perquè el bomber no piqui contra el terra mentre s’estira l’absorbidor!']
          ],
          footnote: 'Factor de Caiguda (FC = Altura de la caiguda / Longitud de corda disponible): va de 0 (ancoratge a sobre del cap, corda tensa) a 2 (ancoratge als peus, caiguda del doble de la longitud de la corda).'
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: '2.3. Les 10 Maniobres Bàsiques en Alçada i 2.4.2. Seguretat en Autoescala (AEA)',
          acronym: 'SEGURETAT CORDA EN AEA: 1. Operador a TORRETA  +  2. MOTOR ATURAT (quan s’ancora)  +  3. Mode MGO',
          trick:
            "• LES 10 MANIOBRES EN ALÇADA DEL MANUAL (2.3):\n  1) Sistema de retenció | 2) Progressió horitzontal assegurada (línia de vida) | 3) Progressió vertical per escala (assegurat en punta o des de baix) | 4) Descens (ràpel) per corda amb descensor autofrenant | 5) Ascens per corda fixa | 6) Evacuació/descens de víctima des de dalt (amb triangle d'evacuació o llitera) | 7) Hissat de víctima amb polispast (2:1 / 3:1) | 8) Rescat d'un company suspès en una corda | 9) Estabilització i assegurament de llitera horitzontal/inclinada | 10) Maniobres combinades amb el paquet de rescat i l'Autoescala (AEA).\n\n• LES 3 REGLES D'OR DE SEGURETAT QUAN S'ANCOREN CORDES A L'AUTOESCALA (AEA) (2.4.2):\n  1) Sempre hi ha d'haver un bomber operador al lloc de comandament principal de la TORRETA (base de l'escala) vigilant l'operació.\n  2) Un cop l'escala i la cistella estan posicionades i s'ancora el sistema de cordes per treballar en suspensió, s'ha de mantenir el MOTOR ATURAT (per evitar qualsevol moviment accidental dels comandaments hidràulics que estiri la corda i provoqui un accident fatal!).\n  3) Treballar dins dels límits del sistema de control i pes de la cistella (MGO / punts d'ancoratge homologats de la cistella o últim tram).",
          example: 'Si una corda està ancorada a la cistella de l’AEA i a la paret d’un edifici, un moviment accidental del braç de l’AEA trencaria la corda o l’estructura → per això s’atura el motor!'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 3.1 Tipus d’Ascensors',
      title: '3.1. Intervencions en Ascensors: Electromecànics, Hidràulics (Només Baixen) i Gearless (MRL)',
      subtitle: 'Components mecànics, diferència en la maniobra manual d’emergència i rescat sense cambra.',
      blocks: [
        {
          type: 'table',
          title: '3.1.1–3.1.3. Comparativa Tècnica dels 3 Tipus d’Ascensors (MAN.SVXX.000 Capítol 3)',
          subtitle: 'Com funcionen i com es mou la cabina manualment en cas d’atrapament de persones',
          headers: ['Tipus d’Ascensor (Secció)', 'Mecanisme de Tracció', 'Com es Mou la Cabina en la Maniobra de Socors? (PARANY!)'],
          rows: [
            ['3.1.1. Ascensor Electromecànic d’Adherència (Amb cambra de màquines)', 'Motor elèctric + politja tractora + cables d’acer que uneixen la CABINA amb un CONTRAPÈS (el contrapès pesa igual que la cabina buida + el 50% de la càrrega màxima!).', 'A la cambra de màquines: 1) Tallar l’interruptor general de força (deixant encesa la llum de cabina!), 2) Obrir el fre mecànic amb la palanca i girar el VOLANT D’INÈRCIA a mà cap a la planta més propera.\n• ATENCIÓ: Si la cabina va buida o amb 1 sola persona, el CONTRAPÈS pesa més que la cabina → en alliberar el fre, la cabina PUJARÀ sola cap amunt!'],
            ['3.1.2. Ascensor Hidràulic (Pistó d’oli)', 'Central hidràulica amb dipòsit d’oli i grup bomba que impulsa oli a un pistó (directe o diferencial amb politja 2:1). NO té contrapès!', 'DADA CRÍTICA D’EXAMEN: A l’armari de la central hidràulica, prement el botó o vàlvula vermella de descens manual, l’oli retorna al dipòsit i la cabina NOMÉS POT BAIXAR per gravetat fins a la planta inferior (MAI es pot fer pujar amb la vàlvula d’emergència!).'],
            ['3.1.3. Ascensor Sense Cambra de Màquines (MRL / Gearless)', 'El motor compacte d’imants permanents (Gearless, sense reductor) està instal·lat a DINS mateix del forat superior de l’ascensor. L’armari de maniobra està al replà de l’última planta.', 'Es mou des del quadre exterior del replà mitjançant la botonera elèctrica de socors (alimentada per bateria SAI) o l’alliberament del fre a polsacions controlant els LED indicadors de nivell de planta.']
          ],
          footnote: 'Memoritza aquesta diferència: Electromecànic amb contrapès = pot pujar o baixar (si hi ha poc pes a la cabina, en obrir fre PUJA!) | Hidràulic = amb la vàlvula manual NOMÉS POT BAIXAR!'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 3.2-3.3 Rescat i 3 Sèries',
      title: '3.2–3.3. Maniobres de Rescat en Ascensors i la Regla de les 3 Sèries Elèctriques de Seguretat',
      subtitle: 'Comunicació, anivellament de cabina i obligació d’activar mínim 2 de les 3 sèries elèctriques.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: '3.3. La Regla d’Or de Seguretat en Ascensors: Activar MÍNIM 2 de les 3 Sèries Elèctriques!',
          acronym: 'ACTIVAR MÍNIM 2 DE LES 3 SÈRIES:  1. Porta de Planta  +  2. STOP del Fossat  +  3. STOP del Sostre de Cabina',
          trick:
            "Abans que un bomber entri al forat de l'ascensor, al fossat inferior o pugi al sostre de la cabina, és OBLIGATORI bloquejar el moviment accidental de l'aparell obrint com a mínim 2 DE LES 3 SÈRIES ELÈCTRIQUES DE SEGURETAT del circuit de l'ascensor (a més de tallar el diferencial/força general a la cambra de màquines):\n• SÈRIE 1: Obertura i bloqueig d'una PORTA EXTERIOR DE PLANTA amb la clau triangular (en obrir l'enclavament de la porta exterior, s'obre la sèrie de portes i l'ascensor no pot arrencar).\n• SÈRIE 2: Premuda del botó vermell de STOP DEL FOSSAT (situat a la part inferior del forat de l'ascensor).\n• SÈRIE 3: Premuda del botó vermell de STOP DEL SOSTRE DE CABINA (o commutador d'inspecció sobre el sostre de la cabina).",
          example: 'Si el tribunal pregunta: "Quantes sèries elèctriques de seguretat s’han d’activar com a mínim abans d’accedir al forat o sostre d’un ascensor?", la resposta exacta del manual és: Com a mínim 2 de les 3 sèries!'
        },
        {
          type: 'table',
          title: '3.2. Protocol Pas a Pas de Rescat de Persones Atrapades en Cabina (MAN.SVXX.000 Secció 3.2)',
          subtitle: 'Prioritat absoluta d’anivellar la cabina amb una planta abans d’obrir portes',
          headers: ['Pas del Protocol', 'Acció Operativa dels Bombers', 'Norma de Seguretat Crítica'],
          rows: [
            ['1. Localització i Comunicació', 'Localitzar a quina planta està aturada la cabina, parlar amb els ocupants per tranquil·litzar-los, demanar-los que s’allunyin de les portes i valorar si hi ha urgència mèdica.', 'NO obrir de cop la porta de planta amb la clau triangular sense mirar primer amb llanterna on és la cabina (pot no ser darrere la porta i caure al buit!).'],
            ['2. Tall de Força (Conservant Enllumenat)', 'Accedir a la cambra de màquines o quadre MRL i desconnectar l’interruptor general trifàsic de força motriu.', 'Mantenir connectat el circuit monofàsic d’enllumenat de cabina i ventilació per no deixar les víctimes a les fosques!'],
            ['3. Anivellament de la Cabina (Prioritari)', 'Moure la cabina fins a deixar-la A NIVELL DE PLANTA (amb volant manual en electromecànic, vàlvula de descens en hidràulic o botonera de socors en MRL).', 'REGLA D’OR: Sempre és molt més segur moure la cabina fins a anivellar-la amb un replà que treure persones a través d’un desnivell entre plantes!'],
            ['4. Extracció amb Desnivell (Si la cabina està clavada per l’encunyament del paracaigudes)', 'Si el paracaigudes mecànic s’ha encunyat a les guies i la cabina no es pot moure, només s’extreuen els ocupants si l’obertura lliure és segura.', 'RISC MORTAL DEL FORAT INFERIOR: Si la cabina ha quedat més alta que el replà de la planta, queda un BUIT OBERT SOTA LA CABINA cap al fossat! ÉS OBLIGATORI tapar i bloquejar físicament aquest forat inferior (amb tauler, escala o bomber assegurat) abans de treure cap víctima perquè no rellisqui i caigui pel forat sota la cabina!']
          ],
          footnote: 'En extracció amb cabina desnivellada per sobre del replà: tapar SEMPRE el buit inferior sota el faldó de la cabina per evitar que la víctima caigui al forat!'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · 📌 Resum 1/2 (Xifres)',
      title: 'Resum Final (1/2): Taula Mestra de Xifres, Normes i Polispasts (MAN.SVXX.000)',
      subtitle: 'Totes les dades numèriques de treballs en alçada, cordes, polispasts i ascensors en una sola taula.',
      blocks: [
        {
          type: 'table',
          title: 'Síntesi Numèrica i Normativa Imprescindible — Tema 33 (Rescat Urbà)',
          subtitle: 'Les 14 dades exactes del manual MAN.SVXX.000 que has de clavar al test',
          headers: ['Concepte / Sistema', 'Valor Oficial Exacte (MAN.SVXX.000)', 'Clau per a l’Examen'],
          rows: [
            ['1. Les 3 Tipologies de Rescat Urbà', '1. En alçada | 2. Sota rasant / pous | 3. En ascensors', 'Classificació del Capítol 1 del manual'],
            ['2. Llindar legal de Treball en Alçada', '> 2 metres d’alçada amb risc de caiguda (RD 2177/2004)', 'Marc legal: Llei 31/1995, RD 486/1997, RD 1215/1997 i RD 2177/2004'],
            ['3. Homologació de la Corda de Bombers', 'DOBLE HOMOLOGACIÓ: Semiestàtica (EN 1891 A) + Dinàmica simple (EN 892)', 'Combina baix allargament en treball i absorció en caiguda'],
            ['4. Pèrdua de resistència d’una corda per un Nus', 'Entre el 20% i el 50% de pèrdua', 'Nus d’ancoratge: Vuit | Amarratge: Ballestrinca | Fre: Dinàmic'],
            ['5. Nusos Autoblocants del Manual', 'Nus PRUSIK i Nus MACHARD (amb cordino auxiliar)', 'Bloqueig sota tensió i lliscament quan s’allibera la càrrega'],
            ['6. Avantatge Mecànic dels Polispasts', 'Politja fixa = 1:1 | Polispast simple = 2:1 | En "Z" = 3:1 | Compost = 6:1', 'Amb un 3:1 per hissar 120 kg només cal fer 40 kg de força'],
            ['7. Punts mínims d’un SAS (Ancoratge)', 'Mínim 2 punts d’ancoratge independents (triangulats)', 'Angle òptim ≤ 60° (prohibit superar 90°–120°)'],
            ['8. Nombre de Maniobres en Alçada al Manual', '10 maniobres estandarditzades (Secció 2.3)', 'Des de retenció i ràpel fins a polispasts i rescat amb AEA'],
            ['9. Els 3 Sistemes Contra Caigudes', '1. Retenció | 2. Posicionament / Suspensió | 3. Anticaigudes', 'El sistema Anticaigudes es connecta SEMPRE a una anella "A"'],
            ['10. Factor de Caiguda (FC = h / L)', 'Entre 0 (ancoratge a dalt, corda tensa) i 2 (ancoratge als peus)', 'Força de xoc màxima admissible sobre el cos < 6 kN'],
            ['11. Les 3 Regles de Seguretat de Cordes en AEA', '1. Operador a TORRETA | 2. MOTOR ATURAT (quan està ancorada) | 3. Mode MGO', 'El motor s’atura perquè cap moviment hidràulic trenqui la corda'],
            ['12. Pes del Contrapès d’Ascensor Electromecànic', 'Pes Cabina buida + 50% de la Càrrega Màxima', 'Si hi ha 1 sola persona a la cabina, en obrir fre la cabina PUJA!'],
            ['13. Maniobra Manual en Ascensor Hidràulic', 'Amb la vàlvula manual d’emergència NOMÉS POT BAIXAR', 'L’oli retorna al tanc per gravetat; mai pot pujar manualment'],
            ['14. Sèries Elèctriques de Seguretat en Ascensor', 'Activar MÍNIM 2 de les 3 sèries (1. Porta planta | 2. STOP fossat | 3. STOP sostre)', 'Obligatori abans d’entrar al forat, fossat o sostre de cabina']
          ],
          footnote: 'Pàgina 1 de 2 del Resum Executiu del Tema 33 (MAN.SVXX.000).'
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · 📌 Resum 2/2 (Paranys)',
      title: 'Resum Final (2/2): Regles Crítiques en Alçada i Ascensors i Paranys d’Examen',
      subtitle: 'Les 5 preguntes trampa que el tribunal planteja sobre MAN.SVXX.000.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Els 5 Paranys del Tribunal al Tema 33 (Rescat Urbà)',
          acronym: 'DOBLE HOMOLOGACIÓ | RETENCIÓ vs ANTICAIGUDES (A) | AEA MOTOR ATURAT | HIDRÀULIC NOMÉS BAIXA | 2 DE 3 SÈRIES',
          trick:
            "1) CORDA DE BOMBERS (DOBLE HOMOLOGACIÓ):\n• Si et pregunten quin tipus de corda s'utilitza al paquet de rescat de Bombers segons MAN.SVXX.000: té DOBLE HOMOLOGACIÓ (semiestàtica + dinàmica simple).\n\n2) RETENCIÓ vs. SUSPENSIÓ vs. ANTICAIGUDES:\n• Retenció = impedeix arribar a la vora (no hi pot haver caiguda).\n• Suspensió/Posicionament = treballar penjat en tensió (requereix sempre una 2a corda anticaigudes!).\n• Anticaigudes = atura la caiguda un cop produïda; és l'únic que exigeix connectar-se a l'anella 'A' i vigilar l'alçada lliure sota els peus!\n\n3) CORDES ANCORADES A L'AUTOESCALA (AEA):\n• Un cop muntat l'ancoratge de cordes a la cistella o escala, el MOTOR DE L'AEA HA D'ESTAR ATURAT i sempre amb un bomber vigilant a la TORRETA.\n\n4) ASCENSOR ELECTROMECÀNIC vs. HIDRÀULIC:\n• Electromecànic (amb contrapès): en obrir el fre amb poca càrrega a la cabina, la cabina PUJA perquè el contrapès pesa més.\n• Hidràulic (amb pistó d'oli): prement la vàlvula vermella d'emergència, la cabina NOMÉS POT BAIXAR.\n\n5) LES 3 SÈRIES ELÈCTRIQUES DE L'ASCENSOR:\n• Sèrie 1: Porta exterior de planta (clau triangular).\n• Sèrie 2: Botó STOP del fossat.\n• Sèrie 3: Botó STOP del sostre de cabina.\n• Regla: Cal activar-ne com a mínim 2 DE LES 3!",
          example: 'Si un bomber puja al sostre d’una cabina d’ascensor: obre i bloqueja la porta de planta (Sèrie 1) i prem el botó STOP del sostre de cabina (Sèrie 3) → ja té 2 de les 3 sèries activades!'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q33-1',
      difficulty: 'Fàcil',
      question: "Segons el Reial Decret 2177/2004 i l'apartat 2.1 del manual MAN.SVXX.000, a partir de quina alçada amb risc de caiguda a diferent nivell es considera reglamentàriament un 'treball en alçada'?",
      options: [
        'A partir d’1 metre',
        'A partir de 2 metres (> 2 m)',
        'A partir de 3,5 metres',
        'A partir de 5 metres'
      ],
      correctIndex: 1,
      explanation: 'Es considera treball en alçada qualsevol operació amb risc de caiguda superior a 2 metres.'
    },
    {
      id: 'q33-2',
      difficulty: 'Mitjà',
      question: "Quina característica d'homologació tenen les cordes del paquet de rescat en alçada de Bombers de la Generalitat segons l'apartat 2.2.1 del manual MAN.SVXX.000?",
      options: [
        'Són cordes metàl·liques d’acer trenat.',
        'Tenen doble homologació: estan certificades simultàniament com a corda semiestàtica i com a corda dinàmica en simple.',
        'Són exclusivament cordes auxiliars estirpables (cordinos de 4 mm).',
        'Només estan homologades per a ús aquàtic.'
      ],
      correctIndex: 1,
      explanation: "El manual destaca que la corda de rescat de Bombers disposa de doble homologació (semiestàtica + dinàmica simple)."
    },
    {
      id: 'q33-3',
      difficulty: 'Mitjà',
      question: "Segons l'apartat 2.4.2 del manual MAN.SVXX.000, quines mesures de seguretat són obligatòries quan s'utilitza l'Autoescala Automàtica (AEA) com a punt d'ancoratge d'un sistema de cordes?",
      options: [
        'Mantenir el motor accelerat al màxim i moure l’escala contínuament.',
        'Mantenir sempre un operador a la torreta, tenir el motor aturat un cop ancorades les cordes (per evitar moviments accidentals) i operar dins dels límits MGO.',
        'Desplegar només 2 dels 4 estabilitzadors.',
        'No cal cap operador a la torreta.'
      ],
      correctIndex: 1,
      explanation: "Quan s'ancoren cordes a l'AEA que també estan lligades a l'estructura o al rescatador, cal aturar el motor per impedir moviments hidràulics involuntaris i mantenir un bomber a la torreta."
    },
    {
      id: 'q33-4',
      difficulty: 'Mitjà',
      question: "En una intervenció de rescat en un ascensor HIDRÀULic avariat sense corrent, cap a on es pot moure la cabina accionant la vàlvula manual d'emergència de la central hidràulica? I cap a on tendirà a moure's un ascensor ELECTROMECÀNIC amb contrapès si s'allibera el fre amb una sola persona a dins?",
      options: [
        'L’hidràulic només pot pujar i l’electromecànic sempre baixa.',
        'L’ascensor hidràulic NOMÉS es pot fer baixar per gravetat; en canvi, l’electromecànic amb poca càrrega a dins tendirà a PUJAR perquè el contrapès pesa més que la cabina.',
        'Tots dos només poden pujar.',
        'Cap dels dos es pot moure sense electricitat.'
      ],
      correctIndex: 1,
      explanation: "En l'ascensor hidràulic la vàlvula manual retorna oli al tanc i la cabina només pot baixar; en l'electromecànic el contrapès equival a la cabina + 50% de la càrrega, de manera que amb 1 sola persona el contrapès pesa més i fa pujar la cabina."
    },
    {
      id: 'q33-5',
      difficulty: 'Difícil',
      question: "Segons l'apartat 3.3 de seguretat en ascensors del manual MAN.SVXX.000, quantes i quines són les sèries elèctriques de seguretat que cal activar per assegurar l'immobilització de l'aparell abans d'accedir al forat o al sostre de cabina?",
      options: [
        'N’hi ha prou amb prémer el botó d’alarma interior de la cabina.',
        'Cal activar com a mínim 2 de les 3 sèries elèctriques de seguretat: 1) Porta exterior de planta (clau triangular), 2) STOP del fossat i 3) STOP del sostre de cabina.',
        'Només existeix 1 sèrie elèctrica a la porta del portal.',
        'Cal tallar els cables de tracció amb cisalla.'
      ],
      correctIndex: 1,
      explanation: "La regla de seguretat del manual exigeix activar com a mínim 2 de les 3 sèries elèctriques: enclavament de porta de planta, STOP del fossat i STOP del sostre de cabina."
    },
    {
      id: 'q33-6',
      difficulty: 'Fàcil',
      question: "Quines dues parts formen una corda de rescat (i quin percentatge de resistència aporta el nucli), quin nus reglamentari s'usa per a ancoratge/encordament i quin percentatge de resistència fa perdre qualsevol nus a la corda?",
      options: [
        "Ànima (nucli interior, 80% de la resistència) i Camisa (funda exterior) | Nus del vuit | Tot nus redueix la resistència nominal entre un 20% i un 50%.",
        'Filaments d’acer (50%) i recobriment de PVC | Nus pla | Un nus augmenta la resistència un 20%.',
        'Camisa (80% de la resistència) i Ànima (20%) | Nus ballestrinca | No hi ha pèrdua de resistència.',
        'Ànima (100%) sense camisa | Nus Prusik | Pèrdua del 5%.'
      ],
      correctIndex: 0,
      explanation: "L'ànima suporta el 80% de la resistència mecànica i la camisa la protegeix del fregament i els raigs UV. El nus d'ancoratge/encordament és el del vuit i qualsevol nus resta entre un 20% i un 50% de resistència."
    },
    {
      id: 'q33-7',
      difficulty: 'Mitjà',
      question: "Si hem d'hissar una càrrega de 120 kg, quanta força hem d'aplicar teòricament amb una politja simple fixa (1:1), amb un polispast en 'Z' (3:1) i amb un polispast compost (6:1)?",
      options: [
        '1:1 = 60 kg | 3:1 = 30 kg | 6:1 = 10 kg.',
        '1:1 = 120 kg | 3:1 = 120 kg | 6:1 = 60 kg.',
        '1:1 = 120 kg (només canvia direcció) | 3:1 = 40 kg | 6:1 = 20 kg.',
        '1:1 = 240 kg | 3:1 = 80 kg | 6:1 = 40 kg.'
      ],
      correctIndex: 2,
      explanation: "Una politja fixa (1:1) no desmultiplica (120 kg). Un polispast 3:1 divideix la força per 3 (120 ÷ 3 = 40 kg) i un polispast compost 6:1 la divideix per 6 (120 ÷ 6 = 20 kg)."
    },
    {
      id: 'q33-8',
      difficulty: 'Difícil',
      question: "En un Sistema d'Ancoratge de Seguretat (SAS) muntat en triangulació sobre un mínim de 2 punts independents, quin és l'angle òptim recomanat i què passa si l'angle arriba als 120°?",
      options: [
        'L’angle òptim és de 150° i a 120° cada punt suporta només el 25% de la càrrega.',
        'L’angle és indiferent sempre que els mosquetons tinguin la virolla oberta.',
        'L’angle òptim és ≥ 90° i a 120° la càrrega es reparteix a la meitat (50% cada punt).',
        'L’angle òptim és ≤ 60° (no superar mai els 90°–120°), perquè a 120° cadascun dels dos punts d’ancoratge acaba suportant el 100% de la càrrega total.'
      ],
      correctIndex: 3,
      explanation: "El SAS requereix mínim 2 punts independents amb triangulació d'angle òptim ≤ 60°; a 120°, per descomposició vectorial, cada ancoratge suporta el 100% de la càrrega total."
    },
    {
      id: 'q33-9',
      difficulty: 'Mitjà',
      question: "Quin dels tres sistemes de protecció contra caigudes (Retenció, Posicionament/Suspensió i Anticaigudes) s'ha de connectar exclusivament a les anelles marcades amb la lletra 'A' de l'arnés i quina exigència té el treball en suspensió?",
      options: [
        'L’Anticaigudes es connecta a l’anella "A" (esternal o dorsal, limitant xoc < 6 kN i calculant l’alçada lliure); el de Posicionament/Suspensió s’ha de combinar sempre amb una 2a corda independent anticaigudes.',
        'El de Retenció es connecta a l’anella "A" i el de Suspensió funciona amb una sola corda sense redundància.',
        'Tots tres s’han de connectar a la cinta lumbar lateral sense anella "A".',
        'El sistema Anticaigudes impedeix arribar a la vora del precipici i té factor de caiguda 0.'
      ],
      correctIndex: 0,
      explanation: "Només el sistema Anticaigudes va a les anelles 'A' (EN 361) i exigeix calcular el tirant d'aire/alçada lliure. El sistema de Posicionament/Suspensió (anella ventral/esternal) sempre necessita una 2a corda de seguretat anticaigudes."
    },
    {
      id: 'q33-10',
      difficulty: 'Fàcil',
      question: "Quines són les 3 tipologies de rescat urbà que recull el capítol 1 de MAN.SVXX.000 i entre quins valors oscil·la el Factor de Caiguda (FC = altura caiguda / longitud corda)?",
      options: [
        'Incendis, forestals i aquàtic | FC entre 1 i 10.',
        'Només façanes i grues | FC sempre igual a 5.',
        '1) En alçada, 2) Sota rasant / espais confinats verticals i 3) Aparells elevadors (ascensors) | FC entre 0 (ancoratge a sobre) i 2 (ancoratge als peus).',
        'Accidents viaris, NRBQ i allaus | FC negatiu.'
      ],
      correctIndex: 2,
      explanation: "Les 3 tipologies de rescat urbà són: intervencions en alçada, sota rasant/pous i ascensors. El Factor de Caiguda va de 0 (corda tensa per sobre) a 2 (caiguda del doble de la longitud de corda per ancoratge als peus)."
    },
    {
      id: 'q33-11',
      difficulty: 'Mitjà',
      question: "En el protocol de rescat d'ocupants atrapats dins la cabina d'un ascensor (apartat 3.2), què cal tallar i què cal mantenir encès a la cambra de màquines, i quina és la prioritat abans d'obrir portes?",
      options: [
        'Tallar tant la força com l’enllumenat de cabina; treure la gent pel sostre encara que la cabina estigui a nivell de planta.',
        'Obrir la porta de planta immediatament amb la clau triangular sense mirar ni tallar res.',
        'No tallar l’interruptor general i fer baixar sempre l’ascensor fins al soterrani.',
        'Desconnectar l’interruptor general trifàsic de força deixant connectat l’enllumenat/ventilació de cabina, i prioritzar sempre anivellar la cabina amb una planta abans d’obrir portes.'
      ],
      correctIndex: 3,
      explanation: "S'ha de tallar la força motriu trifàsica mantenint el circuit d'enllumenat i ventilació de cabina, i prioritzar l'anivellament de la cabina amb un replà abans d'evacuar els ocupants."
    },
    {
      id: 'q33-12',
      difficulty: 'Difícil',
      question: "Si en un ascensor el paracaigudes mecànic s'ha encunyat i la cabina ha quedat aturada MÉS ALTA que el replà de la planta (sense poder anivellar-la), quina mesura de seguretat crítica és obligatòria abans de treure les víctimes? I on es troba el motor en un ascensor MRL (Gearless)?",
      options: [
        'Fer saltar les víctimes sense protecció | El motor MRL és sempre en un soterrani annex.',
        'Tapar i bloquejar físicament el buit obert que queda sota la cabina cap al fossat (amb tauler, escala o bomber assegurat) | En un MRL (sense cambra de màquines) el motor compacte és dins del propi forat superior i el quadre al replà de l’última planta.',
        'Retirar el faldó de la cabina per ampliar el forat | En un MRL no hi ha quadre de maniobra.',
        'Desactivar totes les sèries elèctriques | El motor MRL funciona sempre amb pistó d’oli hidràulic.'
      ],
      correctIndex: 1,
      explanation: "Quan la cabina queda per sobre del replà hi ha risc mortal de caiguda pel buit inferior cap al fossat, per la qual cosa és obligatori tapar-lo físicament abans de rescatar ningú. En els MRL (Gearless), el motor és dins del forat i l'armari de maniobra al replà superior."
    }
  ]
};
