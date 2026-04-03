"use client";

import React from "react";
import { ShieldCheck, Award, FileCheck, CheckCircle } from "lucide-react";

export default function Certifications() {
  const certs = [
    { name: "Gas Safe Registered", desc: "License #554321", icon: <FileCheck className="text-orange-600" /> },
    { name: "City & Guilds", desc: "Level 3 NVQ Qualified", icon: <Award className="text-blue-600" /> },
    { name: "CIPHE Member", desc: "Inst. of Plumbing", icon: <ShieldCheck className="text-green-600" /> },
    { name: "Verified Expert", desc: "5-Star Rated Team", icon: <CheckCircle className="text-purple-600" /> }
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {certs.map((cert, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 bg-slate-50 rounded-xl">
                {React.cloneElement(cert.icon, { size: 32 })}
              </div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base">{cert.name}</h4>
              <p className="text-xs text-slate-500 font-medium mt-1">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}