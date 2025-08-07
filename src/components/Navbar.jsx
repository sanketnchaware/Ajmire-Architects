import Link from "next/link";
import React from "react";

const navItems = {
  about: "About",
  services: "Services",
  "our-work": "Our Work",
};

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/70 backdrop-blur-md shadow-md px-6 py-4">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-xl font-bold tracking-wide hover:opacity-90 transition"
        >
          AJMIRE <span className="text-gray-400">ARCHITECTS</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
          {React.Children.toArray(
            Object.entries(navItems).map(([key, label]) => (
              <Link
                key={key}
                href={`/${key}`}
                className="text-white relative group transition duration-300"
              >
                <span className="group-hover:text-gray-300">{label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
