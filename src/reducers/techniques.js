import { SET_TECHNIQUES, SET_TECHNIQUE_NAME } from "../actions/technique";

const initialState = {
  list: [],
  techniqueName: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TECHNIQUES: {
      return {
        ...state,
        list: action.newTechniquesValue,
      };
    }
    case SET_TECHNIQUE_NAME: {
      return {
        ...state,
        techniqueName: action.techniqueName,
      };
    }
    default:
      return state;
  }
};

export default reducer;
