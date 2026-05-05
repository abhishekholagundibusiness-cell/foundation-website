import { motion } from 'framer-motion';
import { FaUsers, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <h2 className="section-title">About Us</h2>

        <div className="about-grid">
          
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-circle-container">
              <div className="decorative-circle-large"></div>
              <img src="/assets/images/owner_photo.jpeg" alt="Founder" className="about-image-circle" />
              <div className="decorative-circle-small"></div>
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Foundation Leaders</h3>
              <p className="founder-title">Founders</p>
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="about-heading">Changing Their World, Supporting Their Dreams</h3>
            <p className="about-text">
              Founded on the principles of compassion and equity, the Anjanadevi Foundation strives to bridge the gap between privilege and need. Our journey began with a simple belief: every individual deserves access to basic rights, education, and opportunities to thrive.
            </p>
            <p className="about-text mt-4">
              We work tirelessly at the grassroots level, focusing on sustainable development rather than temporary relief. Through strategic partnerships and community-driven approaches, we are building ecosystems where vulnerable populations can realize their true potential.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon"><FaAward /></div>
                <div className="feature-text-block">
                  <span className="feature-num">15+</span>
                  <span className="feature-text">Years of Service</span>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon"><FaUsers /></div>
                <div className="feature-text-block">
                  <span className="feature-num">50k+</span>
                  <span className="feature-text">Lives Impacted</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
