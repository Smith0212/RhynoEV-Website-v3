import React from 'react'
import FAQ from '../components/faq/Faq'
import ContactUs from '../components/faq/FaqContact'
import { Helmet } from 'react-helmet';


const Faqs = () => {
  return (
    <div className='bg-white'>
      <Helmet>
        <title>FAQ</title>
        <meta name="description" content="About Rhyno EV Private Limited" />
      </Helmet>
      <ContactUs/>
      <FAQ/>
    </div>
  )
}

export default Faqs
