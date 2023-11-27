import PostsList from "@/components/admin/PostsList";
import { Link } from "@nextui-org/link";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Posts</h2>
      <div>
        <Link href="/admin/posts/create">Create New Post</Link>
        <PostsList />
      </div>
    </div>
  );
};

export default AdminDashboard;
