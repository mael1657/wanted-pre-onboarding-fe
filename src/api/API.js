import axios from 'axios';

export const URL = axios.create({
  baseURL: 'http://localhost:3000/data',
  headers: {},
});