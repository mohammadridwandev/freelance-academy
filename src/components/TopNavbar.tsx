"use client";

import React, { useState } from "react";
import { LuX, LuGift } from "react-icons/lu";
import { DialogDemo } from "./DialogDemo";

export default function TopNavbar() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-2 px-4 md:px-14 border-b border-white/10 transition-all duration-500 animate-gradient-x">
      <div className="max-w-7xl mx-auto gap-4 flex items-center justify-between">
        {/* Promo Text */}
        <div className="flex items-center gap-2">
          <LuGift
            className="hidden sm:block text-yellow-300 animate-bounce"
            size={18}
          />
          <p className="text-sm font-medium ">
            Special Offer: <span className="font-bold">Get 20% OFF</span> on
            Your First Course!
          </p>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <DialogDemo
            buttonText="Claim Now"
            className="text-nowrap cursor-pointer md:flex items-center text-[11px] font-semibold text-white bg-white/20 backdrop-blur-md border border-white/30 px-5 py-1.5 rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 uppercase tracking-widest shadow-lg"
          />
          
        </div>
      </div>

      {/* Adding a subtle animation style for the gradient */}
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
