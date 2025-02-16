import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPython, FaReact, FaGitAlt, FaDatabase, FaAws } from 'react-icons/fa';
import { SiApachespark, SiDataiku, SiPlotly } from 'react-icons/si';

function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="Skills">
      <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">{t('skills.title')}</h2>
      
      <div className="skills-container" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        
        {/* Langages de programmation */}
        <div className="skills-category">
          <h3>{t('skills.categories.programming')}</h3>
          
          <div className="skill">
            <FaPython size={40} color="#FFD700" />
            <p>Python</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          
          <div className="skill">
            <FaDatabase size={40} color="#8BC34A" />
            <p>SQL</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          
          <div className="skill">
            <SiApachespark size={40} color="#E25A1C" />
            <p>Spark</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '75%' }}></div>
            </div>
          </div>
          
          <div className="skill">
            <SiDataiku size={40} color="#2AB1AC" />
            <p>Dataiku</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="skills-category">
          <h3>{t('skills.categories.certifications')}</h3>
          
          <div className="skill">
            <FaAws size={40} color="#FF9900" />
            <p>AWS Cloud Practitioner</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>
          
          <div className="skill">
            <FaAws size={40} color="#FF9900" />
            <p>AWS Solution Architect</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          
          <div className="skill">
            <SiApachespark size={40} color="#E25A1C" />
            <p>Spark Databricks</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>

        {/* Développement et Framework */}
        <div className="skills-category">
          <h3>{t('skills.categories.development')}</h3>
          
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
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          
          <div className="skill">
            <SiPlotly size={40} color="#3F4F75" />
            <p>Dash</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;