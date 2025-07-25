import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-4 bg-white shadow-md sticky top-0 z-50">
      {/* Left: Logo + App Name */}
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
        <span className="font-bold text-xl text-gray-800">MyApp</span>
      </div>

      {/* Right: Buttons */}
      <div className="hidden md:flex space-x-4">
        <a href="/login" className="px-4 py-2 rounded-md text-gray-700 font-semibold hover:bg-gray-100 transition">Login</a>
        <a href="/signup" className="px-4 py-2 rounded-md text-white font-semibold bg-blue-500 hover:bg-blue-600 transition">Sign Up</a>
        <button className="px-4 py-2 rounded-md text-white font-semibold bg-red-500 hover:bg-red-600 transition">Logout</button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button id="menu-toggle" className="p-2 focus:outline-none">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}
