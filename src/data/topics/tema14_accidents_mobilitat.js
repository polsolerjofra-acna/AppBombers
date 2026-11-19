export const tema14AccidentsMobilitat = {
  id: 'tema-32',
  number: 32,
  code: 'MAN.SVVH.000',
  title: 'Intervenció bàsica en accidents de mobilitat viària',
  category: 'Manual Operatiu SGO — Excarceració, Estabilització i Biomecànica Viària',
  estimatedMinutes: 55,
  importance: {
    title: "Radar d'Examen — Tema 32 (MAN.SVVH.000 v.1): Accidents de Mobilitat Viària",
    frequency: 'Molt Alta (5-7 preguntes fixes sobre muntants A-B-C, atrapament Físic 1 vs 2, Biomecànica i 5a falca)',
    summary:
      "Manual de rescat en sinistres viaris i ferroviaris: anatomia del vehicle (muntants A-B-C-D, vidre laminat vs. temperat), 4 moviments, autobusos (ECE R66), camions (18-40 t, 24 V), ferrocarril (TAV >300 km/h), Vehicle A vs. B, atrapament Mecànic vs. Físic I i II, Biomecànica (Ec = ½·m·v², fractures), estabilització en 3/4/5 punts (5a falca), La Catalana / La Tenda i AGO.",
    hotTopics: [
      'Cap. 1-2: Anatomia del turisme (Muntants A, B, C, D; vidre laminat al parabrisa vs. temperat a laterals/luneta), els 4 moviments d’inestabilitat (longitudinal, balanceig, capcineig, guinyada), seguretat primària/secundària/terciària (eCall), autobusos (4 m alt / 2,55 m ample / 13,5-18,75 m llarg / 18 t i ECE R66), camions (18 t, 25-26 t, 31-32 t, 40 t i bateries 24 V) i ferrocarril (TAV >300 km/h, bogis i confirmació del Centre de Control Ferroviari).',
      'Cap. 3.2.3-3.2.5: Vehicle A (on anem a rescatar la víctima) vs. Vehicle B (el que està a sobre i cal estabilitzar primer), Atrapament Mecànic vs. Físic Tipus I (per lesions mèdiques, sense bloqueig estructural) vs. Físic Tipus II (atrapat físicament per l’estructura/ferralla!) i Alliberament Controlat vs. Immediat vs. d’Emergència (Rautek) + Hora d’Or (60 min: 10+10+20+20).',
      'Cap. 3.2.6 (CÀLCUL BIOMECÀNIC): Energia cinètica (Ec = ½ · m · v²), indicadors d’alta energia (deformació >30 cm frontal / >45 cm lateral, projecció >7 m, caiguda >3 m) i els 5 mecanismes de fractura òssia (Flexió, Cisallament, Compressió [comminuta], Torsió [espiroide] i Tracció) + PAI (Pla A òptim i Pla B ràpid).',
      'Cap. 4-5: Estabilització manual (4 bombers) i primària en 3, 4 i 5 punts (la "cinquena falca" sota el muntant C posterior), maniobres ("llauna de sardines" en autobús, "la catalana" d’elevació de sostre i "la tenda" en bolcada total) i AGO (Àrea d’eines, Àrea de ferralla, Àrea de relleu i SOS).'
    ],
    traps: [
      'PARANY ESTRELLA D’EXAMEN (3.2.4): L’Atrapament Físic Tipus I és quan la víctima NO està bloquejada per la ferralla però no pot sortir per si sola a causa de les seves LESIONS MÈDIQUES (cal fer espai per treure-la en eix 0°); l’Atrapament Físic Tipus II és quan el seu cos està físicament presoner dels pedals/tablier/muntants deformats (cal descarceració hidràulica)!',
      'Confondre Capcineig (pitch: moviment del morro i maleter amunt i avall sobre l’eix transversal) amb Balanceig (roll: inclinació lateral esquerra-dreta sobre l’eix longitudinal) i Guinyada (yaw: gir com una baldufa sobre l’eix vertical).',
      'En un xoc amb un vehicle a sobre d’un altre: quin és el Vehicle A i quin el Vehicle B? El Vehicle A és SEMPRE el vehicle que conté les víctimes a rescatar; el Vehicle B és l’obstacle que hi ha a sobre (i per seguretat s’estabilitza primer el Vehicle B!).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-2 Vehicles i Tren',
      title: '1–2. Anatomia del Vehicle (Muntants i Vidres), 4 Moviments, Autobusos, Camions i Ferrocarril',
      subtitle: 'Estadística (23.591 el 2023), vidre laminat vs. temperat, eCall, pesos de camions (18-40 t) i TAV.',
      blocks: [
        {
          type: 'text',
          heading: '⚠️ No confondre! Muntants A/B/C/D, Vidre Laminat vs. Temperat i els 4 Moviments',
          paragraphs: [
            "• MUNTANTS (de davant a darrere): A = marc del parabrisa; B = pilar central (pretensor del cinturó); C/D = pilars posteriors. Regla d'or: 'pelar' sempre el plàstic interior abans de tallar!",
            "• VIDRES: Parabrisa davanter = LAMINAT (2 vidres + PVB; no s'engruna, es talla amb serra); Finestres laterals i luneta = TEMPERAT (es trenca en milers de daus amb punxó a una cantonada).",
            "• MOVIMENTS: Balanceig (Roll = lateral esquerra-dreta), Capcineig (Pitch = morro amunt i avall) i Guinyada (Yaw = gir horitzontal sobre eix vertical)."
          ]
        },
        {
          type: 'table',
          title: '2.1. Estructura del Turisme, Vidres, Els 4 Moviments d’Inestabilitat i Seguretat Viària',
          subtitle: 'Conceptes tècnics fonamentals del Capítol 2 de MAN.SVVH.000 (Estadística: ~22.000 accidents/any; 23.591 el 2023)',
          headers: ['Element / Concepte', 'Definició i Classificació Oficial (MAN.SVVH.000)', 'Detall Operatiu i de Tall'],
          rows: [
            ['2.1.1. Muntants o Pilars (A, B, C, D)', 'Es numeren de davant cap enrere:\n• Muntant A: Marc del parabrisa davanter.\n• Muntant B: Pilar central entre portes davantera i posterior (allotja el pretensor i guia del cinturó!).\n• Muntant C (i D en familiars/SUV): Pilar posterior de la luneta.', 'Abans de tallar un muntant amb la cisalla (700 bar), és OBLIGATORI "pelar" (desvestir) el guarnecido interior de plàstic per no tallar a cegues una bombona de gas d’airbag de cortina ni el generador del pretensor!'],
            ['2.1.1. Tipus de Vidres d’Automoció', '1) Vidre LAMINAT (2 capes de vidre + làmina central de PVB): al parabrisa davanter (i finestres d’alta gamma). No s’engruna; es talla amb serra de vidres o serra de sabre.\n2) Vidre TEMPERAT (Securit): a les finestres laterals i luneta posterior. S’engruna en milers de daus amb un punxó trencavidres a la cantonada.\n3) Policarbonat: En vehicles especials o sostres panoràmics.', 'Parabrisa = Laminat (es talla amb serra) | Laterals = Temperat (es punxen a una cantonada després d’empaperar/protegir la víctima).'],
            ['2.1.3. Els 4 Moviments d’Inestabilitat del Vehicle', '1) Moviment Longitudinal / Horitzontal: Desplaçament endavant o enrere sobre les rodes.\n2) Balanceig (Roll): Oscil·lació lateral esquerra-dreta (sobre l’eix longitudinal).\n3) Capcineig (Pitch): Oscil·lació del morro i la part posterior amunt i avall (sobre l’eix transversal).\n4) Guinyada (Yaw): Rotació o pivotament sobre l’eix vertical.', 'L’estabilització amb falques elimina tant la suspensió vertical com els 4 moviments (longitudinal, balanceig, capcineig i guinyada).'],
            ['2.1.4. Seguretat Primària, Secundària i Terciària', '• Primària (Activa): Evita que es produeixi l’accident (ABS, ESP, frens, llums, direcció).\n• Secundària (Passiva): Minimitza les lesions dels ocupants durant l’impacte (cinturó, airbags, pretensors, reposacaps, xassís deformable).\n• Terciària (Post-accident): Actua després del xoc per facilitar el rescat i reduir seqüeles (sistema d’avís automàtic 112 eCall, tall automàtic de bateria i bomba de combustible, desbloqueig de portes).', 'Regla dels Airbags no activats (30-60-90 cm): Mantenir 30 cm del volant (conductor), 60 cm del tablier (acompanyant) i 25-30 cm dels laterals, i esperar 1-2 min després de desconnectar bateria (pel condensador de reserva!).']
          ],
          footnote: 'Memoritza els 3 nivells de seguretat: Primària = Activa (ABS/ESP) | Secundària = Passiva (Airbag/Cinturó) | Terciària = Post-impacte (eCall / tall combustible).'
        },
        {
          type: 'table',
          title: '2.2–2.4. Dades Tècniques Oficials d’Autobusos, Camions i Ferrocarril (MAN.SVVH.000 Cap. 2)',
          subtitle: 'Dimensions, tonatges, voltatges i regles de seguretat ferroviària',
          headers: ['Tipus de Transport', 'Xifres Oficials del Manual MAN.SVVH.000', 'Particularitats Operatives de Rescat'],
          rows: [
            ['2.2. Autobusos i Autocars', '• Alçada màxima: 4,00 m (4,20 m doble pis).\n• Amplada màxima: 2,55 m.\n• Longitud: Rígid fins a 13,5–15 m | Articulat fins a 18,75 m.\n• MMA (2 eixos): 18 tones (fins a 25-28 t en 3 eixos).\n• Norma ECE R66: Anells estructurals antivolcada.', 'Accés prioritari per portes (vàlvula pneumàtica d’emergència exterior/interior), finestres d’emergència i escotilles de sostre. En bolcada lateral: obertura del sostre/terra amb la maniobra de la "llauna de sardines".'],
            ['2.3. Camions (Vehicles Pesants)', '• Camió rígid 2 eixos: 18 tones.\n• Camió rígid 3 eixos: 25 – 26 tones.\n• Camió rígid 4 eixos: 31 – 32 tones.\n• Tràiler articulat (4-5 eixos): 40 tones (44 t intermodal).\n• Sistema elèctric: 24 Volts (2 bateries de 12 V en sèrie!).', 'La cabina està suspesa sobre amortidors propis ( pneumàtics o de molla) i és basculant → és obligatori BLOQUEJAR LA SUSPENSIÓ DE LA CABINA amb cingles/puntals respecte al xassís abans d’excarcerar a dalt!'],
            ['2.4. Ferrocarril i TAV', '• TAV (Tren d’Alta Velocitat): Velocitats > 300 km/h.\n• Catenària d’alta tensió: 1.500 V / 3.000 V CC (FGC/Rodalies) fins a 25.000 V CA (25 kV en TAV!).\n• Estructura sobre 2 BOGIS (conjunts d’eixos i rodes molt pesants).', 'REGLA MORTAL FERROVIÀRIA: NO entrar a la caixa de vies ni tocar la catenària fins a tenir CONFIRMACIÓ OFICIAL DEL CENTRE DE CONTROL FERROVIARI del tall de circulació a totes dues vies i la posada a terra de la catenària!']
          ],
          footnote: 'Memoritza la sèrie de MMA de camions: 2 eixos = 18 t | 3 eixos = 25-26 t | 4 eixos = 31-32 t | Articulat = 40 t (i instal·lació de 24 V).'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 3 Valoració i Atrapaments',
      title: '3. Valoració Viària: Vehicle A vs. B, Atrapament Mecànic vs. Físic I i II, i Tipus d’Alliberament',
      subtitle: 'Diferència exacta entre Atrapament Físic I i Físic II, Hora d’Or (60 min) i Rautek.',
      blocks: [
        {
          type: 'text',
          heading: '⚠️ No confondre! Vehicle A vs. Vehicle B i Atrapament Físic Tipus I vs. Tipus II',
          paragraphs: [
            "• VEHICLE A vs. B: El Vehicle A conté la víctima a rescatar; el Vehicle B és el que està a sobre o recolzat. Sempre s'estabilitza PRIMER el Vehicle B!",
            "• MECÀNIC: Portes encallades, ocupant il·lès i lliure a dins. • FÍSIC TIPUS I: Ocupant lliure de ferralla però retingut per LESIONS MÈDIQUES (cal crear espai exterior per treure'l a 0°).",
            "• FÍSIC TIPUS II: Ocupant PRESONER físicament de pedals, tablier o muntants deformats (cal descarceració interior amb RAM i separador)."
          ]
        },
        {
          type: 'table',
          title: '3.2.3–3.2.5. Classificació Oficial de Vehicles (A/B), Atrapaments i Alliberaments (MAN.SVVH.000 Cap. 3)',
          subtitle: 'Definicions literals que el tribunal utilitza per a les preguntes de test',
          headers: ['Concepte / Categoria', 'Definició Exacta del Manual MAN.SVVH.000', 'Prioritat i Execució Operativa'],
          rows: [
            ['3.2.3. Vehicle A vs. Vehicle B', '• VEHICLE A: El vehicle que conté la víctima o víctimes que hem d’assistir i rescatar.\n• VEHICLE B: El vehicle (o obstacle) que es troba a sobre o recolzat contra el Vehicle A.', 'ORDRE D’ESTABILITZACIÓ: Encara que la víctima estigui al Vehicle A, quan hi ha un vehicle a sobre d’un altre s’ha d’estabilitzar SEMPRE PRIMER EL VEHICLE B (perquè no llisqui ni aixafi el Vehicle A mentre hi treballem)!'],
            ['3.2.4. Atrapament MECÀNIC', 'Les portes estan bloquejades pel xoc i l’ocupant no pot obrir-les, però l’habitacle està íntegre i la persona NO té lesions greus ni està atrapada per la xapa.', 'Un cop oberta o forçada la porta amb el separador, l’ocupant pot sortir pel seu propi peu.'],
            ['3.2.4. Atrapament FÍSIC TIPUS I (Mèdic / Clínic)', 'La víctima NO està bloquejada físicament per la ferralla del cotxe (hi ha espai lliure al seu voltant), però NO pot sortir per si mateixa a causa de les seves LESIONS MÈDIQUES (sospita de lesió medul·lar, fractures, inconsciència).', 'Exigeix maniobres de CREACIÓ D’ESPAI EXTERIOR (treure portes, abatre o tallar el sostre) per poder immobilitzar-la i extreure-la alineada en angle 0° amb tauler espinal.'],
            ['3.2.4. Atrapament FÍSIC TIPUS II (Estructural / Ferralla)', 'Alguna part del cos de la víctima (cames, pelvis, tòrax) està FÍSICAMENT PRESONERA o aixafada pels elements deformats del vehicle (tablier, columna de direcció, pedals).', 'Exigeix maniobres pesades de DESCARCERACIÓ INTERIOR (aixecament o desplaçament de tablier amb cilindre RAM i separador) abans de poder moure el pacient!'],
            ['3.2.5. Els 3 Tipus d’Alliberament (Extracció)', '1) Alliberament CONTROLAT (Òptim): Pacient hemodinàmicament estable → creació d’espai completa per a extracció en eix 0° amb immobilització total (collet + fèrules/ked + tauler).\n2) Alliberament IMMEDIAT (Ràpid): Pacient crític inestable que es deteriora (XABCDE compromès) → es prioritza el temps (~5-10 min) amb una via ràpida (Pla B) i només collet cervical + tauler.\n3) Alliberament d’EMERGÈNCIA (Maniobra de Rautek): Perill vital extern imminent (el vehicle s’està incendiant, risc d’explosió o enfonsament a l’aigua, o ACR) → extracció manual immediata en segons sense material!', 'L’Hora d’Or de Cowley (60 minuts des de l’impacte fins al quiròfan) es reparteix en la Regla 10-10-20-20: 10 min (arribada) + 10 min (valoració/estabilització) + 20 min (excarceració) + 20 min (trasllat a l’hospital).']
          ],
          footnote: 'No confonguis mai: Físic Tipus I = retingut per LESIONS (cal crear espai) | Físic Tipus II = presoner per la FERRALLA/TABLIER (cal descarcerar amb RAM).'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 3.2.6 🧮 Biomecànica',
      title: '3.2.6. Biomecànica de l’Accident (Ec = ½·m·v²), Indicadors de Gravetat i les 5 Fractures',
      subtitle: 'Càlcul d’energia cinètica, els 3 impactes del xoc, llindars de deformació i PAI (Pla A / Pla B).',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'formula',
          title: '3.2.6. Teorema de l’Energia Cinètica Aplicat a la Biomecànica del Xoc',
          formula: 'E_c = ½ · m · v²   (La velocitat actua al QUADRAT!)',
          variables: [
            { symbol: 'E_c', meaning: 'Energia cinètica que s’ha de dissipar en la deformació del vehicle i el cos (Joules)' },
            { symbol: 'm', meaning: 'Massa del vehicle o de l’ocupant en quilograms (kg)' },
            { symbol: 'v', meaning: 'Velocitat en el moment de l’impacte en metres/segon (m/s; recorda: km/h ÷ 3,6 = m/s)' }
          ],
          trick:
            "• Velocitat al quadrat (v²): si dupliques velocitat (50 → 100 km/h), l'energia del xoc es multiplica per 4 (2²); si la tripliques, per 9 (3²).\n• 3 impactes successius: 1r vehicle contra obstacle → 2n cos contra l'interior → 3r òrgans interns contra caixa òssia.",
          example:
            'Indicadors biomecànics d’alta energia i gravetat al manual (3.2.6):\n• Deformació o intrusió a l’habitacle > 30 cm en impacte lateral (o > 45 cm global del vehicle) i velocitat > 30–45 km/h.\n• Projecció de vianant/motorista o ejecció fora del vehicle > 7 metres.\n• Caiguda des d’una alçada > 3 metres.\n• Mort d’un altre ocupant del mateix habitacle o temps d’excarceració > 20 minuts.'
        },
        {
          type: 'table',
          title: '3.2.6. Els 5 Mecanismes Biomecànics de Fractura Òssia i 3.3. Pla d’Acció (Pla A vs. Pla B)',
          subtitle: 'Relació directa entre força mecànica i traç de fractura (Secció 3.2.6 de MAN.SVVH.000)',
          headers: ['Mecanisme de Força', 'Tipus de Fractura Resultant al Manual', 'Exemple Biomecànic en Accident'],
          rows: [
            ['1. Flexió', 'Fractura transversal o obliqua curta (sovint amb 3r fragment en "ala de papallona")', 'Impacte del para-xocs d’un cotxe contra la tíbia d’un vianant.'],
            ['2. Cisallament', 'Fractura transversal per forces paral·leles oposades', 'Desplaçament d’un fragment ossi respecte a l’altre ( o cisallament de l’artèria aorta toràcica en desacceleració).'],
            ['3. Compressió (Axial)', 'Fractura COMMINUTA (múltiples fragments) o per aixafament', 'Impacte dels genolls contra el tablier que es transmet pel fèmur al maluc, o caiguda vertical sobre talons/vèrtebres.'],
            ['4. Torsió (Rotació)', 'Fractura ESPIROIDE (traç en espiral al voltant de l’os)', 'El peu queda travat sota el pedal mentre el cos gira violentament durant la bolcada.'],
            ['5. Tracció (Estirament)', 'Fractura per AVULSIÓ (arrencament de l’os pel tendó o lligament)', 'Contracció muscular brusca o tracció ligamentosa extrema en l’articulació.'],
            ['3.3. PAI: Pla A vs. Pla B', '• PLA A (Òptim / Controlat): Via d’extracció amb màxima obertura (ex: tall total de sostre o lateral) per a víctima estable (15-20 min).\n• PLA B (D’urgència / Immediat): Via alternativa ràpida (ex: pel portó posterior o una sola porta) acordada des del minut 1 per si la víctima entra en parada o xoc greu (< 5 min)!', 'En tota intervenció d’excarceració, el comandament i el sanitari han de definir SEMPRE un Pla A i un Pla B abans de començar a tallar!']
          ],
          footnote: 'Memoritza les dues parelles estrella de fractures: COMPRESSIÓ = Fractura COMMINUTA | TORSIÓ = Fractura ESPIROIDE!'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 4-5 Estabilització i AGO',
      title: '4–5. Maniobres d’Estabilització (Cinquena Falca), Excarceració i Seguretat (AGO)',
      subtitle: 'Estabilització manual (4 bombers), 3/4/5 punts, La Catalana, La Tenda i les 3 àrees de l’AGO.',
      blocks: [
        {
          type: 'text',
          heading: '4.1–5. Estabilització (5a Falca), Maniobres i Àrea de Gestió Operativa (AGO)',
          paragraphs: [
            "L'estabilització comença amb 4 bombers (un a cada cantonada) per permetre l'accés ràpid del sanitari, seguida de l'estabilització primària amb blocs i falques (i la 5a falca al muntant C o darrere quan s'ha de tallar sostre).",
            "Al voltant del vehicle s'organitzen dos cercles: Cercle Interior (3–5 m, equip actiu) i Cercle Exterior (5–10 m) amb les 3 àrees AGO: Àrea d'Eines, Àrea de Ferralla i Àrea de Relleu."
          ]
        },
        {
          type: 'table',
          title: '4.1–4.4. Tècniques Oficials d’Estabilització i Maniobres d’Excarceració (MAN.SVVH.000 Cap. 4)',
          subtitle: 'Procediments pas a pas per a vehicle sobre 4 rodes, bolcada lateral i bolcada sobre el sostre',
          headers: ['Maniobra (Secció)', 'Execució Tècnica Oficial (MAN.SVVH.000)', 'Clau d’Examen'],
          rows: [
            ['4.1.1. Estabilització Manual d’Urgència', 'Realitzada per 4 BOMBERS (un a cada cantonada del vehicle) subjectant els muntants/passos de roda per immobilitzar la suspensió.', 'Permet que el bomber sanitari faci una primera valoració vital d’urgència durant uns segons mentre es preparen les falques.'],
            ['4.1.2. Estabilització Primària sobre 4 Rodes (3, 4 i 5 Punts)', '• 3 o 4 punts: Blocs i falques esglaonades sota els 4 punts del xassís (darrere les rodes davanteres i davant les posteriors) + falcat d’almenys 1 roda davant i darrere.\n• 5 PUNTS ("LA CINQUENA FALCA"): S’afegeix un 5è bloc/falca a la part posterior central o sota el MUNTANT C del costat per on s’extraurà la víctima!', 'PER QUÈ ES POSA LA 5a FALCA? Per evitar que la part posterior del cotxe s’enfonsi quan hi pugen 2 bombers o quan es talla el sostre i els muntants B/C (que debiliten el xassís)!'],
            ['4.2–4.3. Creació d’Espai i Descarceració', '• Abatiment o retirada total de sostre (extracció a 0°).\n• Creació de "Tercera Porta" (en vehicles de 2/3 portes) o Obertura total de lateral (retirant portes davantera, posterior i muntant B).\n• Desplaçament / Aixecament de Tablier (amb tall d’alleujament a la base del muntant A i cilindre RAM recolzat a la base del muntant B!).', 'Abans d’empènyer amb el cilindre RAM per aixecar el tablier, cal col·locar un BLOC DE FUSTA sota mateix de la base del muntant A/B a terra perquè la xapa del llindar no s’enfonsi cap avall!'],
            ['4.4. Maniobra "La Catalana" (Vehicle en Bolcada Lateral)', 'En un vehicle bolcat sobre un dels seus costats (estabilitzat amb puntals al sostre i falques a les rodes): es tallen els muntants A, B i C del costat superior o inferior i s’abat el panell del SOSTRE cap amunt (o cap a terra com una rampa), obrint tot l’habitacle.', 'Evita que la víctima que penja del cinturó superior caigui de cop sobre l’altre costat.'],
            ['4.4. Maniobra "La Tenda" (Vehicle Bolcat sobre el Sostre)', 'Quan el vehicle està panxa enlaire (sobre el sostre) i el sostre està aixafat: s’insereixen cilindres RAM o coixins pneumàtics d’alta pressió entre la part posterior/maleter i el terra per aixecar la carrosseria formant un espai triangular com una "tenda de campanya".', 'Es combina amb falcat progressiu ("aixecar un centímetre, falcar un centímetre") per assegurar la càrrega en tot moment.']
          ],
          footnote: 'Memoritza els 3 noms propis de maniobres del manual: 1) "Llauna de sardines" (sostre d’autobús bolcat) | 2) "La Catalana" (elevació/abatiment de sostre) | 3) "La Tenda" (vehicle bolcat sobre el sostre).'
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: '5. Seguretat i Organització de l’Àrea de Gestió Operativa (AGO) en Rescat Viari',
          acronym: 'CERCLE INTERIOR (3-5 m)  |  CERCLE EXTERIOR (5-10 m): 1. Àrea d’Eines · 2. Àrea de Ferralla · 3. Àrea de Relleu',
          trick:
            "• CERCLE INTERIOR (3–5 m): Comandament 360°, Bomber Sanitari i Binomi Tècnic.\n• CERCLE EXTERIOR (5–10 m) — 3 ÀREES AGO:\n  1) Àrea d'Eines (sobre lona: bomba, cisalla, separador, RAM, falques).\n  2) Àrea de Ferralla (lluny de la via sanitària; parts punxants cap a terra).\n  3) Àrea de Relleu / Espera (personal de reserva i material SEM).",
          example: 'Tots els protectors de talls vius (fundes de lona/plàstic) s’han de col·locar immediatament sobre cada muntant tallat per no esquinçar els guants ni ferir la víctima!'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      isFormulaSheet: true,
      shortLabel: 'Pàg. 5 · 📌 Resum 1/2 (Xifres)',
      title: 'Resum Final (1/2) i Formulari Biomecànic: Totes les Xifres de MAN.SVVH.000',
      subtitle: 'Totes les tones, metres, fórmules biomecàniques i temps d’Accidents de Mobilitat Viària.',
      blocks: [
        {
          type: 'table',
          title: 'Síntesi Numèrica i Biomecànica Imprescindible — Tema 32 (Accidents Viària)',
          subtitle: 'Les 16 dades oficials del manual MAN.SVVH.000 per memoritzar abans de l’examen',
          headers: ['Concepte / Vehicle', 'Valor Oficial Exacte (MAN.SVVH.000)', 'Clau Operativa'],
          rows: [
            ['1. Estadística d’accidents al manual', '~22.000 accidents/any (23.591 accidents l’any 2023)', 'Un dels serveis de salvament més freqüents del cos'],
            ['2. Fórmula Biomecànica d’Energia Cinètica', 'Ec = ½ · m · v² (la velocitat va al QUADRAT)', 'Duplicar la velocitat (×2) multiplica l’energia del xoc per 4 (2²)'],
            ['3. Indicadors Biomecànics de Gravetat', 'Deformació > 30–45 cm | Projecció > 7 m | Caiguda > 3 m', 'Velocitat d’impacte crítica > 30–45 km/h o mort d’un ocupant'],
            ['4. Els 5 Mecanismes de Fractura Òssia', '1. Flexió | 2. Cisallament | 3. Compressió | 4. Torsió | 5. Tracció', 'Compressió = Fractura Comminuta | Torsió = Fractura Espiroide'],
            ['5. L’Hora d’Or i la Regla 10-10-20-20', '60 minuts totals (10 arribada + 10 valoració + 20 rescat + 20 trasllat)', 'El temps màxim d’excarceració tècnica objectiu és de 20 minuts'],
            ['6. Dimensions Màximes d’un Autobús', 'Alçada: 4,00 m | Amplada: 2,55 m | Llargada: 13,5–18,75 m | MMA (2 eixos): 18 t', 'Norma estructural d’anells antivolcada: ECE R66'],
            ['7. MMA de Camions per Nombre d’Eixos', '2 eixos = 18 t | 3 eixos = 25–26 t | 4 eixos = 31–32 t | Tràiler = 40 t', 'Instal·lació elèctrica de camions i autobusos = 24 Volts (2×12V)'],
            ['8. Velocitat i Tensió del Ferrocarril / TAV', 'TAV > 300 km/h | Catenària fins a 25.000 V (25 kV CA)', 'Confirmació obligatòria del Centre de Control Ferroviari abans d’entrar'],
            ['9. Els 4 Moviments d’Inestabilitat', '1. Longitudinal | 2. Balanceig (Roll) | 3. Capcineig (Pitch) | 4. Guinyada (Yaw)', 'Bloquejats amb l’estabilització primària de falques i puntals'],
            ['10. Regla de Seguretat d’Airbags (30-60-90)', '30 cm del volant | 60 cm del tablier acompanyant | 90 cm de cortina/sostre', 'Col·locar sempre el protector d’airbag de volant si no ha saltat'],
            ['11. Estabilització Manual Inicial', '4 bombers (un a cada cantonada del vehicle)', 'S’executa uns segons per permetre l’accés immediat del sanitari'],
            ['12. La "Cinquena Falca" (Estabilització 5 punts)', 'Sota la part posterior o Muntant C del costat d’extracció', 'Evita que el cotxe s’enfonsi en tallar el sostre o pujar-hi bombers'],
            ['13. Pressió de Treball Eines Hidràuliques', 'Fins a 700 bar (70 MPa) per Principi de Pascal', 'Cisalla (tall), Separador (obertura/tracció) i Cilindre RAM (empenta)'],
            ['14. Les 3 Àrees de l’AGO (Cercle 5–10 m)', '1. Àrea d’Eines | 2. Àrea de Ferralla | 3. Àrea de Relleu', 'Cercle interior d’acció: de 3 a 5 metres al voltant del vehicle']
          ],
          footnote: 'Pàgina 1 de 2 del Resum Executiu del Tema 32 (MAN.SVVH.000).'
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · 📌 Resum 2/2 (Paranys)',
      title: 'Resum Final (2/2): Atrapaments (Físic I vs. II), Maniobres i Paranys d’Examen',
      subtitle: 'Les distincions conceptuals que decideixen totes les preguntes de Rescat Viari.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Els 5 Paranys del Tribunal al Tema 32 (Accidents de Mobilitat Viària)',
          acronym: 'FÍSIC I (Lesions) vs FÍSIC II (Ferralla) | VEHICLE B PRIMER | COMMINUTA vs ESPIROIDE | PLA A / PLA B | LA CATALANA vs LA TENDA',
          trick:
            "1) ATRAPAMENT: Mecànic (portes encallades, il·lès) | Físic I (sense bloqueig de ferralla, retingut per LESIONS) | Físic II (presoner de FERRALLA/tablier).\n2) VEHICLE A vs. B: Vehicle A té la víctima; Vehicle B és a sobre → s'estabilitza PRIMER el B.\n3) FRACTURES: Compressió → Comminuta | Torsió → Espiroide.\n4) PLA A vs. PLA B: Pla A = controlat (~20 min, obertura òptima) | Pla B = immediat (~5 min, si empitjora XABCDE).\n5) MANIOBRES: Llauna de sardines (autobús) | La Catalana (sostre bolcada lateral) | La Tenda (vehicle sobre sostre).",
          example: 'Si et pregunten quin tipus d’atrapament pateix un conductor amb trauma vertebral greu que té espai lliure a les cames i al tòrax: Atrapament Físic Tipus I!'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q32-1',
      difficulty: 'Difícil',
      question: "Segons l'apartat 3.2.4 del manual MAN.SVVH.000, quina diferència hi ha entre un 'Atrapament Físic Tipus I' i un 'Atrapament Físic Tipus II' en un accident de trànsit?",
      options: [
        'El Físic I és en turismes i el Físic II és en camions.',
        'En el Físic Tipus I la víctima no està bloquejada per l’estructura del vehicle però no pot sortir per si sola a causa de les seves lesions mèdiques (cal crear espai); en el Físic Tipus II alguna part del seu cos està físicament atrapada per la ferralla deformada (cal descarceració interior).',
        'En el Físic Tipus I les portes estan bloquejades però la víctima està il·lesa.',
        'En el Físic Tipus II la víctima ja està fora del vehicle.'
      ],
      correctIndex: 1,
      explanation: 'El manual defineix: Mecànic (portes bloquejades, il·lès), Físic I (retingut per les seves lesions mèdiques sense bloqueig de ferralla) i Físic II (bloquejat físicament per elements deformats de l’habitacle).'
    },
    {
      id: 'q32-2',
      difficulty: 'Mitjà',
      question: "En un accident on un vehicle ha quedat a sobre d'un altre, com denomina el manual el vehicle que conté les víctimes a rescatar, com denomina el que està a sobre i quin s'ha d'estabilitzar primer?",
      options: [
        'Vehicle 1 i Vehicle 2; s’estabilitza primer el de sota.',
        'Vehicle A és el que conté la víctima i Vehicle B és el que està a sobre; s’ha d’estabilitzar sempre primer el Vehicle B.',
        'Vehicle B és el que conté la víctima i Vehicle A el de sobre.',
        'No cal estabilitzar el vehicle superior si té el fre de mà posat.'
      ],
      correctIndex: 1,
      explanation: "L'apartat 3.2.3 designa com a Vehicle A on hi ha la víctima i Vehicle B el que interactua a sobre; per seguretat cal assegurar i estabilitzar primer el Vehicle B."
    },
    {
      id: 'q32-3',
      difficulty: 'Mitjà',
      question: "Segons l'apartat 3.2.6 de biomecànica de l'accident, quin tipus de fractura òssia característica produeix un mecanisme de COMPRESSIÓ i quin produeix un mecanisme de TORSIÓ?",
      options: [
        'Compressió = Espiroide | Torsió = Comminuta',
        'Compressió = Fractura comminuta (múltiples fragments) | Torsió = Fractura espiroide (en espiral)',
        'Totes dues produeixen fractures per avulsió.',
        'Compressió = Ofecció | Torsió = Luxació simple.'
      ],
      correctIndex: 1,
      explanation: 'La força de compressió axial produeix fractures comminutes (aixafament en múltiples fragments), mentre que la torsió produeix fractures espiroides.'
    },
    {
      id: 'q32-4',
      difficulty: 'Fàcil',
      question: "En l'estabilització primària d'un turisme sobre les 4 rodes, on es col·loca i quina funció té l'anomenada 'cinquena falca' (estabilització en 5 punts)?",
      options: [
        'Es posa sota el volant per subjectar l’airbag.',
        'Es col·loca a la part posterior o sota el muntant C del costat d’extracció per evitar que la part posterior del vehicle s’enfonsi en tallar l’estructura o pujar-hi els bombers.',
        'Es col·loca davant del radiador.',
        'És la falca que bloqueja el pedal de fre.'
      ],
      correctIndex: 1,
      explanation: 'La cinquena falca reforça la part posterior / muntant C perquè el xassís no cedeixi quan es talla el sostre ni quan s’hi afegeix el pes dels rescatadors.'
    },
    {
      id: 'q32-5',
      difficulty: 'Fàcil',
      question: "Com s'anomenen els 4 moviments d'inestabilitat d'un vehicle sinistrat i quines són les 3 àrees funcionals del cercle exterior de l'Àrea de Gestió Operativa (AGO)?",
      options: [
        'Moviments: Nord, Sud, Est, Oest | Àrees: Calenta, Temperada, Freda.',
        'Moviments: Longitudinal (horitzontal), Balanceig, Capcineig i Guinyada | Àrees: Àrea d’eines, Àrea de ferralla i Àrea de relleu.',
        'Moviments: A, B, C, D | Àrees: PMA, CCA i Helisuperfície.',
        'Moviments: Compressió, Tracció, Flexió i Torsió.'
      ],
      correctIndex: 1,
      explanation: "Els 4 moviments són longitudinal, balanceig, capcineig i guinyada; l'AGO organitza l'Àrea d'eines, l'Àrea de ferralla i l'Àrea de relleu."
    },
    {
      id: 'q32-6',
      difficulty: 'Fàcil',
      question: "Segons el capítol 2 del manual MAN.SVVH.000, quin tipus de vidre porta el parabrisa davanter i quin les finestres laterals, i què és obligatori fer abans de tallar un muntant (A, B, C o D) amb la cisalla?",
      options: [
        'Parabrisa = vidre laminat (es talla amb serra); laterals = vidre temperat (s’engruna amb punxó a la cantonada) | És obligatori "pelar" (desvestir) el guarnecido interior per no tallar bombones d’airbag de cortina ni pretensors.',
        'Parabrisa = vidre temperat; laterals = vidre laminat | Tallar directament sense treure els plàstics per guanyar temps.',
        'Tots els vidres són de policarbonat | Desmuntar les rodes abans de tallar els muntants.',
        'Tots els vidres són laminats | Tirar aigua a pressió abans de fer servir la cisalla.'
      ],
      correctIndex: 0,
      explanation: "El parabrisa és laminat (PVB, es talla amb serra) i els laterals/luneta són temperats (punxó a la cantonada). Abans de tallar muntants cal 'pelar' el revestiment interior per detectar airbags de cortina i pretensors."
    },
    {
      id: 'q32-7',
      difficulty: 'Mitjà',
      question: "Dins dels tres nivells de seguretat del vehicle (primària, secundària i terciària), a quin pertany el sistema eCall, i quines són les distàncies de seguretat davant d'airbags no activats (regla 30-60-90)?",
      options: [
        'Seguretat primària | 10 cm del volant, 20 cm del tablier i 30 cm dels laterals.',
        'Seguretat secundària | No cal mantenir distància un cop aturat el motor.',
        'Seguretat terciària (post-accident) | 30 cm del volant, 60 cm del tablier acompanyant i 90 cm de cortina/sostre (i esperar 1-2 min després de desconnectar bateria).',
        'Seguretat primària | 60 cm del volant, 90 cm del tablier i 120 cm del sostre.'
      ],
      correctIndex: 2,
      explanation: "L'eCall i el tall automàtic de bateria/combustible són seguretat terciària (post-accident). La regla de seguretat dels airbags no disparats estableix 30 cm (volant), 60 cm (tablier) i 90 cm (cortina/sostre) i esperar 1-2 minuts pel condensador."
    },
    {
      id: 'q32-8',
      difficulty: 'Difícil',
      question: "Segons la fórmula biomecànica de l'energia cinètica (Ec = ½ · m · v²), quant augmenta l'energia d'un impacte si un vehicle duplica la velocitat, i quins són els llindars d'alta energia del manual (apartat 3.2.6)?",
      options: [
        'Es duplica (×2) | Deformació > 10 cm i projecció > 2 m.',
        'Es multiplica per vuit (×8) | Caiguda > 1 m i projecció > 3 m.',
        'No depèn de la velocitat sinó només del pes | Deformació > 100 cm.',
        'Es multiplica per quatre (2² = 4) | Deformació > 30 cm lateral (> 45 cm global), projecció/ejecció > 7 m, caiguda > 3 m o excarceració > 20 min.'
      ],
      correctIndex: 3,
      explanation: "Com que la velocitat va al quadrat (v²), duplicar la velocitat multiplica l'energia cinètica per 4. El manual fixa com a indicadors d'alta energia: deformació > 30 cm lateral (> 45 cm global), projecció > 7 m i caiguda > 3 m."
    },
    {
      id: 'q32-9',
      difficulty: 'Mitjà',
      question: "En un accident ferroviari amb Tren d'Alta Velocitat (TAV > 300 km/h i catenària fins a 25.000 V), quina és la regla de seguretat absoluta abans d'entrar a la caixa de vies, i quina particularitat té la cabina d'un camió (24 V)?",
      options: [
        'Cal confirmació oficial del Centre de Control Ferroviari del tall de circulació a totes dues vies i posada a terra de la catenària | En camions cal bloquejar la suspensió pròpia de la cabina respecte al xassís abans d’excarcerar.',
        'N’hi ha prou amb mirar a dreta i esquerra | Els camions funcionen a 12 V i tenen cabina fixa rígida.',
        'Posar un con reflector a 25 metres de la via | Els camions de 3 eixos tenen una MMA màxima de 12 tones.',
        'Tallar la catenària amb la cisalla hidràulica de 700 bar | En camions mai es fa estabilització.'
      ],
      correctIndex: 0,
      explanation: "En ferrocarril és obligatòria la confirmació oficial del Centre de Control Ferroviari (tall en ambdues vies i posada a terra de la catenària). En camions (24 V) la cabina va suspesa sobre amortidors i cal bloquejar-la respecte al xassís."
    },
    {
      id: 'q32-10',
      difficulty: 'Fàcil',
      question: "Quin temps total comprèn l'Hora d'Or (Regla 10-10-20-20) i en quines situacions s'executa un alliberament d'emergència (maniobra de Rautek)?",
      options: [
        '30 minuts | Quan el pacient té una fractura tancada de canell i està estable.',
        '90 minuts | Quan es vol practicar el tall del sostre amb tranquil·litat.',
        '60 minuts (10 arribada + 10 valoració + 20 excarceració + 20 trasllat) | Quan hi ha un perill vital extern imminent (incendi, risc d’explosió, enfonsament a l’aigua o ACR) que obliga a una extracció manual immediata en segons.',
        '120 minuts | Quan arriba el Centre de Control Ferroviari.'
      ],
      correctIndex: 2,
      explanation: "L'Hora d'Or (60 min) es divideix en 10+10+20+20 (objectiu màxim de 20 min d'excarceració). L'alliberament d'emergència (Rautek) s'aplica només davant perill vital extern imminent o ACR."
    },
    {
      id: 'q32-11',
      difficulty: 'Mitjà',
      question: "A quin escenari d'excarceració correspon cadascuna de les tres maniobres amb nom propi descrites al manual MAN.SVVH.000: 'llauna de sardines', 'la catalana' i 'la tenda'?",
      options: [
        'Llauna de sardines = vehicle en aigua; La Catalana = moto; La Tenda = camió articulat.',
        'Totes tres són sinònims de creació de tercera porta en turisme de 3 portes.',
        'Llauna de sardines = tall de muntant B; La Catalana = retirada de parabrisa; La Tenda = tall de pedals.',
        'Llauna de sardines = obertura de sostre/terra d’autobús bolcat lateralment; La Catalana = abatiment del panell del sostre en vehicle en bolcada lateral; La Tenda = elevació posterior amb RAM/coixins en vehicle bolcat sobre el sostre.'
      ],
      correctIndex: 3,
      explanation: "El manual anomena 'llauna de sardines' l'obertura en autobús bolcat, 'la catalana' l'abatiment/elevació del sostre en bolcada lateral i 'la tenda' l'aixecament en forma triangular d'un vehicle bolcat panxa enlaire."
    },
    {
      id: 'q32-12',
      difficulty: 'Difícil',
      question: "En una descarceració interior per aixecar o desplaçar el tablier amb un cilindre RAM (700 bar), on es recolza la base del RAM i què cal col·locar a terra sota el llindar del muntant abans d'empènyer?",
      options: [
        'Es recolza sobre el vidre posterior i no cal posar res a terra.',
        'Es recolza a la base del muntant B (després de fer tall d’alleujament a la base del muntant A) i s’ha de col·locar un bloc de fusta sota mateix de la base del muntant A/B a terra perquè la xapa del llindar no s’enfonsi cap avall.',
        'Es recolza directament sobre el seient del conductor sense cap tall d’alleujament.',
        'Es recolza al sostre i es retiren les falques d’estabilització primària.'
      ],
      correctIndex: 1,
      explanation: "Per desplaçar el tablier amb el RAM (recolzat a la base del muntant B amb tall d'alleujament a la base del muntant A) cal posar un bloc de fusta a terra sota el llindar perquè l'empenta hidràulica no aixafi el xassís cap avall."
    },
    {
      id: 'q32-13',
      difficulty: 'Mitjà',
      question: "En una intervenció d'excarceració en un vehicle híbrid o elèctric (HEV/BEV), quin color identifica obligatòriament el cablejat d'alta tensió (HV) i quina funció té el sistema HVIL (High Voltage Interlock Loop)?",
      options: [
        "Color groc | És un sistema pirotècnic que trenca les finestres laterals en detectar un xoc.",
        "Color taronja | És un circuit de control en llaç de baixa tensió que recorre connectors i tapes d'alta tensió; si s'obre o es talla, ordena obrir els contactors principals per tallar l'alta tensió de la bateria.",
        "Color blau | És una vàlvula pneumàtica que bloqueja la suspensió de la cabina.",
        "Color vermell | Descarrega instantàniament tota l'energia de la bateria de tracció a través de la carrosseria."
      ],
      correctIndex: 1,
      explanation: "Els cables d'alta tensió en vehicles híbrids i elèctrics són sempre de color TARONJA. El sistema HVIL (High Voltage Interlock Loop) supervisa la continuïtat dels connectors i tapes d'HV: si es desconnecta o es talla el llaç (segons el full de rescat), obre els contactors principals per aïllar la bateria."
    },
    {
      id: 'q32-14',
      difficulty: 'Fàcil',
      question: "Pel que fa a l'anatomia estructural del turisme i les precaucions abans de tallar el pilar B (muntant B) en una excarceració (MAN.SVVH.000), assenyala quina afirmació és INCORRECTA:",
      options: [
        "El pilar B és el muntant central situat darrere de les portes davanteres, entre aquestes i les portes posteriors (o zona lateral posterior en 3 portes).",
        "El pilar B allotja habitualment la guia i el mecanisme pretensor pirotècnic del cinturó de seguretat, a més de possibles reforços d'acer d'alta resistència.",
        "Abans de tallar qualsevol muntant amb la cisalla hidràulica, és obligatori 'pelar' (retirar) el guarnit interior de plàstic per no tallar bombones d'airbag o pretensors.",
        "El pilar B és el marc davanter que subjecta el parabrisa laminat, motiu pel qual no incorpora mai elements pirotècnics ni cablejat."
      ],
      correctIndex: 3,
      explanation: "És incorrecte: el marc del parabrisa davanter és el pilar A (muntant A). El pilar B se situa darrere de les portes davanteres i conté els pretensors del cinturó i sovint elements d'airbag o cablejat, per la qual cosa s'ha de 'pelar' sempre abans de tallar."
    },
    {
      id: 'q32-15',
      difficulty: 'Fàcil',
      question: "Dins la classificació oficial dels sistemes de seguretat del vehicle (MAN.SVVH.000), quina opció agrupa correctament exemples de seguretat ACTIVA (primària) i exemples de seguretat PASSIVA (secundària)?",
      options: [
        "Seguretat activa: airbag frontal i cinturó | Seguretat passiva: ABS i control d'estabilitat (ESP).",
        "Seguretat activa: ABS, control d'estabilitat (ESP), frens i direcció | Seguretat passiva: cinturó de seguretat, airbags, pretensors i reposacaps.",
        "Seguretat activa: sistema eCall 112 i tall automàtic de bateria | Seguretat passiva: pneumàtics i il·luminació.",
        "Seguretat activa: xassís deformable i muntant B | Seguretat passiva: control de tracció i llums de creuament."
      ],
      correctIndex: 1,
      explanation: "La seguretat activa o primària actua abans del sinistre per evitar-lo (ABS, ESP, frens, direcció, llums); la seguretat passiva o secundària redueix les lesions durant l'impacte (cinturó, airbags, pretensors, reposacaps); i l'eCall o tall de bateria són seguretat terciària (post-accident)."
    },
    {
      id: 'q32-16',
      difficulty: 'Mitjà',
      question: "En un turisme sinistrat on cap airbag s'ha disparat i hi ha una víctima amb atrapament físic tipus I dins l'habitacle, quines distàncies mínimes fixa la regla 30-60-90 i quina mesura cal respectar en desconnectar la bateria de 12 V?",
      options: [
        "30 cm del volant, 60 cm del tablier de l'acompanyant i 90 cm dels airbags de cortina/sostre (col·locant protector al volant i esperant 1–2 minuts després de desconnectar la bateria pel condensador de reserva).",
        "30 cm del tablier, 60 cm del sostre i 90 cm del volant, podent tallar els pilars a l'instant sense esperar després de desconnectar la bateria.",
        "10 cm de qualsevol airbag, ja que en parar el motor de combustió els airbags queden desactivats immediatament.",
        "60 cm del volant, 30 cm del tablier i 90 cm dels pedals, sense necessitat de protegir el volant ni desvestir els pilars."
      ],
      correctIndex: 0,
      explanation: "La regla 30-60-90 estableix mantenir 30 cm respecte al volant, 60 cm al tablier de l'acompanyant i 90 cm als airbags de cortina/sostre (evitant situar-hi el cos o eines), posar protector de volant i esperar 1–2 minuts després de desconnectar la bateria perquè es descarregui el condensador del mòdul SRS."
    },
    {
      id: 'q32-17',
      difficulty: 'Difícil',
      question: "En arribar a un accident de trànsit amb un vehicle elèctric/híbrid en bolcada lateral i un ocupant conscient atrapat a l'interior, quina és la seqüència operativa correcta?",
      options: [
        "Tallar directament els cables taronja amb la cisalla hidràulica de 700 bar i extreure la víctima pel parabrisa sense estabilitzar el vehicle.",
        "Assegurar l'escena, immobilitzar i desactivar el vehicle (posició P, allunyar clau, desconnectar 12 V / tallar bucle HVIL o service plug segons full de rescat), estabilitzar el vehicle, esperar la descàrrega de condensadors i executar l'obertura (p. ex. 'la catalana') evitant tallar o tocar cables taronja.",
        "Ruixar amb escuma tot el vehicle abans de comprovar si està en marxa, retirar les falques i trencar primer el parabrisa laminat amb punxó.",
        "Desplaçar el tablier amb el RAM abans d'estabilitzar el vehicle ni comprovar si els cables taronja passen pels estreps o pel pilar B."
      ],
      correctIndex: 1,
      explanation: "La seqüència segura en vehicle electrificat exigeix protegir l'escena, immobilitzar i desconnectar l'alta tensió seguint el full de rescat (12 V + bucle HVIL / service plug), estabilitzar abans de tallar, respectar el temps de descàrrega dels condensadors i no tallar ni manipular mai el cablejat taronja d'HV."
    },
    {
      id: 'q32-18',
      difficulty: 'Mitjà',
      question: "En la descripció dels 4 moviments d'inestabilitat d'un vehicle sinistrat (apartat 2.1.3 de MAN.SVVH.000), a quin moviment correspon l'oscil·lació lateral esquerra-dreta sobre l'eix longitudinal i a quin el balanceig del morro i la part posterior amunt i avall?",
      options: [
        "Lateral esquerra-dreta = Guinyada (Yaw) | Morro amunt i avall = Balanceig (Roll).",
        "Lateral esquerra-dreta = Balanceig (Roll) | Morro amunt i avall = Capcineig (Pitch) | Gir horitzontal sobre eix vertical = Guinyada (Yaw).",
        "Lateral esquerra-dreta = Capcineig (Pitch) | Morro amunt i avall = Moviment longitudinal.",
        "Tots dos moviments s'anomenen guinyada i no es bloquegen amb falques."
      ],
      correctIndex: 1,
      explanation: "Balanceig (Roll) = oscil·lació lateral esquerra-dreta sobre l'eix longitudinal; Capcineig (Pitch) = moviment del morro i maleter amunt i avall sobre l'eix transversal; Guinyada (Yaw) = rotació sobre l'eix vertical."
    },
    {
      id: 'q32-19',
      difficulty: 'Fàcil',
      question: "Respecte als 3 tipus d'alliberament en rescat viari (apartat 3.2.5) i al Pla d'Acció de la Intervenció (PAI: Pla A vs. Pla B), quina afirmació és INCORRECTA?",
      options: [
        "L'alliberament controlat (Pla A) s'aplica a víctimes hemodinàmicament estables buscant la màxima obertura i una extracció alineada a 0°.",
        "L'alliberament immediat (Pla B) s'executa en pocs minuts quan la víctima està inestable o es deteriora el seu XABCDE, prioritzant el temps amb collet i tauler.",
        "L'alliberament d'emergència (maniobra de Rautek) només s'aplica davant un perill vital extern imminent (incendi, explosió, submersió o ACR) sense esperar material.",
        "El Pla B només es decideix al cap de 20 minuts si ha fallat el Pla A, i mai s'ha de preveure a l'inici de l'excarceració."
      ],
      correctIndex: 3,
      explanation: "És incorrecte: en tota intervenció d'excarceració (apartat 3.3), el comandament i el sanitari han de definir i acordar SEMPRE un Pla A (òptim) i un Pla B (via ràpida) des del minut 1, abans de començar a tallar."
    }
  ]
};
