"use client";

import React from "react";
import { MapPin, Navigation, Clock } from "lucide-react";

export default function ServiceMap() {
  // Standard Google Maps Embed URL for London
  // You can replace "London" with your specific office address for a precise pin
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.1106774044!2d-0.2416815343355201!3d51.5287718409059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* LEFT: Text Content */}
          <div className="lg:w-1/3 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
              <Navigation size={18} />
              <span className="text-sm font-bold uppercase tracking-wider">Fast Coverage</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Serving All of <span className="text-blue-600">London</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Based in the heart of the city, our emergency teams are stationed across every borough to ensure we reach you in **record time**.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-1"><MapPin size={24} /></div>
                <div>
                  <p className="font-bold text-gray-900">Central Hub</p>
                  <p className="text-gray-500">Greater London, United Kingdom</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-1"><Clock size={24} /></div>
                <div>
                  <p className="font-bold text-gray-900">Response Time</p>
                  <p className="text-gray-500">30-60 Minutes Anywhere in London</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Map Embed */}
          <div className="lg:w-2/3 w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-[1.1]" // Subtle styling to match the site
            ></iframe>
            
            {/* Floating Badge on Map */}
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md border border-blue-50 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-gray-700 uppercase">Live Response Active</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}