"use client";
import React, { useState, useRef } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Individual = () => {
  const rawData = [
    {
      title: "Head Spa",
      image: "/images/ind1.png",
      list: [
        "Platinum: $320 - 90 mins",
        "Gold: $220 - 60 mins",
        "Silver: $160 - 45 mins",
      ],
      benifiq: "Includes red light therapy and mini facial",
    },
    {
      title: "Massage",
      image: "/images/ind2.png",
      list: [
        "$200 - 60 Mins",
        "$275 - 90 Mins",
        "$350 - 120 Mins",
        "$500 - 180 Mins",
      ],
      benifiq: "Studio + Mobile",
    },
    {
      title: "Hair Botox",
      image: "/images/ind3.png",
      list: ["$200 - $400"],
      benifiq: "Depending on length",
    },
    {
      title: "Facials",
      image: "/images/ind4.png",
      list: [],
      benifiq: "Contact For Details",
    },
    {
      title: "Make up",
      image: "/images/ind5.png",
      list: ["$200 + keep one product used"],
    },
    {
      title: "Eyelashes",
      image: "/images/ind6.png",
      list: ["$150 - $300"],
    },
    {
      title: "Pedicure",
      image: "/images/ind7.png",
      list: [
        "$110",
        "* Foot Soak Sea Salt",
        "* Intense Callus Treatment",
        "* Nails Trim, Filed and Shaped",
      ],
      benifiq: "And Many More",
    },
    {
      title: "Manicure",
      image: "/images/ind8.png",
      list: [
        "$110",
        "* Water Soak",
        "* Organic Sugar Scrub",
        "* Nails Manicured",
      ],
      benifiq: "And Many More",
    },
  ];

  // Duplicate data to simulate infinite scroll
  const indusData = [...rawData, ...rawData];
  const [x, setX] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const cardWidth = 250;
  const totalWidth = cardWidth * indusData.length;

  const scroll = (dir) => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const scrollAmount = Math.min(containerWidth, cardWidth * 2);

    let nextX = x + (dir === "left" ? scrollAmount : -scrollAmount);
    setX(nextX);
    controls.start({ x: nextX });

    // Looping logic
    if (Math.abs(nextX) >= totalWidth / 2) {
      setTimeout(() => {
        setX(0);
        controls.set({ x: 0 });
      }, 500);
    }
    if (nextX > 0) {
      setTimeout(() => {
        setX(-totalWidth / 2);
        controls.set({ x: -totalWidth / 2 });
      }, 500);
    }
  };

  // Fixed handleDragEnd with proper typing
  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) {
      // Swiped right
      scroll("left");
    } else if (info.offset.x < -50) {
      // Swiped left
      scroll("right");
    }
  };

  return (
    <section className="bg-[#F4EBE9]">
      <div className="container mx-auto lg:py-20 md:py-10 pb-10  px-4 relative">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl md:text-6xl sm:text-2xl text-[30px]  text-center font-bold font-Playfair text-primary">
            Individual Services
          </h1>
          <div className="hidden lg:flex gap-4 absolute right-10">
            <button
              onClick={() => scroll("left")}
              className="bg-[#D99D84] text-white cursor-pointer p-3 rounded-full shadow hover:bg-opacity-80 transition">
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="border border-primary text-primary p-3 rounded-full cursor-pointer shadow hover:bg-opacity-80 transition">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Mobile controls - visible only on mobile */}
        <div className="hidden justify-center gap-4 mb-6">
          <button
            onClick={() => scroll("left")}
            className="bg-[#D99D84] text-white cursor-pointer p-3 rounded-full shadow hover:bg-opacity-80 transition">
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="border border-primary text-primary p-3 rounded-full cursor-pointer shadow hover:bg-opacity-80 transition">
            <FaArrowRight />
          </button>
        </div>

        <div className="overflow-hidden" ref={containerRef}>
          <motion.div
            animate={controls}
            drag="x"
            dragConstraints={{ left: -totalWidth, right: 0 }}
            onDragEnd={handleDragEnd}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex gap-6"
            style={{ width: totalWidth }}>
            {indusData.map((item, idx) => (
              <motion.div
                key={`${item.title}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="min-w-[250px] w-[250px] bg-white rounded-xl shadow-md p-6 flex-shrink-0 flex flex-col items-center text-center hover:shadow-lg transition">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-24 h-24 object-contain mb-4 rounded-full border border-gray-200"
                />
                <h3 className="text-2xl font-bold font-Playfair mb-2">
                  {item.title}
                </h3>
                <ul className="text-gray-600 text-sm space-y-1 mb-2">
                  {item.list.map((li, liIdx) => (
                    <li key={liIdx}>• {li}</li>
                  ))}
                </ul>
                {item.benifiq && (
                  <p className="text-sm text-primary font-medium mt-auto">
                    {item.benifiq}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Individual;
