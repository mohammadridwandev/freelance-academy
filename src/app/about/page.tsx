
import AcademyPage from "@/components/About_us/AcademyPage";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaHeadset,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <div>
      <section className="py-10 lg:pb-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side: Content */}

            <div className="order-2 lg:order-1">
              <div className="text-2xl lg:text-start  pb-3 font-bold bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent  lg:text-4xl">
                <h1>
                  Empowering the Next Generation{" "}
                  <span className="bg-linear-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    of Digital Professionals
                  </span>{" "}
                </h1>
              </div>

              <p className="text-base text-gray-500 leading-relaxed mb-6">
                Leading skill development academy in Muradpur. We bridge the gap
                between education and industry with project-based training in
                Web Development, Design, and Marketing.
              </p>

              {/* Compact Feature List */}
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="flex items-center gap-2 p-2 px-3 rounded-lg border border-gray-100 bg-gray-50/50">
                  <FaGraduationCap className="text-blue-600 size-3.5" />
                  <span className="text-[13px] font-semibold text-gray-700 uppercase tracking-wide">
                    Practical Syllabus
                  </span>
                </div>

                <div className="flex items-center gap-2 p-2 px-3 rounded-lg border border-gray-100 bg-gray-50/50">
                  <FaBriefcase className="text-green-600 size-3.5" />
                  <span className="text-[13px] font-semibold text-gray-700 uppercase tracking-wide">
                    Market Guidance
                  </span>
                </div>
              </div>

              {/* Tight Location Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-md border border-gray-100">
                <FaMapMarkerAlt className="text-red-500 size-3" />
                <span className="text-base font-semibold text-gray-500 uppercase ">
                  Muradpur, Chittagong
                </span>
              </div>
            </div>

            {/* Right Side: Visual Stats Grid (Reduced Padding) */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-3">
              <div className=" p-3 lg:p-6 bg-blue-600 rounded-md text-white">
                <h3 className="text-xl lg:text-3xl font-bold ">500+</h3>
                <p className="text-blue-100 text-[13px] uppercase font-semibold">
                  Students
                </p>
              </div>

              <div className=" p-3 lg:p-6 bg-gray-900 rounded-md text-white">
                <h3 className="text-xl lg:text-3xl font-bold ">15+</h3>
                <p className="text-gray-400 text-[13px] uppercase font-semibold">
                  Mentors
                </p>
              </div>

              <div className="col-span-2 p-5 bg-linear-to-r from-blue-200 to-cyan-200 rounded-md border border-gray-100 flex items-center gap-4">
                <div className="size-10 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                  <FaHeadset className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    24/7 Support Lab
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-tight">
                    Lifetime access to our physical practice lab.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <AcademyPage></AcademyPage>


    </div>
  );
};

export default AboutSection;
