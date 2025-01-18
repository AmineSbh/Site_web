import React from 'react';
import "../css/skills.css"
import { FaPython, FaReact, FaGitAlt, FaJava, FaDatabase } from 'react-icons/fa'; // Utilisation d'icônes

function SkillsSection() {
  return (
    <section id="Skills">
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">My Skills</h2>
        <div className="skills-container" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        <div className="skills-category" >
          <h3>Programming Languages</h3>
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

        <div className="skills-category">
          <h3>Technologies</h3>
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
        
        <div className="skills-category">
          <h3>Machine Learning & Data Science</h3>
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
