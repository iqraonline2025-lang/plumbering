"use client";

import React from "react";
import { Award, Users, CheckCircle2, Star } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-24 bg-white overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-4">
                <Award size={18} />
                <span className="text-sm font-bold uppercase tracking-wider">Est. 2010</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                The Faces Behind <br />
                <span className="text-blue-600 font-black">London's Reliable</span> Pipes
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-blue-600 pl-6">
              "We started with one van and a mission: to treat every customer’s home like our own. 15 years later, that hasn't changed."
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Gas Safe</p>
                  <p className="text-sm text-gray-500">Reg #554321</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
                  <Star size={24} className="fill-yellow-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">4.9 Stars</p>
                  <p className="text-sm text-gray-500">Google Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE / STATS OVERLAY */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-gray-50">
              <img 
                src="/images/plumber1.jpg" 
                alt="Our Founder and Lead Engineer" 
                className="w-full h-[500px] object-cover"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 -left-8 bg-blue-600 p-6 rounded-2xl text-white shadow-xl hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <Users size={32} />
                  <div>
                    <p className="text-3xl font-black">15,000+</p>
                    <p className="text-xs uppercase font-bold tracking-tighter opacity-80">Jobs Completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-50 rounded-full -z-10 blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}