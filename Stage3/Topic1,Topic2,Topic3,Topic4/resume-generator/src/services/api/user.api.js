import Client from "@/helpers/client";
import { ENDPOINTS } from "../Endpoint";
import { successHandler, errorHandler } from "../handler";

export const getUsers = async (params) => {
  try {
    const response = await Client({
      method: "get",
      url: ENDPOINTS.USER.INDEX,
      params,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const createUser = async (data) => {
  try {
    const response = await Client({
      method: "post",
      url: ENDPOINTS.USER.INDEX,
      data,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const updateUser = async (id, data) => {
  try {
    const response = await Client({
      method: "put",
      url: ENDPOINTS.USER.DETAIL(id),
      data,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await Client({
      method: "delete",
      url: ENDPOINTS.USER.DETAIL(id),
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};
