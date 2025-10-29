// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// COLE AQUI O OBJETO QUE VOCÊ ME MANDOU
const firebaseConfig = {
  apiKey: "AIzaSyBY1a-T910i-f3pZYzOlL4feqrwl3HgnKs",
  authDomain: "meu-portfollio.firebaseapp.com", // <-- Pequeno erro de digitação aqui? Deve ser 'portfolio'? Verifique no seu console Firebase.
  projectId: "meu-portfollio", // <-- Pequeno erro de digitação aqui? Deve ser 'portfolio'? Verifique no seu console Firebase.
  storageBucket: "meu-portfollio.firebasestorage.app", // <-- Pequeno erro de digitação aqui? Deve ser 'portfolio'? Verifique no seu console Firebase.
  messagingSenderId: "109973771353",
  appId: "1:109973771353:web:8bface939e27c9437b0d48"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o banco de dados (Firestore) para ser usado em outros arquivos
export const db = getFirestore(app);