import React from "react";
import FooterBanner from "../footer/FooterBanner";
import {Link} from "react-router-dom";
import { FaMobileAlt, FaCode, FaCloud, FaRobot, FaServer, FaDatabase, FaLock } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function AppDevelopment() {
  const services = [
    { icon: <FaMobileAlt className="text-4xl text-blue-500" />, title: "Custom Mobile App Development", description: "Build high-quality Android & iOS apps tailored to your business requirements using the latest frameworks." },
    { icon: <FaCode className="text-4xl text-green-500" />, title: "Cross-Platform Apps", description: "Develop apps that work seamlessly on both Android & iOS using React Native or Flutter." },
    { icon: <FaCloud className="text-4xl text-purple-500" />, title: "Cloud-Integrated Apps", description: "Integrate your apps with cloud solutions like AWS, Google Cloud, or Azure for better scalability." },
    { icon: <FaRobot className="text-4xl text-pink-500" />, title: "AI-Powered Applications", description: "Leverage AI/ML to add features like chatbots, image recognition, and voice assistants." },
    { icon: <FaDatabase className="text-4xl text-orange-500" />, title: "Backend API Development", description: "Secure & fast backend APIs to power your mobile applications with Node.js, Django, or Laravel." },
    { icon: <FaServer className="text-4xl text-red-500" />, title: "IoT & Wearable Apps", description: "Specialized apps for IoT devices, smartwatches, and other connected technologies." },
    { icon: <FaLock className="text-4xl text-gray-500" />, title: "App Security & Optimization", description: "Ensure app security, performance optimization, and regular updates." },
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center relative overflow-hidden">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          App Development Services
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We provide end-to-end app development solutions, from concept to deployment.
        </motion.p>
        <motion.div
          className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
        />
      </section>
       {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-600">
          <Link to="/" className="hover:text-purple-600 font-medium">
            Home
          </Link>{" "}
          /{" "}
          <span className="text-gray-500"> IT Solution / App Development</span>
        </nav>

      {/* Services Grid */}
      <div className="bg-gray-50 py-20 px-6 lg:px-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
             className="group bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl transition transform hover:-translate-y-2"
               initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: idx * 0.15 }}
            >
              <div className="mb-4 flex justify-center w-16 h-16 items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl group-hover:scale-110 transition shadow-lg group-hover:shadow-blue-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 text-center rounded-t-3xl relative overflow-hidden">
        <motion.h2
          className="text-3xl font-bold mb-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Have a project in mind?
        </motion.h2>
        <motion.p
          className="mb-6 text-gray-100 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Contact us today to get started with your project.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          Get in Touch
        </motion.a>
      </section>

      <FooterBanner />
    </>
  );
}

export default AppDevelopment;
