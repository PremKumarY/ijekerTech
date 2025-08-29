import React, { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 animate-gradient-x">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto py-12 px-6">
          {/* Company Info */}
          <div data-aos="fade-up">
            <h1 className="font-extrabold text-3xl text-center md:text-left text-gray-900">
              ijekerTech
            </h1>
            <p className="text-gray-600 mt-3 text-center md:text-left leading-relaxed">
              At ijekerTech, we deliver cutting-edge digital solutions that
              empower businesses, enhance user experience, and drive innovation
              globally.
            </p>
            <div className="flex justify-center md:justify-start gap-5 text-2xl mt-5">
              {[{
                href: "https://www.youtube.com/@ijekerTech",
                icon: <FaYoutube/>,
                hover: "hover:text-red-500"
              }, {
                href: "https://facebook.com/profile.php?id=61579048111215",
                icon: <FaFacebook />,
                hover: "hover:text-blue-600"
              }, {
                href: "https://www.linkedin.com/company/ijekertech",
                icon: <FaLinkedinIn />,
                hover: "hover:text-blue-800"
              }, {
                href: "https://instagram.com/ijekertech",
                icon: <FaInstagram />,
                hover: "hover:text-pink-500"
              }, {
                href: "https://twitter.com/ijekertech",
                icon: <FaXTwitter />,
                hover: "hover:text-black"
              }].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transform transition duration-300 hover:scale-110 ${social.hover}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="font-semibold text-lg mb-4 text-gray-900">Quick Links</h2>
            <div className="flex flex-col gap-2">
              {["Home", "About Us", "Blog", "Portfolio", "Contact"].map((text, index) => (
                <Link
                  key={index}
                  to={
                    text === "Home"
                      ? "/"
                      : text === "About Us"
                        ? "company/about"
                        : text === "Blog"
                          ? "blog/BlogPage"
                          : text === "Portfolio"
                            ? "portfolio"
                            : "/contact"
                  }
                  className="text-gray-600 relative hover:text-gray-900 hover:font-semibold transition-all duration-300 before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 hover:before:w-full"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="font-semibold text-lg mb-4 text-gray-900">Our Services</h2>
            <div className="flex flex-col gap-2">
              {[
                { name: "Web Development", link: "itsolutions/webDevelopment" },
                { name: "Mobile App Development", link: "itsolutions/AppDevelopment" },
                { name: "AI Solutions", link: "itsolutions/AISolutions" },
                { name: "No-Code Development", link: "itsolutions/AllServices" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="text-gray-600 relative hover:text-gray-900 hover:font-semibold transition-all duration-300 before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-green-500 hover:before:w-full"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h2 className="font-semibold text-lg mb-4 text-gray-900">Contact Us</h2>
            <p className="text-gray-600 mb-2 hover:text-gray-900 hover:font-medium transition duration-300">
              Padrauna, Kushinagar, Uttar Pradesh, India
            </p>
            <p className="text-gray-600 mb-2 hover:text-gray-900 hover:font-medium transition duration-300">
              Email: <a href="mailto:info@ijekertech.com" className="hover:underline">info@ijekertech.com</a>
            </p>
            <p className="text-gray-600 hover:text-gray-900 hover:font-medium transition duration-300">
              Phone: <a href="tel:+916392554947" className="hover:underline">+91 63925 54947</a>
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-5 text-sm animate-fadeIn">
        © {new Date().getFullYear()} ijekerTech Pvt. Ltd. All rights reserved.
      </footer>

      {/* Tailwind Gradient Animation */}
      <style>
        {`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 15s ease infinite;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
        `}
      </style>
    </>
  );
}
