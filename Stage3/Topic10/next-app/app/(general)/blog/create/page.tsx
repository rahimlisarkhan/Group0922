'use client';

import { useRouter } from 'next/navigation';
import { useForm } from '@/shared/hooks/useForm';
import { createBlog } from '@/shared/services/api/blog.api';

type BlogFormValues = {
  title: string;
  body: string;
};

export default function Page() {
  const router = useRouter();

  const { values, handleChange, handleSubmit } = useForm({
    initialValues: { title: '', body: '' } as BlogFormValues,
    onSubmit: async (values: BlogFormValues, resetForm: () => void) => {
      const res = await createBlog(values);
      if (res?.result) {
        resetForm();
        router.push('/blog');
      }
    },
  });

  return (
    <main className="flex flex-1 w-full max-w-3xl flex-col py-32 px-16 mx-auto">
      <h1 className="text-2xl font-bold mb-8">Create Blog</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={values.title}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="body" className="text-sm font-medium text-gray-700">
            Body
          </label>
          <textarea
            id="body"
            name="body"
            rows={6}
            value={values.body}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Write your blog content..."
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Publish
          </button>
          <button
            type="button"
            onClick={() => router.push('/blog')}
            className="px-6 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}
