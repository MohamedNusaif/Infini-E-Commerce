"use client";

import Image from "next/image";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white to-gray-100 p-8 md:p-16 shadow-sm border border-gray-200/50">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/5 blur-[100px]" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl space-y-8 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium shadow-sm border border-gray-100">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            <span className="text-gray-600">
              Your trusted destination for tech essentials
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Power Your Life with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Infini
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mx-auto md:mx-0">
            Shop smartphones, laptops, headphones, cables, and everyday tech
            accessories—carefully selected for performance, durability, and
            value.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="group flex items-center gap-2 bg-black text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-gray-800 hover:shadow-xl active:scale-95">
              <span>Shop Electronics</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-gray-900 hover:bg-gray-50 transition-colors">
              <ShoppingBag className="h-5 w-5" />
              Browse Accessories
            </button>
          </div>

          {/* Trust / Micro copy */}
          <p className="text-sm text-gray-400">
            Genuine products • Secure payments • Fast delivery
          </p>

          {/* Stats */}
          <div className="pt-4 flex items-center justify-center md:justify-start gap-8 border-t border-gray-200/60">
            <div>
              <p className="text-2xl font-bold text-gray-900">1k+</p>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                Happy Customers
              </p>
            </div>

            <div className="h-8 w-px bg-gray-200" />

            <div>
              <p className="text-2xl font-bold text-gray-900">Top Rated</p>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                Tech Store
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center">
          <div
            className="relative w-full max-w-[950px] h-[500px]
                       rounded-2xl overflow-hidden
                       bg-gradient-to-br from-neutral-100 to-neutral-200
                       shadow-2xl border border-neutral-200"
          >
            <Image
              src="/hero.jpg"
              alt="Infini electronics and accessories"
              fill
              priority
              className="object-contain p-6 transition-transform duration-500 ease-out hover:scale-[1.02]"
            />

            {/* Premium overlay */}
            <div
              className="absolute inset-0 pointer-events-none
                         bg-gradient-to-t from-black/10 via-transparent to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
