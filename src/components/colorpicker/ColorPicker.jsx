import React, { useState } from 'react';
import './ColorPicker.css';
import IMG1 from '../../assets/Product1.png';
import IMG2 from '../../assets/Product2.png';
import IMG3 from '../../assets/product3.png';
import IMG4 from '../../assets/product8.png';


const ColorPicker = () => {
  const imageList = [IMG1, IMG2, IMG3, IMG4];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const changeImage = (index) => {
    setActiveImageIndex(index);
  };

  return (
    <div>
      <div id="output">
        <img src={imageList[activeImageIndex]} alt="Selected Image" />
      </div>
      <div id="color-container">
        {imageList.map((image, index) => (
          <div
            key={index}
            className={`color-pick ${activeImageIndex === index ? 'active' : ''}`}
            // style={{ backgroundImage: `url(${image})` }}
            onClick={() => changeImage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;