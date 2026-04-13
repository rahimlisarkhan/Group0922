import Client from "@/helpers/client";
import { ENDPOINTS } from "../endpoint";
import { successHandler, errorHandler } from "../handler";

export const getPosts = async (params) => {
  try {
    const response = await Client({
      method: "get",
      url: ENDPOINTS.POSTS.INDEX,
      params,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const createPost = async (data) => {
  try {
    const response = await Client({
      method: "post",
      url: ENDPOINTS.POSTS.INDEX,
      data,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const updatePost = async (id, data) => {
  try {
    const response = await Client({
      method: "put",
      url: ENDPOINTS.POSTS.DETAIL(id),
      data,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await Client({
      method: "delete",
      url: ENDPOINTS.POSTS.DETAIL(id),
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};
