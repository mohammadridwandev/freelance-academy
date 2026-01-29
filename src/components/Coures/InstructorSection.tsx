import React from 'react';
import { User2 } from 'lucide-react';

const instructorData = [
  {
    "id": 1,
    "name": "Ariful Islam",
    "subheading": "MERN & Cloud Expert",
    "position": "Web Lead"
  },
  {
    "id": 2,
    "name": "Nusrat Jahan",
    "subheading": "UI/UX Specialist",
    "position": "Sr. Designer"
  },
  {
    "id": 3,
    "name": "Tanvir Ahmed",
    "subheading": "Ads & SEO Expert",
    "position": "Marketing Head"
  }
];

export default function MentorGrid() {
  return (
    <section className="py-10 bg-white font-['Poppins',_sans-serif]">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <h2 className='font-bold lg:text-center text-2xl lg:text-4xl pb-5'>Instructors</h2>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {instructorData.map((mentor) => (
            <div 
              key={mentor.id} 
              className="group flex items-center gap-4 bg-linear-to-r from-white to-teal-50/30 p-4 rounded-xl border border-gray-100 hover:border-teal-200 transition-all duration-200"
            >
              {/* Minimal Icon Square */}
              <div className="size-12 bg-teal-50 rounded-lg flex items-center justify-center text-brandColor shrink-0 group-hover:bg-brandColor group-hover:text-white transition-colors duration-300">
                <User2 size={22} />
              </div>

              {/* Identity - Strictly text-base for name */}
              <div className="flex space-y-1 flex-col min-w-0">
                <span className="text-[13px] font-bold text-brandColor uppercase ">
                  {mentor.position}
                </span>
                <h3 className="text-base font-bold text-gray-800 leading-tight">
                  {mentor.name}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {mentor.subheading}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}