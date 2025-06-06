import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Optional if using React Router
import client1 from '../../assets/clientLogos/client-1.png';
import client2 from '../../assets/clientLogos/client-2.png';
import client3 from '../../assets/clientLogos/client-3.png';
import client4 from '../../assets/clientLogos/client-4.png';
import client5 from '../../assets/clientLogos/client-5.png';


const clientLogos = [client1, client2, client3, client4, client5];

const feedbacks = [
  {
    name: 'John Doe',
    feedback: 'Amazing service, our collaboration was a success!',
  },
  {
    name: 'Jane Smith',
    feedback: 'Highly professional team and great results!',
  },
  {
    name: 'Michael Johnson',
    feedback: 'They delivered everything as promised and more.',
  },
];

export default function ClientInfoSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333] mb-10 text-center">Our Clients</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center mb-6">
          {clientLogos.map((src, index) => (
            <img key={index} src={src} alt={`client-${index}`} className="h-34 w-auto object-contain"/>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/" 
            className="text-blue-600 hover:text-blue-800 font-semibold transition"
          >
            View More Clients &rarr;
          </Link>
        </div>
      </div>

      {/* Client Feedback */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333] mb-10 text-center">What Our Clients Say</h2>
        <div className="relative">
          {/* Feedback Cards */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-6 transition-all duration-500">
            {feedbacks.map((item, index) => (
              <div
                key={index}
                className={`bg-white shadow-md rounded-lg p-6 sm:w-1/3 ${
                  current === index ? 'block' : 'hidden sm:block'
                } transition-all duration-500 ease-in-out`}
              >
                <FaQuoteLeft className="text-gray-400 text-2xl mb-4" />
                <p className="text-gray-700 mb-4">{item.feedback}</p>
                <p className="font-semibold text-gray-900">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 sm:hidden">
            {feedbacks.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  current === index ? 'bg-gray-700' : 'bg-gray-400'
                } transition-all duration-300`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
