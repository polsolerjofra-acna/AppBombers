export const tema7ProteccioCivil = {
  id: 'tema-21',
  number: 21,
  code: 'MAN.GRAL.001',
  title: "Introducció a la gestió d'emergències i el sistema de protecció civil",
  category: 'Manual Operatiu SGO — Protecció Civil i Plans',
  estimatedMinutes: 45,
  importance: {
    title: "Radar d'Examen — Tema 21 (MAN.GRAL.001 V.1): Gestió d'Emergències i Protecció Civil",
    frequency: 'Molt Alta (4-6 preguntes fixes sobre Llei 4/1997, Plans PROCICAT/PAU, 5 Grups i CCA)',
    summary:
      "Manual de 6 capítols que defineix el marc jurídic i operatiu de la Protecció Civil a Catalunya, l'Estat i la UE. Inclou 4 pàgines de desenvolupament per capítols + 2 pàgines finals de Resum Executiu amb totes les dates, lleis, fases i òrgans operatius.",
    hotTopics: [
      'Cap. 1-2: Cicle de l’emergència (Reducció, Preparació, Resposta, Recuperació), Resiliència i Fórmula del Risc (Perill × Vulnerabilitat × Exposició).',
      'Cap. 3: Evolució a Catalunya (1986 càmping, 1994 Llei 5/1994, 1995 DGEiSC, 1997 Llei 4/1997), obligació municipal (>20.000 hab.), Llei estatal 17/2015 i Mecanisme Europeu UCPM (ERCC / ECPP en 3 passos).',
      'Cap. 4: Plans Territorials (PROCICAT, PBEM), Especials (INFOCAT, INUNCAT, PLASEQCAT, TRANSCAT, NEUCAT, SISMICAT, RADCAT, AEROCAT, CAMCAT, ALLAUCAT, VENCAT), PAU (Decret 30/2015), cicle de vida (5 fases / revisió 4 anys), fases d’activació (Prealerta, Alerta, Emergència 1 i 2) i PLEGEM.',
      'Cap. 5-6: Estructura operativa (Direcció, Comitè Assessor, CCA [Bombers vs. Mossos si és intencionat], els 5 Grups d’Actuació, PAG, CECAT, CECOPAL, 6 SCT + 1 SCB i 112).'
    ],
    traps: [
      'Confondre qui dirigeix el CCA: per norma general el dirigeix el Cap de la Intervenció de Bombers, EXCEPTE si l’origen és un acte intencionat o criminal (on el dirigeix Mossos d’Esquadra).',
      'Confondre el llindar poblacional que obliga un municipi a tenir servei propi de Protecció Civil i PAM territorial: > 20.000 habitants (o risc especial).',
      'Confondre DUPROCIM (Document Únic de Protecció Civil Municipal) amb PAU (Pla d’Autoprotecció d’una empresa o activitat, Decret 30/2015, revisió cada 4 anys).'
    ]
  },
  pages: [
    {
      pageNumber: 1,
      shortLabel: 'Pàg. 1 · Cap. 1-2 Cicle i Risc',
      title: '1–2. Cicle de Gestió d’Emergències, Resiliència i Equació del Risc',
      subtitle: 'Les 4 fases del cicle (Reducció, Preparació, Resposta, Recuperació) i tipologies de risc.',
      blocks: [
        {
          type: 'text',
          heading: '1.1–1.2. Les 4 Fases del Cicle de l’Emergència i el Concepte de Resiliència',
          paragraphs: [
            "La gestió moderna de les emergències s'estructura com un cicle continu de 4 fases:",
            "• 1) Reducció (Prevenció i Mitigació): mesures prèvies al sinistre per evitar-lo o disminuir-ne la gravetat.",
            "• 2) Preparació: elaboració de plans d'emergència, formació, simulacres i sistemes d'alerta primerenca.",
            "• 3) Resposta: intervenció operativa immediata quan esclata la crisi per salvar vides, béns i medi ambient.",
            "• 4) Recuperació: rehabilitació de serveis essencials i reconstrucció per tornar a la normalitat.",
            "La RESILIÈNCIA (secció 1.2) és la capacitat d'un sistema o comunitat exposada a un perill per resistir, absorbir, adaptar-se i recuperar-se dels seus efectes de manera oportuna i eficaç."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'formula',
          title: '2.1. Equació Fonamental del Risc i els seus 3 Factors',
          formula: 'Risc = Perill (Perillositat) × Vulnerabilitat × Exposició (Valor)',
          variables: [
            { symbol: 'Perill', meaning: 'Probabilitat que es produeixi un fenomen destructiu d’una determinada intensitat en un lloc i temps (ex: riuada, sisme)' },
            { symbol: 'Vulnerabilitat', meaning: 'Grau de fragilitat o susceptibilitat dels elements exposats a patir danys (ex: qualitat constructiva d’un edifici)' },
            { symbol: 'Exposició', meaning: 'Quantitat de persones, béns econòmics, infraestructures o patrimoni natural presents a la zona afectada' }
          ],
          trick:
            'Si qualsevol dels 3 factors és ZERO, el Risc és ZERO! Un terratrèmol de magnitud 8 al mig d’un desert deshabitat sense cap persona ni infraestructura (Exposició = 0) té un Perill altíssim, però un Risc nul.',
          example:
            'Tipologies de riscos al manual (2.2): 1) Naturals (meteorològics [INUNCAT, NEUCAT, VENCAT], geofísics [SISMICAT, VOLCAT], biològics), 2) Tecnològics (químic Seveso [PLASEQCAT], transport MMPP [TRANSCAT], radiològic [RADCAT], aeronàutic [AEROCAT]) i 3) Antròpics (incendis forestals [INFOCAT], concentracions humanes, atemptats).'
        }
      ]
    },
    {
      pageNumber: 2,
      shortLabel: 'Pàg. 2 · Cap. 3 Sistema PC',
      title: '3. El Sistema de Protecció Civil: Catalunya, Estat (Llei 17/2015) i Europa (UCPM)',
      subtitle: 'Cronologia històrica a Catalunya (1986–1997), llindar de >20.000 hab. i Mecanisme Europeu.',
      blocks: [
        {
          type: 'table',
          title: '3.2–3.4. Cronologia i Nivells Competencials del Sistema de Protecció Civil',
          subtitle: 'Fites legislatives i distribució d’autoritats segons el Capítol 3 de MAN.GRAL.001',
          headers: ['Fita / Nivell Territorial', 'Norma o Data Oficial', 'Contingut i Competències Clau d’Examen'],
          rows: [
            ['1986 (Origen a Catalunya)', 'Incendi del Càmping Els Alfacs / Desastres anys 80', 'Impuls dels primers plans d’emergència i coordinació civil a Catalunya.'],
            ['1994 (Llei de Bombers)', 'Llei 5/1994, de 4 de maig', 'Regulació dels serveis de prevenció i extinció d’incendis i de salvaments de Catalunya.'],
            ['1995 (Creació Direcció General)', 'Creació de la DGEiSC (1995)', 'Direcció General d’Emergències i Seguretat Civil (actualment DGPEIS per a Bombers i DGPC per a Protecció Civil).'],
            ['1997 (Llei de Protecció Civil de Catalunya)', 'Llei 4/1997, de 20 de maig', 'Llei vigent de Protecció Civil de Catalunya: estructura els plans territorials, especials i d’autoprotecció, la Comissió de PC i el CECAT.'],
            ['3.3.1. Nivell Local (Municipis)', 'Alcalde/essa | Obligatori > 20.000 habitants', 'L’Alcalde és la màxima autoritat local de PC. Els municipis de MÉS DE 20.000 HABITANTS (i els de risc especial) estan obligats a disposar de servei propi de PC i pla municipal (PAM/DUPROCIM).'],
            ['3.3.2. Nivell Autonòmic (Generalitat)', 'Conseller/a d’Interior (i President/a si s’esdevé)', 'Direcció dels plans PROCICAT i Plans Especials; homologació a través de la Comissió de Protecció Civil de Catalunya.'],
            ['3.3.3. Nivell Estatal', 'Llei 17/2015 del Sistema Nacional de PC', 'Regula les emergències d’Interès Nacional (Nivell 3 estatal), dirigides pel Ministre de l’Interior (amb suport de la UME i el CENEM).'],
            ['3.5. Mecanisme Europeu (UCPM)', 'ERCC (Brussel·les) + ECPP (Pool Europeu)', 'Actua en 3 passos quan una catàstrofe supera la capacitat d’un Estat: 1) L’Estat afectat sol·licita ajuda a l’ERCC → 2) L’ERCC activa el pool ECPP i coordina les ofertes dels estats → 3) L’Estat afectat accepta i dirigeix els equips sobre el seu territori.']
          ],
          footnote: 'Memoritza: Llei 5/1994 = Bombers | Llei 4/1997 = Protecció Civil Catalunya | Llei 17/2015 = Sistema Nacional PC | >20.000 hab. = obligació municipal.'
        },
        {
          type: 'text',
          heading: 'No confondre! Nivell 1 vs. Nivell 2 vs. Nivell 3 en Protecció Civil',
          paragraphs: [
            "• Nivell 1 (Local / Municipal): emergència assumible amb els mitjans propis del municipi (activació del PAM/PBEM municipal i CECOPAL, sota direcció de l'Alcalde/essa).",
            "• Nivell 2 (Supramunicipal / Autonòmic): supera la capacitat municipal o afecta més d'un municipi; s'activen els plans de la Generalitat (PROCICAT o Plans Especials com INFOCAT/PLASEQCAT) des del CECAT, sota direcció del Conseller/a d'Interior.",
            "• Nivell 3 (Interès Nacional — Llei 17/2015): emergència que supera la capacitat autonòmica o afecta diverses comunitats autònomes (o requereix coordinació estatal d'emergència); la declara i dirigeix el Ministre de l'Interior (amb suport de la UME i el CENEM)."
          ]
        }
      ]
    },
    {
      pageNumber: 3,
      shortLabel: 'Pàg. 3 · Cap. 4 Plans i PLEGEM',
      title: '4. Tipologia de Plans (PROCICAT, Especials, DUPROCIM, PAU), Cicle de Vida i PLEGEM',
      subtitle: 'Els 4 blocs d’un pla, les 5 fases del cicle de vida (revisió cada 4 anys) i fases d’activació.',
      blocks: [
        {
          type: 'table',
          title: '4.1. Classificació Oficial dels Plans de Protecció Civil a Catalunya (Llei 4/1997)',
          subtitle: 'Diferència entre Plans Territorials, Plans Especials, PAM/DUPROCIM i PAU',
          headers: ['Tipus de Pla', 'Àmbit i Riscos Coberts', 'Exemples Oficials i Homologació'],
          rows: [
            ['1. Plans Territorials', 'Afronten qualsevol emergència general dins d’un territori que no tingui pla especial propi.', '• PROCICAT (Pla Territorial de PC de Catalunya).\n• PBEM (Pla Bàsic d’Emergència Municipal) / PAM.\n• DUPROCIM (Document Únic de PC Municipal: unifica en un sol document el PBEM i tots els PAM dels riscos especials del municipi!).'],
            ['2. Plans Especials', 'Afronten riscos concrets la naturalesa dels quals exigeix una metodologia tècnica i científica específica.', 'INFOCAT (forestal), INUNCAT (inundacions), PLASEQCAT / PLASEQTA (químic), TRANSCAT (transport MMPP), NEUCAT (nevades), SISMICAT (sismes), RADCAT (radiològic), AEROCAT (aeronàutic), CAMCAT (contaminació marina), ALLAUCAT (allaus), VENCAT (ventades), VOLCAT (volcànic).'],
            ['3. Plans d’Autoprotecció (PAU)', 'Empreses, indústries, hospitals, túnels o espectacles amb activitats generadores de risc (Decret 30/2015).', 'Responsabilitat del titular de l’activitat. S’integren dins dels plans municipals/especials i es revisen com a màxim cada 4 ANYS (plataforma Hermes).']
          ],
          footnote: 'Pregunta freqüent: Què és el DUPROCIM? El Document Únic de Protecció Civil Municipal que integra en un sol text el pla territorial municipal i tots els plans d’actuació municipal (PAM) per riscos especials.'
        },
        {
          type: 'text',
          heading: '4.2–4.4. Estructura, Cicle de Vida (4 anys), Fases d’Activació i PLEGEM',
          paragraphs: [
            "Tot pla s'estructura en 4 blocs (1. Objecte i marc, 2. Anàlisi de risc, 3. Organització operativa, 4. Operativitat + cartografia) i passa per 5 fases en el seu cicle de vida: Elaboració → Aprovació → Homologació (Comissió de PC de Catalunya) → Implantació → Manteniment (revisió com a màxim cada 4 anys).",
            "Fases d'activació a Catalunya: Prealerta (seguiment preventiu des del CECAT sense activar tota l'estructura), Alerta (risc imminent o emergència localitzada), Emergència Situació 1 (danys importants assumibles amb mitjans ordinaris del pla) i Emergència Situació 2 (catàstrofe greu que exigeix mitjans extraordinaris o estatals).",
            "No confondre! El PLEGEM és el Pla intern del Cos de Bombers de la Generalitat per a Grans Emergències (nivells G0 ordinari fins a G4 amb mobilització forçosa), mentre que el PAU (Decret 30/2015, registre Hermes) és el Pla d'Autoprotecció d'una empresa o activitat privada/pública."
          ]
        },
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Regla Mnemotècnica · Cicle de Vida (5 Fases) i Activació d’un Pla',
          acronym: 'E-A-H-I-M (4 anys)   |   Prealerta → Alerta → Emergència Sit. 1 → Sit. 2',
          trick:
            "• Cicle de vida (E-A-H-I-M): Elaboració → Aprovació → Homologació (Comissió PC) → Implantació → Manteniment (màx. 4 anys).\n• PLEGEM: Pla intern de Bombers (G0 → G1 → G2 → G3 → G4).\n• Prealerta = només seguiment preventiu (no desplega tot el pla).",
          example: 'La Prealerta no activa formalment tota l’estructura del pla (és una fase de seguiment i avís preventiu des del CECAT).'
        }
      ]
    },
    {
      pageNumber: 4,
      shortLabel: 'Pàg. 4 · Cap. 5-6 Operativa i 5 Grups',
      title: '5–6. Estructura Operativa (CCA i els 5 Grups Actuants), Mesures i Centres (CECAT / 112)',
      subtitle: 'Direcció del CCA, els 5 Grups d’Actuació, PAG, Confinament vs. Evacuació (ES-Alert) i 6 SCT + 1 SCB.',
      blocks: [
        {
          type: 'table',
          title: '5.1–5.6. Òrgans de Comandament i els 5 Grups d’Actuació Operativa sobre el Terreny',
          subtitle: 'Composició oficial dels plans de Protecció Civil a Catalunya (Capítol 5 MAN.GRAL.001)',
          headers: ['Òrgan / Grup Actuant', 'Qui l’Integra / Qui el Dirigeix?', 'Funció Específica a l’Emergència'],
          rows: [
            ['5.2. Direcció del Pla + 5.3. Comitè Assessor i Gabinet d’Informació', 'Conseller/a d’Interior (o Alcalde en PAM) + Tècnics experts + Portaveus oficials.', 'Presa de decisions estratègiques al CECAT/CECOPAL i comunicació única i veraç a la població i mitjans.'],
            ['5.4. CCA (Centre de Comandament Avançat)', 'Dirigit pel Cap del Grup d’Intervenció (BOMBERS), EXCEPTE si el sinistre és d’origen intencionat/criminal (MOSSOS).', 'Punt físic sobre el terreny (vehicles UCL/UCM/UCP) on es reuneixen els caps dels 5 Grups d’Actuació per coordinar les operacions in situ.'],
            ['Grup 1: Grup d’Intervenció', 'Cos de Bombers de la Generalitat (i Bombers BCN / ADF / Salvament).', 'Atac directe al sinistre: rescat i salvament de víctimes, extinció d’incendis, mitigació de fuites químiques i assegurament físic.'],
            ['Grup 2: Grup d’Ordre', 'Mossos d’Esquadra, Policies Locals, Guàrdia Urbana (i CNP/GC).', 'Seguretat ciutadana, control d’accessos i perímetres (tall de carreteres), avisos d’evacuació i policia científica/judicial.'],
            ['Grup 3: Grup Sanitari', 'SEM (Sistema d’Emergències Mèdiques), Creu Roja, hospitals.', 'Triatge in situ (PMA), assistència sanitària d’urgència (SVB/SVA) i evacuació medicalitzada de ferits als centres hospitalaris.'],
            ['Grup 4: Grup Logístic', 'Tècnics de Protecció Civil, Ajuntaments, Creu Roja, voluntariat.', 'Abastament dels equips, alberg i avituallament de població evacuada, transport col·lectiu i maquinària pesant.'],
            ['Grup 5: Grup d’Assistència Social / Psicològica (o Rehabilitació)', 'Treballadors socials, psicòlegs d’emergències (SEM/Col·legi), companyies de subministraments.', 'Atenció psicosocial a víctimes i familiars, filiació d’afectats i restabliment de serveis essencials (aigua, llum, gas).'],
            ['5.6. PAG (Punt d’Acollida General) / Punt de Trànsit', 'Zona segura fora del radi d’afectació.', 'Punt on es concentren i s’organitzen els recursos pesants abans d’assignar-los sector, o on es reagrupa la població evacuada.']
          ],
          footnote: 'Memoritza els 5 Grups Actuants i qui dirigeix el CCA: sempre Bombers, tret que hi hagi intencionalitat delictiva/terrorista (Mossos).'
        },
        {
          type: 'table',
          title: '5.8–5.9. Protecció a la Població (Confinament vs. Evacuació) i Centres de Coordinació',
          subtitle: 'Criteris de decisió operativa i xarxa de sales de control a Catalunya',
          headers: ['Concepte / Centre', 'Definició i Dades Oficials (MAN.GRAL.001)', 'Detall Clau d’Examen'],
          rows: [
            ['5.8. Confinament vs. Evacuació', 'Confinament = Tancar-se dins un edifici segur (portes, finestres, clima).\nEvacuació = Desplaçar la població fora de la zona.', 'Confinament = prioritari en núvols tòxics químics (PLASEQCAT) o fum dens breu. Evacuació = prioritària si hi ha risc d’esfondrament, foc interior o explosió.'],
            ['Sirenes Químiques i ES-Alert', 'Xarxa de sirenes d’avís químic + Sistema ES-Alert (Cell Broadcast al mòbil).', 'Permet enviar una alerta sonora i visual immediata a tots els telèfons mòbils conectats a les antenes de la zona d’emergència.'],
            ['5.9. CECAT i CECOPAL', 'CECAT = Centre de Coordinació Operativa de Catalunya.\nCECOPAL = Centre de Coordinació Operativa Local (Municipal).', 'El CECAT és l’òrgan superior permanent de coordinació d’emergències de la Generalitat (gestiona els plans PROCICAT i Especials).'],
            ['5.9. Sales de Bombers (6 SCT + 1 SCB)', '1 SCB (Sala Central de Bombers, a Cerdanyola/Bellaterra) + 6 SCT (Sales de Control Territorial).', '7 Regidories/Regions d’Emergències gestionades a través d’1 Sala Central (SCB, que integra la Regió Metropolitana) i 6 Sales de Control Territorial (SCT).'],
            ['5.9. Telèfon Únic 112 (CAT112)', 'Creat per la Decisió europea 91/396/CEE (gratuït 24/7).', 'Dues seus operatives redundants a Catalunya: Reus i Zona Franca (Barcelona).']
          ],
          footnote: 'Xifra exacta de sales de control de Bombers al manual: 1 Sala Central de Bombers (SCB) + 6 Sales de Control Territorial (SCT).'
        }
      ]
    },
    {
      pageNumber: 5,
      isSummary: true,
      shortLabel: 'Pàg. 5 · 📌 Resum 1/2 (Xifres)',
      title: 'Resum Final (1/2): Taula Mestra de Lleis, Dates i Xifres (MAN.GRAL.001)',
      subtitle: 'Totes les lleis, anys, llindars de població i estructures del Tema 21 en una sola taula.',
      blocks: [
        {
          type: 'table',
          title: 'Síntesi Numèrica i Normativa Imprescindible — Tema 21 (Protecció Civil)',
          subtitle: 'Les 14 dades exactes que cauen als exàmens de Bombers sobre MAN.GRAL.001',
          headers: ['Concepte / Normativa', 'Valor Oficial Exacte (MAN.GRAL.001)', 'Clau per a l’Examen'],
          rows: [
            ['1. Les 4 Fases del Cicle de l’Emergència', '1. Reducció → 2. Preparació → 3. Resposta → 4. Recuperació', 'La Resiliència és la capacitat de resistir, adaptar-se i recuperar-se'],
            ['2. Fórmula Matemàtica del Risc', 'Risc = Perill × Vulnerabilitat × Exposició', 'Si qualsevol dels 3 factors és 0, el Risc és 0'],
            ['3. Llei dels Serveis de Bombers de Catalunya', 'Llei 5/1994, de 4 de maig', 'Regula els serveis de prevenció, extinció d’incendis i salvaments'],
            ['4. Llei de Protecció Civil de Catalunya', 'Llei 4/1997, de 20 de maig', 'Regula el sistema català de PC, plans territorials, especials i PAU'],
            ['5. Llei del Sistema Nacional de PC (Estat)', 'Llei 17/2015, de 9 de juliol', 'Regula les emergències d’Interès Nacional (Nivell 3 estatal)'],
            ['6. Llindar d’obligació municipal de PC', '> 20.000 habitants (o municipis de risc especial)', 'Obligats a tenir servei propi de PC i pla municipal (PAM/DUPROCIM)'],
            ['7. Els 3 passos del Mecanisme Europeu (UCPM)', '1. Sol·licitud a l’ERCC → 2. Oferta del pool ECPP → 3. Acceptació i direcció per l’Estat afectat', 'Coordinat des de l’ERCC (Emergency Response Coordination Centre)'],
            ['8. Les 5 Fases del Cicle de Vida d’un Pla', '1. Elaboració → 2. Aprovació → 3. Homologació → 4. Implantació → 5. Manteniment', 'Homologació a càrrec de la Comissió de Protecció Civil de Catalunya'],
            ['9. Termini màxim de revisió dels Plans i PAU', 'Cada 4 anys com a màxim', 'Decret 30/2015 per al catàleg d’activitats amb PAU (registre Hermes)'],
            ['10. Les 4 Fases d’Activació d’un Pla', 'Prealerta → Alerta → Emergència Situació 1 → Emergència Situació 2', 'La Prealerta és seguiment preventiu sense activació operativa total'],
            ['11. Els 5 Grups d’Actuació al Terreny', '1. Intervenció (Bombers) | 2. Ordre (Mossos) | 3. Sanitari (SEM) | 4. Logístic | 5. Assistència Social', 'Coordinats sobre el terreny des del CCA (Centre de Comandament Avançat)'],
            ['12. Direcció del CCA', 'Cap de Bombers (o Mossos si l’acte és criminal/intencionat)', 'Excepció crítica d’examen: delicte/atemptat → dirigeix Mossos'],
            ['13. Sales de Control de Bombers', '1 SCB (Sala Central) + 6 SCT (Sales de Control Territorial)', 'El centre superior de Protecció Civil de la Generalitat és el CECAT'],
            ['14. Telèfon 112 (CAT112)', 'Decisió 91/396/CEE (seus a Reus i Zona Franca BCN)', 'Telèfon únic europeu d’emergències, gratuït 24/7']
          ],
          footnote: 'Pàgina 1 de 2 del Resum Executiu del Tema 21 (MAN.GRAL.001).'
        }
      ]
    },
    {
      pageNumber: 6,
      isSummary: true,
      shortLabel: 'Pàg. 6 · 📌 Resum 2/2 (Plans i Paranys)',
      title: 'Resum Final (2/2): Mapa de Plans Especials, Confinament vs. Evacuació i Paranys',
      subtitle: 'Totes les sigles dels plans d’emergència de Catalunya i criteris operatius clau.',
      blocks: [
        {
          type: 'mnemonic',
          variant: 'mnemonic',
          title: 'Diccionari Ràpid de Sigles de Plans de Catalunya (No en fallis cap!)',
          acronym: 'PROCICAT | DUPROCIM | PLEGEM | PAU | INFOCAT | PLASEQCAT | TRANSCAT | RADCAT',
          trick:
            "• PROCICAT: Pla Territorial de Catalunya | DUPROCIM: Unifica el PBEM i els PAM municipals.\n• PAU: Pla d'Autoprotecció d'empresa/activitat (Decret 30/2015, revisió 4 anys) | PLEGEM: Pla intern de Bombers (G0–G4).\n• PLANS ESPECIALS: INFOCAT (forestal), INUNCAT (inundacions), NEUCAT/ALLAUCAT/VENCAT (meteo), SISMICAT/VOLCAT (geofísics), PLASEQCAT (indústries Seveso), TRANSCAT (transport MMPP), RADCAT, AEROCAT, CAMCAT (mar).\n• CONFINAMENT vs. EVACUACIÓ: Núvol tòxic químic → Confinament | Risc estructural o explosió interior → Evacuació.",
          example: 'Si bolca una cisterna d’amoníac a l’autopista AP-7: s’activa el TRANSCAT (transport MMPP), no el PLASEQCAT (que és per a indústries fixes).'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q21-1',
      difficulty: 'Fàcil',
      question: "Segons la Llei 4/1997 de Protecció Civil de Catalunya i el manual MAN.GRAL.001, a partir de quina xifra de població estan obligats els municipis a disposar d'un servei propi de protecció civil i elaborar el seu pla bàsic municipal?",
      options: [
        'Més de 5.000 habitants',
        'Més de 10.000 habitants',
        'Més de 20.000 habitants (o municipis amb risc especial)',
        'Més de 50.000 habitants'
      ],
      correctIndex: 2,
      explanation: 'Els municipis de més de 20.000 habitants (així com els que tinguin riscos especials o alta afluència turística) tenen obligació legal de prestar servei propi de protecció civil.'
    },
    {
      id: 'q21-2',
      difficulty: 'Mitjà',
      question: "Qui assumeix per norma general la direcció del Centre de Comandament Avançat (CCA) sobre el terreny, i quina és l'excepció prevista al manual MAN.GRAL.001?",
      options: [
        'Sempre l’Alcalde del municipi, sense excepcions.',
        'El comandament de Bombers (cap del Grup d’Intervenció), excepte quan l’emergència és fruit d’un acte intencionat o delictiu, cas en què la direcció del CCA correspon a Mossos d’Esquadra.',
        'Sempre el cap del SEM (Grup Sanitari) quan hi ha ferits.',
        'El delegat del Govern de l’Estat.'
      ],
      correctIndex: 1,
      explanation: "L'apartat 5.4 del manual estableix que el CCA és dirigit pel comandament de Bombers, tret que la naturalesa de l'incident sigui intencionada/criminal, on assumeix la direcció Mossos d'Esquadra."
    },
    {
      id: 'q21-3',
      difficulty: 'Mitjà',
      question: "Quin és el termini màxim de revisió periòdica dels plans de protecció civil i dels Plans d'Autoprotecció (PAU) dins de la fase de manteniment del seu cicle de vida?",
      options: ['Cada any', 'Cada 2 anys', 'Cada 4 anys', 'Cada 10 anys'],
      correctIndex: 2,
      explanation: "Els plans s'han de revisar de manera ordinària com a màxim cada 4 anys."
    },
    {
      id: 'q21-4',
      difficulty: 'Fàcil',
      question: "Què és el DUPROCIM dins de l'arquitectura de plans de protecció civil de Catalunya?",
      options: [
        'El pla especial per a accidents químics a Tarragona.',
        'El Document Únic de Protecció Civil Municipal, que agrupa en un sol document el pla bàsic territorial municipal i tots els plans d’actuació municipal (PAM) per riscos especials.',
        'El protocol intern de mobilització de Bombers (PLEGEM).',
        'El sistema europeu d’alerta per mòbil.'
      ],
      correctIndex: 1,
      explanation: 'El DUPROCIM és el Document Únic de Protecció Civil Municipal que unifica el PBEM i els diferents PAM especials d’un ajuntament.'
    },
    {
      id: 'q21-5',
      difficulty: 'Difícil',
      question: "Com s'estructura la xarxa de sales de control operatiu del Cos de Bombers de la Generalitat segons l'apartat 5.9 del manual MAN.GRAL.001?",
      options: [
        '4 Sales Provincials i 1 Sala del 112.',
        '1 Sala Central de Bombers (SCB) i 6 Sales de Control Territorial (SCT).',
        '10 Sales Comarcals.',
        'Només existeix el CECAT com a única sala de Bombers.'
      ],
      correctIndex: 1,
      explanation: 'El Cos de Bombers disposa d’1 Sala Central de Bombers (SCB) i 6 Sales de Control Territorial (SCT).'
    },
    {
      id: 'q21-6',
      difficulty: 'Fàcil',
      question: "Quines són les 4 fases del cicle de gestió de les emergències segons el capítol 1 del manual MAN.GRAL.001 i què s'entén per resiliència?",
      options: [
        "Reducció, Preparació, Resposta i Recuperació; la resiliència és la capacitat d'un sistema o comunitat per resistir, absorbir, adaptar-se i recuperar-se d'un perill de manera oportuna i eficaç.",
        "Prealerta, Alerta, Emergència 1 i Emergència 2; la resiliència és la velocitat d'extinció del foc.",
        "Elaboració, Aprovació, Homologació i Implantació; la resiliència és el nombre de vehicles disponibles.",
        "Prevenció, Confiscació, Sanció i Reconstrucció; la resiliència és la resistència al foc dels edificis."
      ],
      correctIndex: 0,
      explanation: "El cicle de l'emergència consta de 4 fases (Reducció, Preparació, Resposta i Recuperació) i la resiliència defineix la capacitat de resistir, absorbir, adaptar-se i recuperar-se dels efectes d'un perill."
    },
    {
      id: 'q21-7',
      difficulty: 'Fàcil',
      question: "Quins tres factors componen l'equació fonamental del risc en protecció civil i quin resultat té si un d'aquests factors val zero?",
      options: [
        "Risc = Probabilitat + Cost + Temps; si un és zero, el risc augmenta.",
        "Risc = Intensitat × Durada × Superfície; si l'exposició és zero, el risc és màxim.",
        "Risc = Gravetat × Mitjans × Pressió; el risc mai pot ser zero.",
        "Risc = Perill × Vulnerabilitat × Exposició; si qualsevol dels tres factors és zero, el risc és nul."
      ],
      correctIndex: 3,
      explanation: "La fórmula del risc és Perill × Vulnerabilitat × Exposició. Com que és un producte, si qualsevol dels tres factors és zero (per exemple, un fenomen greu en un lloc sense exposició), el risc és zero."
    },
    {
      id: 'q21-8',
      difficulty: 'Mitjà',
      question: "Quina relació correcta correspon a les tres lleis fonamentals recollides al capítol 3 de MAN.GRAL.001?",
      options: [
        "Llei 4/1997: Bombers de Catalunya | Llei 5/1994: Sistema Nacional de PC | Llei 17/2015: PAU.",
        "Llei 17/2015: Bombers de Catalunya | Llei 5/1994: Protecció Civil de Catalunya | Llei 4/1997: Mecanisme Europeu.",
        "Llei 5/1994: Serveis de prevenció i extinció d'incendis i salvaments de Catalunya | Llei 4/1997: Protecció Civil de Catalunya | Llei 17/2015: Sistema Nacional de Protecció Civil (Estat).",
        "Totes tres lleis són normatives europees sobre el telèfon 112."
      ],
      correctIndex: 2,
      explanation: "La Llei 5/1994 regula els serveis de bombers de Catalunya, la Llei 4/1997 és la Llei de Protecció Civil de Catalunya i la Llei 17/2015 regula el Sistema Nacional de Protecció Civil a nivell estatal."
    },
    {
      id: 'q21-9',
      difficulty: 'Mitjà',
      question: "Quin és l'ordre exacte de les 5 fases del cicle de vida d'un pla de protecció civil i quin òrgan n'efectua l'homologació a Catalunya?",
      options: [
        "Aprovació → Elaboració → Implantació → Homologació → Revisió (per l'Ajuntament).",
        "Elaboració → Aprovació → Homologació (per la Comissió de Protecció Civil de Catalunya) → Implantació → Manteniment.",
        "Prealerta → Alerta → Homologació → Resposta → Recuperació (pel CECAT).",
        "Disseny → Simulacre → Aprovació (pel 112) → Arxiu → Extinció."
      ],
      correctIndex: 1,
      explanation: "Segons l'apartat 4.3, les 5 fases del cicle de vida d'un pla són: Elaboració, Aprovació, Homologació (a càrrec de la Comissió de Protecció Civil de Catalunya), Implantació i Manteniment."
    },
    {
      id: 'q21-10',
      difficulty: 'Mitjà',
      question: "Davant el bolcament d'una cisterna d'amoníac a l'autopista AP-7 que genera un núvol tòxic exterior de curta durada sobre una zona habitada, quin pla especial s'activa i quina és la mesura prioritària de protecció a la població?",
      options: [
        "S'activa el pla TRANSCAT (transport de mercaderies perilloses) i la mesura prioritària és el Confinament a l'interior d'edificis segurs.",
        "S'activa el pla PLASEQCAT i s'ordena l'evacuació immediata de tots els veïns cap al carrer.",
        "S'activa el pla INFOCAT i s'evacua la població amb vehicles particulars.",
        "S'activa el pla SISMICAT i es mantenen obertes les finestres per ventilar."
      ],
      correctIndex: 0,
      explanation: "Els accidents de transport de mercaderies perilloses per carretera o ferrocarril activen el TRANSCAT (no el PLASEQCAT, reservat a indústries fixes). Davant un núvol tòxic químic exterior, el confinament és la mesura prioritària i més segura."
    },
    {
      id: 'q21-11',
      difficulty: 'Difícil',
      question: "Com funciona en tres passos el Mecanisme de Protecció Civil de la Unió Europea (UCPM) descrit a l'apartat 3.5 del manual?",
      options: [
        "L'ERCC envia tropes directament sense sol·licitud prèvia i assumeix el comandament únic del país afectat.",
        "El CECAT activa el pool ECPP unilateralment i dirigeix els equips d'altres estats a Brussel·les.",
        "L'Estat afectat demana ajuda al 112 europeu, la Comissió Europea suspèn els plans nacionals i l'UME dirigeix l'operació.",
        "1) L'Estat afectat sol·licita ajuda a l'ERCC → 2) L'ERCC activa el pool ECPP i coordina les ofertes dels estats → 3) L'Estat afectat accepta i dirigeix els equips sobre el seu territori."
      ],
      correctIndex: 3,
      explanation: "En el mecanisme UCPM, l'Estat afectat sol·licita ajuda a l'ERCC de Brussel·les, aquest activa el pool europeu (ECPP) i coordina ofertes, i és sempre l'Estat afectat qui accepta i dirigeix els equips dins el seu territori."
    },
    {
      id: 'q21-12',
      difficulty: 'Difícil',
      question: "Quins són els 5 Grups d'Actuació operativa sobre el terreny en els plans de protecció civil de Catalunya i què regula el PLEGEM?",
      options: [
        "Grup d'Extinció, Grup Aeri, Grup Marítim, Grup de Comunicacions i Grup Jurídic; PLEGEM és el pla d'autoprotecció d'un hospital.",
        "Grup Municipal, Grup Comarcal, Grup Autonòmic, Grup Estatal i Grup Europeu; PLEGEM regula les sirenes químiques.",
        "Intervenció (Bombers), Ordre (Mossos/Policies), Sanitari (SEM), Logístic i Assistència Social/Psicològica; PLEGEM és el pla intern del Cos de Bombers per a Grans Emergències (nivells G0 a G4).",
        "Tècnic, Policial, Mèdic, Voluntariat i Premsa; PLEGEM és l'òrgan d'homologació de plans."
      ],
      correctIndex: 2,
      explanation: "Els 5 grups actuants al CCA són: Intervenció, Ordre, Sanitari, Logístic i Assistència Social/Psicològica. El PLEGEM és el Pla d'Emergències del Cos de Bombers de la Generalitat davant Grans Emergències (des de G0 fins a G4)."
    },
    {
      id: 'q21-13',
      difficulty: 'Mitjà',
      question: "Quina diferència hi ha entre una emergència de Nivell 1, Nivell 2 i Nivell 3 (Interès Nacional, Llei 17/2015) dins del sistema de Protecció Civil?",
      options: [
        "Nivell 1 és autonòmic, Nivell 2 és europeu (UCPM) i Nivell 3 és municipal.",
        "Nivell 1 és d'àmbit local assumible amb mitjans municipals (Alcalde); Nivell 2 supera el municipi i activa plans autonòmics (PROCICAT/Especials al CECAT); Nivell 3 és d'Interès Nacional i la dirigeix el Ministre de l'Interior.",
        "Tots tres nivells són dirigits sempre pel Cap de Bombers al CCA sense intervenció institucional.",
        "Nivell 3 correspon únicament a la fase de Prealerta d'un pla especial."
      ],
      correctIndex: 1,
      explanation: "Nivell 1 correspon a l'àmbit municipal/local (PAM/CECOPAL), Nivell 2 a l'àmbit autonòmic (Generalitat/CECAT), i Nivell 3 a les emergències d'Interès Nacional (Llei 17/2015) dirigides pel Ministre de l'Interior."
    },
    {
      id: 'q21-14',
      difficulty: 'Mitjà',
      question: "Dins les fases d'activació d'un pla de protecció civil a Catalunya, què distingeix la fase de Prealerta de la fase d'Emergència Situació 1?",
      options: [
        "La Prealerta implica mobilització forçosa de personal lliure (PLEGEM G4) i la Situació 1 només seguiment meteorològic.",
        "La Prealerta és una fase de seguiment i avís preventiu sense activar formalment tota l'estructura del pla, mentre que l'Emergència Situació 1 comporta danys importants assumibles amb els mitjans ordinaris del pla.",
        "La Prealerta activa l'ERCC europeu i la Situació 1 activa només el 112.",
        "No hi ha cap diferència operativa entre Prealerta i Emergència Situació 2."
      ],
      correctIndex: 1,
      explanation: "En Prealerta es fa seguiment preventiu des del CECAT abans que hi hagi afectació; l'Emergència Situació 1 s'activa quan ja hi ha danys importants però es poden gestionar amb els mitjans ordinaris del pla (la Situació 2 exigeix mitjans extraordinaris/estatals)."
    },
    {
      id: 'q21-15',
      difficulty: 'Fàcil',
      question: "Quin decret regula els Plans d'Autoprotecció (PAU) a Catalunya i mitjançant quina plataforma telemàtica s'inscriuen al registre oficial?",
      options: [
        "Decret 30/2015 i plataforma Hermes.",
        "Llei 5/1994 i plataforma RESCAT.",
        "RD 836/2012 i plataforma ES-Alert.",
        "Decret 150/2000 i plataforma ECPP."
      ],
      correctIndex: 0,
      explanation: "El Decret 30/2015 aprova el catàleg d'activitats amb obligació de PAU a Catalunya, que es tramiten i registren a través de la plataforma Hermes i es revisen com a màxim cada 4 anys."
    },
    {
      id: 'q21-16',
      difficulty: 'Difícil',
      question: "En relació amb les mesures de protecció a la població i els centres de coordinació (Capítol 5 de MAN.GRAL.001), quina afirmació és INCORRECTA?",
      options: [
        "El sistema ES-Alert (Cell Broadcast) permet enviar una alerta sonora i visual immediata als telèfons mòbils connectats a les antenes de la zona d'emergència.",
        "El telèfon únic europeu d'emergències 112 (CAT112) disposa de dues seus operatives redundants a Reus i a la Zona Franca de Barcelona.",
        "Davant d'un edifici amb risc imminent d'esfondrament o explosió interior, la mesura prioritària és el confinament de tots els veïns dins els pisos.",
        "El PAG (Punt d'Acollida General) / Punt de Trànsit és una zona segura fora del radi d'afectació per concentrar recursos pesants o reagrupar població evacuada."
      ],
      correctIndex: 2,
      explanation: "Afirmació incorrecta: quan l'edifici mateix presenta risc d'esfondrament, incendi interior o explosió imminent, la mesura prioritària és l'EVACUACIÓ (el confinament és prioritari davant núvols tòxics químics exteriors o fum breu)."
    },
    {
      id: 'q21-17',
      difficulty: 'Fàcil',
      question: "Quins plans especials de protecció civil de Catalunya s'activen respectivament davant d'una contaminació marina al litoral i davant d'un accident d'aviació civil?",
      options: [
        "INUNCAT (mar) i VENCAT (aviació).",
        "CAMCAT (contaminació marina) i AEROCAT (accidents aeronàutics).",
        "TRANSCAT (mar) i RADCAT (aviació).",
        "VOLCAT (mar) i ALLAUCAT (aviació)."
      ],
      correctIndex: 1,
      explanation: "Segons el catàleg de Plans Especials de Catalunya: CAMCAT correspon a contaminació accidental de les aigües marines i AEROCAT a emergències aeronàutiques."
    },
    {
      id: 'q21-18',
      difficulty: 'Mitjà',
      question: "Dins dels 5 Grups d'Actuació operativa coordinats al CCA (secció 5.5 del manual), quin grup s'encarrega de l'alberg i avituallament de la població evacuada i del subministrament als equips intervinents, i quin fa el triatge al PMA?",
      options: [
        "Grup d'Ordre (alberg) i Grup d'Intervenció (triatge).",
        "Grup Logístic (alberg, avituallament i abastament) i Grup Sanitari (triatge al PMA i evacuació medicalitzada).",
        "Grup d'Assistència Social (avituallament pesant) i Grup Logístic (triatge).",
        "Grup Sanitari (control d'accessos) i Grup d'Ordre (alberg)."
      ],
      correctIndex: 1,
      explanation: "El Grup Logístic gestiona l'abastament dels equips, alberg i avituallament d'evacuats, mentre que el Grup Sanitari (SEM/Creu Roja) s'encarrega del triatge al PMA i el trasllat sanitari."
    }
  ]
};
