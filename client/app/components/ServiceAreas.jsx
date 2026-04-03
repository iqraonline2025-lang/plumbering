"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";

export default function ServiceAreas() {
  // Organized by London regions for better UX/SEO structure
  const areas = [
    {
      region: "Central London",
      districts: ["Westminster", "City of London", "Camden", "Islington"],
    },
    {
      region: "West London",
      districts: ["Kensington", "Chelsea", "Fulham", "Hammersmith", "Ealing"],
    },
    {
      region: "South London",
      districts: ["Wandsworth", "Lambeth", "Southwark", "Greenwich", "Bromley"],
    },
    {
      region: "North & East",
      districts: ["Hackney", "Tower Hamlets", "Barnet", "Enfield", "Stratford"],
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-2">
              <Navigation size={20} />
              <span className="uppercase tracking-widest text-sm">Coverage</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Areas We Cover in <span className="text-blue-600">London</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-md">
            Our engineers are strategically stationed across the capital to ensure a 
            <span className="font-bold text-gray-700"> 30-60 minute response time</span> no matter where you are.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {areas.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="font-black text-gray-900 text-lg border-b border-blue-100 pb-2">
                {group.region}
              </h3>
              <ul className="space-y-2">
                {group.districts.map((district) => (
                  <li key={district} className="group flex items-center gap-2">
                    <MapPin 
                      size={14} 
                      className="text-gray-300 group-hover:text-blue-600 transition-colors" 
                    />
                    <span className="text-gray-600 group-hover:text-blue-600 cursor-default transition-colors">
                      {district}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEO Footer Note */}
        <div className="mt-12 p-6 bg-blue-50 rounded-2xl text-center">
          <p className="text-sm text-blue-800 font-medium">
            Don't see your area? We cover all <strong>Greater London postcodes</strong>. 
            Give us a call to confirm availability.
          </p>
        </div>
      </div>
    </section>
  );
}