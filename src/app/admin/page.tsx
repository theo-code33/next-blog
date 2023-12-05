import PostsList from "@/components/admin/PostsList";
import { Link } from "@nextui-org/link";

const fetchAllPosts = async () => {
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "no-cache",
  });

  const responseJson = await response.json();
  return responseJson.data;
};

const AdminDashboard = async () => {
  const postList = await fetchAllPosts();
  return (
    <div
      className="flex flex-col"
      style={{
        padding: "20px",
        gap: "20px",
      }}
    >
      <Link href="/admin/posts/create" className="justify-end">
        Créer un nouveau post
      </Link>
      <PostsList postList={postList} />
    </div>
  );
};

export default AdminDashboard;
