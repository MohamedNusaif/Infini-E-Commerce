import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Navbar from "./components/Navbar"; 

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
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
