import "./App.css";
import Navbar from "./components/navbar/Navbar";
import BuyNow from "./components/buynow/BuyNow";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Compare from "./components/compare/Compare";
import Homeslider from "./components/homeslider/Homeslider";
import Product from "./components/product/Product";
import Carousel from "./components/carousal/Carousal";
import IMG1 from "./assets/Product1.png";
import IMG2 from "./assets/Product2.png";
import IMG3 from "./assets/product3.png";
import Twistycarousel from "./components/twistycarousal/Twistycarousal";
import CombinedCarousel from "./components/combinedcarousel/CombinedCarousel";
import ResponsiveCard from "./components/responsivecards/ResponsiveCards";
import ResponsiveCards from "./components/responsivecards/ResponsiveCards";
import MyCarousal from "./components/MyCarousal/MyCarousal";
import Prodland from "./components/prodland/Prodland";
import Spec from "./components/specs/Specs";
import ColorPicker from "./components/colorpicker/ColorPicker";
import WhyRhynoHeading from "./components/WhyRhynoHeading/WhyRhynoHeading";
import OurProductTitle from "./components/OurProductTitle/OurProductTitle";
import OurProducts from "./components/OurProducts/OurProducts";
import GTX from "./components/GTX/GTX";
import Aboutus from "./components/Aboutus/Aboutus";
import AnimatedTitle from "./components/AnimatedTitle/AnimatedTitle";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import Numbers from "./components/numbers/Numbers";
import Rotate from "./components/twistycarousal/Rotate";
import HomeNew from "./components/home/HomeNew";
import useScrollSnap from "react-use-scroll-snap";
import ContactPage from "./components/ContactNew/ContactPage";
import ContactForm from "./components/ContactNew/ContactForm";
import SpecificationsTable from "./components/compare/SpecificationsTable";
import FAQ from "./components/faq/Faq";

function App() {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 0.3, delay: 0.1});
  return (
    <div>
      <div ref={scrollRef}>
        <div className="snap-scroller-main">
          <HomeNew />
        </div>
        {/* <div className="snap-scroller-main">
          <AnimatedTitle titleText="More Thrills Per Second" startY="-180%" endY="470%" />
        </div> */}
        <div className="snap-scroller-main">
          {/* <AnimatedTitle titleText="More Thrills Per Second" startY="0%" endY="170%" /> */}
          <GTX />
        </div>
        {/* <div className="snap-scroller-main">
          <AnimatedTitle titleText="Our Products" startY="-180%" endY="430%" />
        </div> */}
        <div className="snap-scroller-main">
          <div className="megadivmain h-screen">
            {/* <h1 id="ourProducts">Products</h1> */}
            {/* <AnimatedTitle titleText="Our Products" startY="-50%" endY="50%" /> */}
            <OurProducts />
          </div>
        </div>
      </div>
      <div className="snap-scroller-main">
        <div className="lapscreencomp">
          <Rotate />
        </div>
      </div>
      <div className="snap-scroller-main">
        <div className="mobilescreencomp">
          <ResponsiveCards />
        </div>
      </div>
      {/* <ContactPage/> */}
      <Aboutus/>
      <ContactForm/>
    </div>
  );
}

export default App;
