import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


const NoPage = () => {
  // Floating stars animation variants
  const starVariants = {
    animate: {
      y: [0, -10, 0],
      x: [0, 10, 0],
      rotate: [0, 360],
      transition: { duration: 6, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-700 to-indigo-500 text-white">
        {/* Floating Stars */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            variants={starVariants}
            animate="animate"
          />
        ))}

        {/* Floating Planets */}
        <motion.img
          src="/logopng.png"
          alt="Planet"
          className="absolute w-32 top-20 left-10 opacity-80"
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src="/logopng.png"
          alt="Planet"
          className="absolute w-24 bottom-32 right-16 opacity-70"
          animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Astronaut */}
        <motion.div
          className="absolute -top-16 right-0 w-64 md:w-96"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/logopng.png" alt="Floating Astronaut" className="w-full" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="min-h-screen flex flex-col items-center justify-center text-center z-10 px-4 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-7xl font-bold text-yellow-400 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-2">Oops! Page Not Found</h2>
          <p className="text-gray-200 mb-6 max-w-md">
            The page you are looking for doesn’t exist or has been moved. You can return to the homepage or explore other sections of our site.
          </p>
          <Link
            to="/"
            className="px-8 py-3 bg-yellow-400 text-indigo-900 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Go back Home
          </Link>
        </motion.div>
      </div>

    
    </>
  );
};

export default NoPage;
