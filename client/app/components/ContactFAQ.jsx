"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, Wrench } from "lucide-react";

const faqs = [
  {
    question: "What should I do in a plumbing emergency?",
    answer: "Immediately locate and turn off your main internal stopcock (usually found under the kitchen sink) to stop the water flow. Then, call our 24/7 emergency line. We aim to have an engineer at your London property within 60-90 minutes."
  },
  {
    question: "Why is my boiler losing pressure?",
    answer: "A drop in pressure usually indicates a leak somewhere in the central heating system or a faulty expansion vessel. If you've recently bled your radiators, you may simply need to top up the pressure via the filling loop. If it keeps dropping, you need a professional inspection."
  },
  {
    question: "How much do you charge for a call-out?",
    answer: "We believe in transparent pricing. We do not charge a hidden 'arrival fee.' We provide a fixed diagnostic rate for the first hour, and any further work is quoted upfront so you are always in control of the cost."
  },
  {
    question: "Can you fix a boiler on the first visit?",
    answer: "Our engineers carry a wide range of common universal parts. We successfully complete approximately 80% of boiler repairs on the first visit. If a specialist part is required, we can usually source it within 24 hours."
  },
  {
    question: "Are your plumbers Gas Safe Registered?",
    answer: "Yes, 100%. Any engineer working on gas appliances (boilers, hobs, heaters) is fully Gas Safe Registered. You can ask to see their ID card the moment they arrive at your door for your peace of mind."
  },
  {
    question: "How do I prevent my pipes from freezing in winter?",
    answer: "Ensure all external pipes and those in unheated areas (like lofts) are properly insulated with foam lagging. During extreme cold, keeping your heating on a low constant temperature (around 12-15°C) can prevent water from freezing inside the lines."
  }
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Wrench size={14} />
            <span className="text-xs font-black uppercase tracking-widest">Expert Advice</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Plumbing & Heating <span className="text-blue-600">FAQ</span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium">Quick answers to help you before an engineer arrives.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border transition-all duration-300 rounded-[2rem] overflow-hidden ${
                openIndex === i 
                ? "bg-white shadow-2xl shadow-blue-900/5 border-blue-200" 
                : "bg-white border-slate-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors ${
                  openIndex === i ? "text-blue-600" : "text-slate-900"
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  openIndex === i ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-400"
                }`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 text-slate-600 leading-relaxed text-lg border-t border-slate-50 pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Link */}
        <div className="mt-16 text-center p-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
          <p className="text-slate-600 font-medium mb-4">
            Don't see your problem listed here?
          </p>
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-colors shadow-lg"
          >
            Chat with an Expert
          </button>
        </div>

      </div>
    </section>
  );
}