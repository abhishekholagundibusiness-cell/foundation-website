import { motion } from 'framer-motion';
import './Expenses.css';

const Expenses = () => {
  return (
    <section id="expenses" className="expenses-section bg-light-blue">
      <div className="container">
        <h2 className="section-title">How are your<br/>contributions utilized?</h2>
        
        <div className="chart-container">
          {/* Bar 1 */}
          <div className="chart-bar-wrapper">
            <span className="chart-percent">90%</span>
            <motion.div 
              className="chart-bar bar-orange"
              initial={{ height: 0 }}
              whileInView={{ height: '300px' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            ></motion.div>
            <span className="chart-label"><span className="line-orange"></span>Direct Program<br/>Expenses</span>
          </div>

          {/* Bar 2 */}
          <div className="chart-bar-wrapper">
            <span className="chart-percent">8%</span>
            <motion.div 
              className="chart-bar bar-green"
              initial={{ height: 0 }}
              whileInView={{ height: '80px' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
            <span className="chart-label"><span className="line-green"></span>Admin<br/>Expenses</span>
          </div>

          {/* Bar 3 */}
          <div className="chart-bar-wrapper">
            <span className="chart-percent">2%</span>
            <motion.div 
              className="chart-bar bar-blue"
              initial={{ height: 0 }}
              whileInView={{ height: '40px' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            ></motion.div>
            <span className="chart-label"><span className="line-blue"></span>Fundraising<br/>Expenses</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expenses;
