import { motion } from 'framer-motion';
import './Expenses.css';

const Expenses = () => {
  const bars = [
    { pct: '90%', height: 260, label: 'Direct Program\nExpenses', gradient: 'linear-gradient(to right, #e65c00, #ff8c00)', lineColor: '#ff6b00' },
    { pct: '8%', height: 70, label: 'Admin\nExpenses', gradient: 'linear-gradient(to right, #00a843, #00e676)', lineColor: '#00c853' },
    { pct: '2%', height: 35, label: 'Fundraising\nExpenses', gradient: 'linear-gradient(to right, #005ce6, #4facfe)', lineColor: '#0066ff' },
  ];

  return (
    <section className="expenses bg-light">
      <div className="container">
        <h2 className="section-title">How are your<br/>contributions utilized?</h2>

        <div className="expenses__chart">
          {bars.map((bar, i) => (
            <div key={i} className="expenses__col">
              <span className="expenses__pct">{bar.pct}</span>
              <motion.div
                className="expenses__bar"
                style={{ background: bar.gradient }}
                initial={{ height: 0 }}
                whileInView={{ height: bar.height }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              />
              <div className="expenses__label">
                <span className="expenses__line" style={{ backgroundColor: bar.lineColor }}></span>
                {bar.label.split('\n').map((line, j) => <span key={j}>{line}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expenses;
