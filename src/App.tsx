import './App.css'
import { Route, Routes } from "react-router";

// Views
import Home from "./views/Home.tsx"
import SignUp from "./views/SignUp.tsx"
import SignIn from "./views/SignIn.tsx"

// Components
import Navbar from "./components/Navbar.tsx";

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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
