"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What services do you offer at Eve’s Fountain Spa and Massage?",
    answer:
      "We offer a range of services including Swedish massage, deep tissue massage, hot stone therapy, facials, aromatherapy, and customized spa packages.",
  },
  {
    question: "Are your massage therapists licensed and trained?",
    answer:
      "Yes, all our therapists are licensed professionals with extensive training in a variety of massage and wellness techniques.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online through our website, call us directly, or visit our location to schedule an appointment.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your therapist will review your health history, discuss your needs, and customize the massage experience for your comfort and wellness.",
  },
  {
    question: "What should I wear during a massage session?",
    answer:
      "Undress to your comfort level. You will be properly draped at all times, and only the area being worked on will be exposed.",
  },
  {
    question: "Do you offer gift certificates?",
    answer:
      "Yes, we offer beautifully packaged gift certificates perfect for birthdays, anniversaries, holidays, or just because!",
  },
  {
    question: "How far in advance should I arrive for my appointment?",
    answer:
      "We recommend arriving 10-15 minutes early to allow time to check in, fill out any necessary forms, and relax before your session.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We kindly ask for at least 24 hours' notice for cancellations or rescheduling to avoid a late cancellation fee.",
  },
  {
    question: "Can I request a specific therapist?",
    answer:
      "Absolutely! You are welcome to request a therapist when booking. We'll do our best to accommodate your preference based on availability.",
  },
  {
    question: "Are walk-ins accepted?",
    answer:
      "Walk-ins are welcome based on availability, but we recommend booking in advance to secure your preferred time and service.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-[#F4EBE9] py-20 px-4">
      <div className="container mx-auto ">
        <h2 className="text-5xl md:text-6xl sm:text-2xl text-[30px]  text-center font-bold font-Playfair text-primary">
          FAQ
        </h2>

        <div className="space-y-4 lg:mt-10 md:mt-5 mt-10">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer focus:outline-none">
                  <span className="lg:text-[20px] md:text-[18px] text-[16px] font-playfair font-bold text-[#01203A]">
                    {index + 1}. {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}>
                    <FiChevronDown size={28} color="#D99D84" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ maxHeight: 0, opacity: 0 }}
                      animate={{ maxHeight: 500, opacity: 1 }}
                      exit={{ maxHeight: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 overflow-hidden">
                      <div className="py-3 text-[#726767] font-playfair text-[17px]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
