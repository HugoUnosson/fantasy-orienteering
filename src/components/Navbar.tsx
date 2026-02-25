import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to toggle the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. Brand / Logo */}
          <div className="shrink-0 flex items-center">
            <span className="font-bold text-xl tracking-wider text-emerald-400">
              Fantasy Orienteering
            </span>
          </div>

          {/* 2. Desktop Menu (Hidden on mobile) */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" className="hover:text-emerald-400 transition-colors">Home</NavLink>
            <NavLink to="/signin" className="hover:text-emerald-400 transition-colors">Sign in</NavLink>
            <NavLink to="/dashboard" className="hover:text-emerald-400 transition-colors">Dashboard</NavLink>
            {/* Mock Budget Display */}
            <div className="bg-slate-800 px-3 py-1 rounded-full text-sm font-semibold border border-slate-700">
              💰 $15,000
            </div>
          </div>

          {/* 3. Mobile Hamburger Button (Hidden on desktop) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {/* SVG for the Hamburger Icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-emerald-400">Home</NavLink>
            <NavLink to="/signin" className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-emerald-400">Sign in</NavLink>
            <div className="px-3 py-2 text-emerald-400 font-semibold">
              Budget: $15,000
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;