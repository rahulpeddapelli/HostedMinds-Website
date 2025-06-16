import { useState, useEffect, useRef } from 'react';
import serviceData from '../servicesData.jsx';
import { X } from 'lucide-react';
import { Link } from "react-router-dom";

export default function ServicesPage({ currentOpenService, setOpenService }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openedService = serviceData.find(service => service.title === currentOpenService);
  const [rightHeight, setRightHeight] = useState(0);
  const rightRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (rightRef.current) {
        setRightHeight(rightRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, [currentOpenService]);


  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isSidebarOpen]);

  return (
    <section className='bg-gray-50'>
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto min-h-[calc(100vh-4rem)] ">

      {/* Sidebar for md and up */}
      <div className="hidden md:flex flex-col w-full md:w-1/3 border-r border-gray-200 h-full" style={{ maxHeight: rightHeight }}>
        <h1 className="text-2xl font-bold text-[#333] p-4 border-b border-gray-300">Our Services</h1>
        <div className="overflow-y-auto flex-1 p-4 space-y-2">
          {serviceData.map(service => (
            <div
              key={service.id}
              onClick={() => setOpenService(service.title)}
              className={`cursor-pointer p-3 rounded-md hover:bg-blue-100 transition-all ${currentOpenService === service.title ? 'bg-blue-200 font-semibold' : ''
                }`}
            >
              {service.title}
            </div>
          ))}
        </div>
      </div>



      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex">
          <div className="bg-white w-3/4 h-full flex flex-col max-h-screen">

            {/* Header (static) */}
            <div className="p-4 border-b border-gray-300 flex items-center justify-between bg-white shrink-0">
              <h2 className="text-2xl font-bold text-[#333]">Our Services</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-[#333] hover:text-black"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Services */}
            <div className="flex-1 min-h-0 overflow-y-auto px-4 py-2 space-y-3">
              {serviceData.map(service => (
                <div
                  key={service.id}
                  onClick={() => {
                    setOpenService(service.title);
                    setSidebarOpen(false);
                  }}
                  className={`cursor-pointer p-3 rounded-md hover:bg-blue-100 transition ${currentOpenService === service.title ? 'bg-blue-200 font-semibold' : ''}`}
                >
                  {service.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}





      {/* Service Content */}
      <div ref={rightRef} className="w-full md:w-2/3 p-4 flex flex-col space-y-6 h-full">
        {/* Header and Image with Descriptions */}
        <div className='flex items-center'>
          <h1 className="flex-1 text-2xl font-bold text-[#69c] w-full">{openedService.title}</h1>

          {/* Mobile Sidebar Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="bg-[#69c] text-white px-4 py-2 rounded shadow-lg"
            >
              All Services
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6">
          <div className="md:w-1/2 space-y-4">
            <img
              src={openedService.image}
              alt={openedService.title}
              className="w-full h-60 object-cover rounded shadow-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <p className="text-lg text-gray-700 font-semibold">{openedService.shortDes}</p>
            <p className="text-md text-gray-600 whitespace-pre-line">{openedService.fullDes}</p>
          </div>
        </div>

        {/* Features Section */}
        <div className='bg-white rounded-md p-4' style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}>
          <h2 className="text-lg font-semibold text-[#69c] mb-2">Features</h2>
          <div className='flex flex-wrap gap-4 md:gap-8'>
            {openedService.features.map((feat, idx) => (
              <div key={idx} className="px-4 py-2 bg-blue-50 rounded-md text-gray-700 hover:scale-[1.1] transition-transform duration-300">
                {feat}
              </div>
            ))}
          </div>
        </div>

        {/* Audience Section */}
        <div className='bg-white rounded-md p-4' style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}>
          <h2 className="text-lg font-semibold text-[#69c] mb-2">Target Audience</h2>
          <div className='flex flex-wrap gap-4 md:gap-8'>
            {openedService.features.map((a, idx) => (
              <div key={idx} className="px-4 py-2 bg-blue-50 rounded-md text-gray-700 hover:scale-[1.1] transition-transform duration-300">
                {a}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className='bg-white rounded-md p-4' style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}>
          <h2 className="text-lg font-semibold text-[#69c] mb-2">Benefits</h2>
          <div className="flex flex-wrap gap-4 md:gap-8">
            {openedService.benefits.map((b, idx) => (
              <div key={idx} className="px-4 py-2 bg-blue-50 rounded-md text-gray-700 hover:scale-[1.1] transition-transform duration-300">
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="flex justify-center">
          <Link className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" to="/contactUs">
            {openedService.cta}
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
}


