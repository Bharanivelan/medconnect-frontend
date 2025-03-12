import axios from "axios";

// Base URL for backend
const API = axios.create({
  baseURL: "http://localhost:5001/api",
});

// Add token for protected routes (if needed)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
