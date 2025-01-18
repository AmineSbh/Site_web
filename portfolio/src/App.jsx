import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import du CSS pour AOS

// Import des composants séparés
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';

function App() {
  useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  return (
    <div>
      {/* Menu de navigation */}
      <Navbar />
      
      {/* Sections du site */}
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ContactSection language={language} />
    </div>
  );
}

export default App;
