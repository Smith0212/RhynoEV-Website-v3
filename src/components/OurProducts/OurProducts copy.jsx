import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Img1 from '../../assets/webp/Product1.svg';
import Img2 from '../../assets/webp/Product2.svg';
import Img3 from '../../assets/webp/product3.svg';
import rightArrow from '../../assets/right-arrow.svg';
import leftArrow from '../../assets/left-arrow.svg';
import './OurProducts.css';

const OurProducts = () => {
    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1);
    const menuItemRefs = useRef([]);
    const navigate = useNavigate();

    const showSlider = (type) => {
        if (isAnimating) return;
        setIsAnimating(true);
        carouselRef.current.style.pointerEvents = 'none';

        let newIndex;
        if (type === 'next') {
            newIndex = (currentIndex + 1) % 3;
        } else {
            newIndex = (currentIndex - 1 + 3) % 3;
        }
        setCurrentIndex(newIndex);

        carouselRef.current.classList.remove('next', 'prev');
        let items = listRef.current.children;
        if (type === 'next') {
            listRef.current.appendChild(items[0]);
            carouselRef.current.classList.add('next');
        } else {
            listRef.current.prepend(items[items.length - 1]);
            carouselRef.current.classList.add('prev');
        }

        carouselRef.current.classList.add('carousel-moving');

        setTimeout(() => {
            setIsAnimating(false);
            carouselRef.current.style.pointerEvents = 'auto';
            carouselRef.current.classList.remove('carousel-moving');
        }, 2000); 
    };

    const handleMouseMove = (e) => {
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const halfWidth = carouselRect.width * 0.3;
        if (e.clientX > carouselRect.left + halfWidth) {
            carouselRef.current.style.cursor = `url(${rightArrow}) 16 16, auto`;
        } else {
            carouselRef.current.style.cursor = `url(${leftArrow}) 16 16, auto`;
        }
    };

    const handleClick = (e) => {
        if (isDetailOpen) return;
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const halfWidth = carouselRect.width * 0.379;
        if (e.clientX > carouselRect.left + halfWidth) {
            showSlider('next');
        } else {
            showSlider('prev');
        }
    };

    const handleSeeMoreClick = () => {
        carouselRef.current.classList.remove('next', 'prev');
        carouselRef.current.classList.add('showDetail');
        setIsDetailOpen(true);
    };

    const handleBackClick = () => {
        carouselRef.current.classList.remove('showDetail');
        setIsDetailOpen(false);
    };

    const handleCheckout = (to) => {
        navigate(to);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const seeMoreButtons = carouselRef.current.querySelectorAll('.seeMore');
        seeMoreButtons.forEach((button) => {
            button.onclick = handleSeeMoreClick;
        });
    }, []);

    useEffect(() => {
        const activeItem = menuItemRefs.current[currentIndex];
        const highlightBar = document.querySelector('.highlight-bar');
        if (activeItem && highlightBar) {
            highlightBar.style.top = `${activeItem.offsetTop + activeItem.offsetHeight / 2 - highlightBar.offsetHeight / 2}px`;
        }
    }, [currentIndex]);

    return (
        <div className="prodContainer">
            <div className="vertical-menu">
                {['GTX', 'GTX MAX', 'GTX LITE'].map((item, index) => (
                    <div
                        key={index}
                        className={`menu-item ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        ref={el => menuItemRefs.current[index] = el}
                    >
                        {item} 
                    </div>
                ))}
                <div className="highlight-bar"></div>
            </div>
            <div className="carousel" ref={carouselRef} onMouseMove={handleMouseMove} onClick={handleClick}>
                <div className="list" ref={listRef}>
                    {products.map((product, index) => (
                        <div className="item" key={index}>
                            <img src={product.image} alt={product.topic} />
                            <div className="introduce">
                                <div className="topic">{product.topic}</div>
                                <div className="des">{product.description}</div>
                                <button className="seeMore">SEE MORE &#8599;</button>
                            </div>
                            <div className="detail">
                                <div className="title">{product.detailTitle}</div>
                                <div className="des">{product.detailDescription}</div>
                                <div className="specifications">
                                    {product.specifications.map((spec, index) => (
                                        <div key={index}>
                                            <p>{spec.name}</p>
                                            <p>{spec.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="checkout">
                                    <button onClick={() => handleCheckout(product.nevigatTo)}>CHECKOUT</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrows">
                    <button id="back" onClick={handleBackClick}>
                        See All &#8599;
                    </button>
                </div>
            </div>
        </div>
    );
};

const products = [
    {
        image: `${Img1}`,
        topic: 'GTX',
        description: 'Indulge in the perfect harmony of power and range with this Rhyno. This beast is ready to roar on the roads, providing an electrifying journey at every turn.',
        detailTitle: 'GTX',
        detailDescription: 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. ',
        specifications: [
            { name: 'Battery', value: '2.7 Kwh' },
            { name: 'Warranty', value: '3 Years' },
            { name: 'Charging', value: '4 hours' },
            { name: 'Speed', value: '55 Km/Hr' },
            { name: 'Range', value: '150 Kms' },
        ],
        nevigatTo: '/SE03',
    },
    {
        image: `${Img2}`,
        topic: 'GTX MAX',
        description: 'This Rhyno is tuned for long drives and no thrills. Perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge.',
        detailTitle: 'GTX MAX',
        detailDescription: 'This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.',
        specifications: [
            { name: 'Battery', value: '2.7 Kwh' },
            { name: 'Warranty', value: '3 Years' },
            { name: 'Charging', value: '4 hours' },
            { name: 'Speed', value: '55 Km/Hr' },
            { name: 'Range', value: '150 Kms' },
        ],
        nevigatTo: '/SE03MAX',
    },
    {
        image: `${Img3}`,
        topic: 'GTX LITE',
        description: 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor',
        detailTitle: 'GTX LITE',
        detailDescription: 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn.',
        specifications: [
            { name: 'Battery', value: '1.8 Kwh' },
            { name: 'Warranty', value: '3 Years' },
            { name: 'Charging', value: '3 hours' },
            { name: 'Speed', value: '50 Km/Hr' },
            { name: 'Range', value: '100 Kms' },
        ],
        nevigatTo: '/SE03LITE',
    },
    {
        image: `${Img1}`,
        topic: 'GTX',
        description: 'Indulge in the perfect harmony of power and range with this Rhyno. This beast is ready to roar on the roads, providing an electrifying journey at every turn.',
        detailTitle: 'GTX',
        detailDescription: 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. ',
        specifications: [
            { name: 'Battery', value: '2.7 Kwh' },
            { name: 'Warranty', value: '3 Years' },
            { name: 'Charging', value: '4 hours' },
            { name: 'Speed', value: '55 Km/Hr' },
            { name: 'Range', value: '150 Kms' },
        ],
        nevigatTo: '/SE03',
    },
    {
        image: `${Img2}`,
        topic: 'GTX MAX',
        description: 'This Rhyno is tuned for long drives and no thrills. Perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge.',
        detailTitle: 'GTX MAX',
        detailDescription: 'This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.',
        specifications: [
            { name: 'Battery', value: '2.7 Kwh' },
            { name: 'Warranty', value: '3 Years' },
            { name: 'Charging', value: '4 hours' },
            { name: 'Speed', value: '55 Km/Hr' },
            { name: 'Range', value: '150 Kms' },
        ],
        nevigatTo: '/SE03MAX',
    },
    {
        image: `${Img3}`,
        topic: 'GTX LITE',
        description: 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor',
        detailTitle: 'GTX LITE',
        detailDescription: 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn.',
        specifications: [
            { name: 'Battery', value: '1.8 Kwh' },
            { name: 'Warranty', value: '3 Years' },
            { name: 'Charging', value: '3 hours' },
            { name: 'Speed', value: '50 Km/Hr' },
            { name: 'Range', value: '100 Kms' },
        ],
        nevigatTo: '/SE03LITE',
    },
];

export default OurProducts;
