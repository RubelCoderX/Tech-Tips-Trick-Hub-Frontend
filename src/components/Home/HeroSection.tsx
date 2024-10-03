"use client";
import Image from "next/image";
import React from "react";
import { CalendarIcon, ShareIcon } from "lucide-react";
import Link from "next/link";

import bannerImage from "../../assets/watch.jpg";
import satelliteImage from "../../assets/satelight.jpg";

import { useGetAllPosts } from "@/src/hooks/post.hooks";

const HeroSection = () => {
  const { data } = useGetAllPosts();
  const allPostData = data?.data || [];
  // console.log(allPostData.slice(0, 3));
  // Filter posts with upVotes >= 250
  const filteredPosts = allPostData.filter((post) => post.upVotes >= 250);
  // console.log(filteredPosts[0]._id);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {/* Main featured article */}
        {filteredPosts.length > 0 && (
          <div className="md:col-span-2 lg:col-span-2 relative border-r-2 dark:border-r-slate-200">
            <Image
              alt={filteredPosts[0]?.title || "Main Article"}
              className="object-cover w-full h-[700px]"
              height={900}
              src={filteredPosts[0]?.images[0] || bannerImage}
              width={800}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <span className="inline-block bg-lime-500 text-white px-3 py-1 text-sm font-semibold rounded-full mb-2">
                {filteredPosts[0]?.category || "Category"}
              </span>
              <Link
                className="text-white hover:text-pink-500 transition-colors block text-2xl md:text-3xl font-bold mb-2 cursor-pointer hover:underline transition duration-300 ease-in-out"
                href={`/${filteredPosts[0]?._id}`}
              >
                {filteredPosts[0]?.title || "Main Article Title"}
              </Link>
              <div className="flex items-center text-white text-sm">
                <span>By {filteredPosts[0]?.author?.name || "Author"}</span>
                <span className="mx-2">•</span>
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>
                  {new Date(filteredPosts[0]?.createdAt).toLocaleDateString() ||
                    "Date"}
                </span>
                <span className="mx-2">•</span>
                <ShareIcon className="w-4 h-4 mr-1" />
                <span>{filteredPosts[0]?.views || "Views"} Views</span>
              </div>
            </div>
          </div>
        )}

        {/* Smaller articles */}
        <div className="space-y-1">
          {filteredPosts.slice(1, 3).map((article) => (
            <div key={article._id} className="relative ">
              <Image
                alt={article.title || "Article Image"}
                className="object-cover w-full h-[350px]"
                height={300}
                src={article.images[0] || satelliteImage}
                width={400}
              />

              <div className="absolute  bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span className="inline-block bg-purple-500 text-white px-3 py-1 text-sm font-semibold rounded-full mb-2">
                  {article.category || "Category"}
                </span>
                <Link
                  className="text-white hover:text-pink-500 transition-colors text-lg block font-bold mb-1 cursor-pointer hover:underline"
                  href={`/${article._id}`}
                >
                  {article.title || "Article Title"}
                </Link>
                <p className="text-white text-sm">
                  By {article.author?.name || "Author"}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
