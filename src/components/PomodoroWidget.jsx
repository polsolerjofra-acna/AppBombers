import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Clock, Flame, RotateCcw, X, CheckCircle2, GripVertical } from 'lucide-react';

const POS_STORAGE_KEY = 'bombers_pomodoro_pos';

function loadSavedPos() {
  try {
    const raw = localStorage.getItem(POS_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.x === 'number' && typeof parsed?.y === 'number') {
      return parsed;
    }
  } catch {
    // Ignora errors de localStorage
  }
  return null;
}

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
  const [pos, setPos] = useState(() => loadSavedPos()); // { x, y } o null (per defecte a baix a la dreta)

  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const dragStateRef = useRef(null);
  const didDragRef = useRef(false);

  const clampPos = useCallback((x, y, el) => {
    const margin = 8;
    const w = el?.offsetWidth || 160;
    const h = el?.offsetHeight || 48;
    const maxX = Math.max(margin, window.innerWidth - w - margin);
    const maxY = Math.max(margin, window.innerHeight - h - margin);
    return {
      x: Math.min(Math.max(margin, x), maxX),
      y: Math.min(Math.max(margin, y), maxY)
    };
  }, []);

  useEffect(() => {
    if (!pos) return;
    try {
      localStorage.setItem(POS_STORAGE_KEY, JSON.stringify(pos));
    } catch {
      // Ignora errors de localStorage
    }
  }, [pos]);

  useEffect(() => {
    const handleResize = () => {
      setPos((prev) => {
        if (!prev) return prev;
        const el = isOpen ? panelRef.current : buttonRef.current;
        return clampPos(prev.x, prev.y, el);
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, clampPos]);

  const startDrag = (e, targetRef) => {
    if (e.button !== undefined && e.button !== 0) return;
    const el = targetRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    dragStateRef.current = {
      startClientX: e.clientX,
      startClientY: e.clientY,
      origX: rect.left,
      origY: rect.top,
      el
    };
    didDragRef.current = false;

    const onMove = (moveEvt) => {
      const ds = dragStateRef.current;
      if (!ds) return;
      const dx = moveEvt.clientX - ds.startClientX;
      const dy = moveEvt.clientY - ds.startClientY;
      if (!didDragRef.current && Math.hypot(dx, dy) > 6) {
        didDragRef.current = true;
      }
      if (didDragRef.current) {
        setPos(clampPos(ds.origX + dx, ds.origY + dy, ds.el));
      }
    };

    const onUp = () => {
      dragStateRef.current = null;
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
  };

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
    const buttonStyle = pos
      ? { left: `${pos.x}px`, top: `${pos.y}px` }
      : undefined;

    return (
      <button
        ref={buttonRef}
        onPointerDown={(e) => startDrag(e, buttonRef)}
        onClick={() => {
          if (didDragRef.current) {
            didDragRef.current = false;
            return;
          }
          setIsOpen(true);
        }}
        style={buttonStyle}
        className={`print:hidden fixed ${
          pos ? '' : 'bottom-5 right-5'
        } z-40 flex items-center gap-2 rounded-2xl px-3.5 py-3 shadow-xl border select-none touch-none cursor-grab active:cursor-grabbing transition-shadow ${
          isRunning
            ? mode === 'study'
              ? 'bg-red-600 text-white border-red-500 animate-pulse'
              : 'bg-emerald-600 text-white border-emerald-500'
            : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-700 dark:border-slate-200 hover:shadow-2xl'
        }`}
        title="Obrir temporitzador Pomodoro (arrossega per moure'l)"
      >
        <GripVertical className="w-3.5 h-3.5 opacity-60 -ml-1 shrink-0" />
        <Clock className="w-4 h-4 shrink-0" />
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

  const panelStyle = pos
    ? (() => {
        const margin = 12;
        const w = 320;
        const h = 380;
        const x = Math.min(Math.max(margin, pos.x), Math.max(margin, window.innerWidth - w - margin));
        const y = Math.min(Math.max(margin, pos.y), Math.max(margin, window.innerHeight - h - margin));
        return { left: `${x}px`, top: `${y}px` };
      })()
    : undefined;

  return (
    <div
      ref={panelRef}
      style={panelStyle}
      className={`print:hidden fixed ${
        pos ? '' : 'bottom-5 right-5'
      } z-40 w-80 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-5 space-y-4`}
    >
      <div
        onPointerDown={(e) => {
          if (e.target.closest('button')) return;
          startDrag(e, panelRef);
        }}
        className="flex items-center justify-between cursor-grab active:cursor-grabbing select-none touch-none"
      >
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
