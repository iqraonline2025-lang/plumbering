"use client";

import React from "react";
import { Heart, Scale, Clock, ShieldCheck } from "lucide-react";

export default function Values() {
  const values = [
    {
      title: "Radical Honesty",
      desc: "We provide upfront, fixed-fee quotes. If a repair isn't necessary, we'll tell you. No hidden markups, ever.",
      icon: <Scale size={24} />,
      color: "blue"
    },
    {
      title: "Local Reliability",
      desc: "We don't use nationwide call centers. We are Londoners serving Londoners, ensuring we're there when we say we will be.",
      icon: <Clock size={24} />,
      color: "red"
    },
    {
      title: "Uncompromising Safety",
      desc: "Every engineer is Gas Safe registered and undergoes regular safety audits. Your home's safety is our literal job.",
      icon: <ShieldCheck size={24} />,
      color: "green"
    },
    {
      title: "Craftsmanship",
      desc: "We don't just 'patch' problems. We fix them properly using high-quality parts that are built to last.",
      icon: <Heart size={24} />,
      color: "purple"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4">Our DNA</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900">Values that drive every <span className="text-blue-600">call-out.</span></h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {values.map((val, i) => (
            <div key={i} className="flex gap-6 group">
              <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm`}>
                {val.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}