import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope 
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/votrenom" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/votrenom" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/votrenom" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:votre.email@example.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Votre Nom. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;