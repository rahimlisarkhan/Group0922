import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogById } from '@/shared/services/api/blog.api';
import type { Blog } from '@/shared/types/blog';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const res = await getBlogById(id);

  if (!res?.result) {
    return { title: 'Post Not Found' };
  }

  const blog: Blog = res.data;
  const title = blog.title.charAt(0).toUpperCase() + blog.title.slice(1);
  const description = blog.body.slice(0, 160);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const res = await getBlogById(id);

  if (!res?.result) notFound();

  const blog: Blog = res.data;

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-32 px-16">

        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
            Post #{blog.id}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 capitalize leading-snug mb-6">
          {blog.title}
        </h1>

        <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">
          {blog.body}
        </p>

      </main>
    </div>
  );
}
