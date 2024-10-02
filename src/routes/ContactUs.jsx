import React from 'react'
import Contact from '../components/contact/Contact'
import BuyNow from '../components/buynow/BuyNow'
import ContactForm from '../components/ContactNew/ContactForm'
import { Helmet } from 'react-helmet';


const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact US</title>
        <meta name="description" content="Contact Us for Rhyno EV Private Limited" />
      </Helmet>
      <Contact/>
      <BuyNow/>
      <ContactForm/>
    </div>
  )
}

export default ContactUs