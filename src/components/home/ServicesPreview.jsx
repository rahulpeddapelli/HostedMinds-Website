import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTools, FaRobot, FaFlask, FaCode, FaMicrochip } from "react-icons/fa";
import serviceIt from "../../assets/service-it.jpg";
import serviceIot from "../../assets/service-iot.jpeg";
import serviceRobo from "../../assets/service-robotics.jpg";


const servicesData = [
  {
    domain: "STEM & Robotics",
    description:
      "Empowering students through hands-on STEM labs and robotics education.",
    subServices: [
      { name: "STEM Lab Setup", icon: <FaFlask /> },
      { name: "Robotics Courses", icon: <FaRobot /> },
      { name: "Educational Projects", icon: <FaTools /> },
    ],
    image: serviceRobo,
    link: "/services/stem",
  },
  {
    domain: "Software & App Development",
    description:
      "Custom software, mobile apps, and e-learning platforms built for the modern world.",
    subServices: [
      { name: "Website Development", icon: <FaCode /> },
      { name: "Mobile App Development", icon: <FaCode /> },
      { name: "HostedMinds E-Learning", icon: <FaCode /> },
    ],
    image: serviceIt,
    link: "/services/it",
  },
  {
    domain: "Electronics & IoT",
    description:
      "Complete solutions from circuit design to smart IoT systems and manufacturing.",
    subServices: [
      { name: "PCB Designing", icon: <FaMicrochip /> },
      { name: "IoT/IIoT Services", icon: <FaMicrochip /> },
      { name: "Electronics Manufacturing", icon: <FaMicrochip /> },
      { name: "Reverse Engineering", icon: <FaMicrochip /> },
      { name: "Product Unit Testing", icon: <FaMicrochip /> },
    ],
    image: serviceIot,
    link: "/services/iot",
  },
];

const ServicesPreview = () => {
  const [activeCard, setActiveCard] = useState(null);


  const [textContent, setTextContent] = useState("View");
  useEffect(()=>{
    if (window.innerWidth < 480) {
        setTextContent("View");
    }else {
        setTextContent("View Service");
    }
  },[])


  const handleToggle = (index) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <section className="px-4 py-10 bg-gray-100">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-[#333] mb-8">
        Our Services
      </h2>
      <div className="space-y-6 max-w-7xl mx-auto">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
            onClick={() => handleToggle(index)}
            onMouseEnter={() => window.innerWidth >= 768 && setActiveCard(index)}
            onMouseLeave={() => window.innerWidth >= 768 && setActiveCard(null)}
          >
            {/* Always-visible card summary */}
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  {service.domain}
                </h3>
                <Link
                  to={service.link}
                  className="bg-[#69c] text-white text-sm font-semibold px-2 sm:px-2 md:px-3 py-1 sm:py-2 md:py-2 rounded-lg shadow transition duration-300 hover:underline hover:underline-offset-4 transition text-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {textContent}
                </Link>
              </div>
              <p className="text-gray-600 mt-2 text-lg">{service.description}</p>
            </div>

            {/* Expanded sub-services & image */}
            {activeCard === index && (
              <div className="flex flex-col md:flex-row items-start gap-4 p-4 border-t border-gray-200">
                <div className="w-full md:w-2/3 space-y-2">
                  {service.subServices.map((sub, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="text-[#69c]">{sub.icon}</span>
                      <span className="md:text-md">{sub.name}</span>
                    </div>
                  ))}
                </div>
                <div className="w-full md:w-1/3">
                  <img
                    src={service.image}
                    alt={`${service.domain} preview`}
                    className="w-full h-48 object-cover rounded-lg shadow"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPreview;
