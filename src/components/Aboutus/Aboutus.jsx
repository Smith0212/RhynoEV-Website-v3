import React, { useState, useRef, useEffect } from 'react';
import img1 from '../../assets/about.png';
import './Aboutus.css';

const Aboutus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between p-8 lg:p-16 space-y-8 lg:space-y-0 bg-white text-black">
      <div className="lg:w-7/12 lg:pl-10 space-y-4 md:pl-0">
        <h1 className="text-4xl font-bold tracking-wide">ABOUT US</h1>
        <p className="text-lg leading-relaxed text-justify">
          Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.
        </p>
        <p className="text-lg leading-relaxed text-justify">
          With our first product, we've taken a bold step to create something more than just a vehicle; it's a unique experience of elegance, comfort, and style, addressing the pitfalls of conventional electric scooters. Our design prioritises safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new era in sustainable and dependable electric transportation.
        </p>

        <div className="space-y-4">
          <Accordion
            title="Reduced Emissions"
            content="90% Reduction in Tailpipe Emissions Compared to Gasoline Vehicles."
            index={0}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <Accordion
            title="Lower Costs"
            content="75% Lower Operating Costs Over the Vehicle's Lifetime. 75% Lower Fuel Costs Annually."
            index={1}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <Accordion
            title="Faster Acceleration"
            content="75% Faster Acceleration from 0-60 mph Compared to Average Gasoline Cars."
            index={3}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
        </div>
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
