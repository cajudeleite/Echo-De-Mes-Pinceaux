export const GET_TECHNIQUES_FROM_API = 'GET_TECHNIQUES_FROM_API';

export const getTechniquesFromApi = () => ({
  type: GET_TECHNIQUES_FROM_API,
});

export const SET_TECHNIQUES = 'SET_TECHNIQUES';

export const setTechniques = (newTechniquesValue) => ({
  type: SET_TECHNIQUES,
  newTechniquesValue,
});
