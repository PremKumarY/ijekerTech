import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaUsers, FaRegClock } from "react-icons/fa";

function InternshipPage() {
  const benefits = [
    {
      title: "Hands-on Projects",
      icon: <FaLaptopCode size={28} />,
      desc: "Work on real-world projects to strengthen your skills."
    },
    {
      title: "Mentorship",
      icon: <FaUsers size={28} />,
      desc: "Learn directly from experienced mentors & industry experts."
    },
    {
      title: "Flexible Duration",
      icon: <FaRegClock size={28} />,
      desc: "Choose from different internship durations as per your schedule."
    },
    {
      title: "Career Growth",
      icon: <FaBriefcase size={28} />,
      desc: "Boost your resume with practical experience and references."
    }
  ];

  const steps = [
    "Register with your basic details.",
    "Get shortlisted based on eligibility.",
    "Work on projects & attend mentorship sessions.",
    "Receive Internship Certificate from ijekerTech."
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Internship Program
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
        >
          Gain real-world experience and prepare yourself for the future with{" "}
          <span className="font-semibold text-yellow-300">ijekerTech</span>.
        </motion.p>

        <Link
          to="/register"
          className="mt-8 inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          Apply Now
        </Link>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600">
        <Link to="/" className="hover:text-blue-600 font-medium">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/cms/cms-page" className="hover:text-blue-600 font-medium">
          CMS
        </Link>{" "}
        / <span className="text-gray-500">Internship</span>
      </nav>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Join Our Internship?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <div className="text-blue-600 flex justify-center mb-4">{b.icon}</div>
              <h3 className="text-xl font-semibold">{b.title}</h3>
              <p className="text-gray-600 mt-2">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Internship Process
          </h2>
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {i + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-gradient-to-r from-indigo-700 to-purple-800 py-14 text-center text-white">
        <h3 className="text-3xl font-semibold">Kickstart Your Career Today!</h3>
        <p className="mt-3 max-w-2xl mx-auto text-gray-200">
          Apply now to join ijekerTech Internship Program and take the first step towards success.
        </p>
        <Link
          to="/register"
          className="mt-6 inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full shadow hover:bg-yellow-300 transition"
        >
          Apply for Internship
        </Link>
      </footer>
    </div>
  );
}

export default InternshipPage;
