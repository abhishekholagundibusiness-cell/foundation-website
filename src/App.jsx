import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ImpactCounters from './components/ImpactCounters';
import Expenses from './components/Expenses';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Media from './components/Media';
import Footer from './components/Footer';
import { FaWhatsapp, FaChevronUp } from 'react-icons/fa';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ImpactCounters />
        <Expenses />
        <Partners />
        <Testimonials />
        <Media />
      </main>
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fab-container">
        {showTopBtn && (
          <button className="fab fab-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FaChevronUp />
          </button>
        )}
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="fab fab-whatsapp" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
}

export default App;
