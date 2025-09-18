import React from 'react';
import './HireMe.css';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaFacebookMessenger } from 'react-icons/fa';

const HireMe = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Isuru, I would like to connect with you!");
    const phone = "0713560794"; // change to your number
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section className="hire-me-section">
      <div className="hire-me-top">
        <h1 className="page-title">Let's Work Together</h1>
        <p className="page-subtext">I’m open to freelance projects, internships, or just a friendly tech chat.</p>
      </div>

      <div className="hire-content">
        <div className="hire-left">

          <div className="contact-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Mobile</h4>
              <p>0713560794</p>
              <p>Feel free to reach out for quick chats or calls.</p>
            </div>
          </div>

          <div className="contact-box">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p><a href="mailto:your@email.com">isurusumedha872@gmail.com</a></p>
              <p>I usually reply within 24 hours.</p>
            </div>
          </div>

          <div className="contact-icons">
  <div>
    <h4>Find Me</h4>
    <div className="social-icons">
      <a href="https://github.com/isuru794" target="_blank" rel="noopener noreferrer">
        <img src="/img/github.png" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/isuru-sumedha-7288b2263/" target="_blank" rel="noopener noreferrer">
        <img src="/img/linkedin.png" alt="LinkedIn" />
      </a>
     
    </div>
  </div>
</div>


        </div>

        <div className="hire-right">
          <h3>Send Me a Message</h3>
          <textarea placeholder="Type your message..." className="message-box"></textarea>
          <button onClick={handleWhatsApp} className="whatsapp-btn">Send via WhatsApp</button>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
