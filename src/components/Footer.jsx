import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <h3 className="footer-title">Anjanadevi<span>Foundation</span></h3>
            <p className="footer-text">
              Dedicated to creating sustainable positive change in society through education, healthcare, and empowerment initiatives.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-links-wrapper">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">What We Do</a></li>
              <li><a href="#impact">Our Impact</a></li>
              <li><a href="#media">Media</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-list">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Foundation Street, City, Country 12345</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>info@anjanadevifoundation.org</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>+1 234 567 8900</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Anjanadevi Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
