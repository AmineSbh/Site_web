import React from 'react';
import { useTranslation } from 'react-i18next'; // Importer le hook pour accéder aux traductions
import "../css/services.css"; // Assurez-vous de créer ce fichier CSS

function ServicesSection({ language }) {
  const { t } = useTranslation(); // Utilisation du hook useTranslation pour obtenir la fonction t

  return (
    <section id="Services">
      <div className="services-container">
        {/* Titre de la section */}
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">{t('services.title')}</h2>
        
        <div className="services-list">
          {/* Service 1 */}
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
            <h3>{t('services.tutoring.title')}</h3>
            <p>{t('services.tutoring.description')}</p>
          </div>
          
          {/* Service 2 */}
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            <h3>{t('services.webdev.title')}</h3>
            <p>{t('services.webdev.description')}</p>
          </div>
          
          {/* Service 3 */}
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
            <h3>{t('services.bots.title')}</h3>
            <p>{t('services.bots.description')}</p>
          </div>
          
          {/* Service 4 */}
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700">
            <h3>{t('services.scraping.title')}</h3>
            <p>{t('services.scraping.description')}</p>
          </div>
          
          {/* Service 5 */}
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
            <h3>{t('services.freelance.title')}</h3>
            <p>{t('services.freelance.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
