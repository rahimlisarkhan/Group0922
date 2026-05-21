import BlogCard from '@/feature/blog/components/BlogCard';
import Button from '@/shared/components/Button';
import { Loading } from '@/shared/components/Loading';
import NotFound from '@/shared/components/NotFound';
import { blogQueries } from '@/shared/queries/blog';
import { deleteBlog, getBlogs } from '@/shared/services/api/blog.api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Col, Flex, Row, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: blogQueries.blogs,
    queryFn: getBlogs,
    staleTime: 1000 * 60 * 5,
  });

  const {
    mutate: handleDelete,
    variables: deletingId,
    isPending: isDeleting,
  } = useMutation({
    mutationFn: deleteBlog,
    onSuccess: (_, id) => {
      queryClient.setQueryData(blogQueries.blogs, (oldData) => ({
        ...oldData,
        data: oldData?.data?.filter((blog) => blog.id !== id),
      }));
      notification.success({ message: 'Blog deleted successfully' });
    },
    onError: () => {
      notification.error({ message: 'Failed to delete blog' });
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <NotFound />;

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        style={{ marginBottom: '20px' }}>
        <h1>Blogs</h1>
        <Button onClick={() => navigate('/blogs/create')}>
          Create New Blog
        </Button>
      </Flex>

      <Row gutter={[16, 16]}>
        {data?.data?.map((blog) => (
          <Col key={blog.id} xs={24} sm={12} md={8} lg={6}>
            <BlogCard
              title={blog.title}
              body={blog.body}
              onClick={() => navigate('/blogs/' + blog.id)}
              onEdit={() => navigate('/blogs/create?id=' + blog.id)}
              onDelete={() => handleDelete(blog.id)}
              isDeleting={isDeleting && deletingId === blog.id}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blogs;
