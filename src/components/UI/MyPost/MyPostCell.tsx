import React from "react";
import { Tooltip, Button } from "@nextui-org/react";

import UpdatePostModal from "../CreatePost/UpdatePostModal";

import { IUser, TPost } from "@/src/types";
import { useUser } from "@/src/context/user.provider";
import { useDeletePost } from "@/src/hooks/post.hooks";

interface IMangeUserCellProps {
  columnKey: string;
  post: TPost;
}
const MyPostCell: React.FC<IMangeUserCellProps> = ({ columnKey, post }) => {
  const cellValue = post[columnKey];
  const { user } = useUser();
  const { mutate: deletePost } = useDeletePost();

  const handleDeletePost = (id: string) => {
    deletePost(id);
  };

  switch (columnKey) {
    // case "name":
    //   return (
    //     <User
    //       avatarProps={{ radius: "lg", src: post.profileImage }}
    //       description={?.email}
    //       name={cellValue}
    //     >
    //       {user?.email}
    //     </User>
    //   );
    case "category":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">{cellValue}</p>
        </div>
      );
    case "upVotes":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">
            {post?.upVotes?.length} Likes
          </p>
        </div>
      );
    case "downVotes":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">
            {post?.downVotes?.length} UnLikes
          </p>
        </div>
      );
    case "comments":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">
            {post?.comments?.length} Comments
          </p>
        </div>
      );

    case "actions":
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip
            color="warning"
            content={"Are you sure you want to Update this user?"}
          >
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <UpdatePostModal post={post} user={user as IUser} />
            </span>
          </Tooltip>
          <Tooltip>
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50" />
          </Tooltip>
          <Tooltip
            color="danger"
            content={"Are you sure you want to delete this post?"}
          >
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <Button
                className="hover:bg-red-600 hover:text-white duration-300"
                radius="none"
                size="lg"
                variant="bordered"
                onClick={() => handleDeletePost(post?._id)}
              >
                Delete Post
              </Button>
            </span>
          </Tooltip>
        </div>
      );
    default:
      return <>{cellValue}</>;
  }
};

export default MyPostCell;
