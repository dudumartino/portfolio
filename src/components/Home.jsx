// src/components/Home.jsx
import React from 'react';
import '../styles/Home.css';
import { useTranslation } from 'react-i18next'; // Importa

const Home = () => {
  const { t } = useTranslation(); // Usa

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <p className="home-greeting">{t('home.greeting')}</p> {/* Substitui */}
        <h1 className="home-name">
          <span className="green-bracket">&lt;</span>
          Eduardo Martino 
          <span className="green-bracket">/&gt;</span>
        </h1>
        <p className="home-description">
          <span className="highlight">{t('home.description_part1')}</span>
          {t('home.description_part2')} {/* Usa t() */}
        </p>
      </div>
    </section>
  );
};

export default Home;