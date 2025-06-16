import React, { useEffect, useState, useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    console.log(e)
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    console.log(e)
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextFeedback(); // swipe left
      } else {
        prevFeedback(); // swipe right
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevFeedback = () => {
    setCurrent((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  const nextFeedback = () => {
    setCurrent((prev) => (prev + 1) % feedbacks.length);
  };

  return (
    <section className="bg-gray-50 py-12">
      {/* Clients Logos */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#69c] mb-10 text-center">Our Clients</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center mb-6">
          {clientLogos.map((src, index) => (
            <img key={index} src={src} alt={`client-${index}`} className="h-24 w-auto object-contain" />
          ))}
        </div>
        <div className="text-center">
          <Link to="/" className="text-lg text-blue-600 hover:text-blue-800 font-semibold transition">
            View More Clients &rarr;
          </Link>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#69c] mb-10 text-center">What Our Clients Say</h2>


        {/* < md - show one full-width card with arrows */}
        <div className="md:hidden relative p-2" onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          <div className="bg-white shadow-md rounded-lg p-6 min-h-[200px] w-full relative">
            {/* Arrows */}
            <button
              onClick={prevFeedback}
              className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow z-10 text-gray-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextFeedback}
              className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow z-10 text-gray-600"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Feedback Content */}
            <div className="px-6">
              <FaQuoteLeft className="text-gray-400 text-2xl mb-4 " />
              <p className="text-gray-700 mb-4">{feedbacks[current].feedback}</p>
              <p className="font-semibold text-gray-900">{feedbacks[current].name}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4">
            {feedbacks.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${current === index ? 'bg-gray-700' : 'bg-gray-400'
                  } transition-all duration-300`}
              />
            ))}
          </div>
        </div>


        {/* ≥ md - Three Aligned Cards */}
        <div className="hidden md:flex justify-between gap-6">
          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg px-6 py-6 w-1/3 min-h-[200px] flex flex-col justify-between"
            >
              <FaQuoteLeft className="text-gray-400 text-2xl mb-4" />
              <p className="text-gray-700 mb-4 flex-grow">{item.feedback}</p>
              <p className="font-semibold text-gray-900">{item.name}</p>
            </div>
          ))}
        </div>


        {/* View More Testimonials */}
        <div className="text-center mt-6">
          <Link to="/" className="text-lg text-blue-600 hover:text-blue-800 font-semibold transition">
            View More Testimonials &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
