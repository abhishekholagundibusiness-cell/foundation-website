import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-grid">
          
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-backdrop glass-dark"></div>
            <img src="/assets/images/owner_photo.jpeg" alt="Founder" className="about-image" />
            <div className="experience-badge glass">
              <span className="years">15+</span>
              <span className="text">Years of Impact</span>
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="about-heading">Changing Their World, Supporting Their Dreams</h3>
            <p className="about-text">
              Founded on the principles of compassion and equity, the Anjanadevi Foundation strives to bridge the gap between privilege and need. Our journey began with a simple belief: every individual deserves access to basic rights, education, and opportunities to thrive.
            </p>
            <p className="about-text">
              We work tirelessly at the grassroots level, focusing on sustainable development rather than temporary relief. Through strategic partnerships and community-driven approaches, we are building ecosystems where vulnerable populations can realize their true potential.
            </p>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">✨</div>
                <div className="feature-text">Holistic Development</div>
              </div>
              <div className="feature">
                <div className="feature-icon">🤝</div>
                <div className="feature-text">Community Driven</div>
              </div>
            </div>
            <a href="#impact" className="btn btn-primary mt-4">See Our Impact</a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
