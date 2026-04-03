"use client";

import React from "react";
import { MessageCircle, Zap } from "lucide-react";

export default function CtaSection() {
  const whatsappNumber = "1234567890";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background with Blue Gradient */}
      <div className="absolute inset-0 bg-blue-600">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-90"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-400/30 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <Zap size={18} className="fill-yellow-300 text-yellow-300" />
          <span className="text-sm font-bold uppercase tracking-wider">Fast 30-Min Arrival</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Need an Emergency <span className="text-blue-200">Plumber Now?</span>
        </h2>
        
        <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
          Don't let a leak turn into a disaster. Our expert team is on standby 24/7 across London to help you immediately.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-black hover:bg-blue-50 transition-all shadow-2xl active:scale-95"
          >
            <MessageCircle size={24} strokeWidth={2.5} />
            CHAT ON WHATSAPP
          </a>
          
          <a
            href="tel:+1234567890"
            className="w-full sm:w-auto text-white font-bold hover:text-blue-200 transition-colors py-4 px-6"
          >
            Or Call: +1 234 567 890
          </a>
        </div>
      </div>
    </section>
  );
}