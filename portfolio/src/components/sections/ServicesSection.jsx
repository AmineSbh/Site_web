import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from '../common/Card'; // Importez le composant Card

function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="Services">
      <div className="services-container">
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          {t('services.title')}
        </h2>
        
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1} /* Par défaut : 1 slide visible */
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            480: { slidesPerView: 1 }, // 1 slide pour les petits écrans
            768: { slidesPerView: 2 }, // 2 slides pour les tablettes
            1024: { slidesPerView: 3 }, // 3 slides pour les grands écrans
          }}
          className="services-swiper"
        >

          <SwiperSlide>
            <Card
              title={t('services.tutoring.title')}
              description={t('services.tutoring.description')}
              animationDelay="400"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              title={t('services.webdev.title')}
              description={t('services.webdev.description')}
              animationDelay="500"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              title={t('services.bots.title')}
              description={t('services.bots.description')}
              animationDelay="600"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              title={t('services.scraping.title')}
              description={t('services.scraping.description')}
              animationDelay="700"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              title={t('services.freelance.title')}
              description={t('services.freelance.description')}
              animationDelay="800"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default ServicesSection;