import React from 'react'
import FooterBanner from '../footer/FooterBanner'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function WebDevelopment() {
  return (
    <>
       <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Professional Web Development Services
          </motion.h1>
          <motion.p
            className="mt-4 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We build fast, secure, and scalable websites that bring your ideas to life and help your business grow.
          </motion.p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Web Development Solutions
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Website Development",
              desc: "Tailor-made solutions for your business with cutting-edge technology.",
              icon: "🌐",
            },
            {
              title: "E-Commerce Development",
              desc: "Secure and scalable online stores with payment gateway integration.",
              icon: "🛒",
            },
            {
              title: "CMS Development",
              desc: "Easily manage your website content with WordPress, Drupal, and more.",
              icon: "⚙️",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Development Process
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { step: "1", title: "Planning", desc: "We understand your needs and create a strategy." },
              { step: "2", title: "Design", desc: "We design stunning UI/UX to match your brand." },
              { step: "3", title: "Development", desc: "We build secure and scalable applications." },
              { step: "4", title: "Launch", desc: "We test, deploy, and provide ongoing support." },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow-md rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-blue-600 text-4xl font-bold">{phase.step}</div>
                <h3 className="mt-4 text-lg font-semibold">{phase.title}</h3>
                <p className="mt-2 text-gray-600">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Technologies We Use
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "WordPress"].map((tech, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md px-6 py-3 rounded-full hover:shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12 text-center">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Ready to Build Your Dream Website?
        </motion.h2>
        <p className="mt-4">Contact us today to get started with your project.</p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
      <FooterBanner />
    </>
  )
}

export default WebDevelopment
