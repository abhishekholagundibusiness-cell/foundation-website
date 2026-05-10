import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15 } },
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__bg"></div>
      
      <div className="container">
        <div className="hero__grid">
          
          {/* Left Content */}
          <motion.div 
            className="hero__content"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemVariants} className="hero__tag">
              <span className="hero__tag-dot"></span> Empowering Lives
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero__title">
              Building a Brighter <br/>
              <span className="hero__highlight">Future Together.</span>
            </motion.h1>

            <motion.ul variants={itemVariants} className="hero__features">
              <li><FaCheckCircle className="hero__icon" /> Supporting rural healthcare development</li>
              <li><FaCheckCircle className="hero__icon" /> Providing 1000+ digital education scholarships</li>
              <li><FaCheckCircle className="hero__icon" /> Dedicated focus on community empowerment</li>
            </motion.ul>

            <motion.div variants={itemVariants} className="hero__cta">
              <a href="#about" className="btn btn-primary">
                Join Our Mission <FaArrowRight />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div 
            className="hero__form-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Get Involved Today</h3>
            <p>Fill in your details and our team will reach out to you to guide you on how you can contribute.</p>
            <form className="hero__form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <div className="hero__form-row">
                <input type="text" placeholder="+91 Phone Number" required />
              </div>
              <button type="button" className="btn btn-primary hero__form-btn">
                Request Callback
              </button>
              <p className="hero__form-terms">By submitting, you agree to our <span>Privacy Policy</span></p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
