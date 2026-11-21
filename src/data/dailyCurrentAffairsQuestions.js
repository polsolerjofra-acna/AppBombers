/**
 * Banc de preguntes d'actualitat, serveis i política pública vinculades al temari SGO 2026.
 * S'utilitza com a Pregunta del Dia a la pantalla d'inici i com a fallback si no hi ha pregunta
 * generada per Gemini a Firestore (`dailyQuestions/actualitat/questions/{YYYY-MM-DD}`).
 */
export const DAILY_CURRENT_AFFAIRS_QUESTIONS = [
  {
    id: 'act-01',
    tag: 'Actualitat · Organització DGPEIS 2026',
    topicId: 'tema-14',
    topicLabel: 'Tema 14 · DGPEIS i Bombers',
    context: 'El Decret 16/2026 de reestructuració de la DGPEIS ha creat una nova regió d\'emergències i una nova subdirecció general.',
    question: 'Quina nova Regió d\'Emergències i quina nova Subdirecció General incorpora l\'estructura de la DGPEIS segons el Decret 16/2026?',
    options: [
      'La Regió d\'Emergències del Pirineu (8a regió) i la Subdirecció General d\'Assumptes Jurídics.',
      'La Regió d\'Emergències de les Terres de l\'Ebre i la Subdirecció General de Protecció Civil.',
      'La Regió d\'Emergències de la Catalunya Central i la Subdirecció General de Prevenció Forestal.',
      'La Regió d\'Emergències de l\'Alt Empordà i la Subdirecció General de Logística.'
    ],
    correctIndex: 0,
    explanation: 'El Decret 16/2026 crea la 8a Regió d\'Emergències (Pirineu) —que conviu amb Girona, Centre, M. Nord, M. Sud, Tarragona, Lleida i Terres de l\'Ebre— i la Subdirecció General d\'Assumptes Jurídics.'
  },
  {
    id: 'act-02',
    tag: 'Actualitat · Normativa Europea i Agents Extintors',
    topicId: 'tema-26',
    topicLabel: 'Tema 26 · Agents extintors',
    context: 'La transició ecològica en els serveis d\'extinció obliga a substituir les escumes fluorades tradicionals (AFFF) per alternatives lliures de fluor.',
    question: 'Per quin motiu principal la normativa europea restringeix progressivament l\'ús d\'escumògens amb compostos perfluoroalquilats (PFAS) en els serveis de bombers?',
    options: [
      'Perquè són contaminants persistents i bioacumulatius amb impacte greu sobre les aigües subterrànies i la salut.',
      'Perquè tenen un punt de congelació massa alt i no es poden utilitzar a l\'hivern.',
      'Perquè augmenten la conductivitat elèctrica de l\'aigua en incendis de baixa tensió.',
      'Perquè no generen cap pel·lícula aquosa sobre hidrocarburs líquids.'
    ],
    correctIndex: 0,
    explanation: 'Els PFAS (presents a les AFFF tradicionals) són compostos altament persistents («químics eterns») i tòxics que contaminen aqüífers; per això la UE n\'impulsa la substitució per escumes F3 (lliures de fluor).'
  },
  {
    id: 'act-03',
    tag: 'Actualitat · Polítiques d\'Igualtat i Funció Pública',
    topicId: 'tema-15',
    topicLabel: 'Tema 15 · Drets, deures i igualtat',
    context: 'Les darreres convocatòries d\'accés a l\'escala bàsica del cos de Bombers de la Generalitat incorporen mesures d\'acció positiva per reduir la bretxa de gènere.',
    question: 'Quin percentatge mínim i màxim de places pot reservar la Generalitat per a dones en les convocatòries d\'accés a la categoria de bomber/a segons la Llei 5/1994 modificada?',
    options: [
      'Un mínim del 25% i fins a un màxim del 40% de les places convocades.',
      'Un mínim del 10% i un màxim del 20% de les places convocades.',
      'Exactament el 50% de les places en totes les escales.',
      'Un mínim del 15% sense límit màxim establert.'
    ],
    correctIndex: 0,
    explanation: 'La Llei 5/1994 (modificada per corregir la infrarepresentació femenina) estableix una reserva d\'entre el 25% i el 40% de les places per a dones que superin el procés selectiu.'
  },
  {
    id: 'act-04',
    tag: 'Actualitat · Protecció Civil i Alertes',
    topicId: 'tema-16',
    topicLabel: 'Tema 16 · Protecció Civil i 112',
    context: 'En episodis recents de pluges intenses (DANA) i emergències químiques a Catalunya, Protecció Civil ha activat avisos massius directes als telèfons mòbils.',
    question: 'Com s\'anomena el sistema d\'enviament massiu d\'alertes d\'emergència a telèfons mòbils mitjançant tecnologia Cell Broadcast que opera a Catalunya?',
    options: [
      'ES-Alert (integrat a la Xarxa d\'Alerta Nacional i activat des del CECAT).',
      'RESCAT-SMS (a través de la xarxa TETRA exclusiva dels cossos operatius).',
      'INFOCAT-Push (mitjançant l\'aplicació mòbil de Meteocat).',
      'PLASEQCAT-Radio (emissió per freqüència FM d\'emergència).'
    ],
    correctIndex: 0,
    explanation: 'ES-Alert utilitza tecnologia Cell Broadcast per enviar avisos geolocalitzats a tots els mòbils d\'una zona afectada sense necessitat d\'estar subscrit a cap app, sota direcció de Protecció Civil (CECAT).'
  },
  {
    id: 'act-05',
    tag: 'Actualitat · Mobilitat Elèctrica i Risc Tecnològic',
    topicId: 'tema-24',
    topicLabel: 'Tema 24 · Electricitat i risc elèctric',
    context: 'L\'augment del parc de vehicles elèctrics i sistemes d\'emmagatzematge amb bateries d\'ió-liti planteja nous reptes d\'intervenció per als bombers.',
    question: 'Quin fenomen crític es produeix quan una cel·la d\'una bateria d\'ió-liti s\'escalfa de manera incontrolada i genera oxigen i gasos inflamables en cadena?',
    options: [
      'Embalaments tèrmics (thermal runaway), amb risc de reignició hores o dies després.',
      'Arc elèctric invers per corrent altern trifàsic.',
      'Efecte Joule reversible per sobrecàrrega del diferencial.',
      'Sublimació catòdica sense alliberament de calor.'
    ],
    correctIndex: 0,
    explanation: 'L\'embalament tèrmic (thermal runaway) és una reacció exotèrmica en cadena que allibera gasos tòxics i inflamables (com HF o H2) i pot provocar reignicions tardanes si no es refreda massivament.'
  },
  {
    id: 'act-06',
    tag: 'Actualitat · Canvi Climàtic i Incendis Forestals',
    topicId: 'tema-31',
    topicLabel: 'Tema 31 · Incendis forestals',
    context: 'Els serveis d\'extinció del Mediterrani adapten les tàctiques davant incendis extrems fora de capacitat d\'extinció.',
    question: 'Quina característica defineix principalment els anomenats incendis forestals de 6a generació?',
    options: [
      'Modifiquen la dinàmica atmosfèrica local generant pirocúmuls i tempestes de foc amb comportament erràtic.',
      'Són incendis exclusivament de sòl (subsòl) que només cremen arrels sense flama visible.',
      'Es produeixen únicament en zones d\'alta muntanya per sobre dels 2.500 metres.',
      'Tenir una velocitat de propagació inferior als 50 metres per hora.'
    ],
    correctIndex: 0,
    explanation: 'Els incendis de 6a generació alliberen tanta energia que interactuen amb l\'atmosfera (pirocumulonimbus), generant vents propis i focus secundaris a gran distància fora de capacitat d\'extinció.'
  },
  {
    id: 'act-07',
    tag: 'Actualitat · Coordinació Operativa i Territori',
    topicId: 'tema-14',
    topicLabel: 'Tema 14 · DGPEIS i Bombers',
    context: 'Durant les campanyes forestals i emergències al medi natural, Bombers de la Generalitat coordina actuacions amb voluntariat local i altres cossos.',
    question: 'Quin paper tenen les Agrupacions de Defensa Forestal (ADF) en el marc de la prevenció i l\'extinció d\'incendis forestals a Catalunya?',
    options: [
      'Són associacions de propietaris forestals i voluntaris que donen suport en prevenció, vigilància i primera intervenció sota coordinació dels cossos operatius.',
      'Són unitats militars estatals desplegades permanentment als parcs de bombers voluntaris.',
      'Són organismes dependents exclusivament del Ministeri per a la Transició Ecològica sense vinculació municipal.',
      'Tenen competència exclusiva en la investigació judicial de les causes dels incendis.'
    ],
    correctIndex: 0,
    explanation: 'Les ADF agrupen municipis, propietaris forestals i voluntariat; actuen en prevenció, vigilància i suport a l\'extinció, integrades dins el dispositiu de coordinació d\'emergències (INFOCAT).'
  },
  {
    id: 'act-08',
    tag: 'Actualitat · Comunicacions d\'Emergència',
    topicId: 'tema-16',
    topicLabel: 'Tema 16 · Protecció Civil i 112',
    context: 'La Generalitat impulsa la modernització de les comunicacions crítiques dels cossos d\'emergència i seguretat a tot el territori.',
    question: 'Quina xarxa de radiocomunicacions utilitzen de forma compartida els Bombers de la Generalitat, Mossos d\'Esquadra, SEM i Agents Rurals a Catalunya?',
    options: [
      'La xarxa RESCAT (basada en tecnologia TETRA).',
      'La xarxa XALOC-5G (només d\'ús comercial).',
      'La xarxa SIRDEE exclusiva de cossos estatals.',
      'La xarxa DMR-Lliure sense xifratge.'
    ],
    correctIndex: 0,
    explanation: 'La xarxa RESCAT (Xarxa de Radiocomunicacions d\'Emergències i Seguretat de Catalunya) opera amb tecnologia TETRA i garanteix comunicacions segures i interoperables entre tots els cossos catalans.'
  },
  {
    id: 'act-09',
    tag: 'Actualitat · Estatut i Relació amb l\'Estat',
    topicId: 'tema-04',
    topicLabel: 'Tema 4 · Estatut d\'Autonomia',
    context: 'Els debats institucionals sobre competències de seguretat i protecció civil es regeixen pel marc estatutari vigent.',
    question: 'Segons l\'Estatut d\'Autonomia de Catalunya (2006), quin tipus de competència té la Generalitat en matèria de protecció civil i prevenció i extinció d\'incendis?',
    options: [
      'Competència exclusiva (en el marc de la seguretat pública i l\'organització dels serveis propis).',
      'Competència merament consultiva sense potestat reglamentària.',
      'Competència transferida temporalment per reial decret cada legislatura.',
      'Competència exclusiva de l\'Estat amb execució delegada només als ajuntaments.'
    ],
    correctIndex: 0,
    explanation: 'L\'article 132 de l\'EAC atribueix a la Generalitat la competència exclusiva en matèria de protecció civil, que inclou la regulació, planificació, coordinació i execució de mesures i serveis d\'extinció.'
  },
  {
    id: 'act-10',
    tag: 'Actualitat · Risc Químic i Indústria',
    topicId: 'tema-32',
    topicLabel: 'Tema 32 · Risc químic',
    context: 'Els polígons petroquímics de Tarragona i altres zones industrials estan subjectes a plans especials d\'emergència exterior.',
    question: 'Quin pla especial de Protecció Civil de Catalunya s\'activa davant accidents greus en establiments amb substàncies perilloses fora de la zona de Tarragona?',
    options: [
      'El PLASEQCAT (mentre que el PLASEQTA és específic per al sector químic de Tarragona).',
      'El PROCICAT (exclusiu per a risc químic industrial).',
      'El CAMCAT (exclusiu per a contaminació atmosfèrica urbana).',
      'El NEUCAT (per a vessaments de mercaderies perilloses al mar).'
    ],
    correctIndex: 0,
    explanation: 'El PLASEQCAT cobreix el risc químic a Catalunya excepte el territori cobert pel PLASEQTA (específic del complex petroquímic de Tarragona, recuperat per millorar la resposta de proximitat).'
  },
  {
    id: 'act-11',
    tag: 'Actualitat · Prevenció i Seguretat en Edificis',
    topicId: 'tema-30',
    topicLabel: 'Tema 30 · Incendis d\'interior i edificis',
    context: 'La instal·lació massiva de plaques fotovoltaiques en cobertes industrials i residencials exigeix mesures específiques per a la seguretat dels intervinents.',
    question: 'Quin risc elèctric específic presenten les instal·lacions fotovoltaiques durant un incendi en coberta tot i haver tallat el subministrament general de l\'edifici?',
    options: [
      'Els panells continuen generant corrent continu (DC) mentre reben llum solar o focus intensos fins a l\'inversor.',
      'Els panells acumulen corrent altern de 20 kV fins i tot a les fosques absolutes.',
      'No presenten cap risc si s\'ha desconnectat el magnetotèrmic del quadre general.',
      'Generen gas metà a l\'interior dels conductes d\'aire condicionat.'
    ],
    correctIndex: 0,
    explanation: 'Mentre hi hagi llum sobre els mòduls fotovoltaics, el tram en corrent continu fins a l\'inversor (o fins al tall de seguretat a coberta) roman sota tensió encara que s\'hagi tallat la xarxa AC.'
  },
  {
    id: 'act-12',
    tag: 'Actualitat · Funció Pública i Transparència',
    topicId: 'tema-10',
    topicLabel: 'Tema 10 · Transparència i bon govern',
    context: 'Les administracions catalanes apliquen la Llei 19/2014 de transparència per garantir el dret d\'accés de la ciutadania a la informació pública.',
    question: 'Quin és el termini general perquè l\'Administració resolgui una sol·licitud d\'accés a la informació pública segons la Llei 19/2014 de Catalunya?',
    options: [
      'Un mes (ampliable excepcionalment a un mes més per volum o complexitat).',
      'Deu dies hàbils improrrogables.',
      'Tres mesos amb silenci administratiu sempre desestimatori.',
      'Quaranta-vuit hores en tots els casos.'
    ],
    correctIndex: 0,
    explanation: 'La Llei 19/2014 estableix un termini general d\'1 mes per resoldre (prorrogable 1 mes més en casos complexos), i la manca de resposta té efecte estimatori com a regla general.'
  },
  {
    id: 'act-13',
    tag: 'Actualitat · Salut Laboral dels Bombers',
    topicId: 'tema-13',
    topicLabel: 'Tema 13 · Prevenció de riscos laborals',
    context: 'Els protocols de descontaminació en calent i en fred són prioritaris per reduir l\'exposició a agents cancerígens procedents del fum d\'incendi.',
    question: 'Quina mesura preventiva s\'aplica immediatament després d\'una intervenció en incendi estructural per reduir l\'absorció dèrmica i per inhalació d\'HAP (hidrocarburs aromàtics policíclics)?',
    options: [
      'Descontaminació inicial al lloc, retirada controlada de l\'EPI brut en bosses estances i higiene personal ràpida (dutxa dins la primera hora).',
      'Ventilar l\'EPI dins la cabina del camió durant el retorn al parc.',
      'Rentar l\'EPI només un cop a l\'any per no danyar la membrana impermeable.',
      'Retirar l\'ERA dins la zona calenta abans d\'iniciar la ventilació tàctica.'
    ],
    correctIndex: 0,
    explanation: 'Els protocols de descontaminació eviten la contaminació creuada a cabina i parc: neteja superficial, embolcall de l\'EPI contaminat fora de la cabina i dutxa al més aviat possible.'
  },
  {
    id: 'act-14',
    tag: 'Actualitat · Unió Europea i Mecanisme de Protecció Civil',
    topicId: 'tema-05',
    topicLabel: 'Tema 5 · Unió Europea',
    context: 'En grans catàstrofes i incendis forestals transfronterers, la UE mobilitza mitjans aeris i equips terrestres entre estats membres.',
    question: 'Com s\'anomena la reserva estratègica europea de mitjans d\'emergència (avions amfibis, hospitals de campanya, equips USAR) finançada per la Unió Europea?',
    options: [
      'rescEU (dins del Mecanisme de Protecció Civil de la Unió).',
      'Frontex-Fire (dependent de l\'Agència de Fronteres).',
      'EUROPOL-Rescue.',
      'Eurocorps Civil.'
    ],
    correctIndex: 0,
    explanation: 'rescEU reforça el Mecanisme de Protecció Civil de la UE amb una flota i reserva de recursos propis (com avions Canadair, helicòpters i equips mèdics) per assistir estats desbordats.'
  }
];

/**
 * Retorna la pregunta d'actualitat del dia de forma determinista a partir de la data ISO (YYYY-MM-DD).
 * @param {string} isoDate Data en format YYYY-MM-DD
 */
export function getTodayCurrentAffairsQuestion(isoDate) {
  const dateStr = isoDate || new Date().toISOString().slice(0, 10);
  // Suma simple de dígits/caràcters per repartir de forma estable dia a dia
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash * 31 + dateStr.charCodeAt(i)) >>> 0;
  }
  const idx = hash % DAILY_CURRENT_AFFAIRS_QUESTIONS.length;
  return {
    ...DAILY_CURRENT_AFFAIRS_QUESTIONS[idx],
    date: dateStr
  };
}
