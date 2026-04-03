import React from 'react';
// Note: Removed AlertTriangle from imports since you have a custom fallback at the bottom
import { Phone, Flame, ShieldAlert, ThermometerSnowflake, Wrench, CheckCircle, Clock } from 'lucide-react';

const Boiler = () => {
  const phoneNumber = "0800-555-HEAT"; 

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Urgent Mobile Header - Now points to Contact Page */}
      <div className="sticky top-0 z-50 bg-orange-600 p-3 text-white text-center md:hidden shadow-md">
        <a href="/contact" className="flex items-center justify-center gap-2 font-bold uppercase tracking-tight">
          <Phone fill="white" size={18} /> Book Emergency Repair
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-slate-900 py-16 px-6 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6 text-orange-400 font-bold uppercase tracking-widest text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            24/7 No-Heat Emergency Response
          </div>
          
          <h1 className="mb-6 text-4xl font-black md:text-6xl leading-tight">
            Boiler Broken Down? <br />
            <span className="text-orange-500 underline decoration-white/20">We’ll Fix It Today.</span>
          </h1>
          
          <p className="mb-10 max-w-2xl text-lg text-slate-300 md:text-xl mx-auto md:mx-0">
            Don't freeze tonight. Our Gas Safe registered engineers provide rapid boiler repairs, 
            diagnostics, and restoration of hot water across [Your City].
          </p>

          <div className="flex flex-col md:items-start gap-4">
            {/* UPDATED: Primary button now goes to /contact. Secondary button removed. */}
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-orange-600 px-12 py-5 text-2xl font-black transition hover:bg-orange-700 shadow-xl shadow-orange-900/20"
            >
              BOOK REPAIR NOW
            </a>
            <p className="text-slate-400 text-sm italic">Immediate dispatch upon contact</p>
          </div>
        </div>
      </section>

      {/* Common Boiler Issues Grid */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-center">Common Emergencies We Resolve</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { 
                icon: <ThermometerSnowflake size={32} className="text-blue-500" />, 
                title: "No Heating or Hot Water", 
                desc: "Full diagnostics to find out why your system is cold and get it running again." 
              },
              { 
                icon: <Flame size={32} className="text-orange-500" />, 
                title: "Pilot Light Problems", 
                desc: "Faulty thermocouples or ignition issues fixed on the spot." 
              },
              { 
                icon: <AlertTriangle size={32} className="text-red-500" />, 
                title: "Strange Noises & Leaks", 
                desc: "Kettling, banging, or water leaking from the boiler casing addressed immediately." 
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Safety Protocol */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-4xl bg-red-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <ShieldAlert size={48} />
            <h2 className="text-3xl font-black uppercase">Smell Gas?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-lg font-medium">
            <ul className="space-y-4">
              <li className="flex gap-3">✅ Extinguish all naked flames</li>
              <li className="flex gap-3">✅ Open all windows and doors</li>
              <li className="flex gap-3">✅ Turn off the gas at the meter</li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-3">❌ Don't smoke or strike matches</li>
              <li className="flex gap-3">❌ Don't turn light switches ON/OFF</li>
              <li className="flex gap-3">❌ Don't use a phone inside the house</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-16">Why Local Homeowners Trust Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <CheckCircle className="mx-auto text-green-500 mb-2" size={40} />
              <p className="font-bold tracking-tight">Fixed Price Diagnostics</p>
            </div>
            <div>
              <Clock className="mx-auto text-orange-500 mb-2" size={40} />
              <p className="font-bold tracking-tight">60 Min Response</p>
            </div>
            <div>
              <Wrench className="mx-auto text-slate-400 mb-2" size={40} />
              <p className="font-bold tracking-tight">All Brands Repaired</p>
            </div>
            <div>
              <ShieldAlert className="mx-auto text-blue-500 mb-2" size={40} />
              <p className="font-bold tracking-tight">Fully Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6 text-center text-slate-500 border-t border-slate-800">
        <p className="text-white font-bold mb-4 italic tracking-widest underline decoration-orange-500">BOILER REPAIR PROS</p>
        <p className="text-sm">24-Hour Emergency Dispatch Center • [Your Area Coverage]</p>
        <p className="mt-8 text-[10px] uppercase opacity-40">Always use a qualified engineer for gas appliance repairs.</p>
      </footer>
    </div>
  );
};

// Simple AlertTriangle fallback icon
const AlertTriangle = ({ size, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>
  </svg>
);

export default Boiler;