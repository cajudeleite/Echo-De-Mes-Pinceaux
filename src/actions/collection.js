export const GET_COLLECTIONS_FROM_API = 'GET_COLLECTIONS_FROM_API';

export const getCollectionsFromApi = () => ({
  type: GET_COLLECTIONS_FROM_API,
});

export const SET_COLLECTIONS = 'SET_COLLECTIONS';

export const setCollections = (newCollectionsValue) => ({
  type: SET_COLLECTIONS,
  newCollectionsValue,
});

export const GET_COLLECTION_NAME = 'GET_COLLECTION_NAME';

export const getCollectionName = (id) => ({
  type: GET_COLLECTION_NAME,
  id,
});

export const SET_COLLECTION_NAME = 'SET_COLLECTION_NAME';

export const setCollectionName = (collectionName) => ({
  type: SET_COLLECTION_NAME,
  collectionName,
});

export const POST_COLLECTION = 'POST_COLLECTION';

export const postCollection = (name) => ({
  type: POST_COLLECTION,
  name,
});
