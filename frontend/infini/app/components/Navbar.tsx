"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Headset, Command } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const cartCount = cart.reduce((total: any, item: { quantity: any; }) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          
          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-2.5 text-xl font-bold text-slate-900">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 shadow-lg">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </div>
            <span>Infini</span>
          </Link>

          {/* SEARCH */}
          <div className="relative max-w-md flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="block w-full rounded-full bg-gray-100 py-2 pl-10 pr-12 text-sm focus:ring-2 focus:ring-indigo-600"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <kbd className="inline-flex items-center rounded border px-1.5 text-[10px] text-gray-400">
                <Command className="mr-1 h-2 w-2" />K
              </kbd>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <Link href="/support" className="hidden lg:flex items-center gap-2 text-gray-600">
              <Headset className="h-5 w-5" />
              <span>Support</span>
            </Link>

            {/* CART */}
            <Link href="/cart" className="relative flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-50">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <div className="h-6 w-px bg-gray-200" />

            {/* LOGIN */}
            <Link href="/login" className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm text-white">
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
