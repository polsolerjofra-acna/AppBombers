/**
 * Banc de 30 preguntes "punyeteres" d'alt nivell (Temes 1 a 17).
 * Cada pregunta enfronta com a mínim dues opcions pràcticament idèntiques
 * diferenciades per un únic detall decisiu de precisió normativa o tècnica.
 */
export const QUESTIONS_PUNYETERES_1 = [
  {
    "topic": 1,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T1] Segons l'article 167 de la Constitució Espanyola (reforma ordinària), un cop aprovada la reforma per les Corts Generals, quan s'ha de sotmetre a referèndum de ratificació?",
    "options": [
      "Quan ho sol·liciti una cinquena part dels membres de qualsevol de les Cambres dins els 15 dies següents a la seva aprovació",
      "Quan ho sol·liciti una desena part dels membres de qualsevol de les Cambres dins els 15 dies següents a la seva aprovació",
      "Quan ho sol·liciti una desena part dels membres de qualsevol de les Cambres dins els 30 dies següents a la seva aprovació",
      "És obligatori sempre, amb independència que ho sol·licitin o no els membres de les Cambres"
    ],
    "correctIndex": 1,
    "explanation": "Detall decisiu (art. 167.3 CE): el referèndum en la reforma ordinària és potestatiu i només se celebra si el demana 1/10 part (no 1/5 part) dels membres de qualsevol Cambra dins els 15 dies següents a l'aprovació (no 30 dies; el referèndum obligatori sempre correspon a l'art. 168)."
  },
  {
    "topic": 1,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T1] D'acord amb l'article 5 de la Llei 13/1989, d'organització, procediment i règim jurídic de l'Administració de la Generalitat de Catalunya, quina classificació orgànica correspon als Consellers i als Directors Generals?",
    "options": [
      "Tant els Consellers com els Directors Generals tenen la consideració d'alts càrrecs",
      "Els Consellers són alts càrrecs i els Directors Generals són òrgans superiors",
      "Els Consellers són òrgans superiors i els Directors Generals són alts càrrecs",
      "Tant els Consellers com els Directors Generals tenen la consideració d'òrgans superiors"
    ],
    "correctIndex": 2,
    "explanation": "Detall decisiu (art. 5 Llei 13/1989): són Òrgans Superiors el President, el Govern, el Conseller primer, el Vicepresident i els Consellers; en canvi, els Secretaris Generals i els Directors Generals són Alts Càrrecs (no òrgans superiors)."
  },
  {
    "topic": 2,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T2] Segons l'article 97.1 del TREBEP (RDL 5/2015), quin és el termini de prescripció de les faltes lleus i de les sancions imposades per faltes lleus?",
    "options": [
      "Les faltes lleus prescriuen als 6 mesos i les sancions per faltes lleus prescriuen a l'any",
      "Tant les faltes lleus com les sancions per faltes lleus prescriuen als 6 mesos",
      "Tant les faltes lleus com les sancions per faltes lleus prescriuen als 2 mesos",
      "Les faltes lleus prescriuen als 2 mesos i les sancions per faltes lleus prescriuen als 6 mesos"
    ],
    "correctIndex": 0,
    "explanation": "Detall decisiu (art. 97.1 TREBEP): a l'EBEP les faltes lleus prescriuen als 6 mesos, però les sancions per faltes lleus prescriuen al cap d'1 any! La trampa clàssica és confondre-ho amb el Text Únic català (DL 1/1997) / Decret 243/1995, on tant faltes com sancions lleus prescriuen als 2 mesos."
  },
  {
    "topic": 2,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T2] Quin límit temporal màxim estableix l'article 10 del TREBEP (RDL 5/2015) per al nomenament de personal funcionari interí per excés o acumulació de tasques?",
    "options": [
      "Un màxim de 6 mesos dins d'un període de 12 mesos",
      "Un màxim de 9 mesos dins d'un període de 12 mesos",
      "Un màxim de 3 anys, ampliables fins a 12 mesos més",
      "Un màxim de 9 mesos dins d'un període de 18 mesos"
    ],
    "correctIndex": 3,
    "explanation": "Detall decisiu (art. 10.1.d TREBEP): per excés o acumulació de tasques el límit és de 9 mesos dins d'un període de 18 mesos (no 6 de 12 ni 9 de 12; el termini de 3 anys ampliables 12 mesos correspon a programes de caràcter temporal)."
  },
  {
    "topic": 3,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T3] Segons l'article 44 de la Llei 31/1995 (LPRL), quan un Inspector de Treball i Seguretat Social ordena la paralització immediata de treballs per risc greu i imminent, quin termini té l'empresa per impugnar-la i qui resol?",
    "options": [
      "Pot impugnar-la davant l'autoritat laboral en el termini de 24 hores, i aquesta resol en 3 dies hàbils",
      "Pot impugnar-la davant el servei de prevenció en el termini de 3 dies hàbils, i aquest resol en 24 hores",
      "Pot impugnar-la davant l'autoritat laboral en el termini de 3 dies hàbils, i aquesta resol en 24 hores",
      "Pot impugnar-la davant l'autoritat laboral en el termini de 3 dies naturals, i aquesta resol en 24 hores"
    ],
    "correctIndex": 2,
    "explanation": "Detall decisiu (art. 44.1 LPRL): la impugnació es presenta davant l'autoritat laboral (no davant el servei de prevenció) en el termini de 3 dies hàbils (no naturals ni 24 h), i l'autoritat laboral ha de resoldre en el termini màxim de 24 hores."
  },
  {
    "topic": 3,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T3] Segons el Reglament (UE) 2016/425, un EPI destinat a protegir contra la manipulació de peces calentes que NO exposin l'usuari a temperatures superiors a 50 °C a quina categoria de risc pertany?",
    "options": [
      "Categoria II, perquè tota protecció tèrmica passa directament a categoria intermèdia",
      "Categoria I, perquè s'hi inclouen riscos mínims com peces calentes amb T ≤ 50 °C",
      "Categoria III, perquè tota protecció tèrmica es considera risc greu o irreversible",
      "Categoria I només si porta el marcatge CE seguit de les 4 xifres de l'organisme notificat"
    ],
    "correctIndex": 1,
    "explanation": "Detall decisiu (Annex I Reglament UE 2016/425): la Categoria I inclou el contacte amb peces calentes de T ≤ 50 °C (mentre que T ≥ 100 °C passa a Categoria III). A més, el marcatge CE + 4 xifres de l'organisme notificat és propi de la Categoria III, no de la I."
  },
  {
    "topic": 4,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T4] En la comparativa exacta entre la Llei 19/2020 (igualtat de tracte i no-discriminació) i la Llei 17/2015 (igualtat efectiva de dones i homes), quin terme utilitza cada llei per definir l'entorn creat en l'assetjament?",
    "options": [
      "La Llei 19/2020 parla d'un entorn \"molest\" (i inclou \"una persona\"), mentre que la Llei 17/2015 parla d'un entorn \"vexatori\" (referit a \"una dona\")",
      "Ambdues lleis utilitzen exactament el terme \"vexatori\", però només la Llei 17/2015 exigeix reiteració",
      "La Llei 19/2020 parla d'un entorn \"vexatori\" referit exclusivament a \"una dona\", mentre que la Llei 17/2015 inclou \"una persona\"",
      "La Llei 19/2020 parla d'un entorn \"vexatori\" (i inclou \"una persona\"), mentre que la Llei 17/2015 parla d'un entorn \"molest\" (referit a \"una dona\")"
    ],
    "correctIndex": 3,
    "explanation": "Detall decisiu: la Llei 19/2020 defineix l'assetjament respecte d'«una persona» i un entorn intimidatori, hostil, degradant, humiliant, ofensiu o «vexatori»; la Llei 17/2015 el refereix a «una dona» i utilitza l'adjectiu «molest» en lloc de «vexatori»."
  },
  {
    "topic": 4,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T4] Segons el Protocol per a la prevenció, detecció, actuació i resolució de situacions d'assetjament sexual i per raó de sexe (2023), quina és la seqüència exacta de terminis en dies hàbils per a l'obertura de l'expedient, la fase d'investigació i la resolució?",
    "options": [
      "5 dies hàbils (obertura/valoració inicial), 15 dies hàbils (investigació) i 10 dies hàbils (resolució)",
      "5 dies hàbils (obertura/valoració inicial), 10 dies hàbils (investigació) i 15 dies hàbils (resolució)",
      "3 dies hàbils (obertura/valoració inicial), 15 dies hàbils (investigació) i 10 dies hàbils (resolució)",
      "5 dies naturals (obertura/valoració inicial), 15 dies naturals (investigació) i 10 dies naturals (resolució)"
    ],
    "correctIndex": 0,
    "explanation": "Detall decisiu (Protocol 2023): la regla mnemotècnica és 5 - 15 - 10 en dies hàbils (no naturals, i sense invertir el 15 i el 10): 5 dies hàbils per a l'obertura/valoració, 15 dies hàbils per a la investigació i 10 dies hàbils per a la resolució."
  },
  {
    "topic": 5,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T5] Segons l'article 10 de la Llei 1/1998, de política lingüística, pel que fa als procediments administratius tramitats per les administracions de Catalunya, quina afirmació és exacta?",
    "options": [
      "En els procediments iniciats a instància de part, l'Administració pot imposar el català com a llengua única de tramitació encara que la persona interessada demani el castellà",
      "En els procediments iniciats d'ofici per les administracions catalanes, les actuacions es fan en català, sens perjudici del dret de les persones interessades a rebre en castellà les comunicacions si ho demanen",
      "En els procediments iniciats d'ofici per les administracions catalanes, les actuacions es fan sempre en castellà llevat que la persona interessada sol·liciti expressament el català",
      "En els procediments iniciats d'ofici per les administracions catalanes, les comunicacions s'han d'emetre sempre en versió bilingüe sense necessitat de petició prèvia"
    ],
    "correctIndex": 1,
    "explanation": "Detall decisiu (art. 10 Llei 1/1998): en procediments iniciats d'ofici per les administracions de Catalunya la llengua de les actuacions és el català, però les persones interessades tenen dret a rebre en castellà les comunicacions i notificacions si ho sol·liciten (a instància de part, s'utilitza la llengua escollida per qui promou el procediment)."
  },
  {
    "topic": 6,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T6] Amb la modificació introduïda pel Decret llei 14/2025 a l'article 15 de la Llei 5/1994, de prevenció i extinció d'incendis i de salvaments, quin règim d'accés i promoció té la nova Escala de suport?",
    "options": [
      "S'hi accedeix per concurs oposició lliure i els seus membres SÍ que poden promocionar per promoció interna a l'Escala tècnica",
      "S'hi accedeix exclusivament per concurs de mèrits i els seus membres NO poden promocionar a les altres escales",
      "S'hi accedeix per concurs oposició lliure i els seus membres NO poden promocionar a les altres escales del Cos de Bombers",
      "Inclou les categories de TECOR, TEOV, EPAF (grup C1) i TELOG, sense possibilitat de promoció a les altres escales"
    ],
    "correctIndex": 2,
    "explanation": "Detall decisiu (art. 15 Llei 5/1994 modificat pel DL 14/2025): a l'Escala de suport (TECOR, TEOV, EPAF — que és grup C2, no C1! — i TELOG) s'hi accedeix per concurs oposició lliure i NO es pot promocionar a les altres escales del Cos."
  },
  {
    "topic": 6,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T6] Segons la Llei 4/1997, de protecció civil de Catalunya, les prestacions personals obligatòries que es poden exigir als ciutadans en situacions de greu risc, catàstrofe o calamitat pública:",
    "options": [
      "Donen dret sempre a indemnització econòmica per les hores de prestació personal, a més del rescabalament pels danys materials",
      "No donen dret ni a indemnització per la prestació personal ni a cap rescabalament en cas de requisa o ocupació temporal de béns",
      "Només poden ser ordenades pel Govern de la Generalitat, mai pels alcaldes en el seu terme municipal",
      "No donen dret a indemnització per aquest concepte, però sí a rescabalament si es produeixen danys i perjudicis materials en els béns requisats o ocupats"
    ],
    "correctIndex": 3,
    "explanation": "Detall decisiu (Llei 4/1997 i art. 30.4 CE): les prestacions personals obligatòries NO donen dret a indemnització, a diferència de les requises, intervencions o ocupacions temporals de béns, que sí que donen dret a rescabalament dels danys i perjudicis causats."
  },
  {
    "topic": 7,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T7] Segons el Decret 276/2016, de les guàrdies i comandaments del Cos de Bombers de la Generalitat, quina posició operativa de guàrdia NO requereix habilitació prèvia i en quina modalitat exerceix el Sotscap territorial?",
    "options": [
      "El Cap de torn del parc no necessita habilitació prèvia (n'assumeix la funció el comandament de guàrdia de més categoria/antiguitat), i el Sotscap territorial treballa en modalitat de localització",
      "El Cap de torn del parc no necessita habilitació prèvia, i el Sotscap territorial treballa en modalitat de disponibilitat immediata",
      "El Cap territorial no necessita habilitació prèvia, i el Sotscap territorial treballa en modalitat de localització",
      "El Cap de torn del parc necessita habilitació prèvia específica, mentre que el Cap de guàrdia de la sala central no en necessita"
    ],
    "correctIndex": 0,
    "explanation": "Detall decisiu (arts. 12 i 13 Decret 276/2016): l'única posició operativa de comandament que NO requereix habilitació prèvia és el Cap de torn d'un parc de bombers, i el Sotscap territorial exerceix la guàrdia en modalitat de localització (no disponibilitat immediata)."
  },
  {
    "topic": 7,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T7] Amb l'estructura consolidada pel Decret 16/2026 (que modifica el Decret 12/2023) dins la DGPEIS, com es distribueixen les Regions d'Emergències, les Sales Territorials i les Unitats de Prevenció?",
    "options": [
      "8 Regions d'Emergències (amb la nova RE Pirineus), 8 Sales Territorials i 8 Unitats de Prevenció",
      "7 Regions d'Emergències, 6 Sales Territorials i 7 Unitats de Prevenció",
      "8 Regions d'Emergències (amb la nova RE Pirineus), 6 Sales Territorials i 7 Unitats de Prevenció",
      "8 Regions d'Emergències, 7 Sales Territorials i 6 Unitats de Prevenció"
    ],
    "correctIndex": 2,
    "explanation": "Detall decisiu (Decret 16/2026): es crea la 8a Regió d'Emergències (Pirineus), però només hi ha 6 Sales Territorials (Terres de l'Ebre es connecta a Tarragona i Pirineus a Lleida) i 7 Unitats de Prevenció (Terres de l'Ebre sí que en té, mentre Pirineus depèn de Lleida)."
  },
  {
    "topic": 8,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T8] Quin agent extintor actua principalment per inhibició de la reacció en cadena (trencament de radicals lliures) i NO és adequat per a brases profundes de classe A llevat que sigui pols polivalent (ABC)?",
    "options": [
      "La pols química seca polivalent (ABC), que actua exclusivament per refredament sense inhibir la reacció en cadena",
      "La pols química seca convencional (BC), que inhibeix la flama però no refreda ni penetra en brases de classe A",
      "El diòxid de carboni (CO2), que actua principalment per inhibició química dels radicals lliures",
      "L'aigua polvoritzada, que actua principalment per inhibició de la reacció en cadena"
    ],
    "correctIndex": 1,
    "explanation": "Detall decisiu (MAN.GRAL.008): les pols químiques actuen per inhibició de la reacció en cadena; la convencional (BC) no té capacitat d'extinció sobre brases de classe A (a diferència de l'ABC, que es fon formant una crosta sobre la brasa). El CO2 actua per sufocació (desplaçament d'O2), no per inhibició química."
  },
  {
    "topic": 8,
    "difficulty": "Mitjà",
    "question": "[PUNYETERA · T8] Com es defineix exactament el punt d'autoignició (o temperatura d'autoignició) respecte al punt d'inflamació (flash point)?",
    "options": [
      "És la temperatura mínima a la qual un combustible emet vapors que s'inflamen espontàniament en contacte amb l'aire SENSE necessitat de font d'ignició externa",
      "És la temperatura mínima a la qual un líquid emet prou vapors per inflamar-se momentàniament en aplicar una font d'ignició externa, però s'apaga en retirar-la",
      "És la temperatura mínima a la qual els vapors continuen cremant de manera sostinguda un cop retirada la font d'ignició externa",
      "És sempre una temperatura inferior al punt d'inflamació en els hidrocarburs líquids"
    ],
    "correctIndex": 0,
    "explanation": "Detall decisiu: el punt d'autoignició NO requereix font d'ignició externa (a diferència del punt d'inflamació o flash point, on la flama s'apaga en retirar la font, i del punt de combustió o fire point, on continua cremant en retirar-la)."
  },
  {
    "topic": 9,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T9] Un bloc de massa m descansa sobre un pla inclinat d'angle α respecte a l'horitzontal. Quines són les expressions exactes de la força normal (N) i de la component del pes paral·lela al pla (P_x)?",
    "options": [
      "N = m · g · sin(α)  i  P_x = m · g · cos(α)",
      "N = m · g · tan(α)  i  P_x = m · g · sin(α)",
      "N = m · g · cos(α)  i  P_x = m · g · tan(α)",
      "N = m · g · cos(α)  i  P_x = m · g · sin(α)"
    ],
    "correctIndex": 3,
    "explanation": "Detall decisiu (MAN.GRAL.003): quan l'angle α és respecte a l'horitzontal, la força normal perpendicular al pla és m·g·cos(α) (a α=0°, cos(0°)=1, N=m·g) i la component que fa lliscar el bloc pla avall és m·g·sin(α) (a α=0°, sin(0°)=0)."
  },
  {
    "topic": 9,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T9] En un polispast ideal (sense fregament) format per n politges mòbils connectades amb una única corda contínua on el ramal de tracció surt d'una politja fixa, quin avantatge mecànic teòric s'obté?",
    "options": [
      "Avantatge mecànic = n (igual al nombre de politges mòbils), perquè el ramal final surt d'una politja fixa",
      "Avantatge mecànic = 2 · n (el doble del nombre de politges mòbils), perquè cada politja mòbil aporta 2 ramals que sostenen la càrrega",
      "Avantatge mecànic = 2^n, independentment de si el polispast és de corda única o factorial",
      "Avantatge mecànic = 2 · n − 1, perquè es descompta el ramal de la politja fixa"
    ],
    "correctIndex": 1,
    "explanation": "Detall decisiu (MAN.GRAL.003): en un polispast factorial (una sola corda contínua) amb n politges mòbils, hi ha 2n ramals sostenint la càrrega (el ramal que baixa de la politja fixa superior només canvia el sentit de la força, no multiplica), per tant l'avantatge mecànic és 2n. (2^n correspon a sistemes potencials amb politges independents, no a corda única)."
  },
  {
    "topic": 10,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T10] En l'equació dels gasos ideals (P · V = n · R · T), si dupliquem simultàniament la temperatura absoluta (en kelvins) i reduïm el volum a la meitat mantenint constant la quantitat de gas (n), què passa amb la pressió P?",
    "options": [
      "La pressió es multiplica per 2 (duplica)",
      "La pressió es manté constant perquè els dos efectes es compensen",
      "La pressió es multiplica per 4 (quadruplica)",
      "La pressió es redueix a la quarta part"
    ],
    "correctIndex": 2,
    "explanation": "Detall decisiu (MAN.GRAL.004): P = (n·R·T)/V. Si T' = 2T i V' = V/2, aleshores P' = (n·R·2T)/(V/2) = 4 · (n·R·T)/V = 4P. La trampa típica és pensar que un factor 2 i una meitat s'anul·len."
  },
  {
    "topic": 10,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T10] Un gas tòxic o inflamable amb una massa molar (pes molecular) de 44 g/mol (com el propà, C3H8) respecte a l'aire (massa molar mitjana ≈ 29 g/mol) en condicions normals de pressió i temperatura:",
    "options": [
      "Té una densitat relativa respecte a l'aire d'aproximadament 0,66 (< 1), per la qual cosa s'eleva cap al sostre",
      "Té una densitat relativa respecte a l'aire d'aproximadament 1,52 (> 1), per la qual cosa s'eleva ràpidament a les capes altes",
      "Té la mateixa densitat que l'aire perquè tots els gasos ideals ocupen 22,4 L/mol",
      "Té una densitat relativa respecte a l'aire d'aproximadament 1,52 (> 1), per la qual cosa s'acumula a les zones baixes"
    ],
    "correctIndex": 3,
    "explanation": "Detall decisiu (MAN.GRAL.004): densitat relativa a l'aire = M_gas / M_aire = 44 / 29 ≈ 1,52 (> 1). En ser més dens que l'aire, tendeix a baixar i acumular-se a ras de terra, soterranis i arquetes (no a pujar!)."
  },
  {
    "topic": 11,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T11] En un circuit trifàsic equilibrat de corrent altern amb tensió de línia U_L, intensitat de línia I_L i factor de potència cos(φ), quina és la fórmula correcta de la potència activa total (P)?",
    "options": [
      "P = √3 · U_L · I_L · cos(φ)",
      "P = 3 · U_L · I_L · cos(φ)",
      "P = √3 · U_L · I_L · sin(φ)",
      "P = U_L · I_L · cos(φ)"
    ],
    "correctIndex": 0,
    "explanation": "Detall decisiu (MAN.GRAL.005): en trifàsica amb magnituds de LÍNIA (U_L, I_L), el factor és √3 (no 3, que seria amb magnituds de fase: 3·U_F·I_F·cos φ) i per a la potència ACTIVA s'usa cos(φ) (sin(φ) correspon a la potència reactiva Q)."
  },
  {
    "topic": 11,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T11] Per què és crític en una intervenció amb vehicles o línies d'alta tensió evitar caminar a passes llargues dins la zona d'influència d'un cable caigut a terra?",
    "options": [
      "Per reduir la tensió de contacte, que és la diferència de potencial entre els dos peus en contacte amb el sòl a diferents distàncies del punt de contacte",
      "Per reduir la tensió de pas, que és la diferència de potencial entre els dos peus en contacte amb el sòl a diferents distàncies del punt de contacte",
      "Per reduir la tensió de pas, que és la diferència de potencial entre la mà que toca una massa metàl·lica i els peus a terra",
      "Per anul·lar la inducció electromagnètica sobre la sola aïllant de les botes"
    ],
    "correctIndex": 1,
    "explanation": "Detall decisiu (MAN.GRAL.005): la diferència de potencial entre els dos peus sobre el terreny és la TENSIÓ DE PAS (no la tensió de contacte, que és entre una part del cos que toca una massa posada en tensió i els peus a terra)."
  },
  {
    "topic": 12,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T12] En una instal·lació elèctrica interior protegida amb un interruptor diferencial (ID) d'alta sensibilitat (30 mA) i un interruptor magnetotèrmic (PIA) de 16 A, quin dels dos dispositius dispara davant d'un defecte d'aïllament (derivació a terra) de 100 mA?",
    "options": [
      "Dispara l'interruptor magnetotèrmic (PIA), perquè 100 mA supera la seva sensibilitat tèrmica de curtcircuit",
      "Disparen simultàniament tant l'ID com el PIA per garantir la selectivitat de la instal·lació",
      "No dispara cap dels dos perquè 100 mA és inferior a la intensitat nominal de 16 A",
      "Dispara l'interruptor diferencial (ID), perquè detecta un corrent de fuga a terra superior a 30 mA; el magnetotèrmic (PIA) no dispara"
    ],
    "correctIndex": 3,
    "explanation": "Detall decisiu (MAN.GRAL.007): el diferencial (ID) protegeix les persones contra contactes indirectes/directes detectant diferències entre fase i neutre (fuga a terra ≥ 30 mA), mentre que el magnetotèrmic (PIA) protegeix els conductors contra sobrecàrregues (> 16 A) i curtcircuits."
  },
  {
    "topic": 12,
    "difficulty": "Mitjà",
    "question": "[PUNYETERA · T12] En una instal·lació receptora de gas canalitzat d'un edifici, quin element permet tallar el subministrament a tota la finca des de l'exterior o l'accés de l'edifici?",
    "options": [
      "La clau d'usuari o d'abonat, situada just a l'entrada de cada habitatge particular",
      "La vàlvula de seguretat per mínima pressió incorporada dins el cremador de la caldera",
      "La clau d'escomesa (o clau general de tall d'edifici), situada abans del comptador/reguladors de l'immoble",
      "El sifó hidràulic de desguàs de condensats de l'escomesa"
    ],
    "correctIndex": 2,
    "explanation": "Detall decisiu (MAN.GRAL.007): la clau d'escomesa (clau general de l'edifici) talla tot l'immoble; la clau d'usuari només talla un habitatge concret."
  },
  {
    "topic": 13,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T13] En un sistema d'impulsió d'aigua amb mànegues, si mantenim el mateix cabal Q i canviem una línia de diàmetre 45 mm per una de 70 mm, què passa amb les pèrdues de càrrega unitàries (per cada 100 m)?",
    "options": [
      "Disminueixen dràsticament (aproximadament en proporció inversa a D^5), perquè en augmentar el diàmetre baixa molt la velocitat del fluid",
      "Augmenten proporcionalment al diàmetre, perquè hi ha més superfície de paret interior en contacte amb l'aigua",
      "Disminueixen exactament a la meitat, perquè les pèrdues de càrrega són inversament proporcionals al diàmetre D",
      "Es mantenen iguals mentre la pressió de sortida de la bomba no variï"
    ],
    "correctIndex": 0,
    "explanation": "Detall decisiu (MAN.GRAL.009): segons l'equació de Darcy-Weisbach expressada en funció del cabal Q, J ∝ Q^2 / D^5. Passar de 45 mm a 70 mm redueix les pèrdues de càrrega aproximadament un factor (70/45)^5 ≈ 9,1 vegades, no pas a la meitat."
  },
  {
    "topic": 13,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T13] Quan connectem dues bombes centrífugues idèntiques EN PARAL·LEL respecte al funcionament d'una sola bomba, què obtenim teòricament?",
    "options": [
      "Es duplica la pressió (altura manomètrica) nominal mantenint el mateix cabal màxim",
      "Es duplica el cabal màxim impulsat mantenint la mateixa pressió (altura manomètrica) nominal",
      "Es dupliquen simultàniament tant el cabal màxim com la pressió nominal de sortida",
      "El cabal es divideix a la meitat per repartir l'esforç entre les dues bombes"
    ],
    "correctIndex": 1,
    "explanation": "Detall decisiu (MAN.GRAL.009): la connexió EN PARAL·LEL suma cabals (manté la pressió H), mentre que la connexió EN SÈRIE suma pressions/altures manomètriques (manté el cabal Q)."
  },
  {
    "topic": 14,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T14] En cartografia topogràfica UTM (projecció conforme), com es defineix exactament la declinació magnètica respecte a la convergència de meridians (o convergència de quadrícula)?",
    "options": [
      "La declinació magnètica és l'angle entre el Nord de quadrícula (UTM) i el Nord magnètic, mentre que la convergència de meridians és l'angle entre el Nord geogràfic i el Nord magnètic",
      "La declinació magnètica és l'angle entre el Nord geogràfic i el Nord de quadrícula (UTM), mentre que la convergència de meridians és sempre 0° a Catalunya",
      "La declinació magnètica és l'angle entre el Nord geogràfic (vertader) i el Nord magnètic, mentre que la convergència de meridians és l'angle entre el Nord geogràfic i el Nord de quadrícula (UTM)",
      "La declinació magnètica és constant al llarg dels anys, mentre que la convergència de meridians varia anualment"
    ],
    "correctIndex": 2,
    "explanation": "Detall decisiu (MAN.GRAL.002): Nord geogràfic ↔ Nord magnètic = Declinació magnètica (varia amb el temps); Nord geogràfic ↔ Nord de quadrícula (UTM) = Convergència de meridians (fixa per a un punt). L'angle entre Nord de quadrícula i Nord magnètic s'anomena desviació magnètica o angle QM."
  },
  {
    "topic": 14,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T14] En un mapa topogràfic, entre dos punts separats per una distància reduïda (horitzontal) de 200 m hi ha un desnivell vertical de 200 m. Quin és el pendent del terreny expressat en percentatge i en graus?",
    "options": [
      "Un pendent del 100 %, que equival a un angle de 90°",
      "Un pendent del 50 %, que equival a un angle de 45°",
      "Un pendent del 200 %, que equival a un angle de 63,4°",
      "Un pendent del 100 %, que equival a un angle de 45°"
    ],
    "correctIndex": 3,
    "explanation": "Detall decisiu (MAN.GRAL.002): pendent (%) = (desnivell / distància horitzontal) × 100 = (200 / 200) × 100 = 100 %, i angle = arctan(200/200) = arctan(1) = 45° (la trampa clàssica és associar un pendent del 100 % amb una paret vertical de 90°)."
  },
  {
    "topic": 15,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T15] En una biga biarticulada sotmesa a una càrrega vertical cap avall al centre de la llum, quina fibra treballa a compressió i quina a tracció per efecte del moment flector positiu?",
    "options": [
      "La fibra superior treballa a compressió i la fibra inferior treballa a tracció",
      "La fibra superior treballa a tracció i la fibra inferior treballa a compressió",
      "Totes dues fibres treballen a compressió pura i només la fibra neutra treballa a tracció",
      "La fibra superior treballa a esforç tallant pur i la fibra inferior a torsió"
    ],
    "correctIndex": 0,
    "explanation": "Detall decisiu (MAN.GRAL.006): en una biga biarticulada (moment flector positiu, panxa cap avall), la cara superior s'escurça (compressió) i la cara inferior s'allarga (tracció); per això en formigó armat les barres d'acer principals es col·loquen a la part inferior."
  },
  {
    "topic": 16,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T16] Segons el manual d'intervenció en assistències tècniques (MAN.ATXX.000), davant una fuita o incidència en una canonada de gas o instal·lació d'aigua/electricitat de companyia subministradora, quina actuació correspon als bombers respecte a les claus o vàlvules de la companyia?",
    "options": [
      "Un cop resolta l'emergència i comprovada visualment l'estanquitat, els bombers han de reobrir la clau general per restituir el servei als veïns",
      "Els bombers tenen prohibit manipular qualsevol clau de tall d'escomesa fins i tot en cas de fuita greu amb risc d'explosió",
      "Només s'ha de tancar la clau d'escomesa o de pas accessible per garantir la seguretat, però NO s'ha de reobrir mai el subministrament: la reposició correspon exclusivament al personal tècnic autoritzat de la companyia",
      "En instal·lacions de gas natural, un cop tancada la clau d'escomesa s'ha de ventilar purgar la canonada obrint els fogons sense avisar la companyia"
    ],
    "correctIndex": 2,
    "explanation": "Detall decisiu (MAN.ATXX.000): per seguretat es pot tancar el subministrament en situació d'emergència, però MAI no s'ha de reobrir (pel risc de fuites no detectades en aparells oberts o bosses d'aire); la reobertura correspon sempre al personal qualificat/companyia."
  },
  {
    "topic": 17,
    "difficulty": "Difícil",
    "question": "[PUNYETERA · T17] A la xarxa RESCAT (estàndard TETRA), quina diferència operativa fonamental hi ha entre treballar en mode TMO (Trunked Mode Operation) i treballar en mode DMO (Direct Mode Operation)?",
    "options": [
      "En DMO les comunicacions passen pels repetidors/infraestructura de la xarxa, mentre que en TMO els terminals comuniquen directament entre si sense infraestructura",
      "En TMO les comunicacions passen pels repetidors/infraestructura de la xarxa (amb cobertura àmplia i coordinació amb sala), mentre que en DMO els terminals comuniquen directament entre si sense infraestructura (abast local)",
      "En mode DMO no cal seleccionar el mateix grup o canal de treball perquè els repetidors enruten automàticament la veu",
      "El mode TMO funciona en símplex pur entre dos terminals sense repetidor i consumeix menys bateria que el DMO"
    ],
    "correctIndex": 1,
    "explanation": "Detall decisiu (MAN.COMU.000): TMO = Trunked Mode Operation (mode xarxa amb repetidors/estacions base); DMO = Direct Mode Operation (mode directe terminal-a-terminal sense repetidors, útil en soterranis o zones sense cobertura de xarxa)."
  }
];
