import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Media.css';

const mediaItems = [
  {
    image: '/assets/images/media_scholarship.png',
    title: 'Empowering Digital Futures on Wheels!',
    desc: 'The foundation recently announced a comprehensive scholarship program aiming to support 1000 rural students in digital education.',
  },
  {
    image: '/assets/images/service_healthcare.png',
    title: 'Awarded for Excellence in Community Service',
    desc: 'Recognized at the National NGO Summit for outstanding contributions to rural healthcare development.',
  },
  {
    image: '/assets/images/media_award_ceremony.png',
    title: 'DH Changemaker 20 in 2020',
    desc: 'Our founder was honored as one of the top 20 changemakers by Deccan Herald for transformative social impact.',
  },
];

const awards = [
  'DH Changemaker 20 in 2020',
  'Best NGO Award 2019',
  'Community Impact Excellence 2021',
];

const Media = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const w = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: dir === 'left' ? -w : w, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Media Coverage — Horizontal Carousel on mobile */}
      <section id="media" className="media">
        <div className="container">
          <div className="section-header">
            <motion.span 
              className="section-tag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              In The News
            </motion.span>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Media Coverage
            </motion.h2>
          </div>

          <div className="media__carousel-wrap">
            <button className="media__arrow media__arrow--left" onClick={() => scroll('left')}><FaChevronLeft /></button>

            <div className="media__carousel" ref={scrollRef}>
              {mediaItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="media__card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="media__img-wrap">
                    <img src={item.image} alt={item.title} className="media__img" />
                    <div className="media__dot-accent"></div>
                  </div>
                  <div className="media__content">
                    <h3 className="media__card-title">{item.title}</h3>
                    <p className="media__card-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="media__arrow media__arrow--right" onClick={() => scroll('right')}><FaChevronRight /></button>
          </div>

          {/* Carousel dots */}
          <div className="media__dots">
            {mediaItems.map((_, i) => (
              <span key={i} className={`media__dot ${i === 0 ? 'media__dot--active' : ''}`}></span>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards">
        <div className="awards__header">
          <div className="awards__header-bg"></div>
          <div className="awards__header-overlay"></div>
          <div className="container">
            <motion.span 
              className="section-tag awards__tag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Recognitions
            </motion.span>
            <motion.h2 
              className="awards__heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Awards & Honors
            </motion.h2>
          </div>
        </div>
        <div className="awards__body">
          <div className="container">
            <div className="awards__list">
              {awards.map((a, i) => (
                <motion.div
                  key={i}
                  className="awards__item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="awards__circle">
                    <img src={`/assets/images/${['media_award_ceremony', 'award_trophy', 'award_community'][i]}.png`} alt={a} className="awards__circle-img" />
                  </div>
                  <p className="awards__label">{a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
