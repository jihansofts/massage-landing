import React from "react";
import Navbar from "@/common/Navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" relative min-h-screen  py-10 h-full  overflow-hidden ">
      {/* Background Image with brightness */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.png"
          alt="Hero"
          fill
          className="object-cover brightness-[.5]"
        />
      </div>

      {/* Content Overlay */}
      <div className="container z-100  mx-auto relative h-full flex flex-col justify-start items-start text-left ">
        <Navbar />
        <div className="max-w-3xl px-6 mt-10">
          <p className="text-white font-playfair  font-medium  text-[24px] ">
            Licensed
          </p>
          <p className="text-white mt-4 font-playfair font-medium  text-[24px] ">
            Message Therapists, Estheticians, Cosmetologists
          </p>
          <h1 className="text-white  font-playfair font-semibold  text-[64px] ">
            Rejuvenate Your Spirit. Relax Your Mind, Body And Soul.
          </h1>
          <div className="flex lg:flex-row md:flex-row flex-col lg:gap-5 md:gap-2 gap-0">
            <button className="font-helvetica min-w-2xs  rounded-4xl font-semibold text-[16px] mt-10 py-4 px-14 bg-[#F4EBE9] text-[#00192D]">
              Book Appointments
            </button>
            <button className="font-helvetica min-w-2xs rounded-4xl font-semibold text-[16px] lg:mt-10 md:mt-5 mt-5 py-4 px-14 border-1 border-white text-white ">
              Our Services
            </button>
          </div>
          <div className="flex flex-wrap lg:gap-10 md:gap-5 gap-2 lg:justify-start md:justify-center justify-center">
            <div className="w-1/2 sm:w-auto">
              {" "}
              {/* 50% width on mobile, auto on small+ */}
              <Image
                src="/images/brand1.png"
                alt="arrow"
                width={100}
                height={100}
                className="lg:mt-10 md:mt-8 mt-5 mx-auto"
              />
            </div>
            <div className="w-1/2 sm:w-auto">
              <Image
                src="/images/brand2.png"
                alt="arrow"
                width={100}
                height={100}
                className="lg:mt-10 md:mt-8 mt-5 mx-auto"
              />
            </div>
            <div className="w-1/2 sm:w-auto">
              <Image
                src="/images/brand3.png"
                alt="arrow"
                width={100}
                height={100}
                className="lg:mt-10 md:mt-8 mt-5 mx-auto"
              />
            </div>
            <div className="w-1/2 sm:w-auto">
              <Image
                src="/images/brand4.png"
                alt="arrow"
                width={100}
                height={100}
                className="lg:mt-10 md:mt-8 mt-5 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
