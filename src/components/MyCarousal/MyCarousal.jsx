import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Slider.css';

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const countOfPages = 3;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const intervalId = useRef(null);
  const sliderRef = useRef(null);

  const switchPages = (newPage) => {
    setCurrentPage(newPage);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      switchPages(currentPage - 1);
    } else {
      switchPages(countOfPages);
    }
  };

  const goToNextPage = () => {
    if (currentPage < countOfPages) {
      switchPages(currentPage + 1);
    } else {
      switchPages(1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      goToNextPage();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      goToPreviousPage();
    }
  };

  const startAutoSlide = () => {
    intervalId.current = setInterval(() => {
      if (currentPage < countOfPages) {
        switchPages(currentPage + 1);
      } else {
        switchPages(1);
      }
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalId.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
    };
  }, [currentPage]);

  const navigate = useNavigate();
  const handleButtonClick = (to) => {
    navigate(to);
  };

  return (
    <section
      ref={sliderRef}
      className="slider-pages"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className="nav-button left-button" onClick={goToPreviousPage}>◀</button>
      <button className="nav-button right-button" onClick={goToNextPage}>▶</button>

      <article className={`js-scrolling__page js-scrolling__page-1 ${currentPage === 1 ? 'js-scrolling--active' : 'js-scrolling--inactive'}`}>
        <div className="slider-page slider-page--right">
          <div className="slider-page--skew">
            <div className="slider-page__content"></div>
          </div>
        </div>
        <div className="slider-page slider-page--left">
          <div className="slider-page--skew">
            <div
              className="slider-page__content"
              onMouseEnter={stopAutoSlide}
              onMouseLeave={startAutoSlide}
            >
              <h1 className="slider-page__title">SE03</h1>
              {/* <h2 className="slider-page__description">Short description of specific bike model </h2> */}
              <button className="button button-red" onClick={() => handleButtonClick("/SE03")}>know more</button>
            </div>
          </div>
        </div>
      </article>

      <article className={`js-scrolling__page js-scrolling__page-2 ${currentPage === 2 ? 'js-scrolling--active' : 'js-scrolling--inactive'}`}>
        <div className="slider-page slider-page--right">
          <div className="slider-page--skew">
            <div
              className="slider-page__content"
              onMouseEnter={stopAutoSlide}
              onMouseLeave={startAutoSlide}
            >
              <h1 className="slider-page__title">SE03 MAX</h1>
              {/* <h2 className="slider-page__description">Short description of specific bike model </h2> */}
              <button className="button button-black" onClick={() => handleButtonClick("/SE03MAX")}>know more</button>
            </div>
          </div>
        </div>
        <div className="slider-page slider-page--left">
          <div className="slider-page--skew">
            <div className="slider-page__content"></div>
          </div>
        </div>
      </article>

      <article className={`js-scrolling__page js-scrolling__page-3 ${currentPage === 3 ? 'js-scrolling--active' : 'js-scrolling--inactive'}`}>
        <div className="slider-page slider-page--right">
          <div className="slider-page--skew">
            <div className="slider-page__content"></div>
          </div>
        </div>
        <div className="slider-page slider-page--left">
          <div className="slider-page--skew">
            <div
              className="slider-page__content"
              onMouseEnter={stopAutoSlide}
              onMouseLeave={startAutoSlide}
            >
              <h1 className="slider-page__title">SE03 Lite</h1>
              {/* <h2 className="slider-page__description">Short description of specific bike model </h2> */}
              <button className="button button-blue" onClick={() => handleButtonClick("/SE03LITE")}>know more</button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Slider;
