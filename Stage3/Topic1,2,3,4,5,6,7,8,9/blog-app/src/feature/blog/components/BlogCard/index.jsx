import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Card, Flex, Popconfirm } from 'antd';

const BlogCard = ({ title, body, onClick, onDelete, onEdit, isDeleting }) => {
  return (
    <Card
      title={title}
      style={{ width: '100%' }}
      onClick={onClick}
      extra={
        <Flex gap={8} onClick={(e) => e.stopPropagation()}>
          <Button
            size="small"
            icon={<EditOutlined />}
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.();
            }}
          />
          <Popconfirm
            title="Delete this blog?"
            description="This action cannot be undone."
            onConfirm={(e) => {
              e.stopPropagation();
              onDelete?.();
            }}
            onCancel={(e) => e.stopPropagation()}
            okText="Delete"
            okButtonProps={{ danger: true }}
            cancelText="Cancel"
          >
            <Button
              danger
              size="small"
              icon={<DeleteOutlined />}
              loading={isDeleting}
              onClick={(e) => e.stopPropagation()}
            />
          </Popconfirm>
        </Flex>
      }
    >
      <p>{body}</p>
    </Card>
  );
};

export default BlogCard;
