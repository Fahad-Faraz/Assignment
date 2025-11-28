
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
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className=" min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-emerald-50 to-green-100">
        <p className="text-xl text-emerald-700 animate-pulse font-semibold">
          Loading products...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-green-100 py-12 px-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-emerald-700 mb-10">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100 hover:border-emerald-300 overflow-hidden"
          >
          
            <div className="w-full flex items-center justify-center bg-emerald-50">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="max-h-56 object-contain p-4 transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {product.title}
              </h2>
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
    </div>
  );
}

export default Products;
