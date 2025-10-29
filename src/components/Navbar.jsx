import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center text-white relative z-10 px-4 py-3">
      <Link to={"/"}>
        <h1 className="font-black font-bebas text-2xl sm:text-3xl hover:cursor-pointer">
          Empire <span className="text-yellow-500">Barber</span> Cave
        </h1>
      </Link>

      <div className="md:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <div
        className={`flex flex-col md:flex-row md:items-center md:static absolute top-0 left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ease-in ${
          menuOpen ? "top-14 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"
        }`}
      >
        <Link
          to={"/aboutpage"}
          className="m-2 p-2 border-b-2 border-transparent hover:border-white transition-all duration-500 font-semibold text-center"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          to={"/servicepage"}
          className="m-2 p-2 border-b-2 border-transparent hover:border-white transition-all duration-500 font-semibold text-center"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
