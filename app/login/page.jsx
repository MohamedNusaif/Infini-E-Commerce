"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-50/50">
      
      {/* LEFT – BRAND PANEL */}
      <div className="relative hidden lg:flex items-center justify-center overflow-hidden bg-[#0F172A]">
        {/* Modern Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-purple-600/20 z-10" />
        
        {/* Background image with better blending */}
        <Image
          src="/hero.jpg"
          alt="Infini Electronics"
          fill
          className="object- opacity-40 mix-blend-luminosity"
          priority
        />

        <div className="relative z-20 max-w-md text-center px-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Official Store
          </div>
          
          <h1 className="text-5xl font-black text-white mb-6 tracking-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">Infini</span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed font-medium">
            Shop premium smartphones, laptops, and tech accessories
            with confidence.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 text-slate-400 text-sm font-semibold">
            <div className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
              <ShieldCheck size={18} />
              Secure
            </div>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <div className="hover:text-indigo-400 transition-colors">Trusted</div>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <div className="hover:text-indigo-400 transition-colors">Reliable</div>
          </div>
        </div>
      </div>

      {/* RIGHT – LOGIN CARD */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-[2.5rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-10">
          
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Sign in
            </h2>
            <p className="text-slate-500 mt-2 font-medium">
              Continue your tech journey
            </p>
          </div>

          <form className="space-y-5">
            {/* Email */}
            <div className="group">
              <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                Email address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 
                             focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5
                             outline-none transition-all duration-200 font-medium placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="block text-sm font-bold text-slate-700">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 
                             focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5
                             outline-none transition-all duration-200 font-medium placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center px-1">
              <label className="flex items-center gap-2.5 text-sm text-slate-600 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                />
                <span className="font-medium select-none group-hover:text-slate-900 transition-colors">Keep me signed in</span>
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2
                         bg-slate-900 text-white py-4 rounded-2xl font-bold
                         hover:bg-indigo-600 transition-all duration-300
                         shadow-xl shadow-slate-200 hover:shadow-indigo-200/50 active:scale-[0.98] mt-2"
            >
              Sign In
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4 px-2">
            <div className="h-px flex-1 bg-slate-100" />
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">New here?</span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          {/* Register Link */}
          <div className="text-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center w-full py-3.5 rounded-2xl border border-slate-200 font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
