import React, { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowDown,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import FooterBanner from "../footer/FooterBanner";
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Scroll to form
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit (using mailto OR API integration)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("⚠️ Please fill out all fields before submitting.");
      return;
    }

    // Mailto fallback (opens user’s default email app with pre-filled data)
    window.location.href = `mailto:ijekerTech@gmail.com?subject=Message from ${formData.name}&body=${formData.message} (Reply to: ${formData.email})`;

    // If you have backend, replace above with API POST request
    // fetch("/api/contact", { method:"POST", body: JSON.stringify(formData) })
    //   .then(() => alert("✅ Message Sent Successfully!"))
    //   .catch(() => alert("❌ Failed to send message."));
  };

  const inputFocusClass =
    "focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="/img3.jpg"
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center flex flex-col items-center justify-center h-full px-4">
          <motion.p
            className="text-blue-400 uppercase tracking-widest font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Best IT Solution Provider
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight border-b-4 pb-2 inline-block text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="mt-2 text-lg text-gray-200 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We look forward to hearing from you! Let's collaborate and build
            something amazing.
          </motion.p>
          <motion.button
            onClick={scrollToForm}
            className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowDown /> Scroll to Form
          </motion.button>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-600">
        <Link to="/" className="hover:text-purple-600 font-medium">
          Home
        </Link>{" "}
        / <span className="text-gray-500"> Contact</span>
      </nav>

      {/* Contact Section */}
      <section
        className="min-h-[60vh] w-full bg-gray-50 flex flex-col md:flex-row p-6 md:p-16 gap-10"
        ref={formRef}
      >
        {/* Contact Form */}
        <motion.div
          className="md:w-1/2 w-full bg-white shadow-xl rounded-2xl p-6 md:p-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 ${inputFocusClass}`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 ${inputFocusClass}`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 ${inputFocusClass}`}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Info */}
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Info
            </h3>
            <a
              href="tel:+91-6392554947"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
            >
              <FaPhoneAlt className="text-blue-600" /> <span>+91 6392554947</span>
            </a>
            <a
              href="mailto:ijekertech@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
            >
              <FaEnvelope className="text-blue-600" />{" "}
              <span>ijekertech@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-blue-600" />{" "}
              <span>Lucknow, India</span>
            </div>
            <div className="flex items-center gap-4 mt-3">
              <a
                href="https://www.linkedin.com/company/ijekertech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/ijekertech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-400 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579048111215"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-400 transition"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/ijekertech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-400 transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.instagram.com/ijekertech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-400 transition"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[400px]">
            <iframe
              title="Company Location"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7106.3238948843655!2d83.83771707796076!3d27.056635633029614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399409869f91ab9f%3A0x7f7f136a03425bfe!2sijekerTech!5e0!3m2!1sen!2sin!4v1754737717132!5m2!1sen!2sin"
            ></iframe>
          </div>
        </motion.div>
      </section>

      <FooterBanner />
    </>
  );
};

export default Contact;
