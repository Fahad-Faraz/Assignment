import React from "react";

export default function Signup() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#121212] px-4">
      <form className="bg-[#1E1E1E] shadow-xl rounded-2xl p-8 w-full max-w-md border border-[#2D2D2D] hover:border-[#B3EC67] transition-all duration-300">

        <h2 className="text-4xl font-extrabold text-[#B3EC67] text-center mb-6">
          Create Account
        </h2>

        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-[#2C2C2C] text-white border border-[#3A3A3A] 
            focus:border-[#B3EC67] focus:ring-2 focus:ring-[#B3EC67]/30 outline-none transition-all duration-200"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-[#2C2C2C] text-white border border-[#3A3A3A] 
            focus:border-[#B3EC67] focus:ring-2 focus:ring-[#B3EC67]/30 outline-none transition-all duration-200"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-[#2C2C2C] text-white border border-[#3A3A3A] 
            focus:border-[#B3EC67] focus:ring-2 focus:ring-[#B3EC67]/30 outline-none transition-all duration-200"
          />
        </div>

        
        <button
          type="submit"
          className="mt-6 w-full bg-[#B3EC67] text-black font-semibold py-3 rounded-lg 
          hover:bg-[#a3ff4b] active:scale-95 transition-all duration-200"
        >
          Sign Up
        </button>

        
        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#B3EC67] font-medium hover:underline"
          >
            Log In
          </a>
        </p>
      </form>
    </section>
  );
}
