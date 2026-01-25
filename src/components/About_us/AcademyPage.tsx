import { academyData } from "@/academyContent";
import React from "react";

export default function AcademyPage() {
  const {
    about,
    whyChoose,
    courses,
    whoCanJoin,
    admission,
    support,
    framework,
    signature,
  } = academyData;

  return (
    <div className=" min-h-screen pb-32  selection:bg-indigo-100 text-slate-800 relative overflow-hidden">
      {/* Background Aesthetic Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[40%] bg-purple-50 rounded-full blur-[120px] opacity-60"></div>

      <div className="relative z-10">
        
        {/* 1. Header & Signature Section */}
        <section className="max-w-5xl mx-auto px-6 pt-10 lg:pt-16">
          <div className="bg-white/80 backdrop-blur-md rounded-md lg:rounded-[2.5rem] p-6 lg:p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-teal-600 via-indigo-400 to-emerald-400"></div>

            <h1 className="text-sm font-bold tracking-[0.2em] text-teal-600 mb-2 uppercase">
              {about.title}
            </h1>

            <p className="text-lg text-gray-700 font-normal mb-4">
              {about.content}
            </p>

            <div className="pt-4 border-t border-slate-100">
              <div className="inline-block px-4 py-1.5 rounded-md lg:rounded-full bg-indigo-50 text-teal-600 text-xs font-bold uppercase tracking-wider mb-5">
                {signature.badge}
              </div>
              <h2 className="lg:text-2xl text-lg font-semibold text-slate-900 mb-4">
                {signature.title}
              </h2>
              <p className="text-base text-gray-700 font-normal max-w-3xl">
                {signature.content}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Courses - Soft Grid */}
        <section className="max-w-5xl mx-auto px-6 mt-12 lg:mt-16">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="lg:text-2xl text-lg font-bold text-slate-900">
              {courses.title}
            </h2>
            <div className="h-px grow bg-slate-300"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.list.map((item, i) => (
              <div
                key={i}
                className="group cursor-pointer flex items-center gap-5 p-6 bg-white rounded-md lg:rounded-3xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="text-3xl text-teal-600 bg-sky-50 p-3 rounded-2xl group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>

                <span className="text-[15px] text-slate-700 font-medium">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Learning Framework - Modern Compact Cards */}
        <section className="max-w-5xl mx-auto px-6 mt-12 lg:mt-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-lg lg:text-xl font-bold text-slate-900 uppercase">
              {framework.title}
            </h2>
            <div className="h-px grow bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {framework.steps.map((step, i) => (
              <div
                key={i}
                className="group relative p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle Step Number Watermark */}
                <span className="absolute -top-2 -right-1 text-5xl font-black text-slate-50 opacity-50 group-hover:text-teal-50 group-hover:opacity-100 transition-colors">
                  {i + 1}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl text-teal-600">{step.icon}</div>
                    <span className="text-lg font-bold text-teal-600 uppercase ">
                      {step.id}
                    </span>
                  </div>

                  <div className="">
                    <h4 className="text-sm font-bold text-slate-800 ">
                      {step.label}
                    </h4>
                    <p className="text-base text-slate-700 font-normal leading-relaxed">
                      {step.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Why & Support - Clean Dual Tone */}
        <section className="max-w-5xl items-center mx-auto px-6 mt-16 lg:mt-32 grid lg:grid-cols-2 gap-16">
          <div className="bg-white p-5 lg:p-10 rounded-lg lg:rounded-[2rem] border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold mb-3 text-slate-900">
              {whyChoose.title}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {whyChoose.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-slate-600 text-sm"
                >
                  <div className="w-2 h-2  rounded-full bg-teal-600 shadow-[0_0_10px_rgba(52,211,153,0.4)]"></div>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-slate-50 border-l-4 border-indigo-400">
              <p className="font-medium text-teal-600 text-base italic">
                "{whyChoose.motto}"
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                {support.title}
              </h2>
              <p className="text-sm text-teal-500 font-medium tracking-wide uppercase">
                {support.subtitle}
              </p>
            </div>

            <div className="space-y-3">
              {support.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-white/60 rounded-md  shadow-sm"
                >
                  <div className="text-teal-600 text-xl">{item.icon}</div>
                  <span className="text-base text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 p-6 bg-linear-to-r from-slate-700 to-slate-600 text-white rounded-md text-base">
              {support.goal}
            </p>
          </div>
        </section>

        {/* 5. Join & Admission - Modern Cards */}
        <section className="max-w-5xl mx-auto px-6 mt-16 lg:mt-25">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-5 lg:p-8 rounded-xl lg:rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h2 className="text-center text-base font-semibold uppercase  text-teal-600 mb-3">
                {whoCanJoin.title}
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {whoCanJoin.roles.map((role, i) => (
                  <div
                    key={i}
                    className="flex flex-col p-1 py-3 items-center lg:p-6 rounded-md bg-slate-50/50 hover:bg-white hover:shadow-md transition-all   hover:border-slate-100 group"
                  >
                    <div className="text-base lg:text-3xl text-teal-600 mb-1 lg:mb-3 group-hover:scale-110 transition-transform">
                      {role.icon}
                    </div>
                    <span className="text-[15px] lg:text-base font-semibold lg:font-bold text-slate-800 capitalize lg:uppercase ">
                      {role.name}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs font-semibold text-slate-600 mt-5 italic uppercase">
                {whoCanJoin.note}
              </p>
            </div>

            <div className="flex flex-col justify-center gap-6">
              <h2 className="text-xl font-semibold text-slate-900 uppercase mb-1 pl-4 border-l-4 border-teal-400">
                {admission.title}
              </h2>
              {admission.details.map((detail, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-6 p-7 bg-white rounded-md lg:rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all"
                >
                  <div
                    className={`text-4xl ${detail.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                  >
                    {detail.icon}
                  </div>
                  <span className="text-lg text-slate-700 font-medium">
                    {detail.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}
