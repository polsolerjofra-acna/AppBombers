const { onSchedule } = require('firebase-functions/v2/scheduler');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
const db = admin.firestore();

const APP_BASE_URL = process.env.APP_BASE_URL || 'https://polsolerjofra-acna.github.io/AppBombers/';

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

// 1. Avisos diaris per correu electrònic a les 01:00 AM (Europe/Madrid)
exports.dailyStudyEmailReminder = onSchedule(
  { schedule: '0 1 * * *', timeZone: 'Europe/Madrid' },
  async () => {
    const todayISO = getMadridTodayISO();
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    if (!smtpUser || !smtpPass) {
      console.log('SMTP_USER / SMTP_PASS no configurats.');
      return;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: smtpUser, pass: smtpPass }
    });

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
      const allIds = Array.from(new Set([...dueIds, ...plan]));
      if (allIds.length === 0) continue;

      const links = allIds
        .map((id) => {
          const vista = (rounds[id] || 0) >= 1 ? 'summary' : 'manual';
          return `<li><a href="${APP_BASE_URL}?tema=${encodeURIComponent(id)}&vista=${vista}">${id}</a></li>`;
        })
        .join('');

      await transporter.sendMail({
        from: smtpUser,
        to: priv.email,
        subject: `AppBombers · Repàs d'avui (${todayISO})`,
        html: `<p>Hola ${prof.displayName || ''}, avui toca repassar:</p><ul>${links}</ul>`
      });
    }
  }
);

// 2. Generació diària de 5 preguntes noves per tema a les 01:00 AM (Europe/Madrid)
exports.dailyGenerateQuestions = onSchedule(
  { schedule: '0 1 * * *', timeZone: 'Europe/Madrid' },
  async () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.log('GEMINI_API_KEY no configurada.');
      return;
    }
    const todayISO = getMadridTodayISO();
    for (let num = 1; num <= 34; num++) {
      const topicId = `tema-${num}`;
      const resp = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `Genera 5 preguntes test en català d'oposicions de Bombers de la Generalitat per al Tema ${num} (almenys 3 "punyeteres" amb dues opcions gairebé idèntiques diferenciades només per un petit detall decisiu: termini, òrgan, excepció legal o procedimental) en format JSON array [{"difficulty":"Mitjà","question":"...","options":["A","B","C","D"],"correctIndex":0,"explanation":"..."}].` }] }],
            generationConfig: { responseMimeType: 'application/json' }
          })
        }
      );
      if (!resp.ok) continue;
      const data = await resp.json();
      const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
      let list = [];
      try {
        list = JSON.parse(raw);
      } catch {
        continue;
      }
      const batch = db.batch();
      list.slice(0, 5).forEach((q, idx) => {
        if (!q?.question || !Array.isArray(q.options) || q.options.length !== 4) return;
        const ref = db.collection('dailyQuestions').doc(topicId).collection('questions').doc(`${todayISO}-${idx + 1}`);
        batch.set(ref, {
          ...q,
          createdDate: todayISO,
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        });
      });
      await batch.commit();
    }
  }
);
