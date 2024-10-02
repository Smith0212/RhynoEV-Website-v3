import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from "../../assets/Logo.png";
import { Link } from 'react-router-dom';
import Formmain from '../popupform/Formmain';

const Navbar = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
    setNavOpen(false);
  };

  const openNav = () => {
    setNavOpen(true);
    setSearchOpen(false);
  };

  const closeNav = () => {
    setNavOpen(false);
    setProductsOpen(false);
  };

  const toggleProducts = () => {
    setProductsOpen(!isProductsOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.btn').classList.add('animate');
    }, 1375);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.nav').classList.add('animate');
      setTimeout(() => {
        document.querySelector('.logo').classList.add('animate');
      }, 300);
      setTimeout(() => {
        const navLinks = document.querySelectorAll('.nav-linksss li');
        navLinks.forEach((link, index) => {
          setTimeout(() => {
            link.classList.add('animate');
          }, (index + 1) * 180);
        });
      }, 350);
    }, 0);
  }, []);

  return (
    <nav className={`nav ${isSearchOpen ? 'openSearch' : ''} ${isNavOpen ? 'openNav' : ''}`}>
      <Link to="/">
        <img src={Logo} alt="" className="logo" onClick={closeNav} />
      </Link>
      <ul className="nav-linksss">
        <i className="fa-solid fa-xmark navCloseBtn" onClick={closeNav} id="nav-toggler"></i>
        <li><Link to="/" onClick={closeNav}>Home</Link></li>
        <li
          className="dropdown-wrapper"
          onMouseEnter={toggleProducts}
          onMouseLeave={toggleProducts}
        >
          <a href="#" className="dropdown-togglele">Products <i className={`uil ${isProductsOpen ? 'uil-angle-up' : 'uil-angle-down'}`}></i></a>
          <ul className="dropdown">
            <li>
              <Link to="/SE03" onClick={() => { closeNav(); handleClick(); }}>
                SE03
              </Link>
            </li>
            <li>
              <Link to="/SE03MAX" onClick={() => { closeNav(); handleClick(); }}>
                SE03 MAX
              </Link>
            </li>
            <li>
              <Link to="/SE03LITE" onClick={() => { closeNav(); handleClick(); }}>
                SE03 LITE
              </Link>
            </li>
            <li>
              <Link to="/Compare" onClick={() => { closeNav(); handleClick(); }}>
                Compare
              </Link>
            </li>
          </ul>
        </li>
        <li><Link to="/Rentals" onClick={() => { closeNav(); handleClick(); }}>Rentals</Link></li>
        <li><Link to='/AboutUs' onClick={() => { closeNav(); handleClick(); }}>About Us</Link></li>
        <li><Link to='/Contact-us' onClick={() => { closeNav(); handleClick(); }}>Contact Us</Link></li>
      </ul>
      {/* <button className="search-icon btn btn-nav" id="searchIcon"><a href="https://wa.me/9023987528" target='_blank'> Order Now </a></button> */}
      <Formmain />
      <i className="fas fa-bars navOpenBtn" onClick={openNav} id="nav-toggler"></i>
    </nav>
  );
};

export default Navbar;
