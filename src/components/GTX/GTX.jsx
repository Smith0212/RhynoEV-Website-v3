import React from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import IMG from '../../assets/GTX.png';
import './GTX.css';
import Formmain from '../popupform/Formmain';
import Formmain2 from '../popupform/Formmain2';

const GTX = () => {
    const handleLearnMoreClick = () => {
        const section = document.getElementById('learnmore');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="gtx-container">
            <div className="gtx-content">
                <div className="gtx-details">
                    <h1 className="headerText">The Thrilling Machine</h1>
                    <div className="badge">ALL NEW</div>
                    <h1 className="title">RHYNO GTX Series</h1>
                    <p className="description">
                        For those who don’t like a boring scooter! Immerse yourself into a never-before-experience. Stand out from the crowd. Now
                    </p>
                    <div className="buttons">
                        {/* <button className="book-now">
                            <a href="https://wa.me/9023987528" className="book-now-link" target='_blank' rel="noopener noreferrer">
                                Book Now
                            </a>
                            <IoIosArrowDropright size="20px" />
                        </button> */}
                        <Formmain2/>
                        <button className="learn-more" onClick={handleLearnMoreClick}>Learn more</button>
                    </div>
                </div>
                <div className="gtx-image-container">
                    <img className="gtx-image" src={IMG} alt="GTX Series" />
                </div>
            </div>

        </div>
    );
};

export default GTX;
