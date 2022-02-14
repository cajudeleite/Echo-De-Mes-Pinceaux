import { SET_TECHNIQUES } from "../actions/technique";

const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TECHNIQUES: {
      return {
        ...state,
        list: action.newTechniquesValue,
      };
    }
    default:
      return state;
  }
};

export default reducer;
