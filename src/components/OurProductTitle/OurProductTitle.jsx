import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Img from "../../assets/10.png";
import ImgC from "../../assets/10c.png";
import Sparkles from '../Sparkles/Sparkles';
import './OurProductTitle.css';

const OurProductTitle = () => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const img = new Image();
        img.src = {Img};
        img.onload = () => {
            setImageLoaded(true);
        };

        gsap.registerPlugin(ScrollTrigger);

        const scrollAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: ".sparkles-container",
                markers: false,
                start: 'top 0%',
                end: '+=350%',
                scrub: 4,
                pin: true,
            },
        });

        scrollAnimation
            .to(".scroll-wrap", { x: "-120%" })
            .to(".sparkles-container", { opacity: 0 }, "<");

        return () => {
            scrollAnimation.kill();
        };
    }, []);


    return (
        <div className="sparkles-container">
            <Sparkles
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={75}
                className="sparkles-container"
            />
            <div className="scroll-wrap">
                {imageLoaded ? (
                    <img ref={imgRef} src={Img} className="img" alt="Bike img" loading="lazy" />
                ) : (
                    <img ref={imgRef} src={ImgC} className="img" alt="Loading..." loading="lazy" />
                )}
                <h1 className="sparkles-heading">Have look to Our three core Products and specifictions</h1>
            </div>
        </div>
    );
}

export default OurProductTitle;