"use client";

import React from "react";
import Image from "next/image";
import { LuQuote } from "react-icons/lu";
import { SectionHeader } from "./SectionHeader";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  feedback: string;
  borderColor: string; // Permanent soft border color
  bgGradient: string; // Soft internal gradient
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahat Chowdhury",
    role: "Full Stack Developer",
    image: "https://i.pravatar.cc/150?u=rahat",
    feedback:
      "The Web Development course changed my career path. The mentors are incredibly supportive, and the projects are real-world based.",
    borderColor: "border-blue-100 hover:border-blue-300",
    bgGradient: "from-white to-blue-50/30",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    role: "Digital Marketer",
    image: "https://i.pravatar.cc/150?u=sarah",
    feedback:
      "Mastering Digital Marketing was smooth thanks to the structured modules. The live campaign analysis was the best part.",
    borderColor: "border-purple-100 hover:border-purple-300",
    bgGradient: "from-white to-purple-50/30",
  },
  {
    id: 3,
    name: "Tanvir Hossain",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?u=tanvir",
    feedback:
      "I loved the hands-on approach in the Graphics Design track. The feedback sessions were instrumental for my portfolio.",
    borderColor: "border-pink-100 hover:border-pink-300",
    bgGradient: "from-white to-pink-50/30",
  },
  {
    id: 4,
    name: "Ayesha Rahman",
    role: "Video Editor",
    image: "https://i.pravatar.cc/150?u=ayesha",
    feedback:
      "Building and launching my first cinematic project was a dream come true. The technical guidance was top-notch.",
    borderColor: "border-emerald-100 hover:border-emerald-300",
    bgGradient: "from-white to-emerald-50/30",
  },
  {
    id: 5,
    name: "Omar Faruq",
    role: "App Developer",
    image: "https://i.pravatar.cc/150?u=omar",
    feedback:
      "The Flutter course helped me launch my own app on the Play Store. Highly recommend it for aspiring developers.",
    borderColor: "border-orange-100 hover:border-orange-300",
    bgGradient: "from-white to-orange-50/30",
  },
  {
    id: 6,
    name: "Nabil Khan",
    role: "Social Media Manager",
    image: "https://i.pravatar.cc/150?u=nabil",
    feedback:
      "Learning how to manage brand accounts professionally gave me the confidence to work with international clients.",
    borderColor: "border-cyan-100 hover:border-cyan-300",
    bgGradient: "from-white to-cyan-50/30",
  },
];

export default function Testimonials() {
  return (
    <section className="lg:py-20 py-10 bg-gray-50/30">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div>
            <SectionHeader
          title="Our Students Say"
          description="Real feedback from students who have successfully completed our professional programs."
        ></SectionHeader>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-3xl bg-linear-to-br border-1 shadow-sm transition-all duration-500 ${item.bgGradient} ${item.borderColor} group`}
            >
              <LuQuote
                className="text-gray-300 group-hover:scale-110 transition-transform duration-300 mb-4"
                size={30}
              />

              <p className="text-gray-600 text-[15px] leading-relaxed mb-8 font-normal italic">
                "{item.feedback}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white border border-gray-100 shadow-inner">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-gray-900 leading-none mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
