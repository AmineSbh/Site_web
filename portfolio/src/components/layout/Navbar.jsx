import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';
import { useScroll } from '../hooks/useScroll';
import { useLanguage } from '../hooks/useLanguage';

function Navbar() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isScrolled = useScroll();
  const { language, handleLanguageChange } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full h-[12vh] z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-black/50'
      }`}
    >
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-white hover:scale-110 transition-transform">
          <a href="#Home" className="no-underline text-inherit">
            Amine <span className="text-green-500 drop-shadow-lg">SABBAHI</span>
          </a>
        </div>

        {/* Liens de navigation */}
        <div
          className={`absolute top-[12vh] left-0 w-full bg-black/90 p-6 md:p-0 md:relative md:flex md:bg-transparent md:top-0 md:w-auto transition-all duration-300 ${
            isMenuOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsMenuOpen(false)}
              className="block md:inline-block px-4 py-2 text-white hover:text-green-500 transition-all relative group"
            >
              {t(`nav.${item}`)}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Contrôles */}
        <div className="flex items-center gap-4">
          {/* Sélecteur de langue */}
          <select
            onChange={(e) => handleLanguageChange(e.target.value)}
            value={language}
            className="bg-green-600 text-white px-2 py-1 rounded-md border border-green-600 hover:bg-green-700 transition"
          >
            <option value="fr">Fr</option>
            <option value="en">En</option>
          </select>

          {/* Changement de thème */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:scale-110 transition-transform"
          >
            {theme === 'dark' ? (
              <FaMoon className="text-white text-xl" />
            ) : (
              <FaSun className="text-white text-xl" />
            )}
          </button>

          {/* Bouton menu hamburger */}
          <button
            className="md:hidden text-2xl text-white hover:text-green-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
