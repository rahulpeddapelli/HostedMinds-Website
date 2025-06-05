import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import iot from "../../assets/about-iot.png";
import coding from "../../assets/about-coding.jpeg";
import robotics from "../../assets/about-robotics.jpg";


export default function AboutUsPreview() {
  return (
    <section className="bg-[#f5faff] py-10 px-6 mb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text part */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333] mb-4">
            Who are we ?
            {/* <span className="text-[#69c]">HostedMinds</span> */}
          </h2>
          <p className="text-gray-700 text-lg mb-6">
           At Hostedminds, we ignite curiosity, foster innovation, and empower tomorrow’s tech leaders. With strong roots in robotics, STEM education, software development, IoT, and more, we’re leading the way in educational and technological innovation.
          </p>
          <Link
            to="/aboutUs"
            className="inline-block bg-[#69c] text-white text-lg font-bold px-2 sm:px-2 md:px-3 py-1 sm:py-2 md:py-2 rounded-lg shadow transition duration-300 hover:underline hover:underline-offset-4 transition text-center"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Images collection part */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={iot} alt="iot image" className="rounded-lg shadow-md object-cover h-48 w-full" />
          <img src={coding} alt="Code image" className="rounded-lg shadow-md object-cover h-48 w-full" />
          <img
            src={robotics}
            alt="robotics image"
            className="rounded-lg shadow-md object-cover h-48 w-full col-span-2"
          />
        </motion.div>
      </div>
    </section>
  );
}
