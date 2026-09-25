// src/config.js

/**
 * Fonte dos projetos exibidos na seção Projetos, definida por VITE_USE_FIREBASE.
 * - false ou ausente: usa a lista local em src/data/projetos.js (padrão; o SDK
 *   do Firebase nem é carregado, o que deixa o site mais leve).
 * - true: busca a coleção "projetos" no Cloud Firestore
 *   (exige as variáveis VITE_FIREBASE_*).
 *
 * Localmente o valor vem do .env; em produção, da variável de repositório
 * VITE_USE_FIREBASE no GitHub (Settings › Secrets and variables › Actions › Variables).
 */
export const USE_FIREBASE = import.meta.env.VITE_USE_FIREBASE === 'true';
