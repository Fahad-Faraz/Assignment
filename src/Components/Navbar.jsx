import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
  `text-lg font-medium hover:text-emerald-700 transition-colors duration-200 ${
    isActive ? "text-emerald-700 font-semibold" : "text-gray-800"
  }`;


  return (
    <header className="font-[Poppins] w-full bg-gradient-to-r from-emerald-100 via-white to-green-100 text-gray-800 ...">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center gap-3">
            <NavLink to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
                YS
              </div>
              <div className="-mt-1">
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                  Your Shop Center
                </h1>
                <p className="text-base text-gray-600 font-medium -mt-0.5">
                  Shop the best
                </p>
              </div>
            </NavLink>
          </div>

          
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/products" className={linkClass}>
              Products
            </NavLink>
          </nav>

          
          <div className="flex items-center gap-4 ">
            {/* 🛒 Cart */}
            <NavLink
              to="/cart"
              className="relative inline-flex items-center px-3 py-2 rounded-md hover:bg-emerald-50 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6h14l-2-6M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full shadow">
                  {cartCount}
                </span>
              )}
            </NavLink>

            
            <NavLink
              to="/signup"
              className="hidden sm:inline-block px-5 py-2.5 rounded-md bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              className="inline-block px-5 py-2.5 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
            >
              Log In
            </NavLink>

            
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-emerald-50"
              aria-label="Toggle menu"
            >
              <svg
                className="h-7 w-7 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      {mobileOpen && (
        <div className="md:hidden bg-gradient-to-r from-white via-emerald-50 to-green-50 border-t border-gray-200 shadow-md">
          <div className="px-6 pt-4 pb-6 space-y-4">
            {["Home", "About", "Products"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md text-base hover:bg-emerald-50 ${
                    isActive
                      ? "text-emerald-700 font-semibold"
                      : "text-gray-800"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}

            <NavLink
              to="/cart"
              className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-emerald-50 text-gray-800"
            >
              🛒 Cart
              {cartCount > 0 && (
                <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-medium leading-none text-white bg-red-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/signup"
              className="block py-2.5 px-3 rounded-md bg-emerald-500 text-white text-center font-medium hover:bg-emerald-600"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              className="block py-2.5 px-3 rounded-md border border-gray-300 text-center text-gray-700 font-medium hover:bg-emerald-50"
            >
              Log In
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
