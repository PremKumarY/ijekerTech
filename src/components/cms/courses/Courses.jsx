import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaBookOpen, FaLaptopCode, FaCertificate, FaUsers } from "react-icons/fa";
  

// this is the courses page 1 basic structure and information

function CoursesPage() {
  const benefits = [
    {
      title: "Wide Range of Courses",
      icon: <FaBookOpen size={28} />,
      desc: "Choose from multiple fields including Web Dev, AI/ML, Cloud, and more."
    },
    {
      title: "Learn Anytime",
      icon: <FaLaptopCode size={28} />,
      desc: "Access your course materials anytime, anywhere, at your pace."
    },
    {
      title: "Community Support",
      icon: <FaUsers size={28} />,
      desc: "Get guidance and interact with a community of learners and experts."
    },
    {
      title: "Certificate of Completion",
      icon: <FaCertificate size={28} />,
      desc: "Earn a recognized certificate upon completing each course."
    }
  ];

  const steps = [
    "Browse and select your preferred course.",
    "Register online & get access instantly.",
    "Learn at your pace with structured lessons.",
    "Complete projects & earn your certificate."
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-purple-500 to-pink-600 text-white py-20 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Professional Courses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
        >
          Learn, grow, and build your future with{" "}
          <span className="font-semibold text-yellow-300">ijekerTech</span> Courses.
        </motion.p>

        <Link
          to="courseslandingpage"
          className="mt-8 inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          Start Learning
        </Link>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600">
        <Link to="/" className="hover:text-purple-600 font-medium">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/cms/cms-page" className="hover:text-purple-600 font-medium">
          CMS
        </Link>{" "}
        / <span className="text-gray-500">Courses</span>
      </nav>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Our Courses?
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
              <div className="text-pink-600 flex justify-center mb-4">{b.icon}</div>
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
            Course Process
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
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                  {i + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-gradient-to-r from-purple-700 to-pink-700 py-14 text-center text-white">
        <h3 className="text-3xl font-semibold">Start Your Learning Journey Today!</h3>
        <p className="mt-3 max-w-2xl mx-auto text-gray-200">
          Enroll in ijekerTech Courses and get access to high-quality content with expert support.
        </p>
        <Link
          to="courseslandingpage"
          className="mt-6 inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full shadow hover:bg-yellow-300 transition"
        >
          Start Learning
        </Link>
      </footer>
    </div>
  );
}

export default CoursesPage;
