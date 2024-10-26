import axios from 'axios';

const apiURL = process.env.API.URL;

const api = axios.create({
    baseURL: apiURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;