'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Lock, ArrowRight, Github } from "lucide-react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0a192f] p-4 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* COMPACT CARD: Changed max-w-md to max-w-sm and reduced padding */}
      <div className="w-full max-w-sm z-10">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8">
          
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 mb-3 shadow-lg shadow-blue-500/20">
              <Lock className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">Welcome Back</h1>
            <p className="text-blue-200/50 mt-1 text-xs">Enter your details to sign in</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-blue-200 uppercase tracking-widest ml-1">Email</label>
              <div className="relative group">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300/40 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-blue-300/20 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Password</label>
                <a href="#" className="text-[10px] text-blue-400 hover:underline">Forgot?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300/40 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-blue-300/20 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Sign In <ArrowRight className="ml-2 w-3.5 h-3.5" /></>
              )}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase"><span className="bg-[#0e1d35] px-2 text-blue-300/30">Or</span></div>
          </div>

          <button className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <Github className="w-4 h-4" /> GitHub
          </button>

          <p className="text-center text-[11px] text-blue-200/40 mt-6">
            Don't have an account? <a href="/register" className="text-blue-400 hover:text-blue-300 font-semibold">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
