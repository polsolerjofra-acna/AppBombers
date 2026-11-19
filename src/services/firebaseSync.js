import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
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
    cachedAuth = getAuth(cachedApp);
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
  const provider = new GoogleAuthProvider();
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
  return snap.exists() ? snap.data()?.state || null : null;
}

export async function saveCloudProgress(user, summaryPayload, fullProgressState) {
  const fb = ensureFirebase();
  if (!fb || !user?.uid) return;

  const publicRef = doc(fb.db, 'studyProfiles', user.uid);
  const privateRef = doc(fb.db, 'studyProfiles', user.uid, 'private', 'progress');

  await Promise.all([
    setDoc(
      publicRef,
      {
        uid: user.uid,
        displayName: (user.displayName || user.email || 'Opositor').slice(0, 60),
        photoURL: user.photoURL || '',
        ...summaryPayload,
        updatedAt: serverTimestamp()
      },
      { merge: true }
    ),
    setDoc(
      privateRef,
      {
        state: fullProgressState,
        updatedAt: serverTimestamp()
      },
      { merge: true }
    )
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
