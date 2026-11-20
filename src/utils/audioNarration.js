// Utilitats per convertir esquemes, resums i paranys en una lliçó d'àudio en mode ensenyament (màx. 10 minuts per pista)
import { TOPIC_OUTLINES } from '../data/topicOutlines';

const WORDS_PER_MINUTE = 140;
const MAX_MINUTES_PER_TRACK = 10;
const MAX_WORDS_PER_TRACK = WORDS_PER_MINUTE * MAX_MINUTES_PER_TRACK; // ~1.400 paraules

const ORDINALS = [
  'En primer lloc',
  'En segon lloc',
  'En tercer lloc',
  'En quart lloc',
  'En cinquè lloc',
  'En sisè lloc'
];

function cleanForSpeech(raw = '') {
  return String(raw)
    .replace(/→/g, ', que passa a ')
    .replace(/≥/g, ' major o igual a ')
    .replace(/≤/g, ' menor o igual a ')
    .replace(/°C/g, ' graus centígrads')
    .replace(/µm/g, ' micròmetres')
    .replace(/\barts\./gi, 'articles')
    .replace(/\bart\./gi, 'article')
    .replace(/\bcap\./gi, 'capítol')
    .replace(/\bpàg\./gi, 'pàgina')
    .replace(/\bmàx\./gi, 'màxim')
    .replace(/\bmín\./gi, 'mínim')
    .replace(/\bex\./gi, 'exemple')
    .replace(/\bO₂\b/g, 'oxigen')
    .replace(/\bCO₂\b/g, 'diòxid de carboni')
    .replace(/\bH₂O\b/g, 'aigua')
    .replace(/\bH₂\b/g, 'hidrogen')
    .replace(/\bN₂\b/g, 'nitrogen')
    .replace(/[•▪◦📌🗂️🎯⚠️✓✗]/g, ' ')
    .replace(/\s*·\s*/g, ', ')
    .replace(/\s*\|\s*/g, '. ')
    .replace(/\n+/g, '. ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function buildSchemaLessonSegments(topicId) {
  const rawOutline = TOPIC_OUTLINES[topicId];
  if (!rawOutline) return [];
  const schemas = Array.isArray(rawOutline)
    ? rawOutline
    : rawOutline.schemas
    ? rawOutline.schemas
    : [rawOutline];

  const segments = [];
  schemas.forEach((sch, sIdx) => {
    const schTitle = cleanForSpeech(sch.title || sch.shortLabel || `Esquema ${sIdx + 1}`);
    segments.push(
      `Estructura lògica ${schemas.length > 1 ? `del bloc ${sIdx + 1}` : 'del tema'}: ${schTitle}.`
    );
    if (sch.overview) {
      segments.push(`Visió general per situar-nos: ${cleanForSpeech(sch.overview)}`);
    }

    const branches = sch.branches || [];
    branches.forEach((br, bIdx) => {
      const ord = ORDINALS[bIdx] || `Al punt ${bIdx + 1}`;
      segments.push(`${ord}, veiem ${cleanForSpeech(br.title)}.`);

      (br.items || []).forEach((item) => {
        const label = cleanForSpeech(item.label || '');
        const children = (item.children || []).map((c) => cleanForSpeech(c)).filter(Boolean);
        if (label && children.length > 0) {
          segments.push(
            `Dins de ${label}, fixa't en el següent: ${children.join('. A més, ')}.`
          );
        } else if (label) {
          segments.push(`Punt important: ${label}.`);
        } else if (children.length > 0) {
          segments.push(children.join('. ') + '.');
        }
      });
    });
  });

  return segments;
}

function extractSummaryLessonSegments(page) {
  const segments = [];
  if (page.title) {
    segments.push(`Ara repassem ${cleanForSpeech(page.title)}.`);
  }

  for (const b of page.blocks || []) {
    if (b.type === 'text') {
      if (b.heading) segments.push(`Anem a veure: ${cleanForSpeech(b.heading)}.`);
      for (const p of b.paragraphs || []) {
        const txt = cleanForSpeech(p);
        if (txt) segments.push(txt);
      }
    } else if (b.type === 'easy') {
      if (b.title) segments.push(`Per entendre-ho fàcilment, ${cleanForSpeech(b.title)}.`);
      if (b.explanation) segments.push(cleanForSpeech(b.explanation));
      if (b.takeaway) segments.push(`Recorda la idea clau: ${cleanForSpeech(b.takeaway)}`);
    } else if (b.type === 'table') {
      if (b.title) segments.push(`Resum comparatiu de ${cleanForSpeech(b.title)}.`);
      for (const row of b.rows || []) {
        const cleanCells = row.map((c) => cleanForSpeech(c)).filter(Boolean);
        if (cleanCells.length >= 2) {
          segments.push(`${cleanCells[0]}: ${cleanCells.slice(1).join('. ')}.`);
        } else if (cleanCells.length === 1) {
          segments.push(`${cleanCells[0]}.`);
        }
      }
      if (b.footnote) segments.push(`Nota important: ${cleanForSpeech(b.footnote)}`);
    } else if (b.type === 'mnemonic') {
      if (b.title) segments.push(`Truc de memòria: ${cleanForSpeech(b.title)}.`);
      if (b.trick) segments.push(cleanForSpeech(b.trick));
      if (b.example) segments.push(`Per exemple: ${cleanForSpeech(b.example)}`);
    }
  }

  return segments.filter((s) => s.length > 2);
}

export function buildAudioTracksForTopic(topic) {
  if (!topic) return [];
  const pages = topic.pages || [];
  const summaryPages = pages.filter((p) => p.isSummary || p.isFormulaSheet);
  const sourcePages = summaryPages.length > 0 ? summaryPages : pages.slice(-2);

  const allSegments = [
    `Hola! Comencem la classe d'àudio del Tema ${topic.number}: ${cleanForSpeech(topic.title)}. Et guiaré amb ordre i lògica perquè ho entenguis tot sense mirar la pantalla.`
  ];

  // 1. Esquemes interpretats amb ordre i jerarquia
  const schemaSegments = buildSchemaLessonSegments(topic.id);
  if (schemaSegments.length > 0) {
    allSegments.push(...schemaSegments);
  }

  // 2. Punts clau d'examen
  const keyPoints = topic.importance?.keyPoints || [];
  if (keyPoints.length > 0) {
    allSegments.push(`Ara resumim els ${keyPoints.length} punts clau que més pregunten a l'examen.`);
    keyPoints.forEach((kp, idx) => {
      const cleaned = cleanForSpeech(kp);
      if (cleaned) allSegments.push(`Punt clau ${idx + 1}: ${cleaned}.`);
    });
  }

  // 3. Paranys típics del tribunal amb èmfasi
  const traps = topic.importance?.traps || topic.importance?.commonTraps || [];
  if (traps.length > 0) {
    allSegments.push('Atenció màxima! Ara veiem els paranys típics del tribunal perquè no hi caiguis mai.');
    traps.forEach((tr) => {
      const cleaned = cleanForSpeech(tr);
      if (cleaned) allSegments.push(`Vigila amb aquest parany: ${cleaned}.`);
    });
  }

  // 4. Resums finals i fórmules explicats
  sourcePages.forEach((page) => {
    allSegments.push(...extractSummaryLessonSegments(page));
  });

  allSegments.push(
    `I fins aquí el repàs del Tema ${topic.number}. Quan puguis, fes unes preguntes de test per fixar-ho del tot!`
  );

  // Trosseja en pistes de màxim 10 minuts (~1.400 paraules)
  const tracks = [];
  let currentSegments = [];
  let currentWords = 0;

  for (const seg of allSegments) {
    const segWords = seg.split(/\s+/).filter(Boolean).length;
    if (currentSegments.length > 0 && currentWords + segWords > MAX_WORDS_PER_TRACK) {
      tracks.push({
        segments: currentSegments,
        wordCount: currentWords,
        estMinutes: Math.max(1, Math.min(MAX_MINUTES_PER_TRACK, Math.round(currentWords / WORDS_PER_MINUTE)))
      });
      currentSegments = [seg];
      currentWords = segWords;
    } else {
      currentSegments.push(seg);
      currentWords += segWords;
    }
  }

  if (currentSegments.length > 0) {
    tracks.push({
      segments: currentSegments,
      wordCount: currentWords,
      estMinutes: Math.max(1, Math.min(MAX_MINUTES_PER_TRACK, Math.round(currentWords / WORDS_PER_MINUTE)))
    });
  }

  return tracks.map((tr, idx) => ({
    ...tr,
    trackNumber: idx + 1,
    totalTracks: tracks.length,
    title:
      tracks.length > 1
        ? `Tema ${topic.number} · Pista ${idx + 1}/${tracks.length}`
        : `Tema ${topic.number} · Classe d'àudio`
  }));
}

export function pickBestCatalanVoice(voices = []) {
  if (!voices || voices.length === 0) return null;
  const caVoices = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith('ca'));
  if (caVoices.length > 0) {
    return (
      caVoices.find((v) => /siri|enhanced|millorada|premium|neural|natural/i.test(v.name)) ||
      caVoices.find((v) => /montserrat|jordi/i.test(v.name) && !/compact/i.test(v.name)) ||
      caVoices.find((v) => !/compact/i.test(v.name)) ||
      caVoices[0]
    );
  }
  const esVoices = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith('es'));
  return (
    esVoices.find((v) => /siri|enhanced|neural|natural|monica|jorge/i.test(v.name)) ||
    esVoices[0] ||
    voices[0]
  );
}
