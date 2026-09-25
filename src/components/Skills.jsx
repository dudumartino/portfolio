// src/components/Skills.jsx
import React from 'react';
import { Users, Brain, MessageSquare, Kanban } from 'lucide-react'; 
import '../styles/Skills.css';
import { useTranslation } from 'react-i18next'; 

// Ícones do devicon: https://devicon.dev
const HARD_SKILLS = [
  { name: 'React', icon: 'react/react-original' },
  { name: 'Node.js', icon: 'nodejs/nodejs-original' },
  { name: '.NET', icon: 'dot-net/dot-net-original' },
  { name: 'JavaScript', icon: 'javascript/javascript-original' },
  { name: 'HTML5', icon: 'html5/html5-original' },
  { name: 'CSS3', icon: 'css3/css3-original' },
  { name: 'Git', icon: 'git/git-original' },
  { name: 'Python', icon: 'python/python-original' },
  { name: 'Java', icon: 'java/java-original' },
  { name: 'C#', icon: 'csharp/csharp-original' },
  { name: 'C++', icon: 'cplusplus/cplusplus-original' },
  { name: 'Figma', icon: 'figma/figma-original' },
];

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

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
                {HARD_SKILLS.map(({ name, icon }) => (
                  <HardSkillIcon
                    key={name}
                    name={name}
                    icon={<img src={`${DEVICON_BASE}/${icon}.svg`} alt={`${name} Logo`} className="hard-skill-img" />}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

export default Skills;