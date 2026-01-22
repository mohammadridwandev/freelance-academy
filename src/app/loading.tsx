// app/dashboard/loading.tsx
"use client";

import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  const [statusIndex, setStatusIndex] = useState(0);
  
  // Informative messages based on your specific requirements (Assets, Agreements, Happiness)
  const messages = [
    "Synchronizing your digital assets...",
    "Verifying agreement status...",
    "Calculating student happiness index...",
    "Finalizing dashboard view...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % messages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center gap-4 relative overflow-hidden">
      {/* Soft colorful glow to match 2026 style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full" />
      
      <div className="relative flex flex-col items-center gap-3">
        {/* Large colorful spinner */}
        <Spinner className="size-12 text-indigo-600 animate-spin border-t-red-500 border-r-blue-500" />
        
        <div className="text-center">
          <p className="text-base font-semibold bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Please wait a moment
          </p>
          {/* Informative dynamic text */}
          <p className="text-xs font-medium text-indigo-500 mt-1 animate-pulse min-w-[200px]">
            {messages[statusIndex]}
          </p>
        </div>
      </div>

      {/* Mini Progress Indicator */}
      <div className="flex gap-1.5 mt-2">
        {messages.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-500 ${
              i === statusIndex ? "w-6 bg-indigo-600" : "w-2 bg-gray-200"
            }`} 
          />
        ))}
      </div>
    </div>
  );
}