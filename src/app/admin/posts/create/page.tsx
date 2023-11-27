import PostForm from "@/components/admin/PostForm";
import { Input, Textarea } from "@nextui-org/input";
import { Category, Post } from "@prisma/client";

const fetchAllCategories = async () => {
  const response = await fetch("http://localhost:3000/api/categories");
  const responseJson = await response.json();
  return responseJson.data;
};

const CreatePost = async ({ categories }: { categories: Category[] }) => {
  return (
    <>
      <h1>Créer un nouveau post</h1>
      <PostForm categories={categories} />
    </>
  );
};

export default CreatePost;

export const getServersideProps = async () => {
  const categories = await fetchAllCategories();

  return {
    props: {
      categories,
    },
  };
};
