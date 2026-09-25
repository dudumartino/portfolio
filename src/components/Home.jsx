import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="home-section">
      <div className="home-container">

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

        <motion.div
          className="home-photo-area"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="home-photo-bg-circle home-photo-bg-circle--gray" />
          <div className="home-photo-bg-circle home-photo-bg-circle--peach" />

          <div className="home-photo-frame">
            <img
              src="/FotoEuElegante.jpeg"
              alt="Eduardo Martino"
              className="home-photo-img"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
