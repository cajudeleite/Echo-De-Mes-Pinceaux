export const AUTHENTICATE = 'AUTHENTICATE';

export const authenticate = (username, password) => ({
  type: AUTHENTICATE,
  username,
  password,
});
