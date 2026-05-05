import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ImpactCounters from './components/ImpactCounters';
import Partners from './components/Partners';
import Media from './components/Media';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ImpactCounters />
        <Partners />
        <Media />
      </main>
      <Footer />
    </>
  );
}

export default App;
