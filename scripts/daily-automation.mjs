import admin from 'firebase-admin';
import fs from 'node:fs';
import path from 'node:path';

const APP_BASE_URL = process.env.APP_BASE_URL || 'https://polsolerjofra-acna.github.io/AppBombers/';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const SERVICE_ACCOUNT_RAW = process.env.FIREBASE_SERVICE_ACCOUNT || '';

if (!SERVICE_ACCOUNT_RAW) {
  console.log('FIREBASE_SERVICE_ACCOUNT no configurat. Sortint sense errors.');
  process.exit(0);
}

const serviceAccount = JSON.parse(SERVICE_ACCOUNT_RAW);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Data actual en zona horària Europe/Madrid (YYYY-MM-DD)
function getMadridTodayISO() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(new Date());
  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

function isMadridFriday() {
  const dayName = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Madrid',
    weekday: 'short'
  }).format(new Date());
  return dayName === 'Fri';
}

// Carrega la llista bàsica de temes (id, number, title) dels fitxers de src/data/topics/
function loadTopicCatalog() {
  const topicsDir = path.resolve('src/data/topics');
  const files = fs.readdirSync(topicsDir).filter((f) => f.endsWith('.js'));
  const catalog = [];
  for (const file of files) {
    if (file === 'tema1_hidraulica.js' || file === 'tema2_gasos.js') continue;
    const content = fs.readFileSync(path.join(topicsDir, file), 'utf8');
    const idMatch = content.match(/id:\s*'([^']+)'/);
    const numMatch = content.match(/number:\s*(\d+)/);
    const titleMatch = content.match(/title:\s*'([^']+)'/);
    if (idMatch && numMatch && titleMatch) {
      catalog.push({
        id: idMatch[1],
        number: Number(numMatch[1]),
        title: titleMatch[1]
      });
    }
  }
  return catalog.sort((a, b) => a.number - b.number);
}

async function sendDailyEmails(todayISO, catalog) {
  if (!RESEND_API_KEY) {
    console.log('RESEND_API_KEY no configurada; s\'omet l\'enviament de correus.');
    return;
  }

  const profilesSnap = await db.collection('studyProfiles').get();
  const catalogMap = new Map(catalog.map((t) => [t.id, t]));
  const friday = isMadridFriday();

  for (const profDoc of profilesSnap.docs) {
    const uid = profDoc.id;
    const prof = profDoc.data();
    const privSnap = await db.collection('studyProfiles').doc(uid).collection('private').doc('progress').get();
    if (!privSnap.exists) continue;
    const priv = privSnap.data() || {};

    if (priv.dailyEmailEnabled === false || !priv.email) continue;

    const spaced = priv.spacedRepetition || {};
    const plan = (priv.studyPlan || {})[todayISO] || [];
    const rounds = priv.topicRounds || {};

    const dueIds = Object.entries(spaced)
      .filter(([, sp]) => sp?.nextReviewAt && sp.nextReviewAt <= todayISO)
      .map(([id]) => id);

    const allTodayIds = Array.from(new Set([...dueIds, ...plan]));
    if (allTodayIds.length === 0 && !friday) continue;

    const itemsHtml = allTodayIds
      .map((id) => {
        const t = catalogMap.get(id);
        if (!t) return '';
        const r = rounds[id] || 0;
        const vista = r >= 1 ? 'summary' : 'manual';
        const modeText =
          r >= 1
            ? `Volta ${r + 1} (prioritat: resums i preguntes noves)`
            : '1a Volta (llegir manual complet)';
        const link = `${APP_BASE_URL}?tema=${encodeURIComponent(id)}&vista=${vista}`;
        return `<li style="margin-bottom:8px;">
          <strong>Tema ${t.number}: ${t.title}</strong> — ${modeText}<br/>
          <a href="${link}" style="color:#dc2626;font-weight:bold;">Obrir tema directament →</a>
        </li>`;
      })
      .join('');

    const fridayHtml = friday
      ? `<p style="background:#fef3c7;padding:12px;border-radius:8px;">
           <strong>Divendres de Càlculs!</strong> Avui toca la sessió setmanal de 10 problemes aleatoris amb pissarra:
           <a href="${APP_BASE_URL}?vista=calculs" style="color:#b45309;font-weight:bold;">Anar a Càlculs →</a>
         </p>`
      : '';

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto;color:#0f172a;">
        <h2 style="color:#dc2626;">Pla d'estudi i repàs d'avui (${todayISO})</h2>
        <p>Hola ${prof.displayName || 'opositor/a'}, aquí tens el que toca repassar avui segons la teva corba de l'oblit:</p>
        <ul>${itemsHtml || '<li>Cap repàs pendent per a avui.</li>'}</ul>
        ${fridayHtml}
        <p style="margin-top:16px;">
          <a href="${APP_BASE_URL}?vista=calendari" style="background:#dc2626;color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:bold;">
            Obrir el meu Calendari d'Estudi
          </a>
        </p>
      </div>
    `;

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'AppBombers <onboarding@resend.dev>',
        to: [priv.email],
        subject: `AppBombers · Repàs d'avui (${todayISO})`,
        html
      })
    });
    console.log(`Correu enviat a ${priv.email}`);
  }
}

async function generateDailyQuestions(todayISO, catalog) {
  if (!GEMINI_API_KEY) {
    console.log('GEMINI_API_KEY no configurada; s\'omet la generació automàtica de preguntes.');
    return;
  }

  for (const t of catalog) {
    const prompt = `Genera exactament 5 preguntes tipus test d'oposició de Bombers de la Generalitat en català sobre el "Tema ${t.number}: ${t.title}".
Retorna NOMÉS un JSON array vàlid amb 5 objectes amb aquest esquema exacte:
[{"difficulty":"Fàcil|Mitjà|Difícil","question":"...","options":["A","B","C","D"],"correctIndex":0,"explanation":"..."}]`;

    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: 'application/json' }
        })
      }
    );

    if (!resp.ok) {
      console.error(`Error Gemini per ${t.id}:`, resp.status);
      continue;
    }

    const data = await resp.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
    let parsed = [];
    try {
      parsed = JSON.parse(rawText);
    } catch {
      continue;
    }

    const batch = db.batch();
    parsed.slice(0, 5).forEach((q, idx) => {
      if (!q?.question || !Array.isArray(q.options) || q.options.length !== 4) return;
      const docRef = db
        .collection('dailyQuestions')
        .doc(t.id)
        .collection('questions')
        .doc(`${todayISO}-${idx + 1}`);
      batch.set(docRef, {
        difficulty: q.difficulty || 'Mitjà',
        question: q.question,
        options: q.options,
        correctIndex: Number(q.correctIndex) || 0,
        explanation: q.explanation || '',
        createdDate: todayISO,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
    });
    await batch.commit();
    console.log(`5 preguntes noves desades per a ${t.id}`);
  }
}

async function main() {
  const todayISO = getMadridTodayISO();
  const catalog = loadTopicCatalog();
  console.log(`Executant tasques diàries per a ${todayISO} (${catalog.length} temes)...`);
  await sendDailyEmails(todayISO, catalog);
  await generateDailyQuestions(todayISO, catalog);
  console.log('Tasques diàries finalitzades.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
