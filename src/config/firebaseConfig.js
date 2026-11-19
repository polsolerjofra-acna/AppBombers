// Configuració de Firebase per a AppBombers.
// Enganxa aquí les dades de la teva Web App de Firebase (Project Settings -> General -> Your apps).
export const FIREBASE_CONFIG = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};

export const isFirebaseConfigured = () =>
  Boolean(FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId && FIREBASE_CONFIG.appId);
