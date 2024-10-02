import React from 'react'
import BuyNow from '../components/buynow/BuyNow'
import Privacy from '../components/privacy/Privacy'
import ContactForm from '../components/ContactNew/ContactForm'
import { Helmet } from 'react-helmet';


const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policies at Rhyno EV Private Limited" />
      </Helmet>
      <Privacy/>
      <BuyNow/>
      <ContactForm/>
    </div>
  )
}

export default PrivacyPolicy
