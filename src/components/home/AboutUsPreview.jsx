
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iot from "../../assets/aboutPreview/about-iot.png";
import coding from "../../assets/aboutPreview/about-coding.jpeg";
import robotics from "../../assets/aboutPreview/sample.jpg";

export default function AboutUsPreview() {
  const images = [robotics, iot, coding,];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#fafcff]">
      <section className="relative max-w-7xl mx-auto h-[600px] overflow-hidden bg-black text-white">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg md:text-xl max-w-3xl">
            HostedMinds is a creative powerhouse blending education and innovation to shape future-ready thinkers.
          </p>
          <Link
            to="/aboutUs"
            className="mt-6 inline-block bg-[#6699cc] px-6 py-3 rounded-full transition duration-300 hover:underline hover:underline-offset-4 font-bold"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
