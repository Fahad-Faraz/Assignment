import React from "react";

function Cart({ items }) {
  return (
    <div className="p-6 sm:p-10 text-white bg-[#121212] min-h-screen">
      <h1 className="text-4xl font-bold text-[#B3EC67] mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-400 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:justify-between bg-[#2C2C2C] p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-400 text-sm sm:text-base">${item.price}</p>
                </div>
              </div>
              <span className="text-[#B3EC67] font-bold text-lg sm:text-xl mt-2 sm:mt-0">
                ${item.price}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
