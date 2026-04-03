"use client";

import React from "react";
import Image from "next/image";
import { Phone, FileText, CheckCircle } from "lucide-react";

export default function Hero() {
  const whatsappNumber = "1234567890";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <CheckCircle size={18} className="text-blue-600" />
              <span className="text-sm font-bold uppercase tracking-wide">Available Right Now</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              24/7 Emergency <span className="text-blue-600">Plumber in London</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Fast, reliable plumbing services at affordable prices. From burst pipes to boiler repairs, we're at your door in 60 minutes or less.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
              >
                <Phone size={20} />
                Call Now
              </a>
              
            </div>

            {/* TRUST BADGE (Optional but helpful for London Plumbers) */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 grayscale opacity-70">
               <span className="text-sm font-semibold text-gray-400">Trusted by over 5,000+ Londoners</span>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
            {/* Background Accent Decor */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/plumber.jpg" // Add your image to /public folder
                alt="24/7 Emergency Plumber London"
                width={600}
                height={500}
                className="object-cover w-full h-[400px] lg:h-[500px]"
                priority // Ensures this image loads fast (Above the fold)
              />
              
              {/* Floating Stat Box */}
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl border border-blue-50 hidden md:block">
                <p className="text-blue-600 font-extrabold text-2xl">60 Min</p>
                <p className="text-gray-500 text-xs font-bold uppercase">Average Response</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}