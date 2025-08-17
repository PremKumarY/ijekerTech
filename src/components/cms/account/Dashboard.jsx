// Dashboard.jsx
import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaChartLine, FaUser, FaCog } from "react-icons/fa";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "#" },
    { name: "Analytics", icon: <FaChartLine />, link: "#" },
    { name: "Profile", icon: <FaUser />, link: "#" },
    { name: "Settings", icon: <FaCog />, link: "#" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-800 text-white transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 z-50`}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900 md:hidden">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>
        <nav className="mt-5">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="flex items-center px-6 py-3 hover:bg-gray-700 transition"
            >
              <span className="mr-3">{item.icon}</span> {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4">
          <div className="flex items-center space-x-3">
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars size={20} />
            </button>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>

          <div className="relative">
            <button className="flex items-center space-x-2 focus:outline-none">
              <img
                src="https://via.placeholder.com/32"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block">Sudent</span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
            <p>Your dashboard overview will appear here.</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
