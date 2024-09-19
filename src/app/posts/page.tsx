import Link from "next/link";

interface Post {
  id: number;
  title: string;
}

const PostList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.slice(0, 10).map((post) => (
        <div key={post.id} className="bg-white p-4 rounded-lg shadow">
          <Link
            className="text-blue-600 hover:underline"
            href={`/posts/${post.id}`}
          >
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
