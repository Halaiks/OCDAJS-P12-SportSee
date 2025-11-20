import { PREFER_API, DEFAULT_USER_ID } from '../config';
import { apiService } from './api/apiService';
import { mockService } from './mock/mockService';
import { pingAPI } from './api/axiosClient';

import { UserModel } from '../models/UserModel';
import { ActivityModel } from '../models/ActivityModel';
import { AverageSessionsModel } from '../models/AverageSessionsModel';
import { PerformanceModel } from '../models/PerformanceModel';

export async function loadUserBundle(
  userId = DEFAULT_USER_ID,
  preferredSource = 'api'
) {
  let useAPI = false;

  // Etape 1 : déterminer la source de données à utiliser
  if (preferredSource === 'api' && PREFER_API) {
    const ok = await pingAPI();
    if (ok) {
      useAPI = true;
    }
  } else if (preferredSource === 'api') {
    useAPI = true;
  }

  let userRaw;
  let activityRaw;
  let avgRaw;
  let perfRaw;

  // Etape 2 : essayer de charger depuis l'API si possible
  if (useAPI) {
    try {
      const [u, a, avg, p] = await Promise.all([
        apiService.getUserById(userId),
        apiService.getUserActivity(userId),
        apiService.getUserAverageSessions(userId),
        apiService.getUserPerformance(userId),
      ]);

      if (u) {
        userRaw = u;
        activityRaw = a;
        avgRaw = avg;
        perfRaw = p;
      } else {
        console.warn(`[Data] Utilisateur ${userId} introuvable via l'API, retour MOCK`);
        useAPI = false;
      }
    } catch (error) {
      console.warn(`[Data] API error (${error?.message || error}), retour MOCK`);
      useAPI = false;
    }
  }

  // Etape 3 : si échec ou non-API, charger depuis les données MOCK
  if (!useAPI) {
    const [u, a, avg, p] = await Promise.all([
      mockService.getUserById(userId),
      mockService.getUserActivity(userId),
      mockService.getUserAverageSessions(userId),
      mockService.getUserPerformance(userId),
    ]);

    userRaw = u;
    activityRaw = a;
    avgRaw = avg;
    perfRaw = p;
  }

  // Etape 4 : vérifier que les données utilisateur existent  
  if (!userRaw) {
    throw new Error(`Aucune donnée trouvée pour l'utilisateur Id: ${userId} (API et MOCK)`);
  }

  console.log(`[Data] Source: ${useAPI ? 'API' : 'MOCK'}, User ID: ${userId}`);

  return {
    user: new UserModel(userRaw),
    activity: new ActivityModel(activityRaw),
    average: new AverageSessionsModel(avgRaw),
    performance: new PerformanceModel(perfRaw),
    source: useAPI ? 'API' : 'MOCK',
  };
}