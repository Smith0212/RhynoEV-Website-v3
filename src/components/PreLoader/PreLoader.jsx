import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import './PreLoader.css';
import Logo from "../../assets/Rhyno Logo Italic Transperant.png";

const PreLoader = ({ onComplete }) => {

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to('.header > h1', {
            duration: 2,
            top: 0,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.3,
            },
            onComplete: () => {
                document.querySelectorAll('.header > h1').forEach(el => {
                    el.classList.add('filled');
                });
            }
        }).fromTo('.pre-loader-img img', {
            duration: 1,
            opacity: 0,
            scale: 3,
            y: 0,
            ease: 'power4.out',
        },
            {
                delay: 1.5,
                opacity: 1,
                scale: 1,
                y: '-12%',

            }).to('.pre-loader', {
                delay: 1,
                duration: 2,
                y: '-120%',
                ease: 'power2.inOut',
                borderRadius: '45%',
                onComplete: () => {
                    setTimeout(onComplete, 100);
                }
            });

    }, [onComplete]);

    return (
        <div className="pre-loader">
            <div className="pre-loader-container">
                <div className="pre-loader-header">
                    {headers.map((header, index) => (
                        <div className={`header ${header.concat ? 'concat' : ''}`} key={index}>
                            {header.texts.map((text, i) => (
                                <React.Fragment key={i}>
                                    <h1 data-text={text.dataText}>{text.content}</h1>
                                    {i < header.texts.length - 1 && <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                                </React.Fragment>
                            ))}
                            <div className="header-wrapper"></div>
                        </div>
                    ))}
                </div>
                <div className="pre-loader-img">
                    <img src={Logo} alt="Rhyno" />
                </div>
            </div>
        </div>
    );
}

const headers = [
    { texts: [{ content: "Let's Elevate" }] },
    { texts: [{ content: "Your Ride Experience" }] },
    { concat: true, texts: [{ content: "with" }, { content: "Rhyno", dataText: "Rhyno" }] },
    { texts: [{ content: "Where Superiority" }] },
    { concat: true, texts: [{ content: "Meets" }, { content: "Style", dataText: "Style" }] }
];

export default PreLoader;














// import React, { useState, useRef, useEffect } from 'react';
// import Img1 from "../../assets/Product1.png";
// import Img2 from "../../assets/Product2.png";
// import Img3 from "../../assets/product3.png";
// import './OurProducts.css';

// const Carousel = () => {
//     const carouselRef = useRef(null);
//     const listRef = useRef(null);
//     const [isAnimating, setIsAnimating] = useState(false);
//     const [isDetailOpen, setIsDetailOpen] = useState(false);
//     let unAcceptClick;

//     const showSlider = (type) => {
//         if (isAnimating) return;
//         setIsAnimating(true);

//         carouselRef.current.style.pointerEvents = 'none';

//         carouselRef.current.classList.remove('next', 'prev');
//         let items = listRef.current.children;
//         if (type === 'next') {
//             listRef.current.appendChild(items[0]);
//             carouselRef.current.classList.add('next');
//         } else {
//             listRef.current.prepend(items[items.length - 1]);
//             carouselRef.current.classList.add('prev');
//         }

//         clearTimeout(unAcceptClick);
//         unAcceptClick = setTimeout(() => {
//             setIsAnimating(false);
//             carouselRef.current.style.pointerEvents = 'auto';
//         }, 2000);
//     }

//     const handleMouseMove = (e) => {
//         const carouselRect = carouselRef.current.getBoundingClientRect();
//         const halfWidth = carouselRect.width / 2;

//         if (e.clientX > carouselRect.left + halfWidth) {
//             carouselRef.current.style.cursor = "url('right-arrow.png'), auto";
//         } else {
//             carouselRef.current.style.cursor = "url('left-arrow.png'), auto";
//         }
//     }

//     const handleClick = (e) => {
//         if (isDetailOpen) return;

//         const carouselRect = carouselRef.current.getBoundingClientRect();
//         const halfWidth = carouselRect.width / 2;

//         if (e.clientX > carouselRect.left + halfWidth) {
//             showSlider('next');
//         } else {
//             showSlider('prev');
//         }
//     }

//     const handleSeeMoreClick = () => {
//         carouselRef.current.classList.remove('next', 'prev');
//         carouselRef.current.classList.add('showDetail');
//         setIsDetailOpen(true);
//     }

