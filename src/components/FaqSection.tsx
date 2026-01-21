"use client";

import React, { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { SectionHeader } from "./SectionHeader";

interface FAQItem {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "Are the classes conducted live?",
      answer:
        "Yes, all classes are conducted live via our interactive platform. You can ask questions in real-time and participate in discussions with your mentor.",
    },
    {
      question: "Will I get access to recorded sessions?",
      answer:
        "Absolutely. Every live session is recorded and uploaded to your dashboard within 2 hours, so you can review them whenever you need.",
    },
    {
      question: "Is there any age limit for these courses?",
      answer:
        "No, our courses are designed for anyone willing to learn—from students to working professionals and entrepreneurs.",
    },
    {
      question: "Do you provide job placement assistance?",
      answer:
        "Yes, we offer career counseling, resume building workshops, and direct interview opportunities with our partner media and tech agencies.",
    },
    {
      question: "Can I pay the course fee in installments?",
      answer:
        "We offer flexible payment plans for our high-end courses. You can speak with our support team to set up an installment schedule.",
    },
    {
      question: "What hardware do I need for the design course?",
      answer:
        "For Graphics and Video editing, we recommend at least 8GB of RAM and a dedicated graphics card for a smooth experience.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 lg:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}

        <div>
          <SectionHeader
            title="Asked Questions"
            description="Find answers to common questions about our programs. Still have doubts? Contact our support team"
          ></SectionHeader>
        </div>


        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`group p-5 rounded-xl cursor-pointer transition-all duration-300 border border-gray-100 hover:border-gray-200 shadow-sm
                ${openIndex === index ? "bg-gray-50 ring-1 ring-gray-200" : "bg-white hover:bg-gray-50"}
              `}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[15px] font-medium text-gray-800 leading-snug">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 p-1.5 rounded-full transition-all duration-300 
                  ${openIndex === index ? "bg-gray-900 text-white rotate-180" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}
                `}
                >
                  {openIndex === index ? (
                    <LuMinus size={16} />
                  ) : (
                    <LuPlus size={16} />
                  )}
                </div>
              </div>

              {/* Animated Answer Section */}
              <div
                className={`grid transition-all duration-300 ease-in-out overflow-hidden
                  ${openIndex === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}
                `}
              >
                <div className="overflow-hidden">
                  <p className="text-[14.5px] text-gray-600 leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
