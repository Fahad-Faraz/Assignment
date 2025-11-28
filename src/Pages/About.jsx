
import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-green-100 text-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
    
        <h1 className="text-5xl font-extrabold text-emerald-700 mb-6">
          About <span className="text-[#B3EC67]">Us</span>
        </h1>

        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
          At <span className="font-semibold text-emerald-700">Your Shop Center</span>, 
          we’re passionate about making shopping effortless, enjoyable, 
          and affordable for everyone. Our mission is to bring you the best 
          products at unbeatable prices — delivered with care and style.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Quality Products",
              desc: "Every item we offer is carefully selected to ensure the highest quality and reliability.",
              icon: "🌟",
            },
            {
              title: "Customer First",
              desc: "We value your satisfaction and provide dedicated support every step of the way.",
              icon: "💬",
            },
            {
              title: "Fast Delivery",
              desc: "Your time matters. We ensure prompt, safe, and tracked shipping for all your orders.",
              icon: "🚚",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-emerald-100 hover:border-emerald-300 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        
        <div className="mt-16 max-w-2xl mx-auto">
          <p className="text-gray-700 text-lg italic">
            “We believe great shopping starts with trust, quality, and a smile.
            That’s what keeps our customers coming back.”
          </p>
          <div className="mt-4 text-emerald-700 font-semibold">
            — The Your Shop Center Team
          </div>
        </div>
      </div>
    </section>
  );
}
