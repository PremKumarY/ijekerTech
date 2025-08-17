import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi2";

import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);

  const menuItems = [
    { label: "Home", to: "/", dropdown: [] },
    {
      label: "Company",
      dropdown: [
        { label: "About Us", to: "/company/about" },
        { label: "Our Team", to: "/company/our-team" },
        { label: "Careers", to: "/company/careers" },
      ],
    },
    {
      label: "IT Solutions",
      dropdown: [
        { label: "Web Development", to: "/itsolutions/WebDevelopment" },
        { label: "App Development", to: "/itsolutions/AppDevelopment" },
        { label: "AI Solutions", to: "/itsolutions/AISolutions" },
      ],
    },
    {
      label: "Pages",
      dropdown: [
        { label: "FAQ", to: "/pages/faq" },
        { label: "Testimonials", to: "/pages/testimonials" },
      ],
    },
    {
      label: "Blogs",
      dropdown: [
        { label: "Blog List", to: "blog/BlogPage" },
        // { label: "Blog Details", to: "blog/BlogDetailsPage" },
      ],
    },

  ];

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const toggleDesktopDropdown = (label) => {
    setOpenDesktopDropdown(openDesktopDropdown === label ? null : label);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true); // yaha aap auth check karoge
  const [username] = useState("Prem Kumar"); // backend se aayega
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      {/* Alert Banner */}
      <div className="bg-yellow-500 text-black text-center py-2 text-sm font-semibold">
        🚧 This website is under process. Some features may not work yet.🚧

      </div>

      {/* end Navbar banner */}

      <div className="sticky top-0 z-50 shadow-md bg-white border-b">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logopng.png" alt="Logo" className="h-8 w-auto" />
            <span className="text-2xl font-bold text-[#0F0D3D]">ijekerTech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 text-[#0F0D3D] font-medium text-md">
            {menuItems.map(({ label, to, dropdown }) => (
              <div
                key={label}
                className="relative cursor-pointer"
                onMouseEnter={() => dropdown.length > 0 && setOpenDesktopDropdown(label)}
                onMouseLeave={() => dropdown.length > 0 && setOpenDesktopDropdown(null)}
              >
                {to ? (
                  <Link
                    to={to}
                    className="flex items-center gap-1 hover:text-blue-600 transition"
                  >
                    {label}
                    {dropdown.length > 0 && (
                      <span
                        className="ml-1 transform transition-transform duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDesktopDropdown(label);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <HiChevronDown
                          className={`${openDesktopDropdown === label ? "rotate-180" : ""}`}
                        />
                      </span>
                    )}
                  </Link>
                ) : (
                  <div
                    className="flex items-center gap-1"
                    onClick={() => toggleDesktopDropdown(label)}
                  >
                    {label}
                    {dropdown.length > 0 && (
                      <HiChevronDown
                        className={`ml-1 transform transition-transform duration-300 ${openDesktopDropdown === label ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </div>
                )}

                {/* Smooth Dropdown */}
                {dropdown.length > 0 && (
                  <ul
                    className={`absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-md min-w-[180px] overflow-hidden transition-all duration-300 ease-in-out ${openDesktopDropdown === label
                      ? "max-h-96 opacity-100 scale-100"
                      : "max-h-0 opacity-0 scale-95"
                      }`}
                  >
                    {dropdown.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.to}
                          className="block px-4 py-2 hover:bg-gray-100 transition"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Contact */}
            <div>
              <Link to="/contact" className="hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
            <div>
              <Link to="/cms/cms-page"  className="hover:text-blue-600 transition-colors ">
                CMS
              </Link>
            </div>
          </nav>

          {/* Account */}
          {/* Account */}
          <div className="relative hidden lg:flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)} // click for both desktop & mobile
                   className="flex items-center gap-2 border rounded-md px-4 py-2 bg-white hover:bg-gray-100 "


                >
                  <FaUser className="text-[#0F0D3D]" />
                  <span className="text-sm text-gray-700">{username}</span>
                  <HiChevronDown
                    className={`ml-1 transform transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                    <ul className="py-2 text-sm text-gray-700">
                      <Link
                        to="cms/account/profile"
                        className="block"
                        onClick={() => setDropdownOpen(false)} // close after selection
                      >
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Profile
                        </li>
                      </Link>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                        onClick={() => {
                          setIsLoggedIn(false);
                          setDropdownOpen(false); // close after logout
                        }}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-2">
                <button className="border rounded-md px-4 py-2 text-sm bg-white hover:bg-gray-100">
                  Login
                </button>
                <button className="border rounded-md px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700">
                  SignUp
                </button>
              </div>
            )}
          </div>


          {/* Account sec Close */}

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-2xl text-[#0F0D3D]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <ul className="flex flex-col">
              {menuItems.map(({ label, to, dropdown }) => (
                <li key={label} className="border-b">
                  {to ? (
                    <Link
                      to={to}
                      className="flex justify-between items-center px-6 py-3 hover:bg-gray-100"
                      onClick={() => setMobileMenuOpen(false)} // ✅ Close menu on click
                    >
                      {label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => toggleDropdown(label)}
                      className="flex justify-between items-center w-full px-6 py-3 hover:bg-gray-100"
                    >
                      {label}
                      {dropdown.length > 0 && (
                        <HiChevronDown
                          className={`transform transition-transform ${openDropdown === label ? "rotate-180" : ""
                            }`}
                        />
                      )}
                    </button>
                  )}

                  {/* Mobile Dropdown */}
                  {openDropdown === label && dropdown.length > 0 && (
                    <ul className="bg-gray-50">
                      {dropdown.map((item) => (
                        <li key={item.label} className="border-t">
                          <Link
                            to={item.to}
                            className="block px-8 py-2 hover:bg-gray-200"
                            onClick={() => setMobileMenuOpen(false)} // ✅ Close on dropdown link click
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {/* Contact */}
              <li>
                <Link
                  to="/contact"
                  className="block px-6 py-3 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)} // ✅ Close on contact click
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/cms/cms-page"
                  className="block px-6 py-3 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)} // ✅ Close on contact click
                >
                  CMS
                </Link>
              </li>
            </ul>
            {/* Account */}
            <div className="relative ">
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)} // click for both desktop & mobile
                     className="flex items-center gap-2 border rounded-md px-4 py-2 bg-white hover:bg-gray-100 "


                  >
                    <FaUser className="text-[#0F0D3D]" />
                    <span className="text-sm text-gray-700">{username}</span>
                    <HiChevronDown
                      className={`ml-1 transform transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                      <ul className="py-2 text-sm text-gray-700">
                        <Link
                          to="cms/account/profile"
                          className="block"
                          onClick={() => setDropdownOpen(false)} // close after selection
                        >
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Profile
                          </li>
                        </Link>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                          onClick={() => {
                            setIsLoggedIn(false);
                            setDropdownOpen(false); // close after logout
                          }}
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex gap-2">
                  <button className="border rounded-md px-4 py-2 text-sm bg-white hover:bg-gray-100">
                    Login
                  </button>
                  <button className="border rounded-md px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700">
                    SignUp
                  </button>
                </div>
              )}
            </div>
          </div>

        )}
      </div>
    </>
  );
};

export default Navbar;
