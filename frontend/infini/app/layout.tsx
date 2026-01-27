import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Navbar from "./components/Navbar"; 
import { CartProvider } from "./context/CartContext";


export const metadata: Metadata = {
  title: "Infini",
  description: "Welcome to Infini",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      
      <body>
        <CartProvider>
        <Navbar/>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}
