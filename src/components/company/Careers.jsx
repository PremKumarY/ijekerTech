import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock } from "lucide-react";
import FooterBanner from "../footer/FooterBanner";
import { Link } from "react-router-dom";

function Careers() {
  const allJobs = [
    {
      title: "Frontend Developer",
      location: "Remote / India",
      type: "Full-time",
      description:
        "Build and maintain user-friendly interfaces using React, TailwindCSS, and modern web tools.",
      tags: ["React", "TailwindCSS", "JavaScript"],
      link: "#",
    },
    {
      title: "Backend Developer",
      location: "Remote / India",
      type: "Full-time",
      description:
        "Work with Node.js, Express, and MongoDB to create scalable APIs and backend systems.",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      title: "AI/ML Engineer",
      location: "Remote / Hybrid",
      type: "Internship",
      description:
        "Develop and optimize machine learning models for real-time AI-driven applications.",
      tags: ["Python", "TensorFlow", "PyTorch"],
      link: "#",
    },
    {
      title: "UI/UX Designer",
      location: "On-site / India",
      type: "Contract",
      description:
        "Design intuitive and beautiful user experiences for web and mobile applications.",
      tags: ["Figma", "Adobe XD", "Prototyping"],
      link: "#",
    },
  ];

  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const jobTypes = ["All", "Full-time", "Internship", "Contract"];
  const jobLocations = ["All", "Remote / India", "Remote / Hybrid", "On-site / India"];

  const filteredJobs = allJobs.filter(
    (job) =>
      (selectedType === "All" || job.type === selectedType) &&
      (selectedLocation === "All" || job.location === selectedLocation)
  );

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24 px-4 text-center relative overflow-hidden">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Careers at <span className="text-yellow-300">ijekerTech</span>
          </motion.h1>
          <motion.p
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Join our mission to build cutting-edge solutions in AI, Web Development, and IT services.
            We value creativity, innovation, and a passion for solving problems.
          </motion.p>
        </section>

        {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-600">
          <Link to="/" className="hover:text-purple-600 font-medium">
            Home
          </Link>{" "}
          /{" "}
          <span className="text-gray-500"> Company / Careers /</span>
        </nav>

        {/* Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-10">
            {/* Job Type Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {jobTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full border font-semibold transition text-sm sm:text-base ${
                    selectedType === type
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Location Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {jobLocations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-4 py-2 rounded-full border font-semibold transition text-sm sm:text-base ${
                    selectedLocation === loc
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    layout
                    whileHover={{ scale: 1.02, boxShadow: "0 12px 20px rgba(0,0,0,0.15)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Briefcase className="text-blue-600" size={22} />
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{job.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-3 text-gray-500 text-xs sm:text-sm mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} /> {job.type}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base mb-3">{job.description}</p>

                      {/* Tags / Skills */}
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={job.link}
                      className="mt-4 block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
                    >
                      Apply Now
                    </a>
                  </motion.div>
                ))
              ) : (
                <motion.p
                  className="text-center text-gray-500 col-span-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  No jobs match your selected filters.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 md:py-20 px-4 text-center rounded-t-3xl">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Didn't find your dream role?
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-base sm:text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            We are always looking for talented individuals! Send us your resume and we’ll get in touch when something suitable comes up.
          </motion.p>
          <motion.a
            href="mailto:ijekerTech@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 w-full sm:w-auto bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Submit Resume
          </motion.a>
        </section>
      </div>

      <FooterBanner />
    </>
  );
}

export default Careers;
