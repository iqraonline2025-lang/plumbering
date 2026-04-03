import React from 'react';
import { Phone, shadow, Trash2, Droplet, ShieldCheck, Clock, Search, CheckCircle } from 'lucide-react';

const Drain = () => {
  const phoneNumber = "0800-555-DRAIN"; 

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Emergency Header */}
      <div className="sticky top-0 z-50 bg-blue-700 p-3 text-white text-center md:hidden shadow-lg">
        <a href="/contact" className="flex items-center justify-center gap-2 font-bold uppercase tracking-wide">
          <Phone fill="white" size={18} /> Schedule Drain Clearing
        </a>
      </div>

      {/* Hero: Focus on "Flow Restored" */}
      <section className="relative bg-slate-900 py-16 px-6 text-white md:py-32">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative mx-auto max-w-5xl">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold uppercase tracking-widest">
            Fast Response • Professional Equipment
          </div>
          
          <h1 className="mb-6 text-4xl font-black md:text-7xl leading-tight">
            Clogged Drains? <br />
            <span className="text-blue-500">Restore Flow Instantly.</span>
          </h1>
          
          <p className="mb-10 max-w-2xl text-lg text-slate-300 md:text-xl leading-relaxed">
            From stubborn sink clogs to main sewer line backups, our technicians use 
            CCTV inspections and high-pressure jetting to clear your pipes for good.
          </p>

          <div className="flex flex-col md:items-start gap-5">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-12 py-5 text-2xl font-black transition-all hover:bg-blue-700 hover:scale-105 shadow-xl shadow-blue-500/20"
            >
              BOOK DRAIN CLEANING
            </a>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-1"><CheckCircle size={16} className="text-blue-500"/> No Call-Out Fee</span>
              <span className="flex items-center gap-1"><CheckCircle size={16} className="text-blue-500"/> Fixed Prices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid: Identifying the Problem */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black md:text-5xl mb-4">Expert Clearing Solutions</h2>
            <p className="text-slate-500">We don't just poke a hole in the clog; we clean the pipe walls.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { 
                icon: <Search size={36} className="text-blue-600" />, 
                title: "CCTV Camera Surveys", 
                desc: "We see exactly what's causing the blockage—roots, grease, or collapsed pipes—before we start." 
              },
              { 
                icon: <Droplet size={36} className="text-cyan-500" />, 
                title: "High-Pressure Jetting", 
                desc: "Industrial-strength water jets that blast away years of debris and tree root intrusion." 
              },
              { 
                icon: <Trash2 size={36} className="text-slate-700" />, 
                title: "Internal Drain Descaling", 
                desc: "Removing limescale and rough build-up from cast iron and PVC pipes to prevent future clogs." 
              },
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 transition hover:shadow-2xl hover:-translate-y-1">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Methodology */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-black">Why Our Method Works</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="shrink-0 mt-1 bg-green-100 p-1 rounded-full text-green-600"><CheckCircle size={20}/></div>
                <p className="text-slate-700"><strong>Clean Workspace:</strong> We use splash guards and floor coverings to leave your home spotless.</p>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 mt-1 bg-green-100 p-1 rounded-full text-green-600"><CheckCircle size={20}/></div>
                <p className="text-slate-700"><strong>Long-Term Fix:</strong> We provide advice on how to keep your drains clear for years.</p>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 mt-1 bg-green-100 p-1 rounded-full text-green-600"><CheckCircle size={20}/></div>
                <p className="text-slate-700"><strong>Fully Insured:</strong> Peace of mind with 100% guaranteed workmanship.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-blue-600 rounded-3xl p-10 text-white text-center">
            <Clock size={48} className="mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-bold mb-2">Need it cleared now?</h3>
            <p className="mb-6 opacity-90">Technicians are available 24/7 for emergency sewer backups.</p>
            <a href="/contact" className="block w-full bg-white text-blue-700 font-black py-4 rounded-xl hover:bg-slate-100 transition">
              CHECK AVAILABILITY
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 px-6 text-center text-slate-500">
        <div className="max-w-6xl mx-auto border-t border-slate-800 pt-10">
          <div className="flex justify-center gap-8 mb-8">
            <ShieldCheck size={32} className="opacity-20" />
            <Clock size={32} className="opacity-20" />
            <Wrench size={32} className="opacity-20" />
          </div>
          <p className="text-white font-black tracking-tighter text-xl mb-2">DRAIN<span className="text-blue-500">CLEAN</span> PROS</p>
          <p className="text-sm">Licensed Drain Specialists • Serving [Your City] & Beyond</p>
          <p className="mt-8 text-xs opacity-30 italic">© 2026 Your Company. Professional drainage services only.</p>
        </div>
      </footer>
    </div>
  );
};

// Internal icon for Wrench used in footer
const Wrench = ({ size, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

export default Drain;