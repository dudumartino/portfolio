// src/components/Projetos.jsx
import React, { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projetos.css'; 
import { useTranslation } from 'react-i18next';
import { USE_FIREBASE } from '../config';
import { PROJETOS } from '../data/projetos';

const byOrder = (a, b) => Number(a.order) - Number(b.order);

// title/description podem ser texto simples (Firestore) ou { pt, en, es } (lista local)
const localize = (value, lang) =>
  value && typeof value === 'object' ? value[lang] ?? value.pt : value;

// Import dinâmico: com USE_FIREBASE = false o SDK do Firebase fica fora do bundle
const fetchFirebaseProjetos = async () => {
  const [{ db }, { collection, getDocs, query, orderBy }] = await Promise.all([
    import('../firebaseConfig'),
    import('firebase/firestore'),
  ]);
  if (!db) {
    throw Object.assign(new Error('Firebase não configurado'), { code: 'config' });
  }
  const q = query(collection(db, 'projetos'), orderBy('order', 'asc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const Projetos = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0];
  const [projetos, setProjetos] = useState(() => (USE_FIREBASE ? [] : [...PROJETOS].sort(byOrder)));
  const [loading, setLoading] = useState(USE_FIREBASE);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!USE_FIREBASE) return;

    fetchFirebaseProjetos()
      .then((data) => {
        setProjetos(data);
        setError(null);
      })
      .catch((err) => {
        console.error("Erro ao buscar ou ordenar projetos:", err);
        if (err.code === 'config') {
          setError(t('projects.errorConfig'));
        } else if (err.code === 'failed-precondition') {
          setError(t('projects.errorIndex'));
        } else {
          setError(t('projects.error'));
        }
      })
      .finally(() => setLoading(false));
  }, [t]);

  if (loading) {
    return (
      <section id="projetos" className="projetos-section">
        <h2 className="projetos-title">{t('projects.title')}</h2> {/* Usa t() */}
        <p className="loading-message">{t('projects.loading')}</p> {/* Usa t() */}
      </section>
    );
  }

  if (error) {
    return (
      <section id="projetos" className="projetos-section">
        <h2 className="projetos-title">{t('projects.title')}</h2> {/* Usa t() */}
        <p className="error-message">{error}</p> {/* Erro já está traduzido */}
      </section>
    );
  }

  return (
    <section id="projetos" className="projetos-section">
      <h2 className="projetos-title">{t('projects.title')}</h2> {/* Usa t() */}
      
      {projetos.length > 0 ? (
        <div className="projetos-grid">
          {projetos.map((projeto) => (
            <ProjetoCard key={projeto.id} projeto={projeto} t={t} lang={lang} />
          ))}
        </div>
      ) : (
        !loading && !error && <p className="loading-message">{t('projects.noProjects')}</p>  /* Usa t() */
      )}

      <div className="github-cta">
        <p>{t('projects.ctaText')}</p> {/* Usa t() */}
        <a 
          href="https://github.com/dudumartino" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="github-cta-button"
        >
          <Github size={18} />
          <span>{t('projects.ctaButton')}</span> {/* Usa t() */}
        </a>
      </div>
    </section>
  );
};

const ProjetoCard = ({ projeto, t, lang }) => {
  const title = localize(projeto.title, lang);
  return (
    <div className="projeto-card">
      <div className="projeto-image-container">
        <img src={projeto.imageUrl} alt={title} className="projeto-image" loading="lazy" />
      </div>
      <div className="projeto-content">
        <h3 className="projeto-card-title">{title}</h3>
        <p className="projeto-card-description">{localize(projeto.description, lang)}</p>
        <div className="projeto-card-actions">
          <a 
            href={projeto.liveLink || '#'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="projeto-button live-button"
            style={{ pointerEvents: projeto.liveLink ? 'auto' : 'none', opacity: projeto.liveLink ? 1 : 0.5 }}
          >
            <ExternalLink size={18} />
            <span>{t('projects.learnMore')}</span> {/* Usa t() */}
          </a>
          <a 
            href={projeto.repoLink || '#'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="projeto-button code-button"
             style={{ pointerEvents: projeto.repoLink ? 'auto' : 'none', opacity: projeto.repoLink ? 1 : 0.5 }}
          >
            <Github size={18} />
            <span>{t('projects.viewCode')}</span> {/* Usa t() */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projetos;