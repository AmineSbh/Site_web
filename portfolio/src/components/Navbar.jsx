import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('dark'); // Valeur par défaut
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu hamburger

  // Changement de langue
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

  // Détecte le défilement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gère l'ouverture/fermeture du menu hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          Amine <span>SABBAHI</span>
        </div>

        {/* Liens de navigation */}
        <div className={`links ${isMenuOpen ? 'active' : ''}`}>
          {['home', 'about', 'skills', 'services', 'projects', 'contact'].map((item) => (
            <div key={item} className="link">
              <a href={`#${item}`} onClick={() => setIsMenuOpen(false)}>
                {t(`nav.${item}`)}
              </a>
            </div>
          ))}
        </div>

        {/* Contrôles de langue et thème */}
        <div className="controls">
          <div className="language-selector">
            <select
              onChange={(e) => handleLanguageChange(e.target.value)}
              value={i18n.language}
            >
              <option value="fr">Fr</option>
              <option value="en">En</option>
            </select>
          </div>

          <div onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? (
              <FaMoon className="theme-icon" />
            ) : (
              <FaSun className="theme-icon" />
            )}
          </div>
        </div>

        {/* Bouton menu hamburger */}
        <div className="hamburg" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
