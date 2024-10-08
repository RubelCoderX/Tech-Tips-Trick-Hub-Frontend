"use client";
import { Divider, Select, SelectItem } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Input,
} from "@nextui-org/react";
import React from "react";

import TechModal from "../Modals/TechModal";
import CreatePost from "../CreatePost/CreatePost";

import { columns } from "./MyPostContent";
import MyPostCell from "./MyPostCell";

import { useGetMyPosts } from "@/src/hooks/post.hooks";
import { IUser, TPost } from "@/src/types";
import { categories } from "@/src/constant";
import { useUser } from "@/src/context/user.provider";
export default function MyPostTable() {
  const { data, isLoading, error } = useGetMyPosts();
  const { user } = useUser();

  if (isLoading) {
    return (
      <div className="text-center my-auto">
        <Spinner color="primary" label="Loading..." labelColor="primary" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center text-danger">
        Error fetching posts: {error.message}
      </div>
    );
  }

  const posts = data?.data || [];

  return (
    <div className="md:px-6 px-2">
      <div className="border mt-4">
        <div className="max-w-6xl  mx-auto px-4 py-10">
          <h1 className="text-center text-3xl font-bold mb-2">
            My Published <span className="text-pink-500">Posts</span>
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Review and manage your published posts, track their performance, and
            make updates when needed.
          </p>

          {/* Search, Categories, and Create Post button */}
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="w-full sm:w-auto flex-grow sm:mr-4">
              <Input
                fullWidth
                placeholder="Search posts..."
                radius="none"
                size="lg"
                variant="bordered"
              />
            </div>
            <div className="w-full sm:w-auto flex-grow sm:mr-4">
              <Select
                items={categories}
                placeholder="All Categories"
                radius="none"
                size="lg"
                variant="bordered"
              >
                {(category) => (
                  <SelectItem key={category?.key} variant="bordered">
                    {category?.label}
                  </SelectItem>
                )}
              </Select>
            </div>
            <div>
              <TechModal
                buttonClassName="hover:bg-pink-500 hover:text-white hover:duration-300"
                buttonRadius="none"
                buttonText="Create Post"
                buttonVariant="bordered"
                scrollBehavior="inside"
                title="Create a New Post to Share Your Ideas"
              >
                {(closeModal) => (
                  <CreatePost
                    btn="Create Post"
                    closeModal={closeModal}
                    user={user as IUser}
                  />
                )}
              </TechModal>
            </div>
          </div>
        </div>
      </div>

      <Divider className="my-6 " />
      {posts.length > 0 ? (
        <Table aria-label="Manage Users Table" className="mt-10">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={posts}>
            {(post: TPost) => (
              <TableRow key={post.id || Math.random()}>
                {(columns) => (
                  <TableCell>
                    <MyPostCell columnKey={columns as string} post={post} />
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center mt-4 text-pink-500">
          <b>
            No posts to show at the moment. Why not create your first post and
            share your ideas?
          </b>{" "}
          {/* Updated message */}
        </div>
      )}
    </div>
  );
}
