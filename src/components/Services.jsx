import { motion } from 'framer-motion';
import { FaBookOpen, FaHeartbeat, FaSeedling, FaHandsHelping } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaBookOpen />,
    title: 'Education for All',
    description: 'Providing access to quality education, scholarships, and skill development programs for underprivileged children.',
    color: '#0B2B5E'
  },
  {
    icon: <FaHeartbeat />,
    title: 'Healthcare Access',
    description: 'Organizing medical camps, supporting vital treatments, and promoting health awareness in marginalized communities.',
    color: '#D4AF37'
  },
  {
    icon: <FaSeedling />,
    title: 'Environmental Care',
    description: 'Leading tree plantation drives, water conservation projects, and promoting eco-friendly practices globally.',
    color: '#2E8B57'
  },
  {
    icon: <FaHandsHelping />,
    title: 'Women Empowerment',
    description: 'Facilitating vocational training and micro-finance initiatives to help women achieve financial independence.',
    color: '#E63946'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card glass"
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <div 
                className="service-icon-wrapper"
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              <div className="service-hover-line" style={{ backgroundColor: service.color }}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
