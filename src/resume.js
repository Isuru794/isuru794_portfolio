import React from "react";
import { saveAs } from "file-saver";
import "./resume.css";

const Resume = () => {
  const imageUrls = [
    `${process.env.PUBLIC_URL}/resume1.png`,
    `${process.env.PUBLIC_URL}/resume2.png`,
  ];

  const pdfUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  const handleDownload = () => {
    saveAs(pdfUrl, "Isuru_Resume.pdf");
  };

  return (
    <div className="resume-section">
      <h1 className="resume-title">My Resume</h1>

      {/* Show all resume images */}
      <div className="resume-images">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Resume Page ${index + 1}`}
            className="resume-image"
          />
        ))}
      </div>

      <div>
        <button onClick={handleDownload} className="download-btn">
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default Resume;
