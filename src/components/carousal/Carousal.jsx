import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Carousal.css';

const Carousel = ({ Data, TextData }) => {
  const [FlowDirection, setFlowDirection] = useState(true);
  const [CenterId, setCenterId] = useState(0);
  const [LeftId, setLeftId] = useState(Data.length - 1);
  const [RightId, setRightId] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const nextBtn = () => {
    if (LeftId === Data.length - 1) {
      setLeftId(0);
    } else {
      setLeftId(LeftId + 1);
    }
    if (CenterId === Data.length - 1) {
      setCenterId(0);
    } else {
      setCenterId(CenterId + 1);
    }

    if (RightId === Data.length - 1) {
      setRightId(0);
    } else {
      setRightId(RightId + 1);
    }
    setFlowDirection(true);
  };

  const prevBtn = () => {
    setFlowDirection(false);
    if (LeftId === 0) {
      setLeftId(Data.length - 1);
    } else {
      setLeftId(LeftId - 1);
    }
    if (CenterId === 0) {
      setCenterId(Data.length - 1);
    } else {
      setCenterId(CenterId - 1);
    }
    if (RightId === 0) {
      setRightId(Data.length - 1);
    } else {
      setRightId(RightId - 1);
    }
  };

  const isSmallScreen = screenWidth <= 686;
  const isVerySmallScreen = screenWidth <= 440;

  const variants = {
    center: {
      x: '0rem',
      opacity: 1,
      scale: 1.1,
      zIndex: '5',
      filter: 'brightness(100%)',
      backgroundImage: 'url(' + Data[CenterId] + ')',
      // backgroundSize:'50%',
      backgroundColor:'#bababa',
      boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.3)',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    left: {
      x: isVerySmallScreen ? '-3rem' : isSmallScreen ? '-6rem' : '-10rem',
      opacity: 1,
      filter: 'brightness(40%)',
      scale: 1,
      backgroundImage: 'url(' + Data[LeftId] + ')',
      // backgroundSize:'80%',
      backgroundColor:'#bababa',
      zIndex: '4',
      boxShadow: 'unset',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    right: {
      backgroundImage: 'url(' + Data[RightId] + ')',
      // backgroundSize:'50%',
      x: isVerySmallScreen ? '3rem' : isSmallScreen ? '6rem' : '10rem',
      opacity: 1,
      filter: 'brightness(40%)',
      backgroundColor:'#bababa',
      scale: 1,
      boxShadow: 'unset',
      zIndex: '3',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    rightHidden: {
      x: isVerySmallScreen ? '3rem' : isSmallScreen ? '6rem' : '8rem',
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      x: isVerySmallScreen ? '-3rem' : isSmallScreen ? '-6rem' : '-8rem',
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <motion.div className="carousel-wrapper1">
      <motion.div className="carousel-content1">
        <AnimatePresence initial={false}>
          <motion.div
            key={LeftId}
            variants={variants}
            initial={FlowDirection ? 'center' : 'leftHidden'}
            animate="left"
            exit={'leftHidden'}
            className="carousel-item1"
          >
            <div className="carousel-text1">{TextData[LeftId]}</div>
          </motion.div>
          <motion.div
            variants={variants}
            key={CenterId}
            initial={FlowDirection ? 'right' : 'left'}
            animate="center"
            className="carousel-item1"
          >
            <div className="carousel-text1">{TextData[CenterId]}</div>
          </motion.div>
          <motion.div
            key={RightId}
            variants={variants}
            initial={FlowDirection ? 'rightHidden' : 'center'}
            animate="right"
            exit={'rightHidden'}
            className="carousel-item1"
          >
            <div className="carousel-text1">{TextData[RightId]}</div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="carousel-btns1">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="bwd-btn"
          onClick={prevBtn}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="fwd-btn"
          onClick={nextBtn}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Carousel;
