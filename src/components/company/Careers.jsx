import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock } from "lucide-react";
import FooterBanner from "../footer/FooterBanner";

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
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6 text-center relative overflow-hidden">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Careers at <span className="text-yellow-300">ijekerTech</span>
          </motion.h1>
          <motion.p
            className="max-w-3xl mx-auto text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Join our mission to build cutting-edge solutions in AI, Web Development, and IT services.
            We value creativity, innovation, and a passion for solving problems.
          </motion.p>
        </section>

        {/* Filters */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {/* Job Type Filter */}
            <div className="flex gap-2">
              {jobTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full border font-semibold transition ${
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
            <div className="flex gap-2">
              {jobLocations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-4 py-2 rounded-full border font-semibold transition ${
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
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    layout
                    whileHover={{ scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
                    transition={{ duration: 0.4 }}
                    className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="text-blue-600" size={24} />
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin size={16} /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} /> {job.type}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mb-4">{job.description}</p>

                      {/* Tags / Skills */}
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={job.link}
                      className="mt-4 block text-center px-5 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-colors"
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
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-6 text-center rounded-t-3xl">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Didn't find your dream role?
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg mb-6"
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
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors"
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
