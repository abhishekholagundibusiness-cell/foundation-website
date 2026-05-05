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
      const increment = target / (duration / 16);
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
      className="impact__item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="impact__number">{count.toLocaleString()}{suffix}</div>
      <div className="impact__label">{label}</div>
    </motion.div>
  );
};

const ImpactCounters = () => {
  return (
    <section id="impact" className="impact">
      <div className="impact__bg"></div>
      <div className="impact__overlay"></div>
      <div className="container impact__inner">
        <h2 className="section-title impact__title">Our Impact</h2>
        <div className="impact__grid">
          {counters.map((c, idx) => (
            <Counter key={idx} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;
