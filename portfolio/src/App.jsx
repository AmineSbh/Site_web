import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import des composants
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const [language, setLanguage] = useState('fr'); // 'fr' comme langue par défaut

  useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  // Fonction pour changer la langue
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

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