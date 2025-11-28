
import React from "react";

export default function Signup() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-emerald-50 to-green-100 px-4">
      <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-emerald-100 hover:border-emerald-300 transition-all duration-300">
      
        <h2 className="text-4xl font-extrabold text-emerald-700 text-center mb-6">
          Create Account
        </h2>

        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200"
          />
        </div>

        
        <button
          type="submit"
          className="mt-6 w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 active:scale-95 transition-all duration-200"
        >
          Sign Up
        </button>

        
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-emerald-700 font-medium hover:underline"
          >
            Log In
          </a>
        </p>
      </form>
    </section>
  );
}
