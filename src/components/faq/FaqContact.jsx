import React, { useState } from 'react';

function ContactUs() {
    const [subject, setSubject] = useState('Product Inquiry');

    return (
        <div className="max-w-xl mx-auto my-10 p-4">
            <h2 className="text-3xl font-semibold text-center mb-4 text-gray-600">Contact Us</h2>
            <p className="text-center text-gray-600 mb-8">Any question or remarks? Just write us a message!</p>
            
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="  text-black focus:outline-none py-2 border-class"
                        style={{ outline: 'none' }} 
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className=" text-black focus:outline-none  py-2 border-class"
                        style={{ outline: 'none' }} 
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <input
                        type="email"
                        placeholder="Email"
                        className=" text-black focus:outline-none  py-2 border-class"
                        style={{ outline: 'none' }} 
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className=" text-black focus:outline-none  py-2 border-class"
                        style={{ outline: 'none' }} 
                    />
                </div>

                <div className="mb-6">
                    <p className="text-gray-600 mb-2">Select Subject:</p>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center text-black">
                            <input
                                type="radio"
                                value="Product Inquiry"
                                checked={subject === 'Product Inquiry'}
                                onChange={() => setSubject('Product Inquiry')}
                                className="form-radio text-black"
                            />
                            <span className="ml-2">Product Inquiry</span>
                        </label>
                        <label className="flex items-center text-black">
                            <input
                                type="radio"
                                value="Dealership"
                                checked={subject === 'Dealership'}
                                onChange={() => setSubject('Dealership')}
                                className="form-radio text-gray-600"
                            />
                            <span className="ml-2">Dealership</span>
                        </label>
                        <label className="flex items-center text-black">
                            <input
                                type="radio"
                                value="Rentals"
                                checked={subject === 'Rentals'}
                                onChange={() => setSubject('Rentals')}
                                className="form-radio text-gray-600"
                            />
                            <span className="ml-2">Rentals</span>
                        </label>
                        <label className="flex items-center text-black">
                            <input
                                type="radio"
                                value="Investment"
                                checked={subject === 'Investment'}
                                onChange={() => setSubject('Investment')}
                                className="form-radio text-gray-600"
                            />
                            <span className="ml-2">Investment</span>
                        </label>
                    </div>
                </div>

                <div className="mb-6 border-class2">
                    <textarea
                        placeholder="Write your message.."
                        className="w-full  text-black focus:outline-none py-2 border-class"
                        rows="4"
                        style={{ outline: 'none' }} 
                    ></textarea>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactUs;
