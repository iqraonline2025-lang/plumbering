import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "April 2026";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Simple Header */}
      <div className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-6 hover:text-blue-700 transition-colors">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-slate-500 font-medium uppercase tracking-widest text-sm">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12">
        <div className="grid gap-12 md:grid-cols-[1fr_250px]">
          {/* Main Content */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 space-y-10">
            
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Eye size={20} /></div>
                <h2 className="text-2xl font-bold">Introduction</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                At <strong>Blueprint Plumbing</strong>, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information when you use our website and services. By using our site, you agree to the terms outlined here.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><FileText size={20} /></div>
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We only collect information that is necessary to provide our services to you, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li><strong>Contact Details:</strong> Name, email address, and phone number when you fill out a quote form.</li>
                <li><strong>Service Address:</strong> Your location to dispatch engineers for repairs or surveys.</li>
                <li><strong>Usage Data:</strong> Information on how you interact with our website via cookies.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Lock size={20} /></div>
                <h2 className="text-2xl font-bold">How We Use Your Data</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Your information is used strictly for:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Providing and managing your requested plumbing or heating services.</li>
                <li>Sending appointment reminders and service updates.</li>
                <li>Internal record keeping and billing.</li>
              </ul>
              <p className="mt-4 text-slate-600 font-bold">
                We never sell your personal data to third-party marketing companies.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><ShieldCheck size={20} /></div>
                <h2 className="text-2xl font-bold">Data Security</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. Our website uses SSL (Secure Sockets Layer) encryption to ensure that all data passed between our web server and your browser remains private and integral.
              </p>
            </section>

            <section className="pt-10 border-t border-slate-100">
              <h2 className="text-xl font-bold mb-4">Contact Our Data Officer</h2>
              <p className="text-slate-600 mb-6">
                If you have any questions about this Privacy Policy or wish to request the deletion of your data, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="font-bold">Email: privacy@blueprintplumbing.co.uk</p>
                <p className="text-slate-500 mt-1">Response time: Usually within 48 hours</p>
              </div>
            </section>

          </div>

          {/* Sidebar / Quick Nav */}
          <div className="hidden md:block">
            <div className="sticky top-24 space-y-6">
              <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-blue-200">
                <ShieldCheck size={32} className="mb-4" />
                <h3 className="font-bold text-lg mb-2">GDPR Compliant</h3>
                <p className="text-blue-100 text-sm">We strictly follow UK Data Protection regulations to keep you safe.</p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                <nav className="flex flex-col gap-3 text-sm text-slate-500 font-medium">
                  <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
                  <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Support</Link>
                  <Link href="/about" className="hover:text-blue-600 transition-colors">Company Info</Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;