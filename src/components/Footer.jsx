import React from "react";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="w-10/12 m-auto bg-white text-black  py-16">
      {/* Top CTA section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light leading-snug">
            Kick-start your dream <br /> home with us
          </h2>
          <p className="text-xl italic mt-6 text-orange-600 hover:underline cursor-pointer">
            Send us a hi
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-4 text-sm md:text-base text-right md:text-left">
          <p className="font-semibold">Yavatmal | Amravati | Nagpur</p>

          <p>CREATE | UPDATE | RENOVATE</p>

          <p className="font-semibold">Architect: @ajmirevicky</p>
          <p>Architecture | Interior</p>

          <p className="font-semibold">Email us at</p>
          <p className="text-orange-600 font-medium hover:underline cursor-pointer">
            ajmirevicky@gmail.com
          </p>

          <p className="font-semibold">Quick Call</p>
          <p className="text-orange-600 font-semibold text-lg hover:underline cursor-pointer">
            +91 9860508101
          </p>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Bottom bar */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        {/* Left text */}
        <div className="text-sm text-gray-500 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
          <p>© 2025 Ajmire Architects.</p>
        </div>

        {/* Center spacing (optional empty column for balance) */}
        <p className=" justify-center flex items-center gap-2">
          Made with ❤️ by{" "}
          <span
            className="font-[var(--font-orbitron)] text-xl font-bold 
                   bg-gradient-to-r from-black via-gray-400 to-[#FFD700] 
                   bg-clip-text text-transparent 
                   drop-shadow-[0_4px_24px_rgba(255,215,0,0.5)] 
                   tracking-widest"
          >
            SNC
          </span>
        </p>

        {/* Right social icons */}
        <div className="flex items-center justify-center md:justify-end gap-6">
          <span className="uppercase text-xs tracking-widest text-gray-500">
            Connect
          </span>
          <Instagram className="w-5 h-5 hover:text-orange-600 cursor-pointer" />
          <Facebook className="w-5 h-5 hover:text-orange-600 cursor-pointer" />
          <Youtube className="w-5 h-5 hover:text-orange-600 cursor-pointer" />
          <Twitter className="w-5 h-5 hover:text-orange-600 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
