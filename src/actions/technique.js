export const GET_TECHNIQUES_FROM_API = 'GET_TECHNIQUES_FROM_API';

export const getTechniquesFromApi = () => ({
  type: GET_TECHNIQUES_FROM_API,
});

export const SET_TECHNIQUES = 'SET_TECHNIQUES';

export const setTechniques = (newTechniquesValue) => ({
  type: SET_TECHNIQUES,
  newTechniquesValue,
});

export const POST_TECHNIQUE = 'POST_TECHNIQUE';

export const postTechnique = (name) => ({
  type: POST_TECHNIQUE,
  name,
});
