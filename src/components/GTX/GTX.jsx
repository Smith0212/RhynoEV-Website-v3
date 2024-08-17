// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import IMG from "../../assets/GTX.png"
// import './GTX.css';

// const GTX = () => {

//     const navigate = useNavigate();

//     const handleLearnMoreClick = () => {
//         navigate('/SE03');
//         window.scrollTo(0, 0);
//     };

//     return (
//         <div className="layer-2">
//             <div className="things">
//                 <h3 className="more-thrills-per">More thrills. Per second.</h3>
//                 <div className="gtxDetails">
//                     {/* <div className="rectangle-parent">
//                         <div className="group-child"></div> */}
//                         <div className="all-new">All New</div>
//                     {/* </div> */}
//                     <h2 className="gtx1" id="title">GTX</h2>
//                     <p className="our-digital-display-container">
//                         <span className="our-digital-display-container1">
//                             <span className="our-digital-display">
//                                 Our digital display keeps you informed with real-time range and
//                                 fault indicators. So you can enjoy your ride without anxiety about
//                                 the remaining range.
//                             </span>
//                         </span>
//                     </p>
//                     <span className="starting-at-rs-container">
//                         <span>Starting at </span>
//                         <span className="rs-102220-">Rs. 102,220/-</span>
//                     </span>

//                     <button className="book-now">
//                         Book Now
//                     </button>
//                     <button className="learn-more" onClick={handleLearnMoreClick}>Learn more</button>
//                 </div>
//                 <div className="gtxImg">
//                     <div className="gtx">GTX</div>
//                     <img className="side67-1-icon" alt="GTX img" src={IMG} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GTX;










import React from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from '../../assets/GTX.png';
import HeaderLamp from '../AnimatedTitle/AnimatedTitle';
import './GTX.css';
import { IoIosArrowDropright } from "react-icons/io";


const GTX = () => {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/SE03');
        window.scrollTo(0, 0);
    };

    return (
        <div className="gtx-container">
            {/* <h3 className="header">More thrills. Per second.</h3>
            <div className="header">
                <HeaderLamp title="More Thrills. Per Second." />
            </div> */}
            <div className="gtx-content">
                <div className="gtx-details">
                    <div className="headerText">MORE THRILLS<br/> PER SECOND</div>
                    <div className="badge">ALL NEW</div>
                    <h2 className="title">RHYNO</h2>
                    <p className="description">
                        Our digital display keeps you informed with real-time range and fault indicators.
                        So you can enjoy your ride without anxiety about the remaining range.
                    </p>
                    {/* <div className="price">Starting at <span>Rs. 102,220/-</span></div> */}
                    <div className="buttons">
                        <button className="book-now"><a href="https://wa.me/9023987528" className="book-now-link" target='_blank'>Book Now</a><IoIosArrowDropright size="20px"/></button>
                        <button className="learn-more" onClick={handleLearnMoreClick}>Learn more</button>
                    </div>
                </div>
                <div className="gtx-image-container">
                    <img className="gtx-image" alt="GTX" src={IMG} />
                    <div className="vertical-text">GTX</div>
                </div>
            </div>
        </div>
    );
};

export default GTX;
