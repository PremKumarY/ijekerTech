import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaLaptopCode, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";

function CmsPage() {
  const cards = [
    {
      title: "Internship",
      color: "from-blue-500 to-indigo-600",
      icon: <FaUserGraduate size={40} />,
      link: "/cms/cms-page/internship",
      desc: "Gain real-world experience with hands-on projects and expert mentorship."
    },
    {
      title: "Training",
      color: "from-green-500 to-emerald-600",
      icon: <FaLaptopCode size={40} />,
      link: "/cms/cms-page/training",
      desc: "Enhance your skills with structured training programs designed for growth."
    },
    {
      title: "Courses",
      color: "from-purple-500 to-pink-600",
      icon: <FaChalkboardTeacher size={40} />,
      link: "/cms/cms-page/courses",
      desc: "Learn from industry experts and inspire the next generation of innovators."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Career Management System
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
        >
          Explore opportunities for learning and career growth with{" "}
          <span className="font-semibold text-yellow-300">ijekerTech</span>.
        </motion.p>

        {/* CTA inside Hero */}
        <Link
          to="/register"
          className="mt-8 inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          Get Started
        </Link>

        {/* Decorative Glow */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-[130%] h-44 bg-white/10 blur-3xl rounded-full"></div>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600">
        <Link to="/" className="hover:text-blue-600 font-medium">
          Home
        </Link>{" "}
        / <span className="text-gray-500">CMS</span>
      </nav>

        {/* Notice Banner */}
        <div className="bg-gray-100 text-yellow-800 p-4 rounded-lg mb-6 border border-yellow-500 blinking text-center animate-pulse hover:bg-yellow-200">
          ⚠️ This application is currently <b>inactive</b>.
          <span className="ml-2">Please check back later.</span>
          <span className="ml-2">Thank you for your understanding.</span>
          <span className="ml-2">We are working hard to bring it back online.</span>
          <span className="ml-2">Stay tuned for updates!</span>
          <span className="ml-2 text-blue-800">Work in progress...</span>
        </div>
          
      {/* Cards Section */}
      <section className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <Link
              to={card.link}
              className={`block bg-gradient-to-r ${card.color} p-8 rounded-2xl`}
            >
              <div className="flex flex-col items-center text-center space-y-5">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="bg-white p-5 rounded-full text-gray-800 shadow-lg"
                >
                  {card.icon}
                </motion.div>
                <h2 className="text-2xl font-bold text-white">{card.title}</h2>
                <p className="text-sm md:text-base text-gray-200">{card.desc}</p>
                <span className="mt-5 inline-block bg-white text-gray-800 px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
                  Learn More →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Footer CTA */}
      <footer className="bg-gradient-to-r from-indigo-700 to-purple-800 py-14 text-center text-white">
        <h3 className="text-3xl font-semibold">Ready to Start Your Journey?</h3>
        <p className="mt-3 max-w-2xl mx-auto text-gray-200">
          Join <span className="font-bold text-yellow-300">ijekerTech</span> today and build your future with us.
          Unlock endless opportunities right at your fingertips.
        </p>
        <Link
          to="/register"
          className="mt-6 inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full shadow hover:bg-yellow-300 transition"
        >
          Join Now
        </Link>
      </footer>
    </div>
  );
}

export default CmsPage;
