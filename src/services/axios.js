import axios from 'axios';

const api = axios.create({
  baseURL: 'https://projetoescola-d0ob.onrender.com',
  withCredentials: true,
});



export default api;
