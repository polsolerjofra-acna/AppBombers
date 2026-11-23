import React, { useState, useEffect } from 'react';
import {
  Calculator,
  Lightbulb,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Zap,
  RotateCcw,
  BookOpen,
  Sparkles,
  Trophy,
  Flag
} from 'lucide-react';
import { CALCULATION_SECTIONS } from '../data/calculationsData';
import WhiteboardCanvas from './WhiteboardCanvas';

const CALC_FAILED_KEY = 'bombers_calc_failed_v1';
const CALC_FRIDAY_SESSION_KEY = 'bombers_calc_friday_session_v1';
const CALC_REPORTS_KEY = 'bombers_calc_reports_v1';

const QUICK_TRICKS_BY_ID = {
  'p-t9-1': 'Memoritza les ternes 3-4-5, 5-12-13 i 7-24-25! Quan vegis hipotenusa 25 i base 7, l’alçada és 24 directe sense fer arrels.',
  'p-t9-2': 'En frenada fins a 0, NO usis ½·a·t²! Fes velocitat mitjana (la meitat de la inicial: 20÷2 = 10) × temps (5 s) = 50 m.',
  'p-t9-2b': 'Truc 3-a-1: baixar la meitat de la velocitat (20→10) gasta 3/4 de la distància; el tram final (10→0) sempre és 1/3 del primer tram: 30 ÷ 3 = 10 m!',
  'p-t9-3': 'Compara els braços: 2,5 m és 5 vegades més llarg que 0,5 m → fas 5 vegades menys força (600 ÷ 5 = 120 kgf).',
  'p-t9-4': 'Aproxima g ≈ 10 m/s² per multiplicar mentalment (120 kg × 10 = 1.200 N) i divideix pel factor del polispast (÷ 4 = 300 N).',
  'p-t9-5': 'Recorda la regla del quadrat: si la velocitat es duplica (×2), Ec i distància de frenada es multipliquen per 2² = 4!',
  'p-t10-1': 'Multiplica litres × bar (6,8 × 300 ≈ 2.040 L) i divideix entre el consum (2.000 ÷ 80 = 25 min aprox., ajustat amb Z ≈ 23 min).',
  'p-t10-2': 'Passa sempre a Kelvin (+273): 27 °C = 300 K i 327 °C = 600 K → el doble de K = el doble de pressió!',
  'p-t10-3': 'Regla del 29 (massa molar de l’aire): M < 29 puja (NH₃ = 17 < 29); M > 29 baixa arran de terra (propà = 44 > 29).',
  'p-t10-4': 'Xifra màgica de l’aigua: 100 kcal/kg per escalfar de 0 a 100 °C + 540 kcal/kg per vaporitzar → ~620–640 kcal per cada litre!',
  'p-t10-5': '1 mol en CN (0 °C, 1 atm) sempre ocupa 22,4 L (aprox. 22 L per descartar ràpidament opcions absurdament llunyanes).',
  'p-t11-1': 'Triangle P = V · I → I = P ÷ V. Aproxima 230 V ≈ 230 o 220: 2.300 ÷ 230 = 10 A exactes!',
  'p-t11-2': 'Paral·lel de dues resistències diferents: Producte ÷ Suma (ex: 6×3 ÷ (6+3) = 18÷9 = 2 Ω). Sempre dona MENYS que la més petita!',
  'p-t11-3': 'Energia (Wh) = Volts × Ah. Multiplica directe (36 × 5 = 180 Wh) sense complicacions.',
  'p-t11-4': 'En un transformador ideal la potència es conserva: si baixa el voltatge ×10, puja la intensitat ×10.',
  'p-t11-5': 'Aproxima cos(φ) = 0,8 com a dividir entre 0,8 (= multiplicar per 1,25, és a dir +25%).',
  'p-t13-1': 'Regla del 0,1 bar per metre: 30 m = 3,0 bar → suma directe 5 + 2,5 + 3 = 10,5 bar!',
  'p-t13-1b': 'Aproxima g ≈ 10 m/s² per saber l’ordre de magnitud: 1.000 × 10 × 1 = 10.000 N/m², i tria el valor just per sota: 9.800 N (mai en kg!).',
  'p-t13-2': 'Si el diàmetre es divideix per 2, la secció baixa ÷ 4 i la velocitat puja × 4 (perquè l’àrea va amb D²).',
  'p-t13-3': 'Cada 10 m d’aigua = 1 bar = 100 kPa. Així 15 m = 1,5 bar = 150 kPa al moment.',
  'p-t13-4': 'Quan baixes (barranc), la gravetat t’ajuda i RESTA pressió necessària a la bomba (-0,1 bar per cada metre de baixada).',
  'p-t13-5': 'Suma cabals en L/min i divideix la cisterna directament: 3.000 ÷ 500 = 30 ÷ 5 = 6 minuts.',
  'p-t13-6': 'Per calcular un % de 1.000, només multiplica el % per 10! (2% de 1.000 = 20 L/min → 200 ÷ 20 = 10 min).',
  'p-t13-7': 'Truc ràpid d’escuma: L_escumogen × (100 ÷ %) × Expansió → 6 × (100÷3) × 10 = 200 × 10 = 2.000 L!',
  'p-t19-1': 'Múltiples de 18 km/h = 5 m/s: 18→5, 36→10, 54→15, 72→20, 90→25, 108→30 m/s!',
  'p-t19-2': 'Pendent % = metres que puges cada 100 m horitzontals. Divideix els dos números per 3: 36 ÷ 3 = 12%!',
  'p-t19-3': 'Sempre que es dupliqui la velocitat (×2) en una fórmula amb v², el resultat es multiplica per 4!'
};

