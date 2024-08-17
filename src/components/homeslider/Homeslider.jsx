import React, { useState, useEffect } from "react";
import "./Homeslider.css";

const Homeslider = () => {

  // const [initialAnimation, setInitialAnimation] = useState(true);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setInitialAnimation(false);
    //   initializeCarousel();
    // }, 2200);

    // const initializeCarousel = () => {
      $('#carouselExampleIndicators').carousel();
    // };

    // return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-md-12 navbar">
				<a href="index.html" className="logo navbar-brand text-white offset-md-2">Logo</a>
				<ul className="nav">
					<li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
					<li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
					<li className="nav-item"><a href="#" className="nav-link">Portfolio</a></li>
					<li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
				</ul>
			</div> */}

          <div
            id="carouselExampleIndicators"
            className={`carousel slide `}
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="info">
                  <h1>
                    LET'S ELEVATE YOUR RIDE EXPERIENCE WITH <span className="spany">RHYNO</span> WHERE
                    SUPERIORITY MEETS <span className="spany">COMFORT</span>
                  </h1>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p> */}
                </div>
              </div>
              <div className="carousel-item">
                <div className="info">
                  <h1>
                    LET'S ELEVATE YOUR RIDE EXPERIENCE WITH <span className="spany">RHYNO</span> WHERE
                    SUPERIORITY MEETS <span className="spany">STYLE</span>
                  </h1>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p> */}
                </div>
              </div>
              <div className="carousel-item">
                <div className="info">
                  <h1>
                    LET'S ELEVATE YOUR RIDE EXPERIENCE WITH <span className="spany">RHYNO</span> WHERE
                    SUPERIORITY MEETS <span className="spany">ELEGANCE</span>
                  </h1>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p> */}
                </div>
              </div>
              <div className="carousel-item">
                <div className="info">
                  <h1>
                    LET'S ELEVATE YOUR RIDE EXPERIENCE WITH <span className="spany">RHYNO</span> WHERE
                    SUPERIORITY MEETS <span className="spany">MINIMILISM</span>
                  </h1>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p> */}
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeslider;