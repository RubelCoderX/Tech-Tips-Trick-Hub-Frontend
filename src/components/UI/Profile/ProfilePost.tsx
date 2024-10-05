import { useGetMyPosts } from "@/src/hooks/post.hooks";
import Container from "../Container";

const ProfilePost = () => {
  const { data } = useGetMyPosts();
  console.log(data);
  return (
    <Container>
      <h2>Welcome to the ProfilePost page</h2>
    </Container>
  );
};

export default ProfilePost;
