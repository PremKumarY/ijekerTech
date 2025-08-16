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
      desc: "Gain real-world experience with hands-on projects and mentorship."
    },
    {
      title: "Training",
      color: "from-green-500 to-emerald-600",
      icon: <FaLaptopCode size={40} />,
      link: "/cms/cms-page/training",
      desc: "Enhance your skills with structured training programs."
    },
    {
      title: "Teaching",
      color: "from-purple-500 to-pink-600",
      icon: <FaChalkboardTeacher size={40} />,
      link: "/cms/cms-page/teaching",
      desc: "Share your expertise and inspire the next generation."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Career Management System
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-200"
        >
          Explore opportunities for learning and career growth with{" "}
          <span className="font-semibold text-yellow-300">ijekerTech</span>.
        </motion.p>

        {/* Decorative background shapes */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[120%] h-40 bg-white/10 blur-3xl rounded-full"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        / CMS
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="backdrop-blur-md bg-white/60 border border-white/30 rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            <Link
              to={card.link}
              className={`block bg-gradient-to-r ${card.color} p-6 rounded-xl`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="bg-white p-4 rounded-full text-gray-800 shadow-lg"
                >
                  {card.icon}
                </motion.div>
                <h2 className="text-2xl font-bold">{card.title}</h2>
                <p className="text-sm text-gray-200">{card.desc}</p>
                <span className="mt-4 inline-block bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
                  Learn More →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-10 text-center text-white">
        <h3 className="text-2xl font-semibold">Ready to Start Your Journey?</h3>
        <p className="mt-2 text-gray-200">
          Join ijekerTech today and build your future with us.
        </p>
        <Link
          to="/register"
          className="mt-4 inline-block bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition"
        >
          Get Started..
        </Link>
      </div>
    </div>
  );
}

export default CmsPage;
