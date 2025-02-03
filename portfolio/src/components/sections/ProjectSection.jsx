import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "../common/Card"; // Importez le composant Card

function ProjectSection() {
  const { t } = useTranslation(); // Utiliser le hook pour récupérer la fonction de traduction

  // Liste des projets
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
    <section id="Projects">
      <div className="projects-container">
        {/* Titre de la section */}
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          {t("projects.title")}
        </h2>

        {/* Swiper pour la liste des projets */}
        <Swiper
          modules={[Navigation, Pagination, A11y]} // Modules nécessaires
          spaceBetween={20} // Espacement entre les slides
          slidesPerView={1} // Nombre de slides visibles
          navigation // Boutons de navigation (précédent/suivant)
          pagination={{
            clickable: true, // Pagination cliquable
            dynamicBullets: true, // Pagination dynamique
          }}
          breakpoints={{
            480: { slidesPerView: 1 }, // 1 slide pour les petits écrans
            768: { slidesPerView: 2 }, // 2 slides pour les tablettes
            1024: { slidesPerView: 3 }, // 3 slides pour les grands écrans
          }}
          className="projects-swiper"
        >
          {/* Ajout des slides Swiper */}
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <Card
                image={project.image}
                title={project.title}
                description={project.description}
                button={project.button}
                animationDelay={400 + index * 100} // Augmente le délai pour chaque projet
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectSection;