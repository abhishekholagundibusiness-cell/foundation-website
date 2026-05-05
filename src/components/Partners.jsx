import { motion } from 'framer-motion';
import './Partners.css';

const Partners = () => {
  // Mock partners array
  const partners = [
    { name: 'LIC', desc: 'Life Insurance Corporation of India' },
    { name: 'ICICI Foundation', desc: 'For Inclusive Growth' },
    { name: 'GIA', desc: 'Gemological Institute' },
    { name: 'PNB Housing', desc: 'Finance Limited' },
    { name: 'ANZ', desc: 'Banking Group' },
    { name: 'RITES', desc: 'The Infrastructure People' }
  ];

  return (
    <section id="partners" className="partners-section">
      <div className="container">
        <h2 className="section-title">Our CSR Partners</h2>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              className="partner-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="partner-logo-placeholder">
                <span className="partner-name">{partner.name}</span>
                <span className="partner-desc">{partner.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Partners;
