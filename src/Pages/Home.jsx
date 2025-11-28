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
    <div className="min-h-screen bg-[#121212] text-white pt-20">
      <Banner />

      {/* Why Choose Us */}
      <section className="relative text-center py-16 px-6 bg-[#1E1E1E] overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B3EC67] mb-6 tracking-wide">
            Why Choose Us?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-sm sm:text-lg">
            At <span className="text-[#B3EC67] font-semibold">Your Shop Center</span>,
            shopping is <span className="text-green-400 font-medium">simple</span>, 
            <span className="text-green-400 font-medium">affordable</span>, and 
            <span className="text-green-400 font-medium">enjoyable</span>. From electronics to fashion, we bring premium products with unbeatable deals.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Trusted Quality", desc: "Top-notch products tested for excellence.", icon: "🛡️" },
              { title: "Fast Delivery", desc: "Reliable, tracked shipping.", icon: "⚡" },
              { title: "Affordable Prices", desc: "Best value for money.", icon: "💰" },
              { title: "24/7 Support", desc: "Friendly team ready anytime.", icon: "💬" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#2C2C2C] border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-[#B3EC67]/50 transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#B3EC67] mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#B3EC67] mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-[#1E1E1E] rounded-2xl shadow-md hover:shadow-[#B3EC67]/50 transition-all duration-300 border border-gray-700 overflow-hidden">
              <div className="w-full flex items-center justify-center bg-[#2C2C2C]">
                <img src={product.thumbnail} alt={product.title} className="max-h-56 object-contain p-4 transition-transform duration-500 hover:scale-105" />
              </div>

              <div className="p-5 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-white mb-2">{product.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#B3EC67] font-bold text-lg">${product.price}</span>
                  <button onClick={() => onAddToCart(product)} className="bg-[#B3EC67] text-black px-4 py-2 rounded-xl hover:bg-green-400 transition-all duration-300">
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
