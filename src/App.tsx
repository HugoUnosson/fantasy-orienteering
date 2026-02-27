import './App.css'
import { Route, Routes } from "react-router";
import { useEffect, useState } from 'react';
import { supabase } from './helper/supabaseClient';

// Views
import Home from "./views/Home"
import Auth from "./views/Auth"
import Dashboard from "./views/Dashboard"

// Components
import Navbar from "./components/Navbar";

function App() {
  const [session, setSession] = useState<any>(null)   // Should change this type

  const fetchSession = async () => {
    const currentSession = await supabase.auth.getSession()    // Should maybe be getUser(), idk??
    console.log(currentSession)
    setSession(currentSession.data.session)
  }

  useEffect(() => {
    fetchSession();

    // Listiner for auth changes
    const { data: authListiner} = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    });

    // Unsubscribe when after the session has been updated.
    return () => {
      authListiner.subscription.unsubscribe();
    }

  }, []);

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error(error)
    }
    console.log("signing out...")
  }

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

        {session ? <p className='text-green-400'>Logged in</p> : <p className='text-red-400'>Logged out</p>}

        <button onClick={signOut} className='my-4 border border-slate-500 p-3 py-1.5 rounded-full'>Log out</button>
      </div>
    </div>
  )
}

export default App
