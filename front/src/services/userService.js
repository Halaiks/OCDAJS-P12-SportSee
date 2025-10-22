import { USER_MAIN_DATA } from './mock/userData';

/**
 * Simule un appel API pour récupérer un utilisateur par son ID
 * @param {number} userId
 * @returns {object|null}
 */
export function getUserById(userId) {
  const user = USER_MAIN_DATA.find((u) => u.id === userId);
  return user || null;
}