// src/components/Skills.jsx
import React from 'react';
import { Users, Brain, MessageSquare, Kanban } from 'lucide-react'; 
import '../styles/Skills.css';
import { useTranslation } from 'react-i18next'; 

const Skills = () => {
  const { t } = useTranslation(); 

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">{t('skills.title')}</h2> 
        <div className="skills-grid">
          
          <div className="skills-category">
            <h3 className="skills-category-title">{t('skills.softTitle')}</h3> 
            <div className="soft-skills-cards">
              <SoftSkillCard 
                icon={<Users size={36} />} 
                title={t('skills.communication')} 
                description={t('skills.communicationDesc')}
              />
              <SoftSkillCard 
                icon={<Brain size={36} />} 
                title={t('skills.problemSolving')}
                description={t('skills.problemSolvingDesc')}
              />
              <SoftSkillCard 
                icon={<MessageSquare size={36} />} 
                title={t('skills.teamwork')}
                description={t('skills.teamworkDesc')}
              />
              <SoftSkillCard 
                icon={<Kanban size={36} />} 
                title={t('skills.agile')}
                description={t('skills.agileDesc')}
              />
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">{t('skills.hardTitle')}</h3> 
            <div className="hard-skills-box">
              <p className="hard-skills-intro">{t('skills.hardIntro')}</p> 
              <div className="hard-skills-icons">
                  {/* Ícones (sem alteração) */}
                  <HardSkillIcon icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Logo" className="hard-skill-img"/>} name="React" />
                  <HardSkillIcon icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js Logo" className="hard-skill-img"/>} name="Node.js" />
                  <HardSkillIcon icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" alt=".NET Logo" className="hard-skill-img"/>} name=".NET" />
                  <HardSkillIcon icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript Logo" className="hard-skill-img"/>} name="JavaScript" />
                  <HardSkillIcon icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5 Logo" className="hard-skill-img"/>} name="HTML5" />
                  <HardSkillIcon icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3 Logo" className="hard-skill-img"/>} name="CSS3" />
                  <HardSkillIcon icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git Logo" className="hard-skill-img"/>} name="Git" />
                  <HardSkillIcon icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python Logo" className="hard-skill-img"/>} name="Python" />
                  <HardSkillIcon icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java Logo" className="hard-skill-img"/>} name="Java" />
                  <HardSkillIcon icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C# Logo" className="hard-skill-img"/>} name="C#" />
                  <HardSkillIcon icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++ Logo" className="hard-skill-img"/>} name="C++" />
                  <HardSkillIcon icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma Logo" className="hard-skill-img"/>} name="Figma" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CORREÇÃO AQUI ---
// Código real dos componentes restaurado
const SoftSkillCard = ({ icon, title, description }) => (
  <div className="soft-skill-card">
    <div className="soft-skill-icon">{icon}</div>
    <h4 className="soft-skill-title">{title}</h4>
    <p className="soft-skill-description">{description}</p>
  </div>
);

const HardSkillIcon = ({ icon, name }) => (
  <div className="hard-skill-icon-wrapper">
    <div className="hard-skill-icon">{icon}</div>
    <span className="hard-skill-name">{name}</span>
  </div>
);
// --- FIM DA CORREÇÃO ---

export default Skills;