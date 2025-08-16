import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaProjectDiagram, FaAward } from "react-icons/fa";

function Training() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/training-apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          setSuccess(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
            message: "",
          });
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  const benefits = [
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "Expert Mentors",
      desc: "Learn from industry professionals with years of real-world experience.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <FaProjectDiagram size={40} />,
      title: "Hands-on Projects",
      desc: "Build portfolio-worthy projects that make your resume stand out.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <FaAward size={40} />,
      title: "Certification",
      desc: "Earn a recognized certificate upon successful completion.",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Professional Training Programs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-200"
        >
          Master the skills you need to succeed in today’s competitive market.
        </motion.p>
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[120%] h-40 bg-white/10 blur-3xl rounded-full"></div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className={`bg-gradient-to-r ${benefit.color} p-6 text-center`}>
              <div className="bg-white p-4 rounded-full inline-block shadow-lg text-gray-800 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
              <p className="mt-2 text-gray-100">{benefit.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Apply Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Apply for Training
        </h2>
        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 mb-4"
          >
            ✅ Application submitted successfully!
          </motion.p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-500"
            required
          />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select Course</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="Data Science & Machine Learning">
              Data Science & Machine Learning
            </option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>
          <textarea
            name="message"
            placeholder="Any message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-500"
            rows="4"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-500 transition"
          >
            Apply Now
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Training;
