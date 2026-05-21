import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import Textarea from '@/shared/components/Textarea';
import { useForm } from '@/shared/hooks/useForm';
import { blogQueries } from '@/shared/queries/blog';
import {
  createBlog,
  getBlogById,
  updateBlog,
} from '@/shared/services/api/blog.api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Flex, notification } from 'antd';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const INITIAL_VALUES = { title: '', body: '' };

const BlogCreate = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const editId = searchParams.get('id');
  const isEditMode = !!editId;

  const { values, handleChange, handleSubmit, setFieldsValue } = useForm({
    initialValues: INITIAL_VALUES,
    onSubmit: (formValues, resetForm) => {
      mutate(formValues, { context: { resetForm } });
    },
  });

  // Fetch existing blog when editing
  const { data: existingBlog } = useQuery({
    queryKey: ['blog', editId],
    queryFn: () => getBlogById(editId),
    enabled: isEditMode,
    staleTime: 5 * 60 * 1000,
  });

  // Pre-fill form once blog data is loaded
  useEffect(() => {
    if (existingBlog?.data) {
      setFieldsValue({
        title: existingBlog.data.title,
        body: existingBlog.data.body,
      });
    }
  }, [existingBlog]);

  const { mutate, isPending } = useMutation({
    mutationFn: (formValues) =>
      isEditMode ? updateBlog(editId, formValues) : createBlog(formValues),
    onSuccess: (response, _variables, context) => {
      const blog = response?.data;

      queryClient.setQueriesData({ queryKey: blogQueries.blogs }, (oldData) => {
        if (!blog || !oldData) return oldData;

        if (isEditMode) {
          return {
            ...oldData,
            data: oldData.data?.map((b) => (b.id === blog.id ? blog : b)),
          };
        }

        return { ...oldData, data: [blog, ...(oldData.data || [])] };
      });

      context?.resetForm();
      notification.success({
        message: isEditMode
          ? 'Blog updated successfully'
          : 'Blog created successfully',
      });
      navigate('/blogs');
    },
    onError: (error) => {
      notification.error({
        message: isEditMode ? 'Failed to update blog' : 'Failed to create blog',
        description: error?.message || 'An error occurred.',
      });
    },
  });

  return (
    <div>
      <h1>{isEditMode ? 'Edit Blog' : 'Create Blog'}</h1>

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
          loading={isPending}
          block
          disabled={isPending}
          onClick={handleSubmit}>
          {isEditMode ? 'Update Blog' : 'Create Blog'}
        </Button>
      </Flex>
    </div>
  );
};

export default BlogCreate;
