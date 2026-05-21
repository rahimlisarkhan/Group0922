import BlogCard from '@/feature/blog/components/BlogCard';
import Button from '@/shared/components/Button';
import { Loading } from '@/shared/components/Loading';
import NotFound from '@/shared/components/NotFound';
import { useFetchData } from '@/shared/hooks/useFetchData';
import { getBlogs } from '@/shared/services/api/blog.api';
import { Col, Flex, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const { data, error, loading } = useFetchData(getBlogs);

  const navigate = useNavigate();

  const a = useSelector

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NotFound />;
  }

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
        {data?.map((blog) => (
          <Col key={blog.id} xs={24} sm={12} md={8} lg={6}>
            <BlogCard
              title={blog.title}
              body={blog.body}
              onClick={() => navigate('/blogs/' + blog.id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blogs;
