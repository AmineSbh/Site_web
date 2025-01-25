import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import du hook de traduction

const ContactSection = () => {
  const { t } = useTranslation(); // Accès à la fonction de traduction
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simuler l'envoi
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Contact">
      <div className="contact-container">
        <h2>{t('contact.title')}</h2> {/* Titre traduit */}
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t('contact.form.name')}</label> {/* Label pour le champ "Nom" */}
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              placeholder={t('contact.form.name')} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t('contact.form.email')}</label> {/* Label pour le champ "Email" */}
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              placeholder={t('contact.form.email')} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t('contact.form.message')}</label> {/* Label pour le champ "Message" */}
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              placeholder={t('contact.form.message')} 
            />
          </div>

          <button className="custom-btn" type="submit" disabled={loading}>
            {loading ? t('contact.form.submit') : t('contact.form.submit')} {/* Texte du bouton */}
          </button>
        </form>

        {status === 'success' && (
          <div className="success-message">{t('contact.form.submit')}</div> 
        )}
        {status === 'error' && (
          <div className="error-message">{t('contact.form.submit')}</div> 
        )}
      </div>
    </section>
  );
};

export default ContactSection;
