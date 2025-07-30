import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Packages = () => {
  const packages = [
    {
      image: "/images/pack1.png",
      title: "Money Honey",
      price: "$1650",
      list: [
        "Head Spa $320 (90)",
        "Hair Botox $400 (30)",
        "Facial $260 (90)",
        "Make Up $200 (30)",
        "Nails $220 (180)",
        "Massage $275 (90)",
        "Meal included",
      ],
      thour: "(9 hours)",
    },
    {
      image: "/images/pack2.png",
      title: "Dreamy Hair",
      price: "$650",
      list: ["Head Spa $320 (90)", "Hair Botox $400 (90)"],
      thour: "(3 hours)",
    },
    {
      image: "/images/pack3.png",
      title: "Pretty Face",
      price: "$375",
      list: ["Facial $175", "Make Up $200"],
      thour: "(2 hours)",
    },
    {
      image: "/images/pack4.png",
      title: "Purrfect Nails",
      price: "$475",
      list: ["Nails $110", "Pedi $110", "Massage 90 mins $275"],
      thour: "(4.5 hours)",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const handleNext = () => {
    if (index + 2 < packages.length) {
      setDirection(1);
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex(index - 1);
    }
  };

  const visiblePackages = packages.slice(index, index + 2);

  return (
    <div id="packages" className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-7xl space-y-10 overflow-hidden">
        <h2 className="text-4xl md:text-6xl text-center font-bold font-Playfair text-primary">
          Pretty Me Packages
        </h2>

        <div className="relative w-full min-h-[400px]">
          <motion.div
            key={index}
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visiblePackages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial={{ x: direction === 1 ? 200 : -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-primary shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={500}
                  height={500}
                  className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                />
                <div className="p-6 flex-1 bg-white relative">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-bold text-black/80 font-Playfair">
                      {pkg.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-primary font-bold font-Playfair">
                      {pkg.price}
                    </p>
                  </div>
                  <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1 text-sm">
                    {pkg.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="absolute right-3 bottom-3">
                    <span className="text-sm md:text-lg font-bold text-primary">
                      {pkg.thour}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className={`bg-[#D99D84] text-white cursor-pointer p-3 rounded-full shadow hover:bg-opacity-80 transition ${
              index === 0
                ? "cursor-not-allowed opacity-30"
                : "hover:bg-primary hover:text-white"
            }`}>
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={index + 2 >= packages.length}
            className={`border border-primary  text-primary p-3 rounded-full cursor-pointer shadow hover:bg-opacity-80 transition${
              index + 2 >= packages.length
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-opacity-80"
            }`}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
