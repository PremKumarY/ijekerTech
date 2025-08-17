import React, { useState } from "react";
import {
  FaUserCog,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaGraduationCap,
  FaClock,
  FaCalendarAlt,
  FaCertificate,
} from "react-icons/fa";

function Profile() {
  const [activePage, setActivePage] = useState("dashboard");

  const userDetails = {
    fullName: "Sudent",
    email: "sudent@example.com",
    phone: "+91 XXXXXXXX47",
    location: "India",
  };

  // New Training Details and Certificates data
  const trainingDetails = {
    course: "Full Stack Web Development",
    duration: "3 Months",
    startDate: "15th August 2025",
    status: "Ongoing",
  };

  const certificates = [
    { name: "Web Development Certificate", link: "#" },
    { name: "AI & Machine Learning Workshop", link: "#" },
  ];

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <>
            <header className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
              <h2
                className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600
                           bg-clip-text text-transparent select-none tracking-wide"
              >
                Welcome Back, {userDetails.fullName}!
              </h2>
            </header>

            <p className="text-gray-700 mb-12 max-w-xl text-lg leading-relaxed tracking-wide">
              Manage your profile information and preferences from here.
            </p>

            {/* User Details List */}
            <section className="max-w-md w-full space-y-8 mb-16">
              {[ 
                { icon: <FaUser size={22} className="text-indigo-600" />, label: "Full Name", value: userDetails.fullName },
                { icon: <FaEnvelope size={22} className="text-indigo-600" />, label: "Email", value: userDetails.email },
                { icon: <FaPhone size={22} className="text-indigo-600" />, label: "Phone", value: userDetails.phone },
                { icon: <FaMapMarkerAlt size={22} className="text-indigo-600" />, label: "Location", value: userDetails.location },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-5 rounded-lg p-4 hover:bg-indigo-50 transition cursor-default"
                  aria-label={`${label}: ${value}`}
                >
                  {icon}
                  <div>
                    <p className="text-gray-600 text-xs uppercase tracking-widest font-semibold">
                      {label}
                    </p>
                    <p className="text-gray-900 text-xl font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Training Details Section */}
            <section className="max-w-3xl w-full mb-16 bg-white rounded-xl shadow-md p-8 space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3 text-gray-900">
                <FaGraduationCap className="text-blue-600" /> Training Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 text-gray-700">
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Course</p>
                    <p className="font-semibold text-gray-900">{trainingDetails.course}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaClock className="text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold text-gray-900">{trainingDetails.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Start Date</p>
                    <p className="font-semibold text-gray-900">{trainingDetails.startDate}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaCertificate className="text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <span className="inline-block bg-green-200 text-green-800 text-xs px-3 py-1 rounded-md font-semibold select-none">
                      {trainingDetails.status}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Certificates Section */}
            <section className="max-w-3xl w-full bg-white rounded-xl shadow-md p-6 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-3 text-gray-900">
                <FaCertificate className="text-yellow-500" /> Certificates
              </h3>

              {certificates.map(({ name, link }, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border border-gray-200 rounded-md px-6 py-3 hover:shadow-md transition"
                >
                  <p className="text-gray-900 font-medium">{name}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition"
                  >
                    Download
                  </a>
                </div>
              ))}
            </section>

            {/* Settings Shortcut Button */}
            <button
              onClick={() => setActivePage("settings")}
              className="mt-14 px-10 py-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800
                         text-white rounded-xl text-lg font-semibold shadow-lg transition
                         focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
            >
              Go to Profile Settings
            </button>
          </>
        );

      case "settings":
        return (
          <>
            <button
              onClick={() => setActivePage("dashboard")}
              className="mb-10 text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-2 text-lg"
            >
              ← Back to Dashboard
            </button>

            <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-wide">
              Profile Settings
            </h2>

            <form className="max-w-xl w-full bg-white p-10 rounded-2xl shadow-xl space-y-10">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-semibold mb-3 text-lg"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue={userDetails.fullName}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-6 py-4 text-gray-900 placeholder-gray-400
                    focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-transparent text-lg transition"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold mb-3 text-lg"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue={userDetails.email}
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300 rounded-lg px-6 py-4 text-gray-900 placeholder-gray-400
                    focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-transparent text-lg transition"
                />
              </div>

              {/* Current Password */}
              <div>
                <label
                  htmlFor="currentPassword"
                  className="block text-gray-800 font-semibold mb-3 text-lg"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  placeholder="Enter current password"
                  className="w-full border border-gray-300 rounded-lg px-6 py-4 text-gray-900 placeholder-gray-400
                    focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-transparent text-lg transition"
                />
              </div>

              {/* New Password */}
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-gray-800 font-semibold mb-3 text-lg"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  placeholder="Enter new password"
                  className="w-full border border-gray-300 rounded-lg px-6 py-4 text-gray-900 placeholder-gray-400
                    focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-transparent text-lg transition"
                />
              </div>

              {/* Confirm New Password */}
              <div>
                <label
                  htmlFor="confirmNewPassword"
                  className="block text-gray-800 font-semibold mb-3 text-lg"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmNewPassword"
                  placeholder="Confirm new password"
                  className="w-full border border-gray-300 rounded-lg px-6 py-4 text-gray-900 placeholder-gray-400
                    focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-transparent text-lg transition"
                />
              </div>

              {/* Save Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800
                  text-white font-bold py-4 rounded-xl shadow-lg text-xl transition transform hover:-translate-y-1
                  focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
              >
                Save Settings
              </button>
            </form>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 md:p-20 flex flex-col items-center">
      {renderContent()}
    </div>
  );
}

export default Profile;
