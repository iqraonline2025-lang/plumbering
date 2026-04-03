import React from 'react';
import { Ruler, Palette, Hammer, Bath, Sparkles, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const Bathroom = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Subtle Top Bar */}
      <div className="bg-slate-900 py-2 px-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
        Design • Installation • Aftercare
      </div>

      {/* Hero Section: Focused on Aspiration */}
      <section className="relative overflow-hidden bg-slate-50 py-20 px-6 md:py-32">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 h-96 w-96 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>

        <div className="mx-auto max-w-6xl grid md:grid-cols-2 items-center gap-12 relative">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold">
              <Sparkles size={16} /> Premium Installation Service
            </div>
            <h1 className="mb-6 text-5xl font-black md:text-7xl leading-[1.1] tracking-tight text-slate-900">
              Your Dream Bathroom, <br />
              <span className="text-blue-600">Expertly Installed.</span>
            </h1>
            <p className="mb-10 text-lg text-slate-600 md:text-xl leading-relaxed">
              From contemporary wet rooms to classic luxury suites, we handle everything—plumbing, 
              tiling, and electrics—so you don't have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-600 shadow-lg shadow-slate-900/10 active:scale-95"
              >
                Request a Free Quote <ArrowRight size={20} />
              </a>
            </div>
          </div>
          
          {/* Enhanced Image Container */}
          <div className="relative group mt-12 md:mt-0">
            {/* Decorative shadow and border layer */}
            <div className="absolute -inset-4 rounded-[2rem] bg-slate-200/50 scale-105 blur-lg opacity-30 group-hover:opacity-100 transition duration-500"></div>

            {/* Main Image Container */}
            <div className="relative aspect-[4/5] rounded-3xl bg-slate-800 shadow-2xl overflow-hidden border-[12px] border-white group-hover:border-blue-50 transition-all duration-300">
                <img 
                  src="/images/bathroom.jpg" 
                  alt="Luxurious newly installed bathroom"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Subtle vignette/overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Hover effect text */}
                <div className="absolute bottom-6 left-6 right-6 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  Precision Craftsmanship
                </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 hidden md:block group-hover:-translate-y-2 transition-transform duration-300">
              <p className="text-4xl font-black text-blue-600 tracking-tighter">100+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Full-Service Process */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl text-center mb-16">
          <h2 className="text-3xl font-black md:text-5xl mb-4">Complete End-to-End Fitting</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">We manage every trade involved in your renovation, ensuring a seamless finish and a single point of contact.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            { 
              icon: <Ruler size={32} />, 
              title: "Survey & Design", 
              desc: "Accurate measurements and layout planning to maximize your space." 
            },
            { 
              icon: <Bath size={32} />, 
              title: "Rip Out & Prep", 
              desc: "Safe removal of your old suite and preparation of walls and floors." 
            },
            { 
              icon: <Hammer size={32} />, 
              title: "Expert Install", 
              desc: "Precision plumbing, high-end tiling, and flawless fixture placement." 
            },
            { 
              icon: <Sparkles size={32} />, 
              title: "Final Finish", 
              desc: "Siliconing, grouting, and a deep clean so it's ready to use instantly." 
            },
          ].map((step, i) => (
            <div key={i} className="group p-8 rounded-2xl transition hover:bg-slate-50 border border-transparent hover:border-slate-200">
              <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Banner */}
      <section className="bg-slate-900 py-16 px-6 text-white rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <ShieldCheck size={40} className="text-blue-400 mx-auto md:mx-0" />
            <h4 className="text-xl font-bold">Guaranteed Quality</h4>
            <p className="text-slate-400 text-sm leading-relaxed">All our installations come with a 24-month workmanship guarantee for total peace of mind.</p>
          </div>
          <div className="space-y-4">
            <Palette size={40} className="text-blue-400 mx-auto md:mx-0" />
            <h4 className="text-xl font-bold">Bespoke Solutions</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Whether it's a tiny ensuite or a spa-like master bathroom, we tailor the build to your budget.</p>
          </div>
          <div className="space-y-4">
            <CheckCircle size={40} className="text-blue-400 mx-auto md:mx-0" />
            <h4 className="text-xl font-bold">All Trades Covered</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Plumbers, tilers, plasterers, and electricians—all under one professionally managed project.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="mx-auto max-w-3xl border border-slate-100 p-12 rounded-[3rem] shadow-sm bg-white">
          <h2 className="text-3xl font-black mb-6 tracking-tight">Ready to start your renovation?</h2>
          <p className="text-slate-500 mb-10 text-lg">Book a free, no-obligation site survey today. We'll discuss your ideas and provide a detailed estimate.</p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white font-bold px-12 py-5 rounded-full hover:bg-blue-700 transition shadow-xl shadow-blue-600/20 active:scale-95"
          >
            GET YOUR FREE QUOTE
          </a>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="py-16 border-t border-slate-100 text-center bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-black text-slate-900 tracking-tighter text-3xl mb-2">BATHROOM<span className="text-blue-600 font-light italic">DESIGN</span></p>
          <p className="text-slate-500 text-sm font-medium">Specialist Fitters serving [Your Area] • Fully Insured</p>
          <div className="mt-10 flex justify-center gap-6 opacity-30">
             <Bath size={20} />
             <Hammer size={20} />
             <Ruler size={20} />
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-slate-400">© 2026 Your Company Name</p>
        </div>
      </footer>
    </div>
  );
};

export default Bathroom;