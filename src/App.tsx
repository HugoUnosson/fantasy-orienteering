import './App.css'
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './authentication/AuthContext.tsx';
import { ProtectedRoute } from './authentication/ProtectedRoute.tsx';

// Views
import Home from "./views/Home.tsx"
import Auth from './authentication/Auth.tsx';

// Components
import Navbar from "./components/Navbar.tsx";

function App() {

  return (
    // 1. Wrap the entire app in the AuthProvider
    <AuthProvider>
      {/* 2. Setup the Router */}
      <div className="min-h-screen bg-slate-950 font-poppins">
        <Navbar />
        <div className="text-white 
          mx-auto max-w-sm md:max-w-l lg:max-w-3xl
          text-sm md:text-md md:text-md"
        >
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Auth />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><div>the dashboard</div></ProtectedRoute>} />

            {/* Default redirect to team page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>

    </AuthProvider>
  );
}

export default App
