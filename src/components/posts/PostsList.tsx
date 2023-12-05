import { Post } from "@prisma/client";
import styles from "../../app/page.module.css";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";

const fetchAllPosts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/posts", {
      next: {
        revalidate: 3600,
      },
    });
    const responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(error);
  }
};

const PostsList = async () => {
  const postList: Post[] = await fetchAllPosts();
  return (
    <>
      {postList.length > 0 ? (
        postList.map((post) => {
          return (
            <Card
              key={post.id}
              style={{
                width: "300px",
              }}
            >
              <CardHeader>
                <p className="text-lg font-semibold">{post.title}</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-sm">{post.content}</p>
              </CardBody>
              <CardFooter>
                <Link href={`/posts/${post.id}`}>Lire plus</Link>
              </CardFooter>
            </Card>
          );
        })
      ) : (
        <p>No posts found</p>
      )}
    </>
  );
};

export default PostsList;
