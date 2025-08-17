import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Pencil,
  Settings,
  ShieldCheck,
  Cpu,
  Users,
  Phone,
  Cloud,
  AirVent,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ServicesTabs from "./ServicesTabs";

/* ---------------------- Variants for Reuse ---------------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay },
  }),
};

/* ---------------------- Hero Slides ---------------------- */
const slides = [
  {
    id: 1,
    image: "/img2.jpg",
    title: "Best Solution To Run Your Project Faster",
    description:
      "Grursus suada faci Lorem ipsum dolarorit ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm and fadolorit to the consectetur dummy text elit.",
    buttonText: "Get Details",
  },
  {
    id: 2,
    image: "/img3.jpg",
    title: "Innovative Ideas For Modern IT Solutions",
    description:
      "Accelerate your digital transformation journey with our cutting-edge strategies and modern technologies.",
    buttonText: "Explore More",
  },
  {
    id: 3,
    image: "/img4.jpg",
    title: "Empowering Your Business Through Tech",
    description:
      "We deliver IT solutions that fuel productivity, performance, and profitability for your company.",
    buttonText: "Start Now",
  },
];

/* ---------------------- Services Data ---------------------- */
const services = [
  {
    icon: <Pencil className="w-10 h-10 text-blue-500" />,
    title: "IT Design",
    desc: "Creative design solutions tailored to your IT needs, ensuring both usability and aesthetics.",
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-500" />,
    title: "IT Management",
    desc: "Reliable IT infrastructure and management services to keep your business running smoothly.",
  },
  {
    icon: <AirVent className="w-10 h-10 text-blue-500" />,
    title: "AI & Automation",
    desc: "Cutting-edge AI-driven solutions and automation to scale efficiency and performance.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    title: "Data Security",
    desc: "Robust security solutions to safeguard your data and maintain compliance standards.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-blue-500" />,
    title: "Cloud Solutions",
    desc: "Scalable cloud services for flexibility, performance, and cost-efficiency.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-blue-500" />,
    title: "Consulting",
    desc: "Expert consulting to align technology with your business strategy effectively.",
  },
];

/* ---------------------- Team Data ---------------------- */
const team = [
  {
    name: "Prem Kumar Yadav",
    role: "Founder & CEO",
    bio: "Leads ijekerTech with a vision for innovative AI and IT solutions.",
    image: "/man.png",
  },
  {
    name: "Nitesh Gupta",
    role: "CTO",
    bio: "Oversees technology strategy and drives product development.",
    image: "/man.png",
  },
  {
    name: "Priya Singh",
    role: "Lead Designer",
    bio: "Creates beautiful and functional user experiences.",
    image: "/woman.png",
  },
  {
    name: "Dhananjay Kushwaha",
    role: "HR Manager",
    bio: "Builds intelligent systems and machine learning models.",
    image: "/man.png",
  },
];

/* ---------------------- Main Component ---------------------- */
const Home = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => navigate("itSolutions/ServiceDetails");

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      8000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ---------------------- Hero Section ---------------------- */}
      <div className="relative w-full h-[75vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 z-0"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -40 }}
            variants={fadeInUp}
            className="absolute z-20 w-full h-full flex items-center px-6 md:px-24"
          >
            <div className="max-w-2xl text-white">
              <p className="text-blue-400 uppercase tracking-widest border-b-2 border-blue-400 inline-block font-medium">
                Best IT Solution Provider and Consultancy
                
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                {slides[current].description}
              </p>
              <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
                {slides[current].buttonText}
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === current
                ? "bg-white scale-125"
                : "bg-gray-400 hover:bg-white"
                }`}
            />
          ))}
        </div>
      </div>

      {/* ---------------------- About Section ---------------------- */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-blue-600 uppercase tracking-widest border-b-2 border-blue-600 inline-block font-semibold">
              About Company
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-snug">
              We Promise High Quality IT Solutions
            </h2>
            <p className="text-gray-500 text-xl mt-4">
              Over <span className="text-blue-600 font-semibold">2,500+</span>{" "}
              Customers
            </p>
            <div className="w-20 h-[2px] bg-blue-600 mt-4"></div>
            <p className="text-gray-600 mt-6 leading-relaxed">
              We deliver innovative IT solutions with over 5+ years of industry
              experience. From startups to enterprises, our focus remains on
              performance, reliability, and customer success.
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-xl overflow-hidden shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}

          >
            <img src="/img3.jpg" alt="Team" className="w-full h-full object-cover" />
            <motion.div
              className="absolute bottom-6 left-6 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center"
              animate={{
                y: [0, -10, 0, 10, 0], // up & down
                x: [0, 5, 0, -5, 0],   // left & right
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-4xl font-bold mr-4">5+</span>
              <div className="border-l border-white pl-4 uppercase text-sm tracking-wide">
                Year’s Experience in IT
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ---------------------- Services Section ---------------------- */}
      <section className="bg-blue-50 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-center justify-between mb-16"
          >
            <div>
              <p className="text-blue-600 uppercase font-semibold border-b-2 border-blue-600 inline-block tracking-wider">
                Our Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Wide Range of IT Services for Your Business
              </h2>
            </div>
            <button
              onClick={handleClick}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              View All Services <ArrowUpRight />
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 text-center border border-gray-200"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------------- Services Tabs ---------------------- */}
      <ServicesTabs />

      {/* ---------------------- Team Section ---------------------- */}
      <section className="bg-blue-50 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600">{member.role}</p>
                <p className="mt-3 text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- Contact Section ---------------------- */}
      <section className="bg-blue-600 py-20 px-6 md:px-16 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Get in Touch
          </motion.h2>
          <p className="text-lg mb-8 opacity-90">
            Have questions or want to work with us? Contact our team today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              <Users className="w-5 h-5" /> Contact Sales
            </button>
            <button className="flex items-center gap-2 bg-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition">
              <Phone className="w-5 h-5" /> Call Us Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
