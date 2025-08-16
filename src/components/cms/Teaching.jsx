import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCertificate, FaLaptopCode, FaCalendarAlt, FaClock, FaUserGraduate } from "react-icons/fa";

function Teaching() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-xl p-6 max-w-4xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Prem Kumar Yadav
            </h2>
            <p className="text-gray-600">MCA DS&AI | Web Development & AI</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["ReactJS", "Node.js", "Python"].map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Training Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-6 bg-white shadow-lg rounded-xl p-6 max-w-4xl mx-auto"
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
          <FaLaptopCode className="text-blue-500" /> Training Details
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <DetailItem icon={<FaUserGraduate />} label="Course" value="Full Stack Web Development" />
          <DetailItem icon={<FaClock />} label="Duration" value="3 Months" />
          <DetailItem icon={<FaCalendarAlt />} label="Start Date" value="15th August 2025" />
          <DetailItem
            icon={<FaCertificate />}
            label="Status"
            value={<span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Ongoing</span>}
          />
        </div>
      </motion.div>

      {/* Certificates */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-6 bg-white shadow-lg rounded-xl p-6 max-w-4xl mx-auto"
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
          <FaCertificate className="text-yellow-500" /> Certificates
        </h3>
        <div className="flex flex-col gap-3">
          {["Web Development Certificate", "AI & Machine Learning Workshop"].map((cert, i) => (
            <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition">
              <p className="text-gray-700">{cert}</p>
              <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                Download
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Apply for Internship */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 max-w-4xl mx-auto text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition"
        >
          🚀 Apply for Internship
        </motion.button>
      </motion.div>
    </div>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-blue-500 text-xl">{icon}</div>
      <div>
        <p className="text-gray-500">{label}</p>
        <p className="font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
}

export default Teaching;
