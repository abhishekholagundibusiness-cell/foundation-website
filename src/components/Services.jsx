import { motion } from 'framer-motion';
import { FaBookOpen, FaHeartbeat, FaSeedling, FaHandsHelping } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaBookOpen />,
    title: 'Education for All',
    description: 'Providing access to quality education, scholarships, and skill development programs for underprivileged children.',
    color: '#0066ff'
  },
  {
    icon: <FaHeartbeat />,
    title: 'Healthcare Access',
    description: 'Organizing medical camps, supporting vital treatments, and promoting health awareness in marginalized communities.',
    color: '#e63946'
  },
  {
    icon: <FaSeedling />,
    title: 'Environmental Care',
    description: 'Leading tree plantation drives, water conservation projects, and promoting eco-friendly practices.',
    color: '#10B981'
  },
  {
    icon: <FaHandsHelping />,
    title: 'Women Empowerment',
    description: 'Facilitating vocational training and micro-finance initiatives to help women achieve financial independence.',
    color: '#f59e0b'
  }
];

const Services = () => {
  return (
    <section id="services" className="services bg-light">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">
          We focus our efforts on four key pillars to create sustainable, long-term impact in communities.
        </p>

        <div className="services__grid">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="services__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="services__icon" style={{ backgroundColor: `${s.color}15`, color: s.color }}>
                {s.icon}
              </div>
              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__card-desc">{s.description}</p>
              <div className="services__card-accent" style={{ backgroundColor: s.color }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
