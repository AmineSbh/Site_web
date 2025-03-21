import React, { useState } from "react"; // Importez useState
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card from "../common/Card"; // On garde le composant Card

function ProjectSection() {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(null); // État pour gérer la carte active

  const projects = [
    {
      id: 1,
      image: "language_app.jpg", // Remplacez par le chemin de l'image
      title: t("projects.language_app.title"),
      description: t("projects.language_app.description"),
      viewLink: "#", // Lien vers le projet (à remplacer)
      codeLink: "#", // Lien vers le code source (à remplacer)
    },
    {
      id: 2,
      image: "pdf_reader.jpg", // Remplacez par le chemin de l'image
      title: t("projects.pdf_reader.title"),
      description: t("projects.pdf_reader.description"),
      viewLink: "#", // Lien vers le projet (à remplacer)
      codeLink: "#", // Lien vers le code source (à remplacer)
    },
    {
      id: 3,
      image: "commitment_tracker.jpg", // Remplacez par le chemin de l'image
      title: t("projects.commitment_tracker.title"),
      description: t("projects.commitment_tracker.description"),
      viewLink: "#", // Lien vers le projet (à remplacer)
      codeLink: "#", // Lien vers le code source (à remplacer)
    },
    {
      id: 4,
      image: "interview_prep.jpg", // Remplacez par le chemin de l'image
      title: t("projects.interview_prep.title"),
      description: t("projects.interview_prep.description"),
      viewLink: "#", // Lien vers le projet (à remplacer)
      codeLink: "#", // Lien vers le code source (à remplacer)
    },
  ];

  // Fonction pour gérer le clic sur une carte
  const handleCardClick = (id) => {
    if (activeCard === id) {
      setActiveCard(null); // Fermer la carte si elle est déjà active
    } else {
      setActiveCard(id); // Ouvrir la carte cliquée
    }
  };

  return (
    <section id="Projects">
      <div className="projects-container">
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          {t("projects.title")}
        </h2>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1} // Par défaut, 1 slide visible
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            480: { slidesPerView: 1 }, // 1 slide pour les petits écrans
            768: { slidesPerView: 2 }, // 2 slides pour les tablettes
            1024: { slidesPerView: 3 }, // 3 slides pour les grands écrans
          }}
          className="projects-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                onClick={() => handleCardClick(project.id)} // Gérer le clic sur mobile
                className={activeCard === project.id ? "active" : ""} // Ajouter une classe active
              >
                <Card
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  viewLink={project.viewLink}
                  codeLink={project.codeLink}
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Boutons de navigation personnalisés */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectSection;