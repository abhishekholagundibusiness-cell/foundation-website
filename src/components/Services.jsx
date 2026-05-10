import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    title: 'Education\nfor All',
    points: [
      'Quality education access',
      'Scholarship programs',
      'Skill development initiatives'
    ],
    gradient: 'linear-gradient(135deg, #FFBE0B 0%, #FB5607 100%)'
  },
  {
    title: 'Healthcare\nAccess',
    points: [
      'Free medical camps',
      'Vital treatments support',
      'Health awareness drives'
    ],
    gradient: 'linear-gradient(135deg, #FB5607 0%, #FF006E 100%)'
  },
  {
    title: 'Environmental\nCare',
    points: [
      'Tree plantation drives',
      'Water conservation projects',
      'Eco-friendly practices'
    ],
    gradient: 'linear-gradient(135deg, #FF006E 0%, #8338EC 100%)'
  },
  {
    title: 'Women\nEmpowerment',
    points: [
      'Vocational training',
      'Micro-finance support',
      'Financial independence'
    ],
    gradient: 'linear-gradient(135deg, #8338EC 0%, #3A86FF 100%)'
  }
];

const Services = () => {
  return (
    <section id="services" className="services bg-light">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <motion.span 
            className="section-tag"
            style={{ color: '#FB5607', backgroundColor: 'rgba(251, 86, 7, 0.1)', borderColor: 'transparent' }}
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
            Choose Your Path to <span className="services__highlight">Impact</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Initiatives designed to transform communities and create a sustainable future
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
              <div className="services__card-top" style={{ background: s.gradient }}>
                <h3 className="services__card-title">{s.title}</h3>
              </div>
              <div className="services__card-bottom">
                <ul className="services__features">
                  {s.points.map((point, idx) => (
                    <li key={idx}>
                      <FaCheck className="services__check" /> {point}
                    </li>
                  ))}
                </ul>
                <div className="services__seats">
                  <span className="services__seats-dot"></span> Impacting 1000+ lives
                </div>
                <button className="btn btn-primary services__btn">
                  Learn More <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
