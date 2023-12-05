"use client";
import { Link } from "@nextui-org/link";
import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import { Post } from "@prisma/client";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

const PostsList = ({ postList }: { postList: Post[] }) => {
  const [posts, setPosts] = useState<Post[]>(postList);
  const handleDeletePost = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "DELETE",
      });
      const postListUpdated = posts.filter((post) => post.id !== id);
      setPosts(postListUpdated);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {posts && posts.length > 0 ? (
        <Table>
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Titre</TableColumn>
            <TableColumn>Contenu</TableColumn>
            <TableColumn>Categorie ID</TableColumn>
            <TableColumn>Modifier</TableColumn>
            <TableColumn>Supprimer</TableColumn>
          </TableHeader>
          <TableBody>
            {posts.map((post: Post) => {
              return (
                <TableRow key={post.id}>
                  <TableCell align="center">{post.id}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.content}</TableCell>
                  <TableCell>{post.categoryId ?? "-"}</TableCell>
                  <TableCell>
                    <Link href={"/admin/posts/update/" + post.id}>
                      <IconPencil />
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Button
                      color="danger"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      <IconTrash />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <p>No posts found</p>
      )}
    </>
  );
};

export default PostsList;
