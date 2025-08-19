import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Currently Internship applications are not active!");
    console.log(formData);
    // Later integrate with backend API
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Internship Info */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 mb-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Internship Opportunities
        </h1>
        <p className="text-gray-700 mb-4">
          Join our internship program and gain hands-on experience in real-world
          projects. Work alongside experts and boost your career in technology.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Benefits:</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Real-world project experience</li>
          <li>Guidance from industry professionals</li>
          <li>Certificate of Completion</li>
          <li>Possibility of full-time job offer</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Eligibility:</h2>
        <p className="text-gray-700 mb-4">
          MCA, B.Tech, BCA, or related fields. Basic knowledge of web
          development, programming, or relevant skills preferred.
        </p>

        <h2 className="text-xl font-semibold mb-2">Duration:</h2>
        <p className="text-gray-700">2 to 3 months (Flexible schedule)</p>
      </div>

      {/* Apply Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Apply for Internship
        </h2>

        {/* Notice Banner */}
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mb-6 border border-yellow-300">
          ⚠️ Internship applications are currently <b>inactive</b>.  
          Please check back later.
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            disabled
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            disabled
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            disabled
          />
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            disabled
          />
          <textarea
            name="message"
            placeholder="Write a short message or cover letter..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            rows="4"
            disabled
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray-400 cursor-not-allowed text-white py-3 rounded-lg font-semibold transition"
            disabled
          >
            🚫 Applications Closed
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
