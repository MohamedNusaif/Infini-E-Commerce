"use client";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300 rounded-2xl">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">Infini Shop</h2>
          <p className="mt-3 text-sm">
            Your trusted online store for quality products and best prices.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">Shop</li>
            <li className="cursor-pointer hover:underline">Cart</li>
            <li className="cursor-pointer hover:underline">Contact Us</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:underline">FAQ</li>
            <li className="cursor-pointer hover:underline">Returns</li>
            <li className="cursor-pointer hover:underline">Order Tracking</li>
            <li className="cursor-pointer hover:underline">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: support@infinishop.com</p>
          <p className="text-sm">Phone: +94 XXX XXX XXX</p>

          <div className="flex gap-3 mt-3">
            <span className="cursor-pointer">Facebook</span>
            <span className="cursor-pointer">Instagram</span>
            <span className="cursor-pointer">Twitter</span>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700 text-sm">
        © 2026 Infini Shop. All rights reserved.
      </div>
    </footer>
  );
}
