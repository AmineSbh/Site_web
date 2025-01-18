import React, { useState } from 'react';
import { translations } from '../functions/translation.js';

function ContactSection({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const t = translations[language].contact;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simuler l'envoi (à remplacer par votre vraie logique d'envoi)
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="Contact">
      <div className="contact-container" data-aos="fade-up" data-aos-duration="1500">
        <h2>{t.title}</h2>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.form.name}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.form.email}
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.form.message}
              required
            />
          </div>
          
          <button 
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? '...' : t.form.submit}
          </button>
          
          {status === 'sent' && (
            <div className="success-message">
              Message envoyé avec succès !
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;