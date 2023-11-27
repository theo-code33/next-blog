import PostsList from "@/components/posts/PostsList";
import { GetServerSideProps } from "next";

const PostListPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          marginBottom: "100px",
        }}
      >
        Post List Page
      </h1>
      <PostsList />
    </div>
  );
};

export default PostListPage;
