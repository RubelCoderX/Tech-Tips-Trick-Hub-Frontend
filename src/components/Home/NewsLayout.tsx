import Image from "next/image";
import { CalendarIcon, ShareIcon } from "lucide-react";
import { Divider } from "@nextui-org/divider";
import { FaRegComment } from "react-icons/fa";

import bannerImage from "../../assets/watch.jpg";
import satelliteImage from "../../assets/satelight.jpg";

export default function NewsLayout() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">What's New</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Featured Article */}
          <div className="flex flex-col md:flex-row overflow-hidden">
            <div>
              <Image
                alt="Smart Watch"
                className="w-full md:w-[430px] h-40 object-cover"
                height={300}
                src={bannerImage}
                width={600}
              />
            </div>
            <div className="p-4 space-y-2 ">
              <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase">
                Smart Watch
              </span>
              <h2 className="text-xl md:text-2xl font-bold mb-2 cursor-pointer hover:underline transition duration-300 ease-in-out">
                These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales Almost
                Instantly
              </h2>
              <div className="flex items-center text-sm">
                <span>By axilthemes</span>
                <span className="mx-2">•</span>
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>November 6, 2019</span>
                <span className="mx-2">•</span>
                <FaRegComment className="w-4 h-4 mr-1 cursor-pointer" />
                <span>4,093 Comments</span>
                <span className="mx-2">•</span>
                <span>Shares</span>
              </div>
            </div>
          </div>
          <hr />

          {/* Second Article */}
          <div className="flex flex-col md:flex-row overflow-hidden">
            <div>
              <Image
                alt="Smart Watch"
                className="w-full md:w-[430px] h-40 object-cover"
                height={300}
                src={satelliteImage}
                width={600}
              />
            </div>
            <div className="p-4 space-y-2">
              <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase">
                Smart Watch
              </span>
              <h2 className="text-xl md:text-2xl font-bold mb-2 cursor-pointer hover:underline transition duration-300 ease-in-out">
                These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales Almost
                Instantly
              </h2>
              <div className="flex items-center text-sm">
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
        </div>

        <div className="space-y-8">
          {/* Ad Section */}
          <div className="bg-blue-900 text-white p-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Unlock Exclusive Benefits as a Premium Member
            </h3>
            <p className="mb-4">
              Join our premium membership to gain access to special offers,
              personalized content, and advanced features designed to elevate
              your experience.
            </p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full mt-4">
              UPGRADE NOW
            </button>
          </div>

          {/* Categories Section */}
          <div className="cursor-pointer">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Categories</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Accessories", "Adventure", "Advertising", "Airplane"].map(
                (category, index) => (
                  <div key={index} className="relative">
                    <Image
                      alt={category}
                      className="w-full h-32 object-cover"
                      height={150}
                      src={satelliteImage}
                      width={150}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {category}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