const ALL_CALC_PROBLEMS = CALCULATION_SECTIONS.flatMap((sec) =>
  sec.problems.map((p) => ({ ...p, sectionTitle: sec.shortTitle }))
);

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch {}
}

function buildFridayProblems(failedIds = [], count = 10) {
  const failedSet = new Set(failedIds);
  const nonFailed = ALL_CALC_PROBLEMS.filter((p) => !failedSet.has(p.id));
  const poolForNew = nonFailed.length >= count ? nonFailed : ALL_CALC_PROBLEMS;
  const freshTen = [...poolForNew].sort(() => Math.random() - 0.5).slice(0, Math.min(count, poolForNew.length));
  const freshIds = new Set(freshTen.map((p) => p.id));

  const reviewProblems = ALL_CALC_PROBLEMS.filter(
    (p) => failedSet.has(p.id) && !freshIds.has(p.id)
  ).map((p) => ({ ...p, isReviewMistake: true }));

  return [...freshTen, ...reviewProblems];
}

function restoreFridaySession(failedIds) {
  const saved = loadJson(CALC_FRIDAY_SESSION_KEY, null);
  if (saved && Array.isArray(saved.problemIds) && saved.problemIds.length > 0) {
    const reviewSet = new Set(saved.reviewIds || []);
    const byId = new Map(ALL_CALC_PROBLEMS.map((p) => [p.id, p]));
    const restored = saved.problemIds
      .map((id) => {
        const p = byId.get(id);
        return p ? { ...p, isReviewMistake: reviewSet.has(id) } : null;
      })
      .filter(Boolean);
    if (restored.length > 0) {
      return {
        problems: restored,
        answers: saved.selectedAnswers || {},
        isSaved: !!saved.saved
      };
    }
  }
  return {
    problems: buildFridayProblems(failedIds, 10),
    answers: {},
    isSaved: false
  };
}

