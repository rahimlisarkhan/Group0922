import { notFound } from 'next/navigation';
import { getBlogById } from '@/shared/services/api/blog.api';
import type { Blog } from '@/types/blog';

type Props = {
  params: {
    id: string;
  };
};

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
