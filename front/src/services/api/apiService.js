import { axiosClient } from './axiosClient';

export const apiService = {
  async getUserById(id) {
    const res = await axiosClient.get(`/user/${id}`);
    return res.data.data;
  },
  async getUserActivity(id) {
    const res = await axiosClient.get(`/user/${id}/activity`);
    return res.data.data;
  },
  async getUserAverageSessions(id) {
    const res = await axiosClient.get(`/user/${id}/average-sessions`);
    return res.data.data;
  },
  async getUserPerformance(id) {
    const res = await axiosClient.get(`/user/${id}/performance`);
    return res.data.data;
  },
};