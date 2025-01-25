import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../css/services.css";

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
          slidesPerView={1}
          navigation
          pagination={{ 
            clickable: true, 
            dynamicBullets: true 
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="services-swiper"
        >
          <SwiperSlide>
            <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
              <h3>{t('services.tutoring.title')}</h3>
              <p>{t('services.tutoring.description')}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
              <h3>{t('services.webdev.title')}</h3>
              <p>{t('services.webdev.description')}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
              <h3>{t('services.bots.title')}</h3>
              <p>{t('services.bots.description')}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700">
              <h3>{t('services.scraping.title')}</h3>
              <p>{t('services.scraping.description')}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
              <h3>{t('services.freelance.title')}</h3>
              <p>{t('services.freelance.description')}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default ServicesSection;