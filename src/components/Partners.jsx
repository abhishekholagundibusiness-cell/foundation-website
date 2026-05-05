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
        {/* CSR Partners */}
        <h2 className="section-title">Our CSR Partners</h2>
        <div className="partners__grid">
          {csrPartners.map((p, i) => (
            <motion.div
              key={i}
              className="partners__card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <span className="partners__name">{p.name}</span>
              {p.sub && <span className="partners__sub">{p.sub}</span>}
            </motion.div>
          ))}
        </div>

        {/* Program Partners */}
        <h2 className="section-title" style={{ marginTop: '3rem' }}>Our Programme Partners</h2>
        <div className="partners__grid partners__grid--4">
          {programPartners.map((p, i) => (
            <motion.div
              key={i}
              className="partners__card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <span className="partners__name">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
