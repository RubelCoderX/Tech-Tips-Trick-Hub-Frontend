"use client";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { FaSignsPost } from "react-icons/fa6";
import { ThumbsUpIcon, StarIcon } from "lucide-react";
import { FaComment } from "react-icons/fa";
import { Divider } from "@nextui-org/divider";

import UserChartHandle from "./UserChartHandle";

import { useGetMyPosts } from "@/src/hooks/post.hooks";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: JSX.Element;
  color: string;
  negative?: boolean;
  decorator?: string;
}
export default function UserDashboard() {
  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return "Good morning!";
    } else if (currentHour < 18) {
      return "Good afternoon!";
    } else {
      return "Good evening!";
    }
  };
  const { data } = useGetMyPosts();

  const totalPosts = data?.data.length || 0;
  const totalComments =
    data?.data.reduce(
      (acc: any, post: { comments: string | any[] }) =>
        acc + post?.comments?.length,
      0,
    ) || 0;
  const totalLikes =
    data?.data.reduce(
      (acc: any, post: { upVotes: string | any[] }) =>
        acc + post?.upVotes?.length,
      0,
    ) || 0;
  const totalPremiumPosts =
    data?.data.filter(
      (post: { isPremium: boolean }) => post?.isPremium === true,
    ).length || 0;

  return (
    <div className=" p-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Welcome Back! 👋</h1>
        <p className="text-gray-500 mb-4">{getGreeting()}</p>
      </div>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            change="+3%"
            color="bg-gradient-to-r from-purple-500 to-purple-600"
            decorator="Posts"
            icon={<FaSignsPost className="h-6 w-6 text-white" />}
            title="Total Posts"
            value={totalPosts}
          />
          <StatCard
            negative
            change="-2%"
            color="bg-gradient-to-r from-blue-500 to-blue-600"
            decorator="Comments"
            icon={<FaComment className="h-6 w-6 text-white" />}
            title="Total Comments"
            value={totalComments}
          />
          <StatCard
            change="+8%"
            color="bg-gradient-to-r from-green-500 to-green-600"
            decorator="Likes"
            icon={<ThumbsUpIcon className="h-6 w-6 text-white" />}
            title="Total Likes"
            value={totalLikes}
          />
          <StatCard
            change="+1%"
            color="bg-gradient-to-r from-yellow-500 to-yellow-600"
            decorator="Premium"
            icon={<StarIcon className="h-6 w-6 text-white" />}
            title="Total Premium Posts"
            value={totalPremiumPosts}
          />
        </div>
      </main>
      <Divider className="my-9" />
      <UserChartHandle />
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
  icon,
  color,
  negative = false,
  decorator,
}: StatCardProps) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg ${color}`}>
      <div className="p-6 border-b-4 border-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-white text-xl">{title}</p>
            <p className="text-2xl font-semibold text-white">{value}</p>
          </div>
          <div className="p-3 rounded-full bg-opacity-50">{icon}</div>
        </div>
        <div className="mt-4 flex items-center">
          {negative ? (
            <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
          ) : (
            <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
          )}
          <span
            className={`text-sm font-medium ${negative ? "text-red-500" : "text-green-500"}`}
          >
            {change}
          </span>
        </div>
        <div className="mt-2 text-xs text-pink-500 uppercase">{decorator}</div>
      </div>
    </div>
  );
}
