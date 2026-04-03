import React from 'react';
import Link from 'next/link';
import { Scale, Clock, CreditCard, AlertTriangle, ArrowLeft, ShieldCheck } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = "April 2026";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-6 hover:text-blue-700 transition-colors">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-slate-500 font-medium uppercase tracking-widest text-sm">
            Effective Date: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          
          {/* Main Content Area */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 space-y-12">
            
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><Scale size={20} /></div>
                <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                By accessing our website or booking a service with <strong>Blueprint Plumbing</strong>, you agree to be bound by these Terms of Service. Please read them carefully before scheduling an engineer.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><CreditCard size={20} /></div>
                <h2 className="text-2xl font-bold">2. Quotes & Pricing</h2>
              </div>
              <div className="text-slate-600 space-y-4">
                <p>All quotes provided via the website or telephone are estimates based on the information provided by the customer.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Fixed Pricing:</strong> For standard repairs, a fixed price will be agreed upon before work commences.</li>
                  <li><strong>Hourly Rates:</strong> For investigative work or complex leaks, we charge a standard hourly rate (minimum 1 hour).</li>
                  <li><strong>Materials:</strong> Any parts or materials required will be charged in addition to labor unless otherwise stated.</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 p-2 rounded-lg text-red-600"><Clock size={20} /></div>
                <h2 className="text-2xl font-bold">3. Cancellations</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We require at least <strong>24 hours notice</strong> for the cancellation of scheduled non-emergency work. For emergency call-outs, if an engineer is already dispatched, a minimum call-out fee may apply.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg text-green-600"><ShieldCheck size={20} /></div>
                <h2 className="text-2xl font-bold">4. Our Workmanship Guarantee</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We take pride in our craft. All labor performed by Blueprint Plumbing is covered by a <strong>12-month guarantee</strong>. This does not cover secondary faults or pre-existing issues with your plumbing system identified during the visit.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-100 p-2 rounded-lg text-slate-600"><AlertTriangle size={20} /></div>
                <h2 className="text-2xl font-bold">5. Limitation of Liability</h2>
              </div>
              <p className="text-slate-600 leading-relaxed italic">
                Blueprint Plumbing is not liable for any damage caused by pre-existing plumbing defects, nor for any loss of profit or indirect losses resulting from a system failure beyond our immediate repair scope.
              </p>
            </section>

          </div>

          {/* Sidebar Info Boxes */}
          <div className="space-y-6">
            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <h3 className="font-bold text-xl mb-4">Questions?</h3>
              <p className="text-slate-400 text-sm mb-6">If you need clarification on any of these terms, please contact our office team.</p>
              <Link 
                href="/contact" 
                className="block w-full bg-blue-600 text-center py-3 rounded-xl font-bold hover:bg-blue-500 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">Helpful Links</h4>
              <nav className="flex flex-col gap-3 text-sm text-slate-500 font-medium">
                <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                <Link href="/about" className="hover:text-blue-600 transition-colors">Our Team</Link>
                <Link href="/heating-systems" className="hover:text-blue-600 transition-colors">Services</Link>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;