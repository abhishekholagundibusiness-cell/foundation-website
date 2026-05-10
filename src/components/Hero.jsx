import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 15 
    } 
  },
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero__bg"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="hero__overlay" />

      <div className="container">
        <motion.div 
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="hero__tag">
            Empowering Lives
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero__title">
            Building a Brighter<br/>Future Together
          </motion.h1>

          <motion.p variants={itemVariants} className="hero__subtitle">
            Join Anjanadevi Foundation in transforming communities and creating sustainable impact for generations to come. Your small step can be someone's giant leap.
          </motion.p>

          <motion.div variants={itemVariants} className="hero__cta">
            <a href="#about" className="btn btn-primary">
              Discover Our Story
            </a>
            <a href="#services" className="btn btn-outline">
              Our Initiatives <FaArrowRight />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
