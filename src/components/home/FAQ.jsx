import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaExclamationCircle } from 'react-icons/fa';
import faqNotfoundImage from '../../assets/faqNotFound.png';

const allFAQs = [
  { question: 'What is HostedMinds?', answer: 'HostedMinds is a platform to empower your digital presence.' },
  { question: 'What services do you offer?', answer: 'We offer STEM, Web, App Dev, R&D, and more.' },
  { question: 'How can I contact HostedMinds?', answer: 'You can reach us via email or the contact form.' },
  { question: 'Do you offer internships?', answer: 'Yes, we offer internships in tech domains periodically.' },
  { question: 'Where are you located?', answer: 'We are located in Pune, Maharashtra, India.' },
  { question: 'How do I join HostedMinds?', answer: 'Click on Join for Free in our navbar to sign up.' },
  { question: 'What technologies do you use?', answer: 'We use React, Node.js, MongoDB, and more.' },
  { question: 'Do you have client testimonials?', answer: 'Yes, testimonials are available on our homepage.' },
  { question: 'Can I request a custom service?', answer: 'Absolutely! We tailor services to your needs.' },
  { question: 'Is support available post-project?', answer: 'Yes, we provide post-launch technical support.' }
];

const FAQSection = () => {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);

  const filteredFAQs = search.trim()
    ? allFAQs.filter(faq => faq.question.toLowerCase().includes(search.toLowerCase()))
    : allFAQs.slice(0, 6);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  

  return (
    <section id="faq" className="bg-[#fafcff] py-10 px-4">
      <h2 className="max-w-7xl mx-auto text-3xl font-bold text-[#6699cc] mb-10">Frequently Asked Questions</h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start lg:h-110">
        {/* Right Side FAQ Content */}
        <div className="flex-1 w-full h-full">
          {/* Search Bar */}
          <div className="relative mb-5">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full p-3 pl-10 rounded shadow-sm border border-gray-300 focus:ring focus:outline-none bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-4.5 text-gray-400" />
          </div>

          {/* FAQs Accordion */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded shadow">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center hover:bg-gray-300"
                  >
                    {faq.question}
                    <span>{expanded === index ? '-' : '+'}</span>
                  </button>
                  {expanded === index && (
                    <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                  )}
                </div>
              ))
            ) : (
              <div className="flex items-center gap-3 text-red-500 font-medium bg-white p-4 rounded shadow">
                <FaExclamationCircle />
                Sorry, no questions found.
              </div>
            )}
          </div>
        </div>

        {/*did not found contact section*/}
        <div className=" flex-1 bg-white rounded shadow px-6 py-6.5 w-full space-y-5 h-full">
          <h3 className="text-xl font-semibold mb-4 text-[#6699cc]">Didn't find your question?</h3>
          <p className="text-gray-600 mb-4">Write to us below. We'll get back to you via email.</p>
          <div>
            <img src={faqNotfoundImage}></img>
          </div>
          <Link
            to="/contactUs"
            className="inline-block text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none  font-medium rounded-lg text-lg px-5 py-3 text-center me-2 mb-2 w-full"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
