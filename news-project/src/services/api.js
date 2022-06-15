import axios from "axios";

const BACKEND_URL = "https://jsonplaceholder.typicode.com/posts";
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
