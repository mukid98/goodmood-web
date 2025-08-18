import React, { useState } from "react";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import logo from "../images/logo-1.png";

const categories = [
  "Large Format",
  "Digital & Offset",
  "Display Promotion",
  "Merchandise",
  "Stationary",
  "Packaging",
  "Clothing & Textile",
  "Photo & Home Decor",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Large Format");

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-sm"
      role="navigation"
    >
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 sm:h-12 md:h-14 object-contain"
          />
        </div>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden md:flex flex-grow mx-6 max-w-3xl">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-2xl text-gray-700">
          <FiUser className="cursor-pointer hover:text-blue-600 transition-colors" />
          <FiShoppingBag className="cursor-pointer hover:text-blue-600 transition-colors" />

          {/* Hamburger (only mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="md:hidden text-3xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Bottom Navbar (Category Links) - Desktop */}
      <div className="hidden md:flex items-center justify-center flex-wrap gap-8 px-4 py-3 bg-white text-sm font-medium text-gray-800">
        {categories.map((cat) => (
          <span
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer transition-colors ${
              activeCategory === cat
                ? "text-red-600 border-b-2 border-red-600"
                : "hover:text-blue-600"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-3 px-6 py-4 bg-white text-sm font-medium text-gray-800">
          {categories.map((cat) => (
            <span
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setIsOpen(false); // auto close setelah klik
              }}
              className={`cursor-pointer transition-colors ${
                activeCategory === cat
                  ? "text-red-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
            >
              {cat}
            </span>
          ))}

          {/* Search bar muncul juga di mobile menu */}
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
