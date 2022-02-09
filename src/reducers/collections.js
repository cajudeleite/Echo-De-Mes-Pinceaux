import { SET_COLLECTIONS, SET_COLLECTION_NAME } from "../actions/collection";

const initialState = {
  list: [],
  collectionName: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_COLLECTIONS: {
      return {
        ...state,
        list: action.newCollectionsValue,
      };
    }
    case SET_COLLECTION_NAME: {
      return {
        ...state,
        collectionName: action.collectionName,
      };
    }
    default:
      return state;
  }
};

export default reducer;
