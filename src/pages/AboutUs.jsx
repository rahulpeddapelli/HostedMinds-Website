import React ,{useEffect} from 'react';
import heroVideo from '../assets/aboutUsVideo.mp4';
import { Link } from 'react-router-dom';
import { FaSearch, FaLightbulb, FaHandshake, FaGlobeAmericas } from 'react-icons/fa';

const AboutUs = () => {
  useEffect(() => {
    document.title = "HOSTEDMINDS - ABOUT US";
  }, []);

  return (
    <div className="font-sans text-gray-800">

      {/* landing Section */}
      <section className="relative w-full h-[95vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10 flex items-center justify-center px-4 text-center">
          <div className="max-w-5xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Ideas. Engineering Futures.</h1>
            <p className="text-lg md:text-xl">At HostedMinds, we’re building a digital ecosystem where innovation meets education.</p>
          </div>
        </div>
      </section>

      {/* our vision*/}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#6699cc] mb-6">Our Vision</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            HostedMinds began with a vision to provide accessible tech solutions integrated with real learning experiences. We empower students, startups, and businesses with cutting-edge tools and services that bring their ideas to life.
          </p>
        </div>
      </section>

      {/* Our Values / Beliefs */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#6699cc] mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Transparency", icon: <FaSearch /> },
              { title: "Innovation", icon: <FaLightbulb /> },
              { title: "Collaboration", icon: <FaHandshake /> },
              { title: "Impact", icon: <FaGlobeAmericas /> },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded shadow text-center">
                <div className="text-4xl mb-2 text-[#6699cc] flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-1 text-[\">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Our Journey / Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#6699cc] text-center mb-10">Our Journey</h2>
          <div className="border-l-4 border-[#6699cc] pl-6 space-y-6">
            {[
              { year: "2020", event: "Founded with a passion for STEM and digital innovation" },
              { year: "2021", event: "Launched our first MVP for education-focused clients" },
              { year: "2022", event: "Expanded into R&D, internships, and client services" },
              { year: "2023", event: "Crossed 300+ projects and international collaborations" },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-[#6699cc]">{item.year}</h3>
                <p className="text-gray-700">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#6699cc] mb-10">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Real-time collaboration with clients",
              "Affordable and scalable services",
              "Education + Development integration",
              "Research-backed innovation"
            ].map((point, i) => (
              <div key={i} className="bg-white p-6 rounded shadow text-left">
                <p className="text-lg text-gray-700">✅ {point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* connect us */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Let’s Build the Future Together</h2>
          <p className="text-lg text-gray-300">Join hands with HostedMinds to shape tomorrow’s innovations, today.</p>
          <Link
            to="/contactUs"
            className="inline-block text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-full text-lg px-5 py-3 text-center mt-4 mb-2"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
