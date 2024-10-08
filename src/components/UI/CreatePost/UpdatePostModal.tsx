import TechModal from "../Modals/TechModal";

import CreatePost from "./CreatePost";

import { IUser, TPost } from "@/src/types";

interface IProps {
  user: IUser;
  post: TPost;
}
const UpdatePostModal = ({ user, post }: IProps) => {
  return (
    <div>
      <TechModal
        buttonClassName="hover:bg-pink-500 hover:text-white hover:duration-300"
        buttonRadius="none"
        buttonText="Update Post"
        buttonVariant="bordered"
        scrollBehavior="inside"
        title="Are you sure you want to update a post?"
      >
        {(closeModal) => (
          <CreatePost
            btn="Update Post"
            closeModal={closeModal}
            post={post}
            user={user}
          />
        )}
      </TechModal>
    </div>
  );
};

export default UpdatePostModal;
