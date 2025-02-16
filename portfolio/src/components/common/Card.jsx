import React from 'react';
import PropTypes from 'prop-types';

function Card({ image, title, description, viewLink, codeLink, animationDelay }) {
  return (
    <div 
      className="relative rounded-lg shadow-lg overflow-hidden bg-gray-900 border-2 border-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105 mx-auto w-full max-w-md"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay={animationDelay}
    >
      <img 
        draggable="false" 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
      <div className="absolute top-[85%] left-0 w-full h-full bg-black bg-opacity-90 flex flex-col transition-all duration-300 ease-in-out hover:top-[30%]">
        <div className="bg-green-700 p-4 text-center">
          <h3 className="text-2xl font-bold text-black">{title}</h3>
        </div>
        <div className="p-6 flex-grow">
          <p className="text-gray-300 text-lg leading-relaxed mb-4">{description}</p>
          <div className="flex gap-3 justify-center">
            <a
              href={viewLink}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-green-700 text-black font-medium text-lg transition-all duration-300 ease-in-out hover:bg-green-600 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-eye mr-2"></i> Voir
            </a>
            <a
              href={codeLink}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-green-700 text-black font-medium text-lg transition-all duration-300 ease-in-out hover:bg-green-600 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code <i className="fas fa-code ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  viewLink: PropTypes.string,
  codeLink: PropTypes.string,
  animationDelay: PropTypes.number,
};

Card.defaultProps = {
  viewLink: '#',
  codeLink: '#',
  animationDelay: 0,
};

export default Card;