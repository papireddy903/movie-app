import React, { useState } from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white w-full">
      <div className="flex justify-between items-center mx-6 md:mx-12 py-4">
        {/* Left Side: Title and Menu */}
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold">Title</div>

          {/* Menu for larger screens */}
          <ul className="hidden md:flex gap-8 text-lg">
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="/">Home</Link></li>
            <li className="hover:text-gray-400 cursor-pointer">Movies</li>
          </ul>
        </div>

        {/* Right Side: Login Button */}
        <div className="hidden md:block">
          <button className="border border-white px-4 py-2 rounded hover:bg-gray-700">
            Login
          </button>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="block md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 bg-gray-800 py-4">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">Movies</li>
          <li className="hover:text-gray-400 cursor-pointer">Tv Shows</li>
          <li>
            <button className="border border-white px-4 py-2 rounded hover:bg-gray-700">
              Login
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
