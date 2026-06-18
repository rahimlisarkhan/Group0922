import Client from '@/shared/helpers/client';
import { ENDPOINTS } from '../endpoint';
import { successHandler, errorHandler } from '../handler';
import { IResponse } from '@/shared/types/global';
import { Blog, IBlogPayload } from '@/shared/types/blog';

const baseURL = 'https://blog-api-t6u0.onrender.com';

export const getBlogs = async (): Promise<IResponse<Blog[]>> => {
  try {
    const response = await Client({
      method: 'get',
      url: ENDPOINTS.BLOG.INDEX,
      baseURL,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const getBlogById = async (id: number): Promise<IResponse<Blog>> => {
  try {
    const response = await Client({
      method: 'get',
      url: ENDPOINTS.BLOG.DETAIL(id),
      baseURL,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const createBlog = async (
  data: IBlogPayload,
): Promise<IResponse<Blog>> => {
  try {
    const response = await Client({
      method: 'post',
      url: ENDPOINTS.BLOG.INDEX,
      baseURL,
      data,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const updateBlog = async (
  id: number,
  data: IBlogPayload,
): Promise<IResponse<Blog>> => {
  try {
    const response = await Client({
      method: 'put',
      url: ENDPOINTS.BLOG.DETAIL(id),
      baseURL,
      data,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const deleteBlog = async (id: number): Promise<IResponse<null>> => {
  try {
    const response = await Client({
      method: 'delete',
      url: ENDPOINTS.BLOG.DETAIL(id),
      baseURL,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};
