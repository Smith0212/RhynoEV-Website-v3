import React from "react";
import './ContactForm.css';
import img1 from '../../assets/contact.png';

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="flex flex-col md:flex-row h-screen w-full">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 px-8 md:px-16 py-28 bg-black bg-opacity-70 flex flex-col justify-between">
          <form className="space-y-6">
            <div className="relative border-class2">
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full px-0.5 py-2 bg-transparent border-b-2 border-gray-600 text-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                placeholder="Your Name"
                style={{ outline: 'none' }} // Ensure no outline
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
                id="email"
                name="email"
                className="block w-full px-0.5 py-2 bg-transparent border-b-2 border-gray-600 text-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                placeholder="E-mail"
                style={{ outline: 'none' }} // Ensure no outline
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
                id="phone"
                name="phone"
                className="block w-full px-0.5 py-2 bg-transparent border-b-2 border-gray-600 text-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                placeholder="Phone Number"
                style={{ outline: 'none' }} // Ensure no outline
              />
              <label
                htmlFor="phone"
                className="absolute left-0 -top-3.5 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all duration-200"
              >
                Phone Number
              </label>
            </div>

            <div className="relative border-class2">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block w-full px-0.5 py-2 bg-transparent border-b-2 border-gray-600 text-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                placeholder="Message"
                style={{ outline: 'none' }} // Ensure no outline
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
              Submit
            </button>
          </form>

          <div className="flex justify-center mt-8 space-x-4">
            {/* Placeholder for Icons */}
            <div className="bg-gray-800 p-2 rounded-full">
              <i 
                className="fa-brands fa-instagram w-6 h-6 flex justify-center items-center text-2xl"
              />
            </div>
            <div className="bg-gray-800 p-2 rounded-full">
            <i 
                className="fa-brands fa-facebook w-6 h-6 flex justify-center items-center text-2xl"
              />
            </div>
            <div className="bg-gray-800 p-2 rounded-full">
            <i 
                className="fa-brands fa-x-twitter w-6 h-6 flex justify-center items-center text-2xl"
              />
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
                CONTACT <span className="text-yellow-500">US</span>
              </h1>
              <hr className="border-t-2 border-gray-500 my-4 w-16 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
