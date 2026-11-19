// Configuració de Firebase per a AppBombers (projecte: appbombers-d22ed)
export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyB8ey6UgDKkYDQZF1XuR9sEBZyHFoCpl5E',
  authDomain: 'appbombers-d22ed.firebaseapp.com',
  projectId: 'appbombers-d22ed',
  storageBucket: 'appbombers-d22ed.firebasestorage.app',
  messagingSenderId: '847939260210',
  appId: '1:847939260210:web:479b6c1f726ec92d77512b',
  measurementId: 'G-KH3K9XX4LB'
};

export const isFirebaseConfigured = () =>
  Boolean(FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId && FIREBASE_CONFIG.appId);
