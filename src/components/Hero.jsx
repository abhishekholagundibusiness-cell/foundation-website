import { motion } from 'framer-motion';
import { FaArrowRight, FaHeart } from 'react-icons/fa';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <img src="/assets/images/hero_main.png" alt="" className="hero__bg-img" />
        <div className="hero__overlay"></div>
      </div>

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={itemVariants} className="hero__badge">
            <FaHeart className="hero__badge-icon" /> Empowering Lives Since 2008
          </motion.span>

          <motion.h1 variants={itemVariants} className="hero__title">
            Building a Brighter<br />
            <span className="hero__title-accent">Future Together</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero__subtitle">
            Join Anjanadevi Foundation in transforming communities through education, healthcare, and sustainable development. Your small step can be someone's giant leap.
          </motion.p>

          <motion.div variants={itemVariants} className="hero__actions">
            <a href="#about" className="btn btn-primary btn--lg">
              Discover Our Story <FaArrowRight />
            </a>
            <a href="#services" className="btn btn-outline btn--lg">
              Our Initiatives
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero__stats-row">
            <div className="hero__stat">
              <strong>50K+</strong>
              <span>Lives Changed</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <strong>120+</strong>
              <span>Projects</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <strong>15+</strong>
              <span>Years</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero__scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
