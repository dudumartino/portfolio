// src/components/Sobre.jsx
import React from 'react';
import '../styles/Sobre.css';
import { useTranslation } from 'react-i18next'; // Importa

const Sobre = () => {
  const { t } = useTranslation(); // Usa

  return (
    <section id="sobre" className="sobre-section">
      <div className="sobre-container">
        <h2 className="sobre-title">{t('about.title')}</h2> {/* Usa t() */}
        <div className="sobre-content-box">
          <p className="sobre-text">{t('about.p1')}</p> {/* Usa t() */}
          <p className="sobre-text">{t('about.p2')}</p> {/* Usa t() */}
          <p className="sobre-text">{t('about.p3')}</p> {/* Usa t() */}
        </div>
      </div>
    </section>
  );
};

export default Sobre;