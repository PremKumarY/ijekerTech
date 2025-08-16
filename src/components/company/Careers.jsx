import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock } from "lucide-react";
import FooterBanner from "../footer/FooterBanner";

function Careers() {
  // Sample job listings data
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote / India",
      type: "Full-time",
      description:
        "Build and maintain user-friendly interfaces using React, TailwindCSS, and modern web tools.",
      link: "#",
    },
    {
      title: "Backend Developer",
      location: "Remote / India",
      type: "Full-time",
      description:
        "Work with Node.js, Express, and MongoDB to create scalable APIs and backend systems.",
      link: "#",
    },
    {
      title: "AI/ML Engineer",
      location: "Remote / Hybrid",
      type: "Internship",
      description:
        "Develop and optimize machine learning models for real-time AI-driven applications.",
      link: "#",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center relative overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Careers at ijekerTech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg md:text-xl"
          >
            Join us in building cutting-edge solutions in AI, web development,
            and technology services. We value creativity, innovation, and a
            passion for problem-solving.
          </motion.p>
        </section>

        {/* Job Listings */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            🚀 Open Positions
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition transform"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-blue-600" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> {job.type}
                  </span>
                </div>
                <p className="text-gray-700 text-sm mb-6">{job.description}</p>
                <a
                  href={job.link}
                  className="block text-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Didn’t find your dream role?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-6">
            We are always looking for talented individuals! Send us your resume
            and we’ll get in touch when something suitable comes up.
          </p>
          <a
            href="mailto:ijekerTech@gmail.com"
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Submit Resume
          </a>
        </section>
      </div>

      {/* Footer Banner */}
      <FooterBanner />
    </>
  );
}

export default Careers;
