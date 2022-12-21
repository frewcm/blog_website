import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

axios.interceptors.request.use(
  (request) => {
    const token = JSON.parse(window.localStorage.getItem("currentUser"));

    request.headers.Authorization = `Bearer ${token}`;

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    const token = JSON.parse(window.localStorage.getItem("currentUser"));

    response.headers.Authorization = `Bearer ${token}`;

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const register = async (data) => {
  const response = await axios.post("/api/register", data);
  return response.data;
};
export const login = async (data) => {
  const response = await axios.post("/api/login", data);
  return response.data;
};
export const getPosts = async () => {
  const response = await axios.get("/api/posts");
  return response.data;
};
export const publishBlog = async (data) => {
  const response = await axios.post("/api/posts", data);
  return response.data;
};
