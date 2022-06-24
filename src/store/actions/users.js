export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAIL = 'USERS_FAIL';

export function usersAction(data) {
  return {
    type: USERS_REQUEST, payload: { data },
  };
}