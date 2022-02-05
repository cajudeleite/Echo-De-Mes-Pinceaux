import { SET_COLLECTIONS } from "../actions/collection";

const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_COLLECTIONS: {
      return {
        ...state,
        list: action.newCollectionsValue,
      };
    }
    default:
      return state;
  }
};

export default reducer;
