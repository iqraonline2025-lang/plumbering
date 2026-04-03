"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "James Wilson",
      location: "Chelsea, London",
      text: "Called at 2 AM for a burst pipe. They were here in 40 minutes and fixed it quickly. Life savers!",
      stars: 5,
    },
    {
      name: "Sarah Ahmed",
      location: "Hackney",
      text: "Very professional team. They gave me a clear quote for my boiler repair and stuck to it. No hidden costs.",
      stars: 5,
    },
    {
      name: "Michael Chen",
      location: "Fulham",
      text: "Best plumbers I've used in London. Friendly, tidy, and they actually know what they're doing.",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
            Customer Feedback
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What Our Clients Say
          </h3>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative"
            >
              {/* Quote Icon Decoration */}
              <Quote className="absolute top-6 right-8 text-blue-50" size={40} />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 italic mb-6 flex-grow leading-relaxed">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-gray-50 pt-6">
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-400 font-medium">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review Badge (Optional but high trust) */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
            <span className="font-bold text-gray-700">Excellent</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-green-500 fill-green-500" />
              ))}
            </div>
            <span className="text-gray-400 text-sm border-l pl-3">4.9/5 on Google</span>
          </div>
        </div>

      </div>
    </section>
  );
}