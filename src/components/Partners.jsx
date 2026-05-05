import { motion } from 'framer-motion';
import './Partners.css';

const Partners = () => {
  // Mock partners array
  const partners = [
    { name: 'TechCorp CSR', type: 'CSR' },
    { name: 'Global Bank India', type: 'CSR' },
    { name: 'BuildWell Ind.', type: 'CSR' },
    { name: 'GreenEnergy Ltd', type: 'CSR' },
    { name: 'Local NGO Alliance', type: 'Programme' },
    { name: 'EduCare Trust', type: 'Programme' },
    { name: 'HealthFirst Org', type: 'Programme' },
  ];

  return (
    <section id="partners" className="partners-section">
      <div className="container">
        <h2 className="section-title">Our Partners</h2>
        
        <div className="partners-carousel-container">
          <motion.div 
            className="partners-track"
            animate={{ x: [0, -1000] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Double the array for seamless infinite scroll */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="partner-logo-box glass">
                <span className="partner-name">{partner.name}</span>
                <span className="partner-badge">{partner.type}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
