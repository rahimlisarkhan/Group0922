'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteBlog } from "@/shared/services/api/blog.api";
import { BlogCard } from "@/features/blog/components/BlogCard";
import type { Blog } from "@/types/blog";

type BlogListProps = {
  initialBlogs: Blog[];
};

export const BlogList = ({ initialBlogs }: BlogListProps) => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);

  const handleRemove = async (id: number) => {
    const res = await deleteBlog(id);
    if (res?.result) {
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <button
          onClick={() => router.push('/blog/create')}
          className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          + Create Blog
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            body={blog.body}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};
