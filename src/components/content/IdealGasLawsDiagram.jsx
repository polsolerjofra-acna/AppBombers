import React, { useState, useEffect } from 'react';
import { Flame, Sun, Gauge, Sparkles } from 'lucide-react';

const LAWS = [
  { id: 'boyle', label: '1. Boyle-Mariotte (Xeringa)', badge: 'T = cte (Isoterma)' },
  { id: 'charles', label: '2. Charles (Pilota al Sol)', badge: 'P = cte (Isòbara)' },
  { id: 'gaylussac', label: '3. Gay-Lussac (Ampolla al Foc)', badge: 'V = cte (Isòcora)' }
];

// Posicions deterministes de partícules que es mouen dinàmicament amb el temps
const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  fx: ((i * 37 + 13) % 86) / 100 + 0.07,
  fy: ((i * 53 + 29) % 80) / 100 + 0.1,
  dx: i % 2 === 0 ? 1 : -1,
  dy: i % 3 === 0 ? 1 : -1
}));

export default function IdealGasLawsDiagram({ initialLaw = 'boyle' }) {
  const [law, setLaw] = useState(initialLaw || 'boyle');
  const [boyleVolumePct, setBoyleVolumePct] = useState(100); // 25..100
  const [charlesTempC, setCharlesTempC] = useState(27); // -23..127 °C
  const [glTempC, setGlTempC] = useState(27); // 27..327 °C
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => (t + 1) % 3600);
    }, 60);
    return () => clearInterval(id);
  }, []);

  // Càlculs físics reals per a cada llei
  const boylePressureBar = +(100 / boyleVolumePct).toFixed(2); // 1.00 bar a 100%, 4.00 bar a 25%
  const charlesKelvin = charlesTempC + 273;
  const charlesScale = Math.max(0.65, Math.min(1.42, charlesKelvin / 300));
  const glKelvin = glTempC + 273;
  const glPressureBar = Math.round(200 * (glKelvin / 300)); // 200 bar a 300 K -> 400 bar a 600 K

  // Velocitat visual de les partícules segons T
  const activeSpeed =
    law === 'boyle'
      ? 1.1
      : law === 'charles'
      ? 0.6 + (charlesKelvin / 300) * 1.1
      : 0.7 + (glKelvin / 300) * 1.4;

  const renderAnimatedParticles = (xMin, xMax, yMin, yMax, color) => {
    const w = Math.max(12, xMax - xMin);
    const h = Math.max(12, yMax - yMin);
    return PARTICLES.map((p) => {
      const phaseX = Math.abs(Math.sin((tick * 0.045 * activeSpeed * p.dx) + p.id * 1.1));
      const phaseY = Math.abs(Math.cos((tick * 0.052 * activeSpeed * p.dy) + p.id * 0.7));
      const cx = xMin + 6 + phaseX * (w - 12);
      const cy = yMin + 6 + phaseY * (h - 12);
      return (
        <circle
          key={p.id}
          cx={cx}
          cy={cy}
          r={3.2}
          fill={color}
          opacity={0.85}
        />
      );
    });
  };

  return (
    <div className="rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/60 via-white to-sky-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/20 p-5 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-600 text-white shadow-xs">
            <Sparkles className="w-4 h-4" />
          </span>
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Simulador Visual Dinàmic · Gasos Ideals
            </span>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              {LAWS.find((l) => l.id === law)?.label}
            </h4>
          </div>
        </div>
        <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300">
          {LAWS.find((l) => l.id === law)?.badge}
        </span>
      </div>

      {/* Selector de llei */}
      <div className="flex flex-wrap gap-2">
        {LAWS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLaw(item.id)}
            className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
              law === item.id
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Dibuix SVG Dinàmic + Controls */}
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 items-center">
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 flex items-center justify-center">
          {law === 'boyle' && (
            <svg viewBox="0 0 360 175" className="w-full max-w-md h-44">
              {/* Cos de la xeringa */}
              <rect x="40" y="48" width="210" height="78" rx="8" fill="#f1f5f9" stroke="#334155" strokeWidth="3" />
              {/* Broquet tapat amb tap vermell */}
              <rect x="250" y="77" width="28" height="20" rx="3" fill="#e2e8f0" stroke="#334155" strokeWidth="2.5" />
              <rect x="275" y="72" width="14" height="30" rx="4" fill="#dc2626" />
              <text x="282" y="116" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">
                TAPAT
              </text>

              {/* Cambra de gas variable */}
              {(() => {
                const chamberStart = 248 - (boyleVolumePct / 100) * 185;
                return (
                  <>
                    <rect
                      x={chamberStart}
                      y="51"
                      width={248 - chamberStart}
                      height="72"
                      fill="#dbeafe"
                      opacity="0.7"
                    />
                    {renderAnimatedParticles(chamberStart, 248, 52, 122, '#2563eb')}
                    {/* Èmbol mòbil */}
                    <rect x={chamberStart - 12} y="51" width="12" height="72" rx="2" fill="#1e293b" />
                    <rect x={chamberStart - 62} y="82" width="50" height="10" fill="#64748b" />
                    <rect x={chamberStart - 70} y="65" width="10" height="44" rx="3" fill="#334155" />
                  </>
                );
              })()}

              {/* Manòmetre connectat */}
              <circle cx="322" cy="52" r="24" fill="#ffffff" stroke="#334155" strokeWidth="2.5" />
              <path d="M 264 77 L 264 52 L 298 52" fill="none" stroke="#334155" strokeWidth="2.5" />
              <text x="322" y="48" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
                {boylePressureBar}
              </text>
              <text x="322" y="60" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#64748b">
                bar
              </text>
              <text x="145" y="152" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">
                V = {boyleVolumePct}% · P = {boylePressureBar} bar · T = 20 °C (cte)
              </text>
            </svg>
          )}

          {law === 'charles' && (
            <svg viewBox="0 0 360 175" className="w-full max-w-md h-44">
              {/* Sol / Fred segons temperatura */}
              {charlesTempC >= 20 ? (
                <g>
                  <circle cx="54" cy="42" r="18" fill="#f59e0b" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => {
                    const rad = ((ang + tick * 2) * Math.PI) / 180;
                    return (
                      <line
                        key={ang}
                        x1={54 + Math.cos(rad) * 22}
                        y1={42 + Math.sin(rad) * 22}
                        x2={54 + Math.cos(rad) * 30}
                        y2={42 + Math.sin(rad) * 30}
                        stroke="#f59e0b"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    );
                  })}
                  <text x="54" y="84" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b45309">
                    SOL / CALOR
                  </text>
                </g>
              ) : (
                <g>
                  <circle cx="54" cy="42" r="18" fill="#38bdf8" opacity="0.25" stroke="#0284c7" strokeWidth="2" />
                  <text x="54" y="47" textAnchor="middle" fontSize="18">❄️</text>
                  <text x="54" y="84" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0369a1">
                    FRED
                  </text>
                </g>
              )}

              {/* Pilota dinàmica que s'infla/desinfla */}
              {(() => {
                const r = 36 * charlesScale;
                const cx = 205;
                const cy = 84;
                return (
                  <>
                    <circle
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill={charlesTempC >= 50 ? '#fed7aa' : '#bae6fd'}
                      stroke={charlesTempC >= 50 ? '#ea580c' : '#0284c7'}
                      strokeWidth="3"
                    />
                    {renderAnimatedParticles(cx - r * 0.65, cx + r * 0.65, cy - r * 0.65, cy + r * 0.65, '#ea580c')}
                    <path
                      d={`M ${cx - r * 0.65} ${cy - r * 0.3} Q ${cx} ${cy} ${cx + r * 0.65} ${cy - r * 0.3}`}
                      fill="none"
                      stroke="#334155"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  </>
                );
              })()}

              <text x="195" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#9a3412">
                T = {charlesTempC} °C ({charlesKelvin} K) · V = {Math.round(charlesScale * 100)}% · P = 1 atm (cte)
              </text>
            </svg>
          )}

          {law === 'gaylussac' && (
            <svg viewBox="0 0 360 175" className="w-full max-w-md h-44">
              {/* Ampolla metàl·lica rígida (Volum constant) */}
              <rect x="115" y="34" width="84" height="96" rx="22" fill="#e2e8f0" stroke="#334155" strokeWidth="3.5" />
              <rect x="145" y="18" width="24" height="18" rx="3" fill="#475569" />
              {renderAnimatedParticles(122, 192, 42, 122, glPressureBar >= 320 ? '#dc2626' : '#0284c7')}

              {/* Flames sota l'ampolla si s'escalfa */}
              {glTempC > 40 && (
                <g transform={`translate(130, ${132 + Math.sin(tick * 0.4) * 2})`}>
                  <path d="M 8 18 Q 14 0 20 18 Q 27 2 34 18 Q 41 0 47 18 Z" fill="#f97316" />
                  <path d="M 15 18 Q 20 6 25 18 Q 31 7 37 18 Z" fill="#facc15" />
                </g>
              )}

              {/* Manòmetre connectat */}
              <path d="M 169 27 L 235 27 L 235 46" fill="none" stroke="#334155" strokeWidth="2.5" />
              <circle
                cx="235"
                cy="74"
                r="28"
                fill="#ffffff"
                stroke={glPressureBar >= 320 ? '#dc2626' : '#334155'}
                strokeWidth="3"
              />
              <text
                x="235"
                y="72"
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill={glPressureBar >= 320 ? '#dc2626' : '#0f172a'}
              >
                {glPressureBar}
              </text>
              <text x="235" y="86" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#64748b">
                bar
              </text>
              {glPressureBar >= 320 && (
                <text x="295" y="78" fontSize="10" fontWeight="bold" fill="#dc2626">
                  ⚠ RISC!
                </text>
              )}

              <text x="180" y="164" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">
                V = 6 L (cte) · T = {glTempC} °C ({glKelvin} K) · P = {glPressureBar} bar
              </text>
            </svg>
          )}
        </div>

        {/* Controls interactius + explicació */}
        <div className="space-y-3">
          {law === 'boyle' && (
            <>
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-extrabold text-slate-700 dark:text-slate-200">
                  <span>Prem l&apos;èmbol de la xeringa (Volum):</span>
                  <span className="text-blue-600 dark:text-blue-400">{boyleVolumePct}%</span>
                </div>
                <input
                  type="range"
                  min={25}
                  max={100}
                  step={5}
                  value={boyleVolumePct}
                  onChange={(e) => setBoyleVolumePct(Number(e.target.value))}
                  className="w-full accent-indigo-600"
                />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Exemple visual (Xeringa tapada):</strong> Si redueixes el volum a la meitat (del 100% al 50%), les molècules xoquen el doble de vegades contra les parets i la pressió es multiplica per 2 (de 1 bar a 2 bar), mantenint T constant.
              </p>
              <div className="rounded-lg bg-indigo-100/70 dark:bg-indigo-950/40 px-3 py-2 text-xs font-extrabold text-indigo-900 dark:text-indigo-200">
                P₁ · V₁ = P₂ · V₂ → Inversament proporcionals
              </div>
            </>
          )}

          {law === 'charles' && (
            <>
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-extrabold text-slate-700 dark:text-slate-200">
                  <span className="flex items-center gap-1">
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    Temperatura (Sol / Fred):
                  </span>
                  <span className="text-amber-600 dark:text-amber-400">{charlesTempC} °C ({charlesKelvin} K)</span>
                </div>
                <input
                  type="range"
                  min={-23}
                  max={127}
                  step={5}
                  value={charlesTempC}
                  onChange={(e) => setCharlesTempC(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Exemple visual (Pilota al sol):</strong> Quan li toca el sol, l&apos;aire interior s&apos;escalfa, les molècules es mouen més ràpid i la pilota s&apos;infla (augmenta V). A l&apos;ombra freda s&apos;encongeix. En incendis, els fums calents es dilaten i pugen.
              </p>
              <div className="rounded-lg bg-amber-100/70 dark:bg-amber-950/40 px-3 py-2 text-xs font-extrabold text-amber-900 dark:text-amber-200">
                V₁ / T₁ = V₂ / T₂ → Directament proporcionals (en Kelvin!)
              </div>
            </>
          )}

          {law === 'gaylussac' && (
            <>
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-extrabold text-slate-700 dark:text-slate-200">
                  <span className="flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-red-500" />
                    Escalfa l&apos;ampolla rígida:
                  </span>
                  <span className="text-red-600 dark:text-red-400">{glTempC} °C ({glKelvin} K)</span>
                </div>
                <input
                  type="range"
                  min={27}
                  max={327}
                  step={15}
                  value={glTempC}
                  onChange={(e) => setGlTempC(Number(e.target.value))}
                  className="w-full accent-red-600"
                />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Exemple visual (Ampolla rígida al foc):</strong> Com que les parets metàl·liques no es poden dilatar (V = cte), en duplicar la temperatura absoluta de 300 K (27 °C) a 600 K (327 °C), la pressió interna es duplica de 200 a 400 bar!
              </p>
              <div className="rounded-lg bg-red-100/70 dark:bg-red-950/40 px-3 py-2 text-xs font-extrabold text-red-900 dark:text-red-200 flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 shrink-0" />
                <span>P₁ / T₁ = P₂ / T₂ → Risc d&apos;explosió / BLEVE en incendi</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
