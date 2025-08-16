import React from 'react'
import FooterBanner from '../footer/FooterBanner'
import { FaMobileAlt, FaCode, FaCloud, FaRobot, FaServer, FaDatabase, FaLock } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function AppDevelopment() {
 const services = [
    {
      icon: <FaMobileAlt className="text-4xl text-blue-500" />,
      title: "Custom Mobile App Development",
      description: "Build high-quality Android & iOS apps tailored to your business requirements using the latest frameworks."
    },
    {
      icon: <FaCode className="text-4xl text-green-500" />,
      title: "Cross-Platform Apps",
      description: "Develop apps that work seamlessly on both Android & iOS using React Native or Flutter."
    },
    {
      icon: <FaCloud className="text-4xl text-purple-500" />,
      title: "Cloud-Integrated Apps",
      description: "Integrate your apps with cloud solutions like AWS, Google Cloud, or Azure for better scalability."
    },
    {
      icon: <FaRobot className="text-4xl text-pink-500" />,
      title: "AI-Powered Applications",
      description: "Leverage AI/ML to add features like chatbots, image recognition, and voice assistants."
    },
    {
      icon: <FaDatabase className="text-4xl text-orange-500" />,
      title: "Backend API Development",
      description: "Secure & fast backend APIs to power your mobile applications with Node.js, Django, or Laravel."
    },
    {
      icon: <FaServer className="text-4xl text-red-500" />,
      title: "IoT & Wearable Apps",
      description: "Specialized apps for IoT devices, smartwatches, and other connected technologies."
    },
    {
      icon: <FaLock className="text-4xl text-gray-500" />,
      title: "App Security & Optimization",
      description: "Ensure app security, performance optimization, and regular updates."
    }
  ];

  return (
    <>
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800"
        >
          App Development Services
        </motion.h1>
        <p className="text-gray-600 mt-4 text-lg">
          We provide end-to-end mobile app development services for startups, SMEs, and enterprises.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-bold mb-4">Have a project in mind?</h2>
        <p className="text-gray-600 mb-6">
          Let's create an app that transforms your ideas into reality.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
      <FooterBanner />
    </>
  )
}

export default AppDevelopment
