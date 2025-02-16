import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLaptopCode, FaRobot, FaGlobe } from 'react-icons/fa';

function ServicesSection() {
  const { t } = useTranslation();

  // Liste des services
  const services = [
    {
      id: 1,
      icon: <FaLaptopCode size={50} color="#077b32" />, // Icône verte
      title: t('services.webdev.title'),
      description: t('services.webdev.description'),
    },
    {
      id: 2,
      icon: <FaRobot size={50} color="#077b32" />,
      title: t('services.bots.title'),
      description: t('services.bots.description'),
    },
    {
      id: 3,
      icon: <FaGlobe size={50} color="#077b32" />,
      title: t('services.scraping.title'),
      description: t('services.scraping.description'),
    },
  ];

  return (
    <section id="Services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold text-white mb-12"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          {t('services.title')}
        </h2>

        <div
          className="flex flex-wrap justify-center gap-8"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card bg-gray-800 border-2 border-green-600 shadow-lg shadow-green-600/50 p-8 rounded-lg text-center w-80 transition-transform hover:-translate-y-2"
            >
              <div className="service-icon mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">{service.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;