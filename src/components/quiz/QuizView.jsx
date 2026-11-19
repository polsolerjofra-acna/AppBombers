import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Trophy,
  Filter,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import WhiteboardCanvas from '../WhiteboardCanvas';

const DIFFICULTY_STYLES = {
  'Fàcil': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-300/60 dark:border-emerald-800',
  'Mitjà': 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-300/60 dark:border-amber-800',
  'Difícil': 'bg-red-100 text-red-800 dark:bg-red-950/80 dark:text-red-300 border-red-300/60 dark:border-red-800'
};

export default function QuizView({
  topic,
  extraQuestions = [],
  difficultCount = 0,
  onSaveScore,
  savedQuizResult
}) {
  const baseQuestions = [...(topic.quiz || []), ...(extraQuestions || [])];
  // Si el tema té apartats marcats com a complicats o nota < 70%, prioritzem preguntes Difícil/Mitjà primer
  const shouldPrioritizeHard =
    difficultCount > 0 || (savedQuizResult && savedQuizResult.percentage < 70);
  const diffRank = { 'Difícil': 0, 'Mitjà': 1, 'Fàcil': 2 };
  const questions = shouldPrioritizeHard
    ? [...baseQuestions].sort((a, b) => (diffRank[a.difficulty] ?? 1) - (diffRank[b.difficulty] ?? 1))
    : baseQuestions;
  const [difficultyFilter, setDifficultyFilter] = useState('Totes');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedScore, setSubmittedScore] = useState(null);
  const [showWhiteboard, setShowWhiteboard] = useState(false);

  const filteredQuestions =
    difficultyFilter === 'Totes'
      ? questions
      : questions.filter((q) => q.difficulty === difficultyFilter);

  const handleSelectOption = (questionId, optionIndex) => {
    // Un cop resposta una pregunta, oferim feedback immediat i bloquegem canvis fins a reiniciar
    if (selectedAnswers[questionId] !== undefined) return;
    const updated = { ...selectedAnswers, [questionId]: optionIndex };
    setSelectedAnswers(updated);

    // Si ja s'han contestat totes les preguntes del tema, desar automàticament la puntuació
    if (Object.keys(updated).length === questions.length) {
      const correctCount = questions.reduce(
        (acc, q) => (updated[q.id] === q.correctIndex ? acc + 1 : acc),
        0
      );
      setSubmittedScore(correctCount);
      onSaveScore(topic.id, correctCount, questions.length);
    }
  };

  const handleFinishNow = () => {
    const correctCount = questions.reduce(
      (acc, q) => (selectedAnswers[q.id] === q.correctIndex ? acc + 1 : acc),
      0
    );
    setSubmittedScore(correctCount);
    onSaveScore(topic.id, correctCount, questions.length);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmittedScore(null);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const liveCorrectCount = questions.reduce(
    (acc, q) => (selectedAnswers[q.id] === q.correctIndex ? acc + 1 : acc),
    0
  );

  return (
    <div className="space-y-6">
      {/* Capçalera del Test */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              Simulador Oficial d'Examen ({questions.length} preguntes)
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
              Autoavaluació: {topic.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Respon cada pregunta per rebre feedback immediat i l'explicació raonada del tribunal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {savedQuizResult && (
              <div className="rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 px-3.5 py-2 text-xs">
                <div className="text-amber-700 dark:text-amber-400 font-semibold flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" />
                  Millor nota: {savedQuizResult.bestScore}/{savedQuizResult.totalQuestions} ({savedQuizResult.percentage}%)
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px]">
                  Intents: {savedQuizResult.attempts}
                </div>
              </div>
            )}

            <button
              onClick={() => setShowWhiteboard((v) => !v)}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-colors ${
                showWhiteboard
                  ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900'
                  : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{showWhiteboard ? 'Amagar Pissarra' : 'Obrir Pissarra'}</span>
            </button>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reiniciar Test
            </button>
          </div>
        </div>

        {showWhiteboard && (
          <div className="mt-4">
            <WhiteboardCanvas
              title="Pissarra d'operacions i esquemes"
              onClose={() => setShowWhiteboard(false)}
            />
          </div>
        )}

        {/* Barra de progrés en temps real i filtre de dificultat */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Dificultat:
            </span>
            {['Totes', 'Fàcil', 'Mitjà', 'Difícil'].map((level) => (
              <button
                key={level}
                onClick={() => setDifficultyFilter(level)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  difficultyFilter === level
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="text-slate-600 dark:text-slate-300">
              Contestades: <strong>{answeredCount}/{questions.length}</strong>
            </span>
            <span className="text-emerald-600 dark:text-emerald-400">
              Encerts: <strong>{liveCorrectCount}</strong>
            </span>
            <span className="text-red-600 dark:text-red-400">
              Errades: <strong>{answeredCount - liveCorrectCount}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Resum final quan s'ha desat la nota */}
      {submittedScore !== null && (
        <div className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/70 dark:bg-emerald-950/30 p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
              <Trophy className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Test Registrat! Puntuació: {submittedScore} de {questions.length} ({Math.round((submittedScore / questions.length) * 100)}%)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                El resultat s'ha desat automàticament al teu panell de Seguiment i Estadístiques.
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 text-xs font-bold transition-colors"
          >
            Tornar a intentar
          </button>
        </div>
      )}

      {/* Llista de preguntes */}
      <div className="space-y-4">
        {filteredQuestions.map((q, index) => {
          const userChoice = selectedAnswers[q.id];
          const isAnswered = userChoice !== undefined;
          const isCorrect = userChoice === q.correctIndex;

          return (
            <div
              key={q.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Pregunta #{index + 1}
                </span>
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${
                    DIFFICULTY_STYLES[q.difficulty] || DIFFICULTY_STYLES['Mitjà']
                  }`}
                >
                  Dificultat: {q.difficulty}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-4">
                {q.question}
              </h3>

              <div className="space-y-2.5">
                {q.options.map((opt, optIdx) => {
                  const letter = ['A', 'B', 'C', 'D'][optIdx];
                  let btnStyle =
                    'border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-slate-700 bg-slate-50/60 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200';

                  if (isAnswered) {
                    if (optIdx === q.correctIndex) {
                      btnStyle =
                        'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-200 font-semibold';
                    } else if (optIdx === userChoice) {
                      btnStyle =
                        'border-red-500 bg-red-50 dark:bg-red-950/50 text-red-950 dark:text-red-200';
                    } else {
                      btnStyle =
                        'border-slate-200/60 dark:border-slate-800/50 opacity-60 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      disabled={isAnswered}
                      className={`w-full text-left flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm transition-all ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold">
                          {letter}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {isAnswered && optIdx === q.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      )}
                      {isAnswered && optIdx === userChoice && optIdx !== q.correctIndex && (
                        <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Immediat i Explicació de la Resposta */}
              {isAnswered && (
                <div
                  className={`mt-4 rounded-xl p-4 border text-sm ${
                    isCorrect
                      ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50 text-emerald-950 dark:text-emerald-200'
                      : 'bg-red-50/70 dark:bg-red-950/20 border-red-200 dark:border-red-900/50 text-red-950 dark:text-red-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <HelpCircle className="w-4 h-4 shrink-0" />
                    <span>
                      {isCorrect
                        ? 'Resposta Correcta!'
                        : `Resposta Incorrecta (La correcta és la ${['A', 'B', 'C', 'D'][q.correctIndex]})`}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Botó per registrar la puntuació si no s'han contestat totes */}
      {answeredCount > 0 && submittedScore === null && (
        <div className="flex justify-end">
          <button
            onClick={handleFinishNow}
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-5 py-3 text-sm font-bold shadow-sm transition-colors"
          >
            <span>Finalitzar i Registrar Puntuació ({liveCorrectCount}/{questions.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
