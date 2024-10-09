import { Suspense } from "react";

import Component from "./_component/component";

import MainNewsFeed from "@/src/components/NewsFeedSection/MainNewsFeed";
import BecomeAmember from "@/src/components/UI/BecomeAmember/BecomeAmember";

const Page = () => {
  return (
    <div>
      <BecomeAmember />
      <div className="dark dark:bg-[#1A1A1A]">
        <MainNewsFeed />

        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
