import React from "react";
import { useTranslation } from "react-i18next";
import "../css/projects.css"; // Assurez-vous d'inclure le fichier CSS

function ProjectSection() {
  const { t } = useTranslation(); // Utiliser le hook pour récupérer la fonction de traduction

  // Liste des projets (structure JSON pour simplifier)
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
  ];

  // Duplique dynamiquement les projets pour le défilement infini
  const duplicatedProjects = [...projects];

  return (
    <section id="Projects">
      <div className="projects-container">
        {/* Titre de la section */}
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          {t("projects.title")}
        </h2>

        {/* Liste des projets avec un défilement horizontal */}
        <div className="projects-list">
          {duplicatedProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button>{project.button}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
