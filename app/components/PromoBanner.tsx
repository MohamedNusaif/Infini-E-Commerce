"use client";

import React from 'react';
import { Sparkles, ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 md:p-16">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-indigo-600/30 blur-[80px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-purple-600/20 blur-[80px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/20">
          <Sparkles className="h-4 w-4 text-yellow-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            Limited Time Offer
          </span>
        </div>

        <h2 className="max-w-3xl text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
          Big Sale <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Weekend</span>
        </h2>

        <p className="mt-6 max-w-xl text-lg text-slate-300 md:text-xl leading-relaxed">
          Up to <span className="text-white font-bold text-2xl">50%</span> off on premium electronics and fashion.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="group flex items-center gap-2 bg-white text-black px-10 py-4 rounded-2xl font-bold transition-all hover:bg-indigo-50 hover:scale-105 active:scale-95 shadow-xl shadow-white/10">
            <span>View All Deals</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Modern Dot Pattern Replacement */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} 
      />
    </section>
  );
}
