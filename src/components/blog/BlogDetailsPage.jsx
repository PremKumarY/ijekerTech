import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./BlogData";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-indigo-600 underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {post.date} • {post.author}
        </p>
        <p className="text-gray-700 whitespace-pre-line">{post.content}</p>

        <Link
          to="/blog/BlogPage"
          className="inline-block mt-8 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
        >
          ← Back to Blog
        </Link>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
