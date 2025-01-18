import React, { useState, useEffect } from 'react';

function MainSection() {
  const [charIndex, setCharIndex] = useState(0); // Index des caractères pour l'animation typewriter
  const [textIndex, setTextIndex] = useState(0); // Index pour les différents textes
  const [isErasing, setIsErasing] = useState(false); // Etat pour savoir si on efface

  const texts = ["DEVELOPER", "DESIGNER", "YOUTUBER"];
  const speed = 100; // Vitesse d'écriture
  const eraseSpeed = 50; // Vitesse d'effacement
  const delayBetweenWords = 1000; // Temps d'attente avant de commencer à effacer

  // Fonction pour gérer l'écriture des caractères
  const writeCharacter = () => {
    if (charIndex < texts[textIndex].length) {
      setCharIndex((prev) => prev + 1); // Ajouter un caractère
    } else {
      // Attendre avant de commencer à effacer
      setTimeout(() => setIsErasing(true), delayBetweenWords);
    }
  };

  // Fonction pour gérer l'effacement des caractères
  const eraseCharacter = () => {
    if (charIndex > 0) {
      setCharIndex((prev) => prev - 1); // Effacer un caractère
    } else {
      // Passer au mot suivant après avoir effacé tout le texte
      setTextIndex((prev) => (prev + 1) % texts.length); // Passer au prochain mot
      setIsErasing(false); // Commencer à écrire un nouveau mot
    }
  };

  // Fonction principale de gestion du typewriter
  const handleTypewriterEffect = () => {
    if (isErasing) {
      eraseCharacter(); // Effacer les caractères
    } else {
      writeCharacter(); // Écrire les caractères
    }
  };

  // Effet d'animation typewriter avec useEffect
  useEffect(() => {
    const timeoutId = setTimeout(handleTypewriterEffect, isErasing ? eraseSpeed : speed);
    return () => clearTimeout(timeoutId); // Cleanup du timeout
  }, [charIndex, textIndex, isErasing]); // Déclenchement lorsque charIndex, textIndex ou isErasing changent

  return (
    <section id="Home">
      <div className="main-container">
        <div className="image" data-aos="zoom-out" data-aos-duration="3000">
            <img src="../src/assets/images/photo_linkdin.jpeg" alt=""/>
        </div>
        <div className="content">
          <h1 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
            Hey I'm <span>Amine</span>
          </h1>
          <div className="typewriter" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900">
            I'm a <span className="typewriter-text">{texts[textIndex].substring(0, charIndex)}</span><label>|</label>
          </div>
          <p data-aos="flip-down" data-aos-duration="1500" data-aos-delay="1100">
          Je suis ingénieur informatique spécialisé dans la data et l’IA, mais également dans le développement d’application.
          </p>
          <button data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900">
            Download cv
          </button>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
