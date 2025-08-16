import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./BlogData";


const BlogPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Insights, stories, and updates from the world of tech and AI.
        </p>
      </section>

      {/* Blog List */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                {post.date} • {post.author}
              </p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/BlogDetailsPage/${post.id}`}
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
