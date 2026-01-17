"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart, Star, Heart, ArrowRight, Zap } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  discount?: number;
  isNew?: boolean;
}

const products: Product[] = [
  { id: 1, name: "iPhone 15 Pro", price: 450000, image: "/p7.jpg", category: "Mobile", isNew: true },
  { id: 2, name: "Dell XPS 13", price: 580000, image: "/p15.jpg", category: "Laptops", discount: 10 },
  { id: 3, name: "Sony WH-1000XM5", price: 125000, image: "/p4.jpg", category: "Audio" },
  { id: 4, name: "Apple Watch S9", price: 145000, image: "/p5.jpg", category: "Wearables", isNew: true },
  { id: 5, name: "Samsung S24 Ultra", price: 410000, image: "/p10.jpg", category: "Mobile" },
  { id: 6, name: "MacBook Air M3", price: 395000, image: "/p11.jpg", category: "Laptops", discount: 5 },
  { id: 7, name: "iPad Pro M2", price: 320000, image: "/p12.jpg", category: "Tablets" },
  { id: 8, name: "AirPods Max", price: 185000, image: "/p13.jpg  ", category: "Audio", isNew: true },
];

export default function FeaturedProducts() {
  const formatPrice = (amount: number): string => {
    return new Intl.NumberFormat("en-LK", {
      style: "currency",
      currency: "LKR",
      maximumFractionDigits: 0,
    }).format(amount).replace("LKR", "Rs.");
  };

  return (
    <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase">
            <Zap size={14} className="fill-indigo-600" />
            <span>Trending Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Products</span>
          </h2>
          <p className="text-slate-500 max-w-md text-sm md:text-base">
            Discover our handpicked selection of premium tech essentials curated just for you.
          </p>
        </div>
        
        <button className="group flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold text-sm hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-slate-200">
          Explore All 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Modern Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100">
              {/* Badges */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                {product.isNew && (
                  <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    New
                  </span>
                )}
                {product.discount && (
                  <span className="px-3 py-1 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    -{product.discount}%
                  </span>
                )}
              </div>

              <button 
                aria-label="Add to wishlist"
                className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/80 backdrop-blur-md text-slate-400 hover:text-rose-500 hover:scale-110 transition-all shadow-sm"
              >
                <Heart size={18} />
              </button>

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
              />

              {/* Action Overlay */}
              <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-white text-slate-900 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl hover:bg-indigo-600 hover:text-white transition-colors">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="px-2 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-indigo-500 uppercase tracking-widest">
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-slate-700 font-mono">4.9</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
                {product.name}
              </h3>

              <div className="mt-auto flex items-baseline gap-2">
                <span className="text-xl font-black text-slate-900">
                  {formatPrice(product.price * (1 - (product.discount || 0) / 100))}
                </span>
                {product.discount && (
                  <span className="text-sm text-slate-400 line-through font-medium">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
