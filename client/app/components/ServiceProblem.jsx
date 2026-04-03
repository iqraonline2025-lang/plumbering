"use client";

import React from "react";
import { AlertTriangle, Droplets, Flame, ThermometerSnowflake } from "lucide-react";

export default function ServiceProblems() {
  const problems = [
    {
      title: "Burst Pipes",
      desc: "A burst pipe can cause thousands in water damage in minutes. We provide immediate isolation and repair to protect your flooring and electrics.",
      icon: <AlertTriangle className="text-red-500" size={28} />,
      urgency: "Emergency"
    },
    {
      title: "Stubborn Leaks",
      desc: "Dripping taps or hidden structural leaks aren't just annoying—they lead to mold and high water bills. We use non-invasive leak detection.",
      icon: <Droplets className="text-blue-500" size={28} />,
      urgency: "High Priority"
    },
    {
      title: "Boiler & Heating Failures",
      desc: "No hot water or a freezing home? Our Gas Safe engineers diagnose pump failures, motorized valve issues, and pilot light errors fast.",
      icon: <ThermometerSnowflake className="text-orange-500" size={28} />,
      urgency: "Same Day"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
            Common Urgent Issues
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Don't let a small leak become <br /> 
            <span className="text-red-600 font-black">a major disaster.</span>
          </h3>
          <p className="text-gray-600 text-lg">
            Plumbing problems rarely happen at a convenient time. We specialize in resolving the most 
            stressful household issues before they cause permanent damage to your property.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className={`text-[10px] uppercase font-black px-3 py-1 rounded-full tracking-widest ${
                  item.urgency === 'Emergency' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                }`}>
                  {item.urgency}
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Professional Tip */}
        <div className="mt-12 p-6 bg-blue-600 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <p className="font-bold text-lg">Pro Tip: Know where your Stopcock is!</p>
            <p className="opacity-90 text-sm">Turning off your main water valve is the first step in any burst pipe emergency.</p>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold whitespace-nowrap hover:bg-blue-50 transition-colors">
            I Need Help Now
          </button>
        </div>

      </div>
    </section>
  );
}