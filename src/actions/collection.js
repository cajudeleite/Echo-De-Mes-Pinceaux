export const GET_COLLECTIONS_FROM_API = 'GET_COLLECTIONS_FROM_API';

export const getCollectionsFromApi = () => ({
  type: GET_COLLECTIONS_FROM_API,
});

export const SET_COLLECTIONS = 'SET_COLLECTIONS';

export const setCollections = (newCollectionsValue) => ({
  type: SET_COLLECTIONS,
  newCollectionsValue,
});
