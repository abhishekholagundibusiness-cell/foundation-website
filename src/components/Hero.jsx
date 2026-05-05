import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__bg"></div>
      <div className="hero__overlay"></div>

      <div className="container hero__content">
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Building a Brighter Future Together
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Empowering individuals, transforming communities, and creating
          sustainable impact for generations to come.
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a href="#about" className="btn btn-primary">Discover Our Story</a>
          <a href="#services" className="btn btn-dark">Our Initiatives</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
