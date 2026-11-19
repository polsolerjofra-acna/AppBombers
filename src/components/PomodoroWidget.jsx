import React, { useState, useEffect, useRef } from 'react';
import { Clock, Flame, RotateCcw, X, CheckCircle2 } from 'lucide-react';

const PRESETS = [
  { id: '25-5', label: '25 / 5', study: 25, rest: 5 },
  { id: '50-10', label: '50 / 10', study: 50, rest: 10 },
  { id: '15-3', label: '15 / 3', study: 15, rest: 3 }
];

export default function PomodoroWidget({
  activeTopic,
  activeView,
  onLogSession,
  todayMinutes = 0
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState(PRESETS[0]);
  const [mode, setMode] = useState('study'); // 'study' | 'rest'
  const [secondsLeft, setSecondsLeft] = useState(PRESETS[0].study * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [justFinishedMsg, setJustFinishedMsg] = useState('');

  const activeTopicRef = useRef(activeTopic);
  const activeViewRef = useRef(activeView);
  activeTopicRef.current = activeTopic;
  activeViewRef.current = activeView;

  const playBeep = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch {
      // Ignora si el navegador bloqueja àudio
    }
  };

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          playBeep();

          if (mode === 'study') {
            const t = activeViewRef.current === 'topic' ? activeTopicRef.current : null;
            const title =
              activeViewRef.current === 'calculations'
                ? 'Càlculs i Problemes'
                : t
                ? `Tema ${t.number} · ${t.title}`
                : 'Estudi General';
            onLogSession(t ? t.id : 'general', title, preset.study);
            setJustFinishedMsg(`+${preset.study} min registrats! Toca descansar.`);
            setMode('rest');
            return preset.rest * 60;
          } else {
            setJustFinishedMsg('Descans completat! Tornem a estudiar.');
            setMode('study');
            return preset.study * 60;
          }
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning, mode, preset, onLogSession]);

  const selectPreset = (p) => {
    setIsRunning(false);
    setPreset(p);
    setMode('study');
    setSecondsLeft(p.study * 60);
    setJustFinishedMsg('');
  };

  const switchMode = (nextMode) => {
    setIsRunning(false);
    setMode(nextMode);
    setSecondsLeft((nextMode === 'study' ? preset.study : preset.rest) * 60);
    setJustFinishedMsg('');
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft((mode === 'study' ? preset.study : preset.rest) * 60);
    setJustFinishedMsg('');
  };

  const logElapsedManually = () => {
    const totalSec = preset.study * 60;
    const elapsedMin = Math.max(1, Math.round((totalSec - secondsLeft) / 60)) || preset.study;
    const t = activeView === 'topic' ? activeTopic : null;
    const title =
      activeView === 'calculations'
        ? 'Càlculs i Problemes'
        : t
        ? `Tema ${t.number} · ${t.title}`
        : 'Estudi General';
    onLogSession(t ? t.id : 'general', title, elapsedMin);
    setJustFinishedMsg(`Sessió desada (+${elapsedMin} min avui)`);
  };

  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const secs = String(secondsLeft % 60).padStart(2, '0');

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl border transition-all ${
          isRunning
            ? mode === 'study'
              ? 'bg-red-600 text-white border-red-500 animate-pulse'
              : 'bg-emerald-600 text-white border-emerald-500'
            : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-700 dark:border-slate-200 hover:scale-105'
        }`}
        title="Obrir temporitzador Pomodoro"
      >
        <Clock className="w-4 h-4" />
        <span className="font-extrabold text-sm tracking-tight">
          {isRunning ? `${mins}:${secs}` : 'Pomodoro'}
        </span>
        {todayMinutes > 0 && (
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/20 dark:bg-slate-900/15">
            {todayMinutes}m avui
          </span>
        )}
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 w-80 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`h-8 w-8 rounded-xl flex items-center justify-center ${
              mode === 'study'
                ? 'bg-red-600/15 text-red-600 dark:text-red-400'
                : 'bg-emerald-600/15 text-emerald-600 dark:text-emerald-400'
            }`}
          >
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Temporitzador Pomodoro
            </div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate max-w-[175px]">
              {activeView === 'calculations'
                ? 'Càlculs i Problemes'
                : activeTopic
                ? `Tema ${activeTopic.number} · ${activeTopic.title}`
                : 'Estudi General'}
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          title="Minimitzar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Selector Estudi / Descans */}
      <div className="grid grid-cols-2 gap-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
        <button
          onClick={() => switchMode('study')}
          className={`py-1.5 rounded-lg text-xs font-extrabold transition-all ${
            mode === 'study'
              ? 'bg-white dark:bg-slate-900 text-red-600 dark:text-red-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          Estudi ({preset.study}m)
        </button>
        <button
          onClick={() => switchMode('rest')}
          className={`py-1.5 rounded-lg text-xs font-extrabold transition-all ${
            mode === 'rest'
              ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          Descans ({preset.rest}m)
        </button>
      </div>

      {/* Rellotge */}
      <div className="text-center py-2">
        <div className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white tabular-nums">
          {mins}:{secs}
        </div>
        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
          Avui portes <span className="font-extrabold text-slate-800 dark:text-slate-200">{todayMinutes} min</span> d&apos;estudi registrats
        </div>
      </div>

      {/* Presets */}
      <div className="flex items-center justify-center gap-1.5">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            onClick={() => selectPreset(p)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all ${
              preset.id === p.id
                ? 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300'
                : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {justFinishedMsg && (
        <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 px-3 py-2 text-xs font-bold text-emerald-800 dark:text-emerald-200 text-center">
          {justFinishedMsg}
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            setJustFinishedMsg('');
            setIsRunning((r) => !r);
          }}
          className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold text-white transition-all ${
            isRunning
              ? 'bg-amber-600 hover:bg-amber-700'
              : mode === 'study'
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-emerald-600 hover:bg-emerald-700'
          }`}
        >
          {isRunning ? 'Pausar' : 'Iniciar'}
        </button>

        <button
          onClick={resetTimer}
          className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
          title="Reiniciar"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {mode === 'study' && (
          <button
            onClick={logElapsedManually}
            className="p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100"
            title="Registrar aquesta estona ara"
          >
            <CheckCircle2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
