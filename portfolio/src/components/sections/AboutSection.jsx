import React from 'react';
import { useTranslation } from 'react-i18next'; // Import du hook de traduction

function AboutSection() {
  const { t } = useTranslation(); // Hook pour accéder aux traductions

  return (
    <section id="About" className="flex flex-col items-center w-full py-10 mt-10 bg-gray-900 bg-opacity-25">
      {/* Titre de la section */}
      <h2
        className="text-4xl font-bold text-white mb-8"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        {t('about.title')}
      </h2>

      {/* Conteneur principal */}
      <div className="flex flex-col md:flex-row items-center justify-between w-4/5 max-w-6xl gap-8">
        {/* Image */}
        <div
          className="w-1/3 h-64 overflow-hidden shadow-2xl shadow-green-600 transform-gpu"
          data-aos="zoom-out"
          data-aos-duration="200"
        >
          <img
            src="src/assets/images/photo_linkdin.jpeg"
            alt={t('about.imageAlt', 'About Image')}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Contenu */}
        <div className="w-full md:w-2/3">
          <p
            className="text-lg text-gray-300 mb-6"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            {t('about.description')}
          </p>

          {/* Liens sociaux */}
          <div className="flex gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-green-500 transition-colors"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-green-500 transition-colors"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="400"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-green-500 transition-colors"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-green-500 transition-colors"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="600"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;