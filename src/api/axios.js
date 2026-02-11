import axios from 'axios';

const API = axios.create({
  baseURL: 'https://techspire-api.onrender.com',
});

// This "Interceptor" automatically attaches your Bearer token to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token; // This is the "Bearer eyJ..." string
  }
  return config;
});

export default API;