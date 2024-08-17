import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AnimatedTitle.css';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ startY, endY, titleText }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        fontSize: '8vw',
        y: `${startY}`,
        textShadow: '16px 16px 32px rgba(0, 0, 0, 0.8)',
      },
      {
        fontSize: '5.5vw',
        y: `${endY}`,
        textShadow: '8px 8px 16px rgba(0, 0, 0, 0.8)',
        ease: 'none',
        scrollTrigger: {
          trigger: titleRef.current,
          // markers: true,
          start: 'top 60%',
          end: 'bottom 30%',
          scrub: 2,
        },
      }
    );
  });

  return (
    <div className="animated-title-container">
      {/* <div className="drips">
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>
      </div> */}
      <h1 ref={titleRef} className="titleText">
        {titleText}
      </h1>
    </div>
  );
};

export default AnimatedTitle;
