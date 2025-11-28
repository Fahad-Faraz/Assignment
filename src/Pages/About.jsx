import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-[#121212] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#B3EC67] mb-6">
          About <span className="text-green-400">Us</span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10">
          At <span className="text-[#B3EC67] font-semibold">Your Shop Center</span>, 
          we’re passionate about making shopping effortless, enjoyable, 
          and affordable for everyone. Our mission is to bring you the best 
          products at unbeatable prices — delivered with care and style.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Quality Products", desc: "Every item we offer is carefully selected to ensure the highest quality.", icon: "🌟" },
            { title: "Customer First", desc: "We provide dedicated support every step of the way.", icon: "💬" },
            { title: "Fast Delivery", desc: "Your time matters. We ensure prompt, safe, and tracked shipping.", icon: "🚚" },
          ].map((item, index) => (
            <div key={index} className="bg-[#1E1E1E] border border-gray-700 rounded-2xl shadow-md p-6 hover:shadow-[#B3EC67]/50 transition-all duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#B3EC67] mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <p className="text-gray-400 text-lg italic">
            “We believe great shopping starts with trust, quality, and a smile. That’s what keeps our customers coming back.”
          </p>
          <div className="mt-4 text-[#B3EC67] font-semibold">
            — The Your Shop Center Team
          </div>
        </div>
      </div>
    </section>
  );
}
