import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function MainSection() {
  const { t } = useTranslation();
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  // Utilisation des textes traduits
  const texts = [
    t('main.roles.data_engineer'),
    t('main.roles.developer'),
  ];

  const speed = 100;
  const eraseSpeed = 50;
  const delayBetweenWords = 1000;

  const writeCharacter = () => {
    if (charIndex < texts[textIndex].length) {
      setCharIndex((prev) => prev + 1);
    } else {
      setTimeout(() => setIsErasing(true), delayBetweenWords);
    }
  };

  const eraseCharacter = () => {
    if (charIndex > 0) {
      setCharIndex((prev) => prev - 1);
    } else {
      setTextIndex((prev) => (prev + 1) % texts.length);
      setIsErasing(false);
    }
  };

  const handleTypewriterEffect = () => {
    if (isErasing) {
      eraseCharacter();
    } else {
      writeCharacter();
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(handleTypewriterEffect, isErasing ? eraseSpeed : speed);
    return () => clearTimeout(timeoutId);
  }, [charIndex, textIndex, isErasing]);

  return (
    <section id="Home" className="w-full h-[88vh] flex justify-evenly items-center mt-[12vh]">
      {/* Image */}
      <div
        className="relative w-[400px] h-[65vh] rounded-full overflow-hidden shadow-2xl shadow-green-600 transform-gpu hover:animate-pulse"
        data-aos="zoom-out"
        data-aos-duration="3000"
      >
        <img
          src="src/assets/images/photo_linkdin.jpeg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Contenu */}
      <div className="w-[40%] min-h-[100px]">
        <h1
          className="text-5xl font-bold"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="700"
        >
          {t('main.greeting')} <span className="text-green-600 text-shadow-lg shadow-green-600">Amine</span>
        </h1>

        {/* Typewriter Effect */}
        <div
          className="text-4xl font-semibold mt-4"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="900"
        >
          {t('main.iam')}{' '}
          <span className="text-green-600 text-shadow-lg shadow-green-600">
            {texts[textIndex].substring(0, charIndex)}
          </span>
          <label className="animate-blink">|</label>
        </div>

        {/* Description */}
        <p
          className="text-lg mt-4"
          data-aos="flip-down"
          data-aos-duration="1500"
          data-aos-delay="1100"
        >
          {t('main.intro')}
        </p>

        {/* Bouton de téléchargement */}
        <button
          className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {t('main.download')}
        </button>
      </div>
    </section>
  );
}

export default MainSection;