"use client";
import Image from "next/image";
import { CalendarIcon, Crown } from "lucide-react";
import { FaRegComment, FaVoteYea } from "react-icons/fa";
import Link from "next/link";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useCallback, useMemo, useState } from "react";
import { debounce } from "lodash";

import bannerImage from "../../assets/watch.jpg";

// import LayoutSkeleton from "../UI/Skeleton/LayoutSkeleton";
import { categoryOptions } from "@/src/constant";
import { useGetLowestLikedPosts } from "@/src/hooks/post.hooks";
import { TPost } from "@/src/types";

export default function NewsLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  const { data } = useGetLowestLikedPosts({ searchQuery, category });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const posts = useMemo(() => data?.data?.lowestLikedPosts || [], [data]);
  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchQuery(value);
    }, 300),
    []
  );
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  // if (isLoading) {
  //   return (
  //     <div>
  //       <h2>Loading....</h2>
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col lg:flex-row mt-10 mb-10 dark ">
      <div className="lg:w-10/12 md:p-4 p-2">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-pink-500 text-center sm:text-left">
            What&apos;s New
          </h1>
          <Divider className="my-6" />
        </div>

        {/* Blog Feed */}
        <div className="space-y-8">
          {posts.length ? (
            posts.map((post: TPost) => (
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
                <div className="md:px-8 space-y-2">
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

                  <div className="flex items-center text-[10px] md:text-sm">
                    <span>By {post?.author?.name || "Author"}</span>
                    <span className="mx-2">•</span>
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    <span>
                      {new Date(post?.createdAt).toLocaleDateString() || "Date"}
                    </span>
                    <span className="mx-2">•</span>
                    <FaVoteYea className="w-4 h-4 mr-2" />
                    <span>{post?.upVotes?.length} Likes</span>
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
            ))
          ) : (
            <p className="text-center text-gray-500">No posts found.</p>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="lg:w-1/4 lg:sticky md:pt-16 p-4">
        <div className="mb-6 ">
          <h3 className="text-xl font-bold mb-3">Enter keywords to search</h3>
          <Input
            className="light light:bg-[#F9F9F9]"
            label="Search here..."
            name="search"
            radius="none"
            type="text"
            variant="bordered"
            onChange={handleSearch}
          />
        </div>

        {/* Categories Section */}
        <div className="mb-6 ">
          <h3 className="text-xl font-bold mb-3">Categories</h3>
          <Select
            className="w-full light light:bg-[#F9F9F9]"
            label="Select a category"
            placeholder="Choose a category"
            radius="none"
            variant="bordered"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categoryOptions?.map((category) => (
              <SelectItem key={category.key} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </Select>
        </div>

        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardHeader>
            <h3 className="text-xl font-bold flex items-center">
              <Crown className="mr-2" />
              Upgrade to Premium
            </h3>
          </CardHeader>
          <CardBody>
            <p className="mb-4">
              Unlock exclusive features and content with our premium membership!
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Ad-free experience</li>
              <li>Exclusive content</li>
              <li>Priority support</li>
            </ul>
          </CardBody>
          <CardFooter>
            <Link
              className="w-full bg-white text-purple-600 hover:bg-gray-100"
              href={""}
            >
              Upgrade Now
            </Link>
          </CardFooter>
        </Card>
      </aside>
    </div>
  );
}
