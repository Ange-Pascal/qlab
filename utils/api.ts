// utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // ton API Laravel
  withCredentials: true, // si tu utilises cookies ou Sanctum
  headers: {
    'Accept': 'application/json',
  },
});

export default api;
