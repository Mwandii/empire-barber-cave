import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: false });
  }, []);

  return (
    <nav
      data-aos="fade-down"
      className="flex justify-between items-center text-white backdrop-blur-md bg-black/60 border-b border-yellow-600/20 px-6 py-4 sticky top-0 z-50 shadow-[0_3px_20px_rgba(255,215,0,0.1)]"
    >
      {/* Logo */}
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <h1 className="font-cinzel text-2xl sm:text-3xl tracking-wider font-bold hover:cursor-pointer transition-all duration-500 hover:text-yellow-400">
          Empire{" "}
          <span className="text-transparent bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text animate-pulse-slow">
            Barber
          </span>{" "}
          Cave
        </h1>
      </Link>

      {/* Mobile Icon */}
      <div
        className="md:hidden z-20 text-yellow-500 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      {/* Links */}
      <div
        className={`flex flex-col md:flex-row md:items-center md:static absolute top-0 left-0 w-full md:w-auto bg-black/95 md:bg-transparent transition-all duration-500 ease-in-out ${
          menuOpen
            ? "top-14 opacity-100"
            : "top-[-400px] opacity-0 md:opacity-100"
        }`}
      >
        {["About Us", "Services"].map((item, idx) => (
          <Link
            key={idx}
            to={`/${item.toLowerCase().replace(" ", "")}page`}
            className="m-3 p-2 text-center text-lg font-raleway tracking-wide font-medium relative group transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-linear-to-r from-yellow-400 to-yellow-600 transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
