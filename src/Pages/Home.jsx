// src/Pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../Components/Banner";

function Home({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get("https://dummyjson.com/products?limit=8");
      setProducts(res.data.products);
    }
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-20">


      {/* ✅ Banner */}
      <Banner />

      {/* 🌑 Why Choose Us Section (Dark Elegant Theme) */}
<section className="relative text-center py-16 px-6 bg-gradient-to-b from-white via-emerald-50 to-green-100 overflow-hidden">
  {/* Decorative Glow Circles */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 left-1/4 w-72 h-72 bg-emerald-300 opacity-20 blur-3xl rounded-full"></div>
    <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-green-400 opacity-20 blur-3xl rounded-full"></div>
  </div>

  <div className="relative z-10 max-w-4xl mx-auto">
    <h2 className="text-4xl sm:text-5xl font-bold text-emerald-700 mb-6 tracking-wide">
      Why Choose Us?
    </h2>
    <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg">
      At{" "}
      <span className="text-emerald-700 font-semibold">Your Shop Center</span>,
      we believe shopping should be{" "}
      <span className="text-emerald-600 font-medium">simple</span>,{" "}
      <span className="text-emerald-600 font-medium">affordable</span>, and{" "}
      <span className="text-emerald-600 font-medium">enjoyable</span>.  
      From electronics to fashion, we bring you premium products with unbeatable deals — all in one place.
    </p>

    {/* Highlighted Features */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Trusted Quality",
          desc: "We deliver only top-notch products tested for excellence.",
          icon: "🛡️",
        },
        {
          title: "Fast Delivery",
          desc: "Quick, reliable, and tracked shipping — always on time.",
          icon: "⚡",
        },
        {
          title: "Affordable Prices",
          desc: "Enjoy the best value for money without compromise.",
          icon: "💰",
        },
        {
          title: "24/7 Support",
          desc: "Our friendly team is here for you anytime, anywhere.",
          icon: "💬",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white/70 border border-emerald-200 backdrop-blur-lg rounded-2xl p-6 shadow-md hover:shadow-emerald-300/40 transition-all duration-300 hover:-translate-y-2"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 🌿 Featured Products Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white via-emerald-50 to-green-100">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-emerald-700 mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100 hover:border-emerald-300 overflow-hidden"
            >
              {/* ✅ FIXED IMAGE DISPLAY */}
              <div className="w-full flex items-center justify-center bg-emerald-50">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full max-h-56 object-contain p-4 transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-700 font-bold text-lg">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700 transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