//     const handleBackClick = () => {
//         carouselRef.current.classList.remove('showDetail');
//         setTimeout(() => {
//             setIsDetailOpen(false);
//         }, 2000);
//     }

//     useEffect(() => {
//         const seeMoreButtons = carouselRef.current.querySelectorAll('.seeMore');
//         seeMoreButtons.forEach(button => {
//             button.onclick = handleSeeMoreClick;
//         });
//     }, []);

//     return (
//         <div
//             className="carousel"
//             ref={carouselRef}
//             onMouseMove={handleMouseMove}
//             onClick={handleClick}
//         >
//             <div className="list" ref={listRef}>
//                 {products.map((product, index) => (
//                     <div className="item" key={index}>
//                         <img src={product.image} alt={product.topic} />
//                         <div className="introduce">
//                             <div className="title">OUR PRODUCTS</div>
//                             <div className="topic">{product.topic}</div>
//                             <div className="des">{product.description}</div>
//                             <button className="seeMore">
//                                 SEE MORE &#8599;
//                             </button>
//                         </div>
//                         <div className="detail">
//                             <div className="title">{product.detailTitle}</div>
//                             <div className="des">{product.detailDescription}</div>
//                             <div className="specifications">
//                                 {product.specifications.map((spec, index) => (
//                                     <div key={index}>
//                                         <p>{spec.name}</p>
//                                         <p>{spec.value}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="checkout">
//                                 <button>ADD TO CART</button>
//                                 <button>CHECKOUT</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="arrows">
//                 <button id="back" onClick={handleBackClick}>
//                     See All &#8599;
//                 </button>
//             </div>
//         </div>
//     );
// };

// const products = [
//     {
//         image: `${Img1}`,
//         topic: 'SE03',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
//         detailTitle: 'SE03',
//         detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
//         specifications: [
//             { name: 'Used Time', value: '6 hours' },
//             { name: 'Charging port', value: 'Type-C' },
//             { name: 'Compatible', value: 'Android' },
//             { name: 'Bluetooth', value: '5.3' },
//             { name: 'Controlled', value: 'Touch' },
//         ],
//     },
//     {
//         image: `${Img2}`,
//         topic: 'SE03 MAX',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
//         detailTitle: 'SE03 MAX',
//         detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
//         specifications: [
//             { name: 'Used Time', value: '6 hours' },
//             { name: 'Charging port', value: 'Type-C' },
//             { name: 'Compatible', value: 'Android' },
//             { name: 'Bluetooth', value: '5.3' },
//             { name: 'Controlled', value: 'Touch' },
//         ],
//     },
//     {
//         image: `${Img3}`,
//         topic: 'SE03 LITE',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
//         detailTitle: 'SE03 LITE',
//         detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
//         specifications: [
//             { name: 'Used Time', value: '6 hours' },
//             { name: 'Charging port', value: 'Type-C' },
//             { name: 'Compatible', value: 'Android' },
//             { name: 'Bluetooth', value: '5.3' },
//             { name: 'Controlled', value: 'Touch' },
//         ],
//     },
//     {
//         image: `${Img1}`,
//         topic: 'SE03',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
//         detailTitle: 'SE03',
//         detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
//         specifications: [
//             { name: 'Used Time', value: '6 hours' },
//             { name: 'Charging port', value: 'Type-C' },
//             { name: 'Compatible', value: 'Android' },
//             { name: 'Bluetooth', value: '5.3' },
//             { name: 'Controlled', value: 'Touch' },
//         ],
//     },
//     {
//         image: `${Img2}`,
//         topic: 'SE03 MAX',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
//         detailTitle: 'SE03 MAX',
//         detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
//         specifications: [
//             { name: 'Used Time', value: '6 hours' },
//             { name: 'Charging port', value: 'Type-C' },
//             { name: 'Compatible', value: 'Android' },
//             { name: 'Bluetooth', value: '5.3' },
//             { name: 'Controlled', value: 'Touch' },
//         ],
//     },
//     {
//         image: `${Img3}`,
//         topic: 'SE03 LITE',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
//         detailTitle: 'SE03 LITE',
//         detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
//         specifications: [
//             { name: 'Used Time', value: '6 hours' },
//             { name: 'Charging port', value: 'Type-C' },
//             { name: 'Compatible', value: 'Android' },
//             { name: 'Bluetooth', value: '5.3' },
//             { name: 'Controlled', value: 'Touch' },
//         ],
//     },
// ];

// export default Carousel;