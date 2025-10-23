// src/Components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-emerald-50 via-green-100 to-white text-gray-700 py-10 border-t border-emerald-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🌿 Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 text-center sm:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-emerald-700">Your Shop Center</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Bringing quality and style to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-700 mb-3">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" className="hover:text-emerald-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-emerald-600 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-emerald-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-emerald-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-700 mb-3">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              {[
                { name: "Facebook", icon: "🌐" },
                { name: "Instagram", icon: "📸" },
                { name: "Twitter", icon: "🐦" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-xl hover:text-emerald-600 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-100 my-8"></div>

        {/* Copyright */}
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-emerald-700 font-semibold">Your Shop Center</span>.  
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
