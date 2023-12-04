import { Link } from "@nextui-org/link";
import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Post } from "@prisma/client";
import { IconPencil } from "@tabler/icons-react";

const fetchAllPosts = async () => {
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "no-cache",
  });
  const responseJson = await response.json();
  return responseJson.data;
};

const PostsList = async () => {
  const postList = await fetchAllPosts();

  return (
    <>
      {postList && postList.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titre</th>
              <th>Contenu</th>
              <th>Categorie ID</th>
              <th>Modifier</th>
            </tr>
          </thead>
          <tbody>
            {postList &&
              postList.map((post: Post) => {
                return (
                  <tr key={post.id}>
                    <td align="center">{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    <td>{post.categoryId ?? "-"}</td>
                    <td>
                      <Link href={"/admin/posts/update/" + post.id}>
                        <IconPencil />
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <p>No posts found</p>
      )}
    </>
  );
};

export default PostsList;
