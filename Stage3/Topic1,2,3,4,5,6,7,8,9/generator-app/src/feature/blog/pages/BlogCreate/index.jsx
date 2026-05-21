import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import Textarea from '@/shared/components/Textarea';
import { useForm } from '@/shared/hooks/useForm';
import { createBlog } from '@/shared/services/api/blog.api';
import { Flex, notification } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const INITIAL_VALUES = { title: '', body: '' };

const BlogCreate = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { values, handleChange, handleSubmit } = useForm({
    initialValues: INITIAL_VALUES,
    onSubmit: handlePost,
  });

  const handlePost = async (formValues, resetForm) => {
    setLoading(true);

    const response = await createBlog(formValues);

    if (response.result) {
      setLoading(false);
      resetForm();
      notification.success({
        message: 'Blog created successfully',
      });
      navigate('/blogs');
      return;
    }

    setLoading(false);
    notification.error({
      message: 'Failed to create blog',
      description:
        response.data?.message || 'An error occurred while creating the blog.',
    });
  };

  return (
    <div>
      <h1>Create Blog</h1>

      <Flex vertical gap={16} align="center">
        <Input
          id="title"
          name="title"
          label="Title"
          placeholder="Enter blog title"
          value={values.title}
          onChange={handleChange}
          required
        />

        <Textarea
          id="body"
          name="body"
          label="Body"
          placeholder="Enter blog content"
          value={values.body}
          onChange={handleChange}
          rows={6}
          required
        />

        <Button
          htmlType="submit"
          loading={loading}
          block
          onClick={handleSubmit}>
          Create Blog
        </Button>
      </Flex>
    </div>
  );
};

export default BlogCreate;
