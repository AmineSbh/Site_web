// src/components/common/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';

function Card({ image, title, description, button, animationDelay }) {
  return (
    <div
      className="project-card"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay={animationDelay}
    >
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <button className="project-button">{button}</button>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  animationDelay: PropTypes.string,
};

export default Card;