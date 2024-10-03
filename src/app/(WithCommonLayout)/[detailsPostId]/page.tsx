/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  BarChart2,
  EyeIcon,
  MoreVertical,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";

import detailsImage from "../../../assets/techno-2.jpg";

import TechForm from "@/src/components/form/TechForm";
import { TechTextArea } from "@/src/components/form/TechTextAera";
import { usePostComment } from "@/src/hooks/post.hooks";
import { useUser } from "@/src/context/user.provider";

export default function BlogPost() {
  // // const [comments, setComments] = useState([]);
  // const [newComment, setNewComment] = useState("");
  const { user } = useUser();

  const [likeCount, setLikeCount] = useState(3);
  const [dislikeCount, setDislikeCount] = useState(4);
  const { mutate: handlePostComment, isPending, isSuccess } = usePostComment();

  const handleSubmit = (data) => {
    const commentData = {
      user: user?._id,
      ...data,
    };
    const commentInfo = {};
  };

  // Handler for like button
  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  // Handler for dislike button
  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <div className="max-w-5xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-4  mb-10 sm:p-6 md:p-16">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Image
              alt="Admin"
              className="rounded-full border"
              height={60}
              src="https://i.ibb.co/hBpV37F/avater.png"
              width={60}
            />
            <div>
              <p className="font-semibold">Admin</p>
              <div className="flex items-center text-sm text-gray-400">
                <CalendarDays className="w-4 h-4 mr-1" />
                <span>Mar 21, 2023 • 2 min read</span>
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
            src={detailsImage}
            width={800}
          />
        </div>

        <p className="mb-6">
          Welcome to your blog post. Use this space to connect with your readers
          and potential customers in a way thats current and interesting. Think
          of it as an ongoing conversation where you can share updates about
          business, trends, news, and more.
        </p>

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
                {likeCount}
              </span>
            </button>

            <div
              className="flex justify-center items-center space-x-1 px-2 py-1 cursor-pointer"
              onClick={handleDislike}
            >
              <ThumbsDown className="h-5 w-5 text-red-500" />
              <span>Dislike</span>
              <span className="text-sm font-medium text-gray-700">
                {dislikeCount}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-4 my-10 sm:p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <Divider className="my-3" />
        <div className="mb-6">
          <TechForm onSubmit={handleSubmit}>
            <TechTextArea
              label="Write a Comment"
              name="comment"
              radius="none"
              size="md"
              type="textarea"
              variant="bordered"
            />
            <Button
              className="mt-2"
              radius="none"
              type="submit"
              variant="bordered"
            >
              Publish Comment
            </Button>
          </TechForm>
        </div>
        {/* <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Image
                  alt="User Avatar"
                  className="rounded-full border"
                  height={40}
                  src="https://i.ibb.co/hBpV37F/avater.png"
                  width={40}
                />
                <div>
                  <p className="font-semibold text-sm">{comment.author}</p>
                  <p className="text-gray-400 text-xs">
                    {new Date(comment.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="text-sm">{comment.text}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
