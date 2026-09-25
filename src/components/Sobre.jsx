import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/Sobre.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Sobre = () => {
  const { t } = useTranslation();

  // Ordem cronológica inversa: experiência atual no topo
  const timelineItems = [
    {
      id: 'fs',
      period: t('about.timeline.fs_period'),
      role: t('about.timeline.fs_role'),
      company: t('about.timeline.fs_company'),
      desc: t('about.timeline.fs_desc'),
      current: true,
    },
    {
      id: 'aw',
      period: t('about.timeline.aw_period'),
      role: t('about.timeline.aw_role'),
      company: t('about.timeline.aw_company'),
      desc: t('about.timeline.aw_desc'),
      current: false,
    },
    {
      id: 'cp',
      period: t('about.timeline.cp_period'),
      role: t('about.timeline.cp_role'),
      company: t('about.timeline.cp_company'),
      desc: t('about.timeline.cp_desc'),
      current: false,
    },
    {
      id: 'ob',
      period: t('about.timeline.ob_period'),
      role: t('about.timeline.ob_role'),
      company: t('about.timeline.ob_company'),
      desc: t('about.timeline.ob_desc'),
      current: false,
    },
  ];

  return (
    <section id="sobre" className="sobre-section">
      <div className="sobre-inner">

        <motion.div
          className="sobre-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="sobre-title">{t('about.title')}</h2>
          <div className="sobre-accent-line" />
        </motion.div>

        <motion.div
          className="sobre-bio"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
        >
          <p className="sobre-text">{t('about.p1')}</p>
          <p className="sobre-text">{t('about.p2')}</p>
          <p className="sobre-text">{t('about.p3')}</p>
        </motion.div>

        <motion.div
          className="exp-section"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          <h3 className="exp-heading">{t('about.timeline.title')}</h3>

          <div className="exp-timeline">
            <div className="exp-axis" aria-hidden="true">
              <span className="exp-axis-cap exp-axis-cap--top" />
              <span className="exp-axis-cap exp-axis-cap--bottom" />
            </div>

            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  className={`exp-row ${isLeft ? 'exp-row--left' : 'exp-row--right'}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  custom={index * 0.08}
                >
                  <div className={`exp-content ${isLeft ? 'exp-content--left' : 'exp-content--right'}`}>
                    <span className="exp-period">{item.period}</span>
                    <h4 className="exp-role">{item.role}</h4>
                    {item.company && <p className="exp-company">{item.company}</p>}
                    <p className="exp-desc">{item.desc}</p>
                  </div>

                  <div className="exp-node-col">
                    <div className={`exp-node${item.current ? ' exp-node--active' : ''}`}>
                      {item.current && <span className="exp-node-pulse" aria-hidden="true" />}
                    </div>
                  </div>

                  <div className="exp-spacer" aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Sobre;
