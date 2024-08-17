import React, { useEffect, useState, useRef } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import '../twistycarousal/Twistycarousal.css'; // Make sure to include the styles in a separate CSS file
import IMG1 from '../../assets/battery.png';
import IMG2 from '../../assets/best-customer-experience.png';
import IMG3 from '../../assets/bar-chart.png';
import IMG4 from '../../assets/solution.png';
import IMG5 from '../../assets/tyre.png';

const CombinedCarousel = () => {
  const n = 6;
  const [current, setCurrent] = useState(0);
  const circleContainerRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  // Listen for resize events
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // Swipe left logic
    },
    onSwipedRight: () => {
      // Swipe right logic
    },
  });

  useEffect(() => {
    const angle = 360 / n;
    const wC = circleContainerRef.current.clientWidth;

    for (let i = 0; i < n; i++) {
      const dist = Math.round(630 + angle * i - angle * current);
      const item = document.querySelector(`.circle-container > .item:nth-of-type(${i + 1})`);
      item.style.transform = `rotate(${dist}deg) translate(${wC / 2}px) rotate(-${dist}deg)`;
    }
  }, [current, n]);

  const x = useTransform(scrollYProgress, [0, 1], ['200%', '-130%']);

  return (
    <div>
      <h1 className="hs-h1h1">What Makes <span className='yellow'>RHYNO</span> Awesome</h1>
      <section className="hs-one" {...(isMobile && handlers)}>
        <div className="hs-two">
          <motion.div style={{ x }} className="hs-three">
            {cards.map((card, index) => (
              <Card card={card} key={index} isMobile={isMobile} />
            ))}
          </motion.div>
        </div>
      </section>
      <section className='section'>
        <div className="container1">
          <div className="text-container">
            <div className="text-box">
              <h1>Carousel Heading</h1>
              <p>{texts[current]}</p>
            </div>
          </div>
          <div className="col">
            <ul className="circle-container" ref={circleContainerRef}>
              {[...Array(n)].map((_, index) => (
                <li key={index} className="item">
                  <a
                    href="#"
                    className={current === index ? 'active1' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrent(index);
                    }}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const Card = ({ card, isMobile }) => {
  return (
    <div
      key={card.id}
      className={`hs-four ${isMobile ? 'mobile' : ''}`} // Add a class for mobile styling
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="hs-five"
      >
        <div className="overlay">
          <img src={card.icon} alt="Icon" className="r-icon" />
          <h3 className="r-title">{card.title}</h3>
        </div>
      </div>
      <div className="hs-six">
        <p className="hs-seven">{card.description}</p>
      </div>
    </div>
  );
};

export default CombinedCarousel;

const texts = [
  'Text for item 1',
  'Text for item 2',
  'Text for item 3',
  'Text for item 4',
  'Text for item 5',
  'Text for item 6',
];

const cards = [
  {
    url: '../../assets/1.png',
    icon: IMG1,
    title: 'LFP Battery',
    description:
      'Equipped with advanced Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances RHYNO\'s longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance.',
    id: 1,
  },
  {
    url: '/imgs/abstract/1.jpg',
    icon: IMG5,
    title: 'Wider tyres',
    description:
      'Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand roads.',
    id: 2,
  },
  {
    url: '/imgs/abstract/1.jpg',
    icon: IMG3,
    title: 'Range prediction',
    description:
      'Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With RHYNO, you can ride with peace of mind, which provides precise information about the remaining battery.',
    id: 3,
  },
  {
    url: '/imgs/abstract/1.jpg',
    icon: IMG2,
    title: 'Extraordinary Experience',
    description:
      "RHYNO is more than just a mode of transportation. It's an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication and a touch of masculinity! This experience is enhanced further with lower CG, which makes your RHYNO ultra-lightweight as if you are riding on a feather!",
    id: 4,
  },
  {
    url: '/imgs/abstract/1.jpg',
    icon: IMG4,
    title: 'Rugged and simple Design',
    description:
      'We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, spending weeks and months at service stations for complex repairs. We took the bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it.',
    id: 5,
  },
];
