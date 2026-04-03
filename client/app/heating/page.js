import React from 'react';
import { Thermometer, Zap, ShieldCheck, Home, Gauge, Info, ChevronRight, PhoneCall } from 'lucide-react';

const Heating = () => {
  const phoneNumber = "0800-555-HEAT";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Top Navigation / CTA */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="font-black text-2xl tracking-tighter">
          CORE<span className="text-orange-600">HEATING</span>
        </div>
        <a 
          href="/contact" 
          className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition-colors flex items-center gap-2"
        >
          <PhoneCall size={16} /> Get a Quote
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-5xl text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            Efficient Heating for <br />
            <span className="text-orange-600 italic">Modern Living.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Upgrade to a high-efficiency heating system that lowers your energy bills 
            and keeps your home perfectly warm, all year round.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 shadow-xl shadow-orange-600/20 transition-all active:scale-95">
              Book Home Survey
            </a>
            <a href="#systems" className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              Compare Systems
            </a>
          </div>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section className="py-12 border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-3xl font-black text-slate-900 tracking-tighter">98%</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Efficiency Rated</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-slate-900 tracking-tighter">10YR</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Parts Warranty</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-slate-900 tracking-tighter">24H</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Install Window</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-slate-900 tracking-tighter">£300+</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Avg. Yearly Saving</p>
          </div>
        </div>
      </section>

      {/* Systems Comparison Section */}
      <section id="systems" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Choose Your System</h2>
            <p className="text-slate-500 text-lg">Not sure which boiler is right? Here is a quick breakdown.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Combi Boilers",
                use: "Best for: Small-Medium Homes",
                desc: "Heats water directly from the mains. No tanks required, saving massive amounts of space.",
                tags: ["Space Saving", "Instant Hot Water"]
              },
              {
                title: "System Boilers",
                use: "Best for: Large Families",
                desc: "Works with a cylinder to store hot water. Ideal for homes with multiple bathrooms used at once.",
                tags: ["High Pressure", "Multi-Outlet"]
              },
              {
                title: "Regular (Heat Only)",
                use: "Best for: Traditional Systems",
                desc: "Perfect for older homes with existing tanks. The most reliable replacement for vintage setups.",
                tags: ["Easy Swap", "Reliable"]
              }
            ].map((sys, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
                <div className="h-12 w-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Home size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{sys.title}</h3>
                <p className="text-orange-600 font-bold text-sm mb-4 uppercase tracking-wide">{sys.use}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{sys.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {sys.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase px-2 py-1 bg-slate-100 rounded-md text-slate-600">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section: Smart Controls */}
      <section className="py-20 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 mb-24 overflow-hidden relative">
        <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
           <Gauge size={400} />
        </div>
        
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Smart Controls for <br/> Ultimate Precision.</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Every system we install comes with Smart Thermostat integration. 
              Control your heating from your phone and reduce waste by up to 30%.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex gap-3 items-center font-bold text-slate-200">
                <ShieldCheck className="text-orange-500" /> App-Controlled Heating
              </li>
              <li className="flex gap-3 items-center font-bold text-slate-200">
                <ShieldCheck className="text-orange-500" /> Room-by-Room Zoning
              </li>
              <li className="flex gap-3 items-center font-bold text-slate-200">
                <ShieldCheck className="text-orange-500" /> Energy Usage Reports
              </li>
            </ul>
            <a href="/contact" className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-orange-500 hover:text-orange-400 transition-colors">
              Request a Tech Demo <ChevronRight size={20} />
            </a>
          </div>
          <div className="bg-slate-800 rounded-3xl aspect-square border border-slate-700 flex items-center justify-center p-12">
             <div className="text-center">
                <Thermometer size={80} className="text-orange-500 mx-auto mb-4" />
                <p className="text-5xl font-black tracking-tighter">21°C</p>
                <p className="text-slate-500 mt-2 font-bold uppercase tracking-widest text-xs">Target Reached</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Zap size={40} className="text-orange-500 mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-6">Ready to upgrade your home?</h2>
          <p className="text-slate-500 mb-10 text-lg">
            Join 2,000+ happy homeowners who saved on their energy bills this year. 
            Free surveys are available within 48 hours.
          </p>
          <a href="/contact" className="bg-slate-900 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-orange-600 transition-all shadow-2xl">
            GET AN ESTIMATE
          </a>
          <div className="mt-20 pt-10 border-t border-slate-100 text-xs text-slate-400 font-medium uppercase tracking-[0.3em]">
             © 2026 Core Heating Solutions • Licensed & Insured
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Heating;