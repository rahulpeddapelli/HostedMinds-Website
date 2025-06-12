
import { Link } from "react-router-dom";
import coding from "../../assets/aboutPreview/about-coding.jpeg";
import robotics from "../../assets/aboutPreview/sample.jpg";

export default function AboutUsPreview() {
  return (
    <div className="w-full bg-[#fafcff]">
      <section className="relative h-[500px] md:min-h-[calc(100vh-4rem)] overflow-hidden bg-black text-white">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src={robotics}
            alt={`group of peoples`}
            className="absolute w-full h-full object-cover animate-slide-left z-10"
          />
          <img
            src={coding}
            alt={`coding`}
            className="absolute w-full h-full object-cover animate-slide-right z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-20"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg md:text-xl max-w-3xl">
            HostedMinds is a creative powerhouse blending education and innovation to shape future-ready thinkers.
          </p>
          <Link
            to="/aboutUs"
            className="inline-block text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-full text-lg px-5 py-3 text-center mt-4 mb-2"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
