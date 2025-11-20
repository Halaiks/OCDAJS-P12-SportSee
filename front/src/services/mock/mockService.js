import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './userData';

export const mockService = {
  async getUserById(id) {
    return USER_MAIN_DATA.find(u => u.id === id);
  },
  async getUserActivity(id) {
    return USER_ACTIVITY.find(a => a.userId === id);
  },
  async getUserAverageSessions(id) {
    return USER_AVERAGE_SESSIONS.find(a => a.userId === id);
  },
  async getUserPerformance(id) {
    return USER_PERFORMANCE.find(a => a.userId === id);
  },
};