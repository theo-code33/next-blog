import styles from "../../app/page.module.css";

const fetchAllPosts = async () => {
  const response = await fetch("http://localhost:3000/api/posts");
  const responseJson = await response.json();
  return responseJson.data;
};

const PostsList = async () => {
  const postList = await fetchAllPosts();
  return (
    <>
      {postList.map((post: any) => {
        return (
          <div key={post.id} className={styles.post_card}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default PostsList;
