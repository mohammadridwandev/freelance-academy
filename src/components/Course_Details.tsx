import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { courseData } from "@/courseData";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

const Course_Details = () => {
  return (
    <section className="py-16  bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}

        <div >
          <SectionHeader title="Popular Courses" description="Master in-demand digital skills through our career-focused training programs designed for the global marketplace."></SectionHeader>
        </div>



        {/* Grid Section */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
          {courseData.map((course) => {
            const hasSale = !!course.price.sale;

            return (
              <div
                key={course.id}
                className="group border p-4 shadow-sm rounded-md flex flex-col bg-white transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-16/10 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {hasSale && (
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-[9px] font-semibold px-2 py-0.5 rounded uppercase">
                      Special Offer
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="pt-4 flex flex-col flex-1">

                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 transition-colors">
                    {course.name}
                  </h3>

                  <p className="text-base text-gray-500 line-clamp-2 mt-2 flex-1 leading-relaxed">
                    {course.overview}
                  </p>

                  {/* Pricing Block */}
                  <div className="flex items-center gap-2 mt-4 mb-4">
                    {hasSale ? (
                      <>
                        <span className="text-lg font-semibold text-gray-900">
                          {course.price.currency}{" "}
                          {course.price.sale?.toLocaleString()}
                        </span>
                        <span className="text-base text-gray-400 line-through">
                          {course.price.regular.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-semibold text-gray-900">
                        {course.price.currency}{" "}
                        {course.price.regular.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Minimal Action Button */}
                  <Link
                    href={"/"}
                    className="w-full  inline-flex items-center justify-center gap-2 bg-gray-800 text-white py-2 rounded-md text-base courser-pinter font-semibold transition-all hover:bg-gray-900 hover:text-white hover:border-gray-900 active:scale-95"
                  >
                    View Details
                    <FaArrowRight className="size-2.5" />
                  </Link>


                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Course_Details;
