import { motion } from 'framer-motion';
import './Partners.css';

const csrPartners = [
  { name: 'LIC', sub: 'Life Insurance Corporation' },
  { name: 'ICICI', sub: 'Foundation' },
  { name: 'GIA', sub: 'Gemological Institute' },
  { name: 'ANZ', sub: 'Banking Group' },
  { name: 'PNB', sub: 'Housing Finance' },
  { name: 'RITES', sub: 'Infrastructure People' },
];

const programPartners = [
  { name: 'UNICEF' },
  { name: 'WHO' },
  { name: 'Red Cross' },
  { name: 'UNDP' },
];

const Partners = () => {
  return (
    <section id="partners" className="partners bg-light">
      <div className="container">
        
        <div className="section-header">
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Collaborations
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our CSR Partners
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We are proud to be associated with organizations that share our vision for a better future.
          </motion.p>
        </div>

        <div className="partners__grid">
          {csrPartners.map((p, i) => (
            <motion.div
              key={i}
              className="partners__card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="partners__logo-placeholder">
                <span className="partners__name">{p.name}</span>
                {p.sub && <span className="partners__sub">{p.sub}</span>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Program Partners */}
        <div className="section-header" style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
          <motion.h2 
            className="section-title"
            style={{ fontSize: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Programme Partners
          </motion.h2>
        </div>

        <div className="partners__grid partners__grid--4">
          {programPartners.map((p, i) => (
            <motion.div
              key={i}
              className="partners__card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="partners__logo-placeholder">
                <span className="partners__name">{p.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
