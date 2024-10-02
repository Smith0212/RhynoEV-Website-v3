import React, { useRef } from "react";
import "./SwiperSlider.css";
import img1 from '../../assets/r1.png'
import img2 from '../../assets/r2.png'
import img3 from '../../assets/r3.png'
import img4 from '../../assets/r4.png'
import img5 from '../../assets/r5.png'

const SwiperSlider = () => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= slider.offsetWidth;
  };

  const handleNext = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += slider.offsetWidth;
  };

  return (
    <div className="container77">
      <div className="slide-container77" ref={sliderRef}>
        <div className="card-wrapper77">
          <div className="card77">
            <div className="image-box77">
              <img src={img1} alt="" />
            </div>
            <div className="profile-details77">
              {/* <img src="images/profile/profile1.jpg" alt="" /> */}
              <div className="name-job77">
              <h3 className="name77">LPF Battery</h3>
                <p className="job77">Advanced Lithium Iron Phosphate (LFP) batteries and an Active Balancing Smart Battery Management System (Active BMS) makes your Rhyno super safe, long lasting and reliable. This battery is engineered for India’s tough climatic conditions, delivering unmatched safety, durability and performance.</p>
              </div>
            </div>
          </div>
          <div className="card77">
            <div className="image-box77">
              {/* <img src="images/showImg/photographer.jpg" alt="" /> */}
              <img src={img2} alt="" />
            </div>
            <div className="profile-details77">
              {/* <img src="images/profile/profile2.jpg" alt="" /> */}
              <div className="name-job77">
                <h3 className="name77">Wider Tyres</h3>
                <p className="job77">Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud or sandy roads.</p>
              </div>
            </div>
          </div>
          <div className="card77">
            <div className="image-box77">
              {/* <img src="images/showImg/dataAna.jpg" alt="" /> */}
              <img src={img3} alt="" />
            </div>
            <div className="profile-details77">
              {/* <img src="images/profile/profile3.jpg" alt="" /> */}
              <div className="name-job77">
                <h3 className="name77">Range Prediction</h3>
                <p className="job77">Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind. The display provides precise information about the remaining battery percentage, fault indicators and safety diagnostics.</p>
              </div>
            </div>
          </div>
          <div className="card77">
            <div className="image-box77">
              {/* <img src="images/showImg/appDev.jpg" alt="" /> */}
              <img src={img4} alt="" />
            </div>
            <div className="profile-details77">
              {/* <img src="images/profile/profile4.jpg" alt="" /> */}
              <div className="name-job77">
                <h3 className="name77">Extraordinary Experience</h3>
                <p className="job77">Rhyno is more than just a mode of transportation. It’s an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity! This experience is enhanced further with ultra-lightweight handling as if you are gliding on clouds!</p>
              </div>
            </div>
          </div>
          <div className="card77">
            <div className="image-box77">
              {/* <img src="images/showImg/blogger.jpg" alt="" /> */}
              <img src={img5} alt="" />
            </div>
            <div className="profile-details77">
              {/* <img src="images/profile/profile5.jpg" alt="" /> */}
              <div className="name-job77">
                <h3 className="name77">Rugged and Simple design</h3>
                <p className="job77">We’ve had enough of the EVs being fragile plastic toys that break during minor accidents, spending weeks at service stations. We took the bold step of making something raw and rugged. We kept it so simple that even your trusted local mechanic can understand and repair your Rhyno.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-button-prev77 swiper-navBtn77" onClick={handlePrev}>
        &lt;
      </div>
      <div className="swiper-button-next77 swiper-navBtn77" onClick={handleNext}>
        &gt;
      </div>
    </div>
  );
};

export default SwiperSlider;
