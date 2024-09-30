import React from "react";

import HeroSection from "@/src/components/Home/HeroSection";
import TopNews from "@/src/components/Home/TopNews";
import NewsLayout from "@/src/components/Home/NewsLayout";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <HeroSection />
      <TopNews />
      <NewsLayout />
    </div>
  );
}
