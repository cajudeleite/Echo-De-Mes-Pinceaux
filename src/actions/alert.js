export const SET_ALERT = 'SET_ALERT';

export const setAlert = (title, button, route) => ({
  type: SET_ALERT,
  title,
  button,
  route,
})
