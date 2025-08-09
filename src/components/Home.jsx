import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {  ArrowUpRight, Pencil, Settings, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

// service data
const services = [
  {
    icon: <Pencil className="w-10 h-10 text-blue-500" />,
    title: "IT Design",
    desc: "Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit."
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-500" />,
    title: "IT Management",
    desc: "Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit."
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-500" />,
    title: "IT Management",
    desc: "Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit."
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-500" />,
    title: "IT Management",
    desc: "Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit."
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-500" />,
    title: "IT Management",
    desc: "Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    title: "Data Security",
    desc: "Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit."
  }
];



const Home = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  // Function to handle click on "View All Services" button
  const handleClick = () => {
    navigate("/services");
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative w-full h-[70vh] overflow-hidden">
        {/* Static background image to avoid white flash */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000 z-0"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

        {/* Animated Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="absolute z-20 w-full h-full flex items-center px-10 md:px-24"
          >
            <div className="max-w-2xl text-white">
              <p className="text-blue-400 uppercase tracking-widest border-b-2 border-blue-400 inline-block font-medium">
                Best IT Solution Provider
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight border-b-4 pb-2 inline-block">
                {slides[current].title}
              </h1>
              <p className="text-lg mb-6">{slides[current].description}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-semibold">
                {slides[current].buttonText} →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? "bg-white" : "bg-gray-400 hover:bg-white"
                }`}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-600 uppercase tracking-widest border-b-2 border-blue-600 inline-block font-semibold">
              About Company
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-snug">
              What We Promise High Quality IT Solutions
            </h2>
            <p className="text-gray-500 text-xl mt-4">
              Over <span className="text-blue-600 font-semibold">2,500+</span> Customers
            </p>
            <div className="w-20 h-[2px] bg-blue-600 mt-4"></div>
            <p className="text-gray-500 mt-6 leading-relaxed">
              Grursus mal suada faci lisis Lorem ipsum dolaro rit more is ame tion
              the a consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm
              ipsum that dolocons rsus mal suada as and fadolorit to the consectetur
              elit. All a the Lorem Ipsum generators on the Internet tend.
            </p>
          </motion.div>

          {/* Right Image with Overlay */}
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/img3.jpg"
              alt="Team"
              className="w-full h-full object-cover"
            />
            {/* Blue Overlay Card */}
            <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center">
              <span className="text-4xl font-bold mr-4">27</span>
              <div className="border-l border-white pl-4 uppercase text-sm tracking-wide">
                Year’s Experience in IT
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-blue-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }} className="flex flex-col  md:flex-row md:items-center justify-between mb-12">
            <div>
              <p className="text-blue-600 uppercase font-semibold border-b-2 border-blue-600 inline-block tracking-wider">
                Our Service
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                We Offer a Wide <br /> Variety of IT Services
              </h2>
            </div>
            <button onClick={handleClick} className="mt-6 md:mt-0 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
              View All Services <ArrowUpRight />
            </button>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 ">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-blue-50 border-l-4 border-gray-200 hover:shadow-lg transition  p-6 text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Home;
