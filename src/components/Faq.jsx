"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// FAQ data
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
    <section className="bg-[#F4EBE9] py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-center  text-[#D99D84] text-[56px] font-semibold mb-10 font-playfair">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl py-4 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center cursor-pointer justify-between w-full px-6 py-4 text-left font-medium text-[#01203AC9] focus:outline-none">
                <span className="text-[28px] font-playfair font-bold">
                  {index + 1}. {item.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}>
                  <FiChevronDown color="#D99D84" size={30} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-[#726767] font-playfair font-medium text-[18px]">
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
