import axios from 'axios';
import { API_BASE_URL } from '../../config';

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000,
});

export async function pingAPI() {
  try {
    const res = await axiosClient.get('/user/12');
    return res.status === 200;
  } catch {
    return false;
  }
}