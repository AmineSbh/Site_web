import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';
import { useScroll } from '../hooks/useScroll';
import { useLanguage } from '../hooks/useLanguage';

function Navbar() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isScrolled = useScroll();
  const { language, handleLanguageChange } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu hamburger

  // Gère l'ouverture/fermeture du menu hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full h-[12vh] z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'bg-black/70' : 'bg-black/50'
      }`}
    >
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <div className="logo text-xl font-bold text-white hover:scale-110 transition-transform">
          <a href="#Home" className="no-underline text-inherit">
            Amine <span className="text-green-600 text-shadow-lg shadow-green-600">SABBAHI</span>
          </a>
        </div>

        {/* Liens de navigation */}
        <div
          className={`links flex gap-6 ${
            isMenuOpen
              ? 'flex-col absolute top-[12vh] left-0 w-full bg-black/90 py-4'
              : 'hidden md:flex'
          }`}
        >
          {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
            <div key={item} className="link">
              <a
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-green-600 transition-colors relative"
              >
                {t(`nav.${item}`)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200"></span>
              </a>
            </div>
          ))}
        </div>

        {/* Contrôles de langue et thème */}
        <div className="controls flex items-center gap-4">
          {/* Sélecteur de langue */}
          <div className="language-selector">
            <select
              onChange={(e) => handleLanguageChange(e.target.value)}
              value={language}
              className="bg-green-600 text-white px-2 py-1 rounded-md border border-green-600 hover:bg-green-700 transition-colors"
            >
              <option value="fr">Fr</option>
              <option value="en">En</option>
            </select>
          </div>

          {/* Bouton de changement de thème */}
          <div
            onClick={toggleTheme}
            className="theme-toggle p-2 cursor-pointer hover:scale-110 transition-transform"
          >
            {theme === 'dark' ? (
              <FaMoon className="text-white text-xl" />
            ) : (
              <FaSun className="text-white text-xl" />
            )}
          </div>
        </div>

        {/* Bouton menu hamburger */}
        <div
          className="hamburg text-2xl text-white cursor-pointer hover:text-green-600 transition-colors md:hidden"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;