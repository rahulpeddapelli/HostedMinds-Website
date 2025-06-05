import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChalkboardTeacher, FaTools, FaRobot, FaCogs } from 'react-icons/fa'

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
]

export default function WhyChooseUs() {
  return (
    <section className="w-full py-10 bg-[#f5faff] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333] mb-10  text-center">Why Choose Us</h2>
        <div className="flex flex-col gap-8">
          {whyChoosePoints.map((point, index) => (
            <AnimatedCard key={index} point={point} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCard({ point, index }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 })
    }
  }, [controls, inView])

  const fromDirection = index % 2 === 0 ? 100 : -100

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromDirection }}
      animate={controls}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-white shadow-lg rounded-xl p-6 flex items-start"
    >
      {point.icon}
      <div>
        <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
        <p className="text-gray-600">{point.text}</p>
      </div>
    </motion.div>
  )
}
