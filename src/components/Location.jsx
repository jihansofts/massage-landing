import React from "react";
import Image from "next/image";
export default function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center  text-[#D99D84] text-[56px] font-semibold mb-10 font-playfair">
          Location
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
