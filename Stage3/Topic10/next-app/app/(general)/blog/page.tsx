import type { Metadata } from 'next';
import { getBlogs } from "@/shared/services/api/blog.api";
import { BlogList } from "@/features/blog/components/BlogList";
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Browse all blog posts. Stay up to date with the latest articles and stories.',
  openGraph: {
    title: 'Blog',
    description: 'Browse all blog posts. Stay up to date with the latest articles and stories.',
    type: 'website',
  },
};


export default async function Page() {
  const blogs = await getBlogs();


  if (!blogs.result) {
    redirect('/blog/create')
  }


  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-32 px-16">
        <h1 className="text-2xl font-bold mb-8">Blog</h1>

        {!blogs?.result && (
          <p className="text-red-500">Failed to load blogs.</p>
        )}

        {blogs?.result && <BlogList initialBlogs={blogs.data} />}
      </main>
    </div>
  );
}


