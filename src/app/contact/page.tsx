"use client";

import { SectionHeader } from "@/components/SectionHeader";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Mail, MessageCircle, MapPin, Phone, Send } from "lucide-react"; // Modern Lucide icons

export default function ContactPage() {
  const services = [
    "Web Development",
    "Digital Marketing",
    "Graphic Design",
    "Video Editing",
    "Others",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    toast.success("Thank you! Message sent.");
  };

  // Updated Contact Details with specific 2026 colorful styling
  const contactDetails = [
    {
      icon: <Mail className="size-5" />,
      label: "Email",
      value: "info@freelanceacademy.com",
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100",
    },
    {
      icon: <MessageCircle className="size-5" />,
      label: "WhatsApp",
      value: "+880 1608-010885",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-100",
    },
    {
      icon: <MapPin className="size-5" />,
      label: "Location",
      value: "Muradpur, Chittagong, BD",
      bg: "bg-rose-50",
      text: "text-rose-600",
      border: "border-rose-100",
    },
  ];

  return (
    <main className="min-h-screen bg-white font-['Poppins',_sans-serif]">
      {/* Header with 2026 Gradient Background */}
      <div className="bg-linear-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] border-b border-gray-100 py-10">
        <SectionHeader
          title="Get in Touch"
          description="Our mentors will get back to you shortly."
        />
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 ite lg:grid-cols-12 gap-10">
          
          {/* Contact Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {contactDetails.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 p-4 rounded-2xl border ${item.border} bg-white transition-all hover:shadow-md group`}
                >
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-md ${item.bg} ${item.text} transition-transform group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-tight">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

    

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xl shadow-slate-100/50">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[13px] font-bold uppercase text-gray-700 ml-1">Name</label>
                  <input
                    name="name"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-md text-sm outline-none focus:border-blue-400 focus:bg-white transition-all"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[13px] font-bold uppercase text-gray-700 ml-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-md text-sm outline-none focus:border-blue-400 focus:bg-white transition-all"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[13px] font-bold uppercase text-gray-700 ml-1">Interest</label>
                <select
                  name="service"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-md text-sm outline-none focus:border-blue-400 focus:bg-white transition-all text-gray-600 appearance-none"
                >
                  <option value="">Select Service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[13px] font-bold uppercase text-gray-700 ml-1">Message</label>
                <textarea
                  name="message"
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-md text-sm outline-none focus:border-blue-400 focus:bg-white transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button className="w-full bg-slate-900 text-white py-4 rounded-md text-sm font-bold hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-slate-200">
                <Send className="size-4" />
                Send Message
              </button>

            </form>
          </div>


        </div>
      </div>
    </main>
  );
}