import axios from 'axios';

const apiURL = import.meta.env.API_URL;

const api = axios.create({
    baseURL: 'https://671c50842c842d92c38295e6.mockapi.io/api/videobelajar',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;