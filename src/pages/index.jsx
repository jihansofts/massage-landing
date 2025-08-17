import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Hero from "@/components/Hero";
import Priceing from "@/components/Priceing";
import Faq from "@/components/Faq";
import Location from "@/components/Location";
// import Providers from "@/components/Providers";
import Footer from "@/common/Footer";
import About from "@/components/About";
import BuyPage from "@/components/BuyPage";
import Individual from "@/components/Individual";
import Packages from "@/components/Packages";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <div className={` ${playfair.variable} font-helvetica`}>
      <Hero />
      <Priceing />
      <BuyPage />
      <Individual />
      <Packages />
      <About />
      <Faq />
      <Location />
      {/* <Providers /> */}
      <Footer />
    </div>
  );
}
