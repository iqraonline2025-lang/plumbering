"use client";

import React from "react";
import Link from "next/link";
import { Droplets, Flame, Wrench, Thermometer, Construction, shadow } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Emergency Plumbing",
      desc: "Burst pipes, major leaks, or overflowing toilets. We arrive in under 60 minutes.",
      icon: <Wrench className="text-blue-600" size={32} />,
      href: "/emergency",
    },
    {
      title: "Boiler Repair",
      desc: "No hot water or heating? Our Gas Safe engineers fix all major boiler brands.",
      icon: <Flame className="text-blue-600" size={32} />,
      href: "/boiler",
    },
    {
      title: "Drain Cleaning",
      desc: "High-pressure jetting to clear stubborn blockages in sinks, toilets, and external drains.",
      icon: <Droplets className="text-blue-600" size={32} />,
      href: "/drain",
    },
    {
      title: "Bathroom Fitting",
      desc: "Complete installations from tiling to luxury shower units and designer taps.",
      icon: <Construction className="text-blue-600" size={32} />,
      href: "/bathroom",
    },
    {
      title: "Heating Systems",
      desc: "Radiator power flushing and smart thermostat installations for a warmer home.",
      icon: <Thermometer className="text-blue-600" size={32} />,
      href: "/heating",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
            Our Expertise
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Professional Plumbing Services
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-6 inline-block p-4 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.desc}
              </p>
              
              <Link 
                href={service.href}
                className="text-blue-600 font-bold inline-flex items-center gap-2 hover:underline"
              >
                Learn More 
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}