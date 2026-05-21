import { Card } from 'antd';

const BlogCard = ({ title, body, onClick }) => {
  return (
    <Card title={title} style={{ width: '100%' }} onClick={onClick}>
      <p>{body}</p>
    </Card>
  );
};

export default BlogCard;
