export const OUTLINES_PART2 = {
  'tema-12': [
    {
      shortLabel: 'Instal·lacions Elèctriques',
      title: 'Instal·lacions Elèctriques, Ferrocarrils, Enllaç i Seguretat',
      overview:
        'Xarxa de transport i distribució, tensions ferroviàries, autoconsum solar, els 7 elements d’enllaç, quadre interior, 5 Regles d’Or i EPI dielèctric (MAN.GRAL.007 Cap. 1–2).',
      branches: [
        {
          title: 'Xarxa Elèctrica Pública i Regla dels Aïlladors',
          items: [
            {
              label: 'Generació i Transport (REE)',
              children: [
                'Generació: centrals de fons (nuclears), de regulació (hidràuliques i cicle combinat) i de punta',
                'Transport (Alta Tensió 220 kV i 400 kV): operat per REE; cable de guarda superior (parallamps a terra, sense tensió funcional)',
                'Regla visual d’aïlladors: ≈ 11 kV per disc (~20 discos ≈ 220 kV · ~36 discos ≈ 400 kV · 2–3 discos ≈ 25 kV)'
              ]
            },
            {
              label: 'Distribució (MT vs. BT)',
              children: [
                'Mitja Tensió (MT): d’1 kV a 36 kV, línies aèries de 3 cables nus sense neutre',
                'Baixa Tensió (BT): ≤ 1.000 V AC (230/400 V) i ≤ 1.500 V DC, 4 cables (3 fases + 1 neutre connectat a terra al CT)'
              ]
            }
          ]
        },
        {
          title: 'Ferrocarrils, Fotovoltaica i Grups Electrògens',
          items: [
            {
              label: 'Tensions Ferroviàries a Catalunya',
              children: [
                'Tramvia (TRAM): 750 V DC · Metro BCN i FGC: 1.500 V DC (catenària rígida/flexible i 3r carril Tren Groc)',
                'ADIF Convencional (Rodalies): 3.000 V DC (+ feeder) · AVE / TGV: 25.000 V AC (50 Hz, únic AC, arc a distància)'
              ]
            },
            {
              label: 'Autoconsum Solar i Grups Electrògens',
              children: [
                'On-grid: protecció anti-illa talla AC, però plaques i cablejat DC fins a l’inversor segueixen en tensió amb llum (1.000–1.500 V DC)',
                'Híbrides amb bateries: 48 V DC (domèstiques) fins a 800 V DC (industrials)',
                'Grups electrògens: portàtils de Bombers en esquema IT (sense diferencial) vs. fixos d’edificis amb arrencada automàtica (risc realimentació)'
              ]
            }
          ]
        },
        {
          title: 'Instal·lació d’Enllaç d’un Edifici (7 Elements)',
          items: [
            {
              label: 'Seqüència Estricte Carrer → Habitatge',
              children: [
                '1. Escomesa (companyia) → 2. CGP (Caixa General de Protecció: fusibles generals, frontera propietat) → 3. LGA',
                '4. IGM (Interruptor General de Maniobra: obligatori si > 2 usuaris, talla tot l’edifici)',
                '5. Centralització de Comptadors (o CPM si 1–2 usuaris) → 6. DI (Derivació Individual) → 7. Quadre General Interior'
              ]
            }
          ]
        },
        {
          title: 'Quadre General de Comandament i Proteccions',
          items: [
            {
              label: 'Dispositius del Quadre Interior',
              children: [
                '1. ICP (potència, integrat al comptador digital) → 2. IGA (tall general manual, sobrecàrregues i curtcircuits globals)',
                '3. Protector contra Sobretensions: transitòries (llamps → terra) vs. permanents (tall de neutre)',
                '4. ID (Diferencial, protegeix persones): 30 mA habitatge · 10 mA zones humides · 100–300 mA indústria/enllumenat',
                '5. PIAs (Magnetotèrmics): bimetàl·lic (sobrecàrregues lentes) + electroimant (curtcircuits instantanis) + 6. Presa terra PE (groc-verd)'
              ]
            }
          ]
        },
        {
          title: 'Verificació, Les 5 Regles d’Or i EPI Dielèctric',
          items: [
            {
              label: 'Aparells de Mesura i Verificació',
              children: [
                'Detector sense contacte: si pita hi ha tensió AC segur; si NO pita NO garanteix absència (no detecta DC ni cables apantallats/humits)',
                'Buscapols (només 230 V), discriminador de tensió, multímetre/tester (paral·lel) i pinça amperimètrica (abraça 1 sol conductor)'
              ]
            },
            {
              label: 'Les 5 Regles d’Or ("D–P–V–P–P") i EPI',
              children: [
                'Ordre estricte: 1. Desconnectar → 2. Prevenir realimentació (enclavar/fusibles) → 3. Verificar absència tensió → 4. Posar a terra i en curtcircuit → 5. Protegir i senyalitzar',
                'EPI dielèctric: casc pesant certificat fins a 440 V · eines aïllades fins a 1.000 V · guants de cuir/tèxtils NO són aïllants · escales fibra de vidre · perxa (no passar anell de guarda)'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Aigua i Sanejament',
      title: 'Instal·lacions d’Aigua Potable i Xarxes de Sanejament',
      overview:
        'Ordre de l’armari del comptador general, muntants d’aigua potable, tipus d’aigües residuals i xifres reglamentàries del clavegueram (MAN.GRAL.007 Cap. 3).',
      branches: [
        {
          title: 'Armari del Comptador General d’Aigua Potable',
          items: [
            {
              label: '6 Elements en Ordre de Pas de l’Aigua',
              children: [
                '1. Clau de tall general → 2. Filtre tipus Y (malla d’acer inoxidable de 25 a 50 μm) → 3. Comptador general',
                '4. Aixeta de prova → 5. Vàlvula de retenció (antiretorn cap a la xarxa pública) → 6. Clau de sortida'
              ]
            }
          ]
        },
        {
          title: 'Muntants, Purga i Pressió a l’Edifici',
          items: [
            {
              label: 'Base de Columnes i Part Superior',
              children: [
                'Base de cada muntant ascendent: 1. Vàlvula de retenció, 2. Clau de tall i 3. Aixeta de buidatge',
                'Part més alta de la columna: vàlvula purgadora d’aire (elimina bosses d’aire del circuit)'
              ]
            }
          ]
        },
        {
          title: 'Tipus d’Aigües, Xarxes i Sifons',
          items: [
            {
              label: 'Classificació i Tipus de Xarxa',
              children: [
                'Aigües negres/fecals (vàters), aigües grises (piques, dutxes, rentadores) i aigües pluvials (pluja)',
                'Xarxa unitària (un sol col·lector comú) vs. Xarxa separativa (residuals i pluvials en conductes separats)'
              ]
            },
            {
              label: 'Sifó Hidràulic',
              children: [
                'Reté un tap d’aigua permanent de 5 cm sota cada aparell per bloquejar olors i gasos de claveguera'
              ]
            }
          ]
        },
        {
          title: 'Xifres Reglamentàries del Clavegueram',
          items: [
            {
              label: 'Ventilació i Col·lectors Soterrats',
              children: [
                'Ventilació de clavegueres: sortides cada 250 m · alçada mínima ≥ 9 m · diàmetre < 20 cm (evita CH₄, H₂S i desifonament)',
                'Col·lectors soterrats: sempre PER SOTA de l’aigua potable · pendent mínim ≥ 2% · registres cada 15 m'
              ]
            },
            {
              label: 'Arquetes, Pous i Càmeres de Neteja',
              children: [
                'Arquetes de pas i sifòniques: màxim 1 col·lector d’entrada per cara · angle entre entrada i sortida > 90°',
                'Pous de registre visitables en canvis de traçat i càmeres de descàrrega/neteja a la capçalera'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Gas',
      title: 'Instal·lacions de Gas (GLP i Gas Natural), Pressions i Claus',
      overview:
        'Comportament de GLP vs. Gas Natural, escala oficial de pressions (APB a BP), materials de canonades, graus d’accessibilitat i aparells (MAN.GRAL.007 Cap. 4).',
      branches: [
        {
          title: 'GLP (Butà/Propà) vs. Gas Natural (CH₄)',
          items: [
            {
              label: 'Densitat, Acumulació i Odorització',
              children: [
                'GLP (Butà/Propà): MÉS PESANTS que l’aire → s’acumulen en soterranis i zones baixes (bombona domèstica UD-125 = 12,5 kg)',
                'Gas Natural (90–95% metà CH₄): MÉS LLEUGER que l’aire → puja cap al sostre i es ventila per dalt; odoritzat amb mercaptans (THT)'
              ]
            }
          ]
        },
        {
          title: 'Escala Oficial de Pressions ("16 – 4 – 0,4 – 0,05")',
          items: [
            {
              label: 'Transport i Distribució Primària/Secundària',
              children: [
                'Transport: Bàsica > 60 bar | Secundari 16 a 60 bar (gasoductes d’acer)',
                'APB (Alta Pressió B): > 16 fins a 45 bar · APA (Alta Pressió A): > 4 fins a 16 bar'
              ]
            },
            {
              label: 'Xarxa Urbana i Baixa Pressió Domèstica',
              children: [
                'MPB (Mitja Pressió B): > 0,4 fins a 4 bar · MPA (Mitja Pressió A): > 0,05 fins a 0,4 bar (50–400 mbar)',
                'BP (Baixa Pressió): ≤ 0,05 bar (≤ 50 mbar) · pressió final d’ús als cremadors domèstics ≈ 20 mbar (0,020 bar)'
              ]
            }
          ]
        },
        {
          title: 'Ordre de les 6 Claus de Pas i Graus d’Accessibilitat',
          items: [
            {
              label: 'Seqüència Carrer → Cremador',
              children: [
                '1. Escomesa (G1 o G2) → 2. Edifici (G2 o G3) → 3. Muntant col·lectiu (G2 o G3) → 4. Usuari (G2) → 5. Comptador → 6. Aparell (G1)'
              ]
            },
            {
              label: 'Graus 1, 2 i 3 d’Accessibilitat',
              children: [
                'Grau 1: accés directe a mà, sense armari amb pany ni escala',
                'Grau 2: dins d’armari/arqueta amb clau normalitzada, però sense necessitat d’escala',
                'Grau 3: requereix utilitzar una escala o accedir a zona privada'
              ]
            }
          ]
        },
        {
          title: 'Canonades, Tub Flexible i Aparells a Gas',
          items: [
            {
              label: 'Materials i Restriccions Constructives',
              children: [
                'Acer (alta i mitja pressió) · Polietilè (PE groc/taronja): NOMÉS xarxes enterrades exteriors, PROHIBIT dins d’edificis!',
                'Coure o acer inoxidable (vistes interiors; si creuen falsos sostres/cambres cal beina d’acer ventilada) · Tub flexible màxim ≤ 1,5 m'
              ]
            },
            {
              label: 'Evacuació de Fums i Circuits de Combustió',
              children: [
                'Conducte d’evacuació de fums obligatori en aparells de potència ≥ 4,7 kW',
                'Circuit obert (agafa O₂ del local: risc de CO sense ventilació) vs. Circuit estanc (tub concèntric a façana)'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-13': [
    {
      shortLabel: 'Hidrostàtica, Hidrodinàmica i Pèrdues',
      title: 'Hidrostàtica, Hidrodinàmica, Pèrdues de Càrrega i Pressió en Bomba',
      overview:
        'Propietats dels líquids, Stevin, Pascal, aspiració màxima i cavitació, Continuïtat, Bernoulli/Venturi, Darcy-Weisbach i càlcul de pressió en bomba (MAN.GRAL.009 Cap. 2–4).',
      branches: [
        {
          title: 'Propietats dels Líquids i Pressió',
          items: [
            {
              label: 'Constants Físiques i Equivalències',
              children: [
                'Densitat ρ: aigua dolça = 1.000 kg/m³ (1 kg/L) · aigua de mar ≈ 1.025–1.030 kg/m³',
                'Pressió de vapor Pv (ebullició): a 25 °C = 0,0316 bar · a 100 °C = 1,013 bar (1 atm)',
                'Viscositat dinàmica (Pa·s): disminueix en pujar la Tª · Tensió superficial: es redueix amb tensioactius/escumògens',
                '1 bar = 100.000 Pa = 100 kPa ≈ 1 kgf/cm² ≈ 10,2 m.c.a. (10 m.c.a. per càlcul) · P_abs = P_atm + P_rel'
              ]
            }
          ]
        },
        {
          title: 'Hidrostàtica: Stevin, Pascal i Aspiració Màxima',
          items: [
            {
              label: 'Teorema de Stevin i Principi de Pascal',
              children: [
                'Stevin: P_hidr = ρ · g · h (+1 bar per cada 10 m verticals, ≈ 0,3 bar/planta; paradoxa hidrostàtica)',
                'Pascal: P₁ = P₂ ⇒ F₁/S₁ = F₂/S₂ ⇒ F₂ = F₁·(R₂/R₁)² (base eines hidràuliques d’excarceració a 630–720 bar)'
              ]
            },
            {
              label: 'Aspiració Màxima, Altitud i Cavitació',
              children: [
                'La bomba fa el buit i és la pressió atmosfèrica exterior (1 atm = 1.013 mbar = 760 mmHg) qui empeny l’aigua cap amunt',
                'Alçada teòrica a 0 m = 10,328 m.c.a. (10,33 m) · Alçada pràctica real = 7 a 8 m · Pèrdua per altitud ≈ -0,129 m.c.a. / +100 m',
                'Cavitació: formació i implosió de bombolles de vapor si la pressió cau per sota de Pv (danya el rodet)'
              ]
            }
          ]
        },
        {
          title: 'Hidrodinàmica: Continuïtat, Bernoulli i Venturi',
          items: [
            {
              label: 'Règim de Flux i Equació de Continuïtat',
              children: [
                'Nombre de Reynolds (Re): laminar (ordenat) vs. turbulent (habitual en mànegues de bombers)',
                'Continuïtat: Q = V/t = S₁·v₁ = S₂·v₂ (1 m³/s = 1.000 L/s = 60.000 L/min) · Si D es divideix per 2, la velocitat fa × 4!'
              ]
            },
            {
              label: 'Bernoulli, Venturi i Torricelli',
              children: [
                'Bernoulli: P + ½·ρ·v² + ρ·g·h = constant · Efecte Venturi: ↓ Secció ⇒ ↑↑ Velocitat ⇒ ↓↓ Pressió (proporcionador i hidroerenjador)',
                'Velocitat de Torricelli: v = √(2·g·h) = √(2·P/ρ) (a P_L = 6 bar ≈ 34,6 m/s)'
              ]
            }
          ]
        },
        {
          title: 'Pèrdues de Càrrega (Darcy-Weisbach)',
          items: [
            {
              label: 'Factors Lineals i Singulars',
              children: [
                'Lineals/contínues (fregament parets) vs. singulars/locals (colzes, bifurcacions, reduccions, vàlvules)',
                'Darcy-Weisbach: J = f · (L/D) · (v²/2g) ∝ L · Q² / D⁵ · Si dupliques el cabal (2·Q), la pèrdua de càrrega es multiplica × 4!'
              ]
            }
          ]
        },
        {
          title: 'Mànegues en Sèrie vs. Paral·lel i Pressió en Bomba',
          items: [
            {
              label: 'Equació General de la Bomba (P_B)',
              children: [
                'P_B = P_L + ΔP_f ± ΔP_g (P_L = 6 bar estàndard · ΔP_f = (L/100)·J_100m + singulars · ΔP_g = ± h/10 bar)'
              ]
            },
            {
              label: 'Instal·lacions en Sèrie vs. Paral·lel',
              children: [
                'Sèrie: mateix cabal (Q_tot = Q₁ = Q₂) i se sumen les pèrdues de càrrega (ΔP_tot = ΔP₁ + ΔP₂)',
                'Paral·lel (2 línies bessones): mateixa pèrdua (ΔP₁ = ΔP₂), cabal es reparteix (Q/2) i la pèrdua total es divideix per 4 (ΔP_f / 4)!'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Bombes, Llançes i Escuma',
      title: 'Bombes Hidràuliques, Mànegues, Llançes, Monitors i Escuma',
      overview:
        'Classificació de bombes centrífugues i volumètriques, corbes característiques, mànegues de 4 capes, raccords, llances, monitors i dosificació d’escuma (MAN.GRAL.009 Cap. 5–6).',
      branches: [
        {
          title: 'Bombes Centrífugues (Turbomàquines)',
          items: [
            {
              label: 'Arquitectura i Funcionament',
              children: [
                'Entrada axial al rodet (obert per aigües brutes / tancat per màxim rendiment) → voluta/difusor (converteix velocitat en pressió estàtica)',
                'Multicel·lular/multietapa per alta pressió (35–40 bar) · NO és autoencebant · Permet tancar llances breument sense rebentar'
              ]
            },
            {
              label: 'Corbes Característiques i Punt de Funcionament',
              children: [
                'A rpm constants: quan augmenta el cabal (Q), disminueix la pressió (P) i augmenta la potència absorbida (N)',
                'Punt de funcionament: intersecció exacta entre la corba descendent de la bomba i la corba ascendent de la instal·lació'
              ]
            }
          ]
        },
        {
          title: 'Bombes Volumètriques i Sistemes d’Encebament',
          items: [
            {
              label: 'Rotatives vs. Alternatives',
              children: [
                'Autoencebants; cabal proporcional a les rpm i gairebé independent de la pressió; no obstruir sortida sense vàlvula de seguretat',
                'Rotatives: engranatges, lòbuls, paletes lliscants/anell líquid i peristàltica (dosificadors d’escumogen, oli i encebament)',
                'Alternatives: membrana/diafragma, pistó/èmbol i pistons axials (bomba d’encebament per buit dels BRP Scania)'
              ]
            }
          ]
        },
        {
          title: 'Mànegues d’Impulsió i Manegots d’Aspiració',
          items: [
            {
              label: 'Estructura i Taula Oficial (Regla 0,5 – 1,5 – 4 L/m)',
              children: [
                '4 capes en impulsió: recobriment intern EPDM llis → adherència → teixit polièster/poliamida → recobriment extern protector',
                'Ø 25 mm (semirígida 20/40 m): 40 bar · ≈ 0,5 L/m (10 L / 20 m) · raccord Barcelona',
                'Ø 45 mm (flexible atac, 20 m): 20 bar · ≈ 1,5 L/m (30 L / 20 m) · raccord Barcelona',
                'Ø 70 mm (flexible alimentació, 20 m): 18 bar · ≈ 4,0 L/m (77–80 L / 20 m) · raccord Barcelona',
                'Manegots rígids aspiració (2 m): Ø 110 mm camió (≈ 19 L) i Ø 80 mm motobomba (≈ 10 L) · raccord STORZ (2 ganxos)'
              ]
            }
          ]
        },
        {
          title: 'Peces d’Aigua, Llances (6 bar) i Monitors',
          items: [
            {
              label: 'Peces de la Instal·lació',
              children: [
                'Carxofa (filtre + vàlvula peu antiretorn), col·lector (2×Ø70 → 1 bomba), bifurcació (70→2×45 o 45→2×25), reducció i tallacircuits'
              ]
            },
            {
              label: 'Llances Combinades i Monitors',
              children: [
                'Llança combinada a 6 bar: doll ple d’abast, con d’atac (30°–45° per refredar gasos) i pantalla de protecció (120°)',
                'Monitor obligatori quan Q > 500 L/min (fins 2.000–4.000 L/min) · Angle d’abast màxim real = 30° a 35° (45° teòric al buit)'
              ]
            }
          ]
        },
        {
          title: 'Escuma, Tensioactius i Proporcionadors',
          items: [
            {
              label: 'Reducció de Tensió Superficial i Dosificació',
              children: [
                'Els tensioactius/escumògens trenquen la tensió superficial de l’aigua (aigua humectant) i permeten generar escuma extintora',
                'Proporcionador de línia (Z2 / Z4): aplica l’efecte Venturi per aspirar l’escumogen en el flux d’aigua',
                'Dosificadors electrònics embarcats: bombes volumètriques rotatives que regulen el % d’escumogen segons cabal'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-14': [
    {
      shortLabel: 'Cartografia, UTM i Escales',
      title: 'Projecció UTM (Zona 31T), Escales, Corbes de Nivell i SIG',
      overview:
        'Divisió UTM mundial i catalana, Datum ETRS89, lectura de coordenades X/Y, càlcul d’escales, interpretació de corbes de nivell i capes SIG (MAN.GRAL.002 Cap. 1–2 i 6).',
      branches: [
        {
          title: 'Projecció UTM i Catalunya (Zona 31T)',
          items: [
            {
              label: 'Fusos, Bandes i Datum Oficial',
              children: [
                'Projeccions cartogràfiques: planes (azimutals), còniques i cilíndriques (UTM = Universal Transversa de Mercator)',
                '60 fusos verticals de 6° (1–60 des de 180° cap a l’Est) · 20 bandes horitzontals de 8° (C a X, sense I ni O; N–X = Hemisferi Nord)',
                'Catalunya es troba ÍNTEGRAMENT a la Zona 31T (Espanya: 29, 30, 31 + 28 Canàries) · Datum oficial = ETRS89 (antic ED50 desfasat ~200 m)'
              ]
            }
          ]
        },
        {
          title: 'Coordenades UTM (X i Y) i Distàncies',
          items: [
            {
              label: 'Estructura Numèrica a Catalunya',
              children: [
                'Coordenada X (Est–Oest): sempre 6 xifres en metres (meridià central del fus = 500.000 m)',
                'Coordenada Y (Nord–Sud): sempre 7 xifres en metres (distància des de l’Equador, ex. ~4.615.000 m)',
                'Distància UTM entre dos punts: d = √(ΔX² + ΔY²)'
              ]
            }
          ]
        },
        {
          title: 'Escales Numèriques i Divisió MTN',
          items: [
            {
              label: 'Relació Mapa–Terreny i Fulls',
              children: [
                'Escala 1:E (com més gran el denominador E, més petita l’escala) · Truc: treure els 2 últims zeros → metres per 1 cm',
                '1:25.000 ⇒ 1 cm = 250 m · 1:50.000 ⇒ 1 cm = 500 m · 1:10.000 ⇒ 1 cm = 100 m',
                'Divisió MTN: 1 full 1:50.000 (codi 3 xifres) es divideix en 4 quarts 1:25.000 numerats 1, 2, 3 i 4'
              ]
            }
          ]
        },
        {
          title: 'Corbes de Nivell (Isohipses) i Relleu',
          items: [
            {
              label: 'Lectura Topogràfica i Ombrejat',
              children: [
                'Equidistància: desnivell constant entre corbes (10 m a la COE) · Corba mestra: cada 5 corbes (50 m, gruixuda i amb cota)',
                'Carena (divisòria): la V apunta cap a cotes BAIXES · Vall (tàlveg/torrent): la V apunta cap a cotes ALTES (aigües amunt)',
                'L’ombrejat del relleu simula sempre un focus de llum procedent del NORD-OEST (NO)'
              ]
            }
          ]
        },
        {
          title: 'Mapes Ràster vs. Vectorials i SIG (GIS)',
          items: [
            {
              label: 'Capes Temàtiques a Sales i Comandament',
              children: [
                'Ràster: matriu de píxels (ortofotos, Models Digitals d’Elevacions MDE/MDT) vs. Vectorial: punts, línies i polígons (no pixela en zoom)',
                'SIG/GIS (QGIS, ArcGIS): integra dades espacials amb bases alfanumèriques per calcular pendents, conques visuals i propagació'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Orientació, Lluna/Sol i COE/SOC',
      title: 'Orientació Instrumental/Natural, GNSS i Cartografia Operativa (COE/SOC)',
      overview:
        'Brúixola i azimuts, hora solar i mètode del rellotge, Polar i Lluna, GNSS/drons, especificacions de la COE, camins, PAIF i Codi SOC (MAN.GRAL.002 Cap. 3–5).',
      branches: [
        {
          title: 'Brúixola, Azimut i Triangulació',
          items: [
            {
              label: 'Conceptes Instrumentals',
              children: [
                'Declinació magnètica: diferència angular entre Nord Geogràfic i Nord Magnètic (a Catalunya < 2°)',
                'Azimut: angle horari (0° a 360°) des del Nord fins a la direcció de marxa o columna de fum',
                'Triangulació de fums: calen com a mínim 2 observadors amb azimuts creuats des de torres de guaita'
              ]
            }
          ]
        },
        {
          title: 'Orientació Diürna (Sol) i Nocturna (Polar i Lluna)',
          items: [
            {
              label: 'Hora Solar i Mètode del Rellotge',
              children: [
                'Conversió prèvia a hora solar: a l’ESTIU restar -2 hores · a l’HIVERN restar -1 hora a l’hora oficial',
                'Rellotge analògic: apuntar l’agulla petita (hores) cap al Sol → la bisectriu entre aquesta agulla i les 12 assenyala el SUD'
              ]
            },
            {
              label: 'Estrella Polar, Lluna i Indicis Naturals',
              children: [
                'Estrella Polar = NORD (4× distància guàrdies Ossa Major o bisectriu de Cassiopea)',
                'Lluna: Creixent (forma de D) = panxa cap a l’OEST (Pallars) · Minvant/decreixent (forma de C) = panxa cap a l’EST (Maresme)',
                'Indicis naturals: molsa i anells d’arbre més junts = Nord · absis romànics = Est · plaques solars = Sud'
              ]
            }
          ]
        },
        {
          title: 'Sistemes GNSS i Seguretat en Drons',
          items: [
            {
              label: 'Arquitectura GNSS i Trilateració',
              children: [
                '3 segments: Espacial (satèl·lits), Control (estacions terra) i Usuari (receptors passius: només reben senyal)',
                'Mínim 4 satèl·lits visibles per posició 3D + correcció de rellotge (3 satèl·lits només donen 2D)',
                'Constel·lacions: GPS (EUA), Galileo (UE), GLONASS (Rússia), BeiDou (Xina) + regionals QZSS i NavIC; Drons: RTH/RTL i Geofence'
              ]
            }
          ]
        },
        {
          title: 'Cartografia Operativa d’Emergències (COE) i Camins',
          items: [
            {
              label: 'Les 5 Característiques Oficials de la COE',
              children: [
                'Dissenyada per GRAF i Sala Central (base ICGC): cobertura tot Catalunya · escala 1:25.000 · equidistància 10 m · Datum ETRS89 · Codi SOC + xarxa BRP + PAIF'
              ]
            },
            {
              label: 'Classificació Oficial de Camins COE',
              children: [
                'Primari: amplada ≥ 6 m (creuen 2 BRP en qualsevol punt) → traç groc continu (marró si pavimentat)',
                'Secundari: 3 a 5 m amb sobreamples (> 5 m) cada 100–150 m (marxa enrere màx 150 m) → groc amb puntejat verd',
                'Terciari: ≥ 3 m SENSE sobreamples (1 sol sentit BRP) → alternança groc i verd fosc · No apte BRP: discontinu vermell sobre blanc',
                'Vores del vial (ferm): vores NEGRES = asfaltat/pavimentat · vores VERDES = terra/no asfaltat'
              ]
            }
          ]
        },
        {
          title: 'Punts d’Aigua (PAIF) i Codi SOC',
          items: [
            {
              label: 'Simbologia de Punts d’Aigua i PAIF',
              children: [
                'PAIF: capacitat > 200 m³ (200.000 L; inclou antics > 120 m³), apte per a camions i helicòpters',
                'Símbols: quadrat = bassa/piscina · triangle = natural · quadrat ple = dipòsit cobert · lletra "T" a sobre = càrrega helicòpter · fons groc = públic'
              ]
            },
            {
              label: 'Estructura del Codi SOC (ex. 22AP06)',
              children: [
                'Quadrant vermell de 5 × 5 km (2 números O→E + 2 lletres N→S)',
                'Subdividit en 25 seccions grises d’1 × 1 km numerades per files del 01 al 25'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-15': [
    {
      shortLabel: 'Accions, Esforços i Materials',
      title: 'Accions sobre l’Edifici, Els 6 Esforços i Materials Estructurals',
      overview:
        'Classificació de càrregues, els 6 esforços mecànics, tensions de ruptura en kg/cm², conglomerants (guix, calç, ciment) i formats de maó (MAN.GRAL.006 Cap. 1–3).',
      branches: [
        {
          title: 'Accions sobre l’Edifici i Equilibri Estàtic',
          items: [
            {
              label: 'Els 3 Grups de Càrregues',
              children: [
                'Permanents: actuen sempre amb el mateix valor (pes propi d’estructura, forjats, murs i paviments)',
                'Variables: canvien amb el temps (sobrecàrrega d’ús, pressió del vent, pes de la neu, variacions tèrmiques)',
                'Accidentals: excepcionals de curta durada i gran intensitat (incendi, explosió, impacte de vehicle, sisme) · Equilibri: ∑F = 0 i ∑M = 0'
              ]
            }
          ]
        },
        {
          title: 'Els 6 Esforços Mecànics Estructurals',
          items: [
            {
              label: 'Comportament Intern de les Peces',
              children: [
                '1. Tracció (estira/allarga: cables, tirants) · 2. Compressió (aixafa/escurça: pilars, murs)',
                '3. Flexió (biga horitzontal: compressió a la cara superior i tracció a la inferior; s’inverteix als voladissos/balcons!)',
                '4. Tallant o cisallament (lliscament transversal als extrems/recolzaments) · 5. Torsió (retorçament)',
                '6. Vinclament o pandeig (doblegament lateral sobtat d’un pilar vertical esvelt sotmès a compressió)'
              ]
            }
          ]
        },
        {
          title: 'Tensions de Ruptura (kg/cm²) i Formigó Armat',
          items: [
            {
              label: 'Resistències Oficials dels 4 Materials',
              children: [
                'Formigó en massa: tracció < 25 kg/cm² vs. compressió fins 1.000 kg/cm² → s’arma amb barres d’acer a la zona de tracció (abaix en bigues, adalt en balcons); pretensat = cables tensats prèviament',
                'Acer estructural: tracció 3.000–7.500 kg/cm² i compressió 2.800–>7.000 kg/cm² (a > 500 °C perd rigidesa i risc de vinclament!)',
                'Fusta estructural: tracció 700–900 kg/cm², compressió 400–700 kg/cm² (capa superficial de carbó protectora al foc)',
                'Fàbrica de maó: tracció < 10 kg/cm² (nul·la) vs. compressió fins 300 kg/cm² (només treballa a compressió)'
              ]
            }
          ]
        },
        {
          title: 'Conglomerants (Pasta, Morter i Formigó)',
          items: [
            {
              label: 'Mescles i Propietats (Guix, Calç i Ciment)',
              children: [
                'Pasta = conglomerant + aigua · Morter = + sorra (àrid fi) · Formigó = ciment + aigua + sorra + grava (àrid gros)',
                'Guix (aeri): EXPANSIU, baixa resistència/flexibilitat, es dissol amb aigua i oxida ferro → només revestiments i envans interiors',
                'Calç: NEUTRA (sense variació volum), resistència mitja, flexibilitat ALTA → morters i arrebossats exteriors transpirables',
                'Ciment (hidràulic): RETRACCIÓ en assecar, resistència ALTA, flexibilitat baixa → endureix fins i tot sota l’aigua'
              ]
            }
          ]
        },
        {
          title: 'Fàbrica de Maó: Cares, Dimensions i Formats',
          items: [
            {
              label: 'Geometria i Formats Català vs. Castellà',
              children: [
                '3 dimensions: Llarg (soga), Través (tizón = meitat llarg menys 1 cm junta) i Gruix (canto) · 3 cares: Pla (tabla), Cantell i Cap (testa)',
                'Format Català: 30 × 15 cm (real ≈ 29×14×6 cm) → paret 15 cm (mig peu) · mur càrrega 30 cm (1 peu)',
                'Format Castellà: 25 × 12,5 cm (real ≈ 24×11,5×5 cm) → paret 12,5 cm (mig peu) · mur càrrega 25 cm (1 peu)',
                'Envà de maó de pla (paret plana): gruix 4 a 10 cm, divisió interior no estructural'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Sistemes Estructurals i Patologies',
      title: 'Elements Estructurals, Jerarquia, Sistemes Constructius i Patologies',
      overview:
        'Fonaments superficials vs. profunds, elements verticals i horitzontals, principi de jerarquia estructural, sistemes unitari/separat/pòrtics i patologies en intervenció (MAN.GRAL.006 Cap. 4–5).',
      branches: [
        {
          title: 'Fonamentacions (Superficials vs. Profundes)',
          items: [
            {
              label: 'Classificació per Profunditat (Llindar 3 m)',
              children: [
                'Superficials o Directes (≤ 3 m): sabates aïllades, combinades o corregudes, lloses de fonamentació, encepats i bigues de lligam/centradores',
                'Profundes (> 3 m): pilots i micropilots (treballen per punta o fregament lateral), murs pantalla (soterranis profunds) i murs de contenció'
              ]
            }
          ]
        },
        {
          title: 'Elements Verticals i Horitzontals Portants',
          items: [
            {
              label: 'Portants Verticals i Horitzontals',
              children: [
                'Verticals (compressió + vinclament): murs de càrrega (20–60 cm), pilars (formigó armat, acer HEB, fusta), pantalles (vent/sisme) i pilastres',
                'Horitzontals (flexió al centre + tallant als extrems): forjats (biguetes + revoltons/bovedilles o reticulars/lloses), bigues i JÀSSERES (bigues mestres)'
              ]
            }
          ]
        },
        {
          title: 'Principi de Jerarquia Estructural ("Bi–Bi–Jà–Pi–Fo")',
          items: [
            {
              label: 'Cascada de Transmissió de Càrregues',
              children: [
                'Ordre estricte: 1. Biguetes i revoltons → 2. Bigues → 3. Jàsseres → 4. Pilars o Murs de càrrega → 5. Fonaments → 6. Terreny',
                'Regla operativa de Bombers: com més avall en la jerarquia falla un element (ex. jàssera o pilar de planta baixa), més global i catastròfic és el col·lapse en cadena'
              ]
            }
          ]
        },
        {
          title: 'Els 3 Grans Sistemes Constructius',
          items: [
            {
              label: 'Llums Petites (4–8 m): Unitari vs. Separat',
              children: [
                '1. Murs de càrrega (sistema UNITARI, fins anys 1960–70): paret tanca i aguanta alhora; estabilitat per trava en cantonades; casa de cos = 3,5 a 4,5 m entre mitgeres',
                '2. Pilars i forjats (sistema SEPARAT, des dels anys 1970): esquelet independent de la façana (murs cortina); punt crític = nus rígid pilar-forjat'
              ]
            },
            {
              label: 'Grans Llums (> 8 m): Sistema de Pòrtics',
              children: [
                '3. Naus industrials i pavellons (> 8 m): pòrtics i encavallades d’acer laminat, fusta laminada o formigó prefabricat (bigues "delta" anys 90)'
              ]
            }
          ]
        },
        {
          title: 'Patologies, Envans en Càrrega i Riscos en Incendi',
          items: [
            {
              label: 'Punts Crítics en Sinistres i Enderrocs',
              children: [
                'Envans en càrrega (4–10 cm): en edificis antics on les bigues de fusta han cedit, el sostre es recolza sobre l’envà → MAI enderrocar sense apuntalar!',
                'Acer al foc (> 500 °C): pèrdua sobtada de rigidesa i risc de vinclament en pilars o enfonsament de cobertes metàl·liques de gran llum',
                'Fallada per flexió (fissures al centre del tram) vs. tallant (fissures inclinades als extrems/recolzaments)'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-16': [
    {
      shortLabel: 'Obertura d\'Accessos i Ascensors',
      title: 'Obertura d’Accessos a Habitatges (MAN.ATXX.000) i Seguretat en Ascensors',
      overview:
        'Marc legal d’entrada a domicili (art. 18.2 CE), parts del bombí i del pany, escala de tècniques de menor a major dany i protocol de seguretat en ascensors (ref. MAN.SVXX.000 / Tema 33).',
      branches: [
        {
          title: 'Marc Legal d’Entrada en Domicili',
          items: [
            {
              label: 'Article 18.2 CE i Valoració d’Urgència',
              children: [
                'Inviolabilitat del domicili (art. 18.2 CE): cal consentiment del titular o resolució judicial, excepte flagrant delicte o estat de necessitat / força major (LO 4/2015 i Llei 5/1994)',
                'Requerir presència policial (Mossos / Policia Local) abans d’obrir, excepte emergència vital imminent (foc interior o persona inconscient visible)',
                'Prioritzar sempre la via d’accés que provoqui el MENOR DANY possible a la propietat'
              ]
            }
          ]
        },
        {
          title: 'Parts del Pany i del Cilindre (Bombí Europeu)',
          items: [
            {
              label: 'Mecànica Interna del Pany',
              children: [
                'Cilindre (bombí): cos, rotor, pitons i contrapitons amb molles, embragatge i LLEVA central (gira per moure el forrellat)',
                'Clau posada per dins sense doble embragatge: bloqueja el gir des de l’exterior amb una altra clau',
                'Pany: 1. Resbaló o picaporta (bisellat: actua si la porta s’ha tancat de cop sense voltes de clau) i 2. Forrellat o paletó (accionat amb clau)'
              ]
            }
          ]
        },
        {
          title: 'Escala de Tècniques d’Obertura d’Habitatges',
          items: [
            {
              label: 'De Menor a Major Agressivitat',
              children: [
                '1. Accés per finestra o balcó (prioritari si hi ha voltes de clau): escala extensible o AEA per finestra corredissa, oscil·lobatent o persiana',
                '2. Obertura no destructiva (resbaló): targeta/làmina de mica (radiografia), agulla o espàtula sense danys',
                '3. Obertura destructiva del bombí: trencament amb extractor ("partidor"), trepat de pitons (broca cobalt) o cargol d’extracció → girar lleva interior',
                '4. Obertura forçada pesada (només emergència vital imminent): Halligan, mall, separador hidràulic o serra de sabre/radial'
              ]
            }
          ]
        },
        {
          title: 'Protocol de Seguretat en Ascensors (Ref. Tema 33 / MAN.SVXX.000)',
          items: [
            {
              label: 'Tipus d’Ascensors i Maniobra de Socors',
              children: [
                'Electromecànic d’adherència: contrapès = cabina buida + 50% càrrega màxima (amb 1 persona dins, en obrir fre la cabina PUJA!)',
                'Hidràulic (pistó d’oli): amb la vàlvula manual vermella d’emergència NOMÉS pot BAIXAR per gravetat (mai pujar sense corrent)',
                'MRL (Gearless sense cambra de màquines): botonera elèctrica de socors al quadre de replà amb bateria SAI'
              ]
            },
            {
              label: 'Regla d’Or: Mínim 2 de les 3 Sèries Elèctriques',
              children: [
                'Abans d’accedir al forat, fossat o sostre de cabina (i tallada la força general), cal obrir com a mínim 2 DE LES 3 sèries:',
                'Sèrie 1: obertura i bloqueig de porta exterior de planta (clau triangular) · Sèrie 2: botó STOP del fossat · Sèrie 3: botó STOP del sostre de cabina'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Animals, Eixams i Altres Assistències',
      title: 'Intervencions amb Animals, Eixams, Motoserra (AGO) i Altres Assistències',
      overview:
        'Protocols per espècies animals i himenòpters, mecànica i zonatge de seguretat amb motoserra (AGO), sanejament de façanes, alarmes i neteja de calçada (MAN.ATXX.000 Cap. 2, 3 i 5).',
      branches: [
        {
          title: 'Rescat d’Animals Domèstics i de Granja',
          items: [
            {
              label: 'Gossos, Gats, Suids, Òvids, Èquids i Bòvids',
              children: [
                'Captura física (perxa, xarxa, mantes) vs. química (només personal veterinari qualificat)',
                'Gossos: aproximació lateral sense mirar als ulls, perxa/morrió cinta (GPP en binomi) · Gats: manta (foscor calma) i REGLA 24 HORES abans d’activar rescat en alçada sense perill imminent',
                'Porcs/senglars: lligam al MORRO (maxil·lar superior) · Ovelles/cabres: coll/barbeta i gropa (MAI llana ni banyes)',
                'Cavalls/vaques: tapar ulls, cintes amples sota tòrax i abdomen (PROHIBIT hissar per coll, potes o cua; evitar part posterior)'
              ]
            }
          ]
        },
        {
          title: 'Fauna Salvatge, Aus, Rèptils i Eixams (Himenòpters)',
          items: [
            {
              label: 'Manipulació Específica i Contenció',
              children: [
                'Fauna salvatge: minimitzar sorolls/llums i cobrir el cap per evitar miopatia de captura (coordinar amb Agents Rurals)',
                'Aus: manta lleugera, subjectar ales plegades, bec i urpes · Serps: AUTÒCTONA → sac de roba lligat vs. EXÒTICA/VERINOSA → recipient rígid tancat!',
                'Abelles (Apis mellifera, protegides) i vespes: EPI complet apicultor, actuar al capvespre o DE NIT; recollir l’eixam en caixa amb la reina (no insecticida, a diferència de Vespa velutina en risc)'
              ]
            }
          ]
        },
        {
          title: 'Motoserra: Cadena, Seguretat i EPI',
          items: [
            {
              label: 'Paràmetres de Cadena i Elements Actius',
              children: [
                'Pas (Pitch): distància entre 3 reblons ÷ 2, en POLZADES (3/8", 0.325", 0.404") · Galga: gruix baula motriu al rail, en MIL·LÍMETRES (1,3–1,6 mm)',
                '3 tipus de baules: motriu, unió i dent de tall (+ limitador de profunditat)',
                'Fre de cadena (manual o automàtic per inèrcia en rebot/kickback), captador de cadena i fiador d’accelerador',
                'EPI específic: casc amb pantalla i orelletes, ulleres, MASCARETA FFP3 obligatòria, guants, pantalons/zahones i botes anticall'
              ]
            }
          ]
        },
        {
          title: 'Abatiment d’Arbres (AGO) i Tècniques de Tall',
          items: [
            {
              label: 'Zonatge de Seguretat i Tècnica d’Abatiment',
              children: [
                'Zona A: radi = 2,5 × alçada de l’arbre (només el binomi) · Zona B: radi = 2 m al voltant de l’operador (NOMÉS el motoserrista)',
                'Entall de direcció (~45°, profunditat 1/4–1/3 Ø) + Frontissa = 10% Ø (guia la caiguda, MAI tallar del tot!) + 2 vies d’escapament a 45° cap enrere',
                'Arbre tensat: tall vertical a 1 m de terra · Tall horitzontal: 1r tall costat Compressió (1/3 Ø) → 2n tall costat Tracció (2/3 Ø)'
              ]
            }
          ]
        },
        {
          title: 'Altres Assistències (Alarmes, Façanes i Calçada)',
          items: [
            {
              label: 'Protocols Operatius del Capítol 5',
              children: [
                'Desconnexió d’alarmes: verificar absència d’incendi/intrusió amb policia, protecció auditiva obligatòria, desconnectar bateria i alimentació',
                'Sanejament de façanes: balisament vertical de caiguda; cistella de l’AEA sempre PER SOBRE o al LATERAL de l’element inestable (MAI a sota!)',
                'Neteja de calçada: absorció d’olis/hidrocarburs amb SEPIOLITA i recollida mecànica (PROHIBIT aigua a pressió cap al clavegueram!)'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-17': [
    {
      shortLabel: 'Comunicacions RESCAT i Protocol',
      title: 'Comunicacions per Ràdio, Xarxa RESCAT (TETRA) i Protocol Operatiu',
      overview:
        'Transició analògic-digital (abril 2025), ús del PTT, disciplina jeràrquica (+1/-1), alfabet ICAO i escala 1–5, 4 canals d’emergència, modes TETRA (TMO/DMO/Gateway/Repetidor) i Codis ZULU (MAN.COMU.000).',
      branches: [
        {
          title: 'Evolució Tecnològica, Modes i Ús del PTT',
          items: [
            {
              label: 'Apagada VHF i Fonaments de Transmissió',
              children: [
                'Apagada definitiva de la xarxa analògica VHF: ABRIL DE 2025 → migració total a xarxa digital TETRA RESCAT integrada amb GPS/SIG (ArcGIS)',
                'Modes: Simplex (DMO, una freqüència per torns) i Semidúplex (TMO amb estació base)',
                'PTT (Push-To-Talk): micròfon a 2–3 cm de la boca, prémer i esperar 1–2 segons abans de parlar (assignació de canal TETRA), to normal sense cridar'
              ]
            }
          ]
        },
        {
          title: 'Disciplina, Prioritats i Estructura de Trucada',
          items: [
            {
              label: 'Jerarquia, Ordre de Crida i Temporització',
              children: [
                'Regla jeràrquica (+1 / -1): comunicació només amb 1 nivell superior (+1) o 1 nivell inferior (-1)',
                'Prioritat: 1r Emergència / seguretat vital (SOS / Codi Vermell) → 2n Operatius urgents → 3r Rutinaris',
                'Ordre estricte de crida: sempre "RECEPTOR de EMISSOR" · Màxim 30 segons en "Espereu" abans de tornar a interpel·lar'
              ]
            },
            {
              label: 'Escala de Qualitat (1–5) i Alfabet ICAO',
              children: [
                'Qualitat de recepció: 1 Il·legible · 2 Molta dificultat · 3 Certa dificultat · 4 Llegible · 5 Perfectament llegible',
                'Alfabet fonètic internacional ICAO (Alfa–Zulu) i números dígit a dígit (0 Zero – 9 Nou)'
              ]
            }
          ]
        },
        {
          title: 'Arquitectura dels 4 Canals en Gran Emergència',
          items: [
            {
              label: 'Distribució Operativa TMO / DMO',
              children: [
                '1. Canal de Trànsit / Despatx (TMO): Sala de Control Territorial (SCT) ↔ vehicles en ruta (Z-2, Z-4, Z-5/Z-6)',
                '2. Canal de Servei / Comandament (TMO): Cap d’Intervenció / CCA ↔ Caps de Sector i SCT',
                '3. Canal de Sector / Tàctic (DMO o TMO dedicat): Cap de Sector ↔ dotacions del seu sector',
                '4. Canal Directe (DMO punt a punt): comunicació terminal a terminal en binomis d’interior, soterranis o túnels'
              ]
            }
          ]
        },
        {
          title: 'Xarxa RESCAT: Xifres i Funcions del Terminal',
          items: [
            {
              label: 'Capacitat, Cobertura i Tecles Clau',
              children: [
                '57.000 usuaris i 37.000 terminals operatius (Bombers, Mossos, SEM, ADF, Agents Rurals, Protecció Civil)',
                '317 estacions base (TBS) + 27 extensions · 98,5% de cobertura territorial (+ estacions mòbils transportables)',
                'Tecla "0" premuda 5 segons → mostra coordenades GPS en pantalla · Missatges SDS: màxim 120 caràcters alfanumèrics',
                'Botó taronja d’emergència: activa trucada SOS prioritària, escolta ambiental en calent i envia posició GPS a la SCT'
              ]
            }
          ]
        },
        {
          title: 'Els 4 Modes TETRA (TMO, DMO, Gateway i Repetidor)',
          items: [
            {
              label: 'Enllaços i Ampliació de Cobertura',
              children: [
                '1. TMO (Trunked Mode Operation): comunicació a través de les estacions base (TBS) de la xarxa RESCAT',
                '2. DMO (Direct Mode Operation): comunicació directa terminal-terminal sense xarxa (garantit dins d’edificis/túnels)',
                '3. Pont de ràdio / Gateway (Passarel·la): l’emissora mòbil del camió enllaça els portàtils en DMO amb la xarxa troncal TMO',
                '4. Mode Repetidor (DMO Repeater): rep DMO i reemet en DMO (DMO → DMO) per ampliar abast salvant obstacles sense TMO'
              ]
            }
          ]
        },
        {
          title: 'Taula Completa dels Codis ZULU (Z-0 a Z-11)',
          items: [
            {
              label: 'Seqüència Operativa i Estats Oficials',
              children: [
                'Z-0 Rebut / Assabentat · Z-1 Disponible al parc · Z-2 Sortida cap al servei · Z-3 Urgència ràdio (demana parlar amb Sala)',
                'Z-4 Arribada al lloc ("En lloc") · Z-5 Retorn al parc DISPONIBLE · Z-6 Retorn al parc NO DISPONIBLE (aigua/ERA/avaria/contaminació)',
                'Z-7 Arribada al parc · Z-8 Fora de servei · Z-9 Comissió de servei (no urgent) · Z-10 / Z-11 Estats auxiliars SIG',
                'Seqüència cronològica estàndard: Z-0 → Z-2 → Z-4 → Z-5/Z-6 → Z-7'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-18': [
    {
      shortLabel: 'Vehicles X.YY.ZZ i Tipologia',
      title: 'Vehicles d’Intervenció: Codificació X.YY.ZZ, Tipologia i Mitjans Aeris',
      overview:
        'Sistema d’identificació numèrica de 5 xifres, autobombes (BUL, BUP, BRP, BNP), vehicles d’alçada/grues/furgons, sanitaris (RD 836/2012), comandament, mitjans aeris i revisió diària (MAN.EQIP.000).',
      branches: [
        {
          title: 'Codificació X.YY.ZZ i Revisió Diària',
          items: [
            {
              label: 'Estructura de 5 Xifres',
              children: [
                'X (1 dígit) = Regió d’Emergències · YY (2 dígits) = Parc de Bombers · ZZ (2 dígits) = Tipus funcional i ordre del vehicle (ex. 3.20.11)'
              ]
            },
            {
              label: 'Revisió Diària al Canvi de Torn',
              children: [
                'Nivells (combustible, oli, refrigerant, AdBlue, cisterna i escumogen plens), pneumàtics i circuit de frens d’aire',
                'Engegada motor i connexió PTO de bomba, prioritaris V-1 i acústics, emissora RESCAT i inventari complet (ERA a 300 bar)'
              ]
            }
          ]
        },
        {
          title: 'Vehicles Autobomba (BUL, BUP, BRP, BNP)',
          items: [
            {
              label: 'Capacitats, Xassís i Bomba Combinada',
              children: [
                'BUL (Bomba Urbana Lleugera): 1.000–2.000 L · 4×2 compacte per a nuclis històrics i carrers estrets (cabina doble 5–6 places)',
                'BUP (Bomba Urbana Pesant): > 3.000 L (3.000–4.000 L + escumogen) · 4×2 urbà/carretera · excarceració, ERA i bomba combinada (BP 10–15 bar / AP 35–40 bar)',
                'BRP (Bomba Rural Pesant): ~3.000–3.500 L · 4×4 amb reductora i bloqueig diferencials · ruixadors d’autoprotecció amb dipòsit propi (~300–500 L)',
                'BNP (Bomba Nodrissa Pesant): ≥ 8.000 L (8.000–12.000 L) · 2–3 eixos · abastament massiu d’aigua (cabina simple 2–3 places)'
              ]
            }
          ]
        },
        {
          title: 'Vehicles Especials: Alçada, Grues i Furgons',
          items: [
            {
              label: 'Alçada (AEA/ABA) i Grues de Rescat',
              children: [
                'AEA (Autoescala Automàtica) / ABA (Autobraç Articulat): abast 20 a 42 m (habitual = 30 m ≈ Planta 8), 4 estabilitzadors hidràulics, comandament torreta/cistella',
                'Grua Pesada (camions, autobusos, vagons) vs. Grua Lleugera (rescat d’animals pesants en pous i càrregues mitjanes)'
              ]
            },
            {
              label: 'Furgons Especialitzats (FSV, FRQ, FRA)',
              children: [
                'FSV (Furgó de Salvaments Varis, sense cisterna): apuntalaments, achique, generadors, il·luminació i rescat urbà',
                'FRQ (Furgó de Risc Químic / NRBQ): vestits hermètics Tipus 1 (EN 943), multigas, coixins taponament, bombes ATEX i descontaminació',
                'Altres furgons/contenidors de suport: FRA (Rescat Aquàtic), GRAE Muntanya/Subaquàtic i GRIT'
              ]
            }
          ]
        },
        {
          title: 'Vehicles Sanitaris (RD 836/2012)',
          items: [
            {
              label: 'Ambulàncies No Assistencials vs. Assistencials i VIR',
              children: [
                'Classe A1 (No assistencial individual): transport en llitera sense assistència tècnica en ruta (1 pacient)',
                'Classe A2 (No assistencial col·lectiva): transport conjunt de diversos pacients sense urgència vital ni infecció',
                'Classe B (Assistencial SVB): Suport Vital Bàsic · Classe C (Assistencial SVA): Suport Vital Avançat (UVI mòbil)',
                'VIR (Vehicle d’Intervenció Ràpida): vehicle lleuger amb equip mèdic/equipament SVA, NO pot traslladar pacients en llitera'
              ]
            }
          ]
        },
        {
          title: 'Vehicles de Comandament i Logístics',
          items: [
            {
              label: 'Suport al CCA i Transport de Personal',
              children: [
                'UCL (Unitat de Comandament Lleugera): SUV / 4×4 ràpid del cap de guàrdia per valoració i CCA bàsic',
                'UCM (Unitat de Comandament Mitjana): furgó amb taula de treball, múltiples RESCAT i pantalles SIG',
                'UCP (Unitat de Comandament Pesant): camió/mòdul desplegable amb sala crisi, meteo, servidors GIS i satèl·lit (GIF/PLASEQCAT)',
                'UPC (Unitat de Personal i Càrrega): pick-up 4×4 o furgó mixt per a relleus, GRAF, EPAF i avituallament'
              ]
            }
          ]
        },
        {
          title: 'Mitjans Aeris (MAER): Helicòpters i Avions',
          items: [
            {
              label: 'Capacitats d’Extinció i Funcions Operatives',
              children: [
                'Helicòpters (Comandament, Rescat i Bombarders): 500 a 1.500 litres (helibalde Bambi Bucket o dipòsit ventral amb snorkel); transport GRAF/GRAE i grua',
                'Avions d’extinció: 3.000 a 6.000 litres → AVA de càrrega en terra (~3.100 L amb retardant) i Amfibis Foca/Canadair (~5.500–6.000 L carregant en mar/pantà)'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-19': [
    {
      shortLabel: 'Conducció d\'Emergència i Seguretat',
      title: 'Conducció d’Emergència, Clima Advers i Seguretat Viària UE',
      overview:
        'Prioritat de pas i excepció d’autòlisi, protocols en boira/pluja/neu/vent, ergonometria i testimonis de cabina, i anys d’obligatorietat UE (MAN.EQIP.002 Cap. 1–4 i 6).',
      branches: [
        {
          title: 'Prioritat de Pas i Excepció d’Autòlisi',
          items: [
            {
              label: 'Normativa d’Urgència i Responsabilitat',
              children: [
                'Prioritat de pas només amb activació SIMULTÀNIA de senyals lluminosos blaus (V-1) i acústics (sirena); només lluminosos excepcionalment sense perill a tercers',
                'El conductor manté sempre la responsabilitat sobre la seguretat viària',
                'Excepció en temptatives d’AUTÒLISI (Cap. 3.2): desactivar sirena i llums en el tram final d’aproximació per no incrementar l’estrès de la víctima'
              ]
            }
          ]
        },
        {
          title: 'Conducció en Situacions Adverses',
          items: [
            {
              label: 'Pluja, Boira, Neu/Gel, Vent i Pistes',
              children: [
                'Pluja intensa: augmentar distància, evitar frenades brusques (aquaplaning) i assecar frens en sortir de bassals profunds',
                'Boira densa (art. 106): llums curts (encreuament) + antiboira · EVITAR llums llargs (es reflecteixen i enlluernen)',
                'Neu i gel (< 7 °C): pèrdua d’adherència per sota de 7 °C; marxes llargues (2a/3a); cadenes a l’eix motriu; velocitat màxima 40 a 50 km/h',
                'Vent lateral: corregir efecte pantalla en avançaments/túnels · Pistes forestals: activar 4×4, reductora i bloquejos ABANS del tram complicat'
              ]
            }
          ]
        },
        {
          title: 'Dates d’Obligatorietat de Seguretat a la UE',
          items: [
            {
              label: 'Activa, Passiva i Terciària (2004–2018)',
              children: [
                '2004 — ABS (Seguretat Activa): evita el bloqueig de rodes en frenada màxima per conservar la direcció',
                '2006 — Airbags (Seguretat Passiva): actuen conjuntament amb cinturó i pretensors pirotècnics',
                '2014 — ESP (Seguretat Activa): frena selectivament cada roda per corregir subviratge i sobreviratge',
                '2018 — eCall 112 (Seguretat Terciària): trucada automàtica d’emergència amb enviament de coordenades GPS'
              ]
            }
          ]
        },
        {
          title: 'Ergonomia de Cabina i Testigos del Quadre',
          items: [
            {
              label: 'Normes de Conducció Segura en Bombers',
              children: [
                'Posició de les mans al volant a "les 9 i les 3" · Prohibit portar taps auditius conduint',
                'Cinturó cordat sempre en marxa (prohibit descordar-se’l per vestir-se la jaqueta o l’ERA dins la cabina)',
                'Quadre d’instruments: testimoni TARONJA = avís / precaució / revisió · testimoni VERMELL = aturar el vehicle immediatament'
              ]
            }
          ]
        },
        {
          title: 'Dinàmica de Vehicles Pesants i Frenada',
          items: [
            {
              label: 'Centre de Gravetat i Fre Motor',
              children: [
                'Centre de gravetat elevat en cisternes (efecte onada / balanceig) i AEA exigeix velocitat moderada en corbes',
                'Combinació de fre motor / retardador en baixades llargues per evitar l’escalfament i pèrdua d’eficàcia dels frens pneumàtics'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Tracció 4x4, Diferencials i Mecànica',
      title: 'Cadena Cinemàtica, Caixa Transfer, Bloqueig de Diferencials i Angles TT',
      overview:
        'Ordre de la cadena cinemàtica, suspensió i PTO, maniobres 2H/4H/4L, seqüència obligatòria dels 3 diferencials i angles tot terreny d’un BUP (MAN.EQIP.002 Cap. 5).',
      branches: [
        {
          title: 'Cadena Cinemàtica (Ordre Exacte)',
          items: [
            {
              label: 'Del Motor a les Rodes',
              children: [
                '1. Motor → 2. Embragatge → 3. Caixa de canvis → 4. Caixa de transferència (reparteix parell i allotja la reductora)',
                '5. Arbres de transmissió (cardans) → 6. Pont diferencial (corona, pinyó d’atac, satèl·lits i planetaris) → 7. Paliers (semieixos) → 8. Rodes'
              ]
            }
          ]
        },
        {
          title: 'Suspensió, Frens i Presa de Força (PTO)',
          items: [
            {
              label: 'Elements de Xassís Pesant',
              children: [
                'Suspensió de camions: molls de fulla (ballestes) + amortidors + barra estabilitzadora',
                'Presa de Força (PTO): es connecta trepitjant l’embragatge; acobla el motor a la bomba centrífuga d’aigua o a la bomba hidràulica de l’AEA'
              ]
            }
          ]
        },
        {
          title: 'Caixa de Transferència i Reductora (4H / 4L)',
          items: [
            {
              label: 'Maniobres i Velocitats Límits',
              children: [
                '2H → 4H (4×2 a 4×4 llargues): es pot fer EN MARXA a < 40 km/h, en línia recta i sense accelerar bruscament',
                '4H → 2H: es pot desconnectar en marxa a velocitat moderada en línia recta',
                '4H ↔ 4L (Reductora): OBLIGATORI amb el vehicle TOTALMENT ATURAT (0 km/h), embragatge o en PUNT MORT (N)!',
                'Efecte de la reductora (4L): redueix la velocitat a la meitat i MULTIPLICA el parell de força i la retenció del fre motor'
              ]
            }
          ]
        },
        {
          title: 'Bloqueig dels 3 Diferencials (Ordre i Velocitats)',
          items: [
            {
              label: 'Funció i Seqüència Obligatòria en 4×4 Permanent',
              children: [
                'Un diferencial obert envia tot el gir a la roda amb MENYS adherència (patina); el bloqueig solidaritza els semieixos a mateixes rpm',
                'Ordre estricte de bloqueig: 1r Central/longitudinal (≤ 40 km/h) → 2n Posterior (≤ 5 km/h) → 3r Anterior (≤ 5 km/h)',
                'El bloqueig anterior impedeix girar la direcció! · Desbloqueig en ordre INVERS (1r Anterior → 2n Posterior → 3r Central)',
                'PROHIBIT circular amb diferencials bloquejats sobre asfalt o ferm adherent (trenca paliers i transmissió!)'
              ]
            }
          ]
        },
        {
          title: 'Angles Tot Terreny (TT) d’un Camió BUP',
          items: [
            {
              label: 'Geometria d’Atac, Sortida i Ventral',
              children: [
                'Angle d’Atac (frontal): ≈ 13° · Angle de Sortida (posterior): ≈ 12°',
                'Angle Ventral: angle sota la panxa entre els dos eixos per superar crestes i canvis de rasant sense encallar'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-20': [
    {
      shortLabel: 'EPIs d\'Intervenció',
      title: 'EPIs d’Intervenció: Normativa, UNE-EN, Vestits Químics i Descontaminació',
      overview:
        'Llei 31/1995, RD 773/1997 i Reglament (UE) 2016/425 (Categories I–III), normes UNE-EN de cada peça d’EPI, vestits químics Tipus 1–6 i els 3 nivells de descontaminació (MAN.SEGU.000 Cap. 1–2 i 4).',
      branches: [
        {
          title: 'Marc Normatiu i Categories d’EPI (UE 2016/425)',
          items: [
            {
              label: 'Jerarquia Preventiva i 3 Categories',
              children: [
                'Llei 31/1995 (LPRL) i RD 773/1997: l’EPI és l’ÚLTIMA barrera quan no s’ha pogut eliminar el risc ni controlar col·lectivament',
                'Cat. I (riscos mínims → CE simple) · Cat. II (riscos intermedis → CE examen tipus) · Cat. III (riscos MORTALS/irreversibles → CE + 4 dígits organisme notificat: tots els EPI principals de bombers)'
              ]
            }
          ]
        },
        {
          title: 'Normes UNE-EN de Roba, Cascs, Botes i Guants',
          items: [
            {
              label: 'Roba de Foc i Cascs',
              children: [
                'Estructural pesant: UNE-EN 469 (4 capes; Bombers usa Nivell 2 en 4 índexs: Xf flama, Xr radiant, Y impermeabilitat, Z vapor/transpirabilitat)',
                'Forestal / rescat lleuger: UNE-EN 15614 / ISO 15384 (monocapa ignífuga molt transpirable)',
                'Cascs: UNE-EN 443 (estructural integral Tipus B) · UNE-EN 16471 (forestal) · UNE-EN 16473 (rescat tècnic)'
              ]
            },
            {
              label: 'Botes, Guants, Sotacasc i Alta Visibilitat',
              children: [
                'Botes (UNE-EN 15090): F1 (exterior/forestal) · F2 (estructural/rescat; F2A antiestàtica, F2I elèctrica) · F3 (risc químic)',
                'Guants foc: UNE-EN 659 (mecànics EN 388) · Sotacasc: UNE-EN 13911 · Alta visibilitat: UNE-EN ISO 20471'
              ]
            }
          ]
        },
        {
          title: 'Vestits de Protecció Química (Tipus 1 a Tipus 6)',
          items: [
            {
              label: 'Classificació Europea per Estat del Tòxic',
              children: [
                'Tipus 1 (EN 943, hermètic a GASOS, pressió positiva): 1a (ERA dins encapsulat), 1b (ERA fora), 1c (línia aire), 1-ET (emergències)',
                'Tipus 2 (EN 943-1, no hermètic gasos, sobrepressió contínua) · Tipus 3 (EN 14605, raigs líquid a pressió)',
                'Tipus 4 (EN 14605, líquids polvoritzats/esprai) · Tipus 5 (ISO 13982-1, partícules sòlides/amiant) · Tipus 6 (EN 13034, esquitxades lleugeres)'
              ]
            }
          ]
        },
        {
          title: 'Equips Filtrants vs. Aïllants (Llindar 19,5% O₂)',
          items: [
            {
              label: 'Límits d’Ús Segur',
              children: [
                'Filtrants (FFP1, FFP2, FFP3 i filtres de gasos): depenen de l’atmosfera ambient',
                'PROHIBITS en incendis en espais tancats, amb tòxic desconegut/molt concentrat o quan O₂ < 19,5% (obligatori ERA!)'
              ]
            }
          ]
        },
        {
          title: 'Gestió de Contaminants i 3 Nivells de Descontaminació',
          items: [
            {
              label: 'Risc Cancerigen i Protocol Anti-Contaminació Creuada',
              children: [
                'Contaminants (HAP, benzè, dioxines, amiant): via inhalatòria i absorció DÈRMICA accelerada per calor (coll, engonals)',
                'Nivell 1 — IN SITU: raspallat/aigua baixa pressió amb ERA o FFP3 posat, bosses estanques al cofre (PROHIBIT entrar EPI bruts a cabina!), tovalloletes',
                'Nivell 2 — A PARC (zona bruta): dutxa immediata ("dins la 1a hora") i rentat d’eines/casc/botes/espatllera',
                'Nivell 3 — AVANÇADA: bugaderia industrial especialitzada (desinfecció tèrmica/química, re-impregnació hidròfuga, revisió costures)'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Equips ERA',
      title: 'Equips Respiratoris Autònoms (ERA): Parts, Pressions, Alarmes i Càlcul',
      overview:
        'Arquitectura de l’ERA (EN 137 / EN 136), etapes de pressió i sobrepressió positiva, balisa i xiulet, Home Mort (PASS), caputxa de rescat i càlcul d’autonomia amb reserva del 25% (MAN.SEGU.000 Cap. 3).',
      branches: [
        {
          title: 'Normativa, Components i Sobrepressió Positiva',
          items: [
            {
              label: 'Circuit Obert (EN 137 Tipus 2 i EN 136 Classe 3)',
              children: [
                '5 parts: 1. Ampolla (6,8 L composite o 6 L acer a 300 bar) · 2. Espatllera i arnès · 3. Manoreductor (1a etapa) · 4. Pulmobanda (2a etapa) + Màscara EN 136 Cl. 3 · 5. Control/manòmetre/xiulet/PASS',
                'Sobrepressió en màscara (+1,5 a +3,9 mbar): garanteix que davant una petita fuita surti aire net i MAI entri fum tòxic'
              ]
            }
          ]
        },
        {
          title: 'Etapes de Pressió, Balisa i Xiulet de Reserva',
          items: [
            {
              label: 'Escala de Pressions i Llindars d’Avís',
              children: [
                'Alta pressió: 300 bar · Mitjana pressió (1a etapa): 6–8 bar constants (vàlvula seguretat ~11–12 bar) · Baixa pressió: +1,5 a +3,9 mbar',
                'Balisa electrònica: > 170 bar Verd → 170 bar Groc 1 → 110 bar Groc 2 intermitent → 60 bar Vermell + alarma retirada',
                'Xiulet acústic EN 137: s’activa a 55 ± 5 bar amb potència ≥ 90 dB (consum ~5 L/min si és pneumàtic)'
              ]
            }
          ]
        },
        {
          title: 'Sensor d’Home Mort (PASS) i Caputxa de Rescat',
          items: [
            {
              label: 'Dispositius de Salvament Integrats',
              children: [
                'Home Mort (PASS): 30 segons d’immobilitat = prealarma (cancel·lable movent-se) + 10 segons més (40 s totals) = alarma màxima (> 95 dB)',
                'Caputxa de rescat: es connecta a la presa auxiliar de mitjana pressió (6–8 bar) per evacuar víctima (redueix l’autonomia a la meitat!)'
              ]
            }
          ]
        },
        {
          title: 'Càlcul d’Autonomia (Boyle) i Reserva del 25%',
          items: [
            {
              label: 'Fórmules Oficials del Manual',
              children: [
                'Volum total: V_total = V_ampolla × P (6,8 L × 300 bar = 2.040 L · en 6 L = 1.800 L)',
                'Reserva obligatòria (25%): V_res = 0,25 × V_total = 510 L (equival als últims 75 bar)',
                'Aire útil de treball (75%): V_útil = 0,75 × V_total = 1.530 L (consumeix 225 bar)',
                't_total = V_total ÷ Consum · t_operatiu = (0,75 × V_amp × P) ÷ Consum'
              ]
            }
          ]
        },
        {
          title: 'Taula de Consums Respiratoris (Ampolla 6,8 L / 300 bar)',
          items: [
            {
              label: 'Temps Totals vs. Operatius (75%) per Esforç',
              children: [
                'Repòs absolut (10 L/min): 204 min total / 153 min útil · Marxa suau (20 L/min): 102 / 76,5 min',
                'Treball moderat (30–40 L/min): 51–68 / 38,2–51 min',
                'Esforç mitjà-alt estàndard SGO (50 L/min): 40,8 min total / 30,6 min operatius!',
                'Esforç extrem / pànic (80–100 L/min): 20,4–25,5 / 15,3–19,1 min'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-21': [
    {
      shortLabel: 'Gestió d\'Emergències i Protecció Civil',
      title: 'Gestió d’Emergències, Sistema de Protecció Civil i Operativa',
      overview:
        'Cicle de l’emergència, resiliència i equació del risc, marc normatiu (Lleis 5/1994, 4/1997, 17/2015 i UCPM), plans PROCICAT/Especials/DUPROCIM/PAU, CCA, 5 grups d’actuació i centres (MAN.GRAL.001).',
      branches: [
        {
          title: 'Cicle de l’Emergència, Resiliència i Risc',
          items: [
            {
              label: '4 Fases i Equació Matemàtica del Risc',
              children: [
                'Cicle continu de 4 fases: 1. Reducció (prevenció i mitigació) → 2. Preparació (planificació, simulacres, alerta) → 3. Resposta (intervenció) → 4. Recuperació (rehabilitació i reconstrucció)',
                'Resiliència: capacitat d’un sistema o comunitat per resistir, absorbir, adaptar-se i recuperar-se d’un perill',
                'Equació del Risc: Risc = Perill × Vulnerabilitat × Exposició (si qualsevol factor és 0, el Risc és 0)'
              ]
            }
          ]
        },
        {
          title: 'Marc Legal i Nivells (Catalunya, Estat i Europa)',
          items: [
            {
              label: 'Fites Històriques i Lleis Clau',
              children: [
                '1986 (Els Alfacs) → Llei 5/1994 de Bombers → 1995 creació DGEiSC → Llei 4/1997 de Protecció Civil de Catalunya',
                'Nivell Local: Alcalde · servei propi de PC i PAM/DUPROCIM obligatori en municipis > 20.000 habitants (o risc especial)',
                'Autonòmic: Conseller d’Interior + Comissió de PC · Estatal: Llei 17/2015 SNPC (Nivell 3 Interès Nacional → Ministre Interior, UME, CENEM)',
                'Mecanisme Europeu UCPM (3 passos): 1. Estat afectat sol·licita ajuda a l’ERCC → 2. ERCC activa pool ECPP → 3. Estat afectat accepta i dirigeix'
              ]
            }
          ]
        },
        {
          title: 'Tipologia de Plans, Cicle de Vida i Activació',
          items: [
            {
              label: 'Territorials, Especials, DUPROCIM i PAU',
              children: [
                'Territorials: PROCICAT, PBEM/PAM i DUPROCIM (unifica PBEM + tots els PAM especials municipals)',
                'Especials: INFOCAT, INUNCAT, PLASEQCAT/PLASEQTA, TRANSCAT, NEUCAT, SISMICAT, RADCAT, AEROCAT, CAMCAT, ALLAUCAT, VENCAT, VOLCAT',
                'Autoprotecció (PAU, Decret 30/2015, registre Hermes): responsabilitat del titular, revisió màxima cada 4 ANYS',
                'Cicle de vida (5 fases): Elaboració → Aprovació → Homologació (Comissió PC) → Implantació → Manteniment (≤ 4 anys) · Activació: Prealerta → Alerta → Emergència 1 → 2 (+ PLEGEM)'
              ]
            }
          ]
        },
        {
          title: 'Estructura Operativa: CCA i els 5 Grups Actuants',
          items: [
            {
              label: 'Direcció, CCA i Coordinació al Terreny',
              children: [
                'Direcció del Pla (Conseller/Alcalde) + Comitè Assessor + Gabinet d’Informació · PAG / Punt de Trànsit fora del radi d’afectació',
                'CCA (Centre de Comandament Avançat): dirigit pel Cap de Bombers, EXCEPTE en acte intencionat/criminal (dirigeix Mossos!)',
                'Els 5 Grups d’Actuació: 1. Intervenció (Bombers/ADF) · 2. Ordre (Mossos/PL) · 3. Sanitari (SEM) · 4. Logístic (PC/Ajuntaments/Creu Roja) · 5. Assistència Social/Psicològica i Rehabilitació'
              ]
            }
          ]
        },
        {
          title: 'Mesures a la Població: Confinament vs. Evacuació',
          items: [
            {
              label: 'Criteris d’Aplicació i Sistemes d’Avís',
              children: [
                'Confinament: tancar-se dins edifici segur (portes, finestres, climatització) → prioritari davant núvols tòxics (PLASEQCAT) o fum dens curt',
                'Evacuació: desplaçar població fora de la zona → prioritària si l’edifici corre risc d’esfondrament, incendi interior o explosió imminent',
                'Avisos: xarxa de sirenes de risc químic + sistema ES-Alert (Cell Broadcast als telèfons mòbils)'
              ]
            }
          ]
        },
        {
          title: 'Centres de Coordinació (CECAT, Sales i 112)',
          items: [
            {
              label: 'Arquitectura de Sales a Catalunya',
              children: [
                'CECAT (Centre de Coordinació Operativa de Catalunya, Generalitat) i CECOPAL (àmbit municipal)',
                'Sales de Bombers: 1 SCB (Sala Central de Bombers, Bellaterra) + 6 SCT (Sales de Control Territorial)',
                'Telèfon únic europeu 112 (CAT112, Decisió 91/396/CEE, gratuït 24/7): dues seus operatives redundants a Reus i Zona Franca (Barcelona)'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-22': [
    {
      shortLabel: 'Sistema de Comandament SISCOM vs ICS',
      title: 'Principis i Característiques del Sistema de Comandament (SISCOM vs. ICS)',
      overview:
        'De l’ICS californià (anys 70) al SISCOM català (2010/2015), Comandament Únic (Decret 276/2016), Integrat vs. Unificat, cadena +1/-1, tram de control (3–5), àrees funcionals i els 7 nivells de recursos (MAN.COMD.001).',
      branches: [
        {
          title: 'Origen de l’ICS i Implantació del SISCOM',
          items: [
            {
              label: 'Cronologia Històrica Oficial',
              children: [
                'ICS (Incident Command System): neix als anys 1970 a Califòrnia (EUA, programa FIRESCOPE) arran de grans incendis forestals',
                'Implantació a Bombers de la Generalitat: any 2010 (adaptació de l’ICS a l’estructura DGPEIS)',
                'Implantació a Bombers de Barcelona: any 2015 (unificació de doctrina de comandament a Catalunya)'
              ]
            }
          ]
        },
        {
          title: 'Principis Fonamentals i Pla d’Acció (PAI)',
          items: [
            {
              label: 'Modularitat, Terminologia i PAI',
              children: [
                'Modularitat i escalabilitat: creix de baix a dalt (bottom-up) i es contrau segons complexitat, activant només el necessari',
                'Terminologia comuna: noms estandarditzats per a càrrecs, recursos, instal·lacions i comunicacions',
                'PAI (Pla d’Acció de l’Incident, regulat a MAN.COMD.003): fixa objectius estratègics, tàctica i maniobres per a un període operatiu'
              ]
            }
          ]
        },
        {
          title: 'Comandament Únic, Integrat vs. Unificat',
          items: [
            {
              label: 'Models de Direcció del Capítol 4',
              children: [
                'Comandament Únic (Decret 276/2016, de 19 de juliol): sempre 1 sol Cap d’Intervenció (CI); relleu regulat a INT.COMD.000 i GUI.ORGO.001',
                'Comandament Integrat: diversos cossos (Bombers, SEM, Mossos, ADF) coordinats al CCA sota la direcció de l’agència principal responsable',
                'Comandament Unificat: emergència en territoris o jurisdiccions limítrofs on diferents cossos amb competència pròpia comparteixen autoritat i PAI comú'
              ]
            }
          ]
        },
        {
          title: 'Cadena (+1 / -1) i Tram de Control (3 a 5)',
          items: [
            {
              label: 'Disciplina Vertical i Abast de Supervisió',
              children: [
                'Cadena i línia de comandament (+1 / -1): cada efectiu rep ordres i reporta únicament al seu superior immediat (+1) i dirigeix el seu nivell (-1)',
                'Tram de control òptim: entre 3 i 5 línies directes de supervisió per comandament (evita saturació i garanteix la seguretat)'
              ]
            }
          ]
        },
        {
          title: 'Àrees Funcionals: ICS Americà vs. SISCOM Català',
          items: [
            {
              label: 'Comparativa d’Arquitectura Funcional',
              children: [
                'ICS americà original (5 àrees): Comandament, Operacions, Planificació, Logística i Administració/Finances',
                'SISCOM català: NO desplega Finances en operatiu de camp → sota el CI s’organitza en Àrea d’Operacions + Àrea de Suport (que agrupa Planificació i Logística)',
                'En incidents simples (SISCOM 1): el Cap d’Intervenció (CI) assumeix totes les àrees sense desplegar comandaments intermedis'
              ]
            }
          ]
        },
        {
          title: 'Els 7 Nivells Jeràrquics de Recursos (Menor → Major)',
          items: [
            {
              label: 'Escalafó Oficial de Recursos SISCOM',
              children: [
                '1. Equip (1 binomi o 1 vehicle que executa tasques; unitat mínima, mai treballar sol) → 2. Maniobra (acció tàctica concreta)',
                '3. Grup (agrupa diversos equips entorn d’una maniobra) → 4. Sector (divisió geogràfica o funcional, superior al Grup)',
                '5. Zona (agrupa diversos sectors) → 6. Àrea Funcional (Operacions o Suport) → 7. Cap d’Intervenció (CI)'
              ]
            }
          ]
        }
      ]
    }
  ]
};
