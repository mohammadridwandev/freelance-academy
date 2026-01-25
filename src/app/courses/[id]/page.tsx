
import Course_Section from "@/components/Coures/Course_Section";
import InstructorSection from "@/components/Coures/InstructorSection";
import Registration_Card from "@/components/Coures/Registration_Card";
import Testimonials from "@/components/Testimonials";
import { courseData } from "@/courseData";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FaStar,
  FaUsers,
  FaClock,
  FaBookOpen,
  FaMapMarkerAlt,
  FaLayerGroup,
  FaCheck,
} from "react-icons/fa";

export default async function CourseDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courseData.find((c) => c.id === id);

  if (!course) return notFound();

  return (
    <div className="bg-linear-to-b py-10 lg:py-16 from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] min-h-screen">
      <div className="max-w-5xl grid grid-cols-1  items-center gap-12 lg:grid-cols-2 m-auto px-4">
        {/* Left Side: Media & Actions */}
        <div className="space-y-4">
          <Image
            className="rounded-xl shadow-lg w-full object-cover"
            src={course.image}
            width={500}
            height={350}
            alt="course image"
          />
          <div className="gap-4 flex items-center justify-between">
            <button className="rounded-md font-semibold border border-blue-500 text-blue-600 transition-all hover:bg-blue-50 w-full cursor-pointer py-3 text-sm">
              Download Outline
            </button>
            <button className="rounded-md text-white font-semibold bg-linear-to-r from-cyan-500 to-sky-700 w-full shadow-md hover:shadow-lg transition-all cursor-pointer py-3 text-sm">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Right Side: Information */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {course.name}
          </h1>

          <p className="text-slate-600 mb-3 leading-relaxed">
            {course.overview}
          </p>

          {/* Row 1: Course Meta */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-white rounded-full bg-linear-to-r from-fuchsia-600 to-pink-600 text-xs font-bold">
              <FaMapMarkerAlt /> Offline
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-white bg-linear-to-r from-purple-500 to-purple-900 rounded-full text-xs font-bold">
              <FaLayerGroup /> Batch-0
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-violet-200 to-pink-200 rounded-full text-xs font-bold">
              <FaStar className="text-yellow-600" /> 5.0 (4.42)
            </span>
          </div>

          {/* Row 2: Asset Grid (Small) */}
          <div className="flex items-center  gap-4 mb-3">
            <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-slate-100 shadow-xs">
              <FaUsers className="text-sky-600 lg:block hidden" />
              <span className="lg:text-sm text-[13px] font-medium text-slate-700">
                40 Students
              </span>
            </div>

            <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-slate-100 shadow-xs">
              <FaBookOpen className="text-sky-600 lg:block hidden" />
              <span className="lg:text-sm text-[13px] font-medium text-slate-700">
                25 Lessons
              </span>
            </div>

            <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-slate-100 shadow-xs">
              <FaClock className="text-sky-600 lg:block hidden" />
              <span className="lg:text-sm text-[13px] font-medium text-slate-700">
                30+ Hours
              </span>
            </div>
          </div>

          {/* Detailed Info Grid with Soft White Background */}
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-2 p-6 bg-linear-to-r from-violet-100 to-pink-100 rounded-xl border mb-2">
            <h2 className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <FaUsers className="text-blue-500 text-base" /> 378 students
              joined
            </h2>
            <h2 className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <FaBookOpen className="text-emerald-500 text-base" /> 40 total
              lessons
            </h2>
            <h2 className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <FaClock className="text-orange-500 text-base" /> 150+ hours of
              lessons
            </h2>
            <h2 className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <FaCheck className="text-purple-500 text-base" /> 3069 learners
              completed
            </h2>
          </div>

          {/* Pricing Section */}
          <div className="flex items-center gap-3 mt-4 py-2">
            <div className="flex items-center gap-3">

              <h2 className="font-bold  text-teal-600 text-xl lg:text-3xl">Registration Fee: </h2>

              <span className="text-lg font-bold text-gray-900">
                {course.price.sale?.toLocaleString()}
              </span>

              <span className="text-base text-gray-400 line-through">
                {course.price.regular.toLocaleString()}
              </span>
            </div>
          </div>

        </div>
      </div>

         <div>
           <Course_Section courseId={id}></Course_Section>
           <InstructorSection></InstructorSection>
           <Testimonials></Testimonials>
           <Registration_Card courseId={id}></Registration_Card>
         </div>




    </div>



  );
}
