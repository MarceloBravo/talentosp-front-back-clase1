import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const instance =axios.create({
    baseURL: API_URL
})


// Interceptor de request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Request:', config);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Interceptor de response
instance.interceptors.response.use(
  (response) => {
    console.log('Response:', response);
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log('Unauthorized, redirecting...');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default instance;