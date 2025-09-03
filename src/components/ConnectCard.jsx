import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
  FaGlobe,
  FaGoogle,
} from "react-icons/fa6";

export default function ConnectCard() {
  const [alert, setAlert] = useState({ message: "", visible: false, timer: 3, icon: null, color: "" });

  const buttons = [
    { href: "https://www.ijekertech.com/", icon: <FaGlobe />, label: "Visit Website", color: "from-blue-500 to-indigo-600" },
    { href: "https://www.youtube.com/@ijekerTech", icon: <FaYoutube />, label: "Subscribe YouTube", color: "bg-red-600" },
    { href: "https://www.facebook.com/profile.php?id=61579048111215", icon: <FaFacebook />, label: "Like Facebook", color: "bg-blue-600" },
    { href: "https://www.instagram.com/ijekertech/", icon: <FaInstagram />, label: "Follow Instagram", color: "from-pink-500 to-yellow-500" },
    { href: "https://x.com/ijekertech", icon: <FaXTwitter />, label: "Follow on X", color: "bg-black" },
    { href: "https://www.linkedin.com/company/ijekertech/", icon: <FaLinkedin />, label: "Connect LinkedIn", color: "bg-blue-700" },
    { href: "https://g.page/r/Cf5bQgNqE39_EBM/review", icon: <FaGoogle />, label: "Leave Google Review", color: "bg-green-600" },
  ];

  const handleClick = (btn) => {
    setAlert({ message: `Thanks for following us on ${btn.label}!`, visible: true, timer: 3, icon: btn.icon, color: btn.color });
    window.open(btn.href, "_blank");
  };

  useEffect(() => {
    if (!alert.visible) return;
    if (alert.timer <= 0) {
      setAlert({ ...alert, visible: false });
      return;
    }
    const interval = setInterval(() => {
      setAlert(prev => ({ ...prev, timer: prev.timer - 0.05 }));
    }, 50);
    return () => clearInterval(interval);
  }, [alert]);

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 overflow-hidden">

      {/* Background floating circles */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-bounce-slow"
            style={{
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative w-full max-w-md z-10">
        {/* Small alert inside card */}
        {alert.visible && (
          <div className={`mb-4 bg-gradient-to-r ${alert.color} rounded-lg p-2 text-white text-sm flex items-center justify-center gap-2 shadow-md animate-fadeInOut`}>
            <span className="text-lg">{alert.icon}</span>
            <span>{alert.message}</span>
          </div>
        )}

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 text-center border border-white/20 transform hover:scale-105 transition duration-500">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-red-500 mb-2 animate-text">
            ijekerTech
          </h1>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Follow us & stay connected</p>

          <div className="flex flex-col gap-3 sm:gap-4">
            {buttons.map((btn, idx) => (
              <button
                key={idx}
                onClick={() => handleClick(btn)}
                className={`flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 ${
                  btn.color.includes("bg") ? btn.color : `bg-gradient-to-r ${btn.color}`
                } text-white text-sm sm:text-base`}
              >
                <span className="text-lg sm:text-xl">{btn.icon}</span> {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Optional footer text */}
        <p className="text-gray-400 text-xs text-center mt-4">© 2025 ijekerTech. All rights reserved.</p>
      </div>

      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        .animate-fadeInOut {
          animation: fadeInOut 3s ease forwards;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
