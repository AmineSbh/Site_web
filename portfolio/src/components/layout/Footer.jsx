import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope 
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex justify-center gap-5 mb-5">
          <a href="https://github.com/votrenom" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-300 text-2xl transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/votrenom" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-300 text-2xl transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/votrenom" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-300 text-2xl transition-colors duration-300">
            <FaTwitter />
          </a>
          <a href="mailto:votre.email@example.com" className="text-green-500 hover:text-green-300 text-2xl transition-colors duration-300">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Votre Nom. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;