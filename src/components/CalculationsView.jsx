import React, { useState } from 'react';
import {
  Calculator,
  Lightbulb,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Zap,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { CALCULATION_SECTIONS } from '../data/calculationsData';

export default function CalculationsView() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [visibleHints, setVisibleHints] = useState({});
  const [activeSectionId, setActiveSectionId] = useState(CALCULATION_SECTIONS[0].id);

  const scrollToElement = (elementId, sectionId) => {
    if (sectionId) setActiveSectionId(sectionId);
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectOption = (problemId, optionIdx) => {
    if (selectedAnswers[problemId] !== undefined) return;
    setSelectedAnswers((prev) => ({ ...prev, [problemId]: optionIdx }));
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
                {sec.problems.map((prob, pIdx) => {
                  const chosen = selectedAnswers[prob.id];
                  const isAnswered = chosen !== undefined;
                  const isCorrect = chosen === prob.correctIndex;
                  const showHint = !!visibleHints[prob.id];

                  return (
                    <div
                      key={prob.id}
                      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/50 p-5 space-y-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Problema {pIdx + 1} · {sec.shortTitle}
                          </span>
                          <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                            {prob.title}
                          </h4>
                        </div>

                        <button
                          onClick={() => toggleHint(prob.id)}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 text-xs font-bold text-amber-800 dark:text-amber-300 hover:bg-amber-100"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>{showHint ? 'Amagar pista' : 'Pista mental'}</span>
                        </button>
                      </div>

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
                              onClick={() => handleSelectOption(prob.id, optIdx)}
                              disabled={isAnswered}
                              className={`flex items-center justify-between gap-2 rounded-xl border px-4 py-3 text-left text-sm transition-all ${style}`}
                            >
                              <span>{opt}</span>
                              {isAnswered && optIdx === prob.correctIndex && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                              {isAnswered &&
                                optIdx === chosen &&
                                optIdx !== prob.correctIndex && (
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
                            Resolució pas a pas (en paper / mentalment)
                          </div>
                          <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                            {prob.solutionSteps.map((step, sIdx) => (
                              <li key={sIdx}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
