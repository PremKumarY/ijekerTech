import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Phone,
  Mail,
  ChevronDown,
  Server,
  ShieldCheck,
  Cpu,
  Briefcase,
  Wrench,
  ClipboardCheck,
  Users,
} from "lucide-react";
import FooterBanner from "../footer/FooterBanner";

// Counter component
const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-blue-600">{count}+</p>
      <p className="mt-2 text-gray-700">{label}</p>
    </div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AllServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* ---------- Hero Section ---------- */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-28 px-6 md:px-16 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            IT Management Services & Consultancy
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Delivering reliable IT solutions with 27+ years of excellence.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Get Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* ---------- About Section ---------- */}
      <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-4">About Our Service</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We provide cutting-edge IT solutions and consultancy services for businesses of all sizes. Our team ensures performance, security, and efficiency in all projects.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With over 27 years of experience, we’ve helped over 2,500+ clients achieve success through technology.
          </p>
        </motion.div>
        <motion.img
          src="/img3.jpg"
          alt="Service"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* ---------- Statistics / Counter Section ---------- */}
      <section className="bg-blue-50 py-20 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Counter end={27} label="Years of Experience" />
          <Counter end={2500} label="Satisfied Clients" />
          <Counter end={150} label="Projects Completed" />
          <Counter end={24} label="Awards & Recognitions" />
        </div>
      </section>

      {/* ---------- Core Services ---------- */}
      <section className="bg-gray-100 py-20 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "IT Design", icon: Cpu },
            { name: "IT Management", icon: Server },
            { name: "Data Security", icon: ShieldCheck },
            { name: "Business Reform", icon: Briefcase },
            { name: "IT Consultancy", icon: Wrench },
            { name: "QA & Testing", icon: ClipboardCheck },
            { name: "Infrastructure Plan", icon: Server },
            { name: "Software Engineering", icon: Cpu },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}
              className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center transition"
            >
              <s.icon className="text-blue-600 mb-4" size={40} />
              <h3 className="text-lg font-semibold">{s.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Benefits Section ---------- */}
      <section className="bg-white py-20 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits With Our Service</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Enhanced IT efficiency",
            "Cost optimization",
            "Secure infrastructure",
            "Continuous monitoring",
            "Scalable solutions",
            "Expert consultancy",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gradient-to-tr from-blue-50 to-white rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              <CheckCircle className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">
                We ensure {item.toLowerCase()} with modern tools and best practices.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- FAQ Section ---------- */}
      <section className="py-20 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "Why is SEO Link Building Important?",
              a: "SEO link building improves your site's authority and helps rank higher in search engines.",
            },
            {
              q: "How can I order web design for my website?",
              a: "You can contact our support team via phone or email, and we’ll guide you through the process.",
            },
            {
              q: "What is off page SEO link building?",
              a: "Off-page SEO link building focuses on external factors like backlinks, social sharing, and brand mentions.",
            },
            {
              q: "How can we help your business?",
              a: "We provide IT solutions, consultancy, and continuous support tailored to your business needs.",
            },
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => toggleFAQ(i)}
              className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:bg-gray-50 transition"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">{item.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-gray-600 text-sm leading-relaxed"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CTA + Contact Section ---------- */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg mb-6">Contact us today and let's make your business technology-driven!</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </motion.button>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
          <div className="flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <Phone size={28} />
            <span className="text-xl font-semibold">+91 63925 54947</span>
          </div>
          <div className="flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <Mail size={28} />
            <span className="text-xl font-semibold">ijekertech@gmail.com</span>
          </div>
        </div>
      </section>

      <FooterBanner />
    </div>
  );
}
