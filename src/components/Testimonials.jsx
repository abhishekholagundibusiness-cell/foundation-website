import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-header">
        <div className="container">
          <h2 className="testimonials-title">WHAT<br/>RENOWNED<br/>PERSONALITIES SAY<br/>About Us</h2>
        </div>
      </div>
      
      <div className="testimonials-body">
        <div className="container">
          <motion.div 
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="testimonial-image-container">
              <img src="/assets/images/owner_photo.jpeg" alt="Testimonial" className="testimonial-image" />
              <div className="play-btn-wrapper">
                <button className="play-btn"><FaPlay style={{marginLeft: '4px'}} /></button>
                <div className="play-line"></div>
              </div>
            </div>
            
            <div className="testimonial-content">
              <h3 className="testimonial-name">Eknath Shinde</h3>
              <p className="testimonial-title">Former Chief Minister of Maharashtra</p>
              <p className="testimonial-quote">
                We are proud to have an institution like Anjanadevi Foundation that is working for the upliftment of underprivileged children.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
