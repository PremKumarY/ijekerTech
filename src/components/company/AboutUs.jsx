import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FooterBanner from "../footer/FooterBanner";
import { Users, Cpu, Globe, Rocket, ShieldCheck, Zap } from "lucide-react";

function AboutUs() {
  const stats = [
    { icon: <Users size={40} className="text-blue-600" />, label: "Clients Served", value: "120+" },
    { icon: <Cpu size={40} className="text-blue-600" />, label: "AI Models Built", value: "50+" },
    { icon: <Globe size={40} className="text-blue-600" />, label: "Countries Reached", value: "15+" },
    { icon: <Rocket size={40} className="text-blue-600" />, label: "Projects Delivered", value: "200+" },
  ];

  const missionVision = [
    {
      title: "Our Mission",
      desc: "To empower businesses with AI and modern technology that makes processes smarter, faster, and scalable.",
      icon: <Zap size={35} className="text-yellow-500" />,
    },
    {
      title: "Our Vision",
      desc: "To become a global leader in AI-driven solutions, shaping the future of technology and innovation.",
      icon: <ShieldCheck size={35} className="text-green-500" />,
    },
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center relative overflow-hidden">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-yellow-300">ijekerTech</span>
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Driving innovation with AI, software solutions, and IT consultancy to empower businesses worldwide.
          </motion.p>
          <motion.div
            className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          />
        </section>

        {/* Who We Are */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At ijekerTech, our mission is to innovate and create cutting-edge solutions in Artificial Intelligence, Web Development, and Technical Consultancy. We believe in transforming ideas into impactful realities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a passionate team of developers, designers, and AI engineers, we deliver exceptional quality, modern design, and scalable solutions for businesses of all sizes.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/img2.jpg"
              alt="About Us"
              className="rounded-2xl shadow-xl w-full max-w-md hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-6 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
          />
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-white shadow border border-gray-100 hover:border-blue-200 hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer flex flex-col items-center"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ delay: i * 0.2 }}
              >
                <div className="mb-3 flex justify-center">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          {missionVision.map((item, i) => (
            <motion.div
              key={i}
              className="p-8 bg-gradient-to-r from-indigo-50 to-white rounded-2xl shadow border border-gray-100 hover:border-blue-200 hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ delay: i * 0.2 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-6 text-center rounded-t-3xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Build Something Amazing?
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto mb-6 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Partner with ijekerTech and let’s turn your ideas into powerful digital solutions.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition"
          >
            Contact Us
          </motion.button>
        </section>

      </div>
      <FooterBanner />
    </>
  );
}

export default AboutUs;
