/**
 * Banc de 50 preguntes "punyeteres" d'alt nivell (Temes 1 a 17).
 * Cada pregunta enfronta com a mínim dues opcions pràcticament idèntiques
 * diferenciades per un únic detall decisiu de precisió normativa o tècnica.
 */
export const QUESTIONS_PUNYETERES_3 = [
  // ==================== TEMA 1 (3 preguntes) ====================
  {
    topic: 1,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T1] Segons l\'article 116 de la Constitució Espanyola i la Llei Orgànica 4/1981, quin és el règim exacte de declaració i termini inicial de l\'estat d\'alarma i de l\'estat d\'excepció?',
    options: [
      'L\'estat d\'alarma el declara el Govern per decret en Consell de Ministres per un màxim de 15 dies (donant compte al Congrés), i l\'estat d\'excepció el declara el Govern prèvia autorització del Congrés per un màxim de 30 dies',
      'L\'estat d\'alarma el declara el Govern per decret en Consell de Ministres per un màxim de 30 dies (donant compte al Congrés), i l\'estat d\'excepció el declara el Govern prèvia autorització del Congrés per un màxim de 15 dies',
      'L\'estat d\'alarma el declara el Govern prèvia autorització del Congrés per un màxim de 15 dies, i l\'estat d\'excepció el declara el Congrés per majoria absoluta a proposta del Govern per un màxim de 30 dies',
      'Tant l\'estat d\'alarma com l\'estat d\'excepció permeten suspendre els drets de l\'art. 55.1 CE des del moment en què els declara el Govern'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (art. 116 CE): l\'estat d\'alarma el declara el Govern sense autorització prèvia (només en dóna compte al Congrés) per un màxim de 15 dies (l\'autorització del Congrés només cal per prorrogar-lo); l\'estat d\'excepció requereix autorització prèvia del Congrés i dura com a màxim 30 dies (prorrogables 30 més). La declaració per majoria absoluta del Congrés correspon a l\'estat de setge, i l\'estat d\'alarma NO permet suspendre drets de l\'art. 55.1.'
  },
  {
    topic: 1,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T1] D\'acord amb l\'article 64 de l\'Estatut d\'Autonomia de Catalunya (LO 6/2006), en quin termini ha de ser sotmès a debat i votació de totalitat al Parlament un decret llei dictat pel Govern?',
    options: [
      'En el termini improrrogable de 15 dies hàbils des de la seva promulgació',
      'En el termini improrrogable de 30 dies des de la seva promulgació',
      'En el termini prorrogable de 30 dies des de la seva publicació al DOGC',
      'En el termini improrrogable de 20 dies des de la seva convalidació pel Consell de Garanties Estatutàries'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (art. 64.2 EAC): els decrets llei resten derogats si en el termini IMPRORROGABLE de 30 dies (no 15 dies hàbils ni prorrogable) subsegüents a la promulgació no són validats expressament pel Parlament després d\'un debat i d\'una votació de totalitat.'
  },
  {
    topic: 1,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T1] Segons la Llei 13/1989, d\'organització, procediment i règim jurídic de l\'Administració de la Generalitat de Catalunya, quines resolucions posen fi a la via administrativa amb caràcter general?',
    options: [
      'Les del President, del Govern, dels Consellers i dels Directors Generals en l\'exercici de les seves competències pròpies, mentre que únicament les dels caps de servei admeten recurs d\'alçada davant el Conseller',
      'Únicament les del President i del Govern (així com les dictades per delegació seva), mentre que les resolucions dels Consellers i Directors Generals admeten sempre recurs d\'alçada davant l\'òrgan superior',
      'Les del President, del Govern i dels Consellers (així com les dictades per delegació d\'aquests), mentre que les dels Directors Generals admeten recurs d\'alçada davant el Conseller llevat d\'excepció legal',
      'Les dels Secretaris Generals i Directors Generals sempre posen fi a la via administrativa amb caràcter general, però les dictades per delegació dels Consellers admeten recurs d\'alçada davant del Govern'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu (Llei 13/1989): posen fi a la via administrativa les resolucions del President, el Govern i els Consellers (i les dictades per delegació seva, que s\'imputen a l\'òrgan delegant). En canvi, els Directors Generals i Secretaris Generals NO esgoten la via administrativa amb caràcter general (llevat de disposició legal expressa).'
  },

  // ==================== TEMA 2 (3 preguntes) ====================
  {
    topic: 2,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T2] Segons l\'article 98.3 del TREBEP (RDL 5/2015), quina durada màxima pot tenir la suspensió provisional de funcions durant la tramitació d\'un expedient disciplinari (tret de paralització imputable a l\'interessat) i quines retribucions es perceben?',
    options: [
      'No pot excedir de 6 mesos (tret de procés penal), i el funcionari percep únicament les retribucions bàsiques i, si escau, les prestacions familiars per fill a càrrec',
      'No pot excedir de 6 mesos, i el funcionari percep les retribucions íntegres (bàsiques i complementàries) fins que hi hagi resolució ferma',
      'No pot excedir de 3 mesos, i el funcionari percep únicament les retribucions bàsiques i, si escau, les prestacions familiars per fill a càrrec',
      'No pot excedir de 12 mesos, i el funcionari deixa de percebre qualsevol tipus de retribució des del primer dia'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (art. 98.3 TREBEP): la suspensió provisional no pot excedir de 6 mesos (no 3 ni 12 mesos), llevat de paralització imputable a l\'interessat (o causa penal), i dona dret a percebre només les retribucions bàsiques (no les complementàries) i les prestacions familiars per fill a càrrec.'
  },
  {
    topic: 2,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T2] D\'acord amb l\'article 48.a del TREBEP (modificat pel RDL 5/2023), quin permís correspon per accident o malaltia greus, hospitalització o intervenció quirúrgica sense hospitalització que precisi repòs domiciliari d\'un familiar de PRIMER grau de consanguinitat o afinitat?',
    options: [
      '3 dies hàbils si el succés es produeix en la mateixa localitat, i 5 dies hàbils si és en una localitat diferent',
      '5 dies naturals en tot cas, amb independència de la localitat on es produeixi el succés',
      '4 dies hàbils en tot cas, amb independència de la localitat on es produeixi el succés',
      '5 dies hàbils en tot cas, amb independència de si es produeix en la mateixa localitat o en una altra de diferent'
    ],
    correctIndex: 3,
    explanation: 'Detall decisiu (art. 48.a TREBEP vigent des del RDL 5/2023): per cònjuge, parella de fet o familiars de 1r grau són 5 dies HÀBILS en tot cas (es va suprimir la distinció de 3/5 dies segons localitat!). Per a familiars de 2n grau són 4 dies hàbils.'
  },
  {
    topic: 2,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T2] Segons el DL 1/1997 (Text Únic de la Funció Pública de Catalunya), quins requisits temporals s\'exigeixen per passar a la situació d\'excedència voluntària per interès particular?',
    options: [
      'Haver prestat serveis efectius durant els 3 anys immediatament anteriors i romandre-hi un mínim de 2 anys continuats',
      'Haver prestat serveis efectius durant els 5 anys immediatament anteriors i romandre-hi un mínim de 2 anys continuats',
      'Haver prestat serveis efectius durant els 5 anys immediatament anteriors i romandre-hi un mínim d\'1 any continuat',
      'Haver prestat serveis efectius durant els 5 anys immediatament anteriors, amb reserva de lloc de treball durant els primers 2 anys'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (art. 86.2.a DL 1/1997): per a l\'excedència voluntària per interès particular calen 5 anys de serveis efectius immediatament anteriors (no 3) i una permanència mínima de 2 anys continuats (no 1 any), i NO comporta reserva de lloc de treball.'
  },

  // ==================== TEMA 3 (3 preguntes) ====================
  {
    topic: 3,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T3] Segons l\'article 38 de la Llei 31/1995 (LPRL), en quines empreses o centres de treball és obligatori constituir un Comitè de Seguretat i Salut i quina composició té?',
    options: [
      'En empreses o centres amb més de 50 treballadors, format únicament pels Delegats de Prevenció',
      'En empreses o centres amb 50 o més treballadors, format pels Delegats de Prevenció i pels representants de l\'empresa en proporció de 2 a 1 a favor dels treballadors',
      'En empreses o centres amb 50 o més treballadors, com a òrgan paritari format pels Delegats de Prevenció i per l\'empresari i/o els seus representants en nombre igual',
      'En empreses o centres amb 30 o més treballadors, com a òrgan paritari format pels Delegats de Prevenció i per l\'empresari i/o els seus representants en nombre igual'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu (art. 38.2 LPRL): el llindar és «50 o més treballadors» (no «més de 50» ni «30 o més», de manera que amb exactament 50 treballadors ja és obligatori), i és un òrgan PARITARI (mateix nombre de Delegats de Prevenció que de representants de l\'empresari).'
  },
  {
    topic: 3,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T3] D\'acord amb l\'escala de l\'article 35.2 de la Llei 31/1995 (LPRL), quants Delegats de Prevenció corresponen a un centre de treball que té exactament 100 treballadors?',
    options: [
      '2 Delegats de Prevenció (tram de 50 a 100 treballadors)',
      '3 Delegats de Prevenció (tram de 100 a 500 treballadors)',
      '1 Delegat de Prevenció (tram de 31 a 100 treballadors)',
      '4 Delegats de Prevenció (tram de 50 a 100 treballadors)'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (art. 35.2 LPRL): el tram de 2 Delegats de Prevenció va de 50 a 100 treballadors inclosos; el tram de 3 Delegats comença a partir de 101 treballadors (de 101 a 500).'
  },
  {
    topic: 3,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T3] Segons el Reglament (UE) 2016/425, què indica el marcatge CE seguit d\'un número d\'identificació de quatre dígits en un EPI i a quina categoria correspon?',
    options: [
      'Correspon a EPI de Categoria II i III (riscos mitjans o greus), i les quatre xifres indiquen l\'any i el mes de caducitat màxima establerts pel fabricant abans de la revisió periòdica',
      'Correspon exclusivament a EPI de Categoria III (riscos molt greus o mortals), i les quatre xifres identifiquen l\'organisme notificat que participa en el control de la producció',
      'Correspon exclusivament a EPI de Categoria I (riscos mínims), i les quatre xifres identifiquen el codi de registre del fabricant autoritzat dins el mercat de la Unió Europea',
      'Correspon a EPI de Categoria II (riscos intermedis), i les quatre xifres identifiquen el laboratori acreditat que ha emès el certificat d\'examen UE de tipus (Mòdul B)'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (Reglament UE 2016/425): només els EPI de Categoria III porten el marcatge CE seguit de les 4 xifres de l\'organisme notificat encarregat del procediment d\'avaluació de la conformitat de la producció (Mòdul C2 o D). Els EPI de Categoria I i II porten només les lletres CE sense xifres.'
  },

  // ==================== TEMA 4 (3 preguntes) ====================
  {
    topic: 4,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T4] Segons la Llei 19/2020, d\'igualtat de tracte i no-discriminació, quina diferència exacta hi ha entre la discriminació per associació i la discriminació per error?',
    options: [
      'La discriminació per associació es produeix per una apreciació errònia sobre les característiques de la persona, mentre que la discriminació per error es produeix per la seva relació amb una altra persona',
      'Totes dues exigeixen que la víctima posseeixi realment la característica protegida objecte de discriminació',
      'La discriminació per associació es produeix per la relació amb una persona o grup que té un tret protegit, mentre que la discriminació per error es produeix per una apreciació errònia que atribueix un tret protegit a qui no el té',
      'La Llei 19/2020 només reconeix la discriminació per associació i exclou expressament la discriminació per error'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu (art. 4 Llei 19/2020): en la discriminació per ASSOCIACIÓ, el motiu és el vincle o relació amb una altra persona/grup; en la discriminació per ERROR, és una percepció equivocada sobre les característiques de la pròpia persona.'
  },
  {
    topic: 4,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T4] D\'acord amb la Llei 17/2015, d\'igualtat efectiva de dones i homes, què s\'entén específicament per «presència equilibrada» (o composició equilibrada) respecte a la «representació paritària»?',
    options: [
      'La presència equilibrada exigeix exactament un 50 % de cada sexe (o la proporció més propera en nombre senar), mentre que la representació paritària admet que cada sexe es mantingui dins la franja del 40 % al 60 % (criteri 40/60)',
      'La presència equilibrada suposa que les persones de cada sexe no superin el 70 % ni siguin inferiors al 30 % (franja 30/70), mentre que la representació paritària exigeix exactament un 50 % sense excepció en els òrgans senars',
      'La presència equilibrada suposa que les persones de cada sexe no superin el 60 % ni siguin inferiors al 40 % (franja 40/60), mentre que la representació paritària implica una proporció del 50 % (o la més propera en nombre senar)',
      'Tots dos termes són sinònims estrictes a la Llei 17/2015 i signifiquen exclusivament una proporció del 50 % – 50 % de dones i homes en tots els òrgans col·legiats, tribunals de selecció i consells d\'administració'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu (art. 2 Llei 17/2015): la «presència equilibrada» (o composició equilibrada) es compleix dins la franja 40 %–60 %, mentre que la «representació paritària» apunta a la proporció del 50 % de dones i homes.'
  },
  {
    topic: 4,
    difficulty: 'Mitjà',
    question: '[PUNYETERA III · T4] Segons el Protocol per a la prevenció, detecció, actuació i resolució de situacions d\'assetjament sexual i per raó de sexe (2023), quina naturalesa tenen les mesures cautelars adoptades durant la tramitació d\'un expedient?',
    options: [
      'Es poden adoptar només un cop finalitzada la fase d\'investigació i tenen caràcter de sanció disciplinària lleu',
      'Es poden adoptar en qualsevol moment del procediment per protegir la víctima i garantir la investigació, i NO constitueixen cap sanció disciplinària',
      'Només les pot acordar l\'autoritat judicial penal i suspenen automàticament el sou de la persona investigada',
      'Requereixen el consentiment exprés i per escrit de la persona presumptament assetjadora per poder aplicar-se'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (Protocol 2023): les mesures cautelars (com el canvi de lloc o d\'horari per evitar la coincidència) es poden adoptar en QUALSEVOL moment del procediment de manera preventiva i NO tenen naturalesa sancionadora.'
  },

  // ==================== TEMA 5 (2 preguntes) ====================
  {
    topic: 5,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T5] Segons l\'article 14 de la Llei 1/1998, de política lingüística, en quina llengua s\'han de redactar els documents públics atorgats a Catalunya quan NO hi ha acord entre els atorgants i quan NO hi ha tria expressa de llengua?',
    options: [
      'Si no hi ha acord entre les parts s\'han de redactar en català, i si no hi ha tria expressa s\'han de redactar en totes dues llengües oficials',
      'Si no hi ha acord entre les parts s\'han de redactar en totes dues llengües oficials, i si no hi ha tria expressa s\'han de redactar en català',
      'Tant si falta acord com si falta tria expressa, el fedatari públic els ha de redactar sempre en català i protocol·litzar-ne la traducció al castellà',
      'Si no hi ha acord s\'han de redactar en castellà, i si no hi ha tria expressa s\'han de redactar en totes dues llengües oficials'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (art. 14.1 i 14.2 Llei 1/1998): quan no hi ha ACORD entre els atorgants → en totes dues llengües oficials; quan no hi ha TRIA expressa → en català. A més, el fedatari tradueix sota la seva responsabilitat SENSE necessitat de protocol·litzar la traducció.'
  },
  {
    topic: 5,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T5] D\'acord amb l\'article 15 de la Llei 1/1998, de política lingüística, quin règim lingüístic s\'aplica als documents privats en general i als xecs, pagarés i talons oferts per les entitats financeres?',
    options: [
      'Els documents privats només són vàlids si es redacten en català o castellà, i els xecs i pagarés s\'han de redactar obligatòriament en versió bilingüe',
      'Els documents privats són vàlids en qualsevol idioma en què es redactin, però els xecs, pagarés, talons i altres documents oferts per entitats financeres han d\'ésser redactats, almenys, en català',
      'Els documents privats són vàlids en qualsevol idioma, i els xecs i pagarés es redacten en castellà llevat que el client demani el català per escrit',
      'Tant els documents privats com els xecs i pagarés s\'han de redactar almenys en català per tenir validesa jurídica a Catalunya'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (art. 15.1 i 15.3 Llei 1/1998): els documents privats són vàlids en la llengua en què estiguin redactats (qualsevol idioma), mentre que els xecs, pagarés, talons i documents oferts per entitats financeres als clients han d\'estar redactats, almenys, en català.'
  },

  // ==================== TEMA 6 (3 preguntes) ====================
  {
    topic: 6,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T6] Segons la Llei 5/1994 (amb les modificacions del DL 14/2025), quins col·lectius tenen la consideració legal d\'agent de l\'autoritat?',
    options: [
      'Els membres del Cos de Bombers de la Generalitat, els dels serveis de bombers locals, els bombers voluntaris i els bombers d\'empresa en acte de servei',
      'Els membres del Cos de Bombers de la Generalitat i els dels serveis de bombers locals en acte de servei (i fora de servei en urgència acreditada), però NO els bombers voluntaris ni els bombers d\'empresa',
      'Únicament els membres del Cos de Bombers de la Generalitat en acte de servei, excloent els bombers locals, voluntaris i d\'empresa',
      'Els membres del Cos de Bombers de la Generalitat, els bombers locals i els bombers voluntaris en acte de servei, però NO els bombers d\'empresa'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (Llei 5/1994): tenen la condició d\'agent de l\'autoritat els membres del Cos de Bombers de la Generalitat i dels serveis locals en acte de servei (i fora de servei si s\'acrediten prèviament en situació d\'urgència). Ni els bombers voluntaris ni els bombers d\'empresa tenen aquesta condició.'
  },
  {
    topic: 6,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T6] D\'acord amb la classificació de faltes disciplinàries de la Llei 5/1994 de Bombers, quina qualificació correspon al consum d\'alcohol en acte de servei respecte a l\'embriaguesa o el consum de drogues?',
    options: [
      'Tant consumir alcohol en acte de servei com embriagar-se són faltes molt greus',
      'Consumir alcohol en acte de servei és falta lleu, mentre que embriagar-se o consumir drogues tòxiques és falta greu',
      'Consumir alcohol en acte de servei és falta greu, mentre que embriagar-se o consumir drogues tòxiques o estupefaents és falta molt greu',
      'Consumir alcohol en acte de servei és falta molt greu si es condueix un vehicle d\'emergència, i falta lleu a la resta de casos'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu (arts. 41–42 Llei 5/1994): consumir begudes alcohòliques durant el servei és falta GREU, mentre que l\'embriaguesa o el consum de drogues tòxiques, estupefaents o substàncies psicotròpiques és falta MOLT GREU.'
  },
  {
    topic: 6,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T6] Segons el règim d\'infraccions de la Llei 4/1997, de protecció civil de Catalunya, com es qualifiquen impedir i obstaculitzar una requisa de béns respecte a impedir i obstaculitzar una inspecció?',
    options: [
      'Impedir una requisa és falta molt greu i obstaculitzar-la és falta greu; en canvi, tant impedir com obstaculitzar una inspecció són infraccions molt greus',
      'Tant impedir com obstaculitzar una requisa són infraccions molt greus, mentre que obstaculitzar una inspecció és només infracció greu',
      'Impedir una requisa i impedir una inspecció són molt greus, i obstaculitzar qualsevol de les dues és infracció greu',
      'Obstaculitzar una requisa és infracció lleu i obstaculitzar una inspecció és infracció greu'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (Llei 4/1997): en matèria de requises hi ha graó (impedir = molt greu; obstaculitzar = greu), però en matèria d\'INSPECCIÓ tant impedir com obstaculitzar es qualifiquen com a infracció MOLT GREU.'
  },

  // ==================== TEMA 7 (3 preguntes) ====================
  {
    topic: 7,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T7] Segons el Decret 276/2016, quina diferència exacta hi ha entre el Cap de Sortida i el Cap de Torn d\'un parc de bombers?',
    options: [
      'El Cap de Sortida és una posició operativa de guàrdia (no requereix habilitació, 7 funcions), mentre que el Cap de Torn dirigeix un centre de coordinació de guàrdia, el Parc de Bombers (prelació sergent > caporal > bomber de 1a, 8 funcions)',
      'El Cap de Sortida dirigeix un centre de coordinació de guàrdia, el Parc de Bombers (prelació sergent > caporal > bomber de 1a, 8 funcions), mentre que el Cap de Torn és una posició operativa al carrer que requereix habilitació (7 funcions)',
      'Tots dos són posicions operatives de guàrdia de nivell 2 que requereixen habilitació prèvia i disposen de PAGI i brífings periòdics segons els articles 7 i 12 del Decret 276/2016, diferenciant-se únicament en el nombre de funcions',
      'El Cap de Sortida només actua en serveis urbans amb vehicle lleuger i el Cap de Torn exerceix la direcció del Parc de Bombers, però aquest darrer no té la consideració de centre de coordinació de guàrdia a l\'article 12 del Decret 276/2016'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (arts. 7 i 12 Decret 276/2016): el Cap de Sortida és una posició operativa (Nivell 1, 7 funcions, sense habilitació), i el Cap de Torn és el responsable del centre de coordinació «Parc de Bombers» (8 funcions, prelació sergent > caporal > bomber 1a). Només el Cap operatiu i el Cap territorial tenen PAGI i brífings.'
  },
  {
    topic: 7,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T7] D\'acord amb l\'organigrama vigent de la DGPEIS (Decret 12/2023 consolidat amb el Decret 16/2026), quantes Unitats Territorials existeixen i de qui depenen orgànicament els parcs de bombers i les Unitats de Prevenció?',
    options: [
      '19 Unitats Territorials (3 a Metro Nord, Metro Sud i Girona; 2 a la resta); tant els parcs de bombers com les 7 Unitats de Prevenció depenen orgànicament i funcionalment de les Unitats Territorials de cada Regió d\'Emergències',
      '19 Unitats Territorials (3 a Metro Nord, Metro Sud i Girona; 2 a la resta); les UT inspeccionen parcs però els parcs pengen de l\'Àrea d\'Operacions, i les 7 Unitats de Prevenció depenen orgànicament de la SG Tècnica (funcionalment de la Regió)',
      '16 Unitats Territorials (2 per cada una de les 8 Regions d\'Emergències); els parcs depenen directament de la direcció de la Unitat Territorial corresponent, i les 8 Unitats de Prevenció depenen orgànicament de l\'Àrea de Gestió regional',
      '19 Unitats Territorials (3 a Metro Nord, Metro Sud i Girona; 2 a la resta); els parcs pengen de l\'Àrea de Gestió regional, i les 7 Unitats de Prevenció depenen orgànicament de la SG Operativa i funcionalment de la SG Tècnica'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (Decret 12/2023 + 16/2026): hi ha 19 Unitats Territorials (3 a Metro Nord, Metro Sud i Girona; 2 a les altres 5 regions). Tot i que les UT inspeccionen parcs, els parcs depenen de l\'Àrea d\'Operacions regional, i les 7 Unitats de Prevenció depenen orgànicament de la SG Tècnica i funcionalment de la Regió.'
  },
  {
    topic: 7,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T7] Dins la Divisió d\'Operacions de la Subdirecció General Operativa de la DGPEIS (Decret 12/2023 + 16/2026), quines són exactament les tres unitats que integren l\'Àrea Tècnica d\'Emergències?',
    options: [
      'Unitat de Riscos Tecnològics, Unitat de Col·lapses Estructurals i Unitat d\'Accidents de Mobilitat',
      'Unitat de Riscos Tecnològics, Unitat d\'Incendis Estructurals i Unitat d\'Accidents de Mobilitat',
      'Unitat de Riscos Tecnològics, Unitat de Col·lapses i Unitat d\'Incendis Estructurals',
      'Unitat de Riscos Tecnològics, Unitat d\'Incendis Forestals (GRAF) i Unitat d\'Incendis Estructurals'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu (organigrama DGPEIS 2026): l\'Àrea Tècnica d\'Emergències té 3 unitats (Riscos Tecnològics, Col·lapses i Incendis Estructurals) — NO existeix cap Unitat d\'Accidents de Mobilitat dins d\'aquesta àrea, i l\'Àrea GRAF pertany a la Divisió d\'Emergències Climàtiques i GOE.'
  },

  // ==================== TEMA 8 (3 preguntes) ====================
  {
    topic: 8,
    difficulty: 'Mitjà',
    question: '[PUNYETERA III · T8] Segons la classificació europea UNE-EN 2 de les classes de foc, com es classifica un incendi d\'oli vegetal en una fregidora industrial i un incendi en un quadre elèctric sota tensió?',
    options: [
      'L\'oli de cuina és Classe B (líquid combustible) i el quadre elèctric sota tensió constitueix la Classe E específica segons la norma europea UNE-EN 2',
      'L\'oli de cuina és Classe F (olis i greixos vegetals o animals) i el quadre elèctric sota tensió constitueix la Classe E específica a la norma UNE-EN 2',
      'L\'oli de cuina és Classe F, i els focs amb presència de tensió elèctrica NO constitueixen cap classe específica (la Classe E no existeix a la UNE-EN 2)',
      'L\'oli de cuina és Classe D (juntament amb els metalls combustibles) i els focs amb presència de tensió elèctrica constitueixen la Classe E a la UNE-EN 2'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu (MAN.GRAL.008 / UNE-EN 2): els olis i greixos de cuina són Classe F (no B ni D), i a la norma europea UNE-EN 2 NO existeix la Classe E (la presència d\'electricitat és un risc addicional, no una classe de combustible).'
  },
  {
    topic: 8,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T8] Quina diferència física fonamental distingeix una deflagració d\'una detonació?',
    options: [
      'La deflagració es propaga a velocitat subsònica (inferior a la velocitat del so en el medi sense reaccionar) per conducció tèrmica i difusió, mentre que la detonació es propaga a velocitat supersònica mitjançant una ona de xoc',
      'La deflagració es propaga a velocitat supersònica mitjançant una ona de xoc compressiva que inicia la reacció, mentre que la detonació és una combustió subsònica que avança per conducció tèrmica i difusió de calor',
      'La deflagració només pot tenir lloc en sòlids explosius d\'alta densitat a velocitat subsònica, mentre que la detonació es produeix únicament en mescles de gasos inflamables confinats a velocitat supersònica',
      'En la deflagració la sobrepressió generada és sempre superior a la de la detonació perquè el front de flama avança més lentament i acumula energia tèrmica per conducció i radiació dins del recinte tancat'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (MAN.GRAL.008): deflagració = propagació SUBSÒNICA (conducció tèrmica i difusió de calor/massa); detonació = propagació SUPERSÒNICA (ona de xoc compressiva que inicia la reacció).'
  },
  {
    topic: 8,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T8] Quins són els límits del coeficient d\'expansió (relació volum d\'escuma / volum de solució espumant) per classificar les escumes en baixa, mitjana i alta expansió?',
    options: [
      'Baixa expansió: < 10; Mitjana expansió: de 10 a 100; Alta expansió: > 100',
      'Baixa expansió: ≤ 20; Mitjana expansió: > 20 i ≤ 200; Alta expansió: > 200',
      'Baixa expansió: ≤ 50; Mitjana expansió: > 50 i ≤ 500; Alta expansió: > 500',
      'Baixa expansió: ≤ 20; Mitjana expansió: > 20 i ≤ 100; Alta expansió: > 100'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.GRAL.008 / UNE-EN 1568): els llindars oficials del coeficient d\'expansió són 20 i 200 (baixa ≤ 20; mitjana 20–200; alta > 200).'
  },

  // ==================== TEMA 9 (3 preguntes) ====================
  {
    topic: 9,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T9] A quants bars i a quants pascals (Pa) equival una pressió de 1,5 MPa?',
    options: [
      '150 bar i 1.500.000 Pa',
      '15 bar i 150.000 Pa',
      '15 bar i 1.500.000 Pa',
      '1,5 bar i 150.000 Pa'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu (MAN.GRAL.003): 1 MPa = 10^6 Pa = 1.000.000 Pa, i com que 1 bar = 10^5 Pa, resulta que 1 MPa = 10 bar. Per tant, 1,5 MPa = 15 bar = 1.500.000 Pa.'
  },
  {
    topic: 9,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T9] En una palanca de segon gènere (com un carretó de mà), com es disposen els elements i quin avantatge mecànic ideal s\'obté sempre?',
    options: [
      'La força (potència) se situa entre el fulcre i la resistència (càrrega), de manera que el braç de potència és més petit que el de resistència i l\'avantatge mecànic és sempre inferior a 1',
      'El fulcre se situa entre la força (potència) i la resistència (càrrega), de manera que els dos braços tenen la mateixa longitud i l\'avantatge mecànic és sempre igual a 1 en qualsevol posició',
      'La resistència (càrrega) se situa entre el fulcre i la força (potència), de manera que el braç de potència és més gran que el de resistència i l\'avantatge mecànic és sempre superior a 1',
      'La resistència (càrrega) se situa entre el fulcre i la força (potència), però com que el braç de resistència supera el de potència l\'avantatge mecànic resultant és sempre inferior a 1'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu (MAN.GRAL.003): en una palanca de 2n gènere la RESISTÈNCIA està al mig (entre fulcre i potència) → braç de potència > braç de resistència → avantatge mecànic sempre > 1. (Quan la potència és al mig és de 3r gènere, amb avantatge mecànic < 1).'
  },
  {
    topic: 9,
    difficulty: 'Mitjà',
    question: '[PUNYETERA III · T9] Un objecte de massa m = 10 kg cau lliurement sense fregament des d\'una alçada h = 5 m (g = 10 m/s²). Quina energia cinètica (Ec) i quina velocitat (v) té just en arribar a terra?',
    options: [
      'Ec = 500 J  i  v = 10 m/s',
      'Ec = 50 J  i  v = 10 m/s',
      'Ec = 500 J  i  v = 100 m/s',
      'Ec = 500 J  i  v = 5 m/s'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (MAN.GRAL.003): per conservació de l\'energia, Ec = Ep = m·g·h = 10·10·5 = 500 J (no 50 J, que oblidaria multiplicar per g), i v = √(2·g·h) = √(2·10·5) = √100 = 10 m/s (no 100 m/s, que seria v²).'
  },

  // ==================== TEMA 10 (3 preguntes) ====================
  {
    topic: 10,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T10] Una ampolla metàl·lica rígida (volum constant) conté aire a una pressió absoluta de 2 bar i a una temperatura de 27 °C. Si s\'escalfa en un incendi fins a 327 °C, quina pressió absoluta assolirà aproximadament (comportament de gas ideal)?',
    options: [
      'Aproximadament 24,2 bar, aplicant la llei de Gay-Lussac directament amb els graus Celsius (2 × 327 / 27)',
      'Aproximadament 4 bar, perquè en passar la temperatura absoluta de 300 K a 600 K (el doble) la pressió també es duplica',
      'Aproximadament 1 bar, perquè en duplicar-se la temperatura absoluta la pressió es redueix a la meitat',
      'Aproximadament 6 bar, perquè per cada 100 °C d\'increment la pressió es duplica'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.GRAL.004): a la llei de Gay-Lussac (P1/T1 = P2/T2 a volum constant), la temperatura s\'ha de posar SEMPRE en kelvins: T1 = 27 + 273 = 300 K; T2 = 327 + 273 = 600 K. Com que T2 = 2·T1, P2 = 2·P1 = 4 bar!'
  },
  {
    topic: 10,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T10] Comparant dues dissolucions aquoses àcides, una amb pH = 2 i una altra amb pH = 4, quina relació hi ha entre les seves concentracions d\'ions hidrogen [H⁺]?',
    options: [
      'La dissolució de pH = 2 té una concentració de [H⁺] 2 vegades superior a la de pH = 4',
      'La dissolució de pH = 2 té una concentració de [H⁺] 20 vegades superior a la de pH = 4',
      'La dissolució de pH = 2 té una concentració de [H⁺] 100 vegades superior a la de pH = 4',
      'La dissolució de pH = 4 té una concentració de [H⁺] 100 vegades superior a la de pH = 2'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu (MAN.GRAL.004): l\'escala de pH és logarítmica decimal negativa (pH = −log10[H⁺]). Baixar 2 unitats de pH (de 4 a 2) significa multiplicar per 10² = 100 vegades l\'acidesa ([H⁺]), no pas 2 ni 20 vegades.'
  },
  {
    topic: 10,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T10] En un recinte tancat hi ha una fuga d\'un gas inflamable la concentració del qual se situa per SOBRE del seu Límit Superior d\'Inflamabilitat (LSI). Quina implicació tècnica té aquesta situació si s\'obre una porta per ventilar amb aire?',
    options: [
      'La mescla actualment no crema perquè hi ha massa combustible (falta oxigen), però en entrar aire baixarà la concentració i travessarà el rang d\'inflamabilitat (entre LSI i LII) amb risc greu d\'explosió',
      'La mescla actualment crema amb flama estable per excés de combustible, i en entrar aire s\'apagarà immediatament perquè la dilució la refreda i la situa directament per sota del LII sense risc d\'explosió',
      'Estar per sobre del LSI indica que la concentració de gas és massa pobra en combustible per iniciar la combustió, de manera que ventilar amb aire la manté fora del rang d\'inflamabilitat en tot moment',
      'Estar per sobre del LSI significa que ja s\'ha produït la detonació completa de la mescla i que no queda combustible disponible per reaccionar, per la qual cosa l\'entrada d\'aire no comporta risc tèrmic'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (MAN.GRAL.004): per sobre del LSI la mescla és massa rica (falta O₂), però en diluir-la amb aire la concentració disminueix i NECESSÀRIAMENT passa per dins la franja explosiva (LII–LSI) abans d\'arribar a una concentració segura (< LII).'
  },

  // ==================== TEMA 11 (3 preguntes) ====================
  {
    topic: 11,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T11] Si connectem dues resistències de 10 Ω cadascuna en PARAL·LEL a una font de tensió constant U, quina resistència equivalent obtenim i com es comporten la tensió i la intensitat?',
    options: [
      'Resistència equivalent = 20 Ω; la intensitat de corrent és la mateixa a totes dues resistències i la tensió U es reparteix proporcionalment entre ambdues',
      'Resistència equivalent = 5 Ω; la tensió U és la mateixa als borns de totes dues resistències i la intensitat total és la suma de les intensitats de cada branca',
      'Resistència equivalent = 5 Ω; la intensitat de corrent és la mateixa a totes dues branques del circuit i la tensió U aplicada es divideix a la meitat en cada branca',
      'Resistència equivalent = 0,2 Ω; la tensió U és la mateixa als borns de totes dues resistències i la intensitat total es divideix per la meitat en cada branca'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.GRAL.005): en paral·lel, 1/Req = 1/10 + 1/10 = 2/10 → Req = 5 Ω (no 20 Ω ni 0,2 Ω, que seria 1/Req sense invertir!), la tensió U és idèntica a cada branca i la intensitat total es suma (I_total = I1 + I2).'
  },
  {
    topic: 11,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T11] Segons la llei de Joule, si la intensitat de corrent (I) que circula per un cable elèctric de resistència constant R es duplica (2·I), què passa amb la potència calorífica dissipada en el cable?',
    options: [
      'La potència calorífica dissipada es duplica (× 2)',
      'La potència calorífica dissipada es redueix a la meitat (× 0,5)',
      'La potència calorífica dissipada es quadruplica (× 4)',
      'La potència calorífica dissipada es multiplica per 8 (× 8)'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu (MAN.GRAL.005): segons la llei de Joule, P = I² · R. Com que la intensitat I està elevada al quadrat, duplicar I (2·I) multiplica la calor generada per 2² = 4 (quadruplica el risc d\'incendi per sobreintensitat!).'
  },
  {
    topic: 11,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T11] Segons la normativa de baixa tensió i prevenció de riscos elèctrics (MAN.GRAL.005), quines són les tensions límit convencionals de contacte en corrent altern (AC) per a locals secs respecte a locals humits o mullats?',
    options: [
      '24 V en locals secs i 50 V en locals humits o mullats',
      '50 V en locals secs i 24 V en locals humits o mullats',
      '50 V en locals secs i 12 V en locals humits o mullats',
      '230 V en locals secs i 50 V en locals humits o mullats'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.GRAL.005 / REBT): la tensió límit convencional de contacte en AC és de 50 V en emplacaments secs i baixa a 24 V en emplacaments humits o mullats (12 V correspon a recintes submergits/piscines).'
  },

  // ==================== TEMA 12 (3 preguntes) ====================
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[PUNYETERA III · T12] D\'acord amb el Reglament Electrotècnic per a Baixa Tensió (REBT ITC-BT-19), quin codi de colors correspon estrictament al conductor neutre i al conductor de protecció (terra)?',
    options: [
      'Neutre: verd-i-groc; Conductor de protecció (terra): blau clar',
      'Neutre: blau clar; Conductor de protecció (terra): verd-i-groc',
      'Neutre: negre o marró; Conductor de protecció (terra): blau clar',
      'Neutre: gris; Conductor de protecció (terra): verd-i-groc'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.GRAL.007 / REBT): el conductor neutre és obligatòriament BLAU CLAR, i el de protecció (terra) és BICOLOR VERD-I-GROC; les fases són marró, negre i gris.'
  },
  {
    topic: 12,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T12] Quin és el llindar normatiu exacte que separa la Baixa Tensió (BT) de l\'Alta Tensió (AT) en corrent altern (AC) i en corrent continu (DC)?',
    options: [
      'BT és ≤ 1.000 V en corrent altern i ≤ 1.500 V en corrent continu',
      'BT és ≤ 1.500 V en corrent altern i ≤ 1.000 V en corrent continu',
      'BT és ≤ 400 V en corrent altern i ≤ 1.000 V en corrent continu',
      'BT és ≤ 1.000 V tant en corrent altern com en corrent continu'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (MAN.GRAL.007 / REBT): es considera Baixa Tensió fins a 1.000 V en AC i fins a 1.500 V en DC; per sobre d\'aquests valors és Alta Tensió.'
  },
  {
    topic: 12,
    difficulty: 'Mitjà',
    question: '[PUNYETERA III · T12] En instal·lacions de gas combustible, on s\'han de situar les reixetes de ventilació en un local amb gas natural (GN) respecte a un local amb gas liquat del petroli (GLP, butà o propà)?',
    options: [
      'En gas natural a la part inferior (més dens que l\'aire) i en GLP a la part superior (més lleuger que l\'aire)',
      'En gas natural a la part superior (més lleuger que l\'aire) i en GLP a la part inferior (més dens que l\'aire)',
      'Tant en gas natural com en GLP s\'han de situar exclusivament a la part inferior per evitar bosses de CO',
      'Tant en gas natural com en GLP les reixetes només poden anar a la part superior a més de 2 m d\'alçada'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.GRAL.007): el gas natural (metà, densitat ≈ 0,55) és més lleuger que l\'aire i puja → ventilació SUPERIOR; els GLP (propà/butà, densitat > 1) són més densos que l\'aire i s\'acumulen a terra → ventilació INFERIOR (i prohibits en soterranis).'
  },

  // ==================== TEMA 13 (3 preguntes) ====================
  {
    topic: 13,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T13] Una bomba impulsa aigua a una pressió de sortida de 7 bar per una mànega cap a un punt situat 30 metres més amunt. Quina pèrdua de pressió es produeix exclusivament per l\'alçada geomètrica (sense comptar el fregament) i de què depèn?',
    options: [
      'Es perden aproximadament 3 bar, i aquesta pèrdua hidroestàtica és independent del diàmetre de la mànega',
      'Es perden aproximadament 3 bar si la mànega és de 45 mm, però només 1,5 bar si la mànega és de 70 mm',
      'Es perden aproximadament 0,3 bar, perquè 1 bar equival a 100 metres de columna d\'aigua',
      'Es perden aproximadament 30 bar, a raó d\'1 bar per cada metre d\'alçada geomètrica'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (MAN.GRAL.009): la pressió hidroestàtica P = ρ·g·h (~1 bar cada 10 mca, per tant 30 m ≈ 3 bar) depèn ÚNICAMENT de l\'alçada vertical h i la densitat del fluid, MAI del diàmetre ni de la longitud de la mànega (el diàmetre només afecta les pèrdues de càrrega per fregament).'
  },
  {
    topic: 13,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T13] Quina diferència hi ha entre l\'altura màxima teòrica d\'aspiració d\'aigua a nivell del mar i l\'altura màxima pràctica recomanada per a una bomba centrífuga de bombers (per evitar pèrdues i cavitació)?',
    options: [
      'L\'altura teòrica màxima és de 10,33 m, però a la pràctica l\'altura màxima d\'aspiració és d\'uns 7 a 7,5 m',
      'L\'altura teòrica màxima és de 7,5 m, però amb una bona bomba centrífuga es pot aspirar a la pràctica fins a 12 m',
      'L\'altura teòrica màxima és de 10,33 m, i a la pràctica es pot aspirar fins a 10 m si el mangot és rígid',
      'No hi ha cap límit teòric ni pràctic sempre que la bomba tingui prou potència en cavalls'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (MAN.GRAL.009): la pressió atmosfèrica (1 atm ≈ 10,33 mca) fixa el límit teòric absolut en 10,33 m, però per pèrdues de càrrega en el mangot, filtre i pressió de vapor (cavitació), l\'altura pràctica màxima en bombers se situa al voltant dels 7–7,5 m.'
  },
  {
    topic: 13,
    difficulty: 'Mitjà',
    question: '[PUNYETERA III · T13] Quina diferència operativa fonamental hi ha entre una Boca d\'Incendi Equipada de 25 mm (BIE 25) i una BIE de 45 mm (BIE 45)?',
    options: [
      'La BIE 25 porta mànega plana que cal desplegar totalment abans d\'obrir l\'aigua; la BIE 45 porta mànega semirígida i es pot usar sense desplegar-la del tot',
      'La BIE 25 porta mànega semirígida i es pot utilitzar sense desplegar-la completament; la BIE 45 porta mànega plana i s\'ha de desplegar del tot abans d\'obrir la vàlvula',
      'Totes dues porten mànega plana i requereixen desplegament complet abans d\'obrir el pas d\'aigua',
      'Totes dues porten mànega semirígida i es poden utilitzar parcialment enrotllades al rodet'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.GRAL.009 / RIPCI): la BIE 25 té mànega SEMIRÍGIDA (no s\'aixafa en estar enrotllada, es pot obrir abans de desplegar-la tota); la BIE 45 té mànega PLANA (si no es desplega completament abans d\'obrir la vàlvula, queda estrangulada al rodet).'
  },

  // ==================== TEMA 14 (3 preguntes) ====================
  {
    topic: 14,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T14] En una designació completa de coordenades UTM sobre un mapa de Catalunya (per exemple, 31T 431250 4581420), què indica exactament cada grup?',
    options: [
      '31T és el fus i banda de latitud; 431250 és la coordenada Nord (Y, 6 xifres) i 4581420 és la coordenada Est (X, 7 xifres)',
      '31T és el fus i banda de latitud; 431250 és la coordenada Est (X, 6 xifres en metres) i 4581420 és la coordenada Nord (Y, 7 xifres en metres)',
      '31T indica la convergència de meridians en graus; 431250 és l\'altitud en centímetres i 4581420 la longitud',
      '31T és la zona horària; 431250 és la coordenada Est en quilòmetres i 4581420 la coordenada Nord en quilòmetres'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.GRAL.002): en UTM primer s\'escriu l\'abscissa X (Est, 6 dígits en metres) i després l\'ordenada Y (Nord, 7 dígits en metres, distància a l\'equador en l\'hemisferi nord), precedides del fus i banda (31T per a gairebé tot Catalunya).'
  },
  {
    topic: 14,
    difficulty: 'Mitjà',
    question: '[PUNYETERA III · T14] En topografia, quina relació matemàtica existeix entre la distància reduïda (D_r, mesurada en projecció horitzontal al mapa), el desnivell (Δh) i la distància real o geomètrica sobre el terreny (D_g)?',
    options: [
      'D_g = √(D_r² + Δh²), per la qual cosa la distància real sobre el terreny és sempre major o igual que la distància reduïda',
      'D_r = √(D_g² + Δh²), per la qual cosa la distància reduïda al mapa és sempre major que la distància real sobre el terreny',
      'D_g = D_r + Δh, sumant linealment la distància horitzontal i el desnivell vertical',
      'D_g = D_r − Δh, perquè el pendent escurça el recorregut real respecte al mapa'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (MAN.GRAL.002): la distància geomètrica (real, sobre el pendent) és la hipotenusa del triangle rectangle format per la distància reduïda (catet horitzontal) i el desnivell (catet vertical): D_g = √(D_r² + Δh²) ≥ D_r.'
  },
  {
    topic: 14,
    difficulty: 'Mitjà',
    question: '[PUNYETERA III · T14] En un mapa topogràfic amb corbes de nivell d\'equidistància constant, què indica una zona on les corbes de nivell apareixen molt juntes i cada quantes corbes se sol dibuixar una corba mestra (més gruixuda)?',
    options: [
      'Indica un pendent molt suau (terreny gairebé pla), i les corbes mestres se solen dibuixar cada 10 corbes',
      'Indica un pendent molt fort (terreny molt costerut), i les corbes mestres se solen dibuixar cada 5 corbes',
      'Indica un pendent molt fort, i les corbes mestres se solen dibuixar cada 2 corbes',
      'Indica una depressió tancada (dolina), i les corbes mestres se solen dibuixar cada 4 corbes'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.GRAL.002): com més juntes són les corbes de nivell, més fort és el pendent; i habitualment les corbes mestres (traç més gruixut i acotat) apareixen cada 5 corbes (p. ex. cada 50 m en mapes 1:25.000 amb equidistància de 10 m).'
  },

  // ==================== TEMA 15 (3 preguntes) ====================
  {
    topic: 15,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T15] Quin esforç provoca el fenomen d\'inestabilitat anomenat vinclament (pandeig) en un pilar o puntal esvelt, i com varia la càrrega crítica si dupliquem la seva longitud lliure de vinclament?',
    options: [
      'El provoca la compressió axial, i en duplicar la longitud de vinclament la càrrega crítica es redueix a la meitat (1/2)',
      'El provoca la compressió axial, i en duplicar la longitud de vinclament la càrrega crítica es redueix a la quarta part (1/4)',
      'El provoca la tracció axial pura, i en duplicar la longitud de vinclament la càrrega crítica es redueix a la quarta part (1/4)',
      'El provoca l\'esforç tallant, i en duplicar la longitud de vinclament la càrrega crítica es duplica (× 2)'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.GRAL.006): el vinclament (pandeig) és propi de peces esveltes sotmeses a COMPRESSIÓ axial, i segons la fórmula d\'Euler (P_cr = π²·E·I / L²), la càrrega crítica és inversament proporcional al quadrat de L (L²): duplicar L divideix la resistència per 4!'
  },
  {
    topic: 15,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T15] Comparant el comportament estructural davant d\'un incendi de l\'acer sense protecció i de la fusta massissa de gran secció, quina afirmació és exacta?',
    options: [
      'L\'acer perd aproximadament el 50 % de la seva resistència cap als 500–550 °C (temperatura crítica) de forma ràpida per la seva alta conductivitat, mentre que la fusta massissa forma una crosta carbonitzada que aïlla tèrmicament el nucli sa',
      'L\'acer manté el 100 % de la seva resistència estructural fins als 900 °C per la seva inèrcia tèrmica, mentre que la fusta massissa col·lapsa sempre abans dels 300 °C perquè crema de manera instantània en tota la seva secció transversal',
      'L\'acer perd aproximadament el 50 % de la seva resistència ja als 200 °C per efecte de la dilatació tèrmica lineal, mentre que la fusta massissa no pateix cap reducció de la seva secció útil resistent mentre hi hagi presència de flama',
      'Tant l\'acer com la fusta massissa tenen una conductivitat tèrmica pràcticament equivalent davant d\'un incendi desenvolupat, però l\'acer dilata menys amb l\'augment de temperatura i manté intacta la seva capacitat portant fins a la fusió'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (MAN.GRAL.006): l\'acer sense protecció s\'escalfa molt ràpidament i cap als 500–550 °C ja ha perdut ~50 % de la seva resistència (col·lapse ràpid); en canvi, la fusta massissa es carbonitza a velocitat lenta i previsible (~0,6–0,8 mm/min) i el carbó superficial protegeix l\'interior.'
  },
  {
    topic: 15,
    difficulty: 'Mitjà',
    question: '[PUNYETERA III · T15] En un edifici tradicional amb forjat unidireccional de biguetes, com se solen disposar els murs de càrrega respecte a les biguetes i quina precaució operativa cal tenir amb els envans interiors?',
    options: [
      'Els murs de càrrega solen ser paral·lels a les biguetes, i un envà prim es pot enderrocar sempre sense revisió perquè mai no rep càrregues',
      'Els murs de càrrega solen ser perpendiculars a les biguetes (que hi recolzen), i un envà prim pot haver entrat accidentalment en càrrega per deformació del forjat superior',
      'Els murs de càrrega solen ser perpendiculars a les biguetes, però un envà de menys de 10 cm és físicament impossible que suporti cap càrrega del forjat superior',
      'Els murs de càrrega sempre tenen exactament 10 cm de gruix i només suporten el seu propi pes'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.GRAL.006): les biguetes recolzen transversalment sobre els murs de càrrega (per tant, els murs de càrrega són PERPENDICULARS a les biguetes); a més, en edificis antics un envà no estructural pot haver «entrat en càrrega» en cedir o fletxar el forjat superior.'
  },

  // ==================== TEMA 16 (3 preguntes) ====================
  {
    topic: 16,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T16] Segons el manual d\'assistències tècniques (MAN.ATXX.000, Secció 3.3), en el zonatge de seguretat (AGO) d\'una intervenció amb motoserra, quines dimensions i quina restricció d\'accés tenen la Zona A i la Zona B?',
    options: [
      'Zona A: radi de 2 metres al voltant del motoserrista (només l\'operador); Zona B: radi de 2,5 × alçada de l\'arbre (només el binomi)',
      'Zona A: radi de 2,5 × alçada de l\'arbre (només el binomi de treball); Zona B: radi de 2 metres al voltant del motoserrista (mentre la cadena gira, NINGÚ més —ni el company del binomi— hi pot entrar)',
      'Zona A: radi de 2,5 × alçada de l\'arbre (hi pot entrar tot el torn); Zona B: radi de 2 metres al voltant del motoserrista (hi pot entrar el company del binomi per subjectar el tronc)',
      'Zona A: radi de 1,5 × alçada de l\'arbre; Zona B: radi de 5 metres al voltant del motoserrista'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.ATXX.000): Zona A = perímetre d\'abatiment (2,5 × alçada de l\'arbre, només binomi); Zona B = radi de 2 m al voltant del motoserrista (mentre gira la cadena no hi pot entrar NINGÚ, ni tan sols el company del binomi!).'
  },
  {
    topic: 16,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T16] En trossejar amb motoserra un tronc recolzat pels dos extrems (en pont), per quina cara s\'ha de fer el primer tall d\'alleujament i de quina profunditat?',
    options: [
      'Primer tall d\'alleujament d\'1/3 del diàmetre per la cara INFERIOR (zona de tracció) i segon tall definitiu de 2/3 per la cara SUPERIOR (zona de compressió)',
      'Primer tall d\'alleujament de 2/3 del diàmetre per la cara SUPERIOR (zona de compressió) i segon tall d\'1/3 per la cara INFERIOR (zona de tracció)',
      'Primer tall d\'alleujament d\'1/3 del diàmetre per la cara SUPERIOR (zona de compressió) i segon tall definitiu de 2/3 per la cara INFERIOR (zona de tracció)',
      'Un únic tall directe de dalt a baix sense alleujament previ per aprofitar el pes del tronc'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu (MAN.ATXX.000): en un tronc en pont, la cara superior està a COMPRESSIÓ (tendeix a tancar-se i pinçar l\'espasa) i la inferior a TRACCIÓ (tendeix a obrir-se). Sempre es fa 1r el tall d\'alleujament (1/3) a la zona de COMPRESSIÓ (dalt) i 2n el tall definitiu (2/3) a la zona de TRACCIÓ (baix).'
  },
  {
    topic: 16,
    difficulty: 'Mitjà',
    question: '[PUNYETERA III · T16] Segons el protocol d\'intervenció amb animals del manual MAN.ATXX.000, com s\'han de contenir i transportar una serp autòctona respecte d\'una serp exòtica/verinosa, i quant cal esperar per activar un rescat d\'un gat dalt d\'un arbre sense perill imminent?',
    options: [
      'Serp autòctona en recipient rígid tancat i serp exòtica en sac de roba lligat; per al gat cal esperar un mínim de 24 hores',
      'Serp autòctona en sac de roba lligat i serp exòtica/verinosa en recipient rígid tancat; per al gat cal esperar un mínim de 24 hores',
      'Serp autòctona en sac de roba lligat i serp exòtica/verinosa en recipient rígid tancat; per al gat s\'activa immediatament sense esperar',
      'Totes dues serps s\'han de contenir sempre en sac de roba lligat, i per al gat cal esperar un mínim de 48 hores'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.ATXX.000): serp autòctona → sac de roba lligat; serp exòtica/verinosa → recipient rígid tancat (per evitar mossegades a través del teixit). I per a un gat en alçada sense perill imminent, la regla és esperar un mínim de 24 hores.'
  },

  // ==================== TEMA 17 (3 preguntes) ====================
  {
    topic: 17,
    difficulty: 'Mitjà',
    question: '[PUNYETERA III · T17] Segons el manual MAN.COMU.000 (Secció 2.5), quins són els paràmetres exactes per fer un ús correcte del polsador PTT (Push-To-Talk) en un terminal digital TETRA de la xarxa RESCAT?',
    options: [
      'Col·locar el micròfon a 2–3 cm de la boca i esperar 1–2 segons després de prémer el PTT abans de començar a parlar',
      'Col·locar el micròfon a 10–15 cm de la boca i començar a parlar immediatament en prémer el PTT',
      'Col·locar el micròfon enganxat als llavis (0 cm) i esperar 5 segons després de prémer el PTT',
      'Col·locar el micròfon a 2–3 cm de la boca i començar a parlar just abans de prémer el PTT per no perdre temps'
    ],
    correctIndex: 0,
    explanation: 'Detall decisiu (MAN.COMU.000): micròfon a 2–3 cm de la boca i pausa prèvia d\'1–2 segons després de prémer el PTT perquè la xarxa TETRA assigni canal i no es talli la primera paraula.'
  },
  {
    topic: 17,
    difficulty: 'Difícil',
    question: '[PUNYETERA III · T17] Dins l\'operativa avançada de la xarxa RESCAT (MAN.COMU.000, Capítol 5), quina diferència tècnica i funcional hi ha entre el mode Gateway (Pont de ràdio) i el Mode Repetidor?',
    options: [
      'El Gateway amplia la cobertura entre terminals DMO sense connectar a TMO, mentre que el Mode Repetidor enllaça el mode DMO amb la xarxa troncal TMO',
      'El Gateway (Pont de ràdio) enllaça un grup en mode directe DMO amb la xarxa troncal TMO, mentre que el Mode Repetidor amplia la cobertura DMO → DMO sense connectar amb la xarxa TMO',
      'Tots dos modes requereixen cobertura directa de l\'estació base (TBS) per poder funcionar en soterranis',
      'El Gateway només transmet missatges de text SDS de fins a 120 caràcters i no permet trànsit de veu'
    ],
    correctIndex: 1,
    explanation: 'Detall decisiu (MAN.COMU.000): Gateway (Pont de ràdio) = pont DMO ↔ TMO (connecta els equips en directe amb la xarxa troncal/sala); Mode Repetidor = DMO ↔ DMO (amplia l\'abast directe entre terminals sense passar per TMO).'
  },
  {
    topic: 17,
    difficulty: 'Mitjà',
    question: '[PUNYETERA III · T17] Segons el protocol de comunicació per ràdio del manual MAN.COMU.000 (Seccions 3.2 i 3.5.3), quin és l\'ordre obligatori d\'inici d\'una trucada i quants segons cal esperar abans de tornar a interpel·lar un receptor que ha demanat «Espereu»?',
    options: [
      'Primer l\'EMISSOR i després el RECEPTOR («Emissor per a Receptor»), i s\'ha de tornar a cridar si passen més de 15 segons',
      'Primer el RECEPTOR i després l\'EMISSOR («Receptor de Emissor»), i s\'ha de tornar a cridar si passen més de 60 segons',
      'Primer el RECEPTOR i després l\'EMISSOR («Receptor de Emissor»), i s\'ha de tornar a cridar si passen més de 30 segons',
      'Primer l\'EMISSOR i després el RECEPTOR («Emissor de Receptor»), i s\'ha de tornar a cridar si passen més de 30 segons'
    ],
    correctIndex: 2,
    explanation: 'Detall decisiu (MAN.COMU.000): l\'ordre d\'inici a Bombers és sempre RECEPTOR de EMISSOR (primer a qui crides i després qui ets), i la regla d\'espera estableix que si passen més de 30 segons sense resposta després d\'un «Espereu», l\'emissor ha de tornar a interpel·lar-lo.'
  }
];
