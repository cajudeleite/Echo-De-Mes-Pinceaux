import { SET_STATUS } from "../actions/status";

const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STATUS: {
      return {
        ...state,
        list: action.newStatusValue,
      };
    }
    default:
      return state;
  }
};

export default reducer;
