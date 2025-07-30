import React from "react";
import Image from "next/image";
const BuyPage = () => {
  return (
    <section className="bg-[#F4EBE9]">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:gap-8 md:gap-5">
          <Image
            src="/images/buy.png"
            width={500}
            height={500}
            alt=""
            className="w-full h-auto"
          />
          <div className="text-left space-y-8">
            <h1 className="text-5xl md:text-6xl sm:text-2xl text-[30px]  lg:mt-0 md:mt-5 mt-5 text-center font-bold font-Playfair text-primary">
              Buy Now, Pay Later
            </h1>
            <p className="text-black/87">
              At Eve’s Fountain, we make shopping convenient by offering a Buy
              Now, Pay Later option! Choose from flexible payment solutions like
              Klarna, Afterpay, Zip, and Snap Finance, allowing you to enjoy
              your favorite products without immediate payment. Shop with ease
              and experience the freedom of spreading your payments over time!
            </p>
            <button className="bg-[#00192D] px-8 py-3 text-white rounded-full">
              Book Appointments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyPage;
