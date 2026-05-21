import { getBlogById } from '@/shared/services/api/blog.api';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Card,
  Divider,
  Empty,
  List,
  Skeleton,
  Tag,
  Typography,
} from 'antd';

import {
  ArrowLeftOutlined,
  CommentOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: blog,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => getBlogById(id),
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <Card style={{ maxWidth: 800, margin: '0 auto', padding: '24px' }}>
        <Skeleton active paragraph={{ rows: 6 }} />
      </Card>
    );
  }

  if (isError) {
    return (
      <Card
        style={{
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center',
          padding: '40px',
        }}>
        <Empty description={`Error: ${error.message}`} />
      </Card>
    );
  }

  const comments = blog?.data?.comments ?? [];

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      {/* Back button */}
      <Text
        onClick={() => navigate('/blogs')}
        style={{
          cursor: 'pointer',
          color: '#1677ff',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 20,
        }}>
        <ArrowLeftOutlined /> Back to Blogs
      </Text>

      {/* Blog Card */}
      <Card
        style={{ borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
        styles={{ body: { padding: '32px' } }}>
        {/* Meta */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 20,
          }}>
          <Avatar
            icon={<UserOutlined />}
            style={{ backgroundColor: '#1677ff' }}
          />
          <div>
            <Text strong>Author</Text>
            <br />
            <Text type="secondary" style={{ fontSize: 12 }}>
              Post #{blog?.data?.id}
            </Text>
          </div>
          <Tag color="blue" style={{ marginLeft: 'auto' }}>
            Article
          </Tag>
        </div>

        <Divider style={{ margin: '0 0 24px' }} />

        {/* Title */}
        <Title
          level={2}
          style={{ textTransform: 'capitalize', marginBottom: 16 }}>
          {blog?.data?.title}
        </Title>

        {/* Body */}
        <Paragraph style={{ fontSize: 16, lineHeight: 1.8, color: '#444' }}>
          {blog?.data?.body}
        </Paragraph>

        <Divider />

        {/* Comments Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 16,
          }}>
          <CommentOutlined style={{ fontSize: 18, color: '#1677ff' }} />
          <Title level={4} style={{ margin: 0 }}>
            Comments{' '}
            <Text type="secondary" style={{ fontSize: 14 }}>
              ({comments.length})
            </Text>
          </Title>
        </div>

        {comments.length === 0 ? (
          <Empty
            description="No comments yet"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        ) : (
          <List
            dataSource={comments}
            renderItem={(comment) => (
              <List.Item key={comment.id} style={{ alignItems: 'flex-start' }}>
                <List.Item.Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={<Text strong>{comment.name ?? 'Anonymous'}</Text>}
                  description={comment.body}
                />
              </List.Item>
            )}
          />
        )}
      </Card>
    </div>
  );
};

export default BlogDetail;
