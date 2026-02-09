import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Loader2, Phone } from 'lucide-react'; // Added Phone icon
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/'); 
    }, 2000);
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-black">
            {isLogin ? 'Welcome back' : 'Create account'}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-semibold text-black underline underline-offset-4 hover:text-gray-600"
            >
              {isLogin ? 'Sign up for free' : 'Log in to your account'}
            </button>
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-200/50">
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <>
                {/* Full Name Field */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input 
                    required 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black" 
                  />
                </div>
                
                {/* NEW: Phone Number Field (Only for Register) */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input 
                    required 
                    type="tel" 
                    placeholder="Phone Number (e.g. +995...)" 
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black" 
                  />
                </div>
              </>
            )}

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input required type="email" placeholder="Email address" className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black" />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input required type="password" placeholder="Password" className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black" />
            </div>

            <button
              disabled={isLoading}
              className="group flex w-full items-center justify-center rounded-full bg-black py-4 font-semibold text-white transition-all hover:bg-gray-800 disabled:bg-gray-400"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;