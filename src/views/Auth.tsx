import { useState } from "react";
import type { SubmitEvent, ChangeEvent } from "react";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const handleAuth = async (e: SubmitEvent) => {
      e.preventDefault();
      
      if (!isLogin) {
        // Sign Up
      } else {
        // Log In
      }
    };


  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md border border-slate-700">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        
        {/* Display Error Messages 
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}*/}

        {/* Display Success Messages (like check your email) 
        {message && (
          <div className="bg-emerald-500/10 border border-emerald-500 text-emerald-400 p-3 rounded mb-4 text-sm text-center">
            {message}
          </div>
        )}*/}

        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              placeholder="runner@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4 hover:cursor-pointer"
          >
            {isLoading ? 'Processing...' : isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle between Login and Sign Up */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              {/*setError(null);
              setMessage(null);*/}
            }}
            className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors hover:cursor-pointer"
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Log In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;