import admin from 'firebase-admin';
import nodemailer from 'nodemailer';
import fs from 'node:fs';
import path from 'node:path';

const APP_BASE_URL = process.env.APP_BASE_URL || 'https://appbombers-d22ed.web.app/';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const FALLBACK_EMAIL = process.env.FALLBACK_EMAIL || SMTP_USER || '';
const SERVICE_ACCOUNT_RAW = process.env.FIREBASE_SERVICE_ACCOUNT || '';

let db = null;
if (!SERVICE_ACCOUNT_RAW) {
  console.warn('::warning::FIREBASE_SERVICE_ACCOUNT no configurat. S\'ometen les lectures/escriptures de Firestore.');
} else {
  const serviceAccount = JSON.parse(SERVICE_ACCOUNT_RAW);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  db = admin.firestore();
}

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

async function getOrGenerateDailyCurrentAffairsQuestion(todayISO, catalog) {
  const docRef = db ? db.collection('dailyQuestions').doc('actualitat').collection('questions').doc(todayISO) : null;
  if (docRef) {
    try {
      const snap = await docRef.get();
      if (snap.exists) {
        return snap.data();
      }
    } catch (err) {
      console.warn('No s\'ha pogut llegir la pregunta del dia a Firestore:', err?.message || err);
    }
  }

  if (GEMINI_API_KEY) {
    const topicHint = catalog.map((t) => `Tema ${t.number}: ${t.title}`).join('; ');
    const prompt = `Genera EXACTAMENT 1 pregunta nova tipus test (4 opcions) d'oposició de Bombers de la Generalitat en català per a la data ${todayISO}.
La pregunta ha de connectar l'actualitat institucional, de serveis d'emergència, protecció civil, normativa vigent o polítiques públiques a Catalunya/UE amb algun dels temes del temari oficial (${topicHint}).
Retorna NOMÉS un JSON objecte vàlid amb aquest esquema exacte:
{"tag":"Actualitat · ...","topicId":"tema-XX","topicLabel":"Tema X · ...","context":"Breu context d'actualitat (1 frase)","question":"...","options":["A","B","C","D"],"correctIndex":0,"explanation":"Explicació clara de la resposta correcta"}`;

    try {
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
      if (resp.ok) {
        const data = await resp.json();
        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
        const q = JSON.parse(rawText);
        if (q?.question && Array.isArray(q.options) && q.options.length === 4) {
          const payload = {
            id: `act-${todayISO}`,
            date: todayISO,
            tag: q.tag || 'Actualitat · Servei i Temari',
            topicId: q.topicId || 'tema-14',
            topicLabel: q.topicLabel || 'Temari SGO 2026',
            context: q.context || '',
            question: q.question,
            options: q.options,
            correctIndex: Number(q.correctIndex) || 0,
            explanation: q.explanation || '',
            createdDate: todayISO,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
          };
          if (docRef) {
            await docRef.set(payload);
            console.log(`Pregunta del dia generada i desada per a ${todayISO}`);
          }
          return payload;
        }
      }
    } catch (err) {
      console.warn('Error generant pregunta del dia amb Gemini:', err?.message || err);
    }
  }

  return {
    id: `act-${todayISO}`,
    date: todayISO,
    tag: 'Actualitat · Organització DGPEIS 2026',
    topicId: 'tema-14',
    topicLabel: 'Tema 14 · DGPEIS i Bombers',
    context: 'El Decret 16/2026 reestructura la DGPEIS per reforçar la cobertura territorial i jurídica del servei.',
    question: 'Quina nova Regió d\'Emergències i quina nova Subdirecció General incorpora la DGPEIS segons el Decret 16/2026?',
    options: [
      'La Regió d\'Emergències del Pirineu (8a regió) i la Subdirecció General d\'Assumptes Jurídics.',
      'La Regió d\'Emergències de les Terres de l\'Ebre i la Subdirecció General de Protecció Civil.',
      'La Regió d\'Emergències de la Catalunya Central i la Subdirecció General de Prevenció Forestal.',
      'La Regió d\'Emergències de l\'Alt Empordà i la Subdirecció General de Logística.'
    ],
    correctIndex: 0,
    explanation: 'El Decret 16/2026 crea la 8a Regió d\'Emergències (Pirineu) i la Subdirecció General d\'Assumptes Jurídics.'
  };
}

