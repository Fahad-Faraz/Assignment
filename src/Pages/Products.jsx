import React, { useEffect, useState } from "react";
import axios from "axios";

function Products({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212]">
      <p className="text-[#B3EC67] text-xl animate-pulse font-semibold">Loading products...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#121212] py-12 px-6 text-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#B3EC67] mb-10">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map(product => (
          <div key={product.id} className="bg-[#1E1E1E] rounded-2xl shadow-md hover:shadow-[#B3EC67]/50 transition-all duration-300 border border-gray-700 overflow-hidden">
            <div className="w-full flex items-center justify-center bg-[#2C2C2C]">
              <img src={product.thumbnail} alt={product.title} className="max-h-56 object-contain p-4 transition-transform duration-500 hover:scale-105" />
            </div>

            <div className="p-5 flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-white mb-2">{product.title}</h2>
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
    </div>
  );
}

export default Products;
