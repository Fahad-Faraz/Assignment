import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-lg font-medium hover:text-[#B3EC67] transition-colors duration-200 ${
      isActive ? "text-[#B3EC67] font-semibold" : "text-gray-200"
    }`;

  return (
    <header className="font-[Poppins] w-full bg-[#121212] text-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-[#B3EC67] to-green-600 rounded-full flex items-center justify-center text-black text-xl font-bold shadow-md">
              YS
            </div>
            <div className="-mt-1">
              <h1 className="text-2xl font-bold text-gray-200 leading-tight">
                Your Shop Center
              </h1>
              <p className="text-sm text-gray-400 font-medium -mt-0.5">
                Shop the best
              </p>
            </div>
          </NavLink>

          {/* Desktop Links */}
          <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/products" className={linkClass}>Products</NavLink>
          </nav>

          {/* Cart & Auth Buttons */}
          <div className="flex items-center gap-3">
            <NavLink to="/cart" className="relative inline-flex items-center px-3 py-2 rounded-md hover:bg-[#1e1e1e] transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6h14l-2-6M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"/>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black bg-red-500 rounded-full shadow">
                  {cartCount}
                </span>
              )}
            </NavLink>

            <NavLink to="/signup" className="hidden sm:inline-block px-4 sm:px-5 py-2 rounded-md bg-[#B3EC67] text-black font-semibold text-sm hover:bg-green-400 transition">
              Sign Up
            </NavLink>

            <NavLink to="/login" className="inline-block px-4 sm:px-5 py-2 rounded-md border border-gray-600 text-sm font-medium hover:bg-[#1e1e1e] transition">
              Log In
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-[#1e1e1e]"
            >
              <svg className="h-7 w-7 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-t border-gray-700 shadow-md">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {["Home", "About", "Products"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md text-base hover:bg-[#2C2C2C] ${
                    isActive ? "text-[#B3EC67] font-semibold" : "text-gray-200"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}

            <NavLink to="/cart" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-[#2C2C2C] text-gray-200">
              🛒 Cart {cartCount > 0 && <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-medium leading-none text-black bg-red-500 rounded-full">{cartCount}</span>}
            </NavLink>

            <NavLink to="/signup" className="block py-2.5 px-3 rounded-md bg-[#B3EC67] text-black text-center font-medium hover:bg-green-400">
              Sign Up
            </NavLink>

            <NavLink to="/login" className="block py-2.5 px-3 rounded-md border border-gray-600 text-center text-gray-200 font-medium hover:bg-[#2C2C2C]">
              Log In
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
