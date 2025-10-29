// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Lê as variáveis de ambiente (do .env localmente, ou da Vercel no deploy)
const firebaseConfig = {
  apiKey: "AIzaSyBY1a-T910i-f3pZYzOlL4feqrwl3HgnKs",
  authDomain: "meu-portfollio.firebaseapp.com",
  projectId: "meu-portfollio",
  storageBucket: "meu-portfollio.firebasestorage.app",
  messagingSenderId: "109973771353",
  appId: "1:109973771353:web:8bface939e27c9437b0d48"
};

// Tenta inicializar o Firebase
let db;
let app;
try {
  // Verifica se todas as chaves essenciais existem ANTES de inicializar
  if (
    !firebaseConfig.apiKey ||
    !firebaseConfig.projectId ||
    !firebaseConfig.authDomain
  ) {
    throw new Error(
      "Firebase config values are missing. Check your .env file or Vercel environment variables."
    );
  }
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("Firebase initialized successfully!"); // Deixamos este log para confirmar
} catch (error) {
  console.error("FIREBASE INITIALIZATION FAILED:", error);
  // Define db como null ou undefined para evitar erros posteriores
  db = null;
}

// Exporta o db (pode ser null se a inicialização falhar)
export { db };
