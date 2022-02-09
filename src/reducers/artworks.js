import { SET_ARTWORKS } from "../actions/artwork";

const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ARTWORKS: {
      return {
        ...state,
        list: action.array,
      };
    }
    default:
      return state;
  }
};

export default reducer;
