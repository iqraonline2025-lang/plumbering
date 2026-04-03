"use client";

import React from "react";
import { ChevronRight, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center lg:justify-start gap-2 text-blue-400 text-sm font-medium mb-6">
              <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-slate-400">Our Services</span>
            </nav>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Expert Plumbing & <br />
              <span className="text-blue-500">Heating Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From emergency repairs to planned installations, our Gas Safe registered engineers provide 
              top-rated service across all London boroughs. 
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full">
                <ShieldCheck size={18} className="text-blue-500" />
                <span className="text-white text-sm font-semibold">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full">
                <Clock size={18} className="text-blue-500" />
                <span className="text-white text-sm font-semibold">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full">
                <CheckCircle size={18} className="text-blue-500" />
                <span className="text-white text-sm font-semibold">Gas Safe Registered</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="tel:+442012345678" 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/20 text-center"
              >
                Call Now: 020 1234 5678
              </a>
              <Link 
                href="#all-services" 
                className="w-full sm:w-auto bg-transparent border border-slate-700 hover:border-slate-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all text-center"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Right Side: Trust Card/Image Area */}
          <div className="hidden lg:block relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-3xl shadow-2xl relative z-10">
              <h3 className="text-white text-2xl font-bold mb-4">Request a Service</h3>
              <p className="text-slate-400 mb-6 font-medium">Average response time: <span className="text-green-400">24 Minutes</span></p>
              
              <div className="space-y-4">
                {["Residential Plumbing", "Commercial Services", "Emergency Call-outs", "Boiler Maintenance"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700"></div>
                  ))}
                </div>
                <p className="text-sm text-slate-400 font-medium italic">
                  Join 2,500+ satisfied homeowners this year.
                </p>
              </div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}