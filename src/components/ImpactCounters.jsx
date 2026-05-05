import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ImpactCounters.css';

const counters = [
  { target: 50000, label: 'Lives Impacted', suffix: '+' },
  { target: 120, label: 'Projects Completed', suffix: '' },
  { target: 45, label: 'Communities Reached', suffix: '' },
  { target: 300, label: 'Active Volunteers', suffix: '+' }
];

const Counter = ({ target, label, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <motion.div 
      ref={ref}
      className="impact-item glass-dark"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="impact-number">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="impact-label">{label}</div>
    </motion.div>
  );
};

const ImpactCounters = () => {
  return (
    <section id="impact" className="impact-section">
      <div className="impact-background"></div>
      <div className="impact-overlay"></div>
      <div className="container relative z-10">
        <h2 className="section-title text-white" style={{ color: 'white' }}>Our Impact</h2>
        
        <div className="impact-grid">
          {counters.map((counter, idx) => (
            <Counter key={idx} {...counter} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;
