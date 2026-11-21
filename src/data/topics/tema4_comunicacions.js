export const tema4Comunicacions = {
  id: 'tema-17',
  number: 17,
  code: 'MAN.COMU.000',
  title: 'Comunicacions per ràdio',
  category: 'Manual Operatiu SGO — Comunicacions i Xarxa RESCAT',
  estimatedMinutes: 45,
  importance: {
    title: "Radar d'Examen — Tema 17 (MAN.COMU.000 v.1): Comunicacions per Ràdio",
    frequency: 'Molt Alta (4-5 preguntes per examen sobre RESCAT, canals, PTT i codis ZULU)',
    summary:
      "Manual de 5 capítols + 2 Annexos oficials: 1. Introducció (SIG i apagada analògica abril 2025), 2. Fonaments i PTT, 3. Estructura de missatges i escala 1-5, 4. Organització de canals en intervenció, 5. Xarxa RESCAT (TETRA: TMO, DMO, Gateway i Repeater) i Annexos (Marcadors i Codis ZULU). Inclou 4 pàgines d'estudi + 2 pàgines finals de Resum Executiu.",
    hotTopics: [
      'Cap. 1-2: Apagada analògica VHF (abril 2025), PTT (2-3 cm de la boca i esperar 1-2 s abans de parlar) i regla jeràrquica (+1 / -1 nivell).',
      'Cap. 3: Ordre d’inici de trucada ("RECEPTOR de EMISSOR"), regla dels 30 segons d’espera i escala de qualitat del senyal (1 a 5).',
      'Cap. 4: Els 4 tipus de canals en gran emergència (Trànsit, Servei, Sector/Tàctic i Directe DMO).',
      'Cap. 5: Xarxa RESCAT (57.000 usuaris, 37.000 terminals, 317 TBS, 98,5% cobertura), TMO vs. DMO, tecla 0 (5 s → GPS), SDS (120 caràcters) i Pont de ràdio (Gateway) vs. Mode Repetidor.',
      'Annexos 1 i 2: Marcadors numèrics i tots els Codis ZULU (Z-0 a Z-11).'
    ],
    traps: [
      'Invertir l’ordre de crida: a Bombers de la Generalitat SEMPRE es diu primer a qui crides i després qui ets ("RECEPTOR de EMISSOR").',
      'Confondre Pont de ràdio / Gateway (enllaça DMO amb la xarxa troncal TMO) amb Mode Repetidor (amplia cobertura DMO → DMO sense connectar a TMO).',
      'Confondre Z-2 (Sortida parc) amb Z-4 (Arribada al lloc), Z-5 (Retorn disponible) i Z-6 (Retorn NO disponible).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-2 Fonaments i PTT',
      title: '1–2. Evolució Tecnològica (Apagada Abril 2025), Fonaments, PTT i Jerarquia',
      subtitle: 'Transició VHF a TETRA RESCAT, SIG (ArcGIS), tècnica del PTT (2-3 cm / 1-2 s) i regla +1/-1.',
      blocks: [
        {
          type: 'text',
          heading: '1. Introducció: De l’Analògic VHF a la Xarxa RESCAT i el SIG (ArcGIS)',
          paragraphs: [
            "Històricament, Bombers de la Generalitat utilitzava una xarxa analògica pròpia en banda VHF (simplex i semidúplex), que patia interferències i manca de privacitat. Amb el desplegament de la xarxa digital troncal RESCAT (estàndard europeu TETRA), totes les comunicacions operatives i el posicionament GPS dels vehicles s'integren en temps real amb el Sistema d'Informació Geogràfica corporatiu (SIG, basat en tecnologia ArcGIS).",
            "DADA CLAU DEL MANUAL (Capítol 1): L'apagada definitiva de l'antiga xarxa analògica VHF de Bombers de la Generalitat es fixa a l'ABRIL DE 2025."
          ]
        },
        {
          type: 'diagram',
          title: 'Codi Fonètic Internacional (ICAO / OTAN) i Regles de Transmissió Ràdio',
          diagramType: 'radio_phonetic_icao',
          caption:
            'Alfabet fonètic A–Z utilitzat a la xarxa RESCAT i normes bàsiques de transmissió PTT.'
        },
        {
          type: 'table',
          title: '2. Fonaments de Ràdio, Ús del PTT i Disciplina Jeràrquica (+1 / -1)',
          subtitle: 'Paràmetres tècnics i operatius del Capítol 2 de MAN.COMU.000',
          headers: ['Concepte (Secció)', 'Paràmetre Oficial del Manual', 'Explicació i Aplicació Operativa'],
          rows: [
            ['2.1. Modes de transmissió', 'Simplex, Semidúplex i Dúplex', 'En ràdio operativa predomina el Simplex (DMO, una sola freqüència alternativa) i Semidúplex (TMO amb estació base, on cal prémer el PTT per parlar per torns).'],
            ['2.5. Ús correcte del PTT (Push-To-Talk)', 'Distància: 2 a 3 cm de la boca | Pausa prèvia: 1 a 2 segons', 'En prémer el PTT en una xarxa digital TETRA, el sistema triga 1-2 segons a assignar el canal i establir l’enllaç; si parles a l’instant, es talla la primera paraula!'],
            ['2.6.1. Regla de Jerarquia (+1 / -1)', 'Comunicació només amb 1 nivell superior (+1) o 1 nivell inferior (-1)', 'Cada efectiu es comunica únicament amb el seu comandament directe (+1) o amb els seus subordinats directes (-1) per no saturar el canal ni trencar la cadena de comandament.'],
            ['2.6.2. Prioritat dels missatges', '1r Emergència / Seguretat vital (SOS / Codi Vermell) → 2n Operatius urgents → 3r Rutinaris', 'Un missatge de perill imminent o atrapament té prioritat absoluta i interromp qualsevol trànsit de ràdio.']
          ],
          footnote: 'Memoritza les dues xifres del PTT: micròfon a 2–3 cm de la boca i esperar 1–2 segons després de prémer el botó abans de començar a parlar.'
        },
        {
          type: 'text',
          heading: 'No confondre! Simplex vs. Semidúplex vs. Dúplex',
          paragraphs: [
            "• Simplex: comunicació en un sol sentit cada vegada utilitzant una única freqüència directa entre equips (ex: Mode DMO punt a punt). Cal prémer el PTT per torns.",
            "• Semidúplex: comunicació alternativa (només parla un a la vegada prement el PTT), però utilitzant dues freqüències diferents a través d'una estació base o repetidor (ex: Mode TMO a la xarxa RESCAT).",
            "• Dúplex: comunicació simultània en tots dos sentits sense prémer PTT (com una trucada telefònica convencional)."
          ]
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 3-4 Missatges i Canals',
      title: '3–4. Estructura de les Comunicacions, Alfabet ICAO, Escala 1-5 i Canals',
      subtitle: 'Fórmula "RECEPTOR de EMISSOR", espera de 30 s, prova de ràdio 1-5 i arquitectura de 4 canals.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: '3.2. Regla d’Or d’Inici de Comunicació i Regla dels 30 Segons (3.5.3)',
          acronym: '1r RECEPTOR (a qui crides) + "DE" + 2n EMISSOR (qui ets tu)',
          trick:
            "• ORDRE D'INICI: Sempre es nomena primer el destinatari perquè pari atenció i després qui truca. Exemple: «Control Terres de l'Ebre de BUP Tortosa (3.20.11)».\n• REGLA DELS 30 SEGONS (3.5.3): Si el receptor demana «Espereu» per consultar una dada i passen MÉS DE 30 SEGONS sense resposta, l'emissor ha de tornar a interpel·lar-lo per confirmar que continua a l'escolta.",
          example: 'Correcte: "Cap d’Intervenció de Sector Nord, endavant". Incorrecte: "Sóc Sector Nord per a Cap d’Intervenció".'
        },
        {
          type: 'table',
          title: '3.5.2. Alfabet Fonètic Internacional (ICAO) i 3.5.5. Escala de Qualitat del Senyal (1 a 5)',
          subtitle: 'Taules oficials de deletreig i control de recepció de ràdio',
          headers: ['Paràmetre', 'Valors Oficials del Manual MAN.COMU.000', 'Ús Operatiu'],
          rows: [
            ['Escala 1 a 5 de Qualitat de Ràdio (3.5.5)', '1 = Il·legible (no s’entén res)\n2 =Llegible amb molta dificultat (entretallat)\n3 = Llegible amb certa dificultat\n4 = Llegible (bon senyal)\n5 = Perfectament llegible (alt i clar)', 'Quan es demana un control de ràdio ("Com em reps?"), es respon amb aquesta escala numèrica d’1 a 5 (ex: "Rebut 5 de 5").'],
            ['Alfabet Fonètic ICAO (Lletres) (3.5.2)', 'A Alfa, B Bravo, C Charlie, D Delta, E Echo, F Foxtrot, G Golf, H Hotel, I India, J Juliett, K Kilo, L Lima, M Mike, N November, O Oscar, P Papa, Q Quebec, R Romeo, S Sierra, T Tango, U Uniform, V Victor, W Whiskey, X X-ray, Y Yankee, Z Zulu', 'S’utilitza per lletrejar matrícules, codis ADR/ONU o noms propis amb soroll de fons.'],
            ['Números per Ràdio', '0 Zero, 1 Un, 2 Dos, 3 Tres, 4 Quatre, 5 Cinc, 6 Sis, 7 Set, 8 Vuit, 9 Nou', 'Les xifres crítiques es llegeixen dígit a dígit (ex: 3-2-0-1-1).']
          ],
          footnote: 'En una prova de ràdio, "5" significa recepció perfecta (alt i clar) i "1" significa totalment il·legible.'
        },
        {
          type: 'table',
          title: '4.3. Arquitectura dels 4 Tipus de Canals en una Gran Emergència',
          subtitle: 'Distribució de grups de conversa per evitar el col·lapse de les comunicacions',
          headers: ['Tipus de Canal', 'Mode Tècnic', 'Participants i Funció Específica'],
          rows: [
            ['1. Canal de Trànsit (Despatx)', 'TMO (Xarxa RESCAT)', 'Enllaça la Sala de Control Territorial (SCT) amb els vehicles durant el desplaçament (sortida Z-2, arribada Z-4, retorn Z-5/Z-6).'],
            ['2. Canal de Servei (Comandament)', 'TMO (Xarxa RESCAT)', 'Assignat a una emergència concreta per enllaçar el Cap d’Intervenció / CCA amb els Caps de Sector i amb la Sala de Control.'],
            ['3. Canal de Sector (Tàctic)', 'DMO o TMO dedicat', 'Comunicació interna de treball dins d’un sector operatiu (Cap de Sector amb les dotacions assignades al seu sector).'],
            ['4. Canal Directe (Interior / Seguretat)', 'DMO (Punt a punt sense xarxa)', 'Comunicació directa terminal a terminal entre els binomis d’atac interior (soterranis, túnels o edificis on no arriba cobertura TMO).']
          ],
          footnote: 'En serveis petits o habituals (4.2), les dotacions treballen amb el Canal de Trànsit i un Canal Directe (DMO) al lloc.'
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 5 Xarxa RESCAT',
      title: '5. Xarxa RESCAT (TETRA): Xifres, TMO vs. DMO, Gateway i Mode Repetidor',
      subtitle: 'Infraestructura de Catalunya (317 TBS, 98,5%), tecla 0 (GPS), SDS (120 car.) i modes especials.',
      blocks: [
        {
          type: 'table',
          title: '5.1–5.3. Dades Oficials de la Xarxa RESCAT i Funcions dels Terminals TETRA',
          subtitle: 'Xifres literals del Capítol 5 de MAN.COMU.000 que cauen als tests',
          headers: ['Paràmetre / Funció', 'Dada Exacta del Manual', 'Detall Tècnic i Operatiu'],
          rows: [
            ['Usuaris i Terminals RESCAT', '57.000 usuaris i 37.000 terminals operatius', 'Xarxa d’emergències i seguretat de la Generalitat (Bombers, Mossos, SEM, ADF, Agents Rurals, Protecció Civil).'],
            ['Estacions Base (TBS) i Cobertura', '317 estacions base (TBS) + 27 extensions | 98,5% cobertura territorial', 'Inclou estacions base mòbils transportables per a zones d’ombra o catàstrofes.'],
            ['Tecla "0" (Pulsació llarga 5 s)', 'Mantenir premuda la tecla "0" durant 5 segons', 'Mostra a la pantalla del terminal les coordenades GPS exactes de la posició actual.'],
            ['Missatges de Text SDS', 'Màxim 120 caràcters alfanumèrics', 'Short Data Service: permet enviar missatges escrits i estats codificats (ZULU) consumint un ample de banda mínim.'],
            ['Botó Taronja d’Emergència', 'Situat a la part superior del terminal portàtil i emissora mòbil', 'Activa la trucada prioritària d’emergència (SOS), obre el micròfon ambiental (escolta en calent) i envia la posició GPS a la Sala de Control.']
          ],
          footnote: 'Memoritza el quartet de xifres RESCAT: 57.000 usuaris | 37.000 terminals | 317 TBS (+27 extensions) | 98,5% del territori.'
        },
        {
          type: 'table',
          title: '5.2 i 5.4. Els 4 Modes de Funcionament TETRA: TMO, DMO, Pont (Gateway) i Repetidor',
          subtitle: 'Diferència fonamental entre treballar amb xarxa o sense xarxa',
          headers: ['Mode TETRA', 'Com Funciona?', 'Quan S’utilitza a Bombers?'],
          rows: [
            ['1. TMO (Trunked Mode Operation)', 'Els terminals es comuniquen A TRAVÉS de la infraestructura d’estacions base (TBS) de la xarxa RESCAT.', 'Cobertura a tot Catalunya (comunicació amb Sala de Control, Canal de Trànsit i Canal de Servei).'],
            ['2. DMO (Direct Mode Operation)', 'Els terminals es comuniquen DIRECTAMENT entre si (punt a punt) sense passar per cap antena de la xarxa RESCAT.', 'Treball a l’interior d’edificis, túnels, soterranis o muntanya sense cobertura TMO. Garantit al lloc de l’incendi!'],
            ['3. Pont de Ràdio (Gateway / Passarel·la)', 'L’emissora mòbil del camió fa de "pont" enllaçant els portàtils que estan en DMO amb la xarxa troncal TMO.', 'Permet que un bomber amb portàtil dins d’un soterrani (en DMO) parli amb la Sala de Control o el CCA (en TMO) a través del camió aparcada a fora.'],
            ['4. Mode Repetidor (DMO Repeater)', 'Un terminal o emissora rep el senyal DMO i el reemet en DMO (DMO → DMO) sense connectar amb TMO.', 'Amplia el radi d’abast entre dos portàtils en mode directe quan estan massa lluny o separats per un turó/obstacle.']
          ],
          footnote: 'Parany d’examen: GATEWAY (Pont) = connecta DMO ↔ TMO | REPETIDOR = amplia DMO ↔ DMO.'
        },
        {
          type: 'text',
          heading: 'No confondre! Pont de Ràdio (Gateway) vs. Mode Repetidor',
          paragraphs: [
            "• Pont de Ràdio (Gateway): l'emissora del camió actua de passarel·la entre un grup en DMO (bombers a l'interior d'un soterrani sense cobertura) i la xarxa troncal TMO (Sala de Control o CCA).",
            "• Mode Repetidor (DMO Repeater): NO connecta amb la xarxa TMO ni amb la Sala de Control; simplement repeteix senyals DMO → DMO per superar un obstacle local (un turó o edifici) i ampliar l'abast entre portàtils."
          ]
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Annexos 1 i 2 (ZULU)',
      title: 'Annexos 1 i 2: Marcadors Operatius i Taula Completa dels Codis ZULU',
      subtitle: 'Tots els estats codificats ZULU (Z-0 a Z-11) d’enviament SDS i marcadors d’emissora.',
      blocks: [
        {
          type: 'table',
          title: 'Annex 2. Taula Oficial Completa dels Codis ZULU (Memorització Literal Obligatòria)',
          subtitle: 'Codis d’estat que els vehicles envien a la Sala de Control per gestionar la mobilització al SIG',
          headers: ['Codi ZULU', 'Significat Oficial (MAN.COMU.000 Annex 2)', 'Explicació Operativa'],
          rows: [
            ['Z-0', 'Rebut / Assabentat del servei', 'Confirmació que la dotació ha rebut l’avís de sortida.'],
            ['Z-1', 'Disponible al parc', 'Vehicle operatiu i disponible dins del parc de bombers.'],
            ['Z-2', 'Sortida cap al servei', 'El vehicle surt del parc (o del punt on era) en direcció a l’emergència.'],
            ['Z-3', 'Urgència ràdio / Demana parlar amb Sala de Control', 'Petició prioritària de contacte de veu amb l’operador de la Sala de Control.'],
            ['Z-4', 'Arribada al lloc del servei ("En lloc")', 'El vehicle acaba d’arribar a l’escenari del sinistre.'],
            ['Z-5', 'Retorn al parc DISPONIBLE', 'Finalitza l’actuació al lloc i torna cap al parc podent ser desviat a un altre servei.'],
            ['Z-6', 'Retorn al parc NO DISPONIBLE', 'Torna al parc però NO pot anar a un altre servei (ex: falta d’aigua/ERA buits, avaria o contaminació).'],
            ['Z-7', 'Arribada al parc', 'El vehicle ja ha entrat al parc de bombers.'],
            ['Z-8', 'Fora de servei (Inoperatiu)', 'Vehicle temporalment inoperatiu (manteniment, repostar, pràctiques).'],
            ['Z-9', 'Sortida en comissió de servei (No urgent)', 'Desplaçament no operatiu (ex: portar material, revisió d’hidrants, taller).'],
            ['Z-10 / Z-11', 'Estats auxiliars de localització / finalització', 'Confirmació de tancament o gestió interna de flota al SIG.']
          ],
          footnote: 'Els 5 codis ZULU que cauen al 99% dels exàmens són: Z-2 (Sortida al servei), Z-4 (Arribada a lloc), Z-5 (Retorn disponible), Z-6 (Retorn NO disponible) i Z-7 (Arribada al parc).'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · 📌 Resum 1/2 (Xifres)',
      title: 'Resum Final (1/2): Taula Mestra de Xifres, Codis i Escales (MAN.COMU.000)',
      subtitle: 'Totes les dades numèriques de la xarxa RESCAT, PTT, escala 1-5 i Codis ZULU en una sola vista.',
      blocks: [
        {
          type: 'table',
          title: 'Síntesi Numèrica Imprescindible d’Examen — Tema 17 (Comunicacions per Ràdio)',
          subtitle: 'Les 14 dades exactes que has de clavar al test oficial',
          headers: ['Concepte', 'Xifra / Dada Exacta (MAN.COMU.000)', 'Recordatori Clau'],
          rows: [
            ['1. Apagada xarxa analògica VHF', 'Abril de 2025', 'Transició total a la xarxa digital TETRA RESCAT'],
            ['2. Distància del micròfon (PTT) a la boca', '2 a 3 cm', 'Parlar amb volum normal, sense cridar (evita saturació digital)'],
            ['3. Pausa després de prémer el PTT', '1 a 2 segons abans de parlar', 'Temps necessari perquè la xarxa TETRA assigni el canal'],
            ['4. Regla de jerarquia en comunicacions', '+1 / -1 nivell jeràrquic', 'Només amb el comandament immediat (+1) o subordinats directes (-1)'],
            ['5. Temps màxim en "Espereu"', '30 segons', 'Passats 30 s en espera, cal tornar a interpel·lar l’interlocutor'],
            ['6. Escala de qualitat de recepció', 'De l’1 (il·legible) al 5 (perfectament llegible)', '1=Il·legible | 2=Molta dif. | 3=Certa dif. | 4=Llegible | 5=Perfecte'],
            ['7. Usuaris i terminals de la xarxa RESCAT', '57.000 usuaris i 37.000 terminals', 'Integrada per tots els cossos d’emergència i seguretat de Catalunya'],
            ['8. Antenes (TBS) i Cobertura RESCAT', '317 TBS (+27 extensions) | 98,5% del territori', 'Complementada amb unitats mòbils i modes DMO/Gateway'],
            ['9. Consulta ràpida de coordenades GPS', 'Mantenir premuda la tecla "0" durant 5 segons', 'Mostra la latitud/longitud o UTM a la pantalla del terminal'],
            ['10. Longitud màxima d’un missatge SDS', '120 caràcters', 'Missatgeria curta de dades i enviament d’estats ZULU'],
            ['11. Els 4 canals en Gran Emergència', '1. Trànsit | 2. Servei | 3. Sector | 4. Directe', 'Trànsit i Servei van en TMO; Directe va sempre en DMO'],
            ['12. Seqüència cronològica ZULU d’un servei', 'Z-0 (Rebut) → Z-2 (Sortida) → Z-4 (En lloc) → Z-5/Z-6 (Retorn) → Z-7 (Al parc)', 'Z-5 = Retorn DISPONIBLE | Z-6 = Retorn NO DISPONIBLE']
          ],
          footnote: 'Pàgina 1 de 2 del Resum Executiu del Tema 17 (MAN.COMU.000).'
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · 📌 Resum 2/2 (Punts Clau)',
      title: 'Resum Final (2/2): Protocol de Ràdio, Modes TETRA i Paranys d’Examen',
      subtitle: 'Les regles operatives que el tribunal utilitza per plantejar casos pràctics de comunicacions.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Les 4 Regles d’Or de Comunicacions per a l’Examen',
          acronym: 'RECEPTOR DE EMISSOR | TMO vs DMO | GATEWAY vs REPETIDOR | Z-5 vs Z-6',
          trick:
            "• FÓRMULA D'INICI: Sempre «[RECEPTOR] de [EMISSOR]» (ex: «Control Girona de BUP Girona»).\n• TMO vs. DMO: TMO usa les 317 antenes (TBS) de RESCAT; DMO és directe terminal a terminal sense xarxa.\n• GATEWAY vs. REPETIDOR: Gateway enllaça DMO ↔ TMO (pel camió); Repetidor només amplia DMO ↔ DMO.\n• RETORN Z-5 vs. Z-6: Z-5 = torna disponible | Z-6 = torna NO disponible (sense aigua, ERA buit o avaria).",
          example: 'Un binomi entra a un pàrquing soterrani (-3) sense cobertura de xarxa RESCAT: ha de passar a Canal Directe (DMO) i activar el Pont (Gateway) del camió si vol enllaçar amb TMO.'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q17-1',
      difficulty: 'Fàcil',
      question: "Segons el manual MAN.COMU.000, quina és l'estructura correcta per iniciar una trucada per ràdio quan el vehicle BUP Manresa vol comunicar-se amb la Sala de Control Central?",
      options: [
        '«Aquí BUP Manresa cridant a Control Central, em rebeu?»',
        '«Control Central de BUP Manresa» (primer Receptor i després Emissor)',
        '«BUP Manresa per a Control Central» (primer Emissor i després Receptor)',
        '«Z-3 BUP Manresa endavant»'
      ],
      correctIndex: 1,
      explanation: "A Bombers de la Generalitat l'estructura obligatòria d'inici és sempre «RECEPTOR de EMISSOR»."
    },
    {
      id: 'q17-2',
      difficulty: 'Mitjà',
      question: "Quina tecla s'ha de mantenir premuda durant 5 segons en un terminal portàtil de la xarxa RESCAT per visualitzar a la pantalla les coordenades GPS, i quina és la longitud màxima d'un missatge SDS?",
      options: [
        'Tecla "#" | 160 caràcters',
        'Tecla "0" | 120 caràcters',
        'Tecla "5" | 250 caràcters',
        'Tecla "*" | 80 caràcters'
      ],
      correctIndex: 1,
      explanation: 'Mantenint premuda la tecla "0" durant 5 segons apareixen les coordenades GPS en pantalla; els missatges SDS admeten fins a 120 caràcters.'
    },
    {
      id: 'q17-3',
      difficulty: 'Mitjà',
      question: "Quina diferència hi ha entre la funció 'Pont de ràdio (Gateway)' i el 'Mode Repetidor' en els equips TETRA de Bombers?",
      options: [
        'Són dues denominacions operatives equivalents per a la mateixa funció de reemissió automàtica entre terminals portàtils dins d’edificis sense cobertura.',
        'El Pont (Gateway) enllaça comunicacions en mode directe (DMO) amb la xarxa troncal (TMO), mentre que el Repetidor només amplia l’abast entre terminals en mode directe (DMO a DMO).',
        'El Pont (Gateway) només opera en banda VHF analògica per enllaçar amb emissores de parc, mentre que el Repetidor opera exclusivament en xarxa digital troncal TMO.',
        'El Repetidor enllaça els terminals en mode directe (DMO) amb la xarxa troncal (TMO), mentre que el Pont (Gateway) només amplia l’abast entre terminals en mode directe (DMO a DMO).'
      ],
      correctIndex: 1,
      explanation: 'El Gateway (passarel·la) fa de pont entre DMO i TMO; el Mode Repetidor reemet DMO → DMO per superar obstacles locals.'
    },
    {
      id: 'q17-4',
      difficulty: 'Fàcil',
      question: "Quin codi ZULU ha d'enviar una dotació quan arriba al lloc de l'emergència, i quin quan torna cap al parc però NO està disponible perquè ha esgotat l'aigua i l'aire dels ERA?",
      options: [
        'Z-2 a l’arribada i Z-5 al retorn no disponible',
        'Z-4 a l’arribada al lloc i Z-6 al retorn no disponible',
        'Z-4 a l’arribada al lloc i Z-5 al retorn no disponible',
        'Z-3 a l’arribada i Z-7 al retorn no disponible'
      ],
      correctIndex: 1,
      explanation: 'Z-4 indica "Arribada al lloc del servei", Z-5 és "Retorn disponible" i Z-6 és "Retorn NO disponible".'
    },
    {
      id: 'q17-5',
      difficulty: 'Difícil',
      question: "Quantes estacions base (TBS) fixes i quin percentatge de cobertura territorial té la xarxa RESCAT segons l'apartat 5.1 del manual MAN.COMU.000?",
      options: [
        '150 TBS (+12 extensions) i 85,0% de cobertura territorial',
        '317 TBS (+27 extensions) i 98,5% de cobertura territorial',
        '480 TBS (+35 extensions) i 99,9% de cobertura territorial',
        '212 TBS (+18 extensions) i 92,0% de cobertura territorial'
      ],
      correctIndex: 1,
      explanation: "El manual recull que la xarxa RESCAT disposa de 317 TBS (més 27 extensions), donant servei a 57.000 usuaris i 37.000 terminals amb un 98,5% de cobertura del territori."
    },
    {
      id: 'q17-6',
      difficulty: 'Mitjà',
      question: "A quina distància de la boca s'ha de col·locar el micròfon i quant temps cal esperar després de prémer el PTT abans de començar a parlar a la xarxa digital RESCAT?",
      options: [
        'Enganxat directament als llavis (0 cm) i començar a parlar de manera immediata.',
        'A 2–3 cm de la boca i esperar 1–2 segons abans de parlar perquè el sistema assigni el canal.',
        'A 15–20 cm de la boca i esperar 5 segons abans de parlar perquè s’activi el repetidor.',
        'A 5–10 cm de la boca i esperar 0,2 segons (només fins que s’apagui el to d’ocupat).'
      ],
      correctIndex: 1,
      explanation: 'Segons la secció 2.5, el micròfon se situa a 2–3 cm de la boca i cal fer una pausa d’1–2 segons després de prémer el PTT per no tallar la primera paraula mentre TETRA assigna el canal.'
    },
    {
      id: 'q17-7',
      difficulty: 'Mitjà',
      question: 'Què estableix la regla de jerarquia en les comunicacions operatives del capítol 2 de MAN.COMU.000?',
      options: [
        "Qualsevol bomber s'ha de comunicar directament amb la Sala de Control Central en tot moment.",
        'Cada efectiu es comunica només amb els seus companys de binomi, mai amb comandaments.',
        'Cada efectiu es comunica únicament amb un nivell jeràrquic superior (+1) o un nivell inferior (-1).',
        'Només es permet la comunicació ascendent (+1 i +2), mai la descendent.'
      ],
      correctIndex: 2,
      explanation: 'La regla +1 / -1 indica que cada efectiu es comunica només amb el seu comandament immediat (+1) o els seus subordinats directes (-1) per mantenir la cadena de comandament i evitar saturacions.'
    },
    {
      id: 'q17-8',
      difficulty: 'Fàcil',
      question: "En una prova de ràdio ('Com em reps?'), què significa respondre '5' en l'escala de qualitat del senyal, i quant temps màxim pot passar després d'un 'Espereu' abans de tornar a interpel·lar el receptor?",
      options: [
        '5 = Il·legible | 10 segons',
        '5 = Llegible amb certa dificultat | 60 segons',
        '5 = Dúplex complet | 15 segons',
        '5 = Perfectament llegible (alt i clar) | 30 segons'
      ],
      correctIndex: 3,
      explanation: "A l'escala d'1 a 5 (apartat 3.5.5), 5 significa 'Perfectament llegible (alt i clar)'; i segons la regla dels 30 segons (3.5.3), si passen més de 30 s després d'un 'Espereu', cal tornar a interpel·lar."
    },
    {
      id: 'q17-9',
      difficulty: 'Mitjà',
      question: "En l'arquitectura de 4 canals d'una gran emergència, quin canal enllaça el Cap d'Intervenció/CCA amb els Caps de Sector i la Sala de Control, i en quin mode treballa el Canal Directe d'interior?",
      options: [
        'Canal de Servei (en TMO) | El Canal Directe treballa en DMO (punt a punt sense xarxa).',
        'Canal de Trànsit (en DMO) | El Canal Directe treballa en TMO.',
        'Canal de Sector (en VHF analògic) | El Canal Directe treballa en Gateway.',
        'Canal de Trànsit (en TMO) | El Canal Directe treballa en TMO prioritari.'
      ],
      correctIndex: 0,
      explanation: 'El Canal de Servei (TMO) enllaça el Cap d’Intervenció/CCA amb els Caps de Sector i la Sala de Control, mentre que el Canal Directe entre binomis d’interior funciona sempre en mode DMO.'
    },
    {
      id: 'q17-10',
      difficulty: 'Difícil',
      question: "Quan es fixa l'apagada definitiva de l'antiga xarxa analògica VHF segons el capítol 1 del manual, i quines accions activa el botó taronja d'emergència del terminal TETRA?",
      options: [
        'Gener de 2024 | Envia un missatge SDS genèric d’alerta a la Sala de Control i bloqueja el micròfon per evitar interferències acústiques.',
        'Abril de 2025 | Activa la trucada prioritària SOS, obre el micròfon ambiental (escolta en calent) i envia la posició GPS a la Sala de Control.',
        'Juliol de 2025 | Canvia automàticament de mode TMO a mode Repetidor DMO d’alta potència i emet un senyal sonor continu de localització.',
        'Abril de 2026 | Apaga la transmissió de dades SDS, bloqueja el canvi de grup i activa únicament la balisa acústica i lluminosa del terminal.'
      ],
      correctIndex: 1,
      explanation: "El manual fixa l'apagada de la xarxa analògica VHF a l'abril de 2025. El botó taronja activa la trucada prioritària SOS, l'escolta en calent (micròfon ambiental) i l'enviament de coordenades GPS."
    },
    {
      id: 'q17-11',
      difficulty: 'Mitjà',
      question: "Quin codi ZULU significa 'Sortida cap al servei' i quin s'utilitza per demanar prioritàriament parlar per veu amb la Sala de Control (urgència ràdio)?",
      options: [
        'Z-1 (Sortida cap al servei) i Z-9 (Urgència ràdio / Demana parlar amb Sala de Control)',
        'Z-0 (Sortida cap al servei) i Z-4 (Urgència ràdio / Demana parlar amb Sala de Control)',
        'Z-2 (Sortida cap al servei) i Z-3 (Urgència ràdio / Demana parlar amb Sala de Control)',
        'Z-3 (Sortida cap al servei) i Z-8 (Urgència ràdio / Demana parlar amb Sala de Control)'
      ],
      correctIndex: 2,
      explanation: 'Segons l’Annex 2, Z-2 indica "Sortida cap al servei" i Z-3 indica "Urgència ràdio / Demana parlar amb Sala de Control".'
    },
    {
      id: 'q17-12',
      difficulty: 'Difícil',
      question: "Com es lletreja la combinació 'Q-W-X' segons l'alfabet fonètic internacional ICAO del manual, i què indica el codi ZULU Z-9?",
      options: [
        'Quebec - Victor - X-ray | Vehicle fora de servei (inoperatiu).',
        'Queen - Whiskey - Xenon | Arribada al parc.',
        'Quebec - Walter - X-ray | Retorn al parc disponible.',
        'Quebec - Whiskey - X-ray | Sortida en comissió de servei (no urgent).'
      ],
      correctIndex: 3,
      explanation: "A l'alfabet ICAO, Q és Quebec, W és Whiskey i X és X-ray; i el codi Z-9 correspon a 'Sortida en comissió de servei (No urgent)'."
    },
    {
      id: 'q17-13',
      difficulty: 'Mitjà',
      question: "Quina diferència tècnica existeix entre el mode de transmissió Simplex i el mode Semidúplex en ràdio operativa?",
      options: [
        'En Simplex tots dos interlocutors poden parlar i escoltar simultàniament en temps real sense necessitat de prémer el PTT, mentre que en Semidúplex només un terminal pot emetre alhora sobre una única freqüència.',
        'En Simplex s’utilitza una única freqüència directa per torns (ex. DMO), mentre que en Semidúplex s’utilitzen dues freqüències a través d’una estació base o repetidor però igualment per torns prement el PTT (ex. TMO).',
        'El Semidúplex només existeix en emissores analògiques de banda VHF amb dos canals separats, mentre que el Simplex és exclusiu de la xarxa digital TETRA en mode troncal TMO i de la telefonia mòbil.',
        'En Semidúplex no cal fer cap pausa després de prémer el PTT perquè les dues freqüències romanen permanentment obertes, mentre que en Simplex cal esperar que l’estació base assigni el canal de retorn.'
      ],
      correctIndex: 1,
      explanation: 'Tant en Simplex (1 freqüència directa, DMO) com en Semidúplex (2 freqüències via estació base/repetidor, TMO) cal prémer el PTT i parlar per torns; només el Dúplex permet parlar i escoltar alhora.'
    },
    {
      id: 'q17-14',
      difficulty: 'Mitjà',
      question: "Un binomi treballa en un túnel ferroviari sense cobertura de xarxa RESCAT (en DMO), però necessita que el seu trànsit de veu arribi fins al Centre de Comandament Avançat (CCA) que opera en TMO. Quina funció ha d'activar l'autobomba situada a la boca del túnel?",
      options: [
        'El Mode Repetidor DMO.',
        'El Pont de ràdio (Gateway / Passarel·la).',
        'El codi Z-8 de fora de servei.',
        'La tecla "#" durant 5 segons.'
      ],
      correctIndex: 1,
      explanation: 'El Pont de ràdio (Gateway) de l’emissora del camió enllaça els terminals en DMO amb la xarxa troncal TMO. El mode repetidor només reemet DMO → DMO.'
    },
    {
      id: 'q17-15',
      difficulty: 'Difícil',
      question: "En relació amb l'organització dels canals en una gran emergència (Capítol 4 de MAN.COMU.000), quina afirmació és INCORRECTA?",
      options: [
        'El Canal de Trànsit (en TMO) enllaça la Sala de Control Territorial amb els vehicles durant els desplaçaments.',
        'El Canal de Servei (en TMO) enllaça el Cap d’Intervenció/CCA amb els Caps de Sector i la Sala de Control.',
        'El Canal Directe funciona sempre en mode TMO d’alta potència per garantir l’enllaç directe amb la Sala Central des de soterranis.',
        'El Canal de Sector (tàctic) serveix per a la comunicació interna dins d’un sector operatiu entre el Cap de Sector i les seves dotacions.'
      ],
      correctIndex: 2,
      explanation: 'Afirmació incorrecta: el Canal Directe treballa sempre en mode DMO (punt a punt sense xarxa), precisament per garantir la comunicació entre binomis dins d’edificis, túnels o soterranis on NO arriba la cobertura TMO.'
    },
    {
      id: 'q17-16',
      difficulty: 'Fàcil',
      question: "Quin codi ZULU indica que un vehicle ja ha entrat de nou al seu parc de bombers, i quin indica que es troba temporalment fora de servei (inoperatiu per manteniment o avaria)?",
      options: [
        'Z-1 (Arribada al parc) i Z-9 (Fora de servei).',
        'Z-7 (Arribada al parc) i Z-8 (Fora de servei / Inoperatiu).',
        'Z-5 (Arribada al parc) i Z-6 (Fora de servei).',
        'Z-0 (Arribada al parc) i Z-3 (Fora de servei).'
      ],
      correctIndex: 1,
      explanation: 'Segons l’Annex 2: Z-7 = Arribada al parc; Z-8 = Fora de servei (Inoperatiu). Z-1 indica "Disponible al parc" i Z-6 "Retorn al parc NO disponible".'
    },
    {
      id: 'q17-17',
      difficulty: 'Mitjà',
      question: "Durant una comunicació per ràdio, el receptor respon «Espereu» per comprovar una dada al mapa. Què ha de fer l'emissor si passen 35 segons sense obtenir resposta?",
      options: [
        'Premer el botó taronja d’emergència SOS durant 3 segons per forçar la prioritat del canal.',
        'Canviar immediatament al Canal de Trànsit i enviar un missatge d’estat Z-3 a la Sala Central.',
        'Tornar a interpel·lar el receptor per confirmar que continua a l’escolta, segons la regla dels 30 segons.',
        'Esperar un mínim de 2 minuts en silenci absolut abans de tornar a prémer el PTT per no saturar el canal.'
      ],
      correctIndex: 2,
      explanation: 'Segons la regla dels 30 segons (apartat 3.5.3 del manual), si després d’un "Espereu" passen més de 30 segons sense resposta, l’emissor ha de tornar a cridar el receptor.'
    },
    {
      id: 'q17-18',
      difficulty: 'Mitjà',
      question: "Quina és la prioritat absoluta en les comunicacions per ràdio a Bombers (secció 2.6.2), i què significa el grau '2' en l'escala de qualitat del senyal d'1 a 5?",
      options: [
        'Prioritat màxima: missatges rutinaris de canvi de torn al parc | Grau 2 = Llegible sense cap dificultat ni interferència.',
        'Prioritat màxima: missatges d’emergència o seguretat vital (SOS / perill imminent) | Grau 2 = Llegible amb molta dificultat (entretallat).',
        'Prioritat màxima: confirmacions de recepció amb codi Z-0 | Grau 2 = Perfectament llegible (alt i clar en tot el missatge).',
        'Prioritat màxima: ordres del Cap de Torn per canviar de sector operatiu | Grau 2 = Totalment il·legible (només s’escolta soroll).'
      ],
      correctIndex: 1,
      explanation: 'Els missatges d’emergència o seguretat vital tenen prioritat absoluta i interrompen qualsevol trànsit. A l’escala 1–5: 1 = il·legible, 2 = llegible amb molta dificultat, 3 = amb certa dificultat, 4 = llegible, 5 = perfectament llegible.'
    }
  ]
};
