import { motion } from 'framer-motion';
import { FaBookOpen, FaHeartbeat, FaSeedling, FaHandsHelping } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaBookOpen />,
    title: 'Education for All',
    description: 'Providing access to quality education, scholarships, and skill development programs for underprivileged children.',
    color: '#051A3B'
  },
  {
    icon: <FaHeartbeat />,
    title: 'Healthcare Access',
    description: 'Organizing medical camps, supporting vital treatments, and promoting health awareness in marginalized communities.',
    color: '#FACC15'
  },
  {
    icon: <FaSeedling />,
    title: 'Environmental Care',
    description: 'Leading tree plantation drives, water conservation projects, and promoting eco-friendly practices globally.',
    color: '#10B981'
  },
  {
    icon: <FaHandsHelping />,
    title: 'Women Empowerment',
    description: 'Facilitating vocational training and micro-finance initiatives to help women achieve financial independence.',
    color: '#F43F5E'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="ambient-glow"></div>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            We focus our efforts on four key pillars to create sustainable, long-term impact in communities.
          </p>
        </motion.div>
        
        <div className="services-masonry">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={`service-card-v2 ${index % 2 !== 0 ? 'staggered' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div 
                className="icon-container"
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="service-title-v2">{service.title}</h3>
              <p className="service-desc-v2">{service.description}</p>
              
              <div className="card-accent" style={{ backgroundColor: service.color }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
