import React, { useEffect, useState } from "react";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1350&q=80",
      heading: "Upgrade Your Style",
      text: "Discover fresh trends and premium quality fashion every day.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1350&q=80",
      heading: "Smart Deals Everyday",
      text: "Shop smart with offers that bring joy and value to your life.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1350&q=80",
      heading: "Shop the Latest Tech",
      text: "Find gadgets and electronics from top brands at great prices.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.heading}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 via-black/30 to-transparent backdrop-blur-[2px] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#B3EC67] drop-shadow-md mb-4 animate-fadeIn">
              {slide.heading}
            </h1>
            <p className="text-gray-300 max-w-xl text-sm sm:text-lg md:text-xl font-medium">
              {slide.text}
            </p>
            <button className="mt-6 px-6 py-3 bg-[#B3EC67] text-black rounded-lg shadow-md hover:bg-green-400 transition">
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#B3EC67] scale-110 shadow-md"
                : "bg-gray-500 hover:bg-[#B3EC67]/70"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Banner;
