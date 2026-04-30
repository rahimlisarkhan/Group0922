import Client from '@/shared/helpers/client';
import { ENDPOINTS } from '../endpoint';
import { successHandler, errorHandler } from '../handler';

export const getAlbums = async (params) => {
  try {
    const response = await Client({
      method: 'get',
      url: ENDPOINTS.ALBUM.INDEX,
      params,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const createAlbum = async (data) => {
  try {
    const response = await Client({
      method: 'post',
      url: ENDPOINTS.ALBUM.INDEX,
      data,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const updateAlbum = async (id, data) => {
  try {
    const response = await Client({
      method: 'put',
      url: ENDPOINTS.ALBUM.DETAIL(id),
      data,
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const deleteAlbum = async (id) => {
  try {
    const response = await Client({
      method: 'delete',
      url: ENDPOINTS.ALBUM.DETAIL(id),
    });
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};