async function deliverEmail({ to, subject, html }) {
  if (SMTP_USER && SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    });
    await transporter.sendMail({
      from: `AppBombers <${SMTP_USER}>`,
      to,
      subject,
      html
    });
    console.log(`Correu enviat via Gmail SMTP a ${to}`);
    return true;
  }
  if (RESEND_API_KEY) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'AppBombers <onboarding@resend.dev>',
        to: [to],
        subject,
        html
      })
    });
    if (!res.ok) {
      const errBody = await res.text();
      console.error(`Error enviant correu via Resend a ${to} (${res.status}):`, errBody);
      return false;
    }
    console.log(`Correu enviat via Resend a ${to}`);
    return true;
  }
  return false;
}

async function sendDailyEmails(todayISO, catalog, dailyQuestion) {
  const hasSmtp = Boolean(SMTP_USER && SMTP_PASS);
  const hasResend = Boolean(RESEND_API_KEY);
  if (!hasSmtp && !hasResend) {
    console.warn('::warning::Ni SMTP_USER/SMTP_PASS ni RESEND_API_KEY configurats; s\'omet l\'enviament de correus.');
    return;
  }

  const catalogMap = new Map(catalog.map((t) => [t.id, t]));
  const friday = isMadridFriday();
  let sentCount = 0;

  if (db) {
    const profilesSnap = await db.collection('studyProfiles').get();
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

      const dailyQHtml = dailyQuestion
        ? `<div style="margin-top:18px;padding:14px;border-radius:10px;background:#f8fafc;border:1px solid #cbd5e1;">
             <p style="margin:0 0 6px;font-size:12px;font-weight:bold;color:#dc2626;text-transform:uppercase;">
               Pregunta del Dia · ${dailyQuestion.tag || 'Actualitat i Temari'}
             </p>
             ${dailyQuestion.context ? `<p style="margin:0 0 8px;font-size:13px;color:#475569;">${dailyQuestion.context}</p>` : ''}
             <p style="margin:0 0 10px;font-size:14px;font-weight:bold;color:#0f172a;">${dailyQuestion.question}</p>
             <ol type="A" style="margin:0 0 10px;padding-left:18px;font-size:13px;color:#1e293b;">
               ${(dailyQuestion.options || []).map((opt) => `<li style="margin-bottom:4px;">${opt}</li>`).join('')}
             </ol>
             <a href="${APP_BASE_URL}" style="color:#dc2626;font-size:13px;font-weight:bold;">Respondre i veure la solució a l'app →</a>
           </div>`
        : '';

      const html = `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto;color:#0f172a;">
          <h2 style="color:#dc2626;">Pla d'estudi i repàs d'avui (${todayISO})</h2>
          <p>Hola ${prof.displayName || 'opositor/a'}, aquí tens el que toca repassar avui segons la teva corba de l'oblit:</p>
          <ul>${itemsHtml || '<li>Cap repàs pendent per a avui — aprofita per avançar temari o fer un test ràpid!</li>'}</ul>
          ${fridayHtml}
          ${dailyQHtml}
          <p style="margin-top:16px;">
            <a href="${APP_BASE_URL}?vista=calendari" style="background:#dc2626;color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:bold;">
              Obrir el meu Calendari d'Estudi
            </a>
          </p>
        </div>
      `;

      const ok = await deliverEmail({
        to: priv.email,
        subject: `AppBombers · Repàs i Pregunta del Dia (${todayISO})`,
        html
      });
      if (ok) sentCount++;
    }
  }

  if (sentCount === 0 && FALLBACK_EMAIL) {
    const fridayHtml = friday
      ? `<p style="background:#fef3c7;padding:12px;border-radius:8px;">
           <strong>Divendres de Càlculs!</strong> Avui toca la sessió setmanal de 10 problemes aleatoris amb pissarra:
           <a href="${APP_BASE_URL}?vista=calculs" style="color:#b45309;font-weight:bold;">Anar a Càlculs →</a>
         </p>`
      : '';
    const dailyQHtml = dailyQuestion
      ? `<div style="margin-top:18px;padding:14px;border-radius:10px;background:#f8fafc;border:1px solid #cbd5e1;">
           <p style="margin:0 0 6px;font-size:12px;font-weight:bold;color:#dc2626;text-transform:uppercase;">
             Pregunta del Dia · ${dailyQuestion.tag || 'Actualitat i Temari'}
           </p>
           ${dailyQuestion.context ? `<p style="margin:0 0 8px;font-size:13px;color:#475569;">${dailyQuestion.context}</p>` : ''}
           <p style="margin:0 0 10px;font-size:14px;font-weight:bold;color:#0f172a;">${dailyQuestion.question}</p>
           <ol type="A" style="margin:0 0 10px;padding-left:18px;font-size:13px;color:#1e293b;">
             ${(dailyQuestion.options || []).map((opt) => `<li style="margin-bottom:4px;">${opt}</li>`).join('')}
           </ol>
           <a href="${APP_BASE_URL}" style="color:#dc2626;font-size:13px;font-weight:bold;">Respondre i veure la solució a l'app →</a>
         </div>`
      : '';
    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto;color:#0f172a;">
        <h2 style="color:#dc2626;">Recordatori d'estudi i Pregunta del Dia (${todayISO})</h2>
        <p>Bon dia Pol! Aquí tens el recordatori diari d'AppBombers per revisar el teu calendari d'estudi i respondre la pregunta d'actualitat d'avui:</p>
        ${fridayHtml}
        ${dailyQHtml}
        <p style="margin-top:16px;">
          <a href="${APP_BASE_URL}?vista=calendari" style="background:#dc2626;color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:bold;">
            Obrir el meu Calendari d'Estudi
          </a>
        </p>
      </div>
    `;
    await deliverEmail({
      to: FALLBACK_EMAIL,
      subject: `AppBombers · Repàs i Pregunta del Dia (${todayISO})`,
      html
    });
  }
}

async function generateDailyQuestions(todayISO, catalog) {
  if (!db || !GEMINI_API_KEY) {
    console.log('Firestore o GEMINI_API_KEY no configurats; s\'omet la generació automàtica de preguntes.');
    return;
  }

  for (const t of catalog) {
    const prompt = `Genera exactament 5 preguntes tipus test d'oposició de Bombers de la Generalitat en català sobre el "Tema ${t.number}: ${t.title}".
ESTIL HÍBRID D'OPOSICIÓ (combina les dues tècniques):
1. Casos pràctics i escenaris aplicats: planteja situacions concretes de servei, taules del manual o exemples numèrics reals (p. ex. aplicar un codi de fitxa, avaluar si un supòsit compleix una definició normativa o detectar trampes en dades fixes + variables). En temes de càlcul (Física T9, Química T10, Electricitat T11, Hidràulica T13, Cartografia T14), inclou almenys 2 problemes de càlcul amb dades realistes i distractors basats en errors típics.
2. Precisió literal d'oposició ("punyeteres"): almenys 3 de les 5 preguntes han de tenir dues opcions pràcticament idèntiques diferenciades només per un detall decisiu (un termini exacte, un òrgan competent, "integrat" vs "integral", "gradual" vs "sobtat", una excepció legal, un ordre de maniobra o una unitat).
No mencionis mai el nom de cap aplicació externa ni simulacre.
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
  const dailyQuestion = await getOrGenerateDailyCurrentAffairsQuestion(todayISO, catalog);
  await sendDailyEmails(todayISO, catalog, dailyQuestion);
  await generateDailyQuestions(todayISO, catalog);
  console.log('Tasques diàries finalitzades.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
