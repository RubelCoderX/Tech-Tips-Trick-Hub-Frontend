"use client";
import {
  CalendarDays,
  BarChart2,
  EyeIcon,
  MoreVertical,
  ThumbsDown,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import { useState } from "react";
import moment from "moment";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import React from "react";
import { Button } from "@nextui-org/button";

import { TechTextArea } from "../../form/TechTextAera";
import TechForm from "../../form/TechForm";

import { useUser } from "@/src/context/user.provider";
import {
  useDeleteComment,
  useEditComment,
  usePostComment,
} from "@/src/hooks/post.hooks";
import { TPost } from "@/src/types";
import { FieldValues, SubmitHandler } from "react-hook-form";

const PostData = ({ post }: { post: TPost }) => {
  const { user } = useUser();

  const { mutate: handlePostComment, isPending, isSuccess } = usePostComment();
  const { mutate: handleEditComment } = useEditComment();
  const { mutate: handleDeleteComment } = useDeleteComment();
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");

  // Handler for form submission

  const handleSubmitComment: SubmitHandler<FieldValues> = (data) => {
    const commentData = {
      user: user?._id,
      ...data,
    };

    const commentInfo = {
      postId: post._id,
      comment: commentData,
    };

    handlePostComment(commentInfo);
  };
  // Handler for editing comment
  const handleEditComments = (commentId: string, currentContent: string) => {
    setEditingCommentId(commentId);
    setContent(currentContent);
  };
  // Handler for deleting comment
  const handleDeleteComments = (commentId: string) => {
    handleDeleteComment({ postId: post?._id, commentId });
  };
  const handleCancel = () => {
    setEditingCommentId(null);
  };

  // handle for save action
  const handleSaveClick = (commentId: string) => {
    handleEditComment({ postId: post?._id, commentId, comment: { content } });
    setEditingCommentId(null);
  };
  // Handler for like button
  const handleLike = () => {
    // setLikeCount(likeCount + 1);
  };

  // Handler for dislike button
  const handleDislike = () => {
    // setDislikeCount(dislikeCount + 1);
  };

  return (
    <div className="max-w-5xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-4  mb-10 sm:p-6 md:p-16">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Image
              alt={post?.author?.name}
              className="rounded-full border"
              height={60}
              src={post?.author?.profileImage || ""}
              width={60}
            />
            <div>
              <p className="font-semibold">{post?.author?.name}</p>
              <div className="flex items-center text-sm text-gray-400">
                <CalendarDays className="w-4 h-4 mr-1" />
                <time dateTime={post?.createdAt}>
                  {moment(post?.createdAt).format("MMM DD, YYYY")}
                </time>
              </div>
            </div>
          </div>
          <MoreVertical className="w-5 h-5 text-gray-400" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          French Alps: A snowboarding wonderland
        </h1>

        <p className="text-gray-400 mb-4">
          Create a blog post subtitle that summarizes your post in a few short,
          punchy sentences and entices your audience to continue reading.
        </p>

        <div className="mb-6">
          <Image
            alt="Snowy mountain landscape"
            className="w-full h-auto"
            height={400}
            src={post?.images[0]}
            width={800}
          />
        </div>

        <p className="mb-6">{post?.description}</p>

        <h2 className="text-xl font-semibold mb-3">Design with Ease</h2>

        <blockquote className="border-l-4 border-gray-500 pl-4 mb-4 italic">
          &quot;Do you have a design in mind for your blog? Whether you prefer a
          trendy postcard look or youre going for a more editorial style blog -
          theres a stunning layout for everyone.&quot;
        </blockquote>

        <p className="mb-6">
          Every layout comes with the latest social features built in. Readers
          will be able to easily share posts on social networks like Facebook
          and Twitter, view how many people have liked a post, made comments and
          more. With the Wix, building your online community has never been
          easier.
        </p>

        <h2 className="text-xl font-semibold mb-3">Create Relevant Content</h2>

        <p className="mb-6">
          You&apos;ll be posting loads of engaging content, so be sure to keep
          your blog organized with Categories that also allow readers to explore
          more of what interests them. Each category of your blog has its own
          page page thats fully customizable. Add a catchy title, a brief
          description and a beautiful image to the category page header to truly
          make it your own. You can also add tags (#vacation #dream #summer)
          throughout your posts to reach more people, and help readers search
          for relevant content. Using hashtags can expand your post reach and
          help people find the content that matters to them. Go ahead, #hashtag
          away.
        </p>

        <Divider className="my-4" />
        <div className="flex items-center justify-between text-gray-400 flex-wrap">
          <div className="flex space-x-4 items-center">
            <Link
              className="flex items-center space-x-1 hover:text-white"
              href="#"
            >
              <EyeIcon className="h-5 w-5" />
              <span>0 Views</span>
            </Link>

            <Link
              className="flex items-center space-x-1 hover:text-white"
              href="#"
            >
              <BarChart2 className="h-5 w-5" />
              {/* <span>{comments.length} Comments</span> */}
            </Link>
          </div>

          <div className="flex items-center space-x-4 mt-2 md:mt-0 flex-wrap">
            <button
              className="flex justify-center items-center space-x-1 px-2 py-1 hover:border cursor-pointer"
              onClick={handleLike}
            >
              <ThumbsUp className="h-5 w-5 text-blue-500" />
              <span className="hidden sm:block">Like</span>
              <span className="font-medium text-gray-700 text-xl">
                {/* {likeCount} */}
              </span>
            </button>

            <div
              className="flex justify-center items-center space-x-1 px-2 py-1 cursor-pointer"
              //   onClick={handleDislike}
            >
              <ThumbsDown className="h-5 w-5 text-red-500" />
              <span>Dislike</span>
              <span className="text-sm font-medium text-gray-700">
                {/* {dislikeCount} */}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Comments Section */}
      <Card className="mt-8 container">
        <CardHeader>
          <h2 className="text-2xl font-sans">Comments</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          {post?.comments.map((comment) => (
            <div
              key={comment._id}
              className="mb-4 pb-4 border-b last:border-b-0"
            >
              <div className="flex items-center space-x-2 mb-2">
                <Avatar
                  fallback
                  alt={comment?.user?.name}
                  src={comment?.user?.profileImage}
                />

                <div>
                  <p className="text-sm font-medium">{comment?.user?.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {moment(comment.createdAt).format("MMM DD, YYYY")}
                  </p>
                </div>
              </div>
              <Divider />
              {editingCommentId === comment._id ? (
                <textarea
                  className="w-full border border-gray-300 p-2"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              ) : (
                <p>{comment?.content}</p>
              )}
              <Divider />
              {user?._id === comment?.user?._id && (
                <div className="flex items-center text-sm space-x-2 mt-3">
                  {editingCommentId === comment._id ? (
                    <>
                      <Button
                        radius="none"
                        variant="bordered"
                        onClick={() => handleSaveClick(comment._id)}
                      >
                        Save
                      </Button>
                      <Button
                        radius="none"
                        variant="bordered"
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        radius="none"
                        variant="bordered"
                        onClick={() =>
                          handleEditComments(comment?._id, comment.content)
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        radius="none"
                        variant="bordered"
                        onClick={() => handleDeleteComments(comment?._id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </CardBody>
        <Divider />
        <CardFooter className="w-full">
          <TechForm onSubmit={handleSubmitComment}>
            <TechTextArea
              label="Write comments.."
              name="content"
              radius="none"
              variant="bordered"
            />
            <Button
              className="mt-3"
              isDisabled={isPending && !isSuccess}
              radius="none"
              type="submit"
              variant="bordered"
            >
              {isPending ? (
                <>
                  <MessageSquare className="mr-2 h-5 w-5 animate-spin" />
                  Posting...
                </>
              ) : (
                <>
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Post Comment
                </>
              )}
            </Button>
          </TechForm>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostData;
