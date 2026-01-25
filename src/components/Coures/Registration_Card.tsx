import React from "react";
import {
  Video,
  GraduationCap,
  Ticket,
  Download,
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
} from "lucide-react";
import { courseData } from "@/courseData";

interface Props {
  courseId: string;
}

export default function Registration_Section({ courseId }: Props) {
  const course = courseData.find((c) => c.id === courseId);

  if (!course) return null;

  return (
    <section className="py-10 md:py-20 bg-white font-['Poppins',_sans-serif]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Attractive Marketing Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-10">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                <Zap size={14} fill="currentColor" />
                Enrollment Open for 2026
              </span>
              <h2 className="text-2xl lg:text-5xl font-bold text-gray-800 leading-[1.15]">
                Master <span className="text-teal-600">{course.name}</span> with Expert Guidance.
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
                Step into a professional career with our industry-standard curriculum. 
                Gain practical skills through real-world projects and direct mentorship.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Industry-Standard Projects",
                "Direct Instructor Support",
                "Lifetime Course Access",
                "Professional Certification",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-800">
                  <CheckCircle2 className="text-teal-600 shrink-0" size={20} />
                  <span className="font-medium text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Urgency Card */}
            <div className="p-5 md:p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="size-9 rounded-full border-2 border-white bg-gray-300"></div>
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-800">1.2k+ Students Joined</p>
              </div>
              <div className="sm:ml-auto flex items-center gap-2 text-rose-600 font-bold text-sm">
                <Clock size={16} />
                <span>Starts: April 25, 2026</span>
              </div>
            </div>
          </div>

          {/* Right Side: Minimalist Registration Card */}
          <div id="enroll" className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px] bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              
              <div className="p-6 border-b border-gray-50 bg-gray-50/30">
                <h3 className="text-lg font-bold text-gray-800 tracking-tight">Registration Details</h3>
                <p className="text-gray-500 text-sm">Secure your spot today</p>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                {/* Features List */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl border border-gray-100 flex items-center justify-center text-teal-600 bg-white shadow-sm">
                      <Video size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">Platform</p>
                      <p className="text-xs text-gray-500">Offline Campus Batch</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl border border-gray-100 flex items-center justify-center text-teal-600 bg-white shadow-sm">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">Certification</p>
                      <p className="text-xs text-gray-500">Verified Achievement</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gray-100" />

                {/* Price Display */}
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Investment</p>
                    <p className="text-3xl font-bold text-gray-800">
                      {course.price.sale || course.price.regular}
                      <span className="text-sm ml-1 text-gray-500 font-medium">{course.price.currency}</span>
                    </p>
                  </div>
                  {course.price.sale && (
                    <p className="text-sm text-gray-400 line-through font-medium mb-1">
                      {course.price.currency} {course.price.regular}
                    </p>
                  )}
                </div>

                {/* Coupon Group */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="flex-1 h-11 rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all"
                  />
                  <button className="px-4 h-11 rounded-lg border border-gray-200 bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
                    Apply
                  </button>
                </div>

                {/* Buttons */}
                <div className="space-y-3 pt-4">
                  <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-teal-600 h-14 text-base font-bold text-white hover:bg-teal-700 shadow-md transition-all active:scale-[0.98]">
                    Enroll Now
                    <ArrowRight size={18} />
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white h-12 text-sm font-bold text-gray-700 hover:border-teal-600 hover:text-teal-600 transition-all">
                    <Download size={16} />
                    Download Outline
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}