import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button
      onClick={scrollToTop}
      className="scroll-to-top"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '40px', // Taille réduite
        height: '40px', // Taille réduite
        backgroundColor: '#28a745', // Vert (Bootstrap success color)
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Légère ombre
        zIndex: 1000,
      }}
    >
      {/* Petite flèche vers le haut */}
      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>↑</span>
    </button>
    )
  );
}

export default ScrollToTopButton;
