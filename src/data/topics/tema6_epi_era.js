export const tema6EpiEra = {
  id: 'tema-20',
  number: 20,
  code: 'MAN.SEGU.000',
  title: "Equips de protecció individual d'intervenció en emergències",
  category: 'Manual Operatiu SGO — EPI, Normes EN i Càlcul ERA',
  estimatedMinutes: 50,
  importance: {
    title: "Radar d'Examen — Tema 20 (MAN.SEGU.000 V.1): EPI, Normes EN i Càlcul d'Autonomia ERA",
    frequency: 'Molt Alta (4-6 preguntes fixes entre normes EN, pressions ERA i problema de càlcul d’autonomia)',
    summary:
      "Manual cabdal que combina normativa de prevenció (Llei 31/1995, RD 773/1997 i Reglament UE 2016/425), totes les normes UNE-EN de les peces d'EPI, els vestits químics Tipus 1 a 6, el funcionament i CÀLCUL D'AUTONOMIA de l'ERA (amb pàgina pròpia de càlcul a la Pàg. 4) i la descontaminació de partícules cancerígenes. A les Pàg. 6 i 7 tens el Formulari i Resum Executiu complet.",
    hotTopics: [
      'Cap. 1-2.1: Llei 31/1995, RD 773/1997 i Categories d’EPI I (risc mínim), II (intermedi) i III (risc mortal/irreversible → ERA, EPI foc, arnesos).',
      'Cap. 2.2-2.4: Normes EN 469 (foc estructural Xf/Xr/Y/Z Nivell 2), EN 15614 / ISO 15384 (forestal), EN 443 (casc estructural), EN 16471 (casc forestal), EN 16473 (casc rescat), EN 15090 (botes F1/F2/F3), EN 659 (guants) i Vestits químics Tipus 1 a 6.',
      'Cap. 3.1-3.3: ERA circuit obert (EN 137) a 300 bar → 1a etapa (6-8 bar) → pulmobanda (+1,5 a +3,9 mbar), avisos 170 / 110 / 60 bar (xiulet ≥ 90 dB a 55±5 bar) i Home Mort (30 s prealarma + 10 s alarma).',
      'Cap. 3.4 (CÀLCUL): Volum d’aire (6,8 L × 300 bar = 2.040 L), Reserva 25% (510 L / 75 bar), Aire útil (1.530 L) i Autonomia a 50 L/min = 30,6 min.',
      'Cap. 4: Gestió de contaminants (descontaminació In situ, A parc i Avançada industrial).'
    ],
    traps: [
      'Confondre EN 443 (casc foc estructural), EN 16471 (casc foc forestal) i EN 16473 (casc rescat tècnic).',
      'En el càlcul d’autonomia operativa de treball d’un ERA, oblidar descomptar el 25% de reserva de seguretat (només es calcula amb el 75% de l’aire total!).',
      'Confondre la pressió de l’alarma de la balisa digital / xiulet (~55-60 bar) amb els 30 segons + 10 segons del sensor d’immobilitat (Home Mort).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-2.1 Marc i Cat.',
      title: '1–2.1. Marc Normatiu (Llei 31/1995 i RD 773/1997), Categories I-II-III i Pictogrames',
      subtitle: 'Jerarquia preventiva, classificació europea de riscos (Reglament UE 2016/425) i marcatge CE.',
      blocks: [
        {
          type: 'text',
          heading: '1. Marc Legal i Principi de Jerarquia Preventiva',
          paragraphs: [
            "La Llei 31/1995 de Prevenció de Riscos Laborals (LPRL) i el Reial Decret 773/1997 (sobre disposicions mínimes de seguretat i salut relatives a la utilització pels treballadors d'Equips de Protecció Individual) estableixen que l'EPI és sempre l'ÚLTIMA BARRERA de protecció, quan els riscos no s'han pogut eliminar en l'origen ni controlar mitjançant mesures de protecció col·lectiva.",
            "La comercialització i certificació dels EPI a la Unió Europea es regeix pel Reglament (UE) 2016/425, que exigeix el marcatge CE i classifica tots els EPI en 3 categories segons la gravetat del risc."
          ]
        },
        {
          type: 'table',
          title: '2.1. Les 3 Categories d’EPI segons el Reglament (UE) 2016/425',
          subtitle: 'Classificació oficial, marcatge CE i exemples del manual MAN.SEGU.000',
          headers: ['Categoria', 'Nivell de Risc que Protegeix', 'Marcatge CE i Certificació', 'Exemples a Bombers'],
          rows: [
            ['Categoria I', 'Riscos mínims i superficials (l’usuari pot avaluar l’eficàcia per si mateix).', 'Marcatge "CE" simple (autocertificació del fabricant).', 'Ulleres de sol, guants de jardineria lleugers, roba de pluja ordinària.'],
            ['Categoria II', 'Riscos de gravetat intermèdia (no mortals ni irreversibles).', 'Marcatge "CE" amb examen UE de tipus per organisme notificat.', 'Guants de treball mecànic estàndard, calçat de seguretat bàsic, roba d’alta visibilitat.'],
            ['Categoria III', 'Riscos molt greus amb conseqüències MORTALS o irreversibles per a la salut.', 'Marcatge "CE + 4 dígits" (ex: CE 0158) que identifiquen l’organisme notificat que controla la producció anualment.', 'TOTS els EPI principals d’intervenció: ERA, vestit d’incendi estructural (EN 469), cascs de bomber, guants de foc, botes de bomber, vestits NRBQ i arnesos anticaigudes.']
          ],
          footnote: 'Pregunta clàssica: Què indiquen els 4 números al costat del marcatge CE (ex: CE 0158)? Indiquen que és un EPI de Categoria III i identifiquen l’organisme notificat controlador!'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 2.2-2.4 Normes EN',
      title: '2.2–2.4. Normes UNE-EN de les Peces d’EPI, Nivells Operatius i Vestits Químics',
      subtitle: 'Taula mestra de normes EN (469, 15614, 443, 16471, 16473, 15090, 659) i Tipus 1 a 6 NRBQ.',
      blocks: [
        {
          type: 'table',
          title: '2.2–2.3. Taula Oficial de Normes UNE-EN dels EPI de Bombers (Memorització Obligatòria)',
          subtitle: 'Codis normatius i paràmetres tècnics del Capítol 2 de MAN.SEGU.000',
          headers: ['Peça d’EPI', 'Norma Oficial UNE-EN / ISO', 'Paràmetres i Nivells Clau d’Examen'],
          rows: [
            ['Jaqueta i Cubrepantaló Estructural (EPI Pesant)', 'UNE-EN 469', '4 capes (teixit exterior + membrana impermeable/transpirable + barrera tèrmica + folre). Avalua 4 índexs en Nivell 1 o Nivell 2 (Bombers usa Nivell 2!): Xf (transferència calor flama), Xr (calor radiant), Y (impermeabilitat a l’aigua) i Z (resistència al vapor d’aigua / transpirabilitat).'],
            ['Roba d’Incendi Forestal i Rescat (EPI Lleuger)', 'UNE-EN 15614 / ISO 15384', 'Monocapa ignífuga lleugera i molt transpirable (evita el cop de calor en esforç prolongat).'],
            ['Casc d’Incendi Estructural', 'UNE-EN 443', 'Casc integral (Tipus B, cobreix orelles i clatell) amb pantalla facial i ocular, resistent a flama directa, impacte, perforació i aïllament elèctric.'],
            ['Casc d’Incendi Forestal', 'UNE-EN 16471', 'Casc lleuger ventilat per a extinció d’incendis en espais naturals.'],
            ['Casc de Rescat Tècnic', 'UNE-EN 16473', 'Casc per a salvament i rescat tècnic (sovint combinat en un sol casc dual forestal/rescat EN 16471 + EN 16473).'],
            ['Botes de Bomber', 'UNE-EN 15090', 'Classificades en: Tipus 1 (F1: exterior/forestal sense riscos químics), Tipus 2 (F2: incendi estructural i rescat; F2A amb propietats antiestàtiques i F2I amb aïllament elèctric) i Tipus 3 (F3: emergències amb risc químic/NRBQ).'],
            ['Guants d’Incendi Estructural', 'UNE-EN 659', 'Protecció contra flama, calor de contacte/convectiva/radiant, tall, abrasió i penetració d’aigua o químics. (Guants mecànics/rescat: EN 388).'],
            ['Sotacasc (Capuz)', 'UNE-EN 13911', 'Teixit ignífug (aramida/viscosa) que protegeix coll, orelles i unió màscara-casc.'],
            ['Alta Visibilitat', 'UNE-EN ISO 20471', 'Bandes retroreflectants i fluorescents ( groc/vermell) per a intervencions en vies de trànsit.']
          ],
          footnote: 'Truc per als 3 cascs: 443 = Estructural | 16471 = Forestal (acaba en 1 d’Arbre) | 16473 = Rescat Tècnic.'
        },
        {
          type: 'table',
          title: '2.4. Classificació Europea dels Vestits de Protecció Química (Tipus 1 a Tipus 6)',
          subtitle: 'De màxima hermeticitat (gasos) a protecció mínima (esquitxades lleugeres)',
          headers: ['Tipus de Vestit Químic', 'Hermeticitat i Agent contra el qual Protegeix', 'Subtipus i Norma'],
          rows: [
            ['Tipus 1 (Hermètic a GASOS)', 'Estanc a gasos i vapors químics (pressió positiva interior).', 'EN 943: 1a (ERA a DINS del vestit, encapsulat), 1b (ERA a FORA del vestit), 1c (alimentat per línia d’aire exterior) i 1-ET (Emergències).'],
            ['Tipus 2 (No hermètic a gasos)', 'Protegeix contra gasos mitjançant sobrepressió interna contínua per línia d’aire.', 'EN 943-1 (ús industrial, rar en emergències).'],
            ['Tipus 3 (Raigs de LÍQUID a pressió)', 'Estanc a projeccions de líquids en forma de RAIG (jet) a pressió.', 'UNE-EN 14605 (costures termosellades).'],
            ['Tipus 4 (Líquids POLVORITZATS)', 'Estanc a líquids polvoritzats (esprai / aerosol líquid).', 'UNE-EN 14605.'],
            ['Tipus 5 (PARTÍCULES sòlides)', 'Protecció del cos complet contra pols i partícules sòlides en suspensió (ex: amiant/fibrociment).', 'UNE-EN ISO 13982-1.'],
            ['Tipus 6 (Esquitxades lleugeres)', 'Protecció limitada contra petites esquitxades líquides sense pressió.', 'UNE-EN 13034.']
          ],
          footnote: 'Ordre fàcil de recordar (1 a 6): 1=Gas hermètic | 2=Gas no hermètic | 3=Raig líquid | 4=Esprai líquid | 5=Partícules/Pols | 6=Esquitxades.'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 3.1-3.3 ERA',
      title: '3.1–3.3. Equips de Protecció Respiratòria (ERA): Parts, Pressions i Alarmes',
      subtitle: 'Circuit obert (EN 137), etapes de pressió (300 bar → 6-8 bar → +1,5-3,9 mbar), avisos i Home Mort.',
      blocks: [
        {
          type: 'text',
          heading: '3.1–3.2. Equips Filtrants vs. Aïllants i Arquitectura de l’ERA (UNE-EN 137)',
          paragraphs: [
            "Els equips filtrants (mascaretes FFP1, FFP2 i FFP3 o filtres de gasos) depenen de l'atmosfera ambient i MAI es poden utilitzar en incendis en espais tancats ni quan l'oxigen és inferior al 19,5% (o el tòxic és desconegut o molt concentrat). En aquests escenaris és obligatori un Equip Aïllant Autònom: l'ERA de circuit obert d'aire comprimit a pressió positiva (norma UNE-EN 137 Tipus 2 per a bombers, amb màscara facial completa UNE-EN 136 Classe 3).",
            "L'ERA consta de 5 parts principals: 1) Ampolla d'aire comprimit (composada o d'acer, de 6 L o 6,8 L a 300 bar), 2) Espatllera ergonòmica amb arnés, 3) Manoreductor (1a etapa), 4) Regulador a demanda o pulmobanda (2a etapa) + Màscara facial, i 5) Unitat de control electrònic / Manòmetre + Xiulet d'alarma + Dispositiu d'Home Mort (PASS)."
          ]
        },
        {
          type: 'table',
          title: '3.2–3.3. Escala de Pressions, Avisos de la Balisa i Sensor d’Home Mort de l’ERA',
          subtitle: 'Totes les xifres tècniques del Capítol 3 de MAN.SEGU.000 que pregunta el tribunal',
          headers: ['Component / Alarma', 'Valor Numèric Oficial (MAN.SEGU.000)', 'Funció i Significat Operatiu'],
          rows: [
            ['Alta Pressió (Ampolla)', '300 bar (ampolla de composite de 6,8 L o acer de 6 L)', 'Inclou un factor de compressibilitat real de l’aire (~0,9 a 300 bar, però en càlcul teòric d’examen es fa V × P).'],
            ['Mitjana Pressió (1a Etapa: Manoreductor)', 'Redueix de 300 bar a 6 – 8 bar constants', 'Incorpora una vàlvula de seguretat tarada a ~11-12 bar per si falla el manoreductor.'],
            ['Baixa Pressió Positiva (2a Etapa: Pulmobanda)', '+1,5 a +3,9 mbar (mil·libars) sobre la pressió atmosfèrica', 'La PRESSIÓ POSITIVA dins la màscara garanteix que, si hi ha una petita fuita al contorn facial, surti aire net cap a fora i MAI entri fum tòxic!'],
            ['Avisos Visuals de la Balisa Electrònica', '170 bar (Verd → Groc) | 110 bar (Groc) | 60 bar (Vermell)', '1) >170 bar: Verd.\n2) 170 bar: Passa a Groc (avís d’atenció).\n3) 110 bar: Segon avís groc / intermitent.\n4) 60 bar: Vermell + Alarma acústica de retirada!'],
            ['Xiulet Acústic de Reserva (EN 137)', 'S’activa a 55 ± 5 bar (≈ 60 bar) amb potència ≥ 90 dB', 'Consumeix ~5 L/min (si és pneumàtic) i ha de sonar contínuament fins que s’esgota l’aire. Indica sortida immediata a zona segura.'],
            ['Dispositiu d’Home Mort (PASS)', '30 segons d’immobilitat (Prealarma) + 10 segons (Alarma total)', 'Si el bomber queda immòbil 30 s, sona una prealarma (que es cancel·la movent-se); si passen 10 s més sense moviment (40 s totals), es dispara l’alarma màxima d’emergència (>95 dB).'],
            ['3.5. Caputxa de Rescat', 'Connectada a la presa auxiliar de mitjana pressió (6-8 bar)', 'Permet evacuar una víctima a través del fum compartint l’aire de l’ampolla del bomber (redueix l’autonomia a la meitat!).']
          ],
          footnote: 'Memoritza la seqüència d’avisos de pressió: 300 bar (ple) → 170 bar → 110 bar → 60 bar (55±5 bar xiulet ≥90 dB). Home mort: 30 s + 10 s.'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 3.4 🧮 Càlcul ERA',
      title: '3.4. Càlcul de Consums, Reserva del 25% i Autonomia Operativa de l’ERA',
      subtitle: 'Fórmules d’examen per calcular el volum d’aire total, la reserva de seguretat i els minuts de treball.',
      blocks: [
        {
          type: 'text',
          heading: '3.4. Teorema de Boyle Aplicat al Càlcul d’Autonomia d’un ERA',
          paragraphs: [
            "Aplicant la Llei de Boyle-Mariotte (P₁ · V₁ = P₂ · V₂), el volum total d'aire disponible a pressió atmosfèrica (1 bar) contingut en una ampolla és el producte de la seva capacitat hidràulica en litres (V) per la pressió manomètrica de càrrega en bar (P).",
            "Segons el manual MAN.SEGU.000 (secció 3.4), en l'operativa de bombers es reserva sempre un 25% DE L'AIRE TOTAL com a marge de seguretat i retirada (equivalent als últims 75 bar d'una ampolla de 300 bar). Per tant, el Temps de Treball Operatiu (Autonomia Útil) es calcula utilitzant només el 75% de l'aire total!"
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: 'Càlcul Oficial d’Autonomia Total vs. Autonomia Operativa (Reserva 25%)',
          formula: 'V_total = V_amp · P   |   V_útil = 0,75 · (V_amp · P)   |   t_operatiu = V_útil / C',
          variables: [
            { symbol: 'V_amp', meaning: 'Volum geomètric de l’ampolla (típicament 6,8 L de composite o 6 L d’acer)' },
            { symbol: 'P', meaning: 'Pressió de l’ampolla en bar (plena = 300 bar)' },
            { symbol: 'V_total', meaning: 'Litres totals d’aire a 1 bar: 6,8 L × 300 bar = 2.040 litres (en ampolla 6 L = 1.800 L)' },
            { symbol: 'Reserva 25%', meaning: '0,25 × 2.040 L = 510 litres reservats per a la sortida/emergència (equival a 75 bar)' },
            { symbol: 'V_útil (75%)', meaning: '0,75 × 2.040 L = 1.530 litres disponibles per treballar fins a l’avís de retirada' },
            { symbol: 'C', meaning: 'Consum d’aire del bomber en L/min (estàndard d’intervenció = 50 L/min)' }
          ],
          trick:
            'Memoritza les 4 xifres de l’ampolla reglamentària de 6,8 L a 300 bar amb consum d’intervenció de 50 L/min (exemple literal del PDF pàg. 19):\n• Aire Total = 2.040 L (Autonomia teòrica total fins a 0 bar = 2.040 / 50 = 40,8 min)\n• Reserva 25% = 510 L (10,2 min de reserva)\n• Aire Útil (75%) = 1.530 L\n• AUTONOMIA OPERATIVA DE TREBALL = 1.530 / 50 = 30,6 minuts (≈ 30 minuts)!',
          example:
            'Problema resolt pas a pas (MAN.SEGU.000 pàg. 19):\nTenim una ampolla de 6,8 L carregada a 300 bar i un bomber amb un consum mitjà d’intervenció de 50 L/min. Quina és l’autonomia operativa de treball deixant el 25% de reserva?\n1) Volum total = 6,8 L × 300 bar = 2.040 L.\n2) Reserva (25%) = 2.040 × 0,25 = 510 L.\n3) Volum útil de treball (75%) = 2.040 - 510 = 1.530 L.\n4) Temps operatiu = 1.530 L / 50 L/min = 30,6 minuts.'
        },
        {
          type: 'table',
          title: '3.4. Taula Oficial de Consum Respiratori Humà segons el Nivell d’Esforç',
          subtitle: 'Valors de referència (L/min) del manual MAN.SEGU.000 i autonomia resultant (ampolla 6,8 L a 300 bar)',
          headers: ['Activitat / Nivell d’Esforç Físic', 'Consum d’Aire (C)', 'Autonomia Total (2.040 L)', 'Autonomia Operativa 75% (1.530 L)'],
          rows: [
            ['1. Repòs absolut / Estirat', '10 L/min', '204 min', '153 min'],
            ['2. Marxa suau / Esforç lleuger', '20 L/min', '102 min', '76,5 min'],
            ['3. Treball moderat', '30 a 40 L/min', '51 – 68 min', '38,2 – 51 min'],
            ['4. Esforç mitjà-alt d’intervenció (Càlcul Estàndard SGO)', '50 L/min', '40,8 min', '30,6 min (valor oficial del manual!)'],
            ['5. Esforç extrem / Pànic / Pujar escales carregat', '80 a 100 L/min', '20,4 – 25,5 min', '15,3 – 19,1 min']
          ],
          footnote: 'Atenció: En esforç extrem o estrès (100 L/min), una ampolla de 300 bar arriba a la reserva en només 15 minuts!'
        }
      ]
    },
    {
      pageNumber: 5,
      shortLabel: 'Pàg. 5 · Cap. 4 Contaminants',
      title: '4. Manteniment dels EPI i Gestió de Contaminants (3 Nivells de Descontaminació)',
      subtitle: 'Prevenció de la toxicitat crònica (sutge, HAP, amiant) i protocol In situ, A parc i Avançat.',
      blocks: [
        {
          type: 'text',
          heading: '4.1–4.2. El Risc Silenciós dels Contaminants Cancerígens als EPI',
          paragraphs: [
            "Durant un incendi estructural o industrial, les fibres de l'EPI absorbeixen hidrocarburs aromàtics policíclics (HAP), benzè, dioxines, metalls pesants i fibres d'amiant. Aquests compostos són cancerígens i penetren per via inhalatòria i per absorció DÈRMICA (la pell del coll i les engonals absorbeix tòxics molt més ràpid quan la temperatura corporal és alta).",
            "Per trencar la cadena de contaminació creuada (no portar mai el sutge a la cabina del camió ni a les zones de vida del parc), el manual MAN.SEGU.000 estableix un protocol obligatori en 3 nivells de neteja i descontaminació."
          ]
        },
        {
          type: 'table',
          title: '4.2. Els 3 Nivells Oficials de Neteja i Descontaminació dels EPI (MAN.SEGU.000)',
          subtitle: 'Procediment des de l’escenari de l’incendi fins a la bugaderia industrial especialitzada',
          headers: ['Nivell (Secció)', 'On i Quan es Realitza?', 'Accions Obligatòries del Protocol SGO'],
          rows: [
            ['4.2.2. Neteja IN SITU (Al lloc del servei)', 'Immediatament després de sortir de la zona calenta, abans de pujar al camió.', '1) Mantenir l’ERA o mascareta FFP3 posada mentre es raspalla l’EPI en sec o es renta amb aigua a baixa pressió per treure el sutge gruixut.\n2) Retirar l’EPI evitant tocar la cara exterior amb les mans nues.\n3) Introduir les peces contaminades dins de BOSSES ESTANQUES (o solubles en aigua) i guardar-les al maleter/cofre exterior del vehicle (PROHIBIT entrar EPI bruts a la cabina del camió!).\n4) Rentat de mans, cara i coll amb tovalloletes humides in situ.'],
            ['4.2.3. Neteja A PARC (Zona Bruta)', 'En arribar al parc de bombers, a la zona de neteja d’EPI.', 'Dutxa immediata del bomber ("dins la primera hora") i rentat superficial d’eines, botes, casc i espatllera d’ERA a la zona bruta del parc. Mai entrar amb l’EPI d’intervenció a les dependències de descans, menjador o dormitoris!'],
            ['4.2.4. Neteja AVANÇADA (Descontaminació profunda)', 'Servei de bugaderia industrial especialitzada.', 'Enviament de la bossa tancada (jaqueta, cubrepantaló, guants, sotacasc) al centre de rentat avançat per a desinfecció tèrmica/química controlada, re-impregnació hidròfuga i revisió de costures i bandes reflectants.']
          ],
          footnote: 'Regla d’or SGO: Els EPI bruts d’un incendi viatgen SEMPRE embossats dins d’un cofre o armari exterior del camió, mai dins la cabina de la dotació!'
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      isFormulaSheet: true,
      shortLabel: 'Pàg. 6 · 🧮 Formulari i Resum 1/2',
      title: 'Resum Final (1/2) i Formulari de Càlcul d’ERA (MAN.SEGU.000)',
      subtitle: 'Totes les fórmules de consum respiratori, pressions d’ERA i taula numèrica del Tema 20.',
      blocks: [
        {
          type: 'table',
          title: 'Formulari Oficial de Càlcul d’Autonomia d’ERA i Pressions Reglamentàries',
          subtitle: 'Equacions i valors fixos per resoldre tots els problemes del Capítol 3 de MAN.SEGU.000',
          headers: ['Fórmula / Paràmetre', 'Expressió Matemàtica / Valor', 'Aplicació a l’Ampolla Estàndard (6,8 L a 300 bar)'],
          rows: [
            ['1. Volum Total d’Aire (Boyle)', 'V_total (L) = V_ampolla (L) × P (bar)', '6,8 L × 300 bar = 2.040 litres d’aire (en 6 L = 1.800 L)'],
            ['2. Reserva de Seguretat (25%)', 'V_reserva = 0,25 × V_total   (P_res = 0,25 × P)', '0,25 × 2.040 L = 510 litres (equival als últims 75 bar)'],
            ['3. Volum Útil de Treball (75%)', 'V_útil = 0,75 × V_total = V_total - V_reserva', '0,75 × 2.040 L = 1.530 litres útils (consumeix 225 bar)'],
            ['4. Autonomia Total (fins a 0 bar)', 't_total (min) = V_total / Consum (L/min)', 'A C = 50 L/min ⇒ 2.040 / 50 = 40,8 minuts totals'],
            ['5. Autonomia Operativa (75%)', 't_operatiu (min) = (0,75 × V_amp × P) / Consum', 'A C = 50 L/min ⇒ 1.530 / 50 = 30,6 minuts de treball!'],
            ['6. Etapes de Pressió de l’ERA', '300 bar (Alta) → 6-8 bar (Mitjana) → +1,5 a +3,9 mbar (Baixa)', 'La màscara treballa sempre en lleugera sobrepressió positiva'],
            ['7. Avisos de la Balisa Digital', '170 bar (Groc 1) → 110 bar (Groc 2) → 60 bar (Vermell)', 'Xiulet acústic EN 137: sona a 55 ± 5 bar amb ≥ 90 dB'],
            ['8. Temps de l’Home Mort (PASS)', '30 segons (Prealarma) + 10 segons (Alarma total)', 'Total 40 segons d’immobilitat per activar l’alarma màxima']
          ],
          footnote: 'Pàgina 1 de 2 del Resum i Formulari Final del Tema 20 (MAN.SEGU.000).'
        }
      ]
    },
    {
      pageNumber: 7,
      isSummary: true,
      shortLabel: 'Pàg. 7 · 📌 Resum 2/2 (Normes EN)',
      title: 'Resum Final (2/2): Síntesi de Normes UNE-EN, Tipus de Vestits i Paranys d’Examen',
      subtitle: 'Taula ultra-compacta de totes les normes UNE-EN i classificacions d’EPI del Tema 20.',
      blocks: [
        {
          type: 'table',
          title: 'Xifres i Normes UNE-EN Imprescindibles d’Examen — Tema 20 (EPI)',
          subtitle: 'Relació directa Norma ↔ Peça ↔ Detall que pregunta el tribunal',
          headers: ['Norma / Classificació', 'Peça d’EPI o Sistema', 'Dada Clau que Cal Recordar'],
          rows: [
            ['Llei 31/1995 i RD 773/1997', 'Marc legal d’ús dels EPI', 'Reglament (UE) 2016/425 per a comercialització i Categories I, II i III'],
            ['Categoria III (CE + 4 dígits)', 'EPI contra riscos mortals o irreversibles', 'Inclou ERA, roba de foc, cascs, botes, guants de foc, vestits químics i arnesos'],
            ['UNE-EN 469 (Nivell 2)', 'Jaqueta i cubrepantaló d’incendi estructural', '4 capes i 4 índexs: Xf (flama), Xr (radiació), Y (impermeabilitat), Z (vapor)'],
            ['UNE-EN 15614 / ISO 15384', 'Roba d’incendi forestal (EPI Lleuger)', 'Monocapa ignífuga transpirable per evitar l’estrès tèrmic'],
            ['UNE-EN 443', 'Casc d’incendi estructural', 'Integral (Tipus B) per a foc en edificis'],
            ['UNE-EN 16471 i UNE-EN 16473', 'Casc forestal (16471) i Casc rescat tècnic (16473)', '71 = Forestal | 73 = Rescat tècnic'],
            ['UNE-EN 15090 (F1 / F2 / F3)', 'Botes de bomber', 'F1 = Forestal/exterior | F2 = Estructural (F2A antiestàtica) | F3 = Risc químic'],
            ['UNE-EN 659 i UNE-EN 13911', 'Guants de foc (EN 659) i Sotacasc (EN 13911)', 'El sotacasc protegeix orelles, coll i contorn de màscara'],
            ['UNE-EN 137 i UNE-EN 136', 'ERA circuit obert (EN 137 Tipus 2) i Màscara (EN 136 Cl. 3)', 'Obligatori quan l’O₂ ambient és < 19,5% o en espais confinats/incendis'],
            ['Vestits Químics Tipus 1 a 6', '1=Gas estanc | 2=Gas no estanc | 3=Raig líquid | 4=Esprai | 5=Pols | 6=Esquitxada', 'Tipus 1a = ERA dins del vestit | Tipus 1b = ERA fora del vestit']
          ],
          footnote: 'Pàgina 2 de 2 del Resum Executiu del Tema 20 (MAN.SEGU.000).'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q20-1',
      difficulty: 'Fàcil',
      question: "Quina norma europea regula el vestit d'intervenció per a incendis estructurals (jaqueta i cubrepantaló de 4 capes) i quins són els seus 4 paràmetres d'assaig?",
      options: [
        'UNE-EN 15614 (paràmetres A, B, C, D)',
        'UNE-EN 469 (paràmetres Xf, Xr, Y, Z)',
        'UNE-EN 443 (paràmetres F1, F2, F3)',
        'UNE-EN 137 (paràmetres Tipus 1 a Tipus 6)'
      ],
      correctIndex: 1,
      explanation: 'La norma UNE-EN 469 regula la roba de protecció per a incendis estructurals mitjançant els 4 índexs: Xf (calor convectiva/flama), Xr (calor radiant), Y (penetració d’aigua) i Z (resistència al vapor d’aigua).'
    },
    {
      id: 'q20-2',
      difficulty: 'Mitjà',
      question: "Un bomber entra a un incendi amb una ampolla d'ERA de 6,8 litres carregada a 300 bar. Si el seu consum mitjà és de 50 L/min i es respecta el 25% de reserva de seguretat del manual MAN.SEGU.000, quina és la seva autonomia operativa de treball?",
      options: [
        '40,8 minuts',
        '30,6 minuts',
        '25,0 minuts',
        '15,3 minuts'
      ],
      correctIndex: 1,
      explanation: 'Volum total = 6,8 × 300 = 2.040 L. Descomptant el 25% de reserva (510 L), queden 1.530 L útils. A 50 L/min: 1.530 / 50 = 30,6 minuts.'
    },
    {
      id: 'q20-3',
      difficulty: 'Mitjà',
      question: "Quines són les tres pressions a les quals la balisa electrònica de l'ERA emet avisos i quants segons d'immobilitat triga el dispositiu d'Home Mort a activar la prealarma i l'alarma total?",
      options: [
        'Avisos a 200, 100 i 50 bar | Home mort: 60 s + 30 s',
        'Avisos a 170, 110 i 60 bar | Home mort: 30 s (prealarma) + 10 s (alarma)',
        'Avisos a 250, 150 i 75 bar | Home mort: 15 s + 15 s',
        'Avisos a 180, 90 i 30 bar | Home mort: 45 s + 15 s'
      ],
      correctIndex: 1,
      explanation: "Segons el manual MAN.SEGU.000, la balisa avisa als 170 bar, 110 bar i 60 bar, i el sensor d'Home Mort salta en prealarma als 30 s d'immobilitat i en alarma total 10 s després."
    },
    {
      id: 'q20-4',
      difficulty: 'Difícil',
      question: "Quina diferència hi ha entre les normes UNE-EN 443, UNE-EN 16471 i UNE-EN 16473 relatives als cascs de bomber?",
      options: [
        'Totes tres regulen el mateix casc estructural.',
        'EN 443 és el casc estructural, EN 16471 és el casc d’incendi forestal i EN 16473 és el casc de rescat tècnic.',
        'EN 443 és el casc forestal i EN 16471 és el casc estructural.',
        'EN 16473 regula les botes de risc químic Tipus 3.'
      ],
      correctIndex: 1,
      explanation: 'EN 443 = casc estructural; EN 16471 = casc forestal; EN 16473 = casc de rescat tècnic.'
    },
    {
      id: 'q20-5',
      difficulty: 'Fàcil',
      question: "Segons el protocol de gestió de contaminants del capítol 4 de MAN.SEGU.000, on s'han de transportar els EPI bruts de sutge un cop finalitzada l'extinció d'un incendi estructural?",
      options: [
        'Posats a sobre del bomber dins la cabina per no passar fred.',
        'Penjats als seients del darrere de la cabina del camió.',
        'Dins de bosses estanques tancades, guardades en un cofre o maleter exterior del vehicle (mai dins la cabina).',
        'Es deixen al lloc del sinistre perquè els reculli una empresa.'
      ],
      correctIndex: 2,
      explanation: "Després de la neteja in situ, els EPI contaminats s'introdueixen en bosses tancades i es transporten als cofres exteriors del vehicle per evitar contaminar la cabina."
    },
    {
      id: 'q20-6',
      difficulty: 'Fàcil',
      question: "Segons el Reglament (UE) 2016/425, què indiquen els 4 dígits que apareixen al costat del marcatge CE (per exemple, CE 0158) en un EPI com l'ERA o el vestit d'intervenció?",
      options: [
        "L'any de caducitat obligatòria del teixit ignífug.",
        "El codi del parc de bombers al qual pertany l'equip.",
        "Que es tracta d'un EPI de Categoria III (riscos mortals o irreversibles) i identifiquen l'organisme notificat que en controla la producció anualment.",
        "Que l'EPI és de Categoria I amb autocertificació del fabricant."
      ],
      correctIndex: 2,
      explanation: "Al Reglament (UE) 2016/425, el marcatge CE + 4 dígits correspon als EPI de Categoria III (riscos molt greus amb conseqüències mortals o irreversibles) i identifica l'organisme notificat controlador."
    },
    {
      id: 'q20-7',
      difficulty: 'Fàcil',
      question: "Quina norma UNE-EN regula les botes de bomber i a quin tipus d'intervenció correspon cadascuna de les tres categories (F1, F2 i F3)?",
      options: [
        "UNE-EN 15090: Tipus 1 (F1) per a exterior/forestal sense risc químic, Tipus 2 (F2) per a incendi estructural i rescat, i Tipus 3 (F3) per a emergències amb risc químic/NRBQ.",
        "UNE-EN 659: F1 per a fred extrem, F2 per a rescat aquàtic i F3 per a alta tensió.",
        "UNE-EN 13911: F1 per a incendi estructural, F2 per a forestal i F3 per a rescat en alçada.",
        "UNE-EN 14605: F1 per a gasos hermètics, F2 per a raigs líquids i F3 per a pols sòlida."
      ],
      correctIndex: 0,
      explanation: "La norma UNE-EN 15090 classifica les botes de bomber en Tipus 1 (F1: forestal/exterior), Tipus 2 (F2: estructural/rescat, amb variants F2A antiestàtica i F2I aïllament elèctric) i Tipus 3 (F3: risc químic/NRBQ)."
    },
    {
      id: 'q20-8',
      difficulty: 'Mitjà',
      question: "Dins la classificació europea dels vestits de protecció química (Tipus 1 a Tipus 6), quina diferència hi ha entre un vestit Tipus 1a, un Tipus 1b i un Tipus 3?",
      options: [
        "El Tipus 1a és per a partícules sòlides, el 1b per a esquitxades lleugeres i el Tipus 3 per a calor radiant.",
        "Els Tipus 1a i 1b no són hermètics a gasos i només el Tipus 3 és estanc a vapors químics.",
        "Tots tres tipus s'utilitzen exclusivament amb filtres FFP3 sense ERA.",
        "El Tipus 1a i el 1b són hermètics a gasos (EN 943), portant l'ERA a dins del vestit en el 1a (encapsulat) i a fora en el 1b; el Tipus 3 protegeix contra raigs de líquid a pressió (EN 14605)."
      ],
      correctIndex: 3,
      explanation: "Els vestits Tipus 1 (EN 943) són hermètics a gasos: l'1a porta l'ERA a l'interior (encapsulat) i l'1b porta l'ERA a l'exterior. El Tipus 3 (UNE-EN 14605) és estanc a projeccions de líquids en forma de raig a pressió."
    },
    {
      id: 'q20-9',
      difficulty: 'Mitjà',
      question: "Quins són els valors de pressió en les dues etapes de reducció d'un ERA de circuit obert a 300 bar i quina funció té la pressió positiva dins la màscara?",
      options: [
        "1a etapa (manoreductor): redueix a 6–8 bar | 2a etapa (pulmobanda): manté +1,5 a +3,9 mbar de sobrepressió perquè, en cas de petita fuita facial, surti aire net i mai entri fum tòxic.",
        "1a etapa: redueix a 50 bar | 2a etapa: genera una depressió de -5 mbar per facilitar l'aspiració.",
        "1a etapa: redueix a 15–20 bar | 2a etapa: manté exactament 1 bar negatiu respecte de l'exterior.",
        "1a etapa: redueix directament a +1,5 mbar sense mitjana pressió."
      ],
      correctIndex: 0,
      explanation: "El manoreductor (1a etapa) passa de 300 bar a 6-8 bar (mitjana pressió) i la pulmobanda (2a etapa) manté una lleugera sobrepressió positiva (+1,5 a +3,9 mbar) dins la màscara per impedir l'entrada de gasos tòxics."
    },
    {
      id: 'q20-10',
      difficulty: 'Mitjà',
      question: "Un bomber treballa amb una ampolla d'acer de 6 litres carregada a 300 bar i té un consum de treball moderat de 30 L/min. Quina serà la seva autonomia operativa de treball si s'aplica el 25% de reserva de seguretat del manual MAN.SEGU.000?",
      options: [
        "60 minuts",
        "30,6 minuts",
        "45 minuts",
        "15 minuts"
      ],
      correctIndex: 2,
      explanation: "Volum total = 6 L × 300 bar = 1.800 L. Descomptant el 25% de reserva (450 L), l'aire útil (75%) és de 1.350 L. Dividit pel consum de 30 L/min: 1.350 / 30 = 45 minuts d'autonomia operativa."
    },
    {
      id: 'q20-11',
      difficulty: 'Difícil',
      question: "Quan està prohibit utilitzar equips filtrants (mascaretes FFP o filtres de gasos) i quines normes UNE-EN han de complir l'ERA i la màscara facial completa reglamentaris per a bombers?",
      options: [
        "Només es prohibeixen per sota del 10% d'oxigen; l'ERA segueix la norma UNE-EN 469 i la màscara la UNE-EN 659.",
        "Es poden utilitzar en qualsevol incendi si porten filtre FFP3; l'ERA segueix la UNE-EN 15090.",
        "Només estan prohibits a l'exterior; l'ERA és UNE-EN 443 Tipus B i la màscara UNE-EN 16471.",
        "Estan prohibits en incendis en espais tancats, amb oxigen inferior al 19,5% o tòxic desconegut/molt concentrat; cal un ERA UNE-EN 137 Tipus 2 amb màscara UNE-EN 136 Classe 3."
      ],
      correctIndex: 3,
      explanation: "Els equips filtrants depenen de l'atmosfera ambient i mai es poden usar en incendis en espais tancats, amb O₂ < 19,5% o tòxics desconeguts/concentrats. L'ERA de bombers és UNE-EN 137 Tipus 2 amb màscara UNE-EN 136 Classe 3."
    },
    {
      id: 'q20-12',
      difficulty: 'Difícil',
      question: "A quina pressió i amb quina potència sonora mínima s'activa el xiulet acústic de reserva de l'ERA (EN 137), i quin efecte té connectar la caputxa de rescat (apartat 3.5) a la presa auxiliar?",
      options: [
        "S'activa a 110 bar amb ≥ 70 dB; la caputxa de rescat no altera l'autonomia perquè porta filtre propi.",
        "S'activa a 55 ± 5 bar amb ≥ 90 dB; la caputxa de rescat es connecta a la presa de mitjana pressió (6–8 bar) i redueix l'autonomia a la meitat.",
        "S'activa a 170 bar amb ≥ 95 dB; la caputxa de rescat es connecta directament a l'alta pressió (300 bar).",
        "S'activa a 30 bar amb ≥ 60 dB; la caputxa de rescat només funciona amb l'ampolla buida."
      ],
      correctIndex: 1,
      explanation: "El xiulet acústic EN 137 s'activa a 55 ± 5 bar amb una potència ≥ 90 dB (consumint ~5 L/min si és pneumàtic). La caputxa de rescat s'endolla a la presa auxiliar de mitjana pressió (6-8 bar) i divideix l'autonomia per dos en compartir aire."
    }
  ]
};
