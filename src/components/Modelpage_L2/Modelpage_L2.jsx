import React, { useState, useEffect, useRef } from "react";
import "./Modelpage_L2.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "../../assets/rf.png";

const Modelpage_L2 = () => {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const thresholdValue = window.innerWidth <= 768 ? 0.3 : 0.87;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio > thresholdValue) {
          setIsVisible(true);
        }
      },
      { threshold: [0, thresholdValue] }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div className={"gtx-containerMD"} ref={componentRef}>
      <div className="gtx-text-section">
        <h1 className={`${isVisible ? 'visible' : ''}`}>Let’s Elevate Your Ride Experience with Rhyno Where Superiority Meets Comfort</h1>
        <h2 className={`gtx-title ${isVisible ? 'glow' : ''}`}>GTX</h2>
        <div className={`info-section ${isVisible ? 'visible' : ''}`} onClick={toggleShowMore}>
          <p>Indulge in the perfect harmony of power and range with this Rhyno</p>
          {showMore ? <FaChevronUp className="chevron-icon" /> : <FaChevronDown className="chevron-icon" />}
        </div>
        {showMore && (
          <div className="gtx-more-info">
            <p>
              The Rhyno GTX is designed to offer an unmatched blend of power and efficiency. With advanced features that cater to your comfort, safety, and convenience, the GTX ensures an exhilarating ride experience that keeps you ahead of the curve.
            </p>
          </div>
        )}
        <hr className={`${isVisible ? 'visible' : ''}`} />
        <div className={`gtx-features ${isVisible ? 'animate-features' : ''}`}>
          <div><strong>Power:</strong> Elevate your journey with</div>
          <div><strong>Comfort:</strong> Indulge in comfort, revel in stability, and embrace safety.</div>
          <div><strong>Battery:</strong> kWh illuminates sustainability in small packages.</div>
          <div><strong>Speed:</strong> Experience the thrill with Max speed soaring at kmph.</div>
          <div><strong>Range:</strong> Unleash freedom with ranges stretching to an electrifying km.</div>
          <div><strong>Charge:</strong> Revitalize your ride with swift 4-hour (12A) charge.</div>
        </div>
      </div>
      <div className={`gtx-image-section ${isVisible ? 'headlight-on' : ''}`}>
        <img src={Image} alt="Rhyno GTX" className={`bike-image ${isVisible ? 'headlight-on' : ''}`} />
      </div>
    </div>
  );
};

export default Modelpage_L2;
