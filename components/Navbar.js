"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 text-white px-6 sm:px-10 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / Brand */}
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-100 to-purple-200">
            SrtLinks
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-lg font-medium">
          <Link href="/" className="hover:text-pink-200 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-pink-200 transition-colors">About</Link>
          <Link href="/shorten" className="hover:text-pink-200 transition-colors">Shorten</Link>
          <Link href="/contact" className="hover:text-pink-200 transition-colors">Contact</Link>
          
          <Link href="/shorten">
            <button className="bg-white text-purple-700 font-semibold px-4 py-1.5 rounded-full shadow-md hover:scale-105 hover:bg-pink-100 transition-transform duration-300">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="border-2 border-white px-4 py-1.5 rounded-full hover:bg-white hover:text-purple-700 font-semibold shadow-md hover:scale-105 transition-transform duration-300">
              GitHub
            </button>
          </Link>
        </ul>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center text-white hover:text-pink-200 transition-colors"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-purple-800 to-pink-700 text-center py-6 mt-3 rounded-xl shadow-lg animate-slideDown">
          <ul className="flex flex-col gap-5 font-medium text-lg">
            <Link href="/" onClick={toggleMenu} className="hover:text-pink-200">Home</Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-pink-200">About</Link>
            <Link href="/shorten" onClick={toggleMenu} className="hover:text-pink-200">Shorten</Link>
            <Link href="/contact" onClick={toggleMenu} className="hover:text-pink-200">Contact</Link>
            <div className="flex flex-col gap-4 mt-4">
              <Link href="/shorten" onClick={toggleMenu}>
                <button className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-full hover:scale-105 hover:bg-pink-100 transition-transform duration-300">
                  Try Now
                </button>
              </Link>
              <Link href="/github" onClick={toggleMenu}>
                <button className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-700 font-semibold hover:scale-105 transition-transform duration-300">
                  GitHub
                </button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
