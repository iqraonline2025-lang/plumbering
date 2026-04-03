"use client";

import React from "react";
import { Phone, MessageSquare, Clock, ShieldCheck } from "lucide-react";

export default function ContactHero() {
  // CONFIG: Replace with your actual business number (no + or spaces for the link)
  const businessNumber = "442012345678"; 
  const displayPhone = "020 1234 5678";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-4 py-2 rounded-full mb-8 animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-green-700 text-xs font-black uppercase tracking-widest">
              Engineers Active: 24/7 Live
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            How can we <span className="text-blue-600">help today?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
            Whether it's a 3 AM emergency or a planned renovation, our London-wide team 
            is standing by. Reach out via phone for the fastest response.
          </p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Phone Card */}
            <a href={`tel:${displayPhone}`} className="group p-8 bg-blue-600 rounded-[2rem] text-white shadow-xl shadow-blue-200 transition-transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Now</h3>
              <p className="text-blue-100 text-sm mb-4">Average response: 30-60 mins</p>
              <p className="text-2xl font-black">{displayPhone}</p>
            </a>

            {/* WhatsApp/Message Card - FULLY FIXED */}
            <a 
              href={`https://wa.me/${businessNumber}?text=Hi,%20I%20have%20a%20plumbing%20emergency%20and%20need%20help!`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-slate-900 rounded-[2rem] text-white shadow-xl transition-transform hover:-translate-y-2 cursor-pointer block"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-slate-400 text-sm mb-4">Chat with an engineer now</p>
              <div className="bg-white text-slate-900 px-6 py-2 rounded-lg font-bold text-sm inline-block group-hover:bg-blue-50 transition-colors">
                Open WhatsApp
              </div>
            </a>

            {/* Support Card */}
            <div className="group p-8 bg-white border border-slate-200 rounded-[2rem] text-slate-900 shadow-sm transition-transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Hours</h3>
              <p className="text-slate-500 text-sm mb-1">Emergency: 24/7</p>
              <p className="text-slate-500 text-sm">Office: 8am - 6pm</p>
            </div>

          </div>

          {/* Trust Footer */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-blue-500" />
              <span className="text-sm font-bold uppercase tracking-wider">Gas Safe Registered</span>
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full hidden md:block"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-blue-500" />
              <span className="text-sm font-bold uppercase tracking-wider">Public Liability Insured</span>
            </div>
          </div>

        </div>
      </div>

      {/* Background Accent Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[50%] bg-gradient-to-t from-blue-50/50 to-transparent -z-10"></div>
    </section>
  );
}