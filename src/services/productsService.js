import { AuthorizedService } from '../api';

const BASE_URL = 'api/products';

export const getAllProducts = async () => {
  const response = await AuthorizedService.get(BASE_URL);
  return response.data;
};

export const getFeaturedProducts = async () => {
  const response = await AuthorizedService.get(`${BASE_URL}/featured`);
  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await AuthorizedService.get(`${BASE_URL}/category/${category}`);
  return response.data;
};

export const getViewedProducts = async () => {
  const response = await AuthorizedService.get(`${BASE_URL}/recently-viewed`);
  console.log(response, "aaa")
  return response.data;
};