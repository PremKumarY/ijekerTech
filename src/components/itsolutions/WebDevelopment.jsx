import React from 'react';
import FooterBanner from '../footer/FooterBanner';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function WebDevelopment() {
  const services = [
    { title: "Custom Website Development", desc: "Tailor-made solutions for your business with cutting-edge technology.", icon: "🌐" },
    { title: "E-Commerce Development", desc: "Secure and scalable online stores with payment gateway integration.", icon: "🛒" },
    { title: "CMS Development", desc: "Easily manage your website content with WordPress, Drupal, and more.", icon: "⚙️" },
  ];

  const processSteps = [
    { step: "1", title: "Planning", desc: "We understand your needs and create a strategy." },
    { step: "2", title: "Design", desc: "We design stunning UI/UX to match your brand." },
    { step: "3", title: "Development", desc: "We build secure and scalable applications." },
    { step: "4", title: "Launch", desc: "We test, deploy, and provide ongoing support." },
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
  };

  return (
    <>
      <div className="bg-gray-50 text-gray-800">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center relative overflow-hidden">
          <motion.h1 className="text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            Professional Web Development Services
          </motion.h1>
          <motion.p className="max-w-2xl mx-auto text-lg text-gray-200"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
            We build fast, secure, and scalable websites that bring your ideas to life and help your business grow.
          </motion.p>
        </section>
        {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-600">
          <Link to="/" className="hover:text-purple-600 font-medium">
            Home
          </Link>{" "}
          /{" "}
          <span className="text-gray-500"> IT Solution / Web Development</span>
        </nav>
        {/* Services Section */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <motion.h2 className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Our Web Development Solutions
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx}
                className="group bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl transition transform hover:-translate-y-2"
                initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={cardVariants} transition={{ delay: idx * 0.15 }}>
                <div className="text-5xl mb-4 flex justify-center items-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl group-hover:scale-110 transition shadow-lg group-hover:shadow-blue-300">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold group-hover:text-blue-600 transition">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              Our Development Process
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {processSteps.map((phase, idx) => (
                <motion.div key={idx}
                  className="bg-white shadow-md rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-transform duration-300 group"
                  initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={cardVariants} transition={{ delay: idx * 0.1 }}>
                  <div className="text-blue-600 text-4xl font-bold mb-2">{phase.step}</div>
                  <h3 className="mt-4 text-lg font-semibold group-hover:text-blue-600 transition">{phase.title}</h3>
                  <p className="mt-2 text-gray-600">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
       <section className="py-16 max-w-7xl mx-auto px-6">
  <motion.h2 
    className="text-3xl font-bold text-center mb-12"
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    viewport={{ once: true }}
  >
    Technologies We Use
  </motion.h2>

  {/* Front-end */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4 text-center">Front-end</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "TypeScript"].map((tech, idx) => (
        <motion.div 
          key={idx}
          className="bg-white shadow-md px-6 py-3 rounded-full border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-transform duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  </div>

  {/* Back-end */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4 text-center">Back-end</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {["Node.js", "Express.js", "Django", "FastAPI"].map((tech, idx) => (
        <motion.div 
          key={idx}
          className="bg-white shadow-md px-6 py-3 rounded-full border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-transform duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  </div>

  {/* Database */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4 text-center">Database</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {["MongoDB", "PostgreSQL", "MySQL", "Redis"].map((tech, idx) => (
        <motion.div 
          key={idx}
          className="bg-white shadow-md px-6 py-3 rounded-full border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-transform duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  </div>

  {/* CMS */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4 text-center">CMS / Full-stack</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {["WordPress", "MERN Stack"].map((tech, idx) => (
        <motion.div 
          key={idx}
          className="bg-white shadow-md px-6 py-3 rounded-full border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-transform duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  </div>

  {/* Tools & Deployment */}
  <div>
    <h3 className="text-xl font-semibold mb-4 text-center">Tools & Deployment</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {["Git & GitHub", "Docker", "Vercel", "Netlify", "Render", "Postman"].map((tech, idx) => (
        <motion.div 
          key={idx}
          className="bg-white shadow-md px-6 py-3 rounded-full border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-transform duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  </div>
</section>



        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12 text-center rounded-t-3xl">
          <motion.h2 className="text-3xl font-bold"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Ready to Build Your Dream Website?
          </motion.h2>
          <p className="mt-4">Contact us today to get started with your project.</p>
          <a href="/contact"
            className="mt-6 inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
            Get in Touch
          </a>
        </section>

      </div>
      <FooterBanner />
    </>
  );
}

export default WebDevelopment;
