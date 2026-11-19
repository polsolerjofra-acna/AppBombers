import React, { useRef, useState, useEffect } from 'react';
import { RotateCcw, X } from 'lucide-react';

export default function WhiteboardCanvas({ title = 'Pissarra per a càlculs i esquemes', onClose }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#0f172a');
  const [lineWidth, setLineWidth] = useState(2.5);
  const [isEraser, setIsEraser] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(300, rect.width) * dpr;
    canvas.height = 260 * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, rect.width, 260);
  }, []);

  const getCoords = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDraw = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoords(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = isEraser ? '#ffffff' : color;
    ctx.lineWidth = isEraser ? 16 : lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoords(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDraw = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, rect.width, 260);
  };

  const COLORS = [
    { id: 'negre', hex: '#0f172a', label: 'Negre' },
    { id: 'vermell', hex: '#dc2626', label: 'Vermell' },
    { id: 'blau', hex: '#2563eb', label: 'Blau' },
    { id: 'verd', hex: '#16a34a', label: 'Verd' }
  ];

  return (
    <div className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-3.5 space-y-2.5 shadow-inner">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-extrabold text-slate-700 dark:text-slate-200">
          {title}
        </span>

        <div className="flex flex-wrap items-center gap-1.5">
          {COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setIsEraser(false);
                setColor(c.hex);
              }}
              className={`w-6 h-6 rounded-full border-2 transition-transform ${
                !isEraser && color === c.hex
                  ? 'scale-110 border-amber-400 ring-2 ring-amber-400/40'
                  : 'border-white dark:border-slate-600'
              }`}
              style={{ backgroundColor: c.hex }}
              title={c.label}
            />
          ))}

          <button
            type="button"
            onClick={() => setIsEraser((v) => !v)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border ${
              isEraser
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700'
            }`}
          >
            Goma
          </button>

          <button
            type="button"
            onClick={() => setLineWidth((w) => (w === 2.5 ? 4.5 : 2.5))}
            className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
          >
            Traç: {lineWidth === 2.5 ? 'Fi' : 'Gruixut'}
          </button>

          <button
            type="button"
            onClick={clearCanvas}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-900 text-red-600 border border-slate-300 dark:border-slate-700 hover:bg-red-50"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Netejar</span>
          </button>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700"
              title="Tancar pissarra"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <canvas
        ref={canvasRef}
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={stopDraw}
        onMouseLeave={stopDraw}
        onTouchStart={(e) => {
          e.preventDefault();
          startDraw(e);
        }}
        onTouchMove={(e) => {
          e.preventDefault();
          draw(e);
        }}
        onTouchEnd={stopDraw}
        className="w-full h-[260px] rounded-xl bg-white border border-slate-300 cursor-crosshair touch-none block"
      />
    </div>
  );
}
