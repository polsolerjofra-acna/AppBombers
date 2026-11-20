import React from 'react';
import { Compass } from 'lucide-react';

/**
 * Contenidor d'Esquemes i Diagrames SVG integrats al temari.
 * Inclou diagrames visuals per a Física, Química, Hidràulica, Electricitat, Instal·lacions,
 * Cartografia, Construcció, Mecànica 4x4, SISCOM, Triatge START, Col·lapses, Muntanya i Inundacions.
 */
export default function DiagramContainer({ title, caption, diagramType, customSvg }) {
  const renderBuiltInDiagram = () => {
    switch (diagramType) {
      case 'venturi':
        return (
          <svg viewBox="0 0 640 200" className="w-full max-w-2xl mx-auto h-auto font-sans">
            <defs>
              <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path
              d="M 30 35 L 190 35 L 260 72 L 380 72 L 450 35 L 610 35 L 610 155 L 450 155 L 380 118 L 260 118 L 190 155 L 30 155 Z"
              fill="url(#waterGrad)"
              stroke="#0284c7"
              strokeWidth="3"
            />
            <line x1="70" y1="95" x2="155" y2="95" stroke="#0369a1" strokeWidth="3" />
            <polygon points="155,89 170,95 155,101" fill="#0369a1" />
            <line x1="275" y1="95" x2="355" y2="95" stroke="#dc2626" strokeWidth="4" />
            <polygon points="355,88 372,95 355,102" fill="#dc2626" />
            <line x1="470" y1="95" x2="555" y2="95" stroke="#0369a1" strokeWidth="3" />
            <polygon points="555,89 570,95 555,101" fill="#0369a1" />

            <text x="115" y="25" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[13px] font-bold">
              Secció A₁ (Ampla) · Cabal Q = A₁·v₁
            </text>
            <text x="115" y="125" textAnchor="middle" className="fill-sky-900 dark:fill-sky-200 text-[12px] font-semibold">
              ↑ Pressió (P₁) | ↓ Velocitat (v₁)
            </text>

            <text x="320" y="56" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[13px] font-bold">
              Estrenyiment A₂ (Efecte Venturi)
            </text>
            <text x="320" y="146" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[12px] font-bold">
              ↓ Pressió (P₂ - Succió d'escumogen) | ↑↑ Velocitat (v₂)
            </text>
          </svg>
        );

      case 'pascal':
        return (
          <svg viewBox="0 0 640 210" className="w-full max-w-2xl mx-auto h-auto font-sans">
            <path
              d="M 110 45 L 165 45 L 165 145 L 390 145 L 390 45 L 510 45 L 510 180 L 110 180 Z"
              fill="#38bdf8"
              fillOpacity="0.25"
              stroke="#0284c7"
              strokeWidth="3"
            />
            <rect x="113" y="60" width="49" height="16" fill="#64748b" rx="2" />
            <line x1="137" y1="18" x2="137" y2="55" stroke="#dc2626" strokeWidth="3" />
            <polygon points="131,52 137,60 143,52" fill="#dc2626" />
            <text x="137" y="14" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[12px] font-bold">
              F₁ (Petita) / S₁
            </text>

            <rect x="393" y="68" width="114" height="16" fill="#475569" rx="2" />
            <line x1="450" y1="65" x2="450" y2="25" stroke="#16a34a" strokeWidth="4" />
            <polygon points="443,28 450,17 457,28" fill="#16a34a" />
            <text x="450" y="58" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[12px] font-bold">
              F₂ (Multiplicada!) / S₂
            </text>

            <text x="290" y="168" textAnchor="middle" className="fill-sky-900 dark:fill-sky-200 text-[13px] font-bold">
              Principi de Pascal: P₁ = P₂ ⇒ F₁ / S₁ = F₂ / S₂ (Cisalla i separador d'excarceració)
            </text>
          </svg>
        );

      case 'fire_elevation':
        return (
          <svg viewBox="0 0 640 200" className="w-full max-w-2xl mx-auto h-auto font-sans">
            <rect x="35" y="130" width="95" height="45" rx="6" fill="#dc2626" />
            <text x="82" y="157" textAnchor="middle" fill="#fff" className="text-[12px] font-bold">
              BOMBA (PB)
            </text>
            <rect x="440" y="20" width="120" height="155" rx="4" fill="#64748b" fillOpacity="0.2" stroke="#64748b" strokeWidth="2" />
            <line x1="440" y1="58" x2="560" y2="58" stroke="#64748b" strokeDasharray="4" />
            <line x1="440" y1="96" x2="560" y2="96" stroke="#64748b" strokeDasharray="4" />
            <line x1="440" y1="134" x2="560" y2="134" stroke="#64748b" strokeDasharray="4" />
            <path d="M 130 152 Q 290 152 440 42" fill="none" stroke="#0284c7" strokeWidth="5" strokeDasharray="6 3" />
            <text x="285" y="108" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-[13px] font-bold">
              PB = PL (6 bar) + ΔPf (fregament) ± ΔPg (+1 bar cada 10 m)
            </text>
            <text x="500" y="42" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[12px] font-bold">
              Llança (PL) a h = 30 m
            </text>
          </svg>
        );

      case 'pumps_curves':
        return (
          <svg viewBox="0 0 680 230" className="w-full max-w-2xl mx-auto h-auto font-sans">
            {/* Panell 1: Bomba centrífuga */}
            <rect x="15" y="15" width="200" height="195" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="115" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              1. Bomba Centrífuga
            </text>
            <circle cx="115" cy="115" r="52" fill="#0ea5e9" fillOpacity="0.18" stroke="#0284c7" strokeWidth="3" />
            <rect x="115" y="50" width="55" height="20" fill="#0ea5e9" fillOpacity="0.3" stroke="#0284c7" strokeWidth="2" />
            <circle cx="115" cy="115" r="22" fill="#dc2626" fillOpacity="0.85" />
            <path d="M 115 93 Q 138 98 142 115" fill="none" stroke="#fff" strokeWidth="2.5" />
            <path d="M 137 115 Q 132 138 115 142" fill="none" stroke="#fff" strokeWidth="2.5" />
            <path d="M 115 137 Q 92 132 88 115" fill="none" stroke="#fff" strokeWidth="2.5" />
            <path d="M 93 115 Q 98 92 115 88" fill="none" stroke="#fff" strokeWidth="2.5" />
            <text x="115" y="119" textAnchor="middle" fill="#fff" className="text-[10px] font-bold">
              RODET
            </text>
            <text x="115" y="185" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[11px] font-semibold">
              Entrada axial → Voluta (v → P)
            </text>

            {/* Panell 2: Aspiració màxima */}
            <rect x="230" y="15" width="205" height="195" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="332" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              2. Límit d'Aspiració
            </text>
            <rect x="295" y="52" width="75" height="30" rx="5" fill="#dc2626" />
            <text x="332" y="71" textAnchor="middle" fill="#fff" className="text-[11px] font-bold">
              BOMBA (Buit)
            </text>
            <rect x="255" y="150" width="155" height="45" rx="4" fill="#38bdf8" fillOpacity="0.35" stroke="#0284c7" strokeWidth="2" />
            <line x1="332" y1="82" x2="332" y2="175" stroke="#334155" strokeWidth="7" />
            <text x="332" y="138" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[11px] font-bold">
              Hmàx = 10,33 m (Teòric)
            </text>
            <text x="332" y="172" textAnchor="middle" className="fill-sky-900 dark:fill-sky-200 text-[11px] font-bold">
              Real = 7 a 8 m (P_atm empeny)
            </text>

            {/* Panell 3: Corba Bomba vs Instal·lació */}
            <rect x="450" y="15" width="215" height="195" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="557" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              3. Punt de Funcionament
            </text>
            <line x1="475" y1="175" x2="645" y2="175" stroke="#64748b" strokeWidth="2" />
            <line x1="475" y1="175" x2="475" y2="55" stroke="#64748b" strokeWidth="2" />
            <path d="M 475 75 Q 565 85 635 165" fill="none" stroke="#dc2626" strokeWidth="3" />
            <path d="M 475 155 Q 550 145 630 65" fill="none" stroke="#0284c7" strokeWidth="3" />
            <circle cx="566" cy="113" r="6" fill="#16a34a" />
            <text x="566" y="100" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-bold">
              Punt d'equilibri (Q, P)
            </text>
            <text x="515" y="70" className="fill-red-600 text-[10px] font-bold">Corba Bomba</text>
            <text x="580" y="155" className="fill-sky-600 text-[10px] font-bold">Instal·lació</text>
            <text x="560" y="193" textAnchor="middle" className="fill-slate-500 text-[11px] font-semibold">
              Cabal (Q) →
            </text>
          </svg>
        );

      case 'chemical_bonds':
        return (
          <svg viewBox="0 0 680 230" className="w-full max-w-2xl mx-auto h-auto font-sans">
            {/* 1. Enllaç Iònic */}
            <rect x="12" y="15" width="155" height="200" rx="10" fill="#fff1f2" className="dark:fill-slate-900" stroke="#fda4af" strokeWidth="2" />
            <text x="90" y="38" textAnchor="middle" className="fill-rose-700 dark:fill-rose-400 text-[12px] font-bold">
              1. ENLLAÇ IÒNIC
            </text>
            <text x="90" y="55" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[10px]">
              Metall + No-Metall (Robatori e⁻)
            </text>
            <circle cx="62" cy="112" r="22" fill="#38bdf8" fillOpacity="0.3" stroke="#0284c7" strokeWidth="2.5" />
            <text x="62" y="116" textAnchor="middle" className="fill-sky-800 dark:fill-sky-300 text-[12px] font-bold">Na⁺</text>
            <circle cx="118" cy="112" r="26" fill="#f43f5e" fillOpacity="0.25" stroke="#e11d48" strokeWidth="2.5" />
            <text x="118" y="116" textAnchor="middle" className="fill-rose-800 dark:fill-rose-300 text-[12px] font-bold">Cl⁻</text>
            <path d="M 75 88 Q 90 72 105 88" fill="none" stroke="#e11d48" strokeWidth="2" />
            <text x="90" y="78" textAnchor="middle" className="fill-rose-600 text-[10px] font-bold">cedeix 1 e⁻ →</text>
            <text x="90" y="168" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-semibold">
              Xarxa cristal·lina (Sal)
            </text>
            <text x="90" y="186" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-bold">
              Condueix FOSA o DISSOLTA
            </text>

            {/* 2. Covalent Polar */}
            <rect x="179" y="15" width="155" height="200" rx="10" fill="#f0f9ff" className="dark:fill-slate-900" stroke="#7dd3fc" strokeWidth="2" />
            <text x="256" y="38" textAnchor="middle" className="fill-sky-700 dark:fill-sky-400 text-[12px] font-bold">
              2. COVALENT POLAR
            </text>
            <text x="256" y="55" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[10px]">
              Compartició DESIGUAL (Imant)
            </text>
            <circle cx="256" cy="105" r="25" fill="#0284c7" fillOpacity="0.25" stroke="#0284c7" strokeWidth="2.5" />
            <text x="256" y="109" textAnchor="middle" className="fill-sky-900 dark:fill-sky-200 text-[12px] font-bold">O (δ⁻)</text>
            <circle cx="222" cy="138" r="14" fill="#38bdf8" fillOpacity="0.2" stroke="#0284c7" strokeWidth="2" />
            <text x="222" y="142" textAnchor="middle" className="fill-sky-900 dark:fill-sky-200 text-[10px] font-bold">H δ⁺</text>
            <circle cx="290" cy="138" r="14" fill="#38bdf8" fillOpacity="0.2" stroke="#0284c7" strokeWidth="2" />
            <text x="290" y="142" textAnchor="middle" className="fill-sky-900 dark:fill-sky-200 text-[10px] font-bold">H δ⁺</text>
            <text x="256" y="170" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-semibold">
              Aigua H₂O (104,5°), Alcohol
            </text>
            <text x="256" y="186" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-[10px] font-bold">
              Escuma ANTIALCOHOL!
            </text>

            {/* 3. Covalent Apolar */}
            <rect x="346" y="15" width="155" height="200" rx="10" fill="#fefce8" className="dark:fill-slate-900" stroke="#fde047" strokeWidth="2" />
            <text x="423" y="38" textAnchor="middle" className="fill-amber-700 dark:fill-amber-400 text-[12px] font-bold">
              3. COVALENT APOLAR
            </text>
            <text x="423" y="55" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[10px]">
              Compartició SIMÈTRICA (Sense pols)
            </text>
            <circle cx="423" cy="112" r="20" fill="#eab308" fillOpacity="0.25" stroke="#ca8a04" strokeWidth="2.5" />
            <text x="423" y="116" textAnchor="middle" className="fill-amber-900 dark:fill-amber-200 text-[12px] font-bold">C</text>
            <circle cx="423" cy="76" r="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            <circle cx="423" cy="148" r="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            <circle cx="387" cy="112" r="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            <circle cx="459" cy="112" r="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="423" y="170" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-semibold">
              Benzina, Gasoil, Metà CH₄
            </text>
            <text x="423" y="186" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-bold">
              NO es barreja amb l'aigua
            </text>

            {/* 4. Enllaç Metàl·lic */}
            <rect x="513" y="15" width="155" height="200" rx="10" fill="#f1f5f9" className="dark:fill-slate-900" stroke="#94a3b8" strokeWidth="2" />
            <text x="590" y="38" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              4. ENLLAÇ METÀL·LIC
            </text>
            <text x="590" y="55" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[10px]">
              Metall + Metall ("Mar d'electrons")
            </text>
            <circle cx="560" cy="95" r="14" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
            <circle cx="620" cy="95" r="14" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
            <circle cx="560" cy="132" r="14" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
            <circle cx="620" cy="132" r="14" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
            <text x="590" y="117" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-bold">
              e⁻  e⁻  e⁻  (lliures)
            </text>
            <text x="590" y="170" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-semibold">
              Ferro, Coure, Alumini
            </text>
            <text x="590" y="186" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 text-[10px] font-bold">
              Conductor SEMPRE (sòlid/fós)
            </text>
          </svg>
        );

      case 'pythagoras_aea':
        return (
          <svg viewBox="0 0 660 220" className="w-full max-w-2xl mx-auto h-auto font-sans">
            {/* Edifici */}
            <rect x="440" y="20" width="95" height="165" fill="#cbd5e1" fillOpacity="0.35" stroke="#475569" strokeWidth="2.5" />
            <text x="487" y="105" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[12px] font-bold">
              EDIFICI
            </text>
            {/* Terra */}
            <line x1="60" y1="185" x2="570" y2="185" stroke="#64748b" strokeWidth="3" />
            {/* Camió AEA + Estabilitzadors */}
            <rect x="115" y="145" width="90" height="35" rx="5" fill="#dc2626" />
            <text x="160" y="167" textAnchor="middle" fill="#fff" className="text-[11px] font-bold">
              AEA (30 m)
            </text>
            <line x1="105" y1="175" x2="105" y2="185" stroke="#eab308" strokeWidth="6" />
            <line x1="215" y1="175" x2="215" y2="185" stroke="#eab308" strokeWidth="6" />
            {/* Escala (Hipotenusa L = 30m) */}
            <line x1="180" y1="150" x2="440" y2="28" stroke="#eab308" strokeWidth="5" />
            {/* Angle 60° */}
            <text x="225" y="142" className="fill-amber-600 dark:fill-amber-400 text-[12px] font-bold">
              α = 60°
            </text>
            {/* Etiquetes trigonomètriques */}
            <text x="285" y="75" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[12px] font-bold">
              Hipotenusa L = 30 m (a² + b² = c²)
            </text>
            <text x="310" y="206" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-[12px] font-bold">
              Distància = L·cos(60°) = 30 × 0,5 = 15 m
            </text>
            <text x="595" y="105" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 text-[12px] font-bold">
              h = L·sin(60°)
            </text>
            <text x="595" y="123" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 text-[12px] font-bold">
              30 × 0,866 ≈ 26 m
            </text>
          </svg>
        );

      case 'simple_machines':
        return (
          <svg viewBox="0 0 680 220" className="w-full max-w-2xl mx-auto h-auto font-sans">
            {/* 1. Palanques 1r, 2n i 3r gènere */}
            <rect x="12" y="15" width="210" height="190" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="117" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              1. Els 3 Gèneres de Palanca
            </text>
            <text x="117" y="68" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[11px] font-bold">
              1r Gènere: FULCRE al mig (Alicates)
            </text>
            <text x="117" y="84" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[10px]">
              [ Força ] ─── ▲ (Fulcre) ─── [ Càrrega ]
            </text>
            <text x="117" y="118" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-bold">
              2n Gènere: RESISTÈNCIA al mig (AM &gt; 1)
            </text>
            <text x="117" y="134" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[10px]">
              ▲ (Fulcre) ─── [ Càrrega ] ─── [ Força ]
            </text>
            <text x="117" y="168" textAnchor="middle" className="fill-sky-600 dark:fill-sky-400 text-[11px] font-bold">
              3r Gènere: FORÇA al mig (AM &lt; 1, AEA)
            </text>
            <text x="117" y="184" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[10px]">
              ▲ (Fulcre) ─── [ Força ] ─── [ Càrrega ]
            </text>

            {/* 2. Pla Inclinat */}
            <rect x="235" y="15" width="210" height="190" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="340" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              2. Pla Inclinat (AM = L / h)
            </text>
            <polygon points="255,155 415,155 415,75" fill="#bae6fd" fillOpacity="0.4" stroke="#0284c7" strokeWidth="2.5" />
            <rect x="315" y="96" width="36" height="22" rx="4" transform="rotate(-26 333 107)" fill="#dc2626" />
            <text x="335" y="80" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[11px] font-bold">
              F = P · sin(α) = P · (h / L)
            </text>
            <text x="428" y="120" className="fill-sky-700 text-[11px] font-bold">h</text>
            <text x="335" y="182" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[11px] font-semibold">
              Amb fregament: F_tot = P·sin(α) + μ·N
            </text>

            {/* 3. Politges i Polispast */}
            <rect x="458" y="15" width="210" height="190" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="563" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              3. Politges i Polispasts
            </text>
            <circle cx="515" cy="75" r="16" fill="#e2e8f0" stroke="#475569" strokeWidth="2.5" />
            <rect x="497" y="125" width="36" height="26" rx="4" fill="#64748b" />
            <text x="515" y="142" textAnchor="middle" fill="#fff" className="text-[10px] font-bold">Fixa</text>
            <text x="515" y="172" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-bold">
              AM = 1
            </text>

            <circle cx="610" cy="70" r="14" fill="#e2e8f0" stroke="#475569" strokeWidth="2.5" />
            <circle cx="610" cy="112" r="14" fill="#fde047" stroke="#ca8a04" strokeWidth="2.5" />
            <line x1="596" y1="70" x2="596" y2="112" stroke="#dc2626" strokeWidth="2.5" />
            <line x1="624" y1="70" x2="624" y2="112" stroke="#dc2626" strokeWidth="2.5" />
            <rect x="592" y="132" width="36" height="24" rx="4" fill="#16a34a" />
            <text x="610" y="148" textAnchor="middle" fill="#fff" className="text-[10px] font-bold">Mòbil</text>
            <text x="610" y="172" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-bold">
              AM = n trams (2, 4...)
            </text>
            <text x="563" y="192" textAnchor="middle" className="fill-slate-500 text-[10px] font-semibold">
              Cabrestant: Força màxima a la 1a CAPA!
            </text>
          </svg>
        );

      case 'electricity_ohm_ac':
        return (
          <svg viewBox="0 0 680 220" className="w-full max-w-2xl mx-auto h-auto font-sans">
            {/* 1. Triangle Llei d'Ohm */}
            <rect x="12" y="15" width="205" height="190" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="114" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              1. Triangle Llei d'Ohm
            </text>
            <polygon points="114,52 54,152 174,152" fill="#fef08a" fillOpacity="0.45" stroke="#ca8a04" strokeWidth="2.5" />
            <line x1="84" y1="102" x2="144" y2="102" stroke="#ca8a04" strokeWidth="2" />
            <line x1="114" y1="102" x2="114" y2="152" stroke="#ca8a04" strokeWidth="2" />
            <text x="114" y="92" textAnchor="middle" className="fill-amber-900 dark:fill-amber-300 text-[16px] font-extrabold">V</text>
            <text x="95" y="138" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-[15px] font-extrabold">I</text>
            <text x="133" y="138" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[15px] font-extrabold">R</text>
            <text x="114" y="176" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-bold">
              V = I · R  |  P = V · I = I² · R
            </text>
            <text x="114" y="193" textAnchor="middle" className="fill-red-600 text-[10px] font-bold">
              Efecte Joule: Q = I² · R · t
            </text>

            {/* 2. Got de Cervesa (Potències AC) */}
            <rect x="230" y="15" width="215" height="190" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="337" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              2. Símil del Got de Cervesa (AC)
            </text>
            {/* Escuma Q */}
            <rect x="275" y="55" width="75" height="32" rx="4" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
            <text x="312" y="75" textAnchor="middle" className="fill-slate-700 text-[10px] font-bold">
              Escuma: Q (kvar)
            </text>
            {/* Cervesa P */}
            <rect x="275" y="87" width="75" height="68" rx="4" fill="#fbbf24" fillOpacity="0.7" stroke="#d97706" strokeWidth="2" />
            <text x="312" y="125" textAnchor="middle" className="fill-amber-950 text-[11px] font-bold">
              Líquid: P (kW)
            </text>
            <text x="398" y="105" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[11px] font-bold">
              Tot el got:
            </text>
            <text x="398" y="122" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[12px] font-extrabold">
              S (kVA)
            </text>
            <text x="337" y="182" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-bold">
              FP = cos(φ) = P / S (Activa / Aparent)
            </text>

            {/* 3. Tensió de Pas */}
            <rect x="458" y="15" width="210" height="190" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="563" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              3. Tensió de Pas (Cable Caigut)
            </text>
            <ellipse cx="563" cy="130" rx="82" ry="30" fill="none" stroke="#fca5a5" strokeWidth="2" strokeDasharray="4" />
            <ellipse cx="563" cy="130" rx="52" ry="19" fill="none" stroke="#f87171" strokeWidth="2" />
            <ellipse cx="563" cy="130" rx="22" ry="9" fill="#ef4444" fillOpacity="0.25" stroke="#dc2626" strokeWidth="2" />
            <text x="563" y="134" textAnchor="middle" className="fill-red-700 dark:fill-red-300 text-[10px] font-bold">
              ⚡ Cable AT
            </text>
            <text x="563" y="176" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 text-[11px] font-bold">
              ✓ Passos petits amb peus JUNTS
            </text>
            <text x="563" y="193" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[10px] font-semibold">
              EPI Dielèctric = en SÈRIE (↑↑ R_total)
            </text>
          </svg>
        );

      case 'installations_gas_elec':
        return (
          <svg viewBox="0 0 680 215" className="w-full max-w-2xl mx-auto h-auto font-sans">
            <rect x="15" y="15" width="650" height="85" rx="10" fill="#fffbeb" className="dark:fill-slate-900" stroke="#fde047" strokeWidth="2" />
            <text x="340" y="36" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 text-[12px] font-bold">
              ESCALA DE PRESSIONS DE DISTRIBUCIÓ DE GAS NATURAL (MAN.GRAL.007)
            </text>
            <text x="340" y="64" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              APB (&gt;16–45 bar) → APA (&gt;4–16 bar) → MPB (&gt;0,4–4 bar) → MPA (&gt;0,05–0,4 bar) → BP (≤0,05 bar / 20 mbar ús)
            </text>
            <text x="340" y="84" textAnchor="middle" className="fill-amber-700 dark:fill-amber-400 text-[11px] font-semibold">
              Claus de pas: Grau 1 (directa sense clau) · Grau 2 (amb clau normalitzada) · Grau 3 (cal escala o zona privada)
            </text>

            <rect x="15" y="112" width="650" height="88" rx="10" fill="#f0f9ff" className="dark:fill-slate-900" stroke="#7dd3fc" strokeWidth="2" />
            <text x="340" y="133" textAnchor="middle" className="fill-sky-800 dark:fill-sky-300 text-[12px] font-bold">
              INSTAL·LACIÓ D'ENLLAÇ ELÈCTRICA I LES 5 REGLES D'OR
            </text>
            <text x="340" y="158" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              Escomesa → CGP (Fusibles) → LGA → IGM (&gt;2 usuaris) → Comptadors → Derivació Individual → Quadre (IGA + ID 30mA + PIAs)
            </text>
            <text x="340" y="182" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[11px] font-bold">
              5 Regles d'Or: 1. Desconnectar → 2. Bloquejar → 3. Verificar absència tensió → 4. Posar a terra i curtcircuit → 5. Senyalitzar
            </text>
          </svg>
        );

      case 'cartography_soc':
        return (
          <svg viewBox="0 0 680 220" className="w-full max-w-2xl mx-auto h-auto font-sans">
            {/* 1. Codi SOC */}
            <rect x="15" y="15" width="315" height="190" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="172" y="36" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[12px] font-bold">
              1. Codi SOC (Quadrant 5×5 km = 25 seccions 1×1 km)
            </text>
            {/* Graella 5x5 */}
            {[0, 1, 2, 3, 4].map((r) =>
              [0, 1, 2, 3, 4].map((c) => {
                const num = r * 5 + c + 1;
                const label = num < 10 ? `0${num}` : `${num}`;
                const isHighlight = num === 6;
                return (
                  <g key={`${r}-${c}`}>
                    <rect
                      x={45 + c * 42}
                      y={48 + r * 26}
                      width="42"
                      height="26"
                      fill={isHighlight ? '#fee2e2' : '#ffffff'}
                      stroke="#dc2626"
                      strokeWidth="1.2"
                    />
                    <text
                      x={66 + c * 42}
                      y={65 + r * 26}
                      textAnchor="middle"
                      className={`text-[10px] font-bold ${isHighlight ? 'fill-red-700' : 'fill-slate-600'}`}
                    >
                      {label}
                    </text>
                  </g>
                );
              })
            )}
            <text x="290" y="115" textAnchor="middle" className="fill-red-600 text-[13px] font-extrabold">
              22AP06
            </text>
            <text x="172" y="195" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[11px] font-semibold">
              COE: Escala 1:25.000 · Equidistància 10 m · ETRS89 (31T)
            </text>

            {/* 2. Corbes de Nivell i Camins COE */}
            <rect x="345" y="15" width="320" height="190" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="505" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              2. Classificació de Camins a la Cartografia COE
            </text>
            <line x1="365" y1="68" x2="445" y2="68" stroke="#eab308" strokeWidth="6" />
            <text x="460" y="72" className="fill-slate-700 dark:fill-slate-200 text-[11px] font-bold">
              Primari (≥ 6 m): Es creuen 2 BRP
            </text>
            <line x1="365" y1="102" x2="445" y2="102" stroke="#eab308" strokeWidth="5" />
            <line x1="365" y1="102" x2="445" y2="102" stroke="#16a34a" strokeWidth="3" strokeDasharray="6 6" />
            <text x="460" y="106" className="fill-slate-700 dark:fill-slate-200 text-[11px] font-bold">
              Secundari (3–5 m): Sobreamples /150m
            </text>
            <line x1="365" y1="136" x2="445" y2="136" stroke="#15803d" strokeWidth="5" strokeDasharray="10 6" />
            <text x="460" y="140" className="fill-slate-700 dark:fill-slate-200 text-[11px] font-bold">
              Terciari (≥ 3 m): 1 sol sentit BRP
            </text>
            <line x1="365" y1="170" x2="445" y2="170" stroke="#dc2626" strokeWidth="4" strokeDasharray="6 5" />
            <text x="460" y="174" className="fill-red-600 dark:fill-red-400 text-[11px] font-bold">
              No accessible a BRP (vermell discontinu)
            </text>
            <text x="505" y="196" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-[11px] font-bold">
              PAIF: &gt; 200 m³ (200.000 L) · Lletra "T" = Helicòpter
            </text>
          </svg>
        );

      case 'structural_forces':
        return (
          <svg viewBox="0 0 680 225" className="w-full max-w-2xl mx-auto h-auto font-sans">
            {/* Els 6 esforços */}
            <rect x="12" y="12" width="420" height="200" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="222" y="34" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              1. Els 6 Esforços Mecànics Estructurals (MAN.GRAL.006)
            </text>
            <text x="30" y="64" className="fill-sky-700 dark:fill-sky-300 text-[12px] font-bold">
              • Tracció (← ▬▬▬ →): Estira (cables, tirants; acer i fusta).
            </text>
            <text x="30" y="88" className="fill-amber-700 dark:fill-amber-300 text-[12px] font-bold">
              • Compressió (→ ▬▬▬ ←): Aixafa (pilars, murs, arcs; formigó i pedra).
            </text>
            <text x="30" y="112" className="fill-emerald-700 dark:fill-emerald-400 text-[12px] font-bold">
              • Flexió (↓ ︶ ↓): Corba = Compressió a dalt + Tracció a baix (bigues, jàsseres).
            </text>
            <text x="30" y="136" className="fill-purple-700 dark:fill-purple-300 text-[12px] font-bold">
              • Tallant / Cisallament (⇅): Llisca a prop dels recolzaments i mènsules.
            </text>
            <text x="30" y="160" className="fill-rose-700 dark:fill-rose-400 text-[12px] font-bold">
              • Torsió (↻ ▬▬ ↺): Retorça sobre l'eix longitudinal.
            </text>
            <text x="30" y="184" className="fill-red-600 dark:fill-red-400 text-[12px] font-extrabold">
              • Vinclament (Pandeig 括号): Doblegament lateral sobtat de pilars esvelts!
            </text>

            {/* Jerarquia + Maó Català vs Castellà */}
            <rect x="444" y="12" width="224" height="200" rx="10" fill="#fffbeb" className="dark:fill-slate-900" stroke="#fde047" strokeWidth="2" />
            <text x="556" y="34" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 text-[12px] font-bold">
              2. Jerarquia Estructural
            </text>
            <text x="556" y="58" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[11px] font-bold">
              1. Biguetes / Forjat
            </text>
            <text x="556" y="76" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[11px] font-bold">
              ↓ 2. Bigues
            </text>
            <text x="556" y="94" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[11px] font-extrabold">
              ↓ 3. JÀSSERES (Bigues mestres)
            </text>
            <text x="556" y="112" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[11px] font-bold">
              ↓ 4. Pilars / Murs de càrrega
            </text>
            <text x="556" y="130" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[11px] font-bold">
              ↓ 5. Fonaments → Terreny
            </text>
            <line x1="460" y1="145" x2="650" y2="145" stroke="#fde047" />
            <text x="556" y="166" textAnchor="middle" className="fill-amber-900 dark:fill-amber-300 text-[11px] font-bold">
              Maó Català: 30 × 15 cm
            </text>
            <text x="556" y="186" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[11px] font-bold">
              Maó Castellà: 25 × 12,5 cm
            </text>
          </svg>
        );

      case 'drivetrain_4x4':
        return (
          <svg viewBox="0 0 680 220" className="w-full max-w-2xl mx-auto h-auto font-sans">
            <rect x="15" y="15" width="420" height="190" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="225" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              1. Ordre Obligatori de Bloqueig de Diferencials en Camió 4×4
            </text>
            {/* Xassís 4x4 */}
            <rect x="55" y="65" width="22" height="36" rx="4" fill="#334155" />
            <rect x="55" y="135" width="22" height="36" rx="4" fill="#334155" />
            <rect x="345" y="65" width="22" height="36" rx="4" fill="#334155" />
            <rect x="345" y="135" width="22" height="36" rx="4" fill="#334155" />
            <line x1="66" y1="101" x2="66" y2="135" stroke="#64748b" strokeWidth="4" />
            <line x1="356" y1="101" x2="356" y2="135" stroke="#64748b" strokeWidth="4" />
            <line x1="66" y1="118" x2="356" y2="118" stroke="#64748b" strokeWidth="5" />

            {/* 1r Central */}
            <circle cx="210" cy="118" r="20" fill="#16a34a" />
            <text x="210" y="122" textAnchor="middle" fill="#fff" className="text-[11px] font-extrabold">1r</text>
            <text x="210" y="85" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 text-[11px] font-bold">
              1r CENTRAL (≤ 40 km/h)
            </text>

            {/* 2n Posterior */}
            <circle cx="356" cy="118" r="18" fill="#eab308" />
            <text x="356" y="122" textAnchor="middle" fill="#fff" className="text-[11px] font-extrabold">2n</text>
            <text x="356" y="55" textAnchor="middle" className="fill-amber-700 dark:fill-amber-400 text-[11px] font-bold">
              2n POSTERIOR (≤ 5 km/h)
            </text>

            {/* 3r Anterior */}
            <circle cx="66" cy="118" r="18" fill="#dc2626" />
            <text x="66" y="122" textAnchor="middle" fill="#fff" className="text-[11px] font-extrabold">3r</text>
            <text x="95" y="55" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[11px] font-bold">
              3r ANTERIOR (≤ 5 km/h · No gira!)
            </text>

            <text x="225" y="190" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[11px] font-bold">
              Reductora (4H ↔ 4L): SEMPRE amb el vehicle ATURAT i en punt mort!
            </text>

            {/* Angles TT */}
            <rect x="448" y="15" width="218" height="190" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="557" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              2. Angles Tot Terreny (BUP)
            </text>
            <text x="557" y="75" textAnchor="middle" className="fill-sky-700 dark:fill-sky-300 text-[12px] font-bold">
              • Angle d'Atac (frontal): ≈ 13°
            </text>
            <text x="557" y="105" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 text-[12px] font-bold">
              • Angle de Sortida (darrere): ≈ 12°
            </text>
            <text x="557" y="135" textAnchor="middle" className="fill-amber-700 dark:fill-amber-400 text-[12px] font-bold">
              • Angle Ventral (cresta central)
            </text>
            <text x="557" y="172" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[11px] font-semibold">
              Cadenes de neu: eix motriu
            </text>
            <text x="557" y="190" textAnchor="middle" className="fill-red-600 text-[11px] font-bold">
              Vmàx amb cadenes = 40–50 km/h
            </text>
          </svg>
        );

      case 'siscom_tree':
        return (
          <svg viewBox="0 0 680 215" className="w-full max-w-2xl mx-auto h-auto font-sans">
            {/* Organigrama SISCOM */}
            <rect x="235" y="15" width="210" height="36" rx="8" fill="#dc2626" />
            <text x="340" y="38" textAnchor="middle" fill="#fff" className="text-[12px] font-bold">
              CAP D'INTERVENCIÓ (CI) · Tram 3–5
            </text>
            <line x1="340" y1="51" x2="340" y2="70" stroke="#64748b" strokeWidth="2.5" />
            <line x1="165" y1="70" x2="515" y2="70" stroke="#64748b" strokeWidth="2.5" />
            <line x1="165" y1="70" x2="165" y2="85" stroke="#64748b" strokeWidth="2.5" />
            <line x1="515" y1="70" x2="515" y2="85" stroke="#64748b" strokeWidth="2.5" />

            <rect x="65" y="85" width="200" height="36" rx="8" fill="#0284c7" />
            <text x="165" y="108" textAnchor="middle" fill="#fff" className="text-[12px] font-bold">
              ÀREA D'OPERACIONS (Executa PAI)
            </text>

            <rect x="415" y="85" width="200" height="36" rx="8" fill="#d97706" />
            <text x="515" y="108" textAnchor="middle" fill="#fff" className="text-[12px] font-bold">
              ÀREA DE SUPORT (Planif. + Logística)
            </text>

            {/* Escalafó de recursos */}
            <rect x="25" y="142" width="630" height="58" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="340" y="164" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              JERARQUIA DE RECURSOS SISCOM (De menor a major nivell):
            </text>
            <text x="340" y="186" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[12px] font-extrabold">
              1. Equip (Binomi/Vehicle) → 2. Maniobra → 3. Grup → 4. Sector → 5. Zona → 6. Àrea Funcional → 7. CI
            </text>
          </svg>
        );

      case 'triage_start':
        return (
          <svg viewBox="0 0 680 220" className="w-full max-w-2xl mx-auto h-auto font-sans">
            {/* Pas 1: Camina? */}
            <rect x="15" y="20" width="135" height="50" rx="8" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
            <text x="82" y="42" textAnchor="middle" className="fill-slate-900 text-[12px] font-bold">1. CAMINA?</text>
            <text x="82" y="58" textAnchor="middle" className="fill-slate-600 text-[10px] font-semibold">(≤ 1 min / víctima)</text>

            <line x1="82" y1="70" x2="82" y2="135" stroke="#16a34a" strokeWidth="2.5" />
            <rect x="22" y="135" width="120" height="44" rx="8" fill="#16a34a" />
            <text x="82" y="155" textAnchor="middle" fill="#fff" className="text-[12px] font-extrabold">SÍ → VERD</text>
            <text x="82" y="170" textAnchor="middle" fill="#fff" className="text-[10px]">Prioritat 3 (Lleu)</text>

            {/* Pas 2: Respira? */}
            <line x1="150" y1="45" x2="185" y2="45" stroke="#475569" strokeWidth="2.5" />
            <rect x="185" y="20" width="140" height="50" rx="8" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
            <text x="255" y="42" textAnchor="middle" className="fill-slate-900 text-[12px] font-bold">2. RESPIRA?</text>
            <text x="255" y="58" textAnchor="middle" className="fill-slate-600 text-[10px]">(Obrir via aèria / PLS)</text>

            <line x1="255" y1="70" x2="255" y2="135" stroke="#dc2626" strokeWidth="2.5" />
            <rect x="180" y="135" width="150" height="55" rx="8" fill="#1e293b" />
            <text x="255" y="154" textAnchor="middle" fill="#fff" className="text-[11px] font-extrabold">NO respira → NEGRE</text>
            <text x="255" y="172" textAnchor="middle" fill="#fca5a5" className="text-[10px] font-bold">FR &gt; 30 rpm → VERMELL</text>

            {/* Pas 3: Pols radial */}
            <line x1="325" y1="45" x2="360" y2="45" stroke="#475569" strokeWidth="2.5" />
            <rect x="360" y="20" width="140" height="50" rx="8" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
            <text x="430" y="42" textAnchor="middle" className="fill-slate-900 text-[12px] font-bold">3. POLS RADIAL?</text>
            <text x="430" y="58" textAnchor="middle" className="fill-slate-600 text-[10px]">(Torniquet si sagnat)</text>

            <line x1="430" y1="70" x2="430" y2="135" stroke="#dc2626" strokeWidth="2.5" />
            <rect x="365" y="135" width="130" height="44" rx="8" fill="#dc2626" />
            <text x="430" y="155" textAnchor="middle" fill="#fff" className="text-[11px] font-extrabold">NO Pols → VERMELL</text>
            <text x="430" y="170" textAnchor="middle" fill="#fff" className="text-[10px]">Prioritat 1 (Immediata)</text>

            {/* Pas 4: Ordres simples */}
            <line x1="500" y1="45" x2="530" y2="45" stroke="#475569" strokeWidth="2.5" />
            <rect x="530" y="20" width="135" height="50" rx="8" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
            <text x="597" y="42" textAnchor="middle" className="fill-slate-900 text-[12px] font-bold">4. ORDRES?</text>
            <text x="597" y="58" textAnchor="middle" className="fill-slate-600 text-[10px]">(Estat mental)</text>

            <line x1="597" y1="70" x2="597" y2="135" stroke="#eab308" strokeWidth="2.5" />
            <rect x="530" y="135" width="135" height="55" rx="8" fill="#eab308" />
            <text x="597" y="154" textAnchor="middle" className="fill-slate-950 text-[11px] font-extrabold">SÍ obeeix → GROC</text>
            <text x="597" y="172" textAnchor="middle" className="fill-red-900 text-[10px] font-extrabold">NO obeeix → VERMELL</text>
          </svg>
        );

      case 'shoring_insarag':
        return (
          <svg viewBox="0 0 680 220" className="w-full max-w-2xl mx-auto h-auto font-sans">
            {/* 1. Apuntalament Vertical */}
            <rect x="15" y="15" width="225" height="190" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="127" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              1. Apuntalament (≤ 1 m · 1.000 kg)
            </text>
            <rect x="45" y="52" width="165" height="14" fill="#d97706" rx="2" />
            <text x="127" y="63" textAnchor="middle" fill="#fff" className="text-[10px] font-bold">
              1. SOTAPONT (Recull la càrrega)
            </text>
            <rect x="70" y="66" width="12" height="92" fill="#64748b" />
            <rect x="172" y="66" width="12" height="92" fill="#64748b" />
            <text x="127" y="114" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[11px] font-bold">
              ← ≤ 1 metre →
            </text>
            <text x="127" y="132" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[10px] font-bold">
              2. PUNTALS (1 tona/puntal)
            </text>
            <rect x="45" y="158" width="165" height="14" fill="#b45309" rx="2" />
            <text x="127" y="169" textAnchor="middle" fill="#fff" className="text-[10px] font-bold">
              3. JAÇ DE TAULONS (Reparteix)
            </text>
            <text x="127" y="192" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[10px] font-semibold">
              Tornapuntes inclinats: 45° a 60°
            </text>

            {/* 2. Marcatge INSARAG de Víctimes */}
            <rect x="252" y="15" width="205" height="190" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="354" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              2. Marcatge INSARAG (50 cm)
            </text>
            <text x="354" y="88" textAnchor="middle" className="fill-orange-600 text-[30px] font-extrabold">
              V →
            </text>
            <text x="354" y="118" textAnchor="middle" className="fill-emerald-600 text-[14px] font-extrabold">
              L - 2  (2 Vives)
            </text>
            <text x="354" y="142" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[14px] font-extrabold">
              D - 1  (1 Morta)
            </text>
            <text x="354" y="174" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[11px] font-semibold">
              Evacuades totes = Rombe [ C ] (Clear)
            </text>
            <text x="354" y="192" textAnchor="middle" className="fill-red-600 text-[10px] font-bold">
              Vehicles a ≥ 2 × h d'alçada!
            </text>

            {/* 3. Senyals Acústics */}
            <rect x="469" y="15" width="196" height="190" rx="10" fill="#fff1f2" className="dark:fill-slate-900" stroke="#fda4af" strokeWidth="2" />
            <text x="567" y="36" textAnchor="middle" className="fill-rose-700 dark:fill-rose-400 text-[12px] font-bold">
              3. Senyals Acústics d'Alarma
            </text>
            <text x="567" y="74" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[12px] font-extrabold">
              🚨 EVACUAR: 3 curts (1s)
            </text>
            <text x="567" y="92" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[11px] font-bold">
              [ ▄  ▄  ▄ ]
            </text>
            <text x="567" y="122" textAnchor="middle" className="fill-amber-700 dark:fill-amber-400 text-[12px] font-extrabold">
              ✋ ATURAR / SILENCI: 1 llarg (3s)
            </text>
            <text x="567" y="140" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[11px] font-bold">
              [ ▄▄▄▄ ]
            </text>
            <text x="567" y="170" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 text-[12px] font-extrabold">
              ▶ REPRENDRE: 1 llarg + 1 curt
            </text>
            <text x="567" y="188" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[11px] font-bold">
              [ ▄▄▄▄  ▄ ]
            </text>
          </svg>
        );

      case 'mountain_search':
        return (
          <svg viewBox="0 0 680 210" className="w-full max-w-2xl mx-auto h-auto font-sans">
            <rect x="15" y="15" width="650" height="180" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="340" y="38" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[13px] font-bold">
              METODOLOGIES DE RECERCA EN MEDI NATURAL (MAN.SVMN.000) · PROTEGIR SEMPRE L'UPA!
            </text>
            <text x="40" y="72" className="fill-sky-700 dark:fill-sky-300 text-[12px] font-bold">
              1. Recerca EXTENSIVA: Batuda ràpida per pistes/camins (Hipòtesi: víctima EN MOVIMENT · poc personal, alta velocitat).
            </text>
            <text x="40" y="102" className="fill-emerald-700 dark:fill-emerald-400 text-[12px] font-bold">
              2. Recerca INTENSIVA: a) Línies naturals (vorals/marges, alta efectivitat nocturna) · b) Per sectors (escombrat lent, víctima ESTÀTICA).
            </text>
            <text x="40" y="132" className="fill-amber-700 dark:fill-amber-400 text-[12px] font-bold">
              3. Punts Probables (masies, refugis) i 4. Per CONTENCIÓ (tancar perímetre exterior i tancar cap al centre; ideal per a NENS).
            </text>
            <text x="40" y="162" className="fill-red-600 dark:fill-red-400 text-[12px] font-bold">
              5. Canina (GRCR: Lleida i Vic): RASTREIG (olor al terra des de l'UPA amb mostra) vs. VENTEIG (olor a l'aire en grans àrees/allaus).
            </text>
          </svg>
        );

      case 'flood_zones':
        return (
          <svg viewBox="0 0 680 215" className="w-full max-w-2xl mx-auto h-auto font-sans">
            {/* Riu i meandre */}
            <rect x="15" y="15" width="320" height="185" rx="10" fill="#f0f9ff" className="dark:fill-slate-900" stroke="#7dd3fc" strokeWidth="2" />
            <text x="175" y="36" textAnchor="middle" className="fill-sky-900 dark:fill-sky-200 text-[12px] font-bold">
              1. Zonatge i Seguretat en Rius / Inundacions
            </text>
            <path d="M 35 105 Q 175 45 315 125" fill="none" stroke="#0284c7" strokeWidth="28" strokeLinecap="round" />
            <text x="175" y="88" textAnchor="middle" fill="#fff" className="text-[11px] font-extrabold">
              ZONA D'AIGUA (Crítica) + ZONA HUMIDA (Marges)
            </text>
            <text x="85" y="150" textAnchor="middle" className="fill-amber-700 dark:fill-amber-400 text-[11px] font-bold">
              👀 Guaita AIGÜES AMUNT
            </text>
            <text x="255" y="150" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 text-[11px] font-bold">
              🛟 Seguretat AIGÜES AVALL
            </text>
            <text x="175" y="182" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[11px] font-bold">
              Meandre: Erosió i col·lapse a la CORBA EXTERIOR!
            </text>

            {/* Períodes de retorn i llindars SMC */}
            <rect x="350" y="15" width="315" height="185" rx="10" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" />
            <text x="507" y="36" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[12px] font-bold">
              2. Període de Retorn (P = 1/T) i Llindars SMC
            </text>
            <text x="368" y="66" className="fill-slate-700 dark:fill-slate-200 text-[11px] font-bold">
              • T10 = 10% anual (Freqüent) · T50 = 2% (Ocasional)
            </text>
            <text x="368" y="88" className="fill-slate-700 dark:fill-slate-200 text-[11px] font-bold">
              • T100 = 1% anual (Urbanisme) · T500 = 0,2% (Excepcional)
            </text>
            <text x="368" y="116" className="fill-sky-700 dark:fill-sky-300 text-[11px] font-bold">
              • Intensitat SMC (30 min): Baix &gt;20 mm | Alt &gt;40 mm
            </text>
            <text x="368" y="138" className="fill-sky-700 dark:fill-sky-300 text-[11px] font-bold">
              • Acumulació SMC (24 h): Baix &gt;100 mm | Alt &gt;200 mm
            </text>
            <text x="368" y="168" className="fill-red-600 dark:fill-red-400 text-[11px] font-extrabold">
              • Límits NO especialistes: Mar ≤ 2,5 m | Riu ≤ Grau 3
            </text>
          </svg>
        );

      case 'legal_pyramid':
        return (
          <svg viewBox="0 0 680 340" className="w-full h-auto" role="img" aria-label="Piràmide normativa i reforma constitucional">
            <rect width="680" height="340" rx="14" fill="#f8fafc" />
            <text x="20" y="28" fontSize="14" fontWeight="700" fill="#0f172a">JERARQUIA NORMATIVA (ART. 9.1 / 9.3 CE) I REFORMA</text>
            {/* Pyramid */}
            <polygon points="190,48 270,104 110,104" fill="#dc2626" />
            <text x="190" y="92" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ffffff">CE 1978</text>
            <polygon points="110,110 270,110 305,165 75,165" fill="#ea580c" />
            <text x="190" y="135" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">Llei Orgànica (81) · Estatut</text>
            <text x="190" y="152" textAnchor="middle" fontSize="10" fill="#ffedd5">Majoria absoluta Congrés</text>
            <polygon points="75,171 305,171 340,232 40,232" fill="#2563eb" />
            <text x="190" y="197" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">Llei Ordinària · D. Legislatiu (82) · D. Llei (86)</text>
            <text x="190" y="216" textAnchor="middle" fontSize="10" fill="#dbeafe">Mateix rang de llei (D. Llei: convalidació 30d)</text>
            <polygon points="40,238 340,238 370,295 10,295" fill="#0f766e" />
            <text x="190" y="264" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">Reglaments (Art. 97 CE): Reial Decret · Ordre</text>
            <text x="190" y="282" textAnchor="middle" fontSize="10" fill="#ccfbf1">Subordinats a la Llei. Circulars (art. 16 L.13/89) NO són reglament</text>

            {/* Right panel: Reform & Derogat vs Anulat */}
            <rect x="392" y="48" width="268" height="122" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="406" y="70" fontSize="12" fontWeight="700" fill="#1e293b">Reforma CE (Títol X)</text>
            <text x="406" y="92" fontSize="11" fontWeight="700" fill="#0369a1">Art. 167 Ordinària:</text>
            <text x="406" y="108" fontSize="10.5" fill="#334155">3/5 cada Cambra · Referèndum si ho demana 1/10 (15d)</text>
            <text x="406" y="130" fontSize="11" fontWeight="700" fill="#b91c1c">Art. 168 Agreujada (Total / Prelim. / 15-29 / Corona):</text>
            <text x="406" y="146" fontSize="10.5" fill="#334155">2/3 → Dissolució → 2/3 noves Corts →</text>
            <text x="406" y="160" fontSize="10.5" fontWeight="700" fill="#b91c1c">Referèndum OBLIGATORI</text>

            <rect x="392" y="182" width="268" height="113" rx="10" fill="#fff7ed" stroke="#fdba74" strokeWidth="1.5" />
            <text x="406" y="204" fontSize="12" fontWeight="700" fill="#9a3412">TRAMPA: Derogat vs Anul·lat</text>
            <text x="406" y="226" fontSize="11" fontWeight="700" fill="#0f172a">DEROGAT (Legislador):</text>
            <text x="406" y="241" fontSize="10.5" fill="#334155">Llei posterior la treu. Efectes cap al futur (ex nunc).</text>
            <text x="406" y="264" fontSize="11" fontWeight="700" fill="#b91c1c">ANUL·LAT (Tribunal Constitucional):</text>
            <text x="406" y="279" fontSize="10.5" fill="#334155">Inconstitucional. Com si mai hagués existit (ex tunc).</text>
            <text x="340" y="324" textAnchor="middle" fontSize="11" fill="#475569">EAC (LO 6/2006): art. 132.1 competència EXCLUSIVA en protecció civil i prevenció/extinció d'incendis</text>
          </svg>
        );
      case 'public_service_map':
        return (
          <svg viewBox="0 0 680 320" className="w-full h-auto" role="img" aria-label="Comparativa Text Únic 1/1997 vs EBEP 5/2015">
            <rect width="680" height="320" rx="14" fill="#f8fafc" />
            <text x="20" y="28" fontSize="14" fontWeight="700" fill="#0f172a">RADAR DE DIVERGÈNCIES: TEXT ÚNIC (DL 1/1997) vs EBEP (RDL 5/2015)</text>
            {/* Headers */}
            <rect x="20" y="45" width="190" height="32" rx="6" fill="#1e293b" />
            <text x="115" y="66" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#ffffff">CONCEPTE CLAU</text>
            <rect x="218" y="45" width="215" height="32" rx="6" fill="#0284c7" />
            <text x="325" y="66" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#ffffff">TEXT ÚNIC (Catalunya 1/1997)</text>
            <rect x="441" y="45" width="219" height="32" rx="6" fill="#7c3aed" />
            <text x="550" y="66" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#ffffff">EBEP (Estatal 5/2015)</text>

            {/* Rows */}
            {[
              ['Edat mínima accés', '18 anys (art. 45)', '16 anys (art. 56)'],
              ['Reserva discapacitat', 'FINS AL 5% (màxim)', 'NO INFERIOR AL 7% (mínim)'],
              ['Retribucions bàsiques', '3: Sou, triennis i pagues extres', '2: Només sou i triennis'],
              ['Vacances anuals', '1 mes (art. 94)', '22 dies hàbils (art. 50)'],
              ['Situacions admin.', '8 situacions (+forçosa/incent./exp.)', '5 situacions bàsiques'],
              ['Prescripció faltes', 'Molt greus 6a · Greus 2a · Lleus 2m', 'Molt greus 3a · Greus 2a · Lleus 6m']
            ].map((row, i) => {
              const y = 84 + i * 36;
              return (
                <g key={row[0]}>
                  <rect x="20" y={y} width="190" height="30" rx="5" fill="#e2e8f0" />
                  <text x="30" y={y + 19} fontSize="11" fontWeight="700" fill="#0f172a">{row[0]}</text>
                  <rect x="218" y={y} width="215" height="30" rx="5" fill="#e0f2fe" />
                  <text x="228" y={y + 19} fontSize="11" fontWeight="600" fill="#0369a1">{row[1]}</text>
                  <rect x="441" y={y} width="219" height="30" rx="5" fill="#ede9fe" />
                  <text x="451" y={y + 19} fontSize="11" fontWeight="600" fill="#5b21b6">{row[2]}</text>
                </g>
              );
            })}
            <text x="340" y="308" textAnchor="middle" fontSize="11" fontWeight="600" fill="#475569">Truc prescripció: Text Únic 6a-2a-2m (baixa) · EBEP 3a-2a-6m (pugen les lleus!)</text>
          </svg>
        );
      case 'prl_hierarchy':
        return (
          <svg viewBox="0 0 680 320" className="w-full h-auto" role="img" aria-label="Jerarquia de prevenció Llei 31/1995 i categories EPI">
            <rect width="680" height="320" rx="14" fill="#f8fafc" />
            <text x="20" y="28" fontSize="14" fontWeight="700" fill="#0f172a">ESCALA D'ACCIÓ PREVENTIVA (ART. 15 LPRL) I CATEGORIES EPI</text>
            {/* Left steps */}
            {[
              { n: '1', t: 'EVITAR el risc (15.a)', c: '#15803d', bg: '#dcfce7' },
              { n: '2', t: 'AVALUAR els inevitables (15.b)', c: '#0369a1', bg: '#e0f2fe' },
              { n: '3', t: 'COMBATRE a l\'ORIGEN (15.c)', c: '#0284c7', bg: '#e0f2fe' },
              { n: '4', t: 'PROTECCIÓ COL·LECTIVA primer (15.h)', c: '#d97706', bg: '#fef3c7' },
              { n: '5', t: 'EPI = ÚLTIMA BARRERA (art. 17.2)', c: '#b91c1c', bg: '#fee2e2' }
            ].map((s, idx) => {
              const y = 48 + idx * 46;
              return (
                <g key={s.n}>
                  <rect x="20" y={y} width="320" height="38" rx="8" fill={s.bg} stroke={s.c} strokeWidth="1.5" />
                  <circle cx="42" cy={y + 19} r="12" fill={s.c} />
                  <text x="42" y={y + 23} textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">{s.n}</text>
                  <text x="64" y={y + 23} fontSize="12" fontWeight="700" fill="#0f172a">{s.t}</text>
                </g>
              );
            })}
            {/* Right: EPI Categories (UE 2016/425) */}
            <rect x="360" y="48" width="300" height="222" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="376" y="72" fontSize="12.5" fontWeight="700" fill="#0f172a">Reglament (UE) 2016/425: Classifica el RISC</text>
            <rect x="376" y="86" width="268" height="46" rx="7" fill="#ecfdf5" stroke="#10b981" />
            <text x="388" y="105" fontSize="11.5" fontWeight="700" fill="#065f46">CAT. I — Riscos mínims (5 supòsits)</text>
            <text x="388" y="122" fontSize="10.5" fill="#047857">T ≤ 50 °C · Sol, jardineria, productes suaus</text>

            <rect x="376" y="142" width="268" height="40" rx="7" fill="#eff6ff" stroke="#3b82f6" />
            <text x="388" y="160" fontSize="11.5" fontWeight="700" fill="#1e40af">CAT. II — Riscos mitjans</text>
            <text x="388" y="175" fontSize="10.5" fill="#1d4ed8">Tot el que NO és ni Cat. I ni Cat. III</text>

            <rect x="376" y="192" width="268" height="64" rx="7" fill="#fef2f2" stroke="#ef4444" />
            <text x="388" y="211" fontSize="11.5" fontWeight="700" fill="#991b1b">CAT. III — Mort / Danys irreversibles (13)</text>
            <text x="388" y="227" fontSize="10" fill="#b91c1c">ERA (manca O₂), T ≥ 100 °C, -50 °C, altura, electricitat,</text>
            <text x="388" y="242" fontSize="10.5" fontWeight="700" fill="#7f1d1d">ofegament, serra → Marcatge CE + 4 xifres</text>

            <text x="340" y="302" textAnchor="middle" fontSize="11" fontWeight="600" fill="#475569">Art. 3.2 LPRL i 2.2.b RD 773/97 exclouen situacions de catàstrofe/socors, però l'art. 17.2 obliga igualment</text>
          </svg>
        );
      case 'interior_organigram':
        return (
          <svg viewBox="0 0 680 340" className="w-full h-auto" role="img" aria-label="Organigrama DGPEIS Decret 12/2023 consolidat 16/2026 i Nivells Comandament">
            <rect width="680" height="340" rx="14" fill="#f8fafc" />
            <text x="20" y="26" fontSize="13.5" fontWeight="700" fill="#0f172a">ORGANIGRAMA DGPEIS (DECRET 12/2023 + 16/2026) I COMANDAMENT (276/2016)</text>
            {/* Top box */}
            <rect x="190" y="38" width="300" height="36" rx="8" fill="#1e293b" />
            <text x="340" y="55" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#ffffff">DGPEIS (Direcció General)</text>
            <text x="340" y="68" textAnchor="middle" fontSize="9.5" fill="#cbd5e1">5 Subdireccions + 1 Àrea Comunicació i Premsa (directa DG)</text>
            {/* Connectors */}
            <line x1="340" y1="74" x2="340" y2="90" stroke="#64748b" strokeWidth="2" />
            <line x1="85" y1="90" x2="595" y2="90" stroke="#64748b" strokeWidth="2" />
            {[85, 212, 340, 467, 595].map((x) => (
              <line key={x} x1={x} y1="90" x2={x} y2="104" stroke="#64748b" strokeWidth="2" />
            ))}
            {/* 5 SG boxes */}
            <rect x="20" y="104" width="130" height="58" rx="6" fill="#dc2626" />
            <text x="85" y="122" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#ffffff">SG Operativa</text>
            <text x="85" y="136" textAnchor="middle" fontSize="9" fill="#fee2e2">Cap de Bombers</text>
            <text x="85" y="149" textAnchor="middle" fontSize="9" fill="#fee2e2">4 Divisions + 8 Regions</text>

            <rect x="156" y="104" width="112" height="58" rx="6" fill="#0284c7" />
            <text x="212" y="122" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#ffffff">SG Tècnica</text>
            <text x="212" y="138" textAnchor="middle" fontSize="9" fill="#e0f2fe">5 Àrees (Equipam.,</text>
            <text x="212" y="150" textAnchor="middle" fontSize="9" fill="#e0f2fe">Tec., Mob., Inf., Prev.)</text>

            <rect x="274" y="104" width="132" height="58" rx="6" fill="#475569" />
            <text x="340" y="122" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#ffffff">SG Contractació</text>
            <text x="340" y="138" textAnchor="middle" fontSize="9" fill="#f1f5f9">i Pressupost</text>

            <rect x="412" y="104" width="110" height="58" rx="6" fill="#475569" />
            <text x="467" y="122" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#ffffff">SG Persones</text>
            <text x="467" y="138" textAnchor="middle" fontSize="9" fill="#f1f5f9">i Organització</text>

            <rect x="528" y="104" width="132" height="58" rx="6" fill="#7c3aed" />
            <text x="594" y="122" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff">SG Assumptes Jurídics</text>
            <text x="594" y="138" textAnchor="middle" fontSize="9" fill="#ede9fe">i Institucionals</text>
            <text x="594" y="150" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fef08a">(NOVA 2026)</text>

            {/* Territory strip */}
            <rect x="20" y="176" width="315" height="118" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="34" y="196" fontSize="11.5" fontWeight="700" fill="#991b1b">XIFRES TERRITORIALS CLAU (2026)</text>
            <text x="34" y="216" fontSize="10.5" fill="#1e293b">• 8 Regions d'Emergències (incl. Pirineus)</text>
            <text x="34" y="234" fontSize="10.5" fill="#1e293b">• 19 Unitats Territorials (3 Metro N/S/Gi · 2 resta)</text>
            <text x="34" y="252" fontSize="10.5" fill="#1e293b">• 6 Sales Territorials (Ebre→Tgn · Pirineus→Lleida)</text>
            <text x="34" y="270" fontSize="10.5" fill="#1e293b">• 7 Unitats Prevenció (Ebre SÍ · Pirineus→Lleida)</text>
            <text x="34" y="286" fontSize="9.5" fontWeight="700" fill="#b91c1c">Àrea Tècnica: Riscos Tec., Col·lapses, Inc. Estruct. (NO Mobilitat!)</text>

            {/* 5 Command levels */}
            <rect x="348" y="176" width="312" height="118" rx="8" fill="#fff7ed" stroke="#fdba74" strokeWidth="1.5" />
            <text x="362" y="196" fontSize="11.5" fontWeight="700" fill="#9a3412">5 NIVELLS DE COMANDAMENT (D. 276/2016)</text>
            <text x="362" y="215" fontSize="10.5" fill="#1e293b">Nivell 1: Cap de sortida (NO cal habilitació)</text>
            <text x="362" y="232" fontSize="10.5" fill="#1e293b">Nivell 2: Sotscap territorial (només immediata)</text>
            <text x="362" y="249" fontSize="10.5" fill="#1e293b">Nivell 3: Cap territorial (PAGI + brífings)</text>
            <text x="362" y="266" fontSize="10.5" fill="#1e293b">Nivell 4: Cap operatiu (Inspector habilitat)</text>
            <text x="362" y="283" fontSize="10.5" fontWeight="700" fill="#b91c1c">Nivell 5: Subdirector General Operatiu</text>

            <text x="340" y="322" textAnchor="middle" fontSize="10.5" fill="#475569">4 nivells estructurals: 1. Divisió/Regió (estratègica) → 2. Àrea (tàctica) → 3. Unitat (operativa) → 4. Grup/Parc (execució)</text>
          </svg>
        );
      case 'gas_laws':
        return (
          <svg viewBox="0 0 680 260" className="w-full h-auto font-sans" role="img" aria-label="Lleis dels gasos Boyle Charles Gay-Lussac">
            <rect width="680" height="260" rx="14" fill="#f8fafc" />
            <text x="20" y="28" fontSize="13.5" fontWeight="700" fill="#0f172a">LLEIS DELS GASOS: "PaVo" BEUEN "Te" · BTT · CP · GRAN VIA</text>

            <rect x="20" y="48" width="200" height="175" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="120" y="74" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e40af">BOYLE (BTT)</text>
            <text x="120" y="94" textAnchor="middle" fontSize="11" fontWeight="600" fill="#2563eb">Temperatura constant</text>
            <text x="120" y="130" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0f172a">P₁ · V₁ = P₂ · V₂</text>
            <text x="120" y="160" textAnchor="middle" fontSize="10.5" fill="#334155">Si puges Pressió → baixa Volum</text>
            <text x="120" y="180" textAnchor="middle" fontSize="10.5" fill="#334155">(ampolla ERA / xeringa)</text>

            <rect x="240" y="48" width="200" height="175" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="340" y="74" textAnchor="middle" fontSize="13" fontWeight="700" fill="#92400e">CHARLES (CP)</text>
            <text x="340" y="94" textAnchor="middle" fontSize="11" fontWeight="600" fill="#b45309">Pressió constant</text>
            <text x="340" y="130" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0f172a">V₁ / T₁ = V₂ / T₂</text>
            <text x="340" y="160" textAnchor="middle" fontSize="10.5" fill="#334155">Si puges T (K) → puja Volum</text>
            <text x="340" y="180" textAnchor="middle" fontSize="10.5" fill="#334155">(globus / fum calent puja)</text>

            <rect x="460" y="48" width="200" height="175" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
            <text x="560" y="74" textAnchor="middle" fontSize="13" fontWeight="700" fill="#991b1b">GAY-LUSSAC (Gran Via)</text>
            <text x="560" y="94" textAnchor="middle" fontSize="11" fontWeight="600" fill="#dc2626">Volum constant</text>
            <text x="560" y="130" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0f172a">P₁ / T₁ = P₂ / T₂</text>
            <text x="560" y="160" textAnchor="middle" fontSize="10.5" fill="#334155">Si puges T (K) → puja Pressió</text>
            <text x="560" y="180" textAnchor="middle" fontSize="10.5" fill="#334155">(ampolla rígida al foc)</text>

            <text x="340" y="244" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">Sempre Temperatura en Kelvin: T(K) = °C + 273 | Equació general: (P·V)/T = cte</text>
          </svg>
        );

      case 'electrical_enllac':
        return (
          <svg viewBox="0 0 760 400" className="w-full max-w-4xl mx-auto h-auto font-sans">
            <rect x="0" y="0" width="760" height="400" rx="12" fill="#ffffff" />
            {/* Llegenda superior */}
            <text x="20" y="22" fontSize="10" fontWeight="700" fill="#dc2626">1. Caixa general de protecció (CGP)</text>
            <text x="20" y="36" fontSize="10" fontWeight="700" fill="#7e22ce">2. Línia general d'alimentació (LGA)</text>
            <text x="20" y="50" fontSize="10" fontWeight="700" fill="#0f172a">3. Interruptor general de maniobra (IGM)</text>
            <text x="20" y="64" fontSize="10" fontWeight="700" fill="#334155">4. Caixa de derivació (CD)</text>

            <text x="275" y="22" fontSize="10" fontWeight="700" fill="#0284c7">5. Centralització de comptadors (CC)</text>
            <text x="275" y="36" fontSize="10" fontWeight="700" fill="#d97706">6. Caixa de protecció i mesura (CPM)</text>
            <text x="275" y="50" fontSize="10" fontWeight="700" fill="#ea580c">7. Derivació individual (DI)</text>
            <text x="275" y="64" fontSize="10" fontWeight="700" fill="#b45309">8. Fusible de seguretat</text>

            <text x="515" y="22" fontSize="10" fontWeight="700" fill="#1e293b">9. Comptador (Wh)</text>
            <text x="515" y="36" fontSize="10" fontWeight="700" fill="#db2777">10. Caixa ICP (integrat al comptador*)</text>
            <text x="515" y="50" fontSize="10" fontWeight="700" fill="#15803d">11. Dispositius generals (DGCP)</text>
            <text x="515" y="64" fontSize="10" fontWeight="700" fill="#ca8a04">12. Instal·lació interior</text>

            {/* Xarxa de distribució inferior */}
            <line x1="25" y1="365" x2="710" y2="365" stroke="#0ea5e9" strokeWidth="3.5" />
            <text x="720" y="368" fontSize="9.5" fontWeight="700" fill="#0369a1" textAnchor="end">Xarxa de distribució</text>

            {/* COLUMNA 1: 1 usuari (CPM) */}
            <line x1="75" y1="365" x2="75" y2="295" stroke="#10b981" strokeWidth="3" />
            <text x="95" y="340" fontSize="9" fontWeight="700" fill="#059669">Escomesa</text>
            <rect x="45" y="205" width="60" height="90" rx="4" fill="#fffbeb" stroke="#d97706" strokeWidth="2.5" />
            <rect x="61" y="213" width="28" height="24" rx="2" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="75" y="229" textAnchor="middle" fontSize="9" fontWeight="800" fill="#1e3a8a">Wh</text>
            <rect x="68" y="246" width="14" height="28" rx="2" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
            <line x1="75" y1="274" x2="75" y2="295" stroke="#0f172a" strokeWidth="2" />
            <line x1="75" y1="205" x2="75" y2="175" stroke="#fb923c" strokeWidth="2.5" />
            <rect x="52" y="150" width="46" height="22" rx="3" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
            <text x="75" y="164" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#831843">ICP</text>
            <line x1="75" y1="150" x2="75" y2="136" stroke="#fb923c" strokeWidth="2.5" />
            <rect x="52" y="114" width="46" height="22" rx="3" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
            <text x="75" y="128" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#14532d">DGCP</text>
            <line x1="75" y1="114" x2="75" y2="82" stroke="#facc15" strokeWidth="2.5" />
            <line x1="65" y1="95" x2="85" y2="95" stroke="#facc15" strokeWidth="2" />
            <line x1="65" y1="104" x2="85" y2="104" stroke="#facc15" strokeWidth="2" />
            <text x="75" y="382" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">1 usuari (CPM)</text>

            {/* COLUMNA 2: 2 usuaris (CPM) */}
            <line x1="175" y1="365" x2="175" y2="295" stroke="#10b981" strokeWidth="3" />
            <rect x="130" y="205" width="90" height="90" rx="4" fill="#fffbeb" stroke="#d97706" strokeWidth="2.5" />
            {[150, 200].map((cx) => (
              <g key={cx}>
                <rect x={cx - 14} y="213" width="28" height="24" rx="2" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="1.5" />
                <text x={cx} y="229" textAnchor="middle" fontSize="9" fontWeight="800" fill="#1e3a8a">Wh</text>
                <rect x={cx - 7} y="246" width="14" height="24" rx="2" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
                <line x1={cx} y1="205" x2={cx} y2="175" stroke="#fb923c" strokeWidth="2.5" />
                <rect x={cx - 20} y="150" width="40" height="22" rx="3" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
                <text x={cx} y="164" textAnchor="middle" fontSize="8" fontWeight="700" fill="#831843">ICP</text>
                <line x1={cx} y1="150" x2={cx} y2="136" stroke="#fb923c" strokeWidth="2.5" />
                <rect x={cx - 20} y="114" width="40" height="22" rx="3" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
                <text x={cx} y="128" textAnchor="middle" fontSize="8" fontWeight="700" fill="#14532d">DGCP</text>
                <line x1={cx} y1="114" x2={cx} y2="82" stroke="#facc15" strokeWidth="2.5" />
                <line x1={cx - 8} y1="95" x2={cx + 8} y2="95" stroke="#facc15" strokeWidth="2" />
              </g>
            ))}
            <path d="M 150 270 L 150 284 L 200 284 L 200 270" fill="none" stroke="#0f172a" strokeWidth="2" />
            <text x="175" y="382" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">2 usuaris (CPM)</text>

            {/* COLUMNA 3: 1 Centralització de comptadors (CGP -> LGA -> IGM -> CC) */}
            <line x1="340" y1="365" x2="340" y2="344" stroke="#10b981" strokeWidth="3" />
            <rect x="326" y="314" width="28" height="30" rx="3" fill="#fef2f2" stroke="#dc2626" strokeWidth="2.5" />
            <text x="320" y="330" textAnchor="end" fontSize="8.5" fontWeight="800" fill="#dc2626">CGP</text>
            <line x1="340" y1="314" x2="340" y2="288" stroke="#a855f7" strokeWidth="3" />
            <text x="348" y="303" fontSize="8.5" fontWeight="700" fill="#7e22ce">LGA</text>

            <rect x="260" y="195" width="160" height="96" rx="6" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2.5" />
            <text x="266" y="286" fontSize="8.5" fontWeight="800" fill="#0284c7">CC</text>
            <line x1="340" y1="288" x2="340" y2="274" stroke="#0f172a" strokeWidth="2.5" />
            <circle cx="340" cy="272" r="2.5" fill="#0f172a" />
            <text x="350" y="274" fontSize="8" fontWeight="700" fill="#0f172a">IGM</text>
            <path d="M 290 256 L 290 264 L 390 264 L 390 256" fill="none" stroke="#0f172a" strokeWidth="2" />

            {[290, 340, 390].map((cx) => (
              <g key={cx}>
                <rect x={cx - 13} y="203" width="26" height="22" rx="2" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="1.5" />
                <text x={cx} y="217" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#1e3a8a">Wh</text>
                <rect x={cx - 6} y="232" width="12" height="22" rx="2" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
                <line x1={cx} y1="195" x2={cx} y2="175" stroke="#fb923c" strokeWidth="2.5" />
                <rect x={cx - 19} y="150" width="38" height="22" rx="3" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
                <text x={cx} y="164" textAnchor="middle" fontSize="8" fontWeight="700" fill="#831843">ICP</text>
                <line x1={cx} y1="150" x2={cx} y2="136" stroke="#fb923c" strokeWidth="2.5" />
                <rect x={cx - 19} y="114" width="38" height="22" rx="3" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
                <text x={cx} y="128" textAnchor="middle" fontSize="8" fontWeight="700" fill="#14532d">DGCP</text>
                <line x1={cx} y1="114" x2={cx} y2="82" stroke="#facc15" strokeWidth="2.5" />
                <line x1={cx - 7} y1="95" x2={cx + 7} y2="95" stroke="#facc15" strokeWidth="2" />
              </g>
            ))}
            <text x="340" y="382" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">1 centralització (CC)</text>

            {/* COLUMNA 4: Comptadors centralitzats en més d'1 lloc (CGP -> CD -> CC1 + CC2) */}
            <line x1="485" y1="365" x2="485" y2="344" stroke="#10b981" strokeWidth="3" />
            <rect x="471" y="314" width="28" height="30" rx="3" fill="#fef2f2" stroke="#dc2626" strokeWidth="2.5" />
            <text x="466" y="330" textAnchor="end" fontSize="8.5" fontWeight="800" fill="#dc2626">CGP</text>
            <path d="M 485 314 L 485 305 L 650 305 L 650 288" fill="none" stroke="#a855f7" strokeWidth="2.5" />
            <rect x="520" y="294" width="26" height="20" rx="3" fill="#475569" />
            <text x="533" y="307" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#ffffff">CD</text>
            <rect x="637" y="294" width="26" height="20" rx="3" fill="#475569" />
            <text x="650" y="307" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#ffffff">CD</text>
            <line x1="533" y1="294" x2="533" y2="288" stroke="#a855f7" strokeWidth="2.5" />

            <rect x="455" y="195" width="145" height="96" rx="6" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2.5" />
            <rect x="610" y="195" width="110" height="96" rx="6" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2.5" />
            {[485, 533, 578, 640, 690].map((cx) => (
              <g key={cx}>
                <rect x={cx - 12} y="203" width="24" height="22" rx="2" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="1.5" />
                <text x={cx} y="217" textAnchor="middle" fontSize="8" fontWeight="800" fill="#1e3a8a">Wh</text>
                <rect x={cx - 6} y="232" width="12" height="20" rx="2" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
                <line x1={cx} y1="195" x2={cx} y2="175" stroke="#fb923c" strokeWidth="2.5" />
                <rect x={cx - 18} y="150" width="36" height="22" rx="3" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
                <text x={cx} y="164" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#831843">ICP</text>
                <line x1={cx} y1="150" x2={cx} y2="136" stroke="#fb923c" strokeWidth="2.5" />
                <rect x={cx - 18} y="114" width="36" height="22" rx="3" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
                <text x={cx} y="128" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#14532d">DGCP</text>
                <line x1={cx} y1="114" x2={cx} y2="82" stroke="#facc15" strokeWidth="2.5" />
                <line x1={cx - 7} y1="95" x2={cx + 7} y2="95" stroke="#facc15" strokeWidth="2" />
              </g>
            ))}
            <text x="585" y="382" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">Comptadors centralitzats en més d'1 lloc (CD)</text>
            <text x="740" y="395" textAnchor="end" fontSize="8" fill="#64748b">* Actualment l'ICP ja no s'instal·la a part, va integrat al comptador de telegestió</text>
          </svg>
        );

      case 'fire_tetrahedron_curve':
        return (
          <svg viewBox="0 0 680 245" className="w-full max-w-3xl mx-auto h-auto font-sans">
            <rect x="0" y="0" width="680" height="245" rx="10" fill="#ffffff" />
            <text x="340" y="22" textAnchor="middle" fontSize="13" fontWeight="800" fill="#0f172a">
              Corba d&apos;Evolució d&apos;un Incendi Interior (ILC vs ILV)
            </text>
            {/* Eixos */}
            <line x1="55" y1="205" x2="645" y2="205" stroke="#334155" strokeWidth="2" />
            <line x1="55" y1="205" x2="55" y2="40" stroke="#334155" strokeWidth="2" />
            <text x="22" y="125" textAnchor="middle" transform="rotate(-90 22 125)" fontSize="11" fontWeight="700" fill="#334155">Temperatura / HRR</text>
            <text x="350" y="232" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">Temps</text>
            {/* Zones de fons */}
            <rect x="57" y="45" width="120" height="159" fill="#fef9c3" fillOpacity="0.6" />
            <rect x="177" y="45" width="130" height="159" fill="#ffedd5" fillOpacity="0.65" />
            <rect x="307" y="45" width="175" height="159" fill="#fee2e2" fillOpacity="0.7" />
            <rect x="482" y="45" width="155" height="159" fill="#e2e8f0" fillOpacity="0.5" />
            {/* Corba */}
            <path d="M 60 202 C 130 195, 200 165, 265 110 L 305 62 L 480 62 C 530 75, 585 135, 635 180" fill="none" stroke="#dc2626" strokeWidth="3.5" />
            {/* Línia Flashover */}
            <line x1="275" y1="45" x2="275" y2="205" stroke="#b91c1c" strokeWidth="1.5" strokeDasharray="5 3" />
            <circle cx="275" cy="96" r="5" fill="#dc2626" />
            <text x="275" y="38" textAnchor="middle" fontSize="10" fontWeight="800" fill="#b91c1c">FLASHOVER (~500-600 °C)</text>
            {/* Etiquetes fases */}
            <text x="115" y="65" textAnchor="middle" fontSize="10" fontWeight="700" fill="#854d0e">1. Ignició</text>
            <text x="115" y="80" textAnchor="middle" fontSize="9" fill="#a16207">ILC (sobra O₂)</text>
            <text x="230" y="80" textAnchor="middle" fontSize="10" fontWeight="700" fill="#c2410c">2. Creixement</text>
            <text x="395" y="82" textAnchor="middle" fontSize="10" fontWeight="800" fill="#991b1b">3. Ple Desenvolupament</text>
            <text x="395" y="96" textAnchor="middle" fontSize="9" fill="#b91c1c">ILV (limitat per ventilació)</text>
            <text x="560" y="65" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">4. Decaïment</text>
            <text x="560" y="80" textAnchor="middle" fontSize="9" fill="#dc2626">Risc BACKDRAFT si entra O₂</text>
          </svg>
        );

      case 'forest_fire_parts':
        return (
          <svg viewBox="0 0 680 250" className="w-full max-w-3xl mx-auto h-auto font-sans">
            <rect x="0" y="0" width="680" height="250" rx="10" fill="#ffffff" />
            {/* Vent */}
            <line x1="40" y1="125" x2="135" y2="125" stroke="#0284c7" strokeWidth="3.5" />
            <polygon points="135,118 152,125 135,132" fill="#0284c7" />
            <text x="85" y="110" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0369a1">VENT / PENDENT</text>
            {/* Perímetre del foc */}
            <path d="M 190 125 C 190 70, 290 42, 415 58 C 460 64, 515 80, 560 125 C 515 170, 455 182, 395 190 C 285 204, 190 180, 190 125 Z" fill="#fed7aa" stroke="#ea580c" strokeWidth="3" />
            {/* Cap */}
            <path d="M 495 75 C 525 90, 550 108, 565 125 C 550 142, 525 160, 495 175" fill="none" stroke="#dc2626" strokeWidth="6" />
            <text x="580" y="128" fontSize="12" fontWeight="800" fill="#dc2626">CAP (màxima velocitat)</text>
            {/* Cua */}
            <text x="190" y="218" textAnchor="middle" fontSize="11" fontWeight="800" fill="#15803d">CUA (zona d'ancoratge)</text>
            {/* Flancs */}
            <text x="360" y="36" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ea580c">FLANC ESQUERRE</text>
            <text x="360" y="216" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ea580c">FLANC DRET</text>
            {/* Bosses i llengües */}
            <circle cx="605" cy="70" r="9" fill="#ef4444" fillOpacity="0.8" />
            <text x="605" y="54" textAnchor="middle" fontSize="10" fontWeight="700" fill="#b91c1c">Focus secundari</text>
            <rect x="285" y="102" width="150" height="44" rx="8" fill="#ffffff" fillOpacity="0.9" stroke="#9a3412" strokeWidth="1.5" />
            <text x="360" y="120" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#7c2d12">Zona Cremada (Negra)</text>
            <text x="360" y="136" textAnchor="middle" fontSize="9.5" fill="#9a3412">Atac directe: flancs des de cua</text>
          </svg>
        );

      case 'nrbq_zoning':
        return (
          <svg viewBox="0 0 680 230" className="w-full max-w-3xl mx-auto h-auto font-sans">
            <rect x="0" y="0" width="680" height="230" rx="10" fill="#ffffff" />
            {/* Direcció del vent */}
            <line x1="20" y1="32" x2="135" y2="32" stroke="#0284c7" strokeWidth="3" />
            <polygon points="135,26 148,32 135,38" fill="#0284c7" />
            <text x="80" y="20" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#0369a1">VENT (PMA a sobrevent)</text>
            {/* Zona Freda */}
            <rect x="25" y="55" width="630" height="155" rx="14" fill="#eff6ff" stroke="#2563eb" strokeWidth="2.5" />
            <text x="45" y="76" fontSize="11" fontWeight="800" fill="#1d4ed8">ZONA FREDA (Suport, PMA, Sanitaris)</text>
            {/* Zona Tèbia */}
            <rect x="195" y="70" width="440" height="125" rx="12" fill="#fefce8" stroke="#eab308" strokeWidth="2.5" />
            <text x="210" y="90" fontSize="11" fontWeight="800" fill="#a16207">ZONA TÈBIA (Corredor de Descontaminació)</text>
            {/* Zona Calenta */}
            <rect x="370" y="96" width="245" height="84" rx="10" fill="#fef2f2" stroke="#dc2626" strokeWidth="3" />
            <text x="492" y="118" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#b91c1c">ZONA CALENTA (Intervenció)</text>
            <text x="492" y="138" textAnchor="middle" fontSize="10" fontWeight="600" fill="#7f1d1d">Només equips amb Nivell III / II</text>
            <text x="492" y="156" textAnchor="middle" fontSize="10" fontWeight="700" fill="#991b1b">Focus NRBQ / Rescat</text>
            {/* Corredor de descontaminació */}
            <rect x="215" y="118" width="135" height="40" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            <text x="282" y="135" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#854d0e">DESCONTAMINACIÓ</text>
            <text x="282" y="149" textAnchor="middle" fontSize="8.5" fill="#713f12">Sortida obligatòria</text>
          </svg>
        );

      case 'vehicle_extrication_zones':
        return (
          <svg viewBox="0 0 680 225" className="w-full max-w-3xl mx-auto h-auto font-sans">
            <rect x="0" y="0" width="680" height="225" rx="10" fill="#ffffff" />
            <text x="340" y="22" textAnchor="middle" fontSize="13" fontWeight="800" fill="#0f172a">
              Anatomia d&apos;Excarceració i Riscos en Vehicle Elèctric / Híbrid
            </text>
            {/* Silueta cotxe */}
            <path d="M 90 155 L 115 112 L 200 105 L 255 62 L 455 62 L 525 105 L 580 118 L 585 155 Z" fill="#f1f5f9" stroke="#334155" strokeWidth="3" />
            {/* Rodes */}
            <circle cx="175" cy="160" r="24" fill="#1e293b" />
            <circle cx="175" cy="160" r="10" fill="#94a3b8" />
            <circle cx="505" cy="160" r="24" fill="#1e293b" />
            <circle cx="505" cy="160" r="10" fill="#94a3b8" />
            {/* Pilars A B C */}
            <line x1="205" y1="105" x2="255" y2="62" stroke="#dc2626" strokeWidth="6" />
            <text x="215" y="75" fontSize="11" fontWeight="800" fill="#dc2626">Pilar A</text>
            <line x1="355" y1="62" x2="355" y2="150" stroke="#dc2626" strokeWidth="6" />
            <text x="355" y="52" textAnchor="middle" fontSize="11" fontWeight="800" fill="#dc2626">Pilar B (Reforçat!)</text>
            <line x1="455" y1="62" x2="520" y2="105" stroke="#dc2626" strokeWidth="6" />
            <text x="505" y="75" fontSize="11" fontWeight="800" fill="#dc2626">Pilar C</text>
            {/* Bateria HV + Cablejat taronja */}
            <rect x="240" y="138" width="210" height="16" rx="3" fill="#fb923c" stroke="#c2410c" strokeWidth="2" />
            <text x="345" y="149" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#ffffff">BATERIA HV (400-800V) + Cablejat TARONJA</text>
            <text x="340" y="205" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#334155">
              Pelar plàstics abans de tallar (airbags/pretensors) · No tallar mai cables taronges · Estabilitzar 3/4 punts
            </text>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <figure className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
        <Compass className="w-4 h-4 text-red-500" />
        <span>Esquema Tècnic Visual — {title}</span>
      </div>

      <div className="rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-100 dark:border-slate-800/80 p-4 flex items-center justify-center">
        {customSvg ? <div dangerouslySetInnerHTML={{ __html: customSvg }} /> : renderBuiltInDiagram()}
      </div>

      {caption && (
        <figcaption className="mt-3 text-sm text-center text-slate-600 dark:text-slate-400 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
