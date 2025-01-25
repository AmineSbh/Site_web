import React from 'react';
import { useTranslation } from 'react-i18next'; // Utilisation du hook useTranslation

import "../css/footer.css";  // Assurez-vous d'ajouter le CSS

function Footer() {
  const { t } = useTranslation();  // Récupération de la fonction de traduction

  return (
    <footer id="Footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('footer.title')}</h3>
            <p>{t('footer.contactInfo')}</p>
            <p>{t('footer.address')}</p>
          </div>

          <div className="footer-section">
            <h3>{t('footer.social')}</h3>
            <div className="social-links">
              <a href="#" className="social-link">{t('footer.github')}</a>
              <a href="#" className="social-link">{t('footer.linkedin')}</a>
              <a href="#" className="social-link">{t('footer.twitter')}</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>{t('footer.copyright')}</h3>
            <p>{t('footer.copyrightText')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
