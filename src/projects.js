import React, { useState } from 'react';
import './projects.css';

const projects = [
  {
    id: 1,
    title: 'Quick-Bill POS System',
    mainImage: '/img/POS-main.png',
    description:
      'Quick-Bill is a simple POS (Point of Sale) system made for small businesses. It helps to print invoices, check past transactions, and create transaction reports.',
    functions: [
      'Printing invoices with company details',
      'Viewing and managing transactions',
      'Generating transaction reports',
      'Simply managing products and sales',
      'Easy checkout process',
      'Simple settings to add company name, address, and contact info',
    ],
    screenshots: [
      '/img/pos-ss1.png',
      '/img/pos-ss2.png',
      '/img/pos-ss3.png',
      '/img/pos-ss0.png',
      '/img/pos-ss5.png',
      '/img/POS-ss8.png',
      '/img/POS-ss9.png',
      '/img/pos-ss6.png',
    ],
    technologies: {
      frontend: ['HTML', 'CSS', 'JavaScript'],
      backend: ['PHP', 'MySQL'],
      pdfGeneration: ['FPDF (fpdf186)'],
    },
  },
  {
    id: 3,
    title: 'Apptota Solutions Company Website',
    mainImage: '/img/apptota-main.png',
    description: 'A professional company website for Apptota Solutions, designed to showcase services, portfolio, and contact information. The website is responsive and reflects the brand’s modern identity. It is already live at apptota.com.',
    functions: ['Company introduction section', 'Services showcase', 'Contact form', 'User login option' , 'Responsive layout'],
    screenshots: [ '/img/apptota-ss1.png' , '/img/apptota-ss2.png' , '/img/apptota-ss3.png' , '/img/apptota-ss4.png' , '/img/apptota-ss5.png', '/img/apptota-ss6.png'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
  {
    id: 2,
    title: 'MetroMart Supermarket Landing Page',
    mainImage: '/img/metromart.png',
    description: 'A modern, well-designed landing page for MetroMart Supermarket, showcasing the interface for an e-commerce platform. The page includes sections like product categories, promotions, and contact information. This is a front-end-only interface, already hosted on metromartmakola.com.',
    functions: ['Responsive layout', 'Product category display', 'Promotions section', 'Contact information'],
    screenshots: ['/img/metromart-ss1.png', '/img/metromart-ss2.png' , '/img/metromart-ss3.png' 
         , '/img/metromart-ss4.png' , , '/img/metromart-ss5.png' , '/img/metromart-ss6.png'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
  }
 
  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const closeModal = () => setSelectedProject(null);
  const closeImageModal = () => setFullscreenImage(null);

  return (
    <div className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtext">Click on any card to see more details</p>

      <div className="project-card-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.mainImage} alt={project.title} className="card-image" />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            <h2 className="modal-heading">{selectedProject.title}</h2>
            <img src={selectedProject.mainImage} alt="Main" className="main-detail-image" />
            <p className="project-description">{selectedProject.description}</p>

            <h4>Functions:</h4>
            <ul>
              {selectedProject.functions.map((func, index) => (
                <li key={index}>{func}</li>
              ))}
            </ul>

            <h4>Screenshots:</h4>
            <div className="screenshot-gallery">
              {selectedProject.screenshots.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Screenshot ${index}`}
                  onClick={() => setFullscreenImage(img)}
                  className="screenshot-clickable"
                />
              ))}
            </div>

            <h4>Technologies Used:</h4>
            {Array.isArray(selectedProject.technologies) ? (
              <p>{selectedProject.technologies.join(', ')}</p>
            ) : (
              <div>
                <p><strong>Frontend:</strong> {selectedProject.technologies.frontend.join(', ')}</p>
                <p><strong>Backend:</strong> {selectedProject.technologies.backend.join(', ')}</p>
                <p><strong>PDF Generation:</strong> {selectedProject.technologies.pdfGeneration.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeImageModal}>
          <div className="fullscreen-image-container" onClick={(e) => e.stopPropagation()}>
            <button className="fullscreen-close" onClick={closeImageModal}>
              ×
            </button>
            <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
