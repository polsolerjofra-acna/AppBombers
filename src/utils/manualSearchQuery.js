const STOPWORDS = new Set([
  'que', 'amb', 'per', 'del', 'dels', 'les', 'els', 'una', 'uns', 'unes',
  'com', 'entre', 'sobre', 'sota', 'dins', 'fora', 'quan', 'quin', 'quina',
  'quins', 'quines', 'aquest', 'aquesta', 'aquests', 'aquestes', 'això',
  'segons', 'manual', 'oficial', 'article', 'apartat', 'punt', 'tema',
  'correcta', 'correcte', 'incorrecte', 'resposta', 'opció', 'detall',
  'decisiu', 'sempre', 'només', 'mai', 'tots', 'totes', 'cada', 'més', 'menys',
  'ser', 'són', 'està', 'estan', 'pot', 'poden', 'cal', 'fent', 'fer',
  'haver', 'tenir', 'tenen', 'doncs', 'però', 'sinó', 'perquè', 'mentre'
]);

export function extractManualSearchQuery(q) {
  if (!q) return '';
  if (q.manualQuery) return q.manualQuery;
  const correctOpt =
    Array.isArray(q.options) && typeof q.correctIndex === 'number'
      ? q.options[q.correctIndex] || ''
      : '';
  const raw = `${correctOpt} ${q.explanation || ''}`.replace(/[«»"'()[\].,:;!?|·→]/g, ' ');
  const tokens = raw
    .split(/\s+/)
    .map((w) => w.trim())
    .filter((w) => w.length >= 4 && !STOPWORDS.has(w.toLowerCase()));

  const unique = [];
  const seen = new Set();
  for (const t of tokens) {
    const low = t.toLowerCase();
    if (!seen.has(low)) {
      seen.add(low);
      unique.push(t);
    }
    if (unique.length >= 4) break;
  }
  return unique.join(' ');
}
