import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { SiGmail } from "react-icons/si";

function Footer() {
    return (
  <footer className="bg-black text-gray-300 font-light px-6 py-12">
    <div className="flex flex-col md:flex-row items-center justify-evenly max-w-6xl mx-auto space-y-4 md:space-y-0 text-sm">
      <div className="flex items-center space-x-2 hover:text-white transition-colors">
        <MdLocationOn className="text-lg text-gray-400" />
        <p>Machakos</p>
      </div>
      <div className="flex items-center space-x-2 hover:text-white transition-colors">
        <FaPhone className="text-lg text-gray-400" />
        <p>+254712345678</p>
      </div>
      <div className="flex items-center space-x-2 hover:text-white transition-colors">
        <SiGmail className="text-lg text-gray-400" />
        <p>johndoe@gmail.com</p>
      </div>
    </div>

    <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-500 tracking-wide">
      © {new Date().getFullYear()} Empire Barber Cave. All rights reserved.
    </div>
  </footer>
);

}

export default Footer;