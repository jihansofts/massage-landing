import React from "react";
import Image from "next/image";
export default function Providers() {
  return (
    <section id="providers" className="py-10 ">
      <div className="container mx-auto relative min-h-[700px]">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/providers.png" alt="Hero" fill className="" />
        </div>
        <div className="container px-4 z-100 py-10  mx-auto relative h-full flex flex-col justify-center items-center">
          <h2 className="text-center  text-white text-[56px] font-semibold mb-10 font-playfair">
            Providers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center max-w-4xl gap-10">
            <div>
              <Image
                src="/images/allie.png"
                alt="location"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
            <div className="lg:text-start md:text-center text-center ">
              <h2 className=" text-white text-[56px] font-semibold mb-10 font-playfair">
                Allie
              </h2>
              <p className="text-[20px] text-white font-helvetica font-semibold">
                “Happy girls are <br /> the prettiest”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
