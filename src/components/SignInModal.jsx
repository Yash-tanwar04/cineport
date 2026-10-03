import React, { useState } from 'react';
import { X, User, Lock, Mail, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SignInModal({ isOpen, onClose }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignedIn(true);
    setTimeout(() => {
      setSignedIn(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border border-purple-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#220B44] to-[#3B1572] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-purple-200 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#FF8A00]" />
            <span className="text-xs uppercase tracking-widest text-[#FF8A00] font-bold">Cineport Club</span>
          </div>
          <h3 className="font-heading font-bold text-2xl">
            {isRegister ? 'Join Cineport Club' : 'Welcome Back'}
          </h3>
          <p className="text-xs text-purple-200 mt-1">
            {isRegister 
              ? 'Unlock priority tickets, lounge privileges & rewards' 
              : 'Sign in to access your bookings and tier rewards'}
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {signedIn ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-bold text-xl text-[#1C0B38]">
                {isRegister ? 'Welcome to Cineport Club!' : 'Signed In Successfully!'}
              </h4>
              <p className="text-xs text-gray-500">Your member account is active.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegister && (
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <div className="flex items-center border border-purple-100 rounded-xl px-3 py-2.5 bg-[#FAF7FD]">
                    <User className="w-4 h-4 text-purple-400 mr-2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="bg-transparent w-full text-xs font-medium text-gray-800 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                  Email Address or Mobile Number
                </label>
                <div className="flex items-center border border-purple-100 rounded-xl px-3 py-2.5 bg-[#FAF7FD]">
                  <Mail className="w-4 h-4 text-purple-400 mr-2" />
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com / +91 9876543210"
                    className="bg-transparent w-full text-xs font-medium text-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Password / OTP
                  </label>
                  {!isRegister && (
                    <span className="text-[11px] text-[#FF8A00] hover:underline cursor-pointer">
                      Forgot Password?
                    </span>
                  )}
                </div>
                <div className="flex items-center border border-purple-100 rounded-xl px-3 py-2.5 bg-[#FAF7FD]">
                  <Lock className="w-4 h-4 text-purple-400 mr-2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-transparent w-full text-xs font-medium text-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3 text-xs tracking-wide"
              >
                {isRegister ? 'Create Free Cineport Account' : 'Sign In to Account'}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setIsRegister(!isRegister)}
                  className="text-xs text-purple-700 hover:text-[#FF8A00] font-medium"
                >
                  {isRegister 
                    ? 'Already have an account? Sign in' 
                    : "Don't have an account? Join Cineport Club Free"}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 pt-2 border-t border-purple-50">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-bit encrypted secure member session</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
