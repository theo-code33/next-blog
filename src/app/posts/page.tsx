import PostsList from "@/components/posts/PostsList";

const PostListPage = () => {
  return (
    <div
      style={{
        maxWidth: "1536px",
        height: "100vh",
        padding: "20px",
        margin: "auto",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <PostsList />
    </div>
  );
};

export default PostListPage;
