import React from 'react';
import { useTranslation } from 'react-i18next'; // Importer le hook pour accéder aux traductions
import { FaPython, FaReact, FaGitAlt, FaJava, FaDatabase } from 'react-icons/fa'; // Utilisation d'icônes

function SkillsSection() {
  const { t } = useTranslation(); // Utilisation du hook useTranslation pour obtenir la fonction t

  return (
    <section id="Skills" className="text-center py-20 bg-gray-900">
      <h2
        className="text-4xl font-bold text-white mb-12"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        {t('skills.title')}
      </h2>

      <div
        className="skills-container flex flex-wrap justify-center gap-8 px-4"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        {/* Langages de programmation */}
        <div className="skills-category bg-gray-800 p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-semibold text-green-500 mb-4">
            {t('skills.categories.programming')}
          </h3>

          <div className="skill flex flex-col items-center mb-6">
            <FaPython size={40} color="#FFD700" />
            <p className="text-white mt-2">Python</p>
            <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="skill flex flex-col items-center mb-6">
            <FaJava size={40} color="#f44336" />
            <p className="text-white mt-2">Java</p>
            <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>

          <div className="skill flex flex-col items-center mb-6">
            <FaDatabase size={40} color="#8BC34A" />
            <p className="text-white mt-2">SQL</p>
            <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="skills-category bg-gray-800 p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-semibold text-green-500 mb-4">
            {t('skills.categories.technologies')}
          </h3>

          <div className="skill flex flex-col items-center mb-6">
            <FaReact size={40} color="#61DAFB" />
            <p className="text-white mt-2">React</p>
            <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="skill flex flex-col items-center mb-6">
            <FaGitAlt size={40} color="#F1502F" />
            <p className="text-white mt-2">Git</p>
            <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>

        {/* Machine Learning & Data Science */}
        <div className="skills-category bg-gray-800 p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-semibold text-green-500 mb-4">
            {t('skills.categories.ml')}
          </h3>

          <div className="skill flex flex-col items-center mb-6">
            <p className="text-white text-center">Machine Learning (Scikit-learn, TensorFlow)</p>
            <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="skill flex flex-col items-center mb-6">
            <p className="text-white text-center">Dataiku</p>
            <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;