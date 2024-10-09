/* eslint-disable import/order */
"use client";

import { Divider } from "@nextui-org/divider";
import ProfilePost from "./ProfilePost";
import { useGetMyPosts } from "@/src/hooks/post.hooks";

import ProfileHeader from "./ProfileHeader";

export default function Profile() {
  const { data, isLoading } = useGetMyPosts({});
  const post = data?.data;

  return (
    <div className="container">
      <ProfileHeader />
      <Divider className="my-8 ml-3" />
      <div className="h-[calc(100vh-350px)] overflow-y-auto">
        <ProfilePost
          heroLoading={false}
          layoutLoading={false}
          postLoading={isLoading}
          posts={post}
          topLoading={false}
        />
      </div>
    </div>
  );
}
