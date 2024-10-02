import React from 'react'
// import './Privacy.css'
import { Helmet } from 'react-helmet';


const Terms = () => {
  return (
    <div>
      <Helmet>
        <title>Careers</title>
        <meta name="description" content="Careers at Rhyno EV Private Limited" />
      </Helmet>
      <div className="bg-white text-black mt-20 p-10">
        <div className='w-4/5 mx-auto py-10'>
          <h1 className='text-5xl'>Terms of Services</h1>
          <p className='text-lg leading-relaxed text-justify mt-10'>
          Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, RHYNO EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.
          </p>
          <p className='text-lg leading-relaxed text-justify mt-4'>With our first product, we've taken a bold step to create something more than just a vehicle; it's a unique experience of elegance, comfort, and style, addressing the pitfalls of conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new era in sustainable and dependable electric transportation.
</p>
        </div>
      </div>
    </div>
  )
}

export default Terms
