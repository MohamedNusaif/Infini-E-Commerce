"use client";

import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 && subtotal < 10000 ? 500 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="bg-slate-50 p-6 rounded-full mb-4">
          <ShoppingBag className="h-12 w-12 text-slate-400" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Your cart is empty</h1>
        <p className="text-slate-500 mt-2 mb-6 text-center">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          href="/"
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 lg:px-8">
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-10">
        <Link href="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft className="h-5 w-5 text-slate-600" />
        </Link>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Shopping Cart</h1>
        <span className="text-slate-400 font-medium text-lg">({cart.length})</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* ITEMS LIST */}
        <div className="lg:col-span-8 space-y-10">
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[96px_1fr] gap-6 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition"
            >
              {/* IMAGE COLUMN */}
              <div className="w-12 h-16 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center">
                <img
                  src={item.image || "/api/placeholder/300/400"}
                  alt={item.name}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* DETAILS COLUMN */}
              <div className="flex flex-col justify-between min-h-[128px]">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    In Stock • Standard Delivery
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  <div className="space-y-3">
                    <p className="text-lg font-bold text-indigo-600">
                      Rs {(item.price * item.quantity).toLocaleString()}
                    </p>

                    {/* QUANTITY CONTROLS */}
                    <div className="flex items-center border border-slate-200 rounded-lg bg-white w-fit">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-2 hover:bg-slate-50 border-r"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-5 text-sm font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-slate-50 border-l"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-600 bg-red-50 px-4 py-2 rounded-lg transition"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="mt-6 text-sm font-bold text-slate-400 hover:text-red-500 transition-colors flex items-center gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Clear entire cart
          </button>
        </div>

        {/* ORDER SUMMARY */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl bg-slate-50 p-8 border border-slate-100 sticky top-24 shadow-md">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-bold text-slate-900">
                  Rs {subtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span
                  className={`font-bold ${
                    shipping === 0 ? "text-green-600" : "text-slate-900"
                  }`}
                >
                  {shipping === 0 ? "FREE" : `Rs ${shipping}`}
                </span>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-black text-indigo-600">
                    Rs {total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition shadow-lg">
              Proceed to Checkout
            </button>

            <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <p className="text-xs text-indigo-700 font-medium text-center">
                {subtotal >= 10000
                  ? "🎉 Your order qualifies for FREE shipping!"
                  : `Add Rs ${(10000 - subtotal).toLocaleString()} more for FREE shipping.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
