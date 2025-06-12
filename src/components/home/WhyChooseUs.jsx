import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChalkboardTeacher, FaTools, FaRobot, FaCogs, FaUsers, FaProjectDiagram, FaBuilding, FaGraduationCap, FaSmile } from 'react-icons/fa';
import AnimatedContent from './AnimatedContent';

const whyChoosePoints = [
  {
    icon: <FaChalkboardTeacher className="text-blue-600 text-3xl mr-4" />,
    title: 'Expert-Led Learning',
    text: 'All our courses and services are led by experienced engineers and educators.',
  },
  {
    icon: <FaTools className="text-green-600 text-3xl mr-4" />,
    title: 'Project-Based Approach',
    text: 'We focus on hands-on, real-world projects that build true skills.',
  },
  {
    icon: <FaRobot className="text-purple-600 text-3xl mr-4" />,
    title: 'Robotics & IoT Experts',
    text: 'Deep expertise in cutting-edge fields like Robotics, IoT, and PCB design.',
  },
  {
    icon: <FaCogs className="text-red-600 text-3xl mr-4" />,
    title: 'End-to-End Solutions',
    text: 'From learning to product delivery, we provide complete technical support.',
  },
];

const statsData = [
  {
    heading: 'Projects & Services',
    stats: [
      {
        icon: <FaProjectDiagram className="text-2xl text-green-600 mr-2" />,
        count: '300+ ',
        text: 'Projects Delivered'
      },
      {
        icon: <FaCogs className="text-2xl text-blue-600 mr-2" />,
        count: '40+ ',
        text: 'Product Solutions Built'
      },
      {
        icon: <FaTools className="text-2xl text-orange-600 mr-2" />,
        count: '25+ ',
        text: 'Research Projects Completed'
      }
    ]
  },
  {
    heading: 'Client & Industry Engagement',
    stats: [
      {
        icon: <FaBuilding className="text-2xl text-indigo-600 mr-2" />,
        count: '15+ ',
        text: 'Industry Collaborations'
      },
      {
        icon: <FaUsers className="text-2xl text-pink-600 mr-2" />,
        count: '10+ ',
        text: 'Startup Partnerships'
      },
      {
        icon: <FaSmile className="text-2xl text-yellow-600 mr-2" />,
        count: '95% ',
        text: 'Client Satisfaction'
      }
    ]
  },
  {
    heading: 'Expertise & Training',
    stats: [
      {
        icon: <FaChalkboardTeacher className="text-2xl text-cyan-600 mr-2" />,
        count: '50+ ',
        text: 'Industry Experts'
      },
      {
        icon: <FaGraduationCap className="text-2xl text-purple-600 mr-2" />,
        count: '1300+ ',
        text: 'Students Trained'
      },
      {
        icon: <FaTools className="text-2xl text-teal-600 mr-2" />,
        count: '30+ ',
        text: 'Real-World Workshops'
      }
    ]
  },
  {
    heading: 'Community Impact',
    stats: [
      {
        icon: <FaUsers className="text-2xl text-rose-600 mr-2" />,
        count: '5000+ ',
        text: 'Tech Community Members'
      },
      {
        icon: <FaProjectDiagram className="text-2xl text-lime-600 mr-2" />,
        count: '100+ ',
        text: 'Career Transitions'
      },
      {
        icon: <FaSmile className="text-2xl text-violet-600 mr-2" />,
        count: '4.9/5 ',
        text: 'Average Rating'
      }
    ]
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 bg-[#fafcff] overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#333] mb-3">Why Choose Us</h2>
        <p className="text-gray-600 text-base sm:text-xl">
          Discover what makes us stand out as your trusted innovation and education partner.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-4 max-w-7xl mx-auto">
        {whyChoosePoints.map((point, index) => (
          <AnimatedCard key={index} point={point} index={index} />
        ))}
      </div>


      <div className="text-center max-w-2xl mx-auto mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#333] mb-3">Our Achievements</h2>
        <p className="text-gray-600 text-base sm:text-xl">
          A glimpse at the impact we've made through education, innovation, and industry collaboration.
        </p>
      </div>


      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 py-4 overflow-hidden mb-8'>
        {statsData.map((data, index) => (
          <AnimatedContent
            key={index}
            distance={100}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.3}
            delay={0.3}
          >
            <div className='p-6 w-full bg-white shadow-lg rounded-xl lg:h-75 xl:h-65'>
              <h3 className='text-lg md:text-xl font-bold mb-4 text-gray-800 lg:h-[60px]'>
                {data.heading}</h3>
              <div className='flex flex-col gap-3'>
                {data.stats.map((stat, idx) => (
                  <div key={idx} className='flex items-start text-gray-700'>
                    {stat.icon}
                    <div>
                      <span className='text-lg text-[#69c] font-bold'>{stat.count}</span>
                      <span className='text-base'>{stat.text}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>

        <p className='max-w-7xl mx-auto text-lg md:text-xl lg:text-2xl font-semibold text-center'>Ready to Transform Your Ideas into Reality?  <Link
          to="/contactUs"
          className="text-blue-600 hover:text-blue-800"
        >
          Contact Us
        </Link></p>

    </section>
  );
}

function AnimatedCard({ point, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  const fromDirection = index % 2 === 0 ? 100 : -100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromDirection }}
      animate={controls}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="p-6 flex items-start bg-white shadow-lg rounded-xl"
    >
      {point.icon}
      <div>
        <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
        <p className="text-gray-600">{point.text}</p>
      </div>
    </motion.div>
  );
}
