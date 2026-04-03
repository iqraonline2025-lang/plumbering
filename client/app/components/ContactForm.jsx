"use client";

import React, { useState } from "react";
import { Send, User, Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // CONFIG: Your business number (Country code + number, no spaces/plus)
    const businessNumber = "442012345678";

    // Create the formatted message
    const text = `*New Website Inquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Message:* ${formData.message}`;

    // Open WhatsApp URL
    window.open(`https://wa.me/${businessNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="py-20 bg-white" id="contact-form">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 shadow-inner border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Send a Message</h2>
            <p className="text-slate-500 font-medium">Fill this out to start a WhatsApp chat with our team.</p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4 mb-2 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    required
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-slate-900 placeholder:text-slate-300"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4 mb-2 block">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    required
                    placeholder="07123 456789"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-slate-900 placeholder:text-slate-300"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4 mb-2 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-slate-900 placeholder:text-slate-300"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Message Field - FIXED TEXT VISIBILITY */}
            <div className="relative">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4 mb-2 block">How can we help?</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-6 text-slate-400" size={18} />
                <textarea
                  name="message"
                  value={formData.message}
                  required
                  rows="4"
                  placeholder="Tell us about the issue..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none text-slate-900 placeholder:text-slate-300"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-3 group"
            >
              <span>SEND TO WHATSAPP</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}