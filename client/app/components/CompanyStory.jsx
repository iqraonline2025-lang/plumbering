"use client";

import React from "react";
import { History, Target, Heart, ShieldCheck } from "lucide-react";

export default function CompanyStory() {
  const milestones = [
    { year: "2010", event: "Founded with a single van in South London." },
    { year: "2015", event: "Expanded to cover all 32 London boroughs." },
    { year: "2024", event: "Awarded 'London Trade of the Year' for service excellence." },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT: THE TIMELINE STORY */}
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
              <History size={20} />
              <span>Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
              From One Van to <br />
              <span className="text-blue-600 font-black">London's Trusted Name</span>
            </h2>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {milestones.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  {/* Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  {/* Content */}
                  <div className="w-[calc(100%-4rem)] md:w-[45%] p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                    <time className="font-black text-blue-600">{item.year}</time>
                    <p className="text-gray-600 mt-1">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: MISSION & VALUES */}
          <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide every Londoner with access to transparent, professional, and rapid-response plumbing. We believe no one should be left in the cold due to a boiler breakdown or a burst pipe.
              </p>
            </div>

            <hr className="my-10 border-slate-100" />

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Heart className="text-red-500" />
                <h4 className="font-bold text-gray-900">Honest Pricing</h4>
                <p className="text-sm text-gray-500">Upfront quotes. No hidden fees or nonsensical emergency markups.</p>
              </div>
              <div className="space-y-3">
                <ShieldCheck className="text-green-500" />
                <h4 className="font-bold text-gray-900">Guaranteed Work</h4>
                <p className="text-sm text-gray-500">Every job is backed by our 12-month parts and labor warranty.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}