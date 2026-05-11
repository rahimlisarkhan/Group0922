import axios from 'axios';

const Client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default Client;

Client.interceptors.request.use(
  (config) => {
    // You can add authorization headers or other custom headers here
    // For example: config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

Client.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can handle global errors here, such as logging or showing notifications
    return Promise.reject(error);
  },
);
