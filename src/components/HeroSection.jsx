import React from "react";
import hero from "../assets/hero/hero.avif?url";
const HeroSection = () => {
  return (
    <div className="h-[60vh] w-full relative z-10">
      <img src={hero} alt="" className="w-full h-full object-cover " />
    </div>
  );
};

export default HeroSection;
