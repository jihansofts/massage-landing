import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Priceing = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
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
    <div className="relative bg-[#F4EBE9] w-full min-h-screen pt-40 px-4 z-10">
      <h1 className="text-5xl md:text-6xl text-center font-bold font-Playfair text-primary mb-16">
        Prices and Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {pricingService.map((service, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header */}
              <div
                className="flex justify-between items-center px-6 py-5 cursor-pointer"
                onClick={() => toggleExpand(index)}>
                <div className="flex items-center gap-4">
                  <div className="bg-[#D99D84] p-3 rounded-full">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl tracking-wider font-semibold text-black/79 font-Playfair">
                    {service.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-2xl tracking-wider font-semibold text-black/79 font-Playfair">
                  {service.price && <span>{service.price}</span>}
                  <motion.svg
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </div>
              </div>

              {/* Expandable Section */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-600 overflow-hidden">
                    <p className="font-medium leading-relaxed">
                      {service.details}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Priceing;
