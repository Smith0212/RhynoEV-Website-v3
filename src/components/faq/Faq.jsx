import React, { useState, useRef } from 'react';

const faqData = [
    {
        question: "Why is Rhyno the way it is?",
        answer: "Rhyno is designed to deliver an extraordinary riding experience. Its unique design prioritises comfort and style, while the full metal body ensures durability and a rugged performance. The focus on rider comfort is evident in the ergonomic design of the seat and handlebars, while the stylish aesthetics enhance the overall appeal of the vehicle.The full metal body not only provides exceptional durability but also contributes to a stable and secure ride, making Rhyno suitable for various terrains and conditions."
    },
    {
        question: "Where can I purchase your electric scooter?",
        answer: "You can either pre-book online or visit the nearest dealership in your city. Currently available in cities Ahmedabad and Gandhinagar. For more info give us a call. "
    },
    {
        question: "Do you offer financing options?",
        answer: "Yes, we do have finance options for you to buy RHYNO at your convenience. Our partners are Bajaj Finserv and LoanTap."
    },
    {
        question: "Can I remove the battery to charge at home?",
        answer: "No, the battery in RHYNO is fixed under the floor. Although, you can directly charge RHYNO from your home socket. "
    },
    {
        question: "Will it catch fire?",
        answer: "Our batteries are as cool as you driving a RHYNO! No, our battery works on LFP chemistry and it comes with smart BMS which makes it impossible to break fire in any conditions! When do I need to replace the battery?"
    },
    {
        question: "Does the scooter have any storage compartments?",
        answer: "Yes, RHYNO comes with 25 litres of storage. "
    },
    {
        question: "What safety features does the scooter have?",
        answer: "Wider tyres give you the confidence of not falling or slipping through cornering/ wet roads. All the electricals are routed in such a way that there is no possibility for short circuit. RHYNO comes with an IOT device which can track your vehicle and monitors it. "
    },
    {
        question: "What is covered under the warranty?",
        answer: "There is 1 year warranty on all electricals including motor.3 years of warranty on the battery."
    },
    {
        question: "What should I do if my scooter breaks down?",
        answer: "You just need to call the nearest dealership and that's pretty much our trained mechanics will be there to resolve any problem. Or you can take it to your local mechanic, as RHYNO is so simple to repair that even your mechanic guy can resolve it."
    },
    {
        question: "Can I use the scooter for off-roading?",
        answer: "Yes, for uneven roads, mild muddy and sandy terrains, RHYNO  can get you where you want to be.  "
    },
    {
        question: "Is battery water proof?",
        answer: "Battery comes with IP67 rated, so your monsoons drive are worryless.  "
    },
    {
        question: "Do Rhyno users need a driving licence and insurance for it? ",
        answer: "Yes, as RHYNO comes with RTO registration it is mandatory to follow government rules. "
    },
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='bg-white'>
        <div className="max-w-3xl mx-auto mt-10 mb-10 p-4">
            <h2 className="text-3xl font-semibold text-center mb-4 text-gray-600">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-6">Everything you need to know about the product and billing.</p>
            {faqData.map((faq, index) => (
                <div key={index} className="mb-4 border-b">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center py-3 text-left text-lg font-medium text-gray-700 focus:outline-none"
                    >
                        <span>{faq.question}</span>
                        <span className="text-xl">
                            {activeIndex === index ? '-' : '+'}
                        </span>
                    </button>
                    <div
                        ref={(el) => (contentRefs.current[index] = el)}
                        style={{
                            maxHeight: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease',
                        }}
                    >
                        <p className="text-gray-600 px-4 pb-3">{faq.answer}</p>
                    </div>
                </div>
            ))}
            {/* <div className="bg-gray-100 p-6 mt-10 text-center rounded-md shadow-md">
                <p className="text-lg mb-4 text-gray-600">Still have Questions?</p>
                <p className="text-gray-600 mb-6">Join over 4000+ startups already growing with Us.</p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700">Learn More</button>
                    <button className="bg-gray-200 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-300">Contact us</button>
                </div>
            </div> */}
        </div>
        </div>
    );
}

export default FAQ;
