import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import ContactUs from './routes/ContactUs.jsx'
import AboutUs from './routes/AboutUS.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import BuyNow from './components/buynow/BuyNow.jsx'
import Footer from './components/footer/Footer.jsx'
import BackToTop from './components/backtotop/BackToTop.jsx'
import Compare from './components/compare/Compare.jsx'
import PreLoader from './components/PreLoader/PreLoader.jsx';
import SE03 from './routes/SE03.jsx'
import SE03MAX from './routes/SE03MAX.jsx'
import SE03LITE from './routes/SE03LITE.jsx'
import Rentals from './routes/Rentals.jsx';
import PrivacyPolicy from './routes/PrivacyPolicy.jsx';
import CareersPage from './routes/CareersPage.jsx';
import ContactFormTop from "./components/ContactNew/ContactForm.jsx";
import ContactFormBottom from './components/ContactForm/ContactForm.jsx';
import FooterNew from './components/footer/FooterNew.jsx';
import FAQ from './components/faq/Faq.jsx';
import Faqs from './routes/Faqs.jsx';
import Refund from './routes/Refund.jsx';
import Terms from './routes/Terms.jsx';


  // const [isLoading, setIsLoading] = useState(false);

  // const handleLoadingComplete = () => {
  //   setIsLoading(false);
  // };

  ReactDOM.createRoot(document.getElementById('root')).render (
    <BrowserRouter>
      {/* {isLoading ? (
        <PreLoader onComplete={handleLoadingComplete} />
      ) : ( */}
        <>
          <Navbar />
          {/* <BuyNow /> */}
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='*' element={<Navigate to="/" />} />
            <Route path='/SE03' element={<SE03 />}/>
            <Route path='/SE03MAX' element={<SE03MAX/>}/>
            <Route path='/SE03LITE' element={<SE03LITE/>}/>
            <Route path='/Compare' element={<Compare />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Rentals' element={<Rentals />} />
            <Route path='/Privacy' element={<PrivacyPolicy />} />
            <Route path='/Careers' element={<CareersPage />} />
            <Route path='/Contact-us' element={<Faqs />} />
            <Route path='/Refund' element={<Refund />} />
            <Route path='/Terms' element={<Terms />} />
          </Routes>
          {/* <ContactFormTop /> */}
          <ContactFormBottom />
          {/* <Footer /> */}
          {/* <FooterNew /> */}
          <BackToTop />
        </>
      {/* )} */}
    </BrowserRouter>
  );