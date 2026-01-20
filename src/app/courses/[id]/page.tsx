import { courseData } from "@/courseData";
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaCheck, FaArrowRight, FaCalendarAlt, FaLaptopCode } from "react-icons/fa";

export default async function CourseDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courseData.find((c) => c.id === id);

  if (!course) return notFound();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {course.name}
              </h1>
              <p className="text-lg font-medium text-blue-600 mb-6 uppercase tracking-wide">
                {course.courseTitle}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                  <FaCalendarAlt className="text-gray-400" />
                  <span className="text-sm font-semibold">{course.stats.classes}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                  <FaLaptopCode className="text-gray-400" />
                  <span className="text-sm font-semibold">{course.stats.projects}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gray-900">
                  {course.price.currency} {course.price.sale || course.price.regular}
                </span>
                {course.price.sale && (
                  <span className="text-lg text-gray-400 line-through font-medium">
                    {course.price.regular}
                  </span>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative aspect-video rounded-xl overflow-hidden shadow-md border-4 border-white">
              <Image
                src={course.image}
                alt={course.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Left Content (2/3) */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-600 w-fit pb-1">Course Overview</h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {course.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">What You Will Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.skillsOutcome.map((skill, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-800 font-medium text-sm md:text-base">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (1/3) */}
            <div className="space-y-8">
              {/* Enrollment Box */}
              <div className="bg-gray-900 p-6 rounded-2xl text-white shadow-xl">
                <h4 className="text-lg font-bold mb-4">Start Your Career Today</h4>
                <ul className="space-y-3 mb-8">
                  {course.facilities.map((fac, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                      <FaArrowRight className="text-blue-400 text-xs" />
                      {fac}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg uppercase tracking-wider">
                  Enroll Now
                </button>
              </div>

              {/* Target Audience */}
              <div className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm">
                <h4 className="text-lg font-bold mb-4">Who This Is For</h4>
                <div className="flex flex-col gap-3">
                  {course.targetAudience.map((audience, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {audience}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}