import { motion } from 'framer-motion';
import { FaUsers, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            About Us
          </motion.h2>
        </div>

        <div className="about__grid">
          {/* Image side */}
          <motion.div
            className="about__image-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="about__circle-wrap">
              <div className="about__circle-decor"></div>
              <img
                src="/assets/images/owner_photo.jpeg"
                alt="Founders"
                className="about__photo"
              />
              <div className="about__circle-dot"></div>
            </div>
            <div className="about__founder-info">
              <h3>Foundation Leaders</h3>
              <p>Founders</p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="about__text-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="about__heading">Changing Their World, Supporting Their Dreams</h3>
            <p className="about__body">
              Founded on the principles of compassion and equity, the Anjanadevi Foundation strives to bridge the gap between privilege and need. Our journey began with a simple belief: every individual deserves access to basic rights, education, and opportunities to thrive.
            </p>
            <p className="about__body">
              We work tirelessly at the grassroots level, focusing on sustainable development rather than temporary relief. Through strategic partnerships and community-driven approaches, we are building ecosystems where vulnerable populations can realize their true potential.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-icon"><FaAward /></div>
                <div>
                  <span className="about__stat-num">15+</span>
                  <span className="about__stat-label">Years of Service</span>
                </div>
              </div>
              <div className="about__stat">
                <div className="about__stat-icon"><FaUsers /></div>
                <div>
                  <span className="about__stat-num">50k+</span>
                  <span className="about__stat-label">Lives Impacted</span>
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
