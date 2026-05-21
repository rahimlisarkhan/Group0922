import Client from '@/shared/helpers/client';
import { ENDPOINTS } from '../endpoint';
import { successHandler, errorHandler } from '../handler';

const baseURL = 'https://blog-api-t6u0.onrender.com';

export const getBlogs = async (params) => {
  try {
    const response = await Client({
      method: 'get',
      url: ENDPOINTS.BLOG.INDEX,
      baseURL,
      params,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const createBlog = async (data) => {
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

export const updateBlog = async (id, data) => {
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

export const deleteBlog = async (id) => {
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
