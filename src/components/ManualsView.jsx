import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  FileText,
  Download,
  Search,
  Highlighter,
  Pencil,
  Eraser,
  Undo2,
  Trash2,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  FolderOpen,
  RotateCw
} from 'lucide-react';
import { OFFICIAL_MANUALS } from '../data/manualsData';

const MANUALS_ANNOTATIONS_STORAGE_KEY = 'bombers_manual_annotations_v1';

const CATEGORIES = [
  { id: 'all', label: 'Tots (34)' },
  { id: 'general', label: 'Bloc General (T1–T7)' },
  { id: 'tecnic', label: 'Ciències i Tècnica (T8–T15)' },
  { id: 'intervencio', label: 'Intervenció i Operativa (T16–T34)' },
];

const HIGHLIGHT_COLORS = [
  { id: 'yellow', label: 'Groc', hex: '#facc15' },
  { id: 'green', label: 'Verd', hex: '#4ade80' },
  { id: 'pink', label: 'Rosa', hex: '#f472b6' },
  { id: 'blue', label: 'Blau', hex: '#60a5fa' },
];

const PEN_COLORS = [
  { id: 'red', label: 'Vermell', hex: '#dc2626' },
  { id: 'navy', label: 'Blau fosc', hex: '#2563eb' },
  { id: 'ink', label: 'Negre', hex: '#0f172a' },
];

function loadSavedAnnotations() {
  try {
    const raw = localStorage.getItem(MANUALS_ANNOTATIONS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveAnnotations(data) {
  try {
    localStorage.setItem(MANUALS_ANNOTATIONS_STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.warn('No s\'han pogut desar les anotacions al localStorage:', err);
  }
}

function drawStrokesOnCanvas(canvas, strokes) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!strokes || strokes.length === 0) return;

  const w = canvas.width;
  const h = canvas.height;

  for (const stroke of strokes) {
    if (!stroke.points || stroke.points.length === 0) continue;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (stroke.tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.globalAlpha = 1;
      ctx.strokeStyle = 'rgba(0,0,0,1)';
      ctx.lineWidth = (stroke.size || 0.022) * w;
    } else if (stroke.tool === 'highlighter') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.36;
      ctx.strokeStyle = stroke.color || '#facc15';
      ctx.lineWidth = (stroke.size || 0.022) * w;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.95;
      ctx.strokeStyle = stroke.color || '#dc2626';
      ctx.lineWidth = (stroke.size || 0.0035) * w;
    }

    ctx.beginPath();
    const first = stroke.points[0];
    ctx.moveTo(first.x * w, first.y * h);
    if (stroke.points.length === 1) {
      ctx.lineTo(first.x * w + 0.5, first.y * h + 0.5);
    } else {
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x * w, stroke.points[i].y * h);
      }
    }
    ctx.stroke();
    ctx.restore();
  }
}

