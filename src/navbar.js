import React, { useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navbarLinks = document.querySelector('.navbar-links');
    const navLinks = document.querySelectorAll('.navbar-links a');  // Get all the links

    if (hamburger && navbarLinks) {
      const toggleNavbar = () => {
        navbarLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
      };

      // Close navbar after clicking any link on mobile view
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navbarLinks.classList.remove('active');
          hamburger.classList.remove('active');
        });
      });

      hamburger.addEventListener('click', toggleNavbar);

      // Cleanup event listeners on component unmount
      return () => {
        navLinks.forEach(link => {
          link.removeEventListener('click', () => {
            navbarLinks.classList.remove('active');
            hamburger.classList.remove('active');
          });
        });
        hamburger.removeEventListener('click', toggleNavbar);
      };
    }
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./img/logo11.png" alt="Logo" />
      </div>
      
      {/* Hamburger Menu Button */}
      <button className="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navbar Links */}
      <ul className="navbar-links">
        <li><NavLink to="/" exact="true">Home</NavLink></li>
        <li><NavLink to="/AboutMe">About</NavLink></li>
        <li><NavLink to="/Resume">Resume</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/HireMe">Hire Me</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
