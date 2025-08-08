"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Hamburger icons

const navItems = {
  about: "About",
  services: "Services",
  work: "Our Work",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-darkGray shadow-md px-6 py-4">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleScroll("hero")}
          className=" cursor-pointer text-white text-xl font-bold tracking-wide hover:opacity-90 transition"
        >
          AJMIRE <span className="text-gray-400">ARCHITECTS</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
          {Object.entries(navItems).map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleScroll(key)}
              className=" cursor-pointer text-white relative group transition duration-300"
            >
              <span className="group-hover:text-gray-300">{label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-white focus:outline-none z-[60]"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {Object.entries(navItems).map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleScroll(key)}
              className="text-base font-medium hover:text-gray-300 transition"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
