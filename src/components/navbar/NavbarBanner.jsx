import React from 'react'
import {
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

function NavbarBanner() {
  return (
    <>
      <div className="hidden md:flex flex-wrap justify-between items-center px-6 py-5 bg-white border-b border-gray-200 text-sm">
        {/* Left Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-800 left-2 border-black-200">
          <div className="flex items-center border-l-2 border-gray-400  gap-2">
            <FaClock className="text-blue-600 ml-2" />
            <div>
              <span className="text-gray-500 ">Sunday - Friday:</span>{" "}
              <span className="font-semibold">9am - 7pm</span>
            </div>
          </div>

          <div className="flex items-center gap-2 border-l-2 border-gray-400">
            <FaPhoneAlt className="text-blue-600 ml-2" />
            <div>
              <span className="text-gray-500">Call for help:</span>{" "}
              <span className="font-semibold">+91 6392554947</span>
            </div>
          </div>

          <div className="flex items-center gap-2 border-l-2 border-gray-400">
            <FaEnvelope className="text-blue-600 ml-2" />
            <div>
              <span className="text-gray-500">Mail to us:</span>{" "}
              <span className="font-semibold">ijekertech@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-2 border-l-2 border-gray-400">
            <FaMapMarkerAlt className="text-blue-600 ml-2" />
            <div>
              <span className="text-gray-500">Our Address:</span>{" "}
              <span className="font-semibold">Kushinagar, Uttar Pradesh</span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2 mt-2 lg:mt-0">
          <a href="#" className="p-2 rounded bg-blue-100 text-blue-800 hover:opacity-80"><FaFacebookF /></a>
          <a href="#" className="p-2 rounded bg-blue-200 text-blue-700 hover:opacity-80"><FaTwitter /></a>
          <a href="#" className="p-2 rounded bg-pink-100 text-pink-600 hover:opacity-80"><FaInstagram /></a>
          <a href="#" className="p-2 rounded bg-blue-100 text-blue-900 hover:opacity-80"><FaLinkedinIn /></a>
          <a href="#" className="p-2 rounded bg-red-100 text-red-600 hover:opacity-80"><FaPinterestP /></a>
        </div>
      </div>
    </>
  );
}

export default NavbarBanner;
