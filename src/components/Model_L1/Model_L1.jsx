import React, { useState, useEffect } from 'react';
import './Model_L1.css';

const Model_L1 = ({ mainImgsByColor, sideImgsByColor, productTitle, description, battery, motor, maxSpeed }) => {
    const initialColor = mainImgsByColor && Object.keys(mainImgsByColor)[0] || 'defaultColor';

    const [currentColor, setCurrentColor] = useState(initialColor);
    const [currentMainImg, setCurrentMainImg] = useState(mainImgsByColor?.[initialColor] || '');
    const [currentSideImgs, setCurrentSideImgs] = useState(sideImgsByColor?.[initialColor] || []);

    useEffect(() => {
        if (mainImgsByColor && sideImgsByColor) {
            setCurrentMainImg(mainImgsByColor[currentColor]);
            setCurrentSideImgs(sideImgsByColor[currentColor]);
        }
    }, [currentColor, mainImgsByColor, sideImgsByColor]);

    const handleImageClick = (img) => {
        setCurrentMainImg(img);
    };

    const handleColorChange = (color) => {
        setCurrentColor(color);
    };

    if (!mainImgsByColor || !sideImgsByColor) {
        return <div>Error: Image data is missing.</div>;
    }

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className="model-container">
                <div className="left-panel">
                    <div className="left-panel-placeholder">
                        <img className="main-img" loading="lazy" alt="bike" src={currentMainImg} />
                        <div className="mid-panel">
                            <div className="mid-panel-container">
                                {currentSideImgs.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`side-img${index + 1}-wrapper`}
                                        onClick={() => handleImageClick(img)}
                                    >
                                        <img className={`side-img${index + 1}`} loading="lazy" alt="bike" src={img} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-panel">
                    <div className="top-content">
                        <h1 className="productTitle">{productTitle}</h1>
                        <div className="des-wrapper">
                            <p className="des">{description}</p>
                        </div>
                    </div>
                    <div className="mid-content">
                        <div className="battery-info">
                            <div className="range-container">
                                <div className="battery-details">
                                    <div className="battery-name">
                                        <div className="battery-capacity">
                                            <span className="battery">BATTERY</span>
                                            <span className="kwh">{battery.capacity}</span>
                                        </div>
                                    </div>
                                    <div className="battery-features">
                                        <div className="features-description">
                                            <span className="battery-features1">BATTERY FEATURES</span>
                                            <div className="lfp-with-1500-container">
                                                {battery.features.map((feature, index) => (
                                                    <span key={index}>{feature}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="battery-warranty">
                                        <div className="warranty-duration">
                                            <span className="battery-warranty1">BATTERY WARRANTY</span>
                                            <span className="years">{battery.warranty}</span>
                                        </div>
                                    </div>
                                    <div className="charging-time">
                                        <span className="charging-time1">CHARGING TIME</span>
                                        <span className="hours-12">{battery.chargingTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="motor-info">
                            <div className="speed-details">
                                <div className="motor-power">
                                    <span className="motor">MOTOR</span>
                                    <span className="w">{motor.power}</span>
                                </div>
                                <div className="max-speed">
                                    <span className="max-speed1">MAX SPEED</span>
                                    <span className="kmh">{maxSpeed}</span>
                                </div>
                                <div className="range-warranty">
                                    <div className="warranty-range-values">
                                        <span className="warranty-on-electroncs">WARRANTY ON ELECTRONICS</span>
                                        <div className="max-range">
                                            <div className="label">MAX RANGE ( @30KM/H )</div>
                                            <div className="value">150</div>
                                        </div>
                                        <div className="max-range">
                                            <div className="label">MAX RANGE ( @45KM/H )</div>
                                            <div className="value">110</div>
                                        </div>
                                        <div className="max-range">
                                            <div className="label">MAX RANGE ( @FULL SPEED )</div>
                                            <div className="value">90</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="color">
                                    <div className="color-options">
                                        <span className="color-options1">Color Options</span>
                                    </div>
                                    <div className="color-palette">
                                        <div className="palette-container">
                                            {Object.keys(mainImgsByColor).map((color, index) => (
                                                <span
                                                    key={index}
                                                    className={`palette-container-child${index}`}
                                                    style={{ backgroundColor: color }}
                                                    onClick={() => {
                                                        handleColorChange(color);
                                                        handleClick();
                                                    }}
                                                ></span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tagline-container">
                <div className="line"></div>
                <p className="tagline">Let’s Elevate Your Ride Experience with
                    Rhyno Where Superiority Meets Comfort
                </p>
            </div>
        </>
    );
};

Model_L1.defaultProps = {
    mainImgsByColor: {},
    sideImgsByColor: {}
};

export default Model_L1;
