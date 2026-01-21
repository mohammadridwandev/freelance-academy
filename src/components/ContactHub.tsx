"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { MdChat } from "react-icons/md";

const ContactHub = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactItems = [
    {
      icon: <FaWhatsapp className="size-5" />,
      color: "bg-[#25D366]",
      link: "https://wa.me/01911407588",
    },
    {
      icon: <FaEnvelope className="size-5" />,
      color: "bg-[#EA4335]",
      link: "mailto:info@youracademy.com",
    },
    {
      icon: <FaPhoneAlt className="size-4" />,
      color: "bg-gray-800",
      link: "tel:+880 1911407588",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Icon Options */}
      <div className="flex flex-col gap-3">

        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
              transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0) translateY(20px)',
              opacity: isOpen ? 1 : 0
            }}
            className={`flex size-11 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:brightness-110 active:scale-90 ${item.color}`}
          >
            {item.icon}
          </a>
        ))}
        
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex size-14 items-center justify-center rounded-full  shadow-lg transition-all duration-500 
            active:scale-95 ${
          isOpen ? "bg-slate-100 text-gray-900 rotate-90" : "bg-blue-600  text-white cursor-pointer hover:bg-blue-700"
        }`}
      >
        {isOpen ? <FaTimes className="size-5" /> : <MdChat className="size-7" />}
      </button>


    </div>
  );
};

export default ContactHub;