'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";
import { User, Mail, Lock, Briefcase, ArrowRight } from "lucide-react";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  role: string;
}

export default function Register() {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate 2026 API latency
    setTimeout(() => {
      console.log("2026 Register Attempt:", formData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0a192f] p-4 overflow-hidden">
      {/* Decorative Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* Small/Compact Card */}
      <div className="w-full max-w-sm z-10">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8">
          
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 mb-3 shadow-lg shadow-blue-500/20">
              <User className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">Create Account</h1>
            <p className="text-blue-200/50 mt-1 text-xs">Join the platform for 2026</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-blue-200 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300/40 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-blue-300/20 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-blue-200 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300/40 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-blue-300/20 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-blue-200 uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300/40 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  minLength={8}
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-blue-300/20 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                />
              </div>
            </div>

            {/* Role (Select) */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-blue-200 uppercase tracking-widest ml-1">Account Type</label>
              <div className="relative group">
                <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300/40 group-focus-within:text-blue-400 transition-colors pointer-events-none" />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:ring-1 focus:ring-blue-500/50 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="customer" className="bg-[#0f213e]">Customer</option>
                  <option value="seller" className="bg-[#0f213e]">Seller</option>
                  <option value="admin" className="bg-[#0f213e]">Admin</option>
                </select>
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
                <>Get Started <ArrowRight className="ml-2 w-3.5 h-3.5" /></>
              )}
            </button>
          </form>

          <p className="text-center text-[11px] text-blue-200/40 mt-6">
            Already have an account? <a href="/login" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
