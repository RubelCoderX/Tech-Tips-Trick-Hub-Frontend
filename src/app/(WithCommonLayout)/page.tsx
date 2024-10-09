import { Suspense } from "react";

import Component from "./_component/component";

import MainNewsFeed from "@/src/components/NewsFeedSection/MainNewsFeed";
import BecomeAmember from "@/src/components/UI/BecomeAmember/BecomeAmember";
import NewsLayout from "@/src/components/Home/NewsLayout";

const Page = () => {
  return (
    <div>
      <BecomeAmember />
      <MainNewsFeed />

      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};

export default Page;
