import PostUpdateForm from "@/components/admin/PostUpdateForm";

const getCurrentPost = async (postId: string) => {
  const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    next: {
      revalidate: 3600,
    },
  });
  const responseJson = await response.json();
  return responseJson.data;
};

const fetchAllCategories = async () => {
  const response = await fetch("http://localhost:3000/api/categories");
  const responseJson = await response.json();
  return responseJson.data;
};

const UpdatePost = async ({
  params,
}: {
  params: {
    postId: string;
  };
}) => {
  const currentPost = await getCurrentPost(params.postId);
  const categories = await fetchAllCategories();

  return (
    <>
      <h1>Modifier le post {params.postId}</h1>
      <PostUpdateForm categories={categories} currentPost={currentPost} />
    </>
  );
};

export default UpdatePost;
