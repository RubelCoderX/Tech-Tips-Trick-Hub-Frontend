"use client";
import React from "react";

import HeroSection from "../Home/HeroSection";
import TopNews from "../Home/TopNews";
import Container from "../UI/Container";

import { useGetMostLikedPosts } from "@/src/hooks/post.hooks";

const MainNewsFeed = () => {
  const { data, isLoading } = useGetMostLikedPosts();

  const posts = data?.data?.mostLikedPosts || [];

  return (
    <div>
      <div className=" w-full  flex-grow">
        <HeroSection heroLoading={isLoading} posts={posts} />
        <div>
          <Container>
            <TopNews posts={posts} topLoading={isLoading} />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MainNewsFeed;
