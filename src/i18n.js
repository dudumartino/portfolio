// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa os arquivos de tradução
import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';
import translationES from './locales/es/translation.json'; // Importa espanhol

const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  },
  es: { // Adiciona espanhol
    translation: translationES
  }
};

i18n
  .use(LanguageDetector) // Detecta idioma do navegador
  .use(initReactI18next) // Passa i18n para react-i18next
  .init({
    resources,
    fallbackLng: 'pt', // Idioma padrão se a detecção falhar
    
    // Configurações do detector de idioma (opcional, mas recomendado)
    detection: {
      // Ordem e métodos para detectar o idioma
      order: ['localStorage', 'navigator', 'htmlTag'],
      // Chave para guardar o idioma escolhido no localStorage
      lookupLocalStorage: 'i18nextLng', 
      // Cachear o idioma detectado
      caches: ['localStorage'], 
    },

    interpolation: {
      escapeValue: false, // React já protege contra XSS
    }
    // Remova debug: true em produção
    // debug: true, 
  });

export default i18n;