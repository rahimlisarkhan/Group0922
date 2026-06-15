import type { MetadataRoute } from 'next';
import { getBlogs } from '@/shared/services/api/blog.api';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  const blogs = await getBlogs();
  const blogRoutes: MetadataRoute.Sitemap = blogs?.result
    ? blogs.data.map((blog: { id: number | string }) => ({
        url: `${BASE_URL}/blog/${blog.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    : [];

  return [...staticRoutes, ...blogRoutes];
}
