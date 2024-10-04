"use client";
import Image from "next/image";
import React from "react";
import { CalendarIcon, ShareIcon } from "lucide-react";
import Link from "next/link";

import bannerImage from "../../assets/watch.jpg";
import satelliteImage from "../../assets/satelight.jpg";
import { TPost } from "@/src/types";

const HeroSection = ({ posts }: { post: TPost }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {/* Main featured article */}
        {posts.length > 0 && (
          <div className="md:col-span-2 lg:col-span-2 relative border-r dark:border-r-slate-200">
            <Image
              alt={posts[0]?.title || "Main Article"}
              className="object-cover w-full h-[700px]"
              height={900}
              src={posts[0]?.images[0] || bannerImage}
              width={800}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <span className="inline-block bg-pink-500 text-white px-3 py-1 text-sm font-semibold  mb-2">
                {posts[0]?.category || "Category"}
              </span>
              <Link
                className="text-white hover:text-pink-500 transition-colors block text-2xl md:text-3xl font-bold mb-2 cursor-pointer hover:underline transition duration-300 ease-in-out"
                href={`/${posts[0]?._id}`}
              >
                {posts[0]?.title || "Main Article Title"}
              </Link>
              <div className="flex items-center text-white text-sm">
                <span>By {posts[0]?.author?.name || "Author"}</span>
                <span className="mx-2">•</span>
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>
                  {new Date(posts[0]?.createdAt).toLocaleDateString() || "Date"}
                </span>
                <span className="mx-2">•</span>
                <ShareIcon className="w-4 h-4 mr-1" />
                <span>{posts[0]?.views || "Views"} Views</span>
              </div>
            </div>
          </div>
        )}

        {/* Smaller articles */}
        <div className="">
          {posts.slice(1, 3).map((article) => (
            <div
              key={article._id}
              className="relative border-b last:border-b-0"
            >
              <Image
                alt={article.title || "Article Image"}
                className="object-cover w-full h-[350px]"
                height={300}
                src={article.images[0] || satelliteImage}
                width={400}
              />

              <div className="absolute  bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span className="inline-block bg-pink-500 text-white px-3 py-1 text-sm font-semibold  mb-2">
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
