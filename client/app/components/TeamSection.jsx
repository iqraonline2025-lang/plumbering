"use client";

import React from "react";
import { BadgeCheck, Star, Wrench, HardHat } from "lucide-react";
import Link from "next/link";

// --- TEAM DATA ---
const TEAM_MEMBERS = [
  {
    name: "Dave Richardson",
    role: "Lead Gas Engineer",
    bio: "12 years experience. Specialist in complex boiler diagnostics and high-efficiency systems.",
    specialty: "Boiler Expert",
    image: "/images/team1.jpg", 
  },
  {
    name: "Mike Jenkins",
    role: "Senior Plumber",
    bio: "Master of leak detection and bathroom renovations. Known for his meticulous attention to detail.",
    specialty: "Leak Specialist",
    image: "/images/team2.jpg",
  },
  {
    name: "Marcus Thorne",
    role: "Emergency Response",
    bio: "Our rapid-response lead. If you have a burst pipe at 3 AM, Marcus is usually the one at your door.",
    specialty: "24/7 Rapid Fix",
    image: "/images/team3.jpg",
  }
];

// --- SUB-COMPONENT: TEAM CARD ---
const TeamCard = ({ member }) => (
  <div className="group relative">
    {/* Image Container */}
    <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden mb-6 shadow-xl border-4 border-white">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Floating Specialty Badge */}
      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-blue-50">
        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
          <BadgeCheck size={14} />
          {member.specialty}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Info Area */}
    <div className="space-y-3 px-2">
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-black text-gray-900">{member.name}</h4>
        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold text-gray-700">5.0</span>
        </div>
      </div>
      
      <p className="text-blue-600 font-extrabold text-xs uppercase tracking-widest italic">
        {member.role}
      </p>
      
      <p className="text-gray-500 leading-relaxed text-sm">
        {member.bio}
      </p>

      <div className="pt-4 flex gap-3">
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <HardHat size={16} />
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <Wrench size={16} />
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
export default function TeamSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">
              Expert Personnel
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              The Engine Behind <br />
              <span className="text-blue-600">Our Reputation</span>
            </h3>
          </div>
          <p className="text-gray-500 md:max-w-xs text-sm leading-relaxed border-l-2 border-blue-100 pl-6">
            Unlike agencies, we employ our team directly. Every engineer is Gas Safe registered and vetted.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        {/* Call to Action Card */}
        <div className="mt-24 relative rounded-[3rem] bg-slate-900 p-8 md:p-16 overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-3xl font-black text-white mb-2">Want to work with us?</h4>
              <p className="text-slate-400 font-medium">We're always looking for top-tier London talent.</p>
            </div>
            <Link 
  href="/contact" 
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-lg active:scale-95 text-center"
>
  Join the Team
</Link>
          </div>
          
          {/* Background Design */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -ml-20 -mb-20"></div>
        </div>
      </div>
    </section>
  );
}