import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, MapPin, Check, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { handleAnchorClick } from '../utils/scrollToSection';
import '../styles/Servicos.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Cada serviço usa as chaves services.<prefixo>_title, _desc, _b1 e _b2
const SERVICES = [
  { key: 'landing', icon: MousePointerClick },
  { key: 'gmb', icon: MapPin },
];

const Servicos = () => {
  const { t } = useTranslation();

  return (
    <section id="servicos" className="servicos-section">
      <div className="servicos-inner">
        <motion.div
          className="servicos-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="servicos-title">{t('services.title')}</h2>
          <div className="servicos-accent-line" />
          <p className="servicos-subtitle">{t('services.subtitle')}</p>
        </motion.div>

        <div className="servicos-grid">
          {SERVICES.map(({ key, icon: Icon }, index) => (
            <motion.article
              key={key}
              className="servico-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={0.1 + index * 0.1}
            >
              <div className="servico-icon">
                <Icon size={32} />
              </div>
              <h3 className="servico-title">{t(`services.${key}_title`)}</h3>
              <p className="servico-desc">{t(`services.${key}_desc`)}</p>
              <ul className="servico-benefits">
                {['b1', 'b2'].map((b) => (
                  <li key={b}>
                    <Check size={18} aria-hidden="true" />
                    <span>{t(`services.${key}_${b}`)}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <a href="#orcamento" className="servicos-cta" onClick={handleAnchorClick('orcamento')}>
          <MessageCircle size={20} />
          <span>{t('home.cta')}</span>
        </a>
      </div>
    </section>
  );
};

export default Servicos;
