import React, { useState, useEffect } from 'react';
import './About_me.css';

function AboutMe() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const images = [
    '/img/about2.jpeg',
    '/img/about3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // change image every 4s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about-me-section">
      <div className="about-me-left">
        <h2 className="about-me-heading fade-text">About Me</h2>
        <h3 className="about-me-subheading fade-text">A passionate Full-Stack Developer</h3>

        <p className="about-me-paragraph fade-text">
          Hi, I'm Isuru, an aspiring full-stack developer from Sri Lanka with a keen interest in crafting smooth, user-friendly applications for the web.
          <span className={`expand-text ${isExpanded ? 'show' : ''}`}>
            <br />I love learning new technologies and improving my coding skills every day. My journey into tech started with curiosity and has grown into a strong passion for software development.
          </span>
          <span 
            className="toggle-expand" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less ⬏' : 'Read More ⬎'}
          </span>
        </p>
      </div>

      <div className="about-me-right">
        <div className="image-slider">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`About me ${index}`}
              className={`slider-image ${currentImageIndex === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
