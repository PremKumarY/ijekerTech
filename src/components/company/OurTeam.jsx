import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FooterBanner from "../footer/FooterBanner";
import { Lightbulb, Users, Target, Award } from "lucide-react";

function OurTeam() {
  const team = [
    {
    name: "Prem Kumar Yadav",
    role: "Founder & CEO",
    bio: "Leads ijekerTech with a vision for innovative AI and IT solutions.",
    image: "/man.png",
    linkedin: "https://www.linkedin.com/in/prem-kumar-yadav",
    twitter: "https://twitter.com/prem_kumar_yadav",
  },
  {
    name: "Nitesh Gupta",
    role: "CTO",
    bio: "Oversees technology strategy and drives product development.",
    image: "/man.png",
    linkedin: "https://www.linkedin.com/in/nitesh-gupta",
    twitter: "https://twitter.com/nitesh_gupta",
  },
  {
    name: "Priya Singh",
    role: "Lead Designer",
    bio: "Creates beautiful and functional user experiences.",
    image: "/woman.png",
    linkedin: "https://www.linkedin.com/in/priya-singh",
    twitter: "https://twitter.com/priya_singh",
  },
  {
    name: "Dhananjay Kushwaha",
    role: "HR Manager",
    bio: "Builds intelligent systems and machine learning models.",
    image: "/man.png",
    linkedin: "https://www.linkedin.com/in/dhananjay-kushwaha",
    twitter: "https://twitter.com/dhananjay_kushwaha",
  },
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-600 to-red-700 text-white py-20 px-6 text-center relative overflow-hidden">
          <motion.h1
            className="text-5xl font-extrabold mb-6 drop-shadow-lg"
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
            The passionate people behind <span className="font-bold">ijekerTech</span>, 
            working together to create impactful solutions.
          </motion.p>
        </section>

  {/* Team Members */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 text-center p-8 relative group"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-pink-500 shadow-lg"
                  />
                  <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                </div>

                {/* Info */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-pink-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center mt-5 gap-4 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={member.linkedin}
                    className="text-gray-500 hover:text-pink-600 transition"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a
                    href={member.twitter}
                    className="text-gray-500 hover:text-pink-600 transition"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Core Values */}
        <section className="bg-gray-100 py-16 px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto text-center">
            {[
              { icon: <Lightbulb className="w-10 h-10 text-pink-600" />, title: "Innovation" },
              { icon: <Users className="w-10 h-10 text-pink-600" />, title: "Collaboration" },
              { icon: <Target className="w-10 h-10 text-pink-600" />, title: "Excellence" },
              { icon: <Award className="w-10 h-10 text-pink-600" />, title: "Integrity" },
            ].map((value, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
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

        {/* Stats Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Achievements</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { number: "200+", label: "Projects Delivered" },
              { number: "100+", label: "Happy Clients" },
              { number: "10+", label: "Awards Won" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
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
        <section className="bg-gradient-to-r from-pink-600 to-red-700 text-white py-16 text-center">
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
      </div>
    </>
  );
}

export default OurTeam;
