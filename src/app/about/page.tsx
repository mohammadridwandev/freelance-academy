import React from 'react';
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaHeadset } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-10 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent tracking-tight mb-4 leading-tight">
              Empowering the Next Generation of Digital Professionals
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-6">
              Leading skill development academy in Muradpur. We bridge the gap between education and industry 
              with project-based training in Web Development, Design, and Marketing.
            </p>
            
            {/* Compact Feature List */}
            <div className="flex flex-wrap gap-2 mb-3">

              <div className="flex items-center gap-2 p-2 px-3 rounded-lg border border-gray-100 bg-gray-50/50">
                <FaGraduationCap className="text-blue-600 size-3.5" />
                <span className="text-[13px] font-semibold text-gray-700 uppercase tracking-wide">Practical Syllabus</span>
              </div>

              <div className="flex items-center gap-2 p-2 px-3 rounded-lg border border-gray-100 bg-gray-50/50">
                <FaBriefcase className="text-green-600 size-3.5" />
                <span className="text-[13px] font-semibold text-gray-700 uppercase tracking-wide">Market Guidance</span>
              </div>

            </div>

            {/* Tight Location Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-md border border-gray-100">
              <FaMapMarkerAlt className="text-red-500 size-3" />
              <span className="text-base font-semibold text-gray-500 uppercase ">
                Muradpur, Chittagong
              </span>
            </div>

          </div>

          {/* Right Side: Visual Stats Grid (Reduced Padding) */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-3">
            <div className="p-6 bg-blue-600 rounded-2xl text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-1">500+</h3>
              <p className="text-blue-100 text-[13px] uppercase font-semibold tracking-widest">Students</p>
            </div>
            
            <div className="p-6 bg-gray-900 rounded-2xl text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-1">15+</h3>
              <p className="text-gray-400 text-[13px] uppercase font-semibold tracking-widest">Mentors</p>
            </div>
            
            <div className="col-span-2 p-5 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
              <div className="size-10 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                <FaHeadset className="size-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">24/7 Support Lab</h3>
                <p className="text-[13px] text-gray-500 leading-tight">
                  Lifetime access to our physical practice lab.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;