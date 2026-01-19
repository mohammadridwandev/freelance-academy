"use client"; // Required for useState

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const services = ["Web Development", "Digital Marketing", "Graphic Design", "Video Editing", "Others"];

  // 1. Simple state for all fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  // 2. Simple handler for all inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    toast.success("Thank you! Message sent.");
  };


  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Get in Touch</h1>
          <p className="mt-1 text-sm text-gray-500 max-w-sm mx-auto">Our mentors will get back to you shortly.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h2>
            {[
              { icon: <FaEnvelope />, label: "Email", value: "info@freelanceacademy.com", color: "blue" },
              { icon: <FaWhatsapp />, label: "WhatsApp", value: "+880 1608-010885", color: "green" },
              { icon: <FaMapMarkerAlt />, label: "Location", value: "Muradpur Chittagong Bangladesh", color: "gray" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100">
                <div className={`flex size-12 items-center justify-center rounded-full bg-${item.color}-50 text-${item.color}-600`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                  <p className="text-sm text-gray-600">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Simple Form Function */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  name="name"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500" 
                  placeholder="Full Name" 
                />
                <input 
                  name="email"
                  type="email"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500" 
                  placeholder="Email Address" 
                />
              </div>

              <select 
                name="service"
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500 text-gray-500"
              >
                <option value="">Select Service</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>

              <textarea 
                name="message"
                onChange={handleChange}
                required
                rows={4} 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500 resize-none" 
                placeholder="Message" 
              />

              <button className="w-full bg-gray-900 text-white py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}