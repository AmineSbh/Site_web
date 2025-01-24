import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon } from 'react-icons/fa'; // Icônes soleil et lune

function Navbar() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('dark'); // Valeur par défaut 'dark'
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu hamburger


  // Gère le changement de langue
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Bascule entre les thèmes clair et sombre
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.classList.remove(theme === 'dark' ? 'dark-mode' : 'light-mode');
    document.body.classList.add(newTheme === 'dark' ? 'dark-mode' : 'light-mode');
  };

  // Détecte le défilement pour appliquer un état "scrolled"
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialisation du thème au premier chargement
  useEffect(() => {
    document.body.classList.add('dark-mode'); // Mode sombre par défaut
  }, []);

  // Gère l'ouverture et la fermeture du menu hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          Amine <span>SABBAHI</span>
        </div>
        <div className="links">
          {['home', 'about', 'skills', 'services', 'contact'].map((item) => (
            <div key={item} className="link">
              <a href={`#${item}`}>
                {t(`nav.${item}`)}
              </a>
            </div>
          ))}
        </div>
        <div className="controls">
          {/* Sélecteur de langue */}
          <div className="language-selector">
            <select
              onChange={(e) => handleLanguageChange(e.target.value)}
              value={i18n.language}
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Bouton de changement de thème */}
          <div onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? (
              <FaMoon className="theme-icon" />
            ) : (
              <FaSun className="theme-icon" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
