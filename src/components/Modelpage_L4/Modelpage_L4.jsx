import React from 'react';
import './Modelpage_L4.css';
import Img1 from '../../assets/1.png';
import Img2 from '../../assets/2.png';
import Img9 from '../../assets/9.png';

const Modelpage_L4 = () => {
    return (
        <div className="custom-bike-layout">
            <div className="custom-top-section">
                <div className="custom-image-container">
                    <img src={Img1} alt="Image 1" className="custom-top-image" />
                    <p className="custom-description-text">
                        LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
                    </p>
                </div>
                <div className="custom-image-container">
                    <img src={Img2} alt="Image 2" className="custom-top-image" />
                    <p className="custom-description-text">
                        LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.
                    </p>
                </div>
            </div>
            <div className="custom-bike-row">
                <img src={Img9} alt="Row of Bikes" className="custom-bike-image" />
            </div>
        </div>
    );
};

export default Modelpage_L4;
