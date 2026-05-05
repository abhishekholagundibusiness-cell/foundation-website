import { motion } from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';
import './Media.css';

const mediaItems = [
  {
    image: '/assets/images/banner.jpeg',
    title: 'Empowering Digital Futures on Wheels!',
    desc: 'The foundation recently announced a comprehensive scholarship program aiming to support 1000 rural students. The initiative marked a significant step towards bridging the digital divide.',
    logo: '📰 TIMES'
  },
  {
    image: '/assets/images/hero_bg.png',
    title: 'Awarded for Excellence in Community Service',
    desc: 'Recognized at the National NGO Summit for outstanding contributions to rural healthcare development. We thank them for this wonderful opportunity.',
    logo: '📰 EXPRESS'
  }
];

const Media = () => {
  return (
    <section id="media" className="media-section bg-light-blue">
      <div className="container">
        <h2 className="section-title">Media Coverage</h2>
        
        <div className="media-grid">
          {mediaItems.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="media-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="media-image-container">
                <img src={item.image} alt={item.title} className="media-image" />
                <div className="media-circle-accent"></div>
              </div>
              <div className="media-content">
                <h3 className="media-card-title">{item.title}</h3>
                <p className="media-desc">{item.desc}</p>
                <div className="media-footer">
                  <span className="media-logo-text">{item.logo}</span>
                  <button className="read-more-btn"><FaChevronUp /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
