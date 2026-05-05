import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__logo">Anjanadevi <span>Foundation</span></h3>
            <p className="footer__desc">
              Dedicated to creating sustainable positive change in society through education, healthcare, and empowerment initiatives.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-icon"><FaFacebook /></a>
              <a href="#" className="footer__social-icon"><FaTwitter /></a>
              <a href="#" className="footer__social-icon"><FaInstagram /></a>
              <a href="#" className="footer__social-icon"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">What We Do</a></li>
              <li><a href="#impact">Our Impact</a></li>
              <li><a href="#media">Media</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <ul className="footer__contact">
              <li><FaMapMarkerAlt className="footer__contact-icon" /><span>123 Foundation Street, City, Country</span></li>
              <li><FaEnvelope className="footer__contact-icon" /><span>info@anjanadevifoundation.org</span></li>
              <li><FaPhone className="footer__contact-icon" /><span>+1 234 567 8900</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Anjanadevi Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
