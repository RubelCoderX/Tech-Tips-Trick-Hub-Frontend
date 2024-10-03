"use client";
import Image from "next/image";
import React from "react";
import { CalendarIcon, ShareIcon } from "lucide-react";
import Link from "next/link";

import bannerImage from "../../assets/watch.jpg";
import satelliteImage from "../../assets/satelight.jpg";
const HomeNewsCard = ({ post }) => {
  console.log(post);

  return (
    <div>
      <div className="md:col-span-2 lg:col-span-2 relative ">
        <Image
          alt="Smartwatch display in a car"
          className=" object-cover w-full h-[723px]"
          height={900}
          src={bannerImage}
          width={800}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <span className="inline-block bg-lime-500 text-white px-3 py-1 text-sm font-semibold rounded-full mb-2">
            {post.category}
          </span>
          <Link
            className="text-white block text-2xl md:text-3xl font-bold mb-2 cursor-pointer hover:underline transition duration-300 ease-in-out"
            href={`/${1}`}
          >
            These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales
          </Link>
          <div className="flex items-center text-white text-sm">
            <span>By axilthemes</span>
            <span className="mx-2">•</span>
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>November 6, 2019</span>
            <span className="mx-2">•</span>
            <ShareIcon className="w-4 h-4 mr-1" />
            <span>4,093 Views</span>
            <span className="mx-2">•</span>
            <span>Shares</span>
          </div>
        </div>
      </div>
      {/* Smaller articles */}
      <div className="space-y-8">
        <div className="relative">
          <Image
            alt="Small robot"
            className=" object-cover w-full h-[350px]"
            height={300}
            src={satelliteImage}
            width={400}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <span className="inline-block bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-full mb-2">
              ROBOT
            </span>
            <h3 className="text-white text-lg font-bold mb-1 cursor-pointer hover:underline">
              How To Handle Every TECHNOLOGY Challenge With Ease Using These
            </h3>
            <p className="text-white text-sm">By axilthemes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsCard;
