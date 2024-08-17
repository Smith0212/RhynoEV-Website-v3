import React from 'react'
import './RentalPage.css'
import IMG1 from '../../assets/Logo.png'

const RentalsPage = () => {
  return (
    <div>
      <div className="ap-maindiv">
        <div className="ap-textdiv">
          <h1>Rentals</h1>
          <p>
          Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.
          </p>
          <p>Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
</p>
        </div>
      </div>

      <div className="download-the-app">
        <div className="download-logo-div">
            <img src={IMG1} alt="logo" />
        </div>
        <div className="download-button-div">
            <a href="https://play.google.com" class="store-button google" target='__blank'>
            <i class="fa-brands fa-google-play"></i>
        <div class="text">
            <span>GET IT ON</span>
            <span>Google Play</span>
        </div>
    </a>
            <a href="https://apps.apple.com" class="store-button apple" target='__blank'>
            <i class="fa-brands fa-apple"></i>
        <div class="text">
            <span>GET IT ON</span>
            <span>Apple Store</span>
        </div>
    </a>
    
        </div>
      </div>
    </div>
  )
}

export default RentalsPage
