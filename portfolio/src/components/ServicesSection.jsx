import React from 'react';
import "../css/services.css";  // Assurez-vous de créer ce fichier CSS

function ServicesSection() {
  return (
    <section id="Services">
      <div className="services-container">
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">Services</h2>
        
        <div className="services-list">
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
            <h3>Aide aux devoirs</h3>
            <p>Assistance pour les devoirs scolaires et universitaires.</p>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            <h3>Réalisation de sites et apps web et mobile</h3>
            <p>Création de sites et d'applications web et mobiles sur mesure.</p>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
            <h3>Réalisation de bots WhatsApp, Telegram, Discord</h3>
            <p>Création de bots pour WhatsApp, Telegram, et Discord.</p>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700">
            <h3>Scrapping</h3>
            <p>Collecte de données à partir de sites web pour l'analyse.</p>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
            <h3>Freelance en Data Analysis et Développement</h3>
            <p>Consultation en analyse de données et développement de solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
