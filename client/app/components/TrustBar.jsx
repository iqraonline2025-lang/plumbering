"use client";

import React from "react";
import { Star, ShieldCheck, Clock, UserCheck } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      icon: <Star className="text-yellow-400 fill-yellow-400" size={20} />,
      text: "5-Star Rated",
    },
    {
      icon: <UserCheck className="text-blue-600" size={20} />,
      text: "Certified Engineers",
    },
    {
      icon: <Clock className="text-blue-600" size={20} />,
      text: "30-Min Response",
    },
    {
      icon: <ShieldCheck className="text-blue-600" size={20} />,
      text: "Fully Insured",
    },
  ];

  return (
    <div className="w-full bg-white border-y border-gray-100 py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center gap-3 px-2 transition-transform hover:scale-105"
            >
              <div className="flex-shrink-0 bg-blue-50 p-2 rounded-full">
                {item.icon}
              </div>
              <span className="text-sm md:text-base font-bold text-gray-800 whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}