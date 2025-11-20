// src/components/Home.jsx
import React from 'react';
import Spline from '@splinetool/react-spline'; // 1. Importa o Spline
import '../styles/Home.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="home-section">
      {/* 2. Criei um container para organizar Texto (esq) e 3D (dir) */}
      <div className="home-container">
        
        {/* LADO ESQUERDO: Seu conteúdo de texto original */}
        <div className="home-content">
          <p className="home-greeting">{t('home.greeting')}</p>
          <h1 className="home-name">
            <span className="green-bracket">&lt;</span>
            Eduardo Martino 
            <span className="green-bracket">/&gt;</span>
          </h1>
          <p className="home-description">
            <span className="highlight">{t('home.description_part1')}</span>
            {t('home.description_part2')}
          </p>
        </div>

        {/* LADO DIREITO: O elemento 3D */}
        <div className="home-3d">
          <Spline scene="https://prod.spline.design/b6sHJYj4ikTO07Vq/scene.splinecode" />
        </div>

      </div>
    </section>
  );
};

export default Home;