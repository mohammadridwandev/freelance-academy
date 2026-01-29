import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness } from "lucide-react";

export default function CareerPage() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-12 text-center relative overflow-hidden">
      {/* Decorative Brand Glow - Responsive Size */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-64 h-64 md:w-96 md:h-96 bg-brandColor/5 blur-[80px] md:blur-[120px] rounded-full" />

      {/* Career Icon - Scaled for mobile/desktop */}
      <div className="mb-6 md:mb-10 p-5 md:p-8 rounded-2xl bg-brandColor/10 rotate-3 transition-transform hover:rotate-0 duration-500">
        <BriefcaseBusiness className="size-12 md:size-20 text-brandColor" />
      </div>

      <div className="space-y-4 max-w-3xl">
        {/* Responsive Heading: text-4xl on mobile, text-7xl on desktop */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
          Career <span className="text-brandColor">Portal</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground font-medium">
          Your future starts here.
        </p>

        <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-lg mx-auto px-2">
          We are currently designing a dedicated portal to connect our graduates with 
          top-tier companies and freelance opportunities. This page will soon feature 
          job boards and mentorship programs.
        </p>
      </div>

      {/* Button Group: Stacked on mobile, side-by-side on sm screens and up */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <Button 
          asChild 
          className="w-full sm:w-auto bg-brandColor hover:bg-brandColor/90 text-white rounded-full px-10 py-6 text-lg shadow-lg shadow-brandColor/20 transition-all active:scale-95"
        >
          <Link href="/">Return Home</Link>
        </Button>
        
        <Button 
          variant="outline" 
          asChild 
          className="w-full sm:w-auto rounded-full px-10 py-6 text-lg border-gray-200 hover:bg-gray-50 transition-all active:scale-95"
        >
          <Link href="/courses">Explore Courses</Link>
        </Button>
      </div>

      {/* Progress Indicator Tag - Simplified for smaller screens */}
      <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-100 bg-orange-50/50 text-brandColor text-xs md:text-sm font-semibold">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandColor opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brandColor"></span>
        </span>
        Development in Progress
      </div>
    </div>
  );
}