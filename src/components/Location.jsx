import React from "react";
import Image from "next/image";
export default function Location() {
  return (
    <section className="lg:py-20 md:py-10 py-5 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl sm:text-2xl text-[30px]  text-center font-bold font-Playfair text-primary">
          Location
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:mt-0 md:mt-5 mt-5">
          <div>
            <Image
              src="/images/location1.png"
              alt="location"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          <div>
            <Image
              src="/images/location2.png"
              alt="location"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
