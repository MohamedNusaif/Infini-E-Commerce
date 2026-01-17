"use client";

import React from "react";
import {
  Smartphone,
  Shirt,
  Home,
  Trophy,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const categories = [
  { id: 1, name: "Electronics", icon: <Smartphone />, color: "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600" },
  { id: 2, name: "Fashion", icon: <Shirt />, color: "bg-gradient-to-br from-pink-50 to-pink-100 text-pink-600" },
  { id: 3, name: "Home & Kitchen", icon: <Home />, color: "bg-gradient-to-br from-orange-50 to-orange-100 text-orange-600" },
  { id: 4, name: "Sports", icon: <Trophy />, color: "bg-gradient-to-br from-green-50 to-green-100 text-green-600" },
  { id: 5, name: "Accessories", icon: <Sparkles />, color: "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-600" },
];

export default function CategoryList() {
  return (
    <section className="py-12 bg-white">
      <div className="flex items-center justify-between mb-8 px-4 md:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Shop by Category
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Explore top electronics, accessories, and more.
          </p>
        </div>
        <button className="flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
          View All <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
          >
            {/* Icon Container */}
            <div
              className={`mb-4 flex h-20 w-20 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner ${cat.color}`}
            >
              {React.cloneElement(cat.icon, { size: 36, strokeWidth: 1.5 })}
            </div>

            {/* Category Name */}
            <span className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {cat.name}
            </span>

            {/* Hover Chevron */}
            <div className="absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
                <ChevronRight className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
