import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  indexedDBLocalPersistence
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore';
import { FIREBASE_CONFIG, isFirebaseConfigured } from '../config/firebaseConfig';

let cachedApp = null;
let cachedAuth = null;
let cachedDb = null;

function ensureFirebase() {
  if (!isFirebaseConfigured()) return null;
  if (typeof initializeApp !== 'function') return null;

  if (!cachedApp) {
    cachedApp = getApps().length > 0 ? getApps()[0] : initializeApp(FIREBASE_CONFIG);
    try {
      if (typeof initializeAuth === 'function' && browserLocalPersistence) {
        cachedAuth = initializeAuth(cachedApp, {
          persistence: [browserLocalPersistence, indexedDBLocalPersistence].filter(Boolean)
        });
      } else {
        cachedAuth = getAuth(cachedApp);
      }
    } catch {
      cachedAuth = getAuth(cachedApp);
      if (typeof setPersistence === 'function' && browserLocalPersistence) {
        setPersistence(cachedAuth, browserLocalPersistence).catch(() => {});
      }
    }
    cachedDb = getFirestore(cachedApp);
  }
  return { app: cachedApp, auth: cachedAuth, db: cachedDb };
}

export function subscribeAuth(callback) {
  const fb = ensureFirebase();
  if (!fb) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(fb.auth, callback);
}

export async function loginWithGoogle() {
  const fb = ensureFirebase();
  if (!fb) throw new Error('Firebase no està configurat encara.');
  if (typeof setPersistence === 'function' && browserLocalPersistence) {
    await setPersistence(fb.auth, browserLocalPersistence).catch(() => {});
  }
  const provider = new GoogleAuthProvider();
  try {
    const lastEmail = localStorage.getItem('bombers_last_google_email');
    if (lastEmail) {
      provider.setCustomParameters({ login_hint: lastEmail });
    }
  } catch {}
  return signInWithPopup(fb.auth, provider);
}

export async function logoutFirebase() {
  const fb = ensureFirebase();
  if (!fb) return;
  return signOut(fb.auth);
}

export async function loadPrivateProgress(uid) {
  const fb = ensureFirebase();
  if (!fb || !uid) return null;
  const ref = doc(fb.db, 'studyProfiles', uid, 'private', 'progress');
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  const data = snap.data() || {};
  const { updatedAt: _u, uid: _uid, ...rest } = data;
  return Object.keys(rest).length > 0 ? rest : null;
}

export async function saveCloudProgress(user, summaryPayload, fullProgressState) {
  const fb = ensureFirebase();
  if (!fb || !user?.uid) return;

  const publicRef = doc(fb.db, 'studyProfiles', user.uid);
  const privateRef = doc(fb.db, 'studyProfiles', user.uid, 'private', 'progress');

  const publicData = {
    uid: user.uid,
    displayName: (user.displayName || user.email || 'Opositor').slice(0, 60),
    ...summaryPayload,
    updatedAt: serverTimestamp()
  };
  if (user.photoURL && /^https?:\/\//.test(user.photoURL) && user.photoURL.length <= 500) {
    publicData.photoURL = user.photoURL;
  }

  const privateData = {
    uid: user.uid,
    email: (user.email || '').slice(0, 120),
    dailyEmailEnabled: fullProgressState.dailyEmailEnabled !== false,
    pageStatus: fullProgressState.pageStatus || {},
    difficultPages: fullProgressState.difficultPages || {},
    readingSpeedFactor: fullProgressState.readingSpeedFactor || 1.0,
    topicStatus: fullProgressState.topicStatus || {},
    quizResults: fullProgressState.quizResults || {},
    spacedRepetition: fullProgressState.spacedRepetition || {},
    topicRounds: fullProgressState.topicRounds || {},
    studyPlan: fullProgressState.studyPlan || {},
    fridayCalcHistory: (fullProgressState.fridayCalcHistory || []).slice(0, 200),
    studySessions: (fullProgressState.studySessions || []).slice(0, 1000),
    pomodoroStats: fullProgressState.pomodoroStats || {},
    dailyActivity: (fullProgressState.dailyActivity || []).slice(-366),
    streakDays: fullProgressState.streakDays || 1,
    lastActiveDate: fullProgressState.lastActiveDate || '',
    updatedAt: serverTimestamp()
  };

  await Promise.all([
    setDoc(publicRef, publicData, { merge: true }),
    setDoc(privateRef, privateData, { merge: true })
  ]);
}

export function subscribeGroupProfiles(callback) {
  const fb = ensureFirebase();
  if (!fb) {
    callback([]);
    return () => {};
  }
  const colRef = collection(fb.db, 'studyProfiles');
  return onSnapshot(colRef, (snapshot) => {
    const list = [];
    snapshot.forEach((d) => list.push({ id: d.id, ...d.data() }));
    list.sort(
      (a, b) =>
        (b.completedTopics || 0) - (a.completedTopics || 0) ||
        (b.pomodoroTotalMinutes || 0) - (a.pomodoroTotalMinutes || 0)
    );
    callback(list);
  });
}

export async function fetchDailyQuestions(topicId) {
  const fb = ensureFirebase();
  if (!fb || !topicId) return [];
  try {
    const colRef = collection(fb.db, 'dailyQuestions', topicId, 'questions');
    const snap = await getDocs(colRef);
    const list = [];
    snap.forEach((d) => {
      const data = d.data();
      if (data && data.question && Array.isArray(data.options)) {
        list.push({ id: d.id, ...data, isDailyGenerated: true });
      }
    });
    return list;
  } catch {
    return [];
  }
}
