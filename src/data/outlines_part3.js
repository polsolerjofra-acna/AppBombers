export const OUTLINES_PART3 = {
  'tema-23': [
    {
      shortLabel: 'Esquema 1 · Passiva, CTE i Euroclasses',
      title: 'Prevenció Passiva: CTE DB-SI i Euroclasses',
      overview:
        'Marc normatiu vigent (Llei 3/2010, CTE DB-SI, Nou RSCIEI RD 164/2025, UE 2024/3110), accessibilitat SI 5, escales, Euroclasses i resistència al foc R-E-I.',
      branches: [
        {
          title: 'Marc Normatiu i Exigències Bàsiques (SI 1–SI 6)',
          items: [
            {
              label: 'Normativa Clau (MAN.SP.000 V.2)',
              children: [
                'Llei 3/2010 (18 febrer): control preventiu a Catalunya (Annex 1 i 2) i ITCs (SP)',
                'CTE DB-SI (RD 314/2006): residencial, administratiu, docent, hospitalari, comercial, pública concurrència i aparcament',
                'Nou RSCIEI (RD 164/2025): substitueix el RD 2267/2004 en establiments industrials',
                'Reglament (UE) 2024/3110: productes de construcció · RIPCI (RD 513/2017): manteniment PCI'
              ]
            },
            {
              label: 'Les 6 Exigències Bàsiques DB-SI i Passiva vs. Activa',
              children: [
                'SI 1 Propagació interior · SI 2 Propagació exterior · SI 3 Evacuació · SI 4 Instal·lacions PCI · SI 5 Intervenció bombers · SI 6 Resistència estructura',
                'Protecció Passiva: sense activació (sectorització EI, portes tallafoc, ignifugació, escales protegides)',
                'Protecció Activa: requereix activació (detectors, extintors, BIE, hidrants, columna seca, ruixadors, SCTiEF)'
              ]
            }
          ]
        },
        {
          title: 'Accessibilitat per a Bombers (SI 5): Vial i Espai de Maniobra',
          items: [
            {
              label: 'Vial d’Aproximació i Quan Cal Espai de Maniobra',
              children: [
                'Vial d’aproximació: amplada lliure ≥ 3,5 m · gàlib ≥ 4,5 m · capacitat portant 20 kN/m² (cul-de-sac > 30 m necessita gir)',
                'Espai de maniobra obligatori: edificis amb alçada d’evacuació > 9 m (CTE) o > 1.000 m² (RSCIEI)'
              ]
            },
            {
              label: 'Cotes de l’Espai de Maniobra i Distància a Façana',
              children: [
                'Amplada ≥ 5,0 m · Alçada lliure ≥ 4,5 m · Pendent màxim ≤ 10% (anivellament AEA)',
                'Paviment: 20 kN/m² + punxonament de 125 kN sobre cercles de Ø 20 cm (potes AEA)',
                'Separació màx. a façana: h ≤ 15 m → 30 m | 15–20 m → 23 m | > 20 m → 18 m (mín. ≥ 3 m del bordó)'
              ]
            }
          ]
        },
        {
          title: 'Façana Accessible i Escales Protegides (CTE + SP-133)',
          items: [
            {
              label: 'Façana Accessible (Secció 2.1.3)',
              children: [
                'Mínim el 15% del perímetre de l’edifici accessible als bombers',
                'Buits d’accés: mín. 0,80 m (ample) × 1,20 m (alt), ampit interior ≤ 1,20 m i separació horitzontal ≤ 25 m'
              ]
            },
            {
              label: 'Escala Protegida vs. Especialment Protegida',
              children: [
                'Distància màx. des de la porta de l’escala a qualsevol accés: ≤ 15 m',
                'Recinte Paret EI-120 · Portes EI₂ 60-C5 · Especialment Protegida afegeix vestíbul amb doble EI₂ 30-C5 (soterranis i EGA > 28 m)',
                'Ventilació (ITC SP-133): finestres ≥ 1 m² per planta o pressió diferencial EN 12101-6 (~50 Pa)'
              ]
            }
          ]
        },
        {
          title: 'Reacció al Foc: Euroclasses (UE 2024/3110)',
          items: [
            {
              label: 'Classes Principals i Subíndexs',
              children: [
                '7 Classes (sense minuts): A1 (incombustible total), A2 (pràcticament incombustible), B, C, D, E, F (sense classificar)',
                'Subíndexs d’aplicació: FL (terres), L (canonades), ca (cables) · Equivalència clau: C-s2,d0 = antiga classe M1'
              ]
            },
            {
              label: 'Paràmetres Addicionals de Fum (s) i Gotes (d)',
              children: [
                'Fum (smoke): s1 (baixa), s2 (mitjana), s3 (alta o sense límit)',
                'Gotes/partícules inflamades (droplets): d0 (nul·la: 0 gotes), d1 (< 10 s), d2 (alta / sense límit)'
              ]
            }
          ]
        },
        {
          title: 'Resistència al Foc (R-E-I) i Sectorització Exterior',
          items: [
            {
              label: 'Criteris R, E, I (en minuts: 15 a 240)',
              children: [
                'R (Capacitat portant): estabilitat mecànica sense col·lapsar (pilars/bigues)',
                'E (Integritat): impedeix pas de flames i gasos calents',
                'I (Aïllament tèrmic): cara no exposada ≤ +140 °C mitjana i ≤ +180 °C puntual (W radiació, M mecànic, C tancament, S fum)'
              ]
            },
            {
              label: 'Mitgeres i Propagació Exterior (SI 2)',
              children: [
                'Paret mitgera entre edificis: mínim EI 120 (fins a EI 180/240 en indústria risc alt)',
                'Trobada amb coberta/façana: franja de ≥ 1 m amb EI t/2 (mín. EI 60) o mitgera sobresortint 0,60 m',
                'Separació entre buits de sectors diferents: 0,50 a 3,00 m horitzontal (segons angle 0°–180°) i ≥ 1,00 m vertical'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Esquema 2 · Activa, PCI, CER i FOER',
      title: 'Prevenció Activa: BIE, Hidrants, Columna Seca i Extintors',
      overview:
        'Instal·lacions actives PCI (RIPCI RD 513/2017, ITC SP-109/112/120/136/146), hidrants, columna seca, grup UNE 23500, SCTiEF, Classe L, CER i FOER.',
      branches: [
        {
          title: 'RIPCI, BIE, Extintors i Classe L',
          items: [
            {
              label: 'RIPCI (RD 513/2017) i Manteniment',
              children: [
                'Regula disseny, instal·lació i revisions periòdiques: trimestral, anual i quinquennal (proves hidràuliques)',
                'ITCs específiques Catalunya: SP-109 (aparcaments robotitzats), SP-136 (cuines/olis), SP-146 (fotovoltaiques en coberta)'
              ]
            },
            {
              label: 'BIE, Extintors i Nova Classe L (V.2)',
              children: [
                'BIE (Boques d’Incendi Equipades): Ø25 mm (mànega semirígida, ús ocupants) i Ø45 mm (mànega plana, major cabal)',
                'Extintors portàtils: classificació per focs A, B, C, D, F · Ruixadors (Sprinklers): bulb 68 °C vermell (ordinari), 57 °C taronja, 79 °C groc, 93 °C verd',
                'Novetat V.2 Glossari (Cap. 7): Classe L per a incendis en bateries d’ió liti (risc d’embalaçament tèrmic)'
              ]
            }
          ]
        },
        {
          title: 'Hidrants Públics (SP-120) vs. Industrials (RSCIEI)',
          items: [
            {
              label: 'Hidrant Públic Municipal (ITC SP-120)',
              children: [
                'Cabal mínim: 1.000 L/min (16,6 L/s) durant 2 hores a pressió dinàmica mínima d’1 bar (100 kPa)',
                'Reserva total d’aigua exigida: 240 m³ (240.000 L) · Tipus: columna (DN 80/100) o arqueta soterrat (EN 14384 / 14339)'
              ]
            },
            {
              label: 'Hidrant Industrial (Nou RSCIEI RD 164/2025)',
              children: [
                'Cabal: 1.500 a 3.000 L/min durant 60–90 min a pressió mínima de 5 bar (500 kPa)',
                'Ubicació: a ≤ 40 m de qualsevol accés i separat entre 5 m i 15 m de la façana (permet atac directe sense bomba)'
              ]
            }
          ]
        },
        {
          title: 'Columna Seca (SP-112 / RIPCI) i Grup UNE 23500',
          items: [
            {
              label: 'Especificacions de la Columna Seca',
              children: [
                'Canonada d’acer galvanitzat buida DN 80 mm (3") · Presa en façana a 0,90 m amb 2 entrades Ø70 mm',
                'Sortides dobles Ø45 mm: plantes PARELLS fins a la 8a i TOTES a partir de la 8a · Clau de seccionament cada 4 plantes',
                'Obligatòria: alçada evacuació > 24 m (general), > 15 m (hospitals) o aparcaments > 3 soterranis / > 4 sobre rasant',
                'Prova d’estanquitat: 1.470 kPa (15 bar) canonada i 2.450 kPa (25 bar) amb vàlvules'
              ]
            },
            {
              label: 'Grup de Bombament PCI (UNE 23500) i SCTiEF (UNE 23585)',
              children: [
                'Bomba Jockey: manté pressió amb arrencada i aturada automàtiques',
                'PARANY UNE 23500: Bomba Principal (elèctrica o dièsel) té arrencada automàtica i ATURADA EXCLUSIVAMENT MANUAL!',
                'SCTiEF (UNE 23585): exutoris de coberta + cortines de fum + entrades d’aire per mantenir capa lliure de fum i evitar Flashover'
              ]
            }
          ]
        },
        {
          title: 'Construccions d’Especial Risc (CER)',
          items: [
            {
              label: 'Els 4 Llindars Numèrics CER (Secció 5.1)',
              children: [
                '1. EGA (Edificis Gran Alçada): alçada d’evacuació ≥ 50 m (supera l’AEA)',
                '2. Túnels viaris o ferroviaris: longitud ≥ 400 m',
                '3. Soterranis de gran profunditat: P1 ≥ 3.000 m² o múltiples plantes sota rasant',
                '4. Aparcaments soterrats: superfície construïda ≥ 2.500 m² (o robotitzats SP-109)'
              ]
            },
            {
              label: 'Altres Edificis CER',
              children: [
                'Hospitals i residències (ocupants no autònoms, evacuació horitzontal EI-120)',
                'Indústries Seveso amb substàncies perilloses (coordinació amb PAU)'
              ]
            }
          ]
        },
        {
          title: 'Fitxes Operatives d’Elements de Risc (FOER)',
          items: [
            {
              label: 'Estructura del Codi FOER',
              children: [
                'Format: [MUNICIPI 3 lletres] - [TIPUS 3 lletres] - [5 DÍGITS] (exemple del manual: BAD-HOS-00001)',
                'Tipologies: HOS (Hospital), IND (Indústria), TUN (Túnel), EGA (Gran Alçada)'
              ]
            },
            {
              label: 'Les 6 Fases del Cicle FOER (Secció 5.2)',
              children: [
                '1. Detecció i selecció de l’element (CER) → 2. Recopilació documental (PAU, plànols) → 3. Visita in situ del parc',
                '4. Redacció i disseny gràfic → 5. Validació i publicació al SIG/tauletes → 6. Pràctica/simulacre i actualització'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-24': [
    {
      shortLabel: 'Esquema 1 · Dinàmica i Lectura Fum',
      title: 'Dinàmica del Foc i Lectura del Fum',
      overview:
        'Referents històrics, Fases vs. Etapes, valoració 360° (6 cares i façanes A-B-C-D), límit AEA (Planta 8), Ruta Freda/Calenta i lectura del fum.',
      branches: [
        {
          title: 'Incendis Històrics i Terminologia Fases vs. Etapes',
          items: [
            {
              label: 'Els 3 Grans Incendis de Referència (Cap. 1)',
              children: [
                'Discoteca Flying (Saragossa, 1990): 43 morts per inhalació de CO/HCN en soterrani',
                'Torre Windsor (Madrid, 2005): gratacel 106 m, propagació vertical per façana/patis i col·lapse d’acer',
                'Nau ocupada de Badalona (2020): col·lapse parcial, control d’accessos i zonatge exterior'
              ]
            },
            {
              label: 'Fases del Foc (F) vs. Etapes dels Equips (E)',
              children: [
                '4 Fases del Foc: Actiu → Estabilitzat → Controlat → Extingit',
                '3 Etapes dels Equips d’extinció: Atac (Actiu) → Remat → Rereguarda'
              ]
            }
          ]
        },
        {
          title: 'Nomenclatura Espacial (A-B-C-D) i Valoració 360°',
          items: [
            {
              label: 'Façanes A, B, C, D en Sentit Horari (2.2.8)',
              children: [
                'Façana A: principal (accés/primer vehicle) · Façana B: lateral esquerre (mirant A des de fora)',
                'Façana C: posterior · Façana D: lateral dret (sempre en sentit horari en planta)',
                'Plantes: PB, PL+1, PL+2... / Soterranis S-1, S-2... i quadrants interiors A, B, C, D'
              ]
            },
            {
              label: 'Les 6 Cares del Sinistre i Límit d’AEA (Cap. 3)',
              children: [
                'Valoració tridimensional: 4 façanes (A, B, C, D) + cara inferior (planta sota) + cara superior (planta sobre/coberta)',
                'Límit operatiu AEA estàndard (30 m): fins a PLANTA 8 (PL+8); a partir de PL+9 l’accés és per escala interior'
              ]
            }
          ]
        },
        {
          title: 'Ruta Freda vs. Ruta Calenta i Vies de Propagació',
          items: [
            {
              label: 'Compartimentació de Rutes (3.2)',
              children: [
                'Ruta Freda: caixa d’escala i vies d’evacuació lliures de fum per fugida d’ocupants i pujada de bombers',
                'Ruta Calenta: interior del sector/habitatge incendiat a partir de la porta d’accés'
              ]
            },
            {
              label: 'Les 3 Vies de Propagació (3.4)',
              children: [
                '1. Per Flames (contacte directe i autoexposició exterior entre finestres)',
                '2. Per Fums i Gasos calents (convecció per escales, patis, conductes i falsos sostres)',
                '3. Per Partícules inflamades o Degoteig (paveses i plàstics fosos com bovedilles de porexpan)'
              ]
            }
          ]
        },
        {
          title: 'Lectura del Fum: Els 4 Atributs (VVDC)',
          items: [
            {
              label: 'Volum i Velocitat (Pressió)',
              children: [
                'Volum: quantitat de fum acumulat (indica extensió del combustible que pirolitza)',
                'Velocitat: laminar/suau vs. turbulent/ràpid (indica alta pressió i temperatura prop del focus; polsacions = alerta Backdraft)'
              ]
            },
            {
              label: 'Densitat i Color',
              children: [
                'Densitat: translúcid vs. opac i espès (fum dens = combustible gasós concentrat a punt d’inflamar-se)',
                'Color: blanc (vapor/inici) → gris → negre (hidrocarburs/plàstics) → groguenc-marró dens (quitrans en ILV = Backdraft!)'
              ]
            }
          ]
        },
        {
          title: 'Règims d’Incendi i Fenòmens Extrems',
          items: [
            {
              label: 'ILC vs. ILV',
              children: [
                'ILC (Incendi Limitat pel Combustible): suficient O₂; risc principal de Flashover (500–600 °C, 20 kW/m²)',
                'ILV (Incendi Limitat per la Ventilació): foc ofegat ric en gasos de piròlisi no cremats'
              ]
            },
            {
              label: 'Senyals de Backdraft abans d’Obrir',
              children: [
                'Fum groguenc-marronós espès que surt a polsacions ("respira") per esquerdes i vidres ennegrits vibrants',
                'Tàctica: refredar/inertitzar o ventilar en altura abans d’aportar oxigen a cota zero'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Esquema 2 · Tàctiques, Vent. i Estructures',
      title: 'Tàctiques, Ventilació i Estructures al Foc',
      overview:
        'Comportament d’estructures (fusta, formigó, acer), línies Ø25/Ø45, atac a gasos (O/Z/8), ordre de recerca per visibilitat, ventilació VPP/VPN i seguretat CACE.',
      branches: [
        {
          title: 'Comportament Estructural al Foc (Cap. 2.2)',
          items: [
            {
              label: 'Tradicional (Fusta) i Formigó Armat',
              children: [
                'Tradicional: murs de càrrega + bigues fusta/volta catalana (col·lapse sobtat si cremen caps encastats o per pes de l’aigua)',
                'Formigó armat: fenomen Spalling (esclats del recobriment que exposen l’acer) i bovedilles de porexpan que fonen i gotejen'
              ]
            },
            {
              label: 'Estructura Metàl·lica (Acer)',
              children: [
                'Als 300 °C comença a perdre resistència i als 550 °C perd el 50% de la seva capacitat portant',
                'La forta dilatació tèrmica empeny els murs perimetrals cap a fora i provoca col·lapses sobtats'
              ]
            }
          ]
        },
        {
          title: 'Instal·lació Hidràulica i Cabals (Cap. 4.1)',
          items: [
            {
              label: 'Elecció de Mànega d’Atac',
              children: [
                'Ø 25 mm: cabal mínim operatiu 250 L/min · pes plena (40 m) ≈ 150 kg (habitatges, càrrega moderada)',
                'Ø 45 mm: cabal mínim operatiu 400 L/min · pes plena (40 m) ≈ 250 kg (locals, indústries, pàrquings, foc desenvolupat)'
              ]
            },
            {
              label: 'Les 5 Parts de la Línia d’Aigua',
              children: [
                '1. Alimentació (hidrant → bomba Ø70) · 2. Estesa/Línia Mare (bomba → bifurcació Ø70 o columna seca)',
                '3. Bifurcació: SEMPRE en Ruta Freda (1 planta per sota del foc!)',
                '4. Línia d’atac (amb bucle de reserva a l’escala) · 5. Línia de seguretat (pressuritzada per a equip SOS)'
              ]
            }
          ]
        },
        {
          title: 'Tècniques d’Aplicació d’Aigua (4.1.5–4.1.6)',
          items: [
            {
              label: 'Refredament de Gasos (Tècnica 3D)',
              children: [
                'Polsació curta (test de sostre): con 30°–60° durant < 1 segon per avaluar Tª i inertitzar sense trencar capes',
                'Polsació llarga / escombrat: 1 a 5 segons dibuixant traços "O", "Z" o "8" al coixí de gasos (sense mullar parets)'
              ]
            },
            {
              label: 'Atac Directe, Indirecte i Transicional',
              children: [
                'Directe: raig a la base de les flames · Indirecte: molt vapor (1 L → 1.700 L) en recinte tancat SENSE víctimes',
                'Transicional: raig compacte fix des de l’exterior al SOSTRE per una finestra (10–20 s) sense moure la llança en cercle'
              ]
            }
          ]
        },
        {
          title: 'Recerca per Visibilitat i Gestió de Serveis',
          items: [
            {
              label: 'Prioritat de Recerca per Visibilitat (PARANY 4.3.1)',
              children: [
                '1r Visibilitat BAIXA (6–10 m) → 2n Visibilitat MITJA (> 10 m) → 3r Visibilitat MÍNIMA (< 6 m) → 4t ALTA (sense fum)',
                'Es prioritza Baixa/Mitja perquè les víctimes són salvables ràpidament abans de morir intoxicades'
              ]
            },
            {
              label: 'Gestió de Serveis (4.5)',
              children: [
                'Tallar gas i electricitat de l’àrea afectada',
                'NO tallar el subministrament dels grups de pressió PCI, ascensors d’emergència ni ventilació d’escala'
              ]
            }
          ]
        },
        {
          title: 'Tàctiques de Ventilació Operativa (Cap. 4.4)',
          items: [
            {
              label: 'Antiventilació i Ventilació Natural',
              children: [
                'Antiventilació (confinament): tancar portes/finestres o cortina bloquejadora per privar d’O₂ i protegir Ruta Freda',
                'Natural: entrada inferior i sortida superior/exutori (compte amb no obrir a sobrevent empenyent el foc a l’escala)'
              ]
            },
            {
              label: 'VPP (Pressió Positiva) vs. VPN (Negativa)',
              children: [
                'VPP: ventilador exterior a 1,5–2,5 m de la porta; REGLA D’OR: obrir la sortida (1–2× l’àrea d’entrada) ABANS d’engegar, amb línia a punt',
                'VPN: extractor que aspira fum cap a fora (útil en atmosferes explosibles amb equip ATEX o desenfumatge post-incendi)'
              ]
            }
          ]
        },
        {
          title: 'Seguretat: Zonatge, CACE, Codi Vermell i 4 Fases d’Entrada',
          items: [
            {
              label: 'Zonatge, CACE i Emergències',
              children: [
                'Zonatge en façana: ≥ 15 m ordinari (caiguda vidres/objectes) · 2 × Alçada de l’edifici si hi ha risc de col·lapse',
                'Taula CACE: control d’accés i ERA (nom, pressió inicial 300 bar, hora entrada, ubicació, hora límit sortida)',
                'Codi Vermell (evacuació col·lectiva de tot el sector) vs. SOS (bomber/binomi atrapat) · Regla indissoluble del binomi'
              ]
            },
            {
              label: '4 Fases d’Entrada Segura (5.7)',
              children: [
                '1. Valorar porta (fum, frontisses, Tª dors mà/càmera) → 2. Posició lateral al pany i obertura de control (2–3 s)',
                '3. Refredament de gasos (polsació curta) → 4. Progressió ajupit sota pla neutre deixant falca/mànega a la porta'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-25': [
    {
      shortLabel: 'Esquema 1 · Comportament i Tipologia',
      title: 'Comportament Foc Forestal i Tipologia',
      overview:
        'Història i creació del GRAF (01/03/1999), 6 Generacions, parts i sectors (0/imparells/parells), Gran Triad (30-30-30), Lf, superfície i CPS de Campbell.',
      branches: [
        {
          title: 'Història, GRAF i Paradoxa de l’Extinció',
          items: [
            {
              label: 'Fites Cronològiques a Catalunya (Cap. 1)',
              children: [
                '1982 Pla FOC VERD · 1986 Montserrat/Empordà · 1994 GIF Catalunya Central (> 70.000 ha)',
                '1998 Solsonès → 01/03/1999 creació oficial del GRAF · 2005/2009 atrapaments (Guadalajara, Horta de Sant Joan)'
              ]
            },
            {
              label: 'Paradoxa de l’Extinció (1.3)',
              children: [
                'El 99% dels focs s’apaguen com a conats i cremen < 10% de la superfície total',
                'Menys de l’1% dels incendis (els GIF) cremen el 90% de les hectàrees acumulades per manca de gestió'
              ]
            }
          ]
        },
        {
          title: 'Les 6 Generacions d’Incendis Forestals',
          items: [
            {
              label: 'Generacions 1a a 3a (Paisatge Forestal)',
              children: [
                '1a: abandonament agrícola (continuïtat horitzontal fina) · 2a: velocitat i focus secundaris per paveses',
                '3a: continuïtat horitzontal i VERTICAL (combustible d’escala → focs de capçades que superen l’aigua)'
              ]
            },
            {
              label: 'Generacions 4a a 6a (IUF i Clima Extrem)',
              children: [
                '4a: Interfície Urbà-Forestal (IUF, col·lapse de recursos defensant cases) · 5a: simultaneïtat de GIF + IUF',
                '6a: crisi climàtica extrema + megaincendis convectius amb Pirocumulonimbus (PyroCb) i downdrafts erràtics'
              ]
            }
          ]
        },
        {
          title: 'Parts del Foc i Sectorització Oficial',
          items: [
            {
              label: 'Geometria del Perímetre (2.1)',
              children: [
                'Cap (front més ràpid), Cua (origen/ancoratge), Flanc Esquerre i Flanc Dret (mirant de la cua cap al cap)',
                'Dits, bosses/entrants, illes verdes interiors i focus secundaris (fora de perímetre per paveses)'
              ]
            },
            {
              label: 'Numeració de Sectors Forestals (2.2)',
              children: [
                'Sector 0 = Cua (punt d’ancoratge)',
                'Sectors IMPARELLS (1, 3, 5...) = Flanc Esquerre · Sectors PARELLS (2, 4, 6...) = Flanc Dret'
              ]
            }
          ]
        },
        {
          title: 'La Gran Triad i Regla del 30-30-30',
          items: [
            {
              label: 'Topografia i Meteorologia (30-30-30)',
              children: [
                'Topografia (factor més constant: pendent, orientació, relleu) · Meteorologia (factor més variable)',
                'Regla del 30-30-30: Temperatura > 30 °C + Humitat Relativa < 30% + Vent > 30 km/h'
              ]
            },
            {
              label: 'Combustibles per Temps de Retard d’Humitat',
              children: [
                '1 h (< 6 mm: herba, acícules — governa ignició i velocitat del front) · 10 h (6–25 mm)',
                '100 h (25–75 mm) · 1.000 h (> 75 mm: troncs gruixuts)'
              ]
            }
          ]
        },
        {
          title: 'Estrats, Llargada de Flama (Lf) i Superfície',
          items: [
            {
              label: 'Estrats i Escala de Llargada de Flama (Lf)',
              children: [
                'Estrats: Subsòl (torba/arrels sense flama), Superfície i Capçades (passiu/torching, actiu, independent)',
                'Lf < 1 m: eines manuals · Lf 1–3 m: autobombes/helicòpters · Lf 3–5 m: límit directe (maquinària) · Lf > 5 m: fora de capacitat (indirecte)'
              ]
            },
            {
              label: 'Classificació per Superfície Cremada (2.5)',
              children: [
                'Conat: < 1 hectàrea (< 1 ha)',
                'Incendi Forestal (IF): 1 ha a 500 ha · Gran Incendi Forestal (GIF): > 500 ha'
              ]
            }
          ]
        },
        {
          title: 'Patrons de Propagació i CPS de Campbell',
          items: [
            {
              label: 'Els 4 Patrons Oficials (Cap. 3.1)',
              children: [
                '1. Topogràfic (pendent/brises, frena a la carena/nit) · 2. Conduït per Vent (> 30 km/h, ignora pendent, flancs rectes)',
                '3. Convectiu (columna genera Indraft d’aspiració i Downdraft de desplom) · 4. Tempesta de foc (PyroCb / esclafits 360°)'
              ]
            },
            {
              label: 'Sistema CPS de Doug Campbell (0/3 a 3/3)',
              children: [
                '3 forces d’alineació: Pendent a favor (+1) + Vent a favor (+1) + Orientació solar/insolació (+1: Est matí, Sud migdia, Oest tarda)',
                '5 passos CPS: 1. Observar alineació → 2. Preveure canvis (trigger points) → 3. Oportunitats (0/3–1/3) → 4. Objectiu/maniobra → 5. Llindars LACES'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Esquema 2 · Fases, Etapes i LACES',
      title: 'Fases INFOCAT, Etapes i Seguretat LACES',
      overview:
        'Distinció entre les 3 Etapes de treball i les 4 Fases INFOCAT, protocols RAF, LACES (R ≥ 4 × Lf) i les 3 situacions d’atrapament en autobomba.',
      branches: [
        {
          title: 'Les 3 Etapes de les Tasques d’Extinció (Equips - E)',
          items: [
            {
              label: 'Seqüència Operativa al Perímetre (Cap. 4.4)',
              children: [
                '1. Etapa d’ATAC: maniobres directes o indirectes per aturar l’avanç de la flama',
                '2. Etapa de REMAT: consolidació i liquidació de punts calents, fumaroles i brases a la vora',
                '3. Etapa de REREGUARDA: vigilància activa i repàs amb dotacions de retén per evitar revifalles'
              ]
            },
            {
              label: 'Regla Mnemotècnica F vs. E',
              children: [
                'Etapes comença per E (Equips d’extinció: Atac, Remat, Rereguarda)',
                'Fases comença per F (Foc / INFOCAT: Actiu, Estabilitzat, Controlat, Extingit)'
              ]
            }
          ]
        },
        {
          title: 'Les 4 Fases Oficials de l’Incendi INFOCAT (Foc - F)',
          items: [
            {
              label: 'Actiu i Estabilitzat (Cap. 4.5)',
              children: [
                '1. Incendi ACTIU: flames propagant-se lliurement fora de la capacitat immediata de contenció',
                '2. Incendi ESTABILITZAT: ja NO avança lliurement i evoluciona dins les línies previstes, però el perímetre encara NO està tancat del tot'
              ]
            },
            {
              label: 'Controlat i Extingit',
              children: [
                '3. Incendi CONTROLAT: tot el perímetre està envoltat per una línia de control contínua (sòl mineral/humit) i no pot créixer, tot i quedar punts calents interns',
                '4. Incendi EXTINGIT: sense calor ni brasa amb possibilitat de revifar'
              ]
            }
          ]
        },
        {
          title: 'Protocol RAF (Emergència d’Atrapament)',
          items: [
            {
              label: 'Ordre Ràpid d’Autoprotecció (Cap. 5.3)',
              children: [
                'R — Reagrupament immediat de tota la dotació',
                'A — Autoprotecció (EPI complet, casc, guants, cobricoll/màscara)',
                'F — Fugida ordenada cap a Zona Segura per ruta coneguda (mai córrer pendent amunt davant d’un front)'
              ]
            }
          ]
        },
        {
          title: 'Protocol LACES / OCEL i Càlcul de Zona Segura',
          items: [
            {
              label: 'Els 5 Components LACES (Cap. 5.4)',
              children: [
                'L (Lookouts / Guaites): visió permanent del front i dels companys',
                'A (Anchor / Awareness): punt d’ancoratge segur (cua/carretera/cremat) i consciència situacional',
                'C (Communications): comunicacions garantides · E (Escape routes): mínim 2 rutes transitables',
                'S (Safety zones): zona lliure de combustible (ex. Zona Negra) on sobreviure SENSE cabina ni mitjans d’autoprotecció'
              ]
            },
            {
              label: 'Fórmula del Radi de Zona Segura',
              children: [
                'Radi mínim de separació: R ≥ 4 × Llargada de Flama (Lf) → Diàmetre de la clariana ≥ 8 × Lf',
                'Exemple: flama Lf = 15 m → radi mínim fins a vegetació = 60 m (+ espai per a vehicles)'
              ]
            }
          ]
        },
        {
          title: 'Atrapament en Autobomba: Situacions 1, 2 i 3',
          items: [
            {
              label: 'Situació 1 (Evacuació) i Situació 2 (Defensa Exterior)',
              children: [
                'Situació 1: hi ha temps → RAF, recollir o tallar/abandonar mànegues i conduir a Zona Segura / Zona Negra',
                'Situació 2: estacionar sense vegetació sota el xassís (motor en marxa), 2 línies curtes Ø25 a l’altre costat del camió amb angle de 45° a 60°'
              ]
            },
            {
              label: 'Situació 3 (Confinament Extrem dins Cabina)',
              children: [
                'Impacte directe imminent (1–2 min): tota la dotació dins la cabina amb EPI complet, sotacasc i ERA posat',
                'Tancar finestres i aire exterior, encendre llums, activar ruixadors d’autoprotecció del camió i ajupir-se sota el nivell dels vidres'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Esquema 3 · Maniobres i Eines',
      title: 'Maniobres Directes/Indirectes i Eines',
      overview:
        'Cadena d’eines manuals en atac directe (Lf < 1 m), atac amb aigua i mitjans aeris, atac paral·lel i atac indirecte amb foc tècnic.',
      branches: [
        {
          title: 'Atac Directe amb Eines Manuals (Secció 4.1.2)',
          items: [
            {
              label: 'Condicions i Separació de Seguretat',
              children: [
                'Viable només quan Llargada de Flama Lf < 1 m i velocitat de propagació v < 1 km/h',
                'Avanç en fila pel perímetre mantenint separació de seguretat ≥ 3 m entre operadors'
              ]
            },
            {
              label: 'Ordre Estricte de la Cadena d’Eines',
              children: [
                '1r Motxilla d’aigua (~18–20 L): refreda i abaixa la flama inicial',
                '2n Batefocs: sufoca la flama restant cap a dins del cremat · 3r Pulaski (destral-aixada): talla arrels i obre solc',
                '4t Pala (o McLeod): raspa fins a terra mineral i llança terra sobre brases cap al cremat'
              ]
            }
          ]
        },
        {
          title: 'Atac Directe amb Aigua, Maquinària i Mitjans Aeris',
          items: [
            {
              label: 'Línies d’Aigua i Autobombes (Lf 1–3 m)',
              children: [
                'Esteses progressives des d’un punt d’ancoratge (Sector 0 / cua o pista) atacant la vora del foc cap a dins',
                'Ús de racons i reduccions (Ø45 → Ø25) combinant con d’aigua i remat de brases'
              ]
            },
            {
              label: 'Maquinària Pesant i Mitjans Aeris (Lf 1–5 m)',
              children: [
                'Bulldozer / maquinària d’obertura de línies al límit de 3–5 m · Helicòpters bombarders (precisió puntual) i avions (descàrregues amples/retardants)',
                'Evacuar personal de la línia de caiguda abans de la descàrrega aèria per risc d’impacte i caiguda de branques'
              ]
            }
          ]
        },
        {
          title: 'Atac Paral·lel (Contenció Propera)',
          items: [
            {
              label: 'Criteris d’Execució',
              children: [
                'Construcció d’una línia de control paral·lela i propera al perímetre (a pocs metres) quan la calor impedeix treballar sobre la flama',
                'S’executa ancorant-se en zones segures i cremant o netejant el combustible intermedi entre la línia i el front'
              ]
            }
          ]
        },
        {
          title: 'Atac Indirecte i Foc Tècnic (Lf > 5 m)',
          items: [
            {
              label: 'Línies de Defensa i Tallafocs',
              children: [
                'Quan Lf > 5 m (fora de capacitat d’extinció): treballar a distància aprofitant infraestructures (carreteres, camps, carenes) o obrint línies fins a sòl mineral',
                'Consolidació amb línies humides o escumògens per aturar focus secundaris'
              ]
            },
            {
              label: 'Foc Tècnic: Cremes d’Eixamplament i Contrafocs',
              children: [
                'Cremes d’eixamplament: ampliar la profunditat d’una línia de defensa cremant el combustible sa cap a la zona cremada',
                'Contrafoc: foc planificat i executat per especialistes GRAF per consumir el combustible davant d’un front principal aprofitant l’aspiració (Indraft)'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-26': [
    {
      shortLabel: 'Esquema 1 · Vehicles: Gasos i EV',
      title: 'Incendis de Vehicles: GNC, GNL, H2 i Elèctrics',
      overview:
        'Riscos tòxics, zonatge 25 m, etiquetatge UNE-EN 16942, emplaçament a 45°/part alta, i el protocol crític d’aigua per a GLP, GNC, GNL, EV i H₂.',
      branches: [
        {
          title: 'Riscos Tòxics, Zonatge (25 m) i Emplaçament',
          items: [
            {
              label: 'Gasos Tòxics i EPI Obligatori (Cap. 2.5)',
              children: [
                '150–200 kg de plàstics/escumes alliberen CO, HCN, HCl i fluorur d’hidrogen (HF en bateries Li-ion)',
                'EPI pesant complet + ERA obligatori des del primer instant · Amortidors, pretensors i pistons d’airbags'
              ]
            },
            {
              label: 'Zonatge i Aproximació Segura (2.6.1 / 2.7.1)',
              children: [
                'Perímetre de seguretat (Zona Calenta): mínim 25 m de radi al voltant del vehicle',
                'Autobomba: sempre a SOBREVENT i a la PART ALTA del pendent (evita que combustible vessat arribi al camió)',
                'Aproximació del binomi: en diagonal a 45° pels angles amb línia Ø25 mm (mai de front ni per darrere)'
              ]
            }
          ]
        },
        {
          title: 'Etiquetatge Europeu (UNE-EN 16942) i Combustibles Líquids',
          items: [
            {
              label: 'Cercle (Gasolina) vs. Quadrat (Gasoil)',
              children: [
                'CERCLE (E5, E10, E85): gasolina amb % etanol · punt d’inflamació ≈ -40 °C · vapors més pesants que l’aire (d = 3–4)',
                'QUADRAT (B7, B10, B20, B30, B100, XTL): dièsel/biodièsel/sintètic · punt d’inflamació > 62 °C (62–100 °C)'
              ]
            },
            {
              label: 'Rombe (Combustibles Gasosos)',
              children: [
                'Forma romboïdal per a tots els gasos d’automoció: LPG (GLP), CNG (GNC), LNG (GNL) i H2 (Hidrogen)'
              ]
            }
          ]
        },
        {
          title: 'GLP vs. GNC (El Parany dels 200 bar)',
          items: [
            {
              label: 'GLP / LPG (Autogàs: Propà + Butà)',
              children: [
                'Emmagatzemat liquat a 8–10 bar (vàlvula de seguretat per molla a ~27 bar; d = 1,5–2,0)',
                'SÍ REFRIGERAR EL DIPÒSIT amb abundant aigua per baixar pressió i evitar BLEVE · NO apagar la flama del dardo'
              ]
            },
            {
              label: 'GNC / CNG (Gas Natural Comprimit)',
              children: [
                'Gas metà (d ≈ 0,55) a ALTA PRESSIÓ: 200 bar en cilindres d’acer/composite amb fusible tèrmic TPRD (~110 °C)',
                'PROHIBIT TIRAR AIGUA ALS CILINDRES DE GNC: refreda el TPRD, impedeix que fongui als ~110 °C i el cilindre rebenta!'
              ]
            }
          ]
        },
        {
          title: 'GNL Criogènic (-162 °C) i Hidrogen (H₂)',
          items: [
            {
              label: 'GNL / LNG (Camions Pesants)',
              children: [
                'Metà líquid criogènic a -162 °C (8–16 bar) amb vàlvules d’alleujament boil-off',
                'DESACONSELLAT TIRAR AIGUA al dipòsit criogènic o sobre el toll de GNL (aporta +175 °C de calor i provoca RPT!)'
              ]
            },
            {
              label: 'Hidrogen (H₂ - FCEV)',
              children: [
                'Gas comprimit a 350 bar o 700 bar (d = 0,07) amb fusible tèrmic TPRD',
                'Flama gairebé invisible de dia → detectar amb CÀMERA TÈRMICA; no refredar el TPRD ni apagar el dardo'
              ]
            }
          ]
        },
        {
          title: 'Vehicles Elèctrics i Híbrids (EV / HEV / PHEV)',
          items: [
            {
              label: 'Alta Tensió i Embalaçament Tèrmic',
              children: [
                'Bateries d’ió liti (Classe L) de 400–800 V CC identificades per cablejat de color TARONJA',
                'Thermal Runaway: reacció exotèrmica en cadena amb emissió de gasos inflamables i HF tòxic'
              ]
            },
            {
              label: 'Protocol d’Extinció i Regla d’1 Hora',
              children: [
                'Projectar GRAN QUANTITAT D’AIGUA directament sobre el paquet de bateries per refredar les cel·les',
                'Desconnexió Service Plug / llaç de 12 V · MONITORITZAR amb càmera tèrmica durant MÍNIM 1 HORA post-extinció'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Esquema 2 · Contenidors, Silos i Altres',
      title: 'Contenidors, Subestacions, Silos i Altres',
      overview:
        'Tàctiques en contenidors per fracció i soterrats, pneumàtics i abocadors (risc d’enfonsament i biològic V.2), subestacions elèctriques i incendis en silos.',
      branches: [
        {
          title: 'Contenidors Urbans de Superfície (Cap. 3)',
          items: [
            {
              label: 'Groc (Plàstics), Blau (Paper) i Prioritats',
              children: [
                'Prioritat núm. 1 en via pública: protegir vehicles estacionats i façanes contigües per evitar propagació',
                'Groc: flama ràpida, fum tòxic (CO, HCN, HCl) i plàstic fos · Blau (paper/cartró): combustió profunda en SOMORT (usar humectant i remogut amb bichero)'
              ]
            },
            {
              label: 'Verd (Vidre) i Marró/Gris (Orgànica/Resta)',
              children: [
                'Contenidor Verd: XOC TÈRMIC quan l’aigua freda toca el vidre roent → esclata i projecta esquirles (pantalla facial EN 443 abaixada!)',
                'Contenidor Marró/Gris (Novetat V.2): RISC BIOLÒGIC per residus sanitaris/xeringues → evitar esquitxades a curta distància i guants antipunció'
              ]
            }
          ]
        },
        {
          title: 'Contenidors Soterrats',
          items: [
            {
              label: 'Risc de Confinament i Gasos',
              children: [
                'Foc confinat en fossat de formigó sota rasant amb acumulació de gasos calents i risc d’explosió o projecció a l’obertura',
                'PROHIBIT baixar dins del fossat!'
              ]
            },
            {
              label: 'Maniobra d’Extinció',
              children: [
                'Extingir des de l’exterior mitjançant inundació amb aigua o omplint el fossat amb ESCUMA de mitjana/alta expansió'
              ]
            }
          ]
        },
        {
          title: 'Pneumàtics i Abocadors de Residus (Cap. 4)',
          items: [
            {
              label: 'Incendis de Pneumàtics (4.2)',
              children: [
                'Molt alt poder calorífic, columna de fum negre densíssima i destil·lació pirolítica d’olis inflamables',
                'Separar piles amb maquinària pesant i sufocar amb ESCUMA física o sepultar amb terra/sorra'
              ]
            },
            {
              label: 'Abocadors de Residus (4.4 — Novetats V.2)',
              children: [
                'Combustió subterrània profunda en somort + generació de metà · Dos riscos crítics V.2: RISC D’ENFONSAMENT en cavitats cremades i RISC BIOLÒGIC/lixiviats',
                'Prohibit trepitjar la massa calenta: excavar amb maquinària pesant, refredar, segellar amb capes de TERRA inert i descontaminar al final'
              ]
            }
          ]
        },
        {
          title: 'Subestacions i Centres de Transformació Elèctrics',
          items: [
            {
              label: 'Seguretat Elèctrica i Aïllament',
              children: [
                'Confirmar tall efectiu de tensió amb la companyia distribuïdora (5 Regles d’Or) i mantenir distàncies de seguretat en AT/MT',
                'Risc de transformadors d’oli dielèctric (foc Classe B) i arc elèctric: prohibit raig ple d’aigua amb instal·lació en tensió'
              ]
            },
            {
              label: 'Agents i Ventilació',
              children: [
                'Prioritzar agents no conductors (CO₂ o pols ABC en fase inicial) i escuma si hi ha bassa d’oli un cop tallada la tensió',
                'Ventilar i vigilar atmosferes tòxiques (SF₆ descompost o fum de cables PVC amb HCl)'
              ]
            }
          ]
        },
        {
          title: 'Silos i Emmagatzematge Agrícola/Industrial',
          items: [
            {
              label: 'Combustió en Somort i Atmosferes Explosives',
              children: [
                'Focs interns sense flama amb generació elevada de CO i piròlisi a l’interior del gra, serradures o pèl·lets',
                'RISC D’EXPLOSIÓ DE POLS COMBUSTIBLE: mai aplicar raig d’aigua a pressió ni obrir escotilles inferiors de cop si aixequen núvol de pols en suspensió!'
              ]
            },
            {
              label: 'Tàctica d’Intervenció Segura',
              children: [
                'Monitoritzar temperatura exterior amb càmera tèrmica, segellar entrades d’aire i inertitzar des de dalt (N₂/CO₂ o escuma d’alta expansió)',
                'Buidatge lent i controlat només un cop inertitzada l’atmosfera i amb línia d’aigua polvoritzada de protecció'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-27': [
    {
      shortLabel: 'Esquema 1 · Identificació NRBQ i ADR',
      title: 'Identificació NRBQ: ADR, CLP, Hazchem i Panells',
      overview:
        'Dades de Catalunya i GRIT (2020/2021), radiacions, les 9 classes ADR, panell taronja (Kemler/ONU), CLP, Hazchem, NFPA 704, cisternes i detectors.',
      branches: [
        {
          title: 'Marc NRBQ a Catalunya i Grup GRIT (Cap. 1)',
          items: [
            {
              label: 'Xifres Oficials de Catalunya i GRIT',
              children: [
                'GRIT (Grup de Riscos Tecnològics): creat el 2020 i operatiu l’1 de maig de 2021',
                'Nuclear: 3 reactors (Ascó I, Ascó II, Vandellòs II — Pla PENTA) · Radiològic: 234 instal·lacions autoritzades (RADCAT)',
                'Químic: 9 milions de tones MMPP/any (TRANSCAT) i 164 establiments Seveso (PLASEQCAT/PLASEQTA) · Efecte dòmino'
              ]
            },
            {
              label: 'Tipus de Radiacions i Risc Biològic',
              children: [
                'Alfa (α): s’atura amb paper/pell (molt perillosa si s’inhala/ingereix) · Beta (β): alumini/metacrilat · Gamma (γ)/Raigs X: plom/formigó',
                'Biològic (4 Grups de Risc: 1 lleu a 4 letal): període d’incubació i contagi (bacteris, virus, toxines)'
              ]
            }
          ]
        },
        {
          title: 'Panell Taronja ADR (40 × 30 cm) i Codis Kemler',
          items: [
            {
              label: 'Les 9 Classes ADR i Estructura del Panell',
              children: [
                '1 Explosius · 2 Gasos · 3 Líquids inflam. · 4 Sòlids inflam. (4.2 espontània, 4.3 + aigua) · 5 Comburents/Peròxids · 6 Tòxics/Infecciosos · 7 Radioactius · 8 Corrosius · 9 Diversos',
                'Part superior: Codi Kemler (perill, 2–3 xifres) · Part inferior: Codi ONU (4 xifres, ex: 1202 gasoil, 1203 gasolina, 1075 GLP, 1005 NH₃, 1017 Cl₂)'
              ]
            },
            {
              label: 'Codis Kemler Especials del Manual',
              children: [
                'Prefix "X": PROHIBIT USAR AIGUA! (X423 sòlid + aigua → gas inflamable; X80 àcid sulfúric)',
                '22 gas criogènic refrigerat · 323 líquid inflam. + aigua · 333 líquid pirofòric · 44 sòlid fos calent',
                '539 peròxid orgànic inflamable · 606 matèria infecciosa · 90 medi ambient · 99 transportat en calent'
              ]
            }
          ]
        },
        {
          title: 'Reglament CLP (SGA), Diamant NFPA 704 i Hazchem',
          items: [
            {
              label: 'Etiqueta CLP (Reglament CE 1272/2008) i FDS',
              children: [
                'Elements obligatoris CLP: proveïdor, quantitat (públic), identificadors, pictogrames (9 rombes vermells), paraula d’advertència (Perill/Atenció), frases H i P',
                'Fitxes de Dades de Seguretat (FDS/MSDS): 16 seccions estandarditzades (REACH/CLP)'
              ]
            },
            {
              label: 'Diamant NFPA 704 i Codi Hazchem (EAC)',
              children: [
                'NFPA 704 (0 a 4): Blau (esq.) = Salut · Vermell (dalt) = Inflamabilitat · Groc (dreta) = Reactivitat · Blanc (baix) = Especial (W ratllada = No aigua)',
                'Hazchem (ex. 2XE): 1 raig / 2 boira / 3 escuma / 4 sec · lletra = EPI + contenir vs. diluir · E = considerar evacuació'
              ]
            }
          ]
        },
        {
          title: 'Tipologia de Cisternes ADR (Secció 2.2.3)',
          items: [
            {
              label: 'Cisterna El·líptica vs. Cisterna Circular',
              children: [
                'Secció EL·LÍPTICA / Caixa de maleta: líquids a pressió atmosfèrica (hidrocarburs), amb tapes superiors i centre de gravetat baix',
                'Secció CIRCULAR perfecta: gasos liquats a pressió (GLP, amoníac), criogènics o corrosius a pressió (fons bombats, parasol)'
              ]
            }
          ]
        },
        {
          title: 'Equips de Detecció i Mesura (Cap. 2.3)',
          items: [
            {
              label: 'Detecció Química i Atmosfèrica',
              children: [
                'Explosímetre: mesura % del LII (alarma habitual al 10%–20% LII) · Multigas electroquímic: O₂, CO, H₂S, NH₃, Cl₂',
                'PID (Fotoionització): COV en ppm · Espectrometria RAMAN i FTIR (GRIT): identificació molecular exacta de sòlids/líquids/gasos'
              ]
            },
            {
              label: 'Detecció Radiològica',
              children: [
                'Dosímetre personal: dosi acumulada (mSv) · Radiàmetre / Intensímetre: taxa de dosi instantània (µSv/h o mSv/h) i contaminació'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Esquema 2 · Tàctica, Zonatge i ABD',
      title: 'Tàctica, Zonatge i Descontaminació',
      overview:
        'Anàlisi Font-Flux-Diana vs. Intervenció Diana-Flux-Font, les 12 maniobres ofensives (< 1,5 bar, fase gas), zonatge, ABD dins Zona Calenta i vestits EN 943.',
      branches: [
        {
          title: 'Metodologia Font-Flux-Diana (Parany Cap. 3)',
          items: [
            {
              label: 'Anàlisi vs. Prioritat d’Intervenció',
              children: [
                'Ordre d’ANÀLISI (estudi físic): Font (recipient) → Flux (núvol/vessament) → Diana (persones/medi)',
                'Ordre d’INTERVENCIÓ (acció operativa): 1r DIANA (salvar/confinar) → 2n FLUX (abatre/contenir) → 3r FONT (taponar)'
              ]
            }
          ]
        },
        {
          title: 'Les 12 Maniobres Ofensives: Sobre el Flux (Cap. 4)',
          items: [
            {
              label: 'Absorció vs. Adsorció i Contenció',
              children: [
                '1. Absorció (penetra al porus, augmenta volum: sepiolita/vermiculita) vs. 2. Adsorció (adhesió superficial: carbó actiu)',
                '3. Contenció (dics/barreres) · 4. Obturació d’embornals (coixins/catifes neoprè) · 5. Cobriment amb escuma (blanketing)'
              ]
            },
            {
              label: 'Abatiment, Neutralització i Ventilació',
              children: [
                '6. Abatiment/dilució de vapors amb cortina d’aigua (recollir aigua contaminada!) · 7. Neutralització (exotèrmica, només GRIT) · 8. Dilució líquida',
                '11. Ventilació forçada amb equips certificats antideflagrants ATEX'
              ]
            }
          ]
        },
        {
          title: 'Maniobres Ofensives sobre la Font (Límits Crítics)',
          items: [
            {
              label: 'Taponament (< 1,5 bar) i Lona',
              children: [
                '9. Taponament i obturació (falques, pegats, coixins de cinturó): NOMÉS segur en fuites a baixa pressió (< 1,5 bar)!',
                '10. Reducció de fuita amb lona: frena l’energia cinètica del raig perquè caigui verticalment a un col·lector'
              ]
            },
            {
              label: 'Transvasament, Flaring i Despressurització',
              children: [
                '12. Despressurització d’un recipient: SEMPRE EN FASE GAS (mai en fase líquida, excepte transvasament a cisterna buida)'
              ]
            }
          ]
        },
        {
          title: 'Zonificació NRBQ i Ubicació de l’ABD (Cap. 5)',
          items: [
            {
              label: 'Les 3 Zones Operatives i Emplaçament',
              children: [
                'Zona Calenta (Vermella): contaminant, accés per 1 sol corredor amb CACE · Zona Temperada (Groga): transició i binomi SOS · Zona Freda (Verda): CCA, SEM',
                'Vehicles i CCA sempre a Zona Freda, a SOBREVENT i a la PART ALTA del pendent'
              ]
            },
            {
              label: 'Àrea Bàsica de Descontaminació (ABD — Parany 5.4)',
              children: [
                'QUAN: completament muntada i amb línia d’aigua ABANS que entri el primer binomi',
                'ON: al límit exterior però DINS DE LA ZONA CALENTA (per sortir net abans de trepitjar la Zona Temperada)'
              ]
            }
          ]
        },
        {
          title: 'Descontaminació, Radioprotecció i Vestits Químics',
          items: [
            {
              label: 'Solució Descontaminant i Irradiació vs. Contaminació',
              children: [
                'Descontaminant estàndard: dissolució d’hipoclorit sòdic (lleixiu) al 0,5% (dilució ~1:10) o aigua i sabó neutre',
                'Irradiació (externa, no contagia): combatre amb Distància (I ∝ 1/d²) + Temps + Blindatge · Contaminació (partícules): vestit + ERA + rentat'
              ]
            },
            {
              label: 'Normativa de Vestits Químics (5.5)',
              children: [
                'UNE-EN 465 / EN 14605: Tipus 3 (raig líquid) i Tipus 4 (esprai líquid)',
                'UNE-EN 943-1 i EN 943-2 (ET): Tipus 1 hermètics a gasos (1a = ERA dins; 1b = ERA fora; 1c = línia d’aire; autonomia efectiva ~15–20 min)'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-28': [
    {
      shortLabel: 'Esquema 1 · SVB, OVACE i DEA',
      title: 'SVB, OVACE i DEA',
      overview:
        'GEM/GROS, Cadena de Supervivència ERC (4 baules), edats, valoració XABCDE i constants vitals, algorisme RCP (30:2 i 5 ventilacions), OVACE, DEA i intoxicació per fum.',
      branches: [
        {
          title: 'Marc Sanitari, Cadena ERC i Conceptes Bàsics',
          items: [
            {
              label: 'Competència, GEM, GROS i Cadena ERC (V.3)',
              children: [
                'Llei 5/1994: salvament i assistència inicial fins a transferència al SEM · GEM (mèdics) i GROS (suport sanitari creat arran del terratrèmol de l’Índia)',
                'Cadena de Supervivència ERC (4 baules): 1. Reconeixement i 112 → 2. RCP precoç → 3. Desfibril·lació (DEA) → 4. SVA i cures post-ACR'
              ]
            },
            {
              label: 'Definicions Clíniques i Edats ERC',
              children: [
                'Emergència (risc vital imminent) vs. Urgència · Signe (objectiu/mesurable) vs. Símptoma (subjectiu)',
                'Edats RCP: Nounat (≤ 28 d), Lactant (1 mes a < 1 any, pols braquial), Nen (1 any a pubertat), Adult (≥ pubertat)'
              ]
            }
          ]
        },
        {
          title: 'Valoració Primària XABCDE i Constants Vitals',
          items: [
            {
              label: 'Seqüència Prioritària XABCDE',
              children: [
                'X: hemorràgia exsanguinant (< 3 min) → A: via aèria (front-mentó / tracció mandibular) + control cervical → B: VOS ≤ 10 s + FR + SpO₂',
                'C: pols/PA/ompliment capil·lar (< 2 s) → D: AVDN, Glasgow (3–15), pupil·les → E: exposició evitant hipotèrmia'
              ]
            },
            {
              label: 'Taula Mestra de Constants Vitals (Adult)',
              children: [
                'FR: 12–20 rpm (alerta > 30 / < 10) · SpO₂: 95–100% (hipòxia greu < 90%) · FC: 60–100 bpm · Tª: 36–37,5 °C (≤ 35 °C hipotèrmia)',
                'PA normal 120/80 mmHg (↑ +2/+1 = 140/90 | ↓ -3/-2 = 90/60) · Pols Radial ≥ 80–90 | Femoral ≥ 70 | Carotidi ≥ 60 mmHg'
              ]
            }
          ]
        },
        {
          title: 'RCP Adult vs. Pediàtrica/Asfíctica (Cap. 4.5)',
          items: [
            {
              label: 'RCP en Adult (Origen Cardíac)',
              children: [
                'Confirmada absència de resposta i respiració normal (gasping = no respira): iniciar directament 30:2',
                'Meitat inferior de l’estern · profunditat 5–6 cm · ritme 100–120/min · relleu cada 2 min (5 cicles)'
              ]
            },
            {
              label: 'RCP Pediàtrica, Ofegats, Allaus i Fum (Asfíctica)',
              children: [
                'Començar SEMPRE amb 5 VENTILACIONS DE RESCAT INICIALS abans de comprimir (després 15:2 entrenats o 30:2; 1/3 tòrax: ~4 cm lactant / ~5 cm nen)',
                'Si estàs sol sense telèfon en cas pediàtric/asfíctic: fer 1 minut de RCP abans d’anar a trucar al 112'
              ]
            }
          ]
        },
        {
          title: 'OVACE (Ennuegament) i DEA',
          items: [
            {
              label: 'Algorisme OVACE (Cap. 4.3)',
              children: [
                'Lleu/incompleta (tos efectiva): animar a tossir, NO donar cops · Greu conscient (> 1 any): 5 cops interescapulars + 5 compressions abdominals (Heimlich)',
                'Embarassades i obesos: compressions TORÀCIQUES · Lactant (< 1 any): 5 cops esquena + 5 compressions TORÀCIQUES 2 dits (MAI Heimlich!)',
                'Si queda inconscient: iniciar RCP 30:2 immediatament'
              ]
            },
            {
              label: 'Ús del DEA (Cap. 4.6)',
              children: [
                'Tòrax nu i sec · pegats clavícula dreta i aixella esquerra (< 8 anys o < 25 kg: pediàtrics / anteroposterior)',
                'Només desfibril·la Fibril·lació Ventricular (FV) i Taquicàrdia Ventricular sense pols (TVsp); mai en Asistòlia'
              ]
            }
          ]
        },
        {
          title: 'Intoxicació per Fum (CO + HCN) i Pulsicooxímetre',
          items: [
            {
              label: 'Diagnòstic i Tractament (Cap. 4.8)',
              children: [
                'PARANY: el pulsioxímetre convencional confon COHb amb O₂Hb i marca 99–100% → cal PULSICOOXÍMETRE (CO-oxímetre)!',
                'Tractament: retirar de l’ambient, O₂ al 100% alt flux (reservori 15 L/min) · antídot HCN (SEM): Hidroxocobalamina (Cyanokit)'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Esquema 2 · Trauma, Hemorràgies i Pont',
      title: 'Trauma, Hemorràgies, Xoc i Mobilització',
      overview:
        'Control d’hemorràgies V.3, xoc i pupil·les, Glasgow (3–15), TCE base de crani, cremades (Wallace), paparra, hipotèrmia vs. cop de calor, postures i Pont 3+1/4+1.',
      branches: [
        {
          title: 'Control d’Hemorràgies Externes (Novetat V.3)',
          items: [
            {
              label: 'Ordre Actualitzat d’Actuació (4.1)',
              children: [
                '1r Compressió directa forta: si la 1a gasa s’amara, MAI es retira (s’hi posen més gases a sobre per no trencar el coàgul!)',
                '2n Empaquetament de ferida (wound packing) i embenat compressiu',
                '3r Torniquet homologat (extremitats): 5 a 7 cm per sobre de la ferida (mai sobre articulació), anotar hora ("T"), no afluixar mai'
              ]
            },
            {
              label: 'Mesures Descartades a la V.3',
              children: [
                'L’elevació de l’extremitat i la compressió arterial indirecta ja NO són mesures prioritàries per manca d’evidència'
              ]
            }
          ]
        },
        {
          title: 'Xoc, Pupil·les i Valoració Secundària (SPUMA)',
          items: [
            {
              label: 'Signes de Xoc i Pupil·les',
              children: [
                'Xoc / Hipoperfusió: ompliment capil·lar > 2 s, pell pàl·lida/freda/suada, taquicàrdia, absència de pols radial (PA < 80–90 mmHg)',
                'Pupil·les: Isocòriques (iguals), Miosi (opiacis/organofosforats), Midriasi (hipòxia/ACR), Anisocòria (desiguals = TCE greu!)'
              ]
            },
            {
              label: 'Anamnesi SPUMA (3.2)',
              children: [
                'S (Signes/Símptomes) · P (Patologies prèvies) · U (Última ingesta) · M (Medicació, ex. anticoagulants) · A (Al·lèrgies)'
              ]
            }
          ]
        },
        {
          title: 'Escala de Glasgow (GCS) i Fractura Base de Crani',
          items: [
            {
              label: 'Puntuació GCS: Ocular (4) + Verbal (5) + Motora (6)',
              children: [
                'Rang de 3 (mínim absolut, mai 0) a 15 punts · TCE Lleu: 13–15 | Moderat: 9–12 | Greu/Coma: ≤ 8',
                'Motora clau: 6 obeeix, 5 localitza, 4 retira, 3 flexió anormal (decorticació), 2 extensió anormal (descerebració), 1 cap'
              ]
            },
            {
              label: 'Els 4 Signes de Fractura de Base de Crani (3.3)',
              children: [
                '1. Ulls d’ós rentador (hematoma periorbitari) · 2. Signe de Battle (hematoma retroauricular) · 3. Otorràgia/otorrea LCR · 4. Epistaxi/rinorrea LCR',
                'PROHIBIT taponar oïda o nas (augmenta la PIC): només cobrir suaument amb gasa estèril'
              ]
            }
          ]
        },
        {
          title: 'Cremades (Regla dels 9) i Extracció de Paparra',
          items: [
            {
              label: 'Graus i Regla dels 9 de Wallace (4.9)',
              children: [
                '1r grau (eritema, dolorosa) · 2n grau (flictenes/butllofes, molt dolor) · 3r grau (escara seca, INDOLORA per destrucció nerviosa)',
                'Wallace adult: Cap 9% · Cada braç 9% · Pit/Abd 18% · Esquena 18% · Cada cama 18% · Perineu 1% (palmell pacient = 1%)',
                'Refredar amb aigua tèbia/fresca 15–20 min (sense gel), NO rebentar butllofes, NO arrencar roba adherida'
              ]
            },
            {
              label: 'Extracció de Paparra (4.10)',
              children: [
                'Pinces fines arran de pell amb tracció perpendicular contínua en sec',
                'PROHIBIT aplicar oli, alcohol, vaselina o calor (provoca regurgitació infecciosa)'
              ]
            }
          ]
        },
        {
          title: 'Hipotèrmia vs. Cop de Calor i Postures d’Espera',
          items: [
            {
              label: 'Emergències Tèrmiques (4.11–4.12)',
              children: [
                'Hipotèrmia (≤ 35 °C: lleu 35–32, mod. 32–28, greu < 28 °C): moure en horitzontal amb extrema suavitat (risc Fibril·lació Ventricular)',
                'Cop de calor (> 40 °C): pell calenta, vermella i SECA + alteració neurològica (refredament immediat) vs. Esgotament (< 40 °C, pell suada)'
              ]
            },
            {
              label: 'Postures d’Espera i Transport (2.5)',
              children: [
                'PLS embarassada (> 20 setm.): SEMPRE sobre el COSTAT ESQUERRE (no comprimir vena cava inferior)',
                'Fowler/Semifowler (30°–90°, 45°): dispnea/dolor toràcic · Supí cames flexionades: ferida abdominal · Antitrendelemburg: TCE'
              ]
            }
          ]
        },
        {
          title: 'Mobilització Traumàtica: Tècnica del Pont',
          items: [
            {
              label: 'Pont Simple (3+1) vs. Pont Millorat (4+1)',
              children: [
                'Pont Simple = 4 socorristes (3 aixequen a cavall: cap/espatlles-pelvis/cames + 1 introdueix llitera)',
                'Pont Millorat / Holandès = 5 socorristes (4 aixequen: 1 exclusiu control cervical + 3 cos + 1 llisca tauler)',
                'Qui dirigeix i dóna l’ordre d’aixecament? SEMPRE el socorrista situat al CAP'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-29': [
    {
      shortLabel: 'Esquema · IMV, APCAT i START',
      title: 'Incidents de Múltiples Víctimes i Triatge START',
      overview:
        'Definició d’IMV i llindars APCAT (≥ 6 greus/mortals o ≥ 10 trasllats), triatge bàsic START (≤ 1 min, 2 maniobres), META, Cèl·lula d’Avaluació, Cercles de Mossos i filiació.',
      branches: [
        {
          title: 'Concepte d’IMV i Llindars Oficials APCAT (Cap. 1)',
          items: [
            {
              label: 'Definició i Canvi de Paradigma',
              children: [
                'Desproporció inicial entre el volum/gravetat de les víctimes i els recursos assistencials disponibles',
                'Pas de la medicina individual a la medicina de catàstrofes (salvar el màxim nombre de vides)'
              ]
            },
            {
              label: 'Els 2 Llindars del Protocol APCAT a Catalunya',
              children: [
                'Criteri A: ≥ 6 víctimes greus o mortals',
                'Criteri B: ≥ 10 víctimes que requereixen trasllat hospitalari (n’hi ha prou amb complir A o B)'
              ]
            }
          ]
        },
        {
          title: 'Triatge START: Regles d’Or i Maniobres Permeses',
          items: [
            {
              label: 'Temps, Principis i Regla del Dubte',
              children: [
                'Temps màxim: ≤ 1 minut per víctima (ideal 30–60 s) · Procés dinàmic i continu',
                'En cas de dubte entre dos colors: assignar SEMPRE el color de PRIORITAT SUPERIOR (més greu)',
                'PROHIBIT fer RCP (compressions toràciques) durant el triatge bàsic START!'
              ]
            },
            {
              label: 'Les 2 Úniques Maniobres Salvadores Permeses',
              children: [
                '1. Obrir la via aèria (front-mentó/tracció mandibular + cànula de Guedel o PLS)',
                '2. Controlar una hemorràgia externa greu/exsanguinant (compressió directa / torniquet)'
              ]
            }
          ]
        },
        {
          title: 'Algorisme START en 4 Passos i Colors (Cap. 2.4)',
          items: [
            {
              label: 'Passos 1 i 2 (Cames i Respiració)',
              children: [
                '1. Camina per si sola? → SÍ = VERD (Prioritat 3, lleu/deambulant)',
                '2. Respira? → Si NO respira, obrir via: segueix sense = NEGRE (Prioritat 4); arrenca a respirar = VERMELL!',
                'Si ja respirava: FR > 30 rpm = VERMELL (Prioritat 1) · Si FR ≤ 30 rpm → passa al Pas 3'
              ]
            },
            {
              label: 'Passos 3 i 4 (Perfusió i Estat Mental)',
              children: [
                '3. Perfusió (Bombers prioritzen POLS RADIAL sobre reompliment > 2 s): sense pols radial = VERMELL',
                '4. Ordres simples (estat mental): NO obeeix = VERMELL · SÍ obeeix (FR ≤ 30 + pols radial + ordres) = GROC (Prioritat 2)'
              ]
            }
          ]
        },
        {
          title: 'Altres Mètodes de Triatge (Cap. 2.5)',
          items: [
            {
              label: '1r Triatge vs. 2n Triatge Avançat',
              children: [
                'META (Model Extrahospitalari de Triatge Avançat): 2n triatge mèdic realitzat pel SEM a l’Àrea Sanitària',
                'CareFlight: mètode funcional ràpid (~15 s, no compta rpm) · SALT: mètode mixt nord-americà · TSI/RTS: índexs anatòmics/fisiològics'
              ]
            }
          ]
        },
        {
          title: 'Cèl·lula d’Avaluació, Comandament i Cercles de Zonatge',
          items: [
            {
              label: 'Cèl·lula d’Avaluació Inicial i Comandament (Cap. 3)',
              children: [
                'Integrada per 3 representants: 1 Bombers + 1 SEM + 1 Mossos d’Esquadra / Policia',
                'Comandament Operatiu: Mossos si hi ha il·lícit penal/atemptat/ordre públic; Bombers en la resta d’escenaris (CCA)'
              ]
            },
            {
              label: 'Equivalència Cercles Mossos vs. Zones Bombers (3.4)',
              children: [
                '1r Cercle de Seguretat (Mossos) = Zona Calenta + Zona Tèbia de Bombers (rescat, 1r triatge i 1a noria)',
                '2n Cercle de Seguretat (Mossos) = Zona Freda de Bombers (Àrea Sanitària/CMA del SEM, CCA i noria d’ambulàncies)'
              ]
            }
          ]
        },
        {
          title: 'Filiació de Víctimes i Nories d’Evacuació (Cap. 3.8)',
          items: [
            {
              label: 'Responsables de la Filiació (Taula pàg. 20)',
              children: [
                'Persones IL·LESES (no ateses pel SEM): Grup d’Ordre (Mossos / Policia)',
                'Ferits VERDS, GROCS i VERMELLS: Grup Sanitari (SEM — assistència, registre i hospital de destí)',
                'Víctimes MORTALS (NEGRES): Grup d’Ordre (Mossos / Policia Judicial i Forenses — no moure sense perill imminent)'
              ]
            },
            {
              label: 'Nories de Rescat i Evacuació',
              children: [
                '1a noria (de rescat/recollida): del punt d’impacte al PMA/Àrea Sanitària · 2a noria (d’evacuació): del PMA cap als hospitals'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-30': [
    {
      shortLabel: 'Esquema 1 · Col·lapses i Apuntalaments',
      title: 'Col·lapses Estructurals i Apuntalaments',
      overview:
        'INSARAG (Mèxic 85, Armènia 88), GREC (2021 / STRAC 2025), tipus de col·lapse i apuntalaments d’emergència (≤ 1 m, 1.000 kg, Sotapont/Puntals/Jaç, 45°–60°).',
      branches: [
        {
          title: 'Origen d’INSARAG i Creació del GREC (Cap. 1)',
          items: [
            {
              label: 'INSARAG (ONU) i Equips USAR',
              children: [
                'Creat als anys 90 arran dels terratrèmols de Mèxic (1985) i Armènia (1988) per estandarditzar el rescat urbà',
                'Coordina els centres OSOCC i classifica els equips USAR en 3 nivells: Lleugers, Mitjans i Pesats'
              ]
            },
            {
              label: 'GREC de Bombers de la Generalitat',
              children: [
                'GREC (Grup de Recolzament en Estructures Col·lapsades) constituït el 2021 (certificació europea STRAC iniciada el 2025)',
                'Intervencions destacades: Badalona (2020, 2024), Pont de Vilomara (2022), Armènia (2024)'
              ]
            }
          ]
        },
        {
          title: 'Tipus de Col·lapses i Col·lapse Secundari (Cap. 2)',
          items: [
            {
              label: 'Classificació d’Esfondraments',
              children: [
                'Col·lapse Total vs. Col·lapse Parcial: generen buits de supervivència ("triangles de vida") sota elements rígids',
                'Col·lapse Secundari: segon esfondrament d’elements inestables durant el rescat → PRINCIPAL RISC MORTAL per als bombers!'
              ]
            }
          ]
        },
        {
          title: 'Principis i Xifres dels Apuntalaments (Cap. 4)',
          items: [
            {
              label: 'Objectiu i Regles Numèriques Obligatòries',
              children: [
                'Objectiu: CONSOLIDAR i sostenir elements danyats per obrir un corredor segur (MAI forçar l’estructura cap amunt!)',
                'Distància màxima entre puntals consecutius: ≤ 1 METRE',
                'Resistència segura considerada per puntal ben aplomat: 1.000 kg (1 tona)'
              ]
            }
          ]
        },
        {
          title: 'Les 3 Parts de l’Apuntalament Vertical (De Dalt a Baix)',
          items: [
            {
              label: 'Sotapont → Puntals → Jaç de Taulons',
              children: [
                '1. SOTAPONT (a dalt, contra el sostre/biga): la seva funció és RECOLLIR la càrrega',
                '2. PUNTALS (al mig, fusta o metàl·lics a 90° amb falques contraposades): TRASLLADEN la càrrega sense vinclament',
                '3. JAÇ DE TAULONS / Solera (a baix, sobre terra ferm): REPARTEIX la càrrega per no punxar el forjat inferior'
              ]
            }
          ]
        },
        {
          title: 'Tipologia: Vertical, Horitzontal i Inclinat',
          items: [
            {
              label: 'Vertical i Horitzontal (Estampidor)',
              children: [
                'Vertical: sostenir forjats, jàsseres i buits de portes/finestres',
                'Horitzontal (Estampidor): contenir dues parets paral·leles o parets d’una rasa/excavació'
              ]
            },
            {
              label: 'Inclinat / Oblic (Tornapuntes)',
              children: [
                'Estabilitza façanes o murs de càrrega amb risc de bolcada exterior',
                'Angle òptim de les tornapuntes respecte del terra: entre 45° i 60°'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Esquema 2 · Recerca, INSARAG i Senyals',
      title: 'Cerca, Rescat i Senyalització INSARAG',
      overview:
        'Les 3 fases de recerca (Física, Instrumental, Canina), emplaçament a ≥ 2×h, cintes/sticks, marcatge INSARAG de víctimes (V 50 cm, L-n, D-n, C) i avisos sonors.',
      branches: [
        {
          title: 'Les 3 Fases de Recerca sota Runa (Cap. 3)',
          items: [
            {
              label: '1. Recerca Física i 2. Instrumentalitzada',
              children: [
                '1. Física: inspecció visual/auditiva superficial + maniobra de CRIDA I ESCOLTA en silenci absolut',
                '2. Instrumentalitzada: geòfons (sensors sísmics/acústics) i càmeres endoscòpiques/pèrtiga (requereix aturar motors!)'
              ]
            },
            {
              label: '3. Recerca Canina (GRCR)',
              children: [
                'Gossos d’escombrat mitjançant maniobra de VENTEIG (olor humana dispersa a l’aire)',
                'La zona calenta ha d’estar LLIURE de personal i fum per no saturar l’olfacte del gos'
              ]
            }
          ]
        },
        {
          title: 'Emplaçament de Vehicles i Perímetre 2×h (Cap. 6.1)',
          items: [
            {
              label: 'Distància i Pendent de Seguretat',
              children: [
                'Distància mínima d’emplaçament: ≥ 2 × h (dues vegades l’alçada de l’edifici) o a ≥ 2 edificacions no afectades',
                'Estacionar sempre a la PART ALTA del pendent i garantint ruta lliure per a grues i evacuació'
              ]
            }
          ]
        },
        {
          title: 'Abalisament i Marcatge INSARAG d’Estructura',
          items: [
            {
              label: 'Cintes, Bastons Lluminosos (Sticks) i Quadrat',
              children: [
                'Color VERMELL = zona de perill / accés prohibit (creu "X" = no passar) · Color VERD = ruta segura / accés habilitat',
                'Quadrat INSARAG d’estructura: centre (estat/habitable), dalt (perills gas/aigua), esquerra (equip USAR), dreta (data/hora), baix (víctimes)'
              ]
            }
          ]
        },
        {
          title: 'Marcatge INSARAG de Víctimes (Cap. 5)',
          items: [
            {
              label: 'Codi "V" (50 cm), L-n, D-n i Rombe "C"',
              children: [
                'Esprai taronja/vermell: gran lletra "V" de 50 cm d’alçada + fletxa cap al punt de víctima potencial no confirmada',
                'Sota la V: "L - n" (Live = nombre de víctimes VIVES confirmades) i "D - n" (Dead = víctimes MORTES confirmades)',
                'En rescatar les vives es ratlla L-n horitzontalment; en extreure TOTES (vives i mortes) es dibuixa un rombe "C" (Clear = net)'
              ]
            }
          ]
        },
        {
          title: 'Senyals Acústics d’Emergència (Taula 6.5)',
          items: [
            {
              label: 'Codi Universal de Botzina / Xiulet',
              children: [
                'EVACUAR IMMEDIATAMENT: 3 tocs curts d’1 segon (▄ ▄ ▄) → sortir deixant les eines cap al punt de reunió',
                'ATURAR OPERACIONS / SILENCI: 1 toc llarg de 3 segons (▄▄▄▄) → aturar motors i fer silenci per geòfons/perill',
                'CONTINUAR / REPRENDRE: 1 toc llarg (3 s) + 1 toc curt (1 s) (▄▄▄▄ ▄)',
                'S.O.S. (bomber atrapat): tocs curts repetitius i continus (▄ ▄ ▄ ▄...)'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-31': [
    {
      shortLabel: 'Esquema · Medi Natural GRAE/GRCR',
      title: 'Salvaments i Recerques en Medi Natural Terrestre GRAE/GRCR',
      overview:
        'Marc legal (Llei 5/1994, NEUCAT, ALLAUCAT), història i seus GRAE (1997) i GRCR (2007/2022), tipologia d’intervencions, les 8 maniobres amb cordes, metodologies de recerca i UPA.',
      branches: [
        {
          title: 'Marc Legal, GRAE (1997) i GRCR (2007/2022)',
          items: [
            {
              label: 'GRAE: Fusió i Les 4 Seus de Muntanya ("C-O-S-V")',
              children: [
                'Llei 5/1994 · Plans NEUCAT (nevades) i ALLAUCAT (allaus)',
                'GRAE creat el 1997 de la fusió GRM (Muntanya) + GRS (Subaquàtic) · treballa amb metges del GEM',
                '4 Seus GRAE Muntanya: 1. Cerdanyola (també Subaquàtic i helicòpter), 2. Olot, 3. La Seu d’Urgell, 4. Valls'
              ]
            },
            {
              label: 'GRCR (Grup Caní de Recerca): Les 2 Seus',
              children: [
                'Creat el 2007 i consolidat professionalment el 2022',
                '2 Seus fixes a Catalunya: Lleida i Vic'
              ]
            }
          ]
        },
        {
          title: 'Classificació Oficial d’Intervencions (Cap. 2–3)',
          items: [
            {
              label: 'Rescat, Evacuació i Recerca',
              children: [
                'Rescat: auxili i extracció de persona ferida o físicament bloquejada (encigallada) amb maniobra tècnica/grua',
                'Evacuació: trasllat preventiu de persones il·leses amenaçades per risc extern (allau, crescuda, incendi)',
                'Recerca: persona desapareguda sense ubicació ni comunicació (activa UPA i metodologies)'
              ]
            },
            {
              label: 'Guiatge (Remot) vs. Acompanyament (Presencial)',
              children: [
                'Guiatge: orientació a DISTÀNCIA (per telèfon/app) a una persona il·lesa amb qui hi ha contacte',
                'Acompanyament: auxili PRESENCIAL caminant amb persona il·lesa/esgotada fins a lloc segur SENSE maniobra tècnica'
              ]
            }
          ]
        },
        {
          title: 'Les 8 Maniobres amb Cordes en Medi Natural (Cap. 4.2)',
          items: [
            {
              label: 'Ancoratges, Progressió i Descens',
              children: [
                '1. Ancoratges (naturals: arbres/roques; artificials: vehicles/claus; mínim 2 punts i angle < 60°)',
                '2. Ràpel (descens controlat amb nus al final) · 3. Ascens tipus escalada · 4. Ascens per corda fixa (bloquejadors)'
              ]
            },
            {
              label: 'Assegurament, Passamans, Polispast i Tirolina',
              children: [
                '5. Tirolina (pas aeri tensat: RESERVADA A ESPECIALISTES GRAE per les altes tensions!) · 6. Assegurament de víctima (triangle/arnès/llitera)',
                '7. Polispast (avantatge mecànic per hissar) · 8. Passamans (línia horitzontal/inclinada en cornises o talussos)'
              ]
            }
          ]
        },
        {
          title: 'Metodologies Humanes de Recerca (Cap. 5.1–5.4)',
          items: [
            {
              label: 'Extensiva vs. Intensiva (Hipòtesi Clau)',
              children: [
                '1. Recerca Extensiva (1a fase): hipòtesi = víctima EN MOVIMENT · poc personal, alta velocitat per pistes, camins i carenes',
                '2a. Intensiva per Línies Naturals: hipòtesi = víctima ESTÀTICA prop de vorals/marges/barrancs (10–20 m) → ALTA EFECTIVITAT NOCTURNA!',
                '2b. Intensiva per Sectors: hipòtesi = víctima ESTÀTICA al bosc → molt personal en filera paral·lela, baixa velocitat, màxima minuciositat'
              ]
            },
            {
              label: 'Punts Probables i Contenció',
              children: [
                '3. Punts Probables: revisió directa de masies, cabanes, coves, fonts o itineraris freqüentats',
                '4. Recerca per Contenció: tancar perímetre exterior (cruïlles/carreteres) cap al centre → ideal amb molt personal immediat i en NENS'
              ]
            }
          ]
        },
        {
          title: 'Recerca Canina del GRCR (Cap. 5.6)',
          items: [
            {
              label: 'Rastreig vs. Venteig',
              children: [
                'Gossos de RASTREIG: amb arnès i corretja llarga, segueixen l’olor específica sobre el TERRA a partir d’una mostra d’olor sortint de l’UPA',
                'Gossos de VENTEIG: treballen solts olorant el con d’olor humana dispersa a l’AIRE (grans àrees/allaus) → exigeix sector LLIURE d’altres cercadors!'
              ]
            }
          ]
        },
        {
          title: 'Protecció de l’UPA i Gestió del Sinistre (Cap. 6)',
          items: [
            {
              label: 'Últim Punt d’Albirament (UPA)',
              children: [
                'Últim lloc físic confirmat on va ser vista la víctima (o el seu vehicle estacionat)',
                'ABALISAR I PROTEGIR IMMEDIATAMENT perquè ningú trepitgi ni contamini el rastre olfactiu per als gossos del GRCR',
                'El Centre de Comandament s’ubica a prop i accessible, però suficientment ALLUNYAT de l’UPA'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-32': [
    {
      shortLabel: 'Esquema 1 · Anatomia, Estab. i EV',
      title: 'Anatomia, Estabilització i Vehicles Elèctrics',
      overview:
        'Anatomia (muntants A-B-C-D, vidres laminat/temperat), 4 moviments, autobusos/camions/TAV, Vehicle A vs. B, estabilització 3/4/5 punts (cinquena falca) i protocols HV/EV.',
      branches: [
        {
          title: 'Anatomia del Vehicle, Vidres i Seguretat (Cap. 2.1)',
          items: [
            {
              label: 'Muntants i Tipus de Vidres',
              children: [
                'Muntants A (parabrisa), B (central: allotja pretensor/cinturó), C (luneta), D (familiars/SUV) → "pelar" abans de tallar',
                'Vidre LAMINAT (parabrisa, 2 capes + PVB: es talla amb serra) vs. Vidre TEMPERAT (laterals/luneta: es punxa a la cantonada)'
              ]
            },
            {
              label: 'Els 4 Moviments i els 3 Nivells de Seguretat',
              children: [
                'Moviments: 1. Longitudinal · 2. Balanceig (Roll) · 3. Capcineig (Pitch) · 4. Guinyada (Yaw)',
                'Seguretat: Primària (activa: ABS/ESP) · Secundària (passiva: cinturó/airbag) · Terciària (post-impacte: eCall 112, tall bomba/bateria)'
              ]
            }
          ]
        },
        {
          title: 'Vehicles Pesants (Autobusos, Camions) i Ferrocarril',
          items: [
            {
              label: 'Autobusos i Camions (2.2–2.3)',
              children: [
                'Autobús: alt 4,00 m · ample 2,55 m · llarg 13,5–18,75 m · MMA 18 t (2 eixos) · norma antivolcada ECE R66',
                'Camions MMA: 2 eixos = 18 t · 3 eixos = 25–26 t · 4 eixos = 31–32 t · Tràiler = 40 t · Instal·lació 24 V (2×12 V) · bloquejar suspensió de cabina!'
              ]
            },
            {
              label: 'Ferrocarril i TAV (2.4)',
              children: [
                'TAV > 300 km/h · Catenària 1.500/3.000 V CC fins a 25.000 V CA (25 kV) · sobre 2 bogis pesants',
                'PROHIBIT entrar a vies sense CONFIRMACIÓ OFICIAL del Centre de Control Ferroviari de tall de circulació i posada a terra'
              ]
            }
          ]
        },
        {
          title: 'Estabilització Manual i Primària (Vehicle A vs. B)',
          items: [
            {
              label: 'Vehicle A vs. Vehicle B (3.2.3)',
              children: [
                'Vehicle A = el que conté les víctimes a rescatar · Vehicle B = el que es troba a sobre o contra A',
                'ORDRE D’ESTABILITZACIÓ: estabilitzar SEMPRE PRIMER el Vehicle B!'
              ]
            },
            {
              label: 'Estabilització Manual i en 3, 4 i 5 Punts (4.1)',
              children: [
                'Manual d’urgència: 4 bombers (un a cada cantonada) per permetre accés sanitari immediat',
                'Primària: blocs/falques sota els 4 punts del xassís + falcat de roda · 5 PUNTS ("Cinquena Falca"): sota part posterior o Muntant C del costat d’extracció (evita enfonsament en tallar sostre)'
              ]
            }
          ]
        },
        {
          title: 'Vehicles Elèctrics i Híbrids (HEV / BEV)',
          items: [
            {
              label: 'Identificació d’Alta Tensió (HV) i Bucle HVIL',
              children: [
                'Cablejat d’alta tensió (400–800 V CC) identificat obligatòriament en color TARONJA',
                'HVIL (High Voltage Interlock Loop): llaç de baixa tensió que recorre connectors i tapes; si s’obre o talla, obre els contactors principals'
              ]
            },
            {
              label: 'Seqüència Segura en Vehicle Electrificat',
              children: [
                'Assegurar escena → immobilitzar (posició P, allunyar clau) → desconnectar 12 V / bucle HVIL o Service Plug segons full de rescat',
                'Estabilitzar abans de tallar, esperar descàrrega de condensadors (1–2 min) i PROHIBIT tallar o tocar cables taronja'
              ]
            }
          ]
        },
        {
          title: 'Seguretat en Intervenció i Àrea AGO (Cap. 5)',
          items: [
            {
              label: 'Cercles d’Acció i les 3 Àrees de l’AGO',
              children: [
                'Cercle interior (3–5 m): només comandament 360°, bomber sanitari i binomi tècnic d’eines',
                'Cercle exterior (5–10 m): 1. Àrea d’Eines (lona) · 2. Àrea de Ferralla (parts punxants a terra, lluny del SEM) · 3. Àrea de Relleu · posar protectors de talls vius!'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Esquema 2 · Excarceració i 30-60-90',
      title: 'Tècniques d’Excarceració i Regla 30-60-90',
      overview:
        'Atrapaments (Mecànic, Físic I i II), alliberaments (Controlat, Immediat, Rautek), Hora d’Or (10-10-20-20), biomecànica (Ec = ½mv²), regla airbags 30-60-90 i maniobres.',
      branches: [
        {
          title: 'Tipus d’Atrapament i Alliberament (3.2.4–3.2.5)',
          items: [
            {
              label: 'Mecànic vs. Físic Tipus I vs. Físic Tipus II',
              children: [
                'Mecànic: portes bloquejades però habitacle íntegre i persona il·lesa (surt pel propi peu en obrir porta)',
                'Físic Tipus I (PARANY): lliure de ferralla, però no pot sortir per les seves LESIONS MÈDIQUES (cal crear espai per treure’l a 0°)',
                'Físic Tipus II: part del cos FÍSICAMENT PRESONERA de l’estructura deformada (pedals/tablier → cal descarcerar amb RAM/separador)'
              ]
            },
            {
              label: 'Els 3 Tipus d’Alliberament i Hora d’Or',
              children: [
                '1. Controlat (estable, immobilització total a 0°, Pla A ~20 min) · 2. Immediat (crític XABCDE, Pla B ràpid ~5–10 min) · 3. Emergència (Rautek en segons: foc/explosió/ACR)',
                'Hora d’Or de Cowley (60 min) — Regla 10-10-20-20: 10’ arribada + 10’ valoració/estab. + 20’ excarceració + 20’ trasllat'
              ]
            }
          ]
        },
        {
          title: 'Biomecànica del Xoc (3.2.6) i PAI (Pla A / Pla B)',
          items: [
            {
              label: 'Energia Cinètica, 3 Impactes i Indicadors',
              children: [
                'Ec = ½ · m · v² (duplicar velocitat multiplica l’energia × 4) · 3 Impactes: 1. Vehicle · 2. Cos vs. habitacle · 3. Òrgans vs. ossos',
                'Indicadors d’alta energia: deformació > 30 cm lateral / > 45 cm global, projecció > 7 m, caiguda > 3 m, mort d’un altre ocupant, excarceració > 20 min'
              ]
            },
            {
              label: 'Els 5 Mecanismes de Fractura i PAI',
              children: [
                '1. Flexió · 2. Cisallament · 3. Compressió (Fractura COMMINUTA) · 4. Torsió (Fractura ESPIROIDE) · 5. Tracció (avulsió)',
                'PAI obligatori des del minut 1: definir sempre un Pla A (òptim) i un Pla B (ràpid per descompensació)'
              ]
            }
          ]
        },
        {
          title: 'Regla 30-60-90 d’Airbags i Eines Hidràuliques',
          items: [
            {
              label: 'Distàncies de Seguretat Airbags No Activats (2.1.4)',
              children: [
                '30 cm del volant (conductor) · 60 cm del tablier (acompanyant) · 90 cm / 25–30 cm dels airbags laterals/cortina',
                'Col·locar protector d’airbag de volant i esperar 1–2 min després de desconnectar bateria (condensador de reserva)'
              ]
            },
            {
              label: 'Eines Hidràuliques (700 bar)',
              children: [
                'Treball fins a 700 bar (70 MPa, Principi de Pascal): Cisalla (tall), Separador (obertura/tracció) i Cilindre RAM (empenta)'
              ]
            }
          ]
        },
        {
          title: 'Maniobres de Creació d’Espai en Turismes (4.2–4.3)',
          items: [
            {
              label: 'Obertura Lateral, Tercera Porta i Sostre',
              children: [
                'Retirada/abatiment de sostre: permet extracció alineada a 0° amb tauler espinal',
                'Tercera Porta (vehicles 2/3 portes) o obertura total de lateral (portes + muntant B)',
                'Desplaçament/aixecament de tablier: tall d’alleujament a base del muntant A + RAM recolzat a base del muntant B (amb bloc de fusta a terra!)'
              ]
            }
          ]
        },
        {
          title: 'Maniobres Especials en Bolcades i Autobusos (4.4)',
          items: [
            {
              label: 'La Catalana, La Tenda i Llauna de Sardines',
              children: [
                '"La Catalana" (bolcada lateral): tall dels muntants A, B i C i abatiment del panell del sostre per obrir tot l’habitacle',
                '"La Tenda" (bolcada total sobre el sostre): elevació de la part posterior amb RAM o coixins pneumàtics ("aixecar 1 cm, falcar 1 cm")',
                '"Llauna de sardines" (autobús bolcat lateralment): obertura en solapa del sostre o terra del bus'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-33': [
    {
      shortLabel: 'Esquema · Rescat Urbà i Cordes',
      title: 'Rescat Urbà, Alçada, Cordes i Espais Confinats',
      overview:
        '3 tipologies i llindar > 2 m (RD 2177/2004), cordes de doble homologació, nusos i polispasts, 10 maniobres i sistemes anticaigudes, AEA, espais confinats i ascensors.',
      branches: [
        {
          title: 'Tipologies de Rescat Urbà i Marc Normatiu (Cap. 1–2.1)',
          items: [
            {
              label: 'Les 3 Tipologies Oficials i Llindar Legal',
              children: [
                '1. Intervencions en alçada (façanes, cobertes, bastides, grues) · 2. Sota rasant / espais confinats verticals (pous, fossats, patis) · 3. Ascensors',
                'Marc: Llei 31/1995, RD 486/1997, RD 1215/1997 i RD 2177/2004 → Treball en alçada a partir de > 2 METRES!'
              ]
            }
          ]
        },
        {
          title: 'Cordes, Nusos, Polispasts i SAS (Cap. 2.2)',
          items: [
            {
              label: 'Cordes (Doble Homologació) i Nusos',
              children: [
                'Corda Bombers = DOBLE HOMOLOGACIÓ: semiestàtica Tipus A (EN 1891, < 5% allargament) + dinàmica en simple (EN 892)',
                'Ànima (80% resistència) + Camisa (protecció fregament/UV) · Tot nus redueix la resistència entre un 20% i un 50%',
                'Nusos: Vuit (ancoratge/encordament), Ballestrinca (amarratge), Dinàmic UIAA (fre), Prusik i Machard (autoblocants)'
              ]
            },
            {
              label: 'Polispasts i SAS (Sistema d’Ancoratge de Seguretat)',
              children: [
                'Polispasts: Politja fixa 1:1 (només direcció) · 2:1 (÷2) · 3:1 en "Z" (÷3) · 6:1 compost (÷6)',
                'SAS: mínim 2 punts independents triangulats · angle òptim ≤ 60° (MAI > 90°–120°: a 120° cada punt suporta el 100%!)'
              ]
            }
          ]
        },
        {
          title: '10 Maniobres, Sistemes Contra Caigudes i AEA (2.3–2.4)',
          items: [
            {
              label: 'Els 3 Sistemes Contra Caigudes i Factor de Caiguda',
              children: [
                '1. Retenció (impedeix arribar a la vora, FC = 0) · 2. Posicionament/Suspensió (mans lliures, SEMPRE amb 2a corda anticaigudes)',
                '3. Anticaigudes: únic que es connecta a l’anella "A" (EN 361), força de xoc < 6 kN, calcular tirant d’aire · FC (h/L) de 0 a 2'
              ]
            },
            {
              label: 'Les 10 Maniobres i Regles d’Or de Cordes en AEA',
              children: [
                '10 maniobres: retenció, línia de vida, escala, ràpel, corda fixa, descens víctima, polispast, rescat company suspès, llitera, AEA',
                'Seguretat en AEA: 1. Operador a TORRETA · 2. MOTOR ATURAT un cop ancorades les cordes · 3. Mode MGO (punts homologats)'
              ]
            }
          ]
        },
        {
          title: 'Intervencions Sota Rasant i Espais Confinats Verticals',
          items: [
            {
              label: 'Riscos Atmosfèrics i Control Previ',
              children: [
                'Pous, fossats i patis interiors: mesura atmosfèrica prèvia (O₂, %LII, CO, H₂S) abans de baixar i ventilació forçada si cal',
                'Ús obligatori d’ERA / línia d’aire si hi ha atmosfera deficient o tòxica, i vigilància exterior contínua'
              ]
            },
            {
              label: 'Extracció Vertical Segura',
              children: [
                'Muntatge de trípode o punt alt (AEA/SAS) amb polispast de rescat + corda independent de seguretat',
                'Assegurament de víctima amb triangle d’evacuació o llitera vertical i binomi de reserva a l’exterior'
              ]
            }
          ]
        },
        {
          title: 'Tipus d’Ascensors i Maniobra Manual (Cap. 3.1)',
          items: [
            {
              label: 'Electromecànic vs. Hidràulic vs. MRL Gearless',
              children: [
                'Electromecànic: contrapès = cabina buida + 50% càrrega màxima (si hi ha poca càrrega, en obrir fre la cabina PUJA sola!)',
                'Hidràulic (pistó oli, sense contrapès): amb la vàlvula vermella d’emergència la cabina NOMÉS POT BAIXAR per gravetat!',
                'MRL (Gearless, sense cambra de màquines): motor compacte dins del forat superior; quadre i botonera SAI al replà superior'
              ]
            }
          ]
        },
        {
          title: 'Protocol de Rescat en Ascensors i les 3 Sèries (3.2–3.3)',
          items: [
            {
              label: 'Actuació Pas a Pas (3.2)',
              children: [
                '1. Localitzar cabina i parlar amb ocupants (no obrir porta sense mirar on és la cabina!) · 2. Tallar força trifàsica CONSERVANT enllumenat/ventilació',
                '3. Anivellar cabina amb planta (prioritari) · 4. Si està encunyada per sobre del replà: TAPAR físicament el buit inferior cap al fossat!'
              ]
            },
            {
              label: 'La Regla d’Or de les 3 Sèries Elèctriques (3.3)',
              children: [
                'Abans d’entrar al forat, fossat o sostre: activar MÍNIM 2 DE LES 3 SÈRIES elèctriques de seguretat',
                '1. Obertura/bloqueig de porta exterior de planta (clau triangular) · 2. STOP del fossat · 3. STOP del sostre de cabina'
              ]
            }
          ]
        }
      ]
    }
  ],
  'tema-34': [
    {
      shortLabel: 'Esquema 1 · Hidrologia i Llindars SMC',
      title: 'Hidrologia, Dinàmica Fluvial i Llindars SMC/INUNCAT',
      overview:
        'Impacte mundial (> 40%), episodis a Catalunya, mesures estructurals vs. INUNCAT, dinàmica fluvial (meandre exterior), Període de Retorn (T10–T500) i llindars SMP/SMC.',
      branches: [
        {
          title: 'Impacte Històric i Mesures de Protecció (Cap. 1)',
          items: [
            {
              label: 'Dades Mundials i Riuades Històriques a Catalunya',
              children: [
                'Les inundacions representen > 40% dels desastres naturals mundials',
                'Vallès Occidental 1962 (≈ 1.000 morts) · Bages/Baix Llobregat 1971 (21 morts) · Tarragona 1994',
                'Francolí 2019 (intervenció GREC per col·lapses) · Terres de l’Ebre (Alcanar 2018, 2021, 2023)'
              ]
            },
            {
              label: 'Mesures Estructurals vs. No Estructurals',
              children: [
                'Estructurals (enginyeria física): dics, canalitzacions, basses de laminació i clavegueram',
                'No estructurals: planificació urbanística, mapes d’inundabilitat, avisos meteorològics i Pla Especial INUNCAT'
              ]
            }
          ]
        },
        {
          title: 'Dinàmica Fluvial, Meandres i Aiguabarreig (Cap. 2)',
          items: [
            {
              label: 'Cursos del Riu i Torrents Mediterranis',
              children: [
                'Curs Alt (forta pendent/erosió) → Curs Mitjà (transport/meandres) → Curs Baix (plana al·luvial/delta)',
                'Torrents, rieres i rambles de règim efímer/intermitent: generen crescudes sobtades molt perilloses (flash floods)'
              ]
            },
            {
              label: 'Meandre Exterior i Aiguabarreig (PARANY)',
              children: [
                'Meandre: a la PART EXTERIOR de la corba la velocitat i l’erosió són màximes (soscava el talús i risc d’esfondrament sota camions/bombers!); a l’interior sedimenta',
                'Aiguabarreig: confluència de dos rius on es multiplica sobtadament el cabal i la turbulència'
              ]
            }
          ]
        },
        {
          title: 'Període de Retorn (T) i Probabilitat Anual (2.4)',
          items: [
            {
              label: 'Fórmula P (%) = (1 / T) × 100',
              children: [
                'T = 10 anys (T10) → 10% anual (zona freqüent: cobreix T10 i T25 = 4%)',
                'T = 50 anys (T50) → 2% anual (zona ocasional: T50 a T100)'
              ]
            },
            {
              label: 'T100 (Urbanisme) i T500 (Excepcional)',
              children: [
                'T = 100 anys (T100) → 1% anual (inundació greu: referència principal de limitació urbanística)',
                'T = 500 anys (T500) → 0,2% anual (zona excepcional: màxima extensió cartografiada a l’INUNCAT)'
              ]
            }
          ]
        },
        {
          title: 'Llindars SMP del Servei Meteorològic de Catalunya (Cap. 3)',
          items: [
            {
              label: 'Intensitat (30 min) vs. Acumulació (24 h)',
              children: [
                'Intensitat de pluja (en 30 min): Llindar Baix > 20 mm | Llindar Alt > 40 mm (xàfecs torrencials; 1 mm = 1 L/m²)',
                'Acumulació de pluja (en 24 h): Llindar Baix > 100 mm | Llindar Alt > 200 mm (desbordament de grans rius)'
              ]
            },
            {
              label: 'Matriu de Perill SMC (Escala 0 a 6)',
              children: [
                'Nivell 0 (Verd = sense perill) · Nivells 1, 2, 3 (Groc/Taronja = superació llindar baix)',
                'Nivells 4, 5, 6 (Taronja/Vermell = superació llindar alt, perill molt alt o extrem)'
              ]
            }
          ]
        },
        {
          title: 'Visors Hidrològics en Temps Real (3.3)',
          items: [
            {
              label: 'Control de Cabals (m³/s) i Làmina d’Aigua',
              children: [
                'Visor d’Aforadors de l’ACA (Agència Catalana de l’Aigua): per a les conques internes de Catalunya',
                'Visor SAIH Ebro: per a la conca de l’Ebre (Segre, Noguera Pallaresa, Ebre)'
              ]
            }
          ]
        }
      ]
    },
    {
      shortLabel: 'Esquema 2 · Rescat Aquàtic i Inundacions',
      title: 'Rescat Aquàtic i Actuació en Inundacions',
      overview:
        'Buidatge i potabilització en 2 fases, les 3 categories de rescat aquàtic (Indirectes prioritàries, sistema desembragable), límits Douglas/rius per a no especialistes i zonatge.',
      branches: [
        {
          title: 'Operacions de Suport: Buidatge, Contenció i Potabilització',
          items: [
            {
              label: 'Buidatge i Contenció (Cap. 4.1–4.2)',
              children: [
                'Buidatge/esgotament: autobombes, motobombes, electrobombes submergibles, turbobombes, hidroerenjadors i bombes de llots (sòlids/fang)',
                'Contenció i desviament: sacs terrers, gabions i barreres mòbils'
              ]
            },
            {
              label: 'Potabilització d’Emergència (2 Fases)',
              children: [
                '1a Fase — Clarificació: decantació i filtració de partícules i terbolesa',
                '2a Fase — Desinfecció: cloració per eliminar patògens biològics'
              ]
            }
          ]
        },
        {
          title: 'Les 3 Categories de Maniobres de Rescat Aquàtic (4.4)',
          items: [
            {
              label: '1. Indirectes (PRIORITÀRIES) i 2. Directes',
              children: [
                '1. Maniobres Indirectes (des de fora, SENSE entrar a l’aigua): bossa de rescat flotant, perxa, mànega inflada d’aire, AEA/pont → SEMPRE PRIORITÀRIES!',
                '2. Maniobres Directes: el rescatador entra nedant per agafar una víctima inconscient o esgotada (risc molt alt)'
              ]
            },
            {
              label: '3. Maniobres Combinades (Sistema Desembragable)',
              children: [
                'Rescatador a l’aigua assegurat amb corda des de riba: PROHIBIT nuar la corda fixa al cos (el corrent submergeix el bomber!)',
                'Connexió obligatòria a l’anella del SISTEMA DESEMBRAGABLE (zafada ràpida) de l’armilla d’aigües braves o a un cap flotant'
              ]
            }
          ]
        },
        {
          title: 'Límits per a NO Especialistes i GRAE Subaquàtic (Cap. 5.1)',
          items: [
            {
              label: 'Fronteres d’Actuació al Mar i en Rius',
              children: [
                'Al Mar (Escala Douglas): evitar entrar amb onatge > 2,5 m (Grau 5 Maregassa: 2,5–4 m) → topall màxim = Grau 4 Forta Maror (1,25–2,5 m)',
                'En Rius: evitar entrar en rius d’aigües braves de Grau > 3 (Escala I–VI)',
                'PROHIBIT a no especialistes entrar a l’aigua per a maniobres de DESEMBOSSAMENT (efecte sifó mortal!)'
              ]
            },
            {
              label: 'Recursos del GRAE Subaquàtic (Cerdanyola)',
              children: [
                'Embarcacions pneumàtiques tipus RAFT, propulsors aquàtics, robots submarins ROV i equips de busseig'
              ]
            }
          ]
        },
        {
          title: 'Zonatge Aquàtic i EPI Obligatori (Cap. 5.4)',
          items: [
            {
              label: 'Zona Calenta = Zona d’Aigua + Zona Humida',
              children: [
                'Zona d’Aigua (crítica, dins el corrent) + Zona Humida (marges i riberes amb risc imminent de caiguda)',
                'A la Zona Humida és OBLIGATORI armilla de flotació i casc (MAI l’EPI estructural de foc, que absorbeix aigua i enfonsa!)'
              ]
            }
          ]
        },
        {
          title: 'Dispositiu de Seguretat al Riu i Riscos Específics',
          items: [
            {
              label: 'Vigilància Activa (Un Dins / Un Fora)',
              children: [
                'Regla "Un dins / un fora" · Guaita AIGÜES AMUNT (avisa amb xiulet de troncs, cotxes o crescudes)',
                'Equip de seguretat AIGÜES AVALL amb bosses de corda de llançament preparades'
              ]
            },
            {
              label: 'Riscos Ocults en Aigües Braves i Vehicles',
              children: [
                'Efecte sifó en reixes, embornals, passos subterranis i arbres travessats · Efecte rebuf en rescloses',
                'En vehicles arrossegats (Arquimedes/flotabilitat): ancoratge i evacuació abans que perdin adherència lateral'
              ]
            }
          ]
        }
      ]
    }
  ]
};
