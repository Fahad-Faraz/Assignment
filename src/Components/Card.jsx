
import React from "react";

const Card = ({ image, title, description, price, onAddToCart }) => {
  return (
    <div className="bg-[#1E1E1E] text-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl w-full sm:w-[48%] md:w-[31%] lg:w-[22%] m-3 flex flex-col">
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 p-5 bg-[#2C2C2C]">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-[#B3EC67]">${price}</span>
          <button
            onClick={onAddToCart}
            className="bg-gradient-to-r from-[#b3ec67] to-[#8ccf47] hover:from-[#9dd852] hover:to-[#76b43b] text-black font-semibold px-4 py-2 rounded-xl text-sm transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
