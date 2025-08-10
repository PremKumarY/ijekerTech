import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const NoPage = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-7xl font-bold text-indigo-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300"
      >
        Go back to Home
      </Link>
    </motion.div>
  );
};

export default NoPage;
