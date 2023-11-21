import PostsList from "@/components/posts/PostsList";
import { GetServerSideProps } from "next";

const PostListPage = () => {
  return (
    <div>
      <h1>Post List Page</h1>
      <PostsList />
    </div>
  );
};

export default PostListPage;
