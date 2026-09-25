// src/components/Contato.jsx
import React, { useState } from 'react';
import { Linkedin, Github, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/Contato.css';
import { useTranslation } from 'react-i18next';

const WHATSAPP_NUMBER = '5531987263618';

// Chaves de quote.professions; "other" abre um campo de texto livre
const PROFESSIONS = [
  'lawyer',
  'psychologist',
  'physiotherapist',
  'doctor',
  'dentist',
  'nutritionist',
  'personalTrainer',
  'aesthetician',
  'architect',
  'accountant',
  'realtor',
  'other',
];

const buildWhatsappUrl = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const Contato = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [otherProfession, setOtherProfession] = useState('');
  const [message, setMessage] = useState('');

  const isOther = profession === 'other';

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = t('quote.whatsappTemplate', {
      name: name.trim(),
      profession: isOther ? otherProfession.trim() : t(`quote.professions.${profession}`),
      message: message.trim(),
    });

    window.open(buildWhatsappUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="orcamento" className="contato-section">
      <div className="contato-container">
        <h2 className="contato-title">{t('quote.title')}</h2>
        <p className="contato-intro">{t('quote.intro')}</p>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="quote-field">
            <label htmlFor="quote-name">{t('quote.name')}</label>
            <input
              id="quote-name"
              className="quote-input"
              type="text"
              autoComplete="name"
              placeholder={t('quote.namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="quote-field">
            <label htmlFor="quote-profession">{t('quote.profession')}</label>
            <select
              id="quote-profession"
              className="quote-input"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              required
            >
              <option value="" disabled>
                {t('quote.professionPlaceholder')}
              </option>
              {PROFESSIONS.map((key) => (
                <option key={key} value={key}>
                  {t(`quote.professions.${key}`)}
                </option>
              ))}
            </select>
          </div>

          {isOther && (
            <div className="quote-field">
              <label htmlFor="quote-other">{t('quote.other')}</label>
              <input
                id="quote-other"
                className="quote-input"
                type="text"
                placeholder={t('quote.otherPlaceholder')}
                value={otherProfession}
                onChange={(e) => setOtherProfession(e.target.value)}
                required
                autoFocus
              />
            </div>
          )}

          <div className="quote-field">
            <label htmlFor="quote-message">{t('quote.message')}</label>
            <textarea
              id="quote-message"
              className="quote-input quote-textarea"
              rows={5}
              placeholder={t('quote.messagePlaceholder')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="quote-submit">
            <Send size={18} />
            <span>{t('quote.submit')}</span>
          </button>
        </form>

        <p className="contato-social-label">{t('quote.social')}</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/eduardo-martino/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-link linkedin-icon"><Linkedin size={40} /></a>
          <a href="https://github.com/dudumartino" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-link github-icon"><Github size={40} /></a>
          <a href={buildWhatsappUrl(t('contact.whatsappMessage'))} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon-link whatsapp-icon"><FaWhatsapp size={40} /></a>
        </div>
      </div>
    </section>
  );
};

export default Contato;
