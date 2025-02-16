import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card from "../common/Card"; // On garde le composant Card

function ProjectSection() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      image: "project1.jpg",
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      button: t("projects.project1.button"),
    },
    {
      id: 2,
      image: "project2.jpg",
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      button: t("projects.project2.button"),
    },
    {
      id: 3,
      image: "project3.jpg",
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      button: t("projects.project3.button"),
    },
    {
      id: 4,
      image: "project4.jpg",
      title: t("projects.project4.title"),
      description: t("projects.project4.description"),
      button: t("projects.project4.button"),
    },
  ];

  return (
    <section id="Projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold text-white mb-12"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          {t("projects.title")}
        </h2>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1} // Par défaut, 1 slide visible
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            480: { slidesPerView: 1 }, // 1 slide pour les petits écrans
            768: { slidesPerView: 2 }, // 2 slides pour les tablettes
            1024: { slidesPerView: 3 }, // 3 slides pour les grands écrans
          }}
          className="w-full relative"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Card
                image={project.image}
                title={project.title}
                description={project.description}
                viewLink={project.viewLink}
                codeLink={project.codeLink}
              />
            </SwiperSlide>
          ))}

          {/* Boutons de navigation personnalisés */}
          <div className="swiper-button-prev bg-black/70 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 transition-colors">
            <span className="text-white text-2xl">&#8249;</span>
          </div>
          <div className="swiper-button-next bg-black/70 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 transition-colors">
            <span className="text-white text-2xl">&#8250;</span>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectSection;