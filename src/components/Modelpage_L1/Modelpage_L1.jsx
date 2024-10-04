import React, { useState } from 'react';
import './Modelpage_L1.css';
import IMG1 from '../../assets/webp/yellow.webp';
import IMG2 from '../../assets/webp/brown.webp';
import IMG3 from '../../assets/webp/pink.webp';
import IMG4 from '../../assets/webp/white.webp';
import IMG5 from '../../assets/webp/dark blue.webp';
import IMG6 from '../../assets/webp/silver.webp';
import IMG7 from '../../assets/webp/black.webp';
import IMG8 from '../../assets/webp/light blue.webp';
import IMG9 from '../../assets/webp/red.webp';
import IMG10 from '../../assets/webp/violet.webp';

const Modelpage_L1 = ({startState}) => {
  const items = [
    { backgroundColor: '#d7c387', image: `${IMG1}` }, //yellow
    { backgroundColor: '#a08467', image: `${IMG2}` }, //brown
    { backgroundColor: '#7e5070', image: `${IMG3}` }, //pink
    { backgroundColor: '#deddd6', image: `${IMG4}` }, //white
    { backgroundColor: '#6471b9', image: `${IMG5}` }, //dark blue
    { backgroundColor: '#737373', image: `${IMG6}` }, //silver
    { backgroundColor: '#282424', image: `${IMG7}` }, //black
    { backgroundColor: '#83afc7', image: `${IMG8}` }, //light blue
    { backgroundColor: '#7c3433', image: `${IMG9}` }, //red
    { backgroundColor: '#886ba7', image: `${IMG10}` }, //violet
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
