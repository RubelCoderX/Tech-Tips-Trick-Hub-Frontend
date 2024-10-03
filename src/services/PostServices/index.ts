"use server";
import { revalidateTag } from "next/cache";

import axiosInstance from "@/src/lib/AxiosInstence";

export const getAllPosts = async () => {
  const res = await axiosInstance.get("/post");

  return res.data;
};

export const getPostById = async (id: string) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
    next: {
      tags: ["post"],
    },
  };
  const res = await axiosInstance.get(`/post/${id}`, fetchOptions);

  if (!res.data) {
    throw new Error("Post not found");
  }

  return res.data;
};

export const createComment = async (
  postId: string,
  commentData: { user: string; content: string },
) => {
  try {
    const { data } = await axiosInstance.post(
      `/post/post-comment/${postId}`,
      commentData,
    );

    revalidateTag("post");

    return data;
  } catch (error) {
    throw new Error("Failed to create comment");
  }
};

export const editComment = async (
  postId: string,
  commentId: string,
  newComment: { content: string },
) => {
  try {
    const { data } = await axiosInstance.put(
      `/posts/update-comment/${postId}/${commentId}`,
      newComment,
    );

    if (data?.success) {
      revalidateTag("post");

      return null;
    }
  } catch (error) {
    throw new Error("Failed to edit comment");
  }
};

export const deleteComment = async (postId: string, commentId: string) => {
  try {
    const { data } = await axiosInstance.delete(
      `/posts/delete-comment/${postId}/${commentId}`,
    );

    if (data?.success) {
      revalidateTag("post");

      return null;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
