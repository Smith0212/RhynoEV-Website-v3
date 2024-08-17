import React, { useState } from 'react';
import './Modelpage_L1.css';
import IMG1 from '../../assets/webp/product4.png';
import IMG2 from '../../assets/webp/product5.png';
import IMG3 from '../../assets/webp/product6.png';
import IMG4 from '../../assets/webp/product7.png';
import IMG5 from '../../assets/webp/product8.webp';
import IMG6 from '../../assets/webp/Product1.webp';
import IMG7 from '../../assets/webp/Product2.webp';
import IMG8 from '../../assets/webp/product3.webp';
import IMG9 from '../../assets/webp/2.png';
import IMG10 from '../../assets/webp/3.png';

const Modelpage_L1 = ({startState}) => {
  const items = [
    { backgroundColor: '#9c4d2f', image: `${IMG1}` },
    { backgroundColor: '#060608', image: `${IMG2}` },
    { backgroundColor: '#103db2', image: `${IMG3}` },
    { backgroundColor: '#630b12', image: `${IMG4}` },
    { backgroundColor: '#6b7280', image: `${IMG1}` },
    { backgroundColor: '#dfa3c3', image: `${IMG2}` },
    { backgroundColor: '#321c33', image: `${IMG3}` },
    { backgroundColor: '#291f1d', image: `${IMG4}` },
    { backgroundColor: '#f5bfaf', image: `${IMG1}` },
    { backgroundColor: '#7eb63d', image: `${IMG2}` },
  ];

  const [currentItem, setCurrentItem] = useState(startState);
  const [nextItem, setNextItem] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [activeButton, setActiveButton] = useState(null); // Track which button is active
  const [buttonTransform, setButtonTransform] = useState({}); // Store button transform styles

  const handleColorClick = (index, event) => {
    if (index !== currentItem) {
      const button = event.target;
      const rect = button.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const translateX = centerX - rect.left - rect.width / 2;
      const translateY = centerY - rect.top - rect.height / 2;

      setButtonTransform({
        [index]: {
          transform: `translate(${translateX}px, ${translateY}px) scale(1.5)`,
        },
      });

      setNextItem(index);
      setIsDisabled(true);
      setActiveButton(index); // Set the clicked button as active
      setTimeout(() => {
        setIsDisabled(false);
        setActiveButton(null); // Reset active button after animation
        setButtonTransform({}); // Reset transform after animation
      }, 2000); 
    }
  };

  const handleAnimationEnd = () => {
    setCurrentItem(nextItem);
    setNextItem(null);
  };

  return (
    <section className="carouselMD">
      <div className="listMD">
        <div className="rhyno-text">RHYNO</div>
        {items.map((item, index) => (
          <article
            key={index}
            className={`itemMD ${index === currentItem ? 'active' : ''} ${index === nextItem ? 'next' : ''}`}
            style={{ backgroundColor: item.backgroundColor }}
            onAnimationEnd={index === nextItem ? handleAnimationEnd : null}
          >
            <figure className="imageMD">
              <img src={item.image} alt={`Product ${index + 1}`} />
            </figure>
          </article>
        ))}
      </div>
      <div className="color-buttons">
        {items.map((item, index) => (
          <button
            key={index}
            className={`${activeButton === index ? 'animate-button' : ''}`}
            style={{
              backgroundColor: item.backgroundColor,
              ...buttonTransform[index],
            }}
            onClick={(event) => handleColorClick(index, event)}
            disabled={isDisabled}
          />
        ))}
      </div>
    </section>
  );
};

export default Modelpage_L1;
