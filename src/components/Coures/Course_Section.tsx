import React from "react";
import {
  ShieldCheck,
  Users2,
  Trophy,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { courseData } from "@/courseData";

interface Props {
  courseId: string;
}

export default function CourseDetailsGrid({ courseId }: Props) {
  const course = courseData.find((c) => c.id === courseId);

  if (!course) {
    return <div className="text-center py-10 text-gray-400 font-['Poppins',sans-serif]">Course details not found.</div>;
  }

  return (
    <section className="py-16  font-['Poppins',sans-serif]">

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Facilities */}
          <div className="bg-linear-to-br from-white to-teal-50/30 p-6 rounded-2xl border border-teal-100/50 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-teal-600">
              <ShieldCheck size={24} />
              <h3 className="font-bold text-sm uppercase tracking-wider">Facilities</h3>
            </div>
            <ul className="space-y-2">
              {course.facilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] lg:text-base text-gray-800">
                  <ChevronRight size={18} className="mt-1 text-teal-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Target Audience */}
          <div className="bg-linear-to-br from-white to-teal-50/30 p-6 rounded-2xl border border-teal-100/50 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-teal-600">
              <Users2 size={24} />
              <h3 className="font-bold text-sm uppercase tracking-wider">Target Audience</h3>
            </div>
            <ul className="space-y-2">
              {course.targetAudience.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] lg:text-base text-gray-800">
                  <ChevronRight size={18} className="mt-1 text-teal-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Skills Outcome */}
          <div className="bg-linear-to-br from-white to-teal-50/30 p-6 rounded-2xl border border-teal-100/50 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-teal-600">
              <Trophy size={24} />
              <h3 className="font-bold text-sm uppercase tracking-wider">Skills Outcome</h3>
            </div>
            <ul className="space-y-2">
              {course.skillsOutcome.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] lg:text-base text-gray-800">
                  <ChevronRight size={18} className="mt-1 text-teal-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Future Roles */}
          <div className="bg-linear-to-br from-white to-teal-50/30 p-6 rounded-2xl border border-teal-100/50 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-teal-600">
              <Briefcase size={24} />
              <h3 className="font-bold text-sm uppercase tracking-wider">Future Roles</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {course.futureRoles?.map((role, i) => (
                <span key={i} className="text-[14px] lg:text-base font-semibold bg-white border border-teal-100 text-gray-800 px-4 py-2 rounded-md shadow-sm">
                  {role}
                </span>
              )) || <span className="text-gray-400 italic">TBA</span>}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}