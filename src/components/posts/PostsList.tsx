import { Post } from "@prisma/client";
import styles from "../../app/page.module.css";

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
            <div key={post.id} className={styles.post_card}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <a href={`/${post.id}`}>Lire plus</a>
              <hr />
            </div>
          );
        })
      ) : (
        <p>No posts found</p>
      )}
    </>
  );
};

export default PostsList;
