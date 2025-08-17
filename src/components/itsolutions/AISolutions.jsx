import React from "react";
import FooterBanner from "../footer/FooterBanner";
import { motion } from "framer-motion";
import { Brain, Cpu, Code, Bot, LineChart, Lock } from "lucide-react";

function AISolutions() {
  const services = [
    { title: "AI Chatbot Development", desc: "Custom conversational AI solutions that understand and respond naturally, enhancing customer engagement.", icon: Bot },
    { title: "Machine Learning Models", desc: "Training and deployment of predictive models for analytics, forecasting, and automation.", icon: Brain },
    { title: "Computer Vision", desc: "AI-powered image and video recognition systems for security, retail, and automation.", icon: Cpu },
    { title: "Natural Language Processing", desc: "Extract insights from text, perform sentiment analysis, and automate text-based tasks.", icon: Code },
    { title: "AI for Data Analytics", desc: "Transform raw data into actionable intelligence using advanced AI algorithms.", icon: LineChart },
    { title: "AI Security Solutions", desc: "Detect anomalies, prevent fraud, and secure systems with AI-based monitoring.", icon: Lock },
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center relative overflow-hidden">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          AI Development Services
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Empower your business with next-gen Artificial Intelligence solutions tailored to your needs.
        </motion.p>
        <motion.div
          className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
        />
      </section>

      {/* Services Section */}
      <div className="bg-gray-50 py-20 px-6 lg:px-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl transition transform hover:-translate-y-2"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: idx * 0.15 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl mb-6 group-hover:scale-110 transition shadow-lg group-hover:shadow-blue-300">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center text-white px-2 rounded-t-3xl overflow-hidden">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Build Your AI Solution?
        </motion.h2>
        <motion.p
          className="mb-8 text-lg opacity-90 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Let’s bring your AI vision to life. Contact us to discuss your project today.
        </motion.p>
        <motion.a
          href="/contact"
          className="bg-white text-blue-700 font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          Talk to Our Team
        </motion.a>
      </div>

      <FooterBanner />
    </>
  );
}

export default AISolutions;
