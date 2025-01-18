import React from 'react';

function AboutSection() {
  return (
    <section id="About"> 
      <div className="about-section">
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">About Me</h2>
        <div className='about-container'>
          <div className="image" data-aos="zoom-out" data-aos-duration="200">
            <img src="main.png" alt=""/>
          </div>
          <div className="content">
            <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            Je m’appelle Amine SABBAHI, j’ai 26 ans et je suis récemment diplômé de l’ESIEA, une école d’ingénieurs 
            spécialisée dans le numérique. Curieux et passionné par le développement web et les nouvelles technologies, 
            j’aime explorer les dernières tendances et repousser les limites de ce qui est possible. Mon parcours m’a appris
             à être rigoureux et persévérant, mais aussi à apprécier le travail en équipe et les moments de partage.
            </p>
            <div class="social-links">
              <a href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300"><i class="fa-brands fa-github"></i></a>
              <a href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"><i class="fa-brands fa-facebook"></i></a>
              <a href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600"><i class="fa-brands fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default AboutSection;
