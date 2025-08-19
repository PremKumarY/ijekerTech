import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaLaptopCode, FaBrain, FaDatabase, FaCloud } from "react-icons/fa";

// this is the courses landing page with various courses offered

function CoursesLandingPage() {
  const courses = [
    {
      title: "Web Development",
      icon: <FaLaptopCode size={32} />,
      color: "from-blue-500 to-indigo-600",
      desc: "Master HTML, CSS, JavaScript, React, Node.js & build full-stack apps.",
      link: "/courses/web-development"
    },
    {
      title: "Artificial Intelligence",
      icon: <FaBrain size={32} />,
      color: "from-purple-500 to-pink-600",
      desc: "Learn AI, ML, Deep Learning & build intelligent applications.",
      link: "/courses/ai-ml"
    },
    {
      title: "Data Science",
      icon: <FaDatabase size={32} />,
      color: "from-green-500 to-emerald-600",
      desc: "Work with data, analytics, Python, and visualization tools.",
      link: "/courses/data-science"
    },
    {
      title: "Cloud Computing",
      icon: <FaCloud size={32} />,
      color: "from-yellow-500 to-orange-600",
      desc: "Explore AWS, Azure, and Google Cloud to deploy applications.",
      link: "/courses/cloud-computing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Explore Our Courses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
        >
          Choose from a wide range of career-focused courses at{" "}
          <span className="font-semibold text-yellow-300">ijekerTech</span>.
        </motion.p>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600">
        <Link to="/" className="hover:text-purple-600 font-medium">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/cms/cms-page/courses" className="hover:text-purple-600 font-medium">
          Courses
        </Link>{" "}
        / <span className="text-gray-500">Explore</span>
      </nav>

      {/* Course Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200"
          >
            <div
              className={`bg-gradient-to-r ${course.color} p-6 rounded-t-2xl flex justify-center`}
            >
              <div className="bg-white p-4 rounded-full shadow-md text-gray-800">
                {course.icon}
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{course.desc}</p>
              <Link
                to={course.link}
                className="mt-5 inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
              >
                View Details →
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Footer CTA */}
      <footer className="bg-gradient-to-r from-purple-700 to-pink-700 py-14 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-semibold">Start Your Learning Journey Now!</h3>
        <p className="mt-3 max-w-2xl mx-auto text-gray-200">
          Pick a course, learn at your own pace, and boost your career with{" "}
          <span className="font-bold text-yellow-300">ijekerTech</span>.
        </p>
        <Link
          to="/register"
          className="mt-6 inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full shadow hover:bg-yellow-300 transition"
        >
          Register & Learn
        </Link>
      </footer>
    </div>
  );
}

export default CoursesLandingPage;
