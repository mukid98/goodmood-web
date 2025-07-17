import React from "react";
import {
  FiSearch,
  FiUser,
  FiShoppingBag,
} from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import logo from "../images/logo-1.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-25 py-5 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-auto h-18 object-contain" />
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-6 max-w-3xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-3 focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex justify-center space-x-8 text-2xl text-gray-700">
          <FiUser className="cursor-pointer" />
          <FiShoppingBag className="cursor-pointer" />
        </div>
      </div>

      {/* Bottom Navbar (Category Links) */}
<div className="flex items-center justify-center flex-wrap gap-10 px-4 py-3 bg-white text-sm font-medium text-gray-800">
  <span className="text-red-600 cursor-pointer">Large Format</span>
  <span className="cursor-pointer">Digital & Offset</span>
  <span className="cursor-pointer">Display Promotion</span>
  <span className="cursor-pointer">Merchandise</span>
  <span className="cursor-pointer">Stationary</span>
  <span className="cursor-pointer">Packaging</span>
  <span className="cursor-pointer">Clothing & Textile</span>
  <span className="cursor-pointer">Photo & Home Decor</span>
</div>

    </div>
  );
};

export default Navbar;
