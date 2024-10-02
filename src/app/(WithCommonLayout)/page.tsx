import React from "react";

import HeroSection from "@/src/components/Home/HeroSection";
import TopNews from "@/src/components/Home/TopNews";
import NewsLayout from "@/src/components/Home/NewsLayout";
import BecomeAmember from "@/src/components/UI/BecomeAmember/BecomeAmember";

export default function Home() {
  return (
    <div>
      <BecomeAmember />
      <div className="container mx-auto pt-16 max-w-7xl  px-6 flex-grow">
        <HeroSection />
        <TopNews />
        <NewsLayout />
      </div>
    </div>
  );
}
