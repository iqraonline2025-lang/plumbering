import React from 'react';
import { Phone, Clock, Shield, Droplets, HardHat, CheckCircle } from 'lucide-react';

const EmergencyPlumbing = () => {
  const phoneNumber = "1-800-555-PLUM";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Mobile Sticky Header */}
      <div className="sticky top-0 z-50 bg-red-600 p-4 text-white text-center md:hidden shadow-lg">
        <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 font-bold text-lg">
          <Phone fill="white" size={20} /> CALL FOR REPAIR: {phoneNumber}
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-slate-900 py-16 px-6 text-center text-white md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex justify-center uppercase tracking-widest">
            <span className="rounded-full bg-red-500 px-4 py-1 text-xs font-black">
              24/7 Emergency Response
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold md:text-7xl">
            Plumbing Emergency? <br /> 
            <span className="text-blue-400 font-medium italic">We're on the way.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
            Don't let a leak turn into a flood. Our licensed technicians are dispatched 
            immediately to [Your City] and surrounding areas.
          </p>
          
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a 
              href={`tel:${phoneNumber}`} 
              className="group flex items-center justify-center gap-3 rounded-xl bg-red-600 px-10 py-5 text-2xl font-black transition-all hover:bg-red-700 hover:scale-105 active:scale-95 shadow-xl"
            >
              <Phone size={28} /> {phoneNumber}
            </a>
          </div>
          
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Clock size={16} className="text-blue-400" /> Average arrival time: 45–60 minutes
          </p>
        </div>
      </section>

      {/* Features/Trust Section */}
      <section className="border-b border-slate-100 py-12 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs text-slate-500 tracking-tight">Verified</h4>
                <p className="font-semibold text-slate-800">Licensed & Insured</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-green-100 p-3 text-green-600">
                <CheckCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs text-slate-500 tracking-tight">Pricing</h4>
                <p className="font-semibold text-slate-800">Upfront Quotes Only</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-orange-100 p-3 text-orange-600">
                <HardHat size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs text-slate-500 tracking-tight">Expertise</h4>
                <p className="font-semibold text-slate-800">Master Plumbers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl text-slate-900 leading-tight">Fast Solutions for Urgent Problems</h2>
            <div className="mt-4 h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { 
                icon: <Droplets className="text-blue-500" size={32} />, 
                title: "Burst Pipes", 
                desc: "Severe leaks and frozen pipe bursts handled with industrial equipment." 
              },
              { 
                icon: <HardHat className="text-slate-700" size={32} />, 
                title: "Sewer Backups", 
                desc: "Safe, hygienic removal of blockages and immediate restoration of flow." 
              },
              { 
                icon: <Clock className="text-red-500" size={32} />, 
                title: "No Hot Water", 
                desc: "Emergency water heater repair or same-day replacement when you need it." 
              },
            ].map((service, i) => (
              <div key={i} className="group rounded-2xl border border-slate-200 p-8 transition-all hover:bg-slate-900 hover:text-white">
                <div className="mb-6">{service.icon}</div>
                <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                <p className="leading-relaxed opacity-80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Panic Section (Critical Info) */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl rounded-3xl bg-red-50 p-8 md:p-12 border-2 border-dashed border-red-200">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-red-600 text-white p-4 rounded-2xl font-black text-center shrink-0">
              <p className="text-sm uppercase leading-none">Do This</p>
              <p className="text-3xl leading-tight">NOW</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-black text-red-700 uppercase tracking-tight italic">Before we arrive:</h2>
              <ul className="space-y-4 text-lg text-slate-800">
                <li className="flex items-start gap-3 italic">
                  <span className="font-black text-red-600">01.</span> 
                  Locate your main water valve (usually in the basement or near the street) and turn it CLOCKWISE to stop the flow.
                </li>
                <li className="flex items-start gap-3 italic">
                  <span className="font-black text-red-600">02.</span> 
                  Turn off your water heater's circuit breaker or gas supply to prevent burnout or fire.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-slate-900 py-12 px-6 text-center text-slate-400">
        <div className="mx-auto max-w-6xl border-t border-slate-800 pt-8">
          <p className="font-bold text-white mb-2 italic tracking-widest">EMERGENCY PLUMBING PROS</p>
          <p className="text-sm">Available 24/7/365 • Licensed #123456789</p>
          <p className="mt-8 text-xs opacity-50 uppercase tracking-widest">© 2026 Your Company Name</p>
        </div>
      </footer>
    </div>
  );
};

export default EmergencyPlumbing;