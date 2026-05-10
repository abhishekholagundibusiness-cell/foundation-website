import { motion } from 'framer-motion';
import { FaBookOpen, FaHeartbeat, FaSeedling, FaHandsHelping, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaBookOpen />,
    title: 'Education for All',
    description: 'Providing access to quality education, scholarships, and skill development programs for underprivileged children.',
    image: '/assets/images/service_education.png'
  },
  {
    icon: <FaHeartbeat />,
    title: 'Healthcare Access',
    description: 'Organizing medical camps, supporting vital treatments, and promoting health awareness in marginalized communities.',
    image: '/assets/images/service_healthcare.png'
  },
  {
    icon: <FaSeedling />,
    title: 'Environmental Care',
    description: 'Leading tree plantation drives, water conservation projects, and promoting eco-friendly practices.',
    image: '/assets/images/service_environment.png'
  },
  {
    icon: <FaHandsHelping />,
    title: 'Women Empowerment',
    description: 'Facilitating vocational training and micro-finance initiatives to help women achieve financial independence.',
    image: '/assets/images/service_women.png'
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Initiatives
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What We Do
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We focus on four key pillars to create sustainable, long-term impact in communities across the nation.
          </motion.p>
        </div>

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
              <div className="services__img-wrap">
                <img src={s.image} alt={s.title} className="services__img" />
                <div className="services__img-overlay"></div>
              </div>
              <div className="services__body">
                <div className="services__icon">{s.icon}</div>
                <h3 className="services__card-title">{s.title}</h3>
                <p className="services__card-desc">{s.description}</p>
                <a href="#" className="services__link">
                  Learn More <FaArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
