import { motion } from 'framer-motion';
import { FaArrowRight, FaImage } from 'react-icons/fa';
import './Media.css';

const mediaItems = [
  {
    date: 'March 15, 2026',
    title: 'Anjanadevi Foundation Launches New Education Drive',
    desc: 'The foundation recently announced a comprehensive scholarship program aiming to support 1000 rural students...',
  },
  {
    date: 'January 22, 2026',
    title: 'Awarded for Excellence in Community Service',
    desc: 'Recognized at the National NGO Summit for outstanding contributions to rural healthcare development...',
  },
  {
    date: 'November 10, 2025',
    title: 'Mega Health Camp Successfully Concluded',
    desc: 'Over 5000 individuals received free medical checkups and essential medicines in our recent outreach program...',
  }
];

const Media = () => {
  return (
    <section id="media" className="media-section">
      <div className="container">
        <h2 className="section-title">Media Coverage</h2>
        
        <div className="media-grid">
          {mediaItems.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="media-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="media-image-placeholder">
                <FaImage className="placeholder-icon" />
              </div>
              <div className="media-content">
                <span className="media-date">{item.date}</span>
                <h3 className="media-card-title">{item.title}</h3>
                <p className="media-desc">{item.desc}</p>
                <a href="#" className="read-more">
                  Read More <FaArrowRight className="arrow" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
