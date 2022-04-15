import axios from 'axios';

const API = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:3001',
});

API.interceptors.response.use(
    (response) => (response ? response.data : {}),
    (error) => {
        console.log(error);
    },
);

// for each request going out
API.interceptors.request.use(async (config) =>{
    // pull the token out of local storage
    const token = localStorage.getItem('storedToken');
    // if there is no token do nothin
    if(!token) return config;
    // if there is a token, set a header for any request that contains the token
    return {
        ...config,
        headers: { Authorization: `Bearer ${token}` },
    };
});

export default API;