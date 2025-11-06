import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FooterBanner from "../footer/FooterBanner";
import { Lightbulb, Users, Target, Award } from "lucide-react";
import { FaLinkedin,FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function OurTeam() {
  const team = [
    {
      name: "Prem Kumar Yadav",
      role: "Founder & CEO",
      bio: "Leads ijekerTech with a vision for innovative AI and IT solutions. And drives the company's strategic direction.",
      image: "/man.png",
      linkedin: "https://www.linkedin.com/in/prem-kumar-yadav-15a06a208/",
      instagram: "https://www.instagram.com/prem__kumar__yadav_/",
      twitter: "https://x.com/PremKumarY_",
    },
    {
      name: "Nitesh Gupta",
      role: "CTO",
      bio: "Oversees technology strategy and drives product development. A tech visionary with a passion for innovation.",
      image: "/man.png",
      linkedin: "https://www.linkedin.com/in/nitesh-gupta-06b397208/",
      instagram: "https://www.instagram.com/nitesh__gupta___/",
      twitter: "https://x.com/niteshg31466509",
 
    },
    {
      name: "Sonali Verma",
      role: "Accountant & Financial",
      bio: "Manages Accounting and Financial Operations. A detail-oriented professional with a passion for numbers.",
      image: "/woman.png",
      linkedin: "https://www.linkedin.com/in/sonali-kumari-1a8055273/",
      instagram: "https://www.instagram.com/shaluverma_25/",
      twitter: "https://x.com/SonaliVerma",
    },
    {
      name: "Dhananjay Kushwaha",
      role: "HR Manager",
      bio: "Leads HR initiatives and fosters a positive workplace culture. Committed to employee growth and organizational success.",
      image: "/man.png",
      linkedin: "https://www.linkedin.com/in/dhananjay-kushwaha-07b556328/",
      instagram: "https://www.instagram.com/dhananjay_kush07/",
      twitter: "https://x.com/Dk_Dhananjay2",
    },
    {
      name: "Ashish Yadav",
      role: "Intern",
      bio: "Enthusiastic intern passionate about human resources. Eager to support HR initiatives, learn from the team, and contribute to a positive workplace culture.",
      image: "/man.png",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      twitter: "https://x.com",
    },
  ];

  const coreValues = [
    { icon: <Lightbulb className="w-10 h-10 text-pink-600" />, title: "Innovation" },
    { icon: <Users className="w-10 h-10 text-pink-600" />, title: "Collaboration" },
    { icon: <Target className="w-10 h-10 text-pink-600" />, title: "Excellence" },
    { icon: <Award className="w-10 h-10 text-pink-600" />, title: "Integrity" },
  ];

  const achievements = [
    { number: "200+", label: "Projects Delivered" },
    { number: "100+", label: "Happy Clients" },
    { number: "10+", label: "Awards Won" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  // Get unique roles for dropdown
  const roles = ["All", ...new Set(team.map((member) => member.role))];

  // Filter team by search term & role
  const filteredTeam = team.filter(
    (member) =>
      (member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (roleFilter === "All" || member.role === roleFilter)
  );

  return (
    <>
      <div className="bg-gray-50 min-h-screen">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-600 to-red-700 text-white py-20 px-6 text-center relative overflow-hidden">
          <motion.h1
            className="text-5xl font-serif font-extrabold mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The passionate people behind <span className="font-bold">ijekerTech</span>, working together to create impactful solutions.
          </motion.p>

          {/* Search & Role Filter */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by name or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-2/3 px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm"
            />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full sm:w-1/3 px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm"
            >
              {roles.map((role, idx) => (
                <option key={idx} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </section>
        {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-purple-600 font-medium">
            Home
          </Link>{" "}
          /{" "}
          <span className="text-gray-500"> Company / Our-Team /</span>
        </nav>
        {/* Team Members */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {filteredTeam.length > 0 ? (
            <motion.div
              className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {filteredTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 text-center p-8 relative group"
                  variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-pink-500 shadow-lg "
                    />
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 italic hover:font-serif">{member.name}</h3>
                  <p className="text-sm text-pink-600 font-medium mb-3">{member.role}</p>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed font-serif">{member.bio}</p>

                  <div className="flex justify-center mt-5 gap-4 opacity-0 group-hover:opacity-100 transition">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-pink-600 transition text-xl"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-pink-600 transition text-xl"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-pink-600 transition text-xl"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-center text-gray-500 text-lg">No team members match your search.</p>
          )}
        </section>

        {/* Core Values */}
        <section className="bg-gray-100 py-16 px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto text-center">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Achievements</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {achievements.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h3 className="text-4xl font-bold text-pink-600">{stat.number}</h3>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-red-700 text-white py-16 text-center rounded-t-3xl">
          <h2 className="text-3xl font-bold mb-4">Want to be part of our journey?</h2>
          <p className="mb-6 text-gray-100">
            Join the innovative team of ijekerTech and build the future with us.
          </p>
          <a
            href="/careers"
            className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
          >
            Explore Careers
          </a>
        </section>

        <FooterBanner />
      </div>
    </>
  );
}

export default OurTeam;
