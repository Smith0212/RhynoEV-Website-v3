import React, { useRef, useState } from "react";
import './ContactForm.css';
import img1 from '../../assets/contact.png';
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r6tppud', 'template_syhmdrq', form.current, 'dlfvxaLtJUSBW3FmH');
    e.target.reset();
    setLoading(true);

    // Simulate a loading state for 2 seconds
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen text-white">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 px-4 md:px-8 py-6 md:py-28 bg-black bg-opacity-70 flex flex-col justify-between">
        <form className="space-y-6 px-3" onSubmit={sendEmail} ref={form}>
          {/* Existing input fields */}
          <div className="relative border-class2">
            <input
              type="text"
              name="name"
              className="block w-full px-2 py-2 bg-transparent border-b-2 border-gray-600 text-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder="Your Name"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-3.5 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all duration-200"
            >
              Your Name
            </label>
          </div>

          <div className="relative border-class2">
            <input
              type="email"
              name="email"
              className="block w-full px-2 py-2 bg-transparent border-b-2 border-gray-600 text-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder="E-mail"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all duration-200"
            >
              E-mail
            </label>
          </div>

          <div className="relative border-class2">
            <input
              type="text"
              name="phno"
              className="block w-full px-2 py-2 bg-transparent border-b-2 border-gray-600 text-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder="Phone Number"
              required
            />
            <label
              htmlFor="phone"
              className="absolute left-0 -top-3.5 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all duration-200"
            >
              Phone Number
            </label>
          </div>

          {/* Radio Button Group */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="productenquiry"
                className="mr-2"
                required
              />
              Product Enquiry
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Dealership"
                className="mr-2"
                required
              />
              Dealership
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Rentals"
                className="mr-2"
                required
              />
              Rentals
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="option"
                value="Investment"
                className="mr-2"
                required
              />
              Investment
            </label>
          </div>

          {/* Textarea */}
          <div className="relative border-class2">
            <textarea
              name="msg"
              rows="4"
              className="block w-full px-2 py-2 bg-transparent border-b-2 border-gray-600 text-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder="Message"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-0 -top-3.5 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all duration-200"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md shadow hover:bg-yellow-600 transition duration-300"
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>

        <div className="flex justify-center mt-8 space-x-4">
          {/* Placeholder for Icons */}
          <div className="bg-gray-800 p-2 rounded-full">
            <i className="fa-brands fa-instagram w-6 h-6 flex justify-center items-center text-2xl" />
          </div>
          <div className="bg-gray-800 p-2 rounded-full">
            <i className="fa-brands fa-facebook w-6 h-6 flex justify-center items-center text-2xl" />
          </div>
          <div className="bg-gray-800 p-2 rounded-full">
            <i className="fa-brands fa-x-twitter w-6 h-6 flex justify-center items-center text-2xl" />
          </div>
        </div>
      </div>

      {/* Right Side - Image and Text */}
      <div className="hidden md:block w-full md:w-1/2 relative">
        <img
          src={img1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center px-4">
            <p className="text-yellow-400 font-semibold mb-2">
              WRITE TO US IN CASE OF ANY QUERY
            </p>
            <h1 className="text-4xl font-bold">
              We’re <span className="text-yellow-500">listening</span>
            </h1>
            <hr className="border-t-2 border-gray-500 my-4 w-16 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
