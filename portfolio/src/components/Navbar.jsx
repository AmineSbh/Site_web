import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.body.classList.toggle('light-theme');
  };

  return (
    <nav className={`navbar ${theme}`} data-aos="none">
      <div className="nav-container">
        <div className="logo">
          Amine <span>SABBAHI</span>
        </div>
        <div className="links">
          {['home', 'about', 'skills', 'services', 'contact'].map((item) => (
            <div key={item} className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
              <a href={`#${item.charAt(0).toUpperCase() + item.slice(1)}`}>
                {t(`nav.${item}`)}
              </a>
            </div>
          ))}
        </div>
        <div className="controls">
          <div className="language-selector">
            <select
              onChange={(e) => handleLanguageChange(e.target.value)}
              value={i18n.language}
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? '🌙' : '🌞'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;