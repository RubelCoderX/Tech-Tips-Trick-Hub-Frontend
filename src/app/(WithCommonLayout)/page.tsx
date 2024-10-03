import React from "react";

import HeroSection from "@/src/components/Home/HeroSection";
import TopNews from "@/src/components/Home/TopNews";
import NewsLayout from "@/src/components/Home/NewsLayout";
import Container from "@/src/components/UI/Container";
import BecomeAmember from "@/src/components/UI/BecomeAmember/BecomeAmember";

export default function Home() {
  return (
    <div>
      <BecomeAmember />
      <div className=" w-full  flex-grow">
        <HeroSection />

        <div className="dark dark:bg-[#1A1A1A]">
          <Container>
            <TopNews />
            <NewsLayout />
          </Container>
        </div>
      </div>
    </div>
  );
}
