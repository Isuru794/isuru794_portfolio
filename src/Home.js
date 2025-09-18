// Home.js
import React, { useState } from 'react';
import Hero from './components/Hero'; // Import the new Hero component
import './Home.css';

const Home = () => {
  const [showSoftSkills, setShowSoftSkills] = useState(false);

  const toggleSkills = () => {
    setShowSoftSkills(!showSoftSkills);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Career Section */}
      <section className="career-section">
        <h2 className="career-heading">My Career Journey</h2>
        <div className="career-grid">
          <div className="career-column">
            <div className="career-item">
              <div className="connector-line"></div>
              <span className="career-year">2020</span>
              <div className="career-details">
                <h3>Completed A/Ls</h3>
                <p>I completed my ALs at Eheliyagoda Central College</p>
              </div>
            </div>

            <div className="career-item">
              <div className="connector-line"></div>
              <span className="career-year">2023</span>
              <div className="career-details">
                <h3>Dived Deep into Fullstack</h3>
                <p>Learned React, Node.js, and MySQL. Created dynamic projects and sharpened my coding skills.</p>
              </div>
            </div>
          </div>

          <div className="career-column">
            <div className="career-item">
              <div className="connector-line"></div>
              <span className="career-year">2022</span>
              <div className="career-details">
                <h3>Started BSc in Software Engineering</h3>
                <p>Began my degree and explored the world of web development and programming.</p>
              </div>
            </div>

            <div className="career-item">
              <div className="connector-line"></div>
              <span className="career-year">2024</span>
              <div className="career-details">
                <h3>Started Internship</h3>
                <p>Got real-world experience working on POS systems and fullstack applications with a professional team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="soft-skills-section">
        <h2 className="section-heading">Soft Skills</h2>

        <div className={`soft-skills-content ${showSoftSkills ? 'show' : ''}`}>
          <ul>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Adaptability</li>
            <li>Creativity</li>
          </ul>
        </div>

        <button className="toggle-btn" onClick={toggleSkills}>
          {showSoftSkills ? 'Hide Skills' : 'Show Skills'}
        </button>
      </section>

      {/* Technical Skills Section */}
     <section className="skills-map">
  <h2 className="skills-heading">Technical Skills</h2>

  <div className="skills-map-container">
    <div className="skills-divider"></div>

    {/* Frontend Section */}
    <div className="center-node frontend-main">Frontend</div>
    <div className="frontend-skills"> {/* This is the new container */}
      <img src="./img/html.png" className="skill-item skill-html" alt="HTML5" title="HTML5" />
      <img src="/img/css.png" className="skill-item skill-css" alt="CSS3" title="CSS3" />
      <img src="/img/js.png" className="skill-item skill-js" alt="JavaScript" title="JavaScript" />
      <img src="/img/react.png" className="skill-item skill-react" alt="React" title="React" />
      <img src="/img/bootstrap.png" className="skill-item skill-bootstrap" alt="Bootstrap" title="Bootstrap" />
    </div>

    {/* Backend Section */}
    <div className="center-node backend-main">Backend</div>
    <div className="backend-skills"> {/* This is the new container */}
      <img src="/img/nodejs.png" className="skill-item skill-node" alt="Node.js" title="Node.js" />
      <img src="/img/mysql.png" className="skill-item skill-mysql" alt="MySQL" title="MySQL" />
      <img src="/img/php.png" className="skill-item skill-php" alt="PHP" title="PHP" />
      <img src="/img/laravel.png" className="skill-item skill-laravel" alt="Laravel" title="Laravel" />
    </div>
  </div>
</section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Isuru Dev. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
