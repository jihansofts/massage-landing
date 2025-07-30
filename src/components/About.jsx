import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#2f4454] py-12  text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 lg:px-0 md:px-4 px-4 items-center gap-10 relative mx-auto ">
        {/* Left Content - CONTAINED */}
        <div className="z-10 lg:ml-48 md:ml-32 space-y-10">
          <h1 className="text-5xl md:text-6xl font-bold font-Playfair tracking-wider text-white">
            About Us
          </h1>
          <p className="text-[20px] text-white text-justify leading-[30px] font-helvetica">
            Eve’s Fountain Spa and Massage in Hawthorne, California, is your
            ultimate destination for relaxation and rejuvenation. We specialize
            in a variety of services, including soothing massages, revitalizing
            facials, manicures and pedicures, luxurious hair treatments, and
            comprehensive skincare services. Our dedicated team is passionate
            about providing exceptional care, which is why many of our services
            come with a complimentary product to enhance your experience.
            Whether you prefer the tranquility of our studio or the convenience
            of mobile services, Eve’s Fountain Spa ensures that every visit is
            tailored to meet your needs. Come and discover the perfect blend of
            luxury and personalized attention at Eve’s Fountain Spa!
          </p>
        </div>

        {/* Right Image - BREAK OUT */}
        <div className="relative ">
          <div className="relative flex justify-center lg:justify-end md:justify-center ">
            <Image
              src="/images/woman.png"
              alt="About Image"
              width={400}
              height={500}
              className="rounded-md object-cover xl:w-[900px] lg:w-[700px] md:w-[500px] sm:w-[400px] w-full"
            />

            {/* Circle Badge */}
            <div className="absolute bg-[#D99D84] rounded-full lg:w-32 lg:h-32 w-20 h-20 flex items-center justify-center lg:-left-10 md:-left-10 lg:top-1/5 md:top-[-8px] top-[-8px]  -translate-y-1/2 ">
              <Image
                src="/images/circle-badge.png"
                alt="Logo Badge"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
