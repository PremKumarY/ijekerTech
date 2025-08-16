import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCogs, FaProjectDiagram, FaUsers, FaAward, 
  FaLaptopCode, FaDatabase, FaShieldAlt, FaChartLine 
} from "react-icons/fa";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("choose");

  const renderContent = () => {
    switch (activeTab) {
      case "choose":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <Card icon={<FaLaptopCode />} title="Product Design" desc="We design creative and scalable products for your business." />
            <Card icon={<FaDatabase />} title="Web Development" desc="We build high-performance web apps and websites." />
            <Card icon={<FaChartLine />} title="Data Analytics" desc="Turning raw data into meaningful insights." />
            <Card icon={<FaShieldAlt />} title="Cyber Security" desc="Protecting your business from digital threats." />
          </div>
        );
      case "tech":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <InfoCard icon={<FaLaptopCode />} title="Frontend Tech" desc="React, Vue, Angular for modern UI development." />
            <InfoCard icon={<FaDatabase />} title="Backend Tech" desc="Node.js, Python, Django, Spring Boot." />
            <InfoCard icon={<FaProjectDiagram />} title="AI & ML" desc="TensorFlow, PyTorch, NLP, and Computer Vision." />
            <InfoCard icon={<FaShieldAlt />} title="Cloud & Security" desc="AWS, Azure, GCP, Docker, Kubernetes." />
          </div>
        );
      case "partners":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            <InfoCard icon={<FaUsers />} title="Tech Giants" desc="We collaborate with Microsoft, Google, and AWS." />
            <InfoCard icon={<FaUsers />} title="Startups" desc="Supporting 50+ growing startups worldwide." />
            <InfoCard icon={<FaUsers />} title="Enterprises" desc="Trusted by global enterprises for IT solutions." />
          </div>
        );
      case "awards":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <InfoCard icon={<FaAward />} title="Best IT Startup" desc="Awarded Best IT Startup 2024 for innovation." />
            <InfoCard icon={<FaAward />} title="Cyber Security Leader" desc="Recognized for excellence in security solutions." />
            <InfoCard icon={<FaAward />} title="AI Excellence" desc="Winner of AI Excellence Award 2025." />
            <InfoCard icon={<FaAward />} title="Global Recognition" desc="Featured in global technology conferences." />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Easy Solutions for all Difficult IT Problems
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 border-b pb-3">
        <TabButton active={activeTab === "choose"} icon={<FaCogs />} label="Why Choose us" onClick={() => setActiveTab("choose")} />
        <TabButton active={activeTab === "tech"} icon={<FaProjectDiagram />} label="Technology Index" onClick={() => setActiveTab("tech")} />
        <TabButton active={activeTab === "partners"} icon={<FaUsers />} label="Our Partners" onClick={() => setActiveTab("partners")} />
        <TabButton active={activeTab === "awards"} icon={<FaAward />} label="Our Awards" onClick={() => setActiveTab("awards")} />
      </div>

      {/* Tab Content with Animation */}
      <div className="min-h-[250px] mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Tab Button
function TabButton({ active, icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-base md:text-lg font-medium pb-2 border-b-2 transition 
        ${active ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600 hover:text-blue-600"}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

// Card Component
function Card({ icon, title, desc }) {
  return (
    <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
      <div className="text-3xl text-blue-600 mb-3">{icon}</div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
      <a href="#" className="text-blue-600 font-medium mt-3 block">
        Discover now →
      </a>
    </div>
  );
}

// InfoCard Component
function InfoCard({ icon, title, desc }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
      <div className="text-3xl text-blue-600 mb-3">{icon}</div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
