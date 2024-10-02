import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  const form = useRef();
  const navigate = useNavigate();
  const [subject, setSubject] = useState('Product Inquiry');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r6tppud', 'template_syhmdrq', form.current, 'dlfvxaLtJUSBW3FmH')
      .then((result) => {
        console.log(result.text);
        setLoading(true);
        // Simulate a loading state for 2 seconds
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 2000);
      }, (error) => {
        console.log(error.text);
      });
      
    e.target.reset();
  };

  return (
    <div className="max-w-xl mx-auto p-4 mt-24">
      <h2 className="text-3xl font-semibold text-center mb-4 text-gray-600">Contact Us</h2>
      <p className="text-center text-gray-600 mb-8">Any question or remarks? Just write us a message!</p>
      
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="w-full text-black focus:outline-none py-2 border-class"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="w-full text-black focus:outline-none py-2 border-class"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full text-black focus:outline-none py-2 border-class"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full text-black focus:outline-none py-2 border-class"
            required
          />
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-2">Select Subject:</p>
          <div className="flex flex-wrap items-center space-x-4 md:space-x-2">
            <label className="flex items-center text-black mb-2 md:mb-0">
              <input
                type="radio"
                name="subject"
                value="Product Inquiry"
                checked={subject === 'Product Inquiry'}
                onChange={() => setSubject('Product Inquiry')}
                className="form-radio text-black"
              />
              <span className="ml-2">Product Inquiry</span>
            </label>
            <label className="flex items-center text-black mb-2 md:mb-0">
              <input
                type="radio"
                name="subject"
                value="Dealership"
                checked={subject === 'Dealership'}
                onChange={() => setSubject('Dealership')}
                className="form-radio text-black"
              />
              <span className="ml-2">Dealership</span>
            </label>
            <label className="flex items-center text-black mb-2 md:mb-0">
              <input
                type="radio"
                name="subject"
                value="Rentals"
                checked={subject === 'Rentals'}
                onChange={() => setSubject('Rentals')}
                className="form-radio text-black"
              />
              <span className="ml-2">Rentals</span>
            </label>
            <label className="flex items-center text-black">
              <input
                type="radio"
                name="subject"
                value="Investment"
                checked={subject === 'Investment'}
                onChange={() => setSubject('Investment')}
                className="form-radio text-black"
              />
              <span className="ml-2">Investment</span>
            </label>
          </div>
        </div>

        <div className="mb-6 border-class2">
          <textarea
            name="message"
            placeholder="Write your message.."
            className="w-full text-black focus:outline-none py-2 border-class"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
