// src/api/api.ts
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Your backend URL
});

// Interceptor to add the token to every request if it exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const loginUser = (credentials: { email: string; password: string }) =>
  API.post('/auth/login', credentials);

export const registerUser = (data: { name: string; email: string; password: string }) =>
  API.post('/auth/register', data);

export const fetchProfile = () =>
  API.get('/user/profile');
