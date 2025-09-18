// Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css'; // You can keep the same Home.css or create a new Hero.css

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-name">
          <span className="highlight">Hi, I'm</span> Isuru Sumedha
        </h1>
        <p className="role-text">Fullstack Developer</p>
        <p className="intro-text">
          As a Fullstack Developer, I build smooth and responsive web apps, handling both frontend and backend with care and passion.
        </p>
        <button className="hire-btn" onClick={() => navigate("/Hireme")}>
          Hire Me
        </button>
      </div>
      <div className="hero-image">
        <img src="/img/hero-image.png" alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
