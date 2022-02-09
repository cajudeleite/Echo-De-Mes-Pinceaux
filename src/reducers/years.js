import { SET_YEARS, SET_YEAR_NAME } from "../actions/year";

const initialState = {
  list: [],
  yearName: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_YEARS: {
      return {
        ...state,
        list: action.newYearsValue,
      };
    }
    case SET_YEAR_NAME: {
      return {
        ...state,
        yearName: action.yearName,
      };
    }
    default:
      return state;
  }
};

export default reducer;
