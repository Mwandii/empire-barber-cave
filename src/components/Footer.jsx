import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10 font-raleway relative overflow-hidden">
      {/* Gold Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-500"></div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-evenly max-w-6xl mx-auto space-y-5 md:space-y-0 text-sm relative z-10">
        {/* Location */}
        <div className="flex items-center space-x-2 hover:text-yellow-500 transition-all duration-300">
          <MdLocationOn className="text-lg text-yellow-600" />
          <p>Machakos</p>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-2 hover:text-yellow-500 transition-all duration-300">
          <FaPhone className="text-lg text-yellow-600" />
          <p>+254 712 345 678</p>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2 hover:text-yellow-500 transition-all duration-300">
          <SiGmail className="text-lg text-yellow-600" />
          <p>johndoe@gmail.com</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 mb-3 opacity-40"></div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-600 font-semibold">Empire Barber Cave</span>.
        All rights reserved.
      </div>

      {/* Subtle gold blur glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60px] bg-linear-to-r from-yellow-500/10 via-yellow-600/10 to-yellow-500/10 blur-3xl pointer-events-none"></div>
    </footer>
  );
}

export default Footer;
