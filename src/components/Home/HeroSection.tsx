import Image from "next/image";
import React from "react";
import { CalendarIcon, ShareIcon } from "lucide-react";

import bannerImage from "../../assets/watch.jpg";
import satelliteImage from "../../assets/satelight.jpg";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Main featured article */}
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
              SMART WATCH
            </span>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 cursor-pointer hover:underline transition duration-300 ease-in-out">
              These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales
            </h2>
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
              alt="Satellite dish"
              className=" object-cover w-full h-[350px]"
              height={300}
              src={satelliteImage}
              width={400}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <span className="inline-block bg-purple-500 text-white px-3 py-1 text-sm font-semibold rounded-full mb-2">
                SATELLITE
              </span>
              <h3 className="text-white text-lg font-bold mb-1 cursor-pointer hover:underline">
                What Can You Do To Save Your TECHNOLOGY From Destruction
              </h3>
              <p className="text-white text-sm">By axilthemes</p>
            </div>
          </div>

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
    </div>
  );
};

export default HeroSection;
