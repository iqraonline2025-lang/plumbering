"use client";

import React from "react";
import { Check, Zap, Shield, PhoneCall } from "lucide-react";

export default function ServiceSolutions() {
  const solutions = [
    {
      category: "Emergency Repairs",
      items: ["Burst Pipe Repair", "Flood Extraction", "Major Leak Plugging", "Water Main Issues"]
    },
    {
      category: "Heating & Gas",
      items: ["Boiler Breakdown Fix", "Radiator Bleeding", "Gas Leak Detection", "Thermostat Repair"]
    },
    {
      category: "General Plumbing",
      items: ["Toilet Unblocking", "Tap Replacements", "Shower Repairs", "Saniflo Services"]
    }
  ];

  return (
    <section id="all-services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner: The "Fast" Promise */}
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 mb-20 shadow-xl shadow-blue-200">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <Zap size={14} className="fill-yellow-300 text-yellow-300" />
              Rapid Response
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-2 italic">On-Site in 30-60 Mins</h3>
            <p className="text-blue-100 text-lg">We have local engineers stationed across London ready to move now.</p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a href="tel:+442012345678" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-black text-center flex items-center justify-center gap-2 hover:bg-blue-50 transition-all">
              <PhoneCall size={20} />
              CALL NOW
            </a>
          </div>
        </div>

        {/* The List of Fixes */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">What We Fix</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Our fully equipped vans carry 90% of common spare parts, allowing us to complete most repairs on the first visit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((group, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-2">
                <Shield size={20} />
                {group.category}
              </h4>
              <ul className="space-y-4">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check size={14} className="text-green-600" strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}