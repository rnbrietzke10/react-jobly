import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getItems = async (item) => {
  const response = await api.get(`/${item}`);
  return response.data;
};