function ManualPdfEditor({ manual, savedStore, onUpdateManualStore, onBack, onOpenTopicSummary, initialSearchQuery = '' }) {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [pageInput, setPageInput] = useState('1');
  const [scale, setScale] = useState(1.25);
  const [fitWidth, setFitWidth] = useState(true);
  const [renderDims, setRenderDims] = useState({ width: 0, height: 0 });
  const [loadingPdf, setLoadingPdf] = useState(true);
  const [pdfError, setPdfError] = useState('');
  const [exportProgress, setExportProgress] = useState('');
  const [activeSearchQuery, setActiveSearchQuery] = useState(initialSearchQuery || '');
  const [matchedPages, setMatchedPages] = useState([]);

  const [tool, setTool] = useState('highlighter'); // 'highlighter' | 'pen' | 'eraser'
  const [highlightColor, setHighlightColor] = useState('#facc15');
  const [penColor, setPenColor] = useState('#dc2626');
  const [showNotesPanel, setShowNotesPanel] = useState(true);

  const viewerContainerRef = useRef(null);
  const pdfCanvasRef = useRef(null);
  const annotCanvasRef = useRef(null);
  const renderTaskRef = useRef(null);
  const isDrawingRef = useRef(false);
  const activeStrokeRef = useRef(null);

  const manualData = savedStore[manual.id] || { pages: {}, notes: {}, rotation: 0 };
  const currentStrokes = (manualData.pages && manualData.pages[pageNum]) || [];
  const currentNote = (manualData.notes && manualData.notes[pageNum]) || '';
  const [rotation, setRotation] = useState(() => manualData.rotation || 0);
  const [straightLine, setStraightLine] = useState(true);
  const [showReadingGuide, setShowReadingGuide] = useState(true);
  const [guideY, setGuideY] = useState(null);

  // Carrega del document PDF amb pdf.js
  useEffect(() => {
    let cancelled = false;
    setLoadingPdf(true);
    setPdfError('');
    setPdfDoc(null);
    setPageNum(1);
    setPageInput('1');

    const pdfjsLib = window.pdfjsLib;
    if (!pdfjsLib) {
      setPdfError('No s\'ha pogut carregar el motor PDF.js. Pots utilitzar el visor alternatiu o descarregar el manual.');
      setLoadingPdf(false);
      return;
    }

    if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }

    const loadingTask = pdfjsLib.getDocument(manual.url);
    loadingTask.promise
      .then((doc) => {
        if (cancelled) return;
        setPdfDoc(doc);
        setNumPages(doc.numPages);
        setLoadingPdf(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Error obrint PDF:', err);
        setPdfError('Error carregant el PDF amb PDF.js. Pots obrir-lo en una pestanya nova o descarregar-lo.');
        setLoadingPdf(false);
      });

    return () => {
      cancelled = true;
    };
  }, [manual.url]);

  useEffect(() => {
    setActiveSearchQuery(initialSearchQuery || '');
  }, [initialSearchQuery]);

  const highlightTerms = useMemo(() => {
    const normalize = (str) =>
      String(str || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    return normalize(activeSearchQuery)
      .split(/\s+/)
      .map((w) => w.trim())
      .filter((w) => w.length >= 3);
  }, [activeSearchQuery]);

  // Cerca automàticament la pàgina del manual que millor encaixa amb la justificació i hi salta
  useEffect(() => {
    if (!pdfDoc || highlightTerms.length === 0) {
      setMatchedPages([]);
      return;
    }
    let cancelled = false;
    const normalize = (str) =>
      String(str || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    (async () => {
      let bestPage = 1;
      let bestScore = 0;
      const hits = [];
      for (let p = 1; p <= pdfDoc.numPages; p++) {
        if (cancelled) return;
        try {
          const page = await pdfDoc.getPage(p);
          const tc = await page.getTextContent();
          const text = normalize(tc.items.map((it) => it.str).join(' '));
          let score = 0;
          highlightTerms.forEach((term) => {
            if (text.includes(term)) score += 1;
          });
          if (score > 0) hits.push({ page: p, score });
          if (score > bestScore) {
            bestScore = score;
            bestPage = p;
          }
        } catch {}
      }
      if (!cancelled) {
        hits.sort((a, b) => b.score - a.score);
        setMatchedPages(hits.slice(0, 6).map((h) => h.page));
        if (bestScore > 0) {
          setPageNum(bestPage);
          setPageInput(String(bestPage));
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [pdfDoc, highlightTerms]);

  // Renderitzat de la pàgina PDF (independent dels traços perquè no es cancel·li)
  const renderCurrentPage = useCallback(async () => {
    if (!pdfDoc || !pdfCanvasRef.current || !annotCanvasRef.current) return;

    try {
      if (renderTaskRef.current) {
        try {
          renderTaskRef.current.cancel();
        } catch {
          // ignore
        }
      }

      const page = await pdfDoc.getPage(pageNum);
      const effectiveRotation = ((page.rotate || 0) + rotation) % 360;
      const baseViewport = page.getViewport({ scale: 1, rotation: effectiveRotation });

      let targetScale = scale;
      if (fitWidth && viewerContainerRef.current) {
        const availW = Math.max(280, viewerContainerRef.current.clientWidth - 28);
        targetScale = availW / baseViewport.width;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const viewport = page.getViewport({ scale: targetScale * dpr, rotation: effectiveRotation });
      const cssW = Math.floor(baseViewport.width * targetScale);
      const cssH = Math.floor(baseViewport.height * targetScale);

      const pdfCanvas = pdfCanvasRef.current;
      const annotCanvas = annotCanvasRef.current;

      pdfCanvas.width = Math.floor(viewport.width);
      pdfCanvas.height = Math.floor(viewport.height);
      annotCanvas.width = pdfCanvas.width;
      annotCanvas.height = pdfCanvas.height;
      setRenderDims((prev) =>
        prev.width === cssW && prev.height === cssH ? prev : { width: cssW, height: cssH }
      );

      const ctx = pdfCanvas.getContext('2d');
      const task = page.render({ canvasContext: ctx, viewport });
      renderTaskRef.current = task;
      await task.promise;

      // Subratllat automàtic en groc de les paraules clau de la justificació
      if (highlightTerms.length > 0 && window.pdfjsLib?.Util) {
        try {
          const tc = await page.getTextContent();
          const normalize = (str) =>
            String(str || '')
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '');
          ctx.save();
          ctx.fillStyle = 'rgba(250, 204, 21, 0.45)';
          for (const item of tc.items) {
            const normStr = normalize(item.str);
            if (!normStr || normStr.length < 2) continue;
            const hasHit = highlightTerms.some((term) => normStr.includes(term) || (normStr.length >= 4 && term.includes(normStr)));
            if (!hasHit) continue;
            const tx = window.pdfjsLib.Util.transform(viewport.transform, item.transform);
            const fontHeight = Math.hypot(tx[2], tx[3]) || item.height * viewport.scale || 14;
            const rectW = (item.width || 20) * viewport.scale;
            const rectX = tx[4];
            const rectY = tx[5] - fontHeight * 0.85;
            ctx.fillRect(rectX - 2, rectY, rectW + 4, fontHeight * 1.1);
          }
          ctx.restore();
        } catch {}
      }
    } catch (err) {
      if (err && err.name === 'RenderingCancelledException') return;
      console.error('Error renderitzant pàgina PDF:', err);
    }
  }, [pdfDoc, pageNum, scale, fitWidth, rotation, highlightTerms]);

  useEffect(() => {
    renderCurrentPage();
  }, [renderCurrentPage]);

  useEffect(() => {
    if (annotCanvasRef.current) {
      drawStrokesOnCanvas(annotCanvasRef.current, currentStrokes);
    }
  }, [currentStrokes, renderDims]);

  useEffect(() => {
    if (!fitWidth) return;
    const onResize = () => renderCurrentPage();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [fitWidth, renderCurrentPage]);

  useEffect(() => {
    setPageInput(String(pageNum));
  }, [pageNum]);

  const handleRotate90 = () => {
    const nextRot = (rotation + 90) % 360;
    setRotation(nextRot);
    onUpdateManualStore(manual.id, {
      pages: { ...(manualData.pages || {}) },
      notes: { ...(manualData.notes || {}) },
      rotation: nextRot,
    });
  };

  const commitPageStrokes = (nextStrokes) => {
    const nextManualData = {
      pages: { ...(manualData.pages || {}), [pageNum]: nextStrokes },
      notes: { ...(manualData.notes || {}) },
      rotation,
    };
    onUpdateManualStore(manual.id, nextManualData);
  };

  const handleNoteChange = (text) => {
    const nextNotes = { ...(manualData.notes || {}) };
    if (text.trim() === '') {
      delete nextNotes[pageNum];
    } else {
      nextNotes[pageNum] = text;
    }
    onUpdateManualStore(manual.id, {
      pages: { ...(manualData.pages || {}) },
      notes: nextNotes,
    });
  };

  const getNormalizedPoint = (e) => {
    const canvas = annotCanvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    return { x, y };
  };

  const handlePointerDown = (e) => {
    if (!annotCanvasRef.current) return;
    e.preventDefault();
    annotCanvasRef.current.setPointerCapture(e.pointerId);
    isDrawingRef.current = true;
    const pt = getNormalizedPoint(e);
    activeStrokeRef.current = {
      tool,
      color: tool === 'highlighter' ? highlightColor : penColor,
      size: tool === 'highlighter' ? 0.022 : tool === 'eraser' ? 0.028 : 0.0035,
      points: [pt],
    };
    drawStrokesOnCanvas(annotCanvasRef.current, [...currentStrokes, activeStrokeRef.current]);
  };

  const handlePointerMove = (e) => {
    if (!annotCanvasRef.current) return;
    const pt = getNormalizedPoint(e);
    if (showReadingGuide) {
      setGuideY(pt.y);
    }
    if (!isDrawingRef.current || !activeStrokeRef.current) return;
    e.preventDefault();

    const useStraight = (straightLine || e.shiftKey) && tool !== 'eraser';
    if (useStraight) {
      const start = activeStrokeRef.current.points[0];
      const dx = Math.abs(pt.x - start.x);
      const dy = Math.abs(pt.y - start.y);
      const snapped = dx >= dy ? { x: pt.x, y: start.y } : { x: start.x, y: pt.y };
      activeStrokeRef.current.points = [start, snapped];
      if (showReadingGuide) setGuideY(snapped.y);
    } else {
      activeStrokeRef.current.points.push(pt);
    }
    drawStrokesOnCanvas(annotCanvasRef.current, [...currentStrokes, activeStrokeRef.current]);
  };

  const handlePointerUp = () => {
    if (!isDrawingRef.current || !activeStrokeRef.current) return;
    isDrawingRef.current = false;
    const finished = activeStrokeRef.current;
    activeStrokeRef.current = null;
    commitPageStrokes([...currentStrokes, finished]);
  };

  const handleUndo = () => {
    if (currentStrokes.length === 0) return;
    commitPageStrokes(currentStrokes.slice(0, -1));
  };

  const handleClearPage = () => {
    if (currentStrokes.length === 0) return;
    commitPageStrokes([]);
  };

  const handleJumpPage = (e) => {
    e.preventDefault();
    const parsed = parseInt(pageInput, 10);
    if (!Number.isNaN(parsed) && parsed >= 1 && parsed <= numPages) {
      setPageNum(parsed);
    } else {
      setPageInput(String(pageNum));
    }
  };

  const handleExportCurrentPagePdf = () => {
    if (!window.jspdf || !pdfCanvasRef.current || !annotCanvasRef.current) return;
    const { jsPDF } = window.jspdf;
    const merged = document.createElement('canvas');
    merged.width = pdfCanvasRef.current.width;
    merged.height = pdfCanvasRef.current.height;
    const ctx = merged.getContext('2d');
    ctx.drawImage(pdfCanvasRef.current, 0, 0);
    ctx.drawImage(annotCanvasRef.current, 0, 0);

    const orientation = merged.width > merged.height ? 'l' : 'p';
    const doc = new jsPDF({
      orientation,
      unit: 'px',
      format: [merged.width, merged.height],
    });
    doc.addImage(merged.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, merged.width, merged.height);
    doc.save(`${manual.fileName.replace('.pdf', '')}_Pag_${pageNum}_Anotada.pdf`);
  };

  const handleExportAnnotatedPagesPdf = async () => {
    if (!window.jspdf || !pdfDoc) return;
    const { jsPDF } = window.jspdf;
    const annotatedPageNums = Object.keys(manualData.pages || {})
      .filter((p) => (manualData.pages[p] || []).length > 0)
      .map((p) => Number(p))
      .sort((a, b) => a - b);

    const targetPages =
      annotatedPageNums.length > 0
        ? annotatedPageNums
        : Array.from({ length: Math.min(numPages, 25) }, (_, i) => i + 1);

    setExportProgress(`Generant PDF anotat (0/${targetPages.length})...`);
    try {
      let doc = null;
      const tempPdfCanvas = document.createElement('canvas');
      const tempAnnotCanvas = document.createElement('canvas');
      const mergedCanvas = document.createElement('canvas');

      for (let i = 0; i < targetPages.length; i++) {
        const p = targetPages[i];
        setExportProgress(`Generant PDF anotat (${i + 1}/${targetPages.length})...`);
        const page = await pdfDoc.getPage(p);
        const viewport = page.getViewport({ scale: 1.5, rotation: ((page.rotate || 0) + rotation) % 360 });
        tempPdfCanvas.width = Math.floor(viewport.width);
        tempPdfCanvas.height = Math.floor(viewport.height);
        tempAnnotCanvas.width = tempPdfCanvas.width;
        tempAnnotCanvas.height = tempPdfCanvas.height;
        mergedCanvas.width = tempPdfCanvas.width;
        mergedCanvas.height = tempPdfCanvas.height;

        await page.render({ canvasContext: tempPdfCanvas.getContext('2d'), viewport }).promise;
        drawStrokesOnCanvas(tempAnnotCanvas, (manualData.pages && manualData.pages[p]) || []);

        const mCtx = mergedCanvas.getContext('2d');
        mCtx.drawImage(tempPdfCanvas, 0, 0);
        mCtx.drawImage(tempAnnotCanvas, 0, 0);

        const orientation = mergedCanvas.width > mergedCanvas.height ? 'l' : 'p';
        if (!doc) {
          doc = new jsPDF({
            orientation,
            unit: 'px',
            format: [mergedCanvas.width, mergedCanvas.height],
          });
        } else {
          doc.addPage([mergedCanvas.width, mergedCanvas.height], orientation);
        }
        doc.addImage(
          mergedCanvas.toDataURL('image/jpeg', 0.9),
          'JPEG',
          0,
          0,
          mergedCanvas.width,
          mergedCanvas.height
        );
      }

      if (doc) {
        doc.save(`${manual.fileName.replace('.pdf', '')}_Anotat.pdf`);
      }
    } catch (err) {
      console.error('Error exportant PDF anotat:', err);
    } finally {
      setExportProgress('');
    }
  };

  const annotatedPagesCount = Object.keys(manualData.pages || {}).filter(
    (p) => (manualData.pages[p] || []).length > 0
  ).length;
  const notesCount = Object.keys(manualData.notes || {}).length;

  return (
    <div className="space-y-4">
      {/* Capçalera de retorn i accions */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Biblioteca</span>
          </button>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300">
                {manual.code}
              </span>
              {(annotatedPagesCount > 0 || notesCount > 0) && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 className="w-3 h-3" />
                  Desat automàticament ({annotatedPagesCount} pàg. subratllades, {notesCount} notes)
                </span>
              )}
            </div>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white truncate mt-0.5">
              {manual.title}
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {manual.topicNumber && onOpenTopicSummary && (
            <button
              onClick={() => onOpenTopicSummary(manual.topicNumber)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-2 text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100"
            >
              <BookOpen className="w-4 h-4" />
              <span>Resum del Tema</span>
            </button>
          )}
          <a
            href={manual.url}
            download={manual.fileName}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Download className="w-4 h-4" />
            <span>Original</span>
          </a>
          <a
            href={manual.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Pestanya nova</span>
          </a>
          {pdfDoc && (
            <>
              <button
                onClick={handleExportCurrentPagePdf}
                className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 text-xs font-bold shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Pàgina anotada</span>
              </button>
              <button
                onClick={handleExportAnnotatedPagesPdf}
                disabled={Boolean(exportProgress)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white px-3 py-2 text-xs font-bold shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>
                  {exportProgress ||
                    (annotatedPagesCount > 0
                      ? `Exportar ${annotatedPagesCount} pàg. anotades`
                      : 'Exportar PDF anotat')}
                </span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Barra d'eines d'edició i navegació */}
      {pdfDoc && (
        <div className="sticky top-2 z-20 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 shadow-md">
          {/* Eines de dibuix i subratllat */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setTool('highlighter')}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                tool === 'highlighter'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
              }`}
            >
              <Highlighter className="w-4 h-4" />
              <span>Subratllador</span>
            </button>

            {tool === 'highlighter' && (
              <div className="flex items-center gap-1 px-1">
                {HIGHLIGHT_COLORS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setHighlightColor(c.hex)}
                    title={`Subratllador ${c.label}`}
                    className={`w-5 h-5 rounded-full border-2 transition ${
                      highlightColor === c.hex
                        ? 'border-slate-900 dark:border-white scale-110'
                        : 'border-transparent opacity-80'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            )}

            <button
              onClick={() => setTool('pen')}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                tool === 'pen'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
              }`}
            >
              <Pencil className="w-4 h-4" />
              <span>Llapis</span>
            </button>

            {tool === 'pen' && (
              <div className="flex items-center gap-1 px-1">
                {PEN_COLORS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setPenColor(c.hex)}
                    title={`Llapis ${c.label}`}
                    className={`w-5 h-5 rounded-full border-2 transition ${
                      penColor === c.hex
                        ? 'border-slate-900 dark:border-white scale-110'
                        : 'border-transparent opacity-80'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            )}

            <button
              onClick={() => setTool('eraser')}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                tool === 'eraser'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
              }`}
            >
              <Eraser className="w-4 h-4" />
              <span>Goma</span>
            </button>

            <button
              onClick={() => setStraightLine((v) => !v)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-bold transition border ${
                straightLine
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300'
                  : 'bg-slate-100 dark:bg-slate-800 border-transparent text-slate-600 dark:text-slate-300'
              }`}
              title="Fa que el subratllador i el llapis dibuixin línies rectes automàticament"
            >
              <span>{straightLine ? '— Línia recta' : '〰 Traç lliure'}</span>
            </button>

            <button
              onClick={() => setShowReadingGuide((v) => !v)}
              className={`inline-flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-bold transition border ${
                showReadingGuide
                  ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-300 dark:border-sky-700 text-sky-800 dark:text-sky-300'
                  : 'bg-slate-100 dark:bg-slate-800 border-transparent text-slate-600 dark:text-slate-300'
              }`}
              title="Mostra una guia horitzontal per seguir la línia del text"
            >
              <span>Guia</span>
            </button>

            <div className="h-5 w-px bg-slate-200 dark:bg-slate-700 mx-1" />

            <button
              onClick={handleUndo}
              disabled={currentStrokes.length === 0}
              className="inline-flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-40"
              title="Desfer últim traç"
            >
              <Undo2 className="w-4 h-4" />
              <span>Desfer</span>
            </button>

            <button
              onClick={handleClearPage}
              disabled={currentStrokes.length === 0}
              className="inline-flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-rose-600 dark:text-rose-400 disabled:opacity-40"
              title="Esborrar tots els traços d'aquesta pàgina"
            >
              <Trash2 className="w-4 h-4" />
              <span>Netejar</span>
            </button>
          </div>

          {/* Navegació de pàgines i zoom */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
              <button
                onClick={handleRotate90}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200"
                title="Girar pàgina 90° (ideal per als manuals de lleis en horitzontal)"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Girar 90°</span>
              </button>
            </div>

            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
              <button
                onClick={() => {
                  setFitWidth(false);
                  setScale((s) => Math.max(0.5, Number((s - 0.15).toFixed(2))));
                }}
                className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
                title="Reduir zoom"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setFitWidth(true)}
                className={`text-xs font-bold px-2 py-1 rounded-lg transition ${
                  fitWidth
                    ? 'bg-red-600 text-white'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700'
                }`}
                title="Ajustar automàticament a l'amplada de la pantalla"
              >
                {fitWidth ? 'Ajustat' : `${Math.round(scale * 100)}%`}
              </button>
              <button
                onClick={() => {
                  setFitWidth(false);
                  setScale((s) => Math.min(2.5, Number((s + 0.15).toFixed(2))));
                }}
                className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
                title="Ampliar zoom"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleJumpPage} className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setPageNum((p) => Math.max(1, p - 1))}
                disabled={pageNum <= 1}
                className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <input
                type="text"
                value={pageInput}
                onChange={(e) => setPageInput(e.target.value)}
                className="w-12 text-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-1 text-xs font-bold text-slate-900 dark:text-white"
              />
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                / {numPages}
              </span>
              <button
                type="button"
                onClick={() => setPageNum((p) => Math.min(numPages, p + 1))}
                disabled={pageNum >= numPages}
                className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 disabled:opacity-40"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>

            <button
              onClick={() => setShowNotesPanel((v) => !v)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold border ${
                showNotesPanel
                  ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              Notes pàg. {pageNum}
            </button>
          </div>
        </div>
      )}

      {/* Subratllat automàtic en groc des d'una justificació */}
      {pdfDoc && activeSearchQuery && (
        <div className="rounded-2xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-amber-900 dark:text-amber-200 font-bold">
            <span className="inline-block w-3 h-3 rounded-sm bg-yellow-300 border border-amber-500" />
            <span>Subratllat en groc al manual: «{activeSearchQuery}»</span>
            {matchedPages.length > 0 && (
              <span className="flex items-center gap-1">
                {matchedPages.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => {
                      setPageNum(p);
                      setPageInput(String(p));
                    }}
                    className={`px-2 py-0.5 rounded-lg font-extrabold ${
                      p === pageNum
                        ? 'bg-amber-500 text-white'
                        : 'bg-white/80 dark:bg-slate-800 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700'
                    }`}
                  >
                    Pàg. {p}
                  </button>
                ))}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => {
              setActiveSearchQuery('');
              setMatchedPages([]);
            }}
            className="text-[11px] font-bold text-amber-800 dark:text-amber-300 underline hover:opacity-80"
          >
            Treure subratllat
          </button>
        </div>
      )}

      {/* Notes personals de la pàgina */}
      {pdfDoc && showNotesPanel && (
        <div className="rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/20 p-3.5">
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-indigo-800 dark:text-indigo-300">
              Notes personals · Pàgina {pageNum} (desat automàtic al navegador)
            </label>
            <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">
              {currentNote.length} caràcters
            </span>
          </div>
          <textarea
            rows={2}
            value={currentNote}
            onChange={(e) => handleNoteChange(e.target.value)}
            placeholder="Escriu aquí apunts, regles mnemotècniques o dubtes d'aquesta pàgina..."
            className="w-full rounded-xl border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      )}

      {/* Àrea del Canvas PDF + Overlay de Subratllat */}
      {loadingPdf ? (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center">
          <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
            Carregant manual oficial...
          </p>
        </div>
      ) : pdfError ? (
        <div className="space-y-4">
          <div className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/30 p-4 text-sm text-amber-900 dark:text-amber-200">
            {pdfError}
          </div>
          <iframe
            src={manual.url}
            title={manual.title}
            className="w-full h-[75vh] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white"
          />
        </div>
      ) : (
        <div
          ref={viewerContainerRef}
          className="overflow-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-200/70 dark:bg-slate-950 p-3"
        >
          <div
            className="relative mx-auto shadow-xl bg-white"
            style={
              renderDims.width
                ? { width: `${renderDims.width}px`, height: `${renderDims.height}px` }
                : undefined
            }
          >
            <canvas
              ref={pdfCanvasRef}
              className="block w-full h-full"
            />
            {showReadingGuide && guideY !== null && (
              <div
                style={{ top: `${guideY * 100}%` }}
                className="pointer-events-none absolute left-0 right-0 border-t-2 border-dashed border-sky-500/60"
              />
            )}
            <canvas
              ref={annotCanvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onPointerLeave={() => setGuideY(null)}
              style={{ touchAction: 'none' }}
              className="absolute inset-0 w-full h-full cursor-crosshair"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function ManualsView({
  initialManualTopicNumber = null,
  cloudAnnotations = {},
  onUpdateCloudAnnotation = null,
  onOpenTopicSummary = null
}) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [savedStore, setSavedStore] = useState(() => ({
    ...loadSavedAnnotations(),
    ...(cloudAnnotations || {})
  }));
  const resolvedTopicNum =
    typeof initialManualTopicNumber === 'object' && initialManualTopicNumber !== null
      ? initialManualTopicNumber.topicNumber
      : initialManualTopicNumber;
  const resolvedSearchQuery =
    typeof initialManualTopicNumber === 'object' && initialManualTopicNumber !== null
      ? initialManualTopicNumber.searchQuery || ''
      : '';

  const [selectedManual, setSelectedManual] = useState(() => {
    if (resolvedTopicNum) {
      return OFFICIAL_MANUALS.find((m) => m.topicNumber === resolvedTopicNum) || null;
    }
    return null;
  });

  useEffect(() => {
    if (cloudAnnotations && Object.keys(cloudAnnotations).length > 0) {
      setSavedStore((prev) => {
        const merged = { ...prev, ...cloudAnnotations };
        saveAnnotations(merged);
        return merged;
      });
    }
  }, [cloudAnnotations]);

  useEffect(() => {
    if (resolvedTopicNum) {
      const match = OFFICIAL_MANUALS.find((m) => m.topicNumber === resolvedTopicNum);
      if (match) setSelectedManual(match);
    }
  }, [resolvedTopicNum, resolvedSearchQuery]);

  const handleUpdateManualStore = (manualId, nextData) => {
    setSavedStore((prev) => {
      const updated = { ...prev, [manualId]: nextData };
      saveAnnotations(updated);
      return updated;
    });
    if (onUpdateCloudAnnotation) {
      onUpdateCloudAnnotation(manualId, nextData);
    }
  };

  if (selectedManual) {
    return (
      <ManualPdfEditor
        manual={selectedManual}
        savedStore={savedStore}
        onUpdateManualStore={handleUpdateManualStore}
        onBack={() => setSelectedManual(null)}
        onOpenTopicSummary={onOpenTopicSummary}
        initialSearchQuery={resolvedSearchQuery}
      />
    );
  }

  const filteredManuals = OFFICIAL_MANUALS.filter((m) => {
    if (category !== 'all' && m.category !== category) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.code.toLowerCase().includes(q) ||
      m.fileName.toLowerCase().includes(q) ||
      (m.topicNumber && `tema ${m.topicNumber}`.includes(q)) ||
      (m.topicNumber && `t${m.topicNumber}`.includes(q))
    );
  });

  return (
    <div className="space-y-6">
      {/* Capçalera */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white via-slate-50 to-red-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-red-950/20 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 dark:bg-red-950/60 px-3 py-1 text-xs font-extrabold text-red-700 dark:text-red-300">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Biblioteca Oficial · 34 PDFs</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Manuals Oficials (PDF)
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              Visualitza, escriu notes per pàgina i descarrega qualsevol dels 34 manuals oficials. Tot el que anotis queda desat automàticament i ho pots exportar en PDF.
            </p>
          </div>
        </div>

        {/* Cercador i filtres */}
        <div className="mt-5 flex flex-col gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cerca per tema (ex: Tema 25), codi (MAN-INVE-000) o paraula clau..."
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${
                  category === cat.id
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Graella de manuals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredManuals.map((manual) => {
          const entry = savedStore[manual.id];
          const annotatedCount = entry?.pages
            ? Object.keys(entry.pages).filter((p) => (entry.pages[p] || []).length > 0).length
            : 0;
          const notesCount = entry?.notes ? Object.keys(entry.notes).length : 0;

          return (
            <div
              key={manual.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm hover:border-red-300 dark:hover:border-red-800 transition"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                      {manual.topicNumber ? `Tema ${manual.topicNumber}` : 'Guia'}
                    </span>
                    <span className="text-[11px] font-bold text-red-600 dark:text-red-400">
                      {manual.code}
                    </span>
                  </div>
                  {(annotatedCount > 0 || notesCount > 0) && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                      <CheckCircle2 className="w-3 h-3" />
                      {annotatedCount > 0 ? `${annotatedCount} pàg.` : ''}
                      {notesCount > 0 ? ` ${notesCount} notes` : ''}
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                  {manual.title}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 truncate">
                  {manual.fileName}
                </p>
                {manual.boeLinks && manual.boeLinks.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {manual.boeLinks.map((lnk) => (
                      <a
                        key={lnk.url}
                        href={lnk.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 px-2 py-0.5 text-[10px] font-bold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100"
                      >
                        <ExternalLink className="w-2.5 h-2.5" />
                        <span>{lnk.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedManual(manual)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white px-3 py-2 text-xs font-bold shadow-sm transition"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Obrir Online</span>
                </button>
                {manual.topicNumber && onOpenTopicSummary && (
                  <button
                    onClick={() => onOpenTopicSummary(manual.topicNumber)}
                    className="inline-flex items-center justify-center gap-1 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 text-indigo-700 dark:text-indigo-300 px-3 py-2 text-xs font-bold transition"
                    title="Anar als apartats resumits, esquema i test d'aquest tema"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Resum</span>
                  </button>
                )}
                <a
                  href={manual.url}
                  download={manual.fileName}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-2 text-xs font-bold transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {filteredManuals.length === 0 && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
            No s&apos;ha trobat cap manual amb aquest criteri.
          </p>
        </div>
      )}
    </div>
  );
}
