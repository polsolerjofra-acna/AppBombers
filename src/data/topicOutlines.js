export const TOPIC_OUTLINES = {
  'tema-1': {
    overview: 'Visió esquemàtica de la CE 1978, l\'Estatut d\'Autonomia (LO 6/2006) i la Llei 13/1989.',
    branches: [
      {
        title: 'Constitució Espanyola (1978)',
        items: [
          { label: 'Estructura i Reformes', children: ['169 arts. (Preliminar + 10 Títols)', '3 reformes: 1992 (13.2), 2011 (135), 2024 (49 discapacitat)'] },
          { label: 'Principis i Garanties', children: ['Art. 1.1: 4 valors (llibertat, justícia, igualtat, pluralisme)', 'Art. 9.3: irretroactivitat drets INDIVIDUALS', 'Empara (53.2): art. 14 + 15–29 + 30.2'] },
          { label: 'Estats excepcionals (116) i Reforma (167 vs 168)', children: ['Alarma 15d (no suspèn drets) · Excepció 30d · Setge', '167 Ordinària (3/5) vs 168 Agreujada (2/3 + dissolució + referèndum)'] }
        ]
      },
      {
        title: 'Estatut d\'Autonomia (LO 6/2006)',
        items: [
          { label: 'Símbols i Llengua', children: ['3 símbols (Bandera, Diada, Segadors — NO escut)', 'Art. 6.1: "i preferent" ANUL·LAT (STC 31/2010)'] },
          { label: 'Competències de Bombers (132)', children: ['Exclusiva: protecció civil i incendis (132.1)', 'Executives: salvament marítim (132.3) · Nuclear: participació (132.4)'] },
          { label: 'Reforma EAC', children: ['Art. 222 (Tít. I-II, 4 passes) vs Art. 223 (resta, 3 passes)'] }
        ]
      },
      {
        title: 'Llei 13/1989 (Generalitat)',
        items: [
          { label: '5 Òrgans Superiors vs 2 Alts Càrrecs', children: ['Superiors: President, Govern, Conseller 1r, Vicepres., Consellers', 'Alts càrrecs: Secretaris Generals i Directors Generals'] },
          { label: 'Jerarquia Activa (art. 24)', children: ['Subdirecció General → Servei → Secció → Negociat', 'Circulars (art. 16): MAI potestat reglamentària'] }
        ]
      }
    ]
  },
  'tema-2': {
    overview: 'Comparativa directa Text Únic (DL 1/1997) vs EBEP (RDL 5/2015), Incompatibilitats i Disciplinari.',
    branches: [
      {
        title: 'Divergències Clau TU vs EBEP',
        items: [
          { label: 'Accés i Plantilla', children: ['Edat: 18 anys (TU) vs 16 anys (EBEP)', 'Discapacitat: fins 5% màx (TU) vs mín 7% (EBEP) · Objectiu 2%'] },
          { label: 'Retribucions i Vacances', children: ['Bàsiques: 3 al TU (sou, triennis, extres) vs 2 EBEP', 'Vacances: 1 mes (TU) vs 22 dies hàbils (EBEP)'] },
          { label: 'Situacions i Prescripció', children: ['Situacions: 8 (TU) vs 5 (EBEP)', 'Prescripció: 6a-2a-2m (TU/Decret) vs 3a-2a-6m (EBEP)'] }
        ]
      },
      {
        title: 'Permisos, Incompatibilitats i Disciplina',
        items: [
          { label: 'Permisos (48–49 EBEP)', children: ['Defunció: 3d/2d mateixa loc. · 5d/4d diferent', 'Naixement: 19 setmanes (32 monoparental) · Assumptes propis TU: 6m/2a'] },
          { label: 'Llei 21/1987 Incompatibilitats', children: ['2n lloc públic: A 30%, B 35%, C 40%, D 45%, E 50%', 'Cursos ≤ 75 h/any · Silenci negatiu'] }
        ]
      }
    ]
  },
  'tema-3': {
    overview: 'Llei 31/1995 (PRL), RD 773/1997, Reglament (UE) 2016/425 i Guia INSST.',
    branches: [
      {
        title: 'Llei 31/1995 (LPRL)',
        items: [
          { label: 'Àmbit i Principis', children: ['Art. 3.2: exclou per SITUACIÓ (greu risc/catàstrofe), no el cos', 'Art. 15: 1r Evitar → Avaluar → Origen → Col·lectiva abans que EPI (17.2)'] },
          { label: 'Paralització i Òrgans', children: ['Art. 21 vs 44: resolució 24 h (impugnar inspector 3d hàbils)', 'Comitè Seguretat i Salut: ≥ 50 treballadors, paritari, trimestral'] }
        ]
      },
      {
        title: 'EPI (RD 773/1997 i UE 2016/425)',
        items: [
          { label: 'Categories per RISC (UE 2016/425)', children: ['Cat. I: mínims (T ≤ 50 °C) · Cat. II: resta', 'Cat. III: 13 riscos mortals (ERA, altura, tensió, T ≥ 100 °C) → CE + 4 xifres'] },
          { label: 'Guia INSST (no vinculant)', children: ['Anticaigudes: màx 6 kN · Ancoratges EPI només B i E', 'No guant esquinçament ≥ 1 amb parts mòbils'] }
        ]
      }
    ]
  },
  'tema-4': {
    overview: 'Llei 19/2020 (Igualtat de tracte), Llei 17/2015 (Dones-Homes) i Protocol d\'Assetjament 2023.',
    branches: [
      {
        title: 'Les 3 Normes i Terminis',
        items: [
          { label: 'Llei 19/2020', children: ['12 motius (a–l) · 10 fòbies · Art. 21.4 perfils racials', 'Acció judicial (26.3): amb partits + autorització expressa'] },
          { label: 'Llei 17/2015', children: ['Paritat 60–40 · Plans sector públic cada 2 anys (Bombers 15.4.c)', 'STC 159/2016 anul·la arts. 33, 40, 44'] },
          { label: 'Protocol 2023', children: ['9 apartats (ratificat 28.03.2023) · OPPI avalua cada 3 anys', 'Terminis hàbils: 5d contactar → 15d informe → 10d resolució'] }
        ]
      },
      {
        title: 'Contrastos Literals Clau',
        items: [
          { label: 'Paraules Trampa', children: ['"Vexatori" (19/2020) vs "Molest" (17/2015 i Protocol)', 'Múltiple: "una dona" (només 17/2015) vs "una persona"', 'Càrrega prova: "indicis racionals i fonamentats" (19/2020) vs "fonamentats" (17/2015)'] }
        ]
      }
    ]
  },
  'tema-5': {
    overview: 'Llei 1/1998 de Política Lingüística (arts. 1–17).',
    branches: [
      {
        title: 'Capítol Preliminar (1–7, art. 7 derogat)',
        items: [
          { label: 'Pròpia vs Oficial', children: ['Pròpia (art. 2): obliga institucions', 'Oficial (art. 3): dóna drets al ciutadà i validesa jurídica'] },
          { label: 'Drets i Autoritat', children: ['Art. 4.1: dret a ésser atès és l\'únic limitat per llei', 'Art. 6: autoritat lingüística = IEC'] }
        ]
      },
      {
        title: 'Capítol I (8–17)',
        items: [
          { label: 'Administració i Selecció', children: ['Art. 9.1: cap endins obligatori / ciutadà "normalment"', 'Art. 10: notificacions en castellà cal demanar-ho', 'Art. 11: selecció (inclòs laboral) = acreditar només català'] },
          { label: 'Documents (14–17)', children: ['Art. 14: sense acord → totes dues · sense tria → català', 'Art. 15: privats qualsevol idioma (xecs almenys català)'] }
        ]
      }
    ]
  },
  'tema-6': {
    overview: 'Llei 5/1994 de Bombers (amb DL 14/2025) i Llei 4/1997 de Protecció Civil.',
    branches: [
      {
        title: 'Llei 5/1994 · Cos de Bombers',
        items: [
          { label: '4 Escales (DL 14/2025)', children: ['Superior (Inspector A) · Executiva (Sotsinspector B) · Tècnica (C1)', 'De suport (TECOR, TEOV, EPAF C2, TELOG — sense promoció)'] },
          { label: 'Autoritat i Faltes', children: ['Agent autoritat: Cos + locals (NO voluntaris ni empresa)', 'Alcohol en servei = Greu · Embriaguesa/drogues = Molt greu', 'Municipis > 20.000 hab. · Segona activitat: 3 metges'] }
        ]
      },
      {
        title: 'Llei 4/1997 · Protecció Civil',
        items: [
          { label: 'Autoritats i Mesures', children: ['Només 2 autoritats: Alcalde i Conseller (NO Govern)', 'Evacuació s\'ORDENA · Confinament es RECOMANA'] },
          { label: 'Plans i Infraccions', children: ['3 classes: Territorials, 6 Especials, Autoprotecció (revisió 4 anys)', 'Comissió Municipal > 50.000 hab. · Obstaculitzar requisa = Greu vs inspecció = Molt greu'] }
        ]
      }
    ]
  },
  'tema-7': {
    overview: 'Guàrdia i Comandament (Decret 276/2016) + Organigrama Interior/DGPEIS (Decret 12/2023 + 16/2026).',
    branches: [
      {
        title: 'Decret 276/2016 · Guàrdia',
        items: [
          { label: '4 Posicions i 5 Nivells', children: ['Nivell 1 Cap sortida (NO cal habilitació) → N2 Sotscap (només immediata)', 'N3 Cap territorial i N4 Cap operatiu (PAGI + brífings) → N5 SG Operatiu'] },
          { label: '3 Centres de Coordinació', children: ['SCB (17 funcions), SCT (determina nivell art. 22), Parcs (Cap torn)'] }
        ]
      },
      {
        title: 'Decret 12/2023 + 16/2026 · Organigrama',
        items: [
          { label: 'DGPEIS (5 SG + 1 Àrea)', children: ['SG Operativa (4 divisions), SG Tècnica (5 àrees), Contractació, Persones, Assumptes Jurídics (nova 2026)', 'Àrea Comunicació i Premsa (directa del DG)'] },
          { label: 'Territori (8-19-6-7)', children: ['8 Regions (incl. Pirineus) · 19 Unitats Territorials (inspeccionen parcs)', '6 Sales Territorials · 7 Unitats Prevenció'] }
        ]
      }
    ]
  },
  'tema-8': {
    overview: 'Teoria del foc, química de la combustió, transmissió de calor, fenòmens i agents extintors.',
    branches: [
      {
        title: 'Naturalesa i Classes de Foc',
        items: [
          { label: 'Triangle vs Tetraedre', children: ['Brases (3): Combustible + Comburent + Calor', 'Flama (4): + Reacció en cadena (radicals lliures)'] },
          { label: 'Tipus de Combustió i Classes (EN 2)', children: ['Lenta, Normal, Deflagració (<340 m/s), Detonació (>340 m/s)', 'Classes A (sòlids), B (líquids), C (gasos), D (metalls), F (olis cuina)'] }
        ]
      },
      {
        title: 'Transferència de Calor i Fenòmens',
        items: [
          { label: '3 Mecanismes', children: ['Conducció (sòlids), Convecció (gasos/fum), Radiació (ona T⁴ Stefan-Boltzmann)'] },
          { label: 'Fenòmens Crítics', children: ['Flashover (500–600 °C, 20 kW/m²) vs Backdraft (ILV + entrada O₂)', 'Boilover, Slop-over, Froth-over i BLEVE (fase gas)'] }
        ]
      },
      {
        title: 'Agents Extintors',
        items: [
          { label: 'Mecanismes i Tipus', children: ['Refredament (aigua), Sufocació (escuma/CO₂), Inhibició (pols ABC/halons)', 'Gasos tòxics: CO (200–250× Hb) + HCN (plàstics/poliuretà)'] }
        ]
      }
    ]
  },
  'tema-9': {
    overview: 'Física aplicada, trigonometria, cinemàtica, dinàmica, energia i màquines simples.',
    branches: [
      {
        title: 'Vectors, Geometria i Cinemàtica',
        items: [
          { label: 'Trigonometria i Pitàgores', children: ['h² = a² + b² (3-4-5, 7-24-25)', 'sin α = oposat/hip. · cos α = adjacent/hip.'] },
          { label: 'MRU i MRUA', children: ['km/h ↔ m/s (÷ 3,6 / × 3,6)', 'v = v₀ + a·t · Δx = v₀·t + ½·a·t² · Caiguda lliure g ≈ 9,81 m/s²'] }
        ]
      },
      {
        title: 'Dinàmica, Energia i Màquines',
        items: [
          { label: 'Lleis de Newton i Moments', children: ['F = m·a · P = m·g · 1 daN ≈ 1 kgf ≈ 10 N', 'Moment M = F·d · Equilibri: ΣF = 0 i ΣM = 0'] },
          { label: 'Màquines Simples', children: ['Palanques (1r, 2n, 3r gènere): F₁·d₁ = F₂·d₂', 'Polispasts (F/n), Pla inclinat, Cabrestant'] }
        ]
      }
    ]
  },
  'tema-10': {
    overview: 'Àtom, enllaços químics, estequiometria, lleis dels gasos i termoquímica.',
    branches: [
      {
        title: 'Estructura Atòmica i Enllaços',
        items: [
          { label: 'Àtom i Ions', children: ['Z (protons), A (protons+neutrons), Isòtops', 'Catió (+) perd e⁻ · Anió (-) guanya e⁻'] },
          { label: '4 Enllaços', children: ['Iònic (metall+no-metall), Covalent polar/apolar, Metàl·lic, Ponts d\'H'] },
          { label: 'Redox (PORC / GROC)', children: ['PORC (combustible): Perd e⁻, s\'Oxida, Reductor', 'GROC (comburent): Guanya e⁻, es Redueix, Oxidant'] }
        ]
      },
      {
        title: 'Gasos i Termoquímica',
        items: [
          { label: 'Lleis dels Gasos ("PaVo / Te")', children: ['Boyle (BTT: T=cte), Charles (CP: P=cte), Gay-Lussac (Gran Via: V=cte)', 'T(K) = °C + 273 · 1 mol CN = 22,4 L · Densitat aire = 29 g/mol'] },
          { label: 'Calor i pH', children: ['Aigua: L_fusió = 80 kcal/kg · L_vap = 539 kcal/kg', 'pH 0–7 (àcid) – 14 (bàsic)'] }
        ]
      }
    ]
  },
  'tema-11': {
    overview: 'Magnituds elèctriques, Llei d\'Ohm, Joule, circuits AC/DC, proteccions i risc elèctric.',
    branches: [
      {
        title: 'Lleis Bàsiques i Circuits',
        items: [
          { label: 'Ohm i Potència', children: ['V = I·R · P = V·I = I²·R · Energia (Wh) = V × Ah', 'Sentit bateria: Teoria (+), Realitat (-)'] },
          { label: 'Sèrie vs Paral·lel', children: ['Sèrie: R_eq = R₁+R₂ | Paral·lel: 1/R_eq = 1/R₁+1/R₂'] }
        ]
      },
      {
        title: 'AC/DC, Proteccions i Riscos',
        items: [
          { label: 'Corrent Altern (50 Hz)', children: ['Cicle 20 ms (100 canvis/s) · Mono 230 V / Trifàsic 400 V', 'Transformador només en AC (V₁/V₂ = N₁/N₂)'] },
          { label: 'Proteccions i Seguretat', children: ['Diferencial (30 mA, contactes indirectes) vs Magnetotèrmic (sobrecàrrega/curtcircuit)', 'Efectes fisiològics (30–50 mA fibril·lació) · Tensió de pas (peus junts)'] }
        ]
      }
    ]
  },
  'tema-12': {
    overview: 'Instal·lacions de Baixa/Alta Tensió, aigua freda/calenta, sanejament i gasos combustibles.',
    branches: [
      {
        title: 'Instal·lacions Elèctriques',
        items: [
          { label: '7 Elements d\'Enllaç (ordre)', children: ['1. Escomesa → 2. CGP (fusibles) → 3. LGA → 4. IGM (>2 usuaris)', '5. Comptadors (CPM si 1–2) → 6. DI → 7. Quadre interior'] },
          { label: 'Alta Tensió i Fotovoltaica', children: ['Distàncies seguretat AT · Plaques solars sempre en tensió DC de dia'] }
        ]
      },
      {
        title: 'Aigua, Sanejament i Gas',
        items: [
          { label: 'Aigua i Sanejament', children: ['Escomesa → clau de pas → comptador → grup pressió', 'Unitari vs Separat (pluvials + residuals)'] },
          { label: 'Gasos Combustibles', children: ['Gas Natural (CH₄, puja) vs GLP Propà/Butà (baixa)', 'Vàlvula d\'escomesa al carrer · Tall d\'urgència'] }
        ]
      }
    ]
  },
  'tema-13': {
    overview: 'Hidrostàtica, hidrodinàmica, pèrdues de càrrega, bombes centrífugues i instal·lacions d\'extinció.',
    branches: [
      {
        title: 'Hidrostàtica i Hidrodinàmica',
        items: [
          { label: 'Pressió i Equivalències', children: ['1 bar = 10 mca = 100 kPa ≈ 1 atm', '0,1 bar/m (~0,3 bar per planta)'] },
          { label: 'Continuïtat i Bernoulli', children: ['Q = S·v (si D/2 → v×4) · Efecte Venturi', 'Cabal en llança: doblar Q exigeix ×4 pressió'] }
        ]
      },
      {
        title: 'Bombes i Instal·lacions',
        items: [
          { label: 'Càlcul en Bomba i Aspiració', children: ['P_bomba = P_punta + ΔP_mànegues ± 0,1·h', 'Aspiració: 10,33 m teòrics / ≤ 7,5 m pràctics (cavitació)'] },
          { label: 'BIE, Columna Seca i Hidrants', children: ['BIE 25 (rígida) vs BIE 45 · Columna seca (24 m+)', 'Hidrants enterrats i de columna'] }
        ]
      }
    ]
  },
  'tema-14': {
    overview: 'Coordenades UTM, escales, corbes de nivell, orientació solar/nocturna, GNSS i COE.',
    branches: [
      {
        title: 'UTM i Cartografia',
        items: [
          { label: 'Coordenades UTM', children: ['Catalunya = Zona 31T · Datum oficial = ETRS89', 'X (6 xifres Est-Oest) · Y (7 xifres Nord-Sud)'] },
          { label: 'Escales i Corbes', children: ['1:25.000 (1 cm = 250 m) · Corba mestra cada 5', 'Ombrejat des del Nord-Oest'] }
        ]
      },
      {
        title: 'Orientació i COE',
        items: [
          { label: 'Mètodes Naturals i GNSS', children: ['Hora solar (-2h estiu / -1h hivern) · Polar (4× Ossa Major)', 'Lluna: Maresme (Est, decreix C) vs Pallars (Oest, creix D) · GNSS ≥ 4 satèl·lits'] },
          { label: 'COE (1:25.000, eq. 10 m)', children: ['Camins Primari (≥6 m), Secundari (3–5 m), Terciari (≥3 m)', 'PAIF (>200 m³, "T") · Codi SOC (5×5 km + 01–25)'] }
        ]
      }
    ]
  },
  'tema-15': {
    overview: 'Càrregues, 6 esforços mecànics, materials, fonamentacions, estructures i patologies.',
    branches: [
      {
        title: 'Esforços i Materials',
        items: [
          { label: '6 Esforços Mecànics', children: ['Tracció, Compressió, Flexió, Tallant, Torsió, Vinclament (esbeltesa)'] },
          { label: 'Conglomerants i Metalls', children: ['Guix (EX), Calç (NE), Ciment (RE) · Formigó armat (acer a tracció)', 'Acer al foc: 300 °C inicia pèrdua / 550 °C perd 50%'] }
        ]
      },
      {
        title: 'Elements Estructurals',
        items: [
          { label: 'Fonaments i Estructures', children: ['Superficials (sabates ≤ 3 m) vs Profunds (pilots > 3 m)', 'Pilars, Jàsseres, Bigues, Bovedilles (porexpan!) · Envans NO carreguen'] }
        ]
      }
    ]
  },
  'tema-16': {
    overview: 'Assistències tècniques: obertura d\'habitatges, rescat d\'animals, arbres, vessaments i sanejament.',
    branches: [
      {
        title: 'Obertures i Sanejament',
        items: [
          { label: 'Habitatges (art. 18.2 CE)', children: ['Inviolabilitat domicili: urgència vital o ordre judicial', 'Tècniques menys lesives (resbaló, cilindre, finestra AEA)'] },
          { label: 'Façanes i Cobertes', children: ['Sanejament d\'elements inestables, senyalització i perímetre'] }
        ]
      },
      {
        title: 'Motoserra, Animals i Vessaments',
        items: [
          { label: 'Tala amb Motoserra', children: ['2 vies d\'escapament a 45° enrere · Alçada tall vertical', 'Control del rebot (zona perillosa superior punta espasa) i frontissa'] },
          { label: 'Animals i Vessaments', children: ['Gats: regla 24 h · Bestiar (porcs/cavalls) immobilització', 'Vessaments: contenció i absorció (sepiolita)'] }
        ]
      }
    ]
  },
  'tema-17': {
    overview: 'Comunicacions per ràdio, xarxa RESCAT (TETRA), disciplina de ràdio i codis Z.',
    branches: [
      {
        title: 'Xarxa RESCAT i Terminals',
        items: [
          { label: 'Tecnologia i Canals', children: ['TETRA digital (apagada VHF abril 2025) · Mode TMO vs Directe DMO', 'Botó taronja d\'emergència · Canals de Servei i Tàctics'] }
        ]
      },
      {
        title: 'Disciplina de Ràdio i Codis',
        items: [
          { label: 'Normes de Transmissió', children: ['Ús PTT (esperar 1 s), regla jeràrquica +1/-1, màx 30 s', 'Escala llegibilitat 1–5 · Alfabet ICAO'] },
          { label: 'Codis Z', children: ['Z-0 a Z-9 (Z-2 sortida, Z-3 al lloc, Z-9 emergència)'] }
        ]
      }
    ]
  },
  'tema-18': {
    overview: 'Flota de vehicles d\'intervenció, bombes, vehicles especials, logística i mitjans aeris.',
    branches: [
      {
        title: 'Autobombes i Bombes',
        items: [
          { label: 'Tipus d\'Autobombes', children: ['BUP (Urbana Pesada), BRP (Rural Pesada), BUL/BRL, BNP (Nodrissa)'] },
          { label: 'Bomba Centrífuga Combinada', children: ['Baixa pressió (gran cabal) i Alta pressió (fins 40 bar)'] }
        ]
      },
      {
        title: 'Vehicles Especials i Aeris',
        items: [
          { label: 'Alçada, Rescat i Comandament', children: ['AEA (30 m), ABE (braç), FRQ (Furgó Risc Químic), Grua lleugera/pesada', 'VIR, UCP (Comandament), Ambulàncies A1/A2 · Helicòpters (bambi/dipòsit)'] }
        ]
      }
    ]
  },
  'tema-19': {
    overview: 'Conducció d\'emergència, tracció 4×4, diferencials, pendents i mecànica bàsica.',
    branches: [
      {
        title: 'Dinàmica i Seguretat Viària',
        items: [
          { label: 'Distàncies i Corbes', children: ['Distància aturada = reacció + frenada · Efecte v² en corbes (Fc = mv²/R)', 'Efecte onada en cisternes · Pendents % (100% = 45°)'] }
        ]
      },
      {
        title: 'Tracció 4×4 i Mecànica',
        items: [
          { label: 'Transmissió i Diferencials', children: ['4×2, 4×4 connectables i permanents · Reductora (marxes curtes)', 'Bloqueig de diferencials (central, davanter, posterior): mai en asfalt sec!'] }
        ]
      }
    ]
  },
  'tema-20': {
    overview: 'EPI de bombers, nivells d\'intervenció, ERA i càlcul d\'autonomia.',
    branches: [
      {
        title: 'EPI i Normativa',
        items: [
          { label: 'Certificació i Nivells', children: ['Reglament (UE) 2016/425 Cat. III → Marcatge CE + 4 xifres', 'Botes UNE-EN 15090 (F1/F2/F3) · Vestits químics Tipus 1a, 1b, 3'] }
        ]
      },
      {
        title: 'ERA (Equips Respiratoris Autònoms)',
        items: [
          { label: 'Components i Pressions', children: ['Ampolla 300 bar (6 L = 1.800 L) · Mitjana pressió 6–8 bar', 'Xiulet reserva: 55 ± 5 bar (≥ 90 dB) · Sobrepressió màscara +1,5 a +3,9 mbar'] },
          { label: 'Seguretat i Càlcul', children: ['Prohibit filtrants si O₂ < 19,5% · EN 137 Tipus 2 / EN 136 Classe 3', 'Autonomia = (P_útil × V) ÷ consum (L/min) · Caputxa de rescat'] }
        ]
      }
    ]
  },
  'tema-21': {
    overview: 'Gestió d\'emergències, cicle del risc, sistema català de protecció civil i mecanisme europeu.',
    branches: [
      {
        title: 'Cicle i Plans de Protecció Civil',
        items: [
          { label: 'Cicle i Equació del Risc', children: ['Risc = Perillositat × Vulnerabilitat (exposició)', '5 fases: Previsió, Prevenció, Planificació, Intervenció, Rehabilitació'] },
          { label: 'Plans de Catalunya', children: ['PROCICAT (Territorial), Especials (INFOCAT, INUNCAT, PLASEQCAT, TRANSCAT, SISMICAT, NEUCAT), PAM/PAU'] }
        ]
      },
      {
        title: 'Operativa i Europa (UCPM)',
        items: [
          { label: '5 Grups d\'Actuació i PLEGEM', children: ['Intervenció, Ordre, Sanitari, Logístic, Suport Tècnic'] },
          { label: 'Mecanisme Europeu (UCPM)', children: ['ERCC i ECPP (activació en 3 passos)'] }
        ]
      }
    ]
  },
  'tema-22': {
    overview: 'Sistema de Comandament (SISCOM), funcions, estructura modular i transferència.',
    branches: [
      {
        title: 'Principis i Estructura SISCOM',
        items: [
          { label: 'Comandament i Abast de Control', children: ['Unitat de comandament · Abast òptim: 3 a 7 subordinats (ideal 5)', 'Escalonament: Cap d\'Intervenció (CI) → Sectors → Subsectors / Grups'] },
          { label: 'Funcions Staff i Seccions', children: ['Seguretat, Enllaç, Informació · Operacions, Planificació, Logística, Administració'] }
        ]
      },
      {
        title: 'Infraestructures i Transferència',
        items: [
          { label: 'CCA, PCO i Transferència', children: ['CCA (Centre de Comandament Avançat) · Transferència formal amb brífing 5 punts'] }
        ]
      }
    ]
  },
  'tema-23': {
    overview: 'Prevenció bàsica d\'incendis: CTE DB-SI (SI 1–SI 6), RSCIEI, Euroclasses i instal·lacions.',
    branches: [
      {
        title: 'CTE DB-SI (SI 1 a SI 6)',
        items: [
          { label: 'Compartimentació i Evacuació', children: ['SI 1 propagació interior · SI 2 exterior (franja 1 m / EI 60–120)', 'SI 3 evacuació · SI 4 instal·lacions · SI 5 intervenció bombers · SI 6 resistència'] },
          { label: 'Criteris R-E-I i Euroclasses', children: ['R (capacitat portant), E (integritat), I (aïllament 140/180 °C)', 'Euroclasse reacció foc (ex. C-s2,d0) · Classe L / FOER'] }
        ]
      },
      {
        title: 'RSCIEI i Hidrants',
        items: [
          { label: 'Hidrant Industrial i Bombes', children: ['Separació 5–15 m façana, ≤ 40 m recorregut · 1.500–3.000 L/min a 5 bar', 'Grup bombament UNE 23500: bomba principal només aturada manual'] }
        ]
      }
    ]
  },
  'tema-24': {
    overview: 'Intervenció en incendis estructurals: tipologies, façanes A-B-C-D, lectura de fum, atac i ventilació.',
    branches: [
      {
        title: 'Edifici i Valoració Inicial',
        items: [
          { label: '6 Cares i Nomenclatura', children: ['Façanes A-B-C-D en sentit horari · Límit pràctic AEA: Planta 8', 'Fases (Foc: Actiu, Estab., Controlat, Extingit) vs Etapes (Equips: Actiu, Remat, Rereguarda)'] },
          { label: 'Lectura del Fum (4 atributs)', children: ['Volum, Velocitat (pressió), Densitat, Color · Senyals de Backdraft/Flashover'] }
        ]
      },
      {
        title: 'Extinció, Ventilació i Seguretat',
        items: [
          { label: 'Línies i Atac', children: ['Refredament gasos (<1 s / 1–5 s en O/Z/8) · Atac transicional (exterior → interior)', '5 parts línia hidràulica · Bifurcació fora de la zona calenta'] },
          { label: 'Ventilació i Seguretat', children: ['VPP (pressió positiva) vs VPN · 4 fases d\'entrada segura · Taula CACE'] }
        ]
      }
    ]
  },
  'tema-25': {
    overview: 'Incendis forestals: classificació, maniobres directes/indirectes, 3 etapes, 4 fases INFOCAT i seguretat LACES.',
    branches: [
      {
        title: 'Classificació i Comportament',
        items: [
          { label: 'Mides i Regla 30-30-30', children: ['Conat (<1 ha), IF, GIF (>500 ha) · Paradoxa de l\'extinció (99%/90%)', 'Combustibles 1h (<6 mm) · 6 Generacions d\'incendis · Indraft i Downdraft'] },
          { label: 'Escala Lf (Llargada Flama)', children: ['<1 m (eines manuals) · 1–3 m (aigua/maquinària) · 3–5 m (indirecte) · >5 m (fora capacitat)'] }
        ]
      },
      {
        title: 'Tipus de Maniobres d\'Extinció',
        items: [
          { label: 'Atac Directe (sobre la flama)', children: ['Eines manuals (ordre: Motxilla → Batefocs → Pulaski → Pala)', 'Línia d\'aigua (mànegues / autobomba) · Maquinària / Mitjans aeris'] },
          { label: 'Atac Indirecte (a distància)', children: ['Línies de defensa i tallafocs', 'Foc tècnic: Cremes d\'eixamplament i Contrafocs'] },
          { label: 'Atac Paral·lel', children: ['Línia vora el perímetre aprofitant zones segures'] }
        ]
      },
      {
        title: 'Etapes, Fases i Seguretat',
        items: [
          { label: '3 Etapes (Equips - E) vs 4 Fases (Foc - F)', children: ['Etapes: Actiu (Atac) → Remat → Rereguarda', 'Fases INFOCAT: Actiu → Estabilitzat → Controlat → Extingit'] },
          { label: 'Sectors, LACES i Atrapament', children: ['Sector 0 = Cua · Imparells Esquerra / Parells Dreta', 'LACES: Zona Segura R ≥ 4 × Lf · Protocol RAF · Situació 2 autobomba (45°–60°)'] }
        ]
      }
    ]
  },
  'tema-26': {
    overview: 'Incendis varis: vehicles convencionals, elèctrics, GNC, GNL, hidrogen i contenidors.',
    branches: [
      {
        title: 'Vehicles i Nous Combustibles',
        items: [
          { label: 'Gasolina/Gasoil vs Elèctrics', children: ['Punt inflamació gasoil vs gasolina · Elèctrics (bateria alta tensió, embalatge tèrmic)'] },
          { label: 'GNC, GNL i Hidrogen (H₂)', children: ['GNC: prohibida aigua directa (no refredar TPRD ~110 °C)', 'GNL criogènic (-162 °C, risc RPT) · H₂ (350/700 bar, flama invisible)'] }
        ]
      },
      {
        title: 'Contenidors i Mobiliari Urbà',
        items: [
          { label: 'Contenidors Soterrats i Residus', children: ['Contenidor blau (somort) vs marró/gris (risc biològic V.2)', 'Soterrats: perill acumulació gasos i projecció'] }
        ]
      }
    ]
  },
  'tema-27': {
    overview: 'Riscos NRBQ, ADR, zonatge, detecció, vestits de protecció i descontaminació.',
    branches: [
      {
        title: 'Marc, ADR i Detecció',
        items: [
          { label: 'Dades Catalunya i Classificació', children: ['3 reactors, 234 instal·lacions RADCAT, 164 Seveso', 'Irradiació (externa) vs Contaminació (partícules) · Alfa/Beta/Gamma'] },
          { label: 'ADR, Cisternes i Identificació', children: ['Secció el·líptica vs circular · Diamant NFPA 704 · Panell taronja', 'Detecció: absorció vs adsorció · Espectroscòpia Raman/FTIR'] }
        ]
      },
      {
        title: 'Intervenció, Vestits i Descontaminació',
        items: [
          { label: 'Zonatge i Vestits', children: ['Zona Calenta → Tèbia (corredor descont.) → Freda', 'Vestits EN 943-1/2 Tipus 1a (~15–20 min autonomia) · Hipoclorit 0,5%'] }
        ]
      }
    ]
  },
  'tema-28': {
    overview: 'Assistència sanitària: XABCDE, hemorràgies V.3, RCP, DEA, cremades i hipotèrmia.',
    branches: [
      {
        title: 'Valoració XABCDE i Constants',
        items: [
          { label: 'Ordre XABCDE', children: ['X (exsanguinant) → A (via aèria/cervical) → B (VOS ≤10 s) → C (pols/PA) → D (AVDN/Glasgow) → E (hipotèrmia)'] },
          { label: 'Pressions i Polsos', children: ['PA: 120/80 normal · ↑ +2/+1 (140/90) · ↓ -3/-2 (90/60)', 'Pols Radial ≥ 80–90 mmHg · Carotidi ≥ 60 mmHg'] }
        ]
      },
      {
        title: 'Suport Vital i Lesions',
        items: [
          { label: 'Hemorràgies V.3 i RCP', children: ['Compressió directa (no treure 1a gasa) → Torniquet 5–7 cm (anotar hora)', 'RCP adult 30:2 (100–120/min, 5–6 cm) · DEA només FV/TVsp'] },
          { label: 'Lesions Específiques', children: ['Cremades: Regla 9 Wallace · Base crani: prohibit taponar', 'Embarassada PLS esquerra · Hipotèrmia ≤ 35 °C · Pont Simple (3+1) / Millorat (4+1)'] }
        ]
      }
    ]
  },
  'tema-29': {
    overview: 'Incidents de Múltiples Víctimes (IMV), zonatge sanitari i Triatge START.',
    branches: [
      {
        title: 'Organització IMV',
        items: [
          { label: 'Zonatge i Desplegament', children: ['Àrea de Salvament → Àrea de Socors (PMA / Niu de Ferits) → Àrea Base'] }
        ]
      },
      {
        title: 'Triatge START (4 Colors)',
        items: [
          { label: 'Algoritme Ràpid', children: ['1. Camina? → VERD (Demorable)', '2. Respira? (obrir via aèria) → No = NEGRE · >30 rpm = VERMELL', '3. Perfusió (>2 s ompliment / sense radial) → VERMELL', '4. Estat mental (ordres senzilles) → No = VERMELL · Sí = GROC'] }
        ]
      }
    ]
  },
  'tema-30': {
    overview: 'Estructures col·lapsades, apuntalaments, recerca GREC i codis INSARAG.',
    branches: [
      {
        title: 'Apuntalaments i Distàncies',
        items: [
          { label: 'Parts i Regla 2×h', children: ['Sotapont (dalt) → Puntals (≤1 m, ~1.000 kg) → Jaç de taulons (baix)', 'Perímetre de seguretat col·lapse: 2 × alçada (2×h)'] }
        ]
      },
      {
        title: 'INSARAG i Avisos Sonors',
        items: [
          { label: 'Marcatge i Senyals', children: ['Marcatge INSARAG (estat estructura i víctimes)', 'Avisos sonors: 1 i 3 → Tot Mort (parat) · 1 i 1 → Tothom Torna (a treballar)'] }
        ]
      }
    ]
  },
  'tema-31': {
    overview: 'Salvament i recerca en medi natural terrestre: tècniques de cerca, perills i evacuació.',
    branches: [
      {
        title: 'Planificació i Tècniques de Recerca',
        items: [
          { label: 'Dades i Sectors', children: ['Punt Últim Vist (PUV) · Recerca urgent (vies/punts atracció) vs batudes', 'Perfil del perdut · Rastreig i gossos (GRAE Caní)'] }
        ]
      },
      {
        title: 'Riscos i Evacuació',
        items: [
          { label: 'Medi i Rescat', children: ['Allaus, hipotèrmia, caigudes · Evacuació amb llitera (per terra o grua helicòpter)'] }
        ]
      }
    ]
  },
  'tema-32': {
    overview: 'Accidents de mobilitat viària: seguretat, energia, maniobres d\'excarceració i vehicles especials.',
    branches: [
      {
        title: 'Seguretat i Valoració',
        items: [
          { label: 'Seguretat i Hora d\'Or', children: ['Airbags (30-60-90), eCall · Alta energia (Ec = ½mv²)', 'Hora d\'Or (10-10-20-20) · Ferrocarril TAV (>300 km/h, 25 kV) i camions (24 V)'] }
        ]
      },
      {
        title: 'Maniobres d\'Excarceració',
        items: [
          { label: 'Tècniques i Eines', children: ['Vidres laminat vs temperat · "Pelar" muntants · RAM (700 bar)', 'Maniobres: "llauna de sardines", "la catalana", "la tenda", aixecament tablier · Rautek'] }
        ]
      }
    ]
  },
  'tema-33': {
    overview: 'Rescat urbà: cordes, nusos, polispasts, SAS, caigudes i protocol d\'ascensors.',
    branches: [
      {
        title: 'Material, Ancoratges i Polispasts',
        items: [
          { label: 'Cordes, Nusos i SAS', children: ['Ànima (80%) / camisa · Nus vuit (pèrdua resistència 20–50%)', 'SAS ≥ 2 punts (angle ≤ 60°, alerta a 120°) · Polispasts 1:1, 3:1, 6:1'] },
          { label: 'Anticaigudes', children: ['Anella "A" · 2a corda en suspensió · Factor de caiguda 0 a 2'] }
        ]
      },
      {
        title: 'Rescat en Ascensors',
        items: [
          { label: 'Protocol Segur', children: ['Tall de força conservant enllumenat i anivellament · MRL (Gearless)', 'Bloqueig del buit inferior si cabina encunyada sobre replà'] }
        ]
      }
    ]
  },
  'tema-34': {
    overview: 'Inundacions, hidrologia, llindars SMC/INUNCAT, lectura de rius i rescat aquàtic.',
    branches: [
      {
        title: 'Hidrologia i Llindars SMC',
        items: [
          { label: 'Avisos i Conques', children: ['Llindars pluja SMC (20/40 mm en 30 min) · Rieres mediterrànies vs rius', 'Principi d\'Arquimedes i força d\'arrossegament de l\'aigua en vehicles'] }
        ]
      },
      {
        title: 'Rescat Aquàtic (4 Esglaons)',
        items: [
          { label: 'Ordre d\'Actuació', children: ['1. Parlar → 2. Llançar (bossa/corda) → 3. Remar (embarcació) → 4. Nedar (últim recurs amb EPI aquàtic)'] }
        ]
      }
    ]
  }
};
