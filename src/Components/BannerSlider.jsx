import React, { useState, useEffect } from 'react';
import '../styles/BannerSlider.css';

const BannerSlider = ({ slides, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [slides, interval]);

  const currentSlide = slides[currentIndex];

  return (
    <div className="image-text-carousel">
      <div className="carousel-image">
        <img src={currentSlide.imageSrc} alt={currentSlide.altText} />
      </div>
      <div className="carousel-text">
        <h2>{currentSlide.title}</h2>
        <p>{currentSlide.description}</p>
      </div>
    </div>
  );
};

export default BannerSlider;
