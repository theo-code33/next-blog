"use client";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { Category, Post } from "@prisma/client";
import { useRouter } from "next/navigation";

const updatePost = async (post: Post) => {
  const response = await fetch(`http://localhost:3000/api/posts/${post.id}`, {
    method: "PUT",
    body: JSON.stringify(post),
  });
  const responseJson = await response.json();
  return responseJson.data;
};
const PostUpdateForm = ({
  categories,
  currentPost,
}: {
  categories: Category[];
  currentPost: Post;
}) => {
  const router = useRouter();

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const post: Post = {
      ...currentPost,
      title: (form.title as any).value as string,
      content: form.content.value,
      categoryId:
        categories && categories.length > 0 && form.category
          ? parseInt(form.category.value)
          : null,
    };

    try {
      updatePost(post).then(() => {
        router.push("/admin");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleUpdate}>
      <Input
        type="text"
        name="title"
        id="title"
        label="Title"
        defaultValue={currentPost.title}
        isRequired
      />
      <Textarea
        label="Contenu"
        name="content"
        id="content"
        defaultValue={currentPost.content ?? ""}
        isRequired
      />
      {categories && categories.length > 0 && (
        <Select
          label="category"
          name="category"
          id="category"
          value={currentPost.categoryId ?? ""}
        >
          {categories.map((category) => {
            return (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            );
          })}
        </Select>
      )}
      <Button type="submit">Modifier !</Button>
    </form>
  );
};

export default PostUpdateForm;
