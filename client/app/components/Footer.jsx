"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Globe,
  MessageCircle,
  Share2
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* SECTION 1: ABOUT */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-black tracking-tighter uppercase group">
              Blue<span className="text-blue-500 group-hover:text-blue-400 transition-colors">print</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              London's premier 24/7 emergency plumbing service. Fast, 
              affordable, and reliable solutions across the capital.
            </p>
            <div className="flex gap-4">
              <div className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <Globe size={18} />
              </div>
              <div className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <MessageCircle size={18} />
              </div>
              <div className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <Share2 size={18} />
              </div>
            </div>
          </div>

          {/* SECTION 2: QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", slug: "/" },
                { name: "About Us", slug: "/about" },
                { name: "Services", slug: "/services" },
                { name: "Contact", slug: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.slug} className="text-slate-400 hover:text-white flex items-center gap-2 group transition-colors">
                    <ArrowRight size={14} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 3: SERVICES */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-4">
              {[
                { name: "Emergency Plumbing", slug: "/emergency" },
                { name: "Bathroom Fitting", slug: "/bathroom" },
                { name: "Drain Cleaning", slug: "/drain" },
                { name: "Heating Systems", slug: "/heating" }
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.slug} className="text-slate-400 hover:text-white transition-colors block">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 4: CONTACT */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3 uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-4">
              <a href="tel:02012345678" className="flex items-start gap-3 group">
                <Phone className="text-blue-500 mt-1" size={20} />
                <div>
                  <p className="font-bold group-hover:text-blue-400 transition-colors">020 1234 5678</p>
                  <p className="text-sm text-slate-400">24/7 Emergency Line</p>
                </div>
              </a>
              <a href="mailto:help@londonplumber.co.uk" className="flex items-start gap-3 group">
                <Mail className="text-blue-500 mt-1" size={20} />
                <p className="text-slate-400 group-hover:text-white transition-colors">help@londonplumber.co.uk</p>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1" size={20} />
                <p className="text-slate-400">London, UK</p>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Blueprint Plumbing. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}