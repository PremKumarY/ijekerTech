import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  FileDown,
  Phone,
  Mail,
  ChevronDown,
  Server,
  ShieldCheck,
  Cpu,
  Briefcase,
  Wrench,
  ClipboardCheck,
} from "lucide-react";
import FooterBanner from "../footer/FooterBanner";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServiceDetails() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ---------- Hero Section ---------- */}
      <section className="bg-blue-600 text-white py-20 px-6 md:px-16 text-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold"
        >
          IT Management Services and Consultancy
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Delivering reliable IT solutions with 27+ years of excellence.
        </p>
      </section>

      {/* ---------- About Service ---------- */}
      <section className="py-16 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">About Our Service</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
            consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum
            that dolocons rsus mal suada and fadolorit to the consectetur elit.
            All the Lorem Ipsum generators predefined necessary.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Making this the first true dummy generator on the Internet. It uses
            a dictionary of over 200 Latin words combined Lorem Ipsum looks
            dummy that reasonable.
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

      {/* ---------- Benefits Section ---------- */}
      <section className="bg-white py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Benefits With Our Service
        </h2>
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
              className="p-6 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg transition"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              <CheckCircle className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- FAQ Section ---------- */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
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
              className="bg-white shadow rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{item.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 text-gray-600 text-sm leading-relaxed"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Services Grid ---------- */}
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Core Services
        </h2>
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
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg flex flex-col items-center text-center transition"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              <s.icon className="text-blue-600 mb-4" size={40} />
              <h3 className="text-lg font-semibold">{s.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="bg-blue-600 text-white py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-6">How Can We Help?</h2>
        <p className="text-lg mb-6">
          Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion at
          consectetur elit.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-3">
            <Phone size={28} />
            <span className="text-xl font-semibold">+91 63925 54947</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={28} />
            <span className="text-xl font-semibold">ijekertech@gmail.com</span>
          </div>
        </div>
      </section>
      <FooterBanner />
    </div>
  );
}
