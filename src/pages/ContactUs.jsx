import React, { useRef, useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';



const ContactUs = () => {
  const formRef = useRef(null);
  const [mapHeight, setMapHeight] = useState(400);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_en6bcjs',
      'template_h1kxjn5',
      formRef.current,
      {
        publicKey: '2RCJmwoIXppL_fgJF', 
      }
    ).then(
      (result) => {
        console.log('Success:', result.text);
        alert('Message sent successfully!');
        formRef.current.reset(); 
      },
      (error) => {
        console.error('Failed to send:', error.text);
        alert('Failed to send message, please try again', error.text);
      }
    );
};


useEffect(() => {
  const updateHeight = () => {
    if (window.innerWidth >= 1024 && formRef.current) {
      setMapHeight(formRef.current.offsetHeight);
    } else {
      setMapHeight(320);
    }
  };
  updateHeight();
  window.addEventListener('resize', updateHeight);
  return () => window.removeEventListener('resize', updateHeight);
}, []);

return (
  <section className='bg-gary-50'>
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* Heading Section */}
      <div className="text-center md:text-start mb-10">
        <h1 className="text-3xl font-bold text-[#69c]">CONTACT US</h1>
        <p className="mt-4 text-gray-600 max-w-2xl font-semibold">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE OR EMAIL.
        </p>
      </div>

      {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href="tel:+1234567890"
              className="w-full sm:w-1/2 flex items-center justify-center gap-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded px-5 py-3 text-center mb-2"
            >
              <FaPhoneAlt className="text-white" />
              VIA CALL
            </a>
            <a
              href="mailto:support@hostedminds.com"
              className="w-full sm:w-1/2 flex items-center justify-center gap-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded px-5 py-3 text-center mb-2"
            >
              <FaEnvelope className="text-white" />
              VIA EMAIL
            </a>
          </div>

      {/* Form and Map Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Form Container */}
        <div className="w-full lg:w-1/2">
      
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

            <div className="relative">
              <input type="text" name="name" required id="name" className="block px-2.5 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-[#333] peer" placeholder=" " />
              <label htmlFor="name" className="absolute text-md text-gray-500 transition duration-300 transform -translate-y-4 scale-75 top-0.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#333] peer-focus:text-lg peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>
            </div>


            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
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
                name="regarding"
                required
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-[#333] peer"
              >
                {/*<option value="" disabled selected hidden></option> */}
                <option value="service inquiry">Service Inquiry</option>
                <option value="technical support">Technical Support</option>
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
                name="message"
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
              className="w-full text-white bg-sky-700 font-semibold px-6 py-2 rounded hover:bg-sky-800 transition duration-300 cursor-pointer"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.130548185336!2d75.3467882750293!3d19.864502081505197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba32d8726a0a3%3A0xcc355f9df5c78151!2sHostedminds!5e0!3m2!1sen!2sin!4v1718196197690!5m2!1sen!2sin"
            width="100%"
            height={mapHeight}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HostedMinds Location"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);
};

export default ContactUs;


