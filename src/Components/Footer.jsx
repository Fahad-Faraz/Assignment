import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-300 py-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 text-center sm:text-left">

          <div>
            <h2 className="text-2xl font-bold text-[#B3EC67]">Your Shop Center</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Bringing quality and style to your doorstep.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#B3EC67] mb-3">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              {["Home","Products","About","Contact"].map((link) => (
                <li key={link}>
                  <a href={`/${link.toLowerCase()}`} className="hover:text-[#B3EC67] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#B3EC67] mb-3">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4 text-xl">
              {["🌐","📸","🐦"].map((icon, idx) => (
                <a key={idx} href="#" className="hover:text-[#B3EC67]">{icon}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} <span className="text-[#B3EC67] font-semibold">Your Shop Center</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
