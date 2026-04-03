"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react"; // Swapped Phone for MessageCircle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Replace this with your actual phone number (include country code, no + or spaces)
  const whatsappNumber = "+1234567890".replace(/\D/g, ""); // Example: "+1234567890" becomes "1234567890"
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2 border-b border-blue-100" 
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
              BLUE<span className="text-gray-900">PRINT</span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-semibold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* WHATSAPP CTA (Desktop) */}
          <div className="hidden md:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-md active:scale-95"
            >
              <MessageCircle size={18} />
              <span className="font-bold">WhatsApp Us</span>
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-600 p-2"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isOpen ? "max-h-screen border-t border-blue-50" : "max-h-0"
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-xl font-medium text-gray-700"
            >
              {link.name}
            </Link>
          ))}
          {/* WHATSAPP CTA (Mobile) */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg"
          >
            <MessageCircle size={22} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}