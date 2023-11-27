"use client";
import { Category, Post } from "@prisma/client";
import { Input, Textarea } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";

const createPost = async (post: Omit<Post, "id" | "createdAt">) => {
  const response = await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    body: JSON.stringify(post),
  });
  const responseJson = await response.json();
  return responseJson.data;
};

const PostForm = ({ categories }: { categories: Category[] }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    console.log((form.title as any).value);
    console.log(form.content.value);
    console.log(
      categories && categories.length > 0 && form.category ? true : false
    );

    const post: Omit<Post, "id" | "createdAt"> = {
      title: (form.title as any).value as string,
      content: form.content.value,
      categoryId:
        categories && categories.length > 0 && form.category
          ? parseInt(form.category.value)
          : null,
    };
    try {
      createPost(post).then(() => {
        form.reset();
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input type="text" name="title" id="title" label="Title" isRequired />
      <Textarea label="Contenu" name="content" id="content" isRequired />
      {categories && categories.length > 0 && (
        <Select label="category" name="category" id="category" value="">
          {categories.map((category) => {
            return (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            );
          })}
        </Select>
      )}
      <Button type="submit">Créer !</Button>
    </form>
  );
};

export default PostForm;
