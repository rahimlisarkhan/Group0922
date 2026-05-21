import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from '@/shared/components/Layout';

import { lazy, Suspense } from 'react';
import Spinner from '@/shared/components/Spinner';

const Blogs = lazy(() => import('@/feature/blog/pages/Blogs'));
const BlogCreate = lazy(() => import('@/feature/blog/pages/BlogCreate'));
const BlogDetail = lazy(() => import('@/feature/blog/pages/BlogDetail'));

export const ProtectedRouter = () => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/create" element={<BlogCreate />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />

          <Route path="*" element={<Navigate to="/blogs" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
