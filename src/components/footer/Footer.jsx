import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className="bg-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto py-12 px-6">
          {/* Company Info */}
          <div>
            <h1 className="font-bold text-3xl text-center md:text-left">
              ijekerTech
            </h1>
            <p className="text-gray-600 mt-2 text-center md:text-left">
              We craft high-performance digital experiences that drive real
              business results.
            </p>
            <div className="flex justify-center md:justify-start gap-6 text-2xl mt-4">
              <a
                href="https://github.com/ijekertech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-gray-700 hover:text-green-500 transition duration-300" />
              </a>
              <a
                href="https://facebook.com/profile.php?id=61579048111215"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-gray-700 hover:text-blue-600 transition duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/ijekertech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-gray-700 hover:text-blue-800 transition duration-300" />
              </a>
              <a
                href="https://instagram.com/ijekertech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-gray-700 hover:text-pink-500 transition duration-300" />
              </a>
              <a
                href="https://twitter.com/ijekertech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-gray-700 hover:text-black transition duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-bold mb-3">Quick Links</h2>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-600 hover:text-black">
                Home
              </Link>
              <Link to="company/about" className="text-gray-600 hover:text-black">
                About
              </Link>
              <Link to="blog/BlogPage" className="text-gray-600 hover:text-black">
                Blog
              </Link>
              <Link to="portfolio" className="text-gray-600 hover:text-black">
                Portfolio
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-black">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-bold mb-3">Services</h2>
            <div className="flex flex-col gap-2">
              <Link
                to="itsolutions/webDevelopment"
                className="text-gray-600 hover:text-black"
              >
                Web Development
              </Link>
              <Link
                to="itsolutions/AppDevelopment"
                className="text-gray-600 hover:text-black"
              >
                App Development
              </Link>
              <Link
                to="itsolutions/AISolutions"
                className="text-gray-600 hover:text-black"
              >
               Ai Development
              </Link>
              <Link
                to="itsolutions/AllServices"
                className="text-gray-600 hover:text-black"
              >
                No-Code Development
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-bold mb-3">Get the Latest Inspiration</h2>
            <input
              type="email"
              required
              placeholder="Enter your email *"
              className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="font-bold bg-black text-white p-2 w-full rounded mt-3 cursor-pointer hover:bg-gray-700 transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-4">
        © {new Date().getFullYear()} ijekerTech. All rights reserved.
      </footer>
    </>
  );
}
