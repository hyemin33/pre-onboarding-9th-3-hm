import axios from 'axios';

export const api = axios.create({
  baseURL: '/mock_data.json',
});
