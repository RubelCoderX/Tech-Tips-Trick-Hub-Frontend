"use client"; // Ensure to keep this at the top
import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import { FaRegComment } from "react-icons/fa";

import bannerImage from "../../assets/watch.jpg";
import satelliteImage from "../../assets/satelight.jpg";

export default function NewsLayout({ posts }) {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">What's New</h1>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {posts.slice(6).map((post) => (
            <div
              key={post._id}
              className="flex flex-col md:flex-row overflow-hidden border-b border-gray-300 pb-4 last:border-b-0"
            >
              <div className="">
                <Image
                  alt={post.title || "Post Image"}
                  className=" w-[400px] h-40 object-cover"
                  height={300}
                  src={post.images[0] || bannerImage}
                  width={400}
                />
              </div>
              <div className="p-4 space-y-2">
                <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 uppercase">
                  {post.category || "Category"}
                </span>
                <h2 className="text-xl md:text-2xl font-bold mb-2 cursor-pointer hover:underline transition duration-300 ease-in-out">
                  {post.title || "Post Title"}
                </h2>
                <div className="flex items-center text-sm">
                  <span>By {post.author?.name || "Author"}</span>
                  <span className="mx-2">•</span>
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <span>
                    {new Date(post.createdAt).toLocaleDateString() || "Date"}
                  </span>
                  <span className="mx-2">•</span>
                  <FaRegComment className="w-4 h-4 mr-1 cursor-pointer" />
                  <span>{post.comments || 0} Comments</span>
                  <span className="mx-2">•</span>
                  <span>{post.shares || 0} Shares</span>
                </div>
              </div>
            </div>
          ))}
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
