// src/components/Projetos.jsx
import React, { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projetos.css'; 
import { db } from '../firebaseConfig'; 
import { collection, getDocs, query, orderBy } from 'firebase/firestore'; 
import { useTranslation } from 'react-i18next'; // Importa

const Projetos = () => {
  const { t } = useTranslation(); // Usa
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjetos = async () => {
      if (!db) {
        setError(t('projects.errorConfig')); // Usa t()
        setLoading(false);
        return; 
      }
      try {
        setLoading(true); 
        const projetosCollectionRef = collection(db, 'projetos');
        const q = query(projetosCollectionRef, orderBy('order', 'asc')); 
        const snapshot = await getDocs(q); 
        const fetchedProjetos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProjetos(fetchedProjetos); 
        setError(null); 
      } catch (err) {
        console.error("Erro ao buscar ou ordenar projetos:", err);
        if (err.code === 'failed-precondition') {
           setError(t('projects.errorIndex')); // Usa t()
        } else {
           setError(t('projects.error')); // Usa t()
        }
      } finally {
        setLoading(false); 
      }
    };
    fetchProjetos(); 
    // Adiciona t como dependência se usar t() dentro do useEffect (para erros)
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
            <ProjetoCard key={projeto.id} projeto={projeto} t={t} /> 
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

// Passa t para o ProjetoCard
const ProjetoCard = ({ projeto, t }) => ( 
 <div className="projeto-card">
    <div className="projeto-image-container">
      <img src={projeto.imageUrl} alt={`Imagem do ${projeto.title}`} className="projeto-image" />
    </div>
    <div className="projeto-content">
      <h3 className="projeto-card-title">{projeto.title}</h3>
      <p className="projeto-card-description">{projeto.description}</p>
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

export default Projetos;