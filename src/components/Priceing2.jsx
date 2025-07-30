import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { FaChevronDown } from "react-icons/fa";

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
    <div className="relative w-full min-h-screen pt-40 px-4 z-10">
      {/* ======= Floating Info Bar ======= */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-6xl">
        <div className="py-6 px-6 sm:px-10 bg-white border border-gray-100 rounded-2xl shadow-xl">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10 text-gray-700">
            {/* Time */}
            <div className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
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
              <span className="font-medium whitespace-nowrap">
                Mon - Sun 7:00am - 12am
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-gray-200" />

            {/* Location */}
            <div className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="font-medium whitespace-nowrap">
                Studio + Mobile
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-gray-200" />

            {/* Payment */}
            <div className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium whitespace-nowrap">
                Buy Now, Pay Later
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ======= Section Title ======= */}
      <h1 className="text-5xl md:text-6xl text-center font-bold font-Playfair text-primary mb-16">
        Prices and Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
        {pricingService.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            onClick={() => toggleExpand(index)}>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-800 font-bold">{service.price}</p>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <FaChevronDown className="text-gray-600" />
                </motion.div>
              </div>
            </div>

            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 text-sm text-gray-700">
                  {service.details}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Priceing;
