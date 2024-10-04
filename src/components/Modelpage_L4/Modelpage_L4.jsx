import React from 'react';
import './Modelpage_L4.css';
import Img1 from '../../assets/1.png';
import Img2 from '../../assets/2.png';
import Img9 from '../../assets/9.png';

const Modelpage_L4 = () => {
    return (
        <div className="custom-bike-layout">
            <div className="custom-top-section">
                <div className="custom-video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/HKfZifYO2w4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="custom-video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/-41dJi_UPlc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="custom-bike-row">
                <img src={Img9} alt="Row of Bikes" className="custom-bike-image" />
            </div>
        </div>
    );
};

export default Modelpage_L4;
