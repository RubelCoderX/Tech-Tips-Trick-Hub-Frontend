"use client";
import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import { FaRegComment, FaVoteYea } from "react-icons/fa";
import Link from "next/link";
import { Checkbox, Divider, Input } from "@nextui-org/react";

import bannerImage from "../../assets/watch.jpg";
import LayoutSkeleton from "../UI/Skeleton/LayoutSkeleton";

import { PostProps } from "@/src/types";

export default function NewsLayout({ posts, layoutLoading }: PostProps) {
  const categories = ["Mobiles", "Laptops", "Gadgets", "Photography", "Gaming"];

  if (layoutLoading) {
    return <LayoutSkeleton />;
  }

  return (
    <div className="flex flex-col lg:flex-row  mt-20">
      <div className="lg:w-10/12 p-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-pink-500 text-center sm:text-left">
            What&apos;s New
          </h1>
          <Divider className="my-6" />
        </div>

        {/* Blog Feed */}
        <div className="space-y-8">
          {posts.slice(6).map((post) => (
            <div
              key={post?._id}
              className="flex flex-col md:flex-row cursor-pointer overflow-hidden border-b border-gray-300 pb-4 last:border-b-0"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden group max-w-full md:max-w-[400px] h-48">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Image
                    alt={post?.title || "Post Image"}
                    className="w-full h-full object-cover"
                    height={140}
                    src={post?.thumbnailImage || bannerImage}
                    width={384}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="px-8  space-y-2 ">
                <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 uppercase">
                  {post?.category || "Category"}
                </span>
                <Link
                  className="text-xl sm:text-2xl lg:text-2xl block hover:text-pink-500 font-bold mb-2 cursor-pointer hover:underline transition duration-300 ease-in-out max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  href={`/${post?._id}`}
                >
                  {post.title || "Post Title"}
                </Link>
                <p className="text-sm md:text-base text-gray-600 max-w-xl line-clamp-10">
                  {post?.description || "Description"}{" "}
                </p>

                <div className="flex items-center text-xs md:text-sm">
                  <span>By {post?.author?.name || "Author"}</span>
                  <span className="mx-2">•</span>
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <span>
                    {new Date(post?.createdAt).toLocaleDateString() || "Date"}
                  </span>
                  <span className="mx-2">•</span>
                  <FaVoteYea className="w-4 h-4 mr-2" />
                  <span>{post?.upVotes?.length} upVotes</span>
                  <span className="mx-2">•</span>
                  <Link
                    className="flex items-center hover:text-pink-500 transition-colors"
                    href={`/${post._id}#comment`}
                  >
                    <FaRegComment className="w-4 h-4 mr-1" />
                    <span>{post?.comments?.length || "No"} Comments</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="lg:w-1/4 lg:sticky  light md:pt-16 p-4">
        <div className="mb-6 ">
          <Input
            label="Search here..."
            name="search"
            radius="none"
            type="text"
            variant="bordered"
          />
        </div>

        {/* Categories Section */}
        <div className="mb-6 text-default">
          <h3 className="text-xl font-bold mb-3">Categories</h3>
          {categories.map((category) => (
            <div key={category} className="mb-2">
              <Checkbox defaultSelected color="primary">
                {category}
              </Checkbox>
            </div>
          ))}
        </div>

        {/* Rating Filter Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Filter by Likes</h3>
          <div className="flex flex-wrap gap-2">
            {[500, 400, 300, 200, 100].map((rating) => (
              <button
                key={rating}
                className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded"
              >
                {rating}+ Likes
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
