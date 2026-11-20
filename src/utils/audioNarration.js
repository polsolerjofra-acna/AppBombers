// Utilitats per convertir els resums de cada tema en pistes d'àudio narrades (màx. 10 minuts per pista)

const WORDS_PER_MINUTE = 145;
const MAX_MINUTES_PER_TRACK = 10;
const MAX_WORDS_PER_TRACK = WORDS_PER_MINUTE * MAX_MINUTES_PER_TRACK; // ~1.450 paraules

function cleanForSpeech(raw = '') {
  return String(raw)
    .replace(/→/g, ', passa a ')
    .replace(/≥/g, ' major o igual a ')
    .replace(/≤/g, ' menor o igual a ')
    .replace(/°C/g, ' graus centígrads')
    .replace(/µm/g, ' micròmetres')
    .replace(/O₂/g, 'oxigen')
    .replace(/CO₂/g, 'diòxid de carboni')
    .replace(/H₂O/g, 'aigua')
    .replace(/H₂/g, 'hidrogen')
    .replace(/N₂/g, 'nitrogen')
    .replace(/[•▪◦📌🗂️🎯⚠️✓✗]/g, ' ')
    .replace(/\s*\|\s*/g, '. ')
    .replace(/\n+/g, '. ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function extractPageSegments(page) {
  const segments = [];
  if (page.title) {
    segments.push(cleanForSpeech(page.title) + '.');
  }

  for (const b of page.blocks || []) {
    if (b.type === 'text') {
      if (b.heading) segments.push(cleanForSpeech(b.heading) + '.');
      for (const p of b.paragraphs || []) {
        const txt = cleanForSpeech(p);
        if (txt) segments.push(txt);
      }
    } else if (b.type === 'easy') {
      if (b.title) segments.push(cleanForSpeech(b.title) + '.');
      if (b.explanation) segments.push(cleanForSpeech(b.explanation));
      if (b.takeaway) segments.push('Idea clau: ' + cleanForSpeech(b.takeaway));
    } else if (b.type === 'table') {
      if (b.title) segments.push(cleanForSpeech(b.title) + '.');
      const headers = b.headers || [];
      for (const row of b.rows || []) {
        const rowParts = row
          .map((cell, idx) => {
            const h = headers[idx] ? `${cleanForSpeech(headers[idx])}: ` : '';
            return `${h}${cleanForSpeech(cell)}`;
          })
          .filter(Boolean);
        if (rowParts.length > 0) {
          segments.push(rowParts.join('. ') + '.');
        }
      }
      if (b.footnote) segments.push(cleanForSpeech(b.footnote));
    } else if (b.type === 'mnemonic') {
      if (b.title) segments.push(cleanForSpeech(b.title) + '.');
      if (b.trick) segments.push(cleanForSpeech(b.trick));
      if (b.example) segments.push('Exemple: ' + cleanForSpeech(b.example));
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
    `Tema ${topic.number}: ${cleanForSpeech(topic.title)}. Resum d'àudio per estudiar.`
  ];

  // Si hi ha punts clau al Radar d'Examen, els afegim al principi del resum
  if (Array.isArray(topic.importance?.keyPoints) && topic.importance.keyPoints.length > 0) {
    allSegments.push('Punts clau principals.');
    topic.importance.keyPoints.forEach((kp) => {
      const cleaned = cleanForSpeech(kp);
      if (cleaned) allSegments.push(cleaned + '.');
    });
  }

  sourcePages.forEach((page) => {
    allSegments.push(...extractPageSegments(page));
  });

  // Trosseja en pistes de màxim 10 minuts (~1.450 paraules)
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
        : `Tema ${topic.number} · Resum complet`
  }));
}

export function pickBestCatalanVoice(voices = []) {
  if (!voices || voices.length === 0) return null;
  const caVoices = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith('ca'));
  if (caVoices.length > 0) {
    return (
      caVoices.find((v) => /siri|enhanced|premium|montserrat|jordi/i.test(v.name)) ||
      caVoices[0]
    );
  }
  const esVoices = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith('es'));
  return esVoices[0] || voices[0];
}
