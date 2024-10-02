import React, { useState } from "react";
import img1 from '../../assets/t1.png';
import './TestimonialCard.css';

const testimonials = [
  {
    id: 1,
    title: "Rhyno saved me from an accident!",
    description:
      "While taking a turn on Rhyno, I encountered sudden gravel in the road which made the vehicle skid. I am glad I was on Rhyno. Any other vehicle would have fallen.",
    name: "Vaibhav Raj Pandey",
    position: "CEO, Cleaneo App Technologies",
    image: img1
  },
  {
    id: 2,
    title: "Rhyno is a game-changer!",
    description:
      "I’ve never felt safer on any other vehicle. Rhyno’s stability and design are unmatched.",
    name: "Rohit Sharma",
    position: "Product Manager, TechCorp",
    image: img1
  },
  {
    id: 3,
    title: "Best investment ever!",
    description:
      "Purchasing Rhyno has been the best decision of my life. Its performance is superb.",
    name: "Amit Patel",
    position: "Founder, StartupX",
    image: img1
  }
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonial-container">
      {/* Heading */}
      <h1 className="testimonial-heading">Tips by Our Customers</h1>

      {/* Testimonial Section */}
      <div className="testimonial-card">
        {/* Text Content */}
        <div className="testimonial-content">
          <h2 className="testimonial-title">
            {currentTestimonial.title}
          </h2>
          <p className="testimonial-description">
            {currentTestimonial.description}
          </p>
          <div className="testimonial-author">
            <h3>{currentTestimonial.name}</h3>
            <p>{currentTestimonial.position}</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="testimonial-image">
          <img
            src={currentTestimonial.image}
            alt="Testimonial"
          />
        </div>

        {/* Next Button */}
        <button onClick={handleNext} className="testimonial-button">
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
