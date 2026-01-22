import React from 'react';
import { Calendar, Clock, MapPin, Users, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from 'next/image';

export default function JoinSeminarPage() {
  return (
    // Applied the background image and font family here
    <section className="font-['Poppins'] bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center  py-16">

     

      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Free Workshop
          </span>

          <div className="text-3xl md:text-5xl font-bold bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mt-3 mb-4">
            Mastering <span className='bg-linear-to-r from-red-500 to-blue-600 bg-clip-text text-transparent'>Digital Careers in 2026</span>
          </div>



          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto font-normal">
            Join our industry experts for a live seminar on how to launch your career in Web Development, Design, and Marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side: Seminar Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Seminar Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Date</p>
                    <p className="text-base font-semibold text-gray-900">January 28, 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Time</p>
                    <p className="text-base font-semibold text-gray-900">04:00 PM - 06:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Location</p>
                    <p className="text-base font-semibold text-gray-900">Main Campus & Zoom</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Available Seats</p>
                    <p className="text-base font-semibold text-gray-900">45 Seats Remaining</p>
                  </div>
                </div>
              </div>

              <hr className="my-8 border-gray-100" />

              <h3 className="font-semibold text-gray-900 mb-4">What you will learn:</h3>
              <ul className="space-y-3">
                {["Industry trends for 2026", "Building a high-income portfolio", "Freelancing on Upwork & Fiverr", "Live Q&A with Senior Mentors"].map((item, i) => (
                  <li key={i} className="flex text-sm items-center gap-3 text-gray-600 font-normal">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Registration Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl border-2 border-indigo-50 shadow-xl sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Book Your Seat</h3>
              <p className="text-sm text-gray-500 mb-6 font-normal">Fill out the form to get your entry pass.</p>
              
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                  <Input id="name" placeholder="Rahat Chowdhury" className="font-normal border-gray-200" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <Input id="email" type="email" placeholder="name@example.com" className="font-normal border-gray-200" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+880 1XXX XXXXXX" className="font-normal border-gray-200" />
                </div>

                <Button className="w-full cursor-pointer bg-slate-900 hover:bg-black text-white font-medium py-6 mt-4 transition-all rounded-full">
                  Register for Seminar
                </Button>
                <p className="text-[11px] text-center text-gray-400 mt-4">
                  By registering, you agree to receive seminar updates via email/SMS.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>



    </section>



  );
}