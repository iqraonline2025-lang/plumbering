"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Award, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
  const stats = [
    { icon: <Users size={20} />, label: "5,000+", sub: "Happy Clients" },
    { icon: <Award size={20} />, label: "15+ Years", sub: "Experience" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT: IMAGE COMPOSITION */}
          <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/plumber1.jpg" // Path to your team or owner photo
                alt="Our Professional Plumbing Team"
                width={600}
                height={700}
                className="object-cover w-full h-[500px]"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-blue-600/90 backdrop-blur-sm p-6 text-white flex justify-around">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="flex justify-center mb-1">{stat.icon}</div>
                    <p className="text-xl font-bold">{stat.label}</p>
                    <p className="text-xs uppercase tracking-wider opacity-80">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 -z-10 rounded-full"></div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="flex-1">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
              About Our Company
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              London's Most Trusted <br /> 
              Plumbing Specialists
            </h3>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded over 15 years ago, we started with a simple mission: to provide Londoners with honest, high-quality plumbing services that don't break the bank.
            </p>
            
            <p className="text-gray-600 mb-8">
              Every member of our team is **Gas Safe Registered** and undergoes rigorous background checks. We don't just fix pipes; we provide peace of mind during household emergencies.
            </p>

            {/* TRUST BADGES / CHECKLIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Gas Safe Registered",
                "Fully Insured (£5m)",
                "Local London Team",
                "No Call-Out Charges"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" size={20} />
                  <span className="font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link 
  href="/about" 
  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95"
>
  Learn More About Us
</Link>
          </div>

        </div>
      </div>
    </section>
  );
}