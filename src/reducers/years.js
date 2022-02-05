import { SET_YEARS } from "../actions/year";

const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_YEARS: {
      return {
        ...state,
        list: action.newYearsValue,
      };
    }
    default:
      return state;
  }
};

export default reducer;
