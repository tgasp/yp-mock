import axios from "axios";
import { useAuth } from "./auth";

const API_URL = import.meta.env.VITE_API_URL;
const ADMIN_LOGIN_ENDPOINT = import.meta.env.VITE_AUTH_ADMIN_LOGIN || '/auth/admin/login';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = useAuth.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authApi = {
  login: async (email: string, password: string) => {
    const response = await api.post(ADMIN_LOGIN_ENDPOINT, { email, password });
    return response.data;
  },
};

export default api;