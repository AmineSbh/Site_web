import React from 'react';
import { translations } from '../functions/translation.js';

function AboutSection({ language }) {
  const t = translations[language].about;

  return (
    <section id="About"> 
      <div className="about-section">
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">{t.title}</h2>
        <div className='about-container'>
          <div className="image" data-aos="zoom-out" data-aos-duration="200">
            <img src="main.png" alt=""/>
          </div>
          <div className="content">
            <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
              {t.description}
            </p>
            <div className="social-links">
              <a href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
