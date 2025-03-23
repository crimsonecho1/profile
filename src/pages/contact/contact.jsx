import "./contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaYoutube, FaGithub, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Get in <span>Touch</span></h2>
      <p className="contact-text">If you need a professional website or have any questions, please feel free to contact me.</p>
      
      <div className="contact-container">
        {/* معلومات الاتصال */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>abdomohamedhelal2009@gmail.com</p>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <p>+201019358366</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>location: Egypt</p>
          </div>
          
          {/* أيقونات التواصل الاجتماعي */}
          <div className="social-icons">
            <a href="#1" target="_blank" rel="noopener noreferrer" className="github">
              <FaGithub />
            </a>
            <a href="https://www.youtube.com/channel/UCJG3XSYeI5nw-EcxHxHQBbw" target="_blank" rel="noopener noreferrer" className="youtube">
              <FaYoutube />
            </a>
            <a href="https://wa.me/201019358366" target="_blank" rel="noopener noreferrer" className="whatsapp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* نموذج التواصل */}
        <form className="contact-form">
          <input type="text" placeholder="username" required />
          <input type="email" placeholder="email" required />
          <textarea placeholder="message" rows="5" required></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
