// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

console.log("Auth Domain:", process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
console.log("Project ID:", process.env.REACT_APP_FIREBASE_PROJECT_ID);
console.log("Storage Bucket:", process.env.REACT_APP_FIREBASE_STORAGE_BUCKET);
console.log(
  "Sender ID:",
  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ? "OK" : "MISSING!"
);
console.log(
  "App ID:",
  process.env.REACT_APP_FIREBASE_APP_ID ? "OK" : "MISSING!"
);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

console.log("Final Firebase Config:", firebaseConfig);

// --- CORREÇÃO AQUI ---
// Declaramos db fora, mas inicializamos dentro do try
let db;
let app; // Mantemos app se precisar dele depois

try {
  // Inicializamos as variáveis aqui DENTRO
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("Firebase initialized successfully!");
} catch (error) {
  console.error("FIREBASE INITIALIZATION FAILED:", error);
  // Em caso de erro, db permanecerá undefined, mas não quebrará o export
  // throw error; // Removemos o throw para não parar a aplicação inteira
}
// --- FIM DA CORREÇÃO ---

// Exportamos db no final do arquivo
export { db };
