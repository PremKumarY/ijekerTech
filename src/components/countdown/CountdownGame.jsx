import React from "react";

function ComingSoonTech() {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center bg-gray-900 text-white p-6 relative overflow-hidden rounded-xl shadow-lg">
      
      {/* Company Logo */}
      <img
        src="./logopng.png"
        alt="ijekerTech Logo"
        className="w-32 h-32 mb-6 animate-bounce"
      />

      {/* Decorative tech-themed elements */}
      <div className="absolute top-5 left-5 text-2xl animate-spin text-blue-400">💻</div>
      <div className="absolute top-10 right-5 text-2xl animate-pulse text-green-400">⚡</div>
      <div className="absolute bottom-5 left-10 text-2xl animate-bounce text-purple-400">🖥️</div>
      <div className="absolute bottom-10 right-5 text-2xl animate-spin text-yellow-400">📡</div>

      {/* Main content */}
      <h1 className="text-4xl font-bold mb-3 text-center animate-pulse">
        🚀 ijekerTech is Launching Very Soon! 🚀
      </h1>
      <p className="text-xl mb-4 text-center">
        Your hub for innovation, technology & solutions.
      </p>
      <p className="text-lg text-center">
        Stay tuned to explore our cutting-edge products and services.
      </p>

      {/* Bottom tech icons */}
      <div className="w-full flex justify-center mt-6 text-2xl animate-pulse">
        💻⚡🖥️📡💡
      </div>
    </div>
  );
}

export default ComingSoonTech;
