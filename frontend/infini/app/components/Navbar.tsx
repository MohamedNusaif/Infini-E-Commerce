"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Headset, Command } from "lucide-react";

export default function Navbar() {
  const cartCount = 2;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          
          {/* LOGO */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-90"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 shadow-lg shadow-indigo-200 transition-transform group-hover:rotate-12">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </div>
            <span>Infini</span>
          </Link>

          {/* SEARCH BAR - Improved with Shortcut Hint */}
          <div className="relative  max-w-md flex-1 md:block">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="block w-full rounded-full border-0 bg-gray-100 py-2 pl-10 pr-12 text-sm ring-1 ring-inset ring-transparent transition-all placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-600 sm:leading-6"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <kbd className="inline-flex items-center rounded border border-gray-200 px-1.5 font-sans text-[10px] font-medium text-gray-400">
                <Command className="mr-1 h-2 w-2" />K
              </kbd>
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* SUPPORT */}
            <Link
              href="/support"
              className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-indigo-600 lg:flex"
            >
              <Headset className="h-5 w-5" />
              <span>Support</span>
            </Link>

            {/* CART */}
            <Link 
              href="/cart" 
              className="group relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-50 hover:text-slate-900"
            >
              <ShoppingCart className="h-6 w-6 transition-transform group-hover:-rotate-12" />
              {cartCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* DIVIDER */}
            <div className="h-6 w-px bg-gray-200" />

            {/* ACCOUNT / LOGIN */}
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md active:scale-95"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Login</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
