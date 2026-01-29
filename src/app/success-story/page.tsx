import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

export default function SuccessStoryPage() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-12 text-center relative overflow-hidden">
      {/* Decorative Brand Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-64 h-64 md:w-[500px] md:h-[500px] bg-brandColor/10 blur-[80px] md:blur-[150px] rounded-full" />

      {/* Success Icon */}
      <div className="mb-6 md:mb-10 p-5 md:p-8 rounded-full bg-brandColor/10 animate-bounce-slow">
        <Trophy className="size-12 md:size-20 text-brandColor" />
      </div>

      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
          Success <span className="text-brandColor">Stories</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground font-medium px-4">
          Inspiring journeys of our graduates.
        </p>

        <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-lg mx-auto px-4">
          We are currently gathering the amazing success stories, job placements, 
          and freelance milestones of our students. Soon, you'll be able to see how 
          Freelance Academy is changing lives.
        </p>
      </div>

      {/* Responsive Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <Button 
          asChild 
          className="w-full sm:w-auto bg-brandColor hover:bg-brandColor/90 text-white rounded-full px-10 py-6 text-lg shadow-lg shadow-brandColor/20 transition-all hover:scale-105 active:scale-95"
        >
          <Link href="/">Back to Home</Link>
        </Button>
        
        <Button 
          variant="outline" 
          asChild 
          className="w-full sm:w-auto rounded-full px-10 py-6 text-lg border-gray-200 hover:bg-gray-50 transition-all hover:border-brandColor/50 active:scale-95"
        >
          <Link href="/courses">Be Next Hero</Link>
        </Button>
      </div>

      {/* Badge */}
      <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-100 bg-white text-brandColor text-xs md:text-sm font-bold shadow-sm">
        <span className="flex h-2 w-2 rounded-full bg-brandColor animate-pulse"></span>
        Collecting Milestones
      </div>
    </div>
  );
}