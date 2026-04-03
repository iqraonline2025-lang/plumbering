"use client";

import React from "react";
import { Clock, Tag, Award, CalendarCheck, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Fast Response",
      desc: "We prioritize emergencies and aim to be at your London doorstep within 30-60 minutes.",
      icon: <Clock size={32} className="text-blue-600" />,
    },
    {
      title: "Affordable Pricing",
      desc: "Transparent, upfront quotes with no hidden fees. High-quality service that fits your budget.",
      icon: <Tag size={32} className="text-blue-600" />,
    },
    {
      title: "Experienced Team",
      desc: "Our Gas Safe registered engineers have years of hands-on experience with all plumbing systems.",
      icon: <Award size={32} className="text-blue-600" />,
    },
    {
      title: "24/7 Availability",
      desc: "Plumbing disasters don't follow a 9-5 schedule. We are available every day, even on holidays.",
      icon: <CalendarCheck size={32} className="text-blue-600" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Branding/Image */}
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
              The Best in London
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Why Londoners Trust Our Plumbing Services
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              We’ve built our reputation on being there when others aren’t. 
              Whether it’s a midnight leak or a scheduled boiler service, 
              we treat every home like our own.
            </p>
            <div className="bg-blue-600 p-8 rounded-2xl text-white flex items-center gap-6 shadow-xl">
              <ShieldCheck size={48} />
              <div>
                <p className="text-xl font-bold">12-Month Warranty</p>
                <p className="opacity-90">On all parts and labor provided by our team.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}