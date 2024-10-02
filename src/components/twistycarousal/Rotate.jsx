import React, { useEffect, useState, useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion"; // Add this import statement
import { useSwipeable } from 'react-swipeable';
import './Twistycarousal.css'; // Make sure to include the styles in a separate CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarBattery, faTriangleCircleSquare, faTachometerAltFast, faClockFour, faWrench } from '@fortawesome/free-solid-svg-icons';
import { PiCarBatteryLight } from "react-icons/pi";
import img1 from '../../assets/r1.png'
import img2 from '../../assets/r2.png'
import img3 from '../../assets/r3.png'
import img4 from '../../assets/r4.png'
import img5 from '../../assets/r5.png'


function Rotate() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  // Listen for resize events
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-130%"]);

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // Swipe left logic
    },
    onSwipedRight: () => {
      // Swipe right logic
    },
  });

  const n = 5;
  const [current, setCurrent] = useState(0);
  const circleContainerRef = useRef(null);

  const texts = [
    'Advanced Lithium Iron Phosphate (LFP) batteries and an Active Balancing Smart Battery Management System (Active BMS) makes your Rhyno super safe, long lasting and reliable. This battery is engineered for India’s tough climatic conditions, delivering unmatched safety, durability and performance.',
    'Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud or sandy roads.',
    'Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind. The display provides precise information about the remaining battery percentage, fault indicators and safety diagnostics.',
    'Rhyno is more than just a mode of transportation. It’s an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity! This experience is enhanced further with ultra-lightweight handling as if you are gliding on clouds!',
    'We’ve had enough of the EVs being fragile plastic toys that break during minor accidents, spending weeks at service stations. We took the bold step of making something raw and rugged. We kept it so simple that even your trusted local mechanic can understand and repair your Rhyno.',
  ];
  const headings = [
    'Long Lasting Battery',
    'Wider Tyres',
    'Range Prediction',
    'Extraordinary Experience',
    'Rugged and Simple design'
  ];
  const icons = [
    img1,
    img2,
    img3,
    img4,
    img5
  ];
  

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;

      const sectionPosition = targetRef.current.offsetTop;
      const sectionHeight = targetRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight * 0.6;
      const isComponentInView = scrollPosition >= sectionPosition && scrollPosition < sectionPosition + sectionHeight;

      if (isComponentInView) {
        const scrollIndex = Math.floor(((scrollPosition - sectionPosition) / sectionHeight) * n);
        setCurrent(scrollIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [n]);

  useEffect(() => {
    const angle = -220 / n;
    const wC = circleContainerRef.current.clientWidth;

    for (let i = 0; i < n; i++) {
      const dist = Math.round(200 + angle * i - angle * current);
      const item = document.querySelector(`.circle-container > .item:nth-of-type(${i + 1})`);
      const isVisible = dist <= 280 && dist >= 110; // Check if within 180-degree arc
      item.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      item.style.transform = `rotate(${dist}deg) translate(${wC / 2}px) rotate(-${dist}deg)`;
      item.style.opacity = isVisible ? 1 : 0; // Hide items out of the 180-degree arc
    }
  }, [current, n]);

  return (
    <div className='section' ref={targetRef}>
      <div className="flex gap-10 max-md:flex-col max-md:gap-0 container1 px-10">
        <div className="flex flex-col w-8/12 px-5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col h-[80vh] px-5 mt-7 text-white max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-extralight leading-[50px] tracking-[12.3px] max-md:max-w-full">
              WHAT MAKES <br /> <div className='flex flex-row gap-5'> RHYNO <div className='-rotate-12'><span className='awesome-rhyno'>Awesome ?</span></div></div>
            </div>
            <div className="mt-20 text-4xl font-medium tracking-wider leading-10 color-yellow-main max-md:mt-10 max-md:max-w-full">
              {headings[current]}
            </div>
            <div className="shrink-0 mt-7 h-px w-10 bg-white border border-white border-solid" />
            <div className="mt-6 text-base leading-8 text-justify capitalize max-md:max-w-full">
              {texts[current]}
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-36 w-3/12 max-xl:w-4/12 max-xl:ml-20 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center max-xl:items-start text-white max-md:mt-10 max-md:max-w-full">
            {/* <div className="col"> */}
            <ul className="circle-container" ref={circleContainerRef}>
              {icons.map((icon, index) => (
                <li key={index} className="item">
                  <a
                    href="#"
                    className={current === index ? 'active1' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrent(index);
                    }}
                  >
                    {/* <FontAwesomeIcon icon={icon} /> */}
                    <img src={icon} alt={headings[index]} className="icon-image" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Rotate;
