import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../authentication/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Pull in the user and signOut function from the Auth Context
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Toggle function for the hamburger menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle the logout process
  const handleLogout = async () => {
    await signOut();
    navigate('/login'); // Send them back to the login page after signing out
  };

  return (
    <nav className="bg-slate-900 text-white shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="font-bold text-xl tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors">
              Fantasy Orienteering
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {user ? (
              // --- LOGGED IN DESKTOP VIEW ---
              <>
                <Link to="/my-team" className="hover:text-emerald-400 transition-colors text-sm font-medium">My Team</Link>
                <Link to="/draft" className="hover:text-emerald-400 transition-colors text-sm font-medium">Draft Runners</Link>
                <Link to="/leaderboard" className="hover:text-emerald-400 transition-colors text-sm font-medium">Leaderboard</Link>
                
                {/* Mock Budget - TODO */}
                <div className="bg-slate-800 px-3 py-1 rounded-full text-sm font-semibold border border-slate-700 text-emerald-400">
                  💰 $15,000
                </div>

                {/* User Info & Logout */}
                <div className="flex items-center space-x-4 border-l border-slate-700 pl-6 ml-2">
                  <span className="text-sm text-gray-300 truncate max-w-[150px]">
                    {user.email}
                  </span>
                  <button 
                    onClick={handleLogout}
                    className="text-sm bg-slate-800 hover:bg-slate-700 border border-slate-600 px-3 py-1.5 rounded transition-colors hover:cursor-pointer"
                  >
                    Log Out
                  </button>
                </div>
              </>
            ) : (
              // --- GUEST DESKTOP VIEW ---
              <Link 
                to="/login" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                Log In / Sign Up
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {user ? (
              // --- LOGGED IN MOBILE VIEW ---
              <>
                <div className="px-3 py-2 text-sm text-gray-400 border-b border-slate-700 mb-2">
                  Signed in as: <br/>
                  <span className="text-white font-medium">{user.email}</span>
                </div>
                
                <Link to="/my-team" onClick={toggleMenu} className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-emerald-400">My Team</Link>
                <Link to="/draft" onClick={toggleMenu} className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-emerald-400">Draft Runners</Link>
                <Link to="/leaderboard" onClick={toggleMenu} className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-emerald-400">Leaderboard</Link>
                
                <div className="px-3 py-2 text-emerald-400 font-semibold">
                  Budget: $15,000
                </div>

                <button 
                  onClick={() => {
                    toggleMenu();
                    handleLogout();
                  }}
                  className="w-full text-left mt-2 block px-3 py-2 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500/20"
                >
                  Log Out
                </button>
              </>
            ) : (
              // --- GUEST MOBILE VIEW ---
              <Link 
                to="/login" 
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 text-center font-medium mt-2"
              >
                Log In / Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;