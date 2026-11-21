/**
 * Banc de 50 preguntes "punyeteres" II d'alt nivell — Temes 18 a 34.
 * Cada pregunta inclou com a mínim dues opcions pràcticament idèntiques
 * diferenciades per un petit detall decisiu del temari oficial.
 */
export const QUESTIONS_PUNYETERES_4 = [
  // =========================================================================
  // TEMA 18 — Vehicles d'intervenció en emergències (3 preguntes)
  // =========================================================================
  {
    topic: 18,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T18] En la codificació numèrica de 5 xifres dels vehicles de Bombers de la Generalitat (format X.YY.ZZ, p. ex. 3.20.11), què identifica exactament cadascun dels tres blocs?',
    options: [
      'X identifica la Regió d\'Emergències, YY identifica el Parc de Bombers i ZZ identifica el tipus funcional i l\'ordre del vehicle',
      'X identifica el Parc de Bombers, YY identifica la Regió d\'Emergències i ZZ identifica el tipus funcional i l\'ordre del vehicle',
      'X identifica la Regió d\'Emergències, YY identifica el tipus funcional del vehicle i ZZ identifica el Parc de Bombers',
      'X identifica el tipus funcional del vehicle, YY identifica la Regió d\'Emergències i ZZ identifica el Parc i l\'ordre'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és l\'ordre jeràrquic del codi X.YY.ZZ (MAN.EQIP.000): el primer dígit (X) és la Regió d\'Emergències, els dos centrals (YY) són el Parc de Bombers i els dos finals (ZZ) són el tipus funcional i ordre del vehicle (no a l\'inrevés).'
  },
  {
    topic: 18,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T18] Respecte de les prestacions estàndard d\'una Bomba Urbana Pesant (BUP) davant d\'una Bomba Rural Pesant (BRP), quina descripció tècnica de la BUP és exacta?',
    options: [
      'Cisterna superior a 3.000 L (3.000–4.000 L), xassís 4×4 amb reductora i bomba combinada (BP 10–15 bar / AP 35–40 bar)',
      'Cisterna superior a 3.000 L (3.000–4.000 L), xassís 4×2 urbà/carretera i bomba combinada (BP 10–15 bar / AP 35–40 bar)',
      'Cisterna de 1.000–2.000 L, xassís 4×2 urbà/carretera i bomba combinada (BP 10–15 bar / AP 35–40 bar)',
      'Cisterna superior a 3.000 L (3.000–4.000 L), xassís 4×2 urbà/carretera i bomba únicament d\'alta pressió (35–40 bar)'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és la tracció: la BUP munta xassís 4×2 (urbà/carretera) amb cisterna > 3.000 L (3.000–4.000 L) i bomba combinada BP/AP, mentre que el xassís 4×4 amb reductora i bloqueig de diferencials correspon a la BRP (i 1.000–2.000 L a la BUL).'
  },
  {
    topic: 18,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T18] Dins dels Mitjans Aeris (MAER) d\'extinció d\'incendis forestals, quina diferència operativa exacta defineix els avions AVA respecte dels avions amfibis (tipus Foca/Canadair)?',
    options: [
      'Els AVA carreguen en terra (~3.100 L sovint amb retardant) i els amfibis carreguen en mar o pantà (~5.500–6.000 L)',
      'Els AVA carreguen en mar o pantà (~3.100 L) i els amfibis carreguen exclusivament en terra (~5.500–6.000 L amb retardant)',
      'Els AVA carreguen en terra (~5.500–6.000 L) i els amfibis carreguen en mar o pantà (~3.100 L)',
      'Tant els AVA com els amfibis carreguen en terra, però els AVA tenen una capacitat de 500 a 1.500 L mitjançant snorkel'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és el lloc de càrrega i la capacitat: els AVA (Avió de Vigilància i Atac) carreguen en pista/terra (~3.100 L, sovint amb retardant), mentre que els amfibis Foca/Canadair carreguen planant sobre mar o pantà (~5.500–6.000 L). Les capacitats de 500–1.500 L corresponen als helicòpters.'
  },

  // =========================================================================
  // TEMA 19 — Conducció d'emergència, 4x4 i mecànica (3 preguntes)
  // =========================================================================
  {
    topic: 19,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T19] En un vehicle tot terreny de Bombers amb caixa de transferència manual, quina condició és obligatòria per acoblar o desacoblar la reductora (4H ↔ 4L) sense danyar la transmissió?',
    options: [
      'Es pot fer en marxa a una velocitat inferior a 40 km/h, en línia recta i sense accelerar bruscament',
      'Es pot fer en marxa a una velocitat inferior a 5 km/h amb l\'embragatge trepitjat',
      'Cal aturar el vehicle completament (0 km/h) amb l\'embragatge trepitjat o la caixa de canvis en punt mort (N)',
      'Es pot fer en marxa a qualsevol velocitat sempre que s\'hagi bloquejat prèviament el diferencial posterior'
    ],
    correctIndex: 2,
    explanation: 'El detall decisiu és no confondre 2H ↔ 4H amb 4H ↔ 4L: passar de 2H a 4H (marxes llargues) es pot fer en marxa a < 40 km/h en línia recta, però connectar o desconnectar la reductora (4H ↔ 4L) exigeix obligatòriament el vehicle TOTALMENT ATURAT (0 km/h) en punt mort (N) o embragat.'
  },
  {
    topic: 19,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T19] Quin és l\'ordre estricte d\'activació i les velocitats màximes permeses per bloquejar els tres diferencials d\'un camió 4×4 permanent?',
    options: [
      '1r Central (≤ 40 km/h) → 2n Anterior (≤ 5 km/h) → 3r Posterior (≤ 5 km/h)',
      '1r Posterior (≤ 40 km/h) → 2n Central (≤ 5 km/h) → 3r Anterior (≤ 5 km/h)',
      '1r Central (≤ 40 km/h) → 2n Posterior (≤ 5 km/h) → 3r Anterior (≤ 5 km/h)',
      '1r Central (≤ 5 km/h) → 2n Posterior (≤ 40 km/h) → 3r Anterior (≤ 5 km/h)'
    ],
    correctIndex: 2,
    explanation: 'El detall decisiu és la seqüència 1r Central (≤ 40 km/h) → 2n Posterior (≤ 5 km/h) → 3r Anterior (≤ 5 km/h, que impedeix girar la direcció). El desbloqueig es fa en ordre exactament invers (Anterior → Posterior → Central).'
  },
  {
    topic: 19,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T19] Segons el calendari d\'obligatorietat de sistemes de seguretat viària a la Unió Europea (MAN.EQIP.002 Cap. 6), en quins anys van passar a ser obligatoris l\'ESP (Control d\'Estabilitat) i el sistema eCall 112?',
    options: [
      'L\'ESP el 2014 (seguretat activa) i l\'eCall 112 el 2018 (seguretat terciària)',
      'L\'ESP el 2018 (seguretat activa) i l\'eCall 112 el 2014 (seguretat terciària)',
      'L\'ESP el 2006 (seguretat passiva) i l\'eCall 112 el 2018 (seguretat terciària)',
      'L\'ESP el 2014 (seguretat passiva) i l\'eCall 112 el 2016 (seguretat terciària)'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu són les dates i la classificació: ABS (2004, activa) → Airbags (2006, passiva) → ESP (2014, activa) → eCall 112 (2018, terciària). No s\'han d\'intercanviar el 2014 i el 2018 ni confondre l\'ESP com a seguretat passiva.'
  },

  // =========================================================================
  // TEMA 20 — EPI i ERA (3 preguntes)
  // =========================================================================
  {
    topic: 20,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T20] Quines normes UNE-EN corresponen exactament al casc forestal i al casc de rescat tècnic?',
    options: [
      'UNE-EN 16471 per al casc de rescat tècnic i UNE-EN 16473 per al casc forestal',
      'UNE-EN 16471 per al casc forestal i UNE-EN 16473 per al casc de rescat tècnic',
      'UNE-EN 443 per al casc forestal i UNE-EN 16471 per al casc de rescat tècnic',
      'UNE-EN 16471 per al casc forestal i UNE-EN 15614 per al casc de rescat tècnic'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és no intercanviar els dos codis quasi idèntics: UNE-EN 16471 és el casc forestal i UNE-EN 16473 és el casc de rescat tècnic (mentre que UNE-EN 443 és el casc estructural Tipus B i UNE-EN 15614 és la roba forestal).'
  },
  {
    topic: 20,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T20] En la roba de protecció per a incendis estructurals conforme a la norma UNE-EN 469, què avaluen respectivament els quatre índexs de prestació (Xf, Xr, Y, Z) exigits en Nivell 2?',
    options: [
      'Xf: calor radiant, Xr: propagació de flama, Y: impermeabilitat a l\'aigua, Z: resistència al vapor/transpirabilitat',
      'Xf: propagació de flama, Xr: calor radiant, Y: resistència al vapor/transpirabilitat, Z: impermeabilitat a l\'aigua',
      'Xf: propagació de flama, Xr: calor radiant, Y: impermeabilitat a l\'aigua, Z: resistència al vapor/transpirabilitat',
      'Xf: propagació de flama, Xr: calor conductiva, Y: impermeabilitat química, Z: resistència mecànica al trencament'
    ],
    correctIndex: 2,
    explanation: 'El detall decisiu és l\'associació exacta dels subíndexs de l\'EN 469: Xf = flama (flame), Xr = calor radiant (radiant), Y = impermeabilitat/penetració d\'aigua i Z = resistència al vapor d\'aigua (transpirabilitat).'
  },
  {
    topic: 20,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T20] En un ERA amb dispositiu d\'Home Mort (PASS) i ampolla de 6,8 L a 300 bar (consum mitjà-alt estàndard de 50 L/min), als quants segons d\'immobilitat s\'activa l\'alarma màxima (> 95 dB) i quina és l\'autonomia operativa respectant la reserva del 25%?',
    options: [
      'Alarma màxima als 40 segons totals (30 s prealarma + 10 s) i autonomia operativa de 30,6 minuts',
      'Alarma màxima als 30 segons totals (20 s prealarma + 10 s) i autonomia operativa de 30,6 minuts',
      'Alarma màxima als 40 segons totals (30 s prealarma + 10 s) i autonomia operativa de 40,8 minuts',
      'Alarma màxima als 60 segons totals (30 s prealarma + 30 s) i autonomia operativa de 30,6 minuts'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és doble: el PASS fa prealarma als 30 s i alarma màxima als 40 s totals (+10 s); i amb una ampolla de 6,8 L × 300 bar = 2.040 L, el 75% útil (1.530 L) a 50 L/min dóna 30,6 minuts operatius (40,8 min seria sense descomptar el 25% de reserva).'
  },

  // =========================================================================
  // TEMA 21 — Gestió d'emergències i Protecció Civil (3 preguntes)
  // =========================================================================
  {
    topic: 21,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T21] Segons la Llei 5/1994 de Bombers i la Llei 4/1997 de Protecció Civil de Catalunya, a partir de quin llindar de població és obligatori disposar de servei propi de protecció civil/PAM (i servei de bombers) i a partir de quin llindar és obligatòria la Comissió Municipal de Protecció Civil?',
    options: [
      'Servei propi/PAM a partir de > 50.000 habitants i Comissió Municipal de PC a partir de > 20.000 habitants',
      'Servei propi/PAM a partir de > 20.000 habitants i Comissió Municipal de PC a partir de > 50.000 habitants',
      'Tant el servei propi/PAM com la Comissió Municipal de PC són obligatoris a partir de > 20.000 habitants',
      'Servei propi/PAM a partir de > 10.000 habitants i Comissió Municipal de PC a partir de > 20.000 habitants'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és no creuar els dos llindars poblacionals: els municipis de més de 20.000 habitants estan obligats a tenir servei propi de bombers/PC i PAM/DUPROCIM, mentre que la Comissió Municipal de Protecció Civil és obligatòria en municipis de més de 50.000 habitants.'
  },
  {
    topic: 21,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T21] En el Mecanisme de Protecció Civil de la Unió (UCPM) i els centres de coordinació a Catalunya (MAN.GRAL.001), qui activa el pool europeu d\'emergència (ECPP) i on s\'ubiquen les dues seus operatives redundants del telèfon 112 (CAT112)?',
    options: [
      'L\'ERCC activa l\'ECPP a petició de l\'Estat afectat (que manté la direcció), i el CAT112 té seus a Bellaterra i Zona Franca',
      'L\'ERCC activa l\'ECPP d\'ofici i assumeix la direcció operativa, i el CAT112 té seus a Reus i Zona Franca (Barcelona)',
      'L\'ERCC activa l\'ECPP a petició de l\'Estat afectat (que accepta i dirigeix), i el CAT112 té seus a Reus i Zona Franca (Barcelona)',
      'El CECAT activa directament l\'ECPP a Catalunya, i el CAT112 té seus a Reus i Bellaterra'
    ],
    correctIndex: 2,
    explanation: 'El detall decisiu és doble: a l\'UCPM, l\'Estat afectat sol·licita ajuda a l\'ERCC, l\'ERCC activa l\'ECPP i l\'Estat afectat accepta i dirigeix l\'operació; i les dues seus redundants del CAT112 són a Reus i la Zona Franca (Bellaterra és la seu de la Sala Central de Bombers, SCB).'
  },
  {
    topic: 21,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T21] Dins del cicle de l\'emergència i l\'equació matemàtica del risc (MAN.GRAL.001), quina seqüència de fases i quina fórmula són exactes?',
    options: [
      'Reducció → Preparació → Resposta → Recuperació; i Risc = Perill × Vulnerabilitat × Exposició',
      'Preparació → Reducció → Resposta → Recuperació; i Risc = Perill × Vulnerabilitat × Exposició',
      'Reducció → Preparació → Resposta → Recuperació; i Risc = (Perill + Vulnerabilitat) ÷ Resiliència',
      'Prevenció → Mitigació → Preparació → Resposta; i Risc = Perill × Vulnerabilitat ÷ Exposició'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és l\'ordre del cicle de 4 fases (1. Reducció → 2. Preparació → 3. Resposta → 4. Recuperació) i el producte dels tres factors (Risc = Perill × Vulnerabilitat × Exposició), de manera que si qualsevol dels tres és zero, el risc és zero.'
  },

  // =========================================================================
  // TEMA 22 — Sistema de Comandament SISCOM (2 preguntes)
  // =========================================================================
  {
    topic: 22,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T22] Dins l\'escalafó oficial de recursos del SISCOM (MAN.COMD.001), quin és l\'ordre jeràrquic exacte de menor a major complexitat entre els nivells intermedis?',
    options: [
      'Equip → Grup → Maniobra → Sector → Zona → Àrea Funcional → Cap d\'Intervenció',
      'Equip → Maniobra → Sector → Grup → Zona → Àrea Funcional → Cap d\'Intervenció',
      'Equip → Maniobra → Grup → Sector → Zona → Àrea Funcional → Cap d\'Intervenció',
      'Maniobra → Equip → Grup → Zona → Sector → Àrea Funcional → Cap d\'Intervenció'
    ],
    correctIndex: 2,
    explanation: 'El detall decisiu és la posició de Maniobra, Grup i Sector: l\'Equip (binomi/vehicle) executa una Maniobra; diversos equips entorn d\'una maniobra formen un Grup; per sobre hi ha el Sector (geogràfic/funcional), després la Zona, l\'Àrea Funcional (Operacions/Suport) i el Cap d\'Intervenció.'
  },
  {
    topic: 22,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T22] Segons la doctrina SISCOM, quin és el tram de control òptim per a cada comandament i com funciona la cadena de comandament (+1 / -1)?',
    options: [
      'Tram de control de 3 a 5 línies directes, i cada efectiu reporta al seu superior immediat (+1) i dirigeix el seu nivell (-1)',
      'Tram de control de 5 a 7 línies directes, i cada efectiu reporta al seu superior immediat (+1) i dirigeix el seu nivell (-1)',
      'Tram de control de 3 a 5 línies directes, i cada efectiu pot rebre ordres directes del CI (+2) saltant el comandament intermedi',
      'Tram de control de 2 a 4 línies directes, i cada efectiu reporta al seu superior immediat (+1) i dirigeix el seu nivell (-1)'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és el rang numèric del tram de control òptim al SISCOM: entre 3 i 5 línies directes de supervisió (evita saturació), mantenint la disciplina vertical (+1 / -1) sense saltar baules.'
  },

  // =========================================================================
  // TEMA 23 — Prevenció bàsica d'incendis (3 preguntes)
  // =========================================================================
  {
    topic: 23,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T23] Segons el CTE DB-SI 5 (Intervenció dels bombers), quina separació màxima es permet entre l\'espai de maniobra de l\'autoescala i la façana de l\'edifici en funció de l\'alçada d\'evacuació (h)?',
    options: [
      'Per a h ≤ 15 m: màxim 23 m; entre 15 i 20 m: màxim 18 m; per a h > 20 m: màxim 12 m',
      'Per a h ≤ 15 m: màxim 30 m; entre 15 i 20 m: màxim 23 m; per a h > 20 m: màxim 18 m',
      'Per a h ≤ 15 m: màxim 30 m; entre 15 i 20 m: màxim 20 m; per a h > 20 m: màxim 15 m',
      'Per a qualsevol edifici amb h > 9 m: màxim 23 m amb amplada mínima de vial d\'aproximació de 5,0 m'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu són les tres fites exactes de separació a façana al CTE DB-SI 5: h ≤ 15 m → 30 m; 15–20 m → 23 m; i > 20 m → 18 m (amb una amplada mínima de l\'espai de maniobra de 5,0 m, mentre que el vial d\'aproximació és ≥ 3,5 m).'
  },
  {
    topic: 23,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T23] Quina diferència hidràulica i de reserva d\'aigua existeix entre un hidrant públic municipal (ITC SP-120) i un hidrant exterior industrial (Nou RSCIEI RD 164/2025)?',
    options: [
      'L\'hidrant públic garanteix ≥ 1.000 L/min durant 2 h a ≥ 1 bar (reserva 240 m³), mentre que l\'industrial garanteix 1.500–3.000 L/min durant 60–90 min a ≥ 5 bar',
      'L\'hidrant públic garanteix ≥ 1.500 L/min durant 2 h a ≥ 5 bar (reserva 240 m³), mentre que l\'industrial garanteix 1.000 L/min durant 60–90 min a ≥ 1 bar',
      'L\'hidrant públic garanteix ≥ 1.000 L/min durant 1 h a ≥ 1 bar (reserva 120 m³), mentre que l\'industrial garanteix 1.500–3.000 L/min durant 2 h a ≥ 5 bar',
      'L\'hidrant públic garanteix ≥ 1.000 L/min durant 2 h a ≥ 1 bar (reserva 240 m³), però l\'industrial s\'ha de situar a més de 40 m de la façana'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu són els cabals, pressions i durades: l\'ITC SP-120 (públic) exigeix 1.000 L/min × 2 h a ≥ 1 bar (reserva 240 m³), mentre que el nou RSCIEI (industrial) exigeix 1.500–3.000 L/min × 60–90 min a ≥ 5 bar (a ≤ 40 m d\'accés i separat 5–15 m de façana).'
  },
  {
    topic: 23,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T23] En resistència al foc (R-E-I) i escales protegides del CTE DB-SI, quina especificació correspon exactament al criteri «I» (Aïllament tèrmic) i a l\'escala «Especialment Protegida»?',
    options: [
      'Criteri I: cara no exposada ≤ +140 °C mitjana i ≤ +180 °C puntual; l\'Escala Especialment Protegida afegeix vestíbul d\'independència amb doble porta EI₂ 30-C5',
      'Criteri I: cara no exposada ≤ +180 °C mitjana i ≤ +140 °C puntual; l\'Escala Especialment Protegida afegeix vestíbul d\'independència amb doble porta EI₂ 60-C5',
      'Criteri I: cara no exposada ≤ +140 °C mitjana i ≤ +180 °C puntual; l\'Escala Especialment Protegida només té una porta EI₂ 60-C5 sense vestíbul',
      'Criteri I: impedeix el pas de flames i gasos calents; l\'Escala Especialment Protegida afegeix vestíbul d\'independència amb doble porta EI₂ 30-C5'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és doble: el criteri I limita la cara no exposada a ≤ +140 °C de mitjana i ≤ +180 °C puntual (E és la integritat davant flames/gasos); i l\'escala Especialment Protegida afegeix vestíbul amb doble porta EI₂ 30-C5 (la Protegida simple té portes EI₂ 60-C5).'
  },

  // =========================================================================
  // TEMA 24 — Incendis estructurals (3 preguntes)
  // =========================================================================
  {
    topic: 24,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T24] Segons la nomenclatura espacial oficial en incendis estructurals (MAN.INES.000 Cap. 2.2.8 i Cap. 3), com s\'assignen les façanes A-B-C-D i fins a quina planta arriba l\'abast operatiu estàndard d\'una AEA de 30 m?',
    options: [
      'En sentit antihorari (A principal, B dreta, C posterior, D esquerra) i l\'AEA de 30 m arriba fins a Planta 8 (PL+8)',
      'En sentit horari (A principal, B esquerra mirant A des de fora, C posterior, D dreta) i l\'AEA de 30 m arriba fins a Planta 8 (PL+8)',
      'En sentit horari (A principal, B esquerra, C posterior, D dreta) i l\'AEA de 30 m arriba fins a Planta 10 (PL+10)',
      'En sentit horari (A principal, B dreta, C posterior, D esquerra) i l\'AEA de 30 m arriba fins a Planta 6 (PL+6)'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és el sentit horari mirant la façana principal A des de fora (A → B esquerra → C posterior → D dreta) i el límit operatiu de l\'AEA estàndard de 30 m fins a Planta 8 (a partir de PL+9 l\'accés és per escala interior).'
  },
  {
    topic: 24,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T24] En les tècniques d\'aplicació d\'aigua en incendis estructurals (Cap. 4.1.5–4.1.6), com s\'executa correctament un «atac transicional» des de l\'exterior?',
    options: [
      'Amb raig polvoritzat en con de 30°–60° fent polsacions curtes de menys d\'1 segon al coixí de gasos',
      'Amb raig compacte fix dirigit al sostre per una finestra durant 10–20 segons, sense moure la llança en cercle',
      'Amb raig compacte fent escombrats en forma d\'"O", "Z" o "8" durant 10–20 segons per no trencar les capes tèrmiques',
      'Amb raig polvoritzat dirigit directament a la base de les flames durant 1 a 5 segons mentre s\'obre la porta d\'entrada'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és la tècnica exacta de l\'atac transicional: raig COMPACTE FIX dirigit al SOSTRE des de l\'exterior (10–20 s) SENSE moure la llança en cercle (els moviments en O/Z/8 i polsacions curtes < 1 s en con 30°–60° són per al refredament interior de gasos 3D).'
  },
  {
    topic: 24,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T24] En una tàctica de Ventilació per Pressió Positiva (VPP) en un incendi d\'habitatge, quina és la «regla d\'or» abans d\'engegar el ventilador i a quina distància s\'ha d\'emplaçar de la porta d\'entrada?',
    options: [
      'Obrir l\'obertura de sortida (1 a 2 vegades l\'àrea d\'entrada) ABANS d\'engegar el ventilador, situat a 1,5–2,5 m de la porta',
      'Engegar primer el ventilador a 1,5–2,5 m per pressuritzar la caixa d\'escala i obrir després la sortida quan el fum cedeixi',
      'Obrir l\'obertura de sortida (0,5 vegades l\'àrea d\'entrada) ABANS d\'engegar el ventilador, situat a 4–5 m de la porta',
      'Obrir l\'obertura de sortida ABANS d\'engegar el ventilador només en VPN, ja que en VPP la sortida s\'obre en fase de remat'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és la regla d\'or de la VPP: cal obrir la sortida (1–2× l\'àrea d\'entrada) ABANS d\'engegar el ventilador (i amb línia d\'aigua a punt), emplaçant el ventilador a 1,5–2,5 m perquè el con d\'aire segelli el marc de la porta.'
  },

  // =========================================================================
  // TEMA 25 — Incendis forestals (3 preguntes)
  // =========================================================================
  {
    topic: 25,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T25] En el sistema d\'anàlisi CPS de Doug Campbell aplicat a incendis forestals, quines són les tres forces d\'alineació i quin és l\'ordre exacte dels 5 passos CPS?',
    options: [
      'Forces: Pendent, Vent i Humitat relativa; Passos: Observar → Preveure canvis → Oportunitats → Objectiu → Llindars LACES',
      'Forces: Pendent, Vent i Orientació solar (insolació); Passos: Observar alineació → Preveure canvis (trigger points) → Oportunitats (0/3–1/3) → Objectiu/maniobra → Llindars LACES',
      'Forces: Pendent, Vent i Orientació solar (insolació); Passos: Llindars LACES → Observar alineació → Preveure canvis → Oportunitats → Objectiu/maniobra',
      'Forces: Pendent, Vent i Continuïtat vertical; Passos: Observar alineació → Oportunitats → Preveure canvis → Objectiu → Llindars LACES'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és triple: la tercera força d\'alineació del CPS és l\'orientació solar/insolació (no la humitat ni la continuïtat vertical), i la seqüència va d\'Observar (1) → Preveure canvis (2) → Oportunitats 0/3–1/3 (3) → Objectiu/maniobra (4) → Llindars LACES (5).'
  },
  {
    topic: 25,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T25] Dins del protocol LACES en incendis forestals, quin radi mínim de separació fins a la vegetació ha de tenir una Zona Segura (Safety Zone) respecte de la llargada de flama (Lf) i quina condició la defineix?',
    options: [
      'Radi R ≥ 2 × Lf (diàmetre ≥ 4 × Lf), on la dotació pot sobreviure dins la cabina amb els ruixadors activats',
      'Radi R ≥ 4 × Lf (diàmetre ≥ 8 × Lf), on la dotació pot sobreviure SENSE cabina ni mitjans d\'autoprotecció',
      'Radi R ≥ 4 × Lf (diàmetre ≥ 8 × Lf), però exigeix obligatòriament refugi tèrmic o cabina d\'autobomba',
      'Radi R ≥ 8 × Lf (diàmetre ≥ 16 × Lf), on la dotació pot sobreviure SENSE cabina ni mitjans d\'autoprotecció'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és la fórmula R ≥ 4 × Lf (diàmetre de la clariana ≥ 8 × Lf) i la definició estricta de Safety Zone: un lloc lliure de combustible on es pot sobreviure SENSE refugi ni cabina d\'autobomba.'
  },
  {
    topic: 25,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T25] En un atac directe amb eines manuals en incendi forestal (Lf < 1 m i v < 1 km/h), quina separació de seguretat s\'ha de mantenir entre operadors i quin és l\'ordre estricte de la cadena d\'eines?',
    options: [
      'Separació ≥ 3 m; ordre: 1r Motxilla d\'aigua → 2n Batefocs → 3r Pulaski → 4t Pala (o McLeod)',
      'Separació ≥ 3 m; ordre: 1r Pulaski → 2n Batefocs → 3r Motxilla d\'aigua → 4t Pala (o McLeod)',
      'Separació ≥ 5 m; ordre: 1r Motxilla d\'aigua → 2n Batefocs → 3r Pala → 4t Pulaski',
      'Separació ≥ 3 m; ordre: 1r Batefocs → 2n Motxilla d\'aigua → 3r Pulaski → 4t Pala (o McLeod)'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és la seqüència lògica de la cadena d\'eines (MAN.INVE.000 Cap. 4.1.2): primer la Motxilla refreda i abaixa la flama, segon el Batefocs sufoca, tercer el Pulaski talla arrels/obre solc i quart la Pala raspa fins a sòl mineral (amb ≥ 3 m entre operadors).'
  },

  // =========================================================================
  // TEMA 26 — Incendis varis (3 preguntes)
  // =========================================================================
  {
    topic: 26,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T26] En un incendi de vehicle en via pública (MAN.INXX.000 Cap. 2.6–2.7), quin és el radi mínim de la Zona Calenta i com s\'han d\'emplaçar l\'autobomba i el binomi d\'atac?',
    options: [
      'Radi mínim 15 m; autobomba a sobrevent i part baixa del pendent; aproximació del binomi frontal amb línia Ø45 mm',
      'Radi mínim 25 m; autobomba a sobrevent i part alta del pendent; aproximació del binomi en diagonal a 45° pels angles amb línia Ø25 mm',
      'Radi mínim 25 m; autobomba a sotavent i part alta del pendent; aproximació del binomi en diagonal a 45° pels angles amb línia Ø25 mm',
      'Radi mínim 25 m; autobomba a sobrevent i part alta del pendent; aproximació del binomi per la part posterior o frontal a 90°'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu combina tres regles de seguretat: perímetre mínim de 25 m, autobomba a SOBREVENT i PART ALTA del pendent (evita fum i vessaments cap al camió), i aproximació en diagonal a 45° pels angles (mai de front ni per darrere pel risc d\'amortidors/pistons).'
  },
  {
    topic: 26,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T26] Segons l\'etiquetatge europeu de combustibles UNE-EN 16942 i la tàctica davant un incendi de camió propulsat per GNL (Gas Natural Liquat a -162 °C), quina afirmació és exacta?',
    options: [
      'El GNL s\'identifica amb un quadrat i s\'ha de refrigerar intensament el dipòsit criogènic amb aigua per evitar BLEVE',
      'El GNL s\'identifica amb un rombe i està desaconsellat projectar aigua al dipòsit o sobre el toll de GNL pel risc de RPT',
      'El GNL s\'identifica amb un cercle i està desaconsellat projectar aigua pel risc de refredar el fusible TPRD a 110 °C',
      'El GNL s\'identifica amb un rombe i només es pot apagar amb aigua polvoritzada directa sobre l\'escuma del toll'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és que tots els gasos (LPG, CNG, LNG, H2) porten etiqueta de ROMBE (cercle = gasolina, quadrat = dièsel), i en GNL criogènic (-162 °C) l\'aigua aporta +175 °C de calor i provoca una RPT (Transició Ràpida de Fase), a diferència del GLP on sí que es refrigera per evitar BLEVE.'
  },
  {
    topic: 26,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T26] Davant d\'un incendi a l\'interior d\'una sitja (silo) agrícola o industrial amb combustió en somort, per què està prohibit projectar un raig d\'aigua a pressió o obrir de cop les escotilles inferiors?',
    options: [
      'Pel risc de xoc tèrmic sobre les parets de formigó, i la tàctica correcta és inundar des de baix amb aigua polvoritzada',
      'Pel risc d\'explosió de pols combustible en suspensió, i la tàctica correcta és segellar entrades i inertitzar des de dalt (N₂/CO₂ o escuma d\'alta expansió)',
      'Pel risc biològic de lixiviats, i la tàctica correcta és segellar entrades i inertitzar des de baix amb escuma de baixa expansió',
      'Pel risc d\'explosió de pols combustible, i la tàctica correcta és ventilar amb VPP des de les escotilles inferiors abans de buidar'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és el risc d\'explosió de pols combustible si s\'aixeca un núvol en suspensió amb un raig a pressió o una entrada sobtada d\'aire per baix; cal segellar i inertitzar des de dalt (N₂/CO₂ o escuma d\'alta expansió).'
  },

  // =========================================================================
  // TEMA 27 — Riscos NRBQ (3 preguntes)
  // =========================================================================
  {
    topic: 27,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T27] En un diamant de perill NFPA 704 i un panell taronja ADR, què signifiquen respectivament el quadrant esquerre de color blau amb el número 4 i un codi Kemler iniciat per «X» (p. ex. X423)?',
    options: [
      'Blau (esquerra) = Inflamabilitat extrema; prefix X = matèria radioactiva que requereix blindatge',
      'Blau (esquerra) = Risc per a la Salut mortal/extrem; prefix X = reacció perillosa amb l\'aigua (prohibit usar aigua)',
      'Blau (esquerra) = Reactivitat extrema; prefix X = reacció perillosa amb l\'aigua (prohibit usar aigua)',
      'Blau (esquerra) = Risc per a la Salut mortal/extrem; prefix X = risc d\'explosió en massa'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és la lectura exacta: a l\'NFPA 704 el quadrant esquerre BLAU indica Risc per a la Salut (vermell dalt = inflamabilitat, groc dreta = reactivitat, blanc baix = especial), i el prefix «X» al codi Kemler prohibeix expressament usar aigua.'
  },
  {
    topic: 27,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T27] Dins de les maniobres ofensives sobre la font en un incident químic (MAN.RRTT.000 Cap. 4), fins a quina pressió màxima és segur aplicar taponament/obturació i en quina fase s\'ha de fer sempre la despressurització d\'un recipient?',
    options: [
      'Taponament segur només a pressió < 1,5 bar, i despressurització sempre en fase GAS (mai en fase líquida, excepte transvasament a cisterna buida)',
      'Taponament segur fins a 5 bar, i despressurització sempre en fase LÍQUIDA per reduir més ràpidament el volum intern',
      'Taponament segur només a pressió < 1,5 bar, i despressurització sempre en fase LÍQUIDA per evitar congelació de la vàlvula',
      'Taponament segur només a pressió < 3,0 bar, i despressurització sempre en fase GAS'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu són els dos límits crítics de seguretat: el taponament/obturació (falques, pegats, coixins de cinturó) només és segur en fuites a baixa pressió (< 1,5 bar), i la despressurització s\'ha de fer sempre en fase GAS (evitant l\'expansió massiva de líquid a gas).'
  },
  {
    topic: 27,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T27] En protecció radiològica (MAN.RRTT.000 Cap. 2.3), quina diferència funcional hi ha entre el dosímetre personal i el radiàmetre (o intensímetre), i quin material atura la radiació Beta (β)?',
    options: [
      'El dosímetre mesura la taxa de dosi instantània (µSv/h) i el radiàmetre la dosi acumulada (mSv); la radiació Beta s\'atura amb paper o pell',
      'El dosímetre mesura la dosi acumulada (mSv) i el radiàmetre la taxa de dosi instantània (µSv/h o mSv/h); la radiació Beta s\'atura amb alumini o metacrilat',
      'El dosímetre mesura la dosi acumulada (mSv) i el radiàmetre la taxa de dosi instantània (µSv/h); la radiació Beta requereix plom o formigó gruixut',
      'Tots dos mesuren la dosi acumulada en mSv, però el radiàmetre només detecta partícules Alfa (α)'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és no confondre dosímetre (dosi acumulada total en mSv) amb radiàmetre/intensímetre (taxa instantània en µSv/h o mSv/h), ni els blindatges: Alfa = paper/pell; Beta = alumini/metacrilat; Gamma = plom/formigó.'
  },

  // =========================================================================
  // TEMA 28 — Assistència sanitària (3 preguntes)
  // =========================================================================
  {
    topic: 28,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T28] Segons l\'ordre actualitzat de control d\'hemorràgies externes (MAN.SANI.000 V.3), què s\'ha de fer si la primera gasa aplicada amb compressió directa s\'amara de sang i on s\'ha de col·locar el torniquet si cal recórrer-hi?',
    options: [
      'Retirar la gasa amarada per posar-ne una de neta i elevar l\'extremitat; torniquet just sobre l\'articulació més propera',
      'NO retirar mai la primera gasa (posar-ne més a sobre per no trencar el coàgul); torniquet de 5 a 7 cm per sobre de la ferida (mai sobre articulació)',
      'NO retirar la primera gasa i aplicar compressió arterial indirecta abans del torniquet; torniquet a 2 cm per sobre de la ferida',
      'NO retirar la primera gasa; torniquet de 5 a 7 cm per sobre de la ferida i afluixar-lo cada 15 minuts per evitar isquèmia'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu (V.3): MAI es retira la primera gasa amarada (destruiria el coàgul), l\'elevació i la compressió arterial indirecta ja no són prioritàries, i el torniquet es posa 5–7 cm per sobre de la ferida (mai sobre articulació) i NO s\'afluixa mai un cop posat.'
  },
  {
    topic: 28,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T28] En l\'Escala de Coma de Glasgow (GCS, de 3 a 15 punts), quina puntuació motora correspon a la «flexió anormal (decorticació)» i quina actuació està prohibida davant signes de fractura de base de crani (Battle, ulls d\'ós rentador, otorrea/rinorrea)?',
    options: [
      'Puntuació motora 3 (flexió anormal) i 2 (extensió anormal); prohibit taponar oïda o nas (només cobrir suaument amb gasa estèril)',
      'Puntuació motora 2 (flexió anormal) i 3 (extensió anormal); prohibit taponar oïda o nas (només cobrir suaument amb gasa estèril)',
      'Puntuació motora 3 (flexió anormal); cal taponar amb pressió l\'oïda o el nas per frenar la sortida de LCR i baixar la PIC',
      'Puntuació motora 4 (flexió anormal); prohibit taponar oïda o nas i cal col·locar la víctima en Trendelemburg'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és no invertir 3 i 2 al Glasgow motor (6 obeeix, 5 localitza, 4 retira, 3 flexió anormal/decorticació, 2 extensió anormal/descerebració, 1 cap) i recordar que en base de crani és prohibit taponar oïda/nas perquè augmenta la pressió intracranial (PIC).'
  },
  {
    topic: 28,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T28] Davant d\'una víctima intoxicada per fum d\'incendi (CO + HCN), per què falla el pulsioxímetre convencional i en quina posició lateral de seguretat (PLS) s\'ha de col·locar una embarassada de més de 20 setmanes?',
    options: [
      'El pulsioxímetre confon COHb amb O₂Hb i marca saturacions falsament altes (99–100%), cal pulsicooxímetre; PLS sobre el costat DRET',
      'El pulsioxímetre marca 0% per interferència tèrmica; PLS sobre el costat ESQUERRE per no comprimir la vena cava inferior',
      'El pulsioxímetre confon COHb amb O₂Hb i marca saturacions falsament altes (99–100%), cal pulsicooxímetre; PLS sobre el costat ESQUERRE per no comprimir la vena cava inferior',
      'El pulsioxímetre detecta el cianur però no el CO; PLS sobre el costat ESQUERRE per alliberar l\'artèria aorta'
    ],
    correctIndex: 2,
    explanation: 'El detall decisiu és doble: el pulsioxímetre convencional no distingeix carboxihemoglobina (COHb) d\'oxihemoglobina (O₂Hb) i enganya marcant 99–100% (cal CO-oxímetre / pulsicooxímetre), i l\'embarassada > 20 setmanes va sempre sobre el costat ESQUERRE per descomprimir la vena cava inferior.'
  },

  // =========================================================================
  // TEMA 29 — Incidents de Múltiples Víctimes (IMV) i Triatge START (3 preguntes)
  // =========================================================================
  {
    topic: 29,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T29] A Catalunya, quins són els llindars numèrics oficials del protocol APCAT per activar la resposta d\'Incident de Múltiples Víctimes (IMV)?',
    options: [
      '≥ 6 víctimes greus o mortals O ≥ 10 víctimes que requereixen trasllat hospitalari (n\'hi ha prou amb complir un dels dos criteris)',
      '≥ 10 víctimes greus o mortals O ≥ 6 víctimes que requereixen trasllat hospitalari',
      '≥ 6 víctimes greus o mortals I simultàniament ≥ 10 víctimes que requereixen trasllat hospitalari',
      '≥ 5 víctimes greus o mortals O ≥ 15 víctimes totals ateses in situ'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu són les dues xifres exactes i la disjunció «O»: a l\'APCAT n\'hi ha prou que hi hagi ≥ 6 víctimes greus/mortals O ≥ 10 víctimes que necessitin trasllat hospitalari (no cal que es compleixin tots dos alhora).'
  },
  {
    topic: 29,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T29] En els passos 3 i 4 de l\'algorisme START (Bombers), què comproven preferentment els bombers per valorar la perfusió i quin color correspon a una víctima que no camina, té FR de 24 rpm, té pols radial i obeeix ordres simples?',
    options: [
      'Prioritzen el reompliment capil·lar (< 2 s) sobre el pols radial; la víctima descrita és VERMELL (Prioritat 1)',
      'Prioritzen el pols radial sobre el reompliment capil·lar; la víctima descrita és GROC (Prioritat 2)',
      'Prioritzen el pols radial sobre el reompliment capil·lar; la víctima descrita és VERD (Prioritat 3)',
      'Prioritzen el pols carotidi sobre el pols radial; la víctima descrita és GROC (Prioritat 2)'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és doble: en l\'entorn de rescat, Bombers prioritzen el POLS RADIAL (PAS ≥ 80–90 mmHg) sobre el reompliment capil·lar; i una víctima no deambulant amb FR ≤ 30 rpm (24), amb pols radial i que obeeix ordres simples és GROC (Prioritat 2). Si no obeís ordres seria VERMELL.'
  },
  {
    topic: 29,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T29] En un IMV a Catalunya, quina equivalència hi ha entre els Cercles de Seguretat de Mossos i les Zones de Bombers, i a qui correspon la filiació de les persones il·leses i de les víctimes mortals (negres)?',
    options: [
      '1r Cercle = Zona Calenta + Zona Tèbia; 2n Cercle = Zona Freda; la filiació d\'il·lesos i mortals correspon al Grup d\'Ordre (Mossos/Policia)',
      '1r Cercle = Zona Calenta; 2n Cercle = Zona Tèbia + Zona Freda; la filiació d\'il·lesos i mortals correspon al Grup Sanitari (SEM)',
      '1r Cercle = Zona Calenta + Zona Tèbia; 2n Cercle = Zona Freda; la filiació d\'il·lesos correspon a Bombers i la de mortals al SEM',
      '1r Cercle = Zona Freda; 2n Cercle = Zona Calenta + Zona Tèbia; la filiació d\'il·lesos i mortals correspon al Grup d\'Ordre (Mossos/Policia)'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és la correspondència exacta: el 1r Cercle de Mossos engloba la Zona Calenta i la Zona Tèbia de Bombers, i el 2n Cercle equival a la Zona Freda (CMA/CCA). Pel que fa a la filiació, el SEM registra ferits (verds/grocs/vermells), però il·lesos i mortals (negres) corresponen al Grup d\'Ordre.'
  },

  // =========================================================================
  // TEMA 30 — Estructures col·lapsades, apuntalaments i INSARAG (3 preguntes)
  // =========================================================================
  {
    topic: 30,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T30] En un apuntalament inclinat (tornapuntes) per estabilitzar una façana amb risc de bolcada i en un apuntalament vertical, quin és l\'angle òptim de les tornapuntes respecte del terra i quina funció té el jaç de taulons (solera)?',
    options: [
      'Angle òptim de 30° a 45°; el jaç de taulons recull la càrrega contra el sostre',
      'Angle òptim de 45° a 60°; el jaç de taulons reparteix la càrrega a la base per no punxar el forjat inferior',
      'Angle òptim de 60° a 75°; el jaç de taulons reparteix la càrrega a la base per no punxar el forjat inferior',
      'Angle òptim de 45° a 60°; el jaç de taulons trasllada la càrrega verticalment sense vinclament'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és la geometria i la funció de cada peça: les tornapuntes treballen en l\'angle òptim de 45° a 60°, i el jaç de taulons/solera (a baix) reparteix la càrrega (el sotapont la recull a dalt i els puntals la traslladen al mig).'
  },
  {
    topic: 30,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T30] En l\'emplaçament de vehicles davant d\'una estructura amb risc de col·lapse i en les tres fases de recerca sota runa (MAN.SVES.000), quina distància mínima s\'ha de respectar i quina condició exigeix la recerca canina per venteig?',
    options: [
      'Vehicles a ≥ 1,5 × h; la recerca canina per venteig exigeix aturar motors però permet personal de suport dins la zona calenta',
      'Vehicles a ≥ 2 × h (o ≥ 2 edificacions no afectades); la recerca canina per venteig exigeix zona calenta lliure de personal i fum',
      'Vehicles a ≥ 2 × h; la recerca canina per venteig es fa sempre abans que la recerca física de crida i escolta',
      'Vehicles a ≥ 15 m fixes; la recerca canina per venteig exigeix zona calenta lliure de personal i fum'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és la regla de seguretat 2 × h (dues vegades l\'alçada de l\'edifici) i l\'exigència del GRCR en venteig (3a fase): la zona calenta ha d\'estar LLIURE de personal i fum per no saturar l\'olfacte del gos (a diferència dels ≥ 15 m ordinaris en incendi de façana).'
  },
  {
    topic: 30,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T30] Segons el marcatge INSARAG de víctimes i el codi universal de senyals acústics d\'emergència (MAN.SVES.000 Cap. 5 i Taula 6.5), què indica un rombe «C» i quin senyal acústic ordena «ATURAR OPERACIONS / SILENCI»?',
    options: [
      'Rombe «C» (Clear): totes les víctimes vives i mortes han estat extretes; «Aturar operacions / Silenci»: 1 toc llarg de 3 segons',
      'Rombe «C» (Clear): només s\'han extret les víctimes vives; «Aturar operacions / Silenci»: 3 tocs curts d\'1 segon',
      'Rombe «C» (Clear): totes les víctimes vives i mortes han estat extretes; «Aturar operacions / Silenci»: 1 toc llarg (3 s) + 1 toc curt (1 s)',
      'Rombe «C» (Confirmed): s\'ha confirmat una víctima viva (L-n); «Aturar operacions / Silenci»: 1 toc llarg de 3 segons'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és doble: el rombe «C» (Clear) només es dibuixa quan s\'han extret TOTES les víctimes (vives i mortes), i el senyal d\'«Aturar operacions / Silenci» és 1 toc llarg de 3 s (3 tocs curts d\'1 s = Evacuar; 1 llarg + 1 curt = Continuar).'
  },

  // =========================================================================
  // TEMA 31 — Salvaments i recerques en medi natural terrestre (3 preguntes)
  // =========================================================================
  {
    topic: 31,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T31] Quines són les 4 seus fixes del GRAE de Muntanya i les 2 seus fixes del GRCR (Grup Caní de Recerca) a Catalunya?',
    options: [
      'GRAE Muntanya: Cerdanyola, Olot, La Seu d\'Urgell i Valls; GRCR: Lleida i Vic',
      'GRAE Muntanya: Cerdanyola, Olot, Tremp i Valls; GRCR: Lleida i Girona',
      'GRAE Muntanya: Cerdanyola, Vic, La Seu d\'Urgell i Reus; GRCR: Lleida i Cerdanyola',
      'GRAE Muntanya: Cerdanyola, Olot, La Seu d\'Urgell i Lleida; GRCR: Valls i Vic'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és la llista exacta de seus: GRAE Muntanya = Cerdanyola, Olot, La Seu d\'Urgell i Valls ("C-O-S-V"), i GRCR = Lleida i Vic (sense confondre Lleida o Vic amb seus GRAE).'
  },
  {
    topic: 31,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T31] En les metodologies humanes de recerca en medi natural (MAN.SVMN.000 Cap. 5), quina hipòtesi de víctima i quina utilitat operativa distingeix la «Recerca Intensiva per Línies Naturals» de la «Recerca Extensiva»?',
    options: [
      'Extensiva: víctima estàtica prop de vorals (alta efectivitat nocturna); Intensiva per Línies Naturals: víctima en moviment amb poc personal i alta velocitat',
      'Extensiva: víctima en moviment (poc personal, alta velocitat per pistes/carenes); Intensiva per Línies Naturals: víctima estàtica prop de vorals/barrancs (10–20 m), amb alta efectivitat nocturna',
      'Extensiva: víctima en moviment; Intensiva per Línies Naturals: tancar el perímetre exterior de carreteres cap al centre (ideal en nens)',
      'Extensiva: víctima estàtica al bosc (molt personal en filera paral·lela); Intensiva per Línies Naturals: víctima estàtica prop de vorals/barrancs (10–20 m)'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és la hipòtesi de partida: Extensiva (1a fase) = víctima EN MOVIMENT per camins/pistes; Intensiva per Línies Naturals = víctima ESTÀTICA a 10–20 m de vorals/marges/barrancs (molt efectiva de nit); Intensiva per Sectors = estàtica dins el bosc; Contenció = tancar perímetre (ideal nens).'
  },
  {
    topic: 31,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T31] Quina diferència operativa hi ha entre els gossos de «rastreig» i els de «venteig» del GRCR, i on s\'ha d\'ubicar el Centre de Comandament respecte de l\'UPA (Últim Punt d\'Albirament)?',
    options: [
      'Rastreig: treballen solts olorant el con d\'aire; Venteig: amb arnès i corretja llarga seguint el rastre a terra des de l\'UPA; CCA damunt l\'UPA',
      'Rastreig: amb arnès i corretja llarga seguint l\'olor específica al terra des d\'una mostra de l\'UPA; Venteig: solts olorant l\'aire en sector lliure de cercadors; CCA a prop però allunyat de l\'UPA',
      'Rastreig: amb arnès i corretja llarga seguint l\'olor a terra; Venteig: solts olorant l\'aire; CCA ubicat directament sobre l\'UPA per centralitzar l\'accés',
      'Tant rastreig com venteig treballen sempre solts i exigeixen mostra d\'olor prèvia recollida a l\'UPA'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és no invertir rastreig (corretja + mostra d\'olor + terra des de l\'UPA) amb venteig (solts + con d\'olor a l\'aire + sector lliure de personal), i recordar que l\'UPA s\'ha d\'abalisar i protegir immediatament situant el CCA a prop però ALLUNYAT per no contaminar l\'olor.'
  },

  // =========================================================================
  // TEMA 32 — Accidents de mobilitat viària (3 preguntes)
  // =========================================================================
  {
    topic: 32,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T32] Segons la regla «30-60-90» de seguretat davant d\'airbags no activats en un accident de trànsit i el protocol elèctric previ, quines distàncies i temps d\'espera s\'han de respectar?',
    options: [
      '30 cm del volant, 60 cm del tablier, 90 cm (o 25–30 cm) dels laterals/cortina, i esperar 1–2 min després de desconnectar la bateria',
      '30 cm del tablier, 60 cm del volant, 90 cm dels laterals/cortina, i esperar 1–2 min després de desconnectar la bateria',
      '30 cm del volant, 60 cm del tablier, 90 cm dels laterals/cortina, però un cop desconnectada la bateria els airbags queden neutralitzats a l\'instant (0 s)',
      '30 cm del volant, 60 cm del tablier, 90 cm dels laterals/cortina, i esperar obligatòriament 15 minuts després de desconnectar la bateria'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu és la correspondència exacta 30 cm volant / 60 cm tablier / 90 cm (o 25–30 cm) laterals-cortina, i esperar 1–2 minuts després de desconnectar la bateria perquè es descarreguin els condensadors de reserva.'
  },
  {
    topic: 32,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T32] En l\'estabilització primària d\'un turisme sobre les quatre rodes i en les maniobres de bolcada, quina funció compleix la «cinquena falca» (5 punts) i en què consisteix la maniobra «La Catalana»?',
    options: [
      'La cinquena falca sota la part posterior/Muntant C evita l\'enfonsament en tallar el sostre; «La Catalana» eleva la part posterior d\'un vehicle bolcat totalment sobre el sostre',
      'La cinquena falca sota la part posterior/Muntant C evita l\'enfonsament en tallar el sostre; «La Catalana» talla els muntants A, B i C i abat el sostre en un vehicle en bolcada lateral',
      'La cinquena falca sota el motor evita el capcineig; «La Catalana» talla els muntants A, B i C en bolcada lateral',
      'La cinquena falca sota el Muntant C evita l\'enfonsament en tallar el sostre; «La Catalana» obre en solapa el sostre d\'un autobús bolcat lateralment'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és distingir les tres maniobres especials: «La Catalana» s\'aplica en bolcada LATERAL (tall muntants A, B, C i abatiment del sostre), «La Tenda» en bolcada TOTAL sobre el sostre, i «Llauna de sardines» en autobusos; i la cinquena falca evita que el xassís cedeixi en tallar el sostre.'
  },
  {
    topic: 32,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T32] En un vehicle elèctric (400–800 V CC) i en un accident ferroviari amb catenària (1.500–25.000 V), què és el bucle HVIL i quina condició permet entrar a les vies?',
    options: [
      'L\'HVIL és el cablejat taronja d\'alta tensió; a les vies es pot entrar un cop aturat el tren i comprovat visualment que el pantògraf està abaixat',
      'L\'HVIL és un llaç de baixa tensió que recorre connectors/tapes i obre els contactors principals en tallar-se; a les vies és prohibit entrar sense confirmació oficial del Centre de Control Ferroviari de tall i posada a terra',
      'L\'HVIL és el llaç de baixa tensió que obre els contactors principals; a les vies n\'hi ha prou amb desconnectar el Service Plug de la locomotora',
      'L\'HVIL és un fusible tèrmic a 110 °C; a les vies és prohibit entrar sense confirmació oficial de tall de circulació i posada a terra'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és doble: el bucle HVIL (High Voltage Interlock Loop) és un circuit de BAIXA tensió que, si s\'obre o talla, desconnecta els contactors principals d\'alta tensió; i en ferrocarril/TAV no basta veure el tren aturat: cal confirmació OFICIAL del Centre de Control Ferroviari de tall i posada a terra.'
  },

  // =========================================================================
  // TEMA 33 — Rescat urbà (3 preguntes)
  // =========================================================================
  {
    topic: 33,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T33] Les cordes utilitzades pels bombers tenen doble homologació. Quines dues normes compleixen, quin percentatge de resistència aporta l\'ànima i quin angle màxim recomanat té un triangle de forces (SAS)?',
    options: [
      'Semiestàtica Tipus A (EN 1891) + Dinàmica en simple (EN 892); ànima = 80%; angle SAS òptim ≤ 60° (a 120° cada punt suporta el 100%)',
      'Semiestàtica Tipus B (EN 1891) + Dinàmica en doble (EN 892); ànima = 50%; angle SAS òptim ≤ 60° (a 120° cada punt suporta el 50%)',
      'Semiestàtica Tipus A (EN 1891) + Dinàmica en simple (EN 892); ànima = 20% i camisa = 80%; angle SAS òptim ≤ 90°',
      'Semiestàtica Tipus A (EN 361) + Dinàmica en simple (EN 892); ànima = 80%; angle SAS òptim ≤ 60° (a 120° cada punt suporta el 100%)'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu són les xifres i normes exactes: EN 1891 Tipus A (< 5% allargament) + EN 892 en simple; l\'ànima suporta el 80% de la resistència (camisa 20%); i al SAS l\'angle òptim és ≤ 60°, ja que a 120° cada ancoratge suporta el 100% de la càrrega.'
  },
  {
    topic: 33,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T33] Dins dels 3 sistemes de protecció contra caigudes en alçada (> 2 m segons RD 2177/2004), quin és l\'únic sistema que es connecta a l\'anella «A» de l\'arnès (EN 361) i quina força de xoc màxima transmet?',
    options: [
      'El sistema de posicionament/suspensió, amb força de xoc màxima de 6 kN',
      'El sistema anticaigudes, amb força de xoc màxima inferior a 6 kN (Factor de caiguda màxim 2)',
      'El sistema de retenció, amb força de xoc màxima inferior a 6 kN (Factor de caiguda 0)',
      'El sistema anticaigudes, amb força de xoc màxima de 12 kN (Factor de caiguda màxim 2)'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és que només el sistema ANTICAIGUDES es connecta a l\'anella «A» de l\'arnès EN 361 i limita la força de xoc a < 6 kN (amb factor de caiguda h/L màxim 2; la retenció impedeix arribar a la vora amb FC = 0).'
  },
  {
    topic: 33,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T33] En un rescat d\'ascensor (MAN.SVXX.000 Cap. 3), què passa si obrim manualment el fre d\'un ascensor electromecànic amb poca càrrega dins la cabina, i què fa la vàlvula vermella d\'emergència en un ascensor hidràulic?',
    options: [
      'En l\'electromecànic la cabina baixa sempre per gravetat; en l\'hidràulic la vàlvula vermella permet pujar i baixar la cabina',
      'En l\'electromecànic la cabina PUJA sola (pel contrapès = cabina buida + 50% càrrega màx); en l\'hidràulic la vàlvula vermella NOMÉS permet BAIXAR per gravetat',
      'En l\'electromecànic la cabina PUJA sola; en l\'hidràulic la vàlvula vermella permet pujar la cabina bombant oli manualment',
      'En l\'electromecànic el contrapès equival al 100% de la càrrega màxima; en l\'hidràulic la vàlvula vermella només permet baixar'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és la física de cada ascensor: en l\'electromecànic el contrapès equival a cabina buida + 50% de la càrrega màxima (si hi ha poca càrrega, pesa més el contrapès i la cabina PUJA sola); en l\'hidràulic (sense contrapès), la vàlvula vermella obre el retorn d\'oli i la cabina NOMÉS pot BAIXAR.'
  },

  // =========================================================================
  // TEMA 34 — Inundacions, hidrologia i rescat aquàtic (3 preguntes)
  // =========================================================================
  {
    topic: 34,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T34] Segons els llindars d\'avís per Situació Meteorològica de Perill (SMP) del Servei Meteorològic de Catalunya, quins valors defineixen el «Llindar Alt» d\'intensitat en 30 minuts i d\'acumulació en 24 hores?',
    options: [
      'Intensitat > 20 mm en 30 min i acumulació > 100 mm en 24 h',
      'Intensitat > 40 mm en 30 min i acumulació > 200 mm en 24 h',
      'Intensitat > 40 mm en 30 min i acumulació > 100 mm en 24 h',
      'Intensitat > 60 mm en 30 min i acumulació > 200 mm en 24 h'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és no confondre el Llindar Baix (> 20 mm/30 min i > 100 mm/24 h) amb el Llindar Alt (> 40 mm/30 min i > 200 mm/24 h, corresponents als nivells 4, 5 i 6 de la matriu SMC).'
  },
  {
    topic: 34,
    difficulty: 'Difícil',
    question: '[PUNYETERA II · T34] Quins són els límits màxims d\'actuació en rescat aquàtic per a bombers NO especialistes al mar (Escala Douglas) i en rius d\'aigües braves, i on és màxima l\'erosió d\'un meandre?',
    options: [
      'Mar: evitar entrar amb onatge > 2,5 m (Grau 5 Maregassa; topall Grau 4); Rius: evitar Grau > 3; meandre: màxima erosió a la part EXTERIOR de la corba',
      'Mar: evitar entrar amb onatge > 1,25 m (Grau 4); Rius: evitar Grau > 3; meandre: màxima erosió a la part INTERIOR de la corba',
      'Mar: evitar entrar amb onatge > 2,5 m (Grau 5 Maregassa); Rius: evitar Grau > 4; meandre: màxima erosió a la part EXTERIOR de la corba',
      'Mar: evitar entrar amb onatge > 2,5 m (Grau 5 Maregassa); Rius: evitar Grau > 3, però sí que poden fer desembossament en reixes; meandre: part exterior'
    ],
    correctIndex: 0,
    explanation: 'El detall decisiu combina els tres llindars de seguretat (MAN.SVMN.001): al mar topall Grau 4 (1,25–2,5 m, evitar > 2,5 m = Grau 5), en rius evitar Grau > 3 (prohibit fer desembossament per efecte sifó), i en un meandre la velocitat i l\'erosió són màximes a la part EXTERIOR (risc d\'esfondrament del talús).'
  },
  {
    topic: 34,
    difficulty: 'Mitjà',
    question: '[PUNYETERA II · T34] En el zonatge d\'un escenari aquàtic i el dispositiu de seguretat en riu (MAN.SVMN.001 Cap. 5.4), quin EPI és obligatori a la «Zona Humida» i on s\'han de situar el guaita i l\'equip de seguretat amb bosses de llançament?',
    options: [
      'EPI estructural de foc a la Zona Humida; guaita aigües avall i equip de seguretat aigües amunt',
      'Armilla de flotació i casc a la Zona Humida (mai EPI estructural); guaita aigües amunt (avisa amb xiulet) i equip de seguretat aigües avall',
      'Armilla de flotació i casc a la Zona Humida; guaita aigües avall i equip de seguretat aigües amunt',
      'Només casc a la Zona Humida (l\'armilla només dins l\'aigua); guaita aigües amunt i equip de seguretat aigües avall'
    ],
    correctIndex: 1,
    explanation: 'El detall decisiu és que la Zona Humida (marges amb risc de caiguda) forma part de la Zona Calenta i exigeix armilla de flotació i casc (mai EPI de foc, que s\'amara i enfonsa); i al riu el guaita va AIGÜES AMUNT (per detectar troncs/crescudes) i l\'equip de rescat amb bosses va AIGÜES AVALL.'
  }
];