export default function CalculationsView({
  initialMode = 'all',
  fridayHistory = [],
  onSaveFridaySession
}) {
  const [failedCalcIds, setFailedCalcIds] = useState(() => loadJson(CALC_FAILED_KEY, []));
  const [initialFriday] = useState(() => restoreFridaySession(loadJson(CALC_FAILED_KEY, [])));
  const [selectedAnswers, setSelectedAnswers] = useState(() => initialFriday.answers);
  const [visibleHints, setVisibleHints] = useState({});
  const [activeSectionId, setActiveSectionId] = useState(CALCULATION_SECTIONS[0].id);
  const [viewMode, setViewMode] = useState(initialMode === 'friday' ? 'friday' : 'all'); // 'all' | 'friday'
  const [fridayProblems, setFridayProblems] = useState(() => initialFriday.problems);
  const [fridaySaved, setFridaySaved] = useState(() => initialFriday.isSaved);
  const [showWhiteboard, setShowWhiteboard] = useState(false);

  // Suggeriments d'error per problema
  const [reportsMap, setReportsMap] = useState(() => loadJson(CALC_REPORTS_KEY, {}));
  const [reportingProbId, setReportingProbId] = useState(null);
  const [reportDraft, setReportDraft] = useState('');

  useEffect(() => {
    if (initialMode === 'friday') {
      setViewMode('friday');
    }
  }, [initialMode]);

  useEffect(() => {
    if (viewMode !== 'friday') return;
    const fridayAnswers = {};
    fridayProblems.forEach((p) => {
      if (selectedAnswers[p.id] !== undefined) fridayAnswers[p.id] = selectedAnswers[p.id];
    });
    saveJson(CALC_FRIDAY_SESSION_KEY, {
      problemIds: fridayProblems.map((p) => p.id),
      reviewIds: fridayProblems.filter((p) => p.isReviewMistake).map((p) => p.id),
      selectedAnswers: fridayAnswers,
      saved: fridaySaved
    });
  }, [fridayProblems, selectedAnswers, fridaySaved, viewMode]);

  const scrollToElement = (elementId, sectionId) => {
    if (sectionId) setActiveSectionId(sectionId);
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectOption = (problem, optionIdx) => {
    const problemId = problem.id;
    if (selectedAnswers[problemId] !== undefined) return;
    const next = { ...selectedAnswers, [problemId]: optionIdx };
    setSelectedAnswers(next);

    const isCorrect = optionIdx === problem.correctIndex;
    setFailedCalcIds((prev) => {
      const exists = prev.includes(problemId);
      let updated = prev;
      if (!isCorrect && !exists) {
        updated = [...prev, problemId];
      } else if (isCorrect && exists) {
        updated = prev.filter((id) => id !== problemId);
      }
      if (updated !== prev) saveJson(CALC_FAILED_KEY, updated);
      return updated;
    });

    if (viewMode === 'friday' && !fridaySaved) {
      const answeredFriday = fridayProblems.filter((p) => next[p.id] !== undefined).length;
      if (answeredFriday === fridayProblems.length && fridayProblems.length > 0) {
        const score = fridayProblems.filter((p) => next[p.id] === p.correctIndex).length;
        onSaveFridaySession && onSaveFridaySession(score, fridayProblems.length);
        setFridaySaved(true);
      }
    }
  };

  const handleSubmitReport = (prob) => {
    if (!reportDraft.trim()) return;
    const entry = {
      problemId: prob.id,
      title: prob.title,
      sectionTitle: prob.sectionTitle || '',
      reason: reportDraft.trim(),
      createdAt: new Date().toISOString()
    };
    const next = { ...reportsMap, [prob.id]: entry };
    setReportsMap(next);
    saveJson(CALC_REPORTS_KEY, next);
    setReportingProbId(null);
    setReportDraft('');
  };

  const regenerateFridayTest = () => {
    const fresh = buildFridayProblems(failedCalcIds, 10);
    setSelectedAnswers({});
    setVisibleHints({});
    setFridayProblems(fresh);
    setFridaySaved(false);
    saveJson(CALC_FRIDAY_SESSION_KEY, {
      problemIds: fresh.map((p) => p.id),
      reviewIds: fresh.filter((p) => p.isReviewMistake).map((p) => p.id),
      selectedAnswers: {},
      saved: false
    });
  };

  const toggleHint = (problemId) => {
    setVisibleHints((prev) => ({ ...prev, [problemId]: !prev[problemId] }));
  };

  const resetAllProblems = () => {
    setSelectedAnswers({});
    setVisibleHints({});
  };

  const totalProblems = CALCULATION_SECTIONS.reduce(
    (acc, sec) => acc + sec.problems.length,
    0
  );
  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = CALCULATION_SECTIONS.reduce(
    (acc, sec) =>
      acc +
      sec.problems.filter((p) => selectedAnswers[p.id] === p.correctIndex).length,
    0
  );

  const renderProblemCard = (prob, label, isReviewMistake = false) => {
    const chosen = selectedAnswers[prob.id];
    const isAnswered = chosen !== undefined;
    const isCorrect = chosen === prob.correctIndex;
    const showHint = !!visibleHints[prob.id];
    const report = reportsMap[prob.id];
    const isReporting = reportingProbId === prob.id;

    return (
      <div
        key={prob.id}
        className={`rounded-2xl border p-5 space-y-4 ${
          isReviewMistake
            ? 'border-rose-300 dark:border-rose-800/70 bg-rose-50/40 dark:bg-rose-950/20'
            : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/50'
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                {label}
              </span>
              {isReviewMistake && (
                <span className="rounded-full bg-rose-600/15 text-rose-700 dark:text-rose-300 px-2 py-0.5 text-[10px] font-extrabold">
                  Repàs d&apos;error anterior
                </span>
              )}
            </div>
            <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
              {prob.title}
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => toggleHint(prob.id)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 text-xs font-bold text-amber-800 dark:text-amber-300 hover:bg-amber-100"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{showHint ? 'Amagar pista' : 'Pista mental'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (isReporting) {
                  setReportingProbId(null);
                  setReportDraft('');
                } else {
                  setReportingProbId(prob.id);
                  setReportDraft(report?.reason || '');
                }
              }}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition ${
                report
                  ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-red-400'
              }`}
            >
              <Flag className="w-3.5 h-3.5" />
              <span>{report ? 'Error suggerit ✓' : 'Suggerir error'}</span>
            </button>
          </div>
        </div>

        {isReporting && (
          <div className="rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/80 dark:bg-amber-950/30 p-3.5 space-y-2">
            <label className="block text-xs font-extrabold text-amber-900 dark:text-amber-200">
              Descripció de l&apos;error o millora suggerida:
            </label>
            <textarea
              rows={2}
              value={reportDraft}
              onChange={(e) => setReportDraft(e.target.value)}
              placeholder="Ex: Dades incompletes, unitat incorrecta, errada a la fórmula o a les opcions..."
              className="w-full rounded-xl border border-amber-200 dark:border-amber-800 bg-white dark:bg-slate-900 px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-red-500"
            />
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setReportingProbId(null);
                  setReportDraft('');
                }}
                className="px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-400"
              >
                Cancel·lar
              </button>
              <button
                type="button"
                onClick={() => handleSubmitReport(prob)}
                className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-3.5 py-1.5 text-xs font-extrabold"
              >
                Enviar suggeriment
              </button>
            </div>
          </div>
        )}

        {report && !isReporting && (
          <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/70 dark:bg-emerald-950/20 px-3.5 py-2 text-xs text-emerald-900 dark:text-emerald-200">
            <span className="font-extrabold">Error suggerit:</span> {report.reason}
          </div>
        )}

        <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
          {prob.statement}
        </p>

        {showHint && (
          <div className="rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/90 dark:bg-amber-950/30 px-4 py-2.5 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
            <span className="font-extrabold">Pista:</span> {prob.hint}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {prob.options.map((opt, optIdx) => {
            let style =
              'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-red-400';
            if (isAnswered) {
              if (optIdx === prob.correctIndex) {
                style =
                  'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold';
              } else if (optIdx === chosen) {
                style =
                  'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
              } else {
                style =
                  'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-400';
              }
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(prob, optIdx)}
                disabled={isAnswered}
                className={`flex items-center justify-between gap-2 rounded-xl border px-4 py-3 text-left text-sm transition-all ${style}`}
              >
                <span>{opt}</span>
                {isAnswered && optIdx === prob.correctIndex && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
                {isAnswered && optIdx === chosen && optIdx !== prob.correctIndex && (
                  <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div
            className={`rounded-xl border p-4 space-y-1.5 ${
              isCorrect
                ? 'border-emerald-200 dark:border-emerald-900 bg-emerald-50/70 dark:bg-emerald-950/30'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
            }`}
          >
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Resolució pas a pas
            </div>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              {prob.solutionSteps.map((step, sIdx) => (
                <li key={sIdx}>{step}</li>
              ))}
            </ul>
            {(prob.quickTrick || QUICK_TRICKS_BY_ID[prob.id]) && (
              <div className="mt-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/70 px-3 py-2 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Truc / Aproximació ràpida:</strong> {prob.quickTrick || QUICK_TRICKS_BY_ID[prob.id]}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Capçalera principal */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-600/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-red-700 dark:text-red-400">
              <Calculator className="w-3.5 h-3.5" />
              <span>Centre de Càlcul i Problemes</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Fórmules, Trucs Mentals i Problemes Resolts
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Tots els temes de càlcul seguits en un sol espai: primer el resum de fórmules i
              trucs per fer els comptes mentalment o en paper sense calculadora, i tot seguit
              una bateria de problemes pràctics.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                onClick={() => setViewMode('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all ${
                  viewMode === 'all'
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                }`}
              >
                Tots els Temes i Fórmules
              </button>
              <button
                onClick={() => setViewMode('friday')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all ${
                  viewMode === 'friday'
                    ? 'bg-amber-500 text-slate-950 border-amber-500'
                    : 'bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800'
                }`}
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Repàs Setmanal Divendres (10 aleatoris)</span>
              </button>
              <button
                onClick={() => setShowWhiteboard((v) => !v)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all ${
                  showWhiteboard
                    ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{showWhiteboard ? 'Amagar Pissarra' : 'Obrir Pissarra'}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-right">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Encerts en problemes
              </div>
              <div className="text-xl font-extrabold text-slate-900 dark:text-white">
                {correctCount} / {answeredCount}{' '}
                <span className="text-xs font-semibold text-slate-500">
                  ({totalProblems} totals)
                </span>
              </div>
            </div>
            {answeredCount > 0 && (
              <button
                onClick={resetAllProblems}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar problemes</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Pissarra interactiva per fer operacions */}
      {showWhiteboard && (
        <WhiteboardCanvas
          title="Pissarra de Càlculs i Esquemes"
          onClose={() => setShowWhiteboard(false)}
        />
      )}

      {/* Guia d'aproximacions ràpides sense calculadora */}
      <div className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 p-5 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-300">
          <Zap className="w-4 h-4" />
          <span>Taula d&apos;Aproximacions Ràpides d&apos;Examen (Sense Calculadora)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
          <div className="rounded-xl bg-white/85 dark:bg-slate-900/80 border border-amber-200/70 dark:border-slate-800 p-3">
            <strong className="text-slate-900 dark:text-white block mb-1">1. Velocitats (múltiples de 18)</strong>
            <span className="text-slate-600 dark:text-slate-300">
              18 km/h = 5 m/s · 36 = 10 · 54 = 15 · <strong>72 = 20</strong> · 90 = 25 · 108 = 30 m/s. Per altres valors, divideix per 4 i suma un 10%.
            </span>
          </div>
          <div className="rounded-xl bg-white/85 dark:bg-slate-900/80 border border-amber-200/70 dark:border-slate-800 p-3">
            <strong className="text-slate-900 dark:text-white block mb-1">2. Frenades i Quadrat (v²)</strong>
            <span className="text-slate-600 dark:text-slate-300">
              Fins a 0: <strong>(v₀ ÷ 2) × t</strong>. De v a v/2 gasta 3/4 de l&apos;espai; el tram final (v/2 → 0) és <strong>1/3 del primer tram</strong>. Si 2×v → 4×d!
            </span>
          </div>
          <div className="rounded-xl bg-white/85 dark:bg-slate-900/80 border border-amber-200/70 dark:border-slate-800 p-3">
            <strong className="text-slate-900 dark:text-white block mb-1">3. Pressions (Stevin i Bar)</strong>
            <span className="text-slate-600 dark:text-slate-300">
              1 m d&apos;aigua = <strong>0,1 bar = 10 kPa = 9.800 N/m²</strong>. Aproxima <strong>g ≈ 10</strong> mentalment i tria la xifra just un 2% per sota (9.800).
            </span>
          </div>
        </div>
      </div>

      {viewMode === 'friday' ? (
        <div className="rounded-3xl border border-amber-200 dark:border-amber-900/60 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Sessió Setmanal de Divendres
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                10 Problemes Aleatoris{fridayProblems.length > 10 ? ` + ${fridayProblems.length - 10} de Repàs` : ''}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Les respostes queden guardades. Els problemes que fallis s&apos;afegeixen automàticament després dels 10 nous a la següent sessió fins que els encertis.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {failedCalcIds.length > 0 && (
                <span className="rounded-full bg-rose-100 dark:bg-rose-950/60 px-2.5 py-1 text-xs font-extrabold text-rose-700 dark:text-rose-300">
                  {failedCalcIds.length} fallats pendents
                </span>
              )}
              {fridayHistory.length > 0 && (
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Últim divendres: {fridayHistory[0].score}/{fridayHistory[0].total} ({fridayHistory[0].percentage}%)
                </span>
              )}
              <button
                onClick={regenerateFridayTest}
                className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 px-3.5 py-2 text-xs font-extrabold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Nous 10 Aleatoris</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {fridayProblems.map((prob, pIdx) =>
              renderProblemCard(
                prob,
                `Problema ${pIdx + 1}/${fridayProblems.length} · ${prob.sectionTitle}`,
                !!prob.isReviewMistake
              )
            )}
          </div>
        </div>
      ) : (
        <>
      {/* Barra enganxosa de navegació per subapartats */}
      <div className="sticky top-2 z-20 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-2">
            Saltar a subapartat:
          </span>
          {CALCULATION_SECTIONS.map((sec) => {
            const isActive = activeSectionId === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToElement(sec.id, sec.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {sec.shortTitle}
              </button>
            );
          })}
        </div>
      </div>

      {/* Seccions seqüencials de cada tema */}
      <div className="space-y-12">
        {CALCULATION_SECTIONS.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="scroll-mt-24 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-8"
          >
            {/* Capçalera del tema + botons ràpids Fórmules / Tips / Problemes */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-red-600 dark:text-red-400">
                  Subapartat · Tema {sec.topicNumber}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                  {sec.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {sec.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => scrollToElement(`${sec.id}-formules`, sec.id)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>1. Fórmules</span>
                </button>
                <button
                  onClick={() => scrollToElement(`${sec.id}-tips`, sec.id)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>2. Tips Mentals</span>
                </button>
                <button
                  onClick={() => scrollToElement(`${sec.id}-problemes`, sec.id)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 dark:bg-slate-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-slate-800"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>3. Problemes ({sec.problems.length})</span>
                </button>
              </div>
            </div>

            {/* 1. Resum de Fórmules */}
            <div id={`${sec.id}-formules`} className="scroll-mt-24 space-y-4">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Resum de Fórmules i Càlculs</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sec.formulas.map((f, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 p-4 space-y-2"
                  >
                    <div className="text-xs font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                      {f.name}
                    </div>
                    <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-2 text-sm font-extrabold text-slate-900 dark:text-white">
                      {f.formula}
                    </div>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Unitats: {f.units}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      <span className="font-bold">Quan usar-la:</span> {f.when}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Tips i Maneres Fàcils (Càlcul Mental / en Paper) */}
            <div id={`${sec.id}-tips`} className="scroll-mt-24 space-y-4">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Tips per Calcular Mentalment o en Paper (Sense Calculadora)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sec.mentalTips.map((t, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/70 dark:bg-amber-950/20 p-4 space-y-2"
                  >
                    <div className="text-sm font-extrabold text-amber-900 dark:text-amber-300">
                      {t.title}
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t.tip}
                    </p>
                    <div className="rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200/70 dark:border-amber-900/40 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <span className="font-extrabold text-amber-700 dark:text-amber-400">
                        Exemple ràpid:
                      </span>{' '}
                      {t.example}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Problemes de Càlcul Interactius */}
            <div id={`${sec.id}-problemes`} className="scroll-mt-24 space-y-4">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span>Problemes Pràctics de Càlcul ({sec.problems.length})</span>
              </h3>

              <div className="space-y-4">
                {sec.problems.map((prob, pIdx) =>
                  renderProblemCard(
                    { ...prob, sectionTitle: sec.shortTitle },
                    `Problema ${pIdx + 1} · ${sec.shortTitle}`,
                    failedCalcIds.includes(prob.id)
                  )
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
        </>
      )}
    </div>
  );
}
