import axios from 'axios';

const apiURL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: apiURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; 
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);



export default api;
