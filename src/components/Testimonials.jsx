import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      {/* Blue header band */}
      <div className="testimonials__header">
        <div className="testimonials__header-bg"></div>
        <div className="testimonials__header-overlay"></div>
        <div className="container">
          <h2 className="testimonials__heading">
            WHAT RENOWNED<br />PERSONALITIES SAY<br />About Us
          </h2>
        </div>
      </div>

      {/* Card body */}
      <div className="testimonials__body">
        <div className="container">
          <motion.div
            className="testimonials__card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="testimonials__photo-wrap">
              <img src="/assets/images/owner_photo.jpeg" alt="Leader" className="testimonials__photo" />
              <div className="testimonials__play-wrap">
                <button className="testimonials__play-btn"><FaPlay style={{ marginLeft: 3 }} /></button>
                <div className="testimonials__play-line"></div>
              </div>
            </div>

            <h3 className="testimonials__name">Foundation Leader</h3>
            <p className="testimonials__role">Community Champion</p>
            <p className="testimonials__quote">
              We are proud to have an institution like Anjanadevi Foundation that is working for the upliftment of underprivileged children and communities across the nation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
