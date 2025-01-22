import React from 'react';
import "../css/services.css";  // Assurez-vous de créer ce fichier CSS

import { translations } from '../functions/translation.js';

function ServicesSection({ language }) {
  const t = translations[language].services;

  return (
    <section id="Services">
      <div className="services-container">
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">{t.title}</h2>
        
        <div className="services-list">
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
            <h3>{t.tutoring.title}</h3>
            <p>{t.tutoring.description}</p>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            <h3>{t.webdev.title}</h3>
            <p>{t.webdev.description}</p>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
            <h3>{t.bots.title}</h3>
            <p>{t.bots.description}</p>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700">
            <h3>{t.scraping.title}</h3>
            <p>{t.scraping.description}</p>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
            <h3>{t.freelance.title}</h3>
            <p>{t.freelance.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
