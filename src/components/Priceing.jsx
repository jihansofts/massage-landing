"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Priceing = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const pricingService = [
    {
      title: "Consultation",
      icon: "/images/icon1.png",
      price: "$150",
      details:
        "Consultations are required for first-time customers for facials, hair Botox, and head spa.",
    },
    {
      title: "Membership",
      icon: "/images/icon2.png",
      price: "$199/month",
      details:
        "Members save 20% on all services. Membership fees are billed monthly or annually.",
    },
    {
      title: "Deposit",
      icon: "/images/icon3.png",
      price: "$100",
      details:
        "Deposits are required to confirm bookings. They're non-refundable but transferable.",
    },
    {
      title: "Travel Fee",
      icon: "/images/icon4.png",
      price: "$100",
      details:
        "Travel fees apply for mobile services. The amount depends on distance and time.",
    },
    {
      title: "Gift Cards",
      icon: "/images/icon5.png",
      details:
        "Available in various denominations. Perfect for birthdays, holidays, or special events.",
    },
    {
      title: "Buy Now, Pay Later",
      icon: "/images/icon6.png",
      details:
        "Flexible payment options available. Split your total into 4 interest-free installments.",
    },
  ];

  return (
    <div id="services" className="relative bg-[#F4EBE9] w-full py-20 px-4 z-10">
      {/* Floating Info Box */}
      <div className="absolute lg:top-0 md:top-10 top-[30px] px-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-6xl">
        <div className="py-6 px-6 sm:px-10 bg-white border border-gray-100 rounded-2xl shadow-xl">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10 text-gray-700">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">Mon - Sun 7:00am - 12am</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"
                />
              </svg>
              <span className="font-medium">Studio + Mobile</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
              <span className="font-medium">Buy Now, Pay Later</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="mt-20">
        <h1 className="text-5xl md:text-6xl sm:text-2xl text-[30px] text-center font-bold font-Playfair text-primary">
          Prices and Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10 items-start">
          {pricingService.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => toggleExpand(index)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer">
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-5">
                <div className="flex items-center gap-4">
                  <div className="bg-[#D99D84] w-12 h-12 flex items-center justify-center p-3 rounded-full">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={24}
                      height={24}
                      className="object-contain w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6"
                    />
                  </div>
                  <h3 className="text-[16px] md:text-xl lg:text-2xl tracking-wider font-semibold text-black/80 font-Playfair">
                    {service.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {service.price && (
                    <span className="text-[16px] md:text-xl lg:text-2xl tracking-wider font-semibold text-black/80 font-Playfair">
                      {service.price}
                    </span>
                  )}
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}>
                    <FaChevronDown className="text-gray-600" />
                  </motion.div>
                </div>
              </div>

              {/* Details (Animated Expand) */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 overflow-hidden">
                    <div className="py-3 text-gray-600 font-medium leading-relaxed">
                      {service.details}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Priceing;
