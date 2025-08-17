import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCogs, FaProjectDiagram, FaUsers, FaAward, 
  FaLaptopCode, FaDatabase, FaShieldAlt, FaChartLine 
} from "react-icons/fa";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("choose");

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 80 },
    }),
  };

  const renderContent = () => {
    switch (activeTab) {
      case "choose":
        return [
          { icon: <FaLaptopCode />, title: "Product Design", desc: "Creative, scalable product designs for your business." },
          { icon: <FaDatabase />, title: "Web Development", desc: "High-performance web applications and websites." },
          { icon: <FaChartLine />, title: "Data Analytics", desc: "Transforming raw data into meaningful insights." },
          { icon: <FaShieldAlt />, title: "Cyber Security", desc: "Advanced security for your digital assets." },
        ];
      case "tech":
        return [
          { icon: <FaLaptopCode />, title: "Frontend Tech", desc: "React, Vue, Angular – Modern UI frameworks." },
          { icon: <FaDatabase />, title: "Backend Tech", desc: "Node.js, Python, Django, Spring Boot." },
          { icon: <FaProjectDiagram />, title: "AI & ML", desc: "TensorFlow, PyTorch, NLP & Computer Vision." },
          { icon: <FaShieldAlt />, title: "Cloud & Security", desc: "AWS, Azure, GCP, Docker, Kubernetes." },
        ];
      case "partners":
        return [
          { icon: <FaUsers />, title: "Tech Giants", desc: "Collaborating with Microsoft, Google & AWS." },
          { icon: <FaUsers />, title: "Startups", desc: "Supporting 50+ growing startups worldwide." },
          { icon: <FaUsers />, title: "Enterprises", desc: "Trusted by global enterprises for IT solutions." },
        ];
      case "awards":
        return [
          { icon: <FaAward />, title: "Best IT Startup", desc: "Awarded Best IT Startup 2024 for innovation." },
          { icon: <FaAward />, title: "Cyber Security Leader", desc: "Recognized for excellence in security solutions." },
          { icon: <FaAward />, title: "AI Excellence", desc: "Winner of AI Excellence Award 2025." },
          { icon: <FaAward />, title: "Global Recognition", desc: "Featured in international tech conferences." },
        ];
      default:
        return [];
    }
  };

  const tabContent = renderContent();

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
        Easy Solutions for All Difficult IT Problems
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 border-b pb-3">
        <TabButton active={activeTab === "choose"} icon={<FaCogs />} label="Why Choose us" onClick={() => setActiveTab("choose")} />
        <TabButton active={activeTab === "tech"} icon={<FaProjectDiagram />} label="Technology Index" onClick={() => setActiveTab("tech")} />
        <TabButton active={activeTab === "partners"} icon={<FaUsers />} label="Our Partners" onClick={() => setActiveTab("partners")} />
        <TabButton active={activeTab === "awards"} icon={<FaAward />} label="Our Awards" onClick={() => setActiveTab("awards")} />
      </div>

      {/* Tab Content with Staggered Animations */}
      <div className="min-h-[250px] mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {tabContent.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={cardVariants}
              >
                <AnimatedCard icon={item.icon} title={item.title} desc={item.desc} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Tab Button Component
function TabButton({ active, icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-base md:text-lg font-medium pb-2 border-b-2 transition 
        ${active ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-300"}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

// Animated Card Component
function AnimatedCard({ icon, title, desc }) {
  return (
    <motion.div
      className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="text-3xl text-blue-600 mb-3"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        {icon}
      </motion.div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-700">{desc}</p>
      <a href="#" className="text-blue-600 font-medium mt-3 block hover:underline">
        Discover now →
      </a>
    </motion.div>
  );
}
