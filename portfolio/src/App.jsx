import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from './components/hooks/useLanguage'; // Import du hook useLanguage

// Import des composants
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import MainSection from './components/sections/MainSection';
import SkillsSection from './components/sections/SkillsSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectSection from './components/sections/ProjectSection';
import ScrollToTopButton from './components/common/ScrollToTopButton';

function App() {
  const { language, handleLanguageChange } = useLanguage(); // Utilisation du hook useLanguage

  useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  return (
    <div>
      {/* Passer la langue et la fonction de changement à Navbar */}
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      
      {/* Passer la langue à chaque composant */}
      <MainSection language={language} />
      <AboutSection language={language} />
      <SkillsSection language={language} />
      <ServicesSection language={language} />
      <ProjectSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />

      {/* Bouton global */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;