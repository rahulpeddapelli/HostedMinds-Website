import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/servicesPreview/service-robotics.jpg';
import image2 from '../../assets/servicesPreview/service-iot.jpeg';
import image3 from '../../assets/servicesPreview/service-it.jpg';

const services = [
  'STEM', 'STEM LAB Setup', 'E-Learning', 'Learn to Code', 'Experiential Learning',
  'Robotics', 'Educational Projects', 'Circuit & PCB Designing', 'Electronics Manufacturing Services',
  'Component Procurement', 'Reverse Engineering', 'Product Unit Testing', 'IoT & IIoT Services',
  'Software & Website Development', 'Mobile App Development', 'Research & Development',
  'POC & Prototypes', 'Product Development/Pilot'
];

const imageUrls = [
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
];

const OurServicesPreview = ({setOpenService}) => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 8);


  const handleSerivceOpen = (title)=>{
    setOpenService(title);
    navigate("/services");
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* <h2 className="text-lg font-semibold text-[#69c] tracking-wide uppercase mb-2">SERVICES</h2> */}
        <h3 className="text-3xl md:text-4xl font-bold text-[#69c] mb-8">Transform your business with advanced technologies</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleServices.map((title, index) => (
            <div onClick={()=>handleSerivceOpen(title)} key={index} className="relative group overflow-hidden rounded-lg shadow-md transform transition duration-300 hover:-translate-y-2 cursor-pointer">
              <img
                src={imageUrls[index]}
                alt="Service"
                className="w-full h-64 object-cover"
              />

              
              <div className="absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:bg-black/60"></div>

              <div className="absolute inset-0 flex items-center justify-center ">
                <h3 className="text-white text-xl font-bold text-center px-2">{title}</h3>
              </div>
            </div>

          ))}
        </div>

        {/* View More Button */}
        {!showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServicesPreview;
