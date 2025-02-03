import React from 'react';
import { useTranslation } from 'react-i18next'; // Importer le hook pour accéder aux traductions
import { FaPython, FaReact, FaGitAlt, FaJava, FaDatabase } from 'react-icons/fa'; // Utilisation d'icônes

function SkillsSection() {
  const { t } = useTranslation(); // Utilisation du hook useTranslation pour obtenir la fonction t

  return (
    <section id="Skills">
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">{t('skills.title')}</h2> {/* Titre traduit */}
        
        <div className="skills-container" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          
          {/* Langages de programmation */}
          <div className="skills-category">
            <h3>{t('skills.categories.programming')}</h3> {/* Catégorie traduite */}
            
            <div className="skill">
              <FaPython size={40} color="#FFD700" />
              <p>Python</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill">
              <FaJava size={40} color="#f44336" />
              <p>Java</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill">
              <FaDatabase size={40} color="#8BC34A" />
              <p>SQL</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="skills-category">
            <h3>{t('skills.categories.technologies')}</h3> {/* Catégorie traduite */}
            
            <div className="skill">
              <FaReact size={40} color="#61DAFB" />
              <p>React</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill">
              <FaGitAlt size={40} color="#F1502F" />
              <p>Git</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          {/* Machine Learning & Data Science */}
          <div className="skills-category">
            <h3>{t('skills.categories.ml')}</h3> {/* Catégorie traduite */}
            
            <div className="skill">
              <p>Machine Learning (Scikit-learn, TensorFlow)</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill">
              <p>Dataiku</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default SkillsSection;
