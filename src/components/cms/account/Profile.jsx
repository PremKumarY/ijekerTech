import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaGraduationCap,
  FaClock,
  FaCalendarAlt,
  FaCertificate,
  FaCamera,
} from "react-icons/fa";


// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// ============================
// Dashboard Section
// ============================
function Dashboard({ userDetails, trainingDetails, certificates, setActivePage }) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Welcome */}
      <header className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={userDetails.avatar}
            alt="profile"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-indigo-600"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide">
              Welcome Back, {userDetails.fullName} 👋
            </h2>
            <p className="text-gray-600 mt-1 text-sm md:text-base">
              Manage your profile, training progress & certificates here.
            </p>
          </div>
        </div>

        {/* ✅ Update Profile Button */}
        <button
          onClick={() => setActivePage("settings")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold text-sm md:text-base shadow transition"
        >
          Update Profile
        </button>
      </header>


      {/* User Details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {[
          { icon: <FaUser />, label: "Full Name", value: userDetails.fullName },
          { icon: <FaEnvelope />, label: "Email", value: userDetails.email },
          { icon: <FaPhone />, label: "Phone", value: userDetails.phone },
          { icon: <FaMapMarkerAlt />, label: "Location", value: userDetails.location },
        ].map(({ icon, label, value }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-lg p-4 bg-white shadow hover:shadow-md transition"
          >
            <span className="text-indigo-600">{icon}</span>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wide font-medium">{label}</p>
              <p className="text-gray-900 font-semibold text-sm">{value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Training Details */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
        <h3 className="text-lg font-bold flex items-center gap-3 mb-4">
          <FaGraduationCap className="text-blue-600" /> Training Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DetailItem icon={<FaGraduationCap />} label="Course" value={trainingDetails.course} />
          <DetailItem icon={<FaClock />} label="Duration" value={trainingDetails.duration} />
          <DetailItem icon={<FaCalendarAlt />} label="Start Date" value={trainingDetails.startDate} />
          <DetailItem
            icon={<FaCertificate />}
            label="Status"
            value={
              <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-md font-semibold">
                {trainingDetails.status}
              </span>
            }
          />
        </div>
      </section>

      {/* Certificates */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h3 className="text-lg font-bold flex items-center gap-3 mb-4">
          <FaCertificate className="text-yellow-500" /> Certificates
        </h3>
        <div className="space-y-3">
          {certificates.map(({ name, link }, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center border border-gray-200 rounded-lg px-4 py-3 hover:shadow transition"
            >
              <p className="text-gray-900 font-medium mb-2 sm:mb-0">{name}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm font-semibold px-3 py-2 rounded transition text-center"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

// Small reusable item
const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 text-gray-700">
    <div className="text-blue-600">{icon}</div>
    <div>
      <p className="text-xs md:text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-gray-900 text-sm md:text-base">{value}</p>
    </div>
  </div>
);

// ============================
// Settings Form
// ============================
function Settings({ userDetails, setUserDetails, setActivePage }) {
  const [formData, setFormData] = useState(userDetails);
  const [preview, setPreview] = useState(userDetails.avatar);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // ✅ handle profile image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails(formData); // ✅ update parent state
    alert("Profile Updated Successfully ✅");
    setActivePage("dashboard");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <button
        onClick={() => setActivePage("dashboard")}
        className="mb-4 text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-2 text-sm"
      >
        ← Back to Dashboard
      </button>

      <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6 tracking-wide">
        Profile Settings
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 rounded-lg shadow space-y-5"
      >
        {/* Profile Picture Upload */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={preview}
              alt="preview"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-indigo-500"
            />
            <label
              htmlFor="avatarUpload"
              className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full cursor-pointer shadow"
            >
              <FaCamera size={14} />
            </label>
            <input
              id="avatarUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">Upload new profile picture</p>
        </div>

        {/* Text Fields */}
        {[
          { id: "fullName", label: "Full Name", type: "text" },
          { id: "email", label: "Email Address", type: "email" },
          { id: "phone", label: "Phone", type: "text" },
          { id: "location", label: "Location", type: "text" },
        ].map(({ id, label, type }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-gray-700 font-medium mb-2 text-sm">
              {label}
            </label>
            <input
              id={id}
              type={type}
              value={formData[id]}
              onChange={handleChange}
              placeholder={`Enter ${label.toLowerCase()}`}
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 md:py-3 rounded-lg text-sm md:text-base transition"
        >
          Save Settings
        </button>
      </form>
    </motion.div>
  );
}

// ============================
// Main Dashboard Layout
// ============================
export default function ProfileDashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  // ✅ User details as state (with avatar now)
  const [userDetails, setUserDetails] = useState({
    fullName: "Student",
    email: "student@example.com",
    phone: "+91 XXXXXXXX47",
    location: "India",
    avatar: "https://i.pravatar.cc/150?img=5", // default image
  });

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

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow px-4 md:px-6 py-3 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold capitalize">{activePage}</h1>
        <div className="flex items-center gap-2 md:gap-3">
          <span className="hidden sm:block text-sm md:text-base">{userDetails.fullName}</span>
          <img
            src={userDetails.avatar}
            alt="avatar"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
        </div>
      </header>

      {/* Page Content */}
      <main className="p-4 md:p-6">
        {activePage === "dashboard" ? (
          <Dashboard
            userDetails={userDetails}
            trainingDetails={trainingDetails}
            certificates={certificates}
            setActivePage={setActivePage}
          />
        ) : (
          <Settings
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            setActivePage={setActivePage}
          />
        )}
      </main>
    </div>
  );
}
