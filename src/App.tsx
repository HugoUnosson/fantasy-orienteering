import './App.css'
import { Route, Routes } from "react-router";

// Views
import Home from "./views/Home"
import Auth from "./views/Auth"
import Dashboard from "./views/Dashboard"

// Components
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="bg-slate-950 min-h-screen font-poppins">
      <Navbar />
      <div
        className="text-white 
        mx-auto max-w-sm md:max-w-l lg:max-w-3xl
        text-sm md:text-md md:text-md"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
