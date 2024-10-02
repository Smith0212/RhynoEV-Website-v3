// import React from 'react'
// import About from '../components/about/About'
// import BuyNow from '../components/buynow/BuyNow'
// import ContactForm from '../components/ContactNew/ContactForm'

// const AboutUs = () => {
//   return (
//     <div>
//       {/* <AboutPage/> */}
//       <About/>
//       <BuyNow/>
//       <ContactForm/>
//     </div>
//   )
// }

// export default AboutUs
import React, { useState, useRef, useEffect } from 'react';
import img1 from '../assets/about.png';
import { Helmet } from 'react-helmet';
// import './Aboutus.css';

const Aboutus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between p-8 lg:p-16 space-y-8 lg:space-y-0 bg-white text-black mt-20">
      <Helmet>
        <title>About Rhyno EV</title>
        <meta name="description" content="About Us for Rhyno EV Private Limited" />
      </Helmet>
      <div className="lg:w-7/12 lg:pl-10 space-y-4 md:pl-0">
        <h1 className="text-4xl font-bold tracking-wide">About US</h1>
        <p className="text-lg leading-relaxed text-justify">
        It’s not “yet another EV startup” in the EV race. Vishal Kishan, the founder of Rhyno, wanted to start EV rental service originally. He soon found out there lies a bigger problem with the product gap. There was an absence of reliable, affordable, and robust electric scooters. That’s how Rhyno was born. Hailing from his automotive engineering background, Rhyno is his passion project more than a business. Unlike others, we are not in a hurry to earn a quick buck. We have spent the right amount of time and resources to build what is needed; a reliable vehicle.
        </p>
        <p className="text-lg leading-relaxed text-justify">
        With our first product, we've taken a bold step to create something more than just a two-wheeler; it's a sheer experience of elegance, comfort, and style. We emphasize safety and longer service life. So, worry not, about the fire or replacing the battery. We understand your concerns.
        </p>
        <p className="text-lg leading-relaxed text-justify">As per our original vision, we've introduced a Rhyno rental service. Discover more by clicking here.
        </p>

        {/* <div className="space-y-4">
          <Accordion
            title="What is one-week service commitment?"
            content="Due to OEM negligence regarding service, many folks like you have had a hard time. But not you. We value your time. We have engineered Rhyno for simplicity. Even complex repairs such as battery or motor are resolved in seven working days."
            index={0}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <Accordion
            title="What if you don’t deliver on your commitment?"
            content="Running a sane, sustainable business is part of our commitment to you. We are not in the circus of valuations and hyper-expansion. We chose to go slow and profitable. Your satisfaction will lead us to more sales through referrals. "
            index={1}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <Accordion
            title="Can a local mechanic repair my Rhyno?"
            content="Yes. Even you can! We’ve got you covered with a comprehensive service and repair manual. Additionally, our YouTube channel has all the tutorial videos about service and repairs. "
            index={3}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
        </div> */}
      </div>

      <div className="lg:w-4/12 flex justify-center md:w-full">
        <img
          src={img1}
          alt="Electric Scooter"
          className="lg:max-w-md h-auto shadow-lg"
        />
      </div>
    </div>
  );
};

const Accordion = ({ title, content, index, activeIndex, toggleAccordion }) => {
  const isActive = index === activeIndex;
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isActive) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isActive]);

  return (
    <div className="border-class">
      <button
        className="flex justify-between items-center w-full py-3 text-lg font-semibold text-left focus:outline-none"
        onClick={() => toggleAccordion(index)}
        style={{ outline: 'none' }} // Inline style to ensure no outline
      >
        <span>{title}</span>
        <span>{isActive ? '-' : '+'}</span>
      </button>
      <div
        ref={contentRef}
        style={{ height }}
        className="overflow-hidden transition-height duration-300 ease-in-out"
      >
        <div className="pb-3 text-black">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
