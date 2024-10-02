import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="ft-maindiv">
          <h2>Let's connect and collaborate</h2>
          <div className="ft-links">
            <div className="ft-mails">
              <small>Email</small>
              <p><a href="">info@rhyno.in</a></p>

              <small>Call on</small>
              <p><a href="">+91 9023987528</a></p>
            </div>
            <div className="ft-add">
              <small>Visit us</small>
              <p>Rhyno Wheels Private Limited, 05, Jay Industrial Park, Nana Chiloda Ring Road Circle,  Muthiya, Ahmedabad, Gujarat, India. 382330.
              </p>
            </div>
            <div className="ft-lets">
              <small>Lets connect</small>
              <p><a href="mailto:info@rhyno.in" onClick={handleClick}>Drop a Message <i className="fas fa-chevron-right"></i></a></p>
            </div>
          </div>

          <small>Quick Links</small>
          <div className="ft-quick">
            <li><Link to='/Privacy' onClick={handleClick}>Privacy Policy</Link></li>
            <li><Link to='/ContactUs' onClick={handleClick}>Contact Us</Link></li>
            <li><Link to='/Careers' onClick={handleClick}>Careers</Link></li>
            <li><Link to='/Rentals' onClick={handleClick}>Rentals</Link></li>
          </div>
          <p>Copyright &copy; 2024 RHYNO Wheels Private Limited. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
