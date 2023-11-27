"use client";
import PostsList from "@/components/posts/PostsList";

const PostListPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PostsList />
    </div>
  );
};

export default PostListPage;
