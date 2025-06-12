import React from 'react';
import contactSvg from '../assets/landing_image.svg';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white py-12 px-6">
      {/* Heading Section */}
      <div className="text-center md:text-start mb-10">
        <h1 className="text-3xl font-bold text-[#333]">CONTACT US</h1>
        <p className="mt-4 text-gray-600 max-w-2xl font-semibold">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE OR EMAIL.
        </p>
      </div>

      {/* Form and SVG Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Form Container */}
        <div className="w-full lg:w-1/2">
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href="tel:+1234567890"
              className="w-full sm:w-1/3 flex items-center justify-center gap-4 sm:gap-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded px-5 py-3 text-center mb-2"
            >
              <FaPhoneAlt className="text-white" />
              VIA CALL
            </a>
            <a
              href="mailto:support@hostedminds.com"
              className="w-full sm:w-1/3 flex items-center justify-center gap-4 sm:gap-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded px-5 py-3 text-center mb-2"
            >
              <FaEnvelope className="text-white" />
              VIA EMAIL
            </a>
            <a
              href="https://www.google.com/maps?q=19.864502,75.348977"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/3 flex items-center justify-center gap-4 sm:gap-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded px-5 py-3 text-center mb-2"
            >
               <FaMapMarkerAlt className="text-white" />VIEW LOCATION
            </a>

          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            {/* Floating Input */}

            <div class="relative">
              <input type="text" required id="name" className="block px-2.5 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-[#333] peer" placeholder=" " />
              <label htmlFor="name" class="absolute text-md text-gray-500 transition duration-300 transform -translate-y-4 scale-75 top-0.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#333] peer-focus:text-lg peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>
            </div>


            <div className="relative">
              <input
                type="email"
                id="email"
                required
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-[#333] peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-md text-gray-500 transition duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#333] peer-focus:text-lg peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                E-Mail
              </label>
            </div>

            {/* Select Dropdown */}
            <div className="relative">
              <select
                id="regarding"
                required
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-[#333] peer"
              >
                {/* <option value="" disabled selected hidden></option> */}
                <option value="service">Service Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
              <label
                htmlFor="regarding"
                className="absolute text-md text-gray-500 transition duration-300 transform -translate-y-4 scale-75 top-0.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#333] peer-focus:text-lg peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Contact Regarding
              </label>
            </div>

            {/* Textarea */}
            <div className="relative">
              <textarea
                id="message"
                required
                rows="4"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-[#333] resize-none peer"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-md text-gray-500 transition duration-300 transform -translate-y-4 scale-75 top-0.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#333] peer-focus:text-lg peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#69c] text-white px-4 py-2 rounded hover:bg-[#3388cc] transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* SVG Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={contactSvg}
            alt="Contact Support"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div >
    </div >
  );
};



export default ContactUs;
