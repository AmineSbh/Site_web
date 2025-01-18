import React, { useState } from 'react';

function Navbar() {
  const [language, setLanguage] = useState('en'); // Langue par défaut : Anglais
  const [theme, setTheme] = useState('dark'); // Thème par défaut : sombre
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Etat du menu hamburger

  // Change la langue
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  // Bascule entre le thème sombre et clair
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.body.classList.toggle('light-theme'); // Applique un thème clair ou sombre globalement
  };

  // Ouvrir le menu hamburger
  const hamburg = () => {
    setIsMenuOpen(true); // Ouvre le menu
  };

  // Fermer le menu hamburger
  const cancel = () => {
    setIsMenuOpen(false); // Ferme le menu
  };

  return (
    <nav className={`navbar ${theme}`} data-aos="none">
      <div className="nav-container">
        <div className="logo">
          Amine <span>SABBAHI</span>
        </div>
        <div className="links">
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <a href="#Home">{language === 'fr' ? 'Accueil' : 'Home'}</a>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <a href="#About">{language === 'fr' ? 'À propos' : 'About'}</a>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <a href="#Skills">{language === 'fr' ? 'Compétences' : 'Skills'}</a>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <a href="#Services">{language === 'fr' ? 'Services' : 'Services'}</a>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <a href="#Contact">{language === 'fr' ? 'Contact' : 'Contact'}</a>
          </div>
        </div>
        <div className="controls">
          {/* Langue */}
          <div className="language-selector">
            <select onChange={(e) => handleLanguageChange(e.target.value)} value={language}>
              <option value="fr">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" alt="Français" className="flag-icon" />
                Français
              </option>
              <option value="en">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="English" className="flag-icon" />
                English
              </option>
            </select>
          </div>
          {/* Bouton pour changer de thème */}
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? '🌙' : '🌞'}
          </button>
        </div>
        {/* Menu hamburger */}
        <div className="hamburg" onClick={hamburg}>
          ☰
        </div>
      </div>

      {/* Menu déroulant */}
      <div className={`dropdown ${isMenuOpen ? 'active' : ''}`}>
        <div className="cancel" onClick={cancel}>
          ✖
        </div>
        <div className="links">
          <a href="#Home">{language === 'fr' ? 'Accueil' : 'Home'}</a>
          <a href="#About">{language === 'fr' ? 'À propos' : 'About'}</a>
          <a href="#Skills">{language === 'fr' ? 'Compétences' : 'Skills'}</a>
          <a href="#Services">{language === 'fr' ? 'Services' : 'Services'}</a>
          <a href="#Contact">{language === 'fr' ? 'Contact' : 'Contact'}</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
