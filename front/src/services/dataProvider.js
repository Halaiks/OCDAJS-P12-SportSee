import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './mock/userData';

import { UserModel } from '../models/UserModel';
import { ActivityModel } from '../models/ActivityModel';
import { AverageSessionsModel } from '../models/AverageSessionsModel';
import { PerformanceModel } from '../models/PerformanceModel';

/**
 * Charge toutes les données utilisateur depuis le MOCK (temporaire).
 * Retourne un "bundle" formaté prêt pour les composants.
 */
export async function loadUserBundle(userId) {
  const main = USER_MAIN_DATA.find(u => u.id === Number(userId));
  const activity = USER_ACTIVITY.find(u => u.userId === Number(userId));
  const average = USER_AVERAGE_SESSIONS.find(u => u.userId === Number(userId));
  const performance = USER_PERFORMANCE.find(u => u.userId === Number(userId));

  console.log('[Data] Source: MOCK');

  return {
    user: new UserModel(main),
    activity: new ActivityModel(activity),
    average: new AverageSessionsModel(average),
    performance: new PerformanceModel(performance),
    source: 'mock',
  };
}