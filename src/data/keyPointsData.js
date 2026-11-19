export const KEY_POINT_GROUPS = [
  {
    id: 'distancies-mides',
    category: 'Distàncies, Mides i Alçades',
    title: 'Distàncies de seguretat i mides que es confonen entre temes',
    description:
      'Agrupació de xifres de distància i alçada entre Prevenció (Tema 23), Hidràulica (Tema 13), Assistències (Tema 16), Forestals (Tema 25) i Rescat Urbà (Tema 33).',
    items: [
      {
        concept: 'Hidrant exterior industrial (RSCIEI · Tema 23)',
        value: '≤ 40 m recorregut · 5 a 15 m separació façana',
        confusionWarning: 'No confondre amb els 5–10 m d\'aproximació de l\'espai de maniobra AEA!',
        topicNumber: 23
      },
      {
        concept: 'Espai de maniobra AEA (CTE SI 5 · Tema 23)',
        value: 'Amplada ≥ 5 m · Alçada lliure ≥ 4,5 m · Separació façana ≤ 23 m (18 m si > 15 m)',
        confusionWarning: 'L\'abast pràctic estàndard de l\'autoescala de 30 m en incendi estructural se situa fins a Planta 8 (Tema 24).',
        topicNumber: 24
      },
      {
        concept: 'Aspiració d\'una bomba centrífuga (Tema 13)',
        value: 'Teòrica màx: 10,33 mca · Pràctica: ≤ 7,5 m',
        confusionWarning: 'Cada 10 m de columna d\'aigua = 1 bar. A més altitud o temperatura, l\'aspiració baixa!',
        topicNumber: 13
      },
      {
        concept: 'Vies d\'escapament en tala amb motoserra (Tema 16)',
        value: 'Dues vies d\'escapament a 45° enrere respecte la direcció de caiguda',
        confusionWarning: 'En atrapament d\'autobomba forestal (Situació 2 · Tema 25), l\'angle d\'atac al front és de 45°–60°.',
        topicNumber: 16
      },
      {
        concept: 'Anticaigudes i Factor de caiguda (Tema 3 / Tema 33)',
        value: 'Força de xoc màx: 6 kN · Factor ideal: 0 (màx 2) · Angle SAS ≤ 60° (alerta a 120°)',
        confusionWarning: 'A 120° en un triangle de forces (SAS), cada ancoratge suporta el 100% de la càrrega!',
        topicNumber: 33
      }
    ]
  },
  {
    id: 'pressions-cabals',
    category: 'Pressions, Cabals i Forces',
    title: 'Pressions de treball, cabal i llindars d\'alarma',
    description:
      'Comparativa directa per no barrejar bars de l\'ERA, bombes, hidrants i eines d\'excarceració.',
    items: [
      {
        concept: 'ERA (Tema 20)',
        value: 'Ampolla: 300 bar · Mitjana pressió: 6–8 bar · Xiulet reserva: 55 ± 5 bar (≥ 90 dB) · Sobrepressió màscara: +1,5 a +3,9 mbar',
        confusionWarning: 'No confondre 55±5 bar de reserva de l\'ERA amb 5 bar de pressió mínima en hidrant!',
        topicNumber: 20
      },
      {
        concept: 'Hidrant RSCIEI vs Bomba (Tema 23 / Tema 13)',
        value: 'Hidrant: 1.500–3.000 L/min a 5 bar · 1 bar = 10 mca = 100 kPa',
        confusionWarning: 'Doblar el cabal en una llança exigeix MULTIPLICAR PER 4 la pressió en punta.',
        topicNumber: 13
      },
      {
        concept: 'Eines hidràuliques d\'excarceració (Tema 32)',
        value: 'Pressió de treball estàndard: 700 bar',
        confusionWarning: 'No confondre amb els 350 / 700 bar dels dipòsits d\'Hidrogen (H₂) en vehicles (Tema 26)!',
        topicNumber: 32
      },
      {
        concept: 'Pendent % vs Graus (Tema 19)',
        value: 'Pendent del 100% = 45° (100 m verticals cada 100 m horitzontals)',
        confusionWarning: 'Un pendent del 100% NO són 90° (vertical)!',
        topicNumber: 19
      }
    ]
  },
  {
    id: 'xifres-legals',
    category: 'Terminis i Xifres Legals',
    title: 'Trampes clàssiques entre lleis (Temes 1 a 7)',
    description:
      'Dades numèriques gairebé idèntiques que canvien d\'una llei a una altra.',
    items: [
      {
        concept: 'Edat i reserva discapacitat: Text Únic (1/1997) vs EBEP (5/2015)',
        value: 'TU: 18 anys / fins al 5% (màx) · EBEP: 16 anys / no inferior al 7% (mín)',
        confusionWarning: 'L\'objectiu global de plantilla és el 2% en totes dues normes.',
        topicNumber: 2
      },
      {
        concept: 'Prescripció de faltes: TU / Decret 243/1995 vs EBEP',
        value: 'TU/Decret: 6 anys (MG) · 2 anys (G) · 2 mesos (L) || EBEP: 3 anys (MG) · 2 anys (G) · 6 mesos (L)',
        confusionWarning: 'S\'inverteixen els extrems (6a-2m vs 3a-6m); només coincideixen les greus (2 anys)!',
        topicNumber: 2
      },
      {
        concept: 'Assumptes propis TU (art. 95) vs Assumptes particulars EBEP (48.k)',
        value: 'TU art. 95: Llicència sense sou màx 6 MESOS cada 2 anys · EBEP 48.k: 6 DIES retribuïts',
        confusionWarning: '6 mesos sense cobrar ≠ 6 dies cobrant!',
        topicNumber: 2
      },
      {
        concept: 'Municipis: Bombers (Llei 5/1994) vs Comissió PC (Llei 4/1997)',
        value: 'Servei mínim bombers: > 20.000 hab. · Comissió Municipal PC obligatòria: > 50.000 hab.',
        confusionWarning: 'No creuis el 20.000 amb el 50.000!',
        topicNumber: 6
      },
      {
        concept: 'Terminis d\'investigació i urgència (Temes 1, 3, 4)',
        value: 'Decret llei EAC: 30d improrrogables · Alarma/Excepció CE: 15d / 30d · PRL paralització: 24h (impugnar inspector 3d hàbils) · Protocol assetjament: 5-15-10 dies hàbils',
        confusionWarning: 'Al Protocol d\'assetjament tots tres terminis (5-15-10) són dies HÀBILS, mai naturals.',
        topicNumber: 4
      },
      {
        concept: 'Organigrama 2026 (Decret 12/2023 + 16/2026)',
        value: '8 Regions (incl. Pirineus) · 19 Unitats Territorials · 6 Sales Territorials · 7 Unitats Prevenció',
        confusionWarning: 'Terres de l\'Ebre SÍ té Unitat de Prevenció però NO Sala (va a Tarragona); Pirineus va a Lleida en totes dues.',
        topicNumber: 7
      }
    ]
  },
  {
    id: 'temperatures-llindars',
    category: 'Temperatures i Llindars Tèrmics',
    title: 'Temperatures crítiques en incendis, materials i NRBQ',
    description:
      'Punts de fallada estructural, canvis d\'estat i límits tèrmics dels EPI.',
    items: [
      {
        concept: 'Acer estructural en incendi (Tema 24 / Tema 15)',
        value: '300 °C comença a perdre resistència · ~500–550 °C perd ~50% (temperatura crítica)',
        confusionWarning: 'El formigó pateix spalling per pressió de vapor d\'aigua a l\'interior.',
        topicNumber: 24
      },
      {
        concept: 'EPI per temperatura (Reglament UE 2016/425 · Tema 3)',
        value: 'Cat. I: riscos mínims T ≤ 50 °C · Cat. III: altes T ≥ 100 °C o baixes T ≤ -50 °C',
        confusionWarning: 'La roba de fred de la Guia INSST cobreix de -5 °C a -50 °C.',
        topicNumber: 3
      },
      {
        concept: 'Combustibles i vehicles alternatius (Tema 26)',
        value: 'GNC TPRD dispara a ~110 °C · GNL criogènic a -162 °C (risc RPT amb aigua!)',
        confusionWarning: 'En GNC no s\'aplica aigua sobre l\'ampolla per no refredar el TPRD i impedir que alliberi.',
        topicNumber: 26
      },
      {
        concept: 'Calor sensible i latent de l\'aigua (Tema 10)',
        value: 'Fusió gel: 80 kcal/kg · Escalfar 0→100 °C: 100 kcal/kg · Vaporització: 539 kcal/kg',
        confusionWarning: 'El canvi de líquid a vapor absorbeix més de 5 vegades més calor que escalfar l\'aigua de 0 a 100 °C!',
        topicNumber: 10
      }
    ]
  },
  {
    id: 'procediments-confusio',
    category: 'Procediments i Conceptes Similars',
    title: 'Parelles de conceptes que semblen iguals però són oposats',
    description:
      'Diferències conceptuals d\'alta rendibilitat a examen.',
    items: [
      {
        concept: 'Derogat vs Anul·lat (Tema 1)',
        value: 'Derogat = legislador (llei nova, cap al futur) · Anul·lat = Tribunal Constitucional (inconstitucional des de l\'origen)',
        confusionWarning: 'La STC 31/2010 va ANUL·LAR "i preferent" de l\'EAC; la Llei 26/2010 va DEROGAR l\'art. 54.2 de la Llei 13/1989.',
        topicNumber: 1
      },
      {
        concept: 'Evacuació vs Confinament (Llei 4/1997 · Tema 6)',
        value: 'L\'evacuació s\'ORDENA · El confinament es RECOMANA',
        confusionWarning: 'Previsió = saber ON és el risc (Mapa PC) vs Prevenció = evitar que passi.',
        topicNumber: 6
      },
      {
        concept: 'Alcohol en servei vs Embriaguesa (Llei 5/1994 · Tema 6)',
        value: 'Consumir alcohol en servei = Falta GREU · Embriagar-se o drogues = Falta MOLT GREU',
        confusionWarning: 'A Llei 4/1997: obstaculitzar requisa = Greu, però obstaculitzar inspecció = Molt greu!',
        topicNumber: 6
      },
      {
        concept: 'Irradiació vs Contaminació (NRBQ · Tema 27)',
        value: 'Irradiació = exposició externa (no portes el material, no contagies) · Contaminació = portes partícules damunt/dins (cal descontaminar)',
        confusionWarning: 'En contaminació química o radiològica cal descontaminació abans d\'entrar a zona freda.',
        topicNumber: 27
      },
      {
        concept: 'Trampes clàssiques Generalitat (81/21–81/24)',
        value: 'Pèrdues càrrega NO depenen de la pressió · Euroclasses NO avaluen toxicitat · Endoll CETAC 400V 4 pols NO té neutre · Parets de càrrega NO tenen àbacs · Diferencial 30 mA és complementari als contactes directes',
        confusionWarning: 'Llegeix molt bé les preguntes "Quina és INCORRECTA?": el tribunal sovint canvia una sola propietat tècnica!',
        topicNumber: 13
      },
      {
        concept: 'Vexatori vs Molest (Igualtat · Tema 4)',
        value: '"Vexatori" = Llei 19/2020 (art. 4.e) · "Molest" = Llei 17/2015 (raó de sexe) i Protocol 2023 (sexual)',
        confusionWarning: 'Inversió càrrega prova: "indicis RACIONALS i fonamentats" (19/2020) vs "indicis fonamentats" (17/2015).',
        topicNumber: 4
      }
    ]
  }
];
